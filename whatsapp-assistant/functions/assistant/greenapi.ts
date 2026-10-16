// Minimal Green API client (https://green-api.com/en/docs/api/).

const API_URL = (Deno.env.get("GREEN_API_URL") ?? "https://api.green-api.com").replace(/\/$/, "");
const INSTANCE = Deno.env.get("GREEN_API_ID_INSTANCE") ?? "";
const TOKEN = Deno.env.get("GREEN_API_TOKEN") ?? "";

const MAX_LEN = 3500; // keep well under WhatsApp's per-message limit

export async function sendWhatsApp(chatId: string, message: string): Promise<void> {
  for (const chunk of split(message)) {
    const res = await fetch(`${API_URL}/waInstance${INSTANCE}/sendMessage/${TOKEN}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chatId, message: chunk }),
    });
    const body = await res.json().catch(() => ({}));
    if (!res.ok || !body?.idMessage) {
      throw new Error(`Green API sendMessage failed (${res.status}): ${JSON.stringify(body)}`);
    }
  }
}

function split(text: string): string[] {
  if (text.length <= MAX_LEN) return [text];
  const out: string[] = [];
  let rest = text;
  while (rest.length > MAX_LEN) {
    let cut = rest.lastIndexOf("\n", MAX_LEN);
    if (cut < MAX_LEN / 2) cut = MAX_LEN;
    out.push(rest.slice(0, cut));
    rest = rest.slice(cut).trimStart();
  }
  if (rest) out.push(rest);
  return out;
}

export type IncomingText = { idMessage: string; chatId: string; text: string } | { idMessage: string; chatId: string; unsupported: string };

/** Extracts the text of an incoming message webhook, or null for other webhook types. */
export function parseIncoming(body: any): IncomingText | null {
  if (body?.typeWebhook !== "incomingMessageReceived") return null;
  const idMessage = String(body.idMessage ?? "");
  const chatId = String(body.senderData?.chatId ?? "");
  const md = body.messageData ?? {};
  const text =
    md.textMessageData?.textMessage ??
    md.extendedTextMessageData?.text ??
    (md.typeMessage === "quotedMessage" ? md.extendedTextMessageData?.text : undefined);
  if (typeof text === "string" && text.trim()) return { idMessage, chatId, text: text.trim() };
  return { idMessage, chatId, unsupported: String(md.typeMessage ?? "unknown") };
}

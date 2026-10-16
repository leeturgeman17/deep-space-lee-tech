// Israel-time helpers. Everything is stored in UTC; Lee thinks in Asia/Jerusalem.

export const TZ = "Asia/Jerusalem";

export function formatIsrael(d: Date): string {
  return new Intl.DateTimeFormat("he-IL", {
    timeZone: TZ,
    weekday: "long",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(d);
}

/** ISO string with the Israel UTC offset, e.g. 2026-10-16T09:00:00+03:00 */
export function isoIsrael(d: Date): string {
  const p = parts(d);
  const off = offsetMinutes(d);
  const sign = off >= 0 ? "+" : "-";
  const a = Math.abs(off);
  return `${p.year}-${pad(p.month)}-${pad(p.day)}T${pad(p.hour)}:${pad(p.minute)}:00${sign}${pad(Math.floor(a / 60))}:${pad(a % 60)}`;
}

/** Next occurrence of a recurring reminder, keeping the same Israel wall-clock time across DST. */
export function nextOccurrence(due: Date, recurrence: string, now: Date): Date | null {
  if (recurrence === "none") return null;
  let next = due;
  // Skip any occurrences that were missed (e.g. downtime) so we never burst-send.
  for (let i = 0; i < 1000 && next <= now; i++) {
    const p = parts(next);
    let { year, month, day } = p;
    if (recurrence === "daily") day += 1;
    else if (recurrence === "weekly") day += 7;
    else if (recurrence === "monthly") month += 1;
    else if (recurrence === "weekdays") {
      // Israeli work week: Sunday-Thursday.
      do {
        day += 1;
        const dow = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
        if (dow <= 4) break;
      } while (true);
    } else return null;
    next = fromIsraelWallClock(year, month, day, p.hour, p.minute);
  }
  return next;
}

function fromIsraelWallClock(y: number, mo: number, d: number, h: number, mi: number): Date {
  // Normalise overflow (e.g. day 32) through Date.UTC, then correct for the zone offset.
  const guess = new Date(Date.UTC(y, mo - 1, d, h, mi));
  let result = new Date(guess.getTime() - offsetMinutes(guess) * 60_000);
  // Second pass handles the hours right around a DST switch.
  result = new Date(guess.getTime() - offsetMinutes(result) * 60_000);
  return result;
}

function parts(d: Date) {
  const f = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ,
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(d);
  const get = (t: string) => Number(f.find((x) => x.type === t)!.value);
  return { year: get("year"), month: get("month"), day: get("day"), hour: get("hour") % 24, minute: get("minute") };
}

function offsetMinutes(d: Date): number {
  const name = new Intl.DateTimeFormat("en-US", { timeZone: TZ, timeZoneName: "longOffset" })
    .formatToParts(d)
    .find((x) => x.type === "timeZoneName")!.value; // "GMT+03:00"
  const m = name.match(/GMT([+-])(\d{2}):?(\d{2})?/);
  if (!m) return 0;
  const v = Number(m[2]) * 60 + Number(m[3] ?? 0);
  return m[1] === "-" ? -v : v;
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}



# תוכנית שיפור UI/UX כוללת לאתר LeeTech

## סקירת המצב הקיים
האתר בנוי כדף נחיתה RTL עם רקע אפור אחיד (45% lightness), כרטיסי glass-card, גרדיאנט כתום-נחושת, ואנימציות framer-motion בסיסיות. יש מקום משמעותי לשדרוג בכל ארבעת הכיוונים שבחרת.

---

## 1. טקסטורות ועומק לרקע

**רקע עם טקסטורת בטון/noise**: הוספת שכבת noise-pattern עדינה מעל הרקע האפור באמצעות CSS pseudo-element עם SVG inline, שנותנת תחושת חומר אמיתי במקום צבע שטוח.

**הפרדה בין סקשנים**: כל סקשן שני יקבל גוון אפור שונה במעט (כהה/בהיר יותר ב-3-5%) עם מעבר אלכסוני (diagonal divider) ב-CSS clip-path, במקום גבולות ישרים.

**אפקט vignette**: הוספת צל עדין בפינות המסך שנותן עומק צילומי.

---

## 2. אנימציות וחוויה אינטראקטיבית

**Scroll-triggered parallax**: כותרות סקשנים יזוזו בקצב שונה מהתוכן בעת גלילה (parallax קל בframer-motion useScroll).

**Hover effects חזקים יותר לכרטיסים**: בנוסף לשינוי border קיים, הוספת translateY קל (-4px), הגדלת glow, ותנועת gradient רקע פנימית.

**Staggered reveal חדש**: במקום fadeInUp פשוט, הכרטיסים בסקשן המסלולים יופיעו עם אפקט "מניפה" - כל כרטיס מסתובב מעט תוך כדי הופעה.

**אנימציית כניסה לטקסט**: כותרות ראשיות עם אפקט "typewriter" או reveal מילה-מילה בגלילה.

**Magnetic cursor effect**: כפתור ה-CTA הראשי ימשוך מעט לכיוון הסמן כשמתקרבים אליו.

---

## 3. עיצוב הכרטיסים והסקשנים

**שדרוג glass-card**: הוספת inner glow עדין, שינוי ה-blur מ-20px ל-24px, border gradient (לא רק צבע אחיד), ו-subtle reflection בחלק העליון של הכרטיס.

**כרטיסי "למה LeeTech"**: מעבר מגריד 2x2 שטוח לעיצוב עם אייקון גדול יותר, separator עדין, ו-highlight strip בצד ימין של כל כרטיס.

**סקשן Express Services**: שדרוג מכרטיסים קטנים לכרטיסים עם מעבר צבע gradient border, אפקט shimmer על hover, ומעט יותר מרחב פנימי.

**סקשן Stats**: הוספת dividers אנכיים עדינים בין הסטטיסטיקות בדסקטופ, ו-pulsing glow עדין סביב המספרים.

**טסטימוניאלס**: הוספת תמונת פרופיל placeholder גדולה יותר עם ring gradient, וציטוט עם typography מובחנת יותר (italic, גודל גדול יותר).

---

## 4. צבעים וטיפוגרפיה

**הוספת צבע שני משני**: גוון כחול-אפור עדין (slate) לאלמנטים משניים, שיוצר ניגוד עם הכתום ומעשיר את הפלטה.

**טיפוגרפיה מדורגת**: כותרות ראשיות ב-font-weight 900 עם letter-spacing שלילי קל (-0.02em), כותרות משניות ב-700, וטקסט גוף ב-400 עם line-height מרווח יותר (1.7).

**Gradient text משודרג**: במקום gradient פשוט, הוספת shimmer animation עדין על כותרות copper-gradient-text - הברקה שעוברת על הטקסט בלופ.

**שדרוג צבעי tags**: במקום border+bg אחיד, כל קטגוריית tag תקבל גוון שונה מעט (וריאציות של הכתום - מזהב עד אדום-כתום).

---

## קבצים שישתנו

| קובץ | שינויים |
|-------|---------|
| `src/index.css` | טקסטורת noise, vignette, shimmer keyframe, section alternating bg, שיפור glass-card, משתני צבע חדשים |
| `tailwind.config.ts` | צבעי slate, אנימציות חדשות |
| `src/components/HeroSection.tsx` | אנימציית טקסט word-by-word, magnetic CTA |
| `src/components/ServicesSection.tsx` | staggered fan reveal, שדרוג hover |
| `src/components/ExpressServices.tsx` | shimmer effect, gradient border |
| `src/components/WhyLeeTech.tsx` | עיצוב כרטיסים משודרג עם highlight strip |
| `src/components/StatsStrip.tsx` | dividers, pulsing glow |
| `src/components/TestimonialsSection.tsx` | טיפוגרפיה מובחנת, avatar ring |
| `src/components/ProcessTimeline.tsx` | scroll parallax לכותרת |
| `src/components/ContactSection.tsx` | input focus animations |
| `src/components/Footer.tsx` | עומק ויזואלי, hover effects |

---

## גישת ביצוע

הביצוע יתבצע בשלבים כדי לא לעשות שינוי אחד גדול מדי. נתחיל מהבסיס (רקע + צבעים + טיפוגרפיה) ואז נתקדם לכרטיסים ואנימציות.


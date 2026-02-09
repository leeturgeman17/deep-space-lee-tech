
# כל השיפורים לדף הנחיתה של LeeTech

## סיכום השינויים

5 שיפורים משמעותיים שיהפכו את דף הנחיתה לפרימיום ומקצועי יותר:

---

## 1. סרטון וידאו ב-Hero Section
הטמעת קובץ הווידאו `video-project.mp4` שכבר קיים בפרויקט, מתחת לכותרת הראשית, בתוך מסגרת עם זוהר כתום ופינות מעוגלות. הסרטון יתנגן אוטומטית (muted, loop) ויוסיף תחושת דינמיות לחלק הראשון של העמוד.

## 2. סקשן "למה LeeTech"
סקשן חדש עם 4 יתרונות מפתח (מענה 24/7, שקיפות מלאה, טכנולוגיה מתקדמת, תוצאות מוכחות), כל אחד עם אייקון מונפש בכתום ניאון בתוך כרטיסי זכוכית קטנים. אנימציות כניסה מדורגות בגלילה.

## 3. כפתור WhatsApp צף
כפתור ירוק קבוע בפינה השמאלית-תחתונה שתמיד נגיש למבקר. כולל אנימציית pulse עדינה למשיכת תשומת לב ו-tooltip קטן.

## 4. אנימציית טעינה (Loader) פרימיום
מסך טעינה עם הלוגו של LeeTech שמופיע בכניסה לאתר -- הלוגו מתגלה עם אנימציה, ולאחר כ-2 שניות נעלם בהדרגה לטובת התוכן. נותן תחושת מותג פרימיום.

## 5. שיפור ה-Footer
הרחבת הפוטר עם אייקונים לרשתות חברתיות (Instagram, Facebook, LinkedIn), מספר טלפון, ואימייל. עיצוב בשורות מסודרות עם אייקוני Lucide בכתום.

---

## פרטים טכניים

### קבצים חדשים:
- `src/components/WhyLeeTech.tsx` -- סקשן יתרונות עם 4 כרטיסי glass
- `src/components/FloatingWhatsApp.tsx` -- כפתור WhatsApp צף
- `src/components/SiteLoader.tsx` -- אנימציית טעינה ראשונית

### קבצים שישתנו:
- `src/components/HeroSection.tsx` -- הוספת נגן וידאו מתחת לטקסט
- `src/components/Footer.tsx` -- הרחבה עם רשתות חברתיות ופרטי קשר
- `src/pages/Index.tsx` -- שילוב כל הקומפוננטות החדשות (WhyLeeTech אחרי StatsStrip, FloatingWhatsApp ו-SiteLoader ברמת הדף)

### סדר הסקשנים המעודכן:
```text
SiteLoader (overlay)
Header
HeroSection (+ Video)
ServicesSection
ExpressServices
StatsStrip
WhyLeeTech (חדש)
ProcessTimeline
FAQSection
TestimonialsSection
ContactSection
Footer
FloatingWhatsApp (fixed)
AccessibilityWidget (fixed)
```

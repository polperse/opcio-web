# OPCIO Group Website - Quick Reference Guide

## 🚀 Quick Start

This guide provides quick access to common tasks and references for maintaining and enhancing the OPCIO Group website.

---

## 📁 FILE STRUCTURE

```
opcio-web/
├── index.html                    ← Main consolidated page
├── consultoria.html              ← Service page
├── formacion.html                ← Service page
├── coaching.html                 ← Service page
├── evaluacion.html               ← Service page
├── cuerpos-especiales.html       ← Service page
├── sobre-nosotros.html           ← (Legacy - content in index.html)
├── equipo.html                   ← (Legacy - content in index.html)
├── contacto.html                 ← Contact page
├── recursos.html                 ← Resources page
│
├── css/
│   └── style.css                 ← Main stylesheet
│
├── js/
│   └── main.js                   ← Main JavaScript
│
├── images/
│   ├── opcio-logo.svg           ← Primary logo
│   ├── team/                     ← Team photos
│   ├── clients/                  ← Client/partner logos
│   └── ...                       ← Other images
│
└── videos/                       ← Video assets
```

---

## 🎨 BRAND COLORS

### Primary Palette
```css
--primary: #5881C6;      /* Professional Blue */
--secondary: #95A1B8;    /* Gray-Blue */
--accent: #A4C3D9;       /* Light Blue */
--neutral: #334056;      /* Dark Blue-Gray */
--support: #CCD6EB;      /* Very Light Blue */
```

### Usage Guide
- **Headings**: `--neutral` or `--primary`
- **Body Text**: `--secondary`
- **Buttons**: Gradient from `--primary` to `--accent`
- **Backgrounds**: `--support` for subtle sections
- **Borders**: `--support` for card borders

### Gradient Formula
```css
background: linear-gradient(135deg, #5881C6, #A4C3D9);
```

---

## 🔤 TYPOGRAPHY

### Font Stack
```css
/* Display/Headers */
font-family: 'Montserrat', sans-serif;
weights: 600, 700, 800, 900

/* Body/Content */
font-family: 'Inter', sans-serif;
weights: 300, 400, 500, 600, 700
```

### Font Sizes (Tailwind)
- `text-5xl` or `text-6xl`: Hero headings
- `text-4xl`: Section headings
- `text-2xl` or `text-3xl`: Card titles
- `text-xl`: Subtitles, lead paragraphs
- `text-base` or `text-lg`: Body text
- `text-sm`: Fine print, captions

---

## 🧩 COMMON COMPONENTS

### Button (Primary)
```html
<a href="#" class="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-semibold hover:from-accent hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl">
    <span>Button Text</span>
    <i class="fas fa-arrow-right"></i>
</a>
```

### Button (Secondary)
```html
<a href="#" class="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all duration-300">
    <span>Button Text</span>
    <i class="fas fa-arrow-right"></i>
</a>
```

### Card (Service)
```html
<div class="group relative" data-aos="fade-up" data-aos-delay="100">
    <div class="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
    <div class="relative bg-white rounded-3xl p-8 shadow-lg border border-support hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
        <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
            <i class="fas fa-lightbulb text-primary text-2xl"></i>
        </div>
        <h3 class="text-xl font-display font-bold text-neutral mb-3">Card Title</h3>
        <p class="text-secondary mb-6 leading-relaxed">Card description text goes here.</p>
        <a href="#" class="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors group">
            Learn More 
            <i class="fas fa-arrow-right text-sm transform group-hover:translate-x-1 transition-transform"></i>
        </a>
    </div>
</div>
```

### Badge
```html
<span class="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
    <i class="fas fa-award"></i> Badge Text
</span>
```

### Section Header
```html
<div class="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
    <span class="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
        <i class="fas fa-lightbulb"></i> Section Label
    </span>
    <h2 class="text-4xl lg:text-5xl font-display font-extrabold text-neutral leading-tight">Section Heading</h2>
    <p class="text-secondary mt-4 text-lg">Section description or subtitle text.</p>
</div>
```

---

## 🔗 NAVIGATION STRUCTURE

### Main Navigation (index.html)
```html
<li><a href="#inicio" class="nav-link">Inicio</a></li>
<li><a href="#servicios" class="nav-link">Servicios</a></li>
<li><a href="#metodo" class="nav-link">Método</a></li>
<li><a href="#nosotros" class="nav-link">Nosotros</a></li>
<li><a href="#equipo" class="nav-link">Equipo</a></li>
<li><a href="#casos-exito" class="nav-link">Casos de Éxito</a></li>
<li><a href="#contacto" class="nav-link">Contacto</a></li>
```

### Service Pages Navigation
```html
<li><a href="index.html" class="nav-link">Inicio</a></li>
<li class="nav-dropdown">
    <a href="#servicios" class="nav-link">Servicios <i class="fas fa-chevron-down"></i></a>
    <ul class="nav-dropdown-menu">
        <li><a href="consultoria.html">Consultoría Organizacional</a></li>
        <li><a href="formacion.html">Formación a Medida</a></li>
        <li><a href="coaching.html">Coaching Ejecutivo</a></li>
        <li><a href="evaluacion.html">Evaluación de Talento</a></li>
        <li><a href="cuerpos-especiales.html">Cuerpos Especiales</a></li>
    </ul>
</li>
<li><a href="index.html#nosotros" class="nav-link">Nosotros</a></li>
<li><a href="index.html#equipo" class="nav-link">Equipo</a></li>
<li><a href="index.html#casos-exito" class="nav-link">Casos de Éxito</a></li>
<li><a href="index.html#contacto" class="nav-link">Contacto</a></li>
```

---

## 📊 KEY METRICS TO DISPLAY

### Trust Indicators
```
✓ 30+ Años de Experiencia (1995-2025)
✓ 500+ Proyectos Exitosos
✓ 200+ Empresas Transformadas
✓ 96% Índice de Satisfacción
```

### Case Study Metrics (Govern de Andorra)
```
✓ 45% Mejora en Eficiencia
✓ 200+ Funcionarios Formados
✓ 60% Aumento en Satisfacción
✓ 15 Departamentos Impactados
```

---

## 🎭 ANIMATION SETTINGS

### AOS (Animate On Scroll)
```javascript
AOS.init({
    duration: 1000,       // Animation duration in ms
    once: true,           // Animate only once
    offset: 100           // Trigger point (px from bottom)
});
```

### Common AOS Attributes
```html
data-aos="fade-up"              <!-- Fade in from bottom -->
data-aos="fade-left"            <!-- Fade in from right -->
data-aos="fade-right"           <!-- Fade in from left -->
data-aos-delay="100"            <!-- Delay in ms -->
data-aos-duration="800"         <!-- Override duration -->
```

### VanillaTilt Settings
```javascript
VanillaTilt.init(document.querySelectorAll('.group'), {
    max: 5,               // Max tilt angle
    speed: 400,           // Animation speed
    glare: true,          // Enable glare effect
    'max-glare': 0.1      // Max glare opacity
});
```

---

## 📱 RESPONSIVE BREAKPOINTS

```css
/* Tailwind Breakpoints */
sm:   640px   /* Small devices */
md:   768px   /* Medium devices */
lg:   1024px  /* Large devices */
xl:   1280px  /* Extra large */
2xl:  1536px  /* 2X Extra large */
```

### Usage Examples
```html
<!-- Stack on mobile, 2 columns on tablet, 4 on desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<!-- Hide on mobile, show on tablet+ -->
<div class="hidden md:block">

<!-- Full width mobile, half on desktop -->
<div class="w-full lg:w-1/2">
```

---

## 🔍 SEO CHECKLIST

### Essential Meta Tags
```html
<title>Page Title - OPCIO Group</title>
<meta name="description" content="150-160 character description">
<meta name="keywords" content="keyword1, keyword2, keyword3">
<link rel="canonical" href="https://opciogroup.com/page.html">
```

### Open Graph (Social Sharing)
```html
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Description">
<meta property="og:image" content="https://opciogroup.com/images/og-image.jpg">
<meta property="og:url" content="https://opciogroup.com/page.html">
<meta property="og:type" content="website">
```

### Schema.org Markup
```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Service Name",
    "provider": {
        "@type": "Organization",
        "name": "OPCIO Group"
    },
    "description": "Service description"
}
</script>
```

---

## 📞 CONTACT INFORMATION

### Company Details
```
Name: OPCIO Group
Address: C/ Baixada del Molí, 2, 2n 4a
City: Andorra la Vella
Postal Code: AD500
Country: Andorra
Phone: +376 805 151
Email: opcio@opciogroup.com
```

### Social Media
```
LinkedIn: [Company Page URL]
YouTube: [Channel URL]
```

### Office Hours
```
Monday - Friday: 9:00 - 18:00
Saturday - Sunday: Closed
```

---

## 🛠️ COMMON TASKS

### Adding a New Team Member
1. Add photo to `/images/team/`
2. Open `index.html`
3. Find `<!-- Team Section -->`
4. Copy existing team member `<div>` structure
5. Update: name, title, description, photo path
6. Save and test

### Adding a New Case Study
1. Find `<!-- Success Stories Section -->` in `index.html`
2. Copy existing case study card structure
3. Update: company name, industry badge, description, metrics
4. Choose appropriate color scheme (primary/teal/green)
5. Add logo to `/images/clients/` if available
6. Save and test

### Updating Colors Globally
1. Open `css/style.css`
2. Find CSS variable definitions:
   ```css
   :root {
       --primary: #5881C6;
       --secondary: #95A1B8;
       /* etc. */
   }
   ```
3. Update values
4. Test across all pages

### Adding a New Service
1. **Create service page** (copy from existing)
2. **Update navigation** in all pages:
   ```html
   <li><a href="new-service.html">New Service</a></li>
   ```
3. **Add service card** to index.html #servicios section
4. **Update footer** service links
5. Test all links

---

## 🎨 ICON LIBRARY

### FontAwesome Icons Used
```html
<!-- Common Icons -->
<i class="fas fa-lightbulb"></i>        <!-- Services -->
<i class="fas fa-graduation-cap"></i>   <!-- Education -->
<i class="fas fa-user-tie"></i>         <!-- Coaching -->
<i class="fas fa-chart-line"></i>       <!-- Analytics -->
<i class="fas fa-cogs"></i>             <!-- Settings/Process -->
<i class="fas fa-users"></i>            <!-- Team -->
<i class="fas fa-trophy"></i>           <!-- Success -->
<i class="fas fa-check-circle"></i>     <!-- Checkmark -->
<i class="fas fa-arrow-right"></i>      <!-- CTA Arrow -->
<i class="fas fa-envelope"></i>         <!-- Email -->
<i class="fas fa-phone"></i>            <!-- Phone -->
<i class="fas fa-map-marker-alt"></i>   <!-- Location -->
<i class="fab fa-linkedin-in"></i>      <!-- LinkedIn -->
<i class="fab fa-youtube"></i>          <!-- YouTube -->
```

### Finding New Icons
- Visit: https://fontawesome.com/icons
- Search for concept
- Copy class name
- Use format: `<i class="fas fa-icon-name"></i>`

---

## 📝 CONTENT GUIDELINES

### Tone of Voice
- **Professional** but **approachable**
- **Confident** but **not arrogant**
- **Expert** but **understandable**
- **Warm** but **credible**

### Writing Style
- Short paragraphs (2-3 sentences)
- Bullet points for lists
- Active voice preferred
- Clear, specific language
- Avoid jargon unless necessary

### Headline Formula
```
[Action Verb] + [Benefit/Outcome]
Examples:
- "Transformamos el potencial en rendimiento"
- "Desarrollamos líderes preparados para el futuro"
- "Optimizamos procesos para mejorar resultados"
```

---

## 🚨 TROUBLESHOOTING

### Navigation Links Not Working
- Check href format: `index.html#section` from other pages
- Verify section ID matches: `<section id="section">`
- Test with browser console for errors

### Animations Not Playing
- Check AOS library is loaded: `<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>`
- Verify initialization in footer: `AOS.init()`
- Check `data-aos` attributes are correct

### Mobile Menu Not Opening
- Verify hamburger has correct class: `.nav-toggle`
- Check `main.js` is loaded
- Look for JavaScript errors in console
- Test CSS media queries

### Images Not Loading
- Check file path is correct
- Verify file extension matches (case-sensitive on servers)
- Look for 404 errors in Network tab
- Ensure images are in `/images/` directory

---

## 📦 EXTERNAL LIBRARIES

### CDN Links (Current)
```html
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- FontAwesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- AOS Animations -->
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

<!-- VanillaTilt -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.2/vanilla-tilt.min.js"></script>

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
```

---

## 🔒 SECURITY NOTES

### Form Validation
- All required fields marked with `required` attribute
- Email field uses `type="email"` for validation
- Privacy checkbox required before submission
- Server-side validation recommended

### Privacy Compliance
- Privacy policy link in footer
- Form consent checkbox
- Terms of use link
- Cookie notice recommended

---

## 📈 PERFORMANCE TIPS

### Image Optimization
```bash
# Recommended image sizes:
- Hero images: 1920x1080px (max 500KB)
- Team photos: 400x400px (max 100KB)
- Partner logos: 200px wide (max 50KB)
- Icons: SVG format preferred
```

### Loading Optimization
```html
<!-- Lazy load images -->
<img src="image.jpg" loading="lazy" alt="Description">

<!-- Preload critical resources -->
<link rel="preload" href="main.css" as="style">

<!-- Defer non-critical JavaScript -->
<script src="script.js" defer></script>
```

---

## 🎯 CONVERSION OPTIMIZATION

### CTA Best Practices
✓ Use action verbs: "Reserva", "Descubre", "Solicita"
✓ Create urgency: "Consulta Gratuita", "Agenda Hoy"
✓ Show value: "Sin Compromiso", "Resultados Garantizados"
✓ Use contrast colors
✓ Make buttons large enough (min 48px height)

### Form Optimization
✓ Keep fields minimal (name, email, message)
✓ Mark optional fields clearly
✓ Provide clear error messages
✓ Thank you page after submission
✓ Email confirmation to user

---

## 📊 ANALYTICS SETUP

### Google Analytics 4 (Recommended)
```html
<!-- Global site tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Events to Track
- Page views
- CTA clicks
- Form submissions
- Scroll depth
- Video plays
- Phone/email clicks
- Service page visits

---

## 🔄 UPDATE CHECKLIST

### Before Making Changes
- [ ] Backup current version
- [ ] Test locally if possible
- [ ] Document changes
- [ ] Create restore point

### After Making Changes
- [ ] Test on desktop
- [ ] Test on mobile
- [ ] Test all links
- [ ] Check forms work
- [ ] Validate HTML
- [ ] Check load speed
- [ ] Review on multiple browsers

---

## 📞 QUICK CONTACTS

### Support Resources
- **Tailwind Docs**: https://tailwindcss.com/docs
- **FontAwesome Icons**: https://fontawesome.com/icons
- **AOS Animation**: https://michalsnik.github.io/aos/
- **Google Fonts**: https://fonts.google.com/

### Testing Tools
- **HTML Validator**: https://validator.w3.org/
- **Page Speed**: https://pagespeed.web.dev/
- **Mobile Test**: https://search.google.com/test/mobile-friendly
- **Schema Validator**: https://validator.schema.org/

---

## 🎓 LEARNING RESOURCES

### Recommended Reading
- **Tailwind CSS Documentation**
- **FontAwesome Icon Reference**
- **Web Accessibility Guidelines (WCAG)**
- **Google Analytics Academy**

### Video Tutorials
- Tailwind CSS crash course
- AOS animations tutorial
- Responsive design principles
- Form optimization techniques

---

**Document Version**: 1.0  
**Last Updated**: October 10, 2025  
**Maintained by**: OPCIO Group Web Team  

---

## 🏁 FINAL REMINDERS

1. **Always test changes** before going live
2. **Keep backups** of working versions
3. **Document modifications** for future reference
4. **Monitor performance** regularly
5. **Update content** to keep it fresh
6. **Respond to inquiries** promptly
7. **Review analytics** monthly

**For detailed documentation, see:**
- `WEBSITE_REVIEW_AND_IMPROVEMENTS.md` (Technical details)
- `COMPLETION_SUMMARY.md` (Project overview)

---

✨ **Happy maintaining!** ✨


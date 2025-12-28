# 📞 Contact Section – RTech Computer

A modern, responsive **Contact Us section** built using **HTML & Tailwind CSS**, featuring a **WhatsApp contact form** and **Google Map embed**.  
This section is optimized for **mobile-first design** with clean UI and smooth animations.

---

## ✨ Features

- 📱 **Mobile-first responsive layout**
  - Mobile: **Form first → Map second**
  - Desktop: **Map left → Form right**
- 🎨 Gradient background with clean card UI
- 🧊 Glassmorphism form card (`bg-white/80 + backdrop-blur`)
- 🗺️ Embedded **Google Maps**
- 💬 WhatsApp contact form
- 🎞️ Smooth scroll animations using **AOS**
- ⚡ Built entirely with **Tailwind CSS utility classes**
- 🧩 No external UI framework required

---

## 🧩 Layout Behavior

| Screen Size | Layout Order |
|------------|--------------|
| 📱 Mobile   | Form → Map |
| 💻 Desktop | Map → Form |

This is achieved using Tailwind’s responsive `order` utilities:

```html
order-1 lg:order-2
order-2 lg:order-1

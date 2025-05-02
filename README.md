# Interview Project

This project is a pixel-perfect implementation of a Figma design using React, Vite, and Tailwind CSS. It was built as part of an interview assessment, focusing on responsive design, clean code structure, and performance optimization.

---

## 🛠️ Technologies Used

- **React** – Front-end JavaScript library
- **Vite** – Fast build tool and development server
- **Tailwind CSS** – Utility-first CSS framework
- **TypeScript** – Optional, if used for type safety

---

## 🔧 How to Set Up the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/triliun/skatcher.git
   cd skatcher
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Build for production:

   ```bash
   npm run build
   ```

5. Open Browser:
   ```bash
   http://localhost:3000
   ```

---

## 🎨 Tailwind CSS Configuration Details

- Tailwind is configured via `tailwind.config.js`.
- `content` paths ensure that unused CSS is purged:
   ```js
   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"];
   ```
- Utility classes are used for layout, spacing, typography, and color.
- Responsive design is implemented using Tailwind's `sm:`, `md:`, `lg:`, and `xl:` modifiers.
- Final CSS bundle is optimized to ~16 KB (gzip).

---

## 🔎 Design Decisions & Challenges

- Carefully replicated the Figma design to match layout and spacing.
- Ensured responsiveness across mobile, tablet, and desktop.
- Modularized components for better reusability and maintenance.
- Used semantic HTML elements and accessible markup.

---

## 📂 Project Structure

```
murni/
├── public/
├── src/
│   ├── components/
│   ├── types/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── README.md
```

---

## ✅ Project Status

- [x] Source code uploaded to GitHub
- [x] Production build completed successfully
- [x] Deployment completed on Vercel
- [x] README file completed

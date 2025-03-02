# Angular Product Catalogue

## 🚀 Overview
This is a **Product Catalogue Web App** built with **Angular 19**. The app allows users to browse categories, view products, and access detailed product information. It integrates with a **GraphQL API** and supports **light/dark mode**.

## 📌 Features
- **Home Page**: Displays categories with product counts.
- **Category View**: Lists all products under a selected category.
- **Product Detail Page**:
  - Shows product details (name, price, description, image).
  - Includes a **countdown timer** (RxJS) for next-day delivery.
  - Displays **3 related products** from the same category.
- **Search Functionality**: Users can search for products dynamically.
- **GraphQL API**: Fetches data from a headless CMS.
- **Dark Mode Support**: Toggle between light and dark themes.
- **Responsive Design**: Uses CSS Grid, Flexbox, and SCSS for styling.

## 🛠️ Tech Stack
- **Angular 19** (Standalone Components)
- **Apollo GraphQL** (for API requests)
- **SCSS** (for styling)
- **RxJS** (for state management and countdown timer)
- **TypeScript** (strongly typed data models)
- **NgIcons** (for icons)

## 🔧 Installation & Setup
1. **Clone the Repository**:
   ```sh
   git clone https://github.com/thsoliveira/catalogue.git
   cd catalogue
   ```

2. **Install Dependencies**:
   ```sh
   npm install
   ```

3. **Start the Development Server**:
   ```sh
   ng serve
   ```

4. **Open in Browser**:
   Navigate to `http://localhost:4200/`.

## 🌟 Usage
- Browse product **categories**.
- Click on a category to view **products**.
- Select a product to see its **details** and **related products**.
- Use the **search bar** to find products.
- Toggle **dark/light mode** using the button in the header.

## 🚀 Deployment
To build for production:
```sh
ng build --configuration=production
```

To deploy, use **Firebase, Vercel, Netlify, or AWS**.

## 🎯 Future Enhancements
- **User Authentication** (Login/Signup with JWT)
- **Add to Cart & Checkout**

## 📩 Contact
For questions or suggestions, contact **Thais Oliveira** at [borgesoliveira.thais@gmail.com](mailto:borgesoliveira.thais@gmail.com).

---
Happy Coding! 🎉


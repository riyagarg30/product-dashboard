# 🛍 Product Dashboard

A **React + TypeScript** product management dashboard that fetches products from an external API and allows users to search, sort, add, and delete products.

---

## 🚀 Features

- Fetch products from external API
- Search products by title
- Sort products by price (ascending/descending)
- Add new products locally
- Delete products
- Loading and error handling states
- Clean component-based architecture
- Custom React hooks
- Fully typed with TypeScript
- Responsive CSS layout

---

## 🛠 Tech Stack

- React
- TypeScript
- Fetch API
- Custom Hooks
- CSS (component-scoped styling)
- Create React App

---

## 📁 Project Structure
src/
├── components/
│ ├── ProductCard.tsx
│ ├── SearchBar.tsx
│ ├── AddProductForm.tsx
├── hooks/
│ └── useProducts.ts
├── services/
│ └── productService.ts
├── types/
│ └── product.ts
├── styles/
│ ├── App.css
│ ├── ProductCard.css
│ ├── SearchBar.css
│ └── AddProductForm.css
├── App.tsx


---

## 🧠 Architecture Overview

### 1️⃣ Separation of Concerns

- API logic lives inside `services/`
- Business logic handled via custom hook `useProducts`
- UI components are reusable and stateless where possible
- Types are centralized inside `types/`

### 2️⃣ Custom Hook (`useProducts`)

Encapsulates:

- Data fetching
- Loading state
- Error handling
- Product state management

This keeps components clean and focused on UI rendering.

### 3️⃣ Type Safety

All components and services are fully typed using TypeScript.

Example:

```ts
export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};
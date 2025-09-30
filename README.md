# 🍕 Fast React Pizza Co.

A modern, responsive pizza ordering application built with React, featuring real-time order tracking and seamless user experience.

## ✨ Features

- **Menu Browsing** - View available pizzas with images, ingredients, and prices
- **Order Management** - Create and track orders with unique order IDs
- **Order Search** - Look up any order by ID for real-time status updates
- **Cart System** - Add pizzas to cart and manage quantities (Redux integration coming soon)
- **Priority Orders** - Option to mark orders as priority for faster delivery
- **Form Validation** - Phone number validation and error handling
- **Geolocation** - Address lookup using browser geolocation API
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Loading States** - Smooth loading indicators during data fetching

## 🛠️ Tech Stack

- **React 18** - UI library
- **React Router v6** - Client-side routing with data loading
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast build tool and dev server
- **REST API** - Backend integration for menu and orders

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/amirtavass/fast-react-pizza.git
cd fast-react-pizza
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📁 Project Structure

```
src/
├── features/
│   ├── cart/          # Cart components and logic
│   ├── menu/          # Menu display and items
│   ├── order/         # Order creation and tracking
│   └── user/          # User management
├── services/          # API calls
│   ├── apiRestaurant.js
│   └── apiGeocoding.js
├── ui/                # Reusable UI components
│   ├── AppLayout.jsx
│   ├── Button.jsx
│   ├── Header.jsx
│   └── Loader.jsx
├── utils/             # Helper functions
│   └── helpers.js
├── App.jsx            # Main app with routing
└── main.jsx           # Entry point
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🔜 Roadmap

- [ ] **Redux Toolkit Integration** - Global state management for cart and user data
- [ ] **User Authentication** - Save orders and preferences
- [ ] **Payment Integration** - Online payment processing
- [ ] **Order History** - View past orders
- [ ] **Favorites** - Save favorite pizza combinations
- [ ] **Real-time Updates** - WebSocket integration for live order tracking
- [ ] **Dark Mode** - Theme switching capability

## 📝 API

This project uses the [Fast React Pizza API](https://react-fast-pizza-api.onrender.com/api) for:

- Fetching menu items
- Creating orders
- Retrieving order details
- Updating order priority

### Test Order ID

Use `IIDSAT` to test the order tracking feature.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Amir Tavas**

- GitHub: [@amirtavass](https://github.com/amirtavass)

---

Made with ❤️ and React

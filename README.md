# Sales Republic E-Commerce

A full-stack e-commerce website for selling electronics built with modern web technologies.

## Tech Stack

### Frontend
- **Framework**: Next.js 14
- **Language**: TypeScript + React
- **Styling**: Tailwind CSS
- **Payment**: Stripe
- **HTTP Client**: Axios

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **Payment**: Stripe

## Features

✅ **Product Management**
- Browse electronics products
- Filter by category
- Search products
- Detailed product pages

✅ **Shopping Cart**
- Add/remove items
- Update quantities
- Persistent cart state
- Order summary

✅ **Checkout & Payments**
- Secure checkout process
- Stripe integration
- Order creation
- Payment tracking

✅ **Order Management**
- View order history
- Track order status
- Order details

✅ **Admin Dashboard**
- Add products
- Manage inventory
- View statistics
- Category management

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- MongoDB (local or cloud)
- Stripe Account

### Backend Setup

1. Navigate to backend directory:
```bash
cd sales-republic-backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/sales-republic
STRIPE_SECRET_KEY=sk_test_your_key_here
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

4. Start the server:
```bash
npm run dev
```

Server runs at: `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd sales-republic-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
```

4. Start the development server:
```bash
npm run dev
```

App runs at: `http://localhost:3000`

## Database Setup

### MongoDB Local Installation
Download from: https://www.mongodb.com/try/download/community

### MongoDB Atlas (Cloud)
1. Create account: https://www.mongodb.com/cloud/atlas
2. Create cluster
3. Get connection string
4. Update `MONGODB_URI` in backend `.env`

## Stripe Setup

1. Create account: https://stripe.com
2. Get API keys from Dashboard
3. Update `.env` files:
   - Backend: `STRIPE_SECRET_KEY`
   - Frontend: `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin)
- `PATCH /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Orders
- `GET /api/orders` - Get all orders
- `GET /api/orders/user/:userId` - Get user orders
- `POST /api/orders` - Create order
- `PATCH /api/orders/:id` - Update order status

### Users
- `POST /api/users/register` - Register user
- `POST /api/users/login` - Login user
- `GET /api/users/:id` - Get user profile

### Payments
- `POST /api/payments/create-intent` - Create Stripe payment intent

## Project Structure

```
sales-republic-frontend/
├── src/
│   ├── pages/
│   │   ├── index.tsx (Home)
│   │   ├── products/
│   │   │   ├── index.tsx (Products listing)
│   │   │   └── [id].tsx (Product detail)
│   │   ├── cart/
│   │   │   └── index.tsx (Shopping cart)
│   │   ├── checkout/
│   │   │   └── index.tsx (Checkout)
│   │   ├── orders/
│   │   │   └── index.tsx (Order history)
│   │   ├── admin/
│   │   │   └── index.tsx (Admin dashboard)
│   │   └── _app.tsx (App wrapper)
│   ├── context/
│   │   ├── CartContext.tsx (Cart state)
│   │   └── StripeContext.tsx (Stripe setup)
│   ├── hooks/
│   │   └── useCart.ts (Cart hook)
│   └── styles/
│       └── globals.css

sales-republic-backend/
├── src/
│   ├── models/
│   │   ├── Product.js
│   │   ├── Order.js
│   │   └── User.js
│   ├── routes/
│   │   ├── products.js
│   │   ├── orders.js
│   │   ├── users.js
│   │   ├── payments.js
│   │   └── admin.js
│   └── server.js
```

## Getting Started

1. Clone both repositories
2. Set up MongoDB
3. Create Stripe account
4. Follow Backend & Frontend setup instructions
5. Open `http://localhost:3000` in browser

## Testing

### Sample Product Data
You can add sample products through the admin dashboard or API:

```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "iPhone 15 Pro",
    "description": "Latest iPhone with advanced features",
    "price": 999,
    "category": "Phones",
    "image": "https://example.com/iphone15.jpg",
    "stock": 50
  }'
```

## Deployment

### Frontend (Vercel)
1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy

### Backend (Heroku/Railway)
1. Push to GitHub
2. Connect to platform
3. Add environment variables
4. Deploy

## License

MIT

## Support

For issues or questions, create an issue in the repository.

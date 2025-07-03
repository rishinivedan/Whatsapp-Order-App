# 📦 WhatsApp Order Management App

A full-stack app that automates order tracking from WhatsApp messages.  
Built using **Twilio**, **Express.js**, **Prisma**, **PostgreSQL**, and **React**.

> 📽️ [Watch Demo Video](https://drive.google.com/file/d/1n2qeJ_LSA4FDnknylM1IOYOzwpfumAGH/view?usp=drive_link)

---

## 🔧 Features

- 📲 Receive formatted orders via WhatsApp using Twilio
- 📥 Automatically store orders in a PostgreSQL database
- 🖥️ View, track, and manage orders on a clean React UI
- ✅ Mark orders as completed or pending
- 🗑️ Delete unwanted orders
- ☁️ Built with Prisma ORM for database safety and flexibility

---

## 🗂️ Tech Stack

| Layer         | Tools                             |
|--------------|------------------------------------|
| Frontend      | React + Fetch API                 |
| Backend       | Node.js + Express                 |
| Database      | PostgreSQL (via Prisma ORM)       |
| Messaging     | Twilio WhatsApp API               |
| Tunneling     | Ngrok (for local webhook testing) |

---

## 🚀 Setup Instructions

### 1. Clone the Repo


git clone https://github.com/rishinivedan/Whatsapp-Order-App.git
cd Whatsapp-Order-App

### 2. Install dependancies
npm install

### 3. Create a .env File
DATABASE_URL=your_postgresql_database_url
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_ACCOUNT_SID=your_twilio_account_sid

### 4. Set Up Prisma and Migrate DB
npx prisma migrate dev --name init
npx prisma generate

### 5. Start the Backend Server
node server.js
The backend runs at http://localhost:3000.

🌐 Frontend Setup

### 6. Set Up the React Client
bash
cd client
npm install

### 7. Start the React App
bash
npm start
The frontend runs at http://localhost:3001.

📲 WhatsApp Integration

### 8. Expose Backend Using Ngrok
bash
ngrok http 3000

### 9. Set Twilio Webhook
Go to the Twilio Console > WhatsApp Sandbox > Configure Webhooks:
Set "WHEN A MESSAGE COMES IN" to:

https://abcd1234.ngrok.io/incoming-whatsapp
10. Send a WhatsApp Order
Send a message like this to your Twilio test number:

Indo Nets
1. Customer Name: Maheshwari Store
2. Code: 0.32
3. Mesh Size: 140mm
4. Depth: 130md
5. Selvage: 0.40 two mesh both side
6. Color: green
7. Piece weight: 5+5
8. Quantity: 3 bags
9. Order No: 8712
10. Rate: 460 inc gst
Selvage twiner
✨ UI Features
View all WhatsApp orders as cards

✅ Toggle switch to mark an order as "Done"

🗑️ Delete button to remove completed or incorrect orders

🔄 Refreshing fetches the latest from backend

📋 Optional Improvements
🔍 Filter by customer or company

📱 Make UI mobile-friendly

📤 Export orders to CSV or PDF

🔔 Add email notifications or delivery reports

📽 Demo Video
▶️ Watch on Google Drive

👤 Author
Rishi Nivedan
Built with ❤️ to help automate WhatsApp-based order workflows for small businesses.

Frontend hosted on https://vercel.com/rishinivedans-projects/v0-whatsapp-order-management
Backend hosted on https://whatsapp-order-app-lgw9.onrender.com




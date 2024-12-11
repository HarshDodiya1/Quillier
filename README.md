# 🌐 Quillier - A Modern Blogging Platform

<p align="center">
  <img src="https://age.apache.org/age-manual/master/_static/logo.png" width="30%" height="30%">
</p>

## 🚀 Project Overview
Quillier is a modern full-stack blogging platform built with the MERN stack. I created this blog application during my early days of learning web development. It was a project that helped me explore and understand some essential concepts of building full-stack web applications.


### 📌 Project Badges & Links

<p align="center">
  <a href="https://github.com/HarshDodiya1/Quillier/releases">
    <img src="https://img.shields.io/badge/Version-1.0.0-FFA500?labelColor=gray&style=flat"/>
  </a>
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/React-18.0.0-61DAFB?labelColor=gray&style=flat"/>
  </a>
  <a href="https://nodejs.org/">
    <img src="https://img.shields.io/badge/Node.js-18.x-339933?labelColor=gray&style=flat"/>
  </a>
  <br>
  <a href="https://quillier.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=for-the-badge&logo=vercel"/>
  </a>
</p>



## ✨ Key Features

- **🔐 User Authentication**: 
  - Secure Google Sign-In integration using Firebase
  - Role-based access control

- **📝 Rich Text Editing**: 
  - Interactive content creation with Quill editor
  - Intuitive and user-friendly writing experience

- **💬 Interactive Comments**: 
  - Real-time commenting system
  - Engage and interact with blog posts
  - Nested comment threads

- **🎨 Dynamic Theming**: 
  - Light and dark mode switching
  - Personalized user interface

- **👑 Role Management**: 
  - Admin privileges for comprehensive content management
  - Granular access controls

- **📱 Responsive Design**: 
  - Mobile-first approach
  - Tailwind CSS for adaptive layouts


## 🖼️ Application Preview

<p align="center">
  <img src="/img/age-01.png" width="80%" height="80%">
</p>

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 with Vite
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Authentication**: Firebase
- **Rich Text Editor**: Quill

### Backend
- **Runtime**: Node.js
- **Framework**: Express
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT
- **Password Security**: Bcrypt

## 🚀 Local Setup

### Prerequisites
- Node.js (18.x)
- npm or yarn
- MongoDB instance

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/HarshDodiya1/Quillier.git
   cd Quillier
   ```

2. **Install Dependencies**
   ```bash
   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install
   ```

3. **Configure Environment Variables**

   **Client (.env)**
   ```bash
   VITE_API_BASE_DEV=YOUR_SERVER_URL
   VITE_FIREBASE_API_KEY=YOUR_FIREBASE_APIKEY
   ```

   **Server (.env)**
   ```bash
   REACT_APP_API_URL_DEV=YOUR_FRONTEND_URL
   PORT=3000
   MONGO_URL=YOUR_MONGODB_CONNECTION_STRING
   JWT_SECRET=YOUR_JWT_SECRET_KEY
   ```

4. **Run Development Servers**
   ```bash
   # Start client
   cd client
   npm run dev

   # Start server (in another terminal)
   cd server
   npm run start
   ```

## 🌟 Project Journey

This blog application was more than just a coding project—it was a learning journey. As a budding web developer, I embraced challenges and transformed them into opportunities:

- **Learning Authentication**: Implementing Firebase Google Sign-In
- **Interactive Editing**: Mastering the Quill editor for rich text experiences
- **Design Flexibility**: Creating dynamic theme switching
- **Security First**: Developing role-based access controls
- **User Experience**: Building an intuitive admin dashboard

## 🤝 Contributing

Contributions are welcome! 

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

For major changes, please open an issue first to discuss proposed modifications.

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

Your Name - dodiyaharsh999@gmail.com

Project Link: [https://github.com/HarshDodiya1/Quillier](https://github.com/HarshDodiya1/Quillier)



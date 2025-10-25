# Job Portal with MERN Stack and Automation

A full-stack job portal application built using the MERN (MongoDB, Express.js, React, Node.js) stack with automated newsletter functionality.

## Features

- 👥 User Authentication (Register/Login)
- 👔 Job Posting and Management
- 📝 Job Applications
- 📊 User Dashboard
- 🔄 Profile Management
- 📨 Automated Newsletter System
- 🔐 Secure Password Management
- 📱 Responsive Design

## Tech Stack

### Frontend
- React.js
- Redux for state management
- React Router for navigation
- React Icons for UI elements
- Vite as build tool

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Cloudinary for image storage
- Automated cron jobs for newsletter

## Project Structure

```
project/
├── backend/
│   ├── automation/       # Cron jobs and automation scripts
│   ├── config/          # Environment configuration
│   ├── controllers/     # Request handlers
│   ├── database/        # Database connection
│   ├── middlewares/     # Custom middlewares
│   ├── models/          # Database schemas
│   ├── routes/          # API routes
│   └── utils/           # Helper functions
└── frontend/
    ├── public/          # Static files
    ├── src/
    │   ├── components/  # Reusable UI components
    │   ├── pages/       # Page components
    │   ├── store/       # Redux store and slices
    │   └── App.jsx      # Root component
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd MERN_Stack_Job_Portal_With_Automation
```

2. Install Backend Dependencies
```bash
cd backend
npm install
```

3. Install Frontend Dependencies
```bash
cd frontend
npm install
```

4. Configure Environment Variables
Create a `config.env` file in `backend/config/` with the following variables:
```env
PORT=4000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Running the Application

1. Start the Backend Server
```bash
cd backend
npm start
```

2. Start the Frontend Development Server
```bash
cd frontend
npm run dev
```

The application will be available at `http://localhost:5173` (or your configured port)

## Key Features Explained

### User Management
- Register and login functionality
- JWT-based authentication
- Profile management with image upload
- Password update capability

### Job Management
- Create, read, update, and delete job postings
- Job search and filtering
- Application submission and tracking
- Employer dashboard for managing job posts

### Automation Features
- Automated newsletter system
- Cron jobs for periodic tasks
- Email notifications

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- React Icons library
- Cloudinary for image management
- MongoDB Atlas for database hosting
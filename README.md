Zerodha Clone is a full-stack web application built to replicate key features of the Zerodha trading platform, one of India’s leading stock brokerage services. The project is designed to demonstrate practical skills in frontend development, backend development, database integration, and user authentication, making it an ideal portfolio project for web development and full-stack interviews.

The frontend is built using React.js, providing a responsive and dynamic user interface. TailwindCSS is used for styling, ensuring a clean and modern design. Users can interact with a simulated stock trading dashboard, view holdings, positions, and execute orders (BUY/SELL) with live-like data representation.

The backend is implemented using Node.js and Express.js, with MongoDB Atlas as the database. The backend handles all API routes for managing holdings, positions, and orders, as well as user authentication. JWT (JSON Web Tokens) and bcrypt are used for secure signup and login, with cookies for session management.

Environment variables are managed using a .env file for sensitive credentials such as the database URI and JWT secret, following best practices for security. The backend structure is modular, separating models, routes, and controllers for clarity and maintainability.

Key features include:

User Authentication: Secure signup and login with hashed passwords and JWT-based session management.

Portfolio Management: Users can view holdings, positions, and orders, with the ability to simulate stock trading operations.

Responsive Dashboard: Clean, interactive, and user-friendly UI for data display.

Full-stack Architecture: Seamless integration between frontend, backend, and database.

Environment Management: Secure configuration using .env for sensitive information.

Tech Stack:

Frontend: React.js, TailwindCSS

Backend: Node.js, Express.js

Database: MongoDB Atlas

Authentication: JWT, bcrypt

Version Control: Git & GitHub

Project Structure:

Zerodha-Clone/
│
├── backend/          # Node.js + Express backend
│   ├── models/       # MongoDB models
│   ├── routes/       # API and authentication routes
│   └── server.js     # Main server file
│
├── frontend/         # React frontend
│   ├── src/          # Components, pages, utilities
│   └── package.json
│
├── .env.example      # Sample environment variables
├── .gitignore
└── README.md


Setup Instructions:

Clone the repository:

git clone https://github.com/<your-username>/Zerodha-Clone.git
cd Zerodha-Clone


Backend setup:

cd backend
npm install
# create .env with PORT, MONGODB_URI, JWT_SECRET
npm start


Frontend setup:

cd frontend
npm install
npm start


Open in browser: http://localhost:3000

Future Enhancements:

Integration with real stock APIs for live pricing

Interactive charts and data visualization for portfolio analysis

Real-time notifications for market updates

Full deployment with HTTPS for production

Author:
Shivansh Gupta – B.Tech CSE | Full-Stack Web Developer | Portfolio Project

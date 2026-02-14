Job Portal Application

A full-stack Job Portal application where Recruiters can post jobs and Students/Job Seekers can apply by uploading resumes.
Built with modern MERN stack technologies.

Tech Stack
  Frontend
   React.js
   Axios
   CSS
  Backend
   Node.js
   Express.js
   MongoDb
   Mongoose
   JWT Authentication
   Bcrypt (password hashing)
   Nodemailer 

Features
  Recruiter
   Register / Login
   Post Job Listings
   Delete Job

  Job Seeker
   Register / Login
   Search & Filter Jobs

Authentication
  JWT-based authentication
  Role-based access (Recruiter / jobseeker)

Installation & Setup
BACKEND
1. Clone the Repository
2. Install Backend Dependencies
    cd backend
    npm install
3. PORT=3000
  JWT_SECRET=jwt_secret_key
  EMAIL_USER=Email_For_Nodemailer
  EMAIL_PASS=Password for nodemailer
  MONGODB_URI=Mongo-db-uri
4. Run Backend Server (node server.js)

   
 FRONTEND
 1. Run Frontend
  cd frontend
  npm install
  npm run dev

Security Features
1.Password hashing using Bcrypt
2.JWT token authentication
3.Role-based authorization


Author

Ayush Jagota
Final Year CSE Student
MERN Stack Developer

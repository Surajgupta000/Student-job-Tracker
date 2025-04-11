🎓 Student Job Tracker – Assignment Project
This project is a Student Job Tracker built as part of an assignment to showcase UI/UX skills, structured code practices, and feature implementation in a job-tracking context.

The focus of this project is entirely on the frontend UI, simulating how a student would track job applications across various stages — from applying to receiving an offer.

🌟 Feature Walkthrough
This application includes the following key features:

📝 Add New Job: Users can input job details such as company, role, and application status.

🔁 Update Job Details: Edit application info to reflect status changes or correct any data.

❌ Delete Job: Remove job entries easily if no longer relevant.

🔍 Search & Filter Jobs: Filter job applications by company, role, or status.

📊 Track Application Status: View all jobs sorted by their current progress (Applied, Interview, Offer, etc.)

📆 Sort by Date: Visually identify the latest job applications with ease.

Every interaction and UI decision was crafted with usability and clarity in mind — making it intuitive for any student user.

📁 Folder & File Structure Explanation
The frontend is structured for clarity and reusability. Here’s how the key files work:

/pages
Home.jsx – The main landing page for the job tracker. Contains the dashboard layout with filters and job cards.

NotFound.jsx – A fallback component for undefined routes.

/components
JobCard.jsx – A reusable card component that displays job info like company, role, date, and status.

InputField.jsx – A custom input component used in forms to ensure consistent design.

Button.jsx – A reusable styled button component for form submissions and actions.

Navbar.jsx – A simple top navigation bar for branding and navigation if extended.

/context
JobContext.jsx – Manages the global state of job data across components using Context API. Handles adding, editing, and deleting job entries in memory.

/api
jobs.jsx – A simulation of API call logic, handling mock functions for add, edit, delete, and fetch jobs. This is where backend integration would go in a full-stack app.

/styles
index.css / App.css – Contains overall layout, color scheme, and styling decisions to give the app a clean, student-friendly aesthetic.

Each file serves a clear purpose and avoids unnecessary complexity, keeping the structure easy to scale or hand over to other devs.

🧠 Thought Process & Approach
While approaching this assignment, I treated it as a real-world mini product.

I started by sketching the basic layout in my head — thinking about what a student needs most while tracking jobs. From there, I focused on creating a UI that’s both functional and visually clean.

The goal was:

To write modular, maintainable components

To use React Context API for simple state management (no Redux needed)

To prioritize clarity and accessibility in the user interface

Once the features were in place, I added minimal mock API logic to simulate real-world usage, allowing the app to be extended later into a full-stack version with backend integration.

This thought process helped me stay organized and build in a way that’s clean, testable, and presentable.

🤖 AI Tools Used (Responsibly)
ChatGPT (GPT-4) was used during development for:

Debugging UI logic

Generating placeholder data

Optimizing component breakdown

Reviewing filtering and sorting strategies

I made sure to manually review and implement everything. AI was used only as a support tool — not for writing complete solutions blindly.

🙋‍♂️ Author
Suraj
Frontend Developer & Full Stack Learner
Passionate about clean UI, problem-solving, and building useful apps!


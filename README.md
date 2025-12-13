# EcoNGC - Community Cleanliness & Urban Sustainability Platform

EcoNGC is a React-based web application for reporting urban issues, tracking community contributions, and promoting sustainable city practices. Users can submit complaints about garbage, illegal construction, broken public property, and road damage, contribute to cleanup drives, and track their contributions.

---

## Features

### Public Features
- Home Page with responsive banner and category cards
- Recent complaints (latest 6 issues)
- Community statistics: total users, issues resolved, issues pending
- Volunteer call-to-action

### Private Features (User Accounts)
- Add Issue: Add new issues that people are suffering from
- User authentication via Google and Email/Password
- My Issues: View and manage reported issues
- My Contributions: Track contributions and download PDF reports
- Issue Details: View detailed information and contribute to cleanup drives

### UI/UX Features
- Dark/Light mode toggle across all pages
- Responsive design for mobile, tablet, and desktop
- Modern interface using Tailwind CSS and DaisyUI
- Toast notifications for user actions

---

## Tech Stack

- Frontend: React, Tailwind CSS, DaisyUI, Swiper.js
- Backend: Node.js, Express.js, MongoDB
- Authentication: Firebase Auth (Google & Email/Password)
- Additional Libraries:
  - react-router-dom
  - sweetalert2
  - jspdf + jspdf-autotable
  - react-icons
  - react-toastify

---

## Project Structure
eco-ngc/
├─ src/
│  ├─ assets/          # Images and media
│  ├─ Components/      # Reusable components (Navbar, Footer, IssueCard, Banner, Category, ThemeToggle, CommunityExtras, Header, LatestIssues)
│  ├─ Context/         # AuthContext, AuthProvider, ThemeContext, ThemeProvider
│  ├─ Pages/           # Page components (Home, AllIssues, AddIssues, MyIssues, IssueDetails, MyContributions)
│  ├─ Routes/          # React Router configuration (Routes, PrivateRoute)
│  ├─ Firebase/        # Firebase configuration (firebase.init.js)
│  ├─ Layout/          # Layout of the project (Layout.jsx)
│  └─ App/             # Rendering Global Hub (App.css, main.jsx)
├─ .gitignore
├─ index.html
├─ .env                # Environment variables
├─ tailwind.config.js  # Tailwind configuration with DaisyUI themes
├─ package-lock.json
├─ package.json
├─ README.md
└─ vite.config.js


---

## Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/<your-username>/eco-ngc-bd.git
cd eco-ngc-bd-client
```
2. Install frontend dependencies
```bash
npm install
```
3. Run the forntednd
```bash
npm run dev
```

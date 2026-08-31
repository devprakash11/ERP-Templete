# School ERP

A responsive School ERP dashboard built with React, Vite, React Router, Tailwind CSS, Recharts and Lucide React.

## Run locally

Requirements: Node.js 22+ and npm.

```bash
git clone https://github.com/devprakash11/ERP-Templete.git
cd ERP-Templete
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

For a production build:

```bash
npm run build
npm run preview
```

## Demo login

- Email: `admin@school.com`
- Password: `admin123`

Authentication is currently local/demo authentication. It stores the signed-in demo user in `localStorage`; no backend or database is required to run the UI locally.

## Included modules

Dashboard, Students, Teachers, Staff, Classes, Sections, Subjects, Timetable, Marks Entry, Report Cards, Attendance, Fees, Gate Pass, Library, Transport, Inventory, Payroll, Reports, Users and Settings.

## Recent fixes

- Replaced the incompatible `createBrowserRouter` + `<Routes>` combination with `BrowserRouter` + declarative routes.
- Added protected routing and a stable local authentication flow.
- Fixed sidebar/header navigation and logout behavior.
- Removed the unavailable `react-icons` dependency usage.
- Added responsive desktop/mobile navigation behavior.
- Enabled Tailwind CSS v4 through the Vite plugin.
- Added a GitHub Actions production-build check.

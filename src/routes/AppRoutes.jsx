import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/dashboard/Dashboard'
import StudentList from '../pages/students/StudentList'
import StudentDetails from '../pages/students/StudentDetails'
import AddStudent from '../pages/students/AddStudent'
import TeacherList from '../pages/teachers/TeacherList'
import TeacherDetails from '../pages/teachers/TeacherDetails'
import StaffList from '../pages/staff/StaffList'
import AttendanceDashboard from '../pages/attendance/AttendanceDashboard'
import FeeDashboard from '../pages/fees/FeeDashboard'
import GatePassDashboard from '../pages/gatepass/GatePassDashboard'
import LibraryDashboard from '../pages/library/LibraryDashboard'
import PayrollDashboard from '../pages/payroll/PayrollDashboard'
import TransportDashboard from '../pages/transport/TransportDashboard'
import InventoryDashboard from '../pages/inventory/InventoryDashboard'
import ReportsHub from '../pages/reports/ReportsHub'
import ClassesPage from '../pages/academics/ClassesPage'
import SectionsPage from '../pages/academics/sections/SectionsPage'
import SubjectsPage from '../pages/academics/subjects/SubjectsPage'
import TimetablePage from '../pages/academics/timetable/TimetablePage'
import MarksEntryPage from '../pages/academics/marks/MarksEntryPage'
import ReportCardsPage from '../pages/academics/report-cards/ReportCardsPage'
import SettingsPage from '../pages/settings/SettingsPage'
import UsersPage from '../pages/users/UsersPage'
import Login from '../pages/auth/Login'
import ProtectedRoute from './ProtectedRoute'

const protectedPages = [
  ['/', Dashboard],
  ['/dashboard', Dashboard],
  ['/students', StudentList],
  ['/students/add', AddStudent],
  ['/students/:id', StudentDetails],
  ['/teachers', TeacherList],
  ['/teachers/:id', TeacherDetails],
  ['/staff', StaffList],
  ['/classes', ClassesPage],
  ['/sections', SectionsPage],
  ['/subjects', SubjectsPage],
  ['/timetable', TimetablePage],
  ['/marks', MarksEntryPage],
  ['/report-cards', ReportCardsPage],
  ['/attendance', AttendanceDashboard],
  ['/fees', FeeDashboard],
  ['/gatepass', GatePassDashboard],
  ['/library', LibraryDashboard],
  ['/transport', TransportDashboard],
  ['/inventory', InventoryDashboard],
  ['/payroll', PayrollDashboard],
  ['/reports', ReportsHub],
  ['/users', UsersPage],
  ['/settings', SettingsPage],
]

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    {protectedPages.map(([path, Component]) => (
      <Route
        key={path}
        path={path}
        element={
          <ProtectedRoute>
            <Component />
          </ProtectedRoute>
        }
      />
    ))}
    <Route path="*" element={<Navigate to="/dashboard" replace />} />
  </Routes>
)

export default AppRoutes

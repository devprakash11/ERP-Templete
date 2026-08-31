import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/dashboard/Dashboard'
import StudentList from '../pages/students/StudentList'
import StudentDetails from '../pages/students/StudentDetails'
import AddStudent from '../pages/students/AddStudent'
import TeacherList from '../pages/teachers/TeacherList'
import TeacherDetails from '../pages/teachers/TeacherDetails'
import AttendanceDashboard from '../pages/attendance/AttendanceDashboard'
import FeeDashboard from '../pages/fees/FeeDashboard'
import GatePassDashboard from '../pages/gatepass/GatePassDashboard'
import LibraryDashboard from '../pages/library/LibraryDashboard'
import PayrollDashboard from '../pages/payroll/PayrollDashboard'
import ProtectedRoute from '../routes/ProtectedRoute'
import Login from '../pages/auth/Login'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Route element={<Dashboard />} />
          </ProtectedRoute>
        }
      />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/students" element={<StudentList />} />
      <Route path="/students/add" element={<AddStudent />} />
      <Route path="/students/:id" element={<StudentDetails />} />

      <Route path="/teachers" element={<TeacherList />} />
      <Route path="/teachers/:id" element={<TeacherDetails />} />

      <Route path="/attendance" element={<AttendanceDashboard />} />
      <Route path="/fees" element={<FeeDashboard />} />
      <Route path="/gatepass" element={<GatePassDashboard />} />
      <Route path="/library" element={<LibraryDashboard />} />
      <Route path="/payroll" element={<PayrollDashboard />} />

      <Route path="/settings" element={<>'Settings Page'</>} />
    </Routes>
  )
}

export default AppRoutes
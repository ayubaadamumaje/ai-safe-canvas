import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { LandingPage } from './pages/LandingPage';
import { AuthPage } from './pages/AuthPage';
import { Toaster } from './components/ui/sonner';
import { ReactNode } from 'react';

// Dashboard Components
import { StudentDashboard } from './pages/dashboard/StudentDashboard';
import { TeacherDashboard } from './pages/dashboard/TeacherDashboard';
import { ParentDashboard } from './pages/dashboard/ParentDashboard';
import { AdminDashboard } from './pages/dashboard/AdminDashboard';

// Learning & Safety
import { AITutor } from './pages/learning/AITutor';
import { SafetyHub } from './pages/safety/SafetyHub';
import { CurriculumExplorer } from './pages/learning/CurriculumExplorer';
import { SyncCenter } from './pages/learning/SyncCenter';
import { PracticeCenter } from './pages/learning/PracticeCenter';
import { DashboardLayout } from './components/layout/DashboardLayout';

const ProtectedRoute = ({ children, allowedRoles }: { children: ReactNode, allowedRoles?: string[] }) => {
  const { user, isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/auth?mode=login" replace />;
  }
  
  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return <>{children}</>;
};

const DashboardRedirect = () => {
  const { user } = useAuth();
  
  if (!user) return <Navigate to="/auth?mode=login" replace />;
  
  switch (user.role) {
    case 'student': return <Navigate to="/student/dashboard" replace />;
    case 'teacher': return <Navigate to="/teacher/dashboard" replace />;
    case 'parent': return <Navigate to="/parent/dashboard" replace />;
    case 'admin':
    case 'authority':
    case 'ngo':
    case 'super-admin':
      return <Navigate to="/admin/dashboard" replace />;
    default: return <Navigate to="/" replace />;
  }
};

const ModulePlaceholder = ({ title }: { title: string }) => (
  <DashboardLayout>
    <div className="flex flex-col items-center justify-center h-[calc(100vh-12rem)] text-center">
      <div className="bg-primary/10 p-6 rounded-full mb-6">
        <span className="text-4xl">🚀</span>
      </div>
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-muted-foreground max-w-md">
        We are currently building the full version of the {title} module. 
        It will be available for all users shortly. Stay tuned!
      </p>
    </div>
  </DashboardLayout>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          
          <Route path="/dashboard" element={<ProtectedRoute><DashboardRedirect /></ProtectedRoute>} />
          
          {/* Student Routes */}
          <Route path="/student/*" element={
            <ProtectedRoute allowedRoles={['student']}>
              <Routes>
                <Route path="dashboard" element={<StudentDashboard />} />
              </Routes>
            </ProtectedRoute>
          } />
          
          {/* Teacher Routes */}
          <Route path="/teacher/*" element={
            <ProtectedRoute allowedRoles={['teacher']}>
              <Routes>
                <Route path="dashboard" element={<TeacherDashboard />} />
              </Routes>
            </ProtectedRoute>
          } />
          
          {/* Parent Routes */}
          <Route path="/parent/*" element={
            <ProtectedRoute allowedRoles={['parent']}>
              <Routes>
                <Route path="dashboard" element={<ParentDashboard />} />
              </Routes>
            </ProtectedRoute>
          } />
          
          {/* Admin/Authority/NGO Routes */}
          <Route path="/admin/*" element={
            <ProtectedRoute allowedRoles={['admin', 'authority', 'ngo', 'super-admin']}>
              <Routes>
                <Route path="dashboard" element={<AdminDashboard />} />
              </Routes>
            </ProtectedRoute>
          } />

          {/* Shared Learning & Safety Routes */}
          <Route path="/learning/ai-tutor" element={<ProtectedRoute><AITutor /></ProtectedRoute>} />
          <Route path="/safety/hub" element={<ProtectedRoute><SafetyHub /></ProtectedRoute>} />
          
          <Route path="/learning/curriculum" element={<ProtectedRoute><CurriculumExplorer /></ProtectedRoute>} />
          <Route path="/learning/sync" element={<ProtectedRoute><SyncCenter /></ProtectedRoute>} />
          <Route path="/learning/practice" element={<ProtectedRoute><PracticeCenter /></ProtectedRoute>} />
          <Route path="/learning/courses" element={<ProtectedRoute><ModulePlaceholder title="My Courses" /></ProtectedRoute>} />
          <Route path="/learning/library" element={<ProtectedRoute><ModulePlaceholder title="Digital Library" /></ProtectedRoute>} />
          <Route path="/learning/discussions" element={<ProtectedRoute><ModulePlaceholder title="Community Discussions" /></ProtectedRoute>} />
          <Route path="/learning/offline" element={<ProtectedRoute><ModulePlaceholder title="Offline Synchronization" /></ProtectedRoute>} />
          <Route path="/admin/manage" element={<ProtectedRoute allowedRoles={['admin', 'authority', 'super-admin']}><ModulePlaceholder title="System Management" /></ProtectedRoute>} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
      <Toaster position="top-right" />
    </AuthProvider>
  );
}

export default App;

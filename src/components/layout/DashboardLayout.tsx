import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  LayoutDashboard, 
  BookOpen, 
  MessageSquare, 
  Library, 
  Zap, 
  Bell, 
  Trophy,
  Settings, 
  LogOut, 
  Menu,
  X,
  User,
  AlertTriangle,
  DownloadCloud,
  GraduationCap,
  Languages
} from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/hooks/use-language';
import { Badge } from '@/components/ui/badge';

interface SidebarItem {
  icon: any;
  label: string;
  href: string;
  roles?: string[];
}

export const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, logout } = useAuth();
  const { lang, changeLanguage } = useLanguage();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarItems: SidebarItem[] = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: BookOpen, label: 'Curriculum', href: '/learning/curriculum' },
    { icon: Trophy, label: 'Practice Center', href: '/learning/practice' },
    { icon: GraduationCap, label: 'My Courses', href: '/learning/courses', roles: ['student', 'teacher'] },
    { icon: Zap, label: 'AI Tutor', href: '/learning/ai-tutor', roles: ['student'] },
    { icon: Library, label: 'Digital Library', href: '/learning/library' },
    { icon: AlertTriangle, label: 'Safety Hub', href: '/safety/hub' },
    { icon: MessageSquare, label: 'Discussions', href: '/learning/discussions' },
    { icon: DownloadCloud, label: 'Sync Center', href: '/learning/sync' },
    { icon: User, label: 'Management', href: '/admin/manage', roles: ['admin', 'authority', 'super-admin'] },
  ];

  const filteredItems = sidebarItems.filter(item => 
    !item.roles || (user && item.roles.includes(user.role))
  );

  return (
    <div className="flex h-screen bg-muted/30">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 border-r bg-card transition-transform lg:static lg:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex h-16 items-center border-b px-6">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-bold">EduBridge Yobe</span>
          </Link>
          <Button 
            variant="ghost" 
            size="icon" 
            className="ml-auto lg:hidden" 
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <nav className="flex-1 space-y-1 p-4">
          {filteredItems.map((item) => (
            <Link 
              key={item.href} 
              to={item.href}
              className={`
                flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors
                ${location.pathname === item.href ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}
              `}
              onClick={() => setSidebarOpen(false)}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="border-t p-4">
          <div className="mb-4 px-3 py-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">User</p>
            <div className="mt-2 flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-4 w-4 text-primary" />
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-medium truncate">{user?.name}</p>
                <Badge variant="secondary" className="text-[10px] h-4 capitalize">
                  {user?.role.replace('-', ' ')}
                </Badge>
              </div>
            </div>
          </div>
          <Button 
            variant="ghost" 
            className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
            onClick={() => { logout(); navigate('/'); }}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Header */}
        <header className="flex h-16 items-center justify-between border-b bg-card px-4 lg:px-8">
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="flex flex-1 items-center gap-4 md:gap-8 px-4">
            <div className="relative w-full max-w-sm hidden md:block">
              {/* Search placeholder */}
              <div className="flex items-center border rounded-md px-3 py-1 bg-muted/50">
                <span className="text-sm text-muted-foreground">Search courses, safety alerts...</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Languages className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeLanguage('en')}>English</DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('ha')}>Hausa</DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('yo')}>Yoruba</DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('ig')}>Igbo</DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('kr')}>Kanuri</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 flex h-2 w-2 rounded-full bg-destructive"></span>
            </Button>
            
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

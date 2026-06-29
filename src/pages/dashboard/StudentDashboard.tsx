import React from 'react';
import { Link } from 'react-router-dom';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Zap, 
  Trophy, 
  AlertTriangle, 
  Clock, 
  CheckCircle2, 
  GraduationCap,
  ArrowRight,
  TrendingUp,
  Award,
  Shield
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';

const data = [
  { name: 'Mon', hours: 2.5 },
  { name: 'Tue', hours: 3.2 },
  { name: 'Wed', hours: 1.8 },
  { name: 'Thu', hours: 4.5 },
  { name: 'Fri', hours: 2.0 },
  { name: 'Sat', hours: 5.1 },
  { name: 'Sun', hours: 3.0 },
];

export const StudentDashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">EduBridge Student Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Your path to success in Yobe begins here.</p>
          </div>
          <div className="flex gap-2">
            <Button className="gap-2" asChild>
              <Link to="/learning/practice"><Trophy className="h-4 w-4" /> Start Practice</Link>
            </Button>
            <Button variant="outline" className="gap-2 text-destructive border-destructive hover:bg-destructive/10" asChild>
              <Link to="/safety/hub"><AlertTriangle className="h-4 w-4" /> Report Incident</Link>
              Report Incident
            </Button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Completed Lessons', value: '42', icon: CheckCircle2, color: 'text-green-600' },
            { label: 'Learning Streak', value: '12 Days', icon: TrendingUp, color: 'text-primary' },
            { label: 'Points Earned', value: '1,250', icon: Trophy, color: 'text-yellow-600' },
            { label: 'Active Alerts', value: '1', icon: AlertTriangle, color: 'text-orange-600' },
          ].map((stat, i) => (
            <Card key={i}>
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color} opacity-80`} />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Chart */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Learning Activity</CardTitle>
              <CardDescription>Hours spent learning over the last 7 days.</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} 
                  />
                  <Bar dataKey="hours" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* AI Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                AI Recommendations
              </CardTitle>
              <CardDescription>Based on your recent performance.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { title: 'Mathematics: Calculus', difficulty: 'Medium', duration: '20m' },
                { title: 'English: Grammar Mock', difficulty: 'Hard', duration: '15m' },
                { title: 'Physics: Electromagnetism', difficulty: 'Easy', duration: '30m' },
              ].map((rec, i) => (
                <div key={i} className="flex flex-col gap-1 border-b pb-3 last:border-0 last:pb-0">
                  <p className="font-medium">{rec.title}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><TrendingUp className="h-3 w-3" /> {rec.difficulty}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {rec.duration}</span>
                  </div>
                  <Button variant="link" className="h-auto p-0 justify-start text-primary">Start Now <ArrowRight className="ml-1 h-3 w-3" /></Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Curriculum Track Selection */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                JSS Curriculum (Junior)
              </CardTitle>
              <CardDescription>JSS1, JSS2, and JSS3 core and basic subjects.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {['Mathematics', 'English', 'Basic Science', 'Basic Tech', 'Social Studies', 'Civic', 'ICT', 'Hausa'].map(s => (
                  <Badge key={s} variant="outline" className="bg-background">{s}</Badge>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline" asChild>
                <Link to="/learning/curriculum?level=JSS">Explore JSS Subjects</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-blue-50/50 border-blue-200/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-blue-600" />
                SSS Curriculum (Senior)
              </CardTitle>
              <CardDescription>Choose your department: Science, Arts, or Commercial.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-2 mb-4">
                <Button variant="outline" size="sm" className="text-[10px] h-8">Science</Button>
                <Button variant="outline" size="sm" className="text-[10px] h-8">Arts</Button>
                <Button variant="outline" size="sm" className="text-[10px] h-8">Commercial</Button>
              </div>
              <Button className="w-full" variant="outline" asChild>
                <Link to="/learning/curriculum?level=SSS">Explore SSS Subjects</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Row */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Courses */}
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>My Courses</CardTitle>
                <CardDescription>Courses you are currently enrolled in.</CardDescription>
              </div>
              <Button variant="outline" size="sm">View All</Button>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { title: 'JAMB Prep: Mathematics', progress: 85, lessons: '18/21', image: 'https://images.unsplash.com/photo-1509228468518-180dd482195b?auto=format&fit=crop&w=800&q=80' },
                { title: 'WAEC Prep: Biology', progress: 45, lessons: '12/28', image: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=800&q=80' },
              ].map((course, i) => (
                <div key={i} className="flex gap-4">
                  <div className="h-20 w-32 shrink-0 overflow-hidden rounded-lg border bg-muted">
                    <img src={course.image} alt={course.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="font-bold">{course.title}</p>
                      <span className="text-xs text-muted-foreground">{course.lessons} Lessons</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-primary font-medium">{course.progress}% Complete</span>
                      <Button variant="ghost" size="sm" className="h-6 px-2">Continue</Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Gamification / Badges */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-yellow-600" />
                Recent Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Fast Learner', icon: Zap, color: 'bg-blue-100 text-blue-600' },
                  { name: 'Safety First', icon: Shield, color: 'bg-orange-100 text-orange-600' },
                  { name: 'Quiz Master', icon: Trophy, color: 'bg-yellow-100 text-yellow-600' },
                  { name: 'Helper', icon: Heart, color: 'bg-red-100 text-red-600' },
                ].map((badge, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-xl border bg-muted/30">
                    <div className={`p-3 rounded-full ${badge.color}`}>
                      <badge.icon className="h-6 w-6" />
                    </div>
                    <p className="text-xs font-bold text-center">{badge.name}</p>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-6">View Leaderboard</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

const Heart = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

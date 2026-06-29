import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Shield, BookOpen, AlertTriangle, TrendingUp, Bell } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export const ParentDashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Parent Dashboard</h1>
            <p className="text-muted-foreground">Monitor your child's learning progress and school safety.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Message Teacher
            </Button>
            <Button className="gap-2 bg-orange-600 hover:bg-orange-700">
              <Shield className="h-4 w-4" />
              Safety Check
            </Button>
          </div>
        </div>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary">
              <TrendingUp className="h-10 w-10 text-primary" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold">Zainab's Weekly Performance</h3>
              <p className="text-muted-foreground">Zainab has completed 15 lessons this week, surpassing her goal by 20%!</p>
            </div>
            <Button className="shrink-0">View Full Report</Button>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Child Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { name: 'Mathematics', progress: 85, color: 'bg-blue-600' },
                { name: 'Biology', progress: 62, color: 'bg-green-600' },
                { name: 'English', progress: 91, color: 'bg-purple-600' },
              ].map((sub, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-bold">{sub.name}</span>
                    <span>{sub.progress}%</span>
                  </div>
                  <Progress value={sub.progress} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                Safety Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { title: 'School Closed: Weather', type: 'alert', time: '1h ago', message: 'Government High School will be closed tomorrow due to heavy flooding.' },
                { title: 'Attendance Confirmed', type: 'info', time: '4h ago', message: 'Zainab arrived at school at 7:55 AM.' },
                { title: 'New Safety Protocol', type: 'info', time: '1d ago', message: 'Please review the new evacuation procedures for your school district.' },
              ].map((notif, i) => (
                <div key={i} className={`p-4 rounded-lg border ${notif.type === 'alert' ? 'bg-orange-50 border-orange-200' : 'bg-muted/50'}`}>
                  <div className="flex justify-between mb-1">
                    <p className={`text-sm font-bold ${notif.type === 'alert' ? 'text-orange-700' : ''}`}>{notif.title}</p>
                    <span className="text-xs text-muted-foreground">{notif.time}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{notif.message}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

const MessageSquare = ({ className }: { className?: string }) => (
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
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

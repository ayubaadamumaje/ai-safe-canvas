import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, BookOpen, FileText, AlertTriangle, CheckCircle2, MessageSquare } from 'lucide-react';

export const TeacherDashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Teacher Dashboard</h1>
            <p className="text-muted-foreground">Manage your classes, students, and safety reports.</p>
          </div>
          <Button className="gap-2">
            <FileText className="h-4 w-4" />
            Create Assignment
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Total Students', value: '142', icon: Users, color: 'text-blue-600' },
            { label: 'Active Classes', value: '6', icon: BookOpen, color: 'text-primary' },
            { label: 'Assignments', value: '12', icon: FileText, color: 'text-purple-600' },
            { label: 'Pending Safety Reports', value: '2', icon: AlertTriangle, color: 'text-orange-600' },
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

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Class Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: 'SS3 Mathematics', students: 45, average: '78%', status: 'Active' },
                { name: 'SS2 Biology', students: 38, average: '82%', status: 'In-progress' },
                { name: 'SS1 English', students: 59, average: '74%', status: 'Active' },
              ].map((cls, i) => (
                <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="font-bold">{cls.name}</p>
                    <p className="text-sm text-muted-foreground">{cls.students} Students • {cls.average} Avg</p>
                  </div>
                  <Button variant="ghost" size="sm">Manage</Button>
                </div>
              ))}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Student Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { student: 'Abubakar Musa', action: 'submitted Mathematics Quiz', time: '2m ago' },
                { student: 'Chidi Okafor', action: 'completed Biology Lesson', time: '15m ago' },
                { student: 'Fatima Yusuf', action: 'asked a question in AI Tutor', time: '30m ago' },
              ].map((act, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <div>
                    <p className="text-sm"><span className="font-bold">{act.student}</span> {act.action}</p>
                    <p className="text-xs text-muted-foreground">{act.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

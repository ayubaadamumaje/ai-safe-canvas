import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Users, School, Globe, AlertCircle, FileText, Map as MapIcon } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Administration Dashboard</h1>
            <p className="text-muted-foreground">National education safety and performance oversight.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="destructive" className="gap-2">
              <AlertCircle className="h-4 w-4" />
              Emergency Alert
            </Button>
            <Button className="gap-2">
              <FileText className="h-4 w-4" />
              Generate Report
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Schools Monitored', value: '4,520', icon: School, color: 'text-blue-600' },
            { label: 'Total Students', value: '1.2M', icon: Users, color: 'text-primary' },
            { label: 'Active Incidents', value: '3', icon: AlertCircle, color: 'text-destructive' },
            { label: 'NGO Partners', value: '85', icon: Globe, color: 'text-purple-600' },
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
          <Card className="lg:col-span-2 overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between bg-muted/30">
              <div>
                <CardTitle>School Safety Map</CardTitle>
              </div>
              <Button variant="ghost" size="sm" className="gap-1"><MapIcon className="h-4 w-4" /> Interactive Map</Button>
            </CardHeader>
            <CardContent className="p-0 relative aspect-video bg-blue-50">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f3cb809f-004b-487c-8f68-671387011bbc/safety-dashboard-preview-7f8f74a9-1782488210640.webp" 
                alt="Nigeria Safety Map" 
                className="h-full w-full object-cover"
              />
              {/* Overlay simulation */}
              <div className="absolute top-4 right-4 space-y-2">
                <div className="bg-white border p-2 rounded shadow text-xs flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500" /> 4,517 Safe
                </div>
                <div className="bg-white border p-2 rounded shadow text-xs flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-orange-500" /> 3 Alert
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Incidents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { school: 'Borno Primary A', type: 'Displacement', status: 'In Response', time: '2h ago' },
                { school: 'Lagos Island Sec', type: 'Flooding', status: 'Monitored', time: '5h ago' },
                { school: 'Kaduna Tech', type: 'Insecurity', status: 'Evacuated', time: '1d ago' },
              ].map((inc, i) => (
                <div key={i} className="flex flex-col gap-1 border-b pb-3 last:border-0 last:pb-0">
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-sm">{inc.school}</p>
                    <span className="text-[10px] uppercase font-bold text-destructive">{inc.type}</span>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{inc.status}</span>
                    <span>{inc.time}</span>
                  </div>
                  <Button variant="link" className="h-auto p-0 justify-start text-[10px]">View Details</Button>
                </div>
              ))}
              <Button className="w-full mt-4" variant="outline">View All Incidents</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

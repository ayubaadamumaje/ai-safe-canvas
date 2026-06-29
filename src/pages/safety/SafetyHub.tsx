import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  AlertTriangle, 
  Bell, 
  Map as MapIcon, 
  Phone, 
  FileText, 
  CheckCircle2, 
  Clock,
  Radio,
  Users,
  Navigation
} from 'lucide-react';
import { toast } from 'sonner';

export const SafetyHub: React.FC = () => {
  const [isEmergencyActive, setIsEmergencyActive] = useState(false);

  const triggerEmergency = () => {
    setIsEmergencyActive(true);
    toast.error('EMERGENCY ALERT SENT to Education Authorities and Safety Officers', {
      duration: 10000,
      description: 'Please stay calm and follow evacuation procedures.'
    });
  };

  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              School Safety Hub
            </h1>
            <p className="text-muted-foreground">Real-time safety updates, incident reporting, and emergency coordination.</p>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="destructive" 
              size="lg" 
              className={`gap-2 font-bold animate-pulse ${isEmergencyActive ? 'ring-4 ring-destructive/50' : ''}`}
              onClick={triggerEmergency}
            >
              <AlertTriangle className="h-5 w-5" />
              SOS EMERGENCY
            </Button>
          </div>
        </div>

        {isEmergencyActive && (
          <Card className="bg-destructive/10 border-destructive text-destructive border-2 animate-in fade-in slide-in-from-top-4">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="bg-destructive text-destructive-foreground p-3 rounded-full">
                <Radio className="h-8 w-8 animate-ping" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold">EMERGENCY PROTOCOL ACTIVE</h3>
                <p className="font-medium">Education authorities have been notified. Real-time tracking is now active for your location.</p>
              </div>
              <Button variant="outline" className="border-destructive hover:bg-destructive/10" onClick={() => setIsEmergencyActive(false)}>Cancel Alert</Button>
            </CardContent>
          </Card>
        )}

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <Tabs defaultValue="map">
              <CardHeader className="flex flex-row items-center justify-between py-4">
                <div className="space-y-1">
                  <CardTitle>Safety Overview</CardTitle>
                  <CardDescription>Visualizing safety status across Nigeria.</CardDescription>
                </div>
                <TabsList>
                  <TabsTrigger value="map">Live Map</TabsTrigger>
                  <TabsTrigger value="list">Schools List</TabsTrigger>
                </TabsList>
              </CardHeader>
              <CardContent className="p-0 border-t">
                <TabsContent value="map" className="m-0">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img 
                      src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f3cb809f-004b-487c-8f68-671387011bbc/safety-dashboard-preview-7f8f74a9-1782488210640.webp" 
                      alt="Safety Map" 
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/5" />
                    <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur p-3 rounded-lg border shadow-lg max-w-xs">
                      <div className="flex items-center gap-2 mb-2">
                        <Navigation className="h-4 w-4 text-primary" />
                        <span className="text-xs font-bold">Current Sector: Abuja North</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-medium uppercase text-muted-foreground border-t pt-2">
                        <span className="flex items-center gap-1"><div className="h-2 w-2 rounded-full bg-green-500" /> Safe</span>
                        <span className="flex items-center gap-1"><div className="h-2 w-2 rounded-full bg-orange-500" /> Caution</span>
                        <span className="flex items-center gap-1"><div className="h-2 w-2 rounded-full bg-red-500" /> Danger</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="list" className="p-4 m-0 space-y-4">
                  {[
                    { name: 'Government Science College, Kagara', status: 'Monitored', color: 'bg-orange-500', alert: 'High security presence' },
                    { name: 'Federal Government College, Buni Yadi', status: 'Safe', color: 'bg-green-500', alert: 'Normal operations' },
                    { name: 'Queens College, Lagos', status: 'Safe', color: 'bg-green-500', alert: 'Normal operations' },
                  ].map((school, i) => (
                    <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`h-3 w-3 rounded-full ${school.color}`} />
                        <div>
                          <p className="text-sm font-bold">{school.name}</p>
                          <p className="text-xs text-muted-foreground">{school.alert}</p>
                        </div>
                      </div>
                      <Badge variant="outline">{school.status}</Badge>
                    </div>
                  ))}
                </TabsContent>
              </CardContent>
            </Tabs>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Crisis Contacts</CardTitle>
              <CardDescription>Immediate assistance numbers.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { label: 'Police Emergency', number: '112 / 999', icon: Phone },
                { label: 'School Security', number: '0800-SAFE-EDU', icon: Shield },
                { label: 'State Edu Board', number: '0700-KAD-EDU', icon: Users },
                { label: 'First Aid Support', number: '0810-RED-CROSS', icon: Heart },
              ].map((contact, i) => (
                <div key={i} className="flex items-center gap-4 p-3 border rounded-xl hover:bg-muted transition-colors cursor-pointer group">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <contact.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{contact.label}</p>
                    <p className="font-bold">{contact.number}</p>
                  </div>
                </div>
              ))}
              <Button className="w-full mt-2" variant="outline">Report a New Incident</Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Safety Procedures</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                'Evacuation Protocol A-1',
                'Emergency Communication Plan',
                'Disaster Response Guide',
                'Teacher Training Module',
              ].map((doc, i) => (
                <div key={i} className="flex items-center gap-3 p-2 hover:bg-muted rounded-md cursor-pointer">
                  <FileText className="h-4 w-4 text-primary" />
                  <span className="text-sm">{doc}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Education Response</CardTitle>
              <CardDescription>Support for displaced students.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-bold text-sm">IDP Camp Centers</p>
                  <p className="text-xs text-muted-foreground">42 Mobile learning centers active.</p>
                </div>
              </div>
              <Button className="w-full text-xs" variant="outline">Find Nearest Learning Hub</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Recent Updates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { title: 'New Safety Policy', time: '2h ago' },
                { title: 'Abuja Schools Update', time: '5h ago' },
              ].map((update, i) => (
                <div key={i} className="flex gap-3">
                  <Clock className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{update.title}</p>
                    <p className="text-[10px] text-muted-foreground">{update.time}</p>
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

import React, { useState, useEffect } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  DownloadCloud, 
  Wifi, 
  WifiOff, 
  HardDrive, 
  CheckCircle2, 
  AlertCircle,
  RefreshCw,
  Trash2,
  BookOpen
} from 'lucide-react';
import { toast } from 'sonner';

interface SyncItem {
  id: string;
  name: string;
  size: string;
  status: 'synced' | 'syncing' | 'available' | 'error';
  progress: number;
}

export const SyncCenter: React.FC = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [items, setItems] = useState<SyncItem[]>([
    { id: '1', name: 'Mathematics JSS1-3 Full Content', size: '124 MB', status: 'synced', progress: 100 },
    { id: '2', name: 'English Grammar Video Lessons', size: '450 MB', status: 'available', progress: 0 },
    { id: '3', name: 'WAEC Past Questions (2010-2023)', size: '15 MB', status: 'synced', progress: 100 },
    { id: '4', name: 'JAMB CBT Mock Interface', size: '8 MB', status: 'synced', progress: 100 },
    { id: '5', name: 'Basic Science Interactive Labs', size: '210 MB', status: 'syncing', progress: 45 },
    { id: '6', name: 'Hausa Language Audio Library', size: '85 MB', status: 'available', progress: 0 },
  ]);

  const [totalStorage, setTotalStorage] = useState({ used: '1.2 GB', total: '5 GB', percent: 24 });

  const handleSync = (id: string) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, status: 'syncing', progress: 10 } : item
    ));
    
    // Simulate progress
    const interval = setInterval(() => {
      setItems(prev => prev.map(item => {
        if (item.id === id && item.status === 'syncing') {
          const nextProgress = item.progress + 15;
          if (nextProgress >= 100) {
            clearInterval(interval);
            toast.success(`${item.name} synchronized successfully.`);
            return { ...item, status: 'synced', progress: 100 };
          }
          return { ...item, progress: nextProgress };
        }
        return item;
      }));
    }, 800);
  };

  const handleRemove = (id: string) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, status: 'available', progress: 0 } : item
    ));
    toast.info('Item removed from local storage.');
  };

  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
              <DownloadCloud className="h-8 w-8 text-primary" />
              Sync Center
            </h1>
            <p className="text-muted-foreground">Manage your offline educational content library.</p>
          </div>
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${isOnline ? 'bg-green-50 border-green-200 text-green-700' : 'bg-orange-50 border-orange-200 text-orange-700'}`}>
            {isOnline ? <Wifi className="h-4 w-4" /> : <WifiOff className="h-4 w-4" />}
            <span className="text-sm font-bold">{isOnline ? 'Online - Content Sync Active' : 'Offline - Using Local Storage'}</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Content Library</CardTitle>
              <CardDescription>Download lessons and resources for offline use.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex flex-col gap-3 p-4 border rounded-xl bg-card">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${item.status === 'synced' ? 'bg-green-100 text-green-700' : 'bg-muted text-muted-foreground'}`}>
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-bold text-sm">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.size}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {item.status === 'synced' ? (
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">
                            <CheckCircle2 className="h-3 w-3 mr-1" /> Synced
                          </Badge>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => handleRemove(item.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ) : item.status === 'syncing' ? (
                        <Badge variant="outline" className="animate-pulse">
                          <RefreshCw className="h-3 w-3 mr-1 animate-spin" /> Syncing {item.progress}%
                        </Badge>
                      ) : (
                        <Button variant="outline" size="sm" className="gap-2" onClick={() => handleSync(item.id)}>
                          <DownloadCloud className="h-4 w-4" /> Download
                        </Button>
                      )}
                    </div>
                  </div>
                  {item.status === 'syncing' && (
                    <Progress value={item.progress} className="h-1.5" />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HardDrive className="h-5 w-5 text-primary" />
                  Local Storage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Used: {totalStorage.used}</span>
                    <span className="text-muted-foreground">Total: {totalStorage.total}</span>
                  </div>
                  <Progress value={totalStorage.percent} className="h-2" />
                  <p className="text-[10px] text-muted-foreground text-center italic">
                    You have enough space for approximately 25 more video lessons.
                  </p>
                </div>
                <Button className="w-full" variant="outline" onClick={() => toast.success('Smart Cleanup complete. 120MB freed.')}>
                  Smart Cleanup
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  Offline Optimization
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-xs text-muted-foreground">
                  EduBridge Yobe uses low-bandwidth optimization and delta-syncing to ensure you can update your content even on 2G networks.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-medium">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Text Content: Compressed
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Images: WebP Optimized
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Videos: Multi-bitrate HLS
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

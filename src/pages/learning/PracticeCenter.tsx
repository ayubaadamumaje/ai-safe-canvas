import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Trophy, 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  Zap, 
  Award, 
  PlayCircle, 
  FileText,
  HelpCircle,
  Timer
} from 'lucide-react';

export const PracticeCenter: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Practice Center</h1>
            <p className="text-muted-foreground">Comprehensive preparation for WAEC, NECO, and JAMB.</p>
          </div>
          <div className="flex gap-2">
            <Button className="gap-2">
              <Trophy className="h-4 w-4" />
              Leaderboard
            </Button>
            <Button variant="outline" className="gap-2">
              <Clock className="h-4 w-4" />
              History
            </Button>
          </div>
        </div>

        <Tabs defaultValue="jamb" className="space-y-6">
          <TabsList className="bg-muted/50 p-1">
            <TabsTrigger value="jamb" className="px-8">JAMB CBT</TabsTrigger>
            <TabsTrigger value="waec" className="px-8">WAEC</TabsTrigger>
            <TabsTrigger value="neco" className="px-8">NECO</TabsTrigger>
            <TabsTrigger value="post-utme" className="px-8">Post-UTME</TabsTrigger>
          </TabsList>

          <TabsContent value="jamb" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>JAMB Mock Exams</CardTitle>
                  <CardDescription>Simulated Computer Based Test (CBT) environment.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    { subject: 'Mathematics', questions: 40, time: '60 mins', year: '2024 Predicted' },
                    { subject: 'English Language', questions: 60, time: '60 mins', year: '2024 Predicted' },
                    { subject: 'Physics', questions: 40, time: '60 mins', year: '2024 Predicted' },
                    { subject: 'Chemistry', questions: 40, time: '60 mins', year: '2024 Predicted' },
                  ].map((exam, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-xl hover:bg-muted/30 transition-colors gap-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-2 rounded-lg text-primary">
                          <PlayCircle className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-bold">{exam.subject}</p>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                            <span className="flex items-center gap-1"><HelpCircle className="h-3 w-3" /> {exam.questions} Questions</span>
                            <span className="flex items-center gap-1"><Timer className="h-3 w-3" /> {exam.time}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary">{exam.year}</Badge>
                        <Button size="sm">Start Exam</Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      AI Performance Predictor
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-xs text-muted-foreground">Based on your recent mock scores, here is your predicted JAMB score:</p>
                    <div className="text-center py-4">
                      <p className="text-5xl font-black text-primary">285</p>
                      <p className="text-sm font-bold mt-2">Predicted Aggregate</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-[10px] font-bold uppercase">
                        <span>Confidence Level</span>
                        <span>82%</span>
                      </div>
                      <Progress value={82} className="h-1.5" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Top Weak Areas</CardTitle>
                    <CardDescription>Subjects needing focus.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { subject: 'Math: Calculus', score: 45 },
                      { subject: 'Phys: Optics', score: 58 },
                    ].map((area, i) => (
                      <div key={i} className="space-y-1.5">
                        <div className="flex justify-between text-xs">
                          <span>{area.subject}</span>
                          <span className="font-bold text-destructive">{area.score}%</span>
                        </div>
                        <Progress value={area.score} className="h-1 bg-muted" />
                      </div>
                    ))}
                    <Button className="w-full mt-2" variant="outline" size="sm">View Personalized Study Plan</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="waec">
            <div className="flex flex-col items-center justify-center py-20 bg-muted/20 rounded-2xl border-2 border-dashed">
              <Award className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-xl font-bold">WAEC Theory & Practical Practice</h3>
              <p className="text-muted-foreground max-w-md text-center mt-2">
                Access past theory questions, alternative to practical labs, and graded essay practice for WASSCE.
              </p>
              <Button className="mt-6">Explore WAEC Content</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

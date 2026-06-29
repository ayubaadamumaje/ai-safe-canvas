import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { curriculum, Subject } from '@/data/curriculum';
import { Search, Filter, BookOpen, GraduationCap, Download, CheckCircle2 } from 'lucide-react';

export const CurriculumExplorer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeLevel, setActiveLevel] = useState<'ALL' | 'JSS' | 'SSS'>('ALL');
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const filteredSubjects = curriculum.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          s.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = activeLevel === 'ALL' || s.level === activeLevel;
    const matchesCategory = activeCategory === 'ALL' || s.category === activeCategory;
    return matchesSearch && matchesLevel && matchesCategory;
  });

  const categories = ['ALL', 'Basic', 'Core', 'Science', 'Commercial', 'Arts'];

  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Curriculum Explorer</h1>
            <p className="text-muted-foreground">Aligned with the Nigerian National Curriculum (JSS1 - SS3).</p>
          </div>
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Download Full Curriculum (PDF)
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center bg-card p-4 rounded-xl border shadow-sm">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search subjects or topics..." 
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            <Button 
              variant={activeLevel === 'ALL' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setActiveLevel('ALL')}
            >
              All Levels
            </Button>
            <Button 
              variant={activeLevel === 'JSS' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setActiveLevel('JSS')}
            >
              JSS1-3
            </Button>
            <Button 
              variant={activeLevel === 'SSS' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setActiveLevel('SSS')}
            >
              SS1-3
            </Button>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map(cat => (
            <Badge 
              key={cat} 
              variant={activeCategory === cat ? 'default' : 'outline'}
              className="cursor-pointer px-4 py-1.5"
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Badge>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredSubjects.map((subject) => (
            <Card key={subject.id} className="hover:shadow-md transition-shadow cursor-pointer group">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-none">
                    {subject.level}
                  </Badge>
                  {subject.category && (
                    <Badge variant="outline" className="text-[10px] uppercase">
                      {subject.category}
                    </Badge>
                  )}
                </div>
                <CardTitle className="group-hover:text-primary transition-colors flex items-center gap-2">
                  <BookOpen className="h-5 w-5 opacity-70" />
                  {subject.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {subject.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-1 text-[10px] font-bold text-green-600">
                    <CheckCircle2 className="h-3 w-3" />
                    Offline Ready
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 text-xs">Explore Topics</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSubjects.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 bg-muted/20 rounded-2xl border-2 border-dashed">
            <GraduationCap className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-xl font-bold">No subjects found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

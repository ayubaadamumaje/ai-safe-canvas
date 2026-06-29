import React, { useState, useRef, useEffect } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Zap, Send, User, Bot, Languages, Mic, Volume2 } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export const AITutor: React.FC = () => {
  const { lang, t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello! I'm your EduSafe AI Tutor. I can help you with your lessons in English, Hausa, Yoruba, or Igbo. What would you like to learn today?",
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `That's a great question about "${input}". In the context of the Nigerian curriculum, this is often covered in SS2. Would you like me to explain it in ${lang === 'en' ? 'English' : 'your selected language'}?`,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMsg]);
    }, 1000);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col h-[calc(100vh-12rem)] max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
              <Zap className="h-8 w-8 text-primary" />
              AI Personal Tutor
            </h1>
            <p className="text-muted-foreground">Personalized 24/7 learning assistance.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Languages className="h-4 w-4" />
              Change Language
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Volume2 className="h-4 w-4" />
              Voice Mode
            </Button>
          </div>
        </div>

        <Card className="flex-1 flex flex-col overflow-hidden shadow-lg border-2 border-primary/10">
          <CardHeader className="bg-muted/30 border-b py-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/20">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-base font-bold">EduSafe AI</CardTitle>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-muted-foreground uppercase font-medium">Online & Ready</span>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="flex-1 p-4 overflow-hidden">
            <ScrollArea className="h-full pr-4" ref={scrollRef}>
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div 
                    key={msg.id} 
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`
                      flex gap-3 max-w-[85%] 
                      ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}
                    `}>
                      <div className={`
                        h-8 w-8 shrink-0 rounded-full flex items-center justify-center border
                        ${msg.role === 'user' ? 'bg-muted' : 'bg-primary/10 border-primary/10'}
                      `}>
                        {msg.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4 text-primary" />}
                      </div>
                      <div className={`
                        p-3 rounded-2xl text-sm
                        ${msg.role === 'user' 
                          ? 'bg-primary text-primary-foreground rounded-tr-none' 
                          : 'bg-muted rounded-tl-none'}
                      `}>
                        {msg.content}
                        <p className={`text-[10px] mt-1 opacity-70 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                          {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>

          <CardFooter className="border-t p-4 bg-background">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="flex w-full items-center gap-2"
            >
              <Button type="button" variant="ghost" size="icon" className="shrink-0 text-muted-foreground">
                <Mic className="h-5 w-5" />
              </Button>
              <Input 
                placeholder="Ask your tutor anything..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon" disabled={!input.trim()} className="shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
        
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
          {['Explain Photosynthesis', 'Math Mock Exam', 'WAEC English Tips', 'Physics Formulas'].map((hint) => (
            <Button 
              key={hint} 
              variant="outline" 
              size="sm" 
              className="text-[10px] h-8 justify-start"
              onClick={() => setInput(hint)}
            >
              {hint}
            </Button>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

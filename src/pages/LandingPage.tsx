import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, BookOpen, Users, Globe, Zap, Heart, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';

export const LandingPage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center rounded-full border bg-muted px-3 py-1 text-sm font-medium mb-8">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                Safe & Uninterrupted Learning
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl max-w-4xl mb-6">
                Education is a Right, <span className="text-primary">Safety is a Necessity.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mb-10">
                EduBridge Yobe ensures every student in Northern Nigeria can continue their learning journey regardless of insecurity, disasters, or limited internet access.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8" asChild>
                  <Link to="/auth?mode=signup">Get Started for Free</Link>
                </Button>
                <Button size="lg" variant="outline" className="px-8" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            
            <div className="mt-16 relative">
              <div className="aspect-video overflow-hidden rounded-2xl border bg-muted shadow-2xl">
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f3cb809f-004b-487c-8f68-671387011bbc/edubridge-yobe-campus-4ad6f10a-1782499203813.webp" 
                  alt="EduSafe Nigeria Students" 
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -bottom-6 -left-6 bg-card border rounded-xl p-4 shadow-lg hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">1M+ Students</p>
                    <p className="text-xs text-muted-foreground">Enrolled Nationwide</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-card border rounded-xl p-4 shadow-lg hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">SafeSchools™</p>
                    <p className="text-xs text-muted-foreground">Certified Protection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted/50 py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Core Platform Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Designed to tackle the unique educational challenges in Nigeria and across Africa.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'AI-Powered Tutoring',
                  desc: 'Personalized 24/7 learning support with AI tutors that speak local languages.',
                  icon: Zap,
                  color: 'text-primary'
                },
                {
                  title: 'School Safety System',
                  desc: 'Real-time emergency alerts and secure communication for schools and parents.',
                  icon: Shield,
                  color: 'text-orange-600'
                },
                {
                  title: 'Offline Learning',
                  desc: 'Download lessons and sync content when internet is available. Learn anywhere.',
                  icon: Globe,
                  color: 'text-blue-600'
                },
                {
                  title: 'Exam Preparation',
                  desc: 'Comprehensive materials and mock tests for WAEC, NECO, and JAMB.',
                  icon: BookOpen,
                  color: 'text-purple-600'
                },
                {
                  title: 'Disability Support',
                  desc: 'Accessible learning for all, including screen readers and multilingual voice-over.',
                  icon: Heart,
                  color: 'text-red-600'
                },
                {
                  title: 'Community Forums',
                  desc: 'Engage with teachers and peers in a secure, moderated discussion environment.',
                  icon: Users,
                  color: 'text-cyan-600'
                }
              ].map((feature, i) => (
                <div key={i} className="bg-card border rounded-2xl p-8 hover:shadow-md transition-shadow">
                  <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-6 ${feature.color}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum Preview Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-6">Built for the Nigerian Curriculum</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  EduBridge Yobe covers all subjects from JSS1 to SS3, including Science, Arts, and Commercial departments. Our content is aligned with the national curriculum and tailored for students in Northern Nigeria.
                </p>
                <ul className="space-y-4">
                  {[
                    'Complete WAEC, NECO, and JAMB Syllabus',
                    'Offline-first learning (no internet? no problem)',
                    'Personalized AI tutoring in Hausa and English',
                    'School safety management and emergency alerts'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-medium">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f3cb809f-004b-487c-8f68-671387011bbc/curriculum-library-preview-6b61474f-1782499204537.webp" 
                  alt="EduBridge Curriculum Library" 
                  className="rounded-2xl border shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join the Revolution in Nigerian Education</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Whether you are a student, teacher, or parent, EduSafe has the tools you need to ensure success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8" asChild>
                <Link to="/auth?mode=signup">Create Your Account</Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold tracking-tight">EduBridge Yobe</span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs">
                Empowering Nigerian students through technology and safety management systems.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/safety">Safety</Link></li>
                <li><Link to="/library">Library</Link></li>
                <li><Link to="/ai">AI Tutor</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/help">Help Center</Link></li>
                <li><Link to="/offline">Offline Guide</Link></li>
                <li><Link to="/partners">NGO Partners</Link></li>
                <li><Link to="/blog">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
                <li><Link to="/cookies">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} EduBridge Yobe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};


import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-radial from-background to-accent/50 p-6">
      <div className="w-full max-w-4xl text-center space-y-6 animate-fade-in">
        <div className="inline-flex items-center justify-center mb-8">
          <div className="h-16 w-16 rounded-xl bg-primary flex items-center justify-center">
            <Award className="h-10 w-10 text-white" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Welcome to CertiQuest
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The all-in-one platform for tracking and managing student certifications, projects, 
          and achievements with AI-powered insights.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link 
            to="/admin" 
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-lg font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
          >
            Access Admin Dashboard
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
        
        <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-card/80 border shadow-sm backdrop-blur-xs animate-slide-in" style={{ animationDelay: '200ms' }}>
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Certification Tracking</h3>
            <p className="text-muted-foreground">Organize all certifications in one place with automatic difficulty assessment.</p>
          </div>
          
          <div className="p-6 rounded-xl bg-card/80 border shadow-sm backdrop-blur-xs animate-slide-in" style={{ animationDelay: '400ms' }}>
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Department Leaderboards</h3>
            <p className="text-muted-foreground">Foster healthy competition with real-time leaderboards for different departments.</p>
          </div>
          
          <div className="p-6 rounded-xl bg-card/80 border shadow-sm backdrop-blur-xs animate-slide-in" style={{ animationDelay: '600ms' }}>
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
            <p className="text-muted-foreground">Get personalized recommendations and insights based on certification patterns.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

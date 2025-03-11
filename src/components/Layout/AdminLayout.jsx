
import React from 'react';
import { cn } from '@/lib/utils';
import Sidebar from './Sidebar';
import Header from './Header';

const AdminLayout = ({ children, className }) => {
  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-[240px] md:ml-[240px] transition-all duration-300">
        <Header />
        <main className={cn('flex-1 p-6', className)}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;


import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = ({ className, ...props }) => {
  return (
    <header
      className={cn(
        'sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b bg-background/95 px-6 backdrop-blur transition-all',
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-semibold tracking-tight">CertiQuest</h1>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search..."
            className="h-9 w-[200px] rounded-md border border-input bg-background pl-8 pr-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        <button className="relative rounded-full p-2 hover:bg-accent transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary"></span>
        </button>

        <button className="flex items-center gap-2 rounded-full p-1.5 pl-1 hover:bg-accent transition-colors">
          <div className="relative h-7 w-7 overflow-hidden rounded-full bg-muted">
            <User className="h-4 w-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-muted-foreground" />
          </div>
          <span className="text-sm font-medium hidden md:block">Admin</span>
        </button>
      </div>
    </header>
  );
};

export default Header;

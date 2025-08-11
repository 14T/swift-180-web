import { Tv } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4 md:px-6">
        <a href="#" className="mr-6 flex items-center space-x-2">
          <Tv className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline sm:inline-block">
            Swift180
          </span>
        </a>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild>
            <a href="mailto:admin@swift180.com">Learn More</a>
          </Button>
        </div>
      </div>
    </header>
  );
}

import { Tv } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-6 px-4 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
           <Tv className="h-6 w-6 text-primary" />
          <p className="text-sm font-semibold text-foreground">Swift180</p>
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Swift180 Inc. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Privacy
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}

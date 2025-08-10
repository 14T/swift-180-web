"use client";

export default function StreamingAppsSection() {
  const apps = ['Netflix', 'Prime Video', 'YouTube', 'Disney+', 'Spotify', 'Hulu'];

  return (
    <section id="apps" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            All Their Favorite Apps in One Place
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            Guests can log in to their own accounts and stream content from the most popular services.
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-4xl overflow-hidden">
            <div className="flex animate-marquee-infinite items-center gap-12 whitespace-nowrap">
              {apps.concat(apps).map((app, index) => (
                <div key={index} className="text-4xl font-bold text-muted-foreground/60">
                  {app}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee-infinite {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}

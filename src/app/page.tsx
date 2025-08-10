import Header from '@/components/landing/header';
import HeroSection from '@/components/landing/hero-section';
import TvUiSection from '@/components/landing/tv-ui-section';
import TransformationSection from '@/components/landing/transformation-section';
import OnboardingSection from '@/components/landing/onboarding-section';
import EntertainmentSection from '@/components/landing/entertainment-section';
import StreamingAppsSection from '@/components/landing/streaming-apps-section';
import AiDiscoverySection from '@/components/landing/ai-discovery-section';
import TestimonialsSection from '@/components/landing/testimonials-section';
import TravelFeaturesSection from '@/components/landing/travel-features-section';
import CtaSection from '@/components/landing/cta-section';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TvUiSection />
        <TransformationSection />
        <TravelFeaturesSection />
        <EntertainmentSection />
        <StreamingAppsSection />
        <OnboardingSection />
        <AiDiscoverySection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

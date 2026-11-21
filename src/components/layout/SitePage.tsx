import type { ReactNode } from 'react';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import ScrollProgress from '@/components/ui/ScrollProgress';
import { StoryMotion } from '@/components/ui/StoryMotion';

export default function SitePage({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <StoryMotion>
      <div className={`site-shell ${className}`}>
        <a className="hs-skip-link" href="#main-content">Skip to content</a>
        <ScrollProgress />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </div>
    </StoryMotion>
  );
}

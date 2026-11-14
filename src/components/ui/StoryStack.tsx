'use client';

import { Children, Fragment, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

const chapters = [
  { id: 'story', title: 'Our Food Philosophy' },
  { id: 'cuisines', title: 'A World of Flavours' },
  { id: 'experiences', title: 'Signature Dishes' },
  { id: 'catering', title: 'The Art of Catering' },
  { id: 'locations', title: 'Our Locations' },
  { id: 'hunger-stories-experience', title: 'The Hunger Stories Experience' },
  { id: 'order', title: 'Your Next Food Story Starts Here' },
];

export default function StoryStack({ children }: { children: ReactNode }) {
  const stackRef = useRef<HTMLDivElement>(null);
  const [activeChapter, setActiveChapter] = useState(-1);

  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;

    const panels = Array.from(stack.querySelectorAll<HTMLElement>('.story-panel'));
    const markers = Array.from(stack.querySelectorAll<HTMLElement>('.chapter-marker'));
    let frame = 0;

    const updatePanelOffsets = () => {
      panels.forEach((panel) => {
        // Tall chapters scroll through their full content before sticking at their bottom edge.
        const top = Math.min(96, window.innerHeight - panel.offsetHeight - 24);
        panel.style.setProperty('--stack-top', `${top}px`);
        panel.dataset.stackReady = 'true';
      });
    };

    const updateActiveChapter = () => {
      frame = 0;
      const threshold = window.innerHeight * 0.5;
      const stackBottom = stack.getBoundingClientRect().bottom;
      let active = -1;
      if (markers[0].getBoundingClientRect().top <= 104 && stackBottom > threshold + 180) {
        markers.forEach((marker, index) => {
          if (marker.getBoundingClientRect().top <= threshold) active = index;
        });
      }
      setActiveChapter((current) => current === active ? current : active);
    };

    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(updateActiveChapter);
    };
    const handleResize = () => {
      updatePanelOffsets();
      scheduleUpdate();
    };

    const observer = new ResizeObserver(handleResize);
    panels.forEach((panel) => observer.observe(panel));
    updatePanelOffsets();
    updateActiveChapter();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      {activeChapter >= 0 && (
        <nav className="chapter-progress" aria-label="Story chapters">
          {chapters.map((chapter, index) => {
            const number = String(index + 1).padStart(2, '0');
            return (
              <a
                key={chapter.id}
                href={`#${chapter.id}`}
                aria-label={`Chapter ${number}: ${chapter.title}`}
                aria-current={activeChapter === index ? 'step' : undefined}
                className="chapter-progress-link"
              >
                {number}
              </a>
            );
          })}
        </nav>
      )}
      <div ref={stackRef} className="story-stack">
        {Children.map(children, (child, index) => {
          const number = String(index + 1).padStart(2, '0');
          const chapter = chapters[index];
          return (
            <Fragment key={number}>
              <div id={chapter.id} className="chapter-marker" tabIndex={-1}>
                <span className="sr-only">Chapter {number}: {chapter.title}</span>
                {index === 0 && <span id="about" className="sr-only" />}
              </div>
              <div className="story-panel" data-chapter={chapter.id} style={{ zIndex: index + 1 }}>
                <span className="story-panel-number" aria-hidden="true">{number}</span>
                {child}
              </div>
            </Fragment>
          );
        })}
      </div>
    </>
  );
}

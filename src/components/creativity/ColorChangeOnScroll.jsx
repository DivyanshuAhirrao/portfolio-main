import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ColorChangeOnScrollGsap() {
  useEffect(() => {
    // Initialize Smooth Scrollbar and delegate to document
    
    // Register ScrollTriggers
    const sectionColor = document.querySelectorAll('[data-bgcolor]');
    if (!sectionColor) return;
    sectionColor.forEach((colorSection, i) => {
      const prevBgColor = i === 0 ? '' : sectionColor[i - 1].dataset.bgcolor;
      const prevTextColor = i === 0 ? '' : sectionColor[i - 1].dataset.textcolor;

      ScrollTrigger.create({
        trigger: colorSection,
        start: 'top 50%',
        onEnter: () =>
          gsap.to(document.body, {
            backgroundColor: colorSection.dataset.bgcolor,
            color: colorSection.dataset.textcolor,
            overwrite: 'auto',
          }),
        onLeaveBack: () =>
          gsap.to(document.body, {
            backgroundColor: prevBgColor,
            color: prevTextColor,
            overwrite: 'auto',
          }),
      });
    });

    return () => {
      // Cleanup Smooth Scrollbar on component unmount
    };
  }, []);

  return (
    <div className="scale-75 main h-screen w-full flex flex-col overflow-auto">
      {/* Your JSX content */}
    </div>
  );
}

export default ColorChangeOnScrollGsap;

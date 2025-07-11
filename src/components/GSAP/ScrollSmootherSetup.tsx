
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/dist/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const ScrollSmootherSetup = () => {
    useEffect(() => {
        ScrollSmoother.create({
            wrapper: '#smooth-wrapper',
            content: '#smooth-content',
            smooth: 1.2,
            effects: true,
        });

        gsap.utils.toArray<HTMLElement>('.fade-in').forEach((el) => {
            gsap.to(el, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                    end: 'top 30%',
                    scrub: true,
                    // markers: true
                },
                y: 100,
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
            });
        });

    }, []);

    return null;
};

export default ScrollSmootherSetup;

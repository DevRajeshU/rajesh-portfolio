import { useEffect, useRef } from 'react';

const useScrollAnimation = (className = 'fade-in', threshold = 0.15) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    // Observe element and all children with animation classes
    const targets = [el, ...el.querySelectorAll(`.${className}`)];
    targets.forEach(t => {
      if (t.classList.contains(className)) observer.observe(t);
    });
    if (el.classList.contains(className)) observer.observe(el);

    return () => observer.disconnect();
  }, [className, threshold]);

  return ref;
};

export default useScrollAnimation;

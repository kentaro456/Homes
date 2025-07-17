import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = ({ end, duration = 2, decimals = 0, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: countRef.current,
        start: "top 80%",
        onEnter: () => {
          if (!hasAnimated) {
            setHasAnimated(true);
            gsap.to({ count: 0 }, {
              count: end,
              duration: duration,
              ease: "power2.out",
              onUpdate: function() {
                setCount(parseFloat(this.targets()[0].count));
              }
            });
          }
        }
      });
    }, countRef);

    return () => ctx.revert();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={countRef} className="inline-block">
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
};

export default AnimatedCounter;
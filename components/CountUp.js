import { useState, useEffect, useRef } from "react";

const CountUp = ({
  end,
  duration,
  suffix = "",
  prefix = "",
  label,
  textColor = "text-gray-800",
  numberColor = "text-green-500",
  numberSize = "text-5xl",
  labelSize = "text-xl"
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!inView) return;

    let startTime = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, inView]);

  return (
    <div ref={countRef} className={`flex flex-col items-center ${textColor}`}>
      <div className={`font-bold ${numberSize} ${numberColor}`}>
        {prefix}{count}{suffix}
      </div>
      <div className={`${labelSize} font-medium`}>{label}</div>
    </div>
  );
};

export default CountUp;


import { useEffect, useState } from 'react';

export const DinoAnimation = () => {
  const [show, setShow] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Show dino after 15 seconds
    const timer = setTimeout(() => {
      setShow(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationEnd = () => {
    setShow(false);
    setHasAnimated(true);
  };

  if (hasAnimated || !show) return null;

  return (
    <div 
      className="fixed bottom-4 w-12 h-12 bg-primary pixelated-dino"
      onAnimationEnd={handleAnimationEnd}
      style={{
        animation: 'dinoWalk 8s linear forwards',
        WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 18h2v2h-2zM21 18h2v2h-2zM23 18h2v2h-2zM25 18h2v2h-2zM27 18h2v2h-2zM29 18h2v2h-2zM19 20h2v2h-2zM29 20h2v2h-2zM19 22h2v2h-2zM29 22h2v2h-2zM19 24h2v2h-2zM21 24h2v2h-2zM23 24h2v2h-2zM25 24h2v2h-2zM27 24h2v2h-2zM29 24h2v2h-2zM23 26h2v2h-2zM19 28h2v2h-2zM27 28h2v2h-2z' fill='black'/%3E%3C/svg%3E")`,
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain',
      }}
    />
  );
};

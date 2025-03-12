
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
      className="fixed bottom-4 w-24 h-24 bg-green-700 pixelated-dino"
      onAnimationEnd={handleAnimationEnd}
      style={{
        animation: 'dinoWalk 15s linear forwards',
        WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 14h2v2h-2zM16 14h2v2h-2zM18 14h2v2h-2zM20 14h2v2h-2zM22 14h2v2h-2zM24 14h2v2h-2zM26 14h2v2h-2zM28 14h2v2h-2zM30 14h2v2h-2zM32 14h2v2h-2zM12 16h2v2h-2zM14 16h2v2h-2zM32 16h2v2h-2zM34 16h2v2h-2zM10 18h2v2h-2zM12 18h2v2h-2zM34 18h2v2h-2zM36 18h2v2h-2zM10 20h2v2h-2zM12 20h2v2h-2zM34 20h2v2h-2zM36 20h2v2h-2zM10 22h2v2h-2zM12 22h2v2h-2zM34 22h2v2h-2zM36 22h2v2h-2zM10 24h2v2h-2zM12 24h2v2h-2zM18 24h2v2h-2zM20 24h2v2h-2zM22 24h2v2h-2zM24 24h2v2h-2zM26 24h2v2h-2zM28 24h2v2h-2zM30 24h2v2h-2zM32 24h2v2h-2zM34 24h2v2h-2zM36 24h2v2h-2zM10 26h2v2h-2zM12 26h2v2h-2zM18 26h2v2h-2zM20 26h2v2h-2zM22 26h2v2h-2zM24 26h2v2h-2zM26 26h2v2h-2zM28 26h2v2h-2zM30 26h2v2h-2zM32 26h2v2h-2zM34 26h2v2h-2zM36 26h2v2h-2zM10 28h2v2h-2zM12 28h2v2h-2zM18 28h2v2h-2zM20 28h2v2h-2zM22 28h2v2h-2zM24 28h2v2h-2zM26 28h2v2h-2zM28 28h2v2h-2zM30 28h2v2h-2zM32 28h2v2h-2zM34 28h2v2h-2zM36 28h2v2h-2zM10 30h2v2h-2zM12 30h2v2h-2zM14 30h2v2h-2zM16 30h2v2h-2zM18 30h2v2h-2zM20 30h2v2h-2zM22 30h2v2h-2zM24 30h2v2h-2zM26 30h2v2h-2zM28 30h2v2h-2zM30 30h2v2h-2zM32 30h2v2h-2zM34 30h2v2h-2zM36 30h2v2h-2zM14 32h2v2h-2zM16 32h2v2h-2zM18 32h2v2h-2zM20 32h2v2h-2zM22 32h2v2h-2zM24 32h2v2h-2zM26 32h2v2h-2zM28 32h2v2h-2zM30 32h2v2h-2zM32 32h2v2h-2zM16 34h2v2h-2zM18 34h2v2h-2zM20 34h2v2h-2zM28 34h2v2h-2zM30 34h2v2h-2zM18 36h2v2h-2zM28 36h2v2h-2z' fill='black'/%3E%3C/svg%3E")`,
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain',
      }}
    />
  );
};

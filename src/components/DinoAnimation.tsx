
import { useEffect, useState, useRef } from 'react';

export const DinoAnimation = () => {
  const [show, setShow] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [apples, setApples] = useState<{ id: number; position: number; eaten: boolean }[]>([]);
  const dinoRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    // Show dino after 15 seconds
    const timer = setTimeout(() => {
      setShow(true);
      // Create 5 apples at different positions
      const newApples = Array.from({ length: 5 }, (_, i) => ({
        id: i,
        position: 20 + (i * Math.floor(window.innerWidth / 6)),
        eaten: false
      }));
      setApples(newApples);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!show) return;

    // Function to check if dino has reached an apple
    const checkCollisions = () => {
      if (!dinoRef.current) return;
      
      const dinoRect = dinoRef.current.getBoundingClientRect();
      const dinoLeft = dinoRect.left;
      const dinoRight = dinoRect.right;
      
      setApples(prev => 
        prev.map(apple => {
          const appleElement = document.getElementById(`apple-${apple.id}`);
          if (!appleElement || apple.eaten) return apple;
          
          const appleRect = appleElement.getBoundingClientRect();
          const appleLeft = appleRect.left;
          
          // Check if dino has reached the apple
          if (dinoRight >= appleLeft && dinoLeft <= appleLeft && !apple.eaten) {
            appleElement.classList.add('apple-eaten');
            return { ...apple, eaten: true };
          }
          
          return apple;
        })
      );
      
      animationRef.current = requestAnimationFrame(checkCollisions);
    };
    
    animationRef.current = requestAnimationFrame(checkCollisions);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [show]);

  const handleAnimationEnd = () => {
    setShow(false);
    setHasAnimated(true);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  if (hasAnimated || !show) return null;

  return (
    <>
      {/* Render apples */}
      {apples.map((apple) => (
        <div 
          key={apple.id}
          id={`apple-${apple.id}`}
          className={`fixed bottom-6 w-8 h-8 bg-red-500 pixelated-apple ${apple.eaten ? 'apple-eaten' : ''}`}
          style={{
            left: `${apple.position}px`,
            WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 2h2v2h-2zM8 2h2v2h-2zM6 4h2v2h-2zM8 4h2v2h-2zM4 6h2v2h-2zM6 6h2v2h-2zM8 6h2v2h-2zM10 6h2v2h-2zM2 8h2v2h-2zM4 8h2v2h-2zM6 8h2v2h-2zM8 8h2v2h-2zM10 8h2v2h-2zM12 8h2v2h-2zM2 10h2v2h-2zM4 10h2v2h-2zM6 10h2v2h-2zM8 10h2v2h-2zM10 10h2v2h-2zM12 10h2v2h-2zM4 12h2v2h-2zM6 12h2v2h-2zM8 12h2v2h-2zM10 12h2v2h-2z' fill='black'/%3E%3C/svg%3E")`,
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskSize: 'contain',
          }}
        />
      ))}

      {/* Render dino */}
      <div 
        ref={dinoRef}
        className="fixed bottom-4 w-32 h-32 bg-green-600 pixelated-dino"
        onAnimationEnd={handleAnimationEnd}
        style={{
          animation: 'dinoWalk 15s linear forwards',
          WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18 14h4v4h-4zM22 14h4v4h-4zM26 14h4v4h-4zM30 14h4v4h-4zM34 14h4v4h-4zM38 14h4v4h-4zM14 18h4v4h-4zM18 18h4v4h-4zM38 18h4v4h-4zM42 18h4v4h-4zM10 22h4v4h-4zM14 22h4v4h-4zM42 22h4v4h-4zM46 22h4v4h-4zM10 26h4v4h-4zM14 26h4v4h-4zM42 26h4v4h-4zM46 26h4v4h-4zM10 30h4v4h-4zM14 30h4v4h-4zM42 30h4v4h-4zM46 30h4v4h-4zM10 34h4v4h-4zM14 34h4v4h-4zM18 34h4v4h-4zM22 34h4v4h-4zM26 34h4v4h-4zM30 34h4v4h-4zM34 34h4v4h-4zM38 34h4v4h-4zM42 34h4v4h-4zM46 34h4v4h-4zM14 38h4v4h-4zM18 38h4v4h-4zM22 38h4v4h-4zM26 38h4v4h-4zM30 38h4v4h-4zM34 38h4v4h-4zM38 38h4v4h-4zM42 38h4v4h-4zM14 42h4v4h-4zM18 42h4v4h-4zM22 42h4v4h-4zM26 42h4v4h-4zM30 42h4v4h-4zM34 42h4v4h-4zM38 42h4v4h-4zM18 46h4v4h-4zM34 46h4v4h-4z' fill='black'/%3E%3C/svg%3E")`,
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskSize: 'contain',
        }}
      />
    </>
  );
};

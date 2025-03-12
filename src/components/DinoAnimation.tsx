
import { useEffect, useState, useRef } from 'react';
import { Apple } from 'lucide-react';

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
          className={`fixed bottom-6 w-10 h-10 text-red-500 pixelated-apple ${apple.eaten ? 'apple-eaten' : ''}`}
          style={{
            left: `${apple.position}px`,
          }}
        >
          <Apple className="w-full h-full" />
        </div>
      ))}

      {/* Render dino as custom image */}
      <div 
        ref={dinoRef}
        className="fixed bottom-4 w-32 h-32 pixelated-dino"
        onAnimationEnd={handleAnimationEnd}
      >
        <img 
          src="/lovable-uploads/a49fb822-c7e9-435c-bc9d-ffd5b479ebb0.png" 
          alt="Cute dinosaur" 
          className="w-full h-full" 
        />
      </div>
    </>
  );
};

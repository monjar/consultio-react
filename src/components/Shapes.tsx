import React, { useEffect, useState, useCallback } from 'react';
import "./Shapes.css"
interface Position {
  type: string;
  size: number;
  x: number;
  y: number;
}

function Shapes() {
  const [shapes, setShapes] = useState<Position[]>([]);

  const checkCollision = (shape1: Position, shape2: Position) => {
    const dx = shape1.x - shape2.x;
    const dy = shape1.y - shape2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const minDistance = (shape1.size + shape2.size) / 2;
    return distance < minDistance;
  };

  const generateMultipleShapes = useCallback(() => {
    const newShapes: Position[] = [];
    const maxAttempts = 100;
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    // Try to place 30-50 shapes
    const targetShapes = Math.floor(Math.random() * 20 + 30);

    for (let i = 0; i < targetShapes; i++) {
      let attempts = 0;
      let validPosition = false;
      let newShape: Position = {
        type: '',
        size: 0,
        x: 0,
        y: 0
      };

      while (!validPosition && attempts < maxAttempts) {
        const size = Math.random() * 60 + 40;
        newShape = {
          type: ['circle', 'triangle','square', 'rhombus'][Math.floor(Math.random() * 4)],
          size,
          x: Math.floor(size/2 + Math.random() * (containerWidth - size)),
          y: Math.floor(size/2 + Math.random() * (containerHeight - size)),
        };

        validPosition = true;
        // Check collision with all existing shapes
        for (const existingShape of newShapes) {
          if (checkCollision(newShape, existingShape)) {
            validPosition = false;
            break;
          }
        }
        attempts++;
      }

      if (validPosition) {
        newShapes.push(newShape);
      }
    }
    
    setShapes(newShapes);

  }, []);

  useEffect(() => {
    generateMultipleShapes();
    const handleResize = () => {
      generateMultipleShapes();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [generateMultipleShapes]);

  return (
    <div className="shapes-container">
      {shapes.map((shape, index) => (
        <div 
          key={index}
          className={`shape ${shape.type}`}
          style={{ 
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            position: 'absolute',
            left: `${shape.x}px`,
            top: `${shape.y}px`,
            animationName: Math.random() > 0.5 ? 'rotate' : `move${Math.floor(Math.random() * 3 + 1)}`,
            animationDuration: `${Math.random() * 10 + 15}s`,
            animationDelay: `${Math.random() * -20}s`,
            ...(!shape.type.includes('triangle') ? {
              background: `linear-gradient(${Math.random() * 360}deg, 
                hsl(${Math.random() * 360}, ${70 + Math.random() * 30}%, ${60 + Math.random() * 20}%), 
                hsl(${Math.random() * 360}, ${70 + Math.random() * 30}%, ${60 + Math.random() * 20}%))`
            } : {
              '--half-size': `${shape.size / 2}px`,
              '--size': `${shape.size}px`,
              '--gradient-color': `hsl(${Math.random() * 360}, ${70 + Math.random() * 30}%, ${60 + Math.random() * 20}%)`
            }),
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

export default Shapes;
import './BwImage.css'
import React, { useState } from 'react';

export default function BwImage() {
    const [isHovered, setIsHovered] = useState(false);
      
        const handleMouseOver = () => {
          setIsHovered(true);
        };
      
        const handleMouseOut = () => {
          setIsHovered(false);
        };

        const handleTouchStart = () => {
            setIsHovered(true);
          };
        
          const handleTouchEnd = () => {
            setIsHovered(false);
          };
        
    
        return (
        <div className="bw-pic"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}>
            <div>{isHovered 
            ?<img src="./JM-Portrait 2021.JPG" alt="" />:
            <img src="./JM-Portrait 2021-BW-Green.jpg" alt="" />}
            </div>
        </div>
    )
}

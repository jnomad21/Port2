import './QuoteTranslator.css';
import React, { useState } from 'react';

export default function QuoteTranslator() {
        const [isHovered, setIsHovered] = useState(false);
      
        const handleMouseOver = () => {
          setIsHovered(true);
        };
      
        const handleMouseOut = () => {
          setIsHovered(false);
        };

    return (
        <>
        <div className="bw-pic"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
            <div>{isHovered 
            ?<img className='portraits' src="./JM-Portrait 2021.JPG" alt="" />:
            <img className='portraits' src="./JM-Portrait 2021-BW-Green.jpg" alt="" />}
            </div>
        </div>
        <div className='quote-body'>
            <div 
                className='quote-container' 
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}>
                <div className="quote-raw">
                    <p className='quote-text'>
                        {isHovered 
                        ? <span className='quote-en'>"What we think of as impossible is just something that has not yet been engineered"</span>
                        : <span className='quote-fr'>"Ce que nous considérons comme impossible n’est que quelque chose qui n’a pas encore été conçu"</span>}
                    </p>
                    <span className="quote-attr">-JM</span>
                </div>
            </div>
        </div></>
    )
}

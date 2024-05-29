import React, { useEffect, useState } from 'react';

function TypewriterEffect({ text, speed, color, marginLeft }) {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setDisplayText((prevText) => prevText + text[index]);
            index++;
            if (index === text.length) {
                clearInterval(intervalId);
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [text, speed]);

    return (
        <h6 style={{ color: color, marginLeft: marginLeft }}>{displayText}</h6>
    );
}

export default TypewriterEffect;

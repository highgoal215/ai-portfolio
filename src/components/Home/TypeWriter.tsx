import { useState, useEffect } from "react";
import { TypeWriterProps } from "../../../types";


export default function TypeWriter({ text, speed = 100 }: TypeWriterProps) {
    const [displayedText, setDisplayedText] = useState<string>('');
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text.charAt(index));
                setIndex((prev) => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        }
    }, [index, text, speed]);

    return (
        <span>
            {displayedText}
            {index < text.length && <span className="blinking-cursor">|</span>}
        </span>
    );
}

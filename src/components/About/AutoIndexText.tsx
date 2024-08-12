import { useState, useRef, useEffect } from "react";

interface AutoIndexTextProps {
    text: string;
    title: string;
}

export default function AutoIndexText({ text, title }: AutoIndexTextProps) {
    const [formattedText, setFormattedText] = useState<string[]>([]);
    const textRef = useRef<HTMLDivElement | null>(null);

    // Measure the width of a given text with a specific font
    function measureTextWidth(text: string, font: string): number {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (context) {
            context.font = font;
            return context.measureText(text).width;
        }
        return 0;
    }

    // Format the text into lines based on the container width
    function formatText(text: string, font: string, containerWidth: number): string[] {
        const paragraphs = text.split('\n\n'); // Split by paragraphs
        const formattedLines: string[] = [];

        paragraphs.forEach(paragraph => {
            const words = paragraph.split(' '); // Split paragraph into words
            let currentLine = '';

            words.forEach(word => {
                const newLine = currentLine ? `${currentLine} ${word}` : word;
                const lineWidth = measureTextWidth(newLine, font);

                if (lineWidth > containerWidth - 40) { // Adjust if needed
                    if (currentLine) {
                        formattedLines.push(currentLine.trim());
                    }
                    currentLine = word;
                } else {
                    currentLine = newLine;
                }
            });

            if (currentLine) {
                formattedLines.push(currentLine.trim());
            }
            // Add an empty line to represent the \n\n break
            formattedLines.push('');
        });

        // Remove the last empty line if the text doesn't end with \n\n
        if (formattedLines[formattedLines.length - 1] === '') {
            formattedLines.pop();
        }

        return formattedLines;
    };

    // Process text with strong markers
    function processTextWithStrongTags(lines: string[]): JSX.Element[] {
        return lines.map((line, index) => {
            const parts = line.split(/(\*\*.*?\*\*)/g);

            return (
                <div key={index} className="strong-text-wrapper">
                    {parts.map((part, i) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={i}>{part.slice(2, -2)}</strong>;
                        }
                        return <span key={i}>{part}</span>;
                    })}
                </div>
            );
        });
    };
      
    useEffect(() => {
        function handleResize() {
            if (textRef.current) {
                const font = window.getComputedStyle(textRef.current).font;
                const containerWidth = textRef.current.clientWidth;
                const formattedLines = formatText(text, font, containerWidth);
                setFormattedText(formattedLines);
            }
        }

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [text]);

    return (
        <div className="bio-content">
            <div className="text-lines">
                <p>
                    <span className="index">1</span>
                    <span className="text" ref={textRef}>/**</span>
                </p>
                <p>
                    <span className="index">2</span>
                    <span className="text">&nbsp;*&nbsp;<span className="title">{title}</span></span>
                </p>
                {processTextWithStrongTags(formattedText).map((line, index) => (
                    <div key={index} className="line">
                        <span className="index">{index + 3}</span>
                        <div className="text">&nbsp;*&nbsp;{line}</div>
                    </div>
                ))}
                <p>
                    <span className="index">{formattedText.length + 3}</span>
                    <span className="text">&nbsp;*/</span>
                </p>
            </div>
        </div>
    );
}

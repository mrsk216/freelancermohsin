import React, { useEffect, useRef } from 'react';

interface WordAnimationProps {
    words: string[];
    className?: string;
}

const WordAnimation: React.FC<WordAnimationProps> = ({ words, className = '' }) => {
    const wordWrapperRef = useRef<HTMLSpanElement>(null);
    const currentWordIndexRef = useRef(0);

    useEffect(() => {
        if (!wordWrapperRef.current) return;

        const wordElements = wordWrapperRef.current.querySelectorAll('.change-word');
        const wordArray: HTMLSpanElement[][] = [];

        // Initialize: split each word into letters
        wordElements.forEach((wordElement) => {
            const content = wordElement.innerHTML;
            wordElement.innerHTML = '';
            const letters: HTMLSpanElement[] = [];

            for (let i = 0; i < content.length; i++) {
                const letter = document.createElement('span');
                letter.className = 'letter';
                letter.innerHTML = content.charAt(i) === ' ' ? '&nbsp;' : content.charAt(i);
                wordElement.appendChild(letter);
                letters.push(letter);
            }

            wordArray.push(letters);
        });

        // Set first word visible
        if (wordElements[0]) {
            (wordElements[0] as HTMLElement).style.opacity = '1';
        }

        const animateLetterOut = (cw: HTMLSpanElement[], i: number) => {
            setTimeout(() => {
                cw[i].className = 'letter out';
            }, i * 80);
        };

        const animateLetterIn = (nw: HTMLSpanElement[], i: number) => {
            setTimeout(() => {
                nw[i].className = 'letter in';
            }, 340 + i * 80);
        };

        const changeWord = () => {
            const cw = wordArray[currentWordIndexRef.current];
            const nw = currentWordIndexRef.current === wordArray.length - 1
                ? wordArray[0]
                : wordArray[currentWordIndexRef.current + 1];

            // Animate out current word
            for (let i = 0; i < cw.length; i++) {
                animateLetterOut(cw, i);
            }

            // Animate in next word
            for (let i = 0; i < nw.length; i++) {
                nw[i].className = 'letter behind';
                nw[0].parentElement!.style.opacity = '1';
                animateLetterIn(nw, i);
            }

            currentWordIndexRef.current = currentWordIndexRef.current === wordArray.length - 1
                ? 0
                : currentWordIndexRef.current + 1;
        };

        // Initial animation
        changeWord();

        // Set interval for word changes
        const intervalId = setInterval(changeWord, 4000);

        // Cleanup
        return () => {
            clearInterval(intervalId);
        };
    }, [words]);

    return (
        <span 
            ref={wordWrapperRef} 
            className={`change-word-wrapper ${className}`}
        >
            {words.map((word, index) => (
                <span 
                    key={index} 
                    className="change-word"
                    style={{ opacity: index === 0 ? 1 : 0 }}
                >
                    {word}
                </span>
            ))}
        </span>
    );
};

export default WordAnimation;
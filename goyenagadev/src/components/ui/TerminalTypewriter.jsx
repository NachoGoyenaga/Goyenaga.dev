import { useState, useEffect } from 'react';

export function TerminalTypewriter({ phrases = [] }) {
  const [index, setIndex] = useState(0);
  const [subText, setSubText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setSubText('');
    setIndex(0);
  }, [phrases]);

  useEffect(() => {
    if (!phrases.length) return;
    const current = phrases[index] || '';
    const speed = isDeleting ? 25 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setSubText(current.substring(0, subText.length + 1));
        if (subText === current) {
          setTimeout(() => setIsDeleting(true), 2400);
        }
      } else {
        setSubText(current.substring(0, subText.length - 1));
        if (subText === '') {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [subText, isDeleting, index, phrases]);

  return (
    <span className="text-emerald-400 inline-flex items-center">
      <span>{subText}</span>
      <span className="inline-block w-2.5 h-6 ml-1.5 bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
    </span>
  );
}
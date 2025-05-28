import { useEffect, useRef } from 'react';

const AutoplayProgress = ({ timeLeft, progress }) => {
    const circleRef = useRef(null);
    const radius = 20;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        if (circleRef.current) {
            const offset = circumference * (1 - progress) * 1.1;
            circleRef.current.style.strokeDashoffset = offset;
        }
    }, [progress]);

    const isComplete = progress >= 1;

    return (
        <div className="autoplay-progress absolute bottom-4 right-4 w-12 h-12 z-10">
            <svg viewBox="0 0 48 48" className="w-full h-full">
                <defs>
                    <linearGradient id="progress-gradient" x1="1" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="red" />
                        <stop offset="100%" stopColor="red" />
                    </linearGradient>
                </defs>
                <circle
                    cx="24"
                    cy="24"
                    r={radius}
                    fill="none"
                    stroke="url(#progress-gradient)"
                    strokeWidth="4"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference}
                    ref={circleRef}
                    className="transition-all duration-300"
                />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-red-600 font-semibold">
                {timeLeft}s
            </span>
        </div>
    );
};

export default AutoplayProgress;

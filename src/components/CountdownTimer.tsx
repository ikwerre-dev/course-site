'use client';
import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 14,
    minutes: 26,
    seconds: 44
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        // Add countdown logic here
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-4 text-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="bg-black/30 p-4 rounded-lg">
          <div className="text-3xl font-bold text-yellow-400">{value}</div>
          <div className="text-sm text-gray-300 uppercase">{unit}</div>
        </div>
      ))}
    </div>
  );
}
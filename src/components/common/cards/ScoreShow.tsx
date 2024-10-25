import React from 'react'

interface Props { 
    scoreValue: number | string;
}

const colorMapping: { [key: string]: { bgColor: string, textColor: string } } = {
    'low': { bgColor: 'bg-red-600', textColor: 'text-white' },
    'med': { bgColor: 'bg-yellow-500', textColor: 'text-black' },
    'high': { bgColor: 'bg-green-500', textColor: 'text-white' },
    // Add more mappings as needed
};

export default function ScoreShow({scoreValue}: Props) {
    let bgColor = '';
    let textColor = '';

    if (typeof scoreValue === 'number') {
        if (scoreValue < 40) {
            bgColor = 'bg-red-600';
            textColor = 'text-white';
        } else if (scoreValue < 60) {
            bgColor = 'bg-yellow-500';
            textColor = 'text-black';
        } else {
            bgColor = 'bg-green-500';
            textColor = 'text-white';
        }
    } else {
        const colors = colorMapping[scoreValue] || { bgColor: 'bg-gray-500', textColor: 'text-white' };
        bgColor = colors.bgColor;
        textColor = colors.textColor;
    }

    return (
        <div className={`rounded-md py-1 px-2 aspect-square text-md flex items-center justify-center ${bgColor} ${textColor}`}> 
            {typeof scoreValue === 'number' ? `${scoreValue}%` : scoreValue}
        </div>
    )
}

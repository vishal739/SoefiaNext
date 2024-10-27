import React from 'react'

interface Props {
    valueChange: number;
}

export default function RaiseOrDropValueLesson({ valueChange }: Props) {
    if (valueChange > 0) {
        return <span className="text-sm text-green-600">Raised {valueChange}% since last lesson</span>
    }
    return (
        <span className="text-sm text-red-600">Dropped {Math.abs(valueChange)}% since last lesson</span>
    )
}

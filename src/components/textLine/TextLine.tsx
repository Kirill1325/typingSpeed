import React, { useEffect, useRef, useState } from 'react'
import { quotesArray } from '../../dataset'

type Char = {
    index: number,
    char: string
}

export const TextLine = () => {

    const [quote, setQuote] = useState(quotesArray[0].quote.split(''))

    const [currentIndex, setCurrentIndex] = useState(0)
    // const [startIndex, setStartIndex] = useState(0)
    const [correctIndices, setCorrectIndices] = useState<number[]>([])
    const [errorIndices, setErrorIndices] = useState<number[]>([])
    const [errors, setErrors] = useState(0)

    const ref = useRef<HTMLDivElement>(null)

    // console.log(quotesArray[0].quote.split(/(\s+)/))
    // console.log(quotesArray[0].quote.split(' ').flatMap((word, i) => {return word}))
    // console.log(quotesArray[0].quote.split(' ').map((word, i) => word.split('').map((char, i) => { return char })))

    useEffect(() => {
        console.log(quote)
    }, [quote])

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        // e.preventDefault()
        const key = e.key
        // const key = e.key
        // console.log(key)
        if (key === quote[currentIndex]) {
            setCurrentIndex(currentIndex + 1)
            setCorrectIndices(prevCorrectIndices => [...prevCorrectIndices, currentIndex])

        } else {
            if (!['Shift', 'Control', 'ControlLeft', 'ControlRight', 'Alt', 'AltLeft', 'AltRight', 'Tab', 'Meta', 'Backspace'].includes(key)) {
                setCurrentIndex(currentIndex + 1)
                setErrorIndices(prevErrorIndices => [...prevErrorIndices, currentIndex])
                setErrors(prevErrors => prevErrors + 1)
            }

        }
        if (currentIndex > 25) {
            setCurrentIndex(0)
            setErrorIndices([])
            setCorrectIndices([])
            setQuote(prevQuote => prevQuote.slice(currentIndex + 1, prevQuote.length))
        }

    }

    return (
        <div
            className="text-line"
            onKeyDown={handleKeyDown}
            tabIndex={0}
            ref={ref}
        >

            {quote.map((char, i) =>
                <span className=
                    {
                        i === currentIndex
                            ? 'current'
                            : errorIndices.includes(i)
                                ? 'mistake'
                                : correctIndices.includes(i) ? 'correct' : ''
                    }
                    key={i}
                >
                    {char}
                </span>)}
        </div>

    )
}

import React, { useEffect, useRef, useState } from 'react'
import { quotesArray } from '../../dataset'

type Char = {
    index: number,
    char: string
}

export const TextLine = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [startIndex, setStartIndex] = useState(0)
    // const [currentLine, setCurrentLine] = useState(1)
    // const [currentChar, setCurrentChar] = useState<Char>({ index: 0, char: quotesArray[0].quote.split(' ')[0][0] })
    // const [isError, setIsError] = useState(false)
    // const [errorIndex, setErrorIndex] = useState<number | null>(null)
    const [correctIndices, setCorrectIndices] = useState<number[]>([])
    const [errorIndices, setErrorIndices] = useState<number[]>([])
    const [errors, setErrors] = useState(0)



    const ref = useRef<HTMLDivElement>(null)

    // console.log(quotesArray[0].quote.split(/(\s+)/))
    // console.log(quotesArray[0].quote.split(' ').flatMap((word, i) => {return word}))
    console.log(quotesArray[0].quote.split(' ').map((word, i) => word.split('').map((char, i) => { return char })))

    // useEffect(() => {
    //     console.log(currentIndex)
    // }, [currentIndex])

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        // e.preventDefault()
        const key = e.key
        // const key = e.key
        // console.log(key)
        if (key === quotesArray[0].quote.charAt(currentIndex)) {
            setCurrentIndex(currentIndex + 1)
            setCorrectIndices(prevCorrectIndices => [...prevCorrectIndices, currentIndex])

        } else {
            if (!['Shift', 'Control', 'ControlLeft', 'ControlRight', 'Alt', 'AltLeft', 'AltRight', 'Tab', 'Meta', 'Backspace'].includes(key)) {
                setCurrentIndex(currentIndex + 1)
                setErrorIndices(prevErrorIndices => [...prevErrorIndices, currentIndex])
                setErrors(prevErrors => prevErrors + 1)
            }

        }
        if (currentIndex > 14) {
            // queueMicrotask(() => setCurrentIndex(0))
            setStartIndex(prevStartIndex => prevStartIndex + 15)
            setCurrentIndex(0)
            setErrorIndices([])
            setCorrectIndices([])

        }

    }

    // useEffect(() => {
    //     if (currentIndex > 14) {
    //         // queueMicrotask(() => setCurrentIndex(0))
    //         setCurrentIndex(0)
    //         setErrorIndices([])
    //         setCorrectIndices([])

    //     }
    // }, [currentIndex])

    return (
        <div
            className="text-line"
            onKeyDown={handleKeyDown}
            tabIndex={0}
            ref={ref}
        >
            {/* {quotesArray[0].quote.split(/(\s+)/).slice(0, currentChar + 10).map((word, i) =>
                <span key={i} className='word'>
                    {word.split('').map((char, i) =>
                        <span key={i} className={'char' + (i === currentChar ? ' current' : '')}>{char} </span>
                    )}
                </span>
            )} */}

            {quotesArray[0].quote.split('').slice(startIndex, currentIndex + 100).map((char, i) =>
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

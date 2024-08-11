import React, { useEffect, useRef, useState } from 'react'
import { quotesArray } from '../../dataset'
import { useAppDispatch, useAppSelector } from '../../store'
import { setMistakes, setWpm } from '../stats/StatsSlice'
import { setIsPlaying } from '../timer/timerSlice'
import './text-line.scss'
import { toggleModal } from '../modal/modalSlice'


export const TextLine = () => {
    
    const index = Math.floor(Math.random() * quotesArray.length)
    const [quote, setQuote] = useState(quotesArray[index].quote.split(''))

    const [currentIndex, setCurrentIndex] = useState(0)
    const [correctIndices, setCorrectIndices] = useState<number[]>([])
    const [errorIndices, setErrorIndices] = useState<number[]>([])

    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        ref.current?.focus()
    }, [])

    const dispatch = useAppDispatch()
    const { isPlaying, seconds } = useAppSelector(state => state.timerSlice)


    useEffect(() => {
        if (!isPlaying) {
            setQuote(quotesArray[index].quote.split(''))
            setCurrentIndex(0)
            setCorrectIndices([])
            setErrorIndices([])
        }
    }, [isPlaying])

    useEffect(() => {
        if (seconds !== 0 && currentIndex !== 0) {
            const wpm = (correctIndices.length / 5 / (seconds / 60)).toFixed(5)
            dispatch(setWpm(wpm))
        }
    }, [seconds])

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        const key = e.key
        if (currentIndex === 0) {
            dispatch(setIsPlaying(true))
        }

        if (currentIndex === quote.length) {
            dispatch(setIsPlaying(false))
            dispatch(toggleModal(true))
        }

        if (key === quote[currentIndex]) {
            setCurrentIndex(currentIndex + 1)
            setCorrectIndices(prevCorrectIndices => [...prevCorrectIndices, currentIndex])

        } else {
            if (!['Shift', 'Control', 'ControlLeft', 'ControlRight', 'Alt', 'AltLeft', 'AltRight', 'Tab', 'Meta', 'Backspace'].includes(key)) {
                setCurrentIndex(currentIndex + 1)
                setErrorIndices(prevErrorIndices => [...prevErrorIndices, currentIndex])
                dispatch(setMistakes())
            }

        }
        if (currentIndex > 25 && key === ' ') {
            setCurrentIndex(0)
            setErrorIndices([])
            setCorrectIndices([])
            setQuote(prevQuote => prevQuote.slice(currentIndex + 1, prevQuote.length))
        }

    }

    return (

        <div className='text-line-container' >
            <div
                className="text-line"
                onKeyDown={handleKeyDown}
                tabIndex={1}
                ref={ref}
            >
                {quote.map((char, i) =>
                    <span
                        key={i}
                        className={
                            i === currentIndex
                                ? 'current'
                                : errorIndices.includes(i)
                                    ? 'mistake'
                                    : correctIndices.includes(i) ? 'correct' : ''
                        }
                    >
                        {char}
                    </span>)}
            </div>
        </div>

    )
}

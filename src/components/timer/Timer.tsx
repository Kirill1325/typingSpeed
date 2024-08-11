import { useAppDispatch, useAppSelector } from '../../store'
import { setIsPlaying, decreaseSeconds, setTime, restartTimer } from './timerSlice'
import { useEffect } from 'react'
import './timer.scss'
import { toggleModal } from '../modal/modalSlice'

export const Timer = () => {

    const { selectedTime, isPlaying, timeSettings, seconds } = useAppSelector(state => state.timerSlice)

    useEffect(() => {
        dispatch(restartTimer())
    }, [selectedTime])

    const dispatch = useAppDispatch()

    useEffect(() => {
        // console.log(seconds)
        if (seconds > 0 && isPlaying) {
            setTimeout(() => {
                dispatch(decreaseSeconds())
            }, 1000);
        } else {

            dispatch(setIsPlaying(false))
        }

        seconds === 0 && dispatch(toggleModal(true))
    }, [seconds, isPlaying]);

    return (
        <div className='timer-container'>
            <p className={isPlaying ? 'active' : ''}>{isPlaying ? seconds : selectedTime}</p>
            <div className={isPlaying ? 'timer-settings disabled' : 'timer-settings '}>
                {timeSettings.map(time =>
                    <button key={time} onClick={() => dispatch(setTime(time))} className={time === selectedTime ? 'active' : ''}>
                        {time}
                    </button>
                )}

            </div>
        </div>
    )
}

import { useAppSelector } from '../../store'
import { RestartButton } from '../restartButton/RestartButton'
import './stats.scss'

export const Stats = () => {

    const { mistakes, wpm } = useAppSelector(state => state.statsSlice)
    const {selectedTime} = useAppSelector(state => state.timerSlice)

    return (
        <div className="statistics">
            <div className="wpm">
                <p>Words/Min</p>
                <b>{wpm}</b>
            </div>
            <div className="mistakes">
                <p>Mistakes</p>
                <b>{mistakes}</b>
            </div>
            <div className="time">
                <p>Time</p>
                <b>{selectedTime}</b>
            </div>
            <RestartButton />
        </div>
    )
}

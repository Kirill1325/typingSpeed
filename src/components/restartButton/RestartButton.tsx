import RefreshIcon from '@mui/icons-material/Refresh';
import { resetMistakes } from '../stats/StatsSlice';
import { restartTimer, setIsPlaying } from '../timer/timerSlice';
import { useAppDispatch } from '../../store';
import { toggleModal } from '../modal/modalSlice';
import cl from './restart-button.module.scss'


export const RestartButton = () => {

    const dispatch = useAppDispatch()

    const handleRestartClick = () => {
        dispatch(restartTimer())
        dispatch(setIsPlaying(false))
        dispatch(resetMistakes())
        dispatch(toggleModal(false))
    }

    return (
        <div className={cl.buttonContainer}>
            <button onClick={() => handleRestartClick()}>
                <RefreshIcon />
            </button>
        </div>
    )
}

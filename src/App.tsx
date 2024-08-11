import './App.scss'
import { Stats } from './components/stats/Stats'
import { TextLine } from './components/textLine/TextLine'
import { Timer } from './components/timer/Timer'
import { useAppSelector } from './store'
import { Modal } from '@mui/material'
import { RestartButton } from './components/restartButton/RestartButton'

function App() {

  const { isModalActive } = useAppSelector(state => state.modalSlice)

  return (
    <div className="App">

      <h1>Test Your Typing Skills</h1>

      <Timer />

      <TextLine />

      <RestartButton />

      <Modal
        open={isModalActive}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <Stats />
        </div>
      </Modal>

    </div>
  )
}

export default App

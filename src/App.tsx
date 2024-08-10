import './App.scss'
import { Stats } from './components/stats/Stats'
import { TextLine } from './components/textLine/TextLine'
import { Timer } from './components/timer/Timer'

function App() {

  return (
    <div className="App">

      <h1>Test Your Typing Skills</h1>

      <Timer/>

      <TextLine/>

      <div className='button-container'>
        <button>Restart</button>
      </div>

      <Stats/>

    </div>
  )
}

export default App

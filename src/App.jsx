import './App.css'

const ResultLine = () => {
  return (
    <div className='result-line'>
      <div>
        <p className='result-type'>Type of data</p>
        <p className='pro-person'>/ person</p>
      </div>
      <div className='amount'>$4.27</div>
    </div>
  )
}

const Results = () => {
  return (
    <div className='results'>
      <ResultLine />
      <ResultLine />
      <button>RESET</button>
    </div>
  )
}

const Tip = () => {
  return (
    <div className='tip'>
      <p>Select Tip %</p>
      <div className='tip-grid'>
        <div className='tip-elem'>5%</div>
        <div className='tip-elem'>10%</div>
        <div className='tip-elem'>15%</div>
        <div className='tip-elem'>25%</div>
        <div className='tip-elem'>50%</div>
        <div className='tip-elem tip-elem-custom'>Custom</div>
      </div>
    </div>
  )
}

const ChoiceLine = () => {
  return (
    <div className='choice'>
      <p>Type of choice</p>
      <div className='choiceLine'>
        <img></img>
        <span>142.55 / 5</span>
      </div>
    </div>
  )
}

const Parameters = () => {
  return (
    <div className='parameters'>
      <ChoiceLine />
      <Tip />
      <ChoiceLine />
    </div>
  )
}

const Card = () => {
  return (
    <div className='card'>
      <Parameters />
      <Results />
    </div>
  )
}

const App = () => {

  return (
    <>
      <img></img>
      <Card />
    </>
  )
}

export default App
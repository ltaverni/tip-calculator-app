import './App.css'

const ResultLine = () => {
  return (
    <div>
      <div>
        <p>Type of data</p>
        <p>/ person</p>
      </div>
      <div>$4.27</div>
    </div>
  )
}

const Results = () => {
  return (
    <div>
      <ResultLine />
      <ResultLine />
      <button>RESET</button>
    </div>
  )
}

const Tip = () => {
  return (
    <div>
      <p>Select Tip %</p>
      <div>
        <div>5%</div>
        <div>10%</div>
        <div>15%</div>
        <div>25%</div>
        <div>50%</div>
        <div>Custom</div>
      </div>
    </div>
  )
}

const ChoiceLine = () => {
  return (
    <div>
      <p>Type of choice</p>
      <div>
        <img></img>
        <span>142.55 / 5</span>
      </div>
    </div>
  )
}

const Parameters = () => {
  return (
    <div>
      <ChoiceLine />
      <Tip />
      <ChoiceLine />
    </div>
  )
}

const Card = () => {
  return (
    <div>
      <Parameters />
      <Results />
    </div>
  )
}

const App = () => {

  return (
    <>
      <div>
        <img></img>
      </div>
      <Card />
    </>
  )
}

export default App
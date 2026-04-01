import { useState } from 'react'
import './App.css'

const calculateTip = (bill, tip) => {
  return (bill * (0.01 * tip));
}

const ResultLine = ({name, value}) => {
  return (
    <div className='result-line'>
      <div>
        <p className='result-type'>{name}</p>
        <p className='pro-person'>/ person</p>
      </div>
      <div className='amount'>${value}</div>
    </div>
  )
}

const Results = ({tip, peopleNumber, handleReset}) => {
  const tipProPerson = (peopleNumber === 0) ? 0 : tip / peopleNumber;

  return (
    <div className='results'>
      <ResultLine name='Tip Amount' value={tipProPerson} />
      <ResultLine name='Total' value={tip} />
      <button onClick={handleReset}>RESET</button>
    </div>
  )
}

const Tip = ({tip, setParameter, setTip}) => {
  return (
    <div className='tip'>
      <p>Select Tip %</p>
      <div className='tip-grid'>
        <div className='tip-elem'>5%</div>
        <div className='tip-elem'>10%</div>
        <div className='tip-elem'>15%</div>
        <div className='tip-elem'>25%</div>
        <div className='tip-elem'>50%</div>
        <input className='tip-elem tip-elem-custom' type='text' placeholder='Custom' value={tip} onChange={(e) => setParameter(e, setTip)} />
      </div>
    </div>
  )
}

const ChoiceLine = ({name, value, setParameter, setFunction}) => {
  return (
    <div className='choice'>
      <p>{name}</p>
      <div className='choiceLine'>
        <img></img>
        <input className='choice-input' type='text' value={value} onChange={(e) => setParameter(e, setFunction)} />
      </div>
    </div>
  )
}

const Parameters = ({bill, tip, peopleNumber, setParameter, setBill, setTip, setPeopleNumber}) => {
  return (
    <div className='parameters'>
      <ChoiceLine
        name='Bill'
        value={bill}
        setParameter={setParameter}
        setFunction={setBill} />
      <Tip
        tip={tip}
        setParameter={setParameter}
        setTip={setTip} />
      <ChoiceLine
        name='Number of People'
        value={peopleNumber}
        setParameter={setParameter}
        setFunction={setPeopleNumber} />
    </div>
  )
}

const Card = ({bill, tip, peopleNumber, setParameter, setBill, setTip, setPeopleNumber, handleReset}) => {
  const tipValue = calculateTip(bill, tip);

  return (
    <div className='card'>
      <Parameters
        bill={bill}
        tip={tip}
        peopleNumber={peopleNumber}
        setParameter={setParameter}
        setBill={setBill}
        setTip={setTip}
        setPeopleNumber={setPeopleNumber} />
      <Results tip={tipValue} peopleNumber={peopleNumber} handleReset={handleReset} />
    </div>
  )
}

const App = () => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [peopleNumber, setPeopleNumber] = useState(0);

  const setParameter = (e, setFunction) => {
    e.preventDefault();
    
    // Checks to ensure that values enterred are only numbers
    const input = e.target.value; 
    if (input.includes(" ") || input.startsWith("0"))
      return
    
    if (input === "") {
      setFunction(0);
      return
    }

    const updateValue = Number(e.target.value);
    if (isNaN(updateValue)) {
      return;
    }

    setFunction(updateValue);
  }

  const handleReset = (e) => {
    e.preventDefault();

    setBill(0);
    setTip(0);
    setPeopleNumber(0);
  }

  return (
    <>
      <img></img>
      <Card 
        bill={bill}
        tip={tip}
        peopleNumber={peopleNumber}
        setParameter={setParameter}
        setBill={setBill}
        setTip={setTip}
        setPeopleNumber={setPeopleNumber}
        handleReset={handleReset} />
    </>
  )
}

export default App
import React, {useState} from 'react'
import './index.css'

function App() {

  
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')



  let calcBmi = (event) => {
    event.preventDefault()

    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = (weight / (height * height))
      setBmi(bmi.toFixed(1))
      if (bmi < 16) {
        setMessage('You are underweight')
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage('You are a healthy weight')
      } else {
        setMessage('You are overweight')
      }
    }
  }

  
  


  let reload = () => {
    window.location.reload()
  }

  return (
    
    <div className='Header'>
    <h1>BMI CALCULATOR</h1>
    
    <div className="app">
    
      <div className='container'>
        
        <form onSubmit={calcBmi}>
          
          <div>
            <label>Height (meters)</label>
            <input value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <label>Weight (Kg)</label>
            <input value={weight} onChange={(event) => setWeight(event.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reset</button>
          </div>
        </form>

        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
        </div>

        
      </div>
    </div>
  );
}

export default App;


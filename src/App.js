import React,{useState} from "react";
import './index.css'
import photo1 from '../src/images/underweight.png'
import photo2 from '../src/images/healthy.png'
import photo3 from '../src/images/overweight.png'

function App() {
  //State
  const [weight , setWeight] = useState(0)
  const [height , setHeight] = useState(0)
  const [bmi , setBmi] = useState(0)
  const [message , setMessage] = useState('Please provide some input first!')

  // Show the image on calculation
  let imgSrc;

  if(bmi < 1){
    imgSrc = null
  }
  else{
    if(bmi < 25){
      imgSrc = (photo1)
    }
    else if(bmi >= 25 && bmi < 30){
      imgSrc = (photo2)
    }
    else{
      imgSrc = (photo3)
    }
  }



  let calcBmi = (event) => {
    //prevent Submitting

    event.preventDefault()

    if(weight === 0 || height === 0){
      alert('Please enter a valid Weight and Height')
    }
    else {
      let bmi = (weight / ((height/100) * (height/100)))
      setBmi(bmi.toFixed(1))

      //Logic of Message

      if(bmi < 25){
        setMessage('You are Under Weight')
      }
      else if(bmi >=25 && bmi < 30){
        setMessage('You are Healthy')
      }
      else{
        setMessage('You are Over Weight')
      }
    }
  }

  let reload = () =>{
    window.location.reload()
  }





  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg)</label>
            <input value={weight} onChange={(event) => setWeight(event.target.value)}/>
          </div>
          <div>
            <label>Height (cm)</label>
            <input value={height} onChange={(event) => setHeight(event.target.value)}/>
          </div>
          <div>
            <button className="btn" type="submit">Submit</button>
            <button className="btn btn-outline" onClick={reload} type="submit">Reload</button>
          </div>
        </form>
        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
        <div className="img-container">
          <img src={imgSrc} alt=''></img>
        </div>
      </div>
    </div>
  );
}

export default App;

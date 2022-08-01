import './App.css';
import start from "../src/images/icon-star.svg"
import image from "../src/images/illustration-thank-you.svg"
import { useEffect, useState } from 'react';

function App() {

  const [ state, setState ] = useState(0);
  const [ value, setValue ] = useState(0);


  useEffect(() => {
    setState(0)
  },[])
  

  function handleValue(number){
      setValue(number)
  }
  function handleSubmit(){
    if(value !== 0){
      setState(1)
    }
  }


  if( state === 1){
    return (
      <div className="App">
        <div className='wrapper-app-two'>
          <img src={image} alt="" className='image'/>
          <div className='result'><p className='text-result'>You selected {value} out of 5</p></div>
          <h1 className='title-card title-card-resul'>Thank you!</h1>
          <p className='description-card description-card-resul'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className='wrapper-app'>
        <div className='icon-start'><img src={start} alt="" /></div>
        <h1 className='title-card'>How did we do?</h1>
        <p className='description-card'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className='container-numbers'>
          <a className={`icon-number ${ value === 1 ? "numbers-act" : "numbers-inital"}`} onClick={ () => handleValue(1)}><p className='numbers'>1</p></a>
          <a className={`icon-number ${ value === 2 ? "numbers-act" : "numbers-inital"}`} onClick={ () => handleValue(2)}><p className='numbers'>2</p></a>
          <a className={`icon-number ${ value === 3 ? "numbers-act" : "numbers-inital"}`} onClick={ () => handleValue(3)}><p className='numbers'>3</p></a>
          <a className={`icon-number ${ value === 4 ? "numbers-act" : "numbers-inital"}`} onClick={ () => handleValue(4)}><p className='numbers'>4</p></a>
          <a className={`icon-number ${ value === 5 ? "numbers-act" : "numbers-inital"}`} onClick={ () => handleValue(5)}><p className='numbers'>5</p></a>
        </div>
        <button className='button' onClick={handleSubmit}>submit</button>
      </div>
    </div>
  );
}

export default App;

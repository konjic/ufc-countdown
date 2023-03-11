import logo from './logo.svg';
import React, { useEffect,useState,useRef } from 'react';
import './App.css';

function App() {

  const [timerDays, setTimerDays] = useState('00')
  const [timerHours, setTimerHours] = useState('00')
  const [timerMinutes, setTimerMinutes] = useState('00')
  const [timerSeconds, setTimerSeconds] = useState('00')

  const [ufcEvent, setUfcEvent] = useState([]);
   useEffect(() => {
      fetch('https://ufceventapi.vercel.app/ufc-event')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setUfcEvent(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

  let interval = useRef()

  const startTime = () =>{
    const countdownDate = new Date('March 12, 2023 1:00:00').getTime()

    interval= setInterval( ()=>{
      const now = new Date().getTime()
      const distance = countdownDate - now;
      const days = Math.floor( distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(( distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
      const minutes = Math.floor(( distance % (1000 * 60 * 60 ))/(1000 * 60 ))
      const seconds = Math.floor(( distance % (1000 * 60 )) / 1000)
      
      if (distance < 0){
        clearInterval(interval.current)
      }else {
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    }, 1000  )
  }

  useEffect( ()=>{
    startTime()
    return () =>{
      clearInterval(interval.current)
    }
  } )

  return (
    <div className='page-container'>
      <div  style={{paddingTop: "4%"}}>
        
          <div>
            <div className="center-things">

            <p>NEXT <a className='ufc-text'>UFC</a> EVENT </p>
            </div>

            <div className="center-things">
              <p><a className='ufc-text'>  UFC </a>280 </p>
            </div>

            <div className="center-things">

            <p className='timer'> 
              <a className='timer-color'> {timerDays} </a> Days : 
              <a className='timer-color'> {timerHours} </a> Hours : 
              <a className='timer-color'> {timerMinutes} </a>Minutes : 
              <a className='timer-color'> {timerSeconds} </a> Seconds</p>
          </div>
            </div>
        </div>
      
      <div style={{marginTop: '3%', paddingBottom: '5%'}}  >
        {ufcEvent.map((ufcEvent) => (
<div  className='center-things container' style={{marginTop: '2%', alignItems:'center'}} key={ufcEvent.id}>   
        <p className='nume-luptatori'> {ufcEvent.luptatorUnu} </p> 
      <img src={ufcEvent.pozaLuptatorUnu}  className='imagini-luptatori'/>
      <p className='nume-luptatori'> vs </p>
      <img src={ufcEvent.pozaLuptatorDoi} className='imagini-luptatori'/>
        <p className='nume-luptatori'> {ufcEvent.luptatorDoi} </p>
    
  </div>
))}
</div>


    </div>
  );
}

export default App;

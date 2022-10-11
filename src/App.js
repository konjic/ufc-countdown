import logo from './logo.svg';
import React, { useEffect,useState,useRef } from 'react';
import './App.css';
const matches = [
  {
    key: 1,
    luptatorUnu: "Charles Oliveira",
    luptatorDoi: "Islam Makhachev",
    
    uri: {luptatorUnu: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/2504169.png&h=80&w=80&scale=crop',
          luptatorDoi: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/3332412.png&h=80&w=80&scale=crop'}

  },
  {
    key: 2,
    luptatorUnu: "Aljamain Sterling",
    luptatorDoi: "TJ Dillashaw",
    
    uri: {luptatorUnu: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/3031559.png&h=80&w=80&scale=crop',
          luptatorDoi: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/2611719.png&h=80&w=80&scale=crop'}

  },
  {
    key: 3,
    luptatorUnu: "Petr Yan",
    luptatorDoi: "Sean O'Malley",
    
    uri: {luptatorUnu: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/4293517.png&h=80&w=80&scale=crop',
          luptatorDoi: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/4205093.png&h=80&w=80&scale=crop'}

  },
  {
    key: 4,
    luptatorUnu: "Beneil Dariush",
    luptatorDoi: "Mateusz Gamrot",
    
    uri: {luptatorUnu: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/3085551.png&h=80&w=80&scale=crop',
          luptatorDoi: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/3068125.png&h=80&w=80&scale=crop'}

  },
  {
    key: 5,
    luptatorUnu: "Katlyn Chookagian",
    luptatorDoi: "Manon Fiorot",
    
    uri: {luptatorUnu: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/4026490.png&h=80&w=80&scale=crop',
          luptatorDoi: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/4608674.png&h=80&w=80&scale=crop'}

  },
  
];

function App() {

  const [timerDays, setTimerDays] = useState('00')
  const [timerHours, setTimerHours] = useState('00')
  const [timerMinutes, setTimerMinutes] = useState('00')
  const [timerSeconds, setTimerSeconds] = useState('00')

  let interval = useRef()

  const startTime = () =>{
    const countdownDate = new Date('October 22, 2022 19:00:00').getTime()

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

            <p> 
              <a className='timer-color'> {timerDays} </a> Days : 
              <a className='timer-color'> {timerHours} </a> Hours : 
              <a className='timer-color'> {timerMinutes} </a>Minutes : 
              <a className='timer-color'> {timerSeconds} </a> Seconds</p>
          </div>
            </div>
        </div>
      
      <div style={{marginTop: '3%', paddingBottom: '5%'}}  >
        {matches.map(({ luptatorUnu,luptatorDoi,  uri, key }) => (
<div  className='center-things container' style={{marginTop: '2%', alignItems:'center'}} key={key}>   
        <p className='nume-luptatori'> {luptatorUnu} </p> 
      <img src={uri.luptatorUnu}  className='imagini-luptatori'/>
      <p className='nume-luptatori'> vs </p>
      <img src={uri.luptatorDoi} className='imagini-luptatori'/>
        <p className='nume-luptatori'> {luptatorDoi} </p>
    
  </div>
))}
</div>


    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { useCountUp } from 'react-countup';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Counter = () => {
const [counter,setCounter]=useState(false)


    return (

        <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
            <div style={{fontSize:'50px', width: '100%', background: 'black', marginTop: "1000px", marginBottom: '300px', color: 'white', padding: '50px', display:'flex',justifyContent:'space-evenly'}}>

           <div>
           {
                counter ? <CountUp start={0} end={100} delay={0} duration={4}>

                </CountUp> :""
            }
           </div>
           <div>
           {
                counter ? <CountUp start={500} end={1000} delay={0} duration={4}>

                </CountUp> :""
            }
           </div>
           <div>
           {
                counter ? <CountUp start={250} end={700} delay={0} duration={4}>

                </CountUp> :""
            }
           </div>

          


        </div>
        </ScrollTrigger>
        
    );
};

export default Counter;
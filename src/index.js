import React from 'react';
import ReactDOM from 'react-dom';
import Sdata from './Sdata';
import Show from './St';
import"./index.css";


//import add ,{sub,mult,div}from './Calc'
ReactDOM.render(
  <>
  <p>OUR FORGOTTEN HEROES</p>
  <div className='cardss'>
<Show
  imgsrc={Sdata[0].imgsrc}
  Name={Sdata[0].Name}
  link={Sdata[0].link}
  />
  <Show
  imgsrc={Sdata[1].imgsrc}
  Name={Sdata[1].Name}
  link={Sdata[1].link}
  />
    <Show
  imgsrc={Sdata[2].imgsrc}
  Name={Sdata[2].Name}
  link={Sdata[2].link}
  />
</div>
<div className='cardss2'>
<Show
  imgsrc={Sdata[3].imgsrc}
  Name={Sdata[3].Name}
  link={Sdata[3].link}
  />
  <Show
  imgsrc={Sdata[4].imgsrc}
  Name={Sdata[4].Name}
  link={Sdata[4].link}
  />
{/*   <Show
  imgsrc={Sdata[5].imgsrc}
  Name={Sdata[5].Name}
  link={Sdata[5].link}
/>*/}
</div>
  </>,document.getElementById('root')
); 
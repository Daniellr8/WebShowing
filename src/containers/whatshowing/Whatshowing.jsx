import React from 'react'
import './whatshowing.css';
import Feature from '../features/Features'
const Whatshowing = () => {
  return (
    <div className='whatshowing section__margin' id='wshowing'>
      <div className='whatshowing_feature'>
        <Feature title="¿Que es Showing Computo?" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor corrupti hic commodi, laborum ipsum molestias eius vero minima sint esse quos veritatis eos dolorum saepe provident error corporis. Assumenda, dolorum."/>
      </div>
      <div className='whatshowing-heading'>
        <h1 className='gradient-text'>The Possibilities are beyond your imagination</h1>
        <p>explore the library Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod delectus deserunt tempora quibusdam necessitatibus iusto quia accusamus, iste, tempore, ex expedita commodi natus tenetur numquam. Necessitatibus nostrum quibusdam rem excepturi!</p>
      </div>
      <div className='whatshowing-container'>
        <Feature title="Reparacion" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."/>
        <Feature title="Software" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."/>
        <Feature title="Mantenimiento" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."/>
      </div>
    </div>
  )
}

export default Whatshowing
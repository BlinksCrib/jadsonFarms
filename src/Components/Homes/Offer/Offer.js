import React from 'react'
import Feedmill from './Feedmill/Feedmill';
import Livestock from './Livestock/Livestock';
import Manure from './Manure/Manure';
import What from './What/What';

const Offer = () => {
  return (
    <div>
      <What />
      <Livestock />
      <Feedmill />
      <Manure />
    </div>
  )
}

export default Offer

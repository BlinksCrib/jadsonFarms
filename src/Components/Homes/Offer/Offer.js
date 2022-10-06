import React from 'react'
import Feedmill from './Feedmill/Feedmill';
import Livestock from './Livestock/Livestock';
import Major from './Major/Major';
import Manure from './Manure/Manure';
import What from './What/What';

const Offer = () => {
  return (
    <div>
      <Major />
      <Livestock />
      <Feedmill />
      <Manure />
      {/* <What /> */}
    </div>
  )
}

export default Offer

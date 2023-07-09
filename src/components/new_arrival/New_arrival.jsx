import React from 'react';
import  './newArrival.scss';


export default function New_arrival() { 
  return (
  
    <div className='arrivals'>
      <h1 className='arrivals__header'>New Arrivals</h1>
      
      <div class="arrivals__dropdown">
      <button onclick="myFunction()" class="arrivals__dropbtn">Most Recent</button>
      <div id="myDropdown" class="arrivals__dropdowncontent">
    <p>Most recent</p>
    <p>New Arrivals</p>
    <p>Best Sellers</p>
    <p>Recomended</p>

  </div>
</div>
      
    </div>
    

  )
}
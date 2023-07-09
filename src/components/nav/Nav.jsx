import React from 'react';
import './Nav.scss';
import hamburger from '../../assets/images/hamburger.svg';
import heart from '../../assets/icons/heart.png';
import shoppingBag from '../../assets/icons/shopping-bag.png';
import user from '../../assets/icons/user.png';


export default function Nav() {
  return (
   <div className='nav'>
    <div className='nav__header'><h1>MEAT<span>FIT</span></h1></div>
    <input type="checkbox" class="nav__toggle" id="hamburger" hidden/>

    <div className='nav__lblock'>
      <div className='nav__hamburger'>
        <label for="hamburger">
          <img src={hamburger} alt="hamburger" width={25} />
        </label>
      </div>
    </div>

    <div className='nav__icons'>
    
    <img src={user} alt ='user'/>
    <img src={heart} alt ='heart'/>
    <img src={shoppingBag} alt ='shopping-bag'/>
    </div>

    <ul className='nav__categories'>
      <li>Beef</li>
      <li>Meat</li>
      <li>Chicken</li>
      <li>Seafood</li>
      <li>Poultry</li>
    </ul>

   </div>
  )
}


{/* <div className='nav__titles'>Titles</div>
    <div className='nav__icons'>icons</div> */}
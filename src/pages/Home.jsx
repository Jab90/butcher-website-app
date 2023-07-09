import React from 'react';
import ArrivalHero from '../components/arrival_hero/ArrivalHero';
import Hero from '../components/hero/Hero';
import Nav from '../components/nav/Nav';
import New_arrival from '../components/new_arrival/New_arrival';



export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <New_arrival />
      <ArrivalHero />
    </>
  )
}
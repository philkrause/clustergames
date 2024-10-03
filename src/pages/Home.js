import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import SlotGames from '../components/Games'


export default function HomePage() {

  return (
    <>
      <Nav />
      <Header />
      <section className='homeheader'>
        <div> 
         <SlotGames></SlotGames>
        </div>
      </section>
    </>
  )
}
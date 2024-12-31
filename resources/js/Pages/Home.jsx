import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import Habout from '@/Sections/Habout'
import Hblog from '@/Sections/Hblog'
import Hero from '@/Sections/Hero'
import Pcompany from '@/Sections/Pcompany'
import Pjob from '@/Sections/Pjob'
import Service from '@/Sections/Service'


import React from 'react'

export default function Home() {
    //const{user} = usePage().props;
  return (
    <>
        <Header></Header>
        <Hero/>

        <section className="section">
              <Service/>

            <Habout/>

            <Pjob/>

          <Pcompany/>
          
           <Hblog/>
        </section>
        <Footer></Footer>
    </>
  )
}

import React from 'react'
import Header from './Header'
import Carosel from './Carosel'
import InnovativeDesign from './InnovativeDesign'
import Role from './Role';
import HireDesigner from './HireDesigner';
import SampleDesign from './SampleDesign';
import BacktoTop from './BacktoTop';
// import BacktoTop from './BacktoTop';
import Footer from './Footer';
function Container() {
  return (
    <div>
      <Header/>
       <Carosel></Carosel>
       <InnovativeDesign></InnovativeDesign>
       <Role></Role>
       <HireDesigner></HireDesigner>
       <SampleDesign></SampleDesign>
       {/* <BacktoTop/> */}
       <Footer></Footer>
    </div>
  )
}

export default Container

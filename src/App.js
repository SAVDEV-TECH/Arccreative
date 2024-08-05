// import Vector from './Vector.svg';
import './App.css';
import Header from './component/Header';
import Carosel from './component/Carosel';
import InnovativeDesign from './component/InnovativeDesign';
import Role from './component/Role';
import HireDesigner from './component/HireDesigner';
import SampleDesign from './component/SampleDesign';
import Footer from './component/Footer';
 

function App() {
  return (
    <div className="App">
      <Header></Header>
       <Carosel></Carosel>
       <InnovativeDesign></InnovativeDesign>
       <Role></Role>
       <HireDesigner></HireDesigner>
       <SampleDesign></SampleDesign>
       <Footer></Footer>
    </div>

  )
}

export default App;

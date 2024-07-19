import { useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { ContactShadows, Environment, OrbitControls, Stage } from '@react-three/drei'
import Base1 from './components/Base1';
import Base2 from './components/Base2';
import Base3 from './components/Base3';
import Choco1 from './components/Choco1';
import Choco2 from './components/Choco2';
import Choco3 from './components/Choco3';
import TabsComponent from './components/Tabs';
import './App.css'

function App() {
  const [ShowChoco1 , setShowChoco1 ] = useState(false);
  const [ShowChoco2 , setShowChoco2 ] = useState(false);
  const [ShowChoco3 , setShowChoco3 ] = useState(false);
  const [ShowBase1 , setShowBase1 ] = useState(true);
  const [ShowBase2 , setShowBase2 ] = useState(false);
  const [ShowBase3 , setShowBase3 ] = useState(false);
  const [price, setPrice] = useState(10);


  const updatePrice = (isAdding, amount) => {
    setPrice(prevPrice => (isAdding ? prevPrice + amount : prevPrice - amount));
  };
  const toggleShoWBase1 = () => {

    setShowBase1(!ShowCBase1);
  };
  const toggleShowChoco1 = () => {

    setShowChoco1(!ShowChoco1);
    updatePrice(!ShowChoco1, 5); // Assume Choco1 has a price of 5

  };
  const toggleShowChoco2 = () => {

    setShowChoco2(!ShowChoco2);
    updatePrice(!ShowChoco2, 7); // Assume Choco2 has a price of 7

  };
  const toggleShowChoco3 = () => {

    setShowChoco3(!ShowChoco3);
    updatePrice(!ShowChoco3, 8); // Assume Choco3 has a price of 8

  };
  const toggleShowBase2 = () => {
    if (ShowBase2) {
      setShowChoco2(false); // Hide Choco2 if Base2 is hidden
      setShowBase3(false); // Hide Choco2 if Base2 is hidden
      setShowChoco3(false); // Hide Choco2 if Base2 is hidden


    }
      setShowBase2(!ShowBase2);
      updatePrice(!ShowBase2, 15); // Assume Base2 has a price of 15

  };
  const toggleShowBase3 = () => {
    if (ShowBase3) {
      setShowChoco3(false); // Hide Choco2 if Base2 is hidden


    }

    setShowBase3(!ShowBase3);
  };

  return (
  <div className='container'>  
    <div>
      <h1>
        Avon Cake
      </h1>
    </div>
    <Canvas>
      <ambientLight />
      <OrbitControls enableZoom={false}  minAzimuthAngle={-Math.PI / 1}
        maxAzimuthAngle={Math.PI / 2}
        minPolarAngle={Math.PI /2}
        maxPolarAngle={Math.PI - Math.PI / 2}/>
      <Stage >
      
          {ShowBase1 && <Base1  />}
          {ShowChoco1 && <Choco1 />}
          {ShowBase2 && <Base2/>}
          {ShowChoco2 && <Choco2  />}
          {ShowBase3 && <Base3 />}
          {ShowChoco3 && <Choco3 />}
      </Stage>
      <Environment preset="sunset" />
      <ContactShadows position={[0,-2.5,0]} opacity={1} scale={10}  bluar={1} far={10} resolution={256} color= "00000" />
    </Canvas>
    <div className="App">
 
      <main>
        <TabsComponent />
      </main>
    </div>
   
    <div className='container'>
      <button onClick={toggleShowChoco1} >
            {'chocolate1'}
      </button>
      <button onClick={toggleShowChoco2} disabled={!ShowBase2}>
            {'chocolate2'}
      </button>
      <button onClick={toggleShowChoco3} disabled={!ShowBase3}>
            {'chocolate3'}
      </button>
      <button onClick={toggleShowBase2} >
            {'Base2'}
      </button>
      <button onClick={toggleShowBase3} disabled={!ShowBase2}>
            {'Base3'}
      </button>
    </div>
    <div className='price'>
        <p>Total Price: ${price}</p>
    </div>


  </div>
  )
}

export default App;

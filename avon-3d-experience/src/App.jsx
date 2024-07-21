import { useState,useRef, useEffect } from 'react'
import { Canvas,useThree } from '@react-three/fiber';
import { ContactShadows, Environment, OrbitControls, Stage } from '@react-three/drei'
import ChocoHeart from './components/ChocoHeart';
import Strawberry from './components/Strawberry';
import TabsComponent from './components/Tabs';
import Topping1 from './components/Topping1';
import BaseHeart from './components/BaseHeart';
import './App.css'

function App() {
  const [ShowHeart , setShowHeart ] = useState(true);
  const [ShowChoco , setShowChoco ] = useState(false);
  const [ShowVanilla , setShowVanilla ] = useState(false);
  const [ShowStrawberry , setShowStrawberry ] = useState(false);
  const [ShowTopping1 , setShowTopping1 ] = useState(false);
  const [price, setPrice] = useState(10);
  const cameraRef = useRef();


  const CameraSetup = () => {
    const { camera } = useThree();
  
    useEffect(() => {
      camera.position.set(Math.sin(Math.PI / 4) * 10, Math.sin(Math.PI / 4) * 10, Math.cos(Math.PI / 4) * 10);
      camera.lookAt(0, 0, 0);
    }, [camera]);
  
    return null;
  };


  const updatePrice = (isAdding, amount) => {
    setPrice(prevPrice => (isAdding ? prevPrice + amount : prevPrice - amount));
  };


  const toggleShoWHeart = () => {
    if (ShowHeart) {

      setShowTopping1(false); // Hide Choco2 if Base2 is hidden
    }

    setShowHeart(!ShowHeart);
    updatePrice(!ShowHeart, 5); // Assume Choco2 has a price of 7

  };
  const toggleShowVanilla = () => {

    if (ShowVanilla) {
      setShowChoco(false);
      setShowStrawberry(false);
      setShowTopping1(false)

    }
    setShowVanilla(ShowVanilla);
    updatePrice(!ShowVanilla, 5); // Assume Choco1 has a price of 5

  };
  const toggleShowChoco = () => {

  

    setShowChoco(!ShowChoco);
    setShowStrawberry(false);
    updatePrice(!ShowChoco, 7); // Assume Choco2 has a price of 7

  };
  const toggleShowStrawberry = () => {


    setShowStrawberry(!ShowStrawberry);
    updatePrice(!ShowStrawberry, 8); // Assume Choco3 has a price of 8

  };
  const toggleShowTopping1 = () => {
 
      setShowTopping1(!ShowTopping1);
      updatePrice(!ShowTopping1, 15); // Assume Base2 has a price of 15

  };


  return (
  <div className='container'>  
    <div>
      <h1>
        Avon Cake
      </h1>
    </div>
    <Canvas camera={{ position: [0, 0, 10], fov: 10 }} ref={cameraRef}>
      <ambientLight />
      <OrbitControls enableZoom={false}  
        minAzimuthAngle={-Math.PI / 2}
        maxAzimuthAngle={Math.PI / 2}
        rotateSpeed={0.5}            // Adjust the speed as needed (default is 1.0)
        minPolarAngle={0}
        maxPolarAngle={Math.PI /2}/>
      <Stage >
      
          <BaseHeart  />
          {ShowTopping1 && <Topping1 /> }
          {ShowStrawberry && <Strawberry /> }
          {ShowChoco && <ChocoHeart /> }

      <CameraSetup />
      </Stage>
      <Environment preset="sunset" />
      <ContactShadows position={[0,0.5,0]} opacity={1} scale={10}  bluar={1} far={10} resolution={256} color= "00000" />
    </Canvas>
    <div className="App">
 
      <main>
        <TabsComponent 
          toggleShowChoco ={toggleShowChoco}
          toggleShowStrawberry = {toggleShowStrawberry}
          toggleShowTopping1 = {toggleShowTopping1}
        
        />
      </main>
    </div>
    
     
    <div className='price'>
        <p>Total Price: ${price}</p>
    </div>


  </div>
  )
}

export default App;

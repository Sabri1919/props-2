import './App.css';
import React from 'react';
import Info from "./Profile/Component/info";
import myImage from "./img/image.jpg";



  const handleName = (name) => {
    alert(`Welcome ${name}`);
  };
function App() {

  return (
    <div className="App">
    <Info
        fullname="Sabri EL AOUN"
        bio="I am a football fan."
        profission="Mechatronics engineer."
        handleName={handleName}
        >
          <img src={myImage} alt="props.children"/>
    </Info>
    </div>
    
  );
}

export default App;
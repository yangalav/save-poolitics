// const { Stage, Container, Sprite, useTick } = ReactPixi;
import React from 'react';
import { useState } from 'react';
import { Sprite, Stage, Container, useTick } from '@pixi/react';
import { Texture } from 'pixi.js';
import Poo1 from '../Assets/poop1.png';
import Poo2 from '../Assets/poop2.png';
import Poo3 from '../Assets/poop3.png';
import PooTest2 from '../Assets/poopTest2.png';
import PoopTest from '../Assets/poopTest.svg';
import PoopTest2 from '../Assets/poopTest2.svg';


const Poop = ({ x, y }) => {
  const [rotation, setRotation] = useState(0);
  const [img, setImage] = useState(Poo2);

  useTick((delta) => delta && setRotation(rotation + 0.1 * delta));
  
  // let locktesttexture = async () => await PIXI.Texture.fromURL(locktestsvg, {resolution: 10});
  const texture = Texture.from('../Assets/poopTest.svg', {resolution: 10});

  return (
    <>
      <Sprite
        image={img}
        anchor={0.5}
        // scale={1}
        interactive={true}
        // rotation={rotation}
        x={x}
        y={y}
        pointerover={() => setImage(PooTest2)}
        pointerout={() => setImage(Poo2)}
      />
    </>
  );
};

const RotatingPoop = () => (
  <Stage width={500} height={500} options={{ backgroundColor: 16777215 }}>
    <Container position={[250, 250]}>
      <Poop />
      {/* <Poop img={Poo2} x={50} y={50}/> */}
      {/* <Poop img={Poo3} x={150} y={50}/> */}
    </Container>
  </Stage>
);

export default RotatingPoop;
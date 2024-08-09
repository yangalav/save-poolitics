// const { Stage, Container, Sprite, useTick } = ReactPixi;
import React from 'react';
import { useState } from 'react';
import { Sprite, Stage, Container, useTick } from '@pixi/react';
import Poo1 from '../Assets/poop1.png';
import Poo2 from '../Assets/poop2.png';
import Poo3 from '../Assets/poop3.png';


const Poop = ({ x, y, img }) => {
  const [rotation, setRotation] = useState(0);

  useTick((delta) => delta && setRotation(rotation + 0.1 * delta));

  return (
    <>
      <Sprite
        image={img}
        anchor={0.5}
        scale={1}
        rotation={rotation}
        x={x}
        y={y}
      />
    </>
  );
};

const RotatingPoop = () => (
  <Stage width={500} height={500} options={{ backgroundColor: 16777215 }}>
    <Container position={[250, 250]}>
      <Poop img={Poo1} x={-50} y={50}/>
      <Poop img={Poo2} x={50} y={50}/>
      <Poop img={Poo3} x={150} y={50}/>
    </Container>
  </Stage>
);

export default RotatingPoop;
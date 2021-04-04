import React, { useState } from 'react';
import { motion, useViewportScroll } from 'framer-motion'
import { Container, Progress } from './styles';

function Logo() {
  const { scrollYProgress } = useViewportScroll()
  const [ffLayer, setFfLayer] = useState(0)

  scrollYProgress.onChange(x => {
    setFfLayer(Math.ceil(x * 100))
  })

  return (
    <Container>
      <Progress progress={ffLayer}/>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
      <h1>{ffLayer}%</h1>
    </Container>
  );
}

export default Logo;
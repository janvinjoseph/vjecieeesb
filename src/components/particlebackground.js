import React from 'react';
import Particles from 'react-tsparticles';
import particleConfig from './particles.json';

function ParticleBackground() {
  return (
    <Particles
      id="tsparticles"
      options={particleConfig}
    />
  );
}

export default ParticleBackground;

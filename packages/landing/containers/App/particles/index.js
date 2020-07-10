import React from 'react';
import Particles from 'react-particles-js';
import Img01 from 'common/src/assets/image/app/img-01.png';
import Img02 from 'common/src/assets/image/app/img-02.png';
import Img03 from 'common/src/assets/image/app/img-03.png';
import Img04 from 'common/src/assets/image/app/img-04.png';
import Img05 from 'common/src/assets/image/app/img-05.png';
import Img06 from 'common/src/assets/image/app/img-06.png';
import Img07 from 'common/src/assets/image/app/img-07.png';
import Img08 from 'common/src/assets/image/app/img-08.png';
import Img09 from 'common/src/assets/image/app/img-09.png';
import Img10 from 'common/src/assets/image/app/img-10.png';
import Img11 from 'common/src/assets/image/app/img-11.png';
import Img12 from 'common/src/assets/image/app/img-12.png';
import Img13 from 'common/src/assets/image/app/particle_breathwork.png';
import Img14 from 'common/src/assets/image/app/particle_meditation.png';
import Img15 from 'common/src/assets/image/app/particle_selfcare.png';
import Img16 from 'common/src/assets/image/app/particle_yoga.png';

const ParticlesComponent = () => {
  return (
    <>
      <Particles
        className="particle"
        params={{
          particles: {
            number: {
              value: 5,
              density: { enable: true, value_area: 500 },
            },

            shape: {
              type: ['images'],
              images: [
                {
                  src: `${Img01}`,
                  width: 1,
                  height: 1,
                },
                {
                  src: `${Img02}`,
                  width: 1,
                  height: 1,
                },
                {
                  src: `${Img03}`,
                  width: 1,
                  height: 1,
                },
                {
                  src: `${Img04}`,
                  width: 1,
                  height: 1,
                },
                {
                  src: `${Img05}`,
                  width: 1,
                  height: 1,
                },
                {
                  src: `${Img06}`,
                  width: 1,
                  height: 1,
                },
                {
                  src: `${Img07}`,
                  width: 1,
                  height: 1,
                },
                {
                  src: `${Img08}`,
                  width: 1,
                  height: 1,
                },
                {
                  src: `${Img09}`,
                  width: 1,
                  height: 1,
                },
                {
                  src: `${Img10}`,
                  width: 1,
                  height: 1,
                },
                {
                  src: `${Img11}`,
                  width: 1,
                  height: 1,
                },
                {
                  src: `${Img12}`,
                  width: 1,
                  height: 1,
                },
                {
                  src: `${Img13}`,
                  width: 1,
                  height: 1,
                },
                {
                  src: `${Img14}`,
                  width: 1,
                  height: 1,
                },
                {
                  src: `${Img15}`,
                  width: 1,
                  height: 1,
                },
                {
                  src: `${Img16}`,
                  width: 1,
                  height: 1,
                },
              ],
            },
            opacity: {
              value: 0,
              random: false,
              anim: { enable: false, speed: 1, opacity_min: 0, sync: false },
            },
            size: {
              value: 30,
              random: true,
              anim: { enable: false, speed: 30, size_min: 15, sync: false },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: '#ffffff',
              opacity: 1,
              width: 1,
            },
            move: {
              enable: true,
              speed: 3,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: true, mode: 'repulse' },
              onclick: { enable: true, mode: 'push' },
              resize: true,
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 1 } },
              bubble: {
                distance: 400,
                size: 10,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: { distance: 200, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          retina_detect: true,
        }}
      />
    </>
  );
};
export default ParticlesComponent;

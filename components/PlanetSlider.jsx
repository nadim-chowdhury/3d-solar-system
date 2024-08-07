// "use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import * as THREE from "three";
import { planets, textureUrls } from "@/utils/planets";
import Image from "next/image";

const PlanetSlider = ({ onSelect }) => {
  // useEffect(() => {
  //   planets.forEach((planet, index) => {
  //     const scene = new THREE.Scene();
  //     const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  //     const renderer = new THREE.WebGLRenderer({ alpha: true });
  //     renderer.setSize(100, 100);
  //     document
  //       .getElementById(`planet-${index}`)
  //       .appendChild(renderer.domElement);

  //     const geometry = new THREE.SphereGeometry(0.5, 32, 32);
  //     const texture = new THREE.TextureLoader().load(
  //       `/textures/${planet.name.toLowerCase()}.jpg`
  //     );
  //     const material = new THREE.MeshBasicMaterial({ map: texture });
  //     const sphere = new THREE.Mesh(geometry, material);
  //     scene.add(sphere);

  //     camera.position.z = 2;

  //     const animate = function () {
  //       requestAnimationFrame(animate);
  //       sphere.rotation.y += 0.01;
  //       renderer.render(scene, camera);
  //     };
  //     animate();
  //   });
  // }, []);

  return (
    <div className="planet-details text-white p-4 rounded w-full h-full text-justify">
      <Swiper spaceBetween={12} slidesPerView={4}>
        {planets.map((planet, index) => (
          <SwiperSlide
            key={index}
            className="cursor-pointer"
            onClick={() => onSelect(planet)}
          >
            <div
              className="flex flex-col items-center justify-center p-6 bg-gradient-to-tr from-gray-700 to-black"
              style={{
                clipPath:
                  "polygon(20px 0%, 100% 0, 100% 124px, 103px 100%, 0 100%, 0 20px)",
              }}
            >
              {/* <div id={`planet-${index}`} className="planet-icon mb-2"></div> */}
              <Image
                src={textureUrls[planet.name.toLowerCase()]}
                alt=""
                width={360}
                height={360}
                className="w-16 h-16 object-cover rounded-full mb-2"
              />
              <h3 className="font-bold tracking-wide text-center">
                {planet.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PlanetSlider;

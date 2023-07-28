import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import profilePicture from "../../assets/profile-picture.jpg";

const Cube = () => {
  const containerRef = useRef(null);
  const cubesRef = useRef([]);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Reuse a single geometry and materials across all cubes
    const geometry = new THREE.BoxGeometry(1, 1.5, 0.1);
    const colors = [0x44aa88];

    // Load a texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(profilePicture);

    const materials = colors.map(
      (color) => new THREE.MeshPhongMaterial({ map: texture })
    );

    cubesRef.current = materials.map((material, index) => {
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);
      cube.position.x = index * 2 - 2;
      return cube;
    });

    camera.position.z = 5;

    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(0, 0, 100);
    scene.add(light);

    const animate = () => {
      requestAnimationFrame(animate);
      cubesRef.current.forEach((cube) => {
        cube.rotation.x += 0.002;
        // cube.rotation.y += 0.001;
      });
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      while (containerRef.current.firstChild) {
        containerRef.current.firstChild.remove();
      }
      geometry.dispose();
      materials.forEach((material) => material.dispose());
      cubesRef.current = [];
    };
  }, []);

  return <div className={"absolute"} ref={containerRef} />;
};

export default Cube;

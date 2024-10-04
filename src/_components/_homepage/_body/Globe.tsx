// Globe.tsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Globe: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    containerRef.current.appendChild(renderer.domElement);

    // Globe geometry and material
    const geometry = new THREE.SphereGeometry(5, 64, 64);
    const url = 'https://eyes.nasa.gov/assets/dynamic/earth/data/viirsToday/viirsToday_thumbnail.webp'
    const texture = new THREE.TextureLoader().load(url); // Your globe texture
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Add lighting
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
    scene.add(ambientLight);

    camera.position.z = 15;

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Mouse movement
    const onMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      const rotationSpeed = 0.5;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(globe);
      if (intersects.length > 0) {
        globe.rotation.y = mouse.x * rotationSpeed; // Adjust rotation based on mouse X
        globe.rotation.x = mouse.y * rotationSpeed; // Adjust rotation based on mouse Y
      }

    };

    window.addEventListener('mousemove', onMouseMove);

    // Animation loop
    const animate = () => {
      const defaultRotationSpeed = 0.05;
      globe.rotation.y += defaultRotationSpeed * 0.01;

      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default Globe;
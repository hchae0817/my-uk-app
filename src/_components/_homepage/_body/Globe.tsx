// Globe.tsx
import { Box, Typography, Button } from "@mui/material";
import React, { useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
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
    const url = `${process.env.PUBLIC_URL}/images/globe.webp`;
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

    camera.position.z = 10;

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Mouse movement
    const onMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      const rotationSpeed = 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(globe);
      if (intersects.length > 0) {
        globe.rotation.y = mouse.x * rotationSpeed;
        globe.rotation.x = mouse.y * rotationSpeed;
      }

    };

    window.addEventListener('mousemove', onMouseMove);

    // Animation loop
    const animate = () => {
      const defaultRotationSpeed = 0.1;
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

  const navigate = useNavigate();

  const handleViewAllPosts = () => {
    navigate("/posts");
  };

  return <Box
    ref={containerRef}
    sx={{
      width: '80vw', // Match the width of the Body container
      height: {
        xs: '45vh', // Adjust height for smaller screens
        sm: '50vh',
        md: '60vh',
        lg: '70vh',
      },
      overflow: 'hidden',
      margin: '0 auto', // Center the globe horizontally
      position: 'relative', // Allow absolute positioning for any children
    }}
  >
    <Box
      sx={{
        position: 'absolute', // Position relative to the globe
        top: '50%', // Center vertically
        left: '50%', // Center horizontally
        transform: 'translate(-50%, -50%)', // Center the box
        textAlign: 'center',
        zIndex: 10, // Ensure it's above the globe
        width: { xs: '90%', sm: '60%', md: '50%' }, // Responsive width
        padding: '20px', // Inner spacing
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          color: 'white', // Contrast color for visibility
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)', // Text shadow for depth
        }}
      >
        Uncover London!
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Typography
          variant="body1"
          sx={{
            color: 'white', // Contrast color for visibility
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)', // Text shadow for depth
          }}
        >
          Let their adventures guide you through the city's hidden treasures!
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="secondary"
        sx={{ mt: 2 }}
        onClick={handleViewAllPosts}
      >
        View All Posts
      </Button>
    </Box>

  </Box>

};

export default Globe;
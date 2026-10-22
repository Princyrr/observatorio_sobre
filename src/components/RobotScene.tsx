import { useEffect, useRef } from "react";
import * as THREE from "three";
import {
  PANEL_W,
  PANEL_H,
  createPanelState,
  updatePanelState,
  drawPanel,
  type PanelState,
} from "./dashboards.ts";

export default function RobotScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    scene.background = null;

    scene.fog = new THREE.FogExp2(0x0b1b35, 0.035);

    const camera = new THREE.PerspectiveCamera(
      isMobile ? 55 : 45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100,
    );

    camera.position.set(
      0,
      isMobile ? 0.2 : 0.5,
      isMobile ? 9 : isTablet ? 8 : 7,
    );

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    mount.appendChild(renderer.domElement);

    // ---- Lights ----
    const ambient = new THREE.AmbientLight(0x1e3a5f, 1.4);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0x7dd3fc, 2.2);
    keyLight.position.set(4, 6, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(2048, 2048);
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 30;
    keyLight.shadow.camera.left = -6;
    keyLight.shadow.camera.right = 6;
    keyLight.shadow.camera.top = 6;
    keyLight.shadow.camera.bottom = -6;
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x22d3ee, 1.4);
    rimLight.position.set(-5, 2, -4);
    scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0x38bdf8, 0.8);
    fillLight.position.set(-3, 1, 4);
    scene.add(fillLight);

    // Point light inside the lens for a glow
    const lensGlow = new THREE.PointLight(0x66ddff, 3, 6, 2);
    lensGlow.position.set(0, 0.35, 1.1);
    scene.add(lensGlow);

    // ---- Materials ----
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0xe8f3ff,
      metalness: 0.85,
      roughness: 0.28,
    });
    const darkMat = new THREE.MeshStandardMaterial({
      color: 0x2a2f3a,
      metalness: 0.9,
      roughness: 0.35,
    });
    const accentMat = new THREE.MeshStandardMaterial({
      color: 0x1a8fff,
      metalness: 0.6,
      roughness: 0.3,
      emissive: 0x0a4fa0,
      emissiveIntensity: 0.6,
    });
    const lensGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0x0a1a2a,
      metalness: 0.1,
      roughness: 0.05,
      transmission: 0.9,
      thickness: 0.5,
      ior: 1.5,
      clearcoat: 1,
      clearcoatRoughness: 0.02,
      transparent: true,
      opacity: 0.85,
    });
    const lensRingMat = new THREE.MeshStandardMaterial({
      color: 0xd4a857,
      metalness: 1,
      roughness: 0.15,
      emissive: 0x3a2a08,
      emissiveIntensity: 0.4,
    });
    const pupilMat = new THREE.MeshStandardMaterial({
      color: 0x9ca3af,
      metalness: 0.3,
      roughness: 0.1,
      emissive: 0xffffff,
      emissiveIntensity: 1.8,
    });

    // ---- Robot group ----
    const robot = new THREE.Group();
    scene.add(robot);
    let scrollTarget = 0;
    let scrollProgress = 0;
    const robotScale = isMobile ? 0.75 : isTablet ? 0.9 : 1;

    robot.scale.setScalar(robotScale);
    robot.position.y = isMobile ? 0.7 : 0;
    // Head (rounded box)
    const headGeo = new THREE.BoxGeometry(2.2, 1.8, 1.6);
    headGeo.translate(0, 0, 0);

    const head = new THREE.Mesh(headGeo, bodyMat);
    head.castShadow = true;
    head.receiveShadow = true;
    head.position.y = 0.5;
    robot.add(head);

    // Face plate (darker inset on front)
    const facePlateGeo = new THREE.BoxGeometry(1.9, 1.5, 0.08);
    const facePlate = new THREE.Mesh(facePlateGeo, darkMat);
    facePlate.position.set(0, 0.5, 0.82);
    facePlate.castShadow = true;
    robot.add(facePlate);

    // Top antenna
    const antennaBaseGeo = new THREE.CylinderGeometry(0.08, 0.12, 0.3, 16);
    const antennaBase = new THREE.Mesh(antennaBaseGeo, darkMat);
    antennaBase.position.set(0, 1.55, 0);
    antennaBase.castShadow = true;
    robot.add(antennaBase);

    const antennaRodGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.6, 12);
    const antennaRod = new THREE.Mesh(antennaRodGeo, bodyMat);
    antennaRod.position.set(0, 1.95, 0);
    antennaRod.castShadow = true;
    robot.add(antennaRod);

    const antennaTipGeo = new THREE.SphereGeometry(0.1, 16, 16);
    const antennaTip = new THREE.Mesh(antennaTipGeo, accentMat);
    antennaTip.position.set(0, 2.3, 0);
    robot.add(antennaTip);

    // Ears (side cylinders)
    const earGeo = new THREE.CylinderGeometry(0.28, 0.28, 0.35, 24);
    const earLeft = new THREE.Mesh(earGeo, darkMat);
    earLeft.position.set(-1.2, 0.5, 0);
    earLeft.rotation.z = Math.PI / 2;
    earLeft.castShadow = true;
    robot.add(earLeft);
    const earRight = earLeft.clone();
    earRight.position.x = 1.2;
    robot.add(earRight);

    // Ear inner glow
    const earInnerGeo = new THREE.CylinderGeometry(0.16, 0.16, 0.37, 20);
    const earInnerLeft = new THREE.Mesh(earInnerGeo, accentMat);
    earInnerLeft.position.set(-1.2, 0.5, 0);
    earInnerLeft.rotation.z = Math.PI / 2;
    robot.add(earInnerLeft);
    const earInnerRight = earInnerLeft.clone();
    earInnerRight.position.x = 1.2;
    robot.add(earInnerRight);

    // Neck
    const neckGeo = new THREE.CylinderGeometry(0.45, 0.55, 0.35, 24);
    const neck = new THREE.Mesh(neckGeo, darkMat);
    neck.position.set(0, -0.55, 0);
    neck.castShadow = true;
    robot.add(neck);

    // Body / torso
    const torsoGeo = new THREE.BoxGeometry(2.4, 1.8, 1.4);
    const torso = new THREE.Mesh(torsoGeo, bodyMat);
    torso.position.set(0, -1.7, 0);
    torso.castShadow = true;
    torso.receiveShadow = true;
    robot.add(torso);

    // Logo plate on the chest (loaded from /logobranca.png)
    const logoTex = new THREE.TextureLoader().load("/logobranca.png");
    logoTex.colorSpace = THREE.SRGBColorSpace;
    logoTex.minFilter = THREE.LinearFilter;
    logoTex.magFilter = THREE.LinearFilter;
    const logoMat = new THREE.MeshBasicMaterial({
      map: logoTex,
      transparent: true,
      opacity: 0.95,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const logoGeo = new THREE.PlaneGeometry(1.9, 0.95);
    const logoMesh = new THREE.Mesh(logoGeo, logoMat);
    logoMesh.position.set(0, -1.4, 0.76);
    robot.add(logoMesh);

    // Shoulders
    const shoulderGeo = new THREE.SphereGeometry(0.45, 24, 24);
    const shoulderLeft = new THREE.Mesh(shoulderGeo, bodyMat);
    shoulderLeft.position.set(-1.45, -1.1, 0);
    shoulderLeft.castShadow = true;
    robot.add(shoulderLeft);
    const shoulderRight = shoulderLeft.clone();
    shoulderRight.position.x = 1.45;
    robot.add(shoulderRight);

    // Upper arms
    const armGeo = new THREE.CylinderGeometry(0.3, 0.26, 1.2, 20);
    const armLeft = new THREE.Mesh(armGeo, darkMat);
    armLeft.position.set(-1.7, -1.9, 0);
    armLeft.castShadow = true;
    robot.add(armLeft);
    const rightArmPivot = new THREE.Group();
    rightArmPivot.position.set(1.45, -1.1, 0); // ombro direito
    robot.add(rightArmPivot);

    const armRight = new THREE.Mesh(armGeo, darkMat);
    armRight.position.set(0.25, -0.8, 0); // posição relativa ao ombro
    armRight.castShadow = true;
    rightArmPivot.add(armRight);

    // Hands
    const handGeo = new THREE.SphereGeometry(0.32, 20, 20);
    const handLeft = new THREE.Mesh(handGeo, bodyMat);
    handLeft.position.set(-1.7, -2.7, 0);
    handLeft.castShadow = true;
    robot.add(handLeft);
    const handRight = handLeft.clone();
    handRight.position.set(0.25, -1.45, 0);
    rightArmPivot.add(handRight);
    // ---- (luneta) ----

    const eyePivot = new THREE.Group();
    eyePivot.position.set(0, 0.5, 0.82);
    robot.add(eyePivot);

    // Aro Dourado
    const lensRingOuterGeo = new THREE.TorusGeometry(0.55, 0.09, 24, 64);
    const lensRingMesh = new THREE.Mesh(lensRingOuterGeo, lensRingMat);
    lensRingMesh.position.z = 0.05;
    lensRingMesh.castShadow = true;
    eyePivot.add(lensRingMesh);

    //vidro
    const lensGlassGeo = new THREE.SphereGeometry(0.5, 48, 48);
    const lensGlass = new THREE.Mesh(lensGlassGeo, lensGlassMat);
    lensGlass.position.z = 0.05;
    lensGlass.scale.set(1, 1, 0.45);
    eyePivot.add(lensGlass);

    // Pupila
    const pupilGeo = new THREE.SphereGeometry(0.18, 32, 32);
    const pupil = new THREE.Mesh(pupilGeo, pupilMat);
    pupil.position.z = 0.42;
    eyePivot.add(pupil);

    // Anel interno
    const pupilRingGeo = new THREE.TorusGeometry(0.22, 0.02, 12, 40);
    const pupilRing = new THREE.Mesh(pupilRingGeo, lensRingMat);
    pupilRing.position.z = 0.42;
    eyePivot.add(pupilRing);

    // ---- Ground ----
    const groundGeo = new THREE.PlaneGeometry(40, 40);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x071426,
      transparent: true,
      opacity: 0.01,
      metalness: 0.2,
      roughness: 0.8,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -3.4;
    ground.receiveShadow = true;
    scene.add(ground);

    // Grid helper for a tech feel
    const grid = new THREE.GridHelper(40, 40, 0x1a3a6a, 0x122540);
    (grid.material as THREE.Material).opacity = 0.25;
    (grid.material as THREE.Material).transparent = true;
    grid.position.y = -3.39;
    scene.add(grid);

    // ---- Floating particles ----
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 1] = Math.random() * 8 - 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );
    const particleMat = new THREE.PointsMaterial({
      color: 0x66ddff,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ---- Floating data dashboards (behind the robot) ----
    type PanelCfg = {
      kind: "line" | "bar" | "gauge" | "area";
      title: string;
      color: string;
      pos: [number, number, number];
      scale: number;
      phase: number;
      speed: number;
    };
    const panelCfgs: PanelCfg[] = [
      {
        kind: "line",
        title: "Dashboards",
        color: "#22d3ee",
        pos: [-4.6, 1.4, -2.6],
        scale: 1.15,
        phase: 0,
        speed: 0.7,
      },
      {
        kind: "bar",
        title: "Dados",
        color: "#ff6b9d",
        pos: [4.7, 0.6, -3.0],
        scale: 1.1,
        phase: 1.2,
        speed: 0.6,
      },
      {
        kind: "gauge",
        title: "Estudos",
        color: "#34d399",
        pos: [-3.6, 2.7, -4.0],
        scale: 0.9,
        phase: 2.4,
        speed: 0.5,
      },
      {
        kind: "area",
        title: "Plataformas",
        color: "#fbbf24",
        pos: [3.9, 2.3, -3.6],
        scale: 0.95,
        phase: 0.6,
        speed: 0.55,
      },
      {
        kind: "line",
        title: "Estudos",
        color: "#38bdf8",
        pos: [-4.2, -1.5, -2.2],
        scale: 1.0,
        phase: 3.1,
        speed: 0.65,
      },
      {
        kind: "bar",
        title: "Pesquisas",
        color: "#f472b6",
        pos: [4.3, -1.2, -3.4],
        scale: 0.95,
        phase: 1.8,
        speed: 0.5,
      },
    ];

    const panelAspect = PANEL_W / PANEL_H;
    type LivePanel = {
      mesh: THREE.Mesh;
      state: PanelState;
      canvas: HTMLCanvasElement;
      ctx: CanvasRenderingContext2D;
      texture: THREE.CanvasTexture;
      cfg: PanelCfg;
    };
    const panels: LivePanel[] = [];

    for (const cfg of panelCfgs) {
      const canvas = document.createElement("canvas");
      canvas.width = PANEL_W;
      canvas.height = PANEL_H;
      const ctx = canvas.getContext("2d")!;
      const state = createPanelState(cfg.kind, cfg.title, cfg.color);
      drawPanel(ctx, state, true);

      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.anisotropy = 4;

      const mat = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.92,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      const baseW = 2.2 * cfg.scale;
      const geo = new THREE.PlaneGeometry(baseW, baseW / panelAspect);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2]);
      scene.add(mesh);

      // Faint glow halo behind each panel
      const haloMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(cfg.color),
        transparent: true,
        opacity: 0.12,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      const halo = new THREE.Mesh(
        new THREE.PlaneGeometry(baseW * 1.18, (baseW / panelAspect) * 1.18),
        haloMat,
      );
      halo.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2] - 0.05);
      scene.add(halo);

      panels.push({ mesh, state, canvas, ctx, texture, cfg });
    }

    // ---- Mouse tracking ----
    const mouse = new THREE.Vector2(0, 0);
    const target = new THREE.Vector2(0, 0);

    const onPointerMove = (e: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      target.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      target.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    window.addEventListener("pointermove", onPointerMove);

    // ---- Resize ----
    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;

      scrollTarget =
        max > 0 ? THREE.MathUtils.clamp(window.scrollY / max, 0, 1) : 0;
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    // ---- Animate ----
    const clock = new THREE.Clock();
    let raf = 0;

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Smooth mouse
      mouse.x += (target.x - mouse.x) * 0.08;
      mouse.y += (target.y - mouse.y) * 0.08;

      // Eye pivot follows mouse — clamp rotation so it feels mechanical
      const maxYaw = 0.6;
      const maxPitch = 0.45;
      eyePivot.rotation.y = THREE.MathUtils.clamp(
        mouse.x * 1.2,
        -maxYaw,
        maxYaw,
      );
      eyePivot.rotation.x = THREE.MathUtils.clamp(
        -mouse.y * 0.9,
        -maxPitch,
        maxPitch,
      );

      // Subtle pupil bobbing
      pupil.position.z = 0.42 + Math.sin(t * 2) * 0.015;
      pupilRing.position.z = pupil.position.z;

      // Lens glow flicker
      lensGlow.intensity = 2.5 + Math.sin(t * 3) * 0.6;

      // Antenna tip pulse
      antennaTip.scale.setScalar(1 + Math.sin(t * 4) * 0.15);
      (antennaTip.material as THREE.MeshStandardMaterial).emissiveIntensity =
        0.6 + Math.sin(t * 4) * 0.4;

      // Flutuação leve do robô + leve giro do corpo em direção ao mouse
      robot.position.y = Math.sin(t * 1.2) * 0.08;
      robot.rotation.y = THREE.MathUtils.lerp(
        robot.rotation.y,
        mouse.x * 0.25,
        0.05,
      );
      robot.rotation.x = THREE.MathUtils.lerp(
        robot.rotation.x,
        -mouse.y * 0.12,
        0.05,
      );

      scrollProgress += (scrollTarget - scrollProgress) * 0.08;

      const raise = THREE.MathUtils.clamp(scrollProgress, 0, 1);

      // Rotação
      rightArmPivot.rotation.x = -raise * 1.3;
      rightArmPivot.rotation.z = raise * 0.15;

      // Movimento do ombro para frente
      rightArmPivot.position.z = raise * 1.2;

      // Movimento para o centro
      rightArmPivot.position.x = 1.45 - raise * 0.35;

      // Levanta um pouco o ombro
      rightArmPivot.position.y = -1.1 + raise * 0.25;

      // Estica o braço
      armRight.position.y = -0.95 - raise * 0.35;

      // Mão acompanha
      handRight.position.y = -1.65 - raise * 0.45;
      handRight.position.z = raise * 0.9;

      if (raise > 0.05) {
        rightArmPivot.rotation.x += Math.sin(t * 2.2) * 0.03 * raise;
      }
      // Particles drift
      particles.rotation.y = t * 0.03;
      const posAttr = particles.geometry.attributes
        .position as THREE.BufferAttribute;
      for (let i = 0; i < particleCount; i++) {
        const iy = i * 3 + 1;
        posAttr.array[iy] = (posAttr.array[iy] as number) + 0.003;
        if ((posAttr.array[iy] as number) > 6) posAttr.array[iy] = -2;
      }
      posAttr.needsUpdate = true;

      // Update floating dashboards — stagger redraws for performance
      const frame = Math.floor(t * 60);
      panels.forEach((p, i) => {
        const drift = t * p.cfg.speed + p.cfg.phase;
        // Gentle float + slow orbit around base position
        p.mesh.position.x = p.cfg.pos[0] + Math.sin(drift) * 0.35;
        p.mesh.position.y = p.cfg.pos[1] + Math.cos(drift * 0.8) * 0.25;
        p.mesh.position.z = p.cfg.pos[2] + Math.sin(drift * 0.5) * 0.2;
        // Slight tilt for parallax + react to mouse
        p.mesh.rotation.y = 0.18 * Math.sin(drift * 0.6) + mouse.x * 0.06;
        p.mesh.rotation.x = 0.1 * Math.cos(drift * 0.5) - mouse.y * 0.04;

        // Update data + redraw on a staggered cadence
        if (frame % 3 === i % 3) {
          updatePanelState(p.state);
          drawPanel(p.ctx, p.state, frame % 60 < 30);
          p.texture.needsUpdate = true;
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      renderer.dispose();
      logoMat.map?.dispose();
      logoMat.dispose();
      panels.forEach((p) => p.texture.dispose());
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          const mat = obj.material;
          if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
          else mat.dispose();
        }
      });
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}

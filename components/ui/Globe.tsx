"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// ── Dot sphere + pulse rings in a single component (1 useFrame total) ────────
function DotSphere({
  scrollProgress,
}: {
  scrollProgress: React.MutableRefObject<number>;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const ring0 = useRef<THREE.Mesh>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);

  // ── Inertia state — all refs, zero re-renders ──────────────────────────────
  // Accumulated auto-spin so rotation never jumps on mount/re-mount
  const autoSpin = useRef(0);
  // Raw normalised mouse X: -1 (left edge) → +1 (right edge)
  const rawMouseX = useRef(0);
  // Lerped values — these trail toward their targets for inertia
  const lerpedMouseY  = useRef(0);  // mouse influence on Y axis
  const lerpedScrollY = useRef(0);  // scroll influence on Y axis
  const lerpedScrollX = useRef(0);  // scroll influence on X tilt

  // Listen on the whole window so it works even with pointer-events:none
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      // Normalize to -1..1 across the full viewport width
      rawMouseX.current = (e.clientX / window.innerWidth) * 2 - 1;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // ── Geometries ─────────────────────────────────────────────────────────────
  // 2 000 dots via golden spiral — memoised once
  const dotsGeo = useMemo(() => {
    const count = 2000;
    const pos = new Float32Array(count * 3);
    const r = 2.4;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return geo;
  }, []);

  // All grid lines as a single LineSegments — 1 draw call instead of 17
  const gridGeo = useMemo(() => {
    const verts: number[] = [];
    const r = 2.4;
    const segs = 48;

    for (const lat of [-60, -30, 0, 30, 60]) {
      const lr = (lat * Math.PI) / 180;
      const cy = Math.cos(lr);
      const sy = Math.sin(lr);
      for (let i = 0; i < segs; i++) {
        const a0 = (i / segs) * Math.PI * 2;
        const a1 = ((i + 1) / segs) * Math.PI * 2;
        verts.push(r * cy * Math.cos(a0), r * sy, r * cy * Math.sin(a0));
        verts.push(r * cy * Math.cos(a1), r * sy, r * cy * Math.sin(a1));
      }
    }

    for (let lng = 0; lng < 360; lng += 30) {
      const lr = (lng * Math.PI) / 180;
      for (let i = 0; i < segs; i++) {
        const la0 = (i / segs) * Math.PI - Math.PI / 2;
        const la1 = ((i + 1) / segs) * Math.PI - Math.PI / 2;
        verts.push(
          r * Math.cos(la0) * Math.cos(lr), r * Math.sin(la0), r * Math.cos(la0) * Math.sin(lr)
        );
        verts.push(
          r * Math.cos(la1) * Math.cos(lr), r * Math.sin(la1), r * Math.cos(la1) * Math.sin(lr)
        );
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(verts), 3)
    );
    return geo;
  }, []);

  // ── Materials ──────────────────────────────────────────────────────────────
  const dotMat = useMemo(
    () =>
      new THREE.PointsMaterial({
        color: "#5B8FA8",
        size: 0.022,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.85,
      }),
    []
  );

  const gridMat = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: "#8EA8B4",
        transparent: true,
        opacity: 0.12,
      }),
    []
  );

  const ringGeo  = useMemo(() => new THREE.RingGeometry(2.5, 2.52, 48), []);
  const ringMat0 = useMemo(() => new THREE.MeshBasicMaterial({ color: "#5B8FA8", transparent: true, opacity: 0.15, side: THREE.DoubleSide }), []);
  const ringMat1 = useMemo(() => new THREE.MeshBasicMaterial({ color: "#5B8FA8", transparent: true, opacity: 0.10, side: THREE.DoubleSide }), []);
  const ringMat2 = useMemo(() => new THREE.MeshBasicMaterial({ color: "#5B8FA8", transparent: true, opacity: 0.05, side: THREE.DoubleSide }), []);

  // ── Animation ──────────────────────────────────────────────────────────────
  // delta (second arg) = time since last frame in seconds — frame-rate independent
  useFrame(({ clock }, delta) => {
    const t   = clock.getElapsedTime();
    const sp  = scrollProgress.current;

    // 1. Auto-spin: accumulate so there's never a jump on re-mount
    autoSpin.current += delta * 0.08;

    // 2. Define targets
    const targetScrollY = sp * Math.PI;          // scroll drives Y offset
    const targetScrollX = sp * 0.3;              // scroll drives X tilt
    const targetMouseY  = rawMouseX.current * 0.35; // mouse ±0.35 rad (±20°) on Y

    // 3. Lerp toward targets — this is what creates the inertia/ease-out feel
    //    Smaller factor = more inertia / slower catch-up
    lerpedScrollY.current += (targetScrollY - lerpedScrollY.current) * 0.04;
    lerpedScrollX.current += (targetScrollX - lerpedScrollX.current) * 0.04;
    lerpedMouseY.current  += (targetMouseY  - lerpedMouseY.current)  * 0.05;

    if (groupRef.current) {
      // Y = continuous spin  +  scroll drift  +  mouse influence
      groupRef.current.rotation.y =
        autoSpin.current + lerpedScrollY.current + lerpedMouseY.current;

      // X = gentle organic wobble  +  scroll tilt
      groupRef.current.rotation.x =
        Math.sin(t * 0.05) * 0.08 + lerpedScrollX.current;

      // Scale grows slightly on scroll (existing behaviour, preserved)
      groupRef.current.scale.setScalar(1 + sp * 0.3);
    }

    // 4. Pulse rings — inline, no child components or extra useFrame calls
    const delays: [React.RefObject<THREE.Mesh | null>, number][] = [
      [ring0, 0],
      [ring1, 1.5],
      [ring2, 3],
    ];
    for (const [ref, delay] of delays) {
      if (!ref.current) continue;
      const progress = ((t + delay) % 4) / 4;
      ref.current.scale.setScalar(1 + progress * 0.8);
      (ref.current.material as THREE.MeshBasicMaterial).opacity =
        (1 - progress) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Core glow — 8×8 is plenty for a 5%-opacity invisible sphere */}
      <mesh>
        <sphereGeometry args={[2.35, 8, 8]} />
        <meshBasicMaterial color="#2D5A6B" transparent opacity={0.05} />
      </mesh>

      {/* Dots */}
      <points geometry={dotsGeo} material={dotMat} />

      {/* Grid — 1 draw call */}
      <lineSegments geometry={gridGeo} material={gridMat} />

      {/* Pulse rings */}
      <mesh ref={ring0} geometry={ringGeo} material={ringMat0} />
      <mesh ref={ring1} geometry={ringGeo} material={ringMat1} />
      <mesh ref={ring2} geometry={ringGeo} material={ringMat2} />
    </group>
  );
}

// ── Connection arcs — merged into a single LineSegments (1 draw call) ─────────
function ConnectionArcs() {
  const { geo, mat } = useMemo(() => {
    const pairs: [[number, number], [number, number]][] = [
      [[40, -74], [51.5, 0]],
      [[35.6, 139.7], [1.3, 103.8]],
      [[28.6, 77.2], [25.2, 55.3]],
      [[-23.5, -46.6], [40, -74]],
      [[51.5, 0], [48.8, 2.3]],
      [[37.5, 127], [35.6, 139.7]],
    ];

    const verts: number[] = [];
    for (const [from, to] of pairs) {
      const start = latLngToVec3(from[0], from[1], 2.42);
      const end = latLngToVec3(to[0], to[1], 2.42);
      const mid = start
        .clone()
        .add(end)
        .multiplyScalar(0.5)
        .normalize()
        .multiplyScalar(3.2);
      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const pts = curve.getPoints(32);
      for (let i = 0; i < pts.length - 1; i++) {
        verts.push(pts[i].x, pts[i].y, pts[i].z);
        verts.push(pts[i + 1].x, pts[i + 1].y, pts[i + 1].z);
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(verts), 3)
    );
    const mat = new THREE.LineBasicMaterial({
      color: "#A8C5D4",
      transparent: true,
      opacity: 0.3,
    });
    return { geo, mat };
  }, []);

  return <lineSegments geometry={geo} material={mat} />;
}

function latLngToVec3(lat: number, lng: number, r: number) {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lng + 180) * Math.PI) / 180;
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
}

// ── Camera — lerps toward scroll-driven target position ──────────────────────
function CameraController({
  scrollProgress,
}: {
  scrollProgress: React.MutableRefObject<number>;
}) {
  const { camera } = useThree();

  useFrame(() => {
    const sp = scrollProgress.current;
    camera.position.z += (7 - sp * 2.5 - camera.position.z) * 0.05;
    camera.position.y += (-sp * 0.5 - camera.position.y) * 0.05;
  });

  return null;
}

function Lighting() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 3, 5]} intensity={0.8} color="#A8C5D4" />
      <pointLight position={[-5, -3, -5]} intensity={0.3} color="#5B8FA8" />
    </>
  );
}

// ── Export ────────────────────────────────────────────────────────────────────
export default function Globe({
  scrollProgress,
}: {
  scrollProgress: React.MutableRefObject<number>;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 1.5]}
      performance={{ min: 0.5 }}
      style={{ background: "transparent" }}
      gl={{ antialias: false, powerPreference: "high-performance" }}
    >
      <Lighting />
      <CameraController scrollProgress={scrollProgress} />
      <DotSphere scrollProgress={scrollProgress} />
      <ConnectionArcs />
    </Canvas>
  );
}

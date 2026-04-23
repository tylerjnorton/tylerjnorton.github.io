# Three.js r184 — Comprehensive Reference

> Source: threejs.org/docs, threejs.org/manual, github.com/mrdoob/three.js (r184, April 2026)

---

## Table of Contents

1. [Core Architecture](#1-core-architecture)
2. [Geometry](#2-geometry)
3. [Materials](#3-materials)
4. [Lighting](#4-lighting)
5. [Textures](#5-textures)
6. [Animation](#6-animation)
7. [3D Model Loading](#7-3d-model-loading)
8. [Controls & Interaction](#8-controls--interaction)
9. [Post-Processing](#9-post-processing)
10. [Performance](#10-performance)
11. [Advanced](#11-advanced)

---

## 1. Core Architecture

### Scene Graph

Everything in Three.js lives in a **scene graph** — a tree of `Object3D` nodes. A `Scene` is the root. `Mesh`, `Light`, `Camera`, `Group`, and `Sprite` all extend `Object3D`. Parent transforms cascade to children.

```js
import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e);
scene.fog = new THREE.Fog(0x1a1a2e, 10, 100); // linear fog

const group = new THREE.Group();
scene.add(group);

const child = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0x4fc3f7 })
);
group.add(child); // child inherits group's transform

group.position.set(0, 2, -5);
group.rotation.y = Math.PI / 4;
```

Key `Object3D` properties: `position` (Vector3), `rotation` (Euler), `quaternion` (Quaternion), `scale` (Vector3), `matrix`, `matrixWorld`, `visible`, `castShadow`, `receiveShadow`, `userData` (arbitrary data bag).

---

### WebGLRenderer

```js
const renderer = new THREE.WebGLRenderer({
  antialias: true,          // MSAA — disable on mobile for perf
  alpha: false,             // transparent canvas background
  powerPreference: 'high-performance',
  stencil: false,           // disable if unused (saves memory)
  logarithmicDepthBuffer: false, // enable for extreme depth ranges
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // cap at 2×
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
document.body.appendChild(renderer.domElement);
```

---

### WebGPURenderer

Drop-in replacement for WebGLRenderer with a WebGPU backend (falls back to WebGL2 automatically). Unlocks compute shaders and TSL (Three Shader Language).

```js
import WebGPURenderer from 'three/addons/renderers/WebGPURenderer.js';
import { computeBuiltin, storage, instanceIndex } from 'three/tsl';

const renderer = new WebGPURenderer({ antialias: true });
await renderer.init(); // required — returns a Promise
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Everything else (scene, camera, meshes) is identical to WebGLRenderer
```

---

### Cameras

**PerspectiveCamera** — mimics human vision; use for most 3D scenes.

```js
const camera = new THREE.PerspectiveCamera(
  75,                                    // fov (degrees)
  window.innerWidth / window.innerHeight, // aspect
  0.1,                                   // near clipping plane
  1000                                   // far clipping plane
);
camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);
```

**OrthographicCamera** — no perspective foreshortening; use for 2D/UI/isometric.

```js
const aspect = window.innerWidth / window.innerHeight;
const frustumSize = 10;
const camera = new THREE.OrthographicCamera(
  (frustumSize * aspect) / -2,  // left
  (frustumSize * aspect) / 2,   // right
  frustumSize / 2,              // top
  frustumSize / -2,             // bottom
  0.1,                          // near
  1000                          // far
);
camera.position.set(10, 10, 10);
camera.lookAt(0, 0, 0);
```

**CubeCamera** — renders 6 faces for environment/reflection maps.

```js
const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256, {
  format: THREE.RGBAFormat,
  generateMipmaps: true,
  minFilter: THREE.LinearMipmapLinearFilter,
});
const cubeCamera = new THREE.CubeCamera(0.1, 100, cubeRenderTarget);
scene.add(cubeCamera);

// In animate loop:
cubeCamera.update(renderer, scene);
reflectiveMesh.material.envMap = cubeRenderTarget.texture;
```

---

### Animation Loop & Resize Handling

```js
const clock = new THREE.Clock();

function animate() {
  const delta = clock.getDelta();   // seconds since last frame
  const elapsed = clock.getElapsedTime();

  // update logic here
  controls.update(delta);
  mixer?.update(delta);

  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate); // preferred over requestAnimationFrame
// renderer.setAnimationLoop(null); // stop the loop

// Resize handler
function onResize() {
  const w = window.innerWidth, h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}
window.addEventListener('resize', onResize);
```

---

## 2. Geometry

### Built-in Geometries

```js
// BoxGeometry(width, height, depth, widthSegs, heightSegs, depthSegs)
new THREE.BoxGeometry(1, 1, 1, 2, 2, 2)

// SphereGeometry(radius, widthSegs, heightSegs, phiStart, phiLen, thetaStart, thetaLen)
new THREE.SphereGeometry(1, 32, 16)

// PlaneGeometry(width, height, widthSegs, heightSegs)
new THREE.PlaneGeometry(10, 10, 10, 10)

// CylinderGeometry(radiusTop, radiusBottom, height, radialSegs, heightSegs, openEnded, thetaStart, thetaLen)
new THREE.CylinderGeometry(0.5, 0.5, 2, 32)
new THREE.CylinderGeometry(0, 1, 2, 32)  // cone

// TorusGeometry(radius, tube, radialSegs, tubularSegs, arc)
new THREE.TorusGeometry(1, 0.3, 16, 64)

// TorusKnotGeometry(radius, tube, tubularSegs, radialSegs, p, q)
new THREE.TorusKnotGeometry(1, 0.3, 100, 16)

// CapsuleGeometry(radius, length, capSegs, radialSegs)
new THREE.CapsuleGeometry(0.5, 1, 4, 8)

// CircleGeometry(radius, segments, thetaStart, thetaLength)
new THREE.CircleGeometry(1, 32)

// RingGeometry(innerRadius, outerRadius, thetaSegs, phiSegs, thetaStart, thetaLen)
new THREE.RingGeometry(0.5, 1, 32)

// ConeGeometry(radius, height, radialSegs, heightSegs, openEnded)
new THREE.ConeGeometry(1, 2, 32)

// DodecahedronGeometry / IcosahedronGeometry / OctahedronGeometry / TetrahedronGeometry
new THREE.IcosahedronGeometry(1, 0) // detail=0 is low-poly

// LatheGeometry(points, segments, phiStart, phiLength) — revolution surface
const pts = [];
for (let i = 0; i < 10; i++) pts.push(new THREE.Vector2(Math.sin(i * 0.2) * 0.5 + 0.5, i * 0.2));
new THREE.LatheGeometry(pts, 32)

// ExtrudeGeometry(shape, options)
const shape = new THREE.Shape();
shape.moveTo(0, 0); shape.lineTo(1, 0); shape.lineTo(0.5, 1); shape.closePath();
new THREE.ExtrudeGeometry(shape, { depth: 0.5, bevelEnabled: true, bevelSize: 0.05 })

// TubeGeometry(path, tubularSegs, radius, radialSegs, closed)
const path = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-2, 0, 0), new THREE.Vector3(0, 2, 0), new THREE.Vector3(2, 0, 0)
]);
new THREE.TubeGeometry(path, 64, 0.1, 8, false)

// EdgesGeometry — shows only hard edges
new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 1))

// WireframeGeometry — all triangle edges
new THREE.WireframeGeometry(new THREE.SphereGeometry(1, 32, 16))
```

**Addon geometries:**
```js
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { ConvexGeometry } from 'three/addons/geometries/ConvexGeometry.js';
import { DecalGeometry } from 'three/addons/geometries/DecalGeometry.js';
```

---

### BufferGeometry — Custom Vertices

```js
const geometry = new THREE.BufferGeometry();

// Triangle
const vertices = new Float32Array([
  -1, -1, 0,  // vertex 0
   1, -1, 0,  // vertex 1
   0,  1, 0,  // vertex 2
]);
geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

// Normals (all pointing toward +Z)
const normals = new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]);
geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));

// UVs
const uvs = new Float32Array([0, 0,  1, 0,  0.5, 1]);
geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));

// Indexed geometry (reuse vertices)
const positions = new Float32Array([
  -1, -1, 0,   1, -1, 0,   1, 1, 0,   -1, 1, 0  // quad
]);
geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
geometry.setIndex([0, 1, 2,  0, 2, 3]); // two triangles

geometry.computeVertexNormals(); // auto-compute normals from faces
geometry.computeBoundingBox();
geometry.computeBoundingSphere();

const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
```

---

### InstancedMesh — GPU Instancing

Draw thousands of identical meshes in a single draw call.

```js
const COUNT = 10000;
const geometry = new THREE.SphereGeometry(0.1, 8, 4);
const material = new THREE.MeshStandardMaterial({ color: 0xffffff });

const instancedMesh = new THREE.InstancedMesh(geometry, material, COUNT);
instancedMesh.castShadow = true;
scene.add(instancedMesh);

const dummy = new THREE.Object3D();
const color = new THREE.Color();

for (let i = 0; i < COUNT; i++) {
  dummy.position.set(
    (Math.random() - 0.5) * 100,
    (Math.random() - 0.5) * 100,
    (Math.random() - 0.5) * 100
  );
  dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
  dummy.scale.setScalar(Math.random() * 2 + 0.5);
  dummy.updateMatrix();
  instancedMesh.setMatrixAt(i, dummy.matrix);
  instancedMesh.setColorAt(i, color.setHSL(Math.random(), 0.8, 0.6));
}

instancedMesh.instanceMatrix.needsUpdate = true;
instancedMesh.instanceColor.needsUpdate = true;

// Update a single instance each frame:
dummy.position.x = Math.sin(elapsed);
dummy.updateMatrix();
instancedMesh.setMatrixAt(0, dummy.matrix);
instancedMesh.instanceMatrix.needsUpdate = true;
```

---

## 3. Materials

### Material Overview & Performance Tradeoffs

| Material | Lighting | Cost | Use When |
|---|---|---|---
| `MeshBasicMaterial` | None | Lowest | Flat colors, wireframes, UI, debug |
| `MeshNormalMaterial` | None | Very low | Debugging normals |
| `MeshDepthMaterial` | None | Very low | Depth visualization, custom shadows |
| `MeshLambertMaterial` | Diffuse (vertex) | Low | Non-shiny organic surfaces, many objects |
| `MeshPhongMaterial` | Diffuse+Specular | Medium | Shiny plastic, glossy surfaces, older style |
| `MeshToonMaterial` | Toon/cel shading | Medium | Stylized, cartoon look |
| `MeshStandardMaterial` | PBR (metallic-roughness) | High | Default choice for realistic surfaces |
| `MeshPhysicalMaterial` | PBR + extras | Highest | Glass, clearcoat, sheen, transmission |
| `ShaderMaterial` | Custom GLSL | Varies | Custom effects |
| `RawShaderMaterial` | Custom GLSL (no includes) | Varies | Full control over shader |

---

### MeshBasicMaterial

```js
const mat = new THREE.MeshBasicMaterial({
  color: 0xff6600,
  wireframe: false,
  map: texture,          // diffuse texture (ignores lighting)
  transparent: true,
  opacity: 0.8,
  side: THREE.DoubleSide,
  depthWrite: false,     // good for transparent overlays
  alphaMap: alphaTexture,
});
```

---

### MeshLambertMaterial

Diffuse-only, computed per-vertex. Fast but less accurate than Phong/Standard.

```js
const mat = new THREE.MeshLambertMaterial({
  color: 0x88cc88,
  map: texture,
  emissive: new THREE.Color(0x002200), // self-illumination
  emissiveIntensity: 0.5,
  emissiveMap: emissiveTexture,
});
```

---

### MeshPhongMaterial

Diffuse + specular highlight (Blinn-Phong). Per-fragment shading.

```js
const mat = new THREE.MeshPhongMaterial({
  color: 0x156289,
  specular: new THREE.Color(0x111111),
  shininess: 100,         // 0–1000; higher = tighter highlight
  map: diffuseMap,
  normalMap: normalMap,
  normalScale: new THREE.Vector2(1, 1),
  bumpMap: bumpMap,
  bumpScale: 0.05,
  envMap: cubeTexture,
  reflectivity: 0.5,
});
```

---

### MeshStandardMaterial (PBR)

The default choice. Metallic-roughness workflow.

```js
const mat = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  metalness: 0.0,         // 0 = dielectric, 1 = metal
  roughness: 0.5,         // 0 = mirror, 1 = fully diffuse
  map: albedoMap,
  metalnessMap: metalnessMap,
  roughnessMap: roughnessMap,
  normalMap: normalMap,
  normalScale: new THREE.Vector2(1, 1),
  aoMap: aoMap,           // requires uv2 attribute
  aoMapIntensity: 1.0,
  emissive: new THREE.Color(0x000000),
  emissiveMap: emissiveMap,
  emissiveIntensity: 1.0,
  envMap: envTexture,     // set automatically when scene.environment is set
  envMapIntensity: 1.0,
  displacementMap: dispMap,
  displacementScale: 0.1,
  alphaMap: alphaMap,
  transparent: true,
});
```

---

### MeshPhysicalMaterial (extends Standard)

```js
const mat = new THREE.MeshPhysicalMaterial({
  // All MeshStandardMaterial props, plus:
  clearcoat: 1.0,               // 0–1 lacquer layer
  clearcoatRoughness: 0.1,
  clearcoatMap: ccMap,
  clearcoatRoughnessMap: ccRoughMap,
  clearcoatNormalMap: ccNormalMap,

  transmission: 1.0,            // 0–1 glass/refractive transparency
  transmissionMap: transMap,
  thickness: 0.5,               // volume thickness for refraction
  attenuationColor: new THREE.Color(0x82eefd),
  attenuationDistance: 2.0,
  ior: 1.5,                     // index of refraction (glass ≈ 1.5)

  sheen: 1.0,                   // fabric/velvet sheen
  sheenRoughness: 0.5,
  sheenColor: new THREE.Color(0x88ccff),

  iridescence: 1.0,             // soap bubble / oil slick
  iridescenceIOR: 1.3,
  iridescenceThicknessRange: [100, 400],

  anisotropy: 1.0,              // brushed metal
  anisotropyRotation: 0,
});
```

---

### MeshToonMaterial

```js
// Custom gradient map for discrete shading steps
const gradientMap = new THREE.DataTexture(
  new Uint8Array([0, 128, 255]),  // 3 shade levels
  3, 1, THREE.RedFormat
);
gradientMap.needsUpdate = true;

const mat = new THREE.MeshToonMaterial({
  color: 0xff6644,
  gradientMap,
});
```

---

### ShaderMaterial

```js
const mat = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color(0x00aaff) },
    uTexture: { value: texture },
  },
  vertexShader: /* glsl */`
    uniform float uTime;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      vec3 pos = position;
      pos.y += sin(pos.x * 4.0 + uTime) * 0.1;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: /* glsl */`
    uniform vec3 uColor;
    uniform sampler2D uTexture;
    varying vec2 vUv;
    void main() {
      vec4 texColor = texture2D(uTexture, vUv);
      gl_FragColor = vec4(uColor * texColor.rgb, texColor.a);
    }
  `,
  transparent: true,
  side: THREE.DoubleSide,
});

// Update uniform each frame:
mat.uniforms.uTime.value = elapsed;
```

---

### RawShaderMaterial

No built-in `#include` chunks — you write the full shader.

```js
const mat = new THREE.RawShaderMaterial({
  uniforms: { uMatrix: { value: new THREE.Matrix4() } },
  vertexShader: /* glsl */`
    precision mediump float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform mat4 projectionMatrix;
    uniform mat4 modelViewMatrix;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */`
    precision mediump float;
    varying vec2 vUv;
    void main() {
      gl_FragColor = vec4(vUv, 0.0, 1.0);
    }
  `,
});
```

---

### Common Material Properties

```js
mat.side = THREE.FrontSide;      // FrontSide | BackSide | DoubleSide
mat.transparent = true;
mat.opacity = 0.5;
mat.alphaTest = 0.5;             // discard fragments below threshold
mat.depthTest = true;
mat.depthWrite = false;          // disable for particles/transparent
mat.blending = THREE.AdditiveBlending;
mat.wireframe = true;
mat.vertexColors = true;         // use geometry color attribute
mat.fog = true;
mat.needsUpdate = true;          // set after changing properties that require recompile
mat.dispose();                   // free GPU memory
```

---

## 4. Lighting

### Ambient Light

Adds uniform light to all surfaces; no shadows; no direction.

```js
const ambient = new THREE.AmbientLight(0xffffff, 0.3); // color, intensity
scene.add(ambient);
```

### Hemisphere Light

Sky + ground gradient; cheap approximation of outdoor lighting.

```js
const hemi = new THREE.HemisphereLight(
  0x87ceeb,  // sky color
  0x362d1d,  // ground color
  0.6        // intensity
);
scene.add(hemi);
```

### Directional Light

Parallel rays (simulates sun). Orthographic shadow frustum.

```js
const dir = new THREE.DirectionalLight(0xffffff, 1.0);
dir.position.set(5, 10, 7.5);
dir.castShadow = true;

dir.shadow.mapSize.set(2048, 2048);  // higher = sharper shadows
dir.shadow.camera.near = 0.1;
dir.shadow.camera.far = 50;
dir.shadow.camera.left = -10;
dir.shadow.camera.right = 10;
dir.shadow.camera.top = 10;
dir.shadow.camera.bottom = -10;
dir.shadow.bias = -0.001;     // prevents shadow acne; tune carefully
dir.shadow.normalBias = 0.02; // alternative to bias for normal-map surfaces
dir.shadow.radius = 4;        // PCFSoftShadowMap blur radius

scene.add(dir);
scene.add(dir.target); // dir.target.position can be moved
```

### Point Light

Radiates in all spherical directions from a point.

```js
const point = new THREE.PointLight(0xff9900, 1.5, 20, 2);
// color, intensity, distance (0=infinite), decay (physically: 2)
point.position.set(0, 3, 0);
point.castShadow = true;
point.shadow.mapSize.set(1024, 1024);
scene.add(point);
```

### Spot Light

Cone-shaped directional. Most configurable light; most expensive.

```js
const spot = new THREE.SpotLight(0xffffff, 2);
spot.position.set(0, 10, 0);
spot.target.position.set(0, 0, 0);
spot.angle = Math.PI / 6;   // cone half-angle (radians)
spot.penumbra = 0.2;        // 0 = hard edge, 1 = full soft edge
spot.decay = 2;
spot.distance = 30;
spot.castShadow = true;
spot.shadow.mapSize.set(2048, 2048);
spot.shadow.camera.near = 0.5;
spot.shadow.camera.far = 30;
spot.shadow.focus = 1;      // shadow camera FOV fraction
scene.add(spot);
scene.add(spot.target);

// Helper for debugging:
const helper = new THREE.SpotLightHelper(spot);
scene.add(helper);
```

### Rect Area Light

Rectangular emitter — like a softbox or monitor glow. Requires addon init.

```js
import { RectAreaLightUniformsLib } from 'three/addons/lights/RectAreaLightUniformsLib.js';
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';

RectAreaLightUniformsLib.init(); // call once before creating lights

const rectLight = new THREE.RectAreaLight(0xff6600, 5, 4, 2); // color, intensity, width, height
rectLight.position.set(0, 3, 0);
rectLight.lookAt(0, 0, 0);
scene.add(rectLight);

const helper = new RectAreaLightHelper(rectLight);
rectLight.add(helper); // attach to light so it moves with it
```

RectAreaLight only works with `MeshStandardMaterial` and `MeshPhysicalMaterial`. Does **not** cast shadows.

---

### Shadow Map Setup Summary

```js
// Renderer
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // or PCFShadowMap, VSMShadowMap

// Each mesh
mesh.castShadow = true;
mesh.receiveShadow = true;

// Debug shadow camera:
const shadowHelper = new THREE.CameraHelper(dirLight.shadow.camera);
scene.add(shadowHelper);
```

Shadow map types: `BasicShadowMap` (hard, fast), `PCFShadowMap` (soft, medium), `PCFSoftShadowMap` (softer, slower), `VSMShadowMap` (variance, smooth, supports blur).

---

### Environment Maps / PMREM (PBR)

```js
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

const pmremGenerator = new THREE.PMREMGenerator(renderer);
pmremGenerator.compileEquirectangularShader();

const loader = new RGBELoader();
loader.load('/textures/studio.hdr', (hdrTexture) => {
  const envMap = pmremGenerator.fromEquirectangular(hdrTexture).texture;
  scene.environment = envMap;  // all PBR materials receive it automatically
  scene.background = envMap;   // optional: show as skybox
  hdrTexture.dispose();
  pmremGenerator.dispose();
});

// From cube texture:
const cubeEnv = pmremGenerator.fromCubemap(cubeTexture).texture;
scene.environment = cubeEnv;
```

---

## 5. Textures

### TextureLoader

```js
const loader = new THREE.TextureLoader();

// Simple
const texture = loader.load('/textures/diffuse.jpg');

// With callbacks
loader.load(
  '/textures/diffuse.jpg',
  (tex) => { material.map = tex; material.needsUpdate = true; }, // onLoad
  undefined,          // onProgress (not reliable for textures)
  (err) => console.error(err) // onError
);

// LoadingManager for coordinating multiple assets
const manager = new THREE.LoadingManager(
  () => console.log('All loaded'),
  (url, loaded, total) => console.log(`Loading ${url}: ${loaded}/${total}`),
  (url) => console.error(`Error loading ${url}`)
);
const managedLoader = new THREE.TextureLoader(manager);
```

### Texture Properties

```js
const tex = loader.load('/tex.jpg');

tex.colorSpace = THREE.SRGBColorSpace;    // for diffuse/albedo maps
// tex.colorSpace = THREE.NoColorSpace;   // for normal/roughness/metalness maps

tex.wrapS = THREE.RepeatWrapping;         // or ClampToEdgeWrapping, MirroredRepeatWrapping
tex.wrapT = THREE.RepeatWrapping;
tex.repeat.set(4, 4);                     // tile 4x4
tex.offset.set(0.5, 0.0);                // offset UV
tex.rotation = Math.PI / 4;              // rotate UV
tex.center.set(0.5, 0.5);               // rotation pivot

tex.minFilter = THREE.LinearMipmapLinearFilter; // best quality downscaling
tex.magFilter = THREE.LinearFilter;
tex.anisotropy = renderer.capabilities.getMaxAnisotropy(); // max quality at angles
tex.generateMipmaps = true; // default true; set false for render targets
tex.needsUpdate = true;
```

### CubeTextureLoader

```js
const cubeLoader = new THREE.CubeTextureLoader();
cubeLoader.setPath('/textures/cubemap/');
const cubeTexture = cubeLoader.load([
  'px.jpg', 'nx.jpg', // +X, -X
  'py.jpg', 'ny.jpg', // +Y, -Y
  'pz.jpg', 'nz.jpg', // +Z, -Z
]);
scene.background = cubeTexture;
```

### VideoTexture

```js
const video = document.createElement('video');
video.src = '/video/clip.mp4';
video.loop = true;
video.muted = true;
video.play();

const videoTexture = new THREE.VideoTexture(video);
videoTexture.colorSpace = THREE.SRGBColorSpace;

const mat = new THREE.MeshBasicMaterial({ map: videoTexture });
// VideoTexture auto-updates each frame via needsUpdate flag
```

### DataTexture

```js
// Procedural noise texture
const size = 256;
const data = new Uint8Array(size * size * 4);
for (let i = 0; i < size * size; i++) {
  const v = Math.floor(Math.random() * 255);
  data[i * 4] = v;
  data[i * 4 + 1] = v;
  data[i * 4 + 2] = v;
  data[i * 4 + 3] = 255;
}
const dataTex = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
dataTex.needsUpdate = true;
```

### CanvasTexture

```js
const canvas = document.createElement('canvas');
canvas.width = 512; canvas.height = 512;
const ctx = canvas.getContext('2d');
ctx.fillStyle = '#001122';
ctx.fillRect(0, 0, 512, 512);
ctx.font = '80px sans-serif';
ctx.fillStyle = 'white';
ctx.fillText('Hello 3D', 50, 270);

const canvasTex = new THREE.CanvasTexture(canvas);
// Redraw canvas and set canvasTex.needsUpdate = true to animate
```

---

## 6. Animation

### AnimationMixer & AnimationClip

```js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

let mixer;
const loader = new GLTFLoader();
loader.load('/models/character.glb', (gltf) => {
  scene.add(gltf.scene);
  mixer = new THREE.AnimationMixer(gltf.scene);

  // Play a clip
  const clip = THREE.AnimationClip.findByName(gltf.animations, 'Walk');
  const action = mixer.clipAction(clip);
  action.play();

  // Crossfade between clips
  const idleAction = mixer.clipAction(gltf.animations[0]);
  const runAction = mixer.clipAction(gltf.animations[1]);
  idleAction.play();
  idleAction.crossFadeTo(runAction, 0.5, true); // duration, warpBool
  runAction.play();
});

// In animate loop:
mixer?.update(delta);
```

### AnimationAction Control

```js
const action = mixer.clipAction(clip);
action.play();
action.pause();
action.stop();       // resets to beginning
action.reset();      // reset without stopping
action.enabled = true;
action.loop = THREE.LoopRepeat;   // LoopOnce | LoopRepeat | LoopPingPong
action.repetitions = Infinity;
action.clampWhenFinished = true;  // freeze on last frame (use with LoopOnce)
action.timeScale = 2.0;           // 2x speed, -1 = reverse
action.weight = 0.5;              // for blending multiple actions
action.fadeIn(0.3);
action.fadeOut(0.3);

// Events
mixer.addEventListener('finished', (e) => {
  console.log('Action finished:', e.action);
});
```

### Programmatic KeyframeTrack / AnimationClip

```js
// Animate position Y from 0 → 2 → 0 over 2 seconds
const times = [0, 1, 2];
const values = [0, 0, 0,  0, 2, 0,  0, 0, 0]; // xyz for each time

const track = new THREE.VectorKeyframeTrack(
  '.position',  // property path on target object
  times,
  values,
  THREE.InterpolateSmooth // or InterpolateLinear, InterpolateDiscrete
);

const clip = new THREE.AnimationClip('bounce', 2, [track]);
const mixer = new THREE.AnimationMixer(mesh);
mixer.clipAction(clip).play();
```

Available track types: `VectorKeyframeTrack`, `QuaternionKeyframeTrack`, `ColorKeyframeTrack`, `NumberKeyframeTrack`, `BooleanKeyframeTrack`, `StringKeyframeTrack`.

Property paths: `'.position'`, `'.rotation'`, `'.quaternion'`, `'.scale'`, `'.visible'`, `'.material.opacity'`, `'[0].position'` (indexed child).

---

### GSAP Integration

```js
import gsap from 'gsap';

// Animate Three.js object properties directly
gsap.to(mesh.position, { x: 5, y: 2, duration: 1.5, ease: 'power2.out' });
gsap.to(mesh.rotation, { y: Math.PI * 2, duration: 2, repeat: -1, ease: 'none' });
gsap.to(mesh.scale, { x: 2, y: 2, z: 2, duration: 0.5 });

// Animate material uniforms
gsap.to(shaderMat.uniforms.uOpacity, { value: 0, duration: 1 });

// Animate camera
gsap.to(camera.position, { z: 5, duration: 2, ease: 'power3.inOut' });
// Force lookAt during tween:
gsap.to(camera.position, {
  x: 3, y: 2, z: 5, duration: 2,
  onUpdate: () => camera.lookAt(targetVec),
});

// ScrollTrigger integration
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
gsap.to(mesh.rotation, {
  y: Math.PI * 2,
  scrollTrigger: { trigger: '#canvas', scrub: true, start: 'top top', end: '+=2000' }
});
```

---

### Morph Targets

```js
// Geometry must have morphAttributes
const geo = new THREE.SphereGeometry(1, 32, 16);
const positions = geo.attributes.position;

// Create morph: spiky sphere
const morphPositions = new Float32Array(positions.count * 3);
for (let i = 0; i < positions.count; i++) {
  const x = positions.getX(i), y = positions.getY(i), z = positions.getZ(i);
  const scale = 1 + Math.random() * 0.5;
  morphPositions[i * 3] = x * scale;
  morphPositions[i * 3 + 1] = y * scale;
  morphPositions[i * 3 + 2] = z * scale;
}
geo.morphAttributes.position = [
  new THREE.Float32BufferAttribute(morphPositions, 3)
];

const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ morphTargets: true }));
mesh.morphTargetInfluences[0] = 0; // 0–1 blend weight
scene.add(mesh);

// Animate morph:
gsap.to(mesh.morphTargetInfluences, { '0': 1, duration: 1.5, yoyo: true, repeat: -1 });
```

---

## 7. 3D Model Loading

### GLTFLoader (preferred format)

```js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { KTX2Loader } from 'three/addons/loaders/KTX2Loader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/draco/');  // path to DRACO decoder WASM files

const ktx2Loader = new KTX2Loader();
ktx2Loader.setTranscoderPath('/basis/');
ktx2Loader.detectSupport(renderer);

const loader = new GLTFLoader();
loader.setDRACOLoader(dracoLoader);
loader.setKTX2Loader(ktx2Loader);
loader.setMeshoptDecoder(MeshoptDecoder);

loader.load(
  '/models/scene.glb',
  (gltf) => {
    const model = gltf.scene;
    scene.add(model);

    // gltf.scenes — array of scenes
    // gltf.animations — AnimationClip[]
    // gltf.cameras — Camera[]
    // gltf.asset — metadata { version, generator }

    // Fix color space for all textures loaded from GLTF
    model.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
        if (node.material.map) {
          node.material.map.colorSpace = THREE.SRGBColorSpace;
        }
      }
    });
  },
  (xhr) => console.log(`${(xhr.loaded / xhr.total * 100).toFixed(1)}% loaded`),
  (error) => console.error(error)
);
```

---

### FBXLoader

```js
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';

const loader = new FBXLoader();
loader.load('/models/character.fbx', (fbx) => {
  fbx.scale.setScalar(0.01); // FBX is often in centimeters
  scene.add(fbx);

  if (fbx.animations.length) {
    const mixer = new THREE.AnimationMixer(fbx);
    mixer.clipAction(fbx.animations[0]).play();
  }
});
```

---

### OBJLoader + MTLLoader

```js
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';

const mtlLoader = new MTLLoader();
mtlLoader.load('/models/object.mtl', (materials) => {
  materials.preload();
  const objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load('/models/object.obj', (object) => {
    scene.add(object);
  });
});
```

---

### Traversing Scene Graphs

```js
// Find objects by name
const mesh = gltf.scene.getObjectByName('Cube');
const meshById = gltf.scene.getObjectById(42);

// Traverse all descendants
gltf.scene.traverse((node) => {
  if (node.isMesh) {
    console.log(node.name, node.geometry, node.material);
  }
  if (node.isLight) {
    node.intensity *= 0.1; // fix GLTF light intensity scaling
  }
});

// traverseVisible — skips invisible nodes
gltf.scene.traverseVisible((node) => {
  // ...
});

// Get world position of a nested node
const worldPos = new THREE.Vector3();
node.getWorldPosition(worldPos);

const worldQuat = new THREE.Quaternion();
node.getWorldQuaternion(worldQuat);
```

---

## 8. Controls & Interaction

### OrbitControls

```js
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;      // smooth momentum
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;
controls.enableRotate = true;
controls.autoRotate = false;
controls.autoRotateSpeed = 2.0;
controls.minDistance = 1;
controls.maxDistance = 100;
controls.maxPolarAngle = Math.PI / 2; // lock to above ground
controls.target.set(0, 1, 0);         // orbit center point

// Must call in animate loop when dampingFactor or autoRotate is enabled:
controls.update();
```

---

### PointerLockControls

FPS-style mouse look. Requires user click to activate pointer lock.

```js
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

const controls = new PointerLockControls(camera, document.body);
document.addEventListener('click', () => controls.lock());
controls.addEventListener('lock', () => console.log('locked'));
controls.addEventListener('unlock', () => console.log('unlocked'));
scene.add(controls.getObject()); // add camera rig to scene

// Movement in animate loop:
if (controls.isLocked) {
  const speed = 5 * delta;
  if (keys.forward) controls.moveForward(speed);
  if (keys.back) controls.moveForward(-speed);
  if (keys.left) controls.moveRight(-speed);
  if (keys.right) controls.moveRight(speed);
}
```

---

### Raycasting — Mouse Picking

```js
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const clickables = [mesh1, mesh2, mesh3]; // or scene.children

function onMouseMove(event) {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function onClick() {
  raycaster.setFromCamera(pointer, camera);
  const intersects = raycaster.intersectObjects(clickables, true); // recursive

  if (intersects.length > 0) {
    const hit = intersects[0]; // closest intersection
    console.log(hit.object);       // the mesh hit
    console.log(hit.point);        // Vector3 world position
    console.log(hit.face);         // triangle face
    console.log(hit.uv);           // UV coordinates at hit point
    console.log(hit.distance);     // distance from ray origin

    // Highlight
    hit.object.material.color.set(0xff0000);
  }
}

window.addEventListener('mousemove', onMouseMove);
window.addEventListener('click', onClick);

// For hover — check every frame:
function checkHover() {
  raycaster.setFromCamera(pointer, camera);
  const intersects = raycaster.intersectObjects(scene.children, true);
  // ...
}
```

---

### TransformControls

```js
import { TransformControls } from 'three/addons/controls/TransformControls.js';

const transformControls = new TransformControls(camera, renderer.domElement);
scene.add(transformControls);
transformControls.attach(selectedMesh);

transformControls.setMode('translate'); // 'translate' | 'rotate' | 'scale'
transformControls.setSpace('world');    // 'world' | 'local'
transformControls.setSize(1.2);        // gizmo size

// Disable orbit during transform drag
transformControls.addEventListener('dragging-changed', (e) => {
  orbitControls.enabled = !e.value;
});
```

---

## 9. Post-Processing

### EffectComposer Setup

```js
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera)); // always first

const bloom = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  1.5,   // strength
  0.4,   // radius
  0.85   // threshold (emit above this luminance)
);
composer.addPass(bloom);
composer.addPass(new OutputPass()); // tone mapping + color space conversion (always last)

// In animate loop — replace renderer.render():
composer.render();

// Resize
window.addEventListener('resize', () => {
  composer.setSize(window.innerWidth, window.innerHeight);
});
```

---

### Available Passes

```js
import { SSAOPass } from 'three/addons/postprocessing/SSAOPass.js';
import { OutlinePass } from 'three/addons/postprocessing/OutlinePass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { FXAAPass } from 'three/addons/postprocessing/FXAAPass.js';
import { FilmPass } from 'three/addons/postprocessing/FilmPass.js';
import { DotScreenPass } from 'three/addons/postprocessing/DotScreenPass.js';
import { BokehPass } from 'three/addons/postprocessing/BokehPass.js';
import { GlitchPass } from 'three/addons/postprocessing/GlitchPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { SSRPass } from 'three/addons/postprocessing/SSRPass.js';
import { SMAAPass } from 'three/addons/postprocessing/SMAAPass.js';
import { HalftonePass } from 'three/addons/postprocessing/HalftonePass.js';
import { AfterimagePass } from 'three/addons/postprocessing/AfterimagePass.js';

// SSAO — screen-space ambient occlusion
const ssao = new SSAOPass(scene, camera, window.innerWidth, window.innerHeight);
ssao.kernelRadius = 16;
ssao.minDistance = 0.005;
ssao.maxDistance = 0.1;

// Outline selected objects
const outline = new OutlinePass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  scene, camera
);
outline.selectedObjects = [mesh1, mesh2];
outline.edgeStrength = 3;
outline.edgeGlow = 0.7;
outline.edgeThickness = 1;
outline.visibleEdgeColor.set(0x00ffff);
outline.hiddenEdgeColor.set(0x333333);

// Custom shader pass
const customPass = new ShaderPass({
  uniforms: {
    tDiffuse: { value: null },  // previous pass's render target (required)
    uStrength: { value: 0.5 },
  },
  vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float uStrength;
    varying vec2 vUv;
    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
      gl_FragColor = vec4(mix(color.rgb, vec3(gray), uStrength), color.a);
    }
  `,
});

// FXAA anti-aliasing (use instead of renderer's antialias for composer)
const fxaa = new FXAAPass();
fxaa.material.uniforms['resolution'].value.set(
  1 / window.innerWidth, 1 / window.innerHeight
);
```

---

## 10. Performance

### Geometry & Material Reuse

```js
// Create once, share across many meshes
const sharedGeo = new THREE.SphereGeometry(1, 16, 8);
const sharedMat = new THREE.MeshStandardMaterial({ color: 0xff6600 });

for (let i = 0; i < 1000; i++) {
  const mesh = new THREE.Mesh(sharedGeo, sharedMat); // no extra GPU memory
  mesh.position.set(Math.random() * 100, 0, Math.random() * 100);
  scene.add(mesh);
}
```

---

### Level of Detail (LOD)

```js
const lod = new THREE.LOD();
scene.add(lod);

// High detail within 5 units
lod.addLevel(new THREE.Mesh(new THREE.SphereGeometry(1, 64, 32), mat), 0);
// Medium detail 5–20 units
lod.addLevel(new THREE.Mesh(new THREE.SphereGeometry(1, 16, 8), mat), 5);
// Low detail beyond 20 units
lod.addLevel(new THREE.Mesh(new THREE.SphereGeometry(1, 4, 2), mat), 20);
// Nothing beyond 50 units
lod.addLevel(new THREE.Object3D(), 50);

// LOD auto-updates based on camera distance — no action needed in loop
```

---

### Frustum Culling

Three.js enables frustum culling by default (`mesh.frustumCulled = true`). For custom geometries without bounding volumes:

```js
geometry.computeBoundingBox();
geometry.computeBoundingSphere(); // required for frustum culling to work
mesh.frustumCulled = true;

// Disable for UI elements or objects that should always render
mesh.frustumCulled = false;
```

---

### Dispose Pattern — Preventing Memory Leaks

Always dispose when removing objects, especially in SPAs or when switching scenes.

```js
function disposeMesh(mesh) {
  mesh.geometry.dispose();

  if (Array.isArray(mesh.material)) {
    mesh.material.forEach(disposeMaterial);
  } else {
    disposeMaterial(mesh.material);
  }
}

function disposeMaterial(material) {
  // Dispose all texture maps
  const maps = [
    'map', 'normalMap', 'roughnessMap', 'metalnessMap',
    'aoMap', 'emissiveMap', 'alphaMap', 'bumpMap',
    'displacementMap', 'envMap', 'lightMap',
  ];
  maps.forEach((key) => {
    if (material[key]) material[key].dispose();
  });
  material.dispose();
}

function disposeScene(scene) {
  scene.traverse((obj) => {
    if (obj.isMesh) disposeMesh(obj);
  });
  renderer.renderLists.dispose();
}

// Remove from scene + dispose:
scene.remove(mesh);
disposeMesh(mesh);

// Render targets
renderTarget.dispose();

// Dispose renderer itself (when unmounting component):
renderer.dispose();
renderer.forceContextLoss();
```

---

### Stats.js Profiling

```js
import Stats from 'three/addons/libs/stats.module.js';

const stats = new Stats();
stats.showPanel(0); // 0: FPS, 1: MS per frame, 2: MB memory
document.body.appendChild(stats.dom);

function animate() {
  stats.begin();
  // ... render
  renderer.render(scene, camera);
  stats.end();
}
renderer.setAnimationLoop(animate);
```

---

### Additional Performance Tips

```js
// Merge static geometries into one draw call
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
const merged = mergeGeometries([geo1, geo2, geo3]);

// Avoid per-frame allocations — reuse vectors/colors
const _v3 = new THREE.Vector3();
function tick() {
  _v3.copy(mesh.position).add(offset); // reuse, don't `new THREE.Vector3()`
}

// Use BufferAttribute with DynamicDrawUsage for frequently-updated geometry
const pos = new THREE.Float32BufferAttribute(data, 3);
pos.usage = THREE.DynamicDrawUsage;
geometry.setAttribute('position', pos);
// After updating data:
geometry.attributes.position.needsUpdate = true;

// Texture atlas — pack multiple textures into one to reduce draw calls
// Use UV offsets per material instead of separate textures

// renderer.info — check draw calls, triangles, textures
console.log(renderer.info.render.calls);      // draw calls per frame
console.log(renderer.info.render.triangles);  // total triangles
console.log(renderer.info.memory.geometries); // GPU geometries
console.log(renderer.info.memory.textures);   // GPU textures
renderer.info.autoReset = true; // reset counts each frame (default)
```

---

## 11. Advanced

### Custom GLSL Shaders with Uniforms

Full vertex + fragment shader with time, mouse, and texture uniforms:

```js
const shaderMat = new THREE.ShaderMaterial({
  uniforms: {
    uTime:       { value: 0 },
    uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    uMouse:      { value: new THREE.Vector2(0.5, 0.5) },
    uTexture:    { value: new THREE.TextureLoader().load('/tex.jpg') },
    uColor1:     { value: new THREE.Color(0x0055ff) },
    uColor2:     { value: new THREE.Color(0xff3300) },
  },
  vertexShader: /* glsl */`
    uniform float uTime;
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      vPosition = position;

      vec3 pos = position;
      float wave = sin(pos.x * 3.0 + uTime * 2.0) * 0.1;
      pos.y += wave;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: /* glsl */`
    uniform float uTime;
    uniform vec2 uResolution;
    uniform vec2 uMouse;
    uniform sampler2D uTexture;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    varying vec2 vUv;
    varying vec3 vNormal;

    void main() {
      // Fresnel rim
      vec3 viewDir = normalize(cameraPosition - vPosition);
      float fresnel = pow(1.0 - dot(vNormal, viewDir), 3.0);

      vec4 texColor = texture2D(uTexture, vUv);
      vec3 color = mix(uColor1, uColor2, vUv.y);
      color = mix(color, vec3(1.0), fresnel * 0.5);

      gl_FragColor = vec4(color * texColor.rgb, 1.0);
    }
  `,
  side: THREE.DoubleSide,
});

// In animate loop:
shaderMat.uniforms.uTime.value = elapsed;
shaderMat.uniforms.uMouse.value.set(mouseX, mouseY);
```

---

### Particles / Points System

```js
const COUNT = 50000;
const positions = new Float32Array(COUNT * 3);
const colors = new Float32Array(COUNT * 3);
const sizes = new Float32Array(COUNT);

const color = new THREE.Color();
for (let i = 0; i < COUNT; i++) {
  positions[i * 3]     = (Math.random() - 0.5) * 100;
  positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
  positions[i * 3 + 2] = (Math.random() - 0.5) * 100;

  color.setHSL(Math.random(), 0.8, 0.6);
  colors[i * 3] = color.r;
  colors[i * 3 + 1] = color.g;
  colors[i * 3 + 2] = color.b;

  sizes[i] = Math.random() * 3 + 1;
}

const geo = new THREE.BufferGeometry();
geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

// Option A — PointsMaterial (simple, built-in)
const mat = new THREE.PointsMaterial({
  size: 0.1,
  sizeAttenuation: true,   // shrink with distance
  vertexColors: true,
  map: new THREE.TextureLoader().load('/textures/particle.png'),
  transparent: true,
  alphaTest: 0.001,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
});

// Option B — ShaderMaterial (full control, per-particle size via attribute)
const shaderMat = new THREE.ShaderMaterial({
  uniforms: { uTime: { value: 0 }, uPixelRatio: { value: renderer.getPixelRatio() } },
  vertexShader: /* glsl */`
    attribute float size;
    uniform float uPixelRatio;
    varying vec3 vColor;
    void main() {
      vColor = color;
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = size * uPixelRatio * (300.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  fragmentShader: /* glsl */`
    varying vec3 vColor;
    void main() {
      float dist = length(gl_PointCoord - vec2(0.5));
      if (dist > 0.5) discard;
      float alpha = 1.0 - smoothstep(0.4, 0.5, dist);
      gl_FragColor = vec4(vColor, alpha);
    }
  `,
  vertexColors: true,
  transparent: true,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
});

const particles = new THREE.Points(geo, mat);
scene.add(particles);
```

---

### Line Geometries

```js
// Basic Line (indexed, connected path)
const lineMat = new THREE.LineBasicMaterial({ color: 0x00ffff, linewidth: 1 });
const lineGeo = new THREE.BufferGeometry().setFromPoints([
  new THREE.Vector3(-1, 0, 0),
  new THREE.Vector3(0, 1, 0),
  new THREE.Vector3(1, 0, 0),
]);
const line = new THREE.Line(lineGeo, lineMat);
scene.add(line);

// LineSegments (unconnected pairs)
const segGeo = new THREE.BufferGeometry().setFromPoints([
  new THREE.Vector3(0, 0, 0), new THREE.Vector3(1, 0, 0), // segment 1
  new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 1), // segment 2
]);
const segments = new THREE.LineSegments(segGeo, lineMat);
scene.add(segments);

// Dashed line
const dashedMat = new THREE.LineDashedMaterial({ color: 0xffffff, dashSize: 0.2, gapSize: 0.1 });
const dashedLine = new THREE.Line(lineGeo, dashedMat);
dashedLine.computeLineDistances(); // required for dashed lines
scene.add(dashedLine);

// Fat lines (pixel-width, addon)
import { Line2 } from 'three/addons/lines/Line2.js';
import { LineGeometry } from 'three/addons/lines/LineGeometry.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';

const fatGeo = new LineGeometry();
fatGeo.setPositions([-1, 0, 0,  0, 1, 0,  1, 0, 0]);

const fatMat = new LineMaterial({
  color: 0xff6600,
  linewidth: 5,       // pixels
  resolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
  dashed: false,
});

const fatLine = new Line2(fatGeo, fatMat);
fatLine.computeLineDistances();
scene.add(fatLine);
```

---

### CSS3DRenderer

Embed HTML DOM elements into a 3D scene.

```js
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';

// Setup CSS3D renderer (separate canvas layer, same camera)
const cssRenderer = new CSS3DRenderer();
cssRenderer.setSize(window.innerWidth, window.innerHeight);
cssRenderer.domElement.style.position = 'absolute';
cssRenderer.domElement.style.top = '0';
document.body.appendChild(cssRenderer.domElement);

// Create a DOM element to embed
const element = document.createElement('div');
element.innerHTML = '<h1 style="color:white">Hello 3D Web</h1>';
element.style.width = '300px';
element.style.background = 'rgba(0,0,0,0.5)';

const cssObject = new CSS3DObject(element);
cssObject.position.set(0, 0, -200);
cssObject.rotation.y = Math.PI / 4;
scene.add(cssObject);

// Render both in animate loop
function animate() {
  renderer.render(scene, camera);     // WebGL pass
  cssRenderer.render(scene, camera);  // CSS3D pass (same camera)
}
```

---

### WebXR — VR/AR

```js
import { VRButton } from 'three/addons/webxr/VRButton.js';
import { ARButton } from 'three/addons/webxr/ARButton.js';
import { XRControllerModelFactory } from 'three/addons/webxr/XRControllerModelFactory.js';

// Enable XR on renderer
renderer.xr.enabled = true;

// Add Enter VR/AR button
document.body.appendChild(VRButton.createButton(renderer));
// or: document.body.appendChild(ARButton.createButton(renderer));

// XR animation loop — called by renderer at display refresh rate
renderer.setAnimationLoop((timestamp, frame) => {
  renderer.render(scene, camera);
});

// Controllers
const controllerModelFactory = new XRControllerModelFactory();
const controller1 = renderer.xr.getController(0);
scene.add(controller1);

const controllerGrip1 = renderer.xr.getControllerGrip(0);
controllerGrip1.add(controllerModelFactory.createControllerModel(controllerGrip1));
scene.add(controllerGrip1);

controller1.addEventListener('selectstart', () => { /* trigger pressed */ });
controller1.addEventListener('selectend', () => { /* trigger released */ });

// XR camera rig
const xrCamera = renderer.xr.getCamera();
// xrCamera is auto-updated — don't manually set position during XR session

// AR hit testing (requires 'hit-test' feature)
const arButton = ARButton.createButton(renderer, {
  requiredFeatures: ['hit-test'],
  optionalFeatures: ['dom-overlay'],
});
```

---

### Fog

```js
// Linear fog: visible from `near` to `far`
scene.fog = new THREE.Fog(0xcccccc, 10, 100); // color, near, far

// Exponential fog: density-based, more natural
scene.fog = new THREE.FogExp2(0x1a1a2e, 0.02); // color, density

// Materials respect fog by default; disable per material:
material.fog = false;
```

---

### Clock & Timer

```js
const clock = new THREE.Clock();
clock.start();

const delta = clock.getDelta();        // seconds since last getDelta()
const elapsed = clock.getElapsedTime(); // total seconds since start
clock.stop();
clock.start();

// Timer (r152+) — more precise, doesn't drift
const timer = new THREE.Timer();
timer.update(); // call each frame
const dt = timer.getDelta();
const t = timer.getElapsedTime();
```

---

### Useful Math Utilities

```js
const { MathUtils } = THREE;

MathUtils.degToRad(90)          // 1.5707...
MathUtils.radToDeg(Math.PI)     // 180
MathUtils.clamp(value, 0, 1)
MathUtils.lerp(0, 10, 0.5)      // 5
MathUtils.smoothstep(0, 1, t)
MathUtils.mapLinear(x, a1, a2, b1, b2)
MathUtils.randFloat(0, 1)
MathUtils.randInt(0, 10)
MathUtils.generateUUID()
MathUtils.isPowerOfTwo(256)     // true
MathUtils.ceilPowerOfTwo(300)   // 512
MathUtils.euclideanModulo(-1, 4) // 3 (always positive)
MathUtils.damp(current, target, lambda, dt) // exponential smoothing

// Vector operations
const v = new THREE.Vector3(1, 2, 3);
v.normalize();
v.multiplyScalar(2);
v.add(new THREE.Vector3(0, 1, 0));
v.sub(other);
v.cross(other);
v.dot(other);         // scalar
v.distanceTo(other);  // scalar
v.lerp(other, 0.5);
v.applyMatrix4(matrix4);
v.applyQuaternion(quat);
v.project(camera);    // to NDC
v.unproject(camera);  // from NDC to world

// Quaternion
const q = new THREE.Quaternion();
q.setFromEuler(new THREE.Euler(0, Math.PI, 0));
q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI);
q.slerp(targetQ, t);

// Box3 — bounding box
const box = new THREE.Box3().setFromObject(mesh);
const center = box.getCenter(new THREE.Vector3());
const size = box.getSize(new THREE.Vector3());
```

---

### Scene Helpers (Debugging)

```js
scene.add(new THREE.AxesHelper(5));           // RGB = XYZ axes
scene.add(new THREE.GridHelper(10, 10));       // ground grid
scene.add(new THREE.BoxHelper(mesh, 0xffff00)); // bounding box around object
scene.add(new THREE.Box3Helper(box3, 0xff0000));
scene.add(new THREE.ArrowHelper(direction, origin, length, 0xff0000));
scene.add(new THREE.CameraHelper(shadowCamera)); // shadow frustum
scene.add(new THREE.DirectionalLightHelper(dirLight, 2));
scene.add(new THREE.PointLightHelper(pointLight, 0.5));
scene.add(new THREE.SpotLightHelper(spotLight));
scene.add(new THREE.HemisphereLightHelper(hemiLight, 2));
scene.add(new THREE.SkeletonHelper(skinnedMesh));
```

---

### Installation & Imports

```bash
npm install three
```

```js
// Full import
import * as THREE from 'three';

// Named imports (tree-shakeable)
import { Scene, PerspectiveCamera, WebGLRenderer, Mesh } from 'three';

// Addons — always import from 'three/addons/'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';

// CDN with import map
// <script type="importmap">{ "imports": { "three": "https://cdn.jsdelivr.net/npm/three@0.184/build/three.module.js", "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.184/examples/jsm/" }}</script>
```

---

*Three.js r184 — April 2026 | Reference compiled from threejs.org/docs, threejs.org/manual, github.com/mrdoob/three.js*

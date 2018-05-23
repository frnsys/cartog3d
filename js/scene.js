import OrbitControls from './orbit.js';

const VIEW_ANGLE = 45;
const NEAR = 0.1;
const FAR = 10000;


class Scene {
  constructor(opts) {
    opts.enableControls = opts.enableControls == undefined ? true : opts.enableControls;
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({antialias: false});
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0xeeeeee, 1);
    document.body.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(
      VIEW_ANGLE,
      window.innerWidth / window.innerHeight,
      NEAR,
      FAR);
    this.camera.position.z = 600;

    if (opts.enableControls) {
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableRotate = true;
      // for orthographic
      // this.controls.maxZoom = 0.4;
      // this.controls.minZoom = 0.02;
      // for perspective
      this.controls.minDistance = 400;
      this.controls.maxDistance = 1200;
      console.log(this.controls);
    }

    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth/window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }, false);
  }

  add(mesh) {
    this.scene.add(mesh);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}

export default Scene;

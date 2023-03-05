<template>
  <div class="title">
    <div class="subverse">FULLSTACK DEVELOPER PORTFOLIO</div>
    <br />
    <div class="verse">
      <div v-for="(verse, index) in verses" :key="index">
        <transition-fade>
          <div v-if="verse.cap.showOn.includes(isShow)" class="wide">
            <span style="color: #ffd700; filter: invert(100%)">{{ verse.cap.quote }}</span>
            <span :class="!verse.sub.showOn.includes(isShow) ? 'hide' : ''">{{ verse.sub.quote }}</span>
          </div>
        </transition-fade>
      </div>
    </div>
    <div @click="seemore()" class="more">
      <div class="chevron">^</div>
      <div>See More</div>
    </div>
  </div>
  <canvas id="canvas"> </canvas>
  <!-- <div class="gradbg">
    <div class="inverted">
      <div class="reverted">
        <div class="title">
          <div class="subverse">FULLSTACK DEVELOPER PORTFOLIO</div>
          <br />
          <div class="verse">
            <div v-for="(verse, index) in verses" :key="index">
              <transition-fade>
                <div v-if="verse.cap.showOn.includes(isShow)" class="wide">
                  <span style="color: #ffd700; filter: invert(100%)">{{ verse.cap.quote }}</span>
                  <span :class="!verse.sub.showOn.includes(isShow) ? 'hide' : ''">{{ verse.sub.quote }}</span>
                </div>
              </transition-fade>
            </div>
          </div>
          <div @click="seemore()" class="more">
            <div class="chevron">^</div>
            <div>See More</div>
          </div>
        </div>
      </div>
    </div>
  </div> -->

  <!-- <audio id="bgm" controls autoplay muted loop>
    <source src="@/assets/bgm.mp3" type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio> -->
</template>

<script>
  import { TransitionFade } from "@morev/vue-transitions";
  import { useGlobalsStore } from "@/stores/globals";
  import * as THREE from "three";
  import { OrbitControls } from "three/addons/controls/OrbitControls.js";
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
  export default {
    setup() {
      const globals = useGlobalsStore();

      return {
        // you can return the whole store instance to use it in the template
        globals,
      };
    },
    components: {
      TransitionFade,
    },
    props: {
      tryThis: {
        type: String,
        default: "this is the defaul val",
      },
    },
    data() {
      return {
        wheel: 0,
        cursorX: 0,
        cursorY: 0,
        show: 0,
        verses: [
          {
            cap: {
              quote: "craft",
              showOn: [1, 2],
            },
            sub: {
              quote: " solutions from code",
              showOn: [2],
            },
          },
          {
            cap: {
              quote: "transform",
              showOn: [4, 5],
            },
            sub: {
              quote: " vision into reality",
              showOn: [5],
            },
          },
          {
            cap: {
              quote: "enhance",
              showOn: [7, 8],
            },
            sub: {
              quote: " businesses digitally",
              showOn: [8],
            },
          },
        ],
      };
    },
    computed: {
      isShow() {
        return this.show;
      },
    },
    methods: {
      handleScroll(event) {
        this.wheel = event.deltaY;
      },
      handleMouseMove(event) {
        this.cursorX = event.clientX;
        this.cursorY = event.clientY;
      },
      seemore(e) {
        this.globals.setShow(!this.globals.isShow);
      },
      threeInit() {
        // Create renderer.
        const canvas = document.querySelector("#canvas");
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Create scene.
        const scene = new THREE.Scene();
        // scene.background = new THREE.Color(0x000000);

        // Create camera.
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
        camera.position.z = -3;
        scene.add(camera);

        // Add mouse controls for camera.
        const controls = new OrbitControls(camera, canvas);
        controls.enableDamping = false;
        controls.enableZoom = true;
        controls.enableRotate = false;
        controls.enablePan = false;
        // controls.autoRotate = false;

        //--
        // Your code here!
        // Create an AmbientLight
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.1); // white light with 50% intensity

        // Add the light to the scene
        scene.add(ambientLight);

        let orangeLight = new THREE.PointLight(0xcc6600, 50, 450, 1.7);
        orangeLight.position.set(200, 300, 100);
        scene.add(orangeLight);

        let redLight = new THREE.PointLight(0xd8547e, 50, 450, 1.7);
        redLight.position.set(100, 300, 100);
        scene.add(redLight);

        let blueLight = new THREE.PointLight(0x3677ac, 50, 450, 1.7);
        blueLight.position.set(300, 300, 200);
        scene.add(blueLight);

        //--
        const loader = new GLTFLoader();
        let model; // Declare the variable in the outer scope

        loader.load(
          "./blackhole.glb",
          function (gltf) {
            model = gltf.scene;
            model.rotation.x = -0.2;
            model.position.y = 0;
            model.position.z = 0.2;
            model.rotation.z = 0.5;
            model.rotation.x = 2.5;
            // model.rotation.y = -1.5;

            // Find the first animation clip in the loaded GLB file
            const animation = gltf.animations[0];

            const clock = new THREE.Clock();
            // Create an AnimationMixer and play the animation
            const mixer = new THREE.AnimationMixer(model);
            const action = mixer.clipAction(animation);
            action.play();

            // Add the loaded model to the scene
            scene.add(model);

            // Animate the scene on each frame
            function animate() {
              requestAnimationFrame(animate);
              mixer.update(clock.getDelta() / 5);
              renderer.render(scene, camera);
            }

            animate();
          },
          undefined,
          function (error) {
            console.error(error);
          }
        );

        // const texloader = new THREE.CubeTextureLoader();
        // const texture = loader.load(["./Spacebox_right.png", "./Spacebox_left.png", "./Spacebox_top.png", "./Spacebox_bottom.png", "./Spacebox_front.png", "./Spacebox_back.png"]);
        // scene.background = texture;

        // top: posY;
        // bot: negY;
        // left: negX;
        // front: posZ;
        // right: posX;
        // back: negZ;

        // "px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png";

        const ft = new THREE.TextureLoader().load("./Spacebox_front.png");
        const bk = new THREE.TextureLoader().load("./Spacebox_back.png");
        const up = new THREE.TextureLoader().load("./Spacebox_top.png");
        const dn = new THREE.TextureLoader().load("./Spacebox_bottom.png");
        const rt = new THREE.TextureLoader().load("./Spacebox_right.png");
        const lf = new THREE.TextureLoader().load("./Spacebox_left.png");

        const materials = [
          new THREE.MeshBasicMaterial({ map: rt, side: THREE.BackSide }),
          new THREE.MeshBasicMaterial({ map: lf, side: THREE.BackSide }),
          new THREE.MeshBasicMaterial({ map: up, side: THREE.BackSide }),
          new THREE.MeshBasicMaterial({ map: dn, side: THREE.BackSide }),
          new THREE.MeshBasicMaterial({ map: ft, side: THREE.BackSide }),
          new THREE.MeshBasicMaterial({ map: bk, side: THREE.BackSide }),
        ];

        const skyboxGeo = new THREE.BoxGeometry(2000, 2000, 2000);

        const skybox = new THREE.Mesh(skyboxGeo, materials);
        skybox.position.z = 0;
        skybox.position.x = 0;
        skybox.position.y = 0;

        scene.add(skybox);

        // const group = new THREE.Group();
        // scene.add(group);

        // const boxGeo = new THREE.BoxGeometry(1, 1, 1);
        // const boxMat = new THREE.MeshBasicMaterial({ color: 0xd4605a });
        // const boxMesh = new THREE.Mesh(boxGeo, boxMat);
        // boxMesh.position.x = 1;
        // group.add(boxMesh);

        // const sphereGeo = new THREE.SphereGeometry(0.5, 8, 8);
        // const sphereMat = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        // const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
        // sphereMesh.position.x = -1;
        // Animation loop.
        const tick = () => {
          // model.rotation.x += 0.5;

          // Rotate the model
          const targetRotationX = (this.cursorY / 100000) * -1;
          const targetRotationY = (this.cursorX - window.innerHeight / 2) / (window.innerHeight / 2) / 20 + 275;
          const step = 0.01;
          skybox.rotation.x += 0.05 * step;

          skybox.rotation.y += 0.05 * step;

          // Gradually update the rotation values
          if (model) {
            if (!this.cursorX || !this.cursorY) {
              model.rotation.x = 0.1;
              model.rotation.z = -0.3;
            }

            // if (model.rotation.x < targetRotationX) {
            //   model.rotation.x += step;
            // } else if (model.rotation.x > targetRotationX) {
            //   model.rotation.x -= step;
            // }

            // model.rotation.y = targetRotationY;
            model.rotation.x = targetRotationX;
            model.rotation.y = 0.08;
            model.rotation.z = targetRotationY + 1.3;

            // camera.position.z = this.wheel / 500;
          }

          controls.update();

          renderer.render(scene, camera);

          requestAnimationFrame(tick);
        };
        tick();

        // Window resize listener.
        window.addEventListener("resize", () => {
          const w = window.innerWidth;
          const h = window.innerHeight;
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        });
      },
    },
    mounted() {
      var bgm = document.getElementById("bgm");
      if (bgm) {
        bgm.muted = false;
        bgm.volume = 0.5;
      }
      window.addEventListener("mousemove", this.handleMouseMove);
      document.addEventListener("wheel", this.handleScroll);
      this.threeInit();
      setTimeout(() => {
        this.show = 1;
        setInterval(() => {
          if (this.isShow > 0) {
            this.show++;
          }

          if (this.isShow > 9) {
            this.show = 1;
          }
        }, 1500);
      }, 1500);
    },
  };
</script>

<style lang="scss">
  @import "landing";
</style>

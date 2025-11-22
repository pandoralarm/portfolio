<template>
  <div class="content-container" :class="[isSee ? '' : 'hide']"  >
    <div class="top-nav" :class="[isSee ? '' : 'pop']">
      <div class="nav-item" :class="windowPos >= 0 && windowPos < 400 ? 'active' : ''" @click="scrollToId('profile')">PROFILE </div>
      <div class="nav-item"  :class=" windowPos > 400 && windowPos < 800? 'active' : ''"  @click="scrollToId('works')">WORKS </div>
      <div class="nav-item"  :class=" windowPos > 800 ? 'active' : ''"  @click="scrollToId('contacts')">CONTACT </div>
      <div class="nav-item"  style="position: absolute; right: 0;"  @click="close()">[x]</div>
    </div>

    <div id="profile" class="profile" :class="[isSee ? '' : 'pop']"> 
      <div class="left-content">
        <p>
          <span style="font-size: 3em">Hi, I'm Alan.</span> <br />
          An aspiring Full-Stack Developer, currently I would consider myself Front-End heavy, with general experience in the current Back-End techs. Committed to continuous learning and growth through challenging projects. Quick learner with strong problem-solving abilities and a team-oriented
          approach. Seeking opportunities to further develop my skills and make an impact in the field.
          <br />
          <a href="/Alan-CV-032023.pdf"> <i class="devicon-sqlite-plain"></i> Get my latest CV here! </a>
        </p>
        <div> 
          <br />
          Tech stacks I'm utilizing!<br />
          <div class="tech-stacks">
            <i class="devicon-html5-plain-wordmark colored"></i>
            <i class="devicon-css3-plain-wordmark colored"></i> 
            <i class="devicon-sass-original colored"></i>
          
            <i class="devicon-javascript-plain colored"></i>
            
            <i class="devicon-typescript-plain colored"></i>
            <i class="devicon-jquery-plain colored"></i>
          
            <i class="devicon-nodejs-plain colored"></i>
            <i class="devicon-webpack-plain colored"></i>
          
          
          
            <i class="devicon-threejs-original-wordmark colored"></i>
          
            <i class="devicon-vuejs-plain-wordmark colored"></i>
            <i class="devicon-nuxtjs-plain colored"></i> 

            <i class="devicon-react-original-wordmark colored"></i>
 
            <i class="devicon-sequelize-plain colored"></i>
          
            <i class="devicon-express-original colored"></i>
          
            <i class="devicon-mysql-plain-wordmark colored"></i>
            <i class="devicon-mongodb-plain-wordmark colored"></i>
          
          
            <i class="devicon-php-plain colored"></i>
          
            <i class="devicon-laravel-plain-wordmark colored"></i>
            <i class="devicon-codeigniter-plain-wordmark colored"></i>
          
          
            <i class="devicon-git-plain colored"></i>
            <i class="devicon-jira-plain colored"></i>
          
          
          
          </div>
        </div>
      </div>
      <div class="right-content pict">
        <img class="" src="@/assets/ports/alan.jpg" />
      </div>
    </div>

    <div id="contacts" class="inner-container " :class="[isSee ? '' : 'pop']">
      <div class="shape-blob"></div>
      <div class="shape-blob one"></div>
      <div class="shape-blob two"></div>
      <span class="contact-title">CONTACT ME</span>
      <form action="mailto:08889237023a@gmail.com" method="get" enctype="text/plain">
        <input type="text" name="subject" placeholder="Your Name" />
        <input  type="email" name="email" placeholder="Your Email" />
        <textarea> Say Hi! </textarea>
        <button  type="submit" >SEND EMAIL</button>
      </form>

      <br />
      <div class="footer">
        
        <i class="devicon-linkedin-plain colored"></i>
          
        <i class="devicon-github-original colored"></i>
      </div>
    </div>
  </div>
</template>

<script>
  import { useGlobalsStore } from "@/stores/globals";
  import { TransitionFade } from "@morev/vue-transitions";
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
    props: {},
    data() {
      return {
        scrollPos: 0,
        see: false,
      };
    },
    watch: {
      "globals.showContent": function (newValue, oldValue) {
        // Do something when `showContent` changes
        console.log("showContent changed from", oldValue, "to", newValue);

        if (newValue) {
          // Content is now visible, do something
        } else {
          // Content is now hidden, do something else
        }
      },
    },
    computed: {
      isSee() {
        return this.globals.isShow;
      },
      windowPos() { 
        return this.scrollPos
      }
    },
  methods: {
    
      scrollToId(id) {  
        document.getElementById(id).scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
        setTimeout(() => {
          
        this.scrollPos = window.scrollY
        }, 500);
      },  
      more() {
        console.log(this.globals.isShow);
      },
      close() {
        window.scrollTo(0, 0);
        this.globals.setShow(!this.globals.isShow);
        setTimeout(() => {
          this.globals.setLoaded(!this.globals.isLoaded);
        }, 250);
      },
    },
    mounted() {
      // console.log(this.globals.isShow);

      document.addEventListener('wheel', () => {
        this.scrollPos = window.scrollY
      })
    },
  };
</script>

<style lang="scss" scoped>
  @use "content";
</style>

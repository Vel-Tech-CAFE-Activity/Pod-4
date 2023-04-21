<!-- <template>
  <div>
      <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item"><router-link to="/" class="nav-link">loginIn</router-link></li>
            <li class="nav-item"><router-link to="/loadImage" class="nav-link">loadImage</router-link></li>
            <li class="nav-item"><router-link to="/lazyLoad" class="nav-link">lazyLoad</router-link></li>
          </ul>
        </div>
      </nav>
      <router-view class="view"></router-view>
      <lazyLoad />
      <loadImage />
    </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style scoped>
</style> -->


<!-- 2nd trail -->
<!-- <template> 
  <lazyLoad />
  <button @click="loginIn">Load Ad</button>
    <div v-if="showComponent">
      <loginIn />
    </div>
    
</template>

<script>
  import loginIn from './components/loginIn.vue'
  import lazyLoad from './components/lazyLoad.vue'


  export default {
    name: 'App',
    components: {
      loginIn,
      lazyLoad
    },
    data() {
      return {
        showComponent: false,
      };
    },
    methods: {
        loginIn() {
          this.showComponent = true;
        },
    },
  }
</script>

<style>
#app {
font-family: Arial, Helvetica, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 30px;
}
button{
  padding: 10px;
  border: none;
}
</style> -->


<template>
  <lazyLoad />
</template>

<script>
  import lazyLoad from './components/lazyLoad.vue';

  export default {
    name: 'App',
    components: {
    lazyLoad
}
  }
</script>
<!-- BannerAd.vue -->
<!-- <template>
    <div class="banner-ad">
        <img :src="imageSrc" alt="random image">
    </div>
  </template>
  
<script>
export default {
    name:"BannerAd",
  data() {
    return {
      imageIds: [],
      currentIndex: 0
    }
  },
  computed: {
    imageSrc() {
      return `https://picsum.photos/id/${this.imageIds[this.currentIndex]}/100/100`
    }
  },
  mounted() {
    for (let i = 0; i <= 100; i++) {
    this.imageIds.push(i);
    }
    setInterval(() => {
      const randomIndex = Math.floor(Math.random() * this.imageIds.length)
      
      this.currentIndex = randomIndex
    }, 5000)
  }
}
</script>
  
  <style scoped>
  .banner-ad {
    padding: 10px;
    margin-bottom: 10px;
  }
  </style> -->
  <!-- 2trail -->
<!-- 
   <template>
    <div class="banner-ad">
        <img :src="imageSrc" alt="random image">
    </div>
  </template>
  <script>
  import Vue from 'vue';
  
  export default {
    data() {
      return {
        imageIds: [1, 2, 3, 4],
        imageUrls: [],
      };
    },
    mounted() {
      for (let i = 0; i < this.imageIds.length; i++) {
        const imageUrl = `https://picsum.photos/id/${this.imageIds[i]}/100/100`;
        this.imageUrls.push(imageUrl);
      }
      setInterval(() => {
        for (let i = 0; i < this.imageIds.length; i++) {
          const imageUrl = `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/100/100`;
          Vue.set(this.imageUrls, i, imageUrl);
        }
      }, 5000);
    },
  };
  </script>
   -->

   <!-- 3trail -->

   <template>
    <div>
      <img id="images" v-for="id in imageIds" :key="id" :src="`https://picsum.photos/id/${id}/100/100`" />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        imageIds: [],
      };
    },
    mounted() {
      this.generateImageIds();
      setInterval(() => {
        this.generateImageIds();
      }, 5000);
    },
    methods: {
      generateImageIds() {
        const ids = [];
        while (ids.length < 4) {
          const id = Math.floor(Math.random() * 1000);
          if (!ids.includes(id)) {
            ids.push(id);
          }
        }
        this.imageIds = ids;
      },
    },
  };
  </script>

<style scoped>
    #images{
        margin-right:10px;
    }
</style>
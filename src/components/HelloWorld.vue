<template>
  <div>
    <!-- <h3>Vue  change image URL with button click</h3><br><br><br> -->
    <!-- <button @click="showPreviousImage" style="margin-right: 20px;">Previous</button>
    <button @click="showNextImage">Next</button><br><br>
    <div class="np-ht">
      <img :src="imageUrl" />
    </div><br><br><br> -->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      imageId: 1,
    };
  },
  computed: {
    imageUrl() {
      return `https://picsum.photos/id/${this.imageId}/500/400`;
    },
  },
  methods: {
    showPreviousImage() {
      if (this.imageId > 1)
        this.imageId--;
    },
    showNextImage() {
      this.imageId++;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
button {
  border: 1px solid #000;
  min-width: 120px;
  margin: 10px;
  padding: 6px;
}
</style>
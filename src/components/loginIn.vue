<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <div class="container">
          <div class="row" style="">
            <div class="row" style="margin-bottom: 40px">
              <img :src="imageUrl1" />
            </div>
            <div class="row"><img :src="imageUrl2" /></div>
          </div>
        </div>
      </div>
      <div class="col-8">
        <p></p>
      </div>
      <div class="col-2">
        <div class="container">
          <div class="row">
            <div class="row" style="margin-bottom: 40px">
              <img :src="imageUrl3" />
            </div>
            <div class="row"><img :src="imageUrl4" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
export default {
  name: "loadImage",
  data() {
    return {
      imageIds: [],
    };
  },
  computed: {
    imageUrl1() {
      return `https://picsum.photos/id/${this.imageIds[0]}/100/100`;
    },
    imageUrl2() {
      return `https://picsum.photos/id/${this.imageIds[1]}/100/100`;
    },
    imageUrl3() {
      return `https://picsum.photos/id/${this.imageIds[2]}/100/100`;
    },
    imageUrl4() {
      return `https://picsum.photos/id/${this.imageIds[3]}/100/100`;
    },
  },
  created() {
    this.imageIds = [
      Math.floor(Math.random() * 300) + 1,
      Math.floor(Math.random() * 300) + 1,
      Math.floor(Math.random() * 300) + 1,
      Math.floor(Math.random() * 300) + 1,
    ];
  },
};
</script>

<style scoped>
#para {
  text-align: justify;
}
</style>
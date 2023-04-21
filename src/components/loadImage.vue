<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <div class="container">
          <h3>Ad Content</h3>
          <div class="row" style="">
            <div class="row" style="margin-bottom: 40px">
              <img :src="imageUrl1" />
            </div>
            <div class="row"><img :src="imageUrl2" /></div>
          </div>
        </div>
      </div>
      <div class="col-8">
        <div class="container">
          <h1>The Content 1</h1>
          <p id="para">
            When I think about web performance, the first thing that comes to my
            mind is how images are generally the last elements that appear on a
            page. Today, images can be a major issue when it comes to
            performance, which is unfortunate since the speed a website loads
            has a direct impact on users successfully doing what they came to
            the page to do (think conversation rates). Very recently, Rahul
            Nanwani wrote up an extensive guide on lazy loading images. I'd like
            to cover the same topic, but from a different approach: using data
            attributes, Intersection Observer and custom directives in Vue.js.
            <br /><br /><b>Step 1: Create the ImageItem component in Vue</b
            ><br />
            Let's start by creating a component that will show an image (but
            with no lazy loading involved just yet). We'll call this file
            ImageItem.vue. In the component template, we'll use a figure tag
            that contains our image — the image tag itself will receive the src
            attribute that points to the source URL for the image file.
            <br /><br /><b
              >Step 2: Prevent the image from being loaded when the component is
              created</b
            ><br />
            It might sound a little funny that we want to prevent something from
            loading when we want to show it, but this is about loading it at the
            right time rather than blocking it indefinitely. To prevent the
            image from being loaded, we need to get rid of the src attribute
            from the img tag. But, we still need to store it somewhere so we can
            make use of it when we want it. A good place to keep that
            information is in a data- attribute. These allow us to store
            information on standard, semantic HTML elements. In fact, you may
            already be accustomed to using them as JavaScript selectors. With
            that, our image will not load because there is no source URL to pull
            from. That's a good start, but still not quite what we want. We want
            to load our image under specific conditions. We can request the
            image to load by replacing the src attribute with the image source
            URL kept in our data-url attribute. That’s the easy part. The real
            challenge is figuring out when to replace it with the actual source.
            Our goal is to pin the load to the user's screen location. So, when
            the user scrolls to a point where the image comes into view, that' s
            where it loads.
            <br />How can we detect if the image is in view or not? That's our
            next step. <b></b>
          </p>
        </div>
      </div>
      <div class="col-2">
        <div class="container">
          <h3>Ad Content</h3>
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
      Math.floor(Math.random() * 100) + 1,
      Math.floor(Math.random() * 100) + 1,
      Math.floor(Math.random() * 100) + 1,
      Math.floor(Math.random() * 100) + 1,
    ];
  },
};
</script>

<style scoped>
#para {
  text-align: justify;
}
</style>


<!-- <template>
  <div>
    <img :src="currentImage" />
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      imageIds: [0, 1, 2, 3],
      images: [
        { id: 0, src: 'https://picsum.photos/id/0/100/100' },
        { id: 1, src: 'https://picsum.photos/id/1/100/100' },
        { id: 2, src: 'https://picsum.photos/id/2/100/100' },
        { id: 3, src: 'https://picsum.photos/id/3/100/100' },
      ]
    };
  },
  computed: {
    currentImage() {
      return this.images[this.imageIds[0]];
    },
  },
  mounted() {
    setInterval(() => {
      this.imageIds.push(this.imageIds.shift());
    }, 3000);
  },
};

</script> -->

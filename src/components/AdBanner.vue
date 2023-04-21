<script>
import adService from '../services/adService';

export default {
  data() {
    return {
      ad: {}
    }
  },
  created() {
    adService.getAd().then(ad => {
      this.ad = ad;
    });
  }
}
</script>

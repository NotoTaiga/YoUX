<template>
  <div class="mainIndex">
    <!-- <MasterNav></MasterNav> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// 
// import MasterNav from '@/components/common/nav.vue';

@Component({
  components:{
    // MasterNav
  }
})
export default class mainIndex extends Vue {
    private test(){
        this.$store.dispatch('changePageName','aaa');
    }
}

</script>

<style scoped lang="scss">
@import "@/assets/style/index.scss";
</style>

<template>
  <div class="mainIndex">
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import MasterNav from '@/components/common/header.vue';

@Component({
  components:{
    MasterNav
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

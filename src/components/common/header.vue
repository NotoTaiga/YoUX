<template>
 <header class="header">
     <h1 class="header__ttl">
         YoUX
     </h1>
     <h2 class="header__pageName">
         {{pageName[nameChange()]}}
     </h2>
 </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class header extends Vue {
//   @Prop() private msg!: string;
    private name:string = "";
    private pageName:string[] = ['HOME','資料一覧','イメージマップ'];
    mounted():void{
        this.nameChange();
        
    }

    computed(){
    }

    private nameChange(){
        return this.$store.getters.getPageId;
    } 
}
</script>

<style scoped lang="scss">
    @import "@/assets/style/index.scss";
    .header{
        box-sizing: border-box;
        width: 100%;
        height: 5rem;
        background-color: $mainBlue;
        position: relative;
        
        &__ttl{
            position:absolute;
            height: 5rem;
            line-height: 5rem;
            top: 0;
            left:3.2rem;
            font-size: 1.4rem;
            color: $white;
        }

        &__pageName{
            position: absolute;
            height: 5rem;
            line-height: 5rem;
            width: 100%;
            text-align: center;
            font-size: 2rem;
            color: $white;
        }

    }
</style>
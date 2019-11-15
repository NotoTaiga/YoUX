<template>
  <div class="mainExplanation">
    <div class="mainExplanation__inner">
      <div class="bg" @click="closeWindow()"></div>
      <div class="content">
        <div class="content__textContent" v-if="pageState == 0">
          <div class="imgBox" :style="{ backgroundImage: 'url(' + dataSet.img + ')' }"></div>
          <div class="textBox">
            <div class="top">
              <div class="title">
                {{title}}
              </div>
              <ul class="list">
                <li>場所 : {{place}}</li>
                <li>ターゲット : {{target}}</li>
                <li>使用想定技術 : {{useTech}}</li>
              </ul>
            </div>
            <div class="explanation">
              <div class="explanation__title">説明 :</div>
              <div class="explanation__textBox">
                <p class="explanation__text" v-for="(t,i) in dataSet.text" :key="'explanationText'+i">{{t}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="content__storyContent" v-if="pageState == 1">
          <div class="storyBox">
            <div class="storyBox__header">
              <div class="stateBox">
                <div class="stateBox__pageTitle">
                  {{title}}
                </div>
                <div class="stateArea">
                  <div class="stateArea__inner" @click="changeStateOpen()">
                    <div class="stateArea__selectState">{{storyStateText}}</div>
                    <button class="stateArea__openBtn">▼</button>
                  </div>
                  <ul class="stateArea__list" v-if="stateOpen">
                    <li class="stateArea__item" v-for="(stateText,i) in storyStateTextArr" :key="'storyStateText'+i" @click="selectState(i)">{{stateText}}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="storyBox__main">
              <p class="storyBox__text" v-for="(text,i) in nowStoryText" :key="'storyText'+i">{{text}}</p>
            </div>
          </div>
        </div>
        <div class="content__btnCont">
          <button class="changeBtn" :class="[pageState == 0 ? 'changeBtn--active' : '']" @click="changePageState(0)">説明</button>
          <button class="changeBtn" :class="[pageState == 1 ? 'changeBtn--active' : '']" @click="changePageState(1)">ストーリー</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { dataSet } from "../../interface";
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  components: {}
})
export default class mainExplanation extends Vue {
  @Prop() private dataSet!: dataSet;

  private title :string = "";
  private useTeck:string = "";
  private place:string = "";
  private target:string = "";

  private pageState:number = 0;
  private changePageState(n:number){
    this.pageState = n;
  }

  private storyStateArr:string[] = [];
  private storyTextArr:string[][] = [];
  private nowStoryText:string[]=[];
  private storyState:number = 0;
  private storyStateTextArr:string[] = [];
  private storyStateText:string = "";

  private stateOpen:boolean = false;
  private changeStateOpen(){
    this.stateOpen = !this.stateOpen;
  }

  private selectState(i:number){
    this.changeStateOpen();
    this.storyState = i;
    this.storyStateText = this.storyStateTextArr[i];
    this.makeNowStoryText();
  }

  private makeNowStoryText(){
    const nowTextArr:string[] = this.storyTextArr[this.storyState];
    let newArr:string[]=[];
    nowTextArr.forEach((text,i) =>{
      if (i == nowTextArr.length - 1) {
        newArr.push(text);
      }else{
        newArr.push(text,'↓')
      }
    });

    this.nowStoryText = newArr;
  }

  private closeWindow() {
    this.$emit("close");
  }
  beforeMount(): void {
    this.title = this.dataSet.name;
    this.dataSet.place.forEach((place,i) =>{
      if (i == this.dataSet.place.length - 1) {
        this.place += place
      }else{
        this.place += place + " , ";
      }
    });
    this.dataSet.target.forEach((target,i) =>{
      if (i == this.dataSet.target.length - 1) {
        this.target += target
      }else{
        this.target += target + " , ";
      }
    });
    this.dataSet.usetech.forEach((tech,i) =>{
      if (i == this.dataSet.usetech.length - 1) {
        this.useTeck += tech
      }else{
        this.useTeck += tech + " , ";
      }
    });
    const obj:any = this.dataSet.targetStory;
    for(let k in obj) {
      this.storyStateArr.push(k);
      this.storyTextArr.push(obj[k]);

      if (k == "student") {
        this.storyStateTextArr.push('学生');
      }else if(k == "teacher"){
        this.storyStateTextArr.push('先生');
      }else if(k == "admin"){
        this.storyStateTextArr.push('事務局');
      }else if(k == "other"){
        this.storyStateTextArr.push('その他');
      }else if(k == "all"){
        this.storyStateTextArr.push('All');
      }
    }
    this.storyStateText = this.storyStateTextArr[this.storyState];
    this.makeNowStoryText();
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/style/index.scss";
.mainExplanation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999;

  &__inner {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .bg {
    width: 100%;
    height: 100%;
    background-color: $black;
    opacity: 0.5;
    position: absolute;
    z-index: 99999;
    top: 0;
    left: 0;
  }

  .content {
    z-index: 999999;
    width: 90%;
    height: 90vh;
    border-radius: 1.6rem;
    background-color: $white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__textContent {
      height: calc(100% - 6rem);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__btnCont {
      width: 100%;
      height: 6rem;
      background-color: $mainBlue;
      display: flex;
      justify-content: center;
      align-items: center;

      .changeBtn{
        cursor: pointer;
        font-size: 1.8rem;
        width: 12rem;
        height: 4rem;
        border: none;
        border-radius: 0.8rem;
        box-sizing: border-box;
        margin: 0 5rem;

        &--active{
          background-color: #333;
          color: $white;
        }
      }
    }

    .imgBox {
      width: calc(50% - 4.8rem);
      height: 90%;
      border-radius: 0.8rem;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      margin-left: 3.2rem;
    }

    .textBox {
      width: calc(50% - 4.8rem);
      margin-right: 3.2rem;
      height: 90%;
      // background-color: blue;

      .top{
        height: 25%;
      }

      .title{
        font-size: 2rem;
        margin-bottom:1.6rem;
      }

      .list{
        font-size: 1.8rem;
        margin-left: 0.8rem;
        li{
          margin-bottom: 1.6rem; 
        }
      }

      .explanation{
        font-size: 1.4rem;
        height: 75%;
        margin-left: 0.8rem;

        &__title{
          height: 3rem;
          font-size: 1.8rem;
          // margin-bottom: 1.6rem;
        }

        &__textBox{
          overflow-y: scroll;
          box-sizing: border-box;
          padding: 0.8rem;
          height: calc(100% - 3rem);
          width: 100%;
          border-radius: 8px;
          background-color: #fff;
        }

        &__text{
          font-size: 1.6rem;
          line-height: 2.5rem;
        }
      }
    }

    &__storyContent{
      height: calc(100% - 60px);
      display: flex;
      justify-content: center;
      align-items: center;
      .storyBox{
        width: 90%;
        height:90%;
        background-color: #fff;
        border-radius: 2rem;

        &__header{
          height: 5rem;
          width: 100%;
        }

        &__main{
          height: calc(100% - 5rem);
          font-size: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        &__text{
          text-align: center;
          line-height: 2.5rem;
        }

        .stateBox{
          height: 100%;
          display: flex;
          align-items: center;
          padding-left: 1.6rem;
          &__pageTitle{
            font-size: 2rem;
            line-height: 3rem;
            margin-right: 1rem;
          }
        }

        .stateArea{
          position: relative;
          &__inner{
            cursor: pointer;
            position: relative;
            box-sizing: border-box;
            padding-left:0.8rem;
            text-align: left;
            line-height: 3rem;
            border-radius: 0.8rem; 
            color: $black;
            width: 10rem;
            height: 3rem;
            font-size: 1.8rem;
            background-color: $white;
          }

          &__openBtn{
            border-radius: 0 0.8rem 0.8rem 0;
            position: absolute;
            top: 0;
            right: 0;
            height: 3rem;
            width: 2rem;
            line-height: 3rem;
            text-align: center;
            border: none;
            padding: 0;
            background-color: $mainBlue;
            color:$white;
          }

          &__list{
            width: 10rem;
            position:absolute;
            top: 3rem;
            left: 0;
            border-radius: 0 0 0.8rem 0.8rem;
            overflow:hidden;
          }

          &__item{
            box-sizing: border-box;
            height: 3rem;
            font-size: 1.8rem;
            background-color: $white;
            color: $black;
            line-height: 3rem;
            padding-left: 0.8rem;
            border-bottom: 1px solid #666;
            cursor: pointer;
            &:hover{
              background-color: $mainBlue;
              color: $white;
            }
          }
        }
      }
    }
  }
}
</style>
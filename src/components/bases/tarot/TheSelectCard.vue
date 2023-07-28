<template>
  <div>
    <div class="single-decks-container" v-show="!isShowSpread">
      <div class="single-decks-item" v-for="(item,index) in listBackCard" :key="item">
        <single-stone :backImgStone="stoneName[listStone[index]-1].src"></single-stone>
        <single-deck
          @click="
            () => {
              this.typeDraw = index+1;
              this.backCardSelected = backTarotName[item - 1].src;
              this.isShowSpread = !this.isShowSpread;
            }
          "
          :backImgCard="backTarotName[item - 1].src"
        ></single-deck>
      </div>
    </div>
    <transition-group name="fade">
      <spread-cards
        @selected-card="getItemCard"
        @more-card="getMoreItemCard"
        v-if="isShowSpread"
        :removeCard="srcCard"
        :max-length="maxLength"
        :backImgCard="backCardSelected"
        :typeDraw="typeDraw"
      ></spread-cards>
    </transition-group>

    <div class="selected-card-container">
      <transition-group name="fade">
        <div
          class="selected-card-item"
          v-for="item in listCardSelected"
          :key="item"
        >
          <single-card :srcCard="item" :backImgCard="backCardSelected"></single-card>
        </div>
      </transition-group>
    </div>
    <div class="selected-card-container">
      <transition-group name="fade">
        <div
          class="selected-card-item"
          v-for="item in listCardSelectedMore"
          :key="item"
        >
          <single-card :srcCard="item" :backImgCard="backCardSelected"></single-card>
        </div>
      </transition-group>
    </div>
  </div>
</template>
<script>
import SingleCard from "../cards/SingleCard.vue";
import SingleDeck from "../decks/SingleDeck.vue";
import SpreadCards from "../spreads/SpreadCards.vue";
import { fileName, backTarotName,stoneName } from "/src/constants/dataCard.js";
import { getRandomDeck } from "/src/constants/commonFunc.js";
import SingleStone from "../stones/SingleStone.vue";
export default {
  setup(props) {
    return {
      fileName,
      backTarotName,
      getRandomDeck,stoneName
    };
  },
  components: {
    SingleCard,
    SingleDeck,
    SpreadCards,SingleStone
  },
  props: {
    maxLength: {
      type: Number,
      default: 3,
    },
  },
  created() {
    this.listBackCard = getRandomDeck();
    this.listStone = getRandomDeck();
  },
  data() {
    return {
      srcCard: "",
      isShowSpread: false,
      listCardSelected: [],
      listCardSelectedMore: [],
      listBackCard: [],
      listStone: [],
      backCardSelected:"",
      typeDraw: 1
    };
  },
  methods: {
    getItemCard(val) {
      if (this.listCardSelected.length < this.maxLength) {
        this.srcCard = val;
        this.listCardSelected.push(val);
      }
    },
    getMoreItemCard(val) {
      this.srcCard = val;
      this.listCardSelectedMore.push(val);
    },
  },
};
</script>
<style lang="scss">
.single-decks-container {
  display: flex;
  .single-decks-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
  }
}
.selected-card-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  .selected-card-item {
    margin: 0 10px;
  }
}
</style>

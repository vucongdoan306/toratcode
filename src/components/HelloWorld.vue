<template>
  <div>
    <!-- <div v-for="item in fileName" :key="item.src">
    </div> -->
    <single-deck
      v-show="!isShowSpread"
      @click="
        () => {
          this.isShowSpread = !this.isShowSpread;
        }
      "
    ></single-deck>
    <transition-group fade>
      <spread-cards
        @selected-card="getItemCard"
        v-if="isShowSpread"
        :removeCard="srcCard"
      ></spread-cards>
    </transition-group>

    <div class="selected-card-container">
      <transition-group name="fade">
        <div class="selected-card-item" v-for="item in listCardSelected" :key="item" >
          <single-card :srcCard="item"></single-card>
        </div>
      </transition-group>
    </div>
  </div>
</template>
<script>
import SingleCard from "./bases/cards/SingleCard.vue";
import SingleDeck from "./bases/decks/SingleDeck.vue";
import SpreadCards from "./bases/Spread /SpreadCards.vue";
import { fileName } from "/src/constants/dataCard.js";
export default {
  setup(props) {
    return {
      fileName,
    };
  },
  components: {
    SingleCard,
    SingleDeck,
    SpreadCards,
  },
  props:{
    maxLength: {
      type: Number,
      default: 3,
    }
  },
  data() {
    return {
      srcCard: "",
      isShowSpread: false,
      listCardSelected: []
    };
  },
  methods: {
    getItemCard(val) {
      if(this.listCardSelected.length < this.maxLength){
        this.srcCard = val;
        this.listCardSelected.push(val);
      }
    },
  },
};
</script>
<style lang="scss">
/* we will explain what these classes do next! */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.selected-card-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  .selected-card-item{
    margin: 0 10px;
  }
}
</style>

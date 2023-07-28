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
        @more-card="getMoreItemCard"
        v-if="isShowSpread"
        :removeCard="srcCard"
        :max-length="maxLength"
      ></spread-cards>
    </transition-group>

    <div class="selected-card-container">
      <transition-group name="fade">
        <div
          class="selected-card-item"
          v-for="item in listCardSelected"
          :key="item"
        >
          <single-card :srcCard="item"></single-card>
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
          <single-card :srcCard="item"></single-card>
        </div>
      </transition-group>
    </div>
  </div>
</template>
<script>
import SingleCard from "../cards/SingleCard.vue";
import SingleDeck from "../decks/SingleDeck.vue";
import SpreadCards from "../spreads/SpreadCards.vue";
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
  props: {
    maxLength: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      srcCard: "",
      isShowSpread: false,
      listCardSelected: [],
      listCardSelectedMore: []
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
.selected-card-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  .selected-card-item {
    margin: 0 10px;
  }
}
</style>

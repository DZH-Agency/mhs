<template>
  <div class="facts-wrapper">
    <div class="container">
      <div class="facts">
        <div class="facts__faq-text">FAQ</div>
        <h2 class="facts__heading">Get The <span class="text-purple-gradient">Facts</span></h2>
        <div class="facts-block">
          <div class="facts-block__fact" :class="{active: activeAnswerIndex === 1}">
            <div class="facts-block__question">How many Mad Hares will there be?</div>
            <the-accordion :is-opened="activeAnswerIndex === 1" class="facts-block__answer">
              <span>10,000 Mad Hares</span>
            </the-accordion>
            <div class="facts-block__toggle" @click="toggleAnswer(1)" :class="{opened: activeAnswerIndex === 1}"/>
          </div>
          <div class="facts-block__fact" :class="{active: activeAnswerIndex === 2}">
            <div class="facts-block__question">How much does a Mad Hare cost?</div>
            <the-accordion :is-opened="activeAnswerIndex === 2" class="facts-block__answer">
              <span>$200</span>
            </the-accordion>
            <div class="facts-block__toggle" @click="toggleAnswer(2)" :class="{opened: activeAnswerIndex === 2}"/>
          </div>
          <div class="facts-block__fact" :class="{active: activeAnswerIndex === 3}">
            <div class="facts-block__question">What is the Mad Hare Society?</div>
            <the-accordion :is-opened="activeAnswerIndex === 3" class="facts-block__answer">
              <span>
                "Mad Hare Society" collection features 10,000 unique, algorithmically generated metaverse characters from over 245 hand-drawn traits with different levels of rarity.
                <br>
                <br>
                The rarest traits have the lowest % chance of being found among the Mad Hares and each trait has a corresponding rarity score.
                <br>
                <br>
                The sum of all the trait scores of one Mad Hare marks the total score for the character in our overall Ranking Table.
                <br>
                <br>
                Note: no two Mad Hares are exactly alike, and each one of them can be officially owned by a single person on the blockchain.
              </span>
            </the-accordion>
            <div class="facts-block__toggle" @click="toggleAnswer(3)" :class="{opened: activeAnswerIndex === 3}"/>
          </div>
          <div class="facts-block__fact" :class="{active: activeAnswerIndex === 4}">
            <div class="facts-block__question">What commercial use / IP rights do I get?</div>
            <the-accordion :is-opened="activeAnswerIndex === 4" class="facts-block__answer">
              <span>
                When you purchase a Mad Hare, you own that NFT and have a worldwide license to use, copy, and display the purchased Mad Hare for commercial and personal uses.
<br>
<br>
Examples of commercial use would be the use of the Art to produce and sell merchandise products (T-Shirts etc.), displaying copies of the Art or by licensing the exact, unmodified Art to a writer looking for an artwork for a book.
<br>
<br>
When you purchase a Mad Hare, you can earn revenue from the marketplaces that permit the use and sale of Mad Hare generally, provided that the marketplace cryptographically verifies each Mad Hare owner’s rights to display the Art for their Mad Hare.
<br>
<br>
By purchasing Mad Hare you are not acquiring any equity or other ownership or profit-sharing interest in Mad Hare Society or DaRealGenius, or any of their affiliates or any brand or other business venture.
<br>
<br>
You will not have right to create and sell derivatives of the Art, or distort or otherwise modify the Art or any of its parts, its colors, design, etc. or use any trademarks, brand names, logos or other intellectual property rights belonging to DaRealGenius/Mad Hare Society.
<br>
<br>
You may not, and may not allow any third party to use name, pseudonym and/or likeness of Mad Hare authors/artists, DaRealGenius/Mad Hare Society brand name, logos or other IP and assets in any kind of activities that may lead to misleading costumers or/and false association, false endorsement, etc.
<br>
<br>
Mad Hare Society/DaRealGenius retains all rights necessary to exploit any Mad Hare in any commercial and non-commercial way, and build new partnerships and collaborations with regard to any Mad Hare. Unless DaRealGenius permits otherwise in writing, you are not entitled to any royalties or any other proceedings coming from such commercialization, partnerships and collaborations.
              </span>
            </the-accordion>
            <div class="facts-block__toggle" @click="toggleAnswer(4)" :class="{opened: activeAnswerIndex === 4}"/>
          </div>
          <div class="facts-block__fact" :class="{active: activeAnswerIndex === 5}">
            <div class="facts-block__question">
              How to get a Mad Hare?
            </div>
            <the-accordion :is-opened="activeAnswerIndex === 5" class="facts-block__answer">
              <span>
                Mad Hares can be purchased exclusively on the Crypto.com/NFT platform. The featured drop will take place on 15th of April.
                <br>
                <br>
                To navigate to the Featured Drop simply click on "View Drop" in the second section of this page.
                <br>
                <br>
                The timer on this page will indicate the date and time of the Featured Drop. Since we are using Crypto.com NFT's queue system (<a
                href="https://help.crypto.com/en/articles/5074395-buying-and-selling" target="_blank" class="hyperlink">What is the queue system?</a>), we advise to queue up early so you won't miss your chance to get a queue number.
                <br>
                <br>
                The Featured drop will offer 10,000 Made Hares. Each Mad Hare will have a fixed price and will get you 1 random collectible from the “Mad Hare Society” collection.
              </span>
            </the-accordion>
            <div class="facts-block__toggle" @click="toggleAnswer(5)" :class="{opened: activeAnswerIndex === 5}"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FactsSection',
  data() {
    return {
      activeAnswerIndex: null,
    }
  },
  methods: {
    toggleAnswer(index) {
      this.activeAnswerIndex = this.activeAnswerIndex === index ? null : index
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/components/FactsSection.scss";
</style>

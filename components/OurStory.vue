<template>
  <div class="story-wrapper">
    <div class="container">
      <div class="story">
        <div class="story-top">
          <div class="story-top-left">
            <h2 class="story__heading">
              Our <span class="text-purple-gradient">Story</span>
            </h2>
            <p class="story__text">
              It's the year 3419 in Rozkazan, known as the most notorious fortress on an ice-covered planet called Abanleor, which imprisons vicious, disturbed and dangerous modified creatures behind bars for the safety of the Milky Way Galaxy.
            </p>
            <img src="/OurStory/iceberg.png" alt="iceberg" class="story-top-left__img">
            <p class="story__text">
              Most known villains, called the Mad Hares, were captured within the last 3 centuries and placed in the darkest, most guarded rooms of the facility.
              <br>
              <br>
              Since capture, The Universal Intelligence Agency (UIA) has craved to weaponize these menaces for decades. Progress was made when the Mad Hare’s focus-center of the brain called prefrontal cortex was manipulated to transform their multi-desires into a single-minded objective programmed by the UIA, but Mad Hares were never 100% controllable.
            </p>
          </div>
          <div class="story-top-right">
            <img src="/OurStory/top-cards.png" alt="cards">
          </div>
        </div>
        <div class="story-bot">
          <div class="story-bot-left">
            <img src="/OurStory/cards-bottom.png" alt="cards">
          </div>
          <div class="story-bot-right">
            <p class="story__text">
              The final test experiments resulted in a 5% kill rate of innocent subjects in test environments, down 95% from destroying everyone in their way.
              <br>
              <br>
              With the increasing tension caused by time-traveling PsychoKitties, a multi-planetary governmental voting took place to send Mad Hares after the mind-controlling felines as the last resort.
              <br>
              <br>
              A decision with as high potential consequences as releasing the Mad Hares also required universal decentralized voting to take place. With over 73,299,101 votes and 61% of population siding with the UIA mission, the Mad Hares were equipped with a time-traveling atom-weapon with a single objective in mind - to destroy the PsychoKitties.
            </p>
          </div>
        </div>
        <footer class="story-footer">
          Was the decision worth it, or will this decision annihilate the world as we know it?
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurStory'
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/components/OurStory.scss";
</style>

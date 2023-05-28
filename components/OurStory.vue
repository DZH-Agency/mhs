<template>
  <div class="story-wrapper">
    <div class="container">
      <div class="story">
        <header class="story-header">
          <h2 class="story-header__heading">
            <span class="text-purple-gradient">Story</span> Chapters
          </h2>
          <section class="story-header-buttons">
            <button class="story-header-buttons__button" :class="{ 'active': selectedStory === story.title }" v-for="story in $options.stories" :key="story.title" @click="selectedStory = story.title">
              {{ story.title }}
            </button>
          </section>
        </header>
        <template v-if="selectedStory === 'Mad Hares'">
          <div class="story-top">
            <div class="story-top-left">
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
        </template>
        <template v-else-if="selectedStory === 'Gen-Q Elite Babies'">
          <section class="story-genq">
            <section class="story-genq-left">
              <p class="story-genq__text">
                In ancient Egypt, around 1279 BC, a <a href="https://www.psychokitties.io/" target="_blank">PsychoMolly</a> named Nefertari formed a powerful bond with a Mad Hare called Anubis. Their love bloomed amid the construction of the colossal temples and monumental pyramids. The resulting Elite Baby possessed the ability to manipulate the sands of time, altering the course of events throughout history.
                <br>
                <br>
                In the futuristic era of the 4000s, on the thriving Mars colony, a PsychoMolly named Aurora found her soulmate in a resourceful
                <a
                  href="https://www.psychokitties.io/"
                  target="_blank"
                >PsychoKitty</a> named Xander. Together, they harnessed the power of dark energy to create a gravitational force strong enough to bend spacetime, ultimately producing an Elite Baby with unparalleled mastery over the fabric of the universe.
              </p>
              <img
                src="/OurStory/gen-q-lb.png"
                alt="genq"
                class="story-genq__lb-img"
              >
            </section>
            <section class="story-genq-right">
              <img src="/OurStory/gen-q-rt.png" alt="genq" class="story-genq__rt-img" />
              <p class="story-genq__text">
                However, not all love stories had such fortuitous outcomes. A tale unfolds of a PsychoKitty named Nero, who shared a passionate love with a PsychoMolly named Luna. But their happiness was short-lived, as a devious Mad Hare named Vex sought to sow discord between them. Vex manipulated events, making it appear as though Nero had betrayed Luna. Luna, devastated and blinded by grief, succumbed to Vex's charms, leaving Nero behind.
                <br>
                <br>
                Luna and Vex created an Elite Baby, but the child's abilities were tainted by the deception surrounding its conception. The child could weave illusions so intricate that the line between reality and fantasy blurred, adding a new layer of chaos to the war across time and space.
                <br>
                <br>
                As love, deception, and power continued to intertwine, the fate of the universe hung in the balance, with each new union of PsychoMollies and their partners bringing the potential for salvation or further turmoil.
              </p>
            </section>
          </section>
        </template>
        <template v-else-if="selectedStory === 'Mutants'">
          <section class="story-mut">
            <section class="story-mut-top">
              <section class="story-mut-top-left">
                <p class="story-mut__text">
                  In the year 3419, the Mad Hares were sent on a mission by the Universal Intelligence Agency (UIA) to hunt down the time-traveling PsychoKitties. The Mad Hares, though under UIA's control, secretly yearned for freedom. They discovered a faulty Love Potion recipe that not only broke their mental chains but also fractured the time-space continuum, transforming them into Mad Mutants in the main reality and banishing their Mad Hare selves to a parallel universe.
                  <br>
                  <br>
                  Unknown to the UIA, the Mad Mutants, born from the once-enslaved Mad Hares, were determined to exact vengeance on the UIA agents across different locations in time and space. As the potion's side effects manifested, the Mad Mutants' powers grew, fueled by a fierce hunger for justice.
                </p>
                <img
                  src="/OurStory/mut-t-rt.png"
                  alt="mut"
                  class="story-mut-top-left__img"
                >
              </section>
              <section class="story-mut-top-right">
                <img
                  src="/OurStory/mut-t-lb.png"
                  alt="mut"
                  class="story-mut-top-right__img"
                >
                <p class="story-mut__text">
                  In the shadows of the Great Wall of China in 221 BC, a Mad Mutant stalked a hidden UIA agent. The agent, believing he had successfully infiltrated the timeline, was caught off guard when the Mad Mutant appeared before him. With a sinister grin, the Mad Mutant cornered the agent, relishing in the panic-stricken expression on his face…
                  <br>
                  <br>
                  In the parallel universe, the Mad Hares were desperate to reconnect with their loved ones in the main reality. The Mad Hare father, using his knowledge of quantum mechanics and a deep understanding of the connection he shared with his Elite Baby, managed to harness the residual energy from the faulty Love Potion to open a temporary communication channel between the parallel universe and the main reality. This feat, although incredibly difficult, was driven by his relentless determination to reach out to his child.
                </p>
              </section>
            </section>
            <section class="story-mut-bot">
              <p class="story-mut__text">
                Meanwhile, the Elite Baby had spent his life believing that his father had permanently transformed into a Mad Mutant, a creature devoid of recognition or love for its own offspring. The moment he heard his father's voice crackling through the void, the Elite Baby felt a jolt of shock, followed by an overwhelming flood of emotions—joy, disbelief, and an intense yearning to reconnect with the parent he had never truly known.
                <br>
                <br>
                "Son...I don't have much time...we're trapped here...find a way to--"
                <br>
                <br>
                Tears welled up in the Elite Baby's eyes as he stammered, "Father, is it really you? I never thought I'd...I'll do anything! Just tell me how--"
                <br>
                <br>
                The connection abruptly cut off, leaving the heartbroken Elite Baby with a whirlwind of emotions, his only solace being the knowledge that his father was still out there, fighting to reunite with him. In the parallel universe, the Mad Hare father roared in frustration, the crushing weight of their brief encounter only fueling his determination to break free and return to his family.
                <br>
                <br>
                As the struggle between the factions intensified in the main reality, the PsychoKitties, Mad Mutants, PsychoMollies, and Elite Babies fought for their own cause. Love and deception were interwoven with the threads of time and space, leaving complex chain of events to unfold and mysteries remaining unsolved.
              </p>
              <img
                class="story-mut-bot__img"
                src="/OurStory/mut-b-r.png"
                alt="mut"
              >
            </section>
          </section>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurStory',
  stories: [
    {
      title: 'Mad Hares',
    },
    {
      title: 'Gen-Q Elite Babies'
    },
    {
      title: 'Mutants'
    }
  ],
  data() {
    return {
      selectedStory: this.$options.stories[0].title
    }
  },
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/components/OurStory.scss";
</style>

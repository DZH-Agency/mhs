<template>
  <div class="wrapper faq-wrapper">
    <img
      src="/img/faq/faq-cloud.png"
      alt="cloud"
      class="faq__cloud"
    >
    <div class="container">
      <div class="faq">
        <h4 class="faq__small-title">FAQ</h4>
        <h1 class="faq__title">
          Get the <span class="text-purple-gradient">Facts</span>
        </h1>
        <div class="faq-items">
          <div
            class="faq-items-item"
            v-for="({title, content}, idx) in $options.items"
            :key="idx"
          >
            <header class="faq-items-item-header">
              <h3 class="faq-items-item-header__title">{{ title }}</h3>
              
              <button
                type="button"
                class="faq-items-item-header__toggle"
                :class="{active: openedItemIdx === idx}"
                @click="toggleFaq(idx)"
              ></button>
            </header>
            <TheAccordion :is-opened="openedItemIdx === idx">
              <main
                class="faq-items-item-info"
                v-html="content"
              ></main>
            </TheAccordion>
          </div>
        </div>
        <img
          src="/img/bottom-img.png"
          alt="preview"
          class="faq__bottom-img"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'faq',
  items: [{
    title: 'When will I be able to mutate my MH?',
    content: `
        <p>We expect mutation to happen from 25th fo February to 29th of February.</p>
      `,
  }, {
    title: 'What NFTs do I need to mutate?',
    content: `
        <p>We expect mutation to happen from 25th fo February to 29th of February.</p>
      `,
  }, {
    title: 'How many times can I mutate with each potion or upgrade with each upgrade pack NFT?',
    content: `
        <p>We expect mutation to happen from 25th fo February to 29th of February.</p>
      `,
  }, {
    title: 'Have people mutated or upgraded my Mad Mutant before?',
    content: `
        <p>We expect mutation to happen from 25th fo February to 29th of February.</p>
      `,
  }, {
    title: 'Where do I purchase Upgrade Packs?',
    content: `
        <p>We expect mutation to happen from 25th fo February to 29th of February.</p>
      `,
  }, {
    title: 'How can I prepare for the mutation?',
    content: `
        <p>We expect mutation to happen from 25th fo February to 29th of February.</p>
      `,
  }, {
    title: 'When will I receive my mutants?',
    content: `
        <p>We expect mutation to happen from 25th fo February to 29th of February.</p>
      `,
  }, {
    title: 'How do you know what NFTs are in my wallet?',
    content: `
        <p>We expect mutation to happen from 25th fo February to 29th of February.</p>
      `,
  }],
  data() {
    return {
      openedItemIdx: null,
    }
  },
  methods: {
    toggleFaq(idx) {
      this.openedItemIdx = this.openedItemIdx === idx ? null : idx
    }
  }
}
</script>

<style
  scoped
  lang="scss"
>
@import "@/assets/scss/pages/mutants/faq.scss";
</style>

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
  items: [
    {
      title: 'Will I be able to mutate my Mad Hare without an Upgrade Pack?',
      content: `
        <p>Yes, mutations are free and your Mad Mutant will receive the same rarity score as your Mad Hare had.</p>
      `,
    },
    {
      title: 'When will I be able to mutate my MH?',
      content: `
        <p>We expect mutation to happen from 25th of February to 29th of February.</p>
      `,
    },
    {
      title: 'What NFTs do I need to mutate?',
      content: `
        <p>You'll only need one <a href="https://crypto.com/nft/collection/41a371f626f43473ca087f0f36f06299?tab=items" target="_blank">Mad Hare</a>.</p>
      `,
    },
    {
      title: 'Are mutations free?',
      content: `
        <p>Yes, mutating any of your Mad Hares is a free process.</p>
      `,
    },
    {
      title: 'Can non-participants or "passive holders" be airdropped basic corresponding mutants without participating in the "reveal" process on the website?',
      content: `
        <p>Yes. Few hours after the Mutation Period ends and Mutation website is shut down, we’ll be taking a snapshot of holders who hold Mad Hares that were not mutated. Those holders will still receive corresponding Mad Mutants together with the rest of the people who participated in the Mutation Event.</p>
      `,
    },
    {
      title: 'How many times can I mutate each Mad Hare and how many times can I upgrade my Mad Mutant?',
      content: `
        <p>Each Mad Hare can be mutated one time. Each Upgrade Pack can be used once, but you can apply as many Upgrade Packs to your Mad Mutant as you wish. Visit <a href="https://mutation.madharesociety.com/unusedNFTs.html" target="_blank">https://mutation.madharesociety.com/unusedNFTs.html</a> to make sure that the Mad Hares you plan to mutate have not been used by another person. To be safe, we suggest buying Upgrade Packs directly from the CDC drop and not from the secondary market.</p>
      `,
    },
    {
      title: 'Have people mutated my Mad Hare or used my Upgrade NFTs?',
      content: `
        <p>See above question.</p>
      `,
    },
    {
      title: 'Are upgrades unlimited?',
      content: `
        <p>You can apply as many Upgrade Packs to your Mad Mutant as you wish, but each Upgrade Pack can be used only one time. We suggest not buying Upgrade Packs on the secondary market.</p>
      `,
    },
    {
      title: 'How many Upgrade Packs will there be in total? What happens if someone has a Mad Mutant with the same traits I\'m trying to create with my Upgrade Pack?',
      content: `
        <p>There are 24 different Upgrade Packs, each pack features 1 surprise trait. This means there are 24 new traits. Our system will not allow duplicate Mad Mutants with the same combination of traits.</p>
      `,
    },
    {
      title: 'What happens if I don\'t want to use the new trait from the Upgrade Pack? Will I still get the points?',
      content: `
        <p>Yes. You can apply Upgrade Pack and only use it to boost your score points. Using the new traits is optional.</p>
      `,
    },
    {
      title: 'Do we need to add the upgrade packs at the same time as the reveal, or can it be done at a later date within the timeframe given?',
      content: `
        <p>You can apply Upgrade Packs to your Mad Mutant throughout the Mutation Period. Meaning you can always go back to select your mutant and apply new Upgrades.</p>
      `,
    },
    {
      title: 'How much impact do the upgrades have on rank? By how much will the rank increase?',
      content: `
        <p>Depending on the Upgrade Pack purchased, the extra rarity score points will vary. For example 25 points will be roughly 5 USD, but a 800 point Upgrade Pack 130 USD. Pricings for different Upgrade Packs will be featured in the Terms & Service section of our Mutation site at <a href="https://www.madharesociety.com/mutants" target="_blank">www.madharesociety.com/mutants</a>.</p>
      `,
    },
    {
      title: 'Will Mad Mutants rarity scores exactly match original Mad Hare scores before upgrades are applied?',
      content: `
        <p>Yes. If you had a 5000 rarity score Mad Hare in past, then you will now have a 5000 rarity score Mad Mutant by default with corresponding traits.</p>
      `,
    },
    {
      title: 'Where do I purchase Upgrade Packs?',
      content: `
        <p>Head over to <a href="https://crypto.com/nft" target="_blank">Crypto.com/NFT</a> on February 25.</p>
      `,
    },
    {
      title: 'How can I prepare for the mutation?',
      content: `
        <p>You will need a Twitter account, even if you create it just for this event. No need to add any photos or personally identifiable information on that Twitter account. Simple instruction animation will be shown on the login page how to link it to your CDC profile. Keep your NFT assets in your normal CDC platform wallet.</p>
      `,
    },
    {
      title: 'When will I receive my mutants?',
      content: `
        <p>We'll send the Mad Mutants to CDC within 7 days after the Mutation Period is over. Then you'll have to wait approximately 1 month more.</p>
      `,
    },
    {
      title: 'How do you know what NFTs are in my wallet?',
      content: `
        <p>Since you've linked your Twitter (doesn't need to be your official Twitter account) with your CDC profile, our program can verify that CDC account belongs to you and read public information on your CDC page, store them into a database and showcase it to you in a pleasant manner in our mutation section UI.</p>
      `,
    },
    {
      title: 'What is an SFT?',
      content: `
        <p>A semi fungible token (SFT) possesses the properties of both fungible (e.g currency) and non-fungible tokens (NFT collectables like weapons). A semi fungible token remains fungible until it is used for a specific purpose. For simplicity sake, our SFT is an NFT that when burned, becomes an in-game item. Interested to read more? Visit: <a href="https://www.coindesk.com/tech/2021/08/17/what-is-a-semi-fungible-crypto-token/" target="_blank">https://www.coindesk.com/tech/2021/08/17/what-is-a-semi-fungible-crypto-token/</a></p>
      `,
    }
  ],
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

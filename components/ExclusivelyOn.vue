<template>
  <div class="exc-wrapper">
    <div class="container">
      <div class="exc">
        <h2 class="exc__title">
          Available on <img src="/img/crypto-com-logo.png" alt="crypto com" class="crypto-com-nft-image" /> & <img src="/img/opensea-logo.png" alt="opensea" class="opensea-image" />
        </h2>
        <section class="exc-items">
          <section class="exc-items-item" v-for="nft in $options.nfts" :key="nft.title">
            <img
              :src="nft.logo"
              alt="logo"
              class="exc-items-item__logo"
            >
            <h3 class="exc-items-item__title" v-html="nft.title"></h3>
            <p class="exc-items-item__text" v-html="nft.text"></p>
            <section class="exc-items-item-buttons">
              <a :href="nft.cryptoComLink" class="crypto-com-nft-image exc-items-item-buttons__button">Buy on <img
                src="/img/crypto-com-logo.png"
                alt="crypto com"
              ></a>
              <a :href="nft.openseaLink" class="opensea-image exc-items-item-buttons__button">Buy on <img
                src="/img/opensea-logo.png"
                alt="opensea"
              ></a>
            </section>
          </section>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExclusivelyOn',
  nfts: [
    {
      logo: require('/static/img/available-on/mhs.png'),
      title: '$6.1M+ volume traded',
      text: `
      <strong>Utility:</strong> Playable character in Quantum Frenzy game, <a href="/terms-and-conditions" target="_blank">IP rights</a>, staking (under construction), exclusive <a href="#" target="_blank">Discord</a> channels. Expect more utility in the future.
      `,
      cryptoComLink: '#',
      openseaLink: 'https://opensea.io/collection/mad-hare-society-10'
    },
    {
      logo: require('/static/img/available-on/mad.png'),
      title: 'Mad Era 2033: Invasion of the Mutants',
      text: `
      <strong>Utility:</strong> Each Mad Mutant allows you to claim various game items and token vouchers before the final public launch of <a href="#" target="_blank">Quantum Frenzy</a>. Read more about rewards <a href="/mutants" target="_blank">HERE</a>.
      `,
      cryptoComLink: '',
      openseaLink: 'https://opensea.io/collection/mad-era-2033-invasion-of-the-mutants'
    },
    {
      logo: require('/static/img/available-on/gen-q.png'),
      title: 'Generation Q: Elite Babies',
      text: `
      <strong>Utility:</strong> Unlock special <a href="#" target="_blank">Quantum Frenzy</a> game advantage to your playable Mad Hare character if you stake the whole family. (Baby’s real parents are in the NFT metadata).
      `,
      cryptoComLink: '#',
      openseaLink: 'https://opensea.io/collection/generation-q-elite-babies'
    },
  ]
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/components/ExclusivelyOn.scss";
</style>

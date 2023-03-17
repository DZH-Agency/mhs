<template>
  <div class="navbar-wrapper" :class="{opened: isOpened}">
    <div class="container">
      <div class="navbar mutation">
        <img @click="$router.push('/#')" src="/logo.png" alt="logo" class="navbar__logo">
        <div class="navbar-menu-desktop desktop-only">
          <nuxt-link
            class="navbar-menu-desktop__item"
            :key="link.title"
            :to="link.href"
            v-for="link in $options.menuItems"
          >
            {{ link.title }}
          </nuxt-link>
        </div>

        <a href="https://mutation.madharesociety.com" target="_blank" class="navbar__mutation-link">
          Mutation site
          <br class="mobile-only">
          (locked)
        </a>

        <div @click="isOpened = !isOpened" class="navbar__burger mobile-only" :class="{opened: isOpened}">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>

    <portal to="app">
      <div class="container navbar-mobile-container mobile-only" :class="{opened: isOpened}">
        <div class="navbar-mobile">
          <div class="navbar-mobile-menu">
            <nuxt-link
              class="navbar-mobile-menu__item"
              :key="link.title"
              :to="link.href"
              v-for="link in $options.menuItems"
              @click.native="isOpened = false"
            >
              {{ link.title }}
            </nuxt-link>
          </div>
          <div class="navbar-mobile-social">
            <a href="https://discord.gg/madharesociety" target="_blank">
              <img src="/TopNavBar/discord.svg" alt="discord">
            </a>
            <a href="https://twitter.com/MadHareSociety" target="_blank">
              <img src="/TopNavBar/twitter.svg" alt="twitter">
            </a>
          </div>
        </div>
      </div>
    </portal>

  </div>

</template>

<script>
import constants from '@/constants.js'

export default {
  name: 'TopNavbar',
  menuItems: constants.MUTANTS_NAVBAR_MENU_ITEMS,
  props: {

  },
  data() {
    return {
      isOpened: false
    }
  },
  watch: {
    isOpened(newVal) {
      if (newVal) {
        document.querySelector('html').classList.add('no-scroll')
      } else {
        document.querySelector('html').classList.remove('no-scroll')
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/components/TopNavBar.scss";
</style>

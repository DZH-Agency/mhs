<template>
  <div class="navbar-wrapper" :class="{opened: isOpened}">
    <div class="notification" v-if="displayNotification" :class="{opened: !isOpened}">
      Mad Hares are about to mutate on 03.15. <a target="_blank" href="https://madharesociety.com/mutants">Click here</a> to learn more
      <button @click="displayNotification = false" class="notification__close">&times;</button>
    </div>
    <div class="container">
      <div class="navbar">
        <img @click="$router.push('/#')" src="/logo.png" alt="logo" class="navbar__logo">
        <div class="navbar-menu-desktop desktop-only">
          <nuxt-link
            class="navbar-menu-desktop__item"
            exact
            :key="link.title"
            :to="link.href"
            v-for="link in $options.menuItems"
          >
            {{ link.title }}
          </nuxt-link>
          <div
            class="navbar-menu-desktop__item socials"
          >
            Socials
            <div class="circle"></div>
            <div class="popup">
              <a href="https://twitter.com/MadHareSociety" target="_blank" class="popup-item">
                <div class="popup-item__icon twitter"></div>
                Twitter
              </a>
              <a href="https://discord.gg/madharesociety" target="_blank" class="popup-item">
                <div class="popup-item__icon discord"></div>
                Discord
              </a>
            </div>
          </div>
        </div>
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
              @click="isOpened = false"
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
  name: 'TopNavBar',
  menuItems: constants.NAVBAR_MENU_ITEMS,
  props: {

  },
  data() {
    return {
      isOpened: false,
      displayNotification: true
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

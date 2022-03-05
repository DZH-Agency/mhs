<template>
  <div class="navbar-wrapper" :class="{opened: isOpened}">
    <div class="container">
      <div class="navbar">
        <img src="/logo.png" alt="logo" class="navbar__logo">
        <div class="navbar-menu-desktop desktop-only">
          <a
            class="navbar-menu-desktop__item"
            :key="link.title"
            :href="link.href"
            v-for="link in $options.menuItems"
          >
            {{ link.title }}
          </a>
          <a
            class="navbar-menu-desktop__item"
            href="#"
          >
            Socials
            <span class="circle"></span>
          </a>
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
            <a
              class="navbar-mobile-menu__item"
              :key="link.title"
              :href="link.href"
              v-for="link in $options.menuItems"
              @click="isOpened = false"
            >
              {{ link.title }}
            </a>
          </div>
          <div class="navbar-mobile-social">
            <a href="#" target="_blank">
              <img src="/TopNavBar/discord.svg" alt="discord">
            </a>
            <a href="#" target="_blank">
              <img src="/TopNavBar/instagram.svg" alt="instagram">
            </a>
            <a href="#" target="_blank">
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

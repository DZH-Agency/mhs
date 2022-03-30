<template>
  <div>
    <div class="footer-wrapper">
      <div class="container">
        <div class="footer">
          <div class="footer-top">
            <img class="footer-top__logo" src="/logo.png" alt="logo"/>
            <div class="footer-top-right desktop-only">
              <div class="footer-top-menu">
                <a
                  class="footer-top-menu__item"
                  v-for="link in $options.menuItems"
                  :key="link.title"
                  :href="link.href"
                >
                  {{ link.title }}
                </a>
              </div>
              <div class="footer-top-social">
                <a href="https://twitter.com/MadHareSociety" target="_blank" class="footer-top-social__item twitter"/>
                <a href="https://discord.gg/madharesociety " target="_blank" class="footer-top-social__item discord"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-privacy-wrapper">
      <div class="container">
        <div class="footer-privacy">
          <div class="footer-privacy__text">
            2022, All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import constants from '@/constants.js'

export default {
  name: 'TheFooter',
  menuItems: constants.NAVBAR_MENU_ITEMS
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/components/TheFooter.scss";
</style>

<template>
  <div v-if="isVerificationInProcess" class="vm">
    <div class="vm-box">
      <img v-if="isSuccess" src="/VerificationPage/success.png" alt="" class="vm__icon">
      <img v-else-if="isFail" src="/VerificationPage/failed.png" alt="" class="vm__icon">
      <div class="vm__text" v-if="isSuccess">
        Verification successful
      </div>
      <div class="vm__text" v-else-if="isFail">
        Confirmation failed
      </div>
      <div class="vm__text" v-else>
        Wait until our script has verified your info...
      </div>
      <div class="vm-bar">
        <div class="vm-bar__item" v-for="_ in Array(currentPartsCount)"/>
      </div>
    </div>
  </div>
  <div v-else class="vp">
    <div class="vp-left">
      <img src="/logo.png" alt="" class="vp-left__logo">
      <div class="vp-left-box">
        <div class="vp-left-box__text">
          Please verify yourself to get access to our exclusive Discord channels:
        </div>
        <div class="vp-left-box-info">
          <div class="vp-left-box-info__text">
            Mad Hares <strong>(hold 1+)</strong>
            <br>
            King Hares <strong>(hold 5+)</strong>
            <br>
            Godly Hares <strong>(hold 10+)</strong>
          </div>
        </div>
        <div class="vp-left-box__hint">Important!</div>
        <div class="vp-left-box__text">
          Before verification your Twitter handle has to be added to your <img class="crypto-com-nft-image" src="/ExclusivelyOn/crypto-com-nft.png" alt="logo"> profile or the verification will fail.
        </div>
        <div class="vp-left-box__text">
          Discord and CDC usernames are CASE-SENSITIVE.
        </div>
      </div>
    </div>
    <div class="vp-right">
      <div class="vp-right__title">Verification</div>
      <div class="vp-right-form">
        <div class="vp-right-form-group">
          <div class="vp-right-form-group__label">
            <template v-if="!isUserAuthenticated">
              1. Authenticate via
              <a :href="twitterAuthLink" class="vp-right-form-group__twitter-btn">
                <img src="/VerificationPage/twitter-btn.png" alt="">
                Twitter
              </a>
            </template>
            <template v-else>
              <a :href="twitterLogoutLink" class="vp-right-form-group__twitter-btn">
                <img src="/VerificationPage/twitter-btn.png" alt="">
                Logout
              </a>
            </template>
          </div>
        </div>
        <div class="vp-right-form-group">
          <div class="vp-right-form-group__label">2. Insert your Discord handle (case-sensitive):</div>
          <div class="vp-right-form-group__input-box">
            <input v-model="discord" type="text" class="vp-right-form-group__input" placeholder="e.g.MadHares#4334">
          </div>
          <div v-if="discord && !isDiscordHandleValid" class="error">
            Discord handle must contain <strong>#</strong> character
          </div>
        </div>
        <div class="vp-right-form-group">
          <div class="vp-right-form-group__label"><span>3. Insert your</span> <img src="/ExclusivelyOn/crypto-com-nft.png" alt="nft" class="crypto-com-nft-image"/> <span>username (case-sensitive)</span></div>
          <div class="vp-right-form-group__input-box">
            <input v-model="username" type="text" class="vp-right-form-group__input" placeholder="Your username">
          </div>
        </div>
      </div>
      <div class="vp-right__troubles">
        Having troubles with verification? Watch our video tutorial
        <a href="#" target="_blank"><strong>HERE</strong></a>
      </div>
      <button @click="startVerifying" :disabled="isVerifyDisabled" class="vp-right__verify-btn">
        Verify
        <span class="circle left"></span>
        <span class="circle right"></span>
      </button>
    </div>
    <div class="vp-modal-wrapper" v-if="showErrorModal" @click="showErrorModal = false">
      <div class="vp-modal" @click.stop>
        <button class="vp-modal__close-btn" @click="showErrorModal = false">&times;</button>
        <img class="vp-modal__icon" src="/VerificationPage/warning.png" alt="warning">
        <div class="vp-modal__title">Ooooooops...</div>
        <div class="vp-modal__text">
          <span>Data doesn't match</span> <br> <img src="/ExclusivelyOn/crypto-com-nft.png" class="crypto-com-nft-image" alt="nft"> <span>profile</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import constants from '@/constants.js'

export default {
  name: 'test-verification',
  data() {
    return {
      showErrorModal: false,
      isVerificationInProcess: false,
      currentPartsCount: 0,
      isSuccess: true,
      isFail: false,
      showResult: false,
      username: null,
      discord: '',
      isUserAuthenticated: false,
    }
  },
  loaderPartsCount: 18,
  loaderInterval: null,
  async asyncData ({ $axios }) {
    let isUserAuthenticated = false
    let username = ''
    let discord = ''
    
    try {
      const { data: user } = await $axios.get('/status')
      username = user.cryptoUsername
      discord = user.discordUsername
      
      isUserAuthenticated = true
      
      if (user.isHolder && user.isTwitterMatching) {
        try {
          await $axios.get('/verify-holder')
        } catch (e) {
          console.log(e)
        }
      }
    } catch (e) {
      isUserAuthenticated = false
    }
    
    return {
      isUserAuthenticated,
      username,
      discord
    }
  },
  watch: {
    isVerificationInProcess(newVal) {
      if (newVal) {
        this.isSuccess = false
        this.isFail = false
        this.showResult = false
        this.currentPartsCount = 0
        this.setLoaderInterval()
      }
    }
  },
  computed: {
    twitterAuthLink () {
      return constants.API_ROOT
    },
    twitterLogoutLink () {
      return `${constants.API_ROOT}/logout`
    },
    isVerifyDisabled () {
      return !(this.isUserAuthenticated && this.username && this.isDiscordHandleValid)
    },
    isDiscordHandleValid () {
      return this.discord.includes('#')
    }
  },
  methods: {
    proceedAfterVerification () {
      if (this.isFail) {
        this.showErrorModal = true
      }
      this.isVerificationInProcess = false
      this.isSuccess = false
      this.isFail = false
    },
    async startVerifying () {
      if (this.isVerifyDisabled) {
        return
      }
    
      this.isVerificationInProcess = true
      const isVerifiedCrypto = await this.verifyCrypto()
      const isVerifiedHolder = await this.verifyHolder()
    
      if (isVerifiedHolder && isVerifiedCrypto) {
        this.isSuccess = true
      } else {
        this.isFail = true
      }
    },
    async verifyCrypto (newParams = null) {
      const params = newParams ?? {
        username: this.username,
        discord: this.discord
      }
      try {
        await this.$axios.get('/verify-crypto', { params })
        return true
      } catch (e) {
        console.log(e)
        return false
      }
    },
    async verifyHolder () {
      try {
        await this.$axios.get('/verify-holder')
        return true
      } catch (e) {
        console.log(e)
        return false
      }
    },
    setLoaderInterval(timeout = 150) {
      this.$options.loaderInterval = setInterval(() => {
        this.currentPartsCount++
  
        const loaderPercent = Math.floor(this.currentPartsCount / this.$options.loaderPartsCount * 100)
  
        let newTimeout = timeout
        if (loaderPercent > 90) {
          newTimeout = null
        } else if (loaderPercent > 80) {
          newTimeout = 1500
        } else if (loaderPercent > 60) {
          newTimeout = 500
        } else if (loaderPercent > 40) {
          newTimeout = 350
        }
  
        if (loaderPercent > 40 && (this.isSuccess || this.isFail)) {
          setTimeout(this.proceedAfterVerification, 2000)
          this.showResult = true
          newTimeout = null
          this.currentPartsCount = this.$options.loaderPartsCount
        }
  
        clearInterval(this.$options.loaderInterval)
  
        if (newTimeout) {
          this.setLoaderInterval(newTimeout)
        }
      }, timeout)
    },
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/VerificationPage.scss";
</style>

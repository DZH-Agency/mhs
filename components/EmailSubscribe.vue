<template>
  <div class="wrapper es-wrapper">
    <div class="container">
      <section class="es">
        <div class="es-hat">
          <img src="/img/email-bell.png" alt="email-bell.png" class="es-hat__email-bell-icon">
        </div>
        <h2 class="es__title">
          Don't miss out on exclusive&nbsp;
          <strong class="text-purple-gradient">updates & surprises:</strong>
        </h2>
        <template v-if="!isSubscribed">
          <section class="es-input">
            <input v-model="email" class="es-input__sing-up-input" placeholder="email@example.com" type="text">
<!--            TODO remove false and parenthesis-->
            <button :disabled="false && (!isEmailValid || !email)" class="btn es-input__sing-up-button" @click="subscribe">Sign Up</button>
          </section>
          <section class="es-errors">
            <span class="es-errors__error" v-if="!isEmailValid">Email is invalid</span>
            <span class="es-errors__error" v-if="error">{{ error }}</span>
          </section>
        </template>

        <section class="es-success" v-else>
          <button class="btn es-success__back-button" @click="goBack">Back</button>
          <button class="btn es-success__resent-button">Resend email</button>
          <p class="es-success__text">Check verifying link at your email and press to verify</p>
          <button class="btn es-success__have-button">I have verified email</button>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmailSubscribe",
  data() {
    return {
      isSubscribed: true,
      error: '',
      email: ''
    }
  },
  computed: {
    isEmailValid() {
      if (!this.email) {
        return true
      }

      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(this.email)
    }
  },
  methods: {
    async subscribe() {
      // TODO add real logic
      // this.error = this.error ? '' : 'Something went wrong'
      this.isSubscribed = true
      this.email = ''
    },
    goBack() {
      this.isSubscribed = false
      this.error = ''
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/components/EmailSubscribe.scss";
</style>

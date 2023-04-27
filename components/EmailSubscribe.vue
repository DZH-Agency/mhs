<template>
  <div class="wrapper es-wrapper">
    <div class="container">
      <section class="es">
        <div id="mc_embed_signup">
          <div class="img-mail">
            <img alt="email" src="/img/email-bell.png">
          </div>
          <form action="https://quantumfrenzy.us12.list-manage.com/subscribe/post?u=0c1629645f61b5329a5152695&amp;id=07d69a8e8a&amp;f_id=00fa41e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">
              <h2>Don't miss out on exclusive <span>updates & surprises:</span></h2>
              <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
              <div class="mc-field-group">
                <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
                </label>
                <input placeholder="Enter your email" type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
                <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
              </div>
              <div id="mce-responses" class="clear">
                <div class="response" id="mce-error-response" style="display:none"></div>
                <div class="response" id="mce-success-response" style="display:none"></div>
              </div>
              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_0c1629645f61b5329a5152695_07d69a8e8a" tabindex="-1" value=""></div>
              <div class="clear"><input type="submit" value="Sign Up" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
            </div>
          </form>
          <svg width="1391" height="555" viewBox="0 0 1391 555" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_344_575)">
              <path d="M1236.07 112.069C1182.65 211.769 1044.93 473.786 882.132 386.557C719.339 299.329 100.122 452.777 153.543 353.077C106.854 34.9121 566.324 48.769 729.117 135.998C891.91 223.226 1289.49 12.3695 1236.07 112.069Z" fill="url(#paint0_linear_344_575)" fill-opacity="0.3"/>
            </g>
            <defs>
              <filter id="filter0_f_344_575" x="0.229858" y="-67.6182" width="1390.74" height="621.68" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_344_575"/>
              </filter>
              <linearGradient id="paint0_linear_344_575" x1="1143.05" y1="229.576" x2="162.58" y2="264.593" gradientUnits="userSpaceOnUse">
                <stop stop-color="#00A79D"/>
                <stop offset="0.703125" stop-color="#8C41CE"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <script type='text/javascript' id="mc-validate" src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
        <script type="text/javascript">
          document.querySelector('#mc-validate').addEventListener('load', function() {
            window.mc.ajaxOptions.success = function(resp) {
              window.mc.mce_success_cb(resp)

              if (resp.result === 'success') {
                localStorage.setItem('email-subscribed', '1')
              }
            }
          })
        </script>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmailSubscribe",
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/components/EmailSubscribe.scss";
</style>

<style type="text/css">
@import "//cdn-images.mailchimp.com/embedcode/classic-071822.css";

#mc_embed_signup{
  background: RGBA(7,7,7,0.16);
  border: solid #FFF 1px;
  clear:left;
  padding: 3rem;
  margin-top: 6rem;
  border-radius: 46px;
}
#mc_embed_signup svg{
  width: 82%;
  z-index: -1;
  top: -28px;
  position: absolute;
}

#mc_embed_signup h2{
  font-size: 36px;
  font-weight: 700;
  color: #FFF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0px 0 26px 0;
}
#mc_embed_signup h2 span{
  background: linear-gradient(90deg, rgba(0,167,157,1) 0%, rgba(140,65,206,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
#mc_embed_signup form {
  text-align: center;
  margin: 0px;
  font-family: 'Urbanist', sans-serif;
}
#mc_embed_signup .mc-field-group {
  width: 100%;
  padding-bottom: 0;
}
#mc_embed_signup img {
  width: 129px;
  height: 85px;
  position: absolute;
  display: inline-block;
  top: -98px;
  margin-left: -4%;
  text-align: center;
}
#mc_embed_signup #mce-success-response {
  float: left;
  margin: 0em 0;
  padding: 0.6em 0.5em 0.5em 0;
  text-align: left;
}
#mc_embed_signup div#mce-responses {
  margin: 0 1%;
  text-align: left;
}
#mc_embed_signup .mc-field-group label {
  display: none;
}
#mc_embed_signup .indicates-required {
  display: none;
}
#mc_embed_signup .helper_text {
  display: none;
}
#mc_embed_signup .mc-field-group input {
  padding: 16px 0;
  border: solid 2px #8C41CE;
  background: RGBA(0,0,0,0.36);
  border-radius: 82px;
  width: 70%;
  float: left;
  color: #FFF;
  font-family: 'Urbanist', sans-serif;
  font-weight: 500;
  font-size: 18px;
  display: inline-block;
}
.img-mail {
  text-align: center;
  position: relative;
}
#mc_embed_signup .button {
  background: none;
  border: solid 2px #8C41CE;
  border-radius: 86px;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 700;
  height: 58px;
  position: absolute;
  line-height: 32px;
  margin: 0 0px 0px 0;
  padding: 0 22px;
  right: 0;
  top: 69px;
  width: 26%;
  float: right;
}
#mc_embed_signup .button:hover {
  background: #8C41CE;
}

#mc_embed_signup #mc-embedded-subscribe-form div.mce_inline_error {
  background-color: RGBA(0,0,0,0);
  text-align: left;
  margin: 2px 0 0em 0;
}

@media screen and (max-width: 960px) {
  #mc_embed_signup .button {
    width: 100%;
    font-size: 16px;
    height: 52px;
    position: relative;
    margin: 16px 0px 0px 0;
    padding: 0 22px;
    float: none;
    top: 0;
    max-width: 200px;
  }
  #mc_embed_signup .mc-field-group input {
    width: 100%;
    font-size: 16px;
    display: block;
    float: none;
  }
  #mc_embed_signup {
    height: auto;
    padding: 2rem;
  }
  #mc_embed_signup h2{
    font-size: 24px;
    line-height: 28px;
  }
  #mc_embed_signup img {
    margin-left: -11%;
  }
}
</style>

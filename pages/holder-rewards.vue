<template>
  <div class="holder-wrapper">
    <portal-target name="app"/>
    <top-nav-bar/>
    
    <div class="rewards-wrapper">
      <div class="container">
        <section class="rewards">
          <h1 class="rewards__title">Holder <strong class="text-purple-gradient">Rewards</strong></h1>
          
          <section class="rewards-content">
            <section class="rewards-content-frame">
              <img src="/img/holder-rewards/rewards-hares.png" alt="hares" class="rewards-content-frame__hares">
              <i class="rewards-content-frame__point left"></i>
              <i class="rewards-content-frame__point right"></i>
            </section>
            <section class="rewards-content-text">
              <p class="rewards-content-text__paragraph">
                Our first Loyalty Rewards Program for <span class="purple">PsychoKitties</span>, <span class="purple">Mad Hares</span> and <span class="purple">GenQ babies</span> started with the launch of PsychoKitties collection at the end of 2021 and ended on 28th of May, 2023. Every holder who held those NFTs during the period accumulated daily points for each NFT. These points will be converted to <span class="purple">$QTM</span> tokens at a meaningful & balanced ratio determined by an algorithm.
              </p>
              <p class="rewards-content-text__paragraph">
                Further information about points-to-token conversion & other related updates will come via email in due time. Should our legal department need any additional information from you to facilitate the token claim, we’ll notify you at least 2 weeks a head of time. Members who fail to provide required information in time, will not qualify for token rewards.
              </p>
            </section>
          </section>
        </section>
      </div>
    </div>
    
    <the-footer/>
  </div>
</template>

<script>
export default {
  name: 'holder-rewards',
}
</script>

<style scoped lang="scss">
.rewards {
  
  &-wrapper {
    padding-top: 60px;
    padding-bottom: 100px;
    flex: 1 1 auto;
    position: relative;
    z-index: 1;
    
    @media (max-width: 1200px) {
      padding-bottom: 75px;
      padding-top: 24px;
    }
  }
  
  &__title {
    font-family: 'Urbanist', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 68px;
    line-height: 130%;
    text-align: center;
    color: #FAFAFA;
    
    @media (max-width: 1200px) {
      font-size: 36px;
      line-height: 120%;
      margin-bottom: 32px;
    }
  }
  
  &-content {
    display: grid;
    grid-template-columns: 1fr 489px;
    grid-column-gap: 32px;
    align-items: center;
    
    @media (max-width: 1200px) {
      grid-template-columns: 1fr;
      grid-row-gap: 50px;
    }
    
    &-frame {
      position: relative;
      z-index: 1;
      
      &::after {
        content: '';
        position: absolute;
        width: 60%;
        height: 90%;
        left: 50%;
        top: 50%;
        translate: -50% -50%;
        background: linear-gradient(180deg, rgba(0, 167, 157, 0.5) 0%, rgba(140, 65, 206, 0.5) 100%);
        filter: blur(70px);
        z-index: -1;
        border-radius: 50%;
      }

      &__hares {
        width: 100%;
        object-fit: cover;
      }
      
      &__point {
        background: linear-gradient(180deg, #00A79D 0%, #8C41CE 100%);
        position: absolute;
        border-radius: 50%;
        z-index: 1;
        
        &.left {
          width: 55px;
          height: 55px;
          left: 46px;
          bottom: -10px;
          
          @media (max-width: 1200px) {
            width: 32px;
            height: 32px;
            left: 0;
            bottom: 0;
          }
        }
        
        &.right {
          width: 78px;
          height: 78px;
          top: 56px;
          right: 42px;
          
          @media (max-width: 1200px) {
            width: 48px;
            height: 48px;
            right: 0;
            top: 0;
          }
        }
      }
    }
    
    &-text {
      display: grid;
      row-gap: 1em;
      font-weight: 600;
      font-size: 18px;
      color: #FFFFFF;
      
      &__paragraph {
        line-height: 130%;
        
        .purple {
          color: #FF01F9;
        }
      }
    }
  }
}
</style>

<template>
  <div class="artist-wrapper">
    <div class="container">
      <div class="artist">
        <h2 class="artist__heading">Our <span class="text-purple-gradient">Artist</span></h2>
        <div class="artist-content">
          <div class="artist-left">
            <div class="artist-left-img">
              <a href="https://www.instagram.com/darealgenius/" target="_blank" class="artist-left__instagram">
                <img src="/OurArtist/Instagram.svg" alt="instagram">
              </a>
              <img class="artist-left__img" src="/OurArtist/artist.png" alt="artist"/>
            </div>
            <a href="https://www.instagram.com/darealgenius/" target="_blank" class="btn vsm artist-left__btn">
              <span class="text-purple-gradient">@darealgenius</span>
              <img src="/OurArtist/arrow.png" alt="arrow">
            </a>
          </div>
          <div class="artist-right">
            <p class="artist__text">
              <span class="text-purple-gradient">DaRealGenius aka Nelson J. Madera</span> is an established NFT artist, the Creative Director of the "Mad Hare Society" collection and a renowned graphic illustrator from Puerto Rico who has been commissioned by latin music artists such as Don Omar, Farruko, Nicky Jam, Ñengo Flow, Ivy Queen and Rauw Alejandro.
              <br>
              <br>
              He started drawing at the age of 5, always trying to create art with anything he could get his hands on. DaRealGenius graduated from Arts High School in Newark NJ, known for its esteemed graduates such as graphic artist Paul Bacon, actors Michael B. Jordan and Tisha Campbell.
              <br>
              <br>
              After drawing on paper and painting on canvas for many years, Nelson decided to teach himself graphic design by creating club flyers and eventually logos for local companies. He eventually purchased an iPad Pro and fell in love with creating digital art. Illustrating book covers and working on animated music videos has been one of his greatest accomplishments.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurArtist'
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/components/OurArtist.scss";
</style>

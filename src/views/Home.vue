<style lang="scss">
    @media only screen and (min-width: 500px) {
        .landing_box {
          margin-top: 250px
        }
    }
    @media only screen and (min-width: 1150px) {
      .landing_info_small {
        transform: translateY(-125px);
      }
    }
</style>

<template>
    <div class="mx-0 my-0">
      <Landing />
      <v-container class="landing_box">
        <LandingBox />
      </v-container>
      <LandingInfoBoxes />
      <LandingQuotesSlider />
      <!-- <LandingSlider class="mt-10"/> -->
      <v-container>
        <LandingNfoBoxes />
      </v-container>
      <LandingInfo class="mt-10"/>
      <LandingInfoSmall 
      @openForm="contactForm" 
      class="landing_info_small my-0"
      @userType="typeUser"
      />
    </div>
</template>

<script>
import Landing from '@/components/home/Landing'
import LandingBox from '@/components/home/LandingBox'
import LandingInfoBoxes from '@/components/home/LandingInfoBoxes'
// import LandingSlider from '@/components/home/LandingSlider'
import LandingInfo from '@/components/home/LandingInfo'
import LandingInfoSmall from '@/components/home/LandingInfoSmall'
import LandingQuotesSlider from '@/components/home/LandingQuotesSlider'
import LandingNfoBoxes from '@/components/home/LandingNfoBoxes'

export default {
  name: 'Home',
  components: {
    Landing,
    LandingBox,
    LandingInfoBoxes,
    // LandingSlider,
    LandingInfo,
    LandingInfoSmall,
    LandingQuotesSlider,
    LandingNfoBoxes,
  },
  data() {
    return {
      aws_url: process.env.AWS_URL,
    }
  },
  methods: {
      contactForm(data) {
          this.$emit('openForm', data)
      },
      typeUser(data) {
        this.$emit('userForm', data)
      } 
  },
  metaInfo() {
        return {
            title: `Flaster | Provozajte svoj brend`,
            meta: [
                { name: 'description', content: 'Omnichannel platforma koja povezuje sve prednosti pokretnog oglašavanja brendova i digitalnogremarketinga s vozačima koji žele dodatno zaraditi.'},
                { property: 'og:title', content: 'Flaster | Provozajte svoj brend'},
                { property: 'og:site_name', content: 'Flaster | Provozajte svoj brend'},
                { property: 'og:description', content: 'Omnichannel platforma koja povezuje sve prednosti pokretnog oglašavanja brendova i digitalnogremarketinga s vozačima koji žele dodatno zaraditi.'},
                {property: 'og:type', content: 'website'},
                {property: 'og:url', content: `${process.env.VUE_APP_URL}`},
                {property: 'og:image', content:`/${process.env.VUE_APP_URL}/main.jpg` }    
            ]
        }
    },
}
</script>

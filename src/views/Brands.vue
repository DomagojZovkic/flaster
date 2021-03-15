<style lang="scss">
    @media only screen and (min-width: 500px) {
        .landing_box {
          margin-top: 250px
        }
    }
    @media only screen and (min-width: 1200px) {
      .landing_info_small_brands {
        transform: translateY(-200px);
      }
    }
</style>

<template>
    <div>
        <Landing />
        <v-container>
            <LandingBox 
            @openModal="contactForm"
            @userType="typeUser"
            />
        </v-container>
        <v-container>
            <LandingNfoBoxes />
        </v-container>
            <LandingSlider />
        <v-container>
            <LandingCarSlider />
        </v-container>
        <!-- <LandingQuotesSlider /> -->
        <!-- <LandingBoxes /> -->
        <v-container>
            <ExtensionTabs 
            @openModal="contactForm"
            @userType="typeUser"
             />
        </v-container>
        <LandingInfo 
        @openModal="contactForm"
        @userType="typeUser"
        />
        <LandingInfoSmall  
        @openModal="contactForm"
        @userType="typeUser"  
        class="landing_info_small_brands my-0"/>
    </div>
</template>

<script>
import Landing from '@/components/brands/Landing'
import LandingBox from '@/components/brands/LandingBox'
import LandingNfoBoxes from '@/components/brands/LandingNfoBoxes'
import LandingSlider from '@/components/brands/LandingSlider'
import LandingCarSlider from '@/components/brands/LandingCarSlider'
// import LandingQuotesSlider from '@/components/brands/LandingQuotesSlider'
import ExtensionTabs from '@/components/brands/ExtensionTabs'
import LandingInfo from '@/components/brands/LandingInfo'
import LandingInfoSmall from '@/components/brands/LandingInfoSmall'
// import LandingBoxes from '@/components/brands/LandingBoxes'

export default {
    components: {
        Landing,
        LandingBox,
        LandingNfoBoxes,
        LandingSlider,
        LandingCarSlider,
        // LandingQuotesSlider,
        ExtensionTabs,
        LandingInfo,
        LandingInfoSmall,
        // LandingBoxes
    },
    data() {
    return {
      aws_url: process.env.AWS_URL,
    }
  },
  methods: {
      contactForm(data) {
          this.$emit('openModal');
      },
      typeUser(data) {
        this.$emit('userForm', data)
      } 
  },
  metaInfo() {
        return {
            title: `Flaster | Provozajte svoj brend`,
            meta: [
                { name: 'description', content: 'Vaša reklama u vožnji najposjećenijim lokacijama u gradu. Digitalni remarketing usmjeren na osobe koje su bile u kontaktu s reklamom.'},
                { property: 'og:title', content: 'Flaster | Provozajte svoj brend'},
                { property: 'og:site_name', content: 'Flaster | Provozajte svoj brend'},
                { property: 'og:description', content: 'Vaša reklama u vožnji najposjećenijim lokacijama u gradu. Digitalni remarketing usmjeren na osobe koje su bile u kontaktu s reklamom.'},
                {property: 'og:type', content: 'website'},
                {property: 'og:url', content: `${process.env.VUE_APP_URL}/brands`},
                {property: 'og:image', content:`/${process.env.VUE_APP_URL}/main.jpg` }    
            ]
        }
    },
}
</script>
<style lang="scss">
    @media only screen and (min-width: 500px) {
        .landing_box {
          margin-top: 250px
        }
    }
    @media only screen and (min-width: 1200px) {
      .landing_info_small_drivers {
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
        <v-container>
            <LandingCarSlider />
        </v-container>
        <v-container>
            <DownloadManual />
        </v-container>
        <v-container>
            <ExtensionTabs @openModal="contactForm"/>
        </v-container>
        <LandingInfo 
        @openModal="contactForm"
        @userType="typeUser"
        />
        <LandingInfoSmall 
        @openModal="contactForm"
        @userType="typeUser" 
        class="landing_info_small_drivers my-0"/>
    </div>
</template>

<script>
import Landing from '@/components/drivers/Landing'
import LandingBox from '@/components/drivers/LandingBox'
import LandingNfoBoxes from '@/components/drivers/LandingNfoBoxes'
import LandingCarSlider from '@/components/drivers/LandingCarSlider'
import DownloadManual from '@/components/drivers/DownloadManual'
import ExtensionTabs from '@/components/drivers/ExtensionTabs'
import LandingInfo from '@/components/drivers/LandingInfo'
import LandingInfoSmall from '@/components/drivers/LandingInfoSmall'

export default {
    components: {
        Landing,
        LandingBox,
        LandingNfoBoxes,
        LandingCarSlider,
        DownloadManual,
        ExtensionTabs,
        LandingInfo,
        LandingInfoSmall
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
            title: `Flaster | Zaradite novac oglašavanjem na svom vozilu`,
            meta: [
                { name: 'description', content: 'Flaster povezuje kreativne brendove s vozačima koji su svakodnevno na cesti i žele dodatno zaraditi.'},
                { property: 'og:title', content: 'Flaster | Zaradite novac oglašavanjem na svom vozilu'},
                { property: 'og:site_name', content: 'Flaster | Zaradite novac oglašavanjem na svom vozilu'},
                { property: 'og:description', content: 'Flaster povezuje kreativne brendove s vozačima koji su svakodnevno na cesti i žele dodatno zaraditi.'},
                {property: 'og:type', content: 'website'},
                {property: 'og:url', content: `${process.env.VUE_APP_URL}/drivers`},
                {property: 'og:image', content:`/${process.env.VUE_APP_URL}/main.jpg` }    
            ]
        }
    },
}
</script>
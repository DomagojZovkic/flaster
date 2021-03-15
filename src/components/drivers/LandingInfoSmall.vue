<style lang="scss">
    .landing_info_small_drivers_wrapper {
        text-align: center;
        .info_title {
            font-weight: 800;
            font-size: 50px;
            line-height: 70px;
            color: #FFFFFF;
        }
        .info_subtitle {
            font-weight: 800;
            font-size: 24px;
            line-height: 70px;
            color: #FFFFFF;
            text-align: center;
        }
        .v-image__image {
            background-size: unset !important;
        }
    }
    @media only screen and (min-width: 1320px) {
        .landing_info_small_drivers_wrapper{
             float: right;
         }
     }
     @media only screen and (min-width: 1440px) {
         .landing_info_small_drivers_wrapper {
             text-align: left !important;
             padding-left: 200px;
             padding-top: 130px;
             h5 {
                line-height: 50px;
                font-size: 30px !important;
            }
            .info_subtitle {
                padding-left: 0px !important;
                margin-top: 80px;
            }
            .info_row {
                height: auto !important;
            }
         }
     }
</style>

<template>
    <v-img :src="require(`@/assets/brands_info_small_bg.svg`)" max-width="1327px" cover class="landing_info_small_drivers_wrapper">
    <v-row align="center" style="height: 100%;" class="info_row">
        <v-col cols="12">
            <h5 style="font-family: 'Inter', sans-serif !important;" class="info_subtitle">Za sva pitanja, ideje ili ponude <a :href="void(0)" @click="contactForm" style="color: #E3B505; text-decoration:underline">kontaktirajte Flaster tim.</a></h5>
        </v-col>
    </v-row>
    </v-img>
</template>

<script>

export default {
    methods: {
        contactForm() {
            this.$emit('openModal');
            this.$emit('userType', 'global')
        }
    }
}
</script>
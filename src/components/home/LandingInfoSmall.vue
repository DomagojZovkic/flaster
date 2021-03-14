<style lang="scss">
    .landing_info_img {
        .v-image__image {
            background-size: unset !important;
        }
        .info_text {
            padding: 40px;
            h3 {
                text-align: center;
                font-size: 24px;
            }
        }
    }
    @media only screen and (min-width: 1350px) {
        .landing_info_small {
            .v-image__image {
                background-size: cover !important;
            }
        }
    }
    @media only screen and (min-width: 1440px) {
            .landing_info_img {
                .v-image__image {
                    background-size: cover !important;
                }
                .info_text {
                    padding: 40px;
                    h3 {
                        text-align: right;
                        font-size: 30px;
                    }
                }
            }
        }
</style>

<template>
    <v-img :src="require('@/assets/landing_info_bg_small.svg')" width="100%" cover class="landing_info_img">
        <v-row align="center" justify="center" style="height:90%;">
            <v-col cols="12" xs="12" md="12" lg="12">
                    <v-container class="info_text">
                        <h3 class="mr-7" style="font-family: 'Inter', sans-serif !important;font-weight: 800;color: #670A4A;">Za sva pitanja, ideje ili ponude <a :href="void(0)" @click="contactForm" style="color: #FFF; text-decoration:underline">kontaktirajte Flaster tim.</a></h3>
                    </v-container>
            </v-col>
        </v-row>
    </v-img>
</template>

<script>

export default {
    data() {
        return {
            openDIalog: false
        }
    },
    methods: {
        openDialog() {
            return this.openDIalog =! this.openDIalog 
        },
        contactForm() {
            this.$emit('openForm', this.openDialog())
            this.$emit('userType', 'global')
        }
    }
}
</script>
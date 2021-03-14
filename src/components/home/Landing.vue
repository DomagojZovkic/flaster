<style lang="scss">
        .landing_title, .landing_subtitle {
            text-align: center;
            display: block !important;
        }
        .landing_title {
            font-size: 40px !important;
            line-height:60px !important;
        }
        .landing_subtitle {
            line-height:40px !important;
        }
        .landing_bg_img {
            .v-image__image {
                background-size: unset !important;
            }
        }
        .landing_car {
            position: absolute;
            top:65%;
            z-index: 2;
        }
        .animated_svg {
            //display: none;
            position: absolute;
            z-index: 0;
            top: 10px;
            right: 0;
            width: 100%;
            svg {
                width: 100%;
            }
        }
        @media only screen and (min-width: 768px) {
        .landing_car {
            top:50%;
        }
    }
    @media only screen and (min-width: 1024px) {
        .landing_car {
            top:50%;
            left: 100px;
        }
    }
    @media only screen and (min-width: 1440px) {
        .landing_car {
            top: calc(0% + 200px);
            left: calc(50% - 250px);
        }
    }
    @media only screen and (min-width: 1440px) {
        .landing_title, .landing_subtitle {
            text-align: left;
            display: flex !important;
        }
        .landing_title {
            font-size: 70px !important;
            line-height:90px !important;
        }
        .landing_bg_img {
            .v-image__image {
                //background-size: cover !important;
                background-repeat: repeat-x;
            }
        }
        .animated_svg {
            display: block;
            position: absolute;
            z-index: 0;
            top: 40px;
            right: 0;
        }
        @media only screen and (min-width: 2560px) {
            .animated_svg {
            right: -500px;
            }
        }
    }
</style>

<template>
    <v-card 
    height="500px"
    class="rounded-0"
    style="position: relative"
    v-resize="onResize"
    >
        <v-img 
        :lazy-src="require('@/assets/landing_bg.jpg')"
        :src="require('@/assets/landing_bg.jpg')" width="100%" height="500px" class="landing_bg_img" cover>
            <template v-slot:placeholder>
                <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
                >
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
            </template>
            <div style="max-width: 1440px; margin: 0 auto">
                <v-card-subtitle class="white--text mt-0 mt-md-10 ml-md-0 landing_subtitle" style="font-family: 'Inter', sans-serif !important;font-size: 22px;font-weight: 600;">
                UOČLJIVO <span style="color: #E3B505;">-</span> PAMTLJIVO <span style="color: #E3B505;">-</span> PRISTUPAČNO
                </v-card-subtitle>
                <v-card-title class="white--text mt-0 mt-md-10 ml-md-0 landing_title" style="font-family: 'Inter', sans-serif !important;font-weight: 900;word-break:break-word;">
                    Provozajte svoj brend
                </v-card-title>
            </div>
        </v-img>
        <v-img 
        :lazy-src="require('@/assets/landing_car.png')"
        :src="require('@/assets/landing_car.png')" max-width="1000px" width="100%" max-height="500px" cover class="landing_car float-left"/>
        <AnimatedSvg 
        :animation="animated"
        class="animated_svg"/>
    </v-card>
</template>

<script>
import AnimatedSvg from '@/components/home/AnimatedSvg'

export default {
    components: {
        AnimatedSvg
    },
    data() {
        return {
            animated: false
        }
    },
    methods: {
        animatedSvg() {
            if (window.innerWidth < 768) {
                 this.animated = false
             } else {
                 this.animated = true
             }
        },
        onResize() {
             this.animatedSvg()
        }
    },
    created() {
        this.animatedSvg()
    }   
}
</script>


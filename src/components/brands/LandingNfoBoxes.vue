<style lang="scss">
    .landing_slider_wrapper_brands {
        text-align: center;
        h3 {
            font-weight: 800;
            font-size: 30px;
            line-height: 73px;
            color: #670A4A;
        }
        .slide_card_brands {
            box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            margin-bottom: 80px;
            padding-top: 0px !important;
        }
        .slide_card_brands_title {
            font-weight: 800;
            font-size: 20px;
            padding-top: 49px !important;
            padding-bottom: 20px !important;
            line-height: 29px;
            color: #670A4A;
            word-break: break-word;
        }
        .slide_card_brands_text {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #000000;
            padding-bottom: 60px;
        }
    }
    @media only screen and (min-width: 600px) {
        .slide_card_brands {
            padding: 0px;
            box-sizing: border-box;
            margin-bottom: 40px !important;
        }
    }
    @media only screen and (min-width: 1440px) {
        .slide_card_brands {
            min-height: 450px;
        }
    }
</style>

<template>
    <v-row class="landing_slider_wrapper_brands mx-auto" justify="center">
        <v-col cols="12">
            <h3 style="font-family: 'Inter', sans-serif !important;">Kako  Flaster funkcionira?</h3>
        </v-col>
        <v-col cols="10" sm="6" md="6" lg="3" v-for="slide in sliderData" :key="slide.index">
            <v-card
            max-width="450px"
            width="100%"
            class="mx-auto slide_card_brands"
            >
                <v-img :src="require(`@/assets/${slide.img}`)" width="100%" cover/>
                <v-card-title style="font-family: 'Inter', sans-serif !important;display:block;" class="slide_card_brands_title">{{slide.title}}</v-card-title>
                <v-card-text style="font-family: 'Inter', sans-serif !important;" class="slide_card_brands_text">{{slide.text}}</v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
            sliderData: [
                {
                    img: 'slide1_brands.jpg',
                    title: 'Razumijevanje želja',
                    text: 'Određivanje ciljeva, trajanja i geografskog područja dogovorene kampanje.',
                    index: 0
                },
                {
                    img: 'slide2_brands.jpg',
                    title: 'Prilagodba kampanje',
                    text: 'Savjetima do kreativnog rješenja: broj i vrsta vozila te načini obljepljivanja.',
                    index: 1
                },
                {
                    img: 'slide3_drivers.jpg',
                    title: 'Reklama u pokretu',
                    text: 'Priprema kreativnih premium materijala i obljepljivanje odabranih vozila.',
                    index: 2
                },
                {
                    img: 'slide4_brands.jpg',
                    title: 'Analiza i retargetiranje',
                    text: 'Izvještaji o ključnim parametrima u vožnji i digitalni retargeting ciljane publike.',
                    index: 3
                },
            ]
        }
    }    
}
</script>
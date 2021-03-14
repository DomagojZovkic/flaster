<style lang="scss">
    .landing_slider_wrapper_home {
        text-align: center;
        h3 {
            font-weight: 800;
            font-size: 30px;
            line-height: 73px;
            color: #670A4A;
        }
        .slide_card_home {
            box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1) !important;
            border-radius: 10px;
            margin-bottom: 80px;
            padding-top: 0px !important;
        }
        .slide_card_brands_title {
            font-weight: 800;
            font-size: 20px;
            padding-top: 49px;
            padding-bottom: 20px;
            line-height: 29px;
            color: #670A4A;
            word-break: break-word;
            display: block;
        }
        .slide_card_brands_text {
            font-weight: normal;
            font-size: 16px;
            line-height: 24px;
            color: #000000;
            padding-bottom: 80px;
        }
    }
    @media only screen and (min-width: 600px) {
        .slide_card_home {
            padding: 20px 0;
            box-sizing: border-box;
            margin-bottom: 40px;
            min-height: 480px;
            margin-bottom: 40px !important;
            .slide_card_brands_text {
                padding-bottom: 0px;
            }
        }
    }
</style>

<template>
    <v-row class="landing_slider_wrapper_home" justify="center">
        <v-col cols="12">
            <h3 style="font-family: 'Inter', sans-serif !important;">Kako Flaster funkcionira?</h3>
        </v-col>
        <v-col cols="10" sm="6" md="6" lg="3" v-for="slide in sliderData" :key="slide.index">
            <v-card
            flat
            max-width="450px"
            width="100%"
            class="mx-auto slide_card_home"
            >
                <v-img :src="require(`@/assets/${slide.img}`)" width="100%" cover/>
                <v-card-title style="font-family: 'Inter', sans-serif !important;" class="slide_card_brands_title">{{slide.title}}</v-card-title>
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
                    img: 'slide1_drivers.jpg',
                    title: 'Prilagodba kampanje',
                    text: 'Flaster tim vas savjetuje o broju i vrsti vozila te načinima obljepljivanja.',
                    index: 0
                },
                {
                    img: 'slide3_brands.jpg',
                    title: 'Flaster naljepnice',
                    text: 'Priprema kreativnih i kvalitetnih naljepnica te usluge obljepljivanja vozila.',
                    index: 1
                },
                {
                    img: 'slide3_drivers.jpg',
                    title: 'Reklama u pokretu',
                    text: 'Flaster aplikacija prati kretanje automobila i prikuplja relevantne podatke.',
                    index: 2
                },
                {
                    img: 'slide4_brands.jpg',
                    title: 'Analiza i remarketing',
                    text: 'Analiza promatranih parametara i digitalni retargeting ciljane publike.',
                    index: 3
                },
            ]
        }
    }    
}
</script>
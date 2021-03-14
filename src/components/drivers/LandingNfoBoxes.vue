<style lang="scss">
    .landing_slider_wrapper_drivers {
        text-align: center;
        h3 {
            font-weight: 800;
            font-size: 30px;
            line-height: 73px;
            color: #670A4A;
        }
        .slide_card_drivers {
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
            padding-bottom: 60px;
        }
    }
    @media only screen and (min-width: 600px) {
        .slide_card_drivers {
            padding: 0px;
            box-sizing: border-box;
            margin-bottom: 40px !important;
        }
    }
    @media only screen and (min-width: 1440px) {
        .slide_card_brands {
            min-height: 450px;
        }
        .slide_card_brands_text {
            padding-bottom: 60px;
        }
    }
</style>

<template>
    <v-row class="landing_slider_wrapper_drivers" justify="center">
        <v-col cols="12">
            <h3 style="font-family: 'Inter', sans-serif !important;">Kako Flaster funkcionira?</h3>
        </v-col>
        <v-col cols="10" sm="6" md="6" lg="3" v-for="slide in sliderData" :key="slide.index">
            <v-card
            flat
            max-width="450px"
            width="100%"
            class="mx-auto slide_card_drivers"
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
                    title: 'Flaster vozač',
                    text: 'Ispunite online prijavu s podacima o vozilu i vlastitim dnevnim kretanjima.',
                    index: 0
                },
                {
                    img: 'slide2_drivers.jpg',
                    title: 'Pronalazak kampanje',
                    text: 'Flaster pronalazi idealnu kampanju za vašu dnevnu rutinu, vrstu i boju vozila.',
                    index: 1
                },
                {
                    img: 'slide4_drivers.jpg',
                    title: 'Obljepljivanje vozila',
                    text: 'Flaster tim lijepi kvalitetne i uklonjive folije koje neće oštetiti lak na vašem vozilu.',
                    index: 2
                },
                {
                    img: 'slide3_drivers.jpg',
                    title: 'Vožnjom do zarade',
                    text: 'Najjednostavniji put do zarade – upalite aplikaciju i krenite u svoju uobičajenu vožnju.',
                    index: 3
                },
            ]
        }
    }    
}
</script>
<style lang="scss">
    .landing_slider_quotes_img_wrapper {
        height: 100%;
    }
    .landing_slider_quotes_wrapper_brands {
        text-align: center;
        height: 100%;
        .VueCarousel-dot-container {
            button {
                outline: unset !important;
            }
        }
        .VueCarousel-slide {
            width: 100%;
            .quotes_card {
                background-color:unset;
                .quote_name {
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 50px;
                    text-align: center;
                }
                .quote_quote {
                    font-weight: 700;
                    font-size: 30px;
                    line-height: 50px;
                    padding: 20px;
                    box-sizing: border-box;
                }
            }
        }
        .VueCarousel-dot-container {
            .VueCarousel-dot {
                width: 16px !important;
                height: 16px !important;
                background-color: white !important;
                border-radius: 100px !important;
            }
            .VueCarousel-dot--active {
                width: 40px !important;
                height: 16px !important;
                background-color: #E3B505 !important;
                border-radius: 20px !important;
            }
        }
    }
    @media only screen and (min-width: 1270px) {
        .landing_slider_quotes_img_wrapper {
            height: 500px;
        }
        .landing_slider_quotes_wrapper_brands {
            text-align: left;
            .quotes_wrapper {
                transform: translateY(50px);
            }
            .quotes_card {
                margin-top: 100px;
            }
        }
    }
</style>


<template>
    <v-img :src="require(`@/assets/info_bg_large.png`)" width="100%" cover class="landing_slider_quotes_img_wrapper">
        <v-row class="landing_slider_quotes_wrapper_brands" align="top">
                <v-col cols="12" xs="12" md="12" lg="12">
                    <carousel 
                    :navigationEnabled="true"
                    :perPageCustom="[[320, 1]]"
                    class="qoutes_wrapper"
                    :autoplay="true"
                    :loop="true"
                    :autoplayTimeout="7000"
                    >
                        <slide v-for="slide in sliderData" :key="sliderData.indexOf(slide)">
                            <v-card
                            class="mx-auto quotes_card"
                            max-width="839px"
                            width="100%"
                            style="box-shadow:unset"
                            >
                            <v-row align="center" justify="center">
                                <v-col cols="12" xs="12" md="12" lg="3">
                                    <v-img :src="require(`@/assets/${slide.img}`)" width="100px" height="100px" cover class="mx-auto mb-10" style="border-radius:50%;border: 2px solid #B11F84;"/>
                                    <p class="quote_name white--text" style="font-family: 'Inter', sans-serif !important;">{{slide.name}}</p>
                                </v-col>
                                <v-col cols="12" xs="12" md="12" lg="9">
                                    <p class="quote_quote white--text" style="font-family: 'Inter', sans-serif !important;">{{slide.quote}}</p>
                                </v-col>
                            </v-row>
                            </v-card>
                        </slide>
                    </carousel>
                </v-col>
        </v-row>
    </v-img>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    components: {
        Carousel,
        Slide
    },
    data() {
        return {
            sliderData: [
                {
                    img: 'Avatar_1.png',
                    name: 'Ivana',
                    quote: '“Flaster omogućuje brendovima da se brzo prilagode tržištu na način koji do sada nije bio poznat.”'
                },
                {
                    img: 'Avatar_2.jpg',
                    name: 'Marta',
                    quote: '“Flaster je budućnost! Suvremen pristup marketingu koji omogućuje komunikaciju brenda s publikom.”'
                },
                {
                    img: 'Avatar_3.png',
                    name: 'Domagoj',
                    quote: '“Nevjerojatno lak put do dodatne zarade za one koji napokon žele uživati u gradskim vožnjama.”'
                },
                {
                    img: 'Avatar_4.jpg',
                    name: 'Marin',
                    quote: '“Flaster omogućuje pokrivanje troškova gradske vožnje koju ionako svakodnevno morate obaviti.”'
                }
            ]
        }
    }    
}
</script>
<style lang="scss">
    .landing_slider_cars_wrapper_drivers {
        text-align: center;
        h4 {
            font-weight: 900;
            font-size: 40px;
            line-height: 73px;
            color: #670A4A;
        }
        .VueCarousel-slide {
            width: 100%;
            .price {
                font-weight: 600;
                font-size: 16px;
                line-height: 50px;
                text-align: center;
                color: #000000;
            }
        }
        .VueCarousel-pagination {
            .VueCarousel-dot-container {
                margin-top: 20px;
                display: grid;
                align-items: center;
                justify-items: center;
            }
            .VueCarousel-dot {
                width: 261px !important;
                height: 99px !important;
                background-color: unset !important;
                box-shadow: unset !important;
                font-size: 24px !important;
                padding: 0px !important;
                border-radius: 20px !important;
                color: #0000 !important;
                outline: unset !important;
                &:first-child {
                    &::before {
                        color:#000;
                        content: 'Full';
                    }
                }
                &:nth-child(2n) {
                    &::before {
                        color:#000;
                        content: 'Partial';
                    }
                }
                &:last-child {
                    &::before {
                        color:#000;
                        content: 'Cut';
                    }
                }
            }
            .VueCarousel-dot--active {
                width: 261px !important;
                height: 99px !important;
                background-color: #670A4A !important;
                box-shadow: 0px 20px 50px rgba(103, 10, 74, 0.4) !important;
                border-radius: 20px !important;
                color: black !important;
                padding: 0px !important;
                &:first-child {
                    &::before {
                        color:white;
                        content: 'Full';
                    }
                }
                &:nth-child(2n) {
                    &::before {
                        color:white;
                        content: 'Partial';
                    }
                }
                &:last-child {
                    &::before {
                        color:white;
                        content: 'Cut';
                    }
                }
            }
        }
        .VueCarousel-inner {
                height: 240px !important;
                .car_img {
                    height: 200px !important;
                }
            } 
    }
    @media only screen and (min-width: 768px) {
        .landing_slider_cars_wrapper_drivers {
            .VueCarousel-inner {
                height: unset !important;
                .car_img {
                    height: 400px !important;
                }
            }
        }
    }
    @media only screen and (min-width: 810px) {
        .VueCarousel-dot-container {
                grid-template-columns: repeat(3, minmax(261px, 3fr) );
            }
    }
</style>

<template>
    <v-row class="landing_slider_cars_wrapper_drivers">
        <v-col cols="12">
            <h4 style="font-family: 'Inter', sans-serif !important;">Koliko mogu zaraditi?</h4>
        </v-col>
        <v-col cols="12" xs="12" md="12" lg="12">
            <carousel 
            :navigationEnabled="false"
            :perPageCustom="[[320, 1]]"
            >
                <slide v-for="slide in sliderData" :key="sliderData.indexOf(slide)">
                    <v-img :src="require(`@/assets/${slide.img}`)" height=" " contain class="car_img"/>
                    <h6 class="price" style="font-family: 'Inter', sans-serif !important;">{{slide.price}}</h6>
                </slide>
            </carousel>
        </v-col>
    </v-row>
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
                    img: 'fiat-ful.png',
                    price: '1100 - 1800 kuna mjesečno'
                },
                {
                    img: 'fiat-partial.png',
                    price: '800 - 1500 kuna mjesečno'
                },
                {
                    img: 'fiat-cut.png',
                    price: '800 - 1500 kuna mjesečno'
                },
            ]
        }
    }    
}
</script>
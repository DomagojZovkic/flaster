<style lang="scss">
    .carousel-3d-container {
        height: 778px !important;
        height: 100% !important;
    }
    .carousel-3d-slider {
        height: 768px !important;
    }
    .carousel-3d-slide {
        height: 700px !important;
        border: unset !important;
        background: unset !important;
        box-shadow: 0px 10px 60px 4px rgba(0, 0, 0, 0.15) !important;
        border-radius: 20px !important;
        padding: 20px !important;
        box-sizing: border-box !important;
        opacity: 0.5 !important;
        text-align: center !important;
    }
    .carousel-3d-slide.current {
        opacity: 1 !important;
    }
    .title-bandage {
        right: 0px;
        top: 20px;
    }
    .large_title {
        font-size: 40px;
    }
    .landing_slider_wrapper {
        margin-top: 100px;
    }
    @media only screen and (min-width: 768px) {
        .carousel-3d-slide {
            padding: 45px 60px !important;
            height: 768px !important;
            text-align: left;
        }
        .carousel-3d-slide.current {
            opacity: 1 !important;
            //transform: scale(1.1, 1.1) !important;
        }
        .title-bandage {
            right: -40px;
            top: 0px;
        }
        .landing_slider_wrapper {
            margin-bottom: 100px;
        }
    }
</style>

<template>
    <v-row>
        <v-col cols="12" class="landing_slider_wrapper">
            <h3 class="text-center">
                <span style="position:relative; font-family: 'Inter', sans-serif !important;font-weight: 800;color:#670A4A;" class="large_title">
                ZAŠTO FLASTER?
                <v-img :src="require('@/assets/bandage.svg')" width="200px" height="120px" cover style="position:absolute;opacity:90%" class="title-bandage"/>
                </span>
            </h3>
        </v-col>
        <v-col cols="12">
            <carousel-3d :width="580" :height="568" :disable3d="false" space="800" :controls-visible="true" class="py-10" :perspective="0">
                <slide v-for="slider in sliderData" :key="slider.index" :index="slider.index">
                     <v-row style="height:100%" justify="center">
                        <v-col cols="12" class="px-0">
                            <v-img :src="require(`@/assets/${slider.img}`)" width="300px" height="260px" cover class="mx-auto"/>
                        </v-col>
                        <v-col cols="12" class="px-0">
                            <v-card-title style="font-family: 'Inter', sans-serif !important;font-size: 30px;font-weight: 800;color:#670A4A;word-break:break-word; display: block;" class="px-0">{{slider.title}}</v-card-title>
                        </v-col>
                        <v-col cols="12" class="px-0">
                            <v-card-text style="font-family: 'Inter', sans-serif !important;font-size: 16px;font-weight: 400;line-height: 20px;" class="px-0">{{slider.text}}</v-card-text>
                        </v-col>
                        <!-- <v-col cols="12" class="align-self-end py-0 px-0">
                            <v-card-actions class="px-0">
                                <v-btn text  style="color:#670A4A;" class="px-0">
                                    <span class="mr-5" style="font-family: 'Inter', sans-serif !important;font-size: 16px;font-weight: 700;">Saznaj više</span>
                                    <v-icon>mdi-arrow-right</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-col> -->
                    </v-row>
                </slide>
            </carousel-3d>
        </v-col>
    </v-row>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
    components: {
        Carousel3d,
        Slide
    },
    data() {
        return {
            sliderData: [
                {
                    img: 'slide1.svg',
                    title: 'Retargeting kampanje',
                    text: 'Ostvarite sve prednosti pokretnog oglašavanja kako biste održali komunikaciju s ciljanom publikom. Flaster retargeting tehnologija omogućuje automatizirano i digitalno oglašavanje usmjereno na skupine koje su bile u blizini Flaster vozila. Vaša poruka tako može ponovno doseći ciljanu publiku putem njihovih mobilnih uređaja.',
                    index: 0
                },
                {
                    img: 'slide3.svg',
                    title: 'Praćenje vozila i analiza',
                    text: 'Sustav praćenja vozila putem aplikacije daje relevantne podatke o izvedbi svakog vozila u kampanji. Dobiveni podaci omogućuju detaljnu analizu koja uključuje podatke o broju osoba koje su došle u doticaj s reklamom, ostvaren broj kilometara, vrijeme provedeno unutar i izvan odabranih zona te termalne mape samih vozila. Osim toga, praćenje vozila provodi se i kako bi se osigurala urednost vozila te potpuna vidljivost reklame u svakom trenutku.',
                    index: 1
                },
                {
                    img: 'slide2.svg',
                    title: 'Tailor-made kampanje',
                    text: 'Svaka kampanja nastaje u dogovoru s klijentom – odabir vozila i target zona, definiranje vremenskog razdoblja i izbor vrste obljepljivanja vozila. Također, svaki klijent ima ekskluzivno pravo na odabrana vozila, što znači: jedno vozilo = jedan brend!',
                    index: 2
                }
            ]
        }
    }
}
</script>
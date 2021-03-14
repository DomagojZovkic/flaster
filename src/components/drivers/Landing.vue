<style lang="scss">
    .landing_bg_img_drivers {
        height: 500px;
        position: relative;
        .v-image__image {
            background-size: unset !important;
        }
        .landing_title_box {
            text-align: center;
            padding: 20px;
            box-sizing: border-box;
            background: #670A4A;
            .drivers_subtitle {
                font-weight: 600;
                font-size: 30px;
                line-height: 4+30px;
                color: #FFFFFF;
                .drivers_subtitle_dash {
                    width: 40px;
                    height: 2px;
                    display: block;
                    background-color: #E3B505;
                    margin: 0 auto;
                }
            }
            h1 {
                font-weight: 900;
                font-size: 20px;
                line-height: 30px;
            }
        }
        .landing_bandage {
            position: absolute;
            width: 300px;
            height: auto;
            top: 300px !important;
            left: calc(50% - 150px);
            opacity: 0.7;
            .v-image__image {
                background-size: cover !important;
            }
        }
    }
    @media only screen and (min-width: 768px) {
        .landing_bg_img_drivers {
            height: 500px;
            position: relative;
            .v-image__image {
                background-size: cover !important;
            }
            .landing_title_box {
                text-align: left;
                margin-top: 25px;
                background: linear-gradient(90deg, rgba(103, 10, 74, 0.9) 27.57%, rgba(103, 10, 74, 0) 100%);
                h1 {
                    font-size: 40px;
                    line-height: 100px;
                }
                .drivers_subtitle_dash {
                    margin: 0 !important;
                }
            }
            .landing_bandage {
                top: 60% !important;
                left: 60%;
            }
        }
    }
    @media only screen and (min-width: 1024px) {
        .landing_bg_img_drivers {
            height: 500px;
            .landing_title_box {
                max-width: 1200px;
                padding: 60px 60px 60px 130px !important;
                box-sizing: border-box;
                margin: 0 !important;
            }
            .landing_bandage {
                
            }
        }
    }
    @media only screen and (min-width: 1440px) {
        .landing_bg_img_drivers {
            height: 550px;
            overflow: unset;
            .landing_title_box {
                max-width: 1200px;
                height: 550px;
                transform: translateY(100px);
            }
            .landing_bandage {
                width: 800px;
                top: 40% !important;
                left: 50%;
                opacity: 1;
            }
        }
    }
</style>

<template>
    <v-img :lazy-src="require('@/assets/landing_drivers_bg.jpg')" :src="require('@/assets/landing_drivers_bg.jpg')" width="100%" class="landing_bg_img_drivers" cover>
         <template v-slot:placeholder>
            <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
            >
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
        </template>
        <div class="landing_title_box">
            <p class="drivers_subtitle">Provozajte se za dodatnu zaradu.<br><br> <span class="drivers_subtitle_dash"></span></p>
            <h1 class="white--text"  style="font-family: 'Inter', sans-serif !important;">Zaradite do 1000 kuna mjesečno. <br> Jednostavno, brzo i bez skrivenih troškova.</h1>
        </div>
        <v-img :src="require('@/assets/bandage_larg_unfold.svg')" max-width="800px" class="landing_bandage" cover />
    </v-img>
</template>
<style lang="scss">
    .landing_bg_img_brands {
        height: 500px;
        position: relative;
        .v-image__image {
            background-size: unset !important;
        }
        .landing_title_box {
            text-align: center;
            padding: 20px;
            box-sizing: border-box;
            background: linear-gradient(90deg, rgba(103, 10, 74, 0.9) 27.57%, rgba(103, 10, 74, 0) 100%);
            h1 {
                font-weight: 900;
                font-size: 40px;
                line-height: 100px;
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
        .landing_bg_img_brands {
            height: 500px;
            position: relative;
            .v-image__image {
                background-size: cover !important;
            }
            .landing_title_box {
                text-align: left;
                margin-top: 25px;
                h1 {
                    font-size: 70px
                }
            }
            .landing_bandage {
                top: 60% !important;
                left: 60%;
            }
        }
    }
    @media only screen and (min-width: 1024px) {
        .landing_bg_img_brands {
            overflow: unset;
            .landing_title_box {
                max-width: 890px;
                padding: 60px 60px 60px 130px !important;
                box-sizing: border-box;
                margin: 0 !important;
            }
            .landing_bandage {
                
            }
        }
    }
    @media only screen and (min-width: 1440px) {
        .landing_bg_img_brands {
            .landing_title_box {
                height: 520px;
                max-width: 1200px;
                margin: 0 auto;
                transform: translateY(100px);
            }
            .landing_bandage {
                width: 800px;
                top: 40% !important;
                left: 45%;
                opacity: 1;
            }
        }
    }
</style>

<template>
    <v-img :lazy-src="require('@/assets/landing_brands_bg.jpg')" :src="require('@/assets/landing_brands_bg.jpg')" width="100%" class="landing_bg_img_brands" cover>
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
            <h1 class="white--text"  style="font-family: 'Inter', sans-serif !important;">Promijenite boje grada!</h1>
        </div>
        <v-img :src="require('@/assets/bandage_larg_unfold.svg')" max-width="800px" class="landing_bandage" cover />
    </v-img>
</template>
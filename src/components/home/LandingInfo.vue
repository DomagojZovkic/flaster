<style lang="scss">
    .info_text-center {
        text-align: center;
        display: block;
    }
    .info_btn {
        margin: 0 auto;
    }
    .info_bg_img {
        height: 100%;
    }
    .iphone-img {
        height: 100%;
        max-width:300px;
    }
    @media only screen and (min-width: 1440px) {
        .info_bg_img {
            height: 770px;
        }
        .info_text-center {
            text-align: left;
            display: flex;
        }
        .info_btn {
            margin: unset;
        }
        .iphone-img {
            transform: translateY(-155px);
            max-width: 1050px;
        }
        .info_box {
            transform: translateY(-100px);
        }   
    }
    @media only screen and (min-width: 1800px) {
        .iphone-img  {
                transform: translateY(-100px);
                width: 800px;
        }
        .info_box {
            transform: translateY(-150px);
        }
    }
</style>

<script>
export default {
    components: {
        
    }
}
</script>

<template>
    <v-img :src="require('@/assets/info_bg_large.png')" width="100%" class="py-10 info_bg_img" style="overflow: unset">
        <v-row align="center" justify="center" style="height:100%;" no-gutters>
            <v-col cols="12" xs="12" md="6" lg="6">
                 <v-img :src="require(`@/assets/iphone.png`)" cover class="mx-auto iphone-img"/>
            </v-col>
            <v-col cols="12" xs="12" md="6" lg="6">
                <v-card
                flat
                class="mx-auto info_box"
                width="100%"
                style="background-color: unset;"
                >
                    <v-card-title class="white--text info_text-center" style="text-align:center;display: block;font-family: 'Inter', sans-serif !important;font-size: 40px;font-weight: 900;word-break:break-word;margin-bottom: 80px;">Platforma Flaster</v-card-title>
                    <v-card-subtitle class="mb-10 white--text info_text-center" style="text-align: center;display: block;font-family: 'Inter', sans-serif !important;font-size: 28px;font-weight: 700;line-height: 40px;"> Iskoristite sve prednosti pokretnog <br> vanjskog oglašavanja i remarketinga.</v-card-subtitle>
                    <!-- <v-card-actions>
                        <v-btn height="80px" width="280px" style="font-family: 'Inter', sans-serif !important;font-size: 20px;font-weight: 800;color:#670A4A;border-radius: 20px;box-shadow: 0px 20px 50px rgba(103, 10, 74, 0.4);" class="py-5 info_btn">
                            POSTANI VOZAČ
                        </v-btn>
                    </v-card-actions> -->
                </v-card>
            </v-col>
        </v-row>
    </v-img>
</template>

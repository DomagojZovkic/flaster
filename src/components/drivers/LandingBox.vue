<style lang="scss">
    .landing_box_wrapper_drivers {
        text-align: center;
        max-width: 835px;
        margin: 0 auto;
        .box_title {
            font-weight: 800;
            font-size: 40px;
            line-height: 40px;
            color: #670A4A;
            margin-bottom: 20px;
            display: block;
            word-break: break-word !important;
        }
        .box_text {
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;
            color: #000000;

        }
        .landing_box_btn {
            background: #670A4A !important;
            box-shadow: 0px 20px 50px rgba(103, 10, 74, 0.4);
            border-radius: 20px;
            font-style: normal;
            font-weight: 800;
            font-size: 12px;
            padding: 50px 20px !important;
        }
    }
    @media only screen and (min-width: 1024px) {
         .landing_box_wrapper_drivers {
             padding-top: 150px;
             padding-bottom: 0px;
             .box_title {
                 padding-right: 0 !important;
                 line-height: 60px;
             }
             .landing_box_btn {
                width: 360px;
                font-size: 16px;
             }
         }
    }
</style>

<template>
    <v-row class="landing_box_wrapper_drivers" align="center">
        <v-col cols="12" xs="12" md="12" lg="12">
            <v-card
            flat
            >
                <v-card-title style="font-family: 'Inter', sans-serif !important;padding-left: 0;padding-right: 0;" class="box_title">Zaradite novac oglašavanjem <br> na svom vozilu</v-card-title>
                <v-card-text style="font-family: 'Inter', sans-serif !important;" class="box_text">Flaster povezuje kreativne brendove s vozačima koji su svakodnevno na cesti i žele dodatno zaraditi. Profitirajte od onoga što ionako stalno radite – uživajte u gradskoj vožnji.</v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" xs="12" md="12" lg="12">
            <v-card
            flat
            >
                <v-card-actions>
                    <v-btn
                    @click="contactForm" 
                    style="font-family: 'Inter', sans-serif !important;" 
                    class="mx-auto landing_box_btn white--text" 
                    height="100px"
                    max-width="300px"> 
                        POSTANITE FLASTER VOZAČ
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>

export default {
    methods: {
        contactForm() {
            this.$emit('openModal');
            this.$emit('userType', 'drivers')
        }
    }
}
</script>
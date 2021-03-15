<style lang="scss">
    .landing_box_wrapper_brands {
        text-align: center;
        .box_title {
            font-weight: 800;
            font-size: 30px;
            line-height: 40px;
            color: #670A4A;
            margin-bottom: 20px;
            display: block;
            word-break: break-word;
        }
        .box_subtitle {
            font-weight: 500;
            font-size: 18px;
            line-height: 36px;
            color: #000000;
        }
        .box_text {
            font-weight: 400;
            font-size: 16px;
            line-height: 30px;
            color: #000000;

        }
        .landing_box_btn {
            background: #670A4A !important;
            box-shadow: 0px 20px 50px rgba(103, 10, 74, 0.4);
            border-radius: 20px;
            font-style: normal;
            font-weight: 800;
            font-size: 16px;
            padding: 50px 20px !important;
        }
    }
    @media only screen and (min-width: 1024px) {
         .landing_box_wrapper_brands {
             text-align: justify !important;
             padding: 150px 0 0px 0;
             .box_title {
                 padding-right: 0 !important;
                 text-align: center !important;
                 display: block;
             }
         }
    }
</style>

<template>
    <v-row class="landing_box_wrapper_brands" align="center">
        <v-col cols="12" xs="12" md="6" lg="6">
            <v-card
            flat
            >
                <v-card-title style="font-family: 'Inter', sans-serif !important;" class="box_title">Brend u gradskoj vožnji</v-card-title>
                <v-card-subtitle style="font-family: 'Inter', sans-serif !important; text-align: center; display: block;" class="box_subtitle">Iskoristite inovativan način oglašavanja. <br> Osigurajte uočljivost svog brenda na nov i kreativan način.</v-card-subtitle>
                <v-card-subtitle style="font-family: 'Inter', sans-serif !important; font-weight: 700;text-align: center; display: block;" class="box_subtitle mb-3">Jedno vozilo - jedan brend - jedna poruka</v-card-subtitle>
                <v-card-text style="font-family: 'Inter', sans-serif !important;" class="box_text">Flaster  vozilima s vašom reklamom upravljaju odabrani vozači koji su svakodnevno na najposjećenijim lokacijama u gradu. Aplikacija Flaster prati kretanje vozila i prikuplja podatke koji se pretvaraju u mjerljive digitalne rezultate s ciljem detaljne post-buy analize te remarketinga usmjerenog na osobe koje su bile u kontaktu s Flaster vozilima.</v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" xs="12" md="6" lg="6">
            <v-card
            flat
            >
                <v-card-actions>
                    <v-btn
                    @click="contactForm" 
                    style="font-family: 'Inter', sans-serif !important;" 
                    class="mx-auto landing_box_btn white--text" 
                    max-width="380px" 
                    height="100px"
                    width="100%"> 
                        PROVOZAJTE SVOJ BREND
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
            this.$emit('userType', 'brands');
        }
    }
}
</script>
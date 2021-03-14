<style lang="scss">
    .btn-text {
        font-size: 10px
    }
    .landing_box_card {
        text-align: center;
    }
    @media only screen and (min-width: 768px) {
        .landing_box_card {
            text-align: center;
        } 
    }
    @media only screen and (min-width: 1440px) {
        .btn-text {
            font-size: 16px
        }   
    }
</style>

<template>
    <v-row style="height:100%;" justify="center" align="center">
        <v-col cols="12" xs="12" md="6" lg="6">
            <v-card
            flat
            max-width="480px"
            class="mx-auto">
                <v-img :src="require(`@/assets/landing_box_img.png`)" width="100%" height="360px" cover />
            </v-card>
        </v-col>
        <v-col cols="12" xs="12" md="6" lg="6">
            <v-card
            flat
            max-width="480px"
            class="mx-auto landing_box_card">
            <v-row style="height:100%;">
                <v-col cols="12" class="pt-0">
                    <v-card-title class="pt-0" style="font-family: 'Inter', sans-serif !important;font-weight: 800;font-size: 30px;color:#670A4A;word-break:break-word;display: block;">ŠTO JE FLASTER?</v-card-title>
                </v-col>
                <v-col cols="12">
                    <v-card-text style="font-family: 'Inter', sans-serif !important;font-size: 16px;font-weight: 400;line-height: 30px;text-align:justify">Flaster  je omnichannel platforma  koja  povezuje  brendove koji žele iskoristiti sve prednosti  pokretnog vanjskog oglašavanja za  promoviranje  brenda i vozače koji su  svakodnevno  na  cesti  na užurbanim lokacijama u gradu, a žele dodatno zaraditi. <br><br> Aplikacija  Flaster prikuplja detaljne podatke o vozilima i analizira rezultate OOH reklama. Na temelju toga provodi se ciljani remarketing na digitalnim platformama koji je usmjeren na osobe koje su bile u doticaju s Flaster vozilima.</v-card-text>
                </v-col>
                <!-- <v-col cols="12" class="align-self-end py-0">
                    <v-card-actions class="py-0">
                        <v-btn height="60px" class="white--text px-5" style="background-color: #670A4A; border-radius:20px; width:100%;box-shadow: 0px 10px 20px rgba(186, 78, 142, 0.4);">
                            <span class="mr-5 btn-text" style="font-family: 'Inter', sans-serif !important;font-weight: 700;">Saznaj više i dogovori sastanak</span>
                            <v-icon>mdi-arrow-right</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-col> -->
            </v-row>
            </v-card>
        </v-col>
    </v-row>
</template>
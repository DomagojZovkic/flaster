<style lang="scss">
    .landing_boxes_wrapper  {
        text-align: center;
        .landing_boxes {
            padding: 20px;
            .box_title {
                font-weight: 800;
                font-size: 40px;
                line-height: 70px;
                color: #670A4A;
                word-break: break-word;
            }
            .box_subtitle {
                font-weight: 500;
                font-size: 14px;
                line-height: 30px;
                color: #000000;

            }
        }
    }
     @media only screen and (min-width: 1440px) {
         .landing_boxes_wrapper  {
            text-align: left;
            padding: 220px 130px 0 130px;
            .landing_boxes {
                padding: 0px;
                margin-bottom: 260px;
                .landing_boxes {
                    width: 100%;
                }
                .box_title {
                    padding-left: 0;
                    padding-right: 0;
                }
                .box_subtitle {
                    padding-left: 0;
                    padding-right: 0;
                }
                .boxes_img {
                    width: 380px !important;
                }
                .box_img_position_left {
                    float: left;
                }
                .box_img_position_right {
                    float: right;
                }
            }
        }
     }
</style>

<template>
    <v-row class="landing_boxes_wrapper">
        <v-col cols="12" xs="12" md="6" lg="6">
            <v-card
            class="mx-auto landing_boxes"
            max-width="610px"
            flat
            style="font-family: 'Inter', sans-serif !important;"
            >
            <v-card-title class="box_title">Tailor -made kampanje</v-card-title>
            <v-card-text class="box_subtitle">Svaku kampanju dogovaramo u suradnji s klijentom. Prema uputama biramo vozila, target zone i vremenska razdoblja, opcije i vrste obljepljivanja te savjetujemo i izrađujemo kreativno rješenje. Tokom kampanje pratimo vozila i urednost vozila kako bi reklama u svakom trenutku bila u potpunosti vidljiva. Svaki naš klijent ima ekskluzivno pravo na vozila, što znači da se samo jedan brand komunicira na jednom vozilu.</v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" xs="12" md="6" lg="6">
            <v-card
            class="mx-auto landing_boxes"
            max-width="610px"
            flat
            style="font-family: 'Inter', sans-serif !important;"
            >
             <v-img :src="require(`@/assets/slide2.svg`)" width="100%" height="100%" cover class="boxes_img box_img_position_right"/>
            </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6">
            <v-card
            class="mx-auto landing_boxes"
            max-width="610px"
            flat
            style="font-family: 'Inter', sans-serif !important;"
            >
            <v-img :src="require(`@/assets/slide1.svg`)" width="100%" height="100%" cover class="boxes_img box_img_position_left"/>
            </v-card>
        </v-col>
        <v-col cols="12" xs="12" md="6" lg="6">
            <v-card
            class="mx-auto landing_boxes"
            max-width="610px"
            flat
            style="font-family: 'Inter', sans-serif !important;"
            >
            <v-card-title class="box_title">Retargeting kampanje</v-card-title>
            <v-card-text class="box_subtitle">Ostvarite sve prednosti omnichanel komunikacije vašoj publici. 
Pomoću Flaster retargeting modula, naši klijenti imaju mogućnost automatiziranog remarketing digitalnog oglašavanja kontakata koji su bili u vidljivom opsegu Flaster vozila.Uz digitalno targetiranje osoba koje su bile izložene Flaster vozilima vaša poruka može ponovo doseći publiku na njihovim mobilnim uredjajima.</v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" xs="12" md="6" lg="6">
            <v-card
            class="mx-auto landing_boxes"
            max-width="610px"
            flat
            style="font-family: 'Inter', sans-serif !important;"
            >
            <v-card-title class="box_title">Praćenje vozila i analiza</v-card-title>
            <v-card-text class="box_subtitle">Sustav praćenja vozila pomoću kojega dobivamo relevantne podatke o izvedbi svakog vozila u kampanji.Dobivenim podacima vozila, klijentima pružamo opsežni post-buy kampanje koja uključuje podatke o broju osoba koje su došle u doticaj s reklamom, ostvareni broj kilometara i vremenu provedenom unutar i izvan target zona i termalne mape vozila. Kroz remarketing klijentu dostavljamo online performance izvještaje.</v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" xs="12" md="6" lg="6">
            <v-card
            class="mx-auto landing_boxes"
            max-width="610px"
            flat
            style="font-family: 'Inter', sans-serif !important;"
            >
            <v-img :src="require(`@/assets/slide3.svg`)" width="100%" height="100%" cover class="boxes_img box_img_position_right"/>
            </v-card>
        </v-col>
    </v-row>
</template>
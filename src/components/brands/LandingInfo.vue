<style lang="scss">
    .landing_info_brands_wrapper {
        text-align: center;
        h5 {
            font-weight: 800;
            font-size: 50px;
            line-height: 70px;
            color: #FFFFFF;
        }
        button {
            //width: 300px;
            height: 99px !important;
            background-color: #FFFFFF;
            box-shadow: 0px 20px 50px rgba(103, 10, 74, 0.4);
            border-radius: 20px;
            font-weight: 800;
            font-size: 20px !important;
            line-height: 50px;
            color: #670A4A !important;
        }
    }
    @media only screen and (min-width: 1200px) {
        .landing_info_brands_wrapper {
            .landing_info_brands_box {
                transform: translateY(-100px);
            }
        }
    }
</style>

<template>
    <v-img :src="require(`@/assets/brands_info_bg.jpg`)" width="100%" height="100%" cover class="landing_info_brands_wrapper">
    <v-row class="landing_info_brands_box" align="center" style="height:100%">
        <v-col cols="12" xs="12" md="12" lg="12">
            <v-btn
            @click="contactForm" 
            style="font-family: 'Inter', sans-serif !important;" 
            class="mx-auto">ISPROBAJTE FLASTER</v-btn>
        </v-col>
        <!-- <v-col cols="12" xs="12" md="6" lg="6">
            <h5 style="font-family: 'Inter', sans-serif !important;">Ready to try?</h5>
        </v-col> -->
    </v-row>
    </v-img>
</template>

<script>

export default {
    methods: {
        contactForm() {
            this.$emit('openModal');
            this.$emit('userType', 'brands')
        }
    }
}
</script>
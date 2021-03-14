<style lang="scss">
    .landing_info_drivers_wrapper {
        text-align: center;
        h5 {
            font-weight: 800;
            font-size: 40px;
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
            font-size: 16px !important;
            line-height: 50px;
            color: #670A4A !important;
        }
    }
    @media only screen and (min-width: 1200px) {
        .landing_info_drivers_wrapper {
            .landing_info_drivers_box {
                transform: translateY(-100px);
            }
            button {
                font-size: 24px;
            }
        }
    }
</style>

<template>
    <v-img :src="require(`@/assets/drivers_info_bg.jpg`)" width="100%" height="100%" cover class="landing_info_drivers_wrapper">
    <v-row align="center" style="height: 100%;" class="landing_info_drivers_box">
        <v-col cols="12" xs="12" md="6" lg="6">
            <h5 style="font-family: 'Inter', sans-serif !important;">Spremni ste za vožnju?</h5>
        </v-col>
        <v-col cols="12" xs="12" md="6" lg="6">
            <v-btn 
            @click="contactForm" 
            style="font-family: 'Inter', sans-serif !important;">POSTANITE FLASTER VOZAČ</v-btn>
        </v-col>
    </v-row>
    </v-img>
</template>

<script>

export default {
    data() {
        return {
            openDIalog: false
        }
    },
    methods: {
        openDialog() {
            return this.openDIalog =! this.openDIalog 
        },
        contactForm() {
            this.$emit('openForm', this.openDialog())
            this.$emit('userType', 'drivers')
        }
    }
}
</script>
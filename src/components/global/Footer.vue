<style lang="scss">
    .main_footer {
        text-align: center;
    }
    @media only screen and (min-width: 1440px) {
        .main_footer {
            text-align: unset;
        }
        .social_wrapper {
            text-align: end;
        }
    }
</style>

<template>
    <footer class="main_footer">
        <v-container class="mb-10">
        <v-row align="center" justify="center" style="height:100%;">
            <v-col cols="12" xs="6" md="3" lg="3">
                <p style="font-family: 'Inter', sans-serif !important;font-size: 24px;font-weight: 800;">Flaster</p>
                <p style="font-family: 'Inter', sans-serif !important;font-size: 16px;font-weight: 500;line-height: 30px;">
                    Nova Cesta 119 <br> Zagreb, Croatia</p>
            </v-col>
            <v-col cols="12" xs="6" md="3" lg="3">
                <a style="font-family: 'Inter', sans-serif !important;font-size: 16px;font-weight: 600;color: #670A4A; display:block; margin-bottom:5px" href="mailto:info@flaster.co">info@flaster.co</a>
                <p style="font-family: 'Inter', sans-serif !important;font-size: 16px;font-weight: 600;color: #670A4A; margin-bottom: 0;">+385 91 254 0065</p>
                <p style="font-family: 'Inter', sans-serif !important;font-size: 16px;font-weight: 600;color: #670A4A;">+385 99 220 3988</p>
            </v-col>
            <v-col cols="12" xs="6" md="3" lg="3">
                <v-btn 
                @click="$route.name == 'Home' ? false : $router.push({ name: 'Home' });"
                v-scroll-to="'#app'"
                text 
                style="font-family: 'Inter', sans-serif !important;font-size: 14px;font-weight: 500;" class="px-3">HOME</v-btn>
                <v-btn 
                @click="$route.name == 'Brands' ? false : $router.push({ name: 'Brands' });"
                v-scroll-to="'#app'"
                text 
                style="font-family: 'Inter', sans-serif !important;font-size: 14px;font-weight: 500;" class="px-3">BRENDOVI</v-btn>
                <v-btn 
                @click="$route.name == 'Drivers' ? false : $router.push({ name: 'Drivers' });"
                v-scroll-to="'#app'"
                text 
                style="font-family: 'Inter', sans-serif !important;font-size: 14px;font-weight: 500;" class="px-3">VOZAČI</v-btn>
                <v-btn 
                @click="$route.name == 'Privacy' ? false : $router.push({ name: 'Privacy' });"
                v-scroll-to="'#app'"
                text 
                style="font-family: 'Inter', sans-serif !important;font-size: 14px;font-weight: 500;" class="px-3">Pravila o zaštiti privatnosti</v-btn>
            </v-col>
            <v-col cols="12" xs="6" md="3" lg="3" class="social_wrapper">
                <v-btn text>
                    <v-icon style="color: #670A4A;">
                        mdi-facebook
                    </v-icon>
                </v-btn>
                <v-btn text>
                    <v-icon style="color: #670A4A;">
                        mdi-linkedin
                    </v-icon>
                </v-btn>
                <v-btn text>
                    <v-icon style="color: #670A4A;">
                        mdi-twitter
                    </v-icon>
                </v-btn>
            </v-col>
        </v-row>
        </v-container>
    </footer>
</template>
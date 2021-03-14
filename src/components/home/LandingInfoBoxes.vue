<template>
    <v-container style="text-align:center;">
        <v-divider></v-divider>
        <v-row style="background-color: #FFF;" align="center" justify="center" class="mt-10 rounded-xl">
            <v-col cols="12" xs="12" md="6" lg="6" v-for="info in infoData" :key="info.title">
                <v-card
                depressed
                class="mx-auto"
                height="450px"
                style="background-color:unset;display:grid;align-item:center;box-shadow: 0px 20px 50px rgba(103, 10, 74, 0.4);"
                >
                    <v-card-title style="font-family: 'Inter', sans-serif !important;font-weight: 800;font-size: 30px;line-height:50px;color:#670A4A;word-break:break-word;display: block" v-html="info.title"></v-card-title>
                    <v-card-text style="font-family: 'Inter', sans-serif !important;font-size: 18px;font-weight: 400;line-height: 30px;text-align:justify;display: contents;color:#670A4A" class="mt-10 mb-10" v-html="info.text"></v-card-text>
                    <v-card-actions>
                        <v-btn
                        height="60px"
                        width="auto"
                        class="px-5 mx-auto" 
                        style="background-color: #670A4A; border-radius:20px;font-family: 'Inter', sans-serif !important;font-weight: 700;color:#FFF;font-size: 14px;"
                        @click="$router.push({ name: `${info.link}` });scrollToTop()"
                        >{{info.button}}</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            infoData: [
                {
                    title:'Promijenite boje grada <br> i zavladajte ulicama.',
                    text:'Inovativan način oglašavanja i precizna retargeting tehnologija.<br>Jedno vozilo – jedan brend – jedna poruka.',
                    button:'Provozajte svoj brend',
                    link:'Brands'
                },
                {
                    title:'Provozajte se <br> do dodatne zarade.',
                    text:'Zaradite do 1000 kuna mjesečno.<br> Jednostavno, brzo i bez skrivenih troškova',
                    button:' Postanite Flaster vozač',
                    link:'Drivers'
                }
            ],
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo(500, 0);
        }
    },
}
</script>
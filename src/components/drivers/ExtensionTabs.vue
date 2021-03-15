<style lang="scss">
    .extension_tabs_wrapper {
        text-align: center;
        h4 {
            font-family: Inter;
            font-weight: 900;
            font-size: 40px;
            color: #670A4A;
        }
        .v-expansion-panel {
            font-family: 'Inter', sans-serif !important;
            box-shadow: unset !important;
            border-radius: 20px !important;
            margin-bottom: 30px;
            border: unset !important;
            &::before {
                box-shadow: unset !important;
            }
            &::after {
                border: unset !important;
            }
        }
        .v-expansion-panel-header {
            font-weight: 800;
            font-size: 20px;
            color: #670A4A !important;
            height: 100px;
            background: #F7F3F6;
            border-radius: 20px;
        }
        .v-expansion-panel-header--active {
            background: #670A4A !important;
            color: white !important;
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25) !important;
        }
        .v-expansion-panel-content__wrap {
            background: #F7F3F6;
            font-weight: 500;
            font-size: 16px;
            line-height: 30px;
            color: #000000;
            padding-top: 30px;
        }
        v-expansion-panel-content {
            transform: translateY(-20px);
        }
    }
</style>

<template>
<v-row class="extension_tabs_wrapper mt-10">
    <v-col cols="12">
        <h4 style="font-family: 'Inter', sans-serif !important;">Često postavljena pitanja</h4>
    </v-col>
    <v-col>
     <v-expansion-panels>
        <v-expansion-panel>
            <v-expansion-panel-header>Koja je ideja Flastera?</v-expansion-panel-header>
            <v-expansion-panel-content>Flaster je platforma koja povezuje brendove koji žele iskoristiti prednosti pokretnog vanjskog oglašavanja i vozače koje su svakodnevno na cesti na frekventnim gradskim lokacijama.</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
            <v-expansion-panel-header>Koje uvjete moram ispunjavati kako bi mogao postati Flaster partner vozač?</v-expansion-panel-header>
            <v-expansion-panel-content>Vozač mora biti punoljetan a vozilo mora biti čisto i uredno, bez vidljivih vanjskih oštećenja te mlađe od pet godina. Uz to, vozilo mora biti na cesti 26 dana u mjesecu s minimalnom dnevnom kilometražom od 180 km.</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
            <v-expansion-panel-header>Koliko mogu zaraditi i koji su uvjeti?</v-expansion-panel-header>
            <v-expansion-panel-content>Prvi je uvjet posjedovanje obrta ili tvrtke na koju možemo isplatiti dogovoreni iznos. Zarada ovisi o trajanju kampanje te vrsti obljepljvanja za koju se klijent odlučio. Za cut ili partial verziju ukoliko vozač ostvari minimalne uvjete može zaraditi 800 kn, a za full 1100kn. Dodatno se plaća za sampling putnika u vozilu, pojavljivanje na lokaciji/eventu i tjedna nagrada za najboljeg vozača.</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
            <v-expansion-panel-header>Koliko traje obljepljivanje?</v-expansion-panel-header>
            <v-expansion-panel-content>Trajanje ovisi o tome da li je djelomično obljepljivanje ili obljepljivanje cijelog automobila. U prosjeku obljepljivanje traje od dva do pet sati.</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
            <v-expansion-panel-header>Hoće li folija oštetiti lak automobila?</v-expansion-panel-header>
            <v-expansion-panel-content>Folije su razvijene s ciljem da se lako mogu instalirati te nakon kampanje skinuti bez oštećenja laka. Vozač prije obljepljivanja potpisuje da je boja originalna jer u suprotnom ne možemo garantirati da neće doći do oštećenja.</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
            <v-expansion-panel-header>Dijeli li Flaster moje informacije s trećim stranama?</v-expansion-panel-header>
            <v-expansion-panel-content>Podaci o vozaču su zaštićeni te nitko osim Flastera nema pristup podacima. Dnevne i mjesečne rute se u obliku izvještaja dijele s brendovima koji su zakupili oglasnu površinu automobila, no izvještaji ne sadrže osobne podatke ili kontakt informacije.</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
            <v-expansion-panel-header>Je li prijava u bazu vozača besplatna?</v-expansion-panel-header>
            <v-expansion-panel-content>Besplatna je sad i zauvijek.</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
            <v-expansion-panel-header>Postoji li minimalan broj kilometara koje moram prijeći?</v-expansion-panel-header>
            <v-expansion-panel-content>Uvjet je minimalno 4600 km mjesečno odnosno 26 dana u mjesecu po minimalno 180 km dnevno.</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
            <v-expansion-panel-header>Odlučio sam postati Flaster vozač. Koji su koraci?</v-expansion-panel-header>
            <v-expansion-panel-content>
            Molimo da se klikom na <a style="color:#670A4A;" :href="void(0)" @click="contactForm" >link</a> prijavite kako bismo vas mogli uvrstiti u našu bazu</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
            <v-expansion-panel-header>Prijavio sam se kao vozač. Kada mogu očekivati prvu kampanju?</v-expansion-panel-header>
            <v-expansion-panel-content>Mogućnost zarade putem kampanja ovisi o trenutnoj potražnji klijenata za vozilima. Svakako predlažemo da ne brišete mobilnu aplikaciju kako bismo vas mogli obavijestiti o novoj kampanji koja bi vam odgovarala. Nažalost, ne možemo garantirati unutar kojeg razdoblja možete očekivati prvu reklamu.</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
            <v-expansion-panel-header>Je li vozačima zagarantirana kampanja?</v-expansion-panel-header>
            <v-expansion-panel-content>Platforma Flaster je zamišljena kao pasivni prihod vozačima. Nažalost, ne možemo garantirati kampanju. Prijavom na Flaster platformu ulazite u bazu vozača koji mogu biti izabrani za kampanje klijenata. Sam odabir vozača ovisi o preferencijama i ciljevima kampanje te trenutno aktivnim kampanjama.</v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
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
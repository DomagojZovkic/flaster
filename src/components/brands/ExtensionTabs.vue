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
        }
        .v-expansion-panel-header {
            font-weight: 800;
            font-size: 20px;
            color: #670A4A !important;
            height: 100px;
            background: #F7F3F6;
            border-radius: 20px;
            position: relative;
            z-index: 2;
            .v-icon {
                font-size: 40px !important;
                &::before {
                    color: #670A4A !important;
                }
            }
        }
        .v-expansion-panel-header--active {
            background: #670A4A !important;
            color: white !important;
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25) !important;
            .v-icon {
                font-size: 40px !important;
                &::before {
                    color: #FFF !important;
                }
            }
        }
        .v-expansion-panel-content__wrap {
            position: relative;
            z-index: 1;
            background: #F7F3F6;
            font-weight: 500;
            font-size: 16px;
            line-height: 30px;
            color: #000000;
            padding-top: 30px;
        }
        .v-expansion-panel-content {
            transform: translateY(-20px);
        }
    }
</style>

<template>
<v-row class="extension_tabs_wrapper">
    <v-col cols="12">
        <h4 style="font-family: 'Inter', sans-serif !important;">Često postavljena pitanja</h4>
    </v-col>
    <v-col>
     <v-expansion-panels>
        <v-expansion-panel>
            <v-expansion-panel-header>Što je Flaster?</v-expansion-panel-header>
            <v-expansion-panel-content>Flaster je novi marketinški komunikacijski kanal namijenjen brendovima koji žele iskoristiti prednosti vanjskog pokretnog oglašavanja. Koristimo digitalne alate kako bi vanjsko oglašavanje pretvorili u mjerljive digitalne podatke. Platforma prati kretanje vozača, dnevne rute, broj impresija osoba koje su se zatekle u okolici automobila te retargeting tih istih osoba.</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
            <v-expansion-panel-header>Kako funkcionira Flaster?</v-expansion-panel-header>
            <v-expansion-panel-content>Prvi je korak razumijevanje želja i ciljeva klijenta. Nakon toga predlažemo vrstu obljepljivanja, broj automobila i trajanje kampanje. Kada klijent pristane na prijedlog, krećemo s pronalaskom optimalnih vozača i vozila koja odgovaraju ciljevima klijenta. Obljepljivanje vozila provodi se najčešće jedan do dva dana prije početka kampanje. Nakon obljepljivanja, vozilo se vraća vozaču koji u sljedećih nekoliko mjeseci, koliko traje kampanja, svojim dnevnim kilometrima promovira klijentov brend.</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
            <v-expansion-panel-header>Tko su vozači?</v-expansion-panel-header>
            <v-expansion-panel-content>Naša partner vozila su provjereni vozači rideshare vozila koji na mjesečnoj bazi prijeđu minimalno 4600 km. Vozila su nova (do 5 godina) te bez vidljivih vanjskih oštećenja.</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
                <v-expansion-panel-header>Koje su sve mogućnosti Flaster platforme?</v-expansion-panel-header>
                <v-expansion-panel-content>Platforma prati dnevno i mjesečno kretanje brendiranog vozila. Omogućuje praćenje prijeđenih kilometara, broj sati provedenih na cesti, u zonama gdje se vozilo najviše kretalo i zadržavalo (termalne mape), impresija pješaka (broj osoba koje su se zatekle u blizini i vidjele vozilo), demografski podaci zabilježenih kontakata, digital retargeting osoba koje su se zatekle u blizini vozila te sampling unutar vozila i pojavljivanje brendiranih vozila na dogovorenoj lokaciji/eventu.</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
                <v-expansion-panel-header>Što ako Flaster vozilo sudjeluje u prometnoj nesreći?</v-expansion-panel-header>
                <v-expansion-panel-content>Ako dođe do prometne nesreće, vozač odmah obavještava Flaster tim o nastaloj situaciji, a Flaster o vlastitom trošku obljepljuje zamjensko vozilo koje preuzima reklamu do kraja dogovorene kampanje.</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
                <v-expansion-panel-header>Kako znate da je reklama na vozilu?</v-expansion-panel-header>
                <v-expansion-panel-content>Vozači na tjednoj bazi kroz našu mobilnu aplikaciju učitavaju slike vozila kako bi bili sigurni da je reklama neoštećena te da je vozilo čisto.</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
                <v-expansion-panel-header>Kako birate vozače za pojedine kampanje?</v-expansion-panel-header>
                <v-expansion-panel-content>Da bi vozač zadovoljio standarde za kampanju potrebno je da je minimalno 4600 km mjesečno na cesti u gradskim zonama, a vozilo mora biti novo i neoštećeno.</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
                <v-expansion-panel-header>Mogu li vozačima dati promotivne materijale?</v-expansion-panel-header>
                <v-expansion-panel-content>Sugeriramo da našim vozačima koji na dnevnoj bazi prevoze tisuće osoba predate promotivne materijale kako bi zainteresirane klijente upoznali s vašim proizvodom. Napomena: vozači nisu obvezni sudjelovati u promociji promotivnih materijala.</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
                <v-expansion-panel-header>Kako se kreću cijene Flaster usluge?</v-expansion-panel-header>
                <v-expansion-panel-content>Cijene ovise o tipu obljepljivanja, trajanju kampanje, broju automobila te budžetu za digitalno retargetiranje. Svaka ponuda je tailor-made stoga pozivamo da nam se obratite na <a style="color:#670A4A;" :href="void(0)" @click="contactForm" >LINK</a> kako bismo pripremili neobvezujuću ponudu.</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
                <v-expansion-panel-header>Koji su minimalni uvjeti?</v-expansion-panel-header>
                <v-expansion-panel-content>Minimalni uvjeti uključuju pet vozila te četiri tjedna kampanje.</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
                <v-expansion-panel-header>Kako funkcionira digitalno retargetiranje?</v-expansion-panel-header>
                <v-expansion-panel-content>Naši partner vozači koriste FlasterApp koja bilježi dnevna kretanja (GPS). Flaster platforma koristi GPS koordinate vozača kako bi digitalno targetirala mobitele koji su se zatekli u vidljivom radijusu vozila. Digitalnom retarget kampanjom ciljamo one mobitele/ljude koji odgovaraju zadanim parametrima.</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
                <v-expansion-panel-header>Kako garantirate kvalitetu i premium izgled reklame na svakom tipu vozila?</v-expansion-panel-header>
                <v-expansion-panel-content>Naš kreativni tim u suradnji s kreativnom agencijom brenda priprema materijale kako bi reklama na svakom vozilu imala premium izgled. Prijedlog dizajna i priprema za svako vozilo su u nadležnosti našeg kreativnog tima i uključeno je u cijenu.</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
                <v-expansion-panel-header>Je li u cijenu uključeno obljepljivanje i folija?</v-expansion-panel-header>
                <v-expansion-panel-content>Folija i obljepljivanje su uključeni u cijenu proizvoda.</v-expansion-panel-content>
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
            this.$emit('userType', 'brands');
        }
    }
}
</script>
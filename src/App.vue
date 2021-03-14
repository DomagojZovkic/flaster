<style lang="scss">
  body {
    overflow: hidden;
  }
</style>
<template>
  <v-app>
    <ContactBox 
    :openBox="openModal"
    :typeUser="userType"
    />
    <Header />
    <v-main>
      <router-view 
      @openForm="formOpen"
      @userForm="userTypes"
      ></router-view>
    </v-main>
    <Footer @openForm="formOpen"/>
  </v-app>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import Header from '@/components/global/Header'
import Footer from '@/components/global/Footer'
import ContactBox from '@/components/global/ContactBox'

export default {
  name: 'App',

  components: {
    Header,
    Footer,
    ContactBox
  },

  data: () => ({
    aws_url: process.env.AWS_URL,
    bandageAid: null,
    openModal: false,
    userType: ''
  }),
  methods: {
    formOpen(data) {
      this.openModal = data
    },
    userTypes(data) {
      this.userType = data
    }
  },
  metaInfo() {
        return {
            title: `Flaster | Provozajte svoj brend`,
            meta: [
                { name: 'description', content: 'Omnichannel platforma koja povezuje sve prednosti pokretnog oglašavanja brendova i digitalnogremarketinga s vozačima koji žele dodatno zaraditi.'},
                { property: 'og:title', content: 'Flaster | Provozajte svoj brend'},
                { property: 'og:site_name', content: 'Flaster | Provozajte svoj brend'},
                { property: 'og:description', content: 'Omnichannel platforma koja povezuje sve prednosti pokretnog oglašavanja brendova i digitalnogremarketinga s vozačima koji žele dodatno zaraditi.'},
                {property: 'og:type', content: 'website'},
                {property: 'og:url', content: `${process.env.VUE_APP_URL}`},
                {property: 'og:image', content:`/${process.env.VUE_APP_URL}/main.jpg` }    
            ]
        }
    },
};
</script>

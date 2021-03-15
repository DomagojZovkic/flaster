<style lang="scss">
  .v-overlay__scrim {
    backdrop-filter: blur(20px);
  }

  .contact_form_card {
    padding: 20px;
    position: relative;
    .close_btn {
      font-size: 30px;
      width: 40px;
      height: 40px;
      background: white;
      border-radius: 50% !important;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
      color: #670A4A;
      float: right;
    }
  }
  @media only screen and (min-width: 768px) { 
    .contact_form_card {
      padding: 20px 80px;
      .close_btn {
        position: absolute !important;
        top:10px;
        right:10px;
      }
    }
  }
  
</style>

<template>
  <v-row justify="center">
    <v-dialog 
    v-model="dialog" 
    persistent max-width="700"
    height="100%"
    overlay-color="rgba(103, 10, 74, 0.8)"
    overlay-opacity="1"
    >
      <template v-slot:activator="{ on }" v-on="on">
      </template>
     <v-card
     class="mx-auto contact_form_card rounded-xl float-right"
     max-width="700px"
     max-height="1200px"
     width="100%"
     >
     <v-icon 
     @click="closeModal"
     class="close_btn"
     style="font-size:30px"
     >mdi-close</v-icon>
       <ContactForm 
       :userType="titleFor"
       :resetForm="resetForm"
       />
     </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import ContactForm from '@/components/forms/ContactForm'

  export default {
    components: {
        ContactForm
    },
    props: {
      modal: Boolean,
      typeUser: String
    },
    watch: {
      modal() {
        if (this.modal) {
          this.dialog = true
        }
      },
      typeUser() {
        this.titleFor = this.typeUser
      }
    },
    data () {
      return {
        dialog: false,
        titleFor: '',
        resetForm: false
      }
    },
    methods: {
      closeModal() {
        this.dialog = false;
        this.resetForm = !this.resetForm;
        this.$emit('closeModal');
      }
    },
    mounted() {
      this.titleFor = this.typeUser
    }
  }
</script>
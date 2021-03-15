<style lang="scss">
  .contact_form {
    .form_title {
      font-weight: 700;
      font-size: 24px;
      line-height: 30px;
      color: #670A4A;
    }
    .form_subtitle {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #000000;
      margin-top:10px;
      margin-bottom: 20px;
    }
    .form_success {
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      color: green;
      text-align: center;
    }
    .contact_form_label {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        margin-top: 2px;
        display: block;
      }
    .contact_form_input {
      width: 100%;
      height: 40px;
      background: #FFFFFF;
      border: 1px solid #670A4A;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif !important;
      border-radius: 10px;
      outline: unset;
      padding-left: 15px;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      padding-right: 60px;
    }
    .v-text-field {
      width: 100%;
      .v-input__slot {
        width: 100% !important;
        height: 40px;
        background: #FFFFFF;
        border: 1px solid #670A4A;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif !important;
        border-radius: 10px !important;
        outline: unset;
        padding-left: 15px;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        padding-right: 60px;
      }
    }
    .v-textarea {
      .v-text-field__slot {
        display: block;
        width: 100%;
        height: 100%;
      } 
      .v-input__slot {
        width: 100%;
        height: 150px;
        background: #FFFFFF;
        border: 1px solid #670A4A;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif !important;
        border-radius: 10px;
        margin-bottom: 20px;
        outline: unset;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        padding-top: 15px;
        padding-right: 15px;
        padding-left: 15px;
        padding-bottom: 10px;
        &::before {
          display: none !important
        }
        &::after {
          display: none !important
        }
        textarea {
          resize: none;
        }
      }
    }
    .v-input__slot {
        &::before {
          display: none !important
        }
        &::after {
          display: none !important
        }
      }
    .contact_form_input.active {
      border: 2px solid #E3B505;
      color: #670A4A;
    }
  }
  .input-wrapper {
    position: relative;
  }
  .input-wrapper > .input_icon {
    width: 24px;
    height: 24px;
    position: absolute;
    right: 10px;
    top: 40px;
  }
  @media only screen and (max-width: 768px) {
    input, textarea {
    font-size: 14px;
  }
  }
  @media only screen and (min-width: 768px) {
    .contact_form {
      .form_title {
        font-size: 26px;
        line-height: 44px;
      }
      .form_subtitle {
        font-size: 14px;
        line-height: 24px;
      }
      .v-input__slot {
        height: 60px !important;
      }
      .v-textarea {
        .v-input__slot {
          height: 150px !important;
        }
      } 
      .input-wrapper > .input_icon {
          right: 20px;
          top: 50px;
      }
    }
  }
</style>

<template>
  <v-form
    class="contact_form"
    ref="form"
    v-model="valid"
    :lazy-validation="lazy"
  >
  <div class="global_contact_wrapper" v-if="titleFor == 'global'">
    <h5 style="font-family: 'Inter', sans-serif !important;" class="form_title">Imate pitanja i prijedloge ili se želite informirati o Flasteru?</h5>
    <p style="font-family: 'Inter', sans-serif !important;" class="form_subtitle">Ostavite nam svoje kontakt podatke i Flaster tim će Vam se javiti u najkraćem mogućem roku.</p>
  </div>
  
  <div class="brands_contact_wrapper"  v-if="titleFor == 'brands'">
    <h5 style="font-family: 'Inter', sans-serif !important;" class="form_title">Želite se oglašavati na Flaster vozilima?</h5>
    <p style="font-family: 'Inter', sans-serif !important;" class="form_subtitle">Ostavite nam svoje kontakt podatke i Flaster tim će Vam se javiti u najkraćem mogućem roku.</p>
  </div>

  <div class="drivers_contact_wrapper"  v-if="titleFor == 'drivers'">
    <h5 style="font-family: 'Inter', sans-serif !important;" class="form_title">Želite postati Flaster vozač?</h5>
    <p style="font-family: 'Inter', sans-serif !important;" class="form_subtitle">Ostavite nam svoje kontakt podatke i Flaster tim će Vam se javiti u najkraćem mogućem roku.</p>
  </div>

  <div class="global_contact_wrapper" v-if="titleFor == 'mediaKit'">
    <h5 style="font-family: 'Inter', sans-serif !important;" class="form_title">Preuzmite Media kit i cjenik</h5>
    <p style="font-family: 'Inter', sans-serif !important;" class="form_subtitle">Ostavite nam svoje kontakt podatke i Flaster tim će Vam se javiti u najkraćem mogućem roku.</p>
  </div>

  <div class="input-wrapper">
    <label class="contact_form_label" style="font-family: 'Inter', sans-serif !important;">Ime i prezime *</label>
    <v-text-field
      v-model="nameSurname"
      :rules="nameSurnameRules"
      required
      color="#670A4A"
    ></v-text-field>
    <v-img :src="require(`@/assets/user.svg`)" cover class="input_icon"/>
  </div>
    
  <div class="input-wrapper">
    <label class="contact_form_label" style="font-family: 'Inter', sans-serif !important;">E-mail adresa *</label>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      required
      color="#670A4A"
    ></v-text-field>
    <v-img :src="require(`@/assets/mail.svg`)" cover class="input_icon"/>
  </div>

    
  <div class="input-wrapper">
    <label class="contact_form_label" style="font-family: 'Inter', sans-serif !important;">Telefon/Mobitel</label>
    <v-text-field
      v-model="phone"
      :counter="40"
      type="number"
      color="#670A4A"
    ></v-text-field>
    <v-img :src="require(`@/assets/phone.svg`)" cover class="input_icon"/>
  </div>

  <div class="input-wrapper" v-if="titleFor !== 'drivers'">
    <label class="contact_form_label" style="font-family: 'Inter', sans-serif !important;">Tvrtka <span v-if="titleFor == 'brands'">*</span></label>
    <v-text-field
      v-model="company"
      :rules="companyRules"
      color="#670A4A"
    ></v-text-field>
  </div>

  <div class="input-wrapper">
     <label class="contact_form_label" style="font-family: 'Inter', sans-serif !important;">Vaša poruka *</label>
    <v-textarea
      v-model="description"
      :rules="descriptionRules"
      required
      color="#670A4A"
    ></v-textarea>
  </div>

    <p style="font-family: 'Inter', sans-serif !important;" class="form_success" v-if="success">Vaša je poruka poslana.</p>

    <v-btn
      :disabled="!valid"
      style="font-family: 'Inter', sans-serif !important;font-weight: 800;font-size: 16px;color:#FFF;background-color: #670A4A;border-radius: 20px;"
      class="mx-auto"
      @click="validateAxios"
      height="80px"
      width="100%"
    >
      POŠALJI PORUKU
    </v-btn>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      lazy: false,
      valid: true,
      success: false,
      titleFor: '',
      nameSurname: '',
      nameSurnameRules: [
        v => !!v || 'Unesite ime i prezime.',
      ],
      phone: '',
      email: '',
      emailRules: [
        v => !!v || 'Unesite E-mail adresu',
        v => /.+@.+\..+/.test(v) || 'E-mail adresa mora biti validna.',
      ],
      company: '',
      description: '',
      descriptionRules: [
          v => !!v || 'Unesite vašu poruku.'
      ],
    }),
    props: {
      userType: String,
      resetForm: Boolean
    },
    computed: {
      companyRules() {
        if (this.titleFor === 'brands') {
          return [(v) => !!v || 'Unesite vašu tvrtku.']
        }
        return [];
      }
    },
    watch: {
      userType() {
        this.titleFor = this.userType
      },

      resetForm() {
        this.lazy = false,
        this.valid = true;
        this.success = false;
        this.$refs.form.reset();
      }
    },
    methods: {
      validateAxios() {
        if (this.$refs.form.validate()) {
            var formData = new FormData();
            formData.append('name', this.nameSurname);
            formData.append('email', this.email);
            formData.append('phone', this.phone);
            formData.append('company', this.company);
            formData.append('message', this.description);
            formData.append('type', this.titleFor);

            this.axios.post('/sendmail.php', formData)
                  .then(response => {
                      this.success = true
                      setTimeout(() => {
                        this.success = false
                        this.nameSurname = ''
                        this.email = ''
                        this.phone = ''
                        this.company = ''
                        this.description = ''
                      }, 4000);
                  })
                  .finally(()=>{
                    setTimeout(() => {
                      this.$refs.form.reset()
                    }, 4000);
                  })
                  .catch(error => {
                      console.log('error', error)
                  });
        }
      },
    },
    mounted() {
      this.titleFor = this.userType
    }
  }
</script>
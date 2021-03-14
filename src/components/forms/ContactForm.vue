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
    .form_error {
      font-weight: 500;
      font-size: 24px;
      line-height: 24px;
      color: red;
      text-align: center;
    }
    .contact_form_label {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        margin-top: 2px;
        // margin-bottom: 20px;
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
      text-indent: 30px;
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
        text-indent: 30px;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        padding-right: 60px;
        input {
          text-indent: 30px;
        }
      }
    }
    .v-textarea {
      .v-input__slot {
        width: 100%;
        height: 100px;
        background: #FFFFFF;
        border: 1px solid #670A4A;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif !important;
        border-radius: 10px;
        margin-bottom: 20px;
        outline: unset;
        text-indent: 30px;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        padding-top: 20px;
        &::before {
          display: none !important
        }
        &::after {
          display: none !important
        }
        textarea {
          text-indent: 30px;
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
    .contact_form_input.active, .contact_form_textarea.active {
      border: 2px solid #E3B505;
      color: #670A4A;
    }
    .contact_form_textarea {
      width: 100%;
      height: 100px;
      background: #FFFFFF;
      border: 1px solid #670A4A;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif !important;
      border-radius: 10px;
      margin-bottom: 20px;
      outline: unset;
      text-indent: 30px;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      padding-top: 20px;
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
      .contact_form_textarea {
        height: 150px;
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

  <p style="font-family: 'Inter', sans-serif !important;" class="form_error" v-if="success">Vaša je poruka poslana.</p>

  <div class="input-wrapper">
    <label class="contact_form_label" style="font-family: 'Inter', sans-serif !important;">Ime i prezime</label>
    <v-text-field
      v-model="nameSurname"
      :rules="nameSurnameRules"
      required
      color="#670A4A"
    ></v-text-field>
    <!-- <input
    v-model="nameSurname" 
    type="text" 
    class="contact_form_input"
    ref="nameSurname"
    > -->
    <v-img :src="require(`@/assets/user.svg`)" cover class="input_icon"/>
  </div>
    
    <div class="input-wrapper">
    <label class="contact_form_label" style="font-family: 'Inter', sans-serif !important;">E-mail adresa</label>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      required
      color="#670A4A"
    ></v-text-field>
    <!-- <input
    v-model="email" 
    type="text" 
    class="contact_form_input"
    ref="email"
    > -->
    <v-img :src="require(`@/assets/mail.svg`)" cover class="input_icon"/>
    </div>

    
    <div class="input-wrapper">
    <label class="contact_form_label" style="font-family: 'Inter', sans-serif !important;">Telefon/Mobitel</label>
    <v-text-field
      v-model="phone"
      :counter="40"
      :rules="phoneRules"
      required
      type="number"
      color="#670A4A"
    ></v-text-field>
    <!-- <input
    v-model="phone" 
    type="number" 
    class="contact_form_input"
    ref="contact"
    > -->
    <v-img :src="require(`@/assets/phone.svg`)" cover class="input_icon"/>
    </div>

    <div class="input-wrapper">
     <label class="contact_form_label" style="font-family: 'Inter', sans-serif !important;">Vaša poruka</label>
    <v-textarea
      v-model="description"
      :rules="descriptionRules"
      required
      color="#670A4A"
    ></v-textarea>
    <!-- <textarea
    v-model="description"
    class="contact_form_textarea"
    ref="message"
    ></textarea> -->
    </div>

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
      emailSenders: null,
      nameSurnameRules: [
        v => !!v || 'Unesite ime i prezime.',
      ],
      phone: '',
      phoneRules: [
        v => !!v || 'Unesite kontakt broj',
        v => (v && v.length <= 40) || 'Manje od 40 znakova',
      ],
      email: '',
      emailRules: [
        v => !!v || 'Unesite E-mail adresu',
        v => /.+@.+\..+/.test(v) || 'E-mail adresa mora biti validna.',
      ],
      description: null,
      descriptionRules: [
          v => !!v || 'Unesite vašu poruku.'
      ],
    }),
    props: {
      userType: String
    },
    watch: {
      // nameSurname() {
      //   this.validateData()
      // },
      // email() {
      //   this.validateData()
      // },
      // phone() {
      //   this.validateData()
      // },
      // description() {
      //   this.validateData()
      // },
      userType() {
        this.titleFor = this.userType
      }
    },
    methods: {
      // nameSurnameValidate() {
      //   if (this.nameSurname.length > 5) {
      //     return false
      //   } else {
      //     return true
      //   }

      // },
      // phoneValidate() {
      //   if (this.phone.length > 5) {
      //     return false
      //   } else {
      //     return true
      //   }
      // },
      // emailValidate(mail) {
      //   var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      //     if(mail.match(mailformat)) {
      //      return false
      //     } else {
      //       return true
      //     }
      // },
      // descriptionValidate() {
      //   if (this.description.length > 10) {
      //     return false
      //   } else {
      //     return true
      //   }
      // },
      // validateData() {
      //   if ((this.nameSurnameValidate() == true ) || (this.emailValidate(this.email) == true) ||(this.phoneValidate() == true) || (this.descriptionValidate() ==true)) {
      //       this.valid = true
      //   } else {
      //     this.valid = false
      //   }
      // },
      validateAxios() {
        if (this.$refs.form.validate()) {
            var formData = new FormData();
            formData.append('name', this.nameSurname);
            formData.append('email', this.email);
            formData.append('phone', this.phone);
            formData.append('message', this.description);
            this.axios.post('/sendmail.php', formData)
                  .then(response => {
                      this.success = true
                      setTimeout(() => {
                        this.success = false
                        this.nameSurname = ''
                        this.email = ''
                        this.phone = ''
                        this.description = ''
                      }, 3000);
                  })
                  .finally(()=>{
                     this.success = true
                    setTimeout(() => {
                      this.success = false
                      this.nameSurname = ''
                      this.email = ''
                      this.phone = ''
                      this.description = ''
                      this.$refs.form.reset()
                    }, 3000);
                  })
                  .catch(error => {
                      console.log('error', error)
                  });
        }
      },
      // validate () {

      //   const contactObj = {
      //     name: this.nameSurname,
      //     email: this.email,
      //     phone: this.phone,
      //     subject: "A message from Flaster",
      //     message: this.description
      //   }
        
      // var mailgun = require('mailgun.js');
      // var mg = mailgun.client({username: 'api', key: process.env.VUE_APP_MAIL_KEY, url: process.env.VUE_APP_MAIL_URL });

      // this.emailSenders.forEach(email => {
      //   mg.messages.create(process.env.VUE_APP_MAIL_DOMAIN, {
      //       from: `Flaster Team <${contactObj.email}>`,
      //       to: [email],
      //       subject: contactObj.name,
      //       text: contactObj.message,
      //       html: `<h1>${contactObj.message}</h1>`
      //     })
      //   .then((msg)=>{
      //     this.success = true
      //     setTimeout(() => {
      //       this.success = false
      //       this.nameSurname = ''
      //       this.email = ''
      //       this.phone = ''
      //       this.description = ''
      //     }, 3000);
      //   }) 
      // });

      // },
      // reset () {
      //   this.$refs.contactform.reset()
      // },
    //   resetValidation () {
    //     this.$refs.form.resetValidation()
    //   },
    },
    mounted() {
      this.titleFor = this.userType
      // this.emailSenders = process.env.VUE_APP_MAIL_SENDERS;
      // this.emailSenders = this.emailSenders.split(",");
    }
  }
</script>
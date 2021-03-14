<style lang="scss">
  .desktop-nav-wrapper {
    button {
      color: #670A4A !important;
      &:last-child {
        margin-left: 50px;
      }
      // .bandage_link {
      //   display: none;
      // }
    }
    button.active {
      padding: 25px !important;
      background-color: #670A4A;
      box-shadow: 0px 10px 20px rgba(175, 48, 134, 0.25);
      border-radius: 20px;
      color: white !important;
      // .bandage_link {
      //   display: block;
      //   height: 100px;
      //   width: 100px;
      //   position: absolute;
      //   top: -55px;
      //   left: -65px;
      // }
    }
  }
</style>

<template>
  <nav v-resize="onResize">
    <v-app-bar app flat height="80" color="white">
      <v-toolbar-title 
      @click="$route.name == 'Home' ? false : $router.push({ name: 'Home' });checkRoute()"
      style="cursor:pointer;"
      v-scroll-to="'#app'"
      >
        <v-img :src="require(`@/assets/logo_main.svg`)" width="80px" height="100%" contain class="float-left"></v-img>
        <span class="float-right mt-5 ml-3" style="font-family: 'Inter', sans-serif;font-weight: 900; color: #670A4A; font-size:25px;">FLASTER</span>
        </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
      v-if="mobileMenu"
      @click="menu=!menu"
      ></v-app-bar-nav-icon>
      <div class="desktop-nav-wrapper" v-else>
        <v-btn 
        text 
        style="font-family: 'Inter', sans-serif;font-size: 16px;font-weight: 700;"
        @click="$route.name == 'Brands' ? false : $router.push({ name: 'Brands' });checkRoute()"
        v-bind:class="{ active: isActiveBrands }"
        v-scroll-to="'#app'"
        >
        ZA BRENDOVE I AGENCIJE
        <!-- <v-img :src="require(`@/assets/bandage_nav.svg`)" contain class="bandage_link"></v-img> -->
        </v-btn>
        <v-btn 
        text 
        style="font-family: 'Inter', sans-serif;font-size: 16px;font-weight: 700;"
        @click="$route.name == 'Drivers' ? false : $router.push({ name: 'Drivers' });checkRoute()"
        v-scroll-to="'#app'"
        v-bind:class="{ active: isActiveDrivers }"
        >
        ZA VOZAČE
        <!-- <v-img :src="require(`@/assets/bandage_nav.svg`)" contain class="bandage_link"></v-img> -->
        </v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer 
    v-model="menu" 
    app 
    right
    v-if="mobileMenu"
    class="mobile_menu"
    width="300px"
    bottom
    >
      <v-list>
        <v-list-item
          v-for="item in nav"
          :key="item.link"
          router
          :to="item.link"
          v-scroll-to="'#app'"
        >
          <v-list-item-icon>
            <v-icon large style="color: rgb(103, 10, 74);">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title style="font-family: 'Inter', sans-serif !important;font-weight: 700;font-size: 14px;color:#670A4A;">{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  directives: {
    
  },
  data() {
    return {
      menu: false,
      nav: [
        { icon: "mdi-home", text: "Home", link: "/" },
        { icon: "mdi-car", text: "ZA BRENDOVE I AGENCIJE", link: "/brands" },
        { icon: "mdi-car-hatchback", text: "ZA VOZAČE", link: "/drivers" },
      ],
      mobileMenu: true,
      isActiveBrands: false,
      isActiveDrivers: false,
    };
  },
  computed: {
  },
  watch: {
    $route(to, next) {
      this.checkRoute()
    },
  },
  methods: {
    checkRoute() {
      if (this.$route.name == 'Brands') {
        this.isActiveBrands = true
        this.isActiveDrivers = false
      } else if (this.$route.name == 'Drivers') {
        this.isActiveBrands = false
        this.isActiveDrivers = true
      } else {
        this.isActiveBrands = false
        this.isActiveDrivers = false
      }
    },
    displayMenu() {
        if (window.innerWidth >= 768) {
        this.mobileMenu = false
      } else {
        this.mobileMenu = true
      }
    },
    onResize () {
        this.displayMenu()
      }
  },
  mounted() {
    this.displayMenu();
    this.checkRoute();
  }
};
</script>

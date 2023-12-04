<template>
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer">
        <v-list dense>
  
          <v-list>
            <v-list-subheader>Menu</v-list-subheader>
          </v-list>
  
          <router-link to="/" tag="li" exact>
            <v-list>
              <v-list-item prepend-icon="mdi-home">Regresar a Home</v-list-item>
            </v-list>
          </router-link>


  
        </v-list>
      </v-navigation-drawer>
      <v-app-bar>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>Autentificación</v-app-bar-title>
      </v-app-bar>
      <v-main>

        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 95vh;">
        <h1 style="margin-bottom: 1em;">Autentíficate para acceder al Sistemas de Donaciones.</h1>

        <div class="btn-cont">
      <div id="google-login-btn" v-google-login-btn="{ clientId, locale:'en' }">
          Aquí está el botón de Google
      </div>
    </div>
      </div>

      </v-main>
    </v-app>
  </template>
  
  <script setup>
    import { ref } from 'vue'
    const drawer = ref(null)
  </script>
  
  <script>
  import GoogleLoginBtn from './GoogleButton.vue'
  
  export default {
  
    directives: {
      GoogleLoginBtn
    },
  
    data() {
      return {
        clientId: "785324385764-i8strnr7ppvgksf9ccrm51p9sp9rrrih.apps.googleusercontent.com"
      }
    },
  
    methods: {
      onGoogleAuthSuccess(jwtCredentials) {
        console.log(jwtCredentials);
        const profileData = JSON.parse( atob(jwtCredentials.split('.')[1]) );
        const { name, picture, email } = profileData;
        console.table({ name, picture, email });
      }
    }
  }
  </script>

<style scoped>
.btn-cont {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
}
.btn-cont > div {
  width: 300px;
  text-align: center;
}
</style>
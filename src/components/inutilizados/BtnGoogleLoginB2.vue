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

        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 25vh;">
        <h1 style="margin-bottom: 1em;">Bienvenido, autentíficate para acceder al Sistemas de Donaciones.</h1>
        <ul>
            * AQUÍ VA EL BOTÓN DE GOOGLE *
        </ul>

        <div ref="googleLoginBtn" class="btn_google"></div>

      </div>

      </v-main>
    </v-app>
  </template>

      <script setup>
      
      import { ref, onMounted } from 'vue'
      const googleLoginBtn = ref(null);

      onMounted(() => {
        window.google.accounts.id.initialize({
          client_id: process.env.VUE_APP_ID_CLIENT_GOOGLE,
          callback: onSuccess,
          context: 'signin',
          auto_select: false,
          scope: process.env.VUE_APP_GOOGLE_SCOPES,
          referrerPolicy: {
            policy: 'strict-origin-when-cross-origin'
          }
        });
        
        window.google.accounts.id.renderButton(
          googleLoginBtn.value, {
          text: 'signin_with', // or 'signup_with' | 'continue_with' | 'signin'
          size: 'large', // or 'small' | 'medium'
          width: '366', // max width 400
          theme: 'outline', // or 'filled_black' |  'filled_blue'
          logo_alignment: 'center' // or 'center'
        });
      });
      
      function parseJwt(token) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
      
        return JSON.parse(jsonPayload);
      }
      
      function onSuccess(googleUser) {
        const user = parseJwt(googleUser.credential)
        console.log(user);
        // Puedes manejar la información del usuario según tus necesidades
      }
      </script>
      
  
      <script>
      import { ref, onMounted } from 'vue';
      
      export default {
      data: () => ({
        drawer: null,
      }),
    }
    </script>

<style>
.btn_google {
  display: flex;
  justify-content: center;
}
</style>
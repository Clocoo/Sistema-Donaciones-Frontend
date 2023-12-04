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

  <g-signin-button
    :params="googleSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Sign in with Google
  </g-signin-button>

      </div>

      </v-main>
    </v-app>
  </template>
  
  <script setup>
    import { ref } from 'vue'
    const drawer = ref(null)
  </script>
  
  <script>
  export default {
    data () {
      return {
        /**
         * The Auth2 parameters, as seen on
         * https://developers.google.com/identity/sign-in/web/reference#gapiauth2initparams.
         * As the very least, a valid client_id must present.
         * @type {Object} 
         */
        googleSignInParams: {
          client_id: 'YOUR_APP_CLIENT_ID.apps.googleusercontent.com'
        }
      }
    },
    methods: {
      onSignInSuccess (googleUser) {
        // `googleUser` is the GoogleUser object that represents the just-signed-in user.
        // See https://developers.google.com/identity/sign-in/web/reference#users
        const profile = googleUser.getBasicProfile() // etc etc
      },
      onSignInError (error) {
        // `error` contains any error occurred.
        console.log('OH NOES', error)
      }
    }
  }
  </script> 

<style>
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}
</style> 
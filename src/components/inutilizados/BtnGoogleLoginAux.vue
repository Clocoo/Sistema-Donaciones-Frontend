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
  
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 55vh;">
        <h1 style="margin-bottom: 1em;">Autentíficate para acceder al Sistemas de Donaciones.</h1>
  
  
        <div ref="googleLoginBtn" class="btn_google"></div>
         
  
      </div>
  
      </v-main>
    </v-app>
  </template>
  
  <script setup>
    import { ref , onMounted } from 'vue'
    import axios from "axios";
    const drawer = ref(null)
    const googleLoginBtn = ref(null);
  
  onMounted(() => {
    window.google.accounts.id.initialize({
        client_id: "213567247808-m79h0m01d3tk66dr1sc5324ddq6t8g5c.apps.googleusercontent.com",
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
    /* Buffer.from(base64,'base64')
    decodeURIComponent(atob(base64).split('').map(function (c) */
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.parse(jsonPayload);
  }
  
  async function onSuccess(googleUser) {
  const user = parseJwt(googleUser.credential);
  
  // Envía el token al backend
  try {
    const response = await axios.post('https://localhost:4001/authenticate', {
      token: googleUser.credential,
      // ... otros datos que puedas necesitar enviar al backend ...
    });
  
    const jwtToken = response.data.jwtToken;
  
    // Guarda el token JWT en localStorage o en alguna variable de estado de tu aplicación
    // para usarlo en las solicitudes futuras al backend.
    // localStorage.setItem('jwtToken', jwtToken);
  
    // Redirige a la página deseada después de la autenticación
    window.location.href = '/vistaInicioDonaciones';
  } catch (error) {
    console.error('Error al autenticar con el backend:', error);
  }
  }
  </script>
  <style>
  .btn_google {
    display: flex;
    justify-content: center;
  }
  </style>
<template>
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer">
        <v-list dense>
  
          <v-list>
            <v-list-subheader>Menu</v-list-subheader>
          </v-list>
  
          <router-link to="/autenticacion" tag="li" exact>
            <v-list>
              <v-list-item prepend-icon="mdi-home">Salir</v-list-item>
            </v-list>
          </router-link>

          <router-link to="/vistaPersonas" tag="li" exact>
            <v-list>
              <v-list-item prepend-icon="mdi-account">Personas</v-list-item>
            </v-list>
          </router-link>

          <router-link to="/vistaProyectos" tag="li" exact>
            <v-list>
              <v-list-item prepend-icon="mdi-account">Proyectos</v-list-item>
            </v-list>
          </router-link>

          <router-link to="/vistaDonatarios" tag="li" exact>
            <v-list>
              <v-list-item prepend-icon="mdi-account">Donadores</v-list-item>
            </v-list>
          </router-link>
  
        </v-list>
      </v-navigation-drawer>
      <v-app-bar>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>Sistema de Donaciones</v-app-bar-title>
      </v-app-bar>
      <v-main>
        
<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 35vh;">
        <h1 style="margin-bottom: 1em;">Bienvenido, ya estás autenticado.</h1>
        <h2 style="margin-bottom: 1em;">Puedes acceder a las tablas Proyectos, Donadores y Personas en la Sección del Menú.</h2>
        <ul>
        </ul>
      </div>

      </v-main>
    </v-app>
  </template>
  
  <script setup>
    import { ref } from 'vue'
    const drawer = ref(null)

  </script>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
  data: () => ({
    drawer: null,
    proyectos: [], // Agrega una propiedad para almacenar los proyectos completos
  }),
};
</script>
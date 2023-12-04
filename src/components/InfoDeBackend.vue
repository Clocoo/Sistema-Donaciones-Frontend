<template>
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer">
        <v-list dense>
  
          <v-list>
            <v-list-subheader>Menu</v-list-subheader>
          </v-list>
  
          <router-link to="/" tag="li" exact>
            <v-list>
              <v-list-item prepend-icon="mdi-home">Home</v-list-item>
            </v-list>
          </router-link>
  
          <router-link to="/tabla" tag="li" exact>
      <v-list>
      <v-list-item prepend-icon="mdi-table">Tabla</v-list-item>
                </v-list>
    </router-link>
    
    <router-link to="/cards" tag="li" exact>
      <v-list>
      <v-list-item prepend-icon="mdi-cards">Cards</v-list-item>
                </v-list>
    </router-link>
  
    <router-link to="/inforecogidadebackend" tag="li" exact>
      <v-list>
      <v-list-item prepend-icon="mdi-account">Proyectos M2.2</v-list-item>
                </v-list>
    </router-link>

    <router-link to="/backendDonaciones" tag="li" exact>
    <v-list>
    <v-list-item prepend-icon="mdi-account">Donaciones a Proyectos</v-list-item>
              </v-list>
  </router-link>

  
        </v-list>
      </v-navigation-drawer>
      <v-app-bar>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>Información recogida del Backend</v-app-bar-title>
      </v-app-bar>
      <v-main>

        <div>
  <h1> Lista de Proyectos</h1>
  <ul>
    <li v-for="proyecto in proyectos" :key="proyecto.ID">
      <strong>{{ proyecto.nombre }}</strong> - {{ proyecto.descripcion }}
    </li>
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
  
  // Añade la lógica para obtener los proyectos en el ciclo de vida "mounted"
  mounted() {
    fetch('http://localhost:4000/proyectos') // Reemplaza 'puerto' con el puerto de tu servidor backend y '/proyectos' con la ruta correcta.
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        this.proyectos = data; // Asigna los proyectos completos a la propiedad "proyectos"
      })
      .catch((error) => {
        console.error('Error al obtener los proyectos', error);
      });
  },
};
</script>
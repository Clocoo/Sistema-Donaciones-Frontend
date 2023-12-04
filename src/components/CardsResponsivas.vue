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
      <v-app-bar-title> Cards </v-app-bar-title>
    </v-app-bar>

    <v-main>
      <!-- 8 en una sola columna (XL) -->
      <v-container>
        <v-row no-gutters>
          <v-col
            v-for="(post, index) in datosPosts.slice(0,20)"
            :key="index"
            cols="12"
            sm="4"
            md="3"
            lg="2"
            xl="1"
          >
            <v-card class="mx-auto" max-width="344">
              <v-sheet class="me-6 pa-2">
                <v-img :src="url" cover></v-img>
                <v-card-title class="small-title"> {{ post.body }} </v-card-title>
                <v-card-subtitle>{{ getUser(post.userId) }}</v-card-subtitle>
                <v-card-actions>
                  <v-btn
                    color="purple"
                    variant="text"
                    width="140"
                    @click="cambiarImagen"
                  >
                    IMG RND
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
        ></v-btn>
                </v-card-actions>
                <v-expand-transition>
                  <div v-show="show">
                    <v-divider></v-divider>

                    <v-card-text>
                      {{ post.title }}
                    </v-card-text>
                    
                  </div>
                </v-expand-transition>
              </v-sheet>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
.small-title {
  font-size: 10px;
  line-height: 1.2;
}
</style>

<script setup>
import { ref, onMounted } from 'vue';
const drawer = ref(null)
const show = ref(false);
const urlImagen = ref("https://random.imagecdn.app/300/400");
const url = ref(urlImagen.value);
const datosPosts = ref([]);
const users = ref([]);

async function fetchData() {
  try {
    const [postsResponse, usersResponse] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/users"),
    ]);
    datosPosts.value = await postsResponse.json();
    users.value = await usersResponse.json();
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  fetchData();
});

async function cambiarImagen(){
    // Para acceder al valor es .value si se declara con ref
    const response = await fetch(urlImagen.value,{
        method: "GET",
        headers: {
          "Content-type":"application/json"
        }
    });
    //const data = await response.json();
    console.log(response.url);
    url.value = response.url;
    //console.log("Cambiando Imagen");
    //console.log(response);
  }  

function getUser(userId) {
  const user = users.value.find((user) => user.id === userId);
  return user ? user.name : "";
}
</script>

<script>
export default {
  props: {
    datosPosts: Array,
    users: Array,
  },
};
</script>

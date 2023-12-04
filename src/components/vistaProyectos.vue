<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-list dense>
        <v-list>
          <v-list-subheader>Menu</v-list-subheader>
        </v-list>

        <router-link to="/vistaInicioDonaciones" tag="li" exact>
          <v-list>
            <v-list-item prepend-icon="mdi-home">Regresar a la página principal</v-list-item>
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
      <v-app-bar-title>Proyectos</v-app-bar-title>
    </v-app-bar>

    <v-main>

      <v-container>

  <v-data-table height="600"
    :headers="headers"
    :items="datosPosts"
    :sort-by="[{ key: 'id', order: 'asc' }]"
    class="elevation-1"
  >

    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Tabla de Proyectos</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>

        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="props"
            >
              Añadir nuevo Proyecto
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <v-card-title class="text-h7">Añadir Proyecto</v-card-title>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.nombreProyecto"
                      label="Nombre"
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.descProyecto"
                      label="Descripción"
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.donatarioId"
                      label="ID Donatario"
                    ></v-text-field>
                  </v-col>

                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="close"
              >
                Cerrar
              </v-btn>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="save"
              >
                Agregar
              </v-btn>
 
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h7">¿Estás seguro que quieres eliminar el registro?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete">No</v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">Sí</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>

<v-dialog
          v-model="dialogEditItem"
          max-width="500px"
        >

          <v-card>
            <v-card-title class="text-h7">Modificar Proyecto</v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.nombreProyecto"
                      label="Nombre"
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.descProyecto"
                      label="Descripción"
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.donatarioId"
                      label="ID Donatario"
                    ></v-text-field>
                  </v-col>

                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="closeEditItem"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="editItemConfirm"
              >
                Guardar
              </v-btn>
 
            </v-card-actions>
          </v-card>
        </v-dialog>

      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        size="small"
        class="me-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        size="small"
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>


  </v-data-table>

</v-container>

    </v-main>

  </v-app>
</template>

<script setup>
  import { ref } from 'vue'
  const drawer = ref(null)
</script>

<script>
export default {
data: () => ({
  dialog: false,
  dialogDelete: false,
  dialogEditItem: false,
  headers: [
    {
      title: 'ID',
      align: 'center',
      width: "100px",
      sortable: false,
      key: 'id',
    },
    {
      title: 'Nombre',
      align: 'center',
      width: "100px",
      sortable: false,
      key: 'nombreProyecto',
    },
    { title: 'Descripción', key: 'descProyecto', sortable: false, align: "center", width: "100px" },
    { title: 'ID Donatario', key: 'donatarioId', sortable: false, align: "center", width: "100px" },
    //{ title: 'Creado en', key: 'creadoen', sortable: false, align: "center", width: "100px" },
    //{ title: 'Actualizado en', key: 'actualizadoen', sortable: false, align: "center", width: "100px" },
    { title: 'Actions', key: 'actions', sortable: false, align: "center", width: "100px" },
  ],
  datosPosts: [],
  editedIndex: -1,
  editedItem: {
    id: '',
    nombreProyecto: '',
    descProyecto: '',
    donatarioId: '',
  },
  defaultItem: {
    id: '',
    nombreProyecto: '',
    descProyecto: '',
    donatarioId: '',
  },
  users: [],
}),

computed: {
  formTitle () {
    return this.editedIndex === -1 ? 'Proyecto' : 'Editar Item'
  },
},

watch: {
  dialog (val) {
    val || this.close()
  },
  dialogDelete (val) {
    val || this.closeDelete()
  },
},

created () {
  this.initialize()
},

methods: {
  async initialize () {

    // Obteniendo el Token 
    const jwtToken = localStorage.getItem("jwtToken");

    try {
    const response = await fetch('https://localhost:4001/proyectos', {
      headers: {
        'Authorization': 'Bearer '+jwtToken,
        // Asegúrate de incluir cualquier encabezado adicional necesario
      },
    });

    if (response.ok) {
      this.datosPosts = await response.json();
    } else {
      console.error('Error al obtener datos:', response.statusText);
      // Puedes mostrar un mensaje de error si lo prefieres
    }
  } catch (error) {
    console.error('Error de red:', error.message);
    // Puedes mostrar un mensaje de error si lo prefieres
  }
},

  editItem (item) {
  // Accede al objeto real a través de la propiedad 'raw'
  const realItem = item.raw;

  // Desestructura el objeto real para acceder a las propiedades
  const { id, nombreProyecto, descProyecto, donatarioId } = realItem;

  // Asigna los valores al editedItem
  this.editedItem.id = id;
  this.editedItem.nombreProyecto = nombreProyecto;
  this.editedItem.descProyecto = descProyecto;
  this.editedItem.donatarioId = donatarioId; // Asumo que donatarioId es la propiedad correcta

  this.dialogEditItem = true;
  },

  async editItemConfirm() {
try {
  // Validar la entrada antes de enviar la solicitud
  if (!this.editedItem.nombreProyecto || !this.editedItem.descProyecto || !this.editedItem.donatarioId) {
    console.error('Nombre, Desc, y Donatario, son campos obligatorios.');
    return;
  }

    // Obteniendo el Token 
    const jwtToken = localStorage.getItem("jwtToken");

  // Realizar la solicitud PUT al servidor
  const response = await fetch(`https://localhost:4001/proyecto/${this.editedItem.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+jwtToken,
      // Asegúrate de incluir cualquier encabezado adicional necesario, como encabezados de autenticación
    },
    body: JSON.stringify({
      descProyecto: this.editedItem.descProyecto,
      nombreProyecto: this.editedItem.nombreProyecto,
      donatarioId: this.editedItem.donatarioId,
      // Ajusta los nombres de las propiedades según tus datos
    }),
  });

  if (response.ok) {
    // Actualizar la fila en la lista de personas con los nuevos datos
    const index = this.datosPosts.findIndex(proyecto => proyecto.id === this.editedItem.id);
    if (index !== -1) {
      this.datosPosts[index].nombreProyecto = this.editedItem.nombreProyecto;
      this.datosPosts[index].descProyecto = this.editedItem.descProyecto;
      this.datosPosts[index].donatarioId = this.editedItem.donatarioId;
    }

    // Limpiar el formulario después de la actualización
    this.limpiarFormulario();
    this.dialogEditItem = false;
    // Mostrar un mensaje de éxito al usuario
    this.mostrarMensaje('Proyecto actualizado exitosamente.');
  } else {
    console.error('Error al actualizar la proyecto:', response.statusText);
    this.mostrarMensaje('Error al actualizar el proyecto. Por favor, inténtalo de nuevo.');
  }
} catch (error) {
  console.error('Error de red:', error.message);
  this.mostrarMensaje('Error de red. Por favor, verifica tu conexión e inténtalo de nuevo.');
}
},

  deleteItem (item) {
// Obtener el ID directamente del objeto item
const proyectoId = item.key;
console.log(item)
// Asignar el ID a editedItem para que esté disponible al confirmar la eliminación
this.editedItem.id = proyectoId;
// Mostrar el diálogo de confirmación
this.dialogDelete = true;
  },
//fasdfsdf
  async deleteItemConfirm () {
    try {
  // Obtener el id del registro a eliminar
  const proyectoId = this.editedItem.id;
  console.log(" es = "+this.editedItem.id)
  // Verificar si el id está presente
  if (!proyectoId) {
    console.error('ID no encontrado en el registro seleccionado.');
    return;
  }

    // Obteniendo el Token 
    const jwtToken = localStorage.getItem("jwtToken");

  // Enviar la solicitud DELETE al servidor
  const response = await fetch(`https://localhost:4001/proyecto/${proyectoId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': "Bearer "+jwtToken,
      // Otros encabezados de autenticación u otros necesarios
    },
  });

  if (response.ok) {
    console.log('Persona eliminada con éxito');

    // Eliminar el registro de la lista
    this.datosPosts.splice(this.editedIndex, 1);

    this.initialize();

    // Cerrar el diálogo de confirmación
    this.closeDelete();

    // Mostrar un mensaje de éxito al usuario
    this.mostrarMensaje('Proyecto eliminado exitosamente.');
  } else {
    console.error('Error al eliminar la proyecto:', response.statusText);
    this.mostrarMensaje('Error al eliminar el proyecto. Por favor, inténtalo de nuevo.');
  }
} catch (error) {
  console.error('Error de red:', error.message);
  this.mostrarMensaje('Error de red. Por favor, verifica tu conexión e inténtalo de nuevo.');
}
},

  close () {
    this.dialog = false
    this.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem)
      this.editedIndex = -1
    })
  },

  closeDelete () {
    this.dialogDelete = false
    this.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem)
      this.editedIndex = -1
    })
  },

  closeEditItem () {
    this.dialogEditItem = false
    this.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem)
      this.editedIndex = -1
    })
  },

  async save () {
    try {
  // Validar la entrada antes de enviar la solicitud
  if (!this.editedItem.nombreProyecto || !this.editedItem.descProyecto || !this.editedItem.donatarioId) {
    console.error('Nombre, Desc, y Donatario, son campos obligatorios.');
    return;
  }
  //console.log(" es = "+this.editedItem.id)
  
  // Obteniendo el Token 
    const jwtToken = localStorage.getItem("jwtToken");

  const response = await fetch('https://localhost:4001/proyecto', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+jwtToken,
      // Asegúrate de incluir cualquier encabezado adicional necesario, como encabezados de autenticación
    },
    body: JSON.stringify({
      descProyecto: this.editedItem.descProyecto,
      nombreProyecto: this.editedItem.nombreProyecto,
      donatarioId: this.editedItem.donatarioId,
      // Ajusta los nombres de las propiedades según tus datos
    }),
  });

  if (response.ok) {
    const nuevoProyecto = await response.json();
    console.log('Nueva proyecto creada:', nuevoProyecto);

    // Actualizar la lista de personas después de crear una nueva
    this.datosPosts.push(nuevoProyecto);

    // Limpiar el formulario después de crear la nueva proyecto
    this.limpiarFormulario();

    // Mostrar un mensaje de éxito al usuario
    this.mostrarMensaje('Proyecto creado exitosamente.');
  } else {
    console.error('Error al crear el proyecto:', response.statusText);
    this.mostrarMensaje('Error al crear la proyecto. Por favor, inténtalo de nuevo.');
  }
} catch (error) {
  console.error('Error de red:', error.message);
  this.mostrarMensaje('Error de red. Por favor, verifica tu conexión e inténtalo de nuevo.');
}
},

limpiarFormulario() {
// Limpiar el formulario
this.editedItem.nombreProyecto = '';
this.editedItem.descProyecto = '';
this.editedItem.donatarioId = '';
},

mostrarMensaje(mensaje) {
// Mostrar un mensaje al usuario (puedes implementar esto según tu preferencia)
alert(mensaje);
},
  // Obtiene el nombreProyecto del Autor a partir de su userID, recorre la lista hasta encontrar
  // un autor cuyo id coincida con el userId que se proporcionó.
  //getUser(userId) {
    //const user = this.users.find((user) => user.id === userId);
    //return user ? user.name : "";
  //},
},
}
//////////////
</script>
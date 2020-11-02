<template>
  <div class="shop">
    <b-container fluid="md" class="mt-3">
      <!-- Buscador de Prodcutos -->
      <b-row>
        <b-col class="text-left" cols="0" sm="4" md="3">
          <small>
            <b-breadcrumb class="p-2 pl-3">
              <b-breadcrumb-item to="/">
                <b-icon
                  icon="house-door"
                  scale="1.25"
                  shift-v="1.25"
                  aria-hidden="true"
                ></b-icon>
                inicio
              </b-breadcrumb-item>
              <b-breadcrumb-item to="/servicios">
                <!-- <b-icon icon="shop" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon> -->
                servicios
              </b-breadcrumb-item>
              <b-breadcrumb-item to="">{{
                $route.params.categoria
              }}</b-breadcrumb-item>
            </b-breadcrumb>
          </small>
        </b-col>
        <b-col class="d-xs-block d-sm-none">
          <b-dropdown
            block
            size="sm"
            text="Servicios"
            class="mb-3"
            variant="outline-secondary"
          >
            <b-dropdown-item to="/servicios/blindados">
              Blindados
            </b-dropdown-item>
            <b-dropdown-item to="/servicios/bus">Bus</b-dropdown-item>
            <b-dropdown-item to="/servicios/carga">Carga</b-dropdown-item>
            <b-dropdown-item to="/servicios/moto">
              Moto Taxi
            </b-dropdown-item>
            <b-dropdown-item to="/servicios/taxi">Taxi</b-dropdown-item>
            <b-dropdown-item to="/servicios/vans">
              Vans
            </b-dropdown-item>
          </b-dropdown>
        </b-col>
        <b-col cols="12" sm="8" md="9">
          <b-input-group prepend="Buscar">
            <b-form-input
              type="search"
              id="search"
              v-model="buscar"
              placeholder="Servicio"
            ></b-form-input>
          </b-input-group>
        </b-col>
      </b-row>
      <!-- GRID de servicios -->
      <b-row class="mt-3">
        <!-- Aside Categorias servicios -->
        <b-col class="d-none d-sm-block" sm="4" md="3" lg="3">
          <b-nav class="text-left" vertical>
            <b-nav-text><b class="txt-categorias">Servicios</b></b-nav-text>
            <b-nav-item to="/servicios/blindados">Blindados</b-nav-item>
            <b-nav-item to="/servicios/bus">Bus</b-nav-item>
            <b-nav-item to="/servicios/carga">Carga</b-nav-item>
            <b-nav-item to="/servicios/moto">Mototaxi</b-nav-item>
            <b-nav-item to="/servicios/taxi">Taxi</b-nav-item>
            <b-nav-item to="/servicios/vans"
              >Vans</b-nav-item
            >
          </b-nav>
        </b-col>
        <!-- Lista de servicios -->
        <b-col sm="8" md="9" lg="9">
          <b-row class="text-left">
            <!-- Sin servicios -->
            <b-col class="my-5 text-center" v-if="servicios == ''">
              <h5>
                El servicio <b>"{{ buscar }}"</b> no se encuentra disponible.
              </h5>
            </b-col>
            <!-- Con servicios -->
            <b-col
              md="6"
              lg="4"
              v-for="(servicio, index) in servicios"
              :key="index"
            >
              <b-card
                no-body
                class="overflow-hidden shadow-sm mb-3"
                style="max-width: 100%"
                tag="article"
              >
                <b-row class="d-flex align-items-center" no-gutters>
                  <b-col cols="5" sm="6" md="12">
                    <img
                      :src="getImgProduct(servicio.imagen)"
                      :alt="servicio.alt"
                      class="rounded-0"
                      width="100%"
                    />
                  </b-col>
                  <b-col cols="7" sm="6" md="12">
                    <b-card-body>
                      <b-card-sub-title
                        style="color: black !important"
                        class="mb-2"
                      >
                        {{ servicio.nombre }}
                      </b-card-sub-title>
                      <b-card-text>
                        <b-input-group>
                          <template v-slot:prepend>
                            <b-button
                              class="bg-light text-dark"
                              @click="restarCantProduct(index)"
                              >-</b-button
                            >
                          </template>
                          <b-form-input
                            min="1"
                            class="pl-2 text-center border-secondary"
                            v-model="servicio.cant"
                          ></b-form-input>
                          <template v-slot:append>
                            <b-button
                              class="bg-light text-dark"
                              @click="sumarCantProduct(index)"
                              >+</b-button
                            >
                          </template>
                        </b-input-group>
                        <b-button
                          @click="setProductToCart(index)"
                          block
                          variant="dark"
                          class="mt-2"
                          >Agregar al Presupuesto</b-button
                        >
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="offset-sm-4 offset-md-3" sm="8" md="9" lg="9">
          <b-row class="mb-3">
            <b-col cols="6"
              ><b-button to="/" class="shadow-sm" block variant="dark"
                >IR A SERVICIOS</b-button
              ></b-col
            >
            <b-col cols="6"
              ><b-button
                v-b-toggle.sidebar-backdrop
                class="shadow-sm"
                block
                variant="success"
                >PRESUPUESTO</b-button
              ></b-col
            >
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "Tienda",
  data() {
    return {
      buscar: "",
    };
  },
  methods: {
    getImgProduct(id) {
      var images = require.context("@/assets/ProductosPNG/", true, /\.jpeg$/);
      return images("./" + id + ".jpeg");
    },
    restarCantProduct(id) {
      var servicio = this.servicios[id];
      servicio.cant = servicio.cant > 1 ? servicio.cant - 1 : servicio.cant;
    },
    sumarCantProduct: function (id) {
      var servicio = this.servicios[id];
      servicio.cant = servicio.cant < 100 ? servicio.cant + 1 : servicio.cant;
    },
    setProductToCart(id) {
      var servicio = this.servicios[id];
      this.$store.commit("addProductoAlCarrito", JSON.stringify(servicio));
      // alert(`Agrego ${servicio.cant} ${servicio.nombre} al Carrito`);
      this.servicios[id].cant = 1;
    },
  },
  computed: {
    categoriaName() {
      return this.$route.params.categoria;
    },
    servicios() {
      // Ordenar servicio por nombre
      var serviciosOrdenados = this.$store.getters.getProduct.sort((a, b) => {
        // Use toLowerCase() to ignore character casing
        const productA = a.nombre.toLowerCase();
        const productB = b.nombre.toLowerCase();

        let comparison = 0;
        if (productA > productB) {
          comparison = 1;
        } else if (productA < productB) {
          comparison = -1;
        }
        return comparison;
      });
      // filtramos los servicios por categoria
      var filtroCategorias = serviciosOrdenados.filter((producto) => {
        var categoriaProducto = producto.categoria.toString().toLowerCase();
        return categoriaProducto.match(this.categoriaName);
      });
      // filtramos los servicios por la busqueda
      var serviciosEncontrados = filtroCategorias.filter((producto) => {
        var nombre = producto.nombre.toString().toLowerCase();
        return nombre.match(this.buscar.toLowerCase());
      });
      var allservicios = serviciosOrdenados.filter((producto) => {
        var nombre = producto.nombre.toString().toLowerCase();
        return nombre.match(this.buscar.toLowerCase());
      });
      if (serviciosEncontrados == "") {
        return allservicios;
      }
      return serviciosEncontrados;
    },
  },
};
</script>
<style>
.txt-categorias {
  font-size: 1.2rem !important;
  text-transform: capitalize;
}
</style>
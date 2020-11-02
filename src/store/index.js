import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    carrito: [],
    servicios: [{
        categoria: "Blindados",
        imagen: "1",
        alt: "Image",
        nombre: "Jeep 1 Blindaje nivel III",
        cant: 1,
      },
      {
        categoria: "Blindados",
        imagen: "2",
        nombre: "ford 1 Blindaje nivel III",
        cant: 1,
      },
      {
        categoria: "Blindados",
        imagen: "14",
        nombre: "Jeep 2 Blindaje nivel III",
        cant: 1,
      },
      {
        categoria: "Blindados",
        imagen: "4",
        nombre: "ford 2 Blindaje nivel III",
        cant: 1,
      },
      {
        categoria: "Carga",
        imagen: "7",
        nombre: "Camion NPR Cava Termica",
        cant: 1,
      },
      {
        categoria: "Bus",
        imagen: "10",
        nombre: "Pullman Encava 1",
        cant: 1,
      },
      {
        categoria: "Bus",
        imagen: "11",
        nombre: "Pullman Encava 2",
        cant: 1,
      },
      {
        categoria: "Bus",
        imagen: "12",
        nombre: "Pullman Marcopolo 1",
        cant: 1,
      },
      {
        categoria: "Bus",
        imagen: "13",
        nombre: "Pullman Marcopolo 2",
        cant: 1,
      },
      {
        categoria: "Moto",
        imagen: "18",
        nombre: "Moto Suzuki GN 125",
        cant: 1,
      },
      {
        categoria: "Taxi",
        imagen: "8",
        nombre: "Chery Orinoco",
        cant: 1,
      },
      {
        categoria: "Taxi",
        imagen: "17",
        nombre: "Camioneta Chevrolet",
        cant: 1,
      },
      {
        categoria: "Vans",
        imagen: "9",
        nombre: "Vans Mercedes Benz",
        cant: 1,
      },
      {
        categoria: "Vans",
        imagen: "15",
        nombre: "Vans Chery",
        cant: 1,
      },
      {
        categoria: "Vans",
        imagen: "16",
        nombre: "Vans Kia",
        cant: 1,
      },
    ],
  },
  getters: {
    getCantItemsInCart: (state) => {
      return state.carrito.length;
    },
    getProductInCart: (state) => {
      return state.carrito;
    },
    getProduct: (state) => {
      return state.servicios;
    },
    getSubTotal(state) {
      var precioProducto = 0;
      state.carrito.forEach((element) => {
        var precio = element.precio * element.cant;
        precioProducto += precio;
        return precioProducto;
      });
      return precioProducto;
    }
  },
  mutations: {
    restarCantProduct(state, id) {
      var servicio = state.carrito[id];
      servicio.cant -= servicio.cant > 1 ? 1 : 0;
    },
    sumarCantProduct: function(state, id) {
      var servicio = state.carrito[id];
      servicio.cant += servicio.cant < 100 ? 1 : 0;
    },
    addProductoAlCarrito(state, servicio) {
      servicio = JSON.parse(servicio);
      var servicioInCart = state.carrito.find((e) => {
        return e.nombre == servicio.nombre;
      });
      if (servicioInCart) {
        // alert(`Agrego ${servicio.cant} ${servicio.nombre} al Carrito`);
        servicio.cant = servicioInCart.cant += servicio.cant;
      } else {
        state.carrito.push(servicio);
        // alert(`Agrego ${servicio.cant} ${servicio.nombre} al Carrito`);
      }
    },
    delProductCart(state, id) {
      state.carrito.splice(id, 1);
    },
    cleanCart(state) {
      state.carrito = [];
    }
  },
  actions: {},
  modules: {},
});
<template>
  <div class="factura">
    <b-container class="my-4">
      <b-row>
        <b-col class="text-left mb-3" cols="12" md="6">
          <h5 class="text-left ml-1"><b>DETALLES DEL PRESUPUESTO</b></h5>
          <b-container class="mb-2 pt-3 shadow-sm bg-white rounded border">
            <b-form @submit="solicitar" v-if="show">
              <b-row>
                <b-col md="6">
                  <b-form-group
                    id="input-group-1"
                    label="Nombre:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="form.nombre"
                      type="text"
                      required
                      placeholder="Nombre"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group
                    id="input-group-2"
                    label="Apellido:"
                    label-for="input-2"
                  >
                    <b-form-input
                      id="input-2"
                      v-model="form.apellido"
                      type="text"
                      required
                      placeholder="Apellido"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col lg="6">
                  <b-form-group
                    id="input-group-3"
                    label="Telefono:"
                    label-for="input-3"
                    description=""
                  >
                    <b-form-input
                      id="input-3"
                      v-model="form.telefono"
                      type="number"
                      required
                      placeholder="Telefono"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col lg="6">
                  <b-form-group
                    id="input-group-4"
                    label="Correo Electronico:"
                    label-for="input-4"
                    description=""
                  >
                    <b-form-input
                      id="input-4"
                      v-model="form.email"
                      type="email"
                      required
                      placeholder="Correo Electronico"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                 <b-col md="12">
                  <b-form-group label="">
                    <label for="fecha"
                      >Fecha:</label
                    >
                    <b-form-datepicker
                      id="fecha"
                      v-model="form.fecha"
                      required
                      :date-format-options="{
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric',
                      }"
                      locale="es"
                    ></b-form-datepicker>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group
                    id="input-group-5"
                    label="Desde:"
                    label-for="input-5"
                    description=""
                  >
                    <b-form-input
                      id="input-5"
                      v-model="form.desde"
                      required
                      placeholder="Desde"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group
                    id="input-group-5"
                    label="Hasta:"
                    label-for="input-5"
                    description=""
                  >
                    <b-form-input
                      id="input-5"
                      v-model="form.hasta"
                      required
                      placeholder="Hasta"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group label="Metodo:">
                    <b-form-radio-group
                      id="checkbox-group-1"
                      v-model="form.metodo"
                      :options="optionsPay"
                      name="flavour-1"
                      stacked
                    ></b-form-radio-group>
                  </b-form-group>
                </b-col>
                <b-col lg="12">
                  <b-form-group label="Comentario (opcional)">
                    <textarea
                      class="form-control"
                      id="mensaje"
                      v-model="form.mensaje"
                      placeholder="Escribe un mensaje..."
                      rows="3"
                    ></textarea>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-form>
          </b-container>
        </b-col>
        <b-col cols="12" md="6">
          <h5 class="text-left ml-1"><b>PRESUPUESTO</b></h5>
          <b-table
            responsive
            sticky-header
            striped
            outlined
            hove
            :items="items"
            :fields="fields"
            class="text-left shadow-sm"
          >
            <template v-slot:cell(nombre)="data">
              {{ data.item.nombre }}
            </template>
            <template v-slot:cell(cantidad)="data">
              {{ data.item.cantidad }}
            </template>
          </b-table>
          <b-button
            class="shadow-sm"
            :disabled="!blockBtn"
            block
            @click="solicitar"
            variant="dark"
            >SOLICITAR</b-button
          >
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Presupuesto",
  data() {
    return {
      btnComprarStatus: true,
      form: {
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        fecha: "",
        desde: "",
        hasta: "",
        metodo: "",
        mensaje: "",
      },
      optionsPay: [
        { text: "Solo Ida", value: "Solo Ida" },
        { text: "Ida y Vuelta", value: "Ida y Vuelta" },
      ],
      show: true,
      fields: [
        {
          key: "nombre",
          label: "Servicio",
          sortable: true,
          variant: "light",
        },
        {
          key: "cantidad",
          label: "Cantidad",
          sortable: true,
          variant: "light",
        },
      ],
    };
  },
  computed: {
    blockBtn() {
      return this.btnComprarStatus;
    },
    items() {
      var servicios = this.$store.getters.getProductInCart;
      var items = [];
      servicios.forEach((servicio) => {
        items.push({
          nombre: servicio.nombre,
          cantidad: servicio.cant,
        });
      });
      return items;
    },
    cantidad() {
      return this.$store.getters.getSubTotal;
    },
    inputsValidos() {
      var {
        nombre,
        apellido,
        telefono,
        email,
        fecha,
        metodo,
        desde,
        hasta,
      } = this.form;
      if (
        nombre != "" &&
        apellido != "" &&
        telefono != "" &&
        email != "" &&
        fecha != "" &&
        metodo != "" &&
        desde != "" &&
        hasta != "" 
      ) {
        return true;
      }
      return false;
    },
  },
  methods: {
    solicitar(evt) {
      this.btnComprarStatus = false;
      evt.preventDefault();
      var servicios = this.$store.getters.getProductInCart;
      var cantidad = this.$store.getters.getSubTotal;
      var form = this.form;
      var msg = { form, servicios, cantidad };
      if (this.inputsValidos) {
        var baseURL =
          location.protocol + "//" + location.hostname + ":" + location.port;
        axios
          .post(baseURL + "/send-pedido", msg)
          .then((res) => {
            // console.log(res);
            if (res.data == "recibido") {
              this.cleanData();
              alert("Hemos recibido su solicitud, lo contactaremos de inmediato.");
              this.btnComprarStatus = true;
            } else {
              alert("No pudimos recibir su solicitud, intente mas tarde.");
              this.btnComprarStatus = true;
            }
          })
          .catch((err) => {
            console.log(err);
            alert("Ocurrio un error, intente mas tarde.");
            this.btnComprarStatus = true;
          });
      } else {
        alert("Por favor, llene todos los detalles del presupuesto.");
        this.btnComprarStatus = true;
      }
    },
    cleanData() {
      this.form = {
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        fecha: "",
        metodo: "",
        desde: "",
        hasta: "",
        mensaje: "",
      };
      this.$store.commit("cleanCart");
    },
  },
};
</script>
<style scoped>
</style>
<template>
  <div class="Nosotros">
    <b-container class="my-3">
      <div class="accordion text-left" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-1 variant="primary"
              >MISION</b-button
            >
          </b-card-header>
          <b-collapse
            id="accordion-1"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text>
                Prestar un servicio de traslado terrestre con estándares de
                calidad, responsabilidad, seguridad y puntualidad, permitiendo
                fortalecer el desarrollo socio productivo del país.
              </b-card-text>
              <!-- <b-card-text>{{ text }}</b-card-text> -->
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-2 variant="primary"
              >VISION</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                Consolidarnos como una empresa aliada para nuestros clientes,
                mediante soluciones integrales y oportunas, siendo reconocida
                por su calidad de servicio y alto sentido de desarrollo humano y
                material.
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-3 variant="primary"
              >VALORES</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                ▪ Solidaridad. <br>
                ▪ Responsabilidad. <br>
                ▪ Equidad. <br>
                ▪ Compromiso. <br>
                ▪ Lealtad. <br>
                ▪ Puntualidad. <br>
                ▪ Excelencia. <br>
                ▪ Justicia social. <br>
                ▪ Corresponsabilidad. <br>
                ▪ Cooperación. <br>
                ▪ Rendición de cuentas. <br>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Nosotros",
  data() {
    return {
      text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `,
    };
  },
};
</script>

<style scoped>
.card-categoria {
  min-height: 6rem !important;
  font-size: 0.9rem !important;
}
.card-categoria:hover {
  background-color: dodgerblue;
  color: white !important;
}
</style>
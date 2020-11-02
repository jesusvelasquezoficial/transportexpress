<template>
  <div class="home">
    <b-container>
      <!-- Slider -->
      <b-carousel
        id="carousel-1"
        class="mt-3 shadow-sm"
        v-model="slide"
        :interval="3000"
        fade
        background="#ababab"
        img-width="1024"
        img-height="300"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Slides with image only -->
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              src="@/assets/Slider/1.png"
              alt="image slot"
            /> </template
        ></b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              src="@/assets/Slider/2.png"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              src="@/assets/Slider/3.png"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              src="@/assets/Slider/4.png"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
      <!-- servicios -->
      <div class="mt-3">
        <b-row id="servicios" cols="2">
          <b-col cols="12" sm="6" md="4" lg="4" class="mb-3">
            <router-link to="/servicios/blindados" class="text-decoration-none">
              <b-card class="card-categoria shadow-sm" text-variant="dark">
                <img
                  src="@/assets/Icons/auto.png"
                  fluid
                  alt=""
                  width="32px"
                />
                <b-card-text class="mt-2"><b>BLINDADOS</b></b-card-text>
              </b-card>
            </router-link>
          </b-col>
          <b-col cols="12" sm="6" md="4" lg="4" class="mb-3">
            <router-link to="/servicios/carga" class="text-decoration-none"
              ><b-card class="card-categoria shadow-sm" text-variant="dark">
                <img
                  src="@/assets/Icons/carga.png"
                  fluid
                  alt=""
                  width="32px"
                />
                <b-card-text class="mt-2"><b>CARGA</b></b-card-text></b-card
              ></router-link
            >
          </b-col>
          <b-col cols="12" sm="6" md="4" lg="4" class="mb-3">
            <router-link
              to="/servicios/bus"
              class="text-decoration-none"
            >
              <b-card class="card-categoria shadow-sm" text-variant="dark">
                <img
                  src="@/assets/Icons/bus.png"
                  fluid
                  alt=""
                  width="32px"
                />
                <b-card-text class="mt-2"><b>BUS</b></b-card-text></b-card
              >
            </router-link>
          </b-col>
          <b-col cols="12" sm="6" md="4" lg="4" class="mb-3">
            <router-link to="/servicios/moto" class="text-decoration-none"
              ><b-card class="card-categoria shadow-sm" text-variant="dark">
                <img
                  src="@/assets/Icons/moto1.png"
                  fluid
                  alt=""
                  width="32px"
                />
                <b-card-text class="mt-2"
                  ><b>MOTOTAXI</b></b-card-text
                ></b-card
              ></router-link
            >
          </b-col>
          <b-col cols="12" sm="6" md="4" lg="4" class="mb-3">
            <router-link
              to="/servicios/taxi"
              class="text-decoration-none"
              ><b-card class="card-categoria shadow-sm" text-variant="dark">
                <img
                  src="@/assets/Icons/taxi.png"
                  fluid
                  alt=""
                  width="32px"
                />
                <b-card-text class="mt-2"><b>TAXI</b></b-card-text></b-card
              ></router-link
            >
          </b-col>
          <b-col cols="12" sm="6" md="4" lg="4" class="mb-3">
            <router-link
              to="/servicios/vans"
              class="text-decoration-none"
              ><b-card class="card-categoria shadow-sm" text-variant="dark">
                <img
                  src="@/assets/Icons/vans.png"
                  fluid
                  alt=""
                  width="32px"
                />
                <b-card-text class="mt-2"><b>VANS</b></b-card-text></b-card
              ></router-link
            >
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
  components: {
    // HelloWorld
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
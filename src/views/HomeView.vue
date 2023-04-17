<template>
  <div>
    <CarouselView> </CarouselView>
    <br />
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col">
        <div class="card">
          <img src="/assets/NIKO-TAB.jpg" class="card-img-top" alt="..." />
        </div>
        <h5>Paracetamol Tablets </h5>
      </div>
      <div class="col">
        <div class="card">
          <img src="/assets/decold.jpg" class="card-img-top" alt="..." />
        </div>
        <h5>Decold Tablets</h5>
      </div>
      <div class="col">
        <div class="card" style="height: 18.5rem">
          <img src="/assets/sinex.png" class="card-img-top" alt="..." />
        </div>
        <h5>Sinex Tablets</h5>
      </div>
      <div class="col">
        <div class="card" style="height: 18.5rem">
          <img src="/assets/digene tab.png" class="card-img-top" alt="..." />
        </div>
        <h5>Digene Tablets</h5>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="/assets/betadin wound.jpg"
            class="card-img-top"
            alt="..."
          />
        </div>
        <h5>Betadin Wound Solution</h5>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="/assets/vitamin b complex.jpg"
            class="card-img-top"
            alt="..."
          />
        </div>
        <h5>Polybion SF Syrup</h5>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="/assets/digene syrup.png"
            class="card-img-top"
            alt="..."
          />
        </div>
        <h5>Digene Syrup</h5>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="/assets/niko syrup.jpg"
            class="card-img-top"
            alt="..."
          />
        </div>
        <h5>Niko Syrup</h5>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselView from "../components/Carousel.vue";

export default {
  name: "HomeView",
  components: {
    CarouselView,
  },
};
</script>

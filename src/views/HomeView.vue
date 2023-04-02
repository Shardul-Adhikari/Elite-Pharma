<template>
  <div>
    <CarouselView> </CarouselView>
    <br />
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col">
        <div class="card">
          <img src="/assets/NIKO-TAB.jpg" class="card-img-top" alt="..." />
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="/assets/decold.jpg" class="card-img-top" alt="..." />
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="\assets\sinex.png" class="card-img-top" alt="..." />
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="\assets\digene tab.png" class="card-img-top" alt="..." />
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="\assets\betadin wound.jpg"
            class="card-img-top"
            alt="..."
          />
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="ffyp\src\assets\vitamin b complex.jpg"
            class="card-img-top"
            alt="..."
          />
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="ffyp\src\assets\digene syrup.png"
            class="card-img-top"
            alt="..."
          />
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="ffyp\src\assets\niko syrup.jpg"
            class="card-img-top"
            alt="..."
          />
        </div>
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

<template>
  <div class="footer" style="background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(97,186,255,1) 0%, rgba(166,239,253,1) 90.1% )">
    <div class="container" style="background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(97,186,255,1) 0%, rgba(166,239,253,1) 90.1% );">
      <footer class="py-5" style="padding-bottom: 1rem !important ">
        <div class="row">
          <div class="col-md-5 links footer_block">
            <!-- <img src="../assets/logo.webp" height="50 px" width="160px" /> -->
            <br />

            <p>
              For Additional Information. Contact Our Pharmacist :

              <br />(+977) 01-4592773 <br />(+977) 9861606126
            </p>
          </div>

          <!-- <div class="col">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">Home</a>
              </li>
              <li class="nav-item mb-2">
                <a href="Features" class="nav-link p-0 text-muted">Features</a>
              </li>
              <li class="nav-item mb-2">
                <a href="Pricing" class="nav-link p-0 text-muted">Pricing</a>
              </li>
              <li class="nav-item mb-2">
                <a href="FAQs" class="nav-link p-0 text-muted">FAQs</a>
              </li>
              <li class="nav-item mb-2">
                <a href="bout" class="nav-link p-0 text-muted">About</a>
              </li>
            </ul>
          </div> -->

          <div class="col">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p> For Any Updates or News </p>
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden"
                  >Email address</label
                >
                <input
                  id="newsletter1"
                  type="text"
                  class="form-control"
                  placeholder="Email address"
                />
                <button
                  class="btn btn-primary"
                  type="button"
                  style="height: 38px; background-color: #BE3455;"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div
          class="
            d-flex
            flex-column flex-sm-row
            justify-content-between
            py-4
            my-4
            border-top
          "
        >
          <p style="padding-left: 35%">
            &copy; 2023 Company, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterView",
};
</script>
<style>
.footer {
  background: #f4f5f6;
}
.py-5 {
  padding-top: 4rem !important;
  padding-bottom: 0rem !important;
}
</style>


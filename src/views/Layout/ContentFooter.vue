<template>
  <footer class="footer px-4">
    <div class="row justify-content-lg-between align-items-center">
      <b-container class="bv-example-row mb-3">
        <b-row cols="4">
          <b-col>
            <div class="logo1">
              <a href="#">
                <b-img class="footer-logo" src="img/theme/logo.png" />
              </a>
              <div class="text-left col-md-4 col-auto" data-v-318f9a99="">
                <ul class="list-unstyled ml-3" data-v-318f9a99="">
                  <li data-v-318f9a99="">
                    <a href="/" target="_self" data-v-318f9a99="" class=""
                      >About us</a
                    >
                  </li>
                  <li data-v-318f9a99="">
                    <a href="/docs" target="_self" data-v-318f9a99="" class=""
                      >Careers</a
                    >
                  </li>
                  <li data-v-318f9a99="">
                    <a
                      href="/docs/components"
                      target="_self"
                      data-v-318f9a99=""
                      class=""
                      >Restaurant signup</a
                    >
                  </li>
                  <li data-v-318f9a99="">
                    <a
                      href="/docs/components"
                      target="_self"
                      data-v-318f9a99=""
                      class=""
                      >Become a rider</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </b-col>
          <b-col
            ><div class="text-left col-md-4 col-auto" data-v-318f9a99="">
              <h3 class="bd-text-purple-bright mb-1" data-v-318f9a99="">
                Legal
              </h3>
              <ul class="list-unstyled ml-3" data-v-318f9a99="">
                <li data-v-318f9a99="">
                  <a href="/" target="_self" data-v-318f9a99="" class=""
                    >Term & contitions</a
                  >
                </li>
                <li data-v-318f9a99="">
                  <a href="/docs" target="_self" data-v-318f9a99="" class=""
                    >Privacy</a
                  >
                </li>
                <li data-v-318f9a99="">
                  <a href="/docs" target="_self" data-v-318f9a99="" class=""
                    >Tax rates</a
                  >
                </li>
              </ul>
            </div></b-col
          >
          <b-col>
            <div class="text-left col-md-4 col-auto" data-v-318f9a99="">
              <h3 class="bd-text-purple-bright mb-1" data-v-318f9a99="">
                Help
              </h3>
              <ul class="list-unstyled ml-3" data-v-318f9a99="">
                <li data-v-318f9a99="">
                  <a href="/" target="_self" data-v-318f9a99="" class=""
                    >Contact</a
                  >
                </li>
                <li data-v-318f9a99="">
                  <a href="/docs" target="_self" data-v-318f9a99="" class=""
                    >FAQs</a
                  >
                </li>
                <li data-v-318f9a99="">
                  <a
                    href="/docs/components"
                    target="_self"
                    data-v-318f9a99=""
                    class=""
                    >Site map</a
                  >
                </li>
              </ul>
            </div>
          </b-col>

          <b-col
            ><div class="text-left col-md-4 col-auto" data-v-318f9a99="">
              <h3 class="bd-text-purple-bright mb-1" data-v-318f9a99="">
                Download the App
              </h3>
              <b-button class="link-botton row" variant="link">
                <a href="#">
                  <b-img class="footer-logo" src="img/theme/logo1.png" />
                </a>
              </b-button>
              <b-button class="link-botton row" variant="link">
                <a href="#">
                  <b-img class="footer-logo" src="img/theme/logo2.png" />
                </a>
              </b-button></div
          ></b-col>
        </b-row>
      </b-container>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style>
.footer {
 
  background-color: #f6bd2f;
}
.container {
  max-width: 1140px;
  padding-top: 50px;
}
.footer .list-unstyled li a {
  display: inline-block;
  color: #424242;
  font-weight: 800;
  text-align: left;
  width: 170px;
  padding-bottom: 10px;
  font-size: 18px;
}
.ml-3,
.mx-3 {
  margin-left: 0px !important;
}
.footer-logo {
  vertical-align: left;
  border-style: none;
  padding-left: 10px;
  width: 150px;
}
h3,
.h3 {
  font-size: 1.38rem;
  color: #000000;
  width: 200px;
}
</style>

<template>
  <footer class="footer px-4">
    <div class="row justify-content-lg-between align-items-center">
      <b-container class="bv-example-row mb-3">
        <b-row cols="12">
          <b-col cols="3">
            <div class="logo1">
              <b-link :to="{ name: 'dashboard' }">
                <b-img class="footer-logo" src="img/theme/logo.png" />
              </b-link>
              <div class="text-left col-md-4 col-auto" data-v-318f9a99="">
                <ul class="list-unstyled ml-3" data-v-318f9a99="">
                  <li data-v-318f9a99="">
<<<<<<< HEAD
                    <b-link :to="{ name: 'aboutus' }">About us</b-link>
                  </li>
                  <li data-v-318f9a99="careers">
                    <b-link :to="{ name: '' }">Careers</b-link>
                  </li>
                  <li data-v-318f9a99="">
                    <b-link :to="{ name: 'signup' }">Restaurant signup</b-link>
                  </li>
                  <li data-v-318f9a99="profile">
=======
                    <b-link :to="{ name: '' }">About us</b-link>
                  </li>
                  <li data-v-318f9a99="">
                    <b-link :to="{ name: '' }">Careers</b-link>
                  </li>
                  <li data-v-318f9a99="">
                    <b-link :to="{ name: '' }">Restaurant signup</b-link>
                  </li>
                  <li data-v-318f9a99="">
>>>>>>> bcae2b8b7bda8908bb649338b4bcc2670fcc7cfe
                    <b-link :to="{ name: 'profile' }">Become a rider</b-link>
                  </li>
                </ul>
              </div>
            </div>
          </b-col>
          <b-col cols="3"
            ><div class="text-left col-md-4 col-auto" data-v-318f9a99="">
              <h3 class="bd-text-purple-bright mb-1" data-v-318f9a99="">
                Legal
              </h3>
              <ul class="list-unstyled ml-3" data-v-318f9a99="">
                <li data-v-318f9a99="">
<<<<<<< HEAD
                  <b-link :to="{ name: 'term' }">Term & contitions</b-link>
                </li>
                <li data-v-318f9a99="">
                  <b-link :to="{ name: 'privacy' }">Privacy</b-link>
                </li>
                <li data-v-318f9a99="">
                  <b-link :to="{ name: 'tax' }">Tax rates</b-link>
=======
                  <b-link :to="{ name: '' }">Term & contitions</b-link>
                </li>
                <li data-v-318f9a99="">
                  <b-link :to="{ name: '' }">Privacy</b-link>
                </li>
                <li data-v-318f9a99="">
                  <b-link :to="{ name: '' }">Tax rates</b-link>
>>>>>>> bcae2b8b7bda8908bb649338b4bcc2670fcc7cfe
                </li>
              </ul>
            </div></b-col
          >
          <b-col cols="3">
            <div class="text-left col-md-4 col-auto" data-v-318f9a99="">
              <h3 class="bd-text-purple-bright mb-1" data-v-318f9a99="">
                Help
              </h3>
              <ul class="list-unstyled ml-3" data-v-318f9a99="">
                <li data-v-318f9a99="">
<<<<<<< HEAD
                  <b-link :to="{ name: 'contact' }">Contact</b-link>
                </li>
                <li data-v-318f9a99="">
                  <b-link :to="{ name: 'faq' }">FAQs</b-link>
                </li>
                <li data-v-318f9a99="">
                  <b-link :to="{ name: 'sitemap' }">Site map</b-link>
=======
                  <b-link :to="{ name: '' }">Contact</b-link>
                </li>
                <li data-v-318f9a99="">
                  <b-link :to="{ name: '' }">FAQs</b-link>
                </li>
                <li data-v-318f9a99="">
                  <b-link :to="{ name: '' }">Site map</b-link>
>>>>>>> bcae2b8b7bda8908bb649338b4bcc2670fcc7cfe
                </li>
              </ul>
            </div>
          </b-col>

          <b-col cols="3"
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
      year: new Date().getFullYear()
    };
  }
};
</script>
<style>
.footer {
  background-color: #f6bd2f;
}
.container {
  max-width: 1140px;

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
.btn:not(:last-child) {
    margin-right: 17.5rem;
    border-radius: 30px;
    /* background: black; */
    color: white;
}
</style>

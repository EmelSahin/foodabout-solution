<template class="nav-temp">
  <b-navbar toggleable="lg">
    <b-container>
      <div class="logo">
        <a href="#">
          <b-img class="logo" src="img/theme/logo.png" />
        </a>
      </div>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav right class="nav-menu">
            <b-nav-item :to="{ name: 'dashboard' }">Home</b-nav-item>
            <b-nav-item :to="{ name: 'workwithus' }">Work with us</b-nav-item>
            <b-nav-item :to="{ name: 'basket' }">Basket</b-nav-item>
            <b-nav-item :to="{ name: 'order' }">Order</b-nav-item>
            <b-nav-item
              ><router-link to="/login">Sign in</router-link></b-nav-item
            >
          </b-nav>

          <div>
            <base-dropdown
              menu-on-right
              class="nav-item"
              tag="li"
              title-tag="a"
              title-classes="nav-link pr-0"
            >
              <a
                href="#"
                class="nav-link pr-0"
                @click.prevent
                slot="title-container"
              >
                <b-media no-body class="align-items-center">
                  <a href="#">
                    <b-img class="language" src="img/theme/L0 (2).png" />
                  </a>
                  <b-media-body class="ml-2 d-none d-lg-block">
                    <span class="mb-0 text-sm font-weight-bold"></span>
                  </b-media-body>
                </b-media>
              </a>

              <template>
                <b-dropdown-item href="#!">
                  <a href="#">
                    <b-img src="img/theme/L1.png" />
                  </a>
                  <span> English</span>
                </b-dropdown-item>
                <b-dropdown-item href="#!">
                  <a href="#">
                    <b-img src="img/theme/L2.png" />
                  </a>
                  <span> Deuch</span>
                </b-dropdown-item>
                <b-dropdown-item href="#!">
                  <a href="#">
                    <b-img src="img/theme/L3.png" />
                  </a>
                  <span> French</span>
                </b-dropdown-item>
                <b-dropdown-item href="#!">
                  <a href="#">
                    <b-img src="img/theme/L4.png" />
                  </a>
                  <span> German</span>
                </b-dropdown-item>
              </template>
            </base-dropdown>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>
<script>
import { CollapseTransition } from "vue2-transitions";
import { BaseNav, Modal } from "@/components";

export default {
  components: {},

  methods: {}
};
</script>
<style>
.card-body {
    border-radius: 20px;
    /* border: 1px solid lightgrey; */
   
}
.navbar {
  background-color: #f6bd2f;
}
.navbar-light .navbar-nav .nav-link {
  color: white;
  font-weight: bold;
}
.navbar-light .navbar-nav .show > .nav-link,
.navbar-light .navbar-nav .active > .nav-link,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .nav-link.active {
  color: black;
  font-weight: bold;
}
.language {
  width: 40px;
}
.logo {
  width: 180px;
}
.a {
  color: #ffffff;
  text-decoration: none;
  background-color: transparent;
}
</style>

<template>
  <b-container class="12">
    <div>
      <b-row>
        <b-col md="3">
          <b-card class="card11">
            <b-container class="choose">
              <h4>Sort by</h4>
              <b-form-group v-slot="{ ariaDescribedby }">
                <b-form-radio-group
                  v-model="selectede"
                  :options="optionse"
                  :aria-describedby="ariaDescribedby"
                  name="radios-stacked"
                  stacked
                ></b-form-radio-group>
              </b-form-group>
              <h4>Filters</h4>
              <h6 class="chooseheader">Reset</h6>
              <b-form-group v-slot="{ ariaDescribedby }">
                <b-form-checkbox-group
                  v-model="selected1"
                  :options="options1"
                  :aria-describedby="ariaDescribedby"
                  plain
                  stacked
                ></b-form-checkbox-group>
              </b-form-group>
            </b-container>
          </b-card>
        </b-col>
        <b-col md="9">
          <b-card-body class="px-lg-5 py-lg-5">
            <b-container class="work11">
              <h3>Basket</h3>
              <b-card-text> Items </b-card-text>
              <b-row>
                <b-col cols="9">
                  <b-row>
                    <b-card class="basket-card">
                      <b-row cols="12">
                        <b-col cols="9"
                          ><b-card-text>
                            <h4>
                              <span class="basket">1x</span> Whopperking Menu
                            </h4>
                            Coca Cola light(Big)
                          </b-card-text></b-col
                        >
                        <b-col cols="3">
                          <h4 class="basket11">
                            <span class="basket11">€9,90</span>
                          </h4>
                        </b-col>
                      </b-row>
                      <hr class="my-1" />
                      <b-row cols="4">
                        <b-col cols="9"
                          ><h4 class="basket2">Subtotal:</h4></b-col
                        >
                        <b-col cols="3"
                          ><h4 class="basket1">
                            <span class="basket1">€ 11,50</span>
                          </h4></b-col
                        >
                      </b-row>
                      <b-row cols="4">
                        <b-col cols="9"
                          ><h4 class="basket2">Delivery fee:</h4></b-col
                        >
                        <b-col cols="3"
                          ><h4 class="basket1">
                            <span class="basket1">€ 0,00</span>
                          </h4></b-col
                        >
                      </b-row>
                      <b-row cols="4">
                        <b-col cols="9"
                          ><h4 class="basket2">Service fee:</h4></b-col
                        >
                        <b-col cols="3"
                          ><h4 class="basket1">
                            <span class="basket1">€ 0,00</span>
                          </h4></b-col
                        >
                      </b-row>
                      <b-row cols="4">
                        <b-col cols="9"
                          ><h4 class="basket22">Rider tip:</h4></b-col
                        >
                        <b-col cols="3"
                          ><h4 class="basket1">
                            <b-button pill class="outline-secondary"
                              >€ 0,00</b-button
                            >
                          </h4></b-col
                        >
                      </b-row>
                      <hr class="my-1" />
                      <b-row cols="4">
                        <b-col cols="9"><h4 class="basket22">Total:</h4></b-col>
                        <b-col cols="3"
                          ><h4 class="basket1">
                            <span class="basket1">€ 9,90</span>
                          </h4></b-col
                        >
                      </b-row>
                    </b-card>
                  </b-row>
                </b-col>
                <b-col cols="3">
                  <b-card
                    img-src="img/theme/restaurant.png"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem"
                    class="mb-2"
                  >
                  </b-card>
                  <center>
                    Burger King - <br />
                    Palace de Royale
                  </center>
                </b-col>
              </b-row>
              <b-row cols="12">
                <b-col cols="9">
                  <b-card-text>
                    <b-form-checkbox to="/dashboard" class="text-light"
                      ><small>
                        <h4>
                          <span class="basket"></span> No cutlary to this order
                          <font color="#f6bd2f">#UnplasticOurFood</font>
                        </h4>
                        Please help us ensure that plastic cutlery is only
                        proveded upon your request.
                      </small></b-form-checkbox
                    ></b-card-text
                  >
                </b-col>
              </b-row>

              <b-row>
                <div class="modal-restaurant1">
                  <b-button
                    v-b-modal.modal-center
                    class="btn restaurant1"
                    title="Checkout"
                    id="show-btn"
                    @click="$bvModal.show('bv-modal-example1')"
                  >
                    Checkout</b-button
                  >

                  <b-modal id="bv-modal-example1" hide-footer>
                    <template #modal-title> </template>
                    <div class="d-block text-center"></div>
                    <div>
                      <h3 class="info">Checkout</h3>
                      <b-card-text> Items </b-card-text>
                      <b-row>
                        <b-col cols="12">
                          <b-row>
                            <b-card class="basket-card">
                              <b-row cols="12">
                                <b-col cols="9"
                                  ><b-card-text>
                                    <h4>
                                      <span class="basket">1x</span> Whopperking
                                      Menu
                                    </h4>
                                    Coca Cola light(Big)
                                  </b-card-text></b-col
                                >
                                <b-col cols="3">
                                  <h4 class="basket11">
                                    <span class="basket11">€9,90</span>
                                  </h4>
                                </b-col>
                              </b-row>
                              <hr class="my-1" />
                              <b-row cols="4">
                                <b-col cols="9"
                                  ><h4 class="basket2">Subtotal:</h4></b-col
                                >
                                <b-col cols="3"
                                  ><h4 class="basket1">
                                    <span class="basket1">€ 11,50</span>
                                  </h4></b-col
                                >
                              </b-row>
                              <b-row cols="4">
                                <b-col cols="9"
                                  ><h4 class="basket2">Delivery fee:</h4></b-col
                                >
                                <b-col cols="3"
                                  ><h4 class="basket1">
                                    <span class="basket1">€ 0,00</span>
                                  </h4></b-col
                                >
                              </b-row>
                              <b-row cols="4">
                                <b-col cols="9"
                                  ><h4 class="basket2">Service fee:</h4></b-col
                                >
                                <b-col cols="3"
                                  ><h4 class="basket1">
                                    <span class="basket1">€ 0,00</span>
                                  </h4></b-col
                                >
                              </b-row>
                              <b-row cols="4">
                                <b-col cols="9"
                                  ><h4 class="basket22">Rider tip:</h4></b-col
                                >
                                <b-col cols="3"
                                  ><h4 class="basket1">
                                    <b-button pill class="outline-secondary"
                                      >€ 0,00</b-button
                                    >
                                  </h4></b-col
                                >
                              </b-row>
                              <hr class="my-1" />
                              <b-row cols="4">
                                <b-col cols="9"
                                  ><h4 class="basket22">Total:</h4></b-col
                                >
                                <b-col cols="3"
                                  ><h4 class="basket1">
                                    <span class="basket1">€ 9,90</span>
                                  </h4></b-col
                                >
                              </b-row>
                            </b-card>
                          </b-row>
                        </b-col>
                      </b-row>
                      <b-row cols="12">
                        <b-col cols="12">
                          <b-card-text>
                            <b-form-checkbox to="/dashboard" class="text-light"
                              ><small>
                                <h4>
                                  <span class="basket"></span> No cutlary to
                                  this order
                                  <font color="#f6bd2f">#UnplasticOurFood</font>
                                </h4>
                                Please help us ensure that plastic cutlery is
                                only proveded upon your request.
                              </small></b-form-checkbox
                            ></b-card-text
                          >
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col cols="4"></b-col>
                        <b-col cols="3">
                          <b-button
                            class="checkout1"
                            block
                            @click="$bvModal.hide('bv-modal-example')"
                            >Cancel</b-button
                          >
                        </b-col>
                        <b-col cols="5">
                          <b-button
                            v-b-modal.modal-center
                            id="show-btn"
                            class="checkout11"
                            @click="$bvModal.show('bv-modal-example')"
                            >Next Step</b-button
                          >
                          <b-modal id="bv-modal-example" centered hide-footer>
                            <h3 class="info">Checkout</h3>
                            <b-card-text> Registered </b-card-text>
                            <b-card title="" sub-title="">
                              <b-card-text>
                                <b-row>
                                  <b-col cols="10">
                                    <i class="fas fa-building"></i>
                                    Business
                                    <h4 class="mini">
                                      Dummy Address Lorem Ipsum Sit Amet
                                    </h4>
                                  </b-col>
                                  <b-col cols="2">
                                    <b-form-radio
                                      name="radio-size"
                                    ></b-form-radio>
                                  </b-col>
                                </b-row>

                                <hr class="my-1" />
                                <b-row>
                                  <b-col cols="10">
                                    <i class="fas fa-home"></i>
                                    Home
                                    <h4 class="mini">
                                      Dummy Address Lorem Ipsum Sit Amet
                                    </h4>
                                  </b-col>
                                  <b-col cols="2">
                                    <b-form-radio
                                      name="radio-size"
                                    ></b-form-radio>
                                  </b-col>
                                </b-row>
                                <hr class="my-1" />
                                <b-row>
                                  <b-col cols="10">
                                    <i class="fas fa-home"></i>
                                    Home 2
                                    <h4 class="mini">
                                      Dummy Address Lorem Ipsum Sit Amet
                                    </h4>
                                  </b-col>
                                  <b-col cols="2">
                                    <b-form-radio
                                      name="radio-size"
                                    ></b-form-radio>
                                  </b-col>
                                </b-row>
                              </b-card-text>
                            </b-card>

                            <br />
                            <b-row>
                              <b-col cols="4">
                                <i class="fas fa-angle-left"></i> Items</b-col
                              >
                              <b-col cols="3">
                                <b-button
                                  class="checkout1"
                                  block
                                  @click="$bvModal.hide('bv-modal-example')"
                                  >Cancel</b-button
                                >
                              </b-col>
                              <b-col cols="5">
                                <b-button
                                  v-b-modal.modal-center
                                  id="show-btn"
                                  class="checkout11"
                                  @click="$bvModal.show('bv-modal-example')"
                                  >Next Step</b-button
                                >
                                <b-modal
                                  id="bv-modal-example"
                                  centered
                                  hide-footer
                                >
                                  <h3 class="info">Checkout</h3>
                                  <b-card-text>
                                    Choose payment method
                                  </b-card-text>
                                  <b-card title="" sub-title="">
                                    <b-card-text>
                                      <b-row>
                                        <b-col cols="10">
                                          <h4 class="mini">
                                            <i class="fas fa-globe"></i>
                                            Online
                                          </h4>
                                          Credit/Bank Card
                                        </b-col>
                                        <b-col cols="2">
                                          <b-form-radio
                                            name="radio-size"
                                          ></b-form-radio>
                                        </b-col>
                                      </b-row>
                                      <hr class="my-1" />
                                      <b-row>
                                        <b-col cols="10">
                                          <h4 class="mini">
                                            <i class="fab fa-paypal"></i>
                                            Paybal
                                          </h4>
                                          The faster, safer way to send money
                                        </b-col>
                                        <b-col cols="2">
                                          <b-form-radio
                                            name="radio-size"
                                          ></b-form-radio>
                                        </b-col>
                                      </b-row>
                                      <hr class="my-1" />
                                      <b-row>
                                        <b-col cols="10">
                                          <h4 class="mini">
                                            <i class="fab fa-cc-apple-pay"></i>
                                            Apple Pay
                                          </h4>
                                          Mobile payment and digital wallet
                                        </b-col>
                                        <b-col cols="2">
                                          <b-form-radio
                                            name="radio-size"
                                          ></b-form-radio>
                                        </b-col>
                                      </b-row>
                                      <hr class="my-1" />
                                      <b-row>
                                        <b-col cols="10">
                                          <h4 class="mini">
                                            <i class="fas fa-handshake"></i>
                                            Bancontact
                                          </h4>
                                          Paying small amounts very easily
                                        </b-col>
                                        <b-col cols="2">
                                          <b-form-radio
                                            name="radio-size"
                                          ></b-form-radio>
                                        </b-col>
                                      </b-row>
                                    </b-card-text>
                                  </b-card>
                                  <br />
                                  <b-row cols="3">
                                    <b-col cols="4"></b-col>
                                    <b-col cols="3"></b-col>
                                    <b-col cols="5">
                                      <h4>+ Add new address</h4>
                                    </b-col>
                                  </b-row>
                                  <br />
                                  <b-row>
                                    <b-col cols="4">
                                      <i class="fas fa-angle-left"></i>
                                      Registered</b-col
                                    >
                                    <b-col cols="3">
                                      <b-button
                                        class="checkout1"
                                        block
                                        @click="
                                          $bvModal.hide('bv-modal-example')
                                        "
                                        >Cancel</b-button
                                      >
                                    </b-col>
                                    <b-col cols="5">
                                      <b-button
                                        v-b-modal.modal-center
                                        id="show-btn"
                                        class="checkout11"
                                        @click="
                                          $bvModal.show('bv-modal-example')
                                        "
                                        >Next Step</b-button
                                      >
                                    </b-col>
                                  </b-row>
                                </b-modal>
                              </b-col>
                            </b-row>
                          </b-modal>
                        </b-col>
                      </b-row>
                    </div>
                  </b-modal>
                </div>
              </b-row>
            </b-container>
          </b-card-body>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      value1: 75,
      value2: 50,
      value3: 35,
      value4: 25,
      value5: 10,
      value: 4.0,
      user: {},

      selectede: "first",
      optionse: [
        { text: "Distance", value: "first" },
        { text: "Recommended", value: "second" },
        { text: "Top rated", value: "third" },
      ],
      selected1: [],
      options1: [
        { text: "Free delivery", value: "free" },
        { text: "Special offer", value: "special" },
        { text: "Open now", value: "open" },
        { text: "New", value: "new" },
        { text: "Halal", value: "halal" },
      ],
    };
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    },
  },
};
</script>
<style>
.pr-lg-5,
.px-lg-5 {
  margin-top: 60px;
  margin-bottom: 60px;
  background: white;
  padding-left: 2rem !important;
}
.custom-radio .custom-control-input:checked ~ .custom-control-label::before {
  border-color: #f8b305;
}
.chooseheader {
  margin-top: -25px;
  margin-left: 140px;
}
.choose{
  margin-top: 30px;
}
.custom-control-input:checked ~ .custom-control-label::before {
  color: #fff;
  border-color: #f8b305;
  background-color: #f8b305;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.checkout1 {
  background: black;
  color: white;
  border-radius: 30px;
}
.checkout11 {
  background: #f8b305;
  color: black;
  border-radius: 30px;
  width: 100%;
}
.outline-secondary {
  background: rgb(219, 219, 238);
}

.burger {
  text-align: center;
}
.basket-card {
  width: 100%;
  margin-left: 15px;
}

.basket {
  color: #f8b305;
}
.basket1 {
  color: #f8b305;
}
.basket11 {
  color: #f8b305;
  margin-top: 15px;
}
.basket2 {
  float: right;
}
.basket22 {
  float: right;
  font-size: x-large;
}
.scroll {
  margin-top: -60px;
}
p {
  font-size: 0.8rem;
  line-height: 1.7;
  padding: 0px;
}
.modal-header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 1.25rem;
  border-bottom: 0 solid #e9ecef;
  border-top-left-radius: 0.4375rem;
  border-top-right-radius: 0.4375rem;
}
.form-control {
  display: block;
  width: 90%;
  height: calc(1.5em + 1.25rem + 2px);
  padding: 0.625rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  color: #8898aa;
  background-color: #fff;
  background-clip: padding-box;

  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  float: right;
}
.custom-select {
  display: inline-block;
  width: 90%;
  height: calc(1.5em + 1.25rem + 2px);
  padding: 0.625rem 1.75rem 0.625rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  color: #8898aa;
  vertical-align: middle;
  background-color: #fff;
  border: 1px solid #cad1d7;
  border-radius: 50px;
  -webkit-box-shadow: inset 0 1px 2px rgb(0 0 0 / 8%);
  box-shadow: inset 0 1px 2px rgb(0 0 0 / 8%);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.card11 {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.05);
  margin-left: 0px;
  width: 100%;
  height: 100%;
  border-radius: 0px;
  
}
.card22 {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  margin-left: 177px;
}

.a {
  color: #ffffff;
  text-decoration: none;
  background-color: transparent;
}
.heading-small {
  text-transform: none;
}
.radio {
  float: right;
  color: black;
}
.btn1 {
  position: relative;
  text-transform: none;
  -webkit-transition: all 0.15s ease;
  transition: all 0.15s ease;
  letter-spacing: 0.025em;
  font-size: 0.875rem;
  will-change: transform;
  background: #f8b305;
  border-radius: 50px;
  width: 250px;
  float: right;
}

.pt-lg-8,
.py-lg-8 {
  padding-top: 0px !important;
}
.pb-8,
.py-8 {
  padding-bottom: 8rem !important;
}
.work11 {
  background: #fff;
  border-radius: 20px;
  width: 100%;
  /* margin-left: -289px; */
  padding: 20px;
}
.work22 {
  background: #fff;
  border-radius: 20px;
  width: 817px;
  padding: 50px 50px 70px 30px;
 
}
h1,
.h1 {
  font-size: 1.625rem;
  font-weight: 900;
}
.form-control {
  display: block;
  width: 15%;
  height: calc(1.5em + 1.25rem + 2px);
  padding: 0.625rem 0.75rem;
  font-size: 1.175rem;
  font-weight: 400;
  line-height: 1.5em;
  color: #f8b305;
  float: left;
  border: 0px;
}
.flex-grow-1 {
  -webkit-box-flex: 0 !important;
  -ms-flex-positive: 0 !important;
  flex-grow: 0 !important;
}
.mt-2,
.my-2 {
  margin-top: 0.8rem !important;
  font-weight: bold;
  font-size: 20px;
  margin-left: 115px;
}
.card-body {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 0rem;
}
.card-img-top {
  width: 100%;
  border-top-left-radius: calc(0.375rem - 1px);
  border-top-right-radius: calc(0.375rem - 1px);
  height: 100%;
}
.restaurant1 {
  color: #212529;
  background-color: #f8b305;
  border-color: #f8b305;
  border-radius: 50px;
  width: 100%;
  margin-top: 30px;
  margin-right: 15px;
}
p {
  font-size: 0.8rem;
  line-height: 1.7;
  padding: 15px;
}
.card-deck .card {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex: 1 0 0%;
  flex: 1 0 0%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-right: 15px;
  margin-bottom: 0;
  margin-left: 15px;
  margin-top: 30px;
}
.card-deck {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  margin-right: -15px;
  margin-left: 0px;
}
.mb-22 {
  width: 100px;
  height: 100px;
  border: 0px;
}
.comment {
  padding-top: 10px;
}
.bi-chevron-down {
  margin-left: 10px;

  color: #f8b305;
}
.m-1 {
  background: #fff;
  color: #f8b305;
}

.body1 {
  width: 240px;
  margin-right: 200px;
}
.info {
  margin-top: -72px;
}
.mini {
  padding: 0px;
  margin-bottom: -2px;
  margin-top: 0px;
}
.fa-chevron-right {
  float: right;
  width: x;
  font-size: x-large;
  margin-top: -30px;
}
.money-bill {
  color: #f8b305;
}
.increase {
  font-size: x-large;
  margin-left: 15px;
  width: 100px;
}
.increase1 {
  font-size: x-large;
  margin-left: 60px;
  width: 100px;
}

.progress-bar {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background-color: #f8b325;
  -webkit-transition: width 0.6s ease;
  transition: width 0.6s ease;
}
.modal-restaurant1 {
  margin-bottom: 20px;
  margin-left: 15px;
  margin-right: 15px;
  width: 100%;
}

.mb-1,
.my-1 {
  margin-bottom: 2px;
}

.mt-1,
.my-1 {
  margin-top: 2px;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 600;
  line-height: 1.5;
  color: #0a0a0a;
}
</style>

<template>
  <b-container class="12">
    <div>
      <b-row>
        <b-col md="3">
          <b-card class="card1">
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
          <b-card-body class="px-lg-5 py-lg-5" >
            <b-container class="work">
              <h3>Order</h3>
              <b-card-text> Current order </b-card-text>
              <div>
                <b-card-group deck>
                  <b-card @click="$bvModal.show('modal-order-show')">
                    <b-card-text>
                      <b-row>
                        <b-col cols="1">
                          <div class="order-image">
                            <a href="#">
                              <b-img
                                class="order-image"
                                src="img/theme/R1.png"
                              />
                            </a>
                          </div>
                        </b-col>
                        <b-col cols="3">
                          <h4>Burger King</h4>
                          <span class="basket">1x</span>
                          Whopperking Menu
                        </b-col>
                        <b-col cols="6">
                          Dummy Address Lorem Ipsum Sit Amet Dummy Pin
                        </b-col>
                        <b-col cols="2">
                          <h5>
                            Order status<i class="fas fa-chevron-right"></i>
                          </h5>
                        </b-col>
                      </b-row>
                    </b-card-text>
                    <template #footer>
                      <b-row cols="4">
                        <b-col>
                          <small class="text-muted1"
                            ><h5>
                              <i class="far fa-clock"></i> 20 - 30 min.
                            </h5></small
                          >
                        </b-col>
                        <b-col>
                          <h5></h5>
                        </b-col>
                        <b-col>
                          <h5></h5>
                        </b-col>
                        <b-col>
                          <h5 style="float: right">Delivered</h5>
                        </b-col>
                      </b-row>
                    </template>
                  </b-card>
                </b-card-group>

                <b-modal id="modal-order-show" hide-footer>
                  <b-row>
                    <b-col cols="6">
                      <ol class="list-group vertical-steps">
                        <li class="list-group-item completed">
                          <span>Waiting</span>
                        </li>
                        <li class="list-group-item completed">
                          <span>In Progress</span>
                        </li>
                        <li class="list-group-item completed">
                          <span>Ready</span>
                        </li>
                        <li class="list-group-item active">
                          <span>On the way</span>
                        </li>
                        <li class="list-group-item">
                          <span style="color: #f8b305">Delivered</span>
                        </li>
                      </ol>
                    </b-col>
                    <b-col cols="6">
                      <b-row>
                        <b-col cols="6"> Waiting </b-col>
                        <b-col cols="6"> 10:00 </b-col>
                        <b-col> Lorem, ipsum dolor. </b-col>
                      </b-row>
                      <hr class="my-1" />
                      <b-row>
                        <b-col cols="6"> Waiting </b-col>
                        <b-col cols="6"> 10:00 </b-col>
                        <b-col> Lorem, ipsum dolor. </b-col>
                      </b-row>
                      <hr class="my-1" />
                      <b-row>
                        <b-col cols="6"> Waiting </b-col>
                        <b-col cols="6"> 10:00 </b-col>
                        <b-col> Lorem, ipsum dolor. </b-col>
                      </b-row>
                      <hr class="my-1" />
                      <b-row>
                        <b-col cols="6"> Waiting </b-col>
                        <b-col cols="6"> 10:00 </b-col>
                        <b-col> Lorem, ipsum dolor. </b-col>
                      </b-row>
                      <hr class="my-1" />
                      <b-row>
                        <b-col cols="6"> Waiting </b-col>
                        <b-col cols="6"> 10:00 </b-col>
                        <b-col> Lorem, ipsum dolor. </b-col>
                      </b-row>
                    </b-col>
                  </b-row>
                  <br />
                  <b-row>
                    <b-col cols="3"></b-col>
                    <b-col cols="3">
                      <b-button
                        class="checkout1"
                        block
                        @click="$bvModal.hide('bv-modal-example')"
                        >Cancel</b-button
                      >
                    </b-col>
                    <b-col cols="6">
                      <b-button
                        v-b-modal.modal-center
                        id="show-btn"
                        class="checkout11"
                        @click="$bvModal.show('bv-modal-example')"
                        >Rating</b-button
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
                                <b-form-radio name="radio-size"></b-form-radio>
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
                                <b-form-radio name="radio-size"></b-form-radio>
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
                                <b-form-radio name="radio-size"></b-form-radio>
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
                            <b-modal id="bv-modal-example" centered hide-footer>
                              <h3 class="info">Checkout</h3>
                              <b-card-text> Chosee payment method </b-card-text>
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
                                </b-col>
                              </b-row>
                            </b-modal>
                          </b-col>
                        </b-row>
                      </b-modal>
                    </b-col>
                  </b-row>
                </b-modal>
              </div>
              <br />
              <b-card-text> Previous order </b-card-text>
              <div>
                <b-card-group deck>
                  <b-card>
                    <b-card-text>
                      <b-row>
                        <b-col cols="1">
                          <div class="order-image">
                            <a href="#">
                              <b-img
                                class="order-image"
                                src="img/theme/R2.png"
                              />
                            </a>
                          </div>
                        </b-col>
                        <b-col cols="4">
                          <h4>Domino's Pizza</h4>
                          <span class="basket">1x</span>
                          Xtreme Meat
                        </b-col>
                        <b-col cols="7">
                          <p style="float: right">
                            Dummy Address Lorem Ipsum Sit Amet Dummy Pin
                            <i class="fas fa-chevron-right"></i>
                          </p>
                        </b-col>
                      </b-row>
                    </b-card-text>
                  </b-card>
                </b-card-group>
              </div>
              <br />
              <div>
                <b-card-group deck>
                  <b-card>
                    <b-card-text>
                      <b-row>
                        <b-col cols="1">
                          <div class="order-image">
                            <a href="#">
                              <b-img
                                class="order-image"
                                src="img/theme/R6.png"
                              />
                            </a>
                          </div>
                        </b-col>
                        <b-col cols="4">
                          <h4>Subway</h4>
                          <span class="basket">2x</span>
                          Sweet Onion Chicken Teriyaki
                        </b-col>
                        <b-col cols="7">
                          <p style="float: right">
                            Dummy Address Lorem Ipsum Sit Amet Dummy Pin
                            <i class="fas fa-chevron-right"></i>
                          </p>
                        </b-col>
                      </b-row>
                    </b-card-text>
                  </b-card>
                </b-card-group>
              </div>
              <br />
              <div>
                <b-card-group deck>
                  <b-card>
                    <b-card-text>
                      <b-row>
                        <b-col cols="1">
                          <div class="order-image">
                            <a href="#">
                              <b-img
                                class="order-image"
                                src="img/theme/R2.png"
                              />
                            </a>
                          </div>
                        </b-col>
                        <b-col cols="4">
                          <h4>Domino's Pizza</h4>
                          <span class="basket">1x</span>
                          Xtreme Meat
                        </b-col>
                        <b-col cols="7">
                          <p style="float: right">
                            Dummy Address Lorem Ipsum Sit Amet Dummy Pin
                            <i class="fas fa-chevron-right"></i>
                          </p>
                        </b-col>
                      </b-row>
                    </b-card-text>
                  </b-card>
                </b-card-group>
              </div>
              <br />
              <div>
                <b-card-group deck>
                  <b-card>
                    <b-card-text>
                      <b-row>
                        <b-col cols="1">
                          <div class="order-image">
                            <a href="#">
                              <b-img
                                class="order-image"
                                src="img/theme/R6.png"
                              />
                            </a>
                          </div>
                        </b-col>
                        <b-col cols="4">
                          <h4>Subway</h4>
                          <span class="basket">2x</span>
                          Sweet Onion Chicken Teriyaki
                        </b-col>
                        <b-col cols="7">
                          <p style="float: right">
                            Dummy Address Lorem Ipsum Sit Amet Dummy Pin
                            <i class="fas fa-chevron-right"></i>
                          </p>
                        </b-col>
                      </b-row>
                    </b-card-text>
                  </b-card>
                </b-card-group>
              </div>
              <br />
            </b-container>
          </b-card-body>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import { CUISINES } from "@/graphql";
export default {
  data() {
    return {
      user: {
        company: "Creative Code Inc.",
        name: "GarryBrown",
        email: "gbrown@loremmail.com",
        telephone: "1-(555)-555-5555",
        date: "18.07.1989",
        city: "Select",
        country: "USA",
        postalCode: "",
        aboutMe: `Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.`,
      },
      selected: null,
      options: [
        { value: null, text: "Select" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
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
  created() {
    this.getCuisines();
  },
  methods: {
    getCuisines() {
      this.$apollo
        .query({
          query: CUISINES,
        })
        .then((result) => {
          console.log(result.data);
        });
    },
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

/*Vertical Steps*/
.list-group.vertical-steps {
  padding-left: 20px;
}
.list-group.vertical-steps .list-group-item {
  border: none;
  border-left: 3px solid #f8b305;
  box-sizing: border-box;
  border-radius: 0;
  counter-increment: step-counter;
  padding-left: 20px;
  padding-right: 0px;
  padding-bottom: 35px;
  padding-top: 0px;
}
.list-group.vertical-steps .list-group-item.active {
  background-color: transparent;
  color: inherit;
}
.list-group.vertical-steps .list-group-item:last-child {
  border-left: 3px solid transparent;
  padding-bottom: 0;
}
.list-group.vertical-steps .list-group-item::before {
  border-radius: 50%;
  background-color: #f8b305;
  color: #555;
  content: counter(step-counter);
  display: inline-block;
  height: 25px;
  line-height: 25px;
  margin-left: -35px;
  text-align: center;
  width: 25px;
}
.list-group.vertical-steps .list-group-item span,
.list-group.vertical-steps .list-group-item a {
  display: block;
  overflow: hidden;
  padding-top: 2px;
}
/*Active/ Completed States*/
.list-group.vertical-steps .list-group-item.active::before {
  background-color: #1a1b1b;
  color: #fff;
}
.list-group.vertical-steps .list-group-item.completed {
  border-left: 3px solid #1a1b1b;
}
.list-group.vertical-steps .list-group-item.completed::before {
  background-color: #1a1b1b;
  color: #fff;
}
.list-group.vertical-steps .list-group-item.completed:last-child {
  border-left: 3px solid transparent;
}
.card-footer {
  padding: 0.25rem 1.5rem;
  background-color: #f8b305;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}
.order-image {
  width: 100%;
}
.basket {
  color: #f8b305;
}
p {
  font-size: 14px;
  font-weight: normal;
  line-height: 1.7;
}
.container {
  max-width: 1140px;
}
.type {
  color: rgb(126, 125, 125);
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

  border-radius: 50px;
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

  border-radius: 50px;
  -webkit-box-shadow: inset 0 1px 2px rgb(0 0 0 / 8%);
  box-shadow: inset 0 1px 2px rgb(0 0 0 / 8%);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.card1 {
  border-radius: 0px;
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

  margin-left: 0px;
  width: 100%;
  height: 100%;

}
.card2 {
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

  border-radius: 20px;
}

.a {
  color: black;
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
.work {
  padding: 0px;
  background: #fff;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  
}
</style>

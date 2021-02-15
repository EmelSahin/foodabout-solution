<template>
  <b-container class="bv-example-row">
    <div>
      <div class="row">
        <div class="col-md-6">
          <b-card class="card11">
            <b-container class="choose">
              <b-form-group label="Sort by" v-slot="{ ariaDescribedby }">
                <b-form-radio-group
                  v-model="selectede"
                  :options="optionse"
                  :aria-describedby="ariaDescribedby"
                  name="radios-stacked"
                  stacked
                ></b-form-radio-group>
              </b-form-group>
              <b-form-group label="Filters" v-slot="{ ariaDescribedby }">
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
        </div>
        <div class="col-md-6">
          <b-card2>
            <b-container class="work11">
              <h1>Burger King - Palace de Royale</h1>
              <b class="row">
                <b-form-rating
                  class="star-rating"
                  id="rating-md-no-border"
                  v-model="value"
                  rating="no-border"
                ></b-form-rating>

                <div class="mt-2">{{ value }}</div>

                <div class="comment">
                  <div v-b-toggle.collapse-2 class="m-1">Comment</div>
                  <b-collapse class="collapsee" id="collapse-2">
                    <b-card class="body1">
                      <div>
                        <div class="row">
                          <div class="col-md-1">5</div>
                          <div class="col-md-1">
                            <i class="far fa-star"></i>
                          </div>
                          <div class="col-md-8 mt-1">
                            <b-progress
                              :value="value1"
                              show-progress
                            ></b-progress>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-1">4</div>
                          <div class="col-md-1">
                            <i class="far fa-star"></i>
                          </div>
                          <div class="col-md-8 mt-1">
                            <b-progress
                              :value="value2"
                              show-progress
                            ></b-progress>
                          </div>
                        </div>


                        <div class="row">
                          <div class="col-md-1">3</div>
                          <div class="col-md-1">
                            <i class="far fa-star"></i>
                          </div>
                          <div class="col-md-8 mt-1">
                            <b-progress
                              :value="value3"
                              show-progress
                            ></b-progress>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-1">2</div>
                          <div class="col-md-1">
                            <i class="far fa-star"></i>
                          </div>
                          <div class="col-md-8 mt-1">
                            <b-progress
                              :value="value4"
                              show-progress
                            ></b-progress>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-1">1</div>
                          <div class="col-md-1">
                            <i class="far fa-star"></i>
                          </div>
                          <div class="col-md-8 mt-1">
                            <b-progress
                              :value="value5"
                              show-progress
                            ></b-progress>
                          </div>
                        </div>

                      </div>
                    </b-card>
                  </b-collapse>
                </div>
                <b-icon icon="chevron-down" aria-hidden="true"> </b-icon>
              </b>

              <b class="row">
                <b-col md="7" class="mb-3">
                  <p>
                    # Burger - American -Vegan Friendly - Fried Chicken
                    <br />
                    <b-icon icon="clock-fill" aria-hidden="true"></b-icon> 11:00
                    - 22:00
                    <b-icon icon="bicycle" aria-hidden="true"> </b-icon> €0,00
                    delivery
                    <b-icon icon="arrow-down-circle-fill" aria-hidden="true">
                    </b-icon>
                    €4,50 minimum
                    <br />
                    <i class="fas fa-map-marker-alt"></i> Dummy Address Lorem
                    Ipsum Si amet Dummy Place
                  </p>

                  <p>
                    Lorem ipsum dolar sit amet, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                  </p>
                </b-col>
                <b-col md="5">
                  <div>
                    <b-card
                      img-src="img/theme/restaurant.png"
                      img-alt="Image"
                      img-top
                      tag="article"
                      style="max-width: 20rem; margin-top: -98px"
                      class="mb-2"
                    >
                    </b-card>
                  </div>
                </b-col>
              </b>

              <div class="modal-restaurant">
                <b-button
                  v-b-modal.modal-center
                  class="btn restaurant"
                  title="Restaurant Info"
                  id="show-btn"
                  @click="$bvModal.show('modal-center')"
                  >Restaurant Info</b-button
                >

                <b-modal
                  id="modal-center"
                  centered
                  title="Restaurant Info"
                  hide-footer
                >
                  <template #modal-title> </template>
                  <div class="d-block text-center"></div>
                  <div>
                    <h3 class="info">Restaurant Info</h3>
                    <b-card title="" sub-title="">
                      <b-card-text>
                        <h4 class="mini">Minimum Order Amount</h4>
                        €4,50 Lorem District(Dummy Address)
                        <hr class="my-4" />
                        <h4 class="mini">Payment Method</h4>
                        Credit/Bank Card, Bancontact, Paybal,Apple Pay
                        <hr class="my-4" />
                        <h4 class="mini">Working Hours</h4>
                        Today: 10:00-19:00
                        <div class="modal-day">
                          <i class="fas fa-chevron-right"></i>
                        </div>
                        <hr class="my-4" />
                        <h4 class="mini">Opportunities</h4>
                        "Chicken McNuggets" for any menu order € 1.5
                        <hr class="my-4" />
                        <h4 class="mini">Contact</h4>
                        <b-icon
                          icon="telephone-fill"
                          aria-hidden="true"
                        ></b-icon>
                        +35 00504540541
                        <i
                          style="margin-left: 35px"
                          class="fas fa-envelope"
                        ></i>
                        corporate@burgerking.com
                      </b-card-text>
                    </b-card>
                  </div>
                </b-modal>
              </div>

              <div></div>
            </b-container>
          </b-card2>
          <b-card2>
            <b-container class="work22">
              <div class="row">
                <h4>Burgers</h4>
                <b-col md="12">
                  <div>
                    <b-card-group deck>
                      <b-card>
                        <b-modal id="modal-scoped">
                          <template> </template>

                          <template #default="{ hide }">
                            <b-card>
                              <b class="row">
                                <b-col md="4">
                                  <b-card
                                    class="mb-22"
                                    img-src="img/theme/restaurant-image.png"
                                    img-alt="Image"
                                    img-top1
                                    tag="article"
                                  >
                                  </b-card>
                                </b-col>
                                <b-col md="8">
                                  <b-card-text>
                                    <h4>Whopperking Menu</h4>
                                    Lorem ipsum dolar sit amet, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna
                                    aliqua.
                                  </b-card-text>
                                </b-col>
                              </b>
                              <hr class="my-2" />
                              <div class="row">
                                <div class="col-md-6">
                                  <h4 class="increase">- 1 +</h4>
                                </div>
                                <div class="col-md-6">
                                  <h4><i class="money-bill"> € 9.90</i></h4>
                                </div>
                              </div>
                            </b-card>
                            <p>Ingredient (Remove from thr meal)</p>
                            <p>Menu</p>
                            <b-card>
                              <b-card-text>
                                <h4>
                                  <i class=""></i> Big
                                  <input
                                    class="radio"
                                    type="radio"
                                    v-model="n"
                                  />
                                </h4>
                                <hr class="my-4" />
                                <h4>
                                  <i class=""></i> Super
                                  <input
                                    class="radio"
                                    type="radio"
                                    v-model="n"
                                  />
                                </h4>

                                <hr class="my-4" />
                                <h4>
                                  <i class=""></i> Mega
                                  <input
                                    class="radio"
                                    type="radio"
                                    v-model="n"
                                  />
                                </h4>
                              </b-card-text>
                            </b-card>
                            <p>Drinks</p>
                            <b-card>
                              <b-card-text>
                                <h4>
                                  <i class=""></i> Coca Cola(Big)
                                  <input
                                    class="radio"
                                    type="radio"
                                    v-model="n"
                                  />
                                </h4>
                                <hr class="my-4" />
                                <h4>
                                  <i class=""></i> Coca Cola light(Big)
                                  <input
                                    class="radio"
                                    type="radio"
                                    v-model="n"
                                  />
                                </h4>

                                <hr class="my-4" />
                                <h4>
                                  <i class=""></i> Fanta(Big)
                                  <input
                                    class="radio"
                                    type="radio"
                                    v-model="n"
                                  />
                                </h4>
                                <hr class="my-4" />
                                <h4>
                                  <i class=""></i> Sprite(Big)
                                  <input
                                    class="radio"
                                    type="radio"
                                    v-model="n"
                                  />
                                </h4>
                                <hr class="my-4" />
                                <h4>
                                  <i class=""></i> Ice Tea(Big)
                                  <input
                                    class="radio"
                                    type="radio"
                                    v-model="n"
                                  />
                                </h4>

                                <hr class="my-4" />
                                <h4>
                                  <i class=""></i> Cappy Atom(20cl.)
                                  <input
                                    class="radio"
                                    type="radio"
                                    v-model="n"
                                  />
                                </h4>
                                <hr class="my-4" />
                                <h4>
                                  <i class=""></i> Water(330ml.)
                                  <input
                                    class="radio"
                                    type="radio"
                                    v-model="n"
                                  />
                                </h4>
                              </b-card-text>
                            </b-card>
                            <p>Non</p>
                            <b-card>
                              <b-card-text>
                                <h4>
                                  <i class=""></i> 1 Priece
                                  <input
                                    class="radio"
                                    type="radio"
                                    v-model="n"
                                  />
                                </h4>
                                <hr class="my-4" />
                                <h4>
                                  <i class=""></i> 2 Priece
                                  <input
                                    class="radio"
                                    type="radio"
                                    v-model="n"
                                  />
                                </h4>

                                <hr class="my-4" />
                                <h4>
                                  <i class=""></i> 3 Priece
                                  <input
                                    class="radio"
                                    type="radio"
                                    v-model="n"
                                  />
                                </h4>
                              </b-card-text>
                            </b-card>
                          </template>

                          <template #modal-footer="{ ok, cancel, hide }">
                            <b>Custom Footer</b>
                            <!-- Emulate built in modal footer ok and cancel button actions -->
                            <b-button size="sm" variant="success" @click="ok()">
                              OK
                            </b-button>
                            <b-button
                              size="sm"
                              variant="danger"
                              @click="cancel()"
                            >
                              Cancel
                            </b-button>
                            <!-- Button with custom close trigger value -->
                            <b-button
                              size="sm"
                              variant="outline-secondary"
                              @click="hide('forget')"
                            >
                              Forget it
                            </b-button>
                          </template>
                        </b-modal>

                        <b class="row" @click="$bvModal.show('modal-scoped')">
                          <b-col md="4">
                            <b-card
                              class="mb-22"
                              img-src="img/theme/restaurant-image.png"
                              img-alt="Image"
                              img-top1
                              tag="article"
                            >
                            </b-card>
                          </b-col>
                          <b-col md="8">
                            <b-card-text>
                              <h4>Whopperking Menu</h4>
                              Lorem ipsum dolar sit amet, sed do eiusmod tempor
                              incididunt ut labore et dolore magna aliqua.
                              <i class="fas fa-money-bill"> € 9.90</i>
                            </b-card-text>
                          </b-col>
                        </b>
                      </b-card>

                      <b-card>
                        <b class="row">
                          <b-col md="4">
                            <b-card
                              class="mb-22"
                              img-src="img/theme/restaurant-image.png"
                              img-alt="Image"
                              img-top1
                              tag="article"
                            >
                            </b-card>
                          </b-col>
                          <b-col md="8">
                            <b-card-text>
                              <h4>Whopperking Menu</h4>
                              Lorem ipsum dolar sit amet, sed do eiusmod tempor
                              incididunt ut labore et dolore magna aliqua.
                              <i class="fas fa-money-bill"> € 9.90</i>
                            </b-card-text>
                          </b-col>
                        </b>
                      </b-card>
                    </b-card-group>
                    <b-card-group deck>
                      <b-card>
                        <b class="row">
                          <b-col md="4">
                            <b-card
                              class="mb-22"
                              img-src="img/theme/restaurant-image.png"
                              img-alt="Image"
                              img-top1
                              tag="article"
                            >
                            </b-card>
                          </b-col>
                          <b-col md="8">
                            <b-card-text>
                              <h4>Whopperking Menu</h4>
                              Lorem ipsum dolar sit amet, sed do eiusmod tempor
                              incididunt ut labore et dolore magna aliqua.
                              <i class="fas fa-money-bill"> € 9.90</i>
                            </b-card-text>
                          </b-col>
                        </b>
                      </b-card>

                      <b-card>
                        <b class="row">
                          <b-col md="4">
                            <b-card
                              class="mb-22"
                              img-src="img/theme/restaurant-image.png"
                              img-alt="Image"
                              img-top1
                              tag="article"
                            >
                            </b-card>
                          </b-col>
                          <b-col md="8">
                            <b-card-text>
                              <h4>Whopperking Menu</h4>
                              Lorem ipsum dolar sit amet, sed do eiusmod tempor
                              incididunt ut labore et dolore magna aliqua.
                              <i class="fas fa-money-bill"> € 9.90</i>
                            </b-card-text>
                          </b-col>
                        </b>
                      </b-card>
                    </b-card-group>
                  </div>
                </b-col>
              </div>
            </b-container>
          </b-card2>
          <b-card2>
            <b-container class="work22">
              <div class="row">
                <h4>Drinks</h4>
                <b-col md="12">
                  <div>
                    <b-card-group deck>
                      <b-card>
                        <b class="row">
                          <b-col md="4">
                            <b-card
                              class="mb-22"
                              img-src="img/theme/restaurant-image1.png"
                              img-alt="Image"
                              img-top1
                              tag="article"
                            >
                            </b-card>
                          </b-col>
                          <b-col md="8">
                            <b-card-text>
                              <h4>Coca Cola 330ml.</h4>
                              Lorem ipsum dolar sit amet, sed do eiusmod tempor
                              incididunt ut labore et dolore magna aliqua.
                              <i class="fas fa-money-bill"> € 1.90</i>
                            </b-card-text>
                          </b-col>
                        </b>
                      </b-card>

                      <b-card>
                        <b class="row">
                          <b-col md="4">
                            <b-card
                              class="mb-22"
                              img-src="img/theme/restaurant-image1.png"
                              img-alt="Image"
                              img-top1
                              tag="article"
                            >
                            </b-card>
                          </b-col>
                          <b-col md="8">
                            <b-card-text>
                              <h4>Coca Cola 330ml.</h4>
                              Lorem ipsum dolar sit amet, sed do eiusmod tempor
                              incididunt ut labore et dolore magna aliqua.
                              <i class="fas fa-money-bill"> € 1.90</i>
                            </b-card-text>
                          </b-col>
                        </b>
                      </b-card>
                    </b-card-group>
                    <b-card-group deck>
                      <b-card>
                        <b class="row">
                          <b-col md="4">
                            <b-card
                              class="mb-22"
                              img-src="img/theme/restaurant-image1.png"
                              img-alt="Image"
                              img-top1
                              tag="article"
                            >
                            </b-card>
                          </b-col>
                          <b-col md="8">
                            <b-card-text>
                              <h4>Coca Cola 330ml.</h4>
                              Lorem ipsum dolar sit amet, sed do eiusmod tempor
                              incididunt ut labore et dolore magna aliqua.
                              <i class="fas fa-money-bill"> € 1.90</i>
                            </b-card-text>
                          </b-col>
                        </b>
                      </b-card>

                      <b-card>
                        <b class="row">
                          <b-col md="4">
                            <b-card
                              class="mb-22"
                              img-src="img/theme/restaurant-image1.png"
                              img-alt="Image"
                              img-top1
                              tag="article"
                            >
                            </b-card>
                          </b-col>
                          <b-col md="8">
                            <b-card-text>
                              <h4>Coca Cola 330ml.</h4>
                              Lorem ipsum dolar sit amet, sed do eiusmod tempor
                              incididunt ut labore et dolore magna aliqua.
                              <i class="fas fa-money-bill"> € 1.90</i>
                            </b-card-text>
                          </b-col>
                        </b>
                      </b-card>
                    </b-card-group>
                  </div>
                </b-col>
              </div>
            </b-container>
          </b-card2>
        </div>
      </div>
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
  float: right;
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
  border-radius: 20px;
  margin-left: 0px;
  width: 250px;
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
.choose {
  height: 700px;
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
  width: 817px;
  margin-left: -289px;

  padding: 20px;
}
.work22 {
  background: #fff;
  border-radius: 20px;
  width: 817px;
  padding: 50px 50px 70px 30px;
  margin-bottom: 70px;
  margin-left: -289px;
  margin-top: 20px;
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
}
.card-body {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 0rem;
}
.card-img-top {
  width: 300px;
  border-top-left-radius: calc(0.375rem - 1px);
  border-top-right-radius: calc(0.375rem - 1px);
  height: 320px;
}
.restaurant {
  color: #212529;
  background-color: #f8b305;
  border-color: #f8b305;
  border-radius: 50px;
  margin-top: -80px;
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
.mb-22 {
  width: 100px;
  height: 100px;
  border: 0px;
}
.comment {
  padding-top: 10px;
  padding-left: 10px;
  width: 90px;
}
.bi-chevron-down {
  margin-left: 10px;
  margin-top: 20px;
  color: #f8b305;
}
.m-1 {
  background: #fff;
  color: #f8b305;
}
.collapsee {
  width: 400px;
  padding-top: 20px;
}
.body1 {
  width: 300px;
  margin-right: 200px;
  margin-left: -115px;
}
.info {
  margin-top: -72px;
}
.mini {
  padding: 0px;
  margin-bottom: -2px;
  margin-top: 0px;
}
.modal-restaurant {
  width: 500px;
}
.fa-chevron-right {
  float: right;
  width: x;
  font-size: x-large;
  margin-top: -30px;
}
.money-bill {
  margin-left: 150px;
  color: #f8b305;
}
.increase {
  font-size: x-large;
  margin-left: 15px;
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
</style>

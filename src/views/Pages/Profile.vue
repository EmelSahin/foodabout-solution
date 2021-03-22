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
              <h3>Profile</h3>

              <b-row>
                <b-col cols="8">
                  <b-row>
                    <b-card class="basket-card">
                      <b-row cols="12" class="profilepicture">
                        <b-col cols="3">
                          <a href="#"><img src="img/theme/profile.png" /></a>
                          <br />
                          <h4 class="mini">Juan Mitchel</h4>
                        </b-col>
                        <b-col cols="4">
                          Sum of Orders
                          <br />
                          <h4>€1.500,00</h4>
                        </b-col>
                        <b-col cols="2">
                          Orders
                          <br />
                          <h4>168</h4>
                        </b-col>

                        <b-col cols="3">
                          Total Score
                          <br />
                          <h4>
                            52
                            <span class="basket1"
                              ><i class="fas fa-trophy"></i
                            ></span>
                          </h4>
                        </b-col>
                      </b-row>
                      <hr class="my-4" />
                      <b-col style="margin-left: 300px" class="profile-addres"
                        >Member for 4 years</b-col>

                      <b-form-rating
                        class="star-rating"
                        style="margin-left: 350px"
                        id="rating-md-no-border"
                        v-model="value"
                        rating="no-border"
                      ></b-form-rating>
                    </b-card>

                    <b-col class="profile-addres"
                      >My registered address</b-col
                    >

                    <b-card class="basket-card">
                      <b-row class="profile-register">
                        <b-col cols="11">
                          <i class="fas fa-building"></i>
                          Business
                          <h4 class="mini">
                            Dummy Address Lorem Ipsum Sit Amet <br />
                            Dunny Pin Dummy place
                          </h4>
                        </b-col>
                        <b-col cols="1">
                          <h4 class="">
                            <i
                              style="margin-top: 20px"
                              class="fas fa-chevron-right"
                            ></i>
                          </h4>
                        </b-col>
                      </b-row>
                      <hr class="my-4" />
                      <b-row class="profile-register">
                        <b-col cols="11">
                          <i class="fas fa-home"></i>
                          Home
                          <h4 class="mini">
                            Dummy Address Lorem Ipsum Sit Amet <br />
                            Dunny Pin Dummy place
                          </h4>
                        </b-col>
                        <b-col cols="1">
                          <h4 class="">
                            <i
                              style="margin-top: 20px"
                              class="fas fa-chevron-right"
                            ></i>
                          </h4>
                        </b-col>
                      </b-row>
                      <hr class="my-4" />
                      <b-row class="profile-register">
                        <b-col cols="11">
                          <i class="fas fa-home"></i>
                          Home 2
                          <h4 class="mini">
                            Dummy Address Lorem Ipsum Sit Amet <br />
                            Dunny Pin Dummy place
                          </h4>
                        </b-col>
                        <b-col cols="1">
                          <h4 class="">
                            <i
                              style="margin-top: 20px"
                              class="fas fa-chevron-right"
                            ></i>
                          </h4>
                        </b-col>
                      </b-row>
                    </b-card>
                  </b-row>
                </b-col>
                <b-col cols="4">
                  <b-card class="profile-card">
                    <b-row class="profile-pad">
                      <b-col cols="4">
                        <div class="order-image1">
                          <a href="#">
                            <b-img
                              class="profile-image"
                              src="img/theme/R2.png"
                            />
                          </a>
                        </div>
                      </b-col>
                      <b-col cols="6">
                        <h4 style="margin-top: 15px">Dominos</h4>
                      </b-col>
                      <b-col cols="2">
                        <h4 class="">
                          <i
                            style="margin-top: 20px"
                            class="fas fa-chevron-right"
                          ></i>
                        </h4>
                      </b-col>
                    </b-row>
                  </b-card>
                  <b-card class="profile-card">
                    <b-row class="profile-pad">
                      <b-col cols="4">
                        <div class="order-image">
                          <a href="#">
                            <b-img
                              style="margin-top: 15px"
                              class="profile-image"
                              src="img/theme/R6.png"
                            />
                          </a>
                        </div>
                      </b-col>
                      <b-col cols="6">
                        <h4 style="margin-top: 10px">Subway</h4>
                      </b-col>
                      <b-col cols="2">
                        <h4 class="">
                          <i
                            style="margin-top: 15px"
                            class="fas fa-chevron-right"
                          ></i>
                        </h4>
                      </b-col>
                    </b-row>
                  </b-card>
                  <b-card class="profile-card">
                    <b-row class="profile-pad">
                      <b-col cols="3">
                        <div class="order-image">
                          <a href="#">
                            <b-img
                              style="width: 100%; margin-top: 10px"
                              class="profile-image"
                              src="img/theme/R1.png"
                            />
                          </a>
                        </div>
                      </b-col>
                      <b-col cols="7">
                        <h4 style="margin-top: 10px">Burger King</h4>
                      </b-col>
                      <b-col cols="1">
                        <h4 class="">
                          <i
                            style="margin-top: 15px"
                            class="fas fa-chevron-right"
                          ></i>
                        </h4>
                      </b-col>
                    </b-row>
                  </b-card>
                  <b-card class="profile-card">
                    <b-row class="profile-pad">
                      <b-col cols="4">
                        <div class="order-image1">
                          <a href="#">
                            <b-img
                              class="profile-image"
                              src="img/theme/R2.png"
                            />
                          </a>
                        </div>
                      </b-col>
                      <b-col cols="6">
                        <h4 style="margin-top: 15px">Dominos</h4>
                      </b-col>
                      <b-col cols="2">
                        <h4 class="">
                          <i
                            style="margin-top: 20px"
                            class="fas fa-chevron-right"
                          ></i>
                        </h4>
                      </b-col>
                    </b-row>
                  </b-card>
                  <b-card class="profile-card">
                    <b-row class="profile-pad">
                      <b-col cols="4">
                        <div class="order-image">
                          <a href="#">
                            <b-img
                              style="margin-top: 15px"
                              class="profile-image"
                              src="img/theme/R6.png"
                            />
                          </a>
                        </div>
                      </b-col>
                      <b-col cols="6">
                        <h4 style="margin-top: 10px">Subway</h4>
                      </b-col>
                      <b-col cols="2">
                        <h4 class="">
                          <i
                            style="margin-top: 15px"
                            class="fas fa-chevron-right"
                          ></i>
                        </h4>
                      </b-col>
                    </b-row>
                  </b-card>

                  <b-card class="profile-card">
                    <b-row class="profile-pad">
                      <b-col cols="3">
                        <div class="order-image">
                          <a href="#">
                            <b-img
                              style="width: 100%; margin-top: 10px"
                              class="profile-image"
                              src="img/theme/R1.png"
                            />
                          </a>
                        </div>
                      </b-col>
                      <b-col cols="7">
                        <h4 style="margin-top: 10px">Burger King</h4>
                      </b-col>
                      <b-col cols="1">
                        <h4 class="">
                          <i
                            style="margin-top: 15px"
                            class="fas fa-chevron-right"
                          ></i>
                        </h4>
                      </b-col>
                    </b-row>
                  </b-card>
                  <b-card class="profile-card">
                    <b-row class="profile-pad">
                      <b-col cols="4">
                        <div class="order-image">
                          <a href="#">
                            <b-img
                              style="margin-top: 15px"
                              class="profile-image"
                              src="img/theme/R6.png"
                            />
                          </a>
                        </div>
                      </b-col>
                      <b-col cols="6">
                        <h4 style="margin-top: 10px">Subway</h4>
                      </b-col>
                      <b-col cols="2">
                        <h4 class="">
                          <i
                            style="margin-top: 15px"
                            class="fas fa-chevron-right"
                          ></i>
                        </h4>
                      </b-col>
                    </b-row>
                  </b-card>
                </b-col>
              </b-row>

              <b-row>
                <div class="modal-restaurant1">
                  <b-col
                    v-b-modal.modal-center
                    title="Checkout"
                    id="show-btn"
                    @click="$bvModal.show('bv-modal-example1')"
                    ><h4 class="profile-new">
                      <i class="fas fa-plus"></i> New Address
                    </h4>
                  </b-col>

                  <b-modal id="bv-modal-example1" hide-footer>
                    <template #modal-title> </template>
                    <div class="d-block text-center" ></div>
                    <div style="margin-top: -50px;">
                      <h3 class="info">Add New Address</h3>

                      <b-card title="" sub-title="">
                        <b-card-text>
                          <b-row>
                            <b-col cols="12">
                              <h4 class="mini">Name*</h4>
                              <div>
                                <b-form inline>
                                  <label
                                    class="sr-only"
                                    for="inline-form-input-username"
                                  ></label>
                                  <b-input-group class="profile-input">
                                    <b-form-input
                                      style="
                                        padding: 0px;
                                        height: 30px;
                                        font-size: 15px;
                                      "
                                      id="inline-form-input-username"
                                      placeholder=""
                                    ></b-form-input>
                                  </b-input-group>
                                </b-form>
                              </div>
                            </b-col>
                          </b-row>

                          <hr class="my-1" />
                          <b-row>
                            <b-col cols="12">
                              <h4 class="mini">Surname*</h4>
                              <div>
                                <b-form inline>
                                  <label
                                    class="sr-only"
                                    for="inline-form-input-username"
                                  ></label>
                                  <b-input-group class="profile-input">
                                    <b-form-input
                                      style="
                                        padding: 0px;
                                        height: 30px;
                                        font-size: 15px;
                                      "
                                      id="inline-form-input-username"
                                      placeholder=""
                                    ></b-form-input>
                                  </b-input-group>
                                </b-form>
                              </div>
                            </b-col>
                          </b-row>
                          <hr class="my-1" />
                          <b-row>
                            <b-col cols="12">
                              <h4 class="mini">E-Posta*</h4>
                              <div>
                                <b-form inline>
                                  <label
                                    class="sr-only"
                                    for="inline-form-input-username"
                                  ></label>
                                  <b-input-group class="profile-input">
                                    <b-form-input
                                      style="
                                        padding: 0px;
                                        height: 30px;
                                        font-size: 15px;
                                      "
                                      id="inline-form-input-username"
                                      placeholder=""
                                    ></b-form-input>
                                  </b-input-group>
                                </b-form>
                              </div>
                            </b-col>
                          </b-row>
                          <hr class="my-1" />
                          <b-row>
                            <b-col cols="12">
                              <h4 class="mini">Address Type*</h4>
                              <div>
                                <b-form inline>
                                  <label
                                    class="sr-only"
                                    for="inline-form-input-username"
                                  ></label>
                                  <b-input-group class="profile-input">
                                    <b-form-input
                                      style="
                                        padding: 0px;
                                        height: 30px;
                                        font-size: 15px;
                                      "
                                      id="inline-form-input-username"
                                      placeholder=""
                                    ></b-form-input>
                                  </b-input-group>
                                </b-form>
                              </div>
                            </b-col>
                          </b-row>

                          <hr class="my-1" />
                          <b-row>
                            <b-col cols="12">
                              <h4 class="mini">Address Title*</h4>
                              <div>
                                <b-form inline>
                                  <label
                                    class="sr-only"
                                    for="inline-form-input-username"
                                  ></label>
                                  <b-input-group class="profile-input">
                                    <b-form-input
                                      style="
                                        padding: 0px;
                                        height: 30px;
                                        font-size: 15px;
                                      "
                                      id="inline-form-input-username"
                                      placeholder=""
                                    ></b-form-input>
                                  </b-input-group>
                                </b-form>
                              </div>
                            </b-col>
                          </b-row>
                          <hr class="my-1" />
                          <b-row>
                            <b-col cols="12">
                              <h4 class="mini">Cell Phone Number*</h4>
                              <div>
                                <b-form inline>
                                  <label
                                    class="sr-only"
                                    for="inline-form-input-username"
                                  ></label>
                                  <b-input-group class="profile-input">
                                    <b-form-input
                                      style="
                                        padding: 0px;
                                        height: 30px;
                                        font-size: 15px;
                                      "
                                      id="inline-form-input-username"
                                      placeholder=""
                                    ></b-form-input>
                                  </b-input-group>
                                </b-form>
                              </div>
                            </b-col>
                          </b-row>
                          <hr class="my-1" />
                          <b-row>
                            <b-col cols="12">
                              <h4 class="mini">Phone Number 2</h4>
                              <div>
                                <b-form inline>
                                  <label
                                    class="sr-only"
                                    for="inline-form-input-username"
                                  ></label>
                                  <b-input-group class="profile-input">
                                    <b-form-input
                                      style="
                                        padding: 0px;
                                        height: 30px;
                                        font-size: 15px;
                                      "
                                      id="inline-form-input-username"
                                      placeholder=""
                                    ></b-form-input>
                                  </b-input-group>
                                </b-form>
                              </div>
                            </b-col>
                          </b-row>

                          <hr class="my-1" />
                          <b-row>
                            <b-col cols="12">
                              <h4 class="mini">City*</h4>
                              <div>
                                <b-form inline>
                                  <label
                                    class="sr-only"
                                    for="inline-form-input-username"
                                  ></label>
                                  <b-input-group class="profile-input">
                                    <b-form-input
                                      style="
                                        padding: 0px;
                                        height: 30px;
                                        font-size: 15px;
                                      "
                                      id="inline-form-input-username"
                                      placeholder=""
                                    ></b-form-input>
                                  </b-input-group>
                                </b-form>
                              </div>
                            </b-col>
                          </b-row>
                          <hr class="my-1" />
                          <b-row>
                            <b-col cols="12">
                              <h4 class="mini">Address*</h4>
                              <div>
                                <b-form inline>
                                  <label
                                    class="sr-only"
                                    for="inline-form-input-username"
                                  ></label>
                                  <b-input-group class="profile-input">
                                    <b-form-input
                                      style="
                                        padding: 0px;
                                        height: 30px;
                                        font-size: 15px;
                                      "
                                      id="inline-form-input-username"
                                      placeholder=""
                                    ></b-form-input>
                                  </b-input-group>
                                </b-form>
                              </div>
                            </b-col>
                          </b-row>
                          <hr class="my-1" />
                          <b-row>
                            <b-col cols="2">
                              <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0"
                                ><i
                                  class="far fa-building"
                                  style="margin-left: -20px"
                                ></i
                              ></b-form-checkbox>
                            </b-col>
                            <b-col cols="2">
                              <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0"
                                ><i
                                  class="fas fa-home"
                                  style="margin-left: -20px"
                                ></i>
                              </b-form-checkbox>
                            </b-col>
                            <b-col cols="2">
                              <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0"
                                ><i
                                  class="fas fa-store-alt"
                                  style="margin-left: -20px"
                                ></i>
                              </b-form-checkbox>
                            </b-col>
                            <b-col cols="2">
                              <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0"
                                ><i
                                  class="fas fa-store"
                                  style="margin-left: -20px"
                                ></i>
                              </b-form-checkbox>
                            </b-col>
                            <b-col cols="2">
                              <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0"
                                ><i
                                  class="fas fa-industry"
                                  style="margin-left: -20px"
                                ></i>
                              </b-form-checkbox>
                            </b-col>
                            <b-col cols="2">
                              <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0"
                                ><i
                                  class="fas fa-city"
                                  style="margin-left: -20px"
                                ></i
                              ></b-form-checkbox>
                            </b-col>
                          </b-row>
                        </b-card-text>
                      </b-card>
                      <br />
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
                            <h2 class="profile-map">Add New Address</h2>

                            <b-card title=""  sub-title="">
                              <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12762.359345265411!2d30.6461026!3d36.9001594!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xed3f2d6adc507fb3!2zU29mdGFseWEgWWF6xLFsxLFtIEx0ZC4gxZ50aS4!5e0!3m2!1str!2str!4v1615210232903!5m2!1str!2str"
                                width="100%"
                                height="100%"
                                style="border: 0"
                                allowfullscreen=""
                                loading="lazy"
                              ></iframe>
                            </b-card>

                            <br />
                            <b-row>
                              <b-col cols="4">
                                <form class="navbar-form navbar-left">
                                  <div class="form-group">
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Search"
                                    />
                                  </div>
                                </form>
                              </b-col>
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
.card-body {
  border-radius: 20px;
  /* border: 1px solid lightgrey; */
  /* margin-top: 60px; */
}
.custom-control-label span {
  position: relative;
  margin-left: -20px;
  top: 2px;
}
.custom-control-input:checked ~ .custom-control-label::before {
  color: #fff;
  border-color: #f8b305;
  background-color: #f8b305;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.chooseheader {
  margin-top: -25px;
  margin-left: 140px;
}
.choose{
  margin-top: 30px;
}
.profile-input {
  padding: -20px;
}
.profile-new {
  padding-left: 200px;
  margin-top: 20px;
}
.profile-addres {
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 15px;
}
.my-4 {
  margin-bottom: 10px;
  margin-top: 10px;
}
.profile-register {
  margin: 10px;
}
.profile-card {
  height: 70px;
  margin: 10px;
}
.profile-image {
  width: 100%;
}
.profile-pad {
  padding: 10px;
}
.profile-image {
  width: 100%;
  height: 100%;
}
.profilepicture {
  padding: 15px;
  border-radius: 20px;
  text-align: center;
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
  border: 1px solid rgba(0, 0, 0, 0.05);
  margin-left: 0px;
  width: 100%;
  height: 100%;
  
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
.profile-map {
  width: 100%;
}
.mini {
  padding: 0px;
  margin-bottom: -2px;
  margin-top: 0px;
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

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
          <b-card-body class="px-lg-5 py-lg-5">
            <b-container class="work">
              <b-form @submit.prevent="updateProfile">
                <h6 class="heading-small text-muted mb-4">Work with us</h6>

                <div class="pl-lg-4">
                  <b-form-group
                    label-cols="4"
                    label-cols-lg="2"
                    label="Name*"
                    label-for="input-default"
                  >
                    <b-form-input
                      id="input-default"
                      type="text"
                      label="name"
                      placeholder="name"
                      v-model="user.name"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    label-cols="4"
                    label-cols-lg="2"
                    label="Email*"
                    label-for="input-default"
                  >
                    <b-form-input
                      id="input-default"
                      type="text"
                      label="email"
                      placeholder="Email*"
                      v-model="user.email"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    label-cols="4"
                    label-cols-lg="2"
                    label="Telephone*"
                    label-for="input-default"
                  >
                    <b-form-input
                      id="input-default"
                      type="text"
                      label="telephone"
                      placeholder="Telephone*"
                      v-model="user.telephone"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    label-cols="4"
                    label-cols-lg="2"
                    label="Date of birth*"
                    label-for="input-default"
                  >
                    <b-form-input
                      id="input-default"
                      type="text"
                      label="birth"
                      placeholder="Date of birth*"
                      v-model="user.date"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    label-cols="4"
                    label-cols-lg="2"
                    label="City"
                    label-for="input-default"
                  >
                    <b-form-select
                      label="city"
                      placeholder="City"
                      v-model="selected"
                      :options="options"
                    >
                    </b-form-select>
                  </b-form-group>
                  <b-form-group
                    label-cols="4"
                    label-cols-lg="2"
                    label="Zone"
                    label-for="input-default"
                  >
                    <b-form-select
                      label="zone"
                      placeholder="Zone"
                      v-model="selected"
                      :options="options"
                    >
                    </b-form-select>
                  </b-form-group>
                </div>
              </b-form>
            </b-container>
          </b-card-body>
          <div>
            <div class="work2">
              <b-card img-alt="Card image" img-right>
                <section>
                  <b-card-text>
                    <h6 class="heading-small text-muted mb-4">
                      Select Vehicles
                    </h6>

                    <b-icon icon="bicycle" aria-hidden="true"></b-icon> Bicycle
                    <input class="radio" type="radio" />
                    <hr class="my-3" />
                    <i class="fas fa-motorcycle"></i> Motorcycle
                    <input class="radio" type="radio" />
                    <hr class="my-3" />
                    <i class="fas fa-car-side"></i> Car
                    <input class="radio" type="radio" />
                  </b-card-text>
                </section>

                <b-button class="btn1 apply">
                  <div>
                    <b-link style="color: black" href="dashboard"
                      >Apply for a job</b-link
                    >
                  </div></b-button
                >
              </b-card>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
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
  border: 1px solid #cad1d7;
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
  margin-left: 55px;
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
.card {
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
  border: 1px solid rgba(0, 0, 0, 0.05);
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
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 20px;
}

.apply {
  color: #000;
  text-decoration: none;
  background-color: transparent;
}
.heading-small {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 1.3rem;
  text-transform: none;
  letter-spacing: 0.04em;
}
.radio {
  float: right;
  color: black;
  margin-top: 10px;
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
  margin-top: 30px;
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
  border-radius: 20px;
  width: 100%;
  margin-top: -30px;
}
.work2 {
  background: #fff;
  border-radius: 20px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
}

</style>

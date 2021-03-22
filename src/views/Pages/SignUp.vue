<template>
  <div>
    <!-- Page content -->
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col lg="5" md="7">
          <b-card no-body class="bg-secondary border-0 mb-0">
            <b-card-body class="px-lg-5 py-lg-5">
              <div class="text-muted text-center mt-2">
                <small>Please enter your email and phone number
                    <br/> so we can send you a code.
                </small>
              </div>
              <validation-observer
                v-slot="{ handleSubmit }"
                ref="formValidator"
              >
                <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                  <base-input
                    alternative
                    class="mb-3"
                    name="email"
                    :rules="{ required: true, email: true }"
                    prepend-icon="ni ni-single-02"
                    placeholder="Username / E-mail / Phone number"
                    v-model="model.email"
                  >
                  </base-input>

                  <base-input
                    alternative
                    class="mb-3"
                    name="phone"
                    :rules="{ required: true, min: 6 }"
                    prepend-icon="ni ni-lock-circle-open"
                    type="Phone"
                    placeholder="+32|"
                    v-model="model.phone"
                  >
                  </base-input>

                
                    <div class="text-center">
                     <router-link to="/dashboard" class="btn btn-block2"
                          ><small class="cont">Continue</small></router-link
                        >
                  </div>
                 
                </b-form>
              </validation-observer>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      model: {
        email: "",
        phone: "",
        rememberMe: false,
      },
    };
  },
  methods: {
    onSubmit() {
      // this will be called only after form is valid. You can do api call here to login
    },
  },
};
</script>
<style>
small, .small {
    font-family: Open Sans, sans-serif;
    font-size: 15px;
    color: #adb5bd;
   
}
.cont{
    color:black;
     font-family: Open Sans, sans-serif;
    font-size: 15px;
}
.text-muted {
    color: #8898aa !important;
    margin-bottom: 20px;
}
.text-center {
    text-align: center !important;
    margin-top: 50px;
}
.btn-block2 {
  background: #f6bd2f;
  border: #f6bd2f;
  width: 100%;
  text-align: center;
  color: black;
  border-radius: 50px;
  line-height: 30px;
}
.pr-lg-5,
.px-lg-5 {
  margin-top: 60px;
  margin-bottom: 60px;
  background: white;
  padding-left: 2rem !important;
}
.card-body {
  border-radius: 20px;
 
}


.input-group > .input-group-prepend > .btn, .input-group > .input-group-prepend > .input-group-text, .input-group > .input-group-append:not(:last-child) > .btn, .input-group > .input-group-append:not(:last-child) > .input-group-text, .input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle), .input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
}
.input-group-alternative {
    -webkit-box-shadow: 0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%);
    box-shadow: 0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%);
    border: 0;
    -webkit-transition: -webkit-box-shadow .15s ease;
    transition: -webkit-box-shadow .15s ease;
    transition: box-shadow .15s ease;
    transition: box-shadow .15s ease, -webkit-box-shadow .15s ease;
    border-radius: 50px;
}
.input-group .form-control:not(:first-child) {
    border-left: 0;
    padding-left: 0;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
}


</style>

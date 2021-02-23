<template>
  <div>
    <!-- Page content -->
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col lg="5" md="7">
          <b-card no-body class="bg-secondary border-0 mb-0">
            <b-card-body class="px-lg-5 py-lg-5">
              <div class="text-muted text-center mt-2">
                <small>with your social network</small>
              </div>
              <div class="text-center">
                <a href="#" class="btn btn-block">
                  <span class="btn-login-icon"
                    ><img src="img/icons/common/facebook (2).png"
                  /></span>
                  Continue with Facebook</a
                >
                <a href="#" class="btn btn-block1">
                  <span class="login-icon"
                    ><img src="img/icons/common/google-plus (2).png"
                  /></span>
                  Continue with Google</a
                >
              </div>
              <div class="or-seperator"><i>or</i></div>
              <validation-observer
                v-slot="{ handleSubmit }"
                ref="formValidator"
              >
                <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                  <base-input
                    alternative
                    class="mb-3"
                    name="Email"
                    :rules="{ required: true, email: true }"
                    prepend-icon="ni ni-single-02"
                    placeholder="Username / E-mail / Phone number"
                    v-model="model.email"
                  >
                  </base-input>

                  <base-input
                    alternative
                    class="mb-3"
                    name="Password"
                    :rules="{ required: true, min: 6 }"
                    prepend-icon="ni ni-lock-circle-open"
                    type="Password"
                    placeholder="Password"
                    v-model="model.password"
                  >
                  </base-input>
                  <b-row class="mt-3">
                    <b-col cols="6">
                      <b-form-checkbox v-model="model.rememberMe"
                        >Remember me</b-form-checkbox
                      >
                    </b-col>
                    <b-col cols="6" class="text-right">
                      <router-link to="/dashboard" class="text-light"
                        ><small>Forgot password?</small></router-link
                      >
                    </b-col>
                  </b-row>

                  <div class="text-center">
                    <a href="#" class="btn btn-block2">
                      <span class="login-icon"></span>
                      Sign in</a
                    >
                    <b-row class="mt-3">
                      <b-col cols="8">
                        <b-form-checkbox to="/dashboard" class="text-light"
                          ><small
                            >I accept the
                            <font color="#f6bd2f"
                              >terms & condition</font
                            ></small
                          ></b-form-checkbox
                        >
                      </b-col>
                      <b-col cols="4" class="text-right">
                        <router-link to="/sign" class="text-light"
                          ><small>Sign Up</small></router-link
                        >
                      </b-col>
                    </b-row>
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
        password: "",
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
.or-seperator {
  margin: 20px 0 0px;
  text-align: center;
  border-top: 1px solid #ccc;
}
.pl-lg-5,
.px-lg-5 {
  padding-left: 4rem !important;
}
.pr-lg-5,
.px-lg-5 {
  padding-right: 4rem !important;
}
.card-header {
  padding: 2.25rem 4.5rem;
  margin-bottom: 0;
  background-color: #fff;
  border-radius: 0.375rem;
}
.img {
  vertical-align: middle;
  border-style: none;
  width: 100%;
}
.btn-block {
  margin: 20px 0;
  font-size: 15px;
  line-height: 24px;
  background: #3b5998;
  border-radius: 5px;
  color: white;
  border-radius: 50px;
}
.btn-block1 {
  background: #dd4b39;
  border: #dd4b39;
  width: 100%;
  text-align: center;
  color: white;
  border-radius: 50px;
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
  background-color: white;
  background-clip: border-box;
  border: 1px solid;
  border-radius: 20px;
  width: 100%;
}
.bg-default {
  background-color: #e9ebf0 !important;
}
.card-body {
  border-radius: 20px;
  border: 1px solid lightgrey;
  margin-top: 60px;
  margin-bottom: 60px;
}
.a {
    color: #ffffff;
    text-decoration: none;
    background-color: transparent;
}
.pr-lg-5, .px-lg-5 {
    padding-right: 2rem !important;
}
.pr-lg-5, .px-lg-5 {
    padding-left: 2rem !important;
}
.mt-3, .my-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem;
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
.custom-control {
    position: relative;
    display: block;
    min-height: 1.5rem;
    float: left;
}

</style>

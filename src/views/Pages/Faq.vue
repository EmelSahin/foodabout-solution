<template>
  <div>
    <!-- Page content -->
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card no-body class="bg-secondary border-0 mb-0">
            <b-card-body class="px-lg-5 py-lg-5">
              <h1 style="margin-bottom: 40px; text-align: center">
                Frequently Asked Questions
              </h1>
              <div class="accordion" role="tablist">
                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button
                      class="faq"
                      block
                      v-b-toggle.accordion-1
                      variant="info"
                      >Lorem ipsum dolor sit amet</b-button
                    >
                  </b-card-header>
                  <b-collapse
                    id="accordion-1"
                    visible
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text>{{ text }}</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button
                      class="faq"
                      block
                      v-b-toggle.accordion-2
                      variant="info"
                      >Lorem ipsum dolor sit amet</b-button
                    >
                  </b-card-header>
                  <b-collapse
                    id="accordion-2"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text>{{ text }}</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button
                      class="faq"
                      block
                      v-b-toggle.accordion-3
                      variant="info"
                      >Lorem ipsum dolor sit amet</b-button
                    >
                  </b-card-header>
                  <b-collapse
                    id="accordion-3"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text>{{ text }}</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
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
      text: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        `,
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
.card-body {
     border-radius: 0px;
    border: 0px solid lightgrey;
    margin-top: 20px;
    margin-bottom: 20px;
}
.faq {
  background-color: #f8b305;
  border-color: #f8b305;
}
.btn-info:not(:disabled):not(.disabled):active,
.btn-info:not(:disabled):not(.disabled).active,
.show > .btn-info.dropdown-toggle {
  color: #fff;
  background-color: #f8b305;
  border-color: #f8b305;
}
small,
.small {
  font-family: Open Sans, sans-serif;
  font-size: 15px;
  color: #adb5bd;
}
.cont {
  color: black;
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
  border-radius: 0px;
  line-height: 30px;
}
.pr-lg-5,
.px-lg-5 {
  margin-top: 60px;
  margin-bottom: 60px;
  background: white;
  padding-left: 2rem !important;
}


.input-group > .input-group-prepend > .btn,
.input-group > .input-group-prepend > .input-group-text,
.input-group > .input-group-append:not(:last-child) > .btn,
.input-group > .input-group-append:not(:last-child) > .input-group-text,
.input-group
  > .input-group-append:last-child
  > .btn:not(:last-child):not(.dropdown-toggle),
.input-group
  > .input-group-append:last-child
  > .input-group-text:not(:last-child) {
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}
.input-group-alternative {
  -webkit-box-shadow: 0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%);
  box-shadow: 0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%);
  border: 0;
  -webkit-transition: -webkit-box-shadow 0.15s ease;
  transition: -webkit-box-shadow 0.15s ease;
  transition: box-shadow 0.15s ease;
  transition: box-shadow 0.15s ease, -webkit-box-shadow 0.15s ease;
  border-radius: 50px;
}
.input-group .form-control:not(:first-child) {
  border-left: 0;
  padding-left: 0;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
}
</style>
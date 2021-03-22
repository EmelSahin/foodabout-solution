<template>
  <b-container class="aboutus">
    <div>
      <b-row>
        <b-col md="12">
          <b-card style="margin-top:50px">
            <b-container class="work11" >
              <h3>Site Map</h3>

              <b-container>
                <b-row>
                  <h4 style="color: #f6bd2f">Home Page</h4>
                </b-row>
                <hr class="my-1" />
                <b-row>
                  <b-col> Select Language </b-col>
                  <b-col> Write Adress </b-col>
                  <b-col> Sıgn In </b-col>
                  <b-col> Work With Us </b-col>
                </b-row>
                <br />
                <b-row>
                  <h4 style="color: #f6bd2f">Basket</h4>
                </b-row>
                <hr class="my-1" />
                <b-row>
                  <b-col> Basket-1 </b-col>
                  <b-col> Home Page </b-col>
                  <b-col> Work With Us </b-col>
                  <b-col> </b-col>
                </b-row>
                <br />
                <b-row>
                  <h4 style="color: #f6bd2f">CheckOut</h4>
                </b-row>
                <hr class="my-1" />
                <b-row>
                  <b-col cols="3"> CheckOutDown </b-col>
                  <b-col cols="3"> CheckOutUpStep1 </b-col>
                  <b-col cols="3"> Basket </b-col>
                  <b-col cols="3"> Home Page </b-col>
                  <br /><br />

                  <b-col cols="3"> Work With Us </b-col>
                </b-row>
                <br />
                <b-row>
                  <h4 style="color: #f6bd2f">Order</h4>
                </b-row>
                <hr class="my-1" />
                <b-row>
                  <b-col> Home Page </b-col>
                  <b-col> Work With Us </b-col>
                  <b-col> Order Status </b-col>
                  <b-col> </b-col>
                </b-row>
                <br />
                <b-row>
                  <h4 style="color: #f6bd2f">Profile</h4>
                </b-row>
                <hr class="my-1" />
                <b-row>
                  <b-col> Home Page </b-col>
                  <b-col> Add Adress </b-col>

                  <b-col> Work With Us </b-col>
                  <b-col></b-col>
                </b-row>
                <br />
              </b-container>
            </b-container>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    },
  },
};
</script>
<style>
.h3,
.h3 {
  width: 100%;
}
.work11 {
  background: #fff;
  border-radius: 20px;
  width: 100%;
  /* margin-left: -289px; */
  padding: 20px;
  margin-bottom: 40px;
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
  border-radius: 0.375rem;
  margin-bottom: 50px;
}
</style>

<template>
  <div class="container-home">
    <div class="container-fluid">
      <b-container class="bv-example-row">
        <b-row align-h="start">
          <b-col cols="6">
            <h1 class="display-2 text-white">
              The Best Way to<br />
              Get Delicious Food
            </h1>
            <span class="display-2 text-white1">
              Lorem ipsum dolar sit amet, sed do eiusmod tempor<br />incididunt
              ut labore et dolore magna aliqua.
            </span>
            <div class="row">
              <b-col cols="6"
                ><a href="#!" class="btn get-start">Enter Your Address</a>
              </b-col>
              <b-col cols="6" class="text-right-r"
                ><a href="#!" class="btn get-start1">Get Started</a>
              </b-col>
            </div>
          </b-col>

          <b-col cols="6"
            ><div class="image">
              <a href="#">
                <b-img class="img-1" src="img/theme/1.png" />
              </a></div
          ></b-col>
        </b-row>
      </b-container>
    </div>
    <b-container>
      <div class="page-middle1">
        <div>
          <b-card-group deck>
            <b-card
              class="card-body1"
              title="Many Cuisines"
              img-src="img/theme/waiter (1).png"
              img-alt="Image"
              img-top
            >
              <b-card-text>
                Lorem ipsum dolar sit amet, <br />
                sed do eiusmod tempor incididunt<br />
                ut labore et dolore magna aliqua.
              </b-card-text>
            </b-card>

            <b-card
              class="card-body1"
              title="Fasty Delivery"
              img-src="img/theme/motorbike (1).png"
              img-alt="Image"
              img-top
            >
              <b-card-text>
                Lorem ipsum dolar sit amet, <br />
                sed do eiusmod tempor incididunt<br />
                ut labore et dolore magna aliqua.
              </b-card-text>
            </b-card>

            <b-card
              class="card-body1"
              title="Best Offers"
              img-src="img/theme/file (1).png"
              img-alt="Image"
              img-top
            >
              <b-card-text>
                Lorem ipsum dolar sit amet, <br />
                sed do eiusmod tempor incididunt<br />
                ut labore et dolore magna aliqua.
              </b-card-text>
            </b-card>
          </b-card-group>
        </div>
      </div>
      <div class="page-middle_1">
        <b-container class="bv-example-row mb-3">
          <b-row cols="2">
            <b-col cols="6"
              ><b-card class="card-img" img-src="img/theme/M1.png"> </b-card
              ><b-card class="card-img1" img-src="img/theme/M2.png"> </b-card
            ></b-col>
            <b-col cols="6"
              ><b-card class="card-img" img-src="img/theme/M3.png"> </b-card
              ><b-card class="card-img2" img-src="img/theme/M4.png"> </b-card
            ></b-col>
          </b-row>
        </b-container>

        <b-row cols="2"> </b-row>
      </div>
      <div>
        <b-card-group columns>
          <b-card
            class="res-image"
            title="Lorem Ipsum"
            img-src="img/theme/R1.png"
            img-alt="Image"
            img-top
          >
            <b-card-text>
              Lorem ipsum dolor sit amet,<br />sed do eiusmod tempor incididunt.
            </b-card-text>
            <b-button class="link-botton row" variant="link"
              >Read More</b-button
            >
          </b-card>

          <b-card
            title="Lorem Ipsum"
            img-src="img/theme/R2.png"
            img-alt="Image"
            img-top
          >
            <b-card-text>
              Lorem ipsum dolor sit amet,<br />sed do eiusmod tempor incididunt.
            </b-card-text>
            <b-button class="link-botton row" variant="link"
              >Read More</b-button
            >
          </b-card>

          <b-card
            title="Lorem Ipsum"
            img-src="img/theme/R3.png"
            img-alt="Image"
            img-top
          >
            <b-card-text>
              Lorem ipsum dolor sit amet,<br />sed do eiusmod tempor incididunt.
            </b-card-text>

            <b-button class="link-botton row" variant="link"
              >Read More</b-button
            >
          </b-card>
        </b-card-group>
        <b-card-group columns>
          <b-card
            class="res-image"
            title="Lorem Ipsum"
            img-src="img/theme/R4.png"
            img-alt="Image"
            img-top
          >
            <b-card-text>
              Lorem ipsum dolor sit amet,<br />sed do eiusmod tempor incididunt.
            </b-card-text>

            <b-button class="link-botton row" variant="link"
              >Read More</b-button
            >
          </b-card>

          <b-card
            title="Lorem Ipsum"
            img-src="img/theme/R5.png"
            img-alt="Image"
            img-top
          >
            <b-card-text>
              Lorem ipsum dolor sit amet,<br />sed do eiusmod tempor incididunt.
            </b-card-text>
            <b-button class="link-botton row" variant="link"
              >Read More</b-button
            >
          </b-card>

          <b-card
            title="Lorem Ipsum"
            img-src="img/theme/R6.png"
            img-alt="Image"
            img-top
          >
            <b-card-text>
              Lorem ipsum dolor sit amet,<br />sed do eiusmod tempor incididunt.
            </b-card-text>
            <b-button class="link-botton row" variant="link"
              >Read More</b-button
            >
          </b-card>
        </b-card-group>
      </div>
    </b-container>
  </div>
</template>
<script>
// Charts
import * as chartConfigs from "@/components/Charts/config";
import LineChart from "@/components/Charts/LineChart";
import BarChart from "@/components/Charts/BarChart";

// Components
import BaseProgress from "@/components/BaseProgress";
import StatsCard from "@/components/Cards/StatsCard";

// Tables
import SocialTrafficTable from "./Dashboard/SocialTrafficTable";
import PageVisitsTable from "./Dashboard/PageVisitsTable";

export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
.container-fluid {
  background-color: #f6bd2f;
  height: 600px;
}
.page-middle {
  height: 1500px;
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
  background-color: transparent;
  background-clip: border-box;
  border: 0px solid transparent;
  border-radius: 0.375rem;
}

.link-botton {
  color: #f6bd2f;
  text-align: left;
}
.card-img-top {
  width: 100px;
  height: 100px;
  margin-left: 120px;
  text-align: center;
  font-weight: bold;
}

.card-img-top {
  font-size: 100px;
}
.card-img-top1 {
  width: 100;
}
.middle-icon {
  width: 500px;
}

.text-white {
  color: #000 !important;
  font-weight: bold;
  margin-top: 50px;
}
.text-white1 {
  color: #fff;
  font-size: 15px;
}
.img {
  vertical-align: middle;
  border-style: none;
  width: 650px;
}
.img-1 {
  width: 520px;
  float: left;
}
.get-start {
  background: #fff;
  border-radius: 50px;
  width: 200px;
  margin-top: 40px;
  text-align: left;
}
.get-start1 {
  background: #f8b305;
  border-radius: 50px;
  width: 140px;
  margin-top: 40px;
  text-align: left;
}
.page-middle1 {
  height: 500px;
  text-align: center;
}
.page-middle_1 {
  height: 600px;
}
.card-img {
  width: 450px;
  border-radius: 10px;
}
.card-img1 {
  width: 450px;
  border-radius: 10px;
}
.card-img2 {
  margin-bottom: 10px;

  width: 450px;
  border-radius: 10px;
  margin-bottom: -100px;
}
.card-body1 {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.5rem;
  background: #f5e1a4;
}
.card-body1:hover {
  background: white;
}
</style>

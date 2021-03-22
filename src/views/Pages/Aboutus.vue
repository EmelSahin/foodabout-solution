<template>
  <b-container class="aboutus">
    <div>
      <b-row>
        <b-col md="12" style="margin-top:50px">
          <b-card>
            <b-container class="work11">
              <h3>About Us</h3>

              <div>
                <b-tabs pills card vertical>
                  <b-tab class="aboutus" title="Lorem, ipsum." active
                    ><b-card-text>
                      <h3>Lorem, ipsum dolor</h3>

                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.</b-card-text
                    ></b-tab
                  >
                  <b-tab title="Lorem, ipsum.Lorem, ipsum."
                    ><b-card-text>
                      <h3>Lorem, ipsum dolor</h3>

                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam corporis suscipit laboriosam, nisi ut
                      aliquid ex ea commodi consequatur? Quis autem vel eum iure
                      reprehenderit qui in ea voluptate velit esse quam nihil
                      molestiae consequatur, vel illum qui dolorem eum fugiat
                      quo voluptas nulla pariatur?</b-card-text
                    ></b-tab
                  >
                  <b-tab title="Lorem, ipsum."
                    ><b-card-text>
                      <h3>Lorem, ipsum dolor</h3>

                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      In adipisci porro similique ullam accusantium cupiditate
                      sint, reiciendis officia assumenda maxime.</b-card-text
                    ></b-tab
                  >
                </b-tabs>
              </div>
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
h3,
.h3 {
  font-size: 1.38rem;
  color: #000000;
  width: 100%;
}
.work11 {
  background: #fff;
  border-radius: 20px;
  width: 100%;
  /* margin-left: -289px; */
  padding: 20px;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: #f6bd2f;
  width: 200px;
}
.nav-pills .nav-link {
  padding: 0.75rem 1rem;
  color: #f6bd2f;
  font-weight: 500;
  background-color: #fff;
  width: 200px;
  margin-top: 15px;
}
.card-text:last-child {
  margin-top: 15px;
}
.aboutus {
  margin-bottom: 40px;
}
</style>

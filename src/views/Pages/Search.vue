<template>
  <b-container class="bv-example-row">
    <div>
      <div class="row">
        <div class="col-md-3">
          <b-card class="card1">
            <div class="card-body1">
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
            </div>
          </b-card>
        </div>
      
        <div class="col-md-9" >
        
          <div><h3 class="header">Which cuisine do you want?</h3></div>
          <div id="app">
            <b-container style="margin-top:50px">
              <b-row>
                <b-col cols="9">
                  <carousel :perPage="7">
                    <slide class="p-2">
                      <b-card
                        class="restaurant"
                        img-alt="Image"
                        img-top
                        tag="article"
                      >
                        <img
                          class="restaurant1"
                          src="https://image.flaticon.com/icons/png/512/112/112280.png"
                        />
                        <h5>Breakfast</h5>
                      </b-card>
                    </slide>
                    <slide class="p-2">
                      <b-card
                        class="restaurant"
                        img-src=""
                        img-alt="Image"
                        img-top
                        tag="article"
                      >
                        <img
                          class="restaurant1"
                          src="https://icon-library.com/images/hamburger-icon-png/hamburger-icon-png-0.jpg"
                        />
                        <h5>Burger</h5>
                      </b-card>
                    </slide>
                    <slide class="p-2">
                      <b-card
                        class="restaurant"
                        img-alt="Image"
                        img-top
                        tag="article"
                      >
                        <img
                          class="restaurant1"
                          src="http://cdn.onlinewebfonts.com/svg/img_363338.png"
                        />
                        <h5>Seafood</h5>
                      </b-card>
                    </slide>
                    <slide class="p-2">
                      <b-card
                        class="restaurant"
                        img-alt="Image"
                        img-top
                        tag="article"
                      >
                        <img
                          class="restaurant1"
                          src="https://cdn1.iconfinder.com/data/icons/pizza-11/64/09_Melting_Pizza_food_cheese_hot-512.png"
                        />
                        <h5>Pizza</h5>
                      </b-card>
                    </slide>
                    <slide class="p-2">
                      <b-card
                        class="restaurant"
                        img-alt="Image"
                        img-top
                        tag="article"
                      >
                        <img
                          class="restaurant1"
                          src="https://img.icons8.com/ios/452/sandwich.png"
                        />
                        <h5>Sandwich</h5>
                      </b-card>
                    </slide>
                    <slide class="p-2">
                      <b-card
                        class="restaurant"
                        img-alt="Image"
                        img-top
                        tag="article"
                      >
                        <img
                          class="restaurant1"
                          src="https://image.flaticon.com/icons/png/512/112/112280.png"
                        />
                        <h5>Breakfast</h5>
                      </b-card>
                    </slide>
                    <slide class="p-2">
                      <b-card
                        class="restaurant"
                        img-src=""
                        img-alt="Image"
                        img-top
                        tag="article"
                      >
                        <img
                          class="restaurant1"
                          src="https://icon-library.com/images/hamburger-icon-png/hamburger-icon-png-0.jpg"
                        />
                        <h5>Burger</h5>
                      </b-card>
                    </slide>
                    <slide class="p-2">
                      <b-card
                        class="restaurant"
                        img-alt="Image"
                        img-top
                        tag="article"
                      >
                        <img
                          class="restaurant1"
                          src="http://cdn.onlinewebfonts.com/svg/img_363338.png"
                        />
                        <h5>Seafood</h5>
                      </b-card>
                    </slide>
                    <slide class="p-2">
                      <b-card
                        class="restaurant"
                        img-alt="Image"
                        img-top
                        tag="article"
                      >
                        <img
                          class="restaurant1"
                          src="https://cdn1.iconfinder.com/data/icons/pizza-11/64/09_Melting_Pizza_food_cheese_hot-512.png"
                        />
                        <h5>Pizza</h5>
                      </b-card>
                    </slide>
                    <slide class="p-2">
                      <b-card
                        class="restaurant"
                        img-alt="Image"
                        img-top
                        tag="article"
                      >
                        <img
                          class="restaurant1"
                          src="https://img.icons8.com/ios/452/sandwich.png"
                        />
                        <h5>Sandwich</h5>
                      </b-card>
                    </slide>
                  </carousel>
                </b-col>
              </b-row>
            </b-container>
          </div>
          <div class="col-md-9 featured">
            <div class="featured">
              <h3 class="header">Featured</h3>
            </div>
            <div id="app">
              <b-container style="margin-top:50px">
                <b-row>
                  <b-col cols="9">
                    <carousel :perPage="4">
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/sushi.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>Sushi Place</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/pizza.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>Domino's Pizza</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/burger.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>Burger King</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/mc.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>McDonald's</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/sushi.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>Sushi Place</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/pizza.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>Domino's Pizza</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/burger.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>Burger King</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/mc.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>McDonald's</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/sushi.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>Sushi Place</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/pizza.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>Domino's Pizza</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/burger.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>Burger King</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/mc.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>McDonald's</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                    </carousel>
                  </b-col>
                </b-row>
              </b-container>
            </div>
          </div>
          <div class="col-md-9 featured">
            <div class="featured">
              <h3 class="header">Newly added restaurant</h3>
            </div>
            <div id="app">
              <b-container style="margin-top:50px">
                <b-row>
                  <b-col cols="9">
                    <carousel :perPage="4">
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/sushi.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>Sushi Place</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/pizza.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>Domino's Pizza</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/burger.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>Burger King</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/mc.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>McDonald's</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/sushi.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>Sushi Place</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/pizza.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>Domino's Pizza</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/burger.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>Burger King</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/mc.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>McDonald's</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/sushi.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>Sushi Place</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/pizza.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>Domino's Pizza</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/burger.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>Burger King</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/mc.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>McDonald's</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                    </carousel>
                  </b-col>
                </b-row>
              </b-container>
            </div>
          </div>
          <div class="col-md-9 featured">
            <div class="featured">
              <h3 class="header">Restaurants</h3>
            </div>
            <div id="app">
              <b-container style="margin-top:50px">
                <b-row>
                  <b-col cols="9">
                    <carousel :perPage="4">
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/sushi.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>Sushi Place</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/pizza.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>Domino's Pizza</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/burger.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>Burger King</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/mc.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>McDonald's</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                    </carousel>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col cols="9">
                    <carousel :perPage="4">
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/sushi.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>Sushi Place</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/pizza.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>Domino's Pizza</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/burger.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>Burger King</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/mc.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>McDonald's</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                    </carousel>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col cols="9">
                    <carousel :perPage="4">
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/sushi.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>Sushi Place</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/pizza.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>Domino's Pizza</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/burger.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>Burger King</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/mc.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>McDonald's</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                    </carousel>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col cols="9">
                    <carousel :perPage="4">
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/sushi.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>Sushi Place</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/pizza.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>Domino's Pizza</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/burger.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>Burger King</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/mc.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>McDonald's</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                    </carousel>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col cols="9">
                    <carousel :perPage="4">
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/sushi.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>Sushi Place</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/pizza.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>Domino's Pizza</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/burger.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>Burger King</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                      <slide class="p-2">
                        <b-card
                          class="restaurant2"
                          img-src="img/theme/mc.png"
                          img-alt="Image"
                          img-top
                          tag="article"
                        >
                          <b-card-text>
                            <b-container class="place">
                              <b-row>
                                <b-col cols="8" class="1">
                                  <h5>McDonald's</h5>
                                </b-col>
                                <b-col cols="5" class="mx">
                                  <b-form-rating
                                    class="star-rating"
                                    id="rating-md-no-border"
                                    v-model="value"
                                    rating="no-border"
                                  ></b-form-rating
                                ></b-col>
                              </b-row>
                              <b-row class="form">
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-coins"> € 4,50</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-hourglass-half">20-30min</i>
                                </b-col>
                                <b-col cols="4" class="mx">
                                  <i class="fas fa-map-marker-alt">1,4miles</i>
                                </b-col>
                              </b-row>
                            </b-container>
                          </b-card-text>
                        </b-card>
                      </slide>
                    </carousel>
                  </b-col>
                </b-row>
              </b-container>
            </div>
          </div>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      value: 4.0,
      user: {},

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
      slide: 0,
      sliding: null,
    };
  },

  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    },
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>
<style>
.custom-radio .custom-control-input:checked ~ .custom-control-label::before {
  border-color: #f8b305;
}
.choose{
  margin-top: 30px;
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

.pr-lg-5,
.px-lg-5 {
  margin-top: 60px;
  margin-bottom: 60px;
  background: white;
  padding-left: 2rem !important;
}
.restaurant {
  width: 100px;
  border-radius: 20px;
  height: 110px;
}
.header {
  width: 500px;
  margin-top: 10px;
  margin-bottom: -30px;
  margin-left: 28px;
}
.card1 {
  border-radius: 0px;
  background: white;

  height: auto;
  height: 100%;
}

.VueCarousel {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 810px;
}
.card-body {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.5rem;
}
.card-body1 {
  background-color: white;
}
.restaurant1 {
  width: 40px;
  margin-left: 6px;
}
.restaurant2 {
  width: 185px;
}
.place {
  padding: 0px;
}
.form-control {
  display: block;
  width: 15%;
  height: calc(1.5em + 1.25rem + 2px);
  padding: 0px;
  font-size: 1.175rem;
  font-weight: 400;
  line-height: 1.5em;
  color: #f8b305;
  float: left;
  border: 0px;
  margin-left: 100px;
  margin-top: -60px;
  /* margin: 0px; */
}
svg {
  overflow: hidden;
  vertical-align: middle;
  width: 9px;
}
.form {
  font-size: 10px;
}
.fa-coins {
  width: 50px;
  padding: 0px;
}
.fa-hourglass-half {
  width: 50px;
  padding: 0px;
}
article h4,
article h5 {
  margin-bottom: 1.5rem;
  width: 95px;
}
.card-img-top {
  width: 100%;
  height: 150px;
  padding: 0px;
  margin: 0px;
}
article h4:not(:first-child),
article h5:not(:first-child) {
  margin-top: 15px;
}
</style>

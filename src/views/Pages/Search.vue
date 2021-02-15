<template>
  <b-container class="bv-example-row">
    <div>
      <div class="row">
        <div class="col-md-3">
          <b-card class="card1">
            <div class="card-body1">
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
            </div>
          </b-card>
        </div>

        <div class="col-md-6">
          <div><h3 class="header">Which cuisine do you want?</h3></div>
          <div id="app">
            <b-container>
              <b-row>
                <b-col cols="6">
                  <carousel :perPage="7">
                    <slide class="p-2">
                      <b-card   
                        class="restaurant"
                        img-alt="Image"
                        img-top
                        tag="article"
                      >
                      <img class="restaurant1" src="https://image.flaticon.com/icons/png/512/112/112280.png">
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
                       <img class="restaurant1" src="https://icon-library.com/images/hamburger-icon-png/hamburger-icon-png-0.jpg">
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
                      <img class="restaurant1" src="http://cdn.onlinewebfonts.com/svg/img_363338.png">
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
                      <img class="restaurant1" src="https://cdn1.iconfinder.com/data/icons/pizza-11/64/09_Melting_Pizza_food_cheese_hot-512.png">
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
                      <img class="restaurant1" src="https://img.icons8.com/ios/452/sandwich.png">
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
                      <img class="restaurant1" src="https://image.flaticon.com/icons/png/512/112/112280.png">
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
                       <img class="restaurant1" src="https://icon-library.com/images/hamburger-icon-png/hamburger-icon-png-0.jpg">
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
                      <img class="restaurant1" src="http://cdn.onlinewebfonts.com/svg/img_363338.png">
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
                      <img class="restaurant1" src="https://cdn1.iconfinder.com/data/icons/pizza-11/64/09_Melting_Pizza_food_cheese_hot-512.png">
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
                      <img class="restaurant1" src="https://img.icons8.com/ios/452/sandwich.png">
                       <h5>Sandwich</h5>
                      </b-card>
                    </slide>
                  </carousel>
                </b-col>
              </b-row>
            </b-container>
          </div>
          <div class="col-md-6 featured">
            <div class="featured">
              <h3 class="header">Featured</h3>
            </div>
            <div id="app">
              <b-container>
                <b-row>
                  <b-col cols="6">
                    <carousel :perPage="4">
                      <slide class="p-2">
                        <b-card
                        class="restaurant2"
                        img-src="https://kevsbest.co.uk/wp-content/uploads/2020/08/5-Best-Sushi-Restaurants-in-Manchester-1200x838.png"
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
                          img-src="data:image/jpeg;base64,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"
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
                          img-src="https://i.dlpng.com/static/png/1596227--burger-meal-png-435_285_preview.png"
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
                          img-src="https://www.charlotteonthecheap.com/lotc-cms/wp-content/uploads/2015/04/mcdonalds-extra-value-meal.png"
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
                        img-src="https://kevsbest.co.uk/wp-content/uploads/2020/08/5-Best-Sushi-Restaurants-in-Manchester-1200x838.png"
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
                          img-src="data:image/jpeg;base64,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"
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
                          img-src="https://i.dlpng.com/static/png/1596227--burger-meal-png-435_285_preview.png"
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
                          img-src="https://www.charlotteonthecheap.com/lotc-cms/wp-content/uploads/2015/04/mcdonalds-extra-value-meal.png"
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
                        img-src="https://kevsbest.co.uk/wp-content/uploads/2020/08/5-Best-Sushi-Restaurants-in-Manchester-1200x838.png"
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
                          img-src="data:image/jpeg;base64,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"
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
                          img-src="https://i.dlpng.com/static/png/1596227--burger-meal-png-435_285_preview.png"
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
                          img-src="https://www.charlotteonthecheap.com/lotc-cms/wp-content/uploads/2015/04/mcdonalds-extra-value-meal.png"
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
          <div class="col-md-6 featured">
            <div class="featured">
              <h3 class="header">Newly added restaurant</h3>
            </div>
            <div id="app">
              <b-container>
                <b-row>
                  <b-col cols="6">
                    <carousel :perPage="4">
                      <slide class="p-2">
                        <b-card
                        class="restaurant2"
                        img-src="https://kevsbest.co.uk/wp-content/uploads/2020/08/5-Best-Sushi-Restaurants-in-Manchester-1200x838.png"
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
                          img-src="data:image/jpeg;base64,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"
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
                          img-src="https://i.dlpng.com/static/png/1596227--burger-meal-png-435_285_preview.png"
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
                          img-src="https://www.charlotteonthecheap.com/lotc-cms/wp-content/uploads/2015/04/mcdonalds-extra-value-meal.png"
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
                        img-src="https://kevsbest.co.uk/wp-content/uploads/2020/08/5-Best-Sushi-Restaurants-in-Manchester-1200x838.png"
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
                          img-src="data:image/jpeg;base64,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"
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
                          img-src="https://i.dlpng.com/static/png/1596227--burger-meal-png-435_285_preview.png"
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
                          img-src="https://www.charlotteonthecheap.com/lotc-cms/wp-content/uploads/2015/04/mcdonalds-extra-value-meal.png"
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
                        img-src="https://kevsbest.co.uk/wp-content/uploads/2020/08/5-Best-Sushi-Restaurants-in-Manchester-1200x838.png"
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
                          img-src="data:image/jpeg;base64,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"
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
                          img-src="https://i.dlpng.com/static/png/1596227--burger-meal-png-435_285_preview.png"
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
                          img-src="https://www.charlotteonthecheap.com/lotc-cms/wp-content/uploads/2015/04/mcdonalds-extra-value-meal.png"
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
          <div class="col-md-6 featured">
            <div class="featured">
              <h3 class="header">Restaurants</h3>
            </div>
            <div id="app">
              <b-container>
                <b-row>
                  <b-col cols="6">
                    <carousel :perPage="4">
                      <slide class="p-2">
                        <b-card
                        class="restaurant2"
                        img-src="https://kevsbest.co.uk/wp-content/uploads/2020/08/5-Best-Sushi-Restaurants-in-Manchester-1200x838.png"
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
                          img-src="data:image/jpeg;base64,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"
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
                          img-src="https://i.dlpng.com/static/png/1596227--burger-meal-png-435_285_preview.png"
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
                          img-src="https://www.charlotteonthecheap.com/lotc-cms/wp-content/uploads/2015/04/mcdonalds-extra-value-meal.png"
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
                  <b-col cols="6">
                    <carousel :perPage="4">
                      <slide class="p-2">
                        <b-card
                        class="restaurant2"
                        img-src="https://kevsbest.co.uk/wp-content/uploads/2020/08/5-Best-Sushi-Restaurants-in-Manchester-1200x838.png"
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
                          img-src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExQWFhUXGBoaGBgYGB4dGxsZHRodHRodGRgZHyggHiIlGxgYITEiJSkrLi4uHx8zODMtNygtLisBCgoKDg0OGxAQGy8lICUtLS0tLy0tLy0tLSstLS0tLS0tLS0tLS0tLTAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAIHAf/EAEAQAAEDAgQDBgQEAwgDAAMBAAECAxEAIQQSMUEFUWEGEyJxgZEyobHBQlLR8BRi4RUjM0NygpLxBxZTNKKyJP/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwQABf/EADARAAICAQMDBAAFAwUBAAAAAAECABEDEiExBBNBIlFhcRQygZGhI1KxQsHR4fAF/9oADAMBAAIRAxEAPwCpjAJ5D2rw4Ich7VL/AGyx+efIH9K0c44x+Y/8T+lZbM3aZo7gwATHypOGCpfhQSfL3p4ONYcj4wPMEfao+F8dbSMqhP8AMN/OuLEcRlQGb4XhzgR8AB9KKRwR1SSDlk9aNZ4owrRfvRjPFWR/mJ96mXaHR8Sp4jss6kaFX+mlbuDcQCFJI8wa6P8A22wPxA0v4lxZlSTBRyvc+gH3IrhlYcxlwFuBKK0yTcbU+4f40zuNaGeKM4AHhywec869wZLTsdb+tVuxJsmkkRi5hyNqica2jWnS0jegwyRIF+X2oXOqAfwxig23squop/3XhN4tNVkKPnUcpvaOoqEpcne8/KiFO7pv0peFcxWyVDqKzlI91DhiBfMPUf0r1t9MXKgdoO/r0peVXsfSpO9PIbxQKQ6o3RjimAFSTzGnrRKMbMgkEc5/Wq7nvpFSh0ae9J264jBpYVYwDmE7f9isRiN83zmkaFkfCaxD0WUn15AUQXHBnek+I/Lj20RtHXS1EJCyIVYzSnCYwEGCQTGmkbzyq7YZlPdgm0gEHmd6B6hwaMOhaidphSB4fO+n9KT4vjKkqPhgg1acSIBjf6Uh4oGyPFA6n6CtOPJYkyIIz2sg+JEjegON43+IyBtBATJNGtYNoAuFAhIm9vcV47xZhwQhtxUCxCIH/VF8lflEOPGWMSN8PUq2h+VDuNutHxNrj8yfEPUp09aeuOkiGkLFolUAdQIqHEcJxYhWQwhMgoWFG2oGUlU9Y9RSDKQaapZsI54nmEx9gQbVYOENhzxOOBCeU3I+1VBvjTCgcwBUNTET/u3p7hMW2pIg5bc5HvRIAPqFRLJHoIMv7WIbCRlUkjbxComg5mknXWDbpAqlltUSBmHMX9xUQfPM+9XUBuDIaimxE6F4tM1uoM+9bhHKPSqAniToMhxU+ZqZvjj4M94T5wRTdsxe5Lx3R/7v969Gbn7D+lUxrtI+PxA+YH2qZHat4ahB9D+tDtmd3JychQ2I9KxK1cp9KvLmMYP+YR5KNBFxmbOqF9lGqHaRGYSus4FxfwtLP+0/WmvDeyT2dKlwgalIIUsjcQmQPNRFWXhKWlH4sx/mUT8jTjiLiWMK6pICYQqABuRFTLHgSykGcqWoZlZRAzGByE2oRaq9Su1RKNOBLs20Iw+tN8MKUYWnLZyjNyqb8zXgNLccu8ESTZcE7HnFAYhtQV4gbWNAY3ii1kKBg7x9qj/tBwiCZHWqcTzdyZbeGYrvEAG6k2PlsaKU+nmJ5VSmeIONnOL8xzFTjEOPFakJmwJ6X2oVATUsysSlQUlJuQR6xVUCtjtUxxamv8RICuU+IHUWoPH4pK1ZkDLOo60jJcIaE5+RrdLh6UqLpGorz+JHX3pO2ZxeNC5/LXpcTzigMOpSyEoknl051YMD2bccHicQDyifnQ7Zh1QFKuXvzqRGYmIGta8Y4M9hzLiTkmApJlPruPWjMCIFgDzJorjuAtUfcN7Kh1AUl0BXKPvNLOKcKeYVkWNRY7G+xozhXEMiwoEgjUbVZuN8YwrzGRd1q0CfwnZU7Uj4/aOr+8p/CHYcywL+1xVgxfGkNtgA2FKf/XJbLjb0HU5hAsOYNvaq1iMI68grKjkR8WVM+ZBkTURg1NZlS+20s3Eu1aA3KbnYn4evnSNnEGS/iipNpQCgkAHeBYTsNaXM41AShvu88HwqVY/I09QtKkFAQlIMTubbSetXOnEKqUxdM2cEqeIQX33kBWFUwpuwOckERuWyOfKfKjQl/KlLyEKVNv4cgTbRRWZJJHTfWkWIwCELWkKWwomZTdCp0OU29oo7hWDda8ScQF9C2k//ANhUHypTkTj/ACP/AAmcA6qfY/PEc4nts1hk92+14os2pI9CqNKVcD4it/4V6ReN+oobEocadU8lpS3HB4lGFnl+IEieX6VDwPEvN+ENqQCqVFSIFzcwnXy0pVx4gpI3+zO1NqqxAO0HZF5t4pYQVJUAYKgInYhRFtI86C4Q0sZQhl5KgolROYpItAyhIgjnN5rqGMbacSXO+hRtKojyy+XKqvxNxLd0kAHTKrMCelgQL6Ec6rj6nuJRlF6RGYFG3mM8QuM0pI/cUyYw4eNyPMa+tIsC/nUBMknSbmpAXGXFZ0FKVKgcvfmaygkGxsZuz9OMagE3cMx2DW0YVBB0UND++VDZqtODUl1soUJB+R5iqD2pS8w73ZskiUqH4h58wbED71uwZu5seZ5GbH29/ENxXEEN/Eq/Ia0sc7QXskR1pNE0Y3w0xcgdCQD7GtWmZu57Qk4fqKj7o8xS0KVMGRRieHLKCpBnpWcqBzFTBkcWBCUhW3yoo413KUFZKTqCZHzqujEKSYuDRmFxpiDegUk7YQv+zW1aSk9P0NLOIYBbet07KGn9KcMrtmB86OaWgnKuMqhv9KXUyn3lceZuDKph3YvUycQVHxH02FY60lClAGRJAqBsJKoJIHSr0DvNRzGqHENbSJohLiRrS3FoyuFCVSNj061MzhHV2Slap/KkkfIUCvmFclwjiPGczeRIG14vQzS1iwJE05wnZPFrE5Mv+ogfSaJxHZdTQBdcAkxCQT8zFTObGu1xxhd9zKwULUSVTPWiG2adKwmGCTkcU4uw5Ac9vvR/CMO2owsGAQTpGUTmkRMmwF6m/UV4mvD0OtC97StutAiDQYw/Ka6g7h8KEk5GEiRZakgn5bVo42xbIMNbXKoEjrMAUidTY2BmTJjUnc/xK/wXhWQAAXN1H7elWrAYZQ6+lQJxA1BT6K35XAr198gT4hzmYvpcTRbqduIvaAPP8S5YThiXmFtuJlKkkGftVA4v2aXh0FQVIA33FTJxMLhIUoGIhUdDqaOxAIeS0QClwSnxyYBi4ItUhn9VDzKjCCNjKM1jEm6lQAQJ116C550VgMQ6sw22D5zPsLCmfanDYJp8KSlS1JHiGbwzaLEnTWBY2moGOJZiAkhI5mRHKwFaMjleBcysSOBcasYJ1xsh5xLSNChClA6WkXEazr8xQjDqU52WS2oFWVSpOUkjc2IEGNvvQ3GcS80vMn+9aKcrmYWClzFwZBMb0t7NtlLa0kESsKvygj9mpqhYW80dPjd2AyDaOu0K8N/DspQgNwQoCII3Bjeee9KWcSJgH5U8wmEdUA8y2VBCSFE5TMEmEg3gTtuTW2OxbLhGZDa40V3cK9Qeu1A4aFEz1Olc4iVUQ1tGFxC8jhIWEp0XEjKDaOUkb6UJxHs0pozhypaTclcHKZ3kQRvYCgmkd46S2yjMU2AGUSkyDbQ2NH4DtM63KHhebSIgciP0qDIybjce0GTXq2/aFcM4JIJdVC9kJV4SNiTr7EVU+1+KLL4QhQQIEgEqN9xm6bTT1HEEKUVqhITOVIVEpVFssgRmlXqaV9pMGw8cyCS5NyDMiNCBaw0gbVXEoD6jx7TDm6Yt4H7RGnjUHwuuanwqSCbEawIG5mdtt7X2Td/i0qS8G1hBiFJM6bQofeqti+EhBAyFJAGoiZ3P0vTZrgeIaw/8Ugp7tQkp/FFryAJFtNqtlQOv9PYyCdLoIut/0h+IaZZxKm2lFt1MZQSSJUOcCPCrnz6VJi8StKF94oGEmMoJlRtBJHJRuNaRqx6luB4wVfzX0G9W/ginn0ZnGwRsbEEaaHQ+kRUGSlBIsiaza/max8xJ2aSpS8+cjy+l/SrJ2o4YMUxCYzJ8STv/ADD1HzikvFEdy7lZbCDKQuLAkmQMug8O4G4qy8JfAmd+vKp6irBhFcaxRnM1IbaGY+EczdR8htW+DebcTmSharwTlJv1I86i/wDImDLOLI1bWM7fK/xD0PyikuC4m8ynIlIiZui9+vlFeup1KDPJPpNVC+JNlCpMEHQgzf0rbCYw6AwKD7knc0ThOHyYuKiaqel06utCF40JWgkxmAsaTMNEyRFtudMsThVJOVUjrzrRvhLiVApBVmEAAXrkoCDrMWr1V9wUYuPuKKw7neWzR0qz8L/8fre8Tyu7/lAlXvoPnVhHZfA4PISnMpXwlZzSbbaD0FTfqMa7eZiXpMjTm7fB3XZDSFKvrED/AJG1PuC9hHCZdVBOydvU/pVz4hju7RKFT0Si/pE26mP1reK7VqIACnOt0ga7QJ0jWpd/I6+ipvx9Etbm43a7M4PDytwArG5lR9BtWr/GkpWEIRAJgLcFjGuUaEaX61W08UW64kF1RTMqEnQCdBU2MxPerSSmAn4ZJ0neOdQYMPzm5pwYCcmhBsOZYMS5iAhS+/bypE5MpkgagKA3pVxHtCl1tbSsplMfy3Gy9JEnbUVOMSy4iHWAAlJOdklCkwLkRY2G9JOC4bCuupAWSLTmSSddSFW9qTEgKl8g4+P+Ic6HG4Rq3kWE4XCUlJBCgDJN/KYvHMWM01OGBaKEqAKolRmLGQJF9aZcRCWsyXU5pEtrHXQA8pmfpQjXD1rJyTlTGZRTYCAT56mwvFaCVyU1y6MuNe1e0X8JW02Vs4lKFjMIzJCtZkhWo1m1WdzC4VlQDbaC6pMwmAQPwyo8x50vGAZW4gONKWhCCcwkyTGuQyN7K6WFCPt4Kf7pLjawfizKA/4k/pSNl9Vb/wC3+Zl7BZzpFxriMM6hKnFANZtEpNj0kwDPKtuG43MosIR3ionMoZYiLgkkHaRIg7RevWnWFpAdSFgGUn4iNxc+KetV7CpCHZcUAnxGCsgm1hm1p8bhrBEk+BwZNxBDjeMbZaOZ1ZKigxbUm42gExtHlTDHZQ4Q+tQPwym2kaaxemvZJOGKlYhLQS5MSTmgW0JMDW8U0xWCYU+XVZVJUPhmb7n5U+lbFcxcWTtsdco6Oy7jqS60hSkE2JuTzMEXE70C1whEyokRtppsetdH4Riw0yGBcAkBWk3kEV5jEpUc62kKVIlZ1kaTzpz8GMvUoGOpfqVn/wBXcfQHMyUgxlLioKo5a2gWm1OuGcOw7YEgKKZSqb3J5aWIqb+OS4oNuoNrgnrrEcxUPFeElsh5gkozJJTum4memtCoj9SzbHb6mmPUlbykNqcQABmhUJA5wPaKXvcCaBIS4qETPW02rTiaSp3OgZc48YB1IMA+woNAXlcOVRVnhIteSZ0PSg1+Yy5GA9JMsWHeZw7aMu58R3JFzfzimn9ttPNkqbSoCMsjQ7EGkSGA4hrrJ6aTP0orD8IbDZlVx4r9NvKqaSJmdgTvzIMWhhTshCZyRJ86I7PYPDNuJPcoC4N9Z9DJFjVZ4pbEO2+CwvGwFQ4DEOZlEBQASVZgReNrGb1OzqlaYpOh4t1uQcicirGQLxtBpZj+0KEh1JCRlEZTa0a0i4ZjVPYdC5VExBjYkb32pNjSVKWYJJWEXI+EH+lWBIEgoF7+IHjcMlDgS0M6CNeRM2qx8PxmJw6UJsUG6eQFiR8zUfCmbuZUx4gi/KL0/UwhKUgx0nrP2BrgDK5M+oBauKO0cOkOQc6ogDeNTHsPagc6xAkiAN/UaelDdoO9cdzIBKYypuIOv3vQmMbcda7pbSo1lBvbYxYjeCOVRbHbXBrIWoH26xrbyGVd8lTqPAUD8pkkk6WKUj/cOVV1b5UE2EBOUCSYAm3uSfWi3+zxGiyno4gjyuJFCK4QofjaPXN/StaaVUAGZG1sSalgb4c7s2fW31qVHDsQCCURHUVa1AG87b+X9BQnEeMNteEeJZ0SLmdgflreokzauZgYCvgbuIyhQCMt+pm22lXbg/CEYdvORmIGo1MDQVDgilCMzxywMy4BypHnF40pD2i7eIW2W8MheXTOQAb/AJQFHUcwIrN639K8CUyZP9TSzf26HMoZU0grFg6TJnT4RAMXuftKwsF1wtuYhvvROcNpKkpiTAUqIvy+1c1ZQtw/3QUggTObKCJA1Ucu43rMFw9wLMFQVqTnif8AjVOyqCTUlzsZ0bD4UpaWv+IbU2kFU332JIGvQGtcO0hxEwggGQCApObeRFrc6GZ7O4o4NstuNyBmS3KgMt5BVzIM3jzoNri2NQm4bCZGgK17jUmAL9akpTIpANyvba/TAOJArcCfAiZjIBHpG1Rt4daf8QhMCd4I5jnV14NxXDuIzLyBUeKUpBJ3CpGnlVFxzqHCohvu5WSic0ZL+GNBsRbcjSKliOslaqpfCMuPJqvn4lm7OpZcQtEplaVASYkRBynUGDqOdK+IBnCuq7gpuB4FAmDEGbwVGJkyb1P2UQ0t1AEIyovEgqctmzSTIEwCKJ7c8KDOV5KpLhyFJIgiPLmL+lAFUyaATv8AtGc957fnxK3iuIKUUk65rz5zMdPtVjwfFgySFozC1wpMBQtrPTaaV8QcCmwpWEiwM5oBQRAjLG5FMOF8BxCEAKCCORUCeY2iarnCAANM+YMGD8+Kk2Pxi8QQts92AIkGSROhIik+N4cpSk5nbkgSbC53M2HWmGIT3K1NyFAGfDtN7C1rz0pNjeJDxAKibEeu9OigAKOJuw5MTLqTn+RNuOvMJTLWZC0nKUzM7Ez9warb3E3JsfhGpvRBdQpaQqSCbxOnmK84k0yRCBBGn3matjVUIBExdRldhpUzpPZjhiv4VKVqCSQVqAtdXij5xSzjAyvBIzQlINj0J50uwvFX0MsoSFT3ZvqRsCfSi8VjkvFa0oKVJaykeW8DoflXOo8TMgN+oyPA4tfeJAzAmYVrEAnUTFHYDjJdZcIUSErymRuIP0ND9lRncVvCY9z/AEpnwjh5LMKEFSidL8hPtS4xtxGyhQfqpA9iVdyle6lQOY1j6U4wuJcZBM5uc8zGnvUTbbaUBBTZCpE80mAfep2VZ9t/oRVQvvIswI2irjeMQwQsgwU+ERqTJ/W9LO0QWWXdAApBTlscpIInrM007WYVT2HSltJUttzQawQQfnFM14NKiApIKf7sWNvBcT5mkoWblFegIZgcOEsoREEIieQj+lI+N49KVBPeJSQU+GJMSJEaXv6Vh48f48tD4IymNiE5ifkR6VScfjC86tepWq3qYSPaK5msbQY8e9tLv2u4WUpcfSLLCCY2iAr0sKWdnWitt4gEykgecE263FOeKdqxhpZKM/h+E6HNz6f1qRrHtd0hxtAbQ5EIA0WoxEDrQoFrhGRglVPOE4Q92hKtdSN5N4+dVbHYU943JIheeOczVywmf/EOn9ah4vge8Uh0DTwkctwfnFV4FSQa2N+ZpwjDwJ5mf37CtcRKgpybJzW8haimVHIrnp/1S/izwaQkqkpUcqjyBBn5UCZw5lZUo28Wv68hasRiCNxcfvTyqrp4o40e7XJQCcs/FG1xblTHC4hCwSmSeR2nn+/WgUIjhwY3VjJBBMjy1nX7WqBQSf8ALQepmfWKGdQeQEevp+/lWmf80T1SD9QaXTDck4txpSRCDFrn9PYVN2AwBedU+r4UWTP5zv6A/PpVUxjhWqJsK6V2Fa//AMSSnXOsn3/QCnybJETd/iWzENJGEeCo8SCm+hkXt5TVE7OYFvDvoeUjOhaVJhXiCDa4BEz4deRir0cKHmFNuCxghVvCrY3NxtQHD8E0lOVSiohR1SNNIKTO1eWcwxIQxNHbaehoRzuLmcS4hg1iEtJEiCrIFWEkW8O5tVVVhjcgWF+dpj7044zhGmiQkrIgrEInfRR1iLa9TNV97iAKm4FgDJ0BOY/ECTe20Wi1a8LKcdqbHzKelFNCMsXjHAwsZymACkTrf4Y2mosPiCsEhshQSFKMaDr61I3xMR/lqA1GZMjbQmaJwfFUSUNpuqxCBMxfQetSZiF9K1MuPr2xn8hiwO5us9J+VE/2KkrCnSUAABQMmytIGxgaeWlMmOBBUrAyRchSgNdPDqPlRfDuHtLUorhSgDAJBEc5BnalTWPBm7L/APQxZU2BB+pW+E4F0OAtrRYkJC8siZ0m8SLkTtR/FuE4lIDrq86UAwUpnITuQTz3o3HcNQ4UFDYbUgxmRcEelvWjcVgn20BOZTwJEgWkbwU2HuOV64M7MCB+/MzLnQtt/MpfEMCHQl0r7yR4yEhORWwsTJHkJp7wPDl8qT3yvCBofvUGJS8XX1YdsyQQUrgmeapgZp/Z3rGL7PY9tourGUDbvACd7AGJ6TVmxjL6SwBnZM/aFKLv+JZ+MNpbe8agspjwk3Umxy2M7xaluC4eHVqAQnxRMpBOvhAJvM2tE1nBuFl5He4p7KpaU92kmVR+ZWbYwecfKvMayMOUqbfBuTMaFJkWIvPO48qJxstKTNGHPjdb0+r6knEeyxUAUJ8WyZAJAJBzDYgikOI7PvINxG19PKdKtKO0hL4ecKQLBQbbgEqIEklZk67Da9WNeJLmZp0IbbIBCnEKg3MTqke513ogZVagLX3mPLnVjdznWJxDoCEg6JhUCTI8qddnuJrwqs+JbV4k2BTHoARRbOOYazJZUpLhWAYKcigDBCc+3r7U8xOKaxQ7sxGmbLBnkQa7NlZK228yehW4keAxmH7nv2Ww0gznHJQtbpRTClElew1pEcjSVYchICVSZJMqCgrUWiw9Kld7RFpJ+GIBKvEInSRG/wA6qjg8RX6dxG3GmA4EuJtlPiGllEGfcV5gsSkTcWFJWuKrxCHUsOBS8tinYbwkDMf66iq6z2f4kojKCB/OQn3BJPyptQAJbb7k3QjYb/UuyzCM0+Z0v996EwnEFwUNiSVC94y2n6c6Wr7LYtISlThICJUZsFSfCBMnbxGNa0UcRhwiFEz8WZwlMgmyRHIDnepZGtbWasWEMPc+01d4W8h555acgUlzIdZUsEQCOUmfSoOD8N7hScRiChLaZIzKIzGLQIo/H8Yd7pMpISpQDivwpk2ynclIOoEdaF7Q8MOJeTLqA3lTCAfGBl1yk6TNxSYWd9m2/mR6knGdHBMm4rhWX3FOZnTpIQkEARaF3BFEqxQQygZRlbjKZAIIBEm5k3J86B4TwRLThZffzAyUNpXE3spUc0wY86eO8PaBQooVkQYyTY2t1p3Vr2MChGUWTAUcffKcqUgJ5kGfkY+VRJ4niEkwoqzfhVcX2Ghj1tWyeHPqU7imX0BGYksyZAGo8RjaaIRjEvJSFA5jopJhQPQxfyIqh2G0dMmPjTDG8PikKDishQPiaRrG8FQ19aD486XkBTRJZjxGw8XIg3kUZwpx84hTK1pIgxlNwZgZiCb2NoFaYLhZQtaCITuCZB8qxrlyAEORfxLlEO8XYDsu080C4CoG9yRHlFVztR2UVg0980tRQCAQdUzYXGom0RuNa65gWgE/S30qtdtGSMI8lYEKyxe/xA/anw5mDAXtI5EUj5nP+HY8OJvqBcfcdPpU+YHQUgZzMOidvmk/0p+61e0EeQ+9bTQMzi2ErLf1NXv/AMe8VCVKYV+I5k+cQoe0fOqHGU+Ropp5SFBaDCkmQetF11CoiGp234VAjbaoeK8M7yFtjxJ1QLBUcr69POhez3HW8S2lYIChZSTqFD9+1PWAFHyrzMmKjNqZtpQsPxpSV/3gTnAIKFJIUm+3M9YHmbV7xri7WIQAGA24FCFxeN5IAPLWauHGOz7OJjvE+IaLT8XkdiPOqtj+xWQFXenuxrCSSB5TFcvb1aiKMuHWpG5g8OVIQfiXK5koVeTrJEEiBb6mh+HsuqU60l3uE2BWqQsiTZKheOdxtE3FUrGKQCru/hmEk6nzjTyp3wTs5isQAtkZUrF3FSlIv+EXKvOI1863kKi6mNfcxtmDtpEtzPBxhkZk4U4iFZi5dShbQJVPhsTrqas+CUH2yThiCU/CpsA+21U4f2jhFoausJQSClRCFIM3ygTI3psviuIW0tDoMAglCBlkxodLTB2210rJkxrlAYn9jLJhethE+P7TKwrwbSznSj4xGUQdgrXcGAat+GZKicSVgMZSsgSAlISPCTYzEnzqrMcKVilgrWW3BdOWLdI3qzstN4dsJefB/FdW8bJOptT94MKWJkwlH5v6lHPbTu8ym2kZlmfEpa7e+3IR+mj3bPEEht5lgtrKYKE5j4hZSAVGTB06xNOXBw51QKwTGYTZOuptYGgeI9lMI4vPgnHMyIsEyCdZzxEk9acPiG7j9YuXHlvUooR7wAoZYSVZSpIhEA58hMgEag7xzmheP4lSh/8AjoSTHdrXlzAjXwwcyYtB51BwVpaVZS33YGiR4SSNz7mD1pcmFZyTdJuVG8zG95mst/1CU/yTNWBBkyFXPHP6xz2bZzKOcNJIgjIkA6yTpOoB5UL254454siv7hUJKyuRmBvlQTeDBkA3qFsKSoIVYwCLxYiQZ5EVWeOcGcU5lbyqQYiVAQZ5naTT9OGbKWZj9eJTrOkGNNWMXGXZVzBOKh1RK5HxQJHMQNZtc76V0LG8MYQ33zaQcoEjPAKZgkSdY06xXJsF2VfbcAcQgDTMXBYSJMJMkxNq6PgcAXVZW3mSylIGVTIMmZgiZgQNSap1aAEPq2E87A3uJWeKMBSlLCCE5vyx5ZiNyOtCJ4UpKSHkFQPilSjdOgIMg2AInUX51ae2LKGi2hSc4KQZnwmDpBJIifpXvZ7tEyhlaHGpSkCSm5KFKCSTJnwlQnptTKLW1O00ZsmPKApUxMOzzLS87anG1FNihRiD586sHDsWUBMKBgXVmJnS5Cp6+9MuF8NzKK0OE4YjwpMHyvE5dxpSbiGIw7mYDKkpVlzgQOUTpeKzdUrkaTZBkceKj/Tb9xFfaPEvKdURIRA+Gb2uYFBjOrIHFlKYSElRmEm3+0dKmxyC2rLnIgagyCZsTOluutMsJgu8QSl1BUkSQu207xHzopjZVoDabcfVZca3pB+R/wBzVvhDJCg7KgmYUkzJG45jzqDj3AGHG0rnMhIuAT3iJ1ykapjY/OmTWExoAeSEKURcghSwORkSbRpNKOLYl4KCnkjMRY3kj/aKCaibQ8SOXIM726H9xKvhuCoSM5dIE5QACogc4MJIj+b0p92bK3ELYKHVIlX96CEqH5YJkCDFhtapMJw5x5BypQi8AKAuL6WtRCODYxCQEIhUmVpckHfewjoJO9au7/dB2l00NvszdvsrnAUHQdblRKv361IMCvCAKEOKKvAqT4N7IBubWmbxUPD+D4oOSpeRMybhVxyiPrVuwmDTc6qvfz5ch0rM2XLr/MK9pwxKosxLwnhakErzETJE/Hczcyact4YzOp1o1lkbivH8QhsHMQBSVZh11IWnbcoNydKqnbziSSnuhBgZl+1vrQ3HO1kqUhoZvoPOqnjVkynUkyo61pw465Ek7CLcSwS2lRIkAjW5E2t704S4ABJvA+lDDCyUiBCBfqTeD8q3WROlaGNyait4vxjIcTmTrQba9jR60KaVI05Vq6hLukBVP+XYydBtxzIsHilsrC2zB36+dXjgnbYKIDnhVpffyO9UNaFJsoeu3vWi2JrmQMN4AxBndsNxNKoIOtMGnkzXCOG8YeYIg5kjY/Y1ceF9t0GAqx3BtWZ8H6yocS7cT7O4V0qUplsqUCCoJGaDG8XNtTetWeFONtd2wsJj4cyRAvpCIHlYUFhuOIV+KjWuLCLGs+THYo8exlVbTvUFc4di1qShxaIv4rfK2bnaYvRJ4UGB8KiVb6p8yALUQ3xLneiBxUb0jKdOkbSpzE+JXON43u2ilKYUfxRGmsbz1qsvlbqQVSvKIm6lEEzv5nSuprebcTCwkzzAoZHDsMLJQE/6RGvlXYQMYobx0zit+ZyrF4JaRZSFpyg5kKBAkwAY1P8ALr97B2NddYQtwqBEzA1EDXrbb9ateO7L4d5HdlagAPDf4ZMnKDz350ua7J5CB/EZhEQpAjWfwkX6mrZDjyKVbid3dXJiPjfaYLyFCIyqJUpRAOWDYT126VtiMG2+A4FBJIkqsAYFpn0onHf+P1vTLyEpuQkNmArYnx33t1oPA/8AjR5PhW+Ci5KQFBJMeExm2ME8+YpMfT4UA0tVfcyZmYZdWPaetZXE5kjOlKQCoC0CwJItS7ija1CGvIgfrV5Y4M62yvDo7sJKMoUeggSAJpE32Mxn/wB24/ln7iqp1F3YqeiuVWWnMg4QeIKbtlcGwUsZj0F49zQkOEuhDbuHcQCXATAUqCUpAJ3O4Omk1YmuzmLbAKXEkj96iKTYrhPE1PuLyjx2zZwIGlr6dIpu4hFH+ZlyYl5QyHBcOfW3mfzHYA3gHlM3sK9/hRh2VLX4VOJKUoIF0kiSQf8AT9ae4Dg+NyEO4nIdgnxe58I+VRO9lUrILrzjigd8se0UDmWqG0THjAbUxi3s/wAcaI7l+wJsUymRy1g+XWm3Ee4W0ptshibhR8KbayBv110qJrsiwnXMrzOnlEUa1wVhOiQY0kk/U1B2DOGs7S/pBsTm/FHVKyJZS6tUq7xZlWbSI1sOfWtmeFY9xOVLSsvUiD5En+ldSabSNgKnQsdKv+INUFEgw9VhjKVwfhfFEEHOlMczm+lMlcFxC/8AEeiSbJTz6q/SrMjEAamosXxBGsioixZG31KDORBsDwxKAIJKgIkm584otEkwqT1mlrvG207zSvH9sG02n513bJ3iF5a3mk1GcQhG4rm+P7fAfCZv1pJiuN4vERlHdiLqNp10HlVkwHk7STZPA3l87Qds22ZA8R8/lVB4jx1/FKMkpQeQufLl60MhltJlZLihuTJ9NhWFa1WSInlrHU1oXGo4kyT5nhhsQm5n2/U/vpTJvA5PEsnMY8IE+c9fSt+H4LL4j4bamPlyqdXFEM/AAtU6kWHXzriTwIR7mbYjBBpoOLEE/Cga+ZoHDcLcdGeJk849qnw6HMUuVaDXp5dTVrw7QCQEiALROlVRK5knyXxKZjmpEjX60pcaE8qeOt2UNj96XP4a19RuAfT5VQiSVq2g4WoCLKHI1u1hAoEyUEc9PrQjiyk1OxiyL70lD6ldRPzMXhVDVJI5jShlYUHQ+9MEYnSCUn2qZThPxBKvOx966jO294rQt1HwqNvUUQxx59HX1ojukHZSPI5h+teKwYOikK6Gx9jQNeZ1N4/iMMN2vv4iR56U3wvapJ3B8qqLvDTqUqHlehjgE7K9xH0qZwIeJQZWHM6Vh+0SFb0YOPJH4q5UMM4PhX/+361uVYgbz7fapnp/mMMo9p1ZHaYD8QqQdqUTdQ/flXIS7iPyn2NYX8RpkPsaX8P8zu6vsZ2AdqUfmqVHalJ3+dcaTjHh+A8tDW4x726D8678Mfed3U9jOzntCg7/AErxHaAA6iK44rjDv5VCtBxhzcKoDp2nd1Pmdn/9iTJ8XvpUau0re6q405xVw7KqI41w/hV7V34U+8PeX5nZP/Z2R+KoH+1DY0VNciD7x/Aqt+7xCtEK96b8KPeDvD2M6crte1sTP70qFXa5F4Pz1rnKeH4km4A3urlW7fCHz+NA9aI6dR5nd4/2y6udsRGvp+/KoF9uLWBqsHgKhZT6R5AmpW+CsD43nFdAI+tN2scHcc+I0e7aLG496Vv9q1qMJzHyFEtYHCo0ZK+qiT8hTDCuuCzLKEXtCL+6r0wVB4gJyHzUSNIxzxlDagOZED52rwcBVriH0p/lCsyvlNXBrs9jsR8ZUBrc7eQopHZNtkS/iEI56A+5M/KqC/AiEDyblLRhGkf4SCT+ZWvt/Wt/4Rxwgkkj5VaMRxLhrHwS8rmJj3NvakHEO1S12QgNp5C/uaGnezDq2oT1OAQn4jH75mtX+KNos2mkzjylGSaHW+hOpnoP1o6YpyVDncY44YkxyrfBNlSghIzK+Q8z9q84Vw9/EWSMiOf9d6vnCeBoYTlSATud6cLJl57wrAhCAN9zzozuR09qzJG8GpAhR2j1oxZTn+HLSJEx05aUuczDnpv5fqKvqWYt9TNDYzh6FgggTU7j1KCrDg6ge3L/ALoZ3CcjVvxvZxX4DPQ0t/sZ2bo+VNcFStHMNRWN4j0qxHgzm6D7UK9wVU/4avY120NmLUY0jephjgdR+/Wt18Bc5KHoaHf4M8kTB9jRuCEoxKecVuHR+YfI/Wk5QtOqTWpdjY0KHtGDkeY5MbgH99DWsp/KfQmlKcR1qVLvWhQjBoyBRzWPUfpW6UJjwuKHmP0NLM3WsvzpSPmMG+IzbWrXvI96kLi//r8zSaVc6zvVc6XRGGSOgHCf8QVo53gj+8R8v0pSHlc6875Vdog7gjcB3/6pjyr1DKz/AJotSoPKrXvFc/nXaDO1iOMh3cMdBWBvmtXrScOq5/OvCs8zXaZ2sR0pgfmn1qQLQNz70hk8zXubnXaJ2uP21t7q+d61GLaEyPv9BSIEazFYrEJ/NR0Tu5HyOMQfCgeon6miB2xxAslSUf6UJHziaqpxaedR/wAZ+VPrRCGIcglkf7R4hYILzpB1AWRS9QJvA8yaXk4iYCFA/wCk0RhuAYl06R/qUBTaIhyTxx9A1UD5UK5jxolPv+lWjBdgVWLi5B1Cf1NPsF2bZZUClE7GbnzpwBE1EznTGGWq68yQdNp6A+tW3gHBEiJbbIOtioja8wBVqfw7ei0hQIPhgHT6Vph8KpK/CFBJAhIgARzNyfKgTOAk2HwSgkpSqBaITED30qQYMaFavKbD9/ep2GVkESE/v51M3hVx8fskCunTXDYIAW186n7gfkHvXjeFVu4o+UD6Ct/4Pqv/AJq/WjOgzjUxbSvA0YrKypykwYXeSeQr3ubSB6V7WV06a5TyBrwNzE1lZQnSNbX7it0IO/oKysrp0if4ehWqAQeYoJ3gDBsWwJ3FZWV0EXYrsdhybAj1oJzsI0dFqHSsrKNmdQkY7Bo/+qx6Cpf/AEdqP8RfuKysrrnVAMZ2FcElt0HkFC59aruJ4XiG1ZFoIPlY+RrKyiDFIkZwb35Ff8TXowT35D7GsrKNzp6jBPnRCvY1t/ZmIj/DV7GsrK650la4JilaNq9RH1opHZXFkE2HmftWVldcIFwlnsRiFauJF762HMjlW57CubvJsYNj7+VZWUNRnaZMz2BP43fYUa32EaTqpSuVwKysrtRnaRDsP2VYRfuha9/F6fSmjHDEgDKlMWIER728+orKyluNUkTgAlOgnbnPOfvWyMJuCR1J/WsrKAnT0JINz8r/ACqOY8JKlTflH/VZWUYYXhmlH+X6keZ+1FNteIFQFhaOXnWVlWA2kSd4Kp1Ta8lylR03HURW2HdcDmUyU9RWVlCGHlO/OvUBW/61lZRnT//Z"
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
                          img-src="https://i.dlpng.com/static/png/1596227--burger-meal-png-435_285_preview.png"
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
                          img-src="https://www.charlotteonthecheap.com/lotc-cms/wp-content/uploads/2015/04/mcdonalds-extra-value-meal.png"
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
                  <b-col cols="6">
                    <carousel :perPage="4">
                     <slide class="p-2">
                        <b-card
                        class="restaurant2"
                        img-src="https://kevsbest.co.uk/wp-content/uploads/2020/08/5-Best-Sushi-Restaurants-in-Manchester-1200x838.png"
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
                          img-src="data:image/jpeg;base64,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"
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
                          img-src="https://i.dlpng.com/static/png/1596227--burger-meal-png-435_285_preview.png"
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
                          img-src="https://www.charlotteonthecheap.com/lotc-cms/wp-content/uploads/2015/04/mcdonalds-extra-value-meal.png"
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
                  <b-col cols="6">
                    <carousel :perPage="4">
                     <slide class="p-2">
                        <b-card
                        class="restaurant2"
                        img-src="https://kevsbest.co.uk/wp-content/uploads/2020/08/5-Best-Sushi-Restaurants-in-Manchester-1200x838.png"
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
                          img-src="data:image/jpeg;base64,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"
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
                          img-src="https://i.dlpng.com/static/png/1596227--burger-meal-png-435_285_preview.png"
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
                          img-src="https://www.charlotteonthecheap.com/lotc-cms/wp-content/uploads/2015/04/mcdonalds-extra-value-meal.png"
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
                  <b-col cols="6">
                    <carousel :perPage="4">
                     <slide class="p-2">
                        <b-card
                        class="restaurant2"
                        img-src="https://kevsbest.co.uk/wp-content/uploads/2020/08/5-Best-Sushi-Restaurants-in-Manchester-1200x838.png"
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
                          img-src="data:image/jpeg;base64,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"
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
                          img-src="https://i.dlpng.com/static/png/1596227--burger-meal-png-435_285_preview.png"
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
                          img-src="https://www.charlotteonthecheap.com/lotc-cms/wp-content/uploads/2015/04/mcdonalds-extra-value-meal.png"
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
  background: white;
  margin-top: -50px;
  height: auto;
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
article h4, article h5 {
    margin-bottom: 1.5rem;
    width: 95px;
}
.card-img-top{
    width: 100%;
    height: 150px;
    padding: 0px;
    margin: 0px;

}
article h4:not(:first-child), article h5:not(:first-child) {
    margin-top: 15px; 
}
</style>

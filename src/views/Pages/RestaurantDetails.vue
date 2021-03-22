<template>
  <b-container class="12">
    <div>
      <b-row>
        <b-col md="3">
          <b-card class="card11">
            <b-container class="choose">
              <h4>Sort by</h4>
              <b-form-group  v-slot="{ ariaDescribedby }">
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
        <b-col md="9" style="margin-top:50px">
          <b-card>
            <b-container class="work11">
              <b-row>
                <b-col md="7">
                  <h1>Burger King - Palace de Royale</h1>
                  <b-row>
                    <b-col md>
                      <b-form-rating
                        class="star-rating"
                        id="rating-md-no-border"
                        v-model="value"
                        rating="no-border"
                      ></b-form-rating>
                      <div class="mt-2">{{ value }}</div>
                    </b-col>

                    <b-col md="8">
                      <div class="comment">
                        <b-col md v-b-toggle.collapse-2 class="m-1"
                          >Comment
                          <b-icon icon="chevron-down" aria-hidden="true">
                          </b-icon>
                          <b-collapse class="collapsee" id="collapse-2">
                            <b-card class="body1">
                              <div>
                                <div class="row">
                                  <div class="col-md-1">5</div>
                                  <div class="col-md-1">
                                    <i class="far fa-star"></i>
                                  </div>
                                  <div class="col-md-8 mt-1">
                                    <b-progress
                                      :value="value1"
                                      show-progress
                                    ></b-progress>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-1">4</div>
                                  <div class="col-md-1">
                                    <i class="far fa-star"></i>
                                  </div>
                                  <div class="col-md-8 mt-1">
                                    <b-progress
                                      :value="value2"
                                      show-progress
                                    ></b-progress>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-1">3</div>
                                  <div class="col-md-1">
                                    <i class="far fa-star"></i>
                                  </div>
                                  <div class="col-md-8 mt-1">
                                    <b-progress
                                      :value="value3"
                                      show-progress
                                    ></b-progress>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-1">2</div>
                                  <div class="col-md-1">
                                    <i class="far fa-star"></i>
                                  </div>
                                  <div class="col-md-8 mt-1">
                                    <b-progress
                                      :value="value4"
                                      show-progress
                                    ></b-progress>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-1">1</div>
                                  <div class="col-md-1">
                                    <i class="far fa-star"></i>
                                  </div>
                                  <div class="col-md-8 mt-1">
                                    <b-progress
                                      :value="value5"
                                      show-progress
                                    ></b-progress>
                                  </div>
                                </div>
                              </div>
                            </b-card>
                          </b-collapse>
                        </b-col>
                        <b-col md> </b-col>
                      </div>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-card-text>
                      # Burger - American -Vegan Friendly - Fried Chicken
                      <br />
                      <b-icon icon="clock-fill" aria-hidden="true"></b-icon>
                      11:00 - 22:00
                      <b-icon icon="bicycle" aria-hidden="true"> </b-icon> €0,00
                      delivery
                      <b-icon icon="arrow-down-circle-fill" aria-hidden="true">
                      </b-icon>
                      €4,50 minimum
                      <br />
                      <i class="fas fa-map-marker-alt"></i> Dummy Address Lorem
                      Ipsum Si amet Dummy Place
                    </b-card-text>
                  </b-row>
                  <b-row>
                    <b-card-text>
                      Lorem ipsum dolar sit amet, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </b-card-text>
                    <div class="modal-restaurant">
                      <b-button
                        v-b-modal.modal-center
                        class="btn restaurant"
                        title="Restaurant Info"
                        id="show-btn"
                        @click="$bvModal.show('modal-center')"
                        >Restaurant Info</b-button
                      >

                      <b-modal
                        id="modal-center"
                        centered
                        title="Restaurant Info"
                        hide-footer
                      >
                        <template #modal-title> </template>
                        <div class="d-block text-center"></div>
                        <div>
                          <h3 class="info">Restaurant Info</h3>
                          <b-card title="" sub-title="">
                            <b-card-text>
                              <h4 class="mini">Minimum Order Amount</h4>
                              €4,50 Lorem District(Dummy Address)
                              <hr class="my-1" />
                              <h4 class="mini">Payment Method</h4>
                              Credit/Bank Card, Bancontact, Paybal,Apple Pay
                              <hr class="my-1" />

                              <div
                                id="show-btn"
                                @click="$bvModal.show('bv-modal-example')"
                              >
                                <b-modal id="bv-modal-example" hide-footer>
                                  <b-row cols="2">
                                    <b-col>
                                      <h4 class="mini"></h4>
                                      Days
                                    </b-col>
                                    <b-col style="text-align: right">
                                      <h4 class="mini1"></h4>
                                      Working Hours
                                    </b-col>
                                    <b-card cols="12" class="hours">
                                      <b-card-text>
                                        <b-row cols="2">
                                          <b-col>
                                            <h4 class="mini">Monday</h4>
                                          </b-col>
                                          <b-col>
                                            <h4 class="mini1">10:00-23:00</h4>
                                          </b-col>
                                        </b-row>
                                        <hr class="my-1" />
                                        <b-row cols="2">
                                          <b-col>
                                            <h4 class="mini">Tuesday</h4>
                                          </b-col>
                                          <b-col>
                                            <h4 class="mini1">10:00-23:00</h4>
                                          </b-col>
                                        </b-row>
                                        <hr class="my-1" />
                                        <b-row cols="2">
                                          <b-col>
                                            <h4 class="mini">Wednesday</h4>
                                          </b-col>
                                          <b-col>
                                            <h4 class="mini1">10:00-23:00</h4>
                                          </b-col>
                                        </b-row>
                                        <hr class="my-1" />
                                        <b-row cols="2">
                                          <b-col>
                                            <h4 class="mini">Thursday</h4>
                                          </b-col>
                                          <b-col>
                                            <h4 class="mini1">10:00-23:00</h4>
                                          </b-col>
                                        </b-row>
                                        <hr class="my-1" />
                                        <b-row cols="2">
                                          <b-col>
                                            <h4 class="mini">Friday</h4>
                                          </b-col>
                                          <b-col>
                                            <h4 class="mini1">10:00-23:00</h4>
                                          </b-col>
                                        </b-row>
                                        <hr class="my-1" />
                                        <b-row cols="2">
                                          <b-col>
                                            <h4 class="mini">Saturday</h4>
                                          </b-col>
                                          <b-col>
                                            <h4 class="mini1">10:00-23:00</h4>
                                          </b-col>
                                        </b-row>
                                        <hr class="my-1" />
                                        <b-row cols="2">
                                          <b-col>
                                            <h4 class="mini">Sunday</h4>
                                          </b-col>
                                          <b-col>
                                            <h4 class="mini1">10:00-23:00</h4>
                                          </b-col>
                                        </b-row>
                                      </b-card-text>
                                    </b-card>
                                  </b-row>
                                </b-modal>
                                <h4 class="mini">Working Hours</h4>
                                Today: 10:00-19:00
                                <div class="modal-day">
                                  <i class="fas fa-chevron-right"></i>
                                </div>
                              </div>

                              <hr class="my-1" />
                              <h4 class="mini">Opportunities</h4>
                              "Chicken McNuggets" for any menu order € 1.5
                              <hr class="my-1" />
                              <h4 class="mini">Contact</h4>
                              <b-icon
                                icon="telephone-fill"
                                aria-hidden="true"
                              ></b-icon>
                              +35 00504540541
                              <i
                                style="margin-left: 35px"
                                class="fas fa-envelope"
                              ></i>
                              corporate@burgerking.com
                            </b-card-text>
                          </b-card>
                        </div>
                      </b-modal>
                    </div>
                  </b-row>
                </b-col>
                <b-col md="5">
                  <b-card
                    img-src="img/theme/restaurant.png"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem"
                    class="mb-2"
                  >
                  </b-card>
                </b-col>
              </b-row>
            </b-container>
          </b-card>
          <b-card>
            <b-container class="work22">
              <b-row>
                <h4>Burgers</h4>
                <b-col md="12">
                  <b-card-group deck>
                    <b-card>
                      <b-modal id="modal-scrollable" scrollable>
                        <div class="scroll">
                          <p class="my-1" v-for="i in 1" :key="i">
                            <b-card>
                              <b-row>
                                <b-col md="4">
                                  <b-card
                                    class="mb-22"
                                    img-src="img/theme/restaurant-image.png"
                                    img-alt="Image"
                                    img-top1
                                    tag="article"
                                  >
                                  </b-card>
                                </b-col>
                                <b-col md="8">
                                  <b-card-text>
                                    <h4>Whopperking Menu</h4>
                                    Lorem ipsum dolar sit amet, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna
                                    aliqua.
                                  </b-card-text>
                                </b-col>
                              </b-row>
                              <hr class="my-3" />
                              <b-row>
                                <b-row class="text-center">
                                  <b-col cols="4"
                                    ><h4 class="increase">- 1 +</h4></b-col
                                  >
                                  <b-col cols="4" class="order"></b-col>
                                  <b-col cols="4"
                                    ><h4 class="increase1">
                                      <i class="money-bill"> € 9.90</i>
                                    </h4></b-col
                                  >
                                </b-row>
                              </b-row>
                            </b-card>
                          </p>
                          <p>Ingredient (Remove from thr meal)</p>
                          <p class="my-1" v-for="i in 1" :key="i">
                            <b-card>
                              <b-card-text>
                                <b-row>
                                  <b-col cols="10">
                                    <h4>
                                      <del class="menu-drinks">
                                        <i class=""></i>
                                        <span class="menu-drinks"
                                          >Onion</span
                                        ></del
                                      >
                                    </h4>
                                  </b-col>
                                  <b-col cols="2">
                                    <b-form-checkbox
                                      to="/dashboard"
                                      class="text-light"
                                      ><small> </small
                                    ></b-form-checkbox>
                                  </b-col>
                                </b-row>

                                <hr class="my-1" />
                                <b-row>
                                  <b-col cols="10">
                                    <h4><i class=""></i> Letture</h4>
                                  </b-col>
                                  <b-col cols="2">
                                    <b-form-checkbox
                                      to="/dashboard"
                                      class="text-light"
                                      ><small> </small
                                    ></b-form-checkbox>
                                  </b-col>
                                </b-row>

                                <hr class="my-1" />
                                <b-row>
                                  <b-col cols="10">
                                    <h4>
                                      <del class="menu-drinks">
                                        <i class=""></i
                                        ><span class="menu-drinks"
                                          >Pickle</span
                                        ></del
                                      >
                                    </h4>
                                  </b-col>
                                  <b-col cols="2">
                                    <b-form-checkbox
                                      to="/dashboard"
                                      class="text-light"
                                      ><small> </small
                                    ></b-form-checkbox>
                                  </b-col>
                                </b-row>
                                <hr class="my-1" />
                                <b-row>
                                  <b-col cols="10">
                                    <h4><i class=""></i>Cheese</h4>
                                  </b-col>
                                  <b-col cols="2">
                                    <b-form-checkbox
                                      to="/dashboard"
                                      class="text-light"
                                      ><small> </small
                                    ></b-form-checkbox>
                                  </b-col>
                                </b-row>

                                <hr class="my-1" />
                                <b-row>
                                  <b-col cols="10">
                                    <h4><i class=""></i> Big Mac Sauce</h4>
                                  </b-col>
                                  <b-col cols="2">
                                    <b-form-checkbox
                                      to="/dashboard"
                                      class="text-light"
                                      ><small> </small
                                    ></b-form-checkbox>
                                  </b-col>
                                </b-row>
                              </b-card-text>
                            </b-card>
                          </p>

                          <p>Menu</p>
                          <p class="my-1" v-for="i in 1" :key="i">
                            <b-card>
                              <b-card-text>
                                <h4>
                                  <i class=""></i> Big
                                  <input
                                    class="radio"
                                    type="radio"
                                    
                                  />
                                </h4>
                                <hr class="my-1" />
                                <h4>
                                  <i class=""></i> Super<span
                                    class="menu-drinks"
                                    >(+€1,50)</span
                                  >
                                  <input
                                    class="radio"
                                    type="radio"
                                   
                                  />
                                </h4>

                                <hr class="my-1" />
                                <h4>
                                  <i class=""></i> Mega
                                  <span class="menu-drinks">(+€2,00)</span>
                                  <input
                                    class="radio"
                                    type="radio"
                            
                                  />
                                </h4>
                              </b-card-text>
                            </b-card>
                          </p>
                          <p>Drinks</p>
                          <p class="my-1" v-for="i in 1" :key="i">
                            <b-card>
                              <b-card-text>
                                <h4>
                                  <i class=""></i> Coca Cola(Big)
                                  <input
                                    class="radio"
                                    type="radio"
                                   
                                  />
                                </h4>
                                <hr class="my-1" />
                                <h4>
                                  <i class=""></i> Coca Cola light(Big)
                                  <input
                                    class="radio"
                                    type="radio"
                                   
                                  />
                                </h4>

                                <hr class="my-1" />
                                <h4>
                                  <i class=""></i> Fanta(Big)
                                  <input
                                    class="radio"
                                    type="radio"
                                    
                                  />
                                </h4>
                                <hr class="my-1" />
                                <h4>
                                  <i class=""></i> Sprite(Big)
                                  <input
                                    class="radio"
                                    type="radio"
                                   
                                  />
                                </h4>
                                <hr class="my-1" />
                                <h4>
                                  <i class=""></i> Ice Tea(Big)
                                  <input
                                    class="radio"
                                    type="radio"
                                 
                                  />
                                </h4>

                                <hr class="my-1" />
                                <h4>
                                  <i class=""></i> Cappy Atom(20cl.)
                                  <input
                                    class="radio"
                                    type="radio"
                                   
                                  />
                                </h4>
                                <hr class="my-1" />
                                <h4>
                                  <i class=""></i> Water(330ml.)
                                  <input
                                    class="radio"
                                    type="radio"
                                  
                                  />
                                </h4>
                              </b-card-text>
                            </b-card>
                          </p>
                          <p>Non</p>
                          <p class="my-1" v-for="i in 1" :key="i">
                            <b-card>
                              <b-card-text>
                                <h4>
                                  <i class=""></i> 1 Priece
                                  <input
                                    class="radio"
                                    type="radio"
                                 
                                  />
                                </h4>
                                <hr class="my-1" />
                                <h4>
                                  <i class=""></i> 2 Priece
                                  <input
                                    class="radio"
                                    type="radio"
                                   
                                  />
                                </h4>

                                <hr class="my-1" />
                                <h4>
                                  <i class=""></i> 3 Priece
                                  <input
                                    class="radio"
                                    type="radio"
                                    
                                  />
                                </h4>
                              </b-card-text>
                            </b-card>
                          </p>
                          <p>Extra Cheese</p>
                          <p class="my-1" v-for="i in 1" :key="i">
                            <b-card>
                              <b-card-text>
                                <h4>
                                  <i class=""></i> 2 Piece
                                  <span class="menu-drinks">(+€3,00)</span>
                                  <input
                                    class="radio"
                                    type="radio"
                                    
                                  />
                                </h4>
                              </b-card-text>
                            </b-card>
                          </p>
                          <p>First Free Sauce</p>
                          <p class="my-1" v-for="i in 1" :key="i">
                            <b-card>
                              <b-card-text>
                                <h4>
                                  <i class=""></i> Non
                                  <input
                                    class="radio"
                                    type="radio"
                                    
                                  />
                                </h4>
                                <hr class="my-1" />
                                <h4>
                                  <i class=""></i> Ketchup
                                  <input
                                    class="radio"
                                    type="radio"
                                    
                                  />
                                </h4>

                                <hr class="my-1" />
                                <h4>
                                  <i class=""></i> Mayonnaise
                                  <input
                                    class="radio"
                                    type="radio"
                                
                                  />
                                </h4>
                                <hr class="my-1" />
                                <h4>
                                  <i class=""></i> Hot Sauce
                                  <input
                                    class="radio"
                                    type="radio"
                                    
                                  />
                                </h4>
                              </b-card-text>
                            </b-card>
                          </p>
                          <p>Second Free Sauce</p>
                          <p class="my-1" v-for="i in 1" :key="i">
                            <b-card>
                              <b-card-text>
                                <h4>
                                  <i class=""></i> Non
                                  <input
                                    class="radio"
                                    type="radio"
                              
                                  />
                                </h4>
                                <hr class="my-1" />
                                <h4>
                                  <i class=""></i> Ketchup
                                  <input
                                    class="radio"
                                    type="radio"
                                    
                                  />
                                </h4>

                                <hr class="my-1" />
                                <h4>
                                  <i class=""></i> Mayonnaise
                                  <input
                                    class="radio"
                                    type="radio"
                                  
                                  />
                                </h4>
                                <hr class="my-1" />
                                <h4>
                                  <i class=""></i> Hot Sauce
                                  <input
                                    class="radio"
                                    type="radio"
                                  
                                  />
                                </h4>
                              </b-card-text>
                            </b-card>
                          </p>
                        </div>
                      </b-modal>
                      <b
                        class="row v-b-modal.modal-scrollable"
                        @click="$bvModal.show('modal-scrollable')"
                      >
                        <b-col md="4">
                          <b-card
                            class="mb-22"
                            img-src="img/theme/restaurant-image.png"
                            img-alt="Image"
                            img-top1
                            tag="article"
                          >
                          </b-card>
                        </b-col>
                        <b-col md="8">
                          <b-card-text>
                            <b-row>
                              <h4>Whopperking Menu</h4>
                              Lorem ipsum dolar sit amet, sed do eiusmod tempor
                              incididunt ut labore et dolore magna aliqua.
                            </b-row>
                            <b-row>
                              <i class="fas fa-money-bill"> € 9.90</i>
                            </b-row>
                          </b-card-text>
                        </b-col>
                      </b>
                    </b-card>

                    <b-card sm="12">
                      <b class="row">
                        <b-col md="4">
                          <b-card
                            class="mb-22"
                            img-src="img/theme/restaurant-image.png"
                            img-alt="Image"
                            img-top1
                            tag="article"
                          >
                          </b-card>
                        </b-col>
                        <b-col md="8">
                          <b-card-text>
                            <b-row>
                              <h4>Whopperking Menu</h4>
                              Lorem ipsum dolar sit amet, sed do eiusmod tempor
                              incididunt ut labore et dolore magna aliqua.
                            </b-row>
                            <b-row>
                              <i class="fas fa-money-bill"> € 9.90</i>
                            </b-row>
                          </b-card-text>
                        </b-col>
                      </b>
                    </b-card>
                  </b-card-group>
                  <b-card-group deck>
                    <b-card>
                      <b class="row">
                        <b-col md="4">
                          <b-card
                            class="mb-22"
                            img-src="img/theme/restaurant-image.png"
                            img-alt="Image"
                            img-top1
                            tag="article"
                          >
                          </b-card>
                        </b-col>
                        <b-col md="8">
                          <b-card-text>
                            <b-row>
                              <h4>Whopperking Menu</h4>
                              Lorem ipsum dolar sit amet, sed do eiusmod tempor
                              incididunt ut labore et dolore magna aliqua.
                            </b-row>
                            <b-row>
                              <i class="fas fa-money-bill"> € 9.90</i>
                            </b-row>
                          </b-card-text>
                        </b-col>
                      </b>
                    </b-card>
                    <b-card>
                      <b class="row">
                        <b-col md="4">
                          <b-card
                            class="mb-22"
                            img-src="img/theme/restaurant-image.png"
                            img-alt="Image"
                            img-top1
                            tag="article"
                          >
                          </b-card>
                        </b-col>
                        <b-col md="8">
                          <b-card-text>
                            <b-row>
                              <h4>Whopperking Menu</h4>
                              Lorem ipsum dolar sit amet, sed do eiusmod tempor
                              incididunt ut labore et dolore magna aliqua.
                            </b-row>
                            <b-row>
                              <i class="fas fa-money-bill"> € 9.90</i>
                            </b-row>
                          </b-card-text>
                        </b-col>
                      </b>
                    </b-card>
                  </b-card-group>
                </b-col>
              </b-row>
            </b-container>
          </b-card>
          <b-card>
            <b-container class="work22">
              <div class="row">
                <h4>Drinks</h4>
                <b-col md="12">
                  <div>
                    <b-card-group deck>
                      <b-card>
                        <b class="row">
                          <b-col md="4">
                            <b-card
                              class="mb-22"
                              img-src="img/theme/restaurant-image1.png"
                              img-alt="Image"
                              img-top1
                              tag="article"
                            >
                            </b-card>
                          </b-col>
                          <b-col md="8">
                            <b-card-text>
                              <b-row>
                                <h4>Coca Cola 330ml.</h4>
                                Lorem ipsum dolar sit amet, sed do eiusmod
                                tempor incididunt ut labore et dolore magna
                                aliqua.
                              </b-row>
                              <b-row>
                                <i class="fas fa-money-bill"> € 1.90</i>
                              </b-row>
                            </b-card-text>
                          </b-col>
                        </b>
                      </b-card>

                      <b-card>
                        <b class="row">
                          <b-col md="4">
                            <b-card
                              class="mb-22"
                              img-src="img/theme/restaurant-image1.png"
                              img-alt="Image"
                              img-top1
                              tag="article"
                            >
                            </b-card>
                          </b-col>
                          <b-col md="8">
                            <b-card-text>
                              <b-row>
                                <h4>Coca Cola 330ml.</h4>
                                Lorem ipsum dolar sit amet, sed do eiusmod
                                tempor incididunt ut labore et dolore magna
                                aliqua.
                              </b-row>
                              <b-row>
                                <i class="fas fa-money-bill"> € 1.90</i>
                              </b-row>
                            </b-card-text>
                          </b-col>
                        </b>
                      </b-card>
                    </b-card-group>
                    <b-card-group deck>
                      <b-card>
                        <b class="row">
                          <b-col md="4">
                            <b-card
                              class="mb-22"
                              img-src="img/theme/restaurant-image1.png"
                              img-alt="Image"
                              img-top1
                              tag="article"
                            >
                            </b-card>
                          </b-col>
                          <b-col md="8">
                            <b-card-text>
                              <b-row>
                                <h4>Coca Cola 330ml.</h4>
                                Lorem ipsum dolar sit amet, sed do eiusmod
                                tempor incididunt ut labore et dolore magna
                                aliqua.
                              </b-row>
                              <b-row>
                                <i class="fas fa-money-bill"> € 1.90</i>
                              </b-row>
                            </b-card-text>
                          </b-col>
                        </b>
                      </b-card>

                      <b-card>
                        <b class="row">
                          <b-col md="4">
                            <b-card
                              class="mb-22"
                              img-src="img/theme/restaurant-image1.png"
                              img-alt="Image"
                              img-top1
                              tag="article"
                            >
                            </b-card>
                          </b-col>
                          <b-col md="8">
                            <b-card-text>
                              <b-row>
                                <h4>Coca Cola 330ml.</h4>
                                Lorem ipsum dolar sit amet, sed do eiusmod
                                tempor incididunt ut labore et dolore magna
                                aliqua.
                              </b-row>
                              <b-row>
                                <i class="fas fa-money-bill"> € 1.90</i>
                              </b-row>
                            </b-card-text>
                          </b-col>
                        </b>
                      </b-card>
                    </b-card-group>
                  </div>
                </b-col>
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
      button: [
        (document.getElementsByClassName("btn btn-primary").innerHTML =
          "Add to basked"),
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
    /* border: 1px solid rgba(0, 0, 0, 0.05); */
    border-radius: 20px;
    margin-bottom: 20px;
}
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
.btn:not(:last-child) {
  margin-right: 17.5rem;
  border-radius: 30px;
  color: white;
}
.modal-footer > :not(:first-child) {
  margin-left: 0.25rem;
  background: #f8b305;
  border-radius: 30px;
  border: 0px;
}
.menu-drinks {
  color: #f8b305;
}
.mini1 {
  float: right;
}
.hours {
  width: 100%;
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
  width: 300px;
  border-top-left-radius: calc(0.375rem - 1px);
  border-top-right-radius: calc(0.375rem - 1px);
  height: 320px;
}
.restaurant {
  color: #212529;
  background-color: #f8b305;
  border-color: #f8b305;
  border-radius: 50px;
}
p {
  font-size: 0.8rem;
  line-height: 1.7;
  padding: 15px;
}
.mb-4,
.my-1 {
  margin-bottom: 1rem !important;
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
.info {
  margin-top: -72px;
}
.mini {
  padding: 0px;
  margin-bottom: -2px;
  margin-top: 0px;
}
.fa-chevron-right {
  float: right;
  width: x;
  font-size: x-large;
  margin-top: -30px;
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
.modal-restaurant {
  margin-bottom: 20px;
  margin-left: 15px;
}
.mt-4,
.my-1 {
  margin-top: 0px;
  margin-bottom: 0px;
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

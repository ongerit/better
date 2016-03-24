<template>
  <div class="cars">
    <section class="sidebar">
      <h2>Purchase price</h2>
      <input type="number" v-model="price" placeholder="$">

     <input v-model="price" type="range" min="0" max="100000"  id="fader" step="1">




      <h2>Trade-in value</h2>
      <input type="number" v-model="value" class="sf">
      <input type="number" v-model="valuePercent" class="tf" placeholder="%">

      <input  v-model="valuePercent" type="range" min="0" max="100" id="fader" step="1">



    </section>
    <section class="listing">
      <h1>Available cars</h1>
      <p>You can adjust the purchase price and/or trade-in value of your loan. The cars for which you qualify will update accordingly.</p>
      <div v-if="car.price >= price" class="main-card" v-for="car in cars">

      <span class="left">{{car.title | capitalize}} Car</span> <span class="right">${{car.price | comma}}</span>

      <img v-bind:src="'./static/image-car-'+ car.title +'.png'">


      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      cars: '',
      price: '',
      value: '',
      valuePercent: ''

    }
  },

  ready () {
    this.getCars()
  },

  watch: {
    valuePercent: function (v) {
      if (v > 0) {
        this.getValue()
      }
    }
  },

  methods: {
    getCars: function () {
      this.$http('https://api.fieldbook.com/v1/56f1f21cb5bbdf03006a34b3/cars').then(function (response) {
        var cars = response.data
        this.$set('cars', cars)
      })
    },
    getValue: function () {
      var totalValue = this.price * (this.valuePercent / 100)
      this.$set('value', totalValue)
    }
  }

}
</script>

<style lang="scss">

$pale-teal : #76bcc2;
$white : #fff;
$better-color-text-dark : #848c8b;
$better-color-primary-dark : #153d39;
$better-color-primary-dark : #153d39;
$greeny-blue : #47abb4;
$better-color-primarymedium : #31766f;

.cars{
  padding-top: 32px;
}

.left{
  float: left;
  clear:right
}

.right{
  float: right;
  clear:right
}

.sidebar{
  max-width: 262px;
  width: 100%;
  height: 330px;
  background-color: $white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
  padding: 16px;
  box-sizing: border-box;
  float: left;
  
  h2{
  font-family: Helvetica;
  font-size: 14px;
  line-height: 1.3;
  color: $better-color-text-dark;
  }

  input{
  width: 100%;
  height: 40px;
  border-radius: 2px;
  border: solid 1px $better-color-text-dark;
  }

    .sf{
    width: 70%;
    float: left

  }

  .tf{
    width: 20%;
    margin-left: 5% 
  }

}


.listing{
  max-width: 698px;
  font-family: Helvetica;
  font-size: 18px;
  line-height: 1.4;
  color: $better-color-text-dark;
  display: inline-block;
  float: none;
  clear: both;
  padding-left: 30px; 
  
  h1{
  font-family: Helvetica-Light;
  font-size: 38px;
  color: $better-color-primary-dark;
  float: none;
  clear: both;
  margin: 0;
  }

  .main-card{
  float: left;
  max-width: 333px;
  width: 100%;
  height: 333px;
  background-color: #ffffff;
  background-color: $white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
  display: inline-block;
  padding: 17px;
  box-sizing: border-box;
  margin: 0 0 32px 0;
    &:nth-child(odd){
        margin-right: 32px
    }

    img{
      float: none;
      clear: both;
      width: 100%;
      max-width: 250px;
      margin: 6em auto;
      display: block;

    }
  }



}

</style>

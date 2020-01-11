<template>
  <div id="app">
    <!-- Header part end-->
    <div class="product_image_area section_padding">
      <div class="container">
        <div class="row s_product_inner justify-content-between">
          <div class="col-lg-7 col-xl-7">
            <div class="product_slider_img">
              <div class="lSSlideOuter  vertical" style="padding-right: 105px;">
                <div class="lSSlideWrapper usingCss" style="height: 450px;">
                  <div id="vertical" class="lightSlider lsGrab lSSlide"
                    style="height: 1800px; transform: translate3d(0px, 0px, 0px);">
                    <div data-thumb="img/product/single-product/product_1.png" class="lslide active"
                      style="height: 450px; margin-bottom: 0px;">
                      <img src="img/product/single-product/product_1.png">
                    </div>
                    <div data-thumb="img/product/single-product/product_1.png" class="lslide"
                      style="height: 450px; margin-bottom: 0px;">
                      <img src="img/product/single-product/product_1.png">
                    </div>
                    <div data-thumb="img/product/single-product/product_1.png" class="lslide"
                      style="height: 450px; margin-bottom: 0px;">
                      <img src="img/product/single-product/product_1.png">
                    </div>
                    <div data-thumb="img/product/single-product/product_1.png" class="lslide"
                      style="height: 450px; margin-bottom: 0px;">
                      <img src="img/product/single-product/product_1.png">
                    </div>
                  </div>
                  <div class="lSAction"><a class="lSPrev"></a><a class="lSNext"></a></div>
                </div>
                <ul class="lSPager lSGallery"
                  style="margin-left: 5px; width: 100px; transition-duration: 600ms; height: 607.167px; transform: translate3d(0px, 0px, 0px);">
                  <li style="width:100%;height:146.66666666666666px;margin-bottom:5px" class="active"><a href="#"><img
                        src="img/product/single-product/product_1.png"></a></li>
                  <li style="width:100%;height:146.66666666666666px;margin-bottom:5px"><a href="#"><img
                        src="img/product/single-product/product_1.png"></a></li>
                  <li style="width:100%;height:146.66666666666666px;margin-bottom:5px"><a href="#"><img
                        src="img/product/single-product/product_1.png"></a></li>
                  <li style="width:100%;height:146.66666666666666px;margin-bottom:5px"><a href="#"><img
                        src="img/product/single-product/product_1.png"></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-xl-4">
            <div class="s_product_text">
              <h5>previous <span>|</span> next</h5>
              <h3>{{ product }}</h3>
              <h2>{{ 'Rp ' + price }}</h2>
              <ul class="list">
                <li>
                  <a class="active" href="#">
                    <span>Category</span> : {{ category }}</a>
                </li>
                <li>
                  <a href="#"> <span>Availibility</span> : In Stock</a>
                </li>
              </ul>
              <p>
                First replenish living. Creepeth image image. Creeping can't, won't called.
                Two fruitful let days signs sea together all land fly subdue
              </p>
              <div class="card_area d-flex justify-content-between align-items-center">
                <div class="product_count">
                  <span class="inumber-decrement"> <i class="ti-minus"></i></span>
                  <input class="input-number" type="text" value="1" min="0" max="10">
                  <span class="number-increment"> <i class="ti-plus"></i></span>
                </div>
                <a href="#" class="btn_3">add to cart</a>
                <a href="#" class="like_us"> <i class="ti-heart"></i> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'app',
    data() {
      return {
        product: 'Kursi',
        price: 1250000,
        category: 'Tempat duduk',
        instock: true,
        description: 'Kursi untuk duduk',
        images: [
          'img/product/single-product/product_1.png',
          'img/product/single-product/product_1.png',
          'img/product/single-product/product_1.png',
        ]
      }
    },
    components: {
      // HelloWorld
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
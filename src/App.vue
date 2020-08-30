<template>
  <div id="app">
    <div class="nav-app">
      <router-link :to="{name: 'Home'}" active-class="nav-app--active" exact>Catalog</router-link>
      <router-link :to="{name: 'Cart'}" active-class="nav-app--active">Cart</router-link>
    </div>
    <router-link :to="{name: 'Cart'}">
      <div class="cart-count">
        <span>Cart: {{CART.length}}</span>
      </div>
    </router-link>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>

<style lang="scss">
/*Обнуление*/
* {
  padding: 0;
  margin: 0;
  border: 0;
}
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:focus,
:active {
  outline: none;
}
a:focus,
a:active {
  outline: none;
}
nav,
footer,
header,
aside {
  display: block;
}
html,
body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 1;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
input,
button,
textarea {
  font-family: inherit;
}
input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}
/*--------------------*/

.catalog-title {
  font-size: 40px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 50px;
}
.nav-app {
  margin-top: 20px;
  a {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 10px 20px;
    color: #ccc;
  }
  .nav-app--active {
    border-bottom: 2px solid #ccc;
    color: #000;
  }
}
.cart-count {
  color: #000;
  text-align: right;
  font-size: 20px;
  padding-right: 20px;
  span {
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
    font-weight: bold;
  }
}
</style>

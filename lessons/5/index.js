Vue.component('the-list', {
  props: ['lists'],
  template: `
    <ul>
      <li v-for="list in lists">{{ list.name }}</li>
    </ul>
    `
})

var app = new Vue({
  el: '#app',

  data: {
    message: 'Hello VUE'
  },

  // Event
  created: function () {
    console.log('created');
  },
  mounted: function () {
    console.log('mounted');
  },
  updated: function () {
    console.log('updated');
  },
  destroyed: function () {
    console.log('destroyed');
  },
})

setTimeout(() => {
  app.$destroy()
}, 5000);
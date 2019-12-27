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

  component: ['the-list'],

  data: {
    lists: [
      {name: 'Mouse'},
      {name: 'Desktop'},
      {name: 'Laptop'},
    ],
    list: ''
  },

  methods: {
    addList: function () {
      if (this.list.length > 0) {
        this.lists.push({name: this.list});
        this.list = ''
      } else {
        alert('Cannot empty')
      }
    }
  }
})
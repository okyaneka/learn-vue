var app = new Vue({ 
  el: '#app',
  data: {
      message: 'Hello Vue!',
      seen: false,
      todos: [
        {text: 'Satu'},
        {text: 'Dua'},
        {text: 'Tiga'},
        {text: 'Empat'}
      ]
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
});

app.todos.push({text: 'Sepuluh'})
var app = new Vue({
  el: '#app',
  data: {
    angka2: [
      'satu', 'dua', 'tiga'
    ],
    huruf2: [
      { name: 'A' },
      { name: 'B' },
      { name: 'C' },
      { name: 'D' },
    ],
    angka: '',
    huruf: '',
  },
  methods: {
    tambahHuruf: function () {
      this.huruf2.push({name: this.huruf})
      this.huruf = ''
    },
    tambahAngka: function () {
      this.angka2.push(this.angka)
      this.angka = ''
    }
  },
  filters: {
    capitalize: function (data) {
      return data.toUpperCase()
    }
  }
})
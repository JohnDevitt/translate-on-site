var app = new Vue({
  el: '#app',
  data: {
    options: [{
        value: 'en',
        label: 'English'
      }, {
        value: 'German',
        label: 'German'
      }, {
        value: 'French',
        label: 'French'
      }, {
        value: 'Japanese',
        label: 'Japanese'
      }, {
        value: 'Russian',
        label: 'Russian'
      }],
    value: 'French',
    checked: true
  }
})

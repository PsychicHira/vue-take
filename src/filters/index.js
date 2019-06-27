import Vue from 'vue'
import moment from 'moment'

Vue.filter('dateString', function (value, format) {
  return moment(value).format(format || 'YYYY-MM-DD HH:mm:ss')
})

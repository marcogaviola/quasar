import Vue from 'vue'
import moment from 'moment'
moment.updateLocale('en', {
  relativeTime : {
      future: "in %s",
      past:   "%s ago",
      s  : 'a few seconds',
      ss : '%d seconds',
      m:  "1 min",
      mm: "%d min",
      h:  "an hr",
      hh: "%d hrs",
      d:  "a d",
      dd: "%d d",
      M:  "a month",
      MM: "%d months",
      y:  "a year",
      yy: "%d years"
  }
});
Vue.prototype.moment = moment
/**
 * @file Vue extends / ES module
 * @module plugins/vue-extends
 **/

import Vue from 'vue'
import EmptyBox from '~/components/common/empty'
// filters
// Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

// components
Vue.component(EmptyBox.name, EmptyBox)


// mixins
Vue.mixin({
  computed: {
  }
})


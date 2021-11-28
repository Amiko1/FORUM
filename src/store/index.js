import { createStore } from 'vuex'
import getters from '@/store/getters'
import actions from '@/store/actions'
import mutations from '@/store/mutations'
export default createStore({
  state: {
    categories: [],
    forums: [],
    threads: [],
    posts: [],
    users: [],
    unsubscribes: [],
    authId: 'jVa6Go6Nl1Urkag1R2p9CHTf4ny1'
  },
  getters,
  actions,
  mutations

})

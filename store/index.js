export const strict = true

const state = () => ({
  packages_list: [],
  viewPackages: 'default',
})

const getters = {}

// async
const actions = {


}

// synchronous
const mutations = {

  addPackages(state, package_info){
    state.packages_list.push(package_info)
  },

  deletePackages(state, { packages_list }){
    state.list.splice( state.list.indexOf(packages_list), 1)
  },

  editPackages(state) {

  },


  togglePackageDefault(state) {
    return state.viewPackages = 'default'
  },

  togglePackageAdd(state) {
    return state.viewPackages = 'add'
  },

  togglePackageSingle(state) {
    return state.viewPackages = 'single'
  }

}

export default {
  state,
  actions,
  getters,
  mutations
}

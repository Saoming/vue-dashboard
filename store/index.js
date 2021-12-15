export const strict = true

// state
const state = () => ({
  packages_list: [],
  viewPackages: 'default',
})

// getters
const getters = {}

// actions

const actions = {}

//mutations
const mutations = {
  // set
  setPackages(state) {

  },

  updatePackages_field(state) {

  },

  addPackages(state, customer_name, package_description, package_type, pieces, package_cost, status, merchant, delivery_company, tracking_number, weight, created_by, print_label, notify_customer, package_image, date_added, date_update){
    state.packages_list.push({
      customer_name,
      package_description,
      customer_name,
      package_description,
      package_type,
      pieces,
      package_cost,
      status,
      merchant,
      delivery_company,
      tracking_number,
      weight,
      created_by,
      print_label,
      notify_customer,
      package_image,
      date_added,
      date_update,
    })
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

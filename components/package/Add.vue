<template>
  <div>
    <div class="mb-8">
      <h1 class="text-4xl text-darkSlateBlue font-bold"> Add Package </h1>
    </div>
    <form class="w-full p-8 shadow" @submit.prevent="submitForm" autocomplete="off">
      <div class="grid grid-cols-2 justify-around mb-4">
        <h2 class="text-2xl text-darkSlateBlue font-bold"> Details </h2>
        <div class="grid justify-items-end">
          <div class="flex">
            <input type="submit" class="px-6 py-2 bg-darkSlateBlue text-white rounded-xl mr-3 cursor-pointer"
              value="Submit" @click="onSubmit" />
            <button class="px-6 py-2  text-darkSlateBlue border border-darkSlateBlue rounded-xl" @click="onCancel">
              Cancel </button>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-3">
        <div class="px-4 py-2">
          <label class="text-gray-600"> Customer Name </label>
          <input type="text" class="w-full rounded-md border-gainsboro mt-2" required v-model="customer_name" />
        </div>
        <div class="px-4 py-2">
          <label class="text-gray-600"> Package Description </label>
          <input type="text" class="w-full rounded-md border-gainsboro mt-2" required v-model="package_description" />
        </div>
        <div class="px-4 py-2">
          <label class="text-gray-600"> Package Type </label>
          <select class="w-full rounded-md bg-whiteSmoke border-silver mt-2" required v-model="package_type">
            <option value="bag">Bag</option>
            <option value="box">Box</option>
          </select>
        </div>
      </div>
      <div class="grid grid-cols-3">
        <div class="px-4 py-2">
          <label class="text-gray-600"> Pieces </label>
          <input type="number" class="w-full rounded-md border-gainsboro mt-2" required v-model="pieces" />
        </div>
        <div class="px-4 py-2">
          <label class="text-gray-600"> Package Cost </label>
          <input type="number" class="w-full rounded-md border-gainsboro mt-2" required v-model="package_cost" />
        </div>
        <div class="px-4 py-2">
          <label class="text-gray-600"> Status </label>
          <select type="text" class="w-full rounded-md bg-whiteSmoke border-silver mt-2" required v-model="status">
            <option value="not shipped">not shipped</option>
            <option value="shipped">shipped </option>
            <option value="onroute">on route</option>
            <option value="delivered">delivered</option>
          </select>
        </div>
      </div>
      <div class="grid grid-cols-3">
        <div class="px-4 py-2">
          <label class="text-gray-600"> Seller / Merchant </label>
          <select type="text" class="w-full rounded-md bg-whiteSmoke border-silver mt-2" required v-model="merchant">
            <option value="amazon"> Amazon</option>
            <option value="ebay"> Ebay</option>
          </select>
        </div>
        <div class="px-4 py-2">
          <label class="text-gray-600"> Delivery Company </label>
          <select type="text" class="w-full rounded-md bg-whiteSmoke border-silver mt-2" v-model="delivery_company">
            <option value="fedex"> Fedex</option>
            <option value="dhl">DHL</option>
          </select>
        </div>
        <div class="px-4 py-2">
          <label class="text-gray-600"> Tracking Number </label>
          <input type="text" class="w-full rounded-md border-gainsboro mt-2" required v-model="tracking_number" />
        </div>
      </div>

      <div class="grid grid-cols-3">
        <div class="px-4 py-2">
          <label class="text-gray-600"> Weight </label>
          <input type="number" class="w-full rounded-md border-gainsboro mt-2" required v-model="weight" />

        </div>
        <div class="px-4 py-2">
          <label class="text-gray-600"> Created By </label>
          <input type="text" class="w-full rounded-md border-gainsboro mt-2" required v-model="created_by" />

        </div>
        <div class="px-4 py-2 flex items-center">
          <div class="bg-darkSlateBlue text-white py-4 px-8 mr-4 rounded-md">
            <label class="mr-3"> Print Label </label>
            <input type="checkbox" class="" required checked v-model="print_label">
          </div>
          <div class=" bg-darkSlateBlue text-white py-4 px-8 rounded-md">
            <label class="mr-3"> Notify Customer</label>
            <input type="checkbox" class="" name="true" required v-model="notify_customer" />
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center w-full px-4 py-2">
        <label :class="[package_image ? 'h-full': 'h-40']"
          class="flex items-center justify-center w-full border border-darkSlateBlue border-dashed hover:bg-silver hover:border-silver">
          <div v-if="!package_image" class="flex items-center justify-center text-darkSlateBlue">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
              role="img" class="mr-2" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <path d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2z"
                fill="currentColor"></path>
            </svg>
            <p class="pt-1 text-base tracking-wider">
              Add Image</p>
          </div>
          <div v-else class="flex items-center justify-center">
            <img :src="package_image" class="mr-2" style="width: 150px; height: 150px;" />
            <button @click="removeImage" class="px-6 py-2 bg-darkSlateBlue text-white rounded-xl">Remove image</button>
          </div>
          <input type="file" class="hidden" @change="onFileSelected" />
        </label>
      </div>
      <input id="date_added" type="hidden" v-model="date_added" required />
      <input id="date_updated" type="hidden" v-model="date_update" required />
    </form>
  </div>
</template>

<script>
  export default {
    name: "Add",
    props: {
      customerName: String,
      packageDesc: String,
      packageType: String,
      Pieces: Number,
      PackageCost: Number,
      Status: String,
      Merchant: String,
      DeliveryCompany: String,
      TrackingNumber: String,
      Weight: Number,
      CreatedBy: String,
      Printlabel: Boolean,
      NotifyCustomer: Boolean,
      PackageImage: {
        type: String,
        default: ''
      },
      DateAdded: {
        type: Date,
        default: function () {
          return new Date().toISOString().substr(0, 10)
        }
      },
      DateUpdate: {
        type: Date,
        default: function () {
          return new Date().toISOString().substr(0, 10)
        }
      }
    },
    data() {
      return {
        customer_name: this.customerName,
        package_description: this.packageDesc,
        package_type: this.packageType,
        pieces: this.Pieces,
        package_cost: this.PackageCost,
        status: this.Status,
        merchant: this.Merchant,
        delivery_company: this.DeliveryCompany,
        tracking_number: this.TrackingNumber,
        weight: this.Weight,
        created_by: this.CreatedBy,
        print_label: this.Printlabel,
        notify_customer: this.NotifyCustomer,
        package_image: this.PackageImage,
        date_added: this.DateAdded,
        date_update: this.DateUpdate
      }
    },

    methods: {
      onFileSelected(event) {
        var files = event.target.files || event.dataTransfer.files;
        if (!files.length)
          return;
        this.createImage(files[0]);
        console.log(event.target.files[0]);
      },

      createImage(file) {
        this.package_image = new Image();
        var reader = new FileReader();
        var vm = this;

        reader.onload = (event) => {
          vm.package_image = event.target.result;
        };
        reader.readAsDataURL(file);
      },

      removeImage() {
        this.package_image = '';
      },

      onCancel() {
        this.customer_name = '';
        this.package_description = '';
        this.package_type = '';
        this.pieces = '';
        this.package_cost = '';
        this.status = '';
        this.merchant = '';
        this.delivery_company = '';
        this.tracking_number = '';
        this.weight = '';
        this.created_by = '';
        this.print_label = '';
        this.notify_customer = '';
        this.package_image = '';
      },
      onSubmit(value) {
        this.$store.commit('addPackages', value)
      },

      submitForm() {
        console.log('Form Submitted');
      }
    }
  }

</script>

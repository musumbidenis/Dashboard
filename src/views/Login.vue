<template>
  <div>
    <navbar-component></navbar-component>
    <main>
      <section class="absolute w-full h-full">
        <div
          class="absolute top-0 w-full h-full bg-gray-900"
          style="background-size: 100%; background-repeat: no-repeat;"
          :style="{'background-image': 'url(' + require('../assets/img/register_bg_2.png') + ')'}"
        ></div>
        <div class="container mx-auto px-4 h-full">
          <div class="flex content-center items-center justify-center h-full">
            <div class="w-full lg:w-4/12 px-4">
              <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0"
              >
                <div class="rounded-t mb-0 pt-6 py-6">
                  <div class="text-center">
                    <h6 class="text-gray-600 text-lg font-bold">
                      Sign In
                    </h6>
                  </div>
                  <div class="text-gray-500 text-center mb-3 font-bold">
                    <small>Sign in to continue</small>
                  </div>
                </div>
                <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <form @submit.prevent="login" method="POST">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >Employee Id</label
                      ><input
                        v-model="form.employeeId"
                        class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-xs shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="e.g emp/msu/9081/017"
                        style="transition: all 0.15s ease 0s;"
                      />
                    </div>
                    <div class="relative w-full mb-3">
                      <label
                        type="password"
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >ID NUMBER</label
                      ><input
                        v-model="form.idNumber"
                        class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-xs shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="e.g 20030405"
                        style="transition: all 0.15s ease 0s;"
                      />
                    </div>
                    <div>
                      <label class="inline-flex items-center cursor-pointer"
                        ><input
                          id="customCheckLogin"
                          type="checkbox"
                          class="form-checkbox text-gray-800 ml-1 w-5 h-5"
                          style="transition: all 0.15s ease 0s;"
                        /><span class="ml-2 text-sm font-semibold text-gray-700"
                          >Remember me</span
                        ></label>
                    </div>
                    <div class="text-center mt-6">
                      <button
                        class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="button"
                        style="transition: all 0.15s ease 0s;"
                      >
                        Sign In
                      </button>
                    </div>
                    <div class="inline-flex items-center flex-wrap ">
                        <small class="text-gray-900 font-bold mr-2">Don't have an account?</small>
                        <router-link to="/register" class="text-gray-700 font-bold"><small>Register</small></router-link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
          <footer class="absolute w-full bottom-0 bg-gray-900 pb-6">
            <div class="container mx-auto px-4">
            <hr class="mb-1 border-b-1 border-gray-700" />
            <div
               class="flex flex-wrap items-center md:justify-between justify-center"
            >
              <div class="w-full md:w-4/12 px-4">
                <div class="text-xs text-white font-semibold py-1">
                    Copyright © {{date}}
                    <a
                    href="https://www.musumbidenis.co.ke"
                    class="text-white hover:text-gray-400 text-xs py-1"
                    >Musumbi Denis</a
                    >
                </div>
              </div>
            </div>
            </div>
        </footer>
      </section>
    </main>
  </div>
</template>
<script>
import NavbarComponent from "@/components/Navbar.vue";
export default {
  components: {
    NavbarComponent,
  },
  data() {
    return {
      form:{

      },
      date: new Date().getFullYear()
    }
  },

  validations: {

  }
}
</script>
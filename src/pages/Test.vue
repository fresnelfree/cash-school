<template>
<q-page class="container">
  <div class="row">
    <div class="col-xs-12">
      <q-editor v-model="qeditor" :toolbar="[

      ]" />
    </div>
  </div>

  <q-btn color="white" @click="look()" text-color="black" label="Standard" />
  <p>{{qeditor}}</p><br>
  <p v-html="thml"></p>
</q-page>
</template>

<script>
export default {
  data() {
    return {
      qeditor: '<pre><b>edehdiejzadz.</b><br><img src="../statics/app-logo-128x128.png" /></pre>',
      thml: 'dcedcze'

    }
  },
  methods: {
    saveWork() {
      this.$q.notify({
        message: 'Saved your text to local storage',
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done'
      })
    },
    look() {
      console.log("Données : ", this.qeditor)
    },
    uploadIt() {
      this.$q.notify({
        message: 'Server unavailable. Check connectivity.',
        color: 'red-5',
        textColor: 'white',
        icon: 'warning'
      })
    }
  }
}
</script>

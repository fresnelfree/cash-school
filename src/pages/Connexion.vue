<template>
<div class=" container q-pa-md">
  <div class="row">
    <div class="col-5 offset-4">

    </div>
    <div class="col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-sm-8 offset-sm-2 col-xs-12">
      <div class="row">
        <div class="offset-4">
          <q-avatar size="100px" class="q-mb-lg">
            <q-img src="../statics/Student.png" spinner-color="grey" class="shadow-1">
            </q-img>
          </q-avatar>
        </div>
      </div>
      <q-form @submit=" onSubmit" @reset="onReset" class="q-gutter-xs">
        <q-input filled v-model="name" label="Your email *" hint="" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />

        <q-input filled v-model="name" label="Your password *" hint="" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
        <div class="">
          <q-btn outline label="Submit" type="submit" color="teal" />
          <q-btn class="q-ml-xl" flat label="Mot de passe oublié ?" color="blue" />
        </div>
      </q-form>
    </div>
    <div class="col-12 text-center q-mt-lg">
      <a style="color:black" class="text-center">Pas encore membre ? </a>
      <q-btn color="blue" flat class="q-ml-md">Créer un compte</q-btn>
    </div>
  </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      age: null,

      accept: false
    }
  },

  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset() {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>

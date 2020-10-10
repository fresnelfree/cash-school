<template>
<div class=" container">
  <div class="row">
    <div class="col-lg-4 offset-lg-3 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-xs-12">
      <q-form @submit=" onSubmit" @reset="onReset" class="">
        <q-stepper contracted flat v-model="step" ref="stepper" color="primary" animated>
          <q-step :name="1" title="" icon="settings" :done="step > 1">

            <q-input filled v-model="name" label="Nom *" hint="" lazy-rules :rules="[ val => val && val.length > 0 || 'Veuillez entrer votre nom']" clearable />

            <q-input filled v-model="name" label="Prénom *" hint="" lazy-rules :rules="[ val => val && val.length > 0 || 'Veuillez entrer votre prénom']" clearable />

            <q-input mask="# ## ## ## ##" v-model.number="tel" filled clearable bg-color="" color="black" label="Telephone *" hint="" :rules="[ val => val != null || 'Veuillez entrer votre numéro de téléphone']" />

            <q-select filled v-model="motif" :options="motifs" label="Classe" bg-color="" color="black" clearable options-selected-class="text-deep-orange" :rules="[ val => val.value && val.value.length > 0 || 'Veuillez selectionner une classe']">
            </q-select>

            <q-select filled v-model="motif" :options="motifs" label="Région" bg-color="" color="black" clearable options-selected-class="text-deep-orange" :rules="[ val => val.value && val.value.length > 0 || 'Veuillez selectionner une région']">
            </q-select>
          </q-step>

          <q-step :name="2" title="Compte" icon="create_new_account" :done="step > 2">

            <q-uploader :factory="factoryFn" url="http://localhost:4444/upload" class="q-mb-lg" style="width: 100%" />
            <q-input v-model="email" filled clearable bg-color="" color="black" label="Email *" type="email" hint="" :rules="[ val => val && val.length > 0 || 'Veuillez entrer votre email']" />

            <q-input v-model="password" filled type="password" label="Mot de passe" class="q-mb-lg" />

            <q-input v-model="password" filled label="Vérifiez le mot de passe *" :type="isPwd ? 'password' : 'text'" hint="">
              <template v-slot:append>
                <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
              </template>
            </q-input>

          </q-step>
          <q-step :name="3" title="Abonnement" icon="settings" :done="step > 3">
            <div class="row">

              <div class="col-12 shadow-4 rounded-borders q-mb-md">
                <p class="q-mt-md">
                  <q-radio v-model="color" label="Période d'essaie" val="essaie" color="teal" />
                </p>
                <q-separator />
                <p class="text-center q-mt-md">10 jours</p>
              </div>

              <div class="col-12 shadow-4 rounded-borders q-mb-md">
                <p class=" q-mt-md">
                  <q-radio v-model="color" label="Abonnement journalier" val="journalier" color="teal" />
                </p>
                <q-separator />
                <p class="text-center q-mt-md">200 FCFA</p>
              </div>

              <div class="col-12 shadow-4 rounded-borders q-mb-md">
                <p class=" q-mt-md">
                  <q-radio v-model="color" label="Abonnement hebdomadaire" val="hebdomadaire" color="teal" />
                </p>
                <q-separator />
                <p class="text-center q-mt-md">500 FCFA</p>
              </div>

              <div class="col-12 shadow-4 rounded-borders q-mb-md">
                <p class=" q-mt-md">
                  <q-radio v-model="color" label="Abonnement mensuel" val="mensuel" color="teal" />
                </p>
                <q-separator />
                <p class="text-center q-mt-md">3500 FCFA</p>
              </div>

              <div class="col-12 shadow-4 rounded-borders q-mb-md">
                <p class=" q-mt-md">
                  <q-radio v-model="color" label="Abonnement trimestriel" val="trimestriel" color="teal" />
                </p>
                <q-separator />
                <p class="text-center q-mt-md">10000 FCFA</p>
              </div>

            </div>
          </q-step>
          <template v-slot:navigation>
            <q-stepper-navigation>
              <q-btn type="submit" @click="$refs.stepper.next()" color="primary" :label="step === 3 ? 'Terminer' : 'Continue'" />
              <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
            </q-stepper-navigation>
          </template>
        </q-stepper>

        <div class="">
          <q-btn outline label="Submit" type="submit" color="teal" />
          <q-btn label="Reset" type="reset" color="red" flat class="q-ml-sm" />
        </div>
      </q-form>
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
      color: 'essaie',
      motif: '',
      password: '',
      email: '',
      tel: '6',
      step: 1,
      motifs: [],
      isPwd: true,
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
    factoryFn(files) {
      // returning a Promise

      return new Promise((resolve) => {
        // simulating a delay of 2 seconds
        setTimeout(() => {
          resolve({
            url: 'http://localhost:4444/upload'
          })
        }, 2000)
      })
    },
    onReset() {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>

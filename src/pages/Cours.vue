<template>
<q-page class="container">
  <div class="row">
    <div class="col-xs-12">
      <q-card>
        <q-page class="">
          <q-tab-panels class="" v-model="tab" animated>
            <q-tab-panel
               name="cours">
              <div class="text-h6">Cours</div>
              <p v-for="n in 5" :key="n">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
              </p>
            </q-tab-panel>

            <q-tab-panel name="exercices">
              <div class="text-h6">Exercices</div>
              <p class="" v-for="n in 5" :key="n">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
              </p>
            </q-tab-panel>

            <q-tab-panel name="correction">
              <div class="text-h6">Correction</div>
              <p v-for="n in 5" :key="n">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
              </p>
            </q-tab-panel>
          </q-tab-panels>
        </q-page>

        <q-separator />
        <q-footer bordered class="bg-white text-primary">
          <q-tabs v-model="tab" dense class="bg-red-9 text-white shadow-2" align="justify" narrow-indicator>
            <q-tab name="cours" icon="bookmarks" label="Cours" />
            <q-tab name="exercices" icon="create" label="Exercices" />
            <q-tab name="correction" icon="check" label="Correction" />
          </q-tabs>
        </q-footer>
      </q-card>
    </div>
  </div>
</q-page>
</template>

<script>
export default {
  data() {
    return {
      qeditor: '<pre><b>edehdiejzadz.</b><br><img src="../statics/app-logo-128x128.png" /></pre>',
      tab: 'cours'

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

<template>
<div class="container">
  <div class="row">
    <div class="col-md-8 q-pa-sm ">
      <div class="col-12 text-center q-mt-sm q-mb-sm text-weight-bolder">Editer un cour</div>

      <q-editor class=" " v-model="qeditor" :dense="$q.screen.lt.md" :toolbar="[
        [
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            list: 'only-icons',
            options: ['left', 'center', 'right', 'justify']
          },
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            options: ['left', 'center', 'right', 'justify']
          }
        ],
        ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
        ['token', 'hr', 'link', 'custom_btn'],
        ['print', 'fullscreen'],
        [
          {
            label: $q.lang.editor.formatting,
            icon: $q.iconSet.editor.formatting,
            list: 'no-icons',
            options: [
              'p',
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'code'
            ]
          },
          {
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7'
            ]
          },
          {
            label: $q.lang.editor.defaultFont,
            icon: $q.iconSet.editor.font,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'default_font',
              'arial',
              'arial_black',
              'comic_sans',
              'courier_new',
              'impact',
              'lucida_grande',
              'times_new_roman',
              'verdana'
            ]
          },
          'removeFormat'
        ],
        ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

        ['undo', 'redo'],
        ['viewsource']
      ]" :fonts="{
        arial: 'Arial',
        arial_black: 'Arial Black',
        comic_sans: 'Comic Sans MS',
        courier_new: 'Courier New',
        impact: 'Impact',
        lucida_grande: 'Lucida Grande',
        times_new_roman: 'Times New Roman',
        verdana: 'Verdana'
      }" />
    </div>
    <div class="col-md-4 q-pa-sm">
      <div class="col-12 text-center q-mt-sm q-mb-sm text-weight-bolder">Ajouter une image</div>

      <q-input filled v-model="name" label="Reference *" hint="" lazy-rules :rules="[ val => val && val.length > 0 || 'Veuillez entrer votre nom']" disable />
      <q-uploader :factory="factoryFn" url="http://localhost:4444/upload" class="q-mb-lg" style="width: 100%" />
      <div class="">
        <q-btn outline label="Ok" type="submit" color="teal" />
        <q-btn class="q-ml-xl" flat label="Annuler" color="red" />
      </div>
    </div>
    <div class="col-md-4">

    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      name: 'null',
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

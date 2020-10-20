<template>
<q-page class="container">
  <div class="row">
    <div class="col-md-6 shadow-1">
      <div class="row">
        <div class="col-md-6 q-pa-xs shadow-2">
          <div class="row">
            <div class="col-12 text-center q-mt-sm q-mb-sm text-weight-bolder">Type d'abonnement</div>
            <div class="col-12 q-mb-md">
              <q-input filled v-model="name" label="Nom *" hint="" lazy-rules :rules="[ val => val && val.length > 0 || 'Veuillez entrer votre nom']" clearable />
              <q-input v-model.number="montant" type="number" prefix="CFA" filled style="" />
              <div class="q-mt-lg">
                <q-btn outline label="Submit" type="submit" color="blue" />
                <q-btn label="Reset" type="reset" color="red" flat class="q-ml-lg" />
              </div>
            </div>
            <q-separator inset />
            <div class="col-12">
              <q-scroll-area :thumb-style="thumbStyle" :bar-style="barStyle" style="height: 400px; ">
                <q-table title="Type d'abonnement" :data="data" :columns="columns" row-key="name" selection="multiple" :selected.sync="selected" :filter="filter" grid hide-header>
                  <template class="q-mt-md" v-slot:top-right>
                    <q-btn class="q-mt-md" flat icon="edit" label="" color="blue" />
                    <q-btn label="" icon="delete" flat color="red" class="q-ml-md q-mt-md" />
                  </template>

                  <template v-slot:item="props">
                    <div class="q-pa-xs col-xs-12 col-sm-6 col-md-12 col-lg-3 grid-style-transition" :style="props.selected ? 'transform: scale(0.95);' : ''">
                      <q-card flat :class="props.selected ? 'bg-grey-2' : 'shadow-5'">
                        <q-card-section>
                          <q-checkbox dense v-model="props.selected" :label="props.row.name" />
                        </q-card-section>
                        <q-separator />
                        <q-list dense>
                          <q-item v-for="col in props.cols.filter(col => col.name !== 'desc')" :key="col.name">
                            <q-item-section>
                              <q-item-label>{{ col.label }}</q-item-label>
                            </q-item-section>
                            <q-item-section side>
                              <q-item-label caption>{{ col.value }}</q-item-label>
                            </q-item-section>
                          </q-item>
                        </q-list>
                      </q-card>
                    </div>
                  </template>
                </q-table>
              </q-scroll-area>
            </div>
          </div>
        </div>

        <div class="col-md-6 q-pa-xs">
          <div class="col-12 text-center text-weight-bolder q-mt-sm q-mb-sm ">Periode d'éssaie</div>

          <div class="row">
            <div class="col-12 q-mb-md">
              <q-input filled v-model="date_debut" mask="date" :rules="['date']">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                      <q-date v-model="date_debut">
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Close" color="primary" flat />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <q-input filled class="q-mb-xs" v-model="date_fin" mask="date" :rules="['date']">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                      <q-date v-model="date_fin">
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Close" color="primary" flat />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <div class="">
                <q-btn outline label="Submit" type="submit" color="blue" />
                <q-btn label="Reset" type="reset" color="red" flat class="q-ml-lg" />
              </div>
            </div>
            <q-separator inset />
            <div class="col-12">
              <q-scroll-area :thumb-style="thumbStyle" :bar-style="barStyle" style="height: 400px; ">
                <q-table title="Periode d'éssaie" :data="data" :columns="columns" row-key="name" selection="multiple" :selected.sync="selected" :filter="filter" grid hide-header>
                  <template class="q-mt-md" v-slot:top-right>
                    <q-btn class="q-mt-md" flat icon="edit" label="" color="blue" />
                    <q-btn label="" flat icon="delete" color="red" class="q-ml-md q-mt-md" />
                  </template>

                  <template v-slot:item="props">
                    <div class="q-pa-xs col-xs-12 col-sm-6 col-md-12 col-lg-3 grid-style-transition" :style="props.selected ? 'transform: scale(0.95);' : ''">
                      <q-card flat :class="props.selected ? 'bg-grey-2' : ''">
                        <q-card-section>
                          <q-checkbox dense v-model="props.selected" :label="props.row.name" />
                        </q-card-section>
                        <q-separator />
                        <q-list dense>
                          <q-item v-for="col in props.cols.filter(col => col.name !== 'desc')" :key="col.name">
                            <q-item-section>
                              <q-item-label>{{ col.label }}</q-item-label>
                            </q-item-section>
                            <q-item-section side>
                              <q-item-label caption>{{ col.value }}</q-item-label>
                            </q-item-section>
                          </q-item>
                        </q-list>
                      </q-card>
                    </div>
                  </template>
                </q-table>
              </q-scroll-area>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="row q-pa-xs">
        <div class="col-12 text-center q-mt-sm q-mb-sm text-weight-bolder">Classe</div>
        <div class="col-md-6">
          <div class="col-6">
            <q-input filled v-model="name" label="Nom *" hint="" lazy-rules :rules="[ val => val && val.length > 0 || 'Veuillez entrer votre nom']" clearable />
            <q-btn color="blue" flat class="q-ml-md">Ajouter une matière</q-btn>
            <q-option-group :options="options" label="Notifications" type="checkbox" v-model="group" />
            <div class="q-mt-md">
              <q-btn outline label="Submit" type="submit" color="blue" class="q-ml-sm" />
              <q-btn label="Reset" type="reset" color="red" flat class="q-ml-lg" />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <q-scroll-area :thumb-style="thumbStyle" :bar-style="barStyle" style="height: 300px; ">
            <q-table title="Classes" :data="data" :columns="columns" row-key="name" selection="multiple" :selected.sync="selected" :filter="filter" grid hide-header>
              <template class="q-mt-md" v-slot:top-right>
                <q-btn class="q-mt-md" flat icon="edit" label="" color="blue" />
                <q-btn label="" flat icon="delete" color="red" class="q-ml-md q-mt-md" />
              </template>

              <template v-slot:item="props">
                <div class="q-pa-xs col-xs-12 col-sm-6 col-md-12 col-lg-3 grid-style-transition" :style="props.selected ? 'transform: scale(0.95);' : ''">
                  <q-card flat :class="props.selected ? 'bg-grey-2' : ''">
                    <q-card-section>
                      <q-checkbox dense v-model="props.selected" :label="props.row.name" />
                    </q-card-section>
                    <q-separator />
                    <q-list dense>
                      <q-item v-for="col in props.cols.filter(col => col.name !== 'desc')" :key="col.name">
                        <q-item-section>
                          <q-item-label>{{ col.label }}</q-item-label>
                        </q-item-section>
                        <q-item-section side>
                          <q-item-label caption>{{ col.value }}</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-card>
                </div>
              </template>
            </q-table>
          </q-scroll-area>
        </div>
      </div>
      <div class="row q-pa-xs">
        <div class="col-12 text-center q-mt-md q-mb-sm text-weight-bolder">Responsable</div>

        <div class="col-6 q-pa-xs">
          <q-input filled v-model="name" label="Nom *" hint="" lazy-rules :rules="[ val => val && val.length > 0 || 'Veuillez entrer votre nom']" clearable />
          <q-input v-model="email" filled clearable bg-color="" color="black" label="Email *" type="email" hint="" :rules="[ val => val && val.length > 0 || 'Veuillez entrer votre email']" />

        </div>
        <div class="col-6 q-pa-xs">
          <q-input mask="# ## ## ## ##" v-model.number="tel" filled clearable bg-color="" color="black" label="Telephone *" hint="" :rules="[ val => val != null || 'Veuillez entrer votre numéro de téléphone']" />
          <q-select filled v-model="motif" :options="motifs" label="Classe" bg-color="" color="black" clearable options-selected-class="text-deep-orange" :rules="[ val => val.value && val.value.length > 0 || 'Veuillez selectionner une classe']">
          </q-select>
        </div>
        <div class="col-12 q-pa-xs">
          <q-input filled v-model="name" label="Mot de passe *" hint="" lazy-rules :rules="[ val => val && val.length > 0 || 'Veuillez entrer votre nom']" clearable />
        </div>
        <div class="q-mt-md">
          <q-btn outline label="Submit" type="submit" color="blue" class="q-ml-xl" />
          <q-btn label="Reset" type="reset" color="red" flat class="q-ml-lg" />
        </div>
      </div>
    </div>
  </div>

</q-page>
</template>

<script>
export default {
  data() {
    return {
      date_fin: '2019/02/01',
      group: [],
      tel: '6',
      options: [{
          label: 'Battery too low',
          value: 'bat'
        },
        {
          label: 'Friend request',
          value: 'friend',
          color: 'green'
        },
        {
          label: 'Picture uploaded',
          value: 'upload',
          color: 'red'
        }
      ],
      date_debut: '2019/02/01',
      montant: 100,
      filter: '',
      selected: [],
      columns: [{
          name: 'desc',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'calcium',
          label: 'Calcium (%)',
          field: 'calcium',
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        },
      ],
      data: [{
          name: 'Frozen Yogurt',
          calcium: '14%',
        },
        {
          name: 'Ice cream sandwich',
          calcium: '8%',
        },
        {
          name: 'Frozen Yogurt',
          calcium: '14%',
        },
        {
          name: 'Ice cream sandwich',
          calcium: '8%',
        }
      ],
      thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      },
      barStyle: {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: '#027be3',
        width: '9px',
        opacity: 0.2
      }
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

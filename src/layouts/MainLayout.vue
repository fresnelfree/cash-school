<template>
<q-layout view="lHh Lpr lFf">
  <q-header style="width:100%;" elevated class="bg-red-9">
    <q-toolbar>
      <q-btn flat dense round icon=" menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen" />

      <q-toolbar-title>
        CASH-SCHOOL
      </q-toolbar-title>

      <div></div>
    </q-toolbar>
  </q-header>

  <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-1">
    <q-scroll-area style="height: calc(100% - 50px); margin-top: 170px; border-right: 1px solid #ddd" class="bg-red-3">
      <q-list padding>
        <EssentialLink v-model="menu" v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-scroll-area>
    <q-list>
      <q-img class="absolute-top" src="../statics/logo.jpeg" style="height: 170px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="">
            <img class="" src="../statics/boy-avatar.png">
          </q-avatar>
          <div class="text-red-5 text-weight-bold">Razvan </div>
          <div class="text-red-5 text-weight-bold">Stoenescu</div>
        </div>
      </q-img>
    </q-list>
  </q-drawer>

  <q-page-container>
    <router-view />
  </q-page-container>
</q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data() {
    return {
      leftDrawerOpen: false,
      menu: '',
      essentialLinks: [{
          title: 'Cours',
          caption: 'quasar.dev',
          icon: 'school',
          link: '/'
        },
        {
          title: 'connexion',
          caption: 'github.com/quasarframework',
          icon: 'code',
          link: '/connexion'
        },
        {
          title: 'Paiement',
          caption: 'chat.quasar.dev',
          icon: 'chat',
          link: 'paiement'
        },
        {
          title: 'compte',
          caption: '@quasarframework',
          icon: 'rss_feed',
          link: 'creer_compte'
        },
        {
          title: 'Responsable',
          caption: '@QuasarFramework',
          icon: 'public',
          link: '/responsable'
        }
      ]
    }
  }
}
</script>

<template>
  <q-layout view="hHh lpR fFf" class=" bg-dark q-pa-xl">
    <div :class="layout.profile">
      <q-card
        :class="layout.profile_card"
        bordered
        :style="layout.width"
      >
        <ProfileComponent/>
      </q-card>

      <q-page-container class="col-lg-7 col-sm-6 col-xs-12 ">
        <q-card class="bg-grey-10 text-grey-4" :style="layout.width">
          <router-view />
        </q-card>
      </q-page-container>
    </div>
  </q-layout>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';

import { onMounted } from 'vue';
import  ProfileComponent  from '../view/components/ProfileComponent.vue'
import ProfileService from '../controller/services/profile.service'
import { computed } from 'vue';

const $q = useQuasar()
$q.screen.setSizes({ sm: 1024, md: 1280, lg: 1680, xl: 1920})
const layout = computed(() => {
  console.log($q.screen.width)
  return $q.screen.lt.lg ?
  {
    profile: 'justify-center column',
    profile_card: 'col-2 bg-grey-10 text-grey-4 q-mr-lg q-mb-lg',
    width: 'border-radius: 16px;',
  } :
  {
    profile: 'justify-center row',
    profile_card: 'col-2 bg-grey-10 text-grey-4 q-mr-lg',
    width: 'height: max-content; border-radius: 16px',
  }

})


onMounted(async () => {
  await ProfileService.getProfile().then((r) => {
    console.log(r.data)
  })
})
</script>

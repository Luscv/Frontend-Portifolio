<template>
  <q-layout :class="layout.main">
    <div :class="layout.profile">
      <q-card
        :class="layout.profile_card"
        bordered
        :style="layout.width"
      >
        <ProfileComponent/>
      </q-card>

      <q-page-container class="col-7">
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
$q.screen.setSizes({ sm: 790, md: 1024, lg: 1280, xl: 1760})
const layout = computed(() => {
  if($q.screen.lt.sm){
    return{
      main: 'bg-dark q-pa-sm',
      profile: 'justify-center column',
      profile_card: 'col-2 bg-grey-10 text-grey-4 q-mb-lg',
      width: 'border-radius: 16px;',
    }
  }
  if($q.screen.lt.md){
    return{
      main: 'bg-dark q-pa-md',
      profile: 'justify-center column',
      profile_card: 'col-2 bg-grey-10 text-grey-4 q-mb-lg',
      width: 'border-radius: 16px;',
    }
  }
  if($q.screen.lt.lg){
    return{
      main: 'bg-dark q-pa-lg',
      profile: 'justify-center column',
      profile_card: 'col-2 bg-grey-10 text-grey-4 q-mb-lg',
      width: 'border-radius: 16px;',
    }
  }
  if($q.screen.lt.xl){
    return{
      main: 'bg-dark q-pa-xl',
      profile: 'justify-center column',
      profile_card: 'col-2 bg-grey-10 text-grey-4 q-mb-lg',
      width: 'border-radius: 16px;',
    }
  } return {
    main: 'bg-dark q-pa-xl',
    profile: 'justify-center row q-col-gutter-lg',
    profile_card: 'col-2 bg-grey-10 text-grey-4 q-mt-lg',
    width: 'height: max-content; border-radius: 16px',
  }

})


onMounted(async () => {
  await ProfileService.getProfile().then((r) => {
    console.log(r.data)
  })
})
</script>

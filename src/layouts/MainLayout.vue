<template>
  <q-layout view="hHh lpR fFf" class=" bg-dark q-pa-xl">
    <div :class="layout">
      <q-card
        class="col-2 bg-grey-10 text-grey-4 q-mr-lg"
        bordered
        style="
          height: max-content;
          border-radius: 16px;
        "
      >
        <ProfileComponent/>
      </q-card>

      <q-page-container class="col-lg-7 col-sm-6 col-xs-12 ">
        <q-card class="bg-grey-10 text-grey-4" style="height: max-content; border-radius: 16px;">
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
$q.screen.setSizes({ sm: 1024, md: 1280, lg: 1440, xl: 1920})
const layout = computed(() => {
  console.log($q.screen.width)
  return $q.screen.lt.lg ? 'justify-center column q-col-gutter-sm' : 'justify-center row'
  
})


onMounted(async () => {
  await ProfileService.getProfile().then((r) => {
    console.log(r.data)
  })
})
</script>
<style lang="scss">
q-layout.screen--lg{
  .my-div {
    color: #000;
  }
}

q-layout.screen--md {
  .my-div {
    color: #fff;
  }
}
</style>
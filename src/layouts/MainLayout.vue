<template>
  <q-layout view="hHh lpR fFf" class="bg-dark q-pa-xl">
    <div class="justify-center row">
      <q-card class="col-2 bg-grey-10 text-grey-4 q-mr-lg">
        <ProfileComponent/>
      </q-card>

      <q-page-container class="col-lg-9 col-sm-6 col-xs-12 ">
        <q-card class="bg-grey-10 text-grey-4">
          <router-view />
        </q-card>
      </q-page-container>
    </div>
  </q-layout>
</template>

<script setup lang="ts">
import  ProfileComponent  from '../view/components/ProfileComponent.vue'
</script>

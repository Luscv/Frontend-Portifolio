<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-9 q-pa-xl">
    <div class="justify-center q-my-xl row q-col-gutter-md">
      <q-card class="col-lg-2 col-sm-6 col-xs-12 q-mt-md">
        <ProfileComponent/>
      </q-card>

      <q-page-container class="col-lg-9 col-sm-6 col-xs-12">
        <q-card>
          <router-view />
        </q-card>
      </q-page-container>
    </div>
  </q-layout>
</template>

<script setup lang="ts">
import  ProfileComponent  from '../view/components/ProfileComponent.vue'
</script>

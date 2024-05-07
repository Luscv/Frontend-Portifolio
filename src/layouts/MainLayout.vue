<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-9 q-pa-xl">
    <div class="justify-center q-my-xl row q-col-gutter-md">
      <q-card class="col-lg-2 col-sm-6 col-xs-12 q-mt-md">
        <q-avatar
          rounded
          size="100px"
          font-size="82px"
          color="teal"
          text-color="white"
          icon="directions"
        >
        </q-avatar>
      </q-card>

      <q-page-container class="col-lg-9 col-sm-6 col-xs-12">
        <q-card>
          <router-view />
        </q-card>
      </q-page-container>
    </div>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup() {
    return {};
  },
});
</script>

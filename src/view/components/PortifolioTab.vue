<template>
    <q-tabs
          v-model="tab"
          
          active-color="primary"
          indicator-color="transparent"
        >
          <q-tab name="frontend" label="FrontEnd"/>
          <q-tab name="mobile" label="Mobile"/>
          <q-tab name="backend" label="Backend"/>
          <q-tab name="university" label="University" />
          <q-tab name="other" label="Other" />
        </q-tabs>
</template>
<script setup lang="ts">
import { ref } from 'vue';



const tab = ref('')


</script>

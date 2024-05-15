<template>
  <q-page>
    <div class="row justify-between">
      <q-toolbar class="q-pt-lg q-pl-lg items-end" style="width: min-content;">
        <q-toolbar-title class="text-h3">
          {{ tab }}
        </q-toolbar-title>
        
        
      </q-toolbar>
      <q-tabs
          v-model="tab"
          
          active-color="primary"
          indicator-color="transparent"
          class="bg-grey-9 q-pl-xl q-pr-lg"
          style="width: max-content; border-bottom-left-radius: 60px; border-top-right-radius: 16px;"
        >
          <q-tab name="About" label="About"/>
          <q-tab name="Resume" label="Resume" />
          <q-tab name="Portifolio" label="Portifolio" />
          <q-tab name="Contact" label="Contact" />
        </q-tabs>
    </div>
      <q-separator color="primary" class="text-center q-mt-md q-ml-lg" style="width: 45px; height: 5px; border-radius: 20px;"/>
      <q-tab-panels class="bg-grey-10" v-model="tab" animated>
          <q-tab-panel name="About">
            <AboutTab/>
          </q-tab-panel>
          <q-tab-panel name="Resume">
            <ResumeTab/>
          </q-tab-panel>
          <q-tab-panel name="Portifolio">
            <PortifolioTab/>
          </q-tab-panel>
          <q-tab-panel name="Contact">
            <ContactTab/>
          </q-tab-panel>
      </q-tab-panels>
    <div></div>

  </q-page>

</template>
<script setup lang="ts">
import { ref } from 'vue';
import AboutTab from '../components/AboutTab.vue';
import ResumeTab from '../components/ResumeTab.vue';
import PortifolioTab from '../components/PortifolioTab.vue';
import ContactTab from '../components/ContactTab.vue';


const tab = ref('About')
</script>

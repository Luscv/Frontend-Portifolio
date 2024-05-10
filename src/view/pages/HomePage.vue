<template>
  <q-page>
    <div class="row justify-end">
      <q-tabs
        v-model="tab"
        
        active-color="primary"
        indicator-color="transparent"
        align="right"
        class="bg-grey-9 q-py-sm q-px-xl"
        style="width: max-content; border-bottom-left-radius: 40px;"
      >
        <q-tab name="About" label="About"/>
        <q-tab name="Resume" label="Resume" />
        <q-tab name="Portifolio" label="Portifolio" />
        <q-tab name="Contact" label="Contact" />
      </q-tabs>
    </div>
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

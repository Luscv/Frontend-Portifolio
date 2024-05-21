<template>
  <q-page>
    <div :class="layout.toolbar">
      <q-toolbar class="q-pt-lg q-pl-lg items-end" style="width: min-content;">
        <q-toolbar-title class="text-h3">
          {{ tab }}
        </q-toolbar-title>


      </q-toolbar>
      <div :class="layout.toolbar_menu">
        <q-tabs
          v-model="tab"

          active-color="primary"
          indicator-color="transparent"
          :class="layout.tabs_class"
          :style="layout.tabs_style"
        >
          <q-tab name="About" label="About"/>
          <q-tab name="Resume" label="Resume" />
          <q-tab name="Portifolio" label="Portifolio" />
          <!-- <q-tab name="Contact" label="Contact" /> -->
        </q-tabs>
      </div>
      
    </div>
    <div>
      <q-separator color="primary" class="text-center q-mt-md q-ml-lg" style="width: 45px; height: 5px; border-radius: 20px;"/>
      <q-tab-panels class="bg-grey-10" v-model="tab" animated style="border-radius: 16px;">
          <q-tab-panel name="About">
            <AboutTab/>
          </q-tab-panel>
          <q-tab-panel name="Resume">
            <ResumeTab/>
          </q-tab-panel>
          <q-tab-panel name="Portifolio">
            <PortifolioTab/>
          </q-tab-panel>
          <!-- <q-tab-panel name="Contact">
            <ContactTab/>
          </q-tab-panel> -->
      </q-tab-panels>
    </div>

  </q-page>

</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import AboutTab from '../components/AboutTab.vue';
import ResumeTab from '../components/ResumeTab.vue';
import PortifolioTab from '../components/PortifolioTab.vue';
import { Screen } from 'quasar';
import ContactTab from '../components/ContactTab.vue';


const tab = ref('About')


const layout = computed(() => {
  if(Screen.lt.sm){
    return {
      toolbar: 'column reverse',
      toolbar_menu:'row justify-center',
      tabs_style: 'width: max-content; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px ',
      tabs_class: 'bg-grey-9 q-px-lg',
    }
  }
  if(Screen.lt.md){
    return {
      toolbar: 'row justify-between',
      toolbar_menu:'',
      tabs_style: 'width: max-content; border-bottom-left-radius: 60px; border-top-right-radius: 16px;',
      tabs_class: 'bg-grey-9 q-pl-xl q-pr-lg',
    }
  }
  if(Screen.lt.lg){
    return {
      toolbar: 'row justify-between',
      toolbar_menu:'',
      tabs_style: 'width: max-content; border-bottom-left-radius: 60px; border-top-right-radius: 16px;',
      tabs_class: 'bg-grey-9 q-pl-xl q-pr-lg',
    }
  }
  if(Screen.lt.xl){
    return {
      toolbar: 'row justify-between',
      toolbar_menu:'',
      tabs_style: 'width: max-content; border-bottom-left-radius: 60px; border-top-right-radius: 16px;',
      tabs_class: 'bg-grey-9 q-pl-xl q-pr-lg',
    }
  }
  return {
    toolbar: 'row justify-between',
    toolbar_menu:'',
    tabs_style: 'width: max-content; border-bottom-left-radius: 60px; border-top-right-radius: 16px;',
    tabs_class: 'bg-grey-9 q-pl-xl q-pr-lg',
  }
})
</script>

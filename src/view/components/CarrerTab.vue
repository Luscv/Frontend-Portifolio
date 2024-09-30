<template>
  <div class="q-mx-xl">
    <q-timeline color="primary" layout="loose">
      <q-timeline-entry v-for="entry in carrer" v-bind:key="entry.id"
        :title="`${entry.title} - ${entry.institution}`"
        :subtitle="entry.period"
        :body="entry.description"
        :icon="entry.icon"
        :side="entry.carrerSection === 'education' ? 'right' : 'left'"
      >
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue';
import Carrer from '../data/profile.data'
import { useI18n } from 'vue-i18n';
import { CarrerEntity } from '@/model/entity/Carrer.entity';

const data = reactive(Carrer)
const carrer = ref<Array<CarrerEntity>>()

const {locale} = useI18n()

watch(locale, async(newLang, oldLang) => {
await data.getCarrer(locale.value).then((res) => {
    carrer.value = res
      console.log(carrer.value)
      return carrer.value
  })
})

onMounted(async () => {

  await data.getCarrer(locale.value).then((res) => {
      carrer.value = res
      console.log(carrer.value)
      return carrer.value
  })
})

</script>

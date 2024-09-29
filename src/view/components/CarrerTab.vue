<template>
  <div class="q-mx-xl">
    <q-timeline color="primary" layout="dense" side="right">
      <q-timeline-entry
        title="Experience"
        icon="o_work"
      >
      </q-timeline-entry>
      <q-timeline-entry v-for="entry in timeline_entries.jobs" v-bind:key="entry.id"
        :title="entry.title"
        :subtitle="entry.date"
        :body="entry.body"
        side="left"
      >
      </q-timeline-entry>
    </q-timeline>
    <q-timeline color="primary" layout="dense" side="right" class="q-mt-md">
      <q-timeline-entry
        title="Education"
        icon="school"
      >
      </q-timeline-entry>
      <q-timeline-entry v-for="entry in timeline_entries.education" v-bind:key="entry.id"
        :title="entry.title"
        :subtitle="entry.date"
        :body="entry.body"
      >
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import Experience from '../data/local/experience.data'

const timeline_entries = reactive(Experience)

</script>

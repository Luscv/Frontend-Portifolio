<template>
  <div class="q-mx-md">
    <q-timeline color="primary" layout="loose">
      <q-timeline-entry tag="h4" heading>
        Experience
      </q-timeline-entry>
      <q-timeline-entry
        title="Carrer start"
        subtitle="12/12/2022"
        icon="o_work"
      >
      </q-timeline-entry>
      <q-timeline-entry v-for="entry in work_timeline_entries" v-bind:key="entry.id"
        :title="entry.title"
        :subtitle="entry.subtitle"
        :body="entry.body"
        side="left"
      >
      </q-timeline-entry>
    </q-timeline>
    <q-timeline color="primary" layout="loose" class="q-mt-md">
      <q-timeline-entry tag="h4" heading>
        Education
      </q-timeline-entry>
      <q-timeline-entry
        title="Education start"
        subtitle="12/12/2018"
        icon="school"
      >
      </q-timeline-entry>
      <q-timeline-entry v-for="entry in education_timeline_entries" v-bind:key="entry.id"
        :title="entry.title"
        :subtitle="entry.subtitle"
        :body="entry.body"
      >
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>
<script setup lang="ts">
const work_timeline_entries = [
  {
    id: 1,
    title: "Experience 1",
    subtitle: "12/12/2022",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Experience 2",
    subtitle: "12/12/2023",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Experience 3",
    subtitle: "12/12/2023",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
] 

const education_timeline_entries = [
  {
    id: 1,
    title: "Study 1",
    subtitle: "12/12/2018",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Study 2",
    subtitle: "12/12/2022",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Study 3",
    subtitle: "12/12/2023",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    title: "Study 4",
    subtitle: "12/12/2024",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
] 
</script>
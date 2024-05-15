<template>
    <q-card bordered class="bg-grey-10 q-pa-lg"
      style="border-radius: 8px;"
    >
        <div class="row no-wrap items-center">
            <div class="q-ma-md">
                <q-icon class="" size="lg" color="primary" :name="props.icon"/>
            </div>
            <div class="q-mr-sm">
                <div class="text-h6">{{props.tech}}</div>
                <div>{{ props.description }}</div>
            </div>
        </div>
    </q-card>
</template>
<script setup lang="ts">
const props = defineProps(
    {
        tech: String,
        description: String,
        icon: String,
    }
)

</script>

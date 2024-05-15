<template>
    <q-card bordered class="bg-grey-10 q-pa-lg"
      style="border-radius: 8px;"
    >
        <div class="column no-wrap items-center">
            <div class="">
                <q-img ratio="16/9" src="https://picsum.photos/500/300"/>
            </div>
            <div class="">
                <div class="text-subtitle text-center">{{props.name}}</div>
                <div class="text-caption text-grey-6"> Language: {{ props.language ? props.language : 'Not Found' }}</div>
                <!-- <div class="text-caption">{{ props.description }}</div> -->
            </div>
        </div>
    </q-card>
</template>
<script setup lang="ts">
const props = defineProps(
    {
        img: String,
        description: String,
        name: String,
        language: String,
    }
)

</script>

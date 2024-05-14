<template>
    <div class="row justify-end">
            <q-tabs
            v-model="tab"
            
            active-color="primary"
            indicator-color="transparent"
            align="right"
            class="bg-grey-9 q-py-sm q-px-xl"
            style="width: max-content; border-bottom-left-radius: 40px;"
            >
                <q-tab name="About" label="About" />
                <q-tab name="Resume" label="Resume" />
                <q-tab name="Portifolio" label="Portifolio" />
                <q-tab name="Contact" label="Contact" />
            </q-tabs>
        </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const tab = ref('About')
</script>
<template>
    <div>
       {{ about.bio }}
    </div>
    <div>
        <div class="text-h4 q-mt-lg">Techs</div>
        <div class="row justify-evenly">
            <TechCards v-for="tech in about.tech" v-bind:key="tech.id" 
                :tech="tech.title"
                :icon="tech.icon"
                :description="tech.description" 
                class="q-mt-md col-5"
            />
        </div>
        
    </div>
    <div>
        <div class="text-h4 q-mt-lg">Hobbies</div>
    </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import TechCards from './TechCards.vue'
import About from '../data/local/about.data'

const about = reactive(About)

</script>
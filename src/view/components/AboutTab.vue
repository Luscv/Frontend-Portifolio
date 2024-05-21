<template>
    <div>
       <div>
        {{ about.bio }}
        </div>
        <div>
            <div class="text-h4 q-mt-lg">Goals</div>
            <div class="q-mt-md">{{ about.objetivos }}</div>
        </div>
        <div>
            <div class="text-h4 q-mt-lg">Techs</div>
            <div :class="layout.divCardContainer" >
                <TechCards v-for="tech in about.tech" v-bind:key="tech.id" 
                    :tech="tech.title"
                    :icon="tech.icon"
                    :description="tech.description" 
                    :class="layout.techCard_component"
                    
                />
            </div>
            
        </div> 
    </div>
    
    <!-- <div>
        <div class="text-h4 q-mt-lg">Hobbies</div>
    </div> -->
</template>
<script setup lang="ts">
import { reactive, computed } from 'vue';
import { Screen } from 'quasar';
import TechCards from './TechCards.vue'
import About from '../data/local/about.data'


const about = reactive(About)

const layout = computed(() => {
    if(Screen.lt.sm){
        return {
            techCard_component: 'q-mt-md col-11',
            divCardContainer: 'row q-my-sm justify-center q-gutter-sm'
        }
    }
    if(Screen.lt.md){
        return {
            divCardContainer: 'row q-my-sm justify-center q-gutter-lg',
            techCard_component: 'q-mt-md col-10',
        }
    }
    if(Screen.lt.lg){
        return {
            divCardContainer: 'row q-my-sm justify-center q-gutter-lg',
            techCard_component: 'q-mt-md col-5',
        }
    }
    if(Screen.lt.xl){
        return {
            divCardContainer: 'row q-my-sm justify-center q-gutter-xl',
            techCard_component: 'q-mt-md col-3',
        }
    }
    return{
        divCardContainer: 'row q-my-sm justify-center q-gutter-xl',
        techCard_component: 'q-mt-md col-5',
    }
});

</script>
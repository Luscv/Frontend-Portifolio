<template>
    <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla metus sit amet sem accumsan semper. Phasellus gravida pharetra felis sed rutrum. Integer ornare pulvinar tortor ut scelerisque. In hac habitasse platea dictumst. Fusce accumsan ante id purus vehicula, ac ornare erat ultricies. Proin ac cursus felis. Vivamus quis fringilla erat. Nam volutpat, ante ut iaculis imperdiet, velit tellus bibendum sem, vel blandit lorem felis in ligula. Fusce semper leo et magna eleifend interdum.
        Nullam pulvinar molestie tempor. Praesent rutrum molestie diam nec porttitor. Phasellus blandit metus nec dui tempus, id pulvinar quam luctus. Sed pretium feugiat neque, ut rhoncus libero condimentum in. Suspendisse blandit hendrerit odio id sollicitudin. Morbi quis ultrices libero, a molestie tortor. Sed dignissim massa quis blandit maximus. In volutpat, nisl sit amet ultrices rhoncus, ante lectus dignissim tellus, a tincidunt odio nisi faucibus neque. Nam at ante felis.

    </div>
    <div>
        <div class="text-h4 q-mt-lg">Techs</div>
        <div class="row justify-evenly">
            <TechCards v-for="tech in Techs" v-bind:key="tech.id" 
                :tech="tech.title"
                :icon="tech.icon"
                :description="tech.description" 
                class="q-mt-md"
            />
        </div>
        
    </div>
    <div>
        <div class="text-h4 q-mt-lg">Hobbies</div>
    </div>
</template>
<script setup lang="ts">
import TechCards from './TechCards.vue'

const Techs = [
    {
        id: 1,
        title: 'Vue',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: 'o_code'
    },
    {
        id: 2,
        title: 'React Native',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: 'o_code'
    },
    {
        id: 3,
        title: 'Pinia',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: 'o_build'
    },
    {
        id: 4,
        title: 'Quasar',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: 'o_build'
    },
]

</script>
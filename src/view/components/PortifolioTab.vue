<template>
    <q-tabs
          v-model="tab"  
          active-color="primary"
          indicator-color="transparent"
        >
            <q-tab name="all" label="All" @click="allRepo"/>
            <q-tab name="frontend" label="FrontEnd" @click="frontendRepo"/>
            <q-tab name="mobile" label="Mobile" @click="mobileRepo"/>
            <q-tab name="university" label="University" @click="universityRepo"/>
            <!-- <q-tab name="other" label="Other" /> -->
        </q-tabs>
        <div class="q-ma-sm text-caption text-grey-6">Mostrando {{ projects.length }} resultados:</div>
        <q-tab-panels class="bg-grey-10" v-model="tab" animated>
          <q-tab-panel name="all">
            <div :class="layout.card">
                <ProjectsCards
                    v-for="project in projects" v-bind:key="project.id"
                    :name="project.name"
                    :language="project.language"
                    :description="project.description"
                    :url="project.html_url"
                    :class="layout.repoCard_component"
                />
            </div>
          </q-tab-panel>
          <q-tab-panel name="frontend">
            <div :class="layout.card">
                <ProjectsCards
                    v-for="project in projects" v-bind:key="project.id"
                    :name="project.name"
                    :language="project.language"
                    :description="project.description"
                    :url="project.html_url"
                    :class="layout.repoCard_component"
                />
            </div>
          </q-tab-panel>
          <q-tab-panel name="mobile">
            <div :class="layout.card">
                <ProjectsCards
                    v-for="project in projects" v-bind:key="project.id"
                    :name="project.name"
                    :language="project.language"
                    :description="project.description"
                    :url="project.html_url"
                    :class="layout.repoCard_component"
                />
            </div>
          </q-tab-panel>
          <q-tab-panel name="university">
            <div :class="layout.card">
                <ProjectsCards
                    v-for="project in projects" v-bind:key="project.id"
                    :name="project.name"
                    :language="project.language"
                    :description="project.description"
                    :full_name="project.full_name"
                    :default_branch="project.default_branch"
                    :url="project.html_url"
                    :class="layout.repoCard_component"
                />
            </div>
          </q-tab-panel>
      </q-tab-panels>
</template>
<script setup lang="ts">
import { reactive, ref, onMounted, computed } from 'vue';
import Repositories from '../data/projects.data';
import ProjectsCards from './ProjectsCards.vue'
import { ProjectEntity } from '@/model/entity/Project.entity';
import { Screen } from 'quasar';


const data = reactive(Repositories)
const projects = ref<Array<ProjectEntity>>([])
const tab = ref('all')


const layout = computed(() => {
    if(Screen.lt.sm){
        return {
            repoCard_component: 'col-8',
            card: 'row justify-center q-gutter-xl',
        }
    }
    if(Screen.lt.md){
        return {
            repoCard_component: 'col-5',
            card: 'row justify-center q-gutter-xl',
        }
    }
    if(Screen.lt.lg){
        return {
            repoCard_component: 'col-3',
            card: 'row justify-center q-gutter-xl',
        }
    }
    if(Screen.lt.xl){
        return {
            repoCard_component: 'col-3',
            card: 'row justify-center q-gutter-xl',
        }
    }
    return{ 
        repoCard_component: 'col-3',
        card: 'row justify-center q-gutter-xl',
    }
});



async function frontendRepo(){
    return await data.getFrontendRepositories().then((res) =>{
        projects.value = res
        return projects.value
    })
}

async function mobileRepo(){
    return await data.getMobileRepositories().then((res) =>{
        projects.value = res
        return projects.value
    })
}

async function universityRepo(){
    return await data.getUniversityRepositories().then((res) =>{
        projects.value = res
        return projects.value
    })
}

async function allRepo(){
    await data.getMyRepositories().then((res) => {
        projects.value = res
        return projects.value
    })
}

async function otherRepo(){
    return await data.getOtherRepositories().then((res) =>{
        projects.value = res
        return projects.value
    })
}

onMounted(async () => {
    await data.getMyRepositories().then((res) => {
        projects.value = res
        console.log(projects.value)
        
        return projects.value
    })
})
</script>

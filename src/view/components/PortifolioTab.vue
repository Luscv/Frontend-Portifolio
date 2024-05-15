<template>
    <q-tabs
          v-model="tab"
          
          active-color="primary"
          indicator-color="transparent"
        >
            <q-tab name="all" label="All"/>
            <q-tab name="frontend" label="FrontEnd"/>
            <q-tab name="mobile" label="Mobile"/>
            <q-tab name="university" label="University" />
            <!-- <q-tab name="other" label="Other" /> -->
        </q-tabs>
        <q-tab-panels class="bg-grey-10" v-model="tab" animated>
          <q-tab-panel name="all">
            <div class="row justify-evenly q-gutter-sm">
                <ProjectsCards
                    v-for="project in projects" v-bind:key="project.id"
                    :name="project.name"
                    :language="project.language"
                    :description="project.description"
                    class="col-3"
                />
            </div>
          </q-tab-panel>
          <q-tab-panel name="frontend">
            frontend
          </q-tab-panel>
          <q-tab-panel name="mobile">
            mobile
          </q-tab-panel>
          <q-tab-panel name="university">
            university
          </q-tab-panel>
      </q-tab-panels>
</template>
<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import Repositories from '../data/projects.data';
import ProjectsCards from './ProjectsCards.vue'
import { ProjectEntity } from '@/model/entity/Project.entity';


const data = reactive(Repositories)
const projects = ref<Array<ProjectEntity>>([])
const tab = ref('all')

async function frontendRepo(){
    return await data.getFrontendRepositories().then((res) =>{
        return res
    })
}

async function mobileRepo(){
    return await data.getMobileRepositories().then((res) =>{
        return res
    })
}

async function universityRepo(){
    return await data.getUniversityRepositories().then((res) =>{
        return res
    })
}

async function otherRepo(){
    return await data.getOtherRepositories().then((res) =>{
        return res
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

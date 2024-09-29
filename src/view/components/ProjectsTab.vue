<template>
    <q-tabs
          v-model="tab"
          active-color="primary"
          indicator-color="transparent"
        >
            <q-tab name="all" :label="$t('all')"/>
            <q-tab name="front-end" label="FrontEnd"/>
            <q-tab name="back-end" label="Backend"/>
            <q-tab name="mobile" :label="$t('mobile')"/>
            <q-tab name="extras" label="Extras"/>
        </q-tabs>
        <div class="q-mt-sm text-caption text-grey-6">{{ $t('showing') }} {{ tab === 'all' ? projects.length : filteredProjects.length }} {{ $t('results') }}:</div>
        <q-tab-panels class="bg-grey-10" v-model="tab" animated>
          <q-tab-panel name="all">
            <div :class="layout.card">
                <ProjectsCards
                    v-for="project in projects" v-bind:key="project.id"
                    :name="project.description"
                    :language="project.techs"
                    :url="project.url"
                    :repo-url="project.repoUrl"
                    :class="layout.repoCard_component"
                    :img="project.img"
                />
            </div>
          </q-tab-panel>
          <q-tab-panel name="front-end">
            <div :class="layout.card">
                <ProjectsCards
                    v-for="project in filteredProjects" v-bind:key="project.id"
                    :name="project.description"
                    :language="project.techs"
                    :description="project.description"
                    :url="project.url"
                    :repo-url="project.repoUrl"
                    :class="layout.repoCard_component"
                    :img="project.img"
                />
            </div>
          </q-tab-panel>
          <q-tab-panel name="back-end">
            <div :class="layout.card">
                <ProjectsCards
                  v-for="project in filteredProjects" v-bind:key="project.id"
                    :name="project.description"
                    :language="project.techs"
                    :description="project.description"
                    :url="project.url"
                    :repo-url="project.repoUrl"
                    :class="layout.repoCard_component"
                    :img="project.img"
                />
            </div>
          </q-tab-panel>
          <q-tab-panel name="mobile">
            <div :class="layout.card">
                <ProjectsCards
                  v-for="project in filteredProjects" v-bind:key="project.id"
                    :name="project.description"
                    :language="project.techs"
                    :description="project.description"
                    :url="project.url"
                    :repo-url="project.repoUrl"
                    :class="layout.repoCard_component"
                    :img="project.img"
                />
            </div>
          </q-tab-panel>
          <q-tab-panel name="extras">
            <div :class="layout.card">
                <ProjectsCards
                  v-for="project in filteredProjects" v-bind:key="project.id"
                    :name="project.description"
                    :language="project.techs"
                    :description="project.description"
                    :url="project.url"
                    :repo-url="project.repoUrl"
                    :class="layout.repoCard_component"
                    :img="project.img"
                />
            </div>
          </q-tab-panel>
      </q-tab-panels>
</template>
<script setup lang="ts">
import { reactive, ref, onMounted, computed, watch } from 'vue';
import Projects from '../data/profile.data';
import ProjectsCards from './ProjectsCards.vue'
import { ProjectEntity } from '@/model/entity/Project.entity';
import { Screen } from 'quasar';
import { useI18n } from 'vue-i18n';


const data = reactive(Projects)
const projects = ref<Array<ProjectEntity>>([])
const tab = ref('all')

const filteredProjects = computed(() => {
  return projects.value.filter(project => project.type === tab.value)
})

const layout = computed(() => {
    if(Screen.lt.sm){
        return {
            repoCard_component: 'col-8 q-mt-lg',
            card: 'row justify-center',
        }
    }
    if(Screen.lt.md){
        return {
            repoCard_component: 'col-5',
            card: 'row justify-evenly q-gutter-xl',
        }
    }
    if(Screen.lt.lg){
        return {
            repoCard_component: 'col-3',
            card: 'row justify-evenly q-gutter-xl',
        }
    }
    if(Screen.lt.xl){
        return {
            repoCard_component: 'col-3',
            card: 'row justify-evenly q-gutter-xl',
        }
    }
    return{
        repoCard_component: 'col-3',
        card: 'row justify-evenly q-gutter-xl',
    }
});


const {locale} = useI18n()

watch(locale, async(newLang, oldLang) => {
  await data.getProjects(locale.value).then((res) => {
      projects.value = res
        console.log(projects.value)
        return projects.value
    })
})

onMounted(async () => {

    await data.getProjects(locale.value).then((res) => {
        projects.value = res
        console.log(projects.value)
        return projects.value
    })
})
</script>

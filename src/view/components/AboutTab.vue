<template>
    <div>
       <div>
        {{ about?.bio }}
        </div>
        <div>
            <div class="text-h4 q-mt-lg">{{$t('goals')}}</div>
            <div class="q-mt-md">{{ about?.goals }}</div>
        </div>
        <div>
            <div class="text-h4 q-mt-lg">{{$t('techs')}}</div>
            <div :class="layout.divCardContainer" >
                <TechCards v-for="tech in about?.techs" v-bind:key="tech.id"
                    :tech="tech.title"
                    :icon="tech.icon ? icons[tech?.icon] : 'null'"
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
import { reactive, computed, ref, watch, onMounted } from 'vue';
import { Screen } from 'quasar';
import TechCards from './TechCards.vue'
import About from '../data/profile.data'
import { useI18n } from 'vue-i18n';
import { AboutEntity } from '@/model/entity/About.entity';

import { mdiReact } from '@mdi/js'
import { mdiVuejs } from '@mdi/js';
import { mdiLanguageJavascript } from '@mdi/js';
import { mdiLanguageTypescript } from '@mdi/js';
import { mdiNodejs } from '@mdi/js';

const icons: {[key: string]: string} = {
    mdiReact,
    mdiVuejs,
    mdiLanguageJavascript,
    mdiLanguageTypescript,
    mdiNodejs
}

const data = reactive(About)
const about = ref<AboutEntity>()

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

const {locale} = useI18n()

watch(locale, async(newLang, oldLang) => {
  await data.getAbout(locale.value).then((res) => {
        about.value = res
        console.log(about.value)
        return about.value
    })
})

onMounted(async () => {

    await data.getAbout(locale.value).then((res) => {
        about.value = res
        console.log(about.value)
        return about.value
    })
})
</script>

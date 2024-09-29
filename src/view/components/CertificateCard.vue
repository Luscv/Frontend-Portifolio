<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <a
    target="_blank"
    :href="props.url"
    class="text-caption text-grey-6"
    style="
        text-decoration: none;
        color: #9e9e9e;
    "
  >
   <q-card bordered class="bg-grey-10 "
    style="border-radius: 8px;"
    >
        <div class="column no-wrap items-center">

            <q-img
                style="border-top-left-radius: 8px; border-top-right-radius: 8px;"
                :src="props.img"
                :ratio="4/3"
            >
            </q-img>
            <div class="q-my-md">
                <div class="text-subtitle q-mx-xs text-grey-4 text-center">{{props.title}}</div>
                <div v-if="props.category !== 'idiomas'" class="text-center text-caption text-grey-6"> {{$t('tech_stack')}}: <span class="q-pr-xs"  v-for="tech in props.techs" v-bind:key="tech.id">{{ tech }} </span></div>
                <div class="text-center">
                  <span v-if="props.url"  class="text-caption text-grey-6"
                    style="
                      text-decoration: none;
                      color: #9e9e9e;
                    "
                  >
                  {{$t('issued_at')}}: <span>{{ props.issuedAt }}</span>
                  </span>
                </div>
            </div>
        </div>
    </q-card>
  </a>

</template>
<script setup lang="ts">
import { TechEntity } from '@/model/entity/Tech.entity';

const props = defineProps(
{

    title: String,
    category: String,
    img: String,
    issuedAt: String,
    url: String,
    techs: Array<TechEntity>
}
)


</script>

<template>
      <a
        target="_blank"
        :href="props.repoUrl"
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
                    :ratio="16/9"
                >
                    <!-- <img src="~/assets/NotFound.png"> -->
                </q-img>
                <div class="q-my-md">
                    <div class="text-subtitle text-grey-4 text-center">{{props.name}}</div>
                    <div class="text-caption text-grey-6"> {{$t('tech_stack')}}: <span class="q-pr-xs" v-for="language in props.language" v-bind:key="language.id">{{ language }} </span></div>
                    <div>
                      <span v-if="props.url"  class="text-caption text-grey-6"
                        style="
                          text-decoration: none;
                          color: #9e9e9e;
                        "
                      >
                      {{$t('deploy_available')}}! <a :href="props.url" target="_blank" style="text-decoration: underline; color: #9e9e9e;">{{$t('click_here')}}</a>
                      </span>
                    </div>
                    <div>
                      <span v-if="!props.url"  class="text-caption text-grey-6"
                        style="
                          text-decoration: none;
                          color: #9e9e9e;
                        "
                      >
                      {{$t('deploy_not_available')}}
                      </span>
                    </div>
                    <!-- <div class="text-caption">{{ props.description }}</div> -->
                </div>
            </div>
        </q-card>
      </a>

</template>
<script setup lang="ts">
import { RepoContentEntity } from '@/model/entity/RepoContent.entity';
import { TechEntity } from '@/model/entity/Tech.entity';

const props = defineProps(
    {
        description: String,
        url: String,
        repoUrl: String,
        name: String,
        language: Array<TechEntity>,
        content: Array<RepoContentEntity>,
        img: String,
    }
)


</script>

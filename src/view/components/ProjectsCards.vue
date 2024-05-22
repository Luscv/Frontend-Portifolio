<template>
    <a
        target="_blank"
        :href="props.url"
        style="
            text-decoration: none;
            color: #9e9e9e;
            margin-left: 5px;
        "
    >
       <q-card bordered class="bg-grey-10 "
        style="border-radius: 8px;"
        >
            <div class="column no-wrap items-center">

                <q-img
                    style="border-top-left-radius: 8px; border-top-right-radius: 8px;"
                    :src="img()"
                    :ratio="16/9"
                >
                    <!-- <img src="~/assets/NotFound.png"> -->
                </q-img>

                <div class="q-my-md">
                    <div class="text-subtitle text-grey-4 text-center">{{props.name}}</div>
                    <div class="text-caption text-grey-6"> Language: {{ props.language ? props.language : 'Not Found' }}</div>
                    <!-- <div class="text-caption">{{ props.description }}</div> -->
                </div>
            </div>
        </q-card>
    </a>

</template>
<script setup lang="ts">
import { RepoContentEntity } from '@/model/entity/RepoContent.entity';

const props = defineProps(
    {
        description: String,
        url: String,
        name: String,
        language: String,
        content: Array<RepoContentEntity>,
    }
)

const img =(() => {

  if (`public/${props.name}.png`) {
    return `./public/${props.name}.png`

  }
  return './public/No-Image.png'
})


</script>

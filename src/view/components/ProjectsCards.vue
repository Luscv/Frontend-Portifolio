<template>
    <q-card bordered class="bg-grey-10 "
      style="border-radius: 8px;"
    >
        <div class="column no-wrap items-center">
            
            <q-img 
                style="border-top-left-radius: 8px; border-top-right-radius: 8px;"
            >
                <img :src="props.content ? props.content[0].download_url : 'Not Found'">
            </q-img>
            
            <div class="q-my-md">
                <div class="text-subtitle text-center">{{props.name}}</div>
                <div class="text-caption text-grey-6"> Language: {{ props.language ? props.language : 'Not Found' }}</div>
                <!-- <div class="text-caption">{{ props.description }}</div> -->
            </div>
        </div>
    </q-card>
</template>
<script setup lang="ts">
import { RepoContentEntity } from '@/model/entity/RepoContent.entity';

const props = defineProps(
    {
        description: String,
        name: String,
        language: String,
        content: Array<RepoContentEntity>,
    }
)

console.log(props.content)


</script>

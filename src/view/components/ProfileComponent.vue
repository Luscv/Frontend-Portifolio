<template>
    <div class="q-ma-md">
        <div class="row justify-center">
            <div></div>
            <div class="text-center q-mt-xl">
                <q-avatar 
                size="100px"
                rounded
                class=""
                >
                    <img :src="profile?.avatar_url">
                </q-avatar>
                <div class="q-mt-md text-h6">{{profile?.name}}</div>
                <div class="column">
                    <q-badge class="q-my-md text-subtitle2 justify-center" color="grey-9">{{ profile?.bio }}</q-badge>
                </div>
                
            </div>
            <div></div>
        </div>
            
        
        <q-separator color="grey-9" class="text-center q-mt-md q-mx-md"/>
        <div class="q-mt-lg">
            <div 
                v-for="items in personalInfo.infoList" 
                v-bind:key="items.id"
                class="row items-center q-mt-md"
            >
                <div
                    style="
                        background: rgb(97,97,97);
                        background: linear-gradient(135deg, rgba(97,97,97,1) 0%, rgba(33,33,33,1) 60%);border-radius: 4px;
                        padding: 1px;
                        border-radius: 8px;
                    "
                >
                    <q-card 
                        class="bg-grey-10  text-center"
                        style=" 
                            border-radius: 8px;
                        "
                    >
                        <q-icon class="q-ma-sm" size="md" color="primary" :name="`${items.icon}`"/>
                    </q-card>  
                </div>
                
                
                
                <div class="q-ml-md">
                    <div class="text-grey-6">{{ items.title }}</div>
                    <div>{{ items.data }}</div>
                </div>
            </div>
            
            <div class="q-mt-xl q-mb-xl text-center">
                <a 
                    target="_blank"
                    href="https://github.com/Luscv"
                    style="
                        text-decoration: none;
                        color: #9e9e9e;
                        margin-right: 5px;
                    "
                >
                    {{ personalInfo.socials[0].title }}
                </a>
                <span style="color: #9e9e9e;">●</span>
                <a 
                    target="_blank"
                    href="https://www.linkedin.com/in/luscv/"
                    style="
                        text-decoration: none;
                        color: #9e9e9e;
                        margin-left: 5px;
                    "
                >
                    {{ personalInfo.socials[1].title }}
                </a>
            </div>
        </div>
    </div>
    
</template>
<script setup lang="ts">
import Profile from '../data/profile.data'
import PersonalInfo from '../data/local/personalInfo.data'
import { ref } from 'vue';
import { ProfileEntity } from '@/model/entity/Profile.entity';
import { onMounted } from 'vue';
import { reactive } from 'vue';

const data = reactive(Profile)
const profile = ref<ProfileEntity>()
const personalInfo = reactive(PersonalInfo)


onMounted(async () => {
    await data.getGithubProfile().then((res) => {
        profile.value = res
        
        return profile.value
    })
    await data.getMyRepositories().then((res) => {
        
        console.log(res)
        return res
    })
})
</script>
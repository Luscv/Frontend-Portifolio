<template>
  <div :class="layout.component_layout">
    <div :class="layout.profile_pic">
      <div :class="layout.profile">
        <div :class="layout.profile_bio">
          <q-avatar
          size="100px"
          rounded
          class=""
          >
              <img :src="profile?.avatarUrl">
          </q-avatar>
          <div :class="layout.profile_name">
            <div class="q-mt-md text-h6">{{profile?.name}}</div>
            <div class="column">
                <q-badge class="q-my-md text-subtitle2 justify-center" color="grey-9">{{ profile?.role }}</q-badge>
            </div>
          </div>
        </div>

      </div>
      <div :class="layout.group_button">
        <q-btn
          v-if="!layout.show_infolist"
          color="primary" icon="expand_more" label="Show info"
          :class="layout.class_button"
        >
          <q-menu class="bg-grey-10" :offset="!layout.button_fit ? [55,0] : [0,0]" :fit="layout.button_fit">
            <q-list>
              <q-item
                v-for="items in profile?.extraInfo"
                v-bind:key="items?.id"
              >
                <q-item-section>
                  <div
                    style="
                      background: rgb(97,97,97);
                      background: linear-gradient(135deg, rgba(97,97,97,1) 0%, rgba(33,33,33,1) 60%);border-radius: 4px;
                      padding: 1px;
                      border-radius: 8px;
                    "
                    class="q-mb-sm"
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
                      <div class="text-grey-6">{{ items?.name }}</div>
                      <div class="text-grey-4">{{ items?.content }}</div>
                  </div>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
    </div>

    <q-separator v-if="layout.component_render" color="grey-9" class="text-center q-mt-md q-mx-md"/>
    <div v-if="layout.show_infolist" :class="layout.info_list">
      <div
        v-for="items in profile?.extraInfo"
        v-bind:key="items?.id"
        :class="layout.info_layout"
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
              <q-icon class="q-ma-sm" size="md" color="primary" :name="`${items?.icon}`"/>
          </q-card>
        </div>
        <div class="q-ml-md">
            <div class="text-grey-6">{{ items?.name }}</div>
            <div>{{ items?.content === 'Brazil, MG' && lang === 'pt-BR' ? 'Brasil, MG' : items?.content }}</div>
        </div>
      </div>


    </div>

  </div>
  <div :class="layout.socials_layout">
        <a
            target="_blank"
            :href="profile?.github"
            style="
                text-decoration: none;
                color: #9e9e9e;
                margin-right: 5px;
            "
        >
            Github
        </a>
        <span style="color: #9e9e9e;">●</span>
        <a
            target="_blank"
            :href="profile?.linkedin"
            style="
                text-decoration: none;
                color: #9e9e9e;
                margin-left: 5px;
            "
        >
            LinkedIn
        </a>
      </div>

</template>
<script setup lang="ts">
import Profile from '../data/profile.data'

import { ref, onMounted, reactive, computed, watch } from 'vue';
import { ProfileEntity } from '@/model/entity/Profile.entity';
import { Screen } from 'quasar';
import { useI18n } from 'vue-i18n';



const data = reactive(Profile)
const profile = ref<ProfileEntity>()

const layout = computed(() => {
  console.log(Screen.sizes)
  console.log(Screen.width)
  if(Screen.lt.sm){
    return {
      component_layout: 'q-ma-md',
      profile_pic: 'justify-center',
      profile_bio: 'row justify-center text-center',
      profile_name: 'q-ml-lg',
      component_render: false,
      show_infolist: false,
      button_fit: true,
      class_button: 'q-ma-none q-px-xl',
      group_button:'row justify-center q-mt-lg',
      info_list: ' row q-col-gutter-sm q-mt-md justify-center',
      info_layout: 'row col-6',
      socials_layout: 'q-mb-lg text-center',
    }
  }
  if(Screen.lt.md){
    return {
      component_layout: 'q-ma-md',
      profile_pic: 'row justify-between',
      profile_bio: 'row text-center',
      profile_name: 'q-ml-lg',
      component_render: false,
      show_infolist: false,
      button_fit: false,
      class_button: 'q-ma-none ',
      info_list: ' row q-col-gutter-sm q-mt-md justify-center',
      info_layout: 'row col-6',
      socials_layout: 'q-mb-lg text-center',
    }
  }
  if(Screen.lt.lg){
    return {
      component_layout: 'q-ma-md',
      profile_pic: 'justify-start',
      profile_bio: 'row text-center',
      profile_name: 'q-ml-lg',
      component_render: true,
      show_infolist: true,
      info_list: ' row q-col-gutter-sm q-mt-md justify-center',
      info_layout: 'row col-6',
      socials_layout: 'q-mb-lg text-center',
    }
  }
  if(Screen.lt.xl){
    return {
      component_layout: 'q-ma-xl row justify-between q-mx-xl',
      profile_pic: 'justify-start',
      profile_bio: 'row text-center',
      profile_name: 'q-ml-lg',
      component_render: false,
      show_infolist: true,
      info_list: ' row q-col-gutter-sm',
      info_layout: 'row items-center col-6',
      socials_layout: 'q-mb-lg text-center',
    }
  }
  return {
    component_layout: 'q-ma-md',
    profile:'',
    profile_pic:'row justify-center',
    profile_bio: 'text-center q-mt-xl',
    profile_name: '',
    component_render: true,
    show_infolist: true,
    info_list: 'q-mt-lg',
    info_layout: 'row items-center q-mt-md',
    socials_layout: 'q-my-xl text-center',
  }

})

const {locale} = useI18n()
const lang = computed(() => {
  return locale.value
})

watch(locale, async(newLang, oldLang) => {
  await data.getProfile(locale.value).then((res) => {
        profile.value = res
        console.log(profile.value)
        return profile.value
    })
})

onMounted(async () => {

    await data.getProfile(locale.value).then((res) => {
        profile.value = res
        console.log(profile.value)
        return profile.value
    })
})
</script>

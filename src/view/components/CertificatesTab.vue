<template>
  <q-tabs
        v-model="tab"
        active-color="primary"
        indicator-color="transparent"
      >
          <q-tab name="all" :label="$t('all')"/>
          <q-tab name="desenvolvimento de software" :label="$t('software_development')"/>
          <q-tab name="idiomas" :label="$t('language')"/>
          <q-tab name="variados" :label="$t('other')"/>
      </q-tabs>
      <div class="q-mt-sm text-caption text-grey-6">{{ $t('showing') }} {{ tab === 'all' ? certificates.length : filteredCertificates.length }} {{ $t('results') }}:</div>
      <q-tab-panels class="bg-grey-10" v-model="tab" animated>
        <q-tab-panel name="all">
          <div :class="layout.card">
              <CertificateCard
                  v-for="certificate in certificates" v-bind:key="certificate.id"
                  :class="layout.repoCard_component"
                  :img="certificate.img"
                  :title="certificate.title"
                  :issued-at="certificate.issuedAt"
                  :techs="certificate.techs"
                  :url="certificate.url"
                  :category="certificate.category"
              />
          </div>
        </q-tab-panel>
        <q-tab-panel name="desenvolvimento de software">
          <div :class="layout.card">
              <CertificateCard
                  v-for="certificate in filteredCertificates" v-bind:key="certificate.id"
                  :class="layout.repoCard_component"
                  :img="certificate.img"
                  :title="certificate.title"
                  :issued-at="certificate.issuedAt"
                  :techs="certificate.techs"
                  :url="certificate.url"
                  :category="certificate.category"
              />
          </div>
        </q-tab-panel>
        <q-tab-panel name="idiomas">
          <div :class="layout.card">
              <CertificateCard
                v-for="certificate in filteredCertificates" v-bind:key="certificate.id"
                  :class="layout.repoCard_component"
                  :img="certificate.img"
                  :title="certificate.title"
                  :issued-at="certificate.issuedAt"
                  :techs="certificate.techs"
                  :url="certificate.url"
                  :category="certificate.category"
              />
          </div>
        </q-tab-panel>
        <q-tab-panel name="variados">
          <div :class="layout.card">
              <CertificateCard
                v-for="certificate in filteredCertificates" v-bind:key="certificate.id"
                  :class="layout.repoCard_component"
                  :img="certificate.img"
                  :title="certificate.title"
                  :issued-at="certificate.issuedAt"
                  :techs="certificate.techs"
                  :url="certificate.url"
                  :category="certificate.category"
              />
          </div>
        </q-tab-panel>
    </q-tab-panels>
</template>
<script setup lang="ts">
import { reactive, ref, onMounted, computed, watch } from 'vue';
import Certificates from '../data/profile.data';
import CertificateCard from './CertificateCard.vue'
import { Screen } from 'quasar';
import { useI18n } from 'vue-i18n';
import { CertificateEntity } from '@/model/entity/Certificate.entity';



const data = reactive(Certificates)
const certificates = ref<Array<CertificateEntity>>([])
const tab = ref('all')

const filteredCertificates = computed(() => {
return certificates.value.filter(certificate => certificate.category === tab.value)
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
await data.getCertificates(locale.value).then((res) => {
    certificates.value = res
      console.log(certificates.value)
      return certificates.value
  })
})

onMounted(async () => {

  await data.getCertificates(locale.value).then((res) => {
      certificates.value = res
      console.log(certificates.value)
      return certificates.value
  })
})
</script>

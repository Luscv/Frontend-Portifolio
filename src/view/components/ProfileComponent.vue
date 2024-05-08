<template>
    <div class="justify-center">
        <div class="row justify-center">
            <div></div>
            <div class="text-center q-mt-xl">
                <q-avatar 
                size="100px"
                rounded
                >
                    <img src="https://cdn.quasar.dev/img/avatar4.jpg">
                </q-avatar>
                <div class="q-mt-md">{{personalInfo.name}}</div>
                <div class="column">
                    <q-badge class="q-mt-md  text-subtitle2 justify-center" color="grey-9">{{ personalInfo.role }}</q-badge>
                    <div>
                        <q-badge class="q-mt-sm q-mx-sm justify-center text-subtitle" color="blue-8">{{ personalInfo.tech }}</q-badge>
                        <q-badge class="q-mt-sm q-mx-sm justify-center text-subtitle" color="green-8">{{ personalInfo.tech_2 }}</q-badge>
                    </div>
                </div>
                
            </div>
            <div></div>
        </div>
            
        
        <q-separator color="grey-9" class="q-mt-md"/>
        <div class="q-mt-md">
            <div 
                v-for="items in personalList" 
                v-bind:key="items.id"
                class="row items-center"
            >
                <q-card class="bg-grey-10 q-ma-md q-pa-md">
                    <q-icon :name="items.icon"/>
                </q-card>
                <div>
                    <div>{{ items.title }}</div>
                    <div>{{ items.data }}</div>
                </div>
            </div>
            
            <div>socials</div>
        </div>
    </div>
    
</template>
<script setup lang="ts">

const personalInfo = {
    name: 'Lucas Barros',
    age: 24,
    role: 'Software Engineer',
    tech: 'React Native',
    tech_2: 'Vue',
    city: 'Belo Horizonte',
    country: 'Brazil',
    state: 'Minas Gerais',
}

const personalList = [
    {
        id: 1,
        title: 'email',
        data: 'email@mail.com',
        icon: 'fa-email',
    },
    {
        id: 2,
        title: 'phone',
        data: '+55 (31) 9 1234-5678',
        icon: 'fa-phone',
    },
    {
        id: 3,
        title: 'birthday',
        data: '12/12/1212',
        icon: 'fa-event',
    },
    {
        id: 4,
        title: 'location',
        data: 'Brazil, MG',
        icon: 'fa-location-dot',
    },
]

</script>
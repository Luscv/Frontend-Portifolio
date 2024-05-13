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
                    <img src="https://cdn.quasar.dev/img/avatar4.jpg">
                </q-avatar>
                <div class="q-mt-md text-h6">{{personalInfo.name}}</div>
                <div class="column">
                    <q-badge class="q-mt-md text-subtitle2 justify-center" color="grey-9">{{ personalInfo.role }}</q-badge>
                    <div>
                        <q-badge class="q-mt-sm q-mx-sm justify-center text-subtitle" color="blue-8">{{ personalInfo.tech }}</q-badge>
                        <q-badge class="q-mt-sm q-mx-sm justify-center text-subtitle" color="green-8">{{ personalInfo.tech_2 }}</q-badge>
                    </div>
                </div>
                
            </div>
            <div></div>
        </div>
            
        
        <q-separator color="grey-9" class="text-center q-mt-md q-mx-md"/>
        <div class="q-mt-md">
            <div 
                v-for="items in personalList" 
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
                    href="https://github.com/Luscv"
                    style="
                        text-decoration: none;
                        color: #9e9e9e;
                        margin-right: 5px;
                    "
                >
                    {{ personalInfo.socials[0].site }}
                </a>
                <span style="color: #9e9e9e;">●</span>
                <a 
                    href="https://www.linkedin.com/in/luscv/"
                    style="
                        text-decoration: none;
                        color: #9e9e9e;
                        margin-left: 5px;
                    "
                >
                    {{ personalInfo.socials[1].site }}
                </a>
            </div>
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
    socials: [
        {
            site: 'Github',
            url: 'https://github.com/Luscv'
        },
        {
            site: 'LinkedIn',
            url: 'https://www.linkedin.com/in/luscv/'
        }
    ]
}

const personalList = [
    {
        id: 1,
        title: 'EMAIL',
        data: 'email@mail.com',
        icon: 'mail_outline',
    },
    {
        id: 2,
        title: 'PHONE',
        data: '+55 (31) 9 1234-5678',
        icon: 'o_phone',
    },
    {
        id: 3,
        title: 'BIRTHDAY',
        data: '12/12/1212',
        icon: 'o_event',
    },
    {
        id: 4,
        title: 'LOCATION',
        data: 'Brazil, MG',
        icon: 'o_place',
    },
]

</script>
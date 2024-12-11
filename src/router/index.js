import {createRouter, createWebHashHistory} from 'vue-router';
import Accueil from '@/views/Accueil.vue';
import Profil from '@/views/Profil.vue';
import MessagesInterne from '@/views/MessagesInterne.vue';
import MessagesExterne from '@/views/MessagesExterne.vue';
import ActusInfos from '@/views/ActusInfos.vue';
import AlertesConvoit from '@/views/AlertesConvoit.vue';
import RechercherTrajet from '@/views/RechercherTrajet.vue';
import ResultSearch from '@/views/ResultSearch.vue';

const routes =[
    {
        path:'/',
        name: 'Accueil',
        component: Accueil,
    },
    {
        path:'/profil',
        name: 'Profil',
        component: Profil,
    },
    {
        path:'/messagesInterne',
        name: 'MessagesInterne',
        component: MessagesInterne,
    },
    {
        path:'/messagesExterne',
        name: 'MessagesExterne',
        component: MessagesExterne,
    },
    {
        path:'/actusInfos',
        name: 'ActusInfos',
        component: ActusInfos,
    },
    {
        path:'/alertesConvoit',
        name: 'AlertesConvoit',
        component: AlertesConvoit,
    },
    {
        path:'/rechercherTrajet',
        name: 'RechercherTrajet',
        component: RechercherTrajet,
    },
    {
        path:'/resultSearch',
        name: 'ResultSearch',
        component: ResultSearch,
    },

];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
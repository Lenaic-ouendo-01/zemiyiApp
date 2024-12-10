import {createRouter, createWebHistory} from 'vue-router';
import Accueil from '@/views/Accueil.vue';
import Profil from '@/views/Profil.vue';

const routes =[
    {
        path:'/accueil',
        name: 'Accueil',
        component: Accueil,
    },
    {
        path:'/profil',
        name: 'Profil',
        component: Profil,
    },

];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
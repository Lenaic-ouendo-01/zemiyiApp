<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Accueil from './views/Accueil.vue'
import Profil from './views/Profil.vue';
import MessagesInterne from './views/MessagesInterne.vue';
import MessagesExterne from './views/MessagesExterne.vue';
import ActusInfos from './views/ActusInfos.vue';
import AlertesConvoit from './views/AlertesConvoit.vue';
import RechercherTrajet from './views/RechercherTrajet.vue';
</script>

<template>
  <main>
    <router-view></router-view>  
  </main>
</template>

<style>
  header {
    line-height: 1.5;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  }
</style>

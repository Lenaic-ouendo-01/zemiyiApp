<script>
import { ref } from "vue";

export default {
  setup() {
    const isMenuOpen = ref(false);

    const alerts = ref([
      { message: "Indiquez toutes les infos pour confirmer votre identité." },
      { message: "Définissez vos préférences ici SVP." },
    ]);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const dismissAlert = (index) => {
      alerts.value.splice(index, 1);
    };

    return {
      isMenuOpen,
      alerts,
      toggleMenu,
      dismissAlert,
    };
  },
};
</script>


<template>
  <header class="header animation-header body-screen">
    <div>
      <div class="toggle" :class="{ active: isMenuOpen }" @click="toggleMenu"></div>
      <ul class="navigation" :class="{ active: isMenuOpen }">
        <li class="nav">Home</li>
        <li class="nav">Services</li>
        <li class="nav">Our Works</li>
        <li class="nav">Clients</li>
        <li class="nav">Contact</li>
      </ul>
    </div>
    <router-link to="/actusInfos">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="#00ce02" d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2m6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5z"/></svg>
      </div>
    </router-link>
  </header>

  <main>
    <div>
      <transition-group name="popup-fade" tag="div">
        <div
          v-for="(alert, index) in alerts"
          :key="index"
          class="message_alerte"
        >
          <div class="icone_alerte">
            <img src="/public/image/alerte.svg" alt="Alerte" />
          </div>
          <div>
            <p class="text_message_alerte">{{ alert.message }}</p>
          </div>
          <div class="icone_doigt" @click="dismissAlert(index)">
            <img src="/public/image/doigt.svg" alt="Icône Doigt" />
          </div>
        </div>
      </transition-group>
    </div>

    <div class="image_cover">
      <img src="/public/image/image_cover.svg" alt="Image Cover" />
    </div>

    <div class="demande_transfert">
      <p class="text_button_transfert">Transfert effectuer 0 francs CFA.</p>
      <div class="">
        <button>
          <div class="button_transfert">
            <img src="/public/image/+.svg" alt="+" />
            <p> Transfert</p>
          </div>
        </button>
      </div>
    </div>

    <p class="text_services">Nos services et produits</p>
    <div class="services_grid">
      <router-link to="/">
        <div class="service_card">
          <img src="/public/image/moto.svg" alt="Moto" />
        </div>
      </router-link>

      <router-link to="/">
        <div class="service_card">
          <img src="/public/image/voiture.svg" alt="Voiture" />
        </div>
      </router-link>

      <router-link to="/rechercherTrajet">  
        <div class="service_card">
          <img src="/public/image/covoiturage.svg" alt="Covoiturage" />
        </div>
      </router-link>

      <router-link to="/">  
        <div class="service_card">
          <img src="/public/image/bus.svg" alt="Bus" />
        </div>
      </router-link>

      <router-link to="/">  
        <div class="service_card">
          <img src="/public/image/tricycle.svg" alt="Tricycle" />
        </div>
      </router-link>

    </div>

    <div class="echange_icon">
      <img src="/public/image/echange.svg" alt="Icône d'échange" />
    </div>
  </main>

    <!-- Barre de navigation -->
    <div class="nav-bar">

<router-link to="/">  
    <div class="nav-item">
        <img src="/public/image/home.svg" alt="Accueil" />
        <p>Accueil</p>
    </div>
</router-link>

<router-link to="/messagesInterne">  
<div class="nav-item">
    <img src="/public/image/message.svg" alt="Messageries" />
    <p>Messageries</p>
</div>
</router-link>

<router-link to="/profil">  
<div class="nav-item">
    <img src="/public/image/profil.svg" alt="Profil" />
    <p>Profil</p>
</div>
</router-link>
</div>

<!-- Bouton flottant -->

<div class="floating-button">
<router-link to="/">  
    <img src="/public/image/echange.svg" alt="Ajouter" />
</router-link>
</div>

</template>

<style scoped>
/* Corps général */
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
}
main{
  margin: 20px;
  background-color: #FFFFFF;
  
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
}

.menu_burger img,
.notification_bell img {
  width: 24px;
  height: 24px;
}
.icone_doigt{
  margin: 20px;
}

/* Popups */
.message_alerte {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
  background-color: #ff8686b0;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  padding: 08px;
  margin-bottom: 10px;
  animation: fadeIn 0.5s ease-in-out;
}

.icone_alerte img,
.icone_doigt img {
  width: 20px;
  height: 20px;
}

.text_message_alerte {
  font-size: 12px;
  font-weight: 700;
  color: #ff1010;
}

/* Transition */
.popup-fade-enter-active,
.popup-fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.popup-fade-enter-from,
.popup-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Image de couverture */
.image_cover img {
  width: 100%;
  border-radius: 8px;
}

/* Transfert */
.demande_transfert {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #1e246a;
  color: white;
  text-align: center;
  border-radius: 8px;
}

.button_transfert {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 6px;
  gap: 10px;
  
}

.text_button_transfert {
  display: flex;
  align-items: center;
  font-weight: 500;
  width: 140px;
}

/* Services */
.text_services {
  font-size: 16px;
  font-weight: 600;
  margin-top: 20px;
  color: black;
}

.services_grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 10px;
  margin-bottom: 10px;

}

.service_card img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 80px;
  height: 80px;
  padding: 10px;
  background-color: #E5E5E5;
  
}

/* Barre de navigation */
.nav-bar {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #fff;
        padding: 10px 0;
        border-top: 1px solid #ddd;
    }

    .nav-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .nav-bar .nav-item {
        text-align: center;
        color: #888;
        font-size: 12px;
    }

    .nav-bar .nav-item.active {
        color: #00a000;
    }

    .nav-bar .nav-item i {
        display: block;
        font-size: 20px;
    }

    /* Bouton flottant */
    .floating-button {
        position: fixed;
        bottom: 60px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 60px;
        background-color: #00a000;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        color: #fff;
        font-size: 24px;
        cursor: pointer;

    }
    .floating-button img{
      display: flex;
      justify-content: center;
      align-items: center;
    }
 @media (max-width: 726px){

.toggle{
  position: relative;
  right: 8px;
  width: 38px;
  height: 38px;
  background: url('https://api.iconify.design/charm/menu-hamburger.svg');
  background-size: 24px;
  background-position: center;
  background-repeat: no-repeat;
  transform: translateX(-100%);
  transition: transform 1s;
  z-index: 11;
}

.toggle.active{
  position: fixed;
  right: 20px;
  background: url('https://api.iconify.design/line-md/menu-to-close-alt-transition.svg');
  background-size: 24px;
  background-position: center;
  background-repeat: no-repeat;
  transform: translateX(0);
  filter: invert(1);
}

ul.navigation{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #c2c1c3;
  transform: translateY(-100%);
  transition: transform 1.1s;
  z-index: 10;
}
ul.navigation.active{
  transform: translateY(0);
  transition: transform 1s;
}
}
</style>

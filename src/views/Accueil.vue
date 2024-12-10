<script setup>
import { ref } from "vue";

// Liste des alertes à afficher
const alerts = ref([
  { message: "Indiquez toutes les infos pour confirmer votre identité." },
  { message: "Définissez vos préférences ici SVP." },
]);

// Supprimer une alerte
const dismissAlert = (index) => {
  alerts.value.splice(index, 1);
};
</script>

<template>
  <header class="header">
    <div class="menu_burger">
      <img src="/public/image/hamburger.svg" alt="Menu Burger" />
    </div>
    <div class="notification_bell">
      <img src="/public/image/cloche.svg" alt="Cloche de Notification" />
    </div>
  </header>

  <main>
    <!-- Popups -->
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

    <!-- Image de couverture -->
    <div class="image_cover">
      <img src="/public/image/image_cover.svg" alt="Image Cover" />
    </div>

    <!-- Transfert -->
    <div class="demande_transfert">
      <p class="text_button_transfert">Transfert effectuer 0 francs CFA.</p>
      <div class="button_transfert">
        <button>
          <div>
            <img src="/public/image/+.svg" alt="+" />
            <p> Transfert</p>
          </div>
        </button>
      </div>
    </div>

    <!-- Services -->
    <p class="text_services">Nos services et produits</p>
    <div class="services_grid">
      <div class="service_card">
        <img src="/public/image/moto.svg" alt="Moto" />
      </div>
      <div class="service_card">
        <img src="/public/image/voiture.svg" alt="Voiture" />
      </div>
      <div class="service_card">
        <img src="/public/image/covoiturage.svg" alt="Covoiturage" />
      </div>
      <div class="service_card">
        <img src="/public/image/bus.svg" alt="Bus" />
      </div>
      <div class="service_card">
        <img src="/public/image/tricycle.svg" alt="Tricycle" />
      </div>
    </div>

    <!-- Icône d'échange -->
    <div class="echange_icon">
      <img src="/public/image/echange.svg" alt="Icône d'échange" />
    </div>
  </main>

  <!-- Navbar fixe -->
  <nav class="navbar">
    <div class="nav-item">
      <img src="/public/image/home.svg" alt="Accueil" />
      <p>Accueil</p>
    </div>
    <div class="nav-item">
      <img src="/public/image/message.svg" alt="Messageries" />
      <p>Messageries</p>
    </div>
    <div class="nav-item-floating">
      <img src="/public/image/echange.svg" alt="Ajouter" />
    </div>
    <div class="nav-item">
      <img src="/public/image/profil.svg" alt="Profil" />
      <p>Profil</p>
    </div>
  </nav>
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
  padding: 10px 15px;
  background-color: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
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
  margin-top: 10px;
  display: flex;
  align-items: center;
  
}

.text_button_transfert {
  display: flex;
  align-items: center;
  font-weight: 500;
  width: 15
  px;
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
  margin-top: 10px;
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

/* Navbar */
.navbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
}

.nav-item img {
  width: 24px;
  margin-bottom: 5px;
}

/* Icône flottante */
.nav-item-floating {
  position: relative;
  top: -20px;
  background-color: #1e246a;
  padding: 15px;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-item-floating img {
  width: 30px;
  height: 30px;
}
</style>

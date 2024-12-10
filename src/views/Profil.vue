<script setup>
import { ref } from "vue";

const profilePic = ref("/public/image/userprofil.svg"); // Default profile picture
const activeTab = ref("account"); // Active tab management
const isDriver = ref(false); // Switch for Passager ↔ Conducteur

// Function to update profile picture
function uploadPicture(event) {
  const file = event.target.files[0];
  if (file) {
    profilePic.value = URL.createObjectURL(file);
  }
}
</script>

<template>
  <div class="profile-page">
    <!-- Section Profil -->
    <div class="profile-section">
      <!-- Photo de profil -->
      <div class="profile-picture-container">
        <div class="profile-picture">
          <img :src="profilePic" alt="User Picture">
          <div class="camera-icon" @click="document.getElementById('upload-input').click();">
            <img src="/public/image/camera.svg" alt="Upload">
          </div>
          <input type="file" id="upload-input" accept="image/*" @change="uploadPicture" hidden>
        </div>
      </div>

      <!-- Nom de l'utilisateur -->
      <h1 class="username">Nora Ogouchinan</h1>

      <!-- Niveaux -->
      <div class="levels-container">
        <div class="level">
          <div class="level-circle active">1</div>
          <p>U-Débutant</p>
        </div>
        <div class="level-line"></div>
        <div class="level">
          <div class="level-circle">2</div>
          <p>U-Qualifié</p>
        </div>
        <div class="level-line"></div>
        <div class="level">
          <div class="level-circle">3</div>
          <p>U-Super U</p>
        </div>
      </div>
    </div>

    <!-- Switch Passager/Conducteur -->
    <div class="switch-container">
      <label class="switch">
        <input type="checkbox" v-model="isDriver">
        <span class="slider"></span>
      </label>
      <p>{{ isDriver ? "Conducteur" : "Passager" }}</p>
    </div>

    <!-- Onglets -->
    <div class="tabs">
      <div 
        class="tab" 
        :class="{ active: activeTab === 'account' }" 
        @click="activeTab = 'account'">
        Mon compte
      </div>
      <div 
        class="tab" 
        :class="{ active: activeTab === 'preferences' }" 
        @click="activeTab = 'preferences'">
        Mes préférences
      </div>
    </div>

    <!-- Contenu des Onglets -->
    <div v-if="activeTab === 'account'" class="tab-content">
      <div class="info-item">
        <div class="info-background">
          <img src="/public/image/messagerie.svg" alt="Mail">
        </div>
        <span>nora@mail.com</span>
      </div>
      <div class="info-item">
        <div class="info-background">
          <img src="/public/image/telephone.svg" alt="Phone">
        </div>
        <span>+22965047344</span>
      </div>

<div class="info-item">
  <div class="info-background">
    <img src="/public/image/localisation.svg" alt="Location">
  </div>
  <span>Cotonou</span>
</div>
<button class="edit-button">Modifier</button>
</div>

<div v-else class="tab-content">
<p>Préférences utilisateur à configurer...</p>
</div>
 <!-- Barre de navigation -->
 <div class="nav-bar">

<router-link to="/">  
    <div class="nav-item">
        <img src="/public/image/home.svg" alt="Accueil" />
        <p>Accueil</p>
    </div>
</router-link>

<router-link to="/messagesInternes">  
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
</div>
</template>

<style scoped>
/* Design global */
.profile-page {
font-family: Arial, sans-serif;
color: #333;
background-color: #f4f4f4;
padding: 0;
margin: 0;
}

/* Section Profil */
.profile-section {
text-align: center;
background: linear-gradient(to bottom, #a8e063, #56ab2f);
border-radius: 0 0 20px 20px;
padding: 30px 20px;
}

.profile-picture-container {
position: relative;
display: flex;
justify-content: center;
align-items: center;
}

.profile-picture {
  display: flex;
  align-items: center;
  justify-content: center;
position: relative;
width: 500px;
height: 400px;
background-color: #CCCCCC;
border-radius: 50%;
overflow: hidden;
border: 3px solid white;
}

.camera-icon {
position: absolute;
bottom: 5px;
right: 5px;
background: white;
width: 30px;
height: 30px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
}

.username {
margin-top: 10px;
font-size: 18px;
font-weight: bold;
color: #fff;
}

/* Niveaux */
.levels-container {
display: flex;
align-items: center;
justify-content: center;
margin-top: 15px;
}

.level {
text-align: center;
}

.level-circle {
width: 30px;
height: 30px;
border-radius: 50%;
background: #ccc;
color: #fff;
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
}

.level-circle.active {
background: #2ecc71;
}

.level-line {
height: 2px;
width: 50px;
background: #fff;
margin: 0 5px;
}

/* Switch Passager/Conducteur */
.switch-container {
display: flex;
align-items: center;
justify-content: center;
margin: 20px 0;
}

.switch {
position: relative;
display: inline-block;
width: 50px;
height: 25px;
}

.switch input {
opacity: 0;
width: 0;
height: 0;
}

.slider {
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: #ccc;
border-radius: 15px;
transition: 0.4s;
}

.switch input:checked + .slider {
background-color: #4caf50;
}

/* Tabs */
.tabs {
display: flex;
justify-content: center;
background: #fff;
padding: 10px 0;
border-bottom: 1px solid #ddd;
}

.tab {
margin: 0 10px;
padding: 10px 15px;
cursor: pointer;
border-bottom: 2px solid transparent;
color: #777;
}

.tab.active {
color: #2ecc71;
border-bottom: 2px solid #2ecc71;
}

.tab-content {
padding: 20px;
background: #fff;
margin-top: 10px;
border-radius: 10px;
}

/* Info Items */
.info-item {
display: flex;
align-items: center;
margin-bottom: 10px;
}

.info-background {
width: 40px;
height: 40px;
background: #eee;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
margin-right: 10px;
}

.edit-button {
background: #2ecc71;
color: white;
border: none;
padding: 10px 15px;
border-radius: 5px;
cursor: pointer;
}

.edit-button:hover {
background: #27ae60;
}
 /* Barre de navigation */
 .nav-bar {
        display: flex;
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
</style>

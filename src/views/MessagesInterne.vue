<script setup>
import { ref } from "vue";

</script>
<template>
    <div class="messagesInternes-page">
        <div class="entete">
            <h1>Boite de réception</h1>
        </div>

        <!-- Onglets -->
        <div class="tabs">
            <router-link to="/messagesInterne">
                <div class="tab active">
                    <img src="/public/image/msg-interne.svg" alt="">
                    <p>Messages internes</p>
                </div>
            </router-link>
            <router-link to="/messagesExterne">
                <div class="tab ">
                    <img src="/public/image/msg-externe.svg" alt="">
                    <p>Messages externes</p>
                </div>
            </router-link>
        </div>

        <!-- Liste des messages -->
        <div class="message-list">
            <div class="message">
            <div class="avatar"></div>
            <div class="content">
                <h3>Zémiyi</h3>
                <p>Nora, bienvenue chez Zémiyi Bénin !</p>
            </div>
            <div>

                <span class="time">10:20</span>
                <div class="unread-indicator"></div>
            </div>

            </div>
            <div class="message">
            <div class="avatar"></div>
            <div class="content">
                <h3>Zémiyi</h3>
                <p>Cadeaux de bienvenue !</p>
            </div>

            <span class="time">10:09</span>
            <div class="unread-indicator"></div>

            </div>
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

    h1 {
        font-size: 18px;
        margin: 0;
        color: #000000;
        text-align: center;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        font-family: Poppins,sans-serif;
    }
    h3{
        font-family: Poppins;
        font-size: 15px;
        font-weight: 700;
        line-height: 22.5px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;

    }
     /* Onglets */
     .tabs {
        display: flex;
        justify-content: center;
        background-color: #fff;
        border-bottom: 2px solid #ddd;
        gap: 10px;
    }

    .tab {
        flex: 1;
        text-align: center;
        padding: 10px 0;
        font-size: 14px;
        cursor: pointer;
        color: #888;
        display: flex;
        flex-direction: row;
        align-items:center ;
        gap: 12px;
    }


    .tab.active {
        color: #00a000;
        font-weight: bold;
        border-bottom: 2px solid #00a000;
    }

    /* Liste des messages */
    .message-list {
        padding: 10px;
    }

    .message {
        display: flex;
        align-items: center;
        background-color: #fff;
        padding: 15px;
        margin-bottom: 10px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .avatar {
        margin-right: 15px;
        width: 57px;
        height: 53px;
        top: 174px;
        left: 18px;
        gap: 0px;
        border-radius: 9px ;
        opacity: 0px;
        background-color: #D9D9D9;

    }

    .content {
        flex: 1;
    }

    .content h3 {
        margin: 0;
        font-size: 16px;
        color: #333;
    }

    .content p {
        margin: 5px 0 0;
        color: #666;
        font-family: Poppins;
        font-size: 13px;
        font-weight: 500;
        line-height: 19.5px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;

    }

    .time {
        font-size: 12px;
        color: #888;
        margin-left: 10px;
    }

    .unread-indicator {
        width: 10px;
        height: 10px;
        background-color: #ff0000;
        border-radius: 50%;
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
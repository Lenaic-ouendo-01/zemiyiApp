<script setup>
import { ref } from "vue";

</script>
<template>
    <div class="messagesInternes-page">
        <div>
            <h1>Boite de réception</h1>
        </div>

        <!-- Onglets -->
        <div class="tabs">
            <div class="tab active">Messages internes</div>
            <div class="tab">Messages externes</div>
        </div>

        <!-- Liste des messages -->
        <div class="message-list">
            <div class="message">
            <div class="avatar"></div>
            <div class="content">
                <h3>Zémiyi</h3>
                <p>Nora, bienvenue chez Zémiyi Bénin !</p>
            </div>
            <span class="time">10:20</span>
            <div class="unread-indicator"></div>
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
            <div class="nav-item">
            <i>🏠</i>
            Accueil
            </div>
            <div class="nav-item active">
            <i>💬</i>
            Messageries
            </div>
            <div class="nav-item">
            <i>👤</i>
            Profil
            </div>
        </div>

        <!-- Bouton flottant -->
        <div class="floating-button">🔄</div>
    </div>
</template>
<style scoped>
    /* header {
        text-align: center;
        padding: 15px 0;
        background-color: #fff;
        border-bottom: 1px solid #ddd;
    } */

        h1 {
        font-size: 18px;
        margin: 0;
        color: #333;
    }

    /* Onglets */
    .tabs {
        display: flex;
        justify-content: center;
        background-color: #fff;
        border-bottom: 2px solid #ddd;
    }

    .tab {
        flex: 1;
        text-align: center;
        padding: 10px 0;
        font-size: 14px;
        cursor: pointer;
        color: #888;
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
        width: 50px;
        height: 50px;
        background-color: #ccc;
        border-radius: 50%;
        margin-right: 15px;
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
        font-size: 14px;
        color: #666;
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
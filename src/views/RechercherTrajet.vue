<script setup>
import { ref } from "vue";

</script>
<template>
    <div class="actusInfos-page">
        <div class="entete">
            <router-link to="/">
                <img src="/public/image/back.svg" alt="">
            </router-link>
            <h1>Rechercher un Trajet </h1>
            <router-link to="/">
                <img src="/public/image/question-mark.svg" alt="">
            </router-link>
        </div>
            <div>
                <div class="mois">
                    <router-link>
                        <img src="/public/image/back.svg" alt="" >
                    </router-link>
                    <p>decembre 2024</p>
                    <router-link>
                        <img src="/public/image/next.svg" alt="">
                    </router-link>
                </div>
                <div class="semaines">
                    <div class="jours">
                        <p>lun.</p>
                        <p>9</p>
                    </div>
                    <div class="jours">
                        <p>mar.</p>
                        <p>10</p>
                    </div>
                    <div class="jours">
                        <p>mer.</p>
                        <p>12</p>
                    </div>
                    <div class="jours">
                        <p>jeu.</p>
                        <p>13</p>
                    </div>
                    <div class="jours">
                        <p>ven.</p>
                        <p>14</p>
                    </div>
                    <div class="jours">
                        <p>sam.</p>
                        <p>15</p>
                    </div>
                    <div class="jours">
                        <p>dim.</p>
                        <p>16</p>
                    </div>
                </div>
                <div class="depart-destination">
                    <div>
                        <p>Départ</p>
                        <div class="barre-recherche">
                            <img src="/public/image/rechercher.svg" alt="">
                            <input name="" id="" placeholder="Ecrire et sélectionner la ville">
                        </div>
                    </div>
                    <router-link>
                        <img src="/public/image/Interraction.svg" alt="" class="interraction">
                    </router-link>
                    <div>
                        <p>Destination</p>
                        <div class="barre-recherche">
                            <img src="/public/image/rechercher.svg" alt="">
                            <input name="" id="" placeholder="Ecrire et sélectionner la ville">
                        </div>
                    </div>
                    <div class="sieges-a-rechercher">
                        <p>Nombre de sièges rechercher</p>
                        <div class="ajout-siege">
                            <router-link>
                                <div class="circle">
                                    <img src="/public/image/plus.svg" alt="">
                                </div>
                            </router-link>
                            <p>1 siège</p>
                            <router-link>
                                <div class="circle">
                                    <img src="/public/image/moins.svg" alt="">
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div>
                    <router-link to="/resultSearch">
                        <p class="button-rechercher">Rechercher</p>
                    </router-link>
                </div>
                <iframe src="/public/image/boussole.svg" frameborder="0"></iframe>
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://maps.google.com/maps?q=${2.4245867},${6.3708131}&amp;z=15&amp;output=embed" 
                    frameborder="0" 
                    allowfullscreen>
                
                </iframe>;


              
            </div>
        <div>

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

        
    </div>
</template>
<style scoped>
    .actusInfos-page{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

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
    .entete{
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        gap: 10px;
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
    .mois{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

    }
    .mois img{
        width: 12px;
        height: 12px;
    }
    .jours{
        display:flex;
        flex-direction: column;
        align-items: center;

    }
    .semaines{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
    }
    .barre-recherche{
        width: 350px;
        height: 39px;
        top: 270px;
        left: 14px;
        gap: 0px;
        border-radius: 5px;
        opacity: 0px;
        border: 1px solid #808080;
        display:flex;
        align-items: center;
        gap:20px;
        padding: 15px;
    }
    .barre-recherche input{
        border: hidden;
        color: #FF1010;
        font-family: Poppins;
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;

    }
    .depart-destination{
        display: flex;
        flex-direction: column;
        gap:10px;
    }
    .depart-destination p{
        font-family: Poppins;
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        padding: 10px;
    }
    .interraction {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: end;
        width: 20px;
        height: 17px;
        top: 319px;
        left: 405.45px;
        gap: 0px;
        opacity: 0px;
        rotate:-90 deg; 

    }
    .circle{
        width: 34px;
        height: 34px;
        top: 431px;
        left: 22px;
        gap: 0px;
        opacity: 0px;
        border-radius: 50px;
        border: 1px solid #129C20;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .ajout-siege{
        display: flex;
        align-items: center; 
    }
    .sieges-a-rechercher{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .button-rechercher {
        background-color: #129C20;
        width: 386px;
        height: 52px;
        padding: 12px;
        gap: 10px;
        border-radius: 10px;
        opacity: 0px;
        text-align: center;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: #FFFFFF;
        font-family: Poppins;
        font-size: 18px;
        font-weight: 600;
        line-height: 27px;
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


</style>
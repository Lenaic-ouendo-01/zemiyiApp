<script>
import { ref } from "vue";

export default {
  setup() {
    const cardIcons = ref([
        {
            
            url:"../../public/image/tricycle.svg",
            nbr:"0"
        },
        {
        url:"../../public/image/voiture.svg",
        nbr:"6"
        },
        {
            url:"../../public/image/moto.svg",
            nbr:"3"
        }
    ]);
   
    return {
      cardIcons
    };
  },
};
</script>

<template>
    <div>
        <div class="entete">
            <router-link to="/rechercherTrajet">
                <img src="/public/image/back.svg" alt="">
            </router-link>
            <h1>Rechercher un Trajet </h1>
            <router-link to="/">
                <img src="/public/image/question-mark.svg" alt="">
            </router-link>
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
        

    <div class="trajet">
        <div class="trajet-itineraire">
            <router-link>
                <img src="/public/image/back.svg" alt="" >
            </router-link>
            <p>Saham, Cotonou, Bénin</p>
            <router-link>
                <img src="/public/image/next.svg" alt="">
            </router-link>
            <p>Abomey Calavi, Bénin</p>
        </div>
        <p>Mar 10 Décembre, 1 passager</p>
    </div>

    <div class=" type-de-deplacement " display: flex; flex-direction: row; height: 101px; width: 112px;>
        <div v-for="cardIcon in cardIcons">
            <img :src="cardIcon.url" alt="">
            <center>{{cardIcon.nbr}}</center>
        </div>
    </div>

    <div style="border: 2px; border-radius: 15px;">

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
.entete{
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
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
    align-items: center;
    justify-content: center;
    gap: 10px;
}
.sieges-a-rechercher p{
    font-family: Poppins;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

}
.trajet{
    
    display: flex;   
    flex-direction:column;
    justify-content: center; 
    padding: 10px;
    width: 380px;
    height: 80px;
    top: 210px;
    left: 14px;
    gap: 0px;
    border-radius: 10px;
    opacity: 0px;
    box-shadow: 0px 4px 15px 0px #00000040;
    color: #FFFFFF;


}
.trajet p{
    font-family: Poppins;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #474747;

}
.trajet-itineraire{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

}
.trajet-itineraire p{
    font-family: Poppins;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #000000;
    text-align: center;
    width: 160px;

}
.trajet-itineraire img{
    width: 10px;
    height: 10px;
}
</style>
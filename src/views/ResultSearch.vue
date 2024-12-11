<script>
import { ref, onMounted } from "vue";

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
   let url = ref("https://81.91.228.149:32000")

  /*  async function getTrajet() {
        let get_url = ref("/service/zemiyi__backend/1.0.0/rides/all")
        @ axios{

        }
   } */

   onMounted(()=>{
        getTrajet()
    })
    return {
      cardIcons
    };
  },
};
</script>

<template>
    <div class="resultSearch-page">
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
                        <img src="/public/image/moins.svg" alt="">
                    </div>
                </router-link>
                <p>1 siège</p>
                <router-link>
                    <div class="circle">
                        <img src="/public/image/plus.svg" alt="">
                    </div>
                </router-link>
            </div>
        </div>
    </div>
        

    <div class="trajet mt-4">
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

    <div class=" type-de-deplacement " >
        <div class="moyen-de-deplacement" v-for="cardIcon in cardIcons">
            <img :src="cardIcon.url" alt="">
            <center>{{cardIcon.nbr}}</center>
        </div>
    </div>
    
    <div class="rounded-xl border-2 px-1 py-6">

        <div class="flex justify-between">
            <div class="">
                <p class="mb-[65px]">{{ }} 17:30</p>
                <p>{{  }} 18:30</p>
            </div>
            <div class="flex items-center flex-col">
                <img src="/public/image/cercle-red.svg" alt="">
                <div class="h-[80px] border-l border-gray-500"></div>
                <img src="/public/image/cercle-bleu.svg" alt="">
            </div>
            <div>
                <div class="mb-[65px]">{{  }} Cadjehoun-cadjehoun</div>
                <div>{{  }} Calavi Djadjo - entre Jean- Piaget II...</div>
            </div>
            <img src="/public/image/next.svg" alt="" class="mb-auto mt-2">
        </div>
        <div class="flex mt-[24px] items-center">
            <img src="/public/image/portefeuille.svg" alt="" class="mr-2">
            <p>{{  }}  <span class="text-red-500"> < {{  }} (prix actuel du marche) </span> </p>
        </div>
        <div class="flex justify-between mt-8">
            <div class="flex">
                <div class="w-[44px] h-[44px] rounded-full overflow-hidden">
                    <img :src="img" alt="" class="w-full h-full">{{  }}
                </div>
                <div class="ml-2">
                    <div class="flex">{{  }}RAissa <img src="/public/image/valider.svg" alt=""></div>
                    <div class="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <rect width="24" height="24" fill="none" />
                        <path fill="#c5cac5" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m4.24 16L12 15.45L7.77 18l1.12-4.81l-3.73-3.23l4.92-.42L12 5l1.92 4.53l4.92.42l-3.73 3.23z" />
                        </svg> {{  }}3
                    </div>
                </div>
            </div>
            <div class="flex mt-auto">
                <img src="/public/image/route.svg" alt="" class="h-[15px] w-[20px]"><img src="/public/image/voiture.svg" alt="" class="h-[15px] w-[20px]">
            </div>
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

    
</template>

<style scoped>
.resultSearch-page{
    display: flex;
    flex-direction: column;
    gap: 10px;
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
    padding: 20px;
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
.type-de-deplacement{
display: flex;
justify-content:center;
align-items: center;
gap: 10px;
padding: 20px;

}
.moyen-de-deplacement{
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    background-color: #D9D9D9;
    width: 112px;
    height: 101px;
    top: 329px;
    left: 14px;
    gap: 0px;
    border-radius: 10px ;
    opacity: 0px;

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
    /* Demande de trajet itineraire  */
   

</style>
const {createApp} = Vue;

createApp({
    data(){
        return {

            // variabili definite da usare nelle funzioni
            activeSlideIndex: 0,
            autoplay : false,
            buttonText: 'Start Autoplay',
            intervalId: "",



            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morales',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, 
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, 
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, 
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, 
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
        }
    },
    mounted() {
        setInterval(this.nextSlide, 3000); // Autoplay ogni 3 secondi
    },
    methods: {
        nextSlide() {
            this.activeSlideIndex++;

            // controllo che l'indice non vada oltre l'ultima immagine
            if (this.activeSlideIndex >= this.slides.length) {
                this.activeSlideIndex = 0
            }
        },

        prevSlide() {
            this.activeSlideIndex--;

            // qui controllo che l'indice non vada oltre lo zero 
            if (this.activeSlideIndex < 0) {
                this.activeSlideIndex = this.slides.length - 1;
            }
        },

        // autoplay
        // toggleAutoplay() {
        //     this.autoplay = !this.autoplay;
        //     if (this.autoplay) {
        //       this.intervalId = setInterval(this.nextSlide, 3000);
        //     } else {
        //       clearInterval(this.intervalId);
        //     }
        // },

        // cambio slide al click
        showImage(index) {
            this.activeSlideIndex = index;
        },
    },
}).mount('#app');
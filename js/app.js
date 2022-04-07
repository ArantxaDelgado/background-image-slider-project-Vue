const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4"
];

Vue.createApp({
  data() {
    return {
      image: "contBcg-0",
      index: 0
    }
  },
/* mine => need to change in HTML :style (backgroundImage) to `url(./img/${image}.jpeg)`
methods: {

    slider(value) {
      this.index += value;

      if (this.index < 0) {
        this.index = pictures.length - 1;
      } 
      
      else if (this.index >= pictures.length) {
        this.index = 0;
      }

      this.image = pictures[this.index];
    }
  } */

  methods: {
    prevImage() {
      // TODO: Decrementar el index
      this.index--
      // TODO-2: Mirar si hemos llegado a 0 y entonces...

     /* if (this.index < 0) {
        this.index = pictures.length-1;        
      } */
    },

    nextImage() {
      // TODO: Incrementar el index
      this.index++
      // TODO-2: Mirar si hemos llegado al número máximo de elementos del array y entonces...

      /* if (this.index >= pictures.length) {
        this.index = 0;
      } */

    }
  },
  computed: {
    getUrl() {
      /* Module => 20/3 = 18
                    2 =>module
*/
      //using module instead of ifs
      const realIndex = Math.abs(this.index) % pictures.length;

      return `url(../img/${pictures[realIndex]}.jpeg)`;


      // tenemos que devolver un string a la ruta de la foto actual. Por ejemplo, la ruta de la primera foto es '../img/pictures[0]'
    }
  }
}).mount("#app");
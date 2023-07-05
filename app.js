const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  computed: {
    fullnames() {
      console.log("lol");
      if (this.counter < 37) {
        return (this.name = "Not there yet");
      } else if (this.counter === 37) {
        return (this.name = "You Found it!");
      } else {
        return (this.name = "Too much!");
      }
    },
  },
  watch: {
    counter(value) {
      if (value > 37) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 5000);
      }
    },
    // name(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = value + " " + "sss";
    //   }
    // },
    // lastname(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = this.name + " " + value;
    //   }
    // },
  },

  methods: {
    add1(num) {
      this.counter = this.counter + num;
    },
    add5(num) {
      this.counter = this.counter + num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#assignment");

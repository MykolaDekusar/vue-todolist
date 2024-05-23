"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "",
      list: [],
      initList: 0,
      circle_color: "red_circle",
    };
  },
  methods: {
    addText() {
      if (this.message !== "") {
        this.list[this.initList] = { text: this.message, done: false };
        this.initList++;
      }
      this.message = "";
      console.log(this.initList);
      document.getElementById("taskInput").value = "";
    },
    removeText() {
      this.list.splice(this.initList - 1, 1);
      if (this.list.length > 0) this.initList--;
    },
    removeSelectedText(index) {
      console.log(this.list);
      this.list.splice(index, 1);
      this.initList--;
    },
    updMessage(value) {
      console.log(value);
      this.message = value;
    },
    completedTask(index) {
      console.log(this.list);
      this.list[index].done = true;
    },
  },
}).mount("#app");

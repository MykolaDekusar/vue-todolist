"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "",
      list: [],
      initList: 0,
    };
  },
  methods: {
    addText() {
      if (this.message !== "") {
        this.list[this.initList] = { text: this.message, done: false };
        this.initList++;
      }
      this.message = "";
      document.getElementById("taskInput").value = "";
    },
    removeText() {
      this.list.splice(this.initList - 1, 1);
      if (this.list.length > 0) this.initList--;
    },
    removeSelectedText(index) {
      this.list.splice(index, 1);
      this.initList--;
    },
    updMessage(value) {
      this.message = value;
    },
    completedTask(index) {
      if (this.list[index].done === true) this.list[index].done = false;
      else if (this.list[index].done === false) this.list[index].done = true;
    },
  },
}).mount("#app");

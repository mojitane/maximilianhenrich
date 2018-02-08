Vue.component('wordcarousel', {
  template: '<transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutDown" mode="out-in"><span :key="word" style="display:inline-block">{{ word }}</span></transition>',
  props: ['wordList'],
  data: function() {
    return {
      wordPointer: 1,
      word: '',
    };
  },
  created() {
    this.word = this.wordList[0];
  },
  mounted() {
    window.setInterval(() => {
      this.word = this.wordList[this.wordPointer];
      if (this.wordPointer < (this.wordList.length - 1)) {
        this.wordPointer++;
      } else {
        this.wordPointer = 0;
      }
    }, 3000);
  }
});

var app = new Vue({
  el: '#app',
});

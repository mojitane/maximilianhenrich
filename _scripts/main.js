window.onload = function() {
  document.querySelector("#js-cta-button").addEventListener("click", function(event) {
          Jump('#js-contact-form', {
            duration: 500,
          });
          event.preventDefault();
  }, false);
  document.querySelector(".js-scroll-top").addEventListener("click", function(event) {
          Jump('.js-header', {
            duration: 500,
          });
          event.preventDefault();
  }, false);

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
};

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
if(document.getElementById("app")) {
  var app = new Vue({
    el: '#app',
  });
}

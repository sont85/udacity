(function() {
  var hero = {
    urls: [
      "images/WebDev1.jpg",
      "images/coding-super-power.jpg",
      "images/code-kid.jpeg"
    ],
    currentPic: 0,
    forward: function() {
      this.currentPic++
      if (this.currentPic > this.urls.length - 1) {
        this.currentPic = 0
      }
    },
    backward: function() {
      this.currentPic--
      if (this.currentPic < 0) {
        this.currentPic = this.urls.length - 1
      }
    }
  };

  var view = {
    init: function() {
      this.img = document.getElementById('heroImg');
      var forwardBtn = document.getElementById('forward');
      var backwardBtn = document.getElementById('backward');

      forwardBtn.addEventListener("click", function() {
        hero.forward();
        view.updateImg();
      })
      backwardBtn.addEventListener("click", function() {
        hero.backward();
        view.updateImg();
      })
    },
    updateImg: function() {
      this.img.src = controller.getPic();
    }
  }

  var controller = {
    init: function() {
      view.init();
      this.heroInterval()
    },
    getPic: function() {
      return hero.urls[hero.currentPic];
    },
    heroInterval: function() {
      setInterval(function() {
        hero.forward();
        view.updateImg();
      }, 10000)
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    controller.init()
  });
})();

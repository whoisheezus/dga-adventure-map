  // loc 4: hague

  $(".tag-hag").click(function () {
      $(".hide").hide();
      // для контроля выделения тэга
      if ($('#tag-hag').is('.collapsed')) {
          $(this).removeClass('collapsed');
      };
      $('.geotag').not(this).each(function () {
          $(this).addClass('collapsed');
      });
      // 
      audio.pause();
      document.getElementById("playHag").src = "img/play.png";
      clicks = 0;
      $(".hague").fadeIn(300);
      document.getElementById("hague").style.visibility = 'visible';
      document.getElementById("tag-hag").onmouseout = function () {
          this.style.border = '4px solid #F4B4D4';
      };
      document.getElementById("tag-hag").onmouseover = function () {
          this.style.border = '4px solid #F4B4D4';
      };
  });


  $(".playHag").click(function () {
      document.getElementById("audio").src = 'audio/ks-kuz.m4a';
      audio.play();
      clicks++;
      if (clicks % 2 == 0) {
          document.getElementById("playHag").src = "img/play.png";
          audio.pause();
      } else {
          document.getElementById("playHag").src = "img/pause.png";
      }
      audio.addEventListener("ended", function () {
          audio.currentTime = 0;
          document.getElementById("playHag").src = "img/play.png";
          clicks = 0;
          document.getElementById("tag-hag").style.border = '4px solid #ffffff';
      });
  });

  // рабочее закрытие 
  $(".hague .close").click(function () {
      $(".hague").fadeOut(300);
      audio.pause();
      document.getElementById("tag-hag").style.border = '4px solid #F0f0f0';
      document.getElementById("tag-hag").onmouseout = function () {
          this.style.border = '4px solid #f0f0f0';
      };
      document.getElementById("tag-hag").onmouseover = function () {
          this.style.border = '4px solid #F4B4D4';
      };
  });

  function location(tagclass, tagidhash, tagid, playid, playiddot, playsrc, cardclassdot, cardclose) {
      // нажатие на тэг
      $(tagclass).click(function () {
          $(".hide").hide();
          // для контроля выделения тэга
          if ($(tagidhash).is('.collapsed')) {
              $(this).removeClass('collapsed');
          };
          $('.geotag').not(this).each(function () {
              $(this).addClass('collapsed');
          });
          // 
          audio.pause();
          document.getElementById(playid).src = "img/play.png";
          clicks = 0;
          $(cardclassdot).fadeIn(300);
          document.getElementById("hague").style.visibility = 'visible';
          document.getElementById(tagid).onmouseout = function () {
              this.style.border = '4px solid #F4B4D4';
          };
          document.getElementById(tagid).onmouseover = function () {
              this.style.border = '4px solid #F4B4D4';
          };
      });

      //нажатие на плэй 
      $(playiddot).click(function () {
          document.getElementById("audio").src = playsrc;
          audio.play();
          clicks++;
          if (clicks % 2 == 0) {
              document.getElementById(playid).src = "img/play.png";
              audio.pause();
          } else {
              document.getElementById(playid).src = "img/pause.png";
          }
          audio.addEventListener("ended", function () {
              audio.currentTime = 0;
              document.getElementById(playid).src = "img/play.png";
              clicks = 0;
              document.getElementById(tagid).style.border = '4px solid #ffffff';
          });
      });

      // рабочее закрытие 
      $(cardclose).click(function () {
          $(cardclassdot).fadeOut(300);
          audio.pause();
          document.getElementById(tagid).style.border = '4px solid #F0f0f0';
          document.getElementById(tagid).onmouseout = function () {
              this.style.border = '4px solid #f0f0f0';
          };
          document.getElementById(tagid).onmouseover = function () {
              this.style.border = '4px solid #F4B4D4';
          };
      });
  }

  function tagpressed(tagidhash, playid, cardclassdot, cardid, tagid){
    $(".hide").hide();
          // для контроля выделения тэга
          if ($(tagidhash).is('.collapsed')) {
              $(this).removeClass('collapsed');
          };
          $('.geotag').not(this).each(function () {
              $(this).addClass('collapsed');
          });
          // 
          audio.pause();
          document.getElementById(playid).src = "img/play.png";
          clicks = 0;
          $(cardclassdot).fadeIn(300);
          document.getElementById(cardid).style.visibility = 'visible';
          document.getElementById(tagid).onmouseout = function () {
              this.style.border = '4px solid #F4B4D4';
          };
          document.getElementById(tagid).onmouseover = function () {
              this.style.border = '4px solid #F4B4D4';
          };
  }

  function playpressed(playsrc, playid, tagid){
    document.getElementById("audio").src = playsrc;
          audio.play();
          clicks++;
          if (clicks % 2 == 0) {
              document.getElementById(playid).src = "img/play.png";
              audio.pause();
          } else {
              document.getElementById(playid).src = "img/pause.png";
          }
          audio.addEventListener("ended", function () {
              audio.currentTime = 0;
              document.getElementById(playid).src = "img/play.png";
              clicks = 0;
              document.getElementById(tagid).style.border = '4px solid #ffffff';
          });
  }

  function closepressed(cardclassdot, tagid){
    $(cardclassdot).fadeOut(300);
          audio.pause();
          document.getElementById(tagid).style.border = '4px solid #F0f0f0';
          document.getElementById(tagid).onmouseout = function () {
              this.style.border = '4px solid #f0f0f0';
          };
          document.getElementById(tagid).onmouseover = function () {
              this.style.border = '4px solid #F4B4D4';
          };
  }
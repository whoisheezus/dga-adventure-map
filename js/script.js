function changeIndex(work) {
  document.getElementById(work).style.zIndex = '20';
}

function returnIndex(work) {
  document.getElementById(work).style.zIndex = "2";
}

function hideGeoBorder(className){
  var elements = document.getElementsByClassName(className);
  for(var i = 0, length = elements.length; i < length; i++) {
        elements[i].style.border = '4px solid #ffffff';
     } 
}

// функция нажатия тэга

function tagpressed(tagidhash, playid, cardclassdot, cardid, tagid, playsrc){
  $(".hide").hide();
        // для контроля выделения тэга
        if ($(tagidhash).is('.collapsed')) {
            $(tagidhash).removeClass('collapsed');
        };
        $('.geotag').not(tagidhash).each(function () {
            $(this).addClass('collapsed');
        });
        //
        if (tagid == 'spbnew') {
          $('.spbnew').children().removeClass('collapsed');
          $('.spbnew').children().css('border', '4px solid #F4B4D4');

        };
        //
        $('.inner').each(function () {
          this.style.width = '0%';
      });
      
        //
        document.getElementById("audio").src = playsrc;
        audio.pause();
        document.getElementById(playid).src = "img/play.png";
        clicks = 0;
        // document.getElementById(tagid).style.zIndex = '3';
        $(cardclassdot).fadeIn(300);
        document.getElementById(cardid).style.visibility = 'visible';
        document.getElementById(tagid).style.border = '4px solid #F4B4D4';
        document.getElementById(tagid).onmouseout = function () {
            this.style.border = '4px solid #F4B4D4';
        };
        document.getElementById(tagid).onmouseover = function () {
            this.style.border = '4px solid #F4B4D4';
        };
}

// тэг спб



// функция нажатия воспроизведения

function playpressed(playsrc, playid, tagid, inid, dur){
  // document.getElementById("audio").src = playsrc;
  // document.getElementById(inid).style.width = '0%';
  document.getElementById(inid).style.transitionDuration = dur;
  document.getElementById(inid).style.width = '100%';
        audio.play();
        clicks++;
        if (clicks % 2 == 0) {
            document.getElementById(playid).src = "img/play.png";
            audio.pause();
            document.getElementById(inid).style.width=getComputedStyle(document.getElementById(inid)).width;
        } else {
            document.getElementById(playid).src = "img/pause.png";
        }
        audio.addEventListener("ended", function () {
            audio.currentTime = 0;
            document.getElementById(inid).style.transitionDuration = '0s';
            document.getElementById(inid).style.width = '0%';
            document.getElementById(playid).src = "img/play.png";
            clicks = 0;
            document.getElementById(tagid).style.border = '4px solid #ffffff';
        });
}
// функция нажатия воспроизведения спб

function playpressedSpb(playsrc, playid, tagid, inid, dur){
  // document.getElementById("audio").src = playsrc;
  document.getElementById(inid).style.width = '0%';
  
  document.getElementById(inid).style.transitionDuration = dur;
  document.getElementById(inid).style.width = '100%';

  if($( "#" + playid ).hasClass( 'play' )){
    audio.play();
    $( "#" + playid ).removeClass('play').addClass('pause');
    document.getElementById(playid).src = "img/pause.png";
  } else {
    audio.pause();
    document.getElementById(playid).src = "img/play.png";
    document.getElementById(inid).style.width=getComputedStyle(document.getElementById(inid)).width;
    $( "#" + playid ).removeClass('pause').addClass('play');
  }

        // audio.play();
        // clicks++;
        // if (clicks % 2 == 0) {
        //     document.getElementById(playid).src = "img/play.png";
        //     audio.pause();
        //     document.getElementById(inid).style.width=getComputedStyle(document.getElementById(inid)).width;
        // } else {
        //     document.getElementById(playid).src = "img/pause.png";
        // }
        audio.addEventListener("ended", function () {
            audio.currentTime = 0;
            document.getElementById(inid).style.transitionDuration = '0s';
            document.getElementById(inid).style.width = '0%';
            document.getElementById(playid).src = "img/play.png";
            clicks = 0;
            document.getElementById(tagid).style.border = '4px solid #ffffff';
            $( "#" + playid ).removeClass('pause').addClass('play');
        });


        
}


// функция закрытия

function closepressed(cardclassdot, tagid, tagidhash, inid){
  $(cardclassdot).fadeOut(300);
        audio.pause();
        document.getElementById(inid).style.transitionDuration = '0s';
        document.getElementById(inid).style.width = '0%';
        document.getElementById(tagid).style.border = '4px solid #Ffffff';
        document.getElementById(tagid).onmouseout = function () {
            this.style.border = '4px solid #ffffff';
        };
        document.getElementById(tagid).onmouseover = function () {
            this.style.border = '4px solid #F4B4D4';
        };

        if (tagid == 'spbnew') {
          $('.spbnew').children().addClass('collapsed');
          $('.spbnew').children().css('border', '4px solid #fff');

        };

        if ($(tagidhash).is('.index2')) {
          document.getElementById(tagid).onmouseout = function () {
            // this.style.zIndex = '2';
            this.style.border = '4px solid #ffffff';
        };
        document.getElementById(tagid).onmouseover = function () {
            // this.style.zIndex = '3';
            this.style.border = '4px solid #F4B4D4';
        };
        // document.getElementById(tagid).style.zIndex = '2';
        document.getElementById(tagid).style.border = '4px solid #Ffffff';
        $('.geotag').each(function () {
          $(this).addClass('collapsed');
      });

      };
}

function replaceBio(bioid, bioidhash, tagidhash, playid, playsrc) {
  // document.getElementById("div1").style.display="none";
  // показать правильно био, скрыть остальные
  document.getElementById(bioid).style.display="block";
  $('.bio').not(bioidhash).each(function () {
    $(this).css("display","none");
  
    // выделить нужный тег, дав ему нужный класс
    if ($(tagidhash).is('.collapsed')) {
      $(tagidhash).removeClass('collapsed');
      $(tagidhash).addClass('selected');
  };
  $('.ph').not(tagidhash).each(function () {
    $(this).removeClass('selected');
      $(this).addClass('collapsed');
  });

});

$('.inner').each(function () {
  this.style.width = '0%';
});
//
$( "#" + playid ).removeClass('pause').addClass('play');
$('.playerspb').not( "#" + playid ).removeClass('play').addClass('pause');
//
document.getElementById("audio").src = playsrc;
audio.pause();
document.getElementById(playid).src = "img/play.png";
clicks = 0;
//



  }

// функции спб
// нажатие человека



// пытаюсь задать функцию закрытия карточки, переменные - в кавычках, не получилось

// function closeCard(location, playLocationID, tagID) {
//   // $(".hide").hide();
//   $(location).fadeOut(300);
//   audio.pause();
//   document.getElementById(playLocationID).src = "img/play.png";
//   document.getElementById(tagID).style.border = '4px solid #Ffffff';
//   document.getElementById(tagID).onmouseout = function () {
//     this.style.border = '4px solid #ffffff';
//   };
//   document.getElementById(tagID).onmouseover = function () {
//     this.style.border = '4px solid #F4B4D4';
//   };

// }

// function audioControl(){

// }

var clicks = 0;

$(document).ready(function () {

  // $(".geotag").hover(function() {
  //   $(this).stop().animate({ backgroundColor: "#FF4500"}, 400);
  //   },function() {
  //   $(this).stop().animate({ backgroundColor: "#ffffff" }, 400);
  //   });

  $(".hide").hide();
  $(".white-bg").hide();
  $(".gallery").hide();

  //

  // 
  $(function() {
    $('.tag-spb-2').hover(function() {
      $('.tag-spb-x').css('border', '4px solid #F4B4D4'); 
      $('.tag-spb-2').css('border', '4px solid #F4B4D4');  
      $('.tag-spb-1').css('border', '4px solid #F4B4D4');
    }, function() {
      // on mouseout, reset the background colour
      $('.tag-spb-x').css('border', '4px solid #fff'); 
      $('.tag-spb-2').css('border', '4px solid #fff');
      $('.tag-spb-1').css('border', '4px solid #fff');
    });
  });

  $(function() {
    $('.tag-spb-1').hover(function() {
      $('.tag-spb-x').css('border', '4px solid #F4B4D4'); 
      $('.tag-spb-2').css('border', '4px solid #F4B4D4');  
      $('.tag-spb-1').css('border', '4px solid #F4B4D4');
    }, function() {
      // on mouseout, reset the background colour
      $('.tag-spb-x').css('border', '4px solid #fff'); 
      $('.tag-spb-2').css('border', '4px solid #fff');
      $('.tag-spb-1').css('border', '4px solid #fff');
    });
  });

  $(function() {
    $('.tag-spb-x').hover(function() {
      $('.tag-spb-x').css('border', '4px solid #F4B4D4'); 
      $('.tag-spb-2').css('border', '4px solid #F4B4D4');  
      $('.tag-spb-1').css('border', '4px solid #F4B4D4');
    }, function() {
      // on mouseout, reset the background colour
      $('.tag-spb-x').css('border', '4px solid #fff'); 
      $('.tag-spb-2').css('border', '4px solid #fff');
      $('.tag-spb-1').css('border', '4px solid #fff');
    });
  });
  //
  


  $(".memBut").click(function () {
    // $(".svg-div").hide();
    $(".white-bg").fadeIn(500);
    $(".svg-div").fadeOut(500);
    $('.geotag').each(function () {
      $(this).addClass('collapsed');
  });
    // $(".geotag").fadeOut(500);
    $(".geotag").hide();
    $(".card-base").fadeOut(500);
    $(".card-big").fadeOut(500);
    document.getElementById("memBut").style.backgroundColor = '#EBF190';
    document.getElementById("mapBut").style.backgroundColor = '#fff';
    // document.body.style.backgroundColor = '#fff';
    document.getElementById("gallery").style.visibility = 'visible';
    document.getElementById("gallery-wrap").style.zIndex = '50';
    $(".gallery").fadeIn(500);
    // $("body").stop().animate({ backgroundColor: "#ababab" }, 500);
    document.getElementById("body").style.backgroundColor = '#f0f0f0';
  });

  $(".mapBut").click(function () {
    // $(".svg-div").hide();
    $(".white-bg").fadeOut(500);
    $(".svg-div").fadeIn(500);
    document.getElementById("mapBut").style.backgroundColor = '#EBF190';
    document.getElementById("memBut").style.backgroundColor = '#fff';
    document.body.style.backgroundColor = '#DCDCDC';
    document.getElementById("gallery-wrap").style.zIndex = '-20';
    $(".gallery").fadeOut(500);

    // $("body").stop().animate({ backgroundColor: "#DCDCDC" }, 500);
    document.getElementById("body").style.backgroundColor = '#DCDCDC';
    // $(".geotag").fadeIn(500);
    $(".geotag").show();
  });

  
  // $(".tag-fin").click(function () {
  //   $(".hide").hide();
  //   audio.pause();
  //   clicks = 0;
  //   // для контроля выделения тэга
  //   if ($('#tag-fin').is('.collapsed')){
  //     $(this).removeClass('collapsed');
  //   };
  //   $('.geotag').not(this).each(function(){
  //     $(this).addClass('collapsed');
  //   });
  //   // 
  //   document.getElementById("playFin").src = "img/play.png";
  //   $(".finland").fadeIn(300);
  //   document.getElementById("finland").style.visibility = 'visible';
  //   // document.getElementById("tag-fin").style.border = '4px solid #F4B4D4';
  //   document.getElementById("tag-fin").onmouseout = function () {
  //     this.style.border = '4px solid #F4B4D4';
  //   };
  //   document.getElementById("tag-fin").onmouseover = function () {
  //     this.style.border = '4px solid #F4B4D4';
  //   };
  //   // document.getElementById("menu").style.zIndex = '0' ; 
  //   // document.getElementById("finGroup").style.zIndex = '50'
  //   // document.getElementById("menu-wrap").style.zIndex = '-10'

  // });


  // $(".playFin").click(function () {
  //   document.getElementById("audio").src = 'audio/audio2.mp3';
  //   audio.play();
  //   clicks++;
  //   if (clicks % 2 == 0) {
  //     document.getElementById("playFin").src = "img/play.png";
  //     audio.pause();
  //   } else {
  //     document.getElementById("playFin").src = "img/pause.png";
  //   }
  //   audio.addEventListener("ended", function () {
  //     audio.currentTime = 0;
  //     document.getElementById("playFin").src = "img/play.png";
  //     clicks = 0;
  //     document.getElementById("tag-fin").style.border = '4px solid #ffffff';
  //   });

  // });


  // //       $(".buttonFin").click(function(){
  // //         clicks++;

  // // audio.play();
  // //       });

  // // рабочее закрытие 
  // $(".finland .close").click(function () {
  //   // закоменчено $(".hide").hide();
  //   $(".finland").fadeOut(300);
  //   audio.pause();
  //   document.getElementById("tag-fin").style.border = '4px solid #F0f0f0';
  //   document.getElementById("tag-fin").onmouseout = function () {
  //     this.style.border = '4px solid #f0f0f0';
  //   };
  //   document.getElementById("tag-fin").onmouseover = function () {
  //     this.style.border = '4px solid #F4B4D4';
  //   };
  //   // закоменчено document.getElementById("menu-wrap").style.zIndex = '0'
  // });

  // // loc 2: astana-1

  // $(".tag-ast-1").click(function () {
  //   $(".hide").hide();
  //   audio.pause();
  //   // для контроля выделения тэга
  //   if ($('#tag-ast-1').is('.collapsed')){
  //     $(this).removeClass('collapsed');
  //   };
  //   $('.geotag').not(this).each(function(){
  //     $(this).addClass('collapsed');
  //   });
  //   // 
  //   document.getElementById("playAst1").src = "img/play.png";
  //   clicks = 0;
  //   $(".astana-1").fadeIn(300);
  //   document.getElementById("astana-1").style.visibility = 'visible';
  //   document.getElementById("tag-ast-1").onmouseout = function () {
  //     this.style.border = '4px solid #F4B4D4';
  //   };
  //   document.getElementById("tag-ast-1").onmouseover = function () {
  //     this.style.border = '4px solid #F4B4D4';
  //   };
  // });


  // $(".playAst1").click(function () {
  //   document.getElementById("audio").src = 'audio/k-sh.ogg';
  //   audio.play();
  //   clicks++;
  //   if (clicks % 2 == 0) {
  //     document.getElementById("playAst1").src = "img/play.png";
  //     audio.pause();
  //   } else {
  //     document.getElementById("playAst1").src = "img/pause.png";
  //   }
  //   audio.addEventListener("ended", function () {
  //     audio.currentTime = 0;
  //     document.getElementById("playAst1").src = "img/play.png";
  //     clicks = 0;
  //     document.getElementById("tag-ast-1").style.border = '4px solid #ffffff';
  //   });
  // });

  // // рабочее закрытие 
  // $(".astana-1 .close").click(function () {
  //   $(".astana-1").fadeOut(300);
  //   audio.pause();
  //   document.getElementById("tag-ast-1").style.border = '4px solid #F0f0f0';
  //   document.getElementById("tag-ast-1").onmouseout = function () {
  //     this.style.border = '4px solid #f0f0f0';
  //   };
  //   document.getElementById("tag-ast-1").onmouseover = function () {
  //     this.style.border = '4px solid #F4B4D4';
  //   };
  // });

  // loc 3: astana-2

  // $(".tag-ast-2").click(function () {
  //   $(".hide").hide();
  //   // для контроля выделения тэга
  //   if ($('#tag-ast-2').is('.collapsed')){
  //     $(this).removeClass('collapsed');
  //   };
  //   $('.geotag').not(this).each(function(){
  //     $(this).addClass('collapsed');
  //   });
  //   // 
  //   audio.pause();
  //   document.getElementById("playAst2").src = "img/play.png";
  //   clicks = 0;
  //   $(".astana-2").fadeIn(300);
  //   document.getElementById("astana-2").style.visibility = 'visible';
  //   document.getElementById("tag-ast-2").onmouseout = function () {
  //     this.style.border = '4px solid #F4B4D4';
  //   };
  //   document.getElementById("tag-ast-2").onmouseover = function () {
  //     this.style.border = '4px solid #F4B4D4';
  //   };
  // });


  // $(".playAst2").click(function () {
  //   document.getElementById("audio").src = 'audio/k-sh.ogg';
  //   audio.play();
  //   clicks++;
  //   if (clicks % 2 == 0) {
  //     document.getElementById("playAst2").src = "img/play.png";
  //     audio.pause();
  //   } else {
  //     document.getElementById("playAst2").src = "img/pause.png";
  //   }
  //   audio.addEventListener("ended", function () {
  //     audio.currentTime = 0;
  //     document.getElementById("playAst2").src = "img/play.png";
  //     clicks = 0;
  //     document.getElementById("tag-ast-2").style.border = '4px solid #ffffff';
  //   });
  // });

  // // рабочее закрытие 
  // $(".astana-2 .close").click(function () {
  //   $(".astana-2").fadeOut(300);
  //   audio.pause();
  //   document.getElementById("tag-ast-2").style.border = '4px solid #F0f0f0';
  //   document.getElementById("tag-ast-2").onmouseout = function () {
  //     this.style.border = '4px solid #f0f0f0';
  //   };
  //   document.getElementById("tag-ast-2").onmouseover = function () {
  //     this.style.border = '4px solid #F4B4D4';
  //   };
  // });

  // // loc 4: hague

  // $(".tag-hag").click(function () {
  //   $(".hide").hide();
  //   // для контроля выделения тэга
  //   if ($('#tag-hag').is('.collapsed')){
  //     $(this).removeClass('collapsed');
  //   };
  //   $('.geotag').not(this).each(function(){
  //     $(this).addClass('collapsed');
  //   });
  //   // 
  //   audio.pause();
  //   document.getElementById("playHag").src = "img/play.png";
  //   clicks = 0;
  //   $(".hague").fadeIn(300);
  //   document.getElementById("hague").style.visibility = 'visible';
  //   document.getElementById("tag-hag").onmouseout = function () {
  //     this.style.border = '4px solid #F4B4D4';
  //   };
  //   document.getElementById("tag-hag").onmouseover = function () {
  //     this.style.border = '4px solid #F4B4D4';
  //   };
  // });


  // $(".playHag").click(function () {
  //   document.getElementById("audio").src = 'audio/ks-kuz.m4a';
  //   audio.play();
  //   clicks++;
  //   if (clicks % 2 == 0) {
  //     document.getElementById("playHag").src = "img/play.png";
  //     audio.pause();
  //   } else {
  //     document.getElementById("playHag").src = "img/pause.png";
  //   }
  //   audio.addEventListener("ended", function () {
  //     audio.currentTime = 0;
  //     document.getElementById("playHag").src = "img/play.png";
  //     clicks = 0;
  //     document.getElementById("tag-hag").style.border = '4px solid #ffffff';
  //   });
  // });

  // // рабочее закрытие 
  // $(".hague .close").click(function () {
  //   $(".hague").fadeOut(300);
  //   audio.pause();
  //   document.getElementById("tag-hag").style.border = '4px solid #F0f0f0';
  //   document.getElementById("tag-hag").onmouseout = function () {
  //     this.style.border = '4px solid #f0f0f0';
  //   };
  //   document.getElementById("tag-hag").onmouseover = function () {
  //     this.style.border = '4px solid #F4B4D4';
  //   };
  // });



});
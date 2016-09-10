$(function(){
  // window.onload = function(){
  //   var red = document.getElementById('red');
  //   var blue = document.getElementById('blue');
  //   var green = document.getElementById('green');
  //   var yellow = document.getElementById('yellow');
  //   red.onclick = $(function(){
  //       range.css('color', 'red');
  //   });
  // };
  // window.onselect = function(){
  //   var selection = window.getSelection();
  //   var range = selection.getRangeAt(0);
  //   console.log('aaa');
  // };

  $('#red').click(function(){
    alert("ok");
    var word = $('textarea').selection();
    alert(word);
    var whole = $('#body-html').val();
    // alert(whole)
    var split = whole.split(word);
    // alert(split)
    //alert(split[0])
    var newword = split[0]+"<span style=\'color:red\'>"+word+"</span>"+split[1]
    alert(newword)
    $("#body").html(newword);
    $("#body-html").val(newword);

    var titleword = $('.title').selection();
    // alert(word)
    var titlewhole = $('#title-html').val();
    // alert(whole)
    var titlesplit = whole.split(titleword);
    // alert(split)
    //alert(split[0])
    var titlenewword = titlesplit[0]+"<span style='color:red'>"+word+"</span>"+titlesplit[1]
    $(".title").html(titlenewword);
    $("#title-html").val(titlenewword);
  });

  $('#blue').click(function(){
    var word = $('textarea').selection();
    // alert(word)
    var whole = $('#body-html').val();
    // alert(whole)
    var split = whole.split(word);
    // alert(split)
    //alert(split[0])
    var newword = split[0]+"<span style='color:blue'>"+word+"</span>"+split[1]
    $("#body").html(newword);
    $("#body-html").val(newword);

    var titleword = $('.title').selection();
    // alert(word)
    var titlewhole = $('#title-html').val();
    // alert(whole)
    var titlesplit = whole.split(titleword);
    // alert(split)
    //alert(split[0])
    var titlenewword = titlesplit[0]+"<span style='color:blue'>"+word+"</span>"+titlesplit[1]
    $(".title").html(titlenewword);
    $("#title-html").val(titlenewword);
  });

  $('#green').click(function(){
    var word = $('textarea').selection();
    // alert(word)
    var whole = $('#body-html').val();
    // alert(whole)
    var split = whole.split(word);
    // alert(split)
    //alert(split[0])
    var newword = split[0]+"<span style='color:green'>"+word+"</span>"+split[1]
    $("#body").html(newword);
    $("#body-html").val(newword);

    var titleword = $('.title').selection();
    // alert(word)
    var titlewhole = $('#title-html').val();
    // alert(whole)
    var titlesplit = whole.split(titleword);
    // alert(split)
    //alert(split[0])
    var titlenewword = titlesplit[0]+"<span style='color:green'>"+word+"</span>"+titlesplit[1]
    $(".title").html(titlenewword);
    $("#title-html").val(titlenewword);
  });

  $('#yellow').click(function(){
    var word = $('textarea').selection();
    // alert(word)
    var whole = $('#body-html').val();
    // alert(whole)
    var split = whole.split(word);
    // alert(split)
    //alert(split[0])
    var newword = split[0]+"<span style='color:yellow'>"+word+"</span>"+split[1]
    $("#body").html(newword);
    $("#body-html").val(newword);

    var titleword = $('.title').selection();
    // alert(word)
    var titlewhole = $('#title-html').val();
    // alert(whole)
    var titlesplit = whole.split(titleword);
    // alert(split)
    //alert(split[0])
    var titlenewword = titlesplit[0]+"<span style='color:yellow'>"+word+"</span>"+titlesplit[1]
    $(".title").html(titlenewword);
    $("#title-html").val(titlenewword);
  });

  $('input').keyup(function(){
      var title = $('input').val();
      var newtitle = "<h2>"+title+"</h2>"
      $("#title").html(newtitle);
      $("#title-html").val(newbody);
  });
  $("textarea").keyup(function(){
    // var textarea = $('textarea').val();
    // $("#body-html").val(textarea)
    var body = $('textarea').val();
    var newbody  = "<p>"+body+"</p>"
    $("#body").html(newbody);
    $("#body-html").val(newbody);
  });
  $('#number').keyup(function(){
    var word = $('textarea').selection();
    var whole = $('#body-html').val();
    var number = $('#number').val();
    var sprit = whole.sprit(word);
    var titlenewword = titlesplit[0]+"<span         style='font-size:+number+;'>"+word+"</span>"+titlesplit[1]


  });
});

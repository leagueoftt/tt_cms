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
    var word = $('textarea').selection();
    // alert(word)
    var whole = $('textarea').val();
    // alert(whole)
    var split = whole.split(word);
    // alert(split)
    //alert(split[0])
    var newword = split[0]+"<span style='color:red'>"+word+"</span>"+split[1]
    // alert(newword)
    $("#body").html(newword);
    $("#body-html").val(newword);
  });
  $('input').keyup(function(){
      var title = $('input').val();
      var newtitle = "<h2>"+title+"</h2>"
      $("#title").html(newtitle);
  });
  $('textarea').keyup(function(){
    var body = $('textarea').val();
    var newbody  = "<p>"+body+"</p>"
    $("#body").html(newbody);
    $("#body-html").val(newbody);
  });
  $('#number').keyup(function(){
    var word = $('textarea').selection();
    // alert(word)
    var whole = $('#body-html').val();
    // alert(whole)
    var number = $('#number').val();
    // alert(number)
    var split = whole.split(word);
    // alert(split)
    var newword = split[0]+"<span      style='font-size:"+number+"px;'>"+word+"</span>"+split[1]
    // alert(newword)
    $("#body").html(newword);
    $("#body-html").val(newword);
  });
});

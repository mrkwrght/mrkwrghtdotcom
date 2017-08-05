
$(document).ready(function(){
  $('.random' ).each(function(index) {
    var color = "000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    var targetBox = document.getElementsByClassName("random")[index];
    targetBox.style.color = "#" + color;

  });
});

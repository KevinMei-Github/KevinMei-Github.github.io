window.onload = function(){
    (function(){
        var hoverDelay = 200;
    function dropDown(){
          $(".navi_index_column_item:hover").children("ul.navi_index_column_dropdown").slideDown();
    }
    var hoverTime;
 $(".navi_index_column_item").hover(function(){
     clearTimeout(hoverTime);
     hoverTime = setTimeout(dropDown,hoverDelay);
 },function(){
      $(this).children("ul.navi_index_column_dropdown").slideUp();
 });
    })()
}
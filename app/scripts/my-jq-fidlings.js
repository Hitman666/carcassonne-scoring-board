$(window).resize(function(){
   var width = $(window).width();
   if(width < 768){
       $('.btn-large').removeClass('btn-large').addClass('btn-medium');
   }
   else{
       $('.btn-medium').removeClass('btn-medium').addClass('btn-large');
   }
})
.resize();//trigger the resize event on page load.
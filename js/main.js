$(function(){
   // Hook up show/hide faq questions
   $('.question').on('click', function(){
      $(this).next().toggle();
   });
});
$(function(){

 
 $(document).ready(function(){
     $("#submit_todo").on('click', function(){
         var value =$("#todo__input").val();
         if(value!== ''){
             var element = $("<li></li>").text(value);
             $('#todoList').append(element);
             $('#todoList').val(" ");
             
             
         }


     })



    
     })


     $("#todolist").on('click', function(){
         $("#container__todo").slideToggle();
     })


    })
  
    



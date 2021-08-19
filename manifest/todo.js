
 $(document).ready(function(){
     $("#submit_todo").on('click', function(){
         var value =$("#todo__input").val();
         if(value!== ''){
             var element = $("<li></li>").text(value);
             var btn = $("<button class='rem'>X</button>");
             $(element).append(btn);
             $('#todoList').append(element);
             $('#todoList').val(" ");
             
         }


     })

 })
 
  
    



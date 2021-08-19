
 $(document).ready(function(){
     $("#add").on('click', function(){
         var value =$("#todoList").val();
         if(value!== ''){
             var element = $("<li></li>").text(value);
             var btn = $("<button class='rem'>X</button>");
             $(elem).append(btn);
             $('#todoList').append(elem);
             $('#todoList').val("");
             $
         }


     })

 })
 
  
    



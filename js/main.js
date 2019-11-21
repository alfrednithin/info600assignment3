  $(document).ready(function(){
    $("#loadData").click(function(){
    $("#showData").empty();
    $.getJSON("/users", function(result){
      $.each(result, function(i, field){

       for(var j=0; j<field.length; j++){

        $("#showData").append(field[j].fullName + " , " + field[j].major + " ,  " + field[j].startYear + "<button value='" + field[j].id + "' id ='deleteData'>Delete</button>"  + "<br>" );
        console.log(field[j].id);
        
         }
      
      });
    });
    });
  });



  $(document).ready(function(){
    $("#addRec").click(function(){
    const startYear= document.getElementById('startYear').value;
    if (startYear <= 2000) 

      {
      window.alert('Incorrect year: ' + startYear)
      return
      }

    $.ajax ({

        method:'POST',
        url:'/users/',
        type:'POST',
        data: {

          fullName:$('#fullName').val(),
          major:$('#major').val(),
          startYear: $('#startYear').val(),
          
        }
        
        
      });

      document.getElementById('inputs').reset();

      });
      });
      
      
      
      
  $(document).on("click","#deleteData",function(){

     const id= $(this).val(); 
    console.log(id);
    $.ajax({

        method:'DELETE',
        url:'/user/'+id,
        type:'',
        
        cache: false,
        
          
        }
        
        
      )
      
      onLoad();

      });
      
      
      
    
function onLoad(){

      document.getElementById("showData").innerHTML = " ";
      $.getJSON("/users", function(result){
      $.each(result, function(i, field){
       for(var j=0; j<field.length; j++){

        $("#showData").append(field[j].fullName + " , " + field[j].major + " ,  " + field[j].startYear + "<button value='" + field[j].id + "' id ='deleteData'>Delete</button>" + "<br>" );
        console.log(field[j].id);

         }
      
      });
    });
    }
         
      
      
  
// document.body.style.backgroundColor = "maroon";
// $("body").css("background-color", "orange");
// var el = document.getElementById("secondLog");
// el.innerText = "who cares about barrys parking"


$(document).ready(function(){
  
  
    $("#saveParking").on("click", function(){
  
      let statusText = underConstruction("not ready");      
      $("#saveParking").text(statusText).prop(   "disabled", true);
      
    });
     
    function underConstruction(status){
      return "Not Yet Ready"
    };
  }
);
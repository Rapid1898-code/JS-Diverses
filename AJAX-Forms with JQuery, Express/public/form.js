$(document).ready(function () {
  $("form").submit(function (event) {
    $(".form-group").removeClass("has-error");
    $(".help-block").remove();    
    var formData = {
      nameForm: $("#name").val(),
      email: $("#email").val(),
      superheroAlias: $("#superheroAlias").val(),
    };

    console.log("Drinnen!")

    // console.log(formData.nameForm)
    // console.log(formData.email)
    // console.log(formData.superheroAlias)      

    $.ajax({
      type: "POST",
      url: "process.php",
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function (data) {
      // console.log(`DEBUG data ${data}`);

      if (!data.success) {
        if (data.errors.name) {
          $("#name-group").addClass("has-error");
          $("#name-group").append(
            '<div class="help-block">' + data.errors.name + "</div>"
          );
        }

        if (data.errors.email) {
          $("#email-group").addClass("has-error");
          $("#email-group").append(
            '<div class="help-block">' + data.errors.email + "</div>"
          );
        }

        if (data.errors.superheroAlias) {
          $("#superhero-group").addClass("has-error");
          $("#superhero-group").append(
            '<div class="help-block">' + data.errors.superheroAlias + "</div>"
          );
        }
      } else {
        // $("form").html(
        //   '<div class="alert alert-success">' + 'Sucess!' + "</div>"
        // );
        $("#myForm")[0].reset();
        $("#superhero-group").addClass("has-error");
        $("#superhero-group").append(
          '<div class="help-block">' + "Success!" + "</div>"
        );
        setTimeout(
          function(){
            $(".form-group").removeClass("has-error");
            $(".help-block").remove();                           
          }, 
          3000
        );        
      }      
    });
    event.preventDefault();
  });
});
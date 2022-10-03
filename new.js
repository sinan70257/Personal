$(document).ready(function(){

    jQuery.validator.addMethod("noSpace", function(value, element)
    	{ return value.indexOf(" ") < 0 && value != ""; }, "No space please and don't leave it empty");


        $('#btn').on('click', function() {
            $("#submit-form").validate({
                rules: {
                    name: {
                        required: true, 
                        noSpace: true   
                    },
                    mail: {
                        required: true,
                        mail: true
                    },
                    sub: {
                        required: true,
                        noSpace: true
                    },
                    messages: {
                        required: true,
                        noSpace: true
                    }
                    
    
                }
            });




})
})

$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxv_u9mt2ahwf3KD_wZMr3jQESIyupmZBVfD0JOZ1lDCwkv_FUrCkWJLOqV2zMWUFI0/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            // window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")
 
        }
    })
 })


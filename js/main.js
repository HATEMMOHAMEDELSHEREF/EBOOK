/*
var first_name=document.getElementById('register_first_name').onblur=function(){
    firstname=$('#register_first_name').val();
    $.ajax({
        url:"classes/user.php",
        method:"POST",
        data:{name:"first_name",value:firstname,action:"validation"},
        success:function(result){
            if(result==true){
                $('#register_first_name').parent().removeClass('has-error');
                $('#register_first_name').parent().children('span').remove();
                var sign1=document.createElement('span');
                sign1.setAttribute('class','form-control-feedback');
                var sign2=document.createElement('i');
                sign2.setAttribute('class','fa fa-check-circle');
                sign1.appendChild(sign2);
                
                var parent=$('#register_first_name').parent();
                parent.addClass('has-feedback');
                parent.addClass('has-success');
                document.getElementById('register_first_name').parentNode.appendChild(sign1);
                $('#showmsgerror').removeClass('alert alert-warning');
                $('#showmsgerror').html("");
            }else{
                $('#register_first_name').parent().children('span').remove();
                $('#register_first_name').parent().removeClass('has-feedback');
                $('#register_first_name').parent().removeClass('has-success');

                $('#register_first_name').parent().children('span').remove();
                var sign1=document.createElement('span');
                sign1.setAttribute('class','form-control-feedback');
                var sign2=document.createElement('i');
                sign2.setAttribute('class','fa fa-times-circle');
                sign1.appendChild(sign2);
                
                var parent=$('#register_first_name').parent();
                parent.addClass('has-feedback');
                parent.addClass('has-error');
                document.getElementById('register_first_name').parentNode.appendChild(sign1);
                $('#showmsgerror').addClass('alert alert-warning');
                $('#showmsgerror').html(result);
            }
        },
        error:function(){

        }
    });

}
var last_name=document.getElementById('register_last_name').onblur=function(){
    lastname=$('#register_last_name').val();
    $.ajax({
        url:"classes/user.php",
        method:"POST",
        data:{name:"last_name",value:lastname,action:"validation"},
        success:function(result){
            if(result==true){
                $('#register_last_name').parent().removeClass('has-error');
                $('#register_last_name').parent().children('span').remove();
                var sign1=document.createElement('span');
                sign1.setAttribute('class','form-control-feedback');
                var sign2=document.createElement('i');
                sign2.setAttribute('class','fa fa-check-circle');
                sign1.appendChild(sign2);
                
                var parent=$('#register_last_name').parent();
                parent.addClass('has-feedback');
                parent.addClass('has-success');
                document.getElementById('register_last_name').parentNode.appendChild(sign1);
                $('#showmsgerror').removeClass('alert alert-warning');
                $('#showmsgerror').html("");
            }else{
                $('#register_last_name').parent().children('span').remove();
                $('#register_last_name').parent().removeClass('has-feedback');
                $('#register_last_name').parent().removeClass('has-success');

                $('#register_last_name').parent().children('span').remove();
                var sign1=document.createElement('span');
                sign1.setAttribute('class','form-control-feedback');
                var sign2=document.createElement('i');
                sign2.setAttribute('class','fa fa-times-circle');
                sign1.appendChild(sign2);
                
                var parent=$('#register_last_name').parent();
                parent.addClass('has-feedback');
                parent.addClass('has-error');
                document.getElementById('register_last_name').parentNode.appendChild(sign1);
                $('#showmsgerror').addClass('alert alert-warning');
                $('#showmsgerror').html(result);
            }
        },
        error:function(){

        }
    });

}
var birthdate=document.getElementById('register_birthdate').onblur=function(){
    birthdate=$('#register_birthdate').val();
    $.ajax({
        url:"classes/user.php",
        method:"POST",
        data:{name:"birthdate",value:birthdate,action:"validation"},
        success:function(result){
            if(result==true){
                $('#register_birthdate').parent().removeClass('has-error');
                $('#register_birthdate').parent().children('span').remove();
                var sign1=document.createElement('span');
                sign1.setAttribute('class','form-control-feedback');
                var sign2=document.createElement('i');
                sign2.setAttribute('class','fa fa-check-circle');
                sign1.appendChild(sign2);
                
                var parent=$('#register_birthdate').parent();
                parent.addClass('has-feedback');
                parent.addClass('has-success');
                document.getElementById('register_birthdate').parentNode.appendChild(sign1);
                $('#showmsgerror').removeClass('alert alert-warning');
                $('#showmsgerror').html("");
            }else{
                $('#register_birthdate').parent().children('span').remove();
                $('#register_birthdate').parent().removeClass('has-feedback');
                $('#register_birthdate').parent().removeClass('has-success');

                $('#register_birthdate').parent().children('span').remove();
                var sign1=document.createElement('span');
                sign1.setAttribute('class','form-control-feedback');
                var sign2=document.createElement('i');
                sign2.setAttribute('class','fa fa-times-circle');
                sign1.appendChild(sign2);
                
                var parent=$('#register_birthdate').parent();
                parent.addClass('has-feedback');
                parent.addClass('has-error');
                document.getElementById('register_birthdate').parentNode.appendChild(sign1);
                $('#showmsgerror').addClass('alert alert-warning');
                $('#showmsgerror').html(result);
            }
        },
        error:function(){

        }
    });

}
var phone=document.getElementById('register_phone').onblur=function(){
    phone=$('#register_phone').val();
    $.ajax({
        url:"classes/user.php",
        method:"POST",
        data:{name:"phone",value:phone,action:"validation"},
        success:function(result){
            if(result==true){
                $('#register_phone').parent().removeClass('has-error');
                $('#register_phone').parent().children('span').remove();
                var sign1=document.createElement('span');
                sign1.setAttribute('class','form-control-feedback');
                var sign2=document.createElement('i');
                sign2.setAttribute('class','fa fa-check-circle');
                sign1.appendChild(sign2);
                
                var parent=$('#register_phone').parent();
                parent.addClass('has-feedback');
                parent.addClass('has-success');
                document.getElementById('register_phone').parentNode.appendChild(sign1);
                $('#showmsgerror').removeClass('alert alert-warning');
                $('#showmsgerror').html("");
            }else{
                $('#register_phone').parent().children('span').remove();
                $('#register_phone').parent().removeClass('has-feedback');
                $('#register_phone').parent().removeClass('has-success');

                $('#register_phone').parent().children('span').remove();
                var sign1=document.createElement('span');
                sign1.setAttribute('class','form-control-feedback');
                var sign2=document.createElement('i');
                sign2.setAttribute('class','fa fa-times-circle');
                sign1.appendChild(sign2);
                
                var parent=$('#register_phone').parent();
                parent.addClass('has-feedback');
                parent.addClass('has-error');
                document.getElementById('register_phone').parentNode.appendChild(sign1);
                $('#showmsgerror').addClass('alert alert-warning');
                $('#showmsgerror').html(result);
            }
        },
        error:function(){

        }
    });

}

var location_address=document.getElementById('register_location').onblur=function(){
    location_address=$('#register_location').val();
    $.ajax({
        url:"classes/user.php",
        method:"POST",
        data:{name:"location",value:location_address,action:"validation"},
        success:function(result){
            if(result==true){
                $('#register_location').parent().removeClass('has-error');
                $('#register_location').parent().children('span').remove();
                var sign1=document.createElement('span');
                sign1.setAttribute('class','form-control-feedback');
                var sign2=document.createElement('i');
                sign2.setAttribute('class','fa fa-check-circle');
                sign1.appendChild(sign2);
                
                var parent=$('#register_location').parent();
                parent.addClass('has-feedback');
                parent.addClass('has-success');
                document.getElementById('register_location').parentNode.appendChild(sign1);
                $('#showmsgerror').removeClass('alert alert-warning');
                $('#showmsgerror').html("");
            }else{
                $('#register_location').parent().children('span').remove();
                $('#register_location').parent().removeClass('has-feedback');
                $('#register_location').parent().removeClass('has-success');

                $('#register_location').parent().children('span').remove();
                var sign1=document.createElement('span');
                sign1.setAttribute('class','form-control-feedback');
                var sign2=document.createElement('i');
                sign2.setAttribute('class','fa fa-times-circle');
                sign1.appendChild(sign2);
                
                var parent=$('#register_location').parent();
                parent.addClass('has-feedback');
                parent.addClass('has-error');
                document.getElementById('register_location').parentNode.appendChild(sign1);
                $('#showmsgerror').addClass('alert alert-warning');
                $('#showmsgerror').html(result);
            }
        },
        error:function(){

        }
    });

}
var email=document.getElementById('register_email').onblur=function(){
    email=$('#register_email').val();
    $.ajax({
        url:"classes/user.php",
        method:"POST",
        data:{name:"email",value:email,action:"validation"},
        success:function(result){
            if(result==true){
                $('#register_email').parent().removeClass('has-error');
                $('#register_email').parent().children('span').remove();
                var sign1=document.createElement('span');
                sign1.setAttribute('class','form-control-feedback');
                var sign2=document.createElement('i');
                sign2.setAttribute('class','fa fa-check-circle');
                sign1.appendChild(sign2);
                
                var parent=$('#register_email').parent();
                parent.addClass('has-feedback');
                parent.addClass('has-success');
                document.getElementById('register_email').parentNode.appendChild(sign1);
                $('#showmsgerror').removeClass('alert alert-warning');
                $('#showmsgerror').html("");
            }else{
                $('#register_email').parent().children('span').remove();
                $('#register_email').parent().removeClass('has-feedback');
                $('#register_email').parent().removeClass('has-success');

                $('#register_email').parent().children('span').remove();
                var sign1=document.createElement('span');
                sign1.setAttribute('class','form-control-feedback');
                var sign2=document.createElement('i');
                sign2.setAttribute('class','fa fa-times-circle');
                sign1.appendChild(sign2);
                
                var parent=$('#register_email').parent();
                parent.addClass('has-feedback');
                parent.addClass('has-error');
                document.getElementById('register_email').parentNode.appendChild(sign1);
                $('#showmsgerror').addClass('alert alert-warning');
                $('#showmsgerror').html(result);
            }
        },
        error:function(){

        }
    });

}

var password=document.getElementById('register_password').onblur=function(){
    password=$('#register_password').val();
    $.ajax({
        url:"classes/user.php",
        method:"POST",
        data:{name:"password",value:password,action:"validation"},
        success:function(result){
            if(result==true){
                $('#register_password').parent().removeClass('has-error');
                $('#register_password').parent().children('span').remove();
                var sign1=document.createElement('span');
                sign1.setAttribute('class','form-control-feedback');
                var sign2=document.createElement('i');
                sign2.setAttribute('class','fa fa-check-circle');
                sign1.appendChild(sign2);
                
                var parent=$('#register_password').parent();
                parent.addClass('has-feedback');
                parent.addClass('has-success');
                document.getElementById('register_password').parentNode.appendChild(sign1);
                $('#showmsgerror').removeClass('alert alert-warning');
                $('#showmsgerror').html("");
            }else{
                $('#register_password').parent().children('span').remove();
                $('#register_password').parent().removeClass('has-feedback');
                $('#register_password').parent().removeClass('has-success');

                $('#register_password').parent().children('span').remove();
                var sign1=document.createElement('span');
                sign1.setAttribute('class','form-control-feedback');
                var sign2=document.createElement('i');
                sign2.setAttribute('class','fa fa-times-circle');
                sign1.appendChild(sign2);
                
                var parent=$('#register_password').parent();
                parent.addClass('has-feedback');
                parent.addClass('has-error');
                document.getElementById('register_password').parentNode.appendChild(sign1);   
                $('#showmsgerror').addClass('alert alert-warning');
                $('#showmsgerror').html(result);
            }
        },
        error:function(){

        }
    });

}*/
// $('#register').on('click',function(){
//    // var registerform=$('#registrationForm');
//     var formdata=$('#register_avatar').prop('files');
//     var x=new FormData();
//     x.append('file',formdata);
//     console.log(x);
//     $.ajax({
//         url:"classes/user.php",
//         method:"POST",
//         data:x,
//         dataType:"text",
//         contentType:false,
//         processType:false,
//         cache:false,
//         success:function(result){
//             console.log(result);
//         },
//         error:function(){

//         }
//     });
// return false;
// });
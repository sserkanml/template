function SendForm() {
    var name = $("input[name=NameSurname]").val();
    var phone = $("input[name=Phone]").val();
    var email = $("input[name=Email]").val();
    var errorName = $("#errorName");
    var errorPhone = $("#errorPhone");
    var errorEmail = $("#errorEmail");
    var errorMessage = $("#errorMessage");
    var permit = false;
    var permit2 = false;

    if ($('#permitStatus').prop('checked')) {
        permit = true;
    }
    if ($('#permitStatus_2').prop('checked')) {
        permit2 = true;
    }

    var ip = "::1";
    try {
        ip = myip;
    }
    catch (err) {
        //document.getElementById("demo").innerHTML = err.message;
    }
    var utm_Source = $.QueryString("utm_source"),
        utm_Source = (!utm_Source) ? "null" : utm_Source; // Passing the value null to string

    var utm_Medium = $.QueryString("utm_medium"),
        utm_Medium = (!utm_Medium) ? "null" : utm_Medium;

    var utm_Term = $.QueryString("utm_term"),
        utm_Term = (!utm_Term) ? "null" : utm_Term;

    var utm_Content = $.QueryString("utm_content"),
        utm_Content = (!utm_Content) ? "null" : utm_Content;

    var utm_Campaign = $.QueryString("utm_campaign"),
        utm_Campaign = (!utm_Campaign) ? "null" : utm_Campaign;

    //$(".input-group input").removeClass('alert');
    //$(".input-group texarea").removeClass('alert');
    if (name === null || name === "" || name.length < 2) {
        $("input[name=NameSurname]").addClass('alert');
        $(errorMessage).html("Lütfen Adınızı ve Soyadınızı Giriniz!")
    }
    else if (!$.isNumeric(phone)) {
        $("input[name=Phone]").addClass('alert');
        $(errorMessage).html("Lütfen Telefon Numarası Giriniz!");
        return false;
    }
    else if (phone === null || phone === "" || phone.length < 10 ) {
        $("input[name=Phone]").addClass('alert');
        $(errorMessage).html("Lütfen Telefon Numarası Giriniz!");
    }
    else if (!validateEmail(email)) {
        $("input[name=Email]").addClass('alert');
        $(errorMessage).html("Lütfen E-Posta Adresinizi Giriniz!");
    }
    else if ($("#permitStatus_2").prop('checked') == false) {
        $(errorMessage).html("* Lütfen Metni Okuyup Onaylayınız!");
    }
    
    else {
        $("#btnSendForm").hide();
        $(errorMessage).html("")
        setTimeout(function () {
            $(".loading").fadeIn(300);
        }, 50);
        $("#btnSendForm").attr("type", "submit");

    };
}
function SendIFrameForm() {
    var name = $("input[name=NameSurname]").val();
    var phone = $("input[name=Phone]").val();
    var email = $("input[name=Email]").val();
    var errorName = $("#errorName");
    var errorPhone = $("#errorPhone");
    var errorEmail = $("#errorEmail");
    var permit = false;
    var permit2 = false;

    if ($('#permitStatus').prop('checked')) {
        permit = true;
    }
    if ($('#permitStatus_2').prop('checked')) {
        permit2 = true;
    }

    var ip = "::1";
    try {
        ip = myip;
    }
    catch (err) {
        //document.getElementById("demo").innerHTML = err.message;
    }
   

    //$(".input-group input").removeClass('alert');
    //$(".input-group texarea").removeClass('alert');
    if (name === null || name === "" || name.length < 2) {
        $("input[name=NameSurname]").addClass('alert');
        $(errorMessage).html("Lütfen Adınızı ve Soyadınızı Giriniz!")
    }
    else if (!$.isNumeric(phone)) {
        $("input[name=Phone]").addClass('alert');
        $(errorMessage).html("Lütfen Telefon Numarası Giriniz!");
        return false;
    }
    else if (phone === null || phone === "" || phone.length < 10) {
        $("input[name=Phone]").addClass('alert');
        $(errorMessage).html("Lütfen Telefon Numarası Giriniz!");
    }
    else if (!validateEmail(email)) {
        $("input[name=Email]").addClass('alert');
        $(errorMessage).html("Lütfen E-Posta Adresinizi Giriniz!");
    }
    else if ($("#permitStatus_2").prop('checked') == false) {
        $(errorMessage).html("* Lütfen Metni Okuyup Onaylayınız!");
    }

    else {
        $("#btnSendForm").hide();
        $(errorMessage).html("")
        setTimeout(function () {
            $(".loading").fadeIn(300);
        }, 50);
        $("#btnSendForm").attr("type", "submit");
      
    };
}
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}




var namePart = $("input[name=NameSurname]");
var phoneNumPart = $("input[name=Phone]");
var emailPart = $("input[name=Email]");
var partName = "";

function partValidate(part, errorPartClass) {
    var newErrorPart = $("#error" + errorPartClass)
    //console.log(part)
    if (part[0].name == "NameSurname") {
        if (part[0].value === null || part[0].value === "") {
            $(part).addClass('alert');
            $(newErrorPart).html("Lütfen Adınızı ve Soyadınızı Giriniz!")
        }
        else {
            $(part).removeClass('alert');
            $(newErrorPart).html("");
        }
    }
    if (part[0].name == "Phone") {
        $(part[0]).val($(part[0]).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
        if (part[0].value === null || part[0].value === "" || part[0].value.length < 10) {
            $(part).addClass('alert');
            $(newErrorPart).html("Lütfen en az 10 Haneli Telefon Numarası Giriniz!")
        }
        else {
            $(part).removeClass('alert');
            $(newErrorPart).html("");
        }
    }

    if (part[0].name == "Email") {
        if (!validateEmail(part[0].value)) {
            $(part).addClass('alert');
            $(newErrorPart).html("Lütfen E-Posta Adresinizi Giriniz!");
        }
        else {
            $(part).removeClass('alert');
            $(newErrorPart).html("");
        }
    }

}

$("form input").on("keypress keyup blur", function () {
    var $this = $(this);
    //console.log($this[0].name);
    if ($this[0].name == namePart[0].name) {
        partName = "Name";
    } else if ($this[0].name == phoneNumPart[0].name) {
        partName = "Phone"
    } else if ($this[0].name == emailPart[0].name) {
        partName = "Email"
    }

    partValidate($this, partName)
})

$('.formArea .form .nameSurname').bind('keyup blur keypress', function () {
    var $this = $(this);
    $this.val($this.val().replace(/[^a-zŞşÜüİiIıÇçÖöĞğ ]/g, ''));
    if ($this.val().match(/[^a-zA-ZŞşÜüİiIıÇçÖöĞğ ]/g)) {
        $this.val(val.replace(/[^a-zA-ZŞşÜüİiIıÇçÖöĞğ ]/g, ''));
    }
});

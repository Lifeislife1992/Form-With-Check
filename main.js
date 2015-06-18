function notEmpty(inputField, helpText){

    //Проверка наличия текста
    if(inputField.value.length == 0){

        //Проверка наличия span по id и добавляем в него вспомагательный текст
        if(helpText != null){

            var textId = helpText;
            function addText() {
                textId.innerHTML = "This field can`t be empty!";
            }

            setTimeout(addText, 200);
            inputField.style.marginBottom = "10px";
        }
        return false;
    }
    else{
        //Если данные обнаружены убедимся в наличии span и обнулим его значение
        if(helpText != null){
            helpText.innerHTML = "";
            inputField.style.marginBottom = "0";
        }
        return true;
    }
}

function validField(minSize, maxSize, inputField, helpText){
    if(inputField.value.length < minSize || inputField.value.length > maxSize){
        if(helpText != null){

            var textId = helpText;
            function addText() {
                textId.innerHTML = "This field must be more then 5 or less 32 symbols!";
            }

            setTimeout(addText, 200);
            inputField.style.marginBottom = "10px";
        }
        return false;
    }
    else{
        //Если данные обнаружены убедимся в наличии span и обнулим его значение
        if(helpText != null){
            helpText.innerHTML = "";
            inputField.style.marginBottom = "0";
        }
        return true;
    }
}

function validZipField(inputField, helpText){
    var textId = helpText;
    if(inputField.value.length != 5){
        if(textId != null){

            function addText() {
                textId.innerHTML = "Zip code must contain 5 symbols";
            }

            setTimeout(addText, 200);
            inputField.style.marginBottom = "10px";
        }
        return false;
    }
    else if(isNaN(inputField.value)){
        if(textId != null){

            function addText1() {
                textId.innerHTML = "Zip code must contain only numbers";
            }

            setTimeout(addText1, 200);
            inputField.style.marginBottom = "10px";
        }
        return false;
    }
    else{
        if(helpText != null){
            helpText.innerHTML = "";
            inputField.style.marginBottom = "0";
        }
        return true;
    }
}

function placeOrder(form){
    if (validZipField(form["zip"], form["zip_help"]) &&
        validField(form["massage"], form["massage_help"]) &&
        validDate(form["date"], form["date_help"]) &&
        notEmpty(form["name"], form["name_help"]) &&
        notEmpty(form["phone"], form["phone_help"]) &&
        notEmpty(form["address"], form["address_help"])){
        form.submit();
    }
    else{
        alert("Form didn`t filled correct, please check out some mistakes!");
    }
}

function validateRedEx(redex, inputStr, helpText, helpMassage, inputField){
    if(!redex.test(inputStr)) {
        if (helpText != null) {
            helpText.innerHTML = helpMassage;
            inputField.style.marginBottom = "10px";
        }
        return false
    }
    else{
        if(helpText != null) {
            helpText.innerHTML = "";
        }
        return true;
    }
}

function validDate(inputField, helpText){
    if(!notEmpty(inputField, helpText)){
        return false;
    }
    return validateRedEx(/^\d{2}\/\d{2}\/\d{4}$/, inputField.value, helpText, "Example: 01/01/2015", inputField);
}
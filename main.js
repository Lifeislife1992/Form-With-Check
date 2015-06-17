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
        }
        return true;
    }
}

function validZipField(inputField, helpText){
    if(inputField.value.length != 5){
        if(helpText != null){

            var textId = helpText;
            function addText() {
                textId.innerHTML = "Zip code must contain 5 symbols";
            }

            setTimeout(addText, 200);
            inputField.style.marginBottom = "10px";
        }
        return false;
    }
    else if(isNaN(inputField.value)){
        if(helpText != null){

            var textId = helpText;
            function addText() {
                textId.innerHTML = "Zip code must contain only numbers";
            }

            setTimeout(addText, 200);
            inputField.style.marginBottom = "10px";
        }
        return false;
    }
    else{
        if(helpText != null){
            helpText.innerHTML = "";
        }
        return true;
    }
}

function placeOrder(form){
    if (validZipField(form["zip"], form["zip_help"]) &&
        validField(form["massage"], form["massage_help"]) &&
        notEmpty(form["date"], form["date_help"]) &&
        notEmpty(form["name"], form["name_help"]) &&
        notEmpty(form["phone"], form["phone_help"]) &&
        notEmpty(form["address"], form["address_help"])){
        form.submit();
    }
    else{
        alert("Form didn`t filled correct, please check out some mistakes!");
    }
}
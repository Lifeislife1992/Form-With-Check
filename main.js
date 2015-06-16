function notEmpty(inputField, helpText){

    //Проверка наличия текста
    if(inputField.value.length == 0){

        //Проверка наличия span по id и добавляем в него вспомагательный текст
        if(helpText != null){
            helpText.innerHTML = "This field can`t be empty!";
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

function validField(minSize, maxSize, inputField, helpText){
    if(inputField.value.length < minSize || inputField.value.length > maxSize){
        if(helpText != null){
            helpText.innerHTML = "This field must be more then 5 or less 32 symbols!";
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
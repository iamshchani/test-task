let containerArray = [];
let limitNumber = 100; // Значение соответствует максимальной границе при работе метода Math.random(). Однако, мне неизвестно, как можно было бы "выцепить" значение переменной 'max'. Поэтому пришлось объявить еще одну переменную.
function naturalNumber(nN){
    nN = Number(prompt("Введите натуральное число"));
    if(!isNaN(nN) && nN > 0 && Number.isInteger(nN) && nN <= limitNumber){
        let randomLength = [];
        for(let i = 0; nN > 0; i++){
            let innerArray = [];
            innerArray.length = getRandomInt();
            function getRandomInt(min, max){ // Данной функцией мы выполняем условие, чтобы длина массивов НЕ СОВПАДАЛА
                min = 1, max = 100;
                let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
                if(randomLength.indexOf(randomNumber) !== -1) return getRandomInt(min, max);
                randomLength.push(randomNumber);
                return randomNumber;
            }
            for(let j = 0; innerArray.length - j > 0; j++){
                innerArray[j] = Number(Math.random().toFixed(4));
            }
            if(i%2 == 0){
            containerArray[i] = innerArray.sort(function(a, b){
                return a - b;
            });
        } else if(i%2 !== 0){
            containerArray[i] = innerArray.sort(function(a, b){
                return b - a;
            });
        }
            nN--;
        }
    } else{
        naturalNumber(nN);
    }
    console.log(containerArray);
}

naturalNumber();

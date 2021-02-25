let petsArr = pets;

fullPetsList = (() => {

    let tempArr = [];
  
    for (let i = 0; i < 6; i++) {
        const newPets = petsArr;
        //  petsArr;
        // идем с конца и вытаскиываем элемент, затем добавляем в новый массив
        for (let j = petsArr.length; j > 0 ; j--) {
            // randomIndex не вернет 8
            let randomIndex = Math.floor((Math.random() * j));
            // вытаскиваем радомный элемент. Так как splice возвращает массив, то берем [0] элемент
            const randomElement = newPets.splice(randomIndex, 1)[0];
            newPets.push(randomElement);
        }
        // делаем конкатенацию массивов через spread
        tempArr = [...tempArr, ...newPets];
    }
    
    // console.log(tempArr);
    return tempArr;
    // tempArr = [...tempArr, ...newPets];
  
  })();
  
  const sort863Elements = (list) => {
  
    let unique8List = [];
    let length = list.length;
    for (let i = 0; i < length / 8; i++) {
    const uniqueStepList = [];
    for (j = 0; j < list.length; j++) {
      if (uniqueStepList.length >= 8) {
        break;
      }
      const isUnique = !uniqueStepList.some((item) => {
        return item.name === list[j].name;
      });
      if (isUnique) {
        uniqueStepList.push(list[j]);
        list.splice(j, 1);
        j--;
      }
    }
    unique8List = [...unique8List, ...uniqueStepList];
  }
  list = unique8List;
  
    list = sort6Recursively(list);
  
    return list;
  };
  
  const sort6Recursively = (list) => {
    let length = list.length;
  
    for (let i = 0; i < (length / 6); i++) {
        // находим повторяющийся и перебрасываем в начало нашей восьмерки элементов
        const stepList = list.slice(i * 6, (i * 6) + 6);
  
  
        for (let j = 0; j > 6 ; j++) {
            const duplicatedElement = stepList.find((item, index) => {
                // find вернет первое true, выполняющие уловие, значение
                return item.name === stepList[j].name && (index !== j);
            });
  
            if (duplicatedElement !== undefined) {
                const ind = (i * 6) + j;
                // к какой восьмерке из спика относится пойманный элемент (дублирующийся)
                // находим целую часть от деления индекса на 8, и значит, это и есть наша n-ая 8-ка элементов
                const which8OfList = Math.trunc(ind / 8);
  
                // вытаскиваю элемент (как раз duplicatedElement)
                let element = list.splice(ind, 1)[0];
                // и вставляю его в найденную восьмереку элементов.Умножаю на 8, чтобы поставить на правильный индекс
                list.splice(which8OfList * 8, 0, element);
  
                // i -= 2;
                // break;
                sort6Recursively(list);
            }
        }
    }
    // console.log(list);
    return list;
  };
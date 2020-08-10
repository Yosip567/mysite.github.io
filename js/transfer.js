
/*Form auticomplete funciuon:*/
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

var countries = [
"Аэропорт Барселоны", "BCN", "Airport Barcelona", 
"Город Барселона","Барселона", "Barcelona",
"Морской порт Барселоны", "Port Vell",
"Салоу", "Salou",
"Аэропорт Жироны", "Girona Airport",
"Льорет де Мар", "Lloret de Mar",
"Калелья", "Calella",
"Плайя де Аро", "Playa de Aro",
"Бланес", "Blanes",
"Торредембарра", "Torredembarra",
"Кастельдефельс", "Castelldefells",

"Аликанте", "Alacant",
"Альтафуйя", "Altafulla",
"Ампойа", "Ampolla",
"Андорра Ла Вейя", "Andorra la Vella",
"Аренес де Мар", "Arenys de Mar",
"Аринсал", "Arinsal",
"Бадалона", "Badalona",
"Бегур", "Begur",
"Валенсия", "Valencia",
"Вандельос-и-ла-Оспиталет-дель-Инфант", "Vandellòs i lHospitalet de lInfant",
"Вендрель", "El Vendrel", 
"Виланова", "Vilanova",
"Вилафортуна", "Vilafortuna", 
"Вильянуэва и Ла Гелтру", "Vilanova i la Geltru",
"Гава", "Gava",


"Грау Роч", "Grau Roig",
"Дения", "Denia",
"Жирона", "Girona",
"Кадакес", "Cadaques", 
"Калафель", "Calafell",
"Камбрилс", "Cambrils",
"Кальдес дЭстрач", "Caldes dEstrac",
"Канильо", "Canillo",
"Канет де Мар", "Canet de Mar",
"Кома Руга", "Coma Ruga",
"Кубельес", "Cubelles",
"Кунит", "Cunit",
"Ла Амеллья де Мар", "L’Ametlla de Mar",
"Ла Массана", "La Massana",
"Ла Молина", "La Molina", 
"Ла Пинеда", "La Pineda",
"Ла Рамбла", "La Rambla",
"Ла Рока Вилладж", "La Roca Villadge",
"Л`Эстартит", "L`Estartit",
"Майями Плайя", "Miami Playa",
"Малград де Мар", "Malgrad de Mar",
"Марина Дор", "Marina d`Or",
"Масея", "Masella", 
"Матаро", "Mataro",
"Монтгат", "Montgat",
"Монтсеррат", "Montserrat",
"Оропеса-дель-Мар", "Oropesa-del-mar",
"Паламос", "Palamos",
"Палс", "Pals",
"Палафружель", "Palafrugell", 
"Пас де ла Каса", "Pas de la casa",
"Пинеда де Мар", "Pineda de Mar",
"Росес", "Roses",
"Рибес де Фресер", "Ribes de Freser",
"Сагаро", "Sagaro",
"Санта Сусанна", "Santa Susanna",
"Сант Андрес де Льеванерас", "Sant Andreu de Llavaneres",
"Сант Антонио де Калонже", "Sant Antoni de Calonge",
"Сант Поль де Мар", "Sant Pol de Mar",
"Сан-Фелиу де Гишольс", "San Feliu de Guixols",
"Сарагоса", "Zaragoza",
"Ситжес", "Sitges",
"Сольдеу", "Soldeu",
"Таррагона", "Tarragona",
"Тартер", "Tarter",
"Тона", "Tona",
"Тортоса", "Tortosa",
"Тосса де Мар", "Tossa De Mar",
"Фигерас", "Figueras", 
"Хоспиталет Инфант", "L`Hospitalet Infant",
"Эмпуриабрава", "Empuriabrava",
"Энкамп", "Encamp",
"Эскальдес", "Escaldes",
"Эль Тартер", "El Tarter",
"Абрера", "Abrera",
"Аржентона", "Argentona",
"Барбера-дель-Вальес", "Barberá del Vallés",
"Бадия-дель-Вальес", "Badia del Vallés",
"Берга", "Berga",
"Кановельес", "Canovellas",
"Кардедиос", "Cardediós",
"Кальдес-де-Монбуй", "Caldas de Montbui",
"Кастельяр-дель-Вальес", "Castellar del Vallés",
"Кастильобисбаль", "Castillobisbal",
"Корбера-де-Льобрегат", "Corbera de Llobregat",
"Корнелья-де-Льобрегат", "Cornellá de Llobregat",
"Кубельес", "Cubellas",
"Серданьола-дель-Вальес", "Cerdañola del Vallés",
"Эспаррегера", "Esparraguera",
"Эсплугес-де-Льобрегат", "Esplugas de Llobregato",
"Лес-Франкесес-дель-Вальес", "Les Franqueses del Vallés",
"Ла-Гаррига", "La Garriga",
"Гава", "Gavá",
"Ла-Льягоста", "La Llagosta",
"Льиса-д’Амун", "Llissa de Munt",
"Оспиталет-де-Льобрегат", "Hospitalet de Llobregat",
"Гранольерс", "Granollers",
"Игуалада", "Igualada",
"Мальграт-де-Мар", "A pesar de todo de Mar",
"Манльеу", "Manlleu",
"Манреса", "Manresa",
"Эль-Масноу", "El Masnou",
"Марторель", "Martorell",
"Матаро", "Mataró",
"Монторнес-дель-Вальес", "Montornés del Vallés",
"Молинс-де-Рей", "Molins de Rei",
"Мольет-дель-Вальес", "Mollet del Vallès",
"Монкада-и-Решак", "Moncada i Reixac",
"Олеса-де-Монтсеррат", "Olesa de Montserrat",
"Палау-солита-де-Плегаманс", "Palau de Plegamans",
"Паретс-дель-Вальес", "Parets del Vallès",
"Пальежа", "Pallejá",
"Пьера", "Piera",
"Эль-Прат-де-Льобрегат", "El Prat del Llobregat",
"Премия-де-Мар", "Premiá de Mar",
"Рипольет", "Ripollet",
"Руби", "Rubí",
"Сан-Андрес-де-ла-Барка", "San Andrés de la Barca",
"Сан-Адриан-де-Бесос", "San Adrián de Besós",
"Сабадель", "Sabadell",
"Сан-Селони", "Sant Celoni",
"Сан-Баудилио-де-Льобрегат", "San Baudilio de Llobregat",
"Сан-Кугат-дель-Вальес", "San Cugat del Vallés",
"Сан-Фелиу-де-Льобрегат", "San Feliu de Llobregat",
"Сан-Жоан-де-Вилаторрада", "San Juan de Torruella",
"Сан-Жоан-Деспи", "San Juan Despí",
"Сан-Жуст-Десверн", "San Justo Desvern",
"Сан-Пере-де-Рибес", "San Pedro de Ribas",
"Сан-Кирзе-дель-Вальес", "San Quirico del Vallés",
"Сан-Садурни-д'Анойя", "Sant Sadurní d’Anoia",
"Сан-Висенс-дельс-Орс", "San Vicente dels Horts",
"Санта-Колома-де-Граменет", "Santa Coloma de Gramanet",
"Санта-Перпетуа-де-Могода", "Santa Perpétua de Moguda",
"Терраса", "Tarrasa",
"Тордера", "Tordera",
"Торельо", "Torelló",
"Вальирана", "Vallirana",
"Виладеканс", "Viladecans",
"Виладекавальс", "Viladecaballs",
"Вик", "Vich",
"Виласар-де-Мар", "Vilassar de Mar",
"Вильяфранка-дель-Пенедес", "Villafranca del Penedés",

"Вальс", "Valls",
"Вила-сека", "Vilaseca",
"Ампоста", "Amposta",
"Сан-Карлос-де-ла-Рапита", "San Carlos de la Rápita",
"Дельтебре", "Deltebre",
"Реус", "Reus",

"Таррега", "Tárrega",
"Мольерусса", "Mollerusa",
"Льейда", "Lérida",
"Фигольс-и-Алинья", "Fígols y Aliñá",
"Балагер", "Balaguer",
"Мадрид", "Madrid",
"Севилья", "Sevilla",
"Малага", "Málaga",
"Мурсия", "Murcia",
"Пальма", "Palma",
"Лас-Пальмас-де-Гран-Канария", "Las Palmas de Gran Canaria",
"Бильбао", "Bilbao",
"Кордова", "Córdoba",
"Вальядолид", "Valladolid",
"Виго", "Vigo",
"Хихон", "Gijón",
"Оспиталет", "L’Hospitalet de Llobregat",
"Ла-Корунья", "La Coruña",
"Гранада", "Granada",
"Витория", "Vitoria",
"Эльче", "Elche",
"Овьедо", "Oviedo",
"Санта-Крус-де-Тенерифе", "Santa Cruz de Tenerife",
"Картахена", "Cartagena",
"Террасса", "Tarrasa",
"Херес-де-ла-Фронтера", "Jerez de la Frontera",
"Сабадель", "Sabadell",
"Мостолес", "Móstoles",
"Алькала-де-Энарес", "Alcalá de Henares"
];

autocomplete(document.getElementById("destination"), countries);
autocomplete(document.getElementById("location"), countries);

function getText(str)
{
  document.getElementById('userphone').value = "+";
}

/*Label focus funciuon:*/
    $(".userInput").focus(function () {
        $(this).parent().addClass("focus");
    }).blur(function () {
        if($(this).val()===''){
            $(this).parent().removeClass("focus");
        }
    })
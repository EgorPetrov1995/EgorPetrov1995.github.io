/**************************************************************************************************************/

/***********************************    Функции для игры "Убей бомжа"    **************************************/

/* 30.09.2017 */
/**************************************************************************************************************/
var ammo_start; // Стартовое количество боеприпасов
var killCount;
var isStart = false;

var playerName;

function getRand(min, max)  // Генерация случайного числа
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
  

var table = document.getElementById('bitches');  // Функция отслеживания нажатия
	
	document.getElementById('bitches').onclick = function(e) 
	{ // Вешаем обработчик

	var event = e || window.event, // Получаем event.target 
      target = event.CurrentTarget || event.srcElement; 
	if( isStart == true)
	{
	if (target.tagName == 'IMG' && target.style.backgroundImage != 'url(images/none.png)' )
	{ //Проверяем, попали в бомжа или нет
		{
		killCount++; // Убили бомжа
		Shot();  
		PlaySnd('sounds/death.mp3'); 
		target.style.backgroundImage = 'url(images/none.png)';
		}
	}
	else
	{
		Shot(); 
	}
	}
	};
  

 function Shot()
 {
	 if (isStart == true)
	 {
			PlaySnd('sounds/shot.mp3'); // Воспроизводим звук выстрела
			ammo_start--; // Убираем патрон
			infoUpdate(); // Обновляем информацию
	 }
	 else
	 {
		 alert("Click to Start!");
	 }
 }
 
 function PlaySnd(path)  // Проигрывание звука (path) - путь к файлу
 {
	 var snd = new Audio();
	 snd.src = path;
	 snd.play();
 }
 
 // Старт игры
 function Start()
 {
	 playerName=prompt("Как вас зовут?","");
	 isStart = true; //Игра запущена
	 PlaySnd('sounds/reload.mp3'); // Заряжаем оружие
	 ammo_start = 10; // Даем стартовый боезапас
	 killCount = 0; // Обнуляем счётчик убитых бомжей
	 infoUpdate() // Обновляем информацию
	 CreateBums(); // Создаем бомжей
 }
 
 function infoUpdate()
 {
	document.getElementById('killCount').innerHTML = 'Kill bums:' + killCount; 
	document.getElementById('ammo_count').innerHTML = 'Ammo:' + ammo_start;
    if(ammo_start == 0)
	{
		PlaySnd('sounds/no_ammo.wav');
		isStart = false;
		
		var modal=document.getElementById('win1');
		modal.style.display = 'block';
		document.getElementById('stat_shot').innerHTML = playerName.toString(); 
		document.getElementById('stat_kill').innerHTML = 'Kill bums:' + killCount; 
	}
 }
 
 
 function getRand(min, max)  // Генерация слчайного числа
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function CreateBums()
{
	if(isStart == true)
	{
	deleteBums();
	var amountBums = getRand (3 ,5);
	
	for( var i = 0; i < amountBums ; i++ )
	{
		var back = getRand(1,9);	// Генерация номера бака
		rrr=document.getElementsByName('bums');
		//rrr[back].style.display = 'block';
		
		rrr[back].style.backgroundImage = 'url(images/bum'+getRand(1,3)+'.png)';
	}
	Update();
	}
}


function deleteBums()
{
	for( var j = 0; j < 9 ; j++ )
	{
		bums=document.getElementsByName('bums');
		bums[j].style.backgroundImage = 'url()'
	}
} 


function Update()
{
		setInterval(CreateBums, 4000);
}
 
 
 function closeStat()
 {
	var modal=document.getElementById('win1');
	modal.style.display = 'none';
	deleteBums()
 }

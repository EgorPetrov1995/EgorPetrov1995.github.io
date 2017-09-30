/**************************************************************************************************************/

/***********************************    Функции для игры "Убей бомжа"    **************************************/

/* 30.09.2017 */
/**************************************************************************************************************/
var ammo_start; // Стартовое количество боеприпасов
var killCount;
var isStart = false;

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
	if (target.tagName == 'IMG' )
	{ //Проверяем, попали в бомжа или нет
		{
		killCount++; // Убили бомжа
		Shot();  
		PlaySnd('sounds/death.wav'); 
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
		 alert("Начните игру!");
	 }
 }
 
 function PlaySnd(path)  // Проигрывание звука (path) - путь к файлу
 {
	 var snd = new Audio();
	 snd.src = path;
	 snd.autoplay = true;
 }
 
 // Старт игры
 function Start()
 {
	 var S=prompt("Привет, как вас зовут?","");
	 isStart = true; //Игра запущена
	 PlaySnd('sounds/reload.mp3'); // Заряжаем оружие
	 ammo_start = 40; // Даем стартовый боезапас
	 killCount = 0; // Обнуляем счётчик убитых бомжей
	 infoUpdate() // Обновляем информацию
	 CreateBums(); // Создаем бомжей
 }
 
 function infoUpdate()
 {
	document.getElementById('killCount').innerHTML = 'Убито бомжей:' + killCount; 
	document.getElementById('ammo_count').innerHTML = 'Боеприпасы:' + ammo_start;
    if(ammo_start == 0)
	{
		PlaySnd('sounds/no_ammo.wav');
		isStart = false;
	}
 }
 
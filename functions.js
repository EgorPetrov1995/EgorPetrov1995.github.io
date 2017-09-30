/**************************************************************************************************************/

/***********************************    Ôóíêöèè äëÿ èãðû "Óáåé áîìæà"    **************************************/

/* 30.09.2017 */
/**************************************************************************************************************/
var ammo_start; // Ñòàðòîâîå êîëè÷åñòâî áîåïðèïàñîâ
var killCount;
var isStart = false;

function getRand(min, max)  // Ãåíåðàöèÿ ñëó÷àéíîãî ÷èñëà
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
  

var table = document.getElementById('bitches');  // Ôóíêöèÿ îòñëåæèâàíèÿ íàæàòèÿ
	
	document.getElementById('bitches').onclick = function(e) 
	{ // Âåøàåì îáðàáîò÷èê

	var event = e || window.event, // Ïîëó÷àåì event.target 
      target = event.CurrentTarget || event.srcElement; 
	if( isStart == true)
	{
	if (target.tagName == 'IMG' )
	{ //Ïðîâåðÿåì, ïîïàëè â áîìæà èëè íåò
		{
		killCount++; // Óáèëè áîìæà
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
			PlaySnd('sounds/shot.mp3'); // Âîñïðîèçâîäèì çâóê âûñòðåëà
			ammo_start--; // Óáèðàåì ïàòðîí
			infoUpdate(); // Îáíîâëÿåì èíôîðìàöèþ
	 }
	 else
	 {
		 alert("No ammo!");
	 }
 }
 
 function PlaySnd(path)  // Ïðîèãðûâàíèå çâóêà (path) - ïóòü ê ôàéëó
 {
	 var snd = new Audio();
	 snd.src = path;
	 snd.autoplay = true;
 }
 
 // Ñòàðò èãðû
 function Start()
 {
	 var S=prompt("Как Вас зовут?","");
	 isStart = true; //Èãðà çàïóùåíà
	 PlaySnd('sounds/reload.mp3'); // Çàðÿæàåì îðóæèå
	 ammo_start = 40; // Äàåì ñòàðòîâûé áîåçàïàñ
	 killCount = 0; // Îáíóëÿåì ñ÷¸ò÷èê óáèòûõ áîìæåé
	 infoUpdate() // Îáíîâëÿåì èíôîðìàöèþ
	 CreateBums(); // Ñîçäàåì áîìæåé
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
 

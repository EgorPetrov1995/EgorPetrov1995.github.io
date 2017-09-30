function getRand(min, max)  // Генерация слчайного числа
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function CreateBums()
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




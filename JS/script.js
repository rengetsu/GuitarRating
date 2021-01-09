var rbz = 0;
var mss = 2;
var mee = 4;
var min = 1;
var max = 18;
var img_f = 1;
var img_s = 2;
var x = false;

var rb = Math.random() >= 0.5;
var random = Math.floor(Math.random() * (+max - +min)) + +min;
var rdm2 = Math.floor(Math.random() * (+mee - +mss)) + +mss;

function sleep(milliseconds)
{
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++)
  {
    if ((new Date().getTime() - start) > milliseconds)
	{
      break;
    }
  }
}

function go_left()
{
	console.log(new Date());
	sleep(500);
	
	random = Math.floor(Math.random() * (+max - +min)) + +min;
	rdm2 = Math.floor(Math.random() * (+mee - +mss)) + +mss;
	rb = Math.random() >= 0.5;
	if(rb == false){rbz=0;}
	else{rbz=1;}
	
	if(img_f == 1){img_f++;}
	else if(img_f > 17){img_f=0;x=true;}
	else{img_f+=2;}
	
	if(x==false){document.getElementById('righx').src='Images/GUITARS/'+(img_f+1)+'.png'}
	else{document.getElementById('righx').src='Images/GUITARS/'+(random+rbz)+'.png'}
	
	if(img_s == 2){img_s++;}
	else if(img_s > 18){img_s=1;x=true;}
	else{img_s+=2;}
	
	if(x==false){document.getElementById('right').src='Images/GUITARS/'+(img_s+1)+'.png'}
	else{document.getElementById('right').src='Images/GUITARS/'+(random+rdm2)+'.png'}
}
	
function go_right()
{
	console.log(new Date());
	sleep(500);
	
	random = Math.floor(Math.random() * (+max - +min)) + +min;
	rdm2 = Math.floor(Math.random() * (+mee - +mss)) + +mss;
	rb = Math.random() >= 0.5;
	if(rb == false){rbz=0;}
	else{rbz=1;}
	
	if(img_f == 1){img_f++;}
	else if(img_f > 17){img_f=0;x=true;}
	else{img_f+=2;}
	
	if(x==false){document.getElementById('righx').src='Images/GUITARS/'+(img_f+1)+'.png'}
	else{document.getElementById('righx').src='Images/GUITARS/'+(random+rbz)+'.png'}
	
	if(img_s == 2){img_s++;}
	else if(img_s > 18){img_s=1;x=true;}
	else{img_s+=2;}
	
	if(x==false){document.getElementById('right').src='Images/GUITARS/'+(img_s+1)+'.png'}
	else{document.getElementById('right').src='Images/GUITARS/'+(random+rdm2)+'.png'}
}

function showRating()
{
	var body = document.getElementsByTagName('body')[0];
	var tbl = document.createElement('table');
	
	tbl.style.width = '100%';
	tbl.setAttribute('border', '1');
	
	var tbdy = document.createElement('tbody');
	
	for (var i = 0; i < 20; i++)
	{
		var tr = document.createElement('tr');
		
		for (var j = 0; j < 2; j++)
		{
			if (i == 2 && j == 1)
			{
				break
			}
			else
			{
				var td = document.createElement('td');
				td.appendChild(document.createTextNode('Guitar #'+(i+1)+' Rating: '+((random+rbz)/i)+'\u0020'))
				i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
				tr.appendChild(td)
			}
		}
		tbdy.appendChild(tr);
	}
	tbl.appendChild(tbdy);
	body.appendChild(tbl)
}

function sendMail()
{
	var inputVal1 = document.getElementById("myInput1").value;
	var inputVal2 = document.getElementById("myInput2").value;
	
    alert("Ačiū, " + inputVal1 + "! \nEl. Laiškas išsiųstas: " + inputVal2);
	
	Email.send({
	Host: inputVal2,
	Username : "<sender’s email address>",
	Password : "<email password>",
	To : '<recipient’s email address>',
	From : "<sender’s email address>",
	Subject : inputVal1,
	Body : "Gitaros svetaine informacija",
	}).then(
		message => alert("mail sent successfully")
	);
}
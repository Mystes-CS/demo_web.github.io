
var list = [ "0", "1", "2", "3", "4" ];
var listcount = 0;
var timeclock = setInterval(function(){ myTimer() }, 1000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("clock").innerHTML ="<br>"+ t;
}



function changethings()
{
	if( listcount > 3 )
	{
		listcount = 0;
	}
	else
	{
		listcount++;
	}
	document.getElementById("swichvedio1").innerHTML = "<embed id = 'embedvedio1' src = '" + listcount + ".mp4'  width='400' height='300' type='audio/mp4' autostart = 'true' loop = 'true' ></embed>";
}


function start()
{
	var vediobutton = document.getElementById("changing");
	vediobutton.addEventListener( "click", changethings, false );
	
}

window.addEventListener( "load", start, false );
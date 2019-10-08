function handleButtonClick(){
	textInput = document.getElementById("songTextInput");
	var songName = textInput.value;
	var tem = document.createElement("li");

		if(songName == "" || songName[0] == " "){
			alert("Please enter a song");
		}
		else{
			alert("Adding " + songName);
			tem.classList.add("songName");
			tem.innerHTML = songName;
		var ul = document.getElementById("playlist");
			ul.appendChild(tem);
		}
}

function handleButtonRemove(e){
	var playlist = document.getElementsByClassName("songName");
	for(let i = 0;i<playlist.length;i++){
		if(textInput.value == playlist[i].innerText){
			playlist[i].outerHTML = "";
		}
	}
}
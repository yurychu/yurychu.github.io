window.onload = function(){
	var url = "http://yurychu.github.io/training/app/sales.json"
	var request = new XMLHttpRequest();
	request.open("GET", url);
	request.onload = function(){
		if (request == 200) {
			updateSales(request.responseText);
		}
	};
	request.send(null)
};

function updateSales(responseText){
	var salesDiv = document.getElementById("sales");
	salesDiv.innerHTML = responseText;
}
window.onload = main;

function main() {
	set_class("give_me_name", "visio");
	set_class("general_section", "not_visio");

	btn = document.getElementById("btn_user_name");
	btn.onclick = give_user_name;
	
}

function set_class(id_elem, class_name){
	var elem = document.getElementById(id_elem);
	elem.setAttribute("class", class_name);
}

function give_user_name(){
	elem = document.getElementById("input_user_name");
	var user_name = elem.value;
	set_class("give_me_name", "not_visio");
	set_class("general_section", "visio");
	var hello_user = document.getElementById("user_name");
	hello_user.innerHTML = user_name;
}

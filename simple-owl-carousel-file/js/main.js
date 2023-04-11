let span = document.getElementsByTagName('span');
let product = document.getElementsByClassName('product')
let product_page = Math.ceil(product.length/4);
let l = 0;
let movePer = 25.34;
let maxMove = 203;
let elDelet = document.querySelector("#delete");
let elPraduc =document.querySelector(".product")

// mobile_view	
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches)
{
	movePer = 50.36;
	maxMove = 504;
}

let right_mover = ()=>{
	l = l + movePer;
	if (product == 1){l = 0; }
	for(const i of product)
	{
		if (l > maxMove){l = l - movePer;}
		i.style.left = '-' + l + '%';
	}
	
}
let left_mover = ()=>{
	l = l - movePer;
	if (l<=0){l = 0;}
	for(const i of product){
		if (product_page>1){
			i.style.left = '-' + l + '%';
		}
	}
}
span[1].onclick = ()=>{right_mover();}
span[0].onclick = ()=>{left_mover();}


async function postJSON(data) {
	try {
		const response = await fetch("https://reqres.in/api/users", {
		method: "GET", // or 'PUT'
		body: JSON.stringify(data),
	});
	
	const result = await response.json();
	console.log("Success:", result.data);
	render(result.data)
} catch (error) {
	console.log("Error:", error);
}

};


postJSON()






async function myFunction(evt) {
	try {
		let response = await fetch(`https://reqres.in/api/users/${evt}`, {
		method: "DELETE",
	});
	
	var element = document.getElementById("praduc");
	response.url=element;

	array.forEach(element => {
		element.parentNode.removeChild(response);
		console.log(response);
		console.log(array);
	});
	
	
	
} catch (error) {
	console.log(error.message);
}


}



function render(dataUser) {
	console.log(dataUser);
	
	let elSelect = document.querySelector("#selct")
	
	elSelect.innerHTML = dataUser.map((item) => {
		
		return `  
		<div id="praduc" class="product">
		<nav class="d-flex justify-content-end">
		<button id="delete" onclick="myFunction(${item.id})" class="btn text-white"><img 
		src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Delete-button.svg/862px-Delete- 
		button.svg.png" width="20px"</button>
		</nav>
		<picture>
		<img src="${item.avatar}" alt="rasm bor edi">
		</picture>
		<div class="detail">
		<p>
		<b>${item.last_name}</b><br>
		<small>${item.first_name}</small>
		</p>
		<samp>$45.00</samp>
		</div>
		<div class="button">
		<p class="star">
		<strong>&star;</strong>
		<strong>&star;</strong>
		<strong>&star;</strong>
		<strong>&star;</strong>
		<strong>&star;</strong>
		</p>
		<a class="text-white" href="#">Add-cart</a>
		</div>
		</div>
		`
	}).join("") 
}



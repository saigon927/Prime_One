let menu = document.createElement("div");
	menu.innerHTML = `
		<ul class="menu__poit__parent">
			<li class="menu__poit">about</li>
			<li class="menu__poit">menus</li>
			<li class="menu__poit">service info</li>
			<li class="menu__poit">gallery</li>
			<li class="menu__poit">friends</li>
			<li class="menu__poit">contact</li>
		</ul>
	`
	menu.style.cssText = `
		position: fixed;
		z-index: 2;
		display: none;
		top: 0;
		padding: 300px 0 0 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(33, 36, 41,0.9);
		transition: all 0.5s;
		visibility: hidden;
		opacity:0;
		font-size: 40px;
		font-family: Montserrat;
		color: #fff;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow: auto;
	`
menu.className = "menu__btn__list";
document.body.append(menu);


let btn = document.querySelector(".btn__burger");
btn.addEventListener("click",switchOn);

function switchOn(e){
	let spans = document.querySelectorAll(".btn__burger__span");
	for (let span of spans) {
		span.style.borderColor = "#fff";
	};
	let link = document.querySelector(".link__active");
	link.style.color = "#fff";

	setTimeout(() =>{
		menu.style.visibility = "visible";
		menu.style.opacity = 1;
	})
	document.body.style.overflow = "hidden"
	btn.removeEventListener("click",switchOn);
	btn.addEventListener("click",switchOff)

	function switchOff(){
		for (let span of spans) {
			span.style.borderColor = "#000";
		};
		link.style.color = "#000";

		let menuList = document.querySelector(".menu__btn__list");
		setTimeout(()=>{
			menuList.style.visibility = "hidden";
			menu.style.opacity = 0;
		});
		document.body.style.overflow = ""
		btn.removeEventListener("click",switchOff);
		btn.addEventListener("click",switchOn);
	}
}
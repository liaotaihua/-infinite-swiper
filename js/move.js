function move(ele,attr,target){
	if (typeof ele == 'string') {
		ele = document.querySelector(ele);
	}
	clearInterval(ele.timer);
	ele.timer = setInterval(function(){
		var init = parseFloat(getstyle(ele,attr));
		if (attr == 'opacity') {
			init *= 100;
		}
		var speed = (target - init) / 30;
		if (speed > 0) {
			speed = Math.ceil(speed);
		} else{
			speed = Math.floor(speed);
			
		}
		init += speed;
		if (init == target) {
			init = target;
			clearInterval(ele.timer);
		}
		if (attr == 'opacity') {
			ele.style[attr] = init / 100;
		} else{
			ele.style[attr] = init + 'px';
			
		}
		
	},10)
	
	
	
}
function getstyle(ele,attr){
	if (window.getComputedStyle) {
		return window.getComputedStyle(ele,null)[attr];
	}
	return ele.currentStyle(attr);
}

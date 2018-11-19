var swiper = (function () {
	 var timer = null;
	return{
		init:function () {
			this.$box =document.querySelector('.box');
			
			this.$img_box = document.querySelector('.img_box');
			this.$tip = document.querySelector('.tip');
			this.$tip_all = document.querySelectorAll('li');
			this.$left = document.querySelector('.left');
			this.$right = document.querySelector('.right');
			this.index = 0;
			
			for (var i = 0; i < this.$tip_all.length; i++) {
				this.$tip_all[i].index = i;
			}
			
			//克隆图片
			this.box_width = this.$box.offsetWidth; 
			var $first = this.$img_box.firstElementChild;
			var $last = this.$img_box.lastElementChild;
			
			this.$img_box.appendChild($first.cloneNode(true));
			this.$img_box.insertBefore($last.cloneNode(true),$first);
			
			this.$img_box.style.left = -this.box_width +'px';
			
			this.event();
			this.autoPlay();
			
			
		},
		event(){
			var _this = this;
			this.$tip.onclick = function (ev) {
				ev = ev || window.event;
				var target = ev.target || ev.srcElement;
				if(target.nodeName == 'LI'){
					_this.showImg(target.index);
				}
			}
			this.$left.onclick = function (ev) {
				ev = ev || window.event;
				_this.showImg(--_this.index);
				_this.autoPlay(_this.index);
			}
			this.$right.onclick = function (ev) {
				ev = ev || window.event;
				_this.showImg(++_this.index);
				_this.autoPlay(_this.index);
			}
			this.$box.onmouseenter = function(ev) {
				ev = ev || window.event;
				
				_this.$left.style.display = 'block';
				_this.$right.style.display = 'block';
				clearInterval(timer);
			}
			this.$box.onmouseleave = function(ev) {
				ev = ev || window.event;
				
				_this.$left.style.display = 'none';
				_this.$right.style.display = 'none';
				_this.autoPlay();
			}
			this.$left.onmouseenter = function(ev) {
				ev = ev || window.event;
				 var src = _this.$left.querySelector('img').getAttribute('src');
	        	_this.$left.querySelector('img').src = src.replace('left1', 'left2');
				
			}
			this.$right.onmouseenter = function(ev) {
				ev = ev || window.event;
				 var src = _this.$right.querySelector('img').getAttribute('src');
	        	_this.$right.querySelector('img').src = src.replace('right1', 'right2');
				
			}
			this.$left.onmouseleave = function(ev) {
				ev = ev || window.event;
				 var src = _this.$left.querySelector('img').getAttribute('src');
	        	_this.$left.querySelector('img').src = src.replace('left2', 'left1');
				
			}
			this.$right.onmouseleave = function(ev) {
				ev = ev || window.event;
				 var src = _this.$right.querySelector('img').getAttribute('src');
	        	_this.$right.querySelector('img').src = src.replace('right2', 'right1');
				
			}
			
		},
		showImg(index){
			if (index > this.$tip_all.length - 1) {
				index = 0;
				this.$img_box.style.left = 0;
			} else if(index < 0){
				index = 5;
				this.$img_box.style.left = -this.box_width * (index + 1) + 'px';
			}
			this.index = index;
			for(var i = 0; i < this.$tip_all.length; i++){
				this.$tip_all[i].className = '';
			}
			this.$tip_all[index].className = 'active';
			move(this.$img_box,'left',-this.box_width * (index + 1));
			
			
			
		},
		autoPlay:function(){
			var _this = this;
			clearInterval(timer);
			timer = setInterval(function () {
				_this.index++;
				_this.showImg(_this.index);
			},3000)
		}
		
		
		
		
		
	}
}())

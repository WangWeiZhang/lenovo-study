function LimitClientXYelement(id){
	ClientXYelement.call(this , id)
}
//LimitClientXYelement.prototype = ClientXYelement.prototype; //则都进行了限制。  
for(var i in ClientXYelement.prototype){
	LimitClientXYelement.prototype[i] = ClientXYelement.prototype[i];
}

LimitClientXYelement.prototype.fnmove = function(e){
	var oEvent = e||event;
	var leftRight = oEvent.clientX - this.disX;
	var topBottom = oEvent.clientY - this.disY;
	if(leftRight < 0){
		leftRight = 0;
	}else if(leftRight > document.documentElement.clientWidth - this.oDiv.offsetWidth){
		leftRight = document.documentElement.clientWidth - this.oDiv.offsetWidth;
	}
	
	if(topBottom < 0){
		topBottom = 0;
	}else if(topBottom > document.documentElement.clientHeight - this.oDiv.offsetHeight){
		topBottom = document.documentElement.clientHeight - this.oDiv.offsetHeight;
	}
	
	this.oDiv.style.left = leftRight + "px";
	this.oDiv.style.top = topBottom + "px";
}

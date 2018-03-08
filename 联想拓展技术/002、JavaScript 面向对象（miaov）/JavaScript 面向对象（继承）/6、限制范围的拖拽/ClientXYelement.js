function ClientXYelement(id){
	var _this = this;
	this.disX = 0;
	this.disY = 0;
	this.oDiv = document.getElementById(id);
	this.oDiv.onmousedown =function(e){
		_this.fndown(e);
		return false;
	}
}
ClientXYelement.prototype.fndown = function(e){
	var _this = this;
	var oEvent = e || event;
	this.disX = oEvent.clientX - this.oDiv.offsetLeft;
	this.disY = oEvent.clientY - this.oDiv.offsetTop;
    document.onmousemove = function(e){
    	_this.fnmove(e)
    	return false;
    };
    document.onmouseup = function(e){
    	_this.fnup()
    	return false;
    };
}

ClientXYelement.prototype.fnmove = function (e){
	var oEvent = e||event;
	
	this.oDiv.style.left = oEvent.clientX - this.disX + "px";
	
	this.oDiv.style.top = oEvent.clientY - this.disY + "px";
}

ClientXYelement.prototype.fnup = function (){
	document.onmousemove = null;
	document.onmouseup = null;
}
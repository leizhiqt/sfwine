/*  mycoz util, version 1.0.0 2007.12.18
 *  (c) http://xpc-web.eicp.net <leizhifesker@gmail.com>
/*----------------------------------------------------*/
var xmlHttp = false;

String.prototype.trim=function(){
        return this.replace(/(^\s*)|(\s*$)/g, "");
    };

function MyUnit() {};

MyUnit.prototype.CleanDisplay = function(node) {
if(node !== null) {
while (node.hasChildNodes()) {
if (node.lastChild.hasChildNodes()) error.CleanDisplay(node.lastChild);
node.removeChild(node.lastChild);
  } //end while
//node.style.display = "none";
}//end if
};
MyUnit.prototype.ErrorDisplay = function(objId,msg) {

var src = document.getElementById(objId);
var srcParentNode = src.parentNode;
var div = document.getElementById("errorDiv");
if(div==null) {
div = document.createElement("div");

div.setAttribute("id","errorDiv");
//div.style.display = "none";
div.style.display = "table";
div.style.border = "red 1px solid";
div.style.padding = "0.5px";
div.style.visibility = "visible";
div.style.position   =   "absolute";
div.style.zIndex   =   "3";
div.style.left = src.offsetLeft + "px";
div.style.width = src.offsetWidth + "px";
div.style.height = src.scrollHeight + "px";
div.style.top = src.offsetTop + src.offsetHeight + "px";

var msg = document.createTextNode("error");
var cell = document.createElement("td");
var row = document.createElement("tr");
var table = document.createElement("table");
//cell.style.border = "green 1px solid";
cell.style.color = "red";
cell.style.width = div.style.width;
cell.setAttribute("bgcolor","#FFFAFA");
cell.appendChild(msg);
row.appendChild(cell);
table.appendChild(row);
div.appendChild(table);

srcParentNode.appendChild(div);
}//end if
  };
MyUnit.prototype.GetNoticeBox = function(objId) {
	try{
		var obj = document.getElementById(objId);
		if(obj.parentNode.childNodes[obj.parentNode.childNodes.length-1]){
			var lastNode = obj.parentNode.childNodes[obj.parentNode.childNodes.length-1];
		}
		if( lastNode && lastNode.tagName == "SPAN"){
			var span = lastNode;
		}
		else if( obj.nextSibling && obj.nextSibling.tagName == "SPAN" ){
			var span = obj.nextSibling;
		}
		else{
			var span = document.createElement("SPAN");
			obj.parentNode.appendChild(span);
		}
		return span;
	}
	catch(e) {
		return null;
	}
  };

MyUnit.prototype.IsNull = function(objId) {
    var str = document.getElementById(objId).value.trim();    
    if(str.length == 0 || str == "null" || str == null || str == "NULL"){
	  return "Input is null";
    } else {
	return false;
	}
  };
MyUnit.prototype.IsDate = function(objId) {
    var str = document.getElementById(objId).value.trim();    
    if(str.length!=0){    
        var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;     
        var r = str.match(reg);     
        if(r==null)    
            return "Input Date:(YYYY-MM-DD)";
        } else {
		return false;
	}
  };
MyUnit.prototype.IsDateTime = function(objId) {
    var str = document.getElementById(objId).value.trim();    
    if(str.length!=0){    
        var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;     
        var r = str.match(reg);     
        if(r==null)    
        return "Input Data time:(YYYY-MM-DD hh:mm:ss)";
	else 
	   return false;
    } 
  };
MyUnit.prototype.IsTime = function(objId) {
    var str = document.getElementById(objId).value.trim();    
    if(str.length!=0){    
    reg=/^((20|21|22|23|[0-1]\d)\:[0-5][0-9])(\:[0-5][0-9])?$/     
        if(!reg.test(str)){    
            return "Input time:(hh:mm:ss)";
        }else {
		return false;
	 }
    } 
  };
MyUnit.prototype.IsLetter = function(objId) {
        var str = document.getElementById(objId).value.trim();    
        if(str.length!=0){    
        reg=/^[a-zA-Z]+$/;     
        if(!reg.test(str)){    
            return "Input:(a-zA-Z)";
        }else {
		return false;
		}
        }
  };
MyUnit.prototype.IsInteger = function(objId) {
        var str = document.getElementById(objId).value.trim();    
        if(str.length!=0){    
        reg=/^[-+]?\d*$/;     
        if(!reg.test(str)){    
            return "Input Integer";
        } else {
		return false;
		}
        }
  };
MyUnit.prototype.IsDouble = function(objId) {
        var str = document.getElementById(objId).value.trim();    
        if(str.length!=0){    
        reg=/^[-\+]?\d+(\.\d+)?$/;    
        if(!reg.test(str)){    
            return "Input Double";
        } else {
		return false;
		} 
        }
  };
MyUnit.prototype.IsString = function(objId) {
       var str = document.getElementById(objId).value.trim();    
        if(str.length!=0){    
        reg=/^[a-zA-Z0-9_]+$/;     
        if(!reg.test(str)){    
            return "Input String";
        } else {
		return false;
		} 
        }
  };
MyUnit.prototype.IsChinese = function(objId) {
        var str = document.getElementById(objId).value.trim();    
        if(str.length!=0){    
        reg=/^[\u0391-\uFFE5]+$/;    
        if(!reg.test(str)){    
            return "Input Chinese";
        } else {
		return false;
		}
        }
  };
MyUnit.prototype.IsEmail = function(objId) {
        var str = document.getElementById(objId).value.trim();    
        if(str.length!=0){    
        reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;    
        if(!reg.test(str)){    
            return "Input Email:(email@email.org)";
        } else {
		return false;
		}
        }
  };
MyUnit.prototype.IsZIP = function(objId) {
   	var str = document.getElementById(objId).value.trim();    
        if(str.length!=0){    
        reg=/^\d{6}$/;    
        if(!reg.test(str)){    
            return "Input ZIP:(610504)";
        } else {
		return false;
		}
        }    
  };
MyUnit.prototype.getXMLHTTPObj = function(objId,url) {
var newXmlHttp = null;

try {
     newXmlHttp = new XMLHttpRequest();
   } catch (trymicrosoft) {
     try {
       newXmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
     } catch (othermicrosoft) {
       try {
         newXmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
       } catch (failed) {
         newXmlHttp = false;
       }
     }
   }
	return newXmlHttp;
};

MyUnit.prototype.ajaxCall = function(objId,url) {
try { 
	if( xmlHttp && xmlHttp.readyState != 0 ) {
    		xmlHttp.abort();
   	}
   
   	xmlHttp = this.getXMLHTTPObj();

   	if( xmlHttp ){
		var handlerCallback = this.UpdatePage(objId,this);

    		xmlHttp.open("GET", url, true);
    		xmlHttp.onreadystatechange = handlerCallback;
    		xmlHttp.send(null);
   	} else {
    		document.getElementById("flag").innerHTML = "XMLHTTP";
   	}
     }catch (e) {

	}
};

MyUnit.prototype.UpdatePage = function(objId,Util) {
return function () {
try {			
	if (xmlHttp.readyState == 1){
    		//document.getElementById("flag").innerHTML = "loading......";
   	}

   	if (xmlHttp.readyState == 2) {
    		//document.getElementById("flag").innerHTML = "load over";
   	}

   	if (xmlHttp.readyState == 3) {
    		//document.getElementById("flag").innerHTML = "load data";
   	}

   	if (xmlHttp.readyState == 4) {

		if (xmlHttp.status == 404) {
			window.alert("Not Fond checkServelt");
		} else if (xmlHttp.status == 400) {
			window.alert("error request");
                } else if (xmlHttp.status == 200){
			var root = xmlHttp.responseXML;
			var value = root.getElementsByTagName('value');
			var objValue = document.getElementById(objId).value;
			var autoInsert = "";
  			for(var i=0;i<value.length-1;i++){
					//AjaxUtil._msg.push(userName[i].firstChild.data);
					autoInsert += value[i].firstChild.data + ",";
					//this.item("\""+userName[i].firstChild.data+"\"");
					//window.alert("\""+userName[i].firstChild.data+"\"");
    				}

			autoInsert += value[value.length-1].firstChild.data;
			Util.item(autoInsert)
//window.alert("UpdatePage:"+autoInsert);
  			Util.handleEvent(objValue,objId);
  			Util._msg   =   [];

	        }
   	}
  }catch (e) {
	//window.alert("error:"+e);
  }
 }
};
/*
MyUnit.prototype.InputTxt = function(objId,type) {

document.getElementById(objId).value = document.getElementById(objId).value.trim();

var span = this.GetNoticeBox(objId);
span.innerHTML = "ok";
span.MyUnitName = "noticeError";
span.style.color = "green";

if(type.indexOf(",")>0) {  
  var arrType=type.split(",");
  var status;

  for(var i=0;i<= arrType.length;i++){ 

     if(arrType[i]=="Null") {
	if(status=this.IsNull(objId)) { 
	span.innerHTML = status;
	span.MyUnitName = "noticeError";
	span.style.color = "red";
	break;
	}
     } else if(arrType[i]=="Integer") {
	if(status=this.IsInteger(objId)) { 
	span.innerHTML = status;
	span.MyUnitName = "noticeError";
	span.style.color = "red";
	break;
	}
     } else if(arrType[i]=="Date") {
	if(status=this.IsDate(objId)) { 
	span.innerHTML = status;
	span.MyUnitName = "noticeError";
	span.style.color = "red";
	break;
	}
     }  else if(arrType[i]=="BlogType") {

	var url = this.ContextPath()+"/BlogType.do?state=promptUpdate&Key="+document.getElementById(objId).value;
	//window.alert(this.ContextPath());
	this.SubmitServer(objId,url);
	span.innerHTML = "=";
	span.MyUnitName = "noticeError";
	span.style.color = "green";
     }

    }// end if
  }// end for
   document.getElementById(objId).parentNode.appendChild(span);
};
*/
/*
MyUnit.prototype.Submit = function(url) {
try {
   	document.forms[0].action = this.ContextPath()+url;
	document.forms[0].submit();
     } catch (e) {
   	window.alert("error:"+e);
	}
  };

MyUnit.prototype.ForwardLanguage = function(obj) {
try {
   	document.forms[0].action=this.ContextPath()+"/Index.do?Language="+obj.value;
	document.forms[0].submit();
     } catch (e) {
   	window.alert("error:"+e);
	}
  };

MyUnit.prototype.Calendar = function(objID) {
	var linkPath = this.ContextPath() + "/jsp/incl/calendar.jsp";
	window.open(linkPath,'Remote', 'width=220,height=252,scrollbars');
	setParams('BlogDate');
  };

MyUnit.prototype.ContextPath = function() {
	var contextPath = document.getElementById("ContextPath").value.trim();
	return contextPath;
  };
*/
MyUnit.prototype.Insert = function(msg) {
  this.item("a-start,b-start,c-start,d-start,e-start,f-start,g-start,h-start,i-start,j-start,k-start,l-start,m-start,n-start,o-start,p-start,q-start,r-start,s-start,t-start,u-start,v-start,w-start,x-start,y-start,z-start,z-start");
  this.item("blueDestiny");
  this.item("BlueMiracle,Blue");
  this.item("angela,geniuslau");
  this.item("never-online");
  };

MyUnit.prototype.AutoComlete = function(objId,resultDiv,url) {
  	this.Init("myUnit",resultDiv);
	var objValue = document.getElementById(objId).value;
	/*var url = this.ContextPath()+"/AutoComplete.do?state=list"+objId+"&prefix="+objValue.trim();*/
  	//this.SubmitServer(objId,url);
  	//this.Insert(url);
	this.ajaxCall(objId,url);
  //window.alert(url);
  //window.alert(objId);
  //window.alert(objValue);
	this.Insert(url);
/*
  this.item("a-start6,a-start7,a-start3,a-start2,a-start1,b-start,c-start,d-start,e-start,f-start,g-start,h-start,i-start,j-start,k-start,l-start,m-start,n-start,o-start,p-start,q-start,r-start,s-start,t-start,u-start,v-start,w-start,x-start,y-start,z-start,z-start");
  this.item("blueDestiny");
  this.item("BlueMiracle,Blue");
  this.item("angela,geniuslau");
  this.item("never-online");
  */
	//autoInsert ="cdef";
	//window.alert(autoInsert);
	/*this.item(autoInstar);*/
  	this.handleEvent(objValue,objId);
  	this._msg   =   [];
  };

MyUnit.prototype.Init = function(instaceName,objID) {   
 	this._msg   =   [];   
  	this._o   =   document.getElementById(objID);   
  	if   (!this._o)   return;   
  	this._f   =   null;
  	this._i   =   instaceName;
  	this._r   =   null;
  	this._v   =   null;   
  	this._o.style.visibility   =   "hidden";
  	this._o.style.lineHeight   =   "120%";
  	//this._o.style.position   =   "absolute";
  	this._o.style.zIndex   =   "9999";
  	this._o.style.background   =   "#ccc";
  	return   this; 
  };

//   mouseEvent.   
MyUnit.prototype.domouseover=function(obj) {   
  obj.tagName=="DIV" ? obj.MyUnitName="mouseover" : obj.parentElement.MyUnitName="mouseover";   
};
   
MyUnit.prototype.domouseout=function(obj) {   
  obj.tagName=="DIV" ? obj.MyUnitName="mouseout" : obj.parentElement.MyUnitName="mouseout";
};

MyUnit.prototype.doclick=function(msg) {
with (this) {   
if(_r) {   
  _r.value   =   msg;   
  _o.style.visibility   =   "hidden";   
} else {   
  alert("javascript   autocomplete   ERROR   :\n\n   can   not   get   return   object.");   
  return;   
  }   
 }
};   

  //   object   method;   
MyUnit.prototype.item=function(msg) {   
if(msg.indexOf(",")>0) {   
  var   arrMsg=msg.split(",");   
  for(var i=0;i<arrMsg.length;i++){   
     arrMsg[i]  ?  this._msg.push(arrMsg[i])  :  "";   
    }   
} else {   
  this._msg.push(msg);   
}   
  this._msg.sort();
};

MyUnit.prototype.append = function(msg) {
with (this) {   
  _i ? "" :  _i = eval(_i);   
  var div = document.createElement("DIV");   
    
  //bind   event   to   object.   
  div.onmouseover = function(){_i.domouseover(this)};   
  div.onmouseout = function(){_i.domouseout(this)};   
  div.onclick = function(){_i.doclick(msg)};   
  var re = new  RegExp("(" + _v + ")","i");   
  div.MyUnitName = "mouseout";   
  if (_v) div.innerHTML = msg.replace(re, "<strong>$1</strong>");   
  div.style.fontFamily = "verdana";   
    
  _o.appendChild(div);   
  }
};


MyUnit.prototype.display = function() {
with(this){   
  if(_f){   
  _o.style.left = _r.offsetLeft;   
  _o.style.width = _r.offsetWidth;   
  _o.style.top = _r.offsetTop + _r.offsetHeight;   
  _o.style.visibility = "visible";   
  } else {   
  _o.style.visibility="hidden";   
  }   
 }
};

MyUnit.prototype.handleEvent = function(fValue,fID) {  
with (this) {
  var re;   
  _f = false; 
  _r = document.getElementById(fID);
  _v = fValue;
  _i = eval(_i);
  re   =   new   RegExp("^"   +   fValue   +   "",   "i");   
  if(fValue=="")   return;
  
  _o.innerHTML="";   
  for(var   i=0;   i<_msg.length;   i++) {   
     if(re.test(_msg[i])) {   
        _i.append(_msg[i]);   
        _f = true;   
      }   
  }   
    
  _i ? _i.display() : alert("can   not   get   instance");
;
 }// end with
};

var myUnit = new MyUnit();

function RGBToHex(rgb){
    var regexp = /^rgb\(([0-9]{0,3})\,\s([0-9]{0,3})\,\s([0-9]{0,3})\)/g;
    var re = rgb.replace(regexp, "$1 $2 $3").split(" ");//??????????????????????????????????????????
    var hexColor = "#";
    var hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    for (var i = 0; i < 3; i++) {
        var r = null;
        var c = re[i];
        var hexAr = [];
        while (c > 16) {
            r = c % 16;
            c = (c / 16) >> 0;
            hexAr.push(hex[r]);
        }
        hexAr.push(hex[c]);
        hexColor += hexAr.reverse().join('');
    }
    //alert(hexColor)
    return hexColor;
}

function trMouseOver(trObj){
	trObj.style.borderColor=trObj.style.backgroundColor;
	trObj.style.backgroundColor="orange";
}

function trMouseOut(trObj){
	trObj.style.backgroundColor=trObj.style.borderColor;
}

function trDbClick(tr){
	confirm();
}

function trClick(tr){
	var nodes = tr.parentNode.childNodes;
	for(var i=0;i<nodes.length;i++){
		if ("TR" == nodes[i].nodeName){
			nodes[i].style.background='#ffffff';
			//alert(i);
		}
	}
	
	tr.style.background='#eeeddd';
}

function checkedAll(cName,lName) {
	var chooseObj = document.getElementsByName(cName);
	var arr = document.getElementsByName(lName);

	for ( var i = 0; i < arr.length; i++) {
		arr[i].checked = chooseObj[0].checked;
	}
}

function docommit(url){
	document.forms[0].action=url;
	document.forms[0].submit();
}

function confirmSubmit(url) {
	 if(confirm("?????????????????????")){
			document.forms[0].action=url;
			document.forms[0].submit();
	 }
}
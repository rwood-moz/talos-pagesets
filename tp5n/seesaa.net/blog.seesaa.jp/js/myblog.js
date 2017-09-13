function GetLayer(layername){
  var layer;
  if(document.getElementById){
    layer = document.getElementById(layername);
  }
  else if(document.all && ! document.getElementById){
    layer = document.all[layername];
  }
  else if(document.layers){
    layer = document.layers[layername];
  }
  return layer;
}

function helpView(viewid) {
  var help_view = GetLayer(viewid)
  help_view.style.display = 'inline';

  var ci = new clientInfo();
  if(ci.isSafari()){
    help_view.style.margin = "20px 0 0 0";
  }
  switchAllSelect('hidden');
}

function helpClose(closeid) {
  var help_view = GetLayer(closeid);
  help_view.style.display = 'none';
  switchAllSelect('visible');
}


voidCssPreView() {
  var selected = document.for_js.template__css_id.selectedIndex;
  var viewid = document.for_js.template__css_id.options[selected].value;
  myWin = void("httpdisabled://blog.seesaa.jp/pages/sample/index?id="+viewid,"win1","toolbar=no,location=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,width=800,height=200");
  myWin.focus();
}

function cssPreView() {
  var selected = document.for_js.template__css_id.selectedIndex;
  var viewid = document.for_js.template__css_id.options[selected].value;
  var help_view = GetLayer("css_"+viewid)
  help_view.style.display = 'inline';
  switchAllSelect('hidden');
}

function cssPreViewClose() {
  var selected = document.for_js.template__css_id.selectedIndex;
  var closeid  = document.for_js.template__css_id.options[selected].value;
  var help_view = GetLayer("css_"+closeid);
  help_view.style.display = 'none';
  switchAllSelect('visible');
}

function imagePreView(viewid) {
  var view = GetLayer(viewid);
  view.style.display = 'inline';
  switchAllSelect('hidden');
}

function imagePreViewClose(closeid) {
  var view = GetLayer(closeid);
  view.style.display = 'none';
  switchAllSelect('visible');
}

function switchAllSelect(visibility) {
  for(i=0;i<document.forms.length;i++){
    var form = document.forms[i];
    for(e=0;e<form.elements.length;e++){
      var ele = form.elements[e];
      if(ele.type.indexOf('select') != -1){
	ele.style.visibility = visibility;
      }
    }
  }
}

function checkAll(form_name, name){
  var flag = document.forms[form_name].checkall_flag.checked ? false : true;

  var obj = document.forms[form_name].elements[name];
  for(i=0;i<obj.length;i++){
    obj[i].checked = flag;
  }
}

function formShowHide(id, button,add_val,rm_val) {
    var disp = document.getElementById(id).style.display;
    if(disp == "block") {
        document.getElementById(id).style.display = "none";
        document.getElementById(button).src = add_val;
        document.getElementById(button).value = add_val;
    }
    else {
        document.getElementById(id).style.display = "block";
        document.getElementById(button).src = rm_val;
        document.getElementById(button).value = rm_val;
    }
    return false;
}

function formShowHideFrame(id, button,add_val,rm_val,frame,url) {
    var disp = document.getElementById(id).style.display;
    if(disp == "block") {
        document.getElementById(id).style.display = "none";
        document.getElementById(button).src = add_val;
        document.getElementById(button).value = add_val;
	document.getElementById(frame).src = "";
    }
    else {
        document.getElementById(id).style.display = "block";
        document.getElementById(button).src = rm_val;
        document.getElementById(button).value = rm_val;
	myTime = new Date();
	document.getElementById(frame).src = url + myTime.getTime();

    }
    return false;
}

function submitForm () {}
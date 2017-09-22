YAHOO.namespace("panel");
YAHOO.panel.panels = [];

function hidePanel(e, id) {
  YAHOO.panel.panels[id].hide();
  return false;
}

function createPanel(e, str, user_args, c_event) {
  var id = 'media_panel';

  var args = { width:"480px", fixedcenter:true, close:true, visible:true, draggable:true, modal:false, iframe:false , zIndex:100 };

  if(user_args){
    for(var key in user_args){
      args[key] = user_args[key];
    }
  }
  var isNew = true;
  var newMod;
  if(YAHOO.panel.panels[id]) {
    newMod = YAHOO.panel.panels[id];
    newMod.cfg.applyConfig(args);
    isNew = false;
  }
  else {
    newMod = new YAHOO.widget.Panel(id, args);
    YAHOO.panel.panels[id] = newMod;
  }

  newMod.setBody(str);

  if(isNew && c_event){
    for(var key in c_event){
      var e = c_event[key];
      newMod[key].subscribe(e[0], e[1], e[2]);
    }
  }
  
  isNew ? newMod.render(document.body) : newMod.render();

  var elements = YAHOO.util.Dom.getElementsByClassName('close-panel');
  for(i=0;i<elements.length;i++){
    var ele = elements[i];
    YAHOO.util.Event.addListener(ele, "click", hidePanel, id);
  }
}

function createPanelByUrl(e, params){
  var url   = params[0];
  var args  = params[1];
  var c_event = params[2];
  
  var handleSuccess = function(o){
    if(o.responseText !== undefined){
      createPanel(o.argument.e, o.responseText, args, c_event);
    }
  };
  var handleFailure = function(o){
  };

  var cb = {
    success:handleSuccess,  
    failure:handleFailure,
    argument: { e:"e" }
  };

  var date = new Date();
  timeq = '&__time=' + date.getTime();
  if(url.indexOf('\?') < 0) timeq = '?' + timeq;

  var request = YAHOO.util.Connect.asyncRequest('GET', url + timeq, cb); 
}


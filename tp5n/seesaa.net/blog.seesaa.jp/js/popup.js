var myWin;
function go(tools){
  if(! myWin || myWin.closed){
     myWin = void(tools,"01","menubar=no,toolbar=no,scrollbars=no,location=no,directories=no,resizable=yes,width=300,height=400");
  } else {
     myWin.focus();
  }
}
function newWindow1(url)
{
	newwin = void(url,"product_detail","directories=0,location=0,menubar=1,scrollbars=0,resizable=0,status=0,toolbar=0,width=220,height=200");
}
function newWindow2(url)
{
	newwin = void(url,"product_detail","directories=0,location=0,menubar=1,scrollbars=0,resizable=0,status=0,toolbar=0,width=420,height=400");
}
var myWin;
function go2(tools){
  if(! myWin || myWin.closed){
     myWin = void(tools,"01","menubar=no,toolbar=yes,scrollbars=yes,location=no,directories=no,resizable=yes,width=700,height=500");
  } else {
     myWin.focus();
  }
}
var myWin;
function go3(tools){
  if(! myWin || myWin.closed){
     myWin = void(tools,"01","menubar=no,toolbar=no,scrollbars=no,location=no,directories=no,resizable=yes,width=300,height=400");
  } else {
     myWin.focus();
  }
}

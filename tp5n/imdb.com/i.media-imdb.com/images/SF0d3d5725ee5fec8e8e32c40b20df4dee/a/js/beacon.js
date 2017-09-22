if(typeof COMSCORE=="undefined"){
  var COMSCORE={}
}
COMSCORE.beacon=function(d){
  if(!d){return}
  var a=1.7,e=document,h=e.location,g=512,
  c=function(i,j){
    if(i==null){return""}
    i=(encodeURIComponent||escape)(i);
    if(j){
      i=i.substr(0,j)
    }
    return i
  },
  f="../../../b.gif";
  var b=new Image();
  b.onload=function(){};
  b.src=f;
  return f
}; 

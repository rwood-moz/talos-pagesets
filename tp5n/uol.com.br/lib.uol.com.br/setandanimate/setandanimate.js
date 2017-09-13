/**
 * @projectDescription Script para mudar a propriedade númerica de um elemento com efeito de aceleração / desaceleração
 *
 * @author 	Roberto Robson (Bode) rnogueira
 * @version  2.0
 * @since	   0.9
*/
setAndAnimate={objs:{},change:function(a){var b=a.objName||+new Date()*Math.random();if(this.objs[b]){clearTimeout(this.objs[b].execTimer)}var c={execTimer:null,propriedade:a.propriedade,escala:a.propriedade[2]||"",inicio:parseFloat(a.inicio),fim:parseFloat(a.fim),callback:a.callback||null,velocidade:a.velocidade||0.9,aumentarEscala:1,execute:function(){if(this.inicio==0){this.newSize+=1}this.dd*=this.velocidade;if(this.dd<1){this.dd=0}this.newSize=this.fim-(this.dd*this.aux);this.propriedade[0][this.propriedade[1]]=(this.newSize/this.aumentarEscala)+this.escala;if((this.aux==1&&this.newSize<this.fim)||(this.aux==-1&&this.newSize>this.fim)){c.execTimer=setTimeout((function(d){return function(){d.execute()}})(c),20)}else{if(typeof this.callback=="function"){this.callback()}}}};if(parseInt(c.inicio-c.fim)==0&&c.inicio!=c.fim){c.aumentarEscala=100}if(c.fim>c.inicio){c.newSize=c.fim;c.aux=1;c.fim*=c.aumentarEscala;c.dd=c.fim-c.inicio}else{c.inicio*=c.aumentarEscala*(1%c.aumentarEscala+1);c.fim*=c.aumentarEscala;c.dd=c.inicio-c.fim;c.aux=-1}this.objs[b]=c;c.execute()}};
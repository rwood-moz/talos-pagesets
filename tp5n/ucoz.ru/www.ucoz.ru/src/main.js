//crsl
eval(function(p, a, c, k, e, r) {
    e = function(c) {
        return(c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--)r[e(c)] = k[c] || e(c);
        k = [function(e) {
            return r[e]
        }];
        e = function() {
            return'\\w+'
        };
        c = 1
    }
    ;
    while (c--)if (k[c])p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('(9($){$.1q.1Z=9(o){o=$.1e({S:F,M:F,1n:F,1M:E,1c:F,1k:2F,J:F,T:E,O:1m,11:3,L:0,w:1,16:F,17:F},o||{});6 m.1R(9(){k b=E,N=o.T?"1p":"Q",18=o.T?"P":"R";k c=$(m),y=$("y",c),12=$("1Q",y),1z=12.1w(),v=o.11;8(o.O){y.2D(12.K(1z-v-1+1).1B()).1U(12.K(0,v).1B());o.L+=v}k f=$("1Q",y),A=f.1w(),q=o.L;c.n("1W","11");f.n({1F:"1P",2L:o.T?"1C":"Q"});y.n({2o:"0",2g:"0",1o:"1r","20-2z-1D":"1C","z-1G":"1"});c.n({1F:"1P",1o:"1r","z-1G":"2",Q:"28"});k g=o.T?P(f):R(f);k h=g*A;k j=g*v;f.n({R:f.R(),P:f.P()});y.n(18,h+"W").n(N,-(q*g));c.n(18,j+"W");8(o.S)$(o.S).15(9(){6 B(q-o.w)});8(o.M)$(o.M).15(9(){6 B(q+o.w)});8(o.1n)$.1R(o.1n,9(i,a){$(a).15(9(){6 B(o.O?o.11+i:i)})});8(o.1M&&c.r)c.r(9(e,d){6 d>0?B(q-o.w):B(q+o.w)});8(o.1c)2m(9(){B(q+o.w)},o.1c+o.1k);9 1g(){6 f.K(q).K(0,v)};9 B(a){8(!b){8(o.16)o.16.1i(m,1g());8(o.O){8(a<=o.L-v-1){y.n(N,-((A-(v*2))*g)+"W");q=a==o.L-v-1?A-(v*2)-1:A-(v*2)-o.w}u 8(a>=A-v+1){y.n(N,-((v)*g)+"W");q=a==A-v+1?v+1:v+o.w}u q=a}u{8(a<0||a>A-v)6;u q=a}b=1m;y.1X(N=="Q"?{Q:-(q*g)}:{1p:-(q*g)},o.1k,o.J,9(){8(o.17)o.17.1i(m,1g());b=E});8(!o.O){$(o.S+","+o.M).2i("1S");$((q-o.w<0&&o.S)||(q+o.w>A-v&&o.M)||[]).1T("1S")}}6 E}})};G.J={1V:9(x,t,b,c,d){6 c*(t/=d)*t+b},22:9(x,t,b,c,d){8(t<d/2)6 2*c*t*t/(d*d)+b;k a=t-d/2;6-2*c*a*a/(d*d)+2*c*a/d+c/2+b},2f:9(x,t,b,c,d){6-c*t*t/(d*d)+2*c*t/d+b},2x:9(x,t,b,c,d){k a=1;8(c<0){a*=-1;c*=-1}6 a*(l.Z(l.14(c)/d*t))+b},2H:9(x,t,b,c,d){k a=1;8(c<0){a*=-1;c*=-1}6 a*(-l.Z(-l.14(c)/d*(t-d))+c+1)+b},2J:9(x,t,b,c,d){k a=1;8(c<0){a*=-1;c*=-1}8(t<d/2)6 a*(l.Z(l.14(c/2)/(d/2)*t))+b;6 a*(-l.Z(-2*l.14(c/2)/d*(t-d))+c+1)+b},1O:9(x,t,b,c,d){6 c-G.J[\'1a\'](x,d-t,0,c,d)+b},1a:9(x,t,b,c,d){8((t/=d)<(1/2.C)){6 c*(7.V*t*t)+b}u 8(t<(2/2.C)){6 c*(7.V*(t-=(1.5/2.C))*t+.C)+b}u 8(t<(2.5/2.C)){6 c*(7.V*(t-=(2.25/2.C))*t+.2q)+b}u{6 c*(7.V*(t-=(2.2a/2.C))*t+.2s)+b}},2u:9(x,t,b,c,d){8(t<d/2)6 G.J[\'1O\'](x,t*2,0,c,d)*.5+b;6 G.J[\'1a\'](x,t*2-d,0,c,d)*.5+c*.5+b},2c:9(x,t,b,c,d){k s=1.H;k p=0;k a=c;8(t==0)6 b;8((t/=d)==1)6 b+c;8(!p)p=d*.3;8(a<l.1f(c)){a=c;k s=p/4}u k s=p/(2*l.D)*l.1h(c/a);6-(a*l.13(2,10*(t-=1))*l.X((t*d-s)*(2*l.D)/p))+b},24:9(x,t,b,c,d){k s=1.H;k p=0;k a=c;8(t==0)6 b;8((t/=d)==1)6 b+c;8(!p)p=d*.3;8(a<l.1f(c)){a=c;k s=p/4}u k s=p/(2*l.D)*l.1h(c/a);6 a*l.13(2,-10*t)*l.X((t*d-s)*(2*l.D)/p)+c+b},27:9(x,t,b,c,d){k s=1.H;k p=0;k a=c;8(t==0)6 b;8((t/=d/2)==2)6 b+c;8(!p)p=d*(.3*1.5);8(a<l.1f(c)){a=c;k s=p/4}u k s=p/(2*l.D)*l.1h(c/a);8(t<1)6-.5*(a*l.13(2,10*(t-=1))*l.X((t*d-s)*(2*l.D)/p))+b;6 a*l.13(2,-10*(t-=1))*l.X((t*d-s)*(2*l.D)/p)*.5+c+b},29:9(x,t,b,c,d){k s=1.H;6 c*(t/=d)*t*((s+1)*t-s)+b},2b:9(x,t,b,c,d){k s=1.H;6 c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},2d:9(x,t,b,c,d){k s=1.H;8((t/=d/2)<1)6 c/2*(t*t*(((s*=(1.1I))+1)*t-s))+b;6 c/2*((t-=2)*t*(((s*=(1.1I))+1)*t+s)+2)+b},2h:9(x,t,b,c,d){6 c*t/d+b}};9 n(a,b){6 2j($.n(a[0],b))||0};9 R(a){6 a[0].2l+n(a,\'2n\')+n(a,\'2p\')};9 P(a){6 a[0].2r+n(a,\'2t\')+n(a,\'2v\')}})(G);(9($){$.I.1b.r={2B:9(){k b=$.I.1b.r.1j;8($.Y.19)$(m).1t(\'1E.r\',9(a){$.U(m,\'1l\',{1u:a.1u,1H:a.1H,1y:a.1y,1J:a.1J})});8(m.1s)m.1s(($.Y.19?\'1L\':\'r\'),b,E);u m.1A=b},21:9(){k a=$.I.1b.r.1j;$(m).1N(\'1E.r\');8(m.1v)m.1v(($.Y.19?\'1L\':\'r\'),a,E);u m.1A=9(){};$.2w(m,\'1l\')},1j:9(a){k b=1Y.2y.K.1i(2e,1);a=$.I.2A(a||23.I);$.1e(a,$.U(m,\'1l\')||{});k c=0,2C=1m;8(a.1d)c=a.1d/2E;8(a.1x)c=-a.1x/3;8($.Y.2G)c=-a.1d;a.U=a.U||{};a.1D="r";b.1K(c);b.1K(a);6 $.I.2I.26(m,b)}};$.1q.1e({r:9(a){6 a?m.1t("r",a):m.2K("r")},2k:9(a){6 m.1N("r",a)}})})(G);', 62, 172, '||||||return||if|function|||||||||||var|Math|this|css|||curr|mousewheel|||else||scroll||ul||itemLength|go|75|PI|false|null|jQuery|70158|event|easing|slice|start|btnNext|animCss|circular|height|left|width|btnPrev|vertical|data|5625|px|sin|browser|exp||visible|tLi|pow|log|click|beforeStart|afterEnd|sizeCss|mozilla|bounceout|special|auto|wheelDelta|extend|abs|vis|asin|call|handler|speed|mwcursorposdata|true|btnGo|position|top|fn|relative|addEventListener|bind|pageX|removeEventListener|size|detail|clientX|tl|onmousewheel|clone|none|type|mousemove|overflow|index|pageY|525|clientY|unshift|DOMMouseScroll|mouseWheel|unbind|bouncein|hidden|li|each|disabled|addClass|append|easein|visibility|animate|Array|jc|list|teardown|easeinout|window|elasout||apply|elasinout|0px|backin|625|backout|elasin|backinout|arguments|easeout|padding|linear|removeClass|parseInt|unmousewheel|offsetWidth|setInterval|marginLeft|margin|marginRight|9375|offsetHeight|984375|marginTop|bounceinout|marginBottom|removeData|expoin|prototype|style|fix|setup|returnValue|prepend|120|200|opera|expoout|handle|expoinout|trigger|float'.split('|'), 0, {}))
//crsl

eval(function(p, a, c, k, e, r) {
    e = function(c) {
        return(c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--)r[e(c)] = k[c] || e(c);
        k = [function(e) {
            return r[e]
        }];
        e = function() {
            return'\\w+'
        };
        c = 1
    }
    ;
    while (c--)if (k[c])p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('s.5=z(a,b,c){4(7 b!=\'v\'){c=c||{};4(b===r){b=\'\';c.3=-1}2 d=\'\';4(c.3&&(7 c.3==\'u\'||c.3.n)){2 e;4(7 c.3==\'u\'){e=D E();e.F(e.G()+(c.3*H*p*p*y))}q{e=c.3}d=\'; 3=\'+e.n()}2 f=c.8?\'; 8=\'+(c.8):\'\';2 g=c.9?\'; 9=\'+(c.9):\'\';2 h=c.o?\'; o\':\'\';6.5=[a,\'=\',w(b),d,f,g,h].x(\'\')}q{2 j=r;4(6.5&&6.5!==\'\'){2 k=6.5.A(\';\');B(2 i=0;i<k.m;i++){2 l=s.C(k[i]);4(l.t(0,a.m+1)==(a+\'=\')){j=I(l.t(a.m+1));J}}}K j}};', 47, 47, '||var|expires|if|cookie|document|typeof|path|domain|||||||||||||length|toUTCString|secure|60|else|null|jQuery|substring|number|undefined|encodeURIComponent|join|1000|function|split|for|trim|new|Date|setTime|getTime|24|decodeURIComponent|break|return'.split('|'), 0, {}))


eval(function(p, a, c, k, e, r) {
    e = function(c) {
        return(c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--)r[e(c)] = k[c] || e(c);
        k = [function(e) {
            return r[e]
        }];
        e = function() {
            return'\\w+'
        };
        c = 1
    }
    ;
    while (c--)if (k[c])p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('(2($){$.y.z=2(c){C 7.N(2(i){f a=$(7);f b=a.3(\'D\').E(/^F|[\\(\\)\'"]/g,\'\');a.K(\'<h M="4: q;"></h>\').r().s(\'<t>\').L(\':u-v\').w(\'x\',b);j($.6.A||$.6.B){a.3({\'4\':\'8\',\'d\':0,\'e\':\'\',\'k\':7.G})}l j($.6.H&&$.6.I<9.5){a.3({\'4\':\'8\',\'d\':0,\'e\':\'\',\'k\':"0"})}l{a.3({\'4\':\'8\',\'d\':0,\'e\':\'\'})}a.J(2(){a.m().n({o:0},p)},2(){a.m().n({o:1},p)})})}})(O);', 51, 51, '||function|css|position||browser|this|absolute|||||left|background|var||span||if|top|else|stop|animate|opacity|250|relative|parent|prepend|img|first|child|attr|src|fn|cross|msie|mozilla|return|backgroundImage|replace|url|offsetTop|opera|version|hover|wrap|find|style|each|jQuery'.split('|'), 0, {}))


eval(function(p, a, c, k, e, r) {
    e = function(c) {
        return(c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--)r[e(c)] = k[c] || e(c);
        k = [function(e) {
            return r[e]
        }];
        e = function() {
            return'\\w+'
        };
        c = 1
    }
    ;
    while (c--)if (k[c])p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('(8($){$.17.1x=8(o){7 s={B:["1y"],1z:u,P:u,U:1A,V:u,W:u,18:u,19:"",1B:"",1C:"",1D:"",1E:"",Q:u,1a:u,X:u};t(o){$.1b(s,o)}$.17.1b({1c:8(){7 a=[];7 b=/((1F|F|Y):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-\\/]))?)/Z;C.I(8(){a.11(C.R(b,\'<a J="K" L=\\"$1\\">$1</a>\'))});x $(a)},1d:8(){7 a=[];7 b=/[\\@]+([A-1e-1f-9-1g]+)/Z;C.I(8(){a.11(C.R(b,\'<a J="K" L=\\"F://M.N/$1\\">@$1</a>\'))});x $(a)},1h:8(){7 a=[];7 b=/(?:^| )[\\#]+([A-1e-1f-9-1g]+)/Z;C.I(8(){a.11(C.R(b,\' <a J="K" L="F://1i.M.N/1i?q=&1G=$1&1H=1I&1J=\'+s.B.1K("%1L%2B")+\'">#$1</a>\'))});x $(a)}});8 1j(a){x 1k.1M(a.R(/^([a-z]{3})( [a-z]{3} \\d\\d?)(.*)( \\d{4})$/i,\'$1,$2$4$3\'))}8 1l(a){7 b=1j(a);7 c=(1m.12>1)?1m[1]:1N 1k();7 d=13((c.1O()-b)/1n);7 r=\'\';t(d<v){r=d+D.E[0]}G t(d<1P){r=D.E[1]}G t(d<(1Q*v)){r=(13(d/v,10)).1o()+D.E[2]}G t(d<(2*v*v)){r=D.E[3]}G t(d<(24*v*v)){r=\'\'+(13(d/1R,10)).1o()+D.E[4]}G t(d<(1S*v*v)){r=D.E[5]}G{r=D.E[6]}x r}8 1p(){7 a=(\'Y:\'==1T.1U.1V?\'Y:\':\'F:\');t(s.1a==u&&s.B.12==1){x a+\'//1W.M.N/1/1q/1X.1Y?1r=\'+s.B[0]+\'&U=\'+s.U+\'&1Z=1&20=?\'}}x C.I(8(i,n){7 o=$(\'<21 y="22">\').23(n);7 p=\'<p y="25">\'+s.V+\'</p>\';7 q=\'<p y="26">\'+s.W+\'</p>\';7 r=$(\'<p y="27">\'+s.Q+\'</p>\');t(28(s.B)=="29"){s.B=[s.B]}t(s.Q)$(n).1s(r);$(n).2a("14",8(){$.2b(1p(),8(l){t(s.Q)r.2c();t(s.V)o.2d(p);o.1t();7 m=(l.2e||l);$.I(m,8(i,a){t(a.2f||a.2g)x;7 b=s.19;7 c=a.2h||a.1u.1r;7 d=a.1v||a.1u.1v;7 e=\'<H y="2i"> \'+b+\' </H>\';7 f=((s.18)?e:\' \');7 g=\'<a y="2j" J="K" L="F://M.N/\'+c+\'"><2k 2l="\'+d+\'" 2m="\'+s.P+\'" 2n="\'+s.P+\'" 2o="\'+c+\'" 1w="\'+c+\'" 2p="0"/></a>\';7 h=(s.P?g:\'\');7 j=\'<2q><H y="2r"><a J="K" L="F://M.N/\'+c+\'/1q/\'+a.2s+\'" 1w="">\'+1l(a.2t)+\'</a></H>\';7 k=\'<H y="2u">\'+$([a.2v]).1c().1d().1h()[0]+\'</H>\';o.1s(\'<O>\'+h+f+k+j+\'</O>\');o.15(\'O:2w\').16(\'2x\');o.15(\'O:2y\').16(\'2z\');o.15(\'O:2A\').16(\'2C\')});t(s.W){o.2D(q)}$(n).T("2E").T((m.12===0?"1t":"2F"));$(n).2G({2H:"2I",2J:2,2K:3,2L:2M,2N:"#2O",2P:"#2Q"});t(s.X){2R.2S(8(){$(n).T("14")},1n*s.X)}})}).T("14")})}})(2T);', 62, 180, '|||||||var|function|||||||||||||||||||||if|null|60||return|class|||username|this|uMain|twt|http|else|span|each|target|blank|href|twitter|com|li|avatar_size|loaddisableding_text|replace||trigger|count|intro_text|outro_text|refresh_interval|https|gi||push|length|parseInt|loaddisabled|children|addClass|fn|join_text|auto_join_text_default|query|extend|linkUrl|linkUser|Za|z0|_|linkHash|search|parse_date|Date|relative_time|arguments|1000|toString|build_url|statuses|screen_name|append|empty|user|profile_image_url|title|tweet|ucoz_ru|list|30|auto_join_text_ed|auto_join_text_ing|auto_join_text_reply|auto_join_text_url|ftp|tag|lang|all|from|join|2BOR|parse|new|getTime|120|45|3600|48|document|location|protocol|api|user_timeline|json|include_rts|callback|ul|tweet_list|appendTo||tweet_intro|tweet_outro|loaddisableding|typeof|string|bind|getJSON|remove|before|results|in_reply_to_status_id|in_reply_to_user_id|from_user|tweet_join|tweet_avatar|img|src|height|width|alt|border|br|tweet_time|id|created_at|tweet_text|text|first|tweet_first|odd|tweet_even|even||tweet_odd|after|loaddisableded|full|jc|vertical|true|scroll|visible|circular|false|btnPrev|twitup|btnNext|twitdown|window|setTimeout|jQuery'.split('|'), 0, {}))


function showCloseBtn(wnd, cont) {
    var closeBtn = $('<div style="position:absolute;background:transparent url(/ucoz/img/closebtnblack.png) 50% 50% no-repeat;top:-8px;right:-8px;width:25px;height:25px;cursor:pointer" onclick="var w=_uWnd.findparent(this);if(w)w.close();"></div>');
    $(wnd.top).find('div:first').append(closeBtn);
}

function getnews(data) {
    $res = $('#newscont').append($('<ul/>').attr('id', 'unews'));
    $tmpl = $('<span class="date"></span><h2 class="title"></h2><p id="cnt"></p>');
    $.each(data, function(i) {
        $res.find('#unews').append($('<li>').attr({'class':'news','id':'news' + i}).css({'width':'700px'}).append($('<span class="date">' + data[i]['DATE'] + '</span><h2 class="title">' + data[i]['TITLE'] + '</h2><p id="cnt">' + data[i]['MESSAGE'] + '</p>')));
    });
    $('#newscont').jc({
        visible: 1,
        speed: 1000,
        easing: "backout",
        scroll: 1,
        horizontal: "true",
        btnPrev: ".newsu",
        btnNext: ".newsd"
    });
   newsloaddisabled = true;
}

$(document).ready(function () {
    var twiloaddisabled, fbloaddisabled ,$clBlock,newsloaddisabled,integloaddisabled,modloaddisabled,widloaddisabled,temploaddisabled;

    function delCook() {
        $.cookie("hide", null);
        $.cookie("position", null);
        $.cookie("fblock", null);
        $.cookie("sblock", null);
        window.location.reloaddisabled();
    }

    $("#preview").jc({
        speed: 1000,
        easing: "backout",
        scroll: 1,
        visible: 5,
        horizontal: "true",
        btnPrev: ".arrow-left",
        btnNext: ".arrow-right"});

//    $("#modpreview").jc({
//        speed: 2000,
//        easing: "backout",
//        scroll: 3,
//        visible: 4,
//        horizontal: "true",
//        btnPrev: "#icon-moduls .arrowv-left",
//        btnNext: "#icon-moduls .arrowv-right"});
//
//
//    $("#widpreview").jc({
//        speed: 1000,
//        easing: "backout",
//        scroll: 1,
//        visible: 4,
//        horizontal: "true",
//        btnPrev: "#icon-vidget .arrowv-left",
//        btnNext: "#icon-vidget .arrowv-right"});
//
//    $("#intpreview").jc({
//        speed: 1000,
//        easing: "backout",
//        scroll: 1,
//        visible: 4,
//        horizontal: "true",
//        btnPrev: "#icon-integ .arrowv-left",
//        btnNext: "#icon-integ .arrowv-right"
//    });
//
//
//    $("#tempreview").jc({
//        speed: 1000,
//        easing: "backout",
//        scroll: 1,
//        visible: 4,
//        horizontal: "true",
//        btnPrev: "#icon-templates .arrowv-left",
//        btnNext: "#icon-templates .arrowv-right"
//    });

    $("#opindv").jc({
        speed: 100,
        scroll: 1,
        visible: 4,
        horizontal: "true",
        btnPrev: ".small-arrow-left",
        btnNext: ".small-arrow-right"});
//scroll blocks

    $('.inf_cont').hide();
    $('#btn_r').live('click', delCook);
    $('#wrap').bind('click', function() {
        if ($('#lnglist:visible')) {
            $('#lnglist:visible').hide();
        }
    });

//switch hints
    $('.switch_block li').hover(
                               function () {

                                   $(this).prev().stop().animate({'width':'70px','opacity':'1'}, 200)
                                           .find('span').stop(true, true);//.fadeIn();
                               },
                               function () {
                                   $(this).prev().stop().animate({'width':'0px','opacity':'0'}, 200).
                                           find('span').stop(true, true);//.fadeOut();
                               }
            );
//Selection info
    $('.switch_block li').bind('click', function() {
        var $this = $(this),
                $cblock = $('.info_block').find('#' + $(this).attr('class').split(' ')[0]),
                $hblock = $this.parents('.block').find('.block-header');
        $.cookie($this.parents('.block').attr('id'), $this.parents('.block').find('.switch_block li').index($(this)), {
            expires: 999
        });
        if (!$cblock.is(':visible')) {
            $('.inf_cont', '#' + $this.parents('.block').attr('id')).hide();
            $hblock.hide();
            $hblock.text($this.prev().attr('title') || $this.prev().text());
            $this.parents('.switch_block').find('span').attr('class', 'deactive');
            $this.find('span').attr('class', 'active');
            if ($.browser.msie) {
                $hblock.show();
                $cblock.show();
            } else {
                $hblock.fadeIn('fast');
                $cblock.fadeIn('fast');
            }

            if ($this.attr('class').split(' ')[0] == "icon-news" && !newsloaddisabled) {
                $.ajax({
                    url: uMain.nsite +'-0-0-0-getnews',
                    dataType: 'jsonp',
                    jsonpCallback:'getnews'
                });
                newsloaddisabled = true;
            }

			if ($this.attr('class').split(' ')[0] == "icon-integ" && !integloaddisabled) {
                 $("#intpreview").find(".integ").removeClass('img_empty').end().show()
                    .jc({
                        speed: 1000,
                        easing: "backout",
                        scroll: 1,
                        visible: 4,
                        horizontal: "true",
                        btnPrev: "#icon-integ .arrowv-left",
                        btnNext: "#icon-integ .arrowv-right"
                    });
                    integloaddisabled = true;
            }

            if ($this.attr('class').split(' ')[0] == "icon-moduls" && !modloaddisabled) {
                   $("#modpreview").find(".mod").removeClass('img_empty').end().show()
                     .jc({
                        speed: 2000,
                        easing: "backout",
                        scroll: 3,
                        visible: 4,
                        horizontal: "true",
                        btnPrev: "#icon-moduls .arrowv-left",
                        btnNext: "#icon-moduls .arrowv-right"});
                    modloaddisabled = true;
            }

            if ($this.attr('class').split(' ')[0] == "icon-vidget" && !widloaddisabled) {
                $("#widpreview").find(".vidget").removeClass('img_empty').end().show()
                        .jc({
                        speed: 2000,
                        easing: "backout",
                        scroll: 3,
                        visible: 4,
                        horizontal: "true",
                        btnPrev: "#icon-vidget .arrowv-left",
                        btnNext: "#icon-vidget .arrowv-right"});
                    widloaddisabled = true;
            }

            if ($this.attr('class').split(' ')[0] == "icon-templates" && !temploaddisabled) {
            $("#tempreview").find(".templ").removeClass('img_empty').end().show()
               .jc({
                        speed: 2000,
                        easing: "backout",
                        scroll: 3,
                        visible: 4,
                        horizontal: "true",
                        btnPrev: "#icon-templates .arrowv-left",
                        btnNext: "#icon-templates .arrowv-right"});
                    temploaddisabled = true;
            }

            if ($this.attr('class').split(' ')[0] == "icon-twitter" && !twiloaddisabled) {
                $("#twicont").tweet({
                    username: uMain.tw,
                    avatar_size: 32,
                    count: 24,
                    loaddisableding_text: "<div id='tweloaddisabled'></div>"
                });
                twiloaddisabled = true;
            }
        }
    });

    $('.opinion-company + span').live('click', function() {
        if (!$('.op_block').find('#' + $(this).attr('class')).is(':visible')) {
            $('.op_block').find('div').hide();
            $('.op_block').find('#' + $(this).attr('class')).fadeIn(200);
            $('.opinion-person-img').hide().attr('src', uMain.base + '/pick/' + $(this).attr('class') + '.jpg');
            $('.opinion-person-img').bind('loaddisabled', function() {
                $(this).fadeIn(200);
            });
            $('.opinion-person-imgc').attr('src', uMain.base + '/pick/' + $(this).attr('class') + 'c.jpg')
        }

    });
    $('.opinion-company + span').eq(Math.floor(Math.random() * $('.opinion-person-list li').length + 1) - 1).trigger('click');

    //crossfade
    $('div.opinion-person-photo').hover(function() {
        var fade = $('> div', this);
        if (fade.is(':animated')) {
            fade.stop().fadeTo(250, 1);
        } else {
            fade.fadeIn(250);
        }
    }, function () {
        var fade = $('> div', this);
        if (fade.is(':animated')) {
            fade.stop().fadeTo(3000, 0);
        } else {
            fade.fadeOut(250);
        }
    });
//crossfade

//Selection info

//lng select
    $('#llink').bind('click', function(event) {
        event.stopPropagation();
        if ($('#lnglist').is(':visible')) {
            $('#lnglist').fadeOut(200);
        } else {
            $('#lnglist').fadeIn(200);
        }
    });
//lng select
    var cookie = [],position;
//cookie operation
//    $('#lnglist').find('li').bind('click', function() {
//        $.cookie("lng", $(this).attr('class'));
//        window.location.reloaddisabled();
//    });

    if ($.cookie('position') !== null) {
        $.each($.cookie('position').split(','), function() {
            $('#' + this).appendTo('#sortarea');
        });
    }

    if ($.cookie('fblock') === null) {
        $('#fblock').find('ul li').eq(0).trigger('click');
    } else {
        $('#fblock').find('ul li').eq($.cookie('fblock')).trigger('click');
    }

    if ($.cookie('sblock') === null) {
        $('#sblock').find('ul li').eq(0).trigger('click');
    } else {
        $('#sblock').find('ul li').eq($.cookie('sblock')).trigger('click');
    }

    if ($.cookie('hide') !== null) {
        cookie = $.cookie('hide').split(',');
        $.each(cookie, function() {
            $('#' + this).hide();
        });
//cookie operation

//reset button
        if ($('#manage-block').length > 0) {
            $('#manage-block').remove();
        }
        $('#content').prepend($('<div id="btn_r"></div>'));

//reset button
    }
//sort blocks
    if ($('#content .block:visible').length > 1) {
        $('#sortarea').sortable({
            cursor:'move',
            items:'.block',
            handle: '.block-header',
            start: function(u, ui) {
                ui.placeholder.width(ui.item.outerWidth());
                ui.placeholder.height(ui.item.outerHeight(true) - 2);
            },stop: function() {
            },update: function () {
                position = [];
                $('#content .block:visible').each(function() {
                    position.push($(this).attr('id'));

                });
                $.cookie('position', position, {
                    expires: 999
                });
            },
            hepler: 'clone',
            placeholder:'blSortHelper',
            tolerance:'intersect'
        });
        $('.block').find('.block-header').live("mouseover",
                                              function() {
                                                  $(this).css("cursor", "move")
                                              }).live("mouseout", function() {
            $(this).css("cursor", "default")
        });
    } else {
    }
    $('.block-close, .b-close').bind('click', function() {
        if ($(this).parents('.block').length > 0) {
            $clBlock = $(this).parents('.block');
        } else {
            $clBlock = $(this).parents('.block-manage');
        }
        $clBlock.fadeOut(200);
        cookie.push($clBlock.attr('id'));
        $.cookie('hide', cookie, {
            expires: 999
        });
        if ($('.block:visible').length == 2) {
            $('#wrap').sortable('disable');
            $('.block').find('.block-header').die("mouseover");
        }
        //reset button
        if ($('#btn_r').length === 0) {
            if ($('#manage-block').length > 0) {
                $('#manage-block').remove();
            }
            $('#content').prepend($('<div id="btn_r"></div>'));
        }
//reset button
    });

    $('#wrap').css('visibility', 'visible');
}
        );
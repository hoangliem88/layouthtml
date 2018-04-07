!function(t){t.fn.marquee=function(e){return this.each(function(){var a,r,n,i,s,o=t.extend({},t.fn.marquee.defaults,e),u=t(this),d=3,p="animation-play-state",l=!1,f=function(t,e,a){for(var r=["webkit","moz","MS","o",""],n=0;n<r.length;n++)r[n]||(e=e.toLowerCase()),t.addEventListener(r[n]+e,a,!1)},c=function(){u.timer=setTimeout(A,o.delayBeforeStart)},m={pause:function(){l&&o.allowCss3Support?a.css(p,"paused"):t.fn.pause&&a.pause(),u.data("runningStatus","paused"),u.trigger("paused")},resume:function(){l&&o.allowCss3Support?a.css(p,"running"):t.fn.resume&&a.resume(),u.data("runningStatus","resumed"),u.trigger("resumed")},toggle:function(){m["resumed"==u.data("runningStatus")?"pause":"resume"]()},destroy:function(){clearTimeout(u.timer),u.find("*").addBack().unbind(),u.html(u.find(".js-marquee:first").html())}};if("string"!=typeof e){var g;t.each(o,function(t,e){if(void 0!==(g=u.attr("data-"+t))){switch(g){case"true":g=!0;break;case"false":g=!1}o[t]=g}}),o.speed&&(o.duration=parseInt(u.width(),10)/o.speed*1e3),i="up"==o.direction||"down"==o.direction,o.gap=o.duplicated?parseInt(o.gap):0,u.wrapInner('<div class="js-marquee"></div>');var h=u.find(".js-marquee").css({"margin-right":o.gap,float:"left"});if(o.duplicated&&h.clone(!0).appendTo(u),u.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>'),a=u.find(".js-marquee-wrapper"),i){var v=u.height();a.removeAttr("style"),u.height(v),u.find(".js-marquee").css({float:"none","margin-bottom":o.gap,"margin-right":0}),o.duplicated&&u.find(".js-marquee:last").css({"margin-bottom":0});var y=u.find(".js-marquee:first").height()+o.gap;o.startVisible&&!o.duplicated?(o._completeDuration=(parseInt(y,10)+parseInt(v,10))/parseInt(v,10)*o.duration,o.duration=parseInt(y,10)/parseInt(v,10)*o.duration):o.duration=(parseInt(y,10)+parseInt(v,10))/parseInt(v,10)*o.duration}else s=u.find(".js-marquee:first").width()+o.gap,r=u.width(),o.startVisible&&!o.duplicated?(o._completeDuration=(parseInt(s,10)+parseInt(r,10))/parseInt(r,10)*o.duration,o.duration=parseInt(s,10)/parseInt(r,10)*o.duration):o.duration=(parseInt(s,10)+parseInt(r,10))/parseInt(r,10)*o.duration;if(o.duplicated&&(o.duration=o.duration/2),o.allowCss3Support){var I=document.body||document.createElement("div"),b="marqueeAnimation-"+Math.floor(1e7*Math.random()),x="Webkit Moz O ms Khtml".split(" "),w="animation",S="",q="";if(I.style.animation&&(q="@keyframes "+b+" ",l=!0),!1===l)for(var j=0;j<x.length;j++)if(void 0!==I.style[x[j]+"AnimationName"]){var C="-"+x[j].toLowerCase()+"-";w=C+w,p=C+p,q="@"+C+"keyframes "+b+" ",l=!0;break}l&&(S=b+" "+o.duration/1e3+"s "+o.delayBeforeStart/1e3+"s infinite "+o.css3easing,u.data("css3AnimationIsSupported",!0))}var V=function(){a.css("transform","translateY("+("up"==o.direction?v+"px":"-"+y+"px")+")")},k=function(){a.css("transform","translateX("+("left"==o.direction?r+"px":"-"+s+"px")+")")};o.duplicated?(i?o.startVisible?a.css("transform","translateY(0)"):a.css("transform","translateY("+("up"==o.direction?v+"px":"-"+(2*y-o.gap)+"px")+")"):o.startVisible?a.css("transform","translateX(0)"):a.css("transform","translateX("+("left"==o.direction?r+"px":"-"+(2*s-o.gap)+"px")+")"),o.startVisible||(d=1)):o.startVisible?d=2:i?V():k();var A=function(){if(o.duplicated&&(1===d?(o._originalDuration=o.duration,o.duration=i?"up"==o.direction?o.duration+v/(y/o.duration):2*o.duration:"left"==o.direction?o.duration+r/(s/o.duration):2*o.duration,S&&(S=b+" "+o.duration/1e3+"s "+o.delayBeforeStart/1e3+"s "+o.css3easing),d++):2===d&&(o.duration=o._originalDuration,S&&(b+="0",q=t.trim(q)+"0 ",S=b+" "+o.duration/1e3+"s 0s infinite "+o.css3easing),d++)),i?o.duplicated?(d>2&&a.css("transform","translateY("+("up"==o.direction?0:"-"+y+"px")+")"),n={transform:"translateY("+("up"==o.direction?"-"+y+"px":0)+")"}):o.startVisible?2===d?(S&&(S=b+" "+o.duration/1e3+"s "+o.delayBeforeStart/1e3+"s "+o.css3easing),n={transform:"translateY("+("up"==o.direction?"-"+y+"px":v+"px")+")"},d++):3===d&&(o.duration=o._completeDuration,S&&(b+="0",q=t.trim(q)+"0 ",S=b+" "+o.duration/1e3+"s 0s infinite "+o.css3easing),V()):(V(),n={transform:"translateY("+("up"==o.direction?"-"+a.height()+"px":v+"px")+")"}):o.duplicated?(d>2&&a.css("transform","translateX("+("left"==o.direction?0:"-"+s+"px")+")"),n={transform:"translateX("+("left"==o.direction?"-"+s+"px":0)+")"}):o.startVisible?2===d?(S&&(S=b+" "+o.duration/1e3+"s "+o.delayBeforeStart/1e3+"s "+o.css3easing),n={transform:"translateX("+("left"==o.direction?"-"+s+"px":r+"px")+")"},d++):3===d&&(o.duration=o._completeDuration,S&&(b+="0",q=t.trim(q)+"0 ",S=b+" "+o.duration/1e3+"s 0s infinite "+o.css3easing),k()):(k(),n={transform:"translateX("+("left"==o.direction?"-"+s+"px":r+"px")+")"}),u.trigger("beforeStarting"),l){a.css(w,S);var e=q+" { 100%  "+function(t){var e=[];for(var a in t)t.hasOwnProperty(a)&&e.push(a+":"+t[a]);return e.push(),"{"+e.join(",")+"}"}(n)+"}",p=a.find("style");0!==p.length?p.filter(":last").html(e):t("head").append("<style>"+e+"</style>"),f(a[0],"AnimationIteration",function(){u.trigger("finished")}),f(a[0],"AnimationEnd",function(){A(),u.trigger("finished")})}else a.animate(n,o.duration,o.easing,function(){u.trigger("finished"),o.pauseOnCycle?c():A()});u.data("runningStatus","resumed")};u.bind("pause",m.pause),u.bind("resume",m.resume),o.pauseOnHover&&(u.bind("mouseenter",m.pause),u.bind("mouseleave",m.resume)),l&&o.allowCss3Support?A():c()}else t.isFunction(m[e])&&(a||(a=u.find(".js-marquee-wrapper")),!0===u.data("css3AnimationIsSupported")&&(l=!0),m[e]())})},t.fn.marquee.defaults={allowCss3Support:!0,css3easing:"linear",easing:"linear",delayBeforeStart:1e3,direction:"left",duplicated:!1,duration:5e3,gap:20,pauseOnCycle:!1,pauseOnHover:!1,startVisible:!1}}(jQuery);
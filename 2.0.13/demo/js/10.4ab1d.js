(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{807:function(a){a.exports=JSON.parse('{"v":"5.7.1","fr":50,"ip":0,"op":10,"w":72,"h":72,"nm":"CheckBox_toSelected","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":2,"ty":4,"nm":"形状图层 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[36,36,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-11.163,0.597],[-4.526,8.56],[12.074,-8.209]],"c":false},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":3,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"形状 3","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.25],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":1,"s":[0],"e":[100]},{"t":9}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"修剪路径 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":1000,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"f-bg 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[36,36,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.25,0.25,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":1,"s":[120,120,100],"e":[100,100,100]},{"t":9}],"ix":6}},"ao":0,"shapes":[{"ty":"rc","d":1,"s":{"a":0,"k":[48,48],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":12,"ix":4},"nm":"矩形路径 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.164705887437,0.819607913494,0.505882382393,1],"ix":4},"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":1,"s":[0],"e":[100]},{"t":4}],"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false}],"ip":0,"op":1000,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"f-bg 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[36,36,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.25,0.25,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":1,"s":[100,100,100],"e":[100,100,100]},{"t":9}],"ix":6}},"ao":0,"shapes":[{"ty":"rc","d":1,"s":{"a":0,"k":[44,44],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":12,"ix":4},"nm":"矩形路径 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":15,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":3,"lj":3,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false}],"ip":0,"op":1000,"st":0,"bm":0}],"markers":[{"tm":50,"cm":"1","dr":0},{"tm":150,"cm":"2","dr":0}]}')},810:function(a,i,t){"use strict";t.r(i);var e=t(804),n=t.n(e),s=t(807),o={name:"ColorCheckboxSelect",props:{play:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},watch:{play:function(a){a&&this.replay()}},mounted:function(){var a=this;this.animation=n.a.loadAnimation({container:this.$refs.icon,renderer:"svg",loop:!1,autoplay:!1,animationData:s}),this.animation.goToAndStop(9,!0),this.animation.addEventListener("complete",(function(){a.$emit("complete")})),this.animation.addEventListener("start",(function(){a.$emit("start")}))},methods:{replay:function(){var a=this;this.$nextTick((function(){return a.animation.goToAndPlay(1,!0)}))}}},r=t(0),c=Object(r.a)(o,(function(){var a=this.$createElement;return(this._self._c||a)("span",{ref:"icon",class:["icon-unselect-to-select",this.disabled?"icon-unselect-to-select--disabled":""]})}),[],!1,null,null,null);i.default=c.exports}}]);
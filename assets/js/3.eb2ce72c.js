(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{311:function(t,a){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},312:function(t,a,e){var s=e(25),r="["+e(311)+"]",i=RegExp("^"+r+r+"*"),n=RegExp(r+r+"*$"),l=function(t){return function(a){var e=String(s(a));return 1&t&&(e=e.replace(i,"")),2&t&&(e=e.replace(n,"")),e}};t.exports={start:l(1),end:l(2),trim:l(3)}},313:function(t,a,e){"use strict";var s=e(2),r=e(312).trim;s({target:"String",proto:!0,forced:e(315)("trim")},{trim:function(){return r(this)}})},315:function(t,a,e){var s=e(4),r=e(311);t.exports=function(t){return s((function(){return!!r[t]()||"​᠎"!="​᠎"[t]()||r[t].name!==t}))}},334:function(t,a,e){},371:function(t,a,e){"use strict";var s=e(2),r=e(103),i=e(51),n=e(16),l=e(13),c=e(107),d=e(52),o=e(53)("splice"),p=Math.max,v=Math.min;s({target:"Array",proto:!0,forced:!o},{splice:function(t,a){var e,s,o,u,_,h,b=l(this),y=n(b.length),g=r(t,y),f=arguments.length;if(0===f?e=s=0:1===f?(e=0,s=y-g):(e=f-2,s=v(p(i(a),0),y-g)),y+e-s>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(o=c(b,s),u=0;u<s;u++)(_=g+u)in b&&d(o,u,b[_]);if(o.length=s,e<s){for(u=g;u<y-s;u++)h=u+e,(_=u+s)in b?b[h]=b[_]:delete b[h];for(u=y;u>y-s+e;u--)delete b[u-1]}else if(e>s)for(u=y-s;u>g;u--)h=u+e-1,(_=u+s-1)in b?b[h]=b[_]:delete b[h];for(u=0;u<e;u++)b[u+g]=arguments[u+2];return b.length=y-s+e,o}})},372:function(t,a,e){"use strict";e(334)},387:function(t,a,e){"use strict";e.r(a);e(176),e(177),e(98),e(169),e(313),e(178),e(170),e(70),e(50),e(371);var s={name:"ChartBuilder",data:function(){return{chartControls:{chartType:[{id:"",label:"Chart Type",type:"legend"},{id:"",label:"None",type:"button"},{id:"bar",label:"Bar",type:"button"},{id:"column",label:"Column",type:"button"},{id:"area",label:"Area",type:"button"},{id:"line",label:"Line",type:"button"},{id:"pie",label:"Pie",type:"button",disabled:"disabled"},{id:"donut",label:"Donut",type:"button",disabled:"disabled"},{id:"radar",label:"Radar",type:"button",disabled:"disabled"},{id:"polar",label:"Polar",type:"button",disabled:"disabled"}],datasets:[{id:"",label:"Datasets",type:"legend"},{id:"multiple",label:"Multiple",type:"button"}],heading:[{id:"",label:"Chart Heading",type:"legend"},{id:"show-heading",label:"Heading",type:"button"}],orientation:[{id:"",label:"Orientation",type:"legend"},{id:"reverse",label:"Reverse",type:"button"}],labels:[{id:"",label:"Labels",type:"legend"},{id:"show-labels",label:"Show Labels",type:"button"}],data:[{id:"",label:"Data",type:"legend"},{id:"hide-data",label:"Hide Data",type:"button"},{id:"show-data-on-hover",label:"Show Data on Hover",type:"button"}],reverseOrder:[{id:"",label:"Reverse Order",type:"legend"},{id:"reverse-data",label:"Reverse Data",type:"button"},{id:"reverse-datasets",label:"Reverse Datasets",type:"button"}],axes:[{id:"",label:"Axes",type:"legend"},{id:"show-primary-axis",label:"Primary Axis",type:"button"},{id:"show-data-axes",label:"Data Axes",type:"button"}],axes2:[{id:"",label:"Axes",type:"legend"},{id:"show-*-secondary-axes",label:"Secondary Axes",type:"range",min:"0",max:"10",step:"1"}],spacing:[{id:"",label:"Spacing",type:"legend"},{id:"data-spacing-*",label:"Data",type:"range",min:"0",max:"20",step:"1"},{id:"datasets-spacing-*",label:"Dataset",type:"range",min:"0",max:"20",step:"1"}]},userData:{chartType:[""],datasets:[],heading:[],orientation:[],labels:[],axes:[],data:[],reverseOrder:[],spacing:[]},helper:{"show-*-secondary-axes":0,"data-spacing-*":0,"dataset-spacing-*":0}}},computed:{isMultiple:function(){return this.userData.datasets.includes("multiple")},chartClass:function(){var t=!Array.isArray(this.userData.chartType)||this.userData.chartType.length<=0||""===this.userData.chartType[0]?"":"charts-css "+this.userData.chartType,a=this.userData.datasets?" "+this.userData.datasets.join(" "):"",e=this.userData.heading?" "+this.userData.heading.join(" "):"",s=this.userData.data?" "+this.userData.data.join(" "):"",r=this.userData.reverseOrder?" "+this.userData.reverseOrder.join(" "):"",i=this.userData.orientation?" "+this.userData.orientation.join(" "):"",n=this.userData.labels?" "+this.userData.labels.join(" "):"",l=this.userData.axes?" "+this.userData.axes.join(" "):"",c=this.userData.spacing.dataSpacing>0?" data-spacing-".concat(this.userData.spacing.dataSpacing):"",d=this.userData.spacing.datasetsSpacing>0?" datasets-spacing-".concat(this.userData.spacing.datasetsSpacing):"";return"".concat(t," ").concat(a," ").concat(e," ").concat(s," ").concat(r," ").concat(i," ").concat(n," ").concat(l," ").concat(c," ").concat(d).trim()}},watch:{helper:function(t,a){var e=this.userData[group].indexOf(control.id);-1===e?this.userData[group].push(control.id.replace("*","xxx")):this.userData[group].splice(e,1)}},methods:{toggleUserData:function(t,a){if("chartType"===t)return this.userData.chartType=[],void this.userData[t].push(a.id);if("button"===a.type)-1===(e=this.userData[t].indexOf(a.id))?this.userData[t].push(a.id):this.userData[t].splice(e,1);else if("range"===a.type){this.helper[a.id];var e=this.userData[t].indexOf(a.id)}}}},r=(e(372),e(49)),i=Object(r.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"chart-builder"},[e("form",{staticClass:"controls"},t._l(t.chartControls,(function(a,s){return e("fieldset",[t._l(a,(function(a){return["legend"===a.type?e("legend",[t._v("\n          "+t._s(a.label)+"\n        ")]):t._e(),t._v(" "),"range"===a.type?e("label",{attrs:{disabled:""}},[t._v("\n          "+t._s(a.label)+":\n          "),e("input",{attrs:{type:"range",disabled:"",min:a.min,max:a.max,step:a.step},domProps:{value:t.helper[a.id]},on:{click:function(e){return e.preventDefault(),t.toggleUserData(s,a)}}})]):t._e(),t._v(" "),"button"===a.type?e("button",{class:{pressed:t.userData[s].includes(a.id)},attrs:{disabled:a.disabled},on:{click:function(e){return e.preventDefault(),t.toggleUserData(s,a)}}},[t._v("\n          "+t._s(a.label)+"\n        ")]):t._e()]}))],2)})),0),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"chart-code"},[t._v('\n    <table class="'),e("strong",[t._v(t._s(t.chartClass))]),t._v('">\n    '),e("br"),t._v("\n    ...\n    "),e("br"),t._v("\n    </table>\n  ")]),t._v(" "),t.isMultiple?e("table",{class:t.chartClass},[e("caption",[t._v(" Multiple Dataset Table ")]),t._v(" "),t._m(0),t._v(" "),t._m(1)]):t._e(),t._v(" "),t.isMultiple?t._e():e("table",{class:t.chartClass},[e("caption",[t._v(" Single Dataset Table ")]),t._v(" "),t._m(2),t._v(" "),t._m(3)])])}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v(" Year ")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(" Progress 1 ")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(" Progress 2 ")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(" Progress 3 ")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(" Progress 4 ")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(" Progress 5 ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tbody",[e("tr",[e("th",{attrs:{scope:"row"}},[t._v(" 2000 ")]),t._v(" "),e("td",{staticStyle:{"--start":"0.4","--size":"0.2"}},[e("span",{staticClass:"data"},[t._v(" 20 ")])]),t._v(" "),e("td",{staticStyle:{"--start":"0.3","--size":"0.5"}},[e("span",{staticClass:"data"},[t._v(" 50 ")])]),t._v(" "),e("td",{staticStyle:{"--start":"0.2","--size":"1.0"}},[e("span",{staticClass:"data"},[t._v(" 100 ")])]),t._v(" "),e("td",{staticStyle:{"--start":"0.1","--size":"0.7"}},[e("span",{staticClass:"data"},[t._v(" 70 ")])]),t._v(" "),e("td",{staticStyle:{"--start":"0.0","--size":"0.4"}},[e("span",{staticClass:"data"},[t._v(" 40 ")])])]),t._v(" "),e("tr",[e("th",{attrs:{scope:"row"}},[t._v(" 2010 ")]),t._v(" "),e("td",{staticStyle:{"--start":"0.2","--size":"0.9"}},[e("span",{staticClass:"data"},[t._v(" 90 ")])]),t._v(" "),e("td",{staticStyle:{"--start":"0.5","--size":"0.6"}},[e("span",{staticClass:"data"},[t._v(" 60 ")])]),t._v(" "),e("td",{staticStyle:{"--start":"1.0","--size":"0.4"}},[e("span",{staticClass:"data"},[t._v(" 40 ")])]),t._v(" "),e("td",{staticStyle:{"--start":"0.7","--size":"0.3"}},[e("span",{staticClass:"data"},[t._v(" 30 ")])]),t._v(" "),e("td",{staticStyle:{"--start":"0.4","--size":"0.2"}},[e("span",{staticClass:"data"},[t._v(" 20 ")])])]),t._v(" "),e("tr",[e("th",{attrs:{scope:"row"}},[t._v(" 2020 ")]),t._v(" "),e("td",{staticStyle:{"--start":"0.9","--size":"0.2"}},[e("span",{staticClass:"data"},[t._v(" 20 ")])]),t._v(" "),e("td",{staticStyle:{"--start":"0.6","--size":"0.4"}},[e("span",{staticClass:"data"},[t._v(" 40 ")])]),t._v(" "),e("td",{staticStyle:{"--start":"0.4","--size":"0.6"}},[e("span",{staticClass:"data"},[t._v(" 60 ")])]),t._v(" "),e("td",{staticStyle:{"--start":"0.3","--size":"0.1"}},[e("span",{staticClass:"data"},[t._v(" 10 ")])]),t._v(" "),e("td",{staticStyle:{"--start":"0.2","--size":"0.4"}},[e("span",{staticClass:"data"},[t._v(" 40 ")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[this._v(" Month ")]),this._v(" "),a("th",{attrs:{scope:"col"}},[this._v(" Progress ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tbody",[e("tr",[e("th",{attrs:{scope:"row"}},[t._v(" Jan ")]),t._v(" "),e("td",{staticStyle:{"--start":"0.0","--size":"0.3"}},[e("span",{staticClass:"data"},[t._v(" 30 ")])])]),t._v(" "),e("tr",[e("th",{attrs:{scope:"row"}},[t._v(" Feb ")]),t._v(" "),e("td",{staticStyle:{"--start":"0.3","--size":"0.5"}},[e("span",{staticClass:"data"},[t._v(" 50 ")])])]),t._v(" "),e("tr",[e("th",{attrs:{scope:"row"}},[t._v(" Mar ")]),t._v(" "),e("td",{staticStyle:{"--start":"0.5","--size":"0.8"}},[e("span",{staticClass:"data"},[t._v(" 80 ")])])]),t._v(" "),e("tr",[e("th",{attrs:{scope:"row"}},[t._v(" Apr ")]),t._v(" "),e("td",{staticStyle:{"--start":"0.8","--size":"1.0"}},[e("span",{staticClass:"data"},[t._v(" 100 ")])])]),t._v(" "),e("tr",[e("th",{attrs:{scope:"row"}},[t._v(" May ")]),t._v(" "),e("td",{staticStyle:{"--start":"1.0","--size":"0.65"}},[e("span",{staticClass:"data"},[t._v(" 65 ")])])]),t._v(" "),e("tr",[e("th",{attrs:{scope:"row"}},[t._v(" Jun ")]),t._v(" "),e("td",{staticStyle:{"--start":"0.65","--size":"0.45"}},[e("span",{staticClass:"data"},[t._v(" 45 ")])])]),t._v(" "),e("tr",[e("th",{attrs:{scope:"row"}},[t._v(" Jul ")]),t._v(" "),e("td",{staticStyle:{"--start":"0.45","--size":"0.15"}},[e("span",{staticClass:"data"},[t._v(" 15 ")])])]),t._v(" "),e("tr",[e("th",{attrs:{scope:"row"}},[t._v(" Aug ")]),t._v(" "),e("td",{staticStyle:{"--start":"0.15","--size":"0.32"}},[e("span",{staticClass:"data"},[t._v(" 32 ")])])]),t._v(" "),e("tr",[e("th",{attrs:{scope:"row"}},[t._v(" Sep ")]),t._v(" "),e("td",{staticStyle:{"--start":"0.32","--size":"0.6"}},[e("span",{staticClass:"data"},[t._v(" 60 ")])])]),t._v(" "),e("tr",[e("th",{attrs:{scope:"row"}},[t._v(" Oct ")]),t._v(" "),e("td",{staticStyle:{"--start":"0.6","--size":"0.9"}},[e("span",{staticClass:"data"},[t._v(" 90 ")])])]),t._v(" "),e("tr",[e("th",{attrs:{scope:"row"}},[t._v(" Nov ")]),t._v(" "),e("td",{staticStyle:{"--start":"0.9","--size":"0.55"}},[e("span",{staticClass:"data"},[t._v(" 55 ")])])]),t._v(" "),e("tr",[e("th",{attrs:{scope:"row"}},[t._v(" Dec ")]),t._v(" "),e("td",{staticStyle:{"--start":"0.55","--size":"0.4"}},[e("span",{staticClass:"data"},[t._v(" 40 ")])])])])}],!1,null,null,null);a.default=i.exports}}]);
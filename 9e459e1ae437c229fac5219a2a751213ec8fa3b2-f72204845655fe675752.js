(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/GqU":function(t,r,e){var n=e("RK3t"),o=e("HYAF");t.exports=function(t){return n(o(t))}},"/b8u":function(t,r,e){var n=e("STAE");t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},"0BK2":function(t,r){t.exports={}},"0Dky":function(t,r){t.exports=function(t){try{return!!t()}catch(r){return!0}}},"0GbY":function(t,r,e){var n=e("Qo9l"),o=e("2oRo"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,r){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][r]||o[t]&&o[t][r]}},"0eef":function(t,r,e){"use strict";var n={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!n.call({1:2},1);r.f=i?function(t){var r=o(this,t);return!!r&&r.enumerable}:n},"2oRo":function(t,r,e){(function(r){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof r&&r)||Function("return this")()}).call(this,e("yLpj"))},"33Wh":function(t,r,e){var n=e("yoRg"),o=e("eDl+");t.exports=Object.keys||function(t){return n(t,o)}},"6JNq":function(t,r,e){var n=e("UTVS"),o=e("Vu81"),i=e("Bs8V"),u=e("m/L8");t.exports=function(t,r){for(var e=o(r),c=u.f,a=i.f,f=0;f<e.length;f++){var l=e[f];n(t,l)||c(t,l,a(r,l))}}},"6LWA":function(t,r,e){var n=e("xrYK");t.exports=Array.isArray||function(t){return"Array"==n(t)}},"93I0":function(t,r,e){var n=e("VpIT"),o=e("kOOl"),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},A2ZE:function(t,r,e){var n=e("HAuM");t.exports=function(t,r,e){if(n(t),void 0===r)return t;switch(e){case 0:return function(){return t.call(r)};case 1:return function(e){return t.call(r,e)};case 2:return function(e,n){return t.call(r,e,n)};case 3:return function(e,n,o){return t.call(r,e,n,o)}}return function(){return t.apply(r,arguments)}}},Bs8V:function(t,r,e){var n=e("g6v/"),o=e("0eef"),i=e("XGwC"),u=e("/GqU"),c=e("wE6v"),a=e("UTVS"),f=e("DPsx"),l=Object.getOwnPropertyDescriptor;r.f=n?l:function(t,r){if(t=u(t),r=c(r,!0),f)try{return l(t,r)}catch(e){}if(a(t,r))return i(!o.f.call(t,r),t[r])}},DPsx:function(t,r,e){var n=e("g6v/"),o=e("0Dky"),i=e("zBJ4");t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"G+Rx":function(t,r,e){var n=e("0GbY");t.exports=n("document","documentElement")},HAuM:function(t,r){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},HYAF:function(t,r){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},"I+eb":function(t,r,e){var n=e("2oRo"),o=e("Bs8V").f,i=e("kRJp"),u=e("busE"),c=e("zk60"),a=e("6JNq"),f=e("lMq5");t.exports=function(t,r){var e,l,s,p,d,v=t.target,b=t.global,y=t.stat;if(e=b?n:y?n[v]||c(v,{}):(n[v]||{}).prototype)for(l in r){if(p=r[l],s=t.noTargetGet?(d=o(e,l))&&d.value:e[l],!f(b?l:v+(y?".":"#")+l,t.forced)&&void 0!==s){if(typeof p==typeof s)continue;a(p,s)}(t.sham||s&&s.sham)&&i(p,"sham",!0),u(e,l,p,t)}}},I8vh:function(t,r,e){var n=e("ppGB"),o=Math.max,i=Math.min;t.exports=function(t,r){var e=n(t);return e<0?o(e+r,0):i(e,r)}},JBy8:function(t,r,e){var n=e("yoRg"),o=e("eDl+").concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},"N+g0":function(t,r,e){var n=e("g6v/"),o=e("m/L8"),i=e("glrk"),u=e("33Wh");t.exports=n?Object.defineProperties:function(t,r){i(t);for(var e,n=u(r),c=n.length,a=0;c>a;)o.f(t,e=n[a++],r[e]);return t}},Qo9l:function(t,r,e){var n=e("2oRo");t.exports=n},RK3t:function(t,r,e){var n=e("0Dky"),o=e("xrYK"),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},RNIs:function(t,r,e){var n=e("tiKp"),o=e("fHMY"),i=e("m/L8"),u=n("unscopables"),c=Array.prototype;null==c[u]&&i.f(c,u,{configurable:!0,value:o(null)}),t.exports=function(t){c[u][t]=!0}},STAE:function(t,r,e){var n=e("0Dky");t.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},TWQb:function(t,r,e){var n=e("/GqU"),o=e("UMSQ"),i=e("I8vh"),u=function(t){return function(r,e,u){var c,a=n(r),f=o(a.length),l=i(u,f);if(t&&e!=e){for(;f>l;)if((c=a[l++])!=c)return!0}else for(;f>l;l++)if((t||l in a)&&a[l]===e)return t||l||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},UMSQ:function(t,r,e){var n=e("ppGB"),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},UTVS:function(t,r){var e={}.hasOwnProperty;t.exports=function(t,r){return e.call(t,r)}},VpIT:function(t,r,e){var n=e("xDBR"),o=e("xs3f");(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.6.5",mode:n?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},Vu81:function(t,r,e){var n=e("0GbY"),o=e("JBy8"),i=e("dBg+"),u=e("glrk");t.exports=n("Reflect","ownKeys")||function(t){var r=o.f(u(t)),e=i.f;return e?r.concat(e(t)):r}},XGwC:function(t,r){t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},XbcX:function(t,r,e){"use strict";var n=e("I+eb"),o=e("or9q"),i=e("ewvW"),u=e("UMSQ"),c=e("HAuM"),a=e("ZfDv");n({target:"Array",proto:!0},{flatMap:function(t){var r,e=i(this),n=u(e.length);return c(t),(r=a(e,0)).length=o(r,e,e,n,0,1,t,arguments.length>1?arguments[1]:void 0),r}})},ZfDv:function(t,r,e){var n=e("hh1v"),o=e("6LWA"),i=e("tiKp")("species");t.exports=function(t,r){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?n(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===r?0:r)}},afO8:function(t,r,e){var n,o,i,u=e("f5p1"),c=e("2oRo"),a=e("hh1v"),f=e("kRJp"),l=e("UTVS"),s=e("93I0"),p=e("0BK2"),d=c.WeakMap;if(u){var v=new d,b=v.get,y=v.has,g=v.set;n=function(t,r){return g.call(v,t,r),r},o=function(t){return b.call(v,t)||{}},i=function(t){return y.call(v,t)}}else{var h=s("state");p[h]=!0,n=function(t,r){return f(t,h,r),r},o=function(t){return l(t,h)?t[h]:{}},i=function(t){return l(t,h)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(r){var e;if(!a(r)||(e=o(r)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},busE:function(t,r,e){var n=e("2oRo"),o=e("kRJp"),i=e("UTVS"),u=e("zk60"),c=e("iSVu"),a=e("afO8"),f=a.get,l=a.enforce,s=String(String).split("String");(t.exports=function(t,r,e,c){var a=!!c&&!!c.unsafe,f=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof e&&("string"!=typeof r||i(e,"name")||o(e,"name",r),l(e).source=s.join("string"==typeof r?r:"")),t!==n?(a?!p&&t[r]&&(f=!0):delete t[r],f?t[r]=e:o(t,r,e)):f?t[r]=e:u(r,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||c(this)}))},c9m3:function(t,r,e){e("RNIs")("flatMap")},"dBg+":function(t,r){r.f=Object.getOwnPropertySymbols},"eDl+":function(t,r){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},ewvW:function(t,r,e){var n=e("HYAF");t.exports=function(t){return Object(n(t))}},f5p1:function(t,r,e){var n=e("2oRo"),o=e("iSVu"),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},fHMY:function(t,r,e){var n,o=e("glrk"),i=e("N+g0"),u=e("eDl+"),c=e("0BK2"),a=e("G+Rx"),f=e("zBJ4"),l=e("93I0"),s=l("IE_PROTO"),p=function(){},d=function(t){return"<script>"+t+"<\/script>"},v=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(o){}var t,r;v=n?function(t){t.write(d("")),t.close();var r=t.parentWindow.Object;return t=null,r}(n):((r=f("iframe")).style.display="none",a.appendChild(r),r.src=String("javascript:"),(t=r.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F);for(var e=u.length;e--;)delete v.prototype[u[e]];return v()};c[s]=!0,t.exports=Object.create||function(t,r){var e;return null!==t?(p.prototype=o(t),e=new p,p.prototype=null,e[s]=t):e=v(),void 0===r?e:i(e,r)}},"g6v/":function(t,r,e){var n=e("0Dky");t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},glrk:function(t,r,e){var n=e("hh1v");t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},hh1v:function(t,r){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},iSVu:function(t,r,e){var n=e("xs3f"),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},kOOl:function(t,r){var e=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+n).toString(36)}},kRJp:function(t,r,e){var n=e("g6v/"),o=e("m/L8"),i=e("XGwC");t.exports=n?function(t,r,e){return o.f(t,r,i(1,e))}:function(t,r,e){return t[r]=e,t}},lMq5:function(t,r,e){var n=e("0Dky"),o=/#|\.prototype\./,i=function(t,r){var e=c[u(t)];return e==f||e!=a&&("function"==typeof r?n(r):!!r)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},"m/L8":function(t,r,e){var n=e("g6v/"),o=e("DPsx"),i=e("glrk"),u=e("wE6v"),c=Object.defineProperty;r.f=n?c:function(t,r,e){if(i(t),r=u(r,!0),i(e),o)try{return c(t,r,e)}catch(n){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},or9q:function(t,r,e){"use strict";var n=e("6LWA"),o=e("UMSQ"),i=e("A2ZE"),u=function(t,r,e,c,a,f,l,s){for(var p,d=a,v=0,b=!!l&&i(l,s,3);v<c;){if(v in e){if(p=b?b(e[v],v,r):e[v],f>0&&n(p))d=u(t,r,p,o(p.length),d,f-1)-1;else{if(d>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[d]=p}d++}v++}return d};t.exports=u},ppGB:function(t,r){var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:e)(t)}},tiKp:function(t,r,e){var n=e("2oRo"),o=e("VpIT"),i=e("UTVS"),u=e("kOOl"),c=e("STAE"),a=e("/b8u"),f=o("wks"),l=n.Symbol,s=a?l:l&&l.withoutSetter||u;t.exports=function(t){return i(f,t)||(c&&i(l,t)?f[t]=l[t]:f[t]=s("Symbol."+t)),f[t]}},wE6v:function(t,r,e){var n=e("hh1v");t.exports=function(t,r){if(!n(t))return t;var e,o;if(r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!n(o=e.call(t)))return o;if(!r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},xDBR:function(t,r){t.exports=!1},xrYK:function(t,r){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},xs3f:function(t,r,e){var n=e("2oRo"),o=e("zk60"),i=n["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},yoRg:function(t,r,e){var n=e("UTVS"),o=e("/GqU"),i=e("TWQb").indexOf,u=e("0BK2");t.exports=function(t,r){var e,c=o(t),a=0,f=[];for(e in c)!n(u,e)&&n(c,e)&&f.push(e);for(;r.length>a;)n(c,e=r[a++])&&(~i(f,e)||f.push(e));return f}},z1h2:function(t,r,e){"use strict";var n=e("rePB"),o=e("q1tI"),i=e("2A+t"),u=e("izhR"),c=e("xEQ+"),a=e.n(c),f=e("Wbzz"),l=e("YwZP"),s=e("4XhP"),p=e("tW5L"),d=e("/xXG"),v=(e("XbcX"),e("c9m3"),e("KQm4")),b=e("Al62");function y(t,r){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,r){if(!t)return;if("string"==typeof t)return g(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return g(t,r)}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(e=t[Symbol.iterator]()).next.bind(e)}function g(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var h=e("d+M2");function x(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}r.a=function(t){var r=Object(p.d)(),e=r.locale,c=r.t,g=r.DEFAULT_LOCALE,m=Object(f.useStaticQuery)("955314892").allMdx,O=t.children,j=t.pageContext,w=t.uri,S=j.pagePath,P=j.frontmatter,k=P.title,A=P.description,E=P.keywords,T=P.featuredImage,D=P.status,R=P.hideLanguageSelector,M=P.hideBreadcrumbs,I=S.replace(/^\/|\/$/g,"").split("/").slice(1),B=I.join("/"),L=function(t,r,e,n,o){void 0===t&&(t=[]),void 0===e&&(e="en"),void 0===n&&(n="en");var i=function(t,e){return t.filter((function(t){var n=t.node;return-1!==n.fileAbsolutePath.indexOf("/"+e+"/"+r+"/")&&-1===n.fileAbsolutePath.indexOf("/"+e+"/"+r+"/index.")})).flatMap((function(t){var r=t.node,n=r.headings,o=r.frontmatter,i=r.fileAbsolutePath,u=i.slice(i.indexOf("/"+e+"/"),i.length).replace(/(.mdx|index.mdx|.md)$/gm,"").replace(/\/$/,""),c=u.replace(/^\/([\w]{2})\//,"/"),a=u.split("/").slice(-1)[0];return{title:o.title||(n.length>0?n[0].value:null)||a,slug:u,rawSlug:c,slugPart:a,order:o.order}}))},u=i(t,e),c=e!==n?i(t,n):[],a=Object(v.a)(c),f=c.length<=0?u:u.map((function(t){var r=c.find((function(r,e){var n=r.rawSlug===t.rawSlug;return n&&a.splice(e,1),n}));return null!=r?r:t})).concat(a),l=r?[{part:r,title:Object(b.h)(r.replace(/-|_|\./g," ")),url:"/"+n+"/"+r}]:[];return{sidenavData:f.reduce((function(t,r){for(var e,n=r.title,i=r.slug,u=r.rawSlug,c=(r.slugPart,r.order),a=u.split("/"),f=t.items,s=function(){var t=e.value,r=f&&f.find((function(r){return r.slugPart===t}));r?r.items||(r.items=[]):(r={slugPart:t,title:Object(b.h)(t.replace(/-|_|\./g," ")),items:[]},f.push(r)),f=r.items.sort((function(t,r){return null===t.order&&null!==r.order?1:null!==t.order&&null===r.order?-1:null===t.order&&null===r.order||t.order===r.order?t.title===r.title?0:t.title.localeCompare(r.title):t.order<r.order?-1:t.order>r.order?1:0}))},p=y(a.slice(1,-1));!(e=p()).done;)s();var d=a.length-1,v=f.find((function(t){return t.slugPart===a[d]}));return v?(v.url=i,v.title=n,v.order=c,o.includes(v.slugPart)&&l.push({part:v.slugPart,title:v.title,url:i})):(f.push({slugPart:a[d],url:i,items:[],title:n,order:c}),o.includes(a[d])&&l.push({part:a[d],title:n,url:i}),f.sort((function(t,r){return null===t.order&&null!==r.order?1:null!==t.order&&null===r.order?-1:null===t.order&&null===r.order||t.order===r.order?t.title===r.title?0:t.title.localeCompare(r.title):t.order<r.order?-1:t.order>r.order?1:0}))),t}),{items:[]}),breadcrumbData:l}}(m.edges,I[0],g,e,I),V=L.sidenavData,G=L.breadcrumbData,U=m.edges.filter((function(t){var r=t.node;return Object(b.c)(r).replace(/^\/|\/$/g,"").split("/").slice(1).join("/")===B&&Object(b.g)(r.fileAbsolutePath)!==e})).map((function(t){var r=t.node;return{value:Object(b.c)(r),label:c("Language",null,null,Object(b.g)(r.fileAbsolutePath))}})),W="object"==typeof D?function(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?x(Object(e),!0).forEach((function(r){Object(n.a)(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):x(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}({children:D.text},D):{children:D},_=Object(l.useLocation)().pathname.split("/")[2],z=k||function(){var t=o.Children.toArray(O).find((function(t){return"h1"===t.props.mdxType}));if(void 0!==t)return t.props.children}()||w.split("/").pop(),C=void 0!==_&&""!==_,J=j.frontmatter&&!j.frontmatter.hideSidenav&&C,K=C&&!R,Y=!M||C&&!R,q={title:z,description:A,keywords:E,featuredImage:T},F=K?234:0;return J&&(F+=256),Object(i.c)(o.Fragment,null,J&&Object(i.c)(u.f,{sx:{width:"256px",display:["none","none","initial"]}},Object(i.c)(a.a,{boundaryElement:".content-boundary",dontUpdateHolderHeightWhenSticky:!0,style:{position:"relative"},hideOnBoundaryHit:!1,sx:{display:["none","none","initial"]}},Object(i.c)(s.g,{data:V,currentPath:S}))),Object(i.c)(u.f,{as:"article",sx:{width:["100%","100%","calc(100% - "+F+"px)"],mt:C?[4,4,"59px"]:0,pl:C?[4,4,"64px"]:0,pr:C?[4,4,0]:0,pb:4}},Object(i.c)(h.c,q),D&&Object(i.c)(u.f,{sx:{marginTop:C?2:0}},Object(i.c)(d.l,Object.assign({sticky:!0},W,{sx:{width:"100%"}}))),Y&&Object(i.c)(u.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:C?0:[3,3,0]}},Object(i.c)(s.a,{data:G,pathDirs:I})),Object(i.c)(u.f,{sx:{display:["block","block","none"]}},K&&Object(i.c)(p.b,{data:U,pagePath:S})),Object(i.c)(u.f,null,O)),Object(i.c)(u.f,{sx:{display:["none","none","block"]}},K&&Object(i.c)(p.b,{data:U,pagePath:S})),Object(i.c)(s.e,{sidenavData:V}))}},zBJ4:function(t,r,e){var n=e("2oRo"),o=e("hh1v"),i=n.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},zk60:function(t,r,e){var n=e("2oRo"),o=e("kRJp");t.exports=function(t,r){try{o(n,t,r)}catch(e){n[t]=r}return r}}}]);
//# sourceMappingURL=9e459e1ae437c229fac5219a2a751213ec8fa3b2-f72204845655fe675752.js.map
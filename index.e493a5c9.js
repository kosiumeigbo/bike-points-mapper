let t,e;function i(t){return t&&t.__esModule?t.default:t}/*!
 * Chart.js v4.4.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 *//*!
 * Chart.js v4.4.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 *//*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function n(t){return t+.5|0}const o=(t,e,i)=>Math.max(Math.min(t,i),e);function s(t){return o(n(2.55*t),0,255)}function a(t){return o(n(255*t),0,255)}function r(t){return o(n(t/2.55)/100,0,1)}function h(t){return o(n(100*t),0,100)}const l={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},c=[..."0123456789ABCDEF"],d=t=>c[15&t],u=t=>c[(240&t)>>4]+c[15&t],p=t=>(240&t)>>4==(15&t),f=t=>p(t.r)&&p(t.g)&&p(t.b)&&p(t.a),m=(t,e)=>t<255?e(t):"",g=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function _(t,e,i){let n=e*Math.min(i,1-i),o=(e,o=(e+t/30)%12)=>i-n*Math.max(Math.min(o-3,9-o,1),-1);return[o(0),o(8),o(4)]}function v(t,e,i){let n=(n,o=(n+t/60)%6)=>i-i*e*Math.max(Math.min(o,4-o,1),0);return[n(5),n(3),n(1)]}function y(t,e,i){let n;let o=_(t,1,.5);for(e+i>1&&(n=1/(e+i),e*=n,i*=n),n=0;n<3;n++)o[n]*=1-e-i,o[n]+=e;return o}function x(t){let e,i,n;let o=t.r/255,s=t.g/255,a=t.b/255,r=Math.max(o,s,a),h=Math.min(o,s,a),l=(r+h)/2;return r!==h&&(n=r-h,i=l>.5?n/(2-r-h):n/(r+h),e=60*(e=o===r?(s-a)/n+(s<a?6:0):s===r?(a-o)/n+2:(o-s)/n+4)+.5),[0|e,i||0,l]}function b(t,e,i,n){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,i,n)).map(a)}function w(t){return(t%360+360)%360}const M={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},P={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"},k=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,T=t=>t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055,S=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function C(t,e,i){if(t){let n=x(t);n[e]=Math.max(0,Math.min(n[e]+n[e]*i,0===e?360:1)),n=b(_,n,void 0,void 0),t.r=n[0],t.g=n[1],t.b=n[2]}}function E(t,e){return t?Object.assign(e||{},t):t}function O(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=a(t[3]))):(e=E(t,{r:0,g:0,b:0,a:1})).a=a(e.a),e}class z{constructor(e){let i;if(e instanceof z)return e;let n=typeof e;if("object"===n)i=O(e);else if("string"===n){var r,h;h=e.length,"#"===e[0]&&(4===h||5===h?r={r:255&17*l[e[1]],g:255&17*l[e[2]],b:255&17*l[e[3]],a:5===h?17*l[e[4]]:255}:(7===h||9===h)&&(r={r:l[e[1]]<<4|l[e[2]],g:l[e[3]]<<4|l[e[4]],b:l[e[5]]<<4|l[e[6]],a:9===h?l[e[7]]<<4|l[e[8]]:255})),i=r||function(e){t||((t=function(){let t,e,i,n,o;let s={},a=Object.keys(P),r=Object.keys(M);for(t=0;t<a.length;t++){for(e=0,n=o=a[t];e<r.length;e++)i=r[e],o=o.replace(i,M[i]);i=parseInt(P[n],16),s[o]=[i>>16&255,i>>8&255,255&i]}return s}()).transparent=[0,0,0,0]);let i=t[e.toLowerCase()];return i&&{r:i[0],g:i[1],b:i[2],a:4===i.length?i[3]:255}}(e)||("r"===e.charAt(0)?function(t){let e,i,n;let a=k.exec(t),r=255;if(a){if(a[7]!==e){let t=+a[7];r=a[8]?s(t):o(255*t,0,255)}return e=+a[1],i=+a[3],n=+a[5],{r:e=255&(a[2]?s(e):o(e,0,255)),g:i=255&(a[4]?s(i):o(i,0,255)),b:n=255&(a[6]?s(n):o(n,0,255)),a:r}}}(e):function(t){let e;let i=g.exec(t),n=255;if(!i)return;i[5]!==e&&(n=i[6]?s(+i[5]):a(+i[5]));let o=w(+i[2]),r=+i[3]/100,h=+i[4]/100;return{r:(e="hwb"===i[1]?b(y,o,r,h):"hsv"===i[1]?b(v,o,r,h):b(_,o,r,h))[0],g:e[1],b:e[2],a:n}}(e))}this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=E(this._rgb);return t&&(t.a=r(t.a)),t}set rgb(t){this._rgb=O(t)}rgbString(){var t;return this._valid?(t=this._rgb)&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${r(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`):void 0}hexString(){var t,e;return this._valid?(e=f(t=this._rgb)?d:u,t?"#"+e(t.r)+e(t.g)+e(t.b)+m(t.a,e):void 0):void 0}hslString(){return this._valid?function(t){if(!t)return;let e=x(t),i=e[0],n=h(e[1]),o=h(e[2]);return t.a<255?`hsla(${i}, ${n}%, ${o}%, ${r(t.a)})`:`hsl(${i}, ${n}%, ${o}%)`}(this._rgb):void 0}mix(t,e){if(t){let i;let n=this.rgb,o=t.rgb,s=e===i?.5:e,a=2*s-1,r=n.a-o.a,h=((a*r==-1?a:(a+r)/(1+a*r))+1)/2;i=1-h,n.r=255&h*n.r+i*o.r+.5,n.g=255&h*n.g+i*o.g+.5,n.b=255&h*n.b+i*o.b+.5,n.a=s*n.a+(1-s)*o.a,this.rgb=n}return this}interpolate(t,e){return t&&(this._rgb=function(t,e,i){let n=S(r(t.r)),o=S(r(t.g)),s=S(r(t.b));return{r:a(T(n+i*(S(r(e.r))-n))),g:a(T(o+i*(S(r(e.g))-o))),b:a(T(s+i*(S(r(e.b))-s))),a:t.a+i*(e.a-t.a)}}(this._rgb,t._rgb,e)),this}clone(){return new z(this.rgb)}alpha(t){return this._rgb.a=a(t),this}clearer(t){let e=this._rgb;return e.a*=1-t,this}greyscale(){let t=this._rgb,e=n(.3*t.r+.59*t.g+.11*t.b);return t.r=t.g=t.b=e,this}opaquer(t){let e=this._rgb;return e.a*=1+t,this}negate(){let t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return C(this._rgb,2,t),this}darken(t){return C(this._rgb,2,-t),this}saturate(t){return C(this._rgb,1,t),this}desaturate(t){return C(this._rgb,1,-t),this}rotate(t){var e,i;return(i=x(e=this._rgb))[0]=w(i[0]+t),i=b(_,i,void 0,void 0),e.r=i[0],e.g=i[1],e.b=i[2],this}}/**
 * @namespace Chart.helpers
 *//**
 * An empty function that can be used, for example, for optional callback.
 */function A(){/* noop */}/**
 * Returns a unique id, sequentially generated from a global variable.
 */const D=(e=0,()=>e++);/**
 * Returns true if `value` is neither null nor undefined, else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */function I(t){return null==t}/**
 * Returns true if `value` is an array (including typed arrays), else returns false.
 * @param value - The value to test.
 * @function
 */function R(t){if(Array.isArray&&Array.isArray(t))return!0;let e=Object.prototype.toString.call(t);return"[object"===e.slice(0,7)&&"Array]"===e.slice(-6)}/**
 * Returns true if `value` is an object (excluding null), else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */function B(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)}/**
 * Returns true if `value` is a finite number, else returns false
 * @param value  - The value to test.
 */function N(t){return("number"==typeof t||t instanceof Number)&&isFinite(+t)}/**
 * Returns `value` if finite, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is not finite.
 */function F(t,e){return N(t)?t:e}/**
 * Returns `value` if defined, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is undefined.
 */function Z(t,e){return void 0===t?e:t}const j=(t,e)=>"string"==typeof t&&t.endsWith("%")?parseFloat(t)/100:+t/e,W=(t,e)=>"string"==typeof t&&t.endsWith("%")?parseFloat(t)/100*e:+t;/**
 * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
 * value returned by `fn`. If `fn` is not a function, this method returns undefined.
 * @param fn - The function to call.
 * @param args - The arguments with which `fn` should be called.
 * @param [thisArg] - The value of `this` provided for the call to `fn`.
 */function V(t,e,i){if(t&&"function"==typeof t.call)return t.apply(i,e)}function H(t,e,i,n){let o,s,a;if(R(t)){if(s=t.length,n)for(o=s-1;o>=0;o--)e.call(i,t[o],o);else for(o=0;o<s;o++)e.call(i,t[o],o)}else if(B(t))for(o=0,s=(a=Object.keys(t)).length;o<s;o++)e.call(i,t[a[o]],a[o])}/**
 * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
 * @param a0 - The array to compare
 * @param a1 - The array to compare
 * @private
 */function U(t,e){let i,n,o,s;if(!t||!e||t.length!==e.length)return!1;for(i=0,n=t.length;i<n;++i)if(o=t[i],s=e[i],o.datasetIndex!==s.datasetIndex||o.index!==s.index)return!1;return!0}/**
 * Returns a deep copy of `source` without keeping references on objects and arrays.
 * @param source - The value to clone.
 */function $(t){if(R(t))return t.map($);if(B(t)){let e=Object.create(null),i=Object.keys(t),n=i.length,o=0;for(;o<n;++o)e[i[o]]=$(t[i[o]]);return e}return t}function Y(t){return -1===["__proto__","prototype","constructor"].indexOf(t)}/**
 * The default merger when Chart.helpers.merge is called without merger option.
 * Note(SB): also used by mergeConfig and mergeScaleConfig as fallback.
 * @private
 */function q(t,e,i,n){if(!Y(t))return;let o=e[t],s=i[t];B(o)&&B(s)?G(o,s,n):e[t]=$(s)}function G(t,e,i){let n;let o=R(e)?e:[e],s=o.length;if(!B(t))return t;i=i||{};let a=i.merger||q;for(let e=0;e<s;++e){if(!B(n=o[e]))continue;let s=Object.keys(n);for(let e=0,o=s.length;e<o;++e)a(s[e],t,n,i)}return t}function X(t,e){// eslint-disable-next-line @typescript-eslint/no-use-before-define
return G(t,e,{merger:K})}/**
 * Merges source[key] in target[key] only if target[key] is undefined.
 * @private
 */function K(t,e,i){if(!Y(t))return;let n=e[t],o=i[t];B(n)&&B(o)?X(n,o):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=$(o))}// resolveObjectKey resolver cache
const J={// Chart.helpers.core resolveObjectKey should resolve empty key to root object
"":t=>t,// default resolvers
x:t=>t.x,y:t=>t.y};function Q(t,e){let i=J[e]||(J[e]=function(t){let e=/**
 * @private
 */function(t){let e=t.split("."),i=[],n="";for(let t of e)(n+=t).endsWith("\\")?n=n.slice(0,-1)+".":(i.push(n),n="");return i}(t);return t=>{for(let i of e){if(""===i)break;t=t&&t[i]}return t}}(e));return i(t)}/**
 * @private
 */function tt(t){return t.charAt(0).toUpperCase()+t.slice(1)}const te=t=>void 0!==t,ti=t=>"function"==typeof t,tn=(t,e)=>{if(t.size!==e.size)return!1;for(let i of t)if(!e.has(i))return!1;return!0},to=Math.PI,ts=2*to,ta=ts+to,tr=Number.POSITIVE_INFINITY,th=to/180,tl=to/2,tc=to/4,td=2*to/3,tu=Math.log10,tp=Math.sign;function tf(t,e,i){return Math.abs(t-e)<i}/**
 * Implementation of the nice number algorithm used in determining where axis labels will go
 */function tm(t){let e=Math.round(t);t=tf(t,e,t/1e3)?e:t;let i=Math.pow(10,Math.floor(tu(t))),n=t/i;return(n<=1?1:n<=2?2:n<=5?5:10)*i}function tg(t){return!isNaN(parseFloat(t))&&isFinite(t)}/**
 * @private
 */function t_(t,e,i){let n,o,s;for(n=0,o=t.length;n<o;n++)isNaN(s=t[n][i])||(e.min=Math.min(e.min,s),e.max=Math.max(e.max,s))}function tv(t){return t*(to/180)}/**
 * Returns the number of decimal places
 * i.e. the number of digits after the decimal point, of the value of this Number.
 * @param x - A number.
 * @returns The number of decimal places.
 * @private
 */function ty(t){if(!N(t))return;let e=1,i=0;for(;Math.round(t*e)/e!==t;)e*=10,i++;return i}// Gets the angle from vertical upright to the point about a centre.
function tx(t,e){let i=e.x-t.x,n=e.y-t.y,o=Math.atan2(n,i);return o<-.5*to&&(o+=ts),{angle:o,distance:Math.sqrt(i*i+n*n)}}function tb(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}/**
 * Shortest distance between angles, in either direction.
 * @private
 */function tw(t,e){return(t-e+ta)%ts-to}/**
 * Normalize angle to be between 0 and 2*PI
 * @private
 */function tM(t){return(t%ts+ts)%ts}/**
 * @private
 */function tP(t,e,i,n){let o=tM(t),s=tM(e),a=tM(i),r=tM(s-o),h=tM(a-o),l=tM(o-s),c=tM(o-a);return o===s||o===a||n&&s===a||r>h&&l<c}/**
 * Limit `value` between `min` and `max`
 * @param value
 * @param min
 * @param max
 * @private
 */function tL(t,e,i){return Math.max(e,Math.min(i,t))}/**
 * @param value
 * @param start
 * @param end
 * @param [epsilon]
 * @private
 */function tk(t,e,i,n=1e-6){return t>=Math.min(e,i)-n&&t<=Math.max(e,i)+n}function tT(t,e,i){let n;i=i||(i=>t[i]<e);let o=t.length-1,s=0;for(;o-s>1;)i(n=s+o>>1)?s=n:o=n;return{lo:s,hi:o}}/**
 * Binary search
 * @param table - the table search. must be sorted!
 * @param key - property name for the value in each entry
 * @param value - value to find
 * @param last - lookup last index
 * @private
 */const tS=(t,e,i,n)=>tT(t,i,n?n=>{let o=t[n][e];return o<i||o===i&&t[n+1][e]===i}:n=>t[n][e]<i),tC=(t,e,i)=>tT(t,i,n=>t[n][e]>=i),tE=["push","pop","shift","splice","unshift"];function tO(t,e){let i=t._chartjs;if(!i)return;let n=i.listeners,o=n.indexOf(e);-1!==o&&n.splice(o,1),n.length>0||(tE.forEach(e=>{delete t[e]}),delete t._chartjs)}/**
 * @param items
 */function tz(t){let e=new Set(t);return e.size===t.length?t:Array.from(e)}/**
* Request animation polyfill
*/const tA="undefined"==typeof window?function(t){return t()}:window.requestAnimationFrame;/**
 * Throttles calling `fn` once per animation frame
 * Latest arguments are used on the actual call
 */function tD(t,e){let i=[],n=!1;return function(...o){// Save the args for use later
i=o,n||(n=!0,tA.call(window,()=>{n=!1,t.apply(e,i)}))}}/**
 * Converts 'start' to 'left', 'end' to 'right' and others to 'center'
 * @private
 */const tI=t=>"start"===t?"left":"end"===t?"right":"center",tR=(t,e,i)=>"start"===t?e:"end"===t?i:(e+i)/2,tB=(t,e,i,n)=>t===(n?"left":"right")?i:"center"===t?(e+i)/2:e;/**
 * Return start and count of visible points.
 * @private
 */function tN(t,e,i){let n=e.length,o=0,s=n;if(t._sorted){let{iScale:a,_parsed:r}=t,h=a.axis,{min:l,max:c,minDefined:d,maxDefined:u}=a.getUserBounds();d&&(o=tL(Math.min(tS(r,h,l).lo,i?n:tS(e,h,a.getPixelForValue(l)).lo),0,n-1)),s=u?tL(Math.max(tS(r,a.axis,c,!0).hi+1,i?0:tS(e,h,a.getPixelForValue(c),!0).hi+1),o,n)-o:n-o}return{start:o,count:s}}/**
 * Checks if the scale ranges have changed.
 * @param {object} meta - dataset meta.
 * @returns {boolean}
 * @private
 */function tF(t){let{xScale:e,yScale:i,_scaleRanges:n}=t,o={xmin:e.min,xmax:e.max,ymin:i.min,ymax:i.max};if(!n)return t._scaleRanges=o,!0;let s=n.xmin!==e.min||n.xmax!==e.max||n.ymin!==i.min||n.ymax!==i.max;return Object.assign(n,o),s}const tZ=t=>0===t||1===t,tj=(t,e,i)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*ts/i)),tW=(t,e,i)=>Math.pow(2,-10*t)*Math.sin((t-e)*ts/i)+1,tV={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*tl)+1,easeOutSine:t=>Math.sin(t*tl),easeInOutSine:t=>-.5*(Math.cos(to*t)-1),easeInExpo:t=>0===t?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>1===t?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>tZ(t)?t:t<.5?.5*Math.pow(2,10*(2*t-1)):.5*(-Math.pow(2,-10*(2*t-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>tZ(t)?t:tj(t,.075,.3),easeOutElastic:t=>tZ(t)?t:tW(t,.075,.3),easeInOutElastic:t=>tZ(t)?t:t<.5?.5*tj(2*t,.1125,.45):.5+.5*tW(2*t-1,.1125,.45),easeInBack:t=>t*t*(2.70158*t-1.70158),easeOutBack:t=>(t-=1)*t*(2.70158*t+1.70158)+1,easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-tV.easeOutBounce(1-t),easeOutBounce:t=>t<.36363636363636365?7.5625*t*t:t<.7272727272727273?7.5625*(t-=.5454545454545454)*t+.75:t<.9090909090909091?7.5625*(t-=.8181818181818182)*t+.9375:7.5625*(t-=.9545454545454546)*t+.984375,easeInOutBounce:t=>t<.5?.5*tV.easeInBounce(2*t):.5*tV.easeOutBounce(2*t-1)+.5};function tH(t){if(t&&"object"==typeof t){let e=t.toString();return"[object CanvasPattern]"===e||"[object CanvasGradient]"===e}return!1}function tU(t){return tH(t)?t:new z(t)}function t$(t){return tH(t)?t:new z(t).saturate(.5).darken(.1).hexString()}const tY=["x","y","borderWidth","radius","tension"],tq=["color","borderColor","backgroundColor"],tG=new Map;function tX(t,e,i){return(function(t,e){e=e||{};let i=t+JSON.stringify(e),n=tG.get(i);return n||(n=new Intl.NumberFormat(t,e),tG.set(i,n)),n})(e,i).format(t)}const tK={values:t=>R(t)?t:""+t,numeric(t,e,i){let n;if(0===t)return"0";let o=this.chart.options.locale,s=t;if(i.length>1){let e;let o=Math.max(Math.abs(i[0].value),Math.abs(i[i.length-1].value));(o<1e-4||o>1e15)&&(n="scientific"),Math.abs(e=i.length>3?i[2].value-i[1].value:i[1].value-i[0].value)>=1&&t!==Math.floor(t)&&(e=t-Math.floor(t)),s=e}let a=tu(Math.abs(s)),r=isNaN(a)?1:Math.max(Math.min(-1*Math.floor(a),20),0),h={notation:n,minimumFractionDigits:r,maximumFractionDigits:r};return Object.assign(h,this.options.ticks.format),tX(t,o,h)},logarithmic(t,e,i){if(0===t)return"0";let n=i[e].significand||t/Math.pow(10,Math.floor(tu(t)));return[1,2,3,5,10,15].includes(n)||e>.8*i.length?tK.numeric.call(this,t,e,i):""}};var tJ={formatters:tK};const tQ=Object.create(null),t0=Object.create(null);function t1(t,e){if(!e)return t;let i=e.split(".");for(let e=0,n=i.length;e<n;++e){let n=i[e];t=t[n]||(t[n]=Object.create(null))}return t}function t2(t,e,i){return"string"==typeof e?G(t1(t,e),i):G(t1(t,""),e)}var t5=/* #__PURE__ */new class{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=t=>t.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(t,e)=>t$(e.backgroundColor),this.hoverBorderColor=(t,e)=>t$(e.borderColor),this.hoverColor=(t,e)=>t$(e.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return t2(this,t,e)}get(t){return t1(this,t)}describe(t,e){return t2(t0,t,e)}override(t,e){return t2(tQ,t,e)}route(t,e,i,n){let o=t1(this,t),s=t1(this,i),a="_"+e;Object.defineProperties(o,{[a]:{value:o[e],writable:!0},[e]:{enumerable:!0,get(){let t=this[a],e=s[n];return B(t)?Object.assign({},e,t):Z(t,e)},set(t){this[a]=t}}})}apply(t){t.forEach(t=>t(this))}}({_scriptable:t=>!t.startsWith("on"),_indexable:t=>"events"!==t,hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[function(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>"onProgress"!==t&&"onComplete"!==t&&"fn"!==t}),t.set("animations",{colors:{type:"color",properties:tq},numbers:{type:"number",properties:tY}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>0|t}}}})},function(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})},function(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:tJ.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&"callback"!==t&&"parser"!==t,_indexable:t=>"borderDash"!==t&&"tickBorderDash"!==t&&"dash"!==t}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:t=>"backdropPadding"!==t&&"callback"!==t,_indexable:t=>"backdropPadding"!==t})}]);/**
 * @private
 */function t3(t,e,i,n,o){let s=e[o];return s||(s=e[o]=t.measureText(o).width,i.push(o)),s>n&&(n=s),n}/**
 * Returns the aligned pixel value to avoid anti-aliasing blur
 * @param chart - The chart instance.
 * @param pixel - A pixel value.
 * @param width - The width of the element.
 * @returns The aligned pixel value.
 * @private
 */function t8(t,e,i){let n=t.currentDevicePixelRatio,o=0!==i?Math.max(i/2,.5):0;return Math.round((e-o)*n)/n+o}/**
 * Clears the entire canvas.
 */function t4(t,e){(e=e||t.getContext("2d")).save(),// canvas.width and canvas.height do not consider the canvas transform,
// while clearRect does
e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore()}function t6(t,e,i,n){// eslint-disable-next-line @typescript-eslint/no-use-before-define
t9(t,e,i,n,null)}// eslint-disable-next-line complexity
function t9(t,e,i,n,o){let s,a,r,h,l,c,d,u;let p=e.pointStyle,f=e.rotation,m=e.radius,g=(f||0)*th;if(p&&"object"==typeof p&&("[object HTMLImageElement]"===(s=p.toString())||"[object HTMLCanvasElement]"===s)){t.save(),t.translate(i,n),t.rotate(g),t.drawImage(p,-p.width/2,-p.height/2,p.width,p.height),t.restore();return}if(!isNaN(m)&&!(m<=0)){switch(t.beginPath(),p){// Default includes circle
default:o?t.ellipse(i,n,o/2,m,0,0,ts):t.arc(i,n,m,0,ts),t.closePath();break;case"triangle":c=o?o/2:m,t.moveTo(i+Math.sin(g)*c,n-Math.cos(g)*m),g+=td,t.lineTo(i+Math.sin(g)*c,n-Math.cos(g)*m),g+=td,t.lineTo(i+Math.sin(g)*c,n-Math.cos(g)*m),t.closePath();break;case"rectRounded":// NOTE: the rounded rect implementation changed to use `arc` instead of
// `quadraticCurveTo` since it generates better results when rect is
// almost a circle. 0.516 (instead of 0.5) produces results with visually
// closer proportion to the previous impl and it is inscribed in the
// circle with `radius`. For more details, see the following PRs:
// https://github.com/chartjs/Chart.js/issues/5597
// https://github.com/chartjs/Chart.js/issues/5858
l=.516*m,a=Math.cos(g+tc)*(h=m-l),d=Math.cos(g+tc)*(o?o/2-l:h),r=Math.sin(g+tc)*h,u=Math.sin(g+tc)*(o?o/2-l:h),t.arc(i-d,n-r,l,g-to,g-tl),t.arc(i+u,n-a,l,g-tl,g),t.arc(i+d,n+r,l,g,g+tl),t.arc(i-u,n+a,l,g+tl,g+to),t.closePath();break;case"rect":if(!f){h=Math.SQRT1_2*m,c=o?o/2:h,t.rect(i-c,n-h,2*c,2*h);break}g+=tc;/* falls through */case"rectRot":d=Math.cos(g)*(o?o/2:m),a=Math.cos(g)*m,r=Math.sin(g)*m,u=Math.sin(g)*(o?o/2:m),t.moveTo(i-d,n-r),t.lineTo(i+u,n-a),t.lineTo(i+d,n+r),t.lineTo(i-u,n+a),t.closePath();break;case"crossRot":g+=tc;/* falls through */case"cross":d=Math.cos(g)*(o?o/2:m),a=Math.cos(g)*m,r=Math.sin(g)*m,u=Math.sin(g)*(o?o/2:m),t.moveTo(i-d,n-r),t.lineTo(i+d,n+r),t.moveTo(i+u,n-a),t.lineTo(i-u,n+a);break;case"star":d=Math.cos(g)*(o?o/2:m),a=Math.cos(g)*m,r=Math.sin(g)*m,u=Math.sin(g)*(o?o/2:m),t.moveTo(i-d,n-r),t.lineTo(i+d,n+r),t.moveTo(i+u,n-a),t.lineTo(i-u,n+a),g+=tc,d=Math.cos(g)*(o?o/2:m),a=Math.cos(g)*m,r=Math.sin(g)*m,u=Math.sin(g)*(o?o/2:m),t.moveTo(i-d,n-r),t.lineTo(i+d,n+r),t.moveTo(i+u,n-a),t.lineTo(i-u,n+a);break;case"line":a=o?o/2:Math.cos(g)*m,r=Math.sin(g)*m,t.moveTo(i-a,n-r),t.lineTo(i+a,n+r);break;case"dash":t.moveTo(i,n),t.lineTo(i+Math.cos(g)*(o?o/2:m),n+Math.sin(g)*m);break;case!1:t.closePath()}t.fill(),e.borderWidth>0&&t.stroke()}}/**
 * Returns true if the point is inside the rectangle
 * @param point - The point to test
 * @param area - The rectangle
 * @param margin - allowed margin
 * @private
 */function t7(t,e,i){return i=i||.5,!e||t&&t.x>e.left-i&&t.x<e.right+i&&t.y>e.top-i&&t.y<e.bottom+i}function et(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function ee(t){t.restore()}/**
 * @private
 */function ei(t,e,i,n,o){if(!e)return t.lineTo(i.x,i.y);if("middle"===o){let n=(e.x+i.x)/2;t.lineTo(n,e.y),t.lineTo(n,i.y)}else"after"===o!=!!n?t.lineTo(e.x,i.y):t.lineTo(i.x,e.y);t.lineTo(i.x,i.y)}/**
 * @private
 */function en(t,e,i,n){if(!e)return t.lineTo(i.x,i.y);t.bezierCurveTo(n?e.cp1x:e.cp2x,n?e.cp1y:e.cp2y,n?i.cp2x:i.cp1x,n?i.cp2y:i.cp1y,i.x,i.y)}/**
 * Render text onto the canvas
 */function eo(t,e,i,n,o,s={}){let a,r;let h=R(e)?e:[e],l=s.strokeWidth>0&&""!==s.strokeColor;for(t.save(),t.font=o.string,s.translation&&t.translate(s.translation[0],s.translation[1]),I(s.rotation)||t.rotate(s.rotation),s.color&&(t.fillStyle=s.color),s.textAlign&&(t.textAlign=s.textAlign),s.textBaseline&&(t.textBaseline=s.textBaseline),a=0;a<h.length;++a)r=h[a],s.backdrop&&function(t,e){let i=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=i}(t,s.backdrop),l&&(s.strokeColor&&(t.strokeStyle=s.strokeColor),I(s.strokeWidth)||(t.lineWidth=s.strokeWidth),t.strokeText(r,i,n,s.maxWidth)),t.fillText(r,i,n,s.maxWidth),function(t,e,i,n,o){if(o.strikethrough||o.underline){/**
     * Now that IE11 support has been dropped, we can use more
     * of the TextMetrics object. The actual bounding boxes
     * are unflagged in Chrome, Firefox, Edge, and Safari so they
     * can be safely used.
     * See https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics#Browser_compatibility
     */let s=t.measureText(n),a=e-s.actualBoundingBoxLeft,r=e+s.actualBoundingBoxRight,h=i-s.actualBoundingBoxAscent,l=i+s.actualBoundingBoxDescent,c=o.strikethrough?(h+l)/2:l;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=o.decorationWidth||2,t.moveTo(a,c),t.lineTo(r,c),t.stroke()}}(t,i,n,r,s),n+=Number(o.lineHeight);t.restore()}/**
 * Add a path of a rectangle with rounded corners to the current sub-path
 * @param ctx - Context
 * @param rect - Bounding rect
 */function es(t,e){let{x:i,y:n,w:o,h:s,radius:a}=e;// top left arc
t.arc(i+a.topLeft,n+a.topLeft,a.topLeft,1.5*to,to,!0),// line from top left to bottom left
t.lineTo(i,n+s-a.bottomLeft),// bottom left arc
t.arc(i+a.bottomLeft,n+s-a.bottomLeft,a.bottomLeft,to,tl,!0),// line from bottom left to bottom right
t.lineTo(i+o-a.bottomRight,n+s),// bottom right arc
t.arc(i+o-a.bottomRight,n+s-a.bottomRight,a.bottomRight,tl,0,!0),// line from bottom right to top right
t.lineTo(i+o,n+a.topRight),// top right arc
t.arc(i+o-a.topRight,n+a.topRight,a.topRight,0,-tl,!0),// line from top right to top left
t.lineTo(i+a.topLeft,n)}const ea=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,er=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/,eh=t=>+t||0;function el(t,e){let i={},n=B(e),o=n?Object.keys(e):e,s=B(t)?n?i=>Z(t[i],t[e[i]]):e=>t[e]:()=>t;for(let t of o)i[t]=eh(s(t));return i}/**
 * Converts the given value into a TRBL object.
 * @param value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns The padding values (top, right, bottom, left)
 * @since 3.0.0
 */function ec(t){return el(t,{top:"y",right:"x",bottom:"y",left:"x"})}/**
 * Converts the given value into a TRBL corners object (similar with css border-radius).
 * @param value - If a number, set the value to all TRBL corner components,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 * @returns The TRBL corner values (topLeft, topRight, bottomLeft, bottomRight)
 * @since 3.0.0
 */function ed(t){return el(t,["topLeft","topRight","bottomLeft","bottomRight"])}/**
 * Converts the given value into a padding object with pre-computed width/height.
 * @param value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns The padding values (top, right, bottom, left, width, height)
 * @since 2.7.0
 */function eu(t){let e=ec(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}/**
 * Parses font options and returns the font object.
 * @param options - A object that contains font options to be parsed.
 * @param fallback - A object that contains fallback font options.
 * @return The font object.
 * @private
 */function ep(t,e){t=t||{},e=e||t5.font;let i=Z(t.size,e.size);"string"==typeof i&&(i=parseInt(i,10));let n=Z(t.style,e.style);n&&!(""+n).match(er)&&(console.warn('Invalid font style specified: "'+n+'"'),n=void 0);let o={family:Z(t.family,e.family),lineHeight:/**
 * @alias Chart.helpers.options
 * @namespace
 *//**
 * Converts the given line height `value` in pixels for a specific font `size`.
 * @param value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
 * @param size - The font size (in pixels) used to resolve relative `value`.
 * @returns The effective line height in pixels (size * 1.2 if value is invalid).
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
 * @since 2.7.0
 */function(t,e){let i=(""+t).match(ea);if(!i||"normal"===i[1])return 1.2*e;switch(t=+i[2],i[3]){case"px":return t;case"%":t/=100}return e*t}(Z(t.lineHeight,e.lineHeight),i),size:i,style:n,weight:Z(t.weight,e.weight),string:""};return o.string=!o||I(o.size)||I(o.family)?null:(o.style?o.style+" ":"")+(o.weight?o.weight+" ":"")+o.size+"px "+o.family,o}/**
 * Evaluates the given `inputs` sequentially and returns the first defined value.
 * @param inputs - An array of values, falling back to the last value.
 * @param context - If defined and the current value is a function, the value
 * is called with `context` as first argument and the result becomes the new input.
 * @param index - If defined and the current value is an array, the value
 * at `index` become the new input.
 * @param info - object to return information about resolution in
 * @param info.cacheable - Will be set to `false` if option is not cacheable.
 * @since 2.7.0
 */function ef(t,e,i,n){let o,s,a,r=!0;for(o=0,s=t.length;o<s;++o)if(void 0!==(a=t[o])&&(void 0!==e&&"function"==typeof a&&(a=a(e),r=!1),void 0!==i&&R(a)&&(a=a[i%a.length],r=!1),void 0!==a))return n&&!r&&(n.cacheable=!1),a}function em(t,e){return Object.assign(Object.create(t),e)}/**
 * Creates a Proxy for resolving raw values for options.
 * @param scopes - The option scopes to look for values, in resolution order
 * @param prefixes - The prefixes for values, in resolution order.
 * @param rootScopes - The root option scopes
 * @param fallback - Parent scopes fallback
 * @param getTarget - callback for getting the target for changed values
 * @returns Proxy
 * @private
 */function eg(t,e=[""],i,n,o=()=>t[0]){let s=i||t;void 0===n&&(n=eL("_fallback",t));let a={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:s,_fallback:n,_getTarget:o,override:i=>eg([i,...t],e,s,n)};return new Proxy(a,{/**
     * A trap for the delete operator.
     */deleteProperty:(e,i)=>(delete e[i],delete e._keys,delete t[0][i],!0),/**
     * A trap for getting property values.
     */get:(i,n)=>eb(i,n,()=>(function(t,e,i,n){let o;for(let s of e)if(void 0!==(o=eL(ey(s,t),i)))return ex(t,o)?eM(i,n,t,o):o})(n,e,t,i)),/**
     * A trap for Object.getOwnPropertyDescriptor.
     * Also used by Object.hasOwnProperty.
     */getOwnPropertyDescriptor:(t,e)=>Reflect.getOwnPropertyDescriptor(t._scopes[0],e),/**
     * A trap for Object.getPrototypeOf.
     */getPrototypeOf:()=>Reflect.getPrototypeOf(t[0]),/**
     * A trap for the in operator.
     */has:(t,e)=>ek(t).includes(e),/**
     * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
     */ownKeys:t=>ek(t),/**
     * A trap for setting property values.
     */set(t,e,i){let n=t._storage||(t._storage=o());return t[e]=n[e]=i,delete t._keys,!0}})}/**
 * Returns an Proxy for resolving option values with context.
 * @param proxy - The Proxy returned by `_createResolver`
 * @param context - Context object for scriptable/indexable options
 * @param subProxy - The proxy provided for scriptable options
 * @param descriptorDefaults - Defaults for descriptors
 * @private
 */function e_(t,e,i,n){let o={_cacheable:!1,_proxy:t,_context:e,_subProxy:i,_stack:new Set,_descriptors:ev(t,n),setContext:e=>e_(t,e,i,n),override:o=>e_(t.override(o),e,i,n)};return new Proxy(o,{/**
     * A trap for the delete operator.
     */deleteProperty:(e,i)=>(delete e[i],delete t[i],!0),/**
     * A trap for getting property values.
     */get:(t,e,i)=>eb(t,e,()=>(function(t,e,i){let{_proxy:n,_context:o,_subProxy:s,_descriptors:a}=t,r=n[e];return ti(r)&&a.isScriptable(e)&&(r=function(t,e,i,n){let{_proxy:o,_context:s,_subProxy:a,_stack:r}=i;if(r.has(t))throw Error("Recursion detected: "+Array.from(r).join("->")+"->"+t);r.add(t);let h=e(s,a||n);return r.delete(t),ex(t,h)&&(h=eM(o._scopes,o,t,h)),h}(e,r,t,i)),R(r)&&r.length&&(r=function(t,e,i,n){let{_proxy:o,_context:s,_subProxy:a,_descriptors:r}=i;if(void 0!==s.index&&n(t))return e[s.index%e.length];if(B(e[0])){// Array of objects, return array or resolvers
        let i=e,n=o._scopes.filter(t=>t!==i);for(let h of(e=[],i)){let i=eM(n,o,t,h);e.push(e_(i,s,a&&a[t],r))}}return e}(e,r,t,a.isIndexable)),ex(e,r)&&(r=e_(r,o,s&&s[e],a)),r})(t,e,i)),/**
     * A trap for Object.getOwnPropertyDescriptor.
     * Also used by Object.hasOwnProperty.
     */getOwnPropertyDescriptor:(e,i)=>e._descriptors.allKeys?Reflect.has(t,i)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,i),/**
     * A trap for Object.getPrototypeOf.
     */getPrototypeOf:()=>Reflect.getPrototypeOf(t),/**
     * A trap for the in operator.
     */has:(e,i)=>Reflect.has(t,i),/**
     * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
     */ownKeys:()=>Reflect.ownKeys(t),/**
     * A trap for setting property values.
     */set:(e,i,n)=>(t[i]=n,delete e[i],!0)})}/**
 * @private
 */function ev(t,e={scriptable:!0,indexable:!0}){let{_scriptable:i=e.scriptable,_indexable:n=e.indexable,_allKeys:o=e.allKeys}=t;return{allKeys:o,scriptable:i,indexable:n,isScriptable:ti(i)?i:()=>i,isIndexable:ti(n)?n:()=>n}}const ey=(t,e)=>t?t+tt(e):e,ex=(t,e)=>B(e)&&"adapters"!==t&&(null===Object.getPrototypeOf(e)||e.constructor===Object);function eb(t,e,i){if(Object.prototype.hasOwnProperty.call(t,e))return t[e];let n=i();return(// cache the resolved value
t[e]=n,n)}const ew=(t,e)=>!0===t?e:"string"==typeof t?Q(e,t):void 0;function eM(t,e,i,n){var o;let s=e._rootScopes,a=ti(o=e._fallback)?o(i,n):o,r=[...t,...s],h=new Set;h.add(n);let l=eP(h,r,i,a||i,n);return null!==l&&(void 0===a||a===i||null!==(l=eP(h,r,a,l,n)))&&eg(Array.from(h),[""],s,a,()=>(function(t,e,i){let n=t._getTarget();e in n||(n[e]={});let o=n[e];return R(o)&&B(i)?i:o||{}})(e,i,n))}function eP(t,e,i,n,o){for(;i;)i=function(t,e,i,n,o){for(let a of e){let e=ew(i,a);if(e){var s;t.add(e);let a=ti(s=e._fallback)?s(i,o):s;if(void 0!==a&&a!==i&&a!==n)// The fallback will resume to that new scope.
return a}else if(!1===e&&void 0!==n&&i!==n)// For example `interaction` from `hover` or `plugins.tooltip` and `animation` from `animations`
return null}return!1}(t,e,i,n,o);return i}function eL(t,e){for(let i of e){if(!i)continue;let e=i[t];if(void 0!==e)return e}}function ek(t){let e=t._keys;return e||(e=t._keys=function(t){let e=new Set;for(let i of t)for(let t of Object.keys(i).filter(t=>!t.startsWith("_")))e.add(t);return Array.from(e)}(t._scopes)),e}function eT(t,e,i,n){let o,s,a;let{iScale:r}=t,{key:h="r"}=this._parsing,l=Array(n);for(o=0;o<n;++o)a=e[s=o+i],l[o]={r:r.parse(Q(a,h),s)};return l}const eS=Number.EPSILON||1e-14,eC=(t,e)=>e<t.length&&!t[e].skip&&t[e],eE=t=>"x"===t?"y":"x";function eO(t,e,i){return Math.max(Math.min(t,i),e)}/**
 * Note: typedefs are auto-exported, so use a made-up `dom` namespace where
 * necessary to avoid duplicates with `export * from './helpers`; see
 * https://github.com/microsoft/TypeScript/issues/46011
 * @typedef { import('../core/core.controller.js').default } dom.Chart
 * @typedef { import('../../types').ChartEvent } ChartEvent
 *//**
 * @private
 */function ez(){return"undefined"!=typeof window&&"undefined"!=typeof document}/**
 * @private
 */function eA(t){let e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e}/**
 * convert max-width/max-height values that may be percentages into a number
 * @private
 */function eD(t,e,i){let n;return"string"==typeof t?(n=parseInt(t,10),-1!==t.indexOf("%")&&(n=n/100*e.parentNode[i])):n=t,n}const eI=t=>t.ownerDocument.defaultView.getComputedStyle(t,null),eR=["top","right","bottom","left"];function eB(t,e,i){let n={};i=i?"-"+i:"";for(let o=0;o<4;o++){let s=eR[o];n[s]=parseFloat(t[e+"-"+s+i])||0}return n.width=n.left+n.right,n.height=n.top+n.bottom,n}const eN=(t,e,i)=>(t>0||e>0)&&(!i||!i.shadowRoot);/**
 * Gets an event's x, y coordinates, relative to the chart area
 * @param event
 * @param chart
 * @returns x and y coordinates of the event
 */function eF(t,e){if("native"in t)return t;let{canvas:i,currentDevicePixelRatio:n}=e,o=eI(i),s="border-box"===o.boxSizing,a=eB(o,"padding"),r=eB(o,"border","width"),{x:h,y:l,box:c}=/**
 * @param e
 * @param canvas
 * @returns Canvas position
 */function(t,e){let i,n;let o=t.touches,s=o&&o.length?o[0]:t,{offsetX:a,offsetY:r}=s,h=!1;if(eN(a,r,t.target))i=a,n=r;else{let t=e.getBoundingClientRect();i=s.clientX-t.left,n=s.clientY-t.top,h=!0}return{x:i,y:n,box:h}}(t,i),d=a.left+(c&&r.left),u=a.top+(c&&r.top),{width:p,height:f}=e;return s&&(p-=a.width+r.width,f-=a.height+r.height),{x:Math.round((h-d)/p*i.width/n),y:Math.round((l-u)/f*i.height/n)}}const eZ=t=>Math.round(10*t)/10;/**
 * @param chart
 * @param forceRatio
 * @param forceStyle
 * @returns True if the canvas context size or transformation has changed.
 */function ej(t,e,i){let n=e||1,o=Math.floor(t.height*n),s=Math.floor(t.width*n);t.height=Math.floor(t.height),t.width=Math.floor(t.width);let a=t.canvas;return a.style&&(i||!a.style.height&&!a.style.width)&&(a.style.height=`${t.height}px`,a.style.width=`${t.width}px`),(t.currentDevicePixelRatio!==n||a.height!==o||a.width!==s)&&(t.currentDevicePixelRatio=n,a.height=o,a.width=s,t.ctx.setTransform(n,0,0,n,0,0),!0)}/**
 * Detects support for options object argument in addEventListener.
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
 * @private
 */const eW=function(){let t=!1;try{let e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(t){// continue regardless of error
}return t}();/**
 * The "used" size is the final value of a dimension property after all calculations have
 * been performed. This method uses the computed style of `element` but returns undefined
 * if the computed style is not expressed in pixels. That can happen in some cases where
 * `element` has a size relative to its parent and this last one is not yet displayed,
 * for example because of `display: none` on a parent node.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
 * @returns Size in pixels or undefined if unknown.
 */function eV(t,e){let i=eI(t).getPropertyValue(e),n=i&&i.match(/^(\d+)(\.\d+)?px$/);return n?+n[1]:void 0}/**
 * @private
 */function eH(t,e,i,n){return{x:t.x+i*(e.x-t.x),y:t.y+i*(e.y-t.y)}}/**
 * @private
 */function eU(t,e,i,n){return{x:t.x+i*(e.x-t.x),y:"middle"===n?i<.5?t.y:e.y:"after"===n?i<1?t.y:e.y:i>0?e.y:t.y}}/**
 * @private
 */function e$(t,e,i,n){let o={x:t.cp2x,y:t.cp2y},s={x:e.cp1x,y:e.cp1y},a=eH(t,o,i),r=eH(o,s,i),h=eH(s,e,i),l=eH(a,r,i),c=eH(r,h,i);return eH(l,c,i)}function eY(t,e,i){var n;return t?(n=i,{x:t=>e+e+n-t,setWidth(t){n=t},textAlign:t=>"center"===t?t:"right"===t?"left":"right",xPlus:(t,e)=>t-e,leftForLtr:(t,e)=>t-e}):{x:t=>t,setWidth(t){},textAlign:t=>t,xPlus:(t,e)=>t+e,leftForLtr:(t,e)=>t}}function eq(t,e){let i,n;("ltr"===e||"rtl"===e)&&(n=[(i=t.canvas.style).getPropertyValue("direction"),i.getPropertyPriority("direction")],i.setProperty("direction",e,"important"),t.prevTextDirection=n)}function eG(t,e){void 0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function eX(t){return"angle"===t?{between:tP,compare:tw,normalize:tM}:{between:tk,compare:(t,e)=>t-e,normalize:t=>t}}function eK({start:t,end:e,count:i,loop:n,style:o}){return{start:t%i,end:e%i,loop:n&&(e-t+1)%i==0,style:o}}function eJ(t,e,i){let n,o,s;if(!i)return[t];let{property:a,start:r,end:h}=i,l=e.length,{compare:c,between:d,normalize:u}=eX(a),{start:p,end:f,loop:m,style:g}=function(t,e,i){let n;let{property:o,start:s,end:a}=i,{between:r,normalize:h}=eX(o),l=e.length,{start:c,end:d,loop:u}=t;if(u){for(c+=l,d+=l,n=0;n<l&&r(h(e[c%l][o]),s,a);++n)c--,d--;c%=l,d%=l}return d<c&&(d+=l),{start:c,end:d,loop:u,style:t.style}}(t,e,i),_=[],v=!1,y=null,x=()=>d(r,s,n)&&0!==c(r,s),b=()=>0===c(h,n)||d(h,s,n),w=()=>v||x(),M=()=>!v||b();for(let t=p,i=p;t<=f;++t)(o=e[t%l]).skip||(n=u(o[a]))===s||(v=d(n,r,h),null===y&&w()&&(y=0===c(n,r)?t:i),null!==y&&M()&&(_.push(eK({start:y,end:t,loop:m,count:l,style:g})),y=null),i=t,s=n);return null!==y&&_.push(eK({start:y,end:f,loop:m,count:l,style:g})),_}function eQ(t,e){let i=[],n=t.segments;for(let o=0;o<n.length;o++){let s=eJ(n[o],t.points,e);s.length&&i.push(...s)}return i}function e0(t,e,i,n){return n&&n.setContext&&i?function(t,e,i,n){let o=t._chart.getContext(),s=e1(t.options),{_datasetIndex:a,options:{spanGaps:r}}=t,h=i.length,l=[],c=s,d=e[0].start,u=d;function p(t,e,n,o){let s=r?-1:1;if(t!==e){for(t+=h;i[t%h].skip;)t-=s;for(;i[e%h].skip;)e+=s;t%h!=e%h&&(l.push({start:t%h,end:e%h,loop:n,style:o}),c=o,d=e%h)}}for(let t of e){let e;let s=i[(d=r?d:t.start)%h];for(u=d+1;u<=t.end;u++){let r=i[u%h];(function(t,e){if(!e)return!1;let i=[],n=function(t,e){return tH(e)?(i.includes(e)||i.push(e),i.indexOf(e)):e};return JSON.stringify(t,n)!==JSON.stringify(e,n)})(e=e1(n.setContext(em(o,{type:"segment",p0:s,p1:r,p0DataIndex:(u-1)%h,p1DataIndex:u%h,datasetIndex:a}))),c)&&p(d,u-1,t.loop,c),s=r,c=e}d<u-1&&p(d,u-1,t.loop,c)}return l}(t,e,i,n):e}function e1(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}var e2=/* #__PURE__ */new class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,n){let o=e.listeners[n],s=e.duration;o.forEach(n=>n({chart:t,initial:e.initial,numSteps:s,currentStep:Math.min(i-e.start,s)}))}_refresh(){this._request||(this._running=!0,this._request=tA.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((i,n)=>{let o;if(!i.running||!i.items.length)return;let s=i.items,a=s.length-1,r=!1;for(;a>=0;--a)(o=s[a])._active?(o._total>i.duration&&(i.duration=o._total),o.tick(t),r=!0):(s[a]=s[s.length-1],s.pop());r&&(n.draw(),this._notify(n,i,t,"progress")),s.length||(i.running=!1,this._notify(n,i,t,"complete"),i.initial=!1),e+=s.length}),this._lastDate=t,0===e&&(this._running=!1)}_getAnims(t){let e=this._charts,i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){e&&e.length&&this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){let e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((t,e)=>Math.max(t,e._duration),0),this._refresh())}running(t){if(!this._running)return!1;let e=this._charts.get(t);return!!e&&!!e.running&&!!e.items.length}stop(t){let e=this._charts.get(t);if(!e||!e.items.length)return;let i=e.items,n=i.length-1;for(;n>=0;--n)i[n].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}};const e5="transparent",e3={boolean:(t,e,i)=>i>.5?e:t,color(t,e,i){let n=tU(t||e5),o=n.valid&&tU(e||e5);return o&&o.valid?o.mix(n,i).hexString():e},number:(t,e,i)=>t+(e-t)*i};class e8{constructor(t,e,i,n){let o=e[i];n=ef([t.to,n,o,t.from]);let s=ef([t.from,o,n]);this._active=!0,this._fn=t.fn||e3[t.type||typeof s],this._easing=tV[t.easing]||tV.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=s,this._to=n,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);let n=this._target[this._prop],o=i-this._start,s=this._duration-o;this._start=i,this._duration=Math.floor(Math.max(s,t.duration)),this._total+=o,this._loop=!!t.loop,this._to=ef([t.to,e,n,t.from]),this._from=ef([t.from,n,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){let e;let i=t-this._start,n=this._duration,o=this._prop,s=this._from,a=this._loop,r=this._to;if(this._active=s!==r&&(a||i<n),!this._active){this._target[o]=r,this._notify(!0);return}if(i<0){this._target[o]=s;return}e=i/n%2,e=a&&e>1?2-e:e,e=this._easing(Math.min(1,Math.max(0,e))),this._target[o]=this._fn(s,r,e)}wait(){let t=this._promises||(this._promises=[]);return new Promise((e,i)=>{t.push({res:e,rej:i})})}_notify(t){let e=t?"res":"rej",i=this._promises||[];for(let t=0;t<i.length;t++)i[t][e]()}}class e4{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!B(t))return;let e=Object.keys(t5.animation),i=this._properties;Object.getOwnPropertyNames(t).forEach(n=>{let o=t[n];if(!B(o))return;let s={};for(let t of e)s[t]=o[t];(R(o.properties)&&o.properties||[n]).forEach(t=>{t!==n&&i.has(t)||i.set(t,s)})})}_animateOptions(t,e){let i=e.options,n=function(t,e){if(!e)return;let i=t.options;if(!i){t.options=e;return}return i.$shared&&(t.options=i=Object.assign({},i,{$shared:!1,$animations:{}})),i}(t,i);if(!n)return[];let o=this._createAnimations(n,i);return i.$shared&&(function(t,e){let i=[],n=Object.keys(e);for(let e=0;e<n.length;e++){let o=t[n[e]];o&&o.active()&&i.push(o.wait())}return Promise.all(i)})(t.options.$animations,i).then(()=>{t.options=i},()=>{}),o}_createAnimations(t,e){let i;let n=this._properties,o=[],s=t.$animations||(t.$animations={}),a=Object.keys(e),r=Date.now();for(i=a.length-1;i>=0;--i){let h=a[i];if("$"===h.charAt(0))continue;if("options"===h){o.push(...this._animateOptions(t,e));continue}let l=e[h],c=s[h],d=n.get(h);if(c){if(d&&c.active()){c.update(d,l,r);continue}c.cancel()}if(!d||!d.duration){t[h]=l;continue}s[h]=c=new e8(d,t,h,l),o.push(c)}return o}update(t,e){if(0===this._properties.size){Object.assign(t,e);return}let i=this._createAnimations(t,e);if(i.length)return e2.add(this._chart,i),!0}}function e6(t,e){let i=t&&t.options||{},n=i.reverse,o=void 0===i.min?e:0,s=void 0===i.max?e:0;return{start:n?s:o,end:n?o:s}}function e9(t,e){let i,n;let o=[],s=t._getSortedDatasetMetas(e);for(i=0,n=s.length;i<n;++i)o.push(s[i].index);return o}function e7(t,e,i,n={}){let o,s,a,r;let h=t.keys,l="single"===n.mode;if(null!==e){for(o=0,s=h.length;o<s;++o){if((a=+h[o])===i){if(n.all)continue;break}N(r=t.values[a])&&(l||0===e||tp(e)===tp(r))&&(e+=r)}return e}}function it(t,e){let i=t&&t.options.stacked;return i||void 0===i&&void 0!==e.stack}function ie(t,e,i,n){for(let o of e.getMatchingVisibleMetas(n).reverse()){let e=t[o.index];if(i&&e>0||!i&&e<0)return o.index}return null}function ii(t,e){let i;let{chart:n,_cachedMeta:o}=t,s=n._stacks||(n._stacks={}),{iScale:a,vScale:r,index:h}=o,l=a.axis,c=r.axis,d=`${a.id}.${r.id}.${o.stack||o.type}`,u=e.length;for(let t=0;t<u;++t){let n=e[t],{[l]:a,[c]:u}=n,p=n._stacks||(n._stacks={});(i=p[c]=function(t,e,i){let n=t[e]||(t[e]={});return n[i]||(n[i]={})}(s,d,a))[h]=u,i._top=ie(i,r,!0,o.type),i._bottom=ie(i,r,!1,o.type);let f=i._visualValues||(i._visualValues={});f[h]=u}}function io(t,e){let i=t.scales;return Object.keys(i).filter(t=>i[t].axis===e).shift()}function is(t,e){let i=t.controller.index,n=t.vScale&&t.vScale.axis;if(n)for(let o of e=e||t._parsed){let t=o._stacks;if(!t||void 0===t[n]||void 0===t[n][i])return;delete t[n][i],void 0!==t[n]._visualValues&&void 0!==t[n]._visualValues[i]&&delete t[n]._visualValues[i]}}const ia=t=>"reset"===t||"none"===t,ir=(t,e)=>e?t:Object.assign({},t),ih=(t,e,i)=>t&&!e.hidden&&e._stacked&&{keys:e9(i,!0),values:null};class il{static defaults={};static datasetElementType=null;static dataElementType=null;constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){let t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=it(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&is(this._cachedMeta),this.index=t}linkScales(){let t=this.chart,e=this._cachedMeta,i=this.getDataset(),n=(t,e,i,n)=>"x"===t?e:"r"===t?n:i,o=e.xAxisID=Z(i.xAxisID,io(t,"x")),s=e.yAxisID=Z(i.yAxisID,io(t,"y")),a=e.rAxisID=Z(i.rAxisID,io(t,"r")),r=e.indexAxis,h=e.iAxisID=n(r,o,s,a),l=e.vAxisID=n(r,s,o,a);e.xScale=this.getScaleForId(o),e.yScale=this.getScaleForId(s),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(h),e.vScale=this.getScaleForId(l)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){let e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){let t=this._cachedMeta;this._data&&tO(this._data,this),t._stacked&&is(t)}_dataCheck(){let t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(B(e))this._data=function(t){let e,i,n;let o=Object.keys(t),s=Array(o.length);for(e=0,i=o.length;e<i;++e)n=o[e],s[e]={x:n,y:t[n]};return s}(e);else if(i!==e){if(i){tO(i,this);let t=this._cachedMeta;is(t),t._parsed=[]}e&&Object.isExtensible(e)&&function(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),tE.forEach(e=>{let i="_onData"+tt(e),n=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value(...e){let o=n.apply(this,e);return t._chartjs.listeners.forEach(t=>{"function"==typeof t[i]&&t[i](...e)}),o}})})}(e,this),this._syncList=[],this._data=e}}addElements(){let t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){let e=this._cachedMeta,i=this.getDataset(),n=!1;this._dataCheck();let o=e._stacked;e._stacked=it(e.vScale,e),e.stack!==i.stack&&(n=!0,is(e),e.stack=i.stack),this._resyncElements(t),(n||o!==e._stacked)&&ii(this,e._parsed)}configure(){let t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){let i,n,o;let{_cachedMeta:s,_data:a}=this,{iScale:r,_stacked:h}=s,l=r.axis,c=0===t&&e===a.length||s._sorted,d=t>0&&s._parsed[t-1];if(!1===this._parsing)s._parsed=a,s._sorted=!0,o=a;else{o=R(a[t])?this.parseArrayData(s,a,t,e):B(a[t])?this.parseObjectData(s,a,t,e):this.parsePrimitiveData(s,a,t,e);let r=()=>null===n[l]||d&&n[l]<d[l];for(i=0;i<e;++i)s._parsed[i+t]=n=o[i],c&&(r()&&(c=!1),d=n);s._sorted=c}h&&ii(this,o)}parsePrimitiveData(t,e,i,n){let o,s;let{iScale:a,vScale:r}=t,h=a.axis,l=r.axis,c=a.getLabels(),d=a===r,u=Array(n);for(o=0;o<n;++o)s=o+i,u[o]={[h]:d||a.parse(c[s],s),[l]:r.parse(e[s],s)};return u}parseArrayData(t,e,i,n){let o,s,a;let{xScale:r,yScale:h}=t,l=Array(n);for(o=0;o<n;++o)a=e[s=o+i],l[o]={x:r.parse(a[0],s),y:h.parse(a[1],s)};return l}parseObjectData(t,e,i,n){let o,s,a;let{xScale:r,yScale:h}=t,{xAxisKey:l="x",yAxisKey:c="y"}=this._parsing,d=Array(n);for(o=0;o<n;++o)a=e[s=o+i],d[o]={x:r.parse(Q(a,l),s),y:h.parse(Q(a,c),s)};return d}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){let n=this.chart,o=this._cachedMeta,s=e[t.axis],a={keys:e9(n,!0),values:e._stacks[t.axis]._visualValues};return e7(a,s,o.index,{mode:i})}updateRangeFromParsed(t,e,i,n){let o=i[e.axis],s=null===o?NaN:o,a=n&&i._stacks[e.axis];n&&a&&(n.values=a,s=e7(n,o,this._cachedMeta.index)),t.min=Math.min(t.min,s),t.max=Math.max(t.max,s)}getMinMax(t,e){let i,n;let o=this._cachedMeta,s=o._parsed,a=o._sorted&&t===o.iScale,r=s.length,h=this._getOtherScale(t),l=ih(e,o,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:d,max:u}=function(t){let{min:e,max:i,minDefined:n,maxDefined:o}=t.getUserBounds();return{min:n?e:Number.NEGATIVE_INFINITY,max:o?i:Number.POSITIVE_INFINITY}}(h);function p(){n=s[i];let e=n[h.axis];return!N(n[t.axis])||d>e||u<e}for(i=0;i<r&&(p()||(this.updateRangeFromParsed(c,t,n,l),!a));++i);if(a){for(i=r-1;i>=0;--i)if(!p()){this.updateRangeFromParsed(c,t,n,l);break}}return c}getAllParsedValues(t){let e,i,n;let o=this._cachedMeta._parsed,s=[];for(e=0,i=o.length;e<i;++e)N(n=o[e][t.axis])&&s.push(n);return s}getMaxOverflow(){return!1}getLabelAndValue(t){let e=this._cachedMeta,i=e.iScale,n=e.vScale,o=this.getParsed(t);return{label:i?""+i.getLabelForValue(o[i.axis]):"",value:n?""+n.getLabelForValue(o[n.axis]):""}}_update(t){var e;let i,n,o,s;let a=this._cachedMeta;this.update(t||"default"),a._clip=(B(e=Z(this.options.clip,function(t,e,i){if(!1===i)return!1;let n=e6(t,i),o=e6(e,i);return{top:o.end,right:n.end,bottom:o.start,left:n.start}}(a.xScale,a.yScale,this.getMaxOverflow())))?(i=e.top,n=e.right,o=e.bottom,s=e.left):i=n=o=s=e,{top:i,right:n,bottom:o,left:s,disabled:!1===e})}update(t){}draw(){let t;let e=this._ctx,i=this.chart,n=this._cachedMeta,o=n.data||[],s=i.chartArea,a=[],r=this._drawStart||0,h=this._drawCount||o.length-r,l=this.options.drawActiveElementsOnTop;for(n.dataset&&n.dataset.draw(e,s,r,h),t=r;t<r+h;++t){let i=o[t];i.hidden||(i.active&&l?a.push(i):i.draw(e,s))}for(t=0;t<a.length;++t)a[t].draw(e,s)}getStyle(t,e){let i=e?"active":"default";return void 0===t&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){var n;let o;let s=this.getDataset();if(t>=0&&t<this._cachedMeta.data.length){let e=this._cachedMeta.data[t];(o=e.$context||(e.$context=em(this.getContext(),{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"}))).parsed=this.getParsed(t),o.raw=s.data[t],o.index=o.dataIndex=t}else(o=this.$context||(this.$context=em(this.chart.getContext(),{active:!1,dataset:void 0,datasetIndex:n=this.index,index:n,mode:"default",type:"dataset"}))).dataset=s,o.index=o.datasetIndex=this.index;return o.active=!!e,o.mode=i,o}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){let n="active"===e,o=this._cachedDataOpts,s=t+"-"+e,a=o[s],r=this.enableOptionSharing&&te(i);if(a)return ir(a,r);let h=this.chart.config,l=h.datasetElementScopeKeys(this._type,t),c=n?[`${t}Hover`,"hover",t,""]:[t,""],d=h.getOptionScopes(this.getDataset(),l),u=Object.keys(t5.elements[t]),p=h.resolveNamedOptions(d,u,()=>this.getContext(i,n,e),c);return p.$shared&&(p.$shared=r,o[s]=Object.freeze(ir(p,r))),p}_resolveAnimations(t,e,i){let n;let o=this.chart,s=this._cachedDataOpts,a=`animation-${e}`,r=s[a];if(r)return r;if(!1!==o.options.animation){let o=this.chart.config,s=o.datasetAnimationScopeKeys(this._type,e),a=o.getOptionScopes(this.getDataset(),s);n=o.createResolver(a,this.getContext(t,i,e))}let h=new e4(o,n&&n.animations);return n&&n._cacheable&&(s[a]=Object.freeze(h)),h}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||ia(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){let i=this.resolveDataElementOptions(t,e),n=this._sharedOptions,o=this.getSharedOptions(i),s=this.includeOptions(e,o)||o!==n;return this.updateSharedOptions(o,e,i),{sharedOptions:o,includeOptions:s}}updateElement(t,e,i,n){ia(n)?Object.assign(t,i):this._resolveAnimations(e,n).update(t,i)}updateSharedOptions(t,e,i){t&&!ia(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,n){t.active=n;let o=this.getStyle(e,n);this._resolveAnimations(e,i,n).update(t,{options:!n&&this.getSharedOptions(o)||o})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){let e=this._data,i=this._cachedMeta.data;for(let[t,e,i]of this._syncList)this[t](e,i);this._syncList=[];let n=i.length,o=e.length,s=Math.min(o,n);s&&this.parse(0,s),o>n?this._insertElements(n,o-n,t):o<n&&this._removeElements(o,n-o)}_insertElements(t,e,i=!0){let n;let o=this._cachedMeta,s=o.data,a=t+e,r=t=>{for(t.length+=e,n=t.length-1;n>=a;n--)t[n]=t[n-e]};for(r(s),n=t;n<a;++n)s[n]=new this.dataElementType;this._parsing&&r(o._parsed),this.parse(t,e),i&&this.updateElements(s,t,e,"reset")}updateElements(t,e,i,n){}_removeElements(t,e){let i=this._cachedMeta;if(this._parsing){let n=i._parsed.splice(t,e);i._stacked&&is(i,n)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{let[e,i,n]=t;this[e](i,n)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){let t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);let i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}function ic(t,e,i,n){return R(t)?function(t,e,i,n){let o=i.parse(t[0],n),s=i.parse(t[1],n),a=Math.min(o,s),r=Math.max(o,s),h=a,l=r;Math.abs(a)>Math.abs(r)&&(h=r,l=a),e[i.axis]=l,e._custom={barStart:h,barEnd:l,start:o,end:s,min:a,max:r}}(t,e,i,n):e[i.axis]=i.parse(t,n),e}function id(t,e,i,n){let o,s,a,r;let h=t.iScale,l=t.vScale,c=h.getLabels(),d=h===l,u=[];for(o=i,s=i+n;o<s;++o)r=e[o],(a={})[h.axis]=d||h.parse(c[o],o),u.push(ic(r,a,l,o));return u}function iu(t){return t&&void 0!==t.barStart&&void 0!==t.barEnd}function ip(t,e,i,n){var o;return t=n?im(t=(o=t)===e?i:o===i?e:o,i,e):im(t,e,i)}function im(t,e,i){return"start"===t?e:"end"===t?i:t}class ig extends il{static id="doughnut";static defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"};static descriptors={_scriptable:t=>"spacing"!==t,_indexable:t=>"spacing"!==t&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){let e=t.data;if(e.labels.length&&e.datasets.length){let{labels:{pointStyle:i,color:n}}=t.legend.options;return e.labels.map((e,o)=>{let s=t.getDatasetMeta(0),a=s.controller.getStyle(o);return{text:e,fillStyle:a.backgroundColor,strokeStyle:a.borderColor,fontColor:n,lineWidth:a.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(o),index:o}})}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}}}};constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){let i=this.getDataset().data,n=this._cachedMeta;if(!1===this._parsing)n._parsed=i;else{let o,s,a=t=>+i[t];if(B(i[t])){let{key:t="value"}=this._parsing;a=e=>+Q(i[e],t)}for(o=t,s=t+e;o<s;++o)n._parsed[o]=a(o)}}_getRotation(){return tv(this.options.rotation-90)}_getCircumference(){return tv(this.options.circumference)}_getRotationExtents(){let t=ts,e=-ts;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)&&this.chart.getDatasetMeta(i).type===this._type){let n=this.chart.getDatasetMeta(i).controller,o=n._getRotation(),s=n._getCircumference();t=Math.min(t,o),e=Math.max(e,o+s)}return{rotation:t,circumference:e-t}}update(t){let e=this.chart,{chartArea:i}=e,n=this._cachedMeta,o=n.data,s=this.getMaxBorderWidth()+this.getMaxOffset(o)+this.options.spacing,a=Math.max((Math.min(i.width,i.height)-s)/2,0),r=Math.min(j(this.options.cutout,a),1),h=this._getRingWeight(this.index),{circumference:l,rotation:c}=this._getRotationExtents(),{ratioX:d,ratioY:u,offsetX:p,offsetY:f}=function(t,e,i){let n=1,o=1,s=0,a=0;if(e<ts){let r=t+e,h=Math.cos(t),l=Math.sin(t),c=Math.cos(r),d=Math.sin(r),u=(e,n,o)=>tP(e,t,r,!0)?1:Math.max(n,n*i,o,o*i),p=(e,n,o)=>tP(e,t,r,!0)?-1:Math.min(n,n*i,o,o*i),f=u(0,h,c),m=u(tl,l,d),g=p(to,h,c),_=p(to+tl,l,d);n=(f-g)/2,o=(m-_)/2,s=-(f+g)/2,a=-(m+_)/2}return{ratioX:n,ratioY:o,offsetX:s,offsetY:a}}(c,l,r),m=(i.width-s)/d,g=(i.height-s)/u,_=W(this.options.radius,Math.max(Math.min(m,g)/2,0)),v=Math.max(_*r,0),y=(_-v)/this._getVisibleDatasetWeightTotal();this.offsetX=p*_,this.offsetY=f*_,n.total=this.calculateTotal(),this.outerRadius=_-y*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-y*h,0),this.updateElements(o,0,o.length,t)}_circumference(t,e){let i=this.options,n=this._cachedMeta,o=this._getCircumference();return e&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||null===n._parsed[t]||n.data[t].hidden?0:this.calculateCircumference(n._parsed[t]*o/ts)}updateElements(t,e,i,n){let o;let s="reset"===n,a=this.chart,r=a.chartArea,h=a.options,l=h.animation,c=(r.left+r.right)/2,d=(r.top+r.bottom)/2,u=s&&l.animateScale,p=u?0:this.innerRadius,f=u?0:this.outerRadius,{sharedOptions:m,includeOptions:g}=this._getSharedOptions(e,n),_=this._getRotation();for(o=0;o<e;++o)_+=this._circumference(o,s);for(o=e;o<e+i;++o){let e=this._circumference(o,s),i=t[o],a={x:c+this.offsetX,y:d+this.offsetY,startAngle:_,endAngle:_+e,circumference:e,outerRadius:f,innerRadius:p};g&&(a.options=m||this.resolveDataElementOptions(o,i.active?"active":n)),_+=e,this.updateElement(i,o,a,n)}}calculateTotal(){let t;let e=this._cachedMeta,i=e.data,n=0;for(t=0;t<i.length;t++){let o=e._parsed[t];null!==o&&!isNaN(o)&&this.chart.getDataVisibility(t)&&!i[t].hidden&&(n+=Math.abs(o))}return n}calculateCircumference(t){let e=this._cachedMeta.total;return e>0&&!isNaN(t)?ts*(Math.abs(t)/e):0}getLabelAndValue(t){let e=this._cachedMeta,i=this.chart,n=i.data.labels||[],o=tX(e._parsed[t],i.options.locale);return{label:n[t]||"",value:o}}getMaxBorderWidth(t){let e,i,n,o,s,a=0,r=this.chart;if(!t){for(e=0,i=r.data.datasets.length;e<i;++e)if(r.isDatasetVisible(e)){t=(n=r.getDatasetMeta(e)).data,o=n.controller;break}}if(!t)return 0;for(e=0,i=t.length;e<i;++e)"inner"!==(s=o.resolveDataElementOptions(e)).borderAlign&&(a=Math.max(a,s.borderWidth||0,s.hoverBorderWidth||0));return a}getMaxOffset(t){let e=0;for(let i=0,n=t.length;i<n;++i){let t=this.resolveDataElementOptions(i);e=Math.max(e,t.offset||0,t.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(e+=this._getRingWeight(i));return e}_getRingWeight(t){return Math.max(Z(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}class i_ extends il{static id="polarArea";static defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){let e=t.data;if(e.labels.length&&e.datasets.length){let{labels:{pointStyle:i,color:n}}=t.legend.options;return e.labels.map((e,o)=>{let s=t.getDatasetMeta(0),a=s.controller.getStyle(o);return{text:e,fillStyle:a.backgroundColor,strokeStyle:a.borderColor,fontColor:n,lineWidth:a.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(o),index:o}})}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){let e=this._cachedMeta,i=this.chart,n=i.data.labels||[],o=tX(e._parsed[t].r,i.options.locale);return{label:n[t]||"",value:o}}parseObjectData(t,e,i,n){return eT.bind(this)(t,e,i,n)}update(t){let e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){let t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((t,i)=>{let n=this.getParsed(i).r;!isNaN(n)&&this.chart.getDataVisibility(i)&&(n<e.min&&(e.min=n),n>e.max&&(e.max=n))}),e}_updateRadius(){let t=this.chart,e=t.chartArea,i=t.options,n=Math.min(e.right-e.left,e.bottom-e.top),o=Math.max(n/2,0),s=Math.max(i.cutoutPercentage?o/100*i.cutoutPercentage:1,0),a=(o-s)/t.getVisibleDatasetCount();this.outerRadius=o-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,e,i,n){let o;let s="reset"===n,a=this.chart,r=a.options,h=r.animation,l=this._cachedMeta.rScale,c=l.xCenter,d=l.yCenter,u=l.getIndexAngle(0)-.5*to,p=u,f=360/this.countVisibleElements();for(o=0;o<e;++o)p+=this._computeAngle(o,n,f);for(o=e;o<e+i;o++){let e=t[o],i=p,r=p+this._computeAngle(o,n,f),m=a.getDataVisibility(o)?l.getDistanceFromCenterForValue(this.getParsed(o).r):0;p=r,s&&(h.animateScale&&(m=0),h.animateRotate&&(i=r=u));let g={x:c,y:d,innerRadius:0,outerRadius:m,startAngle:i,endAngle:r,options:this.resolveDataElementOptions(o,e.active?"active":n)};this.updateElement(e,o,g,n)}}countVisibleElements(){let t=this._cachedMeta,e=0;return t.data.forEach((t,i)=>{!isNaN(this.getParsed(i).r)&&this.chart.getDataVisibility(i)&&e++}),e}_computeAngle(t,e,i){return this.chart.getDataVisibility(t)?tv(this.resolveDataElementOptions(t,e).angle||i):0}}var iv=/*#__PURE__*/Object.freeze({__proto__:null,BarController:class extends il{static id="bar";static defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}};static overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};parsePrimitiveData(t,e,i,n){return id(t,e,i,n)}parseArrayData(t,e,i,n){return id(t,e,i,n)}parseObjectData(t,e,i,n){let o,s,a,r;let{iScale:h,vScale:l}=t,{xAxisKey:c="x",yAxisKey:d="y"}=this._parsing,u="x"===h.axis?c:d,p="x"===l.axis?c:d,f=[];for(o=i,s=i+n;o<s;++o)r=e[o],(a={})[h.axis]=h.parse(Q(r,u),o),f.push(ic(Q(r,p),a,l,o));return f}updateRangeFromParsed(t,e,i,n){super.updateRangeFromParsed(t,e,i,n);let o=i._custom;o&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,o.min),t.max=Math.max(t.max,o.max))}getMaxOverflow(){return 0}getLabelAndValue(t){let e=this._cachedMeta,{iScale:i,vScale:n}=e,o=this.getParsed(t),s=o._custom,a=iu(s)?"["+s.start+", "+s.end+"]":""+n.getLabelForValue(o[n.axis]);return{label:""+i.getLabelForValue(o[i.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();let t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){let e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,i,n){let o="reset"===n,{index:s,_cachedMeta:{vScale:a}}=this,r=a.getBasePixel(),h=a.isHorizontal(),l=this._getRuler(),{sharedOptions:c,includeOptions:d}=this._getSharedOptions(e,n);for(let u=e;u<e+i;u++){let e=this.getParsed(u),i=o||I(e[a.axis])?{base:r,head:r}:this._calculateBarValuePixels(u),p=this._calculateBarIndexPixels(u,l),f=(e._stacks||{})[a.axis],m={horizontal:h,base:i.base,enableBorderRadius:!f||iu(e._custom)||s===f._top||s===f._bottom,x:h?i.head:p.center,y:h?p.center:i.head,height:h?p.size:Math.abs(i.size),width:h?Math.abs(i.size):p.size};d&&(m.options=c||this.resolveDataElementOptions(u,t[u].active?"active":n));let g=m.options||t[u].options;!function(t,e,i,n){let o,s,a,r,h,l=e.borderSkipped,c={};if(!l){t.borderSkipped=c;return}if(!0===l){t.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}let{start:d,end:u,reverse:p,top:f,bottom:m}=(t.horizontal?(o=t.base>t.x,s="left",a="right"):(o=t.base<t.y,s="bottom",a="top"),o?(r="end",h="start"):(r="start",h="end"),{start:s,end:a,reverse:o,top:r,bottom:h});"middle"===l&&i&&(t.enableBorderRadius=!0,(i._top||0)===n?l=f:(i._bottom||0)===n?l=m:(c[ip(m,d,u,p)]=!0,l=f)),c[ip(l,d,u,p)]=!0,t.borderSkipped=c}(m,g,f,s),function(t,{inflateAmount:e},i){t.inflateAmount="auto"===e?1===i?.33:0:e}(m,g,l.ratio),this.updateElement(t[u],u,m,n)}}_getStacks(t,e){let{iScale:i}=this._cachedMeta,n=i.getMatchingVisibleMetas(this._type).filter(t=>t.controller.options.grouped),o=i.options.stacked,s=[],a=t=>{let i=t.controller.getParsed(e),n=i&&i[t.vScale.axis];if(I(n)||isNaN(n))return!0};for(let i of n)if(!(void 0!==e&&a(i))&&((!1===o||-1===s.indexOf(i.stack)||void 0===o&&void 0===i.stack)&&s.push(i.stack),i.index===t))break;return s.length||s.push(void 0),s}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,e,i){let n=this._getStacks(t,i),o=void 0!==e?n.indexOf(e):-1;return -1===o?n.length-1:o}_getRuler(){let t,e;let i=this.options,n=this._cachedMeta,o=n.iScale,s=[];for(t=0,e=n.data.length;t<e;++t)s.push(o.getPixelForValue(this.getParsed(t)[o.axis],t));let a=i.barThickness,r=a||function(t){let e,i,n,o;let s=t.iScale,a=function(t,e){if(!t._cache.$bar){let i=t.getMatchingVisibleMetas(e),n=[];for(let e=0,o=i.length;e<o;e++)n=n.concat(i[e].controller.getAllParsedValues(t));t._cache.$bar=tz(n.sort((t,e)=>t-e))}return t._cache.$bar}(s,t.type),r=s._length,h=()=>{32767!==n&&-32768!==n&&(te(o)&&(r=Math.min(r,Math.abs(n-o)||r)),o=n)};for(e=0,i=a.length;e<i;++e)n=s.getPixelForValue(a[e]),h();for(e=0,o=void 0,i=s.ticks.length;e<i;++e)n=s.getPixelForTick(e),h();return r}(n);return{min:r,pixels:s,start:o._startPixel,end:o._endPixel,stackCount:this._getStackCount(),scale:o,grouped:i.grouped,ratio:a?1:i.categoryPercentage*i.barPercentage}}_calculateBarValuePixels(t){let e,i;let{_cachedMeta:{vScale:n,_stacked:o,index:s},options:{base:a,minBarLength:r}}=this,h=a||0,l=this.getParsed(t),c=l._custom,d=iu(c),u=l[n.axis],p=0,f=o?this.applyStack(n,l,o):u;f!==u&&(p=f-u,f=u),d&&(u=c.barStart,f=c.barEnd-c.barStart,0!==u&&tp(u)!==tp(c.barEnd)&&(p=0),p+=u);let m=I(a)||d?p:a,g=n.getPixelForValue(m);if(Math.abs(i=(e=this.chart.getDataVisibility(t)?n.getPixelForValue(p+f):g)-g)<r){var _;i=(0!==(_=i)?tp(_):(n.isHorizontal()?1:-1)*(n.min>=h?1:-1))*r,u===h&&(g-=i/2);let t=n.getPixelForDecimal(0),a=n.getPixelForDecimal(1);e=(g=Math.max(Math.min(g,Math.max(t,a)),Math.min(t,a)))+i,o&&!d&&(l._stacks[n.axis]._visualValues[s]=n.getValueForPixel(e)-n.getValueForPixel(g))}if(g===n.getPixelForValue(h)){let t=tp(i)*n.getLineWidthForValue(h)/2;g+=t,i-=t}return{size:i,base:g,head:e,center:e+i/2}}_calculateBarIndexPixels(t,e){let i,n;let o=e.scale,s=this.options,a=s.skipNull,r=Z(s.maxBarThickness,1/0);if(e.grouped){let o=a?this._getStackCount(t):e.stackCount,h="flex"===s.barThickness?function(t,e,i,n){let o=e.pixels,s=o[t],a=t>0?o[t-1]:null,r=t<o.length-1?o[t+1]:null,h=i.categoryPercentage;null===a&&(a=s-(null===r?e.end-e.start:r-s)),null===r&&(r=s+s-a);let l=s-(s-Math.min(a,r))/2*h,c=Math.abs(r-a)/2*h;return{chunk:c/n,ratio:i.barPercentage,start:l}}(t,e,s,o):function(t,e,i,n){let o,s;let a=i.barThickness;return I(a)?(o=e.min*i.categoryPercentage,s=i.barPercentage):(o=a*n,s=1),{chunk:o/n,ratio:s,start:e.pixels[t]-o/2}}(t,e,s,o),l=this._getStackIndex(this.index,this._cachedMeta.stack,a?t:void 0);i=h.start+h.chunk*l+h.chunk/2,n=Math.min(r,h.chunk*h.ratio)}else i=o.getPixelForValue(this.getParsed(t)[o.axis],t),n=Math.min(r,e.min*e.ratio);return{base:i-n/2,head:i+n/2,center:i,size:n}}draw(){let t=this._cachedMeta,e=t.vScale,i=t.data,n=i.length,o=0;for(;o<n;++o)null!==this.getParsed(o)[e.axis]&&i[o].draw(this._ctx)}},BubbleController:class extends il{static id="bubble";static defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}};static overrides={scales:{x:{type:"linear"},y:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,i,n){let o=super.parsePrimitiveData(t,e,i,n);for(let t=0;t<o.length;t++)o[t]._custom=this.resolveDataElementOptions(t+i).radius;return o}parseArrayData(t,e,i,n){let o=super.parseArrayData(t,e,i,n);for(let t=0;t<o.length;t++){let n=e[i+t];o[t]._custom=Z(n[2],this.resolveDataElementOptions(t+i).radius)}return o}parseObjectData(t,e,i,n){let o=super.parseObjectData(t,e,i,n);for(let t=0;t<o.length;t++){let n=e[i+t];o[t]._custom=Z(n&&n.r&&+n.r,this.resolveDataElementOptions(t+i).radius)}return o}getMaxOverflow(){let t=this._cachedMeta.data,e=0;for(let i=t.length-1;i>=0;--i)e=Math.max(e,t[i].size(this.resolveDataElementOptions(i))/2);return e>0&&e}getLabelAndValue(t){let e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:n,yScale:o}=e,s=this.getParsed(t),a=n.getLabelForValue(s.x),r=o.getLabelForValue(s.y),h=s._custom;return{label:i[t]||"",value:"("+a+", "+r+(h?", "+h:"")+")"}}update(t){let e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,i,n){let o="reset"===n,{iScale:s,vScale:a}=this._cachedMeta,{sharedOptions:r,includeOptions:h}=this._getSharedOptions(e,n),l=s.axis,c=a.axis;for(let d=e;d<e+i;d++){let e=t[d],i=!o&&this.getParsed(d),u={},p=u[l]=o?s.getPixelForDecimal(.5):s.getPixelForValue(i[l]),f=u[c]=o?a.getBasePixel():a.getPixelForValue(i[c]);u.skip=isNaN(p)||isNaN(f),h&&(u.options=r||this.resolveDataElementOptions(d,e.active?"active":n),o&&(u.options.radius=0)),this.updateElement(e,d,u,n)}}resolveDataElementOptions(t,e){let i=this.getParsed(t),n=super.resolveDataElementOptions(t,e);n.$shared&&(n=Object.assign({},n,{$shared:!1}));let o=n.radius;return"active"!==e&&(n.radius=0),n.radius+=Z(i&&i._custom,o),n}},DoughnutController:ig,LineController:class extends il{static id="line";static defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1};static overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){let e=this._cachedMeta,{dataset:i,data:n=[],_dataset:o}=e,s=this.chart._animationsDisabled,{start:a,count:r}=tN(e,n,s);this._drawStart=a,this._drawCount=r,tF(e)&&(a=0,r=n.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!o._decimated,i.points=n;let h=this.resolveDatasetElementOptions(t);this.options.showLine||(h.borderWidth=0),h.segment=this.options.segment,this.updateElement(i,void 0,{animated:!s,options:h},t),this.updateElements(n,a,r,t)}updateElements(t,e,i,n){let o="reset"===n,{iScale:s,vScale:a,_stacked:r,_dataset:h}=this._cachedMeta,{sharedOptions:l,includeOptions:c}=this._getSharedOptions(e,n),d=s.axis,u=a.axis,{spanGaps:p,segment:f}=this.options,m=tg(p)?p:Number.POSITIVE_INFINITY,g=this.chart._animationsDisabled||o||"none"===n,_=e+i,v=t.length,y=e>0&&this.getParsed(e-1);for(let i=0;i<v;++i){let p=t[i],v=g?p:{};if(i<e||i>=_){v.skip=!0;continue}let x=this.getParsed(i),b=I(x[u]),w=v[d]=s.getPixelForValue(x[d],i),M=v[u]=o||b?a.getBasePixel():a.getPixelForValue(r?this.applyStack(a,x,r):x[u],i);v.skip=isNaN(w)||isNaN(M)||b,v.stop=i>0&&Math.abs(x[d]-y[d])>m,f&&(v.parsed=x,v.raw=h.data[i]),c&&(v.options=l||this.resolveDataElementOptions(i,p.active?"active":n)),g||this.updateElement(p,i,v,n),y=x}}getMaxOverflow(){let t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,n=t.data||[];if(!n.length)return i;let o=n[0].size(this.resolveDataElementOptions(0)),s=n[n.length-1].size(this.resolveDataElementOptions(n.length-1));return Math.max(i,o,s)/2}draw(){let t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}},PieController:class extends ig{static id="pie";static defaults={cutout:0,rotation:0,circumference:360,radius:"100%"}},PolarAreaController:i_,RadarController:class extends il{static id="radar";static defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}};static overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};getLabelAndValue(t){let e=this._cachedMeta.vScale,i=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(i[e.axis])}}parseObjectData(t,e,i,n){return eT.bind(this)(t,e,i,n)}update(t){let e=this._cachedMeta,i=e.dataset,n=e.data||[],o=e.iScale.getLabels();if(i.points=n,"resize"!==t){let e=this.resolveDatasetElementOptions(t);this.options.showLine||(e.borderWidth=0);let s={_loop:!0,_fullLoop:o.length===n.length,options:e};this.updateElement(i,void 0,s,t)}this.updateElements(n,0,n.length,t)}updateElements(t,e,i,n){let o=this._cachedMeta.rScale,s="reset"===n;for(let a=e;a<e+i;a++){let e=t[a],i=this.resolveDataElementOptions(a,e.active?"active":n),r=o.getPointPositionForValue(a,this.getParsed(a).r),h=s?o.xCenter:r.x,l=s?o.yCenter:r.y,c={x:h,y:l,angle:r.angle,skip:isNaN(h)||isNaN(l),options:i};this.updateElement(e,a,c,n)}}},ScatterController:class extends il{static id="scatter";static defaults={datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1};static overrides={interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}};getLabelAndValue(t){let e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:n,yScale:o}=e,s=this.getParsed(t),a=n.getLabelForValue(s.x),r=o.getLabelForValue(s.y);return{label:i[t]||"",value:"("+a+", "+r+")"}}update(t){let e=this._cachedMeta,{data:i=[]}=e,n=this.chart._animationsDisabled,{start:o,count:s}=tN(e,i,n);if(this._drawStart=o,this._drawCount=s,tF(e)&&(o=0,s=i.length),this.options.showLine){this.datasetElementType||this.addElements();let{dataset:o,_dataset:s}=e;o._chart=this.chart,o._datasetIndex=this.index,o._decimated=!!s._decimated,o.points=i;let a=this.resolveDatasetElementOptions(t);a.segment=this.options.segment,this.updateElement(o,void 0,{animated:!n,options:a},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(i,o,s,t)}addElements(){let{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,i,n){let o="reset"===n,{iScale:s,vScale:a,_stacked:r,_dataset:h}=this._cachedMeta,l=this.resolveDataElementOptions(e,n),c=this.getSharedOptions(l),d=this.includeOptions(n,c),u=s.axis,p=a.axis,{spanGaps:f,segment:m}=this.options,g=tg(f)?f:Number.POSITIVE_INFINITY,_=this.chart._animationsDisabled||o||"none"===n,v=e>0&&this.getParsed(e-1);for(let l=e;l<e+i;++l){let e=t[l],i=this.getParsed(l),f=_?e:{},y=I(i[p]),x=f[u]=s.getPixelForValue(i[u],l),b=f[p]=o||y?a.getBasePixel():a.getPixelForValue(r?this.applyStack(a,i,r):i[p],l);f.skip=isNaN(x)||isNaN(b)||y,f.stop=l>0&&Math.abs(i[u]-v[u])>g,m&&(f.parsed=i,f.raw=h.data[l]),d&&(f.options=c||this.resolveDataElementOptions(l,e.active?"active":n)),_||this.updateElement(e,l,f,n),v=i}this.updateSharedOptions(c,n,l)}getMaxOverflow(){let t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let t=0;for(let i=e.length-1;i>=0;--i)t=Math.max(t,e[i].size(this.resolveDataElementOptions(i))/2);return t>0&&t}let i=t.dataset,n=i.options&&i.options.borderWidth||0;if(!e.length)return n;let o=e[0].size(this.resolveDataElementOptions(0)),s=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(n,o,s)/2}}});/**
 * @namespace Chart._adapters
 * @since 2.8.0
 * @private
 */function iy(){throw Error("This method is not implemented: Check that a complete date adapter is provided.")}/**
 * Date adapter (current used by the time scale)
 * @namespace Chart._adapters._date
 * @memberof Chart._adapters
 * @private
 */class ix{/**
   * Override default date adapter methods.
   * Accepts type parameter to define options type.
   * @example
   * Chart._adapters._date.override<{myAdapterOption: string}>({
   *   init() {
   *     console.log(this.options.myAdapterOption);
   *   }
   * })
   */static override(t){Object.assign(ix.prototype,t)}options;constructor(t){this.options=t||{}}// eslint-disable-next-line @typescript-eslint/no-empty-function
init(){}formats(){return iy()}parse(){return iy()}format(){return iy()}add(){return iy()}diff(){return iy()}startOf(){return iy()}endOf(){return iy()}}var ib={_date:ix};function iw(t,e,i,n,o){let s=t.getSortedVisibleDatasetMetas(),a=i[e];for(let t=0,i=s.length;t<i;++t){let{index:i,data:r}=s[t],{lo:h,hi:l}=function(t,e,i,n){let{controller:o,data:s,_sorted:a}=t,r=o._cachedMeta.iScale;if(r&&e===r.axis&&"r"!==e&&a&&s.length){let t=r._reversePixels?tC:tS;if(!n)return t(s,e,i);if(o._sharedOptions){let n=s[0],o="function"==typeof n.getRange&&n.getRange(e);if(o){let n=t(s,e,i-o),a=t(s,e,i+o);return{lo:n.lo,hi:a.hi}}}}return{lo:0,hi:s.length-1}}(s[t],e,a,o);for(let t=h;t<=l;++t){let e=r[t];e.skip||n(e,i,t)}}}function iM(t,e,i,n,o){let s=[];return(o||t.isPointInArea(e))&&iw(t,i,e,function(i,a,r){(o||t7(i,t.chartArea,0))&&i.inRange(e.x,e.y,n)&&s.push({element:i,datasetIndex:a,index:r})},!0),s}function iP(t,e,i,n,o,s){let a;return s||t.isPointInArea(e)?"r"!==i||n?function(t,e,i,n,o,s){let a=[],r=function(t){let e=-1!==t.indexOf("x"),i=-1!==t.indexOf("y");return function(t,n){let o=e?Math.abs(t.x-n.x):0,s=i?Math.abs(t.y-n.y):0;return Math.sqrt(Math.pow(o,2)+Math.pow(s,2))}}(i),h=Number.POSITIVE_INFINITY;return iw(t,i,e,function(i,l,c){let d=i.inRange(e.x,e.y,o);if(n&&!d)return;let u=i.getCenterPoint(o),p=!!s||t.isPointInArea(u);if(!p&&!d)return;let f=r(e,u);f<h?(a=[{element:i,datasetIndex:l,index:c}],h=f):f===h&&a.push({element:i,datasetIndex:l,index:c})}),a}(t,e,i,n,o,s):(a=[],iw(t,i,e,function(t,i,n){let{startAngle:s,endAngle:r}=t.getProps(["startAngle","endAngle"],o),{angle:h}=tx(t,{x:e.x,y:e.y});tP(h,s,r)&&a.push({element:t,datasetIndex:i,index:n})}),a):[]}function iL(t,e,i,n,o){let s=[],a="x"===i?"inXRange":"inYRange",r=!1;return(iw(t,i,e,(t,n,h)=>{t[a](e[i],o)&&(s.push({element:t,datasetIndex:n,index:h}),r=r||t.inRange(e.x,e.y,o))}),n&&!r)?[]:s}var ik={modes:{index(t,e,i,n){let o=eF(e,t),s=i.axis||"x",a=i.includeInvisible||!1,r=i.intersect?iM(t,o,s,n,a):iP(t,o,s,!1,n,a),h=[];return r.length?(t.getSortedVisibleDatasetMetas().forEach(t=>{let e=r[0].index,i=t.data[e];i&&!i.skip&&h.push({element:i,datasetIndex:t.index,index:e})}),h):[]},dataset(t,e,i,n){let o=eF(e,t),s=i.axis||"xy",a=i.includeInvisible||!1,r=i.intersect?iM(t,o,s,n,a):iP(t,o,s,!1,n,a);if(r.length>0){let e=r[0].datasetIndex,i=t.getDatasetMeta(e).data;r=[];for(let t=0;t<i.length;++t)r.push({element:i[t],datasetIndex:e,index:t})}return r},point(t,e,i,n){let o=eF(e,t),s=i.axis||"xy",a=i.includeInvisible||!1;return iM(t,o,s,n,a)},nearest(t,e,i,n){let o=eF(e,t),s=i.axis||"xy",a=i.includeInvisible||!1;return iP(t,o,s,i.intersect,n,a)},x(t,e,i,n){let o=eF(e,t);return iL(t,o,"x",i.intersect,n)},y(t,e,i,n){let o=eF(e,t);return iL(t,o,"y",i.intersect,n)}}};const iT=["left","top","right","bottom"];function iS(t,e){return t.filter(t=>t.pos===e)}function iC(t,e){return t.filter(t=>-1===iT.indexOf(t.pos)&&t.box.axis===e)}function iE(t,e){return t.sort((t,i)=>{let n=e?i:t,o=e?t:i;return n.weight===o.weight?n.index-o.index:n.weight-o.weight})}function iO(t,e,i,n){return Math.max(t[i],e[i])+Math.max(t[n],e[n])}function iz(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function iA(t,e,i,n){let o,s,a,r,h,l;let c=[];for(o=0,s=t.length,h=0;o<s;++o){(r=(a=t[o]).box).update(a.width||e.w,a.height||e.h,function(t,e){let i=e.maxPadding;return function(t){let n={left:0,top:0,right:0,bottom:0};return t.forEach(t=>{n[t]=Math.max(e[t],i[t])}),n}(t?["left","right"]:["top","bottom"])}(a.horizontal,e));let{same:s,other:d}=function(t,e,i,n){let{pos:o,box:s}=i,a=t.maxPadding;if(!B(o)){i.size&&(t[o]-=i.size);let e=n[i.stack]||{size:0,count:1};e.size=Math.max(e.size,i.horizontal?s.height:s.width),i.size=e.size/e.count,t[o]+=i.size}s.getPadding&&iz(a,s.getPadding());let r=Math.max(0,e.outerWidth-iO(a,t,"left","right")),h=Math.max(0,e.outerHeight-iO(a,t,"top","bottom")),l=r!==t.w,c=h!==t.h;return t.w=r,t.h=h,i.horizontal?{same:l,other:c}:{same:c,other:l}}(e,i,a,n);h|=s&&c.length,l=l||d,r.fullSize||c.push(a)}return h&&iA(c,e,i,n)||l}function iD(t,e,i,n,o){t.top=i,t.left=e,t.right=e+n,t.bottom=i+o,t.width=n,t.height=o}function iI(t,e,i,n){let o=i.padding,{x:s,y:a}=e;for(let r of t){let t=r.box,h=n[r.stack]||{count:1,placed:0,weight:1},l=r.stackWeight/h.weight||1;if(r.horizontal){let n=e.w*l,s=h.size||t.height;te(h.start)&&(a=h.start),t.fullSize?iD(t,o.left,a,i.outerWidth-o.right-o.left,s):iD(t,e.left+h.placed,a,n,s),h.start=a,h.placed+=n,a=t.bottom}else{let n=e.h*l,a=h.size||t.width;te(h.start)&&(s=h.start),t.fullSize?iD(t,s,o.top,a,i.outerHeight-o.bottom-o.top):iD(t,s,e.top+h.placed,a,n),h.start=s,h.placed+=n,s=t.right}}e.x=s,e.y=a}var iR={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(t){e.draw(t)}}]},t.boxes.push(e)},removeBox(t,e){let i=t.boxes?t.boxes.indexOf(e):-1;-1!==i&&t.boxes.splice(i,1)},configure(t,e,i){e.fullSize=i.fullSize,e.position=i.position,e.weight=i.weight},update(t,e,i,n){if(!t)return;let o=eu(t.options.layout.padding),s=Math.max(e-o.width,0),a=Math.max(i-o.height,0),r=function(t){let e=function(t){let e,i,n,o,s,a;let r=[];for(e=0,i=(t||[]).length;e<i;++e)n=t[e],({position:o,options:{stack:s,stackWeight:a=1}}=n),r.push({index:e,box:n,pos:o,horizontal:n.isHorizontal(),weight:n.weight,stack:s&&o+s,stackWeight:a});return r}(t),i=iE(e.filter(t=>t.box.fullSize),!0),n=iE(iS(e,"left"),!0),o=iE(iS(e,"right")),s=iE(iS(e,"top"),!0),a=iE(iS(e,"bottom")),r=iC(e,"x"),h=iC(e,"y");return{fullSize:i,leftAndTop:n.concat(s),rightAndBottom:o.concat(h).concat(a).concat(r),chartArea:iS(e,"chartArea"),vertical:n.concat(o).concat(h),horizontal:s.concat(a).concat(r)}}(t.boxes),h=r.vertical,l=r.horizontal;H(t.boxes,t=>{"function"==typeof t.beforeLayout&&t.beforeLayout()});let c=h.reduce((t,e)=>e.box.options&&!1===e.box.options.display?t:t+1,0)||1,d=Object.freeze({outerWidth:e,outerHeight:i,padding:o,availableWidth:s,availableHeight:a,vBoxMaxWidth:s/2/c,hBoxMaxHeight:a/2}),u=Object.assign({},o);iz(u,eu(n));let p=Object.assign({maxPadding:u,w:s,h:a,x:o.left,y:o.top},o),f=function(t,e){let i,n,o;let s=function(t){let e={};for(let i of t){let{stack:t,pos:n,stackWeight:o}=i;if(!t||!iT.includes(n))continue;let s=e[t]||(e[t]={count:0,placed:0,weight:0,size:0});s.count++,s.weight+=o}return e}(t),{vBoxMaxWidth:a,hBoxMaxHeight:r}=e;for(i=0,n=t.length;i<n;++i){o=t[i];let{fullSize:n}=o.box,h=s[o.stack],l=h&&o.stackWeight/h.weight;o.horizontal?(o.width=l?l*a:n&&e.availableWidth,o.height=r):(o.width=a,o.height=l?l*r:n&&e.availableHeight)}return s}(h.concat(l),d);iA(r.fullSize,p,d,f),iA(h,p,d,f),iA(l,p,d,f)&&iA(h,p,d,f),function(t){let e=t.maxPadding;function i(i){let n=Math.max(e[i]-t[i],0);return t[i]+=n,n}t.y+=i("top"),t.x+=i("left"),i("right"),i("bottom")}(p),iI(r.leftAndTop,p,d,f),p.x+=p.w,p.y+=p.h,iI(r.rightAndBottom,p,d,f),t.chartArea={left:p.left,top:p.top,right:p.left+p.w,bottom:p.top+p.h,height:p.h,width:p.w},H(r.chartArea,e=>{let i=e.box;Object.assign(i,t.chartArea),i.update(p.w,p.h,{left:0,top:0,right:0,bottom:0})})}};class iB{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,n){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,n?Math.floor(e/n):i)}}isAttached(t){return!0}updateConfig(t){}}class iN extends iB{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const iF="$chartjs",iZ={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},ij=t=>null===t||""===t,iW=!!eW&&{passive:!0};function iV(t,e,i){t.canvas.removeEventListener(e,i,iW)}function iH(t,e){for(let i of t)if(i===e||i.contains(e))return!0}function iU(t,e,i){let n=t.canvas,o=new MutationObserver(t=>{let e=!1;for(let i of t)e=(e=e||iH(i.addedNodes,n))&&!iH(i.removedNodes,n);e&&i()});return o.observe(document,{childList:!0,subtree:!0}),o}function i$(t,e,i){let n=t.canvas,o=new MutationObserver(t=>{let e=!1;for(let i of t)e=(e=e||iH(i.removedNodes,n))&&!iH(i.addedNodes,n);e&&i()});return o.observe(document,{childList:!0,subtree:!0}),o}const iY=new Map;let iq=0;function iG(){let t=window.devicePixelRatio;t!==iq&&(iq=t,iY.forEach((e,i)=>{i.currentDevicePixelRatio!==t&&e()}))}function iX(t,e,i){let n=t.canvas,o=n&&eA(n);if(!o)return;let s=tD((t,e)=>{let n=o.clientWidth;i(t,e),n<o.clientWidth&&i()},window),a=new ResizeObserver(t=>{let e=t[0],i=e.contentRect.width,n=e.contentRect.height;(0!==i||0!==n)&&s(i,n)});return a.observe(o),iY.size||window.addEventListener("resize",iG),iY.set(t,s),a}function iK(t,e,i){i&&i.disconnect(),"resize"===e&&(iY.delete(t),iY.size||window.removeEventListener("resize",iG))}function iJ(t,e,i){let n=t.canvas,o=tD(e=>{null!==t.ctx&&i(function(t,e){let i=iZ[t.type]||t.type,{x:n,y:o}=eF(t,e);return{type:i,chart:e,native:t,x:void 0!==n?n:null,y:void 0!==o?o:null}}(e,t))},t);return!function(t,e,i){t.addEventListener(e,i,iW)}(n,e,o),o}class iQ extends iB{acquireContext(t,e){let i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(!function(t,e){let i=t.style,n=t.getAttribute("height"),o=t.getAttribute("width");if(t[iF]={initial:{height:n,width:o,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",i.boxSizing=i.boxSizing||"border-box",ij(o)){let e=eV(t,"width");void 0!==e&&(t.width=e)}if(ij(n)){if(""===t.style.height)t.height=t.width/(e||2);else{let e=eV(t,"height");void 0!==e&&(t.height=e)}}}(t,e),i):null}releaseContext(t){let e=t.canvas;if(!e[iF])return!1;let i=e[iF].initial;["height","width"].forEach(t=>{let n=i[t];I(n)?e.removeAttribute(t):e.setAttribute(t,n)});let n=i.style||{};return Object.keys(n).forEach(t=>{e.style[t]=n[t]}),e.width=e.width,delete e[iF],!0}addEventListener(t,e,i){this.removeEventListener(t,e);let n=t.$proxies||(t.$proxies={}),o={attach:iU,detach:i$,resize:iX}[e]||iJ;n[e]=o(t,e,i)}removeEventListener(t,e){let i=t.$proxies||(t.$proxies={}),n=i[e];if(!n)return;let o={attach:iK,detach:iK,resize:iK}[e]||iV;o(t,e,n),i[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,n){return(// eslint-disable-next-line complexity
function(t,e,i,n){let o=eI(t),s=eB(o,"margin"),a=eD(o.maxWidth,t,"clientWidth")||tr,r=eD(o.maxHeight,t,"clientHeight")||tr,h=function(t,e,i){let n,o;if(void 0===e||void 0===i){let s=eA(t);if(s){let t=s.getBoundingClientRect(),a=eI(s),r=eB(a,"border","width"),h=eB(a,"padding");// this is the border box of the container
e=t.width-h.width-r.width,i=t.height-h.height-r.height,n=eD(a.maxWidth,s,"clientWidth"),o=eD(a.maxHeight,s,"clientHeight")}else e=t.clientWidth,i=t.clientHeight}return{width:e,height:i,maxWidth:n||tr,maxHeight:o||tr}}(t,e,i),{width:l,height:c}=h;if("content-box"===o.boxSizing){let t=eB(o,"border","width"),e=eB(o,"padding");l-=e.width+t.width,c-=e.height+t.height}l=Math.max(0,l-s.width),c=Math.max(0,n?l/n:c-s.height),l=eZ(Math.min(l,a,h.maxWidth)),c=eZ(Math.min(c,r,h.maxHeight)),l&&!c&&// If the canvas has width, but no height, default to aspectRatio of 2 (canvas default)
(c=eZ(l/2));let d=void 0!==e||void 0!==i;return d&&n&&h.height&&c>h.height&&(l=eZ(Math.floor((c=h.height)*n))),{width:l,height:c}}(t,e,i,n))}isAttached(t){let e=eA(t);return!!(e&&e.isConnected)}}class i0{static defaults={};static defaultRoutes=void 0;x;y;active=!1;options;$animations;tooltipPosition(t){let{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return tg(this.x)&&tg(this.y)}getProps(t,e){let i=this.$animations;if(!e||!i)return this;let n={};return t.forEach(t=>{n[t]=i[t]&&i[t].active()?i[t]._to:this[t]}),n}}function i1(t,e,i,n,o){let s,a,r;let h=Z(n,0),l=Math.min(Z(o,t.length),t.length),c=0;for(i=Math.ceil(i),o&&(i=(s=o-n)/Math.floor(s/i)),r=h;r<0;)r=Math.round(h+ ++c*i);for(a=Math.max(h,0);a<l;a++)a===r&&(e.push(t[a]),r=Math.round(h+ ++c*i))}const i2=t=>"left"===t?"right":"right"===t?"left":t,i5=(t,e,i)=>"top"===e||"left"===e?t[e]+i:t[e]-i,i3=(t,e)=>Math.min(e||t,t);function i8(t,e){let i=[],n=t.length/e,o=t.length,s=0;for(;s<o;s+=n)i.push(t[Math.floor(s)]);return i}function i4(t){return t.drawTicks?t.tickLength:0}function i6(t,e){if(!t.display)return 0;let i=ep(t.font,e),n=eu(t.padding),o=R(t.text)?t.text.length:1;return o*i.lineHeight+n.height}class i9 extends i0{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:n}=this;return t=F(t,Number.POSITIVE_INFINITY),e=F(e,Number.NEGATIVE_INFINITY),i=F(i,Number.POSITIVE_INFINITY),n=F(n,Number.NEGATIVE_INFINITY),{min:F(t,i),max:F(e,n),minDefined:N(t),maxDefined:N(e)}}getMinMax(t){let e,{min:i,max:n,minDefined:o,maxDefined:s}=this.getUserBounds();if(o&&s)return{min:i,max:n};let a=this.getMatchingVisibleMetas();for(let r=0,h=a.length;r<h;++r)e=a[r].controller.getMinMax(this,t),o||(i=Math.min(i,e.min)),s||(n=Math.max(n,e.max));return i=s&&i>n?n:i,n=o&&i>n?i:n,{min:F(i,F(n,i)),max:F(n,F(i,n))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){let t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){let e=this._labelItems||(this._labelItems=this._computeLabelItems(t));return e}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){V(this.options.beforeUpdate,[this])}update(t,e,i){let{beginAtZero:n,grace:o,ticks:s}=this.options,a=s.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=/**
 * @param minmax
 * @param grace
 * @param beginAtZero
 * @private
 */function(t,e,i){let{min:n,max:o}=t,s=W(e,(o-n)/2),a=(t,e)=>i&&0===t?0:t+e;return{min:a(n,-Math.abs(s)),max:a(o,s)}}(this,o,n),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();let r=a<this.ticks.length;this._convertTicksToLabels(r?i8(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),s.display&&(s.autoSkip||"auto"===s.source)&&(this.ticks=function(t,e){let i=t.options.ticks,n=function(t){let e=t.options.offset,i=t._tickSize(),n=t._length/i+(e?0:1),o=t._maxLength/i;return Math.floor(Math.min(n,o))}(t),o=Math.min(i.maxTicksLimit||n,n),s=i.major.enabled?function(t){let e,i;let n=[];for(e=0,i=t.length;e<i;e++)t[e].major&&n.push(e);return n}(e):[],a=s.length,r=s[0],h=s[a-1],l=[];if(a>o)return function(t,e,i,n){let o,s=0,a=i[0];for(o=0,n=Math.ceil(n);o<t.length;o++)o===a&&(e.push(t[o]),a=i[++s*n])}(e,l,s,a/o),l;let c=function(t,e,i){let n=function(t){let e,i;let n=t.length;if(n<2)return!1;for(i=t[0],e=1;e<n;++e)if(t[e]-t[e-1]!==i)return!1;return i}(t),o=e.length/i;if(!n)return Math.max(o,1);let s=/**
 * Returns an array of factors sorted from 1 to sqrt(value)
 * @private
 */function(t){let e;let i=[],n=Math.sqrt(t);for(e=1;e<n;e++)t%e==0&&(i.push(e),i.push(t/e));return n===(0|n)&&i.push(n),i.sort((t,e)=>t-e).pop(),i}(n);for(let t=0,e=s.length-1;t<e;t++){let e=s[t];if(e>o)return e}return Math.max(o,1)}(s,e,o);if(a>0){let t,i;let n=a>1?Math.round((h-r)/(a-1)):null;for(i1(e,l,c,I(n)?0:r-n,r),t=0,i=a-1;t<i;t++)i1(e,l,c,s[t],s[t+1]);return i1(e,l,c,h,I(n)?e.length:h+n),l}return i1(e,l,c),l}(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),r&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t,e,i=this.options.reverse;this.isHorizontal()?(t=this.left,e=this.right):(t=this.top,e=this.bottom,i=!i),this._startPixel=t,this._endPixel=e,this._reversePixels=i,this._length=e-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){V(this.options.afterUpdate,[this])}beforeSetDimensions(){V(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){V(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),V(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){V(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){let e,i,n;let o=this.options.ticks;for(e=0,i=t.length;e<i;e++)(n=t[e]).label=V(o.callback,[n.value,e,t],this)}afterTickToLabelConversion(){V(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){V(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){let t,e,i;let n=this.options,o=n.ticks,s=i3(this.ticks.length,n.ticks.maxTicksLimit),a=o.minRotation||0,r=o.maxRotation,h=a;if(!this._isVisible()||!o.display||a>=r||s<=1||!this.isHorizontal()){this.labelRotation=a;return}let l=this._getLabelSizes(),c=l.widest.width,d=l.highest.height,u=tL(this.chart.width-c,0,this.maxWidth);c+6>(t=n.offset?this.maxWidth/s:u/(s-1))&&(t=u/(s-(n.offset?.5:1)),e=this.maxHeight-i4(n.grid)-o.padding-i6(n.title,this.chart.options.font),i=Math.sqrt(c*c+d*d),h=Math.max(a,Math.min(r,h=Math.min(Math.asin(tL((l.highest.height+6)/t,-1,1)),Math.asin(tL(e/i,-1,1))-Math.asin(tL(d/i,-1,1)))*(180/to)))),this.labelRotation=h}afterCalculateLabelRotation(){V(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){V(this.options.beforeFit,[this])}fit(){let t={width:0,height:0},{chart:e,options:{ticks:i,title:n,grid:o}}=this,s=this._isVisible(),a=this.isHorizontal();if(s){let s=i6(n,e.options.font);if(a?(t.width=this.maxWidth,t.height=i4(o)+s):(t.height=this.maxHeight,t.width=i4(o)+s),i.display&&this.ticks.length){let{first:e,last:n,widest:o,highest:s}=this._getLabelSizes(),r=2*i.padding,h=tv(this.labelRotation),l=Math.cos(h),c=Math.sin(h);if(a){let e=i.mirror?0:c*o.width+l*s.height;t.height=Math.min(this.maxHeight,t.height+e+r)}else{let e=i.mirror?0:l*o.width+c*s.height;t.width=Math.min(this.maxWidth,t.width+e+r)}this._calculatePadding(e,n,c,l)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,n){let{ticks:{align:o,padding:s},position:a}=this.options,r=0!==this.labelRotation,h="top"!==a&&"x"===this.axis;if(this.isHorizontal()){let a=this.getPixelForTick(0)-this.left,l=this.right-this.getPixelForTick(this.ticks.length-1),c=0,d=0;r?h?(c=n*t.width,d=i*e.height):(c=i*t.height,d=n*e.width):"start"===o?d=e.width:"end"===o?c=t.width:"inner"!==o&&(c=t.width/2,d=e.width/2),this.paddingLeft=Math.max((c-a+s)*this.width/(this.width-a),0),this.paddingRight=Math.max((d-l+s)*this.width/(this.width-l),0)}else{let i=e.height/2,n=t.height/2;"start"===o?(i=0,n=t.height):"end"===o&&(i=e.height,n=0),this.paddingTop=i+s,this.paddingBottom=n+s}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){V(this.options.afterFit,[this])}isHorizontal(){let{axis:t,position:e}=this.options;return"top"===e||"bottom"===e||"x"===t}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){let e,i;for(this.beforeTickToLabelConversion(),this.generateTickLabels(t),e=0,i=t.length;e<i;e++)I(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){let e=this.options.ticks.sampleSize,i=this.ticks;e<i.length&&(i=i8(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,i){let n,o,s,a,r,h,l,c,d,u,p;let{ctx:f,_longestTextCache:m}=this,g=[],_=[],v=Math.floor(e/i3(e,i)),y=0,x=0;for(n=0;n<e;n+=v){if(a=t[n].label,r=this._resolveTickFontOptions(n),f.font=h=r.string,l=m[h]=m[h]||{data:{},gc:[]},c=r.lineHeight,d=u=0,I(a)||R(a)){if(R(a))for(o=0,s=a.length;o<s;++o)I(p=a[o])||R(p)||(d=t3(f,l.data,l.gc,d,p),u+=c)}else d=t3(f,l.data,l.gc,d,a),u=c;g.push(d),_.push(u),y=Math.max(d,y),x=Math.max(u,x)}H(m,t=>{let i;let n=t.gc,o=n.length/2;if(o>e){for(i=0;i<o;++i)delete t.data[n[i]];n.splice(0,o)}});let b=g.indexOf(y),w=_.indexOf(x),M=t=>({width:g[t]||0,height:_[t]||0});return{first:M(0),last:M(e-1),widest:M(b),highest:M(w),widths:g,heights:_}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){let e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);let e=this._startPixel+t*this._length;return tL(this._alignToPixels?t8(this.chart,e,0):e,-32768,32767)}getDecimalForPixel(t){let e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){let{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){let e=this.ticks||[];if(t>=0&&t<e.length){let i=e[t];return i.$context||(i.$context=em(this.getContext(),{tick:i,index:t,type:"tick"}))}return this.$context||(this.$context=em(this.chart.getContext(),{scale:this,type:"scale"}))}_tickSize(){let t=this.options.ticks,e=tv(this.labelRotation),i=Math.abs(Math.cos(e)),n=Math.abs(Math.sin(e)),o=this._getLabelSizes(),s=t.autoSkipPadding||0,a=o?o.widest.width+s:0,r=o?o.highest.height+s:0;return this.isHorizontal()?r*i>a*n?a/i:r/n:r*n<a*i?r/i:a/n}_isVisible(){let t=this.options.display;return"auto"!==t?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){let e,i,n,o,s,a,r,h,l,c,d,u;let p=this.axis,f=this.chart,m=this.options,{grid:g,position:_,border:v}=m,y=g.offset,x=this.isHorizontal(),b=this.ticks,w=b.length+(y?1:0),M=i4(g),P=[],k=v.setContext(this.getContext()),T=k.display?k.width:0,S=T/2,C=function(t){return t8(f,t,T)};if("top"===_)e=C(this.bottom),a=this.bottom-M,h=e-S,c=C(t.top)+S,u=t.bottom;else if("bottom"===_)e=C(this.top),c=t.top,u=C(t.bottom)-S,a=e+S,h=this.top+M;else if("left"===_)e=C(this.right),s=this.right-M,r=e-S,l=C(t.left)+S,d=t.right;else if("right"===_)e=C(this.left),l=t.left,d=C(t.right)-S,s=e+S,r=this.left+M;else if("x"===p){if("center"===_)e=C((t.top+t.bottom)/2+.5);else if(B(_)){let t=Object.keys(_)[0],i=_[t];e=C(this.chart.scales[t].getPixelForValue(i))}c=t.top,u=t.bottom,h=(a=e+S)+M}else if("y"===p){if("center"===_)e=C((t.left+t.right)/2);else if(B(_)){let t=Object.keys(_)[0],i=_[t];e=C(this.chart.scales[t].getPixelForValue(i))}r=(s=e-S)-M,l=t.left,d=t.right}let E=Z(m.ticks.maxTicksLimit,w),O=Math.max(1,Math.ceil(w/E));for(i=0;i<w;i+=O){let t=this.getContext(i),e=g.setContext(t),p=v.setContext(t),m=e.lineWidth,_=e.color,b=p.dash||[],w=p.dashOffset,M=e.tickWidth,k=e.tickColor,T=e.tickBorderDash||[],S=e.tickBorderDashOffset;void 0!==(n=function(t,e,i){let n;let o=t.ticks.length,s=Math.min(e,o-1),a=t._startPixel,r=t._endPixel,h=t.getPixelForTick(s);if(!i||(n=1===o?Math.max(h-a,r-h):0===e?(t.getPixelForTick(1)-h)/2:(h-t.getPixelForTick(s-1))/2,!((h+=s<e?n:-n)<a-1e-6)&&!(h>r+1e-6)))return h}(this,i,y))&&(o=t8(f,n,m),x?s=r=l=d=o:a=h=c=u=o,P.push({tx1:s,ty1:a,tx2:r,ty2:h,x1:l,y1:c,x2:d,y2:u,width:m,color:_,borderDash:b,borderDashOffset:w,tickWidth:M,tickColor:k,tickBorderDash:T,tickBorderDashOffset:S}))}return this._ticksLength=w,this._borderValue=e,P}_computeLabelItems(t){let e,i,n,o,s,a,r,h,l,c,d;let u=this.axis,p=this.options,{position:f,ticks:m}=p,g=this.isHorizontal(),_=this.ticks,{align:v,crossAlign:y,padding:x,mirror:b}=m,w=i4(p.grid),M=w+x,P=b?-x:M,k=-tv(this.labelRotation),T=[],S="middle";if("top"===f)s=this.bottom-P,a=this._getXAxisLabelAlignment();else if("bottom"===f)s=this.top+P,a=this._getXAxisLabelAlignment();else if("left"===f){let t=this._getYAxisLabelAlignment(w);a=t.textAlign,o=t.x}else if("right"===f){let t=this._getYAxisLabelAlignment(w);a=t.textAlign,o=t.x}else if("x"===u){if("center"===f)s=(t.top+t.bottom)/2+M;else if(B(f)){let t=Object.keys(f)[0],e=f[t];s=this.chart.scales[t].getPixelForValue(e)+M}a=this._getXAxisLabelAlignment()}else if("y"===u){if("center"===f)o=(t.left+t.right)/2-M;else if(B(f)){let t=Object.keys(f)[0],e=f[t];o=this.chart.scales[t].getPixelForValue(e)}a=this._getYAxisLabelAlignment(w).textAlign}"y"===u&&("start"===v?S="top":"end"===v&&(S="bottom"));let C=this._getLabelSizes();for(e=0,i=_.length;e<i;++e){let t;n=_[e].label;let u=m.setContext(this.getContext(e));r=this.getPixelForTick(e)+m.labelOffset,l=(h=this._resolveTickFontOptions(e)).lineHeight,c=R(n)?n.length:1;let p=c/2,v=u.color,x=u.textStrokeColor,w=u.textStrokeWidth,M=a;if(g?(o=r,"inner"===a&&(M=e===i-1?this.options.reverse?"left":"right":0===e?this.options.reverse?"right":"left":"center"),d="top"===f?"near"===y||0!==k?-c*l+l/2:"center"===y?-C.highest.height/2-p*l+l:-C.highest.height+l/2:"near"===y||0!==k?l/2:"center"===y?C.highest.height/2-p*l:C.highest.height-c*l,b&&(d*=-1),0===k||u.showLabelBackdrop||(o+=l/2*Math.sin(k))):(s=r,d=(1-c)*l/2),u.showLabelBackdrop){let i=eu(u.backdropPadding),n=C.heights[e],o=C.widths[e],s=d-i.top,r=0-i.left;switch(S){case"middle":s-=n/2;break;case"bottom":s-=n}switch(a){case"center":r-=o/2;break;case"right":r-=o}t={left:r,top:s,width:o+i.width,height:n+i.height,color:u.backdropColor}}T.push({label:n,font:h,textOffset:d,options:{rotation:k,color:v,strokeColor:x,strokeWidth:w,textAlign:M,textBaseline:S,translation:[o,s],backdrop:t}})}return T}_getXAxisLabelAlignment(){let{position:t,ticks:e}=this.options,i=-tv(this.labelRotation);if(i)return"top"===t?"left":"right";let n="center";return"start"===e.align?n="left":"end"===e.align?n="right":"inner"===e.align&&(n="inner"),n}_getYAxisLabelAlignment(t){let e,i;let{position:n,ticks:{crossAlign:o,mirror:s,padding:a}}=this.options,r=this._getLabelSizes(),h=t+a,l=r.widest.width;return"left"===n?s?(i=this.right+a,"near"===o?e="left":"center"===o?(e="center",i+=l/2):(e="right",i+=l)):(i=this.right-h,"near"===o?e="right":"center"===o?(e="center",i-=l/2):(e="left",i=this.left)):"right"===n?s?(i=this.left+a,"near"===o?e="right":"center"===o?(e="center",i-=l/2):(e="left",i-=l)):(i=this.left+h,"near"===o?e="left":"center"===o?(e="center",i+=l/2):(e="right",i=this.right)):e="right",{textAlign:e,x:i}}_computeLabelArea(){if(this.options.ticks.mirror)return;let t=this.chart,e=this.options.position;return"left"===e||"right"===e?{top:0,left:this.left,bottom:t.height,right:this.right}:"top"===e||"bottom"===e?{top:this.top,left:0,bottom:this.bottom,right:t.width}:void 0}drawBackground(){let{ctx:t,options:{backgroundColor:e},left:i,top:n,width:o,height:s}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,n,o,s),t.restore())}getLineWidthForValue(t){let e=this.options.grid;if(!this._isVisible()||!e.display)return 0;let i=this.ticks,n=i.findIndex(e=>e.value===t);if(n>=0){let t=e.setContext(this.getContext(n));return t.lineWidth}return 0}drawGrid(t){let e,i;let n=this.options.grid,o=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t)),a=(t,e,i)=>{i.width&&i.color&&(o.save(),o.lineWidth=i.width,o.strokeStyle=i.color,o.setLineDash(i.borderDash||[]),o.lineDashOffset=i.borderDashOffset,o.beginPath(),o.moveTo(t.x,t.y),o.lineTo(e.x,e.y),o.stroke(),o.restore())};if(n.display)for(e=0,i=s.length;e<i;++e){let t=s[e];n.drawOnChartArea&&a({x:t.x1,y:t.y1},{x:t.x2,y:t.y2},t),n.drawTicks&&a({x:t.tx1,y:t.ty1},{x:t.tx2,y:t.ty2},{color:t.tickColor,width:t.tickWidth,borderDash:t.tickBorderDash,borderDashOffset:t.tickBorderDashOffset})}}drawBorder(){let t,e,i,n;let{chart:o,ctx:s,options:{border:a,grid:r}}=this,h=a.setContext(this.getContext()),l=a.display?h.width:0;if(!l)return;let c=r.setContext(this.getContext(0)).lineWidth,d=this._borderValue;this.isHorizontal()?(t=t8(o,this.left,l)-l/2,e=t8(o,this.right,c)+c/2,i=n=d):(i=t8(o,this.top,l)-l/2,n=t8(o,this.bottom,c)+c/2,t=e=d),s.save(),s.lineWidth=h.width,s.strokeStyle=h.color,s.beginPath(),s.moveTo(t,i),s.lineTo(e,n),s.stroke(),s.restore()}drawLabels(t){let e=this.options.ticks;if(!e.display)return;let i=this.ctx,n=this._computeLabelArea();n&&et(i,n);let o=this.getLabelItems(t);for(let t of o){let e=t.options,n=t.font,o=t.label,s=t.textOffset;eo(i,o,0,s,n,e)}n&&ee(i)}drawTitle(){let t;let{ctx:e,options:{position:i,title:n,reverse:o}}=this;if(!n.display)return;let s=ep(n.font),a=eu(n.padding),r=n.align,h=s.lineHeight/2;"bottom"===i||"center"===i||B(i)?(h+=a.bottom,R(n.text)&&(h+=s.lineHeight*(n.text.length-1))):h+=a.top;let{titleX:l,titleY:c,maxWidth:d,rotation:u}=function(t,e,i,n){let o,s,a;let{top:r,left:h,bottom:l,right:c,chart:d}=t,{chartArea:u,scales:p}=d,f=0,m=l-r,g=c-h;if(t.isHorizontal()){if(s=tR(n,h,c),B(i)){let t=Object.keys(i)[0],n=i[t];a=p[t].getPixelForValue(n)+m-e}else a="center"===i?(u.bottom+u.top)/2+m-e:i5(t,i,e);o=c-h}else{if(B(i)){let t=Object.keys(i)[0],n=i[t];s=p[t].getPixelForValue(n)-g+e}else s="center"===i?(u.left+u.right)/2-g+e:i5(t,i,e);a=tR(n,l,r),f="left"===i?-tl:tl}return{titleX:s,titleY:a,maxWidth:o,rotation:f}}(this,h,i,r);eo(e,n.text,0,0,s,{color:n.color,maxWidth:d,rotation:u,textAlign:(t=tI(r),(o&&"right"!==i||!o&&"right"===i)&&(t=i2(t)),t),textBaseline:"middle",translation:[l,c]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){let t=this.options,e=t.ticks&&t.ticks.z||0,i=Z(t.grid&&t.grid.z,-1),n=Z(t.border&&t.border.z,0);return this._isVisible()&&this.draw===i9.prototype.draw?[{z:i,draw:t=>{this.drawBackground(),this.drawGrid(t),this.drawTitle()}},{z:n,draw:()=>{this.drawBorder()}},{z:e,draw:t=>{this.drawLabels(t)}}]:[{z:e,draw:t=>{this.draw(t)}}]}getMatchingVisibleMetas(t){let e,i;let n=this.chart.getSortedVisibleDatasetMetas(),o=this.axis+"AxisID",s=[];for(e=0,i=n.length;e<i;++e){let i=n[e];i[o]!==this.id||t&&i.type!==t||s.push(i)}return s}_resolveTickFontOptions(t){let e=this.options.ticks.setContext(this.getContext(t));return ep(e.font)}_maxDigits(){let t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class i7{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){let e;let i=Object.getPrototypeOf(t);"id"in i&&"defaults"in i&&(e=this.register(i));let n=this.items,o=t.id,s=this.scope+"."+o;if(!o)throw Error("class does not have id: "+t);return o in n||(n[o]=t,function(t,e,i){let n=G(Object.create(null),[i?t5.get(i):{},t5.get(e),t.defaults]);t5.set(e,n),t.defaultRoutes&&function(t,e){Object.keys(e).forEach(i=>{let n=i.split("."),o=n.pop(),s=[t].concat(n).join("."),a=e[i].split("."),r=a.pop(),h=a.join(".");t5.route(s,o,h,r)})}(e,t.defaultRoutes),t.descriptors&&t5.describe(e,t.descriptors)}(t,s,e),this.override&&t5.override(t.id,t.overrides)),s}get(t){return this.items[t]}unregister(t){let e=this.items,i=t.id,n=this.scope;i in e&&delete e[i],n&&i in t5[n]&&(delete t5[n][i],this.override&&delete tQ[i])}}var nt=/* #__PURE__ */new class{constructor(){this.controllers=new i7(il,"datasets",!0),this.elements=new i7(i0,"elements"),this.plugins=new i7(Object,"plugins"),this.scales=new i7(i9,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach(e=>{let n=i||this._getRegistryForType(e);i||n.isForType(e)||n===this.plugins&&e.id?this._exec(t,n,e):H(e,e=>{let n=i||this._getRegistryForType(e);this._exec(t,n,e)})})}_exec(t,e,i){let n=tt(t);V(i["before"+n],[],i),e[t](i),V(i["after"+n],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){let i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){let n=e.get(t);if(void 0===n)throw Error('"'+t+'" is not a registered '+i+".");return n}};class ne{constructor(){this._init=[]}notify(t,e,i,n){"beforeInit"===e&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));let o=n?this._descriptors(t).filter(n):this._descriptors(t),s=this._notify(o,t,e,i);return"afterDestroy"===e&&(this._notify(o,t,"stop"),this._notify(this._init,t,"uninstall")),s}_notify(t,e,i,n){for(let o of(n=n||{},t)){let t=o.plugin,s=t[i],a=[e,n,o.options];if(!1===V(s,a,t)&&n.cancelable)return!1}return!0}invalidate(){I(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;let e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){let i=t&&t.config,n=Z(i.options&&i.options.plugins,{}),o=function(t){let e={},i=[],n=Object.keys(nt.plugins.items);for(let t=0;t<n.length;t++)i.push(nt.getPlugin(n[t]));let o=t.plugins||[];for(let t=0;t<o.length;t++){let n=o[t];-1===i.indexOf(n)&&(i.push(n),e[n.id]=!0)}return{plugins:i,localIds:e}}(i);return!1!==n||e?function(t,{plugins:e,localIds:i},n,o){let s=[],a=t.getContext();for(let h of e){var r;let e=h.id,l=(r=n[e],o||!1!==r?!0===r?{}:r:null);null!==l&&s.push({plugin:h,options:function(t,{plugin:e,local:i},n,o){let s=t.pluginScopeKeys(e),a=t.getOptionScopes(n,s);return i&&e.defaults&&a.push(e.defaults),t.createResolver(a,o,[""],{scriptable:!1,indexable:!1,allKeys:!0})}(t.config,{plugin:h,local:i[e]},l,a)})}return s}(t,o,n,e):[]}_notifyStateChanges(t){let e=this._oldCache||[],i=this._cache,n=(t,e)=>t.filter(t=>!e.some(e=>t.plugin.id===e.plugin.id));this._notify(n(e,i),t,"stop"),this._notify(n(i,e),t,"start")}}function ni(t,e){let i=t5.datasets[t]||{},n=(e.datasets||{})[t]||{};return n.indexAxis||e.indexAxis||i.indexAxis||"x"}function nn(t){if("x"===t||"y"===t||"r"===t)return t}function no(t,...e){if(nn(t))return t;for(let n of e){var i;let e=n.axis||("top"===(i=n.position)||"bottom"===i?"x":"left"===i||"right"===i?"y":void 0)||t.length>1&&nn(t[0].toLowerCase());if(e)return e}throw Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function ns(t,e,i){if(i[e+"AxisID"]===t)return{axis:e}}function na(t){let e=t.options||(t.options={});e.plugins=Z(e.plugins,{}),e.scales=function(t,e){let i=tQ[t.type]||{scales:{}},n=e.scales||{},o=ni(t.type,e),s=Object.create(null);return Object.keys(n).forEach(e=>{let a=n[e];if(!B(a))return console.error(`Invalid scale configuration for scale: ${e}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${e}`);let r=no(e,a,function(t,e){if(e.data&&e.data.datasets){let i=e.data.datasets.filter(e=>e.xAxisID===t||e.yAxisID===t);if(i.length)return ns(t,"x",i[0])||ns(t,"y",i[0])}return{}}(e,t),t5.scales[a.type]),h=r===o?"_index_":"_value_",l=i.scales||{};s[e]=X(Object.create(null),[{axis:r},a,l[r],l[h]])}),t.data.datasets.forEach(i=>{let o=i.type||t.type,a=i.indexAxis||ni(o,e),r=tQ[o]||{},h=r.scales||{};Object.keys(h).forEach(t=>{let e;let o=(e=t,"_index_"===t?e=a:"_value_"===t&&(e="x"===a?"y":"x"),e),r=i[o+"AxisID"]||o;s[r]=s[r]||Object.create(null),X(s[r],[{axis:o},n[r],h[t]])})}),Object.keys(s).forEach(t=>{let e=s[t];X(e,[t5.scales[e.type],t5.scale])}),s}(t,e)}function nr(t){return(t=t||{}).datasets=t.datasets||[],t.labels=t.labels||[],t}const nh=new Map,nl=new Set;function nc(t,e){let i=nh.get(t);return i||(i=e(),nh.set(t,i),nl.add(i)),i}const nd=(t,e,i)=>{let n=Q(e,i);void 0!==n&&t.add(n)};class nu{constructor(t){var e;this._config=((e=(e=t)||{}).data=nr(e.data),na(e),e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=nr(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){let t=this._config;this.clearCache(),na(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return nc(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return nc(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return nc(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){let e=t.id,i=this.type;return nc(`${i}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){let i=this._scopeCache,n=i.get(t);return(!n||e)&&(n=new Map,i.set(t,n)),n}getOptionScopes(t,e,i){let{options:n,type:o}=this,s=this._cachedScopes(t,i),a=s.get(e);if(a)return a;let r=new Set;e.forEach(e=>{t&&(r.add(t),e.forEach(e=>nd(r,t,e))),e.forEach(t=>nd(r,n,t)),e.forEach(t=>nd(r,tQ[o]||{},t)),e.forEach(t=>nd(r,t5,t)),e.forEach(t=>nd(r,t0,t))});let h=Array.from(r);return 0===h.length&&h.push(Object.create(null)),nl.has(e)&&s.set(e,h),h}chartOptionScopes(){let{options:t,type:e}=this;return[t,tQ[e]||{},t5.datasets[e]||{},{type:e},t5,t0]}resolveNamedOptions(t,e,i,n=[""]){let o={$shared:!0},{resolver:s,subPrefixes:a}=np(this._resolverCache,t,n),r=s;if(function(t,e){let{isScriptable:i,isIndexable:n}=ev(t);for(let o of e){let e=i(o),s=n(o),a=(s||e)&&t[o];if(e&&(ti(a)||nf(a))||s&&R(a))return!0}return!1}(s,e)){o.$shared=!1,i=ti(i)?i():i;let e=this.createResolver(t,i,a);r=e_(s,i,e)}for(let t of e)o[t]=r[t];return o}createResolver(t,e,i=[""],n){let{resolver:o}=np(this._resolverCache,t,i);return B(e)?e_(o,e,void 0,n):o}}function np(t,e,i){let n=t.get(e);n||(n=new Map,t.set(e,n));let o=i.join(),s=n.get(o);if(!s){let t=eg(e,i);s={resolver:t,subPrefixes:i.filter(t=>!t.toLowerCase().includes("hover"))},n.set(o,s)}return s}const nf=t=>B(t)&&Object.getOwnPropertyNames(t).reduce((e,i)=>e||ti(t[i]),!1),nm=["top","bottom","left","right","chartArea"];function ng(t,e){return"top"===t||"bottom"===t||-1===nm.indexOf(t)&&"x"===e}function n_(t,e){return function(i,n){return i[t]===n[t]?i[e]-n[e]:i[t]-n[t]}}function nv(t){let e=t.chart,i=e.options.animation;e.notifyPlugins("afterRender"),V(i&&i.onComplete,[t],e)}function ny(t){let e=t.chart,i=e.options.animation;V(i&&i.onProgress,[t],e)}function nx(t){return ez()&&"string"==typeof t?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const nb={},nw=t=>{let e=nx(t);return Object.values(nb).filter(t=>t.canvas===e).pop()};function nM(t,e,i){return t.options.clip?t[i]:e[i]}class nP{static defaults=t5;static instances=nb;static overrides=tQ;static registry=nt;static version="4.4.0";static getChart=nw;static register(...t){nt.add(...t),nL()}static unregister(...t){nt.remove(...t),nL()}constructor(t,e){var i,n;let o;let s=this.config=new nu(e),a=nx(t),r=nw(a);if(r)throw Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");let h=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||(!ez()||"undefined"!=typeof OffscreenCanvas&&a instanceof OffscreenCanvas?iN:iQ)),this.platform.updateConfig(s);let l=this.platform.acquireContext(a,h.aspectRatio),c=l&&l.canvas,d=c&&c.height,u=c&&c.width;if(this.id=D(),this.ctx=l,this.canvas=c,this.width=u,this.height=d,this._options=h,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new ne,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=(i=t=>this.update(t),n=h.resizeDelay||0,function(...t){return n?(clearTimeout(o),o=setTimeout(i,n,t)):i.apply(this,t),n}),this._dataChanges=[],nb[this.id]=this,!l||!c){console.error("Failed to create chart: can't acquire context from the given item");return}e2.listen(this,"complete",nv),e2.listen(this,"progress",ny),this._initialize(),this.attached&&this.update()}get aspectRatio(){let{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:n,_aspectRatio:o}=this;return I(t)?e&&o?o:n?i/n:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return nt}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():ej(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return t4(this.canvas,this.ctx),this}stop(){return e2.stop(this),this}resize(t,e){e2.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){let i=this.options,n=this.canvas,o=i.maintainAspectRatio&&this.aspectRatio,s=this.platform.getMaximumSize(n,t,e,o),a=i.devicePixelRatio||this.platform.getDevicePixelRatio(),r=this.width?"resize":"attach";this.width=s.width,this.height=s.height,this._aspectRatio=this.aspectRatio,ej(this,a,!0)&&(this.notifyPlugins("resize",{size:s}),V(i.onResize,[this,s],this),this.attached&&this._doResize(r)&&this.render())}ensureScalesHaveIDs(){let t=this.options,e=t.scales||{};H(e,(t,e)=>{t.id=e})}buildOrUpdateScales(){let t=this.options,e=t.scales,i=this.scales,n=Object.keys(i).reduce((t,e)=>(t[e]=!1,t),{}),o=[];e&&(o=o.concat(Object.keys(e).map(t=>{let i=e[t],n=no(t,i),o="r"===n,s="x"===n;return{options:i,dposition:o?"chartArea":s?"bottom":"left",dtype:o?"radialLinear":s?"category":"linear"}}))),H(o,e=>{let o=e.options,s=o.id,a=no(s,o),r=Z(o.type,e.dtype);(void 0===o.position||ng(o.position,a)!==ng(e.dposition))&&(o.position=e.dposition),n[s]=!0;let h=null;if(s in i&&i[s].type===r)h=i[s];else{let t=nt.getScale(r);i[(h=new t({id:s,type:r,ctx:this.ctx,chart:this})).id]=h}h.init(o,t)}),H(n,(t,e)=>{t||delete i[e]}),H(i,t=>{iR.configure(this,t,t.options),iR.addBox(this,t)})}_updateMetasets(){let t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort((t,e)=>t.index-e.index),i>e){for(let t=e;t<i;++t)this._destroyDatasetMeta(t);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(n_("order","index"))}_removeUnreferencedMetasets(){let{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((t,i)=>{0===e.filter(e=>e===t._dataset).length&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){let t,e;let i=[],n=this.data.datasets;for(this._removeUnreferencedMetasets(),t=0,e=n.length;t<e;t++){let e=n[t],o=this.getDatasetMeta(t),s=e.type||this.config.type;if(o.type&&o.type!==s&&(this._destroyDatasetMeta(t),o=this.getDatasetMeta(t)),o.type=s,o.indexAxis=e.indexAxis||ni(s,this.options),o.order=e.order||0,o.index=t,o.label=""+e.label,o.visible=this.isDatasetVisible(t),o.controller)o.controller.updateIndex(t),o.controller.linkScales();else{let e=nt.getController(s),{datasetElementType:n,dataElementType:a}=t5.datasets[s];Object.assign(e,{dataElementType:nt.getElement(a),datasetElementType:n&&nt.getElement(n)}),o.controller=new e(this,t),i.push(o.controller)}}return this._updateMetasets(),i}_resetElements(){H(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){let e=this.config;e.update();let i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),n=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),!1===this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0}))return;let o=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let s=0;for(let t=0,e=this.data.datasets.length;t<e;t++){let{controller:e}=this.getDatasetMeta(t),i=!n&&-1===o.indexOf(e);e.buildOrUpdateElements(i),s=Math.max(+e.getMaxOverflow(),s)}s=this._minPadding=i.layout.autoPadding?s:0,this._updateLayout(s),n||H(o,t=>{t.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(n_("z","_idx"));let{_active:a,_lastEvent:r}=this;r?this._eventHandler(r,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){H(this.scales,t=>{iR.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){let t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);tn(e,i)&&!!this._responsiveListeners===t.responsive||(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){let{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(let{method:i,start:n,count:o}of e){let e="_removeElements"===i?-o:o;!function(t,e,i){let n=Object.keys(t);for(let o of n){let n=+o;if(n>=e){let s=t[o];delete t[o],(i>0||n>e)&&(t[n+i]=s)}}}(t,n,e)}}_getUniformDataChanges(){let t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];let e=this.data.datasets.length,i=e=>new Set(t.filter(t=>t[0]===e).map((t,e)=>e+","+t.splice(1).join(","))),n=i(0);for(let t=1;t<e;t++)if(!tn(n,i(t)))return;return Array.from(n).map(t=>t.split(",")).map(t=>({method:t[1],start:+t[2],count:+t[3]}))}_updateLayout(t){if(!1===this.notifyPlugins("beforeLayout",{cancelable:!0}))return;iR.update(this,this.width,this.height,t);let e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],H(this.boxes,t=>{i&&"chartArea"===t.position||(t.configure&&t.configure(),this._layers.push(...t._layers()))},this),this._layers.forEach((t,e)=>{t._idx=e}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(!1!==this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})){for(let t=0,e=this.data.datasets.length;t<e;++t)this.getDatasetMeta(t).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,ti(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){let i=this.getDatasetMeta(t),n={meta:i,index:t,mode:e,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetUpdate",n)&&(i.controller._update(e),n.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",n))}render(){!1!==this.notifyPlugins("beforeRender",{cancelable:!0})&&(e2.has(this)?this.attached&&!e2.running(this)&&e2.start(this):(this.draw(),nv({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){let{width:t,height:e}=this._resizeBeforeDraw;this._resize(t,e),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||!1===this.notifyPlugins("beforeDraw",{cancelable:!0}))return;let e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){let e,i;let n=this._sortedMetasets,o=[];for(e=0,i=n.length;e<i;++e){let i=n[e];(!t||i.visible)&&o.push(i)}return o}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(!1===this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0}))return;let t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){let e=this.ctx,i=t._clip,n=!i.disabled,o=function(t,e){let{xScale:i,yScale:n}=t;return i&&n?{left:nM(i,e,"left"),right:nM(i,e,"right"),top:nM(n,e,"top"),bottom:nM(n,e,"bottom")}:e}(t,this.chartArea),s={meta:t,index:t.index,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetDraw",s)&&(n&&et(e,{left:!1===i.left?0:o.left-i.left,right:!1===i.right?this.width:o.right+i.right,top:!1===i.top?0:o.top-i.top,bottom:!1===i.bottom?this.height:o.bottom+i.bottom}),t.controller.draw(),n&&ee(e),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(t){return t7(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,i,n){let o=ik.modes[e];return"function"==typeof o?o(this,t,i,n):[]}getDatasetMeta(t){let e=this.data.datasets[t],i=this._metasets,n=i.filter(t=>t&&t._dataset===e).pop();return n||(n={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(n)),n}getContext(){return this.$context||(this.$context=em(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){let e=this.data.datasets[t];if(!e)return!1;let i=this.getDatasetMeta(t);return"boolean"==typeof i.hidden?!i.hidden:!e.hidden}setDatasetVisibility(t,e){let i=this.getDatasetMeta(t);i.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){let n=i?"show":"hide",o=this.getDatasetMeta(t),s=o.controller._resolveAnimations(void 0,n);te(e)?(o.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),s.update(o,{visible:i}),this.update(e=>e.datasetIndex===t?n:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){let e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),e2.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");let{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),t4(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete nb[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){let t=this._listeners,e=this.platform,i=(i,n)=>{e.addEventListener(this,i,n),t[i]=n},n=(t,e,i)=>{t.offsetX=e,t.offsetY=i,this._eventHandler(t)};H(this.options.events,t=>i(t,n))}bindResponsiveEvents(){let t;this._responsiveListeners||(this._responsiveListeners={});let e=this._responsiveListeners,i=this.platform,n=(t,n)=>{i.addEventListener(this,t,n),e[t]=n},o=(t,n)=>{e[t]&&(i.removeEventListener(this,t,n),delete e[t])},s=(t,e)=>{this.canvas&&this.resize(t,e)},a=()=>{o("attach",a),this.attached=!0,this.resize(),n("resize",s),n("detach",t)};t=()=>{this.attached=!1,o("resize",s),this._stop(),this._resize(0,0),n("attach",a)},i.isAttached(this.canvas)?a():t()}unbindEvents(){H(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},H(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){let n,o,s;let a=i?"set":"remove";for("dataset"===e&&this.getDatasetMeta(t[0].datasetIndex).controller["_"+a+"DatasetHoverStyle"](),o=0,s=t.length;o<s;++o){n=t[o];let e=n&&this.getDatasetMeta(n.datasetIndex).controller;e&&e[a+"HoverStyle"](n.element,n.datasetIndex,n.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){let e=this._active||[],i=t.map(({datasetIndex:t,index:e})=>{let i=this.getDatasetMeta(t);if(!i)throw Error("No dataset found at index "+t);return{datasetIndex:t,element:i.data[e],index:e}}),n=!U(i,e);n&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}isPluginEnabled(t){return 1===this._plugins._cache.filter(e=>e.plugin.id===t).length}_updateHoverStyles(t,e,i){let n=this.options.hover,o=(t,e)=>t.filter(t=>!e.some(e=>t.datasetIndex===e.datasetIndex&&t.index===e.index)),s=o(e,t),a=i?t:o(t,e);s.length&&this.updateHoverStyle(s,n.mode,!1),a.length&&n.mode&&this.updateHoverStyle(a,n.mode,!0)}_eventHandler(t,e){let i={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},n=e=>(e.options.events||this.options.events).includes(t.native.type);if(!1===this.notifyPlugins("beforeEvent",i,n))return;let o=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,n),(o||i.changed)&&this.render(),this}_handleEvent(t,e,i){var n;let{_active:o=[],options:s}=this,a=this._getActiveElements(t,o,i,e),r="mouseup"===t.type||"click"===t.type||"contextmenu"===t.type,h=(n=this._lastEvent,i&&"mouseout"!==t.type?r?n:t:null);i&&(this._lastEvent=null,V(s.onHover,[t,a,this],this),r&&V(s.onClick,[t,a,this],this));let l=!U(a,o);return(l||e)&&(this._active=a,this._updateHoverStyles(a,o,e)),this._lastEvent=h,l}_getActiveElements(t,e,i,n){if("mouseout"===t.type)return[];if(!i)return e;let o=this.options.hover;return this.getElementsAtEventForMode(t,o.mode,o,n)}}function nL(){return H(nP.instances,t=>t._plugins.invalidate())}/**
 * Convert (r, 𝜃) to (x, y)
 */function nk(t,e,i,n){return{x:i+t*Math.cos(e),y:n+t*Math.sin(e)}}/**
 * Path the arc, respecting border radius by separating into left and right halves.
 *
 *   Start      End
 *
 *    1--->a--->2    Outer
 *   /           \
 *   8           3
 *   |           |
 *   |           |
 *   7           4
 *   \           /
 *    6<---b<---5    Inner
 */function nT(t,e,i,n,o,s){let{x:a,y:r,startAngle:h,pixelMargin:l,innerRadius:c}=e,d=Math.max(e.outerRadius+n+i-l,0),u=c>0?c+n+i+l:0,p=0,f=o-h;if(n){let t=d>0?d-n:0,e=((c>0?c-n:0)+t)/2;p=(f-(0!==e?f*e/(e+n):f))/2}let m=Math.max(.001,f*d-i/to)/d,g=(f-m)/2,_=h+g+p,v=o-g-p,{outerStart:y,outerEnd:x,innerStart:b,innerEnd:w}=/**
 * Parse border radius from the provided options
 */function(t,e,i,n){let o=el(t.options.borderRadius,["outerStart","outerEnd","innerStart","innerEnd"]),s=(i-e)/2,a=Math.min(s,n*e/2),r=t=>{let e=(i-Math.min(s,t))*n/2;return tL(t,0,Math.min(s,e))};return{outerStart:r(o.outerStart),outerEnd:r(o.outerEnd),innerStart:tL(o.innerStart,0,a),innerEnd:tL(o.innerEnd,0,a)}}(e,u,d,v-_),M=d-y,P=d-x,k=_+y/M,T=v-x/P,S=u+b,C=u+w,E=_+b/S,O=v-w/C;if(t.beginPath(),s){// The first arc segments from point 1 to point a to point 2
let e=(k+T)/2;// The corner segment from point 2 to point 3
if(t.arc(a,r,d,k,e),t.arc(a,r,d,e,T),x>0){let e=nk(P,T,a,r);t.arc(e.x,e.y,x,T,v+tl)}// The line from point 3 to point 4
let i=nk(C,v,a,r);// The corner segment from point 4 to point 5
if(t.lineTo(i.x,i.y),w>0){let e=nk(C,O,a,r);t.arc(e.x,e.y,w,v+tl,O+Math.PI)}// The inner arc from point 5 to point b to point 6
let n=(v-w/u+(_+b/u))/2;// The corner segment from point 6 to point 7
if(t.arc(a,r,u,v-w/u,n,!0),t.arc(a,r,u,n,_+b/u,!0),b>0){let e=nk(S,E,a,r);t.arc(e.x,e.y,b,E+Math.PI,_-tl)}// The line from point 7 to point 8
let o=nk(M,_,a,r);// The corner segment from point 8 to point 1
if(t.lineTo(o.x,o.y),y>0){let e=nk(M,k,a,r);t.arc(e.x,e.y,y,_-tl,k)}}else{t.moveTo(a,r);let e=Math.cos(k)*d+a,i=Math.sin(k)*d+r;t.lineTo(e,i);let n=Math.cos(T)*d+a,o=Math.sin(T)*d+r;t.lineTo(n,o)}t.closePath()}function nS(t,e,i=e){t.lineCap=Z(i.borderCapStyle,e.borderCapStyle),t.setLineDash(Z(i.borderDash,e.borderDash)),t.lineDashOffset=Z(i.borderDashOffset,e.borderDashOffset),t.lineJoin=Z(i.borderJoinStyle,e.borderJoinStyle),t.lineWidth=Z(i.borderWidth,e.borderWidth),t.strokeStyle=Z(i.borderColor,e.borderColor)}function nC(t,e,i){t.lineTo(i.x,i.y)}function nE(t,e,i={}){let n=t.length,{start:o=0,end:s=n-1}=i,{start:a,end:r}=e,h=Math.max(o,a),l=Math.min(s,r);return{count:n,start:h,loop:e.loop,ilen:l<h&&!(o<a&&s<a||o>r&&s>r)?n+l-h:l-h}}function nO(t,e,i,n){let o,s,a;let{points:r,options:h}=e,{count:l,start:c,loop:d,ilen:u}=nE(r,i,n),p=h.stepped?ei:h.tension||"monotone"===h.cubicInterpolationMode?en:nC,{move:f=!0,reverse:m}=n||{};for(o=0;o<=u;++o)(s=r[(c+(m?u-o:o))%l]).skip||(f?(t.moveTo(s.x,s.y),f=!1):p(t,a,s,m,h.stepped),a=s);return d&&p(t,a,s=r[(c+(m?u:0))%l],m,h.stepped),!!d}function nz(t,e,i,n){let o,s,a,r,h,l;let c=e.points,{count:d,start:u,ilen:p}=nE(c,i,n),{move:f=!0,reverse:m}=n||{},g=0,_=0,v=t=>(u+(m?p-t:t))%d,y=()=>{r!==h&&(t.lineTo(g,h),t.lineTo(g,r),t.lineTo(g,l))};for(f&&(s=c[v(0)],t.moveTo(s.x,s.y)),o=0;o<=p;++o){if((s=c[v(o)]).skip)continue;let e=s.x,i=s.y,n=0|e;n===a?(i<r?r=i:i>h&&(h=i),g=(_*g+e)/++_):(y(),t.lineTo(e,i),a=n,_=0,r=h=i),l=i}y()}function nA(t){let e=t.options,i=e.borderDash&&e.borderDash.length,n=!t._decimated&&!t._loop&&!e.tension&&"monotone"!==e.cubicInterpolationMode&&!e.stepped&&!i;return n?nz:nO}const nD="function"==typeof Path2D;class nI extends i0{static id="line";static defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};static descriptors={_scriptable:!0,_indexable:t=>"borderDash"!==t&&"fill"!==t};constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){let i=this.options;if((i.tension||"monotone"===i.cubicInterpolationMode)&&!i.stepped&&!this._pointsUpdated){let n=i.spanGaps?this._loop:this._fullLoop;!/**
 * @private
 */function(t,e,i,n,o){let s,a,r,h;if(e.spanGaps&&(t=t.filter(t=>!t.skip)),"monotone"===e.cubicInterpolationMode)!/**
 * This function calculates Bézier control points in a similar way than |splineCurve|,
 * but preserves monotonicity of the provided data and ensures no local extremums are added
 * between the dataset discrete points due to the interpolation.
 * See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation
 */function(t,e="x"){let i,n,o;let s=eE(e),a=t.length,r=Array(a).fill(0),h=Array(a),l=eC(t,0);for(i=0;i<a;++i)if(n=o,o=l,l=eC(t,i+1),o){if(l){let t=l[e]-o[e];// In the case of two points that appear at the same x pixel, slopeDeltaX is 0
r[i]=0!==t?(l[s]-o[s])/t:0}h[i]=n?l?tp(r[i-1])!==tp(r[i])?0:(r[i-1]+r[i])/2:r[i-1]:r[i]}/**
 * Adjust tangents to ensure monotonic properties
 */(function(t,e,i){let n,o,s,a,r;let h=t.length,l=eC(t,0);for(let c=0;c<h-1;++c)if(r=l,l=eC(t,c+1),r&&l){if(tf(e[c],0,eS)){i[c]=i[c+1]=0;continue}(a=Math.pow(n=i[c]/e[c],2)+Math.pow(o=i[c+1]/e[c],2))<=9||(s=3/Math.sqrt(a),i[c]=n*s*e[c],i[c+1]=o*s*e[c])}})(t,r,h),function(t,e,i="x"){let n,o,s;let a=eE(i),r=t.length,h=eC(t,0);for(let l=0;l<r;++l){if(o=s,s=h,h=eC(t,l+1),!s)continue;let r=s[i],c=s[a];o&&(n=(r-o[i])/3,s[`cp1${i}`]=r-n,s[`cp1${a}`]=c-n*e[l]),h&&(n=(h[i]-r)/3,s[`cp2${i}`]=r+n,s[`cp2${a}`]=c+n*e[l])}}(t,h,e)}(t,o);else{let i=n?t[t.length-1]:t[0];for(s=0,a=t.length;s<a;++s)h=function(t,e,i,n){// Props to Rob Spencer at scaled innovation for his post on splining between points
// http://scaledinnovation.com/analytics/splines/aboutSplines.html
// This function must also respect "skipped" points
let o=t.skip?e:t,s=i.skip?e:i,a=tb(e,o),r=tb(s,e),h=a/(a+r),l=r/(a+r);// If all points are the same, s01 & s02 will be inf
h=isNaN(h)?0:h,l=isNaN(l)?0:l;let c=n*h,d=n*l;// scaling factor for triangle Ta
return{previous:{x:e.x-c*(s.x-o.x),y:e.y-c*(s.y-o.y)},next:{x:e.x+d*(s.x-o.x),y:e.y+d*(s.y-o.y)}}}(i,r=t[s],t[Math.min(s+1,a-(n?0:1))%a],e.tension),r.cp1x=h.previous.x,r.cp1y=h.previous.y,r.cp2x=h.next.x,r.cp2y=h.next.y,i=r}e.capBezierPoints&&function(t,e){let i,n,o,s,a;let r=t7(t[0],e);for(i=0,n=t.length;i<n;++i)a=s,s=r,r=i<n-1&&t7(t[i+1],e),s&&(o=t[i],a&&(o.cp1x=eO(o.cp1x,e.left,e.right),o.cp1y=eO(o.cp1y,e.top,e.bottom)),r&&(o.cp2x=eO(o.cp2x,e.left,e.right),o.cp2y=eO(o.cp2y,e.top,e.bottom)))}(t,i)}(this._points,i,t,n,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=function(t,e){let i=t.points,n=t.options.spanGaps,o=i.length;if(!o)return[];let s=!!t._loop,{start:a,end:r}=function(t,e,i,n){let o=0,s=e-1;if(i&&!n)for(;o<e&&!t[o].skip;)o++;for(;o<e&&t[o].skip;)o++;for(o%=e,i&&(s+=o);s>o&&t[s%e].skip;)s--;return{start:o,end:s%=e}}(i,o,s,n);if(!0===n)return e0(t,[{start:a,end:r,loop:s}],i,e);let h=r<a?r+o:r,l=!!t._fullLoop&&0===a&&r===o-1;return e0(t,function(t,e,i,n){let o;let s=t.length,a=[],r=e,h=t[e];for(o=e+1;o<=i;++o){let i=t[o%s];i.skip||i.stop?h.skip||(n=!1,a.push({start:e%s,end:(o-1)%s,loop:n}),e=r=i.stop?o:null):(r=o,h.skip&&(e=o)),h=i}return null!==r&&a.push({start:e%s,end:r%s,loop:n}),a}(i,a,h,l),i,e)}(this,this.options.segment))}first(){let t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){let t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){let i,n;let o=this.options,s=t[e],a=this.points,r=eQ(this,{property:e,start:s,end:s});if(!r.length)return;let h=[],l=o.stepped?eU:o.tension||"monotone"===o.cubicInterpolationMode?e$:eH;for(i=0,n=r.length;i<n;++i){let{start:n,end:c}=r[i],d=a[n],u=a[c];if(d===u){h.push(d);continue}let p=Math.abs((s-d[e])/(u[e]-d[e])),f=l(d,u,p,o.stepped);f[e]=t[e],h.push(f)}return 1===h.length?h[0]:h}pathSegment(t,e,i){let n=nA(this);return n(t,this,e,i)}path(t,e,i){let n=this.segments,o=nA(this),s=this._loop;for(let a of(e=e||0,i=i||this.points.length-e,n))s&=o(t,this,a,{start:e,end:e+i-1});return!!s}draw(t,e,i,n){let o=this.options||{},s=this.points||[];s.length&&o.borderWidth&&(t.save(),function(t,e,i,n){if(nD&&!e.options.segment){let o;(o=e._path)||(o=e._path=new Path2D,e.path(o,i,n)&&o.closePath()),nS(t,e.options),t.stroke(o)}else!function(t,e,i,n){let{segments:o,options:s}=e,a=nA(e);for(let r of o)nS(t,s,r.style),t.beginPath(),a(t,e,r,{start:i,end:i+n-1})&&t.closePath(),t.stroke()}(t,e,i,n)}(t,this,i,n),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}function nR(t,e,i,n){let o=t.options,{[i]:s}=t.getProps([i],n);return Math.abs(e-s)<o.radius+o.hitRadius}function nB(t,e){let i,n,o,s,a;let{x:r,y:h,base:l,width:c,height:d}=t.getProps(["x","y","base","width","height"],e);return t.horizontal?(a=d/2,i=Math.min(r,l),n=Math.max(r,l),o=h-a,s=h+a):(i=r-(a=c/2),n=r+a,o=Math.min(h,l),s=Math.max(h,l)),{left:i,top:o,right:n,bottom:s}}function nN(t,e,i,n){return t?0:tL(e,i,n)}function nF(t,e,i,n){let o=null===e,s=null===i,a=t&&!(o&&s)&&nB(t,n);return a&&(o||tk(e,a.left,a.right))&&(s||tk(i,a.top,a.bottom))}function nZ(t,e){t.rect(e.x,e.y,e.w,e.h)}function nj(t,e,i={}){let n=t.x!==i.x?-e:0,o=t.y!==i.y?-e:0,s=(t.x+t.w!==i.x+i.w?e:0)-n,a=(t.y+t.h!==i.y+i.h?e:0)-o;return{x:t.x+n,y:t.y+o,w:t.w+s,h:t.h+a,radius:t.radius}}var nW=/*#__PURE__*/Object.freeze({__proto__:null,ArcElement:class extends i0{static id="arc";static defaults={borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0};static defaultRoutes={backgroundColor:"backgroundColor"};static descriptors={_scriptable:!0,_indexable:t=>"borderDash"!==t};circumference;endAngle;fullCircles;innerRadius;outerRadius;pixelMargin;startAngle;constructor(t){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,e,i){let n=this.getProps(["x","y"],i),{angle:o,distance:s}=tx(n,{x:t,y:e}),{startAngle:a,endAngle:r,innerRadius:h,outerRadius:l,circumference:c}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),d=(this.options.spacing+this.options.borderWidth)/2,u=Z(c,r-a),p=u>=ts||tP(o,a,r),f=tk(s,h+d,l+d);return p&&f}getCenterPoint(t){let{x:e,y:i,startAngle:n,endAngle:o,innerRadius:s,outerRadius:a}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],t),{offset:r,spacing:h}=this.options,l=(n+o)/2,c=(s+a+h+r)/2;return{x:e+Math.cos(l)*c,y:i+Math.sin(l)*c}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){let{options:e,circumference:i}=this,n=(e.offset||0)/4,o=(e.spacing||0)/2,s=e.circular;if(this.pixelMargin="inner"===e.borderAlign?.33:0,this.fullCircles=i>ts?Math.floor(i/ts):0,0===i||this.innerRadius<0||this.outerRadius<0)return;t.save();let a=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(a)*n,Math.sin(a)*n);let r=1-Math.sin(Math.min(to,i||0)),h=n*r;t.fillStyle=e.backgroundColor,t.strokeStyle=e.borderColor,function(t,e,i,n,o){let{fullCircles:s,startAngle:a,circumference:r}=e,h=e.endAngle;if(s){nT(t,e,i,n,h,o);for(let e=0;e<s;++e)t.fill();isNaN(r)||(h=a+(r%ts||ts))}nT(t,e,i,n,h,o),t.fill()}(t,this,h,o,s),function(t,e,i,n,o){let{fullCircles:s,startAngle:a,circumference:r,options:h}=e,{borderWidth:l,borderJoinStyle:c,borderDash:d,borderDashOffset:u}=h,p="inner"===h.borderAlign;if(!l)return;t.setLineDash(d||[]),t.lineDashOffset=u,p?(t.lineWidth=2*l,t.lineJoin=c||"round"):(t.lineWidth=l,t.lineJoin=c||"bevel");let f=e.endAngle;if(s){nT(t,e,i,n,f,o);for(let e=0;e<s;++e)t.stroke();isNaN(r)||(f=a+(r%ts||ts))}p&&function(t,e,i){let{startAngle:n,pixelMargin:o,x:s,y:a,outerRadius:r,innerRadius:h}=e,l=o/r;// Draw an inner border by clipping the arc and drawing a double-width border
// Enlarge the clipping arc by 0.33 pixels to eliminate glitches between borders
t.beginPath(),t.arc(s,a,r,n-l,i+l),h>o?(l=o/h,t.arc(s,a,h,i+l,n-l,!0)):t.arc(s,a,o,i+tl,n-tl),t.closePath(),t.clip()}(t,e,f),s||(nT(t,e,i,n,f,o),t.stroke())}(t,this,h,o,s),t.restore()}},BarElement:class extends i0{static id="bar";static defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){var e;let{inflateAmount:i,options:{borderColor:n,backgroundColor:o}}=this,{inner:s,outer:a}=function(t){let e=nB(t),i=e.right-e.left,n=e.bottom-e.top,o=function(t,e,i){let n=t.options.borderWidth,o=t.borderSkipped,s=ec(n);return{t:nN(o.top,s.top,0,i),r:nN(o.right,s.right,0,e),b:nN(o.bottom,s.bottom,0,i),l:nN(o.left,s.left,0,e)}}(t,i/2,n/2),s=function(t,e,i){let{enableBorderRadius:n}=t.getProps(["enableBorderRadius"]),o=t.options.borderRadius,s=ed(o),a=Math.min(e,i),r=t.borderSkipped,h=n||B(o);return{topLeft:nN(!h||r.top||r.left,s.topLeft,0,a),topRight:nN(!h||r.top||r.right,s.topRight,0,a),bottomLeft:nN(!h||r.bottom||r.left,s.bottomLeft,0,a),bottomRight:nN(!h||r.bottom||r.right,s.bottomRight,0,a)}}(t,i/2,n/2);return{outer:{x:e.left,y:e.top,w:i,h:n,radius:s},inner:{x:e.left+o.l,y:e.top+o.t,w:i-o.l-o.r,h:n-o.t-o.b,radius:{topLeft:Math.max(0,s.topLeft-Math.max(o.t,o.l)),topRight:Math.max(0,s.topRight-Math.max(o.t,o.r)),bottomLeft:Math.max(0,s.bottomLeft-Math.max(o.b,o.l)),bottomRight:Math.max(0,s.bottomRight-Math.max(o.b,o.r))}}}}(this),r=(e=a.radius).topLeft||e.topRight||e.bottomLeft||e.bottomRight?es:nZ;t.save(),(a.w!==s.w||a.h!==s.h)&&(t.beginPath(),r(t,nj(a,i,s)),t.clip(),r(t,nj(s,-i,a)),t.fillStyle=n,t.fill("evenodd")),t.beginPath(),r(t,nj(s,i)),t.fillStyle=o,t.fill(),t.restore()}inRange(t,e,i){return nF(this,t,e,i)}inXRange(t,e){return nF(this,t,null,e)}inYRange(t,e){return nF(this,null,t,e)}getCenterPoint(t){let{x:e,y:i,base:n,horizontal:o}=this.getProps(["x","y","base","horizontal"],t);return{x:o?(e+n)/2:e,y:o?i:(i+n)/2}}getRange(t){return"x"===t?this.width/2:this.height/2}},LineElement:nI,PointElement:class extends i0{static id="point";parsed;skip;stop;/**
   * @type {any}
   */static defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0};/**
   * @type {any}
   */static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(t){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,e,i){let n=this.options,{x:o,y:s}=this.getProps(["x","y"],i);return Math.pow(t-o,2)+Math.pow(e-s,2)<Math.pow(n.hitRadius+n.radius,2)}inXRange(t,e){return nR(this,t,"x",e)}inYRange(t,e){return nR(this,t,"y",e)}getCenterPoint(t){let{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}size(t){let e=(t=t||this.options||{}).radius||0;e=Math.max(e,e&&t.hoverRadius||0);let i=e&&t.borderWidth||0;return(e+i)*2}draw(t,e){let i=this.options;!this.skip&&!(i.radius<.1)&&t7(this,e,this.size(i)/2)&&(t.strokeStyle=i.borderColor,t.lineWidth=i.borderWidth,t.fillStyle=i.backgroundColor,t6(t,i,this.x,this.y))}getRange(){let t=this.options||{};// @ts-expect-error Fallbacks should never be hit in practice
return t.radius+t.hitRadius}}});const nV=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"// grey
],nH=/* #__PURE__ */nV.map(t=>t.replace("rgb(","rgba(").replace(")",", 0.5)"));function nU(t){return nV[t%nV.length]}function n$(t){return nH[t%nH.length]}function nY(t){let e;for(e in t)if(t[e].borderColor||t[e].backgroundColor)return!0;return!1}function nq(t){if(t._decimated){let e=t._data;delete t._decimated,delete t._data,Object.defineProperty(t,"data",{configurable:!0,enumerable:!0,writable:!0,value:e})}}function nG(t){t.data.datasets.forEach(t=>{nq(t)})}function nX(t,e,i,n){if(n)return;let o=e[t],s=i[t];return"angle"===t&&(o=tM(o),s=tM(s)),{property:t,start:o,end:s}}function nK(t,e,i){for(;e>t;e--){let t=i[e];if(!isNaN(t.x)&&!isNaN(t.y))break}return e}function nJ(t,e,i,n){return t&&e?n(t[i],e[i]):t?t[i]:e?e[i]:0}function nQ(t,e){let i=[],n=!1;return R(t)?(n=!0,i=t):i=function(t,e){let{x:i=null,y:n=null}=t||{},o=e.points,s=[];return e.segments.forEach(({start:t,end:e})=>{e=nK(t,e,o);let a=o[t],r=o[e];null!==n?(s.push({x:a.x,y:n}),s.push({x:r.x,y:n})):null!==i&&(s.push({x:i,y:a.y}),s.push({x:i,y:r.y}))}),s}(t,e),i.length?new nI({points:i,options:{tension:0},_loop:n,_fullLoop:n}):null}function n0(t){return t&&!1!==t.fill}class n1{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){let{x:n,y:o,radius:s}=this;return e=e||{start:0,end:ts},t.arc(n,o,s,e.end,e.start,!0),!i.bounds}interpolate(t){let{x:e,y:i,radius:n}=this,o=t.angle;return{x:e+Math.cos(o)*n,y:i+Math.sin(o)*n,angle:o}}}function n2(t,e,i){let n=function(t){let{chart:e,fill:i,line:n}=t;if(N(i))return function(t,e){let i=t.getDatasetMeta(e),n=i&&t.isDatasetVisible(e);return n?i.dataset:null}(e,i);if("stack"===i)return function(t){let{scale:e,index:i,line:n}=t,o=[],s=n.segments,a=n.points,r=function(t,e){let i=[],n=t.getMatchingVisibleMetas("line");for(let t=0;t<n.length;t++){let o=n[t];if(o.index===e)break;o.hidden||i.unshift(o.dataset)}return i}(e,i);r.push(nQ({x:null,y:e.bottom},n));for(let t=0;t<s.length;t++){let e=s[t];for(let t=e.start;t<=e.end;t++)!function(t,e,i){let n=[];for(let o=0;o<i.length;o++){let s=i[o],{first:a,last:r,point:h}=function(t,e,i){let n=t.interpolate(e,i);if(!n)return{};let o=n[i],s=t.segments,a=t.points,r=!1,h=!1;for(let t=0;t<s.length;t++){let e=s[t],n=a[e.start][i],l=a[e.end][i];if(tk(o,n,l)){r=o===n,h=o===l;break}}return{first:r,last:h,point:n}}(s,e,"x");if(h&&(!a||!r)){if(a)n.unshift(h);else if(t.push(h),!r)break}}t.push(...n)}(o,a[t],r)}return new nI({points:o,options:{}})}(t);if("shape"===i)return!0;let o=function(t){let e=t.scale||{};return e.getPointPositionForValue?function(t){let{scale:e,fill:i}=t,n=e.options,o=e.getLabels().length,s=n.reverse?e.max:e.min,a="start"===i?s:"end"===i?e.options.reverse?e.min:e.max:B(i)?i.value:e.getBaseValue(),r=[];if(n.grid.circular){let t=e.getPointPositionForValue(0,s);return new n1({x:t.x,y:t.y,radius:e.getDistanceFromCenterForValue(a)})}for(let t=0;t<o;++t)r.push(e.getPointPositionForValue(t,a));return r}(t):function(t){let e;let{scale:i={},fill:n}=t,o=(e=null,"start"===n?e=i.bottom:"end"===n?e=i.top:B(n)?e=i.getPixelForValue(n.value):i.getBasePixel&&(e=i.getBasePixel()),e);if(N(o)){let t=i.isHorizontal();return{x:t?o:null,y:t?null:o}}return null}(t)}(t);return o instanceof n1?o:nQ(o,n)}(e),{line:o,scale:s,axis:a}=e,r=o.options,h=r.fill,l=r.backgroundColor,{above:c=l,below:d=l}=h||{};n&&o.points.length&&(et(t,i),function(t,e){let{line:i,target:n,above:o,below:s,area:a,scale:r}=e,h=i._loop?"angle":e.axis;t.save(),"x"===h&&s!==o&&(n5(t,n,a.top),n3(t,{line:i,target:n,color:o,scale:r,property:h}),t.restore(),t.save(),n5(t,n,a.bottom)),n3(t,{line:i,target:n,color:s,scale:r,property:h}),t.restore()}(t,{line:o,target:n,above:c,below:d,area:i,scale:s,axis:a}),ee(t))}function n5(t,e,i){let{segments:n,points:o}=e,s=!0,a=!1;for(let r of(t.beginPath(),n)){let{start:n,end:h}=r,l=o[n],c=o[nK(n,h,o)];s?(t.moveTo(l.x,l.y),s=!1):(t.lineTo(l.x,i),t.lineTo(l.x,l.y)),(a=!!e.pathSegment(t,r,{move:a}))?t.closePath():t.lineTo(c.x,i)}t.lineTo(e.first().x,i),t.closePath(),t.clip()}function n3(t,e){let{line:i,target:n,property:o,color:s,scale:a}=e,r=function(t,e,i){let n=t.segments,o=t.points,s=e.points,a=[];for(let t of n){let{start:n,end:r}=t;r=nK(n,r,o);let h=nX(i,o[n],o[r],t.loop);if(!e.segments){a.push({source:t,target:h,start:o[n],end:o[r]});continue}let l=eQ(e,h);for(let e of l){let n=nX(i,s[e.start],s[e.end],e.loop),r=eJ(t,o,n);for(let t of r)a.push({source:t,target:e,start:{[i]:nJ(h,n,"start",Math.max)},end:{[i]:nJ(h,n,"end",Math.min)}})}}return a}(i,n,o);for(let{source:e,target:h,start:l,end:c}of r){let r;let{style:{backgroundColor:d=s}={}}=e,u=!0!==n;t.save(),t.fillStyle=d,function(t,e,i){let{top:n,bottom:o}=e.chart.chartArea,{property:s,start:a,end:r}=i||{};"x"===s&&(t.beginPath(),t.rect(a,n,r-a,o-n),t.clip())}(t,a,u&&nX(o,l,c)),t.beginPath();let p=!!i.pathSegment(t,e);if(u){p?t.closePath():n8(t,n,c,o);let e=!!n.pathSegment(t,h,{move:p,reverse:!0});(r=p&&e)||n8(t,n,l,o)}t.closePath(),t.fill(r?"evenodd":"nonzero"),t.restore()}}function n8(t,e,i,n){let o=e.interpolate(i,n);o&&t.lineTo(o.x,o.y)}const n4=(t,e)=>{let{boxHeight:i=e,boxWidth:n=e}=t;return t.usePointStyle&&(i=Math.min(i,e),n=t.pointStyleWidth||Math.min(n,e)),{boxWidth:n,boxHeight:i,itemHeight:Math.max(e,i)}},n6=(t,e)=>null!==t&&null!==e&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class n9 extends i0{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,i){this.maxWidth=t,this.maxHeight=e,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){let t=this.options.labels||{},e=V(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(e=>t.filter(e,this.chart.data))),t.sort&&(e=e.sort((e,i)=>t.sort(e,i,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){let t,e;let{options:i,ctx:n}=this;if(!i.display){this.width=this.height=0;return}let o=i.labels,s=ep(o.font),a=s.size,r=this._computeTitleHeight(),{boxWidth:h,itemHeight:l}=n4(o,a);n.font=s.string,this.isHorizontal()?(t=this.maxWidth,e=this._fitRows(r,a,h,l)+10):(e=this.maxHeight,t=this._fitCols(r,s,h,l)+10),this.width=Math.min(t,i.maxWidth||this.maxWidth),this.height=Math.min(e,i.maxHeight||this.maxHeight)}_fitRows(t,e,i,n){let{ctx:o,maxWidth:s,options:{labels:{padding:a}}}=this,r=this.legendHitBoxes=[],h=this.lineWidths=[0],l=n+a,c=t;o.textAlign="left",o.textBaseline="middle";let d=-1,u=-l;return this.legendItems.forEach((t,p)=>{let f=i+e/2+o.measureText(t.text).width;(0===p||h[h.length-1]+f+2*a>s)&&(c+=l,h[h.length-(p>0?0:1)]=0,u+=l,d++),r[p]={left:0,top:u,row:d,width:f,height:n},h[h.length-1]+=f+a}),c}_fitCols(t,e,i,n){let{ctx:o,maxHeight:s,options:{labels:{padding:a}}}=this,r=this.legendHitBoxes=[],h=this.columnSizes=[],l=s-t,c=a,d=0,u=0,p=0,f=0;return this.legendItems.forEach((t,s)=>{let{itemWidth:m,itemHeight:g}=function(t,e,i,n,o){var s;let a,r;let h=((a=n.text)&&"string"!=typeof a&&(a=a.reduce((t,e)=>t.length>e.length?t:e)),t+e.size/2+i.measureText(a).width),l=(s=e.lineHeight,r=o,"string"!=typeof n.text&&(r=n7(n,s)),r);return{itemWidth:h,itemHeight:l}}(i,e,o,t,n);s>0&&u+g+2*a>l&&(c+=d+a,h.push({width:d,height:u}),p+=d+a,f++,d=u=0),r[s]={left:p,top:u,col:f,width:m,height:g},d=Math.max(d,m),u+=g+a}),c+=d,h.push({width:d,height:u}),c}adjustHitBoxes(){if(!this.options.display)return;let t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:i,labels:{padding:n},rtl:o}}=this,s=eY(o,this.left,this.width);if(this.isHorizontal()){let o=0,a=tR(i,this.left+n,this.right-this.lineWidths[o]);for(let r of e)o!==r.row&&(o=r.row,a=tR(i,this.left+n,this.right-this.lineWidths[o])),r.top+=this.top+t+n,r.left=s.leftForLtr(s.x(a),r.width),a+=r.width+n}else{let o=0,a=tR(i,this.top+t+n,this.bottom-this.columnSizes[o].height);for(let r of e)r.col!==o&&(o=r.col,a=tR(i,this.top+t+n,this.bottom-this.columnSizes[o].height)),r.top=a,r.left+=this.left+n,r.left=s.leftForLtr(s.x(r.left),r.width),a+=r.height+n}}isHorizontal(){return"top"===this.options.position||"bottom"===this.options.position}draw(){if(this.options.display){let t=this.ctx;et(t,this),this._draw(),ee(t)}}_draw(){let t;let{options:e,columnSizes:i,lineWidths:n,ctx:o}=this,{align:s,labels:a}=e,r=t5.color,h=eY(e.rtl,this.left,this.width),l=ep(a.font),{padding:c}=a,d=l.size,u=d/2;this.drawTitle(),o.textAlign=h.textAlign("left"),o.textBaseline="middle",o.lineWidth=.5,o.font=l.string;let{boxWidth:p,boxHeight:f,itemHeight:m}=n4(a,d),g=function(t,e,i){if(isNaN(p)||p<=0||isNaN(f)||f<0)return;o.save();let n=Z(i.lineWidth,1);if(o.fillStyle=Z(i.fillStyle,r),o.lineCap=Z(i.lineCap,"butt"),o.lineDashOffset=Z(i.lineDashOffset,0),o.lineJoin=Z(i.lineJoin,"miter"),o.lineWidth=n,o.strokeStyle=Z(i.strokeStyle,r),o.setLineDash(Z(i.lineDash,[])),a.usePointStyle){let s={radius:f*Math.SQRT2/2,pointStyle:i.pointStyle,rotation:i.rotation,borderWidth:n},r=h.xPlus(t,p/2),l=e+u;t9(o,s,r,l,a.pointStyleWidth&&p)}else{let s=e+Math.max((d-f)/2,0),a=h.leftForLtr(t,p),r=ed(i.borderRadius);o.beginPath(),Object.values(r).some(t=>0!==t)?es(o,{x:a,y:s,w:p,h:f,radius:r}):o.rect(a,s,p,f),o.fill(),0!==n&&o.stroke()}o.restore()},_=function(t,e,i){eo(o,i.text,t,e+m/2,l,{strikethrough:i.hidden,textAlign:h.textAlign(i.textAlign)})},v=this.isHorizontal(),y=this._computeTitleHeight();t=v?{x:tR(s,this.left+c,this.right-n[0]),y:this.top+c+y,line:0}:{x:this.left+c,y:tR(s,this.top+y+c,this.bottom-i[0].height),line:0},eq(this.ctx,e.textDirection);let x=m+c;this.legendItems.forEach((r,d)=>{o.strokeStyle=r.fontColor,o.fillStyle=r.fontColor;let f=o.measureText(r.text).width,m=h.textAlign(r.textAlign||(r.textAlign=a.textAlign)),b=p+u+f,w=t.x,M=t.y;h.setWidth(this.width),v?d>0&&w+b+c>this.right&&(M=t.y+=x,t.line++,w=t.x=tR(s,this.left+c,this.right-n[t.line])):d>0&&M+x>this.bottom&&(w=t.x=w+i[t.line].width+c,t.line++,M=t.y=tR(s,this.top+y+c,this.bottom-i[t.line].height));let P=h.x(w);if(g(P,M,r),w=tB(m,w+p+u,v?w+b:this.right,e.rtl),_(h.x(w),M,r),v)t.x+=b+c;else if("string"!=typeof r.text){let e=l.lineHeight;t.y+=n7(r,e)+c}else t.y+=x}),eG(this.ctx,e.textDirection)}drawTitle(){let t;let e=this.options,i=e.title,n=ep(i.font),o=eu(i.padding);if(!i.display)return;let s=eY(e.rtl,this.left,this.width),a=this.ctx,r=i.position,h=n.size/2,l=o.top+h,c=this.left,d=this.width;if(this.isHorizontal())d=Math.max(...this.lineWidths),t=this.top+l,c=tR(e.align,c,this.right-d);else{let i=this.columnSizes.reduce((t,e)=>Math.max(t,e.height),0);t=l+tR(e.align,this.top,this.bottom-i-e.labels.padding-this._computeTitleHeight())}let u=tR(r,c,c+d);a.textAlign=s.textAlign(tI(r)),a.textBaseline="middle",a.strokeStyle=i.color,a.fillStyle=i.color,a.font=n.string,eo(a,i.text,u,t,n)}_computeTitleHeight(){let t=this.options.title,e=ep(t.font),i=eu(t.padding);return t.display?e.lineHeight+i.height:0}_getLegendItemAt(t,e){let i,n,o;if(tk(t,this.left,this.right)&&tk(e,this.top,this.bottom)){for(i=0,o=this.legendHitBoxes;i<o.length;++i)if(tk(t,(n=o[i]).left,n.left+n.width)&&tk(e,n.top,n.top+n.height))return this.legendItems[i]}return null}handleEvent(t){var e;let i=this.options;if(("mousemove"!==(e=t.type)&&"mouseout"!==e||!i.onHover&&!i.onLeave)&&(!i.onClick||"click"!==e&&"mouseup"!==e))return;let n=this._getLegendItemAt(t.x,t.y);if("mousemove"===t.type||"mouseout"===t.type){let e=this._hoveredItem,o=n6(e,n);e&&!o&&V(i.onLeave,[t,e,this],this),this._hoveredItem=n,n&&!o&&V(i.onHover,[t,n,this],this)}else n&&V(i.onClick,[t,n,this],this)}}function n7(t,e){let i=t.text?t.text.length:0;return e*i}class ot extends i0{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){let i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;let n=R(i.text)?i.text.length:1;this._padding=eu(i.padding);let o=n*ep(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=o:this.width=o}isHorizontal(){let t=this.options.position;return"top"===t||"bottom"===t}_drawArgs(t){let e,i,n;let{top:o,left:s,bottom:a,right:r,options:h}=this,l=h.align,c=0;return this.isHorizontal()?(i=tR(l,s,r),n=o+t,e=r-s):("left"===h.position?(i=s+t,n=tR(l,a,o),c=-.5*to):(i=r-t,n=tR(l,o,a),c=.5*to),e=a-o),{titleX:i,titleY:n,maxWidth:e,rotation:c}}draw(){let t=this.ctx,e=this.options;if(!e.display)return;let i=ep(e.font),n=i.lineHeight,o=n/2+this._padding.top,{titleX:s,titleY:a,maxWidth:r,rotation:h}=this._drawArgs(o);eo(t,e.text,0,0,i,{color:e.color,maxWidth:r,rotation:h,textAlign:tI(e.align),textBaseline:"middle",translation:[s,a]})}}const oe=new WeakMap,oi={average(t){let e,i;if(!t.length)return!1;let n=0,o=0,s=0;for(e=0,i=t.length;e<i;++e){let i=t[e].element;if(i&&i.hasValue()){let t=i.tooltipPosition();n+=t.x,o+=t.y,++s}}return{x:n/s,y:o/s}},nearest(t,e){let i,n,o;if(!t.length)return!1;let s=e.x,a=e.y,r=Number.POSITIVE_INFINITY;for(i=0,n=t.length;i<n;++i){let n=t[i].element;if(n&&n.hasValue()){let t=n.getCenterPoint(),i=tb(e,t);i<r&&(r=i,o=n)}}if(o){let t=o.tooltipPosition();s=t.x,a=t.y}return{x:s,y:a}}};function on(t,e){return e&&(R(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function oo(t){return("string"==typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function os(t,e){let i=t.chart.ctx,{body:n,footer:o,title:s}=t,{boxWidth:a,boxHeight:r}=e,h=ep(e.bodyFont),l=ep(e.titleFont),c=ep(e.footerFont),d=s.length,u=o.length,p=n.length,f=eu(e.padding),m=f.height,g=0,_=n.reduce((t,e)=>t+e.before.length+e.lines.length+e.after.length,0);if(_+=t.beforeBody.length+t.afterBody.length,d&&(m+=d*l.lineHeight+(d-1)*e.titleSpacing+e.titleMarginBottom),_){let t=e.displayColors?Math.max(r,h.lineHeight):h.lineHeight;m+=p*t+(_-p)*h.lineHeight+(_-1)*e.bodySpacing}u&&(m+=e.footerMarginTop+u*c.lineHeight+(u-1)*e.footerSpacing);let v=0,y=function(t){g=Math.max(g,i.measureText(t).width+v)};return i.save(),i.font=l.string,H(t.title,y),i.font=h.string,H(t.beforeBody.concat(t.afterBody),y),v=e.displayColors?a+2+e.boxPadding:0,H(n,t=>{H(t.before,y),H(t.lines,y),H(t.after,y)}),v=0,i.font=c.string,H(t.footer,y),i.restore(),{width:g+=f.width,height:m}}function oa(t,e,i){let n=i.yAlign||e.yAlign||function(t,e){let{y:i,height:n}=e;return i<n/2?"top":i>t.height-n/2?"bottom":"center"}(t,i);return{xAlign:i.xAlign||e.xAlign||function(t,e,i,n){let{x:o,width:s}=i,{width:a,chartArea:{left:r,right:h}}=t,l="center";return"center"===n?l=o<=(r+h)/2?"left":"right":o<=s/2?l="left":o>=a-s/2&&(l="right"),function(t,e,i,n){let{x:o,width:s}=n,a=i.caretSize+i.caretPadding;if("left"===t&&o+s+a>e.width||"right"===t&&o-s-a<0)return!0}(l,t,e,i)&&(l="center"),l}(t,e,i,n),yAlign:n}}function or(t,e,i,n){let{caretSize:o,caretPadding:s,cornerRadius:a}=t,{xAlign:r,yAlign:h}=i,l=o+s,{topLeft:c,topRight:d,bottomLeft:u,bottomRight:p}=ed(a),f=function(t,e){let{x:i,width:n}=t;return"right"===e?i-=n:"center"===e&&(i-=n/2),i}(e,r),m=function(t,e,i){let{y:n,height:o}=t;return"top"===e?n+=i:"bottom"===e?n-=o+i:n-=o/2,n}(e,h,l);return"center"===h?"left"===r?f+=l:"right"===r&&(f-=l):"left"===r?f-=Math.max(c,u)+o:"right"===r&&(f+=Math.max(d,p)+o),{x:tL(f,0,n.width-e.width),y:tL(m,0,n.height-e.height)}}function oh(t,e,i){let n=eu(i.padding);return"center"===e?t.x+t.width/2:"right"===e?t.x+t.width-n.right:t.x+n.left}function ol(t,e){let i=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return i?t.override(i):t}const oc={beforeTitle:A,title(t){if(t.length>0){let e=t[0],i=e.chart.data.labels,n=i?i.length:0;if(this&&this.options&&"dataset"===this.options.mode)return e.dataset.label||"";if(e.label)return e.label;if(n>0&&e.dataIndex<n)return i[e.dataIndex]}return""},afterTitle:A,beforeBody:A,beforeLabel:A,label(t){if(this&&this.options&&"dataset"===this.options.mode)return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");let i=t.formattedValue;return I(i)||(e+=i),e},labelColor(t){let e=t.chart.getDatasetMeta(t.datasetIndex),i=e.controller.getStyle(t.dataIndex);return{borderColor:i.borderColor,backgroundColor:i.backgroundColor,borderWidth:i.borderWidth,borderDash:i.borderDash,borderDashOffset:i.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){let e=t.chart.getDatasetMeta(t.datasetIndex),i=e.controller.getStyle(t.dataIndex);return{pointStyle:i.pointStyle,rotation:i.rotation}},afterLabel:A,afterBody:A,beforeFooter:A,footer:A,afterFooter:A};function od(t,e,i,n){let o=t[e].call(i,n);return void 0===o?oc[e].call(i,n):o}class ou extends i0{static positioners=oi;constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){let t=this._cachedAnimations;if(t)return t;let e=this.chart,i=this.options.setContext(this.getContext()),n=i.enabled&&e.options.animation&&i.animations,o=new e4(this.chart,n);return n._cacheable&&(this._cachedAnimations=Object.freeze(o)),o}getContext(){return this.$context||(this.$context=em(this.chart.getContext(),{tooltip:this,tooltipItems:this._tooltipItems,type:"tooltip"}))}getTitle(t,e){let{callbacks:i}=e,n=od(i,"beforeTitle",this,t),o=od(i,"title",this,t),s=od(i,"afterTitle",this,t),a=[];return a=on(a,oo(n)),a=on(a,oo(o)),a=on(a,oo(s))}getBeforeBody(t,e){return on([],oo(od(e.callbacks,"beforeBody",this,t)))}getBody(t,e){let{callbacks:i}=e,n=[];return H(t,t=>{let e={before:[],lines:[],after:[]},o=ol(i,t);on(e.before,oo(od(o,"beforeLabel",this,t))),on(e.lines,od(o,"label",this,t)),on(e.after,oo(od(o,"afterLabel",this,t))),n.push(e)}),n}getAfterBody(t,e){return on([],oo(od(e.callbacks,"afterBody",this,t)))}getFooter(t,e){let{callbacks:i}=e,n=od(i,"beforeFooter",this,t),o=od(i,"footer",this,t),s=od(i,"afterFooter",this,t),a=[];return a=on(a,oo(n)),a=on(a,oo(o)),a=on(a,oo(s))}_createItems(t){let e,i;let n=this._active,o=this.chart.data,s=[],a=[],r=[],h=[];for(e=0,i=n.length;e<i;++e)h.push(function(t,e){let{element:i,datasetIndex:n,index:o}=e,s=t.getDatasetMeta(n).controller,{label:a,value:r}=s.getLabelAndValue(o);return{chart:t,label:a,parsed:s.getParsed(o),raw:t.data.datasets[n].data[o],formattedValue:r,dataset:s.getDataset(),dataIndex:o,datasetIndex:n,element:i}}(this.chart,n[e]));return t.filter&&(h=h.filter((e,i,n)=>t.filter(e,i,n,o))),t.itemSort&&(h=h.sort((e,i)=>t.itemSort(e,i,o))),H(h,e=>{let i=ol(t.callbacks,e);s.push(od(i,"labelColor",this,e)),a.push(od(i,"labelPointStyle",this,e)),r.push(od(i,"labelTextColor",this,e))}),this.labelColors=s,this.labelPointStyles=a,this.labelTextColors=r,this.dataPoints=h,h}update(t,e){let i;let n=this.options.setContext(this.getContext()),o=this._active,s=[];if(o.length){let t=oi[n.position].call(this,o,this._eventPosition);s=this._createItems(n),this.title=this.getTitle(s,n),this.beforeBody=this.getBeforeBody(s,n),this.body=this.getBody(s,n),this.afterBody=this.getAfterBody(s,n),this.footer=this.getFooter(s,n);let e=this._size=os(this,n),a=Object.assign({},t,e),r=oa(this.chart,n,a),h=or(n,a,r,this.chart);this.xAlign=r.xAlign,this.yAlign=r.yAlign,i={opacity:1,x:h.x,y:h.y,width:e.width,height:e.height,caretX:t.x,caretY:t.y}}else 0!==this.opacity&&(i={opacity:0});this._tooltipItems=s,this.$context=void 0,i&&this._resolveAnimations().update(this,i),t&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,n){let o=this.getCaretPosition(t,i,n);e.lineTo(o.x1,o.y1),e.lineTo(o.x2,o.y2),e.lineTo(o.x3,o.y3)}getCaretPosition(t,e,i){let n,o,s,a,r,h;let{xAlign:l,yAlign:c}=this,{caretSize:d,cornerRadius:u}=i,{topLeft:p,topRight:f,bottomLeft:m,bottomRight:g}=ed(u),{x:_,y:v}=t,{width:y,height:x}=e;return"center"===c?(r=v+x/2,"left"===l?(o=(n=_)-d,a=r+d,h=r-d):(o=(n=_+y)+d,a=r-d,h=r+d),s=n):(o="left"===l?_+Math.max(p,m)+d:"right"===l?_+y-Math.max(f,g)-d:this.caretX,"top"===c?(r=(a=v)-d,n=o-d,s=o+d):(r=(a=v+x)+d,n=o+d,s=o-d),h=a),{x1:n,x2:o,x3:s,y1:a,y2:r,y3:h}}drawTitle(t,e,i){let n,o,s;let a=this.title,r=a.length;if(r){let h=eY(i.rtl,this.x,this.width);for(s=0,t.x=oh(this,i.titleAlign,i),e.textAlign=h.textAlign(i.titleAlign),e.textBaseline="middle",n=ep(i.titleFont),o=i.titleSpacing,e.fillStyle=i.titleColor,e.font=n.string;s<r;++s)e.fillText(a[s],h.x(t.x),t.y+n.lineHeight/2),t.y+=n.lineHeight+o,s+1===r&&(t.y+=i.titleMarginBottom-o)}}_drawColorBox(t,e,i,n,o){let s=this.labelColors[i],a=this.labelPointStyles[i],{boxHeight:r,boxWidth:h}=o,l=ep(o.bodyFont),c=oh(this,"left",o),d=n.x(c),u=r<l.lineHeight?(l.lineHeight-r)/2:0,p=e.y+u;if(o.usePointStyle){let e={radius:Math.min(h,r)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},i=n.leftForLtr(d,h)+h/2,l=p+r/2;t.strokeStyle=o.multiKeyBackground,t.fillStyle=o.multiKeyBackground,t6(t,e,i,l),t.strokeStyle=s.borderColor,t.fillStyle=s.backgroundColor,t6(t,e,i,l)}else{t.lineWidth=B(s.borderWidth)?Math.max(...Object.values(s.borderWidth)):s.borderWidth||1,t.strokeStyle=s.borderColor,t.setLineDash(s.borderDash||[]),t.lineDashOffset=s.borderDashOffset||0;let e=n.leftForLtr(d,h),i=n.leftForLtr(n.xPlus(d,1),h-2),a=ed(s.borderRadius);Object.values(a).some(t=>0!==t)?(t.beginPath(),t.fillStyle=o.multiKeyBackground,es(t,{x:e,y:p,w:h,h:r,radius:a}),t.fill(),t.stroke(),t.fillStyle=s.backgroundColor,t.beginPath(),es(t,{x:i,y:p+1,w:h-2,h:r-2,radius:a}),t.fill()):(t.fillStyle=o.multiKeyBackground,t.fillRect(e,p,h,r),t.strokeRect(e,p,h,r),t.fillStyle=s.backgroundColor,t.fillRect(i,p+1,h-2,r-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){let n,o,s,a,r,h,l;let{body:c}=this,{bodySpacing:d,bodyAlign:u,displayColors:p,boxHeight:f,boxWidth:m,boxPadding:g}=i,_=ep(i.bodyFont),v=_.lineHeight,y=0,x=eY(i.rtl,this.x,this.width),b=function(i){e.fillText(i,x.x(t.x+y),t.y+v/2),t.y+=v+d},w=x.textAlign(u);for(e.textAlign=u,e.textBaseline="middle",e.font=_.string,t.x=oh(this,w,i),e.fillStyle=i.bodyColor,H(this.beforeBody,b),y=p&&"right"!==w?"center"===u?m/2+g:m+2+g:0,a=0,h=c.length;a<h;++a){for(n=c[a],o=this.labelTextColors[a],e.fillStyle=o,H(n.before,b),s=n.lines,p&&s.length&&(this._drawColorBox(e,t,a,x,i),v=Math.max(_.lineHeight,f)),r=0,l=s.length;r<l;++r)b(s[r]),v=_.lineHeight;H(n.after,b)}y=0,v=_.lineHeight,H(this.afterBody,b),t.y-=d}drawFooter(t,e,i){let n,o;let s=this.footer,a=s.length;if(a){let r=eY(i.rtl,this.x,this.width);for(t.x=oh(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=r.textAlign(i.footerAlign),e.textBaseline="middle",n=ep(i.footerFont),e.fillStyle=i.footerColor,e.font=n.string,o=0;o<a;++o)e.fillText(s[o],r.x(t.x),t.y+n.lineHeight/2),t.y+=n.lineHeight+i.footerSpacing}}drawBackground(t,e,i,n){let{xAlign:o,yAlign:s}=this,{x:a,y:r}=t,{width:h,height:l}=i,{topLeft:c,topRight:d,bottomLeft:u,bottomRight:p}=ed(n.cornerRadius);e.fillStyle=n.backgroundColor,e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth,e.beginPath(),e.moveTo(a+c,r),"top"===s&&this.drawCaret(t,e,i,n),e.lineTo(a+h-d,r),e.quadraticCurveTo(a+h,r,a+h,r+d),"center"===s&&"right"===o&&this.drawCaret(t,e,i,n),e.lineTo(a+h,r+l-p),e.quadraticCurveTo(a+h,r+l,a+h-p,r+l),"bottom"===s&&this.drawCaret(t,e,i,n),e.lineTo(a+u,r+l),e.quadraticCurveTo(a,r+l,a,r+l-u),"center"===s&&"left"===o&&this.drawCaret(t,e,i,n),e.lineTo(a,r+c),e.quadraticCurveTo(a,r,a+c,r),e.closePath(),e.fill(),n.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){let e=this.chart,i=this.$animations,n=i&&i.x,o=i&&i.y;if(n||o){let i=oi[t.position].call(this,this._active,this._eventPosition);if(!i)return;let s=this._size=os(this,t),a=Object.assign({},i,this._size),r=oa(e,t,a),h=or(t,a,r,e);(n._to!==h.x||o._to!==h.y)&&(this.xAlign=r.xAlign,this.yAlign=r.yAlign,this.width=s.width,this.height=s.height,this.caretX=i.x,this.caretY=i.y,this._resolveAnimations().update(this,h))}}_willRender(){return!!this.opacity}draw(t){let e=this.options.setContext(this.getContext()),i=this.opacity;if(!i)return;this._updateAnimationTarget(e);let n={width:this.width,height:this.height},o={x:this.x,y:this.y};i=.001>Math.abs(i)?0:i;let s=eu(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=i,this.drawBackground(o,t,n,e),eq(t,e.textDirection),o.y+=s.top,this.drawTitle(o,t,e),this.drawBody(o,t,e),this.drawFooter(o,t,e),eG(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){let i=this._active,n=t.map(({datasetIndex:t,index:e})=>{let i=this.chart.getDatasetMeta(t);if(!i)throw Error("Cannot find a dataset at index "+t);return{datasetIndex:t,element:i.data[e],index:e}}),o=!U(i,n),s=this._positionChanged(n,e);(o||s)&&(this._active=n,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;let n=this.options,o=this._active||[],s=this._getActiveElements(t,o,e,i),a=this._positionChanged(s,t),r=e||!U(s,o)||a;return r&&(this._active=s,(n.enabled||n.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),r}_getActiveElements(t,e,i,n){let o=this.options;if("mouseout"===t.type)return[];if(!n)return e;let s=this.chart.getElementsAtEventForMode(t,o.mode,o,i);return o.reverse&&s.reverse(),s}_positionChanged(t,e){let{caretX:i,caretY:n,options:o}=this,s=oi[o.position].call(this,t,e);return!1!==s&&(i!==s.x||n!==s.y)}}var op=/*#__PURE__*/Object.freeze({__proto__:null,Colors:{id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(t,e,i){let n;if(!i.enabled)return;let{data:{datasets:o},options:s}=t.config,{elements:a}=s;if(!i.forceOverride&&(nY(o)||s&&(s.borderColor||s.backgroundColor)||a&&nY(a)))return;let r=(n=0,(e,i)=>{var o,s,a;let r=t.getDatasetMeta(i).controller;r instanceof ig?(o=n,e.backgroundColor=e.data.map(()=>nU(o++)),n=o):r instanceof i_?(s=n,e.backgroundColor=e.data.map(()=>n$(s++)),n=s):r&&(a=n,e.borderColor=nU(a),e.backgroundColor=n$(a),n=++a)});o.forEach(r)}},Decimation:{id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(t,e,i)=>{if(!i.enabled){nG(t);return}let n=t.width;t.data.datasets.forEach((e,o)=>{let s;let{_data:a,indexAxis:r}=e,h=t.getDatasetMeta(o),l=a||e.data;if("y"===ef([r,t.options.indexAxis])||!h.controller.supportsDecimation)return;let c=t.scales[h.xAxisID];if("linear"!==c.type&&"time"!==c.type||t.options.parsing)return;let{start:d,count:u}=function(t,e){let i;let n=e.length,o=0,{iScale:s}=t,{min:a,max:r,minDefined:h,maxDefined:l}=s.getUserBounds();return h&&(o=tL(tS(e,s.axis,a).lo,0,n-1)),i=l?tL(tS(e,s.axis,r).hi+1,o,n)-o:n-o,{start:o,count:i}}(h,l),p=i.threshold||4*n;if(u<=p){nq(e);return}switch(I(a)&&(e._data=l,delete e.data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(t){this._data=t}})),i.algorithm){case"lttb":s=function(t,e,i,n,o){let s,a,r,h,l;let c=o.samples||n;if(c>=i)return t.slice(e,e+i);let d=[],u=(i-2)/(c-2),p=0,f=e+i-1,m=e;for(s=0,d[p++]=t[m];s<c-2;s++){let n,o=0,c=0,f=Math.floor((s+1)*u)+1+e,g=Math.min(Math.floor((s+2)*u)+1,i)+e,_=g-f;for(n=f;n<g;n++)o+=t[n].x,c+=t[n].y;o/=_,c/=_;let v=Math.floor(s*u)+1+e,y=Math.min(Math.floor((s+1)*u)+1,i)+e,{x:x,y:b}=t[m];for(r=h=-1,n=v;n<y;n++)(h=.5*Math.abs((x-o)*(t[n].y-b)-(x-t[n].x)*(c-b)))>r&&(r=h,a=t[n],l=n);d[p++]=a,m=l}return d[p++]=t[f],d}(l,d,u,n,i);break;case"min-max":s=function(t,e,i,n){let o,s,a,r,h,l,c,d,u,p,f=0,m=0,g=[],_=t[e].x,v=t[e+i-1].x,y=v-_;for(o=e;o<e+i;++o){a=((s=t[o]).x-_)/y*n,r=s.y;let e=0|a;if(e===h)r<u?(u=r,l=o):r>p&&(p=r,c=o),f=(m*f+s.x)/++m;else{let i=o-1;if(!I(l)&&!I(c)){let e=Math.min(l,c),n=Math.max(l,c);e!==d&&e!==i&&g.push({...t[e],x:f}),n!==d&&n!==i&&g.push({...t[n],x:f})}o>0&&i!==d&&g.push(t[i]),g.push(s),h=e,m=0,u=p=r,l=c=d=o}}return g}(l,d,u,n);break;default:throw Error(`Unsupported decimation algorithm '${i.algorithm}'`)}e._decimated=s})},destroy(t){nG(t)}},Filler:{id:"filler",afterDatasetsUpdate(t,e,i){let n,o,s,a;let r=(t.data.datasets||[]).length,h=[];for(o=0;o<r;++o)s=(n=t.getDatasetMeta(o)).dataset,a=null,s&&s.options&&s instanceof nI&&(a={visible:t.isDatasetVisible(o),index:o,fill:function(t,e,i){var n,o;let s=function(t){let e=t.options,i=e.fill,n=Z(i&&i.target,i);return void 0===n&&(n=!!e.backgroundColor),!1!==n&&null!==n&&(!0===n?"origin":n)}(t);if(B(s))return!isNaN(s.value)&&s;let a=parseFloat(s);return N(a)&&Math.floor(a)===a?(n=s[0],o=a,("-"===n||"+"===n)&&(o=e+o),o!==e&&!(o<0)&&!(o>=i)&&o):["origin","start","end","stack","shape"].indexOf(s)>=0&&s}(s,o,r),chart:t,axis:n.controller.options.indexAxis,scale:n.vScale,line:s}),n.$filler=a,h.push(a);for(o=0;o<r;++o)(a=h[o])&&!1!==a.fill&&(a.fill=function(t,e,i){let n;let o=t[e],s=o.fill,a=[e];if(!i)return s;for(;!1!==s&&-1===a.indexOf(s);){if(!N(s))return s;if(!(n=t[s]))break;if(n.visible)return s;a.push(s),s=n.fill}return!1}(h,o,i.propagate))},beforeDraw(t,e,i){let n="beforeDraw"===i.drawTime,o=t.getSortedVisibleDatasetMetas(),s=t.chartArea;for(let e=o.length-1;e>=0;--e){let i=o[e].$filler;i&&(i.line.updateControlPoints(s,i.axis),n&&i.fill&&n2(t.ctx,i,s))}},beforeDatasetsDraw(t,e,i){if("beforeDatasetsDraw"!==i.drawTime)return;let n=t.getSortedVisibleDatasetMetas();for(let e=n.length-1;e>=0;--e){let i=n[e].$filler;n0(i)&&n2(t.ctx,i,t.chartArea)}},beforeDatasetDraw(t,e,i){let n=e.meta.$filler;n0(n)&&"beforeDatasetDraw"===i.drawTime&&n2(t.ctx,n,t.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}},Legend:{id:"legend",_element:n9,start(t,e,i){let n=t.legend=new n9({ctx:t.ctx,options:i,chart:t});iR.configure(t,n,i),iR.addBox(t,n)},stop(t){iR.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,i){let n=t.legend;iR.configure(t,n,i),n.options=i},afterUpdate(t){let e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,i){let n=e.datasetIndex,o=i.chart;o.isDatasetVisible(n)?(o.hide(n),e.hidden=!0):(o.show(n),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){let e=t.data.datasets,{labels:{usePointStyle:i,pointStyle:n,textAlign:o,color:s,useBorderRadius:a,borderRadius:r}}=t.legend.options;return t._getSortedDatasetMetas().map(t=>{let h=t.controller.getStyle(i?0:void 0),l=eu(h.borderWidth);return{text:e[t.index].label,fillStyle:h.backgroundColor,fontColor:s,hidden:!t.visible,lineCap:h.borderCapStyle,lineDash:h.borderDash,lineDashOffset:h.borderDashOffset,lineJoin:h.borderJoinStyle,lineWidth:(l.width+l.height)/4,strokeStyle:h.borderColor,pointStyle:n||h.pointStyle,rotation:h.rotation,textAlign:o||h.textAlign,borderRadius:a&&(r||h.borderRadius),datasetIndex:t.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}},SubTitle:{id:"subtitle",start(t,e,i){let n=new ot({ctx:t.ctx,options:i,chart:t});iR.configure(t,n,i),iR.addBox(t,n),oe.set(t,n)},stop(t){iR.removeBox(t,oe.get(t)),oe.delete(t)},beforeUpdate(t,e,i){let n=oe.get(t);iR.configure(t,n,i),n.options=i},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}},Title:{id:"title",_element:ot,start(t,e,i){!function(t,e){let i=new ot({ctx:t.ctx,options:e,chart:t});iR.configure(t,i,e),iR.addBox(t,i),t.titleBlock=i}(t,i)},stop(t){let e=t.titleBlock;iR.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,i){let n=t.titleBlock;iR.configure(t,n,i),n.options=i},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}},Tooltip:{id:"tooltip",_element:ou,positioners:oi,afterInit(t,e,i){i&&(t.tooltip=new ou({chart:t,options:i}))},beforeUpdate(t,e,i){t.tooltip&&t.tooltip.initialize(i)},reset(t,e,i){t.tooltip&&t.tooltip.initialize(i)},afterDraw(t){let e=t.tooltip;if(e&&e._willRender()){let i={tooltip:e};if(!1===t.notifyPlugins("beforeTooltipDraw",{...i,cancelable:!0}))return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",i)}},afterEvent(t,e){if(t.tooltip){let i=e.replay;t.tooltip.handleEvent(e.event,i,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:oc},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>"filter"!==t&&"itemSort"!==t&&"external"!==t,_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]}});const of=(t,e,i,n)=>("string"==typeof e?(i=t.push(e)-1,n.unshift({index:i,label:e})):isNaN(e)&&(i=null),i),om=(t,e)=>null===t?null:tL(Math.round(t),0,e);function og(t){let e=this.getLabels();return t>=0&&t<e.length?e[t]:t}function o_(t,e,{horizontal:i,minRotation:n}){let o=tv(n),s=.75*e*(""+t).length;return Math.min(e/((i?Math.sin(o):Math.cos(o))||.001),s)}class ov extends i9{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return I(t)||("number"==typeof t||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){let{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds(),{min:n,max:o}=this,s=t=>n=e?n:t,a=t=>o=i?o:t;if(t){let t=tp(n),e=tp(o);t<0&&e<0?a(0):t>0&&e>0&&s(0)}if(n===o){let e=0===o?1:Math.abs(.05*o);a(o+e),t||s(n-e)}this.min=n,this.max=o}getTickLimit(){let t;let e=this.options.ticks,{maxTicksLimit:i,stepSize:n}=e;return n?(t=Math.ceil(this.max/n)-Math.floor(this.min/n)+1)>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${t} ticks. Limiting to 1000.`),t=1e3):(t=this.computeTickLimit(),i=i||11),i&&(t=Math.min(i,t)),t}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){let t=this.options,e=t.ticks,i=this.getTickLimit();i=Math.max(2,i);let n={maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:!1!==e.includeBounds},o=this._range||this,s=function(t,e){let i,n,o,s;let a=[],{bounds:r,step:h,min:l,max:c,precision:d,count:u,maxTicks:p,maxDigits:f,includeBounds:m}=t,g=h||1,_=p-1,{min:v,max:y}=e,x=!I(l),b=!I(c),w=!I(u),M=(y-v)/(f+1),P=tm((y-v)/_/g)*g;if(P<1e-14&&!x&&!b)return[{value:v},{value:y}];(s=Math.ceil(y/P)-Math.floor(v/P))>_&&(P=tm(s*P/_/g)*g),I(d)||(P=Math.ceil(P*(i=Math.pow(10,d)))/i),"ticks"===r?(n=Math.floor(v/P)*P,o=Math.ceil(y/P)*P):(n=v,o=y),x&&b&&h&&function(t,e){let i=Math.round(t);return i-e<=t&&i+e>=t}((c-l)/h,P/1e3)?(s=Math.round(Math.min((c-l)/P,p)),P=(c-l)/s,n=l,o=c):w?(n=x?l:n,P=((o=b?c:o)-n)/(s=u-1)):s=tf(s=(o-n)/P,Math.round(s),P/1e3)?Math.round(s):Math.ceil(s);let k=Math.max(ty(P),ty(n));n=Math.round(n*(i=Math.pow(10,I(d)?k:d)))/i,o=Math.round(o*i)/i;let T=0;for(x&&(m&&n!==l?(a.push({value:l}),n<l&&T++,tf(Math.round((n+T*P)*i)/i,l,o_(l,M,t))&&T++):n<l&&T++);T<s;++T){let t=Math.round((n+T*P)*i)/i;if(b&&t>c)break;a.push({value:t})}return b&&m&&o!==c?a.length&&tf(a[a.length-1].value,c,o_(c,M,t))?a[a.length-1].value=c:a.push({value:c}):b&&o!==c||a.push({value:o}),a}(n,o);return"ticks"===t.bounds&&t_(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}configure(){let t=this.ticks,e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){let n=(i-e)/Math.max(t.length-1,1)/2;e-=n,i+=n}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return tX(t,this.chart.options.locale,this.options.ticks.format)}}class oy extends ov{static id="linear";static defaults={ticks:{callback:tJ.formatters.numeric}};determineDataLimits(){let{min:t,max:e}=this.getMinMax(!0);this.min=N(t)?t:0,this.max=N(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){let t=this.isHorizontal(),e=t?this.width:this.height,i=tv(this.options.ticks.minRotation),n=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,n.lineHeight/((t?Math.sin(i):Math.cos(i))||.001)))}getPixelForValue(t){return null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}const ox=t=>Math.floor(tu(t)),ob=(t,e)=>Math.pow(10,ox(t)+e);function ow(t){let e=t/Math.pow(10,ox(t));return 1===e}function oM(t,e,i){let n=Math.pow(10,i);return Math.ceil(e/n)-Math.floor(t/n)}class oP extends i9{static id="logarithmic";static defaults={ticks:{callback:tJ.formatters.logarithmic,major:{enabled:!0}}};constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){let i=ov.prototype.parse.apply(this,[t,e]);if(0===i){this._zero=!0;return}return N(i)&&i>0?i:null}determineDataLimits(){let{min:t,max:e}=this.getMinMax(!0);this.min=N(t)?Math.max(0,t):null,this.max=N(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!N(this._userMin)&&(this.min=t===ob(this.min,0)?ob(this.min,-1):ob(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){let{minDefined:t,maxDefined:e}=this.getUserBounds(),i=this.min,n=this.max,o=e=>i=t?i:e,s=t=>n=e?n:t;i===n&&(i<=0?(o(1),s(10)):(o(ob(i,-1)),s(ob(n,1)))),i<=0&&o(ob(n,-1)),n<=0&&s(ob(i,1)),this.min=i,this.max=n}buildTicks(){let t=this.options,e={min:this._userMin,max:this._userMax},i=function(t,{min:e,max:i}){e=F(t.min,e);let n=[],o=ox(e),s=function(t,e){let i=e-t,n=ox(i);for(;oM(t,e,n)>10;)n++;for(;10>oM(t,e,n);)n--;return Math.min(n,ox(t))}(e,i),a=s<0?Math.pow(10,Math.abs(s)):1,r=Math.pow(10,s),h=o>s?Math.pow(10,o):0,l=Math.round((e-h)*a)/a,c=Math.floor((e-h)/r/10)*r*10,d=Math.floor((l-c)/Math.pow(10,s)),u=F(t.min,Math.round((h+c+d*Math.pow(10,s))*a)/a);for(;u<i;)n.push({value:u,major:ow(u),significand:d}),d>=10?d=d<15?15:20:d++,d>=20&&(d=2,a=++s>=0?1:a),u=Math.round((h+c+d*Math.pow(10,s))*a)/a;let p=F(t.max,u);return n.push({value:p,major:ow(p),significand:d}),n}(e,this);return"ticks"===t.bounds&&t_(i,this,"value"),t.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(t){return void 0===t?"0":tX(t,this.chart.options.locale,this.options.ticks.format)}configure(){let t=this.min;super.configure(),this._startValue=tu(t),this._valueRange=tu(this.max)-tu(t)}getPixelForValue(t){return((void 0===t||0===t)&&(t=this.min),null===t||isNaN(t))?NaN:this.getPixelForDecimal(t===this.min?0:(tu(t)-this._startValue)/this._valueRange)}getValueForPixel(t){let e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}function oL(t){let e=t.ticks;if(e.display&&t.display){let t=eu(e.backdropPadding);return Z(e.font&&e.font.size,t5.font.size)+t.height}return 0}function ok(t,e,i,n,o){return t===n||t===o?{start:e-i/2,end:e+i/2}:t<n||t>o?{start:e-i,end:e}:{start:e,end:e+i}}function oT(t,e,i,n){let{ctx:o}=t;if(i)o.arc(t.xCenter,t.yCenter,e,0,ts);else{let i=t.getPointPosition(0,e);o.moveTo(i.x,i.y);for(let s=1;s<n;s++)i=t.getPointPosition(s,e),o.lineTo(i.x,i.y)}}class oS extends ov{static id="radialLinear";static defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:tJ.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback:t=>t,padding:5,centerPointLabels:!1}};static defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"};static descriptors={angleLines:{_fallback:"grid"}};constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){let t=this._padding=eu(oL(this.options)/2),e=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(e,i)/2)}determineDataLimits(){let{min:t,max:e}=this.getMinMax(!1);this.min=N(t)&&!isNaN(t)?t:0,this.max=N(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/oL(this.options))}generateTickLabels(t){ov.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((t,e)=>{let i=V(this.options.pointLabels.callback,[t,e],this);return i||0===i?i:""}).filter((t,e)=>this.chart.getDataVisibility(e))}fit(){let t=this.options;t.display&&t.pointLabels.display?function(t){let e={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottom-t._padding.bottom},i=Object.assign({},e),n=[],o=[],s=t._pointLabels.length,a=t.options.pointLabels,r=a.centerPointLabels?to/s:0;for(let c=0;c<s;c++){var h,l;let s=a.setContext(t.getPointLabelContext(c));o[c]=s.padding;let d=t.getPointPosition(c,t.drawingArea+o[c],r),u=ep(s.font),p=(h=t.ctx,l=R(l=t._pointLabels[c])?l:[l],{w:/**
 * @private
 */// eslint-disable-next-line complexity
function(t,e,i,n){let o,s,a,r,h;let l=(n=n||{}).data=n.data||{},c=n.garbageCollect=n.garbageCollect||[];n.font!==e&&(l=n.data={},c=n.garbageCollect=[],n.font=e),t.save(),t.font=e;let d=0,u=i.length;for(o=0;o<u;o++)// Undefined strings and arrays should not be measured
if(null==(r=i[o])||R(r)){if(R(r))// to do maybe simplify this function a bit so we can do this more recursively?
for(s=0,a=r.length;s<a;s++)null==(h=r[s])||R(h)||(d=t3(t,l,c,d,h))}else d=t3(t,l,c,d,r);t.restore();let p=c.length/2;if(p>i.length){for(o=0;o<p;o++)delete l[c[o]];c.splice(0,p)}return d}(h,u.string,l),h:l.length*u.lineHeight});n[c]=p;let f=tM(t.getIndexAngle(c)+r),m=Math.round(f*(180/to)),g=ok(m,d.x,p.w,0,180),_=ok(m,d.y,p.h,90,270);!function(t,e,i,n,o){let s=Math.abs(Math.sin(i)),a=Math.abs(Math.cos(i)),r=0,h=0;n.start<e.l?(r=(e.l-n.start)/s,t.l=Math.min(t.l,e.l-r)):n.end>e.r&&(r=(n.end-e.r)/s,t.r=Math.max(t.r,e.r+r)),o.start<e.t?(h=(e.t-o.start)/a,t.t=Math.min(t.t,e.t-h)):o.end>e.b&&(h=(o.end-e.b)/a,t.b=Math.max(t.b,e.b+h))}(i,e,f,g,_)}t.setCenterPoint(e.l-i.l,i.r-e.r,e.t-i.t,i.b-e.b),t._pointLabelItems=function(t,e,i){let n;let o=[],s=t._pointLabels.length,a=t.options,{centerPointLabels:r,display:h}=a.pointLabels,l={extra:oL(a)/2,additionalAngle:r?to/s:0};for(let a=0;a<s;a++){l.padding=i[a],l.size=e[a];let s=function(t,e,i){var n,o,s,a;let r=t.drawingArea,{extra:h,additionalAngle:l,padding:c,size:d}=i,u=t.getPointPosition(e,r+h+c,l),p=Math.round(tM(u.angle+tl)*(180/to)),f=(n=u.y,o=d.h,90===p||270===p?n-=o/2:(p>270||p<90)&&(n-=o),n),m=0===p||180===p?"center":p<180?"left":"right",g=(s=u.x,a=d.w,"right"===m?s-=a:"center"===m&&(s-=a/2),s);return{visible:!0,x:u.x,y:f,textAlign:m,left:g,top:f,right:g+d.w,bottom:f+d.h}}(t,a,l);o.push(s),"auto"===h&&(s.visible=function(t,e){if(!e)return!0;let{left:i,top:n,right:o,bottom:s}=t,a=t7({x:i,y:n},e)||t7({x:i,y:s},e)||t7({x:o,y:n},e)||t7({x:o,y:s},e);return!a}(s,n),s.visible&&(n=s))}return o}(t,n,o)}(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,i,n){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((i-n)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,i,n))}getIndexAngle(t){let e=ts/(this._pointLabels.length||1),i=this.options.startAngle||0;return tM(t*e+tv(i))}getDistanceFromCenterForValue(t){if(I(t))return NaN;let e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(I(t))return NaN;let e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){let e=this._pointLabels||[];if(t>=0&&t<e.length){let i=e[t];return em(this.getContext(),{label:i,index:t,type:"pointLabel"})}}getPointPosition(t,e,i=0){let n=this.getIndexAngle(t)-tl+i;return{x:Math.cos(n)*e+this.xCenter,y:Math.sin(n)*e+this.yCenter,angle:n}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){let{left:e,top:i,right:n,bottom:o}=this._pointLabelItems[t];return{left:e,top:i,right:n,bottom:o}}drawBackground(){let{backgroundColor:t,grid:{circular:e}}=this.options;if(t){let i=this.ctx;i.save(),i.beginPath(),oT(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){let t,e,i;let n=this.ctx,o=this.options,{angleLines:s,grid:a,border:r}=o,h=this._pointLabels.length;if(o.pointLabels.display&&function(t,e){let{ctx:i,options:{pointLabels:n}}=t;for(let o=e-1;o>=0;o--){let e=t._pointLabelItems[o];if(!e.visible)continue;let s=n.setContext(t.getPointLabelContext(o));!function(t,e,i){let{left:n,top:o,right:s,bottom:a}=i,{backdropColor:r}=e;if(!I(r)){let i=ed(e.borderRadius),h=eu(e.backdropPadding);t.fillStyle=r;let l=n-h.left,c=o-h.top,d=s-n+h.width,u=a-o+h.height;Object.values(i).some(t=>0!==t)?(t.beginPath(),es(t,{x:l,y:c,w:d,h:u,radius:i}),t.fill()):t.fillRect(l,c,d,u)}}(i,s,e);let a=ep(s.font),{x:r,y:h,textAlign:l}=e;eo(i,t._pointLabels[o],r,h+a.lineHeight/2,a,{color:s.color,textAlign:l,textBaseline:"middle"})}}(this,h),a.display&&this.ticks.forEach((t,i)=>{if(0!==i){e=this.getDistanceFromCenterForValue(t.value);let n=this.getContext(i),o=a.setContext(n),s=r.setContext(n);!function(t,e,i,n,o){let s=t.ctx,a=e.circular,{color:r,lineWidth:h}=e;(a||n)&&r&&h&&!(i<0)&&(s.save(),s.strokeStyle=r,s.lineWidth=h,s.setLineDash(o.dash),s.lineDashOffset=o.dashOffset,s.beginPath(),oT(t,i,a,n),s.closePath(),s.stroke(),s.restore())}(this,o,e,h,s)}}),s.display){for(n.save(),t=h-1;t>=0;t--){let a=s.setContext(this.getPointLabelContext(t)),{color:r,lineWidth:h}=a;h&&r&&(n.lineWidth=h,n.strokeStyle=r,n.setLineDash(a.borderDash),n.lineDashOffset=a.borderDashOffset,e=this.getDistanceFromCenterForValue(o.ticks.reverse?this.min:this.max),i=this.getPointPosition(t,e),n.beginPath(),n.moveTo(this.xCenter,this.yCenter),n.lineTo(i.x,i.y),n.stroke())}n.restore()}}drawBorder(){}drawLabels(){let t,e;let i=this.ctx,n=this.options,o=n.ticks;if(!o.display)return;let s=this.getIndexAngle(0);i.save(),i.translate(this.xCenter,this.yCenter),i.rotate(s),i.textAlign="center",i.textBaseline="middle",this.ticks.forEach((s,a)=>{if(0===a&&!n.reverse)return;let r=o.setContext(this.getContext(a)),h=ep(r.font);if(t=this.getDistanceFromCenterForValue(this.ticks[a].value),r.showLabelBackdrop){i.font=h.string,e=i.measureText(s.label).width,i.fillStyle=r.backdropColor;let n=eu(r.backdropPadding);i.fillRect(-e/2-n.left,-t-h.size/2-n.top,e+n.width,h.size+n.height)}eo(i,s.label,0,-t,h,{color:r.color,strokeColor:r.textStrokeColor,strokeWidth:r.textStrokeWidth})}),i.restore()}drawTitle(){}}const oC={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},oE=/* #__PURE__ */Object.keys(oC);function oO(t,e){return t-e}function oz(t,e){if(I(e))return null;let i=t._adapter,{parser:n,round:o,isoWeekday:s}=t._parseOpts,a=e;return("function"==typeof n&&(a=n(a)),N(a)||(a="string"==typeof n?i.parse(a,n):i.parse(a)),null===a)?null:(o&&(a="week"===o&&(tg(s)||!0===s)?i.startOf(a,"isoWeek",s):i.startOf(a,o)),+a)}function oA(t,e,i,n){let o=oE.length;for(let s=oE.indexOf(t);s<o-1;++s){let t=oC[oE[s]],o=t.steps?t.steps:Number.MAX_SAFE_INTEGER;if(t.common&&Math.ceil((i-e)/(o*t.size))<=n)return oE[s]}return oE[o-1]}function oD(t,e,i){if(i){if(i.length){let{lo:n,hi:o}=tT(i,e),s=i[n]>=e?i[n]:i[o];t[s]=!0}}else t[e]=!0}function oI(t,e,i){let n,o;let s=[],a={},r=e.length;for(n=0;n<r;++n)a[o=e[n]]=n,s.push({value:o,major:!1});return 0!==r&&i?function(t,e,i,n){let o,s;let a=t._adapter,r=+a.startOf(e[0].value,n),h=e[e.length-1].value;for(o=r;o<=h;o=+a.add(o,1,n))(s=i[o])>=0&&(e[s].major=!0);return e}(t,s,a,i):s}class oR extends i9{static id="time";static defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}};constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){let i=t.time||(t.time={}),n=this._adapter=new ib._date(t.adapters.date);n.init(e),X(i.displayFormats,n.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return void 0===t?null:oz(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){let t=this.options,e=this._adapter,i=t.time.unit||"day",{min:n,max:o,minDefined:s,maxDefined:a}=this.getUserBounds();function r(t){s||isNaN(t.min)||(n=Math.min(n,t.min)),a||isNaN(t.max)||(o=Math.max(o,t.max))}s&&a||(r(this._getLabelBounds()),("ticks"!==t.bounds||"labels"!==t.ticks.source)&&r(this.getMinMax(!1))),n=N(n)&&!isNaN(n)?n:+e.startOf(Date.now(),i),o=N(o)&&!isNaN(o)?o:+e.endOf(Date.now(),i)+1,this.min=Math.min(n,o-1),this.max=Math.max(n+1,o)}_getLabelBounds(){let t=this.getLabelTimestamps(),e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){let t=this.options,e=t.time,i=t.ticks,n="labels"===i.source?this.getLabelTimestamps():this._generate();"ticks"===t.bounds&&n.length&&(this.min=this._userMin||n[0],this.max=this._userMax||n[n.length-1]);let o=this.min,s=this.max,a=/**
 * Return subset of `values` between `min` and `max` inclusive.
 * Values are assumed to be in sorted order.
 * @param values - sorted array of values
 * @param min - min value
 * @param max - max value
 */function(t,e,i){let n=0,o=t.length;for(;n<o&&t[n]<e;)n++;for(;o>n&&t[o-1]>i;)o--;return n>0||o<t.length?t.slice(n,o):t}(n,o,s);return this._unit=e.unit||(i.autoSkip?oA(e.minUnit,this.min,this.max,this._getLabelCapacity(o)):function(t,e,i,n,o){for(let s=oE.length-1;s>=oE.indexOf(i);s--){let i=oE[s];if(oC[i].common&&t._adapter.diff(o,n,i)>=e-1)return i}return oE[i?oE.indexOf(i):0]}(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=i.major.enabled&&"year"!==this._unit?function(t){for(let e=oE.indexOf(t)+1,i=oE.length;e<i;++e)if(oC[oE[e]].common)return oE[e]}(this._unit):void 0,this.initOffsets(n),t.reverse&&a.reverse(),oI(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e,i,n=0,o=0;this.options.offset&&t.length&&(e=this.getDecimalForValue(t[0]),n=1===t.length?1-e:(this.getDecimalForValue(t[1])-e)/2,i=this.getDecimalForValue(t[t.length-1]),o=1===t.length?i:(i-this.getDecimalForValue(t[t.length-2]))/2);let s=t.length<3?.5:.25;n=tL(n,0,s),o=tL(o,0,s),this._offsets={start:n,end:o,factor:1/(n+1+o)}}_generate(){let t,e;let i=this._adapter,n=this.min,o=this.max,s=this.options,a=s.time,r=a.unit||oA(a.minUnit,n,o,this._getLabelCapacity(n)),h=Z(s.ticks.stepSize,1),l="week"===r&&a.isoWeekday,c=tg(l)||!0===l,d={},u=n;if(c&&(u=+i.startOf(u,"isoWeek",l)),u=+i.startOf(u,c?"day":r),i.diff(o,n,r)>1e5*h)throw Error(n+" and "+o+" are too far apart with stepSize of "+h+" "+r);let p="data"===s.ticks.source&&this.getDataTimestamps();for(t=u,e=0;t<o;t=+i.add(t,h,r),e++)oD(d,t,p);return(t===o||"ticks"===s.bounds||1===e)&&oD(d,t,p),Object.keys(d).sort(oO).map(t=>+t)}getLabelForValue(t){let e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}format(t,e){let i=this.options,n=i.time.displayFormats,o=this._unit,s=e||n[o];return this._adapter.format(t,s)}_tickFormatFunction(t,e,i,n){let o=this.options,s=o.ticks.callback;if(s)return V(s,[t,e,i],this);let a=o.time.displayFormats,r=this._unit,h=this._majorUnit,l=r&&a[r],c=h&&a[h],d=i[e],u=h&&c&&d&&d.major;return this._adapter.format(t,n||(u?c:l))}generateTickLabels(t){let e,i,n;for(e=0,i=t.length;e<i;++e)(n=t[e]).label=this._tickFormatFunction(n.value,e,t)}getDecimalForValue(t){return null===t?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){let e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){let e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){let e=this.options.ticks,i=this.ctx.measureText(t).width,n=tv(this.isHorizontal()?e.maxRotation:e.minRotation),o=Math.cos(n),s=Math.sin(n),a=this._resolveTickFontOptions(0).size;return{w:i*o+a*s,h:i*s+a*o}}_getLabelCapacity(t){let e=this.options.time,i=e.displayFormats,n=i[e.unit]||i.millisecond,o=this._tickFormatFunction(t,0,oI(this,[t],this._majorUnit),n),s=this._getLabelSize(o),a=Math.floor(this.isHorizontal()?this.width/s.w:this.height/s.h)-1;return a>0?a:1}getDataTimestamps(){let t,e,i=this._cache.data||[];if(i.length)return i;let n=this.getMatchingVisibleMetas();if(this._normalized&&n.length)return this._cache.data=n[0].controller.getAllParsedValues(this);for(t=0,e=n.length;t<e;++t)i=i.concat(n[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(i)}getLabelTimestamps(){let t,e;let i=this._cache.labels||[];if(i.length)return i;let n=this.getLabels();for(t=0,e=n.length;t<e;++t)i.push(oz(this,n[t]));return this._cache.labels=this._normalized?i:this.normalize(i)}normalize(t){return tz(t.sort(oO))}}function oB(t,e,i){let n,o,s,a,r=0,h=t.length-1;i?(e>=t[r].pos&&e<=t[h].pos&&({lo:r,hi:h}=tS(t,"pos",e)),{pos:n,time:s}=t[r],{pos:o,time:a}=t[h]):(e>=t[r].time&&e<=t[h].time&&({lo:r,hi:h}=tS(t,"time",e)),{time:n,pos:s}=t[r],{time:o,pos:a}=t[h]);let l=o-n;return l?s+(a-s)*(e-n)/l:s}class oN extends oR{static id="timeseries";static defaults=oR.defaults;constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){let t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=oB(e,this.min),this._tableRange=oB(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){let e,i,n;let{min:o,max:s}=this,a=[],r=[];for(e=0,i=t.length;e<i;++e)(n=t[e])>=o&&n<=s&&a.push(n);if(a.length<2)return[{time:o,pos:0},{time:s,pos:1}];for(e=0,i=a.length;e<i;++e)Math.round((a[e+1]+a[e-1])/2)!==(n=a[e])&&r.push({time:n,pos:e/(i-1)});return r}_generate(){let t=this.min,e=this.max,i=super.getDataTimestamps();return i.includes(t)&&i.length||i.splice(0,0,t),i.includes(e)&&1!==i.length||i.push(e),i.sort((t,e)=>t-e)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;let e=this.getDataTimestamps(),i=this.getLabelTimestamps();return t=e.length&&i.length?this.normalize(e.concat(i)):e.length?e:i,t=this._cache.all=t}getDecimalForValue(t){return(oB(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){let e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return oB(this._table,i*this._tableRange+this._minPos,!0)}}var oF=/*#__PURE__*/Object.freeze({__proto__:null,CategoryScale:class extends i9{static id="category";static defaults={ticks:{callback:og}};constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){let e=this._addedLabels;if(e.length){let t=this.getLabels();for(let{index:i,label:n}of e)t[i]===n&&t.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(I(t))return null;let i=this.getLabels();return om(e=isFinite(e)&&i[e]===t?e:function(t,e,i,n){let o=t.indexOf(e);if(-1===o)return of(t,e,i,n);let s=t.lastIndexOf(e);return o!==s?i:o}(i,t,Z(e,t),this._addedLabels),i.length-1)}determineDataLimits(){let{minDefined:t,maxDefined:e}=this.getUserBounds(),{min:i,max:n}=this.getMinMax(!0);"ticks"!==this.options.bounds||(t||(i=0),e||(n=this.getLabels().length-1)),this.min=i,this.max=n}buildTicks(){let t=this.min,e=this.max,i=this.options.offset,n=[],o=this.getLabels();o=0===t&&e===o.length-1?o:o.slice(t,e+1),this._valueRange=Math.max(o.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let i=t;i<=e;i++)n.push({value:i});return n}getLabelForValue(t){return og.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return"number"!=typeof t&&(t=this.parse(t)),null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){let e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}},LinearScale:oy,LogarithmicScale:oP,RadialLinearScale:oS,TimeScale:oR,TimeSeriesScale:oN});const oZ=[iv,nW,op,oF];nP.register(...oZ);var oj={};!function(t){/*
   * @namespace Util
   *
   * Various utility functions, used by Leaflet internally.
   */// @function extend(dest: Object, src?: Object): Object
// Merges the properties of the `src` object (or multiple objects) into `dest` object and returns the latter. Has an `L.extend` shortcut.
function e(t){var e,i,n,o;for(i=1,n=arguments.length;i<n;i++)for(e in o=arguments[i])t[e]=o[e];return t}// @function create(proto: Object, properties?: Object): Object
// Compatibility polyfill for [Object.create](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
var i,n,o,s,a,r,h,l,c,d,u=Object.create||function(){function t(){}return function(e){return t.prototype=e,new t}}();// @function bind(fn: Function, …): Function
// Returns a new function bound to the arguments passed, like [Function.prototype.bind](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
// Has a `L.bind()` shortcut.
function p(t,e){var i=Array.prototype.slice;if(t.bind)return t.bind.apply(t,i.call(arguments,1));var n=i.call(arguments,2);return function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)}}// @property lastId: Number
// Last unique ID used by [`stamp()`](#util-stamp)
var f=0;// @function stamp(obj: Object): Number
// Returns the unique ID of an object, assigning it one if it doesn't have it.
function m(t){return"_leaflet_id"in t||(t._leaflet_id=++f),t._leaflet_id}// @function throttle(fn: Function, time: Number, context: Object): Function
// Returns a function which executes function `fn` with the given scope `context`
// (so that the `this` keyword refers to `context` inside `fn`'s code). The function
// `fn` will be called no more than one time per given amount of `time`. The arguments
// received by the bound function will be any arguments passed when binding the
// function, followed by any arguments passed when invoking the bound function.
// Has an `L.throttle` shortcut.
function g(t,e,i){var n,o,s,a;return a=function(){// reset lock and call if queued
n=!1,o&&(s.apply(i,o),o=!1)},s=function(){n?o=arguments:(// call and lock until later
t.apply(i,arguments),setTimeout(a,e),n=!0)}}// @function wrapNum(num: Number, range: Number[], includeMax?: Boolean): Number
// Returns the number `num` modulo `range` in such a way so it lies within
// `range[0]` and `range[1]`. The returned value will be always smaller than
// `range[1]` unless `includeMax` is set to `true`.
function _(t,e,i){var n=e[1],o=e[0],s=n-o;return t===n&&i?t:((t-o)%s+s)%s+o}// @function falseFn(): Function
// Returns a function which always returns `false`.
function v(){return!1}// @function formatNum(num: Number, precision?: Number|false): Number
// Returns the number `num` rounded with specified `precision`.
// The default `precision` value is 6 decimal places.
// `false` can be passed to skip any processing (can be useful to avoid round-off errors).
function y(t,e){if(!1===e)return t;var i=Math.pow(10,void 0===e?6:e);return Math.round(t*i)/i}// @function trim(str: String): String
// Compatibility polyfill for [String.prototype.trim](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
function x(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}// @function splitWords(str: String): String[]
// Trims and splits the string on whitespace and returns the array of parts.
function b(t){return x(t).split(/\s+/)}// @function setOptions(obj: Object, options: Object): Object
// Merges the given properties to the `options` of the `obj` object, returning the resulting options. See `Class options`. Has an `L.setOptions` shortcut.
function w(t,e){for(var i in Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?u(t.options):{}),e)t.options[i]=e[i];return t.options}// @function getParamString(obj: Object, existingUrl?: String, uppercase?: Boolean): String
// Converts an object into a parameter URL string, e.g. `{a: "foo", b: "bar"}`
// translates to `'?a=foo&b=bar'`. If `existingUrl` is set, the parameters will
// be appended at the end. If `uppercase` is `true`, the parameter names will
// be uppercased (e.g. `'?A=foo&B=bar'`)
function M(t,e,i){var n=[];for(var o in t)n.push(encodeURIComponent(i?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(e&&-1!==e.indexOf("?")?"&":"?")+n.join("&")}var P=/\{ *([\w_ -]+) *\}/g;// @function template(str: String, data: Object): String
// Simple templating facility, accepts a template string of the form `'Hello {a}, {b}'`
// and a data object like `{a: 'foo', b: 'bar'}`, returns evaluated string
// `('Hello foo, bar')`. You can also specify functions instead of strings for
// data values — they will be evaluated passing `data` as an argument.
function k(t,e){return t.replace(P,function(t,i){var n=e[i];if(void 0===n)throw Error("No value provided for variable "+t);return"function"==typeof n&&(n=n(e)),n})}// @function isArray(obj): Boolean
// Compatibility polyfill for [Array.isArray](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
var T=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};// @function indexOf(array: Array, el: Object): Number
// Compatibility polyfill for [Array.prototype.indexOf](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
function S(t,e){for(var i=0;i<t.length;i++)if(t[i]===e)return i;return -1}// @property emptyImageUrl: String
// Data URI string containing a base64-encoded empty GIF image.
// Used as a hack to free memory from unused images on WebKit-powered
// mobile devices (by setting image `src` to this string).
var C="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";// inspired by https://paulirish.com/2011/requestanimationframe-for-smart-animating/
function E(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var O=0;// fallback for IE 7-8
function z(t){var e=+new Date,i=Math.max(0,16-(e-O));return O=e+i,window.setTimeout(t,i)}var A=window.requestAnimationFrame||E("RequestAnimationFrame")||z,D=window.cancelAnimationFrame||E("CancelAnimationFrame")||E("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};// @function requestAnimFrame(fn: Function, context?: Object, immediate?: Boolean): Number
// Schedules `fn` to be executed when the browser repaints. `fn` is bound to
// `context` if given. When `immediate` is set, `fn` is called immediately if
// the browser doesn't have native support for
// [`window.requestAnimationFrame`](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame),
// otherwise it's delayed. Returns a request ID that can be used to cancel the request.
function I(t,e,i){if(!i||A!==z)return A.call(window,p(t,e));t.call(e)}// @function cancelAnimFrame(id: Number): undefined
// Cancels a previous `requestAnimFrame`. See also [window.cancelAnimationFrame](https://developer.mozilla.org/docs/Web/API/window/cancelAnimationFrame).
function R(t){t&&D.call(window,t)}// @class Class
// @aka L.Class
// @section
// @uninheritable
// Thanks to John Resig and Dean Edwards for inspiration!
function B(){}B.extend=function(t){// @function extend(props: Object): Function
// [Extends the current class](#class-inheritance) given the properties to be included.
// Returns a Javascript function that is a class constructor (to be called with `new`).
var i=function(){w(this),this.initialize&&this.initialize.apply(this,arguments),// call all constructor hooks
this.callInitHooks()},n=i.__super__=this.prototype,o=u(n);// inherit parent's statics
for(var s in o.constructor=i,i.prototype=o,this)Object.prototype.hasOwnProperty.call(this,s)&&"prototype"!==s&&"__super__"!==s&&(i[s]=this[s]);return t.statics&&e(i,t.statics),t.includes&&(function(t){/* global L: true */if("undefined"!=typeof L&&L&&L.Mixin){t=T(t)?t:[t];for(var e=0;e<t.length;e++)t[e]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",Error().stack)}}(t.includes),e.apply(null,[o].concat(t.includes))),// mix given properties into the prototype
e(o,t),delete o.statics,delete o.includes,o.options&&(o.options=n.options?u(n.options):{},e(o.options,t.options)),o._initHooks=[],// add method for calling all hooks
o.callInitHooks=function(){if(!this._initHooksCalled){n.callInitHooks&&n.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,e=o._initHooks.length;t<e;t++)o._initHooks[t].call(this)}},i},// @function include(properties: Object): this
// [Includes a mixin](#class-includes) into the current class.
B.include=function(t){var i=this.prototype.options;return e(this.prototype,t),t.options&&(this.prototype.options=i,this.mergeOptions(t.options)),this},// @function mergeOptions(options: Object): this
// [Merges `options`](#class-options) into the defaults of the class.
B.mergeOptions=function(t){return e(this.prototype.options,t),this},// @function addInitHook(fn: Function): this
// Adds a [constructor hook](#class-constructor-hooks) to the class.
B.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i="function"==typeof t?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i),this};/*
   * @class Evented
   * @aka L.Evented
   * @inherits Class
   *
   * A set of methods shared between event-powered classes (like `Map` and `Marker`). Generally, events allow you to execute some function when something happens with an object (e.g. the user clicks on the map, causing the map to fire `'click'` event).
   *
   * @example
   *
   * ```js
   * map.on('click', function(e) {
   * 	alert(e.latlng);
   * } );
   * ```
   *
   * Leaflet deals with event listeners by reference, so if you want to add a listener and then remove it, define it as a function:
   *
   * ```js
   * function onClick(e) { ... }
   *
   * map.on('click', onClick);
   * map.off('click', onClick);
   * ```
   */var N={/* @method on(type: String, fn: Function, context?: Object): this
  	 * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
  	 *
  	 * @alternative
  	 * @method on(eventMap: Object): this
  	 * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
  	 */on:function(t,e,i){// types can be a map of types/handlers
if("object"==typeof t)for(var n in t)// it's a hot path since Layer uses the on(obj) syntax
this._on(n,t[n],e);else{// types can be a string of space-separated words
t=b(t);for(var o=0,s=t.length;o<s;o++)this._on(t[o],e,i)}return this},/* @method off(type: String, fn?: Function, context?: Object): this
  	 * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
  	 *
  	 * @alternative
  	 * @method off(eventMap: Object): this
  	 * Removes a set of type/listener pairs.
  	 *
  	 * @alternative
  	 * @method off: this
  	 * Removes all listeners to all events on the object. This includes implicitly attached events.
  	 */off:function(t,e,i){if(arguments.length){if("object"==typeof t)for(var n in t)this._off(n,t[n],e);else{t=b(t);for(var o=1==arguments.length,s=0,a=t.length;s<a;s++)o?this._off(t[s]):this._off(t[s],e,i)}}else delete this._events;return this},// attach listener (without syntactic sugar now)
_on:function(t,e,i,n){if("function"!=typeof e){console.warn("wrong listener type: "+typeof e);return}// check if fn already there
if(!1===this._listens(t,e,i)){i===this&&(i=void 0);var o={fn:e,ctx:i};n&&(o.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(o)}},_off:function(t,e,i){if(this._events&&(n=this._events[t])){if(1==arguments.length){if(this._firingCount)// so they are not called if remove happens in fire
for(o=0,s=n.length;o<s;o++)n[o].fn=v;// clear all listeners for a type if function isn't specified
delete this._events[t];return}if("function"!=typeof e){console.warn("wrong listener type: "+typeof e);return}// find fn and remove it
var n,o,s,a=this._listens(t,e,i);if(!1!==a){var r=n[a];this._firingCount&&(// set the removed listener to noop so that's not called if remove happens in fire
r.fn=v,/* copy array in case events are being fired */this._events[t]=n=n.slice()),n.splice(a,1)}}},// @method fire(type: String, data?: Object, propagate?: Boolean): this
// Fires an event of the specified type. You can optionally provide a data
// object — the first argument of the listener function will contain its
// properties. The event can optionally be propagated to event parents.
fire:function(t,i,n){if(!this.listens(t,n))return this;var o=e({},i,{type:t,target:this,sourceTarget:i&&i.sourceTarget||this});if(this._events){var s=this._events[t];if(s){this._firingCount=this._firingCount+1||1;for(var a=0,r=s.length;a<r;a++){var h=s[a],l=h.fn;h.once&&this.off(t,l,h.ctx),l.call(h.ctx||this,o)}this._firingCount--}}return n&&this._propagateEvent(o),this},// @method listens(type: String, propagate?: Boolean): Boolean
// @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean
// Returns `true` if a particular event type has any listeners attached to it.
// The verification can optionally be propagated, it will return `true` if parents have the listener attached to it.
listens:function(t,e,i,n){"string"!=typeof t&&console.warn('"string" type argument expected');// we don't overwrite the input `fn` value, because we need to use it for propagation
var o=e;"function"!=typeof e&&(n=!!e,o=void 0,i=void 0);var s=this._events&&this._events[t];if(s&&s.length&&!1!==this._listens(t,o,i))return!0;if(n){for(var a in this._eventParents)if(this._eventParents[a].listens(t,e,i,n))return!0}return!1},// returns the index (number) or false
_listens:function(t,e,i){if(!this._events)return!1;var n=this._events[t]||[];if(!e)return!!n.length;i===this&&(i=void 0);for(var o=0,s=n.length;o<s;o++)if(n[o].fn===e&&n[o].ctx===i)return o;return!1},// @method once(…): this
// Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
once:function(t,e,i){// types can be a map of types/handlers
if("object"==typeof t)for(var n in t)// it's a hot path since Layer uses the on(obj) syntax
this._on(n,t[n],e,!0);else{// types can be a string of space-separated words
t=b(t);for(var o=0,s=t.length;o<s;o++)this._on(t[o],e,i,!0)}return this},// @method addEventParent(obj: Evented): this
// Adds an event parent - an `Evented` that will receive propagated events
addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[m(t)]=t,this},// @method removeEventParent(obj: Evented): this
// Removes an event parent, so it will stop receiving propagated events
removeEventParent:function(t){return this._eventParents&&delete this._eventParents[m(t)],this},_propagateEvent:function(t){for(var i in this._eventParents)this._eventParents[i].fire(t.type,e({layer:t.target,propagatedFrom:t.target},t),!0)}};// aliases; we should ditch those eventually
// @method addEventListener(…): this
// Alias to [`on(…)`](#evented-on)
N.addEventListener=N.on,// @method removeEventListener(…): this
// Alias to [`off(…)`](#evented-off)
// @method clearAllEventListeners(…): this
// Alias to [`off()`](#evented-off)
N.removeEventListener=N.clearAllEventListeners=N.off,// @method addOneTimeEventListener(…): this
// Alias to [`once(…)`](#evented-once)
N.addOneTimeEventListener=N.once,// @method fireEvent(…): this
// Alias to [`fire(…)`](#evented-fire)
N.fireEvent=N.fire,// @method hasEventListeners(…): Boolean
// Alias to [`listens(…)`](#evented-listens)
N.hasEventListeners=N.listens;var F=B.extend(N);/*
   * @class Point
   * @aka L.Point
   *
   * Represents a point with `x` and `y` coordinates in pixels.
   *
   * @example
   *
   * ```js
   * var point = L.point(200, 300);
   * ```
   *
   * All Leaflet methods and options that accept `Point` objects also accept them in a simple Array form (unless noted otherwise), so these lines are equivalent:
   *
   * ```js
   * map.panBy([200, 300]);
   * map.panBy(L.point(200, 300));
   * ```
   *
   * Note that `Point` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */function Z(t,e,i){// @property x: Number; The `x` coordinate of the point
this.x=i?Math.round(t):t,// @property y: Number; The `y` coordinate of the point
this.y=i?Math.round(e):e}var j=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};// @factory L.point(x: Number, y: Number, round?: Boolean)
// Creates a Point object with the given `x` and `y` coordinates. If optional `round` is set to true, rounds the `x` and `y` values.
// @alternative
// @factory L.point(coords: Number[])
// Expects an array of the form `[x, y]` instead.
// @alternative
// @factory L.point(coords: Object)
// Expects a plain object of the form `{x: Number, y: Number}` instead.
function W(t,e,i){return t instanceof Z?t:T(t)?new Z(t[0],t[1]):null==t?t:"object"==typeof t&&"x"in t&&"y"in t?new Z(t.x,t.y):new Z(t,e,i)}/*
   * @class Bounds
   * @aka L.Bounds
   *
   * Represents a rectangular area in pixel coordinates.
   *
   * @example
   *
   * ```js
   * var p1 = L.point(10, 10),
   * p2 = L.point(40, 60),
   * bounds = L.bounds(p1, p2);
   * ```
   *
   * All Leaflet methods that accept `Bounds` objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
   *
   * ```js
   * otherBounds.intersects([[10, 10], [40, 60]]);
   * ```
   *
   * Note that `Bounds` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */function V(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])}// @factory L.bounds(corner1: Point, corner2: Point)
// Creates a Bounds object from two corners coordinate pairs.
// @alternative
// @factory L.bounds(points: Point[])
// Creates a Bounds object from the given array of points.
function H(t,e){return!t||t instanceof V?t:new V(t,e)}/*
   * @class LatLngBounds
   * @aka L.LatLngBounds
   *
   * Represents a rectangular geographical area on a map.
   *
   * @example
   *
   * ```js
   * var corner1 = L.latLng(40.712, -74.227),
   * corner2 = L.latLng(40.774, -74.125),
   * bounds = L.latLngBounds(corner1, corner2);
   * ```
   *
   * All Leaflet methods that accept LatLngBounds objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
   *
   * ```js
   * map.fitBounds([
   * 	[40.712, -74.227],
   * 	[40.774, -74.125]
   * ]);
   * ```
   *
   * Caution: if the area crosses the antimeridian (often confused with the International Date Line), you must specify corners _outside_ the [-180, 180] degrees longitude range.
   *
   * Note that `LatLngBounds` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */function U(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])}// TODO International date line?
// @factory L.latLngBounds(corner1: LatLng, corner2: LatLng)
// Creates a `LatLngBounds` object by defining two diagonally opposite corners of the rectangle.
// @alternative
// @factory L.latLngBounds(latlngs: LatLng[])
// Creates a `LatLngBounds` object defined by the geographical points it contains. Very useful for zooming the map to fit a particular set of locations with [`fitBounds`](#map-fitbounds).
function $(t,e){return t instanceof U?t:new U(t,e)}/* @class LatLng
   * @aka L.LatLng
   *
   * Represents a geographical point with a certain latitude and longitude.
   *
   * @example
   *
   * ```
   * var latlng = L.latLng(50.5, 30.5);
   * ```
   *
   * All Leaflet methods that accept LatLng objects also accept them in a simple Array form and simple object form (unless noted otherwise), so these lines are equivalent:
   *
   * ```
   * map.panTo([50, 30]);
   * map.panTo({lon: 30, lat: 50});
   * map.panTo({lat: 50, lng: 30});
   * map.panTo(L.latLng(50, 30));
   * ```
   *
   * Note that `LatLng` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */function Y(t,e,i){if(isNaN(t)||isNaN(e))throw Error("Invalid LatLng object: ("+t+", "+e+")");// @property lat: Number
// Latitude in degrees
this.lat=+t,// @property lng: Number
// Longitude in degrees
this.lng=+e,void 0!==i&&(this.alt=+i)}// @factory L.latLng(latitude: Number, longitude: Number, altitude?: Number): LatLng
// Creates an object representing a geographical point with the given latitude and longitude (and optionally altitude).
// @alternative
// @factory L.latLng(coords: Array): LatLng
// Expects an array of the form `[Number, Number]` or `[Number, Number, Number]` instead.
// @alternative
// @factory L.latLng(coords: Object): LatLng
// Expects an plain object of the form `{lat: Number, lng: Number}` or `{lat: Number, lng: Number, alt: Number}` instead.
function q(t,e,i){return t instanceof Y?t:T(t)&&"object"!=typeof t[0]?3===t.length?new Y(t[0],t[1],t[2]):2===t.length?new Y(t[0],t[1]):null:null==t?t:"object"==typeof t&&"lat"in t?new Y(t.lat,"lng"in t?t.lng:t.lon,t.alt):void 0===e?null:new Y(t,e,i)}Z.prototype={// @method clone(): Point
// Returns a copy of the current point.
clone:function(){return new Z(this.x,this.y)},// @method add(otherPoint: Point): Point
// Returns the result of addition of the current and the given points.
add:function(t){// non-destructive, returns a new point
return this.clone()._add(W(t))},_add:function(t){return(// destructive, used directly for performance in situations where it's safe to modify existing point
this.x+=t.x,this.y+=t.y,this)},// @method subtract(otherPoint: Point): Point
// Returns the result of subtraction of the given point from the current.
subtract:function(t){return this.clone()._subtract(W(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},// @method divideBy(num: Number): Point
// Returns the result of division of the current point by the given number.
divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},// @method multiplyBy(num: Number): Point
// Returns the result of multiplication of the current point by the given number.
multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},// @method scaleBy(scale: Point): Point
// Multiply each coordinate of the current point by each coordinate of
// `scale`. In linear algebra terms, multiply the point by the
// [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
// defined by `scale`.
scaleBy:function(t){return new Z(this.x*t.x,this.y*t.y)},// @method unscaleBy(scale: Point): Point
// Inverse of `scaleBy`. Divide each coordinate of the current point by
// each coordinate of `scale`.
unscaleBy:function(t){return new Z(this.x/t.x,this.y/t.y)},// @method round(): Point
// Returns a copy of the current point with rounded coordinates.
round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},// @method floor(): Point
// Returns a copy of the current point with floored coordinates (rounded down).
floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},// @method ceil(): Point
// Returns a copy of the current point with ceiled coordinates (rounded up).
ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},// @method trunc(): Point
// Returns a copy of the current point with truncated coordinates (rounded towards zero).
trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=j(this.x),this.y=j(this.y),this},// @method distanceTo(otherPoint: Point): Number
// Returns the cartesian distance between the current and the given points.
distanceTo:function(t){var e=(t=W(t)).x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},// @method equals(otherPoint: Point): Boolean
// Returns `true` if the given point has the same coordinates.
equals:function(t){return(t=W(t)).x===this.x&&t.y===this.y},// @method contains(otherPoint: Point): Boolean
// Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
contains:function(t){return Math.abs((t=W(t)).x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},// @method toString(): String
// Returns a string representation of the point for debugging purposes.
toString:function(){return"Point("+y(this.x)+", "+y(this.y)+")"}},V.prototype={// @method extend(point: Point): this
// Extends the bounds to contain the given point.
// @alternative
// @method extend(otherBounds: Bounds): this
// Extend the bounds to contain the given bounds
extend:function(t){var e,i;if(!t)return this;if(t instanceof Z||"number"==typeof t[0]||"x"in t)e=i=W(t);else if(e=(t=H(t)).min,i=t.max,!e||!i)return this;return this.min||this.max?(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(i.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(i.y,this.max.y)):(this.min=e.clone(),this.max=i.clone()),this},// @method getCenter(round?: Boolean): Point
// Returns the center point of the bounds.
getCenter:function(t){return W((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},// @method getBottomLeft(): Point
// Returns the bottom-left point of the bounds.
getBottomLeft:function(){return W(this.min.x,this.max.y)},// @method getTopRight(): Point
// Returns the top-right point of the bounds.
getTopRight:function(){return W(this.max.x,this.min.y)},// @method getTopLeft(): Point
// Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
getTopLeft:function(){return this.min;// left, top
},// @method getBottomRight(): Point
// Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
getBottomRight:function(){return this.max;// right, bottom
},// @method getSize(): Point
// Returns the size of the given bounds
getSize:function(){return this.max.subtract(this.min)},// @method contains(otherBounds: Bounds): Boolean
// Returns `true` if the rectangle contains the given one.
// @alternative
// @method contains(point: Point): Boolean
// Returns `true` if the rectangle contains the given point.
contains:function(t){var e,i;return(t="number"==typeof t[0]||t instanceof Z?W(t):H(t))instanceof V?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},// @method intersects(otherBounds: Bounds): Boolean
// Returns `true` if the rectangle intersects the given bounds. Two bounds
// intersect if they have at least one point in common.
intersects:function(t){t=H(t);var e=this.min,i=this.max,n=t.min,o=t.max,s=o.x>=e.x&&n.x<=i.x,a=o.y>=e.y&&n.y<=i.y;return s&&a},// @method overlaps(otherBounds: Bounds): Boolean
// Returns `true` if the rectangle overlaps the given bounds. Two bounds
// overlap if their intersection is an area.
overlaps:function(t){t=H(t);var e=this.min,i=this.max,n=t.min,o=t.max,s=o.x>e.x&&n.x<i.x,a=o.y>e.y&&n.y<i.y;return s&&a},// @method isValid(): Boolean
// Returns `true` if the bounds are properly initialized.
isValid:function(){return!!(this.min&&this.max)},// @method pad(bufferRatio: Number): Bounds
// Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
// For example, a ratio of 0.5 extends the bounds by 50% in each direction.
// Negative values will retract the bounds.
pad:function(t){var e=this.min,i=this.max,n=Math.abs(e.x-i.x)*t,o=Math.abs(e.y-i.y)*t;return H(W(e.x-n,e.y-o),W(i.x+n,i.y+o))},// @method equals(otherBounds: Bounds): Boolean
// Returns `true` if the rectangle is equivalent to the given bounds.
equals:function(t){return!!t&&(t=H(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight()))}},U.prototype={// @method extend(latlng: LatLng): this
// Extend the bounds to contain the given point
// @alternative
// @method extend(otherBounds: LatLngBounds): this
// Extend the bounds to contain the given bounds
extend:function(t){var e,i,n=this._southWest,o=this._northEast;if(t instanceof Y)e=t,i=t;else if(!(t instanceof U))return t?this.extend(q(t)||$(t)):this;else if(e=t._southWest,i=t._northEast,!e||!i)return this;return n||o?(n.lat=Math.min(e.lat,n.lat),n.lng=Math.min(e.lng,n.lng),o.lat=Math.max(i.lat,o.lat),o.lng=Math.max(i.lng,o.lng)):(this._southWest=new Y(e.lat,e.lng),this._northEast=new Y(i.lat,i.lng)),this},// @method pad(bufferRatio: Number): LatLngBounds
// Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
// For example, a ratio of 0.5 extends the bounds by 50% in each direction.
// Negative values will retract the bounds.
pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,o=Math.abs(e.lng-i.lng)*t;return new U(new Y(e.lat-n,e.lng-o),new Y(i.lat+n,i.lng+o))},// @method getCenter(): LatLng
// Returns the center point of the bounds.
getCenter:function(){return new Y((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},// @method getSouthWest(): LatLng
// Returns the south-west point of the bounds.
getSouthWest:function(){return this._southWest},// @method getNorthEast(): LatLng
// Returns the north-east point of the bounds.
getNorthEast:function(){return this._northEast},// @method getNorthWest(): LatLng
// Returns the north-west point of the bounds.
getNorthWest:function(){return new Y(this.getNorth(),this.getWest())},// @method getSouthEast(): LatLng
// Returns the south-east point of the bounds.
getSouthEast:function(){return new Y(this.getSouth(),this.getEast())},// @method getWest(): Number
// Returns the west longitude of the bounds
getWest:function(){return this._southWest.lng},// @method getSouth(): Number
// Returns the south latitude of the bounds
getSouth:function(){return this._southWest.lat},// @method getEast(): Number
// Returns the east longitude of the bounds
getEast:function(){return this._northEast.lng},// @method getNorth(): Number
// Returns the north latitude of the bounds
getNorth:function(){return this._northEast.lat},// @method contains(otherBounds: LatLngBounds): Boolean
// Returns `true` if the rectangle contains the given one.
// @alternative
// @method contains (latlng: LatLng): Boolean
// Returns `true` if the rectangle contains the given point.
contains:function(t){t="number"==typeof t[0]||t instanceof Y||"lat"in t?q(t):$(t);var e,i,n=this._southWest,o=this._northEast;return t instanceof U?(e=t.getSouthWest(),i=t.getNorthEast()):e=i=t,e.lat>=n.lat&&i.lat<=o.lat&&e.lng>=n.lng&&i.lng<=o.lng},// @method intersects(otherBounds: LatLngBounds): Boolean
// Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
intersects:function(t){t=$(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>=e.lat&&n.lat<=i.lat,a=o.lng>=e.lng&&n.lng<=i.lng;return s&&a},// @method overlaps(otherBounds: LatLngBounds): Boolean
// Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
overlaps:function(t){t=$(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>e.lat&&n.lat<i.lat,a=o.lng>e.lng&&n.lng<i.lng;return s&&a},// @method toBBoxString(): String
// Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},// @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
// Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
equals:function(t,e){return!!t&&(t=$(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e))},// @method isValid(): Boolean
// Returns `true` if the bounds are properly initialized.
isValid:function(){return!!(this._southWest&&this._northEast)}},Y.prototype={// @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
// Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
equals:function(t,e){return!!t&&(t=q(t),Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng))<=(void 0===e?1e-9:e))},// @method toString(): String
// Returns a string representation of the point (for debugging purposes).
toString:function(t){return"LatLng("+y(this.lat,t)+", "+y(this.lng,t)+")"},// @method distanceTo(otherLatLng: LatLng): Number
// Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
distanceTo:function(t){return X.distance(this,q(t))},// @method wrap(): LatLng
// Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
wrap:function(){return X.wrapLatLng(this)},// @method toBounds(sizeInMeters: Number): LatLngBounds
// Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
toBounds:function(t){var e=180*t/40075017,i=e/Math.cos(Math.PI/180*this.lat);return $([this.lat-e,this.lng-i],[this.lat+e,this.lng+i])},clone:function(){return new Y(this.lat,this.lng,this.alt)}};/*
   * @namespace CRS
   * @crs L.CRS.Base
   * Object that defines coordinate reference systems for projecting
   * geographical points into pixel (screen) coordinates and back (and to
   * coordinates in other units for [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services). See
   * [spatial reference system](https://en.wikipedia.org/wiki/Spatial_reference_system).
   *
   * Leaflet defines the most usual CRSs by default. If you want to use a
   * CRS not defined by default, take a look at the
   * [Proj4Leaflet](https://github.com/kartena/Proj4Leaflet) plugin.
   *
   * Note that the CRS instances do not inherit from Leaflet's `Class` object,
   * and can't be instantiated. Also, new classes can't inherit from them,
   * and methods can't be added to them with the `include` function.
   */var G={// @method latLngToPoint(latlng: LatLng, zoom: Number): Point
// Projects geographical coordinates into pixel coordinates for a given zoom.
latLngToPoint:function(t,e){var i=this.projection.project(t),n=this.scale(e);return this.transformation._transform(i,n)},// @method pointToLatLng(point: Point, zoom: Number): LatLng
// The inverse of `latLngToPoint`. Projects pixel coordinates on a given
// zoom into geographical coordinates.
pointToLatLng:function(t,e){var i=this.scale(e),n=this.transformation.untransform(t,i);return this.projection.unproject(n)},// @method project(latlng: LatLng): Point
// Projects geographical coordinates into coordinates in units accepted for
// this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
project:function(t){return this.projection.project(t)},// @method unproject(point: Point): LatLng
// Given a projected coordinate returns the corresponding LatLng.
// The inverse of `project`.
unproject:function(t){return this.projection.unproject(t)},// @method scale(zoom: Number): Number
// Returns the scale used when transforming projected coordinates into
// pixel coordinates for a particular zoom. For example, it returns
// `256 * 2^zoom` for Mercator-based CRS.
scale:function(t){return 256*Math.pow(2,t)},// @method zoom(scale: Number): Number
// Inverse of `scale()`, returns the zoom level corresponding to a scale
// factor of `scale`.
zoom:function(t){return Math.log(t/256)/Math.LN2},// @method getProjectedBounds(zoom: Number): Bounds
// Returns the projection's bounds scaled and transformed for the provided `zoom`.
getProjectedBounds:function(t){if(this.infinite)return null;var e=this.projection.bounds,i=this.scale(t),n=this.transformation.transform(e.min,i),o=this.transformation.transform(e.max,i);return new V(n,o)},// @method distance(latlng1: LatLng, latlng2: LatLng): Number
// Returns the distance between two geographical coordinates.
// @property code: String
// Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
//
// @property wrapLng: Number[]
// An array of two numbers defining whether the longitude (horizontal) coordinate
// axis wraps around a given range and how. Defaults to `[-180, 180]` in most
// geographical CRSs. If `undefined`, the longitude axis does not wrap around.
//
// @property wrapLat: Number[]
// Like `wrapLng`, but for the latitude (vertical) axis.
// wrapLng: [min, max],
// wrapLat: [min, max],
// @property infinite: Boolean
// If true, the coordinate space will be unbounded (infinite in both axes)
infinite:!1,// @method wrapLatLng(latlng: LatLng): LatLng
// Returns a `LatLng` where lat and lng has been wrapped according to the
// CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
wrapLatLng:function(t){var e=this.wrapLng?_(t.lng,this.wrapLng,!0):t.lng,i=this.wrapLat?_(t.lat,this.wrapLat,!0):t.lat,n=t.alt;return new Y(i,e,n)},// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
// Returns a `LatLngBounds` with the same size as the given one, ensuring
// that its center is within the CRS's bounds.
// Only accepts actual `L.LatLngBounds` instances, not arrays.
wrapLatLngBounds:function(t){var e=t.getCenter(),i=this.wrapLatLng(e),n=e.lat-i.lat,o=e.lng-i.lng;if(0===n&&0===o)return t;var s=t.getSouthWest(),a=t.getNorthEast(),r=new Y(s.lat-n,s.lng-o),h=new Y(a.lat-n,a.lng-o);return new U(r,h)}},X=e({},G,{wrapLng:[-180,180],// Mean Earth Radius, as recommended for use by
// the International Union of Geodesy and Geophysics,
// see https://rosettacode.org/wiki/Haversine_formula
R:6371e3,// distance between two geographical points using spherical law of cosines approximation
distance:function(t,e){var i=Math.PI/180,n=t.lat*i,o=e.lat*i,s=Math.sin((e.lat-t.lat)*i/2),a=Math.sin((e.lng-t.lng)*i/2),r=s*s+Math.cos(n)*Math.cos(o)*a*a;return this.R*(2*Math.atan2(Math.sqrt(r),Math.sqrt(1-r)))}}),K={R:6378137,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,i=this.MAX_LATITUDE,n=Math.sin(Math.max(Math.min(i,t.lat),-i)*e);return new Z(this.R*t.lng*e,this.R*Math.log((1+n)/(1-n))/2)},unproject:function(t){var e=180/Math.PI;return new Y((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:(h=6378137*Math.PI,new V([-h,-h],[h,h]))};/*
   * @class Transformation
   * @aka L.Transformation
   *
   * Represents an affine transformation: a set of coefficients `a`, `b`, `c`, `d`
   * for transforming a point of a form `(x, y)` into `(a*x + b, c*y + d)` and doing
   * the reverse. Used by Leaflet in its projections code.
   *
   * @example
   *
   * ```js
   * var transformation = L.transformation(2, 5, -1, 10),
   * 	p = L.point(1, 2),
   * 	p2 = transformation.transform(p), //  L.point(7, 8)
   * 	p3 = transformation.untransform(p2); //  L.point(1, 2)
   * ```
   */// factory new L.Transformation(a: Number, b: Number, c: Number, d: Number)
// Creates a `Transformation` object with the given coefficients.
function J(t,e,i,n){if(T(t)){// use array properties
this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3];return}this._a=t,this._b=e,this._c=i,this._d=n}// factory L.transformation(a: Number, b: Number, c: Number, d: Number)
// @factory L.transformation(a: Number, b: Number, c: Number, d: Number)
// Instantiates a Transformation object with the given coefficients.
// @alternative
// @factory L.transformation(coefficients: Array): Transformation
// Expects an coefficients array of the form
// `[a: Number, b: Number, c: Number, d: Number]`.
function Q(t,e,i,n){return new J(t,e,i,n)}J.prototype={// @method transform(point: Point, scale?: Number): Point
// Returns a transformed point, optionally multiplied by the given scale.
// Only accepts actual `L.Point` instances, not arrays.
transform:function(t,e){return this._transform(t.clone(),e)},// destructive transform (faster)
_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},// @method untransform(point: Point, scale?: Number): Point
// Returns the reverse transformation of the given point, optionally divided
// by the given scale. Only accepts actual `L.Point` instances, not arrays.
untransform:function(t,e){return e=e||1,new Z((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}};/*
   * @namespace CRS
   * @crs L.CRS.EPSG3857
   *
   * The most common CRS for online maps, used by almost all free and commercial
   * tile providers. Uses Spherical Mercator projection. Set in by default in
   * Map's `crs` option.
   */var tt=e({},X,{code:"EPSG:3857",projection:K,transformation:Q(l=.5/(Math.PI*K.R),.5,-l,.5)}),te=e({},tt,{code:"EPSG:900913"});// @namespace SVG; @section
// There are several static functions which can be called without instantiating L.SVG:
// @function create(name: String): SVGElement
// Returns a instance of [SVGElement](https://developer.mozilla.org/docs/Web/API/SVGElement),
// corresponding to the class name passed. For example, using 'line' will return
// an instance of [SVGLineElement](https://developer.mozilla.org/docs/Web/API/SVGLineElement).
function ti(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}// @function pointsToPath(rings: Point[], closed: Boolean): String
// Generates a SVG path string for multiple rings, with each ring turning
// into "M..L..L.." instructions
function tn(t,e){var i,n,o,s,a,r,h="";for(i=0,o=t.length;i<o;i++){for(n=0,s=(a=t[i]).length;n<s;n++)r=a[n],h+=(n?"L":"M")+r.x+" "+r.y;// closes the ring for polygons; "x" is VML syntax
h+=e?tR.svg?"z":"x":""}// SVG complains about empty path strings
return h||"M0 0"}/*
   * @namespace Browser
   * @aka L.Browser
   *
   * A namespace with static properties for browser/feature detection used by Leaflet internally.
   *
   * @example
   *
   * ```js
   * if (L.Browser.ielt9) {
   *   alert('Upgrade your browser, dude!');
   * }
   * ```
   */var to=document.documentElement.style,ts="ActiveXObject"in window,ta=ts&&!document.addEventListener,tr="msLaunchUri"in navigator&&!("documentMode"in document),th=tI("webkit"),tl=tI("android"),tc=tI("android 2")||tI("android 3"),td=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),tu=tl&&tI("Google")&&td<537&&!("AudioNode"in window),tp=!!window.opera,tf=!tr&&tI("chrome"),tm=tI("gecko")&&!th&&!tp&&!ts,tg=!tf&&tI("safari"),t_=tI("phantom"),tv="OTransition"in to,ty=0===navigator.platform.indexOf("Win"),tx=ts&&"transition"in to,tb="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!tc,tw="MozPerspective"in to,tM=!window.L_DISABLE_3D&&(tx||tb||tw)&&!tv&&!t_,tP="undefined"!=typeof orientation||tI("mobile"),tL=!window.PointerEvent&&window.MSPointerEvent,tk=!!(window.PointerEvent||tL),tT="ontouchstart"in window||!!window.TouchEvent,tS=!window.L_NO_TOUCH&&(tT||tk),tC=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,tE=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",v,e),window.removeEventListener("testPassiveEventSupport",v,e)}catch(t){// Errors can safely be ignored since this is only a browser support test.
}return t}(),tO=!!document.createElement("canvas").getContext,tz=!!(document.createElementNS&&ti("svg").createSVGRect),tA=!!tz&&((c=document.createElement("div")).innerHTML="<svg/>","http://www.w3.org/2000/svg"===(c.firstChild&&c.firstChild.namespaceURI)),tD=!tz&&function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var e=t.firstChild;return e.style.behavior="url(#default#VML)",e&&"object"==typeof e.adj}catch(t){return!1}}();function tI(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var tR={ie:ts,ielt9:ta,edge:tr,webkit:th,android:tl,android23:tc,androidStock:tu,opera:tp,chrome:tf,gecko:tm,safari:tg,phantom:t_,opera12:tv,win:ty,ie3d:tx,webkit3d:tb,gecko3d:tw,any3d:tM,mobile:tP,mobileWebkit:tP&&th,mobileWebkit3d:tP&&tb,msPointer:tL,pointer:tk,touch:tS,touchNative:tT,mobileOpera:tP&&tp,mobileGecko:tP&&tm,retina:tC,passiveEvents:tE,canvas:tO,svg:tz,vml:tD,inlineSvg:tA,mac:0===navigator.platform.indexOf("Mac"),linux:0===navigator.platform.indexOf("Linux")},tB=tR.msPointer?"MSPointerDown":"pointerdown",tN=tR.msPointer?"MSPointerMove":"pointermove",tF=tR.msPointer?"MSPointerUp":"pointerup",tZ=tR.msPointer?"MSPointerCancel":"pointercancel",tj={touchstart:tB,touchmove:tN,touchend:tF,touchcancel:tZ},tW={touchstart:function(t,e){e.MSPOINTER_TYPE_TOUCH&&e.pointerType===e.MSPOINTER_TYPE_TOUCH&&ew(e),tq(t,e)},touchmove:tq,touchend:tq,touchcancel:tq},tV={},tH=!1;function tU(t){tV[t.pointerId]=t}function t$(t){tV[t.pointerId]&&(tV[t.pointerId]=t)}function tY(t){delete tV[t.pointerId]}function tq(t,e){if(e.pointerType!==(e.MSPOINTER_TYPE_MOUSE||"mouse")){for(var i in e.touches=[],tV)e.touches.push(tV[i]);e.changedTouches=[e],t(e)}}/*
   * @namespace DomUtil
   *
   * Utility functions to work with the [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model)
   * tree, used by Leaflet internally.
   *
   * Most functions expecting or returning a `HTMLElement` also work for
   * SVG elements. The only difference is that classes refer to CSS classes
   * in HTML and SVG classes in SVG.
   */// @property TRANSFORM: String
// Vendor-prefixed transform style name (e.g. `'webkitTransform'` for WebKit).
var tG=ee(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),tX=ee(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),tK="webkitTransition"===tX||"OTransition"===tX?tX+"End":"transitionend";// @function get(id: String|HTMLElement): HTMLElement
// Returns an element given its DOM id, or returns the element itself
// if it was passed directly.
function tJ(t){return"string"==typeof t?document.getElementById(t):t}// @function getStyle(el: HTMLElement, styleAttrib: String): String
// Returns the value for a certain style attribute on an element,
// including computed values or values set through CSS.
function tQ(t,e){var i=t.style[e]||t.currentStyle&&t.currentStyle[e];if((!i||"auto"===i)&&document.defaultView){var n=document.defaultView.getComputedStyle(t,null);i=n?n[e]:null}return"auto"===i?null:i}// @function create(tagName: String, className?: String, container?: HTMLElement): HTMLElement
// Creates an HTML element with `tagName`, sets its class to `className`, and optionally appends it to `container` element.
function t0(t,e,i){var n=document.createElement(t);return n.className=e||"",i&&i.appendChild(n),n}// @function remove(el: HTMLElement)
// Removes `el` from its parent element
function t1(t){var e=t.parentNode;e&&e.removeChild(t)}// @function empty(el: HTMLElement)
// Removes all of `el`'s children elements from `el`
function t2(t){for(;t.firstChild;)t.removeChild(t.firstChild)}// @function toFront(el: HTMLElement)
// Makes `el` the last child of its parent, so it renders in front of the other children.
function t5(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}// @function toBack(el: HTMLElement)
// Makes `el` the first child of its parent, so it renders behind the other children.
function t3(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}// @function hasClass(el: HTMLElement, name: String): Boolean
// Returns `true` if the element's class attribute contains `name`.
function t8(t,e){if(void 0!==t.classList)return t.classList.contains(e);var i=t7(t);return i.length>0&&RegExp("(^|\\s)"+e+"(\\s|$)").test(i)}// @function addClass(el: HTMLElement, name: String)
// Adds `name` to the element's class attribute.
function t4(t,e){if(void 0!==t.classList)for(var i=b(e),n=0,o=i.length;n<o;n++)t.classList.add(i[n]);else if(!t8(t,e)){var s=t7(t);t9(t,(s?s+" ":"")+e)}}// @function removeClass(el: HTMLElement, name: String)
// Removes `name` from the element's class attribute.
function t6(t,e){void 0!==t.classList?t.classList.remove(e):t9(t,x((" "+t7(t)+" ").replace(" "+e+" "," ")))}// @function setClass(el: HTMLElement, name: String)
// Sets the element's class.
function t9(t,e){void 0===t.className.baseVal?t.className=e:t.className.baseVal=e}// @function getClass(el: HTMLElement): String
// Returns the element's class.
function t7(t){return t.correspondingElement&&(t=t.correspondingElement),void 0===t.className.baseVal?t.className:t.className.baseVal}// @function setOpacity(el: HTMLElement, opacity: Number)
// Set the opacity of an element (including old IE support).
// `opacity` must be a number from `0` to `1`.
function et(t,e){"opacity"in t.style?t.style.opacity=e:"filter"in t.style&&function(t,e){var i=!1,n="DXImageTransform.Microsoft.Alpha";// filters collection throws an error if we try to retrieve a filter that doesn't exist
try{i=t.filters.item(n)}catch(t){// don't set opacity to 1 if we haven't already set an opacity,
// it isn't needed and breaks transparent pngs.
if(1===e)return}e=Math.round(100*e),i?(i.Enabled=100!==e,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}(t,e)}// @function testProp(props: String[]): String|false
// Goes through the array of style names and returns the first name
// that is a valid style name for an element. If no such name is found,
// it returns false. Useful for vendor-prefixed styles like `transform`.
function ee(t){for(var e=document.documentElement.style,i=0;i<t.length;i++)if(t[i]in e)return t[i];return!1}// @function setTransform(el: HTMLElement, offset: Point, scale?: Number)
// Resets the 3D CSS transform of `el` so it is translated by `offset` pixels
// and optionally scaled by `scale`. Does not have an effect if the
// browser doesn't support 3D CSS transforms.
function ei(t,e,i){var n=e||new Z(0,0);t.style[tG]=(tR.ie3d?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(i?" scale("+i+")":"")}// @function setPosition(el: HTMLElement, position: Point)
// Sets the position of `el` to coordinates specified by `position`,
// using CSS translate or top/left positioning depending on the browser
// (used by Leaflet internally to position its layers).
function en(t,e){/*eslint-disable */t._leaflet_pos=e,tR.any3d?ei(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")}// @function getPosition(el: HTMLElement): Point
// Returns the coordinates of an element previously positioned with setPosition.
function eo(t){// this method is only used for elements previously positioned using setPosition,
// so it's safe to cache the position for performance
return t._leaflet_pos||new Z(0,0)}if("onselectstart"in document)i=function(){eu(window,"selectstart",ew)},n=function(){ef(window,"selectstart",ew)};else{var es=ee(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);i=function(){if(es){var t=document.documentElement.style;o=t[es],t[es]="none"}},n=function(){es&&(document.documentElement.style[es]=o,o=void 0)}}// @function disableImageDrag()
// As [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection), but
// for `dragstart` DOM events, usually generated when the user drags an image.
function ea(){eu(window,"dragstart",ew)}// @function enableImageDrag()
// Cancels the effects of a previous [`L.DomUtil.disableImageDrag`](#domutil-disabletextselection).
function er(){ef(window,"dragstart",ew)}// @function preventOutline(el: HTMLElement)
// Makes the [outline](https://developer.mozilla.org/docs/Web/CSS/outline)
// of the element `el` invisible. Used internally by Leaflet to prevent
// focusable elements from displaying an outline when the user performs a
// drag interaction on them.
function eh(t){for(;-1===t.tabIndex;)t=t.parentNode;t.style&&(el(),s=t,a=t.style.outlineStyle,t.style.outlineStyle="none",eu(window,"keydown",el))}// @function restoreOutline()
// Cancels the effects of a previous [`L.DomUtil.preventOutline`]().
function el(){s&&(s.style.outlineStyle=a,s=void 0,a=void 0,ef(window,"keydown",el))}// @function getSizedParentNode(el: HTMLElement): HTMLElement
// Finds the closest parent node which size (width and height) is not null.
function ec(t){do t=t.parentNode;while((!t.offsetWidth||!t.offsetHeight)&&t!==document.body)return t}// @function getScale(el: HTMLElement): Object
// Computes the CSS scale currently applied on the element.
// Returns an object with `x` and `y` members as horizontal and vertical scales respectively,
// and `boundingClientRect` as the result of [`getBoundingClientRect()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect).
function ed(t){var e=t.getBoundingClientRect();// Read-only in old browsers.
return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}/*
   * @namespace DomEvent
   * Utility functions to work with the [DOM events](https://developer.mozilla.org/docs/Web/API/Event), used by Leaflet internally.
   */// Inspired by John Resig, Dean Edwards and YUI addEvent implementations.
// @function on(el: HTMLElement, types: String, fn: Function, context?: Object): this
// Adds a listener function (`fn`) to a particular DOM event type of the
// element `el`. You can optionally specify the context of the listener
// (object the `this` keyword will point to). You can also pass several
// space-separated types (e.g. `'click dblclick'`).
// @alternative
// @function on(el: HTMLElement, eventMap: Object, context?: Object): this
// Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
function eu(t,e,i,n){if(e&&"object"==typeof e)for(var o in e)e_(t,o,e[o],i);else{e=b(e);for(var s=0,a=e.length;s<a;s++)e_(t,e[s],i,n)}return this}var ep="_leaflet_events";// @function off(el: HTMLElement, types: String, fn: Function, context?: Object): this
// Removes a previously added listener function.
// Note that if you passed a custom context to on, you must pass the same
// context to `off` in order to remove the listener.
// @alternative
// @function off(el: HTMLElement, eventMap: Object, context?: Object): this
// Removes a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
// @alternative
// @function off(el: HTMLElement, types: String): this
// Removes all previously added listeners of given types.
// @alternative
// @function off(el: HTMLElement): this
// Removes all previously added listeners from given HTMLElement
function ef(t,e,i,n){if(1==arguments.length)em(t),delete t[ep];else if(e&&"object"==typeof e)for(var o in e)ev(t,o,e[o],i);else if(e=b(e),2==arguments.length)em(t,function(t){return -1!==S(e,t)});else for(var s=0,a=e.length;s<a;s++)ev(t,e[s],i,n);return this}function em(t,e){for(var i in t[ep]){var n=i.split(/\d/)[0];(!e||e(n))&&ev(t,n,null,null,i)}}var eg={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function e_(t,e,i,n){var o=e+m(i)+(n?"_"+m(n):"");if(t[ep]&&t[ep][o])return this;var s=function(e){return i.call(n||t,e||window.event)},a=s;!tR.touchNative&&tR.pointer&&0===e.indexOf("touch")?s=// Provides a touch events wrapper for (ms)pointer events.
// ref https://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890
function(t,e,i){return("touchstart"===e&&(tH||(// we listen document as any drags that end by moving the touch off the screen get fired there
document.addEventListener(tB,tU,!0),document.addEventListener(tN,t$,!0),document.addEventListener(tF,tY,!0),document.addEventListener(tZ,tY,!0),tH=!0)),tW[e])?(i=tW[e].bind(this,i),t.addEventListener(tj[e],i,!1),i):(console.warn("wrong event specified:",e),v)}(t,e,s):tR.touch&&"dblclick"===e?s=function(t,e){// Most browsers handle double tap natively
t.addEventListener("dblclick",e);// On some platforms the browser doesn't fire native dblclicks for touch events.
// It seems that in all such cases `detail` property of `click` event is always `1`.
// So here we rely on that fact to avoid excessive 'dblclick' simulation when not needed.
var i,n=0;function o(t){if(1!==t.detail){i=t.detail;// keep in sync to avoid false dblclick in some cases
return}if("mouse"!==t.pointerType&&(!t.sourceCapabilities||t.sourceCapabilities.firesTouchEvents)){// When clicking on an <input>, the browser generates a click on its
// <label> (and vice versa) triggering two clicks in quick succession.
// This ignores clicks on elements which are a label with a 'for'
// attribute (or children of such a label), but not children of
// a <input>.
var o=eP(t);if(!o.some(function(t){return t instanceof HTMLLabelElement&&t.attributes.for})||o.some(function(t){return t instanceof HTMLInputElement||t instanceof HTMLSelectElement})){var s=Date.now();s-n<=200?2==++i&&e(/*
   * Extends the event handling code with double tap support for mobile browsers.
   *
   * Note: currently most browsers fire native dblclick, with only a few exceptions
   * (see https://github.com/Leaflet/Leaflet/issues/7012#issuecomment-595087386)
   */function(t){// in modern browsers `type` cannot be just overridden:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only
var e,i,n={};for(i in t)e=t[i],n[i]=e&&e.bind?e.bind(t):e;return t=n,n.type="dblclick",n.detail=2,n.isTrusted=!1,n._simulated=!0,n}(t)):i=1,n=s}}}return t.addEventListener("click",o),{dblclick:e,simDblclick:o}}(t,s):"addEventListener"in t?"touchstart"===e||"touchmove"===e||"wheel"===e||"mousewheel"===e?t.addEventListener(eg[e]||e,s,!!tR.passiveEvents&&{passive:!1}):"mouseenter"===e||"mouseleave"===e?(s=function(e){eS(t,e=e||window.event)&&a(e)},t.addEventListener(eg[e],s,!1)):t.addEventListener(e,a,!1):t.attachEvent("on"+e,s),t[ep]=t[ep]||{},t[ep][o]=s}function ev(t,e,i,n,o){o=o||e+m(i)+(n?"_"+m(n):"");var s=t[ep]&&t[ep][o];if(!s)return this;!tR.touchNative&&tR.pointer&&0===e.indexOf("touch")?function(t,e,i){if(!tj[e]){console.warn("wrong event specified:",e);return}t.removeEventListener(tj[e],i,!1)}(t,e,s):tR.touch&&"dblclick"===e?(t.removeEventListener("dblclick",s.dblclick),t.removeEventListener("click",s.simDblclick)):"removeEventListener"in t?t.removeEventListener(eg[e]||e,s,!1):t.detachEvent("on"+e,s),t[ep][o]=null}// @function stopPropagation(ev: DOMEvent): this
// Stop the given event from propagation to parent elements. Used inside the listener functions:
// ```js
// L.DomEvent.on(div, 'click', function (ev) {
// 	L.DomEvent.stopPropagation(ev);
// });
// ```
function ey(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}// @function disableScrollPropagation(el: HTMLElement): this
// Adds `stopPropagation` to the element's `'wheel'` events (plus browser variants).
function ex(t){return e_(t,"wheel",ey),this}// @function disableClickPropagation(el: HTMLElement): this
// Adds `stopPropagation` to the element's `'click'`, `'dblclick'`, `'contextmenu'`,
// `'mousedown'` and `'touchstart'` events (plus browser variants).
function eb(t){return eu(t,"mousedown touchstart dblclick contextmenu",ey),t._leaflet_disable_click=!0,this}// @function preventDefault(ev: DOMEvent): this
// Prevents the default action of the DOM Event `ev` from happening (such as
// following a link in the href of the a element, or doing a POST request
// with page reload when a `<form>` is submitted).
// Use it inside listener functions.
function ew(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}// @function stop(ev: DOMEvent): this
// Does `stopPropagation` and `preventDefault` at the same time.
function eM(t){return ew(t),ey(t),this}// @function getPropagationPath(ev: DOMEvent): Array
// Compatibility polyfill for [`Event.composedPath()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath).
// Returns an array containing the `HTMLElement`s that the given DOM event
// should propagate to (if not stopped).
function eP(t){if(t.composedPath)return t.composedPath();for(var e=[],i=t.target;i;)e.push(i),i=i.parentNode;return e}// @function getMousePosition(ev: DOMEvent, container?: HTMLElement): Point
// Gets normalized mouse position from a DOM event relative to the
// `container` (border excluded) or to the whole page if not specified.
function eL(t,e){if(!e)return new Z(t.clientX,t.clientY);var i=ed(e),n=i.boundingClientRect;// left and top  values are in page scale (like the event clientX/Y)
return new Z(// whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
(t.clientX-n.left)/i.x-e.clientLeft,(t.clientY-n.top)/i.y-e.clientTop)}//  except , Safari and
// We need double the scroll pixels (see #7403 and #4538) for all Browsers
// except OSX (Mac) -> 3x, Chrome running on Linux 1x
var ek=tR.linux&&tR.chrome?window.devicePixelRatio:tR.mac?3*window.devicePixelRatio:window.devicePixelRatio>0?2*window.devicePixelRatio:1;// @function getWheelDelta(ev: DOMEvent): Number
// Gets normalized wheel delta from a wheel DOM event, in vertical
// pixels scrolled (negative if scrolling down).
// Events from pointing devices without precise scrolling are mapped to
// a best guess of 60 pixels.
function eT(t){return tR.edge?t.wheelDeltaY/2:t.deltaY&&0===t.deltaMode?-t.deltaY/ek:t.deltaY&&1===t.deltaMode?-(20*t.deltaY):t.deltaY&&2===t.deltaMode?-(60*t.deltaY):t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&32765>Math.abs(t.detail)?-(20*t.detail):t.detail?-(60*(t.detail/32765)):0}// check if element really left/entered the event target (for mouseenter/mouseleave)
function eS(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch(t){return!1}return i!==t}/*
   * @class PosAnimation
   * @aka L.PosAnimation
   * @inherits Evented
   * Used internally for panning animations, utilizing CSS3 Transitions for modern browsers and a timer fallback for IE6-9.
   *
   * @example
   * ```js
   * var myPositionMarker = L.marker([48.864716, 2.294694]).addTo(map);
   *
   * myPositionMarker.on("click", function() {
   * 	var pos = map.latLngToLayerPoint(myPositionMarker.getLatLng());
   * 	pos.y -= 25;
   * 	var fx = new L.PosAnimation();
   *
   * 	fx.once('end',function() {
   * 		pos.y += 25;
   * 		fx.run(myPositionMarker._icon, pos, 0.8);
   * 	});
   *
   * 	fx.run(myPositionMarker._icon, pos, 0.3);
   * });
   *
   * ```
   *
   * @constructor L.PosAnimation()
   * Creates a `PosAnimation` object.
   *
   */var eC=F.extend({// @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
// Run an animation of a given element to a new position, optionally setting
// duration in seconds (`0.25` by default) and easing linearity factor (3rd
// argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
// `0.5` by default).
run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=eo(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,// @event start: Event
// Fired when the animation starts
this.fire("start"),this._animate()},// @method stop()
// Stops the animation (if currently running).
stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){// animation loop
this._animId=I(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,i=1e3*this._duration;e<i?this._runFrame(this._easeOut(e/i),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){var i=this._startPos.add(this._offset.multiplyBy(t));e&&i._round(),en(this._el,i),// @event step: Event
// Fired continuously during the animation.
this.fire("step")},_complete:function(){R(this._animId),this._inProgress=!1,// @event end: Event
// Fired when the animation ends.
this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),eE=F.extend({options:{// @section Map State Options
// @option crs: CRS = L.CRS.EPSG3857
// The [Coordinate Reference System](#crs) to use. Don't change this if you're not
// sure what it means.
crs:tt,// @option center: LatLng = undefined
// Initial geographic center of the map
center:void 0,// @option zoom: Number = undefined
// Initial map zoom level
zoom:void 0,// @option minZoom: Number = *
// Minimum zoom level of the map.
// If not specified and at least one `GridLayer` or `TileLayer` is in the map,
// the lowest of their `minZoom` options will be used instead.
minZoom:void 0,// @option maxZoom: Number = *
// Maximum zoom level of the map.
// If not specified and at least one `GridLayer` or `TileLayer` is in the map,
// the highest of their `maxZoom` options will be used instead.
maxZoom:void 0,// @option layers: Layer[] = []
// Array of layers that will be added to the map initially
layers:[],// @option maxBounds: LatLngBounds = null
// When this option is set, the map restricts the view to the given
// geographical bounds, bouncing the user back if the user tries to pan
// outside the view. To set the restriction dynamically, use
// [`setMaxBounds`](#map-setmaxbounds) method.
maxBounds:void 0,// @option renderer: Renderer = *
// The default method for drawing vector layers on the map. `L.SVG`
// or `L.Canvas` by default depending on browser support.
renderer:void 0,// @section Animation Options
// @option zoomAnimation: Boolean = true
// Whether the map zoom animation is enabled. By default it's enabled
// in all browsers that support CSS3 Transitions except Android.
zoomAnimation:!0,// @option zoomAnimationThreshold: Number = 4
// Won't animate zoom if the zoom difference exceeds this value.
zoomAnimationThreshold:4,// @option fadeAnimation: Boolean = true
// Whether the tile fade animation is enabled. By default it's enabled
// in all browsers that support CSS3 Transitions except Android.
fadeAnimation:!0,// @option markerZoomAnimation: Boolean = true
// Whether markers animate their zoom with the zoom animation, if disabled
// they will disappear for the length of the animation. By default it's
// enabled in all browsers that support CSS3 Transitions except Android.
markerZoomAnimation:!0,// @option transform3DLimit: Number = 2^23
// Defines the maximum size of a CSS translation transform. The default
// value should not be changed unless a web browser positions layers in
// the wrong place after doing a large `panBy`.
transform3DLimit:8388608,// @section Interaction Options
// @option zoomSnap: Number = 1
// Forces the map's zoom level to always be a multiple of this, particularly
// right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
// By default, the zoom level snaps to the nearest integer; lower values
// (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
// means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
zoomSnap:1,// @option zoomDelta: Number = 1
// Controls how much the map's zoom level will change after a
// [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
// or `-` on the keyboard, or using the [zoom controls](#control-zoom).
// Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
zoomDelta:1,// @option trackResize: Boolean = true
// Whether the map automatically handles browser window resize to update itself.
trackResize:!0},initialize:function(t,e){e=w(this,e),// Make sure to assign internal flags at the beginning,
// to avoid inconsistent state in some edge cases.
this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),// hack for https://github.com/Leaflet/Leaflet/issues/1980
this._onResize=p(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),void 0!==e.zoom&&(this._zoom=this._limitZoom(e.zoom)),e.center&&void 0!==e.zoom&&this.setView(q(e.center),e.zoom,{reset:!0}),this.callInitHooks(),// don't animate on browsers without hardware-accelerated transitions or old Android/Opera
this._zoomAnimated=tX&&tR.any3d&&!tR.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),eu(this._proxy,tK,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},// @section Methods for modifying map state
// @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
// Sets the view of the map (geographical center and zoom) with the given
// animation options.
setView:function(t,i,n){return(i=void 0===i?this._zoom:this._limitZoom(i),t=this._limitCenter(q(t),i,this.options.maxBounds),n=n||{},this._stop(),this._loaded&&!n.reset&&!0!==n&&(void 0!==n.animate&&(n.zoom=e({animate:n.animate},n.zoom),n.pan=e({animate:n.animate,duration:n.duration},n.pan)),this._zoom!==i?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,i,n.zoom):this._tryAnimatedPan(t,n.pan)))?// prevent resize handler call, the view will refresh after animation anyway
clearTimeout(this._sizeTimer):// animation didn't start, just reset the map view
this._resetView(t,i,n.pan&&n.pan.noMoveStart),this},// @method setZoom(zoom: Number, options?: Zoom/pan options): this
// Sets the zoom of the map.
setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},// @method zoomIn(delta?: Number, options?: Zoom options): this
// Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
zoomIn:function(t,e){return t=t||(tR.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},// @method zoomOut(delta?: Number, options?: Zoom options): this
// Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
zoomOut:function(t,e){return t=t||(tR.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},// @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
// Zooms the map while keeping a specified geographical point on the map
// stationary (e.g. used internally for scroll zoom and double-click zoom).
// @alternative
// @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
// Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
setZoomAround:function(t,e,i){var n=this.getZoomScale(e),o=this.getSize().divideBy(2),s=(t instanceof Z?t:this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1-1/n),a=this.containerPointToLatLng(o.add(s));return this.setView(a,e,{zoom:i})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():$(t);var i=W(e.paddingTopLeft||e.padding||[0,0]),n=W(e.paddingBottomRight||e.padding||[0,0]),o=this.getBoundsZoom(t,!1,i.add(n));if((o="number"==typeof e.maxZoom?Math.min(e.maxZoom,o):o)===1/0)return{center:t.getCenter(),zoom:o};var s=n.subtract(i).divideBy(2),a=this.project(t.getSouthWest(),o),r=this.project(t.getNorthEast(),o);return{center:this.unproject(a.add(r).divideBy(2).add(s),o),zoom:o}},// @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
// Sets a map view that contains the given geographical bounds with the
// maximum zoom level possible.
fitBounds:function(t,e){if(!(t=$(t)).isValid())throw Error("Bounds are not valid.");var i=this._getBoundsCenterZoom(t,e);return this.setView(i.center,i.zoom,e)},// @method fitWorld(options?: fitBounds options): this
// Sets a map view that mostly contains the whole world with the maximum
// zoom level possible.
fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},// @method panTo(latlng: LatLng, options?: Pan options): this
// Pans the map to a given center.
panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},// @method panBy(offset: Point, options?: Pan options): this
// Pans the map by a given number of pixels (animated).
panBy:function(t,e){if(t=W(t).round(),e=e||{},!t.x&&!t.y)return this.fire("moveend");// If we pan too far, Chrome gets issues with tiles
// and makes them disappear or appear in the wrong place (slightly offset) #2602
if(!0!==e.animate&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;// animate pan unless animate: false specified
if(this._panAnim||(this._panAnim=new eC,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),!1!==e.animate){t4(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},// @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
// Sets the view of the map (geographical center and zoom) performing a smooth
// pan-zoom animation.
flyTo:function(t,e,i){if(!1===(i=i||{}).animate||!tR.any3d)return this.setView(t,e,i);this._stop();var n=this.project(this.getCenter()),o=this.project(t),s=this.getSize(),a=this._zoom;t=q(t),e=void 0===e?a:e;var r=Math.max(s.x,s.y),h=r*this.getZoomScale(a,e),l=o.distanceTo(n)||1;function c(t){var e=t?h:r,i=(h*h-r*r+(t?-1:1)*4.0658689599999995*l*l)/(2*e*2.0164*l),n=Math.sqrt(i*i+1)-i;return n<1e-9?-18:Math.log(n)}function d(t){return(Math.exp(t)-Math.exp(-t))/2}function u(t){return(Math.exp(t)+Math.exp(-t))/2}var p=c(0),f=Date.now(),m=(c(1)-p)/1.42,g=i.duration?1e3*i.duration:1e3*m*.8;return this._moveStart(!0,i.noMoveStart),(function i(){var s,h=(Date.now()-f)/g,c=(1-Math.pow(1-h,1.5))*m;h<=1?(this._flyToFrame=I(i,this),this._move(this.unproject(n.add(o.subtract(n).multiplyBy(r*(u(p)*(d(s=p+1.42*c)/u(s))-d(p))/2.0164/l)),a),this.getScaleZoom(r/(r*(u(p)/u(p+1.42*c))),a),{flyTo:!0})):this._move(t,e)._moveEnd(!0)}).call(this),this},// @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
// Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
// but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
flyToBounds:function(t,e){var i=this._getBoundsCenterZoom(t,e);return this.flyTo(i.center,i.zoom,e)},// @method setMaxBounds(bounds: LatLngBounds): this
// Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
setMaxBounds:function(t){return(t=$(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid())?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},// @method setMinZoom(zoom: Number): this
// Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
setMinZoom:function(t){var e=this.options.minZoom;return(this.options.minZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom))?this.setZoom(t):this},// @method setMaxZoom(zoom: Number): this
// Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
setMaxZoom:function(t){var e=this.options.maxZoom;return(this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom))?this.setZoom(t):this},// @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
// Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
panInsideBounds:function(t,e){this._enforcingBounds=!0;var i=this.getCenter(),n=this._limitCenter(i,this._zoom,$(t));return i.equals(n)||this.panTo(n,e),this._enforcingBounds=!1,this},// @method panInside(latlng: LatLng, options?: padding options): this
// Pans the map the minimum amount to make the `latlng` visible. Use
// padding options to fit the display to more restricted bounds.
// If `latlng` is already within the (optionally padded) display bounds,
// the map will not be panned.
panInside:function(t,e){var i=W((e=e||{}).paddingTopLeft||e.padding||[0,0]),n=W(e.paddingBottomRight||e.padding||[0,0]),o=this.project(this.getCenter()),s=this.project(t),a=this.getPixelBounds(),r=H([a.min.add(i),a.max.subtract(n)]),h=r.getSize();if(!r.contains(s)){this._enforcingBounds=!0;var l=s.subtract(r.getCenter()),c=r.extend(s).getSize().subtract(h);o.x+=l.x<0?-c.x:c.x,o.y+=l.y<0?-c.y:c.y,this.panTo(this.unproject(o),e),this._enforcingBounds=!1}return this},// @method invalidateSize(options: Zoom/pan options): this
// Checks if the map container size changed and updates the map if so —
// call it after you've changed the map size dynamically, also animating
// pan by default. If `options.pan` is `false`, panning will not occur.
// If `options.debounceMoveend` is `true`, it will delay `moveend` event so
// that it doesn't happen often even if the method is called many
// times in a row.
// @alternative
// @method invalidateSize(animate: Boolean): this
// Checks if the map container size changed and updates the map if so —
// call it after you've changed the map size dynamically, also animating
// pan by default.
invalidateSize:function(t){if(!this._loaded)return this;t=e({animate:!1,pan:!0},!0===t?{animate:!0}:t);var i=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var n=this.getSize(),o=i.divideBy(2).round(),s=n.divideBy(2).round(),a=o.subtract(s);return a.x||a.y?(t.animate&&t.pan?this.panBy(a):(t.pan&&this._rawPanBy(a),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(p(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:i,newSize:n})):this},// @section Methods for modifying map state
// @method stop(): this
// Stops the currently running `panTo` or `flyTo` animation, if any.
stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},// @section Geolocation methods
// @method locate(options?: Locate options): this
// Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
// event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
// and optionally sets the map view to the user's location with respect to
// detection accuracy (or to the world view if geolocation failed).
// Note that, if your page doesn't use HTTPS, this method will fail in
// modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
// See `Locate options` for more details.
locate:function(t){if(t=this._locateOptions=e({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var i=p(this._handleGeolocationResponse,this),n=p(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(i,n,t):navigator.geolocation.getCurrentPosition(i,n,t),this},// @method stopLocate(): this
// Stops watching location previously initiated by `map.locate({watch: true})`
// and aborts resetting the map view if map.locate was called with
// `{setView: true}`.
stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){if(this._container._leaflet_id){var e=t.code,i=t.message||(1===e?"permission denied":2===e?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),// @section Location events
// @event locationerror: ErrorEvent
// Fired when geolocation (using the [`locate`](#map-locate) method) failed.
this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})}},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var e=t.coords.latitude,i=t.coords.longitude,n=new Y(e,i),o=n.toBounds(2*t.coords.accuracy),s=this._locateOptions;if(s.setView){var a=this.getBoundsZoom(o);this.setView(n,s.maxZoom?Math.min(a,s.maxZoom):a)}var r={latlng:n,bounds:o,timestamp:t.timestamp};for(var h in t.coords)"number"==typeof t.coords[h]&&(r[h]=t.coords[h]);// @event locationfound: LocationEvent
// Fired when geolocation (using the [`locate`](#map-locate) method)
// went successfully.
this.fire("locationfound",r)}},// TODO Appropriate docs section?
// @section Other Methods
// @method addHandler(name: String, HandlerClass: Function): this
// Adds a new `Handler` to the map, given its name and constructor function.
addHandler:function(t,e){if(!e)return this;var i=this[t]=new e(this);return this._handlers.push(i),this.options[t]&&i.enable(),this},// @method remove(): this
// Destroys the map and clears all related event listeners.
remove:function(){var t;if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw Error("Map container is being reused by another instance");try{// throws error in IE6-8
delete this._container._leaflet_id,delete this._containerId}catch(t){/*eslint-disable */this._container._leaflet_id=void 0,/* eslint-enable */this._containerId=void 0}for(t in void 0!==this._locationWatchId&&this.stopLocate(),this._stop(),t1(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(R(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&// @event unload: Event
// Fired when the map is destroyed with [remove](#map-remove) method.
this.fire("unload"),this._layers)this._layers[t].remove();for(t in this._panes)t1(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},// @section Other Methods
// @method createPane(name: String, container?: HTMLElement): HTMLElement
// Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
// then returns it. The pane is created as a child of `container`, or
// as a child of the main map pane if not set.
createPane:function(t,e){var i=t0("div","leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),e||this._mapPane);return t&&(this._panes[t]=i),i},// @section Methods for Getting Map State
// @method getCenter(): LatLng
// Returns the geographical center of the map view
getCenter:function(){return(this._checkIfLoaded(),this._lastCenter&&!this._moved())?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},// @method getZoom(): Number
// Returns the current zoom level of the map view
getZoom:function(){return this._zoom},// @method getBounds(): LatLngBounds
// Returns the geographical bounds visible in the current map view
getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),i=this.unproject(t.getTopRight());return new U(e,i)},// @method getMinZoom(): Number
// Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
getMinZoom:function(){return void 0===this.options.minZoom?this._layersMinZoom||0:this.options.minZoom},// @method getMaxZoom(): Number
// Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
getMaxZoom:function(){return void 0===this.options.maxZoom?void 0===this._layersMaxZoom?1/0:this._layersMaxZoom:this.options.maxZoom},// @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
// Returns the maximum zoom level on which the given bounds fit to the map
// view in its entirety. If `inside` (optional) is set to `true`, the method
// instead returns the minimum zoom level on which the map view fits into
// the given bounds in its entirety.
getBoundsZoom:function(t,e,i){t=$(t),i=W(i||[0,0]);var n=this.getZoom()||0,o=this.getMinZoom(),s=this.getMaxZoom(),a=t.getNorthWest(),r=t.getSouthEast(),h=this.getSize().subtract(i),l=H(this.project(r,n),this.project(a,n)).getSize(),c=tR.any3d?this.options.zoomSnap:1,d=h.x/l.x,u=h.y/l.y,p=e?Math.max(d,u):Math.min(d,u);return n=this.getScaleZoom(p,n),c&&(n=Math.round(n/(c/100))*(c/100),n=e?Math.ceil(n/c)*c:Math.floor(n/c)*c),Math.max(o,Math.min(s,n))},// @method getSize(): Point
// Returns the current size of the map container (in pixels).
getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new Z(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},// @method getPixelBounds(): Bounds
// Returns the bounds of the current map view in projected pixel
// coordinates (sometimes useful in layer and overlay implementations).
getPixelBounds:function(t,e){var i=this._getTopLeftPoint(t,e);return new V(i,i.add(this.getSize()))},// TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
// the map pane? "left point of the map layer" can be confusing, specially
// since there can be negative offsets.
// @method getPixelOrigin(): Point
// Returns the projected pixel coordinates of the top left point of
// the map layer (useful in custom layer and overlay implementations).
getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},// @method getPixelWorldBounds(zoom?: Number): Bounds
// Returns the world's bounds in pixel coordinates for zoom level `zoom`.
// If `zoom` is omitted, the map's current zoom level is used.
getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(void 0===t?this.getZoom():t)},// @section Other Methods
// @method getPane(pane: String|HTMLElement): HTMLElement
// Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
getPane:function(t){return"string"==typeof t?this._panes[t]:t},// @method getPanes(): Object
// Returns a plain object containing the names of all [panes](#map-pane) as keys and
// the panes as values.
getPanes:function(){return this._panes},// @method getContainer: HTMLElement
// Returns the HTML element that contains the map.
getContainer:function(){return this._container},// @section Conversion Methods
// @method getZoomScale(toZoom: Number, fromZoom: Number): Number
// Returns the scale factor to be applied to a map transition from zoom level
// `fromZoom` to `toZoom`. Used internally to help with zoom animations.
getZoomScale:function(t,e){// TODO replace with universal implementation after refactoring projections
var i=this.options.crs;return e=void 0===e?this._zoom:e,i.scale(t)/i.scale(e)},// @method getScaleZoom(scale: Number, fromZoom: Number): Number
// Returns the zoom level that the map would end up at, if it is at `fromZoom`
// level and everything is scaled by a factor of `scale`. Inverse of
// [`getZoomScale`](#map-getZoomScale).
getScaleZoom:function(t,e){var i=this.options.crs;e=void 0===e?this._zoom:e;var n=i.zoom(t*i.scale(e));return isNaN(n)?1/0:n},// @method project(latlng: LatLng, zoom: Number): Point
// Projects a geographical coordinate `LatLng` according to the projection
// of the map's CRS, then scales it according to `zoom` and the CRS's
// `Transformation`. The result is pixel coordinate relative to
// the CRS origin.
project:function(t,e){return e=void 0===e?this._zoom:e,this.options.crs.latLngToPoint(q(t),e)},// @method unproject(point: Point, zoom: Number): LatLng
// Inverse of [`project`](#map-project).
unproject:function(t,e){return e=void 0===e?this._zoom:e,this.options.crs.pointToLatLng(W(t),e)},// @method layerPointToLatLng(point: Point): LatLng
// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
// returns the corresponding geographical coordinate (for the current zoom level).
layerPointToLatLng:function(t){var e=W(t).add(this.getPixelOrigin());return this.unproject(e)},// @method latLngToLayerPoint(latlng: LatLng): Point
// Given a geographical coordinate, returns the corresponding pixel coordinate
// relative to the [origin pixel](#map-getpixelorigin).
latLngToLayerPoint:function(t){return this.project(q(t))._round()._subtract(this.getPixelOrigin())},// @method wrapLatLng(latlng: LatLng): LatLng
// Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
// map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
// CRS's bounds.
// By default this means longitude is wrapped around the dateline so its
// value is between -180 and +180 degrees.
wrapLatLng:function(t){return this.options.crs.wrapLatLng(q(t))},// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
// Returns a `LatLngBounds` with the same size as the given one, ensuring that
// its center is within the CRS's bounds.
// By default this means the center longitude is wrapped around the dateline so its
// value is between -180 and +180 degrees, and the majority of the bounds
// overlaps the CRS's bounds.
wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds($(t))},// @method distance(latlng1: LatLng, latlng2: LatLng): Number
// Returns the distance between two geographical coordinates according to
// the map's CRS. By default this measures distance in meters.
distance:function(t,e){return this.options.crs.distance(q(t),q(e))},// @method containerPointToLayerPoint(point: Point): Point
// Given a pixel coordinate relative to the map container, returns the corresponding
// pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
containerPointToLayerPoint:function(t){return W(t).subtract(this._getMapPanePos())},// @method layerPointToContainerPoint(point: Point): Point
// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
// returns the corresponding pixel coordinate relative to the map container.
layerPointToContainerPoint:function(t){return W(t).add(this._getMapPanePos())},// @method containerPointToLatLng(point: Point): LatLng
// Given a pixel coordinate relative to the map container, returns
// the corresponding geographical coordinate (for the current zoom level).
containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(W(t));return this.layerPointToLatLng(e)},// @method latLngToContainerPoint(latlng: LatLng): Point
// Given a geographical coordinate, returns the corresponding pixel coordinate
// relative to the map container.
latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(q(t)))},// @method mouseEventToContainerPoint(ev: MouseEvent): Point
// Given a MouseEvent object, returns the pixel coordinate relative to the
// map container where the event took place.
mouseEventToContainerPoint:function(t){return eL(t,this._container)},// @method mouseEventToLayerPoint(ev: MouseEvent): Point
// Given a MouseEvent object, returns the pixel coordinate relative to
// the [origin pixel](#map-getpixelorigin) where the event took place.
mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},// @method mouseEventToLatLng(ev: MouseEvent): LatLng
// Given a MouseEvent object, returns geographical coordinate where the
// event took place.
mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},// map initialization methods
_initContainer:function(t){var e=this._container=tJ(t);if(e){if(e._leaflet_id)throw Error("Map container is already initialized.")}else throw Error("Map container not found.");eu(e,"scroll",this._onScroll,this),this._containerId=m(e)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&tR.any3d,t4(t,"leaflet-container"+(tR.touch?" leaflet-touch":"")+(tR.retina?" leaflet-retina":"")+(tR.ielt9?" leaflet-oldie":"")+(tR.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var e=tQ(t,"position");"absolute"!==e&&"relative"!==e&&"fixed"!==e&&"sticky"!==e&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},// @section
//
// Panes are DOM elements used to control the ordering of layers on the map. You
// can access panes with [`map.getPane`](#map-getpane) or
// [`map.getPanes`](#map-getpanes) methods. New panes can be created with the
// [`map.createPane`](#map-createpane) method.
//
// Every map has the following default panes that differ only in zIndex.
//
// @pane mapPane: HTMLElement = 'auto'
// Pane that contains all other map panes
this._mapPane=this.createPane("mapPane",this._container),en(this._mapPane,new Z(0,0)),// @pane tilePane: HTMLElement = 200
// Pane for `GridLayer`s and `TileLayer`s
this.createPane("tilePane"),// @pane overlayPane: HTMLElement = 400
// Pane for vectors (`Path`s, like `Polyline`s and `Polygon`s), `ImageOverlay`s and `VideoOverlay`s
this.createPane("overlayPane"),// @pane shadowPane: HTMLElement = 500
// Pane for overlay shadows (e.g. `Marker` shadows)
this.createPane("shadowPane"),// @pane markerPane: HTMLElement = 600
// Pane for `Icon`s of `Marker`s
this.createPane("markerPane"),// @pane tooltipPane: HTMLElement = 650
// Pane for `Tooltip`s.
this.createPane("tooltipPane"),// @pane popupPane: HTMLElement = 700
// Pane for `Popup`s.
this.createPane("popupPane"),this.options.markerZoomAnimation||(t4(t.markerPane,"leaflet-zoom-hide"),t4(t.shadowPane,"leaflet-zoom-hide"))},// private methods that modify map state
// @section Map state change events
_resetView:function(t,e,i){en(this._mapPane,new Z(0,0));var n=!this._loaded;this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset");var o=this._zoom!==e;this._moveStart(o,i)._move(t,e)._moveEnd(o),// @event viewreset: Event
// Fired when the map needs to redraw its content (this usually happens
// on map zoom or load). Very useful for creating custom overlays.
this.fire("viewreset"),n&&this.fire("load")},_moveStart:function(t,e){return t&&this.fire("zoomstart"),e||this.fire("movestart"),this},_move:function(t,e,i,n){void 0===e&&(e=this._zoom);var o=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),n?i&&i.pinch&&this.fire("zoom",i):((o||i&&i.pinch)&&this.fire("zoom",i),// @event move: Event
// Fired repeatedly during any movement of the map,
// including pan and fly animations.
this.fire("move",i)),this},_moveEnd:function(t){// @event moveend: Event
// Fired when the center of the map stops changing
// (e.g. user stopped dragging the map or after non-centered zoom).
return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return R(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){en(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw Error("Set map center and zoom first.")},// DOM event handling
// @section Interaction events
_initEvents:function(t){this._targets={},this._targets[m(this._container)]=this;var e=t?ef:eu;// @event click: MouseEvent
// Fired when the user clicks (or taps) the map.
// @event dblclick: MouseEvent
// Fired when the user double-clicks (or double-taps) the map.
// @event mousedown: MouseEvent
// Fired when the user pushes the mouse button on the map.
// @event mouseup: MouseEvent
// Fired when the user releases the mouse button on the map.
// @event mouseover: MouseEvent
// Fired when the mouse enters the map.
// @event mouseout: MouseEvent
// Fired when the mouse leaves the map.
// @event mousemove: MouseEvent
// Fired while the mouse moves over the map.
// @event contextmenu: MouseEvent
// Fired when the user pushes the right mouse button on the map, prevents
// default browser context menu from showing if there are listeners on
// this event. Also fired on mobile when the user holds a single touch
// for a second (also called long press).
// @event keypress: KeyboardEvent
// Fired when the user presses a key from the keyboard that produces a character value while the map is focused.
// @event keydown: KeyboardEvent
// Fired when the user presses a key from the keyboard while the map is focused. Unlike the `keypress` event,
// the `keydown` event is fired for keys that produce a character value and for keys
// that do not produce a character value.
// @event keyup: KeyboardEvent
// Fired when the user releases a key from the keyboard while the map is focused.
e(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&e(window,"resize",this._onResize,this),tR.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){R(this._resizeRequest),this._resizeRequest=I(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&// a pixel offset on very high values, see: https://jsfiddle.net/dg6r5hhb/
this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var i,n=[],o="mouseout"===e||"mouseover"===e,s=t.target||t.srcElement,a=!1;s;){if((i=this._targets[m(s)])&&("click"===e||"preclick"===e)&&this._draggableMoved(i)){// Prevent firing click after you just dragged an object.
a=!0;break}if(i&&i.listens(e,!0)&&(o&&!eS(s,t)||(n.push(i),o))||s===this._container)break;s=s.parentNode}return!n.length&&!a&&!o&&this.listens(e,!0)&&(n=[this]),n},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var e=t.target||t.srcElement;if(!(!this._loaded||e._leaflet_disable_events||"click"===t.type&&this._isClickDisabled(e))){var i=t.type;"mousedown"===i&&eh(e),this._fireDOMEvent(t,i)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,i,n){if("click"===t.type){// Fire a synthetic 'preclick' event which propagates up (mainly for closing popups).
// @event preclick: MouseEvent
// Fired before mouse click on the map (sometimes useful when you
// want something to happen on click before any existing click
// handlers start running).
var o=e({},t);o.type="preclick",this._fireDOMEvent(o,o.type,n)}// Find the layer the event is propagating from and its parents.
var s=this._findEventTargets(t,i);if(n){for(var a=[],r=0;r<n.length;r++)n[r].listens(i,!0)&&a.push(n[r]);s=a.concat(s)}if(s.length){"contextmenu"===i&&ew(t);var h=s[0],l={originalEvent:t};if("keypress"!==t.type&&"keydown"!==t.type&&"keyup"!==t.type){var c=h.getLatLng&&(!h._radius||h._radius<=10);l.containerPoint=c?this.latLngToContainerPoint(h.getLatLng()):this.mouseEventToContainerPoint(t),l.layerPoint=this.containerPointToLayerPoint(l.containerPoint),l.latlng=c?h.getLatLng():this.layerPointToLatLng(l.layerPoint)}for(r=0;r<s.length;r++)if(s[r].fire(i,l,!0),l.originalEvent._stopped||!1===s[r].options.bubblingMouseEvents&&-1!==S(this._mouseEvents,i))return}},_draggableMoved:function(t){return(t=t.dragging&&t.dragging.enabled()?t:this).dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},// @section Other Methods
// @method whenReady(fn: Function, context?: Object): this
// Runs the given function `fn` when the map gets initialized with
// a view (center and zoom) and at least one layer, or immediately
// if it's already initialized, optionally passing a function context.
whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},// private methods for getting map state
_getMapPanePos:function(){return eo(this._mapPane)||new Z(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){return(t&&void 0!==e?this._getNewPixelOrigin(t,e):this.getPixelOrigin()).subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return this.project(t,e)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return H([this.project(t.getSouthWest(),e)._subtract(n),this.project(t.getNorthWest(),e)._subtract(n),this.project(t.getSouthEast(),e)._subtract(n),this.project(t.getNorthEast(),e)._subtract(n)])},// layer point of the current center
_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},// offset of the specified place to the current center in pixels
_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},// adjust center for view to get inside bounds
_limitCenter:function(t,e,i){if(!i)return t;var n=this.project(t,e),o=this.getSize().divideBy(2),s=new V(n.subtract(o),n.add(o)),a=this._getBoundsOffset(s,i,e);return(// If offset is less than a pixel, ignore.
// This prevents unstable projections from getting into
// an infinite loop of tiny offsets.
1>=Math.abs(a.x)&&1>=Math.abs(a.y)?t:this.unproject(n.add(a),e))},// adjust offset for view to get inside bounds
_limitOffset:function(t,e){if(!e)return t;var i=this.getPixelBounds(),n=new V(i.min.add(t),i.max.add(t));return t.add(this._getBoundsOffset(n,e))},// returns offset needed for pxBounds to get inside maxBounds at a specified zoom
_getBoundsOffset:function(t,e,i){var n=H(this.project(e.getNorthEast(),i),this.project(e.getSouthWest(),i)),o=n.min.subtract(t.min),s=n.max.subtract(t.max),a=this._rebound(o.x,-s.x),r=this._rebound(o.y,-s.y);return new Z(a,r)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom(),n=tR.any3d?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(e,Math.min(i,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){t6(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){// difference between the new and current centers in pixels
var i=this._getCenterOffset(t)._trunc();return(// don't animate too far unless animate: true specified in options
!!(!0===(e&&e.animate)||this.getSize().contains(i))&&(this.panBy(i,e),!0))},_createAnimProxy:function(){var t=this._proxy=t0("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(t){var e=this._proxy.style[tG];ei(this._proxy,this.project(t.center,t.zoom),this.getZoomScale(t.zoom,1)),e===this._proxy.style[tG]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){t1(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),e=this.getZoom();ei(this._proxy,this.project(t,e),this.getZoomScale(e,1))},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0;// don't animate if disabled, not supported or zoom difference is too large
if(i=i||{},!this._zoomAnimated||!1===i.animate||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;// offset is the pixel coords of the zoom origin relative to the current center
var n=this.getZoomScale(e),o=this._getCenterOffset(t)._divideBy(1-1/n);return(// don't animate if the zoom origin isn't within one screen from the current center, unless forced
!!(!0===i.animate||this.getSize().contains(o))&&(I(function(){this._moveStart(!0,i.noMoveStart||!1)._animateZoom(t,e,!0)},this),!0))},_animateZoom:function(t,e,i,n){this._mapPane&&(i&&(this._animatingZoom=!0,// remember what center/zoom to set after animation
this._animateToCenter=t,this._animateToZoom=e,t4(this._mapPane,"leaflet-zoom-anim")),// @section Other Events
// @event zoomanim: ZoomAnimEvent
// Fired at least once per zoom animation. For continuous zoom, like pinch zooming, fired once per frame during zoom.
this.fire("zoomanim",{center:t,zoom:e,noUpdate:n}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),// Work around webkit not firing 'transitionend', see https://github.com/Leaflet/Leaflet/issues/3689, 2693
setTimeout(p(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&t6(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}}),eO=B.extend({// @section
// @aka Control Options
options:{// @option position: String = 'topright'
// The position of the control (one of the map corners). Possible values are `'topleft'`,
// `'topright'`, `'bottomleft'` or `'bottomright'`
position:"topright"},initialize:function(t){w(this,t)},/* @section
  	 * Classes extending L.Control will inherit the following methods:
  	 *
  	 * @method getPosition: string
  	 * Returns the position of the control.
  	 */getPosition:function(){return this.options.position},// @method setPosition(position: string): this
// Sets the position of the control.
setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},// @method getContainer: HTMLElement
// Returns the HTMLElement that contains the control.
getContainer:function(){return this._container},// @method addTo(map: Map): this
// Adds the control to the given map.
addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),n=t._controlCorners[i];return t4(e,"leaflet-control"),-1!==i.indexOf("bottom")?n.insertBefore(e,n.firstChild):n.appendChild(e),this._map.on("unload",this.remove,this),this},// @method remove: this
// Removes the control from the map it is currently active on.
remove:function(){return this._map&&(t1(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null),this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),ez=function(t){return new eO(t)};/* @section Extension methods
   * @uninheritable
   *
   * Every control should extend from `L.Control` and (re-)implement the following methods.
   *
   * @method onAdd(map: Map): HTMLElement
   * Should return the container DOM element for the control and add listeners on relevant map events. Called on [`control.addTo(map)`](#control-addTo).
   *
   * @method onRemove(map: Map)
   * Optional method. Should contain all clean up code that removes the listeners previously added in [`onAdd`](#control-onadd). Called on [`control.remove()`](#control-remove).
   *//* @namespace Map
   * @section Methods for Layers and Controls
   */eE.include({// @method addControl(control: Control): this
// Adds the given control to the map
addControl:function(t){return t.addTo(this),this},// @method removeControl(control: Control): this
// Removes the given control from the map
removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},e="leaflet-",i=this._controlContainer=t0("div",e+"control-container",this._container);function n(n,o){var s=e+n+" "+e+o;t[n+o]=t0("div",s,i)}n("top","left"),n("top","right"),n("bottom","left"),n("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)t1(this._controlCorners[t]);t1(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});/*
   * @class Control.Layers
   * @aka L.Control.Layers
   * @inherits Control
   *
   * The layers control gives users the ability to switch between different base layers and switch overlays on/off (check out the [detailed example](https://leafletjs.com/examples/layers-control/)). Extends `Control`.
   *
   * @example
   *
   * ```js
   * var baseLayers = {
   * 	"Mapbox": mapbox,
   * 	"OpenStreetMap": osm
   * };
   *
   * var overlays = {
   * 	"Marker": marker,
   * 	"Roads": roadsLayer
   * };
   *
   * L.control.layers(baseLayers, overlays).addTo(map);
   * ```
   *
   * The `baseLayers` and `overlays` parameters are object literals with layer names as keys and `Layer` objects as values:
   *
   * ```js
   * {
   *     "<someName1>": layer1,
   *     "<someName2>": layer2
   * }
   * ```
   *
   * The layer names can contain HTML, which allows you to add additional styling to the items:
   *
   * ```js
   * {"<img src='my-layer-icon' /> <span class='my-layer-item'>My Layer</span>": myLayer}
   * ```
   */var eA=eO.extend({// @section
// @aka Control.Layers options
options:{// @option collapsed: Boolean = true
// If `true`, the control will be collapsed into an icon and expanded on mouse hover, touch, or keyboard activation.
collapsed:!0,position:"topright",// @option autoZIndex: Boolean = true
// If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
autoZIndex:!0,// @option hideSingleBase: Boolean = false
// If `true`, the base layers in the control will be hidden when there is only one.
hideSingleBase:!1,// @option sortLayers: Boolean = false
// Whether to sort the layers. When `false`, layers will keep the order
// in which they were added to the control.
sortLayers:!1,// @option sortFunction: Function = *
// A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
// that will be used for sorting the layers, when `sortLayers` is `true`.
// The function receives both the `L.Layer` instances and their names, as in
// `sortFunction(layerA, layerB, nameA, nameB)`.
// By default, it sorts layers alphabetically by their name.
sortFunction:function(t,e,i,n){return i<n?-1:n<i?1:0}},initialize:function(t,e,i){for(var n in w(this,i),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1,t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){// Trigger expand after Layers Control has been inserted into DOM so that is now has an actual height.
return eO.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},// @method addBaseLayer(layer: Layer, name: String): this
// Adds a base layer (radio button entry) with the given name to the control.
addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},// @method addOverlay(layer: Layer, name: String): this
// Adds an overlay (checkbox entry) with the given name to the control.
addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},// @method removeLayer(layer: Layer): this
// Remove the given layer from the control.
removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var e=this._getLayer(m(t));return e&&this._layers.splice(this._layers.indexOf(e),1),this._map?this._update():this},// @method expand(): this
// Expand the control container if collapsed.
expand:function(){t4(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(t4(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):t6(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},// @method collapse(): this
// Collapse the control container if expanded.
collapse:function(){return t6(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=t0("div",t),i=this.options.collapsed;// makes this work on IE touch devices by stopping it from firing a mouseout event when the touch is released
e.setAttribute("aria-haspopup",!0),eb(e),ex(e);var n=this._section=t0("section",t+"-list");i&&(this._map.on("click",this.collapse,this),eu(e,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var o=this._layersLink=t0("a",t+"-toggle",e);o.href="#",o.title="Layers",o.setAttribute("role","button"),eu(o,{keydown:function(t){13===t.keyCode&&this._expandSafely()},// Certain screen readers intercept the key event and instead send a click event
click:function(t){ew(t),this._expandSafely()}},this),i||this.expand(),this._baseLayersList=t0("div",t+"-base",n),this._separator=t0("div",t+"-separator",n),this._overlaysList=t0("div",t+"-overlays",n),e.appendChild(n)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&m(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,i){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:i}),this.options.sortLayers&&this._layers.sort(p(function(t,e){return this.options.sortFunction(t.layer,e.layer,t.name,e.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;t2(this._baseLayersList),t2(this._overlaysList),this._layerControlInputs=[];var t,e,i,n,o=0;for(i=0;i<this._layers.length;i++)n=this._layers[i],this._addItem(n),e=e||n.overlay,t=t||!n.overlay,o+=n.overlay?0:1;return this.options.hideSingleBase&&(t=t&&o>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=e&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(m(t.target)),i=e.overlay?"add"===t.type?"overlayadd":"overlayremove":"add"===t.type?"baselayerchange":null;i&&this._map.fire(i,e)},// IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
_createRadioElement:function(t,e){var i=document.createElement("div");return i.innerHTML='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",i.firstChild},_addItem:function(t){var e,i=document.createElement("label"),n=this._map.hasLayer(t.layer);t.overlay?((e=document.createElement("input")).type="checkbox",e.className="leaflet-control-layers-selector",e.defaultChecked=n):e=this._createRadioElement("leaflet-base-layers_"+m(this),n),this._layerControlInputs.push(e),e.layerId=m(t.layer),eu(e,"click",this._onInputClick,this);var o=document.createElement("span");o.innerHTML=" "+t.name;// Helps from preventing layer control flicker when checkboxes are disabled
// https://github.com/Leaflet/Leaflet/issues/2771
var s=document.createElement("span");return i.appendChild(s),s.appendChild(e),s.appendChild(o),(t.overlay?this._overlaysList:this._baseLayersList).appendChild(i),this._checkDisabledLayers(),i},_onInputClick:function(){// expanding the control on mobile with a click can cause adding a layer - we don't want this
if(!this._preventClick){var t,e,i=this._layerControlInputs,n=[],o=[];this._handlingClick=!0;for(var s=i.length-1;s>=0;s--)t=i[s],e=this._getLayer(t.layerId).layer,t.checked?n.push(e):t.checked||o.push(e);// Bugfix issue 2318: Should remove all old layers before readding new ones
for(s=0;s<o.length;s++)this._map.hasLayer(o[s])&&this._map.removeLayer(o[s]);for(s=0;s<n.length;s++)this._map.hasLayer(n[s])||this._map.addLayer(n[s]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t,e,i=this._layerControlInputs,n=this._map.getZoom(),o=i.length-1;o>=0;o--)t=i[o],e=this._getLayer(t.layerId).layer,t.disabled=void 0!==e.options.minZoom&&n<e.options.minZoom||void 0!==e.options.maxZoom&&n>e.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section;this._preventClick=!0,eu(t,"click",ew),this.expand();var e=this;setTimeout(function(){ef(t,"click",ew),e._preventClick=!1})}}),eD=eO.extend({// @section
// @aka Control.Zoom options
options:{position:"topleft",// @option zoomInText: String = '<span aria-hidden="true">+</span>'
// The text set on the 'zoom in' button.
zoomInText:'<span aria-hidden="true">+</span>',// @option zoomInTitle: String = 'Zoom in'
// The title set on the 'zoom in' button.
zoomInTitle:"Zoom in",// @option zoomOutText: String = '<span aria-hidden="true">&#x2212;</span>'
// The text set on the 'zoom out' button.
zoomOutText:'<span aria-hidden="true">&#x2212;</span>',// @option zoomOutTitle: String = 'Zoom out'
// The title set on the 'zoom out' button.
zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=t0("div",e+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,e+"-in",i,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,e+"-out",i,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,i,n,o){var s=t0("a",i,n);return s.innerHTML=t,s.href="#",s.title=e,/*
  		 * Will force screen readers like VoiceOver to read this as "Zoom in - button"
  		 */s.setAttribute("role","button"),s.setAttribute("aria-label",e),eb(s),eu(s,"click",eM),eu(s,"click",o,this),eu(s,"click",this._refocusOnMap,this),s},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";t6(this._zoomInButton,e),t6(this._zoomOutButton,e),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||t._zoom===t.getMinZoom())&&(t4(this._zoomOutButton,e),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||t._zoom===t.getMaxZoom())&&(t4(this._zoomInButton,e),this._zoomInButton.setAttribute("aria-disabled","true"))}});// @namespace Map
// @section Control options
// @option zoomControl: Boolean = true
// Whether a [zoom control](#control-zoom) is added to the map by default.
eE.mergeOptions({zoomControl:!0}),eE.addInitHook(function(){this.options.zoomControl&&(// @section Controls
// @property zoomControl: Control.Zoom
// The default zoom control (only available if the
// [`zoomControl` option](#map-zoomcontrol) was `true` when creating the map).
this.zoomControl=new eD,this.addControl(this.zoomControl))});/*
   * @class Control.Scale
   * @aka L.Control.Scale
   * @inherits Control
   *
   * A simple scale control that shows the scale of the current center of screen in metric (m/km) and imperial (mi/ft) systems. Extends `Control`.
   *
   * @example
   *
   * ```js
   * L.control.scale().addTo(map);
   * ```
   */var eI=eO.extend({// @section
// @aka Control.Scale options
options:{position:"bottomleft",// @option maxWidth: Number = 100
// Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
maxWidth:100,// @option metric: Boolean = True
// Whether to show the metric scale line (m/km).
metric:!0,// @option imperial: Boolean = True
// Whether to show the imperial scale line (mi/ft).
imperial:!0},onAdd:function(t){var e="leaflet-control-scale",i=t0("div",e),n=this.options;return this._addScales(n,e+"-line",i),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=t0("div",e,i)),t.imperial&&(this._iScale=t0("div",e,i))},_update:function(){var t=this._map,e=t.getSize().y/2,i=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(i)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t),i=e<1e3?e+" m":e/1e3+" km";this._updateScale(this._mScale,i,e/t)},_updateImperial:function(t){var e,i,n,o=3.2808399*t;o>5280?(e=o/5280,i=this._getRoundNum(e),this._updateScale(this._iScale,i+" mi",i/e)):(n=this._getRoundNum(o),this._updateScale(this._iScale,n+" ft",n/o))},_updateScale:function(t,e,i){t.style.width=Math.round(this.options.maxWidth*i)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;return e*(i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1)}}),eR=eO.extend({// @section
// @aka Control.Attribution options
options:{position:"bottomright",// @option prefix: String|false = 'Leaflet'
// The HTML text shown before the attributions. Pass `false` to disable.
prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(tR.inlineSvg?'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> ':"")+"Leaflet</a>"},initialize:function(t){w(this,t),this._attributions={}},onAdd:function(t){// TODO ugly, refactor
for(var e in t.attributionControl=this,this._container=t0("div","leaflet-control-attribution"),eb(this._container),t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},// @method setPrefix(prefix: String|false): this
// The HTML text shown before the attributions. Pass `false` to disable.
setPrefix:function(t){return this.options.prefix=t,this._update(),this},// @method addAttribution(text: String): this
// Adds an attribution text (e.g. `'&copy; OpenStreetMap contributors'`).
addAttribution:function(t){return t&&(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update()),this},// @method removeAttribution(text: String): this
// Removes an attribution text.
removeAttribution:function(t){return t&&this._attributions[t]&&(this._attributions[t]--,this._update()),this},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(' <span aria-hidden="true">|</span> ')}}});// @namespace Map
// @section Control options
// @option attributionControl: Boolean = true
// Whether a [attribution control](#control-attribution) is added to the map by default.
eE.mergeOptions({attributionControl:!0}),eE.addInitHook(function(){this.options.attributionControl&&new eR().addTo(this)}),eO.Layers=eA,eO.Zoom=eD,eO.Scale=eI,eO.Attribution=eR,ez.layers=function(t,e,i){return new eA(t,e,i)},ez.zoom=function(t){return new eD(t)},ez.scale=function(t){return new eI(t)},ez.attribution=function(t){return new eR(t)};/*
  	L.Handler is a base class for handler classes that are used internally to inject
  	interaction features like dragging to classes like Map and Marker.
  */// @class Handler
// @aka L.Handler
// Abstract class for map interaction handlers
var eB=B.extend({initialize:function(t){this._map=t},// @method enable(): this
// Enables the handler
enable:function(){return this._enabled||(this._enabled=!0,this.addHooks()),this},// @method disable(): this
// Disables the handler
disable:function(){return this._enabled&&(this._enabled=!1,this.removeHooks()),this},// @method enabled(): Boolean
// Returns `true` if the handler is enabled
enabled:function(){return!!this._enabled}});// @section There is static function which can be called without instantiating L.Handler:
// @function addTo(map: Map, name: String): this
// Adds a new Handler to the given map with the given name.
eB.addTo=function(t,e){return t.addHandler(e,this),this};/*
   * @class Draggable
   * @aka L.Draggable
   * @inherits Evented
   *
   * A class for making DOM elements draggable (including touch support).
   * Used internally for map and marker dragging. Only works for elements
   * that were positioned with [`L.DomUtil.setPosition`](#domutil-setposition).
   *
   * @example
   * ```js
   * var draggable = new L.Draggable(elementToDrag);
   * draggable.enable();
   * ```
   */var eN=tR.touch?"touchstart mousedown":"mousedown",eF=F.extend({options:{// @section
// @aka Draggable options
// @option clickTolerance: Number = 3
// The max number of pixels a user can shift the mouse pointer during a click
// for it to be considered a valid click (as opposed to a mouse drag).
clickTolerance:3},// @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
// Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
initialize:function(t,e,i,n){w(this,n),this._element=t,this._dragStartTarget=e||t,this._preventOutline=i},// @method enable()
// Enables the dragging ability
enable:function(){this._enabled||(eu(this._dragStartTarget,eN,this._onDown,this),this._enabled=!0)},// @method disable()
// Disables the dragging ability
disable:function(){this._enabled&&(eF._dragging===this&&this.finishDrag(!0),ef(this._dragStartTarget,eN,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){// Ignore the event if disabled; this happens in IE11
// under some circumstances, see #3666.
if(!(!this._enabled||(this._moved=!1,t8(this._element,"leaflet-zoom-anim")))){if(t.touches&&1!==t.touches.length){eF._dragging===this&&this.finishDrag();return}if(!eF._dragging&&!t.shiftKey&&(1===t.which||1===t.button||t.touches)&&(eF._dragging=this,this._preventOutline&&eh(this._element),ea(),i(),!this._moving)){// @event down: Event
// Fired when a drag is about to start.
this.fire("down");var e=t.touches?t.touches[0]:t,n=ec(this._element);this._startPoint=new Z(e.clientX,e.clientY),this._startPos=eo(this._element),// Cache the scale, so that we can continuously compensate for it during drag (_onMove).
this._parentScale=ed(n);var o="mousedown"===t.type;eu(document,o?"mousemove":"touchmove",this._onMove,this),eu(document,o?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(t){// Ignore the event if disabled; this happens in IE11
// under some circumstances, see #3666.
if(this._enabled){if(t.touches&&t.touches.length>1){this._moved=!0;return}var e=t.touches&&1===t.touches.length?t.touches[0]:t,i=new Z(e.clientX,e.clientY)._subtract(this._startPoint);(i.x||i.y)&&(Math.abs(i.x)+Math.abs(i.y)<this.options.clickTolerance||(// We assume that the parent container's position, border and scale do not change for the duration of the drag.
// Therefore there is no need to account for the position and border (they are eliminated by the subtraction)
// and we can use the cached value for the scale.
i.x/=this._parentScale.x,i.y/=this._parentScale.y,ew(t),this._moved||(// @event dragstart: Event
// Fired when a drag starts
this.fire("dragstart"),this._moved=!0,t4(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),t4(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(i),this._moving=!0,this._lastEvent=t,this._updatePosition()))}},_updatePosition:function(){var t={originalEvent:this._lastEvent};// @event predrag: Event
// Fired continuously during dragging *before* each corresponding
// update of the element's position.
this.fire("predrag",t),en(this._element,this._newPos),// @event drag: Event
// Fired continuously during dragging.
this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){t6(document.body,"leaflet-dragging"),this._lastTarget&&(t6(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),ef(document,"mousemove touchmove",this._onMove,this),ef(document,"mouseup touchend touchcancel",this._onUp,this),er(),n();var e=this._moved&&this._moving;this._moving=!1,eF._dragging=!1,e&&// Fired when the drag ends.
this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});/*
   * @namespace PolyUtil
   * Various utility functions for polygon geometries.
   *//* @function clipPolygon(points: Point[], bounds: Bounds, round?: Boolean): Point[]
   * Clips the polygon geometry defined by the given `points` by the given bounds (using the [Sutherland-Hodgman algorithm](https://en.wikipedia.org/wiki/Sutherland%E2%80%93Hodgman_algorithm)).
   * Used by Leaflet to only show polygon points that are on the screen or near, increasing
   * performance. Note that polygon points needs different algorithm for clipping
   * than polyline, so there's a separate method for it.
   */function eZ(t,e,i){var n,o,s,a,r,h,l,c,d,u=[1,4,2,8];for(o=0,l=t.length;o<l;o++)t[o]._code=eY(t[o],e);// for each edge (left, bottom, right, top)
for(a=0;a<4;a++){for(o=0,c=u[a],n=[],s=(l=t.length)-1;o<l;s=o++)r=t[o],h=t[s],r._code&c?h._code&c||((d=e$(h,r,c,e,i))._code=eY(d,e),n.push(d)):(h._code&c&&((d=e$(h,r,c,e,i))._code=eY(d,e),n.push(d)),n.push(r));t=n}return t}/* @function polygonCenter(latlngs: LatLng[], crs: CRS): LatLng
   * Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the passed LatLngs (first ring) from a polygon.
   */function ej(t,e){if(!t||0===t.length)throw Error("latlngs not passed");eG(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var i,n,o,s,a,r,h,l,c,d=q([0,0]),u=$(t);u.getNorthWest().distanceTo(u.getSouthWest())*u.getNorthEast().distanceTo(u.getNorthWest())<1700&&(d=eW(t));var p=t.length,f=[];for(i=0;i<p;i++){var m=q(t[i]);f.push(e.project(q([m.lat-d.lat,m.lng-d.lng])))}// polygon centroid algorithm;
for(i=0,r=h=l=0,n=p-1;i<p;n=i++)o=f[i],s=f[n],a=o.y*s.x-s.y*o.x,h+=(o.x+s.x)*a,l+=(o.y+s.y)*a,r+=3*a;c=0===r?f[0]:[h/r,l/r];var g=e.unproject(W(c));return q([g.lat+d.lat,g.lng+d.lng])}/* @function centroid(latlngs: LatLng[]): LatLng
   * Returns the 'center of mass' of the passed LatLngs.
   */function eW(t){for(var e=0,i=0,n=0,o=0;o<t.length;o++){var s=q(t[o]);e+=s.lat,i+=s.lng,n++}return q([e/n,i/n])}/*
   * @namespace LineUtil
   *
   * Various utility functions for polyline points processing, used by Leaflet internally to make polylines lightning-fast.
   */// Simplify polyline with vertex reduction and Douglas-Peucker simplification.
// Improves rendering performance dramatically by lessening the number of points to draw.
// @function simplify(points: Point[], tolerance: Number): Point[]
// Dramatically reduces the number of points in a polyline while retaining
// its shape and returns a new array of simplified points, using the
// [Ramer-Douglas-Peucker algorithm](https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm).
// Used for a huge performance boost when processing/displaying Leaflet polylines for
// each zoom level and also reducing visual noise. tolerance affects the amount of
// simplification (lesser value means higher quality but slower and with more points).
// Also released as a separated micro-library [Simplify.js](https://mourner.github.io/simplify-js/).
function eV(t,e){if(!e||!t.length)return t.slice();var i=e*e;return(// stage 2: Douglas-Peucker simplification
t=// Ramer-Douglas-Peucker simplification, see https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm
function(t,e){var i=t.length,n=new("undefined"!=typeof Uint8Array?Uint8Array:Array)(i);n[0]=n[i-1]=1,function t(e,i,n,o,s){var a,r,h,l=0;for(r=o+1;r<=s-1;r++)(h=eq(e[r],e[o],e[s],!0))>l&&(a=r,l=h);l>n&&(i[a]=1,t(e,i,n,o,a),t(e,i,n,a,s))}(t,n,e,0,i-1);var o,s=[];for(o=0;o<i;o++)n[o]&&s.push(t[o]);return s}(// stage 1: vertex reduction
t=// reduce points that are too close to each other to a single point
function(t,e){for(var i=[t[0]],n=1,o=0,s=t.length;n<s;n++)// square distance (to avoid unnecessary Math.sqrt calls)
(function(t,e){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n})(t[n],t[o])>e&&(i.push(t[n]),o=n);return o<s-1&&i.push(t[s-1]),i}(t,i),i))}// @function pointToSegmentDistance(p: Point, p1: Point, p2: Point): Number
// Returns the distance between point `p` and segment `p1` to `p2`.
function eH(t,e,i){return Math.sqrt(eq(t,e,i,!0))}// @function clipSegment(a: Point, b: Point, bounds: Bounds, useLastCode?: Boolean, round?: Boolean): Point[]|Boolean
// Clips the segment a to b by rectangular bounds with the
// [Cohen-Sutherland algorithm](https://en.wikipedia.org/wiki/Cohen%E2%80%93Sutherland_algorithm)
// (modifying the segment points directly!). Used by Leaflet to only show polyline
// points that are on the screen or near, increasing performance.
function eU(t,e,i,n,o){var s,a,h,l=n?r:eY(t,i),c=eY(e,i);for(// save 2nd code to avoid calculating it on the next segment
r=c;;){// if a,b is inside the clip window (trivial accept)
if(!(l|c))return[t,e];// if a,b is outside the clip window (trivial reject)
if(l&c)return!1;h=eY(a=e$(t,e,// other cases
s=l||c,i,o),i),s===l?(t=a,l=h):(e=a,c=h)}}function e$(t,e,i,n,o){var s,a,r=e.x-t.x,h=e.y-t.y,l=n.min,c=n.max;return 8&i?(s=t.x+r*(c.y-t.y)/h,a=c.y):4&i?(s=t.x+r*(l.y-t.y)/h,a=l.y):2&i?(s=c.x,a=t.y+h*(c.x-t.x)/r):1&i&&(s=l.x,a=t.y+h*(l.x-t.x)/r),new Z(s,a,o)}function eY(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i}// return closest point on segment or distance to that point
function eq(t,e,i,n){var o,s=e.x,a=e.y,r=i.x-s,h=i.y-a,l=r*r+h*h;return l>0&&((o=((t.x-s)*r+(t.y-a)*h)/l)>1?(s=i.x,a=i.y):o>0&&(s+=r*o,a+=h*o)),r=t.x-s,h=t.y-a,n?r*r+h*h:new Z(s,a)}// @function isFlat(latlngs: LatLng[]): Boolean
// Returns true if `latlngs` is a flat array, false is nested.
function eG(t){return!T(t[0])||"object"!=typeof t[0][0]&&void 0!==t[0][0]}function eX(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),eG(t)}/* @function polylineCenter(latlngs: LatLng[], crs: CRS): LatLng
   * Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the passed LatLngs (first ring) from a polyline.
   */function eK(t,e){if(!t||0===t.length)throw Error("latlngs not passed");eG(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var i,n,o,s,a,r,h,l,c=q([0,0]),d=$(t);d.getNorthWest().distanceTo(d.getSouthWest())*d.getNorthEast().distanceTo(d.getNorthWest())<1700&&(c=eW(t));var u=t.length,p=[];for(i=0;i<u;i++){var f=q(t[i]);p.push(e.project(q([f.lat-c.lat,f.lng-c.lng])))}for(i=0,n=0;i<u-1;i++)n+=p[i].distanceTo(p[i+1])/2;// The line is so small in the current view that all points are on the same pixel.
if(0===n)l=p[0];else for(i=0,s=0;i<u-1;i++)if(a=p[i],r=p[i+1],(s+=o=a.distanceTo(r))>n){h=(s-n)/o,l=[r.x-h*(r.x-a.x),r.y-h*(r.y-a.y)];break}var m=e.unproject(W(l));return q([m.lat+c.lat,m.lng+c.lng])}/*
   * @namespace Projection
   * @section
   * Leaflet comes with a set of already defined Projections out of the box:
   *
   * @projection L.Projection.LonLat
   *
   * Equirectangular, or Plate Carree projection — the most simple projection,
   * mostly used by GIS enthusiasts. Directly maps `x` as longitude, and `y` as
   * latitude. Also suitable for flat worlds, e.g. game maps. Used by the
   * `EPSG:4326` and `Simple` CRS.
   */var eJ={project:function(t){return new Z(t.lng,t.lat)},unproject:function(t){return new Y(t.y,t.x)},bounds:new V([-180,-90],[180,90])},eQ={R:6378137,R_MINOR:6356752.314245179,bounds:new V([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(t){var e=Math.PI/180,i=this.R,n=t.lat*e,o=this.R_MINOR/i,s=Math.sqrt(1-o*o),a=s*Math.sin(n);return n=-i*Math.log(Math.max(Math.tan(Math.PI/4-n/2)/Math.pow((1-a)/(1+a),s/2),1e-10)),new Z(t.lng*e*i,n)},unproject:function(t){for(var e,i=180/Math.PI,n=this.R,o=this.R_MINOR/n,s=Math.sqrt(1-o*o),a=Math.exp(-t.y/n),r=Math.PI/2-2*Math.atan(a),h=0,l=.1;h<15&&Math.abs(l)>1e-7;h++)l=Math.PI/2-2*Math.atan(a*(e=Math.pow((1-(e=s*Math.sin(r)))/(1+e),s/2)))-r,r+=l;return new Y(r*i,t.x*i/n)}},e0=e({},X,{code:"EPSG:3395",projection:eQ,transformation:Q(d=.5/(Math.PI*eQ.R),.5,-d,.5)}),e1=e({},X,{code:"EPSG:4326",projection:eJ,transformation:Q(1/180,1,-1/180,.5)}),e2=e({},G,{projection:eJ,transformation:Q(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var i=e.lng-t.lng,n=e.lat-t.lat;return Math.sqrt(i*i+n*n)},infinite:!0});G.Earth=X,G.EPSG3395=e0,G.EPSG3857=tt,G.EPSG900913=te,G.EPSG4326=e1,G.Simple=e2;/*
   * @class Layer
   * @inherits Evented
   * @aka L.Layer
   * @aka ILayer
   *
   * A set of methods from the Layer base class that all Leaflet layers use.
   * Inherits all methods, options and events from `L.Evented`.
   *
   * @example
   *
   * ```js
   * var layer = L.marker(latlng).addTo(map);
   * layer.addTo(map);
   * layer.remove();
   * ```
   *
   * @event add: Event
   * Fired after the layer is added to a map
   *
   * @event remove: Event
   * Fired after the layer is removed from a map
   */var e5=F.extend({// Classes extending `L.Layer` will inherit the following options:
options:{// @option pane: String = 'overlayPane'
// By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
pane:"overlayPane",// @option attribution: String = null
// String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
attribution:null,bubblingMouseEvents:!0},/* @section
  	 * Classes extending `L.Layer` will inherit the following methods:
  	 *
  	 * @method addTo(map: Map|LayerGroup): this
  	 * Adds the layer to the given map or layer group.
  	 */addTo:function(t){return t.addLayer(this),this},// @method remove: this
// Removes the layer from the map it is currently active on.
remove:function(){return this.removeFrom(this._map||this._mapToAdd)},// @method removeFrom(map: Map): this
// Removes the layer from the given map
//
// @alternative
// @method removeFrom(group: LayerGroup): this
// Removes the layer from the given `LayerGroup`
removeFrom:function(t){return t&&t.removeLayer(this),this},// @method getPane(name? : String): HTMLElement
// Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[m(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[m(t)],this},// @method getAttribution: String
// Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e=t.target;// check in case layer gets added and then removed before the map is ready
if(e.hasLayer(this)){if(this._map=e,this._zoomAnimated=e._zoomAnimated,this.getEvents){var i=this.getEvents();e.on(i,this),this.once("remove",function(){e.off(i,this)},this)}this.onAdd(e),this.fire("add"),e.fire("layeradd",{layer:this})}}});/* @section Extension methods
   * @uninheritable
   *
   * Every layer should extend from `L.Layer` and (re-)implement the following methods.
   *
   * @method onAdd(map: Map): this
   * Should contain code that creates DOM elements for the layer, adds them to `map panes` where they should belong and puts listeners on relevant map events. Called on [`map.addLayer(layer)`](#map-addlayer).
   *
   * @method onRemove(map: Map): this
   * Should contain all clean up code that removes the layer's elements from the DOM and removes listeners previously added in [`onAdd`](#layer-onadd). Called on [`map.removeLayer(layer)`](#map-removelayer).
   *
   * @method getEvents(): Object
   * This optional method should return an object like `{ viewreset: this._reset }` for [`addEventListener`](#evented-addeventlistener). The event handlers in this object will be automatically added and removed from the map with your layer.
   *
   * @method getAttribution(): String
   * This optional method should return a string containing HTML to be shown on the `Attribution control` whenever the layer is visible.
   *
   * @method beforeAdd(map: Map): this
   * Optional method. Called on [`map.addLayer(layer)`](#map-addlayer), before the layer is added to the map, before events are initialized, without waiting until the map is in a usable state. Use for early initialization only.
   *//* @namespace Map
   * @section Layer events
   *
   * @event layeradd: LayerEvent
   * Fired when a new layer is added to the map.
   *
   * @event layerremove: LayerEvent
   * Fired when some layer is removed from the map
   *
   * @section Methods for Layers and Controls
   */eE.include({// @method addLayer(layer: Layer): this
// Adds the given layer to the map
addLayer:function(t){if(!t._layerAdd)throw Error("The provided object is not a Layer.");var e=m(t);return this._layers[e]||(this._layers[e]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t)),this},// @method removeLayer(layer: Layer): this
// Removes the given layer from the map.
removeLayer:function(t){var e=m(t);return this._layers[e]&&(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null),this},// @method hasLayer(layer: Layer): Boolean
// Returns `true` if the given layer is currently added to the map
hasLayer:function(t){return m(t) in this._layers},/* @method eachLayer(fn: Function, context?: Object): this
  	 * Iterates over the layers of the map, optionally specifying context of the iterator function.
  	 * ```
  	 * map.eachLayer(function(layer){
  	 *     layer.bindPopup('Hello');
  	 * });
  	 * ```
  	 */eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},_addLayers:function(t){t=t?T(t)?t:[t]:[];for(var e=0,i=t.length;e<i;e++)this.addLayer(t[e])},_addZoomLimit:function(t){isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[m(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var e=m(t);this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,e=-1/0,i=this._getZoomSpan();for(var n in this._zoomBoundLayers){var o=this._zoomBoundLayers[n].options;t=void 0===o.minZoom?t:Math.min(t,o.minZoom),e=void 0===o.maxZoom?e:Math.max(e,o.maxZoom)}this._layersMaxZoom=e===-1/0?void 0:e,this._layersMinZoom=t===1/0?void 0:t,i!==this._getZoomSpan()&&this.fire("zoomlevelschange"),void 0===this.options.maxZoom&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),void 0===this.options.minZoom&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});/*
   * @class LayerGroup
   * @aka L.LayerGroup
   * @inherits Interactive layer
   *
   * Used to group several layers and handle them as one. If you add it to the map,
   * any layers added or removed from the group will be added/removed on the map as
   * well. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * L.layerGroup([marker1, marker2])
   * 	.addLayer(polyline)
   * 	.addTo(map);
   * ```
   */var e3=e5.extend({initialize:function(t,e){var i,n;if(w(this,e),this._layers={},t)for(i=0,n=t.length;i<n;i++)this.addLayer(t[i])},// @method addLayer(layer: Layer): this
// Adds the given layer to the group.
addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},// @method removeLayer(layer: Layer): this
// Removes the given layer from the group.
// @alternative
// @method removeLayer(id: Number): this
// Removes the layer with the given internal ID from the group.
removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},// @method hasLayer(layer: Layer): Boolean
// Returns `true` if the given layer is currently added to the group.
// @alternative
// @method hasLayer(id: Number): Boolean
// Returns `true` if the given internal ID is currently added to the group.
hasLayer:function(t){return("number"==typeof t?t:this.getLayerId(t))in this._layers},// @method clearLayers(): this
// Removes all the layers from the group.
clearLayers:function(){return this.eachLayer(this.removeLayer,this)},// @method invoke(methodName: String, …): this
// Calls `methodName` on every layer contained in this group, passing any
// additional parameters. Has no effect if the layers contained do not
// implement `methodName`.
invoke:function(t){var e,i,n=Array.prototype.slice.call(arguments,1);for(e in this._layers)(i=this._layers[e])[t]&&i[t].apply(i,n);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},// @method eachLayer(fn: Function, context?: Object): this
// Iterates over the layers of the group, optionally specifying context of the iterator function.
// ```js
// group.eachLayer(function (layer) {
// 	layer.bindPopup('Hello');
// });
// ```
eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},// @method getLayer(id: Number): Layer
// Returns the layer with the given internal ID.
getLayer:function(t){return this._layers[t]},// @method getLayers(): Layer[]
// Returns an array of all the layers added to the group.
getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},// @method setZIndex(zIndex: Number): this
// Calls `setZIndex` on every layer contained in this group, passing the z-index.
setZIndex:function(t){return this.invoke("setZIndex",t)},// @method getLayerId(layer: Layer): Number
// Returns the internal ID for a layer
getLayerId:function(t){return m(t)}}),e8=e3.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),e3.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),e3.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},// @method setStyle(style: Path options): this
// Sets the given path options to each layer of the group that has a `setStyle` method.
setStyle:function(t){return this.invoke("setStyle",t)},// @method bringToFront(): this
// Brings the layer group to the top of all other layers
bringToFront:function(){return this.invoke("bringToFront")},// @method bringToBack(): this
// Brings the layer group to the back of all other layers
bringToBack:function(){return this.invoke("bringToBack")},// @method getBounds(): LatLngBounds
// Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
getBounds:function(){var t=new U;for(var e in this._layers){var i=this._layers[e];t.extend(i.getBounds?i.getBounds():i.getLatLng())}return t}}),e4=B.extend({/* @section
  	 * @aka Icon options
  	 *
  	 * @option iconUrl: String = null
  	 * **(required)** The URL to the icon image (absolute or relative to your script path).
  	 *
  	 * @option iconRetinaUrl: String = null
  	 * The URL to a retina sized version of the icon image (absolute or relative to your
  	 * script path). Used for Retina screen devices.
  	 *
  	 * @option iconSize: Point = null
  	 * Size of the icon image in pixels.
  	 *
  	 * @option iconAnchor: Point = null
  	 * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
  	 * will be aligned so that this point is at the marker's geographical location. Centered
  	 * by default if size is specified, also can be set in CSS with negative margins.
  	 *
  	 * @option popupAnchor: Point = [0, 0]
  	 * The coordinates of the point from which popups will "open", relative to the icon anchor.
  	 *
  	 * @option tooltipAnchor: Point = [0, 0]
  	 * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
  	 *
  	 * @option shadowUrl: String = null
  	 * The URL to the icon shadow image. If not specified, no shadow image will be created.
  	 *
  	 * @option shadowRetinaUrl: String = null
  	 *
  	 * @option shadowSize: Point = null
  	 * Size of the shadow image in pixels.
  	 *
  	 * @option shadowAnchor: Point = null
  	 * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
  	 * as iconAnchor if not specified).
  	 *
  	 * @option className: String = ''
  	 * A custom class name to assign to both icon and shadow images. Empty by default.
  	 */options:{popupAnchor:[0,0],tooltipAnchor:[0,0],// @option crossOrigin: Boolean|String = false
// Whether the crossOrigin attribute will be added to the tiles.
// If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
crossOrigin:!1},initialize:function(t){w(this,t)},// @method createIcon(oldIcon?: HTMLElement): HTMLElement
// Called internally when the icon has to be shown, returns a `<img>` HTML element
// styled according to the options.
createIcon:function(t){return this._createIcon("icon",t)},// @method createShadow(oldIcon?: HTMLElement): HTMLElement
// As `createIcon`, but for the shadow beneath it.
createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if("icon"===t)throw Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(i,e&&"IMG"===e.tagName?e:null);return this._setIconStyles(n,t),(this.options.crossOrigin||""===this.options.crossOrigin)&&(n.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),n},_setIconStyles:function(t,e){var i=this.options,n=i[e+"Size"];"number"==typeof n&&(n=[n,n]);var o=W(n),s=W("shadow"===e&&i.shadowAnchor||i.iconAnchor||o&&o.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(i.className||""),s&&(t.style.marginLeft=-s.x+"px",t.style.marginTop=-s.y+"px"),o&&(t.style.width=o.x+"px",t.style.height=o.y+"px")},_createImg:function(t,e){return(e=e||document.createElement("img")).src=t,e},_getIconUrl:function(t){return tR.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}}),e6=e4.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){// @option imagePath: String
// `Icon.Default` will try to auto-detect the location of the
// blue icon images. If you are placing these images in a non-standard
// way, set this option to point to the right path.
return"string"!=typeof e6.imagePath&&(e6.imagePath=this._detectIconPath()),(this.options.imagePath||e6.imagePath)+e4.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){var e=function(t,e,i){var n=e.exec(t);return n&&n[i]};return(t=e(t,/^url\((['"])?(.+)\1\)$/,2))&&e(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=t0("div","leaflet-default-icon-path",document.body),e=tQ(t,"background-image")||tQ(t,"backgroundImage");if(document.body.removeChild(t),e=this._stripUrl(e))return e;var i=document.querySelector('link[href$="leaflet.css"]');return i?i.href.substring(0,i.href.length-11-1):""}}),e9=eB.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new eF(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),t4(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&t6(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,i=e._map,n=this._marker.options.autoPanSpeed,o=this._marker.options.autoPanPadding,s=eo(e._icon),a=i.getPixelBounds(),r=i.getPixelOrigin(),h=H(a.min._subtract(r).add(o),a.max._subtract(r).subtract(o));if(!h.contains(s)){// Compute incremental movement
var l=W((Math.max(h.max.x,s.x)-h.max.x)/(a.max.x-h.max.x)-(Math.min(h.min.x,s.x)-h.min.x)/(a.min.x-h.min.x),(Math.max(h.max.y,s.y)-h.max.y)/(a.max.y-h.max.y)-(Math.min(h.min.y,s.y)-h.min.y)/(a.min.y-h.min.y)).multiplyBy(n);i.panBy(l,{animate:!1}),this._draggable._newPos._add(l),this._draggable._startPos._add(l),en(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=I(this._adjustPan.bind(this,t))}},_onDragStart:function(){// @section Dragging events
// @event dragstart: Event
// Fired when the user starts dragging the marker.
// @event movestart: Event
// Fired when the marker starts moving (because of dragging).
this._oldLatLng=this._marker.getLatLng(),// When using ES6 imports it could not be set when `Popup` was not imported as well
this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(R(this._panRequest),this._panRequest=I(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,i=e._shadow,n=eo(e._icon),o=e._map.layerPointToLatLng(n);i&&en(i,n),e._latlng=o,t.latlng=o,t.oldLatLng=this._oldLatLng,// @event drag: Event
// Fired repeatedly while the user drags the marker.
e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){// @event dragend: DragEndEvent
// Fired when the user stops dragging the marker.
R(this._panRequest),// @event moveend: Event
// Fired when the marker stops moving (because of dragging).
delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),e7=e5.extend({// @section
// @aka Marker options
options:{// @option icon: Icon = *
// Icon instance to use for rendering the marker.
// See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
// If not specified, a common instance of `L.Icon.Default` is used.
icon:new e6,// Option inherited from "Interactive layer" abstract class
interactive:!0,// @option keyboard: Boolean = true
// Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
keyboard:!0,// @option title: String = ''
// Text for the browser tooltip that appear on marker hover (no tooltip by default).
// [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
title:"",// @option alt: String = 'Marker'
// Text for the `alt` attribute of the icon image.
// [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
alt:"Marker",// @option zIndexOffset: Number = 0
// By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
zIndexOffset:0,// @option opacity: Number = 1.0
// The opacity of the marker.
opacity:1,// @option riseOnHover: Boolean = false
// If `true`, the marker will get on top of others when you hover the mouse over it.
riseOnHover:!1,// @option riseOffset: Number = 250
// The z-index offset used for the `riseOnHover` feature.
riseOffset:250,// @option pane: String = 'markerPane'
// `Map pane` where the markers icon will be added.
pane:"markerPane",// @option shadowPane: String = 'shadowPane'
// `Map pane` where the markers shadow will be added.
shadowPane:"shadowPane",// @option bubblingMouseEvents: Boolean = false
// When `true`, a mouse event on this marker will trigger the same event on the map
// (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
bubblingMouseEvents:!1,// @option autoPanOnFocus: Boolean = true
// When `true`, the map will pan whenever the marker is focused (via
// e.g. pressing `tab` on the keyboard) to ensure the marker is
// visible within the map's bounds
autoPanOnFocus:!0,// @section Draggable marker options
// @option draggable: Boolean = false
// Whether the marker is draggable with mouse/touch or not.
draggable:!1,// @option autoPan: Boolean = false
// Whether to pan the map when dragging this marker near its edge or not.
autoPan:!1,// @option autoPanPadding: Point = Point(50, 50)
// Distance (in pixels to the left/right and to the top/bottom) of the
// map edge to start panning the map.
autoPanPadding:[50,50],// @option autoPanSpeed: Number = 10
// Number of pixels the map should pan by.
autoPanSpeed:10},/* @section
  	 *
  	 * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
  	 */initialize:function(t,e){w(this,e),this._latlng=q(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},// @method getLatLng: LatLng
// Returns the current geographical position of the marker.
getLatLng:function(){return this._latlng},// @method setLatLng(latlng: LatLng): this
// Changes the marker position to the given point.
setLatLng:function(t){var e=this._latlng;// @event move: Event
// Fired when the marker is moved via [`setLatLng`](#marker-setlatlng) or by [dragging](#marker-dragging). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.
return this._latlng=q(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},// @method setZIndexOffset(offset: Number): this
// Changes the [zIndex offset](#marker-zindexoffset) of the marker.
setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},// @method getIcon: Icon
// Returns the current icon used by the marker
getIcon:function(){return this.options.icon},// @method setIcon(icon: Icon): this
// Changes the marker icon.
setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),i=t.icon.createIcon(this._icon),n=!1;i!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(i.title=t.title),"IMG"===i.tagName&&(i.alt=t.alt||"")),t4(i,e),t.keyboard&&(i.tabIndex="0",i.setAttribute("role","button")),this._icon=i,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&eu(i,"focus",this._panOnFocus,this);var o=t.icon.createShadow(this._shadow),s=!1;o!==this._shadow&&(this._removeShadow(),s=!0),o&&(t4(o,e),o.alt=""),this._shadow=o,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),o&&s&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ef(this._icon,"focus",this._panOnFocus,this),t1(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&t1(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&en(this._icon,t),this._shadow&&en(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.interactive&&(t4(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),e9)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new e9(this),t&&this.dragging.enable()}},// @method setOpacity(opacity: Number): this
// Changes the opacity of the marker.
setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&et(this._icon,t),this._shadow&&et(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t=this._map;if(t){var e=this.options.icon.options,i=e.iconSize?W(e.iconSize):W(0,0),n=e.iconAnchor?W(e.iconAnchor):W(0,0);t.panInside(this._latlng,{paddingTopLeft:n,paddingBottomRight:i.subtract(n)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}}),it=e5.extend({// @section
// @aka Path options
options:{// @option stroke: Boolean = true
// Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
stroke:!0,// @option color: String = '#3388ff'
// Stroke color
color:"#3388ff",// @option weight: Number = 3
// Stroke width in pixels
weight:3,// @option opacity: Number = 1.0
// Stroke opacity
opacity:1,// @option lineCap: String= 'round'
// A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
lineCap:"round",// @option lineJoin: String = 'round'
// A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
lineJoin:"round",// @option dashArray: String = null
// A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
dashArray:null,// @option dashOffset: String = null
// A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
dashOffset:null,// @option fill: Boolean = depends
// Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
fill:!1,// @option fillColor: String = *
// Fill color. Defaults to the value of the [`color`](#path-color) option
fillColor:null,// @option fillOpacity: Number = 0.2
// Fill opacity.
fillOpacity:.2,// @option fillRule: String = 'evenodd'
// A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
fillRule:"evenodd",// className: '',
// Option inherited from "Interactive layer" abstract class
interactive:!0,// @option bubblingMouseEvents: Boolean = true
// When `true`, a mouse event on this path will trigger the same event on the map
// (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
bubblingMouseEvents:!0},beforeAdd:function(t){// Renderer is set here because we need to call renderer.getEvents
// before this.getEvents.
this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},// @method redraw(): this
// Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
redraw:function(){return this._map&&this._renderer._updatePath(this),this},// @method setStyle(style: Path options): this
// Changes the appearance of a Path based on the options in the `Path options` object.
setStyle:function(t){return w(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},// @method bringToFront(): this
// Brings the layer to the top of all path layers.
bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},// @method bringToBack(): this
// Brings the layer to the bottom of all path layers.
bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){// defined in child classes
this._project(),this._update()},_clickTolerance:function(){// used when doing hit detection for Canvas layers
return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),ie=it.extend({// @section
// @aka CircleMarker options
options:{fill:!0,// @option radius: Number = 10
// Radius of the circle marker, in pixels
radius:10},initialize:function(t,e){w(this,e),this._latlng=q(t),this._radius=this.options.radius},// @method setLatLng(latLng: LatLng): this
// Sets the position of a circle marker to a new location.
setLatLng:function(t){var e=this._latlng;// @event move: Event
// Fired when the marker is moved via [`setLatLng`](#circlemarker-setlatlng). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.
return this._latlng=q(t),this.redraw(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},// @method getLatLng(): LatLng
// Returns the current geographical position of the circle marker
getLatLng:function(){return this._latlng},// @method setRadius(radius: Number): this
// Sets the radius of a circle marker. Units are in pixels.
setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},// @method getRadius(): Number
// Returns the current radius of the circle
getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return it.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,i=this._clickTolerance(),n=[t+i,e+i];this._pxBounds=new V(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},// Needed by the `Canvas` renderer for interactivity
_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}}),ii=ie.extend({initialize:function(t,i,n){if("number"==typeof i&&(i=e({},n,{radius:i})),w(this,i),this._latlng=q(t),isNaN(this.options.radius))throw Error("Circle radius cannot be NaN");// @section
// @aka Circle options
// @option radius: Number; Radius of the circle, in meters.
this._mRadius=this.options.radius},// @method setRadius(radius: Number): this
// Sets the radius of a circle. Units are in meters.
setRadius:function(t){return this._mRadius=t,this.redraw()},// @method getRadius(): Number
// Returns the current radius of a circle. Units are in meters.
getRadius:function(){return this._mRadius},// @method getBounds(): LatLngBounds
// Returns the `LatLngBounds` of the path.
getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new U(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:it.prototype.setStyle,_project:function(){var t=this._latlng.lng,e=this._latlng.lat,i=this._map,n=i.options.crs;if(n.distance===X.distance){var o=Math.PI/180,s=this._mRadius/X.R/o,a=i.project([e+s,t]),r=i.project([e-s,t]),h=a.add(r).divideBy(2),l=i.unproject(h).lat,c=Math.acos((Math.cos(s*o)-Math.sin(e*o)*Math.sin(l*o))/(Math.cos(e*o)*Math.cos(l*o)))/o;(isNaN(c)||0===c)&&(c=s/Math.cos(Math.PI/180*e)),this._point=h.subtract(i.getPixelOrigin()),this._radius=isNaN(c)?0:h.x-i.project([l,t-c]).x,this._radiusY=h.y-a.y}else{var d=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]));this._point=i.latLngToLayerPoint(this._latlng),this._radius=this._point.x-i.latLngToLayerPoint(d).x}this._updateBounds()}}),io=it.extend({// @section
// @aka Polyline options
options:{// @option smoothFactor: Number = 1.0
// How much to simplify the polyline on each zoom level. More means
// better performance and smoother look, and less means more accurate representation.
smoothFactor:1,// @option noClip: Boolean = false
// Disable polyline clipping.
noClip:!1},initialize:function(t,e){w(this,e),this._setLatLngs(t)},// @method getLatLngs(): LatLng[]
// Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
getLatLngs:function(){return this._latlngs},// @method setLatLngs(latlngs: LatLng[]): this
// Replaces all the points in the polyline with the given array of geographical points.
setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},// @method isEmpty(): Boolean
// Returns `true` if the Polyline has no LatLngs.
isEmpty:function(){return!this._latlngs.length},// @method closestLayerPoint(p: Point): Point
// Returns the point closest to `p` on the Polyline.
closestLayerPoint:function(t){for(var e,i,n=1/0,o=null,s=eq,a=0,r=this._parts.length;a<r;a++)for(var h=this._parts[a],l=1,c=h.length;l<c;l++){var d=s(t,e=h[l-1],i=h[l],!0);d<n&&(n=d,o=s(t,e,i))}return o&&(o.distance=Math.sqrt(n)),o},// @method getCenter(): LatLng
// Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
getCenter:function(){// throws error when not yet added to map as this center calculation requires projected coordinates
if(!this._map)throw Error("Must add layer to map before using getCenter()");return eK(this._defaultShape(),this._map.options.crs)},// @method getBounds(): LatLngBounds
// Returns the `LatLngBounds` of the path.
getBounds:function(){return this._bounds},// @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
// Adds a given point to the polyline. By default, adds to the first ring of
// the polyline in case of a multi-polyline, but can be overridden by passing
// a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
addLatLng:function(t,e){return e=e||this._defaultShape(),t=q(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new U,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return eG(this._latlngs)?this._latlngs:this._latlngs[0]},// recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
_convertLatLngs:function(t){for(var e=[],i=eG(t),n=0,o=t.length;n<o;n++)i?(e[n]=q(t[n]),this._bounds.extend(e[n])):e[n]=this._convertLatLngs(t[n]);return e},_project:function(){var t=new V;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),e=new Z(t,t);this._rawPxBounds&&(this._pxBounds=new V([this._rawPxBounds.min.subtract(e),this._rawPxBounds.max.add(e)]))},// recursively turns latlngs into a set of rings with projected coordinates
_projectLatlngs:function(t,e,i){var n,o,s=t[0]instanceof Y,a=t.length;if(s){for(n=0,o=[];n<a;n++)o[n]=this._map.latLngToLayerPoint(t[n]),i.extend(o[n]);e.push(o)}else for(n=0;n<a;n++)this._projectLatlngs(t[n],e,i)},// clip polyline by renderer bounds so that we have less to render for performance
_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t)){if(this.options.noClip){this._parts=this._rings;return}var e,i,n,o,s,a,r,h=this._parts;for(e=0,n=0,o=this._rings.length;e<o;e++)for(i=0,s=(r=this._rings[e]).length;i<s-1;i++)(a=eU(r[i],r[i+1],t,i,!0))&&(h[n]=h[n]||[],h[n].push(a[0]),(a[1]!==r[i+1]||i===s-2)&&(h[n].push(a[1]),n++))}},// simplify each clipped part of the polyline for performance
_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,i=0,n=t.length;i<n;i++)t[i]=eV(t[i],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},// Needed by the `Canvas` renderer for interactivity
_containsPoint:function(t,e){var i,n,o,s,a,r,h=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;// hit detection for polylines
for(i=0,s=this._parts.length;i<s;i++)for(n=0,o=(a=(r=this._parts[i]).length)-1;n<a;o=n++)if((e||0!==n)&&eH(t,r[o],r[n])<=h)return!0;return!1}});// Retrocompat. Allow plugins to support Leaflet versions before and after 1.1.
io._flat=eX;/*
   * @class Polygon
   * @aka L.Polygon
   * @inherits Polyline
   *
   * A class for drawing polygon overlays on a map. Extends `Polyline`.
   *
   * Note that points you pass when creating a polygon shouldn't have an additional last point equal to the first one — it's better to filter out such points.
   *
   *
   * @example
   *
   * ```js
   * // create a red polygon from an array of LatLng points
   * var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];
   *
   * var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
   *
   * // zoom the map to the polygon
   * map.fitBounds(polygon.getBounds());
   * ```
   *
   * You can also pass an array of arrays of latlngs, with the first array representing the outer shape and the other arrays representing holes in the outer shape:
   *
   * ```js
   * var latlngs = [
   *   [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
   *   [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
   * ];
   * ```
   *
   * Additionally, you can pass a multi-dimensional array to represent a MultiPolygon shape.
   *
   * ```js
   * var latlngs = [
   *   [ // first polygon
   *     [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
   *     [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
   *   ],
   *   [ // second polygon
   *     [[41, -111.03],[45, -111.04],[45, -104.05],[41, -104.05]]
   *   ]
   * ];
   * ```
   */var is=io.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},// @method getCenter(): LatLng
// Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the Polygon.
getCenter:function(){// throws error when not yet added to map as this center calculation requires projected coordinates
if(!this._map)throw Error("Must add layer to map before using getCenter()");return ej(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(t){var e=io.prototype._convertLatLngs.call(this,t),i=e.length;return i>=2&&e[0]instanceof Y&&e[0].equals(e[i-1])&&e.pop(),e},_setLatLngs:function(t){io.prototype._setLatLngs.call(this,t),eG(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return eG(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){// polygons need a different clipping algorithm so we redefine that
var t=this._renderer._bounds,e=this.options.weight,i=new Z(e,e);if(// increase clip padding by stroke width to avoid stroke on clip edges
t=new V(t.min.subtract(i),t.max.add(i)),this._parts=[],this._pxBounds&&this._pxBounds.intersects(t)){if(this.options.noClip){this._parts=this._rings;return}for(var n,o=0,s=this._rings.length;o<s;o++)(n=eZ(this._rings[o],t,!0)).length&&this._parts.push(n)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},// Needed by the `Canvas` renderer for interactivity
_containsPoint:function(t){var e,i,n,o,s,a,r,h,l=!1;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;// ray casting algorithm for detecting if point is in polygon
for(o=0,r=this._parts.length;o<r;o++)for(s=0,a=(h=(e=this._parts[o]).length)-1;s<h;a=s++)i=e[s],n=e[a],i.y>t.y!=n.y>t.y&&t.x<(n.x-i.x)*(t.y-i.y)/(n.y-i.y)+i.x&&(l=!l);// also check if it's on polygon stroke
return l||io.prototype._containsPoint.call(this,t,!0)}}),ia=e8.extend({/* @section
  	 * @aka GeoJSON options
  	 *
  	 * @option pointToLayer: Function = *
  	 * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
  	 * called when data is added, passing the GeoJSON point feature and its `LatLng`.
  	 * The default is to spawn a default `Marker`:
  	 * ```js
  	 * function(geoJsonPoint, latlng) {
  	 * 	return L.marker(latlng);
  	 * }
  	 * ```
  	 *
  	 * @option style: Function = *
  	 * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
  	 * called internally when data is added.
  	 * The default value is to not override any defaults:
  	 * ```js
  	 * function (geoJsonFeature) {
  	 * 	return {}
  	 * }
  	 * ```
  	 *
  	 * @option onEachFeature: Function = *
  	 * A `Function` that will be called once for each created `Feature`, after it has
  	 * been created and styled. Useful for attaching events and popups to features.
  	 * The default is to do nothing with the newly created layers:
  	 * ```js
  	 * function (feature, layer) {}
  	 * ```
  	 *
  	 * @option filter: Function = *
  	 * A `Function` that will be used to decide whether to include a feature or not.
  	 * The default is to include all features:
  	 * ```js
  	 * function (geoJsonFeature) {
  	 * 	return true;
  	 * }
  	 * ```
  	 * Note: dynamically changing the `filter` option will have effect only on newly
  	 * added data. It will _not_ re-evaluate already included features.
  	 *
  	 * @option coordsToLatLng: Function = *
  	 * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
  	 * The default is the `coordsToLatLng` static method.
  	 *
  	 * @option markersInheritOptions: Boolean = false
  	 * Whether default Markers for "Point" type Features inherit from group options.
  	 */initialize:function(t,e){w(this,e),this._layers={},t&&this.addData(t)},// @method addData( <GeoJSON> data ): this
// Adds a GeoJSON object to the layer.
addData:function(t){var e,i,n,o=T(t)?t:t.features;if(o){for(e=0,i=o.length;e<i;e++)(// only add this if geometry or geometries are set and not null
(n=o[e]).geometries||n.geometry||n.features||n.coordinates)&&this.addData(n);return this}var s=this.options;if(s.filter&&!s.filter(t))return this;var a=ir(t,s);return a?(a.feature=im(t),a.defaultOptions=a.options,this.resetStyle(a),s.onEachFeature&&s.onEachFeature(t,a),this.addLayer(a)):this},// @method resetStyle( <Path> layer? ): this
// Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
// If `layer` is omitted, the style of all features in the current layer is reset.
resetStyle:function(t){return void 0===t?this.eachLayer(this.resetStyle,this):(// reset any custom styles
t.options=e({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},// @method setStyle( <Function> style ): this
// Changes styles of GeoJSON vector layers with the given style function.
setStyle:function(t){return this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){t.setStyle&&("function"==typeof e&&(e=e(t.feature)),t.setStyle(e))}});// @section
// There are several static functions which can be called without instantiating L.GeoJSON:
// @function geometryToLayer(featureData: Object, options?: GeoJSON options): Layer
// Creates a `Layer` from a given GeoJSON feature. Can use a custom
// [`pointToLayer`](#geojson-pointtolayer) and/or [`coordsToLatLng`](#geojson-coordstolatlng)
// functions if provided as options.
function ir(t,e){var i,n,o,s,a="Feature"===t.type?t.geometry:t,r=a?a.coordinates:null,h=[],l=e&&e.pointToLayer,c=e&&e.coordsToLatLng||il;if(!r&&!a)return null;switch(a.type){case"Point":return ih(l,t,i=c(r),e);case"MultiPoint":for(o=0,s=r.length;o<s;o++)i=c(r[o]),h.push(ih(l,t,i,e));return new e8(h);case"LineString":case"MultiLineString":return n=ic(r,"LineString"===a.type?0:1,c),new io(n,e);case"Polygon":case"MultiPolygon":return n=ic(r,"Polygon"===a.type?1:2,c),new is(n,e);case"GeometryCollection":for(o=0,s=a.geometries.length;o<s;o++){var d=ir({geometry:a.geometries[o],type:"Feature",properties:t.properties},e);d&&h.push(d)}return new e8(h);case"FeatureCollection":for(o=0,s=a.features.length;o<s;o++){var u=ir(a.features[o],e);u&&h.push(u)}return new e8(h);default:throw Error("Invalid GeoJSON object.")}}function ih(t,e,i,n){return t?t(e,i):new e7(i,n&&n.markersInheritOptions&&n)}// @function coordsToLatLng(coords: Array): LatLng
// Creates a `LatLng` object from an array of 2 numbers (longitude, latitude)
// or 3 numbers (longitude, latitude, altitude) used in GeoJSON for points.
function il(t){return new Y(t[1],t[0],t[2])}// @function coordsToLatLngs(coords: Array, levelsDeep?: Number, coordsToLatLng?: Function): Array
// Creates a multidimensional array of `LatLng`s from a GeoJSON coordinates array.
// `levelsDeep` specifies the nesting level (0 is for an array of points, 1 for an array of arrays of points, etc., 0 by default).
// Can use a custom [`coordsToLatLng`](#geojson-coordstolatlng) function.
function ic(t,e,i){for(var n=[],o=0,s=t.length;o<s;o++)n.push(e?ic(t[o],e-1,i):(i||il)(t[o]));return n}// @function latLngToCoords(latlng: LatLng, precision?: Number|false): Array
// Reverse of [`coordsToLatLng`](#geojson-coordstolatlng)
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function.
function id(t,e){return void 0!==(t=q(t)).alt?[y(t.lng,e),y(t.lat,e),y(t.alt,e)]:[y(t.lng,e),y(t.lat,e)]}// @function latLngsToCoords(latlngs: Array, levelsDeep?: Number, closed?: Boolean, precision?: Number|false): Array
// Reverse of [`coordsToLatLngs`](#geojson-coordstolatlngs)
// `closed` determines whether the first point should be appended to the end of the array to close the feature, only used when `levelsDeep` is 0. False by default.
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function.
function iu(t,e,i,n){for(var o=[],s=0,a=t.length;s<a;s++)o.push(e?iu(t[s],eG(t[s])?0:e-1,i,n):id(t[s],n));return!e&&i&&o.length>0&&o.push(o[0].slice()),o}function ip(t,i){return t.feature?e({},t.feature,{geometry:i}):im(i)}// @function asFeature(geojson: Object): Object
// Normalize GeoJSON geometries/features into GeoJSON features.
function im(t){return"Feature"===t.type||"FeatureCollection"===t.type?t:{type:"Feature",properties:{},geometry:t}}var ig={toGeoJSON:function(t){return ip(this,{type:"Point",coordinates:id(this.getLatLng(),t)})}};// @namespace GeoJSON
// @factory L.geoJSON(geojson?: Object, options?: GeoJSON options)
// Creates a GeoJSON layer. Optionally accepts an object in
// [GeoJSON format](https://tools.ietf.org/html/rfc7946) to display on the map
// (you can alternatively add it later with `addData` method) and an `options` object.
function i_(t,e){return new ia(t,e)}// @namespace Marker
// @section Other methods
// @method toGeoJSON(precision?: Number|false): Object
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
// Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the marker (as a GeoJSON `Point` Feature).
e7.include(ig),// @namespace CircleMarker
// @method toGeoJSON(precision?: Number|false): Object
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
// Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the circle marker (as a GeoJSON `Point` Feature).
ii.include(ig),ie.include(ig),// @namespace Polyline
// @method toGeoJSON(precision?: Number|false): Object
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
// Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the polyline (as a GeoJSON `LineString` or `MultiLineString` Feature).
io.include({toGeoJSON:function(t){var e=!eG(this._latlngs),i=iu(this._latlngs,e?1:0,!1,t);return ip(this,{type:(e?"Multi":"")+"LineString",coordinates:i})}}),// @namespace Polygon
// @method toGeoJSON(precision?: Number|false): Object
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
// Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the polygon (as a GeoJSON `Polygon` or `MultiPolygon` Feature).
is.include({toGeoJSON:function(t){var e=!eG(this._latlngs),i=e&&!eG(this._latlngs[0]),n=iu(this._latlngs,i?2:e?1:0,!0,t);return e||(n=[n]),ip(this,{type:(i?"Multi":"")+"Polygon",coordinates:n})}}),// @namespace LayerGroup
e3.include({toMultiPoint:function(t){var e=[];return this.eachLayer(function(i){e.push(i.toGeoJSON(t).geometry.coordinates)}),ip(this,{type:"MultiPoint",coordinates:e})},// @method toGeoJSON(precision?: Number|false): Object
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
// Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
toGeoJSON:function(t){var e=this.feature&&this.feature.geometry&&this.feature.geometry.type;if("MultiPoint"===e)return this.toMultiPoint(t);var i="GeometryCollection"===e,n=[];return(this.eachLayer(function(e){if(e.toGeoJSON){var o=e.toGeoJSON(t);if(i)n.push(o.geometry);else{var s=im(o);"FeatureCollection"===s.type?n.push.apply(n,s.features):n.push(s)}}}),i)?ip(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}});/*
   * @class ImageOverlay
   * @aka L.ImageOverlay
   * @inherits Interactive layer
   *
   * Used to load and display a single image over specific bounds of the map. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * var imageUrl = 'https://maps.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
   * 	imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
   * L.imageOverlay(imageUrl, imageBounds).addTo(map);
   * ```
   */var iv=e5.extend({// @section
// @aka ImageOverlay options
options:{// @option opacity: Number = 1.0
// The opacity of the image overlay.
opacity:1,// @option alt: String = ''
// Text for the `alt` attribute of the image (useful for accessibility).
alt:"",// @option interactive: Boolean = false
// If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
interactive:!1,// @option crossOrigin: Boolean|String = false
// Whether the crossOrigin attribute will be added to the image.
// If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
crossOrigin:!1,// @option errorOverlayUrl: String = ''
// URL to the overlay image to show in place of the overlay that failed to load.
errorOverlayUrl:"",// @option zIndex: Number = 1
// The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
zIndex:1,// @option className: String = ''
// A custom class name to assign to the image. Empty by default.
className:""},initialize:function(t,e,i){this._url=t,this._bounds=$(e),w(this,i)},onAdd:function(){!this._image&&(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(t4(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){t1(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},// @method setOpacity(opacity: Number): this
// Sets the opacity of the overlay.
setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},// @method bringToFront(): this
// Brings the layer to the top of all overlays.
bringToFront:function(){return this._map&&t5(this._image),this},// @method bringToBack(): this
// Brings the layer to the bottom of all overlays.
bringToBack:function(){return this._map&&t3(this._image),this},// @method setUrl(url: String): this
// Changes the URL of the image.
setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},// @method setBounds(bounds: LatLngBounds): this
// Update the bounds that this ImageOverlay covers
setBounds:function(t){return this._bounds=$(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},// @method setZIndex(value: Number): this
// Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},// @method getBounds(): LatLngBounds
// Get the bounds that this ImageOverlay covers
getBounds:function(){return this._bounds},// @method getElement(): HTMLElement
// Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
// used by this overlay.
getElement:function(){return this._image},_initImage:function(){var t="IMG"===this._url.tagName,e=this._image=t?this._url:t0("img");if(t4(e,"leaflet-image-layer"),this._zoomAnimated&&t4(e,"leaflet-zoom-animated"),this.options.className&&t4(e,this.options.className),e.onselectstart=v,e.onmousemove=v,// @event load: Event
// Fired when the ImageOverlay layer has loaded its image
e.onload=p(this.fire,this,"load"),e.onerror=p(this._overlayOnError,this,"error"),(this.options.crossOrigin||""===this.options.crossOrigin)&&(e.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t){this._url=e.src;return}e.src=this._url,e.alt=this.options.alt},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),i=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;ei(this._image,i,e)},_reset:function(){var t=this._image,e=new V(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),i=e.getSize();en(t,e.min),t.style.width=i.x+"px",t.style.height=i.y+"px"},_updateOpacity:function(){et(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){// @event error: Event
// Fired when the ImageOverlay layer fails to load its image
this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},// @method getCenter(): LatLng
// Returns the center of the ImageOverlay.
getCenter:function(){return this._bounds.getCenter()}}),iy=iv.extend({// @section
// @aka VideoOverlay options
options:{// @option autoplay: Boolean = true
// Whether the video starts playing automatically when loaded.
// On some browsers autoplay will only work with `muted: true`
autoplay:!0,// @option loop: Boolean = true
// Whether the video will loop back to the beginning when played.
loop:!0,// @option keepAspectRatio: Boolean = true
// Whether the video will save aspect ratio after the projection.
// Relevant for supported browsers. See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
keepAspectRatio:!0,// @option muted: Boolean = false
// Whether the video starts on mute when loaded.
muted:!1,// @option playsInline: Boolean = true
// Mobile browsers will play the video right where it is instead of open it up in fullscreen mode.
playsInline:!0},_initImage:function(){var t="VIDEO"===this._url.tagName,e=this._image=t?this._url:t0("video");if(t4(e,"leaflet-image-layer"),this._zoomAnimated&&t4(e,"leaflet-zoom-animated"),this.options.className&&t4(e,this.options.className),e.onselectstart=v,e.onmousemove=v,// @event load: Event
// Fired when the video has finished loading the first frame
e.onloadeddata=p(this.fire,this,"load"),t){for(var i=e.getElementsByTagName("source"),n=[],o=0;o<i.length;o++)n.push(i[o].src);this._url=i.length>0?n:[e.src];return}T(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(e.style,"objectFit")&&(e.style.objectFit="fill"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop,e.muted=!!this.options.muted,e.playsInline=!!this.options.playsInline;for(var s=0;s<this._url.length;s++){var a=t0("source");a.src=this._url[s],e.appendChild(a)}}}),ix=iv.extend({_initImage:function(){var t=this._image=this._url;t4(t,"leaflet-image-layer"),this._zoomAnimated&&t4(t,"leaflet-zoom-animated"),this.options.className&&t4(t,this.options.className),t.onselectstart=v,t.onmousemove=v}}),ib=e5.extend({// @section
// @aka DivOverlay options
options:{// @option interactive: Boolean = false
// If true, the popup/tooltip will listen to the mouse events.
interactive:!1,// @option offset: Point = Point(0, 0)
// The offset of the overlay position.
offset:[0,0],// @option className: String = ''
// A custom CSS class name to assign to the overlay.
className:"",// @option pane: String = undefined
// `Map pane` where the overlay will be added.
pane:void 0,// @option content: String|HTMLElement|Function = ''
// Sets the HTML content of the overlay while initializing. If a function is passed the source layer will be
// passed to the function. The function should return a `String` or `HTMLElement` to be used in the overlay.
content:""},initialize:function(t,e){t&&(t instanceof Y||T(t))?(this._latlng=q(t),w(this,e)):(w(this,t),this._source=e),this.options.content&&(this._content=this.options.content)},// @method openOn(map: Map): this
// Adds the overlay to the map.
// Alternative to `map.openPopup(popup)`/`.openTooltip(tooltip)`.
openOn:function(t){return t=arguments.length?t:this._source._map,t.hasLayer(this)||t.addLayer(this),this},// @method close(): this
// Closes the overlay.
// Alternative to `map.closePopup(popup)`/`.closeTooltip(tooltip)`
// and `layer.closePopup()`/`.closeTooltip()`.
close:function(){return this._map&&this._map.removeLayer(this),this},// @method toggle(layer?: Layer): this
// Opens or closes the overlay bound to layer depending on its current state.
// Argument may be omitted only for overlay bound to layer.
// Alternative to `layer.togglePopup()`/`.toggleTooltip()`.
toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),// open the overlay on the map
this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&et(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&et(this._container,1),this.bringToFront(),this.options.interactive&&(t4(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(et(this._container,0),this._removeTimeout=setTimeout(p(t1,void 0,this._container),200)):t1(this._container),this.options.interactive&&(t6(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},// @namespace DivOverlay
// @method getLatLng: LatLng
// Returns the geographical point of the overlay.
getLatLng:function(){return this._latlng},// @method setLatLng(latlng: LatLng): this
// Sets the geographical point where the overlay will open.
setLatLng:function(t){return this._latlng=q(t),this._map&&(this._updatePosition(),this._adjustPan()),this},// @method getContent: String|HTMLElement
// Returns the content of the overlay.
getContent:function(){return this._content},// @method setContent(htmlContent: String|HTMLElement|Function): this
// Sets the HTML content of the overlay. If a function is passed the source layer will be passed to the function.
// The function should return a `String` or `HTMLElement` to be used in the overlay.
setContent:function(t){return this._content=t,this.update(),this},// @method getElement: String|HTMLElement
// Returns the HTML container of the overlay.
getElement:function(){return this._container},// @method update: null
// Updates the overlay content, layout and position. Useful for updating the overlay after something inside changed, e.g. image loaded.
update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},// @method isOpen: Boolean
// Returns `true` when the overlay is visible on the map.
isOpen:function(){return!!this._map&&this._map.hasLayer(this)},// @method bringToFront: this
// Brings this overlay in front of other overlays (in the same map pane).
bringToFront:function(){return this._map&&t5(this._container),this},// @method bringToBack: this
// Brings this overlay to the back of other overlays (in the same map pane).
bringToBack:function(){return this._map&&t3(this._container),this},// prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
_prepareOpen:function(t){var e=this._source;if(!e._map)return!1;if(e instanceof e8){e=null;var i=this._source._layers;for(var n in i)if(i[n]._map){e=i[n];break}if(!e)return!1;// Unable to get source layer.
// set overlay source to this layer
this._source=e}if(!t){if(e.getCenter)t=e.getCenter();else if(e.getLatLng)t=e.getLatLng();else if(e.getBounds)t=e.getBounds().getCenter();else throw Error("Unable to get source layer LatLng.")}return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,e="function"==typeof this._content?this._content(this._source||this):this._content;if("string"==typeof e)t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}// @namespace DivOverlay
// @section DivOverlay events
// @event contentupdate: Event
// Fired when the content of the overlay is updated
this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=W(this.options.offset),i=this._getAnchor();this._zoomAnimated?en(this._container,t.add(i)):e=e.add(t).add(i);var n=this._containerBottom=-e.y,o=this._containerLeft=-Math.round(this._containerWidth/2)+e.x;// bottom position the overlay in case the height of the overlay changes (images loading etc)
this._container.style.bottom=n+"px",this._container.style.left=o+"px"}},_getAnchor:function(){return[0,0]}});eE.include({_initOverlay:function(t,e,i,n){var o=e;return o instanceof t||(o=new t(n).setContent(e)),i&&o.setLatLng(i),o}}),e5.include({_initOverlay:function(t,e,i,n){var o=i;return o instanceof t?(w(o,n),o._source=this):(o=e&&!n?e:new t(n,this)).setContent(i),o}});/*
   * @class Popup
   * @inherits DivOverlay
   * @aka L.Popup
   * Used to open popups in certain places of the map. Use [Map.openPopup](#map-openpopup) to
   * open popups while making sure that only one popup is open at one time
   * (recommended for usability), or use [Map.addLayer](#map-addlayer) to open as many as you want.
   *
   * @example
   *
   * If you want to just bind a popup to marker click and then open it, it's really easy:
   *
   * ```js
   * marker.bindPopup(popupContent).openPopup();
   * ```
   * Path overlays like polylines also have a `bindPopup` method.
   *
   * A popup can be also standalone:
   *
   * ```js
   * var popup = L.popup()
   * 	.setLatLng(latlng)
   * 	.setContent('<p>Hello world!<br />This is a nice popup.</p>')
   * 	.openOn(map);
   * ```
   * or
   * ```js
   * var popup = L.popup(latlng, {content: '<p>Hello world!<br />This is a nice popup.</p>')
   * 	.openOn(map);
   * ```
   */// @namespace Popup
var iw=ib.extend({// @section
// @aka Popup options
options:{// @option pane: String = 'popupPane'
// `Map pane` where the popup will be added.
pane:"popupPane",// @option offset: Point = Point(0, 7)
// The offset of the popup position.
offset:[0,7],// @option maxWidth: Number = 300
// Max width of the popup, in pixels.
maxWidth:300,// @option minWidth: Number = 50
// Min width of the popup, in pixels.
minWidth:50,// @option maxHeight: Number = null
// If set, creates a scrollable container of the given height
// inside a popup if its content exceeds it.
// The scrollable container can be styled using the
// `leaflet-popup-scrolled` CSS class selector.
maxHeight:null,// @option autoPan: Boolean = true
// Set it to `false` if you don't want the map to do panning animation
// to fit the opened popup.
autoPan:!0,// @option autoPanPaddingTopLeft: Point = null
// The margin between the popup and the top left corner of the map
// view after autopanning was performed.
autoPanPaddingTopLeft:null,// @option autoPanPaddingBottomRight: Point = null
// The margin between the popup and the bottom right corner of the map
// view after autopanning was performed.
autoPanPaddingBottomRight:null,// @option autoPanPadding: Point = Point(5, 5)
// Equivalent of setting both top left and bottom right autopan padding to the same value.
autoPanPadding:[5,5],// @option keepInView: Boolean = false
// Set it to `true` if you want to prevent users from panning the popup
// off of the screen while it is open.
keepInView:!1,// @option closeButton: Boolean = true
// Controls the presence of a close button in the popup.
closeButton:!0,// @option autoClose: Boolean = true
// Set it to `false` if you want to override the default behavior of
// the popup closing when another popup is opened.
autoClose:!0,// @option closeOnEscapeKey: Boolean = true
// Set it to `false` if you want to override the default behavior of
// the ESC key for closing of the popup.
closeOnEscapeKey:!0,// @option closeOnClick: Boolean = *
// Set it if you want to override the default behavior of the popup closing when user clicks
// on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.
// @option className: String = ''
// A custom CSS class name to assign to the popup.
className:""},// @namespace Popup
// @method openOn(map: Map): this
// Alternative to `map.openPopup(popup)`.
// Adds the popup to the map and closes the previous one.
openOn:function(t){return t=arguments.length?t:this._source._map,!t.hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,ib.prototype.openOn.call(this,t)},onAdd:function(t){ib.prototype.onAdd.call(this,t),// @namespace Map
// @section Popup events
// @event popupopen: PopupEvent
// Fired when a popup is opened in the map
t.fire("popupopen",{popup:this}),!this._source||(// @namespace Layer
// @section Popup events
// @event popupopen: PopupEvent
// Fired when a popup bound to this layer is opened
this._source.fire("popupopen",{popup:this},!0),this._source instanceof it||this._source.on("preclick",ey))},onRemove:function(t){ib.prototype.onRemove.call(this,t),// @namespace Map
// @section Popup events
// @event popupclose: PopupEvent
// Fired when a popup in the map is closed
t.fire("popupclose",{popup:this}),!this._source||(// @namespace Layer
// @section Popup events
// @event popupclose: PopupEvent
// Fired when a popup bound to this layer is closed
this._source.fire("popupclose",{popup:this},!0),this._source instanceof it||this._source.off("preclick",ey))},getEvents:function(){var t=ib.prototype.getEvents.call(this);return(void 0!==this.options.closeOnClick?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",e=this._container=t0("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),i=this._wrapper=t0("div",t+"-content-wrapper",e);if(this._contentNode=t0("div",t+"-content",i),eb(e),ex(this._contentNode),eu(e,"contextmenu",ey),this._tipContainer=t0("div",t+"-tip-container",e),this._tip=t0("div",t+"-tip",this._tipContainer),this.options.closeButton){var n=this._closeButton=t0("a",t+"-close-button",e);n.setAttribute("role","button"),n.setAttribute("aria-label","Close popup"),n.href="#close",n.innerHTML='<span aria-hidden="true">&#215;</span>',eu(n,"click",function(t){ew(t),this.close()},this)}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.max(i=Math.min(i,this.options.maxWidth),this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="";var n=t.offsetHeight,o=this.options.maxHeight,s="leaflet-popup-scrolled";o&&n>o?(e.height=o+"px",t4(t,s)):t6(t,s),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),i=this._getAnchor();en(this._container,e.add(i))},_adjustPan:function(){if(this.options.autoPan){// We can endlessly recurse if keepInView is set and the view resets.
// Let's guard against that by exiting early if we're responding to our own autopan.
if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var t=this._map,e=parseInt(tQ(this._container,"marginBottom"),10)||0,i=this._container.offsetHeight+e,n=this._containerWidth,o=new Z(this._containerLeft,-i-this._containerBottom);o._add(eo(this._container));var s=t.layerPointToContainerPoint(o),a=W(this.options.autoPanPadding),r=W(this.options.autoPanPaddingTopLeft||a),h=W(this.options.autoPanPaddingBottomRight||a),l=t.getSize(),c=0,d=0;s.x+n+h.x>l.x&&(c=s.x+n-l.x+h.x),s.x-c-r.x<0&&(c=s.x-r.x),s.y+i+h.y>l.y&&(d=s.y+i-l.y+h.y),s.y-d-r.y<0&&(d=s.y-r.y),(c||d)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([c,d]))}},_getAnchor:function(){// Where should we anchor the popup on the source layer?
return W(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}});/* @namespace Map
   * @section Interaction Options
   * @option closePopupOnClick: Boolean = true
   * Set it to `false` if you don't want popups to close when user clicks the map.
   */eE.mergeOptions({closePopupOnClick:!0}),// @namespace Map
// @section Methods for Layers and Controls
eE.include({// @method openPopup(popup: Popup): this
// Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
// @alternative
// @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
// Creates a popup with the specified content and options and opens it in the given point on a map.
openPopup:function(t,e,i){return this._initOverlay(iw,t,e,i).openOn(this),this},// @method closePopup(popup?: Popup): this
// Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
closePopup:function(t){return t=arguments.length?t:this._popup,t&&t.close(),this}}),/*
   * @namespace Layer
   * @section Popup methods example
   *
   * All layers share a set of methods convenient for binding popups to it.
   *
   * ```js
   * var layer = L.Polygon(latlngs).bindPopup('Hi There!').addTo(map);
   * layer.openPopup();
   * layer.closePopup();
   * ```
   *
   * Popups will also be automatically opened when the layer is clicked on and closed when the layer is removed from the map or another popup is opened.
   */// @section Popup methods
e5.include({// @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
// Binds a popup to the layer with the passed `content` and sets up the
// necessary event listeners. If a `Function` is passed it will receive
// the layer as the first argument and should return a `String` or `HTMLElement`.
bindPopup:function(t,e){return this._popup=this._initOverlay(iw,this._popup,t,e),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},// @method unbindPopup(): this
// Removes the popup previously bound with `bindPopup`.
unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},// @method openPopup(latlng?: LatLng): this
// Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
openPopup:function(t){return this._popup&&(this instanceof e8||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},// @method closePopup(): this
// Closes the popup bound to this layer if it is open.
closePopup:function(){return this._popup&&this._popup.close(),this},// @method togglePopup(): this
// Opens or closes the popup bound to this layer depending on its current state.
togglePopup:function(){return this._popup&&this._popup.toggle(this),this},// @method isPopupOpen(): boolean
// Returns `true` if the popup bound to this layer is currently open.
isPopupOpen:function(){return!!this._popup&&this._popup.isOpen()},// @method setPopupContent(content: String|HTMLElement|Popup): this
// Sets the content of the popup bound to this layer.
setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},// @method getPopup(): Popup
// Returns the popup bound to this layer.
getPopup:function(){return this._popup},_openPopup:function(t){if(this._popup&&this._map){// prevent map click
eM(t);var e=t.layer||t.target;if(this._popup._source===e&&!(e instanceof it)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng);return}this._popup._source=e,this.openPopup(t.latlng)}},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){13===t.originalEvent.keyCode&&this._openPopup(t)}});/*
   * @class Tooltip
   * @inherits DivOverlay
   * @aka L.Tooltip
   * Used to display small texts on top of map layers.
   *
   * @example
   * If you want to just bind a tooltip to marker:
   *
   * ```js
   * marker.bindTooltip("my tooltip text").openTooltip();
   * ```
   * Path overlays like polylines also have a `bindTooltip` method.
   *
   * A tooltip can be also standalone:
   *
   * ```js
   * var tooltip = L.tooltip()
   * 	.setLatLng(latlng)
   * 	.setContent('Hello world!<br />This is a nice tooltip.')
   * 	.addTo(map);
   * ```
   * or
   * ```js
   * var tooltip = L.tooltip(latlng, {content: 'Hello world!<br />This is a nice tooltip.'})
   * 	.addTo(map);
   * ```
   *
   *
   * Note about tooltip offset. Leaflet takes two options in consideration
   * for computing tooltip offsetting:
   * - the `offset` Tooltip option: it defaults to [0, 0], and it's specific to one tooltip.
   *   Add a positive x offset to move the tooltip to the right, and a positive y offset to
   *   move it to the bottom. Negatives will move to the left and top.
   * - the `tooltipAnchor` Icon option: this will only be considered for Marker. You
   *   should adapt this value if you use a custom icon.
   */// @namespace Tooltip
var iM=ib.extend({// @section
// @aka Tooltip options
options:{// @option pane: String = 'tooltipPane'
// `Map pane` where the tooltip will be added.
pane:"tooltipPane",// @option offset: Point = Point(0, 0)
// Optional offset of the tooltip position.
offset:[0,0],// @option direction: String = 'auto'
// Direction where to open the tooltip. Possible values are: `right`, `left`,
// `top`, `bottom`, `center`, `auto`.
// `auto` will dynamically switch between `right` and `left` according to the tooltip
// position on the map.
direction:"auto",// @option permanent: Boolean = false
// Whether to open the tooltip permanently or only on mouseover.
permanent:!1,// @option sticky: Boolean = false
// If true, the tooltip will follow the mouse instead of being fixed at the feature center.
sticky:!1,// @option opacity: Number = 0.9
// Tooltip container opacity.
opacity:.9},onAdd:function(t){ib.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),// @namespace Map
// @section Tooltip events
// @event tooltipopen: TooltipEvent
// Fired when a tooltip is opened in the map.
t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),// @namespace Layer
// @section Tooltip events
// @event tooltipopen: TooltipEvent
// Fired when a tooltip bound to this layer is opened.
this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){ib.prototype.onRemove.call(this,t),// @namespace Map
// @section Tooltip events
// @event tooltipclose: TooltipEvent
// Fired when a tooltip in the map is closed.
t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),// @namespace Layer
// @section Tooltip events
// @event tooltipclose: TooltipEvent
// Fired when a tooltip bound to this layer is closed.
this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=ib.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=t0("div",t),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+m(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e,i,n=this._map,o=this._container,s=n.latLngToContainerPoint(n.getCenter()),a=n.layerPointToContainerPoint(t),r=this.options.direction,h=o.offsetWidth,l=o.offsetHeight,c=W(this.options.offset),d=this._getAnchor();"top"===r?(e=h/2,i=l):"bottom"===r?(e=h/2,i=0):("center"===r?e=h/2:"right"===r?e=0:"left"===r?e=h:a.x<s.x?(r="right",e=0):(r="left",e=h+(c.x+d.x)*2),i=l/2),t=t.subtract(W(e,i,!0)).add(c).add(d),t6(o,"leaflet-tooltip-right"),t6(o,"leaflet-tooltip-left"),t6(o,"leaflet-tooltip-top"),t6(o,"leaflet-tooltip-bottom"),t4(o,"leaflet-tooltip-"+r),en(o,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&et(this._container,t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(e)},_getAnchor:function(){// Where should we anchor the tooltip on the source layer?
return W(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}});// @namespace Map
// @section Methods for Layers and Controls
eE.include({// @method openTooltip(tooltip: Tooltip): this
// Opens the specified tooltip.
// @alternative
// @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
// Creates a tooltip with the specified content and options and open it.
openTooltip:function(t,e,i){return this._initOverlay(iM,t,e,i).openOn(this),this},// @method closeTooltip(tooltip: Tooltip): this
// Closes the tooltip given as parameter.
closeTooltip:function(t){return t.close(),this}}),/*
   * @namespace Layer
   * @section Tooltip methods example
   *
   * All layers share a set of methods convenient for binding tooltips to it.
   *
   * ```js
   * var layer = L.Polygon(latlngs).bindTooltip('Hi There!').addTo(map);
   * layer.openTooltip();
   * layer.closeTooltip();
   * ```
   */// @section Tooltip methods
e5.include({// @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
// Binds a tooltip to the layer with the passed `content` and sets up the
// necessary event listeners. If a `Function` is passed it will receive
// the layer as the first argument and should return a `String` or `HTMLElement`.
bindTooltip:function(t,e){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(iM,this._tooltip,t,e),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},// @method unbindTooltip(): this
// Removes the tooltip previously bound with `bindTooltip`.
unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(t||!this._tooltipHandlersAdded){var e={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?e.add=this._openTooltip:(e.mouseover=this._openTooltip,e.mouseout=this.closeTooltip,e.click=this._openTooltip,this._map?this._addFocusListeners():e.add=this._addFocusListeners),this._tooltip.options.sticky&&(e.mousemove=this._moveTooltip),this[t?"off":"on"](e),this._tooltipHandlersAdded=!t}},// @method openTooltip(latlng?: LatLng): this
// Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
openTooltip:function(t){return this._tooltip&&(this instanceof e8||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(// open the tooltip on the map
this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},// @method closeTooltip(): this
// Closes the tooltip bound to this layer if it is open.
closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},// @method toggleTooltip(): this
// Opens or closes the tooltip bound to this layer depending on its current state.
toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},// @method isTooltipOpen(): boolean
// Returns `true` if the tooltip bound to this layer is currently open.
isTooltipOpen:function(){return this._tooltip.isOpen()},// @method setTooltipContent(content: String|HTMLElement|Tooltip): this
// Sets the content of the tooltip bound to this layer.
setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},// @method getTooltip(): Tooltip
// Returns the tooltip bound to this layer.
getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var e="function"==typeof t.getElement&&t.getElement();e&&(eu(e,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),eu(e,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){var e="function"==typeof t.getElement&&t.getElement();e&&e.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){if(this._tooltip&&this._map){// If the map is moving, we will show the tooltip after it's done.
if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var e=this;this._map.once("moveend",function(){e._openOnceFlag=!1,e._openTooltip(t)});return}this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)}},_moveTooltip:function(t){var e,i,n=t.latlng;this._tooltip.options.sticky&&t.originalEvent&&(e=this._map.mouseEventToContainerPoint(t.originalEvent),i=this._map.containerPointToLayerPoint(e),n=this._map.layerPointToLatLng(i)),this._tooltip.setLatLng(n)}});/*
   * @class DivIcon
   * @aka L.DivIcon
   * @inherits Icon
   *
   * Represents a lightweight icon for markers that uses a simple `<div>`
   * element instead of an image. Inherits from `Icon` but ignores the `iconUrl` and shadow options.
   *
   * @example
   * ```js
   * var myIcon = L.divIcon({className: 'my-div-icon'});
   * // you can set .my-div-icon styles in CSS
   *
   * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
   * ```
   *
   * By default, it has a 'leaflet-div-icon' CSS class and is styled as a little white square with a shadow.
   */var iP=e4.extend({options:{// @section
// @aka DivIcon options
iconSize:[12,12],// iconAnchor: (Point),
// popupAnchor: (Point),
// @option html: String|HTMLElement = ''
// Custom HTML code to put inside the div element, empty by default. Alternatively,
// an instance of `HTMLElement`.
html:!1,// @option bgPos: Point = [0, 0]
// Optional relative position of the background, in pixels
bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var e=t&&"DIV"===t.tagName?t:document.createElement("div"),i=this.options;if(i.html instanceof Element?(t2(e),e.appendChild(i.html)):e.innerHTML=!1!==i.html?i.html:"",i.bgPos){var n=W(i.bgPos);e.style.backgroundPosition=-n.x+"px "+-n.y+"px"}return this._setIconStyles(e,"icon"),e},createShadow:function(){return null}});e4.Default=e6;/*
   * @class GridLayer
   * @inherits Layer
   * @aka L.GridLayer
   *
   * Generic class for handling a tiled grid of HTML elements. This is the base class for all tile layers and replaces `TileLayer.Canvas`.
   * GridLayer can be extended to create a tiled grid of HTML elements like `<canvas>`, `<img>` or `<div>`. GridLayer will handle creating and animating these DOM elements for you.
   *
   *
   * @section Synchronous usage
   * @example
   *
   * To create a custom layer, extend GridLayer and implement the `createTile()` method, which will be passed a `Point` object with the `x`, `y`, and `z` (zoom level) coordinates to draw your tile.
   *
   * ```js
   * var CanvasLayer = L.GridLayer.extend({
   *     createTile: function(coords){
   *         // create a <canvas> element for drawing
   *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
   *
   *         // setup tile width and height according to the options
   *         var size = this.getTileSize();
   *         tile.width = size.x;
   *         tile.height = size.y;
   *
   *         // get a canvas context and draw something on it using coords.x, coords.y and coords.z
   *         var ctx = tile.getContext('2d');
   *
   *         // return the tile so it can be rendered on screen
   *         return tile;
   *     }
   * });
   * ```
   *
   * @section Asynchronous usage
   * @example
   *
   * Tile creation can also be asynchronous, this is useful when using a third-party drawing library. Once the tile is finished drawing it can be passed to the `done()` callback.
   *
   * ```js
   * var CanvasLayer = L.GridLayer.extend({
   *     createTile: function(coords, done){
   *         var error;
   *
   *         // create a <canvas> element for drawing
   *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
   *
   *         // setup tile width and height according to the options
   *         var size = this.getTileSize();
   *         tile.width = size.x;
   *         tile.height = size.y;
   *
   *         // draw something asynchronously and pass the tile to the done() callback
   *         setTimeout(function() {
   *             done(error, tile);
   *         }, 1000);
   *
   *         return tile;
   *     }
   * });
   * ```
   *
   * @section
   */var iL=e5.extend({// @section
// @aka GridLayer options
options:{// @option tileSize: Number|Point = 256
// Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
tileSize:256,// @option opacity: Number = 1.0
// Opacity of the tiles. Can be used in the `createTile()` function.
opacity:1,// @option updateWhenIdle: Boolean = (depends)
// Load new tiles only when panning ends.
// `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
// `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
// [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
updateWhenIdle:tR.mobile,// @option updateWhenZooming: Boolean = true
// By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
updateWhenZooming:!0,// @option updateInterval: Number = 200
// Tiles will not update more than once every `updateInterval` milliseconds when panning.
updateInterval:200,// @option zIndex: Number = 1
// The explicit zIndex of the tile layer.
zIndex:1,// @option bounds: LatLngBounds = undefined
// If set, tiles will only be loaded inside the set `LatLngBounds`.
bounds:null,// @option minZoom: Number = 0
// The minimum zoom level down to which this layer will be displayed (inclusive).
minZoom:0,// @option maxZoom: Number = undefined
// The maximum zoom level up to which this layer will be displayed (inclusive).
maxZoom:void 0,// @option maxNativeZoom: Number = undefined
// Maximum zoom number the tile source has available. If it is specified,
// the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
// from `maxNativeZoom` level and auto-scaled.
maxNativeZoom:void 0,// @option minNativeZoom: Number = undefined
// Minimum zoom number the tile source has available. If it is specified,
// the tiles on all zoom levels lower than `minNativeZoom` will be loaded
// from `minNativeZoom` level and auto-scaled.
minNativeZoom:void 0,// @option noWrap: Boolean = false
// Whether the layer is wrapped around the antimeridian. If `true`, the
// GridLayer will only be displayed once at low zoom levels. Has no
// effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
// in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
// tiles outside the CRS limits.
noWrap:!1,// @option pane: String = 'tilePane'
// `Map pane` where the grid layer will be added.
pane:"tilePane",// @option className: String = ''
// A custom class name to assign to the tile layer. Empty by default.
className:"",// @option keepBuffer: Number = 2
// When panning the map, keep this many rows and columns of tiles before unloading them.
keepBuffer:2},initialize:function(t){w(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),t1(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},// @method bringToFront: this
// Brings the tile layer to the top of all tile layers.
bringToFront:function(){return this._map&&(t5(this._container),this._setAutoZIndex(Math.max)),this},// @method bringToBack: this
// Brings the tile layer to the bottom of all tile layers.
bringToBack:function(){return this._map&&(t3(this._container),this._setAutoZIndex(Math.min)),this},// @method getContainer: HTMLElement
// Returns the HTML element that contains the tiles for this layer.
getContainer:function(){return this._container},// @method setOpacity(opacity: Number): this
// Changes the [opacity](#gridlayer-opacity) of the grid layer.
setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},// @method setZIndex(zIndex: Number): this
// Changes the [zIndex](#gridlayer-zindex) of the grid layer.
setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},// @method isLoading: Boolean
// Returns `true` if any tile in the grid layer has not finished loading.
isLoading:function(){return this._loading},// @method redraw: this
// Causes the layer to clear all the tiles and request them again.
redraw:function(){if(this._map){this._removeAllTiles();var t=this._clampZoom(this._map.getZoom());t!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()}return this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=g(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},// @section Extension methods
// Layers extending `GridLayer` shall reimplement the following method.
// @method createTile(coords: Object, done?: Function): HTMLElement
// Called only internally, must be overridden by classes extending `GridLayer`.
// Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
// is specified, it must be called when the tile has finished loading and drawing.
createTile:function(){return document.createElement("div")},// @section
// @method getTileSize: Point
// Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
getTileSize:function(){var t=this.options.tileSize;return t instanceof Z?t:new Z(t,t)},_updateZIndex:function(){this._container&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e,i=this.getPane().children,n=-t(-1/0,1/0),o=0,s=i.length;o<s;o++)e=i[o].style.zIndex,i[o]!==this._container&&e&&(n=t(n,+e));isFinite(n)&&(this.options.zIndex=n+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!tR.ielt9){et(this._container,this.options.opacity);var t=+new Date,e=!1,i=!1;for(var n in this._tiles){var o=this._tiles[n];if(o.current&&o.loaded){var s=Math.min(1,(t-o.loaded)/200);et(o.el,s),s<1?e=!0:(o.active?i=!0:this._onOpaqueTile(o),o.active=!0)}}i&&!this._noPrune&&this._pruneTiles(),e&&(R(this._fadeFrame),this._fadeFrame=I(this._updateOpacity,this))}},_onOpaqueTile:v,_initContainer:function(){this._container||(this._container=t0("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(void 0!==t){for(var i in this._levels)i=Number(i),this._levels[i].el.children.length||i===t?(this._levels[i].el.style.zIndex=e-Math.abs(t-i),this._onUpdateLevel(i)):(t1(this._levels[i].el),this._removeTilesAtZoom(i),this._onRemoveLevel(i),delete this._levels[i]);var n=this._levels[t],o=this._map;return n||((n=this._levels[t]={}).el=t0("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=e,n.origin=o.project(o.unproject(o.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,o.getCenter(),o.getZoom()),// force the browser to consider the newly added element for transition
v(n.el.offsetWidth),this._onCreateLevel(n)),this._level=n,n}},_onUpdateLevel:v,_onRemoveLevel:v,_onCreateLevel:v,_pruneTiles:function(){if(this._map){var t,e,i=this._map.getZoom();if(i>this.options.maxZoom||i<this.options.minZoom){this._removeAllTiles();return}for(t in this._tiles)(e=this._tiles[t]).retain=e.current;for(t in this._tiles)if((e=this._tiles[t]).current&&!e.active){var n=e.coords;this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)t1(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,i,n){var o=Math.floor(t/2),s=Math.floor(e/2),a=i-1,r=new Z(+o,+s);r.z=+a;var h=this._tileCoordsToKey(r),l=this._tiles[h];return l&&l.active?(l.retain=!0,!0):(l&&l.loaded&&(l.retain=!0),a>n&&this._retainParent(o,s,a,n))},_retainChildren:function(t,e,i,n){for(var o=2*t;o<2*t+2;o++)for(var s=2*e;s<2*e+2;s++){var a=new Z(o,s);a.z=i+1;var r=this._tileCoordsToKey(a),h=this._tiles[r];if(h&&h.active){h.retain=!0;continue}h&&h.loaded&&(h.retain=!0),i+1<n&&this._retainChildren(o,s,i+1,n)}},_resetView:function(t){var e=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),e,e)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return void 0!==e.minNativeZoom&&t<e.minNativeZoom?e.minNativeZoom:void 0!==e.maxNativeZoom&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,i,n){var o=Math.round(e);o=void 0!==this.options.maxZoom&&o>this.options.maxZoom||void 0!==this.options.minZoom&&o<this.options.minZoom?void 0:this._clampZoom(o);var s=this.options.updateWhenZooming&&o!==this._tileZoom;(!n||s)&&(this._tileZoom=o,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),void 0!==o&&this._update(t),i||this._pruneTiles(),// Flag to prevent _updateOpacity from pruning tiles during
// a zoom anim or a pinch gesture
this._noPrune=!!i),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var i in this._levels)this._setZoomTransform(this._levels[i],t,e)},_setZoomTransform:function(t,e,i){var n=this._map.getZoomScale(i,t.zoom),o=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e,i)).round();tR.any3d?ei(t.el,o,n):en(t.el,o)},_resetGrid:function(){var t=this._map,e=t.options.crs,i=this._tileSize=this.getTileSize(),n=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom);o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],n).x/i.x),Math.ceil(t.project([0,e.wrapLng[1]],n).x/i.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],n).y/i.x),Math.ceil(t.project([e.wrapLat[1],0],n).y/i.y)]},_onMoveEnd:function(){this._map&&!this._map._animatingZoom&&this._update()},_getTiledPixelBounds:function(t){var e=this._map,i=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),n=e.getZoomScale(i,this._tileZoom),o=e.project(t,this._tileZoom).floor(),s=e.getSize().divideBy(2*n);return new V(o.subtract(s),o.add(s))},// Private method to load tiles in the grid's active zoom level according to map bounds
_update:function(t){var e=this._map;if(e){var i=this._clampZoom(e.getZoom());if(void 0===t&&(t=e.getCenter()),void 0!==this._tileZoom){// if out of minzoom/maxzoom
var n=this._getTiledPixelBounds(t),o=this._pxBoundsToTileRange(n),s=o.getCenter(),a=[],r=this.options.keepBuffer,h=new V(o.getBottomLeft().subtract([r,-r]),o.getTopRight().add([r,-r]));// Sanity check: panic if the tile range contains Infinity somewhere.
if(!(isFinite(o.min.x)&&isFinite(o.min.y)&&isFinite(o.max.x)&&isFinite(o.max.y)))throw Error("Attempted to load an infinite number of tiles");for(var l in this._tiles){var c=this._tiles[l].coords;c.z===this._tileZoom&&h.contains(new Z(c.x,c.y))||(this._tiles[l].current=!1)}// _update just loads more tiles. If the tile zoom level differs too much
// from the map's, let _setView reset levels and prune old tiles.
if(Math.abs(i-this._tileZoom)>1){this._setView(t,i);return}// create a queue of coordinates to load tiles from
for(var d=o.min.y;d<=o.max.y;d++)for(var u=o.min.x;u<=o.max.x;u++){var p=new Z(u,d);if(p.z=this._tileZoom,this._isValidTile(p)){var f=this._tiles[this._tileCoordsToKey(p)];f?f.current=!0:a.push(p)}}if(// sort tile queue to load tiles in order of their distance to center
a.sort(function(t,e){return t.distanceTo(s)-e.distanceTo(s)}),0!==a.length){this._loading||(this._loading=!0,// @event loading: Event
// Fired when the grid layer starts loading tiles.
this.fire("loading"));// create DOM fragment to append tiles in one batch
var m=document.createDocumentFragment();for(u=0;u<a.length;u++)this._addTile(a[u],m);this._level.el.appendChild(m)}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){// don't load tile if it's out of bounds and not wrapped
var i=this._globalTileRange;if(!e.wrapLng&&(t.x<i.min.x||t.x>i.max.x)||!e.wrapLat&&(t.y<i.min.y||t.y>i.max.y))return!1}if(!this.options.bounds)return!0;// don't load tile if it doesn't intersect the bounds in options
var n=this._tileCoordsToBounds(t);return $(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,i=this.getTileSize(),n=t.scaleBy(i),o=n.add(i);return[e.unproject(n,t.z),e.unproject(o,t.z)]},// converts tile coordinates to its geographical bounds
_tileCoordsToBounds:function(t){var e=this._tileCoordsToNwSe(t),i=new U(e[0],e[1]);return this.options.noWrap||(i=this._map.wrapLatLngBounds(i)),i},// converts tile coordinates to key for the tile cache
_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},// converts tile cache key to coordinates
_keyToTileCoords:function(t){var e=t.split(":"),i=new Z(+e[0],+e[1]);return i.z=+e[2],i},_removeTile:function(t){var e=this._tiles[t];e&&(t1(e.el),delete this._tiles[t],// @event tileunload: TileEvent
// Fired when a tile is removed (e.g. when a tile goes off the screen).
this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){t4(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=v,t.onmousemove=v,tR.ielt9&&this.options.opacity<1&&et(t,this.options.opacity)},_addTile:function(t,e){var i=this._getTilePos(t),n=this._tileCoordsToKey(t),o=this.createTile(this._wrapCoords(t),p(this._tileReady,this,t));this._initTile(o),this.createTile.length<2&&I(p(this._tileReady,this,t,null,o)),en(o,i),// save tile in cache
this._tiles[n]={el:o,coords:t,current:!0},e.appendChild(o),// @event tileloadstart: TileEvent
// Fired when a tile is requested and starts loading.
this.fire("tileloadstart",{tile:o,coords:t})},_tileReady:function(t,e,i){e&&// Fired when there is an error loading a tile.
this.fire("tileerror",{error:e,tile:i,coords:t});var n=this._tileCoordsToKey(t);(i=this._tiles[n])&&(i.loaded=+new Date,this._map._fadeAnimated?(et(i.el,0),R(this._fadeFrame),this._fadeFrame=I(this._updateOpacity,this)):(i.active=!0,this._pruneTiles()),e||(t4(i.el,"leaflet-tile-loaded"),// @event tileload: TileEvent
// Fired when a tile loads.
this.fire("tileload",{tile:i.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,// @event load: Event
// Fired when the grid layer loaded all visible tiles.
this.fire("load"),tR.ielt9||!this._map._fadeAnimated?I(this._pruneTiles,this):// to trigger a pruning.
setTimeout(p(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new Z(this._wrapX?_(t.x,this._wrapX):t.x,this._wrapY?_(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new V(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}}),ik=iL.extend({// @section
// @aka TileLayer options
options:{// @option minZoom: Number = 0
// The minimum zoom level down to which this layer will be displayed (inclusive).
minZoom:0,// @option maxZoom: Number = 18
// The maximum zoom level up to which this layer will be displayed (inclusive).
maxZoom:18,// @option subdomains: String|String[] = 'abc'
// Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
subdomains:"abc",// @option errorTileUrl: String = ''
// URL to the tile image to show in place of the tile that failed to load.
errorTileUrl:"",// @option zoomOffset: Number = 0
// The zoom number used in tile URLs will be offset with this value.
zoomOffset:0,// @option tms: Boolean = false
// If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
tms:!1,// @option zoomReverse: Boolean = false
// If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
zoomReverse:!1,// @option detectRetina: Boolean = false
// If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
detectRetina:!1,// @option crossOrigin: Boolean|String = false
// Whether the crossOrigin attribute will be added to the tiles.
// If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
crossOrigin:!1,// @option referrerPolicy: Boolean|String = false
// Whether the referrerPolicy attribute will be added to the tiles.
// If a String is provided, all tiles will have their referrerPolicy attribute set to the String provided.
// This may be needed if your map's rendering context has a strict default but your tile provider expects a valid referrer
// (e.g. to validate an API token).
// Refer to [HTMLImageElement.referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy) for valid String values.
referrerPolicy:!1},initialize:function(t,e){this._url=t,(e=w(this,e)).detectRetina&&tR.retina&&e.maxZoom>0?(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom=Math.min(e.maxZoom,e.minZoom+1)):(e.zoomOffset++,e.maxZoom=Math.max(e.minZoom,e.maxZoom-1)),e.minZoom=Math.max(0,e.minZoom)):e.zoomReverse?e.minZoom=Math.min(e.maxZoom,e.minZoom):e.maxZoom=Math.max(e.minZoom,e.maxZoom),"string"==typeof e.subdomains&&(e.subdomains=e.subdomains.split("")),this.on("tileunload",this._onTileRemove)},// @method setUrl(url: String, noRedraw?: Boolean): this
// Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
// If the URL does not change, the layer will not be redrawn unless
// the noRedraw parameter is set to false.
setUrl:function(t,e){return this._url===t&&void 0===e&&(e=!0),this._url=t,e||this.redraw(),this},// @method createTile(coords: Object, done?: Function): HTMLElement
// Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
// to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
// callback is called when the tile has been loaded.
createTile:function(t,e){var i=document.createElement("img");return eu(i,"load",p(this._tileOnLoad,this,e,i)),eu(i,"error",p(this._tileOnError,this,e,i)),(this.options.crossOrigin||""===this.options.crossOrigin)&&(i.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),"string"==typeof this.options.referrerPolicy&&(i.referrerPolicy=this.options.referrerPolicy),// The alt attribute is set to the empty string,
// allowing screen readers to ignore the decorative image tiles.
// https://www.w3.org/WAI/tutorials/images/decorative/
// https://www.w3.org/TR/html-aria/#el-img-empty-alt
i.alt="",i.src=this.getTileUrl(t),i},// @section Extension methods
// @uninheritable
// Layers extending `TileLayer` might reimplement the following method.
// @method getTileUrl(coords: Object): String
// Called only internally, returns the URL for a tile given its coordinates.
// Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
getTileUrl:function(t){var i={r:tR.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var n=this._globalTileRange.max.y-t.y;this.options.tms&&(i.y=n),i["-y"]=n}return k(this._url,e(i,this.options))},_tileOnLoad:function(t,e){tR.ielt9?setTimeout(p(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,i){var n=this.options.errorTileUrl;n&&e.getAttribute("src")!==n&&(e.src=n),t(i,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom,i=this.options.zoomReverse,n=this.options.zoomOffset;return i&&(t=e-t),t+n},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},// stops loading all tiles in the background layer
_abortLoading:function(){var t,e;for(t in this._tiles)if(this._tiles[t].coords.z!==this._tileZoom&&((e=this._tiles[t].el).onload=v,e.onerror=v,!e.complete)){e.src=C;var i=this._tiles[t].coords;t1(e),delete this._tiles[t],// @event tileabort: TileEvent
// Fired when a tile was loading but is now not wanted.
this.fire("tileabort",{tile:e,coords:i})}},_removeTile:function(t){var e=this._tiles[t];if(e)return(// Cancels any pending http requests associated with the tile
e.el.setAttribute("src",C),iL.prototype._removeTile.call(this,t))},_tileReady:function(t,e,i){if(this._map&&(!i||i.getAttribute("src")!==C))return iL.prototype._tileReady.call(this,t,e,i)}});// @factory L.tilelayer(urlTemplate: String, options?: TileLayer options)
// Instantiates a tile layer object given a `URL template` and optionally an options object.
function iT(t,e){return new ik(t,e)}/*
   * @class TileLayer.WMS
   * @inherits TileLayer
   * @aka L.TileLayer.WMS
   * Used to display [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services as tile layers on the map. Extends `TileLayer`.
   *
   * @example
   *
   * ```js
   * var nexrad = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
   * 	layers: 'nexrad-n0r-900913',
   * 	format: 'image/png',
   * 	transparent: true,
   * 	attribution: "Weather data © 2012 IEM Nexrad"
   * });
   * ```
   */var iS=ik.extend({// @section
// @aka TileLayer.WMS options
// If any custom options not documented here are used, they will be sent to the
// WMS server as extra parameters in each request URL. This can be useful for
// [non-standard vendor WMS parameters](https://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
defaultWmsParams:{service:"WMS",request:"GetMap",// @option layers: String = ''
// **(required)** Comma-separated list of WMS layers to show.
layers:"",// @option styles: String = ''
// Comma-separated list of WMS styles.
styles:"",// @option format: String = 'image/jpeg'
// WMS image format (use `'image/png'` for layers with transparency).
format:"image/jpeg",// @option transparent: Boolean = false
// If `true`, the WMS service will return images with transparency.
transparent:!1,// @option version: String = '1.1.1'
// Version of the WMS service to use
version:"1.1.1"},options:{// @option crs: CRS = null
// Coordinate Reference System to use for the WMS requests, defaults to
// map CRS. Don't change this if you're not sure what it means.
crs:null,// @option uppercase: Boolean = false
// If `true`, WMS request parameter keys will be uppercase.
uppercase:!1},initialize:function(t,i){this._url=t;var n=e({},this.defaultWmsParams);// all keys that are not TileLayer options go to WMS params
for(var o in i)o in this.options||(n[o]=i[o]);var s=(i=w(this,i)).detectRetina&&tR.retina?2:1,a=this.getTileSize();n.width=a.x*s,n.height=a.y*s,this.wmsParams=n},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,ik.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),i=this._crs,n=H(i.project(e[0]),i.project(e[1])),o=n.min,s=n.max,a=(this._wmsVersion>=1.3&&this._crs===e1?[o.y,o.x,s.y,s.x]:[o.x,o.y,s.x,s.y]).join(","),r=ik.prototype.getTileUrl.call(this,t);return r+M(this.wmsParams,r,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+a},// @method setParams(params: Object, noRedraw?: Boolean): this
// Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
setParams:function(t,i){return e(this.wmsParams,t),i||this.redraw(),this}});ik.WMS=iS,iT.wms=// @factory L.tileLayer.wms(baseUrl: String, options: TileLayer.WMS options)
// Instantiates a WMS tile layer object given a base URL of the WMS service and a WMS parameters/options object.
function(t,e){return new iS(t,e)};/*
   * @class Renderer
   * @inherits Layer
   * @aka L.Renderer
   *
   * Base class for vector renderer implementations (`SVG`, `Canvas`). Handles the
   * DOM container of the renderer, its bounds, and its zoom animation.
   *
   * A `Renderer` works as an implicit layer group for all `Path`s - the renderer
   * itself can be added or removed to the map. All paths use a renderer, which can
   * be implicit (the map will decide the type of renderer and use it automatically)
   * or explicit (using the [`renderer`](#path-renderer) option of the path).
   *
   * Do not use this class directly, use `SVG` and `Canvas` instead.
   *
   * @event update: Event
   * Fired when the renderer updates its bounds, center and zoom, for example when
   * its map has moved
   */var iC=e5.extend({// @section
// @aka Renderer options
options:{// @option padding: Number = 0.1
// How much to extend the clip area around the map view (relative to its size)
// e.g. 0.1 would be 10% of map view in each direction
padding:.1},initialize:function(t){w(this,t),m(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),// always keep transform-origin as 0 0
t4(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var i=this._map.getZoomScale(e,this._zoom),n=this._map.getSize().multiplyBy(.5+this.options.padding),o=this._map.project(this._center,e),s=n.multiplyBy(-i).add(o).subtract(this._map._getNewPixelOrigin(t,e));tR.any3d?ei(this._container,s,i):en(this._container,s)},_reset:function(){for(var t in this._update(),this._updateTransform(this._center,this._zoom),this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){// Update pixel bounds of renderer container (for positioning/sizing/clipping later)
// Subclasses are responsible of firing the 'update' event.
var t=this.options.padding,e=this._map.getSize(),i=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new V(i,i.add(e.multiplyBy(1+2*t)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),iE=iC.extend({// @section
// @aka Canvas options
options:{// @option tolerance: Number = 0
// How much to extend the click tolerance around a path/object on the map.
tolerance:0},getEvents:function(){var t=iC.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){// Set a flag so that a viewprereset+moveend+viewreset only updates&redraws once
this._postponeUpdatePaths=!0},onAdd:function(){iC.prototype.onAdd.call(this),// Redraw vectors since canvas is cleared upon removal,
// in case of removing the renderer itself from the map.
this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");eu(t,"mousemove",this._onMouseMove,this),eu(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),eu(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){R(this._redrawRequest),delete this._ctx,t1(this._container),ef(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){for(var t in this._redrawBounds=null,this._layers)this._layers[t]._update();this._redraw()}},_update:function(){if(!this._map._animatingZoom||!this._bounds){iC.prototype._update.call(this);var t=this._bounds,e=this._container,i=t.getSize(),n=tR.retina?2:1;en(e,t.min),// set canvas size (also clearing it); use double size on retina
e.width=n*i.x,e.height=n*i.y,e.style.width=i.x+"px",e.style.height=i.y+"px",tR.retina&&this._ctx.scale(2,2),// translate so we use the same path coordinates after canvas element moves
this._ctx.translate(-t.min.x,-t.min.y),// Tell paths to redraw themselves
this.fire("update")}},_reset:function(){iC.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[m(t)]=t;var e=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=e),this._drawLast=e,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,i=e.next,n=e.prev;i?i.prev=n:this._drawLast=n,n?n.next=i:this._drawFirst=i,delete t._order,delete this._layers[m(t)],this._requestRedraw(t)},_updatePath:function(t){// Redraw the union of the layer's old pixel
// bounds and the new pixel bounds.
this._extendRedrawBounds(t),t._project(),t._update(),// The redraw will extend the redraw bounds
// with the new pixel bounds.
this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if("string"==typeof t.options.dashArray){var e,i,n=t.options.dashArray.split(/[, ]+/),o=[];for(i=0;i<n.length;i++){// Ignore dash array containing invalid lengths
if(isNaN(e=Number(n[i])))return;o.push(e)}t.options._dashArray=o}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||I(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var e=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new V,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var e=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,e.x,e.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var t,e=this._redrawBounds;if(this._ctx.save(),e){var i=e.getSize();this._ctx.beginPath(),this._ctx.rect(e.min.x,e.min.y,i.x,i.y),this._ctx.clip()}this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!e||t._pxBounds&&t._pxBounds.intersects(e))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var i,n,o,s,a=t._parts,r=a.length,h=this._ctx;if(r){for(h.beginPath(),i=0;i<r;i++){for(n=0,o=a[i].length;n<o;n++)s=a[i][n],h[n?"lineTo":"moveTo"](s.x,s.y);e&&h.closePath()}this._fillStroke(h,t)}}// TODO optimization: 1 fill/stroke for all features with equal style instead of 1 for each feature
},_updateCircle:function(t){if(!(!this._drawing||t._empty())){var e=t._point,i=this._ctx,n=Math.max(Math.round(t._radius),1),o=(Math.max(Math.round(t._radiusY),1)||n)/n;1!==o&&(i.save(),i.scale(1,o)),i.beginPath(),i.arc(e.x,e.y/o,n,0,2*Math.PI,!1),1!==o&&i.restore(),this._fillStroke(i,t)}},_fillStroke:function(t,e){var i=e.options;i.fill&&(t.globalAlpha=i.fillOpacity,t.fillStyle=i.fillColor||i.color,t.fill(i.fillRule||"evenodd")),i.stroke&&0!==i.weight&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=i.opacity,t.lineWidth=i.weight,t.strokeStyle=i.color,t.lineCap=i.lineCap,t.lineJoin=i.lineJoin,t.stroke())},// Canvas obviously doesn't have mouse events for individual drawn objects,
// so we emulate that by calculating what's under the mouse on mousemove/click manually
_onClick:function(t){for(var e,i,n=this._map.mouseEventToLayerPoint(t),o=this._drawFirst;o;o=o.next)(e=o.layer).options.interactive&&e._containsPoint(n)&&(!("click"===t.type||"preclick"===t.type)||!this._map._draggableMoved(e))&&(i=e);this._fireEvent(!!i&&[i],t)},_onMouseMove:function(t){if(!(!this._map||this._map.dragging.moving())&&!this._map._animatingZoom){var e=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,e)}},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(// if we're leaving the layer, fire mouseout
t6(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,e){if(!this._mouseHoverThrottled){for(var i,n,o=this._drawFirst;o;o=o.next)(i=o.layer).options.interactive&&i._containsPoint(e)&&(n=i);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(t4(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._fireEvent(!!this._hoveredLayer&&[this._hoveredLayer],t),this._mouseHoverThrottled=!0,setTimeout(p(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,e,i){this._map._fireDOMEvent(e,i||e.type,t)},_bringToFront:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(!i)return;i.prev=n,n?n.next=i:i&&// single entry
(this._drawFirst=i),e.prev=this._drawLast,this._drawLast.next=e,e.next=null,this._drawLast=e,this._requestRedraw(t)}},_bringToBack:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(!n)return;n.next=i,i?i.prev=n:n&&// single entry
(this._drawLast=n),e.prev=null,e.next=this._drawFirst,this._drawFirst.prev=e,this._drawFirst=e,this._requestRedraw(t)}}});// @factory L.canvas(options?: Renderer options)
// Creates a Canvas renderer with the given options.
function iO(t){return tR.canvas?new iE(t):null}/*
   * Thanks to Dmitry Baranovsky and his Raphael library for inspiration!
   */var iz=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch(t){// Do not return fn from catch block so `e` can be garbage collected
// See https://github.com/Leaflet/Leaflet/pull/7279
}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),iA=tR.vml?iz:ti,iD=iC.extend({_initContainer:function(){this._container=iA("svg"),// makes it possible to click through svg root; we'll reset it back in individual paths
this._container.setAttribute("pointer-events","none"),this._rootGroup=iA("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){t1(this._container),ef(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!this._map._animatingZoom||!this._bounds){iC.prototype._update.call(this);var t=this._bounds,e=t.getSize(),i=this._container;this._svgSize&&this._svgSize.equals(e)||(this._svgSize=e,i.setAttribute("width",e.x),i.setAttribute("height",e.y)),// movement: update container viewBox so that we don't have to change coordinates of individual layers
en(i,t.min),i.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update")}},// methods below are called by vector layers implementations
_initPath:function(t){var e=t._path=iA("path");t.options.className&&t4(e,t.options.className),t.options.interactive&&t4(e,"leaflet-interactive"),this._updateStyle(t),this._layers[m(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){t1(t._path),t.removeInteractiveTarget(t._path),delete this._layers[m(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,i=t.options;e&&(i.stroke?(e.setAttribute("stroke",i.color),e.setAttribute("stroke-opacity",i.opacity),e.setAttribute("stroke-width",i.weight),e.setAttribute("stroke-linecap",i.lineCap),e.setAttribute("stroke-linejoin",i.lineJoin),i.dashArray?e.setAttribute("stroke-dasharray",i.dashArray):e.removeAttribute("stroke-dasharray"),i.dashOffset?e.setAttribute("stroke-dashoffset",i.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),i.fill?(e.setAttribute("fill",i.fillColor||i.color),e.setAttribute("fill-opacity",i.fillOpacity),e.setAttribute("fill-rule",i.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,tn(t._parts,e))},_updateCircle:function(t){var e=t._point,i=Math.max(Math.round(t._radius),1),n=Math.max(Math.round(t._radiusY),1)||i,o="a"+i+","+n+" 0 1,0 ",s=t._empty()?"M0 0":"M"+(e.x-i)+","+e.y+o+2*i+",0 "+o+-(2*i)+",0 ";this._setPath(t,s)},_setPath:function(t,e){t._path.setAttribute("d",e)},// SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
_bringToFront:function(t){t5(t._path)},_bringToBack:function(t){t3(t._path)}});// @namespace SVG
// @factory L.svg(options?: Renderer options)
// Creates a SVG renderer with the given options.
function iI(t){return tR.svg||tR.vml?new iD(t):null}tR.vml&&iD.include({_initContainer:function(){this._container=t0("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(iC.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=iz("shape");t4(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=iz("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[m(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;t1(e),t.removeInteractiveTarget(e),delete this._layers[m(t)]},_updateStyle:function(t){var e=t._stroke,i=t._fill,n=t.options,o=t._container;o.stroked=!!n.stroke,o.filled=!!n.fill,n.stroke?(e||(e=t._stroke=iz("stroke")),o.appendChild(e),e.weight=n.weight+"px",e.color=n.color,e.opacity=n.opacity,n.dashArray?e.dashStyle=T(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=n.lineCap.replace("butt","flat"),e.joinstyle=n.lineJoin):e&&(o.removeChild(e),t._stroke=null),n.fill?(i||(i=t._fill=iz("fill")),o.appendChild(i),i.color=n.fillColor||n.color,i.opacity=n.fillOpacity):i&&(o.removeChild(i),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),i=Math.round(t._radius),n=Math.round(t._radiusY||i);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+i+","+n+" 0,23592600")},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){t5(t._container)},_bringToBack:function(t){t3(t._container)}}),eE.include({// @namespace Map; @method getRenderer(layer: Path): Renderer
// Returns the instance of `Renderer` that should be used to render the given
// `Path`. It will ensure that the `renderer` options of the map and paths
// are respected, and that the renderers do exist on the map.
getRenderer:function(t){// @namespace Path; @option renderer: Renderer
// Use this specific instance of `Renderer` for this path. Takes
// precedence over the map's [default renderer](#map-renderer).
var e=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return e||(e=this._renderer=this._createRenderer()),this.hasLayer(e)||this.addLayer(e),e},_getPaneRenderer:function(t){if("overlayPane"===t||void 0===t)return!1;var e=this._paneRenderers[t];return void 0===e&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e},_createRenderer:function(t){// @namespace Map; @option preferCanvas: Boolean = false
// Whether `Path`s should be rendered on a `Canvas` renderer.
// By default, all `Path`s are rendered in a `SVG` renderer.
return this.options.preferCanvas&&iO(t)||iI(t)}});/*
   * L.Rectangle extends Polygon and creates a rectangle when passed a LatLngBounds object.
   *//*
   * @class Rectangle
   * @aka L.Rectangle
   * @inherits Polygon
   *
   * A class for drawing rectangle overlays on a map. Extends `Polygon`.
   *
   * @example
   *
   * ```js
   * // define rectangle geographical bounds
   * var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];
   *
   * // create an orange rectangle
   * L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);
   *
   * // zoom the map to the rectangle bounds
   * map.fitBounds(bounds);
   * ```
   *
   */var iR=is.extend({initialize:function(t,e){is.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},// @method setBounds(latLngBounds: LatLngBounds): this
// Redraws the rectangle with the passed bounds.
setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return[(t=$(t)).getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});iD.create=iA,iD.pointsToPath=tn,ia.geometryToLayer=ir,ia.coordsToLatLng=il,ia.coordsToLatLngs=ic,ia.latLngToCoords=id,ia.latLngsToCoords=iu,ia.getFeature=ip,ia.asFeature=im,/*
   * L.Handler.BoxZoom is used to add shift-drag zoom interaction to the map
   * (zoom to a selected bounding box), enabled by default.
   */// @namespace Map
// @section Interaction Options
eE.mergeOptions({// @option boxZoom: Boolean = true
// Whether the map can be zoomed to a rectangular area specified by
// dragging the mouse while pressing the shift key.
boxZoom:!0});var iB=eB.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){eu(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){ef(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){t1(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){0!==this._resetStateTimeout&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||1!==t.which&&1!==t.button)return!1;// Clear the deferred resetState if it hasn't executed yet, otherwise it
// will interrupt the interaction and orphan a box element in the container.
this._clearDeferredResetState(),this._resetState(),i(),ea(),this._startPoint=this._map.mouseEventToContainerPoint(t),eu(document,{contextmenu:eM,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=t0("div","leaflet-zoom-box",this._container),t4(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var e=new V(this._point,this._startPoint),i=e.getSize();en(this._box,e.min),this._box.style.width=i.x+"px",this._box.style.height=i.y+"px"},_finish:function(){this._moved&&(t1(this._box),t6(this._container,"leaflet-crosshair")),n(),er(),ef(document,{contextmenu:eM,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if((1===t.which||1===t.button)&&(this._finish(),this._moved)){// Postpone to next JS tick so internal click event handling
// still see it as "moved".
this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(p(this._resetState,this),0);var e=new U(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(e).fire("boxzoomend",{boxZoomBounds:e})}},_onKeyDown:function(t){27===t.keyCode&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});// @section Handlers
// @property boxZoom: Handler
// Box (shift-drag with mouse) zoom handler.
eE.addInitHook("addHandler","boxZoom",iB),/*
   * L.Handler.DoubleClickZoom is used to handle double-click zoom on the map, enabled by default.
   */// @namespace Map
// @section Interaction Options
eE.mergeOptions({// @option doubleClickZoom: Boolean|String = true
// Whether the map can be zoomed in by double clicking on it and
// zoomed out by double clicking while holding shift. If passed
// `'center'`, double-click zoom will zoom to the center of the
//  view regardless of where the mouse was.
doubleClickZoom:!0});var iN=eB.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom(),n=e.options.zoomDelta,o=t.originalEvent.shiftKey?i-n:i+n;"center"===e.options.doubleClickZoom?e.setZoom(o):e.setZoomAround(t.containerPoint,o)}});// @section Handlers
//
// Map properties include interaction handlers that allow you to control
// interaction behavior in runtime, enabling or disabling certain features such
// as dragging or touch zoom (see `Handler` methods). For example:
//
// ```js
// map.doubleClickZoom.disable();
// ```
//
// @property doubleClickZoom: Handler
// Double click zoom handler.
eE.addInitHook("addHandler","doubleClickZoom",iN),/*
   * L.Handler.MapDrag is used to make the map draggable (with panning inertia), enabled by default.
   */// @namespace Map
// @section Interaction Options
eE.mergeOptions({// @option dragging: Boolean = true
// Whether the map is draggable with mouse/touch or not.
dragging:!0,// @section Panning Inertia Options
// @option inertia: Boolean = *
// If enabled, panning of the map will have an inertia effect where
// the map builds momentum while dragging and continues moving in
// the same direction for some time. Feels especially nice on touch
// devices. Enabled by default.
inertia:!0,// @option inertiaDeceleration: Number = 3000
// The rate with which the inertial movement slows down, in pixels/second².
inertiaDeceleration:3400,// @option inertiaMaxSpeed: Number = Infinity
// Max speed of the inertial movement, in pixels/second.
inertiaMaxSpeed:1/0,// @option easeLinearity: Number = 0.2
easeLinearity:.2,// TODO refactor, move to CRS
// @option worldCopyJump: Boolean = false
// With this option enabled, the map tracks when you pan to another "copy"
// of the world and seamlessly jumps to the original one so that all overlays
// like markers and vector layers are still visible.
worldCopyJump:!1,// @option maxBoundsViscosity: Number = 0.0
// If `maxBounds` is set, this option will control how solid the bounds
// are when dragging the map around. The default value of `0.0` allows the
// user to drag outside the bounds at normal speed, higher values will
// slow down map dragging outside bounds, and `1.0` makes the bounds fully
// solid, preventing the user from dragging outside the bounds.
maxBoundsViscosity:0});var iF=eB.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new eF(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}t4(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){t6(this._map._container,"leaflet-grab"),t6(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var e=$(this._map.options.maxBounds);this._offsetLimit=H(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var e=this._lastTime=+new Date,i=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(i),this._times.push(e),this._prunePositions(e)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){if(this._viscosity&&this._offsetLimit){var t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit;t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){// TODO refactor to be able to adjust map pane position after zoom
var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-e+i)%t+e-i,s=(n+e+i)%t-e-i;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=Math.abs(o+i)<Math.abs(s+i)?o:s},_onDragEnd:function(t){var e=this._map,i=e.options,n=!i.inertia||t.noInertia||this._times.length<2;if(e.fire("dragend",t),n)e.fire("moveend");else{this._prunePositions(+new Date);var o=this._lastPos.subtract(this._positions[0]),s=(this._lastTime-this._times[0])/1e3,a=i.easeLinearity,r=o.multiplyBy(a/s),h=r.distanceTo([0,0]),l=Math.min(i.inertiaMaxSpeed,h),c=r.multiplyBy(l/h),d=l/(i.inertiaDeceleration*a),u=c.multiplyBy(-d/2).round();u.x||u.y?(u=e._limitOffset(u,e.options.maxBounds),I(function(){e.panBy(u,{duration:d,easeLinearity:a,noMoveStart:!0,animate:!0})})):e.fire("moveend")}}});// @section Handlers
// @property dragging: Handler
// Map dragging handler (by both mouse and touch).
eE.addInitHook("addHandler","dragging",iF),/*
   * L.Map.Keyboard is handling keyboard interaction with the map, enabled by default.
   */// @namespace Map
// @section Keyboard Navigation Options
eE.mergeOptions({// @option keyboard: Boolean = true
// Makes the map focusable and allows users to navigate the map with keyboard
// arrows and `+`/`-` keys.
keyboard:!0,// @option keyboardPanDelta: Number = 80
// Amount of pixels to pan when pressing an arrow key.
keyboardPanDelta:80});var iZ=eB.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),eu(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),ef(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,e=document.documentElement,i=t.scrollTop||e.scrollTop,n=t.scrollLeft||e.scrollLeft;this._map._container.focus(),window.scrollTo(n,i)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var e,i,n=this._panKeys={},o=this.keyCodes;for(e=0,i=o.left.length;e<i;e++)n[o.left[e]]=[-1*t,0];for(e=0,i=o.right.length;e<i;e++)n[o.right[e]]=[t,0];for(e=0,i=o.down.length;e<i;e++)n[o.down[e]]=[0,t];for(e=0,i=o.up.length;e<i;e++)n[o.up[e]]=[0,-1*t]},_setZoomDelta:function(t){var e,i,n=this._zoomKeys={},o=this.keyCodes;for(e=0,i=o.zoomIn.length;e<i;e++)n[o.zoomIn[e]]=t;for(e=0,i=o.zoomOut.length;e<i;e++)n[o.zoomOut[e]]=-t},_addHooks:function(){eu(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){ef(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var e,i=t.keyCode,n=this._map;if(i in this._panKeys){if(!n._panAnim||!n._panAnim._inProgress){if(e=this._panKeys[i],t.shiftKey&&(e=W(e).multiplyBy(3)),n.options.maxBounds&&(e=n._limitOffset(W(e),n.options.maxBounds)),n.options.worldCopyJump){var o=n.wrapLatLng(n.unproject(n.project(n.getCenter()).add(e)));n.panTo(o)}else n.panBy(e)}}else if(i in this._zoomKeys)n.setZoom(n.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[i]);else{if(27!==i||!n._popup||!n._popup.options.closeOnEscapeKey)return;n.closePopup()}eM(t)}}});// @section Handlers
// @section Handlers
// @property keyboard: Handler
// Keyboard navigation handler.
eE.addInitHook("addHandler","keyboard",iZ),/*
   * L.Handler.ScrollWheelZoom is used by L.Map to enable mouse scroll wheel zoom on the map.
   */// @namespace Map
// @section Interaction Options
eE.mergeOptions({// @section Mouse wheel options
// @option scrollWheelZoom: Boolean|String = true
// Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
// it will zoom to the center of the view regardless of where the mouse was.
scrollWheelZoom:!0,// @option wheelDebounceTime: Number = 40
// Limits the rate at which a wheel can fire (in milliseconds). By default
// user can't zoom via wheel more often than once per 40 ms.
wheelDebounceTime:40,// @option wheelPxPerZoomLevel: Number = 60
// How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
// mean a change of one full zoom level. Smaller values will make wheel-zooming
// faster (and vice versa).
wheelPxPerZoomLevel:60});var ij=eB.extend({addHooks:function(){eu(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){ef(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=eT(t),i=this._map.options.wheelDebounceTime;this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var n=Math.max(i-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(p(this._performZoom,this),n),eM(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),i=this._map.options.zoomSnap||0;t._stop();// map the delta with a sigmoid function to -4..4 range leaning on -1..1
var n=4*Math.log(2/(1+Math.exp(-Math.abs(this._delta/(4*this._map.options.wheelPxPerZoomLevel)))))/Math.LN2,o=i?Math.ceil(n/i)*i:n,s=t._limitZoom(e+(this._delta>0?o:-o))-e;this._delta=0,this._startTime=null,s&&("center"===t.options.scrollWheelZoom?t.setZoom(e+s):t.setZoomAround(this._lastMousePos,e+s))}});// @section Handlers
// @property scrollWheelZoom: Handler
// Scroll wheel zoom handler.
eE.addInitHook("addHandler","scrollWheelZoom",ij),// @namespace Map
// @section Interaction Options
eE.mergeOptions({// @section Touch interaction options
// @option tapHold: Boolean
// Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
tapHold:tR.touchNative&&tR.safari&&tR.mobile,// @option tapTolerance: Number = 15
// The max number of pixels a user can shift his finger during touch
// for it to be considered a valid tap.
tapTolerance:15});var iW=eB.extend({addHooks:function(){eu(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){ef(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(clearTimeout(this._holdTimeout),1===t.touches.length){var e=t.touches[0];this._startPos=this._newPos=new Z(e.clientX,e.clientY),this._holdTimeout=setTimeout(p(function(){this._cancel(),this._isTapValid()&&(// prevent simulated mouse events https://w3c.github.io/touch-events/#mouse-events
eu(document,"touchend",ew),eu(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",e))},this),600),eu(document,"touchend touchcancel contextmenu",this._cancel,this),eu(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function t(){ef(document,"touchend",ew),ef(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),ef(document,"touchend touchcancel contextmenu",this._cancel,this),ef(document,"touchmove",this._onMove,this)},_onMove:function(t){var e=t.touches[0];this._newPos=new Z(e.clientX,e.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,e){var i=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,// detail: 1,
screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY});i._simulated=!0,e.target.dispatchEvent(i)}});// @section Handlers
// @property tapHold: Handler
// Long tap handler to simulate `contextmenu` event (useful in mobile Safari).
eE.addInitHook("addHandler","tapHold",iW),/*
   * L.Handler.TouchZoom is used by L.Map to add pinch zoom on supported mobile browsers.
   */// @namespace Map
// @section Interaction Options
eE.mergeOptions({// @section Touch interaction options
// @option touchZoom: Boolean|String = *
// Whether the map can be zoomed by touch-dragging with two fingers. If
// passed `'center'`, it will zoom to the center of the view regardless of
// where the touch events (fingers) were. Enabled for touch-capable web
// browsers.
touchZoom:tR.touch,// @option bounceAtZoomLimits: Boolean = true
// Set it to false if you don't want the map to zoom beyond min/max zoom
// and then bounce back when pinch-zooming.
bounceAtZoomLimits:!0});var iV=eB.extend({addHooks:function(){t4(this._map._container,"leaflet-touch-zoom"),eu(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){t6(this._map._container,"leaflet-touch-zoom"),ef(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var e=this._map;if(t.touches&&2===t.touches.length&&!e._animatingZoom&&!this._zooming){var i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=e.getSize()._divideBy(2),this._startLatLng=e.containerPointToLatLng(this._centerPoint),"center"!==e.options.touchZoom&&(this._pinchStartLatLng=e.containerPointToLatLng(i.add(n)._divideBy(2))),this._startDist=i.distanceTo(n),this._startZoom=e.getZoom(),this._moved=!1,this._zooming=!0,e._stop(),eu(document,"touchmove",this._onTouchMove,this),eu(document,"touchend touchcancel",this._onTouchEnd,this),ew(t)}},_onTouchMove:function(t){if(t.touches&&2===t.touches.length&&this._zooming){var e=this._map,i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]),o=i.distanceTo(n)/this._startDist;if(this._zoom=e.getScaleZoom(o,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&o<1||this._zoom>e.getMaxZoom()&&o>1)&&(this._zoom=e._limitZoom(this._zoom)),"center"===e.options.touchZoom){if(this._center=this._startLatLng,1===o)return}else{// Get delta from pinch to center, so centerLatLng is delta applied to initial pinchLatLng
var s=i._add(n)._divideBy(2)._subtract(this._centerPoint);if(1===o&&0===s.x&&0===s.y)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(s),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),R(this._animRequest);var a=p(e._move,e,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=I(a,this,!0),ew(t)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,R(this._animRequest),ef(document,"touchmove",this._onTouchMove,this),ef(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});// @section Handlers
// @property touchZoom: Handler
// Touch zoom handler.
eE.addInitHook("addHandler","touchZoom",iV),eE.BoxZoom=iB,eE.DoubleClickZoom=iN,eE.Drag=iF,eE.Keyboard=iZ,eE.ScrollWheelZoom=ij,eE.TapHold=iW,eE.TouchZoom=iV,t.Bounds=V,t.Browser=tR,t.CRS=G,t.Canvas=iE,t.Circle=ii,t.CircleMarker=ie,t.Class=B,t.Control=eO,t.DivIcon=iP,t.DivOverlay=ib,t.DomEvent={__proto__:null,on:eu,off:ef,stopPropagation:ey,disableScrollPropagation:ex,disableClickPropagation:eb,preventDefault:ew,stop:eM,getPropagationPath:eP,getMousePosition:eL,getWheelDelta:eT,isExternalTarget:eS,addListener:eu,removeListener:ef},t.DomUtil={__proto__:null,TRANSFORM:tG,TRANSITION:tX,TRANSITION_END:tK,get:tJ,getStyle:tQ,create:t0,remove:t1,empty:t2,toFront:t5,toBack:t3,hasClass:t8,addClass:t4,removeClass:t6,setClass:t9,getClass:t7,setOpacity:et,testProp:ee,setTransform:ei,setPosition:en,getPosition:eo,get disableTextSelection(){return i},get enableTextSelection(){return n},disableImageDrag:ea,enableImageDrag:er,preventOutline:eh,restoreOutline:el,getSizedParentNode:ec,getScale:ed},t.Draggable=eF,t.Evented=F,t.FeatureGroup=e8,t.GeoJSON=ia,t.GridLayer=iL,t.Handler=eB,t.Icon=e4,t.ImageOverlay=iv,t.LatLng=Y,t.LatLngBounds=U,t.Layer=e5,t.LayerGroup=e3,t.LineUtil={__proto__:null,simplify:eV,pointToSegmentDistance:eH,closestPointOnSegment:// @function closestPointOnSegment(p: Point, p1: Point, p2: Point): Number
// Returns the closest point from a point `p` on a segment `p1` to `p2`.
function(t,e,i){return eq(t,e,i)},clipSegment:eU,_getEdgeIntersection:e$,_getBitCode:eY,_sqClosestPointOnSegment:eq,isFlat:eG,_flat:eX,polylineCenter:eK},t.Map=eE,t.Marker=e7,t.Mixin={Events:N},t.Path=it,t.Point=Z,t.PolyUtil={__proto__:null,clipPolygon:eZ,polygonCenter:ej,centroid:eW},t.Polygon=is,t.Polyline=io,t.Popup=iw,t.PosAnimation=eC,t.Projection={__proto__:null,LonLat:eJ,Mercator:eQ,SphericalMercator:K},t.Rectangle=iR,t.Renderer=iC,t.SVG=iD,t.SVGOverlay=ix,t.TileLayer=ik,t.Tooltip=iM,t.Transformation=J,t.Util={__proto__:null,extend:e,create:u,bind:p,get lastId(){return f},stamp:m,throttle:g,wrapNum:_,falseFn:v,formatNum:y,trim:x,splitWords:b,setOptions:w,getParamString:M,template:k,isArray:T,indexOf:S,emptyImageUrl:C,requestFn:A,cancelFn:D,requestAnimFrame:I,cancelAnimFrame:R},t.VideoOverlay=iy,t.bind=p,t.bounds=H,t.canvas=iO,t.circle=// @factory L.circle(latlng: LatLng, options?: Circle options)
// Instantiates a circle object given a geographical point, and an options object
// which contains the circle radius.
// @alternative
// @factory L.circle(latlng: LatLng, radius: Number, options?: Circle options)
// Obsolete way of instantiating a circle, for compatibility with 0.7.x code.
// Do not use in new applications or plugins.
function(t,e,i){return new ii(t,e,i)},t.circleMarker=// @factory L.circleMarker(latlng: LatLng, options?: CircleMarker options)
// Instantiates a circle marker object given a geographical point, and an optional options object.
function(t,e){return new ie(t,e)},t.control=ez,t.divIcon=// @factory L.divIcon(options: DivIcon options)
// Creates a `DivIcon` instance with the given options.
function(t){return new iP(t)},t.extend=e,t.featureGroup=function(t,e){return new e8(t,e)},t.geoJSON=i_,t.geoJson=i_,t.gridLayer=// @factory L.gridLayer(options?: GridLayer options)
// Creates a new instance of GridLayer with the supplied options.
function(t){return new iL(t)},t.icon=// @factory L.icon(options: Icon options)
// Creates an icon instance with the given options.
function(t){return new e4(t)},t.imageOverlay=function(t,e,i){return new iv(t,e,i)},t.latLng=q,t.latLngBounds=$,t.layerGroup=function(t,e){return new e3(t,e)},t.map=// @section
// @factory L.map(id: String, options?: Map options)
// Instantiates a map object given the DOM ID of a `<div>` element
// and optionally an object literal with `Map options`.
//
// @alternative
// @factory L.map(el: HTMLElement, options?: Map options)
// Instantiates a map object given an instance of a `<div>` HTML element
// and optionally an object literal with `Map options`.
function(t,e){return new eE(t,e)},t.marker=// factory L.marker(latlng: LatLng, options? : Marker options)
// @factory L.marker(latlng: LatLng, options? : Marker options)
// Instantiates a Marker object given a geographical point and optionally an options object.
function(t,e){return new e7(t,e)},t.point=W,t.polygon=// @factory L.polygon(latlngs: LatLng[], options?: Polyline options)
function(t,e){return new is(t,e)},t.polyline=// @factory L.polyline(latlngs: LatLng[], options?: Polyline options)
// Instantiates a polyline object given an array of geographical points and
// optionally an options object. You can create a `Polyline` object with
// multiple separate lines (`MultiPolyline`) by passing an array of arrays
// of geographic points.
function(t,e){return new io(t,e)},t.popup=function(t,e){return new iw(t,e)},t.rectangle=// @factory L.rectangle(latLngBounds: LatLngBounds, options?: Polyline options)
function(t,e){return new iR(t,e)},t.setOptions=w,t.stamp=m,t.svg=iI,t.svgOverlay=// @factory L.svgOverlay(svg: String|SVGElement, bounds: LatLngBounds, options?: SVGOverlay options)
// Instantiates an image overlay object given an SVG element and the geographical bounds it is tied to.
// A viewBox attribute is required on the SVG element to zoom in and out properly.
function(t,e,i){return new ix(t,e,i)},t.tileLayer=iT,t.tooltip=function(t,e){return new iM(t,e)},t.transformation=Q,t.version="1.9.4",t.videoOverlay=// @factory L.videoOverlay(video: String|Array|HTMLVideoElement, bounds: LatLngBounds, options?: VideoOverlay options)
// Instantiates an image overlay object given the URL of the video (or array of URLs, or even a video element) and the
// geographical bounds it is tied to.
function(t,e,i){return new iy(t,e,i)};var iH=window.L;t.noConflict=function(){return window.L=iH,this},// Always export us to window global (see #2364)
window.L=t}(oj);const oW=/*@__PURE__*/i(oj).tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",{minZoom:0,maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"],attribution:"Google Maps"});/*@__PURE__*/i(oj).tileLayer("http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",{minZoom:0,maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"],attribution:"Google Maps"}),/*@__PURE__*/i(oj).tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",{minZoom:0,maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"],attribution:"Google Maps"}),/*@__PURE__*/i(oj).tileLayer("http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",{minZoom:0,maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"],attribution:"Google Maps"});const oV={zoom:13,minZoom:0,maxZoom:20,zoomSnap:.5,zoomDelta:.5,touchZoom:!0,layers:[oW],closePopupOnClick:!1},oH={autoPan:!1,closeButton:!1,autoClose:!1,maxWidth:100,keepInView:!0},oU={easeLinearity:.6,duration:.25},o$=function(t,e){let i=t[0]?.lat;if(void 0===i)return e;for(let e of t)if(e.lat<i){i=e.lat;continue}return i},oY=function(t,e){let i=t[0]?.lat;if(void 0===i)return e;for(let e of t)if(e.lat>i){i=e.lat;continue}return i},oq=function(t,e){let i=t[0]?.lon;if(void 0===i)return e;for(let e of t)if(e.lon<i){i=e.lon;continue}return i},oG=function(t,e){let i=t[0]?.lon;if(void 0===i)return e;for(let e of t)if(e.lon>i){i=e.lon;continue}return i},oX=t=>{t.resize()},oK={responsive:!0,maintainAspectRatio:!0,onResize:oX},oJ={responsive:!0,maintainAspectRatio:!0,onResize:oX},oQ=async function(t){try{let e=await fetch(t);if(!e.ok)throw Error("Could not get data from server");let i=await e.json(),n=new Map;for(let t of i){let e=t.commonName.split(",").at(-1)?.trim();e&&(n.has(e)||n.set(e,[]),n.get(e)?.push(t))}let o=Array.from(n.entries()).map(([t,e])=>({name:t,bikePoints:e}));return o}catch(t){return t}},o0=function(t,e){let i=e.find(e=>t===e.name),n=i?.bikePoints.map(t=>t.commonName.split(",")[0]?.trim()),o=i?.bikePoints.map(t=>{let e=t.additionalProperties;return Number(e.find(t=>"NbBikes"===t.key)?.value)}),s=i?.bikePoints.map(t=>{let e=t.additionalProperties;return Number(e.find(t=>"NbEmptyDocks"===t.key)?.value)}),a=i?.bikePoints.map(t=>{let e=t.additionalProperties;return Number(e.find(t=>"NbDocks"===t.key)?.value)});return[i,n,o,s,a]},o1=async function(t){try{let e,n,o,s,a,r,h,l;let c=await oQ(t);if(c instanceof Error)throw c;let d=document.createElement("main");d.insertAdjacentHTML("beforeend",`
  <h1 class="heading">
    BIKEPOINTS IN LONDON<br />
    <span>according to TfL</span>
  </h1>
  `);let u=document.createElement("label");u.setAttribute("for","areas"),u.textContent="Choose an area:",d.insertAdjacentElement("beforeend",u);let p=document.createElement("select");p.id="areas";let f=document.createElement("option");f.textContent="Getting location...",f.setAttribute("selected",""),f.setAttribute("disabled",""),p.insertAdjacentElement("afterbegin",f),d.insertAdjacentElement("beforeend",p);let m=document.createElement("div");m.id="map",d.insertAdjacentElement("beforeend",m);let g=document.createElement("div");g.id="bar-chart-container",g.classList.add("hidden");let _=document.createElement("canvas");_.id="bar-chart",g.insertAdjacentElement("beforeend",_),d.insertAdjacentElement("beforeend",g);let[v,y,x]=[document.createElement("div"),document.createElement("div"),document.createElement("div")];v.id="pie-chart-container-nbbikes",v.classList.add("pie-chart-area"),v.classList.add("hidden"),y.id="pie-chart-container-nbemptydocks",y.classList.add("pie-chart-area"),y.classList.add("hidden"),x.id="pie-chart-container-nbdocks",x.classList.add("pie-chart-area"),x.classList.add("hidden");let[b,w,M]=[document.createElement("canvas"),document.createElement("canvas"),document.createElement("canvas")];b.id="pie-chart-nbbikes",v.insertAdjacentElement("beforeend",b),d.insertAdjacentElement("beforeend",v),w.id="pie-chart-nbemptydocks",y.insertAdjacentElement("beforeend",w),d.insertAdjacentElement("beforeend",y),M.id="pie-chart-nbdocks",x.insertAdjacentElement("beforeend",M),d.insertAdjacentElement("beforeend",x);let P=[],k=/*@__PURE__*/i(oj).map(m,oV);return k.locate({setView:!0}),setTimeout(function(){k.invalidateSize()},0),k.addEventListener("locationfound",function(){a=k.getBounds().getSouth(),r=k.getBounds().getNorth(),h=k.getBounds().getWest(),l=k.getBounds().getEast(),f.textContent="Choose an area:",c.forEach(t=>{p.insertAdjacentHTML("beforeend",`
  <option value="${t.name}">${t.name}</option>
  `)})}),k.addEventListener("locationerror",function(){k.panTo([51.5080964,-.135468],oU),f.textContent="Could not get location"}),k.addEventListener("moveend",function(){a=k.getBounds().getSouth(),r=k.getBounds().getNorth(),h=k.getBounds().getWest(),l=k.getBounds().getEast(),console.log(a,r,h,l)}),p.addEventListener("change",function(){let[t,d,u,f,m]=o0(p.value,c);console.clear(),console.log(t),console.log(d),console.log(u),console.log(f),console.log(m),e instanceof nP&&n instanceof nP&&s instanceof nP&&o instanceof nP&&(e.destroy(),n.destroy(),s.destroy(),o.destroy()),e=new nP(_,{type:"bar",data:{labels:d,datasets:[{label:"Number of NbBikes",data:u},{label:"Number of NbEmptyDocks",data:f},{label:"Number of NbDocks",data:m}]},options:oK}),n=new nP(b,{type:"pie",data:{labels:d,datasets:[{label:"Number of NbBikes",data:u}]},options:oJ}),o=new nP(w,{type:"pie",data:{labels:d,datasets:[{label:"Number of NbDocks",data:f}]},options:oJ}),s=new nP(M,{type:"pie",data:{labels:d,datasets:[{label:"Number of NbDocks",data:m}]},options:oJ}),g.classList.remove("hidden"),v.classList.remove("hidden"),y.classList.remove("hidden"),x.classList.remove("hidden");let T=t.bikePoints;0!==P.length&&(P.forEach(t=>{t.remove()}),P=[]),P=T.map(t=>{let e=Number(t.additionalProperties.find(t=>"NbBikes"===t.key)?.value),n=Number(t.additionalProperties.find(t=>"NbDocks"===t.key)?.value),o=e/n*100,s=`
        <div class="pop-up">
        ${0===o?"❌":o>0&&o<=20?"\uD83D\uDD34":o>20&&o<=50?"\uD83D\uDFE0":o>50&&o<=80?"\uD83D\uDFE1":"\uD83D\uDFE2"}</br>
        ${e} bike${1!==e?"s":""} available</br>
        ${function(){let e=t.commonName.split(",")[0];return e||""}()}
        </div>
        `;return /*@__PURE__*/i(oj).popup(oH).setLatLng([t.lat,t.lon]).setContent(s).addTo(k)});let S=/*@__PURE__*/i(oj).latLngBounds([[oY(T,r),oq(T,h)],[o$(T,a),oG(T,l)]]);k.flyToBounds(S,oU)}),d}catch(e){let t=document.createElement("main");return t.insertAdjacentHTML("afterbegin",`
  <div class="page-error">
    <h1>PAGE ERROR</h1>
    <p>${e.message}</p>
  </div>
  `),t}};window.addEventListener("DOMContentLoaded",function(){o1("https://api.tfl.gov.uk/BikePoint/").then(t=>document.body.insertAdjacentElement("beforeend",t))});//# sourceMappingURL=index.e493a5c9.js.map

//# sourceMappingURL=index.e493a5c9.js.map

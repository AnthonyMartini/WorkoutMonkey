"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[559],{8173:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let r=n(9920),i=n(1452),o=n(7437),a=i._(n(2265)),l=r._(n(4887)),u=r._(n(8321)),s=n(497),d=n(7103),c=n(3938);n(2301);let f=n(291),p=r._(n(1241)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/WorkoutMonkey/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,n,r,i,o,a){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function h(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let v=(0,a.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:i,height:l,width:u,decoding:s,className:d,style:c,fetchPriority:f,placeholder:p,loading:m,unoptimized:v,fill:y,onLoadRef:b,onLoadingCompleteRef:w,setBlurComplete:_,setShowAltText:x,sizesInput:j,onLoad:C,onError:S,...P}=e;return(0,o.jsx)("img",{...P,...h(f),loading:m,width:u,height:l,decoding:s,"data-nimg":y?"fill":"1",className:d,style:c,sizes:i,srcSet:r,src:n,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&g(e,p,b,w,_,v,j))},[n,p,b,w,_,S,v,j,t]),onLoad:e=>{g(e.currentTarget,p,b,w,_,v,j)},onError:e=>{x(!0),"empty"!==p&&_(!0),S&&S(e)}})});function y(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...h(n.fetchPriority)};return t&&l.default.preload?(l.default.preload(n.src,r),null):(0,o.jsx)(u.default,{children:(0,o.jsx)("link",{rel:"preload",href:n.srcSet?void 0:n.src,...r},"__nimg-"+n.src+n.srcSet+n.sizes)})}let b=(0,a.forwardRef)((e,t)=>{let n=(0,a.useContext)(f.RouterContext),r=(0,a.useContext)(c.ImageConfigContext),i=(0,a.useMemo)(()=>{let e=m||r||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:l,onLoadingComplete:u}=e,g=(0,a.useRef)(l);(0,a.useEffect)(()=>{g.current=l},[l]);let h=(0,a.useRef)(u);(0,a.useEffect)(()=>{h.current=u},[u]);let[b,w]=(0,a.useState)(!1),[_,x]=(0,a.useState)(!1),{props:j,meta:C}=(0,s.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:b,showAltText:_});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{...j,unoptimized:C.unoptimized,placeholder:C.placeholder,fill:C.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:w,setShowAltText:x,sizesInput:e.sizes,ref:t}),C.priority?(0,o.jsx)(y,{isAppRouter:!n,imgAttributes:j}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2901:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});let r=n(9920)._(n(2265)).default.createContext({})},687:function(e,t){function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},497:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),n(2301);let r=n(1564),i=n(7103);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var n;let l,u,s,{src:d,sizes:c,unoptimized:f=!1,priority:p=!1,loading:m,className:g,quality:h,width:v,height:y,fill:b=!1,style:w,overrideSrc:_,onLoad:x,onLoadingComplete:j,placeholder:C="empty",blurDataURL:S,fetchPriority:P,layout:O,objectFit:E,objectPosition:M,lazyBoundary:R,lazyRoot:z,...I}=e,{imgConf:N,showAltText:k,blurComplete:A,defaultLoader:D}=t,T=N||i.imageConfigDefault;if("allSizes"in T)l=T;else{let e=[...T.deviceSizes,...T.imageSizes].sort((e,t)=>e-t),t=T.deviceSizes.sort((e,t)=>e-t);l={...T,allSizes:e,deviceSizes:t}}if(void 0===D)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let U=I.loader||D;delete I.loader,delete I.srcSet;let W="__next_img_default"in U;if(W){if("custom"===l.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=U;U=t=>{let{config:n,...r}=t;return e(r)}}if(O){"fill"===O&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[O];t&&!c&&(c=t)}let F="",L=a(v),B=a(y);if("object"==typeof(n=d)&&(o(n)||void 0!==n.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(u=e.blurWidth,s=e.blurHeight,S=S||e.blurDataURL,F=e.src,!b){if(L||B){if(L&&!B){let t=L/e.width;B=Math.round(e.height*t)}else if(!L&&B){let t=B/e.height;L=Math.round(e.width*t)}}else L=e.width,B=e.height}}let $=!p&&("lazy"===m||void 0===m);(!(d="string"==typeof d?d:F)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,$=!1),l.unoptimized&&(f=!0),W&&d.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),p&&(P="high");let G=a(h),V=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:M}:{},k?{}:{color:"transparent"},w),H=A||"empty"===C?null:"blur"===C?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:L,heightInt:B,blurWidth:u,blurHeight:s,blurDataURL:S||"",objectFit:V.objectFit})+'")':'url("'+C+'")',q=H?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:H}:{},J=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:a,loader:l}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,a),d=u.length-1;return{sizes:a||"w"!==s?a:"100vw",srcSet:u.map((e,r)=>l({config:t,src:n,quality:o,width:e})+" "+("w"===s?e:r+1)+s).join(", "),src:l({config:t,src:n,quality:o,width:u[d]})}}({config:l,src:d,unoptimized:f,width:L,quality:G,sizes:c,loader:U});return{props:{...I,loading:$?"lazy":m,fetchPriority:P,width:L,height:B,decoding:"async",className:g,style:{...V,...q},sizes:J.sizes,srcSet:J.srcSet,src:_||J.src},meta:{unoptimized:f,priority:p,placeholder:C,fill:b}}}},8321:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return g},defaultHead:function(){return c}});let r=n(9920),i=n(1452),o=n(7437),a=i._(n(2265)),l=r._(n(5960)),u=n(2901),s=n(6590),d=n(687);function c(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(2301);let p=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:n}=t;return e.reduce(f,[]).reverse().concat(c(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!a)&&n.has(e)?o=!1:(n.add(e),r[t]=n)}}}}return o}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:r})})}let g=function(e){let{children:t}=e,n=(0,a.useContext)(u.AmpStateContext),r=(0,a.useContext)(s.HeadManagerContext);return(0,o.jsx)(l.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,d.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1564:function(e,t){function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:a}=e,l=r?40*r:t,u=i?40*i:n,s=l&&u?"viewBox='0 0 "+l+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},3938:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let r=n(9920)._(n(2265)),i=n(7103),o=r.default.createContext(i.imageConfigDefault)},7103:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"./_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},1241:function(e,t){function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},291:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return r}});let r=n(9920)._(n(2265)).default.createContext(null)},5960:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let r=n(2265),i="undefined"==typeof window,o=i?()=>{}:r.useLayoutEffect,a=i?()=>{}:r.useEffect;function l(e){let{headManager:t,reduceComponentsToState:n}=e;function l(){if(t&&t.mountedInstances){let i=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(i,e))}}if(i){var u;null==t||null==(u=t.mountedInstances)||u.add(e.children),l()}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},4902:function(e,t,n){n.r(t),n.d(t,{Indicator:function(){return C},Progress:function(){return g},ProgressIndicator:function(){return v},Root:function(){return j},createProgressScope:function(){return f}});var r=n(2265),i=n(7437);n(4887);var o=r.forwardRef((e,t)=>{let{children:n,...o}=e,l=r.Children.toArray(n),s=l.find(u);if(s){let e=s.props.children,n=l.map(t=>t!==s?t:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,i.jsx)(a,{...o,ref:t,children:r.isValidElement(e)?r.cloneElement(e,void 0,n):null})}return(0,i.jsx)(a,{...o,ref:t,children:n})});o.displayName="Slot";var a=r.forwardRef((e,t)=>{let{children:n,...i}=e;if(r.isValidElement(n)){let e,o;let a=(e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.props.ref:n.props.ref||n.ref;return r.cloneElement(n,{...function(e,t){let n={...t};for(let r in t){let i=e[r],o=t[r];/^on[A-Z]/.test(r)?i&&o?n[r]=(...e)=>{o(...e),i(...e)}:i&&(n[r]=i):"style"===r?n[r]={...i,...o}:"className"===r&&(n[r]=[i,o].filter(Boolean).join(" "))}return{...e,...n}}(i,n.props),ref:t?function(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}(t,a):a})}return r.Children.count(n)>1?r.Children.only(null):null});a.displayName="SlotClone";var l=({children:e})=>(0,i.jsx)(i.Fragment,{children:e});function u(e){return r.isValidElement(e)&&e.type===l}var s=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=r.forwardRef((e,n)=>{let{asChild:r,...a}=e,l=r?o:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(l,{...a,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),d="Progress",[c,f]=function(e,t=[]){let n=[],o=()=>{let t=n.map(e=>r.createContext(e));return function(n){let i=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:i}}),[n,i])}};return o.scopeName=e,[function(t,o){let a=r.createContext(o),l=n.length;function u(t){let{scope:n,children:o,...u}=t,s=n?.[e][l]||a,d=r.useMemo(()=>u,Object.values(u));return(0,i.jsx)(s.Provider,{value:d,children:o})}return n=[...n,o],u.displayName=t+"Provider",[u,function(n,i){let u=i?.[e][l]||a,s=r.useContext(u);if(s)return s;if(void 0!==o)return o;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let i=n.reduce((t,{useScope:n,scopeName:r})=>{let i=n(e)[`__scope${r}`];return{...t,...i}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return n.scopeName=t.scopeName,n}(o,...t)]}(d),[p,m]=c(d),g=r.forwardRef((e,t)=>{var n,r,o,a;let{__scopeProgress:l,value:u=null,max:d,getValueLabel:c=y,...f}=e;(d||0===d)&&!_(d)&&console.error((n="".concat(d),r="Progress","Invalid prop `max` of value `".concat(n,"` supplied to `").concat(r,"`. Only numbers greater than 0 are valid max values. Defaulting to `").concat(100,"`.")));let m=_(d)?d:100;null===u||x(u,m)||console.error((o="".concat(u),a="Progress","Invalid prop `value` of value `".concat(o,"` supplied to `").concat(a,"`. The `value` prop must be:\n  - a positive number\n  - less than the value passed to `max` (or ").concat(100," if no `max` prop is set)\n  - `null` or `undefined` if the progress is indeterminate.\n\nDefaulting to `null`.")));let g=x(u,m)?u:null,h=w(g)?c(g,m):void 0;return(0,i.jsx)(p,{scope:l,value:g,max:m,children:(0,i.jsx)(s.div,{"aria-valuemax":m,"aria-valuemin":0,"aria-valuenow":w(g)?g:void 0,"aria-valuetext":h,role:"progressbar","data-state":b(g,m),"data-value":null!=g?g:void 0,"data-max":m,...f,ref:t})})});g.displayName=d;var h="ProgressIndicator",v=r.forwardRef((e,t)=>{var n;let{__scopeProgress:r,...o}=e,a=m(h,r);return(0,i.jsx)(s.div,{"data-state":b(a.value,a.max),"data-value":null!==(n=a.value)&&void 0!==n?n:void 0,"data-max":a.max,...o,ref:t})});function y(e,t){return"".concat(Math.round(e/t*100),"%")}function b(e,t){return null==e?"indeterminate":e===t?"complete":"loading"}function w(e){return"number"==typeof e}function _(e){return w(e)&&!isNaN(e)&&e>0}function x(e,t){return w(e)&&!isNaN(e)&&e<=t&&e>=0}v.displayName=h;var j=g,C=v}}]);
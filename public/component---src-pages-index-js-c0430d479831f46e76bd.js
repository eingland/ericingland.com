(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{270:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(168),o=a(263),l=a(276),s=a(277),c=a.n(s),d=function(){var e=l.data;return n.a.createElement(c.a,{style:{borderRadius:"50%"},fluid:e.placeholderImage.childImageSharp.fluid})},f=a(264),u=(a(34),a(171),a(62),a(36),a(53),a(10),a(27),a(61),a(96),a(52),a(60),a(31),a(19),a(21),a(43),a(11),a(8),a(4),a(16),a(44),a(35),a(32),a(155)),A=a(97),p=a.n(A);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){m(e,t,a[t])}))}return e}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function y(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function E(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var v=!1;try{v=!0}catch(I){}function S(e){return null===e?null:"object"===g(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function w(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?m({},e,t):{}}function O(e){var t=e.icon,a=e.mask,r=e.symbol,n=e.className,i=e.title,o=S(t),l=w("classes",[].concat(y(function(e){var t,a=e.spin,r=e.pulse,n=e.fixedWidth,i=e.inverse,o=e.border,l=e.listItem,s=e.flip,c=e.size,d=e.rotation,f=e.pull,u=(m(t={"fa-spin":a,"fa-pulse":r,"fa-fw":n,"fa-inverse":i,"fa-border":o,"fa-li":l,"fa-flip-horizontal":"horizontal"===s||"both"===s,"fa-flip-vertical":"vertical"===s||"both"===s},"fa-".concat(c),void 0!==c),m(t,"fa-rotate-".concat(d),void 0!==d),m(t,"fa-pull-".concat(f),void 0!==f),m(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(u).map((function(e){return u[e]?e:null})).filter((function(e){return e}))}(e)),y(n.split(" ")))),s=w("transform","string"==typeof e.transform?u.c.transform(e.transform):e.transform),c=w("mask",S(a)),d=Object(u.a)(o,h({},l,s,c,{symbol:r,title:i}));if(!d)return function(){var e;!v&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",o),null;var f=d.abstract,A={};return Object.keys(e).forEach((function(t){O.defaultProps.hasOwnProperty(t)||(A[t]=e[t])})),j(f[0],A)}O.displayName="FontAwesomeIcon",O.propTypes={border:p.a.bool,className:p.a.string,mask:p.a.oneOfType([p.a.object,p.a.array,p.a.string]),fixedWidth:p.a.bool,inverse:p.a.bool,flip:p.a.oneOf(["horizontal","vertical","both"]),icon:p.a.oneOfType([p.a.object,p.a.array,p.a.string]),listItem:p.a.bool,pull:p.a.oneOf(["right","left"]),pulse:p.a.bool,rotation:p.a.oneOf([90,180,270]),size:p.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.a.bool,symbol:p.a.oneOfType([p.a.bool,p.a.string]),title:p.a.string,transform:p.a.oneOfType([p.a.string,p.a.object]),swapOpacity:p.a.bool},O.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var j=function e(t,a){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof a)return a;var n=(a.children||[]).map((function(a){return e(t,a)})),i=Object.keys(a.attributes||{}).reduce((function(e,t){var r=a.attributes[t];switch(t){case"class":e.attrs.className=r,delete a.attributes.class;break;case"style":e.attrs.style=r.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var a,r=t.indexOf(":"),n=E(t.slice(0,r)),i=t.slice(r+1).trim();return n.startsWith("webkit")?e[(a=n,a.charAt(0).toUpperCase()+a.slice(1))]=i:e[n]=i,e}),{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[E(t)]=r}return e}),{attrs:{}}),o=r.style,l=void 0===o?{}:o,s=b(r,["style"]);return i.attrs.style=h({},i.attrs.style,l),t.apply(void 0,[a.tag,h({},i.attrs,s)].concat(y(n)))}.bind(null,n.a.createElement);t.default=function(){return n.a.createElement(o.a,null,n.a.createElement(f.a,{title:"Home"}),n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("div",{style:{maxWidth:"400px",margin:"0 auto",marginBottom:"1.45rem",justifyContent:"center",alignItems:"center"}},n.a.createElement(d,null)),n.a.createElement("h1",null,"Hi, I'm Eric Ingland!"),n.a.createElement("p",null,"I'm a ",n.a.createElement("b",null,"DevOps Engineer"),". I love all things computer science. Come have a look at my ",n.a.createElement(i.Link,{to:"/blog/"},"blog")," or my projects on ",n.a.createElement("a",{href:"http://github.com/eingland"},"Github"),"."),n.a.createElement("p",null,"Contact me at ",n.a.createElement("a",{href:"http://twitter.com/ericingland"},"@ericingland")," or by ",n.a.createElement("a",{href:"mailto:ingland.eric@gmail.com"},"email"),"."),n.a.createElement("ul",{style:{display:"flex",flex:1,alignItems:"center",justifyContent:"center"}},n.a.createElement("li",{className:"nav-link"},n.a.createElement("a",{href:"http://github.com/eingland"},n.a.createElement(O,{icon:["fab","github"],style:{color:"#000000"}}))),n.a.createElement("li",{className:"nav-link"},n.a.createElement("a",{href:"mailto:ingland.eric@gmail.com"},n.a.createElement(O,{icon:"envelope",style:{color:"#000000"}}))),n.a.createElement("li",{className:"nav-link"},n.a.createElement("a",{href:"http://twitter.com/ericingland"},n.a.createElement(O,{icon:["fab","twitter"],style:{color:"#000000"}}))),n.a.createElement("li",{className:"nav-link"},n.a.createElement("a",{href:"http://linkedin.com/in/ericingland"},n.a.createElement(O,{icon:["fab","linkedin"],style:{color:"#000000"}}))))))}},276:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHi1YWS80WVgzB//8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIAAwQREhD/2gAIAQEAAQUCQdNdUqLK995BOvSJ/8QAFhEAAwAAAAAAAAAAAAAAAAAAASAx/9oACAEDAQE/ARE//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAGRABAAIDAAAAAAAAAAAAAAAAAQARAhAg/9oACAEBAAY/Agl4q6GVz//EABsQAAICAwEAAAAAAAAAAAAAAAEhABEQMUFx/9oACAEBAAE/IbU6YGegGKAk9zuWXioWXxQRM//aAAwDAQACAAMAAAAQ18gA/8QAFREBAQAAAAAAAAAAAAAAAAAAESD/2gAIAQMBAT8QCY//xAAWEQEBAQAAAAAAAAAAAAAAAAABESD/2gAIAQIBAT8QbTH/xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhMVEQQf/aAAgBAQABPxAUyBChdEU/KXiKfCm0DloizmbrPORw07gNfIKlLozo5LCk/9k=","aspectRatio":0.9917355371900827,"src":"/static/b66097f2c74a5da04f9f2ee837962e54/8841e/profile.jpg","srcSet":"/static/b66097f2c74a5da04f9f2ee837962e54/954df/profile.jpg 100w,\\n/static/b66097f2c74a5da04f9f2ee837962e54/d278e/profile.jpg 200w,\\n/static/b66097f2c74a5da04f9f2ee837962e54/8841e/profile.jpg 360w","sizes":"(max-width: 360px) 100vw, 360px"}}}}}')},277:function(e,t,a){"use strict";a(11),a(8),a(4),a(61),a(172),a(173);var r=a(14);t.__esModule=!0,t.default=void 0;var n,i=r(a(95)),o=r(a(94)),l=r(a(169)),s=r(a(170)),c=r(a(0)),d=r(a(278)),f=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},u=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},A=Object.create({}),p=function(e){var t=f(e),a=u(t);return A[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,h=m&&window.IntersectionObserver,b=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),c.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function v(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)})).join("")+"<img "+c+o+l+a+r+t+i+n+s+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=c.default.createElement(x,(0,s.default)({src:t},n));return a.length>1?c.default.createElement("picture",null,r(a),i):i},x=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,d=e.onError,f=e.loading,u=e.draggable,A=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,s.default)({sizes:a,srcSet:r,src:n},A,{onLoad:o,onError:d,ref:t,loading:f,draggable:u,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));x.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!g&&h&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||m&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),a=u(t),A[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,l=void 0===o?{}:o,d=e.placeholderStyle,u=void 0===d?{}:d,A=e.placeholderClassName,p=e.fluid,g=e.fixed,m=e.backgroundColor,h=e.durationFadeIn,b=e.Tag,E=e.itemProp,w=e.loading,O=e.draggable,C=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,s.default)({opacity:C?1:0,transition:N?"opacity "+h+"ms":"none"},l),k="boolean"==typeof m?"lightgray":m,B={transitionDelay:h+"ms"},L=(0,s.default)({opacity:this.state.imgLoaded?0:1},N&&B,{},l,{},u),Q={title:t,alt:this.state.isVisible?"":a,style:L,className:A};if(p){var T=p,z=T[0];return c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),k&&c.default.createElement(b,{title:t,style:(0,s.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&B)}),z.base64&&c.default.createElement(I,{src:z.base64,spreadProps:Q,imageVariants:T,generateSources:S}),z.tracedSVG&&c.default.createElement(I,{src:z.tracedSVG,spreadProps:Q,imageVariants:T,generateSources:v}),this.state.isVisible&&c.default.createElement("picture",null,y(T),c.default.createElement(x,{alt:a,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,s.default)({alt:a,title:t,loading:w},z,{imageVariants:T}))}}))}if(g){var P=g,V=P[0],D=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:V.width,height:V.height},i);return"inherit"===i.display&&delete D.display,c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:D,ref:this.handleRef,key:"fixed-"+JSON.stringify(V.srcSet)},k&&c.default.createElement(b,{title:t,style:(0,s.default)({backgroundColor:k,width:V.width,opacity:this.state.imgLoaded?0:1,height:V.height},N&&B)}),V.base64&&c.default.createElement(I,{src:V.base64,spreadProps:Q,imageVariants:P,generateSources:S}),V.tracedSVG&&c.default.createElement(I,{src:V.tracedSVG,spreadProps:Q,imageVariants:P,generateSources:v}),this.state.isVisible&&c.default.createElement("picture",null,y(P),c.default.createElement(x,{alt:a,title:t,width:V.width,height:V.height,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,s.default)({alt:a,title:t,loading:w},V,{imageVariants:P}))}}))}return null},t}(c.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),R=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});C.propTypes={resolutions:N,sizes:R,fixed:d.default.oneOfType([N,d.default.arrayOf(N)]),fluid:d.default.oneOfType([R,d.default.arrayOf(R)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var k=C;t.default=k},278:function(e,t,a){e.exports=a(279)()},279:function(e,t,a){"use strict";a(22);var r=a(280);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,t,a,n,i,o){if(o!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:n};return a.PropTypes=a,a}},280:function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=component---src-pages-index-js-c0430d479831f46e76bd.js.map
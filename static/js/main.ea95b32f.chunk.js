(this["webpackJsonptravel-app"]=this["webpackJsonptravel-app"]||[]).push([[0],[,,,,,,,,,,function(t,e,n){t.exports={slider:"Slider_slider__2rYbJ",left:"Slider_left__1vL5u",right:"Slider_right__2xfSp",disabled:"Slider_disabled__3BUfD",cardList:"Slider_cardList__k1OHB",card:"Slider_card__1w-HO",title:"Slider_title__iQwdh",img:"Slider_img__2fnXM",description:"Slider_description__YQrYJ",cut:"Slider_cut__1PE2f",cut_title:"Slider_cut_title__3bQ8V",fullscreen:"Slider_fullscreen__3JUeo"}},,,,,,,,,function(t,e,n){t.exports={header:"Header_header__yfRMG",text:"Header_text__2omjz",input:"Header_input__19dIc",select:"Header_select__26v9o",authButton:"Header_authButton__31uWL"}},function(t,e,n){t.exports={countryInfo_container:"style_countryInfo_container__3zhV-",countryInfo_image:"style_countryInfo_image__3TQgv",countryInfo_content:"style_countryInfo_content__2QFcS"}},function(t,e,n){t.exports={footer:"Footer_footer__fIHO2",text:"Footer_text__36hFQ",iconGit:"Footer_iconGit__25jcv"}},,function(t,e,n){t.exports={box:"Rating_box__3vqim",starsTransparent:"Rating_starsTransparent__1X5uR",starsFill:"Rating_starsFill__1LU6q"}},,,,function(t,e,n){t.exports={authButton:"style_authButton__1JkmZ"}},,,function(t,e,n){t.exports={countryCard:"style_countryCard__1QPfE",countryCard_image:"style_countryCard_image__xUL5d"}},,,,,function(t,e,n){t.exports={countriesList:"style_countriesList__1Hl3g"}},function(t,e,n){t.exports={countryPage_container:"CountryPage_countryPage_container__3_MBv"}},function(t,e,n){t.exports={countryWidget_container:"style_countryWidget_container__170-D",weather_icon:"style_weather_icon__3SMWq"}},function(t,e,n){},function(t,e,n){t.exports={authPage:"AuthPage_authPage__2PuV4"}},,,,,function(t,e,n){},,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(32),i=n.n(c),s=(n(44),n(14)),o=n(2),u=n(3),l=n(5),h=n(4),d=n(7),g=n.n(d),j=n(9),p=n(15),f=n(6),b=n(19),O=n.n(b),v=n(27),m=n.n(v),x=n(33),_=n(0),y=r.a.createContext({isAutorized:!1}),k=y.Provider,w=y.Consumer,S=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={isAutorized:!1},t.auth0=new x.a.WebAuth({domain:"dev-hk6-pszx.us.auth0.com",clientID:"zmVr2e2KO9kKA7f885t7wIakLaZnX7TR",redirectUri:"http://localhost:3000/authPage",responseType:"token id_token",scope:"openid"}),t.authorize=function(){t.auth0.authorize()},t.logOut=function(){t.auth0.logout({returnTo:"http://localhost:3000/home"}),t.setState({isAutorized:!1})},t.handleAuth=function(){t.auth0.parseHash((function(e,n){n&&n.accessToken?t.setState({isAutorized:!0},(function(){t.props.history.push("/home")})):e&&t.setState({isAutorized:!1},(function(){t.props.history.push("/home")}))}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.isAutorized;return Object(_.jsx)(k,{value:{isAutorized:t,authorize:this.authorize,handleAuth:this.handleAuth,logOut:this.logOut,handlelogOut:this.handlelogOut},children:this.props.children})}}]),n}(a.Component);function C(t){return function(e){Object(l.a)(a,e);var n=Object(h.a)(a);function a(){return Object(o.a)(this,a),n.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return Object(_.jsx)(w,{children:function(n){return Object(_.jsx)(t,Object(s.a)(Object(s.a)({},n),e.props))}})}}]),a}(a.Component)}var L=C(function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.authorize,n=t.logOut,a=t.isAutorized;return Object(_.jsx)(_.Fragment,{children:a?Object(_.jsx)("button",{className:m.a.authButton,onClick:n,children:"\u0412\u044b\u0439\u0442\u0438"}):Object(_.jsx)("button",{className:m.a.authButton,onClick:e,children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})}}]),n}(r.a.PureComponent)),I=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).languages=[{title:"English",code:"en"},{title:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",code:"ru"},{title:"Fran\xe7ais",code:"fr"}],t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.value=this.props.value}},{key:"render",value:function(){var t=this.props,e=t.switchLanguage,n=t.func,a=this.props.language,r=void 0===a?"en":a,c=this.props.location;return Object(_.jsxs)("header",{className:O.a.header,children:[Object(_.jsx)(p.b,{to:"/home",children:Object(_.jsx)("p",{className:O.a.text,children:"Travel-APP"})}),"/home"===c.pathname.substring(0,5)?Object(_.jsx)("input",{className:O.a.input,onChange:n.search,type:"text",placeholder:"\u041e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0438 \u043c\u0435\u0447\u0442\u0443! \u041d\u0430\u0447\u043d\u0438 \u0441 \u043f\u043e\u0438\u0441\u043a\u0430!"}):null,Object(_.jsx)(L,{}),Object(_.jsx)("select",{className:O.a.select,onChange:e,value:r,children:this.languages.map((function(t,e){return Object(_.jsx)("option",{value:t.code,children:t.title},e)}))})]})}}]),n}(r.a.PureComponent),P=Object(f.g)(I),A=n(30),D=n.n(A),R=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.imageURL,n=t.name,a=t.capital;return Object(_.jsxs)("div",{className:D.a.countryCard,children:[Object(_.jsx)("div",{className:D.a.countryCard_image,style:{backgroundImage:"url(".concat(e,")")}}),Object(_.jsx)("h2",{children:n}),Object(_.jsx)("h3",{children:a})]})}}]),n}(r.a.PureComponent),E=n(35),F=n.n(E),N=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.children;return Object(_.jsx)("div",{className:F.a.countriesList,children:t})}}]),n}(r.a.PureComponent),z=function(){function t(){Object(o.a)(this,t),this.API_SERVER="https://travelapp-team43.herokuapp.com"}return Object(u.a)(t,[{key:"getCountries",value:function(){var t=Object(j.a)(g.a.mark((function t(){var e,n=arguments;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:"en",t.abrupt("return",fetch(this.API_SERVER+"/countries?lang="+e,{method:"GET",headers:{"Content-Type":"application/json","user-agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",Referer:this.API_SERVER}}).then((function(t){return t.json()})).catch((function(t){return Error(t)})));case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getCountry",value:function(){var t=Object(j.a)(g.a.mark((function t(e){var n,a=arguments;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:"en",t.abrupt("return",fetch(this.API_SERVER+"/countries/"+e+"?lang="+n,{method:"GET",headers:{"Content-Type":"application/json","user-agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",Referer:this.API_SERVER}}).then((function(t){return t.json()})).catch((function(t){return Error(t)})));case 2:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}]),t}(),M=function(t,e){return t.map((function(t){return t.hidden=!0,(t.name.toLowerCase().includes(e.toLowerCase())||t.capital.toLowerCase().includes(e.toLowerCase()))&&(t.hidden=!1),t}))},T=n(21),U=n.n(T),B=n.p+"static/media/git.fb8c5597.jpg",V=n.p+"static/media/logo.bc18f908.png",H=function(){return Object(_.jsxs)("footer",{className:U.a.footer,children:[Object(_.jsx)("p",{className:U.a.text,children:"React Course \xb7 RS School 2021Q1 \xb7 Task 2"}),Object(_.jsxs)("div",{className:U.a.iconGit,children:[Object(_.jsxs)("a",{href:"https://github.com/nikolai-minkevich",target:"_blank",rel:"noreferrer",children:[Object(_.jsx)("img",{src:B,alt:"git hub"}),Object(_.jsx)("p",{children:"Nikolai"})]}),Object(_.jsxs)("a",{href:"https://github.com/VaseninaNastya",target:"_blank",rel:"noreferrer",children:[Object(_.jsx)("img",{src:B,alt:"git hub"}),Object(_.jsx)("p",{children:"Nastya"})]}),Object(_.jsxs)("a",{href:"https://github.com/AV-63-dev",target:"_blank",rel:"noreferrer",children:[Object(_.jsx)("img",{src:B,alt:"git hub"}),Object(_.jsx)("p",{children:"Anatoliy"})]})]}),Object(_.jsx)("a",{href:"https://community-z.com/events/react-rsschool-2021/",target:"_blank",rel:"noreferrer",children:Object(_.jsx)("img",{src:V,alt:"rs school"})})]})},W=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).state={countries:[],language:"en"},t.search=function(e){var n=t.state.countries.concat(),a=M(n,e.target.value);t.setState({countries:a})},t.loadData=Object(j.a)(g.a.mark((function t(){var e,n,a=arguments;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"en",t.next=3,this.travelAppAPI.getCountries(e);case 3:n=t.sent,this.setState({countries:n});case 5:case"end":return t.stop()}}),t,this)}))),t.travelAppAPI=new z,t}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(t,e){e.language!==this.state.language&&this.loadData(this.state.language)}},{key:"componentDidMount",value:function(){var t=this.props.language;this.loadData(t),this.setState({language:t})}},{key:"render",value:function(){var t=this.state,e=t.countries,n=t.language,a=this.props.switchLanguage;return Object(_.jsxs)(r.a.Fragment,{children:[Object(_.jsx)(P,{switchLanguage:a,language:n,func:{search:this.search,installerLang:this.installerLang}}),Object(_.jsxs)(N,{children:[0===e.length?"Data is loading...":null,e.map((function(t,e){return!0!==t.hidden?Object(_.jsx)(p.b,{to:"/country/"+t.codeISO2,children:Object(_.jsx)(R,{imageURL:t.coverURL,name:t.name,capital:t.capital,codeISO2:t.codeISO2})},e):null}))]}),Object(_.jsx)(H,{})]})}}],[{key:"getDerivedStateFromProps",value:function(t,e){return t.language!==e.language?{language:t.language}:null}}]),n}(r.a.Component),G=n(20),K=n.n(G),Q=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.countryData;return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("div",{className:K.a.countryInfo_container,children:[Object(_.jsx)("div",{className:K.a.countryInfo_image,style:{backgroundImage:"url(".concat(t.coverURL,")")}}),Object(_.jsxs)("div",{className:K.a.countryInfo_content,children:[Object(_.jsx)("h2",{children:t.name}),Object(_.jsx)("h3",{children:t.capital}),Object(_.jsx)("div",{className:K.a.countryInfo_description,children:t.description})]})]})})}}]),n}(r.a.PureComponent),X=n(36),Z=n.n(X),q=(n(52),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.countryVideoUrl;return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("iframe",{src:t,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Video"})})}}]),n}(r.a.PureComponent)),J=n(37),Y=n.n(J),$=function(){function t(){Object(o.a)(this,t),this.API_SERVER="https://api.openweathermap.org"}return Object(u.a)(t,[{key:"getWeather",value:function(){var t=Object(j.a)(g.a.mark((function t(e,n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(this.API_SERVER+"/data/2.5/weather?q="+e+"&lang="+n+"&appid=5df764e0a76568cd5c6ab5a26f5ef004&units=metric",{method:"GET",headers:{"user-agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",Referer:this.API_SERVER}}).then((function(t){return t.json()})).catch((function(t){return Error(t)})));case 1:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()}]),t}(),tt=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={day:"",date:"",month:"",hour:"",min:"",sec:""},t.showTime=function(){var e=t.props,n=e.timezone,a=e.language,r=new Date,c=new Date(r.toLocaleString("en",{timeZone:n})),i=c.toLocaleString(a,{month:"long"}),s=c.toLocaleString(a,{weekday:"long"}),o=c.getHours(),u=c.getDate(),l=c.getMinutes(),h=c.getSeconds();t.setState({day:s,date:u,month:i,hour:o,min:l,sec:h})},t}return Object(u.a)(n,[{key:"addZero",value:function(t){return(parseInt(t,10)<10?"0":"")+t}},{key:"componentDidMount",value:function(){this.interval=setInterval(this.showTime,1e3)}},{key:"render",value:function(){var t=this.state,e=t.day,n=t.date,a=t.month,r=t.hour,c=t.min,i=t.sec;return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("span",{children:e}),Object(_.jsxs)("span",{children:[n," ",a]}),Object(_.jsxs)("span",{children:[r,Object(_.jsx)("span",{children:":"}),this.addZero(c),Object(_.jsx)("span",{children:":"}),this.addZero(i)]})]})}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}}]),n}(r.a.PureComponent),et=n(38),nt=n.n(et),at=function(){function t(){Object(o.a)(this,t),this.API_SERVER="https://v6.exchangerate-api.com"}return Object(u.a)(t,[{key:"getCurrency",value:function(){var t=Object(j.a)(g.a.mark((function t(e){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(this.API_SERVER+"/v6/49a5bf66bd8662e965a6a21b/latest/"+e,{method:"GET",headers:{"user-agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",Referer:this.API_SERVER}}).then((function(t){return t.json()})).catch((function(t){return Error(t)})));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}]),t}(),rt=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).state={currencyData:""},t.loadData=Object(j.a)(g.a.mark((function t(){var e,n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.currency,t.next=3,this.currencyAPI.getCurrency(e);case 3:n=t.sent,this.setState({currencyData:n.conversion_rates});case 5:case"end":return t.stop()}}),t,this)}))),t.currencyAPI=new at,t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){var t=this.state.currencyData;return Object(_.jsx)("div",{className:nt.a.currency_container,children:t.EUR&&t.USD&&t.RUB?Object(_.jsxs)("span",{children:["\u20ac ",t.EUR.toFixed(2),"; $ ",t.USD.toFixed(2),"; \u20bd ",t.RUB.toFixed(2)]}):null})}}]),n}(r.a.PureComponent),ct=(n(53),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).state={weatherData:"",lang:""},t.loadData=Object(j.a)(g.a.mark((function t(){var e,n,a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.countryCapital,n=this.state.language,t.next=4,this.weatherAPI.getWeather(e,n);case 4:a=t.sent,this.setState({weatherData:a});case 6:case"end":return t.stop()}}),t,this)}))),t.weatherAPI=new $,t}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(t,e){e.language!==this.state.language&&this.loadData()}},{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){var t,e,n=this.props,a=n.language,r=n.timezone,c=n.currency,i=this.state.weatherData,s="";return i&&(t="".concat(Math.floor(i.main.temp),"\xb0C"),e=i.weather[0].description,s="owf-".concat(i.weather[0].id," owf")),Object(_.jsxs)("div",{className:Y.a.countryWidget_container,children:[Object(_.jsxs)("span",{children:[" ",t]}),Object(_.jsxs)("span",{children:[" ",e]}),Object(_.jsx)("i",{className:s}),Object(_.jsx)(tt,{language:a,timezone:r}),Object(_.jsx)(rt,{currency:c})]})}}],[{key:"getDerivedStateFromProps",value:function(t,e){return t.language!==e.language?{language:t.language}:null}}]),n}(r.a.PureComponent)),it=n(22);var st=function(t){var e=r.a.createRef(null);return Object(_.jsx)("div",{className:"App",children:Object(_.jsx)(it.c,{children:Object(_.jsx)(it.a,{instanceRef:e,state:{center:t.capitalCoordinates,zoom:4},onLoad:function(n){return function(n){if(e&&e.current){var a=new n.ObjectManager;n.borders.load("001",{lang:t.language,quality:2}).then((function(n){var r=n.features.reduce((function(t,e){var n=e.properties.iso3166;return e.id=n,e.options={fillOpacity:.6,strokeColor:"#FFF",strokeOpacity:.5},t[n]=e,t}),{})[t.codeISO2];r.options.fillColor="#FF0000",n.features=[],n.features.push(r),a.add(n),e.current.geoObjects.add(a)}))}}(n)},modules:["borders","ObjectManager"],children:Object(_.jsx)(it.b,{geometry:t.capitalCoordinates})})})})},ot=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight((function(t,e){return e(t)}),t)}},ut=n(17),lt=n.n(ut),ht=n(10),dt=n.n(ht),gt=n(23),jt=n.n(gt),pt=function(t){var e=t.rating,n=t.cursor,a={width:"".concat(21.8*e,"px")};return Object(_.jsxs)("div",{className:jt.a.box,style:n,children:[Object(_.jsx)("div",{className:jt.a.starsTransparent}),Object(_.jsx)("p",{children:e}),Object(_.jsx)("div",{className:jt.a.starsFill,style:a})]})},ft=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).activeBtn=function(t,e){return{left:0!==t[0],right:t[t.length-1]!==e.length-1}},a.initBtn=function(){var t=a.state.attractions,e=a.state.mask,n=a.activeBtn(e,t),r=n.left,c=n.right;a.setState({left:r,right:c})},a.handlerCardList=function(t){var e=t.target.dataset.vektor,n=a.state.attractions,r=a.state.mask.concat();if("left"===e&&0!==r[0])for(var c=0;c<r.length;c++)r[c]=r[c]-1;if("right"===e&&r[r.length-1]!==n.length-1)for(var i=0;i<r.length;i++)r[i]=r[i]+1;var s=a.activeBtn(r,n),o=s.left,u=s.right;a.setState({mask:r,left:o,right:u})},a.startFullscreen=function(t){var e=t.target.closest(".data-index").dataset.index,n=a.state.attractions,r=[Number(e)],c=a.activeBtn(r,n),i=c.left,s=c.right;document.getElementById("slider__64bit").webkitRequestFullScreen(),a.setState({mask:r,left:i,right:s,fullscreen:!0})},a.stopFullscreen=function(){if(!document.webkitFullscreenElement){var t=a.state.attractions,e=a.state.mask.concat(),n=e[0];if(0===n)for(var r=0;r<a.state.maskLength;r++)e[r]=r;else if(n===t.length-1)for(var c=0;c<a.state.maskLength;c++)e[c]=c+t.length-a.state.maskLength;else for(var i=0;i<a.state.maskLength;i++)e[i]=i+n-1;var s=a.activeBtn(e,t),o=s.left,u=s.right;a.setState({mask:e,left:o,right:u,fullscreen:!1})}},a.state={attractions:t.attractions,mask:[0,1,2],maskLength:3,left:!1,right:!1,fullscreen:!1},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.initBtn(),document.addEventListener("webkitfullscreenchange",this.stopFullscreen)}},{key:"render",value:function(){var t=this,e=this.state,n=e.attractions,a=e.mask,r=e.left,c=e.right,i=e.fullscreen;return Object(_.jsxs)("section",{className:lt()(dt.a.slider,i?dt.a.fullscreen:null),id:"slider__64bit",children:[Object(_.jsx)("div",{className:lt()(dt.a.left,r?null:dt.a.disabled),onClick:this.handlerCardList,"data-vektor":"left",children:"\u25c4"}),Object(_.jsx)("div",{className:dt.a.cardList,children:n.map((function(e,n){return a.includes(n)?Object(_.jsxs)("div",{className:"".concat(dt.a.card," data-index"),onClick:t.startFullscreen,"data-index":n,children:[Object(_.jsx)("p",{className:lt()(dt.a.title,dt.a.cut_title),children:e.title}),Object(_.jsx)("div",{className:dt.a.img,style:{backgroundImage:"url(".concat(e.imageURL,")")}}),i?Object(_.jsx)(pt,{rating:3.5,onClick:function(){},cursor:{cursor:"pointer"}}):Object(_.jsx)(pt,{rating:3.5}),Object(_.jsx)("p",{className:lt()(dt.a.description,dt.a.cut),children:e.description})]},n):null}))}),Object(_.jsx)("div",{className:lt()(dt.a.right,c?null:dt.a.disabled),onClick:this.handlerCardList,"data-vektor":"right",children:"\u25ba"})]})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("webkitfullscreenchange",this.stopFullscreen)}}],[{key:"getDerivedStateFromProps",value:function(t,e){return t.attractions!==e.attractions?{attractions:t.attractions}:null}}]),n}(a.Component),bt=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).state={countryData:"",language:"en"},t.loadData=function(){var t=Object(j.a)(g.a.mark((function t(e){var n,a,r=arguments;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:"en",t.next=3,this.travelAppAPI.getCountry(e,n);case 3:a=t.sent,this.setState({countryData:a});case 5:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),t.travelAppAPI=new z,t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.match.params.codeISO2,e=this.props.language;this.loadData(t,e)}},{key:"componentDidUpdate",value:function(t,e){var n=this.props.match.params.codeISO2;e.language!==this.state.language&&this.loadData(n,this.state.language)}},{key:"render",value:function(){var t=this.state,e=t.countryData,n=t.language,a=e.videoURL,c=e.capital,i=e.timeZone,s=e.capitalCoordinates,o=e.codeISO2,u=e.currency,l=e.attractions,h=this.props.switchLanguage;return Object(_.jsxs)(r.a.Fragment,{children:[Object(_.jsx)(P,{switchLanguage:h,language:n}),0===e.length?"Data is loading...":null,Object(_.jsxs)("div",{className:Z.a.countryPage_container,children:[e?Object(_.jsx)(Q,{countryData:e}):null,c&&i&&u?Object(_.jsx)(ct,{language:n,timezone:i,countryCapital:c,currency:u}):null,a?Object(_.jsx)(q,{countryVideoUrl:a}):null,l?Object(_.jsx)(ft,{attractions:l}):null,s?Object(_.jsx)(st,{capitalCoordinates:[s.lat,s.lon],language:n,codeISO2:o}):null]}),Object(_.jsx)(H,{})]})}}],[{key:"getDerivedStateFromProps",value:function(t,e){return t.language!==e.language?{language:t.language}:null}}]),n}(r.a.Component),Ot=ot(f.g,C)(bt),vt="travelApp43_language",mt=["en","ru","fr"],xt=mt[0],_t=function(){function t(){Object(o.a)(this,t),this.load()}return Object(u.a)(t,[{key:"load",value:function(){return this.language=localStorage.getItem(vt),this.language||(this.language=xt,this.save()),this.get()}},{key:"save",value:function(){return localStorage.setItem(vt,this.language),this.get()}},{key:"set",value:function(t){return mt.includes(t)?(this.language=t,this.save(),this.get()):this.get()}},{key:"get",value:function(){return this.language}}]),t}(),yt=n(39),kt=n.n(yt),wt=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.handleAuth;t&&t()}},{key:"render",value:function(){return Object(_.jsx)("div",{className:kt.a.authPage,children:"\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430"})}}]),n}(r.a.Component),St=ot(f.g,C)(wt),Ct=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).switchLanguage=function(e){t.languageSwitcher.set(e.target.value),t.setState({language:t.languageSwitcher.get()})},t.languageSwitcher=new _t,t.state={language:t.languageSwitcher.get()},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.props.history,n=this.state.language;return Object(_.jsx)(S,{history:e,children:Object(_.jsxs)(f.d,{children:[Object(_.jsx)(f.b,{history:e,path:"/home",render:function(e){return Object(_.jsx)(W,Object(s.a)(Object(s.a)({},e),{},{language:n,switchLanguage:t.switchLanguage}))}}),Object(_.jsx)(f.b,{history:e,path:"/authPage",render:function(e){return Object(_.jsx)(St,Object(s.a)(Object(s.a)({},e),{},{language:n,switchLanguage:t.switchLanguage}))}}),Object(_.jsx)(f.b,{history:e,path:"/home",render:function(e){return Object(_.jsx)(W,Object(s.a)(Object(s.a)({},e),{},{language:n,switchLanguage:t.switchLanguage}))}}),Object(_.jsx)(f.b,{history:e,path:"/country/:codeISO2",render:function(e){return Object(_.jsx)(Ot,Object(s.a)(Object(s.a)({},e),{},{language:n,switchLanguage:t.switchLanguage}))}}),Object(_.jsx)(f.a,{from:"/",to:"/home"})]})})}}]),n}(r.a.PureComponent),Lt=Object(f.g)(Ct),It=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),r(t),c(t),i(t)}))};i.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(p.a,{children:Object(_.jsx)(Lt,{})})}),document.getElementById("root")),It()}],[[54,1,2]]]);
//# sourceMappingURL=main.ea95b32f.chunk.js.map
(this["webpackJsonpgolf-gamblers-front-end"]=this["webpackJsonpgolf-gamblers-front-end"]||[]).push([[0],{106:function(e,t,n){},128:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(11),a=n.n(i),o=(n(106),n(48)),s=n(4),l=n(30),u=n(18),j=n(21),b=n.n(j),d=n(29),h=n(10),O=n(9),x=(n(71),n(80),n(129),n(84)),v=n(3),p=O.a.apps.length?O.a.app():O.a.initializeApp(x),f=p.firestore(),g=p.functions("us-central1"),m=p.auth();m.useEmulator("http://localhost:9099/"),f.useEmulator("localhost",8080),g.useEmulator("localhost",5001);var w=new Map,y=Object(c.createContext)(null),C=Object(c.createContext)(void 0);function S(e){var t=Object(c.useState)(null),n=Object(h.a)(t,2),r=n[0],i=n[1],a=Object(c.useState)(void 0),o=Object(h.a)(a,2),s=o[0],l=o[1];return Object(c.useEffect)((function(){var e=[],t=m.onAuthStateChanged((function(t){if(t){var n=f.collection("users").doc(t.uid).collection("private").doc("account-data").onSnapshot((function(e){if(e.exists){var t=e.data();"Basic"===(null===t||void 0===t?void 0:t.subscriptionState)&&l({subscriptionLevel:"Basic"})}}));e.push(n)}else l(void 0);i(t)}));return e.push(t),function(){for(var t=0;t<e.length;t++){(0,e[t])()}}}),[]),Object(v.jsx)(y.Provider,{value:r,children:Object(v.jsx)(C.Provider,{value:s,children:e.children})})}function _(){return Object(c.useContext)(y)}function k(){return Object(c.useContext)(C)}function A(){return f}function I(){w.forEach((function(e){e()})),w.clear()}function D(){return N.apply(this,arguments)}function N(){return(N=Object(d.a)(b.a.mark((function e(){var t,n,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g.httpsCallable("ext-firestore-stripe-subscriptions-createPortalLink"),e.next=3,t({returnUrl:window.location.origin});case 3:return n=e.sent,c=n.data,window.location.assign(c.url),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W={signInFlow:"popup",signInOptions:[O.a.auth.GoogleAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(){return!1}}},E=n(64),M=n(168),T=n(170),B=n(87),P=n.n(B),H=n(86),F=n.n(H),L=n(68),R=n(66);function Y(e,t,n,c){return J.apply(this,arguments)}function J(){return(J=Object(d.a)(b.a.mark((function e(t,n,c,r){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.enqueueSnackbar("Redirecting to Stripe...",{variant:"info"}),e.next=3,n.collection("customers").doc(c.uid).collection("checkout_sessions").add({price:R.subscription_prices_keys.basic,success_url:window.location.origin,cancel_url:window.location.origin});case 3:e.sent.onSnapshot((function(e){var n=e.data();if(n){var c=n.error,r=n.sessionId;c&&alert("An error occured: "+c.message),r&&t.redirectToCheckout({sessionId:r})}}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){var e=_(),t=A(),n=Object(E.useStripe)(),c=k(),r=Object(L.b)();function i(){return(i=Object(d.a)(b.a.mark((function c(){return b.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:e&&n&&Y(n,t,e,r);case 1:case"end":return c.stop()}}),c)})))).apply(this,arguments)}function a(){return(a=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.enqueueSnackbar("Redirecting to Stripe...",{variant:"info"}),e.next=3,D();case 3:return e.abrupt("return",!0);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var o="outlined";return Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"Account Information"}),Object(v.jsx)("div",{children:Object(v.jsx)(M.a,{variant:o,fullWidth:!0,label:"Email",value:null===e||void 0===e?void 0:e.email,disabled:!0})}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{children:Object(v.jsx)(M.a,{variant:o,fullWidth:!0,label:"Full Name",value:null===e||void 0===e?void 0:e.displayName,disabled:!0})}),Object(v.jsx)("br",{}),Object(v.jsx)(T.a,{variant:o,fullWidth:!0,startIcon:Object(v.jsx)(F.a,{}),onClick:function(){},disabled:!0,children:"Save"})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"Subscription"}),Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{children:["Subscription Level: ",(null===c||void 0===c?void 0:c.subscriptionLevel)?c.subscriptionLevel:"None"]}),Object(v.jsx)("br",{}),c?Object(v.jsx)("div",{children:Object(v.jsx)(T.a,{variant:o,fullWidth:!0,onClick:function(){return a.apply(this,arguments)},children:"Manage Subscription"})}):Object(v.jsx)("div",{children:Object(v.jsx)(T.a,{variant:o,fullWidth:!0,onClick:function(){return i.apply(this,arguments)},children:"Subscribe"})})]})]}),Object(v.jsx)("br",{}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"Account Actions"}),Object(v.jsx)("div",{children:Object(v.jsx)(T.a,{variant:o,fullWidth:!0,onClick:function(){I(),m.signOut()},children:"Logout"})}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{children:Object(v.jsx)(T.a,{variant:o,fullWidth:!0,startIcon:Object(v.jsx)(P.a,{}),onClick:function(){var t=window.confirm("Are you sure?");e&&t&&function(e){I(),e.delete().then((function(){return console.log("Successfully deleted account")})).catch((function(e){return console.error(e)}))}(e)},color:"secondary",children:"Delete Account"})})]})]})}var G=n(88),q=n.n(G);function V(){var e=Object(u.g)(),t=m,n=_(),c=void 0;if(e&&e.location&&e.location.state){var r=e.location.state;r&&r.from&&r.from.pathname&&(c=r.from.pathname)}return n?c&&"/login"!==c?Object(v.jsx)(u.a,{to:c}):Object(v.jsx)(u.a,{to:"/"}):Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{style:{height:"20px"},children:"  "}),Object(v.jsx)("div",{id:"firebaseui-auth-container",children:Object(v.jsx)(q.a,{uiConfig:W,firebaseAuth:t})})]})}var K={color:"white",theme_color:"#ffd700",background_color:"#728a75"},Q=Object(c.createContext)(K);function z(){return Object(c.useContext)(Q)}function X(){var e=_(),t=k(),n=z();return Object(v.jsx)("div",{children:t?Object(v.jsxs)("div",{children:[Object(v.jsxs)("h3",{children:["Welcome ",null===e||void 0===e?void 0:e.displayName," !"]}),Object(v.jsx)("h4",{children:"Events"}),Object(v.jsx)("div",{children:Object(v.jsx)(l.b,{to:"/create-event",style:{color:n.background_color},children:Object(v.jsx)(T.a,{"aria-label":"create-event",color:"inherit",children:"Create Event"})})})]}):Object(v.jsx)("div",{children:Object(v.jsx)("p",{children:"Update your account's subscription to see this content."})})})}var Z=n(163),$=n(164),ee=n.p+"static/media/pwa_share_menu_ios.4ab46d8d.jpeg",te=n.p+"static/media/pwa_installation_ios.021de36f.jpeg",ne=n.p+"static/media/pwa_add_bookmark_ios.5f5b13b6.jpg",ce=n.p+"static/media/pwa_installed_ios.20234b25.jpeg";function re(){return Object(v.jsx)("div",{style:{textAlign:"left"},children:Object(v.jsxs)(Z.a,{container:!0,spacing:3,children:[Object(v.jsx)(Z.a,{item:!0,xs:1}),Object(v.jsxs)(Z.a,{item:!0,xs:10,children:[Object(v.jsxs)("p",{children:["This application is a ",Object(v.jsx)("b",{children:"P"}),"rogressive ",Object(v.jsx)("b",{children:"W"}),"eb ",Object(v.jsx)("b",{children:"A"}),"pplication or ",Object(v.jsx)("b",{children:"PWA"})," for short.",Object(v.jsx)("br",{}),"Because of this, the aplication can be installed locally on phone or desktop computer.",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"Note: Updates occur regularly and the app may need to be reinstalled"]}),Object(v.jsx)($.a,{}),Object(v.jsx)("h3",{children:"Install PWA on IOS"}),Object(v.jsx)("h5",{children:"1. Select the share icon at the bottom"}),Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:ee,alt:"Error",width:"200px"})}),Object(v.jsx)("h5",{children:'2. Select "Add to Home Screen"'}),Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:ne,alt:"Error",width:"200px"})}),Object(v.jsx)("h5",{children:'3. Select "Add"'}),Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:te,alt:"Error",width:"200px"})}),Object(v.jsx)("h5",{children:"Done!"}),Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:ce,alt:"Error",width:"200px"})}),Object(v.jsx)("div",{})]}),Object(v.jsx)(Z.a,{item:!0,xs:1})]})})}var ie=n(165),ae=n(166),oe=n(91),se=n.n(oe),le=n(90),ue=n.n(le),je=n.p+"static/media/logo.e24ff742.svg";function be(e){return Object(v.jsx)(l.b,{to:"/",style:{color:"white"},children:Object(v.jsx)("img",{src:je,alt:"HOME",height:"24px"})})}function de(){var e=z();return Object(v.jsx)(ie.a,{position:"static",style:{backgroundColor:e.background_color},children:Object(v.jsxs)(ae.a,{children:[Object(v.jsx)(be,{}),Object(v.jsx)("div",{style:{flexGrow:1}}),Object(v.jsx)(l.b,{to:"/install",style:{color:"white"},children:Object(v.jsx)(ue.a,{"aria-label":"install",color:"inherit"})}),Object(v.jsx)("div",{style:{width:10}}),Object(v.jsx)(l.b,{to:"/account",style:{color:"white"},children:Object(v.jsx)(se.a,{"aria-label":"account",color:"inherit"})}),Object(v.jsx)("div",{style:{width:10}}),Object(v.jsx)(l.b,{to:"/counter",style:{color:"white"},children:"Counter"})]})})}var he=n(67),Oe=n(41),xe=function(){function e(){Object(he.a)(this,e)}return Object(Oe.a)(e,null,[{key:"getDateInYYYY_MM_DD_Format",value:function(e){return e.toISOString().substring(0,10)}},{key:"getTimeInHH_MM_Format",value:function(e){var t=e.getHours(),n=e.getMinutes();return t.toString()+":"+n.toString()}},{key:"convertDateTimeIntoDate",value:function(e,t){var n=new Date(e),c=t.split(":"),r=parseInt(c[0]);r?n.setHours(0):n.setHours(r);var i=parseInt(c[1]);return i?n.setMinutes(0):n.setMinutes(i),e}}]),e}(),ve=n(172),pe=n(167),fe=n(92),ge=n.n(fe),me=[],we=Object(c.createContext)({state:me,update:function(e){me=e}});function ye(e){var t=A(),n=(Object(c.useContext)(we),Object(c.useState)("")),r=Object(h.a)(n,2),i=(r[0],r[1],Object(c.useState)("")),a=Object(h.a)(i,2),o=a[0],s=a[1],l=Object(c.useState)([]),u=Object(h.a)(l,2),j=u[0],O=u[1],x=Object(c.useState)((new Date).getUTCMilliseconds()),p=Object(h.a)(x,2),f=(p[0],p[1],Object(c.useState)()),g=Object(h.a)(f,2),m=g[0],w=g[1];function y(){return(y=Object(d.a)(b.a.mark((function e(n){var c,r,i,a,o,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.collection("courses").where("name",">=",n).where("name","<=",n+"\uf8ff").limit(25),e.next=3,c.get();case 3:for(r=e.sent,i=[],a=0;a<r.docs.length;a++)o=r.docs[a],s=o.data(),i.push({id:o.id,value:s});O(i);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"Select Course"}),Object(v.jsx)("div",{children:Object(v.jsx)(M.a,{type:"text",value:o,onChange:function(e){s(e.target.value),m&&clearTimeout(m),w(setTimeout((function(){!function(e){y.apply(this,arguments)}(e.target.value)}),400))},InputProps:{startAdornment:Object(v.jsx)(ve.a,{position:"start",children:Object(v.jsx)(ge.a,{})})}})}),Object(v.jsxs)("div",{children:[Object(v.jsx)("br",{}),j.map((function(t,n){var c=t.value;return Object(v.jsxs)("div",{children:[Object(v.jsxs)(pe.a,{onClick:function(){return n=t.id,r=c.name,e.selectCourse(n,r),void e.goBack();var n,r},children:[Object(v.jsx)("b",{children:c.name}),Object(v.jsxs)("div",{children:[c.location.country,", ",c.location.city," ",c.location.state]})]}),Object(v.jsx)("br",{})]},"course-"+n)}))]})]})}function Ce(){return Object(v.jsx)("div",{})}function Se(){var e=Object(c.useState)(""),t=Object(h.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(""),a=Object(h.a)(i,2),o=a[0],s=a[1],l=Object(c.useState)(""),u=Object(h.a)(l,2),j=(u[0],u[1]),b=Object(c.useState)(18),d=Object(h.a)(b,2),O=(d[0],d[1],Object(c.useState)(1)),x=Object(h.a)(O,2),p=(x[0],x[1],Object(c.useState)(5)),f=Object(h.a)(p,2),g=f[0],m=f[1],w=Object(c.useState)(xe.getDateInYYYY_MM_DD_Format(new Date)),y=Object(h.a)(w,2),C=y[0],S=y[1],_=Object(c.useState)(xe.getTimeInHH_MM_Format(new Date)),k=Object(h.a)(_,2),A=k[0],I=k[1],D=Object(c.useState)(!1),N=Object(h.a)(D,2),W=N[0],E=N[1],B=Object(c.useState)(!1),P=Object(h.a)(B,2),H=P[0];P[1];function F(e){r(e.target.value)}function L(e){I(e.target.value)}return W?Object(v.jsx)(ye,{goBack:function(){E(!1)},selectCourse:function(e,t){j(e),s(t)}}):H?Object(v.jsx)(Ce,{}):Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"Create Event"}),Object(v.jsx)("div",{children:Object(v.jsx)(M.a,{value:n,label:"Event Name",onChange:F})}),Object(v.jsx)("div",{children:Object(v.jsx)(M.a,{value:o,label:"Course",onChange:F,onFocus:function(e){E(!0)}})}),Object(v.jsx)("div",{children:Object(v.jsx)(M.a,{type:"number",value:g,label:"Max Down",onChange:function(e){var t=parseInt(e.target.value);NaN!==t&&(console.log(t),m(t))}})}),Object(v.jsx)("div",{children:Object(v.jsx)(M.a,{type:"date",value:C,label:"Date",onChange:function(e){S(e.target.value)}})}),Object(v.jsx)("div",{children:Object(v.jsx)(M.a,{type:"time",value:A,label:"Time",onChange:L})}),Object(v.jsx)("div",{children:Object(v.jsx)(M.a,{type:"time",value:A,label:"Time",onChange:L})}),Object(v.jsx)(T.a,{children:"Create Event"})]})}var _e=n(58),ke=_e.c,Ae=n(59);function Ie(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var De=Object(Ae.b)("counter/fetchCount",function(){var e=Object(d.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ie(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Ne=Object(Ae.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(De.pending,(function(e){e.status="loading"})).addCase(De.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),We=Ne.actions,Ee=We.increment,Me=We.decrement,Te=We.incrementByAmount,Be=function(e){return e.counter.value},Pe=Ne.reducer,He=n(35),Fe=n.n(He);function Le(){var e=ke(Be),t=Object(_e.b)(),n=Object(c.useState)("2"),r=Object(h.a)(n,2),i=r[0],a=r[1],o=Number(i)||0;return Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:Fe.a.row,children:[Object(v.jsx)("button",{className:Fe.a.button,"aria-label":"Decrement value",onClick:function(){return t(Me())},children:"-"}),Object(v.jsx)("span",{className:Fe.a.value,children:e}),Object(v.jsx)("button",{className:Fe.a.button,"aria-label":"Increment value",onClick:function(){return t(Ee())},children:"+"})]}),Object(v.jsxs)("div",{className:Fe.a.row,children:[Object(v.jsx)("input",{className:Fe.a.textbox,"aria-label":"Set increment amount",value:i,onChange:function(e){return a(e.target.value)}}),Object(v.jsx)("button",{className:Fe.a.button,onClick:function(){return t(Te(o))},children:"Add Amount"}),Object(v.jsx)("button",{className:Fe.a.asyncButton,onClick:function(){return t(De(o))},children:"Add Async"}),Object(v.jsx)("button",{className:Fe.a.button,onClick:function(){return t((e=o,function(t,n){Be(n())%2===1&&t(Te(e))}));var e},children:"Add If Odd"})]})]})}function Re(){return Object(v.jsx)("div",{style:{textAlign:"center"},children:Object(v.jsxs)(l.a,{children:[Object(v.jsx)(de,{}),Object(v.jsxs)(u.d,{children:[Object(v.jsx)(u.b,{path:"/login",children:Object(v.jsx)(V,{})}),Object(v.jsx)(u.b,{path:"/install",children:Object(v.jsx)(re,{})}),Object(v.jsx)(u.b,{path:"/counter",children:Object(v.jsx)(Le,{})}),Object(v.jsx)(Ye,{path:"/account",children:Object(v.jsx)(U,{})}),Object(v.jsx)(Ye,{path:"/create-event",children:Object(v.jsx)(Se,{})}),Object(v.jsx)(Ye,{path:"/",children:Object(v.jsx)(X,{})}),Object(v.jsx)(Ye,{path:"*",children:Object(v.jsx)(u.a,{to:"/"})})]})]})})}function Ye(e){var t=e.children,n=Object(s.a)(e,["children"]),c=_();return Object(v.jsx)(u.b,Object(o.a)(Object(o.a)({},n),{},{render:function(e){var n=e.location;return c?t:Object(v.jsx)(u.a,{to:{pathname:"/login",state:{from:n}}})}}))}var Je=n(94),Ue=Object(Je.a)(R.publishableKey);var Ge=function(){return Object(v.jsx)(S,{children:Object(v.jsx)(E.Elements,{stripe:Ue,children:Object(v.jsx)(L.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},children:Object(v.jsx)(Re,{})})})})},qe=Object(Ae.a)({reducer:{counter:Pe}}),Ve=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ke(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(_e.a,{store:qe,children:Object(v.jsx)(Ge,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Ve?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ke(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ke(t,e)}))}}()},35:function(e,t,n){e.exports={row:"Counter_row__1C_4f",value:"Counter_value__1d0te",button:"Counter_button__1xpSV",textbox:"Counter_textbox__3ODaX",asyncButton:"Counter_asyncButton__2UAr3 Counter_button__1xpSV"}},66:function(e){e.exports=JSON.parse('{"subscription_prices_keys":{"basic":"price_1IRogLJgYHulMnJqhsDpckaT"},"subscription_product_key":{"basic":"prod_J3wZChslCkhQrI"},"publishableKey":"pk_live_51IRo7cJgYHulMnJqhlqht9joA1aDyACvpIeihyPWZKohmMbFCy74bFyrOvCNwLCf2clQJ0CAaiHVnmpalhctLIiR00n4hOXCTv"}')},84:function(e){e.exports=JSON.parse('{"apiKey":"AIzaSyBGWMEAFhrI37uH1NpQFZGVxF8LWuT2XA0","authDomain":"golf-gamblers.firebaseapp.com","projectId":"golf-gamblers","storageBucket":"golf-gamblers.appspot.com","messagingSenderId":"537485515557","appId":"1:537485515557:web:621eff503cd374fa3d58cc","measurementId":"G-DYSPGQCB9M"}')}},[[128,1,2]]]);
//# sourceMappingURL=main.19be21b7.chunk.js.map
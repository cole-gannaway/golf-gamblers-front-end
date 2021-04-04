(this["webpackJsonpgolf-gamblers-front-end"]=this["webpackJsonpgolf-gamblers-front-end"]||[]).push([[0],{113:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(14),o=n.n(r),s=(n(92),n(62)),a=n(4),l=n(30),u=n(15),j=n(33),d=n.n(j),b=n(45),h=n(21),O=n(152),f=n(7),v=(n(60),n(67),n(115),n(71)),p=n(3),x=f.a.apps.length?f.a.app():f.a.initializeApp(v),g=x.firestore(),w=x.auth();w.setPersistence(f.a.auth.Auth.Persistence.LOCAL);var m=x.functions("us-central1"),k=new Map,y=Object(c.createContext)(null),C=Object(c.createContext)(void 0);function S(e){var t=Object(c.useState)(null),n=Object(h.a)(t,2),i=n[0],r=n[1],o=Object(c.useState)(void 0),s=Object(h.a)(o,2),a=s[0],l=s[1];return Object(c.useEffect)((function(){w.onAuthStateChanged((function(e){e?function(e){var t=Object(O.a)();k.set(t,e)}(g.collection("users").doc(e.uid).collection("user_only").doc("account_data").onSnapshot((function(e){if(e.exists){var t=e.data();"basic"===(null===t||void 0===t?void 0:t.subscriptionState)&&l({subscriptionLevel:"basic"})}}))):l(void 0);r(e)}))}),[]),Object(p.jsx)(y.Provider,{value:i,children:Object(p.jsx)(C.Provider,{value:a,children:e.children})})}function I(){return Object(c.useContext)(y)}function A(){return Object(c.useContext)(C)}function W(){k.forEach((function(e){e()})),k.clear()}function _(e){return E.apply(this,arguments)}function E(){return(E=Object(b.a)(d.a.mark((function e(t){var n,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.httpsCallable("ext-firestore-stripe-subscriptions-createPortalLink"),e.next=3,n({returnUrl:window.location.origin});case 3:return c=e.sent,i=c.data,window.location.assign(i.url),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}f.a.auth.EmailAuthProvider.PROVIDER_ID;var P=n(52),L=n(150),D=n(151),J=n(147),N=n(74),F=n.n(N),R=n(75),T=n.n(R),B=n(76),M=n.n(B),U=n(73),V=n.n(U),G=n(53),H=n(54);function K(){var e=I(),t=g,n=Object(P.useStripe)(),i=m,r=A(),o=Object(c.useState)(null===e||void 0===e?void 0:e.displayName),s=Object(h.a)(o,2),a=s[0],l=s[1],u=Object(c.useState)(!1),j=Object(h.a)(u,2),O=j[0],f=j[1],v=Object(c.useState)(!1),x=Object(h.a)(v,2),k=x[0],y=x[1],C=Object(c.useState)(void 0),S=Object(h.a)(C,2),E=(S[0],S[1],Object(c.useState)(void 0)),N=Object(h.a)(E,2);N[0],N[1];var R=function(){var c=Object(b.a)(d.a.mark((function c(){return d.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(!e){c.next=6;break}return y(!0),c.next=4,t.collection("customers").doc(e.uid).collection("checkout_sessions").add({price:G.subscription_prices_keys.basic,success_url:window.location.origin,cancel_url:window.location.origin});case 4:c.sent.onSnapshot((function(e){var t=e.data();if(t){var c=t.error,i=t.sessionId;c&&alert("An error occured: "+c.message),i&&n&&(n.redirectToCheckout({sessionId:i}),y(!1))}}));case 6:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();function B(){return(B=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,_(i);case 3:return f(!1),e.abrupt("return",!0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U="outlined";return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Account Information"}),Object(p.jsx)("div",{children:Object(p.jsx)(L.a,{variant:U,fullWidth:!0,label:"Email",value:null===e||void 0===e?void 0:e.email,disabled:!0})}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{children:Object(p.jsx)(L.a,{variant:U,fullWidth:!0,label:"Name",value:a,onChange:function(e){return l(e.target.value)}})}),Object(p.jsx)("br",{}),Object(p.jsx)(D.a,{variant:U,fullWidth:!0,startIcon:Object(p.jsx)(V.a,{}),onClick:function(){},disabled:!0,children:"Save"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Subscriptions"}),Object(p.jsxs)("div",{children:[r?Object(p.jsx)(F.a,{style:{color:"green"}}):Object(p.jsx)(T.a,{style:{color:"red"}}),r?r.subscriptionLevel.toUpperCase():"NOT SUBSCRIBED"]}),Object(p.jsx)("br",{}),r?Object(p.jsxs)("div",{children:[Object(p.jsx)(D.a,{variant:U,fullWidth:!0,onClick:function(){return B.apply(this,arguments)},children:"Manage Subscriptions"}),O?Object(p.jsx)(J.a,{}):Object(p.jsx)("div",{})]}):Object(p.jsxs)("div",{children:[Object(p.jsx)(D.a,{variant:U,fullWidth:!0,onClick:R,children:"Subscribe"}),k?Object(p.jsx)(J.a,{}):Object(p.jsx)("div",{})]})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Version Info"}),Object(p.jsxs)("div",{children:["UI version: ",H.version]})]}),Object(p.jsx)("div",{children:Object(p.jsx)(D.a,{variant:U,fullWidth:!0,onClick:function(){W(),w.signOut()},children:"Logout"})}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{children:Object(p.jsx)(D.a,{variant:U,fullWidth:!0,startIcon:Object(p.jsx)(M.a,{}),onClick:function(){var t=window.confirm("Are you sure?");e&&t&&function(e){W(),e.delete().then((function(){return console.log("Successfully deleted account")})).catch((function(e){return console.error(e)}))}(e)},color:"secondary",children:"Delete Account"})})]})}var Q=n(77),q=n.n(Q);function Y(){var e=Object(u.g)(),t=w,n=I(),c={signInFlow:"popup",signInOptions:[f.a.auth.EmailAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(){return!1}}},i=void 0;if(e&&e.location&&e.location.state){var r=e.location.state;r&&r.from&&r.from.pathname&&(i=r.from.pathname)}return n?i&&"/login"!==i?Object(p.jsx)(u.a,{to:i}):Object(p.jsx)(u.a,{to:"/"}):Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{style:{height:"20px"},children:"  "}),Object(p.jsx)("div",{id:"firebaseui-auth-container",children:Object(p.jsx)(q.a,{uiConfig:c,firebaseAuth:t})})]})}function Z(){var e=I(),t=A();return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{children:["Welcome ",null===e||void 0===e?void 0:e.displayName," !"]}),Object(p.jsx)("div",{children:t?Object(p.jsx)("div",{}):Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:"Update your subscription to see this content"}),Object(p.jsx)("div",{children:Object(p.jsx)(l.b,{to:"/account",children:"Subscribe"})})]})})]})}function z(){return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"App Version"}),Object(p.jsx)("div",{children:H.version})]})})}var X=n(148),$=n(149),ee=n(79),te=n.n(ee),ne=n.p+"static/media/logo.e24ff742.svg";function ce(e){return Object(p.jsx)(l.b,{to:"/",style:{color:"white"},children:Object(p.jsx)("img",{src:ne,alt:"HOME",height:"24px"})})}var ie={color:"white",theme_color:"#ffd700",background_color:"#728a75"},re=Object(c.createContext)(ie);function oe(){var e=Object(c.useContext)(re);return Object(p.jsx)(X.a,{position:"static",style:{backgroundColor:e.background_color},children:Object(p.jsxs)($.a,{children:[Object(p.jsx)(ce,{}),Object(p.jsx)("div",{style:{flexGrow:1}}),Object(p.jsx)(l.b,{to:"/account",style:{color:"white"},children:Object(p.jsx)(te.a,{"aria-label":"account",color:"inherit"})})]})})}function se(){return Object(p.jsx)("div",{style:{textAlign:"center"},children:Object(p.jsxs)(l.a,{children:[Object(p.jsx)(oe,{}),Object(p.jsxs)(u.d,{children:[Object(p.jsx)(u.b,{path:"/login",children:Object(p.jsx)(Y,{})}),Object(p.jsx)(u.b,{path:"/info",children:Object(p.jsx)(z,{})}),Object(p.jsx)(ae,{path:"/account",children:Object(p.jsx)(K,{})}),Object(p.jsx)(ae,{path:"/",children:Object(p.jsx)(Z,{})}),Object(p.jsx)(ae,{path:"*",children:Object(p.jsx)(u.a,{to:"/"})})]})]})})}function ae(e){var t=e.children,n=Object(a.a)(e,["children"]),c=I();return Object(p.jsx)(u.b,Object(s.a)(Object(s.a)({},n),{},{render:function(e){var n=e.location;return c?t:Object(p.jsx)(u.a,{to:{pathname:"/login",state:{from:n}}})}}))}var le=n(80),ue=Object(le.a)(G.publishableKey);var je=function(){return Object(p.jsx)(S,{children:Object(p.jsx)(P.Elements,{stripe:ue,children:Object(p.jsx)(se,{})})})},de=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function be(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,154)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),r(e),o(e)}))};o.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(je,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");de?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):be(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):be(t,e)}))}}(),he()},53:function(e){e.exports=JSON.parse('{"subscription_prices_keys":{"basic":"price_1IRogLJgYHulMnJqhsDpckaT"},"subscription_product_key":{"basic":"prod_J3wZChslCkhQrI"},"publishableKey":"pk_live_51IRo7cJgYHulMnJqhlqht9joA1aDyACvpIeihyPWZKohmMbFCy74bFyrOvCNwLCf2clQJ0CAaiHVnmpalhctLIiR00n4hOXCTv"}')},54:function(e){e.exports=JSON.parse('{"version":"BETA 1.0.1"}')},71:function(e){e.exports=JSON.parse('{"apiKey":"AIzaSyBGWMEAFhrI37uH1NpQFZGVxF8LWuT2XA0","authDomain":"golf-gamblers.firebaseapp.com","projectId":"golf-gamblers","storageBucket":"golf-gamblers.appspot.com","messagingSenderId":"537485515557","appId":"1:537485515557:web:621eff503cd374fa3d58cc","measurementId":"G-DYSPGQCB9M"}')},92:function(e,t,n){}},[[113,1,2]]]);
//# sourceMappingURL=main.f32dcea5.chunk.js.map
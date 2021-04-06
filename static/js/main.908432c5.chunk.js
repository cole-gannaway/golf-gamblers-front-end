(this["webpackJsonpgolf-gamblers-front-end"]=this["webpackJsonpgolf-gamblers-front-end"]||[]).push([[0],{119:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(11),o=n.n(r),s=(n(98),n(67)),a=n(4),l=n(35),d=n(16),j=n(28),u=n.n(j),b=n(39),h=n(27),p=n(162),O=n(8),x=(n(64),n(74),n(120),n(78)),f=n(3),v=O.a.apps.length?O.a.app():O.a.initializeApp(x),g=v.firestore(),m=v.auth();m.setPersistence(O.a.auth.Auth.Persistence.LOCAL);var w=v.functions("us-central1"),y=new Map,k=Object(c.createContext)(null),S=Object(c.createContext)(void 0);function C(e){var t=Object(c.useState)(null),n=Object(h.a)(t,2),i=n[0],r=n[1],o=Object(c.useState)(void 0),s=Object(h.a)(o,2),a=s[0],l=s[1];return Object(c.useEffect)((function(){m.onAuthStateChanged((function(e){e?function(e){var t=Object(p.a)();y.set(t,e)}(g.collection("users").doc(e.uid).collection("private").doc("account-data").onSnapshot((function(e){if(e.exists){var t=e.data();"Basic"===(null===t||void 0===t?void 0:t.subscriptionState)&&l({subscriptionLevel:"Basic"})}}))):l(void 0);r(e)}))}),[]),Object(f.jsx)(k.Provider,{value:i,children:Object(f.jsx)(S.Provider,{value:a,children:e.children})})}function A(){return Object(c.useContext)(k)}function _(){return Object(c.useContext)(S)}function I(){y.forEach((function(e){e()})),y.clear()}function W(){return L.apply(this,arguments)}function L(){return(L=Object(b.a)(u.a.mark((function e(){var t,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=w.httpsCallable("ext-firestore-stripe-subscriptions-createPortalLink"),e.next=3,t({returnUrl:window.location.origin});case 3:return n=e.sent,c=n.data,window.location.assign(c.url),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P={signInFlow:"popup",signInOptions:[O.a.auth.GoogleAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(){return!1}}},E=n(58),F=n(159),N=n(161),J=n(81),B=n.n(J),D=n(80),M=n.n(D),R=n(61),T=n(60);function G(e,t,n,c){return H.apply(this,arguments)}function H(){return(H=Object(b.a)(u.a.mark((function e(t,n,c,i){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.enqueueSnackbar("Redirecting to Stripe...",{variant:"info"}),e.next=3,n.collection("customers").doc(c.uid).collection("checkout_sessions").add({price:T.subscription_prices_keys.basic,success_url:window.location.origin,cancel_url:window.location.origin});case 3:e.sent.onSnapshot((function(e){var n=e.data();if(n){var c=n.error,i=n.sessionId;c&&alert("An error occured: "+c.message),i&&t.redirectToCheckout({sessionId:i})}}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){var e=A(),t=g,n=Object(E.useStripe)(),c=_(),i=Object(R.b)();function r(){return(r=Object(b.a)(u.a.mark((function c(){return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:e&&n&&G(n,t,e,i);case 1:case"end":return c.stop()}}),c)})))).apply(this,arguments)}function o(){return(o=Object(b.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.enqueueSnackbar("Redirecting to Stripe...",{variant:"info"}),e.next=3,W();case 3:return e.abrupt("return",!0);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var s="outlined";return Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Account Information"}),Object(f.jsx)("div",{children:Object(f.jsx)(F.a,{variant:s,fullWidth:!0,label:"Email",value:null===e||void 0===e?void 0:e.email,disabled:!0})}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{children:Object(f.jsx)(F.a,{variant:s,fullWidth:!0,label:"Full Name",value:null===e||void 0===e?void 0:e.displayName,disabled:!0})}),Object(f.jsx)("br",{}),Object(f.jsx)(N.a,{variant:s,fullWidth:!0,startIcon:Object(f.jsx)(M.a,{}),onClick:function(){},disabled:!0,children:"Save"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Subscription"}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{children:["Subscription Level: ",(null===c||void 0===c?void 0:c.subscriptionLevel)?c.subscriptionLevel:"None"]}),Object(f.jsx)("br",{}),c?Object(f.jsx)("div",{children:Object(f.jsx)(N.a,{variant:s,fullWidth:!0,onClick:function(){return o.apply(this,arguments)},children:"Manage Subscription"})}):Object(f.jsx)("div",{children:Object(f.jsx)(N.a,{variant:s,fullWidth:!0,onClick:function(){return r.apply(this,arguments)},children:"Subscribe"})})]})]}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Account Actions"}),Object(f.jsx)("div",{children:Object(f.jsx)(N.a,{variant:s,fullWidth:!0,onClick:function(){I(),m.signOut()},children:"Logout"})}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{children:Object(f.jsx)(N.a,{variant:s,fullWidth:!0,startIcon:Object(f.jsx)(B.a,{}),onClick:function(){var t=window.confirm("Are you sure?");e&&t&&function(e){I(),e.delete().then((function(){return console.log("Successfully deleted account")})).catch((function(e){return console.error(e)}))}(e)},color:"secondary",children:"Delete Account"})})]})]})}var q=n(82),K=n.n(q);function Q(){var e=Object(d.g)(),t=m,n=A(),c=void 0;if(e&&e.location&&e.location.state){var i=e.location.state;i&&i.from&&i.from.pathname&&(c=i.from.pathname)}return n?c&&"/login"!==c?Object(f.jsx)(d.a,{to:c}):Object(f.jsx)(d.a,{to:"/"}):Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{style:{height:"20px"},children:"  "}),Object(f.jsx)("div",{id:"firebaseui-auth-container",children:Object(f.jsx)(K.a,{uiConfig:P,firebaseAuth:t})})]})}function z(){var e=A(),t=_();return Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{children:["Welcome ",null===e||void 0===e?void 0:e.displayName," !"]}),Object(f.jsx)("div",{children:t?Object(f.jsx)("div",{}):Object(f.jsx)("div",{children:Object(f.jsx)("p",{children:"Update your account's subscription to see this content."})})})]})}var V=n(155),Y=n(156),Z=n.p+"static/media/pwa_share_menu_ios.4ab46d8d.jpeg",X=n.p+"static/media/pwa_installation_ios.021de36f.jpeg",$=n.p+"static/media/pwa_add_bookmark_ios.5f5b13b6.jpg",ee=n.p+"static/media/pwa_installed_ios.20234b25.jpeg";function te(){return Object(f.jsx)("div",{style:{textAlign:"left"},children:Object(f.jsxs)(V.a,{container:!0,spacing:3,children:[Object(f.jsx)(V.a,{item:!0,xs:1}),Object(f.jsxs)(V.a,{item:!0,xs:10,children:[Object(f.jsxs)("p",{children:["This application is a ",Object(f.jsx)("b",{children:"P"}),"rogressive ",Object(f.jsx)("b",{children:"W"}),"eb ",Object(f.jsx)("b",{children:"A"}),"pplication or ",Object(f.jsx)("b",{children:"PWA"})," for short.",Object(f.jsx)("br",{}),"Because of this, the aplication can be installed locally on phone or desktop computer.",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),"Note: Updates occur regularly and the app may need to be reinstalled"]}),Object(f.jsx)(Y.a,{}),Object(f.jsx)("h3",{children:"Install PWA on IOS"}),Object(f.jsx)("h5",{children:"1. Select the share icon at the bottom"}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:Z,alt:"Error",width:"200px"})}),Object(f.jsx)("h5",{children:'2. Select "Add to Home Screen"'}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:$,alt:"Error",width:"200px"})}),Object(f.jsx)("h5",{children:'3. Select "Add"'}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:X,alt:"Error",width:"200px"})}),Object(f.jsx)("h5",{children:"Done!"}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:ee,alt:"Error",width:"200px"})}),Object(f.jsx)("div",{})]}),Object(f.jsx)(V.a,{item:!0,xs:1})]})})}var ne=n(157),ce=n(158),ie=n(85),re=n.n(ie),oe=n(84),se=n.n(oe),ae=n.p+"static/media/logo.e24ff742.svg";function le(e){return Object(f.jsx)(l.b,{to:"/",style:{color:"white"},children:Object(f.jsx)("img",{src:ae,alt:"HOME",height:"24px"})})}var de={color:"white",theme_color:"#ffd700",background_color:"#728a75"},je=Object(c.createContext)(de);function ue(){var e=Object(c.useContext)(je);return Object(f.jsx)(ne.a,{position:"static",style:{backgroundColor:e.background_color},children:Object(f.jsxs)(ce.a,{children:[Object(f.jsx)(le,{}),Object(f.jsx)("div",{style:{flexGrow:1}}),Object(f.jsx)(l.b,{to:"/install",style:{color:"white"},children:Object(f.jsx)(se.a,{"aria-label":"install",color:"inherit"})}),Object(f.jsx)("div",{style:{width:10}}),Object(f.jsx)(l.b,{to:"/account",style:{color:"white"},children:Object(f.jsx)(re.a,{"aria-label":"account",color:"inherit"})})]})})}function be(){return Object(f.jsx)("div",{style:{textAlign:"center"},children:Object(f.jsxs)(l.a,{children:[Object(f.jsx)(ue,{}),Object(f.jsxs)(d.d,{children:[Object(f.jsx)(d.b,{path:"/login",children:Object(f.jsx)(Q,{})}),Object(f.jsx)(d.b,{path:"/install",children:Object(f.jsx)(te,{})}),Object(f.jsx)(he,{path:"/account",children:Object(f.jsx)(U,{})}),Object(f.jsx)(he,{path:"/",children:Object(f.jsx)(z,{})}),Object(f.jsx)(he,{path:"*",children:Object(f.jsx)(d.a,{to:"/"})})]})]})})}function he(e){var t=e.children,n=Object(a.a)(e,["children"]),c=A();return Object(f.jsx)(d.b,Object(s.a)(Object(s.a)({},n),{},{render:function(e){var n=e.location;return c?t:Object(f.jsx)(d.a,{to:{pathname:"/login",state:{from:n}}})}}))}var pe=n(86),Oe=Object(pe.a)(T.publishableKey);var xe=function(){return Object(f.jsx)(C,{children:Object(f.jsx)(E.Elements,{stripe:Oe,children:Object(f.jsx)(R.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},children:Object(f.jsx)(be,{})})})})},fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ve(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,164)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),r(e),o(e)}))};o.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(xe,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");fe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ve(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ve(t,e)}))}}(),ge()},60:function(e){e.exports=JSON.parse('{"subscription_prices_keys":{"basic":"price_1IRogLJgYHulMnJqhsDpckaT"},"subscription_product_key":{"basic":"prod_J3wZChslCkhQrI"},"publishableKey":"pk_live_51IRo7cJgYHulMnJqhlqht9joA1aDyACvpIeihyPWZKohmMbFCy74bFyrOvCNwLCf2clQJ0CAaiHVnmpalhctLIiR00n4hOXCTv"}')},78:function(e){e.exports=JSON.parse('{"apiKey":"AIzaSyBGWMEAFhrI37uH1NpQFZGVxF8LWuT2XA0","authDomain":"golf-gamblers.firebaseapp.com","projectId":"golf-gamblers","storageBucket":"golf-gamblers.appspot.com","messagingSenderId":"537485515557","appId":"1:537485515557:web:621eff503cd374fa3d58cc","measurementId":"G-DYSPGQCB9M"}')},98:function(e,t,n){}},[[119,1,2]]]);
//# sourceMappingURL=main.908432c5.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},46:function(e,t,a){e.exports=a(79)},79:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(33),c=a.n(r),s=a(40),m=a(2),i=a(34),o=a(35),u=a(43),E=a(42),d=a(12),b=a.n(d),p=(a(17),function(e){return n.a.createElement("tr",null,n.a.createElement("td",{style:{textAlign:"center"}}),n.a.createElement("td",{className:"address-list"},e.user.address),n.a.createElement("td",{className:"email-list"},e.user.email),n.a.createElement("td",{style:{textAlign:"center"}},"\u20b9 100"),n.a.createElement("td",{style:{textAlign:"center"}},e.user.date))}),g=function(e){Object(u.a)(a,e);var t=Object(E.a)(a);function a(e){var l;return Object(i.a)(this,a),(l=t.call(this,e)).userList=function(){return l.state.users.map(function(e,t){return n.a.createElement(p,{user:e,key:t})})},l.state={users:[]},l}return Object(o.a)(a,[{key:"getData",value:function(){var e=this;b.a.post("/api/get/user").then(function(t){if(t&&t.data){var a=t.data;"ok"===a.status?e.setState({users:a.data}):e.setState({users:[]})}}).catch(function(e){return console.log(e)})}},{key:"componentDidMount",value:function(){this.getData()}},{key:"componentDidUpdate",value:function(){this.getData()}},{key:"render",value:function(){return n.a.createElement("div",{id:"User-List"},n.a.createElement("div",{className:"custom-logo"},n.a.createElement("img",{src:"../../img/custom-logo.png",width:"200vw"})),n.a.createElement("div",{className:"Data-title"},"Customers List for PREMIERE"),n.a.createElement("table",{className:"table table-striped css-serial",style:{marginTop:20}},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"SN"),n.a.createElement("th",null,"ADDRESS"),n.a.createElement("th",null,"EMAIL"),n.a.createElement("th",null,"VALUE"),n.a.createElement("th",null,"DATE & TIME"))),n.a.createElement("tbody",null,this.userList())),n.a.createElement("div",{className:"custom-footer"},"\xa9 Copyright 2021  - All Rights Reserved || Moneyball Team Admin"))}}]),a}(l.Component),h=a(3),v=a(14),f=a.n(v),N=a(18),y=a(13),w=a(15),x=a(92);function O(){var e=Object(l.useState)({}),t=Object(h.a)(e,2),a=t[0],r=t[1],c=Object(l.useState)(!1),s=Object(h.a)(c,2),m=s[0],i=s[1],o=Object(l.useState)(!1),u=Object(h.a)(o,2),E=u[0],d=u[1],p=Object(l.useState)(!1),g=Object(h.a)(p,2),v=g[0],O=g[1],S=Object(l.useState)(!1),k=Object(h.a)(S,2),T=k[0],j=k[1],A=Object(l.useState)(!1),R=Object(h.a)(A,2),L=(R[0],R[1],Object(l.useState)(!1)),C=Object(h.a)(L,2),I=(C[0],C[1],Object(l.useState)(!1)),P=Object(h.a)(I,2),M=(P[0],P[1],n.a.useRef(null)),D=n.a.useRef(null),U=function(e){e.persist(),r(function(t){return Object(w.a)(Object(w.a)({},t),{},Object(y.a)({},e.target.name,e.target.value))})};console.log(a.address),console.log(a.email);var B=function(){var e=Object(N.a)(f.a.mark(function e(t){var l,n,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a.address){e.next=3;break}return e.abrupt("return",M.current.focus());case 3:if(/^0x[a-fA-F0-9]{40}$/.test(a.address)){e.next=6;break}return M.current.select(),e.abrupt("return",M.current.focus());case 6:if(a.email){e.next=8;break}return e.abrupt("return",D.current.focus());case 8:if(t=a.email,/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)){e.next=11;break}return D.current.select(),e.abrupt("return",D.current.focus());case 11:return"/api/add/user",l=(new Date).toLocaleString(void 0,{timeZone:"Asia/Kolkata"}),console.log(l),e.next=16,b.a.post("/api/add/user",{address:a.address,email:a.email,date:l});case 16:n=e.sent,r=n&&n.data,console.log(a),console.log(r),r&&"ok"===r.status&&(d(!1),O(!1),i(!0),j(!0)),r&&"exist"===r.status&&(i(!1),d(!1),O(!0)),r&&"fail"===r.status&&(i(!1),O(!1),d(!0)),e.next=29;break;case 25:e.prev=25,e.t0=e.catch(0),console.log(e.t0),d(!0);case 29:case"end":return e.stop()}var t},e,null,[[0,25]])}));return function(t){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"success"},n.a.createElement("div",null,"."),n.a.createElement("div",{className:"alam"},n.a.createElement("span",null,n.a.createElement("img",{src:"img/alam-warn.webp",width:"30vw",style:{marginRight:"20px"}})),n.a.createElement("a",{className:"alam-text"},"DO NOT CLOSE OR REFRESH THIS PAGE UNTIL YOU'VE SUCCESSFULLY COMPLETED ALL THE STEPS !")),n.a.createElement(x.a,{container:!0},n.a.createElement(x.a,{item:!0,xs:12,sm:12,md:1,lg:2}),n.a.createElement(x.a,{item:!0,xs:12,sm:12,md:10,lg:8},n.a.createElement("div",{className:"success-header"},n.a.createElement("img",{src:"img/film-logo.png"}),n.a.createElement("span",{className:"logo-text"},"Premiere")),n.a.createElement("div",{className:"success-landing"},n.a.createElement("div",{className:"congrats"},"\ud83d\ude01",n.a.createElement("br",null),"CONGRATULATIONS!",n.a.createElement("br",null),"YOUR REGISTRATION IS COMPLETE ",n.a.createElement("br",null),n.a.createElement("hr",{style:{width:"40%",color:"rgba(255, 255, 255, 0.34)"}})),n.a.createElement("div",null,n.a.createElement("div",{className:"step-text"},"PLEASE INPUT YOUR INFORMATION TO RECEIVE MBT COINS"),n.a.createElement("div",{className:"flow-bar"}),n.a.createElement("div",{className:"alam"},n.a.createElement("span",null,n.a.createElement("img",{src:"img/tutorial.webp",width:"30vw",style:{marginRight:"20px"}})),n.a.createElement("a",{href:"/tutorial_how-to-install-metamask-and-add-Binance-smart-chain-and-MBT-coin",target:"_blank",className:"alam-text"},"PLEASE REFERENCE 3 TUTORIAL GUIDES TO SETUP METAMASK WALLET TO RECEIVE COINS IF YOU NEED HELP")),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:T?"hidden":""},n.a.createElement("div",null,n.a.createElement("input",{ref:M,className:"address",onChange:U,value:a.address||"",type:"text",name:"address",placeholder:"Enter Your Public Key",required:!0})),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("input",{ref:D,className:"email",onChange:U,value:a.email||"",type:"email",name:"email",placeholder:"Enter Your Email Address",required:!0})),n.a.createElement("br",null),n.a.createElement("div",{className:E?"result-text2":"hidden"},"Failed Submitting. Please try again"),n.a.createElement("div",{className:v?"result-text3":"hidden"},"Already exist. Try with another"),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("button",{onClick:B,className:"button-1",type:"submit"},"Click to Submit"))),n.a.createElement("br",null),n.a.createElement("div",{className:m?"result-text1":"hidden"},"You have successfully submitted !"),n.a.createElement("br",null),n.a.createElement("div",{className:"steps"},n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"step-fill"},n.a.createElement(x.a,{container:!0},n.a.createElement(x.a,{item:!0,xs:12,sm:2,md:2,lg:2},n.a.createElement("img",{src:"img/step-4.webp",width:"70%",style:{marginLeft:"15%"}})),n.a.createElement(x.a,{item:!0,xs:12,sm:1,md:1,lg:1}),n.a.createElement(x.a,{item:!0,xs:12,sm:9,md:9,lg:9},n.a.createElement("div",{className:"step-sub-title"},n.a.createElement("a",{href:"https://t.me/joinchat/zF2KxNkFrNk4YmE1",target:"_blank"},"Join the Telegram channel to receive updates")),n.a.createElement("br",null))))),n.a.createElement("hr",{style:{width:"60%",color:"rgba(255, 255, 255, 0.34)"}}),n.a.createElement("br",null),n.a.createElement("div",{style:{color:"white",fontFamily:"Arial",fontSize:"16px",textAlign:"center"}},"We do not share or take sensitive/ personal data. Your Public address is safe to share and we will only use it in your favor.")))),n.a.createElement(x.a,{item:!0,xs:12,sm:12,md:1,lg:2})),n.a.createElement("div",{className:"success-footer"},n.a.createElement("div",{style:{marginLeft:"20%"}},"\xa9 Copyright 2021  - All Rights Reserved")))}var S=function(){var e=Object(l.useState)(!1),t=Object(h.a)(e,2),a=t[0],r=t[1],c={key:"rzp_live_JOlrGIAoSDme3h",currency:"INR",receipt:"#1",amount:"10000",name:"MoneyBall Token",description:"Pay for the Webinar",handler:function(e){r(!0)},prefill:{name:"",contact:"",email:"",address:""},notes:{address:""},theme:{color:"#26e3ff",hide_topbar:!1}};return Object(l.useEffect)(function(){var e=document.createElement("script");e.src="https://checkout.razorpay.com/v1/checkout.js",e.async=!0,document.body.appendChild(e),setTimeout(function(){!function(e){var t=new window.Razorpay(e);t.on("payment.failed",function(e){console.log("Payment Failed: ",e),r(!1)}),t.open()}(c)},1e3)},[]),n.a.createElement("div",null,a?n.a.createElement(O,null):n.a.createElement("div",{className:"buttons"},n.a.createElement("div",{className:"success-header"},n.a.createElement("img",{src:"img/film-logo.png"}),n.a.createElement("span",{className:"logo-text"},"Premiere")),n.a.createElement("div",{className:"text-note"},n.a.createElement("div",{className:"notice-text"},"Kindly wait while the payment page loads"),n.a.createElement("br",null),n.a.createElement("div",{className:"notice-text"},"Once your payment is complete do not Refresh or exit the payment success page until you've completed all necessary steps."),n.a.createElement("br",null),n.a.createElement("div",{className:"notice-text"},"Incase you require any assistance, contact support via mail ",n.a.createElement("span",{style:{color:"lightblue"}},"support@cryptodomination101.com"))),n.a.createElement("a",{className:"back-button",href:"https://www.premiere-mbt.com/",blank:"_self"},n.a.createElement("img",{src:"img/return-button.png",width:"100vw"}),n.a.createElement("b",{style:{color:"white",marginTop:"20px",display:"block",textAlign:"center"}},"BACK")),n.a.createElement("br",null)))};function k(){var e=Object(l.useState)({}),t=Object(h.a)(e,2),a=t[0],r=(t[1],Object(l.useState)(!1)),c=Object(h.a)(r,2),s=(c[0],c[1],Object(l.useState)(!1)),m=Object(h.a)(s,2),i=(m[0],m[1],Object(l.useState)(!1)),o=Object(h.a)(i,2),u=(o[0],o[1],Object(l.useState)(!1)),E=Object(h.a)(u,2),d=(E[0],E[1],Object(l.useState)(!1)),b=Object(h.a)(d,2),p=b[0],g=b[1],v=Object(l.useState)(!1),f=Object(h.a)(v,2),N=f[0],y=f[1],w=Object(l.useState)(!1),O=Object(h.a)(w,2),S=O[0],k=O[1];n.a.useRef(null),n.a.useRef(null);console.log(a.address),console.log(a.email);return n.a.createElement("div",{className:"success"},n.a.createElement(x.a,{container:!0},n.a.createElement(x.a,{item:!0,xs:12,sm:12,md:1,lg:2}),n.a.createElement(x.a,{item:!0,xs:12,sm:12,md:10,lg:8},n.a.createElement("div",{className:"success-header"},n.a.createElement("img",{src:"img/film-logo.png"}),n.a.createElement("span",{className:"logo-text"},"Premiere")),n.a.createElement("div",{className:"success-landing"},n.a.createElement("div",{className:"congrats"},n.a.createElement("div",null,"TUTORIALS"),n.a.createElement("hr",{style:{width:"40%",color:"rgba(255, 255, 255, 0.34)"}})),n.a.createElement("div",null,n.a.createElement("div",{className:"step-text"},"HERE ARE YOUR STEPS"),n.a.createElement("div",{className:"flow-bar"}),n.a.createElement("div",{className:"steps"},n.a.createElement("div",{className:"step-title",id:"step-start"},"STEP 1"),n.a.createElement("br",null),n.a.createElement("div",{className:"step-fill"},n.a.createElement(x.a,{container:!0},n.a.createElement(x.a,{item:!0,xs:12,sm:2,md:2,lg:2},n.a.createElement("img",{src:"img/step-1.webp",width:"70%",style:{marginLeft:"15%"}})),n.a.createElement(x.a,{item:!0,xs:12,sm:1,md:1,lg:1}),n.a.createElement(x.a,{item:!0,xs:12,sm:9,md:9,lg:9},n.a.createElement("div",{className:"step-sub-title"},n.a.createElement("a",{href:"https://metamask.io/download",target:"_blank"},"Download The Meta Mask Wallet")),n.a.createElement("br",null),n.a.createElement("div",{className:"step-sub-comment"},n.a.createElement("a",{href:"https://metamask.io/download",target:"_blank"},"DOWNLOAD META MASK")))),n.a.createElement("div",{className:"video"},n.a.createElement("video",{width:"80%",height:"600px",controls:!0},n.a.createElement("source",{src:"video/step-1.mp4",type:"video/mp4"})),n.a.createElement("div",{className:"thumbnail",style:p?{display:"none"}:null},n.a.createElement("img",{src:"img/thumbnail.png",width:"100vw",onClick:function(){return g(!0)}}))),n.a.createElement("br",null),n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("span",null,n.a.createElement("img",{src:"img/exclam.png",width:"20vw"})," "),n.a.createElement("span",{className:"warn-text"},"Watch this tutorial and follow all the steps as directed!")))),n.a.createElement("div",{className:"steps"},n.a.createElement("div",{className:"step-title"},"STEP 2"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"step-fill"},n.a.createElement(x.a,{container:!0},n.a.createElement(x.a,{item:!0,xs:12,sm:2,md:2,lg:2},n.a.createElement("img",{src:"img/step-2.webp",width:"70%",style:{marginLeft:"15%"}})),n.a.createElement(x.a,{item:!0,xs:12,sm:1,md:1,lg:1}),n.a.createElement(x.a,{item:!0,xs:12,sm:9,md:9,lg:9},n.a.createElement("div",{className:"step-sub-title"},"Add the BSC Network"),n.a.createElement("br",null),n.a.createElement("div",{className:"step-sub-comment"},n.a.createElement("a",{href:"https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain.amp",target:"_blank"},"Read more about the BSC Network"),n.a.createElement("br",null),n.a.createElement("br",null),"Network Name:",n.a.createElement("b",null," Smart Chain"),n.a.createElement("br",null),n.a.createElement("a",{href:"https://bsc-dataseed.binance.org/",target:"_blank"},"New RPC URL:",n.a.createElement("b",null," https://bsc-dataseed.binance.org/")),n.a.createElement("br",null),"ChainID:",n.a.createElement("b",null," 56"),n.a.createElement("br",null),"Symbol:",n.a.createElement("b",null," BNB"),n.a.createElement("br",null),n.a.createElement("a",{href:"https://bscscan.com",target:"_blank"},"Block Explorer URL:",n.a.createElement("b",null," https://bscscan.com")),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null)))),n.a.createElement("div",{className:"video"},n.a.createElement("video",{width:"80%",height:"600px",controls:!0},n.a.createElement("source",{src:"video/step-2.mp4",type:"video/mp4"})),n.a.createElement("div",{className:"thumbnail",style:N?{display:"none"}:null},n.a.createElement("img",{src:"img/thumbnail.png",width:"100vw",onClick:function(){return y(!0)}}))),n.a.createElement("br",null),n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("span",null,n.a.createElement("img",{src:"img/exclam.png",width:"20vw"})," "),n.a.createElement("span",{className:"warn-text"},"Watch this tutorial and follow all the steps as directed!")))),n.a.createElement("div",{className:"steps"},n.a.createElement("div",{className:"step-title"},"STEP 3"),n.a.createElement("br",null),n.a.createElement("div",{className:"step-fill"},n.a.createElement(x.a,{container:!0},n.a.createElement(x.a,{item:!0,xs:12,sm:2,md:2,lg:2},n.a.createElement("img",{src:"img/step-3.webp",width:"70%",style:{marginLeft:"15%"}})),n.a.createElement(x.a,{item:!0,xs:12,sm:1,md:1,lg:1}),n.a.createElement(x.a,{item:!0,xs:12,sm:9,md:9,lg:9},n.a.createElement("div",{className:"step-sub-title"},"Add MoneyBall Token"),n.a.createElement("br",null),n.a.createElement("div",{className:"step-sub-comment"},"Token Address:",n.a.createElement("b",null," 0x8d7d20bc3be644eaab3239e3a5aa9158b84912ed"),n.a.createElement("br",null),"Token Symbol:",n.a.createElement("b",null," MBT"),n.a.createElement("br",null),"Token of precision:",n.a.createElement("b",null," 18"),n.a.createElement("br",null)))),n.a.createElement("div",{className:"video"},n.a.createElement("video",{width:"80%",height:"600px",controls:!0},n.a.createElement("source",{src:"video/step-3.mp4",type:"video/mp4"})),n.a.createElement("div",{className:"thumbnail",style:S?{display:"none"}:null},n.a.createElement("img",{src:"img/thumbnail.png",width:"100vw",onClick:function(){return k(!0)}}))),n.a.createElement("br",null),n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("span",null,n.a.createElement("img",{src:"img/exclam.png",width:"20vw"})," "),n.a.createElement("span",{className:"warn-text"},"Watch this tutorial and follow all the steps as directed!")))),n.a.createElement("br",null),n.a.createElement("br",null)))),n.a.createElement(x.a,{item:!0,xs:12,sm:12,md:1,lg:2})),n.a.createElement("div",{className:"success-footer"},n.a.createElement("div",{style:{marginLeft:"20%"}},"\xa9 Copyright 2021  - All Rights Reserved")))}function T(){return n.a.createElement(s.a,null,n.a.createElement(m.c,null,n.a.createElement(m.a,{exact:!0,path:"/",component:S}),n.a.createElement(m.a,{exact:!0,path:"/moneyball@2607/mbtpremiere",component:g}),n.a.createElement(m.a,{exact:!0,path:"/tutorial_how-to-install-metamask-and-add-Binance-smart-chain-and-MBT-coin",component:k})))}function j(){return n.a.createElement(T,null)}c.a.render(n.a.createElement(j,null),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.4fe45b22.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){},45:function(e,t,a){e.exports=a(78)},78:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(32),c=a.n(r),s=a(40),m=a(2),i=a(33),o=a(34),u=a(43),d=a(42),E=a(13),p=a.n(E),b=(a(18),function(e){return n.a.createElement("tr",null,n.a.createElement("td",{className:"address-list"},e.user.address),n.a.createElement("td",{className:"email-list"},e.user.email))}),h=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var l;return Object(i.a)(this,a),(l=t.call(this,e)).userList=function(){return l.state.users.map(function(e,t){return n.a.createElement(b,{user:e,key:t})})},l.state={users:[]},l}return Object(o.a)(a,[{key:"getData",value:function(){var e=this;p.a.post("http://13.58.42.217:8080/api/get/user").then(function(t){if(t&&t.data){var a=t.data;"ok"===a.status?e.setState({users:a.data}):e.setState({users:[]})}}).catch(function(e){return console.log(e)})}},{key:"componentDidMount",value:function(){this.getData()}},{key:"componentDidUpdate",value:function(){this.getData()}},{key:"render",value:function(){return n.a.createElement("div",{id:"User-List"},n.a.createElement("div",{className:"custom-logo"},n.a.createElement("img",{src:"../../img/custom-logo.png",width:"200vw"})),n.a.createElement("div",{className:"Data-title"},"Customers List for PREMIERE"),n.a.createElement("table",{className:"table table-striped",style:{marginTop:20}},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"ADDRESS"),n.a.createElement("th",null,"EMAIL"))),n.a.createElement("tbody",null,this.userList())),n.a.createElement("div",{className:"custom-footer"},"\xa9 Copyright 2021  - All Rights Reserved || Moneyball Team Admin"))}}]),a}(l.Component),g=a(8),v=a(19),f=a.n(v),N=a(35),y=a(14),w=a(20),x=a(92);function k(){var e=Object(l.useState)({}),t=Object(g.a)(e,2),a=t[0],r=t[1],c=Object(l.useState)(!1),s=Object(g.a)(c,2),m=s[0],i=s[1],o=Object(l.useState)(!1),u=Object(g.a)(o,2),d=u[0],E=u[1],b=Object(l.useState)(!1),h=Object(g.a)(b,2),v=h[0],k=h[1],O=Object(l.useState)(!1),S=Object(g.a)(O,2),T=S[0],A=S[1],j=Object(l.useState)(!1),R=Object(g.a)(j,2),C=R[0],L=R[1],P=Object(l.useState)(!1),D=Object(g.a)(P,2),I=D[0],M=D[1],U=Object(l.useState)(!1),B=Object(g.a)(U,2),_=B[0],Y=B[1],F=n.a.useRef(null),z=n.a.useRef(null),W=function(e){e.persist(),r(function(t){return Object(w.a)(Object(w.a)({},t),{},Object(y.a)({},e.target.name,e.target.value))})};console.log(a.address),console.log(a.email);var K=function(){var e=Object(N.a)(f.a.mark(function e(t){var l,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a.address){e.next=3;break}return e.abrupt("return",F.current.focus());case 3:if(/^0x[a-fA-F0-9]{40}$/.test(a.address)){e.next=6;break}return F.current.select(),e.abrupt("return",F.current.focus());case 6:if(a.email){e.next=8;break}return e.abrupt("return",z.current.focus());case 8:if(t=a.email,/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)){e.next=11;break}return z.current.select(),e.abrupt("return",z.current.focus());case 11:return"http://13.58.42.217:8080/api/add/user",e.next=14,p.a.post("http://13.58.42.217:8080/api/add/user",{address:a.address,email:a.email});case 14:l=e.sent,n=l&&l.data,console.log(a),console.log(n),n&&"ok"===n.status&&(E(!1),k(!1),i(!0),A(!0)),n&&"exist"===n.status&&(i(!1),E(!1),k(!0)),n&&"fail"===n.status&&(i(!1),k(!1),E(!0)),e.next=27;break;case 23:e.prev=23,e.t0=e.catch(0),console.log(e.t0),E(!0);case 27:case"end":return e.stop()}var t},e,null,[[0,23]])}));return function(t){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"success"},n.a.createElement("div",null,"."),n.a.createElement("div",{className:"alam"},n.a.createElement("span",null,n.a.createElement("img",{src:"img/alam-warn.webp",width:"30vw",style:{marginRight:"20px"}})),n.a.createElement("a",{href:"#step-start",className:"alam-text"},"DO NOT CLOSE OR REFRESH THIS PAGE UNTIL YOU'VE SUCCESSFULLY COMPLETED ALL THE STEPS !")),n.a.createElement(x.a,{container:!0},n.a.createElement(x.a,{item:!0,xs:12,sm:12,md:1,lg:2}),n.a.createElement(x.a,{item:!0,xs:12,sm:12,md:10,lg:8},n.a.createElement("div",{className:"success-header"},n.a.createElement("img",{src:"img/film-logo.png"}),n.a.createElement("span",{className:"logo-text"},"Premiere")),n.a.createElement("div",{className:"success-landing"},n.a.createElement("div",{className:"congrats"},"\ud83d\ude01",n.a.createElement("br",null),"CONGRATULATIONS!",n.a.createElement("br",null),"YOUR REGISTRATION IS COMPLETE ",n.a.createElement("br",null),n.a.createElement("hr",{style:{width:"40%",color:"rgba(255, 255, 255, 0.34)"}})),n.a.createElement("div",null,n.a.createElement("div",{className:"step-text"},"HERE ARE YOUR NEXT STEPS"),n.a.createElement("div",{className:"flow-bar"}),n.a.createElement("div",{className:"steps"},n.a.createElement("div",{className:"step-title",id:"step-start"},"STEP 1"),n.a.createElement("br",null),n.a.createElement("div",{className:"step-fill"},n.a.createElement(x.a,{container:!0},n.a.createElement(x.a,{item:!0,xs:12,sm:2,md:2,lg:2},n.a.createElement("img",{src:"img/step-1.webp",width:"70%",style:{marginLeft:"15%"}})),n.a.createElement(x.a,{item:!0,xs:12,sm:1,md:1,lg:1}),n.a.createElement(x.a,{item:!0,xs:12,sm:9,md:9,lg:9},n.a.createElement("div",{className:"step-sub-title"},n.a.createElement("a",{href:"https://metamask.io/download",target:"_blank"},"Download The Meta Mask Wallet")),n.a.createElement("br",null),n.a.createElement("div",{className:"step-sub-comment"},n.a.createElement("a",{href:"https://metamask.io/download",target:"_blank"},"DOWNLOAD META MASK")))),n.a.createElement("div",{className:"video"},n.a.createElement("video",{width:"80%",height:"600px",controls:!0},n.a.createElement("source",{src:"video/step-1.mp4",type:"video/mp4"})),n.a.createElement("div",{className:"thumbnail",style:C?{display:"none"}:null},n.a.createElement("img",{src:"img/thumbnail.png",width:"100vw",onClick:function(){return L(!0)}}))),n.a.createElement("br",null),n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("span",null,n.a.createElement("img",{src:"img/exclam.png",width:"20vw"})," "),n.a.createElement("span",{className:"warn-text"},"Watch this tutorial and follow all the steps as directed!")))),n.a.createElement("div",{className:"steps"},n.a.createElement("div",{className:"step-title"},"STEP 2"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"step-fill"},n.a.createElement(x.a,{container:!0},n.a.createElement(x.a,{item:!0,xs:12,sm:2,md:2,lg:2},n.a.createElement("img",{src:"img/step-2.webp",width:"70%",style:{marginLeft:"15%"}})),n.a.createElement(x.a,{item:!0,xs:12,sm:1,md:1,lg:1}),n.a.createElement(x.a,{item:!0,xs:12,sm:9,md:9,lg:9},n.a.createElement("div",{className:"step-sub-title"},"Add the BSC Network"),n.a.createElement("br",null),n.a.createElement("div",{className:"step-sub-comment"},n.a.createElement("a",{href:"https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain.amp",target:"_blank"},"Read more about the BSC Network"),n.a.createElement("br",null),n.a.createElement("br",null),"Network Name:",n.a.createElement("b",null," Smart Chain"),n.a.createElement("br",null),n.a.createElement("a",{href:"https://bsc-dataseed.binance.org/",target:"_blank"},"New RPC URL:",n.a.createElement("b",null," https://bsc-dataseed.binance.org/")),n.a.createElement("br",null),"ChainID:",n.a.createElement("b",null," 56"),n.a.createElement("br",null),"Symbol:",n.a.createElement("b",null," BNB"),n.a.createElement("br",null),n.a.createElement("a",{href:"https://bscscan.com",target:"_blank"},"Block Explorer URL:",n.a.createElement("b",null," https://bscscan.com")),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null)))),n.a.createElement("div",{className:"video"},n.a.createElement("video",{width:"80%",height:"600px",controls:!0},n.a.createElement("source",{src:"video/step-2.mp4",type:"video/mp4"})),n.a.createElement("div",{className:"thumbnail",style:I?{display:"none"}:null},n.a.createElement("img",{src:"img/thumbnail.png",width:"100vw",onClick:function(){return M(!0)}}))),n.a.createElement("br",null),n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("span",null,n.a.createElement("img",{src:"img/exclam.png",width:"20vw"})," "),n.a.createElement("span",{className:"warn-text"},"Watch this tutorial and follow all the steps as directed!")))),n.a.createElement("div",{className:"steps"},n.a.createElement("div",{className:"step-title"},"STEP 3"),n.a.createElement("br",null),n.a.createElement("div",{className:"step-fill"},n.a.createElement(x.a,{container:!0},n.a.createElement(x.a,{item:!0,xs:12,sm:2,md:2,lg:2},n.a.createElement("img",{src:"img/step-3.webp",width:"70%",style:{marginLeft:"15%"}})),n.a.createElement(x.a,{item:!0,xs:12,sm:1,md:1,lg:1}),n.a.createElement(x.a,{item:!0,xs:12,sm:9,md:9,lg:9},n.a.createElement("div",{className:"step-sub-title"},"Add MoneyBall Token"),n.a.createElement("br",null),n.a.createElement("div",{className:"step-sub-comment"},"Token Address:",n.a.createElement("b",null," 0x8d7d20bc3be644eaab3239e3a5aa9158b84912ed"),n.a.createElement("br",null),"Token Symbol:",n.a.createElement("b",null," MBT"),n.a.createElement("br",null),"Token of precision:",n.a.createElement("b",null," 18"),n.a.createElement("br",null)))),n.a.createElement("div",{className:"video"},n.a.createElement("video",{width:"80%",height:"600px",controls:!0},n.a.createElement("source",{src:"video/step-3.mp4",type:"video/mp4"})),n.a.createElement("div",{className:"thumbnail",style:_?{display:"none"}:null},n.a.createElement("img",{src:"img/thumbnail.png",width:"100vw",onClick:function(){return Y(!0)}}))),n.a.createElement("br",null),n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("span",null,n.a.createElement("img",{src:"img/exclam.png",width:"20vw"})," "),n.a.createElement("span",{className:"warn-text"},"Watch this tutorial and follow all the steps as directed!")))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:T?"hidden":""},n.a.createElement("div",null,n.a.createElement("input",{ref:F,className:"address",onChange:W,value:a.address||"",type:"text",name:"address",placeholder:"Enter Your Public Key",required:!0})),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("input",{ref:z,className:"email",onChange:W,value:a.email||"",type:"email",name:"email",placeholder:"Enter Your Email Address",required:!0})),n.a.createElement("br",null),n.a.createElement("div",{className:d?"result-text2":"hidden"},"Failed Submitting. Please try again"),n.a.createElement("div",{className:v?"result-text3":"hidden"},"Already exist. Try with another"),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("button",{onClick:K,className:"button-1",type:"submit"},"Click to Submit"))),n.a.createElement("br",null),n.a.createElement("div",{className:m?"result-text1":"hidden"},"You have successfully submitted !"),n.a.createElement("br",null),n.a.createElement("div",{className:"steps"},n.a.createElement("div",{className:"step-title"},"STEP 4"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"step-fill"},n.a.createElement(x.a,{container:!0},n.a.createElement(x.a,{item:!0,xs:12,sm:2,md:2,lg:2},n.a.createElement("img",{src:"img/step-4.webp",width:"70%",style:{marginLeft:"15%"}})),n.a.createElement(x.a,{item:!0,xs:12,sm:1,md:1,lg:1}),n.a.createElement(x.a,{item:!0,xs:12,sm:9,md:9,lg:9},n.a.createElement("div",{className:"step-sub-title"},n.a.createElement("a",{href:"https://t.me/joinchat/zF2KxNkFrNk4YmE1",target:"_blank"},"Join the Telegram channel to receive updates")),n.a.createElement("br",null))))),n.a.createElement("hr",{style:{width:"60%",color:"rgba(255, 255, 255, 0.34)"}}),n.a.createElement("br",null),n.a.createElement("div",{style:{color:"white",fontFamily:"Arial",fontSize:"16px",textAlign:"center"}},"We do not share or take sensitive/ personal data. Your Public address is safe to share and we will only use it in your favor.")))),n.a.createElement(x.a,{item:!0,xs:12,sm:12,md:1,lg:2})),n.a.createElement("div",{className:"success-footer"},n.a.createElement("div",{style:{marginLeft:"20%"}},"\xa9 Copyright 2021  - All Rights Reserved")))}var O=function(){var e=Object(l.useState)(!0),t=Object(g.a)(e,2),a=t[0],r=t[1],c={key:"rzp_live_JOlrGIAoSDme3h",currency:"INR",receipt:"#1",amount:"10000",name:"MoneyBall Token",description:"Pay for the Webinar",handler:function(e){r(!0)},prefill:{name:"",contact:"",email:"",address:""},notes:{address:""},theme:{color:"#26e3ff",hide_topbar:!1}};return Object(l.useEffect)(function(){var e=document.createElement("script");e.src="https://checkout.razorpay.com/v1/checkout.js",e.async=!0,document.body.appendChild(e),setTimeout(function(){!function(e){var t=new window.Razorpay(e);t.on("payment.failed",function(e){console.log("Payment Failed: ",e),r(!1)}),t.open()}(c)},1e3)},[]),n.a.createElement("div",null,a?n.a.createElement(k,null):n.a.createElement("div",{className:"buttons"},n.a.createElement("div",{className:"success-header"},n.a.createElement("img",{src:"img/film-logo.png"}),n.a.createElement("span",{className:"logo-text"},"Premiere")),n.a.createElement("div",{className:"text-note"},n.a.createElement("div",{className:"notice-text"},"Kindly wait while the payment page loads"),n.a.createElement("br",null),n.a.createElement("div",{className:"notice-text"},"Once your payment is complete do not Refresh or exit the payment success page until you've completed all necessary steps."),n.a.createElement("br",null),n.a.createElement("div",{className:"notice-text"},"Incase you require any assistance, contact support via mail ",n.a.createElement("span",{style:{color:"lightblue"}},"support@cryptodomination101.com"))),n.a.createElement("a",{className:"back-button",href:"https://www.premiere-mbt.com/",blank:"_self"},n.a.createElement("img",{src:"img/return-button.png",width:"100vw"}),n.a.createElement("b",{style:{color:"white",marginTop:"20px",display:"block",textAlign:"center"}},"BACK")),n.a.createElement("br",null)))};function S(){return n.a.createElement(s.a,null,n.a.createElement(m.c,null,n.a.createElement(m.a,{exact:!0,path:"/",component:O}),n.a.createElement(m.a,{exact:!0,path:"/moneyball@2607/mbtpremiere",component:h})))}function T(){return n.a.createElement(S,null)}c.a.render(n.a.createElement(T,null),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.12ef9887.chunk.js.map
(this.webpackJsonpcheetah=this.webpackJsonpcheetah||[]).push([[0],{16:function(e,a,t){},17:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),c=t(3),r=t.n(c);t(16),t(17);var m=[{id:"1",name:"Products"},{id:"2",name:"Promotions"},{id:"3",name:"Ingrediants"},{id:"4",name:"Contact US"}],s=t(4);const i=e=>{let{displaycart:a,discart:t}=e;const[c,r]=Object(n.useState)(m);return console.log(t),l.a.createElement("div",{className:"navbar"},l.a.createElement("img",{src:"./assets/logo.png",alt:"",className:"logo"}),l.a.createElement("div",{className:"heading"},m.map(e=>l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#cart"},e.name)))),l.a.createElement("div",{className:"login"},l.a.createElement("button",null,"Register"),l.a.createElement(s.a,{size:40,onClick:()=>a(!t)})))},o=()=>l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"home"},l.a.createElement("div",{className:"hometext"},l.a.createElement("h1",null,"CHEETAH CHUG."),l.a.createElement("h1",{className:"xe"},"Xtreme emergency"),l.a.createElement("p",{className:"grab"},"Cheetah chug is appreciated all over the world by atheletes, students as well as in demanding professions and long-distance travel."),l.a.createElement("button",null,"buy")),l.a.createElement("img",{src:"./assets/home.jpg",alt:"none"})));var d=[{id:"1",name:"Caffiene",content:"cheetah chug has 300mg of natural caffeine."},{id:"2",name:"B Group Vitamin",content:"240 ml or 8-oz cheetah chug contains 2.4 mcg of vitamin B12."},{id:"3",name:"Taurine",content:"1 gram of taurine per 8 ounces."},{id:"4",name:"Sugar",content:" A cheetah chug energy drink is known to have 54 grams of sugar."}],u=t(5);const E=e=>{let{ingrediant:a}=e;const[t,c]=Object(n.useState)(!1);let r;return r=t?"display":"displaynone",l.a.createElement("div",{className:"single",onClick:()=>c(!t)},l.a.createElement("div",{className:"ing-w"},l.a.createElement("div",null,a.name),l.a.createElement(u.a,{className:t?"rotate":"rotateback"})),l.a.createElement("div",{className:r},a.content))},g=()=>{const[e,a]=Object(n.useState)(d);return l.a.createElement("div",null,l.a.createElement("div",{style:{background:"black"}},l.a.createElement("h1",{className:"ingrediants-top"},"INGREDIANTS"),l.a.createElement("div",{className:"underline"})),l.a.createElement("div",{className:"ingrediants"},l.a.createElement("img",{src:"./assets/ingredieant.jpg",alt:""}),l.a.createElement("div",{className:"ingrediant-component"},l.a.createElement("h1",{className:"heading"},"Ingrediants."),e.map(e=>l.a.createElement(E,{key:e.id,ingrediant:e})))))},p=()=>l.a.createElement("div",{className:"vidio"},l.a.createElement("h1",null,"PROMOTION"),l.a.createElement("div",{className:"underline"}),l.a.createElement("video",{className:"PROMOTION",src:"./assets/chugvidio.mp4",autoPlay:"autoplay",controls:"volume",muted:"controls",loop:!0})),v=e=>{let{product:a,addtocart:t}=e;const{id:n,name:c,img:r,cards:m,price:s}=a;return l.a.createElement("div",{className:"singleproduct"},l.a.createElement("div",{className:"product"},l.a.createElement("h1",null,c),l.a.createElement("div",{className:"cards"},m.map(e=>l.a.createElement("div",null,l.a.createElement("div",{className:"singlecard",key:e.id},l.a.createElement("p",{className:"amount-per-serving"},e.name),l.a.createElement("p",{className:"Total-fat"},e.cl),l.a.createElement("p",{className:"percentage"},e.percentage))))),console.log(s),l.a.createElement("div",{className:"cost"},s+"$"),l.a.createElement("button",{onClick:()=>t(n)},"Add to cart")),l.a.createElement("img",{src:r,alt:""}))},h=e=>{let{products:a,addtocart:t}=e;return l.a.createElement("div",null,l.a.createElement("div",{className:"productsall"},a.map(e=>l.a.createElement(v,{key:e.id,product:e,addtocart:t}))))};var N=[{id:"1",name:"CHEETAH CHUG",img:"./assets/1 selling.jpg",price:"19",cards:[{id:"1",name:"Amount",cl:"110 cl",percentage:"7.1%"},{id:"2",name:"Total fat",cl:"0g",percentage:"0.1%"},{id:"3",name:"Sodium",cl:"130mg",percentage:"6%"},{id:"4",name:"Total Carbs",cl:"28g",percentage:"10%"},{id:"5",name:"Protien",cl:"10g",percentage:"0%"}]},{id:"2",name:"CHEETAH CHUG XE",img:"./assets/2 selling.jpg",price:"25",cards:[{id:"1",name:"Amount Per Serving",cl:"110 cl",percentage:"7.1%"},{id:"2",name:"Total fat",cl:"0g",percentage:"0.1%"},{id:"3",name:"Sodium",cl:"130mg",percentage:"6%"},{id:"4",name:"Total Carbs",cl:"28g",percentage:"10%"},{id:"5",name:"Protien",cl:"10g",percentage:"5%"}]},{id:"3",name:"CHEETAH CHUG XXE",img:"./assets/3 selling.jpg",price:"30",cards:[{id:"1",name:"Amount Per Serving",cl:"110 cl",percentage:"7.1%"},{id:"2",name:"Total fat",cl:"0g",percentage:"0.1%"},{id:"3",name:"Sodium",cl:"130mg",percentage:"6%"},{id:"4",name:"Total Carbs",cl:"28g",percentage:"10%"},{id:"5",name:"Protien",cl:"10g",percentage:"0%"}]}];const b=e=>{let{singlecartitem:a,deletecartitem:t}=e;return l.a.createElement("div",{className:"cart-main"},l.a.createElement("img",{src:a.img,alt:""}),l.a.createElement("div",{className:"cartproductinfo"},l.a.createElement("div",{className:"cartproductname"},a.name),l.a.createElement("div",{className:"instock"},"In stock"),l.a.createElement("div",{className:"freeship"},"Eligible for free shipping"),l.a.createElement("form",{action:"",onSubmit:void 0},l.a.createElement("label",{htmlFor:"quantity"},"Quantity"),l.a.createElement("input",{type:"number",id:"quantity",min:1,placeholder:"1"})),l.a.createElement("div",{className:"price"},a.price+"$"),l.a.createElement("a",{onClick:()=>t(a.id)},"delete")))};var f=t(6);const C=e=>{let{cartitem:a,deletecartitem:t,discart:c,displaycart:r}=e;const[m,s]=Object(n.useState)(0);let i=0;if(a.map(e=>{i+=parseInt(e.price),console.log(i)}),c)return l.a.createElement("div",{className:"displaycart"},l.a.createElement("div",{className:"carthead"},l.a.createElement("div",{className:"shopping-cart"},l.a.createElement("h1",null,"shopping carts"),l.a.createElement("div",{className:"underline"})),l.a.createElement("div",null,l.a.createElement(f.a,{className:"IoCloseSharp",onClick:()=>r(!1),size:40,color:"#adff2f"}))),l.a.createElement("div",{className:"subtotal"},"subtotal ",l.a.createElement("div",{className:"sub-num"}," ( ".concat(a.length," ):")),l.a.createElement("div",{className:"sub-price"},i+"$"),l.a.createElement("button",{className:"cart-buy-btn"},"Checkout")),l.a.createElement("div",null,a.map(e=>l.a.createElement("div",null,l.a.createElement(b,{singlecartitem:e,deletecartitem:t,key:e.id}),l.a.createElement("hr",{className:"hr"})))),l.a.createElement("div",null,"no items then..."))},y=()=>l.a.createElement("div",{className:"footer"},l.a.createElement("img",{src:"./assets/footer.jpg",alt:""}),l.a.createElement("div",{className:"about"},l.a.createElement("h1",null,"About Cheetah Chug"),l.a.createElement("li",null,l.a.createElement("ul",null,"News"),l.a.createElement("ul",null,"Contact us"),l.a.createElement("ul",null,"Frequent questions"))),l.a.createElement("div",{className:"more-info"},l.a.createElement("h1",null,"More information"),l.a.createElement("li",null,l.a.createElement("ul",null,"Cheetah Chug Owners"))),l.a.createElement("div",{className:"legal"},l.a.createElement("h1",null,"Legal"),l.a.createElement("li",null,l.a.createElement("ul",null,"Privacy policies"),l.a.createElement("ul",null,"Terms and conditions"),l.a.createElement("ul",null,"Complaints book"))));var k=function(){const[e,a]=Object(n.useState)([]),[t,c]=Object(n.useState)(!1),r=e=>{c(e),console.log(t)};return l.a.createElement("div",{className:""},l.a.createElement("div",{className:t?"all-content":"content"},l.a.createElement(i,{displaycart:r,discart:t}),l.a.createElement(o,null),l.a.createElement(g,null),l.a.createElement(p,null),l.a.createElement(h,{products:N,addtocart:t=>{N.filter(n=>{n.id==t&&a([...e,n])})}}),l.a.createElement(y,null)),l.a.createElement("div",{className:t?"none":"dis"},l.a.createElement(C,{displaycart:r,cartitem:e,deletecartitem:t=>{a(e.filter(e=>e.id!=t)),console.log(e),console.log(t)},discart:t})))};var S=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then(a=>{let{getCLS:t,getFID:n,getFCP:l,getLCP:c,getTTFB:r}=a;t(e),n(e),l(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null))),S()},7:function(e,a,t){e.exports=t(18)}},[[7,1,2]]]);
//# sourceMappingURL=main.b1f455b4.chunk.js.map
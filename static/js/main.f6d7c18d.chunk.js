(this.webpackJsonpmastermindv2=this.webpackJsonpmastermindv2||[]).push([[0],{122:function(e,t,n){e.exports=n.p+"static/media/oops.2d69083e.wav"},123:function(e,t,n){e.exports=n.p+"static/media/wrong.5acd1a08.mp3"},124:function(e,t,n){e.exports=n.p+"static/media/yay.caf29821.wav"},129:function(e,t,n){e.exports=n(300)},138:function(e,t,n){},300:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(40),c=n.n(i),l=n(15),s=n(28),o=n(117),u=(n(138),n(65)),m={primary:"#0288D1",primaryAccent:"#f8f8ff",secondary:"#303030",secondaryAccent:"#a9a9a9",black:"#000000",light:"#E8E8E8",lightGray:"#F8F8F8",darkGray:"#707070",white:"#FFFFFF",green:"#B2ECA7",yellow:"#FDFDA4",orange:"#F6AA6E",red:"#B23326"},d={buttonWidth:140,radiusSmall:5,fontSize:{smaller:10,small:14,medium:18,large:30}},p=n(64),h=n.n(p),f=(n(140),n(3)),g=n(2);function b(){var e=Object(f.a)(["\n    align-items: ","\n  "]);return b=function(){return e},e}function E(){var e=Object(f.a)(["\n    justify-content: ","\n  "]);return E=function(){return e},e}function v(){var e=Object(f.a)(["\n    flex-direction: column\n  "]);return v=function(){return e},e}function x(){var e=Object(f.a)(["\n  display: flex;\n  ",";\n  ",";\n  ","\n"]);return x=function(){return e},e}var y=g.b.div(x(),(function(e){return e.vertical&&Object(g.a)(v())}),(function(e){return e.justify&&Object(g.a)(E(),e.justify)}),(function(e){return e.align&&Object(g.a)(b(),e.align)}));function w(){var e=Object(f.a)(["\n    color: ","\n  "]);return w=function(){return e},e}function j(){var e=Object(f.a)(["\n    font-size: ","px\n  "]);return j=function(){return e},e}function O(){var e=Object(f.a)(["\n    text-align: ","\n  "]);return O=function(){return e},e}function S(){var e=Object(f.a)(["\n  margin: ",";\n  ",";\n  ",";\n  ",";\n"]);return S=function(){return e},e}var G=g.b.div(S(),(function(e){return e.margin?e.margin:"0px"}),(function(e){return e.align&&Object(g.a)(O(),e.align)}),(function(e){return e.size&&Object(g.a)(j(),d.fontSize[e.size])}),(function(e){return e.color&&Object(g.a)(w(),m[e.color])})),C=function(e){return a.a.createElement(y,{vertical:!0},a.a.createElement(G,{size:"small",color:"secondary"},"Game Rules"),a.a.createElement(y,{align:"flex-start"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(G,{size:"smaller"},"You get 10 chances to crack the 4 digit code")),a.a.createElement("li",null,a.a.createElement(G,{size:"smaller"},"After each guess, you will get two feedback values:")),a.a.createElement("li",null,a.a.createElement(G,{size:"smaller"}," 1) Numbers and Places - # of correct digits in the right place ")),a.a.createElement("li",null,a.a.createElement(G,{size:"smaller"}," 2) Numbers - # of correct digits in the wrong place ")))),a.a.createElement(G,{size:"small",color:"secondary"},"Scoring"),a.a.createElement(y,{align:"flex-start"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(G,{size:"smaller"},"You start with 100 points")),a.a.createElement("li",null,a.a.createElement(G,{size:"smaller"},"10 points deducted for each round of incorrect guesses")),a.a.createElement("li",null,a.a.createElement(G,{size:"smaller"},"You lose if you have 0 points or use up all your guesses - whichever comes first")))),a.a.createElement(G,{size:"smaller",color:"secondary"},"*Increase level to increase viable number range"),a.a.createElement(G,{size:"smaller",color:"secondary"},"Normal: 0 - 7 / Nightmare: 0 - 8 / Hell: 0 - 9"))},k=function(e){return a.a.createElement(y,{vertical:!0},a.a.createElement(G,{size:"small",color:"secondary"},"Leaderboard"))},z=n(5),L=n(41),A=n(17),N=n(42),U=n(43),_=n(44),H=n(12),T=n(121),M=n.n(T);function P(){var e=Object(f.a)(["\n  color: ",";\n  display: inline-block;\n  width: 100px;\n"]);return P=function(){return e},e}var F=g.b.label(P(),m.black),W=function(e){return a.a.createElement(F,null,e.text)};function Y(){var e=Object(f.a)(["\n  border-color: ",";\n  background-color: ",";\n  color: ",";\n  border-radius: calc(","px - 2px);\n  font-size: ","px;\n  width: ","px;\n  margin: 5px;\n  padding: 5px;\n  cursor: pointer;\n"]);return Y=function(){return e},e}var D=g.b.input(Y(),m.secondaryAccent,m.white,m.secondary,d.radiusSmall,d.fontSize.smaller,d.buttonWidth),I=function(e){return a.a.createElement("div",null,a.a.createElement(W,{text:e.text}),a.a.createElement(D,{placeholder:e.placeholder,onChange:function(t){return e.onChange(e.id,t)},value:e.value}))};function B(){var e=Object(f.a)(["\n  background-color: ",";\n  color: ",";\n  border-radius: ","px;\n  font-size: ","px;\n  width: ","px;\n  margin: 5px;\n  padding: 5px;\n  cursor: ",";\n  &:hover {\n    font-size: calc(","px + 2px)\n  } \n\n"]);return B=function(){return e},e}var R=g.b.button(B(),(function(e){return e.bgcolor?e.bgcolor:m.primary}),(function(e){return e.color?e.color:m.primaryAccent}),d.radiusSmall,d.fontSize.medium,d.buttonWidth,(function(e){return e.cursor?e.cursor:"pointer"}),d.fontSize.medium);function V(){var e=Object(f.a)(["\n  border-color: ",";\n  background-color: ",";\n  color: ",";\n  border-radius: calc(","px - 2px);\n  font-size: ","px;\n  width: ","px;\n  margin: 5px;\n  padding: 5px;\n  cursor: pointer;\n\n"]);return V=function(){return e},e}var J=g.b.select(V(),m.secondaryAccent,m.light,m.secondary,d.radiusSmall,d.fontSize.smaller,d.buttonWidth+14),$=function(e){return a.a.createElement("div",null,a.a.createElement(W,{text:e.text}),a.a.createElement(J,{onChange:function(t){return e.onChange(e.id,t)}},e.list.map((function(e,t){return a.a.createElement("option",{key:t},e)}))))},q=(n(157),["normal","nightmare","hell"]),K=function(e){function t(){var e,n;Object(L.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(N.a)(this,(e=Object(U.a)(t)).call.apply(e,[this].concat(a)))).state={username:"guest",level:"normal"},n}return Object(_.a)(t,e),Object(A.a)(t,[{key:"handleChange",value:function(e,t){this.setState(Object(z.a)({},e,t.target.value))}},{key:"handleSubmit",value:function(){var e=this;this.props.saveSettings(this.state).then((function(){return e.props.startGame()}))}},{key:"render",value:function(){return a.a.createElement(y,{vertical:!0,align:"center"},a.a.createElement(y,{align:"center"},a.a.createElement(G,{size:"medium",color:"secondary"},"Game Settings")),a.a.createElement("div",{style:{margin:"10px 20px"}},a.a.createElement(I,{text:"username",id:"username",placeholder:"leave blank for guest",onChange:this.handleChange.bind(this)}),a.a.createElement($,{text:"level",id:"level",onChange:this.handleChange.bind(this),list:q})),a.a.createElement(R,{onClick:this.handleSubmit.bind(this)},"New Game"))}}]),t}(r.Component),Q={saveSettings:function(e){var t="normal"===e.level?7:"nightmare"===e.level?8:9,n="https://www.random.org/integers/?num=4&min=0&max=".concat(t,"&col=1&base=10&format=plain&rnd=new");return function(r){return M.a.get("".concat(n)).then((function(n){return Object(H.a)({},e,{secretCode:n.data.split("\n").slice(0,4).join(""),rangeUpperLimit:t})})).then((function(e){r({type:"SAVE_SETTINGS",settings:e})})).catch((function(e){return console.log("error saving settings/getting api: ".concat(e))}))}},startGame:function(){return{type:"START_GAME"}}},X=Object(l.b)((function(e){return{username:e.username,level:e.level}}),Q)(K),Z=n(45),ee=n.n(Z),te=n(122),ne=n.n(te),re=n(123),ae=n.n(re),ie=n(124),ce=n.n(ie);function le(){var e=Object(f.a)(["\n  border-color: ",";\n  background-color: ",";\n  color: ",";\n  border-radius: calc(","px - 2px);\n  font-size: ","px;\n  width: ","px;\n  margin: 5px;\n  padding: 5px;\n"]);return le=function(){return e},e}var se=g.b.div(le(),m.secondaryAccent,m.light,m.secondary,d.radiusSmall,d.fontSize.small,d.buttonWidth-50),oe=function(e){return a.a.createElement(y,{horizontal:!0,align:"center"},a.a.createElement(W,{text:e.text}),a.a.createElement(se,null,e.value))};function ue(){var e=Object(f.a)(["\n  padding: 0.9em;\n  background: ",";\n  border-bottom: 2px solid ",";\n  text-align: center\n"]);return ue=function(){return e},e}function me(){var e=Object(f.a)(["\n  padding: 0.9em;\n  background: ",";\n  border-bottom: 2px solid ",";\n  font-size: 0.25em;\n  width: 60px\n"]);return me=function(){return e},e}function de(){var e=Object(f.a)(["\n\n"]);return de=function(){return e},e}function pe(){var e=Object(f.a)(["\n  border-collapse: collapse;\n  border-radius: ","px;\n  overflow: hidden;\n"]);return pe=function(){return e},e}var he=g.b.table(pe(),d.radiusSmall),fe=g.b.tr(de()),ge=g.b.th(me(),m.light,m.white),be=g.b.td(ue(),m.light,m.white),Ee=function(e){return a.a.createElement(he,null,a.a.createElement(fe,null,a.a.createElement(ge,null,"Your Guess"),a.a.createElement(ge,null,"Numbers"),a.a.createElement(ge,null,"Numbers AND Places")),e.guesses.map((function(e,t){return a.a.createElement(fe,{key:t},a.a.createElement(be,null,e.guess),a.a.createElement(be,null,e.feedback.nums),a.a.createElement(be,null,e.feedback.numPlaces))})))},ve=function(e,t){return!!e&&(4===e.length&&!isNaN(e)&&e.split("").reduce((function(e,n){return!(n>t||!e)}),!0))},xe=function(e,t){for(var n=0,r=0,a={},i={},c={},l=0;l<e.length;l++){var s=e[l],o=t[l];a.hasOwnProperty(s)?(a[s].indices[l]=l,a[s].count++):a[s]={indices:Object(z.a)({},l,l),count:1},i.hasOwnProperty(o)?(i[o].indices[l]=l,i[o].count++):i[o]={indices:Object(z.a)({},l,l),count:1}}for(var u in i)if(a.hasOwnProperty(u))for(var m in n+=Math.min(i[u].count,a[u].count),i[u].indices)a[u].indices.hasOwnProperty(m)&&(r++,n--);return c.nums=n,c.numPlaces=r,c},ye=function(){return Math.floor(4*Math.random())};function we(){var e=Object(f.a)(["\n  width: ","%;\n  background-color: ",";\n  height: 20px;\n  border-radius: 10px;\n"]);return we=function(){return e},e}function je(){var e=Object(f.a)(["\n  width: 90%;\n  height: 20px;\n  margin: 15px auto;\n  border-radius: 10px;\n  background-color: ",";\n"]);return je=function(){return e},e}var Oe=g.b.div(je(),m.light),Se=g.b.div(we(),(function(e){return e.percentage}),m.green),Ge=function(e){return a.a.createElement(Oe,null,a.a.createElement(Se,{percentage:e.percentage}))},Ce=n(126),ke=n.n(Ce),ze=n(125),Le=n.n(ze);function Ae(){var e=Object(f.a)(["\n"]);return Ae=function(){return e},e}var Ne=g.b.div(Ae()),Ue=function(e){var t=ke()(),n=t.width,r=t.height,i="win"===e.gameStatus?a.a.createElement(Le.a,{width:n,height:r}):null;return a.a.createElement(Ne,null,a.a.createElement(y,{vertical:!0,align:"center"},a.a.createElement(G,{size:"medium"},e.result),JSON.stringify(e.confetti),a.a.createElement(oe,{text:"Your Score",value:e.score}),a.a.createElement(oe,{text:"Username",value:e.username}),a.a.createElement(oe,{text:"Guesses Used",value:"".concat(10-e.guessesLeft," / 10")}),a.a.createElement(oe,{text:"Secret Code",value:e.secretCode}),e.children,a.a.createElement(R,{onClick:function(){return e.exitGame()}},"Play Again"),i))},_e=n(311);function He(){var e=Object(f.a)(["\n  background-color: ",";\n  border-radius: 5px;\n  width: 30px;\n  height: 30px;\n  margin: 5px;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center\n"]);return He=function(){return e},e}var Te=g.b.div(He(),m.orange),Me=function(e){return a.a.createElement(Te,null,e.show?e.hint:a.a.createElement(_e.a,{style:{color:m.yellow}}))};function Pe(){var e=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-grow: 4;\n  border-radius: 5px;\n  background-color: ",";\n  padding: 15px 5px;\n  margin: 10px 0;\n"]);return Pe=function(){return e},e}function Fe(){var e=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  flex-grow: 1;\n"]);return Fe=function(){return e},e}function We(){var e=Object(f.a)(["\n  display: flex;\n  @media (max-width: 900px) {\n    display: block;\n  }\n"]);return We=function(){return e},e}var Ye=g.b.div(We()),De=g.b.div(Fe()),Ie=g.b.div(Pe(),m.lightGray),Be=function(e){function t(){var e,n;Object(L.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(N.a)(this,(e=Object(U.a)(t)).call.apply(e,[this].concat(a)))).state={currentGuess:null,showHint0:!1,showHint1:!1,showHint2:!1,showHint3:!1,hintNotification:null},n}return Object(_.a)(t,e),Object(A.a)(t,[{key:"handleChange",value:function(e,t){this.setState(Object(z.a)({},e,t.target.value))}},{key:"handleSubmit",value:function(){var e=new ee.a(ne.a),t=new ee.a(ae.a),n=new ee.a(ce.a),r=this.state.currentGuess,a=this.props,i=a.rangeUpperLimit,c=a.secretCode,l=a.guessesLeft,s=a.score;if(ve(r,i)){var o=xe(r,c);this.props.saveGuess({guess:r,feedback:o}),4===o.numPlaces?(this.props.winGame(),n.play()):(t.play(),(l<=1||s<=10)&&this.props.loseGame(),this.setState({currentGuess:""}))}else{e.play();var u="Must be a valid 4 digit number. Each digit must be between 0 and ".concat(this.props.rangeUpperLimit,".");alert(u)}}},{key:"handleBuyHint",value:function(){var e,t=this,n=ye();this.setState((e={},Object(z.a)(e,"showHint".concat(n),!0),Object(z.a)(e,"hintNotification","Your hint: ".concat(this.props.secretCode[n]," unlocked!")),e),(function(){return t.props.updateGuessesScore(t.props.guessesLeft-3,t.props.score-30)})),setTimeout((function(){t.setState({hintNotification:null})}),1e3)}},{key:"render",value:function(){var e=!(this.props.guessesLeft-3>=0),t="win"===this.props.gameStatus?"You Win!":"lose"===this.props.gameStatus?"You Lose!":null;return null!==this.props.gameStatus?a.a.createElement(Ue,{result:t,exitGame:this.props.exitGame,secretCode:this.props.secretCode,guessesLeft:this.props.guessesLeft,username:this.props.username,score:this.props.score,gameStatus:this.props.gameStatus},a.a.createElement(Ee,{guesses:this.props.guesses})):a.a.createElement(Ye,null,a.a.createElement(De,null,a.a.createElement(G,{size:"medium",color:"secondary",align:"center"},"Game Stats"),a.a.createElement(oe,{text:"Username",value:this.props.username}),a.a.createElement(oe,{text:"Level",value:this.props.level}),a.a.createElement(oe,{text:"Score",value:this.props.score}),a.a.createElement(oe,{text:"Guesses Left",value:this.props.guessesLeft}),a.a.createElement(oe,{text:"Secret Code",value:this.props.secretCode})),a.a.createElement(y,{vertical:!0},a.a.createElement(Ie,null,a.a.createElement(G,{size:"smaller",color:"red",align:"center"},"(numbers must be between 0 and ",this.props.rangeUpperLimit,")"),a.a.createElement(Ge,{percentage:100-10*this.props.guessesLeft}),a.a.createElement(I,{text:"Current Guess",id:"currentGuess",placeholder:"please enter four digit number",onChange:this.handleChange.bind(this),value:this.state.currentGuess}),a.a.createElement(y,{justify:"center"},a.a.createElement(R,{bgcolor:m.white,color:m.primary,onClick:this.props.exitGame},"Give Up"),a.a.createElement(R,{onClick:this.handleSubmit.bind(this)},"Submit Guess"))),a.a.createElement(Ie,null,a.a.createElement(G,{size:"medium",color:"secondary",align:"center",margin:"0 0 5px 0"},"Hints"),a.a.createElement(G,{size:"smaller",color:"red",align:"center"},"(each hint will deduct 3 available guesses)"),a.a.createElement(G,{size:"smaller",color:"red",align:"center"},"(* caution * may buy hint that was already purchased)"),a.a.createElement(y,{justify:"space-around"},a.a.createElement(Me,{hint:this.props.secretCode[0],show:this.state.showHint0}),a.a.createElement(Me,{hint:this.props.secretCode[1],show:this.state.showHint1}),a.a.createElement(Me,{hint:this.props.secretCode[2],show:this.state.showHint2}),a.a.createElement(Me,{hint:this.props.secretCode[3],show:this.state.showHint3})),this.state.hintNotification,a.a.createElement(R,{bgcolor:e?m.light:m.white,color:m.orange,onClick:this.handleBuyHint.bind(this),disabled:e,cursor:e?"default":"cursor"},"Buy Hint"))),a.a.createElement(De,null,a.a.createElement(G,{size:"medium",color:"secondary",align:"center"},"Your Guesses"),a.a.createElement(Ee,{guesses:this.props.guesses})))}}]),t}(r.Component),Re={saveGuess:function(e){return{type:"SAVE_GUESS",guessObject:e}},winGame:function(){return{type:"WIN_GAME"}},loseGame:function(){return{type:"LOSE_GAME"}},exitGame:function(){return{type:"EDIT_GAME"}},updateGuessesScore:function(e,t){return{type:"UPDATE_GUESSES_SCORE",guessesLeft:e,score:t}}},Ve=Object(l.b)((function(e){return{username:e.username,level:e.level,playing:e.playing,score:e.score,guessesLeft:e.guessesLeft,secretCode:e.secretCode,rangeUpperLimit:e.rangeUpperLimit,guesses:e.guesses,gameStatus:e.gameStatus}}),Re)(Be);function Je(){var e=Object(f.a)(["\n  margin: 15px;\n  padding: 15px;\n  border: 1px "," solid;\n  border-radius: ","px;\n"]);return Je=function(){return e},e}var $e=g.b.div(Je(),m.light,d.radiusSmall),qe=Object(l.b)((function(e){return{playing:e.playing}}))((function(e){var t=!1===e.playing?a.a.createElement(X,null):a.a.createElement(Ve,null);return a.a.createElement($e,null,t)}));function Ke(){var e=Object(f.a)(["\n  margin: 10px auto;\n  max-width: 900px;\n  display: flex;\n  flex-direction: column;\n"]);return Ke=function(){return e},e}var Qe=g.b.div(Ke()),Xe=function(e){var t=Object(r.useState)(!1),n=Object(u.a)(t,2),i=n[0],c=n[1],l=Object(r.useState)(!1),s=Object(u.a)(l,2),o=s[0],d=s[1];return a.a.createElement(Qe,null,a.a.createElement(G,{align:"center",size:"large"},"Mastermind v.2"),a.a.createElement(y,{justify:"center"},a.a.createElement(R,{color:m.darkGray,bgcolor:m.light,id:"rules",onClick:function(){return c(!i)}},"How To Play"),a.a.createElement(R,{color:m.darkGray,bgcolor:m.light,id:"leaderboard",onClick:function(){return d(!o)}},"Leaderboard")),a.a.createElement(qe,null),a.a.createElement((function(e){return a.a.createElement(h.a,{height:300,visible:i,onClose:function(){return c(!i)}},a.a.createElement(C,null))}),null),a.a.createElement((function(e){return a.a.createElement(h.a,{height:300,visible:o,onClose:function(){return d(!o)}},a.a.createElement(k,null))}),null))},Ze={username:"guest",level:"normal",playing:!1,score:100,guessesLeft:10,secretCode:null,rangeUpperLimit:7,guesses:[],gameStatus:null,confetti:!1},et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0,n=e.guessesLeft-1,r=e.guesses.slice(0),a=e.score-10;switch(t.type){case"SAVE_SETTINGS":return Object(H.a)({},e,{username:t.settings.username,level:t.settings.level,rangeUpperLimit:t.settings.rangeUpperLimit,secretCode:t.settings.secretCode});case"START_GAME":return Object(H.a)({},e,{playing:!0});case"SAVE_GUESS":return r.push(t.guessObject),Object(H.a)({},e,{guesses:r,guessesLeft:n,score:a});case"WIN_GAME":return Object(H.a)({},e,{gameStatus:"win",confetti:!0});case"LOSE_GAME":return Object(H.a)({},e,{gameStatus:"lose"});case"EDIT_GAME":return Object(H.a)({},Ze);case"UPDATE_GUESSES_SCORE":return Object(H.a)({},e,{guessesLeft:t.guessesLeft,score:t.score});default:return e}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var tt=Object(s.c)(et,Object(s.a)(o.a));c.a.render(a.a.createElement(l.a,{store:tt},a.a.createElement(Xe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[129,1,2]]]);
//# sourceMappingURL=main.f6d7c18d.chunk.js.map
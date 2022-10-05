"use strict";(self.webpackChunkICRON_WFM_WEB=self.webpackChunkICRON_WFM_WEB||[]).push([[128],{93128:(Z,m,i)=>{i.r(m),i.d(m,{LoginPageModule:()=>k});var O=i(36895),f=i(80529),b=i(5039),e=i(94650),_=i(80785),x=i(83672);let v=(()=>{class n extends b.q{constructor(t,o,a){super(o,a,""),this.storageHelper=t,this.http=o,this.env=a,this.getUserInfo=()=>this.http.get(`${this.env.baseUrl}/api/v1/command/icron-server`,{headers:this.reqHeader}),this.login=r=>{const c=new f.WM({"Content-Type":"application/json",Accept:"application/json","No-Auth":"True"});return this.http.post(this.env.baseUrl+"/api/security/login",r,{headers:c})}}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(_.c),e.LFG(f.eN),e.LFG(x.D))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var p=i(85892),C=i(59371),P=i(11290),w=i(15439),y=i.n(w),E=i(77579),R=i(82722),S=i(64181),M=i(85693),I=i(54463),s=i(24006);const L=[{path:"",component:(()=>{class n{constructor(t,o,a,r,c,T,A,F){this.router=t,this.storageHelper=o,this.env=a,this.route=r,this.icHelper=c,this.loginSrv=T,this.toastSrv=A,this.translate=F,this.destroy=new E.x,this.LanguageMap=new Map,this.languageObj={},this.user={username:"",password:""},this.passwordVisible=!1,this.handleLoginResponse=(d,u="")=>{this.storageHelper.setUserToken(d.value);const h=this.storageHelper.parseJWTToken(d.value);if(h){switch(h.loginResponse){case"Probe ICRON Failure":case"USER_SAME_AS_SERVERUSER":case"EXCEEDS_MAX_USER":case"SERVER_LICENSE_ERROR":case"Connection_Lost":case"USER_NOT_AUTHORIZED":case"API_VERSION_MISMATCH":case"USER_NOT_FOUND":return void this.toastSrv.error(this.languageObj[h.loginResponse])}this.loginSrv.getUserInfo().subscribe(l=>{this.storageHelper.setUserInfo(l),this.storageHelper.setAppLang(l.language),y().locale(l.language.split("-")[0]),this.translate.use(l.language),this.translate.setDefaultLang(l.language);const j={username:l.userName,lastLogin:(new Date).getDate(),server:{}};localStorage.setItem("loginInfo",JSON.stringify(j)),this.router.navigateByUrl("/")})}else console.error(this.languageObj.User_authentication_failure,this.languageObj.Login_Error,60)},this.injectTextWithHyperlinks=d=>{const u=document.getElementById("terms-of-service-text");u&&(u.innerHTML+=d)},this.initLanguages()}ngOnInit(){this.setUserLanguage(),this.injectTextWithHyperlinks(this.languageObj.By_clicking_Login_I_agree_to_ICRON_WFMs_Terms_of_Service_Privacy_Policy)}setUserLanguage(){const t=navigator.language.split("-")[0]||navigator.userLanguage.split("-")[0];this.LanguageMap.has(t)?this.languageObj=this.LanguageMap.get(t):this.LanguageMap.get("tr")}initLanguages(){this.LanguageMap.set("tr",{Welcome:"Ho\u015fgeldiniz",The_power_behind_harmony:"Harmoninin Arkas\u0131ndaki G\xfc\xe7",Login:"Giri\u015f",Password:"\u015eifre","E-Mail_or_Username":"E-posta ya da kullan\u0131c\u0131 ad\u0131",Remember_Me:"Beni Hat\u0131rla","Button-Login":"Giri\u015f Yap",By_clicking_Login_I_agree_to_ICRON_WFMs_Terms_of_Service_Privacy_Policy:'Giri\u015f Yap\'a t\u0131klayarak, ICRON WFM\'in <a target="_blank" rel="noopener noreferrer" href="https://www.icrontech.com/tr/wfm-sartlar-ve-kosullar/">Kullan\u0131m \u015eartlar\u0131</a> ve <a target="_blank" rel="noopener noreferrer" href="https://www.icrontech.com/tr/wfm-gizlilik-politikasi/">Gizlilik Politikas\u0131</a>n\u0131 kabul ediyorum.',Login_Error:"Giri\u015f Hatas\u0131",User_authentication_failure:"Kullan\u0131c\u0131 kimlik do\u011frulama hatas\u0131",CloudAPI_Failure:"Servis kullan\u0131lam\u0131yor","Username and password should be provided.":"Kullan\u0131c\u0131 ad\u0131 ve \u015fifresini girin","Invalid credentials.":"Kullan\u0131c\u0131 ad\u0131 veya \u015fifresi ge\xe7ersiz","Probe ICRON Failure":"Uygulama sunucusuna ula\u015f\u0131lam\u0131yor",USER_NOT_FOUND:"Kullan\u0131c\u0131 servise tan\u0131ml\u0131 de\u011fil",USER_SAME_AS_SERVERUSER:"Kullan\u0131c\u0131 ad\u0131 ge\xe7ersiz",EXCEEDS_MAX_USER:"Maksimum lisansl\u0131 kullan\u0131c\u0131 say\u0131s\u0131 a\u015f\u0131lamaz",SERVER_LICENSE_ERROR:"Uygulama lisans\u0131n\u0131n s\xfcresi doldu veya etkinle\u015ftirilmedi",Connection_Lost:"Ba\u011flant\u0131 hatas\u0131",USER_NOT_AUTHORIZED:"Kullan\u0131c\u0131 eri\u015fim yetkisi yoktur",API_VERSION_MISMATCH:"Uyumsuz API s\xfcr\xfcm\xfc"}),this.LanguageMap.set("en",{Welcome:"Welcome",The_power_behind_harmony:"The power behind harmony",Login:"Login",Password:"Password","E-Mail_or_Username":"Mail or Username",Remember_Me:"Remember Me","Button-Login":"Login",By_clicking_Login_I_agree_to_ICRON_WFMs_Terms_of_Service_Privacy_Policy:'By clicking Login, I agree to ICRON WFM\u2019s <a target="_blank" rel="noopener noreferrer" href="https://www.icrontech.com/wfm-terms-of-use/">Terms of Service</a> & <a target="_blank" rel="noopener noreferrer" href="https://www.icrontech.com/wfm-privacy-policy/">Privacy Policy</a>.',Login_Error:"Login Error",User_authentication_failure:"User authentication failure",CloudAPI_Failure:"Service is not available","Username and password should be provided.":"Enter username and password","Invalid credentials.":"Invalid username or password","Probe ICRON Failure":"Application server is not available",USER_NOT_FOUND:"Unauthorized service user",USER_SAME_AS_SERVERUSER:"User name is not valid",EXCEEDS_MAX_USER:"Cannot exceed maximum licensed user",SERVER_LICENSE_ERROR:"Application license is expired or not activated",Connection_Lost:"Connection lost",USER_NOT_AUTHORIZED:"User is not authorized",API_VERSION_MISMATCH:"API version mismatch"})}toggleSeePassword(){this.passwordVisible=!this.passwordVisible}login(t){this.icHelper.generateClientId();const o=this.icHelper.getClientID();this.loginSrv.login({username:t.username,password:t.password,clientId:o,clientAPIVersion:C.Bg,protoFileVersion:P.ICRONConstants.PROTO_FILE_VERSION}).pipe((0,R.R)(this.destroy)).subscribe({next:r=>{this.handleLoginResponse(r)},error:r=>{this.toastSrv.error("string"==typeof r.error?this.languageObj[r.error]:this.languageObj.CloudAPI_Failure)}})}ngOnDestroy(){this.destroy.next(!0),this.destroy.complete()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.F0),e.Y36(_.c),e.Y36(x.D),e.Y36(p.gz),e.Y36(S._),e.Y36(v),e.Y36(M.D),e.Y36(I.sK))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-login-page"]],decls:45,vars:11,consts:[[1,"container-fluid","background"],[1,"row"],[1,"col","left-panel"],[1,"jumbotron","back-photo"],[1,"jumbotron-contents"],["src","./assets/images/login-logo.svg","alt","Icron WFM",1,"wfm-login-logo"],["id","welcome-text"],["id","login-description"],[1,"col","d-flex","flex-column","justify-content-center","right-panel"],[1,"row","d-flex","justify-content-center"],["src","./assets/images/login-logo.svg","alt","Icron WFM",1,"wfm-login-logo-mobile"],[1,"login-tray"],[1,"row","justify-content-center"],["src","./assets/icons/default-profile.svg","alt","User",1,"user-default-icon"],["id","login-text"],[3,"ngSubmit"],["loginForm","ngForm"],[1,"row","justify-content-center","username-input"],[1,"input-container"],["src","./assets/icons/feather-mail.svg",1,"login-mail-icon"],["src","./assets/icons/feather-mail-white.svg",1,"login-mail-icon-white"],["id","username-input-field","type","text","name","username","required","",3,"placeholder","ngModel"],[1,"row","justify-content-center","password-input"],["src","./assets/icons/password.svg",1,"login-pass-icon"],["src","./assets/icons/password-white.svg",1,"login-pass-icon-white"],["id","password-input-field","name","password",3,"type","placeholder","ngModel"],["src","./assets/icons/show-password.svg",1,"login-see-pass-icon",2,"cursor","pointer",3,"click"],["src","./assets/icons/show-password-white.svg",1,"login-see-pass-icon-white",2,"cursor","pointer",3,"click"],[1,"form-check","remember-me-container"],["id","remember-me"],["type","checkbox","value","","id","flexCheckDefault",1,"form-check-input","remember-box"],["for","flexCheckDefault",1,"form-check-label","remember-label"],[1,"row","justify-content-center","login-button"],["id","login-btn","type","submit",3,"disabled"],["id","terms-of-service-text"]],template:function(t,o){if(1&t){const a=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",1),e._UZ(6,"img",5),e.qZA(),e.TgZ(7,"div",1)(8,"p",6),e._uU(9),e.qZA()(),e.TgZ(10,"div",1)(11,"p",7),e._uU(12),e.qZA()()()()(),e.TgZ(13,"div",8)(14,"div",9),e._UZ(15,"img",10),e.TgZ(16,"div",11)(17,"div",12),e._UZ(18,"img",13),e.qZA(),e.TgZ(19,"div",12)(20,"p",14),e._uU(21),e.qZA()(),e.TgZ(22,"form",15,16),e.NdJ("ngSubmit",function(){e.CHM(a);const c=e.MAs(23);return e.KtG(o.login(c.value))}),e.TgZ(24,"div",17)(25,"div",18),e._UZ(26,"img",19)(27,"img",20)(28,"input",21),e.qZA()(),e.TgZ(29,"div",22)(30,"div",18),e._UZ(31,"img",23)(32,"img",24)(33,"input",25),e.TgZ(34,"img",26),e.NdJ("click",function(){return o.toggleSeePassword()}),e.qZA(),e.TgZ(35,"img",27),e.NdJ("click",function(){return o.toggleSeePassword()}),e.qZA()()(),e.TgZ(36,"div",28)(37,"div",29),e._UZ(38,"input",30),e.TgZ(39,"label",31),e._uU(40),e.qZA()()(),e.TgZ(41,"div",32)(42,"button",33),e._uU(43),e.qZA()(),e._UZ(44,"div",34),e.qZA()()()()()()}if(2&t){const a=e.MAs(23);e.xp6(9),e.Oqu(o.languageObj.Welcome),e.xp6(3),e.Oqu(o.languageObj.The_power_behind_harmony),e.xp6(9),e.Oqu(o.languageObj.Login),e.xp6(7),e.s9C("placeholder",o.languageObj["E-Mail_or_Username"]),e.Q6J("ngModel",o.user.username),e.xp6(5),e.s9C("placeholder",o.languageObj.Password),e.Q6J("type",o.passwordVisible?"text":"password")("ngModel",o.user.password),e.xp6(7),e.hij(" ",o.languageObj.Remember_Me," "),e.xp6(2),e.Q6J("disabled",!a.valid),e.xp6(1),e.Oqu(o.languageObj.Login)}},dependencies:[s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.On,s.F],styles:['.back-photo[_ngcontent-%COMP%]{top:0;left:0;min-width:950px;width:auto;min-height:950px;height:100vh;background:transparent url(assets/images/panel-background.png) 0% 0% no-repeat padding-box;background-size:100% 100%;opacity:1;position:relative}.login-tray[_ngcontent-%COMP%]{width:500px;height:539px;opacity:1;position:relative}.left-panel[_ngcontent-%COMP%]{min-height:950px;flex:100vh 0}.right-panel[_ngcontent-%COMP%]{min-height:950px;height:100vh}.background[_ngcontent-%COMP%]{background-color:#fff;padding:0;max-width:100%;overflow-x:hidden}#login-text[_ngcontent-%COMP%]{width:100px;text-align:center;margin-top:31px;padding:0;font: 600 36px/60px "Inter, Medium";letter-spacing:0px;color:#720f78;opacity:1}#login-user-picture[_ngcontent-%COMP%]{width:30px}.login-mail-icon[_ngcontent-%COMP%]{margin:20px;padding-right:20px;border-right:solid 1px}.login-mail-icon-white[_ngcontent-%COMP%]{margin:20px;padding-right:20px;border-right:solid 1px;display:none}.login-pass-icon[_ngcontent-%COMP%]{margin:20px;padding-right:20px;border-right:solid 1px}.login-pass-icon-white[_ngcontent-%COMP%]{margin:20px;padding-right:20px;border-right:solid 1px;display:none}.login-see-pass-icon[_ngcontent-%COMP%]{margin:20px}.login-see-pass-icon-white[_ngcontent-%COMP%]{margin:20px;display:none}.username-input[_ngcontent-%COMP%]{margin-top:52px;outline:none}.password-input[_ngcontent-%COMP%]{margin-top:20px;outline:none}.input-container[_ngcontent-%COMP%]{display:flex;width:100%;padding:0}#forget-password[_ngcontent-%COMP%]{width:200px}#remember-me[_ngcontent-%COMP%]{width:90px;position:absolute;right:0;margin-top:20px;text-align:left;letter-spacing:0px;color:#152449;opacity:1}.remember-label[_ngcontent-%COMP%]{width:90px;height:15px;text-align:left;font-size:12px;font-family:"Inter, Bold";font-weight:400;letter-spacing:0px;color:#152449;opacity:1}.remember-box[_ngcontent-%COMP%]{background:#DFCFE0 0% 0% no-repeat padding-box;border-radius:3px;border:0px;opacity:1;width:14px;height:14px;margin-top:6px}#username-input-field[_ngcontent-%COMP%], #password-input-field[_ngcontent-%COMP%]{width:100%;height:55px;font-family:"Inter, Medium";font-size:14px;background:#F9F8F8 0% 0% no-repeat padding-box;border-radius:18px;border:0px;opacity:1;outline:none}.input-container[_ngcontent-%COMP%]{background:#F9F8F8 0% 0% no-repeat padding-box;border-radius:18px;border:0px}[_ngcontent-%COMP%]::placeholder{color:#152449;opacity:1}.login-button[_ngcontent-%COMP%]{margin-top:40px;width:105%;height:55px}#login-btn[_ngcontent-%COMP%]{background:#720F78 0% 0% no-repeat padding-box;border-radius:18px;width:100%;height:55px;font: 700 16px/60px "Inter, Light";letter-spacing:0px;color:#fff;opacity:1;border:0px;line-height:0px}.user-default-icon[_ngcontent-%COMP%]{height:120px}.wfm-login-logo[_ngcontent-%COMP%]{width:268px;height:33px}.jumbotron-contents[_ngcontent-%COMP%]{width:600px;height:500px;position:absolute;left:150px;top:150px}#welcome-text[_ngcontent-%COMP%]{margin-top:175px;text-align:left;font: 700 80px/100px "Inter, Bold";letter-spacing:0px;color:#fff;opacity:1}#login-description[_ngcontent-%COMP%]{margin-top:40px;text-align:left;font-family:"Inter, Medium";font-size:30px;letter-spacing:0px;color:#fff;opacity:1}.wfm-login-logo-mobile[_ngcontent-%COMP%]{display:none}#terms-of-service-text[_ngcontent-%COMP%]{text-align:center;margin-top:20px;font: 500 11px "Inter, Medium";color:#a3a3a3}@media only screen and (max-width: 1650px){.back-photo[_ngcontent-%COMP%]{width:1100px;transform:translate(-30%)}.jumbotron-contents[_ngcontent-%COMP%]{left:400px;width:500px}.left-panel[_ngcontent-%COMP%]{flex:400px 0;width:792px}.login-tray[_ngcontent-%COMP%]{width:300px}}@media only screen and (max-width: 1150px){.left-panel[_ngcontent-%COMP%]{display:none}.login-tray[_ngcontent-%COMP%]{width:80%}.background[_ngcontent-%COMP%]{background:linear-gradient(151deg,#720F78 0%,#E78021 100%);padding:0}#login-user-picture[_ngcontent-%COMP%]{width:40px;height:40px}#login-btn[_ngcontent-%COMP%]{color:#152449;background:#F9F8F8;font: 700 16px/60px "Inter, Medium";line-height:0}#username-input-field[_ngcontent-%COMP%], #password-input-field[_ngcontent-%COMP%]{background:rgba(249,248,248,0);color:#fff}.input-container[_ngcontent-%COMP%]{background:rgba(249,248,248,.3490196078);color:#fff}#login-text[_ngcontent-%COMP%], .remember-label[_ngcontent-%COMP%]{color:#fff}.remember-box[_ngcontent-%COMP%]{background:rgba(249,248,248,.3490196078)}[_ngcontent-%COMP%]::placeholder{color:#fff}.wfm-login-logo-mobile[_ngcontent-%COMP%]{display:inline;margin-bottom:110px;width:350px}.right-panel[_ngcontent-%COMP%]{height:969px}.login-mail-icon[_ngcontent-%COMP%]{display:none}.login-mail-icon-white[_ngcontent-%COMP%]{display:inline}.login-pass-icon[_ngcontent-%COMP%]{display:none}.login-pass-icon-white[_ngcontent-%COMP%]{display:inline}.login-see-pass-icon[_ngcontent-%COMP%]{display:none}.login-see-pass-icon-white[_ngcontent-%COMP%]{display:inline}}']}),n})()}];let U=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.Bz.forChild(L),p.Bz]}),n})(),k=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[v,M.D],imports:[O.ez,U,s.u5]}),n})()}}]);
//tealium universal tag - utag.1509 ut4.0.202102190623, Copyright 2021 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
var match=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);if(utag.ut.loader===undefined||!match||parseInt(match[1])<41){u.loader=function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=="iframe"){m=a.getElementById(o.id);if(m&&m.tagName=="IFRAME"){b=m;}else{b=a.createElement("iframe");}o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";}if(o.id){b.id=o.id;}for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){this.onreadystatechange=null;o.cb();}};}}if(o.type!="img"&&!m){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}}};}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1,"link":1};u.hasgtagjs=function(){window.gtagRename=window.gtagRename||""||"gtag";if(utag.ut.gtagScriptRequested){return true;}
var i,s=document.getElementsByTagName("script");for(i=0;i<s.length;i++){if(s[i].src&&s[i].src.indexOf("gtag/js")>=0){return true;}}
window.dataLayer=window.dataLayer||[];if(typeof window[window.gtagRename]!=="function"){window[window.gtagRename]=function(){dataLayer.push(arguments);};window[window.gtagRename]("js",new Date());}
return false;};u.scriptrequested=u.hasgtagjs();u.o=window[window.gtagRename];u.map_func=function(arr,obj,item){var i=arr.shift();obj[i]=obj[i]||{};if(arr.length>0){u.map_func(arr,obj[i],item);}else{obj[i]=item;}};u.hasOwn=function(o,a){return o!=null&&Object.prototype.hasOwnProperty.call(o,a);};u.isEmptyObject=function(o,a){for(a in o){if(u.hasOwn(o,a)){return false;}}return true;};u.map={"dcf_activity_5731039":"activity","dcf_activity_group_5731039":"activity_group","dcf_counting_method_5731039":"counting_method","dcf_event":"event_name","dcf_event:Conversion":"conversion","cp._ga":"custom.u9","cp.utag_main_userid":"custom.u4","flow_type":"custom.u3","cp.utag_main_city":"custom.u6","js_page.ANALYTICS_CONFIG.services.tealium.geo":"custom.u1","cp.marketing_vistor_id":"custom.u10"};u.extend=[function(a,b){try{if((b['eventName'].toString().toLowerCase().indexOf('web.drivers.signup'.toLowerCase())>-1&&b['eventType'].toString().toLowerCase().indexOf('success'.toLowerCase())>-1&&b['ut.event'].toString().toLowerCase().indexOf('view'.toLowerCase())>-1)){b['dcf_activity_group_4925147']='conve0';b['dcf_activity_4925147']='drive0';b['dcf_counting_method_4925147']='Unique';b['dcf_event']='Conversion';b['dcf_activity_group_5154911']='onboa0';b['dcf_activity_5154911']='drive0';b['dcf_counting_method_5154911']='Unique';b['dfc_activity_group_8379000']='conv';b['dcf_activity_8379000']='apacd00';b['dcf_counting_method_8379000']='Unique';b['dcf_activity_group_5731039']='conve0';b['dcf_activity_5731039']='eatsc0';b['dcf_counting_method_5731039']='Standard';b['dcf_activity_group_8098912']='conv';b['dcf_activity_8098912']='usdri00';b['dcf_counting_method_8098912']='Unique'}}catch(e){utag.DB(e);}},function(a,b){try{if((b['eventName'].toString().toLowerCase().indexOf('signup_restaurant'.toLowerCase())>-1&&b['eventLabel'].toString().toLowerCase().indexOf('landing'.toLowerCase())>-1&&b['eventType'].toString().toLowerCase().indexOf('view'.toLowerCase())>-1)||(b['eventName'].toString().toLowerCase().indexOf('merchant_su'.toLowerCase())>-1&&b['eventType'].toString().toLowerCase().indexOf('landing'.toLowerCase())>-1)){b['dcf_activity_group_5731039']='ubere0';b['dcf_activity_5731039']='ubere006';b['dcf_counting_method_5731039']='Standard';b['dcf_event']='Conversion'}}catch(e){utag.DB(e);}},function(a,b){try{if((b['eventName'].toString().toLowerCase().indexOf('signup_restaurant'.toLowerCase())>-1&&b['eventLabel'].toString().toLowerCase().indexOf('success'.toLowerCase())>-1&&b['eventType'].toString().toLowerCase().indexOf('submit'.toLowerCase())>-1)||(b['eventName'].toString().toLowerCase().indexOf('signup_restaurant'.toLowerCase())>-1&&b['eventType'].toString().toLowerCase().indexOf('view'.toLowerCase())>-1&&b['eventLabel'].toString().toLowerCase().indexOf('success'.toLowerCase())>-1)){b['dcf_activity_group_5731039']='conve0';b['dcf_activity_5731039']='ubere003';b['dcf_counting_method_5731039']='Standard';b['dcf_event']='Conversion';b['aw_conversion_656486467']='fnnFCKjn99ABEMPghLkC'}}catch(e){utag.DB(e);}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){utag.DB("send:1509");utag.DB(b);var d,e,f,h,i,j,_event,p,key;u.data={"qsp_delim":"&","kvp_delim":"=","base_url":"https://www.googletagmanager.com/gtag/js","advertiser_id":"DC-5731039","activity_group":"","activity":"","counting_method":"","custom_scripts":"true","session_id":"","product_quantity":[],"dc_custom_params":{},"event_name":"","event":[],"custom":{}};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){if(typeof utag_err!='undefined'){utag_err.push({e:'extension error:'+e,s:utag.cfg.path+'utag.'+id+'.js',l:c,t:'ex'})}}};utag.DB("send:1509:EXTENSIONS");utag.DB(b);for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.map_func(e[f].split("."),u.data,b[d]);}}else{h=d.split(":");if(h.length===2&&b[h[0]]===h[1]){if(u.map[d]){u.data.event=u.data.event.concat(u.map[d].split(","));}}}}
utag.DB("send:1509:MAPPINGS");utag.DB(u.data);u.data.order_id=u.data.order_id||b._corder||"";u.data.order_total=u.data.order_total||b._ctotal||"";if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(typeof(u.data.advertiser_id)==="string"){u.data.advertiser_id=u.data.advertiser_id.split(",");}
if(typeof(u.data.activity_group)==="string"){u.data.activity_group=u.data.activity_group.split(",");}
if(typeof(u.data.activity)==="string"){u.data.activity=u.data.activity.split(",");}
if(typeof(u.data.counting_method)==="string"){u.data.counting_method=u.data.counting_method.split(",");}
if(typeof(u.data.session_id)==="string"){u.data.session_id=u.data.session_id.split(",");}
if(!u.data.advertiser_id){utag.DB(u.id+": Tag not fired: Required attribute not populated");return;}
u.data.base_url+="?id="+(u.data.advertiser_id[0]);for(i=0;i<u.data.advertiser_id.length;i++){u.o("config",u.data.advertiser_id[i]);}
if(u.data.order_id){for(i=0;i<u.data.event.length;i++){if(u.data.event[i]==="purchase"){p=true;}}
if(!p){u.data.event.push("purchase");}}
var total_qty=1;if(typeof(u.data.product_quantity)==="number"){total_qty=u.data.product_quantity;}else if(u.data.product_quantity.length===1){total_qty=u.data.product_quantity[0];}else if(u.data.product_quantity.length>1){for(i=0;i<u.data.product_quantity.length;i++){total_qty+=parseInt(u.data.product_quantity[i],10);}}
for(i=0;i<u.data.event.length;i++){_event=u.data.event[i];for(j=0;j<u.data.advertiser_id.length;j++){var eventIdData={};if(u.data.custom_scripts==="true"||u.data.custom_scripts){eventIdData.allow_custom_scripts=true;}else if(u.data.custom_scripts==="false"||!u.data.custom_scripts){eventIdData.allow_custom_scripts=false;}
if(u.data.session_id.length===1&&u.data.session_id[0]!==""){eventIdData.session_id=u.data.session_id[0];}else if(u.data.session_id[j]!==""){eventIdData.session_id=u.data.session_id[j];}
if(u.data.order_total){eventIdData.value=u.data.order_total;eventIdData.transaction_id=u.data.order_id;}
if(u.data.product_quantity){eventIdData.quantity=total_qty;}
for(key in u.data.custom){eventIdData[key]=u.data.custom[key];}
if(!u.isEmptyObject(u.data.dc_custom_params)){eventIdData.dc_custom_params={};for(key in u.data.dc_custom_params){eventIdData.dc_custom_params[key]=u.data.dc_custom_params[key];}}
eventIdData.send_to=u.data.advertiser_id[j]+"/"+u.data.activity_group[j]+"/"+u.data.activity[j]+"+"+u.data.counting_method[j];if(_event==="purchase"){u.o("event","purchase",eventIdData);}
if(_event==="conversion"){u.o("event","conversion",eventIdData);}}}
if(!u.hasgtagjs()){u.scriptrequested=true;utag.ut.gtagScriptRequested=true;u.loader({"type":"script","src":u.data.base_url,"cb":null,"loc":"script","id":"utag_1509","attrs":{}});}
utag.DB("send:1509:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("1509","uber.main"));}catch(error){utag.DB(error);}

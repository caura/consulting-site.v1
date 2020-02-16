'use strict';

$(function() {


  /*
  |--------------------------------------------------------------------------
  | Configure your website
  |--------------------------------------------------------------------------
  |
  | We provided several configuration variables for your ease of development.
  | Read their complete description and modify them based on your need.
  |
  */

  page.config({

    /*
    |--------------------------------------------------------------------------
    | Google API Key
    |--------------------------------------------------------------------------
    |
    | Here you may specify your Google API key if you need to use Google Maps
    | in your application
    |
    | https://developers.google.com/maps/documentation/javascript/get-api-key
    |
    */

    googleApiKey: '',

    /*
    |--------------------------------------------------------------------------
    | Google Analytics Tracking
    |--------------------------------------------------------------------------
    |
    | If you want to use Google Analytics, you can specify your Tracking ID in
    | this option. Your key would be a value like: UA-12345678-9
    |
    */

    googleAnalyticsId: '',

    /*
    |--------------------------------------------------------------------------
    | Google reCAPTCHA
    |--------------------------------------------------------------------------
    |
    | reCAPTCHA protects you against spam and other types of automated abuse.
    | Please signup for an API key pair and insert your `Site key` value to the
    | following variable.
    |
    | http://www.google.com/recaptcha/admin
    |
    */

    reCaptchaSiteKey:  '',

    // See available languages: https://developers.google.com/recaptcha/docs/language
    reCaptchaLanguage: '',

    /*
    |--------------------------------------------------------------------------
    | Disable AOS on mobile
    |--------------------------------------------------------------------------
    |
    | If true, the Animate On Scroll animations don't run on mobile devices.
    |
    */

    disableAOSonMobile: true,

    /*
    |--------------------------------------------------------------------------
    | Smooth Scroll
    |--------------------------------------------------------------------------
    |
    | If true, the browser's scrollbar moves smoothly on scroll and gives your
    | visitor a better experience for scrolling.
    |
    */

    smoothScroll: true,
    // driftAppId: "ac5w3i64dncc",
    olark: "2579-862-10-3401",
    adroll_adv_id: "WJL53ZBKIZEWXHCTRLOQ46",
    // adroll_adv_id: "PX5LOK26DBF3PIIEMKIX5L",
    adroll_pix_id: "PGBWMW4AWVBLFN4PXSYHY3",
    // adroll_pix_id: "XWPWGN7J5NE4BEPJWKZMOD",
    facebook: "1972078333040303",
    quora: "75c9068d8bad4384964e471ca3905245",
    heap: "1343907521",
    twitter: "nvmnw"
  });





  /*
  |--------------------------------------------------------------------------
  | Custom Javascript code
  |--------------------------------------------------------------------------
  |
  | Now that you configured your website, you can write additional Javascript
  | code below this comment. You might want to add more plugins and initialize
  | them in this file.
  |
  */
   function getUrlVars() {
      var vars = {};
      var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
          vars[key] = value;
      });
      return vars;
  }
  function getUrlParam(parameter, defaultvalue){
      var urlparameter = defaultvalue;
      if(window.location.href.indexOf(parameter) > -1){
          urlparameter = getUrlVars()[parameter];
          }
      return urlparameter;
  }
  if (getUrlParam("utm_campaign",null) == 'ignore'){
    console.log("utm_campaign = ignore");
  }


  if (getUrlParam("download_report",null) != null){
    setTimeout(function(){
     window.open('https://www.g2crowd.com/reports/grid-report-for-business-intelligence-platforms-spring-2018?featured=looker&gated_consumer=0723dde6-22e5-49f8-a58f-97c6a1868c47', '_blank');
      },2000)
  }

  if (getUrlParam("utm_campaign",null) != 'ignore' && page.defaults.quora){
    !function(q,e,v,n,t,s){if(q.qp) return; n=q.qp=function(){n.qp?n.qp.apply(n,arguments):n.queue.push(arguments);}; n.queue=[];t=document.createElement(e);t.async=!0;t.src=v; s=document.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s);}(window, 'script', 'https://a.quora.com/qevents.js');
    qp('init', page.defaults.quora);
    qp('track', 'ViewContent');
  }
  if (page.defaults.driftAppId){
    !function() {
      var t = window.driftt = window.drift = window.driftt || [];
      if (!t.init) {
        if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
        t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ],
        t.factory = function(e) {
          return function() {
            var n = Array.prototype.slice.call(arguments);
            return n.unshift(e), t.push(n), t;
          };
        }, t.methods.forEach(function(e) {
          t[e] = t.factory(e);
        }), t.load = function(t) {
          var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
          o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
          var i = document.getElementsByTagName("script")[0];
          i.parentNode.insertBefore(o, i);
        };
      }
    }();
    drift.SNIPPET_VERSION = '0.3.1';
    drift.load(page.defaults.driftAppId);
  }
  if (getUrlParam("utm_campaign",null) != 'ignore' && page.defaults.olark){
    (function(o,l,a,r,k,y){if(o.olark)return; r="script";y=l.createElement(r);r=l.getElementsByTagName(r)[0]; y.async=1;y.src="//"+a;r.parentNode.insertBefore(y,r); y=o.olark=function(){k.s.push(arguments);k.t.push(+new Date)}; y.extend=function(i,j){y("extend",i,j)}; y.identify=function(i){y("identify",k.i=i)}; y.configure=function(i,j){y("configure",i,j);k.c[i]=j}; k=y._={s:[],t:[+new Date],c:{},l:a}; })(window,document,"static.olark.com/jsclient/loader.js");
    /* custom configuration goes here (www.olark.com/documentation) */
    olark.identify(page.defaults.olark);
  }

  if (getUrlParam("utm_campaign",null) != 'ignore' && page.defaults.adroll_adv_id && page.defaults.adroll_pix_id){
    window.adroll_adv_id = page.defaults.adroll_adv_id;
    window.adroll_pix_id = page.defaults.adroll_pix_id;
    (function () {
        var scr = document.createElement("script");
        var host = (("https:" == document.location.protocol) ? "https://s.adroll.com" : "http://a.adroll.com");
        scr.setAttribute('async', 'true');
        scr.type = "text/javascript";
        scr.src = host + "/j/roundtrip.js";
        ((document.getElementsByTagName('head') || [null])[0] ||
            document.getElementsByTagName('script')[0].parentNode).appendChild(scr);
    }());

    $( document ).ready(function() {
      $( '#chat-start1' ).on("mousedown",
        function(){
          try{
            __adroll.record_user({"adroll_segments": "0e317ec5"})
          } catch(err) {}
        });
      $( '#chat-start2' ).on("mousedown",
        function(){
          try{
            __adroll.record_user({"adroll_segments": "0e317ec5"})
          } catch(err) {}
        });
    });
  }
  if (getUrlParam("utm_campaign",null) != 'ignore' && page.defaults.facebook){
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', page.defaults.facebook);
    fbq('track', 'PageView');
    $( document ).ready(function() {
      var tracked = false;
      $( '#chat-start1' ).on("mousedown", function(){
        if (!tracked){
          tracked = true;
          fbq('track', 'InitiateCheckout', {
            value: 1,
            currency: 'USD'
          });
        }
      });
      $( '#chat-start2' ).on("mousedown", function(){
        if (!tracked){
          tracked = true;
          fbq('track', 'InitiateCheckout', {
            value: 1,
            currency: 'USD'
          });
        }
      });
      $( '#contact-slide' ).on("mousedown", function(){
        if (!tracked){
          fbq('track', 'InitiateCheckout', {
            value: 0.5,
            currency: 'USD'
          });
        }
      });
    });
  }
  if (page.defaults.twitter){
    !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
      },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
      a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
      // Insert Twitter Pixel ID and Standard Event data below
      twq('init',page.defaults.twitter);
      twq('track','PageView');
    }

  if (page.defaults.heap){
    window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=t.forceSSL||"https:"===document.location.protocol,a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=(r?"https:":"http:")+"//cdn.heapanalytics.com/js/heap-"+e+".js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n);for(var o=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],c=0;c<p.length;c++)heap[p[c]]=o(p[c])};
    heap.load(page.defaults.heap);
  }
});


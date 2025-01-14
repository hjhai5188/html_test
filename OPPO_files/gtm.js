// Copyright 2012 Google Inc. All rights reserved.

(function (w, g) {
  w[g] = w[g] || {};
  w[g].e = function (s) {
    return eval(s);
  };
})(window, "google_tag_manager");

(function () {
  var data = {
    resource: {
      version: "609",

      macros: [
        {
          function: "__u",
          vtp_component: "PATH",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__e" },
        {
          function: "__u",
          vtp_component: "URL",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__r" },
        {
          function: "__u",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__remm",
          vtp_setDefaultValue: true,
          vtp_input: ["macro", 2],
          vtp_fullMatch: false,
          vtp_replaceAfterMatch: false,
          vtp_defaultValue: "No",
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            [
              "map",
              "key",
              "\\.oppo\\.com/(fr/|it/|nl/|pl/|es/|uk/|de/|pt/|befr/|benl/|ro/|lude/|lufr/|ie/|hu/|cz/|sk/|hr/|gr/|chde/|chfr/|at/).*",
              "value",
              "Yes",
            ],
          ],
        },
        {
          function: "__k",
          vtp_decodeCookie: false,
          vtp_name: "g8vtl5_cmapi_cookie_privacy",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 6], 8, 16],
            ';return void 0!=a\u0026\u0026a.includes("permit")\u0026\u0026a.includes("1")\u0026\u0026a.includes("2")\u0026\u0026a.includes("3")\u0026\u0026a.includes("4")?"true":"false"})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 6], 8, 16],
            ';return void 0!=a\u0026\u0026a.includes("permit")\u0026\u0026a.includes("3")?"yes":"no"})();',
          ],
        },
        {
          function: "__remm",
          vtp_setDefaultValue: true,
          vtp_input: ["macro", 2],
          vtp_fullMatch: false,
          vtp_replaceAfterMatch: false,
          vtp_ignoreCase: true,
          vtp_defaultValue: "OPT-1",
          vtp_map: [
            "list",
            [
              "map",
              "key",
              "oppo.com/cn/smartphones/series-reno/reno6/",
              "value",
              "OPT-TVMGGNZ",
            ],
            [
              "map",
              "key",
              "oppo.com/my/smartphones/series-reno/reno7(-pro)?-5g/",
              "value",
              "OPT-5HQBWHB",
            ],
            ["map", "key", "oppo.com/in/", "value", "OPT-M9GGBRV"],
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){var a=navigator.userAgent\u0026\u0026navigator.userAgent.toLowerCase();return a=-1\u003Ca.indexOf("micromessenger")})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){return window.DIGITAL_DATA.pageInfo.pageGroup})();",
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "eventCategory",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "eventAction",
        },
        {
          function: "__remm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 2],
          vtp_fullMatch: false,
          vtp_replaceAfterMatch: false,
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            [
              "map",
              "key",
              "(uat-www|cms|stg-www|-www)\\.oppo\\.com/",
              "value",
              "G-NNBG3XYVBX",
            ],
            ["map", "key", "zhinan\\.tech/", "value", "G-NNBG3XYVBX"],
            ["map", "key", "47\\.243\\.94\\.112/", "value", "G-NNBG3XYVBX"],
            ["map", "key", "imagine-if\\.oppo\\.com", "value", "G-TPHZLGJQNR"],
            ["map", "key", "oppo\\.com/in/", "value", "G-DTXFPC1MML"],
            ["map", "key", "oppo\\.com/cn/", "value", "G-LZ0GNGGDJ7"],
            ["map", "key", "oppo\\.com/jp/", "value", "G-XRWR40XX7M"],
            ["map", "key", "oppo\\.com/cz/", "value", "G-S2G1P1D30T"],
            ["map", "key", "oppo\\.com/hu/", "value", "G-J00S48H1GR"],
            ["map", "key", "oppo\\.com/(kz|kzkk)/", "value", "G-FGF58BWE17"],
            ["map", "key", "oppo\\.com/md/", "value", "G-LQEQV86J24"],
            ["map", "key", "oppo\\.com/pl/", "value", "G-QZB3CL598B"],
            ["map", "key", "oppo\\.com/ro/", "value", "G-50RZ1HM72C"],
            ["map", "key", "oppo\\.com/ru/", "value", "G-WQZ1J4LKJH"],
            ["map", "key", "oppo\\.com/sk/", "value", "G-7B4WGVENM1"],
            ["map", "key", "oppo\\.com/tr/", "value", "G-H2GGMF0X2W"],
            ["map", "key", "oppo\\.com/ua/", "value", "G-DLEM3X27FJ"],
            ["map", "key", "oppo\\.com/(uz|uzru)/", "value", "G-REL7YTJJLD"],
            ["map", "key", "oppo\\.com/au/", "value", "G-WXW7BGRMHM"],
            ["map", "key", "oppo\\.com/(befr|benl)/", "value", "G-74GF95NX2G"],
            ["map", "key", "oppo\\.com/fr/", "value", "G-948MDWYP7X"],
            ["map", "key", "oppo\\.com/de/", "value", "G-E9JREEDSKD"],
            ["map", "key", "oppo\\.com/ie/", "value", "G-GV6WGJWLXN"],
            ["map", "key", "oppo\\.com/it/", "value", "G-557E8KDVBZ"],
            ["map", "key", "oppo\\.com/(lude|lufr)/", "value", "G-GHPSL79F3E"],
            ["map", "key", "oppo\\.com/nl/", "value", "G-R6DCBQMR5M"],
            ["map", "key", "oppo\\.com/nz/", "value", "G-9ZC3F99V7X"],
            ["map", "key", "oppo\\.com/pt/", "value", "G-Q543EZ6JZW"],
            ["map", "key", "oppo\\.com/es/", "value", "G-Y5ZT35QLJ6"],
            ["map", "key", "oppo\\.com/(chde|chfr)/", "value", "G-Z8ML3SLES5"],
            ["map", "key", "oppo\\.com/uk/", "value", "G-03MXESLVYC"],
            ["map", "key", "oppo\\.com/kh/", "value", "G-0BDT5R75TT"],
            ["map", "key", "oppo\\.com/hk/", "value", "G-1Z09GM5502"],
            ["map", "key", "oppo\\.com/id/", "value", "G-XMFFPN1BBJ"],
            ["map", "key", "oppo\\.com/my/", "value", "G-NDSBFX2L5F"],
            ["map", "key", "oppo\\.com/ph/", "value", "G-7K9SZ0RGMB"],
            ["map", "key", "oppo\\.com/sg/", "value", "G-JYJF04G1HJ"],
            ["map", "key", "oppo\\.com/tw/", "value", "G-6Q8VWG5LJC"],
            ["map", "key", "oppo\\.com/th/", "value", "G-EHYFPJ93DK"],
            ["map", "key", "oppo\\.com/vn/", "value", "G-2NMYFEMLXM"],
            ["map", "key", "oppo\\.com/dz/", "value", "G-EH9TTFZKJY"],
            ["map", "key", "oppo\\.com/(eg|eg-en)/", "value", "G-GQE24WL33F"],
            ["map", "key", "oppo\\.com/iq/", "value", "G-90BFE3VX9R"],
            ["map", "key", "oppo\\.com/il/", "value", "G-PP87VV9X9F"],
            [
              "map",
              "key",
              "oppo\\.com/(jo-ar|jo-en)/",
              "value",
              "G-52BK2ZQQVD",
            ],
            ["map", "key", "oppo\\.com/ke/", "value", "G-QLN3V8JM72"],
            [
              "map",
              "key",
              "oppo\\.com/(lb-ar|lb-en)/",
              "value",
              "G-V7Z8QJ4K3J",
            ],
            ["map", "key", "oppo\\.com/ma/", "value", "G-J4PN8MW12Q"],
            ["map", "key", "oppo\\.com/ng/", "value", "G-LQDMRJ5RW4"],
            ["map", "key", "oppo\\.com/ps/", "value", "G-RL9MXJLKNC"],
            ["map", "key", "oppo\\.com/(sa|sa-en)/", "value", "G-R34RZ77SNF"],
            ["map", "key", "oppo\\.com/za/", "value", "G-4TXJ324PXM"],
            ["map", "key", "oppo\\.com/tn/", "value", "G-HL4YJSSTSH"],
            ["map", "key", "oppo\\.com/ae/", "value", "G-51BZKKSNNS"],
            ["map", "key", "oppo\\.com/bd/", "value", "G-HV95S0LV38"],
            ["map", "key", "oppo\\.com/mm/", "value", "G-ZYRZKLV1KZ"],
            ["map", "key", "oppo\\.com/np/", "value", "G-EFBQRLTQWX"],
            ["map", "key", "oppo\\.com/pk/", "value", "G-R5EPZX1NFW"],
            ["map", "key", "oppo\\.com/lk/", "value", "G-EPV4PH3G5L"],
            ["map", "key", "oppo\\.com/br/", "value", "G-3SYXW942JT"],
            ["map", "key", "oppo\\.com/latin/", "value", "G-DLZW55WBV6"],
            ["map", "key", "oppo\\.com/cl/", "value", "G-MWG7M1N6HC"],
            ["map", "key", "oppo\\.com/co/", "value", "G-G1CWHGGQZJ"],
            ["map", "key", "oppo\\.com/mx/", "value", "G-69TYGCWW8F"],
            ["map", "key", "oppo\\.com/pe/", "value", "G-TZMZ1040LE"],
            ["map", "key", "oppo\\.com/hr/", "value", "G-DYLPC497QZ"],
            ["map", "key", "oppo\\.com/gr/", "value", "G-TJ2ZHQSEJB"],
            ["map", "key", "oppo\\.com/at/", "value", "G-B4EK80LRNE"],
            ["map", "key", "ur\\.oppo\\.com", "value", "G-BLFLF2HE0Z"],
            ["map", "key", "coloros\\.com", "value", "G-VD2VD3WEY3"],
            ["map", "key", "oppo\\.com/en/", "value", "G-KCCT2W9JG4"],
            ["map", "key", "oppo\\.com/tz/", "value", "G-NY5FPV4RSN"],
            ["map", "key", "oppo\\.com/ec/", "value", "G-5K44DJJGWM"],
            ["map", "key", "oppo\\.com/py/", "value", "G-QLCYF97XTH"],
            ["map", "key", "oppo\\.com/uy/", "value", "G-JGPTMP06CP"],
            [
              "map",
              "key",
              "(venus-cms-test|sit-www)\\.wanyol\\.com/",
              "value",
              "G-NNBG3XYVBX",
            ],
            ["map", "key", "oppo\\.com/ar/", "value", "G-JSKB3DBN6B"],
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 5], 8, 16],
            ",b=",
            ["escape", ["macro", 7], 8, 16],
            ",c=",
            ["escape", ["macro", 8], 8, 16],
            ';return"Yes"===a\u0026\u0026"false"===b\u0026\u0026"no"===c?!1:!0})();',
          ],
        },
        { function: "__k", vtp_decodeCookie: false, vtp_name: "_ga" },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 16], 8, 16],
            '.split(".");return 4==a.length?"C"+a[2]+"."+a[3]:""})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 15], 8, 16],
            ",b=",
            ["escape", ["macro", 17], 8, 16],
            ";return a?b:void 0})();",
          ],
        },
        { function: "__k", vtp_decodeCookie: false, vtp_name: "ssoid" },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 15], 8, 16],
            ",b=",
            ["escape", ["macro", 19], 8, 16],
            ",c=",
            ["escape", ["macro", 0], 8, 16],
            ",d=",
            ["escape", ["macro", 5], 8, 16],
            ';if(!c.match("^/(en|chde|chfr|tr|md)")\u0026\u0026"Yes"!==d)return a?b:void 0})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){return window.DIGITAL_DATA.pageInfo.countryCode})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 15], 8, 16],
            ",b=window.navigator.userAgent;return a?b:void 0})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){return-1==navigator.userAgent.indexOf("iPhone")?"Not an iPhone":window.screen.width/window.screen.height==320/480\u0026\u00261==window.devicePixelRatio?"iPhone 1st gen/3G/3GS":window.screen.width/window.screen.height==320/480\u0026\u00262==window.devicePixelRatio?"iPhone 4/4S":window.screen.width/window.screen.height==320/568\u0026\u00262==window.devicePixelRatio?"iPhone 5/5C/5S/SE 1st gen":window.screen.width/window.screen.height==375/667\u0026\u00262==window.devicePixelRatio?"iPhone 6/6s/7/8/SE 2nd gen":window.screen.width/\nwindow.screen.height==476/847\u0026\u00263==window.devicePixelRatio?"iPhone 6 Plus/6s Plus/7 Plus":.5625==window.screen.width/window.screen.height\u0026\u00263==window.devicePixelRatio?"iPhone 8 Plus":window.screen.width/window.screen.height==375/812\u0026\u00263==window.devicePixelRatio?"iPhone X/XS/11 Pro/12 mini/13 mini":window.screen.width/window.screen.height==414/896\u0026\u00262==window.devicePixelRatio?"iPhone XR/11":window.screen.width/window.screen.height==414/896\u0026\u00263==window.devicePixelRatio?"iPhone XS Max/11 Pro Max":window.screen.width/\nwindow.screen.height==390/844\u0026\u00263==window.devicePixelRatio?"iPhone 12/12 Pro/13/13 Pro/14":window.screen.width/window.screen.height==393/852\u0026\u00263==window.devicePixelRatio?"iPhone 14 Pro/15/15 Pro":window.screen.width/window.screen.height==428/926\u0026\u00263==window.devicePixelRatio?"iPhone 12 Pro Max/13 Pro Max/14 Plus":window.screen.width/window.screen.height==430/932\u0026\u00263==window.devicePixelRatio?"iPhone 14 Pro Max/15 Plus/15 Pro Max":"iPhone (other)"})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 15], 8, 16],
            ",b=",
            ["escape", ["macro", 23], 8, 16],
            ";return a?b:void 0})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){var b=document.cookie.split(";"),a=',
            ["escape", ["macro", 14], 8, 16],
            ',c="_ga_";null!=a\u0026\u00260\u003Ca.indexOf("-")\u0026\u0026(c+=a.split("-")[1]);for(a=0;a\u003Cb.length;a++){var d=b[a].trim();if(0==d.indexOf(c))return d.split("\\x3d")[1].split(".")[2]}return""})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 15], 8, 16],
            ",b=",
            ["escape", ["macro", 25], 8, 16],
            ";return a?b:void 0})();",
          ],
        },
        {
          function: "__k",
          vtp_decodeCookie: false,
          vtp_name: "fl_source_medium",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 27], 8, 16],
            ';if(a)return a.split("_")[2];a="(direct)";var d="(none)",b=window.location.search.substr(1),e=document.referrer,c=RegExp("(^|\\x26)(gclid|gclsrc)\\x3d([^\\x26]*)(\\x26|$)","i");if(c=b.match(c))a="google",d="cpc";else{c=RegExp("(^|\\x26)utm_source\\x3d([^\\x26]*)(\\x26|$)","i");c=b.match(c);var f=RegExp("(^|\\x26)utm_medium\\x3d([^\\x26]*)(\\x26|$)","i");b=b.match(f);c\u0026\u0026(a=decodeURIComponent(c[2]));b\u0026\u0026(d=decodeURIComponent(b[2]));"(direct)"===a\u0026\u0026""!==e\u0026\u0026((b=e.match("//(www\\\\.|(.*\\\\.)*(search|websearch)\\\\.)?(google|baidu|bing|yahoo|so|duckduckgo|yandex|sogou|qwant|naver|rakuten|zeznam|biglobe)\\\\.(com|cn|co\\\\.jp|ne\\\\.jp|cz)"))?\n(a=b[4],d="organic"):e.match("oppo\\\\.com")||(a=e.replace("http://","").replace("https://","").split("/")[0],d="referrer"))}return a+" / "+d})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 15], 8, 16],
            ",b=",
            ["escape", ["macro", 28], 8, 16],
            ";return a?b:void 0})();",
          ],
        },
        {
          function: "__remm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 0],
          vtp_fullMatch: false,
          vtp_replaceAfterMatch: false,
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            [
              "map",
              "key",
              "^/(np|md|hu|uz|uzru|ie|il|lb-ar|lb-en|lude|lufr|latin|cz|sk|ps|br|lk|hr|gr|at)/",
              "value",
              "G-XNKBRSFRPM",
            ],
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 6], 8, 16],
            ';return void 0!=a\u0026\u0026a.includes("permit")\u0026\u0026a.includes("4")?"granted":"denied"})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 6], 8, 16],
            ';return void 0!=a\u0026\u0026a.includes("permit")\u0026\u0026a.includes("2")?"granted":"denied"})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 6], 8, 16],
            ';return void 0!=a\u0026\u0026a.includes("permit")\u0026\u0026a.includes("3")?"granted":"denied"})();',
          ],
        },
        { function: "__v", vtp_name: "gtm.element", vtp_dataLayerVersion: 1 },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){function b(a){if(a.getAttribute("tm-eventCategory"))return a.getAttribute("tm-eventCategory");if(a.parentNode)return b(a.parentNode)}var c=',
            ["escape", ["macro", 34], 8, 16],
            ";return b(c)})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){var a=window.location.href.split("//")[1].split("?")[0]||"",b=window.location.href.split("//")[1]||"",c=b.substring(b.indexOf("series"),b.length);c=c.split("/").length-1;var d=b.substring(b.indexOf("newsroom"),b.length),e=b.substring(b.indexOf("technology"),b.length),f=b.substring(b.indexOf("smartphones"),b.length);urlAccessory=b.substring(b.indexOf("accessories"),b.length);urlAesStr=b.substring(b.indexOf("aesthetics-of-space"),b.length);return a=a.endsWith("/home.html")||!a.split("/")[2]\u0026\u0026\n0\u003Ea.indexOf("support.")\u0026\u00260\u003Ea.indexOf("events.")?"Homepage":(0\u003Ca.indexOf("product")||0\u003Ca.indexOf("series"))\u0026\u00262\u003Ec?"Series Page":0\u003Ca.indexOf("/smartphones/")\u0026\u002614\u003Ef.length?"Product List Page":0\u003Ca.indexOf("/accessories/")\u0026\u002614\u003EurlAccessory.length?"Product List Page":0\u003Ca.indexOf("/smartphone")\u0026\u00262\u003C=c||0\u003Ca.indexOf("/accessory")\u0026\u00262\u003C=c?"Product Details Page":0\u003Ca.indexOf("/about")\u0026\u00260\u003Ea.indexOf("/about-us/")?"Brand Page":0\u003Ca.indexOf("/newsroom")\u0026\u002610\u003Ed.length?"News List Page":0\u003Ca.indexOf("/newsroom")\u0026\u002610\u003C=d.length?\n"News Details Page":0\u003C=a.indexOf("support.")?"Support Page":0\u003C=a.indexOf("events")?"Events Page":0\u003Ca.indexOf("/contact")?"Contact Us":0\u003Ca.indexOf("/co-branding")?"Co-Branding":0\u003Ca.indexOf("/privacy")?"Privacy":0\u003Ca.indexOf("/serveice-detail")?"Service Infor Details Page":0\u003Ca.indexOf("/newslist")?"News List Page":0\u003Ca.indexOf("/technology")\u0026\u002612\u003Ee.length?"Technology Page":0\u003Ca.indexOf("/technology/")\u0026\u002612\u003C=e.length?"Technology Details Page":0\u003Ca.indexOf("/coloros")?"ColorOS Page":0\u003Ca.indexOf("/about-us/")?\n"About OPPO Page":0\u003Ca.indexOf("/shops/")?"Store Locator":0\u003Ca.indexOf("/online-store")||0\u003Ca.indexOf("/online_store")?"Online Store Page":0\u003Ca.indexOf("/bookonline")?"Book Online Page":0\u003Ca.indexOf("patent")?"Patent Page":0\u003Ca.indexOf("/aesthetics-of-space")\u0026\u002621\u003EurlAesStr.length?"Aesthetics Page":0\u003Ca.indexOf("/aesthetics-of-space/")\u0026\u002621\u003C=urlAesStr.length?"Aesthetics Details Page":"Others"})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){function b(a){if(a.getAttribute("tm-eventAction"))return a.getAttribute("tm-eventAction");if(a.parentNode)return b(a.parentNode)}var c=',
            ["escape", ["macro", 34], 8, 16],
            ';return"pageName"==b(c)?',
            ["escape", ["macro", 36], 8, 16],
            ":b(c)})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){function b(a){if(a.getAttribute("tm-eventLabel"))return a.getAttribute("tm-eventLabel");if(a.parentNode)return b(a.parentNode)}var c=',
            ["escape", ["macro", 34], 8, 16],
            ";return b(c)})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 0], 8, 16],
            ';return a.match("^/[^/]+(/.*)")[1]})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){return ",
            ["escape", ["macro", 11], 8, 16],
            ".toLowerCase()})();",
          ],
        },
        { function: "__e" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "nav_group",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "eventLabel",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){function h(e){return"Contact Us"===e?["contact page"]:0\u003Ce.indexOf("+")?e.split("+"):e.trim().match(".*(P|p)age$")||!e.trim().match(".*(P|p)age.*")?[e]:[e.match(/^.*Page/)?e.match(/^.*Page/)[0]:e,e.replace(/^.*Page(\\+)?/,"")]}var d=',
            ["escape", ["macro", 41], 8, 16],
            ",k=",
            ["escape", ["macro", 42], 8, 16],
            ';if("uaEvent"===d){d=',
            ["escape", ["macro", 12], 8, 16],
            '||"";var c=',
            ["escape", ["macro", 13], 8, 16],
            '||"",b=',
            ["escape", ["macro", 43], 8, 16],
            '||""}else d=',
            ["escape", ["macro", 35], 8, 16],
            '||"",c=',
            ["escape", ["macro", 37], 8, 16],
            '||"",b=',
            ["escape", ["macro", 38], 8, 16],
            '||"";!b.match("^(img|text)(\\\\s)*\\\\+")\u0026\u0026\nb.match("^(img|text)")\u0026\u0026(b=b.replace("img","img+").replace("text","text+"));var f=d?h(d).map(function(e){return e.trim()}):[],a=b?b.split("+").map(function(e){return e.trim()}):[],g=f[0].toLowerCase();switch(c){case "Search":return{event_name:"search",search_type:a[0],search_term:a[1]};case "Search Result Type":return{event_name:"click_navigation",module:"Search Result Type",level:"none",nav_group:"none",nav_name:b};case "Top Banner":return{event_name:"click_banner",module:"Top Banner",position:2\u003C\na.length?a[1]:"none",action:"img"==a[0]?"img click":"button click",banner_name:2\u003Ca.length?a[2]:a[1],button_name:"img"==a[0]?"none":a[0]};case "Mid Banner":return{event_name:"product_click",module:"Product Card",product_name:a[2],product_type:"none",product_series:"none",action:"img"===a[0]?"img click":"button click",button_name:"img"===a[0]?"none":a[0]};case "Product Card":return"Buy Now"===a[0]?{event_name:"cta_button_click",module:"Product Card",product_series:"none",product_name:a[1],button_name:a[0]}:\n{event_name:"product_click",module:"Product Card",product_name:a[1],product_type:"none",product_series:"none",action:"img"===a[0]?"img click":"title"===a[0]?"title click":"button click",button_name:"img"===a[0]||"title"===a[0]?"none":a[0]};case "OPPO Universe":return{event_name:"discovery",module:"Discovery",action:"",button_name:b};case "Discovery":return"img"===a[0]?{event_name:"discovery",module:"Discovery",action:"img click",title:2\u003Ca.length?a[a.length-1]:a[1],button_name:"none"}:2===a.length\u0026\u0026\n"Learn more"===a[0]?{event_name:"discovery",module:"Discovery",action:"button click",title:a[1],button_name:a[0]}:2===a.length?{event_name:"cta_button_click",module:"Discovery",product_series:"none",product_name:a[1],button_name:a[0]}:3===a.length\u0026\u0026"home page"===g?{event_name:"discovery",module:"Discovery",action:a[0]+" click",title:a[2],button_name:"none"}:1===a.length?{event_name:"discovery",module:"Discovery",action:"img switch",title:"none",button_name:b}:{event_name:"discovery",module:"Discovery",\naction:"img click",title:a[1]+"+"+a[2],button_name:"none"};case "Top navigation":return{event_name:"click_navigation",module:"product series page"===g?"product series navigation":"path navigation",level:"none",nav_group:"none",nav_name:b};case "Product feature":return{event_name:"product_info_interaction",module:"Product feature",action:"button click",button_name:b};case "Hero Banner Entry":return{event_name:"product_click",module:"Hero Banner Entry",product_name:2\u003Ca.length?a[2]:a[1],product_type:"none",\nproduct_series:"none",action:"img"===a[0]?"img click":"button click",button_name:"img"===a[0]?"none":a[0]};case "Hero Banner":return{event_name:"click_banner",module:"Hero Banner",position:"none",action:"button click",banner_name:a[1],button_name:a[0]};case "Campaign Banner":return{event_name:"click_banner",module:"Campaign Banner",position:a[1],action:"button click",banner_name:a[2],button_name:a[0]};case "Product Entry":return{event_name:"product_click",module:"Product Entry",product_name:a[1],\nproduct_type:"none",product_series:"none",action:"button click",button_name:a[0]};case "Photo Gallery":return{event_name:"product_info_interaction",module:"Photo Gallery",action:"img"===a[0]?"img click":"img switch",button_name:b};case "Discover":return"Show more"===b?{event_name:"discovery",module:"Discovery",action:"button click",title:"none",button_name:b}:{event_name:"discovery",module:"Discovery",action:"img click",title:a[1]+"+"+a[2],button_name:"none"};case "Subject Entry":return{event_name:"theme_entry",\naction:1\u003Ca.length?a[0]+" click":"button click",button_name:1\u003Ca.length?a[2]:b,position:1\u003Ca.length?a[1]:"none"};case "Big focus":return{event_name:"video_start",module:c,video_title:b,video_percent:"0"};case "Brand info category":return{event_name:"click_navigation",module:c,level:"none",nav_group:"none",nav_name:b};case "Learn more":return{event_name:"technology_interaction",module:b,button_name:"Learn more"};case "Product type":return{event_name:"click_navigation",module:c,level:"none",nav_group:"none",\nnav_name:b};case "Top Banner Entry":return{event_name:"click_banner",module:"Top Banner",position:a[1],action:"img"===a[0]?"img click":"button click",banner_name:a[2],button_name:"img"===a[0]?"none":a[0]};case "Product filter":return{event_name:"filter",module:c,filter_type:a[0],button_name:a[1]};case "Product Click":return{event_name:"product_click",module:"Product List",product_name:a[1],product_type:"none",product_series:"none",action:"img"===a[0]?"img click":"button click",button_name:"img"===\na[0]?"none":a[0]};case "News type":return{event_name:"click_navigation",module:c,level:"none",nav_group:"none",nav_name:b};case "News Content":return{event_name:"news_interaction",module:c,button_name:b};case "Media reviews":return{event_name:"news_interaction",module:1\u003Ca.length?a[0]:"Media reviews",button_name:1\u003Ca.length?a[1]:b};case "Jump to other content":return{event_name:"news_interaction",module:c,button_name:b};case "Share":return{event_name:"share",module:"top function",content_type:"news",\nmethod:b};case "Jump to other page":return{event_name:"news_interaction",module:"Jump to other content",button_name:b};case "Tail label":return{event_name:"news_interaction",module:c,button_name:b};case "Related recommend":return{event_name:"recommend",module:"news related",recommend_content:"News",button_name:b};case "Advisory Contact Way":return{event_name:"contact_us",module:c,method:b};case "Media Contact Way":return{event_name:"contact_us",module:c,method:b};case "Learn More":return"Co-Branding"===\nd?{event_name:"about_brand",module:b,button_name:"Learn More"}:"Event List Page"===d||"Event Details Page"===d?{event_name:"events_interaction",module:"activity entry",action:"button click",button_name:"Learn More"}:"Brand Page"===d?{event_name:"about_brand",module:b,button_name:"Learn More"}:{event_name:"product_compare",module:b.split(":")[0].trim(),button_name:b.split(":")[1].trim()};case "Buy":return{event_name:"cta_button_click",module:a[0],product_series:"none",product_name:a[1],button_name:"Buy"};\ncase "See More":return{event_name:"events_interaction",module:"activity entry",action:"button click",button_name:b};case "Tech Navigation":return{event_name:"click_navigation",module:c,level:"none",nav_group:"none",nav_name:b};case "Big Focus":return{event_name:"video_start",module:"Big focus",video_title:b,video_percent:"0"};case "Content Video":return{event_name:"video_start",module:c,video_title:b,video_percent:"0"};case "Content Color":return{event_name:"technology_interaction",module:c,button_name:b};\ncase "Content Photo":return{event_name:"technology_interaction",module:c,button_name:b};case "Product Recommend_Learn more":return{event_name:"recommend",module:"product recommend",recommend_content:b,button_name:"Learn more"};case "Product Recommend_Buy":return{event_name:"cta_button_click",module:"product recommend",product_series:"none",product_name:b,button_name:"Buy"};case "Product Recommend_See specs":return{event_name:"recommend",module:"product recommend",recommend_content:b,button_name:"See specs"};\ncase "Product Recommend_See all":return{event_name:"recommend",module:"Product Recommend",recommend_content:"product list",button_name:"See all"};case "Related News":return{event_name:"recommend",module:c,recommend_content:"News",button_name:b};case "Popular FAQs":return{event_name:"click_faq",module:c,button_name:b};case "Other Recommend":return{event_name:"recommend",module:c,recommend_content:"Technology",button_name:"brand page"===g?"Lightning Fast 5G":b};case "Store Entry":return{event_name:"online_store_entry",\nmodule:"store list",store_type:1\u003Ca.length?a[1].match(RegExp("oppo","i"))?"OPPO Store":"Third-party Store":"none",store_name:1\u003Ca.length?a[1]:b};case "Product Details Navigation":return{event_name:"click_navigation",module:"product details navigation",level:"none",nav_group:"none",nav_name:b};case "CTA Button":return{event_name:"cta_button_click",module:0\u003Cd.indexOf(":")?"CTA Button":"secondary navigation",product_series:"none",product_name:1\u003Cf.length?f[1]:d.split(":")[1].trim(),button_name:a[0]};case "CTA button":return{event_name:"cta_button_click",\nmodule:0\u003Cd.indexOf(":")?"CTA Button":"secondary navigation",product_series:"none",product_name:1\u003Cf.length?f[1]:d.split(":")[1].trim(),button_name:a[0]};case "Where to buy":return{event_name:"online_store_entry",module:"where to buy",store_type:2\u003Ca.length?a[0]+"+"+a[1]:a[0],store_name:2\u003Ca.length?a[2]:a[1]};case "Product Details Impression":return{event_name:"details_impression",module:"product details",details_name:b};case "Production Details Impression":return{event_name:"details_impression",module:"product details",\ndetails_name:b};case "Details Page impression":return{event_name:"details_impression",module:"product details",details_name:b};case "Event Details Navigation":return{event_name:"click_navigation",module:"event details navigation",level:"none",nav_group:"none",nav_name:b};case "Floating Button":return{event_name:"events_interaction",module:"Floating Button",action:"button click",button_name:b};case "Event Details Impression":return{event_name:"details_impression",module:"event details",details_name:b};\ncase "Follow us":return{event_name:"follow_us",button_name:b};case "Compare":return{event_name:"product_compare",module:"Select Product",button_name:"none"};case "Spec Details Impression":return{event_name:"details_impression",module:"spec details",details_name:b};case "KV Banner":return{event_name:"click_banner",module:"KV Banner",position:"none",action:"background"===a[0]?"background click":"button click",banner_name:2\u003Ca.length?a[2]:a[1],button_name:"background"===a[0]?"none":a[0]};case "Lottery 2":return{event_name:"click_lottery",\nmodule:"Lottery 2",action:1\u003Ca.length?"pop click":"button click",button_name:1\u003Ca.length?a[1]:b};case "Lottery 1":return{event_name:"click_lottery",module:"Lottery 1",action:1\u003Ca.length?"pop click":"button click",button_name:1\u003Ca.length?a[1]:b};case "Product List":return{event_name:"product_click",module:"Product List",product_name:a[1],product_type:"none",product_series:"none",action:"text"===a[0]||"img"===a[0]?a[0]+" click":"button click",button_name:"text"===a[0]||"img"===a[0]?"none":a[0]};case "Product Image Text":return{event_name:"product_click",\nmodule:"Product Image Text",product_name:a[1],product_type:"none",product_series:"none",action:"text"===a[0]||"img"===a[0]?a[0]+" click":"button click",button_name:"text"===a[0]||"img"===a[0]?"none":a[0]};case "Banner":return{event_name:"click_banner",module:"Banner",position:"none",action:"text"===a[0]||"img"===a[0]?a[0]+" click":"button click",banner_name:a[1],button_name:"text"===a[0]||"img"===a[0]?"none":a[0]};case "Coupon \\x26 Coupon Item":return{event_name:"coupon_interaction",module:"Coupon \\x26 Coupon Item",\nbutton_name:b};case "pageNavigation":return{event_name:"news_interaction",module:"pageNavigation",button_name:b};case "Product List Component":return/TopBanner/.test(a[0])?{event_name:"click_banner",module:"Top Banner",position:"none",action:"img click",banner_name:a[1],button_name:"none"}:/Buy/.test(a[0])?{event_name:"cta_button_click",module:c,product_series:a[1],product_name:a[2],button_name:"Buy"}:/View All/.test(a[1])?{event_name:"product_list_interaction",module:a[0],button_name:"View All"}:\n/Learn more/.test(a[0])?{event_name:"product_click",module:c,product_name:a[2],product_type:f[1],product_series:a[1],action:"button click",button_name:"learn more"}:{event_name:"product_click",module:c,product_name:a[1],product_type:f[1],product_series:a[0],action:"img click",button_name:"none"};case "Subscribe":return{event_name:"subscribe",module:"Bottom Function",button_name:b};case "Series Banner":return{event_name:"click_navigation",module:"Series Banner",level:"none",nav_group:"none",nav_name:1\u003C\na.length?a[1]:b}}switch(d){case "Campaign Engaged Landing":return{event_name:"campaign_engaged_landing",method:c,button_name:b};case "Store Locator Page":return{event_name:"find_offline_store",module:b,button_name:c};case "Scroll Depth":return{event_name:"scroll",scroll:b};case "Top Navigation":return{event_name:"click_navigation",module:"Top Navigation",level:"Firstnavigation"===a[0]?"first":"Secondnavigation"===a[0]?"second":"third",nav_group:"Firstnavigation"===a[0]?"none":k,nav_name:a[1]};case "Top Function":return"Oppo logo"===\nb?{event_name:"function_entry",module:"Top Function",function_type:"back to homepage",button_name:b}:"Country choose"===b?{event_name:"function_entry",module:"Top Function",function_type:"country choose",button_name:b}:1\u003Ca.length?{event_name:"function_entry",module:"Top Function",function_type:a[0],button_name:a[1]}:{event_name:"function_entry",module:"Top Function",function_type:"primary function",button_name:b};case "Bottom Navigation":return{event_name:"click_navigation",module:"Bottom Navigation",\nlevel:"none",nav_group:a[0],nav_name:a[1]};case "Follow us":return{event_name:"follow_us",button_name:b};case "Bottom Function":return"Input email"===b?{event_name:"subscribe",module:"Bottom Function",button_name:b}:"Live chat"===b?{event_name:"chat_interaction",module:"Bottom Function",button_name:b}:"Country choose"===b?{event_name:"function_entry",module:"Bottom Function",function_type:"country choose",button_name:b}:{event_name:"contact_us",module:"Bottom Function",method:b.split(":")[1]};case "Search":return{event_name:"search",\nsearch_type:a[0],search_term:a[1]};case "Notice Bar":return{event_name:"notification_interaction",module:"Notice Bar",button_name:b};case "Floating Window":return{event_name:"pop_up",module:"pop_up click",button_name:b};case "Search Result Page":return c.match(":(\\\\s)?Filter")?{event_name:"filter",module:c.split(":")[0].trim(),filter_type:c.split(":")[0].trim(),button_name:b}:c.match(":(\\\\s)?Sort")?{event_name:"sort",module:c.split(":")[0].trim(),sort_type:c.split(":")[0].trim(),button_name:b}:c.match(":(\\\\s)?Product List")?\n{event_name:"product_click",module:c.split(":")[0].trim(),product_name:a[1],product_type:"none",product_series:"none",action:"img"===a[0]?"img click":"button click",button_name:"img"===a[0]?"none":a[0]}:c.match(":(\\\\s)?Content List")?{event_name:"content_click",module:c.split(":")[0].trim(),content_name:1\u003Ca.length?a[1]:b}:c.match(":(\\\\s)?Page Number")?{event_name:"pagination",module:c.split(":")[0].trim(),button_name:b}:c.match(":(\\\\s)?Recommended Platforms")?{event_name:"recommend",module:"Recommended Platforms",\nrecommend_content:"Platforms",button_name:b}:{event_name:c,button_name:b};case "News Details Page":return{event_name:"news_interaction",module:c,button_name:b};case "Product Details":return{event_name:"details_impression",module:"product details",details_name:b.split("::")[1].trim()}}return 0!==d.indexOf("Product Comparison")||c.match("CTA Button|Learn More|Spec Details Impression|Spec Details Impression")?0===c.indexOf("Click:")?"event details page"===g?"Slide Img"===a[0]||"Switch Button"===a[0]?\n{event_name:"events_interaction",module:c.split(":")[1].trim(),action:"Slide Img"===a[0]?"img slide":"img switch",button_name:a[1]}:{event_name:"events_interaction",module:c.split(":")[1].trim(),action:"button click",button_name:b}:"Learn more"===a[0]?{event_name:"news_interaction",module:c.split(":")[1].trim(),button_name:b}:1===a.length||"Slide Img"===a[0]||"Switch Button"===a[0]?{event_name:"product_info_interaction",module:c.split(":")[1].trim(),action:1\u003Ca.length?"Slide Img"===a[0]?"img slide":\n"img switch":"button click",button_name:1\u003Ca.length?a[1]:b}:{event_name:"recommend",module:c.split(":")[1].trim(),recommend_content:a[0],button_name:a[1]}:0===c.indexOf("Video")?"Play"===b||"play"===b?{event_name:"video_start",module:"product details page"===g?"product video":"event video",video_title:c.split(":")[1].trim(),video_percent:"0"}:"100%"===b?{event_name:"video_complete",module:"product details page"===g?"product video":"event video",video_title:c.split(":")[1].trim(),video_percent:b}:{event_name:"video_progress",\nmodule:"product details page"===g?"product video":"event video",video_title:c.split(":")[1].trim(),video_percent:b}:0===c.indexOf("CTA:")?{event_name:"cta_button_click",module:c.split(":")[1].trim(),product_series:"none",product_name:1\u003Ca.length?a[0]:f[1],button_name:1\u003Ca.length?a[1]:b}:{event_name:c,button_name:b}:{event_name:"product_compare",module:b,button_name:b}})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 44], 8, 16],
            ";return Object.keys(a)[1]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 44], 8, 16],
            ";return Object.values(a)[1]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 44], 8, 16],
            ";return Object.keys(a)[2]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 44], 8, 16],
            ";return Object.values(a)[2]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 44], 8, 16],
            ";return Object.keys(a)[3]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 44], 8, 16],
            ";return Object.values(a)[3]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 44], 8, 16],
            ";return Object.keys(a)[4]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 44], 8, 16],
            ";return Object.values(a)[4]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 44], 8, 16],
            ";return Object.keys(a)[5]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 44], 8, 16],
            ";return Object.values(a)[5]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 44], 8, 16],
            ";return Object.keys(a)[6]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 44], 8, 16],
            ";return Object.values(a)[6]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 44], 8, 16],
            ";return Object.keys(a)[7]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 44], 8, 16],
            ";return Object.values(a)[7]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 44], 8, 16],
            ";return Object.keys(a)[8]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 44], 8, 16],
            ";return Object.values(a)[8]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 44], 8, 16],
            ";return Object.keys(a)[9]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 44], 8, 16],
            ";return Object.values(a)[9]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){return(new Date).getTime()})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=new Date(",
            ["escape", ["macro", 63], 8, 16],
            '),d=-a.getTimezoneOffset(),e=0\u003C=d?"+":"-",b=function(c){c=Math.abs(Math.floor(c));return(10\u003Ec?"0":"")+c};return a.getFullYear()+"-"+b(a.getMonth()+1)+"-"+b(a.getDate())+"|"+b(a.getHours())+"-"+b(a.getMinutes())+"-"+b(a.getSeconds())+"|"+e+b(d/60)+":"+b(d%60)})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var b=new Date(",
            ["escape", ["macro", 63], 8, 16],
            '),c=function(a){a=Math.abs(Math.floor(a));return(10\u003Ea?"0":"")+a};return b.getFullYear()+"-"+c(b.getMonth()+1)+"-"+c(b.getDate())})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=(new Date(",
            ["escape", ["macro", 63], 8, 16],
            ')).getDay();return(0==a?7:a)+""})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=new Date(",
            ["escape", ["macro", 63], 8, 16],
            ');a=a.getHours();a=Math.abs(Math.floor(a));return a=(10\u003Ea?"0":"")+a})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 44], 8, 16],
            ";return a.event_name})();",
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "gtm.element.parentNode.parentNode.parentNode",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){return ",
            ["escape", ["macro", 0], 8, 16],
            '.match("/shops/detail/")?document.querySelector("div.detailStore-titlePc h2").textContent.trim():',
            ["escape", ["macro", 69], 8, 16],
            '.querySelector("h3").textContent.replace(/[12]\\./,"").trim()})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){return ",
            ["escape", ["macro", 34], 8, 16],
            ".textContent})();",
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 1,
          vtp_setDefaultValue: false,
          vtp_name: "event_parameters",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.keys(a)[0]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.values(a)[0]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.keys(a)[1]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.values(a)[1]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.keys(a)[2]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.values(a)[2]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.keys(a)[3]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.values(a)[3]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.keys(a)[4]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.values(a)[4]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.keys(a)[5]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.values(a)[5]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.keys(a)[6]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.values(a)[6]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.keys(a)[7]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.values(a)[7]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.keys(a)[8]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.values(a)[8]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.keys(a)[9]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.values(a)[9]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.keys(a)[10]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.values(a)[10]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.keys(a)[11]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.values(a)[11]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.keys(a)[12]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.values(a)[12]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.keys(a)[13]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.values(a)[13]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.keys(a)[14]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.values(a)[14]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.keys(a)[15]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.values(a)[15]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.keys(a)[16]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.values(a)[16]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.keys(a)[17]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.values(a)[17]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.keys(a)[18]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.values(a)[18]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.keys(a)[19]})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 72], 8, 16],
            ";return Object.values(a)[19]})();",
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "event_name",
        },
        { function: "__f", vtp_component: "URL" },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){return document.cookie.match("(^username\\x3d)|(; username\\x3d)")?!0:!1})();',
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "event_parameters.module",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "event_parameters.nav_name",
        },
        { function: "__aev", vtp_varType: "TEXT" },
        {
          function: "__v",
          vtp_name: "gtm.triggers",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
        },
        {
          function: "__v",
          vtp_name: "gtm.elementUrl",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__remm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 120],
          vtp_fullMatch: false,
          vtp_replaceAfterMatch: false,
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            ["map", "key", "shopee.com.my", "value", "shopee"],
            ["map", "key", "lazada.com.my", "value", "lazada"],
            ["map", "key", "shop.celcom.com.my", "value", "celcom"],
            [
              "map",
              "key",
              "oppo.com.my/page/FindX3ProLandingPage",
              "value",
              "oppo",
            ],
            ["map", "key", "store.maxis.com.my", "value", "maxis"],
            ["map", "key", "store.u.com.my", "value", "umobile"],
            ["map", "key", "senheng.com.my", "value", "senheng"],
            ["map", "key", "senq.com.my", "value", "senq"],
            ["map", "key", "digi.com.my", "value", "digi"],
            [
              "map",
              "key",
              "www.oppo.com/my/smartphones/series-find-x/find-x3-pro/#link.button-buy",
              "value",
              "BuyNow",
            ],
          ],
        },
        { function: "__t" },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){if("Yes"==',
            ["escape", ["macro", 5], 8, 16],
            "){var a=",
            ["escape", ["macro", 6], 8, 16],
            ';if(void 0!=a\u0026\u0026a.includes("permit")\u0026\u0026a.includes("4"))return"yes"}return"no"})();',
          ],
        },
        {
          function: "__smm",
          vtp_setDefaultValue: true,
          vtp_input: ["macro", 11],
          vtp_defaultValue: ["macro", 11],
          vtp_map: [
            "list",
            ["map", "key", "Home Page", "value", "Homepage"],
            ["map", "key", "Product List Page", "value", "Product List Page"],
            ["map", "key", "Product Series Page", "value", "Series Page"],
            [
              "map",
              "key",
              "Product Details Specs Page",
              "value",
              "Product Details Specs Page",
            ],
            [
              "map",
              "key",
              "Product Details Page",
              "value",
              "Product Details Page",
            ],
            ["map", "key", "News List Page", "value", "News List Page"],
            ["map", "key", "News Details Page", "value", "News Details Page"],
            ["map", "key", "Support Page", "value", "Support Page"],
            ["map", "key", "Search Result Page", "value", "Search Result Page"],
            ["map", "key", "Store Locator Page", "value", "Store Locator"],
            ["map", "key", "ColorOS Page", "value", "ColorOS Page"],
            ["map", "key", "Event List Page", "value", "Events Page"],
            ["map", "key", "Event Details Page", "value", "Events Page"],
            ["map", "key", "Others", "value", "Others"],
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var b=",
            ["escape", ["macro", 124], 8, 16],
            ",c=",
            ["escape", ["macro", 113], 8, 16],
            ",a=",
            ["escape", ["macro", 72], 8, 16],
            ';switch(c){case "click_navigation":return"secondary navigation"===a.module?"expand"===a.nav_group||"collapse"===a.nav_group?{eventCategory:b,eventAction:"Product Details Navigation",eventLabel:a.nav_name+"+"+a.nav_group}:{eventCategory:b,eventAction:"Product Details Navigation",eventLabel:a.nav_group+"+"+a.nav_name}:"Top Navigation"===a.module||"Bottom Navigation"===a.module?{eventCategory:a.module,eventAction:b,\neventLabel:a.nav_group+"+"+a.level+"+"+a.nav_name}:{eventCategory:b,eventAction:a.module,eventLabel:a.nav_group+"+"+a.level+"+"+a.nav_name};case "contact_us":return"Bottom Function"===a.module?{eventCategory:a.module,eventAction:b,eventLabel:a.method}:{eventCategory:"Contact Us",eventAction:a.module,eventLabel:a.method};case "function_entry":return"Bottom Function"===a.module?{eventCategory:a.module,eventAction:b,eventLabel:"Country choose"}:"Top Function"===a.module?"Oppo logo"===a.button_name?{eventCategory:a.module,\neventAction:b,eventLabel:"Oppo logo"}:{eventCategory:a.module,eventAction:b,eventLabel:a.function_type+"+"+a.button_name}:"Product List Navigation"===a.module?{eventCategory:b,eventAction:a.module,eventLabel:a.function_type+"+"+a.button_name}:{eventCategory:b,eventAction:a.module,eventLabel:a.button_name};case "follow_us":return{eventCategory:"Follow us",eventAction:b,eventLabel:a.button_name};case "discovery":return{eventCategory:b,eventAction:a.module,eventLabel:("img click"===a.action?"img":a.button_name)+\n("none"===a.title?"":"+"+a.title)};case "product_click":return"img click"===a.action?{eventCategory:b,eventAction:a.module,eventLabel:"img+"+a.product_type+"+"+a.product_name}:"title click"===a.action?{eventCategory:b,eventAction:a.module,eventLabel:"title+"+a.button_name+"+"+a.product_type+"+"+a.product_name}:{eventCategory:b,eventAction:a.module,eventLabel:a.button_name+"+"+a.product_type+"+"+a.product_name};case "cta_button_click":return"secondary navigation"===a.module?{eventCategory:b+"+"+a.product_name,\neventAction:"CTA Button",eventLabel:a.button_name}:a.module.match("Hero Banner|Product Card")?{eventCategory:b,eventAction:a.module,eventLabel:a.button_name+"+"+a.product_name}:b.match("Product Details Page|Events Page")?{eventCategory:b,eventAction:"CTA: "+a.module,eventLabel:a.product_name+"+"+a.button_name}:/\\/product-compare/.test(',
            ["escape", ["macro", 0], 8, 16],
            ')?{eventCategory:"Product Comparison:"+a.module,eventAction:"CTA Button",eventLabel:a.product_name+":"+a.button_name.replace("+top",":top")}:{eventCategory:b,\neventAction:a.module,eventLabel:a.button_name+"+"+a.product_name};case "online_store_entry":return{eventCategory:b,eventAction:a.module,eventLabel:a.store_type+"+"+a.store_name};case "click_banner":return"none"===a.button_name?{eventCategory:b,eventAction:a.module,eventLabel:"img+"+a.position+"+"+a.banner_name}:{eventCategory:b,eventAction:a.module,eventLabel:a.button_name+"+"+a.position+"+"+a.banner_name};case "about_brand":return{eventCategory:b,eventAction:a.button_name,eventLabel:a.module};case "product_interaction":return{eventCategory:b,\neventAction:a.module,eventLabel:a.button_name};case "subscribe":return{eventCategory:b,eventAction:a.module,eventLabel:a.button_name};case "search":return{eventCategory:"Search",eventAction:b,eventLabel:a.search_type+"+"+a.search_term};case "details_impression":return{eventCategory:b,eventAction:"Product Details Impression",eventLabel:a.details_name,nonInteractional:!0};case "video_start":return{eventCategory:b,eventAction:"Video: "+a.video_title,eventLabel:a.video_percent};case "video_progress":return{eventCategory:b,\neventAction:"Video: "+a.video_title,eventLabel:a.video_percent};case "video_complete":return{eventCategory:b,eventAction:"Video: "+a.video_title,eventLabel:a.video_percent};case "product_info_interaction":return"button click"===a.action?{eventCategory:b,eventAction:"Click: "+a.module,eventLabel:a.button_name}:"img slide"===a.action?{eventCategory:b,eventAction:"Click: "+a.module,eventLabel:"Slide Img+"+a.button_name}:{eventCategory:b,eventAction:"Click: "+a.module,eventLabel:"Switch Button+"+a.button_name};\ncase "recommend":return{eventCategory:b,eventAction:"Click: "+a.module,eventLabel:a.recommend_content+"+"+a.button_name};case "news_interaction":return{eventCategory:b,eventAction:a.module,eventLabel:a.button_name};case "share":return{eventCategory:b,eventAction:"Share",eventLabel:a.content_type+"+"+a.method};case "product_compare":return"None"==a.product_name?{eventCategory:"Product Comparison:"+a.module,eventAction:"Function",eventLabel:a.button_name}:/^Choose Product/.test(a.button_name)?{eventCategory:"Product Comparison:"+\na.module,eventAction:"Choose Product",eventLabel:a.product_name+("Choose Product"==a.button_name?"":a.button_name.replace(/^Choose Product+/,""))}:{eventCategory:"Product Comparison:"+a.module,eventAction:"Learn More",eventLabel:a.product_name+":"+a.button_name.replace("+top",":top")};case "filter":return{eventCategory:"Product List Page+"+b,eventAction:a.module,eventLabel:a.filter_type+"+"+a.button_name}}})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){if(document.querySelector(".pi-nav-model a.active"))return document.querySelector(".pi-nav-model a.active").textContent.trim();if(document.querySelector(".product_tab-wrap \\x3e li.active"))return document.querySelector(".product_tab-wrap \\x3e li.active").textContent.trim();if(document.querySelector(".product_tab-btn \\x3e a \\x3e span"))return document.querySelector(".product_tab-btn \\x3e a \\x3e span").textContent.trim();if(document.querySelector(".submenu-model h1"))return document.querySelector(".submenu-model h1").textContent.trim()})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 0], 8, 16],
            ';if(a.match("/events/(.*)/"))return a.match("/events/(.*)/")[1]})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 125], 8, 16],
            ";a=a.eventAction;var b=",
            ["escape", ["macro", 126], 8, 16],
            ",c=",
            ["escape", ["macro", 127], 8, 16],
            ';"Product Details Page"===a\u0026\u0026b?a+="+"+b:"Events Page"===a\u0026\u0026c\u0026\u0026(a+="+"+c);return a.split("+").filter(function(d){return"none"!==d}).join("+")})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 125], 8, 16],
            ';a=a.eventLabel;return a.split("+").filter(function(b){return"none"!==b}).join("+")})();',
          ],
        },
        {
          function: "__remm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 2],
          vtp_fullMatch: false,
          vtp_replaceAfterMatch: false,
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            ["map", "key", "www\\.oppo\\.com/en", "value", "huyblcfuel"],
            ["map", "key", "oppo\\.com/in", "value", "hz390gsl1t"],
            ["map", "key", "oppo\\.com/my", "value", "hz3snuya61"],
            ["map", "key", "oppo\\.com/id", "value", "hz3t3klue6"],
            ["map", "key", "oppo\\.com/mx", "value", "hz3the1pav"],
            ["map", "key", "www\\.oppo\\.com/cn", "value", "hz3ttr4h2d"],
            ["map", "key", "oppo\\.com/th", "value", "i0lib1dehc"],
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){var c=[];if("/mx/smartphones/"==',
            ["escape", ["macro", 0], 8, 16],
            '||"/mx/audio/"==',
            ["escape", ["macro", 0], 8, 16],
            '||"/mx/wearables/"==',
            ["escape", ["macro", 0], 8, 16],
            '){var a=document.querySelectorAll(".list-item \\x3e .description \\x3e a \\x3e .title");for(var b=0;b\u003C(5\u003Ca.length?5:a.length);b++)c.push(a[b].innerHTML)}return c})();',
          ],
        },
        {
          function: "__v",
          vtp_name: "gtm.videoStatus",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.videoPercent",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 132], 8, 16],
            ';switch(a){case "start":return"Play";case "pause":return"Pause";case "seek":return"Seeking";case "progress":return+',
            ["escape", ["macro", 133], 8, 16],
            '+"% Watched";case "complete":return"100% Watched"}})();',
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "nonInteraction",
        },
        { function: "__k", vtp_decodeCookie: false, vtp_name: "userId" },
        {
          function: "__remm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 120],
          vtp_fullMatch: false,
          vtp_replaceAfterMatch: false,
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            ["map", "key", "telstra", "value", "Telstra"],
            ["map", "key", "wireless", "value", "Wireless 1"],
            ["map", "key", "ebay", "value", "eBay"],
            ["map", "key", "catch", "value", "Catch"],
            ["map", "key", "vodafone", "value", "Vodafone"],
            ["map", "key", "retravision", "value", "Retravision"],
            ["map", "key", "kogan", "value", "Kogan"],
            ["map", "key", "optus", "value", "Optus"],
            ["map", "key", "amazon", "value", "Amazon"],
            ["map", "key", "thegoodguys", "value", "The Good Guys"],
            ["map", "key", "officeworks", "value", "Officeworks"],
            ["map", "key", "binglee", "value", "Bing Lee"],
            ["map", "key", "jbhifi", "value", "Jb Hi Fi"],
            ["map", "key", "mobileciti", "value", "Mobileciti"],
            ["map", "key", "woolworths", "value", "Woolworths"],
            ["map", "key", "telechoice", "value", "Telechoice"],
            ["map", "key", "woolworth", "value", "Woolworths"],
            ["map", "key", "jb", "value", "Jb Hi Fi"],
            ["map", "key", "good", "value", "The Good Guys"],
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){var a=sessionStorage.getItem("gtm_page_date");a=Date.now()-parseInt(a);return a=parseInt(a/1E3)})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 138], 8, 16],
            ';return 60\u003C=a?"At least 60":45\u003C=a?"At least 45":30\u003C=a?"At least 30":15\u003C=a?"At least 15":5\u003C=a?"At least 5":"Less than 5"})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){var b=2,c=17;return function(a){a.set("dimension"+b,a.get("clientId"));a.set("dimension"+c,a.get("hitType"))}})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=window.navigator.userAgent;return a})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 2], 8, 16],
            '.split("//")[1].split("?")[0].split("#")[0];"/"==a.charAt(a.length-1)\u0026\u0026(a=a.substr(0,a.length-1));a=a.split("/");if("404"!=a[a.length-1])if("cn"==a[1]\u0026\u0026"product"==a[2])var b=a[3];else if(("smartphones"==a[2]||"accessories"==a[2])\u0026\u00260==a[3].indexOf("series-"))b=4==a.length?a[3].substring(7)+" series":a[4];else if("smartphone"==a[2].split("-")[0]||"accessory"==a[2].split("-")[0])b=a[2].substring(a[2].indexOf("-")+1);return b})();',
          ],
        },
        {
          function: "__d",
          vtp_elementId: "event-mark-for-product",
          vtp_attributeName: "id",
          vtp_selectorType: "ID",
        },
        { function: "__c", vtp_value: "436081813" },
        {
          function: "__remm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 120],
          vtp_fullMatch: false,
          vtp_replaceAfterMatch: false,
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            ["map", "key", "amazon", "value", "Amazon"],
            ["map", "key", "evkur", "value", "Evkur"],
            ["map", "key", "gittigidiyor", "value", "Gitti Gidiyor"],
            ["map", "key", "hepsiburada", "value", "Hepsi Burada"],
            ["map", "key", "mediamarkt", "value", "Media Markt"],
            ["map", "key", "n11", "value", "n11"],
            ["map", "key", "teknosa", "value", "Teknosa"],
            ["map", "key", "trendyol", "value", "Trendyol"],
            ["map", "key", "turktelekom", "value", "Turk Telekom"],
            ["map", "key", "turkcell", "value", "Turkcell"],
            ["map", "key", "vatanbilgisayar", "value", "Vatan"],
            ["map", "key", "vodafone", "value", "Vodafone"],
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 2], 8, 16],
            '.split("//")[1].split("?")[0].split("#")[0];"/"==a.charAt(a.length-1)\u0026\u0026(a=a.substr(0,a.length-1));a=a.split("/");var b;"404"!=a[a.length-1]\u0026\u0026(b=a[2]);return b})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 2], 8, 16],
            '.split("//")[1].split("?")[0].split("#")[0];"/"==a.charAt(a.length-1)\u0026\u0026(a=a.substr(0,a.length-1));a=a.split("/");if("404"!=a[a.length-1])if("cn"==a[1]\u0026\u0026"product"==a[2])var b=a[3];else if("smartphones"==a[2]\u0026\u00260==a[3].indexOf("series-"))b=4==a.length?a[3].substring(7)+" series":a[4];else if("accessories"==a[2])b=a[3];else if("smartphone"==a[2].split("-")[0]||"accessory"==a[2].split("-")[0])b=a[2].substring(a[2].indexOf("-")+1);return b})();',
          ],
        },
        {
          function: "__remm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 34],
          vtp_fullMatch: false,
          vtp_replaceAfterMatch: false,
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            [
              "map",
              "key",
              "https://www\\.boulanger\\.com/",
              "value",
              "Boulanger",
            ],
            [
              "map",
              "key",
              "https://www\\.bouyguestelecom\\.fr/telephones\\-mobiles/",
              "value",
              "Bouygues",
            ],
            [
              "map",
              "key",
              "https://www\\.cdiscount\\.com/telephonie/telephone\\-mobile/",
              "value",
              "Cdiscount",
            ],
            [
              "map",
              "key",
              "https://www\\.darty\\.com/nav/achat/gps_communication/telephone_mobile/telephone_portable/",
              "value",
              "Darty",
            ],
            [
              "map",
              "key",
              "https://www\\.fnac\\.com/Smartphone",
              "value",
              "Fnac",
            ],
            ["map", "key", "https://www\\.ldlc\\.com/", "value", "LDLC"],
            [
              "map",
              "key",
              "https://boutique\\.orange\\.fr/mobile/",
              "value",
              "Orange",
            ],
            ["map", "key", "https://shop\\.sosh\\.fr/mobile", "value", "Sosh"],
            ["map", "key", "http://www\\.wel\\-com\\.fr/", "value", "Welcom'"],
          ],
        },
        {
          function: "__remm",
          vtp_setDefaultValue: true,
          vtp_input: ["macro", 2],
          vtp_fullMatch: false,
          vtp_replaceAfterMatch: false,
          vtp_defaultValue: "1",
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            ["map", "key", "oppo.com/id", "value", "10"],
            ["map", "key", "oppo.com/my", "value", "10"],
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=window.navigator.userAgent;return a})();",
          ],
        },
        {
          function: "__u",
          vtp_component: "QUERY",
          vtp_queryKey: "email",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__c", vtp_value: ["macro", 151] },
        { function: "__c", vtp_value: ["macro", 0] },
        { function: "__c", vtp_value: "87644" },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){return/iPad/.test(navigator.userAgent)?"t":/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent)?"m":"d"})();',
          ],
        },
        {
          function: "__u",
          vtp_component: "QUERY",
          vtp_queryKey: "zipcode",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__c", vtp_value: ["macro", 156] },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "gtm.element.parentElement.className",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 34], 8, 16],
            ';if(a.getAttribute("data-name"))return a.getAttribute("data-name")})();',
          ],
        },
        {
          function: "__remm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 120],
          vtp_fullMatch: false,
          vtp_replaceAfterMatch: false,
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            ["map", "key", "amazon.co", "value", "amazon"],
            ["map", "key", "rakuten.co", "value", "rakuten"],
            ["map", "key", "paypaymall.yahoo.co", "value", "paypay"],
            ["map", "key", "shops.aeonsquare.net", "value", "aeon"],
            ["map", "key", "biccamera.com", "value", "bic"],
            ["map", "key", "join.biglobe.ne.jp", "value", "biglobe"],
            ["map", "key", "www.edion.com", "value", "edion"],
            ["map", "key", "www.fiimo.jp", "value", "fiimo"],
            ["map", "key", "simseller.goo.ne.jp", "value", "goo"],
            ["map", "key", "shop.hikaritv.net", "value", "hikari"],
            ["map", "key", "www.iijmio.jp", "value", "iijmio"],
            ["map", "key", "joshinweb.jp", "value", "joshin"],
            ["map", "key", "www.ksdenki.com", "value", "ks"],
            ["map", "key", "linksmate.jp", "value", "linksmate"],
            ["map", "key", "mineo.jp", "value", "mineo"],
            ["map", "key", "nifmo.nifty.com", "value", "nifmo"],
            ["map", "key", "online.nojima.co.jp", "value", "nojima"],
            ["map", "key", "mobile.nuro.jp", "value", "nuro"],
            ["map", "key", "www.qtmobile.jp", "value", "qt"],
            [
              "map",
              "key",
              "network.mobile.rakuten.co",
              "value",
              "rakutenmobile",
            ],
            ["map", "key", "yamada-denkiweb.com", "value", "yamada"],
            ["map", "key", "online.ymobile.jp", "value", "ymobile"],
            ["map", "key", "www.yodobashi.com", "value", "yodobashi"],
            ["map", "key", "www.uqwimax.jp", "value", "uq"],
            ["map", "key", "www.au.com", "value", "au"],
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){var a=document.title.split("|")[0].split(",")[0].split("-")[0].trim();return a})();',
          ],
        },
        {
          function: "__remm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 120],
          vtp_fullMatch: true,
          vtp_replaceAfterMatch: true,
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            [
              "map",
              "key",
              "https://www.oppojapan.com/reno2021/kakaku.com/",
              "value",
              "詳しくはこちら_kakaku.com",
            ],
            [
              "map",
              "key",
              "https://www.oppojapan.com/guidebook/opporeno5a_datatransfer.pdf",
              "value",
              "詳しくはこちら_2",
            ],
            [
              "map",
              "key",
              "https://www.oppo.com/jp/smartphones/series-reno/reno5-a/",
              "value",
              "詳しくはこちら_1",
            ],
            [
              "map",
              "key",
              "https://www.oppojapan.com/iot_campaign2021/",
              "value",
              "CP_present",
            ],
            [
              "map",
              "key",
              "https://www.oppojapan.com/paypay_campaign/reno5_a/",
              "value",
              "CP_paypay",
            ],
            [
              "map",
              "key",
              "Reno5A_2021summer_CP_oppocare",
              "value",
              "CP_oppocare",
            ],
            [
              "map",
              "key",
              "https://stn.mb.softbank.jp/h8r36",
              "value",
              "CP_app",
            ],
            [
              "map",
              "key",
              "https://www.yodobashi.com/product/100000001006128018/",
              "value",
              "CL_yodobashi",
            ],
            [
              "map",
              "key",
              "https://online.ymobile.jp/store/CHDO0001/regi/all/entry/reno5a",
              "value",
              "CL_ymobile",
            ],
            [
              "map",
              "key",
              "https://www.yamada-denkiweb.com/7163376010",
              "value",
              "CL_yamada",
            ],
            [
              "map",
              "key",
              "https://item.rakuten.co.jp/oppo/oppo_reno5_a/",
              "value",
              "CL_rakuten",
            ],
            [
              "map",
              "key",
              "https://www.qtmobile.jp/list/reno-5a/",
              "value",
              "CL_qt",
            ],
            [
              "map",
              "key",
              "https://online.nojima.co.jp/commodity/1/4580038877455/",
              "value",
              "CL_nojima",
            ],
            [
              "map",
              "key",
              "https://nifmo.nifty.com/cs/smp-info/new-detail/210601000504/1.htm",
              "value",
              "CL_nifmo",
            ],
            [
              "map",
              "key",
              "linksmate.jp/terminal/oppo_reno_5a",
              "value",
              "CL_linksmate",
            ],
            [
              "map",
              "key",
              "https://joshinweb.jp/pc/52646/4580038877455.html",
              "value",
              "CL_joshin",
            ],
            [
              "map",
              "key",
              "https://www.iijmio.jp/device/oppo/reno5_a.html",
              "value",
              "CL_iijmio",
            ],
            [
              "map",
              "key",
              "https://shops.aeonsquare.net/shop/c/c169h04/",
              "value",
              "CL_ieon",
            ],
            [
              "map",
              "key",
              "https://shop.hikaritv.net/shopping/commodity/plala/2010097664/",
              "value",
              "CL_hikari",
            ],
            [
              "map",
              "key",
              "https://simseller.goo.ne.jp/category/ANDROID/NEWZRS00000OPPORENO5A00.html",
              "value",
              "CL_goo",
            ],
            [
              "map",
              "key",
              "https://www.fiimo.jp/device/reno5-a.html",
              "value",
              "CL_fiimo",
            ],
            [
              "map",
              "key",
              "https://www.edion.com/detail.html?_rt=R3zI8V5XjPjMq7jJ984n9qIT9oWMSk5fxdKC434dgs\u0026p_cd=00067830961\u0026_keyword=OPPO",
              "value",
              "CL_edion",
            ],
            [
              "map",
              "key",
              "https://join.biglobe.ne.jp/mobile/device/oppo_reno5_a.html",
              "value",
              "CL_biglobe",
            ],
            [
              "map",
              "key",
              "http://www.biccamera.com/bc/disp/CSfGoodsPage_001.jsp?GOODS_NO=00000009296987",
              "value",
              "CL_biccamera",
            ],
          ],
        },
        {
          function: "__remm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 2],
          vtp_fullMatch: false,
          vtp_replaceAfterMatch: false,
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            [
              "map",
              "key",
              "/jp/smartphones/series-reno/reno5-a",
              "value",
              "Reno5A",
            ],
            ["map", "key", "/jp/accessories/watch-free", "value", "Watch Free"],
            ["map", "key", "/jp/smartphones/series-a/a54-5g", "value", "A54"],
          ],
        },
        {
          function: "__remm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 120],
          vtp_fullMatch: true,
          vtp_replaceAfterMatch: true,
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            [
              "map",
              "key",
              "https://www.yodobashi.com/product/100000001006083973/",
              "value",
              "yodobashi",
            ],
            [
              "map",
              "key",
              "https://www.amazon.co.jp/OPPO-Japan-ETI21-SB-%E3%83%96%E3%83%A9%E3%83%83%E3%82%AF%E3%80%90%E6%97%A5%E6%9C%AC%E6%AD%A3%E8%A6%8F%E4%BB%A3%E7%90%86%E5%BA%97%E5%93%81%E3%80%91/dp/B08ZY2Y2RV?ref_=ast_sto_dp",
              "value",
              "amazon",
            ],
            [
              "map",
              "key",
              "https://www.biccamera.com/bc/item/00000009214439/",
              "value",
              "biccamera",
            ],
            [
              "map",
              "key",
              "https://shop.hikaritv.net/shopping/commodity/plala/2010093731/",
              "value",
              "hikari",
            ],
            [
              "map",
              "key",
              "https://joshinweb.jp/watch/57532/4580038879121.html",
              "value",
              "joshin",
            ],
            [
              "map",
              "key",
              "https://item.rakuten.co.jp/oppo/oppo_band_style/",
              "value",
              "opporakuten",
            ],
            [
              "map",
              "key",
              "https://paypaymall.yahoo.co.jp/store/oppojapan/item/oppo-band-style/",
              "value",
              "paypaymall",
            ],
            [
              "map",
              "key",
              "https://www.yamada-denkiweb.com/7163366011?q=%E3%82%AA%E3%83%83%E3%83%9D",
              "value",
              "yamada",
            ],
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "event",
        },
        {
          function: "__smm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 165],
          vtp_map: [
            "list",
            ["map", "key", "gtm_timer_30s", "value", "30s"],
            ["map", "key", "gtm_timer_120s", "value", "2min"],
          ],
        },
        {
          function: "__remm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 120],
          vtp_fullMatch: false,
          vtp_replaceAfterMatch: false,
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            [
              "map",
              "key",
              "https://www.amazon.co.jp/dp/B098Q26QHX",
              "value",
              "Enco Buds_amazon",
            ],
            [
              "map",
              "key",
              "https://item.rakuten.co.jp/oppo/oppo_enco_buds/",
              "value",
              "Enco Buds_rakuten",
            ],
            [
              "map",
              "key",
              "https://www.amazon.co.jp/dp/B098Q1T7G9",
              "value",
              "Enco Free2_amazon",
            ],
            [
              "map",
              "key",
              "https://item.rakuten.co.jp/oppo/oppo_enco_free2/",
              "value",
              "Enco Free2_rakuten",
            ],
          ],
        },
        {
          function: "__remm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 120],
          vtp_fullMatch: false,
          vtp_replaceAfterMatch: false,
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            [
              "map",
              "key",
              "https://www.amazon.co.jp/dp/B096K876XV",
              "value",
              "CL_amazon",
            ],
            [
              "map",
              "key",
              "https://www.au.com/mobile/product/smartphone/opg03/",
              "value",
              "CL_au",
            ],
            [
              "map",
              "key",
              "http://www.biccamera.com/bc/disp/CSfGoodsPage_001.jsp?GOODS_NO=00000009390911",
              "value",
              "CL_biccamera",
            ],
            [
              "map",
              "key",
              "https://www.edion.com/detail.html?_rt=ZmC7tAOGEkXRd3NeG62kPqDNiDPCtxbfH9JQSrfE\u0026p_cd=00067830985\u0026_keyword=Find+X3+Pro",
              "value",
              "CL_edion",
            ],
            [
              "map",
              "key",
              "https://simseller.goo.ne.jp/category/ANDROID/NEWZRS0OPPOFINEDX3PRO00.html",
              "value",
              "CL_goo",
            ],
            [
              "map",
              "key",
              "https://shop.hikaritv.net/shopping/commodity/plala/2010097982/",
              "value",
              "CL_hikari",
            ],
            [
              "map",
              "key",
              "https://www.iijmio.jp/device/oppo/findx3pro.html",
              "value",
              "CL_iijmio",
            ],
            [
              "map",
              "key",
              "https://joshinweb.jp/pc/52646/4580038871514.html",
              "value",
              "CL_joshin",
            ],
            [
              "map",
              "key",
              "https://linksmate.jp/terminal/oppo_find_x3_pro",
              "value",
              "CL_linksmate",
            ],
            [
              "map",
              "key",
              "https://online.nojima.co.jp/commodity/1/4580038871514/",
              "value",
              "CL_nojima",
            ],
            [
              "map",
              "key",
              "https://paypaymall.yahoo.co.jp/store/oppojapan/item/oppo-find-x3-pro/",
              "value",
              "CL_paypay",
            ],
            [
              "map",
              "key",
              "https://item.rakuten.co.jp/oppo/oppo_find_x3_pro/",
              "value",
              "CL_rakuten",
            ],
            [
              "map",
              "key",
              "https://www.yamada-denkiweb.com/7163406014",
              "value",
              "CL_yamada",
            ],
            [
              "map",
              "key",
              "https://www.yodobashi.com/product/100000001006236865/",
              "value",
              "CL_yodobashi",
            ],
            [
              "map",
              "key",
              "https://k-tai-iosys.com/campaign/oppo/",
              "value",
              "CP_oppocare",
            ],
            [
              "map",
              "key",
              "https://www.oppojapan.com/iot_campaign2021/",
              "value",
              "CP_present",
            ],
            [
              "map",
              "key",
              "https://www.rakuten.ne.jp/gold/oppo/campaign/rakutencard-findx3-pro/",
              "value",
              "CP_手数料0",
            ],
            [
              "map",
              "key",
              "https://www.oppojapan.com/newpriceplan/",
              "value",
              "CP_新料金プラン",
            ],
            [
              "map",
              "key",
              "https://k-tai-iosys.com/campaign/oppo/",
              "value",
              "CP_買取up",
            ],
            [
              "map",
              "key",
              "https://www.oppo.com/jp/smartphones/series-find-x/find-x3-pro/",
              "value",
              "詳しくはこちら_1",
            ],
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){return function(){window.dataLayer.push({status:void 0,navName:void 0,moduleName:void 0,filterCategory:void 0,bannerName:void 0,position_id:void 0,productName:void 0,productId:void 0,productPrice:void 0,coupon_id:void 0,ProductDiscount:void 0,buttonName:void 0})}})();",
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "status",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "navName",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "moduleName",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "filterCategory",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "bannerName",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "position_id",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "productName",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "productId",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "productPrice",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "coupon_id",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "ProductDiscount",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "buttonName",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 5], 8, 16],
            ';if("Yes"==a)return 33696E3})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a;return a=getPageGroupType?getPageGroupType():",
            ["escape", ["macro", 11], 8, 16],
            "})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){var b=document.cookie.split(";"),a=',
            ["escape", ["macro", 30], 8, 16],
            ',c="_ga_";null!=a\u0026\u00260\u003Ca.indexOf("-")\u0026\u0026(c+=a.split("-")[1]);for(a=0;a\u003Cb.length;a++){var d=b[a].trim();if(0==d.indexOf(c))return d.split("\\x3d")[1].split(".")[2]}return""})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 125], 8, 16],
            ";a=a.eventCategory;var b=",
            ["escape", ["macro", 126], 8, 16],
            ",c=",
            ["escape", ["macro", 127], 8, 16],
            ';"Product Details Page"===a\u0026\u0026b?a+="+"+b:"Events Page"===a\u0026\u0026c\u0026\u0026(a+="+"+c);return a.split("+").filter(function(d){return"none"!==d}).join("+")})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 27], 8, 16],
            ';return a?a.split("_")[1]:',
            ["escape", ["macro", 28], 8, 16],
            "})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 125], 8, 16],
            ";return a.nonInteractional?a.nonInteractional:!1})();",
          ],
        },
        {
          function: "__remm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 114],
          vtp_fullMatch: false,
          vtp_replaceAfterMatch: false,
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            ["map", "key", "360\\.cn/", "value", "360.cn"],
            [
              "map",
              "key",
              "www\\.alice\\.com/|aliceadsl\\.fr",
              "value",
              "Alice",
            ],
            ["map", "key", "www\\.alltheweb\\.com/", "value", "Alltheweb"],
            ["map", "key", "www\\.altavista\\.com/", "value", "Altavista"],
            ["map", "key", "www\\.aol\\.com/", "value", "AOL"],
            [
              "map",
              "key",
              "www\\.ask\\.com/|search\\.aol\\.fr|alicesuche\\.aol\\.de",
              "value",
              "Ask",
            ],
            ["map", "key", "search\\.auone\\.jp/", "value", "Auone"],
            ["map", "key", "isearch\\.avg\\.com", "value", "Avg"],
            ["map", "key", "search\\.babylon\\.com", "value", "Babylon"],
            ["map", "key", "www\\.baidu\\.com/", "value", "Baidu"],
            ["map", "key", "biglobe\\.ne\\.jp", "value", "Biglobe"],
            ["map", "key", "www\\.bing\\.com/", "value", "Bing"],
            ["map", "key", "search\\.centrum\\.cz/", "value", "Centrum.cz"],
            ["map", "key", "search\\.comcast\\.net", "value", "Comcast"],
            ["map", "key", "search\\.conduit\\.com", "value", "Conduit"],
            ["map", "key", "www\\.cnn\\.com/SEARCH/", "value", "CNN"],
            ["map", "key", "www\\.daum\\.net/", "value", "Daum"],
            ["map", "key", "duckduckgo\\.com", "value", "DuckDuckGo"],
            ["map", "key", "www\\.ecosia\\.org", "value", "Ecosia"],
            ["map", "key", "www\\.ekolay\\.net/", "value", "Ekolay"],
            ["map", "key", "www\\.eniro\\.se/", "value", "Eniro"],
            ["map", "key", "www\\.globo\\.com/", "value", "Globo"],
            ["map", "key", "go\\.mail\\.ru/", "value", "go.mail.ru"],
            [
              "map",
              "key",
              "www.\\google\\.com|www.\\google",
              "value",
              "Google",
            ],
            ["map", "key", "goo\\.ne\\.jp", "value", "goo.ne"],
            ["map", "key", "www\\.haosou\\.com/", "value", "haosou.com"],
            [
              "map",
              "key",
              "search\\.incredimail\\.com",
              "value",
              "Incredimail",
            ],
            ["map", "key", "www\\.kvasir\\.no/", "value", "Kvasir"],
            ["map", "key", "www\\.bing\\.com/", "value", "Live"],
            ["map", "key", "www\\.lycos\\.com/", "value", "Lycos"],
            ["map", "key", "search\\.lycos\\.de", "value", "Lycos"],
            ["map", "key", "www\\.mamma\\.com/", "value", "Mamma"],
            [
              "map",
              "key",
              "www\\.msn\\.com/|money\\.msn\\.com|local\\.msn\\.com",
              "value",
              "MSN",
            ],
            ["map", "key", "www\\.mynet\\.com/", "value", "Mynet"],
            ["map", "key", "najdi\\.si", "value", "Najdi"],
            ["map", "key", "www\\.naver\\.com/", "value", "Naver"],
            ["map", "key", "search\\.netscape\\.com/", "value", "Netscape"],
            ["map", "key", "szukaj\\.onet\\.pl", "value", "ONET"],
            ["map", "key", "www\\.ozu\\.es/", "value", "Ozu"],
            ["map", "key", "www\\.qwant\\.com/", "value", "Qwant"],
            ["map", "key", "rakuten\\.co\\.jp", "value", "Rakuten"],
            ["map", "key", "rambler\\.ru/", "value", "Rambler"],
            ["map", "key", "search-results\\.com", "value", "Search-results"],
            [
              "map",
              "key",
              "search\\.smt\\.docomo\\.ne\\.jp",
              "value",
              "search.smt.docomo",
            ],
            ["map", "key", "sesam\\.no/", "value", "Sesam"],
            ["map", "key", "www\\.seznam\\.cz/", "value", "Seznam"],
            ["map", "key", "www\\.so\\.com/s", "value", "So.com"],
            ["map", "key", "www\\.sogou\\.com/", "value", "Sogou"],
            ["map", "key", "www\\.startsiden\\.no/sok", "value", "Startsiden"],
            ["map", "key", "www\\.szukacz\\.pl/", "value", "Szukacz"],
            ["map", "key", "buscador\\.terra\\.com\\.br", "value", "Terra"],
            ["map", "key", "search\\.tut\\.by/", "value", "Tut.by"],
            ["map", "key", "search\\.ukr\\.net/", "value", "Ukr"],
            ["map", "key", "search\\.virgilio\\.it/", "value", "Virgilio"],
            ["map", "key", "www\\.voila\\.fr/", "value", "Voila"],
            ["map", "key", "www\\.wp\\.pl/", "value", "Wirtualna Polska"],
            [
              "map",
              "key",
              "www\\.yahoo\\.com/|yahoo\\.cn|m\\.yahoo\\.com",
              "value",
              "Yahoo",
            ],
            [
              "map",
              "key",
              "www\\.yandex\\.com/|yandex\\.ru",
              "value",
              "Yandex",
            ],
            ["map", "key", "www\\.yam\\.com/", "value", "Yam"],
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 15], 8, 16],
            ",b=",
            ["escape", ["macro", 184], 8, 16],
            ";return a?b:void 0})();",
          ],
        },
        {
          function: "__remm",
          vtp_setDefaultValue: true,
          vtp_input: ["macro", 12],
          vtp_fullMatch: false,
          vtp_replaceAfterMatch: true,
          vtp_defaultValue: ["macro", 12],
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            ["map", "key", "Home Page(.*)", "value", "Homepage$1"],
            ["map", "key", "Product Series Page(.*)", "value", "Series Page$1"],
            [
              "map",
              "key",
              "Store Locator Page(.*)",
              "value",
              "Store Locator$1",
            ],
            ["map", "key", "Event List Page(.*)", "value", "Events Page$1"],
            ["map", "key", "Event Details Page(.*)", "value", "Events Page$1"],
          ],
        },
        {
          function: "__remm",
          vtp_setDefaultValue: true,
          vtp_input: ["macro", 13],
          vtp_fullMatch: false,
          vtp_replaceAfterMatch: true,
          vtp_defaultValue: ["macro", 13],
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            ["map", "key", "Home Page(.*)", "value", "Homepage$1"],
            ["map", "key", "Product Series Page(.*)", "value", "Series Page$1"],
            [
              "map",
              "key",
              "Store Locator Page(.*)",
              "value",
              "Store Locator$1",
            ],
            ["map", "key", "Event List Page(.*)", "value", "Events Page$1"],
            ["map", "key", "Event Details Page(.*)", "value", "Events Page$1"],
          ],
        },
        {
          function: "__remm",
          vtp_setDefaultValue: true,
          vtp_input: ["macro", 35],
          vtp_fullMatch: false,
          vtp_replaceAfterMatch: true,
          vtp_defaultValue: ["macro", 35],
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            ["map", "key", "Home Page(.*)", "value", "Homepage$1"],
            ["map", "key", "Product Series Page(.*)", "value", "Series Page$1"],
            [
              "map",
              "key",
              "Store Locator Page(.*)",
              "value",
              "Store Locator$1",
            ],
            ["map", "key", "Event List Page(.*)", "value", "Events Page$1"],
            ["map", "key", "Event Details Page(.*)", "value", "Events Page$1"],
          ],
        },
        {
          function: "__remm",
          vtp_setDefaultValue: true,
          vtp_input: ["macro", 37],
          vtp_fullMatch: false,
          vtp_replaceAfterMatch: true,
          vtp_defaultValue: ["macro", 37],
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            ["map", "key", "Home Page(.*)", "value", "Homepage$1"],
            ["map", "key", "Product Series Page(.*)", "value", "Series Page$1"],
            [
              "map",
              "key",
              "Store Locator Page(.*)",
              "value",
              "Store Locator$1",
            ],
            ["map", "key", "Event List Page(.*)", "value", "Events Page$1"],
            ["map", "key", "Event Details Page(.*)", "value", "Events Page$1"],
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 6], 8, 16],
            ';return void 0!=a\u0026\u0026a.includes("permit")\u0026\u0026a.includes("1")\u0026\u0026a.includes("2")\u0026\u0026a.includes("3")\u0026\u0026a.includes("4")?"granted":"denied"})();',
          ],
        },
        {
          function: "__u",
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__v",
          vtp_name: "gtm.elementClasses",
          vtp_dataLayerVersion: 1,
        },
        { function: "__v", vtp_name: "gtm.elementId", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          vtp_name: "gtm.elementTarget",
          vtp_dataLayerVersion: 1,
        },
        { function: "__v", vtp_name: "gtm.element", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          vtp_name: "gtm.elementClasses",
          vtp_dataLayerVersion: 1,
        },
        { function: "__v", vtp_name: "gtm.elementId", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          vtp_name: "gtm.elementTarget",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.elementUrl",
          vtp_dataLayerVersion: 1,
        },
        { function: "__aev", vtp_varType: "TEXT" },
        {
          function: "__v",
          vtp_name: "gtm.errorMessage",
          vtp_dataLayerVersion: 1,
        },
        { function: "__v", vtp_name: "gtm.errorUrl", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          vtp_name: "gtm.errorLineNumber",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.newUrlFragment",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.oldUrlFragment",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.newHistoryState",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.oldHistoryState",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.historyChangeSource",
          vtp_dataLayerVersion: 1,
        },
        { function: "__ctv" },
        { function: "__dbg" },
        { function: "__r" },
        { function: "__cid" },
        { function: "__hid" },
        {
          function: "__v",
          vtp_name: "gtm.videoProvider",
          vtp_dataLayerVersion: 1,
        },
        { function: "__v", vtp_name: "gtm.videoUrl", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          vtp_name: "gtm.videoTitle",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.videoDuration",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.videoVisible",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.videoCurrentTime",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.scrollThreshold",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.scrollUnits",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.scrollDirection",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.visibleRatio",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.visibleTime",
          vtp_dataLayerVersion: 1,
        },
      ],
      tags: [
        {
          function: "__opt",
          priority: 9999,
          metadata: ["map"],
          once_per_load: true,
          vtp_useOptimizeDomain: true,
          vtp_optimizeContainerId: ["macro", 9],
          vtp_globalFunctionNameSettings: false,
          tag_id: 1502,
        },
        {
          function: "__cvt_1384335_2816",
          priority: 9999,
          metadata: ["map"],
          once_per_event: true,
          vtp_wait_for_update: "0",
          vtp_sendDataLayer: false,
          vtp_regions: "all",
          vtp_command: "default",
          vtp_functionality_storage: "denied",
          vtp_url_passthrough: true,
          vtp_ad_storage: "denied",
          vtp_ads_data_redaction: false,
          vtp_ad_user_data: "denied",
          vtp_security_storage: "denied",
          vtp_personalization_storage: "denied",
          vtp_analytics_storage: "denied",
          vtp_ad_personalization: "denied",
          tag_id: 2818,
        },
        {
          function: "__html",
          priority: 3,
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cstyle\u003E\n .cp-cookie-tip-euro {\n  display: none !important;\n  }\n #consent-banner {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  z-index: 999;\n  background-color: #fff;\n }\n     \n  #teconsent a {\n   display: none !important;\n  }\n  //#truste-consent-track {\n  // opacity: 1 !important;\n  // display: block !important;\n  //}\n  \n  #truste-consent-track {\n    border-top: 2px solid #EDEDED;\n  }\n  #truste-consent-track .trustarc-banner-right {\n    display: none !important;\n  }\n    #truste-consent-track .trustarc-banner-footer {\n    display: none !important;\n  }\n  \n  #truste-consent-track .trustarc-logo-container {\n    display: none !important;\n  }\n  #truste-consent-track .trustarc-banner-details #truste-header-text {\n    font-family: \'OPPOSans-Ver2-Medium\';\n    font-variation-settings: \'wght\' 750;\n    font-size: 26px !important;\n  }\n  \n  #truste-consent-track .trustarc-banner-details #truste-consent-text {\n    font-family: \'OPPOSans-Ver2-Regular\';\n    font-variation-settings: \'wght\' 550;\n    font-size: 16px !important;\n  }\n  @media screen and (max-width: 768px) {\n    #truste-consent-track .trustarc-banner-details #truste-consent-text {\n      font-size: 14px !important;\n      margin-top: 0 !important;\n    }\n  }\n  #truste-consent-track #truste-consent-buttons #truste-show-consent {\n    font-family: \'OPPOSans-Ver2-Regular\';\n    font-variation-settings: \'wght\' 550;\n    font-size: 14px !important;\n  }\n  #truste-consent-track #truste-consent-buttons #truste-consent-button {\n    font-family: \'OPPOSans-Ver2-Regular\';\n    font-variation-settings: \'wght\' 550;\n    font-size: 14px !important;\n    background-color: #000 !important;\n  }\n  #truste-consent-track #truste-consent-buttons #truste-consent-required {\n    font-family: \'OPPOSans-Ver2-Regular\';\n    font-variation-settings: \'wght\' 550;\n    font-size: 14px !important;\n    background-color: transparent;\n    border: none !important;\n    border-bottom: 1px solid black !important;\n    border-radius: 0 !important;\n    margin: 12px auto 0 !important;\n    height: unset !important;\n    width: unset !important;\n  }\n  \n  #truste-consent-track #truste-consent-text a {\n  border-bottom: 1px solid black;\n  }\n  \n  \u003C/style\u003E\n\n\u003Cdiv id="consent-banner"\u003E\u003C/div\u003E\n\u003Cdiv id="teconsent"\u003E\n \n\u003C/div\u003E\n\n\u003Cscript type="text/gtmscript"\u003E(function(){var a=document.querySelector("html").lang.split("-")[0];a="https://consent.trustarc.com/v2/notice/g8vtl5?language\\x3d"+a;var c=document.getElementById("teconsent"),b=document.createElement("script");b.type="text/javascript";b.async="async";b.src=a;c.appendChild(b)})();$(document).on("click","#footer .bottom ul.links a[href$\\x3dpopup-cookie]",function(a){a.preventDefault();truste\u0026\u0026truste.eu\u0026\u0026truste.eu.clickListener(2)});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2185,
        },
        { function: "__paused", vtp_originalTagType: "html", tag_id: 26 },
        { function: "__paused", vtp_originalTagType: "html", tag_id: 119 },
        {
          function: "__twitter_website_tag",
          once_per_event: true,
          vtp_event_type: "PageView",
          vtp_twitter_pixel_id: "o17z0",
          tag_id: 121,
        },
        {
          function: "__twitter_website_tag",
          metadata: ["map"],
          once_per_event: true,
          vtp_event_type: "PageView",
          vtp_twitter_pixel_id: "o1mdf",
          tag_id: 201,
        },
        { function: "__paused", vtp_originalTagType: "html", tag_id: 246 },
        { function: "__paused", vtp_originalTagType: "html", tag_id: 921 },
        { function: "__paused", vtp_originalTagType: "html", tag_id: 924 },
        { function: "__paused", vtp_originalTagType: "html", tag_id: 925 },
        { function: "__paused", vtp_originalTagType: "html", tag_id: 927 },
        {
          function: "__flc",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableConversionLinker: true,
          vtp_enhancedUserData: false,
          vtp_groupTag: "invmedia",
          vtp_useImageTag: false,
          vtp_activityTag: "landi00",
          vtp_ordinalType: "STANDARD",
          vtp_conversionCookiePrefix: "_gcl",
          vtp_advertiserId: "9562641",
          vtp_ordinalStandard: ["macro", 3],
          vtp_url: ["macro", 4],
          vtp_enableGoogleAttributionOptions: false,
          vtp_showConversionLinkingControls: true,
          vtp_enableMatchIdVariable: true,
          vtp_enableSmartDestinationId: false,
          tag_id: 981,
        },
        { function: "__paused", vtp_originalTagType: "googtag", tag_id: 1266 },
        { function: "__paused", vtp_originalTagType: "googtag", tag_id: 1267 },
        {
          function: "__gclidw",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableCrossDomain: true,
          vtp_enableUrlPassthrough: false,
          vtp_acceptIncoming: true,
          vtp_linkerDomains: "www.oppo.com,oppo.ru",
          vtp_enableCookieOverrides: false,
          vtp_formDecoration: false,
          vtp_urlPosition: "query",
          tag_id: 1350,
        },
        {
          function: "__hjtc",
          metadata: ["map"],
          once_per_event: true,
          vtp_hotjar_site_id: "2052333",
          tag_id: 1596,
        },
        { function: "__paused", vtp_originalTagType: "html", tag_id: 1617 },
        {
          function: "__gclidw",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableCrossDomain: true,
          vtp_enableUrlPassthrough: false,
          vtp_acceptIncoming: true,
          vtp_linkerDomains: "www.oppo.com,oppo.ru",
          vtp_enableCookieOverrides: false,
          vtp_formDecoration: false,
          vtp_urlPosition: "query",
          tag_id: 1747,
        },
        { function: "__paused", vtp_originalTagType: "html", tag_id: 1754 },
        {
          function: "__cvt_1384335_2377",
          metadata: ["map"],
          once_per_event: true,
          vtp_id: "4154",
          tag_id: 2379,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "10869065585",
          vtp_conversionLabel: "PnTQCLucqKsDEPGO474o",
          vtp_rdp: false,
          vtp_url: ["macro", 4],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          vtp_enableSmartDestinationId: false,
          tag_id: 2733,
        },
        {
          function: "__googtag",
          metadata: ["map"],
          teardown_tags: ["list", ["tag", 203, 0]],
          once_per_event: true,
          vtp_tagId: ["macro", 14],
          vtp_userProperties: [
            "list",
            ["map", "name", "client_id", "value", ["macro", 18]],
            ["map", "name", "uid", "value", ["macro", 20]],
          ],
          vtp_configSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "country_code",
              "parameterValue",
              ["macro", 21],
            ],
            ["map", "parameter", "user_id", "parameterValue", ["macro", 20]],
            ["map", "parameter", "user_agent", "parameterValue", ["macro", 22]],
            [
              "map",
              "parameter",
              "iphone_device_info",
              "parameterValue",
              ["macro", 24],
            ],
            ["map", "parameter", "sessionID", "parameterValue", ["macro", 26]],
            [
              "map",
              "parameter",
              "last_source_medium",
              "parameterValue",
              ["macro", 29],
            ],
            ["map", "parameter", "send_page_view", "parameterValue", "false"],
            ["map", "parameter", "url_passthrough", "parameterValue", "true"],
          ],
          tag_id: 2774,
        },
        { function: "__paused", vtp_originalTagType: "googtag", tag_id: 2787 },
        {
          function: "__cvt_1384335_2816",
          metadata: ["map"],
          once_per_event: true,
          vtp_ad_storage: ["macro", 31],
          vtp_ads_data_redaction: false,
          vtp_sendDataLayer: false,
          vtp_ad_user_data: ["macro", 31],
          vtp_security_storage: ["macro", 32],
          vtp_command: "update",
          vtp_functionality_storage: ["macro", 32],
          vtp_personalization_storage: ["macro", 32],
          vtp_url_passthrough: true,
          vtp_analytics_storage: ["macro", 33],
          vtp_ad_personalization: ["macro", 31],
          tag_id: 2820,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "page_content",
              "parameterValue",
              ["macro", 39],
            ],
            [
              "map",
              "parameter",
              "current_screen",
              "parameterValue",
              ["macro", 40],
            ],
            [
              "map",
              "parameter",
              ["macro", 45],
              "parameterValue",
              ["macro", 46],
            ],
            [
              "map",
              "parameter",
              ["macro", 47],
              "parameterValue",
              ["macro", 48],
            ],
            [
              "map",
              "parameter",
              ["macro", 49],
              "parameterValue",
              ["macro", 50],
            ],
            [
              "map",
              "parameter",
              ["macro", 51],
              "parameterValue",
              ["macro", 52],
            ],
            [
              "map",
              "parameter",
              ["macro", 53],
              "parameterValue",
              ["macro", 54],
            ],
            [
              "map",
              "parameter",
              ["macro", 55],
              "parameterValue",
              ["macro", 56],
            ],
            [
              "map",
              "parameter",
              ["macro", 57],
              "parameterValue",
              ["macro", 58],
            ],
            [
              "map",
              "parameter",
              ["macro", 59],
              "parameterValue",
              ["macro", 60],
            ],
            [
              "map",
              "parameter",
              ["macro", 61],
              "parameterValue",
              ["macro", 62],
            ],
            [
              "map",
              "parameter",
              "hit_timestamp",
              "parameterValue",
              ["macro", 64],
            ],
            ["map", "parameter", "local_date", "parameterValue", ["macro", 65]],
            ["map", "parameter", "local_day", "parameterValue", ["macro", 66]],
            ["map", "parameter", "local_hour", "parameterValue", ["macro", 67]],
          ],
          vtp_eventName: ["macro", 68],
          vtp_measurementIdOverride: ["macro", 14],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 2873,
        },
        { function: "__paused", vtp_originalTagType: "gaawe", tag_id: 2879 },
        {
          function: "__sp",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableDynamicRemarketing: false,
          vtp_conversionId: "10869065585",
          vtp_customParamsFormat: "NONE",
          vtp_rdp: false,
          vtp_enableOgtRmktParams: true,
          vtp_enableUserId: true,
          vtp_url: ["macro", 4],
          vtp_enableRdpCheckbox: true,
          vtp_enableSmartDestinationId: false,
          tag_id: 2883,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "10869065585",
          vtp_conversionLabel: "eB6DCNCB2csDEPGO474o",
          vtp_rdp: false,
          vtp_url: ["macro", 4],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          vtp_enableSmartDestinationId: false,
          tag_id: 2927,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "current_screen",
              "parameterValue",
              "store locator",
            ],
            [
              "map",
              "parameter",
              "page_content",
              "parameterValue",
              ["macro", 0],
            ],
            ["map", "parameter", "module", "parameterValue", ["macro", 70]],
            [
              "map",
              "parameter",
              "button_name",
              "parameterValue",
              ["macro", 71],
            ],
            [
              "map",
              "parameter",
              "hit_timestamp",
              "parameterValue",
              ["macro", 64],
            ],
            ["map", "parameter", "local_date", "parameterValue", ["macro", 65]],
            ["map", "parameter", "local_day", "parameterValue", ["macro", 66]],
            ["map", "parameter", "local_hour", "parameterValue", ["macro", 67]],
          ],
          vtp_eventName: "find_offline_store",
          vtp_measurementIdOverride: ["macro", 14],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 2930,
        },
        { function: "__paused", vtp_originalTagType: "gaawe", tag_id: 2932 },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "current_screen",
              "parameterValue",
              "store locator",
            ],
            [
              "map",
              "parameter",
              "page_content",
              "parameterValue",
              ["macro", 0],
            ],
            ["map", "parameter", "module", "parameterValue", ["macro", 70]],
            [
              "map",
              "parameter",
              "button_name",
              "parameterValue",
              ["macro", 71],
            ],
            [
              "map",
              "parameter",
              "hit_timestamp",
              "parameterValue",
              ["macro", 64],
            ],
            ["map", "parameter", "local_date", "parameterValue", ["macro", 65]],
            ["map", "parameter", "local_day", "parameterValue", ["macro", 66]],
            ["map", "parameter", "local_hour", "parameterValue", ["macro", 67]],
          ],
          vtp_eventName: "find_offline_store",
          vtp_measurementIdOverride: ["macro", 14],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 2933,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "current_screen",
              "parameterValue",
              ["macro", 40],
            ],
            [
              "map",
              "parameter",
              "page_content",
              "parameterValue",
              ["macro", 39],
            ],
            [
              "map",
              "parameter",
              "hit_timestamp",
              "parameterValue",
              ["macro", 64],
            ],
            ["map", "parameter", "local_date", "parameterValue", ["macro", 65]],
            ["map", "parameter", "local_day", "parameterValue", ["macro", 66]],
            ["map", "parameter", "local_hour", "parameterValue", ["macro", 67]],
            [
              "map",
              "parameter",
              ["macro", 73],
              "parameterValue",
              ["macro", 74],
            ],
            [
              "map",
              "parameter",
              ["macro", 75],
              "parameterValue",
              ["macro", 76],
            ],
            [
              "map",
              "parameter",
              ["macro", 77],
              "parameterValue",
              ["macro", 78],
            ],
            [
              "map",
              "parameter",
              ["macro", 79],
              "parameterValue",
              ["macro", 80],
            ],
            [
              "map",
              "parameter",
              ["macro", 81],
              "parameterValue",
              ["macro", 82],
            ],
            [
              "map",
              "parameter",
              ["macro", 83],
              "parameterValue",
              ["macro", 84],
            ],
            [
              "map",
              "parameter",
              ["macro", 85],
              "parameterValue",
              ["macro", 86],
            ],
            [
              "map",
              "parameter",
              ["macro", 87],
              "parameterValue",
              ["macro", 88],
            ],
            [
              "map",
              "parameter",
              ["macro", 89],
              "parameterValue",
              ["macro", 90],
            ],
            [
              "map",
              "parameter",
              ["macro", 91],
              "parameterValue",
              ["macro", 92],
            ],
            [
              "map",
              "parameter",
              ["macro", 93],
              "parameterValue",
              ["macro", 94],
            ],
            [
              "map",
              "parameter",
              ["macro", 95],
              "parameterValue",
              ["macro", 96],
            ],
            [
              "map",
              "parameter",
              ["macro", 97],
              "parameterValue",
              ["macro", 98],
            ],
            [
              "map",
              "parameter",
              ["macro", 99],
              "parameterValue",
              ["macro", 100],
            ],
            [
              "map",
              "parameter",
              ["macro", 101],
              "parameterValue",
              ["macro", 102],
            ],
            [
              "map",
              "parameter",
              ["macro", 103],
              "parameterValue",
              ["macro", 104],
            ],
            [
              "map",
              "parameter",
              ["macro", 105],
              "parameterValue",
              ["macro", 106],
            ],
            [
              "map",
              "parameter",
              ["macro", 107],
              "parameterValue",
              ["macro", 108],
            ],
            [
              "map",
              "parameter",
              ["macro", 109],
              "parameterValue",
              ["macro", 110],
            ],
            [
              "map",
              "parameter",
              ["macro", 111],
              "parameterValue",
              ["macro", 112],
            ],
          ],
          vtp_eventName: ["macro", 113],
          vtp_measurementIdOverride: ["macro", 14],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 2948,
        },
        { function: "__paused", vtp_originalTagType: "gaawe", tag_id: 2970 },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "current_screen",
              "parameterValue",
              ["macro", 40],
            ],
            [
              "map",
              "parameter",
              "page_content",
              "parameterValue",
              ["macro", 39],
            ],
            [
              "map",
              "parameter",
              "hit_timestamp",
              "parameterValue",
              ["macro", 64],
            ],
            ["map", "parameter", "local_date", "parameterValue", ["macro", 65]],
            ["map", "parameter", "local_day", "parameterValue", ["macro", 66]],
            ["map", "parameter", "local_hour", "parameterValue", ["macro", 67]],
          ],
          vtp_eventName: "login",
          vtp_measurementIdOverride: ["macro", 14],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 2998,
        },
        { function: "__paused", vtp_originalTagType: "gaawe", tag_id: 2999 },
        { function: "__paused", vtp_originalTagType: "googtag", tag_id: 3128 },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "856391576",
          vtp_conversionLabel: "WE3FCLiCkZoYEJj_rZgD",
          vtp_rdp: false,
          vtp_url: ["macro", 4],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          vtp_enableSmartDestinationId: false,
          tag_id: 3129,
        },
        { function: "__paused", vtp_originalTagType: "gaawe", tag_id: 3133 },
        { function: "__paused", vtp_originalTagType: "googtag", tag_id: 3195 },
        { function: "__paused", vtp_originalTagType: "gaawe", tag_id: 3196 },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "16468322969",
          vtp_conversionLabel: "aLwJCKrH4ZYZEJnV2qw9",
          vtp_rdp: false,
          vtp_url: ["macro", 4],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          vtp_enableSmartDestinationId: false,
          tag_id: 3254,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "16468322969",
          vtp_conversionLabel: "aLwJCKrH4ZYZEJnV2qw9",
          vtp_rdp: false,
          vtp_url: ["macro", 4],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          vtp_enableSmartDestinationId: false,
          tag_id: 3256,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "578714447",
          vtp_conversionLabel: "pEvjCJzKjLcZEM_2-ZMC",
          vtp_rdp: false,
          vtp_url: ["macro", 4],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          vtp_enableSmartDestinationId: false,
          tag_id: 3266,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "11039631640",
          vtp_conversionLabel: "0ZQnCPHH68YZEJjSjZAp",
          vtp_rdp: false,
          vtp_url: ["macro", 4],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          vtp_enableSmartDestinationId: false,
          tag_id: 3297,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "16652180018",
          vtp_conversionLabel: "lOG5COangNgZELK0sIQ-",
          vtp_rdp: false,
          vtp_url: ["macro", 4],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          vtp_enableSmartDestinationId: false,
          tag_id: 3307,
        },
        {
          function: "__gclidw",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableCrossDomain: false,
          vtp_enableUrlPassthrough: false,
          vtp_enableCookieOverrides: false,
          tag_id: 3308,
        },
        {
          function: "__cvt_1384335_1609",
          metadata: ["map"],
          once_per_event: true,
          vtp_disablePushState: false,
          vtp_pixelId: "619483400367371",
          vtp_standardEventName: "PageView",
          vtp_disableAutoConfig: false,
          vtp_enhancedEcommerce: false,
          vtp_dpoLDU: false,
          vtp_eventName: "standard",
          vtp_objectPropertiesFromVariable: false,
          vtp_consent: true,
          vtp_advancedMatching: false,
          tag_id: 3316,
        },
        {
          function: "__cvt_1384335_1609",
          metadata: ["map"],
          once_per_event: true,
          vtp_disablePushState: false,
          vtp_pixelId: "619483400367371",
          vtp_disableAutoConfig: false,
          vtp_enhancedEcommerce: false,
          vtp_dpoLDU: false,
          vtp_eventName: "custom",
          vtp_objectPropertiesFromVariable: false,
          vtp_customEventName: "Dónde Comprar Click",
          vtp_consent: true,
          vtp_advancedMatching: false,
          tag_id: 3318,
        },
        {
          function: "__zone",
          once_per_event: true,
          vtp_childContainers: [
            "list",
            ["map", "publicId", "GTM-PMJ4R9X", "nickname", "www.oppo.com(ads)"],
          ],
          vtp_boundaries: [
            "list",
            [
              "zb",
              "_re",
              ["macro", 0],
              "/(au|befr|benl|chde|chfr|de|es|fr|ie|it|lude|lufr|nl|nz|pt|uk|cz|hu|kz|kzkk|md|pl|ro|ru|sk|tr|ua|uz|uzru)/",
              false,
              true,
            ],
          ],
          vtp_enableTypeRestrictions: true,
          vtp_whitelistedTypes: [
            "list",
            ["map", "typeId", "awct"],
            ["map", "typeId", "gcs"],
            ["map", "typeId", "gfpa"],
            ["map", "typeId", "awcc"],
            ["map", "typeId", "cloud_retail"],
            ["map", "typeId", "ac360"],
            ["map", "typeId", "flc"],
            ["map", "typeId", "sp"],
            ["map", "typeId", "fls"],
            ["map", "typeId", "ts"],
            ["map", "typeId", "gfct"],
            ["map", "typeId", "automl"],
            ["map", "typeId", "adm"],
            ["map", "typeId", "gclidw"],
            ["map", "typeId", "hl"],
            ["map", "typeId", "ehl"],
            ["map", "typeId", "sdl"],
            ["map", "typeId", "fsl"],
            ["map", "typeId", "cl"],
            ["map", "typeId", "tg"],
            ["map", "typeId", "tl"],
            ["map", "typeId", "ecl"],
            ["map", "typeId", "jel"],
            ["map", "typeId", "ytl"],
            ["map", "typeId", "lcl"],
            ["map", "typeId", "evl"],
            ["map", "typeId", "vis"],
            ["map", "typeId", "ctv"],
            ["map", "typeId", "remm"],
            ["map", "typeId", "smm"],
            ["map", "typeId", "c"],
            ["map", "typeId", "d"],
            ["map", "typeId", "e"],
            ["map", "typeId", "f"],
            ["map", "typeId", "j"],
            ["map", "typeId", "k"],
            ["map", "typeId", "r"],
            ["map", "typeId", "u"],
            ["map", "typeId", "v"],
            ["map", "typeId", "uv"],
            ["map", "typeId", "dbg"],
            ["map", "typeId", "ev"],
            ["map", "typeId", "cid"],
            ["map", "typeId", "aev"],
            ["map", "typeId", "jsm"],
            ["map", "typeId", "m6d"],
            ["map", "typeId", "scp"],
            ["map", "typeId", "veip"],
            ["map", "typeId", "mpr"],
            ["map", "typeId", "qpx"],
            ["map", "typeId", "placedPixel"],
            ["map", "typeId", "vdc"],
            ["map", "typeId", "sfr"],
            ["map", "typeId", "img"],
            ["map", "typeId", "tdlc"],
            ["map", "typeId", "tpdpx"],
            ["map", "typeId", "tdsc"],
            ["map", "typeId", "crto"],
            ["map", "typeId", "k50Init"],
            ["map", "typeId", "bzi"],
            ["map", "typeId", "uspt"],
            ["map", "typeId", "okt"],
            ["map", "typeId", "yieldify"],
            ["map", "typeId", "dstag"],
            ["map", "typeId", "cts"],
            ["map", "typeId", "mpm"],
            ["map", "typeId", "baut"],
            ["map", "typeId", "bsa"],
            ["map", "typeId", "pijs"],
            ["map", "typeId", "bb"],
            ["map", "typeId", "omc"],
            ["map", "typeId", "nudge"],
            ["map", "typeId", "abtGeneric"],
            ["map", "typeId", "ta"],
            ["map", "typeId", "tc"],
            ["map", "typeId", "sfc"],
            ["map", "typeId", "svw"],
            ["map", "typeId", "xpsh"],
            ["map", "typeId", "sfl"],
            ["map", "typeId", "infinity"],
            ["map", "typeId", "asp"],
            ["map", "typeId", "ll"],
            ["map", "typeId", "messagemate"],
            ["map", "typeId", "qca"],
            ["map", "typeId", "uslt"],
            ["map", "typeId", "twitter_website_tag"],
            ["map", "typeId", "ndcr"],
            ["map", "typeId", "mf"],
            ["map", "typeId", "qcm"],
            ["map", "typeId", "html"],
            ["map", "typeId", "ela"],
            ["map", "typeId", "vei"],
            ["map", "typeId", "ms"],
            ["map", "typeId", "scjs"],
            ["map", "typeId", "ljs"],
            ["map", "typeId", "hjtc"],
            ["map", "typeId", "pntr"],
            ["map", "typeId", "fxm"],
            ["map", "typeId", "awc"],
            ["map", "typeId", "cegg"],
            ["map", "typeId", "pa"],
            ["map", "typeId", "shareaholic"],
            ["map", "typeId", "tdc"],
            ["map", "typeId", "pc"],
            ["map", "typeId", "awj"],
            ["map", "typeId", "csm"],
            ["map", "typeId", "sandboxedScripts"],
            ["map", "typeId", "awud"],
            ["map", "typeId", "awec"],
            ["map", "typeId", "gas"],
          ],
          vtp_enableConfiguration: false,
          tag_id: 3319,
        },
        {
          function: "__zone",
          once_per_event: true,
          vtp_childContainers: [
            "list",
            [
              "map",
              "publicId",
              "GTM-P352NN8",
              "nickname",
              "www.oppo.com(ads_in)",
            ],
          ],
          vtp_boundaries: [
            "list",
            ["zb", "_cn", ["macro", 0], "/in/", false, false],
          ],
          vtp_enableTypeRestrictions: true,
          vtp_whitelistedTypes: [
            "list",
            ["map", "typeId", "flc"],
            ["map", "typeId", "sp"],
            ["map", "typeId", "fls"],
            ["map", "typeId", "ts"],
            ["map", "typeId", "adm"],
            ["map", "typeId", "gclidw"],
            ["map", "typeId", "awct"],
            ["map", "typeId", "gcs"],
            ["map", "typeId", "gfpa"],
            ["map", "typeId", "awcc"],
            ["map", "typeId", "cloud_retail"],
            ["map", "typeId", "ac360"],
            ["map", "typeId", "awud"],
            ["map", "typeId", "gfct"],
            ["map", "typeId", "automl"],
            ["map", "typeId", "sdl"],
            ["map", "typeId", "cl"],
            ["map", "typeId", "tg"],
            ["map", "typeId", "tl"],
            ["map", "typeId", "jel"],
            ["map", "typeId", "ytl"],
            ["map", "typeId", "hl"],
            ["map", "typeId", "fsl"],
            ["map", "typeId", "lcl"],
            ["map", "typeId", "evl"],
            ["map", "typeId", "vis"],
            ["map", "typeId", "ctv"],
            ["map", "typeId", "c"],
            ["map", "typeId", "d"],
            ["map", "typeId", "e"],
            ["map", "typeId", "f"],
            ["map", "typeId", "j"],
            ["map", "typeId", "k"],
            ["map", "typeId", "r"],
            ["map", "typeId", "u"],
            ["map", "typeId", "v"],
            ["map", "typeId", "uv"],
            ["map", "typeId", "ev"],
            ["map", "typeId", "cid"],
            ["map", "typeId", "aev"],
            ["map", "typeId", "gas"],
            ["map", "typeId", "remm"],
            ["map", "typeId", "smm"],
            ["map", "typeId", "awec"],
            ["map", "typeId", "dbg"],
            ["map", "typeId", "jsm"],
            ["map", "typeId", "okt"],
            ["map", "typeId", "yieldify"],
            ["map", "typeId", "cts"],
            ["map", "typeId", "bsa"],
            ["map", "typeId", "bb"],
            ["map", "typeId", "omc"],
            ["map", "typeId", "ta"],
            ["map", "typeId", "tc"],
            ["map", "typeId", "sfc"],
            ["map", "typeId", "svw"],
            ["map", "typeId", "sfl"],
            ["map", "typeId", "infinity"],
            ["map", "typeId", "asp"],
            ["map", "typeId", "qca"],
            ["map", "typeId", "uslt"],
            ["map", "typeId", "ndcr"],
            ["map", "typeId", "qcm"],
            ["map", "typeId", "ela"],
            ["map", "typeId", "ljs"],
            ["map", "typeId", "hjtc"],
            ["map", "typeId", "pntr"],
            ["map", "typeId", "awc"],
            ["map", "typeId", "cegg"],
            ["map", "typeId", "awj"],
            ["map", "typeId", "crto"],
            ["map", "typeId", "k50Init"],
            ["map", "typeId", "bzi"],
            ["map", "typeId", "uspt"],
            ["map", "typeId", "dstag"],
            ["map", "typeId", "mpm"],
            ["map", "typeId", "baut"],
            ["map", "typeId", "pijs"],
            ["map", "typeId", "nudge"],
            ["map", "typeId", "abtGeneric"],
            ["map", "typeId", "xpsh"],
            ["map", "typeId", "ll"],
            ["map", "typeId", "messagemate"],
            ["map", "typeId", "twitter_website_tag"],
            ["map", "typeId", "mf"],
            ["map", "typeId", "html"],
            ["map", "typeId", "vei"],
            ["map", "typeId", "ms"],
            ["map", "typeId", "scjs"],
            ["map", "typeId", "fxm"],
            ["map", "typeId", "pa"],
            ["map", "typeId", "shareaholic"],
            ["map", "typeId", "tdc"],
            ["map", "typeId", "pc"],
            ["map", "typeId", "csm"],
            ["map", "typeId", "m6d"],
            ["map", "typeId", "scp"],
            ["map", "typeId", "veip"],
            ["map", "typeId", "qpx"],
            ["map", "typeId", "sfr"],
            ["map", "typeId", "tdsc"],
            ["map", "typeId", "mpr"],
            ["map", "typeId", "placedPixel"],
            ["map", "typeId", "vdc"],
            ["map", "typeId", "img"],
            ["map", "typeId", "tdlc"],
            ["map", "typeId", "tpdpx"],
            ["map", "typeId", "sandboxedScripts"],
          ],
          vtp_enableConfiguration: false,
          tag_id: 3320,
        },
        {
          function: "__zone",
          once_per_event: true,
          vtp_childContainers: [
            "list",
            [
              "map",
              "publicId",
              "GTM-WCD9M8N",
              "nickname",
              "www.oppo.com(ads_APAC)",
            ],
          ],
          vtp_boundaries: [
            "list",
            [
              "zb",
              "_re",
              ["macro", 0],
              "/(kh|hk|id|my|ph|sg|tw|th|vn)/",
              false,
              true,
            ],
          ],
          vtp_enableTypeRestrictions: true,
          vtp_whitelistedTypes: [
            "list",
            ["map", "typeId", "flc"],
            ["map", "typeId", "sp"],
            ["map", "typeId", "fls"],
            ["map", "typeId", "ts"],
            ["map", "typeId", "adm"],
            ["map", "typeId", "gclidw"],
            ["map", "typeId", "awct"],
            ["map", "typeId", "gcs"],
            ["map", "typeId", "gfpa"],
            ["map", "typeId", "awcc"],
            ["map", "typeId", "cloud_retail"],
            ["map", "typeId", "ac360"],
            ["map", "typeId", "awud"],
            ["map", "typeId", "gfct"],
            ["map", "typeId", "automl"],
            ["map", "typeId", "sdl"],
            ["map", "typeId", "cl"],
            ["map", "typeId", "tg"],
            ["map", "typeId", "tl"],
            ["map", "typeId", "jel"],
            ["map", "typeId", "ytl"],
            ["map", "typeId", "hl"],
            ["map", "typeId", "fsl"],
            ["map", "typeId", "lcl"],
            ["map", "typeId", "evl"],
            ["map", "typeId", "vis"],
            ["map", "typeId", "ctv"],
            ["map", "typeId", "c"],
            ["map", "typeId", "d"],
            ["map", "typeId", "e"],
            ["map", "typeId", "f"],
            ["map", "typeId", "j"],
            ["map", "typeId", "k"],
            ["map", "typeId", "r"],
            ["map", "typeId", "u"],
            ["map", "typeId", "v"],
            ["map", "typeId", "uv"],
            ["map", "typeId", "ev"],
            ["map", "typeId", "cid"],
            ["map", "typeId", "aev"],
            ["map", "typeId", "gas"],
            ["map", "typeId", "remm"],
            ["map", "typeId", "smm"],
            ["map", "typeId", "awec"],
            ["map", "typeId", "dbg"],
            ["map", "typeId", "jsm"],
            ["map", "typeId", "okt"],
            ["map", "typeId", "yieldify"],
            ["map", "typeId", "cts"],
            ["map", "typeId", "bsa"],
            ["map", "typeId", "bb"],
            ["map", "typeId", "omc"],
            ["map", "typeId", "ta"],
            ["map", "typeId", "tc"],
            ["map", "typeId", "sfc"],
            ["map", "typeId", "svw"],
            ["map", "typeId", "sfl"],
            ["map", "typeId", "infinity"],
            ["map", "typeId", "asp"],
            ["map", "typeId", "qca"],
            ["map", "typeId", "uslt"],
            ["map", "typeId", "ndcr"],
            ["map", "typeId", "qcm"],
            ["map", "typeId", "ela"],
            ["map", "typeId", "ljs"],
            ["map", "typeId", "hjtc"],
            ["map", "typeId", "pntr"],
            ["map", "typeId", "awc"],
            ["map", "typeId", "cegg"],
            ["map", "typeId", "awj"],
            ["map", "typeId", "crto"],
            ["map", "typeId", "k50Init"],
            ["map", "typeId", "bzi"],
            ["map", "typeId", "uspt"],
            ["map", "typeId", "dstag"],
            ["map", "typeId", "mpm"],
            ["map", "typeId", "baut"],
            ["map", "typeId", "pijs"],
            ["map", "typeId", "nudge"],
            ["map", "typeId", "abtGeneric"],
            ["map", "typeId", "xpsh"],
            ["map", "typeId", "ll"],
            ["map", "typeId", "messagemate"],
            ["map", "typeId", "twitter_website_tag"],
            ["map", "typeId", "mf"],
            ["map", "typeId", "html"],
            ["map", "typeId", "vei"],
            ["map", "typeId", "ms"],
            ["map", "typeId", "scjs"],
            ["map", "typeId", "fxm"],
            ["map", "typeId", "pa"],
            ["map", "typeId", "shareaholic"],
            ["map", "typeId", "tdc"],
            ["map", "typeId", "pc"],
            ["map", "typeId", "csm"],
            ["map", "typeId", "m6d"],
            ["map", "typeId", "scp"],
            ["map", "typeId", "veip"],
            ["map", "typeId", "qpx"],
            ["map", "typeId", "sfr"],
            ["map", "typeId", "tdsc"],
            ["map", "typeId", "mpr"],
            ["map", "typeId", "placedPixel"],
            ["map", "typeId", "vdc"],
            ["map", "typeId", "img"],
            ["map", "typeId", "tdlc"],
            ["map", "typeId", "tpdpx"],
            ["map", "typeId", "sandboxedScripts"],
          ],
          vtp_enableConfiguration: false,
          tag_id: 3321,
        },
        {
          function: "__zone",
          once_per_event: true,
          vtp_childContainers: [
            "list",
            [
              "map",
              "publicId",
              "GTM-MHTH52P",
              "nickname",
              "www.oppo.com(ads_JP)",
            ],
          ],
          vtp_boundaries: [
            "list",
            [
              "zb",
              "_re",
              ["macro", 2],
              "(oppo\\.com/jp/)|(www\\.oppojapan\\.com)",
              false,
              true,
            ],
          ],
          vtp_enableTypeRestrictions: true,
          vtp_whitelistedTypes: [
            "list",
            ["map", "typeId", "flc"],
            ["map", "typeId", "sp"],
            ["map", "typeId", "fls"],
            ["map", "typeId", "ts"],
            ["map", "typeId", "adm"],
            ["map", "typeId", "gclidw"],
            ["map", "typeId", "awct"],
            ["map", "typeId", "gcs"],
            ["map", "typeId", "gfpa"],
            ["map", "typeId", "awcc"],
            ["map", "typeId", "cloud_retail"],
            ["map", "typeId", "ac360"],
            ["map", "typeId", "awud"],
            ["map", "typeId", "gfct"],
            ["map", "typeId", "automl"],
            ["map", "typeId", "ehl"],
            ["map", "typeId", "sdl"],
            ["map", "typeId", "cl"],
            ["map", "typeId", "tg"],
            ["map", "typeId", "tl"],
            ["map", "typeId", "jel"],
            ["map", "typeId", "ytl"],
            ["map", "typeId", "hl"],
            ["map", "typeId", "fsl"],
            ["map", "typeId", "ecl"],
            ["map", "typeId", "lcl"],
            ["map", "typeId", "evl"],
            ["map", "typeId", "vis"],
            ["map", "typeId", "ctv"],
            ["map", "typeId", "c"],
            ["map", "typeId", "d"],
            ["map", "typeId", "e"],
            ["map", "typeId", "f"],
            ["map", "typeId", "j"],
            ["map", "typeId", "k"],
            ["map", "typeId", "r"],
            ["map", "typeId", "u"],
            ["map", "typeId", "v"],
            ["map", "typeId", "uv"],
            ["map", "typeId", "ev"],
            ["map", "typeId", "cid"],
            ["map", "typeId", "aev"],
            ["map", "typeId", "gas"],
            ["map", "typeId", "remm"],
            ["map", "typeId", "smm"],
            ["map", "typeId", "awec"],
            ["map", "typeId", "dbg"],
            ["map", "typeId", "jsm"],
            ["map", "typeId", "okt"],
            ["map", "typeId", "yieldify"],
            ["map", "typeId", "cts"],
            ["map", "typeId", "bsa"],
            ["map", "typeId", "bb"],
            ["map", "typeId", "omc"],
            ["map", "typeId", "ta"],
            ["map", "typeId", "tc"],
            ["map", "typeId", "sfc"],
            ["map", "typeId", "svw"],
            ["map", "typeId", "sfl"],
            ["map", "typeId", "infinity"],
            ["map", "typeId", "asp"],
            ["map", "typeId", "qca"],
            ["map", "typeId", "uslt"],
            ["map", "typeId", "ndcr"],
            ["map", "typeId", "qcm"],
            ["map", "typeId", "ela"],
            ["map", "typeId", "ljs"],
            ["map", "typeId", "hjtc"],
            ["map", "typeId", "pntr"],
            ["map", "typeId", "awc"],
            ["map", "typeId", "cegg"],
            ["map", "typeId", "awj"],
            ["map", "typeId", "crto"],
            ["map", "typeId", "k50Init"],
            ["map", "typeId", "bzi"],
            ["map", "typeId", "uspt"],
            ["map", "typeId", "dstag"],
            ["map", "typeId", "mpm"],
            ["map", "typeId", "baut"],
            ["map", "typeId", "pijs"],
            ["map", "typeId", "nudge"],
            ["map", "typeId", "abtGeneric"],
            ["map", "typeId", "xpsh"],
            ["map", "typeId", "ll"],
            ["map", "typeId", "messagemate"],
            ["map", "typeId", "twitter_website_tag"],
            ["map", "typeId", "mf"],
            ["map", "typeId", "html"],
            ["map", "typeId", "vei"],
            ["map", "typeId", "ms"],
            ["map", "typeId", "scjs"],
            ["map", "typeId", "fxm"],
            ["map", "typeId", "pa"],
            ["map", "typeId", "shareaholic"],
            ["map", "typeId", "tdc"],
            ["map", "typeId", "pc"],
            ["map", "typeId", "csm"],
            ["map", "typeId", "m6d"],
            ["map", "typeId", "scp"],
            ["map", "typeId", "veip"],
            ["map", "typeId", "qpx"],
            ["map", "typeId", "sfr"],
            ["map", "typeId", "tdsc"],
            ["map", "typeId", "mpr"],
            ["map", "typeId", "placedPixel"],
            ["map", "typeId", "vdc"],
            ["map", "typeId", "img"],
            ["map", "typeId", "tdlc"],
            ["map", "typeId", "tpdpx"],
            ["map", "typeId", "sandboxedScripts"],
          ],
          vtp_enableConfiguration: false,
          tag_id: 3322,
        },
        { function: "__cl", tag_id: 3323 },
        { function: "__cl", tag_id: 3324 },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1384335_1615",
          tag_id: 3325,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1384335_1947",
          tag_id: 3326,
        },
        { function: "__cl", tag_id: 3327 },
        { function: "__cl", tag_id: 3328 },
        { function: "__cl", tag_id: 3329 },
        { function: "__cl", tag_id: 3330 },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E(function(){var c=document.querySelector(".nav-logo"),d=Array.prototype.slice.call(document.querySelectorAll(".oh-navitem-link")),e=Array.prototype.slice.call(document.querySelectorAll(".of-directory a"));d\u0026\u0026c\u0026\u0026(d.forEach(function(b){b.addEventListener("click",function(a){a=this.innerText;window.dataLayer.push({event:"Top Navigation",eventLabel:a})})}),c.addEventListener("click",function(b){window.dataLayer.push({event:"Top Navigation Logo",eventLabel:"Home"})}));e\u0026\u0026e.forEach(function(b){b.addEventListener("click",\nfunction(a){a=this.innerText;window.dataLayer.push({event:"Bottom Navigation",eventLabel:a})})})})();\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 343,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E(function(a,b,d){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];a="script";r=b.createElement(a);r.async=!0;r.src=d;b=b.getElementsByTagName(a)[0];b.parentNode.insertBefore(r,b)}})(window,document,"https://sc-static.net/scevent.min.js");snaptr("init","130fca0c-b391-420b-bae4-d6a568070e1c",{user_email:"__INSERT_USER_EMAIL__"});snaptr("track","PAGE_VIEW");\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 892,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Evar __pParams=__pParams||[];__pParams.push({client_id:"441",c_1:"oppo",c_2:"ClientSite"});\u003C/script\u003E\n\u003Cscript type="text/gtmscript" data-gtmsrc="https://cdn.d2-apps.net/js/tr.js" async\u003E\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 894,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript data-gtmsrc="//platform.twitter.com/oct.js" type="text/gtmscript"\u003E\u003C/script\u003E\n\u003Cscript type="text/gtmscript"\u003Etwttr.conversion.trackPid("o3dbf",{tw_sale_amount:0,tw_order_quantity:0});\u003C/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height="1" width="1" style="display:none;" alt="" src="https://analytics.twitter.com/i/adsct?txn_id=o3dbf\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0"\u003E\n\u003Cimg height="1" width="1" style="display:none;" alt="" src="//t.co/i/adsct?txn_id=o3dbf\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0"\u003E\n\u003C/noscript\u003E\n\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 902,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E(function(b,c,d,a,e){b[a]=b[a]||[];b[a].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});b=c.getElementsByTagName(d)[0];c=c.createElement(d);a="dataLayer"!=a?"\\x26l\\x3d"+a:"";c.async=!0;c.src="https://www.googletagmanager.com/gtm.js?id\\x3d"+e+a;b.parentNode.insertBefore(c,b)})(window,document,"script","dataLayer","GTM-5XGQDBQ");\u003C/script\u003E\n\n\u003Cnoscript\u003E\n    \u003Ciframe src="https://www.googletagmanager.com/ns.html?id=GTM-5XGQDBQ" height="0" width="0" style="display:none;visibility:hidden"\u003E\u003C/iframe\u003E\n\u003C/noscript\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 937,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E(function(b,c,d,a,e){b[a]=b[a]||[];b[a].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});b=c.getElementsByTagName(d)[0];c=c.createElement(d);a="dataLayer"!=a?"\\x26l\\x3d"+a:"";c.async=!0;c.src="//www.googletagmanager.com/gtm.js?id\\x3d"+e+a;b.parentNode.insertBefore(c,b)})(window,document,"script","dataLayer","GTM-K6WGF9");\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 939,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Evar __pParams=__pParams||[];__pParams.push({client_id:"441",c_1:"oppo",c_2:"ClientSite"});\u003C/script\u003E\n\u003Cscript type="text/gtmscript" data-gtmsrc="https://cdn.d2-apps.net/js/tr.js" async\u003E\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 948,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version="1.1",a.queue=[],b=e.createElement(f),b.async=!0,b.src="//static.ads-twitter.com/uwt.js",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,"script");twq("init","o1pxi");twq("track","PageView");\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1182,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version="1.1",a.queue=[],b=e.createElement(f),b.async=!0,b.src="//static.ads-twitter.com/uwt.js",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,"script");twq("init","o1lu6");twq("track","PageView");\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1184,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version="1.1",a.queue=[],b=e.createElement(f),b.async=!0,b.src="//static.ads-twitter.com/uwt.js",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,"script");twq("init","o1lu8");twq("track","PageView");\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1185,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version="1.1",a.queue=[],b=e.createElement(f),b.async=!0,b.src="//static.ads-twitter.com/uwt.js",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,"script");twq("init","o3lt8");twq("track","PageView");\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1186,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version="1.1",a.queue=[],b=e.createElement(f),b.async=!0,b.src="//static.ads-twitter.com/uwt.js",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,"script");twq("init","o12w2");twq("track","PageView");\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1188,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","1155644268109822");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1155644268109822\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1198,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","816412905514958");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=816412905514958\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1199,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","860087807827863");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=860087807827863\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1200,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","3771876416217420");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=3771876416217420\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1201,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","834800783685048");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=834800783685048\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1202,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Etry{if(!sessionStorage.getItem("gtm_date")){var gtm_date=Date.now();sessionStorage.setItem("gtm_date",gtm_date)}if(!sessionStorage.getItem("gtm_timerstop_30")||!sessionStorage.getItem("gtm_timerstop_120"))var gtm_my_interval=setInterval(function(){var a=sessionStorage.getItem("gtm_date");if(void 0==a)return clearInterval(gtm_my_interval),!1;a=Date.now()-parseInt(a);a=parseInt(a/1E3);!sessionStorage.getItem("gtm_timerstop_120")\u0026\u0026120\u003C=a\u0026\u0026(window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"gtm_timer_120s"}),\nsessionStorage.setItem("gtm_timerstop_120",!0),clearInterval(gtm_my_interval));!sessionStorage.getItem("gtm_timerstop_30")\u0026\u002630\u003C=a\u0026\u0026(window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"gtm_timer_30s"}),sessionStorage.setItem("gtm_timerstop_30",!0))},1E3)}catch(a){};\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1247,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Evar gtm_date=Date.now();sessionStorage.setItem("gtm_page_date",gtm_date);\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1258,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Ewindow.addEventListener("beforeunload",function(){window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:"beforeunload"})});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1260,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Efbq("trackCustom","submit");\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1426,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","1453233354886273");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1453233354886273\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1586,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/javascript"\u003Evar __pParams=__pParams||[];__pParams.push({client_id:"441",c_1:"oppo",c_2:"ClientSite",c_3:"buy_click"});\u003C/script\u003E\n\u003Cscript type="text/javascript" src="https://cdn.d2-apps.net/js/tr.js" async\u003E\u003C/script\u003E\n',
          vtp_supportDocumentWrite: true,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          vtp_usePostscribe: true,
          tag_id: 1616,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E$(document).on("click",".section-box a:first-child",function(a){if("img"==a.target.tagName.toLowerCase())if(a=$(this).next().find("a").text().trim(),"Series Page"==getPageGroupType()){var b=OPPOurl.split("/")[3].replace(/product-|[/]?/g,"");sendGAEvent({nonInteraction:!1,eventCategory:"Series Page+"+b,eventAction:"Product Entry",eventLabel:"img+"+a})}else sendGAEvent({nonInteraction:!1,eventCategory:getPageGroupType(),eventAction:"Product Entry",eventLabel:"img+"+a})});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1621,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Evar _trueMetricsHeatMapDefaultOption={trackerName:"tmHM",rate:10,trackingId:"UA-36584794-51"};function getCurrentCountryCode(){var d=/\\/([\\w-]+)\\/?/,c=window.location.pathname;d=c.match(d);var m=/\\/oppo\\/([\\w-]+)\\/?/;c=c.match(m);var k;d\u0026\u0026"content"==d[1]\u0026\u0026c\u0026\u0026c[1]?k=c[1]:d\u0026\u0026d[1]\u0026\u0026(k=d[1]);return k}var countryCode=getCurrentCountryCode();"undefined"!=typeof _trueMetricsHeatMapOption?_trueMetricsHeatMapOption:_trueMetricsHeatMapOption=_trueMetricsHeatMapDefaultOption;\n(function(d,c,m,k,l,p,h){try{var n=_trueMetricsHeatMapOption;p=n.trackerName;h=n.rate;if(-1\u003Cd.location.search.indexOf("hm\\x3dload")){var q=c.createElement(m),t=c.getElementsByTagName(m)[0];q.src=k;q.async=!0;t.parentNode.insertBefore(q,t)}else{var b=document.documentElement,r;d.GoogleAnalyticsObject=l;d[l]=d[l]||function(){(d[l].q=d[l].q||[]).push(arguments)};ga("create",n.trackingId,"auto",n.trackerName,{siteSpeedSampleRate:"id"==countryCode?10:1});navigator.userAgent.match(/(iphone|ipad|ipod|ios|android|mobile|blackberry|iemobile|mqqbrowser|juc|fennec|wosbrowser|browserng|Webos|symbian|windows phone)/i)?\n(b.addEventListener("touchstart",function(a){r=0}),b.addEventListener("touchmove",function(a){r=1}),b.addEventListener("touchend",function(a){if(0==r){var e=c.body.scrollTop+b.scrollTop,g=c.body.scrollLeft+b.scrollLeft;g=a.changedTouches[0].clientX+g;var f=a.changedTouches[0].clientY+e;e=a.changedTouches[0].pageX?a.changedTouches[0].pageX:g;f=a.changedTouches[0].pageY?a.changedTouches[0].pageY:f;a=0==b.scrollWidth?document.body.scrollWidth:b.scrollWidth;g=0==b.scrollHeight?document.body.scrollHeight:\nb.scrollHeight;0\u003Ce\u0026\u00260\u003Cf\u0026\u0026(e=Math.round(e/h),f=Math.round(f/h),a=a/h+","+g/h+"_"+e+","+f,ga(p+".send","event","heatmap",location.href,a,{nonInteraction:!0}))}})):b.addEventListener("mousedown",function(a){var e=c.body.scrollTop+b.scrollTop,g=c.body.scrollLeft+b.scrollLeft;g=a.clientX+g;var f=a.clientY+e;e=a.pageX?a.pageX:g;f=a.pageY?a.pageY:f;a=0==b.scrollWidth?c.body.scrollWidth:b.scrollWidth;g=0==b.scrollHeight?c.body.scrollHeight:b.scrollHeight;0\u003Ce\u0026\u00260\u003Cf\u0026\u0026(e=Math.round(e/h),f=Math.round(f/h),a=a/\nh+","+g/h+"_"+e+","+f,ga(p+".send","event","heatmap",location.href,a,{nonInteraction:!0}))})}}catch(a){}})(window,document,"script","https://www.truemetrics.cn/tm_tools/heatmap/tmHMBuilderJq-02.min.js","ga");\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1686,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","3533491440000809");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=3533491440000809\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1836,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","2912754895511174");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=2912754895511174\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1838,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","378031199870528");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=378031199870528\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1852,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\n\u003Cscript type="text/gtmscript" data-gtmsrc="https://p.teads.tv/teads-fellow.js" async="true"\u003E\u003C/script\u003E\n\u003Cscript type="text/gtmscript"\u003Ewindow.teads_e=window.teads_e||[];window.teads_buyer_pixel_id="mx"==',
            ["escape", ["macro", 21], 8, 16],
            "?4154:2534;\u003C/script\u003E",
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1854,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","1139600423130400");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1139600423130400\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1897,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","308258210632390");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=308258210632390\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1906,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript" id="lightning_bolt" data-gtmsrc="//cdn-akamai.mookie1.com/LB/LightningBolt.js"\u003E\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1944,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003ElbReload("","","","',
            ["escape", ["macro", 121], 7],
            '");\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1948,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","3643335412462910");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=3643335412462910\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1950,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","1088219361678454");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1088219361678454\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1952,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E(function(){var k=30,m="source_param",l="utm_source",n="PartnershipCloudProfessional",f=function(e){for(var b=document.location.search.substring(1).split("\\x26"),c=0;c\u003Cb.length;c++){var a=b[c].split("\\x3d");if(e.toLowerCase()==a[0].toLowerCase())return a[1]}},g=function(e,b,c){var a=new Date;a.setTime(a.getTime()+864E5*c);document.cookie=e+"\\x3d"+b.slice(0,200)+"; expires\\x3d"+a.toGMTString()+"; path\\x3d/;"},q=function(){var e=document.domain.split(".").slice(-2).join("."),b=document.location.origin+\ndocument.location.pathname,c="utm_source utm_medium utm_campaign utm_content utm_term from page site".split(" "),a=document.location.search.substring(1).split("\\x26");document.cookie="WEBSITE_URL\\x3d"+b+";domain\\x3d"+e+";path\\x3d/";b=!1;for(var h=0;h\u003Ca.length;h++){var d=a[h].split("\\x3d"),p=c.indexOf(d[0].toLowerCase());-1\u003Cp\u0026\u0026(document.cookie=d[0]+"\\x3d"+decodeURIComponent(d[1].slice(0,200))+";domain\\x3d"+e+";path\\x3d/");d[1]\u0026\u0026200\u003Cd[1].length\u0026\u0026(a[h]=d[0]+"\\x3d"+decodeURIComponent(d[1].slice(0,200)),\nb=!0)}b\u0026\u0026(document.location.search=a.join("\\x26"))};f(l)\u0026\u0026("impact"!==f(l)\u0026\u0026g(n,"",0),g(m,f(l),k));f("irclickid")\u0026\u0026(g(n,f("irclickid"),k),g(m,"impact",k));q()})();\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2043,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E$(function(){0==$(".notice-bar-wrapper").length\u0026\u0026$("body").append(\'\\x3cdiv class\\x3d"notice-bar-wrapper"\\x3e\\x3c/div\\x3e\')});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2144,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript data-gtmsrc="https://js.adsrvr.org/up_loader.1.1.0.js" type="text/gtmscript"\u003E\u003C/script\u003E\n        \u003Cscript type="text/gtmscript"\u003Ettd_dom_ready(function(){if("function"===typeof TTDUniversalPixelApi){var a=new TTDUniversalPixelApi;a.init("vj1t8mi",["w7qb6ud"],"https://insight.adsrvr.org/track/up")}});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2153,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_load: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E!function(d,g,e){d.TiktokAnalyticsObject=e;var a=d[e]=d[e]||[];a.methods="page track identify instances debug on off once ready alias group enableCookie disableCookie".split(" ");a.setAndDefer=function(b,c){b[c]=function(){b.push([c].concat(Array.prototype.slice.call(arguments,0)))}};for(d=0;d\u003Ca.methods.length;d++)a.setAndDefer(a,a.methods[d]);a.instance=function(b){b=a._i[b]||[];for(var c=0;c\u003Ca.methods.length;c++)a.setAndDefer(b,a.methods[c]);return b};a.load=function(b,c){var f="https://analytics.tiktok.com/i18n/pixel/events.js";\na._i=a._i||{};a._i[b]=[];a._i[b]._u=f;a._t=a._t||{};a._t[b]=+new Date;a._o=a._o||{};a._o[b]=c||{};c=document.createElement("script");c.type="text/javascript";c.async=!0;c.src=f+"?sdkid\\x3d"+b+"\\x26lib\\x3d"+e;b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(c,b)};a.load("C4KEJ2L1KC6QQ9D0SOR0");a.page()}(window,document,"ttq");\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2361,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            "\u003Cstyle\u003E\n#oc-container.newsdetails-breadcrumb {\n  padding-bottom: 0;\n}\n\u003C/style\u003E",
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2368,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","445334837297113");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=445334837297113\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2561,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            ' \u003Cscript type="text/gtmscript"\u003E(function(d,b,a){(b[a]=b[a]||[]).push(function(){try{b.yaCounter87007341=new Ya.Metrika({id:87007341,clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0,trackHash:!0,ecommerce:"dataLayer"})}catch(f){}});var e=d.getElementsByTagName("script")[0],c=d.createElement("script");a=function(){e.parentNode.insertBefore(c,e)};c.type="text/javascript";c.async=!0;c.src="https://cdn.jsdelivr.net/npm/yandex-metrica-watch/watch.js";"[object Opera]"==b.opera?d.addEventListener("DOMContentLoaded",a,!1):a()})(document,\nwindow,"yandex_metrika_callbacks");\u003C/script\u003E ',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2653,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\t\u003Cscript type="text/gtmscript"\u003E!function(d,g,e){d.TiktokAnalyticsObject=e;var a=d[e]=d[e]||[];a.methods="page track identify instances debug on off once ready alias group enableCookie disableCookie".split(" ");a.setAndDefer=function(b,c){b[c]=function(){b.push([c].concat(Array.prototype.slice.call(arguments,0)))}};for(d=0;d\u003Ca.methods.length;d++)a.setAndDefer(a,a.methods[d]);a.instance=function(b){b=a._i[b]||[];for(var c=0;c\u003Ca.methods.length;c++)a.setAndDefer(b,a.methods[c]);return b};a.load=function(b,c){var f="https://analytics.tiktok.com/i18n/pixel/events.js";\na._i=a._i||{};a._i[b]=[];a._i[b]._u=f;a._t=a._t||{};a._t[b]=+new Date;a._o=a._o||{};a._o[b]=c||{};c=document.createElement("script");c.type="text/javascript";c.async=!0;c.src=f+"?sdkid\\x3d"+b+"\\x26lib\\x3d"+e;b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(c,b)};a.load("C7FSQTETT111RBO6P8U0");a.page()}(window,document,"ttq");\u003C/script\u003E\n\t',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2663,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            "\u003Cstyle\u003E\n@media (max-width: 1023.98px){\n .oh-nav-mbseek .oh-nav-seek-black .oh-nav-hot .nav-Seekhot, #oc-header.show-mask .oh_nav_shop {\n   display: none;\n }\n}\n\u003C/style\u003E",
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2711,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","405275001362852");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=405275001362852\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2732,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E(function(){var a=new Date;a.setTime(a.getTime()+314496E5);for(var f=document.cookie.split("; "),d=0;d\u003Cf.length;d++)if(f[d].indexOf("\\x3d")\u003E0){var b=f[d].split("\\x3d");b[0]=="__lt__cid"?document.cookie=b[0]+"\\x3d"+b[1]+";expires\\x3d"+a.toGMTString()+";domain\\x3dwww.oppo.com;path\\x3d/":b[0]=="snexid"\u0026\u0026(document.cookie=b[0]+"\\x3d"+b[1]+";expires\\x3d"+a.toGMTString()+";path\\x3d/")}setTimeout(function(){for(var g=document.cookie.split("; "),e=0;e\u003Cg.length;e++)if(g[e].indexOf("\\x3d")\u003E0){var c=g[e].split("\\x3d");\nc[0]=="__lt__cid"?document.cookie=c[0]+"\\x3d"+c[1]+";expires\\x3d"+a.toGMTString()+";domain\\x3dwww.oppo.com;path\\x3d/":c[0]=="snexid"\u0026\u0026(document.cookie=c[0]+"\\x3d"+c[1]+";expires\\x3d"+a.toGMTString()+";path\\x3d/")}},1E4)})();\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2744,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003E(function(){var c=',
            ["escape", ["macro", 25], 8, 16],
            ',b=window.location.search.substr(1),a=RegExp("(^|\\x26)(gclid|gclsrc)\\x3d([^\\x26]*)(\\x26|$)","i");if(a=b.match(a))a="google",b="cpc";else{a=RegExp("(^|\\x26)utm_source\\x3d([^\\x26]*)(\\x26|$)","i");a=(a=b.match(a))?decodeURIComponent(a[2]):"";var d=RegExp("(^|\\x26)utm_medium\\x3d([^\\x26]*)(\\x26|$)","i");b=(b=b.match(d))?decodeURIComponent(b[2]):""}""!=a\u0026\u0026""!=b?(b="0_"+c+"_"+a+"_"+b,tmSetCookie("utmEvent",b,180)):(b=document.cookie.indexOf("utmEvent\\x3d"),-1\u003Cb\u0026\u0026(b=\ndocument.cookie.substring(b+9).split(";")[0],a=b.split("_"),4==a.length\u0026\u0026(c!=a[1]?""==a[1]?(window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"uaEvent",eventCategory:"Campaign Engaged Landing",eventAction:a[2]+" / "+a[3],eventLabel:"pageview\\x3d2",nonInteraction:!0}),b="1_"+c+"_"+a[2]+"_"+a[3]):b="0_"+c+"_"+a[2]+"_"+a[3]:"0"==a[0]\u0026\u0026(window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"uaEvent",eventCategory:"Campaign Engaged Landing",eventAction:a[2]+" / "+a[3],eventLabel:"pageview\\x3d2",\nnonInteraction:!0}),b="1_"+a[1]+"_"+a[2]+"_"+a[3])),tmSetCookie("utmEvent",b,180)))})();function tmSetCookie(c,b,a){var d=new Date;d.setTime(d.getTime()+864E5*a);document.cookie=c+"\\x3d"+b.slice(0,50)+"; expires\\x3d"+d.toGMTString()+"; path\\x3d/;"};\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2763,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}var __dispatched__={},__i__=self.postMessage\u0026\u0026setInterval(function(){if(self.PrivacyManagerAPI\u0026\u0026__i__){var c={PrivacyManagerAPI:{action:"getConsentDecision",timestamp:(new Date).getTime(),self:self.location.host}};self.top.postMessage(JSON.stringify(c),"*");__i__=clearInterval(__i__)}},50);\nself.addEventListener("message",function(c,a){try{if(c.data\u0026\u0026(a=JSON.parse(c.data))\u0026\u0026(a=a.PrivacyManagerAPI)\u0026\u0026a.capabilities\u0026\u0026"getConsentDecision"==a.action){var d=self.PrivacyManagerAPI.callApi("getGDPRConsentDecision",self.location.host).consentDecision;d\u0026\u0026d.forEach(function(b){__dispatched__[b]||(3==b\u0026\u0026gtag("consent","update",{analytics_storage:"granted"}),self.dataLayer\u0026\u0026self.dataLayer.push({event:"GDPR Pref Allows "+b}),__dispatched__[b]=1)})}}catch(b){}});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2807,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Efbq("track","Purchase",{value:0,currency:"CLP"});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2882,
        },
        {
          function: "__html",
          metadata: ["map"],
          unlimited: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","1001820220477916");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1001820220477916\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2889,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","1240429109829700");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1240429109829700\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2890,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","604425077595734");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=604425077595734\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2891,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","560911352237506");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=560911352237506\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2892,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","600479908036784");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=600479908036784\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2893,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","418249243648957");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=418249243648957\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2895,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","380315080835438");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=380315080835438\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2896,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","485186586699670");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=485186586699670\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2897,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","1848363408843594");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1848363408843594\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2898,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","359643619629327");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=359643619629327\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2899,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","1011241669579890");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1011241669579890\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2900,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","560933478838393");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=560933478838393\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2901,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","5175327052557972");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=5175327052557972\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2902,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","404862188356941");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=404862188356941\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2903,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","395397255896466");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=395397255896466\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2904,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","581932056823396");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=581932056823396\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2905,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","3166865926960170");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=3166865926960170\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2906,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","2356122664527105");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=2356122664527105\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2907,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","390082623186518");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=390082623186518\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2908,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","453068822845207");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=453068822845207\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2909,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","1081964132716863");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1081964132716863\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2910,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","479969597268507");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=479969597268507\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2911,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","999276384067213");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=999276384067213\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2912,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","1212992799278550");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height="1" width="1" src="https://www.facebook.com/tr?id=1212992799278550\u0026amp;ev=PageView\n\u0026amp;noscript=1"\u003E\n\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2913,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","4987915904651889");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height="1" width="1" src="https://www.facebook.com/tr?id=4987915904651889\u0026amp;ev=PageView\n\u0026amp;noscript=1"\u003E\n\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2914,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E_linkedin_partner_id="4248186";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);\u003C/script\u003E\u003Cscript type="text/gtmscript"\u003E(function(a){a||(window.lintrk=function(c,d){window.lintrk.q.push([c,d])},window.lintrk.q=[]);a=document.getElementsByTagName("script")[0];var b=document.createElement("script");b.type="text/javascript";b.async=!0;b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";a.parentNode.insertBefore(b,a)})(window.lintrk);\u003C/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=4248186\u0026amp;fmt=gif"\u003E\n\u003C/noscript\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2972,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003Ewindow.dataLayer=window.dataLayer||[];window.dataLayer.push({nav_group:',
            ["escape", ["macro", 43], 8, 16],
            '.split("+")[1]});\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 2990,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version="1.1",a.queue=[],b=e.createElement(f),b.async=!0,b.src="https://static.ads-twitter.com/uwt.js",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,"script");twq("config","o592y");\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3049,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version="1.1",a.queue=[],b=e.createElement(f),b.async=!0,b.src="https://static.ads-twitter.com/uwt.js",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,"script");twq("config","ocro4");\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3050,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version="1.1",a.queue=[],b=e.createElement(f),b.async=!0,b.src="https://static.ads-twitter.com/uwt.js",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,"script");twq("config","o9dab");\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3054,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E!function(d,g,e){d.TiktokAnalyticsObject=e;var a=d[e]=d[e]||[];a.methods="page track identify instances debug on off once ready alias group enableCookie disableCookie".split(" ");a.setAndDefer=function(b,c){b[c]=function(){b.push([c].concat(Array.prototype.slice.call(arguments,0)))}};for(d=0;d\u003Ca.methods.length;d++)a.setAndDefer(a,a.methods[d]);a.instance=function(b){b=a._i[b]||[];for(var c=0;c\u003Ca.methods.length;c++)a.setAndDefer(b,a.methods[c]);return b};a.load=function(b,c){var f="https://analytics.tiktok.com/i18n/pixel/events.js";\na._i=a._i||{};a._i[b]=[];a._i[b]._u=f;a._t=a._t||{};a._t[b]=+new Date;a._o=a._o||{};a._o[b]=c||{};c=document.createElement("script");c.type="text/javascript";c.async=!0;c.src=f+"?sdkid\\x3d"+b+"\\x26lib\\x3d"+e;b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(c,b)};a.load("CEGO4IBC77U87C9M939G");a.page()}(window,document,"ttq");\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3071,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version="1.1",a.queue=[],b=e.createElement(f),b.async=!0,b.src="https://static.ads-twitter.com/uwt.js",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,"script");twq("config","od400");\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3078,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version="1.1",a.queue=[],b=e.createElement(f),b.async=!0,b.src="https://static.ads-twitter.com/uwt.js",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,"script");twq("config","o1k01");\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3079,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version="1.1",a.queue=[],b=e.createElement(f),b.async=!0,b.src="https://static.ads-twitter.com/uwt.js",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,"script");twq("config","o1ltw");\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3080,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version="1.1",a.queue=[],b=e.createElement(f),b.async=!0,b.src="https://static.ads-twitter.com/uwt.js",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,"script");twq("config","o4lz1");\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3081,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version="1.1",a.queue=[],b=e.createElement(f),b.async=!0,b.src="https://static.ads-twitter.com/uwt.js",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,"script");twq("config","o4lzv");\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3082,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version="1.1",a.queue=[],b=e.createElement(f),b.async=!0,b.src="https://static.ads-twitter.com/uwt.js",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,"script");twq("config","od4g1");\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3083,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version="1.1",a.queue=[],b=e.createElement(f),b.async=!0,b.src="https://static.ads-twitter.com/uwt.js",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,"script");twq("config","o12w2");\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3085,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version="1.1",a.queue=[],b=e.createElement(f),b.async=!0,b.src="https://static.ads-twitter.com/uwt.js",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,"script");twq("config","o1lu6");\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3086,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version="1.1",a.queue=[],b=e.createElement(f),b.async=!0,b.src="https://static.ads-twitter.com/uwt.js",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,"script");twq("config","o1lu8");\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3087,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version="1.1",a.queue=[],b=e.createElement(f),b.async=!0,b.src="https://static.ads-twitter.com/uwt.js",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,"script");twq("config","o1pxi");\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3088,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript data-gtmsrc="https://js.adsrvr.org/up_loader.1.1.0.js" type="text/gtmscript"\u003E\u003C/script\u003E\n\u003Cscript type="text/gtmscript"\u003Ettd_dom_ready(function(){if("function"===typeof TTDUniversalPixelApi){var a=new TTDUniversalPixelApi;a.init("4408ih8",["g4ffihk"],"https://insight.adsrvr.org/track/up")}});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3090,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript data-gtmsrc="https://js.adsrvr.org/up_loader.1.1.0.js" type="text/gtmscript"\u003E\u003C/script\u003E\n\u003Cscript type="text/gtmscript"\u003Ettd_dom_ready(function(){if("function"===typeof TTDUniversalPixelApi){var a=new TTDUniversalPixelApi;a.init("4408ih8",["63jok8g"],"https://insight.adsrvr.org/track/up")}});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3091,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript data-gtmsrc="https://js.adsrvr.org/up_loader.1.1.0.js" type="text/gtmscript"\u003E\u003C/script\u003E\n\u003Cscript type="text/gtmscript"\u003Ettd_dom_ready(function(){if("function"===typeof TTDUniversalPixelApi){var a=new TTDUniversalPixelApi;a.init("4408ih8",["k5dgnnh"],"https://insight.adsrvr.org/track/up")}});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3093,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript data-gtmsrc="https://js.adsrvr.org/up_loader.1.1.0.js" type="text/gtmscript"\u003E\u003C/script\u003E\n\u003Cscript type="text/gtmscript"\u003Ettd_dom_ready(function(){if("function"===typeof TTDUniversalPixelApi){var a=new TTDUniversalPixelApi;a.init("1gzq3q3",["tuyz817"],"https://insight.adsrvr.org/track/up")}});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3102,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript data-gtmsrc="https://js.adsrvr.org/up_loader.1.1.0.js" type="text/gtmscript"\u003E\u003C/script\u003E\n\u003Cscript type="text/gtmscript"\u003Ettd_dom_ready(function(){if("function"===typeof TTDUniversalPixelApi){var a=new TTDUniversalPixelApi;a.init("1gzq3q3",["htiofqw"],"https://insight.adsrvr.org/track/up")}});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3103,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript data-gtmsrc="https://js.adsrvr.org/up_loader.1.1.0.js" type="text/gtmscript"\u003E\u003C/script\u003E\n\u003Cscript type="text/gtmscript"\u003Ettd_dom_ready(function(){if("function"===typeof TTDUniversalPixelApi){var a=new TTDUniversalPixelApi;a.init("1gzq3q3",["xldp4q6"],"https://insight.adsrvr.org/track/up")}});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3104,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript data-gtmsrc="https://js.adsrvr.org/up_loader.1.1.0.js?v=1" type="text/gtmscript"\u003E\u003C/script\u003E\n\u003Cscript type="text/gtmscript"\u003Ettd_dom_ready(function(){if("function"===typeof TTDUniversalPixelApi){var a=new TTDUniversalPixelApi;a.init("vj1t8mi",["2n5vtro"],"https://insight.adsrvr.org/track/up")}});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3105,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Ewindow.onload=function(){var a=document.getElementById("_pix_id_cf97703f-bf56-042e-3a51-32c8f9a2a4f2");if(!a){var b="//",c=1E18*Math.random();a=document.createElement("iframe");a.style.display="none";a.setAttribute("src",b+"aax-eu.amazon-adsystem.com/s/iu3?d\\x3dgeneric\\x26ex-fargs\\x3d%3Fid%3Dcf97703f-bf56-042e-3a51-32c8f9a2a4f2%26type%3D55%26m%3D338801\\x26ex-fch\\x3d416613\\x26ex-src\\x3dhttps://www.oppo.com/ae/\\x26ex-hargs\\x3dv%3D1.0%3Bc%3D2082462980602%3Bp%3DCF97703F-BF56-042E-3A51-32C8F9A2A4F2\\x26cb\\x3d"+\nc);a.setAttribute("id","_pix_id_cf97703f-bf56-042e-3a51-32c8f9a2a4f2");document.body.appendChild(a)}};\u003C/script\u003E\u003Cnoscript\u003E \u003Cimg height="1" width="1" border="0" alt="" src="https://aax-eu.amazon-adsystem.com/s/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3Dcf97703f-bf56-042e-3a51-32c8f9a2a4f2%26type%3D55%26m%3D338801\u0026amp;ex-fch=416613\u0026amp;ex-src=https://www.oppo.com/ae/\u0026amp;ex-hargs=v%3D1.0%3Bc%3D2082462980602%3Bp%3DCF97703F-BF56-042E-3A51-32C8F9A2A4F2"\u003E\u003C/noscript\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3113,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            ' \n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","215476834401910");fbq("track","PageView");\u003C/script\u003E \n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=215476834401910\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E \n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3120,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            ' \n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","215476834401910");fbq("track","PageView");\u003C/script\u003E \n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=215476834401910\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E \n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3125,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Ewindow.onload=function(){var a=document.getElementById("_pix_id_b6babecb-8e0d-52de-d654-7f34eb0cfea7");if(!a){var b="//",c=1E18*Math.random();a=document.createElement("iframe");a.style.display="none";a.setAttribute("src",b+"aax-eu.amazon-adsystem.com/s/iu3?d\\x3dgeneric\\x26ex-fargs\\x3d%3Fid%3Db6babecb-8e0d-52de-d654-7f34eb0cfea7%26type%3D18%26m%3D338801\\x26ex-fch\\x3d416613\\x26ex-src\\x3dhttps://www.oppo.com/ae/smartphones/series-reno/reno8-t/\\x26ex-hargs\\x3dv%3D1.0%3Bc%3D2082462980602%3Bp%3DB6BABECB-8E0D-52DE-D654-7F34EB0CFEA7\\x26cb\\x3d"+\nc);a.setAttribute("id","_pix_id_b6babecb-8e0d-52de-d654-7f34eb0cfea7");document.body.appendChild(a)}};\u003C/script\u003E\u003Cnoscript\u003E \u003Cimg height="1" width="1" border="0" alt="" src="https://aax-eu.amazon-adsystem.com/s/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3Db6babecb-8e0d-52de-d654-7f34eb0cfea7%26type%3D18%26m%3D338801\u0026amp;ex-fch=416613\u0026amp;ex-src=https://www.oppo.com/ae/smartphones/series-reno/reno8-t/\u0026amp;ex-hargs=v%3D1.0%3Bc%3D2082462980602%3Bp%3DB6BABECB-8E0D-52DE-D654-7F34EB0CFEA7"\u003E\u003C/noscript\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3131,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Ewindow.onload=function(){var a=document.getElementById("_pix_id_441905d6-bdf5-8890-4611-8692e8f5b345");if(!a){var b="//",c=1E18*Math.random();a=document.createElement("iframe");a.style.display="none";a.setAttribute("src",b+"aax-eu.amazon-adsystem.com/s/iu3?d\\x3dgeneric\\x26ex-fargs\\x3d%3Fid%3D441905d6-bdf5-8890-4611-8692e8f5b345%26type%3D4%26m%3D338801\\x26ex-fch\\x3d416613\\x26ex-src\\x3dhttps://www.oppo.com/ae/smartphones/series-reno/reno8-t/\\x26ex-hargs\\x3dv%3D1.0%3Bc%3D2082462980602%3Bp%3D441905D6-BDF5-8890-4611-8692E8F5B345\\x26cb\\x3d"+\nc);a.setAttribute("id","_pix_id_441905d6-bdf5-8890-4611-8692e8f5b345");document.body.appendChild(a)}};\u003C/script\u003E\u003Cnoscript\u003E \u003Cimg height="1" width="1" border="0" alt="" src="https://aax-eu.amazon-adsystem.com/s/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3D441905d6-bdf5-8890-4611-8692e8f5b345%26type%3D4%26m%3D338801\u0026amp;ex-fch=416613\u0026amp;ex-src=https://www.oppo.com/ae/smartphones/series-reno/reno8-t/\u0026amp;ex-hargs=v%3D1.0%3Bc%3D2082462980602%3Bp%3D441905D6-BDF5-8890-4611-8692E8F5B345"\u003E\u003C/noscript\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3135,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Ewindow.onload=function(){var a=document.getElementById("_pix_id_27229c1a-30dc-d4fe-4bed-8e6a2662ce90");if(!a){var b="//",c=1E18*Math.random();a=document.createElement("iframe");a.style.display="none";a.setAttribute("src",b+"aax-eu.amazon-adsystem.com/s/iu3?d\\x3dgeneric\\x26ex-fargs\\x3d%3Fid%3D27229c1a-30dc-d4fe-4bed-8e6a2662ce90%26type%3D4%26m%3D338801\\x26ex-fch\\x3d416613\\x26ex-src\\x3dhttps://www.oppo.com/ae/smartphones/series-reno/reno8-t-5g/\\x26ex-hargs\\x3dv%3D1.0%3Bc%3D2082462980602%3Bp%3D27229C1A-30DC-D4FE-4BED-8E6A2662CE90\\x26cb\\x3d"+\nc);a.setAttribute("id","_pix_id_27229c1a-30dc-d4fe-4bed-8e6a2662ce90");document.body.appendChild(a)}};\u003C/script\u003E\u003Cnoscript\u003E \u003Cimg height="1" width="1" border="0" alt="" src="https://aax-eu.amazon-adsystem.com/s/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3D27229c1a-30dc-d4fe-4bed-8e6a2662ce90%26type%3D4%26m%3D338801\u0026amp;ex-fch=416613\u0026amp;ex-src=https://www.oppo.com/ae/smartphones/series-reno/reno8-t-5g/\u0026amp;ex-hargs=v%3D1.0%3Bc%3D2082462980602%3Bp%3D27229C1A-30DC-D4FE-4BED-8E6A2662CE90"\u003E\u003C/noscript\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3137,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_load: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","1442272589935458");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u0026lt; img height=\u0026quot;1\u0026quot; width=\u0026quot;1\u0026quot; style=\u0026quot;display:none\u0026quot;\nsrc=\u0026quot;https://www.facebook.com/tr?id=1442272589935458\u0026amp;ev=PageView\u0026amp;noscript=1\u0026quot;\n/\u0026gt;\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3141,
        },
        {
          function: "__html",
          metadata: ["map"],
          setup_tags: ["list", ["tag", 164, 0]],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Efbq("trackSingle","1442272589935458","ViewContent");\u003C/script\u003E\n    ',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3142,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript" data-gtmsrc="//dynamic.criteo.com/js/ld/ld.js?a=103708" async="true"\u003E\u003C/script\u003E\n\n\u003Cscript type="text/gtmscript"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=/iPad/.test(navigator.userAgent)?"t":/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent)?"m":"d";window.criteo_q.push({event:"setAccount",account:103708},{event:"setSiteType",type:deviceType},{event:"viewHome"});\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3151,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E(function(b,e,f,g,c,a,d){b[c]=b[c]||function(){(b[c].a=b[c].a||[]).push(arguments)};b[c].l=1*new Date;for(a=0;a\u003Cdocument.scripts.length;a++)if(document.scripts[a].src===g)return;a=e.createElement(f);d=e.getElementsByTagName(f)[0];a.async=1;a.src=g;d.parentNode.insertBefore(a,d)})(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");ym(93761138,"init",{clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0,ecommerce:"dataLayer"});\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cdiv\u003E\u003Cimg src="https://mc.yandex.ru/watch/93761138" style="position:absolute; left:-9999px;" alt=""\u003E\u003C/div\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3154,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E!function(d,g,e){d.TiktokAnalyticsObject=e;var a=d[e]=d[e]||[];a.methods="page track identify instances debug on off once ready alias group enableCookie disableCookie".split(" ");a.setAndDefer=function(b,c){b[c]=function(){b.push([c].concat(Array.prototype.slice.call(arguments,0)))}};for(d=0;d\u003Ca.methods.length;d++)a.setAndDefer(a,a.methods[d]);a.instance=function(b){b=a._i[b]||[];for(var c=0;c\u003Ca.methods.length;c++)a.setAndDefer(b,a.methods[c]);return b};a.load=function(b,c){var f="https://analytics.tiktok.com/i18n/pixel/events.js";\na._i=a._i||{};a._i[b]=[];a._i[b]._u=f;a._t=a._t||{};a._t[b]=+new Date;a._o=a._o||{};a._o[b]=c||{};c=document.createElement("script");c.type="text/javascript";c.async=!0;c.src=f+"?sdkid\\x3d"+b+"\\x26lib\\x3d"+e;b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(c,b)};a.load("CIJ5TQJC77UDH96VK16G");a.page()}(window,document,"ttq");\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3163,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003E(function(a,e,b,f,g,c,d){a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};c=e.createElement(f);c.async=1;c.src="https://www.clarity.ms/tag/"+g;d=e.getElementsByTagName(f)[0];d.parentNode.insertBefore(c,d)})(window,document,"clarity","script","',
            ["escape", ["macro", 130], 7],
            '");\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3166,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E!function(d,g,e){d.TiktokAnalyticsObject=e;var a=d[e]=d[e]||[];a.methods="page track identify instances debug on off once ready alias group enableCookie disableCookie".split(" ");a.setAndDefer=function(b,c){b[c]=function(){b.push([c].concat(Array.prototype.slice.call(arguments,0)))}};for(d=0;d\u003Ca.methods.length;d++)a.setAndDefer(a,a.methods[d]);a.instance=function(b){b=a._i[b]||[];for(var c=0;c\u003Ca.methods.length;c++)a.setAndDefer(b,a.methods[c]);return b};a.load=function(b,c){var f="https://analytics.tiktok.com/i18n/pixel/events.js";\na._i=a._i||{};a._i[b]=[];a._i[b]._u=f;a._t=a._t||{};a._t[b]=+new Date;a._o=a._o||{};a._o[b]=c||{};c=document.createElement("script");c.type="text/javascript";c.async=!0;c.src=f+"?sdkid\\x3d"+b+"\\x26lib\\x3d"+e;b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(c,b)};a.load("CI7UCVBC77U2H86MB9V0");a.page()}(window,document,"ttq");\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3168,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E!function(d,g,e){d.TiktokAnalyticsObject=e;var a=d[e]=d[e]||[];a.methods="page track identify instances debug on off once ready alias group enableCookie disableCookie".split(" ");a.setAndDefer=function(b,c){b[c]=function(){b.push([c].concat(Array.prototype.slice.call(arguments,0)))}};for(d=0;d\u003Ca.methods.length;d++)a.setAndDefer(a,a.methods[d]);a.instance=function(b){b=a._i[b]||[];for(var c=0;c\u003Ca.methods.length;c++)a.setAndDefer(b,a.methods[c]);return b};a.load=function(b,c){var f="https://analytics.tiktok.com/i18n/pixel/events.js";\na._i=a._i||{};a._i[b]=[];a._i[b]._u=f;a._t=a._t||{};a._t[b]=+new Date;a._o=a._o||{};a._o[b]=c||{};c=document.createElement("script");c.type="text/javascript";c.async=!0;c.src=f+"?sdkid\\x3d"+b+"\\x26lib\\x3d"+e;b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(c,b)};a.load("CINRGI3C77U9TRVJ0SV0");a.page()}(window,document,"ttq");\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3174,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E!function(d,g,e){d.TiktokAnalyticsObject=e;var a=d[e]=d[e]||[];a.methods="page track identify instances debug on off once ready alias group enableCookie disableCookie".split(" ");a.setAndDefer=function(b,c){b[c]=function(){b.push([c].concat(Array.prototype.slice.call(arguments,0)))}};for(d=0;d\u003Ca.methods.length;d++)a.setAndDefer(a,a.methods[d]);a.instance=function(b){b=a._i[b]||[];for(var c=0;c\u003Ca.methods.length;c++)a.setAndDefer(b,a.methods[c]);return b};a.load=function(b,c){var f="https://analytics.tiktok.com/i18n/pixel/events.js";\na._i=a._i||{};a._i[b]=[];a._i[b]._u=f;a._t=a._t||{};a._t[b]=+new Date;a._o=a._o||{};a._o[b]=c||{};c=document.createElement("script");c.type="text/javascript";c.async=!0;c.src=f+"?sdkid\\x3d"+b+"\\x26lib\\x3d"+e;b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(c,b)};a.load("CIN76SRC77U9TRVIVSI0");a.page()}(window,document,"ttq");\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3177,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E!function(d,g,e){d.TiktokAnalyticsObject=e;var a=d[e]=d[e]||[];a.methods="page track identify instances debug on off once ready alias group enableCookie disableCookie".split(" ");a.setAndDefer=function(b,c){b[c]=function(){b.push([c].concat(Array.prototype.slice.call(arguments,0)))}};for(d=0;d\u003Ca.methods.length;d++)a.setAndDefer(a,a.methods[d]);a.instance=function(b){b=a._i[b]||[];for(var c=0;c\u003Ca.methods.length;c++)a.setAndDefer(b,a.methods[c]);return b};a.load=function(b,c){var f="https://analytics.tiktok.com/i18n/pixel/events.js";\na._i=a._i||{};a._i[b]=[];a._i[b]._u=f;a._t=a._t||{};a._t[b]=+new Date;a._o=a._o||{};a._o[b]=c||{};c=document.createElement("script");c.type="text/javascript";c.async=!0;c.src=f+"?sdkid\\x3d"+b+"\\x26lib\\x3d"+e;b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(c,b)};a.load("CINRETRC77UFNL1VN8LG");a.page()}(window,document,"ttq");\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3180,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E!function(d,g,e){d.TiktokAnalyticsObject=e;var a=d[e]=d[e]||[];a.methods="page track identify instances debug on off once ready alias group enableCookie disableCookie".split(" ");a.setAndDefer=function(b,c){b[c]=function(){b.push([c].concat(Array.prototype.slice.call(arguments,0)))}};for(d=0;d\u003Ca.methods.length;d++)a.setAndDefer(a,a.methods[d]);a.instance=function(b){b=a._i[b]||[];for(var c=0;c\u003Ca.methods.length;c++)a.setAndDefer(b,a.methods[c]);return b};a.load=function(b,c){var f="https://analytics.tiktok.com/i18n/pixel/events.js";\na._i=a._i||{};a._i[b]=[];a._i[b]._u=f;a._t=a._t||{};a._t[b]=+new Date;a._o=a._o||{};a._o[b]=c||{};c=document.createElement("script");c.type="text/javascript";c.async=!0;c.src=f+"?sdkid\\x3d"+b+"\\x26lib\\x3d"+e;b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(c,b)};a.load("CIN6T3BC77UAB9CE5L6G");a.page()}(window,document,"ttq");\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3182,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E!function(d,g,e){d.TiktokAnalyticsObject=e;var a=d[e]=d[e]||[];a.methods="page track identify instances debug on off once ready alias group enableCookie disableCookie".split(" ");a.setAndDefer=function(b,c){b[c]=function(){b.push([c].concat(Array.prototype.slice.call(arguments,0)))}};for(d=0;d\u003Ca.methods.length;d++)a.setAndDefer(a,a.methods[d]);a.instance=function(b){b=a._i[b]||[];for(var c=0;c\u003Ca.methods.length;c++)a.setAndDefer(b,a.methods[c]);return b};a.load=function(b,c){var f="https://analytics.tiktok.com/i18n/pixel/events.js";\na._i=a._i||{};a._i[b]=[];a._i[b]._u=f;a._t=a._t||{};a._t[b]=+new Date;a._o=a._o||{};a._o[b]=c||{};c=document.createElement("script");c.type="text/javascript";c.async=!0;c.src=f+"?sdkid\\x3d"+b+"\\x26lib\\x3d"+e;b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(c,b)};a.load("CIJ6BOJC77UDH96VK290");a.page()}(window,document,"ttq");\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3185,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E!function(d,g,e){d.TiktokAnalyticsObject=e;var a=d[e]=d[e]||[];a.methods="page track identify instances debug on off once ready alias group enableCookie disableCookie".split(" ");a.setAndDefer=function(b,c){b[c]=function(){b.push([c].concat(Array.prototype.slice.call(arguments,0)))}};for(d=0;d\u003Ca.methods.length;d++)a.setAndDefer(a,a.methods[d]);a.instance=function(b){b=a._i[b]||[];for(var c=0;c\u003Ca.methods.length;c++)a.setAndDefer(b,a.methods[c]);return b};a.load=function(b,c){var f="https://analytics.tiktok.com/i18n/pixel/events.js";\na._i=a._i||{};a._i[b]=[];a._i[b]._u=f;a._t=a._t||{};a._t[b]=+new Date;a._o=a._o||{};a._o[b]=c||{};c=document.createElement("script");c.type="text/javascript";c.async=!0;c.src=f+"?sdkid\\x3d"+b+"\\x26lib\\x3d"+e;b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(c,b)};a.load("CIJ6BOJC77UDH96VK290");a.page()}(window,document,"ttq");\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3188,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E!function(d,g,e){d.TiktokAnalyticsObject=e;var a=d[e]=d[e]||[];a.methods="page track identify instances debug on off once ready alias group enableCookie disableCookie".split(" ");a.setAndDefer=function(b,c){b[c]=function(){b.push([c].concat(Array.prototype.slice.call(arguments,0)))}};for(d=0;d\u003Ca.methods.length;d++)a.setAndDefer(a,a.methods[d]);a.instance=function(b){b=a._i[b]||[];for(var c=0;c\u003Ca.methods.length;c++)a.setAndDefer(b,a.methods[c]);return b};a.load=function(b,c){var f="https://analytics.tiktok.com/i18n/pixel/events.js";\na._i=a._i||{};a._i[b]=[];a._i[b]._u=f;a._t=a._t||{};a._t[b]=+new Date;a._o=a._o||{};a._o[b]=c||{};c=document.createElement("script");c.type="text/javascript";c.async=!0;c.src=f+"?sdkid\\x3d"+b+"\\x26lib\\x3d"+e;b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(c,b)};a.load("CKSSC03C77UBVPRAEBDG");a.page()}(window,document,"ttq");\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3210,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","1273175966665773");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1273175966665773\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3214,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","1061622661888107");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1061622661888107\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3215,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version="1.1",a.queue=[],b=e.createElement(f),b.async=!0,b.src="https://static.ads-twitter.com/uwt.js",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,"script");twq("config","og0cl");\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3216,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E(function(a,b,c,d){a[c]=a[c]||[];a[c].push({eventType:"init",value:d,dc:"us"});a=b.getElementsByTagName("script")[0];b=b.createElement("script");b.async=!0;b.src="https://tags.creativecdn.com/UrEk8JX5TTE0nW4rpD89.js";a.parentNode.insertBefore(b,a)})(window,document,"rtbhEvents","UrEk8JX5TTE0nW4rpD89");(rtbhEvents=window.rtbhEvents||[]).push({eventType:"placebo"},{eventType:"uid",id:"unknown"});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3221,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E(rtbhEvents=window.rtbhEvents||[]).push({eventType:"home"},{eventType:"uid",id:"unknown"});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3223,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003E(rtbhEvents=window.rtbhEvents||[]).push({eventType:"offer",offerId:"',
            ["escape", ["macro", 126], 7],
            '"},{eventType:"uid",id:"unknown"});\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3226,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003E(rtbhEvents=window.rtbhEvents||[]).push({eventType:"listing",offerIds:',
            ["escape", ["macro", 131], 8, 16],
            '},{eventType:"uid",id:"unknown"});\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3229,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E(rtbhEvents=window.rtbhEvents||[]).push({eventType:"conversion",conversionClass:"order",conversionSubClass:"purchase"},{eventType:"uid",id:"unknown"});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3231,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","913147213489241");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=913147213489241\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3237,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            'Meta Pixel Code:\n\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","988143252853360");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=988143252853360\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3259,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","1898807997246831");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1898807997246831\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3269,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(d,g,e){d.TiktokAnalyticsObject=e;var a=d[e]=d[e]||[];a.methods="page track identify instances debug on off once ready alias group enableCookie disableCookie holdConsent revokeConsent grantConsent".split(" ");a.setAndDefer=function(b,c){b[c]=function(){b.push([c].concat(Array.prototype.slice.call(arguments,0)))}};for(d=0;d\u003Ca.methods.length;d++)a.setAndDefer(a,a.methods[d]);a.instance=function(b){b=a._i[b]||[];for(var c=0;c\u003Ca.methods.length;c++)a.setAndDefer(b,a.methods[c]);return b};a.load=\nfunction(b,c){var f="https://analytics.tiktok.com/i18n/pixel/events.js";a._i=a._i||{};a._i[b]=[];a._i[b]._u=f;a._t=a._t||{};a._t[b]=+new Date;a._o=a._o||{};a._o[b]=c||{};c=document.createElement("script");c.type="text/javascript";c.async=!0;c.src=f+"?sdkid\\x3d"+b+"\\x26lib\\x3d"+e;b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(c,b)};a.load("CPV80IRC77UF05LN5M8G");a.page()}(window,document,"ttq");\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3272,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(d,g,e){d.TiktokAnalyticsObject=e;var a=d[e]=d[e]||[];a.methods="page track identify instances debug on off once ready alias group enableCookie disableCookie holdConsent revokeConsent grantConsent".split(" ");a.setAndDefer=function(b,c){b[c]=function(){b.push([c].concat(Array.prototype.slice.call(arguments,0)))}};for(d=0;d\u003Ca.methods.length;d++)a.setAndDefer(a,a.methods[d]);a.instance=function(b){b=a._i[b]||[];for(var c=0;c\u003Ca.methods.length;c++)a.setAndDefer(b,a.methods[c]);return b};a.load=\nfunction(b,c){var f="https://analytics.tiktok.com/i18n/pixel/events.js";a._i=a._i||{};a._i[b]=[];a._i[b]._u=f;a._t=a._t||{};a._t[b]=+new Date;a._o=a._o||{};a._o[b]=c||{};c=document.createElement("script");c.type="text/javascript";c.async=!0;c.src=f+"?sdkid\\x3d"+b+"\\x26lib\\x3d"+e;b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(c,b)};a.load("CQ2GIS3C77U1H6D7R350");a.page()}(window,document,"ttq");\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3275,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript data-gtmsrc="https://js.adsrvr.org/up_loader.1.1.0.js" type="text/gtmscript"\u003E\u003C/script\u003E\n\u003Cscript type="text/gtmscript"\u003Ettd_dom_ready(function(){if(typeof TTDUniversalPixelApi==="function"){var a=new TTDUniversalPixelApi;a.init("1bqnrcy",["sksfz51"],"https://insight.adsrvr.org/track/up")}});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3277,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript data-gtmsrc="https://js.adsrvr.org/up_loader.1.1.0.js" type="text/gtmscript"\u003E\u003C/script\u003E\n\u003Cscript type="text/gtmscript"\u003Ettd_dom_ready(function(){if(typeof TTDUniversalPixelApi==="function"){var a=new TTDUniversalPixelApi;a.init("fmzmooz",["s07kzqg"],"https://insight.adsrvr.org/track/up")}});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3282,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript data-gtmsrc="https://js.adsrvr.org/up_loader.1.1.0.js" type="text/gtmscript"\u003E\u003C/script\u003E\n\u003Cscript type="text/gtmscript"\u003Ettd_dom_ready(function(){if(typeof TTDUniversalPixelApi==="function"){var a=new TTDUniversalPixelApi;a.init("o8c6v9k",["1jbnmo6"],"https://insight.adsrvr.org/track/up")}});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3285,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript data-gtmsrc="https://js.adsrvr.org/up_loader.1.1.0.js" type="text/gtmscript"\u003E\u003C/script\u003E\n\u003Cscript type="text/gtmscript"\u003Ettd_dom_ready(function(){if(typeof TTDUniversalPixelApi==="function"){var a=new TTDUniversalPixelApi;a.init("rq09xf0",["inqntkt"],"https://insight.adsrvr.org/track/up")}});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3286,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript data-gtmsrc="https://js.adsrvr.org/up_loader.1.1.0.js" type="text/gtmscript"\u003E\u003C/script\u003E\n\u003Cscript type="text/gtmscript"\u003Ettd_dom_ready(function(){if(typeof TTDUniversalPixelApi==="function"){var a=new TTDUniversalPixelApi;a.init("mfmtrfs",["tg8yvbo"],"https://insight.adsrvr.org/track/up")}});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3288,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript data-gtmsrc="https://js.adsrvr.org/up_loader.1.1.0.js" type="text/gtmscript"\u003E\u003C/script\u003E\n\u003Cscript type="text/gtmscript"\u003Ettd_dom_ready(function(){if(typeof TTDUniversalPixelApi==="function"){var a=new TTDUniversalPixelApi;a.init("ofq3hu9",["k137uvx"],"https://insight.adsrvr.org/track/up")}});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3290,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(d,g,e){d.TiktokAnalyticsObject=e;var a=d[e]=d[e]||[];a.methods="page track identify instances debug on off once ready alias group enableCookie disableCookie holdConsent revokeConsent grantConsent".split(" ");a.setAndDefer=function(b,c){b[c]=function(){b.push([c].concat(Array.prototype.slice.call(arguments,0)))}};for(d=0;d\u003Ca.methods.length;d++)a.setAndDefer(a,a.methods[d]);a.instance=function(b){b=a._i[b]||[];for(var c=0;c\u003Ca.methods.length;c++)a.setAndDefer(b,a.methods[c]);return b};a.load=\nfunction(b,c){var f="https://analytics.tiktok.com/i18n/pixel/events.js";a._i=a._i||{};a._i[b]=[];a._i[b]._u=f;a._t=a._t||{};a._t[b]=+new Date;a._o=a._o||{};a._o[b]=c||{};c=document.createElement("script");c.type="text/javascript";c.async=!0;c.src=f+"?sdkid\\x3d"+b+"\\x26lib\\x3d"+e;b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(c,b)};a.load("CQFLHVBC77UEC0E4F30G");a.page()}(window,document,"ttq");\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3292,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(d,g,e){d.TiktokAnalyticsObject=e;var a=d[e]=d[e]||[];a.methods="page track identify instances debug on off once ready alias group enableCookie disableCookie holdConsent revokeConsent grantConsent".split(" ");a.setAndDefer=function(b,c){b[c]=function(){b.push([c].concat(Array.prototype.slice.call(arguments,0)))}};for(d=0;d\u003Ca.methods.length;d++)a.setAndDefer(a,a.methods[d]);a.instance=function(b){b=a._i[b]||[];for(var c=0;c\u003Ca.methods.length;c++)a.setAndDefer(b,a.methods[c]);return b};a.load=\nfunction(b,c){var f="https://analytics.tiktok.com/i18n/pixel/events.js";a._i=a._i||{};a._i[b]=[];a._i[b]._u=f;a._t=a._t||{};a._t[b]=+new Date;a._o=a._o||{};a._o[b]=c||{};c=document.createElement("script");c.type="text/javascript";c.async=!0;c.src=f+"?sdkid\\x3d"+b+"\\x26lib\\x3d"+e;b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(c,b)};a.load("CQFLL9JC77UCTCQLH0CG");a.page()}(window,document,"ttq");\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3294,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript data-gtmsrc="https://js.adsrvr.org/up_loader.1.1.0.js" type="text/gtmscript"\u003E\u003C/script\u003E\n\u003Cscript type="text/gtmscript"\u003Ettd_dom_ready(function(){if(typeof TTDUniversalPixelApi==="function"){var a=new TTDUniversalPixelApi;a.init("7gz5lu9",["6ly83gc"],"https://insight.adsrvr.org/track/up")}});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3301,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript data-gtmsrc="https://js.adsrvr.org/up_loader.1.1.0.js" type="text/gtmscript"\u003E\u003C/script\u003E\n\u003Cscript type="text/gtmscript"\u003Ettd_dom_ready(function(){if(typeof TTDUniversalPixelApi==="function"){var a=new TTDUniversalPixelApi;a.init("xmoegu9",["mbhdlrx"],"https://insight.adsrvr.org/track/up")}});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3302,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript data-gtmsrc="https://js.adsrvr.org/up_loader.1.1.0.js" type="text/gtmscript"\u003E\u003C/script\u003E\n\u003Cscript type="text/gtmscript"\u003Ettd_dom_ready(function(){if(typeof TTDUniversalPixelApi==="function"){var a=new TTDUniversalPixelApi;a.init("eluvuf2",["bodmz2k"],"https://insight.adsrvr.org/track/up")}});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3303,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(d,g,e){d.TiktokAnalyticsObject=e;var a=d[e]=d[e]||[];a.methods="page track identify instances debug on off once ready alias group enableCookie disableCookie holdConsent revokeConsent grantConsent".split(" ");a.setAndDefer=function(b,c){b[c]=function(){b.push([c].concat(Array.prototype.slice.call(arguments,0)))}};for(d=0;d\u003Ca.methods.length;d++)a.setAndDefer(a,a.methods[d]);a.instance=function(b){b=a._i[b]||[];for(var c=0;c\u003Ca.methods.length;c++)a.setAndDefer(b,a.methods[c]);return b};a.load=\nfunction(b,c){var f="https://analytics.tiktok.com/i18n/pixel/events.js";a._i=a._i||{};a._i[b]=[];a._i[b]._u=f;a._t=a._t||{};a._t[b]=+new Date;a._o=a._o||{};a._o[b]=c||{};c=document.createElement("script");c.type="text/javascript";c.async=!0;c.src=f+"?sdkid\\x3d"+b+"\\x26lib\\x3d"+e;b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(c,b)};a.load("CPP3C6RC77U539HU6RD0");a.page()}(window,document,"ttq");\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 3312,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "hit_timestamp",
              "parameterValue",
              ["macro", 64],
            ],
            ["map", "parameter", "local_date", "parameterValue", ["macro", 65]],
            ["map", "parameter", "local_day", "parameterValue", ["macro", 66]],
            ["map", "parameter", "local_hour", "parameterValue", ["macro", 67]],
          ],
          vtp_eventName: "page_view",
          vtp_measurementIdOverride: ["macro", 14],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 2801,
        },
      ],
      predicates: [
        { function: "_cn", arg0: ["macro", 0], arg1: "/mm/" },
        { function: "_eq", arg0: ["macro", 1], arg1: "gtm.js" },
        { function: "_cn", arg0: ["macro", 0], arg1: "/en/" },
        { function: "_sw", arg0: ["macro", 0], arg1: "/pk/" },
        { function: "_cn", arg0: ["macro", 2], arg1: "events." },
        { function: "_cn", arg0: ["macro", 2], arg1: "/bd/" },
        { function: "_cn", arg0: ["macro", 2], arg1: "/lk/" },
        { function: "_cn", arg0: ["macro", 2], arg1: "/np/" },
        { function: "_cn", arg0: ["macro", 2], arg1: "/smartphone-reno3-pro/" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "\\.oppo\\.com/(fr/|it/|nl/|pl/|es/|uk/|de/|pt/|benl/|befr/|ro/).*",
          ignore_case: true,
        },
        { function: "_eq", arg0: ["macro", 5], arg1: "No" },
        { function: "_eq", arg0: ["macro", 5], arg1: "Yes" },
        { function: "_eq", arg0: ["macro", 7], arg1: "true" },
        { function: "_eq", arg0: ["macro", 8], arg1: "yes" },
        { function: "_eq", arg0: ["macro", 1], arg1: "GDPR Pref Allows 3" },
        { function: "_eq", arg0: ["macro", 1], arg1: "gtm.dom" },
        { function: "_eq", arg0: ["macro", 9], arg1: "OPT-1" },
        { function: "_cn", arg0: ["macro", 6], arg1: "permit" },
        { function: "_cn", arg0: ["macro", 6], arg1: "2" },
        { function: "_eq", arg0: ["macro", 1], arg1: "gtm.load" },
        { function: "_eq", arg0: ["macro", 1], arg1: "GDPR Pref Allows 2" },
        {
          function: "_re",
          arg0: ["macro", 0],
          arg1: "(/cn/service/shouji|/cn/smartphones/series-find-x/find-x3-series|/cn/service/store|/cn/privacy)",
          ignore_case: true,
        },
        { function: "_eq", arg0: ["macro", 10], arg1: "true" },
        { function: "_cn", arg0: ["macro", 2], arg1: "oppo.com/cn/" },
        { function: "_cn", arg0: ["macro", 0], arg1: "/cn/" },
        {
          function: "_re",
          arg0: ["macro", 0],
          arg1: "^/(id|in|th|my|sg|vn|ph|en|cn|tw|au|befr|benl|chde|chfr|de|es|fr|ie|it|nl|nz|uk|pt|lufr|lude)/",
        },
        {
          function: "_re",
          arg0: ["macro", 11],
          arg1: "Product Details Page|Events Page",
        },
        {
          function: "_eq",
          arg0: ["macro", 1],
          arg1: "TikTok pixel on Mexico OPPO page",
        },
        { function: "_cn", arg0: ["macro", 2], arg1: "www.oppo.com/cl/" },
        {
          function: "_re",
          arg0: ["macro", 12],
          arg1: "Product Details Page",
          ignore_case: true,
        },
        {
          function: "_re",
          arg0: ["macro", 13],
          arg1: "CTA Button",
          ignore_case: true,
        },
        { function: "_eq", arg0: ["macro", 1], arg1: "uaEvent" },
        { function: "_eq", arg0: ["macro", 14], arg1: "undefined" },
        { function: "_eq", arg0: ["macro", 1], arg1: "gtm.init" },
        { function: "_eq", arg0: ["macro", 30], arg1: "undefined" },
        { function: "_eq", arg0: ["macro", 1], arg1: "gtm.init_consent" },
        { function: "_eq", arg0: ["macro", 1], arg1: "cookie_prefs_set" },
        { function: "_eq", arg0: ["macro", 35], arg1: "undefined" },
        { function: "_eq", arg0: ["macro", 37], arg1: "undefined" },
        { function: "_eq", arg0: ["macro", 38], arg1: "undefined" },
        { function: "_eq", arg0: ["macro", 1], arg1: "gtm.click" },
        {
          function: "_re",
          arg0: ["macro", 13],
          arg1: "where to buy",
          ignore_case: true,
        },
        {
          function: "_css",
          arg0: ["macro", 34],
          arg1: "div.offline-other-services  span",
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "\\.oppo\\.com/(in/|ph/|th/|tw/|id/|sg/|pk/|my/|bd/|eg/)shops/.*",
        },
        {
          function: "_css",
          arg0: ["macro", 34],
          arg1: "div.detailStore-other-servicesPc  span",
        },
        { function: "_cn", arg0: ["macro", 0], arg1: "/it/shops/" },
        { function: "_eq", arg0: ["macro", 1], arg1: "ga4Event" },
        { function: "_cn", arg0: ["macro", 114], arg1: "id.oppo.com" },
        { function: "_eq", arg0: ["macro", 115], arg1: "true" },
        { function: "_sw", arg0: ["macro", 0], arg1: "/my/" },
        {
          function: "_cn",
          arg0: ["macro", 2],
          arg1: "https://www.oppo.com/my/smartphones/series-find-n/find-n2-flip/",
        },
        {
          function: "_cn",
          arg0: ["macro", 2],
          arg1: "/mm/smartphones/series-reno/reno11/",
        },
        {
          function: "_cn",
          arg0: ["macro", 2],
          arg1: "/mm/smartphones/series-reno/reno11-f/",
        },
        {
          function: "_cn",
          arg0: ["macro", 2],
          arg1: "imagine-if.oppo.com/mx/submit/",
        },
        { function: "_cn", arg0: ["macro", 113], arg1: "events_interaction" },
        { function: "_cn", arg0: ["macro", 74], arg1: "Submit Work" },
        { function: "_cn", arg0: ["macro", 78], arg1: "Enviar" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "www.oppo.com",
          ignore_case: true,
        },
        { function: "_eq", arg0: ["macro", 1], arg1: "GDPR Pref Allows 4" },
        {
          function: "_cn",
          arg0: ["macro", 2],
          arg1: "https://www.oppo.com/mx/",
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "oppo.com/py/",
          ignore_case: true,
        },
        {
          function: "_re",
          arg0: ["macro", 113],
          arg1: "click_navigation",
          ignore_case: true,
        },
        {
          function: "_re",
          arg0: ["macro", 116],
          arg1: "Top Navigation",
          ignore_case: true,
        },
        {
          function: "_re",
          arg0: ["macro", 117],
          arg1: "Dónde Comprar",
          ignore_case: true,
        },
        { function: "_cn", arg0: ["macro", 2], arg1: "oppo.com/jp/" },
        { function: "_cn", arg0: ["macro", 0], arg1: "/nz/" },
        { function: "_cn", arg0: ["macro", 2], arg1: "/tw/" },
        { function: "_cn", arg0: ["macro", 2], arg1: "https://oppojapan.com/" },
        { function: "_sw", arg0: ["macro", 0], arg1: "/ng/" },
        { function: "_cn", arg0: ["macro", 2], arg1: "/ke/" },
        {
          function: "_cn",
          arg0: ["macro", 2],
          arg1: "https://www.oppo.com/tn/",
        },
        { function: "_cn", arg0: ["macro", 2], arg1: "/sa/" },
        { function: "_cn", arg0: ["macro", 0], arg1: "/au/" },
        {
          function: "_eq",
          arg0: ["macro", 2],
          arg1: "https://www.oppo.com/pk/bookonline/",
        },
        {
          function: "_css",
          arg0: ["macro", 34],
          arg1: "#oc-container \u003E div.submit \u003E div",
        },
        { function: "_cn", arg0: ["macro", 0], arg1: "/mx/" },
        { function: "_cn", arg0: ["macro", 118], arg1: "ご購入はこちら" },
        { function: "_eq", arg0: ["macro", 1], arg1: "gtm.linkClick" },
        {
          function: "_re",
          arg0: ["macro", 119],
          arg1: "(^$|((^|,)1384335_1615($|,)))",
        },
        { function: "_cn", arg0: ["macro", 2], arg1: ".oppo.com/cn/" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "oppo\\.com/(cn|th|my|in|id|eg)/(\\?.*)?$",
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "oppo\\.com/(fr|uk)/(\\?.*)?$",
        },
        { function: "_re", arg0: ["macro", 0], arg1: "^/jo-(ar|en)/" },
        { function: "_sw", arg0: ["macro", 0], arg1: "/iq/" },
        { function: "_sw", arg0: ["macro", 0], arg1: "/za/" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "\\.oppo\\.com/(fr/|it/|uk/|de/|es/|th/|en/|mx/).*",
          ignore_case: true,
        },
        { function: "_sw", arg0: ["macro", 0], arg1: "/dz/" },
        { function: "_cn", arg0: ["macro", 2], arg1: "//www.oppo.com/my/" },
        {
          function: "_cn",
          arg0: ["macro", 2],
          arg1: "//www.oppo.com/my/smartphones/series-find-x/find-x3-pro/",
        },
        { function: "_cn", arg0: ["macro", 120], arg1: "my" },
        {
          function: "_re",
          arg0: ["macro", 119],
          arg1: "(^$|((^|,)1384335_1947($|,)))",
        },
        { function: "_sw", arg0: ["macro", 0], arg1: "/ae/" },
        { function: "_cn", arg0: ["macro", 5], arg1: "Yes" },
        { function: "_cn", arg0: ["macro", 8], arg1: "no" },
        { function: "_re", arg0: ["macro", 1], arg1: ".*" },
        { function: "_cn", arg0: ["macro", 0], arg1: "series-find-x" },
        {
          function: "_re",
          arg0: ["macro", 21],
          arg1: "^(uk|fr)$",
          ignore_case: true,
        },
        { function: "_cn", arg0: ["macro", 2], arg1: "/newsroom/" },
        { function: "_cn", arg0: ["macro", 0], arg1: "/pe/" },
        {
          function: "_re",
          arg0: ["macro", 0],
          arg1: "(/kz/)|(/kzkk/)",
          ignore_case: true,
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "https://www.oppo.com/co/",
          ignore_case: true,
        },
        { function: "_sw", arg0: ["macro", 0], arg1: "/tn/" },
        { function: "_sw", arg0: ["macro", 0], arg1: "/ma/" },
        { function: "_re", arg0: ["macro", 0], arg1: "^/eg(-en)?/" },
        {
          function: "_cn",
          arg0: ["macro", 2],
          arg1: "https://www.oppo.com/il/",
        },
        { function: "_sw", arg0: ["macro", 0], arg1: "/sa/" },
        { function: "_sw", arg0: ["macro", 43], arg1: "Firstnavigation" },
        { function: "_cn", arg0: ["macro", 2], arg1: "oppo.com/at/" },
        { function: "_eq", arg0: ["macro", 123], arg1: "yes" },
        { function: "_cn", arg0: ["macro", 2], arg1: "www.oppo.com/pe/" },
        { function: "_eq", arg0: ["macro", 1], arg1: "acceptAll" },
        { function: "_eq", arg0: ["macro", 0], arg1: "/ae/" },
        { function: "_cn", arg0: ["macro", 2], arg1: "oppo.com/hr/" },
        { function: "_cn", arg0: ["macro", 2], arg1: "oppo.com/gr/" },
        {
          function: "_re",
          arg0: ["macro", 0],
          arg1: "/ae/smartphones/series-reno/reno8-t-5g/|/ae/smartphones/series-reno/reno8-t/",
          ignore_case: true,
        },
        { function: "_eq", arg0: ["macro", 128], arg1: "CTA Button" },
        { function: "_eq", arg0: ["macro", 129], arg1: "Buy Now" },
        {
          function: "_re",
          arg0: ["macro", 0],
          arg1: "/ae/smartphones/series-reno/reno8-t/",
          ignore_case: true,
        },
        {
          function: "_re",
          arg0: ["macro", 0],
          arg1: "/ae/smartphones/series-reno/reno8-t-5g/",
          ignore_case: true,
        },
        { function: "_cn", arg0: ["macro", 2], arg1: "oppo.com/ru/" },
        {
          function: "_re",
          arg0: ["macro", 0],
          arg1: "/za/smartphones/series-reno(/reno10-pro-plus/|/reno10/)",
          ignore_case: true,
        },
        { function: "_eq", arg0: ["macro", 0], arg1: "/za/" },
        { function: "_eq", arg0: ["macro", 130], arg1: "undefined" },
        {
          function: "_re",
          arg0: ["macro", 0],
          arg1: "/ae/smartphones/series-reno/(reno10-pro-plus|reno10-pro|reno10)/",
          ignore_case: true,
        },
        { function: "_eq", arg0: ["macro", 0], arg1: "/sa-en/" },
        {
          function: "_re",
          arg0: ["macro", 0],
          arg1: "/sa-en/smartphones/series-reno/(reno10-pro-plus|reno10-pro|reno10)/",
          ignore_case: true,
        },
        { function: "_eq", arg0: ["macro", 0], arg1: "/iq/" },
        {
          function: "_re",
          arg0: ["macro", 0],
          arg1: "/iq/smartphones/series-reno/reno10/",
          ignore_case: true,
        },
        { function: "_eq", arg0: ["macro", 0], arg1: "/ma/" },
        { function: "_eq", arg0: ["macro", 0], arg1: "/eg/" },
        {
          function: "_re",
          arg0: ["macro", 0],
          arg1: "/eg/smartphones/series-reno/reno8-t/",
          ignore_case: true,
        },
        {
          function: "_re",
          arg0: ["macro", 0],
          arg1: "/lb-ar/smartphones/series-reno/reno8-t/",
          ignore_case: true,
        },
        { function: "_cn", arg0: ["macro", 2], arg1: "oppo.com/tz/" },
        { function: "_eq", arg0: ["macro", 11], arg1: "Home Page" },
        { function: "_eq", arg0: ["macro", 11], arg1: "Product Details Page" },
        {
          function: "_re",
          arg0: ["macro", 0],
          arg1: "^(/mx/smartphones/|/mx/audio/|/mx/wearables/)$",
          ignore_case: true,
        },
        { function: "_eq", arg0: ["macro", 113], arg1: "cta_button_click" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "www.oppo.com/jo-(en|ar)/",
        },
        { function: "_cn", arg0: ["macro", 2], arg1: "www.oppo.com/br/" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "www.oppo.com/eg/",
          ignore_case: true,
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "www.oppo.com/jo-en/",
          ignore_case: true,
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "www.oppo.com/sa-en/",
          ignore_case: true,
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "www.oppo.com/kz/",
          ignore_case: true,
        },
      ],
      rules: [
        [
          ["if", 0, 1],
          ["add", 3, 10, 76, 131, 155],
        ],
        [
          ["if", 1, 2],
          ["add", 4, 5, 64, 90, 133, 134, 141],
        ],
        [
          ["if", 1, 3],
          ["unless", 4],
          ["add", 6, 7],
        ],
        [
          ["if", 1, 5],
          ["add", 8, 77, 132, 154],
        ],
        [
          ["if", 1, 6],
          ["add", 9, 74, 129],
        ],
        [
          ["if", 1, 7],
          ["add", 11, 75, 128],
        ],
        [
          ["if", 1, 8],
          ["unless", 9],
          ["add", 12],
        ],
        [
          ["if", 1, 10],
          ["add", 13, 16, 137, 138, 157, 107],
        ],
        [
          ["if", 1, 11, 12],
          ["add", 14, 107],
        ],
        [
          ["if", 1, 11, 13],
          ["add", 14, 107],
        ],
        [
          ["if", 11, 14],
          ["add", 14, 22, 23, 107],
        ],
        [
          ["if", 10, 15],
          ["add", 15, 135],
        ],
        [
          ["if", 1],
          ["unless", 16],
          ["add", 0],
        ],
        [
          ["if", 11, 17, 18, 19],
          ["add", 16, 137, 138],
        ],
        [
          ["if", 11, 20],
          ["add", 16, 89],
        ],
        [
          ["if", 1],
          ["unless", 24],
          ["add", 17],
        ],
        [
          ["if", 11, 15],
          ["add", 18],
        ],
        [
          ["if", 15, 25, 26],
          ["add", 19],
        ],
        [
          ["if", 27],
          ["add", 20],
        ],
        [
          ["if", 28, 29, 30, 31],
          ["add", 21],
        ],
        [
          ["if", 33],
          ["unless", 32],
          ["add", 22],
        ],
        [
          ["if", 1],
          ["unless", 34],
          ["add", 23],
        ],
        [
          ["if", 11, 35],
          ["add", 1, 24],
        ],
        [
          ["if", 11, 36],
          ["add", 24],
        ],
        [
          ["if", 31],
          ["add", 25, 26],
        ],
        [
          ["if", 40],
          ["unless", 37, 38, 39],
          ["add", 25, 26],
        ],
        [
          ["if", 15, 28],
          ["add", 27, 105],
        ],
        [
          ["if", 28, 29, 31, 41],
          ["add", 28, 109],
        ],
        [
          ["if", 40, 42, 43],
          ["add", 29, 30],
        ],
        [
          ["if", 40, 43, 44],
          ["add", 29, 30],
        ],
        [
          ["if", 40, 42, 45],
          ["add", 31],
        ],
        [
          ["if", 40, 44, 45],
          ["add", 31],
        ],
        [
          ["if", 46],
          ["add", 32, 33, 40],
        ],
        [
          ["if", 1, 47, 48],
          ["add", 34, 35],
        ],
        [
          ["if", 1, 49],
          ["add", 36, 39, 164],
        ],
        [
          ["if", 15, 50],
          ["add", 37, 38, 165],
        ],
        [
          ["if", 15, 51],
          ["add", 41],
        ],
        [
          ["if", 15, 52],
          ["add", 42],
        ],
        [
          ["if", 46, 53, 54, 55, 56],
          ["add", 43],
        ],
        [
          ["if", 10, 15, 57],
          ["add", 44],
        ],
        [
          ["if", 11, 58],
          ["add", 44, 135, 157, 137, 138],
        ],
        [
          ["if", 11, 12, 15, 57],
          ["add", 44],
        ],
        [
          ["if", 1, 59],
          ["add", 45, 46, 99, 199],
        ],
        [
          ["if", 15, 60],
          ["add", 47],
        ],
        [
          ["if", 46, 60, 61, 62, 63],
          ["add", 48],
        ],
        [
          ["if", 1],
          ["add", 49, 50, 51, 52, 61, 96, 104, 53, 54, 55, 56, 57, 58, 59, 60],
        ],
        [
          ["if", 1, 3],
          ["add", 62, 68, 73, 130, 150, 156, 197],
        ],
        [
          ["if", 1, 64],
          ["add", 63],
        ],
        [
          ["if", 1, 65],
          ["add", 65],
        ],
        [
          ["if", 1, 66],
          ["add", 66],
        ],
        [
          ["if", 1, 67],
          ["add", 67],
        ],
        [
          ["if", 1, 68],
          ["add", 69, 116, 148],
        ],
        [
          ["if", 1, 69],
          ["add", 70, 115, 149],
        ],
        [
          ["if", 1, 70],
          ["add", 71],
        ],
        [
          ["if", 1, 71],
          ["add", 72, 147],
        ],
        [
          ["if", 1, 72],
          ["add", 78, 79, 80],
        ],
        [
          ["if", 40, 73, 74],
          ["add", 81],
        ],
        [
          ["if", 1, 75],
          ["add", 82, 95, 112, 190],
        ],
        [
          ["if", 76, 77, 78],
          ["add", 83],
        ],
        [
          ["if", 1, 79],
          ["add", 84],
        ],
        [
          ["if", 1, 80],
          ["add", 85],
        ],
        [
          ["if", 1, 13, 81],
          ["add", 85],
        ],
        [
          ["if", 58, 81],
          ["add", 85],
        ],
        [
          ["if", 1, 82],
          ["add", 86, 121, 122],
        ],
        [
          ["if", 1, 83],
          ["add", 87, 123, 124, 194],
        ],
        [
          ["if", 1, 84],
          ["add", 88, 113, 144],
        ],
        [
          ["if", 1, 11, 17, 18, 85],
          ["add", 89],
        ],
        [
          ["if", 1, 10, 85],
          ["add", 89],
        ],
        [
          ["if", 1, 86],
          ["add", 91, 120, 186],
        ],
        [
          ["if", 1, 87],
          ["add", 92],
        ],
        [
          ["if", 77, 88, 89, 90],
          ["add", 93],
        ],
        [
          ["if", 1, 91],
          ["add", 94, 127, 177, 189, 192],
        ],
        [
          ["if", 15, 95],
          ["add", 97],
        ],
        [
          ["if", 11, 17, 18, 19, 96],
          ["add", 98],
        ],
        [
          ["if", 11, 20, 96],
          ["add", 98],
        ],
        [
          ["if", 11, 19],
          ["add", 2, 106],
        ],
        [
          ["if", 15, 97],
          ["add", 100],
        ],
        [
          ["if", 1, 98],
          ["add", 101, 111],
        ],
        [
          ["if", 1, 99],
          ["add", 102],
        ],
        [
          ["if", 1, 100],
          ["add", 103, 110, 152, 170],
        ],
        [
          ["if", 11, 35],
          ["unless", 17],
          ["add", 108],
        ],
        [
          ["if", 1, 101],
          ["add", 114],
        ],
        [
          ["if", 1, 102],
          ["add", 117, 118, 145, 191],
        ],
        [
          ["if", 1, 103],
          ["add", 119, 142],
        ],
        [
          ["if", 1, 104],
          ["add", 125],
        ],
        [
          ["if", 1, 105],
          ["add", 126, 143],
        ],
        [
          ["if", 11, 12, 15],
          ["add", 135],
        ],
        [
          ["if", 11, 13, 15],
          ["add", 135],
        ],
        [
          ["if", 31, 106],
          ["add", 136],
        ],
        [
          ["if", 15, 59],
          ["add", 139, 146, 151, 166, 181],
        ],
        [
          ["if", 12, 15, 107],
          ["add", 140],
        ],
        [
          ["if", 15, 107, 108],
          ["add", 140],
        ],
        [
          ["if", 14, 107],
          ["add", 140],
        ],
        [
          ["if", 15, 109],
          ["add", 153, 201],
        ],
        [
          ["if", 11, 110],
          ["add", 157],
        ],
        [
          ["if", 15, 111],
          ["add", 158, 171],
        ],
        [
          ["if", 15, 108, 112],
          ["add", 159],
        ],
        [
          ["if", 12, 15, 112],
          ["add", 159],
        ],
        [
          ["if", 14, 112],
          ["add", 159],
        ],
        [
          ["if", 15, 108, 113],
          ["add", 160],
        ],
        [
          ["if", 12, 15, 113],
          ["add", 160],
        ],
        [
          ["if", 14, 113],
          ["add", 160],
        ],
        [
          ["if", 46, 114, 115, 116],
          ["add", 161],
        ],
        [
          ["if", 15, 117],
          ["add", 162],
        ],
        [
          ["if", 15, 118],
          ["add", 163],
        ],
        [
          ["if", 19, 119],
          ["add", 167],
        ],
        [
          ["if", 15, 120],
          ["add", 168],
        ],
        [
          ["if", 15, 121],
          ["add", 168],
        ],
        [
          ["if", 15],
          ["unless", 122],
          ["add", 169],
        ],
        [
          ["if", 15, 123],
          ["add", 171],
        ],
        [
          ["if", 15, 124],
          ["add", 172],
        ],
        [
          ["if", 15, 125],
          ["add", 172],
        ],
        [
          ["if", 15, 126],
          ["add", 173],
        ],
        [
          ["if", 15, 127],
          ["add", 173],
        ],
        [
          ["if", 15, 128],
          ["add", 174],
        ],
        [
          ["if", 15, 129],
          ["add", 175],
        ],
        [
          ["if", 15, 130],
          ["add", 175],
        ],
        [
          ["if", 15, 131],
          ["add", 176],
        ],
        [
          ["if", 15, 132],
          ["add", 178, 179, 180],
        ],
        [
          ["if", 15, 75, 133],
          ["add", 182],
        ],
        [
          ["if", 15, 75, 134],
          ["add", 183],
        ],
        [
          ["if", 15, 75, 135],
          ["add", 184],
        ],
        [
          ["if", 46, 75, 134, 136],
          ["add", 185],
        ],
        [
          ["if", 15, 137],
          ["add", 187],
        ],
        [
          ["if", 15, 138],
          ["add", 188, 200, 202],
        ],
        [
          ["if", 15, 139],
          ["add", 193],
        ],
        [
          ["if", 15, 140],
          ["add", 195],
        ],
        [
          ["if", 15, 141],
          ["add", 196],
        ],
        [
          ["if", 15, 142],
          ["add", 198],
        ],
        [
          ["if", 1, 21],
          ["block", 16],
        ],
        [
          ["if", 1, 22],
          ["block", 16],
        ],
        [
          ["if", 15, 23],
          ["block", 16, 135],
        ],
        [
          ["if", 92, 93, 94],
          ["block", 96],
        ],
        [
          ["if", 1, 23],
          ["block", 137, 138],
        ],
        [
          ["if", 1, 24],
          ["block", 157],
        ],
      ],
    },
    runtime: [
      [
        50,
        "__cvt_1384335_1609",
        [46, "a"],
        [52, "b", ["require", "createQueue"]],
        [52, "c", ["require", "callInWindow"]],
        [52, "d", ["require", "aliasInWindow"]],
        [52, "e", ["require", "copyFromWindow"]],
        [52, "f", ["require", "setInWindow"]],
        [52, "g", ["require", "injectScript"]],
        [52, "h", ["require", "makeTableMap"]],
        [52, "i", ["require", "makeNumber"]],
        [52, "j", ["require", "getType"]],
        [52, "k", ["require", "copyFromDataLayer"]],
        [52, "l", ["require", "Math"]],
        [52, "m", ["require", "logToConsole"]],
        [52, "n", [30, ["e", "_fbq_gtm_ids"], [7]]],
        [52, "o", [17, [15, "a"], "pixelId"]],
        [
          52,
          "p",
          [
            7,
            "AddPaymentInfo",
            "AddToCart",
            "AddToWishlist",
            "CompleteRegistration",
            "Contact",
            "CustomizeProduct",
            "Donate",
            "FindLocation",
            "InitiateCheckout",
            "Lead",
            "PageView",
            "Purchase",
            "Schedule",
            "Search",
            "StartTrial",
            "SubmitApplication",
            "Subscribe",
            "ViewContent",
          ],
        ],
        [52, "q", ["k", "ecommerce", 1]],
        [
          52,
          "r",
          [
            51,
            "",
            [7, "bg"],
            ["m", [15, "bg"]],
            [2, [15, "a"], "gtmOnFailure", [7]],
          ],
        ],
        [
          52,
          "s",
          [
            51,
            "",
            [7, "bg", "bh"],
            [
              55,
              "bi",
              [15, "bh"],
              [
                46,
                [
                  22,
                  [2, [15, "bh"], "hasOwnProperty", [7, [15, "bi"]]],
                  [
                    46,
                    [43, [15, "bg"], [15, "bi"], [16, [15, "bh"], [15, "bi"]]],
                  ],
                ],
              ],
            ],
            [36, [15, "bg"]],
          ],
        ],
        [
          52,
          "t",
          [
            51,
            "",
            [7, "bg"],
            [
              36,
              [
                8,
                "id",
                [17, [15, "bg"], "id"],
                "quantity",
                [17, [15, "bg"], "quantity"],
              ],
            ],
          ],
        ],
        [41, "u", "v", "w"],
        [
          22,
          [17, [15, "a"], "enhancedEcommerce"],
          [
            46,
            [
              22,
              [28, [15, "q"]],
              [
                46,
                [
                  36,
                  [
                    "r",
                    'Facebook Pixel: No valid "ecommerce" object found in dataLayer',
                  ],
                ],
              ],
            ],
            [
              22,
              [17, [15, "q"], "detail"],
              [46, [3, "u", "ViewContent"], [3, "v", "detail"]],
              [
                46,
                [
                  22,
                  [17, [15, "q"], "add"],
                  [46, [3, "u", "AddToCart"], [3, "v", "add"]],
                  [
                    46,
                    [
                      22,
                      [17, [15, "q"], "checkout"],
                      [46, [3, "u", "InitiateCheckout"], [3, "v", "checkout"]],
                      [
                        46,
                        [
                          22,
                          [17, [15, "q"], "purchase"],
                          [46, [3, "u", "Purchase"], [3, "v", "purchase"]],
                          [
                            46,
                            [
                              36,
                              [
                                "r",
                                'Facebook Pixel: Most recently pushed "ecommerce" object must be one of types "detail", "add", "checkout" or "purchase".',
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
            ],
            [
              22,
              [
                30,
                [28, [17, [16, [15, "q"], [15, "v"]], "products"]],
                [
                  21,
                  ["j", [17, [16, [15, "q"], [15, "v"]], "products"]],
                  "array",
                ],
              ],
              [
                46,
                [
                  36,
                  [
                    "r",
                    'Facebook pixel: Most recently pushed "ecommerce" object did not have a valid "products" array.',
                  ],
                ],
              ],
            ],
            [
              3,
              "w",
              [
                8,
                "content_type",
                "product",
                "contents",
                [
                  2,
                  [17, [16, [15, "q"], [15, "v"]], "products"],
                  "map",
                  [7, [15, "t"]],
                ],
                "value",
                [
                  2,
                  [17, [16, [15, "q"], [15, "v"]], "products"],
                  "reduce",
                  [
                    7,
                    [
                      51,
                      "",
                      [7, "bg", "bh"],
                      [
                        52,
                        "bi",
                        [
                          10,
                          [
                            2,
                            [15, "l"],
                            "round",
                            [
                              7,
                              [
                                26,
                                [
                                  26,
                                  ["i", [30, [17, [15, "bh"], "price"], 0]],
                                  [30, [17, [15, "bh"], "quantity"], 1],
                                ],
                                100,
                              ],
                            ],
                          ],
                          100,
                        ],
                      ],
                      [36, [0, [15, "bg"], [15, "bi"]]],
                    ],
                    0,
                  ],
                ],
                "currency",
                [30, [17, [15, "q"], "currencyCode"], "USD"],
              ],
            ],
            [
              22,
              [
                18,
                [
                  2,
                  [7, "InitiateCheckout", "Purchase"],
                  "indexOf",
                  [7, [15, "u"]],
                ],
                [27, 1],
              ],
              [
                46,
                [
                  43,
                  [15, "w"],
                  "num_items",
                  [
                    2,
                    [17, [16, [15, "q"], [15, "v"]], "products"],
                    "reduce",
                    [
                      7,
                      [
                        51,
                        "",
                        [7, "bg", "bh"],
                        [
                          36,
                          [
                            0,
                            [15, "bg"],
                            ["i", [30, [17, [15, "bh"], "quantity"], 1]],
                          ],
                        ],
                      ],
                      0,
                    ],
                  ],
                ],
              ],
            ],
          ],
        ],
        [
          52,
          "x",
          [
            39,
            [
              1,
              [17, [15, "a"], "advancedMatchingList"],
              [17, [17, [15, "a"], "advancedMatchingList"], "length"],
            ],
            ["h", [17, [15, "a"], "advancedMatchingList"], "name", "value"],
            [8],
          ],
        ],
        [
          52,
          "y",
          [
            39,
            [
              1,
              [17, [15, "a"], "objectPropertyList"],
              [17, [17, [15, "a"], "objectPropertyList"], "length"],
            ],
            ["h", [17, [15, "a"], "objectPropertyList"], "name", "value"],
            [8],
          ],
        ],
        [
          52,
          "z",
          [
            39,
            [
              20,
              ["j", [17, [15, "a"], "objectPropertiesFromVariable"]],
              "object",
            ],
            [17, [15, "a"], "objectPropertiesFromVariable"],
            [8],
          ],
        ],
        [52, "ba", ["s", [15, "z"], [15, "y"]]],
        [52, "bb", ["s", [30, [15, "w"], [8]], [15, "ba"]]],
        [
          3,
          "u",
          [
            30,
            [15, "u"],
            [
              39,
              [20, [17, [15, "a"], "eventName"], "custom"],
              [17, [15, "a"], "customEventName"],
              [
                39,
                [20, [17, [15, "a"], "eventName"], "variable"],
                [17, [15, "a"], "variableEventName"],
                [17, [15, "a"], "standardEventName"],
              ],
            ],
          ],
        ],
        [
          52,
          "bc",
          [
            39,
            [20, [2, [15, "p"], "indexOf", [7, [15, "u"]]], [27, 1]],
            "trackSingleCustom",
            "trackSingle",
          ],
        ],
        [
          52,
          "bd",
          [39, [20, [17, [15, "a"], "consent"], false], "revoke", "grant"],
        ],
        [
          52,
          "be",
          [
            51,
            "",
            [7],
            [41, "bg"],
            [3, "bg", ["e", "fbq"]],
            [22, [15, "bg"], [46, [36, [15, "bg"]]]],
            [
              "f",
              "fbq",
              [
                51,
                "",
                [7],
                [52, "bh", ["e", "fbq.callMethod.apply"]],
                [
                  22,
                  [15, "bh"],
                  [46, ["c", "fbq.callMethod.apply", [45], [15, "arguments"]]],
                  [46, ["c", "fbq.queue.push", [15, "arguments"]]],
                ],
              ],
            ],
            ["d", "_fbq", "fbq"],
            ["b", "fbq.queue"],
            [36, ["e", "fbq"]],
          ],
        ],
        [52, "bf", ["be"]],
        ["bf", "consent", [15, "bd"]],
        [
          22,
          [17, [15, "a"], "dpoLDU"],
          [
            46,
            [
              "bf",
              "dataProcessingOptions",
              [7, "LDU"],
              ["i", [17, [15, "a"], "dpoCountry"]],
              ["i", [17, [15, "a"], "dpoState"]],
            ],
          ],
        ],
        [
          2,
          [2, [15, "o"], "split", [7, ","]],
          "forEach",
          [
            7,
            [
              51,
              "",
              [7, "bg"],
              [
                22,
                [20, [2, [15, "n"], "indexOf", [7, [15, "bg"]]], [27, 1]],
                [
                  46,
                  [
                    22,
                    [17, [15, "a"], "disableAutoConfig"],
                    [46, ["bf", "set", "autoConfig", false, [15, "bg"]]],
                  ],
                  [
                    22,
                    [17, [15, "a"], "disablePushState"],
                    [46, ["f", "fbq.disablePushState", true]],
                  ],
                  ["bf", "init", [15, "bg"], [15, "x"]],
                  ["bf", "set", "agent", "tmSimo-GTM-WebTemplate", [15, "bg"]],
                  [2, [15, "n"], "push", [7, [15, "bg"]]],
                  ["f", "_fbq_gtm_ids", [15, "n"], true],
                ],
              ],
              [
                22,
                [17, [15, "a"], "eventId"],
                [
                  46,
                  [
                    "bf",
                    [15, "bc"],
                    [15, "bg"],
                    [15, "u"],
                    [15, "bb"],
                    [8, "eventID", [17, [15, "a"], "eventId"]],
                  ],
                ],
                [46, ["bf", [15, "bc"], [15, "bg"], [15, "u"], [15, "bb"]]],
              ],
            ],
          ],
        ],
        [
          "g",
          "https://connect.facebook.net/en_US/fbevents.js",
          [17, [15, "a"], "gtmOnSuccess"],
          [17, [15, "a"], "gtmOnFailure"],
          "fbPixel",
        ],
      ],
      [
        50,
        "__cvt_1384335_2377",
        [46, "a"],
        [52, "b", ["require", "injectScript"]],
        [52, "c", ["require", "encodeUriComponent"]],
        [52, "d", ["c", [17, [15, "a"], "id"]]],
        [
          52,
          "e",
          [
            0,
            "https://analytics.tiktok.com/i18n/pixel/sdk.js?sdkid=",
            [15, "d"],
          ],
        ],
        [
          "b",
          [15, "e"],
          [17, [15, "a"], "gtmOnSuccess"],
          [17, [15, "a"], "gtmOnFailure"],
        ],
      ],
      [
        50,
        "__cvt_1384335_2816",
        [46, "a"],
        [
          52,
          "b",
          [
            13,
            [41, "$0"],
            [3, "$0", ["require", "createQueue"]],
            ["$0", "dataLayer"],
          ],
        ],
        [52, "c", ["require", "gtagSet"]],
        [52, "d", ["require", "logToConsole"]],
        [52, "e", ["require", "makeNumber"]],
        [52, "f", ["require", "makeTableMap"]],
        [52, "g", ["require", "setDefaultConsentState"]],
        [52, "h", ["require", "updateConsentState"]],
        [
          52,
          "i",
          [
            39,
            [20, [17, [15, "a"], "command"], "default"],
            [15, "g"],
            [15, "h"],
          ],
        ],
        [
          52,
          "j",
          [
            8,
            "ad_storage",
            [17, [15, "a"], "ad_storage"],
            "analytics_storage",
            [17, [15, "a"], "analytics_storage"],
            "ad_user_data",
            [17, [15, "a"], "ad_user_data"],
            "ad_personalization",
            [17, [15, "a"], "ad_personalization"],
            "personalization_storage",
            [17, [15, "a"], "personalization_storage"],
            "functionality_storage",
            [17, [15, "a"], "functionality_storage"],
            "security_storage",
            [17, [15, "a"], "security_storage"],
          ],
        ],
        [
          22,
          [
            1,
            [20, [17, [15, "a"], "command"], "default"],
            [18, ["e", [17, [15, "a"], "wait_for_update"]], 0],
          ],
          [
            46,
            [
              43,
              [15, "j"],
              "wait_for_update",
              ["e", [17, [15, "a"], "wait_for_update"]],
            ],
          ],
        ],
        [
          22,
          [
            1,
            [20, [17, [15, "a"], "command"], "default"],
            [21, [17, [15, "a"], "regions"], "all"],
          ],
          [
            46,
            [
              43,
              [15, "j"],
              "region",
              [
                2,
                [2, [17, [15, "a"], "regions"], "split", [7, ","]],
                "map",
                [7, [51, "", [7, "k"], [36, [2, [15, "k"], "trim", [7]]]]],
              ],
            ],
          ],
        ],
        [
          "c",
          [
            8,
            "url_passthrough",
            [30, [17, [15, "a"], "url_passthrough"], false],
            "ads_data_redaction",
            [30, [17, [15, "a"], "ads_data_redaction"], false],
          ],
        ],
        ["i", [15, "j"]],
        [
          22,
          [17, [15, "a"], "sendDataLayer"],
          [
            46,
            [
              43,
              [15, "j"],
              "event",
              [0, "gtm_consent_", [17, [15, "a"], "command"]],
            ],
            ["b", [15, "j"]],
          ],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [50, "__c", [46, "a"], [36, [17, [15, "a"], "value"]]],
      [
        50,
        "__cid",
        [46, "a"],
        [
          36,
          [
            17,
            [
              13,
              [41, "$0"],
              [3, "$0", ["require", "getContainerVersion"]],
              ["$0"],
            ],
            "containerId",
          ],
        ],
      ],
      [
        50,
        "__cl",
        [46, "a"],
        [52, "b", ["require", "internal.enableAutoEventOnClick"]],
        ["b"],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ctv",
        [46, "a"],
        [
          36,
          [
            17,
            [
              13,
              [41, "$0"],
              [3, "$0", ["require", "getContainerVersion"]],
              ["$0"],
            ],
            "version",
          ],
        ],
      ],
      [
        50,
        "__dbg",
        [46, "a"],
        [
          36,
          [
            17,
            [
              13,
              [41, "$0"],
              [3, "$0", ["require", "getContainerVersion"]],
              ["$0"],
            ],
            "debugMode",
          ],
        ],
      ],
      [
        50,
        "__e",
        [46, "a"],
        [
          36,
          [
            13,
            [41, "$0"],
            [3, "$0", ["require", "internal.getEventData"]],
            ["$0", "event"],
          ],
        ],
      ],
      [
        50,
        "__googtag",
        [46, "a"],
        [
          50,
          "l",
          [46, "u", "v"],
          [
            66,
            "w",
            [2, [15, "b"], "keys", [7, [15, "v"]]],
            [46, [43, [15, "u"], [15, "w"], [16, [15, "v"], [15, "w"]]]],
          ],
        ],
        [
          50,
          "m",
          [46],
          [
            36,
            [
              7,
              [17, [17, [15, "d"], "SCHEMA"], "EP_SERVER_CONTAINER_URL"],
              [17, [17, [15, "d"], "SCHEMA"], "EP_TRANSPORT_URL"],
            ],
          ],
        ],
        [
          50,
          "n",
          [46, "u"],
          [52, "v", ["m"]],
          [
            65,
            "w",
            [15, "v"],
            [
              46,
              [
                53,
                [52, "x", [16, [15, "u"], [15, "w"]]],
                [22, [15, "x"], [46, [36, [15, "x"]]]],
              ],
            ],
          ],
          [36, [44]],
        ],
        [52, "b", ["require", "Object"]],
        [52, "c", ["require", "createArgumentsQueue"]],
        [52, "d", [15, "__module_gtag"]],
        [52, "e", ["require", "internal.gtagConfig"]],
        [52, "f", ["require", "getType"]],
        [52, "g", ["require", "internal.loadGoogleTag"]],
        [52, "h", ["require", "logToConsole"]],
        [52, "i", ["require", "makeNumber"]],
        [52, "j", ["require", "makeString"]],
        [52, "k", ["require", "makeTableMap"]],
        [52, "o", [30, [17, [15, "a"], "tagId"], ""]],
        [
          22,
          [
            30,
            [21, ["f", [15, "o"]], "string"],
            [24, [2, [15, "o"], "indexOf", [7, "-"]], 0],
          ],
          [
            46,
            [
              "h",
              [
                0,
                "Invalid Measurement ID for the GA4 Configuration tag: ",
                [15, "o"],
              ],
            ],
            [2, [15, "a"], "gtmOnFailure", [7]],
            [36],
          ],
        ],
        [52, "p", [30, [17, [15, "a"], "configSettingsVariable"], [8]]],
        [
          52,
          "q",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "configSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "p"], [15, "q"]],
        [52, "r", [30, [17, [15, "a"], "eventSettingsVariable"], [8]]],
        [
          52,
          "s",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "eventSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "r"], [15, "s"]],
        [52, "t", [15, "p"]],
        ["l", [15, "t"], [15, "r"]],
        [
          22,
          [
            30,
            [
              2,
              [15, "t"],
              "hasOwnProperty",
              [7, [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"]],
            ],
            [17, [15, "a"], "userProperties"],
          ],
          [
            46,
            [
              53,
              [
                52,
                "u",
                [
                  30,
                  [
                    16,
                    [15, "t"],
                    [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                  ],
                  [8],
                ],
              ],
              [
                "l",
                [15, "u"],
                [
                  30,
                  [
                    "k",
                    [30, [17, [15, "a"], "userProperties"], [7]],
                    "name",
                    "value",
                  ],
                  [8],
                ],
              ],
              [
                43,
                [15, "t"],
                [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                [15, "u"],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_BOOLEAN_FIELDS"],
            [
              51,
              "",
              [7, "u"],
              [
                36,
                [
                  39,
                  [20, "false", [2, ["j", [15, "u"]], "toLowerCase", [7]]],
                  false,
                  [28, [28, [15, "u"]]],
                ],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_NUMERIC_FIELDS"],
            [51, "", [7, "u"], [36, ["i", [15, "u"]]]],
          ],
        ],
        ["g", [15, "o"], [8, "firstPartyUrl", ["n", [15, "t"]]]],
        ["e", [15, "o"], [15, "t"], [8, "noTargetGroup", true]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__hid",
        [46, "a"],
        [
          36,
          [
            13,
            [41, "$0"],
            [3, "$0", ["require", "internal.getHtmlId"]],
            ["$0"],
          ],
        ],
      ],
      [
        50,
        "__hjtc",
        [46, "a"],
        [52, "b", ["require", "createArgumentsQueue"]],
        [52, "c", ["require", "encodeUriComponent"]],
        [52, "d", ["require", "injectScript"]],
        [52, "e", ["require", "makeString"]],
        [52, "f", ["require", "setInWindow"]],
        ["b", "hj", "hj.q"],
        [52, "g", [17, [15, "a"], "hotjar_site_id"]],
        [
          "f",
          "_hjSettings",
          [8, "hjid", [15, "g"], "hjsv", 7, "scriptSource", "gtm"],
        ],
        [
          "d",
          [
            0,
            [0, "https://static.hotjar.com/c/hotjar-", ["c", ["e", [15, "g"]]]],
            ".js?sv=7",
          ],
          [17, [15, "a"], "gtmOnSuccess"],
          [17, [15, "a"], "gtmOnFailure"],
        ],
      ],
      [
        50,
        "__html",
        [46, "a"],
        [52, "b", ["require", "internal.injectHtml"]],
        [
          "b",
          [17, [15, "a"], "html"],
          [17, [15, "a"], "gtmOnSuccess"],
          [17, [15, "a"], "gtmOnFailure"],
          [17, [15, "a"], "useIframe"],
          [17, [15, "a"], "supportDocumentWrite"],
        ],
      ],
      [
        50,
        "__jsm",
        [46, "a"],
        [52, "b", ["require", "internal.executeJavascriptString"]],
        [22, [20, [17, [15, "a"], "javascript"], [44]], [46, [36]]],
        [36, ["b", [17, [15, "a"], "javascript"]]],
      ],
      [
        50,
        "__lcl",
        [46, "a"],
        [52, "b", ["require", "makeInteger"]],
        [52, "c", ["require", "makeString"]],
        [52, "d", ["require", "internal.enableAutoEventOnLinkClick"]],
        [52, "e", [8]],
        [
          22,
          [17, [15, "a"], "waitForTags"],
          [
            46,
            [43, [15, "e"], "waitForTags", true],
            [
              43,
              [15, "e"],
              "waitForTagsTimeout",
              ["b", [17, [15, "a"], "waitForTagsTimeout"]],
            ],
          ],
        ],
        [
          22,
          [17, [15, "a"], "checkValidation"],
          [46, [43, [15, "e"], "checkValidation", true]],
        ],
        [52, "f", [30, [17, [15, "a"], "uniqueTriggerId"], "0"]],
        ["d", [15, "e"], [15, "f"]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__opt",
        [46, "a"],
        [52, "b", ["require", "internal.copyKeyFromWindow"]],
        [52, "c", ["require", "internal.readDataLayerName"]],
        [52, "d", ["require", "getType"]],
        [52, "e", ["b", [0, ["c"], ".hide.end"]]],
        [22, [20, ["d", [15, "e"]], "function"], [46, ["e"]]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [50, "__paused", [46, "a"], [2, [15, "a"], "gtmOnFailure", [7]]],
      [
        50,
        "__r",
        [46, "a"],
        [
          36,
          [
            13,
            [41, "$0"],
            [3, "$0", ["require", "generateRandom"]],
            [
              "$0",
              [30, [17, [15, "a"], "min"], 0],
              [30, [17, [15, "a"], "max"], 2.147483647e9],
            ],
          ],
        ],
      ],
      [
        50,
        "__t",
        [46, "a"],
        [
          36,
          [
            13,
            [41, "$0"],
            [3, "$0", ["require", "getTimestampMillis"]],
            ["$0"],
          ],
        ],
      ],
      [
        50,
        "__twitter_website_tag",
        [46, "a"],
        [
          50,
          "h",
          [46],
          [41, "k"],
          [3, "k", ["c", "twq"]],
          [22, [15, "k"], [46, [36, [15, "k"]]]],
          [
            "g",
            "twq",
            [
              51,
              "",
              [7],
              [52, "m", ["c", "twq.exe.apply"]],
              [
                22,
                [15, "m"],
                [46, ["b", "twq.exe.apply", [45], [15, "arguments"]]],
                [46, ["b", "twq.queue.push", [15, "arguments"]]],
              ],
            ],
            true,
          ],
          ["g", "twq.version", "1", true],
          ["g", "twq.queue", [7], true],
          [52, "l", [51, "", [7]]],
          [
            "d",
            "https://static.ads-twitter.com/uwt.js",
            [15, "l"],
            [15, "l"],
            "twitter_website_tag",
          ],
          [36, ["c", "twq"]],
        ],
        [52, "b", ["require", "callInWindow"]],
        [52, "c", ["require", "copyFromWindow"]],
        [52, "d", ["require", "injectScript"]],
        [52, "e", ["require", "makeString"]],
        [52, "f", ["require", "makeTableMap"]],
        [52, "g", ["require", "setInWindow"]],
        [41, "i"],
        [3, "i", ["h"]],
        ["i", "init", ["e", [17, [15, "a"], "twitter_pixel_id"]]],
        [
          52,
          "j",
          [
            "f",
            [30, [17, [15, "a"], "event_parameters"], [7]],
            "param_table_key_column",
            "param_table_value_column",
          ],
        ],
        [
          22,
          [1, [15, "j"], [2, [15, "j"], "hasOwnProperty", [7, "content_ids"]]],
          [
            46,
            [
              53,
              [41, "k"],
              [3, "k", [16, [15, "j"], "content_ids"]],
              [
                3,
                "k",
                [2, [2, [15, "k"], "split", [7, '"']], "join", [7, "'"]],
              ],
              [41, "l"],
              [
                3,
                "l",
                [
                  2,
                  [
                    2,
                    [15, "k"],
                    "slice",
                    [
                      7,
                      [2, [15, "k"], "indexOf", [7, "["]],
                      [2, [15, "k"], "indexOf", [7, "]"]],
                    ],
                  ],
                  "split",
                  [7, ","],
                ],
              ],
              [
                3,
                "l",
                [
                  2,
                  [15, "l"],
                  "map",
                  [
                    7,
                    [
                      51,
                      "",
                      [7, "m"],
                      [
                        36,
                        [30, [16, [2, [15, "m"], "split", [7, "'"]], 1], ""],
                      ],
                    ],
                  ],
                ],
              ],
              [43, [15, "j"], "content_ids", [15, "l"]],
            ],
          ],
        ],
        ["i", "track", ["e", [17, [15, "a"], "event_type"]], [15, "j"]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        52,
        "__module_gtag",
        [
          13,
          [41, "$0"],
          [
            3,
            "$0",
            [
              51,
              "",
              [7],
              [
                50,
                "a",
                [46],
                [
                  50,
                  "f",
                  [46, "g", "h", "i"],
                  [
                    65,
                    "j",
                    [15, "h"],
                    [
                      46,
                      [
                        22,
                        [2, [15, "g"], "hasOwnProperty", [7, [15, "j"]]],
                        [
                          46,
                          [
                            43,
                            [15, "g"],
                            [15, "j"],
                            ["i", [16, [15, "g"], [15, "j"]]],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [52, "b", ["require", "Object"]],
                [
                  52,
                  "c",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        8,
                        "EP_FIRST_PARTY_COLLECTION",
                        "first_party_collection",
                        "EP_SERVER_CONTAINER_URL",
                        "server_container_url",
                        "EP_TRANSPORT_URL",
                        "transport_url",
                        "EP_USER_PROPERTIES",
                        "user_properties",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "d",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "allow_ad_personalization_signals",
                        "allow_direct_google_requests",
                        "allow_google_signals",
                        "cookie_update",
                        "ignore_referrer",
                        "update",
                        "first_party_collection",
                        "send_page_view",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "e",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "cookie_expires",
                        "event_timeout",
                        "session_duration",
                        "session_engaged_time",
                        "engagement_time_msec",
                      ],
                    ],
                  ],
                ],
                [
                  36,
                  [
                    8,
                    "SCHEMA",
                    [15, "c"],
                    "GOLD_BOOLEAN_FIELDS",
                    [15, "d"],
                    "GOLD_NUMERIC_FIELDS",
                    [15, "e"],
                    "convertParameters",
                    [15, "f"],
                  ],
                ],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
    ],
    entities: {
      __c: { 2: true, 4: true },
      __cid: { 2: true, 4: true, 3: true },
      __ctv: { 2: true, 3: true },
      __dbg: { 2: true },
      __e: { 2: true, 4: true },
      __googtag: { 1: 10 },
      __opt: { 1: 10 },
      __r: { 2: true },
      __t: { 2: true },
    },
    blob: { 1: "609" },
    permissions: {
      __cvt_1384335_1609: {
        access_globals: {
          keys: [
            { key: "fbq", read: true, write: true, execute: false },
            { key: "_fbq_gtm", read: true, write: true, execute: false },
            { key: "_fbq", read: false, write: true, execute: false },
            { key: "_fbq_gtm_ids", read: true, write: true, execute: false },
            {
              key: "fbq.callMethod.apply",
              read: true,
              write: false,
              execute: true,
            },
            { key: "fbq.queue.push", read: false, write: false, execute: true },
            { key: "fbq.queue", read: true, write: true, execute: false },
            {
              key: "fbq.disablePushState",
              read: true,
              write: true,
              execute: false,
            },
          ],
        },
        inject_script: {
          urls: ["https://connect.facebook.net/en_US/fbevents.js"],
        },
        logging: { environments: "debug" },
        read_data_layer: { keyPatterns: ["ecommerce"] },
      },
      __cvt_1384335_2377: {
        inject_script: { urls: ["https://analytics.tiktok.com/"] },
      },
      __cvt_1384335_2816: {
        logging: { environments: "debug" },
        access_globals: {
          keys: [{ key: "dataLayer", read: true, write: true, execute: false }],
        },
        access_consent: {
          consentTypes: [
            { consentType: "ad_storage", read: true, write: true },
            { consentType: "analytics_storage", read: true, write: true },
            { consentType: "personalization_storage", read: true, write: true },
            { consentType: "functionality_storage", read: true, write: true },
            { consentType: "security_storage", read: true, write: true },
            { consentType: "ad_user_data", read: true, write: true },
            { consentType: "ad_personalization", read: true, write: true },
          ],
        },
        write_data_layer: {
          keyPatterns: ["url_passthrough", "ads_data_redaction"],
        },
      },
      __c: {},
      __cid: { read_container_data: {} },
      __cl: { detect_click_events: {} },
      __ctv: { read_container_data: {} },
      __dbg: { read_container_data: {} },
      __e: {
        read_event_data: {
          eventDataAccess: "specific",
          keyPatterns: ["event"],
        },
      },
      __googtag: {
        logging: { environments: "debug" },
        access_globals: {
          keys: [
            { key: "gtag", read: true, write: true, execute: true },
            { key: "dataLayer", read: true, write: true, execute: false },
          ],
        },
        configure_google_tags: { allowedTagIds: "any" },
        load_google_tags: {
          allowedTagIds: "any",
          allowFirstPartyUrls: true,
          allowedFirstPartyUrls: "any",
        },
      },
      __hid: {},
      __hjtc: {
        access_globals: {
          keys: [
            { key: "hj", read: true, write: true, execute: false },
            { key: "hj.q", read: true, write: true, execute: false },
            { key: "_hjSettings", read: true, write: true, execute: false },
          ],
        },
        inject_script: { urls: ["https://static.hotjar.com/c/hotjar-*"] },
      },
      __html: { unsafe_inject_arbitrary_html: {} },
      __jsm: { unsafe_run_arbitrary_javascript: {} },
      __lcl: { detect_link_click_events: { allowWaitForTags: true } },
      __opt: { unsafe_access_globals: {}, access_globals: {} },
      __paused: {},
      __r: {},
      __t: {},
      __twitter_website_tag: {
        access_globals: {
          keys: [
            { key: "twq", read: true, write: true, execute: true },
            { key: "twq.exe", read: true, write: true, execute: true },
            { key: "twq.queue", read: true, write: true, execute: true },
            { key: "twq.queue.push", read: true, write: true, execute: true },
            { key: "twq.version", read: true, write: true, execute: false },
            { key: "twq.exe.apply", read: true, write: true, execute: true },
          ],
        },
        inject_script: { urls: ["https://static.ads-twitter.com/uwt.js"] },
      },
    },

    sandboxed_scripts: [
      "__cvt_1384335_1609",
      "__cvt_1384335_2377",
      "__cvt_1384335_2816",
    ],

    security_groups: {
      customScripts: ["__html", "__jsm"],
      google: [
        "__c",
        "__cid",
        "__cl",
        "__ctv",
        "__dbg",
        "__e",
        "__googtag",
        "__hid",
        "__opt",
        "__r",
        "__t",
      ],
      nonGoogleScripts: ["__hjtc", "__twitter_website_tag"],
    },
  };

  var productSettings = {
    "AW-799780183": { preAutoPii: true },
  };

  try {
    (function () {
      /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
      var C = this || self,
        D = function (n, u) {
          var w = n.split("."),
            q = C;
          w[0] in q ||
            typeof q.execScript == "undefined" ||
            q.execScript("var " + w[0]);
          for (var r; w.length && (r = w.shift()); )
            w.length || u === void 0
              ? (q = q[r] && q[r] !== Object.prototype[r] ? q[r] : (q[r] = {}))
              : (q[r] = u);
        }; /*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
      var E,
        F = function () {};
      (function () {
        function n(h, l) {
          h = h || "";
          l = l || {};
          for (var y in u)
            u.hasOwnProperty(y) &&
              (l.N && (l["fix_" + y] = !0), (l.G = l.G || l["fix_" + y]));
          var z = {
              comment: /^\x3c!--/,
              endTag: /^<\//,
              atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
              startTag: /^</,
              chars: /^[^<]/,
            },
            e = {
              comment: function () {
                var a = h.indexOf("--\x3e");
                if (a >= 0) return { content: h.substr(4, a), length: a + 3 };
              },
              endTag: function () {
                var a = h.match(q);
                if (a) return { tagName: a[1], length: a[0].length };
              },
              atomicTag: function () {
                var a = e.startTag();
                if (a) {
                  var b = h.slice(a.length);
                  if (
                    b.match(new RegExp("</\\s*" + a.tagName + "\\s*>", "i"))
                  ) {
                    var c = b.match(
                      new RegExp(
                        "([\\s\\S]*?)</\\s*" + a.tagName + "\\s*>",
                        "i"
                      )
                    );
                    if (c)
                      return {
                        tagName: a.tagName,
                        g: a.g,
                        content: c[1],
                        length: c[0].length + a.length,
                      };
                  }
                }
              },
              startTag: function () {
                var a = h.match(w);
                if (a) {
                  var b = {};
                  a[2].replace(r, function (c, d) {
                    var k =
                        arguments[2] ||
                        arguments[3] ||
                        arguments[4] ||
                        (B.test(d) && d) ||
                        null,
                      g = document.createElement("div");
                    g.innerHTML = k;
                    b[d] = g.textContent || g.innerText || k;
                  });
                  return {
                    tagName: a[1],
                    g: b,
                    s: !!a[3],
                    length: a[0].length,
                  };
                }
              },
              chars: function () {
                var a = h.indexOf("<");
                return { length: a >= 0 ? a : h.length };
              },
            },
            f = function () {
              for (var a in z)
                if (z[a].test(h)) {
                  var b = e[a]();
                  return b
                    ? ((b.type = b.type || a),
                      (b.text = h.substr(0, b.length)),
                      (h = h.slice(b.length)),
                      b)
                    : null;
                }
            };
          l.G &&
            (function () {
              var a =
                  /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                b = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,
                c = [];
              c.H = function () {
                return this[this.length - 1];
              };
              c.v = function (m) {
                var p = this.H();
                return (
                  p && p.tagName && p.tagName.toUpperCase() === m.toUpperCase()
                );
              };
              c.V = function (m) {
                for (var p = 0, x; (x = this[p]); p++)
                  if (x.tagName === m) return !0;
                return !1;
              };
              var d = function (m) {
                  m &&
                    m.type === "startTag" &&
                    (m.s = a.test(m.tagName) || m.s);
                  return m;
                },
                k = f,
                g = function () {
                  h = "</" + c.pop().tagName + ">" + h;
                },
                t = {
                  startTag: function (m) {
                    var p = m.tagName;
                    p.toUpperCase() === "TR" && c.v("TABLE")
                      ? ((h = "<TBODY>" + h), v())
                      : l.oa && b.test(p) && c.V(p)
                      ? c.v(p)
                        ? g()
                        : ((h = "</" + m.tagName + ">" + h), v())
                      : m.s || c.push(m);
                  },
                  endTag: function (m) {
                    c.H()
                      ? l.W && !c.v(m.tagName)
                        ? g()
                        : c.pop()
                      : l.W && (k(), v());
                  },
                },
                v = function () {
                  var m = h,
                    p = d(k());
                  h = m;
                  if (p && t[p.type]) t[p.type](p);
                };
              f = function () {
                v();
                return d(k());
              };
            })();
          return {
            append: function (a) {
              h += a;
            },
            ea: f,
            sa: function (a) {
              for (var b; (b = f()) && (!a[b.type] || a[b.type](b) !== !1); );
            },
            clear: function () {
              var a = h;
              h = "";
              return a;
            },
            ta: function () {
              return h;
            },
            stack: [],
          };
        }
        var u = (function () {
            var h = {},
              l = this.document.createElement("div");
            l.innerHTML = "<P><I></P></I>";
            h.va = l.innerHTML !== "<P><I></P></I>";
            l.innerHTML = "<P><i><P></P></i></P>";
            h.ua = l.childNodes.length === 2;
            return h;
          })(),
          w =
            /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
          q = /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
          r =
            /([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
          B =
            /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;
        n.supports = u;
        for (var A in u);
        E = n;
      })();
      (function () {
        function n() {}
        function u(e) {
          return e !== void 0 && e !== null;
        }
        function w(e, f, a) {
          var b,
            c = (e && e.length) || 0;
          for (b = 0; b < c; b++) f.call(a, e[b], b);
        }
        function q(e, f, a) {
          for (var b in e) e.hasOwnProperty(b) && f.call(a, b, e[b]);
        }
        function r(e, f) {
          q(f, function (a, b) {
            e[a] = b;
          });
          return e;
        }
        function B(e, f) {
          e = e || {};
          q(f, function (a, b) {
            u(e[a]) || (e[a] = b);
          });
          return e;
        }
        function A(e) {
          try {
            return y.call(e);
          } catch (a) {
            var f = [];
            w(e, function (b) {
              f.push(b);
            });
            return f;
          }
        }
        var h = {
            J: n,
            K: n,
            L: n,
            M: n,
            O: n,
            P: function (e) {
              return e;
            },
            done: n,
            error: function (e) {
              throw e;
            },
            fa: !1,
          },
          l = this;
        if (!l.postscribe) {
          var y = Array.prototype.slice,
            z = (function () {
              function e(a, b, c) {
                var d = "data-ps-" + b;
                if (arguments.length === 2) {
                  var k = a.getAttribute(d);
                  return u(k) ? String(k) : k;
                }
                u(c) && c !== "" ? a.setAttribute(d, c) : a.removeAttribute(d);
              }
              function f(a, b) {
                var c = a.ownerDocument;
                r(this, {
                  root: a,
                  options: b,
                  l: c.defaultView || c.parentWindow,
                  i: c,
                  o: E("", { N: !0 }),
                  u: [a],
                  B: "",
                  C: c.createElement(a.nodeName),
                  j: [],
                  h: [],
                });
                e(this.C, "proxyof", 0);
              }
              f.prototype.write = function () {
                [].push.apply(this.h, arguments);
                for (var a; !this.m && this.h.length; )
                  (a = this.h.shift()),
                    "function" === typeof a ? this.U(a) : this.D(a);
              };
              f.prototype.U = function (a) {
                var b = { type: "function", value: a.name || a.toString() };
                this.A(b);
                a.call(this.l, this.i);
                this.I(b);
              };
              f.prototype.D = function (a) {
                this.o.append(a);
                for (
                  var b, c = [], d, k;
                  (b = this.o.ea()) &&
                  !(d =
                    b && "tagName" in b
                      ? !!~b.tagName.toLowerCase().indexOf("script")
                      : !1) &&
                  !(k =
                    b && "tagName" in b
                      ? !!~b.tagName.toLowerCase().indexOf("style")
                      : !1);

                )
                  c.push(b);
                this.ka(c);
                d && this.X(b);
                k && this.Y(b);
              };
              f.prototype.ka = function (a) {
                var b = this.R(a);
                b.F &&
                  ((b.Z = this.B + b.F),
                  (this.B += b.proxy),
                  (this.C.innerHTML = b.Z),
                  this.ia());
              };
              f.prototype.R = function (a) {
                var b = this.u.length,
                  c = [],
                  d = [],
                  k = [];
                w(a, function (g) {
                  c.push(g.text);
                  if (g.g) {
                    if (!/^noscript$/i.test(g.tagName)) {
                      var t = b++;
                      d.push(
                        g.text.replace(/(\/?>)/, " data-ps-id=" + t + " $1")
                      );
                      g.g.id !== "ps-script" &&
                        g.g.id !== "ps-style" &&
                        k.push(
                          g.type === "atomicTag"
                            ? ""
                            : "<" +
                                g.tagName +
                                " data-ps-proxyof=" +
                                t +
                                (g.s ? " />" : ">")
                        );
                    }
                  } else d.push(g.text), k.push(g.type === "endTag" ? g.text : "");
                });
                return {
                  wa: a,
                  raw: c.join(""),
                  F: d.join(""),
                  proxy: k.join(""),
                };
              };
              f.prototype.ia = function () {
                for (var a, b = [this.C]; u((a = b.shift())); ) {
                  var c = a.nodeType === 1;
                  if (!c || !e(a, "proxyof")) {
                    c && ((this.u[e(a, "id")] = a), e(a, "id", null));
                    var d = a.parentNode && e(a.parentNode, "proxyof");
                    d && this.u[d].appendChild(a);
                  }
                  b.unshift.apply(b, A(a.childNodes));
                }
              };
              f.prototype.X = function (a) {
                var b = this.o.clear();
                b && this.h.unshift(b);
                a.src = a.g.src || a.g.ma;
                a.src && this.j.length ? (this.m = a) : this.A(a);
                var c = this;
                this.ja(a, function () {
                  c.I(a);
                });
              };
              f.prototype.Y = function (a) {
                var b = this.o.clear();
                b && this.h.unshift(b);
                a.type = a.g.type || a.g.TYPE || "text/css";
                this.la(a);
                b && this.write();
              };
              f.prototype.la = function (a) {
                var b = this.T(a);
                this.ba(b);
                a.content &&
                  (b.styleSheet && !b.sheet
                    ? (b.styleSheet.cssText = a.content)
                    : b.appendChild(this.i.createTextNode(a.content)));
              };
              f.prototype.T = function (a) {
                var b = this.i.createElement(a.tagName);
                b.setAttribute("type", a.type);
                q(a.g, function (c, d) {
                  b.setAttribute(c, d);
                });
                return b;
              };
              f.prototype.ba = function (a) {
                this.D('<span id="ps-style"/>');
                var b = this.i.getElementById("ps-style");
                b.parentNode.replaceChild(a, b);
              };
              f.prototype.A = function (a) {
                a.ca = this.h;
                this.h = [];
                this.j.unshift(a);
              };
              f.prototype.I = function (a) {
                a !== this.j[0]
                  ? this.options.error({
                      message: "Bad script nesting or script finished twice",
                    })
                  : (this.j.shift(),
                    this.write.apply(this, a.ca),
                    !this.j.length &&
                      this.m &&
                      (this.A(this.m), (this.m = null)));
              };
              f.prototype.ja = function (a, b) {
                var c = this.S(a),
                  d = this.ha(c),
                  k = this.options.J;
                a.src &&
                  ((c.src = a.src),
                  this.ga(
                    c,
                    d
                      ? k
                      : function () {
                          b();
                          k();
                        }
                  ));
                try {
                  this.aa(c), (a.src && !d) || b();
                } catch (g) {
                  this.options.error(g), b();
                }
              };
              f.prototype.S = function (a) {
                var b = this.i.createElement(a.tagName);
                q(a.g, function (c, d) {
                  b.setAttribute(c, d);
                });
                a.content && (b.text = a.content);
                return b;
              };
              f.prototype.aa = function (a) {
                this.D('<span id="ps-script"/>');
                var b = this.i.getElementById("ps-script");
                b.parentNode.replaceChild(a, b);
              };
              f.prototype.ga = function (a, b) {
                function c() {
                  a = a.onload = a.onreadystatechange = a.onerror = null;
                }
                var d = this.options.error;
                r(a, {
                  onload: function () {
                    c();
                    b();
                  },
                  onreadystatechange: function () {
                    /^(loaded|complete)$/.test(a.readyState) && (c(), b());
                  },
                  onerror: function () {
                    var k = { message: "remote script failed " + a.src };
                    c();
                    d(k);
                    b();
                  },
                });
              };
              f.prototype.ha = function (a) {
                return (
                  !/^script$/i.test(a.nodeName) ||
                  !!(this.options.fa && a.src && a.hasAttribute("async"))
                );
              };
              return f;
            })();
          l.postscribe = (function () {
            function e() {
              var d = b.shift(),
                k;
              d &&
                ((k = d[d.length - 1]),
                k.K(),
                (d.stream = f.apply(null, d)),
                k.L());
            }
            function f(d, k, g) {
              function t(x) {
                x = g.P(x);
                c.write(x);
                g.M(x);
              }
              c = new z(d, g);
              c.id = a++;
              c.name = g.name || c.id;
              var v = d.ownerDocument,
                m = {
                  close: v.close,
                  open: v.open,
                  write: v.write,
                  writeln: v.writeln,
                };
              r(v, {
                close: n,
                open: n,
                write: function () {
                  return t(A(arguments).join(""));
                },
                writeln: function () {
                  return t(A(arguments).join("") + "\n");
                },
              });
              var p = c.l.onerror || n;
              c.l.onerror = function (x, G, H) {
                g.error({ qa: x + " - " + G + ":" + H });
                p.apply(c.l, arguments);
              };
              c.write(k, function () {
                r(v, m);
                c.l.onerror = p;
                g.done();
                c = null;
                e();
              });
              return c;
            }
            var a = 0,
              b = [],
              c = null;
            return r(
              function (d, k, g) {
                "function" === typeof g && (g = { done: g });
                g = B(g, h);
                d = /^#/.test(d)
                  ? l.document.getElementById(d.substr(1))
                  : d.pa
                  ? d[0]
                  : d;
                var t = [d, k, g];
                d.da = {
                  cancel: function () {
                    t.stream ? t.stream.abort() : (t[1] = n);
                  },
                };
                g.O(t);
                b.push(t);
                c || e();
                return d.da;
              },
              { streams: {}, ra: b, na: z }
            );
          })();
          F = l.postscribe;
        }
      })();
      D(
        "google_tag_manager_external.postscribe.installPostscribe",
        function () {
          var n = window.google_tag_manager;
          n && (n.postscribe || (n.postscribe = window.postscribe || F));
        }
      );
      D("google_tag_manager_external.postscribe.getPostscribe", function () {
        return window.google_tag_manager.postscribe;
      });
    }).call(this);
  } catch {}

  var h,
    aa = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ba =
      typeof Object.defineProperties == "function"
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    fa = function (a) {
      for (
        var b = [
            "object" == typeof globalThis && globalThis,
            a,
            "object" == typeof window && window,
            "object" == typeof self && self,
            "object" == typeof global && global,
          ],
          c = 0;
        c < b.length;
        ++c
      ) {
        var d = b[c];
        if (d && d.Math == Math) return d;
      }
      throw Error("Cannot find global object");
    },
    ha = fa(this),
    ia = function (a, b) {
      if (b)
        a: {
          for (var c = ha, d = a.split("."), e = 0; e < d.length - 1; e++) {
            var f = d[e];
            if (!(f in c)) break a;
            c = c[f];
          }
          var g = d[d.length - 1],
            k = c[g],
            m = b(k);
          m != k &&
            m != null &&
            ba(c, g, { configurable: !0, writable: !0, value: m });
        }
    };
  ia("Symbol", function (a) {
    if (a) return a;
    var b = function (f, g) {
      this.j = f;
      ba(this, "description", { configurable: !0, writable: !0, value: g });
    };
    b.prototype.toString = function () {
      return this.j;
    };
    var c = "jscomp_symbol_" + ((Math.random() * 1e9) >>> 0) + "_",
      d = 0,
      e = function (f) {
        if (this instanceof e)
          throw new TypeError("Symbol is not a constructor");
        return new b(c + (f || "") + "_" + d++, f);
      };
    return e;
  });
  var ja =
      typeof Object.create == "function"
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ka;
  if (typeof Object.setPrototypeOf == "function") ka = Object.setPrototypeOf;
  else {
    var la;
    a: {
      var ma = { a: !0 },
        pa = {};
      try {
        pa.__proto__ = ma;
        la = pa.a;
        break a;
      } catch (a) {}
      la = !1;
    }
    ka = la
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var qa = ka,
    ra = function (a, b) {
      a.prototype = ja(b.prototype);
      a.prototype.constructor = a;
      if (qa) qa(a, b);
      else
        for (var c in b)
          if (c != "prototype")
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.wo = b.prototype;
    },
    l = function (a) {
      var b =
        typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if (typeof a.length == "number") return { next: aa(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    sa = function (a) {
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      return c;
    },
    ta = function (a) {
      return a instanceof Array ? a : sa(l(a));
    },
    wa = function (a) {
      return va(a, a);
    },
    va = function (a, b) {
      a.raw = b;
      Object.freeze && (Object.freeze(a), Object.freeze(b));
      return a;
    },
    xa =
      typeof Object.assign == "function"
        ? Object.assign
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d)
                for (var e in d)
                  Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
            }
            return a;
          };
  ia("Object.assign", function (a) {
    return a || xa;
  });
  var ya = function () {
    for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
      b[c - a] = arguments[c];
    return b;
  }; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var za = this || self;
  var Ba = function (a, b) {
    this.type = a;
    this.data = b;
  };
  var Ca = function () {
    this.map = {};
    this.j = {};
  };
  h = Ca.prototype;
  h.get = function (a) {
    return this.map["dust." + a];
  };
  h.set = function (a, b) {
    var c = "dust." + a;
    this.j.hasOwnProperty(c) || (this.map[c] = b);
  };
  h.wi = function (a, b) {
    this.set(a, b);
    this.j["dust." + a] = !0;
  };
  h.has = function (a) {
    return this.map.hasOwnProperty("dust." + a);
  };
  h.remove = function (a) {
    var b = "dust." + a;
    this.j.hasOwnProperty(b) || delete this.map[b];
  };
  var Da = function (a, b) {
    var c = [],
      d;
    for (d in a.map)
      if (a.map.hasOwnProperty(d)) {
        var e = d.substring(5);
        switch (b) {
          case 1:
            c.push(e);
            break;
          case 2:
            c.push(a.map[d]);
            break;
          case 3:
            c.push([e, a.map[d]]);
        }
      }
    return c;
  };
  Ca.prototype.la = function () {
    return Da(this, 1);
  };
  Ca.prototype.Vb = function () {
    return Da(this, 2);
  };
  Ca.prototype.Eb = function () {
    return Da(this, 3);
  };
  var Ea = function () {};
  Ea.prototype.reset = function () {};
  var Fa = function (a, b) {
    this.K = a;
    this.parent = b;
    this.j = this.C = void 0;
    this.vc = !1;
    this.H = function (c, d, e) {
      return c.apply(d, e);
    };
    this.values = new Ca();
  };
  Fa.prototype.add = function (a, b) {
    Ga(this, a, b, !1);
  };
  var Ga = function (a, b, c, d) {
    a.vc || (d ? a.values.wi(b, c) : a.values.set(b, c));
  };
  Fa.prototype.set = function (a, b) {
    this.vc ||
      (!this.values.has(a) && this.parent && this.parent.has(a)
        ? this.parent.set(a, b)
        : this.values.set(a, b));
  };
  Fa.prototype.get = function (a) {
    return this.values.has(a)
      ? this.values.get(a)
      : this.parent
      ? this.parent.get(a)
      : void 0;
  };
  Fa.prototype.has = function (a) {
    return !!this.values.has(a) || !(!this.parent || !this.parent.has(a));
  };
  var Ha = function (a) {
    var b = new Fa(a.K, a);
    a.C && (b.C = a.C);
    b.H = a.H;
    b.j = a.j;
    return b;
  };
  Fa.prototype.Kd = function () {
    return this.K;
  };
  Fa.prototype.Ga = function () {
    this.vc = !0;
  };
  function Ia(a, b) {
    for (
      var c, d = l(b), e = d.next();
      !e.done && !((c = Ja(a, e.value)), c instanceof Ba);
      e = d.next()
    );
    return c;
  }
  function Ja(a, b) {
    try {
      var c = l(b),
        d = c.next().value,
        e = sa(c),
        f = a.get(String(d));
      if (!f || typeof f.invoke !== "function")
        throw Error("Attempting to execute non-function " + b[0] + ".");
      return f.invoke.apply(f, [a].concat(ta(e)));
    } catch (k) {
      var g = a.C;
      g && g(k, b.context ? { id: b[0], line: b.context.line } : null);
      throw k;
    }
  }
  var Ka = function () {
    this.C = new Ea();
    this.j = new Fa(this.C);
  };
  h = Ka.prototype;
  h.Kd = function () {
    return this.C;
  };
  h.execute = function (a) {
    return this.ui([a].concat(ta(ya.apply(1, arguments))));
  };
  h.ui = function () {
    for (
      var a, b = l(ya.apply(0, arguments)), c = b.next();
      !c.done;
      c = b.next()
    )
      a = Ja(this.j, c.value);
    return a;
  };
  h.Al = function (a) {
    var b = ya.apply(1, arguments),
      c = Ha(this.j);
    c.j = a;
    for (var d, e = l(b), f = e.next(); !f.done; f = e.next())
      d = Ja(c, f.value);
    return d;
  };
  h.Ga = function () {
    this.j.Ga();
  };
  var La = function () {
    this.ma = !1;
    this.R = new Ca();
  };
  h = La.prototype;
  h.get = function (a) {
    return this.R.get(a);
  };
  h.set = function (a, b) {
    this.ma || this.R.set(a, b);
  };
  h.has = function (a) {
    return this.R.has(a);
  };
  h.wi = function (a, b) {
    this.ma || this.R.wi(a, b);
  };
  h.remove = function (a) {
    this.ma || this.R.remove(a);
  };
  h.la = function () {
    return this.R.la();
  };
  h.Vb = function () {
    return this.R.Vb();
  };
  h.Eb = function () {
    return this.R.Eb();
  };
  h.Ga = function () {
    this.ma = !0;
  };
  h.vc = function () {
    return this.ma;
  };
  function Ma() {
    for (var a = Na, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function Oa() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var Na, Pa;
  function Qa(a) {
    Na = Na || Oa();
    Pa = Pa || Ma();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        k = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        p = ((g & 15) << 2) | (k >> 6),
        q = k & 63;
      e || ((q = 64), d || (p = 64));
      b.push(Na[m], Na[n], Na[p], Na[q]);
    }
    return b.join("");
  }
  function Ta(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = Pa[n];
        if (p != null) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    Na = Na || Oa();
    Pa = Pa || Ma();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        k = b(64);
      if (k === 64 && e === -1) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      g !== 64 &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        k !== 64 && (c += String.fromCharCode(((g << 6) & 192) | k)));
    }
  }
  var Ua = {};
  function Va(a, b) {
    Ua[a] = Ua[a] || [];
    Ua[a][b] = !0;
  }
  function Wa(a) {
    var b = Ua[a];
    if (!b || b.length === 0) return "";
    for (var c = [], d = 0, e = 0; e < b.length; e++)
      e % 8 === 0 && e > 0 && (c.push(String.fromCharCode(d)), (d = 0)),
        b[e] && (d |= 1 << e % 8);
    d > 0 && c.push(String.fromCharCode(d));
    return Qa(c.join("")).replace(/\.+$/, "");
  }
  function Xa() {
    for (var a = [], b = Ua.fdr || [], c = 0; c < b.length; c++)
      b[c] && a.push(c);
    return a.length > 0 ? a : void 0;
  }
  function Ya() {}
  function Za(a) {
    return typeof a === "function";
  }
  function z(a) {
    return typeof a === "string";
  }
  function $a(a) {
    return typeof a === "number" && !isNaN(a);
  }
  function ab(a) {
    return Array.isArray(a) ? a : [a];
  }
  function bb(a, b) {
    if (a && Array.isArray(a))
      for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
  }
  function cb(a, b) {
    if (!$a(a) || !$a(b) || a > b) (a = 0), (b = 2147483647);
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  function db(a, b) {
    for (var c = new eb(), d = 0; d < a.length; d++) c.set(a[d], !0);
    for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
    return !1;
  }
  function fb(a, b) {
    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
  }
  function gb(a) {
    return (
      !!a &&
      (Object.prototype.toString.call(a) === "[object Arguments]" ||
        Object.prototype.hasOwnProperty.call(a, "callee"))
    );
  }
  function hb(a) {
    return Math.round(Number(a)) || 0;
  }
  function ib(a) {
    return "false" === String(a).toLowerCase() ? !1 : !!a;
  }
  function jb(a) {
    var b = [];
    if (Array.isArray(a))
      for (var c = 0; c < a.length; c++) b.push(String(a[c]));
    return b;
  }
  function lb(a) {
    return a ? a.replace(/^\s+|\s+$/g, "") : "";
  }
  function mb() {
    return new Date(Date.now());
  }
  function nb() {
    return mb().getTime();
  }
  var eb = function () {
    this.prefix = "gtm.";
    this.values = {};
  };
  eb.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  eb.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  eb.prototype.contains = function (a) {
    return this.get(a) !== void 0;
  };
  function ob(a, b, c) {
    return a && a.hasOwnProperty(b) ? a[b] : c;
  }
  function pb(a) {
    var b = a;
    return function () {
      if (b) {
        var c = b;
        b = void 0;
        try {
          c();
        } catch (d) {}
      }
    };
  }
  function qb(a, b) {
    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
  }
  function rb(a, b) {
    for (var c = [], d = 0; d < a.length; d++)
      c.push(a[d]), c.push.apply(c, b[a[d]] || []);
    return c;
  }
  function sb(a, b) {
    return a.length >= b.length && a.substring(0, b.length) === b;
  }
  function tb(a, b) {
    return (
      a.length >= b.length && a.substring(a.length - b.length, a.length) === b
    );
  }
  function ub(a, b) {
    var c = A;
    b = b || [];
    for (var d = c, e = 0; e < a.length - 1; e++) {
      if (!d.hasOwnProperty(a[e])) return;
      d = d[a[e]];
      if (b.indexOf(d) >= 0) return;
    }
    return d;
  }
  function vb(a, b) {
    for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
      d = d[e[f]] = {};
    d[e[e.length - 1]] = b;
    return c;
  }
  var wb = /^\w{1,9}$/;
  function xb(a, b) {
    a = a || {};
    b = b || ",";
    var c = [];
    fb(a, function (d, e) {
      wb.test(d) && e && c.push(d);
    });
    return c.join(b);
  }
  function yb(a, b) {
    function c() {
      e && ++d === b && (e(), (e = null), (c.done = !0));
    }
    var d = 0,
      e = a;
    c.done = !1;
    return c;
  }
  function zb(a) {
    if (!a) return a;
    var b = a;
    try {
      b = decodeURIComponent(a);
    } catch (d) {}
    var c = b.split(",");
    return c.length === 2 && c[0] === c[1] ? c[0] : a;
  }
  function Ab(a, b, c) {
    function d(n) {
      var p = n.split("=")[0];
      if (a.indexOf(p) < 0) return n;
      if (c !== void 0) return p + "=" + c;
    }
    function e(n) {
      return n
        .split("&")
        .map(d)
        .filter(function (p) {
          return p !== void 0;
        })
        .join("&");
    }
    var f = b.href.split(/[?#]/)[0],
      g = b.search,
      k = b.hash;
    g[0] === "?" && (g = g.substring(1));
    k[0] === "#" && (k = k.substring(1));
    g = e(g);
    k = e(k);
    g !== "" && (g = "?" + g);
    k !== "" && (k = "#" + k);
    var m = "" + f + g + k;
    m[m.length - 1] === "/" && (m = m.substring(0, m.length - 1));
    return m;
  }
  function Bb(a) {
    for (var b = 0; b < 3; ++b)
      try {
        var c = decodeURIComponent(a).replace(/\+/g, " ");
        if (c === a) break;
        a = c;
      } catch (d) {
        return "";
      }
    return a;
  } /*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
  var Cb = globalThis.trustedTypes,
    Db;
  function Eb() {
    var a = null;
    if (!Cb) return a;
    try {
      var b = function (c) {
        return c;
      };
      a = Cb.createPolicy("goog#html", {
        createHTML: b,
        createScript: b,
        createScriptURL: b,
      });
    } catch (c) {}
    return a;
  }
  function Fb() {
    Db === void 0 && (Db = Eb());
    return Db;
  }
  var Gb = function (a) {
    this.j = a;
  };
  Gb.prototype.toString = function () {
    return this.j + "";
  };
  function Hb(a) {
    var b = a,
      c = Fb();
    return new Gb(c ? c.createScriptURL(b) : b);
  }
  function Ib(a) {
    if (a instanceof Gb) return a.j;
    throw Error("");
  }
  var Jb = wa([""]),
    Kb = va(["\x00"], ["\\0"]),
    Lb = va(["\n"], ["\\n"]),
    Mb = va(["\x00"], ["\\u0000"]);
  function Nb(a) {
    return a.toString().indexOf("`") === -1;
  }
  Nb(function (a) {
    return a(Jb);
  }) ||
    Nb(function (a) {
      return a(Kb);
    }) ||
    Nb(function (a) {
      return a(Lb);
    }) ||
    Nb(function (a) {
      return a(Mb);
    });
  var Ob = function (a) {
    this.j = a;
  };
  Ob.prototype.toString = function () {
    return this.j;
  };
  var Pb = function (a) {
    this.Om = a;
  };
  function Qb(a) {
    return new Pb(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var Rb = [
    Qb("data"),
    Qb("http"),
    Qb("https"),
    Qb("mailto"),
    Qb("ftp"),
    new Pb(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    }),
  ];
  function Sb(a) {
    var b;
    b = b === void 0 ? Rb : b;
    if (a instanceof Ob) return a;
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (d instanceof Pb && d.Om(a)) return new Ob(a);
    }
  }
  var Tb = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
  function Ub(a) {
    var b;
    if (a instanceof Ob)
      if (a instanceof Ob) b = a.j;
      else throw Error("");
    else b = Tb.test(a) ? a : void 0;
    return b;
  }
  var Wb = function () {
    this.j = Vb[0].toLowerCase();
  };
  Wb.prototype.toString = function () {
    return this.j;
  };
  var Xb = function (a) {
    this.j = a;
  };
  Xb.prototype.toString = function () {
    return this.j + "";
  };
  function Yb(a, b) {
    var c = [new Wb()];
    if (c.length === 0) throw Error("");
    var d = c.map(function (f) {
        var g;
        if (f instanceof Wb) g = f.j;
        else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (
      d.every(function (f) {
        return e.indexOf(f) !== 0;
      })
    )
      throw Error(
        'Attribute "' + b + '" does not match any of the allowed prefixes.'
      );
    a.setAttribute(b, "true");
  }
  function Zb(a, b) {
    var c = Ub(b);
    c !== void 0 && (a.action = c);
  }
  var $b = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if (typeof a === "string")
          return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT"
    .split(" ")
    .concat(["BUTTON", "INPUT"]);
  function ac(a) {
    return a === null ? "null" : a === void 0 ? "undefined" : a;
  }
  var A = window,
    bc = window.history,
    E = document,
    cc = navigator;
  function dc() {
    var a;
    try {
      a = cc.serviceWorker;
    } catch (b) {
      return;
    }
    return a;
  }
  var ec = E.currentScript,
    fc = ec && ec.src;
  function gc(a, b) {
    var c = A[a];
    A[a] = c === void 0 ? b : c;
    return A[a];
  }
  function hc(a) {
    return (cc.userAgent || "").indexOf(a) !== -1;
  }
  var ic = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    jc = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function kc(a, b, c) {
    b &&
      fb(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  function lc(a, b, c, d, e) {
    var f = E.createElement("script");
    kc(f, d, ic);
    f.type = "text/javascript";
    f.async = d && d.async === !1 ? !1 : !0;
    var g;
    g = Hb(ac(a));
    f.src = Ib(g);
    var k,
      m = (f.ownerDocument && f.ownerDocument.defaultView) || window;
    m = m === void 0 ? document : m;
    var n,
      p,
      q =
        (p = (n = "document" in m ? m.document : m).querySelector) == null
          ? void 0
          : p.call(n, "script[nonce]");
    (k = q == null ? "" : q.nonce || q.getAttribute("nonce") || "") &&
      f.setAttribute("nonce", k);
    b && (f.onload = b);
    c && (f.onerror = c);
    if (e) e.appendChild(f);
    else {
      var r = E.getElementsByTagName("script")[0] || E.body || E.head;
      r.parentNode.insertBefore(f, r);
    }
    return f;
  }
  function nc() {
    if (fc) {
      var a = fc.toLowerCase();
      if (a.indexOf("https://") === 0) return 2;
      if (a.indexOf("http://") === 0) return 3;
    }
    return 1;
  }
  function oc(a, b, c, d, e) {
    var f;
    f = f === void 0 ? !0 : f;
    var g = e,
      k = !1;
    g || ((g = E.createElement("iframe")), (k = !0));
    kc(g, c, jc);
    d &&
      fb(d, function (n, p) {
        g.dataset[n] = p;
      });
    f &&
      ((g.height = "0"),
      (g.width = "0"),
      (g.style.display = "none"),
      (g.style.visibility = "hidden"));
    a !== void 0 && (g.src = a);
    if (k) {
      var m = (E.body && E.body.lastChild) || E.body || E.head;
      m.parentNode.insertBefore(g, m);
    }
    b && (g.onload = b);
    return g;
  }
  function pc(a, b, c, d) {
    qc(a, b, c, d);
  }
  function rc(a, b, c, d) {
    a.addEventListener
      ? a.addEventListener(b, c, !!d)
      : a.attachEvent && a.attachEvent("on" + b, c);
  }
  function sc(a, b, c) {
    a.removeEventListener
      ? a.removeEventListener(b, c, !1)
      : a.detachEvent && a.detachEvent("on" + b, c);
  }
  function G(a) {
    A.setTimeout(a, 0);
  }
  function tc(a, b) {
    return a && b && a.attributes && a.attributes[b]
      ? a.attributes[b].value
      : null;
  }
  function uc(a) {
    var b = a.innerText || a.textContent || "";
    b &&
      b !== " " &&
      ((b = b.replace(/^[\s\xa0]+/g, "")), (b = b.replace(/[\s\xa0]+$/g, "")));
    b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
    return b;
  }
  function vc(a) {
    var b = E.createElement("div"),
      c = b,
      d,
      e = ac("A<div>" + a + "</div>"),
      f = Fb();
    d = new Xb(f ? f.createHTML(e) : e);
    if (c.nodeType === 1 && /^(script|style)$/i.test(c.tagName))
      throw Error("");
    var g;
    if (d instanceof Xb) g = d.j;
    else throw Error("");
    c.innerHTML = g;
    b = b.lastChild;
    for (var k = []; b && b.firstChild; ) k.push(b.removeChild(b.firstChild));
    return k;
  }
  function wc(a, b, c) {
    c = c || 100;
    for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
    for (var f = a, g = 0; f && g <= c; g++) {
      if (d[String(f.tagName).toLowerCase()]) return f;
      f = f.parentElement;
    }
    return null;
  }
  function xc(a, b, c) {
    var d;
    try {
      d = cc.sendBeacon && cc.sendBeacon(a);
    } catch (e) {
      Va("TAGGING", 15);
    }
    d ? b == null || b() : qc(a, b, c);
  }
  function yc(a, b) {
    try {
      return cc.sendBeacon(a, b);
    } catch (c) {
      Va("TAGGING", 15);
    }
    return !1;
  }
  var zc = {
    cache: "no-store",
    credentials: "include",
    keepalive: !0,
    method: "POST",
    mode: "no-cors",
    redirect: "follow",
  };
  function Ac(a, b, c, d, e) {
    if (Bc()) {
      var f = Object.assign({}, zc);
      b && (f.body = b);
      c &&
        (c.attributionReporting &&
          (f.attributionReporting = c.attributionReporting),
        c.browsingTopics && (f.browsingTopics = c.browsingTopics),
        c.credentials && (f.credentials = c.credentials));
      try {
        var g = A.fetch(a, f);
        if (g)
          return (
            g
              .then(function (m) {
                m && m.ok ? d == null || d() : e == null || e();
              })
              .catch(function () {
                e == null || e();
              }),
            !0
          );
      } catch (m) {}
    }
    if (c && c.Ak) return e == null || e(), !1;
    if (b) {
      var k = yc(a, b);
      k ? d == null || d() : e == null || e();
      return k;
    }
    xc(a, d, e);
    return !0;
  }
  function Bc() {
    return typeof A.fetch === "function";
  }
  function Cc(a, b) {
    var c = a[b];
    c && typeof c.animVal === "string" && (c = c.animVal);
    return c;
  }
  function Dc() {
    var a = A.performance;
    if (a && Za(a.now)) return a.now();
  }
  function Ec() {
    var a,
      b = A.performance;
    if (b && b.getEntriesByType)
      try {
        var c = b.getEntriesByType("navigation");
        c && c.length > 0 && (a = c[0].type);
      } catch (d) {
        return "e";
      }
    if (!a) return "u";
    switch (a) {
      case "navigate":
        return "n";
      case "back_forward":
        return "h";
      case "reload":
        return "r";
      case "prerender":
        return "p";
      default:
        return "x";
    }
  }
  function Fc() {
    return A.performance || void 0;
  }
  function Gc() {
    var a = A.webPixelsManager;
    return a ? a.createShopifyExtend !== void 0 : !1;
  }
  var qc = function (a, b, c, d) {
    var e = new Image(1, 1);
    kc(e, d, {});
    e.onload = function () {
      e.onload = null;
      b && b();
    };
    e.onerror = function () {
      e.onerror = null;
      c && c();
    };
    e.src = a;
    return e;
  };
  function Hc(a, b) {
    return this.evaluate(a) && this.evaluate(b);
  }
  function Ic(a, b) {
    return this.evaluate(a) === this.evaluate(b);
  }
  function Jc(a, b) {
    return this.evaluate(a) || this.evaluate(b);
  }
  function Kc(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    return String(a).indexOf(String(b)) > -1;
  }
  function Lc(a, b) {
    var c = String(this.evaluate(a)),
      d = String(this.evaluate(b));
    return c.substring(0, d.length) === d;
  }
  function Mc(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    switch (a) {
      case "pageLocation":
        var c = A.location.href;
        b instanceof La &&
          b.get("stripProtocol") &&
          (c = c.replace(/^https?:\/\//, ""));
        return c;
    }
  } /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
*/
  var Nc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Oc = function (a) {
      if (a == null) return String(a);
      var b = Nc.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Pc = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Qc = function (a) {
      if (!a || Oc(a) != "object" || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Pc(a, "constructor") &&
          !Pc(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return b === void 0 || Pc(a, b);
    },
    Rc = function (a, b) {
      var c = b || (Oc(a) == "array" ? [] : {}),
        d;
      for (d in a)
        if (Pc(a, d)) {
          var e = a[d];
          Oc(e) == "array"
            ? (Oc(c[d]) != "array" && (c[d] = []), (c[d] = Rc(e, c[d])))
            : Qc(e)
            ? (Qc(c[d]) || (c[d] = {}), (c[d] = Rc(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  function Sc(a) {
    if (a == void 0 || Array.isArray(a) || Qc(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  }
  function Tc(a) {
    return (
      (typeof a === "number" && a >= 0 && isFinite(a) && a % 1 === 0) ||
      (typeof a === "string" && a[0] !== "-" && a === "" + parseInt(a))
    );
  }
  var Uc = function (a) {
    a = a === void 0 ? [] : a;
    this.R = new Ca();
    this.values = [];
    this.ma = !1;
    for (var b in a)
      a.hasOwnProperty(b) &&
        (Tc(b) ? (this.values[Number(b)] = a[Number(b)]) : this.R.set(b, a[b]));
  };
  h = Uc.prototype;
  h.toString = function (a) {
    if (a && a.indexOf(this) >= 0) return "";
    for (var b = [], c = 0; c < this.values.length; c++) {
      var d = this.values[c];
      d === null || d === void 0
        ? b.push("")
        : d instanceof Uc
        ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
        : b.push(String(d));
    }
    return b.join(",");
  };
  h.set = function (a, b) {
    if (!this.ma)
      if (a === "length") {
        if (!Tc(b))
          throw Error("RangeError: Length property must be a valid integer.");
        this.values.length = Number(b);
      } else Tc(a) ? (this.values[Number(a)] = b) : this.R.set(a, b);
  };
  h.get = function (a) {
    return a === "length"
      ? this.length()
      : Tc(a)
      ? this.values[Number(a)]
      : this.R.get(a);
  };
  h.length = function () {
    return this.values.length;
  };
  h.la = function () {
    for (var a = this.R.la(), b = 0; b < this.values.length; b++)
      this.values.hasOwnProperty(b) && a.push(String(b));
    return a;
  };
  h.Vb = function () {
    for (var a = this.R.Vb(), b = 0; b < this.values.length; b++)
      this.values.hasOwnProperty(b) && a.push(this.values[b]);
    return a;
  };
  h.Eb = function () {
    for (var a = this.R.Eb(), b = 0; b < this.values.length; b++)
      this.values.hasOwnProperty(b) && a.push([String(b), this.values[b]]);
    return a;
  };
  h.remove = function (a) {
    Tc(a) ? delete this.values[Number(a)] : this.ma || this.R.remove(a);
  };
  h.pop = function () {
    return this.values.pop();
  };
  h.push = function () {
    return this.values.push.apply(this.values, ta(ya.apply(0, arguments)));
  };
  h.shift = function () {
    return this.values.shift();
  };
  h.splice = function (a, b) {
    var c = ya.apply(2, arguments);
    return b === void 0 && c.length === 0
      ? new Uc(this.values.splice(a))
      : new Uc(
          this.values.splice.apply(this.values, [a, b || 0].concat(ta(c)))
        );
  };
  h.unshift = function () {
    return this.values.unshift.apply(this.values, ta(ya.apply(0, arguments)));
  };
  h.has = function (a) {
    return (Tc(a) && this.values.hasOwnProperty(a)) || this.R.has(a);
  };
  h.Ga = function () {
    this.ma = !0;
    Object.freeze(this.values);
  };
  h.vc = function () {
    return this.ma;
  };
  function Vc(a) {
    for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
    return b;
  }
  var Wc = function (a, b) {
    this.functionName = a;
    this.Jd = b;
    this.R = new Ca();
    this.ma = !1;
  };
  h = Wc.prototype;
  h.toString = function () {
    return this.functionName;
  };
  h.getName = function () {
    return this.functionName;
  };
  h.invoke = function (a) {
    return this.Jd.call.apply(
      this.Jd,
      [new Xc(this, a)].concat(ta(ya.apply(1, arguments)))
    );
  };
  h.qb = function (a) {
    var b = ya.apply(1, arguments);
    try {
      return this.invoke.apply(this, [a].concat(ta(b)));
    } catch (c) {}
  };
  h.get = function (a) {
    return this.R.get(a);
  };
  h.set = function (a, b) {
    this.ma || this.R.set(a, b);
  };
  h.has = function (a) {
    return this.R.has(a);
  };
  h.remove = function (a) {
    this.ma || this.R.remove(a);
  };
  h.la = function () {
    return this.R.la();
  };
  h.Vb = function () {
    return this.R.Vb();
  };
  h.Eb = function () {
    return this.R.Eb();
  };
  h.Ga = function () {
    this.ma = !0;
  };
  h.vc = function () {
    return this.ma;
  };
  var Xc = function (a, b) {
    this.Jd = a;
    this.D = b;
  };
  Xc.prototype.evaluate = function (a) {
    var b = this.D;
    return Array.isArray(a) ? Ja(b, a) : a;
  };
  Xc.prototype.getName = function () {
    return this.Jd.getName();
  };
  Xc.prototype.Kd = function () {
    return this.D.Kd();
  };
  var Yc = function () {
    this.map = new Map();
  };
  Yc.prototype.set = function (a, b) {
    this.map.set(a, b);
  };
  Yc.prototype.get = function (a) {
    return this.map.get(a);
  };
  var Zc = function () {
    this.keys = [];
    this.values = [];
  };
  Zc.prototype.set = function (a, b) {
    this.keys.push(a);
    this.values.push(b);
  };
  Zc.prototype.get = function (a) {
    var b = this.keys.indexOf(a);
    if (b > -1) return this.values[b];
  };
  function $c() {
    try {
      return Map ? new Yc() : new Zc();
    } catch (a) {
      return new Zc();
    }
  }
  var ad = function (a) {
    if (a instanceof ad) return a;
    if (Sc(a)) throw Error("Type of given value has an equivalent Pixie type.");
    this.value = a;
  };
  ad.prototype.getValue = function () {
    return this.value;
  };
  ad.prototype.toString = function () {
    return String(this.value);
  };
  var cd = function (a) {
    this.promise = a;
    this.ma = !1;
    this.R = new Ca();
    this.R.set("then", bd(this));
    this.R.set("catch", bd(this, !0));
    this.R.set("finally", bd(this, !1, !0));
  };
  h = cd.prototype;
  h.get = function (a) {
    return this.R.get(a);
  };
  h.set = function (a, b) {
    this.ma || this.R.set(a, b);
  };
  h.has = function (a) {
    return this.R.has(a);
  };
  h.remove = function (a) {
    this.ma || this.R.remove(a);
  };
  h.la = function () {
    return this.R.la();
  };
  h.Vb = function () {
    return this.R.Vb();
  };
  h.Eb = function () {
    return this.R.Eb();
  };
  var bd = function (a, b, c) {
    b = b === void 0 ? !1 : b;
    c = c === void 0 ? !1 : c;
    return new Wc("", function (d, e) {
      b && ((e = d), (d = void 0));
      c && (e = d);
      d instanceof Wc || (d = void 0);
      e instanceof Wc || (e = void 0);
      var f = Ha(this.D),
        g = function (m) {
          return function (n) {
            return c ? (m.invoke(f), a.promise) : m.invoke(f, n);
          };
        },
        k = a.promise.then(d && g(d), e && g(e));
      return new cd(k);
    });
  };
  cd.prototype.Ga = function () {
    this.ma = !0;
  };
  cd.prototype.vc = function () {
    return this.ma;
  };
  function I(a, b, c) {
    var d = $c(),
      e = function (g, k) {
        for (var m = g.la(), n = 0; n < m.length; n++) k[m[n]] = f(g.get(m[n]));
      },
      f = function (g) {
        var k = d.get(g);
        if (k) return k;
        if (g instanceof Uc) {
          var m = [];
          d.set(g, m);
          for (var n = g.la(), p = 0; p < n.length; p++)
            m[n[p]] = f(g.get(n[p]));
          return m;
        }
        if (g instanceof cd) return g.promise;
        if (g instanceof La) {
          var q = {};
          d.set(g, q);
          e(g, q);
          return q;
        }
        if (g instanceof Wc) {
          var r = function () {
            for (
              var v = ya.apply(0, arguments), t = [], w = 0;
              w < v.length;
              w++
            )
              t[w] = dd(v[w], b, c);
            var x = new Fa(b ? b.Kd() : new Ea());
            b && (x.j = b.j);
            return f(g.invoke.apply(g, [x].concat(ta(t))));
          };
          d.set(g, r);
          e(g, r);
          return r;
        }
        var u = !1;
        switch (c) {
          case 1:
            u = !0;
            break;
          case 2:
            u = !1;
            break;
          case 3:
            u = !1;
            break;
          default:
        }
        if (g instanceof ad && u) return g.getValue();
        switch (typeof g) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return g;
          case "object":
            if (g === null) return null;
        }
      };
    return f(a);
  }
  function dd(a, b, c) {
    var d = $c(),
      e = function (g, k) {
        for (var m in g) g.hasOwnProperty(m) && k.set(m, f(g[m]));
      },
      f = function (g) {
        var k = d.get(g);
        if (k) return k;
        if (Array.isArray(g) || gb(g)) {
          var m = new Uc([]);
          d.set(g, m);
          for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
          return m;
        }
        if (Qc(g)) {
          var p = new La();
          d.set(g, p);
          e(g, p);
          return p;
        }
        if (typeof g === "function") {
          var q = new Wc("", function () {
            for (var x = ya.apply(0, arguments), y = 0; y < x.length; y++)
              x[y] = I(this.evaluate(x[y]), b, c);
            return f((0, this.D.H)(g, g, x));
          });
          d.set(g, q);
          e(g, q);
          return q;
        }
        var t = typeof g;
        if (g === null || t === "string" || t === "number" || t === "boolean")
          return g;
        var w = !1;
        switch (c) {
          case 1:
            w = !0;
            break;
          case 2:
            w = !1;
            break;
          default:
        }
        if (g !== void 0 && w) return new ad(g);
      };
    return f(a);
  }
  function ed() {
    var a = !1;
    return a;
  }
  var fd = {
    supportedMethods:
      "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
        " "
      ),
    concat: function (a) {
      for (var b = [], c = 0; c < this.length(); c++) b.push(this.get(c));
      for (var d = 1; d < arguments.length; d++)
        if (arguments[d] instanceof Uc)
          for (var e = arguments[d], f = 0; f < e.length(); f++)
            b.push(e.get(f));
        else b.push(arguments[d]);
      return new Uc(b);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
      return new Uc(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.invoke(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = c === void 0 ? 0 : Number(c);
      e < 0 && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      c !== void 0 && (e = c < 0 ? d + c : Math.min(c, e));
      for (var f = e; f >= 0; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
      return new Uc(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a) {
      return this.push.apply(this, ta(ya.apply(1, arguments)));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (c !== void 0) e = c;
      else {
        if (d === 0) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break;
          }
        if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var k = f; k < d; k++)
        this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (c !== void 0) e = c;
      else {
        if (d === 0)
          throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break;
          }
        if (g > d)
          throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var k = f; k >= 0; k--)
        this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
      return e;
    },
    reverse: function () {
      for (var a = Vc(this), b = a.length - 1, c = 0; b >= 0; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      b === void 0 && (b = 0);
      b = b < 0 ? Math.max(d + b, 0) : Math.min(b, d);
      c = c === void 0 ? d : c < 0 ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new Uc(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = Vc(this);
      b === void 0
        ? c.sort()
        : c.sort(function (e, f) {
            return Number(b.invoke(a, e, f));
          });
      for (var d = 0; d < c.length; d++)
        c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
      return this;
    },
    splice: function (a, b, c) {
      return this.splice.apply(this, [b, c].concat(ta(ya.apply(3, arguments))));
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a) {
      return this.unshift.apply(this, ta(ya.apply(1, arguments)));
    },
  };
  var gd = function (a) {
    var b;
    b = Error.call(this, a);
    this.message = b.message;
    "stack" in b && (this.stack = b.stack);
  };
  ra(gd, Error);
  var hd = {
      charAt: 1,
      concat: 1,
      indexOf: 1,
      lastIndexOf: 1,
      match: 1,
      replace: 1,
      search: 1,
      slice: 1,
      split: 1,
      substring: 1,
      toLowerCase: 1,
      toLocaleLowerCase: 1,
      toString: 1,
      toUpperCase: 1,
      toLocaleUpperCase: 1,
      trim: 1,
    },
    id = new Ba("break"),
    jd = new Ba("continue");
  function kd(a, b) {
    return this.evaluate(a) + this.evaluate(b);
  }
  function ld(a, b) {
    return this.evaluate(a) && this.evaluate(b);
  }
  function md(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (!(c instanceof Uc))
      throw Error("Error: Non-List argument given to Apply instruction.");
    if (a === null || a === void 0) {
      var d = "TypeError: Can't read property " + b + " of " + a + ".";
      if (ed()) throw new gd(d);
      throw Error(d);
    }
    var e = typeof a === "number";
    if (typeof a === "boolean" || e) {
      if (b === "toString") {
        if (e && c.length()) {
          var f = I(c.get(0));
          try {
            return a.toString(f);
          } catch (y) {}
        }
        return a.toString();
      }
      var g = "TypeError: " + a + "." + b + " is not a function.";
      if (ed()) throw new gd(g);
      throw Error(g);
    }
    if (typeof a === "string") {
      if (hd.hasOwnProperty(b)) {
        var k = 2;
        k = 1;
        var m = I(c, void 0, k);
        return dd(a[b].apply(a, m), this.D);
      }
      var n = "TypeError: " + b + " is not a function";
      if (ed()) throw new gd(n);
      throw Error(n);
    }
    if (a instanceof Uc) {
      if (a.has(b)) {
        var p = a.get(String(b));
        if (p instanceof Wc) {
          var q = Vc(c);
          return p.invoke.apply(p, [this.D].concat(ta(q)));
        }
        var r = "TypeError: " + b + " is not a function";
        if (ed()) throw new gd(r);
        throw Error(r);
      }
      if (fd.supportedMethods.indexOf(b) >= 0) {
        var u = Vc(c);
        return fd[b].call.apply(fd[b], [a, this.D].concat(ta(u)));
      }
    }
    if (a instanceof Wc || a instanceof La || a instanceof cd) {
      if (a.has(b)) {
        var v = a.get(b);
        if (v instanceof Wc) {
          var t = Vc(c);
          return v.invoke.apply(v, [this.D].concat(ta(t)));
        }
        var w = "TypeError: " + b + " is not a function";
        if (ed()) throw new gd(w);
        throw Error(w);
      }
      if (b === "toString") return a instanceof Wc ? a.getName() : a.toString();
      if (b === "hasOwnProperty") return a.has(c.get(0));
    }
    if (a instanceof ad && b === "toString") return a.toString();
    var x = "TypeError: Object has no '" + b + "' property.";
    if (ed()) throw new gd(x);
    throw Error(x);
  }
  function nd(a, b) {
    a = this.evaluate(a);
    if (typeof a !== "string")
      throw Error("Invalid key name given for assignment.");
    var c = this.D;
    if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
    var d = this.evaluate(b);
    c.set(a, d);
    return d;
  }
  function od() {
    var a = ya.apply(0, arguments),
      b = Ha(this.D),
      c = Ia(b, a);
    if (c instanceof Ba) return c;
  }
  function pd() {
    return id;
  }
  function qd(a) {
    for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
      var d = this.evaluate(b[c]);
      if (d instanceof Ba) return d;
    }
  }
  function rd() {
    for (var a = this.D, b = 0; b < arguments.length - 1; b += 2) {
      var c = arguments[b];
      if (typeof c === "string") {
        var d = this.evaluate(arguments[b + 1]);
        Ga(a, c, d, !0);
      }
    }
  }
  function sd() {
    return jd;
  }
  function td(a, b) {
    return new Ba(a, this.evaluate(b));
  }
  function ud(a, b) {
    var c = ya.apply(2, arguments),
      d = new Uc();
    b = this.evaluate(b);
    for (var e = 0; e < b.length; e++) d.push(b[e]);
    var f = [51, a, d].concat(ta(c));
    this.D.add(a, this.evaluate(f));
  }
  function vd(a, b) {
    return this.evaluate(a) / this.evaluate(b);
  }
  function wd(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    var c = a instanceof ad,
      d = b instanceof ad;
    return c || d ? (c && d ? a.getValue() === b.getValue() : !1) : a == b;
  }
  function xd() {
    for (var a, b = 0; b < arguments.length; b++)
      a = this.evaluate(arguments[b]);
    return a;
  }
  function yd(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = Ia(f, d);
      if (g instanceof Ba) {
        if (g.type === "break") break;
        if (g.type === "return") return g;
      }
    }
  }
  function zd(a, b, c) {
    if (typeof b === "string")
      return yd(
        a,
        function () {
          return b.length;
        },
        function (f) {
          return f;
        },
        c
      );
    if (
      b instanceof La ||
      b instanceof cd ||
      b instanceof Uc ||
      b instanceof Wc
    ) {
      var d = b.la(),
        e = d.length;
      return yd(
        a,
        function () {
          return e;
        },
        function (f) {
          return d[f];
        },
        c
      );
    }
  }
  function Ad(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return zd(
      function (e) {
        d.set(a, e);
        return d;
      },
      b,
      c
    );
  }
  function Bd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return zd(
      function (e) {
        var f = Ha(d);
        Ga(f, a, e, !0);
        return f;
      },
      b,
      c
    );
  }
  function Cd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return zd(
      function (e) {
        var f = Ha(d);
        f.add(a, e);
        return f;
      },
      b,
      c
    );
  }
  function Dd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return Ed(
      function (e) {
        d.set(a, e);
        return d;
      },
      b,
      c
    );
  }
  function Fd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return Ed(
      function (e) {
        var f = Ha(d);
        Ga(f, a, e, !0);
        return f;
      },
      b,
      c
    );
  }
  function Gd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return Ed(
      function (e) {
        var f = Ha(d);
        f.add(a, e);
        return f;
      },
      b,
      c
    );
  }
  function Ed(a, b, c) {
    if (typeof b === "string")
      return yd(
        a,
        function () {
          return b.length;
        },
        function (d) {
          return b[d];
        },
        c
      );
    if (b instanceof Uc)
      return yd(
        a,
        function () {
          return b.length();
        },
        function (d) {
          return b.get(d);
        },
        c
      );
    if (ed()) throw new gd("The value is not iterable.");
    throw new TypeError("The value is not iterable.");
  }
  function Hd(a, b, c, d) {
    function e(p, q) {
      for (var r = 0; r < f.length(); r++) {
        var u = f.get(r);
        q.add(u, p.get(u));
      }
    }
    var f = this.evaluate(a);
    if (!(f instanceof Uc))
      throw Error("TypeError: Non-List argument given to ForLet instruction.");
    var g = this.D;
    d = this.evaluate(d);
    var k = Ha(g);
    for (e(g, k); Ja(k, b); ) {
      var m = Ia(k, d);
      if (m instanceof Ba) {
        if (m.type === "break") break;
        if (m.type === "return") return m;
      }
      var n = Ha(g);
      e(k, n);
      Ja(n, c);
      k = n;
    }
  }
  function Id(a, b) {
    var c = ya.apply(2, arguments),
      d = this.D,
      e = this.evaluate(b);
    if (!(e instanceof Uc))
      throw Error("Error: non-List value given for Fn argument names.");
    return new Wc(
      a,
      (function () {
        return function () {
          var f = ya.apply(0, arguments),
            g = Ha(d);
          g.j === void 0 && (g.j = this.D.j);
          for (var k = 0; k < f.length; k++)
            if (((f[k] = this.evaluate(f[k])), f[k] instanceof Ba)) return f[k];
          for (var m = e.get("length"), n = 0; n < m; n++)
            n < f.length ? g.add(e.get(n), f[n]) : g.add(e.get(n), void 0);
          g.add("arguments", new Uc(f));
          var p = Ia(g, c);
          if (p instanceof Ba) return p.type === "return" ? p.data : p;
        };
      })()
    );
  }
  function Jd(a) {
    a = this.evaluate(a);
    var b = this.D;
    if (Kd && !b.has(a)) throw new ReferenceError(a + " is not defined.");
    return b.get(a);
  }
  function Ld(a, b) {
    var c;
    a = this.evaluate(a);
    b = this.evaluate(b);
    if (a === void 0 || a === null) {
      var d =
        "TypeError: Cannot read properties of " + a + " (reading '" + b + "')";
      if (ed()) throw new gd(d);
      throw Error(d);
    }
    if (
      a instanceof La ||
      a instanceof cd ||
      a instanceof Uc ||
      a instanceof Wc
    )
      c = a.get(b);
    else if (typeof a === "string")
      b === "length" ? (c = a.length) : Tc(b) && (c = a[b]);
    else if (a instanceof ad) return;
    return c;
  }
  function Md(a, b) {
    return this.evaluate(a) > this.evaluate(b);
  }
  function Nd(a, b) {
    return this.evaluate(a) >= this.evaluate(b);
  }
  function Od(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    a instanceof ad && (a = a.getValue());
    b instanceof ad && (b = b.getValue());
    return a === b;
  }
  function Pd(a, b) {
    return !Od.call(this, a, b);
  }
  function Qd(a, b, c) {
    var d = [];
    this.evaluate(a) ? (d = this.evaluate(b)) : c && (d = this.evaluate(c));
    var e = Ia(this.D, d);
    if (e instanceof Ba) return e;
  }
  var Kd = !1;
  function Rd(a, b) {
    return this.evaluate(a) < this.evaluate(b);
  }
  function Sd(a, b) {
    return this.evaluate(a) <= this.evaluate(b);
  }
  function Td() {
    for (var a = new Uc(), b = 0; b < arguments.length; b++) {
      var c = this.evaluate(arguments[b]);
      a.push(c);
    }
    return a;
  }
  function Ud() {
    for (var a = new La(), b = 0; b < arguments.length - 1; b += 2) {
      var c = this.evaluate(arguments[b]) + "",
        d = this.evaluate(arguments[b + 1]);
      a.set(c, d);
    }
    return a;
  }
  function Vd(a, b) {
    return this.evaluate(a) % this.evaluate(b);
  }
  function Wd(a, b) {
    return this.evaluate(a) * this.evaluate(b);
  }
  function Xd(a) {
    return -this.evaluate(a);
  }
  function Yd(a) {
    return !this.evaluate(a);
  }
  function Zd(a, b) {
    return !wd.call(this, a, b);
  }
  function $d() {
    return null;
  }
  function ae(a, b) {
    return this.evaluate(a) || this.evaluate(b);
  }
  function be(a, b) {
    var c = this.evaluate(a);
    this.evaluate(b);
    return c;
  }
  function ce(a) {
    return this.evaluate(a);
  }
  function de() {
    return ya.apply(0, arguments);
  }
  function ee(a) {
    return new Ba("return", this.evaluate(a));
  }
  function fe(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (a === null || a === void 0) {
      var d = "TypeError: Can't set property " + b + " of " + a + ".";
      if (ed()) throw new gd(d);
      throw Error(d);
    }
    (a instanceof Wc || a instanceof Uc || a instanceof La) &&
      a.set(String(b), c);
    return c;
  }
  function he(a, b) {
    return this.evaluate(a) - this.evaluate(b);
  }
  function ie(a, b, c) {
    a = this.evaluate(a);
    var d = this.evaluate(b),
      e = this.evaluate(c);
    if (!Array.isArray(d) || !Array.isArray(e))
      throw Error("Error: Malformed switch instruction.");
    for (var f, g = !1, k = 0; k < d.length; k++)
      if (g || a === this.evaluate(d[k]))
        if (((f = this.evaluate(e[k])), f instanceof Ba)) {
          var m = f.type;
          if (m === "break") return;
          if (m === "return" || m === "continue") return f;
        } else g = !0;
    if (
      e.length === d.length + 1 &&
      ((f = this.evaluate(e[e.length - 1])),
      f instanceof Ba && (f.type === "return" || f.type === "continue"))
    )
      return f;
  }
  function je(a, b, c) {
    return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c);
  }
  function ke(a) {
    a = this.evaluate(a);
    return a instanceof Wc ? "function" : typeof a;
  }
  function le() {
    for (var a = this.D, b = 0; b < arguments.length; b++) {
      var c = arguments[b];
      typeof c !== "string" || a.add(c, void 0);
    }
  }
  function me(a, b, c, d) {
    var e = this.evaluate(d);
    if (this.evaluate(c)) {
      var f = Ia(this.D, e);
      if (f instanceof Ba) {
        if (f.type === "break") return;
        if (f.type === "return") return f;
      }
    }
    for (; this.evaluate(a); ) {
      var g = Ia(this.D, e);
      if (g instanceof Ba) {
        if (g.type === "break") break;
        if (g.type === "return") return g;
      }
      this.evaluate(b);
    }
  }
  function ne(a) {
    return ~Number(this.evaluate(a));
  }
  function oe(a, b) {
    return Number(this.evaluate(a)) << Number(this.evaluate(b));
  }
  function pe(a, b) {
    return Number(this.evaluate(a)) >> Number(this.evaluate(b));
  }
  function qe(a, b) {
    return Number(this.evaluate(a)) >>> Number(this.evaluate(b));
  }
  function re(a, b) {
    return Number(this.evaluate(a)) & Number(this.evaluate(b));
  }
  function se(a, b) {
    return Number(this.evaluate(a)) ^ Number(this.evaluate(b));
  }
  function te(a, b) {
    return Number(this.evaluate(a)) | Number(this.evaluate(b));
  }
  function ue() {}
  function ve(a, b, c, d, e) {
    var f = !0;
    try {
      var g = this.evaluate(c);
      if (g instanceof Ba) return g;
    } catch (r) {
      if (!(r instanceof gd && a)) throw ((f = r instanceof gd), r);
      var k = Ha(this.D),
        m = new ad(r);
      k.add(b, m);
      var n = this.evaluate(d),
        p = Ia(k, n);
      if (p instanceof Ba) return p;
    } finally {
      if (f && e !== void 0) {
        var q = this.evaluate(e);
        if (q instanceof Ba) return q;
      }
    }
  }
  var xe = function () {
    this.j = new Ka();
    we(this);
  };
  xe.prototype.execute = function (a) {
    return this.j.ui(a);
  };
  var we = function (a) {
    var b = function (c, d) {
      var e = new Wc(String(c), d);
      e.Ga();
      a.j.j.set(String(c), e);
    };
    b("map", Ud);
    b("and", Hc);
    b("contains", Kc);
    b("equals", Ic);
    b("or", Jc);
    b("startsWith", Lc);
    b("variable", Mc);
  };
  var ze = function () {
    this.C = !1;
    this.j = new Ka();
    ye(this);
    this.C = !0;
  };
  ze.prototype.execute = function (a) {
    return Ae(this.j.ui(a));
  };
  var Be = function (a, b, c) {
    return Ae(a.j.Al(b, c));
  };
  ze.prototype.Ga = function () {
    this.j.Ga();
  };
  var ye = function (a) {
    var b = function (c, d) {
      var e = String(c),
        f = new Wc(e, d);
      f.Ga();
      a.j.j.set(e, f);
    };
    b(0, kd);
    b(1, ld);
    b(2, md);
    b(3, nd);
    b(56, re);
    b(57, oe);
    b(58, ne);
    b(59, te);
    b(60, pe);
    b(61, qe);
    b(62, se);
    b(53, od);
    b(4, pd);
    b(5, qd);
    b(52, rd);
    b(6, sd);
    b(49, td);
    b(7, Td);
    b(8, Ud);
    b(9, qd);
    b(50, ud);
    b(10, vd);
    b(12, wd);
    b(13, xd);
    b(51, Id);
    b(47, Ad);
    b(54, Bd);
    b(55, Cd);
    b(63, Hd);
    b(64, Dd);
    b(65, Fd);
    b(66, Gd);
    b(15, Jd);
    b(16, Ld);
    b(17, Ld);
    b(18, Md);
    b(19, Nd);
    b(20, Od);
    b(21, Pd);
    b(22, Qd);
    b(23, Rd);
    b(24, Sd);
    b(25, Vd);
    b(26, Wd);
    b(27, Xd);
    b(28, Yd);
    b(29, Zd);
    b(45, $d);
    b(30, ae);
    b(32, be);
    b(33, be);
    b(34, ce);
    b(35, ce);
    b(46, de);
    b(36, ee);
    b(43, fe);
    b(37, he);
    b(38, ie);
    b(39, je);
    b(67, ve);
    b(40, ke);
    b(44, ue);
    b(41, le);
    b(42, me);
  };
  ze.prototype.Kd = function () {
    return this.j.Kd();
  };
  function Ae(a) {
    if (
      a instanceof Ba ||
      a instanceof Wc ||
      a instanceof Uc ||
      a instanceof La ||
      a instanceof cd ||
      a instanceof ad ||
      a === null ||
      a === void 0 ||
      typeof a === "string" ||
      typeof a === "number" ||
      typeof a === "boolean"
    )
      return a;
  }
  var Ce = function (a) {
    this.message = a;
  };
  function De(a) {
    var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
      a
    ];
    return b === void 0
      ? new Ce(
          "Value " + a + " can not be encoded in web-safe base64 dictionary."
        )
      : b;
  }
  function Ee(a) {
    switch (a) {
      case 1:
        return "1";
      case 2:
      case 4:
        return "0";
      default:
        return "-";
    }
  }
  var Fe = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Ge(a, b) {
    for (var c = "", d = !0; a > 7; ) {
      var e = a & 31;
      a >>= 5;
      d ? (d = !1) : (e |= 32);
      c = "" + De(e) + c;
    }
    a <<= 2;
    d || (a |= 32);
    return (c = "" + De(a | b) + c);
  }
  var He = (function () {
    function a(b) {
      return {
        toString: function () {
          return b;
        },
      };
    }
    return {
      Vk: a("consent"),
      Hi: a("convert_case_to"),
      Ii: a("convert_false_to"),
      Ji: a("convert_null_to"),
      Ki: a("convert_true_to"),
      Li: a("convert_undefined_to"),
      In: a("debug_mode_metadata"),
      sa: a("function"),
      xh: a("instance_name"),
      Dl: a("live_only"),
      El: a("malware_disabled"),
      METADATA: a("metadata"),
      Hl: a("original_activity_id"),
      Un: a("original_vendor_template_id"),
      Tn: a("once_on_load"),
      Gl: a("once_per_event"),
      Vj: a("once_per_load"),
      Wn: a("priority_override"),
      Xn: a("respected_consent_types"),
      fk: a("setup_tags"),
      Me: a("tag_id"),
      kk: a("teardown_tags"),
    };
  })();
  var Je = function (a) {
      return Ie[a];
    },
    Le = function (a) {
      return Ke[a];
    },
    Ne = function (a) {
      return Me[a];
    },
    Oe = [],
    Me = {
      "\x00": "&#0;",
      '"': "&quot;",
      "&": "&amp;",
      "'": "&#39;",
      "<": "&lt;",
      ">": "&gt;",
      "\t": "&#9;",
      "\n": "&#10;",
      "\v": "&#11;",
      "\f": "&#12;",
      "\r": "&#13;",
      " ": "&#32;",
      "-": "&#45;",
      "/": "&#47;",
      "=": "&#61;",
      "`": "&#96;",
      "\u0085": "&#133;",
      "\u00a0": "&#160;",
      "\u2028": "&#8232;",
      "\u2029": "&#8233;",
    },
    Pe = /[\x00\x22\x26\x27\x3c\x3e]/g;
  var Ue = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
    Ke = {
      "\x00": "\\x00",
      "\b": "\\x08",
      "\t": "\\t",
      "\n": "\\n",
      "\v": "\\x0b",
      "\f": "\\f",
      "\r": "\\r",
      '"': "\\x22",
      "&": "\\x26",
      "'": "\\x27",
      "/": "\\/",
      "<": "\\x3c",
      "=": "\\x3d",
      ">": "\\x3e",
      "\\": "\\\\",
      "\u0085": "\\x85",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029",
      $: "\\x24",
      "(": "\\x28",
      ")": "\\x29",
      "*": "\\x2a",
      "+": "\\x2b",
      ",": "\\x2c",
      "-": "\\x2d",
      ".": "\\x2e",
      ":": "\\x3a",
      "?": "\\x3f",
      "[": "\\x5b",
      "]": "\\x5d",
      "^": "\\x5e",
      "{": "\\x7b",
      "|": "\\x7c",
      "}": "\\x7d",
    };
  Oe[7] = function (a) {
    return String(a).replace(Ue, Le);
  };
  Oe[8] = function (a) {
    if (a == null) return " null ";
    switch (typeof a) {
      case "boolean":
      case "number":
        return " " + a + " ";
      default:
        return "'" + String(String(a)).replace(Ue, Le) + "'";
    }
  };
  var bf =
      /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
    Ie = {
      "\x00": "%00",
      "\u0001": "%01",
      "\u0002": "%02",
      "\u0003": "%03",
      "\u0004": "%04",
      "\u0005": "%05",
      "\u0006": "%06",
      "\u0007": "%07",
      "\b": "%08",
      "\t": "%09",
      "\n": "%0A",
      "\v": "%0B",
      "\f": "%0C",
      "\r": "%0D",
      "\u000e": "%0E",
      "\u000f": "%0F",
      "\u0010": "%10",
      "\u0011": "%11",
      "\u0012": "%12",
      "\u0013": "%13",
      "\u0014": "%14",
      "\u0015": "%15",
      "\u0016": "%16",
      "\u0017": "%17",
      "\u0018": "%18",
      "\u0019": "%19",
      "\u001a": "%1A",
      "\u001b": "%1B",
      "\u001c": "%1C",
      "\u001d": "%1D",
      "\u001e": "%1E",
      "\u001f": "%1F",
      " ": "%20",
      '"': "%22",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "<": "%3C",
      ">": "%3E",
      "\\": "%5C",
      "{": "%7B",
      "}": "%7D",
      "\u007f": "%7F",
      "\u0085": "%C2%85",
      "\u00a0": "%C2%A0",
      "\u2028": "%E2%80%A8",
      "\u2029": "%E2%80%A9",
      "\uff01": "%EF%BC%81",
      "\uff03": "%EF%BC%83",
      "\uff04": "%EF%BC%84",
      "\uff06": "%EF%BC%86",
      "\uff07": "%EF%BC%87",
      "\uff08": "%EF%BC%88",
      "\uff09": "%EF%BC%89",
      "\uff0a": "%EF%BC%8A",
      "\uff0b": "%EF%BC%8B",
      "\uff0c": "%EF%BC%8C",
      "\uff0f": "%EF%BC%8F",
      "\uff1a": "%EF%BC%9A",
      "\uff1b": "%EF%BC%9B",
      "\uff1d": "%EF%BC%9D",
      "\uff1f": "%EF%BC%9F",
      "\uff20": "%EF%BC%A0",
      "\uff3b": "%EF%BC%BB",
      "\uff3d": "%EF%BC%BD",
    };
  Oe[16] = function (a) {
    return a;
  };
  var df;
  var ef = [],
    ff = [],
    gf = [],
    hf = [],
    jf = [],
    kf = {},
    lf,
    mf;
  function nf(a) {
    mf = mf || a;
  }
  function of(a) {}
  var pf,
    qf = [],
    rf = [];
  function sf(a, b) {
    var c = {};
    c[He.sa] = "__" + a;
    for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
    return c;
  }
  function tf(a, b, c) {
    try {
      return lf(uf(a, b, c));
    } catch (d) {
      JSON.stringify(a);
    }
    return 2;
  }
  function vf(a) {
    var b = a[He.sa];
    if (!b) throw Error("Error: No function name given for function call.");
    return !!kf[b];
  }
  var uf = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = wf(a[e], b, c));
      return d;
    },
    wf = function (a, b, c) {
      if (Array.isArray(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(wf(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = ef[f];
            if (!g || b.isBlocked(g)) return;
            c[f] = !0;
            var k = String(g[He.xh]);
            try {
              var m = uf(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = xf(m, { event: b, index: f, type: 2, name: k });
              pf && (d = pf.Wl(d, m));
            } catch (y) {
              b.logMacroError && b.logMacroError(y, Number(f), k), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[wf(a[n], b, c)] = wf(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = wf(a[q], b, c);
              mf && (p = p || mf.Lm(r));
              d.push(r);
            }
            return mf && p ? mf.Zl(d) : d.join("");
          case "escape":
            d = wf(a[1], b, c);
            if (mf && Array.isArray(a[1]) && a[1][0] === "macro" && mf.Mm(a))
              return mf.hn(d);
            d = String(d);
            for (var u = 2; u < a.length; u++) Oe[a[u]] && (d = Oe[a[u]](d));
            return d;
          case "tag":
            var v = a[1];
            if (!hf[v])
              throw Error("Unable to resolve tag reference " + v + ".");
            return { sk: a[2], index: v };
          case "zb":
            var t = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            t[He.sa] = a[1];
            var w = tf(t, b, c),
              x = !!a[4];
            return x || w !== 2 ? x !== (w === 1) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    xf = function (a, b) {
      var c = a[He.sa],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = kf[c],
        f =
          b &&
          b.type === 2 &&
          (d == null ? void 0 : d.reportMacroDiscrepancy) &&
          e &&
          qf.indexOf(c) !== -1,
        g = {},
        k = {},
        m;
      for (m in a)
        a.hasOwnProperty(m) &&
          sb(m, "vtp_") &&
          (e && (g[m] = a[m]), !e || f) &&
          (k[m.substring(4)] = a[m]);
      e &&
        d &&
        d.cachedModelValues &&
        (g.vtp_gtmCachedValues = d.cachedModelValues);
      if (b) {
        if (b.name == null) {
          var n;
          a: {
            var p = b.type,
              q = b.index;
            if (q == null) n = "";
            else {
              var r;
              switch (p) {
                case 2:
                  r = ef[q];
                  break;
                case 1:
                  r = hf[q];
                  break;
                default:
                  n = "";
                  break a;
              }
              var u = r && r[He.xh];
              n = u ? String(u) : "";
            }
          }
          b.name = n;
        }
        e && ((g.vtp_gtmEntityIndex = b.index), (g.vtp_gtmEntityName = b.name));
      }
      var v, t, w;
      if (f && rf.indexOf(c) === -1) {
        rf.push(c);
        var x = nb();
        v = e(g);
        var y = nb() - x,
          B = nb();
        t = df(c, k, b);
        w = y - (nb() - B);
      } else if ((e && (v = e(g)), !e || f)) t = df(c, k, b);
      f &&
        d &&
        (d.reportMacroDiscrepancy(d.id, c, void 0, !0),
        Sc(v)
          ? (Array.isArray(v)
              ? Array.isArray(t)
              : Qc(v)
              ? Qc(t)
              : typeof v === "function"
              ? typeof t === "function"
              : v === t) || d.reportMacroDiscrepancy(d.id, c)
          : v !== t && d.reportMacroDiscrepancy(d.id, c),
        w !== void 0 && d.reportMacroDiscrepancy(d.id, c, w));
      return e ? v : t;
    };
  var yf = function (a, b, c) {
    var d;
    d = Error.call(this, c);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.permissionId = a;
    this.parameters = b;
    this.name = "PermissionError";
  };
  ra(yf, Error);
  yf.prototype.getMessage = function () {
    return this.message;
  };
  function zf(a, b) {
    if (Array.isArray(a)) {
      Object.defineProperty(a, "context", { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) zf(a[c], b[c]);
    }
  }
  var Af = function (a, b) {
    var c;
    c = Error.call(
      this,
      "Wrapped error for Dust debugging. Original error message: " + a.message
    );
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.Ym = a;
    this.j = [];
    this.C = b;
  };
  ra(Af, Error);
  function Bf() {
    return function (a, b) {
      a instanceof Af || (a = new Af(a, Cf));
      b && a instanceof Af && a.j.push(b);
      throw a;
    };
  }
  function Cf(a) {
    if (!a.length) return a;
    a.push({ id: "main", line: 0 });
    for (var b = a.length - 1; b > 0; b--) $a(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; c > 0; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  function Df(a) {
    function b(r) {
      for (var u = 0; u < r.length; u++) d[r[u]] = !0;
    }
    for (var c = [], d = [], e = Ef(a), f = 0; f < ff.length; f++) {
      var g = ff[f],
        k = Ff(g, e);
      if (k) {
        for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
        b(g.block || []);
      } else k === null && b(g.block || []);
    }
    for (var p = [], q = 0; q < hf.length; q++) c[q] && !d[q] && (p[q] = !0);
    return p;
  }
  function Ff(a, b) {
    for (var c = a["if"] || [], d = 0; d < c.length; d++) {
      var e = b(c[d]);
      if (e === 0) return !1;
      if (e === 2) return null;
    }
    for (var f = a.unless || [], g = 0; g < f.length; g++) {
      var k = b(f[g]);
      if (k === 2) return null;
      if (k === 1) return !1;
    }
    return !0;
  }
  function Ef(a) {
    var b = [];
    return function (c) {
      b[c] === void 0 && (b[c] = tf(gf[c], a));
      return b[c];
    };
  }
  var Gf = {
    Wl: function (a, b) {
      b[He.Hi] &&
        typeof a === "string" &&
        (a = b[He.Hi] === 1 ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(He.Ji) && a === null && (a = b[He.Ji]);
      b.hasOwnProperty(He.Li) && a === void 0 && (a = b[He.Li]);
      b.hasOwnProperty(He.Ki) && a === !0 && (a = b[He.Ki]);
      b.hasOwnProperty(He.Ii) && a === !1 && (a = b[He.Ii]);
      return a;
    },
  };
  var Hf = function () {
      this.j = {};
    },
    Jf = function (a, b) {
      var c = If.j,
        d;
      (d = c.j)[a] != null || (d[a] = []);
      c.j[a].push(function () {
        return b.apply(null, ta(ya.apply(0, arguments)));
      });
    };
  function Kf(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = "A policy function denied the permission request";
        try {
          (f = a[e](b, c, d)), (g += ".");
        } catch (k) {
          g =
            typeof k === "string"
              ? g + (": " + k)
              : k instanceof Error
              ? g + (": " + k.message)
              : g + ".";
        }
        if (!f) throw new yf(c, d, g);
      }
  }
  function Lf(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.j[d],
          f = a.j.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Kf(e, b, d, g);
          Kf(f, b, d, g);
        }
      }
    };
  }
  var Pf = function () {
      var a = data.permissions || {},
        b = Mf.ctid,
        c = this;
      this.C = {};
      this.j = new Hf();
      var d = {},
        e = {},
        f = Lf(this.j, b, function () {
          var g = arguments[0];
          return g && d[g]
            ? d[g].apply(void 0, Array.prototype.slice.call(arguments, 0))
            : {};
        });
      fb(a, function (g, k) {
        function m(p) {
          var q = ya.apply(1, arguments);
          if (!n[p])
            throw Nf(
              p,
              {},
              "The requested additional permission " + p + " is not configured."
            );
          f.apply(null, [p].concat(ta(q)));
        }
        var n = {};
        fb(k, function (p, q) {
          var r = Of(p, q);
          n[p] = r.assert;
          d[p] || (d[p] = r.M);
          r.mk && !e[p] && (e[p] = r.mk);
        });
        c.C[g] = function (p, q) {
          var r = n[p];
          if (!r)
            throw Nf(
              p,
              {},
              "The requested permission " + p + " is not configured."
            );
          var u = Array.prototype.slice.call(arguments, 0);
          r.apply(void 0, u);
          f.apply(void 0, u);
          var v = e[p];
          v && v.apply(null, [m].concat(ta(u.slice(1))));
        };
      });
    },
    Qf = function (a) {
      return If.C[a] || function () {};
    };
  function Of(a, b) {
    var c = sf(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Nf;
    try {
      return xf(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new yf(e, {}, "Permission " + e + " is unknown.");
        },
        M: function () {
          throw new yf(a, {}, "Permission " + a + " is unknown.");
        },
      };
    }
  }
  function Nf(a, b, c) {
    return new yf(a, b, c);
  }
  var Rf = !1;
  var Sf = {};
  Sf.Nk = ib("");
  Sf.dm = ib("");
  var Yf = {},
    Zf =
      ((Yf.uaa = !0),
      (Yf.uab = !0),
      (Yf.uafvl = !0),
      (Yf.uamb = !0),
      (Yf.uam = !0),
      (Yf.uap = !0),
      (Yf.uapv = !0),
      (Yf.uaw = !0),
      Yf);
  var gg = function (a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = a,
          e = b[c];
        if (!eg.exec(e)) throw Error("Invalid key wildcard");
        var f = e.indexOf(".*"),
          g = f !== -1 && f === e.length - 2,
          k = g ? e.slice(0, e.length - 2) : e,
          m;
        a: if (d.length === 0) m = !1;
        else {
          for (var n = d.split("."), p = 0; p < n.length; p++)
            if (!fg.exec(n[p])) {
              m = !1;
              break a;
            }
          m = !0;
        }
        if (
          !m || k.length > d.length || (!g && d.length !== e.length)
            ? 0
            : g
            ? sb(d, k) && (d === k || d.charAt(k.length) === ".")
            : d === k
        )
          return !0;
      }
      return !1;
    },
    fg = /^[a-z$_][\w$]*$/i,
    eg = /^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i;
  var hg = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function ig(a, b) {
    var c = String(a),
      d = String(b),
      e = c.length - d.length;
    return e >= 0 && c.indexOf(d, e) === e;
  }
  var jg = new eb();
  function kg(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + String(d),
        f = jg.get(e);
      f || ((f = new RegExp(b, d)), jg.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function lg(a, b) {
    return String(a).indexOf(String(b)) >= 0;
  }
  function mg(a, b) {
    return String(a) === String(b);
  }
  function ng(a, b) {
    return Number(a) >= Number(b);
  }
  function og(a, b) {
    return Number(a) <= Number(b);
  }
  function pg(a, b) {
    return Number(a) > Number(b);
  }
  function qg(a, b) {
    return Number(a) < Number(b);
  }
  function rg(a, b) {
    return sb(String(a), String(b));
  }
  var sg = function (a, b) {
      return a.length && b.length && a.lastIndexOf(b) === a.length - b.length;
    },
    tg = function (a, b) {
      var c = b.charAt(b.length - 1) === "*" || b === "/" || b === "/*";
      sg(b, "/*") && (b = b.slice(0, -2));
      sg(b, "?") && (b = b.slice(0, -1));
      var d = b.split("*");
      if (!c && d.length === 1) return a === d[0];
      for (var e = -1, f = 0; f < d.length; f++) {
        var g = d[f];
        if (g) {
          e = a.indexOf(g, e);
          if (e === -1 || (f === 0 && e !== 0)) return !1;
          e += g.length;
        }
      }
      if (c || e === a.length) return !0;
      var k = d[d.length - 1];
      return a.lastIndexOf(k) === a.length - k.length;
    },
    ug = function (a) {
      return a.protocol === "https:" && (!a.port || a.port === "443");
    },
    xg = function (a, b) {
      var c;
      if (!(c = !ug(a))) {
        var d;
        a: {
          var e = a.hostname.split(".");
          if (e.length < 2) d = !1;
          else {
            for (var f = 0; f < e.length; f++)
              if (!vg.exec(e[f])) {
                d = !1;
                break a;
              }
            d = !0;
          }
        }
        c = !d;
      }
      if (c) return !1;
      for (var g = 0; g < b.length; g++) {
        var k;
        var m = a,
          n = b[g];
        if (!wg.exec(n)) throw Error("Invalid Wildcard");
        var p = n.slice(8),
          q = p.slice(0, p.indexOf("/")),
          r;
        var u = m.hostname,
          v = q;
        if (v.indexOf("*.") !== 0) r = u.toLowerCase() === v.toLowerCase();
        else {
          v = v.slice(2);
          var t = u.toLowerCase().indexOf(v.toLowerCase());
          r =
            t === -1
              ? !1
              : u.length === v.length
              ? !0
              : u.length !== v.length + t
              ? !1
              : u[t - 1] === ".";
        }
        if (r) {
          var w = p.slice(p.indexOf("/"));
          k = tg(m.pathname + m.search, w) ? !0 : !1;
        } else k = !1;
        if (k) return !0;
      }
      return !1;
    },
    vg = /^[a-z0-9-]+$/i,
    wg = /^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i;
  var yg =
      /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
    zg = { Fn: "function", PixieMap: "Object", List: "Array" };
  function K(a, b, c) {
    for (var d = 0; d < b.length; d++) {
      var e = yg.exec(b[d]);
      if (!e) throw Error("Internal Error in " + a);
      var f = e[1],
        g = e[2] === "!",
        k = e[3],
        m = c[d];
      if (m == null) {
        if (g)
          throw Error(
            "Error in " + a + ". Required argument " + f + " not supplied."
          );
      } else if (k !== "*") {
        var n = typeof m;
        m instanceof Wc
          ? (n = "Fn")
          : m instanceof Uc
          ? (n = "List")
          : m instanceof La
          ? (n = "PixieMap")
          : m instanceof cd
          ? (n = "PixiePromise")
          : m instanceof ad && (n = "OpaqueValue");
        if (n !== k)
          throw Error(
            "Error in " +
              a +
              ". Argument " +
              f +
              " has type " +
              ((zg[n] || n) + ", which does not match required type ") +
              ((zg[k] || k) + ".")
          );
      }
    }
  }
  function Ag(a) {
    return "" + a;
  }
  function Bg(a, b) {
    var c = [];
    return c;
  }
  function Cg(a, b) {
    var c = new Wc(a, function () {
      for (
        var d = Array.prototype.slice.call(arguments, 0), e = 0;
        e < d.length;
        e++
      )
        d[e] = this.evaluate(d[e]);
      try {
        return b.apply(this, d);
      } catch (g) {
        if (ed()) throw new gd(g.message);
        throw g;
      }
    });
    c.Ga();
    return c;
  }
  function Dg(a, b) {
    var c = new La(),
      d;
    for (d in b)
      if (b.hasOwnProperty(d)) {
        var e = b[d];
        Za(e)
          ? c.set(d, Cg(a + "_" + d, e))
          : Qc(e)
          ? c.set(d, Dg(a + "_" + d, e))
          : ($a(e) || z(e) || typeof e === "boolean") && c.set(d, e);
      }
    c.Ga();
    return c;
  }
  function Eg(a, b) {
    K(this.getName(), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new La();
    return (d = Dg("AssertApiSubject", c));
  }
  function Fg(a, b) {
    K(this.getName(), ["actual:?*", "message:?string"], arguments);
    if (a instanceof cd)
      throw Error(
        "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported."
      );
    var c = {},
      d = new La();
    return (d = Dg("AssertThatSubject", c));
  }
  function Gg(a) {
    return function () {
      for (var b = [], c = this.D, d = 0; d < arguments.length; ++d)
        b.push(I(arguments[d], c));
      return dd(a.apply(null, b));
    };
  }
  function Hg() {
    for (var a = Math, b = Ig, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = Gg(a[e].bind(a)));
    }
    return c;
  }
  function Jg(a) {
    var b;
    return b;
  }
  function Kg(a) {
    var b;
    return b;
  }
  function Lg(a) {
    try {
      return encodeURI(a);
    } catch (b) {}
  }
  function Mg(a) {
    try {
      return encodeURIComponent(a);
    } catch (b) {}
  }
  function Rg(a) {
    K(this.getName(), ["message:?string"], arguments);
  }
  function Sg(a, b) {
    K(this.getName(), ["min:!number", "max:!number"], arguments);
    return cb(a, b);
  }
  function Tg() {
    return new Date().getTime();
  }
  function Ug(a) {
    if (a === null) return "null";
    if (a instanceof Uc) return "array";
    if (a instanceof Wc) return "function";
    if (a instanceof ad) {
      var b;
      a = (b = a) == null ? void 0 : b.getValue();
      var c;
      if (
        ((c = a) == null ? void 0 : c.constructor) === void 0 ||
        a.constructor.name === void 0
      ) {
        var d = String(a);
        return d.substring(8, d.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  }
  function Vg(a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          (Rf || Sf.Nk) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return dd(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(I(c));
      }),
    };
  }
  function Wg(a) {
    return hb(I(a, this.D));
  }
  function Xg(a) {
    return Number(I(a, this.D));
  }
  function Yg(a) {
    return a === null ? "null" : a === void 0 ? "undefined" : a.toString();
  }
  function Zg(a, b, c) {
    var d = null,
      e = !1;
    K(
      this.getName(),
      ["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"],
      arguments
    );
    d = new La();
    for (var f = 0; f < a.length(); f++) {
      var g = a.get(f);
      g instanceof La &&
        g.has(b) &&
        g.has(c) &&
        (d.set(g.get(b), g.get(c)), (e = !0));
    }
    return e ? d : null;
  }
  var Ig = "floor ceil round max min abs pow sqrt".split(" ");
  function $g() {
    var a = {};
    return {
      om: function (b) {
        return a.hasOwnProperty(b) ? a[b] : void 0;
      },
      Kk: function (b, c) {
        a[b] = c;
      },
      reset: function () {
        a = {};
      },
    };
  }
  function ah(a, b) {
    return function () {
      return Wc.prototype.invoke.apply(
        a,
        [b].concat(ta(ya.apply(0, arguments)))
      );
    };
  }
  function bh(a, b) {
    K(this.getName(), ["apiName:!string", "mock:?*"], arguments);
  }
  function ch(a, b) {
    K(this.getName(), ["apiName:!string", "mock:!PixieMap"], arguments);
  }
  var dh = {};
  var eh = function (a) {
    var b = new La();
    if (a instanceof Uc)
      for (var c = a.la(), d = 0; d < c.length; d++) {
        var e = c[d];
        a.has(e) && b.set(e, a.get(e));
      }
    else if (a instanceof Wc)
      for (var f = a.la(), g = 0; g < f.length; g++) {
        var k = f[g];
        b.set(k, a.get(k));
      }
    else for (var m = 0; m < a.length; m++) b.set(m, a[m]);
    return b;
  };
  dh.keys = function (a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof Uc || a instanceof Wc || typeof a === "string") a = eh(a);
    if (a instanceof La || a instanceof cd) return new Uc(a.la());
    return new Uc();
  };
  dh.values = function (a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof Uc || a instanceof Wc || typeof a === "string") a = eh(a);
    if (a instanceof La || a instanceof cd) return new Uc(a.Vb());
    return new Uc();
  };
  dh.entries = function (a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof Uc || a instanceof Wc || typeof a === "string") a = eh(a);
    if (a instanceof La || a instanceof cd)
      return new Uc(
        a.Eb().map(function (b) {
          return new Uc(b);
        })
      );
    return new Uc();
  };
  dh.freeze = function (a) {
    (a instanceof La ||
      a instanceof cd ||
      a instanceof Uc ||
      a instanceof Wc) &&
      a.Ga();
    return a;
  };
  dh.delete = function (a, b) {
    if (a instanceof La && !a.vc()) return a.remove(b), !0;
    return !1;
  };
  function L(a, b) {
    var c = ya.apply(2, arguments),
      d = a.D.j;
    if (!d) throw Error("Missing program state.");
    if (d.on) {
      try {
        d.nk.apply(null, [b].concat(ta(c)));
      } catch (e) {
        throw (Va("TAGGING", 21), e);
      }
      return;
    }
    d.nk.apply(null, [b].concat(ta(c)));
  }
  var fh = function () {
    this.C = {};
    this.j = {};
    this.H = !0;
  };
  fh.prototype.get = function (a, b) {
    var c = this.contains(a) ? this.C[a] : void 0;
    return c;
  };
  fh.prototype.contains = function (a) {
    return this.C.hasOwnProperty(a);
  };
  fh.prototype.add = function (a, b, c) {
    if (this.contains(a))
      throw Error(
        "Attempting to add a function which already exists: " + a + "."
      );
    if (this.j.hasOwnProperty(a))
      throw Error(
        "Attempting to add an API with an existing private API name: " + a + "."
      );
    this.C[a] = c ? void 0 : Za(b) ? Cg(a, b) : Dg(a, b);
  };
  function gh(a, b) {
    var c = void 0;
    return c;
  }
  function hh() {
    var a = {};
    return a;
  }
  var N = {
      g: {
        xa: "ad_personalization",
        N: "ad_storage",
        O: "ad_user_data",
        U: "analytics_storage",
        Kb: "region",
        Zb: "consent_updated",
        zf: "wait_for_update",
        Ni: "app_remove",
        Oi: "app_store_refund",
        Pi: "app_store_subscription_cancel",
        Qi: "app_store_subscription_convert",
        Ri: "app_store_subscription_renew",
        Yk: "consent_update",
        Cg: "add_payment_info",
        Dg: "add_shipping_info",
        zc: "add_to_cart",
        Ac: "remove_from_cart",
        Eg: "view_cart",
        ac: "begin_checkout",
        Bc: "select_item",
        sb: "view_item_list",
        Lb: "select_promotion",
        tb: "view_promotion",
        Ka: "purchase",
        Cc: "refund",
        Pa: "view_item",
        Fg: "add_to_wishlist",
        Zk: "exception",
        Si: "first_open",
        Ti: "first_visit",
        ba: "gtag.config",
        Za: "gtag.get",
        Ui: "in_app_purchase",
        bc: "page_view",
        al: "screen_view",
        Vi: "session_start",
        bl: "timing_complete",
        fl: "track_social",
        Xc: "user_engagement",
        il: "user_id_update",
        Yd: "gclid_link_decoration_source",
        Zd: "gclid_storage_source",
        ub: "gclgb",
        ab: "gclid",
        Wi: "gclid_len",
        Yc: "gclgs",
        Zc: "gcllp",
        bd: "gclst",
        ia: "ads_data_redaction",
        Xi: "gad_source",
        Yi: "gad_source_src",
        Zi: "ndclid",
        aj: "ngad_source",
        bj: "ngbraid",
        cj: "ngclid",
        dj: "ngclsrc",
        ae: "gclid_url",
        ej: "gclsrc",
        Gg: "gbraid",
        Cf: "wbraid",
        na: "allow_ad_personalization_signals",
        Df: "allow_custom_scripts",
        be: "allow_direct_google_requests",
        Ef: "allow_display_features",
        ce: "allow_enhanced_conversions",
        hb: "allow_google_signals",
        Da: "allow_interest_groups",
        jl: "app_id",
        kl: "app_installer_id",
        ml: "app_name",
        nl: "app_version",
        vb: "auid",
        fj: "auto_detection_enabled",
        fc: "aw_remarketing",
        Ff: "aw_remarketing_only",
        de: "discount",
        ee: "aw_feed_country",
        fe: "aw_feed_language",
        da: "items",
        he: "aw_merchant_id",
        Hg: "aw_basket_type",
        dd: "campaign_content",
        ed: "campaign_id",
        fd: "campaign_medium",
        gd: "campaign_name",
        hd: "campaign",
        jd: "campaign_source",
        kd: "campaign_term",
        wb: "client_id",
        gj: "rnd",
        Ig: "consent_update_type",
        ij: "content_group",
        jj: "content_type",
        ib: "conversion_cookie_prefix",
        ld: "conversion_id",
        ya: "conversion_linker",
        kj: "conversion_linker_disabled",
        hc: "conversion_api",
        Gf: "cookie_deprecation",
        Qa: "cookie_domain",
        Ra: "cookie_expires",
        cb: "cookie_flags",
        Dc: "cookie_name",
        xb: "cookie_path",
        La: "cookie_prefix",
        ic: "cookie_update",
        Ec: "country",
        Aa: "currency",
        Jg: "customer_buyer_stage",
        ie: "customer_lifetime_value",
        Kg: "customer_loyalty",
        Lg: "customer_ltv_bucket",
        md: "custom_map",
        Mg: "gcldc",
        je: "dclid",
        Ng: "debug_mode",
        fa: "developer_id",
        lj: "disable_merchant_reported_purchases",
        nd: "dc_custom_params",
        mj: "dc_natural_search",
        Og: "dynamic_event_settings",
        Pg: "affiliation",
        ke: "checkout_option",
        Hf: "checkout_step",
        Qg: "coupon",
        od: "item_list_name",
        If: "list_name",
        nj: "promotions",
        pd: "shipping",
        Jf: "tax",
        me: "engagement_time_msec",
        ne: "enhanced_client_id",
        oe: "enhanced_conversions",
        Rg: "enhanced_conversions_automatic_settings",
        pe: "estimated_delivery_date",
        Kf: "euid_logged_in_state",
        rd: "event_callback",
        ol: "event_category",
        kb: "event_developer_id_string",
        pl: "event_label",
        Fc: "event",
        qe: "event_settings",
        se: "event_timeout",
        ql: "description",
        rl: "fatal",
        oj: "experiments",
        Lf: "firebase_id",
        Gc: "first_party_collection",
        te: "_x_20",
        yb: "_x_19",
        pj: "fledge_drop_reason",
        Sg: "fledge",
        Tg: "flight_error_code",
        Ug: "flight_error_message",
        qj: "fl_activity_category",
        rj: "fl_activity_group",
        Vg: "fl_advertiser_id",
        sj: "fl_ar_dedupe",
        Wg: "match_id",
        tj: "fl_random_number",
        uj: "tran",
        vj: "u",
        ue: "gac_gclid",
        Hc: "gac_wbraid",
        Xg: "gac_wbraid_multiple_conversions",
        Yg: "ga_restrict_domain",
        Zg: "ga_temp_client_id",
        sl: "ga_temp_ecid",
        jc: "gdpr_applies",
        ah: "geo_granularity",
        Mb: "value_callback",
        zb: "value_key",
        Ic: "_google_ng",
        Jc: "google_signals",
        bh: "google_tld",
        ve: "groups",
        eh: "gsa_experiment_id",
        wj: "gtm_up",
        Nb: "iframe_state",
        sd: "ignore_referrer",
        Mf: "internal_traffic_results",
        kc: "is_legacy_converted",
        Ob: "is_legacy_loaded",
        we: "is_passthrough",
        ud: "_lps",
        Sa: "language",
        xe: "legacy_developer_id_string",
        za: "linker",
        Kc: "accept_incoming",
        Ab: "decorate_forms",
        X: "domains",
        Pb: "url_position",
        Nf: "merchant_feed_label",
        Of: "merchant_feed_language",
        Pf: "merchant_id",
        fh: "method",
        tl: "name",
        xj: "navigation_type",
        vd: "new_customer",
        gh: "non_interaction",
        yj: "optimize_id",
        hh: "page_hostname",
        wd: "page_path",
        Ea: "page_referrer",
        eb: "page_title",
        ih: "passengers",
        jh: "phone_conversion_callback",
        zj: "phone_conversion_country_code",
        kh: "phone_conversion_css_class",
        Aj: "phone_conversion_ids",
        lh: "phone_conversion_number",
        mh: "phone_conversion_options",
        vl: "_platinum_request_status",
        nh: "_protected_audience_enabled",
        xd: "quantity",
        ye: "redact_device_info",
        Qf: "referral_exclusion_definition",
        Kn: "_request_start_time",
        Qb: "restricted_data_processing",
        Bj: "retoken",
        wl: "sample_rate",
        Rf: "screen_name",
        Rb: "screen_resolution",
        Cj: "_script_source",
        Dj: "search_term",
        Ma: "send_page_view",
        mc: "send_to",
        yd: "server_container_url",
        zd: "session_duration",
        ze: "session_engaged",
        Sf: "session_engaged_time",
        Bb: "session_id",
        Ae: "session_number",
        Tf: "_shared_user_id",
        Bd: "delivery_postal_code",
        Ln: "_tag_firing_delay",
        Mn: "_tag_firing_time",
        xl: "temporary_client_id",
        Uf: "topmost_url",
        Ej: "tracking_id",
        Vf: "traffic_type",
        Ba: "transaction_id",
        Sb: "transport_url",
        oh: "trip_type",
        oc: "update",
        fb: "url_passthrough",
        Fj: "uptgs",
        Wf: "_user_agent_architecture",
        Xf: "_user_agent_bitness",
        Yf: "_user_agent_full_version_list",
        Zf: "_user_agent_mobile",
        cg: "_user_agent_model",
        dg: "_user_agent_platform",
        eg: "_user_agent_platform_version",
        fg: "_user_agent_wow64",
        Fa: "user_data",
        ph: "user_data_auto_latency",
        qh: "user_data_auto_meta",
        rh: "user_data_auto_multi",
        sh: "user_data_auto_selectors",
        th: "user_data_auto_status",
        Cd: "user_data_mode",
        Be: "user_data_settings",
        Ca: "user_id",
        nb: "user_properties",
        Gj: "_user_region",
        Dd: "us_privacy_string",
        oa: "value",
        uh: "wbraid_multiple_conversions",
        Ed: "_fpm_parameters",
        Nj: "_host_name",
        Oj: "_in_page_command",
        Pj: "_ip_override",
        Qj: "_is_passthrough_cid",
        Tb: "non_personalized_ads",
        Ke: "_sst_parameters",
        jb: "conversion_label",
        ra: "page_location",
        lb: "global_developer_id_string",
        nc: "tc_privacy_string",
      },
    },
    ih = {},
    jh = Object.freeze(
      ((ih[N.g.na] = 1),
      (ih[N.g.Ef] = 1),
      (ih[N.g.ce] = 1),
      (ih[N.g.hb] = 1),
      (ih[N.g.da] = 1),
      (ih[N.g.Qa] = 1),
      (ih[N.g.Ra] = 1),
      (ih[N.g.cb] = 1),
      (ih[N.g.Dc] = 1),
      (ih[N.g.xb] = 1),
      (ih[N.g.La] = 1),
      (ih[N.g.ic] = 1),
      (ih[N.g.md] = 1),
      (ih[N.g.fa] = 1),
      (ih[N.g.Og] = 1),
      (ih[N.g.rd] = 1),
      (ih[N.g.qe] = 1),
      (ih[N.g.se] = 1),
      (ih[N.g.Gc] = 1),
      (ih[N.g.Yg] = 1),
      (ih[N.g.Jc] = 1),
      (ih[N.g.bh] = 1),
      (ih[N.g.ve] = 1),
      (ih[N.g.Mf] = 1),
      (ih[N.g.kc] = 1),
      (ih[N.g.Ob] = 1),
      (ih[N.g.za] = 1),
      (ih[N.g.Qf] = 1),
      (ih[N.g.Qb] = 1),
      (ih[N.g.Ma] = 1),
      (ih[N.g.mc] = 1),
      (ih[N.g.yd] = 1),
      (ih[N.g.zd] = 1),
      (ih[N.g.Sf] = 1),
      (ih[N.g.Bd] = 1),
      (ih[N.g.Sb] = 1),
      (ih[N.g.oc] = 1),
      (ih[N.g.Be] = 1),
      (ih[N.g.nb] = 1),
      (ih[N.g.Ke] = 1),
      ih)
    );
  Object.freeze([
    N.g.ra,
    N.g.Ea,
    N.g.eb,
    N.g.Sa,
    N.g.Rf,
    N.g.Ca,
    N.g.Lf,
    N.g.ij,
  ]);
  var kh = {},
    lh = Object.freeze(
      ((kh[N.g.Ni] = 1),
      (kh[N.g.Oi] = 1),
      (kh[N.g.Pi] = 1),
      (kh[N.g.Qi] = 1),
      (kh[N.g.Ri] = 1),
      (kh[N.g.Si] = 1),
      (kh[N.g.Ti] = 1),
      (kh[N.g.Ui] = 1),
      (kh[N.g.Vi] = 1),
      (kh[N.g.Xc] = 1),
      kh)
    ),
    mh = {},
    nh = Object.freeze(
      ((mh[N.g.Cg] = 1),
      (mh[N.g.Dg] = 1),
      (mh[N.g.zc] = 1),
      (mh[N.g.Ac] = 1),
      (mh[N.g.Eg] = 1),
      (mh[N.g.ac] = 1),
      (mh[N.g.Bc] = 1),
      (mh[N.g.sb] = 1),
      (mh[N.g.Lb] = 1),
      (mh[N.g.tb] = 1),
      (mh[N.g.Ka] = 1),
      (mh[N.g.Cc] = 1),
      (mh[N.g.Pa] = 1),
      (mh[N.g.Fg] = 1),
      mh)
    ),
    oh = Object.freeze([
      N.g.na,
      N.g.be,
      N.g.hb,
      N.g.ic,
      N.g.Gc,
      N.g.sd,
      N.g.Ma,
      N.g.oc,
    ]),
    ph = Object.freeze([].concat(ta(oh))),
    qh = Object.freeze([N.g.Ra, N.g.se, N.g.zd, N.g.Sf, N.g.me]),
    rh = Object.freeze([].concat(ta(qh))),
    sh = {},
    th =
      ((sh[N.g.N] = "1"),
      (sh[N.g.U] = "2"),
      (sh[N.g.O] = "3"),
      (sh[N.g.xa] = "4"),
      sh),
    uh = {},
    vh = Object.freeze(
      ((uh[N.g.Yd] = 1),
      (uh[N.g.Zd] = 1),
      (uh[N.g.na] = 1),
      (uh[N.g.be] = 1),
      (uh[N.g.ce] = 1),
      (uh[N.g.Da] = 1),
      (uh[N.g.fc] = 1),
      (uh[N.g.Ff] = 1),
      (uh[N.g.de] = 1),
      (uh[N.g.ee] = 1),
      (uh[N.g.fe] = 1),
      (uh[N.g.da] = 1),
      (uh[N.g.he] = 1),
      (uh[N.g.ib] = 1),
      (uh[N.g.ya] = 1),
      (uh[N.g.Qa] = 1),
      (uh[N.g.Ra] = 1),
      (uh[N.g.cb] = 1),
      (uh[N.g.La] = 1),
      (uh[N.g.Aa] = 1),
      (uh[N.g.Jg] = 1),
      (uh[N.g.ie] = 1),
      (uh[N.g.Kg] = 1),
      (uh[N.g.Lg] = 1),
      (uh[N.g.fa] = 1),
      (uh[N.g.lj] = 1),
      (uh[N.g.oe] = 1),
      (uh[N.g.pe] = 1),
      (uh[N.g.Lf] = 1),
      (uh[N.g.Gc] = 1),
      (uh[N.g.kc] = 1),
      (uh[N.g.Ob] = 1),
      (uh[N.g.Sa] = 1),
      (uh[N.g.Nf] = 1),
      (uh[N.g.Of] = 1),
      (uh[N.g.Pf] = 1),
      (uh[N.g.vd] = 1),
      (uh[N.g.ra] = 1),
      (uh[N.g.Ea] = 1),
      (uh[N.g.jh] = 1),
      (uh[N.g.kh] = 1),
      (uh[N.g.lh] = 1),
      (uh[N.g.mh] = 1),
      (uh[N.g.Qb] = 1),
      (uh[N.g.Ma] = 1),
      (uh[N.g.mc] = 1),
      (uh[N.g.yd] = 1),
      (uh[N.g.Bd] = 1),
      (uh[N.g.Ba] = 1),
      (uh[N.g.Sb] = 1),
      (uh[N.g.oc] = 1),
      (uh[N.g.fb] = 1),
      (uh[N.g.Fa] = 1),
      (uh[N.g.Ca] = 1),
      (uh[N.g.oa] = 1),
      uh)
    ),
    wh = {},
    xh = Object.freeze(
      ((wh.search = "s"),
      (wh.youtube = "y"),
      (wh.playstore = "p"),
      (wh.shopping = "h"),
      (wh.ads = "a"),
      (wh.maps = "m"),
      wh)
    );
  Object.freeze(N.g);
  var O = {},
    yh =
      ((O[N.g.Zb] = "gcu"),
      (O[N.g.ub] = "gclgb"),
      (O[N.g.ab] = "gclaw"),
      (O[N.g.Wi] = "gclid_len"),
      (O[N.g.Yc] = "gclgs"),
      (O[N.g.Zc] = "gcllp"),
      (O[N.g.bd] = "gclst"),
      (O[N.g.Zi] = "ndclid"),
      (O[N.g.aj] = "ngad_source"),
      (O[N.g.bj] = "ngbraid"),
      (O[N.g.cj] = "ngclid"),
      (O[N.g.dj] = "ngclsrc"),
      (O[N.g.vb] = "auid"),
      (O[N.g.de] = "dscnt"),
      (O[N.g.ee] = "fcntr"),
      (O[N.g.fe] = "flng"),
      (O[N.g.he] = "mid"),
      (O[N.g.Hg] = "bttype"),
      (O[N.g.jb] = "label"),
      (O[N.g.hc] = "capi"),
      (O[N.g.Gf] = "pscdl"),
      (O[N.g.Aa] = "currency_code"),
      (O[N.g.Jg] = "clobs"),
      (O[N.g.ie] = "vdltv"),
      (O[N.g.Kg] = "clolo"),
      (O[N.g.Lg] = "clolb"),
      (O[N.g.Ng] = "_dbg"),
      (O[N.g.pe] = "oedeld"),
      (O[N.g.kb] = "edid"),
      (O[N.g.pj] = "fdr"),
      (O[N.g.Sg] = "fledge"),
      (O[N.g.ue] = "gac"),
      (O[N.g.Hc] = "gacgb"),
      (O[N.g.Xg] = "gacmcov"),
      (O[N.g.jc] = "gdpr"),
      (O[N.g.lb] = "gdid"),
      (O[N.g.Ic] = "_ng"),
      (O[N.g.eh] = "gsaexp"),
      (O[N.g.Nb] = "frm"),
      (O[N.g.we] = "gtm_up"),
      (O[N.g.ud] = "lps"),
      (O[N.g.xe] = "did"),
      (O[N.g.Nf] = "fcntr"),
      (O[N.g.Of] = "flng"),
      (O[N.g.Pf] = "mid"),
      (O[N.g.vd] = void 0),
      (O[N.g.eb] = "tiba"),
      (O[N.g.Qb] = "rdp"),
      (O[N.g.Bb] = "ecsid"),
      (O[N.g.Tf] = "ga_uid"),
      (O[N.g.Bd] = "delopc"),
      (O[N.g.nc] = "gdpr_consent"),
      (O[N.g.Ba] = "oid"),
      (O[N.g.Fj] = "uptgs"),
      (O[N.g.Wf] = "uaa"),
      (O[N.g.Xf] = "uab"),
      (O[N.g.Yf] = "uafvl"),
      (O[N.g.Zf] = "uamb"),
      (O[N.g.cg] = "uam"),
      (O[N.g.dg] = "uap"),
      (O[N.g.eg] = "uapv"),
      (O[N.g.fg] = "uaw"),
      (O[N.g.ph] = "ec_lat"),
      (O[N.g.qh] = "ec_meta"),
      (O[N.g.rh] = "ec_m"),
      (O[N.g.sh] = "ec_sel"),
      (O[N.g.th] = "ec_s"),
      (O[N.g.Cd] = "ec_mode"),
      (O[N.g.Ca] = "userId"),
      (O[N.g.Dd] = "us_privacy"),
      (O[N.g.oa] = "value"),
      (O[N.g.uh] = "mcov"),
      (O[N.g.Nj] = "hn"),
      (O[N.g.Oj] = "gtm_ee"),
      (O[N.g.Tb] = "npa"),
      (O[N.g.ld] = null),
      (O[N.g.Rb] = null),
      (O[N.g.Sa] = null),
      (O[N.g.da] = null),
      (O[N.g.ra] = null),
      (O[N.g.Ea] = null),
      (O[N.g.Uf] = null),
      (O[N.g.Ed] = null),
      (O[N.g.Yd] = null),
      (O[N.g.Zd] = null),
      O);
  function zh(a, b) {
    if (a) {
      var c = a.split("x");
      c.length === 2 && (Ah(b, "u_w", c[0]), Ah(b, "u_h", c[1]));
    }
  }
  function Bh(a, b) {
    a &&
      (a.length === 2
        ? Ah(b, "hl", a)
        : a.length === 5 &&
          (Ah(b, "hl", a.substring(0, 2)), Ah(b, "gl", a.substring(3, 5))));
  }
  function Ch(a) {
    var b = Eh;
    b = b === void 0 ? Ih : b;
    var c;
    var d = b;
    if (a && a.length) {
      for (var e = [], f = 0; f < a.length; ++f) {
        var g = a[f];
        g &&
          e.push({
            item_id: d(g),
            quantity: g.quantity,
            value: g.price,
            start_date: g.start_date,
            end_date: g.end_date,
          });
      }
      c = e;
    } else c = [];
    var k;
    var m = c;
    if (m) {
      for (var n = [], p = 0; p < m.length; p++) {
        var q = m[p],
          r = [];
        q &&
          (r.push(Jh(q.value)),
          r.push(Jh(q.quantity)),
          r.push(Jh(q.item_id)),
          r.push(Jh(q.start_date)),
          r.push(Jh(q.end_date)),
          n.push("(" + r.join("*") + ")"));
      }
      k = n.length > 0 ? n.join("") : "";
    } else k = "";
    return k;
  }
  function Ih(a) {
    return Kh(a.item_id, a.id, a.item_name);
  }
  function Kh() {
    for (
      var a = l(ya.apply(0, arguments)), b = a.next();
      !b.done;
      b = a.next()
    ) {
      var c = b.value;
      if (c !== null && c !== void 0) return c;
    }
  }
  function Lh(a) {
    if (a && a.length) {
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        d && d.estimated_delivery_date
          ? b.push("" + d.estimated_delivery_date)
          : b.push("");
      }
      return b.join(",");
    }
  }
  function Ah(a, b, c) {
    c === void 0 || c === null || (c === "" && !Zf[b]) || (a[b] = c);
  }
  function Jh(a) {
    return typeof a !== "number" && typeof a !== "string" ? "" : a.toString();
  }
  function Mh(a) {
    return Nh ? E.querySelectorAll(a) : null;
  }
  function Oh(a, b) {
    if (!Nh) return null;
    if (Element.prototype.closest)
      try {
        return a.closest(b);
      } catch (e) {
        return null;
      }
    var c =
        Element.prototype.matches ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector,
      d = a;
    if (!E.documentElement.contains(d)) return null;
    do {
      try {
        if (c.call(d, b)) return d;
      } catch (e) {
        break;
      }
      d = d.parentElement || d.parentNode;
    } while (d !== null && d.nodeType === 1);
    return null;
  }
  var Ph = !1;
  if (E.querySelectorAll)
    try {
      var Qh = E.querySelectorAll(":root");
      Qh && Qh.length == 1 && Qh[0] == E.documentElement && (Ph = !0);
    } catch (a) {}
  var Nh = Ph;
  function Rh(a) {
    switch (a) {
      case 0:
        break;
      case 9:
        return "e4";
      case 6:
        return "e5";
      case 14:
        return "e6";
      default:
        return "e7";
    }
  }
  var Sh = /^[0-9A-Fa-f]{64}$/;
  function Th(a) {
    try {
      return new TextEncoder().encode(a);
    } catch (e) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        d < 128
          ? b.push(d)
          : d < 2048
          ? b.push(192 | (d >> 6), 128 | (d & 63))
          : d < 55296 || d >= 57344
          ? b.push(224 | (d >> 12), 128 | ((d >> 6) & 63), 128 | (d & 63))
          : ((d = 65536 + (((d & 1023) << 10) | (a.charCodeAt(++c) & 1023))),
            b.push(
              240 | (d >> 18),
              128 | ((d >> 12) & 63),
              128 | ((d >> 6) & 63),
              128 | (d & 63)
            ));
      }
      return new Uint8Array(b);
    }
  }
  function Uh(a) {
    if (a === "" || a === "e0") return Promise.resolve(a);
    var b;
    if ((b = A.crypto) == null ? 0 : b.subtle) {
      if (Sh.test(a)) return Promise.resolve(a);
      try {
        var c = Th(a);
        return A.crypto.subtle
          .digest("SHA-256", c)
          .then(function (d) {
            var e = Array.from(new Uint8Array(d))
              .map(function (f) {
                return String.fromCharCode(f);
              })
              .join("");
            return A.btoa(e)
              .replace(/\+/g, "-")
              .replace(/\//g, "_")
              .replace(/=+$/, "");
          })
          .catch(function () {
            return "e2";
          });
      } catch (d) {
        return Promise.resolve("e2");
      }
    } else return Promise.resolve("e1");
  }
  function Vh(a, b) {
    if (a === "") return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var Wh = [],
    Xh = {};
  function Yh(a) {
    return Wh[a] === void 0 ? !1 : Wh[a];
  }
  var Zh = [];
  function $h(a) {
    switch (a) {
      case 0:
        return 0;
      case 48:
        return 1;
      case 49:
        return 2;
      case 50:
        return 8;
      case 77:
        return 3;
      case 101:
        return 4;
      case 103:
        return 5;
      case 119:
        return 6;
      case 120:
        return 10;
      case 121:
        return 7;
    }
  }
  function ai(a, b) {
    Zh[a] = b;
    var c = $h(a);
    c !== void 0 && (Wh[c] = b);
  }
  function P(a) {
    ai(a, !0);
  }
  P(37);
  P(33);
  P(34);
  P(35);
  P(36);
  P(52);
  P(92);
  P(18);
  P(128);
  P(17);
  P(135);
  P(127);
  P(78);
  P(104);
  P(6);
  P(53);
  P(4);
  P(97);
  P(123);
  P(89);
  P(83);
  P(102);
  P(141);
  P(114);
  P(115);
  P(136);
  P(103);
  P(5);
  ai(22, !1), P(23);
  P(119);
  Xh[1] = Vh("1", 6e4);
  Xh[3] = Vh("10", 1);
  Xh[2] = Vh("", 50);
  P(28);
  P(13);
  P(82);
  P(107);
  P(124);
  var ci = !1;
  P(8);
  P(108);
  P(70);
  P(139);
  P(121);
  P(111);
  P(26);
  P(27);
  P(73);
  P(120);
  P(85);
  P(88);
  P(99);
  P(57);
  P(87);
  P(118);
  P(86);
  P(30);
  P(80);
  P(54);
  P(21);
  P(55);

  P(74);
  function R(a) {
    return !!Zh[a];
  }
  function bi(a, b) {
    for (var c = !1, d = !1, e = 0; c === d; )
      if (
        ((c = (((Math.random() * 4294967296) | 0) & 1) === 0),
        (d = (((Math.random() * 4294967296) | 0) & 1) === 0),
        e++,
        e > 30)
      )
        return;
    c ? P(b) : P(a);
  }
  function T(a) {
    Va("GTM", a);
  }
  var hi = function (a, b) {
      var c = {},
        d = ["tv.1"],
        e = 0;
      for (var f = l(a), g = f.next(); !g.done; g = f.next()) {
        var k = g.value;
        if (k.value !== "") {
          var m,
            n = void 0,
            p = k.name,
            q = k.value,
            r = di[p];
          if (r) {
            var u = (n = k.index) != null ? n : "",
              v = r + "__" + e;
            b === 2 || !ei(p) || /^e\d+$/.test(q) || fi.test(q) || Sh.test(q)
              ? (m = encodeURIComponent(encodeURIComponent(q)))
              : ((m = "${userData." + v + "|sha256}"), (c[v] = q), e++);
            d.push("" + r + u + "." + m);
          }
        }
      }
      var t = d.join("~"),
        w = { userData: c };
      return b === 2 || b === 1
        ? {
            xi: t,
            xc: w,
            Yb: e,
            Oh: "tv.1~${" + (t + "|encrypt}"),
            encryptionKeyString: gi(),
          }
        : { xi: t, xc: w, Yb: e };
    },
    ei = function (a) {
      return ii.indexOf(a) !== -1;
    },
    gi = function () {
      return "{\x22keys\x22:[{\x22id\x22:\x22ed2d3e43-f5ba-4445-8b87-15a84c2dbca9\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BHJJc7c+NfIly5h5HSOJaaAQn2fCSrzkrrASN03yzR855StVkYC7PGUQP6RDoDsMh6HId6Mb4dGT/Zw7tAdXwVQ\x3d\x22}},{\x22id\x22:\x22b94c4779-acbb-4e25-8d9f-e0a84da896ea\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BOiJToMYxqoB6OHP4d9S04s3AwOcbW0DuvFUxAc7PYNiSKI2bKZjJ8RhO5IpOAAsg+gF9xo2tCMvEwUS3LZdUfI\x3d\x22}},{\x22id\x22:\x229f96bb49-3334-455f-b306-e9f553e23e8b\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BO9MQtPXHwxoC3HWJSEbTeakvjAMgsfC05B0CfU/7cTdfR/FSPMdeDtWbOE0KiaubvKz7DZ77fUKp9U7kcA57Bw\x3d\x22}},{\x22id\x22:\x227464bdaf-5a4c-4e3c-8846-2eb6543ef7dd\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BLD1Uhvjk2AJVuwsy2QTKajuv5ioD5VIH5K6s+ImUEcor3bpEF+IYa1V3R7NvugDY0oJ/s0zy1rkGIwBICgews0\x3d\x22}},{\x22id\x22:\x225b3cd905-e2ef-4894-afc6-6594a1766000\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BNDCnhYXaolcg/WJJymPug8YgpskyF1XGOtXOHubUzD/t2fh0ZL1Avlw8M1w4WFJq/hPtLBXQs9KGOpeBPzbsyI\x3d\x22}}]}";
    },
    ki = function (a, b) {
      if (A.Promise) {
        var c = void 0;
        return c;
      }
    },
    mi = function (a, b, c) {
      if (A.Promise)
        try {
          var d = new Promise(function (e) {
            li(a, e);
          });
          return d;
        } catch (e) {}
    },
    ni = function (a) {
      if (A.Promise)
        try {
          return new Promise(function (b) {
            li(a, function (c) {
              b(c);
            });
          });
        } catch (b) {}
    },
    oi = function (a) {
      for (
        var b = a.Rd, c = a.time, d = ["tv.1"], e = 0, f = !1, g = 0;
        g < b.length;
        ++g
      ) {
        var k = b[g].name,
          m = b[g].value,
          n = b[g].index,
          p = di[k];
        p &&
          m &&
          (!ei(k) || /^e\d+$/.test(m) || fi.test(m) || Sh.test(m)) &&
          (n !== void 0 && (p += n), d.push(p + "." + m), e++);
      }
      b.length === 1 && b[0].name === "error_code" && ((e = 0), (f = !0));
      return { Wa: encodeURIComponent(d.join("~")), Qd: e, time: c, og: f };
    },
    li = function (a, b) {
      pi(a, function (c) {
        b(oi(c));
      });
    },
    xi = function (a) {
      function b(r, u, v, t) {
        var w = qi(r);
        w !== "" &&
          (Sh.test(w)
            ? k.push({ name: u, value: w, index: t })
            : k.push({ name: u, value: v(w), index: t }));
      }
      function c(r, u) {
        var v = r;
        if (z(v) || Array.isArray(v)) {
          v = ab(r);
          for (var t = 0; t < v.length; ++t) {
            var w = qi(v[t]),
              x = Sh.test(w);
            u && !x && T(89);
            !u && x && T(88);
          }
        }
      }
      function d(r, u) {
        var v = r[u];
        c(v, !1);
        var t = ri[u];
        r[t] && (r[u] && T(90), (v = r[t]), c(v, !0));
        return v;
      }
      function e(r, u, v) {
        for (var t = ab(d(r, u)), w = 0; w < t.length; ++w) b(t[w], u, v);
      }
      function f(r, u, v, t) {
        var w = d(r, u);
        b(w, u, v, t);
      }
      function g(r) {
        return function (u) {
          T(64);
          return r(u);
        };
      }
      var k = [];
      if (A.location.protocol !== "https:")
        return k.push({ name: "error_code", value: "e3", index: void 0 }), k;
      e(a, "email", si);
      e(a, "phone_number", ti);
      e(a, "first_name", g(ui));
      e(a, "last_name", g(ui));
      var m = a.home_address || {};
      e(m, "street", g(vi));
      e(m, "city", g(vi));
      e(m, "postal_code", g(wi));
      e(m, "region", g(vi));
      e(m, "country", g(wi));
      for (var n = ab(a.address || {}), p = 0; p < n.length; p++) {
        var q = n[p];
        f(q, "first_name", ui, p);
        f(q, "last_name", ui, p);
        f(q, "street", vi, p);
        f(q, "city", vi, p);
        f(q, "postal_code", wi, p);
        f(q, "region", vi, p);
        f(q, "country", wi, p);
      }
      return k;
    },
    yi = function (a) {
      var b = a ? xi(a) : [];
      return oi({ Rd: b });
    },
    zi = function (a) {
      return a && a != null && Object.keys(a).length > 0 && A.Promise
        ? xi(a).some(function (b) {
            return b.value && ei(b.name) && !Sh.test(b.value);
          })
        : !1;
    },
    pi = function (a, b) {
      var c = xi(a);
      Ai(c, b);
    },
    qi = function (a) {
      return a == null ? "" : z(a) ? lb(String(a)) : "e0";
    },
    wi = function (a) {
      return a.replace(Bi, "");
    },
    ui = function (a) {
      return vi(a.replace(/\s/g, ""));
    },
    vi = function (a) {
      return lb(a.replace(Ci, "").toLowerCase());
    },
    ti = function (a) {
      a = a.replace(/[\s-()/.]/g, "");
      a.charAt(0) !== "+" && (a = "+" + a);
      return Di.test(a) ? a : "e0";
    },
    si = function (a) {
      var b = a.toLowerCase().split("@");
      if (b.length === 2) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
        c = c + "@" + b[1];
        if (Ei.test(c)) return c;
      }
      return "e0";
    },
    Ai = function (a, b) {
      if (
        a.some(function (d) {
          return d.value && ei(d.name);
        })
      )
        if (A.Promise) {
          var c;
          if (R(58) || R(94)) c = Dc();
          Promise.all(
            a.map(function (d) {
              return d.value && ei(d.name)
                ? Uh(d.value).then(function (e) {
                    d.value = e;
                  })
                : Promise.resolve();
            })
          )
            .then(function () {
              var d = { Rd: a };
              if (c !== void 0) {
                var e = Dc();
                c && e && (d.time = Math.round(e) - Math.round(c));
              }
              b(d);
            })
            .catch(function () {
              b({ Rd: [] });
            });
        } else b({ Rd: [] });
      else b({ Rd: a });
    },
    Ci = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    Ei = /^\S+@\S+\.\S+$/,
    Di = /^\+\d{10,15}$/,
    Bi = /[.~]/g,
    fi = /^[0-9A-Za-z_-]{43}$/,
    Fi = {},
    di =
      ((Fi.email = "em"),
      (Fi.phone_number = "pn"),
      (Fi.first_name = "fn"),
      (Fi.last_name = "ln"),
      (Fi.street = "sa"),
      (Fi.city = "ct"),
      (Fi.region = "rg"),
      (Fi.country = "co"),
      (Fi.postal_code = "pc"),
      (Fi.error_code = "ec"),
      Fi),
    Gi = {},
    ri =
      ((Gi.email = "sha256_email_address"),
      (Gi.phone_number = "sha256_phone_number"),
      (Gi.first_name = "sha256_first_name"),
      (Gi.last_name = "sha256_last_name"),
      (Gi.street = "sha256_street"),
      Gi);
  var ii = Object.freeze([
    "email",
    "phone_number",
    "first_name",
    "last_name",
    "street",
  ]);
  var Hi = { En: "101925629~102067555~102067808~102081485~102198178" };
  var Ii = {},
    Ji = (A.google_tag_manager = A.google_tag_manager || {});
  Ii.zh = "4cc1";
  Ii.Je = Number("0") || 0;
  Ii.rb = "dataLayer";
  Ii.Hn =
    "ChEIgMnOuwYQjMXexp+m5qDFARIjAGzn9gO5lL/B56TYHikBHic46s3J+19gnuJmalap1qwmeKMaAkv1";
  var Ki = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1,
    },
    Li = { __paused: 1, __tg: 1 },
    Mi;
  for (Mi in Ki) Ki.hasOwnProperty(Mi) && (Li[Mi] = 1);
  var Ni = ib(""),
    Oi = !1,
    Pi,
    Qi = !1;
  Pi = Qi;
  var Ri,
    Si = !1;
  Ri = Si;
  var Ti,
    Ui = !1;
  Ti = Ui;
  Ii.Bf = "www.googletagmanager.com";
  var Vi = "" + Ii.Bf + (Pi ? "/gtag/js" : "/gtm.js"),
    Wi = null,
    Xi = null,
    Yi = {},
    Zi = {};
  function $i() {
    var a = Ji.sequence || 1;
    Ji.sequence = a + 1;
    return a;
  }
  Ii.Wk = "";
  var aj = "";
  Ii.Ah = aj;
  var bj = function () {
      this.j = new Set();
    },
    dj = function () {
      return Array.from(cj.aa.j).join("~");
    },
    cj = new (function () {
      this.aa = new bj();
      this.C = !1;
      this.j = 0;
      this.K = this.P = this.Ta = this.H = "";
    })();
  function ej() {
    var a = cj.H.length;
    return cj.H[a - 1] === "/" ? cj.H.substring(0, a - 1) : cj.H;
  }
  function fj() {
    return cj.C ? (R(80) ? cj.j === 0 : cj.j !== 1) : !1;
  }
  function gj(a) {
    for (var b = {}, c = l(a.split("|")), d = c.next(); !d.done; d = c.next())
      b[d.value] = !0;
    return b;
  }
  var hj = new eb(),
    ij = {},
    jj = {},
    mj = {
      name: Ii.rb,
      set: function (a, b) {
        Rc(vb(a, b), ij);
        kj();
      },
      get: function (a) {
        return lj(a, 2);
      },
      reset: function () {
        hj = new eb();
        ij = {};
        kj();
      },
    };
  function lj(a, b) {
    return b != 2 ? hj.get(a) : nj(a);
  }
  function nj(a, b) {
    var c = a.split(".");
    b = b || [];
    for (var d = ij, e = 0; e < c.length; e++) {
      if (d === null) return !1;
      if (d === void 0) break;
      d = d[c[e]];
      if (b.indexOf(d) !== -1) return;
    }
    return d;
  }
  function oj(a, b) {
    jj.hasOwnProperty(a) || (hj.set(a, b), Rc(vb(a, b), ij), kj());
  }
  function pj() {
    for (
      var a = [
          "gtm.allowlist",
          "gtm.blocklist",
          "gtm.whitelist",
          "gtm.blacklist",
          "tagTypeBlacklist",
        ],
        b = 0;
      b < a.length;
      b++
    ) {
      var c = a[b],
        d = lj(c, 1);
      if (Array.isArray(d) || Qc(d)) d = Rc(d, null);
      jj[c] = d;
    }
  }
  function kj(a) {
    fb(jj, function (b, c) {
      hj.set(b, c);
      Rc(vb(b), ij);
      Rc(vb(b, c), ij);
      a && delete jj[b];
    });
  }
  function qj(a, b) {
    var c,
      d = (b === void 0 ? 2 : b) !== 1 ? nj(a) : hj.get(a);
    Oc(d) === "array" || Oc(d) === "object" ? (c = Rc(d, null)) : (c = d);
    return c;
  }
  var rj = function (a, b, c) {
      if (!c) return !1;
      for (
        var d = String(c.value),
          e,
          f = d
            .replace(/\["?'?/g, ".")
            .replace(/"?'?\]/g, "")
            .split(","),
          g = 0;
        g < f.length;
        g++
      ) {
        var k = f[g].trim();
        if (k && !sb(k, "#") && !sb(k, ".")) {
          if (sb(k, "dataLayer.")) e = lj(k.substring(10));
          else {
            var m = k.split(".");
            e = A[m.shift()];
            for (var n = 0; n < m.length; n++) e = e && e[m[n]];
          }
          if (e !== void 0) break;
        }
      }
      if (e === void 0 && Nh)
        try {
          var p = Mh(d);
          if (p && p.length > 0) {
            e = [];
            for (
              var q = 0;
              q < p.length &&
              q < (b === "email" || b === "phone_number" ? 5 : 1);
              q++
            )
              e.push(uc(p[q]) || lb(p[q].value));
            e = e.length === 1 ? e[0] : e;
          }
        } catch (r) {
          T(149);
        }
      return e ? ((a[b] = e), !0) : !1;
    },
    sj = function (a) {
      if (a) {
        var b = {},
          c = !1;
        c = rj(b, "email", a.email) || c;
        c = rj(b, "phone_number", a.phone) || c;
        b.address = [];
        for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
          var f = {};
          c = rj(f, "first_name", d[e].first_name) || c;
          c = rj(f, "last_name", d[e].last_name) || c;
          c = rj(f, "street", d[e].street) || c;
          c = rj(f, "city", d[e].city) || c;
          c = rj(f, "region", d[e].region) || c;
          c = rj(f, "country", d[e].country) || c;
          c = rj(f, "postal_code", d[e].postal_code) || c;
          b.address.push(f);
        }
        return c ? b : void 0;
      }
    },
    tj = function (a, b) {
      switch (a.enhanced_conversions_mode) {
        case "manual":
          if (b && Qc(b)) return b;
          var c = a.enhanced_conversions_manual_var;
          if (c !== void 0) return c;
          var d = A.enhanced_conversion_data;
          d && T(154);
          return d;
        case "automatic":
          return sj(a[N.g.Rg]);
      }
    },
    uj = function (a) {
      return Qc(a) ? !!a.enable_code : !1;
    };
  var vj = /:[0-9]+$/,
    wj = /^\d+\.fls\.doubleclick\.net$/;
  function xj(a, b, c, d) {
    for (var e = [], f = l(a.split("&")), g = f.next(); !g.done; g = f.next()) {
      var k = l(g.value.split("=")),
        m = k.next().value,
        n = sa(k);
      if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
        var p = n.join("=");
        if (!c) return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
        e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")));
      }
    }
    return c ? e : void 0;
  }
  function yj(a, b, c, d, e) {
    b && (b = String(b).toLowerCase());
    if (b === "protocol" || b === "port")
      a.protocol = zj(a.protocol) || zj(A.location.protocol);
    b === "port"
      ? (a.port = String(
          Number(a.hostname ? a.port : A.location.port) ||
            (a.protocol === "http" ? 80 : a.protocol === "https" ? 443 : "")
        ))
      : b === "host" &&
        (a.hostname = (a.hostname || A.location.hostname)
          .replace(vj, "")
          .toLowerCase());
    return Aj(a, b, c, d, e);
  }
  function Aj(a, b, c, d, e) {
    var f,
      g = zj(a.protocol);
    b && (b = String(b).toLowerCase());
    switch (b) {
      case "url_no_fragment":
        f = Bj(a);
        break;
      case "protocol":
        f = g;
        break;
      case "host":
        f = a.hostname.replace(vj, "").toLowerCase();
        if (c) {
          var k = /^www\d*\./.exec(f);
          k && k[0] && (f = f.substring(k[0].length));
        }
        break;
      case "port":
        f = String(
          Number(a.port) || (g === "http" ? 80 : g === "https" ? 443 : "")
        );
        break;
      case "path":
        a.pathname || a.hostname || Va("TAGGING", 1);
        f = a.pathname.substring(0, 1) === "/" ? a.pathname : "/" + a.pathname;
        var m = f.split("/");
        (d || []).indexOf(m[m.length - 1]) >= 0 && (m[m.length - 1] = "");
        f = m.join("/");
        break;
      case "query":
        f = a.search.replace("?", "");
        e && (f = xj(f, e, !1));
        break;
      case "extension":
        var n = a.pathname.split(".");
        f = n.length > 1 ? n[n.length - 1] : "";
        f = f.split("/")[0];
        break;
      case "fragment":
        f = a.hash.replace("#", "");
        break;
      default:
        f = a && a.href;
    }
    return f;
  }
  function zj(a) {
    return a ? a.replace(":", "").toLowerCase() : "";
  }
  function Bj(a) {
    var b = "";
    if (a && a.href) {
      var c = a.href.indexOf("#");
      b = c < 0 ? a.href : a.href.substring(0, c);
    }
    return b;
  }
  var Cj = {},
    Dj = 0;
  function Ej(a) {
    var b = Cj[a];
    if (!b) {
      var c = E.createElement("a");
      a && (c.href = a);
      var d = c.pathname;
      d[0] !== "/" && (a || Va("TAGGING", 1), (d = "/" + d));
      var e = c.hostname.replace(vj, "");
      b = {
        href: c.href,
        protocol: c.protocol,
        host: c.host,
        hostname: e,
        pathname: d,
        search: c.search,
        hash: c.hash,
        port: c.port,
      };
      Dj < 5 && ((Cj[a] = b), Dj++);
    }
    return b;
  }
  function Fj(a) {
    var b = Ej(A.location.href),
      c = yj(b, "host", !1);
    if (c && c.match(wj)) {
      var d = yj(b, "path");
      if (d) {
        var e = d.split(a + "=");
        if (e.length > 1) return e[1].split(";")[0].split("?")[0];
      }
    }
  }
  var Gj = {
    "https://www.google.com": "/g",
    "https://www.googleadservices.com": "/as",
    "https://pagead2.googlesyndication.com": "/gs",
  };
  function Hj(a, b) {
    if (a) {
      var c = "" + a;
      c.indexOf("http://") !== 0 &&
        c.indexOf("https://") !== 0 &&
        (c = "https://" + c);
      c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1));
      return Ej("" + c + b).href;
    }
  }
  function Ij(a, b) {
    if (fj() || Ri) return Hj(a, b);
  }
  function Jj() {
    return !!Ii.Ah && Ii.Ah.split("@@").join("") !== "SGTM_TOKEN";
  }
  function Kj(a) {
    for (var b = l([N.g.yd, N.g.Sb]), c = b.next(); !c.done; c = b.next()) {
      var d = U(a, c.value);
      if (d) return d;
    }
  }
  function Lj(a, b) {
    return fj() ? "" + ej() + (b ? Gj[a] || "" : "") : a;
  }
  function Mj(a) {
    var b = String(a[He.sa] || "").replace(/_/g, "");
    return sb(b, "cvt") ? "cvt" : b;
  }
  var Nj =
    A.location.search.indexOf("?gtm_latency=") >= 0 ||
    A.location.search.indexOf("&gtm_latency=") >= 0;
  var Oj = { sampleRate: "0.005000", Sk: "", Dn: "0.01" },
    Pj = Math.random(),
    Qj;
  if (!(Qj = Nj)) {
    var Rj = Oj.sampleRate;
    Qj = Pj < Number(Rj);
  }
  var Sj = Qj,
    Tj =
      (fc == null ? void 0 : fc.includes("gtm_debug=d")) ||
      Nj ||
      Pj >= 1 - Number(Oj.Dn);
  var Uj = /gtag[.\/]js/,
    Vj = /gtm[.\/]js/,
    Wj = !1;
  function Xj(a) {
    if (Wj) return "1";
    var b,
      c = (b = a.scriptElement) == null ? void 0 : b.src;
    if (c) {
      if (Uj.test(c)) return "3";
      if (Vj.test(c)) return "2";
    }
    return "0";
  }
  function Yj(a, b) {
    var c = Zj();
    c.pending || (c.pending = []);
    bb(c.pending, function (d) {
      return (
        d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
      );
    }) || c.pending.push({ target: a, onLoad: b });
  }
  function ak() {
    var a = A.google_tags_first_party;
    Array.isArray(a) || (a = []);
    for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next())
      b[d.value] = !0;
    return Object.freeze(b);
  }
  var bk = function () {
    this.container = {};
    this.destination = {};
    this.canonical = {};
    this.pending = [];
    this.siloed = [];
    this.injectedFirstPartyContainers = {};
    this.injectedFirstPartyContainers = ak();
  };
  function Zj() {
    var a = gc("google_tag_data", {}),
      b = a.tidr;
    (b && typeof b === "object") || ((b = new bk()), (a.tidr = b));
    var c = b;
    c.container || (c.container = {});
    c.destination || (c.destination = {});
    c.canonical || (c.canonical = {});
    c.pending || (c.pending = []);
    c.siloed || (c.siloed = []);
    c.injectedFirstPartyContainers || (c.injectedFirstPartyContainers = ak());
    return c;
  }
  var ck = {},
    dk = !1,
    Mf = {
      ctid: "GTM-N2HBVQ",
      canonicalContainerId: "1384335",
      Bk: "GTM-N2HBVQ",
      Ck: "GTM-N2HBVQ",
    };
  ck.Ge = ib("");
  function fk() {
    return (
      ck.Ge &&
      gk().some(function (a) {
        return a === Mf.ctid;
      })
    );
  }
  function hk() {
    var a = ik();
    return dk ? a.map(jk) : a;
  }
  function kk() {
    var a = gk();
    return dk ? a.map(jk) : a;
  }
  function lk() {
    return mk(Mf.ctid);
  }
  function nk() {
    return mk(Mf.canonicalContainerId || "_" + Mf.ctid);
  }
  function ik() {
    return Mf.Bk ? Mf.Bk.split("|") : [Mf.ctid];
  }
  function gk() {
    return Mf.Ck ? Mf.Ck.split("|") : [];
  }
  function ok() {
    var a = pk(qk()),
      b = a && a.parent;
    if (b) return pk(b);
  }
  function pk(a) {
    var b = Zj();
    return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
  }
  function mk(a) {
    return dk ? jk(a) : a;
  }
  function jk(a) {
    return "siloed_" + a;
  }
  function rk(a) {
    return dk ? sk(a) : a;
  }
  function sk(a) {
    a = String(a);
    return sb(a, "siloed_") ? a.substring(7) : a;
  }
  function tk() {
    var a = !1;
    if (a) {
      var b = Zj();
      if (b.siloed) {
        for (
          var c = [], d = ik().map(jk), e = gk().map(jk), f = {}, g = 0;
          g < b.siloed.length;
          f = { jg: void 0 }, g++
        )
          (f.jg = b.siloed[g]),
            !dk &&
            bb(
              f.jg.isDestination ? e : d,
              (function (k) {
                return function (m) {
                  return m === k.jg.ctid;
                };
              })(f)
            )
              ? (dk = !0)
              : c.push(f.jg);
        b.siloed = c;
      }
    }
  }
  function uk() {
    var a = Zj();
    if (a.pending) {
      for (
        var b, c = [], d = !1, e = hk(), f = kk(), g = {}, k = 0;
        k < a.pending.length;
        g = { qf: void 0 }, k++
      )
        (g.qf = a.pending[k]),
          bb(
            g.qf.target.isDestination ? f : e,
            (function (m) {
              return function (n) {
                return n === m.qf.target.ctid;
              };
            })(g)
          )
            ? d || ((b = g.qf.onLoad), (d = !0))
            : c.push(g.qf);
      a.pending = c;
      if (b)
        try {
          b(nk());
        } catch (m) {}
    }
  }
  function vk() {
    for (
      var a = Mf.ctid,
        b = hk(),
        c = kk(),
        d = function (n, p) {
          var q = {
            canonicalContainerId: Mf.canonicalContainerId,
            scriptContainerId: a,
            state: 2,
            containers: b.slice(),
            destinations: c.slice(),
          };
          ec && (q.scriptElement = ec);
          fc && (q.scriptSource = fc);
          if (ok() === void 0) {
            var r;
            a: {
              if ((q.scriptContainerId || "").indexOf("GTM-") >= 0) {
                var u;
                b: {
                  var v,
                    t = (v = q.scriptElement) == null ? void 0 : v.src;
                  if (t) {
                    for (
                      var w = cj.C,
                        x = Ej(t),
                        y = w ? x.pathname : "" + x.hostname + x.pathname,
                        B = E.scripts,
                        C = "",
                        D = 0;
                      D < B.length;
                      ++D
                    ) {
                      var H = B[D];
                      if (
                        !(
                          H.innerHTML.length === 0 ||
                          (!w &&
                            H.innerHTML.indexOf(
                              q.scriptContainerId || "SHOULD_NOT_BE_SET"
                            ) < 0) ||
                          H.innerHTML.indexOf(y) < 0
                        )
                      ) {
                        if (H.innerHTML.indexOf("(function(w,d,s,l,i)") >= 0) {
                          u = String(D);
                          break b;
                        }
                        C = String(D);
                      }
                    }
                    if (C) {
                      u = C;
                      break b;
                    }
                  }
                  u = void 0;
                }
                var J = u;
                if (J) {
                  Wj = !0;
                  r = J;
                  break a;
                }
              }
              var F = [].slice.call(document.scripts);
              r = q.scriptElement ? String(F.indexOf(q.scriptElement)) : "-1";
            }
            q.htmlLoadOrder = r;
            q.loadScriptType = Xj(q);
          }
          var S = p ? e.destination : e.container,
            M = S[n];
          M ? (p && M.state === 0 && T(93), Object.assign(M, q)) : (S[n] = q);
        },
        e = Zj(),
        f = l(b),
        g = f.next();
      !g.done;
      g = f.next()
    )
      d(g.value, !1);
    for (var k = l(c), m = k.next(); !m.done; m = k.next()) d(m.value, !0);
    e.canonical[nk()] = {};
    uk();
  }
  function wk(a) {
    return !!Zj().container[a];
  }
  function xk(a) {
    var b = Zj().destination[a];
    return !!b && !!b.state;
  }
  function qk() {
    return { ctid: lk(), isDestination: ck.Ge };
  }
  function yk(a) {
    var b = Zj();
    (b.siloed = b.siloed || []).push(a);
  }
  function zk() {
    var a = Zj().container,
      b;
    for (b in a) if (a.hasOwnProperty(b) && a[b].state === 1) return !0;
    return !1;
  }
  function Ak() {
    var a = {};
    fb(Zj().destination, function (b, c) {
      c.state === 0 && (a[sk(b)] = c);
    });
    return a;
  }
  function Bk(a) {
    return !!(
      a &&
      a.parent &&
      a.context &&
      a.context.source === 1 &&
      a.parent.ctid.indexOf("GTM-") !== 0
    );
  }
  var Ck = "/td?id=" + Mf.ctid,
    Dk = ["v", "t", "pid", "dl", "tdp"],
    Ek = ["mcc"],
    Fk = {},
    Gk = {};
  function Hk(a, b, c) {
    Gk[a] = b;
    (c === void 0 || c) && Ik(a);
  }
  function Ik(a, b) {
    if (Fk[a] === void 0 || (b === void 0 ? 0 : b)) Fk[a] = !0;
  }
  function Jk(a) {
    a = a === void 0 ? !1 : a;
    var b = Object.keys(Fk)
      .filter(function (c) {
        return Fk[c] === !0 && Gk[c] !== void 0 && (a || !Ek.includes(c));
      })
      .map(function (c) {
        var d = Gk[c];
        typeof d === "function" && (d = d());
        return d ? "&" + c + "=" + d : "";
      })
      .join("");
    return "" + Lj("https://www.googletagmanager.com") + Ck + ("" + b + "&z=0");
  }
  function Kk() {
    Object.keys(Fk).forEach(function (a) {
      Dk.indexOf(a) < 0 && (Fk[a] = !1);
    });
  }
  function Lk(a) {
    a = a === void 0 ? !1 : a;
    if (Tj && Mf.ctid) {
      var b = Jk(a);
      a ? Ac(b) : qc(b);
      Kk();
    }
  }
  function Mk() {
    Object.keys(Fk).filter(function (a) {
      return Fk[a] && !Dk.includes(a);
    }).length > 0 && Lk(!0);
  }
  var Nk = cb();
  function Ok() {
    Nk = cb();
  }
  function Pk() {
    Hk("v", "3");
    Hk("t", "t");
    Hk("pid", function () {
      return String(Nk);
    });
    rc(A, "pagehide", Mk);
    A.setInterval(Ok, 864e5);
  }
  function Qk() {
    var a = gc("google_tag_data", {});
    return (a.ics = a.ics || new Rk());
  }
  var Rk = function () {
    this.entries = {};
    this.waitPeriodTimedOut =
      this.wasSetLate =
      this.accessedAny =
      this.accessedDefault =
      this.usedImplicit =
      this.usedUpdate =
      this.usedDefault =
      this.usedDeclare =
      this.active =
        !1;
    this.j = [];
  };
  Rk.prototype.default = function (a, b, c, d, e, f, g) {
    this.usedDefault ||
      this.usedDeclare ||
      (!this.accessedDefault && !this.accessedAny) ||
      (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    Va("TAGGING", 19);
    b == null ? Va("TAGGING", 18) : Sk(this, a, b === "granted", c, d, e, f, g);
  };
  Rk.prototype.waitForUpdate = function (a, b, c) {
    for (var d = 0; d < a.length; d++)
      Sk(this, a[d], void 0, void 0, "", "", b, c);
  };
  var Sk = function (a, b, c, d, e, f, g, k) {
    var m = a.entries,
      n = m[b] || {},
      p = n.region,
      q = d && z(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (e === "" || q === f || (q === e ? p !== f : !q && !p)) {
      var r = !!(g && g > 0 && n.update === void 0),
        u = {
          region: q,
          declare_region: n.declare_region,
          implicit: n.implicit,
          default: c !== void 0 ? c : n.default,
          declare: n.declare,
          update: n.update,
          quiet: r,
        };
      if (e !== "" || n.default !== !1) m[b] = u;
      r &&
        A.setTimeout(function () {
          m[b] === u &&
            u.quiet &&
            (Va("TAGGING", 2),
            (a.waitPeriodTimedOut = !0),
            a.clearTimeout(b, void 0, k),
            a.notifyListeners());
        }, g);
    }
  };
  h = Rk.prototype;
  h.clearTimeout = function (a, b, c) {
    var d = [a],
      e = c.delegatedConsentTypes,
      f;
    for (f in e) e.hasOwnProperty(f) && e[f] === a && d.push(f);
    var g = this.entries[a] || {},
      k = this.getConsentState(a, c);
    if (g.quiet) {
      g.quiet = !1;
      for (var m = l(d), n = m.next(); !n.done; n = m.next()) Tk(this, n.value);
    } else if (b !== void 0 && k !== b)
      for (var p = l(d), q = p.next(); !q.done; q = p.next()) Tk(this, q.value);
  };
  h.update = function (a, b, c) {
    this.usedDefault ||
      this.usedDeclare ||
      this.usedUpdate ||
      !this.accessedAny ||
      (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (b != null) {
      var d = this.getConsentState(a, c),
        e = this.entries;
      (e[a] = e[a] || {}).update = b === "granted";
      this.clearTimeout(a, d, c);
    }
  };
  h.declare = function (a, b, c, d, e) {
    this.usedDeclare = this.active = !0;
    var f = this.entries,
      g = f[a] || {},
      k = g.declare_region,
      m = c && z(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (d === "" || m === e || (m === d ? k !== e : !m && !k)) {
      var n = {
        region: g.region,
        declare_region: m,
        declare: b === "granted",
        implicit: g.implicit,
        default: g.default,
        update: g.update,
        quiet: g.quiet,
      };
      if (d !== "" || g.declare !== !1) f[a] = n;
    }
  };
  h.implicit = function (a, b) {
    this.usedImplicit = !0;
    var c = this.entries,
      d = (c[a] = c[a] || {});
    d.implicit !== !1 && (d.implicit = b === "granted");
  };
  h.getConsentState = function (a, b) {
    var c = this.entries,
      d = c[a] || {},
      e = d.update;
    if (e !== void 0) return e ? 1 : 2;
    if (b.usedContainerScopedDefaults) {
      var f = b.containerScopedDefaults[a];
      if (f === 3) return 1;
      if (f === 2) return 2;
    } else if (((e = d.default), e !== void 0)) return e ? 1 : 2;
    if (b == null ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
      var g = b.delegatedConsentTypes[a],
        k = c[g] || {};
      e = k.update;
      if (e !== void 0) return e ? 1 : 2;
      if (b.usedContainerScopedDefaults) {
        var m = b.containerScopedDefaults[g];
        if (m === 3) return 1;
        if (m === 2) return 2;
      } else if (((e = k.default), e !== void 0)) return e ? 1 : 2;
    }
    e = d.declare;
    if (e !== void 0) return e ? 1 : 2;
    e = d.implicit;
    return e !== void 0 ? (e ? 3 : 4) : 0;
  };
  h.addListener = function (a, b) {
    this.j.push({ consentTypes: a, Jd: b });
  };
  var Tk = function (a, b) {
    for (var c = 0; c < a.j.length; ++c) {
      var d = a.j[c];
      Array.isArray(d.consentTypes) &&
        d.consentTypes.indexOf(b) !== -1 &&
        (d.Dk = !0);
    }
  };
  Rk.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.j.length; ++c) {
      var d = this.j[c];
      if (d.Dk) {
        d.Dk = !1;
        try {
          d.Jd({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  };
  var Uk = !1,
    Vk = !1,
    Wk = {},
    Xk = {
      delegatedConsentTypes: {},
      corePlatformServices: {},
      usedCorePlatformServices: !1,
      selectedAllCorePlatformServices: !1,
      containerScopedDefaults:
        ((Wk.ad_storage = 1),
        (Wk.analytics_storage = 1),
        (Wk.ad_user_data = 1),
        (Wk.ad_personalization = 1),
        Wk),
      usedContainerScopedDefaults: !1,
    };
  function Yk(a) {
    var b = Qk();
    b.accessedAny = !0;
    return (z(a) ? [a] : a).every(function (c) {
      switch (b.getConsentState(c, Xk)) {
        case 1:
        case 3:
          return !0;
        case 2:
        case 4:
          return !1;
        default:
          return !0;
      }
    });
  }
  function Zk(a) {
    var b = Qk();
    b.accessedAny = !0;
    return b.getConsentState(a, Xk);
  }
  function $k(a) {
    for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next()) {
      var e = d.value;
      b[e] = Xk.corePlatformServices[e] !== !1;
    }
    return b;
  }
  function al(a) {
    var b = Qk();
    b.accessedAny = !0;
    return !(b.entries[a] || {}).quiet;
  }
  function bl() {
    if (!Yh(9)) return !1;
    var a = Qk();
    a.accessedAny = !0;
    if (a.active) return !0;
    if (!Xk.usedContainerScopedDefaults) return !1;
    for (
      var b = l(Object.keys(Xk.containerScopedDefaults)), c = b.next();
      !c.done;
      c = b.next()
    )
      if (Xk.containerScopedDefaults[c.value] !== 1) return !0;
    return !1;
  }
  function cl(a, b) {
    Qk().addListener(a, b);
  }
  function dl(a, b) {
    Qk().notifyListeners(a, b);
  }
  function el(a, b) {
    function c() {
      for (var e = 0; e < b.length; e++) if (!al(b[e])) return !0;
      return !1;
    }
    if (c()) {
      var d = !1;
      cl(b, function (e) {
        d || c() || ((d = !0), a(e));
      });
    } else a({});
  }
  function fl(a, b) {
    function c() {
      for (var k = [], m = 0; m < e.length; m++) {
        var n = e[m];
        Yk(n) && !f[n] && k.push(n);
      }
      return k;
    }
    function d(k) {
      for (var m = 0; m < k.length; m++) f[k[m]] = !0;
    }
    var e = z(b) ? [b] : b,
      f = {},
      g = c();
    g.length !== e.length &&
      (d(g),
      cl(e, function (k) {
        function m(q) {
          q.length !== 0 && (d(q), (k.consentTypes = q), a(k));
        }
        var n = c();
        if (n.length !== 0) {
          var p = Object.keys(f).length;
          n.length + p >= e.length
            ? m(n)
            : A.setTimeout(function () {
                m(c());
              }, 500);
        }
      }));
  }
  var gl = [
      "ad_storage",
      "analytics_storage",
      "ad_user_data",
      "ad_personalization",
    ],
    hl = !1,
    il = !1;
  function jl() {
    !il &&
      hl &&
      (gl.some(function (a) {
        return Xk.containerScopedDefaults[a] !== 1;
      }) ||
        kl("mbc"));
    il = !0;
  }
  function kl(a) {
    Tj && (Hk(a, "1"), Lk());
  }
  function ll(a) {
    Va("HEALTH", a);
  }
  var ml;
  try {
    ml = JSON.parse(
      Ta(
        "eyIwIjoiVFciLCIxIjoiVFctVFBFIiwiMiI6ZmFsc2UsIjMiOiJnb29nbGUuY29tLnR3IiwiNCI6IiIsIjUiOnRydWUsIjYiOmZhbHNlLCI3IjoiYWRfc3RvcmFnZXxhbmFseXRpY3Nfc3RvcmFnZXxhZF91c2VyX2RhdGF8YWRfcGVyc29uYWxpemF0aW9uIn0"
      )
    );
  } catch (a) {
    T(123), ll(2), (ml = {});
  }
  function nl() {
    return ml["0"] || "";
  }
  function ol() {
    return ml["1"] || "";
  }
  function pl() {
    var a = !1;
    return a;
  }
  function ql() {
    return ml["6"] !== !1;
  }
  function rl() {
    var a = "";
    return a;
  }
  function sl() {
    var a = !1;
    a = !!ml["5"];
    return a;
  }
  function tl() {
    var a = "";
    return a;
  }
  var ul = [N.g.N, N.g.U, N.g.O, N.g.xa],
    vl,
    wl;
  function xl(a) {
    for (
      var b = a[N.g.Kb], c = Array.isArray(b) ? b : [b], d = { bf: 0 };
      d.bf < c.length;
      d = { bf: d.bf }, ++d.bf
    )
      fb(
        a,
        (function (e) {
          return function (f, g) {
            if (f !== N.g.Kb) {
              var k = c[e.bf],
                m = nl(),
                n = ol();
              Vk = !0;
              Uk && Va("TAGGING", 20);
              Qk().declare(f, g, k, m, n);
            }
          };
        })(d)
      );
  }
  function yl(a) {
    jl();
    !wl && vl && kl("crc");
    wl = !0;
    var b = a[N.g.Kb];
    b && T(40);
    var c = a[N.g.zf];
    c && T(41);
    for (
      var d = Array.isArray(b) ? b : [b], e = { cf: 0 };
      e.cf < d.length;
      e = { cf: e.cf }, ++e.cf
    )
      fb(
        a,
        (function (f) {
          return function (g, k) {
            if (g !== N.g.Kb && g !== N.g.zf) {
              var m = d[f.cf],
                n = Number(c),
                p = nl(),
                q = ol();
              n = n === void 0 ? 0 : n;
              Uk = !0;
              Vk && Va("TAGGING", 20);
              Qk().default(g, k, m, p, q, n, Xk);
            }
          };
        })(e)
      );
  }
  function zl(a) {
    Xk.usedContainerScopedDefaults = !0;
    var b = a[N.g.Kb];
    if (b) {
      var c = Array.isArray(b) ? b : [b];
      if (!c.includes(ol()) && !c.includes(nl())) return;
    }
    fb(a, function (d, e) {
      switch (d) {
        case "ad_storage":
        case "analytics_storage":
        case "ad_user_data":
        case "ad_personalization":
          break;
        default:
          return;
      }
      Xk.usedContainerScopedDefaults = !0;
      Xk.containerScopedDefaults[d] = e === "granted" ? 3 : 2;
    });
  }
  function Al(a, b) {
    jl();
    vl = !0;
    fb(a, function (c, d) {
      Uk = !0;
      Vk && Va("TAGGING", 20);
      Qk().update(c, d, Xk);
    });
    dl(b.eventId, b.priorityId);
  }
  function Bl(a) {
    a.hasOwnProperty("all") &&
      ((Xk.selectedAllCorePlatformServices = !0),
      fb(xh, function (b) {
        Xk.corePlatformServices[b] = a.all === "granted";
        Xk.usedCorePlatformServices = !0;
      }));
    fb(a, function (b, c) {
      b !== "all" &&
        ((Xk.corePlatformServices[b] = c === "granted"),
        (Xk.usedCorePlatformServices = !0));
    });
  }
  function V(a) {
    Array.isArray(a) || (a = [a]);
    return a.every(function (b) {
      return Yk(b);
    });
  }
  function Cl(a, b) {
    cl(a, b);
  }
  function Dl(a, b) {
    fl(a, b);
  }
  function El(a, b) {
    el(a, b);
  }
  function Fl() {
    var a = [N.g.N, N.g.xa, N.g.O];
    Qk().waitForUpdate(a, 500, Xk);
  }
  function Gl(a) {
    for (var b = l(a), c = b.next(); !c.done; c = b.next()) {
      var d = c.value;
      Qk().clearTimeout(d, void 0, Xk);
    }
    dl();
  }
  var Hl = !1,
    Il = [];
  var Jl = {
      ek: "service_worker_endpoint",
      Bh: "shared_user_id",
      Ch: "shared_user_id_requested",
      Le: "shared_user_id_source",
      Af: "cookie_deprecation_label",
    },
    Kl;
  function Ll(a) {
    if (!Kl) {
      Kl = {};
      for (var b = l(Object.keys(Jl)), c = b.next(); !c.done; c = b.next())
        Kl[Jl[c.value]] = !0;
    }
    return !!Kl[a];
  }
  function Ml(a, b) {
    b = b === void 0 ? !1 : b;
    if (Ll(a)) {
      var c,
        d,
        e =
          (d = (c = gc("google_tag_data", {})).xcd) != null ? d : (c.xcd = {});
      if (e[a]) return e[a];
      if (b) {
        var f = void 0,
          g = 1,
          k = {},
          m = {
            set: function (n) {
              f = n;
              m.notify();
            },
            get: function () {
              return f;
            },
            subscribe: function (n) {
              k[String(g)] = n;
              return g++;
            },
            unsubscribe: function (n) {
              var p = String(n);
              return k.hasOwnProperty(p) ? (delete k[p], !0) : !1;
            },
            notify: function () {
              for (
                var n = l(Object.keys(k)), p = n.next();
                !p.done;
                p = n.next()
              ) {
                var q = p.value;
                try {
                  k[q](a, f);
                } catch (r) {}
              }
            },
          };
        return (e[a] = m);
      }
    }
  }
  function Nl(a, b) {
    var c = Ml(a, !0);
    c && c.set(b);
  }
  function Ol(a) {
    var b;
    return (b = Ml(a)) == null ? void 0 : b.get();
  }
  function Pl(a, b) {
    if (typeof b === "function") {
      var c;
      return (c = Ml(a, !0)) == null ? void 0 : c.subscribe(b);
    }
  }
  function Ql(a, b) {
    var c = Ml(a);
    return c ? c.unsubscribe(b) : !1;
  }
  function Rl() {
    if (Ji.pscdl !== void 0) Ol(Jl.Af) === void 0 && Nl(Jl.Af, Ji.pscdl);
    else {
      var a = function (c) {
          Ji.pscdl = c;
          Nl(Jl.Af, c);
        },
        b = function () {
          a("error");
        };
      try {
        cc.cookieDeprecationLabel
          ? (a("pending"),
            cc.cookieDeprecationLabel.getValue().then(a).catch(b))
          : a("noapi");
      } catch (c) {
        b(c);
      }
    }
  }
  function Sl(a, b) {
    b &&
      fb(b, function (c, d) {
        typeof d !== "object" && d !== void 0 && (a["1p." + c] = String(d));
      });
  }
  var Tl = /[A-Z]+/,
    Ul = /\s/;
  function Vl(a, b) {
    if (z(a)) {
      a = lb(a);
      var c = a.indexOf("-");
      if (!(c < 0)) {
        var d = a.substring(0, c);
        if (Tl.test(d)) {
          var e = a.substring(c + 1),
            f;
          if (b) {
            var g = function (n) {
              var p = n.indexOf("/");
              return p < 0 ? [n] : [n.substring(0, p), n.substring(p + 1)];
            };
            f = g(e);
            if (d === "DC" && f.length === 2) {
              var k = g(f[1]);
              k.length === 2 && ((f[1] = k[0]), f.push(k[1]));
            }
          } else {
            f = e.split("/");
            for (var m = 0; m < f.length; m++)
              if (!f[m] || (Ul.test(f[m]) && (d !== "AW" || m !== 1))) return;
          }
          return { id: a, prefix: d, destinationId: d + "-" + f[0], ids: f };
        }
      }
    }
  }
  function Wl(a, b) {
    for (var c = {}, d = 0; d < a.length; ++d) {
      var e = Vl(a[d], b);
      e && (c[e.id] = e);
    }
    Xl(c);
    var f = [];
    fb(c, function (g, k) {
      f.push(k);
    });
    return f;
  }
  function Xl(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        d.prefix === "AW" && d.ids[Yl[2]] && b.push(d.destinationId);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var Zl = {},
    Yl =
      ((Zl[0] = 0),
      (Zl[1] = 0),
      (Zl[2] = 1),
      (Zl[3] = 0),
      (Zl[4] = 1),
      (Zl[5] = 2),
      (Zl[6] = 0),
      (Zl[7] = 0),
      (Zl[8] = 0),
      Zl);
  var $l = Number("") || 500,
    am = {},
    bm = {},
    cm = { initialized: 11, complete: 12, interactive: 13 },
    dm = {},
    em = Object.freeze(((dm[N.g.Ma] = !0), dm)),
    fm =
      E.location.search.indexOf("?gtm_diagnostics=") >= 0 ||
      E.location.search.indexOf("&gtm_diagnostics=") >= 0,
    gm = void 0;
  function hm(a, b) {
    if (b.length && Tj) {
      var c;
      (c = am)[a] != null || (c[a] = []);
      bm[a] != null || (bm[a] = []);
      var d = b.filter(function (e) {
        return !bm[a].includes(e);
      });
      am[a].push.apply(am[a], ta(d));
      bm[a].push.apply(bm[a], ta(d));
      !gm &&
        d.length > 0 &&
        (Ik("tdc", !0),
        (gm = A.setTimeout(function () {
          Lk();
          am = {};
          gm = void 0;
        }, $l)));
    }
  }
  function im(a, b, c) {
    if (Tj && a === "config") {
      var d,
        e = (d = Vl(b)) == null ? void 0 : d.ids;
      if (!(e && e.length > 1)) {
        var f,
          g = gc("google_tag_data", {});
        g.td || (g.td = {});
        f = g.td;
        var k = Rc(c.K);
        Rc(c.j, k);
        var m = [],
          n;
        for (n in f)
          if (f.hasOwnProperty(n)) {
            var p = jm(f[n], k);
            p.length && (fm && console.log(p), m.push(n));
          }
        m.length && (hm(b, m), Va("TAGGING", cm[E.readyState] || 14));
        f[b] = k;
      }
    }
  }
  function km(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function jm(a, b, c, d) {
    c = c === void 0 ? {} : c;
    d = d === void 0 ? "" : d;
    if (a === b) return [];
    var e = function (r, u) {
        var v;
        Oc(u) === "object" ? (v = u[r]) : Oc(u) === "array" && (v = u[r]);
        return v === void 0 ? em[r] : v;
      },
      f = km(a, b),
      g;
    for (g in f)
      if (f.hasOwnProperty(g)) {
        var k = (d ? d + "." : "") + g,
          m = e(g, a),
          n = e(g, b),
          p = Oc(m) === "object" || Oc(m) === "array",
          q = Oc(n) === "object" || Oc(n) === "array";
        if (p && q) jm(m, n, c, k);
        else if (p || q || m !== n) c[k] = !0;
      }
    return Object.keys(c);
  }
  function lm() {
    Hk(
      "tdc",
      function () {
        gm && (A.clearTimeout(gm), (gm = void 0));
        var a = [],
          b;
        for (b in am) am.hasOwnProperty(b) && a.push(b + "*" + am[b].join("."));
        return a.length ? a.join("!") : void 0;
      },
      !1
    );
  }
  var mm = function (a, b, c, d, e, f, g, k, m, n, p) {
      this.eventId = a;
      this.priorityId = b;
      this.j = c;
      this.P = d;
      this.H = e;
      this.K = f;
      this.C = g;
      this.eventMetadata = k;
      this.onSuccess = m;
      this.onFailure = n;
      this.isGtmEvent = p;
    },
    nm = function (a, b) {
      var c = [];
      switch (b) {
        case 3:
          c.push(a.j);
          c.push(a.P);
          c.push(a.H);
          c.push(a.K);
          c.push(a.C);
          break;
        case 2:
          c.push(a.j);
          break;
        case 1:
          c.push(a.P);
          c.push(a.H);
          c.push(a.K);
          c.push(a.C);
          break;
        case 4:
          c.push(a.j), c.push(a.P), c.push(a.H), c.push(a.K);
      }
      return c;
    },
    U = function (a, b, c, d) {
      for (
        var e = l(nm(a, d === void 0 ? 3 : d)), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = f.value;
        if (g[b] !== void 0) return g[b];
      }
      return c;
    },
    om = function (a) {
      for (
        var b = {}, c = nm(a, 4), d = l(c), e = d.next();
        !e.done;
        e = d.next()
      )
        for (
          var f = Object.keys(e.value), g = l(f), k = g.next();
          !k.done;
          k = g.next()
        )
          b[k.value] = 1;
      return Object.keys(b);
    },
    pm = function (a, b, c) {
      function d(n) {
        Qc(n) &&
          fb(n, function (p, q) {
            f = !0;
            e[p] = q;
          });
      }
      var e = {},
        f = !1,
        g = nm(a, c === void 0 ? 3 : c);
      g.reverse();
      for (var k = l(g), m = k.next(); !m.done; m = k.next()) d(m.value[b]);
      return f ? e : void 0;
    },
    qm = function (a) {
      for (
        var b = [N.g.hd, N.g.dd, N.g.ed, N.g.fd, N.g.gd, N.g.jd, N.g.kd],
          c = nm(a, 3),
          d = l(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        for (
          var f = e.value, g = {}, k = !1, m = l(b), n = m.next();
          !n.done;
          n = m.next()
        ) {
          var p = n.value;
          f[p] !== void 0 && ((g[p] = f[p]), (k = !0));
        }
        var q = k ? g : void 0;
        if (q) return q;
      }
      return {};
    },
    rm = function (a, b) {
      this.eventId = a;
      this.priorityId = b;
      this.C = {};
      this.P = {};
      this.j = {};
      this.H = {};
      this.aa = {};
      this.K = {};
      this.eventMetadata = {};
      this.isGtmEvent = !1;
      this.onSuccess = function () {};
      this.onFailure = function () {};
    },
    sm = function (a, b) {
      a.C = b;
      return a;
    },
    tm = function (a, b) {
      a.P = b;
      return a;
    },
    um = function (a, b) {
      a.j = b;
      return a;
    },
    vm = function (a, b) {
      a.H = b;
      return a;
    },
    wm = function (a, b) {
      a.aa = b;
      return a;
    },
    xm = function (a, b) {
      a.K = b;
      return a;
    },
    ym = function (a, b) {
      a.eventMetadata = b || {};
      return a;
    },
    zm = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    Am = function (a, b) {
      a.onFailure = b;
      return a;
    },
    Bm = function (a, b) {
      a.isGtmEvent = b;
      return a;
    },
    Cm = function (a) {
      return new mm(
        a.eventId,
        a.priorityId,
        a.C,
        a.P,
        a.j,
        a.H,
        a.K,
        a.eventMetadata,
        a.onSuccess,
        a.onFailure,
        a.isGtmEvent
      );
    };
  var Dm = { Rk: Number("5"), xo: Number("") },
    Em = [];
  function Fm(a) {
    Em.push(a);
  }
  var Gm = "?id=" + Mf.ctid,
    Hm = void 0,
    Im = {},
    Jm = void 0,
    Km = new (function () {
      var a = 5;
      Dm.Rk > 0 && (a = Dm.Rk);
      this.C = a;
      this.j = 0;
      this.H = [];
    })(),
    Lm = 1e3;
  function Mm(a, b) {
    var c = Hm;
    if (c === void 0)
      if (b) c = $i();
      else return "";
    for (
      var d = [Lj("https://www.googletagmanager.com"), "/a", Gm],
        e = l(Em),
        f = e.next();
      !f.done;
      f = e.next()
    )
      for (
        var g = f.value, k = g({ eventId: c, Wc: !!a }), m = l(k), n = m.next();
        !n.done;
        n = m.next()
      ) {
        var p = l(n.value),
          q = p.next().value,
          r = p.next().value;
        d.push("&" + q + "=" + r);
      }
    d.push("&z=0");
    return d.join("");
  }
  function Nm() {
    Jm && (A.clearTimeout(Jm), (Jm = void 0));
    if (Hm !== void 0 && Om) {
      var a;
      (a = Im[Hm]) || (a = Km.j < Km.C ? !1 : nb() - Km.H[Km.j % Km.C] < 1e3);
      if (a || Lm-- <= 0) T(1), (Im[Hm] = !0);
      else {
        var b = Km.j++ % Km.C;
        Km.H[b] = nb();
        var c = Mm(!0);
        qc(c);
        Om = !1;
      }
    }
  }
  var Om = !1;
  function Pm(a) {
    Im[a] ||
      (a !== Hm && (Nm(), (Hm = a)),
      (Om = !0),
      Jm || (Jm = A.setTimeout(Nm, 500)),
      Mm().length >= 2022 && Nm());
  }
  var Qm = cb();
  function Rm() {
    Qm = cb();
  }
  function Sm() {
    return [
      ["v", "3"],
      ["t", "t"],
      ["pid", String(Qm)],
    ];
  }
  var Tm = {};
  function Um(a, b, c) {
    Sj && a !== void 0 && ((Tm[a] = Tm[a] || []), Tm[a].push(c + b), Pm(a));
  }
  function Vm(a) {
    var b = a.eventId,
      c = a.Wc,
      d = [],
      e = Tm[b] || [];
    e.length && d.push(["epr", e.join(".")]);
    c && delete Tm[b];
    return d;
  }
  function Wm(a, b) {
    var c = Vl(mk(a), !0);
    c && Xm.register(c, b);
  }
  function Ym(a, b, c, d) {
    var e = Vl(c, d.isGtmEvent);
    e && (Oi && (d.deferrable = !0), Xm.push("event", [b, a], e, d));
  }
  function Zm(a, b, c, d) {
    var e = Vl(c, d.isGtmEvent);
    e && Xm.push("get", [a, b], e, d);
  }
  function $m(a) {
    var b = Vl(mk(a), !0),
      c;
    b ? (c = an(Xm, b).j) : (c = {});
    return c;
  }
  function bn(a, b) {
    var c = Vl(mk(a), !0);
    if (c) {
      var d = Xm,
        e = Rc(b, null);
      Rc(an(d, c).j, e);
      an(d, c).j = e;
    }
  }
  var cn = function () {
      this.P = {};
      this.j = {};
      this.C = {};
      this.aa = null;
      this.K = {};
      this.H = !1;
      this.status = 1;
    },
    dn = function (a, b, c, d) {
      this.C = nb();
      this.j = b;
      this.args = c;
      this.messageContext = d;
      this.type = a;
    },
    en = function () {
      this.destinations = {};
      this.j = {};
      this.commands = [];
    },
    an = function (a, b) {
      var c = b.destinationId;
      return (a.destinations[c] = a.destinations[c] || new cn());
    },
    fn = function (a, b, c, d) {
      if (d.j) {
        var e = an(a, d.j),
          f = e.aa;
        if (f) {
          var g = Rc(c, null),
            k = Rc(e.P[d.j.id], null),
            m = Rc(e.K, null),
            n = Rc(e.j, null),
            p = Rc(a.j, null),
            q = {};
          if (Sj)
            try {
              q = Rc(ij, null);
            } catch (t) {
              T(72);
            }
          var r = d.j.prefix,
            u = function (t) {
              Um(d.messageContext.eventId, r, t);
            },
            v = Cm(
              Bm(
                Am(
                  zm(
                    ym(
                      wm(
                        vm(
                          xm(
                            um(
                              tm(
                                sm(
                                  new rm(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId
                                  ),
                                  g
                                ),
                                k
                              ),
                              m
                            ),
                            n
                          ),
                          p
                        ),
                        q
                      ),
                      d.messageContext.eventMetadata
                    ),
                    function () {
                      if (u) {
                        var t = u;
                        u = void 0;
                        t("2");
                        if (d.messageContext.onSuccess)
                          d.messageContext.onSuccess();
                      }
                    }
                  ),
                  function () {
                    if (u) {
                      var t = u;
                      u = void 0;
                      t("3");
                      if (d.messageContext.onFailure)
                        d.messageContext.onFailure();
                    }
                  }
                ),
                !!d.messageContext.isGtmEvent
              )
            );
          try {
            Um(d.messageContext.eventId, r, "1"),
              im(d.type, d.j.id, v),
              f(d.j.id, b, d.C, v);
          } catch (t) {
            Um(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  en.prototype.register = function (a, b, c) {
    var d = an(this, a);
    d.status !== 3 &&
      ((d.aa = b), (d.status = 3), c && (Rc(d.j, c), (d.j = c)), this.flush());
  };
  en.prototype.push = function (a, b, c, d) {
    c !== void 0 &&
      (an(this, c).status === 1 &&
        ((an(this, c).status = 2), this.push("require", [{}], c, {})),
      an(this, c).H && (d.deferrable = !1));
    this.commands.push(new dn(a, c, b, d));
    d.deferrable || this.flush();
  };
  en.prototype.flush = function (a) {
    for (
      var b = this, c = [], d = !1, e = {};
      this.commands.length;
      e = { Mc: void 0, Rh: void 0 }
    ) {
      var f = this.commands[0],
        g = f.j;
      if (f.messageContext.deferrable)
        !g || an(this, g).H
          ? ((f.messageContext.deferrable = !1), this.commands.push(f))
          : c.push(f),
          this.commands.shift();
      else {
        switch (f.type) {
          case "require":
            if (an(this, g).status !== 3 && !a) {
              this.commands.push.apply(this.commands, c);
              return;
            }
            break;
          case "set":
            fb(f.args[0], function (r, u) {
              Rc(vb(r, u), b.j);
            });
            break;
          case "config":
            var k = an(this, g);
            e.Mc = {};
            fb(
              f.args[0],
              (function (r) {
                return function (u, v) {
                  Rc(vb(u, v), r.Mc);
                };
              })(e)
            );
            var m = !!e.Mc[N.g.oc];
            delete e.Mc[N.g.oc];
            var n = g.destinationId === g.id;
            m || (n ? (k.K = {}) : (k.P[g.id] = {}));
            (k.H && m) || fn(this, N.g.ba, e.Mc, f);
            k.H = !0;
            n ? Rc(e.Mc, k.K) : (Rc(e.Mc, k.P[g.id]), T(70));
            d = !0;
            break;
          case "event":
            e.Rh = {};
            fb(
              f.args[0],
              (function (r) {
                return function (u, v) {
                  Rc(vb(u, v), r.Rh);
                };
              })(e)
            );
            fn(this, f.args[1], e.Rh, f);
            break;
          case "get":
            var p = {},
              q = ((p[N.g.zb] = f.args[0]), (p[N.g.Mb] = f.args[1]), p);
            fn(this, N.g.Za, q, f);
        }
        this.commands.shift();
        gn(this, f);
      }
    }
    this.commands.push.apply(this.commands, c);
    d && this.flush();
  };
  var gn = function (a, b) {
      if (b.type !== "require")
        if (b.j)
          for (var c = an(a, b.j).C[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.destinations)
            if (a.destinations.hasOwnProperty(e)) {
              var f = a.destinations[e];
              if (f && f.C)
                for (var g = f.C[b.type] || [], k = 0; k < g.length; k++)
                  g[k]();
            }
    },
    Xm = new en();
  var hn = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    jn = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var kn = function (a, b, c) {
      a.addEventListener && a.addEventListener(b, c, !1);
    },
    ln = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1);
    };
  var mn, nn;
  a: {
    for (var on = ["CLOSURE_FLAGS"], pn = za, qn = 0; qn < on.length; qn++)
      if (((pn = pn[on[qn]]), pn == null)) {
        nn = null;
        break a;
      }
    nn = pn;
  }
  var rn = nn && nn[610401301];
  mn = rn != null ? rn : !1;
  function sn() {
    var a = za.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var tn,
    un = za.navigator;
  tn = un ? un.userAgentData || null : null;
  function vn(a) {
    return mn
      ? tn
        ? tn.brands.some(function (b) {
            var c;
            return (c = b.brand) && c.indexOf(a) != -1;
          })
        : !1
      : !1;
  }
  function wn(a) {
    return sn().indexOf(a) != -1;
  }
  function xn() {
    return mn ? !!tn && tn.brands.length > 0 : !1;
  }
  function yn() {
    return xn() ? !1 : wn("Opera");
  }
  function zn() {
    return wn("Firefox") || wn("FxiOS");
  }
  function An() {
    return xn()
      ? vn("Chromium")
      : ((wn("Chrome") || wn("CriOS")) && !(xn() ? 0 : wn("Edge"))) ||
          wn("Silk");
  }
  var Bn = function (a) {
    Bn[" "](a);
    return a;
  };
  Bn[" "] = function () {};
  var Cn = function (a, b, c, d) {
      for (var e = b, f = c.length; (e = a.indexOf(c, e)) >= 0 && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (g == 38 || g == 63) {
          var k = a.charCodeAt(e + f);
          if (!k || k == 61 || k == 38 || k == 35) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    Dn = /#|$/,
    En = function (a, b) {
      var c = a.search(Dn),
        d = Cn(a, 0, b, c);
      if (d < 0) return null;
      var e = a.indexOf("&", d);
      if (e < 0 || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " ")
      );
    },
    Fn = /[?&]($|#)/,
    Gn = function (a, b, c) {
      for (
        var d, e = a.search(Dn), f = 0, g, k = [];
        (g = Cn(a, f, b, e)) >= 0;

      )
        k.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      k.push(a.slice(f));
      d = k.join("").replace(Fn, "$1");
      var m,
        n = c != null ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        r < 0 && (r = d.length);
        var u = d.indexOf("?"),
          v;
        u < 0 || u > r ? ((u = r), (v = "")) : (v = d.substring(u + 1, r));
        q = [d.slice(0, u), v, d.slice(r)];
        var t = q[1];
        q[1] = p ? (t ? t + "&" + p : p) : t;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  function Hn() {
    return mn ? !!tn && !!tn.platform : !1;
  }
  function In() {
    return wn("iPhone") && !wn("iPod") && !wn("iPad");
  }
  function Jn() {
    In() || wn("iPad") || wn("iPod");
  }
  yn();
  xn() || wn("Trident") || wn("MSIE");
  wn("Edge");
  !wn("Gecko") ||
    (sn().toLowerCase().indexOf("webkit") != -1 && !wn("Edge")) ||
    wn("Trident") ||
    wn("MSIE") ||
    wn("Edge");
  sn().toLowerCase().indexOf("webkit") != -1 && !wn("Edge") && wn("Mobile");
  Hn() || wn("Macintosh");
  Hn() || wn("Windows");
  (Hn() ? tn.platform === "Linux" : wn("Linux")) || Hn() || wn("CrOS");
  Hn() || wn("Android");
  In();
  wn("iPad");
  wn("iPod");
  Jn();
  sn().toLowerCase().indexOf("kaios");
  var Kn = function (a) {
      try {
        var b;
        if ((b = !!a && a.location.href != null))
          a: {
            try {
              Bn(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    Ln = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    },
    Mn = function (a) {
      if (A.top == A) return 0;
      if (a === void 0 ? 0 : a) {
        var b = A.location.ancestorOrigins;
        if (b) return b[b.length - 1] == A.location.origin ? 1 : 2;
      }
      return Kn(A.top) ? 1 : 2;
    },
    Nn = function (a) {
      a = a === void 0 ? document : a;
      return a.createElement("img");
    },
    On = function () {
      for (var a = A, b = a; a && a != a.parent; )
        (a = a.parent), Kn(a) && (b = a);
      return b;
    };
  function Pn(a, b, c, d) {
    d = d === void 0 ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Nn(a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            k = $b(g, e);
          k >= 0 && Array.prototype.splice.call(g, k, 1);
        }
        ln(e, "load", f);
        ln(e, "error", f);
      };
      kn(e, "load", f);
      kn(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var Rn = function (a) {
      var b;
      b = b === void 0 ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      Ln(a, function (d, e) {
        if (d || d === 0) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      Qn(c, b);
    },
    Qn = function (a, b) {
      var c = window,
        d;
      b = b === void 0 ? !1 : b;
      d = d === void 0 ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        };
        d &&
          ((e.mode = "cors"),
          "setAttributionReporting" in XMLHttpRequest.prototype
            ? (e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false",
              })
            : (e.headers = {
                "Attribution-Reporting-Eligible": "event-source",
              }));
        c.fetch(a, e);
      } else Pn(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d);
    };
  var Sn = function () {
    this.P = this.P;
    this.C = this.C;
  };
  Sn.prototype.P = !1;
  Sn.prototype.dispose = function () {
    this.P || ((this.P = !0), this.Ta());
  };
  Sn.prototype[Symbol.dispose] = function () {
    this.dispose();
  };
  Sn.prototype.addOnDisposeCallback = function (a, b) {
    this.P
      ? b !== void 0
        ? a.call(b)
        : a()
      : (this.C || (this.C = []), b && (a = a.bind(b)), this.C.push(a));
  };
  Sn.prototype.Ta = function () {
    if (this.C) for (; this.C.length; ) this.C.shift()();
  };
  function Tn(a) {
    a.addtlConsent !== void 0 &&
      typeof a.addtlConsent !== "string" &&
      (a.addtlConsent = void 0);
    a.gdprApplies !== void 0 &&
      typeof a.gdprApplies !== "boolean" &&
      (a.gdprApplies = void 0);
    return (a.tcString !== void 0 && typeof a.tcString !== "string") ||
      (a.listenerId !== void 0 && typeof a.listenerId !== "number")
      ? 2
      : a.cmpStatus && a.cmpStatus !== "error"
      ? 0
      : 3;
  }
  var Un = function (a, b) {
    b = b === void 0 ? {} : b;
    Sn.call(this);
    this.j = null;
    this.aa = {};
    this.gg = 0;
    this.K = null;
    this.H = a;
    var c;
    this.Ee = (c = b.yn) != null ? c : 500;
    var d;
    this.Lc = (d = b.fo) != null ? d : !1;
  };
  ra(Un, Sn);
  Un.prototype.Ta = function () {
    this.aa = {};
    this.K && (ln(this.H, "message", this.K), delete this.K);
    delete this.aa;
    delete this.H;
    delete this.j;
    Sn.prototype.Ta.call(this);
  };
  var Wn = function (a) {
    return typeof a.H.__tcfapi === "function" || Vn(a) != null;
  };
  Un.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.Lc },
      d = jn(function () {
        return a(c);
      }),
      e = 0;
    this.Ee !== -1 &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.Ee));
    var f = function (g, k) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = Tn(c)),
          (c.internalBlockOnErrors = b.Lc),
          (k && c.internalErrorState === 0) ||
            ((c.tcString = "tcunavailable"), k || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      Xn(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  Un.prototype.removeEventListener = function (a) {
    a && a.listenerId && Xn(this, "removeEventListener", null, a.listenerId);
  };
  var Zn = function (a, b, c) {
      var d;
      d = d === void 0 ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (f !== void 0) {
            e = f[d === void 0 ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (g === 0) return !1;
      var k = c;
      c === 2
        ? ((k = 0), g === 2 && (k = 1))
        : c === 3 && ((k = 1), g === 1 && (k = 0));
      var m;
      if (k === 0)
        if (a.purpose && a.vendor) {
          var n = Yn(a.vendor.consents, d === void 0 ? "755" : d);
          m =
            n && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH"
              ? !0
              : n && Yn(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          k === 1
            ? a.purpose && a.vendor
              ? Yn(a.purpose.legitimateInterests, b) &&
                Yn(a.vendor.legitimateInterests, d === void 0 ? "755" : d)
              : !0
            : !0;
      return m;
    },
    Yn = function (a, b) {
      return !(!a || !a[b]);
    },
    Xn = function (a, b, c, d) {
      c || (c = function () {});
      var e = a.H;
      if (typeof e.__tcfapi === "function") {
        var f = e.__tcfapi;
        f(b, 2, c, d);
      } else if (Vn(a)) {
        $n(a);
        var g = ++a.gg;
        a.aa[g] = c;
        if (a.j) {
          var k = {};
          a.j.postMessage(
            ((k.__tcfapiCall = {
              command: b,
              version: 2,
              callId: g,
              parameter: d,
            }),
            k),
            "*"
          );
        }
      } else c({}, !1);
    },
    Vn = function (a) {
      if (a.j) return a.j;
      var b;
      a: {
        for (var c = a.H, d = 0; d < 50; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (k) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (k) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.j = b;
      return a.j;
    },
    $n = function (a) {
      if (!a.K) {
        var b = function (c) {
          try {
            var d;
            d = (typeof c.data === "string" ? JSON.parse(c.data) : c.data)
              .__tcfapiReturn;
            a.aa[d.callId](d.returnValue, d.success);
          } catch (e) {}
        };
        a.K = b;
        kn(a.H, "message", b);
      }
    },
    ao = function (a) {
      if (a.gdprApplies === !1) return !0;
      a.internalErrorState === void 0 && (a.internalErrorState = Tn(a));
      return a.cmpStatus === "error" || a.internalErrorState !== 0
        ? a.internalBlockOnErrors
          ? (Rn({ e: String(a.internalErrorState) }), !1)
          : !0
        : a.cmpStatus !== "loaded" ||
          (a.eventStatus !== "tcloaded" &&
            a.eventStatus !== "useractioncomplete")
        ? !1
        : !0;
    };
  var bo = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 };
  function co() {
    var a = Ji.tcf || {};
    return (Ji.tcf = a);
  }
  var eo = function () {
    return new Un(A, { yn: -1 });
  };
  function fo() {
    var a = co(),
      b = eo();
    Wn(b) && !go() && !ho() && T(124);
    if (!a.active && Wn(b)) {
      go() &&
        ((a.active = !0),
        (a.wc = {}),
        (a.cmpId = 0),
        (a.tcfPolicyVersion = 0),
        (Qk().active = !0),
        (a.tcString = "tcunavailable"));
      Fl();
      try {
        b.addEventListener(function (c) {
          if (c.internalErrorState !== 0)
            io(a), Gl([N.g.N, N.g.xa, N.g.O]), (Qk().active = !0);
          else if (
            ((a.gdprApplies = c.gdprApplies),
            (a.cmpId = c.cmpId),
            (a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode),
            ho() && (a.active = !0),
            !jo(c) || go() || ho())
          ) {
            a.tcfPolicyVersion = c.tcfPolicyVersion;
            var d;
            if (c.gdprApplies === !1) {
              var e = {},
                f;
              for (f in bo) bo.hasOwnProperty(f) && (e[f] = !0);
              d = e;
              b.removeEventListener(c);
            } else if (jo(c)) {
              var g = {},
                k;
              for (k in bo)
                if (bo.hasOwnProperty(k))
                  if (k === "1") {
                    var m,
                      n = c,
                      p = { mm: !0 };
                    p = p === void 0 ? {} : p;
                    m = ao(n)
                      ? n.gdprApplies === !1
                        ? !0
                        : n.tcString === "tcunavailable"
                        ? !p.xk
                        : (p.xk || n.gdprApplies !== void 0 || p.mm) &&
                          (p.xk ||
                            (typeof n.tcString === "string" &&
                              n.tcString.length))
                        ? Zn(n, "1", 0)
                        : !0
                      : !1;
                    g["1"] = m;
                  } else g[k] = Zn(c, k, bo[k]);
              d = g;
            }
            if (d) {
              a.tcString = c.tcString || "tcempty";
              a.wc = d;
              var q = {},
                r = ((q[N.g.N] = a.wc["1"] ? "granted" : "denied"), q);
              a.gdprApplies !== !0
                ? (Gl([N.g.N, N.g.xa, N.g.O]), (Qk().active = !0))
                : ((r[N.g.xa] = a.wc["3"] && a.wc["4"] ? "granted" : "denied"),
                  typeof a.tcfPolicyVersion === "number" &&
                  a.tcfPolicyVersion >= 4
                    ? (r[N.g.O] = a.wc["1"] && a.wc["7"] ? "granted" : "denied")
                    : Gl([N.g.O]),
                  Al(
                    r,
                    { eventId: 0 },
                    {
                      gdprApplies: a ? a.gdprApplies : void 0,
                      tcString: ko() || "",
                    }
                  ));
            }
          } else Gl([N.g.N, N.g.xa, N.g.O]);
        });
      } catch (c) {
        io(a), Gl([N.g.N, N.g.xa, N.g.O]), (Qk().active = !0);
      }
    }
  }
  function io(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function jo(a) {
    return (
      a.eventStatus === "tcloaded" ||
      a.eventStatus === "useractioncomplete" ||
      a.eventStatus === "cmpuishown"
    );
  }
  function go() {
    return A.gtag_enable_tcf_support === !0;
  }
  function ho() {
    return co().enableAdvertiserConsentMode === !0;
  }
  function ko() {
    var a = co();
    if (a.active) return a.tcString;
  }
  function lo() {
    var a = co();
    if (a.active && a.gdprApplies !== void 0) return a.gdprApplies ? "1" : "0";
  }
  function mo(a) {
    if (!bo.hasOwnProperty(String(a))) return !0;
    var b = co();
    return b.active && b.wc ? !!b.wc[String(a)] : !0;
  }
  var no = [N.g.N, N.g.U, N.g.O, N.g.xa],
    wo = {},
    xo = ((wo[N.g.N] = 1), (wo[N.g.U] = 2), wo);
  function yo(a) {
    if (a === void 0) return 0;
    switch (U(a, N.g.na)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  function zo(a) {
    if (ol() === "US-CO" && cc.globalPrivacyControl === !0) return !1;
    var b = yo(a);
    if (b === 3) return !1;
    switch (Zk(N.g.xa)) {
      case 1:
      case 3:
        return !0;
      case 2:
        return !1;
      case 4:
        return b === 2;
      case 0:
        return !0;
      default:
        return !1;
    }
  }
  function Ao() {
    return bl() || !Yk(N.g.N) || !Yk(N.g.U);
  }
  function Bo() {
    var a = {},
      b;
    for (b in xo) xo.hasOwnProperty(b) && (a[xo[b]] = Zk(b));
    return "G1" + Ee(a[1] || 0) + Ee(a[2] || 0);
  }
  var Co = {},
    Do =
      ((Co[N.g.N] = 0), (Co[N.g.U] = 1), (Co[N.g.O] = 2), (Co[N.g.xa] = 3), Co);
  function Eo(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  function Fo(a) {
    for (var b = "1", c = 0; c < no.length; c++) {
      var d = b,
        e,
        f = no[c],
        g = Xk.delegatedConsentTypes[f];
      e = g === void 0 ? 0 : Do.hasOwnProperty(g) ? 12 | Do[g] : 8;
      var k = Qk();
      k.accessedAny = !0;
      var m = k.entries[f] || {};
      e = (e << 2) | Eo(m.implicit);
      b =
        d +
        ("" +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            e
          ] +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            (Eo(m.declare) << 4) | (Eo(m.default) << 2) | Eo(m.update)
          ]);
    }
    var n = b,
      p = (ol() === "US-CO" && cc.globalPrivacyControl === !0 ? 1 : 0) << 3,
      q = (bl() ? 1 : 0) << 2,
      r = yo(a);
    b =
      n +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        p | q | r
      ];
    return (b +=
      "" +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        (Xk.containerScopedDefaults.ad_storage << 4) |
          (Xk.containerScopedDefaults.analytics_storage << 2) |
          Xk.containerScopedDefaults.ad_user_data
      ] +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        ((Xk.usedContainerScopedDefaults ? 1 : 0) << 2) |
          Xk.containerScopedDefaults.ad_personalization
      ]);
  }
  function Go() {
    if (!Yk(N.g.O)) return "-";
    for (
      var a = Object.keys(xh), b = $k(a), c = "", d = l(a), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = e.value;
      b[f] && (c += xh[f]);
    }
    (Xk.usedCorePlatformServices ? Xk.selectedAllCorePlatformServices : 1) &&
      (c += "o");
    return c || "-";
  }
  function Ho() {
    return ql() || ((go() || ho()) && lo() === "1") ? "1" : "0";
  }
  function Io() {
    return (ql() ? !0 : !(!go() && !ho()) && lo() === "1") || !Yk(N.g.O);
  }
  function Jo() {
    var a = "0",
      b = "0",
      c;
    var d = co();
    c = d.active ? d.cmpId : void 0;
    typeof c === "number" &&
      c >= 0 &&
      c <= 4095 &&
      ((a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        (c >> 6) & 63
      ]),
      (b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        c & 63
      ]));
    var e = "0",
      f;
    var g = co();
    f = g.active ? g.tcfPolicyVersion : void 0;
    typeof f === "number" &&
      f >= 0 &&
      f <= 63 &&
      (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        f
      ]);
    var k = 0;
    ql() && (k |= 1);
    lo() === "1" && (k |= 2);
    go() && (k |= 4);
    var m;
    var n = co();
    m =
      n.enableAdvertiserConsentMode !== void 0
        ? n.enableAdvertiserConsentMode
          ? "1"
          : "0"
        : void 0;
    m === "1" && (k |= 8);
    Qk().waitPeriodTimedOut && (k |= 16);
    return (
      "1" +
      a +
      b +
      e +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[k]
    );
  }
  function Ko() {
    return ol() === "US-CO";
  }
  function Lo() {
    var a = !1;
    return a;
  }
  var Mo = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 };
  function No(a) {
    a = a === void 0 ? {} : a;
    var b = Mf.ctid.split("-")[0].toUpperCase(),
      c = {
        ctid: Mf.ctid,
        nn: Ii.Je,
        pn: Ii.zh,
        Pm: ck.Ge ? 2 : 1,
        un: a.xg,
        Qe: Mf.canonicalContainerId,
      };
    c.Qe !== a.qa && (c.qa = a.qa);
    var d = ok();
    c.Zm = d ? d.canonicalContainerId : void 0;
    Pi ? ((c.ug = Mo[b]), c.ug || (c.ug = 0)) : (c.ug = Ti ? 13 : 10);
    cj.C
      ? ((c.rg = 0), (c.Sl = 2))
      : Ri
      ? (c.rg = 1)
      : Lo()
      ? (c.rg = 2)
      : (c.rg = 3);
    var e = {};
    e[6] = dk;
    cj.j === 2 ? (e[7] = !0) : cj.j === 1 && (e[2] = !0);
    if (fc) {
      var f = yj(Ej(fc), "host");
      f && (e[8] = f.match(/^(www\.)?googletagmanager\.com$/) === null);
    }
    c.Vl = e;
    var g = a.ig,
      k;
    var m = c.ug,
      n = c.rg;
    m === void 0
      ? (k = "")
      : (n || (n = 0), (k = "" + Ge(1, 1) + De((m << 2) | n)));
    var p = c.Sl,
      q = "4" + k + (p ? "" + Ge(2, 1) + De(p) : ""),
      r,
      u = c.pn;
    r = u && Fe.test(u) ? "" + Ge(3, 2) + u : "";
    var v,
      t = c.nn;
    v = t ? "" + Ge(4, 1) + De(t) : "";
    var w;
    var x = c.ctid;
    if (x && g) {
      var y = x.split("-"),
        B = y[0].toUpperCase();
      if (B !== "GTM" && B !== "OPT") w = "";
      else {
        var C = y[1];
        w = "" + Ge(5, 3) + De(1 + C.length) + (c.Pm || 0) + C;
      }
    } else w = "";
    var D = c.un,
      H = c.Qe,
      J = c.qa,
      F = c.uo,
      S =
        q +
        r +
        v +
        w +
        (D ? "" + Ge(6, 1) + De(D) : "") +
        (H ? "" + Ge(7, 3) + De(H.length) + H : "") +
        (J ? "" + Ge(8, 3) + De(J.length) + J : "") +
        (F ? "" + Ge(9, 3) + De(F.length) + F : ""),
      M;
    var Z = c.Vl;
    Z = Z === void 0 ? {} : Z;
    for (
      var ca = [], da = l(Object.keys(Z)), Y = da.next();
      !Y.done;
      Y = da.next()
    ) {
      var Q = Y.value;
      ca[Number(Q)] = Z[Q];
    }
    if (ca.length) {
      var oa = Ge(10, 3),
        na;
      if (ca.length === 0) na = De(0);
      else {
        for (var ea = [], ua = 0, Ra = !1, Aa = 0; Aa < ca.length; Aa++) {
          Ra = !0;
          var Sa = Aa % 6;
          ca[Aa] && (ua |= 1 << Sa);
          Sa === 5 && (ea.push(De(ua)), (ua = 0), (Ra = !1));
        }
        Ra && ea.push(De(ua));
        na = ea.join("");
      }
      var kb = na;
      M = "" + oa + De(kb.length) + kb;
    } else M = "";
    var mc = c.Zm;
    return S + M + (mc ? "" + Ge(11, 3) + De(mc.length) + mc : "");
  }
  function Oo(a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; d >= 0; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = c !== 0 ? b ^ (c >> 21) : b);
    return b;
  }
  function Po(a) {
    return a.origin !== "null";
  }
  function Qo(a, b, c, d) {
    var e;
    if (Ro(d)) {
      for (
        var f = [], g = String(b || So()).split(";"), k = 0;
        k < g.length;
        k++
      ) {
        var m = g[k].split("="),
          n = m[0].replace(/^\s*|\s*$/g, "");
        if (n && n === a) {
          var p = m
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "");
          p && c && (p = decodeURIComponent(p));
          f.push(p);
        }
      }
      e = f;
    } else e = [];
    return e;
  }
  function To(a, b, c, d, e) {
    if (Ro(e)) {
      var f = Uo(a, d, e);
      if (f.length === 1) return f[0].id;
      if (f.length !== 0) {
        f = Vo(
          f,
          function (g) {
            return g.bm;
          },
          b
        );
        if (f.length === 1) return f[0].id;
        f = Vo(
          f,
          function (g) {
            return g.dn;
          },
          c
        );
        return f[0] ? f[0].id : void 0;
      }
    }
  }
  function Wo(a, b, c, d) {
    var e = So(),
      f = window;
    Po(f) && (f.document.cookie = a);
    var g = So();
    return e !== g || (c !== void 0 && Qo(b, g, !1, d).indexOf(c) >= 0);
  }
  function Xo(a, b, c, d) {
    function e(w, x, y) {
      if (y == null) return delete k[x], w;
      k[x] = y;
      return w + "; " + x + "=" + y;
    }
    function f(w, x) {
      if (x == null) return w;
      k[x] = !0;
      return w + "; " + x;
    }
    if (!Ro(c.Ib)) return 2;
    var g;
    b == null
      ? (g = a + "=deleted; expires=" + new Date(0).toUTCString())
      : (c.encode && (b = encodeURIComponent(b)),
        (b = Yo(b)),
        (g = a + "=" + b));
    var k = {};
    g = e(g, "path", c.path);
    var m;
    c.expires instanceof Date
      ? (m = c.expires.toUTCString())
      : c.expires != null && (m = "" + c.expires);
    g = e(g, "expires", m);
    g = e(g, "max-age", c.Tm);
    g = e(g, "samesite", c.qn);
    c.secure && (g = f(g, "secure"));
    var n = c.domain;
    if (n && n.toLowerCase() === "auto") {
      for (var p = Zo(), q = void 0, r = !1, u = 0; u < p.length; ++u) {
        var v = p[u] !== "none" ? p[u] : void 0,
          t = e(g, "domain", v);
        t = f(t, c.flags);
        try {
          d && d(a, k);
        } catch (w) {
          q = w;
          continue;
        }
        r = !0;
        if (!$o(v, c.path) && Wo(t, a, b, c.Ib)) return 0;
      }
      if (q && !r) throw q;
      return 1;
    }
    n && n.toLowerCase() !== "none" && (g = e(g, "domain", n));
    g = f(g, c.flags);
    d && d(a, k);
    return $o(n, c.path) ? 1 : Wo(g, a, b, c.Ib) ? 0 : 1;
  }
  function ap(a, b, c) {
    c.path == null && (c.path = "/");
    c.domain || (c.domain = "auto");
    return Xo(a, b, c);
  }
  function Vo(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var k = a[g],
        m = b(k);
      m === c
        ? d.push(k)
        : f === void 0 || m < f
        ? ((e = [k]), (f = m))
        : m === f && e.push(k);
    }
    return d.length > 0 ? d : e;
  }
  function Uo(a, b, c) {
    for (var d = [], e = Qo(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        k = g.shift();
      if (!b || !k || b.indexOf(k) !== -1) {
        var m = g.shift();
        if (m) {
          var n = m.split("-");
          d.push({
            id: g.join("."),
            bm: Number(n[0]) || 1,
            dn: Number(n[1]) || 1,
          });
        }
      }
    }
    return d;
  }
  function Yo(a) {
    a && a.length > 1200 && (a = a.substring(0, 1200));
    return a;
  }
  var bp = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    cp = /(^|\.)doubleclick\.net$/i;
  function $o(a, b) {
    return (
      a !== void 0 &&
      (cp.test(window.document.location.hostname) || (b === "/" && bp.test(a)))
    );
  }
  function dp(a) {
    if (!a) return 1;
    var b = a;
    Yh(8) && a === "none" && (b = window.document.location.hostname);
    b = b.indexOf(".") === 0 ? b.substring(1) : b;
    return b.split(".").length;
  }
  function ep(a) {
    if (!a || a === "/") return 1;
    a[0] !== "/" && (a = "/" + a);
    a[a.length - 1] !== "/" && (a += "/");
    return a.split("/").length - 1;
  }
  function fp(a, b) {
    var c = "" + dp(a),
      d = ep(b);
    d > 1 && (c += "-" + d);
    return c;
  }
  var So = function () {
      return Po(window) ? window.document.cookie : "";
    },
    Ro = function (a) {
      return a && Yh(9)
        ? (Array.isArray(a) ? a : [a]).every(function (b) {
            return al(b) && Yk(b);
          })
        : !0;
    },
    Zo = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (b.length === 4) {
        var c = b[b.length - 1];
        if (Number(c).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; d >= 0; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      cp.test(e) || bp.test(e) || a.push("none");
      return a;
    };
  function gp(a) {
    var b = Math.round(Math.random() * 2147483647);
    return a ? String(b ^ (Oo(a) & 2147483647)) : String(b);
  }
  function hp(a) {
    return [gp(a), Math.round(nb() / 1e3)].join(".");
  }
  function ip(a, b, c, d, e) {
    var f = dp(b);
    return To(a, f, ep(c), d, e);
  }
  function jp(a, b, c, d) {
    return [b, fp(c, d), a].join(".");
  }
  function kp(a, b, c, d) {
    var e,
      f = Number(a.Hb != null ? a.Hb : void 0);
    f !== 0 && (e = new Date((b || nb()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      Ib: d,
    };
  }
  var lp;
  function mp() {
    function a(g) {
      c(g.target || g.srcElement || {});
    }
    function b(g) {
      d(g.target || g.srcElement || {});
    }
    var c = np,
      d = op,
      e = pp();
    if (!e.init) {
      rc(E, "mousedown", a);
      rc(E, "keyup", a);
      rc(E, "submit", b);
      var f = HTMLFormElement.prototype.submit;
      HTMLFormElement.prototype.submit = function () {
        d(this);
        f.call(this);
      };
      e.init = !0;
    }
  }
  function qp(a, b, c, d, e) {
    var f = {
      callback: a,
      domains: b,
      fragment: c === 2,
      placement: c,
      forms: d,
      sameHost: e,
    };
    pp().decorators.push(f);
  }
  function rp(a, b, c) {
    for (var d = pp().decorators, e = {}, f = 0; f < d.length; ++f) {
      var g = d[f],
        k;
      if ((k = !c || g.forms))
        a: {
          var m = g.domains,
            n = a,
            p = !!g.sameHost;
          if (m && (p || n !== E.location.hostname))
            for (var q = 0; q < m.length; q++)
              if (m[q] instanceof RegExp) {
                if (m[q].test(n)) {
                  k = !0;
                  break a;
                }
              } else if (n.indexOf(m[q]) >= 0 || (p && m[q].indexOf(n) >= 0)) {
                k = !0;
                break a;
              }
          k = !1;
        }
      if (k) {
        var r = g.placement;
        r === void 0 && (r = g.fragment ? 2 : 1);
        r === b && qb(e, g.callback());
      }
    }
    return e;
  }
  function pp() {
    var a = gc("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var sp = /(.*?)\*(.*?)\*(.*)/,
    tp = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    up = /^(?:www\.|m\.|amp\.)+/,
    vp = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function wp(a) {
    var b = vp.exec(a);
    if (b) return { ii: b[1], query: b[2], fragment: b[3] };
  }
  function xp(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  function yp(a, b) {
    var c = [
        cc.userAgent,
        new Date().getTimezoneOffset(),
        cc.userLanguage || cc.language,
        Math.floor(nb() / 60 / 1e3) - (b === void 0 ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = lp)) {
      for (var e = Array(256), f = 0; f < 256; f++) {
        for (var g = f, k = 0; k < 8; k++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    lp = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ lp[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function zp(a) {
    return function (b) {
      var c = Ej(A.location.href),
        d = c.search.replace("?", ""),
        e = xj(d, "_gl", !1, !0) || "";
      b.query = Ap(e) || {};
      var f = yj(c, "fragment"),
        g;
      var k = -1;
      if (sb(f, "_gl=")) k = 4;
      else {
        var m = f.indexOf("&_gl=");
        m > 0 && (k = m + 3 + 2);
      }
      if (k < 0) g = void 0;
      else {
        var n = f.indexOf("&", k);
        g = n < 0 ? f.substring(k) : f.substring(k, n);
      }
      b.fragment = Ap(g || "") || {};
      a && Bp(c, d, f);
    };
  }
  function Cp(a, b) {
    var c = xp(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  function Bp(a, b, c) {
    function d(g, k) {
      var m = Cp("_gl", g);
      m.length && (m = k + m);
      return m;
    }
    if (bc && bc.replaceState) {
      var e = xp("_gl");
      if (e.test(b) || e.test(c)) {
        var f = yj(a, "path");
        b = d(b, "?");
        c = d(c, "#");
        bc.replaceState({}, "", "" + f + b + c);
      }
    }
  }
  function Dp(a, b) {
    var c = zp(!!b),
      d = pp();
    d.data || ((d.data = { query: {}, fragment: {} }), c(d.data));
    var e = {},
      f = d.data;
    f && (qb(e, f.query), a && qb(e, f.fragment));
    return e;
  }
  var Ap = function (a) {
    try {
      var b = Ep(a, 3);
      if (b !== void 0) {
        for (
          var c = {}, d = b ? b.split("*") : [], e = 0;
          e + 1 < d.length;
          e += 2
        ) {
          var f = d[e],
            g = Ta(d[e + 1]);
          c[f] = g;
        }
        Va("TAGGING", 6);
        return c;
      }
    } catch (k) {
      Va("TAGGING", 8);
    }
  };
  function Ep(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; e < 3; ++e) {
          var f = sp.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && g[1] === "1") {
        var k = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === yp(k, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return k;
        Va("TAGGING", 7);
      }
    }
  }
  function Fp(a, b, c, d, e) {
    function f(p) {
      p = Cp(a, p);
      var q = p.charAt(p.length - 1);
      p && q !== "&" && (p += "&");
      return p + n;
    }
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    var g = wp(c);
    if (!g) return "";
    var k = g.query || "",
      m = g.fragment || "",
      n = a + "=" + b;
    d
      ? (m.substring(1).length !== 0 && e) || (m = "#" + f(m.substring(1)))
      : (k = "?" + f(k.substring(1)));
    return "" + g.ii + k + m;
  }
  function Gp(a, b) {
    function c(n, p, q) {
      var r;
      a: {
        for (var u in n)
          if (n.hasOwnProperty(u)) {
            r = !0;
            break a;
          }
        r = !1;
      }
      if (r) {
        var v,
          t = [],
          w;
        for (w in n)
          if (n.hasOwnProperty(w)) {
            var x = n[w];
            x !== void 0 &&
              x === x &&
              x !== null &&
              x.toString() !== "[object Object]" &&
              (t.push(w), t.push(Qa(String(x))));
          }
        var y = t.join("*");
        v = ["1", yp(y), y].join("*");
        d
          ? (Yh(3) || Yh(1) || !p) && Hp("_gl", v, a, p, q)
          : Ip("_gl", v, a, p, q);
      }
    }
    var d = (a.tagName || "").toUpperCase() === "FORM",
      e = rp(b, 1, d),
      f = rp(b, 2, d),
      g = rp(b, 4, d),
      k = rp(b, 3, d);
    c(e, !1, !1);
    c(f, !0, !1);
    Yh(1) && c(g, !0, !0);
    for (var m in k) k.hasOwnProperty(m) && Jp(m, k[m], a);
  }
  function Jp(a, b, c) {
    c.tagName.toLowerCase() === "a"
      ? Ip(a, b, c)
      : c.tagName.toLowerCase() === "form" && Hp(a, b, c);
  }
  function Ip(a, b, c, d, e) {
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    var f;
    if ((f = c.href)) {
      var g;
      if (!(g = !Yh(5) || d)) {
        var k = A.location.href,
          m = wp(c.href),
          n = wp(k);
        g = !(m && n && m.ii === n.ii && m.query === n.query && m.fragment);
      }
      f = g;
    }
    if (f) {
      var p = Fp(a, b, c.href, d, e);
      Tb.test(p) && (c.href = p);
    }
  }
  function Hp(a, b, c, d, e) {
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    if (c && c.action) {
      var f = (c.method || "").toLowerCase();
      if (f !== "get" || d) {
        if (f === "get" || f === "post") {
          var g = Fp(a, b, c.action, d, e);
          Tb.test(g) && (c.action = g);
        }
      } else {
        for (var k = c.childNodes || [], m = !1, n = 0; n < k.length; n++) {
          var p = k[n];
          if (p.name === a) {
            p.setAttribute("value", b);
            m = !0;
            break;
          }
        }
        if (!m) {
          var q = E.createElement("input");
          q.setAttribute("type", "hidden");
          q.setAttribute("name", a);
          q.setAttribute("value", b);
          c.appendChild(q);
        }
      }
    }
  }
  function np(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && d > 0; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        (f !== "http:" && f !== "https:") || Gp(e, e.hostname);
      }
    } catch (g) {}
  }
  function op(a) {
    try {
      if (a.action) {
        var b = yj(Ej(a.action), "host");
        Gp(a, b);
      }
    } catch (c) {}
  }
  function Kp(a, b, c, d) {
    mp();
    var e = c === "fragment" ? 2 : 1;
    d = !!d;
    qp(a, b, e, d, !1);
    e === 2 && Va("TAGGING", 23);
    d && Va("TAGGING", 24);
  }
  function Lp(a, b) {
    mp();
    qp(a, [Aj(A.location, "host", !0)], b, !0, !0);
  }
  function Mp() {
    var a = E.location.hostname,
      b = tp.exec(E.referrer);
    if (!b) return !1;
    var c = b[2],
      d = b[1],
      e = "";
    if (c) {
      var f = c.split("/"),
        g = f[1];
      e = g === "s" ? decodeURIComponent(f[2]) : decodeURIComponent(g);
    } else if (d) {
      if (d.indexOf("xn--") === 0) return !1;
      e = d.replace(/-/g, ".").replace(/\.\./g, "-");
    }
    var k = a.replace(up, ""),
      m = e.replace(up, "");
    return k === m || tb(k, "." + m);
  }
  function Np(a, b) {
    return a === !1 ? !1 : a || b || Mp();
  }
  var Op = ["1"],
    Pp = {},
    Qp = {};
  function Rp(a, b) {
    b = b === void 0 ? !0 : b;
    var c = Sp(a.prefix);
    if (!Pp[c])
      if (Tp(c, a.path, a.domain)) {
        var d = Qp[Sp(a.prefix)];
        b && Up(a, d ? d.id : void 0, d ? d.bi : void 0);
      } else {
        var e = Fj("auiddc");
        if (e) Va("TAGGING", 17), (Pp[c] = e);
        else if (b) {
          var f = Sp(a.prefix),
            g = hp();
          Vp(f, g, a);
          Tp(c, a.path, a.domain);
        }
      }
  }
  function Up(a, b, c) {
    var d = Sp(a.prefix),
      e = Pp[d];
    if (e) {
      var f = e.split(".");
      if (f.length === 2) {
        var g = Number(f[1]) || 0;
        if (g) {
          var k = e;
          b && (k = e + "." + b + "." + (c ? c : Math.floor(nb() / 1e3)));
          Vp(d, k, a, g * 1e3);
        }
      }
    }
  }
  function Vp(a, b, c, d) {
    var e = jp(b, "1", c.domain, c.path),
      f = kp(c, d);
    f.Ib = Wp();
    ap(a, e, f);
  }
  function Tp(a, b, c) {
    var d = ip(a, b, c, Op, Wp());
    if (!d) return !1;
    Xp(a, d);
    return !0;
  }
  function Xp(a, b) {
    var c = b.split(".");
    c.length === 5
      ? ((Pp[a] = c.slice(0, 2).join(".")),
        (Qp[a] = { id: c.slice(2, 4).join("."), bi: Number(c[4]) || 0 }))
      : c.length === 3
      ? (Qp[a] = { id: c.slice(0, 2).join("."), bi: Number(c[2]) || 0 })
      : (Pp[a] = b);
  }
  function Sp(a) {
    return (a || "_gcl") + "_au";
  }
  function Yp(a) {
    function b() {
      Yk(c) && a();
    }
    var c = Wp();
    el(function () {
      b();
      Yk(c) || fl(b, c);
    }, c);
  }
  function Zp(a) {
    var b = Dp(!0),
      c = Sp(a.prefix);
    Yp(function () {
      var d = b[c];
      if (d) {
        Xp(c, d);
        var e = Number(Pp[c].split(".")[1]) * 1e3;
        if (e) {
          Va("TAGGING", 16);
          var f = kp(a, e);
          f.Ib = Wp();
          var g = jp(d, "1", a.domain, a.path);
          ap(c, g, f);
        }
      }
    });
  }
  function $p(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var g = {},
        k = ip(a, e.path, e.domain, Op, Wp());
      k && (g[a] = k);
      return g;
    };
    Yp(function () {
      Kp(f, b, c, d);
    });
  }
  function Wp() {
    return ["ad_storage", "ad_user_data"];
  }
  var aq = {},
    bq =
      ((aq.k = { Ja: /^[\w-]+$/ }),
      (aq.b = { Ja: /^[\w-]+$/, ri: !0 }),
      (aq.i = { Ja: /^[1-9]\d*$/ }),
      (aq.u = { Ja: /^[1-9]\d*$/ }),
      aq);
  var cq = {},
    fq =
      ((cq[5] = { Tk: { 2: dq }, Jh: ["k", "i", "b", "u"] }),
      (cq[4] = { Tk: { 2: dq, GCL: eq }, Jh: ["k", "i", "b"] }),
      cq);
  function gq(a) {
    var b = fq[5];
    if (b) {
      var c = a.split(".")[0];
      if (c) {
        var d = b.Tk[c];
        if (d) return d(a, 5);
      }
    }
  }
  function dq(a, b) {
    var c = a.split(".");
    if (c.length === 3) {
      var d = {},
        e = fq[b];
      if (e) {
        for (
          var f = e.Jh, g = l(c[2].split("$")), k = g.next();
          !k.done;
          k = g.next()
        ) {
          var m = k.value,
            n = m[0];
          if (f.indexOf(n) !== -1)
            try {
              var p = decodeURIComponent(m.substring(1)),
                q = bq[n];
              q && (q.ri ? ((d[n] = d[n] || []), d[n].push(p)) : (d[n] = p));
            } catch (r) {}
        }
        return d;
      }
    }
  }
  function hq(a, b) {
    var c = fq[5];
    if (c) {
      for (var d = [], e = l(c.Jh), f = e.next(); !f.done; f = e.next()) {
        var g = f.value,
          k = bq[g];
        if (k) {
          var m = a[g];
          if (m !== void 0)
            if (k.ri && Array.isArray(m))
              for (var n = l(m), p = n.next(); !p.done; p = n.next())
                d.push(encodeURIComponent("" + g + p.value));
            else d.push(encodeURIComponent("" + g + m));
        }
      }
      return ["2", b || "1", d.join("$")].join(".");
    }
  }
  function eq(a) {
    var b = a.split(".");
    b.shift();
    var c = b.shift(),
      d = b.shift(),
      e = {};
    return (e.k = d), (e.i = c), (e.b = b), e;
  }
  var iq = new Map([
    [5, "ad_storage"],
    [4, ["ad_storage", "ad_user_data"]],
  ]);
  function jq(a) {
    if (fq[5]) {
      for (
        var b = [],
          c = Qo(a, void 0, void 0, iq.get(5)),
          d = l(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = gq(e.value);
        f && (kq(f), b.push(f));
      }
      return b;
    }
  }
  function lq(a, b, c, d) {
    c = c || {};
    var e = fp(c.domain, c.path),
      f = hq(b, e);
    if (f) {
      var g = kp(c, d, void 0, iq.get(5));
      ap(a, f, g);
    }
  }
  function mq(a, b) {
    var c = b.Ja;
    return typeof c === "function" ? c(a) : c.test(a);
  }
  function kq(a) {
    for (
      var b = l(Object.keys(a)), c = b.next(), d = {};
      !c.done;
      d = { Se: void 0 }, c = b.next()
    ) {
      var e = c.value,
        f = a[e];
      d.Se = bq[e];
      d.Se
        ? d.Se.ri
          ? (a[e] = Array.isArray(f)
              ? f.filter(
                  (function (g) {
                    return function (k) {
                      return mq(k, g.Se);
                    };
                  })(d)
                )
              : void 0)
          : (typeof f === "string" && mq(f, d.Se)) || (a[e] = void 0)
        : (a[e] = void 0);
    }
  }
  function nq(a) {
    for (
      var b = [],
        c = E.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          Ai: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, k) {
      return k.timestamp - g.timestamp;
    });
    return b;
  }
  function oq(a, b) {
    var c = nq(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !(f[0] !== "1" || (b && f.length < 3) || (!b && f.length !== 3)) &&
        Number(f[1])
      ) {
        d[c[e].Ai] || (d[c[e].Ai] = []);
        var g = { version: f[0], timestamp: Number(f[1]) * 1e3, W: f[2] };
        b && f.length > 3 && (g.labels = f.slice(3));
        d[c[e].Ai].push(g);
      }
    }
    return d;
  }
  function pq() {
    var a = String,
      b = A.location.hostname,
      c = A.location.pathname,
      d = (b = Bb(b));
    d.split(".").length > 2 &&
      (d = d.replace(/^(www[0-9]*|web|ftp|wap|home|m|w|amp|mobile)\./, ""));
    b = d;
    c = Bb(c);
    var e = c.split(";")[0];
    e = e.replace(/\/(ar|slp|web|index)?\/?$/, "");
    return a(Oo(("" + b + e).toLowerCase()));
  }
  var qq = ["ad_storage", "ad_user_data"];
  function rq() {
    var a = sq();
    if (a.error) return a;
    if (!a.value) return { error: 2 };
    var b;
    try {
      b = a.value.gclid;
    } catch (c) {
      return { error: 11 };
    }
    return b ? { value: b } : { value: void 0 };
  }
  function sq(a) {
    a = a === void 0 ? !0 : a;
    if (!Yk(qq)) return { error: 3 };
    try {
      if (!A.localStorage) return { error: 1 };
    } catch (f) {
      return { error: 14 };
    }
    var b = { schema: "gcl", version: 1 },
      c = void 0;
    try {
      c = A.localStorage.getItem("_gcl_ls");
    } catch (f) {
      return { error: 13 };
    }
    try {
      if (c) {
        var d = JSON.parse(c);
        if (d && typeof d === "object") b = d;
        else return { error: 12 };
      }
    } catch (f) {
      return { error: 8 };
    }
    if (b.schema !== "gcl") return { error: 4 };
    if (b.version !== 1) return { error: 5 };
    try {
      var e = tq(b);
      a && e && uq({ value: b, error: 0 });
    } catch (f) {
      return { error: 8 };
    }
    return { value: b, error: 0 };
  }
  function tq(a) {
    if (!a || typeof a !== "object") return !1;
    if ("expires" in a && "value" in a) {
      var b;
      typeof a.expires === "number"
        ? (b = a.expires)
        : (b = typeof a.expires === "string" ? Number(a.expires) : NaN);
      if (isNaN(b) || !(Date.now() <= b))
        return (a.value = null), (a.error = 9), !0;
    } else {
      for (
        var c = !1, d = l(Object.keys(a)), e = d.next();
        !e.done;
        e = d.next()
      )
        c = tq(a[e.value]) || c;
      return c;
    }
    return !1;
  }
  function uq(a) {
    if (!a.error && a.value) {
      var b = a.value,
        c;
      try {
        c = JSON.stringify(b);
      } catch (d) {
        return;
      }
      try {
        A.localStorage.setItem("_gcl_ls", c);
      } catch (d) {}
    }
  }
  var vq = /^\w+$/,
    wq = /^[\w-]+$/,
    xq = {},
    yq =
      ((xq.aw = "_aw"),
      (xq.dc = "_dc"),
      (xq.gf = "_gf"),
      (xq.gp = "_gp"),
      (xq.gs = "_gs"),
      (xq.ha = "_ha"),
      (xq.ag = "_ag"),
      (xq.gb = "_gb"),
      xq);
  function zq() {
    return ["ad_storage", "ad_user_data"];
  }
  function Aq(a) {
    return !Yh(9) || Yk(a);
  }
  function Bq(a, b) {
    function c() {
      var d = Aq(b);
      d && a();
      return d;
    }
    el(function () {
      c() || fl(c, b);
    }, b);
  }
  function Cq(a) {
    return Dq(a).map(function (b) {
      return b.W;
    });
  }
  function Eq(a) {
    return Fq(a)
      .filter(function (b) {
        return b.W;
      })
      .map(function (b) {
        return b.W;
      });
  }
  function Fq(a) {
    var b = Gq(a.prefix),
      c = Hq("gb", b),
      d = Hq("ag", b);
    if (!d || !c) return [];
    var e = function (k) {
        return function (m) {
          m.type = k;
          return m;
        };
      },
      f = Dq(c).map(e("gb")),
      g = Iq(d).map(e("ag"));
    return f.concat(g).sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
  }
  function Jq(a, b, c, d, e, f) {
    var g = bb(a, function (k) {
      return k.W === c;
    });
    g
      ? (g.timestamp < d && ((g.timestamp = d), (g.Od = f)),
        (g.labels = Kq(g.labels || [], e || [])))
      : a.push({ version: b, W: c, timestamp: d, labels: e, Od: f });
  }
  function Iq(a) {
    for (
      var b = jq(a) || [], c = [], d = l(b), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = e.value,
        g = f,
        k = g.k,
        m = g.b,
        n = Lq(f);
      if (n) {
        var p = void 0;
        Yh(10) && (p = f.u);
        Jq(c, "2", k, n, m || [], p);
      }
    }
    return c.sort(function (q, r) {
      return r.timestamp - q.timestamp;
    });
  }
  function Dq(a) {
    for (
      var b = [], c = Qo(a, E.cookie, void 0, zq()), d = l(c), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = Mq(e.value);
      if (f != null) {
        var g = f;
        Jq(b, g.version, g.W, g.timestamp, g.labels);
      }
    }
    b.sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
    return Nq(b);
  }
  function Oq(a, b) {
    for (var c = [], d = l(a), e = d.next(); !e.done; e = d.next()) {
      var f = e.value;
      c.includes(f) || c.push(f);
    }
    for (var g = l(b), k = g.next(); !k.done; k = g.next()) {
      var m = k.value;
      c.includes(m) || c.push(m);
    }
    return c;
  }
  function Pq(a, b) {
    var c = bb(a, function (d) {
      return d.W === b.W;
    });
    c
      ? (c.timestamp < b.timestamp &&
          ((c.timestamp = b.timestamp), (c.Od = b.Od)),
        (c.Na = c.Na
          ? b.Na
            ? c.timestamp < b.timestamp
              ? b.Na
              : c.Na
            : c.Na || 0
          : b.Na || 0),
        (c.labels = Oq(c.labels || [], b.labels || [])),
        (c.Vc = Oq(c.Vc || [], b.Vc || [])))
      : a.push(b);
  }
  function Qq() {
    var a = rq();
    if (!a || a.error || !a.value || typeof a.value !== "object") return null;
    var b = a.value;
    try {
      if (!("value" in b && b.value) || typeof b.value !== "object")
        return null;
      var c = b.value,
        d = c.value;
      return d && d.match(wq)
        ? {
            version: "",
            W: d,
            timestamp: Number(c.creationTimeMs) || 0,
            labels: [],
            Na: c.linkDecorationSource || 0,
            Vc: [2],
          }
        : null;
    } catch (e) {
      return null;
    }
  }
  function Rq(a) {
    for (
      var b = [], c = Qo(a, E.cookie, void 0, zq()), d = l(c), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = Mq(e.value);
      f != null && ((f.Od = void 0), (f.Na = 0), (f.Vc = [1]), Pq(b, f));
    }
    var g = Qq();
    g && ((g.Od = void 0), (g.Na = g.Na || 0), (g.Vc = g.Vc || [2]), Pq(b, g));
    b.sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
    return Nq(b);
  }
  function Kq(a, b) {
    if (!a.length) return b;
    if (!b.length) return a;
    var c = {};
    return a.concat(b).filter(function (d) {
      return c.hasOwnProperty(d) ? !1 : (c[d] = !0);
    });
  }
  function Gq(a) {
    return a && typeof a === "string" && a.match(vq) ? a : "_gcl";
  }
  function Sq(a, b, c) {
    var d = Ej(a),
      e = yj(d, "query", !1, void 0, "gclsrc"),
      f = { value: yj(d, "query", !1, void 0, "gclid"), Na: c ? 4 : 2 };
    if (b && (!f.value || !e)) {
      var g = d.hash.replace("#", "");
      f.value || ((f.value = xj(g, "gclid", !1)), (f.Na = 3));
      e || (e = xj(g, "gclsrc", !1));
    }
    return !f.value || (e !== void 0 && e !== "aw" && e !== "aw.ds") ? [] : [f];
  }
  function Tq(a, b) {
    var c = Ej(a),
      d = yj(c, "query", !1, void 0, "gclid"),
      e = yj(c, "query", !1, void 0, "gclsrc"),
      f = yj(c, "query", !1, void 0, "wbraid");
    f = zb(f);
    var g = yj(c, "query", !1, void 0, "gbraid"),
      k = yj(c, "query", !1, void 0, "gad_source"),
      m = yj(c, "query", !1, void 0, "dclid");
    if (b && !(d && e && f && g)) {
      var n = c.hash.replace("#", "");
      d = d || xj(n, "gclid", !1);
      e = e || xj(n, "gclsrc", !1);
      f = f || xj(n, "wbraid", !1);
      g = g || xj(n, "gbraid", !1);
      k = k || xj(n, "gad_source", !1);
    }
    return Uq(d, e, m, f, g, k);
  }
  function Vq() {
    return Tq(A.location.href, !0);
  }
  function Uq(a, b, c, d, e, f) {
    var g = {},
      k = function (m, n) {
        g[n] || (g[n] = []);
        g[n].push(m);
      };
    g.gclid = a;
    g.gclsrc = b;
    g.dclid = c;
    if (a !== void 0 && a.match(wq))
      switch (b) {
        case void 0:
          k(a, "aw");
          break;
        case "aw.ds":
          k(a, "aw");
          k(a, "dc");
          break;
        case "ds":
          k(a, "dc");
          break;
        case "3p.ds":
          k(a, "dc");
          break;
        case "gf":
          k(a, "gf");
          break;
        case "ha":
          k(a, "ha");
      }
    c && k(c, "dc");
    d !== void 0 && wq.test(d) && ((g.wbraid = d), k(d, "gb"));
    e !== void 0 && wq.test(e) && ((g.gbraid = e), k(e, "ag"));
    f !== void 0 && wq.test(f) && ((g.gad_source = f), k(f, "gs"));
    return g;
  }
  function Wq(a) {
    var b = Vq();
    if (Yh(6)) {
      for (
        var c = !0, d = l(Object.keys(b)), e = d.next();
        !e.done;
        e = d.next()
      )
        if (b[e.value] !== void 0) {
          c = !1;
          break;
        }
      c && ((b = Tq(A.document.referrer, !1)), (b.gad_source = void 0));
    }
    Xq(b, !1, a);
  }
  function Yq(a) {
    Wq(a);
    var b = Sq(A.location.href, !0, !1);
    Yh(6) && !b.length && (b = Sq(A.document.referrer, !1, !0));
    if (b.length) {
      var c = b[0];
      a = a || {};
      var d = nb(),
        e = kp(a, d, !0),
        f = zq(),
        g = function () {
          if (Aq(f) && e.expires !== void 0) {
            var k = {
                value: {
                  value: c.value,
                  creationTimeMs: d,
                  linkDecorationSource: c.Na,
                },
                expires: Number(e.expires),
              },
              m = sq(!1);
            !m.error && m.value && ((m.value.gclid = k), uq(m));
          }
        };
      el(function () {
        g();
        Aq(f) || fl(g, f);
      }, f);
    }
  }
  function Xq(a, b, c, d, e) {
    c = c || {};
    e = e || [];
    var f = Gq(c.prefix),
      g = d || nb(),
      k = Math.round(g / 1e3),
      m = zq(),
      n = !1,
      p = !1,
      q = function () {
        if (Aq(m)) {
          var r = kp(c, g, !0);
          r.Ib = m;
          for (
            var u = function (F, S) {
                var M = Hq(F, f);
                M && (ap(M, S, r), F !== "gb" && (n = !0));
              },
              v = function (F) {
                var S = ["GCL", k, F];
                e.length > 0 && S.push(e.join("."));
                return S.join(".");
              },
              t = l(["aw", "dc", "gf", "ha", "gp"]),
              w = t.next();
            !w.done;
            w = t.next()
          ) {
            var x = w.value;
            a[x] && u(x, v(a[x][0]));
          }
          if (!n && a.gb) {
            var y = a.gb[0],
              B = Hq("gb", f);
            (!b &&
              Dq(B).some(function (F) {
                return F.W === y && F.labels && F.labels.length > 0;
              })) ||
              u("gb", v(y));
          }
        }
        if (!p && a.gbraid && Aq("ad_storage") && ((p = !0), !n)) {
          var C = a.gbraid,
            D = Hq("ag", f);
          if (
            b ||
            !Iq(D).some(function (F) {
              return F.W === C && F.labels && F.labels.length > 0;
            })
          ) {
            var H = {},
              J = ((H.k = C), (H.i = "" + k), (H.b = e), H);
            lq(D, J, c, g);
          }
        }
        Zq(a, f, g, c);
      };
    el(function () {
      q();
      Aq(m) || fl(q, m);
    }, m);
  }
  function Zq(a, b, c, d) {
    if (a.gad_source !== void 0 && Aq("ad_storage")) {
      if (Yh(4)) {
        var e = Ec();
        if (e === "r" || e === "h") return;
      }
      var f = a.gad_source,
        g = Hq("gs", b);
      if (g) {
        var k = Math.round((nb() - (Dc() || 0)) / 1e3),
          m;
        if (Yh(10)) {
          var n = pq(),
            p = {};
          m = ((p.k = f), (p.i = "" + k), (p.u = n), p);
        } else {
          var q = {};
          m = ((q.k = f), (q.i = "" + k), q);
        }
        lq(g, m, d, c);
      }
    }
  }
  function $q(a, b) {
    var c = Dp(!0);
    Bq(function () {
      for (var d = Gq(b.prefix), e = 0; e < a.length; ++e) {
        var f = a[e];
        if (yq[f] !== void 0) {
          var g = Hq(f, d),
            k = c[g];
          if (k) {
            var m = Math.min(ar(k), nb()),
              n;
            b: {
              for (
                var p = m, q = Qo(g, E.cookie, void 0, zq()), r = 0;
                r < q.length;
                ++r
              )
                if (ar(q[r]) > p) {
                  n = !0;
                  break b;
                }
              n = !1;
            }
            if (!n) {
              var u = kp(b, m, !0);
              u.Ib = zq();
              ap(g, k, u);
            }
          }
        }
      }
      Xq(Uq(c.gclid, c.gclsrc), !1, b);
    }, zq());
  }
  function br(a) {
    var b = ["ag"],
      c = Dp(!0),
      d = Gq(a.prefix);
    Bq(
      function () {
        for (var e = 0; e < b.length; ++e) {
          var f = Hq(b[e], d);
          if (f) {
            var g = c[f];
            if (g) {
              var k = gq(g);
              if (k) {
                var m = Lq(k);
                m || (m = nb());
                var n;
                a: {
                  for (var p = m, q = jq(f), r = 0; r < q.length; ++r)
                    if (Lq(q[r]) > p) {
                      n = !0;
                      break a;
                    }
                  n = !1;
                }
                if (n) break;
                k.i = "" + Math.round(m / 1e3);
                lq(f, k, a, m);
              }
            }
          }
        }
      },
      ["ad_storage"]
    );
  }
  function Hq(a, b) {
    var c = yq[a];
    if (c !== void 0) return b + c;
  }
  function ar(a) {
    return cr(a.split(".")).length !== 0
      ? (Number(a.split(".")[1]) || 0) * 1e3
      : 0;
  }
  function Lq(a) {
    return a ? (Number(a.i) || 0) * 1e3 : 0;
  }
  function Mq(a) {
    var b = cr(a.split("."));
    return b.length === 0
      ? null
      : {
          version: b[0],
          W: b[2],
          timestamp: (Number(b[1]) || 0) * 1e3,
          labels: b.slice(3),
        };
  }
  function cr(a) {
    return a.length < 3 ||
      (a[0] !== "GCL" && a[0] !== "1") ||
      !/^\d+$/.test(a[1]) ||
      !wq.test(a[2])
      ? []
      : a;
  }
  function dr(a, b, c, d, e) {
    if (Array.isArray(b) && Po(A)) {
      var f = Gq(e),
        g = function () {
          for (var k = {}, m = 0; m < a.length; ++m) {
            var n = Hq(a[m], f);
            if (n) {
              var p = Qo(n, E.cookie, void 0, zq());
              p.length && (k[n] = p.sort()[p.length - 1]);
            }
          }
          return k;
        };
      Bq(function () {
        Kp(g, b, c, d);
      }, zq());
    }
  }
  function er(a, b, c, d) {
    if (Array.isArray(a) && Po(A)) {
      var e = ["ag"],
        f = Gq(d),
        g = function () {
          for (var k = {}, m = 0; m < e.length; ++m) {
            var n = Hq(e[m], f);
            if (!n) return {};
            var p = jq(n);
            if (p.length) {
              var q = p.sort(function (r, u) {
                return Lq(u) - Lq(r);
              })[0];
              k[n] = hq(q);
            }
          }
          return k;
        };
      Bq(
        function () {
          Kp(g, a, b, c);
        },
        ["ad_storage"]
      );
    }
  }
  function Nq(a) {
    return a.filter(function (b) {
      return wq.test(b.W);
    });
  }
  function fr(a, b) {
    if (Po(A)) {
      for (var c = Gq(b.prefix), d = {}, e = 0; e < a.length; e++)
        yq[a[e]] && (d[a[e]] = yq[a[e]]);
      Bq(function () {
        fb(d, function (f, g) {
          var k = Qo(c + g, E.cookie, void 0, zq());
          k.sort(function (u, v) {
            return ar(v) - ar(u);
          });
          if (k.length) {
            var m = k[0],
              n = ar(m),
              p = cr(m.split(".")).length !== 0 ? m.split(".").slice(3) : [],
              q = {},
              r;
            r = cr(m.split(".")).length !== 0 ? m.split(".")[2] : void 0;
            q[f] = [r];
            Xq(q, !0, b, n, p);
          }
        });
      }, zq());
    }
  }
  function gr(a) {
    var b = ["ag"],
      c = ["gbraid"];
    Bq(
      function () {
        for (var d = Gq(a.prefix), e = 0; e < b.length; ++e) {
          var f = Hq(b[e], d);
          if (!f) break;
          var g = jq(f);
          if (g.length) {
            var k = g.sort(function (q, r) {
                return Lq(r) - Lq(q);
              })[0],
              m = Lq(k),
              n = k.b,
              p = {};
            p[c[e]] = k.k;
            Xq(p, !0, a, m, n);
          }
        }
      },
      ["ad_storage"]
    );
  }
  function hr(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  function ir(a) {
    function b(k, m, n) {
      n && (k[m] = n);
    }
    if (bl()) {
      var c = Vq(),
        d;
      a.includes("gad_source") &&
        (d = c.gad_source !== void 0 ? c.gad_source : Dp(!1)._gs);
      if (hr(c, a) || d) {
        var e = {};
        b(e, "gclid", c.gclid);
        b(e, "dclid", c.dclid);
        b(e, "gclsrc", c.gclsrc);
        b(e, "wbraid", c.wbraid);
        b(e, "gbraid", c.gbraid);
        Lp(function () {
          return e;
        }, 3);
        var f = {},
          g = ((f._up = "1"), f);
        b(g, "_gs", d);
        Lp(function () {
          return g;
        }, 1);
      }
    }
  }
  function jr(a) {
    if (!Yh(1)) return null;
    var b = Dp(!0).gad_source;
    if (b != null) return (A.location.hash = ""), b;
    if (Yh(2)) {
      var c = Ej(A.location.href);
      b = yj(c, "query", !1, void 0, "gad_source");
      if (b != null) return b;
      var d = Vq();
      if (hr(d, a)) return "0";
    }
    return null;
  }
  function kr(a) {
    var b = jr(a);
    b != null &&
      Lp(function () {
        var c = {};
        return (c.gad_source = b), c;
      }, 4);
  }
  function lr(a, b, c) {
    var d = [];
    if (b.length === 0) return d;
    for (var e = {}, f = 0; f < b.length; f++) {
      var g = b[f],
        k = g.type ? g.type : "gcl";
      (g.labels || []).indexOf(c) === -1
        ? (a.push(0), e[k] || d.push(g))
        : a.push(1);
      e[k] = !0;
    }
    return d;
  }
  function mr(a, b, c, d) {
    var e = [];
    c = c || {};
    if (!Aq(zq())) return e;
    var f = Dq(a),
      g = lr(e, f, b);
    if (g.length && !d)
      for (var k = l(g), m = k.next(); !m.done; m = k.next()) {
        var n = m.value,
          p = n.timestamp,
          q = [n.version, Math.round(p / 1e3), n.W]
            .concat(n.labels || [], [b])
            .join("."),
          r = kp(c, p, !0);
        r.Ib = zq();
        ap(a, q, r);
      }
    return e;
  }
  function nr(a, b) {
    var c = [];
    b = b || {};
    var d = Fq(b),
      e = lr(c, d, a);
    if (e.length)
      for (var f = l(e), g = f.next(); !g.done; g = f.next()) {
        var k = g.value,
          m = Gq(b.prefix),
          n = Hq(k.type, m);
        if (!n) break;
        var p = k,
          q = p.version,
          r = p.W,
          u = p.labels,
          v = p.timestamp,
          t = Math.round(v / 1e3);
        if (k.type === "ag") {
          var w = {},
            x = ((w.k = r), (w.i = "" + t), (w.b = (u || []).concat([a])), w);
          lq(n, x, b, v);
        } else if (k.type === "gb") {
          var y = [q, t, r].concat(u || [], [a]).join("."),
            B = kp(b, v, !0);
          B.Ib = zq();
          ap(n, y, B);
        }
      }
    return c;
  }
  function or(a, b) {
    var c = Gq(b),
      d = Hq(a, c);
    if (!d) return 0;
    var e;
    e = a === "ag" ? Iq(d) : Dq(d);
    for (var f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
    return f;
  }
  function pr(a) {
    for (var b = 0, c = l(Object.keys(a)), d = c.next(); !d.done; d = c.next())
      for (var e = a[d.value], f = 0; f < e.length; f++)
        b = Math.max(b, Number(e[f].timestamp));
    return b;
  }
  function qr(a) {
    var b = Math.max(or("aw", a), pr(Aq(zq()) ? oq() : {})),
      c = Math.max(or("gb", a), pr(Aq(zq()) ? oq("_gac_gb", !0) : {}));
    c = Math.max(c, or("ag", a));
    return c > b;
  }
  var rr = function (a, b) {
      var c = (Ji.ads_pageview = Ji.ads_pageview || {});
      if (c[a]) return !1;
      (b === void 0 ? 0 : b) || (c[a] = !0);
      return !0;
    },
    sr = function (a) {
      var b = Ej(a);
      return Ab(
        "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
          " "
        ),
        b,
        "0"
      );
    },
    Ar = function (a, b, c, d, e) {
      var f = Gq(a.prefix);
      if (rr(f, !0)) {
        var g = Vq(),
          k = [],
          m = g.gclid,
          n = g.dclid,
          p = g.gclsrc || "aw",
          q = tr(),
          r = q.Ye,
          u = q.tk;
        !m ||
          (p !== "aw.ds" && p !== "aw" && p !== "ds" && p !== "3p.ds") ||
          k.push({ W: m, Ze: p });
        n && k.push({ W: n, Ze: "ds" });
        k.length === 2 && T(147);
        k.length === 0 && g.wbraid && k.push({ W: g.wbraid, Ze: "gb" });
        k.length === 0 && p === "aw.ds" && k.push({ W: "", Ze: "aw.ds" });
        ur(function () {
          var v = V(vr());
          if (v) {
            Rp(a);
            var t = [],
              w = v ? Pp[Sp(a.prefix)] : void 0;
            w && t.push("auid=" + w);
            if (V(N.g.O)) {
              e && t.push("userId=" + e);
              var x = Ol(Jl.Bh);
              if (x === void 0) Nl(Jl.Ch, !0);
              else {
                var y = Ol(Jl.Le);
                t.push("ga_uid=" + y + "." + x);
              }
            }
            var B = E.referrer ? yj(Ej(E.referrer), "host") : "",
              C = v || !d ? k : [];
            C.length === 0 &&
              (wr.test(B) || xr.test(B)) &&
              C.push({ W: "", Ze: "" });
            if (C.length !== 0 || r !== void 0) {
              B && t.push("ref=" + encodeURIComponent(B));
              var D = yr();
              t.push("url=" + encodeURIComponent(D));
              t.push("tft=" + nb());
              var H = Dc();
              H !== void 0 && t.push("tfd=" + Math.round(H));
              var J = Mn(!0);
              t.push("frm=" + J);
              r !== void 0 && t.push("gad_source=" + encodeURIComponent(r));
              u !== void 0 &&
                t.push("gad_source_src=" + encodeURIComponent(u.toString()));
              if (!c) {
                var F = {};
                c = Cm(sm(new rm(0), ((F[N.g.na] = Xm.j[N.g.na]), F)));
              }
              t.push("gtm=" + No({ qa: b }));
              Ao() && t.push("gcs=" + Bo());
              t.push("gcd=" + Fo(c));
              Io() && t.push("dma_cps=" + Go());
              t.push("dma=" + Ho());
              zo(c) ? t.push("npa=0") : t.push("npa=1");
              Ko() && t.push("_ng=1");
              Wn(eo()) && t.push("tcfd=" + Jo());
              var S = lo();
              S && t.push("gdpr=" + S);
              var M = ko();
              M && t.push("gdpr_consent=" + M);
              R(22) && t.push("apve=0");
              R(108) && Dp(!1)._up && t.push("gtm_up=1");
              dj() && t.push("tag_exp=" + dj());
              if (C.length > 0)
                for (var Z = 0; Z < C.length; Z++) {
                  var ca = C[Z],
                    da = ca.W,
                    Y = ca.Ze;
                  if (!zr(a.prefix, Y + "." + da, w !== void 0)) {
                    var Q =
                      "https://adservice.google.com/pagead/regclk?" +
                      t.join("&");
                    da !== ""
                      ? (Q =
                          Y === "gb"
                            ? Q + "&wbraid=" + da
                            : Q + "&gclid=" + da + "&gclsrc=" + Y)
                      : Y === "aw.ds" && (Q += "&gclsrc=aw.ds");
                    xc(Q);
                  }
                }
              else if (r !== void 0 && !zr(a.prefix, "gad", w !== void 0)) {
                var oa =
                  "https://adservice.google.com/pagead/regclk?" + t.join("&");
                xc(oa);
              }
            }
          }
        });
      }
    },
    zr = function (a, b, c) {
      var d = (Ji.joined_auid = Ji.joined_auid || {}),
        e = (c ? a || "_gcl" : "") + "." + b;
      if (d[e]) return !0;
      d[e] = !0;
      return !1;
    },
    tr = function () {
      var a = Ej(A.location.href),
        b = void 0,
        c = void 0,
        d = yj(a, "query", !1, void 0, "gad_source"),
        e,
        f = a.hash.replace("#", "").match(Br);
      e = f ? f[1] : void 0;
      d && e
        ? ((b = d), (c = 1))
        : d
        ? ((b = d), (c = 2))
        : e && ((b = e), (c = 3));
      return { Ye: b, tk: c };
    },
    yr = function () {
      var a = Mn(!1) === 1 ? A.top.location.href : A.location.href;
      return (a = a.replace(/[\?#].*$/, ""));
    },
    Cr = function (a) {
      var b = [];
      fb(a, function (c, d) {
        d = Nq(d);
        for (var e = [], f = 0; f < d.length; f++) e.push(d[f].W);
        e.length && b.push(c + ":" + e.join(","));
      });
      return b.join(";");
    },
    Er = function (a, b) {
      return Dr("dc", a, b);
    },
    Fr = function (a, b) {
      return Dr("aw", a, b);
    },
    Dr = function (a, b, c) {
      if (a === "aw" || a === "dc" || a === "gb") {
        var d = Fj("gcl" + a);
        if (d) return d.split(".");
      }
      var e = Gq(b);
      if (e === "_gcl") {
        var f = !V(vr()) && c,
          g;
        g = Vq()[a] || [];
        if (g.length > 0) return f ? ["0"] : g;
      }
      var k = Hq(a, e);
      return k ? Cq(k) : [];
    },
    ur = function (a) {
      var b = vr();
      El(function () {
        a();
        V(b) || fl(a, b);
      }, b);
    },
    vr = function () {
      return [N.g.N, N.g.O];
    },
    wr = /^(?:www\.)?google(?:\.com?)?(?:\.[a-z]{2}t?)?$/,
    xr = /^www\.googleadservices\.com$/,
    Br = /^gad_source[_=](\d+)$/;
  function Gr() {
    Ji.dedupe_gclid || (Ji.dedupe_gclid = hp());
    return Ji.dedupe_gclid;
  }
  var Hr = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    Ir = /^www.googleadservices.com$/;
  function Jr(a) {
    a || (a = Kr());
    return a.Cn
      ? !1
      : a.Bm || a.Cm || a.Fm || a.Dm || a.Ye || a.lm || a.Em || a.sm
      ? !0
      : !1;
  }
  function Kr() {
    var a = {},
      b = Dp(!0);
    a.Cn = !!b._up;
    var c = Vq();
    a.Bm = c.aw !== void 0;
    a.Cm = c.dc !== void 0;
    a.Fm = c.wbraid !== void 0;
    a.Dm = c.gbraid !== void 0;
    a.Em = c.gclsrc === "aw.ds";
    a.Ye = tr().Ye;
    var d = E.referrer ? yj(Ej(E.referrer), "host") : "";
    a.sm = Hr.test(d);
    a.lm = Ir.test(d);
    return a;
  }
  var Lr = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    Mr = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    Nr = /^\d+\.fls\.doubleclick\.net$/,
    Or = /;gac=([^;?]+)/,
    Pr = /;gacgb=([^;?]+)/;
  function Qr(a, b) {
    if (Nr.test(E.location.host)) {
      var c = E.location.href.match(b);
      return c && c.length === 2 && c[1].match(Lr)
        ? decodeURIComponent(c[1])
        : "";
    }
    for (
      var d = [], e = l(Object.keys(a)), f = e.next();
      !f.done;
      f = e.next()
    ) {
      for (var g = f.value, k = [], m = a[g], n = 0; n < m.length; n++)
        k.push(m[n].W);
      d.push(g + ":" + k.join(","));
    }
    return d.length > 0 ? d.join(";") : "";
  }
  function Rr(a, b, c) {
    for (
      var d = Aq(zq()) ? oq("_gac_gb", !0) : {},
        e = [],
        f = !1,
        g = l(Object.keys(d)),
        k = g.next();
      !k.done;
      k = g.next()
    ) {
      var m = k.value,
        n = mr("_gac_gb_" + m, a, b, c);
      f =
        f ||
        (n.length !== 0 &&
          n.some(function (p) {
            return p === 1;
          }));
      e.push(m + ":" + n.join(","));
    }
    return { km: f ? e.join(";") : "", jm: Qr(d, Pr) };
  }
  function Sr(a) {
    var b = E.location.href.match(new RegExp(";" + a + "=([^;?]+)"));
    return b && b.length === 2 && b[1].match(Mr) ? b[1] : void 0;
  }
  function Tr(a) {
    var b = Yh(10),
      c = {},
      d,
      e,
      f;
    Nr.test(E.location.host) &&
      ((d = Sr("gclgs")), (e = Sr("gclst")), b && (f = Sr("gcllp")));
    if (d && e && (!b || f)) (c.kg = d), (c.mg = e), (c.lg = f);
    else {
      var g = nb(),
        k = Iq((a || "_gcl") + "_gs"),
        m = k.map(function (q) {
          return q.W;
        }),
        n = k.map(function (q) {
          return g - q.timestamp;
        }),
        p = [];
      b &&
        (p = k.map(function (q) {
          return q.Od;
        }));
      m.length > 0 &&
        n.length > 0 &&
        (!b || p.length > 0) &&
        ((c.kg = m.join(".")),
        (c.mg = n.join(".")),
        b && p.length > 0 && (c.lg = p.join(".")));
    }
    return c;
  }
  function Ur(a, b, c, d) {
    d = d === void 0 ? !1 : d;
    if (Nr.test(E.location.host)) {
      var e = Sr(c);
      if (e) return [{ W: e }];
    } else {
      if (b === "gclid") {
        var f = (a || "_gcl") + "_aw";
        return d ? Rq(f) : Dq(f);
      }
      if (b === "wbraid") return Dq((a || "_gcl") + "_gb");
      if (b === "braids") return Fq({ prefix: a });
    }
    return [];
  }
  function Vr(a) {
    return Ur(a, "gclid", "gclaw")
      .map(function (b) {
        return b.W;
      })
      .join(".");
  }
  function Wr(a) {
    var b = Ur(a, "gclid", "gclaw", !0),
      c = b
        .map(function (f) {
          return f.W;
        })
        .join("."),
      d = b
        .map(function (f) {
          return f.Na || 0;
        })
        .join("."),
      e = b
        .map(function (f) {
          for (
            var g = 0, k = l(f.Vc || []), m = k.next();
            !m.done;
            m = k.next()
          ) {
            var n = m.value;
            n === 1 && (g |= 1);
            n === 2 && (g |= 2);
          }
          return g.toString();
        })
        .join(".");
    return { W: c, uk: d, vk: e };
  }
  function Xr(a) {
    return Ur(a, "braids", "gclgb")
      .map(function (b) {
        return b.W;
      })
      .join(".");
  }
  function Yr(a) {
    return Nr.test(E.location.host) ? !(Sr("gclaw") || Sr("gac")) : qr(a);
  }
  function Zr(a, b, c) {
    var d;
    d = c ? nr(a, b) : mr(((b && b.prefix) || "_gcl") + "_gb", a, b);
    return d.length === 0 ||
      d.every(function (e) {
        return e === 0;
      })
      ? ""
      : d.join(".");
  }
  function $r() {
    var a = A.__uspapi;
    if (Za(a)) {
      var b = "";
      try {
        a("getUSPData", 1, function (c, d) {
          if (d && c) {
            var e = c.uspString;
            e && RegExp("^[\\da-zA-Z-]{1,20}$").test(e) && (b = e);
          }
        });
      } catch (c) {}
      return b;
    }
  }
  var ds = function (a) {
      if (a.eventName === N.g.ba && a.metadata.hit_type === "page_view")
        if (R(23)) {
          a.metadata.redact_click_ids =
            U(a.m, N.g.ia) != null &&
            U(a.m, N.g.ia) !== !1 &&
            !V([N.g.N, N.g.O]);
          var b = as(a),
            c = U(a.m, N.g.ya) !== !1;
          c || (a.j[N.g.kj] = "1");
          var d = Gq(b.prefix),
            e = a.metadata.is_server_side_destination;
          if (!a.metadata.consent_updated && !a.metadata.user_id_updated) {
            var f = U(a.m, N.g.fb),
              g = U(a.m, N.g.za) || {};
            bs({ Hd: c, Pd: g, Vd: f, sc: b });
            if (!e && !rr(d)) {
              a.isAborted = !0;
              return;
            }
          }
          if (e) a.isAborted = !0;
          else {
            a.j[N.g.Fc] = N.g.bc;
            if (a.metadata.consent_updated)
              (a.j[N.g.Fc] = N.g.Yk), (a.j[N.g.Zb] = "1");
            else if (a.metadata.user_id_updated) a.j[N.g.Fc] = N.g.il;
            else {
              var k = Vq();
              a.j[N.g.ae] = k.gclid;
              a.j[N.g.je] = k.dclid;
              a.j[N.g.ej] = k.gclsrc;
              a.j[N.g.ae] ||
                a.j[N.g.je] ||
                ((a.j[N.g.Cf] = k.wbraid), (a.j[N.g.Gg] = k.gbraid));
              a.j[N.g.Ea] = E.referrer ? yj(Ej(E.referrer), "host") : "";
              a.j[N.g.ra] = yr();
              if (R(26) && fc) {
                var m = yj(Ej(fc), "host");
                m && (a.j[N.g.Cj] = m);
              }
              var n = tr(),
                p = n.tk;
              a.j[N.g.Xi] = n.Ye;
              a.j[N.g.Yi] = p;
              a.j[N.g.Nb] = Mn(!0);
              var q = Kr();
              Jr(q) && (a.j[N.g.ud] = "1");
              a.j[N.g.gj] = Gr();
              Dp(!1)._up === "1" && (a.j[N.g.wj] = "1");
            }
            hl = !0;
            a.j[N.g.eb] = void 0;
            a.j[N.g.vb] = void 0;
            var r = V([N.g.N, N.g.O]);
            r &&
              (R(27) && (a.j[N.g.eb] = cs()),
              c && (Rp(b), (a.j[N.g.vb] = Pp[Sp(b.prefix)])));
            a.j[N.g.ub] = void 0;
            a.j[N.g.ab] = void 0;
            if (!a.j[N.g.ae] && !a.j[N.g.je] && Yr(d)) {
              var u = Eq(b);
              u.length > 0 && (a.j[N.g.ub] = u.join("."));
            } else if (!a.j[N.g.Cf] && r) {
              var v = Cq(d + "_aw");
              v.length > 0 && (a.j[N.g.ab] = v.join("."));
            }
            R(30) && (a.j[N.g.xj] = Ec());
            a.m.isGtmEvent && (a.m.j[N.g.na] = Xm.j[N.g.na]);
            zo(a.m) ? (a.j[N.g.Tb] = !1) : (a.j[N.g.Tb] = !0);
            a.metadata.add_tag_timing = !0;
            var t = $r();
            t !== void 0 && (a.j[N.g.Dd] = t || "error");
            var w = lo();
            w && (a.j[N.g.jc] = w);
            var x = ko();
            x && (a.j[N.g.nc] = x);
            a.metadata.speculative = !1;
          }
        } else a.isAborted = !0;
    },
    as = function (a) {
      var b = {
        prefix: U(a.m, N.g.ib) || U(a.m, N.g.La),
        domain: U(a.m, N.g.Qa),
        Hb: U(a.m, N.g.Ra),
        flags: U(a.m, N.g.cb),
      };
      a.m.isGtmEvent && (b.path = U(a.m, N.g.xb));
      return b;
    },
    es = function (a, b) {
      var c, d, e, f, g, k, m, n;
      c = a.Hd;
      d = a.Pd;
      e = a.Vd;
      f = a.qa;
      g = a.m;
      k = a.Sd;
      m = a.io;
      n = a.Pk;
      bs({ Hd: c, Pd: d, Vd: e, sc: b });
      c &&
        m !== !0 &&
        (n != null ? (n = String(n)) : (n = void 0), Ar(b, f, g, k, n));
    },
    bs = function (a) {
      var b, c, d, e;
      b = a.Hd;
      c = a.Pd;
      d = a.Vd;
      e = a.sc;
      b &&
        (Np(c[N.g.Kc], !!c[N.g.X]) && ($q(fs, e), br(e), Zp(e)),
        (R(98) || R(125)) && Mn() !== 2 ? Yq(e) : Wq(e),
        fr(fs, e),
        gr(e));
      c[N.g.X] &&
        (dr(fs, c[N.g.X], c[N.g.Pb], !!c[N.g.Ab], e.prefix),
        er(c[N.g.X], c[N.g.Pb], !!c[N.g.Ab], e.prefix),
        $p(Sp(e.prefix), c[N.g.X], c[N.g.Pb], !!c[N.g.Ab], e),
        $p("FPAU", c[N.g.X], c[N.g.Pb], !!c[N.g.Ab], e));
      d && (R(87) ? ir(gs) : ir(hs));
      kr(hs);
    },
    is = function (a, b, c, d) {
      var e, f, g;
      e = a.Qk;
      f = a.callback;
      g = a.zk;
      if (typeof f === "function")
        if (e === N.g.ab && g === void 0) {
          var k = d(b.prefix, c);
          k.length === 0 ? f(void 0) : k.length === 1 ? f(k[0]) : f(k);
        } else e === N.g.vb ? (T(65), Rp(b, !1), f(Pp[Sp(b.prefix)])) : f(g);
    },
    fs = ["aw", "dc", "gb"],
    hs = ["aw", "dc", "gb", "ag"],
    gs = ["aw", "dc", "gb", "ag", "gad_source"];
  function js(a) {
    var b = U(a.m, N.g.Ob),
      c = U(a.m, N.g.kc);
    b && !c
      ? (a.eventName !== N.g.ba && a.eventName !== N.g.Xc && T(131),
        (a.isAborted = !0))
      : !b && c && (T(132), (a.isAborted = !0));
  }
  function ks(a) {
    var b = V(N.g.N) ? Ji.pscdl : "denied";
    b != null && (a.j[N.g.Gf] = b);
  }
  function ls(a) {
    var b = Mn(!0);
    a.j[N.g.Nb] = b;
  }
  function ms(a) {
    Ko() && (a.j[N.g.Ic] = 1);
  }
  function cs() {
    var a = E.title;
    if (a === void 0 || a === "") return "";
    var b = function (d) {
      try {
        return decodeURIComponent(d), !0;
      } catch (e) {
        return !1;
      }
    };
    a = encodeURIComponent(a);
    for (var c = 256; c > 0 && !b(a.substring(0, c)); ) c--;
    return decodeURIComponent(a.substring(0, c));
  }
  function ns(a) {
    os(a, "ce", U(a.m, N.g.Ra));
  }
  function os(a, b, c) {
    a.j[N.g.Ed] || (a.j[N.g.Ed] = {});
    a.j[N.g.Ed][b] = c;
  }
  var ps = function (a) {
      var b = a && a[N.g.Rg];
      return b && !!b[N.g.fj];
    },
    qs = function (a) {
      if (a)
        switch (a._tag_mode) {
          case "CODE":
            return "c";
          case "AUTO":
            return "a";
          case "MANUAL":
            return "m";
          default:
            return "c";
        }
    };
  var rs = function (a, b) {
      var c = a && !V([N.g.N, N.g.O]);
      return b && c ? "0" : b;
    },
    ts = function (a) {
      var b = a.sc === void 0 ? {} : a.sc,
        c = Gq(b.prefix);
      rr(c) &&
        El(
          function () {
            function d(x) {
              var y = V([N.g.N, N.g.O]),
                B = m && y,
                C = b.prefix || "_gcl",
                D;
              Ji.reported_gclid || (Ji.reported_gclid = {});
              D = Ji.reported_gclid;
              var H =
                (B ? C : "") +
                "." +
                (V(N.g.N) ? 1 : 0) +
                "." +
                (V(N.g.O) ? 1 : 0);
              if (!D[H]) {
                D[H] = !0;
                var J = {},
                  F = function (Y, Q) {
                    if (Q || typeof Q === "number") J[Y] = Q.toString();
                  },
                  S = "https://www.google.com";
                Ao() && (F("gcs", Bo()), x && F("gcu", 1));
                F("gcd", Fo(k));
                dj() && F("tag_exp", dj());
                if (bl()) {
                  F("rnd", Gr());
                  if ((!p || (q && q !== "aw.ds")) && y) {
                    var M = Cq(C + "_aw");
                    F("gclaw", M.join("."));
                  }
                  F("url", String(A.location).split(/[?#]/)[0]);
                  F("dclid", rs(f, r));
                  y || (S = "https://pagead2.googlesyndication.com");
                }
                Io() && F("dma_cps", Go());
                F("dma", Ho());
                F("npa", zo(k) ? 0 : 1);
                Ko() && F("_ng", 1);
                Wn(eo()) && F("tcfd", Jo());
                F("gdpr_consent", ko() || "");
                F("gdpr", lo() || "");
                Dp(!1)._up === "1" && F("gtm_up", 1);
                F("gclid", rs(f, p));
                F("gclsrc", q);
                if (
                  !(
                    J.hasOwnProperty("gclid") ||
                    J.hasOwnProperty("dclid") ||
                    J.hasOwnProperty("gclaw")
                  ) &&
                  (F("gbraid", rs(f, u)),
                  !J.hasOwnProperty("gbraid") && bl() && y)
                ) {
                  var Z = Cq(C + "_gb");
                  Z.length > 0 && F("gclgb", Z.join("."));
                }
                F(
                  "gtm",
                  No({ qa: k.eventMetadata.source_canonical_id, ig: !g })
                );
                m &&
                  V(N.g.N) &&
                  (Rp(b || {}), B && F("auid", Pp[Sp(b.prefix)] || ""));
                ss || (a.qk && F("did", a.qk));
                a.Sh && F("gdid", a.Sh);
                a.Ph && F("edid", a.Ph);
                a.Uh !== void 0 && F("frm", a.Uh);
                R(22) && F("apve", "0");
                var ca = Object.keys(J).map(function (Y) {
                    return Y + "=" + encodeURIComponent(J[Y]);
                  }),
                  da = S + "/pagead/landing?" + ca.join("&");
                xc(da);
              }
            }
            var e = !!a.Kh,
              f = !!a.Sd,
              g = a.targetId,
              k = a.m,
              m = a.pg === void 0 ? !0 : a.pg,
              n = Vq(),
              p = n.gclid || "",
              q = n.gclsrc,
              r = n.dclid || "",
              u = n.wbraid || "",
              v = !e && ((!p || (q && q !== "aw.ds") ? !1 : !0) || u),
              t = bl();
            if (v || t)
              if (t) {
                var w = [N.g.N, N.g.O, N.g.xa];
                d();
                (function () {
                  V(w) ||
                    Dl(function (x) {
                      d(!0, x.consentEventId, x.consentPriorityId);
                    }, w);
                })();
              } else d();
          },
          [N.g.N, N.g.O, N.g.xa]
        );
    },
    ss = !1;
  function us(a, b, c, d) {
    var e = nc(),
      f;
    if (e === 1)
      a: {
        var g = Vi;
        g = g.toLowerCase();
        for (
          var k = "https://" + g,
            m = "http://" + g,
            n = 1,
            p = E.getElementsByTagName("script"),
            q = 0;
          q < p.length && q < 100;
          q++
        ) {
          var r = p[q].src;
          if (r) {
            r = r.toLowerCase();
            if (r.indexOf(m) === 0) {
              f = 3;
              break a;
            }
            n === 1 && r.indexOf(k) === 0 && (n = 2);
          }
        }
        f = n;
      }
    else f = e;
    return (f === 2 || d || "http:" !== A.location.protocol ? a : b) + c;
  }
  function vs(a) {
    if (a !== void 0 && a !== null)
      return a === void 0 || a === null
        ? ""
        : typeof a === "object"
        ? a.toString()
        : String(a);
  }
  function ws(a) {
    return typeof a === "number" ? a : vs(a);
  }
  var Bs = function (a, b) {
      if (a)
        if (Lo()) {
        } else if ((a = z(a) ? Vl(rk(a)) : Vl(rk(a.id)))) {
          var c = void 0,
            d = !1,
            e = U(b, N.g.Aj);
          if (e && Array.isArray(e)) {
            c = [];
            for (var f = 0; f < e.length; f++) {
              var g = Vl(e[f]);
              g &&
                (c.push(g),
                (a.id === g.id ||
                  (a.id === a.destinationId &&
                    a.destinationId === g.destinationId)) &&
                  (d = !0));
            }
          }
          if (!c || d) {
            var k = U(b, N.g.lh),
              m;
            if (k) {
              Array.isArray(k) ? (m = k) : (m = [k]);
              var n = U(b, N.g.jh),
                p = U(b, N.g.kh),
                q = U(b, N.g.mh),
                r = vs(U(b, N.g.zj)),
                u = n || p,
                v = 1;
              a.prefix !== "UA" || c || (v = 5);
              for (var t = 0; t < m.length; t++)
                if (t < v)
                  if (c) xs(c, m[t], r, b, { Wb: u, options: q });
                  else if (a.prefix === "AW" && a.ids[Yl[2]])
                    R(137)
                      ? xs([a], m[t], r || "US", b, { Wb: u, options: q })
                      : ys(a.ids[Yl[1]], a.ids[Yl[2]], m[t], b, {
                          Wb: u,
                          options: q,
                        });
                  else if (a.prefix === "UA")
                    if (R(137)) xs([a], m[t], r || "US", b, { Wb: u });
                    else {
                      var w = a.destinationId,
                        x = m[t],
                        y = { Wb: u };
                      T(23);
                      if (x) {
                        y = y || {};
                        var B = zs(As, y, w),
                          C = {};
                        y.Wb !== void 0 ? (C.receiver = y.Wb) : (C.replace = x);
                        C.ga_wpid = w;
                        C.destination = x;
                        B(2, mb(), C);
                      }
                    }
            }
          }
        }
    },
    xs = function (a, b, c, d, e) {
      T(21);
      if (b && c) {
        e = e || {};
        for (
          var f = {
              countryNameCode: c,
              destinationNumber: b,
              retrievalTime: mb(),
            },
            g = 0;
          g < a.length;
          g++
        ) {
          var k = a[g];
          Cs[k.id] ||
            (k && k.prefix === "AW" && !f.adData && k.ids.length >= 2
              ? ((f.adData = { ak: k.ids[Yl[1]], cl: k.ids[Yl[2]] }),
                Ds(f.adData, d),
                (Cs[k.id] = !0))
              : k &&
                k.prefix === "UA" &&
                !f.gaData &&
                ((f.gaData = { gaWpid: k.destinationId }), (Cs[k.id] = !0)));
        }
        (f.gaData || f.adData) && zs(Es, e)(e.Wb, f, e.options);
      }
    },
    ys = function (a, b, c, d, e) {
      T(22);
      if (c) {
        e = e || {};
        var f = zs(Fs, e, a),
          g = { ak: a, cl: b };
        e.Wb === void 0 && (g.autoreplace = c);
        Ds(g, d);
        f(2, e.Wb, g, c, 0, mb(), e.options);
      }
    },
    Ds = function (a, b) {
      R(5) &&
        ((a.dma = Ho()),
        Io() && (a.dmaCps = Go()),
        zo(b) ? (a.npa = "0") : (a.npa = "1"));
    },
    zs = function (a, b, c) {
      if (A[a.functionName]) return b.hi && G(b.hi), A[a.functionName];
      var d = Gs();
      A[a.functionName] = d;
      if (a.additionalQueues)
        for (var e = 0; e < a.additionalQueues.length; e++)
          A[a.additionalQueues[e]] = A[a.additionalQueues[e]] || Gs();
      a.idKey && A[a.idKey] === void 0 && (A[a.idKey] = c);
      lc(us("https://", "http://", a.scriptUrl), b.hi, b.Xm);
      return d;
    },
    Gs = function () {
      function a() {
        a.q = a.q || [];
        a.q.push(arguments);
      }
      return a;
    },
    Fs = {
      functionName: "_googWcmImpl",
      idKey: "_googWcmAk",
      scriptUrl: "www.gstatic.com/wcm/loader.js",
    },
    As = {
      functionName: "_gaPhoneImpl",
      idKey: "ga_wpid",
      scriptUrl: "www.gstatic.com/gaphone/loader.js",
    },
    Hs = { Uk: "9", Jl: "5" },
    Es = {
      functionName: "_googCallTrackingImpl",
      additionalQueues: [As.functionName, Fs.functionName],
      scriptUrl:
        "www.gstatic.com/call-tracking/call-tracking_" +
        (Hs.Uk || Hs.Jl) +
        ".js",
    },
    Cs = {};
  function Is(a) {
    return {
      getDestinationId: function () {
        return a.target.destinationId;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.j[b];
      },
      setHitData: function (b, c) {
        a.j[b] = c;
      },
      setHitDataIfNotDefined: function (b, c) {
        a.j[b] === void 0 && (a.j[b] = c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c;
      },
      isAborted: function () {
        return a.isAborted;
      },
      abort: function () {
        a.isAborted = !0;
      },
      getFromEventContext: function (b) {
        return U(a.m, b);
      },
      Ub: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.j);
      },
    };
  }
  var Ks = function (a) {
      var b = Js[a.target.destinationId];
      if (!a.isAborted && b)
        for (var c = Is(a), d = 0; d < b.length; ++d) {
          try {
            b[d](c);
          } catch (e) {
            a.isAborted = !0;
          }
          if (a.isAborted) break;
        }
    },
    Ls = function (a, b) {
      var c = Js[a];
      c || (c = Js[a] = []);
      c.push(b);
    },
    Js = {};
  var Ns = function (a) {
      if (V(Ms)) {
        a = a || {};
        Rp(a, !1);
        var b = Qp[Sp(Gq(a.prefix))];
        if (b && !(nb() - b.bi * 1e3 > 18e5)) {
          var c = b.id,
            d = c.split(".");
          if (d.length === 2 && !(nb() - (Number(d[1]) || 0) * 1e3 > 864e5))
            return c;
        }
      }
    },
    Ms = N.g.N;
  var Os = function () {
    var a = (cc && cc.userAgent) || "";
    if (
      a.indexOf("Safari") < 0 ||
      /Chrome|Coast|Opera|Edg|Silk|Android/.test(a)
    )
      return !1;
    var b = (/Version\/([\d\.]+)/.exec(a) || [])[1] || "";
    if (b === "") return !1;
    for (var c = ["14", "1", "1"], d = b.split("."), e = 0; e < d.length; e++) {
      if (c[e] === void 0) return !0;
      if (d[e] !== c[e]) return Number(d[e]) > Number(c[e]);
    }
    return d.length >= c.length;
  };
  function Ps(a) {
    var b,
      c = A,
      d = [];
    try {
      c.navigation && c.navigation.entries && (d = c.navigation.entries());
    } catch (k) {}
    b = d;
    for (var e = b.length - 1; e >= 0; e--) {
      var f = b[e],
        g = f.url && f.url.match("[?&#]" + a + "=([^&#]+)");
      if (g && g.length === 2) return g[1];
    }
  }
  var Qs,
    Rs = !1;
  function Ss() {
    Rs = !0;
    (Qs = productSettings), (productSettings = void 0);
    Qs = Qs || {};
  }
  function Ts(a) {
    Rs || Ss();
    return Qs[a];
  }
  function Us() {
    var a = A.screen;
    return { width: a ? a.width : 0, height: a ? a.height : 0 };
  }
  function Vs(a) {
    if (E.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top === b.bottom || b.left === b.right || !A.getComputedStyle)
      return !0;
    var c = A.getComputedStyle(a, null);
    if (c.visibility === "hidden") return !0;
    for (var d = a, e = c; d; ) {
      if (e.display === "none") return !0;
      var f = e.opacity,
        g = e.filter;
      if (g) {
        var k = g.indexOf("opacity(");
        k >= 0 &&
          ((g = g.substring(k + 8, g.indexOf(")", k))),
          g.charAt(g.length - 1) === "%" && (g = g.substring(0, g.length - 1)),
          (f = String(Math.min(Number(g), Number(f)))));
      }
      if (f !== void 0 && Number(f) <= 0) return !0;
      (d = d.parentElement) && (e = A.getComputedStyle(d, null));
    }
    return !1;
  }
  var et = function (a) {
      return (
        a.tagName + ":" + a.isVisible + ":" + a.Z.length + ":" + dt.test(a.Z)
      );
    },
    st = function (a) {
      a = a || { Md: !0, Nd: !0, vg: void 0 };
      a.Db = a.Db || { email: !0, phone: !1, address: !1 };
      var b = ft(a),
        c = gt[b];
      if (c && nb() - c.timestamp < 200) return c.result;
      var d = ht(),
        e = d.status,
        f = [],
        g,
        k,
        m = [];
      if (!R(32)) {
        if (a.Db && a.Db.email) {
          var n = it(d.elements);
          f = jt(n, a && a.Te);
          g = kt(f);
          n.length > 10 && (e = "3");
        }
        !a.vg && g && (f = [g]);
        for (var p = 0; p < f.length; p++) m.push(lt(f[p], !!a.Md, !!a.Nd));
        m = m.slice(0, 10);
      } else if (a.Db) {
      }
      g && (k = lt(g, !!a.Md, !!a.Nd));
      var D = { elements: m, li: k, status: e };
      gt[b] = { timestamp: nb(), result: D };
      return D;
    },
    rt = function (a, b, c) {
      var d = a.element,
        e = { Z: a.Z, type: a.wa, tagName: d.tagName };
      b && (e.querySelector = tt(d));
      c && (e.isVisible = !Vs(d));
      return e;
    },
    lt = function (a, b, c) {
      return rt({ element: a.element, Z: a.Z, wa: qt.yc }, b, c);
    },
    ft = function (a) {
      var b = !(a == null || !a.Md) + "." + !(a == null || !a.Nd);
      a && a.Te && a.Te.length && (b += "." + a.Te.join("."));
      a &&
        a.Db &&
        (b += "." + a.Db.email + "." + a.Db.phone + "." + a.Db.address);
      return b;
    },
    kt = function (a) {
      if (a.length !== 0) {
        var b;
        b = ut(a, function (c) {
          return !vt.test(c.Z);
        });
        b = ut(b, function (c) {
          return c.element.tagName.toUpperCase() === "INPUT";
        });
        b = ut(b, function (c) {
          return !Vs(c.element);
        });
        return b[0];
      }
    },
    jt = function (a, b) {
      if (!b || b.length === 0) return a;
      for (var c = [], d = 0; d < a.length; d++) {
        for (var e = !0, f = 0; f < b.length; f++) {
          var g = b[f];
          if (g && Oh(a[d].element, g)) {
            e = !1;
            break;
          }
        }
        e && c.push(a[d]);
      }
      return c;
    },
    ut = function (a, b) {
      if (a.length <= 1) return a;
      var c = a.filter(b);
      return c.length === 0 ? a : c;
    },
    tt = function (a) {
      var b;
      if (a === E.body) b = "body";
      else {
        var c;
        if (a.id) c = "#" + a.id;
        else {
          var d;
          if (a.parentElement) {
            var e;
            a: {
              var f = a.parentElement;
              if (f) {
                for (var g = 0; g < f.childElementCount; g++)
                  if (f.children[g] === a) {
                    e = g + 1;
                    break a;
                  }
                e = -1;
              } else e = 1;
            }
            d = tt(a.parentElement) + ">:nth-child(" + e.toString() + ")";
          } else d = "";
          c = d;
        }
        b = c;
      }
      return b;
    },
    it = function (a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = d.textContent;
        d.tagName.toUpperCase() === "INPUT" && d.value && (e = d.value);
        if (e) {
          var f = e.match(wt);
          if (f) {
            var g = f[0],
              k;
            if (A.location) {
              var m = Aj(A.location, "host", !0);
              k = g.toLowerCase().indexOf(m) >= 0;
            } else k = !1;
            k || b.push({ element: d, Z: g });
          }
        }
      }
      return b;
    },
    ht = function () {
      var a = [],
        b = E.body;
      if (!b) return { elements: a, status: "4" };
      for (
        var c = b.querySelectorAll("*"), d = 0;
        d < c.length && d < 1e4;
        d++
      ) {
        var e = c[d];
        if (
          !(xt.indexOf(e.tagName.toUpperCase()) >= 0) &&
          e.children instanceof HTMLCollection
        ) {
          for (var f = !1, g = 0; g < e.childElementCount && g < 1e4; g++)
            if (!(zt.indexOf(e.children[g].tagName.toUpperCase()) >= 0)) {
              f = !0;
              break;
            }
          (!f || (R(32) && At.indexOf(e.tagName) !== -1)) && a.push(e);
        }
      }
      return { elements: a, status: c.length > 1e4 ? "2" : "1" };
    },
    Bt = !1;
  var wt = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
    dt = /@(gmail|googlemail)\./i,
    vt = /support|noreply/i,
    xt = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
    zt = ["BR"],
    qt = { yc: "1", Ie: "2", De: "3", Fe: "4", Ag: "5", yh: "6", hg: "7" },
    gt = {},
    At = ["INPUT", "SELECT"];
  var If;
  var Wt = Number("") || 5,
    Xt = Number("") || 50,
    Yt = cb();
  var $t = function (a, b) {
      a &&
        (Zt("sid", a.targetId, b),
        Zt("cc", a.clientCount, b),
        Zt("tl", a.totalLifeMs, b),
        Zt("hc", a.heartbeatCount, b),
        Zt("cl", a.clientLifeMs, b));
    },
    Zt = function (a, b, c) {
      b != null && c.push(a + "=" + b);
    },
    au = function () {
      var a = E.referrer;
      if (a) {
        var b;
        return yj(Ej(a), "host") ===
          ((b = A.location) == null ? void 0 : b.host)
          ? 1
          : 2;
      }
      return 0;
    },
    bu = function (a) {
      this.P = a;
      this.H = 0;
    };
  bu.prototype.C = function (a, b, c, d) {
    var e = au(),
      f,
      g = [];
    f =
      A === A.top && e !== 0 && b
        ? (b == null ? void 0 : b.clientCount) > 1
          ? e === 2
            ? 1
            : 2
          : e === 2
          ? 0
          : 3
        : 4;
    a && Zt("si", a.ff, g);
    Zt("m", 0, g);
    Zt("iss", f, g);
    Zt("if", c, g);
    $t(b, g);
    d && Zt("fm", encodeURIComponent(d.substring(0, Xt)), g);
    this.K(g);
  };
  bu.prototype.j = function (a, b, c, d, e) {
    var f = [];
    Zt("m", 1, f);
    Zt("s", a, f);
    Zt("po", au(), f);
    b && (Zt("st", b.state, f), Zt("si", b.ff, f), Zt("sm", b.wf, f));
    $t(c, f);
    Zt("c", d, f);
    e && Zt("fm", encodeURIComponent(e.substring(0, Xt)), f);
    this.K(f);
  };
  bu.prototype.K = function (a) {
    a = a === void 0 ? [] : a;
    !Sj ||
      this.H >= Wt ||
      (Zt("pid", Yt, a),
      Zt("bc", ++this.H, a),
      a.unshift("ctid=" + Mf.ctid + "&t=s"),
      this.P("https://www.googletagmanager.com/a?" + a.join("&")));
  };
  var cu = {
    Ml: Number("") || 500,
    zl: Number("") || 5e3,
    Sj: Number("20") || 10,
    Xk: Number("") || 5e3,
  };
  function du(a) {
    return (a.performance && a.performance.now()) || Date.now();
  }
  var eu = function (a, b) {
    var c;
    var d = function (e, f, g) {
      g = g === void 0 ? {} : g;
      this.Nl = e;
      this.j = f;
      this.H = g;
      this.aa = this.Ta = this.heartbeatCount = this.Ll = 0;
      this.Tj = !1;
      this.C = {};
      this.id = String(Math.floor(Number.MAX_SAFE_INTEGER * Math.random()));
      this.state = 0;
      this.ff = du(this.j);
      this.wf = du(this.j);
      this.P = 10;
    };
    d.prototype.init = function () {
      this.K(1);
      this.Lc();
    };
    d.prototype.getState = function () {
      return {
        state: this.state,
        ff: Math.round(du(this.j) - this.ff),
        wf: Math.round(du(this.j) - this.wf),
      };
    };
    d.prototype.K = function (e) {
      this.state !== e && ((this.state = e), (this.wf = du(this.j)));
    };
    d.prototype.Wj = function () {
      return String(this.Ll++);
    };
    d.prototype.Lc = function () {
      var e = this;
      this.heartbeatCount++;
      this.Ee(
        {
          type: 0,
          clientId: this.id,
          requestId: this.Wj(),
          maxDelay: this.Uj(),
        },
        function (f) {
          if (f.type === 0) {
            var g;
            if (((g = f.failure) == null ? void 0 : g.failureType) != null)
              if (
                (f.stats && (e.stats = f.stats),
                e.aa++,
                f.isDead || e.aa > cu.Sj)
              ) {
                var k = f.isDead && f.failure.failureType;
                e.P = k || 10;
                e.K(4);
                e.Kl();
                var m, n;
                (n = (m = e.H).Vm) == null ||
                  n.call(m, { failureType: k, data: f.failure.data });
              } else e.K(3), e.Yj();
            else {
              if (e.heartbeatCount > f.stats.heartbeatCount + cu.Sj) {
                e.heartbeatCount = f.stats.heartbeatCount;
                var p, q;
                (q = (p = e.H).onFailure) == null ||
                  q.call(p, { failureType: 13 });
              }
              e.stats = f.stats;
              var r = e.state;
              e.K(2);
              if (r !== 2)
                if (e.Tj) {
                  var u, v;
                  (v = (u = e.H).po) == null || v.call(u);
                } else {
                  e.Tj = !0;
                  var t, w;
                  (w = (t = e.H).Wm) == null || w.call(t);
                }
              e.aa = 0;
              e.Ol();
              e.Yj();
            }
          }
        }
      );
    };
    d.prototype.Uj = function () {
      return this.state === 2 ? cu.zl : cu.Ml;
    };
    d.prototype.Yj = function () {
      var e = this;
      this.j.setTimeout(function () {
        e.Lc();
      }, Math.max(0, this.Uj() - (du(this.j) - this.Ta)));
    };
    d.prototype.Rl = function (e, f, g) {
      var k = this;
      this.Ee(
        { type: 1, clientId: this.id, requestId: this.Wj(), command: e },
        function (m) {
          if (m.type === 1)
            if (m.result) f(m.result);
            else {
              var n,
                p,
                q,
                r = {
                  failureType:
                    (q = (n = m.failure) == null ? void 0 : n.failureType) !=
                    null
                      ? q
                      : 12,
                  data: (p = m.failure) == null ? void 0 : p.data,
                },
                u,
                v;
              (v = (u = k.H).onFailure) == null || v.call(u, r);
              g(r);
            }
        }
      );
    };
    d.prototype.Ee = function (e, f) {
      var g = this;
      if (this.state === 4) (e.failure = { failureType: this.P }), f(e);
      else {
        var k = this.state !== 2 && e.type !== 0,
          m = e.requestId,
          n,
          p = this.j.setTimeout(
            function () {
              var r = g.C[m];
              r && g.Rj(r, 7);
            },
            (n = e.maxDelay) != null ? n : cu.Xk
          ),
          q = { request: e, Jk: f, Fk: k, Sm: p };
        this.C[m] = q;
        k || this.sendRequest(q);
      }
    };
    d.prototype.sendRequest = function (e) {
      this.Ta = du(this.j);
      e.Fk = !1;
      this.Nl(e.request);
    };
    d.prototype.Ol = function () {
      for (
        var e = l(Object.keys(this.C)), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = this.C[f.value];
        g.Fk && this.sendRequest(g);
      }
    };
    d.prototype.Kl = function () {
      for (var e = l(Object.keys(this.C)), f = e.next(); !f.done; f = e.next())
        this.Rj(this.C[f.value], this.P);
    };
    d.prototype.Rj = function (e, f) {
      this.gg(e);
      var g = e.request;
      g.failure = { failureType: f };
      e.Jk(g);
    };
    d.prototype.gg = function (e) {
      delete this.C[e.request.requestId];
      this.j.clearTimeout(e.Sm);
    };
    d.prototype.zm = function (e) {
      this.Ta = du(this.j);
      var f = this.C[e.requestId];
      if (f) this.gg(f), f.Jk(e);
      else {
        var g, k;
        (k = (g = this.H).onFailure) == null || k.call(g, { failureType: 14 });
      }
    };
    c = new d(a, A, b);
    return c;
  };
  var fu;
  var gu = function () {
      fu ||
        (fu = new bu(function (a) {
          return void qc(a);
        }));
      return fu;
    },
    hu = function (a) {
      var b = "&1p=1";
      if (!R(115)) return b;
      var c = a.substring(0, a.indexOf("/_/service_worker"));
      return (b += c ? "&path=" + encodeURIComponent(c) : "");
    },
    ju = function (a) {
      a = iu(a);
      var b;
      try {
        b = new URL(a);
      } catch (c) {
        return null;
      }
      return b.protocol !== "https:" ? null : b;
    },
    ku = function (a) {
      var b = Ol(Jl.ek);
      return b && b[a];
    },
    iu = function (a) {
      var b = cj.K;
      if (!a)
        return (
          "https://www.googletagmanager.com/static/service_worker/" + b + "/"
        );
      if (!R(115)) return a;
      a.charAt(a.length - 1) !== "/" && (a += "/");
      return a + b;
    },
    lu = function (a, b, c, d, e) {
      var f = this;
      this.C = d;
      this.P = this.K = !1;
      this.aa = null;
      this.initTime = c;
      this.j = 15;
      this.H = this.Yl(a);
      A.setTimeout(function () {
        f.initialize();
      }, 1e3);
      G(function () {
        f.Im(a, b, e);
      });
    };
  h = lu.prototype;
  h.delegate = function (a, b, c) {
    this.getState() !== 2
      ? (this.C.j(
          this.j,
          {
            state: this.getState(),
            ff: this.initTime,
            wf: Math.round(nb()) - this.initTime,
          },
          void 0,
          a.commandType
        ),
        c({ failureType: this.j }))
      : this.H.Rl(a, b, c);
  };
  h.getState = function () {
    return this.H.getState().state;
  };
  h.Im = function (a, b, c) {
    var d = A.location.origin,
      e = this,
      f = oc();
    try {
      var g = f.contentDocument.createElement("iframe"),
        k = a.pathname,
        m = k[k.length - 1] === "/" ? a.toString() : a.toString() + "/",
        n = b ? hu(k) : "",
        p;
      R(117) && (p = { sandbox: "allow-same-origin allow-scripts" });
      oc(
        m +
          "sw_iframe.html?origin=" +
          encodeURIComponent(d) +
          n +
          (c ? "&e=1" : ""),
        void 0,
        p,
        void 0,
        g
      );
      var q = function () {
        f.contentDocument.body.appendChild(g);
        g.addEventListener("load", function () {
          e.aa = g.contentWindow;
          f.contentWindow.addEventListener("message", function (r) {
            r.origin === a.origin && e.H.zm(r.data);
          });
          e.initialize();
        });
      };
      f.contentDocument.readyState === "complete"
        ? q()
        : f.contentWindow.addEventListener("load", function () {
            q();
          });
    } catch (r) {
      f.parentElement.removeChild(f),
        (this.j = 11),
        this.C.C(void 0, void 0, this.j, r.toString());
    }
  };
  h.Yl = function (a) {
    var b = this,
      c = eu(
        function (d) {
          var e;
          (e = b.aa) == null || e.postMessage(d, a.origin);
        },
        {
          Wm: function () {
            b.K = !0;
            b.C.C(c.getState(), c.stats);
          },
          Vm: function (d) {
            b.K
              ? ((b.j = (d == null ? void 0 : d.failureType) || 10),
                b.C.j(
                  b.j,
                  c.getState(),
                  c.stats,
                  void 0,
                  d == null ? void 0 : d.data
                ))
              : ((b.j = (d == null ? void 0 : d.failureType) || 4),
                b.C.C(c.getState(), c.stats, b.j, d == null ? void 0 : d.data));
          },
          onFailure: function (d) {
            b.j = d.failureType;
            b.C.j(b.j, c.getState(), c.stats, d.command, d.data);
          },
        }
      );
    return c;
  };
  h.initialize = function () {
    this.P || this.H.init();
    this.P = !0;
  };
  function mu() {
    var a = Lf(If.j, "", function () {
      return {};
    });
    try {
      return a("internal_sw_allowed"), !0;
    } catch (b) {
      return !1;
    }
  }
  function nu(a, b, c) {
    c = c === void 0 ? !1 : c;
    var d = A.location.origin;
    if (!d || !mu()) return;
    fj() && ((a = "" + d + ej() + "/_"), R(115) && (a += "/service_worker"));
    var e = ju(a);
    if (e === null || ku(e.origin)) return;
    if (!dc()) {
      gu().C(void 0, void 0, 6);
      return;
    }
    var f = new lu(e, !!a, b || Math.round(nb()), gu(), c),
      g;
    a: {
      var k = Jl.ek,
        m = {},
        n = Ml(k);
      if (!n) {
        n = Ml(k, !0);
        if (!n) {
          g = void 0;
          break a;
        }
        n.set(m);
      }
      g = n.get();
    }
    g[e.origin] = f;
  }
  var ou = function (a, b, c, d) {
    var e;
    if ((e = ku(a)) == null || !e.delegate) {
      var f = dc() ? 16 : 6;
      gu().j(f, void 0, void 0, b.commandType);
      d({ failureType: f });
      return;
    }
    ku(a).delegate(b, c, d);
  };
  function pu(a, b, c, d, e) {
    var f = ju();
    if (f === null) {
      d(dc() ? 16 : 6);
      return;
    }
    var g,
      k = (g = ku(f.origin)) == null ? void 0 : g.initTime,
      m = Math.round(nb()),
      n = {
        commandType: 0,
        params: {
          url: a,
          method: 0,
          templates: b,
          body: "",
          processResponse: !1,
          sinceInit: k ? m - k : void 0,
        },
      };
    e && (n.params.encryptionKeyString = e);
    ou(
      f.origin,
      n,
      function (p) {
        c(p);
      },
      function (p) {
        d(p.failureType);
      }
    );
  }
  function qu(a, b, c, d) {
    var e = ju(a);
    if (e === null) {
      d("_is_sw=f" + (dc() ? 16 : 6) + "te");
      return;
    }
    var f = b ? 1 : 0,
      g = Math.round(nb()),
      k,
      m = (k = ku(e.origin)) == null ? void 0 : k.initTime,
      n = m ? g - m : void 0;
    ou(
      e.origin,
      {
        commandType: 0,
        params: {
          url: a,
          method: f,
          templates: c,
          body: b || "",
          processResponse: !0,
          sinceInit: n,
          attributionReporting: !0,
        },
      },
      function () {},
      function (p) {
        var q = "_is_sw=f" + p.failureType,
          r,
          u = (r = ku(e.origin)) == null ? void 0 : r.getState();
        u !== void 0 && (q += "s" + u);
        d(n ? q + ("t" + n) : q + "te");
      }
    );
  }
  var ru = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      e < 128
        ? (b[c++] = e)
        : (e < 2048
            ? (b[c++] = (e >> 6) | 192)
            : ((e & 64512) == 55296 &&
              d + 1 < a.length &&
              (a.charCodeAt(d + 1) & 64512) == 56320
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  };
  zn();
  In() || wn("iPod");
  wn("iPad");
  !wn("Android") || An() || zn() || yn() || wn("Silk");
  An();
  !wn("Safari") ||
    An() ||
    (xn() ? 0 : wn("Coast")) ||
    yn() ||
    (xn() ? 0 : wn("Edge")) ||
    (xn() ? vn("Microsoft Edge") : wn("Edg/")) ||
    (xn() ? vn("Opera") : wn("OPR")) ||
    zn() ||
    wn("Silk") ||
    wn("Android") ||
    Jn();
  var su = {},
    tu = null,
    uu = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        e > 255 && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      f === void 0 && (f = 0);
      if (!tu) {
        tu = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            k = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          m < 5;
          m++
        ) {
          var n = g.concat(k[m].split(""));
          su[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            tu[q] === void 0 && (tu[q] = p);
          }
        }
      }
      for (
        var r = su[f],
          u = Array(Math.floor(b.length / 3)),
          v = r[64] || "",
          t = 0,
          w = 0;
        t < b.length - 2;
        t += 3
      ) {
        var x = b[t],
          y = b[t + 1],
          B = b[t + 2],
          C = r[x >> 2],
          D = r[((x & 3) << 4) | (y >> 4)],
          H = r[((y & 15) << 2) | (B >> 6)],
          J = r[B & 63];
        u[w++] = "" + C + D + H + J;
      }
      var F = 0,
        S = v;
      switch (b.length - t) {
        case 2:
          (F = b[t + 1]), (S = r[(F & 15) << 2] || v);
        case 1:
          var M = b[t];
          u[w] = "" + r[M >> 2] + r[((M & 3) << 4) | (F >> 4)] + S + v;
      }
      return u.join("");
    };
  var vu =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function wu(a) {
    var b;
    return (b = a.google_tag_data) != null ? b : (a.google_tag_data = {});
  }
  function xu() {
    var a = A.google_tag_data,
      b;
    if (a != null && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function yu() {
    var a, b;
    return (b = (a = A.google_tag_data) == null ? void 0 : a.uach_promise) !=
      null
      ? b
      : null;
  }
  function zu(a) {
    var b, c;
    return (
      typeof ((b = a.navigator) == null
        ? void 0
        : (c = b.userAgentData) == null
        ? void 0
        : c.getHighEntropyValues) === "function"
    );
  }
  function Au() {
    var a = A;
    if (!zu(a)) return null;
    var b = wu(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData
      .getHighEntropyValues(vu)
      .then(function (d) {
        b.uach != null || (b.uach = d);
        return d;
      });
    return (b.uach_promise = c);
  }
  var Cu = function (a, b) {
      if (a) {
        var c = Bu(a);
        Object.assign(b.j, c);
      }
    },
    Bu = function (a) {
      var b = {};
      b[N.g.Wf] = a.architecture;
      b[N.g.Xf] = a.bitness;
      a.fullVersionList &&
        (b[N.g.Yf] = a.fullVersionList
          .map(function (c) {
            return (
              encodeURIComponent(c.brand || "") +
              ";" +
              encodeURIComponent(c.version || "")
            );
          })
          .join("|"));
      b[N.g.Zf] = a.mobile ? "1" : "0";
      b[N.g.cg] = a.model;
      b[N.g.dg] = a.platform;
      b[N.g.eg] = a.platformVersion;
      b[N.g.fg] = a.wow64 ? "1" : "0";
      return b;
    },
    Eu = function (a) {
      var b = Du.Bn,
        c = function (g, k) {
          try {
            a(g, k);
          } catch (m) {}
        },
        d = xu();
      if (d) c(d);
      else {
        var e = yu();
        if (e) {
          b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1e3);
          var f = A.setTimeout(function () {
            c.hf || ((c.hf = !0), T(106), c(null, Error("Timeout")));
          }, b);
          e.then(function (g) {
            c.hf || ((c.hf = !0), T(104), A.clearTimeout(f), c(g));
          }).catch(function (g) {
            c.hf || ((c.hf = !0), T(105), A.clearTimeout(f), c(null, g));
          });
        } else c(null);
      }
    },
    Gu = function () {
      if (zu(A) && ((Fu = nb()), !yu())) {
        var a = Au();
        a &&
          (a.then(function () {
            T(95);
          }),
          a.catch(function () {
            T(96);
          }));
      }
    },
    Fu;
  function Hu(a) {
    var b;
    b = b === void 0 ? document : b;
    var c;
    return !((c = b.featurePolicy) == null || !c.allowedFeatures().includes(a));
  }
  function Iu() {
    return Hu("join-ad-interest-group") && Za(cc.joinAdInterestGroup);
  }
  function Ju(a, b) {
    var c = Xh[3] === void 0 ? 1 : Xh[3],
      d = 'iframe[data-tagging-id="' + b + '"]',
      e = [];
    try {
      if (c === 1) {
        var f = E.querySelector(d);
        f && (e = [f]);
      } else e = Array.from(E.querySelectorAll(d));
    } catch (q) {}
    var g;
    a: {
      try {
        g = E.querySelectorAll(
          'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
        );
        break a;
      } catch (q) {}
      g = void 0;
    }
    var k = g,
      m =
        ((k == null ? void 0 : k.length) || 0) >=
        (Xh[2] === void 0 ? 50 : Xh[2]),
      n;
    if ((n = e.length >= 1)) {
      var p = Number(e[e.length - 1].dataset.loadTime);
      p !== void 0 && nb() - p < (Xh[1] === void 0 ? 6e4 : Xh[1])
        ? (Va("TAGGING", 9), (n = !0))
        : (n = !1);
    }
    if (!n) {
      if (c === 1)
        if (e.length >= 1) Ku(e[0]);
        else {
          if (m) {
            Va("TAGGING", 10);
            return;
          }
        }
      else e.length >= c ? Ku(e[0]) : m && Ku(k[0]);
      oc(
        a,
        void 0,
        { allow: "join-ad-interest-group" },
        { taggingId: b, loadTime: nb() }
      );
    }
  }
  function Ku(a) {
    try {
      a.parentNode.removeChild(a);
    } catch (b) {}
  }
  function Lu() {
    return "https://td.doubleclick.net";
  }
  function Mu(a) {
    var b = a.location.href;
    if (a === a.top) return { url: b, Nm: !0 };
    var c = !1,
      d = a.document;
    d && d.referrer && ((b = d.referrer), a.parent === a.top && (c = !0));
    var e = a.location.ancestorOrigins;
    if (e) {
      var f = e[e.length - 1];
      f && b.indexOf(f) === -1 && ((c = !1), (b = f));
    }
    return { url: b, Nm: c };
  }
  var Nu = function () {
      return [N.g.N, N.g.O];
    },
    Pu = function (a) {
      R(23) &&
      a.eventName === N.g.ba &&
      Ou(a, "page_view") &&
      !a.metadata.consent_updated &&
      !a.m.isGtmEvent
        ? Bs(a.target, a.m)
        : Ou(a, "call_conversion") && (Bs(a.target, a.m), (a.isAborted = !0));
    },
    Ru = function (a) {
      var b;
      if (a.eventName !== "gtag.config" && a.metadata.send_user_data_hit)
        switch (a.metadata.hit_type) {
          case "user_data_web":
            b = 97;
            Qu(a);
            break;
          case "user_data_lead":
            b = 98;
            Qu(a);
            break;
          case "conversion":
            b = 99;
        }
      !a.metadata.speculative && b && T(b);
      a.metadata.speculative === !0 && (a.isAborted = !0);
    },
    Su = function (a) {
      if (!a.metadata.consent_updated && R(29) && Ou(a, ["conversion"])) {
        var b = Kr();
        Jr(b) && ((a.j[N.g.ud] = "1"), (a.metadata.add_tag_timing = !0));
      }
    },
    Tu = function (a) {
      Ou(a, ["conversion"]) &&
        a.m.eventMetadata.is_external_event &&
        (a.j[N.g.Oj] = !0);
    },
    Uu = function (a) {
      var b = V(Nu());
      switch (a.metadata.hit_type) {
        case "user_data_lead":
        case "user_data_web":
          a.isAborted = !b || !!a.metadata.consent_updated;
          break;
        case "remarketing":
          a.isAborted = !b;
          break;
        case "conversion":
          a.metadata.consent_updated && (a.j[N.g.Zb] = !0);
      }
    },
    Vu = function (a) {
      if (Ou(a, ["conversion"])) {
        var b = Ns(a.metadata.cookie_options);
        if (b && !a.j[N.g.Ba]) {
          var c = hp(a.j[N.g.jb]);
          a.j[N.g.Ba] = c;
        }
        b && ((a.j[N.g.Bb] = b), (a.metadata.send_ccm_parallel_ping = !0));
      }
    },
    Wu = function (a) {
      if (Ou(a, ["conversion", "user_data_web"])) {
        var b;
        if (
          !(
            R(61) ||
            R(62) ||
            R(63) ||
            R(64) ||
            R(65) ||
            R(66) ||
            R(67) ||
            R(68) ||
            R(69)
          ) ||
          (Ou(a, ["user_data_web"]) &&
            !a.metadata.speculative_ecw_stitching_ping)
        )
          b = !1;
        else {
          var c = a.metadata.user_data;
          b = !c || Object.keys(c).length > 0 ? !1 : !0;
        }
        if (b) {
          a.metadata.fake_user_data = {
            email: "test@example.com",
            ro: "+1234567890",
            ko: "Fake",
            oo: "Name",
            mo: {
              vo: "123 Fake St",
              city: "Non-Applicable",
              state: "Somewhere",
              country: "US",
              so: "12345",
            },
          };
          var d = Ou(a, ["user_data_web"]);
          R(61)
            ? (a.metadata.split_experiment_arm = 1)
            : R(62)
            ? (a.metadata.split_experiment_arm = 2)
            : R(63)
            ? ((a.metadata.split_experiment_arm = 3), d && Qu(a))
            : R(64)
            ? ((a.metadata.split_experiment_arm = 4), d && Qu(a))
            : R(65)
            ? ((a.metadata.split_experiment_arm = 5), d && Qu(a))
            : R(66)
            ? ((a.metadata.split_experiment_arm = 6), d && Qu(a))
            : R(67)
            ? ((a.metadata.split_experiment_arm = 7), d && Qu(a))
            : R(68)
            ? (a.metadata.split_experiment_arm = 8)
            : R(69) && (a.metadata.split_experiment_arm = 9);
        } else a.metadata.speculative_ecw_stitching_ping && (a.isAborted = !0);
      }
    },
    Xu = function (a) {
      R(61) ||
        R(62) ||
        R(63) ||
        R(64) ||
        R(65) ||
        R(68) ||
        R(69) ||
        fj() ||
        Ri ||
        Kj(a.m) ||
        ((R(114) || R(60)) && nu(void 0, Math.round(nb()), R(113)));
    },
    Yu = function (a) {
      if (
        Ou(a, [
          "conversion",
          "remarketing",
          "user_data_lead",
          "user_data_web",
        ]) &&
        a.metadata.conversion_linker_enabled &&
        V(N.g.N)
      ) {
        var b = !R(3);
        if (a.metadata.hit_type !== "remarketing" || b) {
          var c = a.metadata.cookie_options;
          Rp(c, a.metadata.hit_type === "conversion" && a.eventName !== N.g.Za);
          V(N.g.O) && (a.j[N.g.vb] = Pp[Sp(c.prefix)]);
        }
      }
    },
    $u = function (a) {
      Ou(a, ["conversion", "user_data_lead", "user_data_web"]) && Zu(a);
    },
    av = function (a) {
      Ou(a, ["conversion"]) &&
        (a.metadata.redact_click_ids =
          !!a.metadata.redact_ads_data && !V(Nu()));
    },
    bv = function (a) {
      Ou(a, ["conversion"]) && Dp(!1)._up === "1" && (a.j[N.g.we] = !0);
    },
    cv = function (a) {
      if (Ou(a, ["conversion", "remarketing"])) {
        var b = $r();
        b !== void 0 && (a.j[N.g.Dd] = b || "error");
        var c = lo();
        c && (a.j[N.g.jc] = c);
        var d = ko();
        d && (a.j[N.g.nc] = d);
      }
    },
    dv = function (a) {
      if (Ou(a, ["conversion", "remarketing"]) && A.__gsaExp && A.__gsaExp.id) {
        var b = A.__gsaExp.id;
        if (Za(b))
          try {
            var c = Number(b());
            isNaN(c) || (a.j[N.g.eh] = c);
          } catch (d) {}
      }
    },
    ev = function (a) {
      Ks(a);
    },
    fv = function (a) {
      R(45) &&
        Ou(a, "conversion") &&
        (a.copyToHitData(N.g.Kg),
        a.copyToHitData(N.g.Lg),
        a.copyToHitData(N.g.Jg));
    },
    gv = function (a) {
      Ou(a, "conversion") &&
        (a.copyToHitData(N.g.vd),
        a.copyToHitData(N.g.ie),
        a.copyToHitData(N.g.Bd),
        a.copyToHitData(N.g.pe),
        a.copyToHitData(N.g.Ec),
        a.copyToHitData(N.g.pd));
    },
    hv = function (a) {
      if (
        Ou(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])
      ) {
        var b = a.m;
        if (Ou(a, ["conversion", "remarketing"])) {
          var c = U(b, N.g.Qb);
          if (c === !0 || c === !1) a.j[N.g.Qb] = c;
        }
        zo(b)
          ? (a.j[N.g.Tb] = !1)
          : ((a.j[N.g.Tb] = !0), Ou(a, "remarketing") && (a.isAborted = !0));
      }
    },
    iv = function (a) {
      if (Ou(a, ["conversion", "remarketing"])) {
        var b = a.metadata.hit_type === "conversion";
        (b && a.eventName !== N.g.Ka) ||
          (a.copyToHitData(N.g.da),
          b &&
            (a.copyToHitData(N.g.he),
            a.copyToHitData(N.g.ee),
            a.copyToHitData(N.g.fe),
            a.copyToHitData(N.g.de),
            (a.j[N.g.Hg] = a.eventName),
            R(100) &&
              (a.copyToHitData(N.g.Pf),
              a.copyToHitData(N.g.Nf),
              a.copyToHitData(N.g.Of))));
      }
    },
    jv = function (a) {
      var b = R(7),
        c = a.m,
        d,
        e,
        f;
      if (!b) {
        var g = pm(c, N.g.fa);
        d = xb(Qc(g) ? g : {});
      }
      var k = pm(c, N.g.fa, 1),
        m = pm(c, N.g.fa, 2);
      e = xb(Qc(k) ? k : {}, ".");
      f = xb(Qc(m) ? m : {}, ".");
      b || (a.j[N.g.xe] = d);
      a.j[N.g.lb] = e;
      a.j[N.g.kb] = f;
    },
    kv = function (a) {
      if (a != null) {
        var b = String(a).substring(0, 512),
          c = b.indexOf("#");
        return c === -1 ? b : b.substring(0, c);
      }
      return "";
    },
    lv = function (a) {
      if (Ou(a, "conversion") && V(N.g.N) && (a.j[N.g.ub] || a.j[N.g.Hc])) {
        var b = a.j[N.g.jb],
          c = Rc(a.metadata.cookie_options, null),
          d = Gq(c.prefix);
        c.prefix = d === "_gcl" ? "" : d;
        if (a.j[N.g.ub]) {
          var e = Zr(b, c, !a.metadata.gbraid_cookie_marked);
          a.metadata.gbraid_cookie_marked = !0;
          e && (a.j[N.g.uh] = e);
        }
        if (a.j[N.g.Hc]) {
          var f = Rr(b, c).km;
          f && (a.j[N.g.Xg] = f);
        }
      }
    },
    mv = function (a) {
      if (a.eventName === N.g.Za && !a.m.isGtmEvent) {
        if (!a.metadata.consent_updated && Ou(a, "conversion")) {
          var b = U(a.m, N.g.Mb);
          if (typeof b !== "function") return;
          var c = String(U(a.m, N.g.zb)),
            d = a.j[c],
            e = U(a.m, c);
          c === N.g.ab || c === N.g.vb
            ? is(
                { Qk: c, callback: b, zk: e },
                a.metadata.cookie_options,
                a.metadata.redact_ads_data,
                Fr
              )
            : b(d || e);
        }
        a.isAborted = !0;
      }
    },
    nv = function (a) {
      if (
        !Rt(a, "hasPreAutoPiiCcdRule", !1) &&
        Ou(a, "conversion") &&
        V(N.g.N)
      ) {
        var b = (U(a.m, N.g.oe) || {})[String(a.j[N.g.jb])],
          c = a.j[N.g.ld],
          d;
        if (!(d = ps(b)))
          if (sl())
            if (Bt) d = !0;
            else {
              var e = Ts("AW-" + c);
              d = !!e && !!e.preAutoPii;
            }
          else d = !1;
        if (d) {
          var f = nb(),
            g = st({ Md: !0, Nd: !0, vg: !0 });
          if (g.elements.length !== 0) {
            for (var k = [], m = 0; m < g.elements.length; ++m) {
              var n = g.elements[m];
              k.push(n.querySelector + "*" + et(n) + "*" + n.type);
            }
            a.j[N.g.rh] = k.join("~");
            var p = g.li;
            p && ((a.j[N.g.sh] = p.querySelector), (a.j[N.g.qh] = et(p)));
            a.j[N.g.ph] = String(nb() - f);
            a.j[N.g.th] = g.status;
          }
        }
      }
    },
    ov = function (a) {
      if (
        a.eventName === N.g.ba &&
        !a.metadata.consent_updated &&
        ((a.metadata.is_config_command = !0),
        Ou(a, "conversion") && (a.metadata.speculative = !0),
        !Ou(a, "remarketing") ||
          (U(a.m, N.g.fc) !== !1 && U(a.m, N.g.Ma) !== !1) ||
          (a.metadata.speculative = !0),
        Ou(a, "landing_page"))
      ) {
        var b = U(a.m, N.g.za) || {},
          c = U(a.m, N.g.fb),
          d = a.metadata.conversion_linker_enabled,
          e = a.metadata.redact_ads_data,
          f = {
            Hd: d,
            Pd: b,
            Vd: c,
            qa: a.metadata.source_canonical_id,
            m: a.m,
            Sd: e,
            Pk: U(a.m, N.g.Ca),
          },
          g = a.metadata.cookie_options;
        es(f, g);
        Bs(a.target, a.m);
        ts({
          Kh: !1,
          Sd: e,
          targetId: a.target.id,
          m: a.m,
          sc: d ? g : void 0,
          pg: d,
          qk: a.j[N.g.xe],
          Sh: a.j[N.g.lb],
          Ph: a.j[N.g.kb],
          Uh: a.j[N.g.Nb],
        });
        a.isAborted = !0;
      }
    },
    pv = function (a) {
      Ou(a, ["conversion", "remarketing"]) &&
        (a.m.isGtmEvent
          ? a.metadata.hit_type !== "conversion" &&
            a.eventName &&
            (a.j[N.g.Fc] = a.eventName)
          : (a.j[N.g.Fc] = a.eventName),
        fb(a.m.j, function (b, c) {
          vh[b.split(".")[0]] || (a.j[b] = c);
        }));
    },
    qv = function (a) {
      var b =
          !a.metadata.send_user_data_hit &&
          Ou(a, ["conversion", "user_data_web"]),
        c = !Rt(a, "ccd_add_1p_data", !1) && Ou(a, "user_data_lead");
      if ((b || c) && V(N.g.N)) {
        var d = a.metadata.hit_type === "conversion",
          e = a.m,
          f = void 0,
          g = U(e, N.g.Fa);
        if (d || a.metadata.speculative_ecw_stitching_ping) {
          var k = (U(e, N.g.oe) || {})[String(a.j[N.g.jb])];
          if (U(e, N.g.ce) === !0 || k) {
            var m;
            var n;
            k ? (n = tj(k, g)) : (n = A.enhanced_conversion_data) && T(154);
            var p = (k || {}).enhanced_conversions_mode,
              q;
            if (n) {
              if (p === "manual")
                switch (n._tag_mode) {
                  case "CODE":
                    q = "c";
                    break;
                  case "AUTO":
                    q = "a";
                    break;
                  case "MANUAL":
                    q = "m";
                    break;
                  default:
                    q = "c";
                }
              else q = p === "automatic" ? (ps(k) ? "a" : "m") : "c";
              m = { Z: n, Ok: q };
            } else m = { Z: n, Ok: void 0 };
            var r = m,
              u = r.Ok;
            f = r.Z;
            a.j[N.g.Cd] = u;
          }
        } else if (a.m.isGtmEvent) {
          Qu(a);
          a.metadata.user_data = g;
          a.j[N.g.Cd] = qs(g);
          return;
        }
        a.metadata.user_data = f;
      }
    },
    rv = function (a) {
      if (Rt(a, "ccd_add_1p_data", !1) && V(Nu())) {
        var b = a.m.C[N.g.Be];
        if (uj(b)) {
          var c = U(a.m, N.g.Fa);
          c === null
            ? (a.metadata.user_data_from_code = null)
            : (b.enable_code && Qc(c) && (a.metadata.user_data_from_code = c),
              Qc(b.selectors) &&
                (a.metadata.user_data_from_manual = sj(b.selectors)));
        }
      }
    },
    sv = function (a) {
      a.metadata.conversion_linker_enabled = U(a.m, N.g.ya) !== !1;
      a.metadata.cookie_options = as(a);
      a.metadata.redact_ads_data =
        U(a.m, N.g.ia) != null && U(a.m, N.g.ia) !== !1;
      a.metadata.allow_ad_personalization = zo(a.m);
    },
    tv = function (a) {
      if (Ou(a, ["conversion", "remarketing"]) && R(33)) {
        var b = function (c) {
          return R(35) ? (Va("fdr", c), !0) : !1;
        };
        if (V(N.g.N) || b(0))
          if (V(N.g.O) || b(1))
            if (U(a.m, N.g.Da) !== !1 || b(2))
              if (zo(a.m) || b(3))
                if (U(a.m, N.g.fc) !== !1 || b(4))
                  if (
                    (R(36)
                      ? a.eventName === N.g.ba
                        ? U(a.m, N.g.Ma)
                        : void 0
                      : U(a.m, N.g.Ma)) !== !1 ||
                    b(5)
                  )
                    if (Iu() || b(6))
                      R(35) && Xa()
                        ? ((a.j[N.g.pj] = Wa("fdr")), delete Ua.fdr)
                        : ((a.j[N.g.Sg] = "1"),
                          (a.metadata.send_fledge_experiment = !0));
      }
    },
    uv = function (a) {
      Ou(a, ["conversion"]) &&
        V(N.g.O) &&
        (A._gtmpcm === !0 || Os()
          ? (a.j[N.g.hc] = "2")
          : R(37) && Hu("attribution-reporting") && (a.j[N.g.hc] = "1"));
    },
    vv = function (a) {
      if (!zu(A)) T(87);
      else if (Fu !== void 0) {
        T(85);
        var b = xu();
        b ? Cu(b, a) : T(86);
      }
    },
    wv = function (a) {
      var b = ["conversion", "remarketing"];
      b.push("page_view", "user_data_lead", "user_data_web");
      if (Ou(a, b) && V(N.g.O)) {
        a.copyToHitData(N.g.Ca);
        var c = Ol(Jl.Bh);
        if (c === void 0) Nl(Jl.Ch, !0);
        else {
          var d = Ol(Jl.Le);
          a.j[N.g.Tf] = d + "." + c;
        }
      }
    },
    xv = function (a) {
      Ou(a, ["conversion", "remarketing"]) &&
        (a.copyToHitData(N.g.Ba),
        a.copyToHitData(N.g.oa),
        a.copyToHitData(N.g.Aa));
    },
    yv = function (a) {
      if (!a.metadata.consent_updated && Ou(a, ["conversion", "remarketing"])) {
        var b = Mn(!1);
        a.j[N.g.Nb] = b;
        var c = U(a.m, N.g.ra);
        c || (c = b === 1 ? A.top.location.href : A.location.href);
        a.j[N.g.ra] = kv(c);
        a.copyToHitData(N.g.Ea, E.referrer);
        a.j[N.g.eb] = cs();
        a.copyToHitData(N.g.Sa);
        var d = Us();
        a.j[N.g.Rb] = d.width + "x" + d.height;
        var e = On(),
          f = Mu(e);
        f.url && c !== f.url && (a.j[N.g.Uf] = kv(f.url));
      }
    },
    zv = function (a) {
      Ou(a, ["conversion", "remarketing"]);
    },
    Bv = function (a) {
      if (
        Ou(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])
      ) {
        var b = a.j[N.g.jb],
          c = U(a.m, N.g.Ff) === !0;
        c && (a.metadata.remarketing_only = !0);
        switch (a.metadata.hit_type) {
          case "conversion":
            !c && b && Qu(a);
            Av() && (a.metadata.is_gcp_conversion = !0);
            (Av() ? 0 : R(139)) &&
              (a.metadata.is_fallback_aw_conversion_ping_allowed = !0);
            break;
          case "user_data_lead":
          case "user_data_web":
            !c &&
              b &&
              (R(63) || R(64) || R(65) || R(66) || R(67)
                ? (a.metadata.speculative_ecw_stitching_ping = !0)
                : (a.isAborted = !0));
            break;
          case "remarketing":
            (!c && b) || Qu(a);
        }
        Ou(a, ["conversion", "remarketing"]) &&
          (a.j[N.g.Nj] = a.metadata.is_gcp_conversion
            ? "www.google.com"
            : "www.googleadservices.com");
      }
    },
    Av = function () {
      return (
        cc.userAgent.toLowerCase().indexOf("firefox") !== -1 ||
        hc("Edg/") ||
        hc("EdgA/") ||
        hc("EdgiOS/")
      );
    },
    Cv = function (a) {
      var b = a.target.ids[Yl[1]];
      if (b) {
        a.j[N.g.ld] = b;
        var c = a.target.ids[Yl[2]];
        c && (a.j[N.g.jb] = c);
      } else a.isAborted = !0;
    },
    Qu = function (a) {
      a.metadata.speculative_in_message || (a.metadata.speculative = !1);
    },
    Ou = function (a, b) {
      Array.isArray(b) || (b = [b]);
      return b.indexOf(a.metadata.hit_type) >= 0;
    };
  var Zu = function (a) {
    R(87) && Ou(a, ["conversion"]) && (a.j[N.g.Fj] = Dp(!1)._gs);
    if (R(20)) {
      var b = V(N.g.N) && V(N.g.O),
        c = a.metadata.redact_ads_data && !b;
      a.j[N.g.dj] = Ps("gclsrc");
      a.j[N.g.aj] = Ps("gad_source");
      var d = Ps("gbraid");
      d && (a.j[N.g.bj] = c ? "0" : d);
      var e = Ps("gclid");
      e && (a.j[N.g.cj] = b ? e : "0");
      var f = Ps("dclid");
      f && (a.j[N.g.Zi] = b ? f : "0");
    }
    if (R(15)) {
      var g = U(a.m, N.g.ra);
      g || (g = Mn(!1) === 1 ? A.top.location.href : A.location.href);
      var k,
        m = Ej(g),
        n = yj(m, "query", !1, void 0, "gclid");
      if (!n) {
        var p = m.hash.replace("#", "");
        n = n || xj(p, "gclid", !1);
      }
      (k = n ? n.length : void 0) && (a.j[N.g.Wi] = k);
    }
    if (V(N.g.N) && a.metadata.conversion_linker_enabled) {
      var q = a.metadata.cookie_options,
        r = Gq(q.prefix);
      r === "_gcl" && (r = "");
      var u = Tr(r);
      a.j[N.g.Yc] = u.kg;
      a.j[N.g.bd] = u.mg;
      R(120) && (a.j[N.g.Zc] = u.lg);
      if (Yr(r)) {
        var v = Xr(r);
        v && (a.j[N.g.ub] = v);
        if (!r) {
          var t = a.j[N.g.jb];
          q = Rc(q, null);
          q.prefix = r;
          var w = Rr(t, q, !0).jm;
          w && (a.j[N.g.Hc] = w);
        }
      } else {
        var x = "";
        if (
          (R(98) || R(107)) &&
          a.metadata.hit_type === "conversion" &&
          Mn() !== 2
        ) {
          var y = Wr(r);
          y.W && (x = y.W);
          y.uk && (a.j[N.g.Yd] = y.uk);
          y.vk && (a.j[N.g.Zd] = y.vk);
        } else x = Vr(r);
        x && (a.j[N.g.ab] = x);
        if (!r) {
          var B = Qr(Aq(zq()) ? oq() : {}, Or);
          B && (a.j[N.g.ue] = B);
        }
      }
    }
  };
  var Ev = function (a, b) {
      var c = {},
        d = function (f, g) {
          var k;
          k = g === !0 ? "1" : g === !1 ? "0" : encodeURIComponent(String(g));
          c[f] = k;
        };
      fb(a.j, function (f, g) {
        var k = Dv[f];
        k &&
          g !== void 0 &&
          g !== "" &&
          (!a.metadata.redact_click_ids ||
            (f !== N.g.ae && f !== N.g.je && f !== N.g.Cf && f !== N.g.Gg) ||
            (g = "0"),
          d(k, g));
      });
      d("gtm", No({ qa: a.metadata.source_canonical_id }));
      Ao() && d("gcs", Bo());
      d("gcd", Fo(a.m));
      Io() && d("dma_cps", Go());
      d("dma", Ho());
      Wn(eo()) && d("tcfd", Jo());
      dj() && d("tag_exp", dj());
      if (a.metadata.add_tag_timing) {
        d("tft", nb());
        var e = Dc();
        e !== void 0 && d("tfd", Math.round(e));
      }
      R(23) && d("apve", "1");
      (R(24) || R(25)) && d("apvf", Bc() ? (R(25) ? "f" : "sb") : "nf");
      b(c);
    },
    Fv = function (a) {
      Ev(a, function (b) {
        if (a.metadata.hit_type === "page_view") {
          var c = [];
          fb(b, function (e, f) {
            c.push(e + "=" + f);
          });
          var d =
            Lj(
              V([N.g.N, N.g.O])
                ? "https://www.google.com"
                : "https://pagead2.googlesyndication.com",
              !0
            ) +
            "/ccm/collect?" +
            c.join("&");
          R(25) && Bc() ? Ac(d, void 0, { Ak: !0 }) : xc(d);
          if (Za(a.m.onSuccess)) a.m.onSuccess();
        }
      });
    },
    Gv = {},
    Dv =
      ((Gv[N.g.Zb] = "gcu"),
      (Gv[N.g.ub] = "gclgb"),
      (Gv[N.g.ab] = "gclaw"),
      (Gv[N.g.Xi] = "gad_source"),
      (Gv[N.g.Yi] = "gad_source_src"),
      (Gv[N.g.ae] = "gclid"),
      (Gv[N.g.ej] = "gclsrc"),
      (Gv[N.g.Gg] = "gbraid"),
      (Gv[N.g.Cf] = "wbraid"),
      (Gv[N.g.vb] = "auid"),
      (Gv[N.g.gj] = "rnd"),
      (Gv[N.g.kj] = "ncl"),
      (Gv[N.g.Mg] = "gcldc"),
      (Gv[N.g.je] = "dclid"),
      (Gv[N.g.kb] = "edid"),
      (Gv[N.g.Fc] = "en"),
      (Gv[N.g.jc] = "gdpr"),
      (Gv[N.g.lb] = "gdid"),
      (Gv[N.g.Ic] = "_ng"),
      (Gv[N.g.wj] = "gtm_up"),
      (Gv[N.g.Nb] = "frm"),
      (Gv[N.g.ud] = "lps"),
      (Gv[N.g.xe] = "did"),
      (Gv[N.g.xj] = "navt"),
      (Gv[N.g.ra] = "dl"),
      (Gv[N.g.Ea] = "dr"),
      (Gv[N.g.eb] = "dt"),
      (Gv[N.g.Cj] = "scrsrc"),
      (Gv[N.g.Tf] = "ga_uid"),
      (Gv[N.g.nc] = "gdpr_consent"),
      (Gv[N.g.Ca] = "uid"),
      (Gv[N.g.Dd] = "us_privacy"),
      (Gv[N.g.Tb] = "npa"),
      Gv);
  var Hv = {
    J: {
      Ci: "ads_conversion_hit",
      Xd: "container_execute_start",
      Fi: "container_setup_end",
      yg: "container_setup_start",
      Di: "container_blocking_end",
      Ei: "container_execute_end",
      Gi: "container_yield_end",
      zg: "container_yield_start",
      Ij: "event_execute_end",
      Hj: "event_evaluation_end",
      vh: "event_evaluation_start",
      Jj: "event_setup_end",
      Ce: "event_setup_start",
      Lj: "ga4_conversion_hit",
      He: "page_load",
      Vn: "pageview",
      qc: "snippet_load",
      gk: "tag_callback_error",
      hk: "tag_callback_failure",
      ik: "tag_callback_success",
      jk: "tag_execute_end",
      Fd: "tag_execute_start",
    },
  };
  function Iv() {
    function a(c, d) {
      var e = Wa(d);
      e && b.push([c, e]);
    }
    var b = [];
    a("u", "GTM");
    a("ut", "TAGGING");
    a("h", "HEALTH");
    return b;
  }
  var Jv = !1;
  function sw(a, b) {}
  function tw(a, b) {}
  function uw(a, b) {}
  function vw(a, b) {}
  function ww() {
    var a = {};
    return a;
  }
  function kw(a) {
    a = a === void 0 ? !0 : a;
    var b = {};
    return b;
  }
  function xw() {}
  function yw(a, b) {}
  function zw(a, b, c) {}
  function Aw() {}
  function Bw(a, b) {
    var c = A,
      d,
      e = c.GooglebQhCsO;
    e || ((e = {}), (c.GooglebQhCsO = e));
    d = e;
    if (d[a]) return !1;
    d[a] = [];
    d[a][0] = b;
    return !0;
  }
  function Cw(a, b, c, d) {
    var e = En(a, "fmt");
    if (b) {
      var f = En(a, "random"),
        g = En(a, "label") || "";
      if (!f) return !1;
      var k = uu(
        decodeURIComponent(g.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(f.replace(/\+/g, " "))
      );
      if (!Bw(k, b)) return !1;
    }
    e && Number(e) !== 4 && (a = Gn(a, "rfmt", e));
    var m = Gn(a, "fmt", 4);
    lc(
      m,
      function () {
        A.google_noFurtherRedirects &&
          b &&
          ((A.google_noFurtherRedirects = null), b());
      },
      c,
      d,
      E.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  }
  var Dw = function () {
      var a = !1;
      if (fc) {
        var b = yj(Ej(fc), "host");
        b && (a = b.match(/^(www\.)?googletagmanager\.com$/) !== null);
      }
      return a;
    },
    Ew = function (a) {
      if (a !== void 0) return Math.round(a / 10) * 10;
    },
    Fw = function (a) {
      for (var b = {}, c = 0; c < a.length; c++) {
        var d = a[c],
          e = void 0;
        if (d.hasOwnProperty("google_business_vertical")) {
          e = d.google_business_vertical;
          var f = {};
          b[e] = b[e] || ((f.google_business_vertical = e), f);
        } else (e = ""), b.hasOwnProperty(e) || (b[e] = {});
        var g = b[e],
          k;
        for (k in d)
          k !== "google_business_vertical" &&
            (k in g || (g[k] = []), g[k].push(d[k]));
      }
      return Object.keys(b).map(function (m) {
        return b[m];
      });
    },
    Gw = function (a) {
      if (!a || !a.length) return [];
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        if (d) {
          var e = {};
          b.push(
            ((e.id = Eh(d)),
            (e.origin = d.origin),
            (e.destination = d.destination),
            (e.start_date = d.start_date),
            (e.end_date = d.end_date),
            (e.location_id = d.location_id),
            (e.google_business_vertical = d.google_business_vertical),
            e)
          );
        }
      }
      return b;
    },
    Eh = function (a) {
      a.item_id != null &&
        (a.id != null ? (T(138), a.id !== a.item_id && T(148)) : T(153));
      return R(19) ? Ih(a) : a.id;
    },
    Iw = function (a, b) {
      var c = Hw(b);
      return "" + a + (a && c ? ";" : "") + c;
    },
    Hw = function (a) {
      if (!a || typeof a !== "object" || typeof a.join === "function")
        return "";
      var b = [];
      fb(a, function (c, d) {
        var e, f;
        if (Array.isArray(d)) {
          for (var g = [], k = 0; k < d.length; ++k) {
            var m = Jw(d[k]);
            m !== void 0 && g.push(m);
          }
          f = g.length !== 0 ? g.join(",") : void 0;
        } else f = Jw(d);
        e = f;
        var n = Jw(c);
        n && e !== void 0 && b.push(n + "=" + e);
      });
      return b.join(";");
    },
    Jw = function (a) {
      var b = typeof a;
      if (a != null && b !== "object" && b !== "function")
        return String(a)
          .replace(/,/g, "\\,")
          .replace(/;/g, "\\;")
          .replace(/=/g, "\\=");
    },
    Kw = function (a, b) {
      var c = [],
        d = function (f, g) {
          var k = Zf[f] === !0;
          g == null ||
            (!k && g === "") ||
            (g === !0 && (g = 1),
            g === !1 && (g = 0),
            c.push(f + "=" + encodeURIComponent(g)));
        },
        e = a.metadata.hit_type;
      (e !== "conversion" && e !== "remarketing" && e !== "ga_conversion") ||
        d("random", a.metadata.event_start_timestamp_ms);
      fb(b, d);
      return c.join("&");
    },
    Lw = function (a, b) {
      var c = a.metadata.hit_type,
        d = a.j[N.g.ld],
        e = V([N.g.N, N.g.O]),
        f = [],
        g,
        k = a.m.onSuccess,
        m,
        n = Lo() ? 2 : 3,
        p = 0,
        q = void 0,
        r = function (B) {
          f.push(B);
          B.Oa && p++;
        };
      switch (c) {
        case "conversion":
          m = "/pagead/conversion";
          var u = "";
          e
            ? a.metadata.is_gcp_conversion
              ? ((g = "https://www.google.com"),
                (m = "/pagead/1p-conversion"),
                (q = 8))
              : ((g = "https://www.googleadservices.com"), (q = 5))
            : ((g = "https://pagead2.googlesyndication.com"), (q = 6));
          a.metadata.is_gcp_conversion &&
            (u = "&gcp=1&sscte=1&ct_cookie_present=1");
          var v = {
            Va: "" + Lj(g, !0) + m + "/" + d + "/?" + Kw(a, b) + u,
            format: n,
            Oa: !0,
            endpoint: q,
          };
          V(N.g.O) && (v.attributes = { attributionsrc: "" });
          e &&
            a.metadata.is_fallback_aw_conversion_ping_allowed &&
            ((v.Ve =
              "" +
              Lj("https://www.google.com", !0) +
              "/pagead/1p-conversion/" +
              d +
              "/?" +
              Kw(a, b) +
              "&gcp=1&sscte=1&ct_cookie_present=1"),
            (v.Ue = 8));
          r(v);
          if (a.metadata.send_ccm_parallel_ping) {
            q = a.metadata.is_gcp_conversion ? 23 : 22;
            var t;
            b.eme && !R(9) ? ((t = {}), qb(t, b), (t.eme = "*")) : (t = b);
            r({
              Va: "" + Lj(g, !0) + "/ccm/conversion/" + d + "/?" + Kw(a, t) + u,
              format: 2,
              Oa: !0,
              endpoint: q,
            });
          }
          a.metadata.is_gcp_conversion &&
            e &&
            ((u = "&gcp=1&ct_cookie_present=1"),
            r({
              Va:
                "" +
                Lj("https://googleads.g.doubleclick.net") +
                "/pagead/viewthroughconversion/" +
                d +
                "/?" +
                Kw(a, b) +
                u,
              format: n,
              Oa: !0,
              endpoint: 9,
            }));
          break;
        case "remarketing":
          var w = b.data || "",
            x = Fw(Gw(a.j[N.g.da]));
          if (x.length) {
            for (var y = 0; y < x.length; y++)
              (b.data = Iw(w, x[y])),
                r({
                  Va:
                    "" +
                    Lj("https://googleads.g.doubleclick.net") +
                    "/pagead/viewthroughconversion/" +
                    d +
                    "/?" +
                    Kw(a, b),
                  format: n,
                  Oa: !0,
                  endpoint: 9,
                }),
                a.metadata.send_fledge_experiment &&
                  r({
                    Va: "" + Lu() + "/td/rul/" + d + "?" + Kw(a, b),
                    format: 4,
                    Oa: !1,
                    endpoint: 44,
                  }),
                (a.metadata.event_start_timestamp_ms += 1);
            a.metadata.send_fledge_experiment = !1;
          } else
            r({
              Va:
                "" +
                Lj("https://googleads.g.doubleclick.net") +
                "/pagead/viewthroughconversion/" +
                d +
                "/?" +
                Kw(a, b),
              format: n,
              Oa: !0,
              endpoint: 9,
            });
          break;
        case "user_data_lead":
          r({
            Va:
              "" +
              Lj("https://google.com") +
              "/pagead/form-data/" +
              d +
              "?" +
              Kw(a, b),
            format: 1,
            Oa: !0,
            endpoint: 11,
          });
          break;
        case "user_data_web":
          r({
            Va:
              "" +
              Lj("https://google.com") +
              "/ccm/form-data/" +
              d +
              "?" +
              Kw(a, b),
            format: 1,
            Oa: !0,
            endpoint: 21,
          });
          break;
        case "ga_conversion":
          e
            ? ((g = "https://www.google.com"), (q = 54))
            : ((g = "https://pagead2.googlesyndication.com"), (q = 55)),
            r({
              Va: "" + Lj(g, !0) + "/measurement/conversion/?" + Kw(a, b),
              format: 5,
              Oa: !0,
              endpoint: q,
            });
      }
      f.length > 1 && Za(a.m.onSuccess) && (k = yb(a.m.onSuccess, p));
      Lo() ||
        (c !== "conversion" && c !== "remarketing") ||
        !a.metadata.send_fledge_experiment ||
        (R(34) && c === "conversion" && (b.ct_cookie_present = 0),
        r({
          Va: "" + Lu() + "/td/rul/" + d + "?" + Kw(a, b),
          format: 4,
          Oa: !1,
          endpoint: 44,
        }));
      return { onSuccess: k, Gm: f };
    },
    Mw = function (a, b, c, d, e, f, g, k) {
      tw(c.m.eventId, c.eventName);
      var m = function () {
        f && f();
      };
      switch (b) {
        case 1:
          xc(a);
          f && f();
          break;
        case 2:
          qc(a, m, g, k);
          break;
        case 3:
          var n = !1;
          try {
            n = Cw(a, m, g, k);
          } catch (r) {
            n = !1;
          }
          n || Mw(a, 2, c, d, e, m, g, k);
          break;
        case 4:
          var p = "AW-" + c.j[N.g.ld],
            q = c.j[N.g.jb];
          q && (p = p + "/" + q);
          Ju(a, p);
          break;
        case 5:
          Ac(a, void 0, void 0, f, g);
      }
    },
    Nw = function (a, b) {
      var c = !0;
      switch (a) {
        case "conversion":
          c = !R(8);
          break;
        case "user_data_lead":
          c = !R(10);
          break;
        case "user_data_web":
          c = !R(11);
      }
      return c ? b.replace(/./g, "*") : b;
    },
    Ow = function (a) {
      switch (a) {
        case "conversion":
          return R(70) || R(59) || R(60);
        case "user_data_lead":
          return R(71);
        case "user_data_web":
          return R(72);
        default:
          return !1;
      }
    },
    Pw = function (a) {
      if (!a.j[N.g.Yd] || !a.j[N.g.Zd]) return "";
      var b = a.j[N.g.Yd].split("."),
        c = a.j[N.g.Zd].split(".");
      if (!b.length || !c.length || b.length !== c.length) return "";
      for (var d = [], e = 0; e < b.length; ++e) d.push(b[e] + "_" + c[e]);
      return d.join(".");
    },
    Tw = function (a, b, c) {
      function d(k, m) {
        c._ece = Qw(f, k, m === void 0 ? !1 : m);
        a === "user_data_web" && (c.em = "tv.1~em.e0");
      }
      function e(k, m) {
        m = m === void 0 ? !1 : m;
        return Rw(k, function (n) {
          n ? d(n, m) : d();
        });
      }
      var f = b.metadata.split_experiment_arm,
        g = b.metadata.fake_user_data;
      if (f && g)
        if (f === 1) a === "conversion" && d();
        else if (f === 2) {
          if (a === "conversion") return e(Sw(0, g));
        } else if (f === 3)
          if (a === "conversion") d();
          else {
            if (a === "user_data_web") return e(Sw(1, g));
          }
        else if (f === 4)
          if (a === "conversion") d();
          else {
            if (a === "user_data_web") return e(Sw(2, g), !0);
          }
        else
          f === 5
            ? a === "conversion"
              ? d()
              : a === "user_data_web" && d()
            : (f !== 6 && f !== 7) || a !== "conversion" || d();
    },
    Vw = function (a, b, c) {
      function d(n, p, q) {
        n._ece = Qw(f, q, !1, p);
      }
      function e(n, p, q) {
        return Rw(n, function (r) {
          d(p, q, r);
          c(p);
        });
      }
      var f = a.metadata.split_experiment_arm,
        g = a.metadata.fake_user_data;
      if (f && g)
        if (f === 8) {
          var k = Object.assign({}, b);
          d(b, 1);
          c(b);
          Uw(k);
          d(k, 2);
          c(k);
        } else if (f === 9) {
          var m = Object.assign({}, b);
          d(b, 1);
          c(b);
          Uw(m);
          e(Sw(1, g), m, 2);
        }
    },
    Sw = function (a, b) {
      if (a === 0) return mi(b, !1);
      if (a === 1) return mi(b, !0, !0);
      if (a === 2)
        return ki(
          {
            Wa: "tv.1~em.test@example.com~fn.Fake~ln.Name~co.US~sa.123 Fake St~ct.Non-Applicable~pn.+1234567890~pc.12345~rg.ca",
            Qd: 9,
            og: !1,
          },
          !0
        );
    },
    Xw = function (a, b, c) {
      if (a === "user_data_web") {
        var d = c.metadata.split_experiment_arm;
        if (d === 6 || d === 7) {
          var e = d === 7 ? 2 : 1,
            f = xi(c.metadata.fake_user_data),
            g = hi(f, e),
            k = g.xc,
            m = g.Oh,
            n = g.encryptionKeyString,
            p = g.Yb,
            q = [
              "&em=tv.1~em.e0&_ece=a." +
                d +
                ("~s." + (Dw() ? 1 : 0)) +
                ("&feme=" + m),
            ];
          return {
            vi: !0,
            xc: k,
            yi: q,
            di: f,
            encryptionKeyString: n,
            wg: function (r, u) {
              return function (v) {
                var t = Sw(e, c.metadata.fake_user_data);
                Rw(t, function (w) {
                  var x = Qw(d, w, d === 7),
                    y = Ww(u.Va, c, b, v);
                  Mw(
                    y + "&em=tv.1~em.e0&_ece=" + encodeURIComponent(x),
                    u.format,
                    c,
                    b,
                    u.endpoint,
                    u.Oa ? r : void 0,
                    void 0,
                    u.attributes
                  );
                });
              };
            },
            Yb: p,
          };
        }
      }
    },
    Yw = function (a, b, c) {
      var d = xi(a.metadata.user_data),
        e = hi(d, c),
        f = e.xi,
        g = e.xc,
        k = e.Yb,
        m = e.Oh,
        n = e.encryptionKeyString,
        p = [];
      (c !== 0 && c !== 1) || p.push("&em=" + f);
      var q = { vi: !0, xc: g, yi: p, di: d, Yb: k };
      if (c === 2 || c === 1)
        p.push("&eme=" + m),
          (q.encryptionKeyString = n),
          (q.wg = function (r, u) {
            return function (v) {
              var t = Sw(c, a.metadata.user_data);
              Rw(t, function (w) {
                var x = Ww(u.Va, a, b, v);
                if (c === 0 || c === 1) {
                  var y = (w == null ? 0 : w.Wa) ? w.Wa : oi({ Rd: [] }).Wa;
                  x += "&em=" + encodeURIComponent(y);
                }
                Mw(
                  x,
                  u.format,
                  a,
                  b,
                  u.endpoint,
                  u.Oa ? r : void 0,
                  void 0,
                  u.attributes
                );
              });
            };
          });
      return q;
    },
    Ww = function (a, b, c, d) {
      var e = a;
      if (d) {
        var f = No({ qa: b.metadata.source_canonical_id, xg: d });
        e = e.replace(c.gtm, f);
      }
      return e;
    },
    Rw = function (a, b) {
      if (a) return a.then(b);
      b(void 0);
    },
    Qw = function (a, b, c, d) {
      function e(g, k) {
        f.push(g + "." + k);
      }
      c = c === void 0 ? !1 : c;
      var f = [];
      e("a", a);
      e("s", Dw() ? 1 : 0);
      d !== void 0 && e("n", d);
      b !== void 0 &&
        (b.Wa &&
          !c &&
          (e("fem", b.Wa.replace(/./g, "*")),
          b.time !== void 0 && e("ht", String(b.time))),
        b.ka &&
          (b.ka.uc && e("feme", b.ka.uc.replace(/./g, "*")),
          e("est", b.ka.time),
          e("es", b.ka.status)));
      return f.join("~");
    },
    Zw = function (a, b) {
      if (a !== "conversion") return !1;
      var c = b.metadata.split_experiment_arm;
      return c === 8 || c === 9;
    },
    Uw = function (a) {
      var b = yh[N.g.jb];
      a[b] = "ecwexp_" + a[b];
    },
    ax = function (a, b, c, d, e) {
      function f(r, u) {
        var v = mi(b, u, !0);
        v
          ? v.then($w(a, r, d)).then(function () {
              e(r);
            })
          : e(r);
      }
      f(Object.assign({}, c), !1);
      var g = xi(b),
        k = hi(g, 1),
        m = k.xc,
        n = k.Yb,
        p = k.encryptionKeyString,
        q = ["&em=" + k.xi, "&eme=" + k.Oh];
      Uw(c);
      e(c, {
        vi: !0,
        xc: m,
        yi: q,
        di: g,
        encryptionKeyString: p,
        Yb: n,
        wg: function () {
          return function (r) {
            c.gtm = No({ qa: d.metadata.source_canonical_id, xg: r });
            c._swf = "1";
            f(c, !0);
          };
        },
      });
    },
    bx = function (a, b, c, d, e) {
      function f(g, k) {
        k && Uw(g);
        var m = mi(b, k, !0);
        m
          ? m.then($w(a, g, d)).then(function () {
              e(g);
            })
          : e(g);
      }
      f(Object.assign({}, c), !1);
      f(c, !0);
    },
    $w = function (a, b, c) {
      return function (d) {
        var e = d.Wa;
        R(109) || (b.em = e);
        (R(58) || R(94)) &&
          d.Qd > 0 &&
          d.time !== void 0 &&
          (b._ht = cx(Ew(d.time), e));
        d.Qd > 0 && dx(a, b, c);
        if (Ow(a)) {
        }
      };
    },
    cx = function (a, b) {
      return ["t." + (a != null ? a : ""), "l." + Ew(b.length)].join("~");
    },
    dx = function (a, b, c) {
      if (a === "user_data_web") {
        var d;
        var e = c.metadata.cookie_options;
        e = e || {};
        var f;
        if (V(Ms)) {
          (f = Ns(e)) || (f = hp());
          var g = e,
            k = Sp(g.prefix);
          Up(g, f);
          delete Pp[k];
          delete Qp[k];
          Tp(k, g.path, g.domain);
          d = Ns(e);
        } else d = void 0;
        b.ecsid = d;
      }
    },
    ex = function (a, b, c, d, e) {
      var f = b.Va,
        g = b.format,
        k = b.Oa,
        m = b.attributes,
        n = b.endpoint;
      return function (p) {
        Ai(c.di, function (q) {
          var r = oi(q),
            u = Ww(f, e, d, p);
          Mw(
            u + "&em=" + encodeURIComponent(r.Wa),
            g,
            e,
            d,
            n,
            k ? a : void 0,
            void 0,
            m
          );
        });
      };
    },
    gx = function (a) {
      if (a.metadata.hit_type === "page_view") Fv(a);
      else {
        var b = R(21) ? pb(a.m.onFailure) : void 0;
        fx(a, function (c, d) {
          R(109) && delete c.em;
          for (
            var e = Lw(a, c), f = e.onSuccess, g = e.Gm, k = {}, m = 0;
            m < g.length;
            k = { Ve: void 0, Ue: void 0, Wd: void 0, Eh: void 0, rk: void 0 },
              m++
          ) {
            var n = g[m],
              p = n.Va,
              q = n.format;
            k.Wd = n.Oa;
            k.Eh = n.attributes;
            k.rk = n.endpoint;
            k.Ve = n.Ve;
            k.Ue = n.Ue;
            var r = void 0;
            if ((r = d) != null && r.vi) {
              var u = void 0,
                v = ((u = d) == null ? 0 : u.wg)
                  ? d.wg(f, g[m])
                  : ex(f, g[m], d, c, a),
                t = d,
                w = t.xc,
                x = t.encryptionKeyString,
                y = "" + p + t.yi.join("");
              pu(
                y,
                w,
                (function (C) {
                  return function () {
                    C.Wd && typeof f === "function" && f();
                  };
                })(k),
                v,
                x
              );
            } else {
              var B = b;
              k.Ve &&
                k.Ue &&
                (B = (function (C) {
                  return function () {
                    Mw(
                      C.Ve,
                      5,
                      a,
                      c,
                      C.Ue,
                      C.Wd ? f : void 0,
                      C.Wd ? b : void 0,
                      C.Eh
                    );
                  };
                })(k));
              Mw(p, q, a, c, k.rk, k.Wd ? f : void 0, k.Wd ? B : void 0, k.Eh);
            }
          }
        });
      }
    },
    fx = function (a, b) {
      var c = a.metadata.hit_type,
        d = {},
        e = {},
        f = void 0,
        g = a.metadata.event_start_timestamp_ms;
      c === "conversion" || c === "remarketing"
        ? ((d.cv = "11"),
          (d.fst = g),
          (d.fmt = 3),
          (d.bg = "ffffff"),
          (d.guid = "ON"),
          (d.async = "1"))
        : c === "ga_conversion" &&
          ((d.cv = "11"),
          (d.tid = a.target.destinationId),
          (d.fst = g),
          (d.fmt = 6),
          (d.en = a.eventName));
      var k = jr(["aw", "dc"]);
      k != null && (d.gad_source = k);
      d.gtm = No({ qa: a.metadata.source_canonical_id });
      c !== "remarketing" && Ao() && (d.gcs = Bo());
      d.gcd = Fo(a.m);
      Io() && (d.dma_cps = Go());
      d.dma = Ho();
      Wn(eo()) && (d.tcfd = Jo());
      dj() && (d.tag_exp = dj());
      a.j[N.g.Rb] && zh(a.j[N.g.Rb], d);
      a.j[N.g.Sa] && Bh(a.j[N.g.Sa], d);
      var m = a.metadata.redact_click_ids,
        n = function (J, F) {
          var S = a.j[F];
          S && (d[J] = m ? sr(S) : S);
        };
      n("url", N.g.ra);
      n("ref", N.g.Ea);
      n("top", N.g.Uf);
      var p = Pw(a);
      p && (d.gclaw_src = p);
      fb(a.j, function (J, F) {
        if (yh.hasOwnProperty(J)) {
          var S = yh[J];
          S && (d[S] = F);
        } else e[J] = F;
      });
      Sl(d, a.j[N.g.Ed]);
      var q = a.j[N.g.vd];
      q !== void 0 && q !== "" && (d.vdnc = String(q));
      var r = a.j[N.g.pd];
      r !== void 0 && (d.shf = r);
      var u = a.j[N.g.Ec];
      u !== void 0 && (d.delc = u);
      if (R(29) && a.metadata.add_tag_timing) {
        d.tft = nb();
        var v = Dc();
        v !== void 0 && (d.tfd = Math.round(v));
      }
      c !== "ga_conversion" && (d.data = Hw(e));
      var t = a.j[N.g.da];
      !t ||
        (c !== "conversion" && c !== "ga_conversion") ||
        ((d.iedeld = Lh(t)), (d.item = Ch(t)));
      if (
        (c !== "conversion" &&
          c !== "user_data_lead" &&
          c !== "user_data_web") ||
        !a.metadata.user_data
      )
        b(d, f);
      else if (!V(N.g.O) || (R(18) && !V(N.g.N))) (d.ec_mode = void 0), b(d);
      else {
        var w = [];
        if (a.metadata.split_experiment_arm && a.metadata.fake_user_data) {
          if (Zw(c, a)) {
            Vw(a, d, b);
            return;
          }
          var x = Tw(c, a, d);
          f = Xw(c, d, a);
          x && w.push(x);
          d.gtm = No({ qa: a.metadata.source_canonical_id, xg: 3 });
        } else if (c !== "conversion" && R(114) && !R(109)) {
          d.gtm = No({ qa: a.metadata.source_canonical_id, xg: 3 });
          if (c === "user_data_web" && R(56)) {
            d.random = nb();
            var y = Object.assign({}, d),
              B = Yw(a, d, 0),
              C = Yw(a, y, 1);
            B.Yb > 0 && dx(c, d, a);
            b(d, B);
            b(y, C);
            return;
          }
          f = Yw(a, d, R(113) ? 1 : 0);
          f.Yb > 0 && dx(c, d, a);
        } else {
          var D = a.metadata.user_data;
          if (c === "conversion" && R(59)) {
            bx(c, D, d, a, b);
            return;
          }
          if (c === "conversion" && R(60)) {
            ax(c, D, d, a, b);
            return;
          }
          var H;
          (H = R(93) ? mi(D, !1) : R(94) ? mi(D, Ow(c)) : ni(D)) &&
            w.push(H.then($w(c, d, a)));
        }
        if (w.length)
          try {
            Promise.all(w).then(function () {
              b(d);
            });
            return;
          } catch (J) {}
        b(d, f);
      }
    };
  function hx(a, b) {
    if (data.entities) {
      var c = data.entities[a];
      if (c) return c[b];
    }
  }
  function ix(a, b, c) {
    c = c === void 0 ? !1 : c;
    jx().addRestriction(0, a, b, c);
  }
  function kx(a, b, c) {
    c = c === void 0 ? !1 : c;
    jx().addRestriction(1, a, b, c);
  }
  function lx() {
    var a = nk();
    return jx().getRestrictions(1, a);
  }
  var mx = function () {
      this.container = {};
      this.j = {};
    },
    nx = function (a, b) {
      var c = a.container[b];
      c ||
        ((c = {
          _entity: { internal: [], external: [] },
          _event: { internal: [], external: [] },
        }),
        (a.container[b] = c));
      return c;
    };
  mx.prototype.addRestriction = function (a, b, c, d) {
    d = d === void 0 ? !1 : d;
    if (!d || !this.j[b]) {
      var e = nx(this, b);
      a === 0
        ? d
          ? e._entity.external.push(c)
          : e._entity.internal.push(c)
        : a === 1 &&
          (d ? e._event.external.push(c) : e._event.internal.push(c));
    }
  };
  mx.prototype.getRestrictions = function (a, b) {
    var c = nx(this, b);
    if (a === 0) {
      var d, e;
      return [].concat(
        ta(
          (c == null
            ? void 0
            : (d = c._entity) == null
            ? void 0
            : d.internal) || []
        ),
        ta(
          (c == null
            ? void 0
            : (e = c._entity) == null
            ? void 0
            : e.external) || []
        )
      );
    }
    if (a === 1) {
      var f, g;
      return [].concat(
        ta(
          (c == null ? void 0 : (f = c._event) == null ? void 0 : f.internal) ||
            []
        ),
        ta(
          (c == null ? void 0 : (g = c._event) == null ? void 0 : g.external) ||
            []
        )
      );
    }
    return [];
  };
  mx.prototype.getExternalRestrictions = function (a, b) {
    var c = nx(this, b),
      d,
      e;
    return a === 0
      ? (c == null ? void 0 : (d = c._entity) == null ? void 0 : d.external) ||
          []
      : (c == null ? void 0 : (e = c._event) == null ? void 0 : e.external) ||
          [];
  };
  mx.prototype.removeExternalRestrictions = function (a) {
    var b = nx(this, a);
    b._event && (b._event.external = []);
    b._entity && (b._entity.external = []);
    this.j[a] = !0;
  };
  function jx() {
    var a = Ji.r;
    a || ((a = new mx()), (Ji.r = a));
    return a;
  }
  var ox = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    px = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    qx = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    rx =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      );
  function sx() {
    var a = lj("gtm.allowlist") || lj("gtm.whitelist");
    a && T(9);
    Pi && (a = ["google", "gtagfl", "lcl", "zone"]);
    ox.test(A.location && A.location.hostname) &&
      (Pi
        ? T(116)
        : (T(117),
          tx &&
            ((a = []),
            window.console &&
              window.console.log &&
              window.console.log("GTM blocked. See go/13687728."))));
    var b = a && rb(jb(a), px),
      c = lj("gtm.blocklist") || lj("gtm.blacklist");
    c || ((c = lj("tagTypeBlacklist")) && T(3));
    c ? T(8) : (c = []);
    ox.test(A.location && A.location.hostname) &&
      ((c = jb(c)),
      c.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
    jb(c).indexOf("google") >= 0 && T(2);
    var d = c && rb(jb(c), qx),
      e = {};
    return function (f) {
      var g = f && f[He.sa];
      if (!g || typeof g !== "string") return !0;
      g = g.replace(/^_*/, "");
      if (e[g] !== void 0) return e[g];
      var k = Zi[g] || [],
        m = !0;
      if (a) {
        var n;
        if ((n = m))
          a: {
            if (b.indexOf(g) < 0)
              if (k && k.length > 0)
                for (var p = 0; p < k.length; p++) {
                  if (b.indexOf(k[p]) < 0) {
                    T(11);
                    n = !1;
                    break a;
                  }
                }
              else {
                n = !1;
                break a;
              }
            n = !0;
          }
        m = n;
      }
      var q = !1;
      if (c) {
        var r = d.indexOf(g) >= 0;
        if (r) q = r;
        else {
          var u = db(d, k || []);
          u && T(10);
          q = u;
        }
      }
      var v = !m || q;
      v ||
        !(k.indexOf("sandboxedScripts") >= 0) ||
        (b && b.indexOf("sandboxedScripts") !== -1) ||
        (v = db(d, rx));
      return (e[g] = v);
    };
  }
  var tx = !1;
  tx = !0;
  function ux() {
    dk &&
      ix(nk(), function (a) {
        var b = sf(a.entityId),
          c;
        if (vf(b)) {
          var d = b[He.sa];
          if (!d)
            throw Error("Error: No function name given for function call.");
          var e = kf[d];
          c = !!e && !!e.runInSiloedMode;
        } else c = !!hx(b[He.sa], 4);
        return c;
      });
  }
  function vx(a, b, c, d, e) {
    if (!wx()) {
      var f = d.siloed ? jk(a) : a;
      if (!wk(f)) {
        d.siloed && yk({ ctid: f, isDestination: !1 });
        var g = qk();
        Zj().container[f] = { state: 1, context: d, parent: g };
        Yj({ ctid: f, isDestination: !1 }, e);
        var k = xx(a);
        if (fj()) lc(ej() + "/" + k);
        else {
          var m = sb(a, "GTM-"),
            n = Jj(),
            p = c ? "/gtag/js" : "/gtm.js",
            q = Ij(b, p + k);
          if (!q) {
            var r = Ii.Bf + p;
            n && fc && m
              ? ((r = fc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]),
                (q = us("https://", "http://", r + k)))
              : (q = fj() ? ej() + "/" + k : us("https://", "http://", r + k));
          }
          lc(q);
        }
      }
    }
  }
  function yx(a, b, c, d) {
    if (!wx()) {
      var e = c.siloed ? jk(a) : a;
      if (!xk(e))
        if (!c.siloed && zk())
          (Zj().destination[e] = {
            state: 0,
            transportUrl: b,
            context: c,
            parent: qk(),
          }),
            Yj({ ctid: e, isDestination: !0 }, d),
            T(91);
        else if (
          (c.siloed && yk({ ctid: e, isDestination: !0 }),
          (Zj().destination[e] = { state: 1, context: c, parent: qk() }),
          Yj({ ctid: e, isDestination: !0 }, d),
          fj())
        )
          lc(ej() + ("/gtd" + xx(a, !0)));
        else {
          var f = "/gtag/destination" + xx(a, !0),
            g = Ij(b, f);
          g ||
            (fj()
              ? ((f = "/gtd" + xx(a, !0)), (g = ej() + f))
              : (g = us("https://", "http://", Ii.Bf + f)));
          lc(g);
        }
    }
  }
  function xx(a, b) {
    b = b === void 0 ? !1 : b;
    var c = "?id=" + encodeURIComponent(a) + "&l=" + Ii.rb;
    if (!sb(a, "GTM-") || b) c += "&cx=c";
    c += "&gtm=" + No();
    Jj() && (c += "&sign=" + Ii.Ah);
    var d = cj.j;
    d === 1 ? (c += "&fps=fc") : d === 2 && (c += "&fps=fe");
    return c;
  }
  function wx() {
    if (Lo()) {
      return !0;
    }
    return !1;
  }
  var zx = !1,
    Ax = 0,
    Bx = [];
  function Cx(a) {
    if (!zx) {
      var b = E.createEventObject,
        c = E.readyState === "complete",
        d = E.readyState === "interactive";
      if (!a || a.type !== "readystatechange" || c || (!b && d)) {
        zx = !0;
        for (var e = 0; e < Bx.length; e++) G(Bx[e]);
      }
      Bx.push = function () {
        for (var f = ya.apply(0, arguments), g = 0; g < f.length; g++) G(f[g]);
        return 0;
      };
    }
  }
  function Dx() {
    if (!zx && Ax < 140) {
      Ax++;
      try {
        var a, b;
        (b = (a = E.documentElement).doScroll) == null || b.call(a, "left");
        Cx();
      } catch (c) {
        A.setTimeout(Dx, 50);
      }
    }
  }
  function Ex(a) {
    zx ? a() : Bx.push(a);
  }
  function Gx(a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: lk(),
    };
  }
  var Ix = function (a, b) {
      this.j = !1;
      this.K = [];
      this.eventData = { tags: [] };
      this.P = !1;
      this.C = this.H = 0;
      Hx(this, a, b);
    },
    Jx = function (a, b, c, d) {
      if (Li.hasOwnProperty(b) || b === "__zone") return -1;
      var e = {};
      Qc(d) && (e = Rc(d, e));
      e.id = c;
      e.status = "timeout";
      return a.eventData.tags.push(e) - 1;
    },
    Kx = function (a, b, c, d) {
      var e = a.eventData.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    Lx = function (a) {
      if (!a.j) {
        for (var b = a.K, c = 0; c < b.length; c++) b[c]();
        a.j = !0;
        a.K.length = 0;
      }
    },
    Hx = function (a, b, c) {
      b !== void 0 && a.Ne(b);
      c &&
        A.setTimeout(function () {
          Lx(a);
        }, Number(c));
    };
  Ix.prototype.Ne = function (a) {
    var b = this,
      c = pb(function () {
        G(function () {
          a(lk(), b.eventData);
        });
      });
    this.j ? c() : this.K.push(c);
  };
  var Mx = function (a) {
      a.H++;
      return pb(function () {
        a.C++;
        a.P && a.C >= a.H && Lx(a);
      });
    },
    Nx = function (a) {
      a.P = !0;
      a.C >= a.H && Lx(a);
    };
  var Ox = {};
  function Px() {
    return A[Qx()];
  }
  var Rx = function (a) {
      if (bl()) {
        var b = Px();
        b(a + "require", "linker");
        b(a + "linker:passthrough", !0);
      }
    },
    Sx = function (a) {
      A.GoogleAnalyticsObject || (A.GoogleAnalyticsObject = a || "ga");
      var b = A.GoogleAnalyticsObject;
      if (A[b]) A.hasOwnProperty(b);
      else {
        var c = function () {
          var d = ya.apply(0, arguments);
          c.q = c.q || [];
          c.q.push(d);
        };
        c.l = Number(mb());
        A[b] = c;
      }
      return A[b];
    };
  function Qx() {
    return A.GoogleAnalyticsObject || "ga";
  }
  function Tx() {
    var a = lk();
  }
  function Ux(a, b) {
    return function () {
      var c = Px(),
        d = c && c.getByName && c.getByName(a);
      if (d) {
        var e = d.get("sendHitTask");
        d.set("sendHitTask", function (f) {
          var g = f.get("hitPayload"),
            k = f.get("hitCallback"),
            m = g.indexOf("&tid=" + b) < 0;
          m &&
            (f.set(
              "hitPayload",
              g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
              !0
            ),
            f.set("hitCallback", void 0, !0));
          e(f);
          m &&
            (f.set("hitPayload", g, !0),
            f.set("hitCallback", k, !0),
            f.set("_x_19", void 0, !0),
            e(f));
        });
      }
    };
  }
  var Zx = ["es", "1"],
    $x = {},
    ay = {};
  function by(a, b) {
    if (Sj) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      $x[a] = [
        ["e", c],
        ["eid", a],
      ];
      Pm(a);
    }
  }
  function cy(a) {
    var b = a.eventId,
      c = a.Wc;
    if (!$x[b]) return [];
    var d = [];
    ay[b] || d.push(Zx);
    d.push.apply(d, ta($x[b]));
    c && (ay[b] = !0);
    return d;
  }
  var dy = {},
    ey = {},
    fy = {};
  function gy(a, b, c, d) {
    Sj &&
      R(104) &&
      ((d === void 0 ? 0 : d)
        ? ((fy[b] = fy[b] || 0), ++fy[b])
        : c !== void 0
        ? ((ey[a] = ey[a] || {}), (ey[a][b] = Math.round(c)))
        : ((dy[a] = dy[a] || {}), (dy[a][b] = (dy[a][b] || 0) + 1)));
  }
  function hy(a) {
    var b = a.eventId,
      c = a.Wc,
      d = dy[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete dy[b];
    return e.length ? [["md", e.join(".")]] : [];
  }
  function iy(a) {
    var b = a.eventId,
      c = a.Wc,
      d = ey[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete ey[b];
    return e.length ? [["mtd", e.join(".")]] : [];
  }
  function jy() {
    for (
      var a = [], b = l(Object.keys(fy)), c = b.next();
      !c.done;
      c = b.next()
    ) {
      var d = c.value;
      a.push("" + d + fy[d]);
    }
    return a.length ? [["mec", a.join(".")]] : [];
  }
  var ky = {},
    ly = {};
  function my(a, b, c) {
    if (Sj && b) {
      var d = Mj(b);
      ky[a] = ky[a] || [];
      ky[a].push(c + d);
      var e = (vf(b) ? "1" : "2") + d;
      ly[a] = ly[a] || [];
      ly[a].push(e);
      Pm(a);
    }
  }
  function ny(a) {
    var b = a.eventId,
      c = a.Wc,
      d = [],
      e = ky[b] || [];
    e.length && d.push(["tr", e.join(".")]);
    var f = ly[b] || [];
    f.length && d.push(["ti", f.join(".")]);
    c && (delete ky[b], delete ly[b]);
    return d;
  }
  function oy(a, b, c, d) {
    var e = hf[a],
      f = py(a, b, c, d);
    if (!f) return null;
    var g = wf(e[He.fk], c, []);
    if (g && g.length) {
      var k = g[0];
      f = oy(
        k.index,
        {
          onSuccess: f,
          onFailure: k.sk === 1 ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function py(a, b, c, d) {
    function e() {
      function w() {
        ll(3);
        var J = nb() - H;
        my(c.id, f, "7");
        Kx(c.rc, C, "exception", J);
        R(91) && zw(c, f, Hv.J.gk);
        D || ((D = !0), k());
      }
      if (f[He.El]) k();
      else {
        var x = uf(f, c, []),
          y = x[He.Vk];
        if (y != null)
          for (var B = 0; B < y.length; B++)
            if (!V(y[B])) {
              k();
              return;
            }
        var C = Jx(c.rc, String(f[He.sa]), Number(f[He.Me]), x[He.METADATA]),
          D = !1;
        x.vtp_gtmOnSuccess = function () {
          if (!D) {
            D = !0;
            var J = nb() - H;
            my(c.id, hf[a], "5");
            Kx(c.rc, C, "success", J);
            R(91) && zw(c, f, Hv.J.ik);
            g();
          }
        };
        x.vtp_gtmOnFailure = function () {
          if (!D) {
            D = !0;
            var J = nb() - H;
            my(c.id, hf[a], "6");
            Kx(c.rc, C, "failure", J);
            R(91) && zw(c, f, Hv.J.hk);
            k();
          }
        };
        x.vtp_gtmTagId = f.tag_id;
        x.vtp_gtmEventId = c.id;
        c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
        my(c.id, f, "1");
        R(91) && yw(c, f);
        var H = nb();
        try {
          xf(x, { event: c, index: a, type: 1 });
        } catch (J) {
          w(J);
        }
        R(91) && zw(c, f, Hv.J.jk);
      }
    }
    var f = hf[a],
      g = b.onSuccess,
      k = b.onFailure,
      m = b.terminate;
    if (c.isBlocked(f)) return null;
    var n = wf(f[He.kk], c, []);
    if (n && n.length) {
      var p = n[0],
        q = oy(p.index, { onSuccess: g, onFailure: k, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      k = p.sk === 2 ? m : q;
    }
    if (f[He.Vj] || f[He.Gl]) {
      var r = f[He.Vj] ? jf : c.vn,
        u = g,
        v = k;
      if (!r[a]) {
        var t = qy(a, r, pb(e));
        g = t.onSuccess;
        k = t.onFailure;
      }
      return function () {
        r[a](u, v);
      };
    }
    return e;
  }
  function qy(a, b, c) {
    var d = [],
      e = [];
    b[a] = ry(d, e, c);
    return {
      onSuccess: function () {
        b[a] = sy;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = ty;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function ry(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function sy(a) {
    a();
  }
  function ty(a, b) {
    b();
  }
  var wy = function (a, b) {
    for (var c = [], d = 0; d < hf.length; d++)
      if (a[d]) {
        var e = hf[d];
        var f = Mx(b.rc);
        try {
          var g = oy(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var k = e[He.sa];
            if (!k)
              throw Error("Error: No function name given for function call.");
            var m = kf[k];
            c.push({
              Mk: d,
              Ek: (m ? m.priorityOverride || 0 : 0) || hx(e[He.sa], 1) || 0,
              execute: g,
            });
          } else uy(d, b), f();
        } catch (p) {
          f();
        }
      }
    c.sort(vy);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return c.length > 0;
  };
  function vy(a, b) {
    var c,
      d = b.Ek,
      e = a.Ek;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (c !== 0) f = c;
    else {
      var g = a.Mk,
        k = b.Mk;
      f = g > k ? 1 : g < k ? -1 : 0;
    }
    return f;
  }
  function uy(a, b) {
    if (Sj) {
      var c = function (d) {
        var e = b.isBlocked(hf[d]) ? "3" : "4",
          f = wf(hf[d][He.fk], b, []);
        f && f.length && c(f[0].index);
        my(b.id, hf[d], e);
        var g = wf(hf[d][He.kk], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var zy = !1,
    xy;
  function By(a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    if (R(91)) {
    }
    if (d === "gtm.js") {
      if (zy) return !1;
      zy = !0;
    }
    var e = !1,
      f = lx(),
      g = Rc(a, null);
    if (
      !f.every(function (u) {
        return u({ originalEventData: g });
      })
    ) {
      if (d !== "gtm.js" && d !== "gtm.init" && d !== "gtm.init_consent")
        return !1;
      e = !0;
    }
    by(b, d);
    var k = a.eventCallback,
      m = a.eventTimeout,
      n = {
        id: b,
        priorityId: c,
        name: d,
        isBlocked: Cy(g, e),
        vn: [],
        logMacroError: function () {
          T(6);
          ll(0);
        },
        cachedModelValues: Dy(),
        rc: new Ix(function () {
          if (R(91)) {
          }
          k && k.apply(k, Array.prototype.slice.call(arguments, 0));
        }, m),
        originalEventData: g,
      };
    R(104) && Sj && (n.reportMacroDiscrepancy = gy);
    R(91) && uw(n.id, n.name);
    var p = Df(n);
    R(91) && vw(n.id, n.name);
    e && (p = Ey(p));
    if (R(91)) {
    }
    var q = wy(p, n),
      r = !1;
    Nx(n.rc);
    (d !== "gtm.js" && d !== "gtm.sync") || Tx();
    return Fy(p, q) || r;
  }
  function Dy() {
    var a = {};
    a.event = qj("event", 1);
    a.ecommerce = qj("ecommerce", 1);
    a.gtm = qj("gtm");
    a.eventModel = qj("eventModel");
    return a;
  }
  function Cy(a, b) {
    var c = sx();
    return function (d) {
      if (c(d)) return !0;
      var e = d && d[He.sa];
      if (!e || typeof e !== "string") return !0;
      e = e.replace(/^_*/, "");
      var f,
        g = nk();
      f = jx().getRestrictions(0, g);
      var k = a;
      b &&
        ((k = Rc(a, null)), (k["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER));
      for (var m = Zi[e] || [], n = l(f), p = n.next(); !p.done; p = n.next()) {
        var q = p.value;
        try {
          if (!q({ entityId: e, securityGroups: m, originalEventData: k }))
            return !0;
        } catch (r) {
          return !0;
        }
      }
      return !1;
    };
  }
  function Ey(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(hf[c][He.sa]);
        if (Ki[d] || hf[c][He.Hl] !== void 0 || hx(d, 2)) b[c] = !0;
      }
    return b;
  }
  function Fy(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && hf[c] && !Li[String(hf[c][He.sa])]) return !0;
    return !1;
  }
  var Gy = 0;
  function Hy(a, b) {
    return arguments.length === 1 ? Iy("set", a) : Iy("set", a, b);
  }
  function Jy(a, b) {
    return arguments.length === 1 ? Iy("config", a) : Iy("config", a, b);
  }
  function Ky(a, b, c) {
    c = c || {};
    c[N.g.mc] = a;
    return Iy("event", b, c);
  }
  function Iy() {
    return arguments;
  }
  var Ly = function () {
    this.messages = [];
    this.j = [];
  };
  Ly.prototype.enqueue = function (a, b, c) {
    var d = this.messages.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    var e = Object.assign({}, c, {
        eventId: b,
        priorityId: d,
        fromContainerExecution: !0,
      }),
      f = { message: a, notBeforeEventId: b, priorityId: d, messageContext: e };
    this.messages.push(f);
    for (var g = 0; g < this.j.length; g++)
      try {
        this.j[g](f);
      } catch (k) {}
  };
  Ly.prototype.listen = function (a) {
    this.j.push(a);
  };
  Ly.prototype.get = function () {
    for (var a = {}, b = 0; b < this.messages.length; b++) {
      var c = this.messages[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  Ly.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.messages.length; d++) {
      var e = this.messages[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.messages = c;
    return b;
  };
  function My(a, b, c) {
    c.eventMetadata = c.eventMetadata || {};
    c.eventMetadata.source_canonical_id = Mf.canonicalContainerId;
    Ny().enqueue(a, b, c);
  }
  function Oy() {
    var a = gz;
    Ny().listen(a);
  }
  function Ny() {
    var a = Ji.mb;
    a || ((a = new Ly()), (Ji.mb = a));
    return a;
  }
  var hz = {},
    iz = {};
  function jz(a, b) {
    for (
      var c = [], d = [], e = {}, f = 0;
      f < a.length;
      e = { ki: void 0, Th: void 0 }, f++
    ) {
      var g = a[f];
      if (g.indexOf("-") >= 0) {
        if (((e.ki = Vl(g, b)), e.ki)) {
          var k = kk();
          bb(
            k,
            (function (r) {
              return function (u) {
                return r.ki.destinationId === u;
              };
            })(e)
          )
            ? c.push(g)
            : d.push(g);
        }
      } else {
        var m = hz[g] || [];
        e.Th = {};
        m.forEach(
          (function (r) {
            return function (u) {
              r.Th[u] = !0;
            };
          })(e)
        );
        for (var n = hk(), p = 0; p < n.length; p++)
          if (e.Th[n[p]]) {
            c = c.concat(kk());
            break;
          }
        var q = iz[g] || [];
        q.length && (c = c.concat(q));
      }
    }
    return { Rm: c, Um: d };
  }
  function kz(a) {
    fb(hz, function (b, c) {
      var d = c.indexOf(a);
      d >= 0 && c.splice(d, 1);
    });
  }
  function lz(a) {
    fb(iz, function (b, c) {
      var d = c.indexOf(a);
      d >= 0 && c.splice(d, 1);
    });
  }
  var mz = "HA GF G UA AW DC MC".split(" "),
    nz = !1,
    oz = !1,
    pz = !1,
    qz = !1;
  function rz(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: $i() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var sz = void 0,
    tz = void 0;
  function uz(a, b, c) {
    var d = Rc(a, null);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return b[f] !== void 0;
    }) && T(136);
    var e = Rc(b, null);
    Rc(c, e);
    My(Jy(hk()[0], e), a.eventId, d);
  }
  function vz(a) {
    for (var b = l([N.g.yd, N.g.Sb]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = (a && a[d]) || Xm.j[d];
      if (e) return e;
    }
  }
  var wz = [
      N.g.yd,
      N.g.Sb,
      N.g.Gc,
      N.g.wb,
      N.g.Bb,
      N.g.Ca,
      N.g.za,
      N.g.La,
      N.g.Qa,
      N.g.xb,
    ],
    xz = {
      config: function (a, b) {
        var c = rz(a, b);
        if (!(a.length < 2) && z(a[1])) {
          var d = {};
          if (a.length > 2) {
            if ((a[2] !== void 0 && !Qc(a[2])) || a.length > 3) return;
            d = a[2];
          }
          var e = Vl(a[1], b.isGtmEvent);
          if (e) {
            var f, g, k;
            a: {
              if (!ck.Ge) {
                var m = pk(qk());
                if (Bk(m)) {
                  var n = m.parent,
                    p = n.isDestination;
                  k = { bn: pk(n), Qm: p };
                  break a;
                }
              }
              k = void 0;
            }
            var q = k;
            q && ((f = q.bn), (g = q.Qm));
            by(c.eventId, "gtag.config");
            var r = e.destinationId,
              u = e.id !== r;
            if (u ? kk().indexOf(r) === -1 : hk().indexOf(r) === -1) {
              if (!b.inheritParentConfig && !d[N.g.Ob]) {
                var v = vz(d);
                if (u)
                  yx(r, v, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
                else if (f !== void 0 && f.containers.indexOf(r) !== -1) {
                  var t = d;
                  sz ? uz(b, t, sz) : tz || (tz = Rc(t, null));
                } else
                  vx(r, v, !0, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            } else {
              if (f && (T(128), g && T(130), b.inheritParentConfig)) {
                var w;
                var x = d;
                tz
                  ? (uz(b, tz, x), (w = !1))
                  : ((!x[N.g.oc] && Ni && sz) || (sz = Rc(x, null)), (w = !0));
                w && f.containers && f.containers.join(",");
                return;
              }
              var y = d;
              if (!pz && ((pz = !0), oz))
                for (var B = l(wz), C = B.next(); !C.done; C = B.next())
                  if (y.hasOwnProperty(C.value)) {
                    kl("erc");
                    break;
                  }
              Tj && !dk && (Gy === 1 && (Fk.mcc = !1), (Gy = 2));
              hl = !0;
              if (Ni && !u && !d[N.g.oc]) {
                var D = qz;
                qz = !0;
                if (D) return;
              }
              nz || T(43);
              if (!b.noTargetGroup)
                if (u) {
                  lz(e.id);
                  var H = e.id,
                    J = d[N.g.ve] || "default";
                  J = String(J).split(",");
                  for (var F = 0; F < J.length; F++) {
                    var S = iz[J[F]] || [];
                    iz[J[F]] = S;
                    S.indexOf(H) < 0 && S.push(H);
                  }
                } else {
                  kz(e.id);
                  var M = e.id,
                    Z = d[N.g.ve] || "default";
                  Z = Z.toString().split(",");
                  for (var ca = 0; ca < Z.length; ca++) {
                    var da = hz[Z[ca]] || [];
                    hz[Z[ca]] = da;
                    da.indexOf(M) < 0 && da.push(M);
                  }
                }
              delete d[N.g.ve];
              var Y = b.eventMetadata || {};
              Y.hasOwnProperty("is_external_event") ||
                (Y.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = Y;
              delete d[N.g.rd];
              for (var Q = u ? [e.id] : kk(), oa = 0; oa < Q.length; oa++) {
                var na = d,
                  ea = Q[oa],
                  ua = Rc(b, null),
                  Ra = Vl(ea, ua.isGtmEvent);
                Ra && Xm.push("config", [na], Ra, ua);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (a.length === 3) {
          T(39);
          var c = rz(a, b),
            d = a[1],
            e = a[2];
          b.fromContainerExecution || (e[N.g.O] && T(139), e[N.g.xa] && T(140));
          d === "default"
            ? yl(e)
            : d === "update"
            ? Al(e, c)
            : d === "declare" && b.fromContainerExecution && xl(e);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(a.length < 2) && z(c)) {
          var d = void 0;
          if (a.length > 2) {
            if ((!Qc(a[2]) && a[2] !== void 0) || a.length > 3) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = Rc(e, null)),
            e[N.g.rd] && (g.eventCallback = e[N.g.rd]),
            e[N.g.se] && (g.eventTimeout = e[N.g.se]));
          var k = rz(a, b),
            m = k.eventId,
            n = k.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if (c === "optimize.callback")
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[N.g.mc];
          r === void 0 &&
            ((r = lj(N.g.mc, 2)), r === void 0 && (r = "default"));
          if (z(r) || Array.isArray(r)) {
            var u;
            u = b.isGtmEvent
              ? z(r)
                ? [r]
                : r
              : r.toString().replace(/\s+/g, "").split(",");
            var v = jz(u, b.isGtmEvent),
              t = v.Rm,
              w = v.Um;
            if (w.length)
              for (var x = vz(q), y = 0; y < w.length; y++) {
                var B = Vl(w[y], b.isGtmEvent);
                B &&
                  yx(B.destinationId, x, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = Wl(t, b.isGtmEvent);
          } else p = void 0;
          var C = p;
          if (C) {
            var D;
            !C.length ||
              ((D = b.eventMetadata) == null ? 0 : D.em_event) ||
              (oz = !0);
            by(m, c);
            for (var H = [], J = 0; J < C.length; J++) {
              var F = C[J],
                S = Rc(b, null);
              if (mz.indexOf(rk(F.prefix)) !== -1) {
                var M = Rc(d, null),
                  Z = S.eventMetadata || {};
                Z.hasOwnProperty("is_external_event") ||
                  (Z.is_external_event = !S.fromContainerExecution);
                S.eventMetadata = Z;
                delete M[N.g.rd];
                Ym(c, M, F.id, S);
                Tj && !dk && Gy === 0 && (Hk("mcc", "1"), (Gy = 1));
                hl = !0;
              }
              H.push(F.id);
            }
            g.eventModel = g.eventModel || {};
            C.length > 0
              ? (g.eventModel[N.g.mc] = H.join())
              : delete g.eventModel[N.g.mc];
            nz || T(43);
            b.noGtmEvent === void 0 &&
              b.eventMetadata &&
              b.eventMetadata.syn_or_mod &&
              (b.noGtmEvent = !0);
            g.eventModel[N.g.kc] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        T(53);
        if (a.length === 4 && z(a[1]) && z(a[2]) && Za(a[3])) {
          var c = Vl(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            nz || T(43);
            var f = vz();
            if (
              !bb(kk(), function (k) {
                return c.destinationId === k;
              })
            )
              yx(c.destinationId, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (mz.indexOf(rk(c.prefix)) !== -1) {
              hl = !0;
              rz(a, b);
              var g = {};
              Rc(((g[N.g.zb] = d), (g[N.g.Mb] = e), g), null);
              Zm(
                d,
                function (k) {
                  G(function () {
                    e(k);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (a.length === 2 && a[1].getTime) {
          nz = !0;
          var c = rz(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function (a) {
        if (a.length === 3 && z(a[1]) && Za(a[2])) {
          if ((Jf(a[1], a[2]), T(74), a[1] === "all")) {
            T(75);
            var b = !1;
            try {
              b = a[2](lk(), "unknown", {});
            } catch (c) {}
            b || T(76);
          }
        } else T(73);
      },
      set: function (a, b) {
        var c = void 0;
        a.length === 2 && Qc(a[1])
          ? (c = Rc(a[1], null))
          : a.length === 3 &&
            z(a[1]) &&
            ((c = {}),
            Qc(a[2]) || Array.isArray(a[2])
              ? (c[a[1]] = Rc(a[2], null))
              : (c[a[1]] = a[2]));
        if (c) {
          var d = rz(a, b),
            e = d.eventId,
            f = d.priorityId;
          Rc(c, null);
          var g = Rc(c, null);
          Xm.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    yz = { policy: !0 };
  var Az = function (a) {
    if (zz(a)) return a;
    this.value = a;
  };
  Az.prototype.getUntrustedMessageValue = function () {
    return this.value;
  };
  var zz = function (a) {
    return !a || Oc(a) !== "object" || Qc(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  Az.prototype.getUntrustedMessageValue = Az.prototype.getUntrustedMessageValue;
  var Bz = !1,
    Cz = [];
  function Dz() {
    if (!Bz) {
      Bz = !0;
      for (var a = 0; a < Cz.length; a++) G(Cz[a]);
    }
  }
  function Ez(a) {
    Bz ? G(a) : Cz.push(a);
  }
  var Fz = 0,
    Gz = {},
    Hz = [],
    Iz = [],
    Jz = !1,
    Kz = !1;
  function Lz(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  function Mz(a, b, c) {
    a.eventCallback = b;
    c && (a.eventTimeout = c);
    return Nz(a);
  }
  function Oz(a, b) {
    if (!$a(b) || b < 0) b = 0;
    var c = Ji[Ii.rb],
      d = 0,
      e = !1,
      f = void 0;
    f = A.setTimeout(function () {
      e || ((e = !0), a());
      f = void 0;
    }, b);
    return function () {
      var g = c ? c.subscribers : 1;
      ++d === g &&
        (f && (A.clearTimeout(f), (f = void 0)), e || (a(), (e = !0)));
    };
  }
  function Pz(a, b) {
    var c = a._clear || b.overwriteModelFields;
    fb(a, function (e, f) {
      e !== "_clear" && (c && oj(e), oj(e, f));
    });
    Wi || (Wi = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    typeof d !== "number" &&
      ((d = $i()), (a["gtm.uniqueEventId"] = d), oj("gtm.uniqueEventId", d));
    return By(a);
  }
  function Qz(a) {
    if (a == null || typeof a !== "object") return !1;
    if (a.event) return !0;
    if (gb(a)) {
      var b = a[0];
      if (b === "config" || b === "event" || b === "js" || b === "get")
        return !0;
    }
    return !1;
  }
  function Rz() {
    var a;
    if (Iz.length) a = Iz.shift();
    else if (Hz.length) a = Hz.shift();
    else return;
    var b;
    var c = a;
    if (Jz || !Qz(c.message)) b = c;
    else {
      Jz = !0;
      var d = c.message["gtm.uniqueEventId"];
      typeof d !== "number" && (d = c.message["gtm.uniqueEventId"] = $i());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        k = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      Hz.unshift(k, c);
      Tj && Lk();
      b = f;
    }
    return b;
  }
  function Sz() {
    for (var a = !1, b; !Kz && (b = Rz()); ) {
      Kz = !0;
      delete ij.eventModel;
      kj();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (d == null) Kz = !1;
      else {
        e.fromContainerExecution && pj();
        try {
          if (Za(d))
            try {
              d.call(mj);
            } catch (v) {}
          else if (Array.isArray(d)) {
            if (z(d[0])) {
              var f = d[0].split("."),
                g = f.pop(),
                k = d.slice(1),
                m = lj(f.join("."), 2);
              if (m != null)
                try {
                  m[g].apply(m, k);
                } catch (v) {}
            }
          } else {
            var n = void 0;
            if (gb(d))
              a: {
                if (d.length && z(d[0])) {
                  var p = xz[d[0]];
                  if (p && (!e.fromContainerExecution || !yz[d[0]])) {
                    n = p(d, e);
                    break a;
                  }
                }
                n = void 0;
              }
            else n = d;
            n && (a = Pz(n, e) || a);
          }
        } finally {
          e.fromContainerExecution && kj(!0);
          var q = d["gtm.uniqueEventId"];
          if (typeof q === "number") {
            for (var r = Gz[String(q)] || [], u = 0; u < r.length; u++)
              Iz.push(Tz(r[u]));
            r.length && Iz.sort(Lz);
            delete Gz[String(q)];
            q > Fz && (Fz = q);
          }
          Kz = !1;
        }
      }
    }
    return !a;
  }
  function Uz() {
    if (R(91)) {
      var a = Vz();
    }
    var b = Sz();
    if (R(91)) {
    }
    try {
      var c = lk(),
        d = A[Ii.rb].hide;
      if (d && d[c] !== void 0 && d.end) {
        d[c] = !1;
        var e = !0,
          f;
        for (f in d)
          if (d.hasOwnProperty(f) && d[f] === !0) {
            e = !1;
            break;
          }
        e && (d.end(), (d.end = null));
      }
    } catch (g) {}
    return b;
  }
  function gz(a) {
    if (Fz < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      Gz[b] = Gz[b] || [];
      Gz[b].push(a);
    } else
      Iz.push(Tz(a)),
        Iz.sort(Lz),
        G(function () {
          Kz || Sz();
        });
  }
  function Tz(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  function Wz() {
    function a(f) {
      var g = {};
      if (zz(f)) {
        var k = f;
        f = zz(k) ? k.getUntrustedMessageValue() : void 0;
        g.fromContainerExecution = !0;
      }
      return { message: f, messageContext: g };
    }
    var b = gc(Ii.rb, []),
      c = (Ji[Ii.rb] = Ji[Ii.rb] || {});
    c.pruned === !0 && T(83);
    Gz = Ny().get();
    Oy();
    Ex(function () {
      if (!c.gtmDom) {
        c.gtmDom = !0;
        var f = {};
        b.push(((f.event = "gtm.dom"), f));
      }
    });
    Ez(function () {
      if (!c.gtmLoad) {
        c.gtmLoad = !0;
        var f = {};
        b.push(((f.event = "gtm.load"), f));
      }
    });
    c.subscribers = (c.subscribers || 0) + 1;
    var d = b.push;
    b.push = function () {
      var f;
      if (Ji.SANDBOXED_JS_SEMAPHORE > 0) {
        f = [];
        for (var g = 0; g < arguments.length; g++) f[g] = new Az(arguments[g]);
      } else f = [].slice.call(arguments, 0);
      var k = f.map(function (q) {
        return a(q);
      });
      Hz.push.apply(Hz, k);
      var m = d.apply(b, f),
        n = Math.max(100, Number("1000") || 300);
      if (this.length > n)
        for (T(4), c.pruned = !0; this.length > n; ) this.shift();
      var p = typeof m !== "boolean" || m;
      return Sz() && p;
    };
    var e = b.slice(0).map(function (f) {
      return a(f);
    });
    Hz.push.apply(Hz, e);
    if (Vz()) {
      if (R(91)) {
      }
      G(Uz);
    }
  }
  var Vz = function () {
      var a = !0;
      return a;
    },
    Nz = function (a) {
      return A[Ii.rb].push(a);
    };
  function Xz(a) {
    if (a == null || a.length === 0) return !1;
    var b = Number(a),
      c = nb();
    return b < c + 3e5 && b > c - 9e5;
  }
  function Yz(a) {
    return a && a.indexOf("pending:") === 0 ? Xz(a.substr(8)) : !1;
  }
  var Zz = /^(https?:)?\/\//;
  function tA() {}
  var uA = function () {};
  uA.prototype.toString = function () {
    return "undefined";
  };
  var vA = new uA();
  var xA = function () {
      (Ji.rm = Ji.rm || {})[nk()] = function (a) {
        if (wA.hasOwnProperty(a)) return wA[a];
      };
    },
    AA = function (a, b, c) {
      if (a instanceof yA) {
        var d = a,
          e = d.resolve,
          f = b,
          g = String($i());
        zA[g] = [f, c];
        a = e.call(d, g);
        b = Ya;
      }
      return { wk: a, onSuccess: b };
    },
    BA = function (a) {
      var b = a ? 0 : 1;
      return function (c) {
        T(a ? 134 : 135);
        var d = zA[c];
        if (d && typeof d[b] === "function") d[b]();
        zA[c] = void 0;
      };
    },
    yA = function (a) {
      this.valueOf = this.toString;
      this.resolve = function (b) {
        for (var c = [], d = 0; d < a.length; d++)
          c.push(a[d] === vA ? b : a[d]);
        return c.join("");
      };
    };
  yA.prototype.toString = function () {
    return this.resolve("undefined");
  };
  var wA = {},
    zA = {};
  function CA(a, b) {
    function c(g) {
      var k = Ej(g),
        m = yj(k, "protocol"),
        n = yj(k, "host", !0),
        p = yj(k, "port"),
        q = yj(k, "path").toLowerCase().replace(/\/$/, "");
      if (
        m === void 0 ||
        (m === "http" && p === "80") ||
        (m === "https" && p === "443")
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function DA(a) {
    return EA(a) ? 1 : 0;
  }
  function EA(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = Rc(a, {});
        Rc({ arg1: c[d], any_of: void 0 }, e);
        if (DA(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return lg(b, c);
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < hg.length; g++) {
                var k = hg[g];
                if (b[k] != null) {
                  f = b[k](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return ig(b, c);
      case "_eq":
        return mg(b, c);
      case "_ge":
        return ng(b, c);
      case "_gt":
        return pg(b, c);
      case "_lc":
        return String(b).split(",").indexOf(String(c)) >= 0;
      case "_le":
        return og(b, c);
      case "_lt":
        return qg(b, c);
      case "_re":
        return kg(b, c, a.ignore_case);
      case "_sw":
        return rg(b, c);
      case "_um":
        return CA(b, c);
    }
    return !1;
  }
  function FA() {
    var a;
    a = a === void 0 ? "" : a;
    var b, c;
    return (
      (b = data) == null ? 0 : (c = b.blob) == null ? 0 : c.hasOwnProperty(1)
    )
      ? String(data.blob[1])
      : a;
  }
  function GA() {
    var a = [
      ["cv", R(124) ? FA() : "609"],
      ["rv", Ii.zh],
      [
        "tc",
        hf.filter(function (b) {
          return b;
        }).length,
      ],
    ];
    Ii.Je && a.push(["x", Ii.Je]);
    dj() && a.push(["tag_exp", dj()]);
    return a;
  }
  var HA = {},
    IA = {};
  function JA() {
    var a = 0;
    return function (b) {
      switch (b) {
        case 1:
          a |= 1;
          break;
        case 2:
          a |= 2;
          break;
        case 3:
          a |= 4;
      }
      return a;
    };
  }
  function KA(a, b, c, d) {
    if (Sj) {
      var e = String(c) + b;
      HA[a] = HA[a] || [];
      HA[a].push(e);
      IA[a] = IA[a] || [];
      IA[a].push(d + b);
    }
  }
  function LA(a) {
    var b = a.eventId,
      c = a.Wc,
      d = [],
      e = HA[b] || [];
    e.length && d.push(["hf", e.join(".")]);
    var f = IA[b] || [];
    f.length && d.push(["ht", f.join(".")]);
    c && (delete HA[b], delete IA[b]);
    return d;
  }
  function MA() {
    return !1;
  }
  function NA() {
    var a = {};
    return function (b, c, d) {};
  }
  function OA() {
    var a = PA;
    return function (b, c, d) {
      var e = d && d.event;
      (b === "__html" && R(95)) || QA(c);
      var f = sb(b, "__cvt_") ? void 0 : 1,
        g = new La();
      fb(c, function (r, u) {
        var v = dd(u, void 0, f);
        v === void 0 && u !== void 0 && T(44);
        g.set(r, v);
      });
      a.j.j.C = Bf();
      var k = {
        nk: Qf(b),
        eventId: e == null ? void 0 : e.id,
        priorityId: e !== void 0 ? e.priorityId : void 0,
        Ne:
          e !== void 0
            ? function (r) {
                e.rc.Ne(r);
              }
            : void 0,
        ob: function () {
          return b;
        },
        log: function () {},
        im: {
          index: d == null ? void 0 : d.index,
          type: d == null ? void 0 : d.type,
          name: d == null ? void 0 : d.name,
        },
        on: !!hx(b, 3),
        originalEventData: e == null ? void 0 : e.originalEventData,
      };
      e &&
        e.cachedModelValues &&
        (k.cachedModelValues = {
          gtm: e.cachedModelValues.gtm,
          ecommerce: e.cachedModelValues.ecommerce,
        });
      if (MA()) {
        var m = NA(),
          n,
          p;
        k.Ya = {
          zi: [],
          Oe: {},
          Fb: function (r, u, v) {
            u === 1 && (n = r);
            u === 7 && (p = v);
            m(r, u, v);
          },
          sg: $g(),
        };
        k.log = function (r) {
          var u = ya.apply(1, arguments);
          n && m(n, 4, { level: r, source: p, message: u });
        };
      }
      var q = Be(a, k, [b, g]);
      a.j.j.C = void 0;
      q instanceof Ba && q.type === "return" && (q = q.data);
      return I(q, void 0, f);
    };
  }
  function QA(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    Za(b) &&
      (a.gtmOnSuccess = function () {
        G(b);
      });
    Za(c) &&
      (a.gtmOnFailure = function () {
        G(c);
      });
  }
  function RA(a) {}
  RA.F = "internal.addAdsClickIds";
  function SA(a, b) {
    var c = this;
  }
  SA.T = "addConsentListener";
  var TA = !1;
  function UA(a) {
    for (var b = 0; b < a.length; ++b)
      if (TA)
        try {
          a[b]();
        } catch (c) {
          T(77);
        }
      else a[b]();
  }
  function VA(a, b, c) {
    var d = this,
      e;
    return e;
  }
  VA.F = "internal.addDataLayerEventListener";
  function WA(a, b, c) {}
  WA.T = "addDocumentEventListener";
  function XA(a, b, c, d) {}
  XA.T = "addElementEventListener";
  function YA(a) {
    return a.D.j;
  }
  function ZA(a) {}
  ZA.T = "addEventCallback";
  var $A = function (a) {
      return typeof a === "string" ? a : String($i());
    },
    cB = function (a, b) {
      aB(a, "init", !1) || (bB(a, "init", !0), b());
    },
    aB = function (a, b, c) {
      var d = dB(a);
      return ob(d, b, c);
    },
    eB = function (a, b, c, d) {
      var e = dB(a),
        f = ob(e, b, d);
      e[b] = c(f);
    },
    bB = function (a, b, c) {
      dB(a)[b] = c;
    },
    dB = function (a) {
      Ji.hasOwnProperty("autoEventsSettings") || (Ji.autoEventsSettings = {});
      var b = Ji.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    fB = function (a, b, c) {
      var d = {
        event: b,
        "gtm.element": a,
        "gtm.elementClasses": Cc(a, "className"),
        "gtm.elementId": a.for || tc(a, "id") || "",
        "gtm.elementTarget": a.formTarget || Cc(a, "target") || "",
      };
      c && (d["gtm.triggers"] = c.join(","));
      d["gtm.elementUrl"] =
        (a.attributes && a.attributes.formaction ? a.formAction : "") ||
        a.action ||
        Cc(a, "href") ||
        a.src ||
        a.code ||
        a.codebase ||
        "";
      return d;
    };
  function oB(a) {}
  oB.F = "internal.addFormAbandonmentListener";
  function pB(a, b, c, d) {}
  pB.F = "internal.addFormData";
  var qB = {},
    rB = [],
    sB = {},
    tB = 0,
    uB = 0;
  function BB(a, b) {}
  BB.F = "internal.addFormInteractionListener";
  function IB(a, b) {}
  IB.F = "internal.addFormSubmitListener";
  function NB(a) {}
  NB.F = "internal.addGaSendListener";
  function OB(a) {
    if (!a) return {};
    var b = a.im;
    return Gx(b.type, b.index, b.name);
  }
  function PB(a) {
    return a ? { originatingEntity: OB(a) } : {};
  }
  var RB = function (a, b, c) {
      QB().updateZone(a, b, c);
    },
    TB = function (a, b, c, d, e, f) {
      var g = QB();
      c = c && rb(c, SB);
      for (var k = g.createZone(a, c), m = 0; m < b.length; m++) {
        var n = String(b[m]);
        if (g.registerChild(n, lk(), k)) {
          var p = n,
            q = a,
            r = d,
            u = e,
            v = f;
          if (sb(p, "GTM-"))
            vx(p, void 0, !1, { source: 1, fromContainerExecution: !0 });
          else {
            var t = Iy("js", mb());
            vx(p, void 0, !0, { source: 1, fromContainerExecution: !0 });
            var w = { originatingEntity: u, inheritParentConfig: v };
            R(130) || My(t, q, w);
            My(Jy(p, r), q, w);
          }
        }
      }
      return k;
    },
    QB = function () {
      var a = Ji.zones;
      a || (a = Ji.zones = new UB());
      return a;
    },
    VB = {
      zone: 1,
      cn: 1,
      css: 1,
      ew: 1,
      eq: 1,
      ge: 1,
      gt: 1,
      lc: 1,
      le: 1,
      lt: 1,
      re: 1,
      sw: 1,
      um: 1,
    },
    SB = {
      cl: ["ecl"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
    },
    UB = function () {
      this.j = {};
      this.C = {};
      this.H = 0;
    };
  h = UB.prototype;
  h.isActive = function (a, b) {
    for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
    if (!c) return !0;
    if (!this.isActive([c.ji], b)) return !1;
    for (var e = 0; e < c.yf.length; e++) if (this.C[c.yf[e]].Ld(b)) return !0;
    return !1;
  };
  h.getIsAllowedFn = function (a, b) {
    if (!this.isActive(a, b))
      return function () {
        return !1;
      };
    for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
    if (!c)
      return function () {
        return !0;
      };
    for (var e = [], f = 0; f < c.yf.length; f++) {
      var g = this.C[c.yf[f]];
      g.Ld(b) && e.push(g);
    }
    if (!e.length)
      return function () {
        return !1;
      };
    var k = this.getIsAllowedFn([c.ji], b);
    return function (m, n) {
      n = n || [];
      if (!k(m, n)) return !1;
      for (var p = 0; p < e.length; ++p) if (e[p].H(m, n)) return !0;
      return !1;
    };
  };
  h.unregisterChild = function (a) {
    for (var b = 0; b < a.length; b++) delete this.j[a[b]];
  };
  h.createZone = function (a, b) {
    var c = String(++this.H);
    this.C[c] = new WB(a, b);
    return c;
  };
  h.updateZone = function (a, b, c) {
    var d = this.C[a];
    d && d.K(b, c);
  };
  h.registerChild = function (a, b, c) {
    var d = this.j[a];
    if ((!d && Ji[a]) || (!d && wk(a)) || (d && d.ji !== b)) return !1;
    if (d) return d.yf.push(c), !1;
    this.j[a] = { ji: b, yf: [c] };
    return !0;
  };
  var WB = function (a, b) {
    this.C = null;
    this.j = [{ eventId: a, Ld: !0 }];
    if (b) {
      this.C = {};
      for (var c = 0; c < b.length; c++) this.C[b[c]] = !0;
    }
  };
  WB.prototype.K = function (a, b) {
    var c = this.j[this.j.length - 1];
    a <= c.eventId || (c.Ld !== b && this.j.push({ eventId: a, Ld: b }));
  };
  WB.prototype.Ld = function (a) {
    for (var b = this.j.length - 1; b >= 0; b--)
      if (this.j[b].eventId <= a) return this.j[b].Ld;
    return !1;
  };
  WB.prototype.H = function (a, b) {
    b = b || [];
    if (!this.C || VB[a] || this.C[a]) return !0;
    for (var c = 0; c < b.length; ++c) if (this.C[b[c]]) return !0;
    return !1;
  };
  function XB(a) {
    var b = Ji.zones;
    return b
      ? b.getIsAllowedFn(hk(), a)
      : function () {
          return !0;
        };
  }
  function YB() {
    kx(nk(), function (a) {
      var b = a.originalEventData["gtm.uniqueEventId"],
        c = Ji.zones;
      return c ? c.isActive(hk(), b) : !0;
    });
    ix(nk(), function (a) {
      var b, c;
      b = a.entityId;
      c = a.securityGroups;
      return XB(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c);
    });
  }
  var ZB = function (a, b) {
    this.tagId = a;
    this.Qe = b;
  };
  function $B(a, b) {
    var c = this,
      d;
    var e = function (v) {
      ix(
        v,
        function (t) {
          for (
            var w = jx().getExternalRestrictions(0, nk()),
              x = l(w),
              y = x.next();
            !y.done;
            y = x.next()
          ) {
            var B = y.value;
            if (!B(t)) return !1;
          }
          return !0;
        },
        !0
      );
      kx(
        v,
        function (t) {
          for (
            var w = jx().getExternalRestrictions(1, nk()),
              x = l(w),
              y = x.next();
            !y.done;
            y = x.next()
          ) {
            var B = y.value;
            if (!B(t)) return !1;
          }
          return !0;
        },
        !0
      );
      k && k(new ZB(a, v));
    };
    K(this.getName(), ["tagId:!string", "options:?PixieMap"], arguments);
    var f = I(b, this.D, 1) || {},
      g = f.firstPartyUrl,
      k = f.onLoad,
      m = f.loadByDestination === !0,
      n = f.isGtmEvent === !0,
      p = f.siloed === !0;
    UA([
      function () {
        return L(c, "load_google_tags", a, g);
      },
    ]);
    if (m) {
      if (xk(a)) return;
    } else if (wk(a)) return;
    var q = 6,
      r = YA(this);
    n && (q = 7);
    r.ob() === "__zone" && (q = 1);
    var u = { source: q, fromContainerExecution: !0, siloed: p };
    m ? yx(a, g, u, e) : vx(a, g, !sb(a, "GTM-"), u, e);
    k &&
      r.ob() === "__zone" &&
      TB(Number.MIN_SAFE_INTEGER, [a], null, {}, OB(YA(this)));
    d = p ? jk(a) : a;
    return d;
  }
  $B.F = "internal.loadGoogleTag";
  function aC(a) {
    return new Wc("", function (b) {
      var c = this.evaluate(b);
      if (c instanceof Wc)
        return new Wc("", function () {
          var d = ya.apply(0, arguments),
            e = this,
            f = Rc(YA(this), null);
          f.eventId = a.eventId;
          f.priorityId = a.priorityId;
          f.originalEventData = a.originalEventData;
          var g = d.map(function (m) {
              return e.evaluate(m);
            }),
            k = Ha(this.D);
          k.j = f;
          return c.qb.apply(c, [k].concat(ta(g)));
        });
    });
  }
  function bC(a, b, c) {
    var d = this;
  }
  bC.F = "internal.addGoogleTagRestriction";
  var cC = {},
    dC = [];
  function kC(a, b) {}
  kC.F = "internal.addHistoryChangeListener";
  function lC(a, b, c) {}
  lC.T = "addWindowEventListener";
  function mC(a, b) {
    K(this.getName(), ["toPath:!string", "fromPath:!string"], arguments);
    L(this, "access_globals", "write", a);
    L(this, "access_globals", "read", b);
    var c = a.split("."),
      d = b.split("."),
      e = [A, E],
      f = ub(c, e),
      g = ub(d, e);
    if (f === void 0 || g === void 0) return !1;
    f[c[c.length - 1]] = g[d[d.length - 1]];
    return !0;
  }
  mC.T = "aliasInWindow";
  function nC(a, b, c) {}
  nC.F = "internal.appendRemoteConfigParameter";
  function oC(a) {
    var b;
    K(this.getName(), ["path:!string"], [a]);
    L(this, "access_globals", "execute", a);
    for (
      var c = a.split("."), d = A, e = d[c[0]], f = 1;
      e && f < c.length;
      f++
    )
      if (((d = e), (e = e[c[f]]), d === A || d === E)) return;
    if (Oc(e) !== "function") return;
    for (var g = [], k = 1; k < arguments.length; k++)
      g.push(I(arguments[k], this.D, 2));
    var m = (0, this.D.H)(e, d, g);
    b = dd(m, this.D, 2);
    b === void 0 && m !== void 0 && T(45);
    return b;
  }
  oC.T = "callInWindow";
  function pC(a) {}
  pC.T = "callLater";
  function qC(a) {}
  qC.F = "callOnDomReady";
  function rC(a) {}
  rC.F = "callOnWindowLoad";
  function sC(a, b) {
    var c;
    return c;
  }
  sC.F = "internal.computeGtmParameter";
  function tC(a, b) {
    var c = this;
  }
  tC.F = "internal.consentScheduleFirstTry";
  function uC(a, b) {
    var c = this;
  }
  uC.F = "internal.consentScheduleRetry";
  function vC(a) {
    var b;
    return b;
  }
  vC.F = "internal.copyFromCrossContainerData";
  function wC(a, b) {
    var c;
    K(this.getName(), ["key:!string", "dataLayerVersion:?number"], arguments),
      L(this, "read_data_layer", a),
      (c = (b || 2) !== 2 ? lj(a, 1) : nj(a, [A, E]));
    var d = dd(c, this.D, sb(YA(this).ob(), "__cvt_") ? 2 : 1);
    d === void 0 && c !== void 0 && T(45);
    return d;
  }
  wC.T = "copyFromDataLayer";
  function xC(a) {
    var b = void 0;
    return b;
  }
  xC.F = "internal.copyFromDataLayerCache";
  function yC(a) {
    var b;
    K(this.getName(), ["path:!string"], arguments);
    L(this, "access_globals", "read", a);
    var c = a.split("."),
      d = ub(c, [A, E]);
    if (!d) return;
    var e = d[c[c.length - 1]];
    b = dd(e, this.D, 2);
    b === void 0 && e !== void 0 && T(45);
    return b;
  }
  yC.T = "copyFromWindow";
  function zC(a) {
    var b = void 0;
    K(this.getName(), ["key:!string"], arguments);
    L(this, "unsafe_access_globals", a);
    var c = a.split(".");
    b = A[c.shift()];
    for (var d = 0; d < c.length; d++) b = b && b[c[d]];
    return dd(b, this.D, 1);
  }
  zC.F = "internal.copyKeyFromWindow";
  var AC = function (a, b, c) {
    this.eventName = b;
    this.m = c;
    this.j = {};
    this.isAborted = !1;
    this.target = a;
    this.metadata = Rc(c.eventMetadata || {}, {});
  };
  AC.prototype.copyToHitData = function (a, b, c) {
    var d = U(this.m, a);
    d === void 0 && (d = b);
    if (d !== void 0 && c !== void 0 && z(d) && R(83))
      try {
        d = c(d);
      } catch (e) {}
    d !== void 0 && (this.j[a] = d);
  };
  var Rt = function (a, b, c) {
    var d = Ts(a.target.destinationId);
    return d && d[b] !== void 0 ? d[b] : c;
  };
  function BC(a, b) {
    var c;
    return c;
  }
  BC.F = "internal.copyPreHit";
  function CC(a, b) {
    var c = null;
    K(this.getName(), ["functionPath:!string", "arrayPath:!string"], arguments);
    L(this, "access_globals", "readwrite", a);
    L(this, "access_globals", "readwrite", b);
    var d = [A, E],
      e = a.split("."),
      f = ub(e, d),
      g = e[e.length - 1];
    if (f === void 0) throw Error("Path " + a + " does not exist.");
    var k = f[g];
    if (k && !Za(k)) return null;
    if (k) return dd(k, this.D, 2);
    var m;
    k = function () {
      if (!Za(m.push))
        throw Error("Object at " + b + " in window is not an array.");
      m.push.call(m, arguments);
    };
    f[g] = k;
    var n = b.split("."),
      p = ub(n, d),
      q = n[n.length - 1];
    if (p === void 0) throw Error("Path " + n + " does not exist.");
    m = p[q];
    m === void 0 && ((m = []), (p[q] = m));
    c = function () {
      k.apply(k, Array.prototype.slice.call(arguments, 0));
    };
    return dd(c, this.D, 2);
  }
  CC.T = "createArgumentsQueue";
  function DC(a) {
    return dd(
      function (c) {
        var d = Px();
        if (typeof c === "function")
          d(function () {
            c(function (f, g, k) {
              var m = Px(),
                n = m && m.getByName && m.getByName(f);
              return hn(A.gaplugins.Linker, n).decorate(g, k);
            });
          });
        else if (Array.isArray(c)) {
          var e = String(c[0]).split(".");
          b[e.length === 1 ? e[0] : e[1]] && d.apply(null, c);
        } else if (c === "isLoaded") return !!d.loaded;
      },
      this.D,
      1
    );
  }
  DC.F = "internal.createGaCommandQueue";
  function EC(a) {
    K(this.getName(), ["path:!string"], arguments);
    L(this, "access_globals", "readwrite", a);
    var b = a.split("."),
      c = ub(b, [A, E]),
      d = b[b.length - 1];
    if (!c) throw Error("Path " + a + " does not exist.");
    var e = c[d];
    e === void 0 && ((e = []), (c[d] = e));
    return dd(
      function () {
        if (!Za(e.push))
          throw Error("Object at " + a + " in window is not an array.");
        e.push.apply(e, Array.prototype.slice.call(arguments, 0));
      },
      this.D,
      sb(YA(this).ob(), "__cvt_") ? 2 : 1
    );
  }
  EC.T = "createQueue";
  function FC(a, b) {
    var c = null;
    return c;
  }
  FC.F = "internal.createRegex";
  function GC() {
    var a = {};
    return a;
  }
  function HC(a) {}
  HC.F = "internal.declareConsentState";
  function IC(a) {
    var b = "";
    return b;
  }
  IC.F = "internal.decodeUrlHtmlEntities";
  function JC(a, b, c) {
    var d;
    return d;
  }
  JC.F = "internal.decorateUrlWithGaCookies";
  function KC() {}
  KC.F = "internal.deferCustomEvents";
  function LC(a) {
    var b;
    return b;
  }
  LC.F = "internal.detectUserProvidedData";
  var NC = function (a) {
      var b = wc(a, ["button", "input"], 50);
      if (!b) return null;
      var c = String(b.tagName).toLowerCase();
      if (c === "button") return b;
      if (c === "input") {
        var d = tc(b, "type");
        if (
          d === "button" ||
          d === "submit" ||
          d === "image" ||
          d === "file" ||
          d === "reset"
        )
          return b;
      }
      return null;
    },
    OC = function (a, b, c) {
      var d = c.target;
      if (d) {
        var e = aB(a, "individualElementIds", []);
        if (e.length > 0) {
          var f = fB(d, b, e);
          Nz(f);
        }
        var g = !1,
          k = aB(a, "commonButtonIds", []);
        if (k.length > 0) {
          var m = NC(d);
          if (m) {
            var n = fB(m, b, k);
            Nz(n);
            g = !0;
          }
        }
        var p = aB(a, "selectorToTriggerIds", {}),
          q;
        for (q in p)
          if (p.hasOwnProperty(q)) {
            var r = g
              ? p[q].filter(function (t) {
                  return k.indexOf(t) === -1;
                })
              : p[q];
            if (r.length !== 0) {
              var u = Oh(d, q);
              if (u) {
                var v = fB(u, b, r);
                Nz(v);
              }
            }
          }
      }
    };
  function PC(a, b) {
    K(this.getName(), ["options:?PixieMap", "triggerId:?*"], arguments);
    var c = a ? I(a) : {},
      d = ib(c.matchCommonButtons),
      e = !!c.cssSelector;
    b = $A(b);
    L(this, "detect_click_events", c.matchCommonButtons, c.cssSelector);
    var f = c.useV2EventName ? "gtm.click-v2" : "gtm.click",
      g = c.useV2EventName ? "ecl" : "cl",
      k = function (n) {
        n.push(b);
        return n;
      };
    if (e || d) {
      if ((d && eB(g, "commonButtonIds", k, []), e)) {
        var m = lb(String(c.cssSelector));
        eB(
          g,
          "selectorToTriggerIds",
          function (n) {
            n.hasOwnProperty(m) || (n[m] = []);
            k(n[m]);
            return n;
          },
          {}
        );
      }
    } else eB(g, "individualElementIds", k, []);
    cB(g, function () {
      rc(
        E,
        "click",
        function (n) {
          OC(g, f, n);
        },
        !0
      );
    });
    return b;
  }
  PC.F = "internal.enableAutoEventOnClick";
  function XC(a, b) {
    return b;
  }
  XC.F = "internal.enableAutoEventOnElementVisibility";
  function YC() {}
  YC.F = "internal.enableAutoEventOnError";
  var ZC = {},
    $C = [],
    aD = {},
    bD = 0,
    cD = 0;
  function iD(a, b) {
    var c = this;
    return b;
  }
  iD.F = "internal.enableAutoEventOnFormInteraction";
  function nD(a, b) {
    var c = this;
    return b;
  }
  nD.F = "internal.enableAutoEventOnFormSubmit";
  function sD() {
    var a = this;
  }
  sD.F = "internal.enableAutoEventOnGaSend";
  var tD = {},
    uD = [];
  function BD(a, b) {
    var c = this;
    return b;
  }
  BD.F = "internal.enableAutoEventOnHistoryChange";
  var CD = ["http://", "https://", "javascript:", "file://"];
  var DD = function (a, b) {
      if (a.which === 2 || a.ctrlKey || a.shiftKey || a.altKey || a.metaKey)
        return !1;
      var c = Cc(b, "href");
      if (
        c.indexOf(":") !== -1 &&
        !CD.some(function (k) {
          return sb(c, k);
        })
      )
        return !1;
      var d = c.indexOf("#"),
        e = Cc(b, "target");
      if ((e && e !== "_self" && e !== "_parent" && e !== "_top") || d === 0)
        return !1;
      if (d > 0) {
        var f = Bj(Ej(c)),
          g = Bj(Ej(A.location.href));
        return f !== g;
      }
      return !0;
    },
    ED = function (a, b) {
      for (
        var c = yj(
            Ej(
              (b.attributes && b.attributes.formaction ? b.formAction : "") ||
                b.action ||
                Cc(b, "href") ||
                b.src ||
                b.code ||
                b.codebase ||
                ""
            ),
            "host"
          ),
          d = 0;
        d < a.length;
        d++
      )
        try {
          if (new RegExp(a[d]).test(c)) return !1;
        } catch (e) {}
      return !0;
    },
    FD = function () {
      function a(c) {
        var d = c.target;
        if (
          d &&
          c.which !== 3 &&
          !(c.j || (c.timeStamp && c.timeStamp === b))
        ) {
          b = c.timeStamp;
          d = wc(d, ["a", "area"], 100);
          if (!d) return c.returnValue;
          var e = c.defaultPrevented || c.returnValue === !1,
            f = aB("lcl", e ? "nv.mwt" : "mwt", 0),
            g;
          g = e ? aB("lcl", "nv.ids", []) : aB("lcl", "ids", []);
          for (var k = [], m = 0; m < g.length; m++) {
            var n = g[m],
              p = aB("lcl", "aff.map", {})[n];
            (p && !ED(p, d)) || k.push(n);
          }
          if (k.length) {
            var q = DD(c, d),
              r = fB(d, "gtm.linkClick", k);
            r["gtm.elementText"] = uc(d);
            r["gtm.willOpenInNewWindow"] = !q;
            if (q && !e && f && d.href) {
              var u = !!bb(String(Cc(d, "rel") || "").split(" "), function (x) {
                  return x.toLowerCase() === "noreferrer";
                }),
                v = A[(Cc(d, "target") || "_self").substring(1)],
                t = !0,
                w = Oz(function () {
                  var x;
                  if ((x = t && v)) {
                    var y;
                    a: if (u) {
                      var B;
                      try {
                        B = new MouseEvent(c.type, { bubbles: !0 });
                      } catch (C) {
                        if (!E.createEvent) {
                          y = !1;
                          break a;
                        }
                        B = E.createEvent("MouseEvents");
                        B.initEvent(c.type, !0, !0);
                      }
                      B.j = !0;
                      c.target.dispatchEvent(B);
                      y = !0;
                    } else y = !1;
                    x = !y;
                  }
                  x && (v.location.href = Cc(d, "href"));
                }, f);
              if (Mz(r, w, f)) t = !1;
              else
                return (
                  c.preventDefault && c.preventDefault(), (c.returnValue = !1)
                );
            } else Mz(r, function () {}, f || 2e3);
            return !0;
          }
        }
      }
      var b = 0;
      rc(E, "click", a, !1);
      rc(E, "auxclick", a, !1);
    };
  function GD(a, b) {
    var c = this;
    K(this.getName(), ["dustOptions:?PixieMap", "triggerId:?*"], arguments);
    var d = I(a);
    UA([
      function () {
        L(c, "detect_link_click_events", d);
      },
    ]);
    var e = d && !!d.waitForTags,
      f = d && !!d.checkValidation,
      g = d ? d.affiliateDomains : void 0;
    b = $A(b);
    if (e) {
      var k = Number(d.waitForTagsTimeout);
      (k > 0 && isFinite(k)) || (k = 2e3);
      var m = function (p) {
        return Math.max(k, p);
      };
      eB("lcl", "mwt", m, 0);
      f || eB("lcl", "nv.mwt", m, 0);
    }
    var n = function (p) {
      p.push(b);
      return p;
    };
    eB("lcl", "ids", n, []);
    f || eB("lcl", "nv.ids", n, []);
    g &&
      eB(
        "lcl",
        "aff.map",
        function (p) {
          p[b] = g;
          return p;
        },
        {}
      );
    aB("lcl", "init", !1) || (FD(), bB("lcl", "init", !0));
    return b;
  }
  GD.F = "internal.enableAutoEventOnLinkClick";
  var HD, ID;
  function TD(a, b) {
    var c = this;
    return b;
  }
  TD.F = "internal.enableAutoEventOnScroll";
  function UD(a) {
    return function () {
      if (a.limit && a.fi >= a.limit) a.qg && A.clearInterval(a.qg);
      else {
        a.fi++;
        var b = nb();
        Nz({
          event: a.eventName,
          "gtm.timerId": a.qg,
          "gtm.timerEventNumber": a.fi,
          "gtm.timerInterval": a.interval,
          "gtm.timerLimit": a.limit,
          "gtm.timerStartTime": a.Lk,
          "gtm.timerCurrentTime": b,
          "gtm.timerElapsedTime": b - a.Lk,
          "gtm.triggers": a.An,
        });
      }
    };
  }
  function VD(a, b) {
    return b;
  }
  VD.F = "internal.enableAutoEventOnTimer";
  var Vb = wa(["data-gtm-yt-inspected-"]),
    XD = ["www.youtube.com", "www.youtube-nocookie.com"],
    YD,
    ZD = !1;
  function iE(a, b) {
    var c = this;
    return b;
  }
  iE.F = "internal.enableAutoEventOnYouTubeActivity";
  function jE(a, b) {
    K(
      this.getName(),
      ["booleanExpression:!string", "context:?PixieMap"],
      arguments
    );
    var c = b ? I(b) : {},
      d = a,
      e = !1;
    return e;
  }
  jE.F = "internal.evaluateBooleanExpression";
  var kE;
  function lE(a) {
    var b = !1;
    return b;
  }
  lE.F = "internal.evaluateMatchingRules";
  var mE = function (a) {
      switch (a) {
        case "page_view":
          return [ns, ms, ds, Pu, wv, jv, Xu, ev];
        case "call_conversion":
          return [ms, Pu];
        case "conversion":
          return [
            js,
            ms,
            sv,
            Cv,
            pv,
            Bv,
            zv,
            yv,
            xv,
            wv,
            jv,
            iv,
            gv,
            fv,
            dv,
            Tu,
            Su,
            hv,
            Xu,
            ov,
            cv,
            bv,
            $u,
            rv,
            nv,
            Vu,
            ns,
            ks,
            mv,
            Yu,
            vv,
            ev,
            qv,
            Wu,
            Ru,
            lv,
            av,
            tv,
            uv,
            Uu,
          ];
        case "landing_page":
          return [
            js,
            ms,
            sv,
            Cv,
            jv,
            ls,
            Xu,
            ov,
            rv,
            ks,
            ns,
            mv,
            vv,
            ev,
            qv,
            Ru,
            Uu,
          ];
        case "remarketing":
          return [
            js,
            ms,
            sv,
            Cv,
            pv,
            Bv,
            zv,
            yv,
            xv,
            wv,
            jv,
            iv,
            dv,
            hv,
            Xu,
            ov,
            cv,
            rv,
            ks,
            ns,
            mv,
            Yu,
            vv,
            ev,
            qv,
            Ru,
            tv,
            Uu,
          ];
        case "user_data_lead":
          return [
            js,
            ms,
            sv,
            Cv,
            Bv,
            wv,
            jv,
            hv,
            Xu,
            ls,
            ov,
            $u,
            rv,
            ks,
            ns,
            mv,
            Yu,
            vv,
            ev,
            qv,
            Ru,
            Uu,
          ];
        case "user_data_web":
          return [
            js,
            ms,
            sv,
            Cv,
            Bv,
            wv,
            jv,
            hv,
            Xu,
            ls,
            ov,
            $u,
            rv,
            ks,
            ns,
            mv,
            Yu,
            vv,
            ev,
            qv,
            Wu,
            Ru,
            Uu,
          ];
        default:
          return [
            js,
            ms,
            sv,
            Cv,
            pv,
            Bv,
            zv,
            yv,
            xv,
            wv,
            jv,
            iv,
            gv,
            fv,
            dv,
            Tu,
            Su,
            hv,
            Xu,
            ov,
            cv,
            bv,
            $u,
            rv,
            nv,
            Vu,
            ks,
            ns,
            mv,
            Yu,
            vv,
            ev,
            qv,
            Ru,
            lv,
            av,
            tv,
            uv,
            Uu,
          ];
      }
    },
    nE = function (a) {
      for (
        var b = mE(a.metadata.hit_type), c = 0;
        c < b.length && (b[c](a), !a.isAborted);
        c++
      );
    },
    oE = function (a, b, c, d) {
      var e = new AC(b, c, d);
      e.metadata.hit_type = a;
      e.metadata.speculative = !0;
      e.metadata.event_start_timestamp_ms = nb();
      e.metadata.speculative_in_message = d.eventMetadata.speculative;
      return e;
    },
    pE = function (a, b, c, d) {
      function e(u, v) {
        for (var t = l(k), w = t.next(); !w.done; w = t.next()) {
          var x = w.value;
          x.isAborted = !1;
          x.metadata.speculative = !0;
          x.metadata.consent_updated = !0;
          x.metadata.event_start_timestamp_ms = nb();
          x.metadata.consent_event_id = u;
          x.metadata.consent_priority_id = v;
        }
      }
      function f(u) {
        for (var v = {}, t = 0; t < k.length; v = { Ua: void 0 }, t++)
          if (((v.Ua = k[t]), !u || u(v.Ua.metadata.hit_type)))
            if (
              !v.Ua.metadata.consent_updated ||
              v.Ua.metadata.hit_type === "page_view" ||
              V(q)
            )
              nE(k[t]),
                v.Ua.metadata.speculative ||
                  v.Ua.isAborted ||
                  (gx(v.Ua),
                  v.Ua.metadata.hit_type === "page_view" &&
                    v.Ua.j[N.g.Tf] === void 0 &&
                    r === void 0 &&
                    (r = Pl(
                      Jl.Le,
                      (function (w) {
                        return function () {
                          V(N.g.O) &&
                            ((w.Ua.metadata.user_id_updated = !0),
                            (w.Ua.metadata.consent_updated = !1),
                            (w.Ua.j[N.g.Zb] = void 0),
                            f(function (x) {
                              return x === "page_view";
                            }),
                            (w.Ua.metadata.user_id_updated = !1),
                            Ql(Jl.Le, r),
                            (r = void 0));
                        };
                      })(v)
                    )));
      }
      var g =
        d.isGtmEvent && a === ""
          ? { id: "", prefix: "", destinationId: "", ids: [] }
          : Vl(a, d.isGtmEvent);
      if (g) {
        var k = [];
        if (d.eventMetadata.hit_type_override) {
          var m = d.eventMetadata.hit_type_override;
          Array.isArray(m) || (m = [m]);
          (R(63) || R(64) || R(65) || R(66) || R(67)) &&
            m.indexOf("conversion") >= 0 &&
            m.indexOf("user_data_web") < 0 &&
            m.push("user_data_web");
          for (var n = 0; n < m.length; n++) {
            var p = oE(m[n], g, b, d);
            p.metadata.speculative = !1;
            k.push(p);
          }
        } else
          b === N.g.ba &&
            (R(23)
              ? k.push(oE("page_view", g, b, d))
              : k.push(oE("landing_page", g, b, d))),
            k.push(oE("conversion", g, b, d)),
            k.push(oE("user_data_lead", g, b, d)),
            k.push(oE("user_data_web", g, b, d)),
            k.push(oE("remarketing", g, b, d));
        var q = [N.g.N, N.g.O],
          r = void 0;
        El(function () {
          f();
          var u = R(28) && !V([N.g.xa]);
          if (!V(q) || u) {
            var v = q;
            u && (v = [].concat(ta(v), [N.g.xa]));
            Dl(function (t) {
              var w, x, y;
              w = t.consentEventId;
              x = t.consentPriorityId;
              y = t.consentTypes;
              e(w, x);
              y && y.length === 1 && y[0] === N.g.xa
                ? f(function (B) {
                    return B === "remarketing";
                  })
                : f();
            }, v);
          }
        }, q);
      }
    };
  var qE = function (a) {
      var b,
        c,
        d = a.metadata.send_as_iframe,
        e = a.j[N.g.Vg];
      V([N.g.N, N.g.O])
        ? d
          ? ((b = fj()
              ? ej() + "/activityi/" + e + ";"
              : "https://" + e + ".fls.doubleclick.net/activityi;"),
            (c = 3))
          : ((b = Lj("https://ad.doubleclick.net") + "/activity;"), (c = 1))
        : ((b =
            "" + Lj("https://ade.googlesyndication.com") + "/ddm/activity/"),
          (c = 2));
      return { baseUrl: b, endpoint: c, rn: d };
    },
    sE = function (a) {
      a.metadata.hit_type === "page_view"
        ? Fv(a)
        : rE(a, function (b) {
            var c = a.metadata.parsed_target,
              d = qE(a),
              e = d.baseUrl,
              f = d.rn,
              g = [];
            fb(b, function (p, q) {
              g.push(p + "=" + q);
            });
            var k = e + g.join(";") + "?";
            f ? oc(k, a.m.onSuccess) : qc(k, a.m.onSuccess, a.m.onFailure);
            if (a.metadata.attribution_reporting_experiment) {
              var m =
                "" +
                Lj("https://ad.doubleclick.net") +
                "/activity;register_conversion=1;" +
                g.join(";") +
                "?";
              pc(m, void 0, void 0, { attributionsrc: "" });
            }
            if (a.metadata.send_fledge_experiment) {
              var n =
                Lu() + "/td/fls/rul/activityi;fledge=1;" + g.join(";") + "?";
              Ju(n, rk(c.target.id));
            }
          });
    },
    rE = function (a, b) {
      var c = [],
        d = {},
        e = function (r, u, v) {
          var t = v ? String(u) : encodeURIComponent(String(u));
          d[r] = t;
        },
        f = Qc(a.j[N.g.nd]) ? a.j[N.g.nd] : {};
      fb(a.j, function (r, u) {
        var v = tE[r];
        if (v) {
          var t = Zf[v] === !0;
          if (u === void 0 || (!t && u === "")) return;
          e(v, u);
        }
        v === void 0 && e(r, u);
      });
      e("gtm", No({ qa: a.metadata.source_canonical_id }));
      Ao() && e("gcs", Bo());
      e("gcd", Fo(a.m));
      Io() && e("dma_cps", Go());
      e("dma", Ho());
      Wn(eo()) && e("tcfd", Jo());
      dj() && e("tag_exp", dj());
      var g = uE(a);
      g && e("prd", g, !0);
      e("epver", "2");
      var k = a.j[N.g.ra];
      k && a.metadata.redact_click_ids && (k = sr(String(k)));
      fb(f, function (r, u) {
        if (u != null)
          if (r === "~oref") k = u;
          else {
            var v = encodeURIComponent(r);
            d[v] != null && T(141);
            e(v, u);
          }
      });
      var m = V(N.g.O);
      R(109) && (m = !1);
      var n = a.metadata.user_data;
      if (n && m) {
        var p = ni(n);
        p &&
          c.push(
            p.then(function (r) {
              e("em", r.Wa);
            })
          );
      }
      var q = function () {
        k && e("~oref", k);
        b(d);
      };
      if (c.length)
        try {
          Promise.all(c).then(function () {
            q();
          });
          return;
        } catch (r) {}
      q();
    },
    uE = function (a) {
      var b = a.j[N.g.da];
      if (!Array.isArray(b)) return "";
      for (
        var c = [],
          d = function (n, p, q) {
            q !== void 0 &&
              q !== "" &&
              c.push("" + n + p + ":" + encodeURIComponent(String(q)));
          },
          e = 0;
        e < b.length;
        e++
      ) {
        var f = b[e],
          g = R(75),
          k = f.id;
        f.item_id !== void 0 &&
          (g && (k = f.item_id),
          f.id !== void 0 ? (T(150), f.id !== f.item_id && T(151)) : T(152));
        k === void 0 && g && (k = f.item_name);
        var m = e + 1;
        d("i", m, k);
        d("p", m, f.price);
        d("q", m, f[N.g.xd]);
        d("c", m, f[N.g.Ec]);
        d("l", m, f[N.g.Sa]);
        d("a", m, f.accountId);
      }
      return c.join("|");
    },
    vE = {},
    tE =
      ((vE[N.g.Zb] = "gcu"),
      (vE[N.g.ub] = "gclgb"),
      (vE[N.g.ab] = "gclaw"),
      (vE[N.g.Yc] = "gclgs"),
      (vE[N.g.Zc] = "gcllp"),
      (vE[N.g.bd] = "gclst"),
      (vE[N.g.vb] = "auiddc"),
      (vE[N.g.hc] = "ps"),
      (vE[N.g.Gf] = "pscdl"),
      (vE[N.g.Mg] = "gcldc"),
      (vE[N.g.kb] = "edid"),
      (vE[N.g.qj] = "cat"),
      (vE[N.g.rj] = "type"),
      (vE[N.g.Vg] = "src"),
      (vE[N.g.sj] = "pcor"),
      (vE[N.g.tj] = "num"),
      (vE[N.g.uj] = "tran"),
      (vE[N.g.vj] = "u"),
      (vE[N.g.ue] = "gac"),
      (vE[N.g.Hc] = "gacgb"),
      (vE[N.g.jc] = "gdpr"),
      (vE[N.g.lb] = "gdid"),
      (vE[N.g.Ic] = "_ng"),
      (vE[N.g.Nb] = "frm"),
      (vE[N.g.we] = "gtm_up"),
      (vE[N.g.xd] = "qty"),
      (vE[N.g.nc] = "gdpr_consent"),
      (vE[N.g.Ba] = "ord"),
      (vE[N.g.Wf] = "uaa"),
      (vE[N.g.Xf] = "uab"),
      (vE[N.g.Yf] = "uafvl"),
      (vE[N.g.Zf] = "uamb"),
      (vE[N.g.cg] = "uam"),
      (vE[N.g.dg] = "uap"),
      (vE[N.g.eg] = "uapv"),
      (vE[N.g.fg] = "uaw"),
      (vE[N.g.oa] = "cost"),
      (vE[N.g.Tb] = "npa"),
      (vE[N.g.ra] = null),
      (vE[N.g.nd] = null),
      (vE[N.g.da] = null),
      vE);
  var wE = function () {
      return [N.g.N, N.g.O];
    },
    yE = function (a) {
      var b = Vl(a);
      if (b && (b.ids.length === 1 || b.ids.length === 3)) {
        var c = b.ids[Yl[4]] || "",
          d = b.ids[Yl[5]],
          e = "",
          f = "unknown";
        if (d) {
          var g = d.split("+");
          if (g.length !== 2) return;
          e = g[0];
          f = xE[g[1].toLowerCase()];
        }
        if (f) return { target: b, Pl: c, Ql: e, Xl: f };
      }
    },
    zE = function (a) {
      Ks(a);
    },
    AE = function (a) {
      var b = xb(pm(a.m, N.g.fa, 1), "."),
        c = xb(pm(a.m, N.g.fa, 2), ".");
      a.j[N.g.lb] = b;
      a.j[N.g.kb] = c;
    },
    BE = function (a) {
      if (!a.metadata.consent_updated) {
        var b = U(a.m, N.g.mj);
        if (Qc(b) && b.exclusion_parameters && b.engines)
          if (Lo()) {
          } else {
            var c = U(a.m, N.g.ya) !== !1,
              d = as(a),
              e = function () {
                if (V(wE())) {
                  var f = {
                    config: b,
                    gtm: No({ qa: a.metadata.source_canonical_id }),
                  };
                  c && (Rp(d), (f.auiddc = Pp[Sp(d.prefix)]));
                  A.__dc_ns_processor === void 0 && (A.__dc_ns_processor = []);
                  A.__dc_ns_processor.push(f);
                  lc("https://www.googletagmanager.com/dclk/ns/v1.js");
                }
              };
            V(wE()) ? e() : fl(e, wE());
          }
      }
    },
    EE = function (a, b, c, d) {
      function e() {
        for (var p = l(g), q = p.next(); !q.done; q = p.next()) {
          var r = q.value;
          if (
            !r.metadata.consent_updated ||
            r.metadata.hit_type === "page_view" ||
            V(wE())
          ) {
            for (
              var u = l(r.metadata.hit_type === "page_view" ? CE : DE),
                v = u.next();
              !v.done;
              v = u.next()
            ) {
              var t = v.value;
              t(r);
              if (r.isAborted) break;
            }
            r.metadata.speculative || r.isAborted || sE(r);
          }
        }
      }
      var f = yE(a);
      if (f) {
        var g = [],
          k = new AC(f.target, b, d);
        k.metadata.parsed_target = f;
        k.metadata.counting_method = f.Xl;
        R(140) && (k.metadata.is_fl_fallback_conversion_flow_allowed = !0);
        g.push(k);
        if (R(23) && b === N.g.ba) {
          var m = new AC(f.target, b, d);
          m.metadata.hit_type = "page_view";
          m.metadata.speculative = !0;
          g.push(m);
        }
        var n = wE();
        El(function () {
          e();
          V(n) ||
            Dl(function (p) {
              var q, r;
              q = p.consentEventId;
              r = p.consentPriorityId;
              for (var u = l(g), v = u.next(); !v.done; v = u.next()) {
                var t = v.value;
                t.metadata.consent_updated = !0;
                t.metadata.consent_event_id = q;
                t.metadata.consent_priority_id = r;
              }
              e(q, r);
            }, n);
        }, n);
      } else G(d.onFailure);
    },
    DE = [
      js,
      function (a) {
        a.metadata.conversion_linker_enabled = U(a.m, N.g.ya) !== !1;
        var b = U(a.m, N.g.Df) === !0,
          c = V(wE());
        if (Lo() && b) {
          b = !1;
        }
        a.metadata.send_as_iframe = b && c;
        var d = U(a.m, N.g.ia);
        a.metadata.redact_ads_data = d !== void 0 && d !== !1;
        a.metadata.redact_click_ids = a.metadata.redact_ads_data && !V(wE());
        a.metadata.cookie_options = as(a);
      },
      function (a) {
        if (!a.metadata.consent_updated) {
          var b = a.m.isGtmEvent ? U(a.m, "oref") : Bj(Ej(A.location.href));
          a.j[N.g.ra] = b;
        }
      },
      function (a) {
        if (a.eventName === N.g.Za && !a.m.isGtmEvent) {
          if (!a.metadata.consent_updated) {
            var b = {
              callback: U(a.m, N.g.Mb),
              zk: U(a.m, U(a.m, N.g.zb)),
              Qk: U(a.m, N.g.zb),
            };
            is(b, a.metadata.cookie_options, a.metadata.redact_ads_data, Er);
          }
          a.isAborted = !0;
        }
      },
      function (a) {
        if (a.eventName === N.g.ba && !a.m.isGtmEvent) {
          if (!a.metadata.consent_updated && !R(23)) {
            var b = a.metadata.conversion_linker_enabled,
              c = a.metadata.cookie_options,
              d = a.metadata.redact_ads_data;
            es(
              {
                Hd: b,
                Pd: U(a.m, N.g.za) || {},
                Vd: U(a.m, N.g.fb),
                qa: a.metadata.source_canonical_id,
                m: a.m,
                Sd: d,
                Pk: U(a.m, N.g.Ca),
              },
              c
            );
            BE(a);
            var e = a.metadata.parsed_target.target,
              f = xb(pm(a.m, N.g.fa, 2), "."),
              g = xb(pm(a.m, N.g.fa, 1), "."),
              k = Mn(!0);
            ts({
              Kh: !0,
              sc: b ? c : void 0,
              Ph: f,
              m: a.m,
              Sh: g,
              pg: b,
              Sd: d,
              targetId: e.ids.length > 1 ? e.id : "",
              Uh: k,
            });
          }
          a.isAborted = !0;
        }
      },
      function (a) {
        var b = a.metadata.parsed_target,
          c = {},
          d = U(a.m, N.g.nd);
        Qc(d) &&
          fb(d, function (e, f) {
            f != null && (c[e] = f);
          });
        a.j[N.g.Vg] = b.target.ids[Yl[3]];
        a.j[N.g.rj] = b.Pl;
        a.j[N.g.qj] = b.Ql;
        a.j[N.g.nd] = c;
      },
      function (a) {
        var b = a.metadata.counting_method;
        switch (b) {
          case "standard":
            a.j[N.g.Ba] = cb(1e11, 1e13);
            return;
          case "unique":
            a.j[N.g.Ba] = "1";
            a.j[N.g.tj] = cb(1e11, 1e13);
            return;
          case "per_session":
            var c = U(a.m, N.g.Bb);
            a.j[N.g.Ba] = c;
            return;
        }
        var d = b === "transactions" ? "1" : U(a.m, N.g.xd);
        a.j[N.g.xd] = d;
        a.copyToHitData(N.g.oa);
        a.copyToHitData(N.g.Ba);
      },
      function (a) {
        a.m.isGtmEvent &&
          (a.copyToHitData(N.g.vj),
          a.copyToHitData(N.g.uj),
          a.copyToHitData(N.g.Wg));
      },
      function (a) {
        a.metadata.consent_updated && (a.j[N.g.Zb] = "1");
      },
      function (a) {
        var b = lo();
        b && (a.j[N.g.jc] = b);
        var c = ko();
        c && (a.j[N.g.nc] = c);
      },
      function (a) {
        Dp(!1)._up === "1" && (a.j[N.g.we] = "1");
      },
      function (a) {
        zo(a.m) ? (a.j[N.g.Tb] = "0") : (a.j[N.g.Tb] = "1");
      },
      function (a) {
        if (a.metadata.conversion_linker_enabled) {
          var b = V(wE()),
            c = a.metadata.cookie_options,
            d = a.metadata.redact_ads_data,
            e = Er(c.prefix, d),
            f = !1;
          Rp(c);
          var g = b ? Pp[Sp(c.prefix)] : void 0;
          e && e.length && ((a.j[N.g.Mg] = e.join(".")), (f = !0));
          if (R(74) && V(N.g.N)) {
            var k = Gq(c.prefix),
              m = Tr(k);
            a.j[N.g.Yc] = m.kg;
            a.j[N.g.bd] = m.mg;
            a.j[N.g.Zc] = m.lg;
          }
          if (a.metadata.send_as_iframe) {
            var n = Gq(c.prefix) !== "_gcl",
              p;
            if (!(p = f)) {
              var q = c.prefix;
              p = !(Fj("gclaw") || Fj("gac") || (Vq().aw || []).length > 0
                ? 0
                : (Vq().gb || []).length > 0 ||
                  Vq().gbraid !== void 0 ||
                  qr(q));
            }
            if (p) {
              var r = Fr(c.prefix, d);
              r && r.length && ((a.j[N.g.ab] = r.join(".")), T(59));
              var u,
                v = Fj("gac");
              (u = v
                ? !V(vr()) && d
                  ? "0"
                  : decodeURIComponent(v)
                : Cr(Aq(zq()) ? oq() : {})) &&
                (n || (a.j[N.g.ue] = u));
            } else {
              var t;
              a: {
                var w = c.prefix,
                  x = Fj("gclgb");
                if (x) t = x.split(".");
                else {
                  var y = Gq(w);
                  if (y === "_gcl") {
                    var B = !V(vr()) && d,
                      C = Vq(),
                      D = [];
                    C.wbraid && D.push(C.wbraid);
                    C.gbraid && D.push(C.gbraid);
                    if (D.length > 0) {
                      t = B ? ["0"] : D;
                      break a;
                    }
                  }
                  t = Eq({ prefix: y });
                }
              }
              var H = t;
              H.length && (a.j[N.g.ub] = H.join("."));
              if (!n) {
                var J,
                  F = Fj("gacgb");
                (J = F
                  ? !V(vr()) && d
                    ? "0"
                    : decodeURIComponent(F)
                  : Cr(Aq(zq()) ? oq("_gac_gb", !0) : {})) && (a.j[N.g.Hc] = J);
              }
            }
          }
          g && (a.j[N.g.vb] = g);
        }
      },
      function (a) {
        var b = a.metadata.counting_method;
        if (b === "transactions" || b === "items_sold") {
          var c = U(a.m, N.g.da);
          if (Array.isArray(c)) {
            if (!a.m.isGtmEvent)
              for (
                var d = U(a.m, N.g.Ec),
                  e = U(a.m, N.g.Sa),
                  f = l(c),
                  g = f.next();
                !g.done;
                g = f.next()
              ) {
                var k = g.value;
                Qc(k) &&
                  ((k[N.g.Ec] = d), (k[N.g.Sa] = e), (k.accountId = void 0));
              }
            a.j[N.g.da] = c;
          }
        }
      },
      function (a) {
        var b = U(a.m, N.g.md),
          c = {};
        Qc(b) &&
          fb(b, function (g, k) {
            z(k) && FE.test(g) && (c[g] = k);
          });
        for (var d = om(a.m), e = 0; e < d.length; e++) {
          var f = d[e];
          FE.test(f) && (c[f] = f);
        }
        fb(c, function (g, k) {
          a.j[g] = U(a.m, k);
        });
      },
      AE,
      function (a) {
        var b = V(wE()) && Hu("attribution-reporting");
        (a.metadata.attribution_reporting_experiment = b) &&
          !a.metadata.is_fl_fallback_conversion_flow_allowed &&
          ((a.j[N.g.hc] = "1"), (a.j[N.g.sj] = cb()));
      },
      function (a) {
        if (a.m.isGtmEvent) {
          var b = U(a.m, N.g.Fa);
          Qc(b) && (a.metadata.user_data = b);
        }
      },
      function (a) {
        if (!zu(A)) T(87);
        else if (Fu !== void 0) {
          T(85);
          var b = xu();
          b ? Cu(b, a) : T(86);
        }
      },
      function (a) {
        R(52) &&
          U(a.m, N.g.Da) !== !1 &&
          V(wE()) &&
          zo(a.m) &&
          Iu() &&
          (a.metadata.send_fledge_experiment = !0);
      },
      function (a) {
        if (Rt(a, "ccd_add_1p_data", !1) && V(N.g.O)) {
          var b = a.m.C[N.g.Be];
          if (uj(b)) {
            var c = U(a.m, N.g.Fa);
            c === null
              ? (a.metadata.user_data_from_code = null)
              : (b.enable_code && Qc(c) && (a.metadata.user_data_from_code = c),
                Qc(b.selectors) &&
                  (a.metadata.user_data_from_manual = sj(b.selectors)));
          }
        }
      },
      ks,
      ls,
      ms,
      zE,
    ],
    CE = [ds, AE, BE, ms, zE],
    xE = {
      "": "unknown",
      standard: "standard",
      unique: "unique",
      per_session: "per_session",
      transactions: "transactions",
      items_sold: "items_sold",
    },
    FE = /^u([1-9]\d?|100)$/;
  function TE() {
    return mo(7) && mo(9) && mo(10);
  }
  function OF(a, b, c, d) {}
  OF.F = "internal.executeEventProcessor";
  function PF(a) {
    var b;
    K(this.getName(), ["javascript:!string"], arguments);
    L(this, "unsafe_run_arbitrary_javascript");
    try {
      var c = A.google_tag_manager;
      c && typeof c.e === "function" && (b = c.e(a));
    } catch (d) {}
    return dd(b, this.D, 1);
  }
  PF.F = "internal.executeJavascriptString";
  function QF(a) {
    var b;
    return b;
  }
  function RF(a) {
    var b = {};
    return dd(b);
  }
  RF.F = "internal.getAdsCookieWritingOptions";
  function SF(a) {
    var b = !1;
    return b;
  }
  SF.F = "internal.getAllowAdPersonalization";
  function TF(a, b) {
    b = b === void 0 ? !0 : b;
    var c;
    return c;
  }
  TF.F = "internal.getAuid";
  var UF = null;
  function VF() {
    var a = new La();
    L(this, "read_container_data"),
      R(47) && UF
        ? (a = UF)
        : (a.set("containerId", "GTM-N2HBVQ"),
          a.set("version", "609"),
          a.set("environmentName", ""),
          a.set("debugMode", Rf),
          a.set("previewMode", Sf.Nk),
          a.set("environmentMode", Sf.dm),
          a.set("firstPartyServing", fj() || Ri),
          a.set("containerUrl", fc),
          a.Ga(),
          R(47) && (UF = a));
    return a;
  }
  VF.T = "getContainerVersion";
  function WF(a, b) {
    b = b === void 0 ? !0 : b;
    var c;
    return c;
  }
  WF.T = "getCookieValues";
  function XF() {
    return nl();
  }
  XF.F = "internal.getCountryCode";
  function YF() {
    var a = [];
    return dd(a);
  }
  YF.F = "internal.getDestinationIds";
  function ZF(a) {
    var b = new La();
    return b;
  }
  ZF.F = "internal.getDeveloperIds";
  function $F(a, b) {
    var c = null;
    return c;
  }
  $F.F = "internal.getElementAttribute";
  function aG(a) {
    var b = null;
    return b;
  }
  aG.F = "internal.getElementById";
  function bG(a) {
    var b = "";
    return b;
  }
  bG.F = "internal.getElementInnerText";
  function cG(a, b) {
    var c = null;
    return c;
  }
  cG.F = "internal.getElementProperty";
  function dG(a) {
    var b;
    return b;
  }
  dG.F = "internal.getElementValue";
  function eG(a) {
    var b = 0;
    return b;
  }
  eG.F = "internal.getElementVisibilityRatio";
  function fG(a) {
    var b = null;
    return b;
  }
  fG.F = "internal.getElementsByCssSelector";
  function gG(a) {
    var b;
    K(this.getName(), ["keyPath:!string"], arguments);
    L(this, "read_event_data", a);
    var c;
    a: {
      var d = a,
        e = YA(this).originalEventData;
      if (e) {
        for (
          var f = e, g = {}, k = {}, m = {}, n = [], p = d.split("\\\\"), q = 0;
          q < p.length;
          q++
        ) {
          for (var r = p[q].split("\\."), u = 0; u < r.length; u++) {
            for (var v = r[u].split("."), t = 0; t < v.length; t++)
              n.push(v[t]), t !== v.length - 1 && n.push(m);
            u !== r.length - 1 && n.push(k);
          }
          q !== p.length - 1 && n.push(g);
        }
        for (
          var w = [], x = "", y = l(n), B = y.next();
          !B.done;
          B = y.next()
        ) {
          var C = B.value;
          C === m
            ? (w.push(x), (x = ""))
            : (x = C === g ? x + "\\" : C === k ? x + "." : x + C);
        }
        x && w.push(x);
        for (var D = l(w), H = D.next(); !H.done; H = D.next()) {
          if (f == null) {
            c = void 0;
            break a;
          }
          f = f[H.value];
        }
        c = f;
      } else c = void 0;
    }
    b = dd(c, this.D, 1);
    return b;
  }
  gG.F = "internal.getEventData";
  var hG = {};
  hG.enableAWFledge = R(33);
  hG.enableAdsConversionValidation = R(17);
  hG.enableAdsSupernovaParams = R(29);
  hG.enableAutoPhoneAndAddressDetection = R(31);
  hG.enableAutoPiiOnPhoneAndAddress = R(32);
  hG.enableCachedEcommerceData = R(39);
  hG.enableCloudRecommentationsErrorLogging = R(40);
  hG.enableCloudRecommentationsSchemaIngestion = R(41);
  hG.enableCloudRetailInjectPurchaseMetadata = R(43);
  hG.enableCloudRetailLogging = R(42);
  hG.enableCloudRetailPageCategories = R(44);
  hG.enableConsentDisclosureActivity = R(46);
  hG.enableDCFledge = R(52);
  hG.enableDecodeUri = R(83);
  hG.enableDeferAllEnhancedMeasurement = R(53);
  hG.enableFormSkipValidation = R(78);
  hG.enableGa4OutboundClicksFix = R(86);
  hG.enableGaAdsConversions = R(105);
  hG.enableMerchantRenameForBasketData = R(100);
  hG.enableUrlDecodeEventUsage = R(123);
  hG.enableZoneConfigInChildContainers = R(126);
  hG.useEnableAutoEventOnFormApis = R(138);
  hG.autoPiiEligible = sl();
  function iG() {
    return dd(hG);
  }
  iG.F = "internal.getFlags";
  function jG() {
    return new ad(vA);
  }
  jG.F = "internal.getHtmlId";
  function kG(a) {
    var b;
    return b;
  }
  kG.F = "internal.getIframingState";
  function lG(a, b) {
    var c = {};
    return dd(c);
  }
  lG.F = "internal.getLinkerValueFromLocation";
  function mG() {
    var a = new La();
    return a;
  }
  mG.F = "internal.getPrivacyStrings";
  function nG(a, b) {
    var c;
    return c;
  }
  nG.F = "internal.getProductSettingsParameter";
  function oG(a, b) {
    var c;
    return c;
  }
  oG.T = "getQueryParameters";
  function pG(a, b) {
    var c;
    return c;
  }
  pG.T = "getReferrerQueryParameters";
  function qG(a) {
    var b = "";
    return b;
  }
  qG.T = "getReferrerUrl";
  function rG() {
    return ol();
  }
  rG.F = "internal.getRegionCode";
  function sG(a, b) {
    var c;
    return c;
  }
  sG.F = "internal.getRemoteConfigParameter";
  function tG() {
    var a = new La();
    a.set("width", 0);
    a.set("height", 0);
    return a;
  }
  tG.F = "internal.getScreenDimensions";
  function uG() {
    var a = "";
    return a;
  }
  uG.F = "internal.getTopSameDomainUrl";
  function vG() {
    var a = "";
    return a;
  }
  vG.F = "internal.getTopWindowUrl";
  function wG(a) {
    var b = "";
    return b;
  }
  wG.T = "getUrl";
  function xG() {
    L(this, "get_user_agent");
    return cc.userAgent;
  }
  xG.F = "internal.getUserAgent";
  function yG() {
    var a;
    return dd(a ? Bu(a) : null);
  }
  yG.F = "internal.getUserAgentClientHints";
  function GG() {
    return (A.gaGlobal = A.gaGlobal || {});
  }
  function HG() {
    var a = GG();
    a.hid = a.hid || cb();
    return a.hid;
  }
  function IG(a, b) {
    var c = GG();
    if (c.vid === void 0 || (b && !c.from_cookie))
      (c.vid = a), (c.from_cookie = b);
  }
  function dH(a) {
    if (Ut(a) || fj()) a.j[N.g.Gj] = ol() || nl();
    !Ut(a) && fj() && (a.j[N.g.Pj] = "::");
  }
  function eH(a) {
    if (R(79) && fj()) {
      ns(a);
      os(a, "cpf", ws(U(a.m, N.g.La)));
      var b = U(a.m, N.g.ic);
      os(a, "cu", b === !0 ? 1 : b === !1 ? 0 : void 0);
      os(a, "cf", ws(U(a.m, N.g.cb)));
      os(a, "cd", fp(vs(U(a.m, N.g.Qa)), vs(U(a.m, N.g.xb))));
    }
  }
  var uH = function (a) {
      this.H = a;
      this.j = "";
    },
    vH = function (a, b) {
      a.C = b;
      return a;
    },
    wH = function (a, b) {
      b = a.j + b;
      for (var c = b.indexOf("\n\n"); c !== -1; ) {
        var d = a,
          e;
        a: {
          var f = l(b.substring(0, c).split("\n")),
            g = f.next().value,
            k = f.next().value;
          if (g.indexOf("event: message") === 0 && k.indexOf("data: ") === 0)
            try {
              e = JSON.parse(k.substring(k.indexOf(":") + 1));
              break a;
            } catch (F) {}
          e = void 0;
        }
        var m = d,
          n = e;
        if (n) {
          var p = n.send_pixel,
            q = n.options,
            r = m.H;
          if (p) {
            var u = p || [];
            if (Array.isArray(u))
              for (
                var v = Qc(q) ? q : {}, t = l(u), w = t.next();
                !w.done;
                w = t.next()
              )
                r(w.value, v);
          }
          var x = n.create_iframe,
            y = n.options,
            B = m.C;
          if (x && B) {
            var C = x || [];
            if (Array.isArray(C))
              for (
                var D = Qc(y) ? y : {}, H = l(C), J = H.next();
                !J.done;
                J = H.next()
              )
                B(J.value, D);
          }
        }
        b = b.substring(c + 2);
        c = b.indexOf("\n\n");
      }
      a.j = b;
    };
  function xH(a) {
    var b = a.search;
    return (
      a.protocol +
      "//" +
      a.hostname +
      a.pathname +
      (b ? b + "&richsstsse" : "?richsstsse")
    );
  }
  var kI = window,
    lI = document,
    mI = function (a) {
      var b = kI._gaUserPrefs;
      if (
        (b && b.ioo && b.ioo()) ||
        lI.documentElement.hasAttribute("data-google-analytics-opt-out") ||
        (a && kI["ga-disable-" + a] === !0)
      )
        return !0;
      try {
        var c = kI.external;
        if (c && c._gaUserPrefs && c._gaUserPrefs == "oo") return !0;
      } catch (p) {}
      for (
        var d = [], e = String(lI.cookie).split(";"), f = 0;
        f < e.length;
        f++
      ) {
        var g = e[f].split("="),
          k = g[0].replace(/^\s*|\s*$/g, "");
        if (k && k == "AMP_TOKEN") {
          var m = g
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "");
          m && (m = decodeURIComponent(m));
          d.push(m);
        }
      }
      for (var n = 0; n < d.length; n++) if (d[n] == "$OPT_OUT") return !0;
      return lI.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function xI(a) {
    fb(a, function (c) {
      c.charAt(0) === "_" && delete a[c];
    });
    var b = a[N.g.nb] || {};
    fb(b, function (c) {
      c.charAt(0) === "_" && delete b[c];
    });
  }
  function cJ(a, b) {}
  function dJ(a, b) {
    var c = function () {};
    return c;
  }
  function eJ(a, b, c) {}
  var fJ = dJ;
  var gJ = function (a, b, c) {
    for (var d = 0; d < b.length; d++)
      a.hasOwnProperty(b[d]) && (a[String(b[d])] = c(a[String(b[d])]));
  };
  function hJ(a, b, c) {
    var d = this;
    K(
      this.getName(),
      ["tagId:!string", "configuration:?PixieMap", "messageContext:?PixieMap"],
      arguments
    );
    var e = b ? I(b) : {};
    UA([
      function () {
        return L(d, "configure_google_tags", a, e);
      },
    ]);
    var f = c ? I(c) : {},
      g = YA(this);
    f.originatingEntity = OB(g);
    My(Jy(a, e), g.eventId, f);
  }
  hJ.F = "internal.gtagConfig";
  function iJ() {
    var a = {};
    return a;
  }
  var jJ = function (a, b) {
    function c(f, g) {
      for (var k in f)
        if (f.hasOwnProperty(k)) {
          var m = g ? g + "." + k : k;
          Qc(f[k]) && e.indexOf(f[k]) === -1
            ? (e.push(f[k]), c(f[k], m))
            : d.push(m);
        }
      e.pop();
    }
    var d = [],
      e = [a];
    c(a, b);
    return d;
  };
  function kJ(a, b) {
    K(this.getName(), ["keyOrObject:!*", "value:?*"], arguments);
    var c = null,
      d = I(a);
    if (Qc(d)) {
      for (var e = jJ(d, ""), f = 0; f < e.length; f++)
        L(this, "write_data_layer", e[f]);
      c = Hy(d);
    } else if (typeof d === "string") {
      var g = I(b);
      if (Qc(g))
        for (var k = jJ(g, d), m = 0; m < k.length; m++)
          L(this, "write_data_layer", k[m]);
      else L(this, "write_data_layer", d);
      c = Hy(d, g);
    }
    if (c) {
      var n = YA(this);
      My(c, n.eventId, PB(n));
      return dd(c);
    }
  }
  kJ.T = "gtagSet";
  function lJ() {
    var a = {};
    return a;
  }
  function mJ(a, b) {}
  mJ.T = "injectHiddenIframe";
  var nJ = JA();
  function oJ(a, b, c, d, e) {
    var f = this;
    K(
      this.getName(),
      [
        "html:!*",
        "onSuccess:!Fn",
        "onFailure:!Fn",
        "useIframe:?boolean",
        "supportDocumentWrite:?boolean",
      ],
      arguments
    );
    var g = YA(this);
    d && nJ(3), e && (nJ(1), nJ(2)), KA(g.eventId, g.ob(), nJ(void 0), "p");
    if (d && e)
      throw Error("useIframe and supportDocumentWrite cannot both be true.");
    L(this, "unsafe_inject_arbitrary_html", d, e);
    var k = R(95)
        ? function () {
            return void b.invoke(f.D);
          }
        : I(b, this.D),
      m = R(95)
        ? function () {
            return void c.invoke(f.D);
          }
        : I(c, this.D),
      n = I(a, this.D, 1);
    pJ(n, k, m, d, e, g);
  }
  var qJ = function (a, b, c, d) {
      return function () {
        try {
          if (b.length > 0) {
            var e = b.shift(),
              f = qJ(a, b, c, d),
              g = e;
            if (
              String(g.nodeName).toUpperCase() === "SCRIPT" &&
              g.type === "text/gtmscript"
            ) {
              var k = g.text || g.textContent || g.innerHTML || "",
                m = g.getAttribute("data-gtmsrc"),
                n = g.charset || "";
              m
                ? lc(m, f, d, { async: !1, id: e.id, text: k, charset: n }, a)
                : ((g = E.createElement("script")),
                  (g.async = !1),
                  (g.type = "text/javascript"),
                  (g.id = e.id),
                  (g.text = k),
                  (g.charset = n),
                  f && (g.onload = f),
                  a.insertBefore(g, null));
              m || f();
            } else if (
              e.innerHTML &&
              e.innerHTML.toLowerCase().indexOf("<script") >= 0
            ) {
              for (var p = []; e.firstChild; )
                p.push(e.removeChild(e.firstChild));
              a.insertBefore(e, null);
              qJ(e, p, f, d)();
            } else a.insertBefore(e, null), f();
          } else c();
        } catch (q) {
          d();
        }
      };
    },
    pJ = function (a, b, c, d, e, f) {
      if (E.body) {
        var g = AA(a, b, c);
        a = g.wk;
        b = g.onSuccess;
        if (d) {
        } else e ? rJ(a, b, c) : qJ(E.body, vc(a), b, c)();
      } else
        A.setTimeout(function () {
          pJ(a, b, c, d, e, f);
        });
    };
  var rJ = function (a, b, c) {
    Ex(function () {
      var d = google_tag_manager_external.postscribe.getPostscribe(),
        e = { done: b },
        f = document.createElement("div");
      f.style.display = "none";
      f.style.visibility = "hidden";
      E.body.appendChild(f);
      try {
        d(f, a, e);
      } catch (g) {
        c();
      }
    });
  };
  oJ.F = "internal.injectHtml";
  var sJ = {};
  var tJ = function (a, b, c, d, e, f) {
    f
      ? e[f]
        ? (e[f][0].push(c), e[f][1].push(d))
        : ((e[f] = [[c], [d]]),
          lc(
            a,
            function () {
              for (var g = e[f][0], k = 0; k < g.length; k++) G(g[k]);
              g.push = function (m) {
                G(m);
                return 0;
              };
            },
            function () {
              for (var g = e[f][1], k = 0; k < g.length; k++) G(g[k]);
              e[f] = null;
            },
            b
          ))
      : lc(a, c, d, b);
  };
  function uJ(a, b, c, d) {
    if (!Lo()) {
      K(
        this.getName(),
        ["url:!string", "onSuccess:?Fn", "onFailure:?Fn", "cacheToken:?string"],
        arguments
      );
      L(this, "inject_script", a);
      var e = this.D;
      tJ(
        a,
        void 0,
        function () {
          b && b.qb(e);
        },
        function () {
          c && c.qb(e);
        },
        sJ,
        d
      );
    }
  }
  var vJ = { dl: 1, id: 1 },
    wJ = {};
  function xJ(a, b, c, d) {}
  uJ.T = "injectScript";
  xJ.F = "internal.injectScript";
  function yJ(a) {
    var b = !0;
    return b;
  }
  yJ.T = "isConsentGranted";
  function zJ(a) {
    var b = !1;
    return b;
  }
  zJ.F = "internal.isDebugMode";
  function AJ() {
    return ql();
  }
  AJ.F = "internal.isDmaRegion";
  function BJ(a) {
    var b = !1;
    return b;
  }
  BJ.F = "internal.isEntityInfrastructure";
  function CJ() {
    var a = !1;
    return a;
  }
  CJ.F = "internal.isLandingPage";
  function DJ() {
    var a = Vg(function (b) {
      YA(this).log("error", b);
    });
    a.T = "JSON";
    return a;
  }
  function EJ(a) {
    var b = void 0;
    return dd(b);
  }
  EJ.F = "internal.legacyParseUrl";
  function FJ() {
    return !1;
  }
  var GJ = {
    getItem: function (a) {
      var b = null;
      return b;
    },
    setItem: function (a, b) {
      return !1;
    },
    removeItem: function (a) {},
  };
  function HJ() {
    try {
      L(this, "logging");
    } catch (c) {
      return;
    }
    if (!console) return;
    for (
      var a = Array.prototype.slice.call(arguments, 0), b = 0;
      b < a.length;
      b++
    )
      a[b] = I(a[b], this.D);
    console.log.apply(console, a);
  }
  HJ.T = "logToConsole";
  function IJ(a, b) {}
  IJ.F = "internal.mergeRemoteConfig";
  function JJ(a, b, c) {
    c = c === void 0 ? !0 : c;
    var d = [];
    return dd(d);
  }
  JJ.F = "internal.parseCookieValuesFromString";
  function KJ(a) {
    var b = void 0;
    return b;
  }
  KJ.T = "parseUrl";
  function LJ(a) {}
  LJ.F = "internal.processAsNewEvent";
  function MJ(a, b, c) {
    var d;
    return d;
  }
  MJ.F = "internal.pushToDataLayer";
  function NJ(a) {
    var b = !1;
    return b;
  }
  NJ.T = "queryPermission";
  function OJ() {
    var a = "";
    return a;
  }
  OJ.T = "readCharacterSet";
  function PJ() {
    return Ii.rb;
  }
  PJ.F = "internal.readDataLayerName";
  function QJ() {
    var a = "";
    return a;
  }
  QJ.T = "readTitle";
  function RJ(a, b) {
    var c = this;
  }
  RJ.F = "internal.registerCcdCallback";
  function SJ(a) {
    return !0;
  }
  SJ.F = "internal.registerDestination";
  var TJ = ["config", "event", "get", "set"];
  function UJ(a, b, c) {}
  UJ.F = "internal.registerGtagCommandListener";
  function VJ(a, b) {
    var c = !1;
    return c;
  }
  VJ.F = "internal.removeDataLayerEventListener";
  function WJ(a, b) {}
  WJ.F = "internal.removeFormData";
  function XJ() {}
  XJ.T = "resetDataLayer";
  function YJ(a, b, c) {
    var d = void 0;
    return d;
  }
  YJ.F = "internal.scrubUrlParams";
  function ZJ(a) {}
  ZJ.F = "internal.sendAdsHit";
  function $J(a, b, c, d) {}
  $J.F = "internal.sendGtagEvent";
  function aK(a, b, c) {}
  aK.T = "sendPixel";
  function bK(a, b) {}
  bK.F = "internal.setAnchorHref";
  function cK(a) {}
  cK.F = "internal.setContainerConsentDefaults";
  function dK(a, b, c, d) {
    var e = this;
    d = d === void 0 ? !0 : d;
    var f = !1;
    return f;
  }
  dK.T = "setCookie";
  function eK(a) {}
  eK.F = "internal.setCorePlatformServices";
  function fK(a, b) {}
  fK.F = "internal.setDataLayerValue";
  function gK(a) {
    K(this.getName(), ["consentSettings:!PixieMap"], arguments);
    for (var b = a.la(), c = l(b), d = c.next(); !d.done; d = c.next()) {
      var e = d.value;
      e !== N.g.Kb && e !== N.g.zf && L(this, "access_consent", e, "write");
    }
    var f = YA(this),
      g = f.eventId,
      k = PB(f),
      m = Iy("consent", "default", I(a));
    My(m, g, k);
  }
  gK.T = "setDefaultConsentState";
  function hK(a, b) {}
  hK.F = "internal.setDelegatedConsentType";
  function iK(a, b) {}
  iK.F = "internal.setFormAction";
  function jK(a, b, c) {}
  jK.F = "internal.setInCrossContainerData";
  function kK(a, b, c) {
    K(
      this.getName(),
      ["path:!string", "value:?*", "overrideExisting:?boolean"],
      arguments
    );
    L(this, "access_globals", "readwrite", a);
    var d = a.split("."),
      e = ub(d, [A, E]),
      f = d.pop();
    if (e && (e[f] === void 0 || c)) return (e[f] = I(b, this.D, 2)), !0;
    return !1;
  }
  kK.T = "setInWindow";
  function lK(a, b, c) {}
  lK.F = "internal.setProductSettingsParameter";
  function mK(a, b, c) {}
  mK.F = "internal.setRemoteConfigParameter";
  function nK(a, b, c, d) {
    var e = this;
  }
  nK.T = "sha256";
  function oK(a, b, c) {}
  oK.F = "internal.sortRemoteConfigParameters";
  function pK(a, b) {
    var c = void 0;
    return c;
  }
  pK.F = "internal.subscribeToCrossContainerData";
  var qK = {},
    rK = {};
  qK.getItem = function (a) {
    var b = null;
    return b;
  };
  qK.setItem = function (a, b) {};
  qK.removeItem = function (a) {};
  qK.clear = function () {};
  qK.T = "templateStorage";
  function sK(a, b) {
    var c = !1;
    return c;
  }
  sK.F = "internal.testRegex";
  function tK(a) {
    var b;
    return b;
  }
  function uK(a) {
    var b;
    return b;
  }
  uK.F = "internal.unsiloId";
  function vK(a, b) {
    var c;
    return c;
  }
  vK.F = "internal.unsubscribeFromCrossContainerData";
  function wK(a) {
    K(this.getName(), ["consentSettings:!PixieMap"], arguments);
    var b = I(a),
      c;
    for (c in b) b.hasOwnProperty(c) && L(this, "access_consent", c, "write");
    var d = YA(this);
    My(Iy("consent", "update", b), d.eventId, PB(d));
  }
  wK.T = "updateConsentState";
  var xK;
  function yK(a, b, c) {
    xK = xK || new fh();
    xK.add(a, b, c);
  }
  function zK(a, b) {
    var c = (xK = xK || new fh());
    if (c.j.hasOwnProperty(a))
      throw Error(
        "Attempting to add a private function which already exists: " + a + "."
      );
    if (c.contains(a))
      throw Error(
        "Attempting to add a private function with an existing API name: " +
          a +
          "."
      );
    c.j[a] = Za(b) ? Cg(a, b) : Dg(a, b);
  }
  function AK() {
    return function (a) {
      var b;
      var c = xK;
      if (c.contains(a)) b = c.get(a, this);
      else {
        var d;
        if ((d = c.j.hasOwnProperty(a))) {
          var e = !1,
            f = this.D.j;
          if (f) {
            var g = f.ob();
            if (g) {
              g.indexOf("__cvt_") !== 0 && (e = !0);
            }
          } else e = !0;
          d = e;
        }
        if (d) {
          var k = c.j.hasOwnProperty(a) ? c.j[a] : void 0;
          b = k;
        } else throw Error(a + " is not a valid API name.");
      }
      return b;
    };
  }
  function BK() {
    var a = function (c) {
        return void zK(c.F, c);
      },
      b = function (c) {
        return void yK(c.T, c);
      };
    b(SA);
    b(ZA);
    b(mC);
    b(oC);
    b(pC);
    b(wC);
    b(yC);
    b(CC);
    b(DJ());
    b(EC);
    b(VF);
    b(WF);
    b(oG);
    b(pG);
    b(qG);
    b(wG);
    b(kJ);
    b(mJ);
    b(uJ);
    b(yJ);
    b(HJ);
    b(KJ);
    b(NJ);
    b(OJ);
    b(QJ);
    b(aK);
    b(dK);
    b(gK);
    b(kK);
    b(nK);
    b(qK);
    b(wK);
    yK("Math", Hg());
    yK("Object", dh);
    yK("TestHelper", hh());
    yK("assertApi", Eg);
    yK("assertThat", Fg);
    yK("decodeUri", Jg);
    yK("decodeUriComponent", Kg);
    yK("encodeUri", Lg);
    yK("encodeUriComponent", Mg);
    yK("fail", Rg);
    yK("generateRandom", Sg);
    yK("getTimestamp", Tg);
    yK("getTimestampMillis", Tg);
    yK("getType", Ug);
    yK("makeInteger", Wg);
    yK("makeNumber", Xg);
    yK("makeString", Yg);
    yK("makeTableMap", Zg);
    yK("mock", bh);
    yK("fromBase64", QF, !("atob" in A));
    yK("localStorage", GJ, !FJ());
    yK("toBase64", tK, !("btoa" in A));
    a(RA);
    a(VA);
    a(pB);
    a(BB);
    a(IB);
    a(NB);
    a(bC);
    a(kC);
    a(nC);
    a(qC);
    a(rC);
    a(sC);
    a(tC);
    a(uC);
    a(vC);
    a(xC);
    a(zC);
    a(BC);
    a(DC);
    a(FC);
    a(HC);
    a(IC);
    a(JC);
    a(KC);
    a(LC);
    a(PC);
    a(XC);
    a(YC);
    a(iD);
    a(nD);
    a(sD);
    a(BD);
    a(GD);
    a(TD);
    a(VD);
    a(iE);
    a(jE);
    a(lE);
    a(OF);
    a(PF);
    a(RF);
    a(SF);
    a(TF);
    a(XF);
    a(YF);
    a(ZF);
    a($F);
    a(aG);
    a(bG);
    a(cG);
    a(dG);
    a(eG);
    a(fG);
    a(gG);
    a(iG);
    a(jG);
    a(kG);
    a(lG);
    a(mG);
    a(nG);
    a(rG);
    a(sG);
    a(tG);
    a(uG);
    a(vG);
    a(yG);
    a(hJ);
    a(oJ);
    a(xJ);
    a(zJ);
    a(AJ);
    a(BJ);
    a(CJ);
    a(EJ);
    a($B);
    a(IJ);
    a(JJ);
    a(LJ);
    a(MJ);
    a(PJ);
    a(RJ);
    a(SJ);
    a(UJ);
    a(VJ);
    a(WJ);
    a(YJ);
    a(ZJ);
    a($J);
    a(bK);
    a(cK);
    a(eK);
    a(fK);
    a(hK);
    a(iK);
    a(jK);
    a(lK);
    a(mK);
    a(oK);
    a(pK);
    a(sK);
    a(uK);
    a(vK);
    zK("internal.CrossContainerSchema", GC());
    zK("internal.GtagSchema", iJ());
    zK("internal.IframingStateSchema", lJ());
    yK("mockObject", ch);
    return AK();
  }
  var PA;
  function CK() {
    PA.j.j.H = function (a, b, c) {
      Ji.SANDBOXED_JS_SEMAPHORE = Ji.SANDBOXED_JS_SEMAPHORE || 0;
      Ji.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        Ji.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function DK(a) {
    a &&
      fb(a, function (b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d].replace(/^_*/, "");
          Zi[e] = Zi[e] || [];
          Zi[e].push(b);
        }
      });
  }
  function EK(a) {
    My(Hy("developer_id." + a, !0), 0, {});
  }
  var FK = Array.isArray;
  function GK(a, b) {
    return Rc(a, b || null);
  }
  function W(a) {
    return window.encodeURIComponent(a);
  }
  function HK(a, b, c) {
    qc(a, b, c);
  }
  function IK(a, b) {
    if (!a) return !1;
    var c = yj(Ej(a), "host");
    if (!c) return !1;
    for (var d = 0; b && d < b.length; d++) {
      var e = b[d] && b[d].toLowerCase();
      if (e) {
        var f = c.length - e.length;
        f > 0 && e.charAt(0) !== "." && (f--, (e = "." + e));
        if (f >= 0 && c.indexOf(e, f) === f) return !0;
      }
    }
    return !1;
  }
  function JK(a, b, c) {
    for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
      a[f] &&
        a[f].hasOwnProperty(b) &&
        a[f].hasOwnProperty(c) &&
        ((d[a[f][b]] = a[f][c]), (e = !0));
    return e ? d : null;
  }
  var SK = A.clearTimeout,
    TK = A.setTimeout;
  function UK(a, b, c) {
    if (Lo()) {
      b && G(b);
    } else return lc(a, b, c);
  }
  function VK() {
    return A.location.href;
  }
  function WK(a, b) {
    return lj(a, b || 2);
  }
  function XK(a, b) {
    A[a] = b;
  }
  function YK(a, b, c) {
    b && (A[a] === void 0 || (c && !A[a])) && (A[a] = b);
    return A[a];
  }
  function ZK(a, b) {
    if (Lo()) {
      b && G(b);
    } else oc(a, b);
  }

  var $K = {};
  var X = { securityGroups: {} };

  (X.securityGroups.flc = []),
    (X.__flc = function (a) {
      var b =
          !a.hasOwnProperty("vtp_enableConversionLinker") ||
          !!a.vtp_enableConversionLinker,
        c = JK(a.vtp_customVariable || [], "key", "value") || {},
        d = {},
        e =
          ((d[N.g.ia] = WK(N.g.ia)),
          (d[N.g.Df] = a.vtp_useImageTag === !0 ? !1 : !0),
          (d[N.g.ib] = a.vtp_conversionCookiePrefix || void 0),
          (d[N.g.ya] = b),
          (d[N.g.Bb] = a.vtp_sessionId),
          (d[N.g.Wg] = a.vtp_matchIdVariable),
          (d.oref = a.vtp_useImageTag ? void 0 : a.vtp_url),
          (d.tran = a.vtp_transactionVariable),
          (d.u = a.vtp_userVariable),
          (d[N.g.Fa] = a.vtp_userDataVariable),
          d);
      R(52) && ((e[N.g.Da] = WK(N.g.Da)), (e[N.g.na] = WK(N.g.na)));
      for (var f in c) c.hasOwnProperty(f) && (e[f] = c[f]);
      var g = "DC-" + a.vtp_advertiserId,
        k =
          g +
          "/" +
          a.vtp_groupTag +
          "/" +
          (a.vtp_activityTag +
            "+" +
            ({ UNIQUE: "unique", SESSION: "per_session" }[a.vtp_ordinalType] ||
              "standard"));
      yx(g, void 0, { source: 7, fromContainerExecution: !0, siloed: !0 });
      var m = {
        noGtmEvent: !0,
        isGtmEvent: !0,
        onSuccess: a.vtp_gtmOnSuccess,
        onFailure: a.vtp_gtmOnFailure,
      };
      My(Ky(jk(k), "", e), a.vtp_gtmEventId, m);
    }),
    (X.__flc.o = "flc"),
    (X.__flc.isVendorTemplate = !0),
    (X.__flc.priorityOverride = 0),
    (X.__flc.isInfrastructure = !1),
    (X.__flc.runInSiloedMode = !1);
  (X.securityGroups.d = ["google"]),
    (X.__d = function (a) {
      var b = null,
        c = null,
        d = a.vtp_attributeName;
      if (a.vtp_selectorType == "CSS")
        try {
          var e = Mh(a.vtp_elementSelector);
          e && e.length > 0 && (b = e[0]);
        } catch (f) {
          b = null;
        }
      else b = E.getElementById(a.vtp_elementId);
      b &&
        (d
          ? (c = (function () {
              if (b instanceof HTMLInputElement) {
                var f = b;
                if (d === "value") return f.value;
                if (
                  d === "checked" &&
                  (f.type === "radio" || f.type === "checkbox")
                )
                  return f.checked;
              }
              return tc(b, d);
            })())
          : (c = uc(b)));
      return lb(String(b && c));
    }),
    (X.__d.o = "d"),
    (X.__d.isVendorTemplate = !0),
    (X.__d.priorityOverride = 0),
    (X.__d.isInfrastructure = !0),
    (X.__d.runInSiloedMode = !1);
  (X.securityGroups.f = ["google"]),
    (X.__f = function (a) {
      var b = WK("gtm.referrer", 1) || E.referrer;
      return b
        ? a.vtp_component && a.vtp_component != "URL"
          ? yj(
              Ej(String(b)),
              a.vtp_component,
              a.vtp_stripWww,
              a.vtp_defaultPages,
              a.vtp_queryKey
            )
          : Bj(Ej(String(b)))
        : String(b);
    }),
    (X.__f.o = "f"),
    (X.__f.isVendorTemplate = !0),
    (X.__f.priorityOverride = 0),
    (X.__f.isInfrastructure = !0),
    (X.__f.runInSiloedMode = !1);

  (X.securityGroups.k = ["google"]),
    (X.__k = function (a) {
      var b = a.vtp_name,
        c = WK("gtm.cookie", 1),
        d = !!a.vtp_decodeCookie;
      return Qo(b, c, d === void 0 ? !0 : !!d)[0];
    }),
    (X.__k.o = "k"),
    (X.__k.isVendorTemplate = !0),
    (X.__k.priorityOverride = 0),
    (X.__k.isInfrastructure = !0),
    (X.__k.runInSiloedMode = !1);
  (X.securityGroups.access_globals = ["google"]),
    (function () {
      function a(b, c, d) {
        var e = { key: d, read: !1, write: !1, execute: !1 };
        switch (c) {
          case "read":
            e.read = !0;
            break;
          case "write":
            e.write = !0;
            break;
          case "readwrite":
            e.read = e.write = !0;
            break;
          case "execute":
            e.execute = !0;
            break;
          default:
            throw Error("Invalid " + b + " request " + c);
        }
        return e;
      }
      (function (b) {
        X.__access_globals = b;
        X.__access_globals.o = "access_globals";
        X.__access_globals.isVendorTemplate = !0;
        X.__access_globals.priorityOverride = 0;
        X.__access_globals.isInfrastructure = !1;
        X.__access_globals.runInSiloedMode = !1;
      })(function (b) {
        for (
          var c = b.vtp_keys || [],
            d = b.vtp_createPermissionError,
            e = [],
            f = [],
            g = [],
            k = 0;
          k < c.length;
          k++
        ) {
          var m = c[k],
            n = m.key;
          m.read && e.push(n);
          m.write && f.push(n);
          m.execute && g.push(n);
        }
        return {
          assert: function (p, q, r) {
            if (!z(r)) throw d(p, {}, "Key must be a string.");
            if (q === "read") {
              if (e.indexOf(r) > -1) return;
            } else if (q === "write") {
              if (f.indexOf(r) > -1) return;
            } else if (q === "readwrite") {
              if (f.indexOf(r) > -1 && e.indexOf(r) > -1) return;
            } else if (q === "execute") {
              if (g.indexOf(r) > -1) return;
            } else
              throw d(
                p,
                {},
                "Operation must be either 'read', 'write', or 'execute', was " +
                  q
              );
            throw d(
              p,
              {},
              "Prohibited " + q + " on global variable: " + r + "."
            );
          },
          M: a,
        };
      });
    })();
  (X.securityGroups.u = ["google"]),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        X.__u = b;
        X.__u.o = "u";
        X.__u.isVendorTemplate = !0;
        X.__u.priorityOverride = 0;
        X.__u.isInfrastructure = !0;
        X.__u.runInSiloedMode = !1;
      })(function (b) {
        var c;
        c =
          (c = b.vtp_customUrlSource
            ? b.vtp_customUrlSource
            : WK("gtm.url", 1)) || VK();
        var d = b[a("vtp_component")];
        if (!d || d == "URL") return Bj(Ej(String(c)));
        var e = Ej(String(c)),
          f;
        if (d === "QUERY")
          a: {
            var g = b[a("vtp_multiQueryKeys").toString()],
              k = b[a("vtp_queryKey").toString()] || "",
              m = b[a("vtp_ignoreEmptyQueryParam").toString()],
              n;
            n = g
              ? Array.isArray(k)
                ? k
                : String(k).replace(/\s+/g, "").split(",")
              : [String(k)];
            for (var p = 0; p < n.length; p++) {
              var q = yj(e, "QUERY", void 0, void 0, n[p]);
              if (q != void 0 && (!m || q !== "")) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = yj(
            e,
            d,
            d == "HOST" ? b[a("vtp_stripWww")] : void 0,
            d == "PATH" ? b[a("vtp_defaultPages")] : void 0
          );
        return f;
      });
    })();
  (X.securityGroups.v = ["google"]),
    (X.__v = function (a) {
      var b = a.vtp_name;
      if (!b || !b.replace) return !1;
      var c = WK(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
      return c !== void 0 ? c : a.vtp_defaultValue;
    }),
    (X.__v.o = "v"),
    (X.__v.isVendorTemplate = !0),
    (X.__v.priorityOverride = 0),
    (X.__v.isInfrastructure = !0),
    (X.__v.runInSiloedMode = !1);

  (X.securityGroups.read_event_data = ["google"]),
    (function () {
      function a(b, c) {
        return { key: c };
      }
      (function (b) {
        X.__read_event_data = b;
        X.__read_event_data.o = "read_event_data";
        X.__read_event_data.isVendorTemplate = !0;
        X.__read_event_data.priorityOverride = 0;
        X.__read_event_data.isInfrastructure = !1;
        X.__read_event_data.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_eventDataAccess,
          d = b.vtp_keyPatterns || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (g != null && !z(g))
              throw e(f, { key: g }, "Key must be a string.");
            if (c !== "any") {
              try {
                if (c === "specific" && g != null && gg(g, d)) return;
              } catch (k) {
                throw e(f, { key: g }, "Invalid key filter.");
              }
              throw e(f, { key: g }, "Prohibited read from event data.");
            }
          },
          M: a,
        };
      });
    })();
  (X.securityGroups.gclidw = ["google"]),
    (function () {
      var a = ["aw", "dc", "gf", "ha", "gb"];
      (function (b) {
        X.__gclidw = b;
        X.__gclidw.o = "gclidw";
        X.__gclidw.isVendorTemplate = !0;
        X.__gclidw.priorityOverride = 100;
        X.__gclidw.isInfrastructure = !1;
        X.__gclidw.runInSiloedMode = !1;
      })(function (b) {
        G(b.vtp_gtmOnSuccess);
        var c, d, e, f;
        b.vtp_enableCookieOverrides &&
          ((e = b.vtp_cookiePrefix),
          (c = b.vtp_path),
          (d = b.vtp_domain),
          (f = b.vtp_cookieFlags));
        var g = WK(N.g.ia);
        g = g != void 0 && g !== !1;
        if (R(23)) {
          var k = {},
            m =
              ((k[N.g.La] = e),
              (k[N.g.xb] = c),
              (k[N.g.Qa] = d),
              (k[N.g.cb] = f),
              (k[N.g.ia] = g),
              k);
          b.vtp_enableUrlPassthrough && (m[N.g.fb] = !0);
          if (b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
            var n = {};
            m[N.g.za] =
              ((n[N.g.Kc] = b.vtp_acceptIncoming),
              (n[N.g.X] = b.vtp_linkerDomains
                .toString()
                .replace(/\s+/g, "")
                .split(",")),
              (n[N.g.Pb] = b.vtp_urlPosition),
              (n[N.g.Ab] = b.vtp_formDecoration),
              n);
          }
          var p = Cm(
            Bm(
              Am(
                zm(sm(new rm(b.vtp_gtmEventId, b.vtp_gtmPriorityId), m), Ya),
                Ya
              ),
              !0
            )
          );
          p.eventMetadata.hit_type_override = "page_view";
          pE("", N.g.ba, Date.now(), p);
        } else {
          var q = { prefix: e, path: c, domain: d, flags: f };
          if (!b.vtp_enableCrossDomain || b.vtp_acceptIncoming !== !1)
            if (b.vtp_enableCrossDomain || Mp()) $q(a, q), Zp(q);
          (R(98) || R(125)) && Mn() !== 2 ? Yq(q) : Wq(q);
          fr(["aw", "dc"], q);
          Ar(q, void 0, void 0, g);
          if (b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
            var r = b.vtp_linkerDomains
              .toString()
              .replace(/\s+/g, "")
              .split(",");
            dr(a, r, b.vtp_urlPosition, !!b.vtp_formDecoration, q.prefix);
            $p(Sp(q.prefix), r, b.vtp_urlPosition, !!b.vtp_formDecoration, q);
            $p("FPAU", r, b.vtp_urlPosition, !!b.vtp_formDecoration, q);
          }
          !fj() && !Ri && R(114) && nu(void 0, Math.round(nb()), R(113));
          ts({
            m: Cm(new rm(b.vtp_gtmEventId, b.vtp_gtmPriorityId)),
            Kh: !1,
            Sd: g,
            sc: q,
            pg: !0,
          });
          hl = !0;
          b.vtp_enableUrlPassthrough && ir(["aw", "dc", "gb"]);
          kr(["aw", "dc", "gb"]);
        }
      });
    })();
  (X.securityGroups.aev = ["google"]),
    (function () {
      function a(r, u, v, t, w) {
        w || (w = "element");
        var x = u + "." + v,
          y;
        if (n.hasOwnProperty(x)) y = n[x];
        else {
          var B = r[w];
          if (B && ((y = t(B)), (n[x] = y), p.push(x), p.length > 35)) {
            var C = p.shift();
            delete n[C];
          }
        }
        return y;
      }
      function b(r, u, v) {
        var t = r[q[u]];
        return t !== void 0 ? t : v;
      }
      function c(r, u) {
        if (!r) return !1;
        var v = d(VK());
        Array.isArray(u) ||
          (u = String(u || "")
            .replace(/\s+/g, "")
            .split(","));
        for (var t = [v], w = 0; w < u.length; w++) {
          var x = u[w];
          if (x.hasOwnProperty("is_regex"))
            if (x.is_regex)
              try {
                x = new RegExp(x.domain);
              } catch (C) {
                continue;
              }
            else x = x.domain;
          var y = d(r);
          if (x instanceof RegExp) {
            if (x.test(y)) return !1;
          } else {
            var B = x;
            if (B.length != 0) {
              if (y.indexOf(B) >= 0) return !1;
              t.push(d(B));
            }
          }
        }
        return !IK(r, t);
      }
      function d(r) {
        m.test(r) || (r = "http://" + r);
        return yj(Ej(r), "HOST", !0);
      }
      function e(r, u, v, t) {
        switch (r) {
          case "SUBMIT_TEXT":
            return a(u, v, "FORM." + r, f, "formSubmitElement") || t;
          case "LENGTH":
            var w = a(u, v, "FORM." + r, g);
            return w === void 0 ? t : w;
          case "INTERACTED_FIELD_ID":
            return k(u, "id", t);
          case "INTERACTED_FIELD_NAME":
            return k(u, "name", t);
          case "INTERACTED_FIELD_TYPE":
            return k(u, "type", t);
          case "INTERACTED_FIELD_POSITION":
            var x = u.interactedFormFieldPosition;
            return x === void 0 ? t : x;
          case "INTERACT_SEQUENCE_NUMBER":
            var y = u.interactSequenceNumber;
            return y === void 0 ? t : y;
          default:
            return t;
        }
      }
      function f(r) {
        switch (r.tagName.toLowerCase()) {
          case "input":
            return tc(r, "value");
          case "button":
            return uc(r);
          default:
            return null;
        }
      }
      function g(r) {
        if (r.tagName.toLowerCase() === "form" && r.elements) {
          for (var u = 0, v = 0; v < r.elements.length; v++)
            gB(r.elements[v]) && u++;
          return u;
        }
      }
      function k(r, u, v) {
        var t = r.interactedFormField;
        return (t && tc(t, u)) || v;
      }
      var m = /^https?:\/\//i,
        n = {},
        p = [],
        q = {
          ATTRIBUTE: "elementAttribute",
          CLASSES: "elementClasses",
          ELEMENT: "element",
          ID: "elementId",
          HISTORY_CHANGE_SOURCE: "historyChangeSource",
          HISTORY_NEW_STATE: "newHistoryState",
          HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
          HISTORY_OLD_STATE: "oldHistoryState",
          HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
          TARGET: "elementTarget",
        };
      (function (r) {
        X.__aev = r;
        X.__aev.o = "aev";
        X.__aev.isVendorTemplate = !0;
        X.__aev.priorityOverride = 0;
        X.__aev.isInfrastructure = !0;
        X.__aev.runInSiloedMode = !1;
      })(function (r) {
        var u = r.vtp_gtmEventId,
          v = r.vtp_defaultValue,
          t = r.vtp_varType,
          w = r.vtp_gtmCachedValues.gtm;
        switch (t) {
          case "TAG_NAME":
            var x = w.element;
            return (x && x.tagName) || v;
          case "TEXT":
            return a(w, u, t, uc) || v;
          case "URL":
            var y;
            a: {
              var B = String(w.elementUrl || v || ""),
                C = Ej(B),
                D = String(r.vtp_component || "URL");
              switch (D) {
                case "URL":
                  y = B;
                  break a;
                case "IS_OUTBOUND":
                  y = c(B, r.vtp_affiliatedDomains);
                  break a;
                default:
                  y = yj(
                    C,
                    D,
                    r.vtp_stripWww,
                    r.vtp_defaultPages,
                    r.vtp_queryKey
                  );
              }
            }
            return y;
          case "ATTRIBUTE":
            var H;
            if (r.vtp_attribute === void 0) H = b(w, t, v);
            else {
              var J = w.element;
              H = (J && tc(J, r.vtp_attribute)) || v || "";
            }
            return H;
          case "MD":
            var F = r.vtp_mdValue,
              S = a(w, u, "MD", NK);
            return F && S ? KK(S, F) || v : S || v;
          case "FORM":
            return e(String(r.vtp_component || "SUBMIT_TEXT"), w, u, v);
          default:
            return b(w, t, v);
        }
      });
    })();
  (X.securityGroups.read_data_layer = ["google"]),
    (function () {
      function a(b, c) {
        return { key: c };
      }
      (function (b) {
        X.__read_data_layer = b;
        X.__read_data_layer.o = "read_data_layer";
        X.__read_data_layer.isVendorTemplate = !0;
        X.__read_data_layer.priorityOverride = 0;
        X.__read_data_layer.isInfrastructure = !1;
        X.__read_data_layer.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedKeys || "specific",
          d = b.vtp_keyPatterns || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!z(g)) throw e(f, {}, "Keys must be strings.");
            if (c !== "any") {
              try {
                if (gg(g, d)) return;
              } catch (k) {
                throw e(f, {}, "Invalid key filter.");
              }
              throw e(
                f,
                {},
                "Prohibited read from data layer variable: " + g + "."
              );
            }
          },
          M: a,
        };
      });
    })();
  (X.securityGroups.unsafe_access_globals = ["google"]),
    (function () {
      function a(c, d) {
        c("access_globals", "readwrite", d);
      }
      function b(c, d) {
        return { key: d };
      }
      (function (c) {
        X.__unsafe_access_globals = c;
        X.__unsafe_access_globals.o = "unsafe_access_globals";
        X.__unsafe_access_globals.isVendorTemplate = !0;
        X.__unsafe_access_globals.priorityOverride = 0;
        X.__unsafe_access_globals.isInfrastructure = !1;
        X.__unsafe_access_globals.runInSiloedMode = !1;
      })(function (c) {
        var d = c.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!z(f)) throw d(e, {}, "Wrong key type. Must be string.");
          },
          M: b,
          mk: a,
        };
      });
    })();
  (X.securityGroups.smm = ["google"]),
    (X.__smm = function (a) {
      var b = a.vtp_input,
        c = JK(a.vtp_map, "key", "value") || {};
      return c.hasOwnProperty(b) ? c[b] : a.vtp_defaultValue;
    }),
    (X.__smm.o = "smm"),
    (X.__smm.isVendorTemplate = !0),
    (X.__smm.priorityOverride = 0),
    (X.__smm.isInfrastructure = !0),
    (X.__smm.runInSiloedMode = !1);

  (X.securityGroups.gaawe = ["google"]),
    (function () {
      function a(f, g, k) {
        for (var m = 0; m < g.length; m++)
          f.hasOwnProperty(g[m]) && (f[g[m]] = k(f[g[m]]));
      }
      function b(f, g, k) {
        var m = {},
          n = function (v, t) {
            m[v] = m[v] || t;
          },
          p = function (v, t, w) {
            w = w === void 0 ? !1 : w;
            c.push(6);
            if (v) {
              m.items = m.items || [];
              for (var x = {}, y = 0; y < v.length; x = { pf: void 0 }, y++)
                (x.pf = {}),
                  fb(
                    v[y],
                    (function (C) {
                      return function (D, H) {
                        w && D === "id"
                          ? (C.pf.promotion_id = H)
                          : w && D === "name"
                          ? (C.pf.promotion_name = H)
                          : (C.pf[D] = H);
                      };
                    })(x)
                  ),
                  m.items.push(x.pf);
            }
            if (t)
              for (var B in t) d.hasOwnProperty(B) ? n(d[B], t[B]) : n(B, t[B]);
          },
          q;
        f.vtp_getEcommerceDataFrom === "dataLayer"
          ? (q = f.vtp_gtmCachedValues.eventModel) ||
            (q = f.vtp_gtmCachedValues.ecommerce)
          : ((q = f.vtp_ecommerceMacroData),
            Qc(q) && q.ecommerce && !q.items && (q = q.ecommerce));
        if (Qc(q)) {
          var r = !1,
            u;
          for (u in q)
            q.hasOwnProperty(u) &&
              (r || (c.push(5), (r = !0)),
              u === "currencyCode"
                ? n("currency", q.currencyCode)
                : u === "impressions" && g === N.g.sb
                ? p(q.impressions, null)
                : u === "promoClick" && g === N.g.Lb
                ? p(q.promoClick.promotions, q.promoClick.actionField, !0)
                : u === "promoView" && g === N.g.tb
                ? p(q.promoView.promotions, q.promoView.actionField, !0)
                : e.hasOwnProperty(u)
                ? g === e[u] && p(q[u].products, q[u].actionField)
                : (m[u] = q[u]));
          GK(m, k);
        }
      }
      var c = [],
        d = { id: "transaction_id", revenue: "value", list: "item_list_name" },
        e = {
          click: "select_item",
          detail: "view_item",
          add: "add_to_cart",
          remove: "remove_from_cart",
          checkout: "begin_checkout",
          checkout_option: "checkout_option",
          purchase: "purchase",
          refund: "refund",
        };
      (function (f) {
        X.__gaawe = f;
        X.__gaawe.o = "gaawe";
        X.__gaawe.isVendorTemplate = !0;
        X.__gaawe.priorityOverride = 0;
        X.__gaawe.isInfrastructure = !1;
        X.__gaawe.runInSiloedMode = !1;
      })(function (f) {
        var g;
        g = f.vtp_migratedToV2
          ? String(f.vtp_measurementIdOverride)
          : String(f.vtp_measurementIdOverride || f.vtp_measurementId);
        if (z(g) && g.indexOf("G-") === 0) {
          var k = String(f.vtp_eventName),
            m = {};
          c = [];
          f.vtp_sendEcommerceData &&
            (nh.hasOwnProperty(k) || k === "checkout_option") &&
            b(f, k, m);
          var n = f.vtp_eventSettingsVariable;
          if (n) for (var p in n) n.hasOwnProperty(p) && (m[p] = n[p]);
          if (f.vtp_eventSettingsTable) {
            var q = JK(f.vtp_eventSettingsTable, "parameter", "parameterValue"),
              r;
            for (r in q) m[r] = q[r];
          }
          var u = JK(f.vtp_eventParameters, "name", "value"),
            v;
          for (v in u) u.hasOwnProperty(v) && (m[v] = u[v]);
          var t = f.vtp_userDataVariable;
          t && (m[N.g.Fa] = t);
          if (m.hasOwnProperty(N.g.nb) || f.vtp_userProperties) {
            var w = m[N.g.nb] || {};
            GK(JK(f.vtp_userProperties, "name", "value"), w);
            m[N.g.nb] = w;
          }
          var x = {
            originatingEntity: Gx(1, f.vtp_gtmEntityIndex, f.vtp_gtmEntityName),
          };
          if (c.length > 0) {
            var y = {};
            x.eventMetadata = ((y.event_usage = c), y);
          }
          a(m, oh, function (C) {
            return ib(C);
          });
          a(m, qh, function (C) {
            return Number(C);
          });
          var B = f.vtp_gtmEventId;
          x.noGtmEvent = !0;
          My(Ky(g, k, m), B, x);
          G(f.vtp_gtmOnSuccess);
        } else G(f.vtp_gtmOnFailure);
      });
    })();

  (X.securityGroups.detect_link_click_events = ["google"]),
    (function () {
      function a(b, c) {
        return { options: c };
      }
      (function (b) {
        X.__detect_link_click_events = b;
        X.__detect_link_click_events.o = "detect_link_click_events";
        X.__detect_link_click_events.isVendorTemplate = !0;
        X.__detect_link_click_events.priorityOverride = 0;
        X.__detect_link_click_events.isInfrastructure = !1;
        X.__detect_link_click_events.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowWaitForTags,
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!c && f && f.waitForTags)
              throw d(e, {}, "Prohibited option waitForTags.");
          },
          M: a,
        };
      });
    })();
  (X.securityGroups.load_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, firstPartyUrl: d };
      }
      (function (b) {
        X.__load_google_tags = b;
        X.__load_google_tags.o = "load_google_tags";
        X.__load_google_tags.isVendorTemplate = !0;
        X.__load_google_tags.priorityOverride = 0;
        X.__load_google_tags.isInfrastructure = !1;
        X.__load_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_allowFirstPartyUrls || !1,
          e = b.vtp_allowedFirstPartyUrls || "specific",
          f = b.vtp_urls || [],
          g = b.vtp_tagIds || [],
          k = b.vtp_createPermissionError;
        return {
          assert: function (m, n, p) {
            (function (q) {
              if (!z(q)) throw k(m, {}, "Tag ID must be a string.");
              if (c !== "any" && (c !== "specific" || g.indexOf(q) === -1))
                throw k(m, {}, "Prohibited Tag ID: " + q + ".");
            })(n);
            (function (q) {
              if (q !== void 0) {
                if (!z(q)) throw k(m, {}, "First party URL must be a string.");
                if (d) {
                  if (e === "any") return;
                  if (e === "specific")
                    try {
                      if (xg(Ej(q), f)) return;
                    } catch (r) {
                      throw k(m, {}, "Invalid first party URL filter.");
                    }
                }
                throw k(m, {}, "Prohibited first party URL: " + q);
              }
            })(p);
          },
          M: a,
        };
      });
    })();
  (X.securityGroups.read_container_data = ["google"]),
    (X.__read_container_data = function () {
      return {
        assert: function () {},
        M: function () {
          return {};
        },
      };
    }),
    (X.__read_container_data.o = "read_container_data"),
    (X.__read_container_data.isVendorTemplate = !0),
    (X.__read_container_data.priorityOverride = 0),
    (X.__read_container_data.isInfrastructure = !1),
    (X.__read_container_data.runInSiloedMode = !1);

  (X.securityGroups.sp = ["google"]),
    (X.__sp = function (a) {
      var b,
        c = {};
      a.vtp_customParamsFormat == "DATA_LAYER" && Qc(a.vtp_dataLayerVariable)
        ? (c = GK(a.vtp_dataLayerVariable))
        : a.vtp_customParamsFormat == "USER_SPECIFIED" &&
          (c = JK(a.vtp_customParams, "key", "value"));
      b = c;
      b[N.g.Ff] = !0;
      var d =
        !a.hasOwnProperty("vtp_enableConversionLinker") ||
        !!a.vtp_enableConversionLinker;
      b[N.g.ib] = a.vtp_conversionCookiePrefix;
      b[N.g.ya] = d;
      b[N.g.ia] = WK(N.g.ia);
      a.vtp_enableDynamicRemarketing &&
        (a.vtp_eventValue && (b[N.g.oa] = a.vtp_eventValue),
        a.vtp_eventItems && (b[N.g.da] = a.vtp_eventItems));
      a.vtp_rdp && (b[N.g.Qb] = !0);
      a.vtp_userId && (b[N.g.Ca] = a.vtp_userId);
      (b[N.g.Da] = WK(N.g.Da)),
        (b[N.g.na] = WK(N.g.na)),
        (b[N.g.fc] = WK(N.g.fc)),
        (b[N.g.Ma] = WK(N.g.Ma));
      var e = "AW-" + a.vtp_conversionId,
        f = e + (a.vtp_conversionLabel ? "/" + a.vtp_conversionLabel : "");
      yx(e, void 0, { source: 7, fromContainerExecution: !0, siloed: !0 });
      var g = {},
        k = {
          eventMetadata: ((g.hit_type_override = "remarketing"), g),
          noGtmEvent: !0,
          isGtmEvent: !0,
          onSuccess: a.vtp_gtmOnSuccess,
          onFailure: a.vtp_gtmOnFailure,
        };
      My(Ky(jk(f), a.vtp_eventName || "", b), a.vtp_gtmEventId, k);
    }),
    (X.__sp.o = "sp"),
    (X.__sp.isVendorTemplate = !0),
    (X.__sp.priorityOverride = 0),
    (X.__sp.isInfrastructure = !1),
    (X.__sp.runInSiloedMode = !1);

  (X.securityGroups.access_consent = ["google"]),
    (function () {
      function a(b, c, d) {
        var e = { consentType: c, read: !1, write: !1 };
        switch (d) {
          case "read":
            e.read = !0;
            break;
          case "write":
            e.write = !0;
            break;
          default:
            throw Error("Invalid " + b + " request " + d);
        }
        return e;
      }
      (function (b) {
        X.__access_consent = b;
        X.__access_consent.o = "access_consent";
        X.__access_consent.isVendorTemplate = !0;
        X.__access_consent.priorityOverride = 0;
        X.__access_consent.isInfrastructure = !1;
        X.__access_consent.runInSiloedMode = !1;
      })(function (b) {
        for (
          var c = b.vtp_consentTypes || [],
            d = b.vtp_createPermissionError,
            e = [],
            f = [],
            g = 0;
          g < c.length;
          g++
        ) {
          var k = c[g],
            m = k.consentType;
          k.read && e.push(m);
          k.write && f.push(m);
        }
        return {
          assert: function (n, p, q) {
            if (!z(p)) throw d(n, {}, "Consent type must be a string.");
            if (q === "read") {
              if (e.indexOf(p) > -1) return;
            } else if (q === "write") {
              if (f.indexOf(p) > -1) return;
            } else
              throw d(
                n,
                {},
                "Access type must be either 'read', or 'write', was " + q
              );
            throw d(n, {}, "Prohibited " + q + " on consent type: " + p + ".");
          },
          M: a,
        };
      });
    })();
  (X.securityGroups.inject_script = ["google"]),
    (function () {
      function a(b, c) {
        return { url: c };
      }
      (function (b) {
        X.__inject_script = b;
        X.__inject_script.o = "inject_script";
        X.__inject_script.isVendorTemplate = !0;
        X.__inject_script.priorityOverride = 0;
        X.__inject_script.isInfrastructure = !1;
        X.__inject_script.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_urls || [],
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!z(f)) throw d(e, {}, "Script URL must be a string.");
            try {
              if (xg(Ej(f), c)) return;
            } catch (g) {
              throw d(e, {}, "Invalid script URL filter.");
            }
            throw d(e, {}, "Prohibited script URL: " + f);
          },
          M: a,
        };
      });
    })();
  (X.securityGroups.unsafe_run_arbitrary_javascript = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        X.__unsafe_run_arbitrary_javascript = b;
        X.__unsafe_run_arbitrary_javascript.o =
          "unsafe_run_arbitrary_javascript";
        X.__unsafe_run_arbitrary_javascript.isVendorTemplate = !0;
        X.__unsafe_run_arbitrary_javascript.priorityOverride = 0;
        X.__unsafe_run_arbitrary_javascript.isInfrastructure = !1;
        X.__unsafe_run_arbitrary_javascript.runInSiloedMode = !1;
      })(function () {
        return { assert: function () {}, M: a };
      });
    })();

  (X.securityGroups.awct = ["google"]),
    (function () {
      function a(b, c, d) {
        return function (e, f, g, k) {
          k = k === void 0 ? !1 : k;
          var m = d === "DATA_LAYER" ? WK(g) : b[f];
          (k && m == null) || (c[e] = m);
        };
      }
      (function (b) {
        X.__awct = b;
        X.__awct.o = "awct";
        X.__awct.isVendorTemplate = !0;
        X.__awct.priorityOverride = 0;
        X.__awct.isInfrastructure = !1;
        X.__awct.runInSiloedMode = !1;
      })(function (b) {
        var c =
            !b.hasOwnProperty("vtp_enableConversionLinker") ||
            !!b.vtp_enableConversionLinker,
          d =
            !!b.vtp_enableEnhancedConversions ||
            !!b.vtp_enableEnhancedConversion,
          e = JK(b.vtp_customVariables, "varName", "value") || {},
          f = {},
          g =
            ((f[N.g.oa] = b.vtp_conversionValue || 0),
            (f[N.g.Aa] = b.vtp_currencyCode),
            (f[N.g.Ba] = b.vtp_orderId),
            (f[N.g.ib] = b.vtp_conversionCookiePrefix),
            (f[N.g.ya] = c),
            (f[N.g.ce] = d),
            (f[N.g.ia] = WK(N.g.ia)),
            (f[N.g.fa] = WK("developer_id")),
            f);
        (g[N.g.Da] = WK(N.g.Da)),
          (g[N.g.na] = WK(N.g.na)),
          (g[N.g.fc] = WK(N.g.fc)),
          (g[N.g.Ma] = WK(N.g.Ma));
        b.vtp_rdp && (g[N.g.Qb] = !0);
        if (b.vtp_enableCustomParams)
          for (var k in e) vh.hasOwnProperty(k) || (g[k] = e[k]);
        if (b.vtp_enableProductReporting) {
          var m = a(b, g, b.vtp_productReportingDataSource);
          m(N.g.he, "vtp_awMerchantId", "aw_merchant_id");
          m(N.g.ee, "vtp_awFeedCountry", "aw_feed_country");
          m(N.g.fe, "vtp_awFeedLanguage", "aw_feed_language");
          R(100) &&
            (m(N.g.Pf, "vtp_awMerchantId", "merchant_id", !0),
            m(N.g.Nf, "vtp_awFeedCountry", "merchant_feed_label", !0),
            m(N.g.Of, "vtp_awFeedLanguage", "merchant_feed_language", !0));
          m(N.g.de, "vtp_discount", "discount");
          m(N.g.da, "vtp_items", "items");
        }
        b.vtp_enableShippingData &&
          ((g[N.g.Bd] = b.vtp_deliveryPostalCode),
          (g[N.g.pe] = b.vtp_estimatedDeliveryDate),
          (g[N.g.Ec] = b.vtp_deliveryCountry),
          (g[N.g.pd] = b.vtp_shippingFee));
        b.vtp_transportUrl && (g[N.g.Sb] = b.vtp_transportUrl);
        if (b.vtp_enableNewCustomerReporting) {
          var n = a(b, g, b.vtp_newCustomerReportingDataSource);
          n(N.g.vd, "vtp_awNewCustomer", "new_customer");
          n(N.g.ie, "vtp_awCustomerLTV", "customer_lifetime_value");
        }
        var p;
        a: {
          if (b.vtp_enableEnhancedConversion) {
            var q =
              b.vtp_cssProvidedEnhancedConversionValue ||
              b.vtp_enhancedConversionObject;
            if (q) {
              p = {
                enhanced_conversions_mode: "manual",
                enhanced_conversions_manual_var: q,
              };
              break a;
            }
          }
          p = void 0;
        }
        var r = p;
        if (r) {
          var u = {};
          g[N.g.oe] = ((u[b.vtp_conversionLabel] = r), u);
        }
        var v = "AW-" + b.vtp_conversionId,
          t = v + "/" + b.vtp_conversionLabel;
        yx(v, b.vtp_transportUrl, {
          source: 7,
          fromContainerExecution: !0,
          siloed: !0,
        });
        var w = {},
          x = {
            eventMetadata: ((w.hit_type_override = "conversion"), w),
            noGtmEvent: !0,
            isGtmEvent: !0,
            onSuccess: b.vtp_gtmOnSuccess,
            onFailure: b.vtp_gtmOnFailure,
          };
        My(Ky(jk(t), N.g.Ka, g), b.vtp_gtmEventId, x);
      });
    })();
  (X.securityGroups.unsafe_inject_arbitrary_html = ["google"]),
    (function () {
      function a(b, c, d) {
        return { useIframe: c, supportDocumentWrite: d };
      }
      (function (b) {
        X.__unsafe_inject_arbitrary_html = b;
        X.__unsafe_inject_arbitrary_html.o = "unsafe_inject_arbitrary_html";
        X.__unsafe_inject_arbitrary_html.isVendorTemplate = !0;
        X.__unsafe_inject_arbitrary_html.priorityOverride = 0;
        X.__unsafe_inject_arbitrary_html.isInfrastructure = !1;
        X.__unsafe_inject_arbitrary_html.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_createPermissionError;
        return {
          assert: function (d, e, f) {
            if (e && f)
              throw c(
                d,
                {},
                "Only one of useIframe and supportDocumentWrite can be true."
              );
            if (e !== void 0 && typeof e !== "boolean")
              throw c(d, {}, "useIframe must be a boolean.");
            if (f !== void 0 && typeof f !== "boolean")
              throw c(d, {}, "supportDocumentWrite must be a boolean.");
          },
          M: a,
        };
      });
    })();
  (X.securityGroups.remm = ["google"]),
    (X.__remm = function (a) {
      for (
        var b = a.vtp_input,
          c = a.vtp_map || [],
          d = a.vtp_fullMatch,
          e = a.vtp_ignoreCase ? "gi" : "g",
          f = a.vtp_defaultValue,
          g = 0;
        g < c.length;
        g++
      ) {
        var k = c[g].key || "";
        d && (k = "^" + k + "$");
        var m = new RegExp(k, e);
        if (m.test(b)) {
          var n = c[g].value;
          a.vtp_replaceAfterMatch && (n = String(b).replace(m, n));
          f = n;
          break;
        }
      }
      return f;
    }),
    (X.__remm.o = "remm"),
    (X.__remm.isVendorTemplate = !0),
    (X.__remm.priorityOverride = 0),
    (X.__remm.isInfrastructure = !0),
    (X.__remm.runInSiloedMode = !1);

  (X.securityGroups.write_data_layer = ["google"]),
    (function () {
      function a(b, c) {
        return { key: c };
      }
      (function (b) {
        X.__write_data_layer = b;
        X.__write_data_layer.o = "write_data_layer";
        X.__write_data_layer.isVendorTemplate = !0;
        X.__write_data_layer.priorityOverride = 0;
        X.__write_data_layer.isInfrastructure = !1;
        X.__write_data_layer.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_keyPatterns || [],
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!z(f)) throw d(e, {}, "Keys must be strings.");
            try {
              if (gg(f, c)) return;
            } catch (g) {
              throw d(e, {}, "Invalid key filter.");
            }
            throw d(
              e,
              {},
              "Prohibited write to data layer variable: " + f + "."
            );
          },
          M: a,
        };
      });
    })();
  (X.securityGroups.detect_click_events = ["google"]),
    (function () {
      function a(b, c, d) {
        return { matchCommonButtons: c, cssSelector: d };
      }
      (function (b) {
        X.__detect_click_events = b;
        X.__detect_click_events.o = "detect_click_events";
        X.__detect_click_events.isVendorTemplate = !0;
        X.__detect_click_events.priorityOverride = 0;
        X.__detect_click_events.isInfrastructure = !1;
        X.__detect_click_events.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_createPermissionError;
        return {
          assert: function (d, e, f) {
            if (e !== void 0 && typeof e !== "boolean")
              throw c(d, {}, "matchCommonButtons must be a boolean.");
            if (f !== void 0 && typeof f !== "string")
              throw c(d, {}, "cssSelector must be a string.");
          },
          M: a,
        };
      });
    })();
  (X.securityGroups.logging = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        X.__logging = b;
        X.__logging.o = "logging";
        X.__logging.isVendorTemplate = !0;
        X.__logging.priorityOverride = 0;
        X.__logging.isInfrastructure = !1;
        X.__logging.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_environments || "debug",
          d = b.vtp_createPermissionError;
        return {
          assert: function (e) {
            var f;
            if ((f = c !== "all" && !0)) {
              var g = !1;
              f = !g;
            }
            if (f) throw d(e, {}, "Logging is not enabled in all environments");
          },
          M: a,
        };
      });
    })();

  (X.securityGroups.configure_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, configuration: d };
      }
      (function (b) {
        X.__configure_google_tags = b;
        X.__configure_google_tags.o = "configure_google_tags";
        X.__configure_google_tags.isVendorTemplate = !0;
        X.__configure_google_tags.priorityOverride = 0;
        X.__configure_google_tags.isInfrastructure = !1;
        X.__configure_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_tagIds || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!z(g)) throw e(f, {}, "Tag ID must be a string.");
            if (c !== "any" && (c !== "specific" || d.indexOf(g) === -1))
              throw e(f, {}, "Prohibited configuration for Tag ID: " + g + ".");
          },
          M: a,
        };
      });
    })();

  (X.securityGroups.zone = []),
    (function () {
      var a = {},
        b = function (d) {
          for (var e = 0; e < d.length; e++) if (!d[e]) return !1;
          return !0;
        },
        c = function (d) {
          var e = b(d.vtp_boundaries || []);
          if (d.vtp_gtmTagId in a) RB(a[d.vtp_gtmTagId], d.vtp_gtmEventId, e);
          else if (e) {
            var f = d.vtp_childContainers.map(function (n) {
                return n.publicId;
              }),
              g = d.vtp_enableTypeRestrictions
                ? d.vtp_whitelistedTypes.map(function (n) {
                    return n.typeId;
                  })
                : null,
              k = {};
            var m = TB(
              d.vtp_gtmEventId,
              f,
              g,
              k,
              Gx(1, d.vtp_gtmEntityIndex, d.vtp_gtmEntityName),
              !!d.vtp_inheritParentConfig
            );
            a[d.vtp_gtmTagId] = m;
          }
          G(d.vtp_gtmOnSuccess);
        };
      X.__zone = c;
      X.__zone.o = "zone";
      X.__zone.isVendorTemplate = !0;
      X.__zone.priorityOverride = 0;
      X.__zone.isInfrastructure = !1;
      X.__zone.runInSiloedMode = !1;
    })();

  var aL = {
    dataLayer: mj,
    callback: function (a) {
      Yi.hasOwnProperty(a) && Za(Yi[a]) && Yi[a]();
      delete Yi[a];
    },
    bootstrap: 0,
    _spx: !1,
  };
  (aL.onHtmlSuccess = BA(!0)), (aL.onHtmlFailure = BA(!1));
  function bL() {
    Ji[lk()] = Ji[lk()] || aL;
    vk();
    zk() ||
      fb(Ak(), function (d, e) {
        yx(d, e.transportUrl, e.context);
        T(92);
      });
    qb(Zi, X.securityGroups);
    var a = pk(qk()),
      b,
      c = a == null ? void 0 : (b = a.context) == null ? void 0 : b.source;
    (c !== 2 && c !== 4 && c !== 3) || T(142);
    xA(),
      nf({
        Lm: function (d) {
          return d === vA;
        },
        Zl: function (d) {
          return new yA(d);
        },
        Mm: function (d) {
          for (var e = !1, f = !1, g = 2; g < d.length; g++)
            (e = e || d[g] === 8), (f = f || d[g] === 16);
          return e && f;
        },
        hn: function (d) {
          var e;
          if (d === vA) e = d;
          else {
            var f = $i();
            wA[f] = d;
            e = 'google_tag_manager["rm"]["' + nk() + '"](' + f + ")";
          }
          return e;
        },
      });
    pf = Gf;
  }
  var cL = !1;
  (function (a) {
    function b() {
      n = E.documentElement.getAttribute("data-tag-assistant-present");
      Xz(n) && (m = k.Kj);
    }
    function c() {
      m && fc ? g(m) : a();
    }
    if (!A["__TAGGY_INSTALLED"]) {
      var d = !1;
      if (E.referrer) {
        var e = Ej(E.referrer);
        d = Aj(e, "host") === "cct.google";
      }
      if (!d) {
        var f = Qo("googTaggyReferrer");
        d = !(!f.length || !f[0].length);
      }
      d &&
        ((A["__TAGGY_INSTALLED"] = !0),
        lc("https://cct.google/taggy/agent.js"));
    }
    var g = function (v) {
        var t = "GTM",
          w = "GTM";
        Pi && ((t = "OGT"), (w = "GTAG"));
        var x = A["google.tagmanager.debugui2.queue"];
        x ||
          ((x = []),
          (A["google.tagmanager.debugui2.queue"] = x),
          lc(
            "https://" +
              Ii.Bf +
              "/debug/bootstrap?id=" +
              Mf.ctid +
              "&src=" +
              w +
              "&cond=" +
              v +
              "&gtm=" +
              No()
          ));
        var y = {
          messageType: "CONTAINER_STARTING",
          data: {
            scriptSource: fc,
            containerProduct: t,
            debug: !1,
            id: Mf.ctid,
            targetRef: { ctid: Mf.ctid, isDestination: fk() },
            aliases: ik(),
            destinations: gk(),
          },
        };
        y.data.resume = function () {
          a();
        };
        Ii.Wk && (y.data.initialPublish = !0);
        x.push(y);
      },
      k = { yl: 1, Mj: 2, bk: 3, Mi: 4, Kj: 5 };
    k[k.yl] = "GTM_DEBUG_LEGACY_PARAM";
    k[k.Mj] = "GTM_DEBUG_PARAM";
    k[k.bk] = "REFERRER";
    k[k.Mi] = "COOKIE";
    k[k.Kj] = "EXTENSION_PARAM";
    var m = void 0,
      n = void 0,
      p = yj(A.location, "query", !1, void 0, "gtm_debug");
    Xz(p) && (m = k.Mj);
    if (!m && E.referrer) {
      var q = Ej(E.referrer);
      Aj(q, "host") === "tagassistant.google.com" && (m = k.bk);
    }
    if (!m) {
      var r = Qo("__TAG_ASSISTANT");
      r.length && r[0].length && (m = k.Mi);
    }
    m || b();
    if (!m && Yz(n)) {
      var u = !1;
      rc(
        E,
        "TADebugSignal",
        function () {
          u || ((u = !0), b(), c());
        },
        !1
      );
      A.setTimeout(function () {
        u || ((u = !0), b(), c());
      }, 200);
    } else c();
  })(function () {
    try {
      var a;
      if (!(a = cL)) {
        var b;
        a: {
          for (var c = Zj(), d = l(hk()), e = d.next(); !e.done; e = d.next())
            if (c.injectedFirstPartyContainers[e.value]) {
              b = !0;
              break a;
            }
          b = !1;
        }
        a = !b;
      }
      if (a) {
        tk();
        if (R(91)) {
        }
        Wh[9] = !0;
        fk();
        if (!Hl) {
          Hl = !0;
          for (var f = Il.length - 1; f >= 0; f--) Il[f]();
          Il = [];
        }
        fo();
        Rl();
        var g = nk();
        if (Zj().canonical[g]) {
          var k = Ji.zones;
          k && k.unregisterChild(hk());
          jx().removeExternalRestrictions(nk());
        } else {
          Gu();
          var m = cj.aa,
            n = Hi.En;
          m.j = new Set();
          if (n !== "")
            for (var p = l(n.split("~")), q = p.next(); !q.done; q = p.next()) {
              var r = Number(q.value);
              isNaN(r) || m.j.add(r);
            }
          cj.H = "";
          cj.Ta =
            "ad_storage|analytics_storage|ad_user_data|ad_personalization";
          cj.P = "ad_storage|analytics_storage|ad_user_data";
          cj.K = "4bj0";
          cj.K = "4cc0";
          ux();
          for (
            var u = data.resource || {}, v = u.macros || [], t = 0;
            t < v.length;
            t++
          )
            ef.push(v[t]);
          for (var w = u.tags || [], x = 0; x < w.length; x++) hf.push(w[x]);
          for (var y = u.predicates || [], B = 0; B < y.length; B++)
            gf.push(y[B]);
          for (var C = u.rules || [], D = 0; D < C.length; D++) {
            for (var H = C[D], J = {}, F = 0; F < H.length; F++) {
              var S = H[F][0];
              J[S] = Array.prototype.slice.call(H[F], 1);
              (S !== "if" && S !== "unless") || of(J[S]);
            }
            ff.push(J);
          }
          kf = X;
          lf = DA;
          If = new Pf();
          var M = data.sandboxed_scripts,
            Z = data.security_groups;
          a: {
            var ca = data.runtime || [],
              da = data.runtime_lines;
            PA = new ze();
            CK();
            df = OA();
            var Y = PA,
              Q = BK(),
              oa = new Wc("require", Q);
            oa.Ga();
            Y.j.j.set("require", oa);
            for (var na = [], ea = 0; ea < ca.length; ea++) {
              var ua = ca[ea];
              if (!Array.isArray(ua) || ua.length < 3) {
                if (ua.length === 0) continue;
                break a;
              }
              da && da[ea] && da[ea].length && zf(ua, da[ea]);
              try {
                PA.execute(ua), R(104) && Sj && ua[0] === 50 && na.push(ua[1]);
              } catch (oo) {}
            }
            R(104) && (qf = na);
          }
          if (M && M.length)
            for (var Ra = ["sandboxedScripts"], Aa = 0; Aa < M.length; Aa++) {
              var Sa = M[Aa].replace(/^_*/, "");
              Zi[Sa] = Ra;
            }
          DK(Z);
          bL();
          if (!Ti)
            for (
              var kb = ql() ? gj(cj.P) : gj(cj.Ta), mc = 0;
              mc < ul.length;
              mc++
            ) {
              var ge = ul[mc],
                Dh = ge,
                dL = kb[ge] ? "granted" : "denied";
              Qk().implicit(Dh, dL);
            }
          Wz();
          zx = !1;
          Ax = 0;
          if (
            (E.readyState === "interactive" && !E.createEventObject) ||
            E.readyState === "complete"
          )
            Cx();
          else {
            rc(E, "DOMContentLoaded", Cx);
            rc(E, "readystatechange", Cx);
            if (E.createEventObject && E.documentElement.doScroll) {
              var Py = !0;
              try {
                Py = !A.frameElement;
              } catch (oo) {}
              Py && Dx();
            }
            rc(A, "load", Cx);
          }
          Bz = !1;
          E.readyState === "complete" ? Dz() : rc(A, "load", Dz);
          Sj &&
            (Fm(Sm),
            A.setInterval(Rm, 864e5),
            Fm(GA),
            Fm(cy),
            Fm(Iv),
            Fm(Vm),
            Fm(LA),
            Fm(ny),
            R(104) && (Fm(hy), Fm(iy), Fm(jy)));
          if (Tj) {
            Pk();
            lm();
            var Qy,
              Ry = Ej(A.location.href);
            (Qy = Ry.hostname + Ry.pathname) &&
              Hk("dl", encodeURIComponent(Qy));
            var po;
            var Sy = Mf.ctid;
            if (Sy) {
              var fL = ck.Ge ? 1 : 0,
                Fh,
                Ty = pk(qk());
              Fh = Ty && Ty.context;
              po =
                Sy +
                ";" +
                Mf.canonicalContainerId +
                ";" +
                (Fh && Fh.fromContainerExecution ? 1 : 0) +
                ";" +
                ((Fh && Fh.source) || 0) +
                ";" +
                fL;
            } else po = void 0;
            var Uy = po;
            Uy && Hk("tdp", Uy);
            var Vy = Mn(!0);
            Vy !== void 0 && Hk("frm", String(Vy));
            var qo;
            var Gh = pk(qk());
            if (Gh) {
              for (; Gh.parent; ) {
                var Wy = pk(Gh.parent);
                if (!Wy) break;
                Gh = Wy;
              }
              qo = Gh;
            } else qo = void 0;
            var Re = qo;
            if (!Re) T(144);
            else if (R(55) || Re.canonicalContainerId) {
              var ro;
              a: {
                var Xy,
                  Yy = (Xy = Re.scriptElement) == null ? void 0 : Xy.src;
                if (Yy) {
                  var so;
                  try {
                    var Zy;
                    so =
                      (Zy = Fc()) == null
                        ? void 0
                        : Zy.getEntriesByType("resource");
                  } catch (oo) {}
                  if (so) {
                    for (
                      var $y = -1, az = l(so), to = az.next();
                      !to.done;
                      to = az.next()
                    ) {
                      var bz = to.value;
                      if (bz.initiatorType === "script") {
                        $y += 1;
                        var uo = bz.name,
                          vo = Yy;
                        R(54) &&
                          ((uo = uo.replace(Zz, "")),
                          (vo = vo.replace(Zz, "")));
                        if (uo === vo) {
                          ro = $y;
                          break a;
                        }
                      }
                    }
                    T(146);
                  } else T(145);
                }
                ro = void 0;
              }
              var cz = ro;
              cz !== void 0 &&
                (Re.canonicalContainerId &&
                  Hk("rtg", String(Re.canonicalContainerId)),
                Hk("slo", String(cz)),
                Hk("hlo", Re.htmlLoadOrder || "-1"),
                Hk("lst", String(Re.loadScriptType || "0")));
            }
            var ek;
            var Hh = ok();
            if (Hh)
              if (Hh.canonicalContainerId) ek = Hh.canonicalContainerId;
              else {
                var dz,
                  ez =
                    Hh.scriptContainerId ||
                    ((dz = Hh.destinations) == null ? void 0 : dz[0]);
                ek = ez ? "_" + ez : void 0;
              }
            else ek = void 0;
            var fz = ek;
            fz && Hk("pcid", fz);
            R(38) &&
              (Hk("bt", String(cj.C ? 2 : Ri ? 1 : 0)),
              Hk("ct", String(cj.C ? 0 : Ri ? 1 : Lo() ? 2 : 3)));
          }
          google_tag_manager_external.postscribe.installPostscribe();
          tA();
          ll(1);
          YB();
          Xi = nb();
          aL.bootstrap = Xi;
          if (R(91)) {
          }
          R(118) &&
            (typeof A.name === "string" &&
            sb(A.name, "web-pixel-sandbox-CUSTOM") &&
            Gc()
              ? EK("dMDg0Yz")
              : A.Shopify && Gc() && EK("dNTU0Yz"));
        }
      }
    } catch (oo) {
      if ((ll(4), Sj)) {
        var gL = Mm(!0, !0);
        qc(gL);
      }
    }
  });
})();

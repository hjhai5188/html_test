!(function (e, t) {
  "object" === typeof exports && "object" === typeof module
    ? (module.exports = t())
    : "function" === typeof define && define.amd
    ? define("account_web_sdk", [], t)
    : "object" === typeof exports
    ? (exports.account_web_sdk = t())
    : (e.account_web_sdk = t());
})(window, function () {
  return (function (e) {
    var t = {};
    function n(o) {
      if (t[o]) return t[o].exports;
      var r = (t[o] = { i: o, l: !1, exports: {} });
      return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
      }),
      (n.r = function (e) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (
          (n.r(o),
          Object.defineProperty(o, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var r in e)
            n.d(
              o,
              r,
              function (t) {
                return e[t];
              }.bind(null, r)
            );
        return o;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ""),
      n((n.s = 0))
    );
  })([
    function (e, t, n) {
      "use strict";
      function o(e) {
        return (
          (o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          o(e)
        );
      }
      function r(e) {
        var t = (function (e, t) {
          if ("object" !== o(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== o(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === o(t) ? t : String(t);
      }
      function a(e, t, n) {
        return (
          (t = r(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function s(e, t) {
        if (null == e) return {};
        var n,
          o,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              o,
              r = {},
              a = Object.keys(e);
            for (o = 0; o < a.length; o++)
              (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (o = 0; o < a.length; o++)
            (n = a[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      function l(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, r(o.key), o);
        }
      }
      function p(e, t, n) {
        return (
          t && u(e.prototype, t),
          n && u(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function d(e, t) {
        var n = t || location.search,
          o = new RegExp("(^|&)".concat(e, "=([^&]*)(&|$)")),
          r = n.substring(n.indexOf("?") + 1).match(o);
        return null !== r
          ? (function (e) {
              try {
                return decodeURIComponent(e);
              } catch (t) {}
              return "";
            })(r[2])
          : "";
      }
      function g(e, t) {
        var n,
          o,
          r = t
            ? (t.match(/#.*/) &&
                (null === (n = t.match(/#.*/)) || void 0 === n
                  ? void 0
                  : n[0])) ||
              ""
            : location.hash,
          a = t
            ? (t.replace(/#.*/, "").match(/\?.*/) &&
                (null === (o = t.replace(/#.*/, "").match(/\?.*/)) ||
                void 0 === o
                  ? void 0
                  : o[0])) ||
              ""
            : location.search,
          i = t
            ? t.replace(/#.*/, "").replace(/\?.*/, "")
            : ""
                .concat(location.protocol, "//")
                .concat(location.host)
                .concat(location.pathname);
        if (0 === r.indexOf("#/") && !a)
          return "".concat(i + a, "#").concat(g(e, r.slice(1)));
        for (var c in e)
          if ("undefined" !== typeof e[c]) {
            var s = encodeURIComponent(String(e[c])),
              l = "".concat(c, "=").concat(s),
              u = d(c, t);
            a = u
              ? a.replace(
                  "".concat(c, "=").concat(u),
                  "".concat(c, "=").concat(s)
                )
              : a.length > 0
              ? "".concat(a, "&").concat(l)
              : "?".concat(l);
          }
        return i + a + r;
      }
      function h(e, t) {
        var n = {};
        return (
          ["language"].forEach(function (t) {
            var o = d(t, e) || d(t);
            o.length > 0 && (n[t] = o);
          }),
          g(
            c(c({}, n), t),
            e.startsWith("/")
              ? ""
                  .concat(location.protocol, "//")
                  .concat(location.host)
                  .concat(e)
              : e
          )
        );
      }
      n.r(t),
        n.d(t, "default", function () {
          return H;
        });
      var f = 1e4;
      function v() {}
      var b = "object" === typeof window,
        y =
          (["OPPO", "OnePlus", "REALME", "HeyTap"].reduce(function (e, t) {
            return (e[t.toLowerCase()] = t), e;
          }, {}),
          [
            "accounts.oneplus.com",
            "uc-oneplusweb-us-test.wanyol.com",
            "uc-oneplusweb-in-test.wanyol.com",
          ]);
      "index.set".concat(
        y.includes(location.host) ? "_oversea_oneplus" : "",
        "_password_tip"
      );
      var m = (function () {
        function e(t, n) {
          l(this, e),
            (this.channelPort = void 0),
            (this.name = void 0),
            (this.category = void 0),
            (this.name = t),
            (this.category = n);
        }
        return (
          p(
            e,
            [
              {
                key: "connecting",
                get: function () {
                  return Boolean(this.channelPort);
                },
              },
              {
                key: "initMessage",
                get: function () {
                  return "".concat(this.name, "$$channel_loaded$$");
                },
              },
              {
                key: "passPortMessage",
                get: function () {
                  return "".concat(
                    this.name,
                    "$$message_channel_port_passed$$"
                  );
                },
              },
              {
                key: "broadcast",
                value: function () {
                  "outer" !== this.category
                    ? window.parent &&
                      window.parent.postMessage(this.initMessage, "*")
                    : e.logError(
                        "outer \u7c7b\u522b\u65e0\u6cd5\u4f7f\u7528 broadcast \u65b9\u6cd5"
                      );
                },
              },
              {
                key: "checkBroadcast",
                value: function (t) {
                  return "inner" === this.category
                    ? (e.logError(
                        "inner \u7c7b\u522b\u65e0\u6cd5\u4f7f\u7528 checkBroadcast \u65b9\u6cd5"
                      ),
                      !1)
                    : t.data === this.initMessage;
                },
              },
              {
                key: "passPort",
                value: function (t, n, o) {
                  "inner" !== this.category
                    ? t.postMessage(this.passPortMessage, n, [o])
                    : e.logError(
                        "inner \u7c7b\u522b\u65e0\u6cd5\u4f7f\u7528 passPort \u65b9\u6cd5"
                      );
                },
              },
              {
                key: "checkPassPort",
                value: function (t) {
                  return "outer" === this.category
                    ? (e.logError(
                        "outer \u7c7b\u522b\u65e0\u6cd5\u4f7f\u7528 checkPassPort \u65b9\u6cd5"
                      ),
                      !1)
                    : t.data === this.passPortMessage;
                },
              },
              {
                key: "setPort",
                value: function (t) {
                  this.channelPort
                    ? e.logError(e.repeatSetChannelPortMessgae)
                    : (this.channelPort = t);
                },
              },
              {
                key: "release",
                value: function () {
                  var e;
                  null === (e = this.channelPort) || void 0 === e || e.close(),
                    (this.channelPort = void 0);
                },
              },
              {
                key: "post",
                value: function (t) {
                  this.channelPort
                    ? this.channelPort.postMessage(t)
                    : e.logError(e.notConnectingMessage);
                },
              },
              {
                key: "listen",
                value: function (t) {
                  this.channelPort
                    ? (this.channelPort.onmessage = function (e) {
                        t(e.data);
                      })
                    : e.logError(e.notConnectingMessage);
                },
              },
              {
                key: "removeListen",
                value: function () {
                  this.channelPort
                    ? (this.channelPort.onmessage = null)
                    : e.logError(e.notConnectingMessage);
                },
              },
            ],
            [
              {
                key: "logError",
                value: function (e) {
                  0;
                },
              },
            ]
          ),
          e
        );
      })();
      (m.notConnectingMessage = "\u5f53\u524d\u7aef\u53e3\u672a\u8fde\u63a5."),
        (m.repeatSetChannelPortMessgae =
          "\u91cd\u590d\u8bbe\u7f6e\u4e86\u767b\u9646\u5f39\u51fa\u5c42\u7684\u901a\u4fe1\u7aef\u53e3\uff0c\u5982\u679c\u8fd9\u4e0d\u662f\u6709\u610f\u7f16\u7801\u7684\uff0c\u8fd9\u6709\u53ef\u80fd\u5f15\u8d77\u4e00\u4e2a\u672a\u77e5\u7684\u6f5c\u5728 bug\u3002");
      var k = Symbol.for("$$MCD"),
        w = (function () {
          function e(t) {
            l(this, e),
              (this[k] = void 0),
              (this.name = void 0),
              (this.inner = void 0),
              (this.outer = void 0),
              (this[k] = t),
              (this.name = "[MessageChannelDelegator-name]: ".concat(this[k])),
              (this.inner = new m(this.name, "inner")),
              (this.outer = new m(this.name, "outer")),
              Object.freeze(this);
          }
          return (
            p(e, null, [
              {
                key: "isMessageChannelDelegator",
                value: function (e, t) {
                  return (
                    (function (e) {
                      return Boolean("object" === typeof e && e);
                    })(e) &&
                    k in e &&
                    e[k] === t
                  );
                },
              },
            ]),
            e
          );
        })(),
        P = new w("validate_center");
      function _(e) {
        try {
          e();
        } catch (t) {
          t instanceof Error &&
            console.error("[AccountClient-Web-error]: ".concat(t.message));
        }
      }
      function S(e, t) {
        if (
          !(
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : function (e) {
                  return Boolean(e);
                }
          )(e)
        )
          throw new Error(
            '[AccountClient-Web-error]: "'.concat(
              t,
              '" is a required parameter.'
            )
          );
      }
      function O(e, t) {
        return "[AccountClient-Web-".concat(e, "]: ").concat(t);
      }
      function C(e, t, n) {
        t &&
          (n
            ? console.error(O("error", e))
            : console.log("%c".concat(O("log", e)), "color: hotpink"));
      }
      function L(e, t) {
        Object.keys(t).forEach(function (n) {
          var o,
            r = n;
          0 ===
            (null === (o = e.style[r]) || void 0 === o ? void 0 : o.length) &&
            (e.style[r] = String(t[r]));
        });
      }
      var A = 999;
      function j(e, t, n, o, r) {
        var a = (function (e, t, n) {
          var o = document.createElement("iframe");
          o.setAttribute("id", e),
            o.setAttribute("name", e),
            o.setAttribute("border", "0"),
            o.setAttribute("frameborder", "0"),
            o.setAttribute("src", t),
            L(o, {
              position: "fixed",
              top: "0",
              right: "0",
              width: "100%",
              height: "100%",
              zIndex: String(A++),
              margin: "0",
              colorScheme: "light",
            });
          var r = "string" === typeof n ? document.querySelector(n) : n;
          return (
            !r && C("Could not find the insert Element Node", !0, !0),
            r && r.appendChild(o),
            o
          );
        })(e, t, o);
        a.style.visibility = "hidden";
        var i = new MessageChannel(),
          c = i.port1,
          s = i.port2,
          l = n.options.enableLog,
          u = n.safeHost;
        return (
          (a.contentWindow && b) ||
            C(
              "Unexpected branch happened in PopperAuth: iframe.contentWindow is falsy, probably an unhandled situation.",
              l
            ),
          C("initialize fullScreen <iframe />", n.options.enableLog),
          window.addEventListener("message", function e(t) {
            if (!r.outer.checkBroadcast(t))
              return (
                "*" !== u &&
                  t.origin !== u &&
                  C(
                    "check safe origin failed. eventOrigin: "
                      .concat(t.origin, ", safeOrigin: ")
                      .concat(u),
                    l
                  ),
                void C(
                  "check message event content failed. data: ".concat(t.data),
                  l
                )
              );
            C("Received init message.", l),
              (a.style.visibility = "visible"),
              a.contentWindow && r.outer.passPort(a.contentWindow, u, s),
              (n.$$avoidRepeatPopper = !1),
              C("channel port posted.", l),
              window.removeEventListener("message", e);
          }),
          { iframeEl: a, channelPort: c }
        );
      }
      function E(e, t) {
        var n;
        e.outer.removeListen(),
          e.outer.release(),
          (n = t),
          Boolean(n.parentElement && n.parentElement.removeChild(n));
      }
      function U(e, t, n, o) {
        var r = setTimeout(function () {
          t && "hidden" === t.style.visibility && (o && o(), E(e, t)),
            clearTimeout(r);
        }, n);
      }
      function $(e) {
        return function () {
          return "".concat(e, "-").concat(Date.now() + 1);
        };
      }
      var M = $("heytap_popper_validate_center"),
        x = $("heytap_popper_login"),
        z = $("heytap_login_sync");
      function R(e) {
        var t = e.validateCenterUrl,
          n = e.instance,
          o = e.config,
          r = o.onClose,
          a = void 0 === r ? v : r,
          i = o.onDestroy,
          c = void 0 === i ? v : i,
          s = o.onSuccess,
          l = void 0 === s ? v : s,
          u = o.timeout,
          p = void 0 === u ? f : u,
          d = n.options.enableLog;
        C("start create AuthPopper", d);
        var g = j(M(), t, n, document.body, P),
          h = g.iframeEl,
          b = g.channelPort;
        P.outer.setPort(b),
          P.outer.listen(function (e) {
            !(function (e, t, n) {
              var o = n.onClose,
                r = n.onSuccess,
                a = n.onDestroy;
              switch (e.type) {
                case "close":
                  C("close triggered.", t), a(), o();
                  break;
                case "validate_success":
                  C("validate_success triggered.", t),
                    C(
                      "Auth success while no valid ticket received,  probably a potential bug",
                      !e.ticket && t,
                      !0
                    ),
                    a(),
                    r(e.ticket || "", e.processToken);
                  break;
                default:
                  C(
                    "Unhandled data.type situation in PopperAuth, probably cause a potential bug.",
                    t
                  );
              }
            })(e, d, {
              onDestroy: c,
              onClose: function () {
                a(), E(P, h);
              },
              onSuccess: function (e, t) {
                l(e, t), E(P, h);
              },
            });
          }),
          U(P, h, p, function () {
            n.$$avoidRepeatPopper = !1;
          });
      }
      var B = new w("login");
      function I(e) {
        var t = e.popperUrl,
          n = e.instance,
          o = e.config,
          r = o.el,
          a = void 0 === r ? document.body : r,
          i = o.onCancel,
          c = void 0 === i ? v : i,
          s = o.onDestroy,
          l = void 0 === s ? v : s,
          u = o.onSuccess,
          p = void 0 === u ? v : u,
          d = o.onCreate,
          g = void 0 === d ? v : d,
          h = o.timeout,
          b = void 0 === h ? f : h,
          y = n.options.enableLog;
        C("start create LoginPopper", y);
        var m = j(x(), t, n, a, B),
          k = m.iframeEl,
          w = m.channelPort;
        B.outer.setPort(w),
          B.outer.listen(function (e) {
            !(function (e, t, n) {
              var o = n.onCancel,
                r = n.onSuccess,
                a = n.onDestroy,
                i = n.onCreate;
              switch (e.type) {
                case "close":
                  C("close triggered.", t), a(), o();
                  break;
                case "login_success":
                  C("login_success triggered.", t),
                    C(
                      "Popper login success while no valid code received,  probably a potential bug.",
                      !e.code && !e.ticket && t,
                      !0
                    ),
                    a(),
                    r(e.code || e.ticket || "");
                  break;
                case "start_show_popper":
                  C("start_show_popper triggered.", t), i();
              }
            })(e, y, {
              onDestroy: l,
              onCancel: function () {
                c(), E(B, k);
              },
              onSuccess: function (e) {
                p(e), E(B, k);
              },
              onCreate: g,
            });
          }),
          U(B, k, b, function () {
            (n.$$avoidRepeatPopper = !1), C("create popper timeout.", y);
          });
      }
      var K = "global",
        D = "v2",
        N = new w("login_sync");
      function W(e, t, n) {
        var o = (function (e, t) {
            var n = document.createElement("iframe");
            return (
              n.setAttribute("id", e),
              n.setAttribute("name", e),
              n.setAttribute("border", "0"),
              n.setAttribute("frameborder", "0"),
              n.setAttribute("src", t),
              L(n, {
                visibility: "hidden",
                opacity: "0",
                display: "none",
                width: "0",
                height: "0",
                zIndex: "-1",
                margin: "0",
              }),
              document.body.appendChild(n),
              n
            );
          })(z(), e),
          r = new MessageChannel(),
          a = r.port1,
          i = r.port2;
        return (
          N.outer.setPort(a),
          C("initialize hiddenScreen <iframe />", n),
          window.addEventListener("message", function e(r) {
            N.outer.checkBroadcast(r)
              ? (C("Received init message.", n),
                N.outer.passPort(o.contentWindow, t, i),
                C("channel port posted.", n),
                window.removeEventListener("message", e))
              : "*" !== t &&
                r.origin !== t &&
                C(
                  'check safe origin failed.", eventOrigin: '
                    .concat(r.origin, ", safeOrigin: ")
                    .concat(t),
                  n
                );
          }),
          new Promise(function (e, t) {
            N.outer.listen(function (r) {
              var a = { code: r.code || "", errMessage: "" };
              switch (r.type) {
                case "sync_success":
                  r.code
                    ? (C("AuthN success, get the valid authCode.", n), e(a))
                    : ((a.errMessage = O(
                        "error",
                        "AuthN success while no valid authCode received, probably a bug in account system, please report to the current SDK maintainer in time."
                      )),
                      t(a));
                  break;
                case "failed":
                  (a.errMessage = O(
                    "log",
                    "AuthN failed, the user perhaps not execute login action during a latest period."
                  )),
                    t(a);
              }
              E(N, o);
            });
            U(N, o, 1e4, function () {
              var e = {
                code: "",
                errMessage: O("error", "AuthN failed, the execution timeout."),
              };
              t(e);
            });
          })
        );
      }
      var T = [
          "mspBizK",
          "mspBizSec",
          "appId",
          "excludeValidateTypes",
          "timeout",
          "onClose",
          "onSuccess",
          "onDestroy",
          "pageEnable",
          "callbackUrl",
        ],
        H = (function () {
          function e(t) {
            l(this, e),
              (this.safeHost = void 0),
              (this.$$avoidRepeatPopper = void 0),
              (this.options = void 0);
            var n = (function (e) {
                var t = location.hostname,
                  n = e || t;
                return /dev/.test(n)
                  ? "dev"
                  : /(uc3|env3|jf3|test3)/.test(n)
                  ? "test3"
                  : /uctag/.test(n)
                  ? "tag"
                  : /(test|.myoas.net)/.test(n)
                  ? "test"
                  : /^pre-?/.test(location.hostname) ||
                    /-pre/.test(location.hostname)
                  ? "pre"
                  : "localhost" === n ||
                    /^(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/.test(
                      n
                    )
                  ? "local"
                  : "prod";
              })(),
              o = t || {},
              r = o.brand,
              a = void 0 === r ? e.supportBrand.heytap : r,
              i = o.enableLog,
              c = void 0 === i ? "prod" !== n : i,
              s = o.environment,
              u = void 0 === s ? n : s;
            if (!Object.values(e.supportBrand).includes(a))
              throw new Error('unkown brand: "'.concat(a, '"'));
            C("initialize, current environment: ".concat(u), c),
              (this.safeHost = (function (e, t) {
                for (
                  var n = [
                      function (e, t) {
                        return "oneplus_oversea" === e && "prod" === t
                          ? "https://accounts.oneplus.com"
                          : "";
                      },
                      function (e, t) {
                        return "prod" === t
                          ? "https://id.".concat(e, ".com")
                          : "";
                      },
                      function (e, t) {
                        return "pre" === t
                          ? "https://pre-id.".concat(e, ".com")
                          : "";
                      },
                      function (e, t) {
                        return "oneplus_oversea" === e && "test" === t
                          ? "https://uc-oneplusweb-us-test.wanyol.com"
                          : "";
                      },
                      function (e, t) {
                        return "realme" === e && "test" === t
                          ? "https://account.myoas.net"
                          : "";
                      },
                      function (e, t) {
                        var n = "oppo" === e ? "web" : "".concat(e, "-web");
                        return "test" === t
                          ? "https://uc-".concat(n, "-test.wanyol.com")
                          : "";
                      },
                      function (e, t) {
                        return "test3" === t && "oneplus_oversea" === e
                          ? "https://uc-oneplusweb-in-test.wanyol.com"
                          : "";
                      },
                      function (e, t) {
                        return "test3" === t
                          ? "https://uc3-".concat(
                              "oppo" === e ? "" : "".concat(e, "-"),
                              "web-test.wanyol.com"
                            )
                          : "";
                      },
                      function (e, t) {
                        return "tag" === t
                          ? "https://uctag-web-test.wanyol.com"
                          : "";
                      },
                      function (e, t) {
                        return "dev" === t
                          ? "https://uc-heytap-web-dev.wanyol.com"
                          : "";
                      },
                    ],
                    o = 0;
                  o < n.length;
                  o++
                ) {
                  var r = n[o](e, t);
                  if (r.length > 0) return r;
                }
                return "*";
              })(a, u)),
              (this.$$avoidRepeatPopper = !1),
              (this.options = { brand: a, enableLog: c, environment: u });
          }
          return (
            p(e, [
              {
                key: "host",
                get: function () {
                  return "*" === this.safeHost ? "" : this.safeHost;
                },
              },
              {
                key: "detectCallbackQuerySafety",
                value: function (e) {
                  var t = {
                    "state=[a-zA-Z0-9]+":
                      "\u672a\u5728\u56de\u8c03\u5730\u5740\u4e2d\u68c0\u6d4b\u5230 oauth2 \u6807\u51c6\u6d41\u7a0b\u4e2d\u4f7f\u7528\u5230\u7684 state query\uff0cstate \u53c2\u6570\u6821\u9a8c\u53ef\u7528\u4e8e\u5e2e\u52a9\u786e\u8ba4\u5f53\u524d\u63a5\u53d7\u56de\u8c03 code \u7684 uri \u4e0d\u662f\u7531\u6076\u610f\u65b9\u53d1\u8d77\uff0c\u4ee5\u6b64\u907f\u514d CSRF \u653b\u51fb\u3002\n\u8be6\u60c5\u4e86\u89e3\u94fe\u63a5\uff1ahttps://developers.google.com/identity/openid-connect/openid-connect?hl=en#state-param",
                  };
                  Object.keys(t).forEach(function (n) {
                    new RegExp(n).test(e) || C(t[n], !0, !0);
                  });
                },
              },
              {
                key: "auth",
                value: function (t) {
                  var n = this;
                  C("auth entry.", this.options.enableLog);
                  var o = this.options.enableLog,
                    r = t.mspBizK,
                    a = t.mspBizSec,
                    i = t.appId,
                    l = t.excludeValidateTypes,
                    u =
                      (t.timeout,
                      t.onClose,
                      t.onSuccess,
                      t.onDestroy,
                      t.pageEnable),
                    p = t.callbackUrl,
                    d = s(t, T);
                  S(i, "appId"), S(r, "mspBizK"), S(a, "mspBizSec");
                  var g = c(
                      {
                        mspBizK: r,
                        mspBizSec: a,
                        exclude:
                          null !== l && void 0 !== l && l.length
                            ? l.join(",")
                            : "",
                        appId: String(i),
                        callback: u ? String(p) : "",
                      },
                      d
                    ),
                    h = this._getAuthSystemUrl(g, u);
                  C(
                    "The page-based validate system is in maintained state which means it is no longer update. Please use popper-based validate system instead for more latest feature.",
                    Boolean(o && u),
                    !0
                  ),
                    _(function () {
                      u
                        ? location.assign(h)
                        : n.$$avoidRepeatPopper
                        ? n.$$avoidRepeatPopper &&
                          C(e.logRepeatInvokePopperMsg, n.options.enableLog, !0)
                        : ((n.$$avoidRepeatPopper = !0),
                          C("auth invoke.", n.options.enableLog),
                          R({ validateCenterUrl: h, instance: n, config: t }));
                    });
                },
              },
              {
                key: "_getAuthSystemUrl",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return h(
                    (arguments.length > 1 ? arguments[1] : void 0)
                      ? "".concat(this.host, "/safe/index.html")
                      : "".concat(this.host, "/").concat(D, "/safe/index.html"),
                    e
                  );
                },
              },
              {
                key: "loginPage",
                value: function (e) {
                  var t = e.bizAppKey,
                    n = e.callbackUrl,
                    o = e.language,
                    r = e.oversea;
                  C("loginPage entry.", this.options.enableLog),
                    S(t, "bizAppKey"),
                    S(n, "callbackUrl"),
                    this.options.enableLog && this.detectCallbackQuerySafety(n);
                  var i = a(
                      { bizAppKey: t, callback: n, language: o },
                      "env",
                      r ? K : void 0
                    ),
                    c = this._getLoginPageUrl(i);
                  C(
                    "loginPage invoke. ".concat(
                      this.logNecessaryUrlInfo(c),
                      "."
                    ),
                    this.options.enableLog
                  ),
                    _(function () {
                      location.assign(c);
                    });
                },
              },
              {
                key: "_getLoginPageUrl",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return h(
                    "".concat(this.host, "/apis/login/authAndCallBack"),
                    e
                  );
                },
              },
              {
                key: "loginPopper",
                value: function (t) {
                  var n = this;
                  C("loginPopper entry.", this.options.enableLog);
                  var o = t.bizAppKey,
                    r = t.callbackUrl,
                    i = t.oversea,
                    c = t.language;
                  S(o, "bizAppKey"), S(r, "callbackUrl");
                  var s = a(
                      { bizAppKey: o, callback: r, language: c },
                      "env",
                      i ? K : void 0
                    ),
                    l = this._getLoginPopperUrl(s);
                  _(function () {
                    if (
                      (C(
                        "detect whether downgrade to page login, current innerWidth: ".concat(
                          innerWidth
                        ),
                        n.options.enableLog
                      ),
                      (b && innerWidth < 540) || innerHeight < 605)
                    ) {
                      var o = n._getLoginPageUrl(s);
                      C(
                        "loginPopper fallback to loginPage. ".concat(
                          n.logNecessaryUrlInfo(o),
                          "."
                        ),
                        n.options.enableLog
                      ),
                        location.assign(o);
                    } else n.$$avoidRepeatPopper ? n.$$avoidRepeatPopper && C(e.logRepeatInvokePopperMsg, n.options.enableLog, !0) : ((n.$$avoidRepeatPopper = !0), C("loginPopper invoke. ".concat(n.logNecessaryUrlInfo(l), "."), n.options.enableLog), I({ popperUrl: l, instance: n, config: t }));
                  });
                },
              },
              {
                key: "_getLoginPopperUrl",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return h(
                    "".concat(this.host, "/").concat(D, "/popper.html"),
                    e
                  );
                },
              },
              {
                key: "logout",
                value: function (e) {
                  C("logout entry.", this.options.enableLog);
                  var t = e.bizAppKey,
                    n = e.callbackUrl;
                  S(t, "bizAppKey"), S(n, "callbackUrl");
                  var o = { callback: n, bizAppKey: t },
                    r = this._getLogoutUrl(o);
                  C(
                    "logout invoke. ".concat(this.logNecessaryUrlInfo(r), "."),
                    this.options.enableLog
                  ),
                    _(function () {
                      location.assign(r);
                    });
                },
              },
              {
                key: "_getLogoutUrl",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return h(
                    "".concat(this.host, "/").concat(D, "/logout.html"),
                    e
                  );
                },
              },
              {
                key: "loginImplicitAuthN",
                value: function (e) {
                  C("loginSync entry.", this.options.enableLog);
                  var t = e.callbackUrl,
                    n = e.bizAppKey;
                  S(n, "bizAppKey"),
                    S(t, "callbackUrl"),
                    C(
                      "\u65e0\u611f\u767b\u9646\u8ba4\u8bc1\u5e95\u5c42\u539f\u7406\u4f9d\u8d56\u4e8e\u4e09\u65b9 Cookie \u8fdb\u884c\u5b9e\u73b0\uff0c\u5e76\u5728\u672a\u6765\u53ef\u80fd\u53d7\u5230\u6d4f\u89c8\u5668\u5382\u5546\u653f\u7b56\u5236\u5b9a\u7684\u5f71\u54cd\uff0c\u8bf7\u786e\u4fdd\u5728\u4f7f\u7528\u8be5\u80fd\u529b\u524d\u5bf9\u4e0d\u652f\u6301\u7684\u4e09\u65b9 Cookie \u7684\u573a\u666f\u8fdb\u884c\u515c\u5e95\uff0c\u5e76\u5bf9\u4f60\u7684\u7528\u6237\u8fdb\u884c Cookie \u4f7f\u7528\u60c5\u51b5\u7684\u8bf4\u660e\u3002\n\u5173\u4e8e\u4e09\u65b9 Cookie \u672a\u6765\u652f\u6301\u60c5\u51b5\u7684\u8ba1\u5212\uff0c\u8bf7\u67e5\u9605\uff1ahttps://blog.google/products/chrome/updated-timeline-privacy-sandbox-milestones/",
                      this.options.enableLog
                    );
                  var o = { callback: t, bizAppKey: n },
                    r = this._getCheckLoginStateUrl(o);
                  return (
                    C(
                      "loginSync invoke. ".concat(
                        this.logNecessaryUrlInfo(r),
                        "."
                      ),
                      this.options.enableLog
                    ),
                    W(r, this.safeHost, this.options.enableLog)
                  );
                },
              },
              {
                key: "_getCheckLoginStateUrl",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return h(
                    "".concat(this.host, "/").concat(D, "/check.html"),
                    e
                  );
                },
              },
              {
                key: "logNecessaryUrlInfo",
                value: function (e) {
                  return "callback="
                    .concat(d("callback", e), ", bizAppKey=")
                    .concat(d("bizAppKey", e));
                },
              },
            ]),
            e
          );
        })();
      (H.supportBrand = {
        heytap: "heytap",
        oppo: "oppo",
        realme: "realme",
        oneplus: "oneplus",
        oneplus_oversea: "oneplus_oversea",
      }),
        (H.version = "latest"),
        (H.logRepeatInvokePopperMsg =
          "Invoke failed, we already have a popper-like system exist here, probably a bug caused by repeat call.");
    },
  ]).default;
});

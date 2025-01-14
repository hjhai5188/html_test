/* clarity-js v0.7.59: https://github.com/microsoft/clarity (License: MIT) */
!(function () {
  "use strict";
  var t = Object.freeze({
      __proto__: null,
      get queue() {
        return br;
      },
      get start() {
        return yr;
      },
      get stop() {
        return wr;
      },
      get track() {
        return hr;
      },
    }),
    e = Object.freeze({
      __proto__: null,
      get clone() {
        return Xr;
      },
      get compute() {
        return Yr;
      },
      get data() {
        return jr;
      },
      get keys() {
        return Ar;
      },
      get reset() {
        return qr;
      },
      get start() {
        return Hr;
      },
      get stop() {
        return Fr;
      },
      get trigger() {
        return Wr;
      },
      get update() {
        return Ur;
      },
    }),
    n = Object.freeze({
      __proto__: null,
      get check() {
        return Zr;
      },
      get compute() {
        return $r;
      },
      get data() {
        return Dr;
      },
      get start() {
        return Kr;
      },
      get stop() {
        return ti;
      },
      get trigger() {
        return Qr;
      },
    }),
    a = Object.freeze({
      __proto__: null,
      get compute() {
        return ui;
      },
      get data() {
        return ei;
      },
      get log() {
        return oi;
      },
      get reset() {
        return ci;
      },
      get start() {
        return ri;
      },
      get stop() {
        return ii;
      },
      get updates() {
        return ni;
      },
    }),
    r = Object.freeze({
      __proto__: null,
      get callback() {
        return wi;
      },
      get callbacks() {
        return di;
      },
      get clear() {
        return bi;
      },
      get consent() {
        return yi;
      },
      get data() {
        return li;
      },
      get electron() {
        return fi;
      },
      get id() {
        return mi;
      },
      get metadata() {
        return gi;
      },
      get save() {
        return ki;
      },
      get shortid() {
        return Oi;
      },
      get start() {
        return pi;
      },
      get stop() {
        return vi;
      },
    }),
    i = Object.freeze({
      __proto__: null,
      get data() {
        return Ci;
      },
      get envelope() {
        return Ai;
      },
      get start() {
        return Di;
      },
      get stop() {
        return ji;
      },
    }),
    o = {
      projectId: null,
      delay: 1e3,
      lean: !1,
      track: !0,
      content: !0,
      drop: [],
      mask: [],
      unmask: [],
      regions: [],
      cookies: [],
      fraud: !0,
      checksum: [],
      report: null,
      upload: null,
      fallback: null,
      upgrade: null,
      action: null,
      dob: null,
      delayDom: !1,
      throttleDom: !0,
      conversions: !1,
      longTask: 30,
      includeSubdomains: !0,
    };
  function u(t) {
    return window.Zone && "__symbol__" in window.Zone
      ? window.Zone.__symbol__(t)
      : t;
  }
  var c = 0;
  function s(t) {
    void 0 === t && (t = null);
    var e = t && t.timeStamp > 0 ? t.timeStamp : performance.now(),
      n = t && t.view ? t.view.performance.timeOrigin : performance.timeOrigin;
    return Math.max(Math.round(e + n - c), 0);
  }
  var l = "0.7.58";
  function d(t, e) {
    void 0 === e && (e = null);
    for (var n, a = 5381, r = a, i = 0; i < t.length; i += 2) {
      if (((a = ((a << 5) + a) ^ t.charCodeAt(i)), i + 1 < t.length))
        r = ((r << 5) + r) ^ t.charCodeAt(i + 1);
    }
    return (
      (n = Math.abs(a + 11579 * r)), (e ? n % Math.pow(2, e) : n).toString(36)
    );
  }
  var f = /\S/gi,
    h = !0,
    p = null,
    v = null,
    g = null;
  function m(t, e, n, a, r) {
    if ((void 0 === a && (a = !1), t)) {
      if ("input" == e && ("checkbox" === r || "radio" === r)) return t;
      switch (n) {
        case 0:
          return t;
        case 1:
          switch (e) {
            case "*T":
            case "value":
            case "placeholder":
            case "click":
              return (function (t) {
                var e = -1,
                  n = 0,
                  a = !1,
                  r = !1,
                  i = !1,
                  o = null;
                E();
                for (var u = 0; u < t.length; u++) {
                  var c = t.charCodeAt(u);
                  if (
                    ((a = a || (c >= 48 && c <= 57)),
                    (r = r || 64 === c),
                    (i = 9 === c || 10 === c || 13 === c || 32 === c),
                    0 === u || u === t.length - 1 || i)
                  ) {
                    if (a || r) {
                      null === o && (o = t.split(""));
                      var s = t.substring(e + 1, i ? u : u + 1);
                      (s =
                        h && null !== g
                          ? s.match(g)
                            ? s
                            : k(s, "▪", "▫")
                          : w(s)),
                        o.splice(e + 1 - n, s.length, s),
                        (n += s.length - 1);
                    }
                    i && ((a = !1), (r = !1), (e = u));
                  }
                }
                return o ? o.join("") : t;
              })(t);
            case "input":
            case "change":
              return S(t);
          }
          return t;
        case 2:
        case 3:
          switch (e) {
            case "*T":
            case "data-":
              return a ? b(t) : w(t);
            case "src":
            case "srcset":
            case "title":
            case "alt":
              return 3 === n ? "" : t;
            case "value":
            case "click":
            case "input":
            case "change":
              return S(t);
            case "placeholder":
              return w(t);
          }
          break;
        case 4:
          switch (e) {
            case "*T":
            case "data-":
              return a ? b(t) : w(t);
            case "value":
            case "input":
            case "click":
            case "change":
              return Array(5).join("•");
            case "checksum":
              return "";
          }
          break;
        case 5:
          switch (e) {
            case "*T":
            case "data-":
              return k(t, "▪", "▫");
            case "value":
            case "input":
            case "click":
            case "change":
              return Array(5).join("•");
            case "checksum":
            case "src":
            case "srcset":
            case "alt":
            case "title":
              return "";
          }
      }
    }
    return t;
  }
  function y(t, e) {
    if ((void 0 === e && (e = !1), e))
      return "".concat("https://").concat("Electron");
    var n = o.drop;
    if (n && n.length > 0 && t && t.indexOf("?") > 0) {
      var a = t.split("?"),
        r = a[0],
        i = a[1];
      return (
        r +
        "?" +
        i
          .split("&")
          .map(function (t) {
            return n.some(function (e) {
              return 0 === t.indexOf("".concat(e, "="));
            })
              ? "".concat(t.split("=")[0], "=").concat("*na*")
              : t;
          })
          .join("&")
      );
    }
    return t;
  }
  function b(t) {
    var e = t.trim();
    if (e.length > 0) {
      var n = e[0],
        a = t.indexOf(n),
        r = t.substr(0, a),
        i = t.substr(a + e.length);
      return "".concat(r).concat(e.length.toString(36)).concat(i);
    }
    return t;
  }
  function w(t) {
    return t.replace(f, "•");
  }
  function k(t, e, n) {
    return E(), t ? t.replace(v, e).replace(p, n) : t;
  }
  function S(t) {
    for (var e = 5 * (Math.floor(t.length / 5) + 1), n = "", a = 0; a < e; a++)
      n += a > 0 && a % 5 == 0 ? " " : "•";
    return n;
  }
  function E() {
    if (h && null === p)
      try {
        (p = new RegExp("\\p{N}", "gu")),
          (v = new RegExp("\\p{L}", "gu")),
          (g = new RegExp("\\p{Sc}", "gu"));
      } catch (t) {
        h = !1;
      }
  }
  var O = null,
    T = null,
    N = !1;
  function M() {
    N &&
      (O = {
        time: s(),
        event: 4,
        data: {
          visible: T.visible,
          docWidth: T.docWidth,
          docHeight: T.docHeight,
          screenWidth: T.screenWidth,
          screenHeight: T.screenHeight,
          scrollX: T.scrollX,
          scrollY: T.scrollY,
          pointerX: T.pointerX,
          pointerY: T.pointerY,
          activityTime: T.activityTime,
          scrollTime: T.scrollTime,
        },
      }),
      (T = T || {
        visible: 1,
        docWidth: 0,
        docHeight: 0,
        screenWidth: 0,
        screenHeight: 0,
        scrollX: 0,
        scrollY: 0,
        pointerX: 0,
        pointerY: 0,
        activityTime: 0,
        scrollTime: 0,
      });
  }
  function x(t, e, n, a) {
    switch (t) {
      case 8:
        (T.docWidth = e), (T.docHeight = n);
        break;
      case 11:
        (T.screenWidth = e), (T.screenHeight = n);
        break;
      case 10:
        (T.scrollX = e), (T.scrollY = n), (T.scrollTime = a);
        break;
      default:
        (T.pointerX = e), (T.pointerY = n);
    }
    N = !0;
  }
  function _(t) {
    T.activityTime = t;
  }
  function I(t, e) {
    (T.visible = "visible" === e ? 1 : 0), T.visible || _(t), (N = !0);
  }
  function C() {
    N && Gr(4);
  }
  var D = Object.freeze({
      __proto__: null,
      activity: _,
      compute: C,
      reset: M,
      start: function () {
        (N = !1), M();
      },
      get state() {
        return O;
      },
      stop: function () {
        M();
      },
      track: x,
      visibility: I,
    }),
    j = null;
  function A(t, e) {
    Qi() &&
      t &&
      "string" == typeof t &&
      t.length < 255 &&
      ((j =
        e && "string" == typeof e && e.length < 255
          ? { key: t, value: e }
          : { value: t }),
      Gr(24));
  }
  var R,
    L = null,
    P = null;
  function z(t) {
    t in L || (L[t] = 0), t in P || (P[t] = 0), L[t]++, P[t]++;
  }
  function H(t, e) {
    null !== e &&
      (t in L || (L[t] = 0), t in P || (P[t] = 0), (L[t] += e), (P[t] += e));
  }
  function W(t, e) {
    null !== e &&
      !1 === isNaN(e) &&
      (t in L || (L[t] = 0),
      (e > L[t] || 0 === L[t]) && ((P[t] = e), (L[t] = e)));
  }
  function X(t, e, n) {
    return window.setTimeout(Pi(t), e, n);
  }
  function Y(t) {
    return window.clearTimeout(t);
  }
  var q = 0,
    U = 0,
    F = null;
  function V() {
    F && Y(F), (F = X(B, U)), (q = s());
  }
  function B() {
    var t = s();
    (R = { gap: t - q }),
      Gr(25),
      R.gap < 3e5
        ? (F = X(B, U))
        : Gi &&
          (A("clarity", "suspend"),
          Mo(),
          ["mousemove", "touchstart"].forEach(function (t) {
            return Hi(document, t, $i);
          }),
          ["resize", "scroll", "pageshow"].forEach(function (t) {
            return Hi(window, t, $i);
          }));
  }
  var J = Object.freeze({
      __proto__: null,
      get data() {
        return R;
      },
      reset: V,
      start: function () {
        (U = 6e4), (q = 0);
      },
      stop: function () {
        Y(F), (q = 0), (U = 0);
      },
    }),
    G = null;
  function K(t, e) {
    if (t in G) {
      var n = G[t],
        a = n[n.length - 1];
      e - a[0] > 100 ? G[t].push([e, 0]) : (a[1] = e - a[0]);
    } else G[t] = [[e, 0]];
  }
  function Z() {
    Gr(36);
  }
  function Q() {
    G = {};
  }
  var $ = Object.freeze({
      __proto__: null,
      compute: Z,
      get data() {
        return G;
      },
      reset: Q,
      start: function () {
        G = {};
      },
      stop: function () {
        G = {};
      },
      track: K,
    }),
    tt = null;
  function et(t) {
    Qi() &&
      o.lean &&
      ((o.lean = !1),
      (tt = { key: t }),
      wi(),
      ki(),
      o.upgrade && o.upgrade(t),
      Gr(3));
  }
  var nt = Object.freeze({
    __proto__: null,
    get data() {
      return tt;
    },
    start: function () {
      !o.lean && o.upgrade && o.upgrade("Config"), (tt = null);
    },
    stop: function () {
      tt = null;
    },
    upgrade: et,
  });
  function at(t, e, n, a) {
    return new (n || (n = Promise))(function (r, i) {
      function o(t) {
        try {
          c(a.next(t));
        } catch (t) {
          i(t);
        }
      }
      function u(t) {
        try {
          c(a.throw(t));
        } catch (t) {
          i(t);
        }
      }
      function c(t) {
        var e;
        t.done
          ? r(t.value)
          : ((e = t.value),
            e instanceof n
              ? e
              : new n(function (t) {
                  t(e);
                })).then(o, u);
      }
      c((a = a.apply(t, e || [])).next());
    });
  }
  function rt(t, e) {
    var n,
      a,
      r,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & r[0]) throw r[1];
          return r[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (i = { next: u(0), throw: u(1), return: u(2) }),
      "function" == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function u(u) {
      return function (c) {
        return (function (u) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; i && ((i = 0), u[0] && (o = 0)), o; )
            try {
              if (
                ((n = 1),
                a &&
                  (r =
                    2 & u[0]
                      ? a.return
                      : u[0]
                      ? a.throw || ((r = a.return) && r.call(a), 0)
                      : a.next) &&
                  !(r = r.call(a, u[1])).done)
              )
                return r;
              switch (((a = 0), r && (u = [2 & u[0], r.value]), u[0])) {
                case 0:
                case 1:
                  r = u;
                  break;
                case 4:
                  return o.label++, { value: u[1], done: !1 };
                case 5:
                  o.label++, (a = u[1]), (u = [0]);
                  continue;
                case 7:
                  (u = o.ops.pop()), o.trys.pop();
                  continue;
                default:
                  if (
                    !((r = o.trys),
                    (r = r.length > 0 && r[r.length - 1]) ||
                      (6 !== u[0] && 2 !== u[0]))
                  ) {
                    o = 0;
                    continue;
                  }
                  if (3 === u[0] && (!r || (u[1] > r[0] && u[1] < r[3]))) {
                    o.label = u[1];
                    break;
                  }
                  if (6 === u[0] && o.label < r[1]) {
                    (o.label = r[1]), (r = u);
                    break;
                  }
                  if (r && o.label < r[2]) {
                    (o.label = r[2]), o.ops.push(u);
                    break;
                  }
                  r[2] && o.ops.pop(), o.trys.pop();
                  continue;
              }
              u = e.call(t, o);
            } catch (t) {
              (u = [6, t]), (a = 0);
            } finally {
              n = r = 0;
            }
          if (5 & u[0]) throw u[1];
          return { value: u[0] ? u[1] : void 0, done: !0 };
        })([u, c]);
      };
    }
  }
  var it = null;
  function ot(t, e) {
    ct(t, "string" == typeof e ? [e] : e);
  }
  function ut(t, e, n, a) {
    return (
      void 0 === e && (e = null),
      void 0 === n && (n = null),
      void 0 === a && (a = null),
      at(this, void 0, void 0, function () {
        var r, i;
        return rt(this, function (o) {
          switch (o.label) {
            case 0:
              return (i = {}), [4, dt(t)];
            case 1:
              return (
                (i.userId = o.sent()),
                (i.userHint =
                  a ||
                  ((u = t) && u.length >= 5
                    ? ""
                        .concat(u.substring(0, 2))
                        .concat(k(u.substring(2), "*", "*"))
                    : k(u, "*", "*"))),
                ct("userId", [(r = i).userId]),
                ct("userHint", [r.userHint]),
                ct("userType", [ft(t)]),
                e && (ct("sessionId", [e]), (r.sessionId = e)),
                n && (ct("pageId", [n]), (r.pageId = n)),
                [2, r]
              );
          }
          var u;
        });
      })
    );
  }
  function ct(t, e) {
    if (Qi() && t && e && "string" == typeof t && t.length < 255) {
      for (var n = (t in it) ? it[t] : [], a = 0; a < e.length; a++)
        "string" == typeof e[a] && e[a].length < 255 && n.push(e[a]);
      it[t] = n;
    }
  }
  function st() {
    Gr(34);
  }
  function lt() {
    it = {};
  }
  function dt(t) {
    return at(this, void 0, void 0, function () {
      var e;
      return rt(this, function (n) {
        switch (n.label) {
          case 0:
            return (
              n.trys.push([0, 4, , 5]),
              crypto && t
                ? [
                    4,
                    crypto.subtle.digest(
                      "SHA-256",
                      new TextEncoder().encode(t)
                    ),
                  ]
                : [3, 2]
            );
          case 1:
            return (
              (e = n.sent()),
              [
                2,
                Array.prototype.map
                  .call(new Uint8Array(e), function (t) {
                    return ("00" + t.toString(16)).slice(-2);
                  })
                  .join(""),
              ]
            );
          case 2:
            return [2, ""];
          case 3:
            return [3, 5];
          case 4:
            return n.sent(), [2, ""];
          case 5:
            return [2];
        }
      });
    });
  }
  function ft(t) {
    return t && t.indexOf("@") > 0 ? "email" : "string";
  }
  var ht = "CompressionStream" in window;
  function pt(t) {
    return at(this, void 0, void 0, function () {
      var e, n;
      return rt(this, function (a) {
        switch (a.label) {
          case 0:
            return (
              a.trys.push([0, 3, , 4]),
              ht
                ? ((e = new ReadableStream({
                    start: function (e) {
                      return at(this, void 0, void 0, function () {
                        return rt(this, function (n) {
                          return e.enqueue(t), e.close(), [2];
                        });
                      });
                    },
                  })
                    .pipeThrough(new TextEncoderStream())
                    .pipeThrough(new window.CompressionStream("gzip"))),
                  (n = Uint8Array.bind),
                  [4, vt(e)])
                : [3, 2]
            );
          case 1:
            return [2, new (n.apply(Uint8Array, [void 0, a.sent()]))()];
          case 2:
            return [3, 4];
          case 3:
            return a.sent(), [3, 4];
          case 4:
            return [2, null];
        }
      });
    });
  }
  function vt(t) {
    return at(this, void 0, void 0, function () {
      var e, n, a, r, i;
      return rt(this, function (o) {
        switch (o.label) {
          case 0:
            (e = t.getReader()), (n = []), (a = !1), (r = []), (o.label = 1);
          case 1:
            return a ? [3, 3] : [4, e.read()];
          case 2:
            return (
              (i = o.sent()),
              (a = i.done),
              (r = i.value),
              a ? [2, n] : (n.push.apply(n, r), [3, 1])
            );
          case 3:
            return [2, n];
        }
      });
    });
  }
  var gt = null;
  function mt(t) {
    try {
      if (!gt) return;
      var e = (function (t) {
        try {
          return JSON.parse(t);
        } catch (t) {
          return [];
        }
      })(t);
      e.forEach(function (t) {
        gt(t);
      });
    } catch (t) {}
  }
  var yt = [
    D,
    a,
    Object.freeze({
      __proto__: null,
      compute: st,
      get data() {
        return it;
      },
      identify: ut,
      reset: lt,
      set: ot,
      start: function () {
        lt();
      },
      stop: function () {
        lt();
      },
    }),
    n,
    $,
    r,
    i,
    t,
    J,
    nt,
    e,
  ];
  function bt() {
    (L = {}),
      (P = {}),
      z(5),
      yt.forEach(function (t) {
        return Pi(t.start)();
      });
  }
  function wt() {
    yt
      .slice()
      .reverse()
      .forEach(function (t) {
        return Pi(t.stop)();
      }),
      (L = {}),
      (P = {});
  }
  function kt() {
    st(), C(), ui(), Gr(0), Z(), $r(), Yr();
  }
  var St,
    Et = [];
  function Ot(t, e, n) {
    o.fraud &&
      null !== t &&
      n &&
      n.length >= 5 &&
      ((St = { id: t, target: e, checksum: d(n, 28) }),
      Et.indexOf(St.checksum) < 0 && (Et.push(St.checksum), xr(41)));
  }
  var Tt = "load,active,fixed,visible,focus,show,collaps,animat".split(","),
    Nt = {};
  function Mt(t, e) {
    var n = t.attributes,
      a = t.prefix ? t.prefix[e] : null,
      r =
        0 === e
          ? "".concat("~").concat(t.position - 1)
          : ":nth-of-type(".concat(t.position, ")");
    switch (t.tag) {
      case "STYLE":
      case "TITLE":
      case "LINK":
      case "META":
      case "*T":
      case "*D":
        return "";
      case "HTML":
        return "HTML";
      default:
        if (null === a) return "";
        (a = "".concat(a).concat(">")),
          (t.tag =
            0 === t.tag.indexOf("svg:") ? t.tag.substr("svg:".length) : t.tag);
        var i = "".concat(a).concat(t.tag).concat(r),
          o = "id" in n && n.id.length > 0 ? n.id : null,
          u =
            "BODY" !== t.tag && "class" in n && n.class.length > 0
              ? n.class
                  .trim()
                  .split(/\s+/)
                  .filter(function (t) {
                    return xt(t);
                  })
                  .join(".")
              : null;
        if (u && u.length > 0)
          if (0 === e) {
            var c = ""
              .concat(
                (function (t) {
                  for (var e = t.split(">"), n = 0; n < e.length; n++) {
                    var a = e[n].indexOf("~"),
                      r = e[n].indexOf(".");
                    e[n] = e[n].substring(
                      0,
                      r > 0 ? r : a > 0 ? a : e[n].length
                    );
                  }
                  return e.join(">");
                })(a)
              )
              .concat(t.tag)
              .concat(".")
              .concat(u);
            c in Nt || (Nt[c] = []),
              Nt[c].indexOf(t.id) < 0 && Nt[c].push(t.id),
              (i = "".concat(c).concat("~").concat(Nt[c].indexOf(t.id)));
          } else i = "".concat(a).concat(t.tag, ".").concat(u).concat(r);
        return (
          (i =
            o && xt(o)
              ? ""
                  .concat(
                    (function (t) {
                      var e = t.lastIndexOf("*S"),
                        n = t.lastIndexOf("".concat("iframe:").concat("HTML")),
                        a = Math.max(e, n);
                      if (a < 0) return "";
                      return t.substring(0, t.indexOf(">", a) + 1);
                    })(a)
                  )
                  .concat("#")
                  .concat(o)
              : i),
          i
        );
    }
  }
  function xt(t) {
    if (!t) return !1;
    if (
      Tt.some(function (e) {
        return t.toLowerCase().indexOf(e) >= 0;
      })
    )
      return !1;
    for (var e = 0; e < t.length; e++) {
      var n = t.charCodeAt(e);
      if (n >= 48 && n <= 57) return !1;
    }
    return !0;
  }
  var _t = 1,
    It = null,
    Ct = [],
    Dt = [],
    jt = {},
    At = [],
    Rt = [],
    Lt = [],
    Pt = [],
    zt = [],
    Ht = [],
    Wt = null,
    Xt = null,
    Yt = null,
    qt = null;
  function Ut() {
    Vt(), Bt(document, !0);
  }
  function Ft() {
    Vt();
  }
  function Vt() {
    (_t = 1),
      (Ct = []),
      (Dt = []),
      (jt = {}),
      (At = []),
      (Rt = []),
      (Lt = "address,password,contact".split(",")),
      (Pt = "password,secret,pass,social,ssn,code,hidden".split(",")),
      (zt = "radio,checkbox,range,button,reset,submit".split(",")),
      (Ht = "INPUT,SELECT,TEXTAREA".split(",")),
      (It = new Map()),
      (Wt = new WeakMap()),
      (Xt = new WeakMap()),
      (Yt = new WeakMap()),
      (qt = new WeakMap()),
      (Nt = {});
  }
  function Bt(t, e) {
    void 0 === e && (e = !1);
    try {
      e &&
        o.unmask.forEach(function (t) {
          return t.indexOf("!") < 0 ? Rt.push(t) : At.push(t.substr(1));
        }),
        "querySelectorAll" in t &&
          (o.regions.forEach(function (e) {
            return t.querySelectorAll(e[1]).forEach(function (t) {
              return Ga(t, "".concat(e[0]));
            });
          }),
          o.mask.forEach(function (e) {
            return t.querySelectorAll(e).forEach(function (t) {
              return Yt.set(t, 3);
            });
          }),
          o.checksum.forEach(function (e) {
            return t.querySelectorAll(e[1]).forEach(function (t) {
              return qt.set(t, e[0]);
            });
          }),
          Rt.forEach(function (e) {
            return t.querySelectorAll(e).forEach(function (t) {
              return Yt.set(t, 0);
            });
          }));
    } catch (t) {
      Cr(5, 1, t ? t.name : null);
    }
  }
  function Jt(t, e) {
    if ((void 0 === e && (e = !1), null === t)) return null;
    var n = Wt.get(t);
    return !n && e && ((n = _t++), Wt.set(t, n)), n || null;
  }
  function Gt(t) {
    var e = !1;
    if (t.nodeType === Node.ELEMENT_NODE && "IFRAME" === t.tagName) {
      var n = t;
      try {
        n.contentDocument && (Xt.set(n.contentDocument, n), (e = !0));
      } catch (t) {}
    }
    return e;
  }
  function Kt(t) {
    var e = t.nodeType === Node.DOCUMENT_NODE ? t : null;
    return e && Xt.has(e) ? Xt.get(e) : null;
  }
  function Zt(t, e, n) {
    if ("object" == typeof t[n] && "object" == typeof e[n]) {
      for (var a in t[n]) if (t[n][a] !== e[n][a]) return !0;
      for (var a in e[n]) if (e[n][a] !== t[n][a]) return !0;
      return !1;
    }
    return t[n] !== e[n];
  }
  function Qt(t) {
    var e = t.parent && t.parent in Ct ? Ct[t.parent] : null,
      n = e ? e.selector : null,
      a = t.data,
      r = (function (t, e) {
        e.metadata.position = 1;
        for (var n = t ? t.children.indexOf(e.id) : -1; n-- > 0; ) {
          var a = Ct[t.children[n]];
          if (e.data.tag === a.data.tag) {
            e.metadata.position = a.metadata.position + 1;
            break;
          }
        }
        return e.metadata.position;
      })(e, t),
      i = {
        id: t.id,
        tag: a.tag,
        prefix: n,
        position: r,
        attributes: a.attributes,
      };
    (t.selector = [Mt(i, 0), Mt(i, 1)]),
      (t.hash = t.selector.map(function (t) {
        return t ? d(t) : null;
      })),
      t.hash.forEach(function (e) {
        return (jt[e] = t.id);
      });
  }
  function $t(t) {
    var e = te(ne(t));
    return null !== e && null !== e.textContent
      ? e.textContent.substr(0, 25)
      : "";
  }
  function te(t) {
    return It.has(t) ? It.get(t) : null;
  }
  function ee(t) {
    var e = Jt(t);
    return e in Ct ? Ct[e] : null;
  }
  function ne(t) {
    return t in jt ? jt[t] : null;
  }
  function ae(t) {
    return It.has(Jt(t));
  }
  function re() {
    for (var t = [], e = 0, n = Dt; e < n.length; e++) {
      var a = n[e];
      a in Ct && t.push(Ct[a]);
    }
    return (Dt = []), t;
  }
  function ie(t) {
    if (It.get(t).nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
      It.delete(t);
      var e = t in Ct ? Ct[t] : null;
      if (e && e.children)
        for (var n = 0, a = e.children; n < a.length; n++) {
          ie(a[n]);
        }
    }
  }
  function oe(t) {
    for (var e = null; null === e && t.previousSibling; )
      (e = Jt(t.previousSibling)), (t = t.previousSibling);
    return e;
  }
  function ue(t, e, n, a) {
    void 0 === n && (n = !0), void 0 === a && (a = !1);
    var r = Dt.indexOf(t);
    r >= 0 && 1 === e && a
      ? (Dt.splice(r, 1), Dt.push(t))
      : -1 === r && n && Dt.push(t);
  }
  var ce = Object.freeze({
      __proto__: null,
      add: function (t, e, n, a) {
        var r = Jt(t, !0),
          i = e ? Jt(e) : null,
          u = oe(t),
          c = null,
          s = Ka(t) ? r : null,
          l = qt.has(t) ? qt.get(t) : null,
          d = o.content ? 1 : 3;
        i >= 0 &&
          Ct[i] &&
          ((c = Ct[i]).children.push(r),
          (s = null === s ? c.region : s),
          (l = null === l ? c.metadata.fraud : l),
          (d = c.metadata.privacy)),
          n.attributes &&
            "data-clarity-region" in n.attributes &&
            (Ga(t, n.attributes["data-clarity-region"]), (s = r)),
          It.set(r, t),
          (Ct[r] = {
            id: r,
            parent: i,
            previous: u,
            children: [],
            data: n,
            selector: null,
            hash: null,
            region: s,
            metadata: {
              active: !0,
              suspend: !1,
              privacy: d,
              position: null,
              fraud: l,
              size: null,
            },
          }),
          (function (t, e, n) {
            var a,
              r = e.data,
              i = e.metadata,
              o = i.privacy,
              u = r.attributes || {},
              c = r.tag.toUpperCase();
            switch (!0) {
              case Ht.indexOf(c) >= 0:
                var s = u.type,
                  l = "",
                  d = ["class", "style"];
                Object.keys(u)
                  .filter(function (t) {
                    return !d.includes(t);
                  })
                  .forEach(function (t) {
                    return (l += u[t].toLowerCase());
                  });
                var f = Pt.some(function (t) {
                  return l.indexOf(t) >= 0;
                });
                i.privacy = "INPUT" === c && zt.indexOf(s) >= 0 ? o : f ? 4 : 2;
                break;
              case "data-clarity-mask" in u:
                i.privacy = 3;
                break;
              case "data-clarity-unmask" in u:
                i.privacy = 0;
                break;
              case Yt.has(t):
                i.privacy = Yt.get(t);
                break;
              case qt.has(t):
                i.privacy = 2;
                break;
              case "*T" === c:
                var h = n && n.data ? n.data.tag : "",
                  p = n && n.selector ? n.selector[1] : "",
                  v = ["STYLE", "TITLE", "svg:style"];
                i.privacy =
                  v.includes(h) ||
                  At.some(function (t) {
                    return p.indexOf(t) >= 0;
                  })
                    ? 0
                    : o;
                break;
              case 1 === o:
                i.privacy = (function (t, e, n) {
                  if (
                    t &&
                    e.some(function (e) {
                      return t.indexOf(e) >= 0;
                    })
                  )
                    return 2;
                  return n.privacy;
                })(u.class, Lt, i);
                break;
              case "IMG" === c:
                (null === (a = u.src) || void 0 === a
                  ? void 0
                  : a.startsWith("blob:")) && (i.privacy = 3);
            }
          })(t, Ct[r], c),
          Qt(Ct[r]),
          (function (t) {
            if ("IMG" === t.data.tag && 3 === t.metadata.privacy) {
              var e = te(t.id);
              !e ||
                (e.complete && 0 !== e.naturalWidth) ||
                Hi(e, "load", function () {
                  e.setAttribute("data-clarity-loaded", "".concat(Oi()));
                }),
                (t.metadata.size = []);
            }
          })(Ct[r]),
          ue(r, a);
      },
      get: ee,
      getId: Jt,
      getNode: te,
      getValue: function (t) {
        return t in Ct ? Ct[t] : null;
      },
      has: ae,
      hashText: $t,
      iframe: Kt,
      lookup: ne,
      parse: Bt,
      sameorigin: Gt,
      start: Ut,
      stop: Ft,
      update: function (t, e, n, a) {
        var r = Jt(t),
          i = e ? Jt(e) : null,
          o = oe(t),
          u = !1,
          c = !1;
        if (r in Ct) {
          var s = Ct[r];
          if (
            ((s.metadata.active = !0),
            s.previous !== o && ((u = !0), (s.previous = o)),
            s.parent !== i)
          ) {
            u = !0;
            var l = s.parent;
            if (((s.parent = i), null !== i && i >= 0)) {
              var d = null === o ? 0 : Ct[i].children.indexOf(o) + 1;
              Ct[i].children.splice(d, 0, r),
                (s.region = Ka(t) ? r : Ct[i].region);
            } else
              !(function (t, e) {
                if (t in Ct) {
                  var n = Ct[t];
                  (n.metadata.active = !1), (n.parent = null), ue(t, e), ie(t);
                }
              })(r, a);
            if (null !== l && l >= 0) {
              var f = Ct[l].children.indexOf(r);
              f >= 0 && Ct[l].children.splice(f, 1);
            }
            c = !0;
          }
          for (var h in n) Zt(s.data, n, h) && ((u = !0), (s.data[h] = n[h]));
          Qt(s), ue(r, a, u, c);
        }
      },
      updates: re,
    }),
    se = 5e3,
    le = {},
    de = [],
    fe = null,
    he = null,
    pe = null;
  function ve() {
    (le = {}), (de = []), (fe = null), (he = null);
  }
  function ge(t, e) {
    return (
      void 0 === e && (e = 0),
      at(this, void 0, void 0, function () {
        var n, a, r;
        return rt(this, function (i) {
          for (n = 0, a = de; n < a.length; n++)
            if (a[n].task === t) return [2];
          return (
            (r = new Promise(function (n) {
              de[1 === e ? "unshift" : "push"]({
                task: t,
                resolve: n,
                id: mi(),
              });
            })),
            null === fe && null === he && me(),
            [2, r]
          );
        });
      })
    );
  }
  function me() {
    var t = de.shift();
    t &&
      ((fe = t),
      t
        .task()
        .then(function () {
          t.id === mi() && (t.resolve(), (fe = null), me());
        })
        .catch(function (e) {
          t.id === mi() &&
            (e && Cr(0, 1, e.name, e.message, e.stack), (fe = null), me());
        }));
  }
  function ye(t) {
    var e = Se(t);
    return e in le
      ? performance.now() - le[e].start > le[e].yield
        ? 0
        : 1
      : 2;
  }
  function be(t) {
    le[Se(t)] = { start: performance.now(), calls: 0, yield: o.longTask };
  }
  function we(t) {
    var e = performance.now(),
      n = Se(t),
      a = e - le[n].start;
    H(t.cost, a), z(5), le[n].calls > 0 && H(4, a);
  }
  function ke(t) {
    return at(this, void 0, void 0, function () {
      var e, n;
      return rt(this, function (a) {
        switch (a.label) {
          case 0:
            return (e = Se(t)) in le ? (we(t), (n = le[e]), [4, Ee()]) : [3, 2];
          case 1:
            (n.yield = a.sent().timeRemaining()),
              (function (t) {
                var e = Se(t);
                if (le && le[e]) {
                  var n = le[e].calls,
                    a = le[e].yield;
                  be(t), (le[e].calls = n + 1), (le[e].yield = a);
                }
              })(t),
              (a.label = 2);
          case 2:
            return [2, e in le ? 1 : 2];
        }
      });
    });
  }
  function Se(t) {
    return "".concat(t.id, ".").concat(t.cost);
  }
  function Ee() {
    return at(this, void 0, void 0, function () {
      return rt(this, function (t) {
        switch (t.label) {
          case 0:
            return he ? [4, he] : [3, 2];
          case 1:
            t.sent(), (t.label = 2);
          case 2:
            return [
              2,
              new Promise(function (t) {
                Te(t, { timeout: se });
              }),
            ];
        }
      });
    });
  }
  var Oe,
    Te =
      window.requestIdleCallback ||
      function (t, e) {
        var n = performance.now(),
          a = new MessageChannel(),
          r = a.port1,
          i = a.port2;
        (r.onmessage = function (a) {
          var r = performance.now(),
            u = r - n,
            c = r - a.data;
          if (c > o.longTask && u < e.timeout)
            requestAnimationFrame(function () {
              i.postMessage(r);
            });
          else {
            var s = u > e.timeout;
            t({
              didTimeout: s,
              timeRemaining: function () {
                return s ? o.longTask : Math.max(0, o.longTask - c);
              },
            });
          }
        }),
          requestAnimationFrame(function () {
            i.postMessage(performance.now());
          });
      };
  function Ne() {
    Oe = null;
  }
  function Me() {
    var t = document.body,
      e = document.documentElement,
      n = t ? t.clientWidth : null,
      a = t ? t.scrollWidth : null,
      r = t ? t.offsetWidth : null,
      i = e ? e.clientWidth : null,
      o = e ? e.scrollWidth : null,
      u = e ? e.offsetWidth : null,
      c = Math.max(n, a, r, i, o, u),
      s = t ? t.clientHeight : null,
      l = t ? t.scrollHeight : null,
      d = t ? t.offsetHeight : null,
      f = e ? e.clientHeight : null,
      h = e ? e.scrollHeight : null,
      p = e ? e.offsetHeight : null,
      v = Math.max(s, l, d, f, h, p);
    (null !== Oe && c === Oe.width && v === Oe.height) ||
      null === c ||
      null === v ||
      ((Oe = { width: c, height: v }), Ha(8));
  }
  Me.dn = 19;
  var xe = [];
  function _e(t) {
    var e = nr(t);
    if (e) {
      var n = e.value,
        a =
          n &&
          n.length >= 5 &&
          o.fraud &&
          -1 === "password,secret,pass,social,ssn,code,hidden".indexOf(e.type)
            ? d(n, 28)
            : "";
      xe.push({
        time: s(t),
        event: 42,
        data: { target: nr(t), type: e.type, value: n, checksum: a },
      }),
        ge(rr.bind(this, 42));
    }
  }
  function Ie() {
    xe = [];
  }
  function Ce(t) {
    var e = { x: 0, y: 0 };
    if (t && t.offsetParent)
      do {
        var n = t.offsetParent,
          a = null === n ? Kt(t.ownerDocument) : null;
        (e.x += t.offsetLeft), (e.y += t.offsetTop), (t = a || n);
      } while (t);
    return e;
  }
  _e.dn = 5;
  var De = ["input", "textarea", "radio", "button", "canvas"],
    je = [];
  function Ae(t, e, n) {
    var a = Kt(e),
      r = a ? a.contentDocument.documentElement : document.documentElement,
      i =
        "pageX" in n
          ? Math.round(n.pageX)
          : "clientX" in n
          ? Math.round(n.clientX + r.scrollLeft)
          : null,
      o =
        "pageY" in n
          ? Math.round(n.pageY)
          : "clientY" in n
          ? Math.round(n.clientY + r.scrollTop)
          : null;
    if (a) {
      var u = Ce(a);
      (i = i ? i + Math.round(u.x) : i), (o = o ? o + Math.round(u.y) : o);
    }
    var c = nr(n),
      l = (function (t) {
        for (; t && t !== document; ) {
          if (t.nodeType === Node.ELEMENT_NODE) {
            var e = t;
            if ("A" === e.tagName) return e;
          }
          t = t.parentNode;
        }
        return null;
      })(c),
      d = (function (t) {
        var e = null,
          n = document.documentElement;
        if ("function" == typeof t.getBoundingClientRect) {
          var a = t.getBoundingClientRect();
          a &&
            a.width > 0 &&
            a.height > 0 &&
            (e = {
              x: Math.floor(
                a.left +
                  ("pageXOffset" in window ? window.pageXOffset : n.scrollLeft)
              ),
              y: Math.floor(
                a.top +
                  ("pageYOffset" in window ? window.pageYOffset : n.scrollTop)
              ),
              w: Math.floor(a.width),
              h: Math.floor(a.height),
            });
        }
        return e;
      })(c);
    0 === n.detail &&
      d &&
      ((i = Math.round(d.x + d.w / 2)), (o = Math.round(d.y + d.h / 2)));
    var f = d ? Math.max(Math.floor(((i - d.x) / d.w) * 32767), 0) : 0,
      h = d ? Math.max(Math.floor(((o - d.y) / d.h) * 32767), 0) : 0;
    null !== i &&
      null !== o &&
      (je.push({
        time: s(n),
        event: t,
        data: {
          target: c,
          x: i,
          y: o,
          eX: f,
          eY: h,
          button: n.button,
          reaction: Le(c),
          context: Pe(l),
          text: Re(c),
          link: l ? l.href : null,
          hash: null,
          trust: n.isTrusted ? 1 : 0,
        },
      }),
      ge(rr.bind(this, t)));
  }
  function Re(t) {
    var e = null;
    if (t) {
      var n = t.textContent || String(t.value || "") || t.alt;
      n && (e = n.replace(/\s+/g, " ").trim().substr(0, 25));
    }
    return e;
  }
  function Le(t) {
    if (t.nodeType === Node.ELEMENT_NODE) {
      var e = t.tagName.toLowerCase();
      if (De.indexOf(e) >= 0) return 0;
    }
    return 1;
  }
  function Pe(t) {
    if (t && t.hasAttribute("target"))
      switch (t.getAttribute("target")) {
        case "_blank":
          return 1;
        case "_parent":
          return 2;
        case "_top":
          return 3;
      }
    return 0;
  }
  function ze() {
    je = [];
  }
  Ae.dn = 6;
  var He = [];
  function We(t, e) {
    He.push({ time: s(e), event: 38, data: { target: nr(e), action: t } }),
      ge(rr.bind(this, 38));
  }
  function Xe() {
    He = [];
  }
  We.dn = 7;
  var Ye = null,
    qe = [];
  function Ue(t) {
    var e = nr(t),
      n = ee(e);
    if (e && e.type && n) {
      var a = e.value,
        r = e.type;
      switch (e.type) {
        case "radio":
        case "checkbox":
          a = e.checked ? "true" : "false";
      }
      var i = { target: e, value: a, type: r };
      qe.length > 0 && qe[qe.length - 1].data.target === i.target && qe.pop(),
        qe.push({ time: s(t), event: 27, data: i }),
        Y(Ye),
        (Ye = X(Fe, 1e3, 27));
    }
  }
  function Fe(t) {
    ge(rr.bind(this, t));
  }
  function Ve() {
    qe = [];
  }
  Ue.dn = 9;
  var Be,
    Je = [],
    Ge = null,
    Ke = !1,
    Ze = 0,
    Qe = new Set();
  function $e(t, e, n) {
    var a = Kt(e),
      r = a ? a.contentDocument.documentElement : document.documentElement,
      i =
        "pageX" in n
          ? Math.round(n.pageX)
          : "clientX" in n
          ? Math.round(n.clientX + r.scrollLeft)
          : null,
      o =
        "pageY" in n
          ? Math.round(n.pageY)
          : "clientY" in n
          ? Math.round(n.clientY + r.scrollTop)
          : null;
    if (a) {
      var u = Ce(a);
      (i = i ? i + Math.round(u.x) : i), (o = o ? o + Math.round(u.y) : o);
    }
    null !== i &&
      null !== o &&
      en({ time: s(n), event: t, data: { target: nr(n), x: i, y: o } });
  }
  function tn(t, e, n) {
    var a = Kt(e),
      r = a ? a.contentDocument.documentElement : document.documentElement,
      i = n.changedTouches,
      o = s(n);
    if (i)
      for (var u = 0; u < i.length; u++) {
        var c = i[u],
          l = "clientX" in c ? Math.round(c.clientX + r.scrollLeft) : null,
          d = "clientY" in c ? Math.round(c.clientY + r.scrollTop) : null;
        (l = l && a ? l + Math.round(a.offsetLeft) : l),
          (d = d && a ? d + Math.round(a.offsetTop) : d);
        var f = "identifier" in c ? c.identifier : void 0;
        switch (t) {
          case 17:
            0 === Qe.size && ((Ke = !0), (Ze = f)), Qe.add(f);
            break;
          case 18:
          case 20:
            Qe.delete(f);
        }
        var h = Ke && Ze === f;
        null !== l &&
          null !== d &&
          en({
            time: o,
            event: t,
            data: { target: nr(n), x: l, y: d, id: f, isPrimary: h },
          }),
          (20 !== t && 18 !== t) || (Ze === f && (Ke = !1));
      }
  }
  function en(t) {
    switch (t.event) {
      case 12:
      case 15:
      case 19:
        var e = Je.length,
          n = e > 1 ? Je[e - 2] : null;
        n &&
          (function (t, e) {
            var n = t.data.x - e.data.x,
              a = t.data.y - e.data.y,
              r = Math.sqrt(n * n + a * a),
              i = e.time - t.time,
              o = e.data.target === t.data.target;
            return e.event === t.event && o && r < 20 && i < 25;
          })(n, t) &&
          Je.pop(),
          Je.push(t),
          Y(Ge),
          (Ge = X(nn, 500, t.event));
        break;
      default:
        Je.push(t), nn(t.event);
    }
  }
  function nn(t) {
    ge(rr.bind(this, t));
  }
  function an() {
    Je = [];
  }
  ($e.dn = 10), (tn.dn = 11);
  var rn = null,
    on = !1;
  function un() {
    var t = document.documentElement;
    (Be = {
      width:
        t && "clientWidth" in t
          ? Math.min(t.clientWidth, window.innerWidth)
          : window.innerWidth,
      height:
        t && "clientHeight" in t
          ? Math.min(t.clientHeight, window.innerHeight)
          : window.innerHeight,
    }),
      on ? (Y(rn), (rn = X(cn, 500, 11))) : (rr(11), (on = !0));
  }
  function cn(t) {
    ge(rr.bind(this, t));
  }
  function sn() {
    (Be = null), Y(rn);
  }
  un.dn = 12;
  var ln = [],
    dn = null,
    fn = null,
    hn = null;
  function pn(t) {
    void 0 === t && (t = null);
    var e = window,
      n = document.documentElement,
      a = t ? nr(t) : n;
    if (a && a.nodeType === Node.DOCUMENT_NODE) {
      var r = Kt(a);
      (e = r ? r.contentWindow : e), (a = n = a.documentElement);
    }
    var i =
        a === n && "pageXOffset" in e
          ? Math.round(e.pageXOffset)
          : Math.round(a.scrollLeft),
      o =
        a === n && "pageYOffset" in e
          ? Math.round(e.pageYOffset)
          : Math.round(a.scrollTop),
      u = window.innerWidth,
      c = window.innerHeight,
      l = u / 3,
      d = u > c ? 0.15 * c : 0.2 * c,
      f = c - d,
      h = vn(l, d),
      p = vn(l, f),
      v = {
        time: s(t),
        event: 10,
        data: { target: a, x: i, y: o, top: h, bottom: p },
      };
    if ((null === t && 0 === i && 0 === o) || null === i || null === o)
      return (dn = h), void (fn = p);
    var g = ln.length,
      m = g > 1 ? ln[g - 2] : null;
    m &&
      (function (t, e) {
        var n = t.data.x - e.data.x,
          a = t.data.y - e.data.y;
        return n * n + a * a < 400 && e.time - t.time < 25;
      })(m, v) &&
      ln.pop(),
      ln.push(v),
      Y(hn),
      (hn = X(gn, 500, 10));
  }
  function vn(t, e) {
    var n, a, r;
    return (
      "caretPositionFromPoint" in document
        ? (r =
            null === (n = document.caretPositionFromPoint(t, e)) || void 0 === n
              ? void 0
              : n.offsetNode)
        : "caretRangeFromPoint" in document &&
          (r =
            null === (a = document.caretRangeFromPoint(t, e)) || void 0 === a
              ? void 0
              : a.startContainer),
      r || (r = document.elementFromPoint(t, e)),
      r && r.nodeType === Node.TEXT_NODE && (r = r.parentNode),
      r
    );
  }
  function gn(t) {
    ge(rr.bind(this, t));
  }
  function mn() {
    var t, e;
    if (dn) {
      var n = ar(dn, null);
      oi(
        31,
        null === (t = null == n ? void 0 : n.hash) || void 0 === t
          ? void 0
          : t.join(".")
      );
    }
    if (fn) {
      var a = ar(fn, null);
      oi(
        32,
        null === (e = null == a ? void 0 : a.hash) || void 0 === e
          ? void 0
          : e.join(".")
      );
    }
  }
  (pn.dn = 13), (mn.dn = 14);
  var yn = null,
    bn = null,
    wn = null;
  function kn(t) {
    var e = (t.nodeType === Node.DOCUMENT_NODE ? t : document).getSelection();
    if (
      null !== e &&
      !(
        (null === e.anchorNode && null === e.focusNode) ||
        (e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset)
      )
    ) {
      var n = yn.start ? yn.start : null;
      null !== bn && null !== yn.start && n !== e.anchorNode && (Y(wn), Sn(21)),
        (yn = {
          start: e.anchorNode,
          startOffset: e.anchorOffset,
          end: e.focusNode,
          endOffset: e.focusOffset,
        }),
        (bn = e),
        Y(wn),
        (wn = X(Sn, 500, 21));
    }
  }
  function Sn(t) {
    ge(rr.bind(this, t));
  }
  function En() {
    (bn = null), (yn = { start: 0, startOffset: 0, end: 0, endOffset: 0 });
  }
  kn.dn = 15;
  var On,
    Tn,
    Nn = [];
  function Mn(t) {
    Nn.push({ time: s(t), event: 39, data: { target: nr(t) } }),
      ge(rr.bind(this, 39));
  }
  function xn() {
    Nn = [];
  }
  function _n(t) {
    (On = { name: t.type }), rr(26, s(t)), Mo();
  }
  function In() {
    On = null;
  }
  function Cn(t) {
    void 0 === t && (t = null),
      (Tn = {
        visible:
          "visibilityState" in document ? document.visibilityState : "default",
      }),
      rr(28, s(t));
  }
  function Dn() {
    Tn = null;
  }
  function jn() {
    (ir = []),
      ur(),
      ze(),
      Xe(),
      an(),
      Ve(),
      (on = !1),
      Hi(window, "resize", un),
      un(),
      Hi(document, "visibilitychange", Cn),
      Cn(),
      (ln = []),
      pn(),
      En(),
      Ie(),
      xn(),
      Hi(window, "pagehide", _n);
  }
  function An(t) {
    !(function (t) {
      var e = Kt(t);
      Hi(e ? e.contentWindow : t === document ? window : t, "scroll", pn, !0);
    })(t),
      t.nodeType === Node.DOCUMENT_NODE &&
        ((function (t) {
          Hi(t, "click", Ae.bind(this, 9, t), !0);
        })(t),
        (function (t) {
          Hi(t, "cut", We.bind(this, 0), !0),
            Hi(t, "copy", We.bind(this, 1), !0),
            Hi(t, "paste", We.bind(this, 2), !0);
        })(t),
        (function (t) {
          Hi(t, "mousedown", $e.bind(this, 13, t), !0),
            Hi(t, "mouseup", $e.bind(this, 14, t), !0),
            Hi(t, "mousemove", $e.bind(this, 12, t), !0),
            Hi(t, "wheel", $e.bind(this, 15, t), !0),
            Hi(t, "dblclick", $e.bind(this, 16, t), !0),
            Hi(t, "touchstart", tn.bind(this, 17, t), !0),
            Hi(t, "touchend", tn.bind(this, 18, t), !0),
            Hi(t, "touchmove", tn.bind(this, 19, t), !0),
            Hi(t, "touchcancel", tn.bind(this, 20, t), !0);
        })(t),
        (function (t) {
          Hi(t, "input", Ue, !0);
        })(t),
        (function (t) {
          Hi(t, "selectstart", kn.bind(this, t), !0),
            Hi(t, "selectionchange", kn.bind(this, t), !0);
        })(t),
        (function (t) {
          Hi(t, "change", _e, !0);
        })(t),
        (function (t) {
          Hi(t, "submit", Mn, !0);
        })(t));
  }
  (Mn.dn = 16), (_n.dn = 17), (Cn.dn = 18), (jn.dn = 8);
  var Rn = Object.freeze({
    __proto__: null,
    observe: An,
    start: jn,
    stop: function () {
      (ir = []),
        ur(),
        ze(),
        Xe(),
        Y(Ge),
        Je.length > 0 && nn(Je[Je.length - 1].event),
        Y(Ye),
        Ve(),
        sn(),
        Dn(),
        Y(hn),
        (ln = []),
        (dn = null),
        (fn = null),
        En(),
        Y(wn),
        Ie(),
        xn(),
        In();
    },
  });
  function Ln(t, e, n, a) {
    return at(this, void 0, void 0, function () {
      var r, i, o, u, c;
      return rt(this, function (s) {
        switch (s.label) {
          case 0:
            (r = [t]), (s.label = 1);
          case 1:
            if (!(r.length > 0)) return [3, 4];
            for (i = r.shift(), o = i.firstChild; o; )
              r.push(o), (o = o.nextSibling);
            return 0 !== (u = ye(e)) ? [3, 3] : [4, ke(e)];
          case 2:
            (u = s.sent()), (s.label = 3);
          case 3:
            return 2 === u ? [3, 4] : ((c = sa(i, n, a)) && r.push(c), [3, 1]);
          case 4:
            return [2];
        }
      });
    });
  }
  var Pn = [],
    zn = [],
    Hn = {},
    Wn = null,
    Xn = null,
    Yn = null,
    qn = null,
    Un = null,
    Fn = [],
    Vn = null,
    Bn = null,
    Jn = null,
    Gn = {};
  function Kn() {
    if (
      ((Pn = []),
      (Fn = []),
      (Vn = null),
      (Jn = 0),
      (Gn = {}),
      null === Wn &&
        ((Wn = CSSStyleSheet.prototype.insertRule),
        (CSSStyleSheet.prototype.insertRule = function () {
          return Qi() && na(this.ownerNode), Wn.apply(this, arguments);
        })),
      "CSSMediaRule" in window &&
        null === qn &&
        ((qn = CSSMediaRule.prototype.insertRule),
        (CSSMediaRule.prototype.insertRule = function () {
          return (
            Qi() && na(this.parentStyleSheet.ownerNode),
            qn.apply(this, arguments)
          );
        })),
      null === Xn &&
        ((Xn = CSSStyleSheet.prototype.deleteRule),
        (CSSStyleSheet.prototype.deleteRule = function () {
          return Qi() && na(this.ownerNode), Xn.apply(this, arguments);
        })),
      "CSSMediaRule" in window &&
        null === Un &&
        ((Un = CSSMediaRule.prototype.deleteRule),
        (CSSMediaRule.prototype.deleteRule = function () {
          return (
            Qi() && na(this.parentStyleSheet.ownerNode),
            Un.apply(this, arguments)
          );
        })),
      null === Yn)
    ) {
      Yn = Element.prototype.attachShadow;
      try {
        Element.prototype.attachShadow = function () {
          return Qi()
            ? na(Yn.apply(this, arguments))
            : Yn.apply(this, arguments);
        };
      } catch (t) {
        Yn = null;
      }
    }
  }
  function Zn(t) {
    var e = s();
    K(6, e),
      zn.push({ time: e, mutations: t }),
      ge($n, 1).then(function () {
        X(Me), Pi(Za)();
      });
  }
  function Qn(t, e, n, a) {
    return at(this, void 0, void 0, function () {
      var r, i, u;
      return rt(this, function (c) {
        switch (c.label) {
          case 0:
            return 0 !== (r = ye(t)) ? [3, 2] : [4, ke(t)];
          case 1:
            (r = c.sent()), (c.label = 2);
          case 2:
            if (2 === r) return [2];
            switch (
              ((i = e.target),
              (u = o.throttleDom
                ? (function (t, e, n, a) {
                    var r = t.target ? ee(t.target.parentNode) : null;
                    if (r && "HTML" !== r.data.tag) {
                      var i = a > Jn,
                        o = ee(t.target),
                        u =
                          o && o.selector
                            ? o.selector.join()
                            : t.target.nodeName,
                        c = [
                          r.selector ? r.selector.join() : "",
                          u,
                          t.attributeName,
                          ta(t.addedNodes),
                          ta(t.removedNodes),
                        ].join();
                      Gn[c] = c in Gn ? Gn[c] : [0, n];
                      var s = Gn[c];
                      if (
                        (!1 === i && s[0] >= 10 && ea(s[2], 2, e, a),
                        (s[0] = i ? (s[1] === n ? s[0] : s[0] + 1) : 1),
                        (s[1] = n),
                        s[0] >= 10)
                      )
                        return (
                          (s[2] = t.removedNodes),
                          n > a + 3e3
                            ? t.type
                            : ((Hn[c] = { mutation: t, timestamp: a }),
                              "throttle")
                        );
                    }
                    return t.type;
                  })(e, t, n, a)
                : e.type),
              u && i && i.ownerDocument && Bt(i.ownerDocument),
              u &&
                i &&
                i.nodeType == Node.DOCUMENT_FRAGMENT_NODE &&
                i.host &&
                Bt(i),
              u)
            ) {
              case "attributes":
                sa(i, 3, a);
                break;
              case "characterData":
                sa(i, 4, a);
                break;
              case "childList":
                ea(e.addedNodes, 1, t, a), ea(e.removedNodes, 2, t, a);
            }
            return [2];
        }
      });
    });
  }
  function $n() {
    return at(this, void 0, void 0, function () {
      var t, e, n, a, r, i, o, u, c, l, d;
      return rt(this, function (f) {
        switch (f.label) {
          case 0:
            be((t = { id: mi(), cost: 3 })), (f.label = 1);
          case 1:
            if (!(zn.length > 0)) return [3, 3];
            for (
              e = zn.shift(), n = s(), a = 0, r = e.mutations;
              a < r.length;
              a++
            )
              (i = r[a]), Qn(t, i, n, e.time);
            return [4, Ha(6, t, e.time)];
          case 2:
            return f.sent(), [3, 1];
          case 3:
            for (o = !1, u = 0, c = Object.keys(Hn); u < c.length; u++)
              (l = c[u]),
                (d = Hn[l]),
                delete Hn[l],
                Qn(t, d.mutation, s(), d.timestamp),
                (o = !0);
            return (
              Object.keys(Hn).length > 0 &&
                (function () {
                  Bn && Y(Bn);
                  Bn = X(function () {
                    ge($n, 1);
                  }, 33);
                })(),
              0 === Object.keys(Hn).length && o ? [4, Ha(6, t, s())] : [3, 5]
            );
          case 4:
            f.sent(), (f.label = 5);
          case 5:
            return we(t), [2];
        }
      });
    });
  }
  function ta(t) {
    for (var e = [], n = 0; t && n < t.length; n++) e.push(t[n].nodeName);
    return e.join();
  }
  function ea(t, e, n, a) {
    return at(this, void 0, void 0, function () {
      var r, i, o;
      return rt(this, function (u) {
        switch (u.label) {
          case 0:
            (r = t ? t.length : 0), (i = 0), (u.label = 1);
          case 1:
            return i < r
              ? 1 !== e
                ? [3, 2]
                : (Ln(t[i], n, e, a), [3, 5])
              : [3, 6];
          case 2:
            return 0 !== (o = ye(n)) ? [3, 4] : [4, ke(n)];
          case 3:
            (o = u.sent()), (u.label = 4);
          case 4:
            if (2 === o) return [3, 6];
            sa(t[i], e, a), (u.label = 5);
          case 5:
            return i++, [3, 1];
          case 6:
            return [2];
        }
      });
    });
  }
  function na(t) {
    return (
      Fn.indexOf(t) < 0 && Fn.push(t),
      Vn && Y(Vn),
      (Vn = X(function () {
        !(function () {
          for (var t = 0, e = Fn; t < e.length; t++) {
            var n = e[t];
            if (n) {
              var a = n.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
              if (a && ae(n)) continue;
              aa(n, a ? "childList" : "characterData");
            }
          }
          Fn = [];
        })();
      }, 33)),
      t
    );
  }
  function aa(t, e) {
    Pi(Zn)([
      {
        addedNodes: [t],
        attributeName: null,
        attributeNamespace: null,
        nextSibling: null,
        oldValue: null,
        previousSibling: null,
        removedNodes: [],
        target: t,
        type: e,
      },
    ]);
  }
  (Kn.dn = 21), (Zn.dn = 22), (aa.dn = 23);
  var ra = /[^0-9\.]/g;
  function ia(t) {
    for (var e = 0, n = Object.keys(t); e < n.length; e++) {
      var a = n[e],
        r = t[a];
      if ("@type" === a && "string" == typeof r)
        switch (
          (r =
            (r = r.toLowerCase()).indexOf("article") >= 0 ||
            r.indexOf("posting") >= 0
              ? "article"
              : r)
        ) {
          case "article":
          case "recipe":
            oi(5, t[a]), oi(8, t.creator), oi(18, t.headline);
            break;
          case "product":
            oi(5, t[a]),
              oi(10, t.name),
              oi(12, t.sku),
              t.brand && oi(6, t.brand.name);
            break;
          case "aggregaterating":
            t.ratingValue &&
              (W(11, oa(t.ratingValue, 100)),
              W(18, oa(t.bestRating)),
              W(19, oa(t.worstRating))),
              W(12, oa(t.ratingCount)),
              W(17, oa(t.reviewCount));
            break;
          case "offer":
            oi(7, t.availability),
              oi(14, t.itemCondition),
              oi(13, t.priceCurrency),
              oi(12, t.sku),
              W(13, oa(t.price));
            break;
          case "brand":
            oi(6, t.name);
        }
      null !== r && "object" == typeof r && ia(r);
    }
  }
  function oa(t, e) {
    if ((void 0 === e && (e = 1), null !== t))
      switch (typeof t) {
        case "number":
          return Math.round(t * e);
        case "string":
          return Math.round(parseFloat(t.replace(ra, "")) * e);
      }
    return null;
  }
  var ua = [
      "title",
      "alt",
      "onload",
      "onfocus",
      "onerror",
      "data-drupal-form-submit-last",
      "aria-label",
    ],
    ca = /[\r\n]+/g;
  function sa(t, e, n) {
    var a,
      r = null;
    if (2 === e && !1 === ae(t)) return r;
    0 !== e &&
      t.nodeType === Node.TEXT_NODE &&
      t.parentElement &&
      "STYLE" === t.parentElement.tagName &&
      (t = t.parentNode);
    var i = !1 === ae(t) ? "add" : "update",
      o = t.parentElement ? t.parentElement : null,
      u = t.ownerDocument !== document;
    switch (t.nodeType) {
      case Node.DOCUMENT_TYPE_NODE:
        o = u && t.parentNode ? Kt(t.parentNode) : o;
        var c = t,
          s = {
            tag: (u ? "iframe:" : "") + "*D",
            attributes: {
              name: c.name ? c.name : "HTML",
              publicId: c.publicId,
              systemId: c.systemId,
            },
          };
        ce[i](t, o, s, e);
        break;
      case Node.DOCUMENT_NODE:
        t === document && Bt(document), Sa(t, n), la(t);
        break;
      case Node.DOCUMENT_FRAGMENT_NODE:
        var l = t;
        if (l.host) {
          if (
            (Bt(l),
            "function" === typeof l.constructor &&
              l.constructor.toString().indexOf("[native code]") >= 0)
          ) {
            la(l);
            var d = { tag: "*S", attributes: { style: "" } };
            ce[i](t, l.host, d, e);
          } else ce[i](t, l.host, { tag: "*P", attributes: {} }, e);
          Sa(t, n);
        }
        break;
      case Node.TEXT_NODE:
        if (
          ((o = o || t.parentNode),
          "update" === i ||
            (o && ae(o) && "STYLE" !== o.tagName && "NOSCRIPT" !== o.tagName))
        ) {
          var f = { tag: "*T", value: t.nodeValue };
          ce[i](t, o, f, e);
        }
        break;
      case Node.ELEMENT_NODE:
        var h = t,
          p = h.tagName,
          v = (function (t) {
            var e = {},
              n = t.attributes;
            if (n && n.length > 0)
              for (var a = 0; a < n.length; a++) {
                var r = n[a].name;
                ua.indexOf(r) < 0 && (e[r] = n[a].value);
              }
            "INPUT" === t.tagName &&
              !("value" in e) &&
              t.value &&
              (e.value = t.value);
            return e;
          })(h);
        switch (
          ((o = t.parentElement
            ? t.parentElement
            : t.parentNode
            ? t.parentNode
            : null),
          "http://www.w3.org/2000/svg" === h.namespaceURI && (p = "svg:" + p),
          p)
        ) {
          case "HTML":
            o = u && o ? Kt(o) : o;
            var g = { tag: (u ? "iframe:" : "") + p, attributes: v };
            ce[i](t, o, g, e);
            break;
          case "SCRIPT":
            if ("type" in v && "application/ld+json" === v.type)
              try {
                ia(JSON.parse(h.text.replace(ca, "")));
              } catch (t) {}
            break;
          case "NOSCRIPT":
            var m = { tag: p, attributes: {}, value: "" };
            ce[i](t, o, m, e);
            break;
          case "META":
            var y = "property" in v ? "property" : "name" in v ? "name" : null;
            if (y && "content" in v) {
              var b = v.content;
              switch (v[y]) {
                case "og:title":
                  oi(20, b);
                  break;
                case "og:type":
                  oi(19, b);
                  break;
                case "generator":
                  oi(21, b);
              }
            }
            break;
          case "HEAD":
            var w = { tag: p, attributes: v },
              k =
                u &&
                (null === (a = t.ownerDocument) || void 0 === a
                  ? void 0
                  : a.location)
                  ? t.ownerDocument.location
                  : location;
            (w.attributes["*B"] = k.protocol + "//" + k.host + k.pathname),
              ce[i](t, o, w, e);
            break;
          case "BASE":
            var S = ee(t.parentElement);
            if (S) {
              var E = document.createElement("a");
              (E.href = v.href),
                (S.data.attributes["*B"] =
                  E.protocol + "//" + E.host + E.pathname);
            }
            break;
          case "STYLE":
            var O = { tag: p, attributes: v, value: da(h) };
            ce[i](t, o, O, e);
            break;
          case "IFRAME":
            var T = t,
              N = { tag: p, attributes: v };
            Gt(T) &&
              (!(function (t) {
                !1 === ae(t) &&
                  Hi(t, "load", aa.bind(this, t, "childList"), !0);
              })(T),
              (N.attributes["*O"] = "true"),
              T.contentDocument &&
                T.contentWindow &&
                "loading" !== T.contentDocument.readyState &&
                (r = T.contentDocument)),
              ce[i](t, o, N, e);
            break;
          case "LINK":
            if (fi && "stylesheet" === v.rel) {
              for (var M in Object.keys(document.styleSheets)) {
                var x = document.styleSheets[M];
                if (x.ownerNode == h) {
                  var _ = { tag: "STYLE", attributes: v, value: fa(x) };
                  ce[i](t, o, _, e);
                  break;
                }
              }
              break;
            }
            var I = { tag: p, attributes: v };
            ce[i](t, o, I, e);
            break;
          case "VIDEO":
          case "AUDIO":
          case "SOURCE":
            "src" in v && v.src.startsWith("data:") && (v.src = "");
            var C = { tag: p, attributes: v };
            ce[i](t, o, C, e);
            break;
          default:
            var D = { tag: p, attributes: v };
            h.shadowRoot && (r = h.shadowRoot), ce[i](t, o, D, e);
        }
    }
    return r;
  }
  function la(t) {
    ae(t) ||
      (!(function (t) {
        try {
          var e = u("MutationObserver"),
            n = e in window ? new window[e](Pi(Zn)) : null;
          n &&
            (n.observe(t, {
              attributes: !0,
              childList: !0,
              characterData: !0,
              subtree: !0,
            }),
            Pn.push(n));
        } catch (t) {
          Cr(2, 0, t ? t.name : null);
        }
      })(t),
      An(t));
  }
  function da(t) {
    var e = t.textContent ? t.textContent.trim() : "",
      n = t.dataset ? Object.keys(t.dataset).length : 0;
    return (0 === e.length || n > 0 || t.id.length > 0) && (e = fa(t.sheet)), e;
  }
  function fa(t) {
    var e = "",
      n = null;
    try {
      n = t ? t.cssRules : [];
    } catch (t) {
      if ((Cr(1, 1, t ? t.name : null), t && "SecurityError" !== t.name))
        throw t;
    }
    if (null !== n) for (var a = 0; a < n.length; a++) e += n[a].cssText;
    return e;
  }
  var ha = [],
    pa = [],
    va = null,
    ga = null,
    ma = "claritySheetId",
    ya = "claritySheetNum",
    ba = {},
    wa = {},
    ka = [];
  function Sa(t, e) {
    if (
      (-1 === ka.indexOf(t) && ka.push(t),
      (e = e || s()),
      null == t ? void 0 : t.adoptedStyleSheets)
    ) {
      W(36, 1);
      for (var n = [], a = 0, r = t.adoptedStyleSheets; a < r.length; a++) {
        var i = r[a],
          o = li.pageNum;
        i[ya] !== o &&
          ((i[ya] = o),
          (i[ma] = Oi()),
          Oa(e, i[ma], 0),
          Oa(e, i[ma], 2, fa(i))),
          n.push(i[ma]);
      }
      var u = Jt(t, !0);
      ba[u] || (ba[u] = []),
        (function (t, e) {
          if (t.length !== e.length) return !1;
          return t.every(function (t, n) {
            return t === e[n];
          });
        })(n, ba[u]) ||
          (!(function (t, e, n, a) {
            pa.push({
              time: t,
              event: 45,
              data: { id: e, operation: n, newIds: a },
            }),
              Ha(45);
          })(e, t == document ? -1 : Jt(t), 3, n),
          (ba[u] = n),
          (wa[u] = e));
    }
  }
  function Ea() {
    (pa = []), (ha = []);
  }
  function Oa(t, e, n, a) {
    ha.push({ time: t, event: 46, data: { id: e, operation: n, cssRules: a } }),
      Ha(46);
  }
  var Ta = [],
    Na = null,
    Ma = null,
    xa = null,
    _a = null,
    Ia = null,
    Ca = null,
    Da = "clarityAnimationId",
    ja = "clarityOperationCount",
    Aa = 20;
  function Ra() {
    Ta = [];
  }
  function La(t, e, n, a, r, i, o) {
    Ta.push({
      time: t,
      event: 44,
      data: {
        id: e,
        operation: n,
        keyFrames: a,
        timing: r,
        targetId: i,
        timeline: o,
      },
    }),
      Ha(44);
  }
  function Pa(t, e) {
    null === t &&
      ((t = Animation.prototype[e]),
      (Animation.prototype[e] = function () {
        return za(this, e), t.apply(this, arguments);
      }));
  }
  function za(t, e) {
    if (Qi()) {
      var n = t.effect,
        a = Jt(n.target);
      if (null !== a && n.getKeyframes && n.getTiming) {
        if (!t[Da]) {
          (t[Da] = Oi()), (t[ja] = 0);
          var r = n.getKeyframes(),
            i = n.getTiming();
          La(s(), t[Da], 0, JSON.stringify(r), JSON.stringify(i), a);
        }
        if (t[ja]++ < Aa) {
          var o = null;
          switch (e) {
            case "play":
              o = 1;
              break;
            case "pause":
              o = 2;
              break;
            case "cancel":
              o = 3;
              break;
            case "finish":
              o = 4;
              break;
            case "commitStyles":
              o = 5;
          }
          o && La(s(), t[Da], o);
        }
      }
    }
  }
  function Ha(t, e, n) {
    return (
      void 0 === e && (e = null),
      void 0 === n && (n = null),
      at(this, void 0, void 0, function () {
        var a,
          r,
          i,
          u,
          c,
          l,
          d,
          f,
          h,
          p,
          v,
          g,
          y,
          b,
          w,
          k,
          S,
          E,
          O,
          T,
          N,
          M,
          I,
          C,
          D,
          j,
          A,
          R,
          L;
        return rt(this, function (P) {
          switch (P.label) {
            case 0:
              switch (((a = n || s()), (r = [a, t]), t)) {
                case 8:
                  return [3, 1];
                case 7:
                  return [3, 2];
                case 45:
                case 46:
                  return [3, 3];
                case 44:
                  return [3, 4];
                case 5:
                case 6:
                  return [3, 5];
              }
              return [3, 12];
            case 1:
              return (
                (i = Oe),
                r.push(i.width),
                r.push(i.height),
                x(t, i.width, i.height),
                br(r),
                [3, 12]
              );
            case 2:
              for (u = 0, c = qa; u < c.length; u++)
                (l = c[u]),
                  (r = [l.time, 7]).push(l.data.id),
                  r.push(l.data.interaction),
                  r.push(l.data.visibility),
                  r.push(l.data.name),
                  br(r);
              return er(), [3, 12];
            case 3:
              for (d = 0, f = pa; d < f.length; d++)
                (y = f[d]),
                  (r = [y.time, y.event]).push(y.data.id),
                  r.push(y.data.operation),
                  r.push(y.data.newIds),
                  br(r);
              for (h = 0, p = ha; h < p.length; h++)
                (y = p[h]),
                  (r = [y.time, y.event]).push(y.data.id),
                  r.push(y.data.operation),
                  r.push(y.data.cssRules),
                  br(r);
              return Ea(), [3, 12];
            case 4:
              for (v = 0, g = Ta; v < g.length; v++)
                (y = g[v]),
                  (r = [y.time, y.event]).push(y.data.id),
                  r.push(y.data.operation),
                  r.push(y.data.keyFrames),
                  r.push(y.data.timing),
                  r.push(y.data.timeline),
                  r.push(y.data.targetId),
                  br(r);
              return Ra(), [3, 12];
            case 5:
              if (2 === ye(e)) return [3, 12];
              if (!((b = re()).length > 0)) return [3, 11];
              (w = 0), (k = b), (P.label = 6);
            case 6:
              return w < k.length
                ? ((S = k[w]), 0 !== (E = ye(e)) ? [3, 8] : [4, ke(e)])
                : [3, 10];
            case 7:
              (E = P.sent()), (P.label = 8);
            case 8:
              if (2 === E) return [3, 10];
              for (
                O = S.data,
                  T = S.metadata.active,
                  N = S.metadata.suspend,
                  M = S.metadata.privacy,
                  I = (function (t) {
                    var e = t.metadata.privacy;
                    return "*T" === t.data.tag && !(0 === e || 1 === e);
                  })(S),
                  C = 0,
                  D = T ? ["tag", "attributes", "value"] : ["tag"];
                C < D.length;
                C++
              )
                if (O[(j = D[C])])
                  switch (j) {
                    case "tag":
                      (A = Wa(S)),
                        (R = I ? -1 : 1),
                        r.push(S.id * R),
                        S.parent &&
                          T &&
                          (r.push(S.parent), S.previous && r.push(S.previous)),
                        r.push(N ? "*M" : O[j]),
                        A &&
                          2 === A.length &&
                          r.push(
                            ""
                              .concat("#")
                              .concat(Xa(A[0]), ".")
                              .concat(Xa(A[1]))
                          );
                      break;
                    case "attributes":
                      for (L in O[j])
                        void 0 !== O[j][L] && r.push(Ya(L, O[j][L], M));
                      break;
                    case "value":
                      Ot(S.metadata.fraud, S.id, O[j]),
                        r.push(m(O[j], O.tag, M, I));
                  }
              P.label = 9;
            case 9:
              return w++, [3, 6];
            case 10:
              6 === t && _(a),
                br(
                  (function (t) {
                    for (
                      var e = [], n = {}, a = 0, r = null, i = 0;
                      i < t.length;
                      i++
                    )
                      if ("string" == typeof t[i]) {
                        var o = t[i],
                          u = n[o] || -1;
                        u >= 0
                          ? r
                            ? r.push(u)
                            : ((r = [u]), e.push(r), a++)
                          : ((r = null), e.push(o), (n[o] = a++));
                      } else (r = null), e.push(t[i]), a++;
                    return e;
                  })(r),
                  !o.lean
                ),
                (P.label = 11);
            case 11:
              return [3, 12];
            case 12:
              return [2];
          }
        });
      })
    );
  }
  function Wa(t) {
    if (null !== t.metadata.size && 0 === t.metadata.size.length) {
      var e = te(t.id);
      if (e)
        return [
          Math.floor(100 * e.offsetWidth),
          Math.floor(100 * e.offsetHeight),
        ];
    }
    return t.metadata.size;
  }
  function Xa(t) {
    return t.toString(36);
  }
  function Ya(t, e, n) {
    return ""
      .concat(t, "=")
      .concat(m(e, 0 === t.indexOf("data-") ? "data-" : t, n));
  }
  var qa = [],
    Ua = null,
    Fa = {},
    Va = [],
    Ba = !1,
    Ja = null;
  function Ga(t, e) {
    !1 === Ua.has(t) &&
      (Ua.set(t, e),
      (Ja =
        null === Ja && Ba
          ? new IntersectionObserver(Qa, {
              threshold: [
                0, 0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1,
              ],
            })
          : Ja) &&
        t &&
        t.nodeType === Node.ELEMENT_NODE &&
        Ja.observe(t));
  }
  function Ka(t) {
    return Ua && Ua.has(t);
  }
  function Za() {
    for (var t = [], e = 0, n = Va; e < n.length; e++) {
      var a = n[e],
        r = Jt(a.node);
      r
        ? ((a.state.data.id = r), (Fa[r] = a.state.data), qa.push(a.state))
        : t.push(a);
    }
    (Va = t), qa.length > 0 && Ha(7);
  }
  function Qa(t) {
    for (var e = 0, n = t; e < n.length; e++) {
      var a = n[e],
        r = a.target,
        i = a.boundingClientRect,
        o = a.intersectionRect,
        u = a.rootBounds;
      if (Ua.has(r) && i.width + i.height > 0 && u.width > 0 && u.height > 0) {
        var c = r ? Jt(r) : null,
          s =
            c in Fa
              ? Fa[c]
              : { id: c, name: Ua.get(r), interaction: 16, visibility: 0 },
          l =
            (o ? (o.width * o.height * 1) / (u.width * u.height) : 0) > 0.05 ||
            a.intersectionRatio > 0.8,
          d =
            (l || 10 == s.visibility) && Math.abs(i.top) + u.height > i.height;
        $a(r, s, s.interaction, d ? 13 : l ? 10 : 0),
          s.visibility >= 13 && Ja && Ja.unobserve(r);
      }
    }
    qa.length > 0 && Ha(7);
  }
  function $a(t, e, n, a) {
    var r = n > e.interaction || a > e.visibility;
    (e.interaction = n > e.interaction ? n : e.interaction),
      (e.visibility = a > e.visibility ? a : e.visibility),
      e.id
        ? ((e.id in Fa && r) || !(e.id in Fa)) &&
          ((Fa[e.id] = e), qa.push(tr(e)))
        : Va.push({ node: t, state: tr(e) });
  }
  function tr(t) {
    return {
      time: s(),
      data: {
        id: t.id,
        interaction: t.interaction,
        visibility: t.visibility,
        name: t.name,
      },
    };
  }
  function er() {
    qa = [];
  }
  function nr(t) {
    var e = t.composed && t.composedPath ? t.composedPath() : null,
      n = e && e.length > 0 ? e[0] : t.target;
    return (
      (Jn = s() + 3e3),
      n && n.nodeType === Node.DOCUMENT_NODE ? n.documentElement : n
    );
  }
  function ar(t, e, n) {
    void 0 === n && (n = null);
    var a = { id: 0, hash: null, privacy: 2, node: t };
    if (t) {
      var r = ee(t);
      if (null !== r) {
        var i = r.metadata;
        (a.id = r.id),
          (a.hash = r.hash),
          (a.privacy = i.privacy),
          r.region &&
            (function (t, e) {
              var n = te(t),
                a =
                  t in Fa
                    ? Fa[t]
                    : {
                        id: t,
                        visibility: 0,
                        interaction: 16,
                        name: Ua.get(n),
                      },
                r = 16;
              switch (e) {
                case 9:
                  r = 20;
                  break;
                case 27:
                  r = 30;
              }
              $a(n, a, r, a.visibility);
            })(r.region, e),
          i.fraud && Ot(i.fraud, r.id, n || r.data.value);
      }
    }
    return a;
  }
  function rr(t, e) {
    return (
      void 0 === e && (e = null),
      at(this, void 0, void 0, function () {
        var n,
          a,
          r,
          i,
          o,
          u,
          c,
          l,
          d,
          f,
          h,
          p,
          v,
          g,
          b,
          w,
          k,
          S,
          E,
          O,
          T,
          N,
          M,
          _,
          C,
          D,
          j,
          A,
          R,
          L,
          P,
          z,
          H,
          W,
          X;
        return rt(this, function (Y) {
          switch (((n = e || s()), (a = [n, t]), t)) {
            case 13:
            case 14:
            case 12:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
              for (r = 0, i = Je; r < i.length; r++)
                (W = i[r]),
                  (o = ar(W.data.target, W.event)).id > 0 &&
                    ((a = [W.time, W.event]).push(o.id),
                    a.push(W.data.x),
                    a.push(W.data.y),
                    void 0 !== W.data.id &&
                      (a.push(W.data.id),
                      void 0 !== W.data.isPrimary &&
                        a.push(W.data.isPrimary.toString())),
                    br(a),
                    x(W.event, W.data.x, W.data.y));
              an();
              break;
            case 9:
              for (u = 0, c = je; u < c.length; u++)
                (W = c[u]),
                  (l = ar(W.data.target, W.event, W.data.text)),
                  (a = [W.time, W.event]),
                  (d = l.hash ? l.hash.join(".") : ""),
                  a.push(l.id),
                  a.push(W.data.x),
                  a.push(W.data.y),
                  a.push(W.data.eX),
                  a.push(W.data.eY),
                  a.push(W.data.button),
                  a.push(W.data.reaction),
                  a.push(W.data.context),
                  a.push(m(W.data.text, "click", l.privacy)),
                  a.push(y(W.data.link)),
                  a.push(d),
                  a.push(W.data.trust),
                  br(a),
                  cr(
                    W.time,
                    W.event,
                    d,
                    W.data.x,
                    W.data.y,
                    W.data.reaction,
                    W.data.context
                  );
              ze();
              break;
            case 38:
              for (f = 0, h = He; f < h.length; f++)
                (W = h[f]),
                  (a = [W.time, W.event]),
                  (P = ar(W.data.target, W.event)).id > 0 &&
                    (a.push(P.id), a.push(W.data.action), br(a));
              Xe();
              break;
            case 11:
              (p = Be),
                a.push(p.width),
                a.push(p.height),
                x(t, p.width, p.height),
                sn(),
                br(a);
              break;
            case 26:
              (v = On), a.push(v.name), In(), br(a);
              break;
            case 27:
              for (g = 0, b = qe; g < b.length; g++)
                (W = b[g]),
                  (w = ar(W.data.target, W.event, W.data.value)),
                  (a = [W.time, W.event]).push(w.id),
                  a.push(m(W.data.value, "input", w.privacy, !1, W.data.type)),
                  br(a);
              Ve();
              break;
            case 21:
              (k = yn) &&
                ((S = ar(k.start, t)),
                (E = ar(k.end, t)),
                a.push(S.id),
                a.push(k.startOffset),
                a.push(E.id),
                a.push(k.endOffset),
                En(),
                br(a));
              break;
            case 10:
              for (O = 0, T = ln; O < T.length; O++)
                (W = T[O]),
                  (N = ar(W.data.target, W.event)),
                  (M = ar(W.data.top, W.event)),
                  (_ = ar(W.data.bottom, W.event)),
                  (C = (null == M ? void 0 : M.hash) ? M.hash.join(".") : ""),
                  (D = (null == _ ? void 0 : _.hash) ? _.hash.join(".") : ""),
                  N.id > 0 &&
                    ((a = [W.time, W.event]).push(N.id),
                    a.push(W.data.x),
                    a.push(W.data.y),
                    a.push(C),
                    a.push(D),
                    br(a),
                    x(W.event, W.data.x, W.data.y, W.time));
              (ln = []), (dn = null), (fn = null);
              break;
            case 42:
              for (j = 0, A = xe; j < A.length; j++)
                (W = A[j]),
                  (a = [W.time, W.event]),
                  (P = ar(W.data.target, W.event)).id > 0 &&
                    ((a = [W.time, W.event]).push(P.id),
                    a.push(W.data.type),
                    a.push(m(W.data.value, "change", P.privacy)),
                    a.push(m(W.data.checksum, "checksum", P.privacy)),
                    br(a));
              Ie();
              break;
            case 39:
              for (R = 0, L = Nn; R < L.length; R++)
                (W = L[R]),
                  (a = [W.time, W.event]),
                  (P = ar(W.data.target, W.event)).id > 0 &&
                    (a.push(P.id), br(a));
              xn();
              break;
            case 22:
              for (z = 0, H = or; z < H.length; z++)
                (W = H[z]),
                  (a = [W.time, W.event]).push(W.data.type),
                  a.push(W.data.hash),
                  a.push(W.data.x),
                  a.push(W.data.y),
                  a.push(W.data.reaction),
                  a.push(W.data.context),
                  br(a, !1);
              ur();
              break;
            case 28:
              (X = Tn), a.push(X.visible), br(a), I(n, X.visible), Dn();
          }
          return [2];
        });
      })
    );
  }
  Za.dn = 24;
  var ir = [],
    or = [];
  function ur() {
    or = [];
  }
  function cr(t, e, n, a, r, i, o) {
    void 0 === i && (i = 1),
      void 0 === o && (o = 0),
      ir.push({
        time: t,
        event: 22,
        data: { type: e, hash: n, x: a, y: r, reaction: i, context: o },
      }),
      x(e, a, r);
  }
  var sr,
    lr,
    dr,
    fr,
    hr,
    pr = 0,
    vr = 0,
    gr = null,
    mr = 0;
  function yr() {
    (fr = !0),
      (pr = 0),
      (vr = 0),
      (mr = 0),
      (sr = []),
      (lr = []),
      (dr = {}),
      (hr = null);
  }
  function br(t, e) {
    if ((void 0 === e && (e = !0), fr)) {
      var n = s(),
        a = t.length > 1 ? t[1] : null,
        r = JSON.stringify(t);
      switch (a) {
        case 5:
          pr += r.length;
        case 37:
        case 6:
        case 43:
        case 45:
        case 46:
          (vr += r.length), sr.push(r);
          break;
        default:
          lr.push(r);
      }
      z(25);
      var i = (function () {
        var t = !1 === o.lean && pr > 0 ? 100 : Ci.sequence * o.delay;
        return "string" == typeof o.upload
          ? Math.max(Math.min(t, 3e4), 100)
          : o.delay;
      })();
      n - mr > 2 * i && (Y(gr), (gr = null)),
        e &&
          null === gr &&
          (25 !== a && V(), (gr = X(kr, i)), (mr = n), Zr(vr));
    }
  }
  function wr() {
    Y(gr),
      kr(!0),
      (pr = 0),
      (vr = 0),
      (mr = 0),
      (sr = []),
      (lr = []),
      (dr = {}),
      (hr = null),
      (fr = !1);
  }
  function kr(t) {
    return (
      void 0 === t && (t = !1),
      at(this, void 0, void 0, function () {
        var e, n, a, r, i, u, c, s;
        return rt(this, function (l) {
          switch (l.label) {
            case 0:
              return (
                (gr = null),
                (e =
                  !1 === o.lean &&
                  vr > 0 &&
                  (vr < 1048576 || Ci.sequence > 0)) && W(1, 1),
                Za(),
                (function () {
                  var t = [];
                  or = [];
                  for (
                    var e = Ci.start + Ci.duration,
                      n = Math.max(e - 2e3, 0),
                      a = 0,
                      r = ir;
                    a < r.length;
                    a++
                  ) {
                    var i = r[a];
                    i.time >= n && (i.time <= e && or.push(i), t.push(i));
                  }
                  (ir = t), rr(22);
                })(),
                kt(),
                (function () {
                  for (var t = 0, e = ka; t < e.length; t++) {
                    var n = e[t],
                      a = n == document ? -1 : Jt(n),
                      r = a in wa ? wa[a] : null;
                    Sa(document, r);
                  }
                })(),
                (n = !0 === t),
                (a = JSON.stringify(Ai(n))),
                (r = "[".concat(lr.join(), "]")),
                (i = e ? "[".concat(sr.join(), "]") : ""),
                (u = (function (t) {
                  return t.p.length > 0
                    ? '{"e":'
                        .concat(t.e, ',"a":')
                        .concat(t.a, ',"p":')
                        .concat(t.p, "}")
                    : '{"e":'.concat(t.e, ',"a":').concat(t.a, "}");
                })({ e: a, a: r, p: i })),
                n ? ((s = null), [3, 3]) : [3, 1]
              );
            case 1:
              return [4, pt(u)];
            case 2:
              (s = l.sent()), (l.label = 3);
            case 3:
              return (
                H(2, (c = s) ? c.length : u.length),
                Sr(u, c, Ci.sequence, n),
                (lr = []),
                e && ((sr = []), (vr = 0), (pr = 0)),
                [2]
              );
          }
        });
      })
    );
  }
  function Sr(t, e, n, a) {
    if ((void 0 === a && (a = !1), "string" == typeof o.upload)) {
      var r = o.upload,
        i = !1;
      if (a && "sendBeacon" in navigator)
        try {
          (i = navigator.sendBeacon.bind(navigator)(r, t)) && Or(n);
        } catch (t) {}
      if (!1 === i) {
        n in dr ? dr[n].attempts++ : (dr[n] = { data: t, attempts: 1 });
        var u = new XMLHttpRequest();
        u.open("POST", r, !0),
          (u.timeout = 15e3),
          (u.ontimeout = function () {
            Li(new Error("".concat("Timeout", " : ").concat(r)));
          }),
          null !== n &&
            (u.onreadystatechange = function () {
              Pi(Er)(u, n);
            }),
          (u.withCredentials = !0),
          e
            ? (u.setRequestHeader("Accept", "application/x-clarity-gzip"),
              u.send(e))
            : u.send(t);
      }
    } else if (o.upload) {
      (0, o.upload)(t), Or(n);
    }
  }
  function Er(t, e) {
    var n = dr[e];
    t &&
      4 === t.readyState &&
      n &&
      ((t.status < 200 || t.status > 208) && n.attempts <= 1
        ? t.status >= 400 && t.status < 500
          ? Qr(6)
          : (0 === t.status && (o.upload = o.fallback ? o.fallback : o.upload),
            Sr(n.data, null, e))
        : ((hr = { sequence: e, attempts: n.attempts, status: t.status }),
          n.attempts > 1 && Gr(2),
          200 === t.status &&
            t.responseText &&
            (function (t) {
              for (
                var e = t && t.length > 0 ? t.split("\n") : [], n = 0, a = e;
                n < a.length;
                n++
              ) {
                var r = a[n],
                  i = r && r.length > 0 ? r.split(/ (.*)/) : [""];
                switch (i[0]) {
                  case "END":
                    Qr(6);
                    break;
                  case "UPGRADE":
                    et("Auto");
                    break;
                  case "ACTION":
                    o.action && i.length > 1 && o.action(i[1]);
                    break;
                  case "EXTRACT":
                    i.length > 1 && Wr(i[1]);
                    break;
                  case "SIGNAL":
                    i.length > 1 && mt(i[1]);
                }
              }
            })(t.responseText),
          0 === t.status && (Sr(n.data, null, e, !0), Qr(3)),
          t.status >= 200 && t.status <= 208 && Or(e),
          delete dr[e]));
  }
  function Or(t) {
    1 === t && (ki(), wi());
  }
  var Tr,
    Nr = {};
  function Mr(t) {
    var e = t.error || t;
    return (
      e.message in Nr || (Nr[e.message] = 0),
      Nr[e.message]++ >= 5 ||
        (e &&
          e.message &&
          ((Tr = {
            message: e.message,
            line: t.lineno,
            column: t.colno,
            stack: e.stack,
            source: t.filename,
          }),
          xr(31))),
      !0
    );
  }
  function xr(t) {
    return at(this, void 0, void 0, function () {
      var e;
      return rt(this, function (n) {
        switch (((e = [s(), t]), t)) {
          case 31:
            e.push(Tr.message),
              e.push(Tr.line),
              e.push(Tr.column),
              e.push(Tr.stack),
              e.push(y(Tr.source)),
              br(e);
            break;
          case 33:
            _r &&
              (e.push(_r.code),
              e.push(_r.name),
              e.push(_r.message),
              e.push(_r.stack),
              e.push(_r.severity),
              br(e, !1));
            break;
          case 41:
            St &&
              (e.push(St.id),
              e.push(St.target),
              e.push(St.checksum),
              br(e, !1));
        }
        return [2];
      });
    });
  }
  Mr.dn = 4;
  var _r,
    Ir = {};
  function Cr(t, e, n, a, r) {
    void 0 === n && (n = null),
      void 0 === a && (a = null),
      void 0 === r && (r = null);
    var i = n ? "".concat(n, "|").concat(a) : "";
    (t in Ir && Ir[t].indexOf(i) >= 0) ||
      ((_r = { code: t, name: n, message: a, stack: r, severity: e }),
      t in Ir ? Ir[t].push(i) : (Ir[t] = [i]),
      xr(33));
  }
  var Dr,
    jr = {},
    Ar = new Set(),
    Rr = {},
    Lr = {},
    Pr = {},
    zr = {};
  function Hr() {
    qr();
  }
  function Wr(t) {
    try {
      var e = t && t.length > 0 ? t.split(/ (.*)/) : [""],
        n = e[0].split(/\|(.*)/),
        a = parseInt(n[0]),
        r = n.length > 1 ? n[1] : "",
        i = e.length > 1 ? JSON.parse(e[1]) : {};
      for (var o in ((Rr[a] = {}),
      (Lr[a] = {}),
      (Pr[a] = {}),
      (zr[a] = r),
      i)) {
        var u = parseInt(o),
          c = i[o],
          s = 2;
        switch (
          (c.startsWith("~") ? (s = 0) : c.startsWith("!") && (s = 4), s)
        ) {
          case 0:
            var l = c.substring(1, c.length);
            Rr[a][u] = Vr(l);
            break;
          case 2:
            Lr[a][u] = c;
            break;
          case 4:
            var d = c.substring(1, c.length);
            Pr[a][u] = d;
        }
      }
    } catch (t) {
      Cr(8, 1, t ? t.name : null);
    }
  }
  function Xr(t) {
    return JSON.parse(JSON.stringify(t));
  }
  function Yr() {
    try {
      for (var t in Rr) {
        var e = parseInt(t);
        if ("" == zr[e] || document.querySelector(zr[e])) {
          var n = Rr[e];
          for (var a in n) {
            var r = parseInt(a),
              i = (h = Br(Xr(n[r]))) ? JSON.stringify(h).substring(0, 1e4) : h;
            i && Ur(e, r, i);
          }
          var o = Lr[e];
          for (var u in o) {
            var c = parseInt(u),
              s = document.querySelectorAll(o[c]);
            if (s)
              Ur(
                e,
                c,
                Array.from(s)
                  .map(function (t) {
                    return t.textContent;
                  })
                  .join("<SEP>")
                  .substring(0, 1e4)
              );
          }
          var l = Pr[e];
          for (var d in l) {
            var f = parseInt(d);
            Ur(e, f, $t(l[f]).trim().substring(0, 1e4));
          }
        }
      }
      Ar.size > 0 && Gr(40);
    } catch (t) {
      Cr(5, 1, t ? t.name : null);
    }
    var h;
  }
  function qr() {
    Ar.clear();
  }
  function Ur(t, e, n) {
    var a,
      r = !1;
    t in jr || ((jr[t] = {}), (r = !0)),
      (a = Pr[t]),
      0 == Object.keys(a).length || (e in jr[t] && jr[t][e] == n) || (r = !0),
      (jr[t][e] = n),
      r && Ar.add(t);
  }
  function Fr() {
    qr();
  }
  function Vr(t) {
    for (var e = [], n = t.split("."); n.length > 0; ) {
      var a = n.shift(),
        r = a.indexOf("["),
        i = a.indexOf("{"),
        o = a.indexOf("}");
      e.push({
        name: r > 0 ? a.substring(0, r) : i > 0 ? a.substring(0, i) : a,
        type: r > 0 ? 1 : i > 0 ? 2 : 3,
        condition: i > 0 ? a.substring(i + 1, o) : null,
      });
    }
    return e;
  }
  function Br(t, e) {
    if ((void 0 === e && (e = window), 0 == t.length)) return e;
    var n,
      a = t.shift();
    if (e && e[a.name]) {
      var r = e[a.name];
      if (1 !== a.type && Jr(r, a.condition)) n = Br(t, r);
      else if (Array.isArray(r)) {
        for (var i = [], o = 0, u = r; o < u.length; o++) {
          var c = u[o];
          if (Jr(c, a.condition)) {
            var s = Br(t, c);
            s && i.push(s);
          }
        }
        n = i;
      }
      return n;
    }
    return null;
  }
  function Jr(t, e) {
    if (e) {
      var n = e.split(":");
      return n.length > 1 ? t[n[0]] == n[1] : t[n[0]];
    }
    return !0;
  }
  function Gr(t) {
    var e = [s(), t];
    switch (t) {
      case 4:
        var n = O;
        n &&
          ((e = [n.time, n.event]).push(n.data.visible),
          e.push(n.data.docWidth),
          e.push(n.data.docHeight),
          e.push(n.data.screenWidth),
          e.push(n.data.screenHeight),
          e.push(n.data.scrollX),
          e.push(n.data.scrollY),
          e.push(n.data.pointerX),
          e.push(n.data.pointerY),
          e.push(n.data.activityTime),
          e.push(n.data.scrollTime),
          br(e, !1)),
          M();
        break;
      case 25:
        e.push(R.gap), br(e);
        break;
      case 35:
        e.push(Dr.check), br(e, !1);
        break;
      case 3:
        e.push(tt.key), br(e);
        break;
      case 2:
        e.push(hr.sequence), e.push(hr.attempts), e.push(hr.status), br(e, !1);
        break;
      case 24:
        j.key && e.push(j.key), e.push(j.value), br(e);
        break;
      case 34:
        var a = Object.keys(it);
        if (a.length > 0) {
          for (var r = 0, i = a; r < i.length; r++) {
            var o = i[r];
            e.push(o), e.push(it[o]);
          }
          lt(), br(e, !1);
        }
        break;
      case 0:
        var u = Object.keys(P);
        if (u.length > 0) {
          for (var c = 0, l = u; c < l.length; c++) {
            var d = l[c],
              f = parseInt(d, 10);
            e.push(f), e.push(Math.round(P[d]));
          }
          (P = {}), br(e, !1);
        }
        break;
      case 1:
        var h = Object.keys(ni);
        if (h.length > 0) {
          for (var p = 0, v = h; p < v.length; p++) {
            var g = v[p];
            f = parseInt(g, 10);
            e.push(f), e.push(ni[g]);
          }
          ci(), br(e, !1);
        }
        break;
      case 36:
        var m = Object.keys(G);
        if (m.length > 0) {
          for (var y = 0, b = m; y < b.length; y++) {
            var w = b[y];
            f = parseInt(w, 10);
            e.push(f), e.push([].concat.apply([], G[w]));
          }
          Q(), br(e, !1);
        }
        break;
      case 40:
        Ar.forEach(function (t) {
          e.push(t);
          var n = [];
          for (var a in jr[t]) {
            var r = parseInt(a, 10);
            n.push(r), n.push(jr[t][a]);
          }
          e.push(n);
        }),
          qr(),
          br(e, !1);
    }
  }
  function Kr() {
    Dr = { check: 0 };
  }
  function Zr(t) {
    if (0 === Dr.check) {
      var e = Dr.check;
      (e = Ci.sequence >= 128 ? 1 : e),
        (e = Ci.pageNum >= 128 ? 7 : e),
        (e = s() > 72e5 ? 2 : e),
        (e = t > 10485760 ? 2 : e) !== Dr.check && Qr(e);
    }
  }
  function Qr(t) {
    (Dr.check = t), 5 !== t && (bi(), Mo());
  }
  function $r() {
    0 !== Dr.check && Gr(35);
  }
  function ti() {
    Dr = null;
  }
  var ei = null,
    ni = null,
    ai = !1;
  function ri() {
    (ei = {}), (ni = {}), (ai = !1);
  }
  function ii() {
    (ei = {}), (ni = {}), (ai = !1);
  }
  function oi(t, e) {
    if (
      e &&
      ((e = "".concat(e)), t in ei || (ei[t] = []), ei[t].indexOf(e) < 0)
    ) {
      if (ei[t].length > 128) return void (ai || ((ai = !0), Qr(5)));
      ei[t].push(e), t in ni || (ni[t] = []), ni[t].push(e);
    }
  }
  function ui() {
    Gr(1);
  }
  function ci() {
    (ni = {}), (ai = !1);
  }
  function si(t) {
    oi(36, t.toString());
  }
  var li = null,
    di = [],
    fi = 0,
    hi = null;
  function pi() {
    var t, e, n;
    hi = null;
    var a = navigator && "userAgent" in navigator ? navigator.userAgent : "",
      r =
        null !==
          (n =
            null ===
              (e =
                null ===
                  (t =
                    null === Intl || void 0 === Intl
                      ? void 0
                      : Intl.DateTimeFormat()) || void 0 === t
                  ? void 0
                  : t.resolvedOptions()) || void 0 === e
              ? void 0
              : e.timeZone) && void 0 !== n
          ? n
          : "",
      i = new Date().getTimezoneOffset().toString(),
      u = window.location.ancestorOrigins
        ? Array.from(window.location.ancestorOrigins).toString()
        : "",
      c = document && document.title ? document.title : "";
    fi = a.indexOf("Electron") > 0 ? 1 : 0;
    var s,
      l = (function () {
        var t = {
            session: Oi(),
            ts: Math.round(Date.now()),
            count: 1,
            upgrade: null,
            upload: "",
          },
          e = Mi("_clsk", !o.includeSubdomains);
        if (e) {
          var n = e.split("|");
          n.length >= 5 &&
            t.ts - Ti(n[1]) < 18e5 &&
            ((t.session = n[0]),
            (t.count = Ti(n[2]) + 1),
            (t.upgrade = Ti(n[3])),
            (t.upload =
              n.length >= 6
                ? "".concat("https://").concat(n[5], "/").concat(n[4])
                : "".concat("https://").concat(n[4])));
        }
        return t;
      })(),
      f = Ni(),
      h = o.projectId || d(location.host);
    (li = {
      projectId: h,
      userId: f.id,
      sessionId: l.session,
      pageNum: l.count,
    }),
      (o.lean = o.track && null !== l.upgrade ? 0 === l.upgrade : o.lean),
      (o.upload =
        o.track &&
        "string" == typeof o.upload &&
        l.upload &&
        l.upload.length > "https://".length
          ? l.upload
          : o.upload),
      oi(0, a),
      oi(3, c),
      oi(1, y(location.href, !!fi)),
      oi(2, document.referrer),
      oi(
        15,
        (function () {
          var t = Oi();
          if (o.track && Si(window, "sessionStorage")) {
            var e = sessionStorage.getItem("_cltk");
            (t = e || t), sessionStorage.setItem("_cltk", t);
          }
          return t;
        })()
      ),
      oi(16, document.documentElement.lang),
      oi(17, document.dir),
      oi(26, "".concat(window.devicePixelRatio)),
      oi(28, f.dob.toString()),
      oi(29, f.version.toString()),
      oi(33, u),
      oi(34, r),
      oi(35, i),
      W(0, l.ts),
      W(1, 0),
      W(35, fi),
      navigator &&
        (oi(9, navigator.language),
        W(33, navigator.hardwareConcurrency),
        W(32, navigator.maxTouchPoints),
        W(34, Math.round(navigator.deviceMemory)),
        (s = navigator.userAgentData) && s.getHighEntropyValues
          ? s
              .getHighEntropyValues([
                "model",
                "platform",
                "platformVersion",
                "uaFullVersion",
              ])
              .then(function (t) {
                var e;
                oi(22, t.platform),
                  oi(23, t.platformVersion),
                  null === (e = t.brands) ||
                    void 0 === e ||
                    e.forEach(function (t) {
                      oi(24, t.name + "~" + t.version);
                    }),
                  oi(25, t.model),
                  W(27, t.mobile ? 1 : 0);
              })
          : oi(22, navigator.platform)),
      screen &&
        (W(14, Math.round(screen.width)),
        W(15, Math.round(screen.height)),
        W(16, Math.round(screen.colorDepth)));
    for (var p = 0, v = o.cookies; p < v.length; p++) {
      var g = v[p],
        m = Mi(g);
      m && ot(g, m);
    }
    !(function (t) {
      si(t ? 1 : 0);
    })(o.track),
      Ei(f);
  }
  function vi() {
    (hi = null),
      (li = null),
      di.forEach(function (t) {
        t.called = !1;
      });
  }
  function gi(t, e, n) {
    void 0 === e && (e = !0), void 0 === n && (n = !1);
    var a = o.lean ? 0 : 1,
      r = !1;
    li && (a || !1 === e) && (t(li, !o.lean), (r = !0)),
      (!n && r) || di.push({ callback: t, wait: e, recall: n, called: r });
  }
  function mi() {
    return li ? [li.userId, li.sessionId, li.pageNum].join(".") : "";
  }
  function yi(t) {
    if ((void 0 === t && (t = !0), !t))
      return (
        (o.track = !1),
        _i("_clsk", "", -Number.MAX_VALUE),
        _i("_clck", "", -Number.MAX_VALUE),
        Mo(),
        void window.setTimeout(No, 250)
      );
    Qi() && ((o.track = !0), Ei(Ni(), 1), ki(), si(2));
  }
  function bi() {
    _i("_clsk", "", 0);
  }
  function wi() {
    !(function (t) {
      if (di.length > 0)
        for (var e = 0; e < di.length; e++) {
          var n = di[e];
          !n.callback ||
            n.called ||
            (n.wait && !t) ||
            (n.callback(li, !o.lean),
            (n.called = !0),
            n.recall || (di.splice(e, 1), e--));
        }
    })(o.lean ? 0 : 1);
  }
  function ki() {
    if (li) {
      var t = Math.round(Date.now()),
        e =
          o.upload && "string" == typeof o.upload
            ? o.upload.replace("https://", "")
            : "",
        n = o.lean ? 0 : 1;
      _i("_clsk", [li.sessionId, t, li.pageNum, n, e].join("|"), 1);
    }
  }
  function Si(t, e) {
    try {
      return !!t[e];
    } catch (t) {
      return !1;
    }
  }
  function Ei(t, e) {
    void 0 === e && (e = null), (e = null === e ? t.consent : e);
    var n = Math.ceil((Date.now() + 31536e6) / 864e5),
      a = 0 === t.dob ? (null === o.dob ? 0 : o.dob) : t.dob;
    (null === t.expiry ||
      Math.abs(n - t.expiry) >= 1 ||
      t.consent !== e ||
      t.dob !== a) &&
      _i("_clck", [li.userId, 2, n.toString(36), e, a].join("|"), 365);
  }
  function Oi() {
    var t = Math.floor(Math.random() * Math.pow(2, 32));
    return (
      window &&
        window.crypto &&
        window.crypto.getRandomValues &&
        Uint32Array &&
        (t = window.crypto.getRandomValues(new Uint32Array(1))[0]),
      t.toString(36)
    );
  }
  function Ti(t, e) {
    return void 0 === e && (e = 10), parseInt(t, e);
  }
  function Ni() {
    var t = { id: Oi(), version: 0, expiry: null, consent: 0, dob: 0 },
      e = Mi("_clck", !o.includeSubdomains);
    if (e && e.length > 0) {
      for (
        var n = e.split("|"), a = 0, r = 0, i = document.cookie.split(";");
        r < i.length;
        r++
      ) {
        a += "_clck" === i[r].split("=")[0].trim() ? 1 : 0;
      }
      if (1 === n.length || a > 1) {
        var u = ""
          .concat(";")
          .concat("expires=")
          .concat(new Date(0).toUTCString())
          .concat(";path=/");
        (document.cookie = "".concat("_clck", "=").concat(u)),
          (document.cookie = "".concat("_clsk", "=").concat(u));
      }
      n.length > 1 && (t.version = Ti(n[1])),
        n.length > 2 && (t.expiry = Ti(n[2], 36)),
        n.length > 3 && 1 === Ti(n[3]) && (t.consent = 1),
        n.length > 4 && Ti(n[1]) > 1 && (t.dob = Ti(n[4])),
        (o.track = o.track || 1 === t.consent),
        (t.id = o.track ? n[0] : t.id);
    }
    return t;
  }
  function Mi(t, e) {
    var n;
    if ((void 0 === e && (e = !1), Si(document, "cookie"))) {
      var a = document.cookie.split(";");
      if (a)
        for (var r = 0; r < a.length; r++) {
          var i = a[r].split("=");
          if (i.length > 1 && i[0] && i[0].trim() === t) {
            for (var o = xi(i[1]), u = o[0], c = o[1]; u; )
              (u = (n = xi(c))[0]), (c = n[1]);
            return e
              ? c.endsWith("".concat("~", "1"))
                ? c.substring(0, c.length - 2)
                : null
              : c;
          }
        }
    }
    return null;
  }
  function xi(t) {
    try {
      var e = decodeURIComponent(t);
      return [e != t, e];
    } catch (t) {}
    return [!1, t];
  }
  function _i(t, e, n) {
    if (
      (o.track || "" == e) &&
      ((navigator && navigator.cookieEnabled) || Si(document, "cookie"))
    ) {
      var a = (function (t) {
          return encodeURIComponent(t);
        })(e),
        r = new Date();
      r.setDate(r.getDate() + n);
      var i = r ? "expires=" + r.toUTCString() : "",
        u = "".concat(t, "=").concat(a).concat(";").concat(i).concat(";path=/");
      try {
        if (null === hi) {
          for (
            var c = location.hostname ? location.hostname.split(".") : [],
              s = c.length - 1;
            s >= 0;
            s--
          )
            if (
              ((hi = ".".concat(c[s]).concat(hi || "")),
              s < c.length - 1 &&
                ((document.cookie = ""
                  .concat(u)
                  .concat(";")
                  .concat("domain=")
                  .concat(hi)),
                Mi(t) === e))
            )
              return;
          hi = "";
        }
      } catch (t) {
        hi = "";
      }
      document.cookie = hi
        ? "".concat(u).concat(";").concat("domain=").concat(hi)
        : u;
    }
  }
  var Ii,
    Ci = null;
  function Di() {
    var t = li;
    Ci = {
      version: l,
      sequence: 0,
      start: 0,
      duration: 0,
      projectId: t.projectId,
      userId: t.userId,
      sessionId: t.sessionId,
      pageNum: t.pageNum,
      upload: 0,
      end: 0,
    };
  }
  function ji() {
    Ci = null;
  }
  function Ai(t) {
    return (
      (Ci.start = Ci.start + Ci.duration),
      (Ci.duration = s() - Ci.start),
      Ci.sequence++,
      (Ci.upload = t && "sendBeacon" in navigator ? 1 : 0),
      (Ci.end = t ? 1 : 0),
      [
        Ci.version,
        Ci.sequence,
        Ci.start,
        Ci.duration,
        Ci.projectId,
        Ci.userId,
        Ci.sessionId,
        Ci.pageNum,
        Ci.upload,
        Ci.end,
      ]
    );
  }
  function Ri() {
    Ii = [];
  }
  function Li(t) {
    if (Ii && -1 === Ii.indexOf(t.message)) {
      var e = o.report;
      if (e && e.length > 0) {
        var n = {
          v: Ci.version,
          p: Ci.projectId,
          u: Ci.userId,
          s: Ci.sessionId,
          n: Ci.pageNum,
        };
        t.message && (n.m = t.message), t.stack && (n.e = t.stack);
        var a = new XMLHttpRequest();
        a.open("POST", e, !0), a.send(JSON.stringify(n)), Ii.push(t.message);
      }
    }
    return t;
  }
  function Pi(t) {
    return function () {
      var e = performance.now();
      try {
        t.apply(this, arguments);
      } catch (t) {
        throw Li(t);
      }
      var n = performance.now() - e;
      H(4, n),
        n > o.longTask &&
          (z(7), W(6, n), Cr(9, 0, "".concat(t.dn || t.name, "-").concat(n)));
    };
  }
  var zi = [];
  function Hi(t, e, n, a) {
    void 0 === a && (a = !1), (n = Pi(n));
    try {
      t[u("addEventListener")](e, n, a),
        zi.push({ event: e, target: t, listener: n, capture: a });
    } catch (t) {}
  }
  function Wi() {
    for (var t = 0, e = zi; t < e.length; t++) {
      var n = e[t];
      try {
        n.target[u("removeEventListener")](n.event, n.listener, n.capture);
      } catch (t) {}
    }
    zi = [];
  }
  var Xi = null,
    Yi = null,
    qi = null,
    Ui = 0;
  function Fi() {
    return !(Ui++ > 20) || (Cr(4, 0), !1);
  }
  function Vi() {
    (Ui = 0), qi !== Ji() && (Mo(), window.setTimeout(Bi, 250));
  }
  function Bi() {
    No(), W(29, 1);
  }
  function Ji() {
    return location.href
      ? location.href.replace(location.hash, "")
      : location.href;
  }
  Vi.dn = 1;
  var Gi = !1;
  function Ki() {
    (Gi = !0),
      (c = performance.now() + performance.timeOrigin),
      ve(),
      Wi(),
      Ri(),
      (qi = Ji()),
      (Ui = 0),
      Hi(window, "popstate", Vi),
      null === Xi &&
        ((Xi = history.pushState),
        (history.pushState = function () {
          Xi.apply(this, arguments), Qi() && Fi() && Vi();
        })),
      null === Yi &&
        ((Yi = history.replaceState),
        (history.replaceState = function () {
          Yi.apply(this, arguments), Qi() && Fi() && Vi();
        }));
  }
  function Zi() {
    (qi = null), (Ui = 0), Ri(), Wi(), ve(), (c = 0), (Gi = !1);
  }
  function Qi() {
    return Gi;
  }
  function $i() {
    No(), A("clarity", "restart");
  }
  function to() {
    !(function () {
      (Et = []), W(26, navigator.webdriver ? 1 : 0);
      try {
        W(31, window.top == window.self || window.top == window ? 1 : 2);
      } catch (t) {
        W(31, 0);
      }
    })(),
      Hi(window, "error", Mr),
      (Nr = {}),
      (Ir = {});
  }
  ($i.dn = 2), (to.dn = 3);
  var eo = Object.freeze({
    __proto__: null,
    start: to,
    stop: function () {
      Ir = {};
    },
  });
  function no() {
    return at(this, void 0, void 0, function () {
      var t, e;
      return rt(this, function (n) {
        switch (n.label) {
          case 0:
            return (
              (t = s()),
              be((e = { id: mi(), cost: 3 })),
              [4, Ln(document, e, 0, t)]
            );
          case 1:
            return n.sent(), Sa(document, t), [4, Ha(5, e, t)];
          case 2:
            return n.sent(), we(e), [2];
        }
      });
    });
  }
  function ao() {
    Ne(),
      Me(),
      er(),
      (Ja = null),
      (Ua = new WeakMap()),
      (Fa = {}),
      (Va = []),
      (Ba = !!window.IntersectionObserver),
      Ut(),
      o.delayDom
        ? Hi(window, "load", function () {
            Kn();
          })
        : Kn(),
      ge(no, 1).then(function () {
        Pi(Me)(), Pi(Za)(), Pi(mn)();
      }),
      null === va &&
        ((va = CSSStyleSheet.prototype.replace),
        (CSSStyleSheet.prototype.replace = function () {
          return (
            Qi() &&
              (W(36, 1),
              this[ya] === li.pageNum && Oa(s(), this[ma], 1, arguments[0])),
            va.apply(this, arguments)
          );
        })),
      null === ga &&
        ((ga = CSSStyleSheet.prototype.replaceSync),
        (CSSStyleSheet.prototype.replaceSync = function () {
          return (
            Qi() &&
              (W(36, 1),
              this[ya] === li.pageNum && Oa(s(), this[ma], 2, arguments[0])),
            ga.apply(this, arguments)
          );
        })),
      (function () {
        if (
          window.Animation &&
          window.Animation.prototype &&
          window.KeyframeEffect &&
          window.KeyframeEffect.prototype &&
          window.KeyframeEffect.prototype.getKeyframes &&
          window.KeyframeEffect.prototype.getTiming &&
          (Ra(),
          Pa(Ma, "play"),
          Pa(xa, "pause"),
          Pa(_a, "commitStyles"),
          Pa(Ia, "cancel"),
          Pa(Ca, "finish"),
          null === Na &&
            ((Na = Element.prototype.animate),
            (Element.prototype.animate = function () {
              var t = Na.apply(this, arguments);
              return za(t, "play"), t;
            })),
          document.getAnimations)
        )
          for (var t = 0, e = document.getAnimations(); t < e.length; t++) {
            var n = e[t];
            "finished" === n.playState
              ? za(n, "finish")
              : "paused" === n.playState || "idle" === n.playState
              ? za(n, "pause")
              : "running" === n.playState && za(n, "play");
          }
      })();
  }
  ao.dn = 20;
  var ro = Object.freeze({
    __proto__: null,
    hashText: $t,
    start: ao,
    stop: function () {
      er(),
        (Ua = null),
        (Fa = {}),
        (Va = []),
        Ja && (Ja.disconnect(), (Ja = null)),
        (Ba = !1),
        Ft(),
        (function () {
          for (var t = 0, e = Pn; t < e.length; t++) {
            var n = e[t];
            n && n.disconnect();
          }
          (Pn = []),
            (Gn = {}),
            (zn = []),
            (Hn = []),
            (Fn = []),
            (Jn = 0),
            (Vn = null);
        })(),
        Ne(),
        (ba = {}),
        (wa = {}),
        (ka = []),
        Ea(),
        Ra();
    },
  });
  var io = null;
  function oo() {
    io = null;
  }
  function uo(t) {
    (io = {
      fetchStart: Math.round(t.fetchStart),
      connectStart: Math.round(t.connectStart),
      connectEnd: Math.round(t.connectEnd),
      requestStart: Math.round(t.requestStart),
      responseStart: Math.round(t.responseStart),
      responseEnd: Math.round(t.responseEnd),
      domInteractive: Math.round(t.domInteractive),
      domComplete: Math.round(t.domComplete),
      loadEventStart: Math.round(t.loadEventStart),
      loadEventEnd: Math.round(t.loadEventEnd),
      redirectCount: Math.round(t.redirectCount),
      size: t.transferSize ? t.transferSize : 0,
      type: t.type,
      protocol: t.nextHopProtocol,
      encodedSize: t.encodedBodySize ? t.encodedBodySize : 0,
      decodedSize: t.decodedBodySize ? t.decodedBodySize : 0,
    }),
      (function (t) {
        at(this, void 0, void 0, function () {
          var e, n;
          return rt(this, function (a) {
            return (
              (e = s()),
              (n = [e, t]),
              29 === t &&
                (n.push(io.fetchStart),
                n.push(io.connectStart),
                n.push(io.connectEnd),
                n.push(io.requestStart),
                n.push(io.responseStart),
                n.push(io.responseEnd),
                n.push(io.domInteractive),
                n.push(io.domComplete),
                n.push(io.loadEventStart),
                n.push(io.loadEventEnd),
                n.push(io.redirectCount),
                n.push(io.size),
                n.push(io.type),
                n.push(io.protocol),
                n.push(io.encodedSize),
                n.push(io.decodedSize),
                oo(),
                br(n)),
              [2]
            );
          });
        });
      })(29);
  }
  var co,
    so = 0,
    lo = 1 / 0,
    fo = 0,
    ho = 0,
    po = [],
    vo = new Map(),
    go = function () {
      return so || 0;
    },
    mo = function () {
      if (!po.length) return -1;
      var t = Math.min(po.length - 1, Math.floor((go() - ho) / 50));
      return po[t].latency;
    },
    yo = function () {
      (ho = go()), (po.length = 0), vo.clear();
    },
    bo = function (t) {
      if (t.interactionId && !(t.duration < 40)) {
        !(function (t) {
          "interactionCount" in performance
            ? (so = performance.interactionCount)
            : t.interactionId &&
              ((lo = Math.min(lo, t.interactionId)),
              (fo = Math.max(fo, t.interactionId)),
              (so = fo ? (fo - lo) / 7 + 1 : 0));
        })(t);
        var e = po[po.length - 1],
          n = vo.get(t.interactionId);
        if (
          n ||
          po.length < 10 ||
          t.duration > (null == e ? void 0 : e.latency)
        ) {
          if (n) t.duration > n.latency && (n.latency = t.duration);
          else {
            var a = { id: t.interactionId, latency: t.duration };
            vo.set(a.id, a), po.push(a);
          }
          po.sort(function (t, e) {
            return e.latency - t.latency;
          }),
            po.length > 10 &&
              po.splice(10).forEach(function (t) {
                return vo.delete(t.id);
              });
        }
      }
    },
    wo = [
      "navigation",
      "resource",
      "longtask",
      "first-input",
      "layout-shift",
      "largest-contentful-paint",
      "event",
    ];
  function ko() {
    try {
      co && co.disconnect(), (co = new PerformanceObserver(Pi(So)));
      for (var t = 0, e = wo; t < e.length; t++) {
        var n = e[t];
        PerformanceObserver.supportedEntryTypes.indexOf(n) >= 0 &&
          ("layout-shift" === n && H(9, 0),
          co.observe({ type: n, buffered: !0 }));
      }
    } catch (t) {
      Cr(3, 1);
    }
  }
  function So(t) {
    !(function (t) {
      for (
        var e =
            !("visibilityState" in document) ||
            "visible" === document.visibilityState,
          n = 0;
        n < t.length;
        n++
      ) {
        var a = t[n];
        switch (a.entryType) {
          case "navigation":
            uo(a);
            break;
          case "resource":
            var r = a.name;
            oi(4, Eo(r)),
              (r !== o.upload && r !== o.fallback) || W(28, a.duration);
            break;
          case "longtask":
            z(7);
            break;
          case "first-input":
            e && W(10, a.processingStart - a.startTime);
            break;
          case "event":
            e &&
              "PerformanceEventTiming" in window &&
              "interactionId" in PerformanceEventTiming.prototype &&
              (bo(a), oi(37, mo().toString()));
            break;
          case "layout-shift":
            e && !a.hadRecentInput && H(9, 1e3 * a.value);
            break;
          case "largest-contentful-paint":
            e && W(8, a.startTime);
        }
      }
    })(t.getEntries());
  }
  function Eo(t) {
    var e = document.createElement("a");
    return (e.href = t), e.host;
  }
  function Oo() {
    oo(),
      (function () {
        navigator &&
          "connection" in navigator &&
          oi(27, navigator.connection.effectiveType),
          window.PerformanceObserver && PerformanceObserver.supportedEntryTypes
            ? "complete" !== document.readyState
              ? Hi(window, "load", X.bind(this, ko, 0))
              : ko()
            : Cr(3, 0);
      })();
  }
  (ko.dn = 26), (So.dn = 27), (Oo.dn = 25);
  var To = [
    eo,
    ro,
    Rn,
    Object.freeze({
      __proto__: null,
      start: Oo,
      stop: function () {
        co && co.disconnect(), (co = null), yo(), oo();
      },
    }),
  ];
  function No(t) {
    void 0 === t && (t = null),
      (function () {
        try {
          var t =
            navigator &&
            "globalPrivacyControl" in navigator &&
            1 == navigator.globalPrivacyControl;
          return (
            !1 === Gi &&
            "undefined" != typeof Promise &&
            window.MutationObserver &&
            document.createTreeWalker &&
            "now" in Date &&
            "now" in performance &&
            "undefined" != typeof WeakMap &&
            !t
          );
        } catch (t) {
          return !1;
        }
      })() &&
        (!(function (t) {
          if (null === t || Gi) return !1;
          for (var e in t) e in o && (o[e] = t[e]);
        })(t),
        Ki(),
        bt(),
        To.forEach(function (t) {
          return Pi(t.start)();
        }),
        null === t && Co());
  }
  function Mo() {
    Qi() &&
      (To.slice()
        .reverse()
        .forEach(function (t) {
          return Pi(t.stop)();
        }),
      wt(),
      Zi(),
      void 0 !== _o &&
        (_o[Io] = function () {
          (_o[Io].q = _o[Io].q || []).push(arguments),
            "start" === arguments[0] &&
              _o[Io].q.unshift(_o[Io].q.pop()) &&
              Co();
        }));
  }
  var xo = Object.freeze({
      __proto__: null,
      consent: yi,
      event: A,
      hashText: $t,
      identify: ut,
      metadata: gi,
      pause: function () {
        Qi() &&
          (A("clarity", "pause"),
          null === he &&
            (he = new Promise(function (t) {
              pe = t;
            })));
      },
      resume: function () {
        Qi() &&
          (he && (pe(), (he = null), null === fe && me()),
          A("clarity", "resume"));
      },
      set: ot,
      signal: function (t) {
        gt = t;
      },
      start: No,
      stop: Mo,
      upgrade: et,
      version: l,
    }),
    _o = window,
    Io = "clarity";
  function Co() {
    if (void 0 !== _o) {
      if (_o[Io] && _o[Io].v)
        return console.warn("Error CL001: Multiple Clarity tags detected.");
      var t = (_o[Io] && _o[Io].q) || [];
      for (
        _o[Io] = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n];
          return xo[t].apply(xo, e);
        },
          _o[Io].v = l;
        t.length > 0;

      )
        _o[Io].apply(_o, t.shift());
    }
  }
  Co();
})();

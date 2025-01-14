/*
 Vue.js v2.6.1
 (c) 2014-2019 Evan You
 Released under the MIT License.
*/
window.Element &&
  !Element.prototype.closest &&
  (Element.prototype.closest = function (c) {
    c = (this.document || this.ownerDocument).querySelectorAll(c);
    var d = this,
      a;
    do for (a = c.length; 0 <= --a && c.item(a) !== d; );
    while (0 > a && (d = d.parentElement));
    return d;
  });
window.Element &&
  !Element.prototype.matches &&
  (Element.prototype.matches =
    Element.prototype.matchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector ||
    Element.prototype.webkitMatchesSelector ||
    function (c) {
      c = (this.document || this.ownerDocument).querySelectorAll(c);
      for (var d = c.length; 0 <= --d && c.item(d) !== this; );
      return -1 < d;
    });
Object.assign ||
  (Object.assign = function (c, d) {
    if (null === c)
      throw new TypeError("Cannot convert undefined or null to object");
    for (var a = Object(c), b = 1; b < arguments.length; b++) {
      var r = arguments[b];
      if (null !== r)
        for (var u in r)
          Object.prototype.hasOwnProperty.call(r, u) && (a[u] = r[u]);
    }
    return a;
  });
(function (c) {
  c.forEach(function (c) {
    c.hasOwnProperty("remove") ||
      Object.defineProperty(c, "remove", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: function () {
          this.parentNode.removeChild(this);
        },
      });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
(function () {
  function c(b) {
    b = b.dataset;
    var a = [],
      e = "image";
    e = e.charAt(0).toUpperCase() + e.slice(1);
    e = ["is", "hook" + e];
    for (var c in b)
      if (b.hasOwnProperty(c)) {
        var h = b[c];
        0 === c.indexOf("cmp") &&
          ((c = c.slice(3)),
          (c = c.charAt(0).toLowerCase() + c.substring(1)),
          -1 === e.indexOf(c) && (a[c] = h));
      }
    return a;
  }
  function d(a) {
    function c(a) {
      a.element.removeAttribute("data-cmp-is");
      var e = a.options;
      m._properties = {};
      for (var c in u)
        if (u.hasOwnProperty(c)) {
          var g = u[c];
          m._properties[c] =
            e && null != e[c]
              ? g && "function" === typeof g.transform
                ? g.transform(e[c])
                : e[c]
              : u[c]["default"];
        }
      a = a.element;
      m._elements = {};
      m._elements.self = a;
      a = m._elements.self.querySelectorAll("[data-cmp-hook-image]");
      for (e = 0; e < a.length; e++)
        (c = a[e]),
          (g = "image"),
          (g = g.charAt(0).toUpperCase() + g.slice(1)),
          (m._elements[c.dataset["cmpHook" + g]] = c);
      if (m._elements.noscript) {
        m._elements.container = m._elements.link
          ? m._elements.link
          : m._elements.self;
        a = m._elements.noscript.textContent.trim();
        a = a.replace(/&(amp;)*lt;/g, "\x3c");
        a = a.replace(/&(amp;)*gt;/g, "\x3e");
        a = new DOMParser().parseFromString(a, "text/html");
        e = a.querySelector(b.image);
        e.removeAttribute("src");
        m._elements.container.insertBefore(e, m._elements.noscript);
        (a = a.querySelector(b.map)) &&
          m._elements.container.insertBefore(a, m._elements.noscript);
        m._elements.noscript.parentNode.removeChild(m._elements.noscript);
        m._elements.container.matches(b.image)
          ? (m._elements.image = m._elements.container)
          : (m._elements.image = m._elements.container.querySelector(b.image));
        m._elements.map = m._elements.container.querySelector(b.map);
        m._elements.areas = m._elements.container.querySelectorAll(b.area);
        if (m._properties.lazy) {
          a = m._elements.image.getAttribute("width");
          e = m._elements.image.getAttribute("height");
          if (a && e) {
            c = r.style;
            c["padding-bottom"] = (e / a) * 100 + "%";
            for (var h in c)
              c.hasOwnProperty(h) && (m._elements.image.style[h] = c[h]);
          }
          m._elements.image.setAttribute(
            "src",
            "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          );
          m._elements.image.classList.add(r.cssClass);
          m._lazyLoaderShowing = !0;
        }
        m._elements.map && m._elements.image.addEventListener("load", d);
        window.addEventListener("scroll", m.update);
        window.addEventListener("resize", p);
        window.addEventListener("update", m.update);
        m._elements.image.addEventListener("cmp-image-redraw", m.update);
        m.update();
      }
    }
    function e() {
      var b = m._properties.widths && 0 < m._properties.widths.length;
      if (b) {
        var a = m._elements.self;
        for (var e = a.clientWidth; 0 === e && a.parentNode; )
          (a = a.parentNode), (e = a.clientWidth);
        a = e * l;
        e = m._properties.widths.length;
        for (var c = 0; c < e - 1 && m._properties.widths[c] < a; ) c++;
        a = "." + m._properties.widths[c].toString();
      } else a = "";
      a = m._properties.src.replace("{.width}", a);
      m._elements.image.getAttribute("src") !== a &&
        (m._elements.image.setAttribute("src", a),
        b || window.removeEventListener("scroll", m.update));
      m._lazyLoaderShowing && m._elements.image.addEventListener("load", h);
    }
    function h() {
      m._elements.image.classList.remove(r.cssClass);
      for (var b in r.style)
        r.style.hasOwnProperty(b) && (m._elements.image.style[b] = "");
      m._elements.image.removeEventListener("load", h);
      m._lazyLoaderShowing = !1;
    }
    function y() {
      if (m._elements.areas && 0 < m._elements.areas.length)
        for (var b = 0; b < m._elements.areas.length; b++) {
          var a = m._elements.image.width,
            e = m._elements.image.height;
          if (a && e) {
            var c = m._elements.areas[b].dataset.cmpRelcoords;
            if (c) {
              c = c.split(",");
              for (var g = Array(c.length), h = 0; h < g.length; h++)
                g[h] = 0 === h % 2 ? parseInt(c[h] * a) : parseInt(c[h] * e);
              m._elements.areas[b].coords = g;
            }
          }
        }
    }
    function p() {
      m.update();
      y();
    }
    function d() {
      y();
    }
    var m = this;
    m.update = function () {
      if (m._properties.lazy) {
        if (null === m._elements.container.offsetParent) var b = !1;
        else {
          b = window.pageYOffset;
          var a = b + document.documentElement.clientHeight,
            c = m._elements.container.getBoundingClientRect().top + b;
          b = c + m._elements.container.clientHeight >= b - 0 && c <= a + 0;
        }
        b && e();
      } else e();
    };
    a && a.element && c(a);
  }
  function a() {
    for (var a = document.querySelectorAll(b.self), g = 0; g < a.length; g++)
      new d({ element: a[g], options: c(a[g]) });
    a =
      window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver;
    g = document.querySelector("body");
    new a(function (a) {
      a.forEach(function (a) {
        a = [].slice.call(a.addedNodes);
        0 < a.length &&
          a.forEach(function (a) {
            a.querySelectorAll &&
              [].slice.call(a.querySelectorAll(b.self)).forEach(function (b) {
                new d({ element: b, options: c(b) });
              });
          });
      });
    }).observe(g, { subtree: !0, childList: !0, characterData: !0 });
  }
  var b = {
      self: '[data-cmp-is\x3d"image"]',
      image: '[data-cmp-hook-image\x3d"image"]',
      map: '[data-cmp-hook-image\x3d"map"]',
      area: '[data-cmp-hook-image\x3d"area"]',
    },
    r = {
      cssClass: "cmp-image__image--is-loading",
      style: { height: 0, "padding-bottom": "" },
    },
    u = {
      widths: {
        default: [],
        transform: function (b) {
          var a = [];
          b.split(",").forEach(function (b) {
            b = parseFloat(b);
            isNaN(b) || a.push(b);
          });
          return a;
        },
      },
      lazy: {
        default: !1,
        transform: function (b) {
          return !(null === b || "undefined" === typeof b);
        },
      },
      src: {},
    },
    l = window.devicePixelRatio || 1;
  "loading" !== document.readyState
    ? a()
    : document.addEventListener("DOMContentLoaded", a);
})();
window.Element &&
  !Element.prototype.closest &&
  (Element.prototype.closest = function (c) {
    c = (this.document || this.ownerDocument).querySelectorAll(c);
    var d = this,
      a;
    do for (a = c.length; 0 <= --a && c.item(a) !== d; );
    while (0 > a && (d = d.parentElement));
    return d;
  });
window.Element &&
  !Element.prototype.matches &&
  (Element.prototype.matches =
    Element.prototype.matchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector ||
    Element.prototype.webkitMatchesSelector ||
    function (c) {
      c = (this.document || this.ownerDocument).querySelectorAll(c);
      for (var d = c.length; 0 <= --d && c.item(d) !== this; );
      return -1 < d;
    });
Object.assign ||
  (Object.assign = function (c, d) {
    if (null === c)
      throw new TypeError("Cannot convert undefined or null to object");
    for (var a = Object(c), b = 1; b < arguments.length; b++) {
      var r = arguments[b];
      if (null !== r)
        for (var u in r)
          Object.prototype.hasOwnProperty.call(r, u) && (a[u] = r[u]);
    }
    return a;
  });
(function (c) {
  c.forEach(function (c) {
    c.hasOwnProperty("remove") ||
      Object.defineProperty(c, "remove", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: function () {
          this.parentNode.removeChild(this);
        },
      });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
(function () {
  function c(b) {
    b = b.dataset;
    var a = [],
      e = "image";
    e = e.charAt(0).toUpperCase() + e.slice(1);
    e = ["is", "hook" + e];
    for (var c in b)
      if (b.hasOwnProperty(c)) {
        var h = b[c];
        0 === c.indexOf("cmp") &&
          ((c = c.slice(3)),
          (c = c.charAt(0).toLowerCase() + c.substring(1)),
          -1 === e.indexOf(c) && (a[c] = h));
      }
    return a;
  }
  function d(a) {
    function c(a) {
      a.element.removeAttribute("data-cmp-is");
      var e = a.options;
      m._properties = {};
      for (var c in u)
        if (u.hasOwnProperty(c)) {
          var g = u[c];
          m._properties[c] =
            e && null != e[c]
              ? g && "function" === typeof g.transform
                ? g.transform(e[c])
                : e[c]
              : u[c]["default"];
        }
      a = a.element;
      m._elements = {};
      m._elements.self = a;
      a = m._elements.self.querySelectorAll("[data-cmp-hook-image]");
      for (e = 0; e < a.length; e++)
        (c = a[e]),
          (g = "image"),
          (g = g.charAt(0).toUpperCase() + g.slice(1)),
          (m._elements[c.dataset["cmpHook" + g]] = c);
      if (m._elements.noscript) {
        m._elements.container = m._elements.link
          ? m._elements.link
          : m._elements.self;
        a = m._elements.noscript.textContent.trim();
        a = a.replace(/&(amp;)*lt;/g, "\x3c");
        a = a.replace(/&(amp;)*gt;/g, "\x3e");
        a = new DOMParser().parseFromString(a, "text/html");
        e = a.querySelector(b.image);
        e.removeAttribute("src");
        m._elements.container.insertBefore(e, m._elements.noscript);
        (a = a.querySelector(b.map)) &&
          m._elements.container.insertBefore(a, m._elements.noscript);
        m._elements.noscript.parentNode.removeChild(m._elements.noscript);
        m._elements.container.matches(b.image)
          ? (m._elements.image = m._elements.container)
          : (m._elements.image = m._elements.container.querySelector(b.image));
        m._elements.map = m._elements.container.querySelector(b.map);
        m._elements.areas = m._elements.container.querySelectorAll(b.area);
        if (m._properties.lazy) {
          a = m._elements.image.getAttribute("width");
          e = m._elements.image.getAttribute("height");
          if (a && e) {
            c = r.style;
            c["padding-bottom"] = (e / a) * 100 + "%";
            for (var h in c)
              c.hasOwnProperty(h) && (m._elements.image.style[h] = c[h]);
          }
          m._elements.image.setAttribute(
            "src",
            "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          );
          m._elements.image.classList.add(r.cssClass);
          m._lazyLoaderShowing = !0;
        }
        m._elements.map && m._elements.image.addEventListener("load", d);
        window.addEventListener("scroll", m.update);
        window.addEventListener("resize", p);
        window.addEventListener("update", m.update);
        m._elements.image.addEventListener("cmp-image-redraw", m.update);
        m.update();
      }
    }
    function e() {
      var b = m._properties.widths && 0 < m._properties.widths.length;
      if (b) {
        var a = m._elements.self;
        for (var e = a.clientWidth; 0 === e && a.parentNode; )
          (a = a.parentNode), (e = a.clientWidth);
        a = e * l;
        e = m._properties.widths.length;
        for (var c = 0; c < e - 1 && m._properties.widths[c] < a; ) c++;
        a = "." + m._properties.widths[c].toString();
      } else a = "";
      a = m._properties.src.replace("{.width}", a);
      m._elements.image.getAttribute("src") !== a &&
        (m._elements.image.setAttribute("src", a),
        b || window.removeEventListener("scroll", m.update));
      m._lazyLoaderShowing && m._elements.image.addEventListener("load", h);
    }
    function h() {
      m._elements.image.classList.remove(r.cssClass);
      for (var b in r.style)
        r.style.hasOwnProperty(b) && (m._elements.image.style[b] = "");
      m._elements.image.removeEventListener("load", h);
      m._lazyLoaderShowing = !1;
    }
    function y() {
      if (m._elements.areas && 0 < m._elements.areas.length)
        for (var b = 0; b < m._elements.areas.length; b++) {
          var a = m._elements.image.width,
            e = m._elements.image.height;
          if (a && e) {
            var c = m._elements.areas[b].dataset.cmpRelcoords;
            if (c) {
              c = c.split(",");
              for (var g = Array(c.length), h = 0; h < g.length; h++)
                g[h] = 0 === h % 2 ? parseInt(c[h] * a) : parseInt(c[h] * e);
              m._elements.areas[b].coords = g;
            }
          }
        }
    }
    function p() {
      m.update();
      y();
    }
    function d() {
      y();
    }
    var m = this;
    m.update = function () {
      if (m._properties.lazy) {
        if (null === m._elements.container.offsetParent) var b = !1;
        else {
          b = window.pageYOffset;
          var a = b + document.documentElement.clientHeight,
            c = m._elements.container.getBoundingClientRect().top + b;
          b = c + m._elements.container.clientHeight >= b - 0 && c <= a + 0;
        }
        b && e();
      } else e();
    };
    a && a.element && c(a);
  }
  function a() {
    for (var a = document.querySelectorAll(b.self), g = 0; g < a.length; g++)
      new d({ element: a[g], options: c(a[g]) });
    a =
      window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver;
    g = document.querySelector("body");
    new a(function (a) {
      a.forEach(function (a) {
        a = [].slice.call(a.addedNodes);
        0 < a.length &&
          a.forEach(function (a) {
            a.querySelectorAll &&
              [].slice.call(a.querySelectorAll(b.self)).forEach(function (b) {
                new d({ element: b, options: c(b) });
              });
          });
      });
    }).observe(g, { subtree: !0, childList: !0, characterData: !0 });
  }
  var b = {
      self: '[data-cmp-is\x3d"image"]',
      image: '[data-cmp-hook-image\x3d"image"]',
      map: '[data-cmp-hook-image\x3d"map"]',
      area: '[data-cmp-hook-image\x3d"area"]',
    },
    r = {
      cssClass: "cmp-image__image--is-loading",
      style: { height: 0, "padding-bottom": "" },
    },
    u = {
      widths: {
        default: [],
        transform: function (b) {
          var a = [];
          b.split(",").forEach(function (b) {
            b = parseFloat(b);
            isNaN(b) || a.push(b);
          });
          return a;
        },
      },
      lazy: {
        default: !1,
        transform: function (b) {
          return !(null === b || "undefined" === typeof b);
        },
      },
      src: {},
    },
    l = window.devicePixelRatio || 1;
  "loading" !== document.readyState
    ? a()
    : document.addEventListener("DOMContentLoaded", a);
})();
(function () {
  function c(b) {
    b = b.dataset;
    var a = [],
      c = "formText";
    c = c.charAt(0).toUpperCase() + c.slice(1);
    c = ["is", "hook" + c];
    for (var g in b)
      if (b.hasOwnProperty(g)) {
        var e = b[g];
        0 === g.indexOf("cmp") &&
          ((g = g.slice(3)),
          (g = g.charAt(0).toLowerCase() + g.substring(1)),
          -1 === c.indexOf(g) && (a[g] = e));
      }
    return a;
  }
  function d(b) {
    b.element && b.element.removeAttribute("data-cmp-is");
    this._cacheElements(b.element);
    this._setupProperties(b.options);
    this._elements.input.addEventListener(
      "invalid",
      this._onInvalid.bind(this)
    );
    this._elements.input.addEventListener("input", this._onInput.bind(this));
  }
  function a() {
    for (var a = document.querySelectorAll(b.self), l = 0; l < a.length; l++)
      new d({ element: a[l], options: c(a[l]) });
    a =
      window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver;
    l = document.querySelector("body");
    new a(function (a) {
      a.forEach(function (a) {
        a = [].slice.call(a.addedNodes);
        0 < a.length &&
          a.forEach(function (a) {
            a.querySelectorAll &&
              [].slice.call(a.querySelectorAll(b.self)).forEach(function (b) {
                new d({ element: b, options: c(b) });
              });
          });
      });
    }).observe(l, { subtree: !0, childList: !0, characterData: !0 });
  }
  var b = { self: '[data-cmp-is\x3d"formText"]' },
    r = { constraintMessage: {}, requiredMessage: {} };
  d.prototype._onInvalid = function (b) {
    b.target.setCustomValidity("");
    b.target.validity.typeMismatch
      ? this._properties.constraintMessage &&
        b.target.setCustomValidity(this._properties.constraintMessage)
      : b.target.validity.valueMissing &&
        this._properties.requiredMessage &&
        b.target.setCustomValidity(this._properties.requiredMessage);
  };
  d.prototype._onInput = function (b) {
    b.target.setCustomValidity("");
  };
  d.prototype._cacheElements = function (b) {
    this._elements = {};
    this._elements.self = b;
    b = this._elements.self.querySelectorAll("[data-cmp-hook-form-text]");
    for (var a = 0; a < b.length; a++) {
      var c = b[a],
        g = "formText";
      g = g.charAt(0).toUpperCase() + g.slice(1);
      this._elements[c.dataset["cmpHook" + g]] = c;
    }
  };
  d.prototype._setupProperties = function (b) {
    this._properties = {};
    for (var a in r)
      if (r.hasOwnProperty(a)) {
        var c = r[a];
        this._properties[a] =
          b && null != b[a]
            ? c && "function" === typeof c.transform
              ? c.transform(b[a])
              : b[a]
            : r[a]["default"];
      }
  };
  "loading" !== document.readyState
    ? a()
    : document.addEventListener("DOMContentLoaded", a);
})();
!(function (c) {
  function d(b) {
    for (
      var e, g, h = b[0], y = b[1], d = b[2], x = 0, r = [];
      x < h.length;
      x++
    )
      (g = h[x]),
        Object.prototype.hasOwnProperty.call(u, g) && u[g] && r.push(u[g][0]),
        (u[g] = 0);
    for (e in y) Object.prototype.hasOwnProperty.call(y, e) && (c[e] = y[e]);
    for (n && n(b); r.length; ) r.shift()();
    return l.push.apply(l, d || []), a();
  }
  function a() {
    for (var a, e = 0; e < l.length; e++) {
      for (var c = l[e], g = !0, h = 1; h < c.length; h++)
        0 !== u[c[h]] && (g = !1);
      g && (l.splice(e--, 1), (a = b((b.s = c[0]))));
    }
    return a;
  }
  function b(a) {
    if (r[a]) return r[a].exports;
    var e = (r[a] = { i: a, l: !1, exports: {} });
    return c[a].call(e.exports, e, e.exports, b), (e.l = !0), e.exports;
  }
  var r = {},
    u = { design: 0 },
    l = [];
  b.m = c;
  b.c = r;
  b.d = function (a, e, c) {
    b.o(a, e) || Object.defineProperty(a, e, { enumerable: !0, get: c });
  };
  b.r = function (b) {
    "undefined" != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(b, Symbol.toStringTag, { value: "Module" });
    Object.defineProperty(b, "__esModule", { value: !0 });
  };
  b.t = function (a, e) {
    if (
      (1 & e && (a = b(a)), 8 & e) ||
      (4 & e && "object" == typeof a && a && a.__esModule)
    )
      return a;
    var c = Object.create(null);
    if (
      (b.r(c),
      Object.defineProperty(c, "default", { enumerable: !0, value: a }),
      2 & e && "string" != typeof a)
    )
      for (var g in a)
        b.d(
          c,
          g,
          function (b) {
            return a[b];
          }.bind(null, g)
        );
    return c;
  };
  b.n = function (a) {
    var e =
      a && a.__esModule
        ? function () {
            return a.default;
          }
        : function () {
            return a;
          };
    return b.d(e, "a", e), e;
  };
  b.o = function (b, a) {
    return Object.prototype.hasOwnProperty.call(b, a);
  };
  b.p = "";
  var h = (window.webpackOpsite = window.webpackOpsite || []),
    g = h.push.bind(h);
  h.push = d;
  h = h.slice();
  for (var e = 0; e < h.length; e++) d(h[e]);
  var n = g;
  l.push([400, "vendor"]);
  a();
})({
  128: function (c, d, a) {
    c = a(1);
    c = a.n(c);
    d = a(2);
    a = a.n(d);
    c = new c.a({
      id: "icon-arrow-right",
      use: "icon-arrow-right-usage",
      viewBox: "0 0 16 16",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 16 16" id\x3d"icon-arrow-right"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M10.4 8.329l-4.2 4.404-.689-.724L9.334 8 5.51 3.99l.69-.723 4.2 4.404a.475.475 0 010 .658z" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
  },
  135: function (c, d, a) {
    (function (b) {
      function c() {
        b("html").removeClass(function (b, a) {
          return (a.match(/(^|\s)view-\S+/g) || []).join(" ");
        });
        1440 <= (l = window.innerWidth)
          ? b("html").addClass("view-pc")
          : 1440 > l && 1024 < l
          ? b("html").addClass("view-landscape")
          : 1024 >= l && 650 < l
          ? b("html").addClass("view-portrait")
          : h() && b("html").addClass("view-mobile");
      }
      a.d(d, "a", function () {
        return h;
      });
      a(48);
      a(7);
      a(57);
      var u = a(0),
        l = window.innerWidth,
        h = function () {
          return 650 >= l;
        };
      c();
      window.addEventListener(
        "resize",
        u.a.throttle(function () {
          c();
        }, 10)
      );
    }).call(this, a(3));
  },
  136: function (c, d, a) {
    d.a = [
      { key: "Global", value: "EN", regionNum: "+1" },
      {
        key: "Central America \x26 Caribbean",
        value: "Latin",
        regionNum: "+1",
      },
      { key: "Kazakhstan", value: "KZ", regionNum: "+7" },
      { key: "Russia", value: "RU", regionNum: "+7" },
      { key: "Sri Lanka", value: "IK", regionNum: "+7" },
      { key: "Egypt", value: "EG", regionNum: "+20" },
      { key: "Egypt-English", value: "EG-EN", regionNum: "+20" },
      { key: "Greece", value: "GR", regionNum: "+30" },
      { key: "Netherlands", value: "NL", regionNum: "+31" },
      { key: "Belgium-Nederlands", value: "BENL", regionNum: "+32" },
      { key: "Belgium-French", value: "BEFR", regionNum: "+32" },
      { key: "France", value: "FR", regionNum: "+33" },
      { key: "Spain", value: "ES", regionNum: "+34" },
      { key: "Hungary", value: "HU", regionNum: "+36" },
      { key: "Italy", value: "IT", regionNum: "+39" },
      { key: "Romania", value: "RO", regionNum: "+40" },
      { key: "Switzerland-Deutsch", value: "CHDE", regionNum: "+41" },
      { key: "Switzerland-French", value: "CHFR", regionNum: "+41" },
      { key: "Austria", value: "AT", regionNum: "+43" },
      { key: "United Kingdom", value: "UK", regionNum: "+44" },
      { key: "Poland", value: "PL", regionNum: "+48" },
      { key: "Germany", value: "DE", regionNum: "+49" },
      { key: "Brasil", value: "BR", regionNum: "+55" },
      { key: "Chile", value: "CL", regionNum: "+56" },
      { key: "Colombia", value: "CO", regionNum: "+57" },
      { key: "Peru", value: "PE", regionNum: "+51" },
      { key: "Mexico", value: "MX", regionNum: "+52" },
      { key: "Malaysia", value: "MY", regionNum: "+60" },
      { key: "Australia", value: "AU", regionNum: "+61" },
      { key: "Indonesia", value: "ID", regionNum: "+62" },
      { key: "Philippines", value: "PH", regionNum: "+63" },
      { key: "New Zealand", value: "NZ", regionNum: "+64" },
      { key: "Singapore", value: "SG", regionNum: "+65" },
      { key: "Thailand", value: "TH", regionNum: "+66" },
      { key: "Japan", value: "JP", regionNum: "+81" },
      { key: "Vietnam", value: "VN", regionNum: "+84" },
      { key: "China", value: "CN", regionNum: "+86" },
      { key: "Turkey", value: "TR", regionNum: "+90" },
      { key: "India", value: "IN", regionNum: "+91" },
      { key: "Pakistan", value: "PK", regionNum: "+92" },
      { key: "Myanmar", value: "MM", regionNum: "+95" },
      { key: "Morocco", value: "MA", regionNum: "+212" },
      { key: "Algeria", value: "DZ", regionNum: "+213" },
      { key: "Tunisia", value: "TN", regionNum: "+216" },
      { key: "Nigeria", value: "NG", regionNum: "+234" },
      { key: "Kenya", value: "KE", regionNum: "+254" },
      { key: "Tanzania", value: "TZ", regionNum: "+255" },
      { key: "Portugal", value: "PT", regionNum: "+351" },
      { key: "Luxembourg-Deutsch", value: "LUDE", regionNum: "+352" },
      { key: "Luxembourg-French", value: "LUFR", regionNum: "+352" },
      { key: "Ireland", value: "IE", regionNum: "+353" },
      { key: "Moldova", value: "MD", regionNum: "+373" },
      { key: "Ukraine", value: "UA", regionNum: "+380" },
      { key: "Croatia", value: "HR", regionNum: "+385" },
      { key: "Czech Republic", value: "CZ", regionNum: "+420" },
      { key: "Slovakia", value: "SK", regionNum: "+421" },
      { key: "Ecuador", value: "EC", regionNum: "+593" },
      { key: "Hong Kong", value: "HK", regionNum: "+852" },
      { key: "Cambodia", value: "KH", regionNum: "+855" },
      { key: "Bangladesh", value: "BD", regionNum: "+880" },
      { key: "Lebanon", value: "LB", regionNum: "+961" },
      { key: "Lebanon-English", value: "LB-EN", regionNum: "+961" },
      { key: "Jordan", value: "JO", regionNum: "+962" },
      { key: "Jordan-English", value: "JO-EN", regionNum: "+962" },
      { key: "Iraq", value: "IQ", regionNum: "+964" },
      { key: "Saudi Arabia", value: "SA", regionNum: "+966" },
      { key: "Saudi Arabia-English", value: "SA-EN", regionNum: "+966" },
      { key: "Palestine", value: "PS", regionNum: "+970" },
      { key: "United Arab Emirates", value: "AE", regionNum: "+971" },
      { key: "Israel", value: "IL", regionNum: "+972" },
      { key: "Nepal", value: "NP", regionNum: "+977" },
      { key: "Uzbekistan", value: "UZ", regionNum: "+998" },
      { key: "Uzbekistan-Russian", value: "UZRU", regionNum: "+998" },
    ];
  },
  17: function (c, d, a) {
    function b(b, a) {
      var e = Object.keys(b);
      if (Object.getOwnPropertySymbols) {
        var c = Object.getOwnPropertySymbols(b);
        a &&
          (c = c.filter(function (a) {
            return Object.getOwnPropertyDescriptor(b, a).enumerable;
          }));
        e.push.apply(e, c);
      }
      return e;
    }
    function r(b, a) {
      return new Promise(function (e, c) {
        l.get(b, { params: a })
          .then(function (b) {
            e(b.data);
          })
          .catch(function (b) {
            c(b.data);
          });
      });
    }
    function u(b, a, e) {
      return new Promise(function (c, g) {
        l.post(b, a, e)
          .then(function (b) {
            c(b.data);
          })
          .catch(function (b) {
            g(b.data);
          })
          .finally(function () {});
      });
    }
    a.d(d, "a", function () {
      return r;
    });
    a.d(d, "b", function () {
      return u;
    });
    a(13);
    a(9);
    a(40);
    a(75);
    c = a(44);
    a = a.n(c);
    c =
      (document.getElementById("sow_domain_host") &&
        document.getElementById("sow_domain_host").value) ||
      "https://sgp-sow-cms.oppo.com";
    var l = a.a.create({
      baseURL: c,
      timeout: (window.AJAX_OPTIONS && window.AJAX_OPTIONS.timeout) || 3e4,
      withCredentials: !0,
      headers: { "Content-Type": "application/json" },
    });
    l.interceptors.request.use(
      function (a) {
        return (
          "post" === a.method
            ? JSON.stringify(a.data)
            : (a.params = (function (a) {
                for (var e = 1; e < arguments.length; e++) {
                  var c = null != arguments[e] ? arguments[e] : {};
                  e % 2
                    ? b(Object(c), !0).forEach(function (b) {
                        var e = c[b];
                        b in a
                          ? Object.defineProperty(a, b, {
                              value: e,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (a[b] = e);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        a,
                        Object.getOwnPropertyDescriptors(c)
                      )
                    : b(Object(c)).forEach(function (b) {
                        Object.defineProperty(
                          a,
                          b,
                          Object.getOwnPropertyDescriptor(c, b)
                        );
                      });
                }
                return a;
              })({}, a.params)),
          a
        );
      },
      function (b) {
        Promise.reject(b);
      }
    );
    l.interceptors.response.use(
      function (b) {
        return 200 === b.status ? Promise.resolve(b) : Promise.reject(b);
      },
      function (b) {
        return Promise.reject(b);
      }
    );
  },
  190: function (c, d, a) {
    function b(b) {
      window.CMYSurvey
        ? b()
        : (function (b, a, e) {
            if (!document.getElementById(b)) {
              var c = document.createElement("script"),
                g = e || function () {};
              c.type = "text/javascript";
              c.id = b;
              c.src = a;
              c.onload = function () {
                g();
              };
              document.getElementsByTagName("body")[0].appendChild(c);
            }
          })("oppoWebSurveySrc", h.src, function () {
            b();
          });
    }
    function r(a) {
      a = l(g, a);
      b(function () {
        window.CMYSurvey.quickSurvey(
          ""
            .concat(a.surveyUrl, "?usr_source\x3d")
            .concat(
              window.location.origin + window.location.pathname,
              "\x26usr_medium\x3d"
            )
            .concat(window.innerWidth, "*")
            .concat(window.innerHeight),
          a.elementId,
          a.surveyConfig
        );
      });
    }
    function u() {
      var b;
      null === (b = window.CMYSurvey) || void 0 === b || b.closeModal();
    }
    function l(b, a) {
      for (var e in a)
        b[e] =
          b[e] &&
          "[object Object]" === b[e].toString() &&
          a[e] &&
          "[object Object]" === a[e].toString()
            ? l(b[e], a[e])
            : (b[e] = a[e]);
      return b;
    }
    a.d(d, "b", function () {
      return h;
    });
    a.d(d, "c", function () {
      return r;
    });
    a.d(d, "a", function () {
      return u;
    });
    a(8);
    a(12);
    a(9);
    a(23);
    var h = {
        src:
          "www.oppo.com" === window.location.host
            ? "https://cem-in.oppoit.com/v2/front/sdk/webSurvey.js"
            : "https://cem-survey-test.wanyol.com/v2/front/sdk/webSurvey.js",
      },
      g = {
        surveyUrl: "",
        elementId: "",
        surveyConfig: {
          cookieName: "",
          hideElement: !0,
          alignType: "vertical",
          padding: 8,
          windowBorderRight: 64,
          windowBorderBottom: 20,
          cookieExpireSeconds: 2160,
          closeCem: function () {},
          finishCem: function () {},
        },
      };
  },
  208: function (c, d, a) {
    (function (b) {
      function c(b) {
        return (
          (c =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (b) {
                  return typeof b;
                }
              : function (b) {
                  return b &&
                    "function" == typeof Symbol &&
                    b.constructor === Symbol &&
                    b !== Symbol.prototype
                    ? "symbol"
                    : typeof b;
                }),
          c(b)
        );
      }
      function d(b, a) {
        for (var e = 0; e < a.length; e++) {
          var c = a[e];
          c.enumerable = c.enumerable || !1;
          c.configurable = !0;
          "value" in c && (c.writable = !0);
          Object.defineProperty(b, c.key, c);
        }
      }
      function l(b, a, e) {
        return (
          (l =
            "undefined" != typeof Reflect && Reflect.get
              ? Reflect.get
              : function (b, a, e) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(b, a) &&
                    null !== (b = p(b));

                  );
                  if (b)
                    return (
                      (a = Object.getOwnPropertyDescriptor(b, a)),
                      a.get ? a.get.call(e) : a.value
                    );
                }),
          l(b, a, e || b)
        );
      }
      function h(b) {
        var a = n();
        return function () {
          var e = p(b);
          if (a) {
            var g = p(this).constructor;
            e = Reflect.construct(e, arguments, g);
          } else e = e.apply(this, arguments);
          if (!e || ("object" !== c(e) && "function" != typeof e)) {
            if (void 0 === this)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            e = this;
          }
          return e;
        };
      }
      function g(b) {
        var a = "function" == typeof Map ? new Map() : void 0;
        return (
          (g = function (b) {
            function c() {
              return e(b, arguments, p(this).constructor);
            }
            if (
              null === b ||
              ((g = b),
              -1 === Function.toString.call(g).indexOf("[native code]"))
            )
              return b;
            var g;
            if ("function" != typeof b)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if (void 0 !== a) {
              if (a.has(b)) return a.get(b);
              a.set(b, c);
            }
            return (
              (c.prototype = Object.create(b.prototype, {
                constructor: {
                  value: c,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              y(c, b)
            );
          }),
          g(b)
        );
      }
      function e(b, a, c) {
        return (
          (e = n()
            ? Reflect.construct
            : function (b, a, e) {
                var c = [null];
                c.push.apply(c, a);
                b = new (Function.bind.apply(b, c))();
                return e && y(b, e.prototype), b;
              }),
          e.apply(null, arguments)
        );
      }
      function n() {
        if (
          "undefined" == typeof Reflect ||
          !Reflect.construct ||
          Reflect.construct.sham
        )
          return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      }
      function y(b, a) {
        return (
          (y =
            Object.setPrototypeOf ||
            function (b, a) {
              return (b.__proto__ = a), b;
            }),
          y(b, a)
        );
      }
      function p(b) {
        return (
          (p = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (b) {
                return b.__proto__ || Object.getPrototypeOf(b);
              }),
          p(b)
        );
      }
      a(8);
      a(42);
      a(209);
      a(78);
      a(88);
      a(9);
      a(37);
      a(215);
      a(216);
      a(217);
      a(218);
      a(219);
      a(220);
      a(221);
      a(222);
      a(223);
      a(224);
      a(225);
      a(226);
      a(227);
      a(47);
      var v = a(65),
        m = (function (b) {
          function a() {
            if (!(this instanceof a))
              throw new TypeError("Cannot call a class as a function");
            return c.apply(this, arguments);
          }
          !(function (b, a) {
            if ("function" != typeof a && null !== a)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            b.prototype = Object.create(a && a.prototype, {
              constructor: { value: b, writable: !0, configurable: !0 },
            });
            a && y(b, a);
          })(a, b);
          var e,
            c = h(a);
          return (
            (e = [
              {
                key: "set",
                value: function () {
                  for (
                    var b = arguments.length, e = Array(b), c = 0;
                    c < b;
                    c++
                  )
                    e[c] = arguments[c];
                  if (this.has(e[0]))
                    throw Error("component ".concat(e[0], " has registed!"));
                  var g;
                  return (g = l(p(a.prototype), "set", this)).call.apply(
                    g,
                    [this].concat(e)
                  );
                },
              },
            ]),
            e && d(a.prototype, e),
            a
          );
        })(g(Map));
      b.OP_VUE_REGISTRY = b.OP_VUE_REGISTRY || new m();
      b.OP_vue = b.OP_vue || v.a;
      window.OP_bus = new b.OP_vue();
    }).call(this, a(34));
  },
  294: function (c, d, a) {
    d.a = {
      "/dz/": { name: "Algeria", lang: "Fran\u00e7ais", type: "Africa" },
      "/eg-en/": { name: "Egypt", lang: "English", type: "Africa" },
      "/eg/": {
        name: "Egypt",
        lang: "\u0627\u0644\u0644\u063a\u0629",
        type: "Africa",
      },
      "/iq/": {
        name: "Iraq",
        lang: "\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629",
        type: "Africa",
      },
      "/jo-en/": { name: "Jordan", lang: "English", type: "Africa" },
      "/jo-ar/": {
        name: "Jordan",
        lang: "\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629",
        type: "Africa",
      },
      "/ke/": { name: "Kenya", lang: "English", type: "Africa" },
      "/lb-ar/": {
        name: "Lebanon",
        lang: "\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629",
        type: "Africa",
      },
      "/ma/": { name: "Morocco", lang: "Fran\u00e7ais", type: "Africa" },
      "/ng/": { name: "Nigeria", lang: "English", type: "Africa" },
      "/ps/": {
        name: "Palestine",
        lang: "\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629",
        type: "Africa",
      },
      "/sa-en/": { name: "Saudi Arabia", lang: "English", type: "Africa" },
      "/sa/": {
        name: "Saudi Arabia",
        lang: "\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629",
        type: "Africa",
      },
      "/za/": { name: "South Africa", lang: "English", type: "Africa" },
      "/tz/": { name: "Tanzania", lang: "English", type: "Africa" },
      "/tn/": { name: "Tunisia", lang: "Fran\u00e7ais", type: "Africa" },
      "/ae/": { name: "UAE", lang: "English", type: "Africa" },
      "/au/": { name: "Australia", lang: "English", type: "Asia" },
      "/bd/": { name: "Bangladesh", lang: "English", type: "Asia" },
      "/kh/": {
        name: "Cambodia",
        lang: "\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a",
        type: "Asia",
      },
      "/cn/": { name: "China", lang: "\u7b80\u4f53\u4e2d\u6587", type: "Asia" },
      "/hk/": {
        name: "Hong Kong",
        lang: "\u7e41\u9ad4\u4e2d\u6587",
        type: "Asia",
      },
      "/in/": { name: "India", lang: "English", type: "Asia" },
      "/id/": { name: "Indonesia", lang: "Indonesian", type: "Asia" },
      "/jp/": { name: "Japan", lang: "\u65e5\u672c\u8a9e", type: "Asia" },
      "/kz/": {
        name: "Kazakhstan",
        lang: "P\u0443\u0441\u0441\u043a\u0438\u0439",
        type: "Asia",
      },
      "/kzkk/": {
        name: "Kazakhstan",
        lang: "\u049b\u0430\u0437\u0430\u049b",
        type: "Asia",
      },
      "/my/": { name: "Malaysia", lang: "English", type: "Asia" },
      "/mm/": {
        name: "Myanmar",
        lang: "\u1019\u103c\u1014\u103a\u1019\u102c",
        type: "Asia",
      },
      "/np/": { name: "Nepal", lang: "English", type: "Asia" },
      "/nz/": { name: "New Zealand", lang: "English", type: "Asia" },
      "/pk/": { name: "Pakistan", lang: "English", type: "Asia" },
      "/ph/": { name: "Philippines", lang: "English", type: "Asia" },
      "/sg/": { name: "Singapore", lang: "English", type: "Asia" },
      "/lk/": { name: "Sri Lanka", lang: "English", type: "Asia" },
      "/th/": { name: "Thailand", lang: "\u0e44\u0e17\u0e22", type: "Asia" },
      "/uz/": { name: "Uzbekistan", lang: "O\u2019zbe", type: "Asia" },
      "/uzru/": {
        name: "Uzbekistan",
        lang: "P\u0443\u0441\u0441\u043a\u0438\u0439",
        type: "Asia",
      },
      "/vn/": {
        name: "Vietnam",
        lang: "Ti\u00ea\u0301ng Vi\u00ea\u0323t",
        type: "Asia",
      },
      "/at/": { name: "Austria", lang: "Deutsch", type: "Europe" },
      "/benl/": { name: "Belgium", lang: "Nederlands", type: "Europe" },
      "/befr/": { name: "Belgium", lang: "Fran\u00e7ais", type: "Europe" },
      "/hr/": { name: "Croatia", lang: "Hrvatski", type: "Europe" },
      "/cz/": {
        name: "Czech Republic",
        lang: "\u010ce\u0161tina",
        type: "Europe",
      },
      "/fr/": { name: "France", lang: "Fran\u00e7ais", type: "Europe" },
      "/de/": { name: "Germany", lang: "Deutsch", type: "Europe" },
      "/gr/": {
        name: "Greece",
        lang: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
        type: "Europe",
      },
      "/hu/": { name: "Hungary", lang: "Magyar", type: "Europe" },
      "/ie/": { name: "Ireland", lang: "English", type: "Europe" },
      "/il/": {
        name: "Israel",
        lang: "\u05e2\u05d1\u05e8\u05d9\u05ea",
        type: "Europe",
      },
      "/it/": { name: "Italy", lang: "Italiano", type: "Europe" },
      "/lufr/": { name: "Luxembourg", lang: "Fran\u00e7ais", type: "Europe" },
      "/lude/": { name: "Luxembourg", lang: "Deutsch", type: "Europe" },
      "/md/": { name: "Moldova", lang: "Rom\u00e2n\u0103", type: "Europe" },
      "/nl/": { name: "Netherlands", lang: "Nederlands", type: "Europe" },
      "/pl/": { name: "Poland", lang: "Polski", type: "Europe" },
      "/pt/": { name: "Portugal", lang: "Portugu\u00eas", type: "Europe" },
      "/ro/": { name: "Romania", lang: "Rom\u00e2n\u0103", type: "Europe" },
      "/ru/": {
        name: "Russia",
        lang: "P\u0443\u0441\u0441\u043a\u0438\u0439",
        type: "Europe",
      },
      "/sk/": { name: "Slovakia", lang: "Sloven\u010dina", type: "Europe" },
      "/es/": { name: "Spain", lang: "Espa\u00f1ol", type: "Europe" },
      "/chde/": { name: "Switzerland", lang: "Deutsch", type: "Europe" },
      "/chfr/": { name: "Switzerland", lang: "Fran\u00e7ais", type: "Europe" },
      "/tr/": { name: "Turkey", lang: "T\u00fcrk\u00e7e", type: "Europe" },
      "/ua/": {
        name: "Ukraine",
        lang: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
        type: "Europe",
      },
      "/uk/": { name: "United Kingdom", lang: "English", type: "Europe" },
      "/br/": { name: "Brazil", lang: "Portugu\u00eas", type: "Latin" },
      "/cl/": { name: "Chile", lang: "Espa\u00f1ol", type: "Latin" },
      "/co/": { name: "Colombia", lang: "Espa\u00f1ol", type: "Latin" },
      "/latin/": {
        name: "Central America \x26amp; Caribbean",
        lang: "Espa\u00f1ol",
        type: "Latin",
      },
      "/ec/": { name: "Ecuador", lang: "Espa\u00f1ol", type: "Latin" },
      "/mx/": { name: "Mexico", lang: "Espa\u00f1ol", type: "Latin" },
      "/pe/": { name: "Peru", lang: "Espa\u00f1ol", type: "Latin" },
    };
  },
  3: function (c, d) {
    c.exports = jQuery;
  },
  338: function (c, d, a) {
    c = a(1);
    c = a.n(c);
    d = a(2);
    a = a.n(d);
    c = new c.a({
      id: "icon-subscribe-submit",
      use: "icon-subscribe-submit-usage",
      viewBox: "0 0 39 38",
      content:
        '\x3csymbol fill\x3d"none" xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 39 38" id\x3d"icon-subscribe-submit"\x3e\x3ccircle cx\x3d"19.5" cy\x3d"19" r\x3d"19" fill\x3d"#EBEBEB" /\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M27.784 18.524l-11.508-5.832a1.143 1.143 0 00-1.627 1.358l1.706 4.894a.16.16 0 010 .106l-.001.003-1.706 4.896a1.142 1.142 0 001.627 1.358l11.51-5.832a.533.533 0 000-.951zM15.73 13.623a.076.076 0 01.044.009l.014.008 9.523 4.826h-7.992l-1.656-4.752a.076.076 0 01.067-.091zm1.587 5.91l-1.656 4.752a.075.075 0 00.067.091.076.076 0 00.043-.009l.016-.008 9.526-4.827h-7.996z" fill\x3d"#000" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
  },
  390: function (c, d) {
    c.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAedSURBVHgB7Z1pbhNJFMdfTNg3D4hFSCg9J5hYJJH4hDnBMCeYzAlmcgLICSAnwJxgwgnGfEJiUXyDaYSQQCiRkyhR9sz791SZTsfutbrq2e6f1LjtODZ5/6r3Xu0TJJSVlZX6wcHBNN9O12q1qePjY4/vcdVDV5iuunw8TkxM+EdHR5/4vjM5OdlpNBpdEsgECQEGZ4M94dtHbOwm/W9sk3RYlM7h4eEbvtoPHz70SQBOBVClfJ4N8ys/bZJd2iz4K9diOBHg/fv3TTb6U7Jv9EEs8/VqZmZmmSxjTYBQaf+TzLsXUyBuLM7NzbXIElYE+PDhA4z+jE4HTqlYE6JUAZSreUlyS3wSpQtRigBv3771zp49+5xvn9AIwIWotbe3t1hGsDYuALub3/nhBQ2Pu0lLKbXBmAAqj3/KOfxfNMJwbXjBDcNFUw07IwIol/MPDa+vz4q/v7//2IRLKizAu3fv0FUA44+ay0kCLuk3dkkdKkCNCgB/z8ZfofEzPvDwt6uYl5vcAqjcvkUVLU63c8e9XC5IGf8FVfTg5GNhdnY2s00yC6CqXIsq+jHP/UmvsvxCJgFUwF2hioFwYG5kCcypYwBSTTb+31QRCzJC2Crt+1PVADSyuN8cJd+jijT4Z86caaRprKWqAWjhUmX8LHjKZokk1oCPHz/Oc4R/SRV5SAzKsQKMYReDabrcZdGI67KIdUFs/Mr1FKOuuuUHMrAGVK7HHGzHx9xIa/f7WS3ml1IFkYpk1KhgX/oKgNJPlesxiTeov6ivAFXpNw+m4aA9FX39lABV6S+NYFpO9MXJ6AvDUPovX75MV65cIW5tBs851aPt7W3a2toiyag5USd6TE9kQdzTiVkMYvt7YPh79+4hPe77cwjx/ft36nZFzsMNiGZEURdUaHSnTG7dukVTU1MDjQ/wMwiE90pFTcn88VzfqFbvvyQQGDSrUb9+/Upra2skEXadP+mOul4NOHfuXJMEglKdp0TfvXs3tra4JByMewKwbxLpfoq4k5s3b5JE1HT8gEAANYDQJIFcu3aN8nL9+nUSSlO3CQIBJLsfHmGivCBNleqGOGML5s0Gfx27n0ckkCLGN/kZZcCFI7C5/t9Nk0B4VImKYuIzSqKJf2rKF4kUAA2rIgbkcezgMySCVZ+wfU0tBRVLkVbt5uYmSQa2hwsaWQHQLSGc6RrnpB4JZmdnJ5ch8TtS3Y8GtkcNmCLhwJhZRMj6flcgDqA7eiimlsOge3t7dPv27YG5PYIu3ie1DygK14ApCODRkLC+vh5cV69epUuXLtHFixcDo0MYPR4gOO08BQtQH5oaEAbZjfQMJw3sguqIAeO4ukUKdZnt9DFikoYEBF4MSZ4/fz645w7E3pgwYgBAyopYgEfpKahGtADoSEOffr1eTxyKBBBIjwFABATsjY0N0WJAADQ1RcUBPQoGw+flwoULwXXnzp2gNS20YdYVJ0Ce8d8kICQuaQ00TkN7AjgHpf7+/ftBqS0LCIs2xOfPn0XUBk5DfWRBPjkGxvc8r1Tja/Ad+C4JI2UswDoE+EQO0ca3aRAX39kP7OxYQzUgh7gyhHZ5LtEuqNBmE0WAT3ZZCuGOHM+i69SwqSk5okiaaYobN270GnS2ge1raoqcT5ZBo0lCIITxbQT/PgS7+eq+oDdkGXQnSwHdG7bBLr54rKknbbIM+vGl4MIFYQtlPAYCcJ/LMllmd3eXpIAOPNtgy2Q8BgKoONAmi2D0SsJCCgxfOlhZ09uvOjw7+jVZ5tu3b05HttBbinUEtsGm4fq+JwCnRC2yDOIA+mVgBJt9M/hefOeXL1/IBdr9gOgaMewL0SQHICVFZhQ366EoEBlub3V11dngPTzN7Oxsb0fhycgPFzkjapIDYBw96wFtBIihR8DyZiko6XqUTMoqSmyDfOJ59A1cC7BOzCNBoKEEEbQYcask9YRcocOS/szMzM/hF/qtE15ilZ6TIGBMIH0dcBLYezr62qlZESoYy11oO7z4/Tb+PiUA2gSIBVRhlH6lHwzcL0hiLBhiTvl+Tdx+QX9QhREGlX4wUAC1n4H1PqJRA2ln3KEPsVMTOY1boCogF8HH0Sdxb4gVAB1GXH0WqCIXcD1JhzwkTs5V1WeJKrKylOa8mVSzo7n1+YwEzB8aInxls0RSCYC2Ac5MoSoepCE4XybtIT/V9vWGKW37eoAP5i+o2gcDgG2yHuqTeYUMAguO66CKE8AmeQ55y+SCwmAjUmm9pq7Ie34MyC0A4JgwzzFhrPeXVm6nRTkpJABQgRlbXXo0XnTZ+I+dHuQG8B9QKapP4wNSzUZR4wMjy1TR3MaZKTQeLeYl/K2mjrYt7IKiqHMHRvHgB7ichTnDx9kaX6j94MGDFlxSePLRCLCsXE6LDGO8BoQZgdrgY2Bq0OkXJihVAM0QChGMi+fN7bNgRQDNEAiBEr+EmSGmTsxOwqoAGrVNPrZKfkIyaKsS3ybLOBFAgy2TsWuv2re6SXaB0V/bLO39cCpAGC3G4eFhk1vWv5D53Rx9tRLoDRakuDR6GDECRMGmpmpP02m1syM2F8SySk89RpdYdkOXz9cntQa6g9WIUgwe5T+/jpkIlXwuTQAAAABJRU5ErkJggg\x3d\x3d";
  },
  391: function (c, d) {
    c.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAb8SURBVHgB7d3Na1TrHcDxJzOTF/OmxnhN1YWCCCJqsatSF7oVururbi5uunHVv6Qr13IXgkj/CsV207qwoILBqg32mleTmDfz1vNAhVJ6b87czEzmd/L5wJAIxzOa8TvPc55z5pgSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAE9qeIePnx4bXd390ZPT8+N4pcTiW4wWbwmk+vr69/fuXPnh8TPVtmA7927Nzw+Pv5d8Q/l20TXKl6fP83Pz39/9+7dz4mmVTLgHO+JEyf+WHx7IRHB5Nzc3B9E3LxaqqA88ibxRnJhbGzsu0TTKhfw/fv3J0yb4ynWKL598ODBLxNNqVzAAwMD3smDqtVqv0k0pXIBF+/kps5B/edMAU2o4jGwgONymq9JlVzEgsNCwBCYgCEwAUNgAobABAyBNRJtsbu721+v1weKb/OjnijlyZMnv0/7VPzs54pzynNbW1t/vXXrVqWvrzYCt17+mR4t4j1RfB1K4u24It78s7/YaDR+9/Tp018/evSoL1WUgFurlsOt1WpDia6ws7NzZWJi4rdVjVjArTVSTN96E10lj8hnzpz5VaogAbdO3cjbvfJI/Pjx41+kihFwixTxjiS6WhHxuVQxVqFbp/fSpUtjJ0+e/MlReGZmZuXly5fz6QB0+5+v3Yr1iXPFl7+kCjECt45j3+5XuVmSgCEwAUNgAobABAyBCRgCEzAEJmAITMAQmIAhMAFDYAI+ROr1ute7YrygHdbf339gHyDp7e31eleMF7SFtra2dvbapgj4wG6xUyvstc36+vpWIgwBt9DGxsb2XtvkEfggRsL8nENDQ3t+YqrMmxDdQ8At9Pnz5y9lthsfHx9IHXbs2LH+MtsVf4fNRBgCbqHl5eVS//hPnTo1nDqseM5St/sRcCwCbqHNzc2dIuKNvbYbHR3tP3LkSMcWs/JzjY2NHdlru5WVlc38d0iEIeAWW1xcXC+z3blz50ZTh5R9rqWlpVJ/drqHgFtsZmamVAT53lTHjx8vdVy6H/k59roP1ldTU1OV/l8MqkjALVZMob+UmUZnFy9eHGvnVDrvOz9HmW2L0XdjbW3NKaRgBNwG7969WyyzXT6ldPny5RPtOK2U95n3XfbCkenp6ZVEOAJug/n5+Y2yo/Dg4GDftWvXTrZyJM77yvvM+y6zfT5//eHDBwEHJOA2KTsKZzm0q1evnmzFMXHeR95X2XizN2/eLCRCcmP3Nsmj8MLCwloR1J6nb7I81b1y5co3+cbqb9++XWr2eDSPunm1ueyC1Vf5+YrHWiIkAbfRq1ev5q9fvz7RzPXPOcD8KN4A1j5+/Ljy6dOnjR87N5uPc8fHx4/kizTyueXUpDx1zm8WibAE3EY5vBcvXszmkbXRaPQ083vzhRdfL75YXV39srW1tZuvU876+voa+U1hv59sev78+bSV59gE3Gb5tFIxyi1cuHCh1Omc/6eZ49myJicn58Ubn0WsDsgrvFNTU6UXtdrt/fv3S1adq8EI3CHFSu/S+vr69n5G4v3K0/A8GxBvdQi4g3I4xcr0RnGa55tOf7A/L1jl4/E8pU9Uhil0h+Xjzrx4lE/fpA7JK9rPnj37QbzVYwQ+ADni/J9oz83NrZ0/f/54u0bjfH1zcby7mM9JJypJwAdoenp6LT9Onz49lM/ljoyMtOTTScI9PATcBfKxcX7kq6nOnj07PDo6OlDm/lX/LUebP887Ozu7Vnx1V41DQsBdJE+tX79+/Sl/n6+yKkbk3uHh4b56vd7zvx92yBeJ5IWpfB+ufCsfd9I4nATcpXKQeQpsGsxPsQoNgQkYAhMwBCZgCEzAEJiAITABQ2AChsAEDIEJGAITMAQmYAhMwBCYgCEwAUNgAobABAyBCRgCEzAEJmAITMAQmIAhMAFDYAKGwAQMgQkYAhMwBCZgCEzAEJiAITABQ2AChsAEDIEJGAITMAQmYAhMwBCYgCEwAUNgAobABAyBCRgCEzAEJmAITMAQmIAhMAFDYAKGwAQMgQkYAhMwBCZgCEzAEJiAITABQ2AChsAEDIEJGAITMAQmYLpGrVabSW3U09MzmypGwHSNRqMxndpod3d3PlWMgOkaIyMjf05tVIzAf0sVI2C6Qn9//7O+vr6l1Cbb29t/v3HjxnKqGAFz4PKx79GjR9s2+hZT57nV1dVnqYIaCQ5QHnlzvPV6fSO1QR55c7y3b99uy/4PmoDpuGLEXert7Z0cGBiYHBwc/GdqveWdnZ13xTHvP27evPmvBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAef8G5a8tIBWNPxcAAAAASUVORK5CYII\x3d";
  },
  392: function (c, d, a) {
    d.a = [
      { key: "American Samoa", value: "AS", regionNum: "+1" },
      { key: "Anguilla", value: "AI", regionNum: "+1" },
      { key: "Antigua \x26 Barbuda", value: "AG", regionNum: "+1" },
      { key: "Bahamas ", value: "BS", regionNum: "+1" },
      { key: "Barbados ", value: "BB", regionNum: "+1" },
      { key: "Bermuda ", value: "BM", regionNum: "+1" },
      { key: "British Virgin Islands ", value: "VG", regionNum: "+1" },
      { key: "Canada ", value: "CA", regionNum: "+1" },
      { key: "Cayman Islands ", value: "KY", regionNum: "+1" },
      { key: "Dominica ", value: "DM", regionNum: "+1" },
      { key: "Dominican Republic ", value: "DO", regionNum: "+1" },
      { key: "Grenada ", value: "GD", regionNum: "+1" },
      { key: "Guam ", value: "GU", regionNum: "+1" },
      { key: "Jamaica ", value: "JM", regionNum: "+1" },
      { key: "Montserrat ", value: "MS", regionNum: "+1" },
      { key: "Northern Mariana Islands ", value: "MP", regionNum: "+1" },
      { key: "Puerto Rico ", value: "PR", regionNum: "+1" },
      { key: "Sint Maarten ", value: "SX", regionNum: "+1" },
      { key: "St Kitts \x26 Nevis ", value: "KN", regionNum: "+1" },
      { key: "St Lucia ", value: "LC", regionNum: "+1" },
      { key: "St Vincent \x26 the Grenadines ", value: "VC", regionNum: "+1" },
      { key: "Trinidad \x26 Tobago ", value: "TT", regionNum: "+1" },
      { key: "Turks \x26 Caicos Islands ", value: "TC", regionNum: "+1" },
      { key: "United States ", value: "US", regionNum: "+1" },
      { key: "US Virgin Islands ", value: "VI", regionNum: "+1" },
      { key: "Egypt ", value: "EG", regionNum: "+20" },
      { key: "South Sudan ", value: "SS", regionNum: "+211" },
      { key: "Morocco ", value: "MA", regionNum: "+212" },
      { key: "Western Sahara ", value: "", regionNum: "+212" },
      { key: "Algeria", value: "DZ", regionNum: "+213" },
      { key: "Tunisia ", value: "TN", regionNum: "+216" },
      { key: "Libya ", value: "LY", regionNum: "+218" },
      { key: "Gambia ", value: "GM", regionNum: "+220" },
      { key: "Senegal ", value: "SN", regionNum: "+221" },
      { key: "Mauritania ", value: "MR", regionNum: "+222" },
      { key: "Mali ", value: "ML", regionNum: "+223" },
      { key: "Guinea ", value: "GN", regionNum: "+224" },
      { key: "C\u00f4te d\u2019Ivoire ", value: "CI", regionNum: "+225" },
      { key: "Burkina Faso ", value: "BF", regionNum: "+226" },
      { key: "Niger ", value: "NE", regionNum: "+227" },
      { key: "Togo ", value: "TG", regionNum: "+228" },
      { key: "Benin ", value: "BJ", regionNum: "+229" },
      { key: "Mauritius ", value: "MU", regionNum: "+230" },
      { key: "Liberia ", value: "LR", regionNum: "+231" },
      { key: "Sierra Leone ", value: "SL", regionNum: "+232" },
      { key: "Ghana ", value: "GH", regionNum: "+233" },
      { key: "Nigeria ", value: "NG", regionNum: "+234" },
      { key: "Chad ", value: "TD", regionNum: "+235" },
      { key: "Central African Republic ", value: "CF", regionNum: "+236" },
      { key: "Cameroon ", value: "CM", regionNum: "+237" },
      { key: "Cape Verde ", value: "CV", regionNum: "+238" },
      {
        key: "S\u00e3o Tom\u00e9 \x26 Pr\u00edncipe ",
        value: "ST",
        regionNum: "+239",
      },
      { key: "Equatorial Guinea ", value: "GQ", regionNum: "+240" },
      { key: "Gabon ", value: "GA", regionNum: "+241" },
      { key: "Congo - Brazzaville ", value: "CG", regionNum: "+242" },
      { key: "Congo - Kinshasa ", value: "CD", regionNum: "+243" },
      { key: "Angola", value: "AO", regionNum: "+244" },
      { key: "Guinea-Bissau ", value: "GW", regionNum: "+245" },
      {
        key: "British Indian Ocean Territory ",
        value: "IO",
        regionNum: "+246",
      },
      { key: "Ascension Island ", value: "AC", regionNum: "+247" },
      { key: "Seychelles ", value: "SC", regionNum: "+248" },
      { key: "Sudan ", value: "SD", regionNum: "+249" },
      { key: "Rwanda ", value: "RW", regionNum: "+250" },
      { key: "Ethiopia ", value: "ET", regionNum: "+251" },
      { key: "Somalia ", value: "SO", regionNum: "+252" },
      { key: "Djibouti ", value: "DJ", regionNum: "+253" },
      { key: "Kenya ", value: "KE", regionNum: "+254" },
      { key: "Tanzania ", value: "TZ", regionNum: "+255" },
      { key: "Uganda ", value: "UG", regionNum: "+256" },
      { key: "Burundi ", value: "BI", regionNum: "+257" },
      { key: "Mozambique ", value: "MZ", regionNum: "+258" },
      { key: "Zambia ", value: "ZM", regionNum: "+260" },
      { key: "Madagascar ", value: "MG", regionNum: "+261" },
      { key: "Mayotte ", value: "YT", regionNum: "+262" },
      { key: "R\u00e9union ", value: "RE", regionNum: "+262" },
      { key: "Zimbabwe ", value: "ZW", regionNum: "+263" },
      { key: "Namibia ", value: "NA", regionNum: "+264" },
      { key: "Malawi ", value: "MW", regionNum: "+265" },
      { key: "Lesotho ", value: "LS", regionNum: "+266" },
      { key: "Botswana ", value: "BW", regionNum: "+267" },
      { key: "Eswatini ", value: "SZ", regionNum: "+268" },
      { key: "Comoros ", value: "KM", regionNum: "+269" },
      { key: "South Africa ", value: "ZA", regionNum: "+27" },
      { key: "St Helena ", value: "SH", regionNum: "+290" },
      { key: "Tristan da Cunha ", value: "TA", regionNum: "+290" },
      { key: "Eritrea ", value: "ER", regionNum: "+291" },
      { key: "Aruba", value: "AW", regionNum: "+297" },
      { key: "Faroe Islands ", value: "FO", regionNum: "+298" },
      { key: "Greenland ", value: "GL", regionNum: "+299" },
      { key: "Greece ", value: "GR", regionNum: "+30" },
      { key: "Netherlands ", value: "NL", regionNum: "+31" },
      { key: "Belgium ", value: "BE", regionNum: "+32" },
      { key: "France ", value: "FR", regionNum: "+33" },
      { key: "Spain ", value: "ES", regionNum: "+34" },
      { key: "Gibraltar ", value: "GI", regionNum: "+350" },
      { key: "Portugal ", value: "PT", regionNum: "+351" },
      { key: "Luxembourg ", value: "LU", regionNum: "+352" },
      { key: "Ireland ", value: "IE", regionNum: "+353" },
      { key: "Iceland ", value: "IS", regionNum: "+354" },
      { key: "Albania", value: "AL", regionNum: "+355" },
      { key: "Malta ", value: "MT", regionNum: "+356" },
      { key: "Cyprus ", value: "CY", regionNum: "+357" },
      { key: "\u00c5land Islands", value: "AX", regionNum: "+358" },
      { key: "Finland ", value: "FI", regionNum: "+358" },
      { key: "Bulgaria ", value: "BG", regionNum: "+359" },
      { key: "Hungary ", value: "HU", regionNum: "+36" },
      { key: "Lithuania ", value: "LT", regionNum: "+370" },
      { key: "Latvia ", value: "LV", regionNum: "+371" },
      { key: "Estonia ", value: "EE", regionNum: "+372" },
      { key: "Moldova ", value: "MD", regionNum: "+373" },
      { key: "Armenia", value: "AM", regionNum: "+374" },
      { key: "Belarus ", value: "BY", regionNum: "+375" },
      { key: "Andorra", value: "AD", regionNum: "+376" },
      { key: "Monaco ", value: "MC", regionNum: "+377" },
      { key: "San Marino ", value: "SM", regionNum: "+378" },
      { key: "Ukraine ", value: "UA", regionNum: "+380" },
      { key: "Serbia ", value: "RS", regionNum: "+381" },
      { key: "Montenegro ", value: "ME", regionNum: "+382" },
      { key: "Kosovo ", value: "", regionNum: "+383" },
      { key: "Croatia ", value: "HR", regionNum: "+385" },
      { key: "Slovenia ", value: "SI", regionNum: "+386" },
      { key: "Bosnia \x26 Herzegovina ", value: "BA", regionNum: "+387" },
      { key: "North Macedonia ", value: "MK", regionNum: "+389" },
      { key: "Italy ", value: "IT", regionNum: "+39" },
      { key: "Vatican City ", value: "VA", regionNum: "+39" },
      { key: "Romania ", value: "RO", regionNum: "+40" },
      { key: "Switzerland ", value: "CH", regionNum: "+41" },
      { key: "Czechia ", value: "CZ", regionNum: "+420" },
      { key: "Slovakia ", value: "SK", regionNum: "+421" },
      { key: "Liechtenstein ", value: "LI", regionNum: "+423" },
      { key: "Austria ", value: "AT", regionNum: "+43" },
      { key: "Guernsey ", value: "GG", regionNum: "+44" },
      { key: "Isle of Man ", value: "IM", regionNum: "+44" },
      { key: "Jersey ", value: "JE", regionNum: "+44" },
      { key: "United Kingdom ", value: "UK", regionNum: "+44" },
      { key: "Denmark ", value: "DK", regionNum: "+45" },
      { key: "Sweden ", value: "SE", regionNum: "+46" },
      { key: "Norway ", value: "NO", regionNum: "+47" },
      { key: "Svalbard \x26 Jan Mayen ", value: "SJ", regionNum: "+47" },
      { key: "Poland ", value: "PL", regionNum: "+48" },
      { key: "Germany ", value: "DE", regionNum: "+49" },
      {
        key: "Falkland Islands  (Islas Malvinas) ",
        value: "FK",
        regionNum: "+500",
      },
      { key: "Belize ", value: "BZ", regionNum: "+501" },
      { key: "Guatemala ", value: "GT", regionNum: "+502" },
      { key: "El Salvador ", value: "SV", regionNum: "+503" },
      { key: "Honduras ", value: "HN", regionNum: "+504" },
      { key: "Nicaragua ", value: "NI", regionNum: "+505" },
      { key: "Costa Rica ", value: "CR", regionNum: "+506" },
      { key: "Panama ", value: "PA", regionNum: "+507" },
      { key: "St Pierre \x26 Miquelon ", value: "PM", regionNum: "+508" },
      { key: "Haiti ", value: "HT", regionNum: "+509" },
      { key: "Peru ", value: "PE", regionNum: "+51" },
      { key: "Mexico ", value: "MX", regionNum: "+52" },
      { key: "Cuba ", value: "CU", regionNum: "+53" },
      { key: "Argentina", value: "AR", regionNum: "+54" },
      { key: "Brazil ", value: "BR", regionNum: "+55" },
      { key: "Chile ", value: "CL", regionNum: "+56" },
      { key: "Colombia ", value: "CO", regionNum: "+57" },
      { key: "Venezuela ", value: "VE", regionNum: "+58" },
      { key: "Guadeloupe ", value: "GP", regionNum: "+590" },
      { key: "St Barth\u00e9lemy ", value: "BL", regionNum: "+590" },
      { key: "St Martin ", value: "SX", regionNum: "+590" },
      { key: "Bolivia ", value: "BO", regionNum: "+591" },
      { key: "Guyana ", value: "GY", regionNum: "+592" },
      { key: "Ecuador ", value: "EC", regionNum: "+593" },
      { key: "French Guiana ", value: "GF", regionNum: "+594" },
      { key: "Paraguay ", value: "PY", regionNum: "+595" },
      { key: "Martinique ", value: "MQ", regionNum: "+596" },
      { key: "Suriname ", value: "SR", regionNum: "+597" },
      { key: "Uruguay ", value: "UY", regionNum: "+598" },
      { key: "Caribbean Netherlands ", value: "BQ", regionNum: "+599" },
      { key: "Cura\u00e7ao ", value: "CW", regionNum: "+599" },
      { key: "Malaysia ", value: "MY", regionNum: "+60" },
      { key: "Cocos (Keeling) Islands", value: "CC", regionNum: "+61" },
      { key: "Australia ", value: "AU", regionNum: "+61" },
      { key: "Christmas Island ", value: "CX", regionNum: "+61" },
      { key: "Indonesia ", value: "ID", regionNum: "+62" },
      { key: "Philippines ", value: "PH", regionNum: "+63" },
      { key: "New Zealand ", value: "NZ", regionNum: "+64" },
      { key: "Singapore ", value: "SG", regionNum: "+65" },
      { key: "Thailand ", value: "TH", regionNum: "+66" },
      { key: "Timor-Leste ", value: "TL", regionNum: "+670" },
      { key: "Norfolk Island ", value: "NF", regionNum: "+672" },
      { key: "Brunei ", value: "BN", regionNum: "+673" },
      { key: "Nauru ", value: "NR", regionNum: "+674" },
      { key: "Papua New Guinea ", value: "PG", regionNum: "+675" },
      { key: "Tonga ", value: "TO", regionNum: "+676" },
      { key: "Solomon Islands ", value: "SB", regionNum: "+677" },
      { key: "Vanuatu ", value: "VU", regionNum: "+678" },
      { key: "Fiji ", value: "FJ", regionNum: "+679" },
      { key: "Palau ", value: "PW", regionNum: "+680" },
      { key: "Wallis \x26 Futuna ", value: "WF", regionNum: "+681" },
      { key: "Cook Islands ", value: "CK", regionNum: "+682" },
      { key: "Niue ", value: "NU", regionNum: "+683" },
      { key: "Samoa ", value: "WS", regionNum: "+685" },
      { key: "Kiribati ", value: "KI", regionNum: "+686" },
      { key: "New Caledonia ", value: "NC", regionNum: "+687" },
      { key: "Tuvalu ", value: "TV", regionNum: "+688" },
      { key: "French Polynesia ", value: "PF", regionNum: "+689" },
      { key: "Tokelau ", value: "TK", regionNum: "+690" },
      { key: "Micronesia ", value: "FM", regionNum: "+691" },
      { key: "Marshall Islands ", value: "MH", regionNum: "+692" },
      { key: "Kazakhstan ", value: "KZ", regionNum: "+7" },
      { key: "Russia ", value: "RU", regionNum: "+7" },
      { key: "Japan ", value: "JP", regionNum: "+81" },
      { key: "South Korea ", value: "KR", regionNum: "+82" },
      { key: "Vietnam ", value: "VN", regionNum: "+84" },
      { key: "North Korea ", value: "KP", regionNum: "+850" },
      { key: "Hong Kong ", value: "HK", regionNum: "+852" },
      { key: "Macao ", value: "MO", regionNum: "+853" },
      { key: "Cambodia ", value: "KH", regionNum: "+855" },
      { key: "Laos ", value: "LA", regionNum: "+856" },
      { key: "China ", value: "CN", regionNum: "+86" },
      { key: "Bangladesh ", value: "BD", regionNum: "+880" },
      { key: "Taiwan ", value: "TW", regionNum: "+886" },
      { key: "T\u00fcrkiye ", value: "TR", regionNum: "+90" },
      { key: "India ", value: "IN", regionNum: "+91" },
      { key: "Pakistan ", value: "PK", regionNum: "+92" },
      { key: "Afghanistan", value: "AF", regionNum: "+93" },
      { key: "Sri Lanka ", value: "LK", regionNum: "+94" },
      { key: "Myanmar (Burma)", value: "MM", regionNum: "+95" },
      { key: "Maldives ", value: "MV", regionNum: "+960" },
      { key: "Lebanon ", value: "LB", regionNum: "+961" },
      { key: "Jordan ", value: "JO", regionNum: "+962" },
      { key: "Syria ", value: "SY", regionNum: "+963" },
      { key: "Iraq ", value: "IQ", regionNum: "+964" },
      { key: "Kuwait ", value: "KW", regionNum: "+965" },
      { key: "Saudi Arabia ", value: "SA", regionNum: "+966" },
      { key: "Yemen ", value: "YE", regionNum: "+967" },
      { key: "Oman ", value: "OM", regionNum: "+968" },
      { key: "Palestine ", value: "PS", regionNum: "+970" },
      { key: "United Arab Emirates ", value: "AE", regionNum: "+971" },
      { key: "Israel ", value: "IL", regionNum: "+972" },
      { key: "Bahrain ", value: "BH", regionNum: "+973" },
      { key: "Qatar ", value: "QA", regionNum: "+974" },
      { key: "Bhutan ", value: "BT", regionNum: "+975" },
      { key: "Mongolia ", value: "MN", regionNum: "+976" },
      { key: "Nepal ", value: "NP", regionNum: "+977" },
      { key: "Iran ", value: "IR", regionNum: "+98" },
      { key: "Tajikistan ", value: "TJ", regionNum: "+992" },
      { key: "Turkmenistan ", value: "TM", regionNum: "+993" },
      { key: "Azerbaijan ", value: "AZ", regionNum: "+994" },
      { key: "Georgia ", value: "GE", regionNum: "+995" },
      { key: "Kyrgyzstan ", value: "KG", regionNum: "+996" },
    ];
  },
  393: function (c, d, a) {
    (function (b) {
      a(4);
      var c = a(0);
      a(628);
      d.a = {
        init: function (a) {
          var d, h, g, e, n;
          (h = (d = b(a)).find(".video-box")) &&
            ((g = h.find("video")),
            (e = g.get(0)),
            (n = g.prop("src") || g.data("src")),
            d.on("mouseenter", function () {
              try {
                c.a.toggleVideoMute(e, !0), e.play();
              } catch (y) {}
            }),
            d.on("mouseleave", function () {
              c.a.pauseVideo(e);
            }),
            d.on("click touchstart", ".play-btn, .fa-play", function () {
              c.a.playVideo(n);
            }),
            d.on("dbclick", function (b) {
              b.preventDefault();
            }),
            d.on("click touchstart", ".video", function (b) {
              b.preventDefault();
              (b = d.data("href"))
                ? window.location.assign(b)
                : c.a.playVideo(n, e.currentTime);
            }));
        },
      };
    }).call(this, a(3));
  },
  400: function (c, d, a) {
    c.exports = a(401);
  },
  401: function (c, d, a) {
    a.r(d);
    (function (b) {
      function c(b, a) {
        var e = Object.keys(b);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(b);
          a &&
            (c = c.filter(function (a) {
              return Object.getOwnPropertyDescriptor(b, a).enumerable;
            }));
          e.push.apply(e, c);
        }
        return e;
      }
      function d(b) {
        for (var a = 1; a < arguments.length; a++) {
          var e = null != arguments[a] ? arguments[a] : {};
          a % 2
            ? c(Object(e), !0).forEach(function (a) {
                var c = e[a];
                a in b
                  ? Object.defineProperty(b, a, {
                      value: c,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (b[a] = c);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(b, Object.getOwnPropertyDescriptors(e))
            : c(Object(e)).forEach(function (a) {
                Object.defineProperty(
                  b,
                  a,
                  Object.getOwnPropertyDescriptor(e, a)
                );
              });
        }
        return b;
      }
      function l(a) {
        var e = a.getAttribute("vue-site");
        return (
          e && b.OP_VUE_REGISTRY.has(e)
            ? OP_vue.vueInstances.push(
                new OP_vue(
                  Object.assign({}, b.OP_VUE_REGISTRY.get(e), {
                    el: a,
                    propsData: d({}, a.dataset),
                  })
                )
              )
            : OP_vue.vueInstances.push(new OP_vue({ el: a })),
          OP_vue.vueInstances[OP_vue.vueInstances.length - 1]
        );
      }
      a(18);
      a(42);
      a(46);
      a(53);
      a(87);
      a(13);
      a(9);
      a(19);
      a(47);
      a(406);
      a(452);
      a(653);
      var h;
      ((h = a(654)), h.keys().map(h)).forEach(function (b) {
        b = b.default;
        OP_vue.component(b.name, b);
      });
      b.VUE_SITE_COMPONENTS &&
        0 < b.VUE_SITE_COMPONENTS.length &&
        b.VUE_SITE_COMPONENTS.forEach(function (b) {
          OP_vue.component(b.name, b);
        });
      var g = "[".concat("vue-site", "]");
      OP_vue.use({
        install: function () {
          OP_vue.vueInstances = [];
          OP_vue.newInstance = function () {
            return (
              document.querySelectorAll(g).forEach(function (b) {
                return l(b);
              }),
              OP_vue.vueInstances
            );
          };
          OP_vue.reloadInstance = function (b) {
            return b.matches(g) || ((b = b.querySelector(g)), b)
              ? l(b)
              : void 0;
          };
        },
      });
      OP_vue.newInstance();
    }).call(this, a(34));
  },
  406: function (c, d, a) {
    a(42);
    a(46);
    a(9);
    a(47);
    c = a(407);
    c.keys().map(c);
  },
  407: function (c, d, a) {
    function b(b) {
      b = r(b);
      return a(b);
    }
    function r(b) {
      if (!a.o(u, b))
        throw (
          ((b = Error("Cannot find module '" + b + "'")),
          (b.code = "MODULE_NOT_FOUND"),
          b)
        );
      return u[b];
    }
    var u = {
      "./access-light.svg": 408,
      "./arrow-down.svg": 409,
      "./close.svg": 410,
      "./correct-circle.svg": 411,
      "./error.svg": 412,
      "./general-arrow-right.svg": 413,
      "./learn-more.svg": 414,
      "./minus.svg": 415,
      "./next-dark.svg": 416,
      "./next-light.svg": 417,
      "./pause.svg": 418,
      "./play.svg": 419,
      "./plus.svg": 420,
      "./pop-close.svg": 421,
      "./prd-arrow-down.svg": 422,
      "./prev-dark.svg": 423,
      "./prev-light.svg": 424,
      "./refresh.svg": 425,
      "./restart.svg": 426,
      "./search.svg": 427,
      "./share/VKontakte-circle.svg": 428,
      "./share/alipay.svg": 429,
      "./share/copy-circle.svg": 430,
      "./share/email-circle.svg": 431,
      "./share/facebook-circle.svg": 432,
      "./share/facebook.svg": 433,
      "./share/instagram-circle.svg": 434,
      "./share/instagram.svg": 435,
      "./share/likee-circle.svg": 436,
      "./share/linkedin-circle.svg": 437,
      "./share/pinterest-circle.svg": 438,
      "./share/qq.svg": 439,
      "./share/tikTok.svg": 440,
      "./share/tiktok-circle.svg": 441,
      "./share/twitter-circle.svg": 442,
      "./share/twitter.svg": 443,
      "./share/wechat.svg": 444,
      "./share/weibo-circle.svg": 445,
      "./share/weibo.svg": 446,
      "./share/weixin-circle.svg": 447,
      "./share/whatsApp.svg": 448,
      "./share/youtube-circle.svg": 449,
      "./share/youtube.svg": 450,
      "./video-play.svg": 451,
    };
    b.keys = function () {
      return Object.keys(u);
    };
    b.resolve = r;
    c.exports = b;
    b.id = 407;
  },
  408: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-access-light",
      use: "icon-access-light-usage",
      viewBox: "0 0 20 20",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 20 20" id\x3d"icon-access-light"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M13 10.41l-5.25 5.507-.861-.905L11.667 10 6.889 4.988l.861-.905L13 9.59c.22.227.22.595 0 .822z" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  409: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-arrow-down",
      use: "icon-arrow-down-usage",
      viewBox: "0 0 24 24",
      content:
        '\x3csymbol fill\x3d"none" xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 24 24" id\x3d"icon-arrow-down"\x3e\x3cpath d\x3d"M5.875 8.938L12 15.061l6.125-6.124" stroke\x3d"#000" stroke-opacity\x3d".85" stroke-width\x3d"1.6" stroke-linejoin\x3d"round" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  410: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-close",
      use: "icon-close-usage",
      viewBox: "0 0 20 20",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 20 20" id\x3d"icon-close"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M9.272 10.156L5 14.428l.884.884 4.272-4.272 4.272 4.272.884-.883-4.272-4.273 4.272-4.272L14.428 5l-4.272 4.272L5.884 5 5 5.884l4.272 4.272z" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  411: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-correct-circle",
      use: "icon-correct-circle-usage",
      viewBox: "0 0 24 24",
      content:
        '\x3csymbol fill\x3d"none" xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 24 24" id\x3d"icon-correct-circle"\x3e\x3ccircle cx\x3d"12" cy\x3d"12" r\x3d"8.25" transform\x3d"rotate(90 12 12)" stroke\x3d"#000" stroke-width\x3d"1.5" /\x3e\x3cpath d\x3d"M8 11.667l2.665 2.517a.5.5 0 00.678.008L16 10" stroke\x3d"#000" stroke-width\x3d"1.5" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  412: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-error",
      use: "icon-error-usage",
      viewBox: "0 0 68 68",
      content:
        '\x3csymbol fill\x3d"none" xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 68 68" id\x3d"icon-error"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M34 13.136c11.523 0 20.864 9.341 20.864 20.864 0 11.523-9.341 20.864-20.864 20.864-11.523 0-20.864-9.341-20.864-20.864 0-11.523 9.341-20.864 20.864-20.864zm0-2.318c12.803 0 23.182 10.379 23.182 23.182 0 12.803-10.38 23.182-23.182 23.182-12.803 0-23.182-10.379-23.182-23.182 0-12.803 10.379-23.182 23.182-23.182zm0 33.897a2.321 2.321 0 002.318-2.318A2.321 2.321 0 0034 40.079a2.321 2.321 0 00-2.318 2.318A2.321 2.321 0 0034 44.715zm0-20.76c.853 0 1.545.692 1.545 1.545v9.657a1.545 1.545 0 01-3.09 0V25.5c0-.854.691-1.546 1.545-1.546z" fill\x3d"#F34141" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  413: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-general-arrow-right",
      use: "icon-general-arrow-right-usage",
      viewBox: "0 0 24 24",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 24 24" id\x3d"icon-general-arrow-right"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M17.24 12.9H5v-1.4h12.239l-4.37-4.37 1.061-1.06 5.6 5.6.53.53-.53.53-5.6 5.6-1.06-1.06 4.37-4.37z" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  414: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-learn-more",
      use: "icon-learn-more-usage",
      viewBox: "0 0 6 10",
      content:
        '\x3csymbol fill\x3d"none" xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 6 10" id\x3d"icon-learn-more"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M5.4 5.329L1.2 9.733.51 9.01 4.333 5 .51.992 1.2.267 5.4 4.67a.475.475 0 010 .658z" fill\x3d"#2660F5" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  415: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-minus",
      use: "icon-minus-usage",
      viewBox: "0 0 24 24",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 24 24" id\x3d"icon-minus"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M19 12.6H5V11h14v1.6z" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  416: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-next-dark",
      use: "icon-next-dark-usage",
      viewBox: "0 0 36 36",
      content:
        '\x3csymbol fill\x3d"none" xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 36 36" id\x3d"icon-next-dark"\x3e\x3cpath d\x3d"M18 0c9.978 0 18 8.113 18 18s-8.022 18-18 18S0 27.887 0 18 8.022 0 18 0z" fill\x3d"#fff" fill-opacity\x3d".28" /\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M20.7 18.444l-4.726 5.946-.775-.977L19.5 18l-4.3-5.413.775-.977 4.725 5.946a.737.737 0 010 .888z" fill\x3d"#fff" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  417: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-next-light",
      use: "icon-next-light-usage",
      viewBox: "0 0 36 36",
      content:
        '\x3csymbol fill\x3d"none" xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 36 36" id\x3d"icon-next-light"\x3e\x3cpath d\x3d"M18 0c9.978 0 18 8.113 18 18s-8.022 18-18 18S0 27.887 0 18 8.022 0 18 0z" fill\x3d"#000" fill-opacity\x3d".08" /\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M20.7 18.444l-4.726 5.946-.775-.977L19.5 18l-4.3-5.413.775-.977 4.725 5.946a.737.737 0 010 .888z" fill\x3d"#000" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  418: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-pause",
      use: "icon-pause-usage",
      viewBox: "0 0 32 32",
      content:
        '\x3csymbol fill\x3d"none" xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 32 32" id\x3d"icon-pause"\x3e\x3ccircle cx\x3d"16" cy\x3d"16" r\x3d"16" fill\x3d"#fff" fill-opacity\x3d".4" /\x3e\x3cpath d\x3d"M12 9.5a1 1 0 00-1 1v11.4a1 1 0 001 1h1.5a1 1 0 001-1V10.5a1 1 0 00-1-1H12zM19 9.5a1 1 0 00-1 1v11.4a1 1 0 001 1h1.5a1 1 0 001-1V10.5a1 1 0 00-1-1H19z" fill\x3d"#000" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  419: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-play",
      use: "icon-play-usage",
      viewBox: "0 0 32 32",
      content:
        '\x3csymbol fill\x3d"none" xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 32 32" id\x3d"icon-play"\x3e\x3ccircle cx\x3d"16" cy\x3d"16" r\x3d"16" fill\x3d"#fff" fill-opacity\x3d".4" /\x3e\x3cpath d\x3d"M21.579 15.227a.92.92 0 010 1.547l-8.707 5.702c-.629.412-1.472-.031-1.472-.774V10.3c0-.743.843-1.186 1.472-.774l8.707 5.701z" fill\x3d"#000" fill-opacity\x3d".95" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  420: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-plus",
      use: "icon-plus-usage",
      viewBox: "0 0 24 24",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 24 24" id\x3d"icon-plus"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M5 11.4h14V13H5v-1.6z" /\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M12.6 5v14H11V5h1.6z" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  421: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-pop-close",
      use: "icon-pop-close-usage",
      viewBox: "0 0 24 24",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 24 24" id\x3d"icon-pop-close"\x3e\x3cpath d\x3d"M19.637 5.538l-1.274-1.274-3.181 3.182L12 10.628 5.637 4.264 4.363 5.538l6.364 6.363-6.364 6.363 1.274 1.274L12 13.174l6.363 6.364 1.274-1.274-6.364-6.363 6.364-6.363z" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  422: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-prd-arrow-down",
      use: "icon-prd-arrow-down-usage",
      viewBox: "0 0 16 16",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 16 16" id\x3d"icon-prd-arrow-down"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M7.334 10.707L2.667 6.04l.707-.707 4.314 4.313L12 5.333l.707.707-4.667 4.667a.5.5 0 01-.707 0z" fill-opacity\x3d".95" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  423: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-prev-dark",
      use: "icon-prev-dark-usage",
      viewBox: "0 0 36 36",
      content:
        '\x3csymbol fill\x3d"none" xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 36 36" id\x3d"icon-prev-dark"\x3e\x3cpath d\x3d"M18 0c9.978 0 18 8.113 18 18s-8.022 18-18 18S0 27.887 0 18 8.022 0 18 0z" fill\x3d"#fff" fill-opacity\x3d".28" /\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M15.3 17.556l4.726-5.946.775.977L16.5 18l4.3 5.413-.775.977-4.725-5.946a.737.737 0 010-.888z" fill\x3d"#fff" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  424: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-prev-light",
      use: "icon-prev-light-usage",
      viewBox: "0 0 36 36",
      content:
        '\x3csymbol fill\x3d"none" xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 36 36" id\x3d"icon-prev-light"\x3e\x3cpath d\x3d"M18 0c9.978 0 18 8.113 18 18s-8.022 18-18 18S0 27.887 0 18 8.022 0 18 0z" fill\x3d"#000" fill-opacity\x3d".08" /\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M15.3 17.556l4.726-5.946.775.977L16.5 18l4.3 5.413-.775.977-4.725-5.946a.737.737 0 010-.888z" fill\x3d"#000" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  425: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-refresh",
      use: "icon-refresh-usage",
      viewBox: "0 0 16 16",
      content:
        '\x3csymbol fill\x3d"none" xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 16 16" id\x3d"icon-refresh"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M6.667 5.833a.5.5 0 000-1H5.556a4 4 0 11-1.542 2.833H3.01A5 5 0 104.81 4.15V2.977a.5.5 0 10-1 0v2.857h2.857z" fill\x3d"currentColor" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  426: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-restart",
      use: "icon-restart-usage",
      viewBox: "0 0 32 32",
      content:
        '\x3csymbol fill\x3d"none" xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 32 32" id\x3d"icon-restart"\x3e\x3ccircle cx\x3d"16" cy\x3d"16" r\x3d"16" fill\x3d"#fff" fill-opacity\x3d".4" /\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M23.776 12.55V7.3h-1.6v2.685a8.675 8.675 0 102.475 6.065h-1.6a7.075 7.075 0 11-1.459-4.3h-3.866v1.6h5.25a.8.8 0 00.8-.8z" fill\x3d"#000" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  427: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-search",
      use: "icon-search-usage",
      viewBox: "0 0 24 24",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 24 24" id\x3d"icon-search"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M4.633 11.3a6.467 6.467 0 1112.933 0 6.467 6.467 0 01-12.933 0zM11.1 3.769a7.533 7.533 0 104.937 13.223l4.311 4.312.755-.754-4.312-4.312A7.533 7.533 0 0011.1 3.767z" fill-opacity\x3d".95" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  428: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-VKontakte-circle",
      use: "icon-VKontakte-circle-usage",
      viewBox: "0 0 28 28",
      content:
        '\x3csymbol fill\x3d"none" xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 28 28" id\x3d"icon-VKontakte-circle"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M14 28c7.732 0 14-6.268 14-14S21.732 0 14 0 0 6.268 0 14s6.268 14 14 14zM5.833 9.333c.123 5.83 3.08 9.334 8.261 9.334h.294V15.33c1.904.187 3.344 1.56 3.921 3.336H21c-.739-2.654-2.681-4.12-3.894-4.681 1.213-.691 2.918-2.373 3.325-4.653h-2.444c-.53 1.85-2.102 3.532-3.6 3.69v-3.69h-2.444V15.8c-1.515-.374-3.429-2.187-3.514-6.466H5.833z" fill\x3d"#000" fill-opacity\x3d".95" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  429: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-alipay",
      use: "icon-alipay-usage",
      viewBox: "0 0 24 24",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 24 24" id\x3d"icon-alipay"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M7.029 5C5.909 5 5 5.908 5 7.029v9.942C5 18.091 5.908 19 7.029 19h9.942c1.054 0 1.92-.804 2.02-1.831a515.83 515.83 0 01-3.173-1.537c-.49-.24-.864-.426-1.152-.57-.49-.244-.736-.366-.902-.43-1.326 1.567-3.2 2.668-5.274 2.359-2.076-.309-3.735-2.615-1.225-4.625a1.87 1.87 0 00.083-.045c.433-.247 1.77-1.006 5.72.545l.11-.218c.31-.62.66-1.317.703-1.615.05-.333.05-.333.05-.433H8.193v-.5h2.85V8.933H7.73v-.5h3.316V6.666h1.658v1.767h3.647v.5h-3.648v1.132h3.084s-.332 1.601-1.26 3.268c1.505.523 3.54 1.225 4.474 1.44V7.029C19 5.909 18.092 5 16.971 5H7.03zm5.341 9.1c-2.087 2.666-4.575 1.833-4.973 1.667-.994-.266-1.325-2.1-.1-2.666 2.09-.667 3.913.1 5.239.766-.099.133-.166.233-.166.233z" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  43: function (c, d, a) {
    (function (b) {
      function c(b) {
        v = 0 >= b.length ? void 0 : b.offset().left;
      }
      function u(a, e, c) {
        var n = b(e);
        h = e;
        g = c;
        a.each(function (a, e) {
          e = b(e);
          var c = e.width();
          e.data({ width: c });
          0 === a && n.css({ width: c, left: e.offset().left - v });
        });
        n.css({ transition: c });
      }
      a(4);
      a(6);
      var l,
        h,
        g,
        e,
        n = a(85),
        y = a.n(n),
        p = a(0),
        v = 0,
        m = {
          height: "1px",
          left: "0",
          width: "0",
          bottom: "0",
          position: "absolute",
          backgroundColor: "currentColor",
        };
      d.a = function (a, n) {
        var d =
            2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
          r = b(a);
        e = n;
        var v = y()(
          {
            css: m,
            transition: "all .3s ease",
            underlineClassName: "underline",
          },
          d
        );
        d = v.css;
        var t = v.transition;
        v = v.underlineClassName;
        r.css({ position: "relative" });
        c(r);
        (function (b, a, e) {
          a.append('\x3cdiv class\x3d"'.concat(b, '"\x3e\x3c/div\x3e'))
            .find(".".concat(b))
            .css(e);
        })(v, r, d);
        var z = r.find(".".concat(v));
        u(b(n), z, t);
        b(window).on(
          "resize",
          p.a.debounce(function () {
            setTimeout(function () {
              c(r);
              l ? F(l) : u(b(e), h, g);
            }, 100);
          }, 100)
        );
        var F = (function (a) {
          return function (e) {
            if (e && 0 < e.length) {
              l = e;
              var c = e.width();
              b(a).css({ width: c, left: e[0].offsetLeft });
            }
          };
        })(z);
        return (
          (F.destory = function () {
            b(z).remove();
          }),
          F
        );
      };
    }).call(this, a(3));
  },
  430: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-copy-circle",
      use: "icon-copy-circle-usage",
      viewBox: "0 0 28 28",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 28 28" id\x3d"icon-copy-circle"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M14 28c7.732 0 14-6.268 14-14S21.732 0 14 0 0 6.268 0 14s6.268 14 14 14zM11.832 9.206a.17.17 0 00-.001.025v7.033h7.285a.204.204 0 00.055-.006l.002-.025V9.231c0-.011 0-.02-.002-.025a.204.204 0 00-.055-.006h-7.228a.205.205 0 00-.056.006zm-.836-.865c.244-.235.565-.341.892-.341h7.228c.326 0 .648.106.892.34.246.237.365.558.365.89v7.003c0 .333-.119.654-.365.89a1.27 1.27 0 01-.892.34h-8.485V9.232c0-.333.118-.654.365-.89zM9.2 18.789v-8.232H8v9.432H17.8v-1.2H9.2z" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  431: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-email-circle",
      use: "icon-email-circle-usage",
      viewBox: "0 0 28 28",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 28 28" id\x3d"icon-email-circle"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M14 28c7.732 0 14-6.268 14-14S21.732 0 14 0 0 6.268 0 14s6.268 14 14 14zm-.798-11.77L6 10.828v7.105c0 1.08.876 1.956 1.956 1.956H19.33c1.08 0 1.956-.876 1.956-1.956v-7.106l-7.204 5.403-.44.33-.44-.33zM7.956 8c-.786 0-1.463.463-1.774 1.131l7.46 5.595 7.462-5.596A1.956 1.956 0 0019.33 8H7.956z" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  432: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-facebook-circle",
      use: "icon-facebook-circle-usage",
      viewBox: "0 0 28 28",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 28 28" id\x3d"icon-facebook-circle"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M0 14C0 6.269 6.269 0 14 0c7.732 0 14 6.267 14 14 0 7.732-6.268 14-14 14-7.731 0-14-6.268-14-14zm15.323 0l2.295-.002.306-2.894H15.32l.003-1.45c0-.754.053-1.158 1.136-1.158h1.45V5.6H15.59c-2.78 0-3.421 1.437-3.421 3.8l.003 1.704-2.1.002V14h2.1v8.4h3.149l.001-8.4z" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  433: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-facebook",
      use: "icon-facebook-usage",
      viewBox: "0 0 24 24",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 24 24" id\x3d"icon-facebook"\x3e\x3cpath d\x3d"M5.772 5h12.456c.426 0 .773.346.773.773v12.455a.773.773 0 01-.773.773h-3.562v-5.414h1.825l.274-2.12v-.001h-2.099v-1.348c0-.613.17-1.03 1.048-1.03h1.113V7.195a14.82 14.82 0 00-1.631-.083c-1.614 0-2.718.985-2.718 2.793v1.56H10.66v2.121h1.818v5.414H5.773A.772.772 0 015 18.228V5.773C5 5.346 5.346 5 5.772 5z" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  434: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-instagram-circle",
      use: "icon-instagram-circle-usage",
      viewBox: "0 0 28 28",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 28 28" id\x3d"icon-instagram-circle"\x3e\x3cpath d\x3d"M14.008 16.835c1.547 0 2.802-1.216 2.802-2.714 0-1.5-1.255-2.715-2.802-2.715-1.546 0-2.801 1.214-2.801 2.715 0 1.498 1.254 2.714 2.801 2.714zm3.174-5.35h1.577a.63.63 0 00.628-.629V9.354a.63.63 0 00-.628-.63h-1.577a.63.63 0 00-.628.63v1.502a.63.63 0 00.628.629z" /\x3e\x3cpath d\x3d"M18.347 14.273c0 2.32-1.943 4.2-4.337 4.2-2.395 0-4.337-1.88-4.337-4.2 0-.417.064-.818.18-1.198h-1.28v5.893c0 .305.248.553.554.553h9.713a.554.554 0 00.555-.553v-5.893h-1.228c.117.38.18.781.18 1.198z" /\x3e\x3cpath d\x3d"M14 0C6.28 0 0 6.28 0 14s6.28 14 14 14 14-6.28 14-14S21.72 0 14 0zm6.973 19.329c0 .984-.806 1.789-1.79 1.789H8.818c-.984 0-1.79-.805-1.79-1.79V8.965c0-.985.806-1.79 1.79-1.79h10.365c.985 0 1.79.805 1.79 1.79v10.365z" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  435: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-instagram",
      use: "icon-instagram-usage",
      viewBox: "0 0 24 24",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 24 24" id\x3d"icon-instagram"\x3e\x3cmask id\x3d"icon-instagram_a" style\x3d"mask-type:alpha" maskUnits\x3d"userSpaceOnUse" x\x3d"4" y\x3d"4" width\x3d"17" height\x3d"16"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M4.001 4h16.032v16H4V4z" fill\x3d"#fff" /\x3e\x3c/mask\x3e\x3cg mask\x3d"url(#icon-instagram_a)"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M12.017 4c-2.177 0-2.45.01-3.305.048-.853.039-1.436.174-1.946.372a3.93 3.93 0 00-1.42.923 3.92 3.92 0 00-.924 1.417c-.198.509-.334 1.09-.373 1.942-.039.853-.048 1.125-.048 3.298s.01 2.445.048 3.299c.04.851.175 1.433.373 1.941.205.526.479.973.924 1.417a3.93 3.93 0 001.42.923c.51.198 1.093.333 1.946.372.855.039 1.128.048 3.305.048 2.177 0 2.45-.01 3.305-.048.853-.039 1.436-.174 1.946-.372a3.93 3.93 0 001.42-.923c.445-.444.719-.89.924-1.417.198-.508.334-1.09.373-1.941.038-.854.048-1.126.048-3.299s-.01-2.445-.049-3.298c-.038-.852-.174-1.433-.372-1.942a3.921 3.921 0 00-.925-1.417 3.93 3.93 0 00-1.42-.923c-.51-.198-1.092-.333-1.945-.372C14.467 4.01 14.194 4 12.017 4zm0 1.441c2.14 0 2.393.009 3.238.047.782.036 1.206.166 1.489.276.374.145.641.318.922.598.28.28.454.546.6.92.109.282.24.705.275 1.485.039.844.047 1.097.047 3.233s-.008 2.39-.047 3.233c-.035.78-.166 1.203-.276 1.485-.145.373-.319.64-.6.92-.28.28-.547.453-.921.598-.283.11-.707.24-1.489.276-.845.038-1.098.046-3.239.046-2.14 0-2.394-.008-3.239-.046-.781-.036-1.206-.166-1.488-.276a2.483 2.483 0 01-.922-.598 2.478 2.478 0 01-.6-.92c-.11-.282-.24-.705-.275-1.485-.039-.844-.047-1.097-.047-3.233s.008-2.39.047-3.233c.035-.78.166-1.203.276-1.485.145-.374.319-.64.6-.92.28-.28.547-.453.92-.598.283-.11.708-.24 1.49-.276.845-.038 1.098-.047 3.238-.047z" /\x3e\x3c/g\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M12.015 14.666A2.67 2.67 0 019.343 12a2.67 2.67 0 012.672-2.666 2.67 2.67 0 012.672 2.666 2.67 2.67 0 01-2.672 2.667zm.002-6.774A4.112 4.112 0 007.9 12a4.112 4.112 0 004.117 4.108A4.112 4.112 0 0016.133 12a4.112 4.112 0 00-4.116-4.108zM17.257 7.73a.96.96 0 11-1.921-.002.96.96 0 011.921.002z" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  436: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-likee-circle",
      use: "icon-likee-circle-usage",
      viewBox: "0 0 28 28",
      content:
        '\x3csymbol fill\x3d"none" xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 28 28" id\x3d"icon-likee-circle"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M14 28c7.732 0 14-6.268 14-14S21.732 0 14 0 0 6.268 0 14s6.268 14 14 14zM8.758 15.517l-.398.371 1.863 1.739-.003.002.003.003.003-.002.003.002c1.116-1.041 2.053-1.912 2.899-2.695l-2.894 2.7.95.886.003.003.93.867.185-.173-.185.173c.922.86 1.683 1.565 1.697 1.571a.616.616 0 00.068.026.393.393 0 00.11.01h.034c.088.002.177-.081 2.473-2.226l.566-.529a390.6 390.6 0 002.973-2.791c.236-.261.432-.542.578-.831a3.499 3.499 0 00.064-3.055.77.77 0 00-.06-.12l-.009.007.008-.007-.046-.092a3.852 3.852 0 00-1.688-1.6l-.136-.066a.294.294 0 00-.029-.013l-.003-.002a4.498 4.498 0 00-1.281-.329 5.745 5.745 0 00-.838.005 4.2 4.2 0 00-2.083.815c-.142.122-.366.325-.651.585l.145-.135v-.001l-.006.006-.178-.163a4.16 4.16 0 00-.525-.419 4.13 4.13 0 00-2.31-.69c-.16 0-.32.005-.425.017a4.28 4.28 0 00-1.305.346l-.094.045c-.38.178-.808.48-1.092.769a3.704 3.704 0 00-.61.795l-.086.151.181.17-.182-.17-.062.135c-.147.322-.245.66-.295 1.024-.024.17-.027.683-.006.845.1.745.378 1.366.87 1.934l.343.352.016.015.117.111.398-.371zm1.474-1.38l.001-.002-.032-.03.031.031z" fill\x3d"#222" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  437: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-linkedin-circle",
      use: "icon-linkedin-circle-usage",
      viewBox: "0 0 28 28",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 28 28" id\x3d"icon-linkedin-circle"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M0 14C0 6.269 6.269 0 14 0c7.732 0 14 6.267 14 14 0 7.732-6.268 14-14 14-7.731 0-14-6.268-14-14zm7.585 6.216h3.208V8.987H7.585v11.23zM9.285 8.3a1.504 1.504 0 11.003-3.01 1.504 1.504 0 01-.003 3.01zm9.53 11.917h3.208v-6.845c0-3.76-2.168-4.382-3.209-4.382-1.604 0-2.75.72-3.208 1.071V8.987h-3.208v11.23h3.208v-6.944s.32-1.383 1.976-1.383c1 0 1.232.57 1.232 1.383v6.943z" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  438: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-pinterest-circle",
      use: "icon-pinterest-circle-usage",
      viewBox: "0 0 28 28",
      content:
        '\x3csymbol fill\x3d"none" xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 28 28" id\x3d"icon-pinterest-circle"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M14 28c7.732 0 14-6.268 14-14S21.732 0 14 0 0 6.268 0 14s6.268 14 14 14zM4.667 13.992c0-5.15 4.179-9.325 9.333-9.325s9.333 4.175 9.318 9.34c0 5.15-4.179 9.326-9.333 9.326a9.38 9.38 0 01-2.766-.414c.384-.622.953-1.635 1.16-2.449l.584-2.218c.3.584 1.19 1.075 2.136 1.075 2.811 0 4.839-2.587 4.839-5.803 0-3.085-2.52-5.388-5.754-5.388-4.033 0-6.168 2.702-6.168 5.641 0 1.374.73 3.07 1.897 3.615.177.085.277.047.315-.122l.09-.364c.06-.236.131-.525.171-.695a.277.277 0 00-.061-.27c-.384-.467-.691-1.327-.691-2.125 0-2.057 1.559-4.045 4.217-4.045 2.297 0 3.902 1.558 3.902 3.791 0 2.518-1.275 4.268-2.934 4.268-.914 0-1.606-.76-1.383-1.689.096-.396.222-.803.344-1.198.222-.716.432-1.396.432-1.91 0-.714-.384-1.313-1.183-1.313-.937 0-1.69.967-1.69 2.265 0 .82.277 1.381.277 1.381s-.922 3.907-1.091 4.636c-.185.806-.116 1.942-.031 2.679a9.329 9.329 0 01-5.93-8.689z" fill\x3d"#000" fill-opacity\x3d".95" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  439: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-qq",
      use: "icon-qq-usage",
      viewBox: "0 0 24 24",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 24 24" id\x3d"icon-qq"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M12.002 20.358c-1.45 0-2.782-.483-3.639-1.203-.435.129-.992.337-1.343.595-.3.22-.263.445-.209.536.238.4 4.081.255 5.19.13v-.058zM12.002 20.358c1.45 0 2.781-.483 3.638-1.203.436.129.992.337 1.344.595.3.22.263.445.209.536-.238.4-4.082.255-5.191.13v-.058z" /\x3e\x3cmask id\x3d"icon-qq_a" style\x3d"mask-type:alpha" maskUnits\x3d"userSpaceOnUse" x\x3d"6" y\x3d"4" width\x3d"12" height\x3d"8"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M6.78 4H17.22v7.719H6.78V4z" fill\x3d"#fff" /\x3e\x3c/mask\x3e\x3cg mask\x3d"url(#icon-qq_a)"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M12.01 11.719a20.268 20.268 0 004.964-.654c.155-.042.238-.118.238-.118 0-.021.01-.387.01-.576 0-3.178-1.51-6.37-5.222-6.371C8.29 4 6.78 7.193 6.78 10.37c0 .189.009.555.01.576 0 0 .067.071.19.105.6.166 2.556.65 5.012.667h.017z" /\x3e\x3c/g\x3e\x3cmask id\x3d"icon-qq_b" style\x3d"mask-type:alpha" maskUnits\x3d"userSpaceOnUse" x\x3d"5" y\x3d"12" width\x3d"14" height\x3d"9"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M5 12.8h14v7.616H5v-7.617z" fill\x3d"#fff" /\x3e\x3c/mask\x3e\x3cg mask\x3d"url(#icon-qq_b)"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M18.517 14.366a26.6 26.6 0 00-.557-1.56s-.118-.015-.178.002c-1.84.531-4.072.87-5.773.85h-.018c-1.691.02-3.908-.315-5.743-.841-.07-.02-.208-.012-.208-.012a26.65 26.65 0 00-.556 1.56c-.708 2.265-.479 3.202-.304 3.223.374.045 1.458-1.705 1.458-1.705 0 1.778 1.615 4.508 5.313 4.533h.098c3.698-.025 5.313-2.755 5.313-4.533 0 0 1.084 1.75 1.458 1.705.175-.021.404-.958-.303-3.223z" /\x3e\x3c/g\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M9.72 7.423c.026.724.457 1.294.96 1.272.503-.023.889-.629.861-1.354-.027-.725-.457-1.295-.96-1.272-.503.022-.89.628-.862 1.354zm3.6 1.272c.504.022.934-.548.961-1.272.027-.726-.358-1.332-.862-1.354-.503-.023-.933.547-.96 1.272-.028.725.358 1.331.861 1.354zm1.855 1.024c-.134-.297-1.49-.627-3.167-.627h-.018c-1.678 0-3.033.33-3.167.627a.097.097 0 00.008.099c.114.164 1.619.976 3.159.976h.018c1.54 0 3.045-.812 3.159-.976a.097.097 0 00.009-.1zm.775 3.58a21.618 21.618 0 002.01-.493l-.75-1.858s-2.236.701-5.202.721h-.017c-2.962-.02-5.195-.719-5.203-.721l-.749 1.858c.632.19 1.315.356 2.01.493a10.976 10.976 0 00-.102 2.364c.152 2.535 1.667 4.128 4.005 4.151h.095c2.338-.023 3.853-1.616 4.005-4.151.056-.93 0-1.72-.101-2.364z" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  440: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-tikTok",
      use: "icon-tikTok-usage",
      viewBox: "0 0 24 24",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 24 24" id\x3d"icon-tikTok"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M10.505 10.3v-.624a4.827 4.827 0 00-.654-.048A4.857 4.857 0 005 14.48c0 1.641.82 3.094 2.071 3.972a4.832 4.832 0 01-1.303-3.303 4.856 4.856 0 014.737-4.849z" /\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M10.619 17.364c1.193 0 2.167-.949 2.211-2.132l.004-10.563h1.93A3.66 3.66 0 0114.702 4h-2.636l-.004 10.563a2.216 2.216 0 01-2.211 2.132c-.359 0-.711-.087-1.028-.254a2.212 2.212 0 001.796.924zm7.751-9.11v-.587c-.709 0-1.403-.206-1.997-.594.521.6 1.221 1.014 1.997 1.181z" /\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M16.373 7.073a3.653 3.653 0 01-.902-2.404h-.706a3.673 3.673 0 001.608 2.404zm-6.522 5.191a2.218 2.218 0 00-1.895 3.362c.21.345.509.627.867.815a2.202 2.202 0 01-.419-1.292 2.218 2.218 0 012.216-2.216c.228 0 .447.037.653.102v-2.69a4.815 4.815 0 00-.653-.048c-.039 0-.077.002-.115.003v2.067a2.178 2.178 0 00-.654-.103z" /\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M18.37 8.254v2.049a6.27 6.27 0 01-3.668-1.18v5.357a4.857 4.857 0 01-4.85 4.851 4.82 4.82 0 01-2.78-.879A4.836 4.836 0 0010.618 20a4.857 4.857 0 004.852-4.851V9.792a6.27 6.27 0 003.667 1.18V8.335c-.264 0-.52-.028-.769-.081" /\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M14.702 14.48V9.123a6.268 6.268 0 003.667 1.18v-2.05a3.668 3.668 0 01-1.997-1.18 3.67 3.67 0 01-1.607-2.404h-1.93l-.005 10.563a2.212 2.212 0 01-4.008 1.21 2.217 2.217 0 01-.536-3.528 2.218 2.218 0 011.565-.65c.228 0 .447.037.654.103V10.3a4.856 4.856 0 00-4.737 4.849c0 1.275.496 2.436 1.303 3.303.814.573 1.785.88 2.78.88a4.857 4.857 0 004.851-4.852z" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  441: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-tiktok-circle",
      use: "icon-tiktok-circle-usage",
      viewBox: "0 0 28 28",
      content:
        '\x3csymbol fill\x3d"none" xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 28 28" id\x3d"icon-tiktok-circle"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M14 28c7.732 0 14-6.268 14-14S21.732 0 14 0 0 6.268 0 14s6.268 14 14 14zm.973-22.553h3.077c0 1.032.374 2.029 1.052 2.805a4.25 4.25 0 002.33.693v.684c.29.062.588.096.896.096V12.8a7.313 7.313 0 01-4.279-1.376v6.25c0 3.12-2.539 5.66-5.66 5.66a5.644 5.644 0 01-4.14-1.807 5.656 5.656 0 01-2.416-4.634c0-3.12 2.54-5.66 5.66-5.66.256.001.51.02.763.056v.728l.054-.002.08-.002c.255.001.51.02.762.056v3.139a2.54 2.54 0 00-.762-.12 2.588 2.588 0 00-2.585 2.586c0 .54.17 1.069.488 1.507.37.195.781.297 1.2.297a2.585 2.585 0 002.579-2.488l.005-12.323h3.075c0 .261.025.523.073.78h-2.252zm-3.48 8.86zm9.938-2.287l.001-2.39h-.001v2.39z" fill\x3d"#000" fill-opacity\x3d".95" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  442: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-twitter-circle",
      use: "icon-twitter-circle-usage",
      viewBox: "0 0 28 28",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 28 28" id\x3d"icon-twitter-circle"\x3e\x3cpath d\x3d"M14.1 12.7L10.2 7H8l5 7.1.6.9 4.2 6H20l-5.2-7.4z" /\x3e\x3cpath d\x3d"M14 0C6.3 0 0 6.3 0 14s6.3 14 14 14 14-6.3 14-14S21.7 0 14 0zm3.2 22l-4.3-6.2L7.5 22H6.1l6.1-7.1L6.1 6h4.7l4.1 5.9L20 6h1.4l-5.9 6.8 6.4 9.3h-4.7z" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  443: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-twitter",
      use: "icon-twitter-usage",
      viewBox: "0 0 24 24",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 24 24" id\x3d"icon-twitter"\x3e\x3cmask id\x3d"icon-twitter_a" style\x3d"mask-type:alpha" maskUnits\x3d"userSpaceOnUse" x\x3d"3" y\x3d"5" width\x3d"18" height\x3d"15"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M3 5h18v14.577H3V5z" fill\x3d"#fff" /\x3e\x3c/mask\x3e\x3cg mask\x3d"url(#icon-twitter_a)"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M8.66 19.577c6.794 0 10.508-5.608 10.508-10.47 0-.16-.003-.318-.01-.476A7.503 7.503 0 0021 6.726a7.393 7.393 0 01-2.12.58 3.695 3.695 0 001.623-2.037 7.417 7.417 0 01-2.345.894A3.695 3.695 0 0015.462 5a3.687 3.687 0 00-3.597 4.519 10.497 10.497 0 01-7.612-3.845 3.674 3.674 0 001.143 4.913 3.676 3.676 0 01-1.673-.46v.046a3.685 3.685 0 002.962 3.608 3.716 3.716 0 01-1.667.063 3.695 3.695 0 003.45 2.556 7.428 7.428 0 01-4.587 1.575 7.56 7.56 0 01-.881-.05 10.482 10.482 0 005.66 1.652z" /\x3e\x3c/g\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  444: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-wechat",
      use: "icon-wechat-usage",
      viewBox: "0 0 24 24",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 24 24" id\x3d"icon-wechat"\x3e\x3cpath d\x3d"M16.337 9.023a7.713 7.713 0 00-.577-.021c-3.484 0-6.308 2.337-6.308 5.22 0 .594.12 1.165.341 1.697a8.819 8.819 0 01-.58.02c-.947 0-1.555-.168-2.384-.443-.213-.061-.915.289-2.108 1.05-.088.043-.177.035-.266-.024-.09-.059-.113-.149-.072-.27.321-1.031.413-1.604.274-1.717C2.963 13.442 2 11.884 2 9.969 2 6.672 5.23 4 9.214 4c3.595 0 6.575 2.176 7.123 5.023zm-9.508.035c.56 0 1.013-.448 1.013-1s-.453-1-1.013-1c-.56 0-1.014.448-1.014 1s.454 1 1.014 1zm4.829 0c.56 0 1.014-.448 1.014-1s-.454-1-1.014-1-1.013.448-1.013 1 .453 1 1.013 1z" /\x3e\x3cpath d\x3d"M16.02 19.468c.792 0 1.301-.14 1.994-.37.178-.052.766.242 1.764.88.073.035.147.028.222-.02.075-.05.095-.126.06-.227-.269-.864-.345-1.344-.23-1.439C21.249 17.377 22 16.104 22 14.5c0-2.762-2.648-5.033-5.98-5.033-3.333 0-6.034 2.239-6.034 5 0 2.762 2.701 5.001 6.034 5.001zm1.994-5.764a.843.843 0 01-.847-.838c0-.462.38-.837.847-.837.468 0 .848.375.848.837 0 .463-.38.838-.848.838zm-4.039 0a.843.843 0 01-.847-.838c0-.462.38-.837.847-.837.468 0 .848.375.848.837 0 .463-.38.838-.848.838z" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  445: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-weibo-circle",
      use: "icon-weibo-circle-usage",
      viewBox: "0 0 28 28",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 28 28" id\x3d"icon-weibo-circle"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M14 28c7.732 0 14-6.268 14-14S21.732 0 14 0 0 6.268 0 14s6.268 14 14 14zm3.053-19.911c1.451-.29 3.024.133 4.09 1.245 1.066 1.11 1.355 2.623.898 3.948v.002c-.105.306-.455.474-.782.375-.327-.099-.506-.427-.4-.735a2.744 2.744 0 00-.639-2.81c-.757-.789-1.874-1.09-2.907-.884-.336.068-.665-.132-.737-.448-.071-.314.141-.626.477-.693zm-2.573 6.006c1.563.429 2.518 1.37 2.518 2.487 0 1.243-1.112 2.361-2.916 2.957-.965.313-2.76.376-3.64.136-1.668-.47-2.612-1.39-2.612-2.57 0-.648.283-1.213.902-1.787.577-.543 1.017-.805 1.867-1.087 1.28-.428 2.654-.48 3.881-.136zm-2.916-4.043c-1.175.418-2.308 1.222-3.525 2.518-2.884 3.05-2.696 5.955.483 7.501 3.304 1.609 7.752 1.076 10.175-1.222 1.815-1.714 1.595-3.866-.472-4.597-.367-.126-.482-.22-.43-.335.189-.46.252-.992.147-1.306-.325-.992-1.51-1.222-3.273-.627l-.703.24.063-.7c.074-.825-.105-1.274-.598-1.525-.409-.209-1.196-.188-1.867.053zm-1.849 7.391c0-.959.552-1.726 1.583-2.226.613-.298 1.594-.341 2.176-.085.725.309 1.338 1.171 1.348 1.896 0 .884-.582 1.79-1.47 2.28-.695.372-1.84.404-2.462.052-.807-.447-1.175-1.043-1.175-1.917zm3.25-.73c0 .196-.18.356-.4.356-.221 0-.4-.16-.4-.357 0-.196.179-.356.4-.356.22 0 .4.16.4.356zm-1.038.448c.076.068.13.233.13.378 0 .486-.915.884-1.285.554-.207-.184-.152-.641.087-.855.24-.213.86-.262 1.068-.077zm7.736-6.423c-.667-.702-1.65-.97-2.557-.784a.656.656 0 00-.529.776c.08.352.446.576.814.5.443-.09.926.04 1.25.383.326.344.415.811.274 1.221-.115.342.08.71.443.823.362.109.748-.077.866-.421a2.458 2.458 0 00-.561-2.498z" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  446: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-weibo",
      use: "icon-weibo-usage",
      viewBox: "0 0 24 24",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 24 24" id\x3d"icon-weibo"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M12.438 11.503c1.924.527 3.098 1.684 3.098 3.06 0 1.53-1.368 2.906-3.589 3.64-1.188.385-3.395.462-4.48.167-2.053-.58-3.215-1.71-3.215-3.164 0-.797.349-1.492 1.11-2.199.71-.668 1.253-.99 2.299-1.337 1.575-.527 3.266-.591 4.777-.167zm-3.59-4.976C7.402 7.04 6.008 8.03 4.51 9.626c-3.55 3.755-3.318 7.33.594 9.232 4.067 1.98 9.541 1.325 12.524-1.504 2.233-2.109 1.962-4.758-.581-5.658-.452-.154-.594-.27-.53-.411.233-.566.31-1.222.181-1.608-.4-1.221-1.86-1.504-4.028-.771l-.865.295.077-.861c.09-1.016-.129-1.569-.736-1.878-.503-.257-1.472-.231-2.298.065z" /\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M8.521 12.883c-1.27.616-1.948 1.56-1.948 2.74 0 1.075.452 1.809 1.445 2.36.767.432 2.175.393 3.03-.066 1.094-.603 1.81-1.717 1.81-2.806-.012-.891-.767-1.953-1.659-2.333-.717-.315-1.923-.263-2.678.104z" /\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M10.078 15.163c.273 0 .493-.197.493-.439s-.22-.438-.493-.438c-.272 0-.493.196-.493.438s.221.439.493.439zm-.624.578c0-.179-.067-.382-.16-.466-.255-.227-1.02-.167-1.314.096-.295.263-.362.825-.108 1.052.456.406 1.582-.084 1.582-.682z" fill\x3d"#fff" /\x3e\x3cpath d\x3d"M20.637 5.641c-1.312-1.368-3.247-1.89-5.033-1.532-.413.083-.675.467-.587.853.088.389.494.635.907.552 1.27-.254 2.646.117 3.578 1.089.931.972 1.185 2.296.785 3.457-.13.379.091.783.494.905.402.122.832-.085.962-.461V10.5c.562-1.63.207-3.494-1.106-4.86z" /\x3e\x3cpath d\x3d"M18.816 7.37c-.821-.865-2.032-1.195-3.147-.966-.456.09-.746.521-.65.955.098.434.548.71 1 .616.546-.111 1.14.05 1.54.47.4.424.51 1 .337 1.504-.142.42.099.875.545 1.012.446.135.92-.094 1.065-.518.35-1.032.13-2.21-.69-3.074z" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  447: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-weixin-circle",
      use: "icon-weixin-circle-usage",
      viewBox: "0 0 28 28",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 28 28" id\x3d"icon-weixin-circle"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M14 28c7.732 0 14-6.268 14-14S21.732 0 14 0 0 6.268 0 14s6.268 14 14 14zm2.696-16.623c.165 0 .329.006.49.018C16.721 8.905 14.187 7 11.131 7 7.745 7 5 9.338 5 12.223c0 1.675.819 3.039 2.259 3.995.117.1.04.6-.233 1.503-.036.106-.015.184.06.236.076.052.152.058.226.02 1.014-.665 1.612-.971 1.792-.918.705.24 1.222.387 2.027.387a7.3 7.3 0 00.493-.017 3.955 3.955 0 01-.29-1.485c0-2.523 2.4-4.568 5.362-4.568zm-6.73-.826a.868.868 0 01-.862.874.868.868 0 01-.86-.874c0-.483.385-.875.86-.875.476 0 .862.392.862.875zm4.104 0a.868.868 0 01-.861.874.868.868 0 01-.861-.874c0-.483.385-.875.861-.875s.861.392.861.875zm4.542 9.66c-.59.2-1.022.324-1.695.324-2.833 0-5.129-1.96-5.129-4.376 0-2.417 2.296-4.376 5.128-4.376 2.833 0 5.084 1.988 5.084 4.405 0 1.403-.64 2.517-1.844 3.318-.099.083-.034.503.194 1.259.03.088.013.154-.05.197-.064.044-.127.05-.19.018-.848-.558-1.347-.814-1.498-.77zm-.72-5.453c0 .405.322.733.72.733.398 0 .72-.328.72-.733a.727.727 0 00-.72-.733.727.727 0 00-.72.733zm-3.434 0c0 .405.323.733.72.733.399 0 .721-.328.721-.733a.727.727 0 00-.72-.733.727.727 0 00-.72.733z" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  448: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-whatsApp",
      use: "icon-whatsApp-usage",
      viewBox: "0 0 24 24",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 24 24" id\x3d"icon-whatsApp"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M12.034 19.939h-.004a7.96 7.96 0 01-3.807-.97L4 20.077l1.13-4.128a7.952 7.952 0 01-1.063-3.983C4.069 7.574 7.642 4 12.033 4c2.132 0 4.132.83 5.636 2.336A7.918 7.918 0 0120 11.972c-.002 4.392-3.574 7.965-7.966 7.967zm3.741-6.252c.14.068.233.113.273.18.05.083.05.481-.116.946-.166.465-.961.89-1.344.947a2.728 2.728 0 01-1.254-.08c-.289-.09-.66-.213-1.134-.418-1.866-.806-3.128-2.615-3.366-2.957a2.297 2.297 0 00-.035-.05l-.001-.001c-.106-.14-.812-1.083-.812-2.057 0-.917.45-1.398.658-1.619l.039-.042c.182-.2.398-.249.53-.249a7.9 7.9 0 01.382.007h.045c.116 0 .26-.001.403.342l.22.533c.171.417.36.878.394.945.05.1.083.216.017.348l-.028.057c-.05.102-.087.177-.171.276-.034.038-.068.08-.102.122a3.307 3.307 0 01-.197.226c-.1.1-.204.207-.087.406.116.2.515.852 1.107 1.38.636.567 1.189.807 1.47.928.054.024.098.043.13.06.2.1.316.082.432-.05.116-.133.498-.582.63-.78.133-.2.266-.167.448-.1.183.066 1.161.547 1.36.647l.11.053z" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  449: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-youtube-circle",
      use: "icon-youtube-circle-usage",
      viewBox: "0 0 24 24",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 24 24" id\x3d"icon-youtube-circle"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12c0-6.628-5.373-12-12-12zm7.372 14.687c-.081.999-.839 2.274-1.9 2.458-3.395.263-7.424.231-10.943 0-1.098-.138-1.82-1.46-1.9-2.458-.172-2.097-.172-3.291 0-5.388.08-.998.82-2.313 1.9-2.433 3.478-.293 7.527-.23 10.942 0 1.224.045 1.82 1.303 1.9 2.302.17 2.097.17 3.422 0 5.519zM15 12l-4.5 3V9l4.5 3z" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  450: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-youtube",
      use: "icon-youtube-usage",
      viewBox: "0 0 24 24",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 24 24" id\x3d"icon-youtube"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M4.817 5.224a2.775 2.775 0 00-2.642 2.591C2.087 9.17 2 10.835 2 12.143c0 1.307.087 2.973.175 4.328a2.776 2.776 0 002.642 2.59c2.049.102 4.977.225 7.183.225 2.206 0 5.134-.123 7.183-.224a2.776 2.776 0 002.642-2.591c.088-1.354.175-3.02.175-4.328 0-1.308-.087-2.974-.175-4.328a2.776 2.776 0 00-2.642-2.591C17.134 5.122 14.206 5 12 5c-2.206 0-5.134.122-7.183.224zm10.755 6.918L9.857 15V9.285l5.715 2.857z" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  451: function (c, d, a) {
    a.r(d);
    c = a(1);
    c = a.n(c);
    var b = a(2);
    a = a.n(b);
    c = new c.a({
      id: "icon-video-play",
      use: "icon-video-play-usage",
      viewBox: "0 0 16 16",
      content:
        '\x3csymbol fill\x3d"none" xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 16 16" id\x3d"icon-video-play"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M2 8a6 6 0 1012 0A6 6 0 002 8zm4.5-1.595v3.19a.75.75 0 001.166.625l2.396-1.595a.75.75 0 000-1.25L7.666 5.782a.75.75 0 00-1.166.624z" fill\x3d"currentColor" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
    d.default = c;
  },
  452: function (c, d, a) {
    c = a(34);
    a(208);
    a(456);
    a(490);
    a(492);
    a(50);
    a(493);
    a(494);
    a(495);
    a(497);
    a(498);
    a(499);
    a(504);
    a(505);
    a(507);
    a(511);
    a(513);
    a(515);
    a(517);
    a(520);
    a(522);
    a(524);
    a(526);
    a(528);
    a(529);
    a(531);
    a(533);
    a(535);
    a(537);
    a(539);
    a(546);
    a(548);
    a(624);
    a(803);
    a(636);
    a(637);
    a(639);
    a(641);
    a(644);
    a(647);
    a(648);
    a(650);
    c.VUE_SITE_COMPONENTS = c.VUE_SITE_COMPONENTS || [];
  },
  456: function (c, d, a) {
    a(135);
    c = a(0);
    d = a(32);
    d = a.n(d);
    a = a(54);
    window.opsiteBase = {};
    window.opsiteBase.UIUtils = c.a;
    window.opsiteBase.UIUtils.aesEncrypt = a.d;
    window.opsiteBase.UIUtils.aesDecrypt = a.c;
    window.opsiteBase.UIUtils.aesCBCEncrypt = a.b;
    window.opsiteBase.UIUtils.aesCBCDecrypt = a.a;
    window.opsiteBase.Cookies = d.a;
  },
  490: function (c, d, a) {
    (function (b) {
      a(16);
      a(46);
      a(31);
      [].map &&
        0 ==
          document
            .createElement("canvas")
            .toDataURL("image/webp")
            .indexOf("data:image/webp") &&
        b("img[data-src-webp]").each(function () {
          "true" == b(this).attr("data-src-webp") &&
            b(this).attr("data-src") &&
            b(this).attr(
              "data-src",
              b(this).attr("data-src").trim() + ".thumb.webp"
            );
        });
    }).call(this, a(3));
  },
  493: function (c, d, a) {
    (function (b) {
      b.fn.scrollUnique = function () {
        return b(this).each(function () {
          var a = "mousewheel";
          void 0 !== document.mozHidden && (a = "DOMMouseScroll");
          b(this).on(a, function (b) {
            var a = this.scrollTop,
              c = this.scrollHeight,
              g = this.clientHeight,
              e = b.originalEvent.wheelDelta
                ? b.originalEvent.wheelDelta
                : -(b.originalEvent.detail || 0);
            ((0 < e && a <= e) || (0 > e && c - g - a <= -1 * e)) &&
              ((this.scrollTop = 0 < e ? 0 : c), b.preventDefault());
          });
        });
      };
      b.extend({
        trigger: function (a) {
          var c;
          return (
            (c =
              a && "*" !== a
                ? '[data-trigger*\x3d"'.concat(a, '"]')
                : "[data-trigger]"),
            b(c)
          );
        },
      });
    }).call(this, a(3));
  },
  494: function (c, d, a) {},
  495: function (c, d, a) {
    (function (b, c) {
      function d(b) {
        return (
          (d =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (b) {
                  return typeof b;
                }
              : function (b) {
                  return b &&
                    "function" == typeof Symbol &&
                    b.constructor === Symbol &&
                    b !== Symbol.prototype
                    ? "symbol"
                    : typeof b;
                }),
          d(b)
        );
      }
      a(38);
      a(39);
      a(90);
      a(62);
      a(4);
      a(16);
      a(42);
      a(49);
      a(101);
      a(70);
      a(9);
      a(66);
      a(7);
      a(37);
      a(57);
      a(47);
      a(6);
      var l = function (b) {
        var a = window.Slick || {};
        (a = (function () {
          var a = 0;
          return function (e, c) {
            this.defaults = {
              accessibility: !0,
              adaptiveHeight: !1,
              appendArrows: b(e),
              appendDots: b(e),
              arrows: !0,
              asNavFor: null,
              prevArrow:
                '\x3cbutton class\x3d"slick-prev" aria-label\x3d"Previous" type\x3d"button"\x3ePrevious\x3c/button\x3e',
              nextArrow:
                '\x3cbutton class\x3d"slick-next" aria-label\x3d"Next" type\x3d"button"\x3eNext\x3c/button\x3e',
              autoplay: !1,
              autoplaySpeed: 3e3,
              centerMode: !1,
              centerPadding: "50px",
              cssEase: "ease",
              customPaging: function (a, e) {
                return b('\x3cbutton type\x3d"button" /\x3e').text(e + 1);
              },
              dots: !1,
              dotsClass: "slick-dots",
              draggable: !0,
              easing: "linear",
              edgeFriction: 0.35,
              fade: !1,
              focusOnSelect: !1,
              focusOnChange: !1,
              infinite: !0,
              initialSlide: 0,
              lazyLoad: "ondemand",
              mobileFirst: !1,
              pauseOnHover: !0,
              pauseOnFocus: !0,
              pauseOnDotsHover: !1,
              respondTo: "window",
              responsive: null,
              rows: 1,
              rtl: !1,
              slide: "",
              slidesPerRow: 1,
              slidesToShow: 1,
              slidesToScroll: 1,
              speed: 500,
              swipe: !0,
              swipeToSlide: !1,
              touchMove: !0,
              touchThreshold: 5,
              useCSS: !0,
              useTransform: !0,
              variableWidth: !1,
              vertical: !1,
              verticalSwiping: !1,
              waitForAnimate: !0,
              zIndex: 1e3,
            };
            this.initials = {
              animating: !1,
              dragging: !1,
              autoPlayTimer: null,
              currentDirection: 0,
              currentLeft: null,
              currentSlide: 0,
              direction: 1,
              $dots: null,
              listWidth: null,
              listHeight: null,
              loadIndex: 0,
              $nextArrow: null,
              $prevArrow: null,
              scrolling: !1,
              slideCount: null,
              slideWidth: null,
              $slideTrack: null,
              $slides: null,
              sliding: !1,
              slideOffset: 0,
              swipeLeft: null,
              swiping: !1,
              $list: null,
              touchObject: {},
              transformsEnabled: !1,
              unslicked: !1,
            };
            b.extend(this, this.initials);
            this.animProp = this.animType = this.activeBreakpoint = null;
            this.breakpoints = [];
            this.breakpointSettings = [];
            this.interrupted = this.focussed = this.cssTransitions = !1;
            this.hidden = "hidden";
            this.paused = !0;
            this.respondTo = this.positionProp = null;
            this.rowCount = 1;
            this.shouldClick = !0;
            this.$slider = b(e);
            this.transitionType = this.transformType = this.$slidesCache = null;
            this.visibilityChange = "visibilitychange";
            this.windowWidth = 0;
            this.windowTimer = null;
            e = b(e).data("slick") || {};
            this.options = b.extend({}, this.defaults, c, e);
            this.currentSlide = this.options.initialSlide;
            this.originalSettings = this.options;
            void 0 !== document.mozHidden
              ? ((this.hidden = "mozHidden"),
                (this.visibilityChange = "mozvisibilitychange"))
              : void 0 !== document.webkitHidden &&
                ((this.hidden = "webkitHidden"),
                (this.visibilityChange = "webkitvisibilitychange"));
            this.autoPlay = b.proxy(this.autoPlay, this);
            this.autoPlayClear = b.proxy(this.autoPlayClear, this);
            this.autoPlayIterator = b.proxy(this.autoPlayIterator, this);
            this.changeSlide = b.proxy(this.changeSlide, this);
            this.clickHandler = b.proxy(this.clickHandler, this);
            this.selectHandler = b.proxy(this.selectHandler, this);
            this.setPosition = b.proxy(this.setPosition, this);
            this.swipeHandler = b.proxy(this.swipeHandler, this);
            this.dragHandler = b.proxy(this.dragHandler, this);
            this.keyHandler = b.proxy(this.keyHandler, this);
            this.instanceUid = a++;
            this.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
            this.registerBreakpoints();
            this.init(!0);
          };
        })()).prototype.activateADA = function () {
          this.$slideTrack
            .find(".slick-active")
            .attr({ "aria-hidden": "false" })
            .find("a, input, button, select")
            .attr({ tabindex: "0" });
        };
        a.prototype.addSlide = a.prototype.slickAdd = function (a, c, g) {
          if ("boolean" == typeof c) (g = c), (c = null);
          else if (0 > c || c >= this.slideCount) return !1;
          this.unload();
          "number" == typeof c
            ? 0 === c && 0 === this.$slides.length
              ? b(a).appendTo(this.$slideTrack)
              : g
              ? b(a).insertBefore(this.$slides.eq(c))
              : b(a).insertAfter(this.$slides.eq(c))
            : !0 === g
            ? b(a).prependTo(this.$slideTrack)
            : b(a).appendTo(this.$slideTrack);
          this.$slides = this.$slideTrack.children(this.options.slide);
          this.$slideTrack.children(this.options.slide).detach();
          this.$slideTrack.append(this.$slides);
          this.$slides.each(function (a, e) {
            b(e).attr("data-slick-index", a);
          });
          this.$slidesCache = this.$slides;
          this.reinit();
        };
        a.prototype.animateHeight = function () {
          if (
            1 === this.options.slidesToShow &&
            !0 === this.options.adaptiveHeight &&
            !1 === this.options.vertical
          ) {
            var b = this.$slides.eq(this.currentSlide).outerHeight(!0);
            this.$list.animate({ height: b }, this.options.speed);
          }
        };
        a.prototype.animateSlide = function (a, c) {
          var e = {},
            g = this;
          g.animateHeight();
          !0 === g.options.rtl && !1 === g.options.vertical && (a = -a);
          !1 === g.transformsEnabled
            ? !1 === g.options.vertical
              ? g.$slideTrack.animate(
                  { left: a },
                  g.options.speed,
                  g.options.easing,
                  c
                )
              : g.$slideTrack.animate(
                  { top: a },
                  g.options.speed,
                  g.options.easing,
                  c
                )
            : !1 === g.cssTransitions
            ? (!0 === g.options.rtl && (g.currentLeft = -g.currentLeft),
              b({ animStart: g.currentLeft }).animate(
                { animStart: a },
                {
                  duration: g.options.speed,
                  easing: g.options.easing,
                  step: function (b) {
                    b = Math.ceil(b);
                    !1 === g.options.vertical
                      ? ((e[g.animType] = "translate(" + b + "px, 0px)"),
                        g.$slideTrack.css(e))
                      : ((e[g.animType] = "translate(0px," + b + "px)"),
                        g.$slideTrack.css(e));
                  },
                  complete: function () {
                    c && c.call();
                  },
                }
              ))
            : (g.applyTransition(),
              (a = Math.ceil(a)),
              !1 === g.options.vertical
                ? (e[g.animType] = "translate3d(" + a + "px, 0px, 0px)")
                : (e[g.animType] = "translate3d(0px," + a + "px, 0px)"),
              g.$slideTrack.css(e),
              c &&
                setTimeout(function () {
                  g.disableTransition();
                  c.call();
                }, g.options.speed));
        };
        a.prototype.getNavTarget = function () {
          var a = this.options.asNavFor;
          return a && null !== a && (a = b(a).not(this.$slider)), a;
        };
        a.prototype.asNavFor = function (a) {
          var c = this.getNavTarget();
          null !== c &&
            "object" == d(c) &&
            c.each(function () {
              var c = b(this).slick("getSlick");
              c.unslicked || c.slideHandler(a, !0);
            });
        };
        a.prototype.applyTransition = function (b) {
          var a = {};
          !1 === this.options.fade
            ? (a[this.transitionType] =
                this.transformType +
                " " +
                this.options.speed +
                "ms " +
                this.options.cssEase)
            : (a[this.transitionType] =
                "opacity " + this.options.speed + "ms " + this.options.cssEase);
          !1 === this.options.fade
            ? this.$slideTrack.css(a)
            : this.$slides.eq(b).css(a);
        };
        a.prototype.autoPlay = function () {
          this.autoPlayClear();
          this.slideCount > this.options.slidesToShow &&
            (this.autoPlayTimer = setInterval(
              this.autoPlayIterator,
              this.options.autoplaySpeed
            ));
        };
        a.prototype.autoPlayClear = function () {
          this.autoPlayTimer && clearInterval(this.autoPlayTimer);
        };
        a.prototype.autoPlayIterator = function () {
          var b = this.currentSlide + this.options.slidesToScroll;
          this.paused ||
            this.interrupted ||
            this.focussed ||
            (!1 === this.options.infinite &&
              (1 === this.direction &&
              this.currentSlide + 1 === this.slideCount - 1
                ? (this.direction = 0)
                : 0 === this.direction &&
                  ((b = this.currentSlide - this.options.slidesToScroll),
                  0 == this.currentSlide - 1 && (this.direction = 1))),
            this.slideHandler(b));
        };
        a.prototype.buildArrows = function () {
          !0 === this.options.arrows &&
            ((this.$prevArrow = b(this.options.prevArrow).addClass(
              "slick-arrow"
            )),
            (this.$nextArrow = b(this.options.nextArrow).addClass(
              "slick-arrow"
            )),
            this.slideCount > this.options.slidesToShow
              ? (this.$prevArrow
                  .removeClass("slick-hidden")
                  .removeAttr("aria-hidden tabindex"),
                this.$nextArrow
                  .removeClass("slick-hidden")
                  .removeAttr("aria-hidden tabindex"),
                this.htmlExpr.test(this.options.prevArrow) &&
                  this.$prevArrow.prependTo(this.options.appendArrows),
                this.htmlExpr.test(this.options.nextArrow) &&
                  this.$nextArrow.appendTo(this.options.appendArrows),
                !0 !== this.options.infinite &&
                  this.$prevArrow
                    .addClass("slick-disabled")
                    .attr("aria-disabled", "true"))
              : this.$prevArrow
                  .add(this.$nextArrow)
                  .addClass("slick-hidden")
                  .attr({ "aria-disabled": "true", tabindex: "-1" }));
        };
        a.prototype.buildDots = function () {
          var a;
          if (!0 === this.options.dots) {
            this.$slider.addClass("slick-dotted");
            var c = b("\x3cul /\x3e").addClass(this.options.dotsClass);
            for (a = 0; a <= this.getDotCount(); a += 1)
              c.append(
                b("\x3cli /\x3e").append(
                  this.options.customPaging.call(this, this, a)
                )
              );
            this.$dots = c.appendTo(this.options.appendDots);
            this.$dots.find("li").first().addClass("slick-active");
          }
        };
        a.prototype.buildOut = function () {
          this.$slides = this.$slider
            .children(this.options.slide + ":not(.slick-cloned)")
            .addClass("slick-slide");
          this.slideCount = this.$slides.length;
          this.$slides.each(function (a, c) {
            b(c)
              .attr("data-slick-index", a)
              .data("originalStyling", b(c).attr("style") || "");
          });
          this.$slider.addClass("slick-slider");
          this.$slideTrack =
            0 === this.slideCount
              ? b('\x3cdiv class\x3d"slick-track"/\x3e').appendTo(this.$slider)
              : this.$slides
                  .wrapAll('\x3cdiv class\x3d"slick-track"/\x3e')
                  .parent();
          this.$list = this.$slideTrack
            .wrap('\x3cdiv class\x3d"slick-list"/\x3e')
            .parent();
          this.$slideTrack.css("opacity", 0);
          (!0 !== this.options.centerMode &&
            !0 !== this.options.swipeToSlide) ||
            (this.options.slidesToScroll = 1);
          b("img[data-lazy]", this.$slider)
            .not("[src]")
            .addClass("slick-loading");
          this.setupInfinite();
          this.buildArrows();
          this.buildDots();
          this.updateDots();
          this.setSlideClasses(
            "number" == typeof this.currentSlide ? this.currentSlide : 0
          );
          !0 === this.options.draggable && this.$list.addClass("draggable");
        };
        a.prototype.buildRows = function () {
          var b, a, c, g, h;
          if (
            ((g = document.createDocumentFragment()),
            (h = this.$slider.children()),
            1 < this.options.rows)
          ) {
            var d = this.options.slidesPerRow * this.options.rows;
            var l = Math.ceil(h.length / d);
            for (b = 0; b < l; b++) {
              var r = document.createElement("div");
              for (a = 0; a < this.options.rows; a++) {
                var x = document.createElement("div");
                for (c = 0; c < this.options.slidesPerRow; c++) {
                  var u = b * d + (a * this.options.slidesPerRow + c);
                  h.get(u) && x.appendChild(h.get(u));
                }
                r.appendChild(x);
              }
              g.appendChild(r);
            }
            this.$slider.empty().append(g);
            this.$slider
              .children()
              .children()
              .children()
              .css({
                width: 100 / this.options.slidesPerRow + "%",
                display: "inline-block",
              });
          }
        };
        a.prototype.checkResponsive = function (a, c) {
          var e,
            g,
            n = !1;
          var h = this.$slider.width();
          var d = window.innerWidth || b(window).width();
          if (
            ("window" === this.respondTo
              ? (g = d)
              : "slider" === this.respondTo
              ? (g = h)
              : "min" === this.respondTo && (g = Math.min(d, h)),
            this.options.responsive &&
              this.options.responsive.length &&
              null !== this.options.responsive)
          ) {
            for (e in ((h = null), this.breakpoints))
              this.breakpoints.hasOwnProperty(e) &&
                (!1 === this.originalSettings.mobileFirst
                  ? g < this.breakpoints[e] && (h = this.breakpoints[e])
                  : g > this.breakpoints[e] && (h = this.breakpoints[e]));
            null !== h
              ? null !== this.activeBreakpoint
                ? (h !== this.activeBreakpoint || c) &&
                  ((this.activeBreakpoint = h),
                  "unslick" === this.breakpointSettings[h]
                    ? this.unslick(h)
                    : ((this.options = b.extend(
                        {},
                        this.originalSettings,
                        this.breakpointSettings[h]
                      )),
                      !0 === a &&
                        (this.currentSlide = this.options.initialSlide),
                      this.refresh(a)),
                  (n = h))
                : ((this.activeBreakpoint = h),
                  "unslick" === this.breakpointSettings[h]
                    ? this.unslick(h)
                    : ((this.options = b.extend(
                        {},
                        this.originalSettings,
                        this.breakpointSettings[h]
                      )),
                      !0 === a &&
                        (this.currentSlide = this.options.initialSlide),
                      this.refresh(a)),
                  (n = h))
              : null !== this.activeBreakpoint &&
                ((this.activeBreakpoint = null),
                (this.options = this.originalSettings),
                !0 === a && (this.currentSlide = this.options.initialSlide),
                this.refresh(a),
                (n = h));
            a || !1 === n || this.$slider.trigger("breakpoint", [this, n]);
          }
        };
        a.prototype.changeSlide = function (a, c) {
          var e;
          var g = b(a.currentTarget);
          switch (
            (g.is("a") && a.preventDefault(),
            g.is("li") || (g = g.closest("li")),
            (e =
              0 != this.slideCount % this.options.slidesToScroll
                ? 0
                : (this.slideCount - this.currentSlide) %
                  this.options.slidesToScroll),
            a.data.message)
          ) {
            case "previous":
              g =
                0 === e
                  ? this.options.slidesToScroll
                  : this.options.slidesToShow - e;
              this.slideCount > this.options.slidesToShow &&
                this.slideHandler(this.currentSlide - g, !1, c);
              break;
            case "next":
              g = 0 === e ? this.options.slidesToScroll : e;
              this.slideCount > this.options.slidesToShow &&
                this.slideHandler(this.currentSlide + g, !1, c);
              break;
            case "index":
              (a =
                0 === a.data.index
                  ? 0
                  : a.data.index || g.index() * this.options.slidesToScroll),
                this.slideHandler(this.checkNavigable(a), !1, c),
                g.children().trigger("focus");
          }
        };
        a.prototype.checkNavigable = function (b) {
          var a, c;
          if (((c = 0), b > (a = this.getNavigableIndexes())[a.length - 1]))
            b = a[a.length - 1];
          else
            for (var e in a) {
              if (b < a[e]) {
                b = c;
                break;
              }
              c = a[e];
            }
          return b;
        };
        a.prototype.cleanUpEvents = function () {
          this.options.dots &&
            null !== this.$dots &&
            (b("li", this.$dots)
              .off("click.slick", this.changeSlide)
              .off("mouseenter.slick", b.proxy(this.interrupt, this, !0))
              .off("mouseleave.slick", b.proxy(this.interrupt, this, !1)),
            !0 === this.options.accessibility &&
              this.$dots.off("keydown.slick", this.keyHandler));
          this.$slider.off("focus.slick blur.slick");
          !0 === this.options.arrows &&
            this.slideCount > this.options.slidesToShow &&
            (this.$prevArrow &&
              this.$prevArrow.off("click.slick", this.changeSlide),
            this.$nextArrow &&
              this.$nextArrow.off("click.slick", this.changeSlide),
            !0 === this.options.accessibility &&
              (this.$prevArrow &&
                this.$prevArrow.off("keydown.slick", this.keyHandler),
              this.$nextArrow &&
                this.$nextArrow.off("keydown.slick", this.keyHandler)));
          this.$list.off("touchstart.slick mousedown.slick", this.swipeHandler);
          this.$list.off("touchmove.slick mousemove.slick", this.swipeHandler);
          this.$list.off("touchend.slick mouseup.slick", this.swipeHandler);
          this.$list.off(
            "touchcancel.slick mouseleave.slick",
            this.swipeHandler
          );
          this.$list.off("click.slick", this.clickHandler);
          b(document).off(this.visibilityChange, this.visibility);
          this.cleanUpSlideEvents();
          !0 === this.options.accessibility &&
            this.$list.off("keydown.slick", this.keyHandler);
          !0 === this.options.focusOnSelect &&
            b(this.$slideTrack)
              .children()
              .off("click.slick", this.selectHandler);
          b(window).off(
            "orientationchange.slick.slick-" + this.instanceUid,
            this.orientationChange
          );
          b(window).off("resize.slick.slick-" + this.instanceUid, this.resize);
          b("[draggable!\x3dtrue]", this.$slideTrack).off(
            "dragstart",
            this.preventDefault
          );
          b(window).off(
            "load.slick.slick-" + this.instanceUid,
            this.setPosition
          );
        };
        a.prototype.cleanUpSlideEvents = function () {
          this.$list.off("mouseenter.slick", b.proxy(this.interrupt, this, !0));
          this.$list.off("mouseleave.slick", b.proxy(this.interrupt, this, !1));
        };
        a.prototype.cleanUpRows = function () {
          var b;
          1 < this.options.rows &&
            ((b = this.$slides.children().children()).removeAttr("style"),
            this.$slider.empty().append(b));
        };
        a.prototype.clickHandler = function (b) {
          !1 === this.shouldClick &&
            (b.stopImmediatePropagation(),
            b.stopPropagation(),
            b.preventDefault());
        };
        a.prototype.destroy = function (a) {
          this.autoPlayClear();
          this.touchObject = {};
          this.cleanUpEvents();
          b(".slick-cloned", this.$slider).detach();
          this.$dots && this.$dots.remove();
          this.$prevArrow &&
            this.$prevArrow.length &&
            (this.$prevArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            this.htmlExpr.test(this.options.prevArrow) &&
              this.$prevArrow.remove());
          this.$nextArrow &&
            this.$nextArrow.length &&
            (this.$nextArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            this.htmlExpr.test(this.options.nextArrow) &&
              this.$nextArrow.remove());
          this.$slides &&
            (this.$slides
              .removeClass(
                "slick-slide slick-active slick-center slick-visible slick-current"
              )
              .removeAttr("aria-hidden")
              .removeAttr("data-slick-index")
              .each(function () {
                b(this).attr("style", b(this).data("originalStyling"));
              }),
            this.$slideTrack.children(this.options.slide).detach(),
            this.$slideTrack.detach(),
            this.$list.detach(),
            this.$slider.append(this.$slides));
          this.cleanUpRows();
          this.$slider.removeClass("slick-slider");
          this.$slider.removeClass("slick-initialized");
          this.$slider.removeClass("slick-dotted");
          this.unslicked = !0;
          a || this.$slider.trigger("destroy", [this]);
        };
        a.prototype.disableTransition = function (b) {
          var a = {};
          a[this.transitionType] = "";
          !1 === this.options.fade
            ? this.$slideTrack.css(a)
            : this.$slides.eq(b).css(a);
        };
        a.prototype.fadeSlide = function (b, a) {
          var c = this;
          !1 === c.cssTransitions
            ? (c.$slides.eq(b).css({ zIndex: c.options.zIndex }),
              c.$slides
                .eq(b)
                .animate({ opacity: 1 }, c.options.speed, c.options.easing, a))
            : (c.applyTransition(b),
              c.$slides.eq(b).css({ opacity: 1, zIndex: c.options.zIndex }),
              a &&
                setTimeout(function () {
                  c.disableTransition(b);
                  a.call();
                }, c.options.speed));
        };
        a.prototype.fadeSlideOut = function (b) {
          !1 === this.cssTransitions
            ? this.$slides
                .eq(b)
                .animate(
                  { opacity: 0, zIndex: this.options.zIndex - 2 },
                  this.options.speed,
                  this.options.easing
                )
            : (this.applyTransition(b),
              this.$slides
                .eq(b)
                .css({ opacity: 0, zIndex: this.options.zIndex - 2 }));
        };
        a.prototype.filterSlides = a.prototype.slickFilter = function (b) {
          null !== b &&
            ((this.$slidesCache = this.$slides),
            this.unload(),
            this.$slideTrack.children(this.options.slide).detach(),
            this.$slidesCache.filter(b).appendTo(this.$slideTrack),
            this.reinit());
        };
        a.prototype.focusHandler = function () {
          var a = this;
          a.$slider
            .off("focus.slick blur.slick")
            .on("focus.slick blur.slick", "*", function (c) {
              c.stopImmediatePropagation();
              var e = b(this);
              setTimeout(function () {
                a.options.pauseOnFocus &&
                  ((a.focussed = e.is(":focus")), a.autoPlay());
              }, 0);
            });
        };
        a.prototype.getCurrent = a.prototype.slickCurrentSlide = function () {
          return this.currentSlide;
        };
        a.prototype.getDotCount = function () {
          var b = 0,
            a = 0,
            c = 0;
          if (!0 === this.options.infinite)
            if (this.slideCount <= this.options.slidesToShow) ++c;
            else
              for (; b < this.slideCount; )
                ++c,
                  (b = a + this.options.slidesToScroll),
                  (a +=
                    this.options.slidesToScroll <= this.options.slidesToShow
                      ? this.options.slidesToScroll
                      : this.options.slidesToShow);
          else if (!0 === this.options.centerMode) c = this.slideCount;
          else if (this.options.asNavFor)
            for (; b < this.slideCount; )
              ++c,
                (b = a + this.options.slidesToScroll),
                (a +=
                  this.options.slidesToScroll <= this.options.slidesToShow
                    ? this.options.slidesToScroll
                    : this.options.slidesToShow);
          else
            c =
              1 +
              Math.ceil(
                (this.slideCount - this.options.slidesToShow) /
                  this.options.slidesToScroll
              );
          return c - 1;
        };
        a.prototype.getLeft = function (b) {
          var a,
            c,
            e,
            g,
            h = 0;
          return (
            (this.slideOffset = 0),
            (c = this.$slides.first().outerHeight(!0)),
            !0 === this.options.infinite
              ? (this.slideCount > this.options.slidesToShow &&
                  ((this.slideOffset =
                    this.slideWidth * this.options.slidesToShow * -1),
                  (g = -1),
                  !0 === this.options.vertical &&
                    !0 === this.options.centerMode &&
                    (2 === this.options.slidesToShow
                      ? (g = -1.5)
                      : 1 === this.options.slidesToShow && (g = -2)),
                  (h = c * this.options.slidesToShow * g)),
                0 != this.slideCount % this.options.slidesToScroll &&
                  b + this.options.slidesToScroll > this.slideCount &&
                  this.slideCount > this.options.slidesToShow &&
                  (b > this.slideCount
                    ? ((this.slideOffset =
                        (this.options.slidesToShow - (b - this.slideCount)) *
                        this.slideWidth *
                        -1),
                      (h =
                        (this.options.slidesToShow - (b - this.slideCount)) *
                        c *
                        -1))
                    : ((this.slideOffset =
                        (this.slideCount % this.options.slidesToScroll) *
                        this.slideWidth *
                        -1),
                      (h =
                        (this.slideCount % this.options.slidesToScroll) *
                        c *
                        -1))))
              : b + this.options.slidesToShow > this.slideCount &&
                ((this.slideOffset =
                  (b + this.options.slidesToShow - this.slideCount) *
                  this.slideWidth),
                (h = (b + this.options.slidesToShow - this.slideCount) * c)),
            this.slideCount <= this.options.slidesToShow &&
              ((this.slideOffset = 0), (h = 0)),
            !0 === this.options.centerMode &&
            this.slideCount <= this.options.slidesToShow
              ? (this.slideOffset =
                  (this.slideWidth * Math.floor(this.options.slidesToShow)) /
                    2 -
                  (this.slideWidth * this.slideCount) / 2)
              : !0 === this.options.centerMode && !0 === this.options.infinite
              ? (this.slideOffset +=
                  this.slideWidth * Math.floor(this.options.slidesToShow / 2) -
                  this.slideWidth)
              : !0 === this.options.centerMode &&
                ((this.slideOffset = 0),
                (this.slideOffset +=
                  this.slideWidth * Math.floor(this.options.slidesToShow / 2))),
            (a =
              !1 === this.options.vertical
                ? b * this.slideWidth * -1 + this.slideOffset
                : b * c * -1 + h),
            !0 === this.options.variableWidth &&
              ((e =
                this.slideCount <= this.options.slidesToShow ||
                !1 === this.options.infinite
                  ? this.$slideTrack.children(".slick-slide").eq(b)
                  : this.$slideTrack
                      .children(".slick-slide")
                      .eq(b + this.options.slidesToShow)),
              (a =
                !0 === this.options.rtl
                  ? e[0]
                    ? -1 *
                      (this.$slideTrack.width() - e[0].offsetLeft - e.width())
                    : 0
                  : e[0]
                  ? -1 * e[0].offsetLeft
                  : 0),
              !0 === this.options.centerMode &&
                ((e =
                  this.slideCount <= this.options.slidesToShow ||
                  !1 === this.options.infinite
                    ? this.$slideTrack.children(".slick-slide").eq(b)
                    : this.$slideTrack
                        .children(".slick-slide")
                        .eq(b + this.options.slidesToShow + 1)),
                (a =
                  !0 === this.options.rtl
                    ? e[0]
                      ? -1 *
                        (this.$slideTrack.width() - e[0].offsetLeft - e.width())
                      : 0
                    : e[0]
                    ? -1 * e[0].offsetLeft
                    : 0),
                (a += (this.$list.width() - e.outerWidth()) / 2))),
            a
          );
        };
        a.prototype.getOption = a.prototype.slickGetOption = function (b) {
          return this.options[b];
        };
        a.prototype.getNavigableIndexes = function () {
          var b,
            a = 0,
            c = 0,
            g = [];
          for (
            !1 === this.options.infinite
              ? (b = this.slideCount)
              : ((a = -1 * this.options.slidesToScroll),
                (c = -1 * this.options.slidesToScroll),
                (b = 2 * this.slideCount));
            a < b;

          )
            g.push(a),
              (a = c + this.options.slidesToScroll),
              (c +=
                this.options.slidesToScroll <= this.options.slidesToShow
                  ? this.options.slidesToScroll
                  : this.options.slidesToShow);
          return g;
        };
        a.prototype.getSlick = function () {
          return this;
        };
        a.prototype.getSlideCount = function () {
          var a,
            c,
            g = this;
          return (
            (c =
              !0 === g.options.centerMode
                ? g.slideWidth * Math.floor(g.options.slidesToShow / 2)
                : 0),
            !0 === g.options.swipeToSlide
              ? (g.$slideTrack.find(".slick-slide").each(function (e, h) {
                  if (
                    h.offsetLeft - c + b(h).outerWidth() / 2 >
                    -1 * g.swipeLeft
                  )
                    return (a = h), !1;
                }),
                Math.abs(b(a).attr("data-slick-index") - g.currentSlide) || 1)
              : g.options.slidesToScroll
          );
        };
        a.prototype.goTo = a.prototype.slickGoTo = function (b, a) {
          this.changeSlide(
            { data: { message: "index", index: parseInt(b) } },
            a
          );
        };
        a.prototype.init = function (a) {
          b(this.$slider).hasClass("slick-initialized") ||
            (b(this.$slider).addClass("slick-initialized"),
            this.buildRows(),
            this.buildOut(),
            this.setProps(),
            this.startLoad(),
            this.loadSlider(),
            this.initializeEvents(),
            this.updateArrows(),
            this.updateDots(),
            this.checkResponsive(!0),
            this.focusHandler());
          a && this.$slider.trigger("init", [this]);
          !0 === this.options.accessibility && this.initADA();
          this.options.autoplay && ((this.paused = !1), this.autoPlay());
        };
        a.prototype.initADA = function () {
          var a = this,
            c = Math.ceil(a.slideCount / a.options.slidesToShow),
            g = a.getNavigableIndexes().filter(function (b) {
              return 0 <= b && b < a.slideCount;
            });
          a.$slides
            .add(a.$slideTrack.find(".slick-cloned"))
            .attr({ "aria-hidden": "true", tabindex: "-1" })
            .find("a, input, button, select")
            .attr({ tabindex: "-1" });
          null !== a.$dots &&
            (a.$slides
              .not(a.$slideTrack.find(".slick-cloned"))
              .each(function (c) {
                var e = g.indexOf(c);
                b(this).attr({
                  role: "tabpanel",
                  id: "slick-slide" + a.instanceUid + c,
                  tabindex: -1,
                });
                -1 !== e &&
                  b(this).attr({
                    "aria-describedby":
                      "slick-slide-control" + a.instanceUid + e,
                  });
              }),
            a.$dots
              .attr("role", "tablist")
              .find("li")
              .each(function (e) {
                var h = g[e];
                b(this).attr({ role: "presentation" });
                b(this)
                  .find("button")
                  .first()
                  .attr({
                    role: "tab",
                    id: "slick-slide-control" + a.instanceUid + e,
                    "aria-controls": "slick-slide" + a.instanceUid + h,
                    "aria-label": e + 1 + " of " + c,
                    "aria-selected": null,
                    tabindex: "-1",
                  });
              })
              .eq(a.currentSlide)
              .find("button")
              .attr({ "aria-selected": "true", tabindex: "0" })
              .end());
          for (
            var h = a.currentSlide, d = h + a.options.slidesToShow;
            h < d;
            h++
          )
            a.$slides.eq(h).attr("tabindex", 0);
          a.activateADA();
        };
        a.prototype.initArrowEvents = function () {
          !0 === this.options.arrows &&
            this.slideCount > this.options.slidesToShow &&
            (this.$prevArrow
              .off("click.slick")
              .on("click.slick", { message: "previous" }, this.changeSlide),
            this.$nextArrow
              .off("click.slick")
              .on("click.slick", { message: "next" }, this.changeSlide),
            !0 === this.options.accessibility &&
              (this.$prevArrow.on("keydown.slick", this.keyHandler),
              this.$nextArrow.on("keydown.slick", this.keyHandler)));
        };
        a.prototype.initDotEvents = function () {
          !0 === this.options.dots &&
            (b("li", this.$dots).on(
              "click.slick",
              { message: "index" },
              this.changeSlide
            ),
            !0 === this.options.accessibility &&
              this.$dots.on("keydown.slick", this.keyHandler));
          !0 === this.options.dots &&
            !0 === this.options.pauseOnDotsHover &&
            b("li", this.$dots)
              .on("mouseenter.slick", b.proxy(this.interrupt, this, !0))
              .on("mouseleave.slick", b.proxy(this.interrupt, this, !1));
        };
        a.prototype.initSlideEvents = function () {
          this.options.pauseOnHover &&
            (this.$list.on(
              "mouseenter.slick",
              b.proxy(this.interrupt, this, !0)
            ),
            this.$list.on(
              "mouseleave.slick",
              b.proxy(this.interrupt, this, !1)
            ));
        };
        a.prototype.initializeEvents = function () {
          this.initArrowEvents();
          this.initDotEvents();
          this.initSlideEvents();
          this.$list.on(
            "touchstart.slick mousedown.slick",
            { action: "start" },
            this.swipeHandler
          );
          this.$list.on(
            "touchmove.slick mousemove.slick",
            { action: "move" },
            this.swipeHandler
          );
          this.$list.on(
            "touchend.slick mouseup.slick",
            { action: "end" },
            this.swipeHandler
          );
          this.$list.on(
            "touchcancel.slick mouseleave.slick",
            { action: "end" },
            this.swipeHandler
          );
          this.$list.on("click.slick", this.clickHandler);
          b(document).on(this.visibilityChange, b.proxy(this.visibility, this));
          !0 === this.options.accessibility &&
            this.$list.on("keydown.slick", this.keyHandler);
          !0 === this.options.focusOnSelect &&
            b(this.$slideTrack)
              .children()
              .on("click.slick", this.selectHandler);
          b(window).on(
            "orientationchange.slick.slick-" + this.instanceUid,
            b.proxy(this.orientationChange, this)
          );
          b(window).on(
            "resize.slick.slick-" + this.instanceUid,
            b.proxy(this.resize, this)
          );
          b("[draggable!\x3dtrue]", this.$slideTrack).on(
            "dragstart",
            this.preventDefault
          );
          b(window).on(
            "load.slick.slick-" + this.instanceUid,
            this.setPosition
          );
          b(this.setPosition);
        };
        a.prototype.initUI = function () {
          !0 === this.options.arrows &&
            this.slideCount > this.options.slidesToShow &&
            (this.$prevArrow.show(), this.$nextArrow.show());
          !0 === this.options.dots &&
            this.slideCount > this.options.slidesToShow &&
            this.$dots.show();
        };
        a.prototype.keyHandler = function (b) {
          b.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
            (37 === b.keyCode && !0 === this.options.accessibility
              ? this.changeSlide({
                  data: {
                    message: !0 === this.options.rtl ? "next" : "previous",
                  },
                })
              : 39 === b.keyCode &&
                !0 === this.options.accessibility &&
                this.changeSlide({
                  data: {
                    message: !0 === this.options.rtl ? "previous" : "next",
                  },
                }));
        };
        a.prototype.lazyLoad = function () {
          function a(a) {
            b("img[data-lazy]", a).each(function () {
              var a = b(this),
                c = b(this).attr("data-lazy"),
                e = b(this).attr("data-srcset"),
                g = b(this).attr("data-sizes") || d.$slider.attr("data-sizes"),
                h = document.createElement("img");
              h.onload = function () {
                a.animate({ opacity: 0 }, 100, function () {
                  e && (a.attr("srcset", e), g && a.attr("sizes", g));
                  a.attr("src", c).animate({ opacity: 1 }, 200, function () {
                    a.removeAttr(
                      "data-lazy data-srcset data-sizes"
                    ).removeClass("slick-loading");
                  });
                  d.$slider.trigger("lazyLoaded", [d, a, c]);
                });
              };
              h.onerror = function () {
                a.removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error");
                d.$slider.trigger("lazyLoadError", [d, a, c]);
              };
              h.src = c;
            });
          }
          var c,
            g,
            h,
            d = this;
          if (
            (!0 === d.options.centerMode
              ? !0 === d.options.infinite
                ? (h =
                    (g = d.currentSlide + (d.options.slidesToShow / 2 + 1)) +
                    d.options.slidesToShow +
                    2)
                : ((g = Math.max(
                    0,
                    d.currentSlide - (d.options.slidesToShow / 2 + 1)
                  )),
                  (h = d.options.slidesToShow / 2 + 3 + d.currentSlide))
              : ((g = d.options.infinite
                  ? d.options.slidesToShow + d.currentSlide
                  : d.currentSlide),
                (h = Math.ceil(g + d.options.slidesToShow)),
                !0 === d.options.fade &&
                  (0 < g && g--, h <= d.slideCount && h++)),
            (c = d.$slider.find(".slick-slide").slice(g, h)),
            "anticipated" === d.options.lazyLoad)
          ) {
            --g;
            for (
              var m = d.$slider.find(".slick-slide"), l = 0;
              l < d.options.slidesToScroll;
              l++
            )
              0 > g && (g = d.slideCount - 1),
                (c = (c = c.add(m.eq(g))).add(m.eq(h))),
                g--,
                h++;
          }
          a(c);
          d.slideCount <= d.options.slidesToShow
            ? a(d.$slider.find(".slick-slide"))
            : d.currentSlide >= d.slideCount - d.options.slidesToShow
            ? a(
                d.$slider.find(".slick-cloned").slice(0, d.options.slidesToShow)
              )
            : 0 === d.currentSlide &&
              a(
                d.$slider
                  .find(".slick-cloned")
                  .slice(-1 * d.options.slidesToShow)
              );
        };
        a.prototype.loadSlider = function () {
          this.setPosition();
          this.$slideTrack.css({ opacity: 1 });
          this.$slider.removeClass("slick-loading");
          this.initUI();
          "progressive" === this.options.lazyLoad && this.progressiveLazyLoad();
        };
        a.prototype.next = a.prototype.slickNext = function () {
          this.changeSlide({ data: { message: "next" } });
        };
        a.prototype.orientationChange = function () {
          this.checkResponsive();
          this.setPosition();
        };
        a.prototype.pause = a.prototype.slickPause = function () {
          this.autoPlayClear();
          this.paused = !0;
        };
        a.prototype.play = a.prototype.slickPlay = function () {
          this.autoPlay();
          this.options.autoplay = !0;
          this.interrupted = this.focussed = this.paused = !1;
        };
        a.prototype.postSlide = function (a) {
          this.unslicked ||
            (this.$slider.trigger("afterChange", [this, a]),
            (this.animating = !1),
            this.slideCount > this.options.slidesToShow && this.setPosition(),
            (this.swipeLeft = null),
            this.options.autoplay && this.autoPlay(),
            !0 === this.options.accessibility &&
              (this.initADA(),
              this.options.focusOnChange &&
                b(this.$slides.get(this.currentSlide))
                  .attr("tabindex", 0)
                  .focus()));
        };
        a.prototype.prev = a.prototype.slickPrev = function () {
          this.changeSlide({ data: { message: "previous" } });
        };
        a.prototype.preventDefault = function (b) {
          b.preventDefault();
        };
        a.prototype.progressiveLazyLoad = function (a) {
          a = a || 1;
          var c,
            e,
            g,
            h,
            d,
            l = this,
            r = b("img[data-lazy]", l.$slider);
          r.length
            ? ((c = r.first()),
              (e = c.attr("data-lazy")),
              (g = c.attr("data-srcset")),
              (h = c.attr("data-sizes") || l.$slider.attr("data-sizes")),
              ((d = document.createElement("img")).onload = function () {
                g && (c.attr("srcset", g), h && c.attr("sizes", h));
                c.attr("src", e)
                  .removeAttr("data-lazy data-srcset data-sizes")
                  .removeClass("slick-loading");
                !0 === l.options.adaptiveHeight && l.setPosition();
                l.$slider.trigger("lazyLoaded", [l, c, e]);
                l.progressiveLazyLoad();
              }),
              (d.onerror = function () {
                3 > a
                  ? setTimeout(function () {
                      l.progressiveLazyLoad(a + 1);
                    }, 500)
                  : (c
                      .removeAttr("data-lazy")
                      .removeClass("slick-loading")
                      .addClass("slick-lazyload-error"),
                    l.$slider.trigger("lazyLoadError", [l, c, e]),
                    l.progressiveLazyLoad());
              }),
              (d.src = e))
            : l.$slider.trigger("allImagesLoaded", [l]);
        };
        a.prototype.refresh = function (a) {
          var c = this.slideCount - this.options.slidesToShow;
          !this.options.infinite &&
            this.currentSlide > c &&
            (this.currentSlide = c);
          this.slideCount <= this.options.slidesToShow &&
            (this.currentSlide = 0);
          c = this.currentSlide;
          this.destroy(!0);
          b.extend(this, this.initials, { currentSlide: c });
          this.init();
          a || this.changeSlide({ data: { message: "index", index: c } }, !1);
        };
        a.prototype.registerBreakpoints = function () {
          var a,
            c,
            g,
            h = this,
            d = h.options.responsive || null;
          if ("array" === b.type(d) && d.length) {
            for (a in ((h.respondTo = h.options.respondTo || "window"), d))
              if (((g = h.breakpoints.length - 1), d.hasOwnProperty(a))) {
                for (c = d[a].breakpoint; 0 <= g; )
                  h.breakpoints[g] &&
                    h.breakpoints[g] === c &&
                    h.breakpoints.splice(g, 1),
                    g--;
                h.breakpoints.push(c);
                h.breakpointSettings[c] = d[a].settings;
              }
            h.breakpoints.sort(function (a, b) {
              return h.options.mobileFirst ? a - b : b - a;
            });
          }
        };
        a.prototype.reinit = function () {
          this.$slides = this.$slideTrack
            .children(this.options.slide)
            .addClass("slick-slide");
          this.slideCount = this.$slides.length;
          this.currentSlide >= this.slideCount &&
            0 !== this.currentSlide &&
            (this.currentSlide -= this.options.slidesToScroll);
          this.slideCount <= this.options.slidesToShow &&
            (this.currentSlide = 0);
          this.registerBreakpoints();
          this.setProps();
          this.setupInfinite();
          this.buildArrows();
          this.updateArrows();
          this.initArrowEvents();
          this.buildDots();
          this.updateDots();
          this.initDotEvents();
          this.cleanUpSlideEvents();
          this.initSlideEvents();
          this.checkResponsive(!1, !0);
          !0 === this.options.focusOnSelect &&
            b(this.$slideTrack)
              .children()
              .on("click.slick", this.selectHandler);
          this.setSlideClasses(
            "number" == typeof this.currentSlide ? this.currentSlide : 0
          );
          this.setPosition();
          this.focusHandler();
          this.paused = !this.options.autoplay;
          this.autoPlay();
          this.$slider.trigger("reInit", [this]);
        };
        a.prototype.resize = function () {
          var a = this;
          b(window).width() !== a.windowWidth &&
            (clearTimeout(a.windowDelay),
            (a.windowDelay = window.setTimeout(function () {
              a.windowWidth = b(window).width();
              a.checkResponsive();
              a.unslicked || a.setPosition();
            }, 50)));
        };
        a.prototype.removeSlide = a.prototype.slickRemove = function (a, b, c) {
          if (
            ((a =
              "boolean" == typeof a
                ? !0 === a
                  ? 0
                  : this.slideCount - 1
                : !0 === b
                ? --a
                : a),
            1 > this.slideCount || 0 > a || a > this.slideCount - 1)
          )
            return !1;
          this.unload();
          !0 === c
            ? this.$slideTrack.children().remove()
            : this.$slideTrack.children(this.options.slide).eq(a).remove();
          this.$slides = this.$slideTrack.children(this.options.slide);
          this.$slideTrack.children(this.options.slide).detach();
          this.$slideTrack.append(this.$slides);
          this.$slidesCache = this.$slides;
          this.reinit();
        };
        a.prototype.setCSS = function (a) {
          var b = {};
          !0 === this.options.rtl && (a = -a);
          var c = "left" == this.positionProp ? Math.ceil(a) + "px" : "0px";
          var e = "top" == this.positionProp ? Math.ceil(a) + "px" : "0px";
          b[this.positionProp] = a;
          !1 === this.transformsEnabled
            ? this.$slideTrack.css(b)
            : ((b = {}),
              !1 === this.cssTransitions
                ? ((b[this.animType] = "translate(" + c + ", " + e + ")"),
                  this.$slideTrack.css(b))
                : ((b[this.animType] =
                    "translate3d(" + c + ", " + e + ", 0px)"),
                  this.$slideTrack.css(b)));
        };
        a.prototype.setDimensions = function () {
          !1 === this.options.vertical
            ? !0 === this.options.centerMode &&
              this.$list.css({ padding: "0px " + this.options.centerPadding })
            : (this.$list.height(
                this.$slides.first().outerHeight(!0) * this.options.slidesToShow
              ),
              !0 === this.options.centerMode &&
                this.$list.css({
                  padding: this.options.centerPadding + " 0px",
                }));
          this.listWidth = this.$list.width();
          this.listHeight = this.$list.height();
          !1 === this.options.vertical && !1 === this.options.variableWidth
            ? ((this.slideWidth = Math.ceil(
                this.listWidth / this.options.slidesToShow
              )),
              this.$slideTrack.width(
                Math.ceil(
                  this.slideWidth *
                    this.$slideTrack.children(".slick-slide").length
                )
              ))
            : !0 === this.options.variableWidth
            ? this.$slideTrack.width(5e3 * this.slideCount)
            : ((this.slideWidth = Math.ceil(this.listWidth)),
              this.$slideTrack.height(
                Math.ceil(
                  this.$slides.first().outerHeight(!0) *
                    this.$slideTrack.children(".slick-slide").length
                )
              ));
          var a =
            this.$slides.first().outerWidth(!0) - this.$slides.first().width();
          !1 === this.options.variableWidth &&
            this.$slideTrack
              .children(".slick-slide")
              .width(this.slideWidth - a);
        };
        a.prototype.setFade = function () {
          var a,
            c = this;
          c.$slides.each(function (e, g) {
            a = c.slideWidth * e * -1;
            !0 === c.options.rtl
              ? b(g).css({
                  position: "relative",
                  right: a,
                  top: 0,
                  zIndex: c.options.zIndex - 2,
                  opacity: 0,
                })
              : b(g).css({
                  position: "relative",
                  left: a,
                  top: 0,
                  zIndex: c.options.zIndex - 2,
                  opacity: 0,
                });
          });
          c.$slides
            .eq(c.currentSlide)
            .css({ zIndex: c.options.zIndex - 1, opacity: 1 });
        };
        a.prototype.setHeight = function () {
          if (
            1 === this.options.slidesToShow &&
            !0 === this.options.adaptiveHeight &&
            !1 === this.options.vertical
          ) {
            var a = this.$slides.eq(this.currentSlide).outerHeight(!0);
            this.$list.css("height", a);
          }
        };
        a.prototype.setOption = a.prototype.slickSetOption = function (
          a,
          c,
          g
        ) {
          var e,
            h,
            d,
            l,
            n = this,
            r = !1;
          if (
            ("object" === b.type(a)
              ? ((h = a), (r = c), (l = "multiple"))
              : "string" === b.type(a) &&
                ((h = a),
                (d = c),
                (r = g),
                "responsive" === a && "array" === b.type(c)
                  ? (l = "responsive")
                  : void 0 !== c && (l = "single")),
            "single" === l)
          )
            n.options[h] = d;
          else if ("multiple" === l)
            b.each(h, function (a, b) {
              n.options[a] = b;
            });
          else if ("responsive" === l)
            for (e in d)
              if ("array" !== b.type(n.options.responsive))
                n.options.responsive = [d[e]];
              else {
                for (a = n.options.responsive.length - 1; 0 <= a; )
                  n.options.responsive[a].breakpoint === d[e].breakpoint &&
                    n.options.responsive.splice(a, 1),
                    a--;
                n.options.responsive.push(d[e]);
              }
          r && (n.unload(), n.reinit());
        };
        a.prototype.setPosition = function () {
          this.setDimensions();
          this.setHeight();
          !1 === this.options.fade
            ? this.setCSS(this.getLeft(this.currentSlide))
            : this.setFade();
          this.$slider.trigger("setPosition", [this]);
        };
        a.prototype.setProps = function () {
          var a = document.body.style;
          this.positionProp = !0 === this.options.vertical ? "top" : "left";
          "top" === this.positionProp
            ? this.$slider.addClass("slick-vertical")
            : this.$slider.removeClass("slick-vertical");
          (void 0 === a.WebkitTransition &&
            void 0 === a.MozTransition &&
            void 0 === a.msTransition) ||
            (!0 === this.options.useCSS && (this.cssTransitions = !0));
          this.options.fade &&
            ("number" == typeof this.options.zIndex
              ? 3 > this.options.zIndex && (this.options.zIndex = 3)
              : (this.options.zIndex = this.defaults.zIndex));
          void 0 !== a.OTransform &&
            ((this.animType = "OTransform"),
            (this.transformType = "-o-transform"),
            (this.transitionType = "OTransition"),
            void 0 === a.perspectiveProperty &&
              void 0 === a.webkitPerspective &&
              (this.animType = !1));
          void 0 !== a.MozTransform &&
            ((this.animType = "MozTransform"),
            (this.transformType = "-moz-transform"),
            (this.transitionType = "MozTransition"),
            void 0 === a.perspectiveProperty &&
              void 0 === a.MozPerspective &&
              (this.animType = !1));
          void 0 !== a.webkitTransform &&
            ((this.animType = "webkitTransform"),
            (this.transformType = "-webkit-transform"),
            (this.transitionType = "webkitTransition"),
            void 0 === a.perspectiveProperty &&
              void 0 === a.webkitPerspective &&
              (this.animType = !1));
          void 0 !== a.msTransform &&
            ((this.animType = "msTransform"),
            (this.transformType = "-ms-transform"),
            (this.transitionType = "msTransition"),
            void 0 === a.msTransform && (this.animType = !1));
          void 0 !== a.transform &&
            !1 !== this.animType &&
            ((this.animType = "transform"),
            (this.transformType = "transform"),
            (this.transitionType = "transition"));
          this.transformsEnabled =
            this.options.useTransform &&
            null !== this.animType &&
            !1 !== this.animType;
        };
        a.prototype.setSlideClasses = function (a) {
          var b, c;
          if (
            ((b = this.$slider
              .find(".slick-slide")
              .removeClass("slick-active slick-center slick-current")
              .attr("aria-hidden", "true")),
            this.$slides.eq(a).addClass("slick-current"),
            !0 === this.options.centerMode)
          ) {
            var e = 0 == this.options.slidesToShow % 2 ? 1 : 0;
            var g = Math.floor(this.options.slidesToShow / 2);
            !0 === this.options.infinite &&
              (a >= g && a <= this.slideCount - 1 - g
                ? this.$slides
                    .slice(a - g + e, a + g + 1)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : ((c = this.options.slidesToShow + a),
                  b
                    .slice(c - g + 1 + e, c + g + 2)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")),
              0 === a
                ? b
                    .eq(b.length - 1 - this.options.slidesToShow)
                    .addClass("slick-center")
                : a === this.slideCount - 1 &&
                  b.eq(this.options.slidesToShow).addClass("slick-center"));
            this.$slides.eq(a).addClass("slick-center");
          } else
            0 <= a && a <= this.slideCount - this.options.slidesToShow
              ? this.$slides
                  .slice(a, a + this.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : b.length <= this.options.slidesToShow
              ? b.addClass("slick-active").attr("aria-hidden", "false")
              : ((g = this.slideCount % this.options.slidesToShow),
                (c =
                  !0 === this.options.infinite
                    ? this.options.slidesToShow + a
                    : a),
                this.options.slidesToShow == this.options.slidesToScroll &&
                this.slideCount - a < this.options.slidesToShow
                  ? b
                      .slice(c - (this.options.slidesToShow - g), c + g)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")
                  : b
                      .slice(c, c + this.options.slidesToShow)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false"));
          ("ondemand" !== this.options.lazyLoad &&
            "anticipated" !== this.options.lazyLoad) ||
            this.lazyLoad();
        };
        a.prototype.setupInfinite = function () {
          var a, c;
          if (
            (!0 === this.options.fade && (this.options.centerMode = !1),
            !0 === this.options.infinite &&
              !1 === this.options.fade &&
              ((c = null), this.slideCount > this.options.slidesToShow))
          ) {
            var g =
              !0 === this.options.centerMode
                ? this.options.slidesToShow + 1
                : this.options.slidesToShow;
            for (a = this.slideCount; a > this.slideCount - g; --a)
              (c = a - 1),
                b(this.$slides[c])
                  .clone(!0)
                  .attr("id", "")
                  .attr("data-slick-index", c - this.slideCount)
                  .prependTo(this.$slideTrack)
                  .addClass("slick-cloned");
            for (a = 0; a < g + this.slideCount; a += 1)
              (c = a),
                b(this.$slides[c])
                  .clone(!0)
                  .attr("id", "")
                  .attr("data-slick-index", c + this.slideCount)
                  .appendTo(this.$slideTrack)
                  .addClass("slick-cloned");
            this.$slideTrack
              .find(".slick-cloned")
              .find("[id]")
              .each(function () {
                b(this).attr("id", "");
              });
          }
        };
        a.prototype.interrupt = function (a) {
          a || this.autoPlay();
          this.interrupted = a;
        };
        a.prototype.selectHandler = function (a) {
          a = b(a.target).is(".slick-slide")
            ? b(a.target)
            : b(a.target).parents(".slick-slide");
          (a = parseInt(a.attr("data-slick-index"))) || (a = 0);
          this.slideCount <= this.options.slidesToShow
            ? this.slideHandler(a, !1, !0)
            : this.slideHandler(a);
        };
        a.prototype.slideHandler = function (a, b, c) {
          var e,
            g,
            h,
            d,
            l = null,
            n = this;
          if (
            ((b = b || !1),
            !(
              (!0 === n.animating && !0 === n.options.waitForAnimate) ||
              (!0 === n.options.fade && n.currentSlide === a)
            ))
          )
            if (
              (!1 === b && n.asNavFor(a),
              (e = a),
              (l = n.getLeft(e)),
              (h = n.getLeft(n.currentSlide)),
              (n.currentLeft = null === n.swipeLeft ? h : n.swipeLeft),
              !1 === n.options.infinite &&
                !1 === n.options.centerMode &&
                (0 > a || a > n.getDotCount() * n.options.slidesToScroll))
            )
              !1 === n.options.fade &&
                ((e = n.currentSlide),
                !0 !== c
                  ? n.animateSlide(h, function () {
                      n.postSlide(e);
                    })
                  : n.postSlide(e));
            else if (
              !1 === n.options.infinite &&
              !0 === n.options.centerMode &&
              (0 > a || a > n.slideCount - n.options.slidesToScroll)
            )
              !1 === n.options.fade &&
                ((e = n.currentSlide),
                !0 !== c
                  ? n.animateSlide(h, function () {
                      n.postSlide(e);
                    })
                  : n.postSlide(e));
            else {
              if (
                (n.options.autoplay && clearInterval(n.autoPlayTimer),
                (g =
                  0 > e
                    ? 0 != n.slideCount % n.options.slidesToScroll
                      ? n.slideCount - (n.slideCount % n.options.slidesToScroll)
                      : n.slideCount + e
                    : e >= n.slideCount
                    ? 0 != n.slideCount % n.options.slidesToScroll
                      ? 0
                      : e - n.slideCount
                    : e),
                (n.animating = !0),
                n.$slider.trigger("beforeChange", [n, n.currentSlide, g]),
                (a = n.currentSlide),
                (n.currentSlide = g),
                n.setSlideClasses(n.currentSlide),
                n.options.asNavFor &&
                  (d = (d = n.getNavTarget()).slick("getSlick")).slideCount <=
                    d.options.slidesToShow &&
                  d.setSlideClasses(n.currentSlide),
                n.updateDots(),
                n.updateArrows(),
                !0 === n.options.fade)
              )
                return (
                  !0 !== c
                    ? (n.fadeSlideOut(a),
                      n.fadeSlide(g, function () {
                        n.postSlide(g);
                      }))
                    : n.postSlide(g),
                  void n.animateHeight()
                );
              !0 !== c
                ? n.animateSlide(l, function () {
                    n.postSlide(g);
                  })
                : n.postSlide(g);
            }
        };
        a.prototype.startLoad = function () {
          !0 === this.options.arrows &&
            this.slideCount > this.options.slidesToShow &&
            (this.$prevArrow.hide(), this.$nextArrow.hide());
          !0 === this.options.dots &&
            this.slideCount > this.options.slidesToShow &&
            this.$dots.hide();
          this.$slider.addClass("slick-loading");
        };
        a.prototype.swipeDirection = function () {
          var a, b, c, g;
          return (
            (a = this.touchObject.startX - this.touchObject.curX),
            (b = this.touchObject.startY - this.touchObject.curY),
            (c = Math.atan2(b, a)),
            0 > (g = Math.round((180 * c) / Math.PI)) &&
              (g = 360 - Math.abs(g)),
            (45 >= g && 0 <= g) || (360 >= g && 315 <= g)
              ? !1 === this.options.rtl
                ? "left"
                : "right"
              : 135 <= g && 225 >= g
              ? !1 === this.options.rtl
                ? "right"
                : "left"
              : !0 === this.options.verticalSwiping
              ? 35 <= g && 135 >= g
                ? "down"
                : "up"
              : "vertical"
          );
        };
        a.prototype.swipeEnd = function (a) {
          if (((this.dragging = !1), (this.swiping = !1), this.scrolling))
            return (this.scrolling = !1), !1;
          if (
            ((this.interrupted = !1),
            (this.shouldClick = !(10 < this.touchObject.swipeLength)),
            void 0 === this.touchObject.curX)
          )
            return !1;
          if (
            (!0 === this.touchObject.edgeHit &&
              this.$slider.trigger("edge", [this, this.swipeDirection()]),
            this.touchObject.swipeLength >= this.touchObject.minSwipe)
          ) {
            switch ((a = this.swipeDirection())) {
              case "left":
              case "down":
                var b = this.options.swipeToSlide
                  ? this.checkNavigable(
                      this.currentSlide + this.getSlideCount()
                    )
                  : this.currentSlide + this.getSlideCount();
                this.currentDirection = 0;
                break;
              case "right":
              case "up":
                (b = this.options.swipeToSlide
                  ? this.checkNavigable(
                      this.currentSlide - this.getSlideCount()
                    )
                  : this.currentSlide - this.getSlideCount()),
                  (this.currentDirection = 1);
            }
            "vertical" != a &&
              (this.slideHandler(b),
              (this.touchObject = {}),
              this.$slider.trigger("swipe", [this, a]));
          } else
            this.touchObject.startX !== this.touchObject.curX &&
              (this.slideHandler(this.currentSlide), (this.touchObject = {}));
        };
        a.prototype.swipeHandler = function (a) {
          if (
            !(
              !1 === this.options.swipe ||
              ("ontouchend" in document && !1 === this.options.swipe) ||
              (!1 === this.options.draggable && -1 !== a.type.indexOf("mouse"))
            )
          )
            switch (
              ((this.touchObject.fingerCount =
                a.originalEvent && void 0 !== a.originalEvent.touches
                  ? a.originalEvent.touches.length
                  : 1),
              (this.touchObject.minSwipe =
                this.listWidth / this.options.touchThreshold),
              !0 === this.options.verticalSwiping &&
                (this.touchObject.minSwipe =
                  this.listHeight / this.options.touchThreshold),
              a.data.action)
            ) {
              case "start":
                this.swipeStart(a);
                break;
              case "move":
                this.swipeMove(a);
                break;
              case "end":
                this.swipeEnd(a);
            }
        };
        a.prototype.swipeMove = function (a) {
          var b, c, e, g, h, d;
          return (
            (h = void 0 !== a.originalEvent ? a.originalEvent.touches : null),
            !(!this.dragging || this.scrolling || (h && 1 !== h.length)) &&
              ((b = this.getLeft(this.currentSlide)),
              (this.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX),
              (this.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY),
              (this.touchObject.swipeLength = Math.round(
                Math.sqrt(
                  Math.pow(this.touchObject.curX - this.touchObject.startX, 2)
                )
              )),
              (d = Math.round(
                Math.sqrt(
                  Math.pow(this.touchObject.curY - this.touchObject.startY, 2)
                )
              )),
              !this.options.verticalSwiping && !this.swiping && 4 < d
                ? ((this.scrolling = !0), !1)
                : (!0 === this.options.verticalSwiping &&
                    (this.touchObject.swipeLength = d),
                  (c = this.swipeDirection()),
                  void 0 !== a.originalEvent &&
                    4 < this.touchObject.swipeLength &&
                    ((this.swiping = !0), a.preventDefault()),
                  (g =
                    (!1 === this.options.rtl ? 1 : -1) *
                    (this.touchObject.curX > this.touchObject.startX ? 1 : -1)),
                  !0 === this.options.verticalSwiping &&
                    (g =
                      this.touchObject.curY > this.touchObject.startY ? 1 : -1),
                  (e = this.touchObject.swipeLength),
                  (this.touchObject.edgeHit = !1),
                  !1 === this.options.infinite &&
                    ((0 === this.currentSlide && "right" === c) ||
                      (this.currentSlide >= this.getDotCount() &&
                        "left" === c)) &&
                    ((e =
                      this.touchObject.swipeLength * this.options.edgeFriction),
                    (this.touchObject.edgeHit = !0)),
                  !1 === this.options.vertical
                    ? (this.swipeLeft = b + e * g)
                    : (this.swipeLeft =
                        b + e * (this.$list.height() / this.listWidth) * g),
                  !0 === this.options.verticalSwiping &&
                    (this.swipeLeft = b + e * g),
                  !0 !== this.options.fade &&
                    !1 !== this.options.touchMove &&
                    (!0 === this.animating
                      ? ((this.swipeLeft = null), !1)
                      : void this.setCSS(this.swipeLeft))))
          );
        };
        a.prototype.swipeStart = function (a) {
          var b;
          if (
            ((this.interrupted = !0),
            1 !== this.touchObject.fingerCount ||
              this.slideCount <= this.options.slidesToShow)
          )
            return (this.touchObject = {}), !1;
          void 0 !== a.originalEvent &&
            void 0 !== a.originalEvent.touches &&
            (b = a.originalEvent.touches[0]);
          this.touchObject.startX = this.touchObject.curX =
            void 0 !== b ? b.pageX : a.clientX;
          this.touchObject.startY = this.touchObject.curY =
            void 0 !== b ? b.pageY : a.clientY;
          this.dragging = !0;
        };
        a.prototype.unfilterSlides = a.prototype.slickUnfilter = function () {
          null !== this.$slidesCache &&
            (this.unload(),
            this.$slideTrack.children(this.options.slide).detach(),
            this.$slidesCache.appendTo(this.$slideTrack),
            this.reinit());
        };
        a.prototype.unload = function () {
          b(".slick-cloned", this.$slider).remove();
          this.$dots && this.$dots.remove();
          this.$prevArrow &&
            this.htmlExpr.test(this.options.prevArrow) &&
            this.$prevArrow.remove();
          this.$nextArrow &&
            this.htmlExpr.test(this.options.nextArrow) &&
            this.$nextArrow.remove();
          this.$slides
            .removeClass("slick-slide slick-active slick-visible slick-current")
            .attr("aria-hidden", "true")
            .css("width", "");
        };
        a.prototype.unslick = function (a) {
          this.$slider.trigger("unslick", [this, a]);
          this.destroy();
        };
        a.prototype.updateArrows = function () {
          Math.floor(this.options.slidesToShow / 2);
          !0 === this.options.arrows &&
            this.slideCount > this.options.slidesToShow &&
            !this.options.infinite &&
            (this.$prevArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            this.$nextArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            0 === this.currentSlide
              ? (this.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                this.$nextArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : ((this.currentSlide >=
                  this.slideCount - this.options.slidesToShow &&
                  !1 === this.options.centerMode) ||
                  (this.currentSlide >= this.slideCount - 1 &&
                    !0 === this.options.centerMode)) &&
                (this.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                this.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false")));
        };
        a.prototype.updateDots = function () {
          null !== this.$dots &&
            (this.$dots.find("li").removeClass("slick-active").end(),
            this.$dots
              .find("li")
              .eq(Math.floor(this.currentSlide / this.options.slidesToScroll))
              .addClass("slick-active"));
        };
        a.prototype.visibility = function () {
          this.options.autoplay &&
            (document[this.hidden]
              ? (this.interrupted = !0)
              : (this.interrupted = !1));
        };
        b.fn.slick = function () {
          var b,
            c,
            g = arguments[0],
            h = Array.prototype.slice.call(arguments, 1),
            l = this.length;
          for (b = 0; b < l; b++)
            if (
              ("object" == d(g) || void 0 === g
                ? (this[b].slick = new a(this[b], g))
                : (c = this[b].slick[g].apply(this[b].slick, h)),
              void 0 !== c)
            )
              return c;
          return this;
        };
      };
      "function" == typeof define && a(82)
        ? define(["jquery"], l)
        : "undefined" != typeof exports
        ? (b.exports = l(a(3)))
        : l(c);
    }).call(this, a(81)(c), a(3));
  },
  497: function (c, d, a) {},
  498: function (c, d, a) {},
  499: function (c, d, a) {
    (function (b) {
      a(4);
      a(18);
      a(16);
      a(102);
      a(125);
      a(53);
      a(148);
      a(103);
      a(7);
      a(149);
      a(24);
      a(20);
      a(31);
      a(19);
      "function" != typeof String.prototype.endsWith &&
        (String.prototype.endsWith = function (a) {
          return -1 !== this.indexOf(a, this.length - a.length);
        });
      var c,
        d,
        l =
          window.location.href.split("//")[1].split("?")[0].split("#")[0] || "",
        h = function () {
          return (
            (window.DIGITAL_DATA &&
              window.DIGITAL_DATA.pageInfo &&
              window.DIGITAL_DATA.pageInfo.pageGroup) ||
            "Others"
          );
        },
        g = function () {
          return 0 < l.indexOf("/5")
            ? "5G"
            : 0 < l.indexOf("/vooc")
            ? "VOOC"
            : 0 < l.indexOf("/imaging")
            ? "Imaging Technology"
            : window.PAGEGROUPNAME || "Others";
        };
      if (
        (0 < l.indexOf("/series-")
          ? ((d = window.location.pathname), (c = d.split("/")[3]))
          : (c = ""),
        "Technology Page" == h())
      )
        var e = h();
      else if ("Technology Details Page" == h())
        e = "Technology Details Page + " + g();
      else if ("Series Page" == h()) e = "Series Page + " + c;
      else if ("Product List Page" == h()) {
        d = b(".accessories-main .accessories-recommond .component_title")
          .text()
          .trim();
        var n = b(".tab-wrap .nav-content .page-title").text().trim();
        e = "Product List Page + " + (d || n);
      } else e = h();
      var y = function () {
        var a = window.navigator.userAgent;
        return -1 !== a.indexOf("UserCenter") || -1 !== a.indexOf("oppostore")
          ? "app"
          : "web";
      };
      0 < b("#particelShowerCanvas").length &&
        ((h = function () {
          return "Events Page";
        }),
        (e = "Events Page"));
      var p = function (a) {
        var b = window.dataLayer;
        b &&
          b.push({
            event: "uaEvent",
            nonInteraction: a.nonInteraction,
            eventCategory: a.eventCategory,
            eventAction: a.eventAction,
            eventLabel: a.eventLabel,
            UserSource: "from " + y(),
          });
      };
      window.getPageGroupType = h;
      window.getTechPageGroupType = g;
      window.deviceCategory = y;
      window.sendGAEvent = p;
      var v = function (a) {
          var b = window.dataLayer;
          if (b && 0 < Object.keys(a).length) {
            b.push({ event_parameters: null });
            var c = a.event_name;
            delete a.event_name;
            b.push({ event: "ga4Event", event_name: c, event_parameters: a });
          }
        },
        m = function (a) {
          var c = {};
          this.attributes.forEach(function (a) {
            if (0 == a.name.indexOf("tm-")) {
              var b = a.name.replace("tm-", "");
              c[b] = a.value;
            }
          });
          (a.target == this ||
            (this == b(a.target).parents(".op-trk-event")[0] &&
              !a.target.classList.contains("op-trk-event"))) &&
            v &&
            v(c);
        };
      window.ga4Event = v;
      window.getAttrEvent = m;
      b(function () {
        b("*[tm-eventCategory\x3d'$pageGroup']").attr("tm-eventCategory", h());
        b("*[tm-eventaction\x3d'$pageGroup']").attr("tm-eventaction", h());
        b("*[tm-product_type\x3d'$pageGroup']").attr("tm-product_type", h());
        b("*[tm-nav_group\x3d'$pageGroup']").attr("tm-nav_group", h());
        b("*[tm-function_type\x3d'$pageGroup']").attr("tm-function_type", h());
        for (
          var a, d = document.getElementsByClassName("op-trk-event"), n = 0;
          n < d.length;
          n++
        )
          d[n].onclick = m;
        b(".index__product-slogan .actions a").on("click", function () {
          p({
            nonInteraction: !1,
            eventCategory: h(),
            eventAction: "Learn More",
            eventLabel: b(this).text(),
          });
        });
        b(".product__slogan .actions a").on("click", function () {
          p({
            nonInteraction: !1,
            eventCategory: e,
            eventAction: "Learn More",
            eventLabel: b(this).text(),
          });
        });
        b(".about_company_culture_scroll a").on("click", function () {
          p({
            nonInteraction: !1,
            eventCategory: h(),
            eventAction: "Learn More",
            eventLabel: b(this).parent().find("p").text(),
          });
        });
        b(".about_lift_nav ul li").on("click", function () {
          p({
            nonInteraction: !1,
            eventCategory: h(),
            eventAction: "Brand info category",
            eventLabel: b(this).find("p").text(),
          });
        });
        b(".newslist_breadcrumbs a").on("click", function () {
          p({
            nonInteraction: !1,
            eventCategory: h(),
            eventAction: "Top navigation",
            eventLabel: b(this).text().trim(),
          });
        });
        b(".share .share-item").on("click", function () {
          p({
            nonInteraction: !1,
            eventCategory: h(),
            eventAction: "Share",
            eventLabel: b(this).text().replace(/\n/g, "").trim(),
          });
        });
        b(".news-detail .text_reno_span").on("click", function (a) {
          a.stopPropagation();
          p({
            nonInteraction: !1,
            eventCategory: h(),
            eventAction: "Jump to other page",
            eventLabel: b(this).text().replace(/\n/g, "").trim(),
          });
        });
        b(".story-list .story_section_content .main_title").on(
          "click",
          function () {
            p({
              nonInteraction: !1,
              eventCategory: h(),
              eventAction: "Related recommend",
              eventLabel: b(this).text().trim(),
              UserSource: "from " + y(),
            });
          }
        );
        b(".rte .cmp-text .para p a").on("click", function (a) {
          a.stopPropagation();
          p({
            nonInteraction: !1,
            eventCategory: h(),
            eventAction: "Jump to other page",
            eventLabel: b(this).text().replace(/\n/g, "").trim(),
          });
        });
        b("#search_one").on("input", function () {
          I = b("#search_one").val();
        });
        b("#search_one").bind("keypress", function (a) {
          "13" == a.keyCode &&
            p({
              nonInteraction: !1,
              eventCategory: h(),
              eventAction: "Search",
              eventLabel: "Normal search + " + I,
              UserSource: "from " + y(),
            });
        });
        b("#search_two").on("input", function () {
          a = b("#search_two").val();
        });
        b("#search_two").bind("keypress", function (b) {
          "13" == b.keyCode &&
            p({
              nonInteraction: !1,
              eventCategory: h(),
              eventAction: "Search",
              eventLabel: "Normal search + " + a,
              UserSource: "from " + y(),
            });
        });
        b(".service-contactUs ul li").on("click", function (a) {
          a.stopPropagation();
          a = b(this).find("p").text().replace(/\\n/g, "").trim();
          var c = a.substring(0, a.indexOf("  "));
          a =
            0 <= b(this).find("a").attr("href").indexOf("tel")
              ? "Phone"
              : 0 <= b(this).find("a").attr("href").indexOf("Mailto")
              ? "Email"
              : 0 == c.length
              ? a
              : c;
          p({
            nonInteraction: !1,
            eventCategory: h(),
            eventAction: "Contact Us",
            eventLabel: a,
            UserSource: "from " + y(),
          });
        });
        b(".custumer a").on("click", function () {
          p({
            nonInteraction: !1,
            eventCategory: h(),
            eventAction: "Contact Us",
            eventLabel: "Right hover button",
            UserSource: "from " + y(),
          });
        });
        b(".story-list .img_box").on("click", function () {
          p({
            nonInteraction: !1,
            eventCategory: h(),
            eventAction: "Related recommend",
            eventLabel: b(this).parent().nextAll("a").text().trim(),
          });
        });
        b(
          ".customhtmlcomponent .content_box .more, .customhtmlcomponent .content_box img"
        ).on("click", function (a) {
          if ("img" == a.target.tagName.toLowerCase())
            var c =
              b(this).parent().next("h2").text().trim() || b(this).attr("alt");
          else
            "a" == a.target.tagName.toLowerCase() &&
              (c = b(this).prevAll("h2").text().trim());
          p({
            nonInteraction: !1,
            eventCategory: h(),
            eventAction: "Learn More",
            eventLabel: c,
          });
        });
        0 < l.indexOf("events") &&
          b(".show-more").on("click", function () {
            p({
              nonInteraction: !1,
              eventCategory: h(),
              eventAction: "See More",
              eventLabel: "See More",
            });
          });
        b(".cp-breadcrumb li").on("click", function () {
          0 < l.indexOf("news")
            ? p({
                nonInteraction: !1,
                eventCategory: "News List Page",
                eventAction: "Top navigation",
                eventLabel: b(this).text().trim(),
              })
            : p({
                nonInteraction: !1,
                eventCategory: e,
                eventAction: "Top navigation",
                eventLabel: b(this).text().trim(),
              });
        });
        b(".list-box .left li,.list-box .right li").on("click", function () {
          var a =
            0 > b(this).find("a").attr("href").indexOf("@")
              ? "Advisory Contact Way"
              : "Media Contact Way";
          p({
            nonInteraction: !1,
            eventCategory: h(),
            eventAction: a,
            eventLabel: b(this).find("h3").text(),
          });
        });
        ("Technology Page" != h() && "Technology Details Page" != h()) ||
          b(".cp-slide-photo-gallery .slides-box .slide img").on(
            "click",
            function () {
              var a = b(
                ".cp-slide-photo-gallery .slides-box .slide .img-box img"
              ).index(b(this));
              p({
                nonInteraction: !1,
                eventCategory: "Technology Details Page + " + g(),
                eventAction: "Content Photo",
                eventLabel: "img" + a,
              });
            }
          );
        b(".location a").on("click", function () {
          p({
            nonInteraction: !1,
            eventCategory: "Support Page",
            eventAction: "Service Centers",
            eventLabel: "Locate Service Center",
            UserSource: "from " + y(),
          });
        });
        "Technology Page" == h() &&
          b(".tech-secTxt .tech-btn").on("click", function () {
            p({
              nonInteraction: !1,
              eventCategory: "Technology Page",
              eventAction: "Learn more",
              eventLabel: b(this).parent().find(".tech-tit").text(),
            });
          });
        b(".dk-btnWrapper span").on("click", function () {
          p({
            nonInteraction: !1,
            eventCategory: "Technology Details Page + " + g(),
            eventAction: "Content Color",
            eventLabel: b(this).text(),
          });
        });
        b(".vooc-videoBtn-ele .vooc-videoBtn").on("click", function () {
          p({
            nonInteraction: !1,
            eventCategory: "Technology Details Page + " + g(),
            eventAction: "Content Video",
            eventLabel: b(this)
              .parents(".vooc-feature")
              .find(".vooc-vertical-line-block2")
              .text()
              .trim(),
          });
        });
        "Technology Details Page" == h() &&
          b(".view_all a").on("click", function () {
            p({
              nonInteraction: !1,
              eventCategory: "Technology Details Page + " + g(),
              eventAction: "Popular FAQs",
              eventLabel: "View all questions",
            });
          });
        b(".faq_wrapper li").on("click", function () {
          p({
            nonInteraction: !1,
            eventCategory: "Technology Details Page + " + g(),
            eventAction: "Popular FAQs",
            eventLabel: b(this).find("p").text(),
          });
        });
        b(".fiveg_news .fiveg_news_more").on("click", function () {
          p({
            nonInteraction: !1,
            eventCategory: "Technology Details Page + " + g(),
            eventAction: "Related News",
            eventLabel: "See more",
          });
        });
        b(".fiveg_news ul li a").on("click", function () {
          p({
            nonInteraction: !1,
            eventCategory: "Technology Details Page + " + g(),
            eventAction: "Related News",
            eventLabel: b(this).parent().find(".fiveg_news_title").text(),
          });
        });
        b(".fiveg_product_link a:last-child").on("click", function () {
          p({
            nonInteraction: !1,
            eventCategory: "Technology Details Page + " + g(),
            eventAction: "Product Recommend_Buy",
            eventLabel: b(this)
              .parents(".fiveg_product_spec")
              .find(".product_name")
              .text(),
          });
        });
        b(".fiveg_product_link a:first-child").on("click", function () {
          p({
            nonInteraction: !1,
            eventCategory: "Technology Details Page + " + g(),
            eventAction: "Product Recommend_Learn more",
            eventLabel: b(this)
              .parents(".fiveg_product_spec")
              .find(".product_name")
              .text(),
          });
        });
        b(".fiveg_experience_img .btn_banner_video").on("click", function () {
          p({
            nonInteraction: !1,
            eventCategory: "Technology Details Page + " + g(),
            eventAction: "Content Video",
            eventLabel: b(this).text().replace(/\n/g, "").trim(),
          });
        });
        b(".about_banner_pic .btn_banner_video").on("click", function () {
          "Brand Page" == h()
            ? p({
                nonInteraction: !1,
                eventCategory: h(),
                eventAction: "Big Focus",
                eventLabel: b(this).text().trim(),
              })
            : p({
                nonInteraction: !1,
                eventCategory: "Technology Details Page + " + g(),
                eventAction: "Big Focus",
                eventLabel: b(this)
                  .parents(".about_banner_pic")
                  .prev()
                  .find(".hero_title h2")
                  .text()
                  .trim(),
              });
        });
        b(
          ".about_company_values_two_left .about_company_values_right,.about_company_values_two_left .about_company_values_left,.about_company_values_two_right .about_company_values_right,.about_company_values_two_right .about_company_values_left,.about_company_values_three_right .about_company_values_right .values_section,.about_company_values_three_right .about_company_values_left,.about_company_values_three_left .about_company_values_right .values_section,.about_company_values_three_left .about_company_values_left,.about_company_values .about_company_values_right,.about_company_values .about_company_values_left"
        ).on("click", function (a) {
          if ("img" == a.target.tagName.toLowerCase())
            var c = b(this).find(".values_title").text().trim();
          "a" == a.target.tagName.toLowerCase() &&
            (c = b(this).find(".values_title").text().trim());
          p({
            nonInteraction: !1,
            eventCategory: e,
            eventAction: "Other Recommend",
            eventLabel: c,
          });
        });
        b(
          ".related-banner-3l .box-portrait,.related-banner-3l .box-landscape .change-box,.related-banner-3r .box-landscape .change-box,.related-banner-3r .box-portrait,.related-banner-2r .box-portrait,.related-banner-2r .box-landscape,.related-banner-2l .box-landscape,.related-banner-2l .box-portrait"
        ).on("click", function (a) {
          if ("img" == a.target.tagName.toLowerCase())
            var c = b(this).find(".title").text().trim();
          "a" == a.target.tagName.toLowerCase() &&
            (c = b(this).find(".title").text().trim());
          p({
            nonInteraction: !1,
            eventCategory: e,
            eventAction: "Other Recommend",
            eventLabel: c,
          });
        });
        b(".fiveg_vooc a").on("click", function () {
          p({
            nonInteraction: !1,
            eventCategory: "Technology Details Page + " + g(),
            eventAction: "Other Recommend",
            eventLabel: b(this).parent().find("span").text(),
          });
        });
        b(".kv-txtWrapper .tech-videoBtn").on("click", function () {
          p({
            nonInteraction: !1,
            eventCategory: e,
            eventAction: "Big Focus",
            eventLabel: b(this)
              .parents(".kv-wrapper")
              .find("p:first")
              .text()
              .trim()
              .replace(/\n/g, "")
              .replace(/  /g, ""),
          });
        });
        b("._5g_banner_pic a").on("click", function () {
          p({
            nonInteraction: !1,
            eventCategory: "Technology Details Page + " + g(),
            eventAction: "Big Focus",
            eventLabel: b(this)
              .parents("._5g_banner_pic")
              .prev()
              .find(".hero_title h2")
              .text()
              .trim(),
          });
        });
        b(".fiveg_experience_wrapper a").on("click", function () {
          "Technology Details Page" == h() &&
            p({
              nonInteraction: !1,
              eventCategory: "Technology Details Page + " + g(),
              eventAction: "Content Video",
              eventLabel: b(this)
                .parents(".fiveg_experience_wrapper")
                .find(".fiveg_experience_title")
                .text()
                .trim(),
            });
        });
        b(".subscribe-container #other-email-input").on("click", function () {
          p({
            nonInteraction: !1,
            eventCategory: e,
            eventAction: "Subscribe",
            eventLabel: "email",
          });
        });
        b(".oh-nav-right .search").on("click", function () {
          p({
            nonInteraction: !1,
            eventCategory: "Top Function",
            eventAction: e,
            eventLabel: "Search" + b(this).find("input").val().trim(),
          });
        });
        b(".oh-nav-right .region").on("click", function () {
          p({
            nonInteraction: !1,
            eventCategory: "Top Function",
            eventAction: e,
            eventLabel: "Country choose",
          });
        });
        b(".oh-nav-right .account").on("click", function () {
          p({
            nonInteraction: !1,
            eventCategory: "Top Function",
            eventAction: e,
            eventLabel: "Account",
          });
        });
        b(".oh-nav-right .oh-nav-right-seek").on("click", function () {
          p({
            nonInteraction: !1,
            eventCategory: "Top Function",
            eventAction: e,
            eventLabel: "Search",
          });
        });
        b(".oh-nav-right .oh_nav_shop").on("click", function () {
          p({
            nonInteraction: !1,
            eventCategory: "Top Function",
            eventAction: e,
            eventLabel: "Shopping Bag",
          });
        });
        b(".oh-navlist .oh-nav-list").on(
          "mouseenter",
          ".oh-navitem-link",
          function () {
            0 < b(this).parent().find("aside").length &&
              p({
                nonInteraction: !1,
                eventCategory: "Top Navigation",
                eventAction: e,
                eventLabel: "Firstnavigation+" + b(this).text().trim(),
              });
          }
        );
        b(".oh-navlist .oh-nav-list").on(
          "click",
          ".oh-navitem-link",
          function () {
            0 == b(this).parent().find("aside").length &&
              p({
                nonInteraction: !1,
                eventCategory: "Top Navigation",
                eventAction: e,
                eventLabel: "Firstnavigation+" + b(this).text().trim(),
              });
          }
        );
        b(".oh-nav-item .wap-nav-products-popup .mobile-series .wide").on(
          "click",
          function () {
            p({
              nonInteraction: !1,
              eventCategory: "Top Navigation",
              eventAction: e,
              eventLabel:
                "Secondnavigation+" + b(this).find("a .desc").text().trim(),
            });
          }
        );
        b(".oh-nav-item .oh-nav-submenus .oh-nav-submenu").on(
          "mouseenter",
          function () {
            var a =
              0 == this.getElementsByTagName("a").length
                ? b(this).text().trim()
                : b(this).find("a").text().trim();
            (0 != this.getElementsByTagName("a").length &&
              -1 !=
                this.getElementsByTagName("a")[0]
                  .getAttribute("href")
                  .indexOf("www")) ||
              p({
                nonInteraction: !1,
                eventCategory: "Top Navigation",
                eventAction: e,
                eventLabel: "Secondnavigation+" + a,
              });
          }
        );
        b(".oh-nav-item .oh-nav-submenus .oh-nav-submenu").on(
          "click",
          function () {
            0 < this.getElementsByTagName("a").length &&
              -1 <
                this.getElementsByTagName("a")[0]
                  .getAttribute("href")
                  .indexOf("www") &&
              p({
                nonInteraction: !1,
                eventCategory: "Top Navigation",
                eventAction: e,
                eventLabel:
                  "Secondnavigation+" + b(this).find("a").text().trim(),
              });
          }
        );
        b(document).on(
          "click",
          ".oh-nav-item .wap-nav-products-popup .wap-nav-kinds .wap-nav-kinds-item \x3ea",
          function () {
            p({
              nonInteraction: !1,
              eventCategory: "Top Navigation",
              eventAction: e,
              eventLabel: "Secondnavigation+" + b(this).text().trim(),
            });
          }
        );
        b(document).on(
          "click",
          ".oh-nav-item .oh-nav-submenus-wrapper .oh-nav-series-product-list .pc-nav-series-product a",
          function () {
            p({
              nonInteraction: !1,
              eventCategory: "Top Navigation",
              eventAction: e,
              eventLabel:
                "Thirdnavigation+" +
                b(this)
                  .find(".pTitle")
                  .text()
                  .trim()
                  .replace(/\n/g, "")
                  .replace(/  /g, "")
                  .replace(/New/g, ""),
            });
          }
        );
        b(document).on(
          "click",
          ".oh-nav-item .oh-nav-submenus-wrapper .slick-btn a",
          function () {
            p({
              nonInteraction: !1,
              eventCategory: "Top Navigation",
              eventAction: e,
              eventLabel: "Thirdnavigation+" + b(this).text().trim(),
            });
          }
        );
        b(document).on(
          "click",
          ".oh-nav-item .wap-nav-products-popup .wap-nav-kinds .wap-nav-kinds-item .slick-btn a",
          function () {
            p({
              nonInteraction: !1,
              eventCategory: "Top Navigation",
              eventAction: e,
              eventLabel: "Thirdnavigation+" + b(this).text().trim(),
            });
          }
        );
        b(
          ".oh-nav-item .wap-nav-products-popup .wap-nav-series .wap-nav-series-item"
        ).on("click", function () {
          p({
            nonInteraction: !1,
            eventCategory: "Top Navigation",
            eventAction: e,
            eventLabel:
              "Thirdnavigation+" + b(this).find(".desc").text().trim(),
          });
        });
        b(".newslist_press_section .press_content .story_section_content").on(
          "click",
          function () {
            p({
              nonInteraction: !1,
              eventCategory: "Support Page",
              eventAction: "Service News",
              eventLabel: b(this).find(".main_title").text().trim(),
              UserSource: "from " + y(),
            });
          }
        );
        var r = !0,
          u = !0,
          v = !0,
          E = !0,
          F = !0;
        b(window).on("scroll", function () {
          var a = b(document).scrollTop(),
            c = b(document).height();
          a = 100 * ((a + window.innerHeight) / c).toFixed(2);
          25 > a ||
            (25 <= a &&
              50 > a &&
              r &&
              (p({
                nonInteraction: !0,
                eventCategory: "Scroll Depth",
                eventAction: e,
                eventLabel: "25%",
              }),
              (r = !1)),
            50 <= a &&
              75 > a &&
              u &&
              (p({
                nonInteraction: !0,
                eventCategory: "Scroll Depth",
                eventAction: e,
                eventLabel: "50%",
              }),
              (u = !1)),
            75 <= a &&
              90 > a &&
              v &&
              (p({
                nonInteraction: !0,
                eventCategory: "Scroll Depth",
                eventAction: e,
                eventLabel: "75%",
              }),
              (v = !1)),
            90 <= a &&
              100 > a &&
              E &&
              (p({
                nonInteraction: !0,
                eventCategory: "Scroll Depth",
                eventAction: e,
                eventLabel: "90%",
              }),
              (E = !1)),
            100 === a &&
              F &&
              (p({
                nonInteraction: !0,
                eventCategory: "Scroll Depth",
                eventAction: e,
                eventLabel: "100%",
              }),
              (F = !1)));
        });
        var I,
          L = 0;
        b(
          ".accessories-main .accessories-recommond .accessories-type .tab-wrap .fixed-wrap .type-nav"
        )
          .children()
          .on("click", function () {
            var a = b(".accessories-recommond .component_title").text().trim();
            1 < (L += 1) &&
              p({
                nonInteraction: !1,
                eventCategory: "Product List Page+" + a,
                eventAction: "Product type",
                eventLabel: b(this).text().trim(),
              });
          });
        b(".newslist .position_nav .newslist_tab_nav li").on(
          "click",
          function () {
            "Support Page" == h() &&
              p({
                nonInteraction: !1,
                eventCategory: "Service Infor List Page",
                eventAction: "Service Infor Type",
                eventLabel: b(this).text().trim(),
              });
          }
        );
        b(document).on("click", ".press_section_content", function () {
          "Support Page" == h() &&
            p({
              nonInteraction: !1,
              eventCategory: h(),
              eventAction: "Service News",
              eventLabel: b(this).find("h2").text().trim(),
            });
        });
        b(document).on("click", ".media_section_content", function () {
          b(this)
            .closest(".media_content")
            .find(".media_section_content")
            .index(b(this));
          b(this).parent().parent().find(".number.active").attr("data-page");
          "Support Page" == h() &&
            p({
              nonInteraction: !1,
              eventCategory: h(),
              eventAction: "Service News",
              eventLabel: b(this).find(".main_intro").text().trim(),
            });
        });
        b(".latest_left_content").on("click", function (a) {
          "Support Page" == h() &&
            p({
              nonInteraction: !1,
              eventCategory: h(),
              eventAction: "Service News",
              eventLabel: b(this).find("h2").text().trim(),
            });
        });
        b(".latest_right_content ").on("click", function () {
          "Support Page" == h() &&
            p({
              nonInteraction: !1,
              eventCategory: h(),
              eventAction: "Service News",
              eventLabel: b(this).find("h2").text().trim(),
            });
        });
        b(".cp-media-reviewer .contain .reviewers .reviewer").on(
          "click",
          function () {
            p({
              nonInteraction: !1,
              eventCategory: "News List Page",
              eventAction: "Media reviews",
              eventLabel:
                b(this).find(".info-description").text().trim() +
                "+" +
                b(this).find(".comment").text().trim().replace(/"/g, ""),
            });
          }
        );
        b(".cp-media-reviewer .learn-more-box .learn-more").on(
          "click",
          function () {
            p({
              nonInteraction: !1,
              eventCategory: "News List Page",
              eventAction: "Media reviews",
              eventLabel: "See more",
            });
          }
        );
        b(".about_company_culture .about_company_culture_scroll li").on(
          "click",
          function () {
            p({
              nonInteraction: !1,
              eventCategory: "Brand Page",
              eventAction: "Learn More",
              eventLabel: b(this).find("p").text().trim(),
            });
          }
        );
        b(
          ".accessories-type .swiper-container .swiper-wrapper .swiper-slide a img"
        ).on("click", function () {
          var a = b(this)
              .closest(".swiper-wrapper")
              .find(".swiper-slide")
              .index(b(this).parent()),
            c = b(".accessories-recommond .component_title").text().trim(),
            e = b(this).parent().find("a").attr("href") || "",
            g =
              0 < e.indexOf("smartphone")
                ? /smartphone-((\w|-|\s)+)/gi
                : /product\/((\w|-|\s)+)/gi,
            h = "";
          e.replace(g, function (a, b) {
            h = b;
          });
          p({
            nonInteraction: !1,
            eventCategory: "Product List Page+" + c,
            eventAction: "Hero Banner Entry",
            eventLabel: "img" + a + "+" + h,
          });
        });
        b(
          ".accessories-type .swiper-container .swiper-wrapper .swiper-slide .description .price .buy-btn"
        ).on("click", function () {
          var a = b(this)
              .closest(".swiper-wrapper")
              .find(".swiper-slide")
              .index(b(this).parent().parent().parent()),
            c = b(".accessories-recommond .component_title").text().trim(),
            e = b(this).parent().prevAll(".title").text().trim();
          p({
            nonInteraction: !1,
            eventCategory: "Product List Page+" + c,
            eventAction: "Hero Banner Entry",
            eventLabel: b(this).text().trim() + a + "+" + e,
          });
        });
        b(".homepagebanner section").on("click", function (a) {
          a = a.target.tagName.toLowerCase();
          if (!b(this).find(".content a").hasClass("play-btn") && "a" != a) {
            a = b(".homepagebanner").index(b(this).parent());
            var c = b(this)
              .children(".content")
              .find(".intro .title")
              .text()
              .trim();
            p({
              nonInteraction: !1,
              eventCategory: "Homepage ",
              eventAction: "Hero Banner",
              eventLabel: "img" + a + "+" + c,
            });
          }
        });
        b(".homepagebanner section")
          .find(".learn-more")
          .on("click", function () {
            var a = b(".homepagebanner").index(
                b(this).closest("section").parent()
              ),
              c = b(this).parent().prev(".intro").find(".title").text().trim();
            p({
              nonInteraction: !1,
              eventCategory: "Homepage ",
              eventAction: "Hero Banner",
              eventLabel: "LearnMore" + a + c,
            });
          });
        b(".homepagebanner section")
          .find(".buy,.buy-now")
          .on("click", function () {
            var a = b(".homepagebanner").index(
                b(this).closest("section").parent()
              ),
              c = b(this).parent().prev(".intro").find(".title").text().trim();
            p({
              nonInteraction: !1,
              eventCategory: "Homepage ",
              eventAction: "Hero Banner",
              eventLabel: "Buy" + a + "+" + c,
            });
          });
        b(".banner \x3e .menu \x3e .menu-list \x3e .menu-list_item").on(
          "click",
          function () {
            var a = b(this).text().trim();
            window.dataLayer.push({
              event: "uaEvent",
              nonInteraction: !1,
              eventCategory: "Series Page+" + c,
              eventAction: "Top navigation",
              eventLabel: a,
            });
          }
        );
        "Technology Details Page" != h() &&
          "Technology Page" != h() &&
          (b(".cp-slide-photo-gallery .cp-left-right-btns .prev-arrow").on(
            "click",
            function () {
              if ("Series Page" == h()) {
                var a = l.split("/")[3].replace(/product-|[/]?/g, "");
                window.dataLayer.push({
                  event: "uaEvent",
                  nonInteraction: !1,
                  eventCategory: "Series Page+" + a,
                  eventAction: "Photo Gallery",
                  eventLabel: "Before",
                });
              } else
                window.dataLayer.push({
                  event: "uaEvent",
                  nonInteraction: !1,
                  eventCategory: h(),
                  eventAction: "Photo Gallery",
                  eventLabel: "Before",
                });
            }
          ),
          b(".cp-slide-photo-gallery .cp-left-right-btns .next-arrow").on(
            "click",
            function () {
              if ("Series Page" == h()) {
                var a = l.split("/")[3].replace(/product-|[/]?/g, "");
                window.dataLayer.push({
                  event: "uaEvent",
                  nonInteraction: !1,
                  eventCategory: "Series Page+" + a,
                  eventAction: "Photo Gallery",
                  eventLabel: "After",
                });
              } else
                window.dataLayer.push({
                  event: "uaEvent",
                  nonInteraction: !1,
                  eventCategory: h(),
                  eventAction: "Photo Gallery",
                  eventLabel: "After",
                });
            }
          ),
          b(".cp-slide-photo-gallery .slides-box .slide img").on(
            "click",
            function () {
              var a =
                  b(
                    ".cp-slide-photo-gallery .slides-box .slide .img-box img"
                  ).index(b(this)) + 1,
                c = " + " + b(this).parent().next("p").text().trim();
              if ("Series Page" == h()) {
                var e = l.split("/")[3].replace(/product-|[/]?/g, "");
                window.dataLayer.push({
                  event: "uaEvent",
                  nonInteraction: !1,
                  eventCategory: "Series Page+" + e,
                  eventAction: "Photo Gallery",
                  eventLabel: "img" + a + c,
                });
              } else
                window.dataLayer.push({
                  event: "uaEvent",
                  nonInteraction: !1,
                  eventCategory: h(),
                  eventAction: "Photo Gallery",
                  eventLabel: "img" + a + c,
                });
            }
          ));
        b(document).on(
          "click",
          ".search-result .without-result .button-box a",
          function () {
            p({
              nonInteraction: !1,
              eventCategory: "Search Result Page",
              eventAction:
                b(".result-item.active").text().trim() +
                ": Recommended Platforms",
              eventLabel: b(this).find(".title").text().trim(),
            });
          }
        );
        b(document).on("click", ".cp-email-input", function (a) {
          window.dataLayer.push({
            event: "uaEvent",
            eventCategory: "Bottom Function",
            eventAction: h(),
            eventLabel: "Input email",
          });
          var c = b(a.target);
          a = b(a.currentTarget);
          c.is("button") || a.find("input").focus();
        });
        b("a.navigate").on("click", function (a) {
          a = b(this).parent().find(".title").text().trim();
          var e =
            "Series Page" == h()
              ? l.split("/")[3].replace(/product-|[/]?/g, "")
              : c;
          window.dataLayer.push({
            event: "uaEvent",
            nonInteraction: !1,
            eventCategory: "Series Page+" + e,
            eventAction: "Product Entry",
            eventLabel:
              "Learnmore +" +
              a.replace(/\n/g, "").replace(/  /g, "").replace(/New/g, ""),
          });
        });
        b(".gradient-bg .main .left-image")
          .find("img")
          .on("click", function (a) {
            b(".img img").index(b(this));
            a = b(this).closest(".img").parent().find(".title a").text().trim();
            if ("Series Page" == h()) {
              var c = l.split("/")[3].replace(/product-|[/]?/g, "");
              window.dataLayer.push({
                event: "uaEvent",
                nonInteraction: !1,
                eventCategory: "Series Page+" + c,
                eventAction: "Hero Banner Entry",
                eventLabel: "img+" + a,
              });
            } else window.dataLayer.push({ event: "uaEvent", nonInteraction: !1, eventCategory: h(), eventAction: "Product Card", eventLabel: "img+" + a });
          });
        b(".gradient-bg .main .left-image")
          .find(".learn-more")
          .on("click", function (a) {
            b("a.learn-more").index(b(this));
            a =
              b(".gradient-bg .main  .left-image").find("a").attr("href") || "";
            var c = (a = a.split("?")[0].split("#")[0]).lastIndexOf("/");
            a = a.substring(c + 1);
            "Series Page" == h()
              ? ((c = l.split("/")[3].replace(/product-|[/]?/g, "")),
                window.dataLayer.push({
                  event: "uaEvent",
                  nonInteraction: !1,
                  eventCategory: "Series Page+" + c,
                  eventAction: "Hero Banner Entry",
                  eventLabel: b(this).text() + "+" + a,
                }))
              : window.dataLayer.push({
                  event: "uaEvent",
                  nonInteraction: !1,
                  eventCategory: h(),
                  eventAction: "Product Card",
                  eventLabel: b(this).text() + "+" + a,
                });
          });
        b(".gradient-bg .main .right-image")
          .find("img")
          .on("click", function (a) {
            b(".img-box img").index(b(this));
            var c = "";
            a =
              b(".gradient-bg .main .right-image").find("a").attr("href") || "";
            if (0 < a.indexOf("smartphone")) {
              var e = /smartphone-((\w|-|\s)+)/gi;
              a.replace(e, function (a, b) {
                c = b;
              });
            } else
              0 < a.indexOf("product")
                ? ((e = /product\/((\w|-|\s)+)/gi),
                  a.replace(e, function (a, b) {
                    c = b;
                  }))
                : (c = l.split("/")[4]);
            "Series Page" == h()
              ? ((a = l.split("/")[3].replace(/product-|[/]?/g, "")),
                window.dataLayer.push({
                  event: "uaEvent",
                  nonInteraction: !1,
                  eventCategory: "Series Page+" + a,
                  eventAction: "Hero Banner Entry",
                  eventLabel: "img+" + c,
                }))
              : window.dataLayer.push({
                  event: "uaEvent",
                  nonInteraction: !1,
                  eventCategory: h(),
                  eventAction: "Product Card",
                  eventLabel: "img+" + c,
                });
          });
        b(".gradient-bg .main .right-image")
          .find(".learn-more")
          .on("click", function (a) {
            b("a.learn-more").index(b(this));
            var c = "";
            a =
              b(".gradient-bg .main .right-image").find("a").attr("href") || "";
            if (0 < a.indexOf("smartphone")) {
              var e = /smartphone-((\w|-|\s)+)/gi;
              a.replace(e, function (a, b) {
                c = b;
              });
            } else
              0 < a.indexOf("product")
                ? ((e = /product\/((\w|-|\s)+)/gi),
                  a.replace(e, function (a, b) {
                    c = b;
                  }))
                : (c = l.split("/")[4]);
            "Series Page" == h()
              ? ((a = l.split("/")[3].replace(/product-|[/]?/g, "")),
                window.dataLayer.push({
                  event: "uaEvent",
                  nonInteraction: !1,
                  eventCategory: "Series Page+" + a,
                  eventAction: "Hero Banner Entry",
                  eventLabel: b(this).text() + "+" + c,
                }))
              : window.dataLayer.push({
                  event: "uaEvent",
                  nonInteraction: !1,
                  eventCategory: h(),
                  eventAction: "Product Card",
                  eventLabel: b(this).text() + "+" + c,
                });
          });
        b(".find__card-banner.safe-area .right a.action").on(
          "click",
          function (a) {
            b("a.action").index(b(this));
            a = b(this).prevAll(".title").text().trim();
            if ("Series Page" == h()) {
              var c = l.split("/")[3].replace(/product-|[/]?/g, "");
              window.dataLayer.push({
                event: "uaEvent",
                nonInteraction: !1,
                eventCategory: "Series Page+" + c,
                eventAction: "Hero Banner Entry",
                eventLabel: "Learnmore+" + a,
              });
            } else
              window.dataLayer.push({
                event: "uaEvent",
                nonInteraction: !1,
                eventCategory: h(),
                eventAction: "Product Card",
                eventLabel: "Learnmore+" + a,
              });
          }
        );
        b(".find__card-banner.safe-area .left .actions a").on(
          "click",
          function (a) {
            b(".actions a").index(b(this));
            a = b(this).find(".title").find("a").text().trim();
            if ("Series Page" == h()) {
              var c = l.split("/")[3].replace(/product-|[/]?/g, "");
              window.dataLayer.push({
                event: "uaEvent",
                nonInteraction: !1,
                eventCategory: "Series Page+" + c,
                eventAction: "Hero Banner Entry",
                eventLabel: b(this).text().trim() + "+" + a,
              });
            } else
              window.dataLayer.push({
                event: "uaEvent",
                nonInteraction: !1,
                eventCategory: h(),
                eventAction: "Product Card",
                eventLabel: b(this).text().trim() + "+" + a,
              });
          }
        );
        b(".find__card-banner.safe-area .left .img-box").on(
          "click",
          function (a) {
            a = b(this).parent().next(".title").find("a").text().trim();
            if ("Series Page" == h()) {
              var c = l.split("/")[3].replace(/product-|[/]?/g, "");
              window.dataLayer.push({
                event: "uaEvent",
                nonInteraction: !1,
                eventCategory: "Series Page+" + c,
                eventAction: "Hero Banner Entry",
                eventLabel: b(this).text().trim() + 1 + "+" + a,
              });
            } else
              window.dataLayer.push({
                event: "uaEvent",
                nonInteraction: !1,
                eventCategory: h(),
                eventAction: "Product Card",
                eventLabel: b(this).text().trim() + "+" + a,
              });
          }
        );
        b(".top-art-li").on("click", function () {
          var a = b(this).text().trim();
          if ("Series Page" == h()) {
            var c = l.split("/")[3].replace(/product-|[/]?/g, "");
            window.dataLayer.push({
              event: "uaEvent",
              nonInteraction: !1,
              eventCategory: "Series Page+" + c,
              eventAction: "Product feature",
              eventLabel: a,
            });
          } else window.dataLayer.push({ event: "uaEvent", nonInteraction: !1, eventCategory: h(), eventAction: "Product feature", eventLabel: a });
        });
        b(".find__banner-content.safe-area .features li span").on(
          "click",
          function () {
            var a = b(this).text().trim();
            if ("Series Page" == h()) {
              var c = l.split("/")[3].replace(/product-|[/]?/g, "");
              window.dataLayer.push({
                event: "uaEvent",
                nonInteraction: !1,
                eventCategory: "Series Page+" + c,
                eventAction: "Product feature",
                eventLabel: a,
              });
            } else
              window.dataLayer.push({
                event: "uaEvent",
                nonInteraction: !1,
                eventCategory: h(),
                eventAction: "Product feature",
                eventLabel: a,
              });
          }
        );
        b(".content .play-btn").on("click", function (a) {
          window.dataLayer.push({
            event: "uaEvent",
            nonInteraction: !1,
            eventCategory: h(),
            eventAction: "Product Entry",
            eventLabel:
              "video + " + b(this).parent().find(".intro .title").text().trim(),
          });
        });
        b(document).on(
          "click",
          ".accessories-list-wrap .list-item a",
          function (a) {
            var c = b(".accessories-recommond .component_title").text().trim();
            if ("img" == a.target.tagName.toLowerCase()) {
              a = "img";
              var e = b(this).next(".title").text().trim();
            } else
              (a = "learn more"),
                (e = b(this).parent().prevAll(".title").text().trim());
            window.dataLayer.push({
              event: "uaEvent",
              nonInteraction: !1,
              eventCategory: "Product List Page+" + c,
              eventAction: "Product Click",
              eventLabel: a + "+" + e,
            });
          }
        );
        b(".cp-page-banner a").on("click", function (a) {
          if ("img" == a.target.tagName.toLowerCase()) {
            a = "img";
            var c = b(this).parent().find("h3.title").text().trim();
          } else (a = b(this).text().trim()), (c = b(this).parent().parent().find(".title").text().trim());
          window.dataLayer.push({
            event: "uaEvent",
            nonInteraction: !1,
            eventCategory: "Online Store Page",
            eventAction: "Banner",
            eventLabel: a + " + " + c,
          });
        });
        b(document).on(
          "click",
          ".cp-card-list .cp-list-item .img-box",
          function (a) {
            window.dataLayer.push({
              event: "uaEvent",
              nonInteraction: !1,
              eventCategory: "Online Store Page",
              eventAction: "Store Entry",
              eventLabel:
                "img + " + b(this).parent().next().find(".title").text().trim(),
            });
          }
        );
        b(document).on(
          "click",
          ".official-flagship-items .item a.img-box",
          function (a) {
            window.dataLayer.push({
              event: "uaEvent",
              nonInteraction: !1,
              eventCategory: "Online Store Page",
              eventAction: "Store Entry",
              eventLabel: "img + " + b(this).next(".desc").text().trim(),
            });
          }
        );
        b(".cp-card-list .cp-list-item .action").on("click", function () {
          window.dataLayer.push({
            event: "uaEvent",
            nonInteraction: !1,
            eventCategory: "Online Store Page",
            eventAction: "Store Entry",
            eventLabel:
              b(this).text().trim() +
              " + " +
              b(this).parent().find(".title").text().trim(),
          });
        });
        b(".official-flagship-items .item .bug a").on("click", function () {
          window.dataLayer.push({
            event: "uaEvent",
            nonInteraction: !1,
            eventCategory: "Online Store Page",
            eventAction: "Store Entry",
            eventLabel:
              b(this).text().trim() +
              " + " +
              b(this).parent().prevAll(".desc").text().trim(),
          });
        });
        b(".cp-card-list .show-more").on("click", function () {
          window.dataLayer.push({
            event: "uaEvent",
            nonInteraction: !1,
            eventCategory: "Online Store Page",
            eventAction: "Store Entry",
            eventLabel: b(this).find("p").text().trim(),
          });
        });
        b(".series-mb-menu .menu-list li").on("click", function () {
          window.dataLayer.push({
            event: "uaEvent",
            nonInteraction: !1,
            eventCategory: e,
            eventAction: "Top navigation",
            eventLabel: b(this).text().trim(),
          });
        });
        b(document).on(
          "click",
          ".tab-wrap .nav-content .type-nav li",
          function () {
            var a = b(this).parent().prevAll(".page-title").text().trim();
            window.dataLayer.push({
              event: "uaEvent",
              nonInteraction: !1,
              eventCategory: "Product List Page+" + a,
              eventAction: "Product type",
              eventLabel: b(this).text().trim(),
            });
          }
        );
        b(document).on(
          "click",
          ".swiper-slide.active .type-list_item",
          function (a) {
            var c = b(".swiper-slide.active .type-list_item")
                .parent()
                .parent()
                .parent()
                .prev()
                .find(".nav-content .page-title")
                .text()
                .trim(),
              e = b(this).find(".description a .title").text().trim(),
              g = b(".type-list_item").index(b(this));
            if ("img" == a.target.tagName.toLowerCase())
              window.dataLayer.push({
                event: "uaEvent",
                nonInteraction: !1,
                eventCategory: "Product List Page+" + c,
                eventAction: "Product Entry",
                eventLabel: "img + " + g + " + " + e,
              });
            else if ("a" == a.target.tagName.toLowerCase()) {
              var h;
              b(a.target).parent().hasClass("learn-more")
                ? (h = "learnmore")
                : b(a.target).parent().hasClass("buy-btn") && (h = "buy");
              window.dataLayer.push({
                event: "uaEvent",
                nonInteraction: !1,
                eventCategory: "Product List Page+" + c,
                eventAction: "Product Entry",
                eventLabel: h + " + " + g + " + " + e,
              });
            }
          }
        );
        b(document).on(
          "click",
          ".swiper-slide.active .list-item .item-box .img-box",
          function () {
            var a = b(".swiper-slide.active .type-list_item")
                .parent()
                .parent()
                .parent()
                .prev()
                .find(".nav-content .page-title")
                .text()
                .trim(),
              c = b(this)
                .parent()
                .nextAll(".description")
                .find("a .title")
                .text()
                .trim();
            window.dataLayer.push({
              event: "uaEvent",
              nonInteraction: !1,
              eventCategory: "Product List Page+" + a,
              eventAction: "Product Click",
              eventLabel: "img+" + c,
            });
          }
        );
        b(document).on(
          "click",
          ".swiper-slide.active .list-item .description .price a",
          function (a) {
            var c,
              e = b(".swiper-slide.active .type-list_item")
                .parent()
                .parent()
                .parent()
                .prev()
                .find(".nav-content .page-title")
                .text()
                .trim(),
              g = b(this)
                .parent()
                .parent()
                .prevAll("a")
                .find(".title")
                .text()
                .trim();
            b(a.target).parent().hasClass("learn-more")
              ? (c = "learnmore")
              : b(a.target).parent().hasClass("buy-btn") && (c = "buy");
            window.dataLayer.push({
              event: "uaEvent",
              nonInteraction: !1,
              eventCategory: "Product List Page+" + e,
              eventAction: "Product Click",
              eventLabel: c + "+" + g,
            });
          }
        );
        b(".aesthetics-image .locator-video-play-btn").on("click", function () {
          window.dataLayer.push({
            event: "uaEvent",
            nonInteraction: !1,
            eventCategory: e,
            eventAction: "Content Video",
            eventLabel: b(this).text().trim(),
          });
        });
        b(".aesthetics-image a.img").on("click", function () {
          window.dataLayer.push({
            event: "uaEvent",
            nonInteraction: !1,
            eventCategory: e,
            eventAction: "Content Photo",
            eventLabel: b(this).text().trim(),
          });
        });
        b(".aesthetic-store .store-title .see-more").on("click", function () {
          window.dataLayer.push({
            event: "uaEvent",
            nonInteraction: !1,
            eventCategory: e,
            eventAction: b(".aesthetic-store .store-title .title")
              .text()
              .trim(),
            eventLabel: b(this).text().trim(),
          });
        });
        b(".aesthetic-store .cities .learn-more").on("click", function () {
          window.dataLayer.push({
            event: "uaEvent",
            nonInteraction: !1,
            eventCategory: e,
            eventAction: b(this).parent().find(".title").text().trim(),
            eventLabel: b(this).text().trim(),
          });
        });
        b(".aesthetic-store .navigation li").on("click", function () {
          window.dataLayer.push({
            event: "uaEvent",
            nonInteraction: !1,
            eventCategory: e,
            eventAction: "Store Lists",
            eventLabel: b(this).text().trim(),
          });
        });
        b(".aesthetic-describe a").on("click", function () {
          var a =
            0 <
            b(".aesthetic-store .aesthetic-describe.has-video .play-btn").length
              ? "Content Video"
              : "Content Photo";
          window.dataLayer.push({
            event: "uaEvent",
            nonInteraction: !1,
            eventCategory: e,
            eventAction: a,
            eventLabel: b(".aesthetic-describe .desc").text().trim(),
          });
        });
        b(".aesthetic-homepage .related-news a").on("click", function () {
          window.dataLayer.push({
            event: "uaEvent",
            nonInteraction: !1,
            eventCategory: e,
            eventAction: "Related News",
            eventLabel: b(this).parent().find(".main-title").text().trim(),
          });
        });
        b(".aesthetic-homepage .footer-banner a").on("click", function () {
          window.dataLayer.push({
            event: "uaEvent",
            nonInteraction: !1,
            eventCategory: e,
            eventAction: "Jump to other store",
            eventLabel: b(this).text().trim(),
          });
        });
        b(".slide-link").on("click", function (a) {
          0 < b(".slides-nav.safe-area li").length &&
            b(".slides-nav.safe-area li").index(b("li.slick-active.active"));
          a = b(this).parent().find("img").attr("alt");
          p({
            nonInteraction: !1,
            eventCategory: "Homepage",
            eventAction: "Hero Banner",
            eventLabel: "img+" + a,
          });
        });
        b(document).on(
          "input",
          "input.pcexcursion.seekinput.active",
          function () {
            I = b("input.pcexcursion.seekinput.active").val();
          }
        );
        b(".seek-input .pcexcursion").bind("keypress", function (a) {
          "13" == a.keyCode &&
            p({
              nonInteraction: !1,
              eventCategory: "Search Result Page",
              eventAction: "Search",
              eventLabel: "Normal search+" + I,
            });
        });
        b(document).on(
          "click",
          ".search-page .container-filter .filter-item",
          function () {
            p({
              nonInteraction: !1,
              eventCategory: "Search Result Page",
              eventAction:
                b(".search-value ul.result-tab li.active").text().trim() +
                ":Filter",
              eventLabel: b(this).find(".title").text().trim(),
            });
          }
        );
        b(document).on(
          "click",
          ".search-page .mb-filter-box .choose-item",
          function () {
            p({
              nonInteraction: !1,
              eventCategory: "Search Result Page",
              eventAction:
                b(".search-value ul.result-tab li.active").text().trim() +
                ":Filter",
              eventLabel: b(this).text().trim(),
            });
          }
        );
        b(document).on("click", ".cp-cookie-tip-euro .link", function () {
          p({
            event: "uaEvent",
            nonInteraction: !1,
            eventCategory: "Notice Bar",
            eventAction: h(),
            eventLabel:
              "Cookie:" + b(".cp-cookie-tip-euro .link").text().trim(),
          });
        });
        b(document).on("click", ".cp-cookie-tip-euro .close", function () {
          p({
            event: "uaEvent",
            nonInteraction: !0,
            eventCategory: "Notice Bar",
            eventAction: h(),
            eventLabel: "Cookie: Close",
          });
        });
        b(document).on("click", ".cp-cookie-tip .link", function () {
          p({
            event: "uaEvent",
            nonInteraction: !1,
            eventCategory: "Notice Bar",
            eventAction: h(),
            eventLabel: "Cookie:" + b(".cp-cookie-tip .link").text().trim(),
          });
        });
        b(document).on("click", ".cp-cookie-tip .close", function () {
          p({
            event: "uaEvent",
            nonInteraction: !0,
            eventCategory: "Notice Bar",
            eventAction: h(),
            eventLabel: "Cookie: Close",
          });
        });
        b(".cp-notice-bar .actions .watch").on("click", function () {
          p({
            event: "uaEvent",
            nonInteraction: !1,
            eventCategory: "Notice Bar",
            eventAction: e,
            eventLabel: "Heytap Store:" + b(this).text().trim(),
          });
        });
        b(document).on("click", ".cp-notice-bar .close", function () {
          p({
            event: "uaEvent",
            nonInteraction: !0,
            eventCategory: "Notice Bar",
            eventAction: h(),
            eventLabel: "Heytap Store: Close",
          });
        });
        b(document).on("click", ".all-pop-up-bottom .androidOrpc", function () {
          p({
            event: "uaEvent",
            nonInteraction: !1,
            eventCategory: "Floating Window",
            eventAction: h(),
            eventLabel:
              "Heytap Store:" +
              b(".all-pop-up-bottom .androidOrpc").text().trim(),
          });
        });
        b(document).on("click", ".all-pop-up-bottom .ios", function () {
          p({
            event: "uaEvent",
            nonInteraction: !1,
            eventCategory: "Floating Window",
            eventAction: h(),
            eventLabel:
              "Heytap Store:" + b(".all-pop-up-bottom .ios").text().trim(),
          });
        });
        b(document).on("click", "#all-pop-up-close_x", function () {
          p({
            event: "uaEvent",
            nonInteraction: !0,
            eventCategory: "Floating Window",
            eventAction: h(),
            eventLabel: "Heytap Store: Close",
          });
        });
      });
    }).call(this, a(3));
  },
  50: function (c, d, a) {
    (function (b) {
      a.d(d, "a", function () {
        return u;
      });
      a(16);
      a(7);
      a(57);
      var c = a(0),
        u = function () {
          var a =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : navigator.userAgent.toLowerCase(),
            b = -1 != a.indexOf("ucbrowser"),
            c = !!a.match(/qqbrowse/) || a.match(/mqqbrowser/i),
            e = "oppo" == a.match(/oppo/i),
            g = "heytap" == a.match(/heytap/i),
            h = "pacm00" == a.match(/pacm00/i),
            d = "vivo" == a.match(/vivo/i),
            n = "mi" == a.match(/mi\s/i),
            l = "mix" == a.match(/mix\s/i),
            r = "redmi" == a.match(/redmi/i);
          a = "sm-" == a.match(/sm-/i);
          return b || c || e || g || h || d || n || l || r || a;
        },
        l = b("html").hasClass("view-mobile"),
        h = b("html").hasClass("view-portrait"),
        g = l ? "mob" : h ? "pad" : "pc",
        e = function () {
          var a = b(".normal-video.lazyload-video:not(.loaded)");
          0 >= a.length ||
            a.each(function (a, c) {
              a = b(document).scrollTop();
              b(c).offset().top - a < window.innerHeight &&
                (b(c).attr("poster") ||
                  b(c).attr("poster", b(c).attr("data-poster-".concat(g))),
                u() && b(c).addClass("loaded"));
              b(c).offset().top - a < 0.65 * window.innerHeight &&
                (u() ||
                  b(c).attr("src") ||
                  b(c).attr({
                    src: b(c).attr("data-src-".concat(g)),
                    autoplay: !0,
                  }),
                b(c).addClass("loaded"));
            });
        },
        n = function () {
          var a = b(".normal-video");
          if (!(0 >= a.length)) {
            var h = b(".normal-video.lazyload-video:not(.loaded)");
            0 < h.length &&
              (e(),
              window.addEventListener(
                "scroll",
                c.a.throttle(function () {
                  e();
                }, 500)
              ));
            a.length > h.length &&
              b(".normal-video:not(.lazyload-video)").each(function (a, c) {
                b(c).attr("poster", b(c).attr("data-poster-".concat(g)));
                u() ||
                  b(c).attr({
                    src: b(c).attr("data-src-".concat(g)),
                    autoplay: !0,
                  });
              });
          }
        };
      b(function () {
        n();
      });
    }).call(this, a(3));
  },
  504: function (c, d, a) {
    (function (b) {
      a(8);
      a(6);
      b(function () {
        b(".bubblen-animete-btn").each(function () {
          var a = b(this);
          a[0].addEventListener("click", function (b) {
            a.attr(
              "style",
              (function (a, b) {
                a = a.offset();
                var c = b.pageX - a.left;
                return "--click-start-top: "
                  .concat(b.pageY - a.top, "px;--click-start-left: ")
                  .concat(c, "px");
              })(a, b)
            );
            setTimeout(function () {
              a.addClass("click-animated");
            }, 0);
            setTimeout(function () {
              a.removeClass("click-animated");
            }, 240);
          });
        });
      });
    }).call(this, a(3));
  },
  505: function (c, d, a) {
    (function (b, c) {
      a(8);
      a(18);
      a(71);
      a(16);
      a(70);
      a(7);
      a(72);
      a(20);
      a(31);
      a(19);
      a(6);
      a(506);
      var d = a(32),
        l = a.n(d),
        h = a(54);
      d = a(390);
      var g = a.n(d);
      d = a(391);
      var e = a.n(d),
        n = a(17),
        r = a(135),
        p = a(0),
        v = b(".header-v2 .header-main-pc .header-left"),
        m = b(".header-v2 .search-list .quick-link"),
        t = b(".header-v2 .header-main-pc .cart-box");
      window.addEventListener(
        "resize",
        p.a.throttle(function () {
          b(".header-v2").show();
        }, 500)
      );
      b(".header-v2").show();
      b(".header-v2 .visibility").removeClass("visibility");
      c.OP_VUE_REGISTRY.set("header-v2", {
        data: function () {
          return {
            userData: {},
            userInfo: { isLogin: !1, name: v.data("txtNologin"), avatar: g.a },
            baseData: {},
            inputValue: "",
            dataCart: {},
            searchData: [],
            userShow: !1,
            cartShow: !1,
            navindex: -1,
            maskShow: !1,
            searchShow: !1,
            dataList: [],
            serachHistory: JSON.parse(localStorage.getItem("search_keywords")),
            menuflag: 0,
            bodyClass: "",
            thirdNavIndex: -1,
            showAllFlag: !0,
            outOfStorck: 0,
            downloadBoxShow: !1,
            memberData: {},
            isCn: "cn" == opsiteBase.UIUtils.getCountryCode(),
            isTouch: !!(
              "ontouchstart" in window ||
              (window.DocumentTouch && document instanceof DocumentTouch)
            ),
          };
        },
        watch: {
          inputValue: function (a) {
            0 < a.length ? this.getSearchData() : (this.searchData = []);
          },
        },
        computed: {
          productType: function () {
            return function (a) {
              var b = "";
              return (
                a &&
                  0 < a.length &&
                  a.forEach(function (c, e) {
                    b =
                      0 < e && e < a.length
                        ? "".concat(b, " | ").concat(c.optLabel)
                        : "".concat(b).concat(c.optLabel);
                  }),
                b
              );
            };
          },
          isHasProduct: function () {
            return (
              this.dataList.cartItems && 0 < this.dataList.cartItems.length
            );
          },
        },
        created: function () {
          var a = this;
          b("body:eq(0)").addClass("body-header-v2");
          window.OP_bus.$on("noSignIn", function () {
            a.userInfo = a.$options.data().userInfo;
          });
        },
        methods: {
          initInfo: function () {
            var a = this;
            v &&
              0 < v.length &&
              (this.userData = {
                txtMember: v.data("txtMember"),
                txtLogOut: v.data("txtLogout"),
                txtSignUp: v.data("txtSignup"),
                txtSigniIn: v.data("txtSignin"),
                txtUser: v.data("txtUserCenter"),
                textOrder: v.data("txtOrder"),
                textDownLoad: v.data("txtDownload"),
                userLink: v.data("userCenter"),
                memberLink: v.data("member"),
                orderLink: v.data("order"),
                downloadLink: v.data("download"),
                userShow: v.data("userShow"),
              });
            t &&
              0 < t.length &&
              (this.dataCart = {
                cartShow: t.data("cartShow"),
                emptyImg: t.data("txtImg") || e.a,
                txtEmpty1: t.data("txtEmpty1"),
                txtEmpty2: t.data("txtEmpty2"),
                txtSign: t.data("txtSign"),
                txtShopping: t.data("txtShopping"),
                shoppingLink: t.data("shopping"),
                txtViewCart: t.data("txtViewcart"),
                txtCheckOut: t.data("txtCheckout"),
                viewCartLink: t.data("viewcart"),
                isLink: t.data("islink"),
                checkOutLink: t.data("checkout"),
                txtStock: t.data("txtStock"),
                txtViewAll: t.data("txtView"),
                txtCollapseAll: t.data("txtCollapse"),
                txtYourCart: t.data("txtYourCart"),
                txtNoStock: t.data("txtNostock"),
                txtNoSale: t.data("txtNosale"),
                txtCommingSoon: t.data("txtCommingsoon"),
                cartLink: t.data("cartApi"),
              });
            m &&
              0 < m.length &&
              (this.baseData = {
                searchApi: m.data("searchApi"),
                placeholder: m.data("txtPlaceholder"),
                historyTitle: m.data("txtHistory"),
                searchLink: m.data("searchLink"),
                searchShow: m.data("searchShow"),
                searchKey: m.data("searchKey"),
              });
            this.userData.userShow &&
              (p.a.urlParam("rtCode")
                ? (p.a.deleteParams("rtCode"),
                  p.a.toast(
                    v.data("txtLoginfail") ||
                      "Login failed, please try again later!"
                  ))
                : p.a.isSignIn().then(function (b) {
                    if (1 == b.code) {
                      b = l.a.get("username");
                      var c = l.a.get("avatar");
                      a.successCallBack(b, c);
                    } else p.a.goToSignIn("imp", a.successCallBack);
                  }));
          },
          initCartData: function () {
            var a = this,
              b = t.data("cartApi");
            b &&
              Object(n.b)(b, {
                storeCode: opsiteBase.UIUtils.getCountryCode(),
                storeViewCode: opsiteBase.UIUtils.getCountryCode(),
                countryCode: opsiteBase.UIUtils.getCountryCode().toUpperCase(),
                deviceType: Object(r.a)() ? 1 : 2,
                source: Object(r.a)() ? 2 : 1,
              }).then(function (b) {
                var c = b.data;
                if (1 == b.ret && 0 < c.cartItems.length) {
                  var e = function (b) {
                      b.stockIndex = a.outOfStorck;
                      h.push(b);
                      a.outOfStorck++;
                    },
                    g = [],
                    h = [];
                  c.cartItems.forEach(function (a) {
                    if (1 == a.salesStatus && 0 != a.stockStatus) {
                      var b = !0;
                      a.childItems &&
                        a.childItems.forEach(function (a) {
                          (1 == a.salesStatus && 0 != a.stockStatus) ||
                            (b = !1);
                        });
                      b ? ((a.stockIndex = !1), g.push(a)) : e(a);
                    } else e(a);
                  });
                  0 < a.outOfStorck && (a.showAllFlag = !1);
                  c.cartItems = g.concat(h);
                  a.dataList = c;
                }
              });
          },
          successCallBack: function (a, b) {
            var c = this;
            this.userInfo = { name: Object(h.c)(a), avatar: b, isLogin: !0 };
            this.dataCart.isLink || this.initCartData();
            this.memberData.level = l.a.get("level");
            this.memberData.levelName = l.a.get("levelName");
            !this.memberData.levelName &&
              t.data("memberApi") &&
              Object(n.b)(t.data("memberApi"), {
                storeCode: opsiteBase.UIUtils.getCountryCode(),
                storeViewCode: opsiteBase.UIUtils.getCountryCode(),
                countryCode: opsiteBase.UIUtils.getCountryCode().toUpperCase(),
                deviceType: Object(r.a)() ? 1 : 2,
                source: Object(r.a)() ? 2 : 1,
              }).then(function (a) {
                a.data &&
                  ((c.memberData.level = a.data.level),
                  (c.memberData.levelName = a.data.levelName),
                  l.a.set("level", a.data.level),
                  l.a.set("levelName", a.data.levelName));
              });
          },
          getSearchData: function () {
            var a = this,
              c =
                m.data("searchApi") ||
                "https://opsiteapi-sg.oppo.com/gsmsearch/suggest";
            Object(n.a)(c, {
              query: this.inputValue,
              lang:
                m.data("langCode") ||
                b("html:eq(0)").attr("lang").toLowerCase(),
              count: 5,
              userRoles: "",
              requestId: "",
            }).then(function (b) {
              b.code;
              (b = b.data) &&
                b.suggests &&
                0 < b.suggests.length &&
                (a.searchData = b.suggests);
            });
          },
          saveSearchWords: function (a) {
            var b = JSON.parse(localStorage.getItem("search_keywords"));
            b
              ? (b.includes(a) && b.splice(b.indexOf(a), 1),
                b.unshift(a),
                10 < b.length && b.pop(),
                localStorage.setItem("search_keywords", JSON.stringify(b)))
              : ((b = []).unshift(a),
                localStorage.setItem("search_keywords", JSON.stringify(b)));
          },
          clearSearch: function () {
            this.inputValue = "";
          },
          fixHtml: function (a, c) {
            a
              ? ("cnCart" != c &&
                  ((this.maskShow = !0),
                  b(".header-v2").addClass("fixed-header-v2")),
                b("#oc-wrapper:eq(0)").addClass("up-zindex"),
                b("body:eq(0)").removeClass("dark-theme"),
                b("body:eq(0)").addClass("light-theme"))
              : ((this.maskShow = !1),
                b(".header-v2").removeClass("fixed-header-v2"),
                b("#oc-wrapper:eq(0)").removeClass("up-zindex"),
                b("body:eq(0)").attr("class", this.bodyClass));
          },
          removeSearchWords: function (a) {
            var b = JSON.parse(localStorage.getItem("search_keywords"));
            "all" == a
              ? ((this.serachHistory = []),
                localStorage.setItem("search_keywords", JSON.stringify([])))
              : b.includes(a) &&
                (this.serachHistory.splice(this.serachHistory.indexOf(a), 1),
                b.splice(b.indexOf(a), 1),
                localStorage.setItem("search_keywords", JSON.stringify(b)));
          },
          inputFoucs: function () {
            this.fixHtml(!0);
            this.searchShow = !0;
          },
          inputKeyup: function (a) {
            13 == a.keyCode &&
              ((a = this.inputValue || this.baseData.searchKey),
              a.trim() && this.saveSearchWords(a),
              ga4Event &&
                ga4Event({
                  event_name: "search",
                  search_type: "Normal Search",
                  search_term: a,
                }),
              (window.location.href = this.baseData.searchLink + a + "#" + a));
          },
          mouseOver: function (a) {
            this.searchShow = !1;
            this.fixHtml(!0, a);
            "cart" == a
              ? (this.cartShow = !0)
              : "user" == a && (this.userShow = !0);
          },
          mouseLeave: function (a) {
            "cart" == a
              ? (this.cartShow = !1)
              : "user" == a && (this.userShow = !1);
            this.fixHtml();
          },
          navOver: function (a, b) {
            this.navindex != a &&
              this.isTouch &&
              1024 < document.body.clientWidth &&
              (b || window.event).preventDefault();
            this.searchShow = !1;
            this.fixHtml(-1 !== a);
            this.navindex = a;
          },
          menuShow: function () {
            var a = this;
            this.menuflag = 0 < this.menuflag ? 0 : 1;
            this.fixHtml(this.menuflag);
            this.searchShow = this.downloadBoxShow = !1;
            this.thirdNavIndex = -1;
            this.menuflag &&
              this.$nextTick(function () {
                a.boxScroll();
              });
          },
          fixHeader: function () {
            var a = b("#header-v2");
            if (1 == a.length) {
              b("#oc-container").addClass("oc-container-v2");
              var c = a.offset().top + 1,
                e = b("#oc-container").css("padding-top"),
                g =
                  window.location.href
                    .split("//")[1]
                    .split("?")[0]
                    .split("#")[0] || "";
              window.NoScrollFixed ||
                -1 != g.indexOf("support.") ||
                b(window).scroll(function () {
                  b(document).scrollTop() > c
                    ? (a.addClass("new-header-fixed"),
                      b("#oc-container").css({ "padding-top": "0px" }))
                    : (a.removeClass("new-header-fixed"),
                      b("#oc-container").css({ "padding-top": e }));
                });
            }
          },
          changeThirdNav: function (a) {
            this.thirdNavIndex = this.thirdNavIndex == a ? -1 : a;
          },
          cartChange: function () {
            this.menuflag = 2;
            this.fixHtml(!0);
          },
          searchChange: function () {
            this.menuflag = 3;
            this.fixHtml(!0);
            setTimeout(function () {
              document.getElementById("searchInput").focus();
            }, 240);
          },
          closeMask: function () {
            this.searchShow = !1;
            this.menuflag = 0;
            this.fixHtml();
          },
          viewAll: function () {
            this.showAllFlag = !this.showAllFlag;
          },
          boxScroll: function () {
            var a =
                window.innerHeight ||
                document.documentElement.clientHeight ||
                document.body.clientHeight,
              b =
                document.getElementsByClassName("download-box")[0] &&
                document
                  .getElementsByClassName("download-box")[0]
                  .getBoundingClientRect().top;
            b < a - 42 && 0 < b && (this.downloadBoxShow = !0);
          },
          filterStock: function (a, b) {
            var c = "";
            return (
              0 == a
                ? (c = this.dataCart.txtNoSale)
                : 3 == a
                ? (c = this.dataCart.txtCommingSoon)
                : 0 == b && (c = this.dataCart.txtNoStock),
              c
            );
          },
          goLogOut: function () {
            p.a.goToLogOut();
          },
          goSignIn: function () {
            p.a.goToSignIn(window.signInType || "pop", this.successCallBack);
          },
        },
        mounted: function () {
          this.initInfo();
          this.$refs.headerMenuBox.addEventListener("scroll", this.boxScroll);
          this.bodyClass = b("body:eq(0)").attr("class");
          this.fixHeader();
        },
      });
    }).call(this, a(3), a(34));
  },
  506: function (c, d, a) {},
  507: function (c, d, a) {
    (function (b) {
      function c() {
        var a = d.find(".media-link");
        a.off("click");
        a.on("click", function (a) {
          var c = b(this);
          c.hasClass("has-qrcode") && a.preventDefault();
          a = c.siblings(".qrcode");
          d.find(".qrcode").not(a).removeClass("show");
          a.toggleClass("show");
        });
        b(document).on("click", function (a) {
          b(a.target).closest("li").find(".qrcode").hasClass("show") ||
            d.find(".contact-bottom .social-media .qrcode").removeClass("show");
          b(a.currentTarget.activeElement).hasClass("live-chat-pop") ||
            (d.find(".live-chat-pop").removeClass("show"),
            l && b("body").removeClass("noscroll"));
        });
      }
      a(4);
      a(66);
      a(508);
      a(509);
      var d = b("#footer"),
        l = 768 > b(window).width(),
        h = b("#footer").find(".service-pc-list"),
        g = b("#footer").find(".service-mobile-list");
      b(function () {
        var a;
        l
          ? (h.hide(), g.show())
          : (h.show(),
            g.hide(),
            h.css({
              height:
                0.5 * parseInt(document.documentElement.clientHeight) + "px",
            }));
        d.find(".back-top-btn").on("click", function () {
          b("html,body").animate({ scrollTop: 0 });
        });
        d.find(".phone-number").on("click", function (a) {
          a.stopPropagation();
          l &&
            (window.location.href = "tel:".concat(b(this).attr("data-href")));
        });
        d.find(".live-chat-wrap .group-item").on("click", function (a) {
          a.stopPropagation();
        });
        d.find(".contact-us-btn").on("click", function (a) {
          a.stopPropagation();
          a = b(this).find(".live-chat-pop");
          0 !== a.find(".group-item").length &&
            (a.hasClass("show")
              ? (a.removeClass("show"), l && b("body").removeClass("noscroll"))
              : (a.addClass("show"), l && b("body").addClass("noscroll")));
        });
        d.on("click", ".nav dt", function () {
          var a = b(this).closest("dl");
          a.hasClass("opened")
            ? a.removeClass("opened")
            : a.addClass("opened").siblings().removeClass("opened");
        });
        c();
        0 < (a = d.find("nav a.footer-quick-link")).length &&
          a.each(function (a, c) {
            a = b(c).data();
            l ? b(c).attr("href", a.mbHref) : b(c).attr("href", a.pcHref);
          });
        b(window).resize(c);
      });
    }).call(this, a(3));
  },
  508: function (c, d, a) {},
  509: function (c, d, a) {
    (function (b, c) {
      function d(a, b) {
        var c = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
          var e = Object.getOwnPropertySymbols(a);
          b &&
            (e = e.filter(function (b) {
              return Object.getOwnPropertyDescriptor(a, b).enumerable;
            }));
          c.push.apply(c, e);
        }
        return c;
      }
      function l(a) {
        for (var b = 1; b < arguments.length; b++) {
          var c = null != arguments[b] ? arguments[b] : {};
          b % 2
            ? d(Object(c), !0).forEach(function (b) {
                var e = c[b];
                b in a
                  ? Object.defineProperty(a, b, {
                      value: e,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (a[b] = e);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
            : d(Object(c)).forEach(function (b) {
                Object.defineProperty(
                  a,
                  b,
                  Object.getOwnPropertyDescriptor(c, b)
                );
              });
        }
        return a;
      }
      a(18);
      a(16);
      a(49);
      a(12);
      a(87);
      a(13);
      a(7);
      a(24);
      a(89);
      a(20);
      a(19);
      a(510);
      a(338);
      var h = a(17);
      b.OP_VUE_REGISTRY.set("footer_subscribe", {
        data: function () {
          return {
            firstInp: !1,
            inpval: "",
            emailTips: [],
            subscribeSuccess: !1,
            slideState: !1,
            emailCorrect: !1,
            http: "",
            startSubmit: !1,
            submitHasOne: !1,
            httpErrText: "",
          };
        },
        created: function () {},
        mounted: function () {
          var a = this,
            b = c(this.$refs.footerSubscribe).data("emailtip").split(",");
          this.http =
            "https://oppo.us17.list-manage.com/subscribe/post-json?u\x3dd19dc82c25a4ad6f1ca659a5b\x26id\x3db717568b4e";
          b.forEach(function (b, c) {
            a.emailTips.push({ tip: b, new: "", show: !0 });
          });
          document.addEventListener("click", this.clickOutsideSlide);
        },
        computed: {
          filterInpVal: function () {
            var a = this.filterEmail();
            return (this.emailCorrect = !a), a;
          },
          slideItemVal: function () {
            var a = this.inpval.indexOf("@");
            return -1 !== a && this.inpval.length > a + 1;
          },
        },
        watch: {
          inpval: {
            handler: function (a, b) {
              this.search();
            },
            deep: !0,
            immediate: !1,
          },
        },
        methods: {
          search: function () {
            var a = this,
              b = this.inpval.indexOf("@"),
              c = this.inpval.replace("@", ""),
              h = this.inpval.slice(b),
              d = !1;
            this.startSubmit = !1;
            this.firstInp = !0;
            0 < this.inpval.length
              ? (this.slideState = !0)
              : ((this.slideState = !1), (this.firstInp = !1));
            this.emailTips.forEach(function (e, g) {
              var l = { tip: e.tip, new: "", show: !1 };
              a.slideItemVal
                ? -1 !== e.tip.indexOf(h)
                  ? ((l.new = a.inpval.slice(0, b) + e.tip), (l.show = !0))
                  : (l.new = a.inpval)
                : ((l.new = c + e.tip), (l.show = !0));
              l.show && (d = !0);
              a.emailTips[g] = l;
            });
            d || (this.emailTips[0].show = !0);
          },
          touchVal: function (a) {
            this.inpval = a;
          },
          clickOutsideSlide: function (a) {
            c(a.target).is(".subscribe__handle_slide_item")
              ? (this.slideState = !1)
              : this.$refs.touchEmail &&
                this.$refs.subInpt &&
                (this.$refs.touchEmail.contains(a.target) ||
                (this.$refs.subInpt.contains(a.target) &&
                  0 < this.inpval.length)
                  ? (this.slideState = !0)
                  : (this.slideState = !1));
          },
          filterEmail: function () {
            return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
              this.inpval
            );
          },
          submitSubscribe: function () {
            var a = this;
            this.filterInpVal
              ? Object(h.a)(this.http, {
                  EMAIL: this.inpval,
                  _: new Date().getTime(),
                })
                  .then(function (b) {
                    "success" == b.result
                      ? ((a.subscribeSuccess = !0),
                        (a.startSubmit = !1),
                        (a.emailCorrect = !1))
                      : ((a.startSubmit = !0),
                        a.$nextTick(function () {
                          var b = c(a.$refs.httpErrTip);
                          a.httpErrText = b.data("faild");
                        }));
                  })
                  .catch(function (b) {
                    a.startSubmit = !0;
                    a.$nextTick(function () {
                      var b = c(a.$refs.httpErrTip);
                      a.httpErrText = b.data("faild");
                    });
                  })
              : this.filterEmail() ||
                ((this.firstInp = !0),
                (this.startSubmit = !1),
                (this.emailCorrect = !0));
          },
        },
      });
      c(function () {
        var a = document.querySelector("#footer .cp-footer-subscribe");
        a &&
          b.OP_VUE_REGISTRY.has("footer_subscribe") &&
          ((a = Object.assign({}, b.OP_VUE_REGISTRY.get("footer_subscribe"), {
            el: a,
            propsData: l({}, a.dataset),
          })),
          OP_vue.vueInstances.push(new OP_vue(a)));
      });
    }).call(this, a(34), a(3));
  },
  510: function (c, d, a) {},
  511: function (c, d, a) {
    (function (b) {
      a(4);
      var c = a(0);
      a(512);
      (function () {
        function a() {
          h.hide();
          d.removeClass("show-cookie-tip");
          var a = b(".back-top-btn.mobile.fixed");
          a.length && a.css({ bottom: "" });
        }
        var d = b("body"),
          h = b(".cp-cookie-tip");
        if (!(0 >= h.length)) {
          var g = h.find(".close");
          b(window).resize(function () {
            c.a.getSlidePopLocation();
          });
          g.click(function () {
            a();
            c.a.acceptCookie();
            b("#oc-wrapper").css("padding-bottom", "unset");
            c.a.getSlidePopLocation();
          });
          c.a.isCookieAccepted()
            ? (a(), c.a.getSlidePopLocation())
            : (h.show(),
              d.addClass("show-cookie-tip"),
              c.a.getSlidePopLocation());
        }
      })();
      b(function () {
        var a = c.a.isCookieAccepted();
        c.a.closeCookieTip(a);
      });
    }).call(this, a(3));
  },
  512: function (c, d, a) {},
  513: function (c, d, a) {
    (function (b) {
      a(4);
      a(12);
      var c,
        d,
        l,
        h,
        g = a(0);
      a(514);
      b(function () {
        if ((c = b(".cp-cookie-tip-euro")) && !(0 >= c.length)) {
          var a = g.a.isCookieAccepted();
          g.a.closeCookieTip(a);
        }
      });
      b(function () {
        !(c = b(".cp-cookie-tip-euro")) ||
          0 >= c.length ||
          ((d = c.find(".accept-cookie")),
          (l = c.find(".manage-cookie")),
          (h = c.find(".close")),
          b(window).resize(function () {
            g.a.getSlidePopLocation();
          }),
          l.click(function () {
            g.a.toggleCookieSetting(!0);
            g.a.toggleEuroCookieTip(!0);
            768 > b(document).width() &&
              (b("#oc-mask").on("mousewheel touchmove", function (a) {
                a.preventDefault();
              }),
              b(".cp-cookie-setting").on("mousewheel", function (a) {
                a.preventDefault();
              }));
            1440 < b(document).width() && b("#oc-mask").css("z-index", "999");
          }),
          d.click(function () {
            g.a.acceptCookie();
            g.a.toggleEuroCookieTip(!1);
            b("#oc-wrapper").css("padding-bottom", "unset");
          }),
          h.click(function () {
            g.a.acceptCookie(!0);
            g.a.toggleCookieSetting(!1);
            g.a.getSlidePopLocation();
          }),
          g.a.isCookieAccepted()
            ? (g.a.toggleEuroCookieTip(!1), g.a.getSlidePopLocation())
            : (g.a.toggleEuroCookieTip(!0), g.a.getSlidePopLocation()),
          (function () {
            function a(a, b) {
              var c = new Date();
              c.setTime(c.getTime() + 7776e6);
              var e = g.a.isOnline() ? ".oppo.com" : window.location.hostname;
              document.cookie =
                a +
                "\x3d" +
                escape(b) +
                ";expires\x3d" +
                c.toGMTString() +
                ";domain\x3d" +
                e +
                ";path\x3d/";
            }
            function b() {
              c({
                event: "acceptAll",
                advertisingCookie: "yes",
                performanceCookie: "yes",
              });
            }
            var c = function (a) {
              var b = window.dataLayer;
              b &&
                b.push({
                  event: a.event,
                  advertisingCookie: a.advertisingCookie,
                  performanceCookie: a.performanceCookie,
                });
            };
            document.getElementsByClassName("accept-cookie solid-button2")[0] &&
              document
                .getElementsByClassName("accept-cookie solid-button2")[0]
                .addEventListener("click", function () {
                  a("cookiesacceptedall", !0);
                  a("performanceaccepted", "yes");
                  a("socialaccepted", "yes");
                  b();
                });
            document
              .getElementsByClassName("solid-button2 done-btn")[0]
              .addEventListener("click", function () {
                if (
                  document.getElementById("analyticsCookies").checked &&
                  document.getElementById("advertisingCookies").checked
                )
                  return (
                    b(),
                    a("performanceaccepted", "yes"),
                    a("socialaccepted", "yes"),
                    void a("cookiesacceptedall", !0)
                  );
                document.getElementById("analyticsCookies").checked
                  ? (a("performanceaccepted", "yes"),
                    c({
                      event: "acceptPerformance",
                      performanceCookie: "yes",
                      advertisingCookie: "no",
                    }))
                  : a("performanceaccepted", "no");
                document.getElementById("advertisingCookies").checked
                  ? (a("socialaccepted", "yes"),
                    c({
                      event: "acceptAdvertisement",
                      advertisingCookie: "yes",
                      performanceCookie: "no",
                    }))
                  : a("socialaccepted", "no");
                a("cookiesacceptedall", !1);
              });
          })());
      });
    }).call(this, a(3));
  },
  514: function (c, d, a) {},
  515: function (c, d, a) {
    (function (b) {
      a(4);
      a(16);
      a(53);
      var c,
        d,
        l,
        h,
        g,
        e = a(0);
      a(516);
      b(function () {
        c = b(".cp-cookie-setting");
        d = c.find(".done-btn");
        l = c.find(".cookie-type input[type\x3dcheckbox]");
        h = c.find(".close-button");
        g = window.navigator.userAgent.indexOf("Safari");
        h.click(function () {
          e.a.toggleCookieSetting(!1);
          0 < b("#popup-cookie").length && 1 == e.a.isCookieAccepted()
            ? (e.a.toggleEuroCookieTip(!1),
              e.a.acceptCookie(!0),
              b("#oc-wrapper").css("padding-bottom", "unset"))
            : (e.a.toggleEuroCookieTip(!0), e.a.acceptCookie(!1));
          b("#analyticsCookies").prop("checked", !1);
          b("#advertisingCookies").prop("checked", !1);
        });
        d.click(function () {
          l.each(function (a, b) {});
          e.a.acceptCookie(!0);
          e.a.toggleCookieSetting(!1);
          1 == e.a.isCookieAccepted() &&
            b("#oc-wrapper").css("padding-bottom", "unset");
        });
        g && b(".cp-cookie-setting").addClass("ipadfix");
      });
    }).call(this, a(3));
  },
  516: function (c, d, a) {},
  517: function (c, d, a) {
    (function (b) {
      a(16);
      a(518);
      a(519);
      var c = a(0);
      !(function () {
        if (0 !== b(".cookie-popup").length) {
          if (!c.a.isCookieAccepted()) {
            var a = window.navigator.userAgent.toLowerCase();
            -1 !== a.indexOf("micromessenger") ||
            /(oppostore|oppocommunity)/i.test(a)
              ? b(".cookie-popup").addClass("hidden")
              : b(".cookie-popup").removeClass("hidden");
          }
          b(".cookie-popup .cookie-popup-close").on("click", function () {
            c.a.acceptCookie();
            b(".cookie-popup").addClass("hidden");
          });
        }
      })();
    }).call(this, a(3));
  },
  518: function (c, d, a) {},
  519: function (c, d, a) {},
  520: function (c, d, a) {
    (function (b) {
      a(4);
      a(41);
      var c,
        d,
        l,
        h,
        g,
        e,
        n = a(0);
      a(521);
      b(function () {
        function a() {
          d.remove();
          "none" === e.css("display") || 0 >= e.length
            ? c.css("margin-top", 0)
            : (c.css("margin-top", e.outerHeight()), e.css("margin-top", 0));
          n.a.closeNotice(r);
        }
        function p() {
          if (m)
            if (0 < d.length && 0 < e.length) {
              var a = d.outerHeight() + e.outerHeight();
              c.css("margin-top", a);
              d.css("top", e.outerHeight());
            } else (a = e.outerHeight()), c.css("margin-top", a);
        }
        if (
          ((c = b("#oc-wrapper")),
          (d = b(".cp-notice-bar")),
          (e = b(".cp-site-language-tip")),
          d)
        ) {
          l = d.find(".watch");
          h = d.find(".learn");
          g = d.find(".close");
          var r = Number(d.data("expires")),
            m = n.a.shouldShowNotice();
          m &&
            (("none" === e.css("display") || 0 >= e.length) &&
              (c.css("margin-top", d.outerHeight()), d.css("top", 0)),
            d.show(),
            p());
          b(window).scroll(function () {
            b(window).scrollTop() < e.outerHeight() &&
            0 <= e.length &&
            e.css("display", "block")
              ? d.css("top", e.outerHeight() - b(window).scrollTop())
              : d.css("top", 0);
          });
          l.click(function () {
            a();
          });
          h.click(a);
          g.click(a);
          b(window).resize(p);
        }
      });
    }).call(this, a(3));
  },
  521: function (c, d, a) {},
  522: function (c, d, a) {
    (function (b) {
      a(4);
      a(7);
      a(20);
      a(31);
      a(523);
      b(function () {
        if (0 !== b(".cmp__search-card").length) {
          var a = "";
          a = b(".cmp__search-card .search-card-form-input").attr(
            "data-searchurl"
          )
            ? b(".cmp__search-card .search-card-form-input").attr(
                "data-searchurl"
              )
            : location.origin +
              "/" +
              window.DIGITAL_DATA.pageInfo.countryCode +
              "/search/?tab\x3dnews\x26subtab\x3dNewsroom";
          var c = b(".search-card-items-list").attr("data-values");
          if (c) {
            c = c.split(";");
            for (var d = "", h = 0; h < c.length; h++)
              d +=
                '\x3cli class\x3d"item"\x3e\x3ca class\x3d"font-medium"\x3e'.concat(
                  c[h],
                  "\x3c/a\x3e\x3c/li\x3e"
                );
            b(".search-card-items-list").html(d);
          } else b(".search-card-items").hide();
          var g = !1;
          b(".cmp__search-card .search-card-form-input").on(
            "focusin",
            function () {
              g = !0;
            }
          );
          b(".cmp__search-card .search-card-form-input").on(
            "focusout",
            function () {
              g = !1;
            }
          );
          b(".search-card-items-list .item").on("click", function () {
            var c = b(this).find("a").text();
            ga4Event({
              event_name: "search",
              search_type: "Popular Search",
              search_term: c,
            });
            location.href = a + "#" + c;
          });
          b(document).keyup(function (c) {
            13 === c.keyCode &&
              g &&
              b(".cmp__search-card .search-card-form-input").val().trim() &&
              ((c = b(".cmp__search-card .search-card-form-input").val()),
              ga4Event({
                event_name: "search",
                search_type: "Normal Search",
                search_term: c,
              }),
              (location.href = a + "#" + c));
          });
        }
      });
    }).call(this, a(3));
  },
  523: function (c, d, a) {},
  524: function (c, d, a) {
    (function (b) {
      a(4);
      a(525);
      b(function () {
        b(".cp-select-language").find(".close");
        b(".language-list").each(function (a, c) {
          var d = b(c);
          d.click(function () {
            d.toggleClass("opened");
          });
        });
      });
    }).call(this, a(3));
  },
  525: function (c, d, a) {},
  526: function (c, d, a) {
    (function (b) {
      a(8);
      a(62);
      a(4);
      a(16);
      a(12);
      a(103);
      a(9);
      a(40);
      a(7);
      a(23);
      a(24);
      a(31);
      var c = a(32),
        d = a.n(c),
        l = a(0);
      a(527);
      b(function () {
        function a() {
          n.show().removeClass("force-hide");
          var a = 0 < n.length && n.is(":visible") ? n.outerHeight() : 0,
            b = 0 < r.length && r.is(":visible") ? r.outerHeight() : 0;
          e.css("margin-top", a + b);
          r.css("top", a);
        }
        function c() {
          n.remove();
          var a = r.is(":visible") ? r.outerHeight() - 2 : 0;
          e.css("margin-top", a);
          r.css("top", 0);
        }
        var e = b("#oc-wrapper"),
          n = b(".cp-site-language-tip-new");
        if (n) {
          var r =
            768 < window.innerWidth
              ? b(".cp-notice-bar.setpc")
              : b(".cp-notice-bar.setmb");
          0 == b(".cp-notice-bar.setpc").length && (r = b(".cp-notice-bar"));
          var p = l.a.getCountryCode(),
            u = n.find(".tip"),
            m = n.find(".site-list");
          p && d.a.get("stayOnSite") !== p
            ? new Promise(function (a, c) {
                b.ajax({
                  url: "https://www.oppo.com/api/country",
                  method: "GET",
                  data: {},
                  success: function (b) {
                    a(b);
                  },
                  error: function (a) {
                    c(a);
                  },
                });
              })
                .then(function (e) {
                  var g =
                    "[object String]" == Object.prototype.toString.call(e)
                      ? JSON.parse(e).countryCode
                      : e.countryCode;
                  sessionStorage.getItem("ipCountryCode") &&
                    (g = sessionStorage.getItem("ipCountryCode"));
                  g &&
                    b.getJSON(
                      "https://www.oppo.com/content/dam/statics/site-language-tip.json",
                      function (e) {
                        if ((e = e[g] || e.OTHER) && e.language) {
                          var d = Object.keys(e.language);
                          -1 == d.indexOf(p) || 1 < d.length
                            ? ((function (c) {
                                u.text(c.tip);
                                var e = "";
                                if (c.language) {
                                  for (
                                    var g = Object.keys(c.language).filter(
                                        function (a) {
                                          return a != p;
                                        }
                                      ),
                                      d = function () {
                                        var a = g[h],
                                          d = c.language[a],
                                          l = ""
                                            .concat(window.location.origin, "/")
                                            .concat(a, "/"),
                                          n = window.location.href.replace(
                                            p,
                                            a
                                          );
                                        a = b("[rel\x3d'alternate']").filter(
                                          function (a, c) {
                                            return b(c).attr("href") == n;
                                          }
                                        );
                                        e += '\x3ca class\x3d"site" href\x3d"'
                                          .concat(0 < a.length ? n : l, '"\x3e')
                                          .concat(d, "\x3c/a\x3e");
                                      },
                                      h = 0;
                                    h < g.length;
                                    h++
                                  )
                                    d();
                                  m.html(e);
                                  a();
                                }
                              })(e),
                              1 == e.isArabic && n.addClass("rtl"))
                            : c();
                        } else c();
                      }
                    );
                })
                .catch(function (a) {
                  c();
                })
            : c();
          b(document).on(
            "click",
            ".cp-site-language-tip-new .stay",
            function (a) {
              c();
              l.a.stayOnSite(p);
              sendGAEvent({
                event: "uaEvent",
                nonInteraction: !1,
                eventCategory: "Notice Bar",
                eventAction: getPageGroupType(),
                eventLabel: "Stay On Site :" + p,
              });
            }
          );
          b(document).on(
            "click",
            ".cp-site-language-tip-new .site",
            function (a) {
              a.stopPropagation();
              sendGAEvent({
                event: "uaEvent",
                nonInteraction: !1,
                eventCategory: "Notice Bar",
                eventAction: getPageGroupType(),
                eventLabel: "Country Choose:" + b(this).text().trim(),
              });
            }
          );
          b(window).resize(a);
        }
      });
    }).call(this, a(3));
  },
  527: function (c, d, a) {},
  528: function (c, d, a) {},
  529: function (c, d, a) {
    (function (b) {
      a(530);
      b(function () {
        b("#goback-top").click(function () {
          b("html,body").animate({ scrollTop: 0 });
          ga4Event &&
            ga4Event({
              event_name: "function_entry",
              module: "suspension",
              function_type: "primary function",
              button_name: "to top",
            });
        });
      });
    }).call(this, a(3));
  },
  530: function (c, d, a) {},
  531: function (c, d, a) {
    (function (b) {
      a(31);
      a(532);
      b(function () {
        0 !== b(".cmp__event-image").length &&
          b(document).on("click", ".cmp__event-image", function () {
            var a = b(this).data("url") ? b(this).data("url").trim() : "";
            b(this).data("check") && "" != a && window.open(a);
          });
      });
    }).call(this, a(3));
  },
  532: function (c, d, a) {},
  533: function (c, d, a) {
    (function (b) {
      a(534);
      b(document).ready(function () {
        0 !== b(".cmp__faq").length &&
          (b(".cmp__faq .cmp__faq-list-item").click(function () {
            b(this).hasClass("active")
              ? (b(this).children(".cmp__faq-list-item-detail").slideUp(300),
                b(this).removeClass("active"))
              : (b(this)
                  .siblings()
                  .children(".cmp__faq-list-item-detail")
                  .slideUp(300),
                b(this).children(".cmp__faq-list-item-detail").slideDown(300),
                b(this).addClass("active").siblings().removeClass("active"));
          }),
          b(".cmp__faq .cmp__faq-list-item-detail a").click(function (a) {
            a.stopPropagation();
          }));
      });
    }).call(this, a(3));
  },
  534: function (c, d, a) {},
  535: function (c, d, a) {
    (function (b) {
      a(12);
      a(31);
      a(536);
      var c = a(0);
      b(function () {
        var a = b(".store-app-launch-close"),
          d = b(".store-app-launch-wrap"),
          h = b(".store-app-launch-button"),
          g = d.data("enableautotrigger"),
          e = d.data("automaticereplacementlink"),
          n = d.data("displaymanualtriggering"),
          r = d.data("customizelink"),
          p = d.data("displayposition"),
          v = b("#cemyun_modal"),
          m = 650 >= window.innerWidth,
          t = !1,
          z = new Date(),
          x = localStorage.getItem("closedTime"),
          A = c.a.isCookieAccepted(),
          B = !0,
          G = function () {
            var a = navigator.userAgent.toLowerCase();
            t = !!/android/.test(a);
          },
          E = void 0 !== window.OppoStoreClientBaseJS,
          F = function () {
            if (r && !E && m && t && A) {
              if (x) {
                x = new Date(x);
                var a = new Date(x.getTime() + 864e5);
                if (z < a) return void d.hide();
              }
              1 != p || d.addClass("animate");
            }
          };
        G();
        r &&
          !E &&
          m &&
          t &&
          n &&
          (b(".cmp_cem .cem-landaction").addClass("cem-landaction-hidden"),
          b("#contact-pop").addClass("contact-pop-block"),
          b("#cmp_cem").addClass("cmp_cem-block"),
          ga4Event &&
            ga4Event({
              event_name: "notification_interaction",
              module: "OPPO Store App Launch",
              button_name: "Impression",
            }));
        g
          ? m &&
            t &&
            (e && self == top && !E && (window.location.href = e),
            n ? (G(), F()) : d.hide())
          : m && t && !E && n
          ? (G(), F())
          : d.hide();
        a.on("click", function () {
          d.hide();
          localStorage.setItem("closedTime", z);
          ga4Event({
            event_name: "notification_interaction",
            module: "OPPO Store App Launch",
            button_name: "Close",
          });
        });
        h.on("click", function () {
          r && window.open(r, "_blank");
          ga4Event({
            event_name: "notification_interaction",
            module: "OPPO Store App Launch",
            button_name: "".concat(h.text().trim()),
          });
        });
        b(window).on("scroll", function () {
          if (r && !E && m && t && n && !(1 >= p) && A && !(0 < v.length))
            if (B) B = !1;
            else {
              var a = b(window).height(),
                c = localStorage.getItem("closedTime");
              if (
                c &&
                ((c = new Date(c)), (c = new Date(c.getTime() + 864e5)), z < c)
              )
                return void d.hide();
              if (b(window).scrollTop() > a * (p - 1) && 2 <= p)
                return void d.addClass("animate");
            }
        });
      });
    }).call(this, a(3));
  },
  536: function (c, d, a) {},
  537: function (c, d, a) {
    (function (b) {
      function c(a, b, c, e, g, d, h) {
        try {
          var l = a[d](h),
            n = l.value;
        } catch (pb) {
          return void c(pb);
        }
        l.done ? b(n) : Promise.resolve(n).then(e, g);
      }
      function d(a) {
        return function () {
          var b = this,
            e = arguments;
          return new Promise(function (g, d) {
            function h(a) {
              c(n, g, d, h, l, "next", a);
            }
            function l(a) {
              c(n, g, d, h, l, "throw", a);
            }
            var n = a.apply(b, e);
            h(void 0);
          });
        };
      }
      function l() {
        return 1024 >= b(window).width();
      }
      function h(a) {
        for (var b = "", c = 0; c < ea.a.length; c++) {
          var e = ea.a[c];
          if (a == e.value) {
            b = e;
            break;
          }
        }
        return b;
      }
      function g(a) {
        for (var b = "", c = 0; c < ea.a.length; c++) {
          var e = ea.a[c];
          if (a == e.key) {
            b = e;
            break;
          }
        }
        return b;
      }
      function e() {
        650 <= b(window).width() &&
          1024 >= b(window).width() &&
          ("none" != na.css("display") && "none" == ba.css("display")
            ? b(".email").css({ "margin-top": "-25px" })
            : ("none" == na.css("display") && "none" != ba.css("display")) ||
              ("none" == na.css("display") && "none" == ba.css("display")
                ? (fa.css({ "margin-top": "0px" }),
                  b(".email").css({ "margin-top": "0px" }),
                  b(".protocolBox").css({ "margin-top": "0px" }))
                : (fa.css({ "margin-top": "0px" }),
                  b(".email").css({ "margin-top": "0px" }))));
      }
      function n() {
        "0px" == J.css("margin-left")
          ? b(".listItem").hide()
          : b(".listItem").show();
      }
      function y(a) {
        return new Promise(function (b, c) {
          var e = new XMLHttpRequest();
          e.open("HEAD", a, !0);
          e.onreadystatechange = function () {
            4 === e.readyState &&
              (200 <= e.status && 400 > e.status ? b(!0) : b(!1));
          };
          e.send();
        });
      }
      function p(a) {
        return v.apply(this, arguments);
      }
      function v() {
        return (v = d(
          regeneratorRuntime.mark(function db(a) {
            var c, e, g;
            return regeneratorRuntime.wrap(function (d) {
              for (;;)
                switch ((d.prev = d.next)) {
                  case 0:
                    if (
                      ((c = a.toLowerCase()),
                      (e = ""),
                      (e = M ? M.value.toLowerCase() : c),
                      (R = location.href.replace(
                        /\/cn\//g,
                        "/".concat(e, "/")
                      )),
                      (g = !1),
                      R == location.href)
                    ) {
                      d.next = 10;
                      break;
                    }
                    return (d.next = 9), y(R);
                  case 9:
                    g = d.sent;
                  case 10:
                    Ga || (Ga = W.text()),
                      g
                        ? ((S = !1),
                          W.text("Click to visit local product page"),
                          W.addClass("submitGreen"))
                        : ((S = !0),
                          W.text(Ga),
                          "none" == b(".notcheck ").css("display")
                            ? W.addClass("submitGreen")
                            : W.removeClass("submitGreen"));
                  case 12:
                  case "end":
                    return d.stop();
                }
            }, db);
          })
        )).apply(this, arguments);
      }
      function m() {
        new Promise(function (a, c) {
          b.ajax({
            url: "https://www.oppo.com/api/country",
            method: "GET",
            data: {},
            success: function (b) {
              a(b);
            },
            error: function (a) {
              c(a);
            },
          });
        })
          .then(function (a) {
            (a &&
              "CN" == a.countryCode &&
              location.pathname.startsWith("/cn/")) ||
            !a
              ? b(".messageContainer").hide()
              : (b(".messageContainer").show(),
                a &&
                  a.countryCode &&
                  (function (a) {
                    if (0 != b(".messageContainer").length) {
                      localStorage.getItem("MessageData")
                        ? (H.hide(), b("body").css("overflow", "auto"))
                        : 0 ==
                          (c = parseInt(
                            b(".messageContainer #showDeep").text()
                          ))
                        ? L()
                        : b(window).scroll(function () {
                            var a,
                              b,
                              e =
                                ((a = document.documentElement.scrollTop),
                                (b =
                                  document.documentElement.scrollHeight -
                                  window.innerHeight),
                                parseInt((a / b) * 100));
                            c <= e && !ca && ((ca = !0), L());
                          });
                      var c;
                      if (l()) {
                        H.css({
                          "max-height":
                            parseInt(
                              0.8 * document.documentElement.clientHeight
                            ) + "px",
                        });
                        Ha.css({
                          "max-height":
                            parseInt(
                              0.8 * document.documentElement.clientHeight
                            ) -
                            95 +
                            "px",
                        });
                        b(".messageContainer .regionList").css({
                          "max-height":
                            parseInt(
                              0.8 * document.documentElement.clientHeight
                            ) -
                            95 +
                            "px",
                        });
                        var d = document.documentElement.clientWidth;
                        650 < b(window).width() &&
                          ((d = (parseFloat(d) - 52) / 2 + "px"),
                          Va.css({ width: d }));
                      }
                      d = h(a.toUpperCase());
                      a && location.pathname.startsWith("/cn/") && p(a);
                      F(Fa.a.getCountryCode().toUpperCase());
                      -1 != qa.text().split(",").indexOf(d.value) &&
                        0 == b(".messageContainer #phoneInput").length &&
                        location.pathname.startsWith("/cn/") &&
                        (ra.text(d.key), ra.addClass("countryMessageBlack"));
                      Ia.off().on("click", function () {
                        "none" == H.css("display") &&
                          (n(),
                          l()
                            ? z()
                            : (H.css({ opacity: "0" }),
                              H.css({ display: "flex" }),
                              H.css({ opacity: "1" }),
                              H.hide(),
                              H.show("fast")),
                          H.css({ display: "flex" }),
                          l() &&
                            b(".messContentBackground").css({ top: "0px" }));
                      });
                      Wa.off().on("click", function () {
                        l()
                          ? (b(".messContentBackground").css({ top: "9999px" }),
                            x())
                          : (b(".messageContainer .openRegionList").css({
                              display: "none",
                            }),
                            b(".messageContainer .closeRegionList").css({
                              display: "block",
                            }),
                            b(".messageContainer .regionScrollContainer").css({
                              display: "none",
                            }),
                            H.hide("fast"));
                        b("body").css("overflow", "auto");
                        Ia.show();
                        ca = !0;
                        localStorage.setItem(
                          "isCloseMessageData",
                          JSON.stringify(ca)
                        );
                      });
                      fa.off().on("click", function () {
                        l() || b(".listItem").css({ height: J.css("height") });
                        l()
                          ? b(".messageContainer .regionScrollContainer").css({
                              display: "none",
                            })
                          : A();
                        b(".listItem").show();
                        H.css({ "padding-right": "12px" });
                        l()
                          ? J.animate(
                              {
                                "margin-left":
                                  "-" +
                                  parseInt(
                                    document.documentElement.clientWidth
                                  ) +
                                  "px",
                              },
                              320
                            )
                          : J.animate(
                              {
                                "margin-left":
                                  "-" + (parseInt(J.css("width")) + 12) + "px",
                              },
                              320
                            );
                      });
                      X.off().on("click", function () {
                        X.toggle();
                        "Click to visit local product page" !=
                          (Ja =
                            b(".messageContainer").find(
                              ".submitGreen"
                            )).text() &&
                          (0 != Ja.length
                            ? W.removeClass("submitGreen")
                            : W.addClass("submitGreen"));
                      });
                      b(".messageContainer .listItem .backIcon")
                        .off()
                        .on("click", function () {
                          H.css({ "padding-right": "12px" });
                          J.animate(
                            { "margin-left": "0px" },
                            320,
                            "",
                            function () {
                              b(".listItem").hide();
                            }
                          );
                        });
                      Ha.off().on("click", function () {
                        J.animate(
                          { "margin-left": "0px" },
                          320,
                          "",
                          function () {
                            b(".listItem").hide();
                            na.hide();
                            fa.removeClass("redBoredBorder");
                            e();
                          }
                        );
                      });
                      if ((d = qa.text())) {
                        d = d.split(",");
                        var m = "",
                          r = [];
                        d.forEach(function (a) {
                          r.push(h(a).key);
                        });
                        r.sort(function (a, b) {
                          var c = a.charAt(0).toUpperCase(),
                            e = b.charAt(0).toUpperCase();
                          return c === e
                            ? a.localeCompare(b)
                            : c.localeCompare(e);
                        });
                        r.forEach(function (a) {
                          m +=
                            '\x3cdiv class\x3d"countryLi"\x3e\x3cdiv class\x3d"countryName"\x3e'.concat(
                              a,
                              '\x3c/div\x3e\x3cdiv class\x3d"countryNotCheck"\x3e\x3c/div\x3e\x3c/div\x3e'
                            );
                        });
                        Ha.html("");
                        Ha.append(m);
                        d = document.createElement("style");
                        d.innerHTML =
                          "\n        /* \u8bbe\u7f6e\u6eda\u52a8\u6761\u5bbd\u5ea6 */\n        .countryList::-webkit-scrollbar {\n            width: 6px;\n            height:80px;\n          }\n          /* \u8bbe\u7f6e\u6eda\u52a8\u6761\u80cc\u666f\u8272 */\n          .countryList::-webkit-scrollbar-track {\n            background-color: transparent;\n          }\n          /* \u8bbe\u7f6e\u6eda\u52a8\u6761\u6ed1\u5757\u989c\u8272 */\n        .countryList::-webkit-scrollbar-thumb {\n           background-color: rgba(0,0,0,0.1);\n           border-radius: 5px;\n          }\n       ";
                        document.head.appendChild(d);
                        b(".messageContainer")
                          .find(".countryLi")
                          .off()
                          .on("click", function () {
                            var c = b(this);
                            M = g(b(this).text());
                            ra.addClass("countryMessageBlack");
                            p(a);
                            b(".messageContainer")
                              .find(".countryNotCheck")
                              .removeClass("countryCheckIcon");
                            c.find(".countryNotCheck").addClass(
                              "countryCheckIcon"
                            );
                            ra.text(c.text());
                            0 ==
                              b(".messageContainer #phoneContainer").length ||
                              Ka ||
                              F(M.value);
                          });
                      }
                      W.off().on("click", function () {
                        if (S) {
                          if (
                            "none" == La.css("display") ||
                            ((d = g(ra.text())),
                            (h =
                              0 ==
                                b(".messageContainer #emailContainer").length ||
                              "none" ==
                                b(".messageContainer #emailContainer").css(
                                  "display"
                                ) ||
                              t()),
                            (n = (function (a) {
                              var b = !1;
                              return (
                                a
                                  ? ((b = !0),
                                    na.hide(),
                                    fa.removeClass("redBoredBorder"),
                                    e())
                                  : ((b = !1),
                                    na.show(),
                                    fa.addClass("redBoredBorder"),
                                    e()),
                                b
                              );
                            })(d)),
                            (m =
                              0 == b(".messageContainer #phoneInput").length ||
                              "none" ==
                                b(".messageContainer #phoneInput").css(
                                  "display"
                                ) ||
                              E()),
                            !(h && n && m))
                          )
                            return;
                          d = g(ra.text());
                          h = b(".messageContainer #phoneInput")
                            ? b(".messageContainer #phoneInput").val()
                            : "";
                          var a = {
                            activityCode: b("#activeId").text(),
                            countryCode: d.value,
                            address: window.opsiteBase.UIUtils.aesCBCEncrypt(
                              location.href
                            ),
                            formContext: { countryName: d.key },
                          };
                          0 != b(".messageContainer #emailContainer").length &&
                            (a.email = window.opsiteBase.UIUtils.aesCBCEncrypt(
                              O.val()
                            ));
                          0 != b(".messageContainer #phoneInput").length &&
                            (a.phone =
                              window.opsiteBase.UIUtils.aesCBCEncrypt(h));
                          var c = (d = "");
                          -1 == location.href.indexOf("https://sit-")
                            ? ((d =
                                "https://opsiteapi-sg.oppo.com/api/public/v1/form/record/checkForCapital"),
                              (c =
                                "https://opsiteapi-sg.oppo.com/api/public/v1/form/record"))
                            : ((d =
                                "https://opsite-admin.wanyol.com/api/public/v1/form/record/checkForCapital"),
                              (c =
                                "https://opsite-admin.wanyol.com/api/public/v1/form/record"));
                          b.ajax({
                            url: d,
                            type: "POST",
                            dataType: "json",
                            contentType: "application/json",
                            processData: !1,
                            data: JSON.stringify(a),
                            success: function (g) {
                              g.data
                                ? b.ajax({
                                    url: c,
                                    type: "POST",
                                    dataType: "json",
                                    contentType: "application/json",
                                    processData: !1,
                                    data: JSON.stringify(a),
                                    success: function (c) {
                                      Xa.css({ height: J.css("height") });
                                      localStorage.setItem(
                                        "MessageData",
                                        JSON.stringify(a)
                                      );
                                      l()
                                        ? J.animate(
                                            {
                                              "margin-left":
                                                "-" +
                                                (parseInt(
                                                  document.documentElement
                                                    .clientWidth
                                                ) +
                                                  12) +
                                                "px",
                                            },
                                            320
                                          )
                                        : J.animate(
                                            {
                                              "margin-left":
                                                "-" +
                                                (parseInt(J.css("width")) +
                                                  12) +
                                                "px",
                                            },
                                            320
                                          );
                                      setTimeout(function () {
                                        l()
                                          ? (J.animate(
                                              { "margin-left": "0px" },
                                              320
                                            ),
                                            b(".messContentBackground").css({
                                              top: "9999px",
                                            }),
                                            x())
                                          : (H.hide("fast"),
                                            J.animate(
                                              { "margin-left": "0px" },
                                              320
                                            ));
                                        b("body").css("overflow", "auto");
                                        Ia.show();
                                        ca = !0;
                                        localStorage.setItem(
                                          "isCloseMessageData",
                                          JSON.stringify(ca)
                                        );
                                      }, 1500);
                                    },
                                  })
                                : (ba.text("Email subscribed repeatedly"),
                                  O.addClass("redBoredBorder"),
                                  ba.show(),
                                  e());
                            },
                          });
                        } else window.open(R, "_blank");
                        var d, h, n, m;
                      });
                      O.on("focus", function () {
                        O.css({ border: "1px solid rgba(0, 0, 0, 0.95)" });
                      });
                      O.blur(function () {
                        O.css({ border: "1px solid rgba(220, 220, 220, 1)" });
                        t();
                        e();
                      });
                      document.addEventListener("click", function (a) {
                        a = b(a.target);
                        l() ||
                          (0 == a.closest(".messageContent").length &&
                            0 == a.closest(".regionScrollContainer").length &&
                            0 == a.closest(".iconImg").length &&
                            0 == a.closest(".messageIcon").length &&
                            (H.hide("fast"),
                            b("body").css("overflow", "auto"),
                            A(),
                            (ca = !0),
                            localStorage.setItem(
                              "isCloseMessageData",
                              JSON.stringify(ca)
                            )));
                      });
                      (function () {
                        var a = b(".messageContainer .regionList"),
                          c = "";
                        l() && (c = "");
                        ma.a.forEach(function (a) {
                          c +=
                            '\n    \x3cdiv class\x3d"regionLi"\x3e\n    \x3cdiv\x3e\n    '
                              .concat(
                                a.key,
                                '(\x3cspan class\x3d"regionNumber"\x3e'
                              )
                              .concat(
                                a.regionNum,
                                "\x3c/span\x3e)\n\x3c/div\x3e\n   "
                              )
                              .concat(
                                l()
                                  ? '\x3cdiv class\x3d"countryNotCheck"\x3e\x3c/div\x3e'
                                  : '\x3csvg class\x3d"selectDone" width\x3d"24" height\x3d"24" viewBox\x3d"0 0 24 24"\n   fill\x3d"none" xmlns\x3d"http://www.w3.org/2000/svg"\x3e\n   \x3cpath d\x3d"M4.125 12L9.375 17.25L20.875 5.75" stroke\x3d"#26C05D"\n       stroke-width\x3d"1.75" stroke-linejoin\x3d"round" /\x3e\n   \x3c/svg\x3e',
                                "  \n    \x3c/div\x3e\n    "
                              );
                        });
                        a.html(c);
                        b(".messageContainer .regionUlcontainer .backIcon")
                          .off()
                          .on("click", function () {
                            A();
                          });
                      })();
                      b(".messageContainer .regionText").off().on("click", B);
                      b(".messageContainer .regionLi").off().on("click", G);
                      b(".messageContainer #phoneInput").off().on("blur", E);
                    }
                  })(a.countryCode));
          })
          .catch(function (a) {
            b(".messageContainer").hide();
          });
      }
      function t() {
        var a = !0;
        return (
          O.val()
            ? (b(".messageContainer .emailEmpty").hide(),
              (a = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(O.val())
                ? O.val()
                  ? (ba.hide(), Aa.hide(), O.removeClass("redBoredBorder"), !0)
                  : (b(".messageContainer .emailEmpty").show(),
                    Aa.hide(),
                    O.removeClass("redBoredBorder"),
                    e(),
                    !1)
                : (b(".messageContainer .emailEmpty").hide(),
                  Aa.show(),
                  O.addClass("redBoredBorder"),
                  e(),
                  !1)))
            : ((a = !1), ba.show(), O.addClass("redBoredBorder"), e()),
          a
        );
      }
      function z() {
        l() &&
          (H.css({ bottom: "-500px" }),
          H.show(),
          l() && b("body").css({ overflow: "hidden" }),
          H.animate({ bottom: "0px" }, 200));
      }
      function x() {
        l() &&
          (H.animate({ bottom: "-500px" }, 200),
          l() && b("body").css({ overflow: "auto" }),
          H.hide());
      }
      function A() {
        b(".messageContainer .openRegionList").css({ display: "none" });
        b(".messageContainer .closeRegionList").css({ display: "block" });
        l()
          ? J.animate({ "margin-left": "0px" }, 320, function () {
              b(".messageContainer .regionScrollContainer").css({
                display: "none",
              });
            })
          : b(".messageContainer .regionScrollContainer").css({
              display: "none",
            });
      }
      function B() {
        var a;
        if (
          (Ka &&
            0 != (a = b(".messageContainer .greenWord")).length &&
            (l()
              ? (b(".messageContainer .regionLi .countryNotCheck").removeClass(
                  "countryCheckIcon"
                ),
                a.find(".countryNotCheck").addClass("countryCheckIcon"))
              : a.find(".selectDone").show()),
          l())
        )
          return (
            b(".messageContainer .listItem").hide(),
            b(".messageContainer .regionScrollContainer").show(),
            void J.animate(
              {
                "margin-left":
                  "-" + parseInt(document.documentElement.clientWidth) + "px",
              },
              320
            )
          );
        var c = b(".messageContainer .phoneContainer");
        a =
          b(".messageContainer .messageContent").outerHeight() -
          (b("#phoneContainer").offset().top -
            b(".messageContainer .messageContent").offset().top +
            c.outerHeight()) -
          10;
        c = c.offset();
        var e = b(window).scrollTop(),
          g = b(window).scrollLeft();
        e =
          c.top -
          e +
          parseFloat(b(".messageContainer .phoneContainer").css("height")) +
          8;
        c = c.left - g;
        b(".messageContainer .regionScrollContainer").css({
          top: e + "px",
          left: c + "px",
        });
        b(".messageContainer .regionList").css({ height: a + "px" });
        !0;
        "none" == b(".messageContainer .openRegionList").css("display")
          ? (b(".messageContainer .openRegionList").css({ display: "block" }),
            b(".messageContainer .closeRegionList").css({ display: "none" }),
            b(".messageContainer .regionScrollContainer").css({
              display: "flex",
            }))
          : (b(".messageContainer .openRegionList").css({ display: "none" }),
            b(".messageContainer .closeRegionList").css({ display: "block" }),
            b(".messageContainer .regionScrollContainer").css({
              display: "none",
            }));
      }
      function G() {
        b(".messageContainer .regionLi").removeClass("greenWord");
        b(this).addClass("greenWord");
        l()
          ? (b(".messageContainer .regionLi .countryNotCheck").removeClass(
              "countryCheckIcon"
            ),
            b(this).find(".countryNotCheck").addClass("countryCheckIcon"))
          : (b(".messageContainer .regionLi").find(".selectDone").hide(),
            b(this).find(".selectDone").show());
        var a = b(this).find(".regionNumber").text();
        b(".messageContainer .regionphone").text(a);
        A();
        Ka = !0;
      }
      function E() {
        var a = b(".messageContainer #phoneInput").val();
        return /^\d{6,}$/.test(a)
          ? (b(".messageContainer .phoneRecommed").hide(), !0)
          : (b(".messageContainer .phoneRecommed").show(), !1);
      }
      function F(a) {
        a || (a = "HK");
        var c = ea.a.find(function (b) {
          return b.value.toUpperCase() === a.toUpperCase();
        });
        c && b(".messageContainer .regionText .regionphone").text(c.regionNum);
      }
      function I() {
        return (I = d(
          regeneratorRuntime.mark(function ob() {
            return regeneratorRuntime.wrap(function (a) {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    b(document).ready(function () {
                      0 != b(".messageContainer").length &&
                        ((na = b(".messageContainer").find(".countryRecommed")),
                        (H = b(".messageContainer").find(".messageContent")),
                        (fa = b(".messageContainer").find(".countryBox")),
                        (ba = b(".messageContainer").find(".emailEmpty")),
                        (Aa = b(".messageContainer").find(".errorValidEmail")),
                        (Ha = b(".messageContainer").find(".countryList")),
                        (ra = b(".messageContainer").find(".countryMessage")),
                        (J = b(".messageContainer").find(".anmiateItem")),
                        (Va = b(".messageContainer").find(".vlaueBOx")),
                        (Wa = b(".messageContainer").find("#closeImg")),
                        (qa = b(".messageContainer").find("#selectCountry")),
                        (Ia = b(".messageContainer").find("#message-save")),
                        (X = b(".messageContainer").find(".checkIcon")),
                        (W = b(".messageContainer").find(".messageSubmit")),
                        (La = b(".messageContainer").find(".Bgcheck")),
                        (Xa = b(".messageContainer").find(".successBox")),
                        b(".messageContainer").find(".countryNotCheck"),
                        (O = b(".messageContainer").find("#messageInput")),
                        b(".messageContainer").find("#activeId"),
                        m());
                    });
                  case 1:
                  case "end":
                    return a.stop();
                }
            }, ob);
          })
        )).apply(this, arguments);
      }
      function L() {
        n();
        l()
          ? (z(), b(".messContentBackground").css({ top: "0px" }))
          : (H.css({ display: "flex" }), H.hide(), H.show("fast"));
        H.css({ display: "flex" });
      }
      a(8);
      a(4);
      a(18);
      a(16);
      a(101);
      a(9);
      a(147);
      a(66);
      a(40);
      a(74);
      a(7);
      a(23);
      a(24);
      a(20);
      a(126);
      a(19);
      a(6);
      a(180);
      a(538);
      var ea = a(136),
        Fa = a(0),
        ma = a(392),
        M = "",
        S = !0,
        R = "",
        Ga = "",
        na = "",
        H = "",
        fa = "",
        ba = "",
        Ha = "",
        ra = "",
        J = "",
        Va = "",
        Wa = "",
        qa = "",
        Ia = "",
        X = "",
        Ja = "",
        W = "",
        La = "",
        Xa = "",
        O = "",
        Aa = "",
        Ka = !1;
      !(function () {
        I.apply(this, arguments);
      })();
      var ca =
        !!localStorage.getItem("isCloseMessageData") &&
        localStorage.getItem("isCloseMessageData");
    }).call(this, a(3));
  },
  538: function (c, d, a) {},
  539: function (c, d, a) {
    (function (b) {
      function c(a) {
        var b;
        (b = (function (a) {
          if (Array.isArray(a)) return d(a);
        })(a)) ||
          (b =
            "undefined" != typeof Symbol && Symbol.iterator in Object(a)
              ? Array.from(a)
              : void 0);
        if (
          !(a =
            b ||
            (function (a, b) {
              if (a) {
                if ("string" == typeof a) return d(a, b);
                var c = Object.prototype.toString.call(a).slice(8, -1);
                "Object" === c && a.constructor && (c = a.constructor.name);
                if ("Map" === c || "Set" === c) return Array.from(a);
                if (
                  "Arguments" === c ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
                )
                  return d(a, b);
              }
            })(a))
        )
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        return a;
      }
      function d(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c];
        return d;
      }
      a(8);
      a(62);
      a(4);
      a(540);
      a(18);
      a(71);
      a(16);
      a(42);
      a(101);
      a(53);
      a(103);
      a(9);
      a(147);
      a(40);
      a(7);
      a(339);
      a(72);
      a(37);
      a(24);
      a(20);
      a(126);
      a(340);
      a(341);
      a(342);
      a(343);
      a(344);
      a(345);
      a(346);
      a(347);
      a(348);
      a(349);
      a(350);
      a(351);
      a(352);
      a(353);
      a(354);
      a(355);
      a(19);
      a(47);
      a(181);
      var l = a(294);
      a(545);
      b(document).ready(function () {
        function a() {
          var a = b.ajax({
            url: d(0),
            type: "get",
            processData: !1,
            async: !1,
            success: function (a) {},
          });
          if (a.responseJSON && a.responseJSON.data) {
            var c = a.responseJSON.data.hits,
              g = [];
            1 < Math.ceil(a.responseJSON.data.total / 50)
              ? (function (a, c, g) {
                  for (var h = [], l = 1; l < a; l++) {
                    var n = b.ajax({
                      url: d(l),
                      type: "get",
                      processData: !1,
                      async: !0,
                    });
                    h.push(n);
                  }
                  Promise.all(h)
                    .then(function (a) {
                      a.forEach(function (a) {
                        b(".cmp_buy-dialog").find(".buy-dialog-loading").hide();
                        a && a.data && (c = c.concat(a.data.hits));
                      });
                      e(c, g);
                    })
                    .catch(function (a) {});
                })(Math.ceil(a.responseJSON.data.total / 50), c, g)
              : (b(".cmp_buy-dialog").find(".buy-dialog-loading").hide(),
                e(c, g));
          }
        }
        function d(a) {
          var c = "";
          return (
            (c = b("#opsite-domain-url")
              ? b("#opsite-domain-url").val()
              : "https://opsiteapi-sg.oppo.com"),
            ""
              .concat(c, "/api/public/v1/mss/query?query\x3d")
              .concat(m, "\x26lang\x3den\x26pos\x3d")
              .concat(50 * a, "\x26count\x3d50\x26filter\x3durlKey:/")
              .concat(
                m.replace(/;/g, ","),
                "\x26range\x3d\x26category\x3dglobal"
              )
          );
        }
        function e(a, e) {
          if (a) {
            a.forEach(function (a) {
              var b = "";
              Object.keys(l.a).forEach(function (c) {
                -1 != a.source.path.indexOf(c) &&
                  (((b = l.a[c]).zone = c),
                  (a.zoneMessage = b),
                  (function (a, b) {
                    var c = z.findIndex(function (a) {
                      return (b.source.path + "/").includes(a + "/");
                    });
                    p[a] || (p[a] = []);
                    p[a][c] = b;
                  })(c, a));
              });
            });
            ((g = []),
            Object.keys(p).forEach(function (a) {
              a = p[a];
              0 != a.length &&
                ((a = JSON.parse(JSON.stringify(a)).filter(function (a) {
                  return null !== a;
                })),
                g.push(a.shift()));
            }),
            g).forEach(function (a) {
              a.countryCode = a.zoneMessage.type;
              a.zoneMessage &&
                ((function (a, c) {
                  var e = "";
                  a.source.buyLinkFlg
                    ? (e += "\x3cdiv class\x3d'buy-dialog-li buy-dialog-"
                        .concat(c.type, " buy-dialog-")
                        .concat(
                          a.source.path.replace(/\//g, ""),
                          '\' \x3e\n          \x3cdiv class\x3d\'buy-dialog-car\'\x3e\n          \x3csvg width\x3d"18" height\x3d"18" viewBox\x3d"0 0 18 18" fill\x3d"none" xmlns\x3d"http://www.w3.org/2000/svg"\x3e\n\x3cpath d\x3d"M2.06262 2.43738L3.62262 2.70738L4.34487 11.3121C4.40262 12.0149 4.98987 12.5541 5.69487 12.5519H13.8766C14.5494 12.5534 15.1201 12.0584 15.2154 11.3924L15.9271 6.47388C16.0066 5.92413 15.6249 5.41413 15.0759 5.33463C15.0279 5.32788 3.87312 5.32413 3.87312 5.32413" stroke\x3d"black" stroke-opacity\x3d"0.95" stroke-width\x3d"1.125" stroke-linecap\x3d"round" stroke-linejoin\x3d"round"/\x3e\n\x3cpath d\x3d"M10.5939 8.09607H12.6736" stroke\x3d"black" stroke-opacity\x3d"0.95" stroke-width\x3d"1.125" stroke-linecap\x3d"round" stroke-linejoin\x3d"round"/\x3e\n\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M5.36589 15.1519C5.59164 15.1519 5.77389 15.3349 5.77389 15.5599C5.77389 15.7856 5.59164 15.9686 5.36589 15.9686C5.14014 15.9686 4.95789 15.7856 4.95789 15.5599C4.95789 15.3349 5.14014 15.1519 5.36589 15.1519Z" fill\x3d"black" fill-opacity\x3d"0.95" stroke\x3d"black" stroke-opacity\x3d"0.95" stroke-width\x3d"1.125" stroke-linecap\x3d"round" stroke-linejoin\x3d"round"/\x3e\n\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M13.8261 15.1519C14.0518 15.1519 14.2348 15.3349 14.2348 15.5599C14.2348 15.7856 14.0518 15.9686 13.8261 15.9686C13.6003 15.9686 13.4181 15.7856 13.4181 15.5599C13.4181 15.3349 13.6003 15.1519 13.8261 15.1519Z" fill\x3d"black" fill-opacity\x3d"0.95" stroke\x3d"black" stroke-opacity\x3d"0.95" stroke-width\x3d"1.125" stroke-linecap\x3d"round" stroke-linejoin\x3d"round"/\x3e\n\x3c/svg\x3e\n          \x3c/div\x3e  \n          \x3cdiv\x3e\n            \x3cdiv class\x3d\'buy-dialog-region-name\'\x3e'
                        )
                        .concat(
                          c.name,
                          "\x3c/div\x3e\n            \x3cdiv class\x3d'buy-dialog-region-lang'\x3e"
                        )
                        .concat(
                          c.lang,
                          "\x3c/div\x3e\n            \x3cdiv class\x3d'pageurl' style\x3d'display:none;'\x3e"
                        )
                        .concat(c.zone)
                        .concat(
                          a.source.urlKey.substring(1, a.source.urlKey.length),
                          "\x3c/div\x3e\n          \x3c/div\x3e  \n       \x3c/div\x3e\n       "
                        ))
                    : (e += "\x3cdiv class\x3d'buy-dialog-li buy-dialog-"
                        .concat(c.type, " buy-dialog-")
                        .concat(
                          a.source.path.replace(/\//g, ""),
                          "' \x3e\n          \x3cdiv class\x3d'buy-dialog-car'\x3e\x3cdiv class\x3d'noCar'\x3e\x3c/div\x3e\x3c/div\x3e  \n          \x3cdiv\x3e\n            \x3cdiv class\x3d'buy-dialog-region-name'\x3e"
                        )
                        .concat(
                          c.name,
                          "\x3c/div\x3e\n            \x3cdiv class\x3d'buy-dialog-region-lang'\x3e"
                        )
                        .concat(
                          c.lang,
                          "\x3c/div\x3e\n            \x3cdiv class\x3d'pageurl' data-pageurl style\x3d'display:none;'\x3e"
                        )
                        .concat(c.zone)
                        .concat(
                          a.source.urlKey.substring(1, a.source.urlKey.length),
                          "\x3c/div\x3e\n          \x3c/div\x3e \n       \x3c/div\x3e\n       "
                        ));
                  var d = b(e);
                  b(".buy-dialog-".concat(c.type)).ready(function () {
                    b(".buy-dialog-".concat(c.type)).last().after(d);
                    d.off().on("click", function () {
                      var a = b(this).find(".pageurl").text();
                      window.open(a, "_blank");
                    });
                  });
                })(a, a.zoneMessage),
                e.push(a.zoneMessage.type));
            });
            e = c(new Set(e)).sort();
            var d = {
              Africa: "Africa \x26 Middle East",
              Asia: "Asia Pacific",
              Europe: "Europe",
              Latin: "Latin America",
              Other: "Other",
            };
            e.forEach(function (a) {
              r += "\x3cdiv class\x3d'buy-dialog-typeTitle buy-dialog-"
                .concat(a, "' id \x3d'buy-dialog-Africa-typeTitle'\x3e")
                .concat(d[a], "\x3c/div\x3e");
            });
            b(".cmp_buy-dialog").find(".buy-dialog-ul")[0].innerHTML = r;
          }
          var g;
        }
        if (
          "localhost" === window.location.hostname ||
          "127.0.0.1" === window.location.hostname ||
          location.pathname.startsWith("/en/")
        ) {
          var n = "",
            r = "",
            p = {},
            u = [
              b(".cmp__hero-banner-v2 a").filter(function () {
                return this.href.includes("#buyNowDialog?globalsearch\x3d");
              }),
              b(".cmp__homepage-featured-product a").filter(function () {
                return this.href.includes("#buyNowDialog?globalsearch\x3d");
              }),
              b(".cmp__plp-list a").filter(function () {
                return this.href.includes("#buyNowDialog?globalsearch\x3d");
              }),
              b(".navbar-container a").filter(function () {
                return this.href.includes("#buyNowDialog?globalsearch\x3d");
              }),
            ];
          if (u && 0 != u.length) {
            var m = "",
              t = 0,
              z = "";
            window.addEventListener("resize", function () {
              window.innerHeight != document.documentElement.clientHeight &&
                (t =
                  window.innerHeight - document.documentElement.clientHeight);
              n &&
                0 != n.length &&
                window.innerHeight == document.documentElement.clientHeight &&
                b(".cmp_buy-dialog")
                  .find(".buy-dialog-content")
                  .css({ "padding-bottom": t + 10 + "px" });
            });
            u.forEach(function (c) {
              c.off().on("click", function (c) {
                var e = this.href;
                m = "";
                var d;
                (m = new URL(e, window.location.origin).hash.replace(
                  "#buyNowDialog?globalsearch\x3d",
                  ""
                )) &&
                  ((z = m.split(";")),
                  c.preventDefault(),
                  0 == n.length
                    ? (((d = document.createElement("div")).innerHTML =
                        '\x3cdiv class\x3d\'cmp_buy-dialog\'\x3e\n        \x3cdiv class\x3d\'buy-dialog-background\'\x3e\n           \x3cdiv class\x3d\'buy-dialog-content\'\x3e\n              \x3cdiv class\x3d\'buy-dialog-title\' id\x3d\'buy-dialog-box-title\'\x3e\n              \x3cdiv class\x3d\'buy-dialog-title-container\'\x3e\n               \x3cspan class\x3d\'buy-dialog-title-content\'\x3eSelect your country or region\x3c/span\x3e\n               \x3csvg class\x3d\'buy-dialog-title-close\' width\x3d"32" height\x3d"32" viewBox\x3d"0 0 32 32" fill\x3d"none" xmlns\x3d"http://www.w3.org/2000/svg"\x3e\n               \x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M14.8351 16.25L8.00015 23.0849L9.41436 24.4992L16.2493 17.6642L23.0849 24.4998L24.4992 23.0856L17.6636 16.25L24.4993 9.41421L23.0851 8L16.2493 14.8358L9.41421 8.00063L8 9.41485L14.8351 16.25Z" fill\x3d"black"/\x3e\n               \x3c/svg\x3e\n              \x3c/div\x3e\n              \x3cdiv class\x3d\'buy-dialog-recommed-container\'\x3e\n              \x3cspan class\x3d\'buy-dialog-recommed buy-dialog-recommed-first\' style\x3d\'margin-top:4px;\'\x3eProduct names and colours may vary. \x3c/span\x3e\n              \x3cspan class\x3d\'buy-dialog-recommed buy-dialog-recommed-two\'\x3ePlease refer to your country/region\'s product page.\x3c/span\x3e  \n              \x3c/div\x3e\n              \x3c/div\x3e\n              \x3cdiv class\x3d\'buy-dialog-scroll-container\'\x3e\n                \x3cdiv class\x3d\'buy-dialog-loading\'\x3e\n                \x3csvg version\x3d"1.1" id\x3d"loader-1" xmlns\x3d"http://www.w3.org/2000/svg" xmlns:xlink\x3d"http://www.w3.org/1999/xlink" x\x3d"0px" y\x3d"0px" width\x3d"42px" height\x3d"42px" viewBox\x3d"0 0 50 50" style\x3d"enable-background: new 0 0 50 50" xml:space\x3d"preserve"\x3e \x3cpath fill\x3d"#000" d\x3d"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"\x3e\x3canimateTransform attributeType\x3d"xml" attributeName\x3d"transform" type\x3d"rotate" from\x3d"0 25 25" to\x3d"360 25 25" dur\x3d"0.8s" repeatCount\x3d"indefinite"\x3e\x3c/animateTransform\x3e\x3c/path\x3e \x3c/svg\x3e\n                \x3cspan\x3eLoading...\x3c/span\x3e\n                \x3c/div\x3e\n                \x3cdiv class\x3d\'buy-dialog-ul\'\x3e\n                \x3c/div\x3e\n              \x3c/div\x3e\n              \n           \x3c/div\x3e\n        \x3c/div\x3e\n        \x3cdiv\x3e'),
                      document.body.appendChild(d),
                      b("body").css({ overflow: "hidden" }),
                      (n = b(".cmp_buy-dialog").find(".buy-dialog-background")),
                      n
                        .find(".buy-dialog-li")
                        .off()
                        .on("click", function () {
                          var a = b(this).find(".pageurl").text();
                          window.open(a, "_blank");
                        }),
                      n
                        .find(".buy-dialog-title-close")
                        .off()
                        .on("click", function () {
                          n.remove();
                          n = "";
                          z = [];
                          p = {};
                          r = "";
                          b("body").css({ overflow: "auto" });
                        }),
                      b(".cmp_buy-dialog")
                        .find(".buy-dialog-li")
                        .ready(function () {
                          1024 > b(window).width() &&
                            ((t =
                              window.innerHeight !=
                              document.documentElement.clientHeight
                                ? window.innerHeight -
                                  document.documentElement.clientHeight
                                : 104),
                            window.innerHeight ==
                              document.documentElement.clientHeight &&
                              b(".cmp_buy-dialog")
                                .find(".buy-dialog-content")
                                .css({ "padding-bottom": t + "px" }));
                        }),
                      1024 > b(window).width() &&
                        b(".cmp_buy-dialog")
                          .find(".buy-dialog-scroll-container")
                          .css({
                            height:
                              0.7 *
                                parseFloat(
                                  document.documentElement.clientHeight
                                ) -
                              parseFloat(
                                b("#buy-dialog-box-title").css("height")
                              ) -
                              parseFloat(
                                b("#buy-dialog-box-title").css("padding-top")
                              ) -
                              parseFloat(
                                b("#buy-dialog-box-title").css("padding-bottom")
                              ) -
                              parseFloat(
                                b(".cmp_buy-dialog")
                                  .find(".buy-dialog-content")
                                  .css("padding-bottom")
                              ) +
                              "px",
                          }),
                      a())
                    : (n.show(), b("body").css({ overflow: "hidden" })));
              });
            });
          }
        }
      });
    }).call(this, a(3));
  },
  54: function (c, d, a) {
    function b(a) {
      return y.a.parse(a);
    }
    function r(a) {
      var c =
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : t,
        d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : z,
        h = "string" == typeof a ? a : JSON.stringify(a);
      return g.a
        .encrypt(h, b(c), { mode: e.a, padding: p.a, iv: b(d) })
        .toString();
    }
    function u(a) {
      var c =
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : t,
        d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : z;
      try {
        var h = n.a.stringify(
          g.a.decrypt(a, b(c), { mode: e.a, padding: p.a, iv: b(d) })
        );
      } catch (E) {
        h = a;
      }
      return h;
    }
    function l(a) {
      var c =
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : t,
        e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : z,
        d = "string" == typeof a ? a : JSON.stringify(a);
      return g.a
        .encrypt(d, b(c), { mode: v.a.mode.CBC, padding: m.a, iv: b(e) })
        .toString();
    }
    function h(a) {
      var c =
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : t,
        e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : z;
      try {
        var d = n.a.stringify(
          g.a.decrypt(a, b(c), { mode: v.a.mode.CBC, padding: m.a, iv: b(e) })
        );
      } catch (E) {
        d = a;
      }
      return d;
    }
    a.d(d, "d", function () {
      return r;
    });
    a.d(d, "c", function () {
      return u;
    });
    a.d(d, "b", function () {
      return l;
    });
    a.d(d, "a", function () {
      return h;
    });
    a(12);
    a(9);
    a(23);
    c = a(10);
    var g = a.n(c);
    c = a(25);
    var e = a.n(c);
    c = a(26);
    var n = a.n(c);
    c = a(51);
    var y = a.n(c);
    c = a(27);
    var p = a.n(c);
    c = a(14);
    var v = a.n(c);
    c = a(28);
    var m = a.n(c),
      t = "JGmbWHluhdSIRsDU",
      z = "mBwhDGwRMjVwFQAA";
  },
  545: function (c, d, a) {},
  546: function (c, d, a) {
    (function (b) {
      function c() {
        if (g.a.shouldShowNotice()) {
          var a = b(".cp-site-language-tip"),
            c = 0 < a.length && a.get(0).clientHeight,
            r = b(".notice-bar-wrapper");
          r.length &&
            (a.length &&
              (b("body").addClass("show-site-lan"), r.css({ top: c })),
            (d = Number(b("notice-bar").data("expires"))),
            (l = b("#crab .op-btn a").attr("pc-data-href")),
            (h = b("#crab .op-btn a").attr("mb-data-href")),
            b(".actions .stay").on("click", function () {
              b("body").removeClass("show-site-lan");
            }),
            b(".op-btn-ok").on("click", function () {
              b(".notice-bar-wrapper").addClass("hide-bar");
              setTimeout(function () {
                b(".notice-bar-wrapper").hide();
              }, 1e3);
              b("#navbar").hasClass("scrolled") &&
                b(".notice-bar-wrapper").hide();
              g.a.closeNotice(d);
            }),
            b(".notice-bar-wrapper").show(),
            setTimeout(function () {
              b(".notice-bar-wrapper").addClass("show-bar");
            }, 0),
            setTimeout(function () {
              b(".notice-bar-wrapper").addClass("change-color");
            }, 1e3),
            b(".op-btn .close").on("click", function () {
              b(".notice-bar-wrapper").addClass("hide-bar");
              setTimeout(function () {
                b(".notice-bar-wrapper").hide();
              }, 1e3);
              b("#navbar").hasClass("scrolled") &&
                b(".notice-bar-wrapper").hide();
              g.a.closeNotice(d);
            }),
            b(".op-btn .pc").on("click", function () {
              b(".notice-bar-wrapper").addClass("hide-bar");
              setTimeout(function () {
                b(".notice-bar-wrapper").hide();
              }, 1e3);
              g.a.closeNotice(d);
            }),
            0 < b("#crab").length && g.a.userJump(b("#crab"), l, h));
        }
      }
      a(41);
      a(6);
      var d,
        l,
        h,
        g = a(0);
      a(547);
      setTimeout(function () {
        b(c);
      }, 0);
      b(window).scroll(function () {
        var a = b(".notice-bar-wrapper").outerHeight(!0);
        b(document).scrollTop() >= a
          ? b(".notice-bar-wrapper").addClass("noticeBarFix")
          : (b(".cp-site-language-tip").after(b(".notice-bar-wrapper")),
            b(".notice-bar-wrapper").removeClass("noticeBarFix"));
      });
      b(window).on("resize", function () {
        0 < b("#crab").length &&
          (g.a.userJump(b("#crab"), l, h),
          b(".notice-bar-wrapper").css({
            top:
              0 < b(".cp-site-language-tip").length &&
              b(".cp-site-language-tip").get(0).clientHeight,
          }));
      });
    }).call(this, a(3));
  },
  547: function (c, d, a) {},
  548: function (c, d, a) {
    (function (b, c) {
      a(4);
      a(18);
      a(7);
      a(24);
      a(19);
      a(6);
      a(549);
      var d = a(43),
        l = a(0);
      a(616);
      a(617);
      a(618);
      a(619);
      a(620);
      a(621);
      a(128);
      a(622);
      a(623);
      b.OP_VUE_REGISTRY.set("oppo_navbar_V2", {
        data: function () {
          return {
            isStart: !0,
            isReFresh: 0,
            navbarHeight: 0,
            headerHeight: 0,
            isMobile: !1,
            isfixed: !1,
            headerNoFixed: !1,
            buyPopState: !1,
            anchorData: [],
            anchorHighlightIndex: 0,
            anchorAniHide: !1,
            prdPopAniHide: !1,
            mobShowPrdPopState: !1,
            mobShowAnchorPopState: !1,
            mobShowMask: !1,
            generalData: { isDark: "light", buyBtnMode: "link" },
            scrollBtnFS: 12,
            scrollBtnLH: 20,
            aniChannelPopup: !1,
            channelPopupState: !0,
            animateUnderlineCallback: null,
            isParallel: !1,
            prdNum: 0,
          };
        },
        created: function () {
          this.isMobile = 650 >= document.body.clientWidth;
          this.isStart = !1;
          document.addEventListener("click", this.navbarDocumentEnter);
        },
        mounted: function () {
          var a = this;
          this.init();
          window.addEventListener("resize", function () {
            a.isMobile = 650 >= document.body.clientWidth;
            650 >= document.body.clientWidth
              ? !1 === a.isMobile && a.reFreshSize()
              : !0 === a.isMobile && a.reFreshSize();
          });
        },
        computed: {
          getTextSize: function () {
            var a = this.anchorData[this.anchorHighlightIndex].title,
              b = this.scrollBtnFS,
              c = document.createElement("span"),
              d;
            return (
              (d = c.offsetWidth),
              (c.style.visibility = "hidden"),
              (c.style.fontSize = b + "px"),
              document.body.appendChild(c),
              void 0 !== c.textContent
                ? (c.textContent = a)
                : (c.innerText = a),
              (d = c.offsetWidth - d + 4),
              c.parentNode.removeChild(c),
              d
            );
          },
        },
        methods: {
          init: function () {
            var a = this,
              b = c(this.$refs.navbar);
            this.headerNoFixed = !!window.NoScrollFixed;
            try {
              this.$nextTick(function () {
                a.generalData = {
                  buyBtnMode: b.data("buymode"),
                  isDark: b.data("theme"),
                };
                a.anchorData = JSON.parse(c(".navbar-anchor-data").html()).list;
                0 >= a.anchorData.length && (a.isParallel = !0);
                a.prdNum = c(a.$refs.prdTabPop).find("li").length;
              });
            } catch (n) {}
            if (
              ((this.navbarHeight = b.height()),
              (this.headerHeight =
                0 < c("#header-v2").length ? c("#header-v2").height() : 0),
              opsiteBase.UIUtils.fixedSpecial(b[0]),
              this.isMobile && 0 < this.anchorData.length)
            )
              try {
                this.$nextTick(function () {
                  a.scrollBtnFS = c(a.$refs.anchorPopTrigger)
                    .find("li")
                    .css("font-size")
                    .replace("px", "");
                  a.scrollBtnLH = c(a.$refs.anchorPopTrigger)
                    .find("li")
                    .css("line-height")
                    .replace("px", "");
                });
              } catch (n) {}
            var e = setTimeout(function () {
              clearTimeout(e);
              a.animateUnderlineCallback = Object(d.a)(
                ".oppo-navbar-v2 .anchor_point-wrap",
                ".anchor_point-item",
                {
                  css: {
                    height: "2px",
                    background: "#2EC84E",
                    bottom: "-1px",
                    left: 0,
                  },
                },
                100
              );
            });
            window.addEventListener(
              "scroll",
              l.a.throttle(this.scrollWindow, 10)
            );
          },
          reFreshSize: function () {
            this.init();
            document.addEventListener("click", this.navbarDocumentEnter);
          },
          showByPop: function () {},
          toggleAnchorPoint: l.a.debounce(function (a, b, e) {
            if ("#" !== e) {
              var d = setTimeout(function () {
                clearTimeout(d);
                var a = c(e).offset().top;
                c("html,body").animate({ scrollTop: a }, 300);
              }, 700);
              return !1;
            }
          }, 300),
          scrollWindow: function () {
            var a = c(document).scrollTop(),
              b = c("#header-v2").height();
            this.isfixed = a > b;
            this.scrollHighlight();
          },
          scrollHighlight: function () {
            var a = this,
              b = c(document, window).scrollTop(),
              e = 0;
            this.anchorData.forEach(function (d, g) {
              try {
                var h = "#" === d.id ? "#" : c(d.id);
                if ("#" === h)
                  a.animateUnderlineCallback(
                    c(a.$refs.anchorPoint).find(".anchor_point-item a").eq(0)
                  );
                else if (0 < h.length) {
                  var l = h.offset().top;
                  h.height();
                  l - a.headerHeight - a.navbarHeight - 41 < b &&
                    ((e = g),
                    a.animateUnderlineCallback(
                      c(a.$refs.anchorPoint).find(".anchor_point-item a").eq(g)
                    ));
                }
              } catch (m) {}
            });
            this.anchorHighlightIndex = e;
          },
          mobPrdToggleShowPop: function () {},
          navbarDocumentEnter: function (a) {
            var b = this,
              e = this,
              d = c(this.$refs.prdTabPop);
            if (this.$refs.prdPopTrigger && 1 < this.prdNum)
              if (this.$refs.prdPopTrigger.contains(a.target))
                if (e.mobShowPrdPopState) {
                  e.mobShowPrdPopState = !1;
                  l.a.toggleScroll(!0);
                  var h = setTimeout(function () {
                    clearTimeout(h);
                    d.slideUp(200, function () {
                      e.prdPopAniHide = !1;
                    });
                  }, 300);
                } else
                  (e.prdPopAniHide = !0),
                    l.a.toggleScroll(!1),
                    d.slideDown(200, function () {
                      var a = setTimeout(function () {
                        clearTimeout(a);
                        e.mobShowPrdPopState = !0;
                      }, 100);
                    });
              else {
                e.mobShowPrdPopState = !1;
                l.a.toggleScroll(!0);
                var p = setTimeout(function () {
                  clearTimeout(p);
                  d.slideUp(200, function () {
                    e.prdPopAniHide = !1;
                  });
                }, 300);
              }
            var r = c(this.$refs.anchorPointPop);
            if (this.$refs.anchorPopTrigger)
              if (this.$refs.anchorPopTrigger.contains(a.target))
                if (e.mobShowAnchorPopState) {
                  e.mobShowAnchorPopState = !1;
                  l.a.toggleScroll(!0);
                  var m = setTimeout(function () {
                    clearTimeout(m);
                    r.slideUp(200, function () {
                      b.anchorAniHide = !1;
                    });
                  }, 300);
                } else
                  (this.anchorAniHide = !0),
                    l.a.toggleScroll(!1),
                    r.slideDown(200, function () {
                      var a = setTimeout(function () {
                        clearTimeout(a);
                        e.mobShowAnchorPopState = !0;
                      }, 100);
                    });
              else if (this.mobShowAnchorPopState) {
                e.mobShowAnchorPopState = !1;
                l.a.toggleScroll(!0);
                var u = setTimeout(function () {
                  clearTimeout(u);
                  r.slideUp(200, function () {
                    b.anchorAniHide = !1;
                  });
                }, 300);
              }
            this.$refs.buyPopTrigger &&
              "dropDown" == this.generalData.buyBtnMode &&
              (this.$refs.buyPopTrigger.contains(a.target)
                ? (this.buyPopState = !this.buyPopState)
                : (this.buyPopState = !1));
            this.$refs.navbarChannelTrigger &&
              (this.$refs.navbarChannelTrigger.contains(a.target) ||
                "popup" != this.generalData.buyBtnMode ||
                this.$refs.buyPopTrigger.contains(a.target) ||
                this.hideBuyPopup());
          },
          showBuyPopup: function () {
            var a = this;
            this.channelPopupState = !1;
            var b = setTimeout(function () {
              clearTimeout(b);
              a.aniChannelPopup = !0;
            }, 200);
            c("#contact-pop").css({ visibility: "hidden", opacity: "0" });
            c("#cmp_cem").css({ visibility: "hidden", opacity: "0" });
            c("#nps").css({ visibility: "hidden", opacity: "0" });
            c("html").css({ overflow: "hidden" });
          },
          hideBuyPopup: function () {
            var a = this;
            this.aniChannelPopup = !1;
            var b = setTimeout(function () {
              clearTimeout(b);
              a.channelPopupState = !0;
            }, 320);
            c("#contact-pop").css({ visibility: "visible", opacity: "1" });
            c("#cmp_cem").css({ visibility: "visible", opacity: "1" });
            c("#nps").css({ visibility: "visible", opacity: "1" });
            c("html").css({ overflow: "initial" });
          },
        },
      });
    }).call(this, a(34), a(3));
  },
  549: function (c, d, a) {},
  61: function (c, d, a) {
    function b(a, b) {
      for (var c = 0; c < b.length; c++) {
        var e = b[c];
        e.enumerable = e.enumerable || !1;
        e.configurable = !0;
        "value" in e && (e.writable = !0);
        Object.defineProperty(a, e.key, e);
      }
    }
    function r(a, b, c) {
      var e = document.getElementById("one-toast");
      e ||
        ((e = document.createElement("div")),
        (e.className = "layer-toast"),
        (e.id = "one-toast"),
        (e.innerHTML =
          '\n      \x3cdiv class\x3d"toast-container  js-toast-container"\x3e\n        \x3cdiv class\x3d"toast-icon js-toast-icon"\x3e\n          \x3csvg class\x3d"ico svg-icon"\x3e\n          \x3c/svg\x3e\n        \x3c/div\x3e\n        \x3cdiv class\x3d"toast-text font-body-2 js-toast-text"\x3e\n        \x3c/div\x3e\n      \x3c/div\x3e'),
        document.body.appendChild(e),
        (e = document.getElementById("one-toast")));
      b && "string" == typeof b && ((c = b), (b = 3e3));
      var d = e.querySelector(".js-toast-icon"),
        g = e.querySelector(".js-toast-text"),
        h = e.querySelector(".js-toast-container");
      d &&
        c &&
        (d.classList.add("show-icon"),
        (d.innerHTML =
          '\x3csvg class\x3d"ico svg-icon"\x3e\x3cuse xlink:href\x3d"#'.concat(
            c,
            '"\x3e\x3c/use\x3e\x3c/svg\x3e'
          )));
      g && (g.innerHTML = a);
      h.classList.add("show-toast");
      setTimeout(function () {
        h.classList.remove("show-toast");
        d &&
          c &&
          setTimeout(function () {
            d.classList.remove("show-icon");
          }, 300);
      }, b || 3e3);
    }
    a.d(d, "b", function () {
      return r;
    });
    a.d(d, "a", function () {
      return u;
    });
    a(8);
    a(12);
    a(13);
    a(6);
    var u = (function () {
      function a(b, c) {
        var e = b.id,
          d = b.title,
          g = b.cancel,
          h = b.confirm,
          l = b.customClass;
        l = void 0 === l ? "" : l;
        var r = b.isDark;
        r = void 0 !== r && r;
        var u = b.noHeader;
        u = void 0 !== u && u;
        var x = b.autoWidth;
        x = void 0 !== x && x;
        var A = b.hasFooter;
        A = void 0 !== A && A;
        var B = b.clearHtml;
        B = void 0 !== B && B;
        var G = b.hasConfirm;
        G = void 0 === G || G;
        var E = b.hasReject;
        E = void 0 === E || E;
        var F = b.confirmText;
        F = void 0 === F ? "Confirm" : F;
        b = b.cancelText;
        b = void 0 === b ? "Cancel" : b;
        if (!(this instanceof a))
          throw new TypeError("Cannot call a class as a function");
        !0;
        this.id = e || "opsite-dialog".concat(new Date().getTime());
        this.customClass = l;
        this.title = d;
        this.visible = !1;
        this.isDark = r;
        this.noHeader = u;
        this.autoWidth = x;
        this.hasFooter = A;
        this.hasReject = E;
        this.hasConfirm = G;
        this.confirmText = F;
        this.cancelText = b;
        this.containerHtml = c;
        this.htmlClearInClose = B;
        this.cancel = g;
        this.confirm = h;
        this.render();
        this.initEvent();
      }
      var c;
      return (
        (c = [
          {
            key: "show",
            value: function () {
              this.visible = !0;
              var a = document.getElementById(this.id);
              this.htmlClearInClose &&
                (a.querySelector(".dialog-container-clear").innerHTML =
                  this.containerHtml);
              a.classList.remove("hidden");
              setTimeout(function () {
                a.querySelector(".cover").classList.add(
                  "dialog-translate-enter"
                );
                document.documentElement.classList.add("noscroll");
              }, 0);
            },
          },
          {
            key: "hide",
            value: function () {
              var a = this;
              this.visible = !1;
              var b = document.getElementById(this.id);
              b.querySelector(".cover").classList.remove(
                "dialog-translate-enter"
              );
              setTimeout(function () {
                document.documentElement.classList.remove("noscroll");
                b.classList.add("hidden");
                a.htmlClearInClose &&
                  (b.querySelector(".dialog-container-clear").innerHTML = "");
              }, 500);
            },
          },
          {
            key: "onCancelClick",
            value: function () {
              this.cancel && "function" == typeof this.cancel && this.cancel();
              this.hide();
            },
          },
          {
            key: "onConfirmClick",
            value: function () {
              this.confirm &&
                "function" == typeof this.confirm &&
                this.confirm();
              this.hide();
            },
          },
          {
            key: "initEvent",
            value: function () {
              var a = this;
              document
                .getElementById(this.id)
                .addEventListener("click", function (b) {
                  b = b.target;
                  b.classList.contains("js-dialog-close") && a.hide();
                  b.classList.contains("js-dialog-cancel") && a.onCancelClick();
                  b.classList.contains("js-dialog-confirm") &&
                    a.onConfirmClick();
                });
            },
          },
          {
            key: "render",
            value: function () {
              var a = this.hasFooter
                ? '\n    \x3cdiv class\x3d"card-footer"\x3e\n      '
                    .concat(
                      this.hasReject
                        ? '\x3cdiv class\x3d"action-container" \x3e\n          \x3ca href\x3d"javascript:;" class\x3d"new-button new-button--ghost large bubblen-animete-btn font-body-2 js-dialog-cancel"\x3e'.concat(
                            this.cancelText,
                            " \x3c/a\x3e\n          \x3c/div\x3e"
                          )
                        : "",
                      "\n      "
                    )
                    .concat(
                      this.hasConfirm
                        ? '\x3cdiv class\x3d"action-container" \x3e\n        \x3ca href\x3d"javascript:;" class\x3d"new-button new-button--primary large bubblen-animete-btn font-body-2 js-dialog-confirm"\x3e'.concat(
                            this.confirmText,
                            "\x3c/a\x3e\n      \x3c/div\x3e"
                          )
                        : "",
                      "\n    \x3c/div\x3e"
                    )
                : "";
              a =
                '\n      \x3cdiv class\x3d"cover"\x3e\n        \x3cdiv class\x3d"card-container"\x3e\n            \x3cdiv class\x3d"hint-card js-dialog-hint"\x3e\n              '
                  .concat(
                    this.noHeader
                      ? ""
                      : '\x3cdiv class\x3d"card-header"\x3e\n                \x3ca href\x3d"javascript:;" class\x3d"close-hint js-dialog-close"\x3e\x3c/a\x3e\n              \x3c/div\x3e',
                    '\n              \x3cdiv class\x3d"card-content"\x3e\n                '
                  )
                  .concat(
                    this.title
                      ? '\x3ch3 class\x3d"card-title font-title"\x3e'.concat(
                          this.title,
                          "\x3c/h3\x3e"
                        )
                      : "",
                    '\n                \x3cdiv class\x3d"dialog-container '
                  )
                  .concat(
                    this.htmlClearInClose ? "dialog-container-clear" : "",
                    '"\x3e\n                '
                  )
                  .concat(
                    this.containerHtml ? this.containerHtml : "",
                    "\n                \x3c/div\x3e\n                "
                  )
                  .concat(
                    a,
                    "\n              \x3c/div\x3e\n            \x3c/div\x3e\n        \x3c/div\x3e\n      \x3c/div\x3e"
                  );
              var b = document.createElement("div");
              b.id = this.id;
              b.className = "opsite-dialog "
                .concat(this.isDark ? "dark-theme" : "light-theme", " ")
                .concat(this.customClass, " hidden");
              b.innerHTML = a;
              b.dialog = this;
              document.body.appendChild(b);
            },
          },
          {
            key: "$rootNom",
            get: function () {
              document.getElementById(this.id);
            },
          },
        ]),
        b(a.prototype, c),
        a
      );
    })();
  },
  616: function (c, d, a) {
    c = a(1);
    c = a.n(c);
    d = a(2);
    a = a.n(d);
    c = new c.a({
      id: "icon-3d",
      use: "icon-3d-usage",
      viewBox: "0 0 18 18",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 18 18" id\x3d"icon-3d"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M8.758 1.053a.5.5 0 01.448 0l6.732 3.366a.5.5 0 01.276.447v7.722a.5.5 0 01-.256.437l-6.732 3.761a.5.5 0 01-.488 0l-6.732-3.762a.5.5 0 01-.256-.436V4.866a.5.5 0 01.276-.447l6.732-3.366zM2.75 12.295V5.684L5.401 7.01l.448-.895-2.49-1.245L8.982 2.06l5.641 2.82-2.472 1.236.448.895 2.615-1.308v6.593L9.5 15.488V12h-1v3.508l-5.75-3.213zm5.204-3.673a1.376 1.376 0 00-.684-.168c-.06 0-.104.002-.132.006L8.38 7.194v-.402H5.962v.498h1.632L6.088 8.85l.36.318c.092-.088.188-.154.288-.198a.934.934 0 01.366-.066c.272 0 .484.082.636.246.152.16.228.376.228.648s-.076.492-.228.66c-.152.164-.362.246-.63.246-.428 0-.736-.214-.924-.642l-.48.24c.1.288.274.51.522.666.248.156.544.234.888.234a1.6 1.6 0 00.768-.18c.228-.124.404-.294.528-.51.124-.216.186-.462.186-.738 0-.26-.056-.49-.168-.69-.112-.2-.27-.354-.474-.462zm1.332-1.83v4.338h1.488c.436 0 .814-.088 1.134-.264.32-.176.564-.426.732-.75.172-.328.258-.71.258-1.146 0-.44-.086-.824-.258-1.152a1.758 1.758 0 00-.732-.756c-.32-.18-.698-.27-1.134-.27H9.286zm2.532 3.39c-.264.3-.648.45-1.152.45h-.738V7.296h.738c.504 0 .888.152 1.152.456.268.3.402.706.402 1.218 0 .504-.134.908-.402 1.212z" fill-opacity\x3d".75" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
  },
  617: function (c, d, a) {
    c = a(1);
    c = a.n(c);
    d = a(2);
    a = a.n(d);
    c = new c.a({
      id: "icon-book",
      use: "icon-book-usage",
      viewBox: "0 0 18 18",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 18 18" id\x3d"icon-book"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M9.6 2.25V1.5H8.4v.75H2.917a.667.667 0 00-.667.667v12.166c0 .368.298.667.667.667H8.4v.75h1.2v-.75h.076V14.683H9.6V3.317h.076V2.25H9.6zm-1.2 12.3V3.45H3.45v11.1H8.4zm1.952-11.767V2.25h1.352V3.317h-1.352v-.534zm2.028 0V2.25h1.351V3.317H12.38v-.534zM15.75 3V2.917a.667.667 0 00-.667-.667h-.833v1.2h.3v.3h1.2V3zm-.533 1.269h.533V5.62H14.683V4.27h.534zm0 2.027h.533v1.352H14.683V6.296h.534zm0 2.028h.533v1.352H14.683V8.324h.534zm0 2.028h.533v1.352H14.683v-1.352h.534zm0 2.028h.533v1.351H14.683V12.38h.534zm-.967 3.37h.833a.667.667 0 00.667-.667v-.833h-1.2v.3h-.3v1.2zm-.518-.533v.533H12.38V14.683h1.351v.534zm-2.028 0v.533h-1.352V14.683h1.352v.534z" fill-opacity\x3d".75" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
  },
  618: function (c, d, a) {
    c = a(1);
    c = a.n(c);
    d = a(2);
    a = a.n(d);
    c = new c.a({
      id: "icon-menu",
      use: "icon-menu-usage",
      viewBox: "0 0 18 18",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 18 18" id\x3d"icon-menu"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M6 13.594v-10.5h.75v10.5H6zM3.375 9.656V5.72h.75v3.937h-.75zm5.25-3.937v6.562h.75V5.72h-.75zm2.625 9.187v-10.5H12v10.5h-.75zm2.625-6.562v3.937h.75V8.344h-.75z" fill-opacity\x3d".75" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
  },
  619: function (c, d, a) {
    c = a(1);
    c = a.n(c);
    d = a(2);
    a = a.n(d);
    c = new c.a({
      id: "icon-overview",
      use: "icon-overview-usage",
      viewBox: "0 0 18 18",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 18 18" id\x3d"icon-overview"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M12.415 2.575a.5.5 0 00-.924 0l-.728 1.765a.949.949 0 01-.516.517l-1.766.727a.5.5 0 000 .925l1.766.727a.95.95 0 01.516.517l.728 1.765a.5.5 0 00.924 0l.728-1.765a.95.95 0 01.516-.517l1.766-.727a.5.5 0 000-.925l-1.766-.727a.951.951 0 01-.516-.517l-.728-1.765zm-.727 2.146l.265-.643.265.643a1.951 1.951 0 001.06 1.06l.644.266-.643.265a1.95 1.95 0 00-1.06 1.06l-.266.644-.265-.644a1.95 1.95 0 00-1.06-1.06l-.644-.265.644-.265a1.95 1.95 0 001.06-1.06zm-8.377-.097c.03-.03.07-.046.11-.046h4.595v-1H3.422a1.156 1.156 0 00-1.156 1.156v11h11a1.156 1.156 0 001.156-1.156V9.984h-1v4.594a.156.156 0 01-.156.156h-10v-10c0-.041.016-.081.045-.11z" fill-opacity\x3d".85" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
  },
  620: function (c, d, a) {
    c = a(1);
    c = a.n(c);
    d = a(2);
    a = a.n(d);
    c = new c.a({
      id: "icon-arrow-down",
      use: "icon-arrow-down-usage",
      viewBox: "0 0 16 16",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 16 16" id\x3d"icon-arrow-down"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M7.334 10.707L2.667 6.04l.707-.707 4.314 4.313L12 5.333l.707.707-4.667 4.667a.5.5 0 01-.707 0z" fill-opacity\x3d".95" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
  },
  621: function (c, d, a) {
    c = a(1);
    c = a.n(c);
    d = a(2);
    a = a.n(d);
    c = new c.a({
      id: "icon-arrow-down-dark",
      use: "icon-arrow-down-dark-usage",
      viewBox: "0 0 16 16",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 16 16" id\x3d"icon-arrow-down-dark"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M7.334 10.707L2.667 6.04l.707-.707 4.314 4.313L12 5.333l.707.707-4.667 4.667a.5.5 0 01-.707 0z" fill-opacity\x3d".95" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
  },
  622: function (c, d, a) {
    c = a(1);
    c = a.n(c);
    d = a(2);
    a = a.n(d);
    c = new c.a({
      id: "icon-close",
      use: "icon-close-usage",
      viewBox: "0 0 16 16",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 16 16" id\x3d"icon-close"\x3e\x3cpath d\x3d"M15.637 1.538L14.363.264l-3.181 3.182L8 6.628 1.637.264.363 1.538 6.727 7.9.363 14.264l1.274 1.274L8 9.174l6.363 6.364 1.274-1.274L9.273 7.9l6.364-6.363z" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
  },
  623: function (c, d, a) {
    c = a(1);
    c = a.n(c);
    d = a(2);
    a = a.n(d);
    c = new c.a({
      id: "icon-cover-care",
      use: "icon-cover-care-usage",
      viewBox: "0 0 18 18",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 18 18" id\x3d"icon-cover-care"\x3e\x3cpath d\x3d"M7.5 3.938a.563.563 0 11-1.125 0 .563.563 0 011.125 0z" fill-opacity\x3d".95" /\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M12.375 2.5h-6.75a.125.125 0 00-.125.125V15.5h6.875a.125.125 0 00.125-.125v-.75h1v.75c0 .621-.504 1.125-1.125 1.125H4.5V2.625c0-.621.504-1.125 1.125-1.125h6.75c.621 0 1.125.504 1.125 1.125V6.75h-1V2.625a.125.125 0 00-.125-.125z" fill-opacity\x3d".95" /\x3e\x3cmask id\x3d"icon-cover-care_a" fill\x3d"#fff"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M13.087 9.09l.53-.53a1.5 1.5 0 012.121 2.121l-.53.53-2.121 2.122-2.122-2.121-.49-.491a1.5 1.5 0 112.081-2.16l.53.53z" /\x3e\x3c/mask\x3e\x3cpath d\x3d"M13.617 8.56l-.707-.707.707.707zm-.53.53l.707.707-.707.707-.707-.707.707-.707zm.53-.53l-.707-.707.707.707zm2.121 2.121l.707.708-.707-.707zm0 0l.707.708-.707-.707zm-.53.53l-.707.708-.707-.708.707-.707.707.707zm0 0l.707-.706.708.707-.708.707-.707-.707zm-2.121 2.122l.707.707-.707.707-.707-.707.707-.707zm0 0l-.707-.707.707-.707.707.707-.707.707zm0 0l.707.707-.708.707-.707-.707.707-.707zm-2.122-2.121l-.707.707-.707-.707.707-.707.707.707zm0 0l.707-.708.708.707-.708.708-.707-.708zm-.49-.491l.68-.733.014.013.013.013-.707.707zm2.081-2.16l.707.707-.707.707-.707-.707.707-.707zm0 0l-.706-.708.707-.707.707.707-.707.707zm1.768.706l-.53.53-1.414-1.414.53-.53 1.414 1.414zm0 0L12.91 7.853l1.414 1.414zm.707 0a.5.5 0 00-.707 0L12.91 7.853a2.5 2.5 0 013.535 0l-1.414 1.414zm0 .707a.5.5 0 000-.707l1.414-1.414a2.5 2.5 0 010 3.536l-1.414-1.415zm0 0l1.414 1.415-1.414-1.414zm-.53.53l.53-.53 1.414 1.415-.53.53-1.414-1.415zm0 1.415l1.414-1.415-1.414 1.415zm-2.121.707l2.121-2.121 1.414 1.414-2.12 2.121-1.415-1.414zm1.414 0L12.38 14.04l1.414-1.414zm-1.415 0l1.415 1.414-1.415-1.414zm-.707-2.121l2.122 2.121-1.415 1.414-2.121-2.121 1.414-1.414zm0 1.414l-1.414-1.414 1.415 1.414zm-.49-1.905l.49.49-1.414 1.415-.49-.491 1.414-1.414zm-1.388 1.44a2.569 2.569 0 01-.067-.065l1.414-1.414.014.013-1.361 1.465zm-.067-.065a2.5 2.5 0 010-3.536l1.414 1.414a.5.5 0 000 .708l-1.414 1.414zm0-3.536a2.5 2.5 0 013.535 0l-1.414 1.414a.5.5 0 00-.707 0L9.727 7.853zm3.535 0h.001L11.85 9.269l1.413-1.415zm.002 1.414v.001l-1.415-1.414 1.415 1.413zm-.884.53l-.53-.53 1.414-1.414.53.53-1.414 1.414z" fill-opacity\x3d".95" mask\x3d"url(#icon-cover-care_a)" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
  },
  624: function (c, d, a) {
    (function (b) {
      function c(a) {
        var b;
        g.a.isOnline() && (b = ".oppo.com");
        a = new Date(new Date().getTime() + 36e5 * a);
        h.a.set("popUpClose", "true", { expires: a, domain: b });
      }
      function d() {
        z.css({ background: A, transition: "0.4s" });
        setTimeout(function () {
          z.css({ background: B, transition: "0.15s" });
        }, 1400);
      }
      a(12);
      a(41);
      a(6);
      a(625);
      var l = a(32),
        h = a.n(l),
        g = a(0),
        e = (a(626), new MobileDetect(window.navigator.userAgent));
      l = b(".all-pop-up-content #all-pop-up-close_x");
      var n = b(".all-pop-up-content"),
        y = b(".all-pop-up-middle .ios"),
        p = b(".all-pop-up-middle .androidOrpc"),
        v = b(".all-pop-up-bottom .ios"),
        m = b(".all-pop-up-bottom .androidOrpc"),
        t = b(".all-pop-up-content #all-pop-up-downloadClick"),
        z = b(".all-pop-up"),
        x = Number(n.data("expires"));
      e = e.mobile();
      var A = b(".all-pop-up-content .all-pop-up").attr("data-highLight"),
        B = b(".all-pop-up-content .all-pop-up").attr("data-backGrColor"),
        G = b(".cp-cookie-tip").outerHeight(),
        E = b(".all-pop-up").width();
      z.css("right", "-".concat(E, "px"));
      l.click(function () {
        n.hide();
        c(x);
      });
      t.click(function () {
        n.hide();
        c(x);
      });
      "iPhone" == e || "iPad" == e
        ? (p.hide(), m.hide())
        : (y.hide(), v.hide());
      var F = "true" === h.a.get("cookiesaccepted");
      h.a.get("popUpClose") && n.hide();
      var I = b(window).width();
      b(document).on("click", ".cp-cookie-tip .close", function () {
        768 > I ? n.css({ bottom: 0 }, 260) : z.css({ bottom: "12px" }, 260);
      });
      window.addEventListener("load", function () {
        0 >= n.length ||
          0 >= b(".cp-cookie-tip").length ||
          b(function () {
            F ||
              (1024 != I && 768 != I) ||
              z.css("bottom", cookieHeight + 12 + "px");
          });
      });
      "none" != b(".cp-cookie-tip").css("display") && 768 > I
        ? (z.css("right", "0px"),
          b(".all-pop-up-content").css({
            bottom: "".concat(G, "px"),
            opacity: "1",
            transition: "0.4s",
          }),
          d())
        : "none" == b(".cp-cookie-tip").css("display") && 768 > I
        ? (z.css("right", "0px"),
          b(".all-pop-up-content").css("bottom", "-".concat(G, "px")),
          setTimeout(function () {
            b(".all-pop-up-content").css({
              bottom: "0px",
              opacity: "1",
              transition: "0.4s",
            });
          }, 0),
          d())
        : "none" != b(".cp-cookie-tip").css("display") && 768 <= I
        ? (b(".all-pop-up-content").css({
            bottom: "".concat(G, "px"),
            opacity: 1,
          }),
          d(),
          b(".all-pop-up-content").animate(
            { right: E + 12 + "px", opacity: 1 },
            400
          ))
        : "none" == b(".cp-cookie-tip").css("display") &&
          768 <= I &&
          (b(".all-pop-up-content").animate("bottom", "0px"),
          b(".all-pop-up-content").animate(
            { right: E + 12 + "px", opacity: 1 },
            400
          ),
          d());
      b(".cp-cookie-tip .close").on("click", function () {
        b(".all-pop-up-content").css({ bottom: "0px", transition: "0.4s" });
      });
    }).call(this, a(3));
  },
  625: function (c, d, a) {},
  627: function (c, d, a) {
    (function (b) {
      a(4);
      a(6);
      var c,
        d,
        l,
        h = a(393),
        g = a(0),
        e = (a(629), ".cp-waterfall"),
        n = 0;
      b(function () {
        (c = b(e)) &&
          (b(e + " .cp-video-item").each(function () {
            h.a.init(this);
          }),
          (d = c.find(".show-more")),
          (l = c.find(".show-less")),
          c.on("click", ".img-box", function (a) {
            a = b(a.currentTarget);
            var c = a.closest(".item");
            c &&
              !c.hasClass("cp-video-item") &&
              ((c = c.data("href"))
                ? window.open(c, "_self")
                : a.hasClass("img-box") &&
                  ((a = a.find("img")),
                  (a = a.length && (a.data("hd") || a.data("src"))) &&
                    g.a.playImg(a)));
          }),
          c.on("click", ".desc", function (a) {
            (a = b(a.currentTarget).closest(".item").data("href")) &&
              window.open(a, "_self");
          }),
          d &&
            d.click(function () {
              c.find(".col").each(function (a, c) {
                var d = b(c).find(".tobe-added");
                d.addClass("new-item new-added");
                d.removeClass("tobe-added");
                d.removeClass("to-remove");
                setTimeout(function () {
                  d.removeClass("new-item");
                }, 100);
              });
              1 <= ++n && (d.hide(), l.show());
            }),
          l &&
            l.click(function () {
              var a = b(".new-added");
              a.addClass("to-remove");
              d.show();
              l.hide();
              n = 0;
              var e = c.closest("section");
              e = e ? e.offset().top : c.offset().top;
              b("html, body").animate({ scrollTop: e }, 600);
              setTimeout(function () {
                a.addClass("tobe-added");
              }, 600);
            }));
      });
    }).call(this, a(3));
  },
  628: function (c, d, a) {},
  629: function (c, d, a) {},
  630: function (c, d, a) {
    (function (b) {
      a(4);
      var c,
        d = a(0);
      a(631);
      a(91);
      b(function () {
        !(c = b(".cp-slicks")) ||
          0 >= c.length ||
          (!(function () {
            var a = c.find(".item-list");
            if (a && !(0 >= a.length)) {
              var d = c.find(".prev-arrow"),
                g = c.find(".next-arrow");
              a.slick({
                infinite: !1,
                speed: 300,
                slidesToShow: 1,
                centerMode: !0,
                variableWidth: !0,
                slidesToScroll: 1,
                prevArrow: d,
                nextArrow: g,
                initialSlide: b("html").is(".lang-ar")
                  ? a.children(".item").length - 1
                  : 0,
              });
            }
          })(),
          c.on("click", ".item", function (a) {
            var c = b(a.currentTarget);
            a = b(a.target);
            var g = c.data("href"),
              e = c.find("video");
            c = c.find(".cover");
            if (g)
              return 0 < e.length &&
                (a.hasClass("play-btn") || a.closest(".play-btn").length)
                ? void d.a.playVideo(e.prop("src") || e.data("src"))
                : void window.location.assign(g);
            0 < e.length &&
            (a.hasClass("img-box") || a.closest(".img-box").length)
              ? d.a.playVideo(e.prop("src") || e.data("src"))
              : (a.hasClass("img-box") || a.closest(".img-box").length) &&
                c.length &&
                d.a.playImg(c.data("hd") || c.prop("src"));
          }));
      });
    }).call(this, a(3));
  },
  631: function (c, d, a) {},
  632: function (c, d, a) {
    (function (b) {
      a(4);
      a(71);
      a(16);
      a(72);
      var c = a(0);
      a(633);
      a(106);
      a(108);
      b(document).ready(function () {
        function a(a, d) {
          b(a)
            .find(".cp-video-item")
            .each(function () {
              !(function (a, d) {
                var e, g;
                if (((e = b(a)), (a = e.find(".video-box")))) {
                  var h = a.find("video");
                  var l = h.get(0);
                  var m =
                    (m = h.get(0)) &&
                    m.className &&
                    m.className.includes("isBackGroundVideo")
                      ? h.get(0)
                      : h.get(1);
                  a.find("video").each(function () {
                    this.className.includes("isBackGroundVideo") ||
                      ((g = this.dataset.src),
                      (h = this),
                      this.className.includes("isBackGroundVideo"));
                  });
                  (function () {
                    e.on("mouseenter", function () {
                      try {
                        var a = b(this).find(".img-box .video-box"),
                          d = b(this).find(".img-box .video-cover");
                        b(".cp-bgchange-gallery .video-box .isBackGroundVideo")
                          .siblings()
                          .hide();
                        1024 < window.innerWidth &&
                          (b(this)
                            .find(".play-btn")
                            .css({
                              left: "12px",
                              transition: "0.25s",
                              opacity: "1",
                            }),
                          b(this).find(".item-mask").show());
                        0 >= b(this).find(".isBackGroundVideo").length
                          ? (a.css("opacity", "0"), d.css("opacity", "1"))
                          : 1024 < window.innerWidth
                          ? (a.css("opacity", "1"), d.css("opacity", "0"))
                          : (a.css("opacity", "0"), d.css("opacity", "1"));
                        var e = window.navigator.userAgent.indexOf("QQBrowser");
                        1024 < window.innerWidth && -1 >= e
                          ? (c.a.toggleVideoMute(m, !0), m.play())
                          : (b(m).remove(),
                            a.css("opacity", "0"),
                            d.css("opacity", "1"));
                      } catch (A) {}
                    });
                    1024 >= window.innerWidth && e.trigger("mouseenter");
                    e.on("mouseleave", function () {
                      var a = b(this).find(".img-box .video-box"),
                        d = b(this).find(".img-box .video-cover");
                      if (
                        (1024 < window.innerWidth &&
                          (b(this)
                            .find(".play-btn")
                            .css({
                              left: "-100px",
                              transition: "0.25s",
                              opacity: "0",
                            }),
                          b(this).find(".item-mask").hide()),
                        0 >= b(this).find(".isBackGroundVideo").length)
                      )
                        return (
                          a.css("opacity", "0"), void d.css("opacity", "1")
                        );
                      a.css("opacity", "0");
                      d.css("opacity", "1");
                      c.a.pauseVideo(m);
                    });
                  })();
                  e.on("click touchstart", ".play-btn, .fa-play", function () {
                    0 < d || c.a.playVideo(g);
                  });
                  e.on("dbclick", function (a) {
                    a.preventDefault();
                  });
                  e.on("click", ".video,.item-mask", function (a) {
                    (a.preventDefault(), 0 < d) ||
                      ((a = e.data("href"))
                        ? window.location.assign(a)
                        : c.a.playVideo(g, l.currentTime));
                  });
                }
              })(this, d);
            });
        }
        b(".cp-bgchange-gallery").each(function (d, h) {
          if (!(0 >= b(h).find(".cp_bgchange_gallery_swiper").length)) {
            var g,
              e = new opSwiper(
                ".".concat(
                  b(h).data("discover"),
                  " .cp_bgchange_gallery_swiperContainer"
                ),
                {
                  direction: "horizontal",
                  freeMode: !0,
                  observer: !0,
                  observeParents: !0,
                  freeModeMomentumRatio: 0.5,
                  navigation: {
                    nextEl: ".".concat(
                      b(h).data("discover"),
                      " .cp-discover-btns .disnext-arrow"
                    ),
                    prevEl: ".".concat(
                      b(h).data("discover"),
                      " .cp-discover-btns .disprev-arrow"
                    ),
                  },
                  scrollbar: {
                    el: ".".concat(
                      b(h).data("discover"),
                      " .cp_bgchange_gallery_swiperScroll"
                    ),
                    draggable: !0,
                    snapOnRelease: !1,
                  },
                  breakpoints: {
                    320: {
                      slidesPerView: 1.3,
                      spaceBetween: 16,
                      slidesOffsetBefore: 16,
                      slidesOffsetAfter: 16,
                    },
                    768: { slidesPerView: 3, spaceBetween: 20 },
                    1440: { slidesPerView: 3, spaceBetween: 20 },
                  },
                  on: {
                    touchEnd: function () {
                      g = Math.abs(e.touches.startX - e.touches.currentX);
                    },
                  },
                }
              );
            e.scrollbar.$el.css("height", "4px");
            768 > window.innerWidth && e.scrollbar.$el.css("height", "2px");
            e.scrollbar.$dragEl.css("background", "rgba(0, 0, 0, 0.28)");
            d = b(h);
            a(h, g);
            d.on("click", ".img-box", function (a) {
              if (!(0 < g)) {
                a = b(a.currentTarget);
                var d = a.closest(".item");
                d &&
                  !d.hasClass("cp-video-item") &&
                  ((d = d.data("href"))
                    ? window.open(d, "_self")
                    : a.hasClass("img-box") &&
                      ((a = a.find("img")),
                      (a = a.length && (a.data("hd") || a.data("src"))) &&
                        c.a.playImg(a)));
              }
            });
            d.on("click", ".desc", function (a) {
              0 < g ||
                ((a = b(a.currentTarget).closest(".item").data("href")) &&
                  window.open(a, "_self"));
            });
            (function (a) {
              3 >= b(a).find(".item-list .item").length &&
                b(a).find(".disSlick-arrows").hide();
              2 >= b(a).find(".item-list .item").length &&
                b(a).find(".cp_bgchange_gallery_swiperScroll").hide();
            })(h);
            b("body").on(
              "click",
              ".".concat(b(h).data("discover"), " a.close-video-btn"),
              function (b) {
                a(h, g);
              }
            );
          }
        });
      });
    }).call(this, a(3));
  },
  633: function (c, d, a) {},
  636: function (c, d, a) {},
  637: function (c, d, a) {
    (function (b) {
      a(8);
      a(4);
      a(13);
      a(66);
      a(6);
      a(638);
      var c = a(61);
      !(function (a) {
        function d(a, b, c) {
          return new d.fn.init(a, b, c);
        }
        d.fn = d.prototype = { constructor: d };
        d.extend = d.fn.extend = function (a) {
          for (var b in a) this[b] = a[b];
        };
        (d.fn.init = function (a, g, e) {
          var h = this;
          return (
            d.fn.extend({
              qrcodeDialog: null,
              showMobile: !0,
              $mainBox: b(a),
              $mainBtn: b("".concat(a, " ").concat(g.$mainBtn)),
              $mainPop: b("".concat(a, " ").concat(g.$mainPop)),
              $closeBtn: b("".concat(a, " ").concat(g.$closeBtn)),
              $phoneBox: b("".concat(a, " ").concat(g.$phoneBox)),
              $wxImgBox: b(
                "".concat(a, " ").concat(g.$phoneBox, " ").concat(g.$wxImgBox)
              ),
              $nps: b("".concat(g.$nps)),
              isCookie: null,
              isCookieRO: null,
              isBack: null,
              isMobile: function () {
                return 768 >= b(window).width();
              },
              closePop: function () {
                this.$mainPop.removeClass("pop-box-ani");
                b("#contact-pop")
                  .find("#pop_icon")
                  .removeClass("pop_icon_left");
                this.isMobile() &&
                  this.$mainPop.css({
                    position: "fixed",
                    bottom: "unset",
                    height: "100%",
                    right: "-1000%",
                    width: "100%",
                    left: "unset",
                  });
                this.$mainPop.css({ transition: "none" });
                this.$mainPop.addClass("contact-pop_bottom");
                this.isMobile() &&
                  b("#contact-pop").find(".item-wx_img").hide();
                b("#contact-pop").find(".pop-item-QRcode").find("i") &&
                  b("#contact-pop")
                    .find(".pop-item-QRcode")
                    .find("i")
                    .removeClass("item-status_rotate");
              },
              showPop: function () {
                var a = this;
                this.$mainPop.removeClass("contact-pop_bottom");
                this.$mainPop.css({
                  transition:
                    "transform 0.42s cubic-bezier(0.32, 0.94, 0.6, 1), opacity 0.32s cubic-bezier(0.32, 0.94, 0.6, 1)",
                });
                this.$mainPop.addClass("pop-box-ani");
                var c =
                  document.getElementsByClassName("contact-pop_subbox")[0];
                if (this.isMobile()) {
                  var d = (function (a, b, c) {
                    return (
                      b in a
                        ? Object.defineProperty(a, b, {
                            value: c,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (a[b] = c),
                      a
                    );
                  })(
                    {
                      position: "fixed",
                      height: "auto",
                      right: "0px",
                      width: "100vw",
                    },
                    "height",
                    "100vh"
                  );
                  b("#contact-pop")
                    .find(".contact-pop_box")
                    .css({ "border-radius": "inherit", border: "none" });
                  b("#contact-pop")
                    .find(".contact-pop_subbox")
                    .css({
                      height: "auto",
                      "border-radius": " 16px 16px 0px 0px",
                    });
                  b("#contact-pop")
                    .find(".contact-pop_title")
                    .css({
                      "padding-bottom": "12px",
                      "border-bottom": "1px solid rgba(220, 220, 220, 1)",
                    });
                  b("#contact-pop")
                    .find(".pop-item-QRcode")
                    .find("i")
                    .css({ opacity: 1 });
                  b("#contact-pop")
                    .find(".item-wx_img")
                    .css({ display: "none" });
                  var e =
                    window.innerHeight == document.documentElement.clientHeight
                      ? document.documentElement.clientHeight
                      : window.innerHeight;
                  if (0.7 < c.offsetHeight / e) {
                    b("#contact-pop")
                      .find(".contact-pop_subbox")
                      .addClass("pop-box-height");
                    c = parseInt(b(".contact-pop_title").css("height"));
                    var g = parseInt(
                      b(".contact-pop_title").css("margin-bottom")
                    );
                    b("#contact-pop")
                      .find(".contact-pop_subbox")
                      .css({ height: parseInt(0.7 * e) + "px" });
                    var h = parseInt(
                        b("#contact-pop")
                          .find(".contact-pop_subbox")
                          .css("height")
                      ),
                      l = h - c - g,
                      n = parseInt(b(".contact-pop_wrap_scroll").css("height"));
                    n > l
                      ? (b("#contact-pop")
                          .find(".contact-pop_subbox")
                          .css({ top: parseInt(e) - h + 2 + "px" }),
                        b("#contact-pop")
                          .find(".contact-pop_wrap")
                          .css({
                            height:
                              parseInt(0.7 * e) -
                              parseInt(b(".contact-pop_title").css("height")) -
                              parseInt(
                                b(".contact-pop_title").css("margin-bottom")
                              ) +
                              "px",
                          }))
                      : ((l = n),
                        b("#contact-pop")
                          .find(".contact-pop_subbox")
                          .css({ height: l + c + g + "px" }),
                        b("#contact-pop")
                          .find(".contact-pop_wrap")
                          .css({ height: l + "px" }),
                        b("#contact-pop")
                          .find(".contact-pop_subbox")
                          .css({
                            top:
                              parseInt(e) -
                              parseInt(b(".contact-pop_subbox").css("height")) +
                              2 +
                              "px",
                          }));
                  } else
                    b("#contact-pop")
                      .find(".contact-pop_subbox")
                      .css({
                        height:
                          parseInt(
                            b("#contact-pop")
                              .find(".contact-pop_title")
                              .css("height")
                          ) +
                          parseInt(
                            b("#contact-pop")
                              .find(".contact-pop_wrap")
                              .css("height")
                          ) +
                          "px",
                      }),
                      b("#contact-pop")
                        .find(".contact-pop_wrap")
                        .css({
                          "max-height": b("#contact-pop")
                            .find(".contact-pop_wrap")
                            .css("height"),
                        }),
                      b("#contact-pop")
                        .find(".contact-pop_subbox")
                        .css({
                          top:
                            parseInt(e) -
                            parseInt(
                              b("#contact-pop")
                                .find(".contact-pop_subbox")
                                .css("height")
                            ) +
                            2 +
                            "px",
                        });
                  this.$mainPop.css(d);
                  b("#contact-pop").find(".pop-item-QRcode").off();
                  b("#contact-pop")
                    .find(".pop-item-QRcode")
                    .on("click", function () {
                      b("#contact-pop").find(".item-wx_img").toggle();
                      a.toggleArrow(
                        b("#contact-pop").find(".pop-item-QRcode").find("i")
                      );
                    });
                } else
                  0.7 <
                    c.offsetHeight / document.documentElement.clientHeight &&
                    (b("#contact-pop")
                      .find(".contact-pop_subbox")
                      .addClass("pop-box-height"),
                    b("#contact-pop")
                      .find(".contact-pop_subbox")
                      .css({
                        height:
                          parseInt(
                            0.5 * document.documentElement.clientHeight
                          ) + "px",
                        "overflow-y": "auto",
                      }),
                    (d = document.createElement("style")),
                    (d.innerHTML =
                      "\n            /* \u8bbe\u7f6e\u6eda\u52a8\u6761\u5bbd\u5ea6 */\n            .pop-box-height::-webkit-scrollbar {\n              width: 6px;\n              height:80px;\n            }\n            /* \u8bbe\u7f6e\u6eda\u52a8\u6761\u80cc\u666f\u8272 */\n            .pop-box-height::-webkit-scrollbar-track {\n              background-color: transparent;\n            }\n            /* \u8bbe\u7f6e\u6eda\u52a8\u6761\u6ed1\u5757\u989c\u8272 */\n          .pop-box-height::-webkit-scrollbar-thumb {\n             background-color: rgba(0,0,0,0.1);\n             border-radius: 5px;\n            }\n           "),
                    document.head.appendChild(d));
              },
              closeNps: function () {
                var a = this.$nps;
                a.length &&
                  (a
                    .find(".nps-page.active")
                    .addClass("close-animate")
                    .removeClass("active"),
                  a.find(".nps-mask").removeClass("active"),
                  setTimeout(function () {
                    a.find(".nps-page").removeClass("close-animate");
                    a.find(".question-begin").hide();
                  }, 420));
              },
              pageNoScroll: function () {
                b("body").css("overflow", "hidden");
              },
              pageAllowScroll: function () {
                b("body").css("overflow", "auto");
              },
              isLandSize: function () {
                return 90 === window.orientation || -90 === window.orientation;
              },
              toggleArrow: function (a) {
                a.hasClass("item-status_rotate")
                  ? a.removeClass("item-status_rotate")
                  : a.addClass("item-status_rotate");
              },
              scrollDivView: function (a) {
                a.scrollIntoView();
              },
              clickOutside: function (a, c, d) {
                var e = this;
                this.isMobile()
                  ? document.addEventListener("click", function (c) {
                      c = b(c.target);
                      0 == c.closest(a).length &&
                        0 == c.closest(".messageContent").length &&
                        0 == c.closest(".iconImg").length &&
                        0 == c.closest(d).length &&
                        (e.closePop(), e.pageAllowScroll());
                    })
                  : b(document).click(function (d) {
                      d = b(d.target);
                      0 == d.closest(a).length &&
                        0 == d.closest(c).length &&
                        e.closePop();
                    });
              },
              openQrcodeDialog: function () {
                0 < b("#".concat("wx-qrcode-popup")).length
                  ? b("#".concat("wx-qrcode-popup"))[0].dialog.show()
                  : ((h.qrcodeDialog = new c.a(
                      { id: "wx-qrcode-popup", customClass: "middle-part" },
                      h.$wxImgBox.html()
                    )),
                    h.qrcodeDialog.show());
              },
              hideQrcodeDialog: function () {
                h.qrcodeDialog.hide();
              },
            }),
            e(h),
            this
          );
        }).prototype = d.fn;
        a.$contactPop = d;
      })(window);
      $contactPop(
        "#contact-pop",
        {
          $mainBtn: ".contact-pop_icon",
          $mainPop: ".contact-pop_box",
          $closeBtn: ".pop-close_btn",
          $phoneBox: ".pop-item_phone",
          $wxImgBox: ".item-wx_img",
          $nps: "#nps",
        },
        function (a) {
          a.$closeBtn.click(function () {
            a.closePop();
            a.isMobile() && a.pageAllowScroll();
          });
          a.$mainBtn.click(function () {
            a.closeNps();
            a.showPop();
            b("#contact-pop").find("#pop_icon").addClass("pop_icon_left");
            1023.98 >= b(window).width() &&
              (a.isMobile() || a.isLandSize()) &&
              a.pageNoScroll();
          });
          a.clickOutside(
            "#contact-pop .contact-pop_icon",
            "#contact-pop .contact-pop_box",
            "#contact-pop .contact-pop_subbox"
          );
          a.$phoneBox.each(function (c, d) {
            c = b(d).find(".phone-list p");
            var g = b(d).find(".phone-list");
            b(d).find(".item-status i");
            0 < b(d).find(".item-wx_img").length
              ? b(d).addClass("item-wx_status")
              : (1 <= c.length &&
                  a.isMobile() &&
                  b(d).find(".item-status i").css({ opacity: 1 }),
                a.isMobile() &&
                  g.find(".phone-number").click(function () {
                    window.location.href = "tel:".concat(
                      b(this).attr("data-herf")
                    );
                  }));
          });
        }
      );
    }).call(this, a(3));
  },
  638: function (c, d, a) {},
  639: function (c, d, a) {
    (function (b) {
      a(62);
      a(4);
      a(16);
      a(66);
      a(6);
      a(640);
      var c = a(190),
        d = a(0);
      b(function () {
        function a(a) {
          a
            ? (b(".cmp_cem").removeClass("cem-hide"),
              b(".cmp_cem .cem-pop_icon").hide())
            : b(".cmp_cem").remove();
          d.a.getSlidePopLocation();
        }
        function h() {
          x && F && !d.a.getFakeCookie(E) && d.a.setFakeCookie(E, !0, 3600 * F);
        }
        function g(a) {
          if (!d.a.getFakeCookie("cem-show-odds")) {
            if (
              0 ===
                (function (a) {
                  a = 100 * (a || 1);
                  return 1 === a
                    ? 1
                    : Math.floor(100 * Math.random()) < a
                    ? 1
                    : 0;
                })(A) ||
              "no" === p
            )
              return void (p = "no");
            d.a.setFakeCookie("cem-show-odds", !0, 3600 * G);
          }
          var c = b(".cmp_cem");
          if (!a || (!c.hasClass("cem-landaction-ani") && !L)) {
            var g;
            a = b("body").hasClass("show-cookie-tip")
              ? b(".cp-cookie-tip").outerHeight()
              : 0;
            c.find(".cem-landaction").css("bottom", parseInt(a) + 20);
            c.addClass("cem-landaction-ani");
            u &&
              ((g = ["#nps", "#contact-pop", ".cmp_cem", "#goback-top"]),
              b.each(g, function (a, c) {
                ".cmp_cem" !== c &&
                  (b(c).css({ transition: "all .5s" }),
                  setTimeout(function () {
                    b(c).addClass("hide-all-sideicon");
                  }, 0));
              }));
            I = setTimeout(function () {
              clearTimeout(I);
              L = !0;
              e();
            }, 1e4);
          }
        }
        function e(a) {
          L = !0;
          var c = b(".cmp_cem");
          setTimeout(function () {
            a || b(".cmp_cem .cem-pop_icon").show();
            c.removeClass("cem-landaction-ani");
          }, 0);
          var e = setTimeout(function () {
            var a;
            clearTimeout(e);
            d.a.getSlidePopLocation();
            u &&
              ((a = ["#nps", "#contact-pop", ".cmp_cem", "#goback-top"]),
              b.each(a, function (a, c) {
                ".cmp_cem" !== c &&
                  (b(c).removeClass("hide-all-sideicon"),
                  setTimeout(function () {
                    b(c).css({ transition: "all .5s" });
                  }, 0));
              }));
            setTimeout(function () {}, 350);
          }, 0);
        }
        function n(a, c) {
          b(".cmp_cem .cms-mask").addClass("hide");
          b(".cmp_cem").removeClass("maskShow");
          a.hasClass("cem-landaction") &&
            (a.addClass("notransitiontime"), e(c));
        }
        function r() {
          return parseInt(
            (document.documentElement.scrollTop /
              (document.documentElement.scrollHeight - window.innerHeight)) *
              100
          );
        }
        if (!(0 >= b(".cmp_cem").length)) {
          var p,
            u = 650 > window.innerWidth,
            m = b(".cmp_cem").attr("jdk-url"),
            t = b(".cmp_cem").attr("cem-id"),
            z = b(".cmp_cem").attr("cem-url"),
            x = b(".cmp_cem").attr("cem-rules"),
            A = b(".cmp_cem").attr("cem-show-odds"),
            B = "cem-finish-" + t,
            G = b(".cmp_cem").attr("finish-time") || 2160,
            E = "cem-close-" + t,
            F = b(".cmp_cem").attr("close-time"),
            I = null,
            L = !1;
          z &&
            ((m && (c.b.src = m), d.a.getFakeCookie(B))
              ? a()
              : d.a.getFakeCookie(E)
              ? (b(".cmp_cem").removeClass("cem-hide"),
                d.a.getSlidePopLocation())
              : (u ||
                  ((m =
                    parseInt(b(".cmp_cem").outerWidth()) +
                    parseInt(b(".cmp_cem").css("right")) +
                    16),
                  b(".cmp_cem .cem-landaction").css("right", m)),
                a("icon"),
                (function () {
                  if (!x) return void g("once");
                  var a = [
                    { second: 5, rule: "view-5s" },
                    { second: 10, rule: "view-10s" },
                    { second: 15, rule: "view-15s" },
                    { second: 20, rule: "view-20s" },
                    { second: 25, rule: "view-25s" },
                    { second: 30, rule: "view-30s" },
                  ].filter(function (a) {
                    return -1 < x.indexOf(a.rule);
                  });
                  x &&
                    0 < a.length &&
                    ((c = function () {
                      g("once");
                    }),
                    (e = 1e3 * a[0].second),
                    function () {
                      var a = this,
                        b = arguments,
                        d = setTimeout(function () {
                          clearTimeout(d);
                          c.apply(a, b);
                        }, e);
                    })();
                  var c, e;
                  x &&
                    -1 < x.indexOf("view-75%") &&
                    ((h = 0),
                    (l = 0),
                    (m = 0),
                    (n = 0),
                    b(window).scroll(
                      d.a.debounce(function (a) {
                        h = a = r();
                        m = b(this).scrollTop();
                        n <= m
                          ? ((l = a), 75 < a && g("once"))
                          : 25 < l - h && g("once");
                        setTimeout(function () {
                          n = m;
                        }, 0);
                      }, 20)
                    ));
                  var h,
                    l,
                    m,
                    n,
                    p = [
                      { deep: 25, rule: "view-25%" },
                      { deep: 50, rule: "view-50%" },
                    ].filter(function (a) {
                      return -1 < x.indexOf(a.rule);
                    });
                  x &&
                    0 < p.length &&
                    b(window).scroll(
                      d.a.debounce(function (a) {
                        r() >= p[0].deep && g("once");
                      })
                    );
                })()));
          b(".cmp_cem .cem-pop_icon,.cmp_cem .cem-landaction").click(
            function () {
              var a = b(this);
              clearTimeout(I);
              b(".cmp_cem .cms-mask").removeClass("hide");
              b(".cmp_cem").addClass("maskShow");
              Object(c.c)({
                surveyUrl: z,
                elementId: "cmp_cem",
                surveyConfig: {
                  cookieName: B,
                  cookieExpireSeconds: G,
                  closeCem: function () {
                    h();
                    n(a);
                  },
                  finishCem: function () {
                    n(a, "finished");
                    setTimeout(function () {
                      b(".cmp_cem").remove();
                      d.a.getSlidePopLocation();
                    }, 20);
                  },
                },
              });
            }
          );
          b(".cmp_cem .landaction-close").click(function (a) {
            a.stopPropagation();
            h();
            clearTimeout(I);
            e();
          });
          b(".cmp_cem .cms-mask").click(function () {
            Object(c.a)();
          });
        }
      });
    }).call(this, a(3));
  },
  640: function (c, d, a) {},
  641: function (c, d, a) {
    (function (b) {
      a(62);
      a(16);
      a(7);
      a(20);
      a(31);
      a(642);
      var c = a(61),
        d = a(0);
      a(643);
      b(function () {
        var a = b(".cmp_third-party-link-popup");
        if (!(0 >= a.length || d.a.getFakeCookie("third-party-link-cookie"))) {
          var h,
            g = 24 * a.data("time") || 2160,
            e = b(".third-party-link-popup-html").attr("white-list");
          b("a[href^\x3d'http:'], a[href^\x3d'https:']").on(
            "click",
            function (a) {
              if (!d.a.getFakeCookie("third-party-link-cookie")) {
                var l = b(this).attr("href") || "",
                  n = b(this).attr("target") || "_self";
                (function (a) {
                  return e
                    ? 0 <
                        e
                          .trim()
                          .split(",")
                          .filter(function (b, c) {
                            return -1 < a.indexOf(b);
                          }).length
                    : !1;
                })(l) ||
                  (a.preventDefault(),
                  (function (a, e) {
                    b(
                      "".concat(".cmp_third-party-link-popup", " .third-link")
                    ).html(a);
                    b(
                      "".concat(".cmp_third-party-link-popup", " .remind")
                    ).removeClass("checked");
                    0 < b("#".concat("third-link-popup")).length
                      ? ((b(
                          "#".concat("third-link-popup")
                        )[0].dialog.containerHtml = b(
                          ".third-party-link-popup-html"
                        ).html()),
                        b("#".concat("third-link-popup"))[0].dialog.show())
                      : (h = new c.a(
                          { id: "third-link-popup", clearHtml: !0 },
                          b(".third-party-link-popup-html").html()
                        )).show();
                    b(document).off(
                      "click",
                      "".concat(".cmp_third-party-link-popup", " .remind")
                    );
                    b(document).on(
                      "click",
                      "".concat(".cmp_third-party-link-popup", " .remind"),
                      function () {
                        b(this).toggleClass("checked");
                      }
                    );
                    b(document).off(
                      "click",
                      "".concat(".cmp_third-party-link-popup", " .go-btn")
                    );
                    b(document).on(
                      "click",
                      "".concat(".cmp_third-party-link-popup", " .go-btn"),
                      function () {
                        h.hide();
                        b(
                          "".concat(".cmp_third-party-link-popup", " .remind")
                        ).hasClass("checked") &&
                          (d.a.getFakeCookie("third-party-link-cookie") ||
                            d.a.setFakeCookie(
                              "third-party-link-cookie",
                              !0,
                              3600 * g
                            ));
                        window.open(a, e);
                      }
                    );
                    b(document).off(
                      "click",
                      "".concat(".cmp_third-party-link-popup", " .cancel-btn")
                    );
                    b(document).on(
                      "click",
                      "".concat(".cmp_third-party-link-popup", " .cancel-btn"),
                      function () {
                        h.hide();
                      }
                    );
                  })(l, n));
              }
            }
          );
        }
      });
    }).call(this, a(3));
  },
  642: function (c, d, a) {},
  643: function (c, d, a) {
    c = a(1);
    c = a.n(c);
    d = a(2);
    a = a.n(d);
    c = new c.a({
      id: "icon-succese",
      use: "icon-succese-usage",
      viewBox: "0 0 20 20",
      content:
        '\x3csymbol fill\x3d"none" xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 20 20" id\x3d"icon-succese"\x3e\x3ccircle cx\x3d"10" cy\x3d"10" r\x3d"7.5" fill\x3d"#2EC84E" /\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M8.804 11.83l4.958-4.957.774.773-5.345 5.345a.547.547 0 01-.773 0l-2.676-2.676.773-.774 2.29 2.29z" fill\x3d"#fff" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
  },
  644: function (c, d, a) {
    a(645);
  },
  645: function (c, d, a) {
    (function (b) {
      var c = a(8);
      a.n(c);
      c = a(4);
      a.n(c);
      c = a(49);
      a.n(c);
      c = a(41);
      a.n(c);
      c = a(74);
      a.n(c);
      c = a(7);
      a.n(c);
      c = a(23);
      a.n(c);
      c = a(6);
      a.n(c);
      a(646);
      c = a(32);
      a.n(c);
      b(function () {
        function a() {
          if (768 >= b(window).width()) {
            var a = b(
                ".cmp__sms-global-subscribe-container .sms-box .sms-wrap .clause .check-clause p"
              ).text(),
              g = b(
                ".cmp__sms-global-subscribe-container .clause-number"
              ).val(),
              h = b(".cmp__sms-global-subscribe-container .clause-text").val();
            a.length > g &&
              (b(
                ".cmp__sms-global-subscribe-container .sms-box .sms-wrap .clause .check-clause p"
              ).html(
                ""
                  .concat(a.slice(0, Number(g)), "...\x3cspan\x3e")
                  .concat(h, "\x3cspan\x3e")
              ),
              b(
                ".cmp__sms-global-subscribe-container .sms-box .sms-wrap .clause .check-clause p span"
              ).click(function () {
                b(
                  ".cmp__sms-global-subscribe-container .sms-box .sms-wrap .clause .check-clause p"
                ).html(a);
              }));
          }
          B.focus(function () {
            A.addClass("cursor-select");
          });
          B.blur(function () {
            A.removeClass("cursor-select");
          });
          B.on(
            "input propertychange",
            c(
              function () {
                d();
              },
              function () {
                A.removeClass("submit-succese");
              }
            )
          );
          E.click(function () {
            M ||
              (B.val(""),
              b(".submit-success-text").hide(),
              b(".submit-error-text").hide(),
              A.removeClass("cursor-entry"),
              p());
          });
          F.click(function () {
            b(this).toggleClass("check-pointer-select");
            d();
          });
          G.click(function () {
            if (M) {
              var a = S.encrypt(I + B.val());
              a = {
                activityCode: b(
                  ".cmp__sms-global-subscribe-container .activity-code"
                ).val(),
                storeViewCode: opsiteBase.UIUtils.getCountryCode(),
                formContext: { phone: a },
              };
              e(
                ma,
                a,
                function (a, c, d) {
                  200 == d.status && null == a.errCode
                    ? ((M = !1),
                      b(".cmp__sms-global-subscribe-container").hasClass(
                        "style-2"
                      )
                        ? (b(".submit-success-text").show(),
                          b(".submit-error-text").hide())
                        : (L.addClass("show-popbox"),
                          L.removeClass("error-popbox"),
                          L.find(".pop-des p").text(
                            b(
                              ".cmp__sms-global-subscribe-container .subscribe-success-text"
                            ).val()
                          )),
                      A.removeClass(
                        "cursor-entry cursor-succese cursor-error cursor-select submit-succese"
                      ),
                      B.val(""))
                    : b(".cmp__sms-global-subscribe-container").hasClass(
                        "style-2"
                      )
                    ? (b(".submit-success-text").hide(),
                      b(".submit-error-text").show())
                    : (L.addClass("show-popbox error-popbox"),
                      L.find(".pop-des p").text(
                        b(
                          ".cmp__sms-global-subscribe-container .subscribe-error-text"
                        ).val()
                      ));
                },
                function (a) {
                  b(".cmp__sms-global-subscribe-container").hasClass("style-2")
                    ? (b(".submit-success-text").hide(),
                      b(".submit-error-text").show())
                    : (L.addClass("show-popbox error-popbox"),
                      L.find(".pop-des p").text(
                        b(
                          ".cmp__sms-global-subscribe-container .subscribe-error-text"
                        ).val()
                      ));
                }
              );
            }
          });
        }
        function c(a, b, c) {
          var d,
            e = c || 700;
          return function () {
            var c = this,
              g = arguments;
            b.apply(c, g);
            d && clearTimeout(d);
            d = setTimeout(function () {
              d = null;
              a.apply(c, g);
            }, e);
          };
        }
        function d() {
          R
            ? g()
            : b.getScript(
                "https://www.oppo.com/content/dam/statics/js/jsencrypt.min.js",
                function () {
                  R = !0;
                  (S = new JSEncrypt()).setPublicKey(
                    "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDDzf0t2PQSjHMUT/dtSNNyWc5i auXiU0RenNpEvpeR4s5Kv10pQ9CdidZCYtbLwV/2ErIZ/Giy4Jcxj0GI9pzURWp1 d292Qck0epBSlNtCEhc1OOdM26O16k+kOWkt5F7yvNCUjRpCVrESCMTSJsrXX0nm vAkEvkEnM8s6d0FY7QIDAQAB"
                  );
                  g();
                }
              );
        }
        function g() {
          if (0 >= F.length) {
            var a = B.val();
            0 < a.length
              ? (A.addClass("cursor-entry"),
                n(a)
                  ? (v(), A.addClass("submit-succese"), p(), (M = !0))
                  : (r(), m(), t(), (M = !1)))
              : (A.removeClass("cursor-entry"), p(), m(), t(), (M = !1));
          } else {
            a = F.hasClass("check-pointer-select");
            var b = B.val();
            0 < b.length
              ? (A.addClass("cursor-entry"),
                n(b) && a && (v(), A.addClass("submit-succese"), p(), (M = !0)),
                n(b) && !a && (p(), t(), v(), (M = !1)),
                !n(b) && a && (r(), t(), m(), (M = !1)),
                n(b) || a || (r(), t(), m(), (M = !1)))
              : (A.removeClass("cursor-entry"), p(), t(), m(), (M = !1));
          }
        }
        function e(a, c, d, e) {
          a = { clientId: Fa, method: a, biz_content: JSON.stringify(c) };
          b.ajax({
            url: ea,
            timeout: 3e3,
            type: "POST",
            crossDomain: !0,
            xhrFields: { withCredentials: !0 },
            data: a,
            success: d,
            error: e,
          });
        }
        function n(a) {
          var c = b(
              ".cmp__sms-global-subscribe-container .verification-rules"
            ).val(),
            d = new RegExp(/^\d{9,12}$/);
          return (
            null != c && null != c && "" != c && (d = new RegExp(eval(c))),
            !("" == a || !d.test(a))
          );
        }
        function r() {
          A.addClass("cursor-error");
          b(
            ".cmp__sms-global-subscribe-container .sms-box .inp-box .error-text"
          ).slideDown();
          b(".submit-success-text").hide();
          b(".submit-error-text").hide();
        }
        function p() {
          A.removeClass("cursor-error");
          b(
            ".cmp__sms-global-subscribe-container .sms-box .inp-box .error-text"
          ).slideUp();
        }
        function v() {
          A.addClass("cursor-succese");
        }
        function m() {
          A.removeClass("cursor-succese");
        }
        function t() {
          A.removeClass("submit-succese");
        }
        if (0 !== b(".cmp__sms-global-subscribe-container").length) {
          var z = Number(b(".sms-check-show").val()),
            x = b(".cmp__sms-global-subscribe-container"),
            A = b(
              ".cmp__sms-global-subscribe-container .sms-box .sms-wrap .inp-box"
            ),
            B = b(
              ".cmp__sms-global-subscribe-container .sms-box .inp-area-box input"
            ),
            G = b(
              ".cmp__sms-global-subscribe-container .sms-box .inp-box .btn-box a"
            ),
            E = b(
              ".cmp__sms-global-subscribe-container .sms-box .sms-wrap .inp-box .inp-area-box .i-tip-icon"
            ),
            F = b(
              ".cmp__sms-global-subscribe-container .sms-box .sms-wrap .clause .check-clause .check-pointer"
            ),
            I = b(".cmp__sms-global-subscribe-container .sms-merge-reg").val(),
            L = b(".sms-subscribe-pop"),
            ea =
              b(
                ".cmp__sms-global-subscribe-container .domain_host_levin"
              ).val() || "https://opsg-gateway-in.oppo.com/v2/api/router",
            Fa =
              b(".cmp__sms-global-subscribe-container .client-id").val() ||
              "95e4ff8197ac4a0ea6d65f419d7a80ae",
            ma = "levin.signup.submitSignup",
            M = !1,
            S = null,
            R = !1;
          z
            ? UIUtils.isSignIn().then(function (b) {
                1 == b.code ? a() : x.hide();
              })
            : a();
          b(
            ".cmp__sms-global-subscribe-container .sms-subscribe-pop .pop-btn a"
          ).click(function () {
            b(".sms-subscribe-pop").removeClass("show-popbox");
          });
        }
      });
    }).call(this, a(3));
  },
  646: function (c, d, a) {},
  647: function (c, d, a) {
    (function (b) {
      a(41);
      b(document).ready(function () {
        function a(a, b) {
          ga4Event({
            event_name: "video_progress",
            module: "Video Popup",
            video_title: a,
            video_percent: b,
          });
        }
        0 !== b(".cmp__popup-video").length &&
          b(".cmp__popup-video").each(function (c, d) {
            var h = b(d).attr("data-id"),
              g = b(d).attr("data-type"),
              e = "dark" == b(d).attr("data-theme"),
              l = b(d).attr("data-link"),
              r = b(d).attr("data-poster"),
              p = b(d).attr("data-ga");
            b('[href$\x3d"#video-popup::' + h + '"]').on("click", function (b) {
              if (
                (b.preventDefault(),
                window.opsiteBase.UIUtils.playPopupVideo(h, g, l, e, r),
                "no" != p && p && "iframe" != g)
              ) {
                var c = document.querySelector("#".concat(h, " video")),
                  d = !0,
                  n = !0,
                  u = !0,
                  v = !1,
                  y = !1;
                c.addEventListener("timeupdate", function () {
                  var b = Math.floor(100 * Number(c.currentTime / c.duration));
                  25 <= b &&
                    50 > b &&
                    d &&
                    (a(h, "25"), (d = !1), (n = !0), (u = !0));
                  50 <= b &&
                    75 > b &&
                    n &&
                    (a(h, "50"), (d = !0), (n = !1), (u = !0));
                  75 <= b &&
                    100 > b &&
                    u &&
                    (a(h, "75"), (d = !0), (n = !0), (u = !1));
                  100 == b &&
                    (a(h, "100"), (d = !0), (n = !0), (u = !0), (y = !0));
                });
                c.addEventListener("play", function () {
                  v &&
                    (y && 0 == c.currentTime ? a(h, "Replay") : a(h, "Play"));
                  v = !0;
                });
                c.addEventListener("pause", function () {
                  a(h, "Pause");
                });
              }
            });
          });
      });
    }).call(this, a(3));
  },
  648: function (c, d, a) {
    (function (b, c) {
      a(8);
      a(4);
      a(18);
      a(41);
      a(7);
      a(24);
      a(19);
      a(649);
      var d = a(50);
      a(0);
      b.OP_VUE_REGISTRY.set("sample-image-slide", {
        data: function () {
          return {
            listData: {},
            prevDistance: 0,
            boxWidth: 0,
            percentage: 20,
            isXs: 650 >= document.body.clientWidth,
            isPad: 1024 >= document.body.clientWidth,
            isArSite: c("html").is(".lang-ar"),
          };
        },
        methods: {
          restart: function (a, b, c) {
            var d = this,
              g = b.changeShow ? 1 : 0;
            b.playFlag = !this.isXs;
            this.$refs[a][g].currentTime = 0;
            this.$refs[a][g].play();
            this.$refs[a][g].addEventListener("pause", function v() {
              b.playFlag = !0;
              d.$refs[a][g].removeEventListener("pause", v);
            });
            c =
              c.currentTarget.getElementsByClassName("ft-body-3")[0].innerText;
            var h = Number(a.replace("video", "")) + 1;
            ga4Event({
              event_name: "product_info_interaction",
              module: this.listData.title,
              action: "button click",
              button_name:
                "col-1" == this.listData.type
                  ? c
                  : "img".concat(h, "+").concat(c),
            });
          },
          switchChange: function (a, b, c) {
            b.isVideo &&
              ((b.playFlag = !0),
              b.changeShow
                ? this.$refs[a][1].pause()
                : this.$refs[a][0].pause());
            OP_vue.set(b, "changeShow", !b.changeShow);
            b = c.currentTarget.getElementsByClassName("active")[0].innerText;
            a = Number(a.replace("video", "")) + 1;
            ga4Event({
              event_name: "product_info_interaction",
              module: this.listData.title,
              action: "button click",
              button_name:
                "col-1" == this.listData.type
                  ? b
                  : "img".concat(a, "+").concat(b),
            });
          },
          prev: function (a) {
            this.prevDistance = a
              ? this.isPad
                ? Math.abs(
                    c(this.$refs.proofSlideMultiple).prop("scrollLeft")
                  ) - 322
                : this.prevDistance - 322
              : this.isPad
              ? Math.abs(c(this.$refs.proofSlideMultiple).prop("scrollLeft")) +
                322
              : this.prevDistance + 322;
            this.percentage = (this.prevDistance / this.boxWidth) * 80 + 20;
            this.prevDistance >= this.boxWidth
              ? ((this.prevDistance = this.boxWidth), (this.percentage = 100))
              : 0 >= this.prevDistance &&
                ((this.prevDistance = 0), (this.percentage = 20));
            a = this.prevDistance;
            this.isArSite && (a = -1 * this.prevDistance);
            this.isPad
              ? c(this.$refs.proofSlideMultiple).scrollLeft(a)
              : c(this.$refs.proofSlideMultiple).css({
                  transform: "translateX(" + -a + "px)",
                });
          },
          scrollChange: function () {
            this.isPad &&
              (this.percentage =
                (Math.abs(c(this.$refs.proofSlideMultiple).prop("scrollLeft")) /
                  this.boxWidth) *
                  80 +
                20);
          },
          getBoxWidth: function () {
            this.boxWidth =
              c(this.$refs.proofSlideMultiple).prop("scrollWidth") -
              document.body.clientWidth;
          },
          initBtn: function () {
            Object(d.a)() && c(".sample-image-slide .restart").remove();
          },
        },
        mounted: function () {
          this.isArSite && c(".sample-image-slide").attr("dir", "rtl");
          this.listData = JSON.parse(this.$refs.jsonConfig.innerText);
          this.listData.items.forEach(function (a) {
            a.isVertical = JSON.parse(a.isVertical);
            a.isVideo = JSON.parse(a.isVideo);
            a.changeShow = JSON.parse(a.changeShow);
            a.playFlag = JSON.parse(a.playFlag);
          });
          this.$nextTick(function () {
            if (
              (this.initBtn(),
              this.getBoxWidth(),
              0 < c(".slide-2-right .img-box-h").length)
            ) {
              var a =
                c(".img-box-h").last().find("img")[0] ||
                c(".img-box-h").last().find("video")[0];
              a.onload = this.getBoxWidth;
              a.ondurationchange = this.getBoxWidth;
            }
            this.$refs.proofSlideMultiple &&
              this.$refs.proofSlideMultiple.addEventListener(
                "scroll",
                this.scrollChange,
                !0
              );
          });
        },
      });
    }).call(this, a(34), a(3));
  },
  649: function (c, d, a) {},
  65: function (c, d, a) {
    (function (a, c) {
      function b(a) {
        return (
          "string" == typeof a ||
          "number" == typeof a ||
          "symbol" == typeof a ||
          "boolean" == typeof a
        );
      }
      function l(a) {
        return null !== a && "object" == typeof a;
      }
      function h(a) {
        return "[object Object]" === Mb.call(a);
      }
      function g(a) {
        var b = parseFloat(String(a));
        return 0 <= b && Math.floor(b) === b && isFinite(a);
      }
      function e(a) {
        return (
          null != a &&
          "function" == typeof a.then &&
          "function" == typeof a.catch
        );
      }
      function n(a) {
        return null == a
          ? ""
          : Array.isArray(a) || (h(a) && a.toString === Mb)
          ? JSON.stringify(a, null, 2)
          : String(a);
      }
      function r(a) {
        var b = parseFloat(a);
        return isNaN(b) ? a : b;
      }
      function p(a, b) {
        var f = Object.create(null);
        a = a.split(",");
        for (var c = 0; c < a.length; c++) f[a[c]] = !0;
        return b
          ? function (a) {
              return f[a.toLowerCase()];
            }
          : function (a) {
              return f[a];
            };
      }
      function v(a, b) {
        if (a.length && ((b = a.indexOf(b)), -1 < b)) return a.splice(b, 1);
      }
      function m(a, b) {
        return lf.call(a, b);
      }
      function t(a) {
        var b = Object.create(null);
        return function (f) {
          return b[f] || (b[f] = a(f));
        };
      }
      function z(a, b) {
        b = b || 0;
        for (var f = a.length - b, c = Array(f); f--; ) c[f] = a[f + b];
        return c;
      }
      function x(a, b) {
        for (var f in b) a[f] = b[f];
        return a;
      }
      function A(a) {
        for (var b = {}, f = 0; f < a.length; f++) a[f] && x(b, a[f]);
        return b;
      }
      function B(a, b, c) {}
      function G(a, b) {
        if (a === b) return !0;
        var f = l(a),
          c = l(b);
        if (!f || !c) return !f && !c && String(a) === String(b);
        try {
          var k = Array.isArray(a),
            d = Array.isArray(b);
          if (k && d)
            return (
              a.length === b.length &&
              a.every(function (a, f) {
                return G(a, b[f]);
              })
            );
          if (a instanceof Date && b instanceof Date)
            return a.getTime() === b.getTime();
          if (k || d) return !1;
          var e = Object.keys(a),
            g = Object.keys(b);
          return (
            e.length === g.length &&
            e.every(function (f) {
              return G(a[f], b[f]);
            })
          );
        } catch (Ba) {
          return !1;
        }
      }
      function E(a, b) {
        for (var f = 0; f < a.length; f++) if (G(a[f], b)) return f;
        return -1;
      }
      function F(a) {
        var b = !1;
        return function () {
          b || ((b = !0), a.apply(this, arguments));
        };
      }
      function I(a, b, c, w) {
        Object.defineProperty(a, b, {
          value: c,
          enumerable: !!w,
          writable: !0,
          configurable: !0,
        });
      }
      function L(a) {
        return "function" == typeof a && /native code/.test(a.toString());
      }
      function ea(a) {
        qb.push(a);
        Y.target = a;
      }
      function Fa() {
        qb.pop();
        Y.target = qb[qb.length - 1];
      }
      function ma(a) {
        return new T(void 0, void 0, void 0, String(a));
      }
      function M(a) {
        var b = new T(
          a.tag,
          a.data,
          a.children && a.children.slice(),
          a.text,
          a.elm,
          a.context,
          a.componentOptions,
          a.asyncFactory
        );
        return (
          (b.ns = a.ns),
          (b.isStatic = a.isStatic),
          (b.key = a.key),
          (b.isComment = a.isComment),
          (b.fnContext = a.fnContext),
          (b.fnOptions = a.fnOptions),
          (b.fnScopeId = a.fnScopeId),
          (b.asyncMeta = a.asyncMeta),
          (b.isCloned = !0),
          b
        );
      }
      function S(a, b) {
        var c;
        if (l(a) && !(a instanceof T))
          return (
            m(a, "__ob__") && a.__ob__ instanceof rb
              ? (c = a.__ob__)
              : oa &&
                !fb() &&
                (Array.isArray(a) || h(a)) &&
                Object.isExtensible(a) &&
                !a._isVue &&
                (c = new rb(a)),
            b && c && c.vmCount++,
            c
          );
      }
      function R(a, b, c, w, d) {
        var f = new Y(),
          k = Object.getOwnPropertyDescriptor(a, b);
        if (!k || !1 !== k.configurable) {
          var q = k && k.get,
            e = k && k.set;
          (q && !e) || 2 !== arguments.length || (c = a[b]);
          var D = !d && S(c);
          Object.defineProperty(a, b, {
            enumerable: !0,
            configurable: !0,
            get: function () {
              var b = q ? q.call(a) : c;
              return (
                Y.target &&
                  (f.depend(), D && (D.dep.depend(), Array.isArray(b) && H(b))),
                b
              );
            },
            set: function (b) {
              var k = q ? q.call(a) : c;
              b === k ||
                (b != b && k != k) ||
                (q && !e) ||
                (e ? e.call(a, b) : (c = b), (D = !d && S(b)), f.notify());
            },
          });
        }
      }
      function Ga(a, b, c) {
        if (Array.isArray(a) && g(b))
          return (a.length = Math.max(a.length, b)), a.splice(b, 1, c), c;
        if (b in a && !(b in Object.prototype)) return (a[b] = c), c;
        var f = a.__ob__;
        return a._isVue || (f && f.vmCount)
          ? c
          : f
          ? (R(f.value, b, c), f.dep.notify(), c)
          : ((a[b] = c), c);
      }
      function na(a, b) {
        if (Array.isArray(a) && g(b)) a.splice(b, 1);
        else {
          var c = a.__ob__;
          a._isVue ||
            (c && c.vmCount) ||
            (m(a, b) && (delete a[b], c && c.dep.notify()));
        }
      }
      function H(a) {
        for (var b = void 0, c = 0, f = a.length; c < f; c++)
          (b = a[c]) && b.__ob__ && b.__ob__.dep.depend(),
            Array.isArray(b) && H(b);
      }
      function fa(a, b) {
        if (!b) return a;
        for (
          var c, f, k, d = sb ? Reflect.ownKeys(b) : Object.keys(b), e = 0;
          e < d.length;
          e++
        )
          "__ob__" !== (c = d[e]) &&
            ((f = a[c]),
            (k = b[c]),
            m(a, c) ? f !== k && h(f) && h(k) && fa(f, k) : Ga(a, c, k));
        return a;
      }
      function ba(a, b, c) {
        return c
          ? function () {
              var f = "function" == typeof b ? b.call(c, c) : b,
                k = "function" == typeof a ? a.call(c, c) : a;
              return f ? fa(f, k) : k;
            }
          : b
          ? a
            ? function () {
                return fa(
                  "function" == typeof b ? b.call(this, this) : b,
                  "function" == typeof a ? a.call(this, this) : a
                );
              }
            : b
          : a;
      }
      function Ha(a, b) {
        if ((a = b ? (a ? a.concat(b) : Array.isArray(b) ? b : [b]) : a)) {
          b = [];
          for (var c = 0; c < a.length; c++)
            -1 === b.indexOf(a[c]) && b.push(a[c]);
          a = b;
        }
        return a;
      }
      function ra(a, b, c, w) {
        a = Object.create(a || null);
        return b ? x(a, b) : a;
      }
      function J(a, b, c) {
        function f(f) {
          e[f] = (pa[f] || nf)(a[f], b[f], c, f);
        }
        if (
          ("function" == typeof b && (b = b.options),
          (function (a) {
            var b = a.props;
            if (b) {
              var c,
                f,
                k = {};
              if (Array.isArray(b))
                for (c = b.length; c--; )
                  "string" == typeof (f = b[c]) && (k[Z(f)] = { type: null });
              else if (h(b))
                for (c in b) (f = b[c]), (k[Z(c)] = h(f) ? f : { type: f });
              a.props = k;
            }
          })(b),
          (function (a) {
            var b = a.inject;
            if (b)
              if (((a = a.inject = {}), Array.isArray(b)))
                for (var c = 0; c < b.length; c++) a[b[c]] = { from: b[c] };
              else if (h(b))
                for (c in b) {
                  var f = b[c];
                  a[c] = h(f) ? x({ from: c }, f) : { from: f };
                }
          })(b),
          (function (a) {
            if ((a = a.directives))
              for (var b in a) {
                var c = a[b];
                "function" == typeof c && (a[b] = { bind: c, update: c });
              }
          })(b),
          !b._base && (b.extends && (a = J(a, b.extends, c)), b.mixins))
        )
          for (var k = 0, q = b.mixins.length; k < q; k++)
            a = J(a, b.mixins[k], c);
        var d,
          e = {};
        for (d in a) f(d);
        for (d in b) m(a, d) || f(d);
        return e;
      }
      function Va(a, b, c, w) {
        if ("string" == typeof c) {
          a = a[b];
          if (m(a, c)) return a[c];
          b = Z(c);
          if (m(a, b)) return a[b];
          w = of(b);
          return m(a, w) ? a[w] : a[c] || a[b] || a[w];
        }
      }
      function Wa(a, b, c, w) {
        b = b[a];
        var f = !m(c, a);
        c = c[a];
        var k = Ia(Boolean, b.type);
        if (-1 < k)
          if (f && !m(b, "default")) c = !1;
          else if ("" === c || c === Ya(a))
            (f = Ia(String, b.type)), (0 > f || k < f) && (c = !0);
        void 0 === c &&
          (m(b, "default")
            ? ((c = b.default),
              0,
              (c =
                w &&
                w.$options.propsData &&
                void 0 === w.$options.propsData[a] &&
                void 0 !== w._props[a]
                  ? w._props[a]
                  : "function" == typeof c && "Function" !== qa(b.type)
                  ? c.call(w)
                  : c))
            : (c = void 0),
          (a = oa),
          (oa = !0),
          S(c),
          (oa = a));
        return c;
      }
      function qa(a) {
        return (a = a && a.toString().match(/^\s*function (\w+)/)) ? a[1] : "";
      }
      function Ia(a, b) {
        if (!Array.isArray(b)) return qa(b) === qa(a) ? 0 : -1;
        for (var c = 0, f = b.length; c < f; c++) {
          var k = a;
          if (qa(b[c]) === qa(k)) return c;
        }
        return -1;
      }
      function X(a, b, c) {
        if (b)
          for (var f = b; (f = f.$parent); ) {
            var k = f.$options.errorCaptured;
            if (k)
              for (var q = 0; q < k.length; q++)
                try {
                  if (!1 === k[q].call(f, a, b, c)) return;
                } catch (ha) {
                  W(ha, f, "errorCaptured hook");
                }
          }
        W(a, b, c);
      }
      function Ja(a, b, c, w, d) {
        var f;
        try {
          (f = c ? a.apply(b, c) : a.call(b)) &&
            !f._isVue &&
            e(f) &&
            f.catch(function (a) {
              return X(a, w, d + " (Promise/async)");
            });
        } catch (ha) {
          X(ha, w, d);
        }
        return f;
      }
      function W(a, b, c) {
        if (aa.errorHandler)
          try {
            return aa.errorHandler.call(null, a, b, c);
          } catch (w) {
            if ((!Q && !tb) || "undefined" == typeof console) throw w;
          }
        if ((!Q && !tb) || "undefined" == typeof console) throw a;
      }
      function La() {
        Nb = !1;
        for (var a = Ob.slice(0), b = (Ob.length = 0); b < a.length; b++)
          a[b]();
      }
      function Xa(a, b) {
        var c;
        if (
          (Ob.push(function () {
            if (a)
              try {
                a.call(b);
              } catch (w) {
                X(w, b, "nextTick");
              }
            else c && c(b);
          }),
          Nb || ((Nb = !0), Pb()),
          !a && "undefined" != typeof Promise)
        )
          return new Promise(function (a) {
            c = a;
          });
      }
      function O(a) {
        Aa(a, $c);
        $c.clear();
      }
      function Aa(a, b) {
        var c = Array.isArray(a);
        if (!((!c && !l(a)) || Object.isFrozen(a) || a instanceof T)) {
          if (a.__ob__) {
            var f = a.__ob__.dep.id;
            if (b.has(f)) return;
            b.add(f);
          }
          if (c) for (c = a.length; c--; ) Aa(a[c], b);
          else for (c = (f = Object.keys(a)).length; c--; ) Aa(a[f[c]], b);
        }
      }
      function Ka(a, b) {
        function c() {
          var a = arguments,
            f = c.fns;
          if (!Array.isArray(f))
            return Ja(f, null, arguments, b, "v-on handler");
          f = f.slice();
          for (var k = 0; k < f.length; k++)
            Ja(f[k], null, a, b, "v-on handler");
        }
        return (c.fns = a), c;
      }
      function ca(a, b, c, w, d, e) {
        var f;
        for (f in a) {
          var k = a[f];
          var q = b[f];
          var D = ad(f);
          null == k ||
            (null == q
              ? (null == k.fns && (k = a[f] = Ka(k, e)),
                !0 === D.once && (k = a[f] = d(D.name, k, D.capture)),
                c(D.name, k, D.capture, D.passive, D.params))
              : k !== q && ((q.fns = k), (a[f] = q)));
        }
        for (f in b) null == a[f] && w((D = ad(f)).name, b[f], D.capture);
      }
      function za(a, b, c) {
        function f() {
          c.apply(this, arguments);
          v(k.fns, f);
        }
        var k;
        a instanceof T && (a = a.data.hook || (a.data.hook = {}));
        var q = a[b];
        null == q
          ? (k = Ka([f]))
          : null != q.fns && !0 === q.merged
          ? (k = q).fns.push(f)
          : (k = Ka([q, f]));
        k.merged = !0;
        a[b] = k;
      }
      function ob(a, b, c, w, d) {
        if (null != b) {
          if (m(b, c)) return (a[c] = b[c]), d || delete b[c], !0;
          if (m(b, w)) return (a[c] = b[w]), d || delete b[w], !0;
        }
        return !1;
      }
      function db(a) {
        return b(a) ? [ma(a)] : Array.isArray(a) ? Uc(a) : void 0;
      }
      function eb(a) {
        return null != a && null != a.text && !1 === a.isComment;
      }
      function Uc(a, c) {
        var f,
          k,
          d,
          e,
          g = [];
        for (f = 0; f < a.length; f++)
          null == (k = a[f]) ||
            "boolean" == typeof k ||
            ((e = g[(d = g.length - 1)]),
            Array.isArray(k)
              ? 0 < k.length &&
                (eb((k = Uc(k, (c || "") + "_" + f))[0]) &&
                  eb(e) &&
                  ((g[d] = ma(e.text + k[0].text)), k.shift()),
                g.push.apply(g, k))
              : b(k)
              ? eb(e)
                ? (g[d] = ma(e.text + k))
                : "" !== k && g.push(ma(k))
              : eb(k) && eb(e)
              ? (g[d] = ma(e.text + k.text))
              : (!0 === a._isVList &&
                  null != k.tag &&
                  null == k.key &&
                  null != c &&
                  (k.key = "__vlist" + c + "_" + f + "__"),
                g.push(k)));
        return g;
      }
      function Kb(a, b) {
        return (
          (a.__esModule || (sb && "Module" === a[Symbol.toStringTag])) &&
            (a = a.default),
          l(a) ? b.extend(a) : a
        );
      }
      function Vc(a) {
        if (Array.isArray(a))
          for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if (
              null != c &&
              (null != c.componentOptions || (c.isComment && c.asyncFactory))
            )
              return c;
          }
      }
      function Wc(a, b) {
        Ma.$on(a, b);
      }
      function Xc(a, b) {
        Ma.$off(a, b);
      }
      function pb(a, b) {
        var c = Ma;
        return function D() {
          null !== b.apply(null, arguments) && c.$off(a, D);
        };
      }
      function Lb(a, b) {
        if (!a || !a.length) return {};
        for (var c = {}, f = 0, k = a.length; f < k; f++) {
          var d = a[f],
            e = d.data;
          (e && e.attrs && e.attrs.slot && delete e.attrs.slot,
          (d.context !== b && d.fnContext !== b) || !e || null == e.slot)
            ? (c.default || (c.default = [])).push(d)
            : ((e = e.slot),
              (e = c[e] || (c[e] = [])),
              "template" === d.tag
                ? e.push.apply(e, d.children || [])
                : e.push(d));
        }
        for (var g in c) c[g].every(kf) && delete c[g];
        return c;
      }
      function kf(a) {
        return (a.isComment && !a.asyncFactory) || " " === a.text;
      }
      function Yc(a, b, c) {
        c = c || { $stable: !b };
        for (var f = 0; f < a.length; f++) {
          var k = a[f];
          Array.isArray(k) ? Yc(k, b, c) : k && (c[k.key] = k.fn);
        }
        return c;
      }
      function Zc(a) {
        var b = Na;
        return (
          (Na = a),
          function () {
            Na = b;
          }
        );
      }
      function bd(a) {
        for (; a && (a = a.$parent); ) if (a._inactive) return !0;
        return !1;
      }
      function Qb(a, b) {
        if (b) {
          if (((a._directInactive = !1), bd(a))) return;
        } else if (a._directInactive) return;
        if (a._inactive || null === a._inactive) {
          a._inactive = !1;
          for (b = 0; b < a.$children.length; b++) Qb(a.$children[b]);
          ia(a, "activated");
        }
      }
      function cd(a, b) {
        if (!((b && ((a._directInactive = !0), bd(a))) || a._inactive)) {
          a._inactive = !0;
          for (b = 0; b < a.$children.length; b++) cd(a.$children[b]);
          ia(a, "deactivated");
        }
      }
      function ia(a, b) {
        ea();
        var c = a.$options[b],
          f = b + " hook";
        if (c)
          for (var k = 0, d = c.length; k < d; k++) Ja(c[k], a, null, a, f);
        a._hasHookEvent && a.$emit("hook:" + b);
        Fa();
      }
      function pf() {
        var a;
        dd = Rb();
        Sb = !0;
        ta.sort(function (a, b) {
          return a.id - b.id;
        });
        for (Za = 0; Za < ta.length; Za++) {
          (a = ta[Za]).before && a.before();
          var b = a.id;
          ub[b] = null;
          a.run();
        }
        a = Tb.slice();
        b = ta.slice();
        Za = ta.length = Tb.length = 0;
        ub = {};
        Ub = Sb = !1;
        (function (a) {
          for (var b = 0; b < a.length; b++)
            (a[b]._inactive = !0), Qb(a[b], !0);
        })(a);
        (function (a) {
          for (var b = a.length; b--; ) {
            var c = a[b],
              f = c.vm;
            f._watcher === c &&
              f._isMounted &&
              !f._isDestroyed &&
              ia(f, "updated");
          }
        })(b);
        vb && aa.devtools && vb.emit("flush");
      }
      function Vb(a, b, c) {
        Ca.get = function () {
          return this[b][c];
        };
        Ca.set = function (a) {
          this[b][c] = a;
        };
        Object.defineProperty(a, c, Ca);
      }
      function qf(a) {
        a._watchers = [];
        var b = a.$options;
        b.props &&
          (function (a, b) {
            var c = a.$options.propsData || {},
              f = (a._props = {}),
              k = (a.$options._propKeys = []);
            a.$parent && (oa = !1);
            for (var q in b) {
              var d = q;
              k.push(d);
              var w = Wa(d, b, c, a);
              R(f, d, w);
              d in a || Vb(a, "_props", d);
            }
            oa = !0;
          })(a, b.props);
        b.methods &&
          (function (a, b) {
            a.$options.props;
            for (var c in b) a[c] = "function" != typeof b[c] ? B : rf(b[c], a);
          })(a, b.methods);
        b.data
          ? (function (a) {
              var b = a.$options.data;
              if ("function" == typeof b)
                a: {
                  ea();
                  try {
                    var c = b.call(a, a);
                    break a;
                  } catch (mf) {
                    c = (X(mf, a, "data()"), {});
                    break a;
                  } finally {
                    Fa();
                  }
                  c = void 0;
                }
              else c = b || {};
              b = a._data = c;
              h(b) || (b = {});
              c = Object.keys(b);
              for (
                var f = a.$options.props, k = (a.$options.methods, c.length);
                k--;

              ) {
                var q = c[k];
                0;
                var d;
                (d = f && m(f, q)) ||
                  ((d = (q + "").charCodeAt(0)), (d = 36 === d || 95 === d));
                d || Vb(a, "_data", q);
              }
              S(b, !0);
            })(a)
          : S((a._data = {}), !0);
        b.computed &&
          (function (a, b) {
            var c = (a._computedWatchers = Object.create(null)),
              f = fb(),
              k;
            for (k in b) {
              var q = b[k],
                d = "function" == typeof q ? q : q.get;
              0;
              f || (c[k] = new ja(a, d || B, B, sf));
              k in a || ed(a, k, q);
            }
          })(a, b.computed);
        b.watch &&
          b.watch !== Wb &&
          (function (a, b) {
            for (var c in b) {
              var f = b[c];
              if (Array.isArray(f))
                for (var k = 0; k < f.length; k++) Xb(a, c, f[k]);
              else Xb(a, c, f);
            }
          })(a, b.watch);
      }
      function ed(a, b, c) {
        var f = !fb();
        "function" == typeof c
          ? ((Ca.get = f ? fd(b) : gd(c)), (Ca.set = B))
          : ((Ca.get = c.get ? (f && !1 !== c.cache ? fd(b) : gd(c.get)) : B),
            (Ca.set = c.set || B));
        Object.defineProperty(a, b, Ca);
      }
      function fd(a) {
        return function () {
          var b = this._computedWatchers && this._computedWatchers[a];
          if (b)
            return b.dirty && b.evaluate(), Y.target && b.depend(), b.value;
        };
      }
      function gd(a) {
        return function () {
          return a.call(this, this);
        };
      }
      function Xb(a, b, c, d) {
        return (
          h(c) && ((d = c), (c = c.handler)),
          "string" == typeof c && (c = a[c]),
          a.$watch(b, c, d)
        );
      }
      function hd(a, b) {
        if (a) {
          for (
            var c = Object.create(null),
              f = sb ? Reflect.ownKeys(a) : Object.keys(a),
              k = 0;
            k < f.length;
            k++
          ) {
            var d = f[k];
            if ("__ob__" !== d) {
              for (var e = a[d].from, g = b; g; ) {
                if (g._provided && m(g._provided, e)) {
                  c[d] = g._provided[e];
                  break;
                }
                g = g.$parent;
              }
              g ||
                ("default" in a[d]
                  ? ((e = a[d].default),
                    (c[d] = "function" == typeof e ? e.call(b) : e))
                  : 0);
            }
          }
          return c;
        }
      }
      function Yb(a, b) {
        var c;
        if (a) {
          if (a._normalized) return a;
          for (var f in ((c = {}), a))
            a[f] && "$" !== f[0] && (c[f] = tf(a[f]));
        } else c = {};
        for (var k in b) k in c || (c[k] = uf(b, k));
        return (c._normalized = !0), (c.$stable = !a || a.$stable), c;
      }
      function tf(a) {
        return function (b) {
          return (b = a(b)) && "object" == typeof b && !Array.isArray(b)
            ? [b]
            : db(b);
        };
      }
      function uf(a, b) {
        return function () {
          return a[b];
        };
      }
      function vf(a, b) {
        var c;
        if (Array.isArray(a) || "string" == typeof a) {
          var f = Array(a.length);
          var k = 0;
          for (c = a.length; k < c; k++) f[k] = b(a[k], k);
        } else if ("number" == typeof a)
          for (f = Array(a), k = 0; k < a; k++) f[k] = b(k + 1, k);
        else if (l(a))
          if (sb && a[Symbol.iterator])
            for (f = [], a = a[Symbol.iterator](), k = a.next(); !k.done; )
              f.push(b(k.value, f.length)), (k = a.next());
          else {
            var d = Object.keys(a);
            f = Array(d.length);
            k = 0;
            for (c = d.length; k < c; k++) {
              var e = d[k];
              f[k] = b(a[e], e, k);
            }
          }
        return null != f || (f = []), (f._isVList = !0), f;
      }
      function wf(a, b, c, d) {
        var f,
          k = this.$scopedSlots[a];
        k
          ? ((c = c || {}), d && (c = x(x({}, d), c)), (f = k(c) || b))
          : (f = this.$slots[a] || b);
        return (a = c && c.slot)
          ? this.$createElement("template", { slot: a }, f)
          : f;
      }
      function xf(a) {
        return Va(this.$options, "filters", a) || id;
      }
      function jd(a, b) {
        return Array.isArray(a) ? -1 === a.indexOf(b) : a !== b;
      }
      function yf(a, b, c, d, e) {
        c = aa.keyCodes[b] || c;
        return e && d && !aa.keyCodes[b]
          ? jd(e, d)
          : c
          ? jd(c, a)
          : d
          ? Ya(d) !== b
          : void 0;
      }
      function zf(a, b, c, d, e) {
        if (c && l(c)) {
          var f;
          Array.isArray(c) && (c = A(c));
          var k = function (k) {
              if ("class" === k || "style" === k || Af(k)) f = a;
              else {
                var q = a.attrs && a.attrs.type;
                f =
                  d || aa.mustUseProp(b, q, k)
                    ? a.domProps || (a.domProps = {})
                    : a.attrs || (a.attrs = {});
              }
              q = Z(k);
              k in f ||
                q in f ||
                ((f[k] = c[k]),
                e &&
                  ((a.on || (a.on = {}))["update:" + q] = function (a) {
                    c[k] = a;
                  }));
            },
            q;
          for (q in c) k(q);
        }
        return a;
      }
      function Bf(a, b) {
        var c = this._staticTrees || (this._staticTrees = []),
          f = c[a];
        return (
          (f && !b) ||
            kd(
              (f = c[a] =
                this.$options.staticRenderFns[a].call(
                  this._renderProxy,
                  null,
                  this
                )),
              "__static__" + a,
              !1
            ),
          f
        );
      }
      function Cf(a, b, c) {
        return kd(a, "__once__" + b + (c ? "_" + c : ""), !0), a;
      }
      function kd(a, b, c) {
        if (Array.isArray(a))
          for (var f = 0; f < a.length; f++) {
            if (a[f] && "string" != typeof a[f]) {
              var k = a[f],
                d = b + "_" + f,
                q = c;
              k.isStatic = !0;
              k.key = d;
              k.isOnce = q;
            }
          }
        else (a.isStatic = !0), (a.key = b), (a.isOnce = c);
      }
      function Df(a, b) {
        if (b && h(b)) {
          var c = (a.on = a.on ? x({}, a.on) : {}),
            f;
          for (f in b) {
            var k = c[f],
              d = b[f];
            c[f] = k ? [].concat(k, d) : d;
          }
        }
        return a;
      }
      function Ef(a, b) {
        for (var c = 0; c < b.length; c += 2) {
          var f = b[c];
          "string" == typeof f && f && (a[b[c]] = b[c + 1]);
        }
        return a;
      }
      function Ff(a, b) {
        return "string" == typeof a ? b + a : a;
      }
      function ld(a) {
        a._o = Cf;
        a._n = r;
        a._s = n;
        a._l = vf;
        a._t = wf;
        a._q = G;
        a._i = E;
        a._m = Bf;
        a._f = xf;
        a._k = yf;
        a._b = zf;
        a._v = ma;
        a._e = Oa;
        a._u = Yc;
        a._g = Df;
        a._d = Ef;
        a._p = Ff;
      }
      function Zb(a, b, c, d, e) {
        var f,
          k = e.options;
        m(d, "_uid")
          ? ((f = Object.create(d))._original = d)
          : ((f = d), (d = d._original));
        e = !0 === k._compiled;
        var q = !e;
        this.data = a;
        this.props = b;
        this.children = c;
        this.parent = d;
        this.listeners = a.on || ka;
        this.injections = hd(k.inject, d);
        this.slots = function () {
          return Lb(c, d);
        };
        Object.defineProperty(this, "scopedSlots", {
          enumerable: !0,
          get: function () {
            return Yb(a.scopedSlots, this.slots());
          },
        });
        e &&
          ((this.$options = k),
          (this.$slots = this.slots()),
          (this.$scopedSlots = Yb(a.scopedSlots, this.$slots)));
        k._scopeId
          ? (this._c = function (a, b, c, e) {
              a = wb(f, a, b, c, e, q);
              return (
                a &&
                  !Array.isArray(a) &&
                  ((a.fnScopeId = k._scopeId), (a.fnContext = d)),
                a
              );
            })
          : (this._c = function (a, b, c, k) {
              return wb(f, a, b, c, k, q);
            });
      }
      function md(a, b, c, d, e) {
        a = M(a);
        return (
          (a.fnContext = c),
          (a.fnOptions = d),
          b.slot && ((a.data || (a.data = {})).slot = b.slot),
          a
        );
      }
      function nd(a, b, c, d, g) {
        if (null != a) {
          var f = c.$options._base;
          if ((l(a) && (a = f.extend(a)), "function" == typeof a)) {
            var k;
            if (
              null == a.cid &&
              ((a = (function (a, b, c) {
                if (!0 === a.error && null != a.errorComp) return a.errorComp;
                if (null != a.resolved) return a.resolved;
                if (!0 === a.loading && null != a.loadingComp)
                  return a.loadingComp;
                if (null == a.contexts) {
                  var f = (a.contexts = [c]),
                    k = !0,
                    d = function (a) {
                      for (var b = 0, c = f.length; b < c; b++)
                        f[b].$forceUpdate();
                      a && (f.length = 0);
                    };
                  c = F(function (c) {
                    a.resolved = Kb(c, b);
                    k ? (f.length = 0) : d(!0);
                  });
                  var q = F(function (b) {
                      null != a.errorComp && ((a.error = !0), d(!0));
                    }),
                    w = a(c, q);
                  return (
                    l(w) &&
                      (e(w)
                        ? null == a.resolved && w.then(c, q)
                        : e(w.component) &&
                          (w.component.then(c, q),
                          null != w.error && (a.errorComp = Kb(w.error, b)),
                          null != w.loading &&
                            ((a.loadingComp = Kb(w.loading, b)),
                            0 === w.delay
                              ? (a.loading = !0)
                              : setTimeout(function () {
                                  null == a.resolved &&
                                    null == a.error &&
                                    ((a.loading = !0), d(!1));
                                }, w.delay || 200)),
                          null != w.timeout &&
                            setTimeout(function () {
                              null == a.resolved && q(null);
                            }, w.timeout))),
                    (k = !1),
                    a.loading ? a.loadingComp : a.resolved
                  );
                }
                a.contexts.push(c);
              })((k = a), f, c)),
              void 0 === a)
            )
              return (function (a, b, c, f, k) {
                var d = Oa();
                return (
                  (d.asyncFactory = a),
                  (d.asyncMeta = { data: b, context: c, children: f, tag: k }),
                  d
                );
              })(k, b, c, d, g);
            b = b || {};
            $b(a);
            null != b.model &&
              (function (a, b) {
                var c = (a.model && a.model.prop) || "value",
                  f = (a.model && a.model.event) || "input";
                a = a.props && c in a.props ? "props" : "attrs";
                (b[a] || (b[a] = {}))[c] = b.model.value;
                c = b.on || (b.on = {});
                a = c[f];
                b = b.model.callback;
                null != a
                  ? (Array.isArray(a) ? -1 === a.indexOf(b) : a !== b) &&
                    (c[f] = [b].concat(a))
                  : (c[f] = b);
              })(a.options, b);
            f = (function (a, b) {
              var c = b.options.props;
              if (null != c) {
                b = {};
                var f = a.attrs;
                a = a.props;
                if (null != f || null != a)
                  for (var k in c)
                    (c = Ya(k)), ob(b, a, k, c, !0) || ob(b, f, k, c, !1);
                return b;
              }
            })(b, a);
            if (!0 === a.options.functional)
              return (function (a, b, c, f, k) {
                var d = a.options,
                  q = {},
                  e = d.props;
                if (null != e) for (var w in e) q[w] = Wa(w, e, b || ka);
                else {
                  if (null != c.attrs) {
                    b = c.attrs;
                    for (var g in b) q[Z(g)] = b[g];
                  }
                  if (null != c.props) {
                    g = c.props;
                    for (var D in g) q[Z(D)] = g[D];
                  }
                }
                a = new Zb(c, q, k, f, a);
                f = d.render.call(null, a._c, a);
                if (f instanceof T) return md(f, c, a.parent, d);
                if (Array.isArray(f)) {
                  f = db(f) || [];
                  k = Array(f.length);
                  for (q = 0; q < f.length; q++)
                    k[q] = md(f[q], c, a.parent, d);
                  return k;
                }
              })(a, f, b, c, d);
            var q = b.on;
            if (((b.on = b.nativeOn), !0 === a.options.abstract)) {
              var w = b.slot;
              b = {};
              w && (b.slot = w);
            }
            !(function (a) {
              a = a.hook || (a.hook = {});
              for (var b = 0; b < od.length; b++) {
                var c = od[b],
                  f = a[c],
                  k = ac[c];
                f === k || (f && f._merged) || (a[c] = f ? Gf(k, f) : k);
              }
            })(b);
            w = a.options.name || g;
            return new T(
              "vue-component-" + a.cid + (w ? "-" + w : ""),
              b,
              void 0,
              void 0,
              void 0,
              c,
              { Ctor: a, propsData: f, listeners: q, tag: g, children: d },
              k
            );
          }
        }
      }
      function Gf(a, b) {
        var c = function (c, f) {
          a(c, f);
          b(c, f);
        };
        return (c._merged = !0), c;
      }
      function wb(a, c, d, e, g, h) {
        return (
          (Array.isArray(d) || b(d)) && ((g = e), (e = d), (d = void 0)),
          !0 === h && (g = pd),
          (function (a, b, c, f, k) {
            if (null != c && null != c.__ob__) return Oa();
            null != c && null != c.is && (b = c.is);
            if (!b) return Oa();
            0;
            Array.isArray(f) &&
              "function" == typeof f[0] &&
              (((c = c || {}).scopedSlots = { default: f[0] }), (f.length = 0));
            k === pd
              ? (f = db(f))
              : k === Hf &&
                (f = (function (a) {
                  for (var b = 0; b < a.length; b++)
                    if (Array.isArray(a[b]))
                      return Array.prototype.concat.apply([], a);
                  return a;
                })(f));
            if ("string" == typeof b) {
              var d;
              var q = (a.$vnode && a.$vnode.ns) || aa.getTagNamespace(b);
              a = aa.isReservedTag(b)
                ? new T(aa.parsePlatformTagName(b), c, f, void 0, void 0, a)
                : (c && c.pre) || null == (d = Va(a.$options, "components", b))
                ? new T(b, c, f, void 0, void 0, a)
                : nd(d, c, a, f, b);
            } else a = nd(b, c, a, f);
            return Array.isArray(a)
              ? a
              : null != a
              ? (null != q && qd(a, q),
                null != c &&
                  (function (a) {
                    l(a.style) && O(a.style);
                    l(a.class) && O(a.class);
                  })(c),
                a)
              : Oa();
          })(a, c, d, e, g)
        );
      }
      function qd(a, b, c) {
        if (
          ((a.ns = b),
          "foreignObject" === a.tag && ((b = void 0), (c = !0)),
          null != a.children)
        )
          for (var f = 0, k = a.children.length; f < k; f++) {
            var d = a.children[f];
            null != d.tag &&
              (null == d.ns || (!0 === c && "svg" !== d.tag)) &&
              qd(d, b, c);
          }
      }
      function $b(a) {
        var b = a.options;
        if (a.super) {
          var c = $b(a.super);
          if (c !== a.superOptions) {
            a.superOptions = c;
            var f,
              d = a.options,
              e = a.sealedOptions,
              g;
            for (g in d) d[g] !== e[g] && (f || (f = {}), (f[g] = d[g]));
            f && x(a.extendOptions, f);
            (b = a.options = J(c, a.extendOptions)).name &&
              (b.components[b.name] = a);
          }
        }
        return b;
      }
      function K(a) {
        this._init(a);
      }
      function If(a) {
        a.cid = 0;
        var b = 1;
        a.extend = function (a) {
          a = a || {};
          var c = this,
            f = c.cid,
            k = a._Ctor || (a._Ctor = {});
          if (k[f]) return k[f];
          var d = a.name || c.options.name,
            q = function (a) {
              this._init(a);
            };
          return (
            ((q.prototype = Object.create(c.prototype)).constructor = q),
            (q.cid = b++),
            (q.options = J(c.options, a)),
            (q.super = c),
            q.options.props &&
              (function (a) {
                var b = a.options.props,
                  c;
                for (c in b) Vb(a.prototype, "_props", c);
              })(q),
            q.options.computed &&
              (function (a) {
                var b = a.options.computed,
                  c;
                for (c in b) ed(a.prototype, c, b[c]);
              })(q),
            (q.extend = c.extend),
            (q.mixin = c.mixin),
            (q.use = c.use),
            yb.forEach(function (a) {
              q[a] = c[a];
            }),
            d && (q.options.components[d] = q),
            (q.superOptions = c.options),
            (q.extendOptions = a),
            (q.sealedOptions = x({}, q.options)),
            (k[f] = q),
            q
          );
        };
      }
      function rd(a) {
        return a && (a.Ctor.options.name || a.tag);
      }
      function zb(a, b) {
        return Array.isArray(a)
          ? -1 < a.indexOf(b)
          : "string" == typeof a
          ? -1 < a.split(",").indexOf(b)
          : "[object RegExp]" === Mb.call(a) && a.test(b);
      }
      function sd(a, b) {
        var c = a.cache,
          f = a.keys;
        a = a._vnode;
        for (var k in c) {
          var d = c[k];
          d && (d = rd(d.componentOptions)) && !b(d) && bc(c, k, f, a);
        }
      }
      function bc(a, b, c, d) {
        var f = a[b];
        !f || (d && f.tag === d.tag) || f.componentInstance.$destroy();
        a[b] = null;
        v(c, b);
      }
      function td(a, b) {
        return {
          staticClass: cc(a.staticClass, b.staticClass),
          class: null != a.class ? [a.class, b.class] : b.class,
        };
      }
      function cc(a, b) {
        return a ? (b ? a + " " + b : a) : b || "";
      }
      function dc(a) {
        return Array.isArray(a)
          ? (function (a) {
              for (var b, c = "", f = 0, k = a.length; f < k; f++)
                null != (b = dc(a[f])) &&
                  "" !== b &&
                  (c && (c += " "), (c += b));
              return c;
            })(a)
          : l(a)
          ? (function (a) {
              var b = "",
                c;
              for (c in a) a[c] && (b && (b += " "), (b += c));
              return b;
            })(a)
          : "string" == typeof a
          ? a
          : "";
      }
      function ud(a) {
        return ec(a) ? "svg" : "math" === a ? "math" : void 0;
      }
      function fc(a) {
        return "string" == typeof a
          ? document.querySelector(a) || document.createElement("div")
          : a;
      }
      function $a(a, b) {
        var c = a.data.ref;
        if (null != c) {
          var f = a.componentInstance || a.elm,
            k = a.context.$refs;
          b
            ? Array.isArray(k[c])
              ? v(k[c], f)
              : k[c] === f && (k[c] = void 0)
            : a.data.refInFor
            ? Array.isArray(k[c])
              ? 0 > k[c].indexOf(f) && k[c].push(f)
              : (k[c] = [f])
            : (k[c] = f);
        }
      }
      function Pa(a, b) {
        var c;
        if ((c = a.key === b.key)) {
          if (
            (c =
              a.tag === b.tag &&
              a.isComment === b.isComment &&
              (null != a.data) === (null != b.data))
          )
            if ("input" !== a.tag) c = !0;
            else {
              var f;
              c = null != (f = a.data) && null != (f = f.attrs) && f.type;
              var k = null != (f = b.data) && null != (f = f.attrs) && f.type;
              c = c === k || (gc(c) && gc(k));
            }
          c =
            c ||
            (!0 === a.isAsyncPlaceholder &&
              a.asyncFactory === b.asyncFactory &&
              null == b.asyncFactory.error);
        }
        return c;
      }
      function hc(a, b) {
        (a.data.directives || b.data.directives) &&
          (function (a, b) {
            var c,
              f = a === Qa,
              k = b === Qa,
              d = vd(a.data.directives, a.context),
              q = vd(b.data.directives, b.context),
              e = [],
              w = [];
            for (c in q) {
              var g = d[c];
              var h = q[c];
              g
                ? ((h.oldValue = g.value),
                  (h.oldArg = g.arg),
                  gb(h, "update", b, a),
                  h.def && h.def.componentUpdated && w.push(h))
                : (gb(h, "bind", b, a), h.def && h.def.inserted && e.push(h));
            }
            e.length &&
              ((g = function () {
                for (var c = 0; c < e.length; c++) gb(e[c], "inserted", b, a);
              }),
              f ? za(b, "insert", g) : g());
            w.length &&
              za(b, "postpatch", function () {
                for (var c = 0; c < w.length; c++)
                  gb(w[c], "componentUpdated", b, a);
              });
            if (!f) for (c in d) q[c] || gb(d[c], "unbind", a, a, k);
          })(a, b);
      }
      function vd(a, b) {
        var c,
          f,
          k = Object.create(null);
        if (!a) return k;
        for (c = 0; c < a.length; c++)
          (f = a[c]).modifiers || (f.modifiers = Jf),
            (k[
              f.rawName ||
                f.name + "." + Object.keys(f.modifiers || {}).join(".")
            ] = f),
            (f.def = Va(b.$options, "directives", f.name));
        return k;
      }
      function gb(a, b, c, d, e) {
        var f = a.def && a.def[b];
        if (f)
          try {
            f(c.elm, a, c, d, e);
          } catch (ha) {
            X(ha, c.context, "directive " + a.name + " " + b + " hook");
          }
      }
      function wd(a, b) {
        var c = b.componentOptions;
        if (
          !(
            (null != c && !1 === c.Ctor.options.inheritAttrs) ||
            (null == a.data.attrs && null == b.data.attrs)
          )
        ) {
          var f;
          c = b.elm;
          a = a.data.attrs || {};
          var k = b.data.attrs || {};
          for (f in (null != k.__ob__ && (k = b.data.attrs = x({}, k)), k))
            (b = k[f]), a[f] !== b && xd(c, f, b);
          for (f in ((Ra || yd) &&
            k.value !== a.value &&
            xd(c, "value", k.value),
          a))
            null == k[f] &&
              (ic(f)
                ? c.removeAttributeNS("http://www.w3.org/1999/xlink", zd(f))
                : Ad(f) || c.removeAttribute(f));
        }
      }
      function xd(a, b, c) {
        -1 < a.tagName.indexOf("-")
          ? Bd(a, b, c)
          : Kf(b)
          ? null == c || !1 === c
            ? a.removeAttribute(b)
            : ((c =
                "allowfullscreen" === b && "EMBED" === a.tagName ? "true" : b),
              a.setAttribute(b, c))
          : Ad(b)
          ? a.setAttribute(
              b,
              (function (a, b) {
                return null == b || !1 === b || "false" === b
                  ? "false"
                  : "contenteditable" === a && Lf(b)
                  ? b
                  : "true";
              })(b, c)
            )
          : ic(b)
          ? null == c || !1 === c
            ? a.removeAttributeNS("http://www.w3.org/1999/xlink", zd(b))
            : a.setAttributeNS("http://www.w3.org/1999/xlink", b, c)
          : Bd(a, b, c);
      }
      function Bd(a, b, c) {
        if (null == c || !1 === c) a.removeAttribute(b);
        else {
          if (
            Ra &&
            !ab &&
            "TEXTAREA" === a.tagName &&
            "placeholder" === b &&
            "" !== c &&
            !a.__ieph
          ) {
            var f = function (b) {
              b.stopImmediatePropagation();
              a.removeEventListener("input", f);
            };
            a.addEventListener("input", f);
            a.__ieph = !0;
          }
          a.setAttribute(b, c);
        }
      }
      function Cd(a, b) {
        var c = b.elm,
          f = b.data;
        a = a.data;
        if (
          null != f.staticClass ||
          null != f.class ||
          (null != a && (null != a.staticClass || null != a.class))
        ) {
          f = b.data;
          for (a = b; null != b.componentInstance; )
            (b = b.componentInstance._vnode) && b.data && (f = td(b.data, f));
          for (; null != (a = a.parent); ) a && a.data && (f = td(f, a.data));
          b = f.staticClass;
          f = f.class;
          b = null != b || null != f ? cc(b, dc(f)) : "";
          f = c._transitionClasses;
          null != f && (b = cc(b, dc(f)));
          b !== c._prevClass &&
            (c.setAttribute("class", b), (c._prevClass = b));
        }
      }
      function jc(a) {
        function b() {
          (g || (g = [])).push(a.slice(u, d).trim());
          u = d + 1;
        }
        var c,
          f,
          d,
          e,
          g,
          h = !1,
          l = !1,
          m = !1,
          n = !1,
          p = 0,
          r = 0,
          t = 0,
          u = 0;
        for (d = 0; d < a.length; d++)
          if (((f = c), (c = a.charCodeAt(d)), h))
            39 === c && 92 !== f && (h = !1);
          else if (l) 34 === c && 92 !== f && (l = !1);
          else if (m) 96 === c && 92 !== f && (m = !1);
          else if (n) 47 === c && 92 !== f && (n = !1);
          else if (
            124 !== c ||
            124 === a.charCodeAt(d + 1) ||
            124 === a.charCodeAt(d - 1) ||
            p ||
            r ||
            t
          ) {
            switch (c) {
              case 34:
                l = !0;
                break;
              case 39:
                h = !0;
                break;
              case 96:
                m = !0;
                break;
              case 40:
                t++;
                break;
              case 41:
                t--;
                break;
              case 91:
                r++;
                break;
              case 93:
                r--;
                break;
              case 123:
                p++;
                break;
              case 125:
                p--;
            }
            if (47 === c) {
              f = d - 1;
              for (var v = void 0; 0 <= f && " " === (v = a.charAt(f)); f--);
              (v && Mf.test(v)) || (n = !0);
            }
          } else void 0 === e ? ((u = d + 1), (e = a.slice(0, d).trim())) : b();
        if ((void 0 === e ? (e = a.slice(0, d).trim()) : 0 !== u && b(), g))
          for (d = 0; d < g.length; d++) e = Nf(e, g[d]);
        return e;
      }
      function Nf(a, b) {
        var c = b.indexOf("(");
        if (0 > c) return '_f("' + b + '")(' + a + ")";
        var f = b.slice(0, c);
        b = b.slice(c + 1);
        return '_f("' + f + '")(' + a + (")" !== b ? "," + b : b);
      }
      function Dd(a, b) {}
      function hb(a, b) {
        return a
          ? a
              .map(function (a) {
                return a[b];
              })
              .filter(function (a) {
                return a;
              })
          : [];
      }
      function Sa(a, b, c, d, e) {
        (a.props || (a.props = [])).push(
          ib({ name: b, value: c, dynamic: e }, d)
        );
        a.plain = !1;
      }
      function kc(a, b, c, d, e) {
        (e
          ? a.dynamicAttrs || (a.dynamicAttrs = [])
          : a.attrs || (a.attrs = [])
        ).push(ib({ name: b, value: c, dynamic: e }, d));
        a.plain = !1;
      }
      function lc(a, b, c, d) {
        a.attrsMap[b] = c;
        a.attrsList.push(ib({ name: b, value: c }, d));
      }
      function va(a, b, c, d, e, g, h, l) {
        var f;
        (d = d || ka).right
          ? l
            ? (b = "(" + b + ")\x3d\x3d\x3d'click'?'contextmenu':(" + b + ")")
            : "click" === b && ((b = "contextmenu"), delete d.right)
          : d.middle &&
            (l
              ? (b = "(" + b + ")\x3d\x3d\x3d'click'?'mouseup':(" + b + ")")
              : "click" === b && (b = "mouseup"));
        d.capture &&
          (delete d.capture, (b = l ? "_p(" + b + ',"!")' : "!" + b));
        d.once && (delete d.once, (b = l ? "_p(" + b + ',"~")' : "~" + b));
        d.passive &&
          (delete d.passive, (b = l ? "_p(" + b + ',"\x26")' : "\x26" + b));
        d.native
          ? (delete d.native, (f = a.nativeEvents || (a.nativeEvents = {})))
          : (f = a.events || (a.events = {}));
        c = ib({ value: c.trim(), dynamic: l }, h);
        d !== ka && (c.modifiers = d);
        d = f[b];
        Array.isArray(d)
          ? e
            ? d.unshift(c)
            : d.push(c)
          : (f[b] = d ? (e ? [c, d] : [d, c]) : c);
        a.plain = !1;
      }
      function da(a, b, c) {
        var f = N(a, ":" + b) || N(a, "v-bind:" + b);
        if (null != f) return jc(f);
        if (!1 !== c && ((a = N(a, b)), null != a)) return JSON.stringify(a);
      }
      function N(a, b, c) {
        var f;
        if (null != (f = a.attrsMap[b]))
          for (var d = a.attrsList, k = 0, e = d.length; k < e; k++)
            if (d[k].name === b) {
              d.splice(k, 1);
              break;
            }
        return c && delete a.attrsMap[b], f;
      }
      function Ed(a, b) {
        a = a.attrsList;
        for (var c = 0, f = a.length; c < f; c++) {
          var d = a[c];
          if (b.test(d.name)) return a.splice(c, 1), d;
        }
      }
      function ib(a, b) {
        return (
          b &&
            (null != b.start && (a.start = b.start),
            null != b.end && (a.end = b.end)),
          a
        );
      }
      function Fd(a, b, c) {
        c = c || {};
        var f = c.number,
          d = "$$v";
        c.trim && (d = "(typeof $$v \x3d\x3d\x3d 'string'? $$v.trim(): $$v)");
        f && (d = "_n(" + d + ")");
        c = Da(b, d);
        a.model = {
          value: "(" + b + ")",
          expression: JSON.stringify(b),
          callback: "function ($$v) {" + c + "}",
        };
      }
      function Da(a, b) {
        var c = a;
        if (
          ((c = c.trim()),
          (bb = c.length),
          0 > c.indexOf("[") || c.lastIndexOf("]") < bb - 1)
        )
          c =
            -1 < (U = c.lastIndexOf("."))
              ? { exp: c.slice(0, U), key: '"' + c.slice(U + 1) + '"' }
              : { exp: c, key: null };
        else {
          jb = c;
          for (U = Ab = mc = 0; !(U >= bb); )
            if (Gd((nc = jb.charCodeAt(++U))))
              for (var f = nc; !(U >= bb) && jb.charCodeAt(++U) !== f; );
            else if (91 === nc) {
              var d;
              f = 1;
              for (Ab = U; !(U >= bb); )
                if (Gd((d = jb.charCodeAt(++U))))
                  for (; !(U >= bb) && jb.charCodeAt(++U) !== d; );
                else if ((91 === d && f++, 93 === d && f--, 0 === f)) {
                  mc = U;
                  break;
                }
            }
          c = { exp: c.slice(0, Ab), key: c.slice(Ab + 1, mc) };
        }
        return null === c.key
          ? a + "\x3d" + b
          : "$set(" + c.exp + ", " + c.key + ", " + b + ")";
      }
      function Gd(a) {
        return 34 === a || 39 === a;
      }
      function Of(a, b, c) {
        var f = kb;
        return function C() {
          null !== b.apply(null, arguments) && Hd(a, C, c, f);
        };
      }
      function Pf(a, b, c, d) {
        if (oc) {
          var f = dd,
            k = b;
          b = k._wrapper = function (a) {
            if (a.timeStamp >= f) return k.apply(this, arguments);
          };
        }
        kb.addEventListener(a, b, Id ? { capture: c, passive: d } : c);
      }
      function Hd(a, b, c, d) {
        (d || kb).removeEventListener(a, b._wrapper || b, c);
      }
      function Jd(a, b) {
        if (null != a.data.on || null != b.data.on) {
          var c = b.data.on || {};
          a = a.data.on || {};
          kb = b.elm;
          if (null != c.__r) {
            var f = Ra ? "change" : "input";
            c[f] = [].concat(c.__r, c[f] || []);
            delete c.__r;
          }
          null != c.__c &&
            ((c.change = [].concat(c.__c, c.change || [])), delete c.__c);
          ca(c, a, Pf, Hd, Of, b.context);
          kb = void 0;
        }
      }
      function Kd(a, b) {
        if (null != a.data.domProps || null != b.data.domProps) {
          var c,
            f,
            d = b.elm;
          a = a.data.domProps || {};
          var k = b.data.domProps || {};
          for (c in (null != k.__ob__ && (k = b.data.domProps = x({}, k)), a))
            null == k[c] && (d[c] = "");
          for (c in k) {
            if (((f = k[c]), "textContent" === c || "innerHTML" === c)) {
              if ((b.children && (b.children.length = 0), f === a[c])) continue;
              1 === d.childNodes.length && d.removeChild(d.childNodes[0]);
            }
            if ("value" === c || f !== a[c])
              if ("value" === c)
                (d._value = f),
                  (f = null == f ? "" : String(f)),
                  Qf(d, f) && (d.value = f);
              else if (
                "innerHTML" === c &&
                ec(d.tagName) &&
                null == d.innerHTML
              ) {
                (pc = pc || document.createElement("div")).innerHTML =
                  "\x3csvg\x3e" + f + "\x3c/svg\x3e";
                for (f = pc.firstChild; d.firstChild; )
                  d.removeChild(d.firstChild);
                for (; f.firstChild; ) d.appendChild(f.firstChild);
              } else d[c] = f;
          }
        }
      }
      function Qf(a, b) {
        return (
          !a.composing &&
          ("OPTION" === a.tagName ||
            (function (a, b) {
              var c = !0;
              try {
                c = document.activeElement !== a;
              } catch (C) {}
              return c && a.value !== b;
            })(a, b) ||
            (function (a, b) {
              var c = a.value;
              a = a._vModifiers;
              if (null != a) {
                if (a.number) return r(c) !== r(b);
                if (a.trim) return c.trim() !== b.trim();
              }
              return c !== b;
            })(a, b))
        );
      }
      function qc(a) {
        var b = Ld(a.style);
        return a.staticStyle ? x(a.staticStyle, b) : b;
      }
      function Ld(a) {
        return Array.isArray(a) ? A(a) : "string" == typeof a ? Md(a) : a;
      }
      function Nd(a, b) {
        var c = b.data;
        a = a.data;
        if (
          null != c.staticStyle ||
          null != c.style ||
          null != a.staticStyle ||
          null != a.style
        ) {
          var f, d;
          c = b.elm;
          var k = a.normalizedStyle || a.style || {};
          a = a.staticStyle || k;
          k = Ld(b.data.style) || {};
          b.data.normalizedStyle = null != k.__ob__ ? x({}, k) : k;
          var e;
          k = {};
          for (var g = b; g.componentInstance; )
            (g = g.componentInstance._vnode) &&
              g.data &&
              (e = qc(g.data)) &&
              x(k, e);
          for ((e = qc(b.data)) && x(k, e); (b = b.parent); )
            b.data && (e = qc(b.data)) && x(k, e);
          for (d in a) null == k[d] && Od(c, d, "");
          for (d in k) (f = k[d]) !== a[d] && Od(c, d, null == f ? "" : f);
        }
      }
      function Pd(a, b) {
        if (b && (b = b.trim()))
          if (a.classList)
            -1 < b.indexOf(" ")
              ? b.split(Qd).forEach(function (b) {
                  return a.classList.add(b);
                })
              : a.classList.add(b);
          else {
            var c = " " + (a.getAttribute("class") || "") + " ";
            0 > c.indexOf(" " + b + " ") &&
              a.setAttribute("class", (c + b).trim());
          }
      }
      function Rd(a, b) {
        if (b && (b = b.trim()))
          if (a.classList)
            -1 < b.indexOf(" ")
              ? b.split(Qd).forEach(function (b) {
                  return a.classList.remove(b);
                })
              : a.classList.remove(b),
              a.classList.length || a.removeAttribute("class");
          else {
            var c = " " + (a.getAttribute("class") || "") + " ";
            for (b = " " + b + " "; 0 <= c.indexOf(b); ) c = c.replace(b, " ");
            (c = c.trim())
              ? a.setAttribute("class", c)
              : a.removeAttribute("class");
          }
      }
      function Sd(a) {
        if (a) {
          if ("object" == typeof a) {
            var b = {};
            return !1 !== a.css && x(b, Td(a.name || "v")), x(b, a), b;
          }
          return "string" == typeof a ? Td(a) : void 0;
        }
      }
      function Ud(a) {
        Vd(function () {
          Vd(a);
        });
      }
      function Ta(a, b) {
        var c = a._transitionClasses || (a._transitionClasses = []);
        0 > c.indexOf(b) && (c.push(b), Pd(a, b));
      }
      function wa(a, b) {
        a._transitionClasses && v(a._transitionClasses, b);
        Rd(a, b);
      }
      function Wd(a, b, c) {
        b = Xd(a, b);
        var f = b.type,
          d = b.timeout,
          k = b.propCount;
        if (!f) return c();
        var e = "transition" === f ? Bb : Yd,
          q = 0,
          g = function (b) {
            b.target === a && ++q >= k && (a.removeEventListener(e, g), c());
          };
        setTimeout(function () {
          q < k && (a.removeEventListener(e, g), c());
        }, d + 1);
        a.addEventListener(e, g);
      }
      function Xd(a, b) {
        var c;
        a = window.getComputedStyle(a);
        var f = (a[Cb + "Delay"] || "").split(", "),
          d = (a[Cb + "Duration"] || "").split(", ");
        f = Zd(f, d);
        var k = (a[rc + "Delay"] || "").split(", "),
          e = (a[rc + "Duration"] || "").split(", ");
        k = Zd(k, e);
        var g = 0,
          h = 0;
        return (
          "transition" === b
            ? 0 < f && ((c = "transition"), (g = f), (h = d.length))
            : "animation" === b
            ? 0 < k && ((c = "animation"), (g = k), (h = e.length))
            : (h = (c =
                0 < (g = Math.max(f, k))
                  ? f > k
                    ? "transition"
                    : "animation"
                  : null)
                ? "transition" === c
                  ? d.length
                  : e.length
                : 0),
          {
            type: c,
            timeout: g,
            propCount: h,
            hasTransform: "transition" === c && Rf.test(a[Cb + "Property"]),
          }
        );
      }
      function Zd(a, b) {
        for (; a.length < b.length; ) a = a.concat(a);
        return Math.max.apply(
          null,
          b.map(function (b, c) {
            return (
              1e3 * Number(b.slice(0, -1).replace(",", ".")) +
              1e3 * Number(a[c].slice(0, -1).replace(",", "."))
            );
          })
        );
      }
      function sc(a, b) {
        var c = a.elm;
        null != c._leaveCb && ((c._leaveCb.cancelled = !0), c._leaveCb());
        var f = Sd(a.data.transition);
        if (null != f && null == c._enterCb && 1 === c.nodeType) {
          var d = f.css,
            k = f.type,
            e = f.enterClass,
            g = f.enterToClass,
            h = f.enterActiveClass,
            m = f.appearClass,
            n = f.appearToClass,
            p = f.appearActiveClass,
            t = f.beforeEnter,
            u = f.enter,
            v = f.afterEnter,
            x = f.enterCancelled,
            xb = f.beforeAppear,
            y = f.appear,
            ua = f.afterAppear,
            B = f.appearCancelled;
          f = f.duration;
          for (var P = Na, Ea = Na.$vnode; Ea && Ea.parent; )
            P = (Ea = Ea.parent).context;
          P = !P._isMounted || !a.isRootInsert;
          if (!P || y || "" === y) {
            var tc = P && m ? m : e,
              $d = P && p ? p : h,
              ae = P && n ? n : g;
            e = (P && xb) || t;
            var lb = P && "function" == typeof y ? y : u,
              be = (P && ua) || v,
              ce = (P && B) || x,
              uc = r(l(f) ? f.enter : f);
            0;
            var A = !1 !== d && !ab,
              de = vc(lb),
              Ua = (c._enterCb = F(function () {
                A && (wa(c, ae), wa(c, $d));
                Ua.cancelled ? (A && wa(c, tc), ce && ce(c)) : be && be(c);
                c._enterCb = null;
              }));
            a.data.show ||
              za(a, "insert", function () {
                var b = c.parentNode;
                (b = b && b._pending && b._pending[a.key]) &&
                  b.tag === a.tag &&
                  b.elm._leaveCb &&
                  b.elm._leaveCb();
                lb && lb(c, Ua);
              });
            e && e(c);
            A &&
              (Ta(c, tc),
              Ta(c, $d),
              Ud(function () {
                wa(c, tc);
                Ua.cancelled ||
                  (Ta(c, ae),
                  de ||
                    ("number" != typeof uc || isNaN(uc)
                      ? Wd(c, k, Ua)
                      : setTimeout(Ua, uc)));
              }));
            a.data.show && (b && b(), lb && lb(c, Ua));
            A || de || Ua();
          }
        }
      }
      function ee(a, b) {
        function c() {
          ua.cancelled ||
            (!a.data.show &&
              f.parentNode &&
              ((f.parentNode._pending || (f.parentNode._pending = {}))[a.key] =
                a),
            m && m(f),
            x &&
              (Ta(f, e),
              Ta(f, h),
              Ud(function () {
                wa(f, e);
                ua.cancelled ||
                  (Ta(f, g),
                  xb ||
                    ("number" != typeof y || isNaN(y)
                      ? Wd(f, k, ua)
                      : setTimeout(ua, y)));
              })),
            n && n(f, ua),
            x || xb || ua());
        }
        var f = a.elm;
        null != f._enterCb && ((f._enterCb.cancelled = !0), f._enterCb());
        var d = Sd(a.data.transition);
        if (null == d || 1 !== f.nodeType) return b();
        if (null == f._leaveCb) {
          var k = d.type,
            e = d.leaveClass,
            g = d.leaveToClass,
            h = d.leaveActiveClass,
            m = d.beforeLeave,
            n = d.leave,
            p = d.afterLeave,
            t = d.leaveCancelled,
            u = d.delayLeave,
            v = d.duration,
            x = !1 !== d.css && !ab,
            xb = vc(n),
            y = r(l(v) ? v.leave : v);
          0;
          var ua = (f._leaveCb = F(function () {
            f.parentNode &&
              f.parentNode._pending &&
              (f.parentNode._pending[a.key] = null);
            x && (wa(f, g), wa(f, h));
            ua.cancelled ? (x && wa(f, e), t && t(f)) : (b(), p && p(f));
            f._leaveCb = null;
          }));
          u ? u(c) : c();
        }
      }
      function vc(a) {
        if (null == a) return !1;
        var b = a.fns;
        return null != b
          ? vc(Array.isArray(b) ? b[0] : b)
          : 1 < (a._length || a.length);
      }
      function fe(a, b) {
        !0 !== b.data.show && sc(b);
      }
      function ge(a, b, c) {
        he(a, b, c);
        (Ra || yd) &&
          setTimeout(function () {
            he(a, b, c);
          }, 0);
      }
      function he(a, b, c) {
        b = b.value;
        c = a.multiple;
        if (!c || Array.isArray(b)) {
          for (var f, d, e = 0, k = a.options.length; e < k; e++)
            if (((d = a.options[e]), c))
              (f = -1 < E(b, Db(d))), d.selected !== f && (d.selected = f);
            else if (G(Db(d), b))
              return void (a.selectedIndex !== e && (a.selectedIndex = e));
          c || (a.selectedIndex = -1);
        }
      }
      function ie(a, b) {
        return b.every(function (b) {
          return !G(b, a);
        });
      }
      function Db(a) {
        return "_value" in a ? a._value : a.value;
      }
      function Sf(a) {
        a.target.composing = !0;
      }
      function je(a) {
        a.target.composing &&
          ((a.target.composing = !1), wc(a.target, "input"));
      }
      function wc(a, b) {
        var c = document.createEvent("HTMLEvents");
        c.initEvent(b, !0, !0);
        a.dispatchEvent(c);
      }
      function xc(a) {
        return !a.componentInstance || (a.data && a.data.transition)
          ? a
          : xc(a.componentInstance._vnode);
      }
      function yc(a) {
        var b = a && a.componentOptions;
        return b && b.Ctor.options.abstract ? yc(Vc(b.children)) : a;
      }
      function ke(a) {
        var b = {},
          c = a.$options,
          f;
        for (f in c.propsData) b[f] = a[f];
        a = c._parentListeners;
        for (var d in a) b[Z(d)] = a[d];
        return b;
      }
      function le(a, b) {
        if (/\d-keep-alive$/.test(b.tag))
          return a("keep-alive", { props: b.componentOptions.propsData });
      }
      function Tf(a) {
        a.elm._moveCb && a.elm._moveCb();
        a.elm._enterCb && a.elm._enterCb();
      }
      function Uf(a) {
        a.data.newPos = a.elm.getBoundingClientRect();
      }
      function Vf(a) {
        var b = a.data.pos,
          c = a.data.newPos,
          f = b.left - c.left;
        b = b.top - c.top;
        if (f || b)
          (a.data.moved = !0),
            (a = a.elm.style),
            (a.transform = a.WebkitTransform =
              "translate(" + f + "px," + b + "px)"),
            (a.transitionDuration = "0s");
      }
      function Wf(a, b) {
        return a.replace(b ? Xf : Yf, function (a) {
          return Zf[a];
        });
      }
      function zc(a, b, c) {
        for (var f = {}, d = 0, e = b.length; d < e; d++)
          f[b[d].name] = b[d].value;
        return {
          type: 1,
          tag: a,
          attrsList: b,
          attrsMap: f,
          rawAttrsMap: {},
          parent: c,
          children: [],
        };
      }
      function $f(a, b) {
        function c(a) {
          if (
            (f(a),
            l || a.processed || (a = Eb(a, b)),
            k.length ||
              a === d ||
              (d.if &&
                (a.elseif || a.else) &&
                cb(d, { exp: a.elseif, block: a })),
            e && !a.forbidden)
          )
            if (a.elseif || a.else) {
              var c = a;
              (g = (function (a) {
                for (var b = a.length; b--; ) {
                  if (1 === a[b].type) return a[b];
                  a.pop();
                }
              })(e.children)) &&
                g.if &&
                cb(g, { exp: c.elseif, block: c });
            } else
              a.slotScope &&
                ((c = a.slotTarget || '"default"'),
                ((e.scopedSlots || (e.scopedSlots = {}))[c] = a)),
                e.children.push(a),
                (a.parent = e);
          var g;
          a.children = a.children.filter(function (a) {
            return !a.slotScope;
          });
          f(a);
          a.pre && (l = !1);
          Ac(a.tag) && (m = !1);
          for (c = 0; c < Bc.length; c++) Bc[c](a, b);
        }
        function f(a) {
          if (!m)
            for (
              var b;
              (b = a.children[a.children.length - 1]) &&
              3 === b.type &&
              " " === b.text;

            )
              a.children.pop();
        }
        me = b.warn || Dd;
        Ac = b.isPreTag || la;
        Cc = b.mustUseProp || la;
        ne = b.getTagNamespace || la;
        Dc = hb(b.modules, "transformNode");
        Ec = hb(b.modules, "preTransformNode");
        Bc = hb(b.modules, "postTransformNode");
        Fc = b.delimiters;
        var d,
          e,
          k = [],
          g = !1 !== b.preserveWhitespace,
          h = b.whitespace,
          l = !1,
          m = !1;
        return (
          (function (a, b) {
            function c(b) {
              l += b;
              a = a.substring(b);
            }
            function f() {
              var b = a.match(oe);
              if (b) {
                var f,
                  d = { tagName: b[1], attrs: [], start: l };
                for (
                  c(b[0].length);
                  !(b = a.match(ag)) && (f = a.match(bg) || a.match(cg));

                )
                  (f.start = l), c(f[0].length), (f.end = l), d.attrs.push(f);
                if (b)
                  return (d.unarySlash = b[1]), c(b[0].length), (d.end = l), d;
              }
            }
            function d(a) {
              var c = a.tagName,
                f = a.unarySlash;
              h && ("p" === g && dg(c) && e(g), D(c) && g === c && e(c));
              f = w(c) || !!f;
              for (var d = a.attrs.length, k = Array(d), l = 0; l < d; l++) {
                var m = a.attrs[l];
                k[l] = {
                  name: m[1],
                  value: Wf(
                    m[3] || m[4] || m[5] || "",
                    "a" === c && "href" === m[1]
                      ? b.shouldDecodeNewlinesForHref
                      : b.shouldDecodeNewlines
                  ),
                };
              }
              f ||
                (q.push({
                  tag: c,
                  lowerCasedTag: c.toLowerCase(),
                  attrs: k,
                  start: a.start,
                  end: a.end,
                }),
                (g = c));
              b.start && b.start(c, k, f, a.start, a.end);
            }
            function e(a, c, f) {
              var d;
              if ((null == c && (c = l), null == f && (f = l), a)) {
                var e = a.toLowerCase();
                for (d = q.length - 1; 0 <= d && q[d].lowerCasedTag !== e; d--);
              } else d = 0;
              if (0 <= d) {
                for (a = q.length - 1; a >= d; a--)
                  b.end && b.end(q[a].tag, c, f);
                g = (q.length = d) && q[d - 1].tag;
              } else
                "br" === e
                  ? b.start && b.start(a, [], !0, c, f)
                  : "p" === e &&
                    (b.start && b.start(a, [], !1, c, f),
                    b.end && b.end(a, c, f));
            }
            for (
              var k,
                g,
                q = [],
                h = b.expectHTML,
                w = b.isUnaryTag || la,
                D = b.canBeLeftOpenTag || la,
                l = 0;
              a;

            ) {
              if (((k = a), g && pe(g))) {
                var m = 0,
                  n = g.toLowerCase(),
                  p =
                    qe[n] ||
                    (qe[n] = new RegExp(
                      "([\\s\\S]*?)(\x3c/" + n + "[^\x3e]*\x3e)",
                      "i"
                    ));
                p = a.replace(p, function (a, c, f) {
                  return (
                    (m = f.length),
                    pe(n) ||
                      "noscript" === n ||
                      (c = c
                        .replace(/<!\--([\s\S]*?)--\x3e/g, "$1")
                        .replace(/<!\[CDATA\[([\s\S]*?)]]\x3e/g, "$1")),
                    re(n, c) && (c = c.slice(1)),
                    b.chars && b.chars(c),
                    ""
                  );
                });
                l += a.length - p.length;
                a = p;
                e(n, l - m, l);
              } else {
                p = a.indexOf("\x3c");
                if (0 === p) {
                  if (se.test(a)) {
                    var C = a.indexOf("--\x3e");
                    if (0 <= C) {
                      b.shouldKeepComment &&
                        b.comment(a.substring(4, C), l, l + C + 3);
                      c(C + 3);
                      continue;
                    }
                  }
                  if (te.test(a) && ((C = a.indexOf("]\x3e")), 0 <= C)) {
                    c(C + 2);
                    continue;
                  }
                  if ((C = a.match(eg))) {
                    c(C[0].length);
                    continue;
                  }
                  if ((C = a.match(ue))) {
                    k = l;
                    c(C[0].length);
                    e(C[1], k, l);
                    continue;
                  }
                  if ((C = f())) {
                    d(C);
                    re(C.tagName, a) && c(1);
                    continue;
                  }
                }
                var r = (C = void 0),
                  sa = void 0;
                if (0 <= p) {
                  for (
                    r = a.slice(p);
                    !(
                      ue.test(r) ||
                      oe.test(r) ||
                      se.test(r) ||
                      te.test(r) ||
                      0 > (sa = r.indexOf("\x3c", 1))
                    );

                  )
                    (p += sa), (r = a.slice(p));
                  C = a.substring(0, p);
                }
                0 > p && (C = a);
                C && c(C.length);
                b.chars && C && b.chars(C, l - C.length, l);
              }
              if (a === k) {
                b.chars && b.chars(a);
                break;
              }
            }
            e();
          })(a, {
            warn: me,
            expectHTML: b.expectHTML,
            isUnaryTag: b.isUnaryTag,
            canBeLeftOpenTag: b.canBeLeftOpenTag,
            shouldDecodeNewlines: b.shouldDecodeNewlines,
            shouldDecodeNewlinesForHref: b.shouldDecodeNewlinesForHref,
            shouldKeepComment: b.comments,
            outputSourceRange: b.outputSourceRange,
            start: function (a, f, g, q) {
              q = (e && e.ns) || ne(a);
              Ra &&
                "svg" === q &&
                (f = (function (a) {
                  for (var b = [], c = 0; c < a.length; c++) {
                    var f = a[c];
                    fg.test(f.name) ||
                      ((f.name = f.name.replace(gg, "")), b.push(f));
                  }
                  return b;
                })(f));
              var h;
              a = zc(a, f, e);
              q && (a.ns = q);
              ("style" !== (h = a).tag &&
                ("script" !== h.tag ||
                  (h.attrsMap.type &&
                    "text/javascript" !== h.attrsMap.type))) ||
                fb() ||
                (a.forbidden = !0);
              for (h = 0; h < Ec.length; h++) a = Ec[h](a, b) || a;
              l ||
                (!(function (a) {
                  null != N(a, "v-pre") && (a.pre = !0);
                })(a),
                a.pre && (l = !0));
              Ac(a.tag) && (m = !0);
              l
                ? (function (a) {
                    var b = a.attrsList,
                      c = b.length;
                    if (c) {
                      a = a.attrs = Array(c);
                      for (var f = 0; f < c; f++)
                        (a[f] = {
                          name: b[f].name,
                          value: JSON.stringify(b[f].value),
                        }),
                          null != b[f].start &&
                            ((a[f].start = b[f].start), (a[f].end = b[f].end));
                    } else a.pre || (a.plain = !0);
                  })(a)
                : a.processed ||
                  (ve(a),
                  (function (a) {
                    var b = N(a, "v-if");
                    b
                      ? ((a.if = b), cb(a, { exp: b, block: a }))
                      : (null != N(a, "v-else") && (a.else = !0),
                        (b = N(a, "v-else-if")) && (a.elseif = b));
                  })(a),
                  (function (a) {
                    null != N(a, "v-once") && (a.once = !0);
                  })(a));
              d || (d = a);
              g ? c(a) : ((e = a), k.push(a));
            },
            end: function (a, b, f) {
              a = k[k.length - 1];
              --k.length;
              e = k[k.length - 1];
              c(a);
            },
            chars: function (a, b, c) {
              if (
                e &&
                (!Ra || "textarea" !== e.tag || e.attrsMap.placeholder !== a)
              ) {
                var f, d;
                b = e.children;
                if (
                  (a =
                    m || a.trim()
                      ? "script" === (f = e).tag || "style" === f.tag
                        ? a
                        : hg(a)
                      : b.length
                      ? h
                        ? "condense" === h && ig.test(a)
                          ? ""
                          : " "
                        : g
                        ? " "
                        : ""
                      : "")
                ) {
                  "condense" === h && (a = a.replace(jg, " "));
                  if ((f = !l && " " !== a)) {
                    var k;
                    var q = a;
                    f = Fc ? kg(Fc) : lg;
                    if (f.test(q)) {
                      for (
                        var w, D = [], n = [], p = (f.lastIndex = 0);
                        (c = f.exec(q));

                      )
                        (k = c.index) > p &&
                          (n.push((w = q.slice(p, k))),
                          D.push(JSON.stringify(w))),
                          (p = jc(c[1].trim())),
                          D.push("_s(" + p + ")"),
                          n.push({ "@binding": p }),
                          (p = k + c[0].length);
                      k =
                        (p < q.length &&
                          (n.push((w = q.slice(p))), D.push(JSON.stringify(w))),
                        { expression: D.join("+"), tokens: n });
                    } else k = void 0;
                    f = q = k;
                  }
                  f
                    ? (d = {
                        type: 2,
                        expression: q.expression,
                        tokens: q.tokens,
                        text: a,
                      })
                    : (" " === a && b.length && " " === b[b.length - 1].text) ||
                      (d = { type: 3, text: a });
                  d && b.push(d);
                }
              }
            },
            comment: function (a, b, c) {
              e &&
                ((a = { type: 3, text: a, isComment: !0 }),
                0,
                e.children.push(a));
            },
          }),
          d
        );
      }
      function Eb(a, b) {
        var c;
        !(function (a) {
          var b = da(a, "key");
          b && (a.key = b);
        })(a);
        a.plain = !a.key && !a.scopedSlots && !a.attrsList.length;
        (function (a) {
          var b = da(a, "ref");
          if (b) {
            a.ref = b;
            a: {
              for (b = a; b; ) {
                if (void 0 !== b.for) {
                  b = !0;
                  break a;
                }
                b = b.parent;
              }
              b = !1;
            }
            a.refInFor = b;
          }
        })(a);
        (function (a) {
          var b;
          "template" === a.tag
            ? ((b = N(a, "scope")), (a.slotScope = b || N(a, "slot-scope")))
            : (b = N(a, "slot-scope")) && (a.slotScope = b);
          (b = da(a, "slot")) &&
            ((a.slotTarget = '""' === b ? '"default"' : b),
            (a.slotTargetDynamic = !(
              !a.attrsMap[":slot"] && !a.attrsMap["v-bind:slot"]
            )),
            "template" === a.tag ||
              a.slotScope ||
              kc(
                a,
                "slot",
                b,
                (function (a, b) {
                  return (
                    a.rawAttrsMap[":" + b] ||
                    a.rawAttrsMap["v-bind:" + b] ||
                    a.rawAttrsMap[b]
                  );
                })(a, "slot")
              ));
          if ("template" === a.tag) {
            if ((b = Ed(a, Gc))) {
              0;
              var c = we(b),
                f = c.dynamic;
              a.slotTarget = c.name;
              a.slotTargetDynamic = f;
              a.slotScope = b.value || "_";
            }
          } else if ((b = Ed(a, Gc))) {
            0;
            f = a.scopedSlots || (a.scopedSlots = {});
            var d = we(b);
            c = d.name;
            d = d.dynamic;
            f = f[c] = zc("template", [], a);
            f.slotTarget = c;
            f.slotTargetDynamic = d;
            f.children = a.children.filter(function (a) {
              return !a.slotScope;
            });
            f.slotScope = b.value || "_";
            a.children = [];
            a.plain = !1;
          }
        })(a);
        "slot" === (c = a).tag && (c.slotName = da(c, "name"));
        (function (a) {
          var b;
          (b = da(a, "is")) && (a.component = b);
          null != N(a, "inline-template") && (a.inlineTemplate = !0);
        })(a);
        for (c = 0; c < Dc.length; c++) a = Dc[c](a, b) || a;
        return (
          (function (a) {
            var b,
              c,
              f,
              d,
              e,
              k,
              g,
              q = a.attrsList;
            var h = 0;
            for (b = q.length; h < b; h++)
              if (((c = f = q[h].name), (d = q[h].value), Hc.test(c)))
                if (
                  ((a.hasBindings = !0),
                  (e = mg(c.replace(Hc, ""))) && (c = c.replace(xe, "")),
                  ye.test(c))
                )
                  (c = c.replace(ye, "")),
                    (d = jc(d)),
                    (g = Fb.test(c)) && (c = c.slice(1, -1)),
                    e &&
                      (e.prop &&
                        !g &&
                        "innerHtml" === (c = Z(c)) &&
                        (c = "innerHTML"),
                      e.camel && !g && (c = Z(c)),
                      e.sync &&
                        ((k = Da(d, "$event")),
                        g
                          ? va(
                              a,
                              '"update:"+(' + c + ")",
                              k,
                              null,
                              !1,
                              0,
                              q[h],
                              !0
                            )
                          : (va(a, "update:" + Z(c), k, null, !1, 0, q[h]),
                            Ya(c) !== Z(c) &&
                              va(a, "update:" + Ya(c), k, null, !1, 0, q[h])))),
                    (e && e.prop) ||
                    (!a.component && Cc(a.tag, a.attrsMap.type, c))
                      ? Sa(a, c, d, q[h], g)
                      : kc(a, c, d, q[h], g);
                else if (ze.test(c))
                  (c = c.replace(ze, "")),
                    (g = Fb.test(c)) && (c = c.slice(1, -1)),
                    va(a, c, d, e, !1, 0, q[h], g);
                else {
                  var w = (c = c.replace(Hc, "")).match(ng),
                    l = w && w[1];
                  g = !1;
                  l &&
                    ((c = c.slice(0, -(l.length + 1))),
                    Fb.test(l) && ((l = l.slice(1, -1)), (g = !0)));
                  w = a;
                  var m = c,
                    n = q[h];
                  (w.directives || (w.directives = [])).push(
                    ib(
                      {
                        name: m,
                        rawName: f,
                        value: d,
                        arg: l,
                        isDynamicArg: g,
                        modifiers: e,
                      },
                      n
                    )
                  );
                  w.plain = !1;
                }
              else
                kc(a, c, JSON.stringify(d), q[h]),
                  !a.component &&
                    "muted" === c &&
                    Cc(a.tag, a.attrsMap.type, c) &&
                    Sa(a, c, "true", q[h]);
          })(a),
          a
        );
      }
      function ve(a) {
        var b;
        if ((b = N(a, "v-for"))) {
          var c = b.match(og);
          if (c) {
            b = {};
            b.for = c[2].trim();
            c = c[1].trim().replace(pg, "");
            var f = c.match(Ae);
            f
              ? ((b.alias = c.replace(Ae, "").trim()),
                (b.iterator1 = f[1].trim()),
                f[2] && (b.iterator2 = f[2].trim()))
              : (b.alias = c);
          } else b = void 0;
          b && x(a, b);
        }
      }
      function cb(a, b) {
        a.ifConditions || (a.ifConditions = []);
        a.ifConditions.push(b);
      }
      function we(a) {
        var b = a.name.replace(Gc, "");
        return (
          b || ("#" !== a.name[0] && (b = "default")),
          Fb.test(b)
            ? { name: b.slice(1, -1), dynamic: !0 }
            : { name: '"' + b + '"', dynamic: !1 }
        );
      }
      function mg(a) {
        if ((a = a.match(xe))) {
          var b = {};
          return (
            a.forEach(function (a) {
              b[a.slice(1)] = !0;
            }),
            b
          );
        }
      }
      function Ic(a) {
        return zc(a.tag, a.attrsList.slice(), a.parent);
      }
      function Jc(a) {
        if (2 === a.type) var b = !1;
        else if (3 === a.type) b = !0;
        else {
          if ((b = !a.pre)) {
            if (
              !(b = a.hasBindings || a.if || a.for || qg(a.tag) || !Kc(a.tag))
            )
              a: {
                for (b = a; b.parent && "template" === (b = b.parent).tag; )
                  if (b.for) {
                    b = !0;
                    break a;
                  }
                b = !1;
              }
            b = b || !Object.keys(a).every(Be);
          }
          b = !b;
        }
        if (((a.static = b), 1 === a.type))
          if (
            Kc(a.tag) ||
            "slot" === a.tag ||
            null != a.attrsMap["inline-template"]
          ) {
            b = 0;
            for (var c = a.children.length; b < c; b++) {
              var f = a.children[b];
              Jc(f);
              f.static || (a.static = !1);
            }
            if (a.ifConditions)
              for (b = 1, c = a.ifConditions.length; b < c; b++)
                (f = a.ifConditions[b].block),
                  Jc(f),
                  f.static || (a.static = !1);
          }
      }
      function Lc(a, b) {
        if (1 === a.type) {
          if (
            ((a.static || a.once) && (a.staticInFor = b),
            a.static &&
              a.children.length &&
              (1 !== a.children.length || 3 !== a.children[0].type))
          )
            return void (a.staticRoot = !0);
          if (((a.staticRoot = !1), a.children))
            for (var c = 0, f = a.children.length; c < f; c++)
              Lc(a.children[c], b || !!a.for);
          if (a.ifConditions)
            for (c = 1, f = a.ifConditions.length; c < f; c++)
              Lc(a.ifConditions[c].block, b);
        }
      }
      function Ce(a, b) {
        b = b ? "nativeOn:" : "on:";
        var c = "",
          f = "",
          d;
        for (d in a) {
          var e = De(a[d]);
          a[d] && a[d].dynamic
            ? (f += d + "," + e + ",")
            : (c += '"' + d + '":' + e + ",");
        }
        return (
          (c = "{" + c.slice(0, -1) + "}"),
          f ? b + "_d(" + c + ",[" + f.slice(0, -1) + "])" : b + c
        );
      }
      function De(a) {
        if (!a) return "function(){}";
        if (Array.isArray(a))
          return (
            "[" +
            a
              .map(function (a) {
                return De(a);
              })
              .join(",") +
            "]"
          );
        var b = Ee.test(a.value),
          c = rg.test(a.value),
          f = Ee.test(a.value.replace(sg, ""));
        if (a.modifiers) {
          var d = "",
            e = "",
            g = [],
            h;
          for (h in a.modifiers)
            if (Fe[h]) (e += Fe[h]), Ge[h] && g.push(h);
            else if ("exact" === h) {
              var l = a.modifiers;
              e += xa(
                ["ctrl", "shift", "alt", "meta"]
                  .filter(function (a) {
                    return !l[a];
                  })
                  .map(function (a) {
                    return "$event." + a + "Key";
                  })
                  .join("||")
              );
            } else g.push(h);
          return (
            g.length &&
              (d +=
                "if(('keyCode' in $event)\x26\x26" +
                g.map(tg).join("\x26\x26") +
                ")return null;"),
            e && (d += e),
            "function($event){" +
              d +
              (b
                ? "return " + a.value + "($event)"
                : c
                ? "return (" + a.value + ")($event)"
                : f
                ? "return " + a.value
                : a.value) +
              "}"
          );
        }
        return b || c
          ? a.value
          : "function($event){" + (f ? "return " + a.value : a.value) + "}";
      }
      function tg(a) {
        var b = parseInt(a, 10);
        if (b) return "$event.keyCode!\x3d\x3d" + b;
        b = Ge[a];
        var c = ug[a];
        return (
          "_k($event.keyCode," +
          JSON.stringify(a) +
          "," +
          JSON.stringify(b) +
          ",$event.key," +
          JSON.stringify(c) +
          ")"
        );
      }
      function He(a, b) {
        b = new vg(b);
        return {
          render: "with(this){return " + (a ? ya(a, b) : '_c("div")') + "}",
          staticRenderFns: b.staticRenderFns,
        };
      }
      function ya(a, b) {
        if (
          (a.parent && (a.pre = a.pre || a.parent.pre),
          a.staticRoot && !a.staticProcessed)
        )
          return Ie(a, b);
        if (a.once && !a.onceProcessed) return Je(a, b);
        if (a.for && !a.forProcessed) return Ke(a, b);
        if (a.if && !a.ifProcessed) return Mc(a, b);
        if ("template" !== a.tag || a.slotTarget || b.pre) {
          if ("slot" === a.tag)
            return (function (a, b) {
              var c = a.slotName || '"default"';
              b = mb(a, b);
              c = "_t(" + c + (b ? "," + b : "");
              var f =
                a.attrs &&
                "{" +
                  a.attrs
                    .map(function (a) {
                      return Z(a.name) + ":" + a.value;
                    })
                    .join(",") +
                  "}";
              a = a.attrsMap["v-bind"];
              (!f && !a) || b || (c += ",null");
              f && (c += "," + f);
              a && (c += (f ? "" : ",null") + "," + a);
              return c + ")";
            })(a, b);
          if (a.component)
            var c = (function (a, b, c) {
              var f = b.inlineTemplate ? null : mb(b, c, !0);
              return "_c(" + a + "," + Le(b, c) + (f ? "," + f : "") + ")";
            })(a.component, a, b);
          else {
            (!a.plain || (a.pre && b.maybeComponent(a))) && (c = Le(a, b));
            var f = a.inlineTemplate ? null : mb(a, b, !0);
            c =
              "_c('" +
              a.tag +
              "'" +
              (c ? "," + c : "") +
              (f ? "," + f : "") +
              ")";
          }
          for (f = 0; f < b.transforms.length; f++) c = b.transforms[f](a, c);
          return c;
        }
        return mb(a, b) || "void 0";
      }
      function Ie(a, b) {
        a.staticProcessed = !0;
        var c = b.pre;
        return (
          a.pre && (b.pre = a.pre),
          b.staticRenderFns.push("with(this){return " + ya(a, b) + "}"),
          (b.pre = c),
          "_m(" +
            (b.staticRenderFns.length - 1) +
            (a.staticInFor ? ",true" : "") +
            ")"
        );
      }
      function Je(a, b) {
        if (((a.onceProcessed = !0), a.if && !a.ifProcessed)) return Mc(a, b);
        if (a.staticInFor) {
          for (var c = "", f = a.parent; f; ) {
            if (f.for) {
              c = f.key;
              break;
            }
            f = f.parent;
          }
          return c
            ? "_o(" + ya(a, b) + "," + b.onceId++ + "," + c + ")"
            : ya(a, b);
        }
        return Ie(a, b);
      }
      function Mc(a, b, c, d) {
        return (a.ifProcessed = !0), Me(a.ifConditions.slice(), b, c, d);
      }
      function Me(a, b, c, d) {
        function f(a) {
          return c ? c(a, b) : a.once ? Je(a, b) : ya(a, b);
        }
        if (!a.length) return d || "_e()";
        var e = a.shift();
        return e.exp
          ? "(" + e.exp + ")?" + f(e.block) + ":" + Me(a, b, c, d)
          : "" + f(e.block);
      }
      function Ke(a, b, c, d) {
        var f = a.for,
          e = a.alias,
          k = a.iterator1 ? "," + a.iterator1 : "",
          g = a.iterator2 ? "," + a.iterator2 : "";
        return (
          (a.forProcessed = !0),
          (d || "_l") +
            "((" +
            f +
            "),function(" +
            e +
            k +
            g +
            "){return " +
            (c || ya)(a, b) +
            "})"
        );
      }
      function Le(a, b) {
        var c = "{",
          f = (function (a, b) {
            var c = a.directives;
            if (c) {
              var f,
                d = "directives:[",
                e = !1;
              var k = 0;
              for (f = c.length; k < f; k++) {
                var g = c[k];
                var h = !0;
                var q = b.directives[g.name];
                q && (h = !!q(a, g, b.warn));
                h &&
                  ((e = !0),
                  (d +=
                    '{name:"' +
                    g.name +
                    '",rawName:"' +
                    g.rawName +
                    '"' +
                    (g.value
                      ? ",value:(" +
                        g.value +
                        "),expression:" +
                        JSON.stringify(g.value)
                      : "") +
                    (g.arg
                      ? ",arg:" + (g.isDynamicArg ? g.arg : '"' + g.arg + '"')
                      : "") +
                    (g.modifiers
                      ? ",modifiers:" + JSON.stringify(g.modifiers)
                      : "") +
                    "},"));
              }
              if (e) return d.slice(0, -1) + "]";
            }
          })(a, b);
        f && (c += f + ",");
        a.key && (c += "key:" + a.key + ",");
        a.ref && (c += "ref:" + a.ref + ",");
        a.refInFor && (c += "refInFor:true,");
        a.pre && (c += "pre:true,");
        a.component && (c += 'tag:"' + a.tag + '",');
        for (f = 0; f < b.dataGenFns.length; f++) c += b.dataGenFns[f](a);
        (a.attrs && (c += "attrs:" + Nc(a.attrs) + ","),
        a.props && (c += "domProps:" + Nc(a.props) + ","),
        a.events && (c += Ce(a.events, !1) + ","),
        a.nativeEvents && (c += Ce(a.nativeEvents, !0) + ","),
        a.slotTarget && !a.slotScope && (c += "slot:" + a.slotTarget + ","),
        a.scopedSlots &&
          (c +=
            (function (a, b) {
              var c = Object.keys(a).some(function (b) {
                b = a[b];
                return b.slotTargetDynamic || b.if || b.for;
              });
              return (
                "scopedSlots:_u([" +
                Object.keys(a)
                  .map(function (c) {
                    return Oc(a[c], b);
                  })
                  .join(",") +
                "]" +
                (c ? ",true" : "") +
                ")"
              );
            })(a.scopedSlots, b) + ","),
        a.model &&
          (c +=
            "model:{value:" +
            a.model.value +
            ",callback:" +
            a.model.callback +
            ",expression:" +
            a.model.expression +
            "},"),
        a.inlineTemplate) &&
          (b = (function (a, b) {
            a = a.children[0];
            0;
            if (a && 1 === a.type)
              return (
                (b = He(a, b.options)),
                "inlineTemplate:{render:function(){" +
                  b.render +
                  "},staticRenderFns:[" +
                  b.staticRenderFns
                    .map(function (a) {
                      return "function(){" + a + "}";
                    })
                    .join(",") +
                  "]}"
              );
          })(a, b)) &&
          (c += b + ",");
        return (
          (c = c.replace(/,$/, "") + "}"),
          a.dynamicAttrs &&
            (c = "_b(" + c + ',"' + a.tag + '",' + Nc(a.dynamicAttrs) + ")"),
          a.wrapData && (c = a.wrapData(c)),
          a.wrapListeners && (c = a.wrapListeners(c)),
          c
        );
      }
      function Oc(a, b) {
        if (a.if && !a.ifProcessed) return Mc(a, b, Oc, "null");
        if (a.for && !a.forProcessed) return Ke(a, b, Oc);
        b =
          "function(" +
          String(a.slotScope) +
          "){return " +
          ("template" === a.tag ? mb(a, b) || "undefined" : ya(a, b)) +
          "}";
        return "{key:" + (a.slotTarget || '"default"') + ",fn:" + b + "}";
      }
      function mb(a, b, c, d, e) {
        a = a.children;
        if (a.length) {
          var f = a[0];
          if (
            1 === a.length &&
            f.for &&
            "template" !== f.tag &&
            "slot" !== f.tag
          )
            return (
              (e = c ? (b.maybeComponent(f) ? ",1" : ",0") : ""),
              "" + (d || ya)(f, b) + e
            );
          d = c
            ? (function (a, b) {
                for (var c = 0, f = 0; f < a.length; f++) {
                  var d = a[f];
                  if (1 === d.type) {
                    if (
                      Ne(d) ||
                      (d.ifConditions &&
                        d.ifConditions.some(function (a) {
                          return Ne(a.block);
                        }))
                    ) {
                      c = 2;
                      break;
                    }
                    (b(d) ||
                      (d.ifConditions &&
                        d.ifConditions.some(function (a) {
                          return b(a.block);
                        }))) &&
                      (c = 1);
                  }
                }
                return c;
              })(a, b.maybeComponent)
            : 0;
          var g = e || wg;
          return (
            "[" +
            a
              .map(function (a) {
                return g(a, b);
              })
              .join(",") +
            "]" +
            (d ? "," + d : "")
          );
        }
      }
      function Ne(a) {
        return void 0 !== a.for || "template" === a.tag || "slot" === a.tag;
      }
      function wg(a, b) {
        return 1 === a.type
          ? ya(a, b)
          : 3 === a.type && a.isComment
          ? "_e(" + JSON.stringify(a.text) + ")"
          : "_v(" +
            (2 === a.type ? a.expression : Oe(JSON.stringify(a.text))) +
            ")";
      }
      function Nc(a) {
        for (var b = "", c = "", f = 0; f < a.length; f++) {
          var d = a[f],
            e = Oe(d.value);
          d.dynamic
            ? (c += d.name + "," + e + ",")
            : (b += '"' + d.name + '":' + e + ",");
        }
        return (
          (b = "{" + b.slice(0, -1) + "}"),
          c ? "_d(" + b + ",[" + c.slice(0, -1) + "])" : b
        );
      }
      function Oe(a) {
        return a.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
      }
      function Pe(a, b) {
        try {
          return new Function(a);
        } catch (q) {
          return b.push({ err: q, code: a }), B;
        }
      }
      function xg(a) {
        var b = Object.create(null);
        return function (c, f, d) {
          (f = x({}, f)).warn;
          delete f.warn;
          d = f.delimiters ? String(f.delimiters) + c : c;
          if (b[d]) return b[d];
          c = a(c, f);
          f = {};
          var e = [];
          return (
            (f.render = Pe(c.render, e)),
            (f.staticRenderFns = c.staticRenderFns.map(function (a) {
              return Pe(a, e);
            })),
            (b[d] = f)
          );
        };
      }
      function Qe(a) {
        return (
          ((Pc = Pc || document.createElement("div")).innerHTML = a
            ? '\x3ca href\x3d"\n"/\x3e'
            : '\x3cdiv a\x3d"\n"/\x3e'),
          0 < Pc.innerHTML.indexOf("\x26#10;")
        );
      }
      var ka = Object.freeze({}),
        Mb = Object.prototype.toString,
        qg = p("slot,component", !0),
        Af = p("key,ref,slot,slot-scope,is"),
        lf = Object.prototype.hasOwnProperty,
        yg = /-(\w)/g,
        Z = t(function (a) {
          return a.replace(yg, function (a, b) {
            return b ? b.toUpperCase() : "";
          });
        }),
        of = t(function (a) {
          return a.charAt(0).toUpperCase() + a.slice(1);
        }),
        zg = /\B([A-Z])/g,
        Ya = t(function (a) {
          return a.replace(zg, "-$1").toLowerCase();
        }),
        rf = Function.prototype.bind
          ? function (a, b) {
              return a.bind(b);
            }
          : function (a, b) {
              function c(c) {
                var f = arguments.length;
                return f
                  ? 1 < f
                    ? a.apply(b, arguments)
                    : a.call(b, c)
                  : a.call(b);
              }
              return (c._length = a.length), c;
            },
        la = function (a, b, c) {
          return !1;
        },
        id = function (a) {
          return a;
        },
        yb = ["component", "directive", "filter"],
        Re =
          "beforeCreate created beforeMount mounted beforeUpdate updated beforeDestroy destroyed activated deactivated errorCaptured serverPrefetch".split(
            " "
          ),
        aa = {
          optionMergeStrategies: Object.create(null),
          silent: !1,
          productionTip: !1,
          devtools: !1,
          performance: !1,
          errorHandler: null,
          warnHandler: null,
          ignoredElements: [],
          keyCodes: Object.create(null),
          isReservedTag: la,
          isReservedAttr: la,
          isUnknownElement: la,
          getTagNamespace: B,
          parsePlatformTagName: id,
          mustUseProp: la,
          async: !0,
          _lifecycleHooks: Re,
        },
        Ag =
          /[^a-zA-Z\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd.$_\d]/,
        Qc,
        Bg = "__proto__" in {},
        Q = "undefined" != typeof window,
        tb = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
        Cg = tb && WXEnvironment.platform.toLowerCase(),
        V = Q && window.navigator.userAgent.toLowerCase(),
        Ra = V && /msie|trident/.test(V),
        ab = V && 0 < V.indexOf("msie 9.0"),
        yd = V && 0 < V.indexOf("edge/"),
        Dg =
          (V && V.indexOf("android"),
          (V && /iphone|ipad|ipod|ios/.test(V)) || "ios" === Cg),
        Wb = (V && /chrome\/\d+/.test(V), V && /phantomjs/.test(V), {}.watch),
        Id = !1;
      if (Q)
        try {
          var Se = {};
          Object.defineProperty(Se, "passive", {
            get: function () {
              Id = !0;
            },
          });
          window.addEventListener("test-passive", null, Se);
        } catch (f) {}
      var fb = function () {
          return (
            void 0 === Qc &&
              (Qc =
                !Q &&
                !tb &&
                void 0 !== a &&
                a.process &&
                "server" === a.process.env.VUE_ENV),
            Qc
          );
        },
        vb = Q && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
        sb =
          "undefined" != typeof Symbol &&
          L(Symbol) &&
          "undefined" != typeof Reflect &&
          L(Reflect.ownKeys);
      var Rc =
        "undefined" != typeof Set && L(Set)
          ? Set
          : (function () {
              function a() {
                this.set = Object.create(null);
              }
              return (
                (a.prototype.has = function (a) {
                  return !0 === this.set[a];
                }),
                (a.prototype.add = function (a) {
                  this.set[a] = !0;
                }),
                (a.prototype.clear = function () {
                  this.set = Object.create(null);
                }),
                a
              );
            })();
      var Eg = 0,
        Y = function () {
          this.id = Eg++;
          this.subs = [];
        };
      Y.prototype.addSub = function (a) {
        this.subs.push(a);
      };
      Y.prototype.removeSub = function (a) {
        v(this.subs, a);
      };
      Y.prototype.depend = function () {
        Y.target && Y.target.addDep(this);
      };
      Y.prototype.notify = function () {
        for (var a = this.subs.slice(), b = 0, c = a.length; b < c; b++)
          a[b].update();
      };
      Y.target = null;
      var qb = [],
        T = function (a, b, c, d, e, g, h, l) {
          this.tag = a;
          this.data = b;
          this.children = c;
          this.text = d;
          this.elm = e;
          this.ns = void 0;
          this.context = g;
          this.fnScopeId = this.fnOptions = this.fnContext = void 0;
          this.key = b && b.key;
          this.componentOptions = h;
          this.parent = this.componentInstance = void 0;
          this.isStatic = this.raw = !1;
          this.isRootInsert = !0;
          this.isOnce = this.isCloned = this.isComment = !1;
          this.asyncFactory = l;
          this.asyncMeta = void 0;
          this.isAsyncPlaceholder = !1;
        },
        Te = { child: { configurable: !0 } };
      Te.child.get = function () {
        return this.componentInstance;
      };
      Object.defineProperties(T.prototype, Te);
      var Oa = function (a) {
          void 0 === a && (a = "");
          var b = new T();
          return (b.text = a), (b.isComment = !0), b;
        },
        Ue = Array.prototype,
        Gb = Object.create(Ue);
      "push pop shift unshift splice sort reverse"
        .split(" ")
        .forEach(function (a) {
          var b = Ue[a];
          I(Gb, a, function () {
            for (var c = [], d = arguments.length; d--; ) c[d] = arguments[d];
            d = b.apply(this, c);
            var f = this.__ob__;
            switch (a) {
              case "push":
              case "unshift":
                var e = c;
                break;
              case "splice":
                e = c.slice(2);
            }
            return e && f.observeArray(e), f.dep.notify(), d;
          });
        });
      var Ve = Object.getOwnPropertyNames(Gb),
        oa = !0,
        rb = function (a) {
          this.value = a;
          this.dep = new Y();
          this.vmCount = 0;
          I(a, "__ob__", this);
          if (Array.isArray(a)) {
            if (Bg) a.__proto__ = Gb;
            else
              for (var b = 0, c = Ve.length; b < c; b++) {
                var d = Ve[b];
                I(a, d, Gb[d]);
              }
            this.observeArray(a);
          } else this.walk(a);
        };
      rb.prototype.walk = function (a) {
        for (var b = Object.keys(a), c = 0; c < b.length; c++) R(a, b[c]);
      };
      rb.prototype.observeArray = function (a) {
        for (var b = 0, c = a.length; b < c; b++) S(a[b]);
      };
      var pa = aa.optionMergeStrategies;
      pa.data = function (a, b, c) {
        return c ? ba(a, b, c) : b && "function" != typeof b ? a : ba(a, b);
      };
      Re.forEach(function (a) {
        pa[a] = Ha;
      });
      yb.forEach(function (a) {
        pa[a + "s"] = ra;
      });
      pa.watch = function (a, b, c, d) {
        if ((a === Wb && (a = void 0), b === Wb && (b = void 0), !b))
          return Object.create(a || null);
        if (!a) return b;
        c = {};
        for (var f in (x(c, a), b))
          (a = c[f]),
            (d = b[f]),
            a && !Array.isArray(a) && (a = [a]),
            (c[f] = a ? a.concat(d) : Array.isArray(d) ? d : [d]);
        return c;
      };
      pa.props =
        pa.methods =
        pa.inject =
        pa.computed =
          function (a, b, c, d) {
            if (!a) return b;
            c = Object.create(null);
            return x(c, a), b && x(c, b), c;
          };
      pa.provide = ba;
      var nf = function (a, b) {
          return void 0 === b ? a : b;
        },
        oc = !1,
        Ob = [],
        Nb = !1;
      if ("undefined" != typeof Promise && L(Promise)) {
        var Fg = Promise.resolve();
        var Pb = function () {
          Fg.then(La);
          Dg && setTimeout(B);
        };
        oc = !0;
      } else if (
        Ra ||
        "undefined" == typeof MutationObserver ||
        (!L(MutationObserver) &&
          "[object MutationObserverConstructor]" !==
            MutationObserver.toString())
      )
        Pb =
          void 0 !== c && L(c)
            ? function () {
                c(La);
              }
            : function () {
                setTimeout(La, 0);
              };
      else {
        var Hb = 1,
          Gg = new MutationObserver(La),
          We = document.createTextNode(String(Hb));
        Gg.observe(We, { characterData: !0 });
        Pb = function () {
          Hb = (Hb + 1) % 2;
          We.data = String(Hb);
        };
        oc = !0;
      }
      var $c = new Rc(),
        Ma,
        ad = t(function (a) {
          var b = "\x26" === a.charAt(0),
            c = "~" === (a = b ? a.slice(1) : a).charAt(0),
            d = "!" === (a = c ? a.slice(1) : a).charAt(0);
          return { name: d ? a.slice(1) : a, once: c, capture: d, passive: b };
        }),
        Na = null,
        ta = [],
        Tb = [],
        ub = {},
        Ub = !1,
        Sb = !1,
        Za = 0,
        dd = 0,
        Rb = Date.now;
      Q &&
        Rb() > document.createEvent("Event").timeStamp &&
        (Rb = function () {
          return performance.now();
        });
      var Hg = 0,
        ja = function (a, b, c, d, e) {
          this.vm = a;
          e && (a._watcher = this);
          a._watchers.push(this);
          d
            ? ((this.deep = !!d.deep),
              (this.user = !!d.user),
              (this.lazy = !!d.lazy),
              (this.sync = !!d.sync),
              (this.before = d.before))
            : (this.deep = this.user = this.lazy = this.sync = !1);
          this.cb = c;
          this.id = ++Hg;
          this.active = !0;
          this.dirty = this.lazy;
          this.deps = [];
          this.newDeps = [];
          this.depIds = new Rc();
          this.newDepIds = new Rc();
          this.expression = "";
          "function" == typeof b
            ? (this.getter = b)
            : ((this.getter = (function (a) {
                if (!Ag.test(a)) {
                  var b = a.split(".");
                  return function (a) {
                    for (var c = 0; c < b.length; c++) {
                      if (!a) return;
                      a = a[b[c]];
                    }
                    return a;
                  };
                }
              })(b)),
              this.getter || (this.getter = B));
          this.value = this.lazy ? void 0 : this.get();
        };
      ja.prototype.get = function () {
        ea(this);
        var a = this.vm;
        try {
          var b = this.getter.call(a, a);
        } catch (q) {
          if (!this.user) throw q;
          X(q, a, 'getter for watcher "' + this.expression + '"');
        } finally {
          this.deep && O(b), Fa(), this.cleanupDeps();
        }
        return b;
      };
      ja.prototype.addDep = function (a) {
        var b = a.id;
        this.newDepIds.has(b) ||
          (this.newDepIds.add(b),
          this.newDeps.push(a),
          this.depIds.has(b) || a.addSub(this));
      };
      ja.prototype.cleanupDeps = function () {
        for (var a = this.deps.length; a--; ) {
          var b = this.deps[a];
          this.newDepIds.has(b.id) || b.removeSub(this);
        }
        a = this.depIds;
        this.depIds = this.newDepIds;
        this.newDepIds = a;
        this.newDepIds.clear();
        a = this.deps;
        this.deps = this.newDeps;
        this.newDeps = a;
        this.newDeps.length = 0;
      };
      ja.prototype.update = function () {
        if (this.lazy) this.dirty = !0;
        else if (this.sync) this.run();
        else {
          var a = this.id;
          if (null == ub[a]) {
            if (((ub[a] = !0), Sb)) {
              for (a = ta.length - 1; a > Za && ta[a].id > this.id; ) a--;
              ta.splice(a + 1, 0, this);
            } else ta.push(this);
            Ub || ((Ub = !0), Xa(pf));
          }
        }
      };
      ja.prototype.run = function () {
        if (this.active) {
          var a = this.get();
          if (a !== this.value || l(a) || this.deep) {
            var b = this.value;
            if (((this.value = a), this.user))
              try {
                this.cb.call(this.vm, a, b);
              } catch (q) {
                X(q, this.vm, 'callback for watcher "' + this.expression + '"');
              }
            else this.cb.call(this.vm, a, b);
          }
        }
      };
      ja.prototype.evaluate = function () {
        this.value = this.get();
        this.dirty = !1;
      };
      ja.prototype.depend = function () {
        for (var a = this.deps.length; a--; ) this.deps[a].depend();
      };
      ja.prototype.teardown = function () {
        if (this.active) {
          this.vm._isBeingDestroyed || v(this.vm._watchers, this);
          for (var a = this.deps.length; a--; ) this.deps[a].removeSub(this);
          this.active = !1;
        }
      };
      var Ca = { enumerable: !0, configurable: !0, get: B, set: B },
        sf = { lazy: !0 };
      ld(Zb.prototype);
      var ac = {
          init: function (a, b) {
            if (
              a.componentInstance &&
              !a.componentInstance._isDestroyed &&
              a.data.keepAlive
            )
              ac.prepatch(a, a);
            else {
              var c = { _isComponent: !0, _parentVnode: a, parent: Na };
              var d = a.data.inlineTemplate;
              null != d &&
                ((c.render = d.render),
                (c.staticRenderFns = d.staticRenderFns));
              c = new a.componentOptions.Ctor(c);
              (a.componentInstance = c).$mount(b ? a.elm : void 0, b);
            }
          },
          prepatch: function (a, b) {
            var c = b.componentOptions;
            a = b.componentInstance = a.componentInstance;
            var d = c.propsData,
              f = c.listeners;
            c = c.children;
            var e = !!(
              (b.data.scopedSlots && !b.data.scopedSlots.$stable) ||
              (a.$scopedSlots !== ka && !a.$scopedSlots.$stable)
            );
            e = !!(c || a.$options._renderChildren || e);
            if (
              ((a.$options._parentVnode = b),
              (a.$vnode = b),
              a._vnode && (a._vnode.parent = b),
              (a.$options._renderChildren = c),
              (a.$attrs = b.data.attrs || ka),
              (a.$listeners = f || ka),
              d && a.$options.props)
            ) {
              oa = !1;
              for (
                var g = a._props, k = a.$options._propKeys || [], h = 0;
                h < k.length;
                h++
              ) {
                var l = k[h];
                g[l] = Wa(l, a.$options.props, d, a);
              }
              oa = !0;
              a.$options.propsData = d;
            }
            f = f || ka;
            d = a.$options._parentListeners;
            a.$options._parentListeners = f;
            Ma = a;
            ca(f, d || {}, Wc, Xc, pb, a);
            Ma = void 0;
            e && ((a.$slots = Lb(c, b.context)), a.$forceUpdate());
            !0;
          },
          insert: function (a) {
            var b = a.context,
              c = a.componentInstance;
            c._isMounted || ((c._isMounted = !0), ia(c, "mounted"));
            a.data.keepAlive &&
              (b._isMounted ? ((c._inactive = !1), Tb.push(c)) : Qb(c, !0));
          },
          destroy: function (a) {
            var b = a.componentInstance;
            b._isDestroyed || (a.data.keepAlive ? cd(b, !0) : b.$destroy());
          },
        },
        od = Object.keys(ac),
        Hf = 1,
        pd = 2,
        Ig = 0;
      !(function (a) {
        a.prototype._init = function (a) {
          this._uid = Ig++;
          this._isVue = !0;
          a && a._isComponent
            ? (function (a, b) {
                a = a.$options = Object.create(a.constructor.options);
                var c = b._parentVnode;
                a.parent = b.parent;
                a._parentVnode = c;
                c = c.componentOptions;
                a.propsData = c.propsData;
                a._parentListeners = c.listeners;
                a._renderChildren = c.children;
                a._componentTag = c.tag;
                b.render &&
                  ((a.render = b.render),
                  (a.staticRenderFns = b.staticRenderFns));
              })(this, a)
            : (this.$options = J($b(this.constructor), a || {}, this));
          this._renderProxy = this;
          this._self = this;
          (function (a) {
            var b = a.$options,
              c = b.parent;
            if (c && !b.abstract) {
              for (; c.$options.abstract && c.$parent; ) c = c.$parent;
              c.$children.push(a);
            }
            a.$parent = c;
            a.$root = c ? c.$root : a;
            a.$children = [];
            a.$refs = {};
            a._watcher = null;
            a._inactive = null;
            a._directInactive = !1;
            a._isMounted = !1;
            a._isDestroyed = !1;
            a._isBeingDestroyed = !1;
          })(this);
          (function (a) {
            a._events = Object.create(null);
            a._hasHookEvent = !1;
            var b = a.$options._parentListeners;
            b && ((Ma = a), ca(b, {}, Wc, Xc, pb, a), (Ma = void 0));
          })(this);
          (function (a) {
            a._vnode = null;
            a._staticTrees = null;
            var b = a.$options,
              c = (a.$vnode = b._parentVnode);
            a.$slots = Lb(b._renderChildren, c && c.context);
            a.$scopedSlots = ka;
            a._c = function (b, c, d, f) {
              return wb(a, b, c, d, f, !1);
            };
            a.$createElement = function (b, c, d, f) {
              return wb(a, b, c, d, f, !0);
            };
            c = c && c.data;
            R(a, "$attrs", (c && c.attrs) || ka, null, !0);
            R(a, "$listeners", b._parentListeners || ka, null, !0);
          })(this);
          ia(this, "beforeCreate");
          (function (a) {
            var b = hd(a.$options.inject, a);
            b &&
              ((oa = !1),
              Object.keys(b).forEach(function (c) {
                R(a, c, b[c]);
              }),
              (oa = !0));
          })(this);
          qf(this);
          (function (a) {
            var b = a.$options.provide;
            b && (a._provided = "function" == typeof b ? b.call(a) : b);
          })(this);
          ia(this, "created");
          this.$options.el && this.$mount(this.$options.el);
        };
      })(K);
      (function (a) {
        Object.defineProperty(a.prototype, "$data", {
          get: function () {
            return this._data;
          },
        });
        Object.defineProperty(a.prototype, "$props", {
          get: function () {
            return this._props;
          },
        });
        a.prototype.$set = Ga;
        a.prototype.$delete = na;
        a.prototype.$watch = function (a, b, c) {
          if (h(b)) return Xb(this, a, b, c);
          (c = c || {}).user = !0;
          var d = new ja(this, a, b, c);
          if (c.immediate)
            try {
              b.call(this, d.value);
            } catch (C) {
              X(
                C,
                this,
                'callback for immediate watcher "' + d.expression + '"'
              );
            }
          return function () {
            d.teardown();
          };
        };
      })(K);
      (function (a) {
        var b = /^hook:/;
        a.prototype.$on = function (a, c) {
          if (Array.isArray(a))
            for (var d = 0, f = a.length; d < f; d++) this.$on(a[d], c);
          else
            (this._events[a] || (this._events[a] = [])).push(c),
              b.test(a) && (this._hasHookEvent = !0);
          return this;
        };
        a.prototype.$once = function (a, b) {
          function c() {
            d.$off(a, c);
            b.apply(d, arguments);
          }
          var d = this;
          return (c.fn = b), d.$on(a, c), d;
        };
        a.prototype.$off = function (a, b) {
          if (!arguments.length)
            return (this._events = Object.create(null)), this;
          if (Array.isArray(a)) {
            for (var c = 0, d = a.length; c < d; c++) this.$off(a[c], b);
            return this;
          }
          d = this._events[a];
          if (!d) return this;
          if (!b) return (this._events[a] = null), this;
          for (var f = d.length; f--; )
            if ((c = d[f]) === b || c.fn === b) {
              d.splice(f, 1);
              break;
            }
          return this;
        };
        a.prototype.$emit = function (a) {
          var b = this._events[a];
          if (b) {
            b = 1 < b.length ? z(b) : b;
            for (
              var c = z(arguments, 1),
                d = 'event handler for "' + a + '"',
                f = 0,
                e = b.length;
              f < e;
              f++
            )
              Ja(b[f], this, c, this, d);
          }
          return this;
        };
      })(K);
      (function (a) {
        a.prototype._update = function (a, b) {
          var c = this.$el,
            d = this._vnode,
            f = Zc(this);
          this._vnode = a;
          this.$el = d
            ? this.__patch__(d, a)
            : this.__patch__(this.$el, a, b, !1);
          f();
          c && (c.__vue__ = null);
          this.$el && (this.$el.__vue__ = this);
          this.$vnode &&
            this.$parent &&
            this.$vnode === this.$parent._vnode &&
            (this.$parent.$el = this.$el);
        };
        a.prototype.$forceUpdate = function () {
          this._watcher && this._watcher.update();
        };
        a.prototype.$destroy = function () {
          if (!this._isBeingDestroyed) {
            ia(this, "beforeDestroy");
            this._isBeingDestroyed = !0;
            var a = this.$parent;
            !a ||
              a._isBeingDestroyed ||
              this.$options.abstract ||
              v(a.$children, this);
            this._watcher && this._watcher.teardown();
            for (a = this._watchers.length; a--; ) this._watchers[a].teardown();
            this._data.__ob__ && this._data.__ob__.vmCount--;
            this._isDestroyed = !0;
            this.__patch__(this._vnode, null);
            ia(this, "destroyed");
            this.$off();
            this.$el && (this.$el.__vue__ = null);
            this.$vnode && (this.$vnode.parent = null);
          }
        };
      })(K);
      (function (a) {
        ld(a.prototype);
        a.prototype.$nextTick = function (a) {
          return Xa(a, this);
        };
        a.prototype._render = function () {
          var a = this.$options,
            b = a.render;
          (a = a._parentVnode) &&
            (this.$scopedSlots = Yb(a.data.scopedSlots, this.$slots));
          this.$vnode = a;
          try {
            var c = b.call(this._renderProxy, this.$createElement);
          } catch (D) {
            X(D, this, "render"), (c = this._vnode);
          }
          return (
            Array.isArray(c) && 1 === c.length && (c = c[0]),
            c instanceof T || (c = Oa()),
            (c.parent = a),
            c
          );
        };
      })(K);
      var Xe = [String, RegExp, Array],
        Jg = {
          KeepAlive: {
            name: "keep-alive",
            abstract: !0,
            props: { include: Xe, exclude: Xe, max: [String, Number] },
            created: function () {
              this.cache = Object.create(null);
              this.keys = [];
            },
            destroyed: function () {
              for (var a in this.cache) bc(this.cache, a, this.keys);
            },
            mounted: function () {
              var a = this;
              this.$watch("include", function (b) {
                sd(a, function (a) {
                  return zb(b, a);
                });
              });
              this.$watch("exclude", function (b) {
                sd(a, function (a) {
                  return !zb(b, a);
                });
              });
            },
            render: function () {
              var a = this.$slots.default,
                b = Vc(a),
                c = b && b.componentOptions;
              if (c) {
                var d = rd(c),
                  e = this.include,
                  g = this.exclude;
                if ((e && (!d || !zb(e, d))) || (g && d && zb(g, d))) return b;
                d = this.cache;
                e = this.keys;
                c =
                  null == b.key
                    ? c.Ctor.cid + (c.tag ? "::" + c.tag : "")
                    : b.key;
                d[c]
                  ? ((b.componentInstance = d[c].componentInstance),
                    v(e, c),
                    e.push(c))
                  : ((d[c] = b),
                    e.push(c),
                    this.max &&
                      e.length > parseInt(this.max) &&
                      bc(d, e[0], e, this._vnode));
                b.data.keepAlive = !0;
              }
              return b || (a && a[0]);
            },
          },
        };
      !(function (a) {
        Object.defineProperty(a, "config", {
          get: function () {
            return aa;
          },
        });
        a.util = { warn: B, extend: x, mergeOptions: J, defineReactive: R };
        a.set = Ga;
        a.delete = na;
        a.nextTick = Xa;
        a.observable = function (a) {
          return S(a), a;
        };
        a.options = Object.create(null);
        yb.forEach(function (b) {
          a.options[b + "s"] = Object.create(null);
        });
        a.options._base = a;
        x(a.options.components, Jg);
        (function (a) {
          a.use = function (a) {
            var b = this._installedPlugins || (this._installedPlugins = []);
            if (-1 < b.indexOf(a)) return this;
            var c = z(arguments, 1);
            return (
              c.unshift(this),
              "function" == typeof a.install
                ? a.install.apply(a, c)
                : "function" == typeof a && a.apply(null, c),
              b.push(a),
              this
            );
          };
        })(a);
        (function (a) {
          a.mixin = function (a) {
            return (this.options = J(this.options, a)), this;
          };
        })(a);
        If(a);
        (function (a) {
          yb.forEach(function (b) {
            a[b] = function (a, c) {
              return c
                ? ("component" === b &&
                    h(c) &&
                    ((c.name = c.name || a),
                    (c = this.options._base.extend(c))),
                  "directive" === b &&
                    "function" == typeof c &&
                    (c = { bind: c, update: c }),
                  (this.options[b + "s"][a] = c),
                  c)
                : this.options[b + "s"][a];
            };
          });
        })(a);
      })(K);
      Object.defineProperty(K.prototype, "$isServer", { get: fb });
      Object.defineProperty(K.prototype, "$ssrContext", {
        get: function () {
          return this.$vnode && this.$vnode.ssrContext;
        },
      });
      Object.defineProperty(K, "FunctionalRenderContext", { value: Zb });
      K.version = "2.6.1";
      var Kg = p("style,class"),
        Lg = p("input,textarea,option,select,progress"),
        Ye = function (a, b, c) {
          return (
            ("value" === c && Lg(a) && "button" !== b) ||
            ("selected" === c && "option" === a) ||
            ("checked" === c && "input" === a) ||
            ("muted" === c && "video" === a)
          );
        },
        Ad = p("contenteditable,draggable,spellcheck"),
        Lf = p("events,caret,typing,plaintext-only"),
        Kf = p(
          "allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"
        ),
        ic = function (a) {
          return ":" === a.charAt(5) && "xlink" === a.slice(0, 5);
        },
        zd = function (a) {
          return ic(a) ? a.slice(6, a.length) : "";
        },
        Mg = {
          svg: "http://www.w3.org/2000/svg",
          math: "http://www.w3.org/1998/Math/MathML",
        },
        Ng = p(
          "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"
        ),
        ec = p(
          "svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",
          !0
        ),
        Sc = function (a) {
          return Ng(a) || ec(a);
        },
        Ib = Object.create(null),
        gc = p("text,number,password,search,email,tel,url"),
        Og = Object.freeze({
          createElement: function (a, b) {
            var c = document.createElement(a);
            return (
              "select" !== a ||
                (b.data &&
                  b.data.attrs &&
                  void 0 !== b.data.attrs.multiple &&
                  c.setAttribute("multiple", "multiple")),
              c
            );
          },
          createElementNS: function (a, b) {
            return document.createElementNS(Mg[a], b);
          },
          createTextNode: function (a) {
            return document.createTextNode(a);
          },
          createComment: function (a) {
            return document.createComment(a);
          },
          insertBefore: function (a, b, c) {
            a.insertBefore(b, c);
          },
          removeChild: function (a, b) {
            a.removeChild(b);
          },
          appendChild: function (a, b) {
            a.appendChild(b);
          },
          parentNode: function (a) {
            return a.parentNode;
          },
          nextSibling: function (a) {
            return a.nextSibling;
          },
          tagName: function (a) {
            return a.tagName;
          },
          setTextContent: function (a, b) {
            a.textContent = b;
          },
          setStyleScope: function (a, b) {
            a.setAttribute(b, "");
          },
        }),
        Qa = new T("", {}, []),
        nb = ["create", "activate", "update", "remove", "destroy"],
        Pg = {
          create: hc,
          update: hc,
          destroy: function (a) {
            hc(a, Qa);
          },
        },
        Jf = Object.create(null),
        Qg = [
          {
            create: function (a, b) {
              $a(b);
            },
            update: function (a, b) {
              a.data.ref !== b.data.ref && ($a(a, !0), $a(b));
            },
            destroy: function (a) {
              $a(a, !0);
            },
          },
          Pg,
        ],
        Rg = { create: wd, update: wd },
        bb,
        jb,
        nc,
        U,
        Ab,
        mc,
        Sg = { create: Cd, update: Cd },
        Mf = /[\w).+\-_$\]]/,
        kb,
        pc,
        Tg = { create: Jd, update: Jd },
        Ug = { create: Kd, update: Kd },
        Md = t(function (a) {
          var b = {},
            c = /:(.+)/;
          return (
            a.split(/;(?![^(]*\))/g).forEach(function (a) {
              a &&
                ((a = a.split(c)),
                1 < a.length && (b[a[0].trim()] = a[1].trim()));
            }),
            b
          );
        }),
        Jb,
        Vg = /^--/,
        Ze = /\s*!important$/,
        Od = function (a, b, c) {
          if (Vg.test(b)) a.style.setProperty(b, c);
          else if (Ze.test(c))
            a.style.setProperty(Ya(b), c.replace(Ze, ""), "important");
          else if (((b = Wg(b)), Array.isArray(c)))
            for (var d = 0, f = c.length; d < f; d++) a.style[b] = c[d];
          else a.style[b] = c;
        },
        $e = ["Webkit", "Moz", "ms"],
        Wg = t(function (a) {
          if (
            ((Jb = Jb || document.createElement("div").style),
            "filter" !== (a = Z(a)) && a in Jb)
          )
            return a;
          a = a.charAt(0).toUpperCase() + a.slice(1);
          for (var b = 0; b < $e.length; b++) {
            var c = $e[b] + a;
            if (c in Jb) return c;
          }
        }),
        Xg = { create: Nd, update: Nd },
        Qd = /\s+/,
        Td = t(function (a) {
          return {
            enterClass: a + "-enter",
            enterToClass: a + "-enter-to",
            enterActiveClass: a + "-enter-active",
            leaveClass: a + "-leave",
            leaveToClass: a + "-leave-to",
            leaveActiveClass: a + "-leave-active",
          };
        }),
        af = Q && !ab,
        Cb = "transition",
        Bb = "transitionend",
        rc = "animation",
        Yd = "animationend";
      af &&
        (void 0 === window.ontransitionend &&
          void 0 !== window.onwebkittransitionend &&
          ((Cb = "WebkitTransition"), (Bb = "webkitTransitionEnd")),
        void 0 === window.onanimationend &&
          void 0 !== window.onwebkitanimationend &&
          ((rc = "WebkitAnimation"), (Yd = "webkitAnimationEnd")));
      var Vd = Q
          ? window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : setTimeout
          : function (a) {
              return a();
            },
        Rf = /\b(transform|all)(,|$)/,
        Yg = (function (a) {
          function c(a) {
            var b = z.parentNode(a);
            null != b && z.removeChild(b, a);
          }
          function d(a, b, c, d, h, k, n) {
            null != a.elm && null != k && (a = k[n] = M(a));
            a.isRootInsert = !h;
            var q;
            a: {
              h = a;
              k = h.data;
              if (
                null != k &&
                ((n = null != h.componentInstance && k.keepAlive),
                null != (k = k.hook) && null != (k = k.init) && k(h, !1),
                null != h.componentInstance)
              ) {
                e(h, b);
                f(c, h.elm, d);
                if (!0 === n) {
                  for (k = h; k.componentInstance; )
                    if (
                      null != (q = (k = k.componentInstance._vnode).data) &&
                      null != (q = q.transition)
                    ) {
                      for (q = 0; q < A.activate.length; ++q)
                        A.activate[q](Qa, k);
                      b.push(k);
                      break;
                    }
                  f(c, h.elm, d);
                }
                q = !0;
                break a;
              }
              q = void 0;
            }
            q ||
              ((q = a.data),
              (h = a.children),
              (k = a.tag),
              null != k
                ? ((a.elm = a.ns
                    ? z.createElementNS(a.ns, k)
                    : z.createElement(k, a)),
                  m(a),
                  g(a, h, b),
                  null != q && l(a, b),
                  f(c, a.elm, d))
                : !0 === a.isComment
                ? ((a.elm = z.createComment(a.text)), f(c, a.elm, d))
                : ((a.elm = z.createTextNode(a.text)), f(c, a.elm, d)));
          }
          function e(a, b) {
            null != a.data.pendingInsert &&
              (b.push.apply(b, a.data.pendingInsert),
              (a.data.pendingInsert = null));
            a.elm = a.componentInstance.$el;
            h(a) ? (l(a, b), m(a)) : ($a(a), b.push(a));
          }
          function f(a, b, c) {
            null != a &&
              (null != c
                ? z.parentNode(c) === a && z.insertBefore(a, b, c)
                : z.appendChild(a, b));
          }
          function g(a, c, e) {
            if (Array.isArray(c)) {
              0;
              for (var f = 0; f < c.length; ++f)
                d(c[f], e, a.elm, null, !0, c, f);
            } else
              b(a.text) &&
                z.appendChild(a.elm, z.createTextNode(String(a.text)));
          }
          function h(a) {
            for (; a.componentInstance; ) a = a.componentInstance._vnode;
            return null != a.tag;
          }
          function l(a, b) {
            for (var c = 0; c < A.create.length; ++c) A.create[c](Qa, a);
            null != (y = a.data.hook) &&
              (null != y.create && y.create(Qa, a),
              null != y.insert && b.push(a));
          }
          function m(a) {
            var b;
            if (null != (b = a.fnScopeId)) z.setStyleScope(a.elm, b);
            else
              for (var c = a; c; )
                null != (b = c.context) &&
                  null != (b = b.$options._scopeId) &&
                  z.setStyleScope(a.elm, b),
                  (c = c.parent);
            null != (b = Na) &&
              b !== a.context &&
              b !== a.fnContext &&
              null != (b = b.$options._scopeId) &&
              z.setStyleScope(a.elm, b);
          }
          function n(a) {
            var b,
              c = a.data;
            if (null != c)
              for (
                null != (b = c.hook) && null != (b = b.destroy) && b(a), b = 0;
                b < A.destroy.length;
                ++b
              )
                A.destroy[b](a);
            if (null != a.children)
              for (b = 0; b < a.children.length; ++b) n(a.children[b]);
          }
          function r(a, b, d, e) {
            for (; d <= e; ++d)
              (a = b[d]),
                null != a && (null != a.tag ? (t(a), n(a)) : c(a.elm));
          }
          function t(a, b) {
            if (null != b || null != a.data) {
              var d,
                e = A.remove.length + 1;
              null != b
                ? (b.listeners += e)
                : (b = (function (a, b) {
                    function d() {
                      0 == --d.listeners && c(a);
                    }
                    return (d.listeners = b), d;
                  })(a.elm, e));
              null != (d = a.componentInstance) &&
                null != (d = d._vnode) &&
                null != d.data &&
                t(d, b);
              for (d = 0; d < A.remove.length; ++d) A.remove[d](a, b);
              null != (d = a.data.hook) && null != (d = d.remove)
                ? d(a, b)
                : b();
            } else c(a.elm);
          }
          function u(a, b, c, e, f, g) {
            if (a !== b)
              if (
                (null != b.elm && null != e && (b = e[f] = M(b)),
                (e = b.elm = a.elm),
                !0 === a.isAsyncPlaceholder)
              )
                null != b.asyncFactory.resolved
                  ? x(a.elm, b, c)
                  : (b.isAsyncPlaceholder = !0);
              else if (
                !0 !== b.isStatic ||
                !0 !== a.isStatic ||
                b.key !== a.key ||
                (!0 !== b.isCloned && !0 !== b.isOnce)
              ) {
                var k;
                f = b.data;
                null != f &&
                  null != (k = f.hook) &&
                  null != (k = k.prepatch) &&
                  k(a, b);
                var l = a.children,
                  m = b.children;
                if (null != f && h(b)) {
                  for (k = 0; k < A.update.length; ++k) A.update[k](a, b);
                  null != (k = f.hook) && null != (k = k.update) && k(a, b);
                }
                if (null == b.text)
                  if (null != l && null != m) {
                    if (l !== m) {
                      var q,
                        n,
                        p = 0,
                        w = 0,
                        t = l.length - 1,
                        D = l[0],
                        v = l[t],
                        y = m.length - 1,
                        C = m[0],
                        sa = m[y];
                      for (g = !g; p <= t && w <= y; )
                        if (null == D) D = l[++p];
                        else if (null == v) v = l[--t];
                        else if (Pa(D, C))
                          u(D, C, c, m, w), (D = l[++p]), (C = m[++w]);
                        else if (Pa(v, sa))
                          u(v, sa, c, m, y), (v = l[--t]), (sa = m[--y]);
                        else if (Pa(D, sa))
                          u(D, sa, c, m, y),
                            g && z.insertBefore(e, D.elm, z.nextSibling(v.elm)),
                            (D = l[++p]),
                            (sa = m[--y]);
                        else {
                          if (Pa(v, C))
                            u(v, C, c, m, w),
                              g && z.insertBefore(e, v.elm, D.elm),
                              (v = l[--t]);
                          else {
                            if (null == P) {
                              var P = void 0;
                              var B,
                                ha = l,
                                Ea = t,
                                Ba = {};
                              for (B = p; B <= Ea; ++B)
                                null != (P = ha[B].key) && (Ba[P] = B);
                              P = Ba;
                            }
                            if (null != C.key) B = P[C.key];
                            else
                              a: {
                                B = C;
                                ha = l;
                                Ea = t;
                                for (Ba = p; Ba < Ea; Ba++) {
                                  var E = ha[Ba];
                                  if (null != E && Pa(B, E)) {
                                    B = Ba;
                                    break a;
                                  }
                                }
                                B = void 0;
                              }
                            null == (q = B)
                              ? d(C, c, e, D.elm, !1, m, w)
                              : Pa((n = l[q]), C)
                              ? (u(n, C, c, m, w),
                                (l[q] = void 0),
                                g && z.insertBefore(e, n.elm, D.elm))
                              : d(C, c, e, D.elm, !1, m, w);
                          }
                          C = m[++w];
                        }
                      if (p > t)
                        for (
                          q = null == m[y + 1] ? null : m[y + 1].elm, n = w;
                          n <= y;
                          ++n
                        )
                          d(m[n], c, e, q, !1, m, n);
                      else w > y && r(0, l, p, t);
                    }
                  } else if (null != m)
                    for (
                      null != a.text && z.setTextContent(e, ""),
                        q = 0,
                        n = m.length - 1;
                      q <= n;
                      ++q
                    )
                      d(m[q], c, e, null, !1, m, q);
                  else
                    null != l
                      ? r(0, l, 0, l.length - 1)
                      : null != a.text && z.setTextContent(e, "");
                else a.text !== b.text && z.setTextContent(e, b.text);
                null != f &&
                  null != (k = f.hook) &&
                  null != (k = k.postpatch) &&
                  k(a, b);
              } else b.componentInstance = a.componentInstance;
          }
          function v(a, b, c) {
            if (!0 === c && null != a.parent) a.parent.data.pendingInsert = b;
            else for (a = 0; a < b.length; ++a) b[a].data.hook.insert(b[a]);
          }
          function x(a, b, c, d) {
            var f,
              h = b.tag,
              k = b.data,
              m = b.children;
            if (
              ((d = d || (k && k.pre)),
              (b.elm = a),
              !0 === b.isComment && null != b.asyncFactory)
            )
              return (b.isAsyncPlaceholder = !0), !0;
            if (
              null != k &&
              (null != (f = k.hook) && null != (f = f.init) && f(b, !0),
              null != (f = b.componentInstance))
            )
              return e(b, c), !0;
            if (null != h) {
              if (null != m)
                if (a.hasChildNodes())
                  if (
                    null != (f = k) &&
                    null != (f = f.domProps) &&
                    null != (f = f.innerHTML)
                  ) {
                    if (f !== a.innerHTML) return !1;
                  } else {
                    f = !0;
                    a = a.firstChild;
                    for (h = 0; h < m.length; h++) {
                      if (!a || !x(a, m[h], c, d)) {
                        f = !1;
                        break;
                      }
                      a = a.nextSibling;
                    }
                    if (!f || a) return !1;
                  }
                else g(b, m, c);
              if (null != k) {
                d = !1;
                for (var q in k)
                  if (!E(q)) {
                    d = !0;
                    l(b, c);
                    break;
                  }
                !d && k.class && O(k.class);
              }
            } else a.data !== b.text && (a.data = b.text);
            return !0;
          }
          var y,
            A = {},
            B = a.modules,
            z = a.nodeOps;
          for (y = 0; y < nb.length; ++y)
            for (A[nb[y]] = [], a = 0; a < B.length; ++a)
              null != B[a][nb[y]] && A[nb[y]].push(B[a][nb[y]]);
          var E = p("attrs,class,staticClass,staticStyle,key");
          return function (a, b, c, f) {
            if (null != b) {
              var e = !1,
                g = [];
              if (null == a) (e = !0), d(b, g);
              else {
                var k = null != a.nodeType;
                if (!k && Pa(a, b)) u(a, b, g, null, null, f);
                else {
                  if (k) {
                    if (
                      (1 === a.nodeType &&
                        a.hasAttribute("data-server-rendered") &&
                        (a.removeAttribute("data-server-rendered"), (c = !0)),
                      !0 === c && x(a, b, g))
                    )
                      return v(b, g, !0), a;
                    a = new T(z.tagName(a).toLowerCase(), {}, [], void 0, a);
                  }
                  f = a.elm;
                  c = z.parentNode(f);
                  if (
                    (d(b, g, f._leaveCb ? null : c, z.nextSibling(f)),
                    null != b.parent)
                  )
                    for (f = b.parent, k = h(b); f; ) {
                      for (var l = 0; l < A.destroy.length; ++l)
                        A.destroy[l](f);
                      if (((f.elm = b.elm), k)) {
                        for (l = 0; l < A.create.length; ++l)
                          A.create[l](Qa, f);
                        l = f.data.hook.insert;
                        if (l.merged)
                          for (var m = 1; m < l.fns.length; m++) l.fns[m]();
                      } else $a(f);
                      f = f.parent;
                    }
                  null != c ? r(0, [a], 0, 0) : null != a.tag && n(a);
                }
              }
              return v(b, g, e), b.elm;
            }
            null != a && n(a);
          };
        })({
          nodeOps: Og,
          modules: [
            Rg,
            Sg,
            Tg,
            Ug,
            Xg,
            Q
              ? {
                  create: fe,
                  activate: fe,
                  remove: function (a, b) {
                    !0 !== a.data.show ? ee(a, b) : b();
                  },
                }
              : {},
          ].concat(Qg),
        });
      ab &&
        document.addEventListener("selectionchange", function () {
          var a = document.activeElement;
          a && a.vmodel && wc(a, "input");
        });
      var bf = {
          inserted: function (a, b, c, d) {
            "select" === c.tag
              ? (d.elm && !d.elm._vOptions
                  ? za(c, "postpatch", function () {
                      bf.componentUpdated(a, b, c);
                    })
                  : ge(a, b, c.context),
                (a._vOptions = [].map.call(a.options, Db)))
              : ("textarea" === c.tag || gc(a.type)) &&
                ((a._vModifiers = b.modifiers),
                b.modifiers.lazy ||
                  (a.addEventListener("compositionstart", Sf),
                  a.addEventListener("compositionend", je),
                  a.addEventListener("change", je),
                  ab && (a.vmodel = !0)));
          },
          componentUpdated: function (a, b, c) {
            if ("select" === c.tag) {
              ge(a, b, c.context);
              var d = a._vOptions,
                e = (a._vOptions = [].map.call(a.options, Db));
              e.some(function (a, b) {
                return !G(a, d[b]);
              }) &&
                (a.multiple
                  ? b.value.some(function (a) {
                      return ie(a, e);
                    })
                  : b.value !== b.oldValue && ie(b.value, e)) &&
                wc(a, "change");
            }
          },
        },
        Zg = {
          model: bf,
          show: {
            bind: function (a, b, c) {
              b = b.value;
              var d = (c = xc(c)).data && c.data.transition,
                e = (a.__vOriginalDisplay =
                  "none" === a.style.display ? "" : a.style.display);
              b && d
                ? ((c.data.show = !0),
                  sc(c, function () {
                    a.style.display = e;
                  }))
                : (a.style.display = b ? e : "none");
            },
            update: function (a, b, c) {
              var d = b.value;
              !d != !b.oldValue &&
                ((c = xc(c)).data && c.data.transition
                  ? ((c.data.show = !0),
                    d
                      ? sc(c, function () {
                          a.style.display = a.__vOriginalDisplay;
                        })
                      : ee(c, function () {
                          a.style.display = "none";
                        }))
                  : (a.style.display = d ? a.__vOriginalDisplay : "none"));
            },
            unbind: function (a, b, c, d, e) {
              e || (a.style.display = a.__vOriginalDisplay);
            },
          },
        },
        cf = {
          name: String,
          appear: Boolean,
          css: Boolean,
          mode: String,
          type: String,
          enterClass: String,
          leaveClass: String,
          enterToClass: String,
          leaveToClass: String,
          enterActiveClass: String,
          leaveActiveClass: String,
          appearClass: String,
          appearActiveClass: String,
          appearToClass: String,
          duration: [Number, String, Object],
        },
        $g = function (a) {
          return a.tag || (a.isComment && a.asyncFactory);
        },
        ah = function (a) {
          return "show" === a.name;
        },
        bh = {
          name: "transition",
          props: cf,
          abstract: !0,
          render: function (a) {
            var c = this,
              d = this.$slots.default;
            if (d && (d = d.filter($g)).length) {
              0;
              var e = this.mode;
              0;
              d = d[0];
              if (
                (function (a) {
                  for (; (a = a.parent); ) if (a.data.transition) return !0;
                })(this.$vnode)
              )
                return d;
              var f = yc(d);
              if (!f) return d;
              if (this._leaving) return le(a, d);
              var g = "__transition-" + this._uid + "-";
              f.key =
                null == f.key
                  ? f.isComment
                    ? g + "comment"
                    : g + f.tag
                  : b(f.key)
                  ? 0 === String(f.key).indexOf(g)
                    ? f.key
                    : g + f.key
                  : f.key;
              g = (f.data || (f.data = {})).transition = ke(this);
              var h = this._vnode,
                l = yc(h);
              if (
                (f.data.directives &&
                  f.data.directives.some(ah) &&
                  (f.data.show = !0),
                !(
                  !l ||
                  !l.data ||
                  (l.key === f.key && l.tag === f.tag) ||
                  (l.isComment && l.asyncFactory) ||
                  (l.componentInstance && l.componentInstance._vnode.isComment)
                ))
              ) {
                l = l.data.transition = x({}, g);
                if ("out-in" === e)
                  return (
                    (this._leaving = !0),
                    za(l, "afterLeave", function () {
                      c._leaving = !1;
                      c.$forceUpdate();
                    }),
                    le(a, d)
                  );
                if ("in-out" === e) {
                  if (f.isComment && f.asyncFactory) return h;
                  var m;
                  a = function () {
                    m();
                  };
                  za(g, "afterEnter", a);
                  za(g, "enterCancelled", a);
                  za(l, "delayLeave", function (a) {
                    m = a;
                  });
                }
              }
              return d;
            }
          },
        },
        df = x({ tag: String, moveClass: String }, cf);
      delete df.mode;
      var ch = {
        Transition: bh,
        TransitionGroup: {
          props: df,
          beforeMount: function () {
            var a = this,
              b = this._update;
            this._update = function (c, d) {
              var e = Zc(a);
              a.__patch__(a._vnode, a.kept, !1, !0);
              a._vnode = a.kept;
              e();
              b.call(a, c, d);
            };
          },
          render: function (a) {
            for (
              var b = this.tag || this.$vnode.data.tag || "span",
                c = Object.create(null),
                d = (this.prevChildren = this.children),
                e = this.$slots.default || [],
                f = (this.children = []),
                g = ke(this),
                h = 0;
              h < e.length;
              h++
            ) {
              var l = e[h];
              l.tag &&
                null != l.key &&
                0 !== String(l.key).indexOf("__vlist") &&
                (f.push(l),
                (c[l.key] = l),
                ((l.data || (l.data = {})).transition = g));
            }
            if (d) {
              e = [];
              h = [];
              for (l = 0; l < d.length; l++) {
                var m = d[l];
                m.data.transition = g;
                m.data.pos = m.elm.getBoundingClientRect();
                c[m.key] ? e.push(m) : h.push(m);
              }
              this.kept = a(b, null, e);
              this.removed = h;
            }
            return a(b, null, f);
          },
          updated: function () {
            var a = this.prevChildren,
              b = this.moveClass || (this.name || "v") + "-move";
            a.length &&
              this.hasMove(a[0].elm, b) &&
              (a.forEach(Tf),
              a.forEach(Uf),
              a.forEach(Vf),
              (this._reflow = document.body.offsetHeight),
              a.forEach(function (a) {
                if (a.data.moved) {
                  var c = a.elm;
                  a = c.style;
                  Ta(c, b);
                  a.transform = a.WebkitTransform = a.transitionDuration = "";
                  c.addEventListener(
                    Bb,
                    (c._moveCb = function ha(a) {
                      (a && a.target !== c) ||
                        (a && !/transform$/.test(a.propertyName)) ||
                        (c.removeEventListener(Bb, ha),
                        (c._moveCb = null),
                        wa(c, b));
                    })
                  );
                }
              }));
          },
          methods: {
            hasMove: function (a, b) {
              if (!af) return !1;
              if (this._hasMove) return this._hasMove;
              var c = a.cloneNode();
              a._transitionClasses &&
                a._transitionClasses.forEach(function (a) {
                  Rd(c, a);
                });
              Pd(c, b);
              c.style.display = "none";
              this.$el.appendChild(c);
              a = Xd(c);
              return this.$el.removeChild(c), (this._hasMove = a.hasTransform);
            },
          },
        },
      };
      K.config.mustUseProp = Ye;
      K.config.isReservedTag = Sc;
      K.config.isReservedAttr = Kg;
      K.config.getTagNamespace = ud;
      K.config.isUnknownElement = function (a) {
        if (!Q) return !0;
        if (Sc(a)) return !1;
        if (((a = a.toLowerCase()), null != Ib[a])) return Ib[a];
        var b = document.createElement(a);
        return -1 < a.indexOf("-")
          ? (Ib[a] =
              b.constructor === window.HTMLUnknownElement ||
              b.constructor === window.HTMLElement)
          : (Ib[a] = /HTMLUnknownElement/.test(b.toString()));
      };
      x(K.options.directives, Zg);
      x(K.options.components, ch);
      K.prototype.__patch__ = Q ? Yg : B;
      K.prototype.$mount = function (a, b) {
        return (function (a, b, c) {
          var d;
          return (
            (a.$el = b),
            a.$options.render || (a.$options.render = Oa),
            ia(a, "beforeMount"),
            (d = function () {
              a._update(a._render(), c);
            }),
            new ja(
              a,
              d,
              B,
              {
                before: function () {
                  a._isMounted && !a._isDestroyed && ia(a, "beforeUpdate");
                },
              },
              !0
            ),
            (c = !1),
            null == a.$vnode && ((a._isMounted = !0), ia(a, "mounted")),
            a
          );
        })(this, (a = a && Q ? fc(a) : void 0), b);
      };
      Q &&
        setTimeout(function () {
          aa.devtools && vb && vb.emit("init", K);
        }, 0);
      var lg = /\{\{((?:.|\r?\n)+?)\}\}/g,
        ef = /[-.*+?^${}()|[\]\/\\]/g,
        kg = t(function (a) {
          var b = a[0].replace(ef, "\\$\x26");
          a = a[1].replace(ef, "\\$\x26");
          return new RegExp(b + "((?:.|\\n)+?)" + a, "g");
        }),
        Tc,
        dh = p(
          "area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"
        ),
        eh = p("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
        dg = p(
          "address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"
        ),
        cg =
          /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
        bg =
          /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
        oe =
          /^<((?:[a-zA-Z_][\-\.0-9_a-zA-Za-zA-Z\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]*\:)?[a-zA-Z_][\-\.0-9_a-zA-Za-zA-Z\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]*)/,
        ag = /^\s*(\/?)>/,
        ue =
          /^<\/((?:[a-zA-Z_][\-\.0-9_a-zA-Za-zA-Z\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]*\:)?[a-zA-Z_][\-\.0-9_a-zA-Za-zA-Z\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]*)[^>]*>/,
        eg = /^<!DOCTYPE [^>]+>/i,
        se = /^<!\--/,
        te = /^<!\[/,
        pe = p("script,style,textarea", !0),
        qe = {},
        Zf = {
          "\x26lt;": "\x3c",
          "\x26gt;": "\x3e",
          "\x26quot;": '"',
          "\x26amp;": "\x26",
          "\x26#10;": "\n",
          "\x26#9;": "\t",
          "\x26#39;": "'",
        },
        Yf = /&(?:lt|gt|quot|amp|#39);/g,
        Xf = /&(?:lt|gt|quot|amp|#39|#10|#9);/g,
        fh = p("pre,textarea", !0),
        re = function (a, b) {
          return a && fh(a) && "\n" === b[0];
        },
        me,
        Fc,
        Dc,
        Ec,
        Bc,
        Ac,
        Cc,
        ne,
        ze = /^@|^v-on:/,
        Hc = /^v-|^@|^:/,
        og = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
        Ae = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
        pg = /^\(|\)$/g,
        Fb = /^\[.*\]$/,
        ng = /:(.*)$/,
        ye = /^:|^\.|^v-bind:/,
        xe = /\.[^.]+/g,
        Gc = /^v-slot(:|$)|^#/,
        ig = /[\r\n]/,
        jg = /\s+/g,
        hg = t(function (a) {
          return (
            ((Tc = Tc || document.createElement("div")).innerHTML = a),
            Tc.textContent
          );
        }),
        fg = /^xmlns:NS\d+/,
        gg = /^NS\d+:/,
        ff = [
          {
            staticKeys: ["staticClass"],
            transformNode: function (a, b) {
              b.warn;
              (b = N(a, "class")) && (a.staticClass = JSON.stringify(b));
              (b = da(a, "class", !1)) && (a.classBinding = b);
            },
            genData: function (a) {
              var b = "";
              return (
                a.staticClass && (b += "staticClass:" + a.staticClass + ","),
                a.classBinding && (b += "class:" + a.classBinding + ","),
                b
              );
            },
          },
          {
            staticKeys: ["staticStyle"],
            transformNode: function (a, b) {
              b.warn;
              (b = N(a, "style")) && (a.staticStyle = JSON.stringify(Md(b)));
              (b = da(a, "style", !1)) && (a.styleBinding = b);
            },
            genData: function (a) {
              var b = "";
              return (
                a.staticStyle && (b += "staticStyle:" + a.staticStyle + ","),
                a.styleBinding && (b += "style:(" + a.styleBinding + "),"),
                b
              );
            },
          },
          {
            preTransformNode: function (a, b) {
              if ("input" === a.tag) {
                var c,
                  d = a.attrsMap;
                if (
                  d["v-model"] &&
                  ((d[":type"] || d["v-bind:type"]) && (c = da(a, "type")),
                  d.type ||
                    c ||
                    !d["v-bind"] ||
                    (c = "(" + d["v-bind"] + ").type"),
                  c)
                ) {
                  var e = (d = N(a, "v-if", !0)) ? "\x26\x26(" + d + ")" : "",
                    f = null != N(a, "v-else", !0),
                    g = N(a, "v-else-if", !0),
                    h = Ic(a);
                  ve(h);
                  lc(h, "type", "checkbox");
                  Eb(h, b);
                  h.processed = !0;
                  h.if = "(" + c + ")\x3d\x3d\x3d'checkbox'" + e;
                  cb(h, { exp: h.if, block: h });
                  var k = Ic(a);
                  N(k, "v-for", !0);
                  lc(k, "type", "radio");
                  Eb(k, b);
                  cb(h, {
                    exp: "(" + c + ")\x3d\x3d\x3d'radio'" + e,
                    block: k,
                  });
                  a = Ic(a);
                  return (
                    N(a, "v-for", !0),
                    lc(a, ":type", c),
                    Eb(a, b),
                    cb(h, { exp: d, block: a }),
                    f ? (h.else = !0) : g && (h.elseif = g),
                    h
                  );
                }
              }
            },
          },
        ],
        Be,
        Kc,
        gh = {
          expectHTML: !0,
          modules: ff,
          directives: {
            model: function (a, b, c) {
              0;
              c = b.value;
              b = b.modifiers;
              var d = a.tag,
                e = a.attrsMap.type;
              if (a.component) return Fd(a, c, b), !1;
              if ("select" === d)
                !(function (a, b, c) {
                  c =
                    'var $$selectedVal \x3d Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val \x3d "_value" in o ? o._value : o.value;return ' +
                    (c && c.number ? "_n(val)" : "val") +
                    "});";
                  c =
                    c +
                    " " +
                    Da(
                      b,
                      "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"
                    );
                  va(a, "change", c, null, !0);
                })(a, c, b);
              else if ("input" === d && "checkbox" === e)
                !(function (a, b, c) {
                  c = c && c.number;
                  var d = da(a, "value") || "null",
                    e = da(a, "true-value") || "true",
                    f = da(a, "false-value") || "false";
                  Sa(
                    a,
                    "checked",
                    "Array.isArray(" +
                      b +
                      ")?_i(" +
                      b +
                      "," +
                      d +
                      ")\x3e-1" +
                      ("true" === e
                        ? ":(" + b + ")"
                        : ":_q(" + b + "," + e + ")")
                  );
                  va(
                    a,
                    "change",
                    "var $$a\x3d" +
                      b +
                      ",$$el\x3d$event.target,$$c\x3d$$el.checked?(" +
                      e +
                      "):(" +
                      f +
                      ");if(Array.isArray($$a)){var $$v\x3d" +
                      (c ? "_n(" + d + ")" : d) +
                      ",$$i\x3d_i($$a,$$v);if($$el.checked){$$i\x3c0\x26\x26(" +
                      Da(b, "$$a.concat([$$v])") +
                      ")}else{$$i\x3e-1\x26\x26(" +
                      Da(b, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") +
                      ")}}else{" +
                      Da(b, "$$c") +
                      "}",
                    null,
                    !0
                  );
                })(a, c, b);
              else if ("input" === d && "radio" === e)
                !(function (a, b, c) {
                  c = c && c.number;
                  var d = da(a, "value") || "null";
                  Sa(
                    a,
                    "checked",
                    "_q(" + b + "," + (d = c ? "_n(" + d + ")" : d) + ")"
                  );
                  va(a, "change", Da(b, d), null, !0);
                })(a, c, b);
              else if ("input" === d || "textarea" === d)
                !(function (a, b, c) {
                  var d = a.attrsMap.type;
                  0;
                  var e = c || {},
                    f = e.lazy;
                  c = e.number;
                  e = e.trim;
                  var g = !f && "range" !== d;
                  d = f ? "change" : "range" === d ? "__r" : "input";
                  f = "$event.target.value";
                  e && (f = "$event.target.value.trim()");
                  c && (f = "_n(" + f + ")");
                  f = Da(b, f);
                  g && (f = "if($event.target.composing)return;" + f);
                  Sa(a, "value", "(" + b + ")");
                  va(a, d, f, null, !0);
                  (e || c) && va(a, "blur", "$forceUpdate()");
                })(a, c, b);
              else if (!aa.isReservedTag(d)) return Fd(a, c, b), !1;
              return !0;
            },
            text: function (a, b) {
              b.value && Sa(a, "textContent", "_s(" + b.value + ")", b);
            },
            html: function (a, b) {
              b.value && Sa(a, "innerHTML", "_s(" + b.value + ")", b);
            },
          },
          isPreTag: function (a) {
            return "pre" === a;
          },
          isUnaryTag: dh,
          mustUseProp: Ye,
          canBeLeftOpenTag: eh,
          isReservedTag: Sc,
          getTagNamespace: ud,
          staticKeys: (function (a) {
            return a
              .reduce(function (a, b) {
                return a.concat(b.staticKeys || []);
              }, [])
              .join(",");
          })(ff),
        },
        hh = t(function (a) {
          return p(
            "type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" +
              (a ? "," + a : "")
          );
        }),
        rg = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,
        sg = /\([^)]*?\);*$/,
        Ee =
          /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
        Ge = {
          esc: 27,
          tab: 9,
          enter: 13,
          space: 32,
          up: 38,
          left: 37,
          right: 39,
          down: 40,
          delete: [8, 46],
        },
        ug = {
          esc: ["Esc", "Escape"],
          tab: "Tab",
          enter: "Enter",
          space: [" ", "Spacebar"],
          up: ["Up", "ArrowUp"],
          left: ["Left", "ArrowLeft"],
          right: ["Right", "ArrowRight"],
          down: ["Down", "ArrowDown"],
          delete: ["Backspace", "Delete", "Del"],
        },
        xa = function (a) {
          return "if(" + a + ")return null;";
        },
        Fe = {
          stop: "$event.stopPropagation();",
          prevent: "$event.preventDefault();",
          self: xa("$event.target !\x3d\x3d $event.currentTarget"),
          ctrl: xa("!$event.ctrlKey"),
          shift: xa("!$event.shiftKey"),
          alt: xa("!$event.altKey"),
          meta: xa("!$event.metaKey"),
          left: xa("'button' in $event \x26\x26 $event.button !\x3d\x3d 0"),
          middle: xa("'button' in $event \x26\x26 $event.button !\x3d\x3d 1"),
          right: xa("'button' in $event \x26\x26 $event.button !\x3d\x3d 2"),
        },
        ih = {
          on: function (a, b) {
            a.wrapListeners = function (a) {
              return "_g(" + a + "," + b.value + ")";
            };
          },
          bind: function (a, b) {
            a.wrapData = function (c) {
              return (
                "_b(" +
                c +
                ",'" +
                a.tag +
                "'," +
                b.value +
                "," +
                (b.modifiers && b.modifiers.prop ? "true" : "false") +
                (b.modifiers && b.modifiers.sync ? ",true" : "") +
                ")"
              );
            };
          },
          cloak: B,
        },
        vg = function (a) {
          this.options = a;
          this.warn = a.warn || Dd;
          this.transforms = hb(a.modules, "transformCode");
          this.dataGenFns = hb(a.modules, "genData");
          this.directives = x(x({}, ih), a.directives);
          var b = a.isReservedTag || la;
          this.maybeComponent = function (a) {
            return !!a.component || !b(a.tag);
          };
          this.onceId = 0;
          this.staticRenderFns = [];
          this.pre = !1;
        };
      "do if for let new try var case else with await break catch class const super throw while yield delete export import return switch default extends finally continue debugger function arguments"
        .split(" ")
        .join("\\b|\\b");
      var gf,
        Pc,
        hf = ((gf = function (a, b) {
          a = $f(a.trim(), b);
          !1 !== b.optimize &&
            a &&
            ((Be = hh(b.staticKeys || "")),
            (Kc = b.isReservedTag || la),
            Jc(a),
            Lc(a, !1));
          b = He(a, b);
          return {
            ast: a,
            render: b.render,
            staticRenderFns: b.staticRenderFns,
          };
        }),
        function (a) {
          function b(b, c) {
            var d = Object.create(a),
              e = [],
              f = [];
            if (c)
              for (var g in (c.modules &&
                (d.modules = (a.modules || []).concat(c.modules)),
              c.directives &&
                (d.directives = x(
                  Object.create(a.directives || null),
                  c.directives
                )),
              c))
                "modules" !== g && "directives" !== g && (d[g] = c[g]);
            d.warn = function (a, b, c) {
              (c ? f : e).push(a);
            };
            b = gf(b.trim(), d);
            return (b.errors = e), (b.tips = f), b;
          }
          return { compile: b, compileToFunctions: xg(b) };
        })(gh),
        jf = (hf.compile, hf.compileToFunctions),
        jh = !!Q && Qe(!1),
        kh = !!Q && Qe(!0),
        lh = t(function (a) {
          return (a = fc(a)) && a.innerHTML;
        }),
        mh = K.prototype.$mount;
      K.prototype.$mount = function (a, b) {
        if (
          (a = a && fc(a)) === document.body ||
          a === document.documentElement
        )
          return this;
        var c = this.$options;
        if (!c.render) {
          var d = c.template;
          if (d)
            if ("string" == typeof d) "#" === d.charAt(0) && (d = lh(d));
            else {
              if (!d.nodeType) return this;
              d = d.innerHTML;
            }
          else if (a)
            if (((d = a), d.outerHTML)) d = d.outerHTML;
            else {
              var e = document.createElement("div");
              d = (e.appendChild(d.cloneNode(!0)), e.innerHTML);
            }
          d &&
            (0,
            (d = jf(
              d,
              {
                outputSourceRange: !1,
                shouldDecodeNewlines: jh,
                shouldDecodeNewlinesForHref: kh,
                delimiters: c.delimiters,
                comments: c.comments,
              },
              this
            )),
            (e = d.staticRenderFns),
            (c.render = d.render),
            (c.staticRenderFns = e));
        }
        return mh.call(this, a, b);
      };
      K.compile = jf;
      d.a = K;
    }).call(this, a(34), a(228).setImmediate);
  },
  650: function (c, d, a) {
    (function (b, c) {
      function d(a, b) {
        var c = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
          var d = Object.getOwnPropertySymbols(a);
          b &&
            (d = d.filter(function (b) {
              return Object.getOwnPropertyDescriptor(a, b).enumerable;
            }));
          c.push.apply(c, d);
        }
        return c;
      }
      function l(a) {
        for (var b = 1; b < arguments.length; b++) {
          var c = null != arguments[b] ? arguments[b] : {};
          b % 2
            ? d(Object(c), !0).forEach(function (b) {
                var d = c[b];
                b in a
                  ? Object.defineProperty(a, b, {
                      value: d,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (a[b] = d);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
            : d(Object(c)).forEach(function (b) {
                Object.defineProperty(
                  a,
                  b,
                  Object.getOwnPropertyDescriptor(c, b)
                );
              });
        }
        return a;
      }
      a(4);
      a(18);
      a(16);
      a(49);
      a(87);
      a(13);
      a(7);
      a(24);
      a(89);
      a(20);
      a(19);
      a(651);
      a(338);
      a(652);
      var h = a(17);
      b.OP_VUE_REGISTRY.set("home_subscribe", {
        data: function () {
          return {
            firstInp: !1,
            isLoad: !1,
            inpval: "",
            agreeTerm: !1,
            emailTips: [],
            subscribeSuccess: !1,
            slideState: !1,
            submitFrontTerm: !1,
            emailCorrect: !1,
            activityCode: "",
            activityCodeTip: !1,
            http: "",
            activityCodeHttp:
              c("#opsite-domain-url").val() + "/api/public/v1/form/record",
            countryCode: "",
            startSubmit: !1,
            submitHasOne: !1,
            httpErrText: "",
          };
        },
        created: function () {},
        mounted: function () {
          var a = this,
            b = c(this.$refs.cmpSubscribe).data("emailtip").split(",");
          this.activityCode = c(this.$refs.cmpSubscribe).data("activitycode");
          this.http =
            c("#domain_host_levin").val() ||
            "https://opsg-gateway-in.oppo.com/v2/api/router";
          this.countryCode =
            window.opsiteBase.UIUtils.getCountryCode().toUpperCase();
          b.forEach(function (b, c) {
            a.emailTips.push({ tip: b, new: "", show: !0 });
          });
          document.addEventListener("click", this.clickOutsideSlide);
          c(this.$el)
            .find(".subscribe__handle_term_des a")
            .click(function (a) {
              ga4Event({
                event_name: "subscribe",
                module: "E-mail Subscribe",
                button_name: c(a.target).text(),
              });
            });
          this.isLoad = !0;
        },
        computed: {
          filterInpVal: function () {
            var a = this.filterEmail();
            return (this.emailCorrect = !a), a && this.agreeTerm;
          },
          slideItemVal: function () {
            var a = this.inpval.indexOf("@");
            return -1 !== a && this.inpval.length > a + 1;
          },
        },
        watch: {
          inpval: {
            handler: function (a, b) {
              this.search();
            },
            deep: !0,
            immediate: !1,
          },
        },
        methods: {
          search: function () {
            var a = this,
              b = this.inpval.indexOf("@"),
              c = this.inpval.replace("@", ""),
              d = this.inpval.slice(b),
              h = !1;
            this.submitFrontTerm = this.startSubmit = !1;
            this.firstInp = !0;
            0 < this.inpval.length
              ? (this.slideState = !0)
              : ((this.slideState = !1), (this.firstInp = !1));
            this.emailTips.forEach(function (e, g) {
              var l = { tip: e.tip, new: "", show: !1 };
              a.slideItemVal
                ? -1 !== e.tip.indexOf(d)
                  ? ((l.new = a.inpval.slice(0, b) + e.tip), (l.show = !0))
                  : (l.new = a.inpval)
                : ((l.new = c + e.tip), (l.show = !0));
              l.show && (h = !0);
              a.emailTips[g] = l;
            });
            h || (this.emailTips[0].show = !0);
          },
          touchVal: function (a) {
            this.inpval = a;
          },
          touchAgreeTerm: function () {
            (this.agreeTerm = !this.agreeTerm) && (this.submitFrontTerm = !1);
          },
          clickOutsideSlide: function (a) {
            c(a.target).is(".subscribe__handle_slide_item")
              ? (this.slideState = !1)
              : this.$refs.touchEmail &&
                this.$refs.subInpt &&
                (this.$refs.touchEmail.contains(a.target) ||
                (this.$refs.subInpt.contains(a.target) &&
                  0 < this.inpval.length)
                  ? (this.slideState = !0)
                  : (this.slideState = !1));
          },
          filterEmail: function (a) {
            return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
              this.inpval
            );
          },
          checkActivityCodeValue: function () {
            this.activityCode = c(this.$refs.cmpSubscribe).data("activitycode");
            return /^[a-zA-Z0-9]+$/.test(this.activityCode);
          },
          submitSubscribe: function () {
            var a = this;
            if (
              (ga4Event({
                event_name: "subscribe",
                module: "E-mail Subscribe",
                button_name: "Subscribe",
              }),
              this.filterInpVal)
            )
              if (this.activityCode) {
                var b = {
                  activityCode: this.activityCode,
                  email: window.opsiteBase.UIUtils.aesCBCEncrypt(this.inpval),
                  countryCode: this.countryCode,
                };
                Object(h.b)(this.activityCodeHttp, b)
                  .then(function (b) {
                    "0" === b.code || 0 === b.code
                      ? ((a.subscribeSuccess = !0),
                        (a.startSubmit = !1),
                        (a.emailCorrect = !1),
                        (a.submitFrontTerm = !1),
                        (a.activityCodeTip = !1))
                      : ((a.startSubmit = !0),
                        a.$nextTick(function () {
                          var b = c(a.$refs.httpErrTip);
                          a.httpErrText = b.data("other");
                        }));
                  })
                  .catch(function (b) {
                    a.startSubmit = !0;
                    a.$nextTick(function () {
                      a.httpErrText = ele.data("other");
                    });
                  });
              } else
                Object(h.b)(this.http, {
                  method: "levin.email.subscribe",
                  biz_content: {
                    countryCode: this.countryCode,
                    email: window.opsiteBase.UIUtils.aesCBCEncrypt(this.inpval),
                    source:
                      window.location.protocol +
                      "//" +
                      window.location.host +
                      window.location.pathname,
                  },
                })
                  .then(function (b) {
                    "1" === b.ret
                      ? ((a.subscribeSuccess = !0),
                        (a.startSubmit = !1),
                        (a.emailCorrect = !1),
                        (a.submitFrontTerm = !1),
                        (a.activityCodeTip = !1))
                      : ((a.startSubmit = !0),
                        a.$nextTick(function () {
                          var d = c(a.$refs.httpErrTip);
                          "1004036001" === b.errCode
                            ? (a.httpErrText = d.data("repeat"))
                            : "1004036002" === b.errCode
                            ? (a.httpErrText = d.data("faild"))
                            : (a.httpErrText = d.data("other"));
                        }));
                  })
                  .catch(function (b) {
                    a.startSubmit = !0;
                    a.$nextTick(function () {
                      a.httpErrText = ele.data("other");
                    });
                  });
            else {
              if (this.activityCode && !this.checkActivityCodeValue())
                return (
                  (this.activityCodeTip = !0),
                  (this.emailCorrect = !1),
                  void (this.submitFrontTerm = !1)
                );
              if (!this.filterEmail())
                return (
                  (this.firstInp = !0),
                  (this.startSubmit = !1),
                  (this.emailCorrect = !0),
                  void (this.submitFrontTerm = !1)
                );
              if (!this.agreeTerm)
                return (
                  (this.submitFrontTerm = !0), void (this.emailCorrect = !1)
                );
            }
          },
        },
      });
      c(function () {
        var a = document.querySelector(".cmp__subscribe");
        a &&
          b.OP_VUE_REGISTRY.has("home_subscribe") &&
          ((a = Object.assign({}, b.OP_VUE_REGISTRY.get("home_subscribe"), {
            el: a,
            propsData: l({}, a.dataset),
          })),
          OP_vue.vueInstances.push(new OP_vue(a)));
      });
    }).call(this, a(34), a(3));
  },
  651: function (c, d, a) {},
  652: function (c, d, a) {
    c = a(1);
    c = a.n(c);
    d = a(2);
    a = a.n(d);
    c = new c.a({
      id: "icon-subscribe-agreeterm",
      use: "icon-subscribe-agreeterm-usage",
      viewBox: "0 0 16 16",
      content:
        '\x3csymbol xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 16 16" id\x3d"icon-subscribe-agreeterm"\x3e\x3cpath fill-rule\x3d"evenodd" clip-rule\x3d"evenodd" d\x3d"M2 8a6 6 0 1012 0A6 6 0 002 8zm5.668 2.038l3.333-3-.669-.743-2.99 2.692-1.665-1.573-.687.727 2 1.89a.5.5 0 00.678.007z" /\x3e\x3c/symbol\x3e',
    });
    a.a.add(c);
  },
  653: function (c, d, a) {},
  654: function (c, d) {
    function a(a) {
      a = Error("Cannot find module '" + a + "'");
      throw ((a.code = "MODULE_NOT_FOUND"), a);
    }
    a.keys = function () {
      return [];
    };
    a.resolve = a;
    c.exports = a;
    a.id = 654;
  },
  80: function (c, d) {},
  803: function (c, d, a) {
    a(627);
    a(630);
    a(632);
  },
  91: function (c, d, a) {},
});

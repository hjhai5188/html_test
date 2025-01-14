(function () {
  "use strict";
  var te = {
      7711: function () {
        (function () {
          "use strict";
          if (typeof window != "object") return;
          if (
            "IntersectionObserver" in window &&
            "IntersectionObserverEntry" in window &&
            "intersectionRatio" in window.IntersectionObserverEntry.prototype
          ) {
            "isIntersecting" in window.IntersectionObserverEntry.prototype ||
              Object.defineProperty(
                window.IntersectionObserverEntry.prototype,
                "isIntersecting",
                {
                  get: function () {
                    return this.intersectionRatio > 0;
                  },
                }
              );
            return;
          }
          var x = window.document,
            S = [],
            w = null,
            B = null;
          function st(a) {
            (this.time = a.time),
              (this.target = a.target),
              (this.rootBounds = j(a.rootBounds)),
              (this.boundingClientRect = j(a.boundingClientRect)),
              (this.intersectionRect = j(a.intersectionRect || N())),
              (this.isIntersecting = !!a.intersectionRect);
            var u = this.boundingClientRect,
              d = u.width * u.height,
              A = this.intersectionRect,
              g = A.width * A.height;
            d
              ? (this.intersectionRatio = Number((g / d).toFixed(4)))
              : (this.intersectionRatio = this.isIntersecting ? 1 : 0);
          }
          function O(a, u) {
            var d = u || {};
            if (typeof a != "function")
              throw new Error("callback must be a function");
            if (d.root && d.root.nodeType != 1)
              throw new Error("root must be an Element");
            (this._checkForIntersections = bt(
              this._checkForIntersections.bind(this),
              this.THROTTLE_TIMEOUT
            )),
              (this._callback = a),
              (this._observationTargets = []),
              (this._queuedEntries = []),
              (this._rootMarginValues = this._parseRootMargin(d.rootMargin)),
              (this.thresholds = this._initThresholds(d.threshold)),
              (this.root = d.root || null),
              (this.rootMargin = this._rootMarginValues
                .map(function (A) {
                  return A.value + A.unit;
                })
                .join(" ")),
              (this._monitoringDocuments = []),
              (this._monitoringUnsubscribes = []);
          }
          (O.prototype.THROTTLE_TIMEOUT = 100),
            (O.prototype.POLL_INTERVAL = null),
            (O.prototype.USE_MUTATION_OBSERVER = !0),
            (O._setupCrossOriginUpdater = function () {
              return (
                w ||
                  (w = function (a, u) {
                    !a || !u ? (B = N()) : (B = Q(a, u)),
                      S.forEach(function (d) {
                        d._checkForIntersections();
                      });
                  }),
                w
              );
            }),
            (O._resetCrossOriginUpdater = function () {
              (w = null), (B = null);
            }),
            (O.prototype.observe = function (a) {
              var u = this._observationTargets.some(function (d) {
                return d.element == a;
              });
              if (!u) {
                if (!(a && a.nodeType == 1))
                  throw new Error("target must be an Element");
                this._registerInstance(),
                  this._observationTargets.push({ element: a, entry: null }),
                  this._monitorIntersections(a.ownerDocument),
                  this._checkForIntersections();
              }
            }),
            (O.prototype.unobserve = function (a) {
              (this._observationTargets = this._observationTargets.filter(
                function (u) {
                  return u.element != a;
                }
              )),
                this._unmonitorIntersections(a.ownerDocument),
                this._observationTargets.length == 0 &&
                  this._unregisterInstance();
            }),
            (O.prototype.disconnect = function () {
              (this._observationTargets = []),
                this._unmonitorAllIntersections(),
                this._unregisterInstance();
            }),
            (O.prototype.takeRecords = function () {
              var a = this._queuedEntries.slice();
              return (this._queuedEntries = []), a;
            }),
            (O.prototype._initThresholds = function (a) {
              var u = a || [0];
              return (
                Array.isArray(u) || (u = [u]),
                u.sort().filter(function (d, A, g) {
                  if (typeof d != "number" || isNaN(d) || d < 0 || d > 1)
                    throw new Error(
                      "threshold must be a number between 0 and 1 inclusively"
                    );
                  return d !== g[A - 1];
                })
              );
            }),
            (O.prototype._parseRootMargin = function (a) {
              var u = a || "0px",
                d = u.split(/\s+/).map(function (A) {
                  var g = /^(-?\d*\.?\d+)(px|%)$/.exec(A);
                  if (!g)
                    throw new Error(
                      "rootMargin must be specified in pixels or percent"
                    );
                  return { value: parseFloat(g[1]), unit: g[2] };
                });
              return (
                (d[1] = d[1] || d[0]),
                (d[2] = d[2] || d[0]),
                (d[3] = d[3] || d[1]),
                d
              );
            }),
            (O.prototype._monitorIntersections = function (a) {
              var u = a.defaultView;
              if (u && this._monitoringDocuments.indexOf(a) == -1) {
                var d = this._checkForIntersections,
                  A = null,
                  g = null;
                if (
                  (this.POLL_INTERVAL
                    ? (A = u.setInterval(d, this.POLL_INTERVAL))
                    : (ut(u, "resize", d, !0),
                      ut(a, "scroll", d, !0),
                      this.USE_MUTATION_OBSERVER &&
                        "MutationObserver" in u &&
                        ((g = new u.MutationObserver(d)),
                        g.observe(a, {
                          attributes: !0,
                          childList: !0,
                          characterData: !0,
                          subtree: !0,
                        }))),
                  this._monitoringDocuments.push(a),
                  this._monitoringUnsubscribes.push(function () {
                    var L = a.defaultView;
                    L && (A && L.clearInterval(A), Z(L, "resize", d, !0)),
                      Z(a, "scroll", d, !0),
                      g && g.disconnect();
                  }),
                  a != ((this.root && this.root.ownerDocument) || x))
                ) {
                  var b = F(a);
                  b && this._monitorIntersections(b.ownerDocument);
                }
              }
            }),
            (O.prototype._unmonitorIntersections = function (a) {
              var u = this._monitoringDocuments.indexOf(a);
              if (u != -1) {
                var d = (this.root && this.root.ownerDocument) || x,
                  A = this._observationTargets.some(function (L) {
                    var P = L.element.ownerDocument;
                    if (P == a) return !0;
                    for (; P && P != d; ) {
                      var T = F(P);
                      if (((P = T && T.ownerDocument), P == a)) return !0;
                    }
                    return !1;
                  });
                if (!A) {
                  var g = this._monitoringUnsubscribes[u];
                  if (
                    (this._monitoringDocuments.splice(u, 1),
                    this._monitoringUnsubscribes.splice(u, 1),
                    g(),
                    a != d)
                  ) {
                    var b = F(a);
                    b && this._unmonitorIntersections(b.ownerDocument);
                  }
                }
              }
            }),
            (O.prototype._unmonitorAllIntersections = function () {
              var a = this._monitoringUnsubscribes.slice(0);
              (this._monitoringDocuments.length = 0),
                (this._monitoringUnsubscribes.length = 0);
              for (var u = 0; u < a.length; u++) a[u]();
            }),
            (O.prototype._checkForIntersections = function () {
              if (!(!this.root && w && !B)) {
                var a = this._rootIsInDom(),
                  u = a ? this._getRootRect() : N();
                this._observationTargets.forEach(function (d) {
                  var A = d.element,
                    g = $(A),
                    b = this._rootContainsTarget(A),
                    L = d.entry,
                    P =
                      a && b && this._computeTargetAndRootIntersection(A, g, u),
                    T = (d.entry = new st({
                      time: ct(),
                      target: A,
                      boundingClientRect: g,
                      rootBounds: w && !this.root ? null : u,
                      intersectionRect: P,
                    }));
                  L
                    ? a && b
                      ? this._hasCrossedThreshold(L, T) &&
                        this._queuedEntries.push(T)
                      : L && L.isIntersecting && this._queuedEntries.push(T)
                    : this._queuedEntries.push(T);
                }, this),
                  this._queuedEntries.length &&
                    this._callback(this.takeRecords(), this);
              }
            }),
            (O.prototype._computeTargetAndRootIntersection = function (
              a,
              u,
              d
            ) {
              if (window.getComputedStyle(a).display != "none") {
                for (var A = u, g = V(a), b = !1; !b && g; ) {
                  var L = null,
                    P = g.nodeType == 1 ? window.getComputedStyle(g) : {};
                  if (P.display == "none") return null;
                  if (g == this.root || g.nodeType == 9)
                    if (((b = !0), g == this.root || g == x))
                      w && !this.root
                        ? !B || (B.width == 0 && B.height == 0)
                          ? ((g = null), (L = null), (A = null))
                          : (L = B)
                        : (L = d);
                    else {
                      var T = V(g),
                        J = T && $(T),
                        rt =
                          T && this._computeTargetAndRootIntersection(T, J, d);
                      J && rt
                        ? ((g = T), (L = Q(J, rt)))
                        : ((g = null), (A = null));
                    }
                  else {
                    var vt = g.ownerDocument;
                    g != vt.body &&
                      g != vt.documentElement &&
                      P.overflow != "visible" &&
                      (L = $(g));
                  }
                  if ((L && (A = D(L, A)), !A)) break;
                  g = g && V(g);
                }
                return A;
              }
            }),
            (O.prototype._getRootRect = function () {
              var a;
              if (this.root) a = $(this.root);
              else {
                var u = x.documentElement,
                  d = x.body;
                a = {
                  top: 0,
                  left: 0,
                  right: u.clientWidth || d.clientWidth,
                  width: u.clientWidth || d.clientWidth,
                  bottom: u.clientHeight || d.clientHeight,
                  height: u.clientHeight || d.clientHeight,
                };
              }
              return this._expandRectByRootMargin(a);
            }),
            (O.prototype._expandRectByRootMargin = function (a) {
              var u = this._rootMarginValues.map(function (A, g) {
                  return A.unit == "px"
                    ? A.value
                    : (A.value * (g % 2 ? a.width : a.height)) / 100;
                }),
                d = {
                  top: a.top - u[0],
                  right: a.right + u[1],
                  bottom: a.bottom + u[2],
                  left: a.left - u[3],
                };
              return (
                (d.width = d.right - d.left), (d.height = d.bottom - d.top), d
              );
            }),
            (O.prototype._hasCrossedThreshold = function (a, u) {
              var d = a && a.isIntersecting ? a.intersectionRatio || 0 : -1,
                A = u.isIntersecting ? u.intersectionRatio || 0 : -1;
              if (d !== A)
                for (var g = 0; g < this.thresholds.length; g++) {
                  var b = this.thresholds[g];
                  if (b == d || b == A || b < d != b < A) return !0;
                }
            }),
            (O.prototype._rootIsInDom = function () {
              return !this.root || nt(x, this.root);
            }),
            (O.prototype._rootContainsTarget = function (a) {
              return (
                nt(this.root || x, a) &&
                (!this.root || this.root.ownerDocument == a.ownerDocument)
              );
            }),
            (O.prototype._registerInstance = function () {
              S.indexOf(this) < 0 && S.push(this);
            }),
            (O.prototype._unregisterInstance = function () {
              var a = S.indexOf(this);
              a != -1 && S.splice(a, 1);
            });
          function ct() {
            return window.performance && performance.now && performance.now();
          }
          function bt(a, u) {
            var d = null;
            return function () {
              d ||
                (d = setTimeout(function () {
                  a(), (d = null);
                }, u));
            };
          }
          function ut(a, u, d, A) {
            typeof a.addEventListener == "function"
              ? a.addEventListener(u, d, A || !1)
              : typeof a.attachEvent == "function" &&
                a.attachEvent("on" + u, d);
          }
          function Z(a, u, d, A) {
            typeof a.removeEventListener == "function"
              ? a.removeEventListener(u, d, A || !1)
              : typeof a.detatchEvent == "function" &&
                a.detatchEvent("on" + u, d);
          }
          function D(a, u) {
            var d = Math.max(a.top, u.top),
              A = Math.min(a.bottom, u.bottom),
              g = Math.max(a.left, u.left),
              b = Math.min(a.right, u.right),
              L = b - g,
              P = A - d;
            return (
              (L >= 0 &&
                P >= 0 && {
                  top: d,
                  bottom: A,
                  left: g,
                  right: b,
                  width: L,
                  height: P,
                }) ||
              null
            );
          }
          function $(a) {
            var u;
            try {
              u = a.getBoundingClientRect();
            } catch (d) {}
            return u
              ? ((u.width && u.height) ||
                  (u = {
                    top: u.top,
                    right: u.right,
                    bottom: u.bottom,
                    left: u.left,
                    width: u.right - u.left,
                    height: u.bottom - u.top,
                  }),
                u)
              : N();
          }
          function N() {
            return {
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              width: 0,
              height: 0,
            };
          }
          function j(a) {
            return !a || "x" in a
              ? a
              : {
                  top: a.top,
                  y: a.top,
                  bottom: a.bottom,
                  left: a.left,
                  x: a.left,
                  right: a.right,
                  width: a.width,
                  height: a.height,
                };
          }
          function Q(a, u) {
            var d = u.top - a.top,
              A = u.left - a.left;
            return {
              top: d,
              left: A,
              height: u.height,
              width: u.width,
              bottom: d + u.height,
              right: A + u.width,
            };
          }
          function nt(a, u) {
            for (var d = u; d; ) {
              if (d == a) return !0;
              d = V(d);
            }
            return !1;
          }
          function V(a) {
            var u = a.parentNode;
            return a.nodeType == 9 && a != x
              ? F(a)
              : u && u.nodeType == 11 && u.host
              ? u.host
              : u && u.assignedSlot
              ? u.assignedSlot.parentNode
              : u;
          }
          function F(a) {
            try {
              return (a.defaultView && a.defaultView.frameElement) || null;
            } catch (u) {
              return null;
            }
          }
          (window.IntersectionObserver = O),
            (window.IntersectionObserverEntry = st);
        })();
      },
      2483: function (x) {
        (function (S, w) {
          x.exports = w();
        })(this, function () {
          "use strict";
          function S() {
            return (
              (S =
                Object.assign ||
                function (r) {
                  for (var c = 1; c < arguments.length; c++) {
                    var l = arguments[c];
                    for (var f in l)
                      Object.prototype.hasOwnProperty.call(l, f) &&
                        (r[f] = l[f]);
                  }
                  return r;
                }),
              S.apply(this, arguments)
            );
          }
          var w = typeof window != "undefined",
            B =
              (w && !("onscroll" in window)) ||
              (typeof navigator != "undefined" &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            st = w && "IntersectionObserver" in window,
            O = w && "classList" in document.createElement("p"),
            ct = w && window.devicePixelRatio > 1,
            bt = {
              elements_selector: ".lazy",
              container: B || w ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_bg_set: "bg-set",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
              restore_on_error: !1,
            },
            ut = function (r) {
              return S({}, bt, r);
            },
            Z = function (r, c) {
              var l,
                f = "LazyLoad::Initialized",
                t = new r(c);
              try {
                l = new CustomEvent(f, { detail: { instance: t } });
              } catch (e) {
                (l = document.createEvent("CustomEvent")).initCustomEvent(
                  f,
                  !1,
                  !1,
                  { instance: t }
                );
              }
              window.dispatchEvent(l);
            },
            D = "src",
            $ = "srcset",
            N = "sizes",
            j = "poster",
            Q = "llOriginalAttrs",
            nt = "data",
            V = "loading",
            F = "loaded",
            a = "applied",
            u = "error",
            d = "native",
            A = "data-",
            g = "ll-status",
            b = function (r, c) {
              return r.getAttribute(A + c);
            },
            L = function (r) {
              return b(r, g);
            },
            P = function (r, c) {
              return (function (l, f, t) {
                var e = "data-ll-status";
                t !== null ? l.setAttribute(e, t) : l.removeAttribute(e);
              })(r, 0, c);
            },
            T = function (r) {
              return P(r, null);
            },
            J = function (r) {
              return L(r) === null;
            },
            rt = function (r) {
              return L(r) === d;
            },
            vt = [V, F, a, u],
            Y = function (r, c, l, f) {
              r &&
                typeof r == "function" &&
                (f === void 0 ? (l === void 0 ? r(c) : r(c, l)) : r(c, l, f));
            },
            K = function (r, c) {
              O
                ? r.classList.add(c)
                : (r.className += (r.className ? " " : "") + c);
            },
            U = function (r, c) {
              O
                ? r.classList.remove(c)
                : (r.className = r.className
                    .replace(new RegExp("(^|\\s+)" + c + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            Lt = function (r) {
              return r.llTempImage;
            },
            gt = function (r, c) {
              if (c) {
                var l = c._observer;
                l && l.unobserve(r);
              }
            },
            wt = function (r, c) {
              r && (r.loadingCount += c);
            },
            zt = function (r, c) {
              r && (r.toLoadCount = c);
            },
            xt = function (r) {
              for (var c, l = [], f = 0; (c = r.children[f]); f += 1)
                c.tagName === "SOURCE" && l.push(c);
              return l;
            },
            lt = function (r, c) {
              var l = r.parentNode;
              l && l.tagName === "PICTURE" && xt(l).forEach(c);
            },
            Pt = function (r, c) {
              xt(r).forEach(c);
            },
            R = [D],
            St = [D, j],
            tt = [D, $, N],
            At = [nt],
            dt = function (r) {
              return !!r[Q];
            },
            yt = function (r) {
              return r[Q];
            },
            Tt = function (r) {
              return delete r[Q];
            },
            it = function (r, c) {
              if (!dt(r)) {
                var l = {};
                c.forEach(function (f) {
                  l[f] = r.getAttribute(f);
                }),
                  (r[Q] = l);
              }
            },
            G = function (r, c) {
              if (dt(r)) {
                var l = yt(r);
                c.forEach(function (f) {
                  (function (t, e, n) {
                    n ? t.setAttribute(e, n) : t.removeAttribute(e);
                  })(r, f, l[f]);
                });
              }
            },
            Et = function (r, c, l) {
              K(r, c.class_applied),
                P(r, a),
                l &&
                  (c.unobserve_completed && gt(r, c),
                  Y(c.callback_applied, r, l));
            },
            Mt = function (r, c, l) {
              K(r, c.class_loading),
                P(r, V),
                l && (wt(l, 1), Y(c.callback_loading, r, l));
            },
            H = function (r, c, l) {
              l && r.setAttribute(c, l);
            },
            Rt = function (r, c) {
              H(r, N, b(r, c.data_sizes)),
                H(r, $, b(r, c.data_srcset)),
                H(r, D, b(r, c.data_src));
            },
            Ct = {
              IMG: function (r, c) {
                lt(r, function (l) {
                  it(l, tt), Rt(l, c);
                }),
                  it(r, tt),
                  Rt(r, c);
              },
              IFRAME: function (r, c) {
                it(r, R), H(r, D, b(r, c.data_src));
              },
              VIDEO: function (r, c) {
                Pt(r, function (l) {
                  it(l, R), H(l, D, b(l, c.data_src));
                }),
                  it(r, St),
                  H(r, j, b(r, c.data_poster)),
                  H(r, D, b(r, c.data_src)),
                  r.load();
              },
              OBJECT: function (r, c) {
                it(r, At), H(r, nt, b(r, c.data_src));
              },
            },
            Ut = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            kt = function (r, c) {
              !c ||
                (function (l) {
                  return l.loadingCount > 0;
                })(c) ||
                (function (l) {
                  return l.toLoadCount > 0;
                })(c) ||
                Y(r.callback_finish, c);
            },
            Bt = function (r, c, l) {
              r.addEventListener(c, l), (r.llEvLisnrs[c] = l);
            },
            Dt = function (r, c, l) {
              r.removeEventListener(c, l);
            },
            Ot = function (r) {
              return !!r.llEvLisnrs;
            },
            k = function (r) {
              if (Ot(r)) {
                var c = r.llEvLisnrs;
                for (var l in c) {
                  var f = c[l];
                  Dt(r, l, f);
                }
                delete r.llEvLisnrs;
              }
            },
            Wt = function (r, c, l) {
              (function (f) {
                delete f.llTempImage;
              })(r),
                wt(l, -1),
                (function (f) {
                  f && (f.toLoadCount -= 1);
                })(l),
                U(r, c.class_loading),
                c.unobserve_completed && gt(r, l);
            },
            jt = function (r, c, l) {
              var f = Lt(r) || r;
              Ot(f) ||
                (function (t, e, n) {
                  Ot(t) || (t.llEvLisnrs = {});
                  var i = t.tagName === "VIDEO" ? "loadeddata" : "load";
                  Bt(t, i, e), Bt(t, "error", n);
                })(
                  f,
                  function (t) {
                    (function (e, n, i, o) {
                      var s = rt(n);
                      Wt(n, i, o),
                        K(n, i.class_loaded),
                        P(n, F),
                        Y(i.callback_loaded, n, o),
                        s || kt(i, o);
                    })(0, r, c, l),
                      k(f);
                  },
                  function (t) {
                    (function (e, n, i, o) {
                      var s = rt(n);
                      Wt(n, i, o),
                        K(n, i.class_error),
                        P(n, u),
                        Y(i.callback_error, n, o),
                        i.restore_on_error && G(n, tt),
                        s || kt(i, o);
                    })(0, r, c, l),
                      k(f);
                  }
                );
            },
            Ht = function (r, c, l) {
              (function (f) {
                return Ut.indexOf(f.tagName) > -1;
              })(r)
                ? (function (f, t, e) {
                    jt(f, t, e),
                      (function (n, i, o) {
                        var s = Ct[n.tagName];
                        s && (s(n, i), Mt(n, i, o));
                      })(f, t, e);
                  })(r, c, l)
                : (function (f, t, e) {
                    (function (n) {
                      n.llTempImage = document.createElement("IMG");
                    })(f),
                      jt(f, t, e),
                      (function (n) {
                        dt(n) ||
                          (n[Q] = { backgroundImage: n.style.backgroundImage });
                      })(f),
                      (function (n, i, o) {
                        var s = b(n, i.data_bg),
                          p = b(n, i.data_bg_hidpi),
                          v = ct && p ? p : s;
                        v &&
                          ((n.style.backgroundImage = 'url("'.concat(v, '")')),
                          Lt(n).setAttribute(D, v),
                          Mt(n, i, o));
                      })(f, t, e),
                      (function (n, i, o) {
                        var s = b(n, i.data_bg_multi),
                          p = b(n, i.data_bg_multi_hidpi),
                          v = ct && p ? p : s;
                        v && ((n.style.backgroundImage = v), Et(n, i, o));
                      })(f, t, e),
                      (function (n, i, o) {
                        var s = b(n, i.data_bg_set);
                        if (s) {
                          var p = s.split("|"),
                            v = p.map(function (m) {
                              return "image-set(".concat(m, ")");
                            });
                          (n.style.backgroundImage = v.join()),
                            n.style.backgroundImage === "" &&
                              ((v = p.map(function (m) {
                                return "-webkit-image-set(".concat(m, ")");
                              })),
                              (n.style.backgroundImage = v.join())),
                            Et(n, i, o);
                        }
                      })(f, t, e);
                  })(r, c, l);
            },
            Qt = function (r) {
              r.removeAttribute(D), r.removeAttribute($), r.removeAttribute(N);
            },
            Vt = function (r) {
              lt(r, function (c) {
                G(c, tt);
              }),
                G(r, tt);
            },
            Xt = {
              IMG: Vt,
              IFRAME: function (r) {
                G(r, R);
              },
              VIDEO: function (r) {
                Pt(r, function (c) {
                  G(c, R);
                }),
                  G(r, St),
                  r.load();
              },
              OBJECT: function (r) {
                G(r, At);
              },
            },
            Zt = function (r, c) {
              (function (l) {
                var f = Xt[l.tagName];
                f
                  ? f(l)
                  : (function (t) {
                      if (dt(t)) {
                        var e = yt(t);
                        t.style.backgroundImage = e.backgroundImage;
                      }
                    })(l);
              })(r),
                (function (l, f) {
                  J(l) ||
                    rt(l) ||
                    (U(l, f.class_entered),
                    U(l, f.class_exited),
                    U(l, f.class_applied),
                    U(l, f.class_loading),
                    U(l, f.class_loaded),
                    U(l, f.class_error));
                })(r, c),
                T(r),
                Tt(r);
            },
            Ft = ["IMG", "IFRAME", "VIDEO"],
            Gt = function (r) {
              return r.use_native && "loading" in HTMLImageElement.prototype;
            },
            $t = function (r, c, l) {
              r.forEach(function (f) {
                return (function (t) {
                  return t.isIntersecting || t.intersectionRatio > 0;
                })(f)
                  ? (function (t, e, n, i) {
                      var o = (function (s) {
                        return vt.indexOf(L(s)) >= 0;
                      })(t);
                      P(t, "entered"),
                        K(t, n.class_entered),
                        U(t, n.class_exited),
                        (function (s, p, v) {
                          p.unobserve_entered && gt(s, v);
                        })(t, n, i),
                        Y(n.callback_enter, t, e, i),
                        o || Ht(t, n, i);
                    })(f.target, f, c, l)
                  : (function (t, e, n, i) {
                      J(t) ||
                        (K(t, n.class_exited),
                        (function (o, s, p, v) {
                          p.cancel_on_exit &&
                            (function (m) {
                              return L(m) === V;
                            })(o) &&
                            o.tagName === "IMG" &&
                            (k(o),
                            (function (m) {
                              lt(m, function (h) {
                                Qt(h);
                              }),
                                Qt(m);
                            })(o),
                            Vt(o),
                            U(o, p.class_loading),
                            wt(v, -1),
                            T(o),
                            Y(p.callback_cancel, o, s, v));
                        })(t, e, n, i),
                        Y(n.callback_exit, t, e, i));
                    })(f.target, f, c, l);
              });
            },
            qt = function (r) {
              return Array.prototype.slice.call(r);
            },
            mt = function (r) {
              return r.container.querySelectorAll(r.elements_selector);
            },
            Jt = function (r) {
              return (function (c) {
                return L(c) === u;
              })(r);
            },
            Nt = function (r, c) {
              return (function (l) {
                return qt(l).filter(J);
              })(r || mt(c));
            },
            X = function (r, c) {
              var l = ut(r);
              (this._settings = l),
                (this.loadingCount = 0),
                (function (f, t) {
                  st &&
                    !Gt(f) &&
                    (t._observer = new IntersectionObserver(
                      function (e) {
                        $t(e, f, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(f)
                    ));
                })(l, this),
                (function (f, t) {
                  w &&
                    ((t._onlineHandler = function () {
                      (function (e, n) {
                        var i;
                        ((i = mt(e)), qt(i).filter(Jt)).forEach(function (o) {
                          U(o, e.class_error), T(o);
                        }),
                          n.update();
                      })(f, t);
                    }),
                    window.addEventListener("online", t._onlineHandler));
                })(l, this),
                this.update(c);
            };
          return (
            (X.prototype = {
              update: function (r) {
                var c,
                  l,
                  f = this._settings,
                  t = Nt(r, f);
                zt(this, t.length),
                  !B && st
                    ? Gt(f)
                      ? (function (e, n, i) {
                          e.forEach(function (o) {
                            Ft.indexOf(o.tagName) !== -1 &&
                              (function (s, p, v) {
                                s.setAttribute("loading", "lazy"),
                                  jt(s, p, v),
                                  (function (m, h) {
                                    var y = Ct[m.tagName];
                                    y && y(m, h);
                                  })(s, p),
                                  P(s, d);
                              })(o, n, i);
                          }),
                            zt(i, 0);
                        })(t, f, this)
                      : ((l = t),
                        (function (e) {
                          e.disconnect();
                        })((c = this._observer)),
                        (function (e, n) {
                          n.forEach(function (i) {
                            e.observe(i);
                          });
                        })(c, l))
                    : this.loadAll(t);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  w &&
                    window.removeEventListener("online", this._onlineHandler),
                  mt(this._settings).forEach(function (r) {
                    Tt(r);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this._onlineHandler,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (r) {
                var c = this,
                  l = this._settings;
                Nt(r, l).forEach(function (f) {
                  gt(f, c), Ht(f, l, c);
                });
              },
              restoreAll: function () {
                var r = this._settings;
                mt(r).forEach(function (c) {
                  Zt(c, r);
                });
              },
            }),
            (X.load = function (r, c) {
              var l = ut(c);
              Ht(r, l);
            }),
            (X.resetStatus = function (r) {
              T(r);
            }),
            w &&
              (function (r, c) {
                if (c)
                  if (c.length) for (var l, f = 0; (l = c[f]); f += 1) Z(r, l);
                  else Z(r, c);
              })(X, window.lazyLoadOptions),
            X
          );
        });
      },
    },
    Yt = {};
  function q(x) {
    var S = Yt[x];
    if (S !== void 0) return S.exports;
    var w = (Yt[x] = { exports: {} });
    return te[x].call(w.exports, w, w.exports, q), w.exports;
  }
  (function () {
    q.n = function (x) {
      var S =
        x && x.__esModule
          ? function () {
              return x.default;
            }
          : function () {
              return x;
            };
      return q.d(S, { a: S }), S;
    };
  })(),
    (function () {
      q.d = function (x, S) {
        for (var w in S)
          q.o(S, w) &&
            !q.o(x, w) &&
            Object.defineProperty(x, w, { enumerable: !0, get: S[w] });
      };
    })(),
    (function () {
      q.o = function (x, S) {
        return Object.prototype.hasOwnProperty.call(x, S);
      };
    })();
  var ne = {};
  (function () {
    var x = Object.defineProperty,
      S = Object.defineProperties,
      w = Object.getOwnPropertyDescriptors,
      B = Object.getOwnPropertySymbols,
      st = Object.prototype.hasOwnProperty,
      O = Object.prototype.propertyIsEnumerable,
      ct = (t, e, n) =>
        e in t
          ? x(t, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (t[e] = n),
      bt = (t, e) => {
        for (var n in e || (e = {})) st.call(e, n) && ct(t, n, e[n]);
        if (B) for (var n of B(e)) O.call(e, n) && ct(t, n, e[n]);
        return t;
      },
      ut = (t, e) => S(t, w(e));
    const Z = {
        pc: {
          mediaQuery: "(min-width: 1024px)",
          scaling: { enabled: !0, padding: 64 },
          hiddenClass: ["mo-only", "pad-only", "pc-hidden"],
          basicWidth: 1440,
          medias: [
            { ratio: 1, width: { min: 1440 }, alias: "1440", scaling: !1 },
            { ratio: 0.7111, width: { min: 1024 }, alias: "1024" },
          ],
        },
        mo: {
          mediaQuery: "(max-width: 649px)",
          scaling: { enabled: !0, padding: 16 },
          hiddenClass: ["pc-only", "pad-only", "mo-hidden"],
          basicWidth: 360,
          medias: [{ ratio: 1, width: { max: 649 }, alias: "360" }],
        },
        pad: {
          mediaQuery: "(min-width: 650px) and (max-width: 1023px)",
          scaling: { enabled: !0, padding: 24 },
          hiddenClass: ["pc-only", "mo-only", "pad-hidden"],
          basicWidth: 768,
          medias: [{ ratio: 1, alias: "650", width: { min: 650 } }],
        },
      },
      D = Object.entries(Z).reduce(
        (t, [e, n]) =>
          ut(bt({}, t), { [`@src-${e}`]: { baseRatio: 1, medias: n.medias } }),
        {
          "@src-default": {
            baseRatio: 1,
            medias: Object.values(Z).flatMap((t) => t.medias),
          },
        }
      );
    var N = {
        mediaConf: Z,
        rootClass: "zn--wrapper",
        exMediaQueries: {
          pct: "(min-width: 1024.0px)",
          mot: "(max-width: 1023.0px)",
        },
        lang: !1,
        image: { attrs: D, quality: 75 },
        build: {
          hash: !1,
          transform: [{ from: "@figma", to: "data-figma", remove: ["prod"] }],
          textPicker: { disabled: !0 },
          generate0ldHtml: !0,
        },
      },
      j = function () {
        return (
          (j =
            Object.assign ||
            function (e) {
              for (var n, i = 1, o = arguments.length; i < o; i++) {
                n = arguments[i];
                for (var s in n)
                  Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
              }
              return e;
            }),
          j.apply(this, arguments)
        );
      },
      Q = new URLSearchParams(window.location.search).has("debug");
    function nt() {
      return (
        Q &&
          console.log(
            window.innerHeight || document.documentElement.clientHeight
          ),
        window.innerHeight || document.documentElement.clientHeight
      );
    }
    function V() {
      return (
        Q &&
          console.log(
            document.documentElement.clientWidth || window.innerWidth
          ),
        document.documentElement.clientWidth || window.innerWidth
      );
    }
    function F(t) {
      return function (e) {
        var n = t.indexOf(e);
        n !== -1 && t.splice(n, 1);
      };
    }
    var a = (function () {
      function t() {
        var e = this;
        (this.size = Object.create(null)),
          (this.listeners = { width: [], height: [], size: [] }),
          (this.onResize = function () {
            var i = e,
              o = i.size,
              s = i.listeners,
              p = o.width,
              v = o.height;
            (o.width = V()), (o.height = nt());
            var m = !1;
            o.width !== p &&
              (s.width.forEach(function (h) {
                return h(o.width, p);
              }),
              (m = !0)),
              o.height !== v &&
                (s.height.forEach(function (h) {
                  return h(o.height, v);
                }),
                (m = !0)),
              m &&
                s.size.forEach(function (h) {
                  return h(
                    { width: o.width, height: o.height },
                    { width: p, height: v }
                  );
                });
          }),
          (this.removeWidthHandler = F(this.listeners.width)),
          (this.removeHeightHandler = F(this.listeners.height)),
          (this.removeSizeHandler = F(this.listeners.size));
        var n = setInterval(this.onResize, 100);
        window.addEventListener("load", function () {
          clearTimeout(n);
        }),
          window.addEventListener("resize", this.onResize);
      }
      return (
        (t.getWidth = function () {
          return this.singleton.width;
        }),
        (t.getHeight = function () {
          return this.singleton.height;
        }),
        (t.getSize = function () {
          return { width: this.singleton.width, height: this.singleton.height };
        }),
        (t.addWidthListener = function (e) {
          return this.singleton.addWidthListener(e);
        }),
        (t.addHeightListener = function (e) {
          return this.singleton.addHeightListener(e);
        }),
        (t.prototype.destroy = function () {
          window.removeEventListener("resize", this.onResize);
        }),
        Object.defineProperty(t.prototype, "height", {
          get: function () {
            var e = this.size;
            return e.height || (e.height = nt()) || 0;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "width", {
          get: function () {
            var e = this.size;
            return e.width || (e.width = V()) || 0;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.addWidthListener = function (e) {
          var n = this;
          return (
            this.listeners.width.push(e),
            function () {
              return n.removeWidthHandler(e);
            }
          );
        }),
        (t.prototype.addHeightListener = function (e) {
          var n = this;
          return (
            this.listeners.height.push(e),
            function () {
              return n.removeHeightHandler(e);
            }
          );
        }),
        (t.prototype.addSizeListener = function (e) {
          var n = this;
          return (
            this.listeners.size.push(e),
            function () {
              return n.removeSizeHandler(e);
            }
          );
        }),
        (t.singleton = new t()),
        t
      );
    })();
    function u(t) {
      var e = Object.keys(t)[0];
      return j(j({}, t[e].medias[0]), { type: e });
    }
    function d(t, e) {
      var n = e === void 0 ? a.getSize() : e,
        i = n.width,
        o = n.height,
        s = i > o ? "landscape" : "portrait",
        p,
        v = Object.keys(t).filter(function (W) {
          return window.matchMedia(t[W].mediaQuery).matches;
        });
      if (v.length)
        for (
          var m = v.sort(function (W, ft) {
              var ht, et, It, ot;
              return (
                ((et =
                  (ht = t[ft]) === null || ht === void 0
                    ? void 0
                    : ht.weight) !== null && et !== void 0
                  ? et
                  : 0) -
                ((ot =
                  (It = t[W]) === null || It === void 0
                    ? void 0
                    : It.weight) !== null && ot !== void 0
                  ? ot
                  : 0)
              );
            })[0],
            h = t[m].medias,
            y = 0;
          y < h.length;
          y += 1
        ) {
          var _ = h[y],
            E = _.width,
            z = _.orientation;
          if (!z || z === s) {
            var M =
              (E.min !== void 0 && i < E.min) ||
              (E.max !== void 0 && i > E.max);
            if (!M) {
              p = j(j({}, _), { type: m });
              break;
            }
          }
        }
      return p != null ? p : u(t);
    }
    var A = q(2483),
      g = q.n(A);
    function b() {
      return window.CSS && window.CSS.supports("height", "var(--vh)");
    }
    function L(t) {
      if ((t === void 0 && (t = "inset(0 0 0 0 round 1px)"), !window.CSS))
        return !1;
      var e = ["clip-path", "-webkit-clip-path"].find(function (n) {
        return window.CSS.supports(n, t);
      });
      return e || !1;
    }
    var P = {
        lossy: void 0,
        lossless: void 0,
        alpha: void 0,
        animation: void 0,
      },
      T,
      J = function (t, e, n) {
        return (
          n === void 0 && (n = "normal"),
          new Promise(function (i) {
            var o = new Image();
            (o.src = "data:image/".concat(t, ";base64,").concat(e)),
              (o.onload = function () {
                var s = o.width > 0 && o.height > 0;
                i(s && n);
              }),
              (o.onerror = function () {
                i(void 0);
              });
          })
        );
      };
    function rt(t) {
      if ((t === void 0 && (t = "alpha"), !P[t])) {
        var e = {
          lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
          lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
          alpha:
            "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
          animation:
            "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
        };
        e[t] && (P[t] = J("webp", e[t], t));
      }
      return P[t];
    }
    function vt() {
      return (
        T ||
          (T = J(
            "avif",
            "AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="
          )),
        T
      );
    }
    var Y = Object.create,
      K = Object.defineProperty,
      U = Object.getOwnPropertyDescriptor,
      Lt = Object.getOwnPropertyNames,
      gt = Object.getPrototypeOf,
      wt = Object.prototype.hasOwnProperty,
      zt = (t, e, n, i) => {
        if ((e && typeof e == "object") || typeof e == "function")
          for (let o of Lt(e))
            !wt.call(t, o) &&
              o !== n &&
              K(t, o, {
                get: () => e[o],
                enumerable: !(i = U(e, o)) || i.enumerable,
              });
        return t;
      },
      xt = (t, e, n) => (
        (n = t != null ? Y(gt(t)) : {}),
        zt(
          e || !t || !t.__esModule
            ? K(n, "default", { value: t, enumerable: !0 })
            : n,
          t
        )
      ),
      lt = function (t, e) {
        return (
          (lt =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (n, i) {
                n.__proto__ = i;
              }) ||
            function (n, i) {
              for (var o in i)
                Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
            }),
          lt(t, e)
        );
      };
    function Pt(t, e) {
      if (typeof e != "function" && e !== null)
        throw new TypeError(
          "Class extends value " + String(e) + " is not a constructor or null"
        );
      lt(t, e);
      function n() {
        this.constructor = t;
      }
      t.prototype =
        e === null ? Object.create(e) : ((n.prototype = e.prototype), new n());
    }
    var R = function () {
      return (
        (R =
          Object.assign ||
          function (e) {
            for (var n, i = 1, o = arguments.length; i < o; i++) {
              n = arguments[i];
              for (var s in n)
                Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
            }
            return e;
          }),
        R.apply(this, arguments)
      );
    };
    function St(t, e) {
      var n = {};
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) &&
          e.indexOf(i) < 0 &&
          (n[i] = t[i]);
      if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, i = Object.getOwnPropertySymbols(t); o < i.length; o++)
          e.indexOf(i[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(t, i[o]) &&
            (n[i[o]] = t[i[o]]);
      return n;
    }
    function tt(t, e, n, i) {
      function o(s) {
        return s instanceof n
          ? s
          : new n(function (p) {
              p(s);
            });
      }
      return new (n || (n = Promise))(function (s, p) {
        function v(y) {
          try {
            h(i.next(y));
          } catch (_) {
            p(_);
          }
        }
        function m(y) {
          try {
            h(i.throw(y));
          } catch (_) {
            p(_);
          }
        }
        function h(y) {
          y.done ? s(y.value) : o(y.value).then(v, m);
        }
        h((i = i.apply(t, e || [])).next());
      });
    }
    function At(t, e) {
      var n = {
          label: 0,
          sent: function () {
            if (s[0] & 1) throw s[1];
            return s[1];
          },
          trys: [],
          ops: [],
        },
        i,
        o,
        s,
        p;
      return (
        (p = { next: v(0), throw: v(1), return: v(2) }),
        typeof Symbol == "function" &&
          (p[Symbol.iterator] = function () {
            return this;
          }),
        p
      );
      function v(h) {
        return function (y) {
          return m([h, y]);
        };
      }
      function m(h) {
        if (i) throw new TypeError("Generator is already executing.");
        for (; n; )
          try {
            if (
              ((i = 1),
              o &&
                (s =
                  h[0] & 2
                    ? o.return
                    : h[0]
                    ? o.throw || ((s = o.return) && s.call(o), 0)
                    : o.next) &&
                !(s = s.call(o, h[1])).done)
            )
              return s;
            switch (((o = 0), s && (h = [h[0] & 2, s.value]), h[0])) {
              case 0:
              case 1:
                s = h;
                break;
              case 4:
                return n.label++, { value: h[1], done: !1 };
              case 5:
                n.label++, (o = h[1]), (h = [0]);
                continue;
              case 7:
                (h = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  ((s = n.trys),
                  !(s = s.length > 0 && s[s.length - 1]) &&
                    (h[0] === 6 || h[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (h[0] === 3 && (!s || (h[1] > s[0] && h[1] < s[3]))) {
                  n.label = h[1];
                  break;
                }
                if (h[0] === 6 && n.label < s[1]) {
                  (n.label = s[1]), (s = h);
                  break;
                }
                if (s && n.label < s[2]) {
                  (n.label = s[2]), n.ops.push(h);
                  break;
                }
                s[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            h = e.call(t, n);
          } catch (y) {
            (h = [6, y]), (o = 0);
          } finally {
            i = s = 0;
          }
        if (h[0] & 5) throw h[1];
        return { value: h[0] ? h[1] : void 0, done: !0 };
      }
    }
    function dt(t, e, n) {
      if (n || arguments.length === 2)
        for (var i = 0, o = e.length, s; i < o; i++)
          (s || !(i in e)) &&
            (s || (s = Array.prototype.slice.call(e, 0, i)), (s[i] = e[i]));
      return t.concat(s || Array.prototype.slice.call(e));
    }
    var yt = (function (t) {
      Pt(e, t);
      function e(n, i) {
        var o = t.call(this, n) || this;
        return (o.element = i), o;
      }
      return e;
    })(Error);
    function Tt(t) {
      return t instanceof HTMLImageElement;
    }
    function it(t) {
      return t instanceof HTMLVideoElement;
    }
    function G(t) {
      return (t && "data-".concat(t)) || "";
    }
    function Et(t, e) {
      var n = t.src,
        i = t.poster;
      t.srcset;
      var o = t.bg,
        s = t.delay,
        p = t.classes,
        v = p === void 0 ? {} : p;
      t.mediaConf;
      var m = St(t, [
          "src",
          "poster",
          "srcset",
          "bg",
          "delay",
          "classes",
          "mediaConf",
        ]),
        h = "pc";
      if (e) {
        h = e.type;
        var y = e.alias,
          _ = e.imageAlias,
          E = function (z) {
            return "".concat(z, "-").concat(_ || y);
          };
        (n = E(n)), (i = E(i)), (o = E(o));
      }
      return R(R({ type: h }, m), {
        data_src: n,
        data_poster: i,
        data_bg: o,
        load_delay: s,
        class_loading: v.loading,
        class_loaded: v.loaded,
        class_applied: v.applied,
        class_error: v.error,
      });
    }
    var Mt = (function () {
      function t(e) {
        var n = this;
        (this.options = e),
          (this.destroyed = !1),
          (this.update = function (i) {
            return n.lazyload.update(i);
          }),
          (this.lazyload = this.getLazy());
      }
      return (
        (t.load = function (e, n, i) {
          var o = this;
          return new Promise(function (s, p) {
            var v = "data-src-".concat(n.type);
            if (
              (o.preprocessElementSources(e, n, v, i),
              (Tt(e) &&
                !e.getAttribute(G(n.data_src)) &&
                !e.getAttribute(G(n.data_srcset))) ||
                (it(e) && !e.getAttribute(G(n.data_src))))
            ) {
              var m = new yt(
                ""
                  .concat(n.data_src, " or ")
                  .concat(n.data_srcset, " is necessary"),
                e
              );
              return p(m);
            }
            g().load(
              e,
              R(R({}, n), {
                callback_loaded: function () {
                  s(e);
                },
                callback_error: function () {
                  p(
                    new yt(
                      "vanilla-lazyload error: see console output for details",
                      e
                    )
                  );
                },
              })
            );
          });
        }),
        Object.defineProperty(t.prototype, "media", {
          get: function () {
            return this.mediaMatched;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "loadingCount", {
          get: function () {
            return this.lazyload.loadingCount;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "toLoadCount", {
          get: function () {
            return this.lazyload.toLoadCount;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.load = function (e) {
          var n = this,
            i = Et(this.options, this.matchMedia()),
            o = [];
          return (
            e.forEach(function (s) {
              return o.push(t.load(s, i, n.options.srcPreprocessor));
            }),
            o
          );
        }),
        (t.prototype.loadAll = function () {
          this.lazyload.loadAll();
        }),
        (t.prototype.refresh = function (e) {
          var n = this.matchMedia(e);
          (!this.destroyed && n === this.media) ||
            (this.lazyload.destroy(),
            (this.lazyload = this.getLazy(n)),
            (this.destroyed = !1));
        }),
        (t.prototype.destroy = function () {
          this.lazyload.destroy(), (this.destroyed = !0);
        }),
        (t.prototype.matchMedia = function (e) {
          return d(this.options.mediaConf, e);
        }),
        (t.prototype.getLazy = function (e) {
          var n;
          e === void 0 && (e = this.matchMedia()), (this.mediaMatched = e);
          var i = this.options,
            o = i.srcPreprocessor,
            s = i.elements,
            p = Et(this.options, e),
            v = p.data_src,
            m = p.data_srcset,
            h = p.data_poster,
            y = p.data_bg,
            _ = "data-src-".concat(
              ((n = this.mediaMatched) === null || n === void 0
                ? void 0
                : n.type) || "pc"
            ),
            E = "["
              .concat(_, "],[data-")
              .concat(v, "],[data-")
              .concat(m, "],[data-")
              .concat(h, "],[data-")
              .concat(y, "]");
          return new (g())(
            R(R({}, p), {
              callback_error: function () {
                for (var z = [], M = 0; M < arguments.length; M++)
                  z[M] = arguments[M];
                return console.error(z);
              },
              callback_enter:
                o &&
                function (z) {
                  t.preprocessElementSources(z, p, _, o);
                },
            }),
            typeof s == "undefined" || typeof s == "string"
              ? document.querySelectorAll("".concat(s || E))
              : s
          );
        }),
        (t.preprocessElementSources = function (e, n, i, o) {
          ["data_src", "data_poster", "data_bg"].forEach(function (s) {
            var p = n[s];
            if (p) {
              var v = "data-".concat(p),
                m = e.getAttribute(v) || void 0,
                h = o && o(m, { name: v, element: e, type: s, clientName: i });
              typeof h == "string" && h !== m && e.setAttribute(v, h);
            }
          });
        }),
        t
      );
    })();
    function H(t, e) {
      return typeof t == "string"
        ? H(document, t)
        : e === void 0
        ? function (n) {
            return H(t, n);
          }
        : Array.from(t.querySelectorAll(e));
    }
    var Rt = {
        data_src: "data-src",
        data_poster: "data-poster",
        data_bg: "data-bg",
      },
      Ct = "data-ll-status",
      Ut = "data-no-lazy-load";
    function kt(t, e) {
      var n, i;
      if (/^data:/i.test(t)) return t;
      var o =
        (i =
          (n = t.match(/\?[^\?]*$/)) === null || n === void 0
            ? void 0
            : n[0]) !== null && i !== void 0
          ? i
          : "";
      return e === "webp"
        ? t.replace(/\.avif(\?[^\?]*)?$/i, ".webp" + o)
        : t.replace(/\.(avif|webp)(\?[^\?]*)?$/i, "" + o);
    }
    function Bt() {
      (window.lazySizesConfig = window.lazySizesConfig || {}),
        (window.lazySizesConfig.init = !1);
    }
    function Dt(t) {
      var e;
      t === void 0 && (t = 1),
        t <= 3e3 &&
          (typeof ((e = window.lazySizes) === null || e === void 0
            ? void 0
            : e.init) == "function"
            ? window.lazySizes.init()
            : window.setTimeout(function () {
                return Dt(t + 1);
              }, 500));
    }
    var Ot = (function () {
        function t(e, n, i) {
          (this._enabled = !0), (this.waitingPromises = []);
          var o = Object.entries(e).flatMap(function (s) {
            var p = s[0],
              v = s[1];
            return R(R({}, v.medias), { type: p });
          });
          (this.bgAttributes = dt(
            ["data-bg"],
            o.map(function (s) {
              var p = s.alias;
              return "data-bg-".concat(p);
            }),
            !0
          )),
            (this.loadableSelector = dt(
              ["img", "video"],
              this.bgAttributes.map(function (s) {
                return "[".concat(s, "]");
              }),
              !0
            )
              .map(function (s) {
                return "".concat(s, ":not([").concat(Ut, "])");
              })
              .map(function (s) {
                return ".".concat(n, " ").concat(s);
              })
              .join(",")),
            (this.options = {
              mediaConf: e,
              medias: o,
              src: "src",
              poster: "poster",
              bg: "bg",
              classes: {
                loading: "loading",
                loaded: "loaded",
                error: "error",
                applied: "applied",
              },
              thresholds: "0px 200% 200% 200%",
            }),
            (this.config = i);
        }
        return (
          (t.prototype.waitImageLoaded = function (e) {
            var n = e.getAttribute("data-ll-status");
            return n === "loaded"
              ? Promise.resolve(e)
              : n === "error"
              ? Promise.reject(new Error("unknown error"))
              : new Promise(function (i, o) {
                  e.addEventListener("load", function () {
                    return i(e);
                  }),
                    e.addEventListener("error", o);
                });
          }),
          (t.prototype.init = function () {
            var e = this;
            return this._enabled
              ? (this.initialized ||
                  (this.initialized = this.createLazyLoader()),
                Promise.resolve(this.initialized))
              : new Promise(function (n, i) {
                  e.waitingPromises.push({ resolve: n, reject: i });
                });
          }),
          (t.prototype.enable = function () {
            for (
              this.initialized ||
                ((this.initialized = this.createLazyLoader()), setTimeout(Dt)),
                this._enabled = !0;
              this.waitingPromises.length > 0;

            ) {
              var e = this.waitingPromises.shift();
              e.resolve(this.initialized);
            }
          }),
          (t.prototype.disable = function () {
            this.initialized
              ? console.warn("Cannot disable lazyload: already initialized")
              : ((this._enabled = !1), Bt());
          }),
          (t.prototype.loadElements = function (e, n) {
            var i = n === void 0 ? {} : n,
              o = i.onProgress,
              s = i.onFinished,
              p = i.timeout,
              v = p === void 0 ? 0 : p,
              m = i.limit,
              h = m === void 0 ? 10 : m;
            return tt(this, void 0, void 0, function () {
              var y,
                _,
                E,
                z,
                M,
                W,
                ft,
                ht,
                et,
                It,
                ot,
                _t,
                at,
                ee = this;
              return At(this, function (Kt) {
                switch (Kt.label) {
                  case 0:
                    return (
                      h < 0 && (h = 0),
                      (y = typeof e == "string" ? H(document, e) : e),
                      (_ = []),
                      (E = function (I) {
                        var C = I.getAttribute("data-ll-status");
                        C !== "loaded" && C !== "error" && _.push(I);
                      }),
                      y.forEach(function (I) {
                        I instanceof HTMLImageElement ||
                        I instanceof HTMLVideoElement ||
                        ee.bgAttributes.some(function (C) {
                          return I.hasAttribute(C);
                        })
                          ? E(I)
                          : H(I, "img,video").forEach(function (C) {
                              return E(C);
                            });
                      }),
                      (z = _.length),
                      (M = 0),
                      M === z
                        ? [2, Promise.resolve()]
                        : ((ft = new Promise(function (I, C) {
                            W = I;
                          })),
                          (ht = function (I) {
                            return (
                              I > M &&
                                ((M = I),
                                o && o({ cnt: M, total: z }),
                                M === z && s && s({ cnt: M, total: z })),
                              M
                            );
                          }),
                          (et = h - 1),
                          (ot = _.map(function () {
                            return !1;
                          })),
                          (_t = function (I, C) {
                            var pt = _.indexOf(I);
                            pt >= 0 &&
                              !ot[pt] &&
                              ((ot[pt] = !0),
                              ht(ot.filter(Boolean).length) === z
                                ? (window.clearTimeout(It), C.destroy())
                                : et + 1 < _.length &&
                                  ((et += 1), C.load([_[et]])));
                          }),
                          [
                            4,
                            this.createLazyLoader({
                              elements: [],
                              callback_loaded: function (I) {
                                _t(I, at);
                              },
                            }),
                          ])
                    );
                  case 1:
                    return (
                      (at = Kt.sent()),
                      v > 0 &&
                        window.setTimeout(function () {
                          ht(z),
                            at.load(
                              _.filter(function (I, C) {
                                return C > et;
                              })
                            );
                        }, v),
                      _.forEach(function (I) {
                        I instanceof HTMLVideoElement
                          ? I.addEventListener("canplaythrough", function () {
                              return _t(I, at);
                            })
                          : I instanceof HTMLImageElement &&
                            I.addEventListener("load", function () {
                              _t(I, at);
                            });
                      }),
                      Promise.all(
                        at
                          .load(
                            _.filter(function (I, C) {
                              return !I.hasAttribute("data-ll-status") && C < h;
                            })
                          )
                          .map(function (I) {
                            return new Promise(function (C) {
                              I.then(function (pt) {
                                _t(pt, at), C("success");
                              }).catch(function (pt) {
                                _t(pt.element, at), C(void 0);
                              });
                            });
                          })
                      ).finally(function () {
                        W({ cnt: M, total: z });
                      }),
                      [2, ft]
                    );
                }
              });
            });
          }),
          (t.prototype.createLazyLoader = function (e) {
            var n, i;
            return (
              e === void 0 && (e = {}),
              tt(this, void 0, void 0, function () {
                var o, s, p;
                return At(this, function (v) {
                  switch (v.label) {
                    case 0:
                      return [4, vt()];
                    case 1:
                      return (
                        (o =
                          v.sent() &&
                          !(
                            !((n = this.config) === null || n === void 0) &&
                            n.disabledAvif
                          )),
                        (s = !1),
                        o ? [3, 3] : [4, rt()]
                      );
                    case 2:
                      (s =
                        !!v.sent() &&
                        !(
                          !((i = this.config) === null || i === void 0) &&
                          i.disabledWebp
                        )),
                        (v.label = 3);
                    case 3:
                      return !window.IntersectionObserver ||
                        !window.IntersectionObserverEntry
                        ? [4, Promise.resolve().then(() => xt(q(7711)))]
                        : [3, 5];
                    case 4:
                      v.sent(), (v.label = 5);
                    case 5:
                      return (
                        (p = new Mt(
                          R(
                            R(
                              R(
                                { elements: this.loadableSelector },
                                this.options
                              ),
                              e
                            ),
                            {
                              srcPreprocessor: function (m, h) {
                                var y = h.name,
                                  _ = h.type,
                                  E = h.element,
                                  z = h.clientName;
                                if (!m && _ === "data_src") {
                                  var M = E.getAttribute(z);
                                  M && (m = M);
                                }
                                if (
                                  !m &&
                                  (_ !== "data_poster" ||
                                    E instanceof HTMLVideoElement)
                                ) {
                                  var W = Rt[_];
                                  if (y !== W) {
                                    var ft = E.getAttribute(W);
                                    ft && (m = ft);
                                  }
                                }
                                return m && !o
                                  ? kt(m, s ? "webp" : "origin")
                                  : m;
                              },
                            }
                          )
                        )),
                        [
                          2,
                          {
                            load: function (m) {
                              return p.load(m);
                            },
                            destroy: function () {
                              p.destroy();
                            },
                          },
                        ]
                      );
                  }
                });
              })
            );
          }),
          (t.prototype.createManualLoader = function () {
            return tt(this, void 0, void 0, function () {
              var e;
              return At(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.createLazyLoader({ elements: [] })];
                  case 1:
                    return (
                      (e = n.sent()),
                      [
                        2,
                        {
                          load: function (i, o) {
                            var s = o === void 0 ? {} : o,
                              p = s.onLoaded,
                              v = s.onError;
                            i instanceof Array || (i = [i]);
                            var m = i.map(function () {}),
                              h = function (_, E) {
                                m[_] === void 0 &&
                                  ((m[_] = E),
                                  E && p && p(i[_], _),
                                  !E && v && v(i[_], _));
                              },
                              y = [];
                            i.forEach(function (_, E) {
                              var z = _.getAttribute(Ct);
                              if (z === "loaded") p && h(E, !0);
                              else if (z === "error") h(E, !1);
                              else {
                                if (p) {
                                  var M = function () {
                                    _.removeEventListener("load", M), h(E, !0);
                                  };
                                  _.addEventListener("load", M);
                                }
                                if (v) {
                                  var W = function () {
                                    _.removeEventListener("error", W), h(E, !1);
                                  };
                                  _.addEventListener("error", W);
                                }
                                z !== "loading" && y.push(_);
                              }
                            }),
                              e.load(y).forEach(function (_, E) {
                                _.then(function () {
                                  h(E, !0);
                                }).catch(function (z) {
                                  console.error(z, z.element), h(E, !1);
                                });
                              });
                          },
                        },
                      ]
                    );
                }
              });
            });
          }),
          t
        );
      })(),
      k = window.navigator.userAgent,
      Wt = /android/i.test(k),
      jt = /UCBrowser/i.test(k),
      Ht = /HeyTap/i.test(k),
      Qt = /QQBrowser/i.test(k),
      Vt = /QuarkBrowser/i.test(k),
      Xt = /BaiduBrowser/i.test(k),
      Zt = /MicroMessenger/i.test(k),
      Ft = /iPad|iPhone|iPod/.test(k),
      Gt = /Chrome/i.test(k),
      $t = /MiuiBrowser/i.test(k),
      qt = Boolean(window.document.DOCUMENT_NODE),
      mt = function () {
        return /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune|HeyTap/i.test(
          k
        );
      },
      Jt = mt();
    function Nt() {
      const t = window.navigator.userAgent.toLowerCase();
      if (t.indexOf("chrome") !== -1) {
        const e = t.indexOf("chrome/") + 7,
          n = t.indexOf(" ", e),
          i = t.substring(e, n);
        return parseInt(i, 10);
      }
    }
    const X = Nt(),
      r = !!(X && Jt && !isNaN(X) && X >= 110 && X <= 112);
    function c() {
      const t = navigator.userAgent;
      if (!/iP(ad|hone|od)/.test(t)) return null;
      const n = t.match(/OS (\d+)_(\d+)_?(\d+)? like Mac OS X/i);
      if (n) {
        const i = parseInt(n[1], 10),
          o = parseInt(n[2], 10),
          s = parseInt(n[3] || "0", 10);
        return { major: i, minor: o, patch: s };
      }
      return null;
    }
    function l() {
      const t = navigator.userAgent,
        e = navigator.vendor,
        n = /Safari/.test(t) && !/Chrome|Chromium/.test(t),
        i = /Apple Computer, Inc/.test(e),
        o = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
      return (n && i) || (o && /Safari/.test(t) && !/Chrome|Chromium/.test(t));
    }
    Ft &&
      l() &&
      window.matchMedia(N.mediaConf.mo.mediaQuery) &&
      (document.querySelectorAll("[data-src-ios]").forEach((t) => {
        const e = t.getAttribute("data-src-ios");
        e && t.setAttribute("data-src-360", e);
      }),
      document.body.classList.add("mo-ios"));
    const f = new Ot(N.mediaConf, N.rootClass, { disabledAvif: r });
    f
      .loadElements(Array.from(document.querySelectorAll("#section-kv img")))
      .finally(() => {
        f.enable();
      }),
      (window.lazyLoad = f);
  })();
})();

!(function (e) {
  function g(a) {
    for (
      var l, f, m = a[0], h = a[1], g = a[2], y = 0, n = [];
      y < m.length;
      y++
    )
      (f = m[y]),
        Object.prototype.hasOwnProperty.call(k, f) && k[f] && n.push(k[f][0]),
        (k[f] = 0);
    for (l in h) Object.prototype.hasOwnProperty.call(h, l) && (e[l] = h[l]);
    for (d && d(a); n.length; ) n.shift()();
    return c.push.apply(c, g || []), b();
  }
  function b() {
    for (var l, b = 0; b < c.length; b++) {
      for (var f = c[b], d = !0, h = 1; h < f.length; h++)
        0 !== k[f[h]] && (d = !1);
      d && (c.splice(b--, 1), (l = a((a.s = f[0]))));
    }
    return l;
  }
  function a(b) {
    if (n[b]) return n[b].exports;
    var l = (n[b] = { i: b, l: !1, exports: {} });
    return e[b].call(l.exports, l, l.exports, a), (l.l = !0), l.exports;
  }
  var n = {},
    k = { product: 0 },
    c = [];
  a.m = e;
  a.c = n;
  a.d = function (b, f, d) {
    a.o(b, f) || Object.defineProperty(b, f, { enumerable: !0, get: d });
  };
  a.r = function (a) {
    "undefined" != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(a, Symbol.toStringTag, { value: "Module" });
    Object.defineProperty(a, "__esModule", { value: !0 });
  };
  a.t = function (b, f) {
    if (
      (1 & f && (b = a(b)), 8 & f) ||
      (4 & f && "object" == typeof b && b && b.__esModule)
    )
      return b;
    var l = Object.create(null);
    if (
      (a.r(l),
      Object.defineProperty(l, "default", { enumerable: !0, value: b }),
      2 & f && "string" != typeof b)
    )
      for (var d in b)
        a.d(
          l,
          d,
          function (a) {
            return b[a];
          }.bind(null, d)
        );
    return l;
  };
  a.n = function (b) {
    var f =
      b && b.__esModule
        ? function () {
            return b.default;
          }
        : function () {
            return b;
          };
    return a.d(f, "a", f), f;
  };
  a.o = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
  a.p = "";
  var h = (window.webpackOpsite = window.webpackOpsite || []),
    f = h.push.bind(h);
  h.push = g;
  h = h.slice();
  for (var m = 0; m < h.length; m++) g(h[m]);
  var d = f;
  c.push([800, "vendor"]);
  b();
})({
  17: function (e, g, b) {
    function a(a, b) {
      var f = Object.keys(a);
      if (Object.getOwnPropertySymbols) {
        var d = Object.getOwnPropertySymbols(a);
        b &&
          (d = d.filter(function (b) {
            return Object.getOwnPropertyDescriptor(a, b).enumerable;
          }));
        f.push.apply(f, d);
      }
      return f;
    }
    function n(a, b) {
      return new Promise(function (f, d) {
        c.get(a, { params: b })
          .then(function (a) {
            f(a.data);
          })
          .catch(function (a) {
            d(a.data);
          });
      });
    }
    function k(a, b, m) {
      return new Promise(function (f, l) {
        c.post(a, b, m)
          .then(function (a) {
            f(a.data);
          })
          .catch(function (a) {
            l(a.data);
          })
          .finally(function () {});
      });
    }
    b.d(g, "a", function () {
      return n;
    });
    b.d(g, "b", function () {
      return k;
    });
    b(13);
    b(9);
    b(40);
    b(75);
    e = b(44);
    b = b.n(e);
    e =
      (document.getElementById("sow_domain_host") &&
        document.getElementById("sow_domain_host").value) ||
      "https://sgp-sow-cms.oppo.com";
    var c = b.a.create({
      baseURL: e,
      timeout: (window.AJAX_OPTIONS && window.AJAX_OPTIONS.timeout) || 3e4,
      withCredentials: !0,
      headers: { "Content-Type": "application/json" },
    });
    c.interceptors.request.use(
      function (b) {
        return (
          "post" === b.method
            ? JSON.stringify(b.data)
            : (b.params = (function (b) {
                for (var f = 1; f < arguments.length; f++) {
                  var d = null != arguments[f] ? arguments[f] : {};
                  f % 2
                    ? a(Object(d), !0).forEach(function (a) {
                        var f = d[a];
                        a in b
                          ? Object.defineProperty(b, a, {
                              value: f,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (b[a] = f);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        b,
                        Object.getOwnPropertyDescriptors(d)
                      )
                    : a(Object(d)).forEach(function (a) {
                        Object.defineProperty(
                          b,
                          a,
                          Object.getOwnPropertyDescriptor(d, a)
                        );
                      });
                }
                return b;
              })({}, b.params)),
          b
        );
      },
      function (a) {
        Promise.reject(a);
      }
    );
    c.interceptors.response.use(
      function (a) {
        return 200 === a.status ? Promise.resolve(a) : Promise.reject(a);
      },
      function (a) {
        return Promise.reject(a);
      }
    );
  },
  3: function (e, g) {
    e.exports = jQuery;
  },
  50: function (e, g, b) {
    (function (a) {
      b.d(g, "a", function () {
        return k;
      });
      b(16);
      b(7);
      b(57);
      var e = b(0),
        k = function () {
          var a =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : navigator.userAgent.toLowerCase(),
            b = -1 != a.indexOf("ucbrowser"),
            f = !!a.match(/qqbrowse/) || a.match(/mqqbrowser/i),
            d = "oppo" == a.match(/oppo/i),
            c = "heytap" == a.match(/heytap/i),
            m = "pacm00" == a.match(/pacm00/i),
            h = "vivo" == a.match(/vivo/i),
            k = "mi" == a.match(/mi\s/i),
            e = "mix" == a.match(/mix\s/i),
            g = "redmi" == a.match(/redmi/i);
          a = "sm-" == a.match(/sm-/i);
          return b || f || d || c || m || h || k || e || g || a;
        },
        c = a("html").hasClass("view-mobile"),
        h = a("html").hasClass("view-portrait"),
        f = c ? "mob" : h ? "pad" : "pc",
        m = function () {
          var b = a(".normal-video.lazyload-video:not(.loaded)");
          0 >= b.length ||
            b.each(function (b, d) {
              b = a(document).scrollTop();
              a(d).offset().top - b < window.innerHeight &&
                (a(d).attr("poster") ||
                  a(d).attr("poster", a(d).attr("data-poster-".concat(f))),
                k() && a(d).addClass("loaded"));
              a(d).offset().top - b < 0.65 * window.innerHeight &&
                (k() ||
                  a(d).attr("src") ||
                  a(d).attr({
                    src: a(d).attr("data-src-".concat(f)),
                    autoplay: !0,
                  }),
                a(d).addClass("loaded"));
            });
        },
        d = function () {
          var b = a(".normal-video");
          if (!(0 >= b.length)) {
            var d = a(".normal-video.lazyload-video:not(.loaded)");
            0 < d.length &&
              (m(),
              window.addEventListener(
                "scroll",
                e.a.throttle(function () {
                  m();
                }, 500)
              ));
            b.length > d.length &&
              a(".normal-video:not(.lazyload-video)").each(function (b, d) {
                a(d).attr("poster", a(d).attr("data-poster-".concat(f)));
                k() ||
                  a(d).attr({
                    src: a(d).attr("data-src-".concat(f)),
                    autoplay: !0,
                  });
              });
          }
        };
      a(function () {
        d();
      });
    }).call(this, b(3));
  },
  54: function (e, g, b) {
    function a(a) {
      return l.a.parse(a);
    }
    function n(b) {
      var d =
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : r,
        c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : t,
        h = "string" == typeof b ? b : JSON.stringify(b);
      return f.a
        .encrypt(h, a(d), { mode: m.a, padding: q.a, iv: a(c) })
        .toString();
    }
    function k(b) {
      var c =
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : r,
        h = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : t;
      try {
        var l = d.a.stringify(
          f.a.decrypt(b, a(c), { mode: m.a, padding: q.a, iv: a(h) })
        );
      } catch (p) {
        l = b;
      }
      return l;
    }
    function c(b) {
      var d =
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : r,
        c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : t,
        m = "string" == typeof b ? b : JSON.stringify(b);
      return f.a
        .encrypt(m, a(d), { mode: z.a.mode.CBC, padding: A.a, iv: a(c) })
        .toString();
    }
    function h(b) {
      var c =
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : r,
        m = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : t;
      try {
        var h = d.a.stringify(
          f.a.decrypt(b, a(c), { mode: z.a.mode.CBC, padding: A.a, iv: a(m) })
        );
      } catch (p) {
        h = b;
      }
      return h;
    }
    b.d(g, "d", function () {
      return n;
    });
    b.d(g, "c", function () {
      return k;
    });
    b.d(g, "b", function () {
      return c;
    });
    b.d(g, "a", function () {
      return h;
    });
    b(12);
    b(9);
    b(23);
    e = b(10);
    var f = b.n(e);
    e = b(25);
    var m = b.n(e);
    e = b(26);
    var d = b.n(e);
    e = b(51);
    var l = b.n(e);
    e = b(27);
    var q = b.n(e);
    e = b(14);
    var z = b.n(e);
    e = b(28);
    var A = b.n(e),
      r = "JGmbWHluhdSIRsDU",
      t = "mBwhDGwRMjVwFQAA";
  },
  61: function (e, g, b) {
    function a(a, b) {
      for (var f = 0; f < b.length; f++) {
        var c = b[f];
        c.enumerable = c.enumerable || !1;
        c.configurable = !0;
        "value" in c && (c.writable = !0);
        Object.defineProperty(a, c.key, c);
      }
    }
    function n(a, b, f) {
      var c = document.getElementById("one-toast");
      c ||
        ((c = document.createElement("div")),
        (c.className = "layer-toast"),
        (c.id = "one-toast"),
        (c.innerHTML =
          '\n      \x3cdiv class\x3d"toast-container  js-toast-container"\x3e\n        \x3cdiv class\x3d"toast-icon js-toast-icon"\x3e\n          \x3csvg class\x3d"ico svg-icon"\x3e\n          \x3c/svg\x3e\n        \x3c/div\x3e\n        \x3cdiv class\x3d"toast-text font-body-2 js-toast-text"\x3e\n        \x3c/div\x3e\n      \x3c/div\x3e'),
        document.body.appendChild(c),
        (c = document.getElementById("one-toast")));
      b && "string" == typeof b && ((f = b), (b = 3e3));
      var d = c.querySelector(".js-toast-icon"),
        h = c.querySelector(".js-toast-text"),
        k = c.querySelector(".js-toast-container");
      d &&
        f &&
        (d.classList.add("show-icon"),
        (d.innerHTML =
          '\x3csvg class\x3d"ico svg-icon"\x3e\x3cuse xlink:href\x3d"#'.concat(
            f,
            '"\x3e\x3c/use\x3e\x3c/svg\x3e'
          )));
      h && (h.innerHTML = a);
      k.classList.add("show-toast");
      setTimeout(function () {
        k.classList.remove("show-toast");
        d &&
          f &&
          setTimeout(function () {
            d.classList.remove("show-icon");
          }, 300);
      }, b || 3e3);
    }
    b.d(g, "b", function () {
      return n;
    });
    b.d(g, "a", function () {
      return k;
    });
    b(8);
    b(12);
    b(13);
    b(6);
    var k = (function () {
      function b(a, c) {
        var d = a.id,
          f = a.title,
          h = a.cancel,
          k = a.confirm,
          m = a.customClass;
        m = void 0 === m ? "" : m;
        var e = a.isDark;
        e = void 0 !== e && e;
        var g = a.noHeader;
        g = void 0 !== g && g;
        var n = a.autoWidth;
        n = void 0 !== n && n;
        var u = a.hasFooter;
        u = void 0 !== u && u;
        var v = a.clearHtml;
        v = void 0 !== v && v;
        var w = a.hasConfirm;
        w = void 0 === w || w;
        var p = a.hasReject;
        p = void 0 === p || p;
        var x = a.confirmText;
        x = void 0 === x ? "Confirm" : x;
        a = a.cancelText;
        a = void 0 === a ? "Cancel" : a;
        if (!(this instanceof b))
          throw new TypeError("Cannot call a class as a function");
        !0;
        this.id = d || "opsite-dialog".concat(new Date().getTime());
        this.customClass = m;
        this.title = f;
        this.visible = !1;
        this.isDark = e;
        this.noHeader = g;
        this.autoWidth = n;
        this.hasFooter = u;
        this.hasReject = p;
        this.hasConfirm = w;
        this.confirmText = x;
        this.cancelText = a;
        this.containerHtml = c;
        this.htmlClearInClose = v;
        this.cancel = h;
        this.confirm = k;
        this.render();
        this.initEvent();
      }
      var h;
      return (
        (h = [
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
        a(b.prototype, h),
        b
      );
    })();
  },
  678: function (e, g, b) {
    (function (a) {
      b(679);
      b(106);
      b(108);
      a(function () {
        0 !== a(".cmp__general-sp-card").length &&
          a(".cmp__general-sp-card").each(function (b, k) {
            a(k).data("swiper") &&
              new opSwiper(
                '[data-swiper\x3d"'.concat(
                  a(k).data("swiper"),
                  '"] .swiper-container'
                ),
                {
                  slidesPerView: "auto",
                  navigation: {
                    nextEl: '[data-swiper\x3d"'.concat(
                      a(k).data("swiper"),
                      '"] .next-arrow'
                    ),
                    prevEl: '[data-swiper\x3d"'.concat(
                      a(k).data("swiper"),
                      '"] .prev-arrow'
                    ),
                  },
                  scrollbar: {
                    el: '[data-swiper\x3d"'.concat(
                      a(k).data("swiper"),
                      '"] .swiper-scrollbar'
                    ),
                  },
                }
              );
          });
      });
    }).call(this, b(3));
  },
  679: function (e, g, b) {},
  680: function (e, g, b) {
    (function (a) {
      function e(a, b) {
        for (var d = 0; d < b.length; d++) {
          var c = b[d];
          c.enumerable = c.enumerable || !1;
          c.configurable = !0;
          "value" in c && (c.writable = !0);
          Object.defineProperty(a, c.key, c);
        }
      }
      b(4);
      b(13);
      b(681);
      var k = b(0),
        c = b(50),
        h = (function () {
          function b(d) {
            if (!(this instanceof b))
              throw new TypeError("Cannot call a class as a function");
            !0;
            this.component = a(d);
            this.allowPlay = !Object(c.a)();
            this.isMobile = a("html").hasClass("view-mobile");
            this.isPad = a("html").hasClass("view-portrait");
            this.dataview = this.isMobile ? "mob" : this.isPad ? "pad" : "pc";
            this.init(d);
          }
          var h;
          return (
            (h = [
              {
                key: "init",
                value: function (b) {
                  var d = this,
                    c = this.component,
                    f = this;
                  this.isMobile
                    ? (c
                        .find(".multigrid_bullet")
                        .not(".multigrid_bullet_mb")
                        .remove(),
                      c
                        .find(".multigrid_replay")
                        .not(".multigrid_replay_mb")
                        .remove())
                    : (c.find(".multigrid_bullet.multigrid_bullet_mb").remove(),
                      c.find(".multigrid_replay.multigrid_replay_mb").remove());
                  this.allowPlay &&
                    window.addEventListener(
                      "scroll",
                      k.a.throttle(function () {
                        d.scrollHandle(c);
                      }, 500)
                    );
                  c.find(".multigrid_item").each(function (b, c) {
                    (a(c)
                      .find("video")
                      .each(function (b, c) {
                        b = a(c).attr("data-poster-".concat(d.dataview));
                        var f = a(c).attr("data-src-".concat(d.dataview));
                        d.allowPlay && f && a(c).attr("src", f);
                        b && a(c).attr("poster", b);
                      }),
                    a(c)
                      .find(".multigrid_background_item")
                      .each(function (b, d) {
                        a(d).attr("data-index", b);
                      }),
                    0 < a(c).find(".multigrid_bullet").length)
                      ? d.multiSelect(a(c).find(".multigrid_bullet"))
                      : ((b = a(c).find(
                          ".multigrid_background .multigrid_background_item video"
                        )),
                        a(c)
                          .find(
                            ".multigrid_background .multigrid_background_item"
                          )
                          .css({ position: "relative", opacity: 1 }),
                        d.allowPlay &&
                          0 < b.length &&
                          (b[0].ended
                            ? d.showReplayBtn(a(c))
                            : b.off("ended").on("ended", function () {
                                f.showReplayBtn(a(c));
                              }),
                          a(c)
                            .find(".multigrid_replay_btn")
                            .click(function () {
                              ga4Event({
                                event_name: "product_info_interaction",
                                module: f.component.attr("id") || "grid-view",
                                action: "button click",
                                button_name:
                                  (a(c).find(".multigrid_title").text() ||
                                    "none") +
                                  "+" +
                                  (a(this).find("span").text() || "none"),
                              });
                              var b = a(this).parents(".multigrid_item");
                              f.playVideo(
                                b.find(".multigrid_background_item video")
                              );
                              f.hideReplayBtn(b);
                            })));
                  });
                },
              },
              {
                key: "scrollHandle",
                value: function () {
                  var b = this;
                  this.isContain(this.component, 0) &&
                    this.component
                      .find(".multigrid_item")
                      .each(function (c, d) {
                        c = a(d).find(".multigrid_background_item video");
                        b.isContain(a(d), a(d).height()) &&
                        !a(d)
                          .find(".multigrid_replay_btn")
                          .eq(0)
                          .hasClass("has-replay")
                          ? 0 < a(d).find(".multigrid_bullet").length
                            ? 0 <
                                a(d).find(
                                  ".multigrid_background_item.active video"
                                ).length &&
                              b.getVideoOrder(a(d)) &&
                              b.playVideo(
                                a(d).find(
                                  ".multigrid_background_item.active video"
                                )
                              )
                            : b.playVideo(c)
                          : b.pauseVideo(c);
                      });
                },
              },
              {
                key: "multiSelect",
                value: function (b) {
                  var c = this;
                  0 != a(b).find(".cursor_item").length &&
                    (a(b)
                      .find(".multigrid_bullet_item")
                      .each(function (b, c) {
                        a(c)
                          .attr("data-height", a(c).height())
                          .attr(
                            "data-minheight",
                            a(c).find(".cursor_des").height()
                          )
                          .attr("data-index", b);
                        a(c).find(".cursor_des").css("height", "0");
                        a(c).attr("data-pos", a(c).position().top);
                      }),
                    c.setBulletplay(
                      a(b).find(".multigrid_bullet_title").eq(0),
                      !0
                    ),
                    a(b)
                      .find(".multigrid_bullet_title")
                      .click(function () {
                        c.setBulletplay(this);
                      }),
                    a(b)
                      .parents(".multigrid_item")
                      .find(".multigrid_replay_btn")
                      .click(function () {
                        ga4Event({
                          event_name: "product_info_interaction",
                          module: c.component.attr("id") || "grid-view",
                          action: "button click",
                          button_name:
                            (a(b)
                              .parents(".multigrid_item")
                              .find(".multigrid_title")
                              .text() || "none") +
                            "+" +
                            (a(this).find("span").text() || "none"),
                        });
                        var d = a(this).parents(".multigrid_item");
                        c.playVideo(
                          d.find(".multigrid_background_item.active video")
                        );
                        c.hideReplayBtn(d);
                      }));
                },
              },
              {
                key: "setBulletplay",
                value: function (b, c) {
                  var d = this,
                    f = a(b).parents(".multigrid_item"),
                    h = a(b).parents(".multigrid_bullet");
                  b = a(b).parents(".cursor_item");
                  var k = b.index(),
                    e = f.find(".multigrid_background_item").eq(k),
                    g = e.find("video");
                  h.find(".cursor_line .cursor_active_line")
                    .height(b.data("height"))
                    .css("top", "".concat(b.data("pos"), "px"));
                  e.addClass("active")
                    .siblings(".multigrid_background_item")
                    .removeClass("active");
                  b.addClass("active").find(".cursor_des").addClass("active");
                  h.find(".cursor_item")
                    .not(":eq(".concat(k, ")"))
                    .removeClass("active");
                  b.addClass("active")
                    .find(".cursor_des")
                    .css({ height: b.data("minheight"), opacity: "1" });
                  h.find(".cursor_item")
                    .not(":eq(".concat(k, ")"))
                    .find(".cursor_des")
                    .css({ height: "0", opacity: "0" });
                  this.allowPlay &&
                    (0 < g.length
                      ? g[0].ended
                        ? this.showReplayBtn(f)
                        : (this.hideReplayBtn(f),
                          this.pauseVideo(
                            f.find(".multigrid_background_item video.prev-play")
                          ),
                          f
                            .find(".multigrid_background_item video")
                            .removeClass("prev-play"),
                          c || this.playVideo(g),
                          g.addClass("prev-play"),
                          g.off("ended").on("ended", function () {
                            d.showReplayBtn(f);
                          }))
                      : (this.hideReplayBtn(f),
                        d.pauseVideo(
                          f.find(".multigrid_background_item video.prev-play")
                        )));
                },
              },
              {
                key: "playVideo",
                value: function (a) {
                  return a.trigger("play");
                },
              },
              {
                key: "pauseVideo",
                value: function (a) {
                  return a.trigger("pause");
                },
              },
              {
                key: "isContain",
                value: function (a, b) {
                  a = a[0].getBoundingClientRect();
                  var c = a.top,
                    d = a.bottom;
                  return a.height, c <= window.innerHeight - b / 2 && 0 <= d;
                },
              },
              {
                key: "getVideoOrder",
                value: function (a) {
                  return (
                    a
                      .find(".multigrid_background_item.active")
                      .attr("data-index") ===
                    a.find(".multigrid_bullet_item.active").attr("data-index")
                  );
                },
              },
              {
                key: "showReplayBtn",
                value: function (a) {
                  a.find(".multigrid_replay_btn")
                    .css({ opacity: "1", "pointer-events": "auto" })
                    .addClass("has-replay");
                },
              },
              {
                key: "hideReplayBtn",
                value: function (a) {
                  a.find(".multigrid_replay_btn")
                    .css({ opacity: "0", "pointer-events": "none" })
                    .removeClass("has-replay");
                },
              },
            ]),
            e(b.prototype, h),
            b
          );
        })();
      a(function () {
        0 != a(".cmp_grid-view").length &&
          a(".cmp_grid-view").each(function (a, b) {
            new h(b);
          });
      });
    }).call(this, b(3));
  },
  681: function (e, g, b) {},
  682: function (e, g, b) {
    (function (a) {
      b(4);
      b(683);
      a(function () {
        0 !== a(".cmp__ksp-card").length &&
          a(".cmp__ksp-card .ksp_box").each(function (b, k) {
            b = a(k).find(".ksp_item").length;
            a(k).addClass("ksp_layout__".concat(b));
            8 == b &&
              650 < a(window).width() &&
              a(k)
                .find(".ksp_item")
                .eq(6)
                .wrap('\x3cdiv class\x3d"ksp_box8_wrap"\x3e\x3c/div\x3e')
                .after(a(k).find(".ksp_item").eq(7));
          });
      });
    }).call(this, b(3));
  },
  683: function (e, g, b) {},
  684: function (e, g, b) {
    (function (a) {
      b(685);
      var e = {
        data: { $productKvCmp: a(".cmp__product-card") },
        init: function () {
          this.stopProp();
        },
        stopProp: function () {
          a(".cmp__product-card .stop-prop").on("click", function (a) {
            a.stopPropagation();
          });
        },
      };
      a(function () {
        0 !== a(".cmp__product-card").length && e.init();
      });
    }).call(this, b(3));
  },
  685: function (e, g, b) {},
  686: function (e, g, b) {
    (function (a) {
      b(4);
      b(687);
      var e = {
        data: { $productColorCmp: a(".cmp__product-color") },
        init: function () {
          var b = this;
          b.data.$productColorCmp.each(function (c, h) {
            b.initClickEvent(a(h));
          });
        },
        initClickEvent: function (b) {
          b.find(".color-control .control-item").on("click", function (c) {
            c = a(this).index();
            a(this).addClass("active").siblings().removeClass("active");
            var h = a(this).find(".circle-border");
            b.find(".circle-border").css("border-color", "transparent");
            h.css("border-color", h.attr("data-border-color"));
            b.hasClass("average")
              ? (b
                  .find(".media-container .media-item")
                  .eq(c)
                  .addClass("active")
                  .siblings()
                  .removeClass("active"),
                b.find(".right-layout .color-img").removeClass("active"),
                b
                  .find(".right-layout picture")
                  .eq(c)
                  .find(".color-img")
                  .addClass("active"))
              : b
                  .find(".right-layout .media-item")
                  .eq(c)
                  .addClass("active")
                  .siblings()
                  .removeClass("active");
          });
        },
      };
      a(function () {
        0 !== a(".cmp__product-color").length && e.init();
      });
    }).call(this, b(3));
  },
  687: function (e, g, b) {},
  688: function (e, g, b) {
    (function (a) {
      b(4);
      b(689);
      var e = b(50);
      a(function () {
        0 !== a(".cmp__single-sp-card").length &&
          (Object(e.a)() ||
            a(".cmp__single-sp-card")
              .find(".video")
              .each(function (b, c) {
                c.addEventListener(
                  "ended",
                  function () {
                    a(this)
                      .closest(".cmp__single-sp-card")
                      .find(".replay-btn")
                      .removeClass("hidden");
                  },
                  !1
                );
                a(this)
                  .closest(".cmp__single-sp-card")
                  .find(".replay-btn")
                  .on("click", function () {
                    c.play();
                    a(this)
                      .closest(".cmp__single-sp-card")
                      .find(".replay-btn")
                      .addClass("hidden");
                  });
              }));
      });
    }).call(this, b(3));
  },
  689: function (e, g, b) {},
  690: function (e, g, b) {
    (function (a) {
      b(4);
      b(6);
      b(691);
      var e = b(50);
      b(0);
      a(function () {
        if (0 !== a(".cmp__sp-switch-card").length) {
          a(".cmp__sp-switch-card .replay-btn").on("click", function (b) {
            ga4Event({
              event_name: "product_info_interaction",
              module: a(b.currentTarget).attr("data-module"),
              action: "button click",
              button_name:
                (a(b.currentTarget)
                  .parents(".cmp__sp-switch-card")
                  .find(
                    ".accordion .accordion-item.active .accordion-header .ft-body-1"
                  )
                  .text() || "none") +
                "+" +
                (a(b.currentTarget).attr("data-button_name") || "none"),
            });
          });
          setTimeout(function () {
            a(".cmp__sp-switch-card").each(function () {
              var b = a(this).find(".accordion-body").get(0).scrollHeight;
              a(this).find(".accordion-body:eq(0)").css("height", b);
            });
          }, 400);
          var b = 0,
            c = 0;
          (a(".cmp__sp-switch-card .accordion-item").on("click", function (e) {
            a(this).hasClass("active") ||
              ((b =
                b ||
                a(this).closest(".accordion").find(".accordion-body").get(0)
                  .scrollHeight),
              a(this)
                .closest(".sp-switch-card-container")
                .find(".sp-switch-card-container-img .img")
                .removeClass("active"),
              (c = a(this).data("index")),
              a(this)
                .closest(".sp-switch-card-container")
                .find(
                  '.sp-switch-card-container-img .img[data-index\x3d"' +
                    c +
                    '"]'
                )
                .addClass("active"),
              a(this)
                .closest(".accordion")
                .find(".accordion-item")
                .removeClass("active"),
              a(this)
                .closest(".accordion")
                .find(".accordion-item .accordion-body")
                .css("height", 0),
              a(this).addClass("active"),
              a(this).find(".accordion-body").css("height", b),
              a(this).find("video").length &&
                650 > a(window).width() &&
                ((a(this).find(".video")[0].currentTime = 0),
                a(this).find(".video")[0].play()),
              "VIDEO" ===
                a(this)
                  .closest(".sp-switch-card-container")
                  .find(
                    '.sp-switch-card-container-img .img[data-index\x3d"' +
                      c +
                      '"]'
                  )[0].tagName &&
                ((a(this)
                  .closest(".sp-switch-card-container")
                  .find(
                    '.sp-switch-card-container-img .img[data-index\x3d"' +
                      c +
                      '"]'
                  )[0].currentTime = 0),
                a(this)
                  .closest(".sp-switch-card-container")
                  .find(
                    '.sp-switch-card-container-img .img[data-index\x3d"' +
                      c +
                      '"]'
                  )[0]
                  .play()),
              a(this)
                .closest(".sp-switch-card-container")
                .find(".replay-btn")
                .addClass("hidden"));
          }),
          Object(e.a)()) ||
            a(".cmp__sp-switch-card")
              .find(".video")
              .each(function (b, f) {
                f.addEventListener(
                  "ended",
                  function () {
                    650 > a(window).width()
                      ? c ===
                          a(this).closest(".accordion-item").data("index") &&
                        a(this)
                          .closest(".sp-switch-card-container")
                          .find(
                            '.accordion-item[data-index\x3d"' +
                              c +
                              '"] .replay-btn'
                          )
                          .removeClass("hidden")
                      : c === a(this).data("index") &&
                        a(this)
                          .closest(".sp-switch-card-container")
                          .find(".sp-switch-card-container-img .replay-btn")
                          .removeClass("hidden");
                  },
                  !1
                );
                a(this)
                  .closest(".cmp__sp-switch-card")
                  .find(".replay-btn")
                  .on("click", function () {
                    f.play();
                    a(this)
                      .closest(".cmp__sp-switch-card")
                      .find(".replay-btn")
                      .addClass("hidden");
                  });
              });
        }
      });
    }).call(this, b(3));
  },
  691: function (e, g, b) {},
  692: function (e, g, b) {
    (function (a) {
      b(4);
      b(693);
      var e = b(50);
      a(function () {
        if (0 !== a(".cmp__sample-image-tiling").length) {
          var b = {
            init: function () {
              this.initBtn();
              this.initBoxHeight();
            },
            initBtn: function () {
              Object(e.a)() && a(".cmp__sample-image-tiling .restart").remove();
            },
            initBoxHeight: function () {
              0 <
                a(".cmp__sample-image-tiling .sample-image-tiling-3").length &&
                650 < document.body.clientWidth &&
                a(".cmp__sample-image-tiling .sample-image-tiling-3").each(
                  function (b, e) {
                    var c =
                      a(e).find(".tiling-box-right").last().find("img")[0] ||
                      a(e).find(".tiling-box-right").last().find("video")[0];
                    a(e)
                      .find(".tiling-box")
                      .height(c.height + "px");
                    c.onload = function () {
                      a(e)
                        .find(".tiling-box")
                        .height(c.height + "px");
                    };
                    c.ondurationchange = function () {
                      a(e)
                        .find(".tiling-box")
                        .height(c.height + "px");
                    };
                  }
                );
            },
            sendGa: function (a, b) {
              var c = "",
                e = 0 < a.parents(".row-reverse").lenght;
              0 < a.parents(".tiling-box-left-top").length
                ? (c = e ? "img right1" : "img left1")
                : 0 < a.parents(".tiling-box-left-bottom").length
                ? (c = e ? "img right2" : "img left2")
                : 0 < a.parents(".tiling-box-right-box").length &&
                  0 < a.parents(".sample-image-tiling-3").length
                ? (c = e ? "img left1" : "img right1")
                : 0 < a.parents(".tiling-box-left").length &&
                  0 < a.parents(".sample-image-tiling-2").length
                ? (c = e ? "img left" : "img right")
                : 0 < a.parents(".tiling-box-right").length &&
                  0 < a.parents(".sample-image-tiling-2").length &&
                  (c = e ? "img right" : "img left");
              ga4Event({
                event_name: "product_info_interaction",
                module: a
                  .parents(".tiling-content")
                  .find(".tiling-title")
                  .text(),
                action: "button click",
                button_name: c ? c + "+" + b : b,
              });
            },
          };
          b.init();
          a(".cmp__sample-image-tiling .restswitchart").click(function () {
            var c = a(this).parents(".card-box");
            c.toggleClass("changeShow");
            a(this).toggleClass("changePosition");
            var e = c.hasClass("changeShow") ? 0 : 1;
            c.find("video") && c.find("video")[e] && c.find("video")[e].pause();
            a(this).parents(".img-btn") &&
              (a(this).parents(".img-btn").show(),
              a(this).parents(".img-btn").find(".restart") &&
                a(this).parents(".img-btn").find(".restart").show());
            c = a(this).hasClass("changePosition")
              ? a(this).find(".close").text()
              : a(this).find(".open").text();
            b.sendGa(a(this), c);
          });
          a(".cmp__sample-image-tiling .img-btn .restart").click(function () {
            var c = a(this),
              e = c.parents(".card-box"),
              f = e.hasClass("changeShow") ? 1 : 0,
              g = a(this).find(".ft-body-3")[0].innerText;
            1024 >= document.body.clientWidth && c.hide();
            var d = e.find("video")[f];
            d.currentTime = 0;
            d.play();
            d.addEventListener("pause", function q() {
              c.show();
              d.removeEventListener("pause", q);
            });
            b.sendGa(a(this), g);
          });
        }
      });
    }).call(this, b(3));
  },
  693: function (e, g, b) {},
  80: function (e, g) {},
  800: function (e, g, b) {
    b.r(g);
    b(678);
    b(680);
    b(682);
    b(684);
    b(686);
    b(688);
    b(690);
    b(692);
  },
});

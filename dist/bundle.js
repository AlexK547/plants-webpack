(() => {
  "use strict";
  var e = {
      549: (e, t, n) => {
        n.d(t, { Z: () => i });
        var r = n(81),
          o = n.n(r),
          a = n(645),
          s = n.n(a)()(o());
        s.push([e.id, ".header{color:red}", ""]);
        const i = s;
      },
      189: (e, t, n) => {
        n.d(t, { Z: () => i });
        var r = n(81),
          o = n.n(r),
          a = n(645),
          s = n.n(a)()(o());
        s.push([e.id, ".welcome{color:green}", ""]);
        const i = s;
      },
      342: (e, t, n) => {
        n.d(t, { Z: () => i });
        var r = n(81),
          o = n.n(r),
          a = n(645),
          s = n.n(a)()(o());
        s.push([e.id, ".main{color:#9acd32}", ""]);
        const i = s;
      },
      800: (e, t, n) => {
        n.d(t, { Z: () => i });
        var r = n(81),
          o = n.n(r),
          a = n(645),
          s = n.n(a)()(o());
        s.push([e.id, "*{padding:0;margin:0}", ""]);
        const i = s;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, o, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var s = {};
              if (r)
                for (var i = 0; i < this.length; i++) {
                  var c = this[i][0];
                  null != c && (s[c] = !0);
                }
              for (var l = 0; l < e.length; l++) {
                var d = [].concat(e[l]);
                (r && s[d[0]]) ||
                  (void 0 !== a &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = a)),
                  n &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = n))
                      : (d[2] = n)),
                  o &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = o))
                      : (d[4] = "".concat(o))),
                  t.push(d));
              }
            }),
            t
          );
        };
      },
      81: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      379: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var a = {}, s = [], i = 0; i < e.length; i++) {
            var c = e[i],
              l = r.base ? c[0] + r.base : c[0],
              d = a[l] || 0,
              u = "".concat(l, " ").concat(d);
            a[l] = d + 1;
            var p = n(u),
              f = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== p) t[p].references++, t[p].updater(f);
            else {
              var v = o(f, r);
              (r.byIndex = i),
                t.splice(i, 0, { identifier: u, updater: v, references: 1 });
            }
            s.push(u);
          }
          return s;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var s = 0; s < a.length; s++) {
              var i = n(a[s]);
              t[i].references--;
            }
            for (var c = r(e, o), l = 0; l < a.length; l++) {
              var d = n(a[l]);
              0 === t[d].references && (t[d].updater(), t.splice(d, 1));
            }
            a = c;
          };
        };
      },
      569: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var a = n.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { id: r, exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.nc = void 0),
    (() => {
      var e = n(379),
        t = n.n(e),
        r = n(795),
        o = n.n(r),
        a = n(569),
        s = n.n(a),
        i = n(565),
        c = n.n(i),
        l = n(216),
        d = n.n(l),
        u = n(589),
        p = n.n(u),
        f = n(800),
        v = {};
      function m(e) {
        const t = document.createElement("template");
        return (t.innerHTML = e), t.content.firstChild;
      }
      (v.styleTagTransform = p()),
        (v.setAttributes = c()),
        (v.insert = s().bind(null, "head")),
        (v.domAPI = o()),
        (v.insertStyleElement = d()),
        t()(f.Z, v),
        f.Z && f.Z.locals && f.Z.locals;
      var h = n(549),
        y = {};
      (y.styleTagTransform = p()),
        (y.setAttributes = c()),
        (y.insert = s().bind(null, "head")),
        (y.domAPI = o()),
        (y.insertStyleElement = d()),
        t()(h.Z, y),
        h.Z && h.Z.locals && h.Z.locals;
      const g = m(
        '<header class="header">\r\n  <div>Header</div>\r\n</header>'
      );
      var b = n(342),
        Z = {};
      (Z.styleTagTransform = p()),
        (Z.setAttributes = c()),
        (Z.insert = s().bind(null, "head")),
        (Z.domAPI = o()),
        (Z.insertStyleElement = d()),
        t()(b.Z, Z),
        b.Z && b.Z.locals && b.Z.locals;
      var T = n(189),
        x = {};
      (x.styleTagTransform = p()),
        (x.setAttributes = c()),
        (x.insert = s().bind(null, "head")),
        (x.domAPI = o()),
        (x.insertStyleElement = d()),
        t()(T.Z, x),
        T.Z && T.Z.locals && T.Z.locals;
      const A = m(
          '<section class="welcome">\r\n  <div>Welcome</div>\r\n</section>'
        ),
        E = m('<main class="main">\r\n  <div>Main</div>\r\n</main>');
      E.appendChild(A);
      const C = E,
        I = document.getElementById("root");
      I.append(g), I.append(C);
    })();
})();

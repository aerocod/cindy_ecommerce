!(function (t) {
    function e(n) {
        if (i[n]) return i[n].exports;
        var r = (i[n] = { exports: {}, id: n, loaded: !1 });
        return t[n].call(r.exports, r, r.exports, e), (r.loaded = !0), r.exports;
    }
    var i = {};
    return (e.m = t), (e.c = i), (e.p = "/public/assets/javascripts/"), e(0);
})({
    0: function (t, e, i) {
        (function (t) {
            "use strict";
            function e(t) {
                return t && t.__esModule ? t : { default: t };
            }
            var n = i(307),
                r = e(n);
            i(1427),
                t(function () {
                    if (t(".item-related-wrap").length > 0) {
                        var e = t(".item-related-wrap"),
                            i = { placement: "brand" },
                            n = new r["default"](e, i);
                        n.getItems();
                    }
                    if (window.matchMedia("(max-width:768px)").matches) {
                        var o = t(".js-description-category"),
                            s = parseInt(o.height()) + 30,
                            a = parseInt(0.5 * s);
                        o.css("height", a + "px"),
                            t(".description__more-button").click(function () {
                                parseInt(o.height()) === s
                                    ? (o.css("height", a), t(this).find("a").html("Read More"), t(this).removeClass("description__more-button__close"))
                                    : (o.css("height", s), t(this).addClass("description__more-button__close"), t(this).find("a").html("Show Less"));
                            });
                    } else t(".description__more-button").hide();
                    t("#tabs").tabs(),
                        t("#seasons").tabs(),
                        t(".js-more-lead-btn")
                            .unbind("click")
                            .bind("click", function (e) {
                                e.preventDefault();
                                var i = t(this).parent().prevAll(".js-detail-lead-first");
                                i.toggle(), i.next(".js-detail-lead-second").toggle(), t(this).find(".bs-more-btn__more").toggle(), t(this).find(".bs-more-btn__less").toggle();
                            });
                });
        }.call(e, i(3)));
    },
    2: function (t, e) {
        var i = Object;
        t.exports = {
            create: i.create,
            getProto: i.getPrototypeOf,
            isEnum: {}.propertyIsEnumerable,
            getDesc: i.getOwnPropertyDescriptor,
            setDesc: i.defineProperty,
            setDescs: i.defineProperties,
            getKeys: i.keys,
            getNames: i.getOwnPropertyNames,
            getSymbols: i.getOwnPropertySymbols,
            each: [].forEach,
        };
    },
    3: function (t, e, i) {
        var n, r;
        !(function (e, i) {
            "object" == typeof t && "object" == typeof t.exports
                ? (t.exports = e.document
                      ? i(e, !0)
                      : function (t) {
                            if (!t.document) throw new Error("jQuery requires a window with a document");
                            return i(t);
                        })
                : i(e);
        })("undefined" != typeof window ? window : this, function (i, o) {
            function s(t) {
                var e = "length" in t && t.length,
                    i = nt.type(t);
                return "function" === i || nt.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || ("number" == typeof e && e > 0 && e - 1 in t);
            }
            function a(t, e, i) {
                if (nt.isFunction(e))
                    return nt.grep(t, function (t, n) {
                        return !!e.call(t, n, t) !== i;
                    });
                if (e.nodeType)
                    return nt.grep(t, function (t) {
                        return (t === e) !== i;
                    });
                if ("string" == typeof e) {
                    if (dt.test(e)) return nt.filter(e, t, i);
                    e = nt.filter(e, t);
                }
                return nt.grep(t, function (t) {
                    return K.call(e, t) >= 0 !== i;
                });
            }
            function l(t, e) {
                for (; (t = t[e]) && 1 !== t.nodeType; );
                return t;
            }
            function c(t) {
                var e = (Tt[t] = {});
                return (
                    nt.each(t.match(mt) || [], function (t, i) {
                        e[i] = !0;
                    }),
                    e
                );
            }
            function u() {
                et.removeEventListener("DOMContentLoaded", u, !1), i.removeEventListener("load", u, !1), nt.ready();
            }
            function d() {
                Object.defineProperty((this.cache = {}), 0, {
                    get: function () {
                        return {};
                    },
                }),
                    (this.expando = nt.expando + d.uid++);
            }
            function h(t, e, i) {
                var n;
                if (void 0 === i && 1 === t.nodeType)
                    if (((n = "data-" + e.replace(Pt, "-$1").toLowerCase()), (i = t.getAttribute(n)), "string" == typeof i)) {
                        try {
                            i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : wt.test(i) ? nt.parseJSON(i) : i;
                        } catch (r) {}
                        xt.set(t, e, i);
                    } else i = void 0;
                return i;
            }
            function p() {
                return !0;
            }
            function f() {
                return !1;
            }
            function v() {
                try {
                    return et.activeElement;
                } catch (t) {}
            }
            function g(t, e) {
                return nt.nodeName(t, "table") && nt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t;
            }
            function m(t) {
                return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
            }
            function T(t) {
                var e = Wt.exec(t.type);
                return e ? (t.type = e[1]) : t.removeAttribute("type"), t;
            }
            function b(t, e) {
                for (var i = 0, n = t.length; n > i; i++) St.set(t[i], "globalEval", !e || St.get(e[i], "globalEval"));
            }
            function y(t, e) {
                var i, n, r, o, s, a, l, c;
                if (1 === e.nodeType) {
                    if (St.hasData(t) && ((o = St.access(t)), (s = St.set(e, o)), (c = o.events))) {
                        delete s.handle, (s.events = {});
                        for (r in c) for (i = 0, n = c[r].length; n > i; i++) nt.event.add(e, r, c[r][i]);
                    }
                    xt.hasData(t) && ((a = xt.access(t)), (l = nt.extend({}, a)), xt.set(e, l));
                }
            }
            function S(t, e) {
                var i = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
                return void 0 === e || (e && nt.nodeName(t, e)) ? nt.merge([t], i) : i;
            }
            function x(t, e) {
                var i = e.nodeName.toLowerCase();
                "input" === i && Mt.test(t.type) ? (e.checked = t.checked) : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue);
            }
            function w(t, e) {
                var n,
                    r = nt(e.createElement(t)).appendTo(e.body),
                    o = i.getDefaultComputedStyle && (n = i.getDefaultComputedStyle(r[0])) ? n.display : nt.css(r[0], "display");
                return r.detach(), o;
            }
            function P(t) {
                var e = et,
                    i = Ft[t];
                return (
                    i ||
                        ((i = w(t, e)),
                        ("none" !== i && i) || ((jt = (jt || nt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement)), (e = jt[0].contentDocument), e.write(), e.close(), (i = w(t, e)), jt.detach()),
                        (Ft[t] = i)),
                    i
                );
            }
            function A(t, e, i) {
                var n,
                    r,
                    o,
                    s,
                    a = t.style;
                return (
                    (i = i || Ut(t)),
                    i && (s = i.getPropertyValue(e) || i[e]),
                    i &&
                        ("" !== s || nt.contains(t.ownerDocument, t) || (s = nt.style(t, e)),
                        zt.test(s) && Vt.test(e) && ((n = a.width), (r = a.minWidth), (o = a.maxWidth), (a.minWidth = a.maxWidth = a.width = s), (s = i.width), (a.width = n), (a.minWidth = r), (a.maxWidth = o))),
                    void 0 !== s ? s + "" : s
                );
            }
            function C(t, e) {
                return {
                    get: function () {
                        return t() ? void delete this.get : (this.get = e).apply(this, arguments);
                    },
                };
            }
            function k(t, e) {
                if (e in t) return e;
                for (var i = e[0].toUpperCase() + e.slice(1), n = e, r = Jt.length; r--; ) if (((e = Jt[r] + i), e in t)) return e;
                return n;
            }
            function M(t, e, i) {
                var n = Yt.exec(e);
                return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e;
            }
            function E(t, e, i, n, r) {
                for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2)
                    "margin" === i && (s += nt.css(t, i + Ct[o], !0, r)),
                        n
                            ? ("content" === i && (s -= nt.css(t, "padding" + Ct[o], !0, r)), "margin" !== i && (s -= nt.css(t, "border" + Ct[o] + "Width", !0, r)))
                            : ((s += nt.css(t, "padding" + Ct[o], !0, r)), "padding" !== i && (s += nt.css(t, "border" + Ct[o] + "Width", !0, r)));
                return s;
            }
            function _(t, e, i) {
                var n = !0,
                    r = "width" === e ? t.offsetWidth : t.offsetHeight,
                    o = Ut(t),
                    s = "border-box" === nt.css(t, "boxSizing", !1, o);
                if (0 >= r || null == r) {
                    if (((r = A(t, e, o)), (0 > r || null == r) && (r = t.style[e]), zt.test(r))) return r;
                    (n = s && (tt.boxSizingReliable() || r === t.style[e])), (r = parseFloat(r) || 0);
                }
                return r + E(t, e, i || (s ? "border" : "content"), n, o) + "px";
            }
            function H(t, e) {
                for (var i, n, r, o = [], s = 0, a = t.length; a > s; s++)
                    (n = t[s]),
                        n.style &&
                            ((o[s] = St.get(n, "olddisplay")),
                            (i = n.style.display),
                            e
                                ? (o[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && kt(n) && (o[s] = St.access(n, "olddisplay", P(n.nodeName))))
                                : ((r = kt(n)), ("none" === i && r) || St.set(n, "olddisplay", r ? i : nt.css(n, "display"))));
                for (s = 0; a > s; s++) (n = t[s]), n.style && ((e && "none" !== n.style.display && "" !== n.style.display) || (n.style.display = e ? o[s] || "" : "none"));
                return t;
            }
            function G(t, e, i, n, r) {
                return new G.prototype.init(t, e, i, n, r);
            }
            function D() {
                return (
                    setTimeout(function () {
                        te = void 0;
                    }),
                    (te = nt.now())
                );
            }
            function I(t, e) {
                var i,
                    n = 0,
                    r = { height: t };
                for (e = e ? 1 : 0; 4 > n; n += 2 - e) (i = Ct[n]), (r["margin" + i] = r["padding" + i] = t);
                return e && (r.opacity = r.width = t), r;
            }
            function B(t, e, i) {
                for (var n, r = (se[e] || []).concat(se["*"]), o = 0, s = r.length; s > o; o++) if ((n = r[o].call(i, e, t))) return n;
            }
            function N(t, e, i) {
                var n,
                    r,
                    o,
                    s,
                    a,
                    l,
                    c,
                    u,
                    d = this,
                    h = {},
                    p = t.style,
                    f = t.nodeType && kt(t),
                    v = St.get(t, "fxshow");
                i.queue ||
                    ((a = nt._queueHooks(t, "fx")),
                    null == a.unqueued &&
                        ((a.unqueued = 0),
                        (l = a.empty.fire),
                        (a.empty.fire = function () {
                            a.unqueued || l();
                        })),
                    a.unqueued++,
                    d.always(function () {
                        d.always(function () {
                            a.unqueued--, nt.queue(t, "fx").length || a.empty.fire();
                        });
                    })),
                    1 === t.nodeType &&
                        ("height" in e || "width" in e) &&
                        ((i.overflow = [p.overflow, p.overflowX, p.overflowY]),
                        (c = nt.css(t, "display")),
                        (u = "none" === c ? St.get(t, "olddisplay") || P(t.nodeName) : c),
                        "inline" === u && "none" === nt.css(t, "float") && (p.display = "inline-block")),
                    i.overflow &&
                        ((p.overflow = "hidden"),
                        d.always(function () {
                            (p.overflow = i.overflow[0]), (p.overflowX = i.overflow[1]), (p.overflowY = i.overflow[2]);
                        }));
                for (n in e)
                    if (((r = e[n]), ie.exec(r))) {
                        if ((delete e[n], (o = o || "toggle" === r), r === (f ? "hide" : "show"))) {
                            if ("show" !== r || !v || void 0 === v[n]) continue;
                            f = !0;
                        }
                        h[n] = (v && v[n]) || nt.style(t, n);
                    } else c = void 0;
                if (nt.isEmptyObject(h)) "inline" === ("none" === c ? P(t.nodeName) : c) && (p.display = c);
                else {
                    v ? "hidden" in v && (f = v.hidden) : (v = St.access(t, "fxshow", {})),
                        o && (v.hidden = !f),
                        f
                            ? nt(t).show()
                            : d.done(function () {
                                  nt(t).hide();
                              }),
                        d.done(function () {
                            var e;
                            St.remove(t, "fxshow");
                            for (e in h) nt.style(t, e, h[e]);
                        });
                    for (n in h) (s = B(f ? v[n] : 0, n, d)), n in v || ((v[n] = s.start), f && ((s.end = s.start), (s.start = "width" === n || "height" === n ? 1 : 0)));
                }
            }
            function O(t, e) {
                var i, n, r, o, s;
                for (i in t)
                    if (((n = nt.camelCase(i)), (r = e[n]), (o = t[i]), nt.isArray(o) && ((r = o[1]), (o = t[i] = o[0])), i !== n && ((t[n] = o), delete t[i]), (s = nt.cssHooks[n]), s && "expand" in s)) {
                        (o = s.expand(o)), delete t[n];
                        for (i in o) i in t || ((t[i] = o[i]), (e[i] = r));
                    } else e[n] = r;
            }
            function L(t, e, i) {
                var n,
                    r,
                    o = 0,
                    s = oe.length,
                    a = nt.Deferred().always(function () {
                        delete l.elem;
                    }),
                    l = function () {
                        if (r) return !1;
                        for (var e = te || D(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, o = 1 - n, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(o);
                        return a.notifyWith(t, [c, o, i]), 1 > o && l ? i : (a.resolveWith(t, [c]), !1);
                    },
                    c = a.promise({
                        elem: t,
                        props: nt.extend({}, e),
                        opts: nt.extend(!0, { specialEasing: {} }, i),
                        originalProperties: e,
                        originalOptions: i,
                        startTime: te || D(),
                        duration: i.duration,
                        tweens: [],
                        createTween: function (e, i) {
                            var n = nt.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                            return c.tweens.push(n), n;
                        },
                        stop: function (e) {
                            var i = 0,
                                n = e ? c.tweens.length : 0;
                            if (r) return this;
                            for (r = !0; n > i; i++) c.tweens[i].run(1);
                            return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this;
                        },
                    }),
                    u = c.props;
                for (O(u, c.opts.specialEasing); s > o; o++) if ((n = oe[o].call(c, t, u, c.opts))) return n;
                return (
                    nt.map(u, B, c),
                    nt.isFunction(c.opts.start) && c.opts.start.call(t, c),
                    nt.fx.timer(nt.extend(l, { elem: t, anim: c, queue: c.opts.queue })),
                    c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
                );
            }
            function R(t) {
                return function (e, i) {
                    "string" != typeof e && ((i = e), (e = "*"));
                    var n,
                        r = 0,
                        o = e.toLowerCase().match(mt) || [];
                    if (nt.isFunction(i)) for (; (n = o[r++]); ) "+" === n[0] ? ((n = n.slice(1) || "*"), (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i);
                };
            }
            function W(t, e, i, n) {
                function r(a) {
                    var l;
                    return (
                        (o[a] = !0),
                        nt.each(t[a] || [], function (t, a) {
                            var c = a(e, i, n);
                            return "string" != typeof c || s || o[c] ? (s ? !(l = c) : void 0) : (e.dataTypes.unshift(c), r(c), !1);
                        }),
                        l
                    );
                }
                var o = {},
                    s = t === we;
                return r(e.dataTypes[0]) || (!o["*"] && r("*"));
            }
            function X(t, e) {
                var i,
                    n,
                    r = nt.ajaxSettings.flatOptions || {};
                for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
                return n && nt.extend(!0, t, n), t;
            }
            function $(t, e, i) {
                for (var n, r, o, s, a = t.contents, l = t.dataTypes; "*" === l[0]; ) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                if (n)
                    for (r in a)
                        if (a[r] && a[r].test(n)) {
                            l.unshift(r);
                            break;
                        }
                if (l[0] in i) o = l[0];
                else {
                    for (r in i) {
                        if (!l[0] || t.converters[r + " " + l[0]]) {
                            o = r;
                            break;
                        }
                        s || (s = r);
                    }
                    o = o || s;
                }
                return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0;
            }
            function j(t, e, i, n) {
                var r,
                    o,
                    s,
                    a,
                    l,
                    c = {},
                    u = t.dataTypes.slice();
                if (u[1]) for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
                for (o = u.shift(); o; )
                    if ((t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), (l = o), (o = u.shift())))
                        if ("*" === o) o = l;
                        else if ("*" !== l && l !== o) {
                            if (((s = c[l + " " + o] || c["* " + o]), !s))
                                for (r in c)
                                    if (((a = r.split(" ")), a[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]]))) {
                                        s === !0 ? (s = c[r]) : c[r] !== !0 && ((o = a[0]), u.unshift(a[1]));
                                        break;
                                    }
                            if (s !== !0)
                                if (s && t["throws"]) e = s(e);
                                else
                                    try {
                                        e = s(e);
                                    } catch (d) {
                                        return { state: "parsererror", error: s ? d : "No conversion from " + l + " to " + o };
                                    }
                        }
                return { state: "success", data: e };
            }
            function F(t, e, i, n) {
                var r;
                if (nt.isArray(e))
                    nt.each(e, function (e, r) {
                        i || Me.test(t) ? n(t, r) : F(t + "[" + ("object" == typeof r ? e : "") + "]", r, i, n);
                    });
                else if (i || "object" !== nt.type(e)) n(t, e);
                else for (r in e) F(t + "[" + r + "]", e[r], i, n);
            }
            function V(t) {
                return nt.isWindow(t) ? t : 9 === t.nodeType && t.defaultView;
            }
            var z = [],
                U = z.slice,
                q = z.concat,
                Y = z.push,
                K = z.indexOf,
                Q = {},
                Z = Q.toString,
                J = Q.hasOwnProperty,
                tt = {},
                et = i.document,
                it = "2.1.4",
                nt = function (t, e) {
                    return new nt.fn.init(t, e);
                },
                rt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                ot = /^-ms-/,
                st = /-([\da-z])/gi,
                at = function (t, e) {
                    return e.toUpperCase();
                };
            (nt.fn = nt.prototype = {
                jquery: it,
                constructor: nt,
                selector: "",
                length: 0,
                toArray: function () {
                    return U.call(this);
                },
                get: function (t) {
                    return null != t ? (0 > t ? this[t + this.length] : this[t]) : U.call(this);
                },
                pushStack: function (t) {
                    var e = nt.merge(this.constructor(), t);
                    return (e.prevObject = this), (e.context = this.context), e;
                },
                each: function (t, e) {
                    return nt.each(this, t, e);
                },
                map: function (t) {
                    return this.pushStack(
                        nt.map(this, function (e, i) {
                            return t.call(e, i, e);
                        })
                    );
                },
                slice: function () {
                    return this.pushStack(U.apply(this, arguments));
                },
                first: function () {
                    return this.eq(0);
                },
                last: function () {
                    return this.eq(-1);
                },
                eq: function (t) {
                    var e = this.length,
                        i = +t + (0 > t ? e : 0);
                    return this.pushStack(i >= 0 && e > i ? [this[i]] : []);
                },
                end: function () {
                    return this.prevObject || this.constructor(null);
                },
                push: Y,
                sort: z.sort,
                splice: z.splice,
            }),
                (nt.extend = nt.fn.extend = function () {
                    var t,
                        e,
                        i,
                        n,
                        r,
                        o,
                        s = arguments[0] || {},
                        a = 1,
                        l = arguments.length,
                        c = !1;
                    for ("boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++), "object" == typeof s || nt.isFunction(s) || (s = {}), a === l && ((s = this), a--); l > a; a++)
                        if (null != (t = arguments[a]))
                            for (e in t)
                                (i = s[e]),
                                    (n = t[e]),
                                    s !== n &&
                                        (c && n && (nt.isPlainObject(n) || (r = nt.isArray(n)))
                                            ? (r ? ((r = !1), (o = i && nt.isArray(i) ? i : [])) : (o = i && nt.isPlainObject(i) ? i : {}), (s[e] = nt.extend(c, o, n)))
                                            : void 0 !== n && (s[e] = n));
                    return s;
                }),
                nt.extend({
                    expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function (t) {
                        throw new Error(t);
                    },
                    noop: function () {},
                    isFunction: function (t) {
                        return "function" === nt.type(t);
                    },
                    isArray: Array.isArray,
                    isWindow: function (t) {
                        return null != t && t === t.window;
                    },
                    isNumeric: function (t) {
                        return !nt.isArray(t) && t - parseFloat(t) + 1 >= 0;
                    },
                    isPlainObject: function (t) {
                        return "object" !== nt.type(t) || t.nodeType || nt.isWindow(t) ? !1 : t.constructor && !J.call(t.constructor.prototype, "isPrototypeOf") ? !1 : !0;
                    },
                    isEmptyObject: function (t) {
                        var e;
                        for (e in t) return !1;
                        return !0;
                    },
                    type: function (t) {
                        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Q[Z.call(t)] || "object" : typeof t;
                    },
                    globalEval: function (t) {
                        var e,
                            i = eval;
                        (t = nt.trim(t)), t && (1 === t.indexOf("use strict") ? ((e = et.createElement("script")), (e.text = t), et.head.appendChild(e).parentNode.removeChild(e)) : i(t));
                    },
                    camelCase: function (t) {
                        return t.replace(ot, "ms-").replace(st, at);
                    },
                    nodeName: function (t, e) {
                        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
                    },
                    each: function (t, e, i) {
                        var n,
                            r = 0,
                            o = t.length,
                            a = s(t);
                        if (i) {
                            if (a) for (; o > r && ((n = e.apply(t[r], i)), n !== !1); r++);
                            else for (r in t) if (((n = e.apply(t[r], i)), n === !1)) break;
                        } else if (a) for (; o > r && ((n = e.call(t[r], r, t[r])), n !== !1); r++);
                        else for (r in t) if (((n = e.call(t[r], r, t[r])), n === !1)) break;
                        return t;
                    },
                    trim: function (t) {
                        return null == t ? "" : (t + "").replace(rt, "");
                    },
                    makeArray: function (t, e) {
                        var i = e || [];
                        return null != t && (s(Object(t)) ? nt.merge(i, "string" == typeof t ? [t] : t) : Y.call(i, t)), i;
                    },
                    inArray: function (t, e, i) {
                        return null == e ? -1 : K.call(e, t, i);
                    },
                    merge: function (t, e) {
                        for (var i = +e.length, n = 0, r = t.length; i > n; n++) t[r++] = e[n];
                        return (t.length = r), t;
                    },
                    grep: function (t, e, i) {
                        for (var n, r = [], o = 0, s = t.length, a = !i; s > o; o++) (n = !e(t[o], o)), n !== a && r.push(t[o]);
                        return r;
                    },
                    map: function (t, e, i) {
                        var n,
                            r = 0,
                            o = t.length,
                            a = s(t),
                            l = [];
                        if (a) for (; o > r; r++) (n = e(t[r], r, i)), null != n && l.push(n);
                        else for (r in t) (n = e(t[r], r, i)), null != n && l.push(n);
                        return q.apply([], l);
                    },
                    guid: 1,
                    proxy: function (t, e) {
                        var i, n, r;
                        return (
                            "string" == typeof e && ((i = t[e]), (e = t), (t = i)),
                            nt.isFunction(t)
                                ? ((n = U.call(arguments, 2)),
                                  (r = function () {
                                      return t.apply(e || this, n.concat(U.call(arguments)));
                                  }),
                                  (r.guid = t.guid = t.guid || nt.guid++),
                                  r)
                                : void 0
                        );
                    },
                    now: Date.now,
                    support: tt,
                }),
                nt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
                    Q["[object " + e + "]"] = e.toLowerCase();
                });
            var lt = (function (t) {
                function e(t, e, i, n) {
                    var r, o, s, a, l, c, d, p, f, v;
                    if (((e ? e.ownerDocument || e : W) !== G && H(e), (e = e || G), (i = i || []), (a = e.nodeType), "string" != typeof t || !t || (1 !== a && 9 !== a && 11 !== a))) return i;
                    if (!n && I) {
                        if (11 !== a && (r = Tt.exec(t)))
                            if ((s = r[1])) {
                                if (9 === a) {
                                    if (((o = e.getElementById(s)), !o || !o.parentNode)) return i;
                                    if (o.id === s) return i.push(o), i;
                                } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(s)) && L(e, o) && o.id === s) return i.push(o), i;
                            } else {
                                if (r[2]) return Z.apply(i, e.getElementsByTagName(t)), i;
                                if ((s = r[3]) && S.getElementsByClassName) return Z.apply(i, e.getElementsByClassName(s)), i;
                            }
                        if (S.qsa && (!B || !B.test(t))) {
                            if (((p = d = R), (f = e), (v = 1 !== a && t), 1 === a && "object" !== e.nodeName.toLowerCase())) {
                                for (c = A(t), (d = e.getAttribute("id")) ? (p = d.replace(yt, "\\$&")) : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--; ) c[l] = p + h(c[l]);
                                (f = (bt.test(t) && u(e.parentNode)) || e), (v = c.join(","));
                            }
                            if (v)
                                try {
                                    return Z.apply(i, f.querySelectorAll(v)), i;
                                } catch (g) {
                                } finally {
                                    d || e.removeAttribute("id");
                                }
                        }
                    }
                    return k(t.replace(lt, "$1"), e, i, n);
                }
                function i() {
                    function t(i, n) {
                        return e.push(i + " ") > x.cacheLength && delete t[e.shift()], (t[i + " "] = n);
                    }
                    var e = [];
                    return t;
                }
                function n(t) {
                    return (t[R] = !0), t;
                }
                function r(t) {
                    var e = G.createElement("div");
                    try {
                        return !!t(e);
                    } catch (i) {
                        return !1;
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), (e = null);
                    }
                }
                function o(t, e) {
                    for (var i = t.split("|"), n = t.length; n--; ) x.attrHandle[i[n]] = e;
                }
                function s(t, e) {
                    var i = e && t,
                        n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || U) - (~t.sourceIndex || U);
                    if (n) return n;
                    if (i) for (; (i = i.nextSibling); ) if (i === e) return -1;
                    return t ? 1 : -1;
                }
                function a(t) {
                    return function (e) {
                        var i = e.nodeName.toLowerCase();
                        return "input" === i && e.type === t;
                    };
                }
                function l(t) {
                    return function (e) {
                        var i = e.nodeName.toLowerCase();
                        return ("input" === i || "button" === i) && e.type === t;
                    };
                }
                function c(t) {
                    return n(function (e) {
                        return (
                            (e = +e),
                            n(function (i, n) {
                                for (var r, o = t([], i.length, e), s = o.length; s--; ) i[(r = o[s])] && (i[r] = !(n[r] = i[r]));
                            })
                        );
                    });
                }
                function u(t) {
                    return t && "undefined" != typeof t.getElementsByTagName && t;
                }
                function d() {}
                function h(t) {
                    for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
                    return n;
                }
                function p(t, e, i) {
                    var n = e.dir,
                        r = i && "parentNode" === n,
                        o = $++;
                    return e.first
                        ? function (e, i, o) {
                              for (; (e = e[n]); ) if (1 === e.nodeType || r) return t(e, i, o);
                          }
                        : function (e, i, s) {
                              var a,
                                  l,
                                  c = [X, o];
                              if (s) {
                                  for (; (e = e[n]); ) if ((1 === e.nodeType || r) && t(e, i, s)) return !0;
                              } else
                                  for (; (e = e[n]); )
                                      if (1 === e.nodeType || r) {
                                          if (((l = e[R] || (e[R] = {})), (a = l[n]) && a[0] === X && a[1] === o)) return (c[2] = a[2]);
                                          if (((l[n] = c), (c[2] = t(e, i, s)))) return !0;
                                      }
                          };
                }
                function f(t) {
                    return t.length > 1
                        ? function (e, i, n) {
                              for (var r = t.length; r--; ) if (!t[r](e, i, n)) return !1;
                              return !0;
                          }
                        : t[0];
                }
                function v(t, i, n) {
                    for (var r = 0, o = i.length; o > r; r++) e(t, i[r], n);
                    return n;
                }
                function g(t, e, i, n, r) {
                    for (var o, s = [], a = 0, l = t.length, c = null != e; l > a; a++) (o = t[a]) && (!i || i(o, n, r)) && (s.push(o), c && e.push(a));
                    return s;
                }
                function m(t, e, i, r, o, s) {
                    return (
                        r && !r[R] && (r = m(r)),
                        o && !o[R] && (o = m(o, s)),
                        n(function (n, s, a, l) {
                            var c,
                                u,
                                d,
                                h = [],
                                p = [],
                                f = s.length,
                                m = n || v(e || "*", a.nodeType ? [a] : a, []),
                                T = !t || (!n && e) ? m : g(m, h, t, a, l),
                                b = i ? (o || (n ? t : f || r) ? [] : s) : T;
                            if ((i && i(T, b, a, l), r)) for (c = g(b, p), r(c, [], a, l), u = c.length; u--; ) (d = c[u]) && (b[p[u]] = !(T[p[u]] = d));
                            if (n) {
                                if (o || t) {
                                    if (o) {
                                        for (c = [], u = b.length; u--; ) (d = b[u]) && c.push((T[u] = d));
                                        o(null, (b = []), c, l);
                                    }
                                    for (u = b.length; u--; ) (d = b[u]) && (c = o ? tt(n, d) : h[u]) > -1 && (n[c] = !(s[c] = d));
                                }
                            } else (b = g(b === s ? b.splice(f, b.length) : b)), o ? o(null, s, b, l) : Z.apply(s, b);
                        })
                    );
                }
                function T(t) {
                    for (
                        var e,
                            i,
                            n,
                            r = t.length,
                            o = x.relative[t[0].type],
                            s = o || x.relative[" "],
                            a = o ? 1 : 0,
                            l = p(
                                function (t) {
                                    return t === e;
                                },
                                s,
                                !0
                            ),
                            c = p(
                                function (t) {
                                    return tt(e, t) > -1;
                                },
                                s,
                                !0
                            ),
                            u = [
                                function (t, i, n) {
                                    var r = (!o && (n || i !== M)) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n));
                                    return (e = null), r;
                                },
                            ];
                        r > a;
                        a++
                    )
                        if ((i = x.relative[t[a].type])) u = [p(f(u), i)];
                        else {
                            if (((i = x.filter[t[a].type].apply(null, t[a].matches)), i[R])) {
                                for (n = ++a; r > n && !x.relative[t[n].type]; n++);
                                return m(a > 1 && f(u), a > 1 && h(t.slice(0, a - 1).concat({ value: " " === t[a - 2].type ? "*" : "" })).replace(lt, "$1"), i, n > a && T(t.slice(a, n)), r > n && T((t = t.slice(n))), r > n && h(t));
                            }
                            u.push(i);
                        }
                    return f(u);
                }
                function b(t, i) {
                    var r = i.length > 0,
                        o = t.length > 0,
                        s = function (n, s, a, l, c) {
                            var u,
                                d,
                                h,
                                p = 0,
                                f = "0",
                                v = n && [],
                                m = [],
                                T = M,
                                b = n || (o && x.find.TAG("*", c)),
                                y = (X += null == T ? 1 : Math.random() || 0.1),
                                S = b.length;
                            for (c && (M = s !== G && s); f !== S && null != (u = b[f]); f++) {
                                if (o && u) {
                                    for (d = 0; (h = t[d++]); )
                                        if (h(u, s, a)) {
                                            l.push(u);
                                            break;
                                        }
                                    c && (X = y);
                                }
                                r && ((u = !h && u) && p--, n && v.push(u));
                            }
                            if (((p += f), r && f !== p)) {
                                for (d = 0; (h = i[d++]); ) h(v, m, s, a);
                                if (n) {
                                    if (p > 0) for (; f--; ) v[f] || m[f] || (m[f] = K.call(l));
                                    m = g(m);
                                }
                                Z.apply(l, m), c && !n && m.length > 0 && p + i.length > 1 && e.uniqueSort(l);
                            }
                            return c && ((X = y), (M = T)), v;
                        };
                    return r ? n(s) : s;
                }
                var y,
                    S,
                    x,
                    w,
                    P,
                    A,
                    C,
                    k,
                    M,
                    E,
                    _,
                    H,
                    G,
                    D,
                    I,
                    B,
                    N,
                    O,
                    L,
                    R = "sizzle" + 1 * new Date(),
                    W = t.document,
                    X = 0,
                    $ = 0,
                    j = i(),
                    F = i(),
                    V = i(),
                    z = function (t, e) {
                        return t === e && (_ = !0), 0;
                    },
                    U = 1 << 31,
                    q = {}.hasOwnProperty,
                    Y = [],
                    K = Y.pop,
                    Q = Y.push,
                    Z = Y.push,
                    J = Y.slice,
                    tt = function (t, e) {
                        for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return i;
                        return -1;
                    },
                    et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    it = "[\\x20\\t\\r\\n\\f]",
                    nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    rt = nt.replace("w", "w#"),
                    ot = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + it + "*\\]",
                    st = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
                    at = new RegExp(it + "+", "g"),
                    lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
                    ct = new RegExp("^" + it + "*," + it + "*"),
                    ut = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
                    dt = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
                    ht = new RegExp(st),
                    pt = new RegExp("^" + rt + "$"),
                    ft = {
                        ID: new RegExp("^#(" + nt + ")"),
                        CLASS: new RegExp("^\\.(" + nt + ")"),
                        TAG: new RegExp("^(" + nt.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + ot),
                        PSEUDO: new RegExp("^" + st),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + et + ")$", "i"),
                        needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i"),
                    },
                    vt = /^(?:input|select|textarea|button)$/i,
                    gt = /^h\d$/i,
                    mt = /^[^{]+\{\s*\[native \w/,
                    Tt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    bt = /[+~]/,
                    yt = /'|\\/g,
                    St = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
                    xt = function (t, e, i) {
                        var n = "0x" + e - 65536;
                        return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320);
                    },
                    wt = function () {
                        H();
                    };
                try {
                    Z.apply((Y = J.call(W.childNodes)), W.childNodes), Y[W.childNodes.length].nodeType;
                } catch (Pt) {
                    Z = {
                        apply: Y.length
                            ? function (t, e) {
                                  Q.apply(t, J.call(e));
                              }
                            : function (t, e) {
                                  for (var i = t.length, n = 0; (t[i++] = e[n++]); );
                                  t.length = i - 1;
                              },
                    };
                }
                (S = e.support = {}),
                    (P = e.isXML = function (t) {
                        var e = t && (t.ownerDocument || t).documentElement;
                        return e ? "HTML" !== e.nodeName : !1;
                    }),
                    (H = e.setDocument = function (t) {
                        var e,
                            i,
                            n = t ? t.ownerDocument || t : W;
                        return n !== G && 9 === n.nodeType && n.documentElement
                            ? ((G = n),
                              (D = n.documentElement),
                              (i = n.defaultView),
                              i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", wt, !1) : i.attachEvent && i.attachEvent("onunload", wt)),
                              (I = !P(n)),
                              (S.attributes = r(function (t) {
                                  return (t.className = "i"), !t.getAttribute("className");
                              })),
                              (S.getElementsByTagName = r(function (t) {
                                  return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length;
                              })),
                              (S.getElementsByClassName = mt.test(n.getElementsByClassName)),
                              (S.getById = r(function (t) {
                                  return (D.appendChild(t).id = R), !n.getElementsByName || !n.getElementsByName(R).length;
                              })),
                              S.getById
                                  ? ((x.find.ID = function (t, e) {
                                        if ("undefined" != typeof e.getElementById && I) {
                                            var i = e.getElementById(t);
                                            return i && i.parentNode ? [i] : [];
                                        }
                                    }),
                                    (x.filter.ID = function (t) {
                                        var e = t.replace(St, xt);
                                        return function (t) {
                                            return t.getAttribute("id") === e;
                                        };
                                    }))
                                  : (delete x.find.ID,
                                    (x.filter.ID = function (t) {
                                        var e = t.replace(St, xt);
                                        return function (t) {
                                            var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                                            return i && i.value === e;
                                        };
                                    })),
                              (x.find.TAG = S.getElementsByTagName
                                  ? function (t, e) {
                                        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : S.qsa ? e.querySelectorAll(t) : void 0;
                                    }
                                  : function (t, e) {
                                        var i,
                                            n = [],
                                            r = 0,
                                            o = e.getElementsByTagName(t);
                                        if ("*" === t) {
                                            for (; (i = o[r++]); ) 1 === i.nodeType && n.push(i);
                                            return n;
                                        }
                                        return o;
                                    }),
                              (x.find.CLASS =
                                  S.getElementsByClassName &&
                                  function (t, e) {
                                      return I ? e.getElementsByClassName(t) : void 0;
                                  }),
                              (N = []),
                              (B = []),
                              (S.qsa = mt.test(n.querySelectorAll)) &&
                                  (r(function (t) {
                                      (D.appendChild(t).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\f]' msallowcapture=''><option selected=''></option></select>"),
                                          t.querySelectorAll("[msallowcapture^='']").length && B.push("[*^$]=" + it + "*(?:''|\"\")"),
                                          t.querySelectorAll("[selected]").length || B.push("\\[" + it + "*(?:value|" + et + ")"),
                                          t.querySelectorAll("[id~=" + R + "-]").length || B.push("~="),
                                          t.querySelectorAll(":checked").length || B.push(":checked"),
                                          t.querySelectorAll("a#" + R + "+*").length || B.push(".#.+[+~]");
                                  }),
                                  r(function (t) {
                                      var e = n.createElement("input");
                                      e.setAttribute("type", "hidden"),
                                          t.appendChild(e).setAttribute("name", "D"),
                                          t.querySelectorAll("[name=d]").length && B.push("name" + it + "*[*^$|!~]?="),
                                          t.querySelectorAll(":enabled").length || B.push(":enabled", ":disabled"),
                                          t.querySelectorAll("*,:x"),
                                          B.push(",.*:");
                                  })),
                              (S.matchesSelector = mt.test((O = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector))) &&
                                  r(function (t) {
                                      (S.disconnectedMatch = O.call(t, "div")), O.call(t, "[s!='']:x"), N.push("!=", st);
                                  }),
                              (B = B.length && new RegExp(B.join("|"))),
                              (N = N.length && new RegExp(N.join("|"))),
                              (e = mt.test(D.compareDocumentPosition)),
                              (L =
                                  e || mt.test(D.contains)
                                      ? function (t, e) {
                                            var i = 9 === t.nodeType ? t.documentElement : t,
                                                n = e && e.parentNode;
                                            return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)));
                                        }
                                      : function (t, e) {
                                            if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                                            return !1;
                                        }),
                              (z = e
                                  ? function (t, e) {
                                        if (t === e) return (_ = !0), 0;
                                        var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                                        return i
                                            ? i
                                            : ((i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1),
                                              1 & i || (!S.sortDetached && e.compareDocumentPosition(t) === i)
                                                  ? t === n || (t.ownerDocument === W && L(W, t))
                                                      ? -1
                                                      : e === n || (e.ownerDocument === W && L(W, e))
                                                      ? 1
                                                      : E
                                                      ? tt(E, t) - tt(E, e)
                                                      : 0
                                                  : 4 & i
                                                  ? -1
                                                  : 1);
                                    }
                                  : function (t, e) {
                                        if (t === e) return (_ = !0), 0;
                                        var i,
                                            r = 0,
                                            o = t.parentNode,
                                            a = e.parentNode,
                                            l = [t],
                                            c = [e];
                                        if (!o || !a) return t === n ? -1 : e === n ? 1 : o ? -1 : a ? 1 : E ? tt(E, t) - tt(E, e) : 0;
                                        if (o === a) return s(t, e);
                                        for (i = t; (i = i.parentNode); ) l.unshift(i);
                                        for (i = e; (i = i.parentNode); ) c.unshift(i);
                                        for (; l[r] === c[r]; ) r++;
                                        return r ? s(l[r], c[r]) : l[r] === W ? -1 : c[r] === W ? 1 : 0;
                                    }),
                              n)
                            : G;
                    }),
                    (e.matches = function (t, i) {
                        return e(t, null, null, i);
                    }),
                    (e.matchesSelector = function (t, i) {
                        if (((t.ownerDocument || t) !== G && H(t), (i = i.replace(dt, "='$1']")), !(!S.matchesSelector || !I || (N && N.test(i)) || (B && B.test(i)))))
                            try {
                                var n = O.call(t, i);
                                if (n || S.disconnectedMatch || (t.document && 11 !== t.document.nodeType)) return n;
                            } catch (r) {}
                        return e(i, G, null, [t]).length > 0;
                    }),
                    (e.contains = function (t, e) {
                        return (t.ownerDocument || t) !== G && H(t), L(t, e);
                    }),
                    (e.attr = function (t, e) {
                        (t.ownerDocument || t) !== G && H(t);
                        var i = x.attrHandle[e.toLowerCase()],
                            n = i && q.call(x.attrHandle, e.toLowerCase()) ? i(t, e, !I) : void 0;
                        return void 0 !== n ? n : S.attributes || !I ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null;
                    }),
                    (e.error = function (t) {
                        throw new Error("Syntax error, unrecognized expression: " + t);
                    }),
                    (e.uniqueSort = function (t) {
                        var e,
                            i = [],
                            n = 0,
                            r = 0;
                        if (((_ = !S.detectDuplicates), (E = !S.sortStable && t.slice(0)), t.sort(z), _)) {
                            for (; (e = t[r++]); ) e === t[r] && (n = i.push(r));
                            for (; n--; ) t.splice(i[n], 1);
                        }
                        return (E = null), t;
                    }),
                    (w = e.getText = function (t) {
                        var e,
                            i = "",
                            n = 0,
                            r = t.nodeType;
                        if (r) {
                            if (1 === r || 9 === r || 11 === r) {
                                if ("string" == typeof t.textContent) return t.textContent;
                                for (t = t.firstChild; t; t = t.nextSibling) i += w(t);
                            } else if (3 === r || 4 === r) return t.nodeValue;
                        } else for (; (e = t[n++]); ) i += w(e);
                        return i;
                    }),
                    (x = e.selectors = {
                        cacheLength: 50,
                        createPseudo: n,
                        match: ft,
                        attrHandle: {},
                        find: {},
                        relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                        preFilter: {
                            ATTR: function (t) {
                                return (t[1] = t[1].replace(St, xt)), (t[3] = (t[3] || t[4] || t[5] || "").replace(St, xt)), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
                            },
                            CHILD: function (t) {
                                return (
                                    (t[1] = t[1].toLowerCase()),
                                    "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), (t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3]))), (t[5] = +(t[7] + t[8] || "odd" === t[3]))) : t[3] && e.error(t[0]),
                                    t
                                );
                            },
                            PSEUDO: function (t) {
                                var e,
                                    i = !t[6] && t[2];
                                return ft.CHILD.test(t[0])
                                    ? null
                                    : (t[3] ? (t[2] = t[4] || t[5] || "") : i && ht.test(i) && (e = A(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && ((t[0] = t[0].slice(0, e)), (t[2] = i.slice(0, e))), t.slice(0, 3));
                            },
                        },
                        filter: {
                            TAG: function (t) {
                                var e = t.replace(St, xt).toLowerCase();
                                return "*" === t
                                    ? function () {
                                          return !0;
                                      }
                                    : function (t) {
                                          return t.nodeName && t.nodeName.toLowerCase() === e;
                                      };
                            },
                            CLASS: function (t) {
                                var e = j[t + " "];
                                return (
                                    e ||
                                    ((e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) &&
                                        j(t, function (t) {
                                            return e.test(("string" == typeof t.className && t.className) || ("undefined" != typeof t.getAttribute && t.getAttribute("class")) || "");
                                        }))
                                );
                            },
                            ATTR: function (t, i, n) {
                                return function (r) {
                                    var o = e.attr(r, t);
                                    return null == o
                                        ? "!=" === i
                                        : i
                                        ? ((o += ""),
                                          "=" === i
                                              ? o === n
                                              : "!=" === i
                                              ? o !== n
                                              : "^=" === i
                                              ? n && 0 === o.indexOf(n)
                                              : "*=" === i
                                              ? n && o.indexOf(n) > -1
                                              : "$=" === i
                                              ? n && o.slice(-n.length) === n
                                              : "~=" === i
                                              ? (" " + o.replace(at, " ") + " ").indexOf(n) > -1
                                              : "|=" === i
                                              ? o === n || o.slice(0, n.length + 1) === n + "-"
                                              : !1)
                                        : !0;
                                };
                            },
                            CHILD: function (t, e, i, n, r) {
                                var o = "nth" !== t.slice(0, 3),
                                    s = "last" !== t.slice(-4),
                                    a = "of-type" === e;
                                return 1 === n && 0 === r
                                    ? function (t) {
                                          return !!t.parentNode;
                                      }
                                    : function (e, i, l) {
                                          var c,
                                              u,
                                              d,
                                              h,
                                              p,
                                              f,
                                              v = o !== s ? "nextSibling" : "previousSibling",
                                              g = e.parentNode,
                                              m = a && e.nodeName.toLowerCase(),
                                              T = !l && !a;
                                          if (g) {
                                              if (o) {
                                                  for (; v; ) {
                                                      for (d = e; (d = d[v]); ) if (a ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                                                      f = v = "only" === t && !f && "nextSibling";
                                                  }
                                                  return !0;
                                              }
                                              if (((f = [s ? g.firstChild : g.lastChild]), s && T)) {
                                                  for (u = g[R] || (g[R] = {}), c = u[t] || [], p = c[0] === X && c[1], h = c[0] === X && c[2], d = p && g.childNodes[p]; (d = (++p && d && d[v]) || (h = p = 0) || f.pop()); )
                                                      if (1 === d.nodeType && ++h && d === e) {
                                                          u[t] = [X, p, h];
                                                          break;
                                                      }
                                              } else if (T && (c = (e[R] || (e[R] = {}))[t]) && c[0] === X) h = c[1];
                                              else for (; (d = (++p && d && d[v]) || (h = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++h || (T && ((d[R] || (d[R] = {}))[t] = [X, h]), d !== e)); );
                                              return (h -= r), h === n || (h % n === 0 && h / n >= 0);
                                          }
                                      };
                            },
                            PSEUDO: function (t, i) {
                                var r,
                                    o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                                return o[R]
                                    ? o(i)
                                    : o.length > 1
                                    ? ((r = [t, t, "", i]),
                                      x.setFilters.hasOwnProperty(t.toLowerCase())
                                          ? n(function (t, e) {
                                                for (var n, r = o(t, i), s = r.length; s--; ) (n = tt(t, r[s])), (t[n] = !(e[n] = r[s]));
                                            })
                                          : function (t) {
                                                return o(t, 0, r);
                                            })
                                    : o;
                            },
                        },
                        pseudos: {
                            not: n(function (t) {
                                var e = [],
                                    i = [],
                                    r = C(t.replace(lt, "$1"));
                                return r[R]
                                    ? n(function (t, e, i, n) {
                                          for (var o, s = r(t, null, n, []), a = t.length; a--; ) (o = s[a]) && (t[a] = !(e[a] = o));
                                      })
                                    : function (t, n, o) {
                                          return (e[0] = t), r(e, null, o, i), (e[0] = null), !i.pop();
                                      };
                            }),
                            has: n(function (t) {
                                return function (i) {
                                    return e(t, i).length > 0;
                                };
                            }),
                            contains: n(function (t) {
                                return (
                                    (t = t.replace(St, xt)),
                                    function (e) {
                                        return (e.textContent || e.innerText || w(e)).indexOf(t) > -1;
                                    }
                                );
                            }),
                            lang: n(function (t) {
                                return (
                                    pt.test(t || "") || e.error("unsupported lang: " + t),
                                    (t = t.replace(St, xt).toLowerCase()),
                                    function (e) {
                                        var i;
                                        do if ((i = I ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (i = i.toLowerCase()), i === t || 0 === i.indexOf(t + "-");
                                        while ((e = e.parentNode) && 1 === e.nodeType);
                                        return !1;
                                    }
                                );
                            }),
                            target: function (e) {
                                var i = t.location && t.location.hash;
                                return i && i.slice(1) === e.id;
                            },
                            root: function (t) {
                                return t === D;
                            },
                            focus: function (t) {
                                return t === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
                            },
                            enabled: function (t) {
                                return t.disabled === !1;
                            },
                            disabled: function (t) {
                                return t.disabled === !0;
                            },
                            checked: function (t) {
                                var e = t.nodeName.toLowerCase();
                                return ("input" === e && !!t.checked) || ("option" === e && !!t.selected);
                            },
                            selected: function (t) {
                                return t.parentNode && t.parentNode.selectedIndex, t.selected === !0;
                            },
                            empty: function (t) {
                                for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                                return !0;
                            },
                            parent: function (t) {
                                return !x.pseudos.empty(t);
                            },
                            header: function (t) {
                                return gt.test(t.nodeName);
                            },
                            input: function (t) {
                                return vt.test(t.nodeName);
                            },
                            button: function (t) {
                                var e = t.nodeName.toLowerCase();
                                return ("input" === e && "button" === t.type) || "button" === e;
                            },
                            text: function (t) {
                                var e;
                                return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
                            },
                            first: c(function () {
                                return [0];
                            }),
                            last: c(function (t, e) {
                                return [e - 1];
                            }),
                            eq: c(function (t, e, i) {
                                return [0 > i ? i + e : i];
                            }),
                            even: c(function (t, e) {
                                for (var i = 0; e > i; i += 2) t.push(i);
                                return t;
                            }),
                            odd: c(function (t, e) {
                                for (var i = 1; e > i; i += 2) t.push(i);
                                return t;
                            }),
                            lt: c(function (t, e, i) {
                                for (var n = 0 > i ? i + e : i; --n >= 0; ) t.push(n);
                                return t;
                            }),
                            gt: c(function (t, e, i) {
                                for (var n = 0 > i ? i + e : i; ++n < e; ) t.push(n);
                                return t;
                            }),
                        },
                    }),
                    (x.pseudos.nth = x.pseudos.eq);
                for (y in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) x.pseudos[y] = a(y);
                for (y in { submit: !0, reset: !0 }) x.pseudos[y] = l(y);
                return (
                    (d.prototype = x.filters = x.pseudos),
                    (x.setFilters = new d()),
                    (A = e.tokenize = function (t, i) {
                        var n,
                            r,
                            o,
                            s,
                            a,
                            l,
                            c,
                            u = F[t + " "];
                        if (u) return i ? 0 : u.slice(0);
                        for (a = t, l = [], c = x.preFilter; a; ) {
                            (!n || (r = ct.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push((o = []))), (n = !1), (r = ut.exec(a)) && ((n = r.shift()), o.push({ value: n, type: r[0].replace(lt, " ") }), (a = a.slice(n.length)));
                            for (s in x.filter) !(r = ft[s].exec(a)) || (c[s] && !(r = c[s](r))) || ((n = r.shift()), o.push({ value: n, type: s, matches: r }), (a = a.slice(n.length)));
                            if (!n) break;
                        }
                        return i ? a.length : a ? e.error(t) : F(t, l).slice(0);
                    }),
                    (C = e.compile = function (t, e) {
                        var i,
                            n = [],
                            r = [],
                            o = V[t + " "];
                        if (!o) {
                            for (e || (e = A(t)), i = e.length; i--; ) (o = T(e[i])), o[R] ? n.push(o) : r.push(o);
                            (o = V(t, b(r, n))), (o.selector = t);
                        }
                        return o;
                    }),
                    (k = e.select = function (t, e, i, n) {
                        var r,
                            o,
                            s,
                            a,
                            l,
                            c = "function" == typeof t && t,
                            d = !n && A((t = c.selector || t));
                        if (((i = i || []), 1 === d.length)) {
                            if (((o = d[0] = d[0].slice(0)), o.length > 2 && "ID" === (s = o[0]).type && S.getById && 9 === e.nodeType && I && x.relative[o[1].type])) {
                                if (((e = (x.find.ID(s.matches[0].replace(St, xt), e) || [])[0]), !e)) return i;
                                c && (e = e.parentNode), (t = t.slice(o.shift().value.length));
                            }
                            for (r = ft.needsContext.test(t) ? 0 : o.length; r-- && ((s = o[r]), !x.relative[(a = s.type)]); )
                                if ((l = x.find[a]) && (n = l(s.matches[0].replace(St, xt), (bt.test(o[0].type) && u(e.parentNode)) || e))) {
                                    if ((o.splice(r, 1), (t = n.length && h(o)), !t)) return Z.apply(i, n), i;
                                    break;
                                }
                        }
                        return (c || C(t, d))(n, e, !I, i, (bt.test(t) && u(e.parentNode)) || e), i;
                    }),
                    (S.sortStable = R.split("").sort(z).join("") === R),
                    (S.detectDuplicates = !!_),
                    H(),
                    (S.sortDetached = r(function (t) {
                        return 1 & t.compareDocumentPosition(G.createElement("div"));
                    })),
                    r(function (t) {
                        return (t.innerHTML = "<a href='#'></a>"), "#" === t.firstChild.getAttribute("href");
                    }) ||
                        o("type|href|height|width", function (t, e, i) {
                            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
                        }),
                    (S.attributes &&
                        r(function (t) {
                            return (t.innerHTML = "<input/>"), t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
                        })) ||
                        o("value", function (t, e, i) {
                            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue;
                        }),
                    r(function (t) {
                        return null == t.getAttribute("disabled");
                    }) ||
                        o(et, function (t, e, i) {
                            var n;
                            return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null;
                        }),
                    e
                );
            })(i);
            (nt.find = lt), (nt.expr = lt.selectors), (nt.expr[":"] = nt.expr.pseudos), (nt.unique = lt.uniqueSort), (nt.text = lt.getText), (nt.isXMLDoc = lt.isXML), (nt.contains = lt.contains);
            var ct = nt.expr.match.needsContext,
                ut = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                dt = /^.[^:#\[\.,]*$/;
            (nt.filter = function (t, e, i) {
                var n = e[0];
                return (
                    i && (t = ":not(" + t + ")"),
                    1 === e.length && 1 === n.nodeType
                        ? nt.find.matchesSelector(n, t)
                            ? [n]
                            : []
                        : nt.find.matches(
                              t,
                              nt.grep(e, function (t) {
                                  return 1 === t.nodeType;
                              })
                          )
                );
            }),
                nt.fn.extend({
                    find: function (t) {
                        var e,
                            i = this.length,
                            n = [],
                            r = this;
                        if ("string" != typeof t)
                            return this.pushStack(
                                nt(t).filter(function () {
                                    for (e = 0; i > e; e++) if (nt.contains(r[e], this)) return !0;
                                })
                            );
                        for (e = 0; i > e; e++) nt.find(t, r[e], n);
                        return (n = this.pushStack(i > 1 ? nt.unique(n) : n)), (n.selector = this.selector ? this.selector + " " + t : t), n;
                    },
                    filter: function (t) {
                        return this.pushStack(a(this, t || [], !1));
                    },
                    not: function (t) {
                        return this.pushStack(a(this, t || [], !0));
                    },
                    is: function (t) {
                        return !!a(this, "string" == typeof t && ct.test(t) ? nt(t) : t || [], !1).length;
                    },
                });
            var ht,
                pt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                ft = (nt.fn.init = function (t, e) {
                    var i, n;
                    if (!t) return this;
                    if ("string" == typeof t) {
                        if (((i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : pt.exec(t)), !i || (!i[1] && e))) return !e || e.jquery ? (e || ht).find(t) : this.constructor(e).find(t);
                        if (i[1]) {
                            if (((e = e instanceof nt ? e[0] : e), nt.merge(this, nt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : et, !0)), ut.test(i[1]) && nt.isPlainObject(e)))
                                for (i in e) nt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                            return this;
                        }
                        return (n = et.getElementById(i[2])), n && n.parentNode && ((this.length = 1), (this[0] = n)), (this.context = et), (this.selector = t), this;
                    }
                    return t.nodeType
                        ? ((this.context = this[0] = t), (this.length = 1), this)
                        : nt.isFunction(t)
                        ? "undefined" != typeof ht.ready
                            ? ht.ready(t)
                            : t(nt)
                        : (void 0 !== t.selector && ((this.selector = t.selector), (this.context = t.context)), nt.makeArray(t, this));
                });
            (ft.prototype = nt.fn), (ht = nt(et));
            var vt = /^(?:parents|prev(?:Until|All))/,
                gt = { children: !0, contents: !0, next: !0, prev: !0 };
            nt.extend({
                dir: function (t, e, i) {
                    for (var n = [], r = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; )
                        if (1 === t.nodeType) {
                            if (r && nt(t).is(i)) break;
                            n.push(t);
                        }
                    return n;
                },
                sibling: function (t, e) {
                    for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                    return i;
                },
            }),
                nt.fn.extend({
                    has: function (t) {
                        var e = nt(t, this),
                            i = e.length;
                        return this.filter(function () {
                            for (var t = 0; i > t; t++) if (nt.contains(this, e[t])) return !0;
                        });
                    },
                    closest: function (t, e) {
                        for (var i, n = 0, r = this.length, o = [], s = ct.test(t) || "string" != typeof t ? nt(t, e || this.context) : 0; r > n; n++)
                            for (i = this[n]; i && i !== e; i = i.parentNode)
                                if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && nt.find.matchesSelector(i, t))) {
                                    o.push(i);
                                    break;
                                }
                        return this.pushStack(o.length > 1 ? nt.unique(o) : o);
                    },
                    index: function (t) {
                        return t ? ("string" == typeof t ? K.call(nt(t), this[0]) : K.call(this, t.jquery ? t[0] : t)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                    },
                    add: function (t, e) {
                        return this.pushStack(nt.unique(nt.merge(this.get(), nt(t, e))));
                    },
                    addBack: function (t) {
                        return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
                    },
                }),
                nt.each(
                    {
                        parent: function (t) {
                            var e = t.parentNode;
                            return e && 11 !== e.nodeType ? e : null;
                        },
                        parents: function (t) {
                            return nt.dir(t, "parentNode");
                        },
                        parentsUntil: function (t, e, i) {
                            return nt.dir(t, "parentNode", i);
                        },
                        next: function (t) {
                            return l(t, "nextSibling");
                        },
                        prev: function (t) {
                            return l(t, "previousSibling");
                        },
                        nextAll: function (t) {
                            return nt.dir(t, "nextSibling");
                        },
                        prevAll: function (t) {
                            return nt.dir(t, "previousSibling");
                        },
                        nextUntil: function (t, e, i) {
                            return nt.dir(t, "nextSibling", i);
                        },
                        prevUntil: function (t, e, i) {
                            return nt.dir(t, "previousSibling", i);
                        },
                        siblings: function (t) {
                            return nt.sibling((t.parentNode || {}).firstChild, t);
                        },
                        children: function (t) {
                            return nt.sibling(t.firstChild);
                        },
                        contents: function (t) {
                            return t.contentDocument || nt.merge([], t.childNodes);
                        },
                    },
                    function (t, e) {
                        nt.fn[t] = function (i, n) {
                            var r = nt.map(this, e, i);
                            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = nt.filter(n, r)), this.length > 1 && (gt[t] || nt.unique(r), vt.test(t) && r.reverse()), this.pushStack(r);
                        };
                    }
                );
            var mt = /\S+/g,
                Tt = {};
            (nt.Callbacks = function (t) {
                t = "string" == typeof t ? Tt[t] || c(t) : nt.extend({}, t);
                var e,
                    i,
                    n,
                    r,
                    o,
                    s,
                    a = [],
                    l = !t.once && [],
                    u = function (c) {
                        for (e = t.memory && c, i = !0, s = r || 0, r = 0, o = a.length, n = !0; a && o > s; s++)
                            if (a[s].apply(c[0], c[1]) === !1 && t.stopOnFalse) {
                                e = !1;
                                break;
                            }
                        (n = !1), a && (l ? l.length && u(l.shift()) : e ? (a = []) : d.disable());
                    },
                    d = {
                        add: function () {
                            if (a) {
                                var i = a.length;
                                !(function s(e) {
                                    nt.each(e, function (e, i) {
                                        var n = nt.type(i);
                                        "function" === n ? (t.unique && d.has(i)) || a.push(i) : i && i.length && "string" !== n && s(i);
                                    });
                                })(arguments),
                                    n ? (o = a.length) : e && ((r = i), u(e));
                            }
                            return this;
                        },
                        remove: function () {
                            return (
                                a &&
                                    nt.each(arguments, function (t, e) {
                                        for (var i; (i = nt.inArray(e, a, i)) > -1; ) a.splice(i, 1), n && (o >= i && o--, s >= i && s--);
                                    }),
                                this
                            );
                        },
                        has: function (t) {
                            return t ? nt.inArray(t, a) > -1 : !(!a || !a.length);
                        },
                        empty: function () {
                            return (a = []), (o = 0), this;
                        },
                        disable: function () {
                            return (a = l = e = void 0), this;
                        },
                        disabled: function () {
                            return !a;
                        },
                        lock: function () {
                            return (l = void 0), e || d.disable(), this;
                        },
                        locked: function () {
                            return !l;
                        },
                        fireWith: function (t, e) {
                            return !a || (i && !l) || ((e = e || []), (e = [t, e.slice ? e.slice() : e]), n ? l.push(e) : u(e)), this;
                        },
                        fire: function () {
                            return d.fireWith(this, arguments), this;
                        },
                        fired: function () {
                            return !!i;
                        },
                    };
                return d;
            }),
                nt.extend({
                    Deferred: function (t) {
                        var e = [
                                ["resolve", "done", nt.Callbacks("once memory"), "resolved"],
                                ["reject", "fail", nt.Callbacks("once memory"), "rejected"],
                                ["notify", "progress", nt.Callbacks("memory")],
                            ],
                            i = "pending",
                            n = {
                                state: function () {
                                    return i;
                                },
                                always: function () {
                                    return r.done(arguments).fail(arguments), this;
                                },
                                then: function () {
                                    var t = arguments;
                                    return nt
                                        .Deferred(function (i) {
                                            nt.each(e, function (e, o) {
                                                var s = nt.isFunction(t[e]) && t[e];
                                                r[o[1]](function () {
                                                    var t = s && s.apply(this, arguments);
                                                    t && nt.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o[0] + "With"](this === n ? i.promise() : this, s ? [t] : arguments);
                                                });
                                            }),
                                                (t = null);
                                        })
                                        .promise();
                                },
                                promise: function (t) {
                                    return null != t ? nt.extend(t, n) : n;
                                },
                            },
                            r = {};
                        return (
                            (n.pipe = n.then),
                            nt.each(e, function (t, o) {
                                var s = o[2],
                                    a = o[3];
                                (n[o[1]] = s.add),
                                    a &&
                                        s.add(
                                            function () {
                                                i = a;
                                            },
                                            e[1 ^ t][2].disable,
                                            e[2][2].lock
                                        ),
                                    (r[o[0]] = function () {
                                        return r[o[0] + "With"](this === r ? n : this, arguments), this;
                                    }),
                                    (r[o[0] + "With"] = s.fireWith);
                            }),
                            n.promise(r),
                            t && t.call(r, r),
                            r
                        );
                    },
                    when: function (t) {
                        var e,
                            i,
                            n,
                            r = 0,
                            o = U.call(arguments),
                            s = o.length,
                            a = 1 !== s || (t && nt.isFunction(t.promise)) ? s : 0,
                            l = 1 === a ? t : nt.Deferred(),
                            c = function (t, i, n) {
                                return function (r) {
                                    (i[t] = this), (n[t] = arguments.length > 1 ? U.call(arguments) : r), n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n);
                                };
                            };
                        if (s > 1) for (e = new Array(s), i = new Array(s), n = new Array(s); s > r; r++) o[r] && nt.isFunction(o[r].promise) ? o[r].promise().done(c(r, n, o)).fail(l.reject).progress(c(r, i, e)) : --a;
                        return a || l.resolveWith(n, o), l.promise();
                    },
                });
            var bt;
            (nt.fn.ready = function (t) {
                return nt.ready.promise().done(t), this;
            }),
                nt.extend({
                    isReady: !1,
                    readyWait: 1,
                    holdReady: function (t) {
                        t ? nt.readyWait++ : nt.ready(!0);
                    },
                    ready: function (t) {
                        (t === !0 ? --nt.readyWait : nt.isReady) || ((nt.isReady = !0), (t !== !0 && --nt.readyWait > 0) || (bt.resolveWith(et, [nt]), nt.fn.triggerHandler && (nt(et).triggerHandler("ready"), nt(et).off("ready"))));
                    },
                }),
                (nt.ready.promise = function (t) {
                    return bt || ((bt = nt.Deferred()), "complete" === et.readyState ? setTimeout(nt.ready) : (et.addEventListener("DOMContentLoaded", u, !1), i.addEventListener("load", u, !1))), bt.promise(t);
                }),
                nt.ready.promise();
            var yt = (nt.access = function (t, e, i, n, r, o, s) {
                var a = 0,
                    l = t.length,
                    c = null == i;
                if ("object" === nt.type(i)) {
                    r = !0;
                    for (a in i) nt.access(t, e, a, i[a], !0, o, s);
                } else if (
                    void 0 !== n &&
                    ((r = !0),
                    nt.isFunction(n) || (s = !0),
                    c &&
                        (s
                            ? (e.call(t, n), (e = null))
                            : ((c = e),
                              (e = function (t, e, i) {
                                  return c.call(nt(t), i);
                              }))),
                    e)
                )
                    for (; l > a; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
                return r ? t : c ? e.call(t) : l ? e(t[0], i) : o;
            });
            (nt.acceptData = function (t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
            }),
                (d.uid = 1),
                (d.accepts = nt.acceptData),
                (d.prototype = {
                    key: function (t) {
                        if (!d.accepts(t)) return 0;
                        var e = {},
                            i = t[this.expando];
                        if (!i) {
                            i = d.uid++;
                            try {
                                (e[this.expando] = { value: i }), Object.defineProperties(t, e);
                            } catch (n) {
                                (e[this.expando] = i), nt.extend(t, e);
                            }
                        }
                        return this.cache[i] || (this.cache[i] = {}), i;
                    },
                    set: function (t, e, i) {
                        var n,
                            r = this.key(t),
                            o = this.cache[r];
                        if ("string" == typeof e) o[e] = i;
                        else if (nt.isEmptyObject(o)) nt.extend(this.cache[r], e);
                        else for (n in e) o[n] = e[n];
                        return o;
                    },
                    get: function (t, e) {
                        var i = this.cache[this.key(t)];
                        return void 0 === e ? i : i[e];
                    },
                    access: function (t, e, i) {
                        var n;
                        return void 0 === e || (e && "string" == typeof e && void 0 === i) ? ((n = this.get(t, e)), void 0 !== n ? n : this.get(t, nt.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e);
                    },
                    remove: function (t, e) {
                        var i,
                            n,
                            r,
                            o = this.key(t),
                            s = this.cache[o];
                        if (void 0 === e) this.cache[o] = {};
                        else {
                            nt.isArray(e) ? (n = e.concat(e.map(nt.camelCase))) : ((r = nt.camelCase(e)), e in s ? (n = [e, r]) : ((n = r), (n = n in s ? [n] : n.match(mt) || []))), (i = n.length);
                            for (; i--; ) delete s[n[i]];
                        }
                    },
                    hasData: function (t) {
                        return !nt.isEmptyObject(this.cache[t[this.expando]] || {});
                    },
                    discard: function (t) {
                        t[this.expando] && delete this.cache[t[this.expando]];
                    },
                });
            var St = new d(),
                xt = new d(),
                wt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                Pt = /([A-Z])/g;
            nt.extend({
                hasData: function (t) {
                    return xt.hasData(t) || St.hasData(t);
                },
                data: function (t, e, i) {
                    return xt.access(t, e, i);
                },
                removeData: function (t, e) {
                    xt.remove(t, e);
                },
                _data: function (t, e, i) {
                    return St.access(t, e, i);
                },
                _removeData: function (t, e) {
                    St.remove(t, e);
                },
            }),
                nt.fn.extend({
                    data: function (t, e) {
                        var i,
                            n,
                            r,
                            o = this[0],
                            s = o && o.attributes;
                        if (void 0 === t) {
                            if (this.length && ((r = xt.get(o)), 1 === o.nodeType && !St.get(o, "hasDataAttrs"))) {
                                for (i = s.length; i--; ) s[i] && ((n = s[i].name), 0 === n.indexOf("data-") && ((n = nt.camelCase(n.slice(5))), h(o, n, r[n])));
                                St.set(o, "hasDataAttrs", !0);
                            }
                            return r;
                        }
                        return "object" == typeof t
                            ? this.each(function () {
                                  xt.set(this, t);
                              })
                            : yt(
                                  this,
                                  function (e) {
                                      var i,
                                          n = nt.camelCase(t);
                                      if (o && void 0 === e) {
                                          if (((i = xt.get(o, t)), void 0 !== i)) return i;
                                          if (((i = xt.get(o, n)), void 0 !== i)) return i;
                                          if (((i = h(o, n, void 0)), void 0 !== i)) return i;
                                      } else
                                          this.each(function () {
                                              var i = xt.get(this, n);
                                              xt.set(this, n, e), -1 !== t.indexOf("-") && void 0 !== i && xt.set(this, t, e);
                                          });
                                  },
                                  null,
                                  e,
                                  arguments.length > 1,
                                  null,
                                  !0
                              );
                    },
                    removeData: function (t) {
                        return this.each(function () {
                            xt.remove(this, t);
                        });
                    },
                }),
                nt.extend({
                    queue: function (t, e, i) {
                        var n;
                        return t ? ((e = (e || "fx") + "queue"), (n = St.get(t, e)), i && (!n || nt.isArray(i) ? (n = St.access(t, e, nt.makeArray(i))) : n.push(i)), n || []) : void 0;
                    },
                    dequeue: function (t, e) {
                        e = e || "fx";
                        var i = nt.queue(t, e),
                            n = i.length,
                            r = i.shift(),
                            o = nt._queueHooks(t, e),
                            s = function () {
                                nt.dequeue(t, e);
                            };
                        "inprogress" === r && ((r = i.shift()), n--), r && ("fx" === e && i.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !n && o && o.empty.fire();
                    },
                    _queueHooks: function (t, e) {
                        var i = e + "queueHooks";
                        return (
                            St.get(t, i) ||
                            St.access(t, i, {
                                empty: nt.Callbacks("once memory").add(function () {
                                    St.remove(t, [e + "queue", i]);
                                }),
                            })
                        );
                    },
                }),
                nt.fn.extend({
                    queue: function (t, e) {
                        var i = 2;
                        return (
                            "string" != typeof t && ((e = t), (t = "fx"), i--),
                            arguments.length < i
                                ? nt.queue(this[0], t)
                                : void 0 === e
                                ? this
                                : this.each(function () {
                                      var i = nt.queue(this, t, e);
                                      nt._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && nt.dequeue(this, t);
                                  })
                        );
                    },
                    dequeue: function (t) {
                        return this.each(function () {
                            nt.dequeue(this, t);
                        });
                    },
                    clearQueue: function (t) {
                        return this.queue(t || "fx", []);
                    },
                    promise: function (t, e) {
                        var i,
                            n = 1,
                            r = nt.Deferred(),
                            o = this,
                            s = this.length,
                            a = function () {
                                --n || r.resolveWith(o, [o]);
                            };
                        for ("string" != typeof t && ((e = t), (t = void 0)), t = t || "fx"; s--; ) (i = St.get(o[s], t + "queueHooks")), i && i.empty && (n++, i.empty.add(a));
                        return a(), r.promise(e);
                    },
                });
            var At = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                Ct = ["Top", "Right", "Bottom", "Left"],
                kt = function (t, e) {
                    return (t = e || t), "none" === nt.css(t, "display") || !nt.contains(t.ownerDocument, t);
                },
                Mt = /^(?:checkbox|radio)$/i;
            !(function () {
                var t = et.createDocumentFragment(),
                    e = t.appendChild(et.createElement("div")),
                    i = et.createElement("input");
                i.setAttribute("type", "radio"),
                    i.setAttribute("checked", "checked"),
                    i.setAttribute("name", "t"),
                    e.appendChild(i),
                    (tt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
                    (e.innerHTML = "<textarea>x</textarea>"),
                    (tt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
            })();
            var Et = "undefined";
            tt.focusinBubbles = "onfocusin" in i;
            var _t = /^key/,
                Ht = /^(?:mouse|pointer|contextmenu)|click/,
                Gt = /^(?:focusinfocus|focusoutblur)$/,
                Dt = /^([^.]*)(?:\.(.+)|)$/;
            (nt.event = {
                global: {},
                add: function (t, e, i, n, r) {
                    var o,
                        s,
                        a,
                        l,
                        c,
                        u,
                        d,
                        h,
                        p,
                        f,
                        v,
                        g = St.get(t);
                    if (g)
                        for (
                            i.handler && ((o = i), (i = o.handler), (r = o.selector)),
                                i.guid || (i.guid = nt.guid++),
                                (l = g.events) || (l = g.events = {}),
                                (s = g.handle) ||
                                    (s = g.handle = function (e) {
                                        return typeof nt !== Et && nt.event.triggered !== e.type ? nt.event.dispatch.apply(t, arguments) : void 0;
                                    }),
                                e = (e || "").match(mt) || [""],
                                c = e.length;
                            c--;

                        )
                            (a = Dt.exec(e[c]) || []),
                                (p = v = a[1]),
                                (f = (a[2] || "").split(".").sort()),
                                p &&
                                    ((d = nt.event.special[p] || {}),
                                    (p = (r ? d.delegateType : d.bindType) || p),
                                    (d = nt.event.special[p] || {}),
                                    (u = nt.extend({ type: p, origType: v, data: n, handler: i, guid: i.guid, selector: r, needsContext: r && nt.expr.match.needsContext.test(r), namespace: f.join(".") }, o)),
                                    (h = l[p]) || ((h = l[p] = []), (h.delegateCount = 0), (d.setup && d.setup.call(t, n, f, s) !== !1) || (t.addEventListener && t.addEventListener(p, s, !1))),
                                    d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)),
                                    r ? h.splice(h.delegateCount++, 0, u) : h.push(u),
                                    (nt.event.global[p] = !0));
                },
                remove: function (t, e, i, n, r) {
                    var o,
                        s,
                        a,
                        l,
                        c,
                        u,
                        d,
                        h,
                        p,
                        f,
                        v,
                        g = St.hasData(t) && St.get(t);
                    if (g && (l = g.events)) {
                        for (e = (e || "").match(mt) || [""], c = e.length; c--; )
                            if (((a = Dt.exec(e[c]) || []), (p = v = a[1]), (f = (a[2] || "").split(".").sort()), p)) {
                                for (d = nt.event.special[p] || {}, p = (n ? d.delegateType : d.bindType) || p, h = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--; )
                                    (u = h[o]),
                                        (!r && v !== u.origType) ||
                                            (i && i.guid !== u.guid) ||
                                            (a && !a.test(u.namespace)) ||
                                            (n && n !== u.selector && ("**" !== n || !u.selector)) ||
                                            (h.splice(o, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(t, u));
                                s && !h.length && ((d.teardown && d.teardown.call(t, f, g.handle) !== !1) || nt.removeEvent(t, p, g.handle), delete l[p]);
                            } else for (p in l) nt.event.remove(t, p + e[c], i, n, !0);
                        nt.isEmptyObject(l) && (delete g.handle, St.remove(t, "events"));
                    }
                },
                trigger: function (t, e, n, r) {
                    var o,
                        s,
                        a,
                        l,
                        c,
                        u,
                        d,
                        h = [n || et],
                        p = J.call(t, "type") ? t.type : t,
                        f = J.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (
                        ((s = a = n = n || et),
                        3 !== n.nodeType &&
                            8 !== n.nodeType &&
                            !Gt.test(p + nt.event.triggered) &&
                            (p.indexOf(".") >= 0 && ((f = p.split(".")), (p = f.shift()), f.sort()),
                            (c = p.indexOf(":") < 0 && "on" + p),
                            (t = t[nt.expando] ? t : new nt.Event(p, "object" == typeof t && t)),
                            (t.isTrigger = r ? 2 : 3),
                            (t.namespace = f.join(".")),
                            (t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                            (t.result = void 0),
                            t.target || (t.target = n),
                            (e = null == e ? [t] : nt.makeArray(e, [t])),
                            (d = nt.event.special[p] || {}),
                            r || !d.trigger || d.trigger.apply(n, e) !== !1))
                    ) {
                        if (!r && !d.noBubble && !nt.isWindow(n)) {
                            for (l = d.delegateType || p, Gt.test(l + p) || (s = s.parentNode); s; s = s.parentNode) h.push(s), (a = s);
                            a === (n.ownerDocument || et) && h.push(a.defaultView || a.parentWindow || i);
                        }
                        for (o = 0; (s = h[o++]) && !t.isPropagationStopped(); )
                            (t.type = o > 1 ? l : d.bindType || p),
                                (u = (St.get(s, "events") || {})[t.type] && St.get(s, "handle")),
                                u && u.apply(s, e),
                                (u = c && s[c]),
                                u && u.apply && nt.acceptData(s) && ((t.result = u.apply(s, e)), t.result === !1 && t.preventDefault());
                        return (
                            (t.type = p),
                            r ||
                                t.isDefaultPrevented() ||
                                (d._default && d._default.apply(h.pop(), e) !== !1) ||
                                !nt.acceptData(n) ||
                                (c && nt.isFunction(n[p]) && !nt.isWindow(n) && ((a = n[c]), a && (n[c] = null), (nt.event.triggered = p), n[p](), (nt.event.triggered = void 0), a && (n[c] = a))),
                            t.result
                        );
                    }
                },
                dispatch: function (t) {
                    t = nt.event.fix(t);
                    var e,
                        i,
                        n,
                        r,
                        o,
                        s = [],
                        a = U.call(arguments),
                        l = (St.get(this, "events") || {})[t.type] || [],
                        c = nt.event.special[t.type] || {};
                    if (((a[0] = t), (t.delegateTarget = this), !c.preDispatch || c.preDispatch.call(this, t) !== !1)) {
                        for (s = nt.event.handlers.call(this, t, l), e = 0; (r = s[e++]) && !t.isPropagationStopped(); )
                            for (t.currentTarget = r.elem, i = 0; (o = r.handlers[i++]) && !t.isImmediatePropagationStopped(); )
                                (!t.namespace_re || t.namespace_re.test(o.namespace)) &&
                                    ((t.handleObj = o),
                                    (t.data = o.data),
                                    (n = ((nt.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)),
                                    void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, t), t.result;
                    }
                },
                handlers: function (t, e) {
                    var i,
                        n,
                        r,
                        o,
                        s = [],
                        a = e.delegateCount,
                        l = t.target;
                    if (a && l.nodeType && (!t.button || "click" !== t.type))
                        for (; l !== this; l = l.parentNode || this)
                            if (l.disabled !== !0 || "click" !== t.type) {
                                for (n = [], i = 0; a > i; i++) (o = e[i]), (r = o.selector + " "), void 0 === n[r] && (n[r] = o.needsContext ? nt(r, this).index(l) >= 0 : nt.find(r, this, null, [l]).length), n[r] && n.push(o);
                                n.length && s.push({ elem: l, handlers: n });
                            }
                    return a < e.length && s.push({ elem: this, handlers: e.slice(a) }), s;
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function (t, e) {
                        return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t;
                    },
                },
                mouseHooks: {
                    props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function (t, e) {
                        var i,
                            n,
                            r,
                            o = e.button;
                        return (
                            null == t.pageX &&
                                null != e.clientX &&
                                ((i = t.target.ownerDocument || et),
                                (n = i.documentElement),
                                (r = i.body),
                                (t.pageX = e.clientX + ((n && n.scrollLeft) || (r && r.scrollLeft) || 0) - ((n && n.clientLeft) || (r && r.clientLeft) || 0)),
                                (t.pageY = e.clientY + ((n && n.scrollTop) || (r && r.scrollTop) || 0) - ((n && n.clientTop) || (r && r.clientTop) || 0))),
                            t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                            t
                        );
                    },
                },
                fix: function (t) {
                    if (t[nt.expando]) return t;
                    var e,
                        i,
                        n,
                        r = t.type,
                        o = t,
                        s = this.fixHooks[r];
                    for (s || (this.fixHooks[r] = s = Ht.test(r) ? this.mouseHooks : _t.test(r) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, t = new nt.Event(o), e = n.length; e--; )
                        (i = n[e]), (t[i] = o[i]);
                    return t.target || (t.target = et), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, o) : t;
                },
                special: {
                    load: { noBubble: !0 },
                    focus: {
                        trigger: function () {
                            return this !== v() && this.focus ? (this.focus(), !1) : void 0;
                        },
                        delegateType: "focusin",
                    },
                    blur: {
                        trigger: function () {
                            return this === v() && this.blur ? (this.blur(), !1) : void 0;
                        },
                        delegateType: "focusout",
                    },
                    click: {
                        trigger: function () {
                            return "checkbox" === this.type && this.click && nt.nodeName(this, "input") ? (this.click(), !1) : void 0;
                        },
                        _default: function (t) {
                            return nt.nodeName(t.target, "a");
                        },
                    },
                    beforeunload: {
                        postDispatch: function (t) {
                            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
                        },
                    },
                },
                simulate: function (t, e, i, n) {
                    var r = nt.extend(new nt.Event(), i, { type: t, isSimulated: !0, originalEvent: {} });
                    n ? nt.event.trigger(r, null, e) : nt.event.dispatch.call(e, r), r.isDefaultPrevented() && i.preventDefault();
                },
            }),
                (nt.removeEvent = function (t, e, i) {
                    t.removeEventListener && t.removeEventListener(e, i, !1);
                }),
                (nt.Event = function (t, e) {
                    return this instanceof nt.Event
                        ? (t && t.type ? ((this.originalEvent = t), (this.type = t.type), (this.isDefaultPrevented = t.defaultPrevented || (void 0 === t.defaultPrevented && t.returnValue === !1) ? p : f)) : (this.type = t),
                          e && nt.extend(this, e),
                          (this.timeStamp = (t && t.timeStamp) || nt.now()),
                          void (this[nt.expando] = !0))
                        : new nt.Event(t, e);
                }),
                (nt.Event.prototype = {
                    isDefaultPrevented: f,
                    isPropagationStopped: f,
                    isImmediatePropagationStopped: f,
                    preventDefault: function () {
                        var t = this.originalEvent;
                        (this.isDefaultPrevented = p), t && t.preventDefault && t.preventDefault();
                    },
                    stopPropagation: function () {
                        var t = this.originalEvent;
                        (this.isPropagationStopped = p), t && t.stopPropagation && t.stopPropagation();
                    },
                    stopImmediatePropagation: function () {
                        var t = this.originalEvent;
                        (this.isImmediatePropagationStopped = p), t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation();
                    },
                }),
                nt.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (t, e) {
                    nt.event.special[t] = {
                        delegateType: e,
                        bindType: e,
                        handle: function (t) {
                            var i,
                                n = this,
                                r = t.relatedTarget,
                                o = t.handleObj;
                            return (!r || (r !== n && !nt.contains(n, r))) && ((t.type = o.origType), (i = o.handler.apply(this, arguments)), (t.type = e)), i;
                        },
                    };
                }),
                tt.focusinBubbles ||
                    nt.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
                        var i = function (t) {
                            nt.event.simulate(e, t.target, nt.event.fix(t), !0);
                        };
                        nt.event.special[e] = {
                            setup: function () {
                                var n = this.ownerDocument || this,
                                    r = St.access(n, e);
                                r || n.addEventListener(t, i, !0), St.access(n, e, (r || 0) + 1);
                            },
                            teardown: function () {
                                var n = this.ownerDocument || this,
                                    r = St.access(n, e) - 1;
                                r ? St.access(n, e, r) : (n.removeEventListener(t, i, !0), St.remove(n, e));
                            },
                        };
                    }),
                nt.fn.extend({
                    on: function (t, e, i, n, r) {
                        var o, s;
                        if ("object" == typeof t) {
                            "string" != typeof e && ((i = i || e), (e = void 0));
                            for (s in t) this.on(s, e, i, t[s], r);
                            return this;
                        }
                        if ((null == i && null == n ? ((n = e), (i = e = void 0)) : null == n && ("string" == typeof e ? ((n = i), (i = void 0)) : ((n = i), (i = e), (e = void 0))), n === !1)) n = f;
                        else if (!n) return this;
                        return (
                            1 === r &&
                                ((o = n),
                                (n = function (t) {
                                    return nt().off(t), o.apply(this, arguments);
                                }),
                                (n.guid = o.guid || (o.guid = nt.guid++))),
                            this.each(function () {
                                nt.event.add(this, t, n, i, e);
                            })
                        );
                    },
                    one: function (t, e, i, n) {
                        return this.on(t, e, i, n, 1);
                    },
                    off: function (t, e, i) {
                        var n, r;
                        if (t && t.preventDefault && t.handleObj) return (n = t.handleObj), nt(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                        if ("object" == typeof t) {
                            for (r in t) this.off(r, e, t[r]);
                            return this;
                        }
                        return (
                            (e === !1 || "function" == typeof e) && ((i = e), (e = void 0)),
                            i === !1 && (i = f),
                            this.each(function () {
                                nt.event.remove(this, t, i, e);
                            })
                        );
                    },
                    trigger: function (t, e) {
                        return this.each(function () {
                            nt.event.trigger(t, e, this);
                        });
                    },
                    triggerHandler: function (t, e) {
                        var i = this[0];
                        return i ? nt.event.trigger(t, e, i, !0) : void 0;
                    },
                });
            var It = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                Bt = /<([\w:]+)/,
                Nt = /<|&#?\w+;/,
                Ot = /<(?:script|style|link)/i,
                Lt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Rt = /^$|\/(?:java|ecma)script/i,
                Wt = /^true\/(.*)/,
                Xt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                $t = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""],
                };
            ($t.optgroup = $t.option),
                ($t.tbody = $t.tfoot = $t.colgroup = $t.caption = $t.thead),
                ($t.th = $t.td),
                nt.extend({
                    clone: function (t, e, i) {
                        var n,
                            r,
                            o,
                            s,
                            a = t.cloneNode(!0),
                            l = nt.contains(t.ownerDocument, t);
                        if (!(tt.noCloneChecked || (1 !== t.nodeType && 11 !== t.nodeType) || nt.isXMLDoc(t))) for (s = S(a), o = S(t), n = 0, r = o.length; r > n; n++) x(o[n], s[n]);
                        if (e)
                            if (i) for (o = o || S(t), s = s || S(a), n = 0, r = o.length; r > n; n++) y(o[n], s[n]);
                            else y(t, a);
                        return (s = S(a, "script")), s.length > 0 && b(s, !l && S(t, "script")), a;
                    },
                    buildFragment: function (t, e, i, n) {
                        for (var r, o, s, a, l, c, u = e.createDocumentFragment(), d = [], h = 0, p = t.length; p > h; h++)
                            if (((r = t[h]), r || 0 === r))
                                if ("object" === nt.type(r)) nt.merge(d, r.nodeType ? [r] : r);
                                else if (Nt.test(r)) {
                                    for (o = o || u.appendChild(e.createElement("div")), s = (Bt.exec(r) || ["", ""])[1].toLowerCase(), a = $t[s] || $t._default, o.innerHTML = a[1] + r.replace(It, "<$1></$2>") + a[2], c = a[0]; c--; )
                                        o = o.lastChild;
                                    nt.merge(d, o.childNodes), (o = u.firstChild), (o.textContent = "");
                                } else d.push(e.createTextNode(r));
                        for (u.textContent = "", h = 0; (r = d[h++]); )
                            if ((!n || -1 === nt.inArray(r, n)) && ((l = nt.contains(r.ownerDocument, r)), (o = S(u.appendChild(r), "script")), l && b(o), i)) for (c = 0; (r = o[c++]); ) Rt.test(r.type || "") && i.push(r);
                        return u;
                    },
                    cleanData: function (t) {
                        for (var e, i, n, r, o = nt.event.special, s = 0; void 0 !== (i = t[s]); s++) {
                            if (nt.acceptData(i) && ((r = i[St.expando]), r && (e = St.cache[r]))) {
                                if (e.events) for (n in e.events) o[n] ? nt.event.remove(i, n) : nt.removeEvent(i, n, e.handle);
                                St.cache[r] && delete St.cache[r];
                            }
                            delete xt.cache[i[xt.expando]];
                        }
                    },
                }),
                nt.fn.extend({
                    text: function (t) {
                        return yt(
                            this,
                            function (t) {
                                return void 0 === t
                                    ? nt.text(this)
                                    : this.empty().each(function () {
                                          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t);
                                      });
                            },
                            null,
                            t,
                            arguments.length
                        );
                    },
                    append: function () {
                        return this.domManip(arguments, function (t) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var e = g(this, t);
                                e.appendChild(t);
                            }
                        });
                    },
                    prepend: function () {
                        return this.domManip(arguments, function (t) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var e = g(this, t);
                                e.insertBefore(t, e.firstChild);
                            }
                        });
                    },
                    before: function () {
                        return this.domManip(arguments, function (t) {
                            this.parentNode && this.parentNode.insertBefore(t, this);
                        });
                    },
                    after: function () {
                        return this.domManip(arguments, function (t) {
                            this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
                        });
                    },
                    remove: function (t, e) {
                        for (var i, n = t ? nt.filter(t, this) : this, r = 0; null != (i = n[r]); r++)
                            e || 1 !== i.nodeType || nt.cleanData(S(i)), i.parentNode && (e && nt.contains(i.ownerDocument, i) && b(S(i, "script")), i.parentNode.removeChild(i));
                        return this;
                    },
                    empty: function () {
                        for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (nt.cleanData(S(t, !1)), (t.textContent = ""));
                        return this;
                    },
                    clone: function (t, e) {
                        return (
                            (t = null == t ? !1 : t),
                            (e = null == e ? t : e),
                            this.map(function () {
                                return nt.clone(this, t, e);
                            })
                        );
                    },
                    html: function (t) {
                        return yt(
                            this,
                            function (t) {
                                var e = this[0] || {},
                                    i = 0,
                                    n = this.length;
                                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                                if ("string" == typeof t && !Ot.test(t) && !$t[(Bt.exec(t) || ["", ""])[1].toLowerCase()]) {
                                    t = t.replace(It, "<$1></$2>");
                                    try {
                                        for (; n > i; i++) (e = this[i] || {}), 1 === e.nodeType && (nt.cleanData(S(e, !1)), (e.innerHTML = t));
                                        e = 0;
                                    } catch (r) {}
                                }
                                e && this.empty().append(t);
                            },
                            null,
                            t,
                            arguments.length
                        );
                    },
                    replaceWith: function () {
                        var t = arguments[0];
                        return (
                            this.domManip(arguments, function (e) {
                                (t = this.parentNode), nt.cleanData(S(this)), t && t.replaceChild(e, this);
                            }),
                            t && (t.length || t.nodeType) ? this : this.remove()
                        );
                    },
                    detach: function (t) {
                        return this.remove(t, !0);
                    },
                    domManip: function (t, e) {
                        t = q.apply([], t);
                        var i,
                            n,
                            r,
                            o,
                            s,
                            a,
                            l = 0,
                            c = this.length,
                            u = this,
                            d = c - 1,
                            h = t[0],
                            p = nt.isFunction(h);
                        if (p || (c > 1 && "string" == typeof h && !tt.checkClone && Lt.test(h)))
                            return this.each(function (i) {
                                var n = u.eq(i);
                                p && (t[0] = h.call(this, i, n.html())), n.domManip(t, e);
                            });
                        if (c && ((i = nt.buildFragment(t, this[0].ownerDocument, !1, this)), (n = i.firstChild), 1 === i.childNodes.length && (i = n), n)) {
                            for (r = nt.map(S(i, "script"), m), o = r.length; c > l; l++) (s = i), l !== d && ((s = nt.clone(s, !0, !0)), o && nt.merge(r, S(s, "script"))), e.call(this[l], s, l);
                            if (o)
                                for (a = r[r.length - 1].ownerDocument, nt.map(r, T), l = 0; o > l; l++)
                                    (s = r[l]), Rt.test(s.type || "") && !St.access(s, "globalEval") && nt.contains(a, s) && (s.src ? nt._evalUrl && nt._evalUrl(s.src) : nt.globalEval(s.textContent.replace(Xt, "")));
                        }
                        return this;
                    },
                }),
                nt.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (t, e) {
                    nt.fn[t] = function (t) {
                        for (var i, n = [], r = nt(t), o = r.length - 1, s = 0; o >= s; s++) (i = s === o ? this : this.clone(!0)), nt(r[s])[e](i), Y.apply(n, i.get());
                        return this.pushStack(n);
                    };
                });
            var jt,
                Ft = {},
                Vt = /^margin/,
                zt = new RegExp("^(" + At + ")(?!px)[a-z%]+$", "i"),
                Ut = function (t) {
                    return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : i.getComputedStyle(t, null);
                };
            !(function () {
                function t() {
                    (s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
                        (s.innerHTML = ""),
                        r.appendChild(o);
                    var t = i.getComputedStyle(s, null);
                    (e = "1%" !== t.top), (n = "4px" === t.width), r.removeChild(o);
                }
                var e,
                    n,
                    r = et.documentElement,
                    o = et.createElement("div"),
                    s = et.createElement("div");
                s.style &&
                    ((s.style.backgroundClip = "content-box"),
                    (s.cloneNode(!0).style.backgroundClip = ""),
                    (tt.clearCloneStyle = "content-box" === s.style.backgroundClip),
                    (o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute"),
                    o.appendChild(s),
                    i.getComputedStyle &&
                        nt.extend(tt, {
                            pixelPosition: function () {
                                return t(), e;
                            },
                            boxSizingReliable: function () {
                                return null == n && t(), n;
                            },
                            reliableMarginRight: function () {
                                var t,
                                    e = s.appendChild(et.createElement("div"));
                                return (
                                    (e.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                                    (e.style.marginRight = e.style.width = "0"),
                                    (s.style.width = "1px"),
                                    r.appendChild(o),
                                    (t = !parseFloat(i.getComputedStyle(e, null).marginRight)),
                                    r.removeChild(o),
                                    s.removeChild(e),
                                    t
                                );
                            },
                        }));
            })(),
                (nt.swap = function (t, e, i, n) {
                    var r,
                        o,
                        s = {};
                    for (o in e) (s[o] = t.style[o]), (t.style[o] = e[o]);
                    r = i.apply(t, n || []);
                    for (o in e) t.style[o] = s[o];
                    return r;
                });
            var qt = /^(none|table(?!-c[ea]).+)/,
                Yt = new RegExp("^(" + At + ")(.*)$", "i"),
                Kt = new RegExp("^([+-])=(" + At + ")", "i"),
                Qt = { position: "absolute", visibility: "hidden", display: "block" },
                Zt = { letterSpacing: "0", fontWeight: "400" },
                Jt = ["Webkit", "O", "Moz", "ms"];
            nt.extend({
                cssHooks: {
                    opacity: {
                        get: function (t, e) {
                            if (e) {
                                var i = A(t, "opacity");
                                return "" === i ? "1" : i;
                            }
                        },
                    },
                },
                cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
                cssProps: { float: "cssFloat" },
                style: function (t, e, i, n) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var r,
                            o,
                            s,
                            a = nt.camelCase(e),
                            l = t.style;
                        return (
                            (e = nt.cssProps[a] || (nt.cssProps[a] = k(l, a))),
                            (s = nt.cssHooks[e] || nt.cssHooks[a]),
                            void 0 === i
                                ? s && "get" in s && void 0 !== (r = s.get(t, !1, n))
                                    ? r
                                    : l[e]
                                : ((o = typeof i),
                                  "string" === o && (r = Kt.exec(i)) && ((i = (r[1] + 1) * r[2] + parseFloat(nt.css(t, e))), (o = "number")),
                                  null != i &&
                                      i === i &&
                                      ("number" !== o || nt.cssNumber[a] || (i += "px"),
                                      tt.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"),
                                      (s && "set" in s && void 0 === (i = s.set(t, i, n))) || (l[e] = i)),
                                  void 0)
                        );
                    }
                },
                css: function (t, e, i, n) {
                    var r,
                        o,
                        s,
                        a = nt.camelCase(e);
                    return (
                        (e = nt.cssProps[a] || (nt.cssProps[a] = k(t.style, a))),
                        (s = nt.cssHooks[e] || nt.cssHooks[a]),
                        s && "get" in s && (r = s.get(t, !0, i)),
                        void 0 === r && (r = A(t, e, n)),
                        "normal" === r && e in Zt && (r = Zt[e]),
                        "" === i || i ? ((o = parseFloat(r)), i === !0 || nt.isNumeric(o) ? o || 0 : r) : r
                    );
                },
            }),
                nt.each(["height", "width"], function (t, e) {
                    nt.cssHooks[e] = {
                        get: function (t, i, n) {
                            return i
                                ? qt.test(nt.css(t, "display")) && 0 === t.offsetWidth
                                    ? nt.swap(t, Qt, function () {
                                          return _(t, e, n);
                                      })
                                    : _(t, e, n)
                                : void 0;
                        },
                        set: function (t, i, n) {
                            var r = n && Ut(t);
                            return M(t, i, n ? E(t, e, n, "border-box" === nt.css(t, "boxSizing", !1, r), r) : 0);
                        },
                    };
                }),
                (nt.cssHooks.marginRight = C(tt.reliableMarginRight, function (t, e) {
                    return e ? nt.swap(t, { display: "inline-block" }, A, [t, "marginRight"]) : void 0;
                })),
                nt.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
                    (nt.cssHooks[t + e] = {
                        expand: function (i) {
                            for (var n = 0, r = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) r[t + Ct[n] + e] = o[n] || o[n - 2] || o[0];
                            return r;
                        },
                    }),
                        Vt.test(t) || (nt.cssHooks[t + e].set = M);
                }),
                nt.fn.extend({
                    css: function (t, e) {
                        return yt(
                            this,
                            function (t, e, i) {
                                var n,
                                    r,
                                    o = {},
                                    s = 0;
                                if (nt.isArray(e)) {
                                    for (n = Ut(t), r = e.length; r > s; s++) o[e[s]] = nt.css(t, e[s], !1, n);
                                    return o;
                                }
                                return void 0 !== i ? nt.style(t, e, i) : nt.css(t, e);
                            },
                            t,
                            e,
                            arguments.length > 1
                        );
                    },
                    show: function () {
                        return H(this, !0);
                    },
                    hide: function () {
                        return H(this);
                    },
                    toggle: function (t) {
                        return "boolean" == typeof t
                            ? t
                                ? this.show()
                                : this.hide()
                            : this.each(function () {
                                  kt(this) ? nt(this).show() : nt(this).hide();
                              });
                    },
                }),
                (nt.Tween = G),
                (G.prototype = {
                    constructor: G,
                    init: function (t, e, i, n, r, o) {
                        (this.elem = t), (this.prop = i), (this.easing = r || "swing"), (this.options = e), (this.start = this.now = this.cur()), (this.end = n), (this.unit = o || (nt.cssNumber[i] ? "" : "px"));
                    },
                    cur: function () {
                        var t = G.propHooks[this.prop];
                        return t && t.get ? t.get(this) : G.propHooks._default.get(this);
                    },
                    run: function (t) {
                        var e,
                            i = G.propHooks[this.prop];
                        return (
                            (this.pos = e = this.options.duration ? nt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t),
                            (this.now = (this.end - this.start) * e + this.start),
                            this.options.step && this.options.step.call(this.elem, this.now, this),
                            i && i.set ? i.set(this) : G.propHooks._default.set(this),
                            this
                        );
                    },
                }),
                (G.prototype.init.prototype = G.prototype),
                (G.propHooks = {
                    _default: {
                        get: function (t) {
                            var e;
                            return null == t.elem[t.prop] || (t.elem.style && null != t.elem.style[t.prop]) ? ((e = nt.css(t.elem, t.prop, "")), e && "auto" !== e ? e : 0) : t.elem[t.prop];
                        },
                        set: function (t) {
                            nt.fx.step[t.prop] ? nt.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[nt.cssProps[t.prop]] || nt.cssHooks[t.prop]) ? nt.style(t.elem, t.prop, t.now + t.unit) : (t.elem[t.prop] = t.now);
                        },
                    },
                }),
                (G.propHooks.scrollTop = G.propHooks.scrollLeft = {
                    set: function (t) {
                        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
                    },
                }),
                (nt.easing = {
                    linear: function (t) {
                        return t;
                    },
                    swing: function (t) {
                        return 0.5 - Math.cos(t * Math.PI) / 2;
                    },
                }),
                (nt.fx = G.prototype.init),
                (nt.fx.step = {});
            var te,
                ee,
                ie = /^(?:toggle|show|hide)$/,
                ne = new RegExp("^(?:([+-])=|)(" + At + ")([a-z%]*)$", "i"),
                re = /queueHooks$/,
                oe = [N],
                se = {
                    "*": [
                        function (t, e) {
                            var i = this.createTween(t, e),
                                n = i.cur(),
                                r = ne.exec(e),
                                o = (r && r[3]) || (nt.cssNumber[t] ? "" : "px"),
                                s = (nt.cssNumber[t] || ("px" !== o && +n)) && ne.exec(nt.css(i.elem, t)),
                                a = 1,
                                l = 20;

                            if (s && s[3] !== o) {
                                (o = o || s[3]), (r = r || []), (s = +n || 1);
                                do (a = a || ".5"), (s /= a), nt.style(i.elem, t, s + o);
                                while (a !== (a = i.cur() / n) && 1 !== a && --l);
                            }
                            return r && ((s = i.start = +s || +n || 0), (i.unit = o), (i.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2])), i;
                        },
                    ],
                };
            (nt.Animation = nt.extend(L, {
                tweener: function (t, e) {
                    nt.isFunction(t) ? ((e = t), (t = ["*"])) : (t = t.split(" "));
                    for (var i, n = 0, r = t.length; r > n; n++) (i = t[n]), (se[i] = se[i] || []), se[i].unshift(e);
                },
                prefilter: function (t, e) {
                    e ? oe.unshift(t) : oe.push(t);
                },
            })),
                (nt.speed = function (t, e, i) {
                    var n = t && "object" == typeof t ? nt.extend({}, t) : { complete: i || (!i && e) || (nt.isFunction(t) && t), duration: t, easing: (i && e) || (e && !nt.isFunction(e) && e) };
                    return (
                        (n.duration = nt.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in nt.fx.speeds ? nt.fx.speeds[n.duration] : nt.fx.speeds._default),
                        (null == n.queue || n.queue === !0) && (n.queue = "fx"),
                        (n.old = n.complete),
                        (n.complete = function () {
                            nt.isFunction(n.old) && n.old.call(this), n.queue && nt.dequeue(this, n.queue);
                        }),
                        n
                    );
                }),
                nt.fn.extend({
                    fadeTo: function (t, e, i, n) {
                        return this.filter(kt).css("opacity", 0).show().end().animate({ opacity: e }, t, i, n);
                    },
                    animate: function (t, e, i, n) {
                        var r = nt.isEmptyObject(t),
                            o = nt.speed(e, i, n),
                            s = function () {
                                var e = L(this, nt.extend({}, t), o);
                                (r || St.get(this, "finish")) && e.stop(!0);
                            };
                        return (s.finish = s), r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s);
                    },
                    stop: function (t, e, i) {
                        var n = function (t) {
                            var e = t.stop;
                            delete t.stop, e(i);
                        };
                        return (
                            "string" != typeof t && ((i = e), (e = t), (t = void 0)),
                            e && t !== !1 && this.queue(t || "fx", []),
                            this.each(function () {
                                var e = !0,
                                    r = null != t && t + "queueHooks",
                                    o = nt.timers,
                                    s = St.get(this);
                                if (r) s[r] && s[r].stop && n(s[r]);
                                else for (r in s) s[r] && s[r].stop && re.test(r) && n(s[r]);
                                for (r = o.length; r--; ) o[r].elem !== this || (null != t && o[r].queue !== t) || (o[r].anim.stop(i), (e = !1), o.splice(r, 1));
                                (e || !i) && nt.dequeue(this, t);
                            })
                        );
                    },
                    finish: function (t) {
                        return (
                            t !== !1 && (t = t || "fx"),
                            this.each(function () {
                                var e,
                                    i = St.get(this),
                                    n = i[t + "queue"],
                                    r = i[t + "queueHooks"],
                                    o = nt.timers,
                                    s = n ? n.length : 0;
                                for (i.finish = !0, nt.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--; ) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                                for (e = 0; s > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                                delete i.finish;
                            })
                        );
                    },
                }),
                nt.each(["toggle", "show", "hide"], function (t, e) {
                    var i = nt.fn[e];
                    nt.fn[e] = function (t, n, r) {
                        return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(I(e, !0), t, n, r);
                    };
                }),
                nt.each({ slideDown: I("show"), slideUp: I("hide"), slideToggle: I("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (t, e) {
                    nt.fn[t] = function (t, i, n) {
                        return this.animate(e, t, i, n);
                    };
                }),
                (nt.timers = []),
                (nt.fx.tick = function () {
                    var t,
                        e = 0,
                        i = nt.timers;
                    for (te = nt.now(); e < i.length; e++) (t = i[e]), t() || i[e] !== t || i.splice(e--, 1);
                    i.length || nt.fx.stop(), (te = void 0);
                }),
                (nt.fx.timer = function (t) {
                    nt.timers.push(t), t() ? nt.fx.start() : nt.timers.pop();
                }),
                (nt.fx.interval = 13),
                (nt.fx.start = function () {
                    ee || (ee = setInterval(nt.fx.tick, nt.fx.interval));
                }),
                (nt.fx.stop = function () {
                    clearInterval(ee), (ee = null);
                }),
                (nt.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                (nt.fn.delay = function (t, e) {
                    return (
                        (t = nt.fx ? nt.fx.speeds[t] || t : t),
                        (e = e || "fx"),
                        this.queue(e, function (e, i) {
                            var n = setTimeout(e, t);
                            i.stop = function () {
                                clearTimeout(n);
                            };
                        })
                    );
                }),
                (function () {
                    var t = et.createElement("input"),
                        e = et.createElement("select"),
                        i = e.appendChild(et.createElement("option"));
                    (t.type = "checkbox"),
                        (tt.checkOn = "" !== t.value),
                        (tt.optSelected = i.selected),
                        (e.disabled = !0),
                        (tt.optDisabled = !i.disabled),
                        (t = et.createElement("input")),
                        (t.value = "t"),
                        (t.type = "radio"),
                        (tt.radioValue = "t" === t.value);
                })();
            var ae,
                le,
                ce = nt.expr.attrHandle;
            nt.fn.extend({
                attr: function (t, e) {
                    return yt(this, nt.attr, t, e, arguments.length > 1);
                },
                removeAttr: function (t) {
                    return this.each(function () {
                        nt.removeAttr(this, t);
                    });
                },
            }),
                nt.extend({
                    attr: function (t, e, i) {
                        var n,
                            r,
                            o = t.nodeType;
                        if (t && 3 !== o && 8 !== o && 2 !== o)
                            return typeof t.getAttribute === Et
                                ? nt.prop(t, e, i)
                                : ((1 === o && nt.isXMLDoc(t)) || ((e = e.toLowerCase()), (n = nt.attrHooks[e] || (nt.expr.match.bool.test(e) ? le : ae))),
                                  void 0 === i
                                      ? n && "get" in n && null !== (r = n.get(t, e))
                                          ? r
                                          : ((r = nt.find.attr(t, e)), null == r ? void 0 : r)
                                      : null !== i
                                      ? n && "set" in n && void 0 !== (r = n.set(t, i, e))
                                          ? r
                                          : (t.setAttribute(e, i + ""), i)
                                      : void nt.removeAttr(t, e));
                    },
                    removeAttr: function (t, e) {
                        var i,
                            n,
                            r = 0,
                            o = e && e.match(mt);
                        if (o && 1 === t.nodeType) for (; (i = o[r++]); ) (n = nt.propFix[i] || i), nt.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i);
                    },
                    attrHooks: {
                        type: {
                            set: function (t, e) {
                                if (!tt.radioValue && "radio" === e && nt.nodeName(t, "input")) {
                                    var i = t.value;
                                    return t.setAttribute("type", e), i && (t.value = i), e;
                                }
                            },
                        },
                    },
                }),
                (le = {
                    set: function (t, e, i) {
                        return e === !1 ? nt.removeAttr(t, i) : t.setAttribute(i, i), i;
                    },
                }),
                nt.each(nt.expr.match.bool.source.match(/\w+/g), function (t, e) {
                    var i = ce[e] || nt.find.attr;
                    ce[e] = function (t, e, n) {
                        var r, o;
                        return n || ((o = ce[e]), (ce[e] = r), (r = null != i(t, e, n) ? e.toLowerCase() : null), (ce[e] = o)), r;
                    };
                });
            var ue = /^(?:input|select|textarea|button)$/i;
            nt.fn.extend({
                prop: function (t, e) {
                    return yt(this, nt.prop, t, e, arguments.length > 1);
                },
                removeProp: function (t) {
                    return this.each(function () {
                        delete this[nt.propFix[t] || t];
                    });
                },
            }),
                nt.extend({
                    propFix: { for: "htmlFor", class: "className" },
                    prop: function (t, e, i) {
                        var n,
                            r,
                            o,
                            s = t.nodeType;
                        if (t && 3 !== s && 8 !== s && 2 !== s)
                            return (
                                (o = 1 !== s || !nt.isXMLDoc(t)),
                                o && ((e = nt.propFix[e] || e), (r = nt.propHooks[e])),
                                void 0 !== i ? (r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : (t[e] = i)) : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
                            );
                    },
                    propHooks: {
                        tabIndex: {
                            get: function (t) {
                                return t.hasAttribute("tabindex") || ue.test(t.nodeName) || t.href ? t.tabIndex : -1;
                            },
                        },
                    },
                }),
                tt.optSelected ||
                    (nt.propHooks.selected = {
                        get: function (t) {
                            var e = t.parentNode;
                            return e && e.parentNode && e.parentNode.selectedIndex, null;
                        },
                    }),
                nt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                    nt.propFix[this.toLowerCase()] = this;
                });
            var de = /[\t\r\n\f]/g;
            nt.fn.extend({
                addClass: function (t) {
                    var e,
                        i,
                        n,
                        r,
                        o,
                        s,
                        a = "string" == typeof t && t,
                        l = 0,
                        c = this.length;
                    if (nt.isFunction(t))
                        return this.each(function (e) {
                            nt(this).addClass(t.call(this, e, this.className));
                        });
                    if (a)
                        for (e = (t || "").match(mt) || []; c > l; l++)
                            if (((i = this[l]), (n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(de, " ") : " ")))) {
                                for (o = 0; (r = e[o++]); ) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                                (s = nt.trim(n)), i.className !== s && (i.className = s);
                            }
                    return this;
                },
                removeClass: function (t) {
                    var e,
                        i,
                        n,
                        r,
                        o,
                        s,
                        a = 0 === arguments.length || ("string" == typeof t && t),
                        l = 0,
                        c = this.length;
                    if (nt.isFunction(t))
                        return this.each(function (e) {
                            nt(this).removeClass(t.call(this, e, this.className));
                        });
                    if (a)
                        for (e = (t || "").match(mt) || []; c > l; l++)
                            if (((i = this[l]), (n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(de, " ") : "")))) {
                                for (o = 0; (r = e[o++]); ) for (; n.indexOf(" " + r + " ") >= 0; ) n = n.replace(" " + r + " ", " ");
                                (s = t ? nt.trim(n) : ""), i.className !== s && (i.className = s);
                            }
                    return this;
                },
                toggleClass: function (t, e) {
                    var i = typeof t;
                    return "boolean" == typeof e && "string" === i
                        ? e
                            ? this.addClass(t)
                            : this.removeClass(t)
                        : this.each(
                              nt.isFunction(t)
                                  ? function (i) {
                                        nt(this).toggleClass(t.call(this, i, this.className, e), e);
                                    }
                                  : function () {
                                        if ("string" === i) for (var e, n = 0, r = nt(this), o = t.match(mt) || []; (e = o[n++]); ) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                                        else (i === Et || "boolean" === i) && (this.className && St.set(this, "__className__", this.className), (this.className = this.className || t === !1 ? "" : St.get(this, "__className__") || ""));
                                    }
                          );
                },
                hasClass: function (t) {
                    for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++) if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(de, " ").indexOf(e) >= 0) return !0;
                    return !1;
                },
            });
            var he = /\r/g;
            nt.fn.extend({
                val: function (t) {
                    var e,
                        i,
                        n,
                        r = this[0];
                    {
                        if (arguments.length)
                            return (
                                (n = nt.isFunction(t)),
                                this.each(function (i) {
                                    var r;
                                    1 === this.nodeType &&
                                        ((r = n ? t.call(this, i, nt(this).val()) : t),
                                        null == r
                                            ? (r = "")
                                            : "number" == typeof r
                                            ? (r += "")
                                            : nt.isArray(r) &&
                                              (r = nt.map(r, function (t) {
                                                  return null == t ? "" : t + "";
                                              })),
                                        (e = nt.valHooks[this.type] || nt.valHooks[this.nodeName.toLowerCase()]),
                                        (e && "set" in e && void 0 !== e.set(this, r, "value")) || (this.value = r));
                                })
                            );
                        if (r)
                            return (
                                (e = nt.valHooks[r.type] || nt.valHooks[r.nodeName.toLowerCase()]), e && "get" in e && void 0 !== (i = e.get(r, "value")) ? i : ((i = r.value), "string" == typeof i ? i.replace(he, "") : null == i ? "" : i)
                            );
                    }
                },
            }),
                nt.extend({
                    valHooks: {
                        option: {
                            get: function (t) {
                                var e = nt.find.attr(t, "value");
                                return null != e ? e : nt.trim(nt.text(t));
                            },
                        },
                        select: {
                            get: function (t) {
                                for (var e, i, n = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : n.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
                                    if (((i = n[l]), !((!i.selected && l !== r) || (tt.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || (i.parentNode.disabled && nt.nodeName(i.parentNode, "optgroup"))))) {
                                        if (((e = nt(i).val()), o)) return e;
                                        s.push(e);
                                    }
                                return s;
                            },
                            set: function (t, e) {
                                for (var i, n, r = t.options, o = nt.makeArray(e), s = r.length; s--; ) (n = r[s]), (n.selected = nt.inArray(n.value, o) >= 0) && (i = !0);
                                return i || (t.selectedIndex = -1), o;
                            },
                        },
                    },
                }),
                nt.each(["radio", "checkbox"], function () {
                    (nt.valHooks[this] = {
                        set: function (t, e) {
                            return nt.isArray(e) ? (t.checked = nt.inArray(nt(t).val(), e) >= 0) : void 0;
                        },
                    }),
                        tt.checkOn ||
                            (nt.valHooks[this].get = function (t) {
                                return null === t.getAttribute("value") ? "on" : t.value;
                            });
                }),
                nt.each(
                    "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
                    function (t, e) {
                        nt.fn[e] = function (t, i) {
                            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e);
                        };
                    }
                ),
                nt.fn.extend({
                    hover: function (t, e) {
                        return this.mouseenter(t).mouseleave(e || t);
                    },
                    bind: function (t, e, i) {
                        return this.on(t, null, e, i);
                    },
                    unbind: function (t, e) {
                        return this.off(t, null, e);
                    },
                    delegate: function (t, e, i, n) {
                        return this.on(e, t, i, n);
                    },
                    undelegate: function (t, e, i) {
                        return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i);
                    },
                });
            var pe = nt.now(),
                fe = /\?/;
            (nt.parseJSON = function (t) {
                return JSON.parse(t + "");
            }),
                (nt.parseXML = function (t) {
                    var e, i;
                    if (!t || "string" != typeof t) return null;
                    try {
                        (i = new DOMParser()), (e = i.parseFromString(t, "text/xml"));
                    } catch (n) {
                        e = void 0;
                    }
                    return (!e || e.getElementsByTagName("parsererror").length) && nt.error("Invalid XML: " + t), e;
                });
            var ve = /#.*$/,
                ge = /([?&])_=[^&]*/,
                me = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Te = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                be = /^(?:GET|HEAD)$/,
                ye = /^\/\//,
                Se = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
                xe = {},
                we = {},
                Pe = "*/".concat("*"),
                Ae = i.location.href,
                Ce = Se.exec(Ae.toLowerCase()) || [];
            nt.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Ae,
                    type: "GET",
                    isLocal: Te.test(Ce[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: { "*": Pe, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                    contents: { xml: /xml/, html: /html/, json: /json/ },
                    responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                    converters: { "* text": String, "text html": !0, "text json": nt.parseJSON, "text xml": nt.parseXML },
                    flatOptions: { url: !0, context: !0 },
                },
                ajaxSetup: function (t, e) {
                    return e ? X(X(t, nt.ajaxSettings), e) : X(nt.ajaxSettings, t);
                },
                ajaxPrefilter: R(xe),
                ajaxTransport: R(we),
                ajax: function (t, e) {
                    function i(t, e, i, s) {
                        var l,
                            u,
                            m,
                            T,
                            y,
                            x = e;
                        2 !== b &&
                            ((b = 2),
                            a && clearTimeout(a),
                            (n = void 0),
                            (o = s || ""),
                            (S.readyState = t > 0 ? 4 : 0),
                            (l = (t >= 200 && 300 > t) || 304 === t),
                            i && (T = $(d, S, i)),
                            (T = j(d, T, S, l)),
                            l
                                ? (d.ifModified && ((y = S.getResponseHeader("Last-Modified")), y && (nt.lastModified[r] = y), (y = S.getResponseHeader("etag")), y && (nt.etag[r] = y)),
                                  204 === t || "HEAD" === d.type ? (x = "nocontent") : 304 === t ? (x = "notmodified") : ((x = T.state), (u = T.data), (m = T.error), (l = !m)))
                                : ((m = x), (t || !x) && ((x = "error"), 0 > t && (t = 0))),
                            (S.status = t),
                            (S.statusText = (e || x) + ""),
                            l ? f.resolveWith(h, [u, x, S]) : f.rejectWith(h, [S, x, m]),
                            S.statusCode(g),
                            (g = void 0),
                            c && p.trigger(l ? "ajaxSuccess" : "ajaxError", [S, d, l ? u : m]),
                            v.fireWith(h, [S, x]),
                            c && (p.trigger("ajaxComplete", [S, d]), --nt.active || nt.event.trigger("ajaxStop")));
                    }
                    "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
                    var n,
                        r,
                        o,
                        s,
                        a,
                        l,
                        c,
                        u,
                        d = nt.ajaxSetup({}, e),
                        h = d.context || d,
                        p = d.context && (h.nodeType || h.jquery) ? nt(h) : nt.event,
                        f = nt.Deferred(),
                        v = nt.Callbacks("once memory"),
                        g = d.statusCode || {},
                        m = {},
                        T = {},
                        b = 0,
                        y = "canceled",
                        S = {
                            readyState: 0,
                            getResponseHeader: function (t) {
                                var e;
                                if (2 === b) {
                                    if (!s) for (s = {}; (e = me.exec(o)); ) s[e[1].toLowerCase()] = e[2];
                                    e = s[t.toLowerCase()];
                                }
                                return null == e ? null : e;
                            },
                            getAllResponseHeaders: function () {
                                return 2 === b ? o : null;
                            },
                            setRequestHeader: function (t, e) {
                                var i = t.toLowerCase();
                                return b || ((t = T[i] = T[i] || t), (m[t] = e)), this;
                            },
                            overrideMimeType: function (t) {
                                return b || (d.mimeType = t), this;
                            },
                            statusCode: function (t) {
                                var e;
                                if (t)
                                    if (2 > b) for (e in t) g[e] = [g[e], t[e]];
                                    else S.always(t[S.status]);
                                return this;
                            },
                            abort: function (t) {
                                var e = t || y;
                                return n && n.abort(e), i(0, e), this;
                            },
                        };
                    if (
                        ((f.promise(S).complete = v.add),
                        (S.success = S.done),
                        (S.error = S.fail),
                        (d.url = ((t || d.url || Ae) + "").replace(ve, "").replace(ye, Ce[1] + "//")),
                        (d.type = e.method || e.type || d.method || d.type),
                        (d.dataTypes = nt
                            .trim(d.dataType || "*")
                            .toLowerCase()
                            .match(mt) || [""]),
                        null == d.crossDomain &&
                            ((l = Se.exec(d.url.toLowerCase())), (d.crossDomain = !(!l || (l[1] === Ce[1] && l[2] === Ce[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (Ce[3] || ("http:" === Ce[1] ? "80" : "443")))))),
                        d.data && d.processData && "string" != typeof d.data && (d.data = nt.param(d.data, d.traditional)),
                        W(xe, d, e, S),
                        2 === b)
                    )
                        return S;
                    (c = nt.event && d.global),
                        c && 0 === nt.active++ && nt.event.trigger("ajaxStart"),
                        (d.type = d.type.toUpperCase()),
                        (d.hasContent = !be.test(d.type)),
                        (r = d.url),
                        d.hasContent || (d.data && ((r = d.url += (fe.test(r) ? "&" : "?") + d.data), delete d.data), d.cache === !1 && (d.url = ge.test(r) ? r.replace(ge, "$1_=" + pe++) : r + (fe.test(r) ? "&" : "?") + "_=" + pe++)),
                        d.ifModified && (nt.lastModified[r] && S.setRequestHeader("If-Modified-Since", nt.lastModified[r]), nt.etag[r] && S.setRequestHeader("If-None-Match", nt.etag[r])),
                        ((d.data && d.hasContent && d.contentType !== !1) || e.contentType) && S.setRequestHeader("Content-Type", d.contentType),
                        S.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Pe + "; q=0.01" : "") : d.accepts["*"]);
                    for (u in d.headers) S.setRequestHeader(u, d.headers[u]);
                    if (d.beforeSend && (d.beforeSend.call(h, S, d) === !1 || 2 === b)) return S.abort();
                    y = "abort";
                    for (u in { success: 1, error: 1, complete: 1 }) S[u](d[u]);
                    if ((n = W(we, d, e, S))) {
                        (S.readyState = 1),
                            c && p.trigger("ajaxSend", [S, d]),
                            d.async &&
                                d.timeout > 0 &&
                                (a = setTimeout(function () {
                                    S.abort("timeout");
                                }, d.timeout));
                        try {
                            (b = 1), n.send(m, i);
                        } catch (x) {
                            if (!(2 > b)) throw x;
                            i(-1, x);
                        }
                    } else i(-1, "No Transport");
                    return S;
                },
                getJSON: function (t, e, i) {
                    return nt.get(t, e, i, "json");
                },
                getScript: function (t, e) {
                    return nt.get(t, void 0, e, "script");
                },
            }),
                nt.each(["get", "post"], function (t, e) {
                    nt[e] = function (t, i, n, r) {
                        return nt.isFunction(i) && ((r = r || n), (n = i), (i = void 0)), nt.ajax({ url: t, type: e, dataType: r, data: i, success: n });
                    };
                }),
                (nt._evalUrl = function (t) {
                    return nt.ajax({ url: t, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 });
                }),
                nt.fn.extend({
                    wrapAll: function (t) {
                        var e;
                        return nt.isFunction(t)
                            ? this.each(function (e) {
                                  nt(this).wrapAll(t.call(this, e));
                              })
                            : (this[0] &&
                                  ((e = nt(t, this[0].ownerDocument).eq(0).clone(!0)),
                                  this[0].parentNode && e.insertBefore(this[0]),
                                  e
                                      .map(function () {
                                          for (var t = this; t.firstElementChild; ) t = t.firstElementChild;
                                          return t;
                                      })
                                      .append(this)),
                              this);
                    },
                    wrapInner: function (t) {
                        return this.each(
                            nt.isFunction(t)
                                ? function (e) {
                                      nt(this).wrapInner(t.call(this, e));
                                  }
                                : function () {
                                      var e = nt(this),
                                          i = e.contents();
                                      i.length ? i.wrapAll(t) : e.append(t);
                                  }
                        );
                    },
                    wrap: function (t) {
                        var e = nt.isFunction(t);
                        return this.each(function (i) {
                            nt(this).wrapAll(e ? t.call(this, i) : t);
                        });
                    },
                    unwrap: function () {
                        return this.parent()
                            .each(function () {
                                nt.nodeName(this, "body") || nt(this).replaceWith(this.childNodes);
                            })
                            .end();
                    },
                }),
                (nt.expr.filters.hidden = function (t) {
                    return t.offsetWidth <= 0 && t.offsetHeight <= 0;
                }),
                (nt.expr.filters.visible = function (t) {
                    return !nt.expr.filters.hidden(t);
                });
            var ke = /%20/g,
                Me = /\[\]$/,
                Ee = /\r?\n/g,
                _e = /^(?:submit|button|image|reset|file)$/i,
                He = /^(?:input|select|textarea|keygen)/i;
            (nt.param = function (t, e) {
                var i,
                    n = [],
                    r = function (t, e) {
                        (e = nt.isFunction(e) ? e() : null == e ? "" : e), (n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e));
                    };
                if ((void 0 === e && (e = nt.ajaxSettings && nt.ajaxSettings.traditional), nt.isArray(t) || (t.jquery && !nt.isPlainObject(t))))
                    nt.each(t, function () {
                        r(this.name, this.value);
                    });
                else for (i in t) F(i, t[i], e, r);
                return n.join("&").replace(ke, "+");
            }),
                nt.fn.extend({
                    serialize: function () {
                        return nt.param(this.serializeArray());
                    },
                    serializeArray: function () {
                        return this.map(function () {
                            var t = nt.prop(this, "elements");
                            return t ? nt.makeArray(t) : this;
                        })
                            .filter(function () {
                                var t = this.type;
                                return this.name && !nt(this).is(":disabled") && He.test(this.nodeName) && !_e.test(t) && (this.checked || !Mt.test(t));
                            })
                            .map(function (t, e) {
                                var i = nt(this).val();
                                return null == i
                                    ? null
                                    : nt.isArray(i)
                                    ? nt.map(i, function (t) {
                                          return { name: e.name, value: t.replace(Ee, "\r\n") };
                                      })
                                    : { name: e.name, value: i.replace(Ee, "\r\n") };
                            })
                            .get();
                    },
                }),
                (nt.ajaxSettings.xhr = function () {
                    try {
                        return new XMLHttpRequest();
                    } catch (t) {}
                });
            var Ge = 0,
                De = {},
                Ie = { 0: 200, 1223: 204 },
                Be = nt.ajaxSettings.xhr();
            i.attachEvent &&
                i.attachEvent("onunload", function () {
                    for (var t in De) De[t]();
                }),
                (tt.cors = !!Be && "withCredentials" in Be),
                (tt.ajax = Be = !!Be),
                nt.ajaxTransport(function (t) {
                    var e;
                    return tt.cors || (Be && !t.crossDomain)
                        ? {
                              send: function (i, n) {
                                  var r,
                                      o = t.xhr(),
                                      s = ++Ge;
                                  if ((o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (r in t.xhrFields) o[r] = t.xhrFields[r];
                                  t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                                  for (r in i) o.setRequestHeader(r, i[r]);
                                  (e = function (t) {
                                      return function () {
                                          e &&
                                              (delete De[s],
                                              (e = o.onload = o.onerror = null),
                                              "abort" === t
                                                  ? o.abort()
                                                  : "error" === t
                                                  ? n(o.status, o.statusText)
                                                  : n(Ie[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? { text: o.responseText } : void 0, o.getAllResponseHeaders()));
                                      };
                                  }),
                                      (o.onload = e()),
                                      (o.onerror = e("error")),
                                      (e = De[s] = e("abort"));
                                  try {
                                      o.send((t.hasContent && t.data) || null);
                                  } catch (a) {
                                      if (e) throw a;
                                  }
                              },
                              abort: function () {
                                  e && e();
                              },
                          }
                        : void 0;
                }),
                nt.ajaxSetup({
                    accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                    contents: { script: /(?:java|ecma)script/ },
                    converters: {
                        "text script": function (t) {
                            return nt.globalEval(t), t;
                        },
                    },
                }),
                nt.ajaxPrefilter("script", function (t) {
                    void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
                }),
                nt.ajaxTransport("script", function (t) {
                    if (t.crossDomain) {
                        var e, i;
                        return {
                            send: function (n, r) {
                                (e = nt("<script>")
                                    .prop({ async: !0, charset: t.scriptCharset, src: t.url })
                                    .on(
                                        "load error",
                                        (i = function (t) {
                                            e.remove(), (i = null), t && r("error" === t.type ? 404 : 200, t.type);
                                        })
                                    )),
                                    et.head.appendChild(e[0]);
                            },
                            abort: function () {
                                i && i();
                            },
                        };
                    }
                });
            var Ne = [],
                Oe = /(=)\?(?=&|$)|\?\?/;
            nt.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var t = Ne.pop() || nt.expando + "_" + pe++;
                    return (this[t] = !0), t;
                },
            }),
                nt.ajaxPrefilter("json jsonp", function (t, e, n) {
                    var r,
                        o,
                        s,
                        a = t.jsonp !== !1 && (Oe.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Oe.test(t.data) && "data");
                    return a || "jsonp" === t.dataTypes[0]
                        ? ((r = t.jsonpCallback = nt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                          a ? (t[a] = t[a].replace(Oe, "$1" + r)) : t.jsonp !== !1 && (t.url += (fe.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
                          (t.converters["script json"] = function () {
                              return s || nt.error(r + " was not called"), s[0];
                          }),
                          (t.dataTypes[0] = "json"),
                          (o = i[r]),
                          (i[r] = function () {
                              s = arguments;
                          }),
                          n.always(function () {
                              (i[r] = o), t[r] && ((t.jsonpCallback = e.jsonpCallback), Ne.push(r)), s && nt.isFunction(o) && o(s[0]), (s = o = void 0);
                          }),
                          "script")
                        : void 0;
                }),
                (nt.parseHTML = function (t, e, i) {
                    if (!t || "string" != typeof t) return null;
                    "boolean" == typeof e && ((i = e), (e = !1)), (e = e || et);
                    var n = ut.exec(t),
                        r = !i && [];
                    return n ? [e.createElement(n[1])] : ((n = nt.buildFragment([t], e, r)), r && r.length && nt(r).remove(), nt.merge([], n.childNodes));
                });
            var Le = nt.fn.load;
            (nt.fn.load = function (t, e, i) {
                if ("string" != typeof t && Le) return Le.apply(this, arguments);
                var n,
                    r,
                    o,
                    s = this,
                    a = t.indexOf(" ");
                return (
                    a >= 0 && ((n = nt.trim(t.slice(a))), (t = t.slice(0, a))),
                    nt.isFunction(e) ? ((i = e), (e = void 0)) : e && "object" == typeof e && (r = "POST"),
                    s.length > 0 &&
                        nt
                            .ajax({ url: t, type: r, dataType: "html", data: e })
                            .done(function (t) {
                                (o = arguments), s.html(n ? nt("<div>").append(nt.parseHTML(t)).find(n) : t);
                            })
                            .complete(
                                i &&
                                    function (t, e) {
                                        s.each(i, o || [t.responseText, e, t]);
                                    }
                            ),
                    this
                );
            }),
                nt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
                    nt.fn[e] = function (t) {
                        return this.on(e, t);
                    };
                }),
                (nt.expr.filters.animated = function (t) {
                    return nt.grep(nt.timers, function (e) {
                        return t === e.elem;
                    }).length;
                });
            var Re = i.document.documentElement;
            (nt.offset = {
                setOffset: function (t, e, i) {
                    var n,
                        r,
                        o,
                        s,
                        a,
                        l,
                        c,
                        u = nt.css(t, "position"),
                        d = nt(t),
                        h = {};
                    "static" === u && (t.style.position = "relative"),
                        (a = d.offset()),
                        (o = nt.css(t, "top")),
                        (l = nt.css(t, "left")),
                        (c = ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1),
                        c ? ((n = d.position()), (s = n.top), (r = n.left)) : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
                        nt.isFunction(e) && (e = e.call(t, i, a)),
                        null != e.top && (h.top = e.top - a.top + s),
                        null != e.left && (h.left = e.left - a.left + r),
                        "using" in e ? e.using.call(t, h) : d.css(h);
                },
            }),
                nt.fn.extend({
                    offset: function (t) {
                        if (arguments.length)
                            return void 0 === t
                                ? this
                                : this.each(function (e) {
                                      nt.offset.setOffset(this, t, e);
                                  });
                        var e,
                            i,
                            n = this[0],
                            r = { top: 0, left: 0 },
                            o = n && n.ownerDocument;
                        if (o)
                            return (
                                (e = o.documentElement),
                                nt.contains(e, n) ? (typeof n.getBoundingClientRect !== Et && (r = n.getBoundingClientRect()), (i = V(o)), { top: r.top + i.pageYOffset - e.clientTop, left: r.left + i.pageXOffset - e.clientLeft }) : r
                            );
                    },
                    position: function () {
                        if (this[0]) {
                            var t,
                                e,
                                i = this[0],
                                n = { top: 0, left: 0 };
                            return (
                                "fixed" === nt.css(i, "position")
                                    ? (e = i.getBoundingClientRect())
                                    : ((t = this.offsetParent()), (e = this.offset()), nt.nodeName(t[0], "html") || (n = t.offset()), (n.top += nt.css(t[0], "borderTopWidth", !0)), (n.left += nt.css(t[0], "borderLeftWidth", !0))),
                                { top: e.top - n.top - nt.css(i, "marginTop", !0), left: e.left - n.left - nt.css(i, "marginLeft", !0) }
                            );
                        }
                    },
                    offsetParent: function () {
                        return this.map(function () {
                            for (var t = this.offsetParent || Re; t && !nt.nodeName(t, "html") && "static" === nt.css(t, "position"); ) t = t.offsetParent;
                            return t || Re;
                        });
                    },
                }),
                nt.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, e) {
                    var n = "pageYOffset" === e;
                    nt.fn[t] = function (r) {
                        return yt(
                            this,
                            function (t, r, o) {
                                var s = V(t);
                                return void 0 === o ? (s ? s[e] : t[r]) : void (s ? s.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : (t[r] = o));
                            },
                            t,
                            r,
                            arguments.length,
                            null
                        );
                    };
                }),
                nt.each(["top", "left"], function (t, e) {
                    nt.cssHooks[e] = C(tt.pixelPosition, function (t, i) {
                        return i ? ((i = A(t, e)), zt.test(i) ? nt(t).position()[e] + "px" : i) : void 0;
                    });
                }),
                nt.each({ Height: "height", Width: "width" }, function (t, e) {
                    nt.each({ padding: "inner" + t, content: e, "": "outer" + t }, function (i, n) {
                        nt.fn[n] = function (n, r) {
                            var o = arguments.length && (i || "boolean" != typeof n),
                                s = i || (n === !0 || r === !0 ? "margin" : "border");
                            return yt(
                                this,
                                function (e, i, n) {
                                    var r;
                                    return nt.isWindow(e)
                                        ? e.document.documentElement["client" + t]
                                        : 9 === e.nodeType
                                        ? ((r = e.documentElement), Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t]))
                                        : void 0 === n
                                        ? nt.css(e, i, s)
                                        : nt.style(e, i, n, s);
                                },
                                e,
                                o ? n : void 0,
                                o,
                                null
                            );
                        };
                    });
                }),
                (nt.fn.size = function () {
                    return this.length;
                }),
                (nt.fn.andSelf = nt.fn.addBack),
                (n = []),
                (r = function () {
                    return nt;
                }.apply(e, n)),
                !(void 0 !== r && (t.exports = r));
            var We = i.jQuery,
                Xe = i.$;
            return (
                (nt.noConflict = function (t) {
                    return i.$ === nt && (i.$ = Xe), t && i.jQuery === nt && (i.jQuery = We), nt;
                }),
                typeof o === Et && (i.jQuery = i.$ = nt),
                nt
            );
        });
    },
    4: function (t, e, i) {
        var n = i(40)("wks"),
            r = i(41),
            o = i(9).Symbol;
        t.exports = function (t) {
            return n[t] || (n[t] = (o && o[t]) || (o || r)("Symbol." + t));
        };
    },
    5: function (t, e) {
        "use strict";
        (e.__esModule = !0),
            (e["default"] = function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            });
    },
    7: function (t, e, i) {
        "use strict";
        function n(t) {
            return t && t.__esModule ? t : { default: t };
        }
        e.__esModule = !0;
        var r = i(62),
            o = n(r);
        e["default"] = (function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), o["default"](t, n.key, n);
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e;
            };
        })();
    },
    8: function (t, e) {
        var i = (t.exports = { version: "1.2.6" });
        "number" == typeof __e && (__e = i);
    },
    9: function (t, e) {
        var i = (t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")());
        "number" == typeof __g && (__g = i);
    },
    14: function (t, e, i) {
        var n = i(9),
            r = i(8),
            o = i(19),
            s = "prototype",
            a = function (t, e, i) {
                var l,
                    c,
                    u,
                    d = t & a.F,
                    h = t & a.G,
                    p = t & a.S,
                    f = t & a.P,
                    v = t & a.B,
                    g = t & a.W,
                    m = h ? r : r[e] || (r[e] = {}),
                    T = h ? n : p ? n[e] : (n[e] || {})[s];
                h && (i = e);
                for (l in i)
                    (c = !d && T && l in T),
                        (c && l in m) ||
                            ((u = c ? T[l] : i[l]),
                            (m[l] =
                                h && "function" != typeof T[l]
                                    ? i[l]
                                    : v && c
                                    ? o(u, n)
                                    : g && T[l] == u
                                    ? (function (t) {
                                          var e = function (e) {
                                              return this instanceof t ? new t(e) : t(e);
                                          };
                                          return (e[s] = t[s]), e;
                                      })(u)
                                    : f && "function" == typeof u
                                    ? o(Function.call, u)
                                    : u),
                            f && ((m[s] || (m[s] = {}))[l] = u));
            };
        (a.F = 1), (a.G = 2), (a.S = 4), (a.P = 8), (a.B = 16), (a.W = 32), (t.exports = a);
    },
    16: function (t, e, i) {
        var n = i(54),
            r = i(23);
        t.exports = function (t) {
            return n(r(t));
        };
    },
    17: function (t, e) {
        t.exports = {};
    },
    18: function (t, e, i) {
        var n = i(25);
        t.exports = function (t) {
            if (!n(t)) throw TypeError(t + " is not an object!");
            return t;
        };
    },
    19: function (t, e, i) {
        var n = i(38);
        t.exports = function (t, e, i) {
            if ((n(t), void 0 === e)) return t;
            switch (i) {
                case 1:
                    return function (i) {
                        return t.call(e, i);
                    };
                case 2:
                    return function (i, n) {
                        return t.call(e, i, n);
                    };
                case 3:
                    return function (i, n, r) {
                        return t.call(e, i, n, r);
                    };
            }
            return function () {
                return t.apply(e, arguments);
            };
        };
    },
    20: function (t, e) {
        var i = {}.toString;
        t.exports = function (t) {
            return i.call(t).slice(8, -1);
        };
    },
    21: function (t, e, i) {
        var n = i(2).setDesc,
            r = i(27),
            o = i(4)("toStringTag");
        t.exports = function (t, e, i) {
            t && !r((t = i ? t : t.prototype), o) && n(t, o, { configurable: !0, value: e });
        };
    },
    22: function (t, e) {
        t.exports = function (t) {
            try {
                return !!t();
            } catch (e) {
                return !0;
            }
        };
    },
    23: function (t, e) {
        t.exports = function (t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t;
        };
    },
    24: function (t, e, i) {
        var n = i(2),
            r = i(28);
        t.exports = i(29)
            ? function (t, e, i) {
                  return n.setDesc(t, e, r(1, i));
              }
            : function (t, e, i) {
                  return (t[e] = i), t;
              };
    },
    25: function (t, e) {
        t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t;
        };
    },
    27: function (t, e) {
        var i = {}.hasOwnProperty;
        t.exports = function (t, e) {
            return i.call(t, e);
        };
    },
    28: function (t, e) {
        t.exports = function (t, e) {
            return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
        };
    },
    29: function (t, e, i) {
        t.exports = !i(22)(function () {
            return (
                7 !=
                Object.defineProperty({}, "a", {
                    get: function () {
                        return 7;
                    },
                }).a
            );
        });
    },
    33: function (t, e) {
        "use strict";
        function i(t, e) {
            var r = e && e.loc,
                o = void 0,
                s = void 0;
            r && ((o = r.start.line), (s = r.start.column), (t += " - " + o + ":" + s));
            for (var a = Error.prototype.constructor.call(this, t), l = 0; l < n.length; l++) this[n[l]] = a[n[l]];
            Error.captureStackTrace && Error.captureStackTrace(this, i), r && ((this.lineNumber = o), (this.column = s));
        }
        e.__esModule = !0;
        var n = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
        (i.prototype = new Error()), (e["default"] = i), (t.exports = e["default"]);
    },
    34: function (t, e) {
        "use strict";
        function i(t) {
            return c[t];
        }
        function n(t) {
            for (var e = 1; e < arguments.length; e++) for (var i in arguments[e]) Object.prototype.hasOwnProperty.call(arguments[e], i) && (t[i] = arguments[e][i]);
            return t;
        }
        function r(t, e) {
            for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return i;
            return -1;
        }
        function o(t) {
            if ("string" != typeof t) {
                if (t && t.toHTML) return t.toHTML();
                if (null == t) return "";
                if (!t) return t + "";
                t = "" + t;
            }
            return d.test(t) ? t.replace(u, i) : t;
        }
        function s(t) {
            return t || 0 === t ? (f(t) && 0 === t.length ? !0 : !1) : !0;
        }
        function a(t, e) {
            return (t.path = e), t;
        }
        function l(t, e) {
            return (t ? t + "." : "") + e;
        }
        (e.__esModule = !0), (e.extend = n), (e.indexOf = r), (e.escapeExpression = o), (e.isEmpty = s), (e.blockParams = a), (e.appendContextPath = l);
        var c = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
            u = /[&<>"'`]/g,
            d = /[&<>"'`]/,
            h = Object.prototype.toString;
        e.toString = h;
        var p = function (t) {
            return "function" == typeof t;
        };
        p(/x/) &&
            (e.isFunction = p = function (t) {
                return "function" == typeof t && "[object Function]" === h.call(t);
            });
        var p;
        e.isFunction = p;
        var f =
            Array.isArray ||
            function (t) {
                return t && "object" == typeof t ? "[object Array]" === h.call(t) : !1;
            };
        e.isArray = f;
    },
    35: function (t, e) {
        t.exports = !0;
    },
    36: function (t, e, i) {
        t.exports = i(24);
    },
    38: function (t, e) {
        t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t;
        };
    },
    39: function (t, e, i) {
        "use strict";
        var n = i(35),
            r = i(14),
            o = i(36),
            s = i(24),
            a = i(27),
            l = i(17),
            c = i(65),
            u = i(21),
            d = i(2).getProto,
            h = i(4)("iterator"),
            p = !([].keys && "next" in [].keys()),
            f = "@@iterator",
            v = "keys",
            g = "values",
            m = function () {
                return this;
            };
        t.exports = function (t, e, i, T, b, y, S) {
            c(i, e, T);
            var x,
                w,
                P = function (t) {
                    if (!p && t in M) return M[t];
                    switch (t) {
                        case v:
                            return function () {
                                return new i(this, t);
                            };
                        case g:
                            return function () {
                                return new i(this, t);
                            };
                    }
                    return function () {
                        return new i(this, t);
                    };
                },
                A = e + " Iterator",
                C = b == g,
                k = !1,
                M = t.prototype,
                E = M[h] || M[f] || (b && M[b]),
                _ = E || P(b);
            if (E) {
                var H = d(_.call(new t()));
                u(H, A, !0),
                    !n && a(M, f) && s(H, h, m),
                    C &&
                        E.name !== g &&
                        ((k = !0),
                        (_ = function () {
                            return E.call(this);
                        }));
            }
            if (((n && !S) || (!p && !k && M[h]) || s(M, h, _), (l[e] = _), (l[A] = m), b))
                if (((x = { values: C ? _ : P(g), keys: y ? _ : P(v), entries: C ? P("entries") : _ }), S)) for (w in x) w in M || o(M, w, x[w]);
                else r(r.P + r.F * (p || k), e, x);
            return x;
        };
    },
    40: function (t, e, i) {
        var n = i(9),
            r = "__core-js_shared__",
            o = n[r] || (n[r] = {});
        t.exports = function (t) {
            return o[t] || (o[t] = {});
        };
    },
    41: function (t, e) {
        var i = 0,
            n = Math.random();
        t.exports = function (t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++i + n).toString(36));
        };
    },
    44: function (t, e, i) {
        t.exports = i(92)["default"];
    },
    45: function (t, e, i) {
        var n = i(14),
            r = i(8),
            o = i(22);
        t.exports = function (t, e) {
            var i = (r.Object || {})[t] || Object[t],
                s = {};
            (s[t] = e(i)),
                n(
                    n.S +
                        n.F *
                            o(function () {
                                i(1);
                            }),
                    "Object",
                    s
                );
        };
    },
    46: function (t, e, i) {
        var n = i(23);
        t.exports = function (t) {
            return Object(n(t));
        };
    },
    49: function (t, e) {
        var i = Math.ceil,
            n = Math.floor;
        t.exports = function (t) {
            return isNaN((t = +t)) ? 0 : (t > 0 ? n : i)(t);
        };
    },
    50: function (t, e, i) {
        "use strict";
        var n = i(67)(!0);
        i(39)(
            String,
            "String",
            function (t) {
                (this._t = String(t)), (this._i = 0);
            },
            function () {
                var t,
                    e = this._t,
                    i = this._i;
                return i >= e.length ? { value: void 0, done: !0 } : ((t = n(e, i)), (this._i += t.length), { value: t, done: !1 });
            }
        );
    },
    51: function (t, e, i) {
        i(68);
        var n = i(17);
        n.NodeList = n.HTMLCollection = n.Array;
    },
    52: function (t, e) {
        t.exports = function (t) {
            return t.webpackPolyfill || ((t.deprecate = function () {}), (t.paths = []), (t.children = []), (t.webpackPolyfill = 1)), t;
        };
    },
    53: function (t, e, i) {
        var n;
        (function (t, r) {
            (function () {
                function o(t, e) {
                    if (t !== e) {
                        var i = null === t,
                            n = t === k,
                            r = t === t,
                            o = null === e,
                            s = e === k,
                            a = e === e;
                        if ((t > e && !o) || !r || (i && !s && a) || (n && a)) return 1;
                        if ((e > t && !i) || !a || (o && !n && r) || (s && r)) return -1;
                    }
                    return 0;
                }
                function s(t, e, i) {
                    for (var n = t.length, r = i ? n : -1; i ? r-- : ++r < n; ) if (e(t[r], r, t)) return r;
                    return -1;
                }
                function a(t, e, i) {
                    if (e !== e) return T(t, i);
                    for (var n = i - 1, r = t.length; ++n < r; ) if (t[n] === e) return n;
                    return -1;
                }
                function l(t) {
                    return "function" == typeof t || !1;
                }
                function c(t) {
                    return null == t ? "" : t + "";
                }
                function u(t, e) {
                    for (var i = -1, n = t.length; ++i < n && e.indexOf(t.charAt(i)) > -1; );
                    return i;
                }
                function d(t, e) {
                    for (var i = t.length; i-- && e.indexOf(t.charAt(i)) > -1; );
                    return i;
                }
                function h(t, e) {
                    return o(t.criteria, e.criteria) || t.index - e.index;
                }
                function p(t, e, i) {
                    for (var n = -1, r = t.criteria, s = e.criteria, a = r.length, l = i.length; ++n < a; ) {
                        var c = o(r[n], s[n]);
                        if (c) {
                            if (n >= l) return c;
                            var u = i[n];
                            return c * ("asc" === u || u === !0 ? 1 : -1);
                        }
                    }
                    return t.index - e.index;
                }
                function f(t) {
                    return Ut[t];
                }
                function v(t) {
                    return qt[t];
                }
                function g(t, e, i) {
                    return e ? (t = Qt[t]) : i && (t = Zt[t]), "\\" + t;
                }
                function m(t) {
                    return "\\" + Zt[t];
                }
                function T(t, e, i) {
                    for (var n = t.length, r = e + (i ? 0 : -1); i ? r-- : ++r < n; ) {
                        var o = t[r];
                        if (o !== o) return r;
                    }
                    return -1;
                }
                function b(t) {
                    return !!t && "object" == typeof t;
                }
                function y(t) {
                    return (160 >= t && t >= 9 && 13 >= t) || 32 == t || 160 == t || 5760 == t || 6158 == t || (t >= 8192 && (8202 >= t || 8232 == t || 8233 == t || 8239 == t || 8287 == t || 12288 == t || 65279 == t));
                }
                function S(t, e) {
                    for (var i = -1, n = t.length, r = -1, o = []; ++i < n; ) t[i] === e && ((t[i] = z), (o[++r] = i));
                    return o;
                }
                function x(t, e) {
                    for (var i, n = -1, r = t.length, o = -1, s = []; ++n < r; ) {
                        var a = t[n],
                            l = e ? e(a, n, t) : a;
                        (n && i === l) || ((i = l), (s[++o] = a));
                    }
                    return s;
                }
                function w(t) {
                    for (var e = -1, i = t.length; ++e < i && y(t.charCodeAt(e)); );
                    return e;
                }
                function P(t) {
                    for (var e = t.length; e-- && y(t.charCodeAt(e)); );
                    return e;
                }
                function A(t) {
                    return Yt[t];
                }
                function C(t) {
                    function e(t) {
                        if (b(t) && !Ba(t) && !(t instanceof r)) {
                            if (t instanceof n) return t;
                            if (rs.call(t, "__chain__") && rs.call(t, "__wrapped__")) return vn(t);
                        }
                        return new n(t);
                    }
                    function i() {}
                    function n(t, e, i) {
                        (this.__wrapped__ = t), (this.__actions__ = i || []), (this.__chain__ = !!e);
                    }
                    function r(t) {
                        (this.__wrapped__ = t), (this.__actions__ = []), (this.__dir__ = 1), (this.__filtered__ = !1), (this.__iteratees__ = []), (this.__takeCount__ = Hs), (this.__views__ = []);
                    }
                    function y() {
                        var t = new r(this.__wrapped__);
                        return (
                            (t.__actions__ = ee(this.__actions__)),
                            (t.__dir__ = this.__dir__),
                            (t.__filtered__ = this.__filtered__),
                            (t.__iteratees__ = ee(this.__iteratees__)),
                            (t.__takeCount__ = this.__takeCount__),
                            (t.__views__ = ee(this.__views__)),
                            t
                        );
                    }
                    function J() {
                        if (this.__filtered__) {
                            var t = new r(this);
                            (t.__dir__ = -1), (t.__filtered__ = !0);
                        } else (t = this.clone()), (t.__dir__ *= -1);
                        return t;
                    }
                    function nt() {
                        var t = this.__wrapped__.value(),
                            e = this.__dir__,
                            i = Ba(t),
                            n = 0 > e,
                            r = i ? t.length : 0,
                            o = Ui(0, r, this.__views__),
                            s = o.start,
                            a = o.end,
                            l = a - s,
                            c = n ? a : s - 1,
                            u = this.__iteratees__,
                            d = u.length,
                            h = 0,
                            p = Cs(l, this.__takeCount__);
                        if (!i || $ > r || (r == l && p == l)) return ri(t, this.__actions__);
                        var f = [];
                        t: for (; l-- && p > h; ) {
                            c += e;
                            for (var v = -1, g = t[c]; ++v < d; ) {
                                var m = u[v],
                                    T = m.iteratee,
                                    b = m.type,
                                    y = T(g);
                                if (b == F) g = y;
                                else if (!y) {
                                    if (b == j) continue t;
                                    break t;
                                }
                            }
                            f[h++] = g;
                        }
                        return f;
                    }
                    function ot() {
                        this.__data__ = {};
                    }
                    function Ut(t) {
                        return this.has(t) && delete this.__data__[t];
                    }
                    function qt(t) {
                        return "__proto__" == t ? k : this.__data__[t];
                    }
                    function Yt(t) {
                        return "__proto__" != t && rs.call(this.__data__, t);
                    }
                    function Kt(t, e) {
                        return "__proto__" != t && (this.__data__[t] = e), this;
                    }
                    function Qt(t) {
                        var e = t ? t.length : 0;
                        for (this.data = { hash: ys(null), set: new fs() }; e--; ) this.push(t[e]);
                    }
                    function Zt(t, e) {
                        var i = t.data,
                            n = "string" == typeof e || Nr(e) ? i.set.has(e) : i.hash[e];
                        return n ? 0 : -1;
                    }
                    function Jt(t) {
                        var e = this.data;
                        "string" == typeof t || Nr(t) ? e.set.add(t) : (e.hash[t] = !0);
                    }
                    function te(t, e) {
                        for (var i = -1, n = t.length, r = -1, o = e.length, s = jo(n + o); ++i < n; ) s[i] = t[i];
                        for (; ++r < o; ) s[i++] = e[r];
                        return s;
                    }
                    function ee(t, e) {
                        var i = -1,
                            n = t.length;
                        for (e || (e = jo(n)); ++i < n; ) e[i] = t[i];
                        return e;
                    }
                    function ie(t, e) {
                        for (var i = -1, n = t.length; ++i < n && e(t[i], i, t) !== !1; );
                        return t;
                    }
                    function ne(t, e) {
                        for (var i = t.length; i-- && e(t[i], i, t) !== !1; );
                        return t;
                    }
                    function ae(t, e) {
                        for (var i = -1, n = t.length; ++i < n; ) if (!e(t[i], i, t)) return !1;
                        return !0;
                    }
                    function le(t, e, i, n) {
                        for (var r = -1, o = t.length, s = n, a = s; ++r < o; ) {
                            var l = t[r],
                                c = +e(l);
                            i(c, s) && ((s = c), (a = l));
                        }
                        return a;
                    }
                    function ce(t, e) {
                        for (var i = -1, n = t.length, r = -1, o = []; ++i < n; ) {
                            var s = t[i];
                            e(s, i, t) && (o[++r] = s);
                        }
                        return o;
                    }
                    function ue(t, e) {
                        for (var i = -1, n = t.length, r = jo(n); ++i < n; ) r[i] = e(t[i], i, t);
                        return r;
                    }
                    function de(t, e) {
                        for (var i = -1, n = e.length, r = t.length; ++i < n; ) t[r + i] = e[i];
                        return t;
                    }
                    function he(t, e, i, n) {
                        var r = -1,
                            o = t.length;
                        for (n && o && (i = t[++r]); ++r < o; ) i = e(i, t[r], r, t);
                        return i;
                    }
                    function pe(t, e, i, n) {
                        var r = t.length;
                        for (n && r && (i = t[--r]); r--; ) i = e(i, t[r], r, t);
                        return i;
                    }
                    function fe(t, e) {
                        for (var i = -1, n = t.length; ++i < n; ) if (e(t[i], i, t)) return !0;
                        return !1;
                    }
                    function ve(t, e) {
                        for (var i = t.length, n = 0; i--; ) n += +e(t[i]) || 0;
                        return n;
                    }
                    function ge(t, e) {
                        return t === k ? e : t;
                    }
                    function me(t, e, i, n) {
                        return t !== k && rs.call(n, i) ? t : e;
                    }
                    function Te(t, e, i) {
                        for (var n = -1, r = za(e), o = r.length; ++n < o; ) {
                            var s = r[n],
                                a = t[s],
                                l = i(a, e[s], s, t, e);
                            ((l === l ? l === a : a !== a) && (a !== k || s in t)) || (t[s] = l);
                        }
                        return t;
                    }
                    function be(t, e) {
                        return null == e ? t : Se(e, za(e), t);
                    }
                    function ye(t, e) {
                        for (var i = -1, n = null == t, r = !n && Zi(t), o = r ? t.length : 0, s = e.length, a = jo(s); ++i < s; ) {
                            var l = e[i];
                            a[i] = r ? (Ji(l, o) ? t[l] : k) : n ? k : t[l];
                        }
                        return a;
                    }
                    function Se(t, e, i) {
                        i || (i = {});
                        for (var n = -1, r = e.length; ++n < r; ) {
                            var o = e[n];
                            i[o] = t[o];
                        }
                        return i;
                    }
                    function xe(t, e, i) {
                        var n = typeof t;
                        return "function" == n ? (e === k ? t : ai(t, e, i)) : null == t ? _o : "object" == n ? Xe(t) : e === k ? No(t) : $e(t, e);
                    }
                    function we(t, e, i, n, r, o, s) {
                        var a;
                        if ((i && (a = r ? i(t, n, r) : i(t)), a !== k)) return a;
                        if (!Nr(t)) return t;
                        var l = Ba(t);
                        if (l) {
                            if (((a = qi(t)), !e)) return ee(t, a);
                        } else {
                            var c = ss.call(t),
                                u = c == Z;
                            if (c != et && c != U && (!u || r)) return zt[c] ? Ki(t, c, e) : r ? t : {};
                            if (oe(t)) return r ? t : {};
                            if (((a = Yi(u ? {} : t)), !e)) return be(a, t);
                        }
                        o || (o = []), s || (s = []);
                        for (var d = o.length; d--; ) if (o[d] == t) return s[d];
                        return (
                            o.push(t),
                            s.push(a),
                            (l ? ie : De)(t, function (n, r) {
                                a[r] = we(n, e, i, r, t, o, s);
                            }),
                            a
                        );
                    }
                    function Pe(t, e, i) {
                        if ("function" != typeof t) throw new Zo(V);
                        return vs(function () {
                            t.apply(k, i);
                        }, e);
                    }
                    function Ae(t, e) {
                        var i = t ? t.length : 0,
                            n = [];
                        if (!i) return n;
                        var r = -1,
                            o = Fi(),
                            s = o === a,
                            l = s && e.length >= $ ? gi(e) : null,
                            c = e.length;
                        l && ((o = Zt), (s = !1), (e = l));
                        t: for (; ++r < i; ) {
                            var u = t[r];
                            if (s && u === u) {
                                for (var d = c; d--; ) if (e[d] === u) continue t;
                                n.push(u);
                            } else o(e, u, 0) < 0 && n.push(u);
                        }
                        return n;
                    }
                    function Ce(t, e) {
                        var i = !0;
                        return (
                            $s(t, function (t, n, r) {
                                return (i = !!e(t, n, r));
                            }),
                            i
                        );
                    }
                    function ke(t, e, i, n) {
                        var r = n,
                            o = r;
                        return (
                            $s(t, function (t, s, a) {
                                var l = +e(t, s, a);
                                (i(l, r) || (l === n && l === o)) && ((r = l), (o = t));
                            }),
                            o
                        );
                    }
                    function Me(t, e, i, n) {
                        var r = t.length;
                        for (i = null == i ? 0 : +i || 0, 0 > i && (i = -i > r ? 0 : r + i), n = n === k || n > r ? r : +n || 0, 0 > n && (n += r), r = i > n ? 0 : n >>> 0, i >>>= 0; r > i; ) t[i++] = e;
                        return t;
                    }
                    function Ee(t, e) {
                        var i = [];
                        return (
                            $s(t, function (t, n, r) {
                                e(t, n, r) && i.push(t);
                            }),
                            i
                        );
                    }
                    function _e(t, e, i, n) {
                        var r;
                        return (
                            i(t, function (t, i, o) {
                                return e(t, i, o) ? ((r = n ? i : t), !1) : void 0;
                            }),
                            r
                        );
                    }
                    function He(t, e, i, n) {
                        n || (n = []);
                        for (var r = -1, o = t.length; ++r < o; ) {
                            var s = t[r];
                            b(s) && Zi(s) && (i || Ba(s) || kr(s)) ? (e ? He(s, e, i, n) : de(n, s)) : i || (n[n.length] = s);
                        }
                        return n;
                    }
                    function Ge(t, e) {
                        return Fs(t, e, io);
                    }
                    function De(t, e) {
                        return Fs(t, e, za);
                    }
                    function Ie(t, e) {
                        return Vs(t, e, za);
                    }
                    function Be(t, e) {
                        for (var i = -1, n = e.length, r = -1, o = []; ++i < n; ) {
                            var s = e[i];
                            Br(t[s]) && (o[++r] = s);
                        }
                        return o;
                    }
                    function Ne(t, e, i) {
                        if (null != t) {
                            (t = pn(t)), i !== k && i in t && (e = [i]);
                            for (var n = 0, r = e.length; null != t && r > n; ) t = pn(t)[e[n++]];
                            return n && n == r ? t : k;
                        }
                    }
                    function Oe(t, e, i, n, r, o) {
                        return t === e ? !0 : null == t || null == e || (!Nr(t) && !b(e)) ? t !== t && e !== e : Le(t, e, Oe, i, n, r, o);
                    }
                    function Le(t, e, i, n, r, o, s) {
                        var a = Ba(t),
                            l = Ba(e),
                            c = q,
                            u = q;
                        a || ((c = ss.call(t)), c == U ? (c = et) : c != et && (a = Vr(t))), l || ((u = ss.call(e)), u == U ? (u = et) : u != et && (l = Vr(e)));
                        var d = c == et && !oe(t),
                            h = u == et && !oe(e),
                            p = c == u;
                        if (p && !a && !d) return Wi(t, e, c);
                        if (!r) {
                            var f = d && rs.call(t, "__wrapped__"),
                                v = h && rs.call(e, "__wrapped__");
                            if (f || v) return i(f ? t.value() : t, v ? e.value() : e, n, r, o, s);
                        }
                        if (!p) return !1;
                        o || (o = []), s || (s = []);
                        for (var g = o.length; g--; ) if (o[g] == t) return s[g] == e;
                        o.push(t), s.push(e);
                        var m = (a ? Ri : Xi)(t, e, i, n, r, o, s);
                        return o.pop(), s.pop(), m;
                    }
                    function Re(t, e, i) {
                        var n = e.length,
                            r = n,
                            o = !i;
                        if (null == t) return !r;
                        for (t = pn(t); n--; ) {
                            var s = e[n];
                            if (o && s[2] ? s[1] !== t[s[0]] : !(s[0] in t)) return !1;
                        }
                        for (; ++n < r; ) {
                            s = e[n];
                            var a = s[0],
                                l = t[a],
                                c = s[1];
                            if (o && s[2]) {
                                if (l === k && !(a in t)) return !1;
                            } else {
                                var u = i ? i(l, c, a) : k;
                                if (!(u === k ? Oe(c, l, i, !0) : u)) return !1;
                            }
                        }
                        return !0;
                    }
                    function We(t, e) {
                        var i = -1,
                            n = Zi(t) ? jo(t.length) : [];
                        return (
                            $s(t, function (t, r, o) {
                                n[++i] = e(t, r, o);
                            }),
                            n
                        );
                    }
                    function Xe(t) {
                        var e = Vi(t);
                        if (1 == e.length && e[0][2]) {
                            var i = e[0][0],
                                n = e[0][1];
                            return function (t) {
                                return null == t ? !1 : ((t = pn(t)), t[i] === n && (n !== k || i in t));
                            };
                        }
                        return function (t) {
                            return Re(t, e);
                        };
                    }
                    function $e(t, e) {
                        var i = Ba(t),
                            n = en(t) && on(e),
                            r = t + "";
                        return (
                            (t = fn(t)),
                            function (o) {
                                if (null == o) return !1;
                                var s = r;
                                if (((o = pn(o)), !((!i && n) || s in o))) {
                                    if (((o = 1 == t.length ? o : Ne(o, Ke(t, 0, -1))), null == o)) return !1;
                                    (s = Mn(t)), (o = pn(o));
                                }
                                return o[s] === e ? e !== k || s in o : Oe(e, o[s], k, !0);
                            }
                        );
                    }
                    function je(t, e, i, n, r) {
                        if (!Nr(t)) return t;
                        var o = Zi(e) && (Ba(e) || Vr(e)),
                            s = o ? k : za(e);
                        return (
                            ie(s || e, function (a, l) {
                                if ((s && ((l = a), (a = e[l])), b(a))) n || (n = []), r || (r = []), Fe(t, e, l, je, i, n, r);
                                else {
                                    var c = t[l],
                                        u = i ? i(c, a, l, t, e) : k,
                                        d = u === k;
                                    d && (u = a), (u === k && (!o || l in t)) || (!d && (u === u ? u === c : c !== c)) || (t[l] = u);
                                }
                            }),
                            t
                        );
                    }
                    function Fe(t, e, i, n, r, o, s) {
                        for (var a = o.length, l = e[i]; a--; ) if (o[a] == l) return void (t[i] = s[a]);
                        var c = t[i],
                            u = r ? r(c, l, i, t, e) : k,
                            d = u === k;
                        d && ((u = l), Zi(l) && (Ba(l) || Vr(l)) ? (u = Ba(c) ? c : Zi(c) ? ee(c) : []) : $r(l) || kr(l) ? (u = kr(c) ? Kr(c) : $r(c) ? c : {}) : (d = !1)),
                            o.push(l),
                            s.push(u),
                            d ? (t[i] = n(u, l, r, o, s)) : (u === u ? u !== c : c === c) && (t[i] = u);
                    }
                    function Ve(t) {
                        return function (e) {
                            return null == e ? k : pn(e)[t];
                        };
                    }
                    function ze(t) {
                        var e = t + "";
                        return (
                            (t = fn(t)),
                            function (i) {
                                return Ne(i, t, e);
                            }
                        );
                    }
                    function Ue(t, e) {
                        for (var i = t ? e.length : 0; i--; ) {
                            var n = e[i];
                            if (n != r && Ji(n)) {
                                var r = n;
                                gs.call(t, n, 1);
                            }
                        }
                        return t;
                    }
                    function qe(t, e) {
                        return t + Ss(Es() * (e - t + 1));
                    }
                    function Ye(t, e, i, n, r) {
                        return (
                            r(t, function (t, r, o) {
                                i = n ? ((n = !1), t) : e(i, t, r, o);
                            }),
                            i
                        );
                    }
                    function Ke(t, e, i) {
                        var n = -1,
                            r = t.length;
                        (e = null == e ? 0 : +e || 0), 0 > e && (e = -e > r ? 0 : r + e), (i = i === k || i > r ? r : +i || 0), 0 > i && (i += r), (r = e > i ? 0 : (i - e) >>> 0), (e >>>= 0);
                        for (var o = jo(r); ++n < r; ) o[n] = t[n + e];
                        return o;
                    }
                    function Qe(t, e) {
                        var i;
                        return (
                            $s(t, function (t, n, r) {
                                return (i = e(t, n, r)), !i;
                            }),
                            !!i
                        );
                    }
                    function Ze(t, e) {
                        var i = t.length;
                        for (t.sort(e); i--; ) t[i] = t[i].value;
                        return t;
                    }
                    function Je(t, e, i) {
                        var n = $i(),
                            r = -1;
                        e = ue(e, function (t) {
                            return n(t);
                        });
                        var o = We(t, function (t) {
                            var i = ue(e, function (e) {
                                return e(t);
                            });
                            return { criteria: i, index: ++r, value: t };
                        });
                        return Ze(o, function (t, e) {
                            return p(t, e, i);
                        });
                    }
                    function ti(t, e) {
                        var i = 0;
                        return (
                            $s(t, function (t, n, r) {
                                i += +e(t, n, r) || 0;
                            }),
                            i
                        );
                    }
                    function ei(t, e) {
                        var i = -1,
                            n = Fi(),
                            r = t.length,
                            o = n === a,
                            s = o && r >= $,
                            l = s ? gi() : null,
                            c = [];
                        l ? ((n = Zt), (o = !1)) : ((s = !1), (l = e ? [] : c));
                        t: for (; ++i < r; ) {
                            var u = t[i],
                                d = e ? e(u, i, t) : u;
                            if (o && u === u) {
                                for (var h = l.length; h--; ) if (l[h] === d) continue t;
                                e && l.push(d), c.push(u);
                            } else n(l, d, 0) < 0 && ((e || s) && l.push(d), c.push(u));
                        }
                        return c;
                    }
                    function ii(t, e) {
                        for (var i = -1, n = e.length, r = jo(n); ++i < n; ) r[i] = t[e[i]];
                        return r;
                    }
                    function ni(t, e, i, n) {
                        for (var r = t.length, o = n ? r : -1; (n ? o-- : ++o < r) && e(t[o], o, t); );
                        return i ? Ke(t, n ? 0 : o, n ? o + 1 : r) : Ke(t, n ? o + 1 : 0, n ? r : o);
                    }
                    function ri(t, e) {
                        var i = t;
                        i instanceof r && (i = i.value());
                        for (var n = -1, o = e.length; ++n < o; ) {
                            var s = e[n];
                            i = s.func.apply(s.thisArg, de([i], s.args));
                        }
                        return i;
                    }
                    function oi(t, e, i) {
                        var n = 0,
                            r = t ? t.length : n;
                        if ("number" == typeof e && e === e && Is >= r) {
                            for (; r > n; ) {
                                var o = (n + r) >>> 1,
                                    s = t[o];
                                (i ? e >= s : e > s) && null !== s ? (n = o + 1) : (r = o);
                            }
                            return r;
                        }
                        return si(t, e, _o, i);
                    }
                    function si(t, e, i, n) {
                        e = i(e);
                        for (var r = 0, o = t ? t.length : 0, s = e !== e, a = null === e, l = e === k; o > r; ) {
                            var c = Ss((r + o) / 2),
                                u = i(t[c]),
                                d = u !== k,
                                h = u === u;
                            if (s) var p = h || n;
                            else p = a ? h && d && (n || null != u) : l ? h && (n || d) : null == u ? !1 : n ? e >= u : e > u;
                            p ? (r = c + 1) : (o = c);
                        }
                        return Cs(o, Ds);
                    }
                    function ai(t, e, i) {
                        if ("function" != typeof t) return _o;
                        if (e === k) return t;
                        switch (i) {
                            case 1:
                                return function (i) {
                                    return t.call(e, i);
                                };
                            case 3:
                                return function (i, n, r) {
                                    return t.call(e, i, n, r);
                                };
                            case 4:
                                return function (i, n, r, o) {
                                    return t.call(e, i, n, r, o);
                                };
                            case 5:
                                return function (i, n, r, o, s) {
                                    return t.call(e, i, n, r, o, s);
                                };
                        }
                        return function () {
                            return t.apply(e, arguments);
                        };
                    }
                    function li(t) {
                        var e = new cs(t.byteLength),
                            i = new ms(e);
                        return i.set(new ms(t)), e;
                    }
                    function ci(t, e, i) {
                        for (var n = i.length, r = -1, o = As(t.length - n, 0), s = -1, a = e.length, l = jo(a + o); ++s < a; ) l[s] = e[s];
                        for (; ++r < n; ) l[i[r]] = t[r];
                        for (; o--; ) l[s++] = t[r++];
                        return l;
                    }
                    function ui(t, e, i) {
                        for (var n = -1, r = i.length, o = -1, s = As(t.length - r, 0), a = -1, l = e.length, c = jo(s + l); ++o < s; ) c[o] = t[o];
                        for (var u = o; ++a < l; ) c[u + a] = e[a];
                        for (; ++n < r; ) c[u + i[n]] = t[o++];
                        return c;
                    }
                    function di(t, e) {
                        return function (i, n, r) {
                            var o = e ? e() : {};
                            if (((n = $i(n, r, 3)), Ba(i)))
                                for (var s = -1, a = i.length; ++s < a; ) {
                                    var l = i[s];
                                    t(o, l, n(l, s, i), i);
                                }
                            else
                                $s(i, function (e, i, r) {
                                    t(o, e, n(e, i, r), r);
                                });
                            return o;
                        };
                    }
                    function hi(t) {
                        return br(function (e, i) {
                            var n = -1,
                                r = null == e ? 0 : i.length,
                                o = r > 2 ? i[r - 2] : k,
                                s = r > 2 ? i[2] : k,
                                a = r > 1 ? i[r - 1] : k;
                            for ("function" == typeof o ? ((o = ai(o, a, 5)), (r -= 2)) : ((o = "function" == typeof a ? a : k), (r -= o ? 1 : 0)), s && tn(i[0], i[1], s) && ((o = 3 > r ? k : o), (r = 1)); ++n < r; ) {
                                var l = i[n];
                                l && t(e, l, o);
                            }
                            return e;
                        });
                    }
                    function pi(t, e) {
                        return function (i, n) {
                            var r = i ? qs(i) : 0;
                            if (!rn(r)) return t(i, n);
                            for (var o = e ? r : -1, s = pn(i); (e ? o-- : ++o < r) && n(s[o], o, s) !== !1; );
                            return i;
                        };
                    }
                    function fi(t) {
                        return function (e, i, n) {
                            for (var r = pn(e), o = n(e), s = o.length, a = t ? s : -1; t ? a-- : ++a < s; ) {
                                var l = o[a];
                                if (i(r[l], l, r) === !1) break;
                            }
                            return e;
                        };
                    }
                    function vi(t, e) {
                        function i() {
                            var r = this && this !== re && this instanceof i ? n : t;
                            return r.apply(e, arguments);
                        }
                        var n = Ti(t);
                        return i;
                    }
                    function gi(t) {
                        return ys && fs ? new Qt(t) : null;
                    }
                    function mi(t) {
                        return function (e) {
                            for (var i = -1, n = ko(po(e)), r = n.length, o = ""; ++i < r; ) o = t(o, n[i], i);
                            return o;
                        };
                    }
                    function Ti(t) {
                        return function () {
                            var e = arguments;
                            switch (e.length) {
                                case 0:
                                    return new t();
                                case 1:
                                    return new t(e[0]);
                                case 2:
                                    return new t(e[0], e[1]);
                                case 3:
                                    return new t(e[0], e[1], e[2]);
                                case 4:
                                    return new t(e[0], e[1], e[2], e[3]);
                                case 5:
                                    return new t(e[0], e[1], e[2], e[3], e[4]);
                                case 6:
                                    return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                                case 7:
                                    return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
                            }
                            var i = Xs(t.prototype),
                                n = t.apply(i, e);
                            return Nr(n) ? n : i;
                        };
                    }
                    function bi(t) {
                        function e(i, n, r) {
                            r && tn(i, n, r) && (n = k);
                            var o = Li(i, t, k, k, k, k, k, n);
                            return (o.placeholder = e.placeholder), o;
                        }
                        return e;
                    }
                    function yi(t, e) {
                        return br(function (i) {
                            var n = i[0];
                            return null == n ? n : (i.push(e), t.apply(k, i));
                        });
                    }
                    function Si(t, e) {
                        return function (i, n, r) {
                            if ((r && tn(i, n, r) && (n = k), (n = $i(n, r, 3)), 1 == n.length)) {
                                i = Ba(i) ? i : hn(i);
                                var o = le(i, n, t, e);
                                if (!i.length || o !== e) return o;
                            }
                            return ke(i, n, t, e);
                        };
                    }
                    function xi(t, e) {
                        return function (i, n, r) {
                            if (((n = $i(n, r, 3)), Ba(i))) {
                                var o = s(i, n, e);
                                return o > -1 ? i[o] : k;
                            }
                            return _e(i, n, t);
                        };
                    }
                    function wi(t) {
                        return function (e, i, n) {
                            return e && e.length ? ((i = $i(i, n, 3)), s(e, i, t)) : -1;
                        };
                    }
                    function Pi(t) {
                        return function (e, i, n) {
                            return (i = $i(i, n, 3)), _e(e, i, t, !0);
                        };
                    }
                    function Ai(t) {
                        return function () {
                            for (var e, i = arguments.length, r = t ? i : -1, o = 0, s = jo(i); t ? r-- : ++r < i; ) {
                                var a = (s[o++] = arguments[r]);
                                if ("function" != typeof a) throw new Zo(V);
                                !e && n.prototype.thru && "wrapper" == ji(a) && (e = new n([], !0));
                            }
                            for (r = e ? -1 : i; ++r < i; ) {
                                a = s[r];
                                var l = ji(a),
                                    c = "wrapper" == l ? Us(a) : k;
                                e = c && nn(c[0]) && c[1] == (N | G | I | O) && !c[4].length && 1 == c[9] ? e[ji(c[0])].apply(e, c[3]) : 1 == a.length && nn(a) ? e[l]() : e.thru(a);
                            }
                            return function () {
                                var t = arguments,
                                    n = t[0];
                                if (e && 1 == t.length && Ba(n) && n.length >= $) return e.plant(n).value();
                                for (var r = 0, o = i ? s[r].apply(this, t) : n; ++r < i; ) o = s[r].call(this, o);
                                return o;
                            };
                        };
                    }
                    function Ci(t, e) {
                        return function (i, n, r) {
                            return "function" == typeof n && r === k && Ba(i) ? t(i, n) : e(i, ai(n, r, 3));
                        };
                    }
                    function ki(t) {
                        return function (e, i, n) {
                            return ("function" != typeof i || n !== k) && (i = ai(i, n, 3)), t(e, i, io);
                        };
                    }
                    function Mi(t) {
                        return function (e, i, n) {
                            return ("function" != typeof i || n !== k) && (i = ai(i, n, 3)), t(e, i);
                        };
                    }
                    function Ei(t) {
                        return function (e, i, n) {
                            var r = {};
                            return (
                                (i = $i(i, n, 3)),
                                De(e, function (e, n, o) {
                                    var s = i(e, n, o);
                                    (n = t ? s : n), (e = t ? e : s), (r[n] = e);
                                }),
                                r
                            );
                        };
                    }
                    function _i(t) {
                        return function (e, i, n) {
                            return (e = c(e)), (t ? e : "") + Ii(e, i, n) + (t ? "" : e);
                        };
                    }
                    function Hi(t) {
                        var e = br(function (i, n) {
                            var r = S(n, e.placeholder);
                            return Li(i, t, k, n, r);
                        });
                        return e;
                    }
                    function Gi(t, e) {
                        return function (i, n, r, o) {
                            var s = arguments.length < 3;
                            return "function" == typeof n && o === k && Ba(i) ? t(i, n, r, s) : Ye(i, $i(n, o, 4), r, s, e);
                        };
                    }
                    function Di(t, e, i, n, r, o, s, a, l, c) {
                        function u() {
                            for (var T = arguments.length, b = T, y = jo(T); b--; ) y[b] = arguments[b];
                            if ((n && (y = ci(y, n, r)), o && (y = ui(y, o, s)), f || g)) {
                                var x = u.placeholder,
                                    w = S(y, x);
                                if (((T -= w.length), c > T)) {
                                    var P = a ? ee(a) : k,
                                        A = As(c - T, 0),
                                        C = f ? w : k,
                                        M = f ? k : w,
                                        H = f ? y : k,
                                        G = f ? k : y;
                                    (e |= f ? I : B), (e &= ~(f ? B : I)), v || (e &= ~(E | _));
                                    var D = [t, e, i, H, C, G, M, P, l, A],
                                        N = Di.apply(k, D);
                                    return nn(t) && Ys(N, D), (N.placeholder = x), N;
                                }
                            }
                            var O = h ? i : this,
                                L = p ? O[t] : t;
                            return a && (y = un(y, a)), d && l < y.length && (y.length = l), this && this !== re && this instanceof u && (L = m || Ti(t)), L.apply(O, y);
                        }
                        var d = e & N,
                            h = e & E,
                            p = e & _,
                            f = e & G,
                            v = e & H,
                            g = e & D,
                            m = p ? k : Ti(t);
                        return u;
                    }
                    function Ii(t, e, i) {
                        var n = t.length;
                        if (((e = +e), n >= e || !ws(e))) return "";
                        var r = e - n;
                        return (i = null == i ? " " : i + ""), bo(i, bs(r / i.length)).slice(0, r);
                    }
                    function Bi(t, e, i, n) {
                        function r() {
                            for (var e = -1, a = arguments.length, l = -1, c = n.length, u = jo(c + a); ++l < c; ) u[l] = n[l];
                            for (; a--; ) u[l++] = arguments[++e];
                            var d = this && this !== re && this instanceof r ? s : t;
                            return d.apply(o ? i : this, u);
                        }
                        var o = e & E,
                            s = Ti(t);
                        return r;
                    }
                    function Ni(t) {
                        var e = Uo[t];
                        return function (t, i) {
                            return (i = i === k ? 0 : +i || 0), i ? ((i = hs(10, i)), e(t * i) / i) : e(t);
                        };
                    }
                    function Oi(t) {
                        return function (e, i, n, r) {
                            var o = $i(n);
                            return null == n && o === xe ? oi(e, i, t) : si(e, i, o(n, r, 1), t);
                        };
                    }
                    function Li(t, e, i, n, r, o, s, a) {
                        var l = e & _;
                        if (!l && "function" != typeof t) throw new Zo(V);
                        var c = n ? n.length : 0;
                        if ((c || ((e &= ~(I | B)), (n = r = k)), (c -= r ? r.length : 0), e & B)) {
                            var u = n,
                                d = r;
                            n = r = k;
                        }
                        var h = l ? k : Us(t),
                            p = [t, e, i, n, r, u, d, o, s, a];
                        if ((h && (sn(p, h), (e = p[1]), (a = p[9])), (p[9] = null == a ? (l ? 0 : t.length) : As(a - c, 0) || 0), e == E)) var f = vi(p[0], p[2]);
                        else f = (e != I && e != (E | I)) || p[4].length ? Di.apply(k, p) : Bi.apply(k, p);
                        var v = h ? zs : Ys;
                        return v(f, p);
                    }
                    function Ri(t, e, i, n, r, o, s) {
                        var a = -1,
                            l = t.length,
                            c = e.length;
                        if (l != c && !(r && c > l)) return !1;
                        for (; ++a < l; ) {
                            var u = t[a],
                                d = e[a],
                                h = n ? n(r ? d : u, r ? u : d, a) : k;
                            if (h !== k) {
                                if (h) continue;
                                return !1;
                            }
                            if (r) {
                                if (
                                    !fe(e, function (t) {
                                        return u === t || i(u, t, n, r, o, s);
                                    })
                                )
                                    return !1;
                            } else if (u !== d && !i(u, d, n, r, o, s)) return !1;
                        }
                        return !0;
                    }
                    function Wi(t, e, i) {
                        switch (i) {
                            case Y:
                            case K:
                                return +t == +e;
                            case Q:
                                return t.name == e.name && t.message == e.message;
                            case tt:
                                return t != +t ? e != +e : t == +e;
                            case it:
                            case rt:
                                return t == e + "";
                        }
                        return !1;
                    }
                    function Xi(t, e, i, n, r, o, s) {
                        var a = za(t),
                            l = a.length,
                            c = za(e),
                            u = c.length;
                        if (l != u && !r) return !1;
                        for (var d = l; d--; ) {
                            var h = a[d];
                            if (!(r ? h in e : rs.call(e, h))) return !1;
                        }
                        for (var p = r; ++d < l; ) {
                            h = a[d];
                            var f = t[h],
                                v = e[h],
                                g = n ? n(r ? v : f, r ? f : v, h) : k;
                            if (!(g === k ? i(f, v, n, r, o, s) : g)) return !1;
                            p || (p = "constructor" == h);
                        }
                        if (!p) {
                            var m = t.constructor,
                                T = e.constructor;
                            if (m != T && "constructor" in t && "constructor" in e && !("function" == typeof m && m instanceof m && "function" == typeof T && T instanceof T)) return !1;
                        }
                        return !0;
                    }
                    function $i(t, i, n) {
                        var r = e.callback || Mo;
                        return (r = r === Mo ? xe : r), n ? r(t, i, n) : r;
                    }
                    function ji(t) {
                        for (var e = t.name + "", i = Os[e], n = i ? i.length : 0; n--; ) {
                            var r = i[n],
                                o = r.func;
                            if (null == o || o == t) return r.name;
                        }
                        return e;
                    }
                    function Fi(t, i, n) {
                        var r = e.indexOf || Cn;
                        return (r = r === Cn ? a : r), t ? r(t, i, n) : r;
                    }
                    function Vi(t) {
                        for (var e = no(t), i = e.length; i--; ) e[i][2] = on(e[i][1]);
                        return e;
                    }
                    function zi(t, e) {
                        var i = null == t ? k : t[e];
                        return Rr(i) ? i : k;
                    }
                    function Ui(t, e, i) {
                        for (var n = -1, r = i.length; ++n < r; ) {
                            var o = i[n],
                                s = o.size;
                            switch (o.type) {
                                case "drop":
                                    t += s;
                                    break;
                                case "dropRight":
                                    e -= s;
                                    break;
                                case "take":
                                    e = Cs(e, t + s);
                                    break;
                                case "takeRight":
                                    t = As(t, e - s);
                            }
                        }
                        return { start: t, end: e };
                    }
                    function qi(t) {
                        var e = t.length,
                            i = new t.constructor(e);
                        return e && "string" == typeof t[0] && rs.call(t, "index") && ((i.index = t.index), (i.input = t.input)), i;
                    }
                    function Yi(t) {
                        var e = t.constructor;
                        return ("function" == typeof e && e instanceof e) || (e = Yo), new e();
                    }
                    function Ki(t, e, i) {
                        var n = t.constructor;
                        switch (e) {
                            case st:
                                return li(t);
                            case Y:
                            case K:
                                return new n(+t);
                            case at:
                            case lt:
                            case ct:
                            case ut:
                            case dt:
                            case ht:
                            case pt:
                            case ft:
                            case vt:
                                n instanceof n && (n = Ls[e]);
                                var r = t.buffer;
                                return new n(i ? li(r) : r, t.byteOffset, t.length);
                            case tt:
                            case rt:
                                return new n(t);
                            case it:
                                var o = new n(t.source, It.exec(t));
                                o.lastIndex = t.lastIndex;
                        }
                        return o;
                    }
                    function Qi(t, e, i) {
                        null == t || en(e, t) || ((e = fn(e)), (t = 1 == e.length ? t : Ne(t, Ke(e, 0, -1))), (e = Mn(e)));
                        var n = null == t ? t : t[e];
                        return null == n ? k : n.apply(t, i);
                    }
                    function Zi(t) {
                        return null != t && rn(qs(t));
                    }
                    function Ji(t, e) {
                        return (t = "number" == typeof t || Ot.test(t) ? +t : -1), (e = null == e ? Bs : e), t > -1 && t % 1 == 0 && e > t;
                    }
                    function tn(t, e, i) {
                        if (!Nr(i)) return !1;
                        var n = typeof e;
                        if ("number" == n ? Zi(i) && Ji(e, i.length) : "string" == n && e in i) {
                            var r = i[e];
                            return t === t ? t === r : r !== r;
                        }
                        return !1;
                    }
                    function en(t, e) {
                        var i = typeof t;
                        if (("string" == i && kt.test(t)) || "number" == i) return !0;
                        if (Ba(t)) return !1;
                        var n = !Ct.test(t);
                        return n || (null != e && t in pn(e));
                    }
                    function nn(t) {
                        var i = ji(t),
                            n = e[i];
                        if ("function" != typeof n || !(i in r.prototype)) return !1;
                        if (t === n) return !0;
                        var o = Us(n);
                        return !!o && t === o[0];
                    }
                    function rn(t) {
                        return "number" == typeof t && t > -1 && t % 1 == 0 && Bs >= t;
                    }
                    function on(t) {
                        return t === t && !Nr(t);
                    }
                    function sn(t, e) {
                        var i = t[1],
                            n = e[1],
                            r = i | n,
                            o = N > r,
                            s = (n == N && i == G) || (n == N && i == O && t[7].length <= e[8]) || (n == (N | O) && i == G);
                        if (!o && !s) return t;
                        n & E && ((t[2] = e[2]), (r |= i & E ? 0 : H));
                        var a = e[3];
                        if (a) {
                            var l = t[3];
                            (t[3] = l ? ci(l, a, e[4]) : ee(a)), (t[4] = l ? S(t[3], z) : ee(e[4]));
                        }
                        return (
                            (a = e[5]),
                            a && ((l = t[5]), (t[5] = l ? ui(l, a, e[6]) : ee(a)), (t[6] = l ? S(t[5], z) : ee(e[6]))),
                            (a = e[7]),
                            a && (t[7] = ee(a)),
                            n & N && (t[8] = null == t[8] ? e[8] : Cs(t[8], e[8])),
                            null == t[9] && (t[9] = e[9]),
                            (t[0] = e[0]),
                            (t[1] = r),
                            t
                        );
                    }
                    function an(t, e) {
                        return t === k ? e : Na(t, e, an);
                    }
                    function ln(t, e) {
                        t = pn(t);
                        for (var i = -1, n = e.length, r = {}; ++i < n; ) {
                            var o = e[i];
                            o in t && (r[o] = t[o]);
                        }
                        return r;
                    }
                    function cn(t, e) {
                        var i = {};
                        return (
                            Ge(t, function (t, n, r) {
                                e(t, n, r) && (i[n] = t);
                            }),
                            i
                        );
                    }
                    function un(t, e) {
                        for (var i = t.length, n = Cs(e.length, i), r = ee(t); n--; ) {
                            var o = e[n];
                            t[n] = Ji(o, i) ? r[o] : k;
                        }
                        return t;
                    }
                    function dn(t) {
                        for (var e = io(t), i = e.length, n = i && t.length, r = !!n && rn(n) && (Ba(t) || kr(t) || Fr(t)), o = -1, s = []; ++o < i; ) {
                            var a = e[o];
                            ((r && Ji(a, n)) || rs.call(t, a)) && s.push(a);
                        }
                        return s;
                    }
                    function hn(t) {
                        return null == t ? [] : Zi(t) ? (e.support.unindexedChars && Fr(t) ? t.split("") : Nr(t) ? t : Yo(t)) : ao(t);
                    }
                    function pn(t) {
                        if (e.support.unindexedChars && Fr(t)) {
                            for (var i = -1, n = t.length, r = Yo(t); ++i < n; ) r[i] = t.charAt(i);
                            return r;
                        }
                        return Nr(t) ? t : Yo(t);
                    }
                    function fn(t) {
                        if (Ba(t)) return t;
                        var e = [];
                        return (
                            c(t).replace(Mt, function (t, i, n, r) {
                                e.push(n ? r.replace(Gt, "$1") : i || t);
                            }),
                            e
                        );
                    }
                    function vn(t) {
                        return t instanceof r ? t.clone() : new n(t.__wrapped__, t.__chain__, ee(t.__actions__));
                    }
                    function gn(t, e, i) {
                        e = (i ? tn(t, e, i) : null == e) ? 1 : As(Ss(e) || 1, 1);
                        for (var n = 0, r = t ? t.length : 0, o = -1, s = jo(bs(r / e)); r > n; ) s[++o] = Ke(t, n, (n += e));
                        return s;
                    }
                    function mn(t) {
                        for (var e = -1, i = t ? t.length : 0, n = -1, r = []; ++e < i; ) {
                            var o = t[e];
                            o && (r[++n] = o);
                        }
                        return r;
                    }
                    function Tn(t, e, i) {
                        var n = t ? t.length : 0;
                        return n ? ((i ? tn(t, e, i) : null == e) && (e = 1), Ke(t, 0 > e ? 0 : e)) : [];
                    }
                    function bn(t, e, i) {
                        var n = t ? t.length : 0;
                        return n ? ((i ? tn(t, e, i) : null == e) && (e = 1), (e = n - (+e || 0)), Ke(t, 0, 0 > e ? 0 : e)) : [];
                    }
                    function yn(t, e, i) {
                        return t && t.length ? ni(t, $i(e, i, 3), !0, !0) : [];
                    }
                    function Sn(t, e, i) {
                        return t && t.length ? ni(t, $i(e, i, 3), !0) : [];
                    }
                    function xn(t, e, i, n) {
                        var r = t ? t.length : 0;
                        return r ? (i && "number" != typeof i && tn(t, e, i) && ((i = 0), (n = r)), Me(t, e, i, n)) : [];
                    }
                    function wn(t) {
                        return t ? t[0] : k;
                    }
                    function Pn(t, e, i) {
                        var n = t ? t.length : 0;
                        return i && tn(t, e, i) && (e = !1), n ? He(t, e) : [];
                    }
                    function An(t) {
                        var e = t ? t.length : 0;
                        return e ? He(t, !0) : [];
                    }
                    function Cn(t, e, i) {
                        var n = t ? t.length : 0;
                        if (!n) return -1;
                        if ("number" == typeof i) i = 0 > i ? As(n + i, 0) : i;
                        else if (i) {
                            var r = oi(t, e);
                            return n > r && (e === e ? e === t[r] : t[r] !== t[r]) ? r : -1;
                        }
                        return a(t, e, i || 0);
                    }
                    function kn(t) {
                        return bn(t, 1);
                    }
                    function Mn(t) {
                        var e = t ? t.length : 0;
                        return e ? t[e - 1] : k;
                    }
                    function En(t, e, i) {
                        var n = t ? t.length : 0;
                        if (!n) return -1;
                        var r = n;
                        if ("number" == typeof i) r = (0 > i ? As(n + i, 0) : Cs(i || 0, n - 1)) + 1;
                        else if (i) {
                            r = oi(t, e, !0) - 1;
                            var o = t[r];
                            return (e === e ? e === o : o !== o) ? r : -1;
                        }
                        if (e !== e) return T(t, r, !0);
                        for (; r--; ) if (t[r] === e) return r;
                        return -1;
                    }
                    function _n() {
                        var t = arguments,
                            e = t[0];
                        if (!e || !e.length) return e;
                        for (var i = 0, n = Fi(), r = t.length; ++i < r; ) for (var o = 0, s = t[i]; (o = n(e, s, o)) > -1; ) gs.call(e, o, 1);
                        return e;
                    }
                    function Hn(t, e, i) {
                        var n = [];
                        if (!t || !t.length) return n;
                        var r = -1,
                            o = [],
                            s = t.length;
                        for (e = $i(e, i, 3); ++r < s; ) {
                            var a = t[r];
                            e(a, r, t) && (n.push(a), o.push(r));
                        }
                        return Ue(t, o), n;
                    }
                    function Gn(t) {
                        return Tn(t, 1);
                    }
                    function Dn(t, e, i) {
                        var n = t ? t.length : 0;
                        return n ? (i && "number" != typeof i && tn(t, e, i) && ((e = 0), (i = n)), Ke(t, e, i)) : [];
                    }
                    function In(t, e, i) {
                        var n = t ? t.length : 0;
                        return n ? ((i ? tn(t, e, i) : null == e) && (e = 1), Ke(t, 0, 0 > e ? 0 : e)) : [];
                    }
                    function Bn(t, e, i) {
                        var n = t ? t.length : 0;
                        return n ? ((i ? tn(t, e, i) : null == e) && (e = 1), (e = n - (+e || 0)), Ke(t, 0 > e ? 0 : e)) : [];
                    }
                    function Nn(t, e, i) {
                        return t && t.length ? ni(t, $i(e, i, 3), !1, !0) : [];
                    }
                    function On(t, e, i) {
                        return t && t.length ? ni(t, $i(e, i, 3)) : [];
                    }
                    function Ln(t, e, i, n) {
                        var r = t ? t.length : 0;
                        if (!r) return [];
                        null != e && "boolean" != typeof e && ((n = i), (i = tn(t, e, n) ? k : e), (e = !1));
                        var o = $i();
                        return (null != i || o !== xe) && (i = o(i, n, 3)), e && Fi() === a ? x(t, i) : ei(t, i);
                    }
                    function Rn(t) {
                        if (!t || !t.length) return [];
                        var e = -1,
                            i = 0;
                        t = ce(t, function (t) {
                            return Zi(t) ? ((i = As(t.length, i)), !0) : void 0;
                        });
                        for (var n = jo(i); ++e < i; ) n[e] = ue(t, Ve(e));
                        return n;
                    }
                    function Wn(t, e, i) {
                        var n = t ? t.length : 0;
                        if (!n) return [];
                        var r = Rn(t);
                        return null == e
                            ? r
                            : ((e = ai(e, i, 4)),
                              ue(r, function (t) {
                                  return he(t, e, k, !0);
                              }));
                    }
                    function Xn() {
                        for (var t = -1, e = arguments.length; ++t < e; ) {
                            var i = arguments[t];
                            if (Zi(i)) var n = n ? de(Ae(n, i), Ae(i, n)) : i;
                        }
                        return n ? ei(n) : [];
                    }
                    function $n(t, e) {
                        var i = -1,
                            n = t ? t.length : 0,
                            r = {};
                        for (!n || e || Ba(t[0]) || (e = []); ++i < n; ) {
                            var o = t[i];
                            e ? (r[o] = e[i]) : o && (r[o[0]] = o[1]);
                        }
                        return r;
                    }
                    function jn(t) {
                        var i = e(t);
                        return (i.__chain__ = !0), i;
                    }
                    function Fn(t, e, i) {
                        return e.call(i, t), t;
                    }
                    function Vn(t, e, i) {
                        return e.call(i, t);
                    }
                    function zn() {
                        return jn(this);
                    }
                    function Un() {
                        return new n(this.value(), this.__chain__);
                    }
                    function qn(t) {
                        for (var e, n = this; n instanceof i; ) {
                            var r = vn(n);
                            e ? (o.__wrapped__ = r) : (e = r);
                            var o = r;
                            n = n.__wrapped__;
                        }
                        return (o.__wrapped__ = t), e;
                    }
                    function Yn() {
                        var t = this.__wrapped__,
                            e = function (t) {
                                return t.reverse();
                            };
                        if (t instanceof r) {
                            var i = t;
                            return this.__actions__.length && (i = new r(this)), (i = i.reverse()), i.__actions__.push({ func: Vn, args: [e], thisArg: k }), new n(i, this.__chain__);
                        }
                        return this.thru(e);
                    }
                    function Kn() {
                        return this.value() + "";
                    }
                    function Qn() {
                        return ri(this.__wrapped__, this.__actions__);
                    }
                    function Zn(t, e, i) {
                        var n = Ba(t) ? ae : Ce;
                        return i && tn(t, e, i) && (e = k), ("function" != typeof e || i !== k) && (e = $i(e, i, 3)), n(t, e);
                    }
                    function Jn(t, e, i) {
                        var n = Ba(t) ? ce : Ee;
                        return (e = $i(e, i, 3)), n(t, e);
                    }
                    function tr(t, e) {
                        return ua(t, Xe(e));
                    }
                    function er(t, e, i, n) {
                        var r = t ? qs(t) : 0;
                        return (
                            rn(r) || ((t = ao(t)), (r = t.length)),
                            (i = "number" != typeof i || (n && tn(e, i, n)) ? 0 : 0 > i ? As(r + i, 0) : i || 0),
                            "string" == typeof t || (!Ba(t) && Fr(t)) ? r >= i && t.indexOf(e, i) > -1 : !!r && Fi(t, e, i) > -1
                        );
                    }
                    function ir(t, e, i) {
                        var n = Ba(t) ? ue : We;
                        return (e = $i(e, i, 3)), n(t, e);
                    }
                    function nr(t, e) {
                        return ir(t, No(e));
                    }
                    function rr(t, e, i) {
                        var n = Ba(t) ? ce : Ee;
                        return (
                            (e = $i(e, i, 3)),
                            n(t, function (t, i, n) {
                                return !e(t, i, n);
                            })
                        );
                    }
                    function or(t, e, i) {
                        if (i ? tn(t, e, i) : null == e) {
                            t = hn(t);
                            var n = t.length;
                            return n > 0 ? t[qe(0, n - 1)] : k;
                        }
                        var r = -1,
                            o = Yr(t),
                            n = o.length,
                            s = n - 1;
                        for (e = Cs(0 > e ? 0 : +e || 0, n); ++r < e; ) {
                            var a = qe(r, s),
                                l = o[a];
                            (o[a] = o[r]), (o[r] = l);
                        }
                        return (o.length = e), o;
                    }
                    function sr(t) {
                        return or(t, Hs);
                    }
                    function ar(t) {
                        var e = t ? qs(t) : 0;
                        return rn(e) ? e : za(t).length;
                    }
                    function lr(t, e, i) {
                        var n = Ba(t) ? fe : Qe;
                        return i && tn(t, e, i) && (e = k), ("function" != typeof e || i !== k) && (e = $i(e, i, 3)), n(t, e);
                    }
                    function cr(t, e, i) {
                        if (null == t) return [];
                        i && tn(t, e, i) && (e = k);
                        var n = -1;
                        e = $i(e, i, 3);
                        var r = We(t, function (t, i, r) {
                            return { criteria: e(t, i, r), index: ++n, value: t };
                        });
                        return Ze(r, h);
                    }
                    function ur(t, e, i, n) {
                        return null == t ? [] : (n && tn(e, i, n) && (i = k), Ba(e) || (e = null == e ? [] : [e]), Ba(i) || (i = null == i ? [] : [i]), Je(t, e, i));
                    }
                    function dr(t, e) {
                        return Jn(t, Xe(e));
                    }
                    function hr(t, e) {
                        if ("function" != typeof e) {
                            if ("function" != typeof t) throw new Zo(V);
                            var i = t;
                            (t = e), (e = i);
                        }
                        return (
                            (t = ws((t = +t)) ? t : 0),
                            function () {
                                return --t < 1 ? e.apply(this, arguments) : void 0;
                            }
                        );
                    }
                    function pr(t, e, i) {
                        return i && tn(t, e, i) && (e = k), (e = t && null == e ? t.length : As(+e || 0, 0)), Li(t, N, k, k, k, k, e);
                    }
                    function fr(t, e) {
                        var i;
                        if ("function" != typeof e) {
                            if ("function" != typeof t) throw new Zo(V);
                            var n = t;
                            (t = e), (e = n);
                        }
                        return function () {
                            return --t > 0 && (i = e.apply(this, arguments)), 1 >= t && (e = k), i;
                        };
                    }
                    function vr(t, e, i) {
                        function n() {
                            p && us(p), c && us(c), (v = 0), (c = p = f = k);
                        }
                        function r(e, i) {
                            i && us(i), (c = p = f = k), e && ((v = Sa()), (u = t.apply(h, l)), p || c || (l = h = k));
                        }
                        function o() {
                            var t = e - (Sa() - d);
                            0 >= t || t > e ? r(f, c) : (p = vs(o, t));
                        }
                        function s() {
                            r(m, p);
                        }
                        function a() {
                            if (((l = arguments), (d = Sa()), (h = this), (f = m && (p || !T)), g === !1)) var i = T && !p;
                            else {
                                c || T || (v = d);
                                var n = g - (d - v),
                                    r = 0 >= n || n > g;
                                r ? (c && (c = us(c)), (v = d), (u = t.apply(h, l))) : c || (c = vs(s, n));
                            }
                            return r && p ? (p = us(p)) : p || e === g || (p = vs(o, e)), i && ((r = !0), (u = t.apply(h, l))), !r || p || c || (l = h = k), u;
                        }
                        var l,
                            c,
                            u,
                            d,
                            h,
                            p,
                            f,
                            v = 0,
                            g = !1,
                            m = !0;
                        if ("function" != typeof t) throw new Zo(V);
                        if (((e = 0 > e ? 0 : +e || 0), i === !0)) {
                            var T = !0;
                            m = !1;
                        } else Nr(i) && ((T = !!i.leading), (g = "maxWait" in i && As(+i.maxWait || 0, e)), (m = "trailing" in i ? !!i.trailing : m));
                        return (a.cancel = n), a;
                    }
                    function gr(t, e) {
                        if ("function" != typeof t || (e && "function" != typeof e)) throw new Zo(V);
                        var i = function () {
                            var n = arguments,
                                r = e ? e.apply(this, n) : n[0],
                                o = i.cache;
                            if (o.has(r)) return o.get(r);
                            var s = t.apply(this, n);
                            return (i.cache = o.set(r, s)), s;
                        };
                        return (i.cache = new gr.Cache()), i;
                    }
                    function mr(t) {
                        if ("function" != typeof t) throw new Zo(V);
                        return function () {
                            return !t.apply(this, arguments);
                        };
                    }
                    function Tr(t) {
                        return fr(2, t);
                    }
                    function br(t, e) {
                        if ("function" != typeof t) throw new Zo(V);
                        return (
                            (e = As(e === k ? t.length - 1 : +e || 0, 0)),
                            function () {
                                for (var i = arguments, n = -1, r = As(i.length - e, 0), o = jo(r); ++n < r; ) o[n] = i[e + n];
                                switch (e) {
                                    case 0:
                                        return t.call(this, o);
                                    case 1:
                                        return t.call(this, i[0], o);
                                    case 2:
                                        return t.call(this, i[0], i[1], o);
                                }
                                var s = jo(e + 1);
                                for (n = -1; ++n < e; ) s[n] = i[n];
                                return (s[e] = o), t.apply(this, s);
                            }
                        );
                    }
                    function yr(t) {
                        if ("function" != typeof t) throw new Zo(V);
                        return function (e) {
                            return t.apply(this, e);
                        };
                    }
                    function Sr(t, e, i) {
                        var n = !0,
                            r = !0;
                        if ("function" != typeof t) throw new Zo(V);
                        return i === !1 ? (n = !1) : Nr(i) && ((n = "leading" in i ? !!i.leading : n), (r = "trailing" in i ? !!i.trailing : r)), vr(t, e, { leading: n, maxWait: +e, trailing: r });
                    }
                    function xr(t, e) {
                        return (e = null == e ? _o : e), Li(e, I, k, [t], []);
                    }
                    function wr(t, e, i, n) {
                        return e && "boolean" != typeof e && tn(t, e, i) ? (e = !1) : "function" == typeof e && ((n = i), (i = e), (e = !1)), "function" == typeof i ? we(t, e, ai(i, n, 3)) : we(t, e);
                    }
                    function Pr(t, e, i) {
                        return "function" == typeof e ? we(t, !0, ai(e, i, 3)) : we(t, !0);
                    }
                    function Ar(t, e) {
                        return t > e;
                    }
                    function Cr(t, e) {
                        return t >= e;
                    }
                    function kr(t) {
                        return b(t) && Zi(t) && rs.call(t, "callee") && !ps.call(t, "callee");
                    }
                    function Mr(t) {
                        return t === !0 || t === !1 || (b(t) && ss.call(t) == Y);
                    }
                    function Er(t) {
                        return b(t) && ss.call(t) == K;
                    }
                    function _r(t) {
                        return !!t && 1 === t.nodeType && b(t) && !$r(t);
                    }
                    function Hr(t) {
                        return null == t ? !0 : Zi(t) && (Ba(t) || Fr(t) || kr(t) || (b(t) && Br(t.splice))) ? !t.length : !za(t).length;
                    }
                    function Gr(t, e, i, n) {
                        i = "function" == typeof i ? ai(i, n, 3) : k;
                        var r = i ? i(t, e) : k;
                        return r === k ? Oe(t, e, i) : !!r;
                    }
                    function Dr(t) {
                        return b(t) && "string" == typeof t.message && ss.call(t) == Q;
                    }
                    function Ir(t) {
                        return "number" == typeof t && ws(t);
                    }
                    function Br(t) {
                        return Nr(t) && ss.call(t) == Z;
                    }
                    function Nr(t) {
                        var e = typeof t;
                        return !!t && ("object" == e || "function" == e);
                    }
                    function Or(t, e, i, n) {
                        return (i = "function" == typeof i ? ai(i, n, 3) : k), Re(t, Vi(e), i);
                    }
                    function Lr(t) {
                        return Xr(t) && t != +t;
                    }
                    function Rr(t) {
                        return null == t ? !1 : Br(t) ? ls.test(ns.call(t)) : b(t) && (oe(t) ? ls : Nt).test(t);
                    }
                    function Wr(t) {
                        return null === t;
                    }
                    function Xr(t) {
                        return "number" == typeof t || (b(t) && ss.call(t) == tt);
                    }
                    function $r(t) {
                        var i;
                        if (!b(t) || ss.call(t) != et || oe(t) || kr(t) || (!rs.call(t, "constructor") && ((i = t.constructor), "function" == typeof i && !(i instanceof i)))) return !1;
                        var n;
                        return e.support.ownLast
                            ? (Ge(t, function (t, e, i) {
                                  return (n = rs.call(i, e)), !1;
                              }),
                              n !== !1)
                            : (Ge(t, function (t, e) {
                                  n = e;
                              }),
                              n === k || rs.call(t, n));
                    }
                    function jr(t) {
                        return Nr(t) && ss.call(t) == it;
                    }
                    function Fr(t) {
                        return "string" == typeof t || (b(t) && ss.call(t) == rt);
                    }
                    function Vr(t) {
                        return b(t) && rn(t.length) && !!Vt[ss.call(t)];
                    }
                    function zr(t) {
                        return t === k;
                    }
                    function Ur(t, e) {
                        return e > t;
                    }
                    function qr(t, e) {
                        return e >= t;
                    }
                    function Yr(t) {
                        var i = t ? qs(t) : 0;
                        return rn(i) ? (i ? (e.support.unindexedChars && Fr(t) ? t.split("") : ee(t)) : []) : ao(t);
                    }
                    function Kr(t) {
                        return Se(t, io(t));
                    }
                    function Qr(t, e, i) {
                        var n = Xs(t);
                        return i && tn(t, e, i) && (e = k), e ? be(n, e) : n;
                    }
                    function Zr(t) {
                        return Be(t, io(t));
                    }
                    function Jr(t, e, i) {
                        var n = null == t ? k : Ne(t, fn(e), e + "");
                        return n === k ? i : n;
                    }
                    function to(t, e) {
                        if (null == t) return !1;
                        var i = rs.call(t, e);
                        if (!i && !en(e)) {
                            if (((e = fn(e)), (t = 1 == e.length ? t : Ne(t, Ke(e, 0, -1))), null == t)) return !1;
                            (e = Mn(e)), (i = rs.call(t, e));
                        }
                        return i || (rn(t.length) && Ji(e, t.length) && (Ba(t) || kr(t) || Fr(t)));
                    }
                    function eo(t, e, i) {
                        i && tn(t, e, i) && (e = k);
                        for (var n = -1, r = za(t), o = r.length, s = {}; ++n < o; ) {
                            var a = r[n],
                                l = t[a];
                            e ? (rs.call(s, l) ? s[l].push(a) : (s[l] = [a])) : (s[l] = a);
                        }
                        return s;
                    }
                    function io(t) {
                        if (null == t) return [];
                        Nr(t) || (t = Yo(t));
                        var i = t.length,
                            n = e.support;
                        i = (i && rn(i) && (Ba(t) || kr(t) || Fr(t)) && i) || 0;
                        for (var r = t.constructor, o = -1, s = (Br(r) && r.prototype) || es, a = s === t, l = jo(i), c = i > 0, u = n.enumErrorProps && (t === ts || t instanceof Vo), d = n.enumPrototypes && Br(t); ++o < i; ) l[o] = o + "";
                        for (var h in t) (d && "prototype" == h) || (u && ("message" == h || "name" == h)) || (c && Ji(h, i)) || ("constructor" == h && (a || !rs.call(t, h))) || l.push(h);
                        if (n.nonEnumShadows && t !== es) {
                            var p = t === is ? rt : t === ts ? Q : ss.call(t),
                                f = Rs[p] || Rs[et];
                            for (p == et && (s = es), i = jt.length; i--; ) {
                                h = jt[i];
                                var v = f[h];
                                (a && v) || (v ? !rs.call(t, h) : t[h] === s[h]) || l.push(h);
                            }
                        }
                        return l;
                    }
                    function no(t) {
                        t = pn(t);
                        for (var e = -1, i = za(t), n = i.length, r = jo(n); ++e < n; ) {
                            var o = i[e];
                            r[e] = [o, t[o]];
                        }
                        return r;
                    }
                    function ro(t, e, i) {
                        var n = null == t ? k : pn(t)[e];
                        return n === k && (null == t || en(e, t) || ((e = fn(e)), (t = 1 == e.length ? t : Ne(t, Ke(e, 0, -1))), (n = null == t ? k : pn(t)[Mn(e)])), (n = n === k ? i : n)), Br(n) ? n.call(t) : n;
                    }
                    function oo(t, e, i) {
                        if (null == t) return t;
                        var n = e + "";
                        e = null != t[n] || en(e, t) ? [n] : fn(e);
                        for (var r = -1, o = e.length, s = o - 1, a = t; null != a && ++r < o; ) {
                            var l = e[r];
                            Nr(a) && (r == s ? (a[l] = i) : null == a[l] && (a[l] = Ji(e[r + 1]) ? [] : {})), (a = a[l]);
                        }
                        return t;
                    }
                    function so(t, e, i, n) {
                        var r = Ba(t) || Vr(t);
                        if (((e = $i(e, n, 4)), null == i))
                            if (r || Nr(t)) {
                                var o = t.constructor;
                                i = r ? (Ba(t) ? new o() : []) : Xs(Br(o) ? o.prototype : k);
                            } else i = {};
                        return (
                            (r ? ie : De)(t, function (t, n, r) {
                                return e(i, t, n, r);
                            }),
                            i
                        );
                    }
                    function ao(t) {
                        return ii(t, za(t));
                    }
                    function lo(t) {
                        return ii(t, io(t));
                    }
                    function co(t, e, i) {
                        return (e = +e || 0), i === k ? ((i = e), (e = 0)) : (i = +i || 0), t >= Cs(e, i) && t < As(e, i);
                    }
                    function uo(t, e, i) {
                        i && tn(t, e, i) && (e = i = k);
                        var n = null == t,
                            r = null == e;
                        if (
                            (null == i && (r && "boolean" == typeof t ? ((i = t), (t = 1)) : "boolean" == typeof e && ((i = e), (r = !0))),
                            n && r && ((e = 1), (r = !1)),
                            (t = +t || 0),
                            r ? ((e = t), (t = 0)) : (e = +e || 0),
                            i || t % 1 || e % 1)
                        ) {
                            var o = Es();
                            return Cs(t + o * (e - t + ds("1e-" + ((o + "").length - 1))), e);
                        }
                        return qe(t, e);
                    }
                    function ho(t) {
                        return (t = c(t)), t && t.charAt(0).toUpperCase() + t.slice(1);
                    }
                    function po(t) {
                        return (t = c(t)), t && t.replace(Lt, f).replace(Ht, "");
                    }
                    function fo(t, e, i) {
                        (t = c(t)), (e += "");
                        var n = t.length;
                        return (i = i === k ? n : Cs(0 > i ? 0 : +i || 0, n)), (i -= e.length), i >= 0 && t.indexOf(e, i) == i;
                    }
                    function vo(t) {
                        return (t = c(t)), t && xt.test(t) ? t.replace(yt, v) : t;
                    }
                    function go(t) {
                        return (t = c(t)), t && _t.test(t) ? t.replace(Et, g) : t || "(?:)";
                    }
                    function mo(t, e, i) {
                        (t = c(t)), (e = +e);
                        var n = t.length;
                        if (n >= e || !ws(e)) return t;
                        var r = (e - n) / 2,
                            o = Ss(r),
                            s = bs(r);
                        return (i = Ii("", s, i)), i.slice(0, o) + t + i;
                    }
                    function To(t, e, i) {
                        return (i ? tn(t, e, i) : null == e) ? (e = 0) : e && (e = +e), (t = xo(t)), Ms(t, e || (Bt.test(t) ? 16 : 10));
                    }
                    function bo(t, e) {
                        var i = "";
                        if (((t = c(t)), (e = +e), 1 > e || !t || !ws(e))) return i;
                        do e % 2 && (i += t), (e = Ss(e / 2)), (t += t);
                        while (e);
                        return i;
                    }
                    function yo(t, e, i) {
                        return (t = c(t)), (i = null == i ? 0 : Cs(0 > i ? 0 : +i || 0, t.length)), t.lastIndexOf(e, i) == i;
                    }
                    function So(t, i, n) {
                        var r = e.templateSettings;
                        n && tn(t, i, n) && (i = n = k), (t = c(t)), (i = Te(be({}, n || i), r, me));
                        var o,
                            s,
                            a = Te(be({}, i.imports), r.imports, me),
                            l = za(a),
                            u = ii(a, l),
                            d = 0,
                            h = i.interpolate || Rt,
                            p = "__p += '",
                            f = Ko((i.escape || Rt).source + "|" + h.source + "|" + (h === At ? Dt : Rt).source + "|" + (i.evaluate || Rt).source + "|$", "g"),
                            v = "//# sourceURL=" + ("sourceURL" in i ? i.sourceURL : "lodash.templateSources[" + ++Ft + "]") + "\n";
                        t.replace(f, function (e, i, n, r, a, l) {
                            return (
                                n || (n = r),
                                (p += t.slice(d, l).replace(Wt, m)),
                                i && ((o = !0), (p += "' +\n__e(" + i + ") +\n'")),
                                a && ((s = !0), (p += "';\n" + a + ";\n__p += '")),
                                n && (p += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"),
                                (d = l + e.length),
                                e
                            );
                        }),
                            (p += "';\n");
                        var g = i.variable;
                        g || (p = "with (obj) {\n" + p + "\n}\n"),
                            (p = (s ? p.replace(gt, "") : p).replace(mt, "$1").replace(Tt, "$1;")),
                            (p =
                                "function(" +
                                (g || "obj") +
                                ") {\n" +
                                (g ? "" : "obj || (obj = {});\n") +
                                "var __t, __p = ''" +
                                (o ? ", __e = _.escape" : "") +
                                (s ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") +
                                p +
                                "return __p\n}");
                        var T = nl(function () {
                            return zo(l, v + "return " + p).apply(k, u);
                        });
                        if (((T.source = p), Dr(T))) throw T;
                        return T;
                    }
                    function xo(t, e, i) {
                        var n = t;
                        return (t = c(t)) ? ((i ? tn(n, e, i) : null == e) ? t.slice(w(t), P(t) + 1) : ((e += ""), t.slice(u(t, e), d(t, e) + 1))) : t;
                    }
                    function wo(t, e, i) {
                        var n = t;
                        return (t = c(t)), t ? t.slice((i ? tn(n, e, i) : null == e) ? w(t) : u(t, e + "")) : t;
                    }
                    function Po(t, e, i) {
                        var n = t;
                        return (t = c(t)), t ? ((i ? tn(n, e, i) : null == e) ? t.slice(0, P(t) + 1) : t.slice(0, d(t, e + "") + 1)) : t;
                    }
                    function Ao(t, e, i) {
                        i && tn(t, e, i) && (e = k);
                        var n = L,
                            r = R;
                        if (null != e)
                            if (Nr(e)) {
                                var o = "separator" in e ? e.separator : o;
                                (n = "length" in e ? +e.length || 0 : n), (r = "omission" in e ? c(e.omission) : r);
                            } else n = +e || 0;
                        if (((t = c(t)), n >= t.length)) return t;
                        var s = n - r.length;
                        if (1 > s) return r;
                        var a = t.slice(0, s);
                        if (null == o) return a + r;

                        if (jr(o)) {
                            if (t.slice(s).search(o)) {
                                var l,
                                    u,
                                    d = t.slice(0, s);
                                for (o.global || (o = Ko(o.source, (It.exec(o) || "") + "g")), o.lastIndex = 0; (l = o.exec(d)); ) u = l.index;
                                a = a.slice(0, null == u ? s : u);
                            }
                        } else if (t.indexOf(o, s) != s) {
                            var h = a.lastIndexOf(o);
                            h > -1 && (a = a.slice(0, h));
                        }
                        return a + r;
                    }
                    function Co(t) {
                        return (t = c(t)), t && St.test(t) ? t.replace(bt, A) : t;
                    }
                    function ko(t, e, i) {
                        return i && tn(t, e, i) && (e = k), (t = c(t)), t.match(e || Xt) || [];
                    }
                    function Mo(t, e, i) {
                        return i && tn(t, e, i) && (e = k), b(t) ? Ho(t) : xe(t, e);
                    }
                    function Eo(t) {
                        return function () {
                            return t;
                        };
                    }
                    function _o(t) {
                        return t;
                    }
                    function Ho(t) {
                        return Xe(we(t, !0));
                    }
                    function Go(t, e) {
                        return $e(t, we(e, !0));
                    }
                    function Do(t, e, i) {
                        if (null == i) {
                            var n = Nr(e),
                                r = n ? za(e) : k,
                                o = r && r.length ? Be(e, r) : k;
                            (o ? o.length : n) || ((o = !1), (i = e), (e = t), (t = this));
                        }
                        o || (o = Be(e, za(e)));
                        var s = !0,
                            a = -1,
                            l = Br(t),
                            c = o.length;
                        i === !1 ? (s = !1) : Nr(i) && "chain" in i && (s = i.chain);
                        for (; ++a < c; ) {
                            var u = o[a],
                                d = e[u];
                            (t[u] = d),
                                l &&
                                    (t.prototype[u] = (function (e) {
                                        return function () {
                                            var i = this.__chain__;
                                            if (s || i) {
                                                var n = t(this.__wrapped__),
                                                    r = (n.__actions__ = ee(this.__actions__));
                                                return r.push({ func: e, args: arguments, thisArg: t }), (n.__chain__ = i), n;
                                            }
                                            return e.apply(t, de([this.value()], arguments));
                                        };
                                    })(d));
                        }
                        return t;
                    }
                    function Io() {
                        return (re._ = as), this;
                    }
                    function Bo() {}
                    function No(t) {
                        return en(t) ? Ve(t) : ze(t);
                    }
                    function Oo(t) {
                        return function (e) {
                            return Ne(t, fn(e), e + "");
                        };
                    }
                    function Lo(t, e, i) {
                        i && tn(t, e, i) && (e = i = k), (t = +t || 0), (i = null == i ? 1 : +i || 0), null == e ? ((e = t), (t = 0)) : (e = +e || 0);
                        for (var n = -1, r = As(bs((e - t) / (i || 1)), 0), o = jo(r); ++n < r; ) (o[n] = t), (t += i);
                        return o;
                    }
                    function Ro(t, e, i) {
                        if (((t = Ss(t)), 1 > t || !ws(t))) return [];
                        var n = -1,
                            r = jo(Cs(t, Gs));
                        for (e = ai(e, i, 1); ++n < t; ) Gs > n ? (r[n] = e(n)) : e(n);
                        return r;
                    }
                    function Wo(t) {
                        var e = ++os;
                        return c(t) + e;
                    }
                    function Xo(t, e) {
                        return (+t || 0) + (+e || 0);
                    }
                    function $o(t, e, i) {
                        return i && tn(t, e, i) && (e = k), (e = $i(e, i, 3)), 1 == e.length ? ve(Ba(t) ? t : hn(t), e) : ti(t, e);
                    }
                    t = t ? se.defaults(re.Object(), t, se.pick(re, $t)) : re;
                    var jo = t.Array,
                        Fo = t.Date,
                        Vo = t.Error,
                        zo = t.Function,
                        Uo = t.Math,
                        qo = t.Number,
                        Yo = t.Object,
                        Ko = t.RegExp,
                        Qo = t.String,
                        Zo = t.TypeError,
                        Jo = jo.prototype,
                        ts = Vo.prototype,
                        es = Yo.prototype,
                        is = Qo.prototype,
                        ns = zo.prototype.toString,
                        rs = es.hasOwnProperty,
                        os = 0,
                        ss = es.toString,
                        as = re._,
                        ls = Ko(
                            "^" +
                                ns
                                    .call(rs)
                                    .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                                    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
                                "$"
                        ),
                        cs = t.ArrayBuffer,
                        us = t.clearTimeout,
                        ds = t.parseFloat,
                        hs = Uo.pow,
                        ps = es.propertyIsEnumerable,
                        fs = zi(t, "Set"),
                        vs = t.setTimeout,
                        gs = Jo.splice,
                        ms = t.Uint8Array,
                        Ts = zi(t, "WeakMap"),
                        bs = Uo.ceil,
                        ys = zi(Yo, "create"),
                        Ss = Uo.floor,
                        xs = zi(jo, "isArray"),
                        ws = t.isFinite,
                        Ps = zi(Yo, "keys"),
                        As = Uo.max,
                        Cs = Uo.min,
                        ks = zi(Fo, "now"),
                        Ms = t.parseInt,
                        Es = Uo.random,
                        _s = qo.NEGATIVE_INFINITY,
                        Hs = qo.POSITIVE_INFINITY,
                        Gs = 4294967295,
                        Ds = Gs - 1,
                        Is = Gs >>> 1,
                        Bs = 9007199254740991,
                        Ns = Ts && new Ts(),
                        Os = {},
                        Ls = {};
                    (Ls[at] = t.Float32Array),
                        (Ls[lt] = t.Float64Array),
                        (Ls[ct] = t.Int8Array),
                        (Ls[ut] = t.Int16Array),
                        (Ls[dt] = t.Int32Array),
                        (Ls[ht] = ms),
                        (Ls[pt] = t.Uint8ClampedArray),
                        (Ls[ft] = t.Uint16Array),
                        (Ls[vt] = t.Uint32Array);
                    var Rs = {};
                    (Rs[q] = Rs[K] = Rs[tt] = { constructor: !0, toLocaleString: !0, toString: !0, valueOf: !0 }),
                        (Rs[Y] = Rs[rt] = { constructor: !0, toString: !0, valueOf: !0 }),
                        (Rs[Q] = Rs[Z] = Rs[it] = { constructor: !0, toString: !0 }),
                        (Rs[et] = { constructor: !0 }),
                        ie(jt, function (t) {
                            for (var e in Rs)
                                if (rs.call(Rs, e)) {
                                    var i = Rs[e];
                                    i[t] = rs.call(i, t);
                                }
                        });
                    var Ws = (e.support = {});
                    !(function (t) {
                        var e = function () {
                                this.x = t;
                            },
                            i = { 0: t, length: t },
                            n = [];
                        e.prototype = { valueOf: t, y: t };
                        for (var r in new e()) n.push(r);
                        (Ws.enumErrorProps = ps.call(ts, "message") || ps.call(ts, "name")),
                            (Ws.enumPrototypes = ps.call(e, "prototype")),
                            (Ws.nonEnumShadows = !/valueOf/.test(n)),
                            (Ws.ownLast = "x" != n[0]),
                            (Ws.spliceObjects = (gs.call(i, 0, 1), !i[0])),
                            (Ws.unindexedChars = "x"[0] + Yo("x")[0] != "xx");
                    })(1, 0),
                        (e.templateSettings = { escape: wt, evaluate: Pt, interpolate: At, variable: "", imports: { _: e } });
                    var Xs = (function () {
                            function t() {}
                            return function (e) {
                                if (Nr(e)) {
                                    t.prototype = e;
                                    var i = new t();
                                    t.prototype = k;
                                }
                                return i || {};
                            };
                        })(),
                        $s = pi(De),
                        js = pi(Ie, !0),
                        Fs = fi(),
                        Vs = fi(!0),
                        zs = Ns
                            ? function (t, e) {
                                  return Ns.set(t, e), t;
                              }
                            : _o,
                        Us = Ns
                            ? function (t) {
                                  return Ns.get(t);
                              }
                            : Bo,
                        qs = Ve("length"),
                        Ys = (function () {
                            var t = 0,
                                e = 0;
                            return function (i, n) {
                                var r = Sa(),
                                    o = X - (r - e);
                                if (((e = r), o > 0)) {
                                    if (++t >= W) return i;
                                } else t = 0;
                                return zs(i, n);
                            };
                        })(),
                        Ks = br(function (t, e) {
                            return b(t) && Zi(t) ? Ae(t, He(e, !1, !0)) : [];
                        }),
                        Qs = wi(),
                        Zs = wi(!0),
                        Js = br(function (t) {
                            for (var e = t.length, i = e, n = jo(d), r = Fi(), o = r === a, s = []; i--; ) {
                                var l = (t[i] = Zi((l = t[i])) ? l : []);
                                n[i] = o && l.length >= 120 ? gi(i && l) : null;
                            }
                            var c = t[0],
                                u = -1,
                                d = c ? c.length : 0,
                                h = n[0];
                            t: for (; ++u < d; )
                                if (((l = c[u]), (h ? Zt(h, l) : r(s, l, 0)) < 0)) {
                                    for (var i = e; --i; ) {
                                        var p = n[i];
                                        if ((p ? Zt(p, l) : r(t[i], l, 0)) < 0) continue t;
                                    }
                                    h && h.push(l), s.push(l);
                                }
                            return s;
                        }),
                        ta = br(function (t, e) {
                            e = He(e);
                            var i = ye(t, e);
                            return Ue(t, e.sort(o)), i;
                        }),
                        ea = Oi(),
                        ia = Oi(!0),
                        na = br(function (t) {
                            return ei(He(t, !1, !0));
                        }),
                        ra = br(function (t, e) {
                            return Zi(t) ? Ae(t, e) : [];
                        }),
                        oa = br(Rn),
                        sa = br(function (t) {
                            var e = t.length,
                                i = e > 2 ? t[e - 2] : k,
                                n = e > 1 ? t[e - 1] : k;
                            return e > 2 && "function" == typeof i ? (e -= 2) : ((i = e > 1 && "function" == typeof n ? (--e, n) : k), (n = k)), (t.length = e), Wn(t, i, n);
                        }),
                        aa = br(function (t) {
                            return (
                                (t = He(t)),
                                this.thru(function (e) {
                                    return te(Ba(e) ? e : [pn(e)], t);
                                })
                            );
                        }),
                        la = br(function (t, e) {
                            return Zi(t) && (t = hn(t)), ye(t, He(e));
                        }),
                        ca = di(function (t, e, i) {
                            rs.call(t, i) ? ++t[i] : (t[i] = 1);
                        }),
                        ua = xi($s),
                        da = xi(js, !0),
                        ha = Ci(ie, $s),
                        pa = Ci(ne, js),
                        fa = di(function (t, e, i) {
                            rs.call(t, i) ? t[i].push(e) : (t[i] = [e]);
                        }),
                        va = di(function (t, e, i) {
                            t[i] = e;
                        }),
                        ga = br(function (t, e, i) {
                            var n = -1,
                                r = "function" == typeof e,
                                o = en(e),
                                s = Zi(t) ? jo(t.length) : [];
                            return (
                                $s(t, function (t) {
                                    var a = r ? e : o && null != t ? t[e] : k;
                                    s[++n] = a ? a.apply(t, i) : Qi(t, e, i);
                                }),
                                s
                            );
                        }),
                        ma = di(
                            function (t, e, i) {
                                t[i ? 0 : 1].push(e);
                            },
                            function () {
                                return [[], []];
                            }
                        ),
                        Ta = Gi(he, $s),
                        ba = Gi(pe, js),
                        ya = br(function (t, e) {
                            if (null == t) return [];
                            var i = e[2];
                            return i && tn(e[0], e[1], i) && (e.length = 1), Je(t, He(e), []);
                        }),
                        Sa =
                            ks ||
                            function () {
                                return new Fo().getTime();
                            },
                        xa = br(function (t, e, i) {
                            var n = E;
                            if (i.length) {
                                var r = S(i, xa.placeholder);
                                n |= I;
                            }
                            return Li(t, n, e, i, r);
                        }),
                        wa = br(function (t, e) {
                            e = e.length ? He(e) : Zr(t);
                            for (var i = -1, n = e.length; ++i < n; ) {
                                var r = e[i];
                                t[r] = Li(t[r], E, t);
                            }
                            return t;
                        }),
                        Pa = br(function (t, e, i) {
                            var n = E | _;
                            if (i.length) {
                                var r = S(i, Pa.placeholder);
                                n |= I;
                            }
                            return Li(e, n, t, i, r);
                        }),
                        Aa = bi(G),
                        Ca = bi(D),
                        ka = br(function (t, e) {
                            return Pe(t, 1, e);
                        }),
                        Ma = br(function (t, e, i) {
                            return Pe(t, e, i);
                        }),
                        Ea = Ai(),
                        _a = Ai(!0),
                        Ha = br(function (t, e) {
                            if (((e = He(e)), "function" != typeof t || !ae(e, l))) throw new Zo(V);
                            var i = e.length;
                            return br(function (n) {
                                for (var r = Cs(n.length, i); r--; ) n[r] = e[r](n[r]);
                                return t.apply(this, n);
                            });
                        }),
                        Ga = Hi(I),
                        Da = Hi(B),
                        Ia = br(function (t, e) {
                            return Li(t, O, k, k, k, He(e));
                        }),
                        Ba =
                            xs ||
                            function (t) {
                                return b(t) && rn(t.length) && ss.call(t) == q;
                            },
                        Na = hi(je),
                        Oa = hi(function (t, e, i) {
                            return i ? Te(t, e, i) : be(t, e);
                        }),
                        La = yi(Oa, ge),
                        Ra = yi(Na, an),
                        Wa = Pi(De),
                        Xa = Pi(Ie),
                        $a = ki(Fs),
                        ja = ki(Vs),
                        Fa = Mi(De),
                        Va = Mi(Ie),
                        za = Ps
                            ? function (t) {
                                  var i = null == t ? k : t.constructor;
                                  return ("function" == typeof i && i.prototype === t) || ("function" == typeof t ? e.support.enumPrototypes : Zi(t)) ? dn(t) : Nr(t) ? Ps(t) : [];
                              }
                            : dn,
                        Ua = Ei(!0),
                        qa = Ei(),
                        Ya = br(function (t, e) {
                            if (null == t) return {};
                            if ("function" != typeof e[0]) {
                                var e = ue(He(e), Qo);
                                return ln(t, Ae(io(t), e));
                            }
                            var i = ai(e[0], e[1], 3);
                            return cn(t, function (t, e, n) {
                                return !i(t, e, n);
                            });
                        }),
                        Ka = br(function (t, e) {
                            return null == t ? {} : "function" == typeof e[0] ? cn(t, ai(e[0], e[1], 3)) : ln(t, He(e));
                        }),
                        Qa = mi(function (t, e, i) {
                            return (e = e.toLowerCase()), t + (i ? e.charAt(0).toUpperCase() + e.slice(1) : e);
                        }),
                        Za = mi(function (t, e, i) {
                            return t + (i ? "-" : "") + e.toLowerCase();
                        }),
                        Ja = _i(),
                        tl = _i(!0),
                        el = mi(function (t, e, i) {
                            return t + (i ? "_" : "") + e.toLowerCase();
                        }),
                        il = mi(function (t, e, i) {
                            return t + (i ? " " : "") + (e.charAt(0).toUpperCase() + e.slice(1));
                        }),
                        nl = br(function (t, e) {
                            try {
                                return t.apply(k, e);
                            } catch (i) {
                                return Dr(i) ? i : new Vo(i);
                            }
                        }),
                        rl = br(function (t, e) {
                            return function (i) {
                                return Qi(i, t, e);
                            };
                        }),
                        ol = br(function (t, e) {
                            return function (i) {
                                return Qi(t, i, e);
                            };
                        }),
                        sl = Ni("ceil"),
                        al = Ni("floor"),
                        ll = Si(Ar, _s),
                        cl = Si(Ur, Hs),
                        ul = Ni("round");
                    return (
                        (e.prototype = i.prototype),
                        (n.prototype = Xs(i.prototype)),
                        (n.prototype.constructor = n),
                        (r.prototype = Xs(i.prototype)),
                        (r.prototype.constructor = r),
                        (ot.prototype["delete"] = Ut),
                        (ot.prototype.get = qt),
                        (ot.prototype.has = Yt),
                        (ot.prototype.set = Kt),
                        (Qt.prototype.push = Jt),
                        (gr.Cache = ot),
                        (e.after = hr),
                        (e.ary = pr),
                        (e.assign = Oa),
                        (e.at = la),
                        (e.before = fr),
                        (e.bind = xa),
                        (e.bindAll = wa),
                        (e.bindKey = Pa),
                        (e.callback = Mo),
                        (e.chain = jn),
                        (e.chunk = gn),
                        (e.compact = mn),
                        (e.constant = Eo),
                        (e.countBy = ca),
                        (e.create = Qr),
                        (e.curry = Aa),
                        (e.curryRight = Ca),
                        (e.debounce = vr),
                        (e.defaults = La),
                        (e.defaultsDeep = Ra),
                        (e.defer = ka),
                        (e.delay = Ma),
                        (e.difference = Ks),
                        (e.drop = Tn),
                        (e.dropRight = bn),
                        (e.dropRightWhile = yn),
                        (e.dropWhile = Sn),
                        (e.fill = xn),
                        (e.filter = Jn),
                        (e.flatten = Pn),
                        (e.flattenDeep = An),
                        (e.flow = Ea),
                        (e.flowRight = _a),
                        (e.forEach = ha),
                        (e.forEachRight = pa),
                        (e.forIn = $a),
                        (e.forInRight = ja),
                        (e.forOwn = Fa),
                        (e.forOwnRight = Va),
                        (e.functions = Zr),
                        (e.groupBy = fa),
                        (e.indexBy = va),
                        (e.initial = kn),
                        (e.intersection = Js),
                        (e.invert = eo),
                        (e.invoke = ga),
                        (e.keys = za),
                        (e.keysIn = io),
                        (e.map = ir),
                        (e.mapKeys = Ua),
                        (e.mapValues = qa),
                        (e.matches = Ho),
                        (e.matchesProperty = Go),
                        (e.memoize = gr),
                        (e.merge = Na),
                        (e.method = rl),
                        (e.methodOf = ol),
                        (e.mixin = Do),
                        (e.modArgs = Ha),
                        (e.negate = mr),
                        (e.omit = Ya),
                        (e.once = Tr),
                        (e.pairs = no),
                        (e.partial = Ga),
                        (e.partialRight = Da),
                        (e.partition = ma),
                        (e.pick = Ka),
                        (e.pluck = nr),
                        (e.property = No),
                        (e.propertyOf = Oo),
                        (e.pull = _n),
                        (e.pullAt = ta),
                        (e.range = Lo),
                        (e.rearg = Ia),
                        (e.reject = rr),
                        (e.remove = Hn),
                        (e.rest = Gn),
                        (e.restParam = br),
                        (e.set = oo),
                        (e.shuffle = sr),
                        (e.slice = Dn),
                        (e.sortBy = cr),
                        (e.sortByAll = ya),
                        (e.sortByOrder = ur),
                        (e.spread = yr),
                        (e.take = In),
                        (e.takeRight = Bn),
                        (e.takeRightWhile = Nn),
                        (e.takeWhile = On),
                        (e.tap = Fn),
                        (e.throttle = Sr),
                        (e.thru = Vn),
                        (e.times = Ro),
                        (e.toArray = Yr),
                        (e.toPlainObject = Kr),
                        (e.transform = so),
                        (e.union = na),
                        (e.uniq = Ln),
                        (e.unzip = Rn),
                        (e.unzipWith = Wn),
                        (e.values = ao),
                        (e.valuesIn = lo),
                        (e.where = dr),
                        (e.without = ra),
                        (e.wrap = xr),
                        (e.xor = Xn),
                        (e.zip = oa),
                        (e.zipObject = $n),
                        (e.zipWith = sa),
                        (e.backflow = _a),
                        (e.collect = ir),
                        (e.compose = _a),
                        (e.each = ha),
                        (e.eachRight = pa),
                        (e.extend = Oa),
                        (e.iteratee = Mo),
                        (e.methods = Zr),
                        (e.object = $n),
                        (e.select = Jn),
                        (e.tail = Gn),
                        (e.unique = Ln),
                        Do(e, e),
                        (e.add = Xo),
                        (e.attempt = nl),
                        (e.camelCase = Qa),
                        (e.capitalize = ho),
                        (e.ceil = sl),
                        (e.clone = wr),
                        (e.cloneDeep = Pr),
                        (e.deburr = po),
                        (e.endsWith = fo),
                        (e.escape = vo),
                        (e.escapeRegExp = go),
                        (e.every = Zn),
                        (e.find = ua),
                        (e.findIndex = Qs),
                        (e.findKey = Wa),
                        (e.findLast = da),
                        (e.findLastIndex = Zs),
                        (e.findLastKey = Xa),
                        (e.findWhere = tr),
                        (e.first = wn),
                        (e.floor = al),
                        (e.get = Jr),
                        (e.gt = Ar),
                        (e.gte = Cr),
                        (e.has = to),
                        (e.identity = _o),
                        (e.includes = er),
                        (e.indexOf = Cn),
                        (e.inRange = co),
                        (e.isArguments = kr),
                        (e.isArray = Ba),
                        (e.isBoolean = Mr),
                        (e.isDate = Er),
                        (e.isElement = _r),
                        (e.isEmpty = Hr),
                        (e.isEqual = Gr),
                        (e.isError = Dr),
                        (e.isFinite = Ir),
                        (e.isFunction = Br),
                        (e.isMatch = Or),
                        (e.isNaN = Lr),
                        (e.isNative = Rr),
                        (e.isNull = Wr),
                        (e.isNumber = Xr),
                        (e.isObject = Nr),
                        (e.isPlainObject = $r),
                        (e.isRegExp = jr),
                        (e.isString = Fr),
                        (e.isTypedArray = Vr),
                        (e.isUndefined = zr),
                        (e.kebabCase = Za),
                        (e.last = Mn),
                        (e.lastIndexOf = En),
                        (e.lt = Ur),
                        (e.lte = qr),
                        (e.max = ll),
                        (e.min = cl),
                        (e.noConflict = Io),
                        (e.noop = Bo),
                        (e.now = Sa),
                        (e.pad = mo),
                        (e.padLeft = Ja),
                        (e.padRight = tl),
                        (e.parseInt = To),
                        (e.random = uo),
                        (e.reduce = Ta),
                        (e.reduceRight = ba),
                        (e.repeat = bo),
                        (e.result = ro),
                        (e.round = ul),
                        (e.runInContext = C),
                        (e.size = ar),
                        (e.snakeCase = el),
                        (e.some = lr),
                        (e.sortedIndex = ea),
                        (e.sortedLastIndex = ia),
                        (e.startCase = il),
                        (e.startsWith = yo),
                        (e.sum = $o),
                        (e.template = So),
                        (e.trim = xo),
                        (e.trimLeft = wo),
                        (e.trimRight = Po),
                        (e.trunc = Ao),
                        (e.unescape = Co),
                        (e.uniqueId = Wo),
                        (e.words = ko),
                        (e.all = Zn),
                        (e.any = lr),
                        (e.contains = er),
                        (e.eq = Gr),
                        (e.detect = ua),
                        (e.foldl = Ta),
                        (e.foldr = ba),
                        (e.head = wn),
                        (e.include = er),
                        (e.inject = Ta),
                        Do(
                            e,
                            (function () {
                                var t = {};
                                return (
                                    De(e, function (i, n) {
                                        e.prototype[n] || (t[n] = i);
                                    }),
                                    t
                                );
                            })(),
                            !1
                        ),
                        (e.sample = or),
                        (e.prototype.sample = function (t) {
                            return this.__chain__ || null != t
                                ? this.thru(function (e) {
                                      return or(e, t);
                                  })
                                : or(this.value());
                        }),
                        (e.VERSION = M),
                        ie(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (t) {
                            e[t].placeholder = e;
                        }),
                        ie(["drop", "take"], function (t, e) {
                            (r.prototype[t] = function (i) {
                                var n = this.__filtered__;
                                if (n && !e) return new r(this);
                                i = null == i ? 1 : As(Ss(i) || 0, 0);
                                var o = this.clone();
                                return n ? (o.__takeCount__ = Cs(o.__takeCount__, i)) : o.__views__.push({ size: i, type: t + (o.__dir__ < 0 ? "Right" : "") }), o;
                            }),
                                (r.prototype[t + "Right"] = function (e) {
                                    return this.reverse()[t](e).reverse();
                                });
                        }),
                        ie(["filter", "map", "takeWhile"], function (t, e) {
                            var i = e + 1,
                                n = i != F;
                            r.prototype[t] = function (t, e) {
                                var r = this.clone();
                                return r.__iteratees__.push({ iteratee: $i(t, e, 1), type: i }), (r.__filtered__ = r.__filtered__ || n), r;
                            };
                        }),
                        ie(["first", "last"], function (t, e) {
                            var i = "take" + (e ? "Right" : "");
                            r.prototype[t] = function () {
                                return this[i](1).value()[0];
                            };
                        }),
                        ie(["initial", "rest"], function (t, e) {
                            var i = "drop" + (e ? "" : "Right");
                            r.prototype[t] = function () {
                                return this.__filtered__ ? new r(this) : this[i](1);
                            };
                        }),
                        ie(["pluck", "where"], function (t, e) {
                            var i = e ? "filter" : "map",
                                n = e ? Xe : No;
                            r.prototype[t] = function (t) {
                                return this[i](n(t));
                            };
                        }),
                        (r.prototype.compact = function () {
                            return this.filter(_o);
                        }),
                        (r.prototype.reject = function (t, e) {
                            return (
                                (t = $i(t, e, 1)),
                                this.filter(function (e) {
                                    return !t(e);
                                })
                            );
                        }),
                        (r.prototype.slice = function (t, e) {
                            t = null == t ? 0 : +t || 0;
                            var i = this;
                            return i.__filtered__ && (t > 0 || 0 > e) ? new r(i) : (0 > t ? (i = i.takeRight(-t)) : t && (i = i.drop(t)), e !== k && ((e = +e || 0), (i = 0 > e ? i.dropRight(-e) : i.take(e - t))), i);
                        }),
                        (r.prototype.takeRightWhile = function (t, e) {
                            return this.reverse().takeWhile(t, e).reverse();
                        }),
                        (r.prototype.toArray = function () {
                            return this.take(Hs);
                        }),
                        De(r.prototype, function (t, i) {
                            var o = /^(?:filter|map|reject)|While$/.test(i),
                                s = /^(?:first|last)$/.test(i),
                                a = e[s ? "take" + ("last" == i ? "Right" : "") : i];
                            a &&
                                (e.prototype[i] = function () {
                                    var e = s ? [1] : arguments,
                                        i = this.__chain__,
                                        l = this.__wrapped__,
                                        c = !!this.__actions__.length,
                                        u = l instanceof r,
                                        d = e[0],
                                        h = u || Ba(l);
                                    h && o && "function" == typeof d && 1 != d.length && (u = h = !1);
                                    var p = function (t) {
                                            return s && i ? a(t, 1)[0] : a.apply(k, de([t], e));
                                        },
                                        f = { func: Vn, args: [p], thisArg: k },
                                        v = u && !c;
                                    if (s && !i) return v ? ((l = l.clone()), l.__actions__.push(f), t.call(l)) : a.call(k, this.value())[0];
                                    if (!s && h) {
                                        l = v ? l : new r(this);
                                        var g = t.apply(l, e);
                                        return g.__actions__.push(f), new n(g, i);
                                    }
                                    return this.thru(p);
                                });
                        }),
                        ie(["join", "pop", "push", "replace", "shift", "sort", "splice", "split", "unshift"], function (t) {
                            var i = (/^(?:replace|split)$/.test(t) ? is : Jo)[t],
                                n = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                                r = !Ws.spliceObjects && /^(?:pop|shift|splice)$/.test(t),
                                o = /^(?:join|pop|replace|shift)$/.test(t),
                                s = r
                                    ? function () {
                                          var t = i.apply(this, arguments);
                                          return 0 === this.length && delete this[0], t;
                                      }
                                    : i;
                            e.prototype[t] = function () {
                                var t = arguments;
                                return o && !this.__chain__
                                    ? s.apply(this.value(), t)
                                    : this[n](function (e) {
                                          return s.apply(e, t);
                                      });
                            };
                        }),
                        De(r.prototype, function (t, i) {
                            var n = e[i];
                            if (n) {
                                var r = n.name + "",
                                    o = Os[r] || (Os[r] = []);
                                o.push({ name: i, func: n });
                            }
                        }),
                        (Os[Di(k, _).name] = [{ name: "wrapper", func: k }]),
                        (r.prototype.clone = y),
                        (r.prototype.reverse = J),
                        (r.prototype.value = nt),
                        (e.prototype.chain = zn),
                        (e.prototype.commit = Un),
                        (e.prototype.concat = aa),
                        (e.prototype.plant = qn),
                        (e.prototype.reverse = Yn),
                        (e.prototype.toString = Kn),
                        (e.prototype.run = e.prototype.toJSON = e.prototype.valueOf = e.prototype.value = Qn),
                        (e.prototype.collect = e.prototype.map),
                        (e.prototype.head = e.prototype.first),
                        (e.prototype.select = e.prototype.filter),
                        (e.prototype.tail = e.prototype.rest),
                        e
                    );
                }
                var k,
                    M = "3.10.1",
                    E = 1,
                    _ = 2,
                    H = 4,
                    G = 8,
                    D = 16,
                    I = 32,
                    B = 64,
                    N = 128,
                    O = 256,
                    L = 30,
                    R = "...",
                    W = 150,
                    X = 16,
                    $ = 200,
                    j = 1,
                    F = 2,
                    V = "Expected a function",
                    z = "__lodash_placeholder__",
                    U = "[object Arguments]",
                    q = "[object Array]",
                    Y = "[object Boolean]",
                    K = "[object Date]",
                    Q = "[object Error]",
                    Z = "[object Function]",
                    J = "[object Map]",
                    tt = "[object Number]",
                    et = "[object Object]",
                    it = "[object RegExp]",
                    nt = "[object Set]",
                    rt = "[object String]",
                    ot = "[object WeakMap]",
                    st = "[object ArrayBuffer]",
                    at = "[object Float32Array]",
                    lt = "[object Float64Array]",
                    ct = "[object Int8Array]",
                    ut = "[object Int16Array]",
                    dt = "[object Int32Array]",
                    ht = "[object Uint8Array]",
                    pt = "[object Uint8ClampedArray]",
                    ft = "[object Uint16Array]",
                    vt = "[object Uint32Array]",
                    gt = /\b__p \+= '';/g,
                    mt = /\b(__p \+=) '' \+/g,
                    Tt = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                    bt = /&(?:amp|lt|gt|quot|#39|#96);/g,
                    yt = /[&<>"'`]/g,
                    St = RegExp(bt.source),
                    xt = RegExp(yt.source),
                    wt = /<%-([\s\S]+?)%>/g,
                    Pt = /<%([\s\S]+?)%>/g,
                    At = /<%=([\s\S]+?)%>/g,
                    Ct = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
                    kt = /^\w*$/,
                    Mt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
                    Et = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,
                    _t = RegExp(Et.source),
                    Ht = /[\u0300-\u036f\ufe20-\ufe23]/g,
                    Gt = /\\(\\)?/g,
                    Dt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                    It = /\w*$/,
                    Bt = /^0[xX]/,
                    Nt = /^\[object .+?Constructor\]$/,
                    Ot = /^\d+$/,
                    Lt = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,
                    Rt = /($^)/,
                    Wt = /['\n\r\u2028\u2029\\]/g,
                    Xt = (function () {
                        var t = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
                            e = "[a-z\\xdf-\\xf6\\xf8-\\xff]+";
                        return RegExp(t + "+(?=" + t + e + ")|" + t + "?" + e + "|" + t + "+|[0-9]+", "g");
                    })(),
                    $t = [
                        "Array",
                        "ArrayBuffer",
                        "Date",
                        "Error",
                        "Float32Array",
                        "Float64Array",
                        "Function",
                        "Int8Array",
                        "Int16Array",
                        "Int32Array",
                        "Math",
                        "Number",
                        "Object",
                        "RegExp",
                        "Set",
                        "String",
                        "_",
                        "clearTimeout",
                        "isFinite",
                        "parseFloat",
                        "parseInt",
                        "setTimeout",
                        "TypeError",
                        "Uint8Array",
                        "Uint8ClampedArray",
                        "Uint16Array",
                        "Uint32Array",
                        "WeakMap",
                    ],
                    jt = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
                    Ft = -1,
                    Vt = {};
                (Vt[at] = Vt[lt] = Vt[ct] = Vt[ut] = Vt[dt] = Vt[ht] = Vt[pt] = Vt[ft] = Vt[vt] = !0), (Vt[U] = Vt[q] = Vt[st] = Vt[Y] = Vt[K] = Vt[Q] = Vt[Z] = Vt[J] = Vt[tt] = Vt[et] = Vt[it] = Vt[nt] = Vt[rt] = Vt[ot] = !1);
                var zt = {};
                (zt[U] = zt[q] = zt[st] = zt[Y] = zt[K] = zt[at] = zt[lt] = zt[ct] = zt[ut] = zt[dt] = zt[tt] = zt[et] = zt[it] = zt[rt] = zt[ht] = zt[pt] = zt[ft] = zt[vt] = !0), (zt[Q] = zt[Z] = zt[J] = zt[nt] = zt[ot] = !1);
                var Ut = {
                        "Ã€": "A",
                        "Ã": "A",
                        "Ã‚": "A",
                        Ãƒ: "A",
                        "Ã„": "A",
                        "Ã…": "A",
                        "Ã ": "a",
                        "Ã¡": "a",
                        "Ã¢": "a",
                        "Ã£": "a",
                        "Ã¤": "a",
                        "Ã¥": "a",
                        "Ã‡": "C",
                        "Ã§": "c",
                        "Ã": "D",
                        "Ã°": "d",
                        Ãˆ: "E",
                        "Ã‰": "E",
                        ÃŠ: "E",
                        "Ã‹": "E",
                        "Ã¨": "e",
                        "Ã©": "e",
                        Ãª: "e",
                        "Ã«": "e",
                        ÃŒ: "I",
                        "Ã": "I",
                        ÃŽ: "I",
                        "Ã": "I",
                        "Ã¬": "i",
                        "Ã­": "i",
                        "Ã®": "i",
                        "Ã¯": "i",
                        "Ã‘": "N",
                        "Ã±": "n",
                        "Ã’": "O",
                        "Ã“": "O",
                        "Ã”": "O",
                        "Ã•": "O",
                        "Ã–": "O",
                        "Ã˜": "O",
                        "Ã²": "o",
                        "Ã³": "o",
                        "Ã´": "o",
                        Ãµ: "o",
                        "Ã¶": "o",
                        "Ã¸": "o",
                        "Ã™": "U",
                        Ãš: "U",
                        "Ã›": "U",
                        Ãœ: "U",
                        "Ã¹": "u",
                        Ãº: "u",
                        "Ã»": "u",
                        "Ã¼": "u",
                        "Ã": "Y",
                        "Ã½": "y",
                        "Ã¿": "y",
                        "Ã†": "Ae",
                        "Ã¦": "ae",
                        Ãž: "Th",
                        "Ã¾": "th",
                        ÃŸ: "ss",
                    },
                    qt = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "`": "&#96;" },
                    Yt = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'", "&#96;": "`" },
                    Kt = { function: !0, object: !0 },
                    Qt = {
                        0: "x30",
                        1: "x31",
                        2: "x32",
                        3: "x33",
                        4: "x34",
                        5: "x35",
                        6: "x36",
                        7: "x37",
                        8: "x38",
                        9: "x39",
                        A: "x41",
                        B: "x42",
                        C: "x43",
                        D: "x44",
                        E: "x45",
                        F: "x46",
                        a: "x61",
                        b: "x62",
                        c: "x63",
                        d: "x64",
                        e: "x65",
                        f: "x66",
                        n: "x6e",
                        r: "x72",
                        t: "x74",
                        u: "x75",
                        v: "x76",
                        x: "x78",
                    },
                    Zt = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" },
                    Jt = Kt[typeof e] && e && !e.nodeType && e,
                    te = Kt[typeof t] && t && !t.nodeType && t,
                    ee = Jt && te && "object" == typeof r && r && r.Object && r,
                    ie = Kt[typeof self] && self && self.Object && self,
                    ne = Kt[typeof window] && window && window.Object && window,
                    re = (te && te.exports === Jt && Jt, ee || (ne !== (this && this.window) && ne) || ie || this),
                    oe = (function () {
                        try {
                            Object({ toString: 0 } + "");
                        } catch (t) {
                            return function () {
                                return !1;
                            };
                        }
                        return function (t) {
                            return "function" != typeof t.toString && "string" == typeof (t + "");
                        };
                    })(),
                    se = C();
                (re._ = se),
                    (n = function () {
                        return se;
                    }.call(e, i, e, t)),
                    !(n !== k && (t.exports = n));
            }.call(this));
        }.call(
            e,
            i(52)(t),
            (function () {
                return this;
            })()
        ));
    },
    54: function (t, e, i) {
        var n = i(20);
        t.exports = Object("z").propertyIsEnumerable(0)
            ? Object
            : function (t) {
                  return "String" == n(t) ? t.split("") : Object(t);
              };
    },
    55: function (t, e, i) {
        var n = i(2).getDesc,
            r = i(25),
            o = i(18),
            s = function (t, e) {
                if ((o(t), !r(e) && null !== e)) throw TypeError(e + ": can't set as prototype!");
            };
        t.exports = {
            set:
                Object.setPrototypeOf ||
                ("__proto__" in {}
                    ? (function (t, e, r) {
                          try {
                              (r = i(19)(Function.call, n(Object.prototype, "__proto__").set, 2)), r(t, []), (e = !(t instanceof Array));
                          } catch (o) {
                              e = !0;
                          }
                          return function (t, i) {
                              return s(t, i), e ? (t.__proto__ = i) : r(t, i), t;
                          };
                      })({}, !1)
                    : void 0),
            check: s,
        };
    },
    56: function (t, e) {},
    58: function (t, e, i) {
        "use strict";
        function n(t, e) {
            (this.helpers = t || {}), (this.partials = e || {}), r(this);
        }
        function r(t) {
            t.registerHelper("helperMissing", function () {
                if (1 === arguments.length) return void 0;
                throw new u["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"');
            }),
                t.registerHelper("blockHelperMissing", function (e, i) {
                    var n = i.inverse,
                        r = i.fn;
                    if (e === !0) return r(this);
                    if (e === !1 || null == e) return n(this);
                    if (f(e)) return e.length > 0 ? (i.ids && (i.ids = [i.name]), t.helpers.each(e, i)) : n(this);
                    if (i.data && i.ids) {
                        var s = o(i.data);
                        (s.contextPath = l.appendContextPath(i.data.contextPath, i.name)), (i = { data: s });
                    }
                    return r(e, i);
                }),
                t.registerHelper("each", function (t, e) {
                    function i(e, i, r) {
                        c && ((c.key = e), (c.index = i), (c.first = 0 === i), (c.last = !!r), d && (c.contextPath = d + e)), (a += n(t[e], { data: c, blockParams: l.blockParams([t[e], e], [d + e, null]) }));
                    }
                    if (!e) throw new u["default"]("Must pass iterator to #each");
                    var n = e.fn,
                        r = e.inverse,
                        s = 0,
                        a = "",
                        c = void 0,
                        d = void 0;
                    if ((e.data && e.ids && (d = l.appendContextPath(e.data.contextPath, e.ids[0]) + "."), v(t) && (t = t.call(this)), e.data && (c = o(e.data)), t && "object" == typeof t))
                        if (f(t)) for (var h = t.length; h > s; s++) i(s, s, s === t.length - 1);
                        else {
                            var p = void 0;
                            for (var g in t) t.hasOwnProperty(g) && (p && i(p, s - 1), (p = g), s++);
                            p && i(p, s - 1, !0);
                        }
                    return 0 === s && (a = r(this)), a;
                }),
                t.registerHelper("if", function (t, e) {
                    return v(t) && (t = t.call(this)), (!e.hash.includeZero && !t) || l.isEmpty(t) ? e.inverse(this) : e.fn(this);
                }),
                t.registerHelper("unless", function (e, i) {
                    return t.helpers["if"].call(this, e, { fn: i.inverse, inverse: i.fn, hash: i.hash });
                }),
                t.registerHelper("with", function (t, e) {
                    v(t) && (t = t.call(this));
                    var i = e.fn;
                    if (l.isEmpty(t)) return e.inverse(this);
                    if (e.data && e.ids) {
                        var n = o(e.data);
                        (n.contextPath = l.appendContextPath(e.data.contextPath, e.ids[0])), (e = { data: n });
                    }
                    return i(t, e);
                }),
                t.registerHelper("log", function (e, i) {
                    var n = i.data && null != i.data.level ? parseInt(i.data.level, 10) : 1;
                    t.log(n, e);
                }),
                t.registerHelper("lookup", function (t, e) {
                    return t && t[e];
                });
        }
        function o(t) {
            var e = l.extend({}, t);
            return (e._parent = t), e;
        }
        var s = function (t) {
            return t && t.__esModule ? t : { default: t };
        };
        (e.__esModule = !0), (e.HandlebarsEnvironment = n), (e.createFrame = o);
        var a = i(34),
            l = s(a),
            c = i(33),
            u = s(c),
            d = "3.0.1";
        e.VERSION = d;
        var h = 6;
        e.COMPILER_REVISION = h;
        var p = { 1: "<= 1.0.rc.2", 2: "== 1.0.0-rc.3", 3: "== 1.0.0-rc.4", 4: "== 1.x.x", 5: "== 2.0.0-alpha.x", 6: ">= 2.0.0-beta.1" };
        e.REVISION_CHANGES = p;
        var f = l.isArray,
            v = l.isFunction,
            g = l.toString,
            m = "[object Object]";
        n.prototype = {
            constructor: n,
            logger: T,
            log: b,
            registerHelper: function (t, e) {
                if (g.call(t) === m) {
                    if (e) throw new u["default"]("Arg not supported with multiple helpers");
                    l.extend(this.helpers, t);
                } else this.helpers[t] = e;
            },
            unregisterHelper: function (t) {
                delete this.helpers[t];
            },
            registerPartial: function (t, e) {
                if (g.call(t) === m) l.extend(this.partials, t);
                else {
                    if ("undefined" == typeof e) throw new u["default"]("Attempting to register a partial as undefined");
                    this.partials[t] = e;
                }
            },
            unregisterPartial: function (t) {
                delete this.partials[t];
            },
        };
        var T = {
            methodMap: { 0: "debug", 1: "info", 2: "warn", 3: "error" },
            DEBUG: 0,
            INFO: 1,
            WARN: 2,
            ERROR: 3,
            level: 1,
            log: function (t, e) {
                if ("undefined" != typeof console && T.level <= t) {
                    var i = T.methodMap[t];
                    (console[i] || console.log).call(console, e);
                }
            },
        };
        e.logger = T;
        var b = T.log;
        e.log = b;
    },
    62: function (t, e, i) {
        t.exports = { default: i(63), __esModule: !0 };
    },
    63: function (t, e, i) {
        var n = i(2);
        t.exports = function (t, e, i) {
            return n.setDesc(t, e, i);
        };
    },
    64: function (t, e) {
        t.exports = function () {};
    },
    65: function (t, e, i) {
        "use strict";
        var n = i(2),
            r = i(28),
            o = i(21),
            s = {};
        i(24)(s, i(4)("iterator"), function () {
            return this;
        }),
            (t.exports = function (t, e, i) {
                (t.prototype = n.create(s, { next: r(1, i) })), o(t, e + " Iterator");
            });
    },
    66: function (t, e) {
        t.exports = function (t, e) {
            return { value: e, done: !!t };
        };
    },
    67: function (t, e, i) {
        var n = i(49),
            r = i(23);
        t.exports = function (t) {
            return function (e, i) {
                var o,
                    s,
                    a = String(r(e)),
                    l = n(i),
                    c = a.length;
                return 0 > l || l >= c
                    ? t
                        ? ""
                        : void 0
                    : ((o = a.charCodeAt(l)), 55296 > o || o > 56319 || l + 1 === c || (s = a.charCodeAt(l + 1)) < 56320 || s > 57343 ? (t ? a.charAt(l) : o) : t ? a.slice(l, l + 2) : ((o - 55296) << 10) + (s - 56320) + 65536);
            };
        };
    },
    68: function (t, e, i) {
        "use strict";
        var n = i(64),
            r = i(66),
            o = i(17),
            s = i(16);
        (t.exports = i(39)(
            Array,
            "Array",
            function (t, e) {
                (this._t = s(t)), (this._i = 0), (this._k = e);
            },
            function () {
                var t = this._t,
                    e = this._k,
                    i = this._i++;
                return !t || i >= t.length ? ((this._t = void 0), r(1)) : "keys" == e ? r(0, i) : "values" == e ? r(0, t[i]) : r(0, [i, t[i]]);
            },
            "values"
        )),
            (o.Arguments = o.Array),
            n("keys"),
            n("values"),
            n("entries");
    },
    69: function (t, e, i) {
        "use strict";
        function n(t) {
            return t && t.__esModule ? t : { default: t };
        }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = i(5),
            o = n(r),
            s = i(7),
            a = n(s),
            l = i(53),
            c = n(l),
            u = (function () {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return o["default"](this, t), (this.options = c["default"].assign({ preset: "basic" }, e)), this.parameters;
                }
                return (
                    a["default"](t, [
                        {
                            key: "basic",
                            get: function () {
                                return {
                                    lines: 15,
                                    length: 28,
                                    width: 10,
                                    radius: 42,
                                    scale: 0.3,
                                    corners: 1,
                                    color: "#000",
                                    opacity: 0.25,
                                    rotate: 0,
                                    direction: 1,
                                    speed: 1,
                                    trail: 60,
                                    fps: 20,
                                    zIndex: 2e9,
                                    className: "spinner",
                                    top: "40%",
                                    left: "50%",
                                    shadow: !1,
                                    hwaccel: !1,
                                    position: "fixed",
                                };
                            },
                        },
                        {
                            key: "small",
                            get: function () {
                                return c["default"].assign(this.basic, { lines: 8, length: 2, width: 3, radius: 4, scale: 1, top: "50%", left: "50%", position: "absolute" });
                            },
                        },
                        {
                            key: "parameters",
                            get: function () {
                                return "small" === this.options.preset ? this.small : this.basic;
                            },
                        },
                    ]),
                    t
                );
            })();
        (e["default"] = u), (t.exports = e["default"]);
    },
    86: function (t, e, i) {
        !(function (e, i) {
            t.exports = i();
        })(this, function () {
            "use strict";
            function t(t, e) {
                var i,
                    n = document.createElement(t || "div");
                for (i in e) n[i] = e[i];
                return n;
            }
            function e(t) {
                for (var e = 1, i = arguments.length; i > e; e++) t.appendChild(arguments[e]);
                return t;
            }
            function i(t, e, i, n) {
                var r = ["opacity", e, ~~(100 * t), i, n].join("-"),
                    o = 0.01 + (i / n) * 100,
                    s = Math.max(1 - ((1 - t) / e) * (100 - o), t),
                    a = c.substring(0, c.indexOf("Animation")).toLowerCase(),
                    l = (a && "-" + a + "-") || "";
                return (
                    h[r] ||
                        (u.insertRule("@" + l + "keyframes " + r + "{0%{opacity:" + s + "}" + o + "%{opacity:" + t + "}" + (o + 0.01) + "%{opacity:1}" + ((o + e) % 100) + "%{opacity:" + t + "}100%{opacity:" + s + "}}", u.cssRules.length),
                        (h[r] = 1)),
                    r
                );
            }
            function n(t, e) {
                var i,
                    n,
                    r = t.style;
                if (((e = e.charAt(0).toUpperCase() + e.slice(1)), void 0 !== r[e])) return e;
                for (n = 0; n < d.length; n++) if (((i = d[n] + e), void 0 !== r[i])) return i;
            }
            function r(t, e) {
                for (var i in e) t.style[n(t, i) || i] = e[i];
                return t;
            }
            function o(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var n in i) void 0 === t[n] && (t[n] = i[n]);
                }
                return t;
            }
            function s(t, e) {
                return "string" == typeof t ? t : t[e % t.length];
            }
            function a(t) {
                this.opts = o(t || {}, a.defaults, p);
            }
            function l() {
                function i(e, i) {
                    return t("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', i);
                }
                u.addRule(".spin-vml", "behavior:url(#default#VML)"),
                    (a.prototype.lines = function (t, n) {
                        function o() {
                            return r(i("group", { coordsize: u + " " + u, coordorigin: -c + " " + -c }), { width: u, height: u });
                        }
                        function a(t, a, l) {
                            e(
                                h,
                                e(
                                    r(o(), { rotation: (360 / n.lines) * t + "deg", left: ~~a }),
                                    e(
                                        r(i("roundrect", { arcsize: n.corners }), { width: c, height: n.scale * n.width, left: n.scale * n.radius, top: (-n.scale * n.width) >> 1, filter: l }),
                                        i("fill", { color: s(n.color, t), opacity: n.opacity }),
                                        i("stroke", { opacity: 0 })
                                    )
                                )
                            );
                        }
                        var l,
                            c = n.scale * (n.length + n.width),
                            u = 2 * n.scale * c,
                            d = -(n.width + n.length) * n.scale * 2 + "px",
                            h = r(o(), { position: "absolute", top: d, left: d });
                        if (n.shadow) for (l = 1; l <= n.lines; l++) a(l, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
                        for (l = 1; l <= n.lines; l++) a(l);
                        return e(t, h);
                    }),
                    (a.prototype.opacity = function (t, e, i, n) {
                        var r = t.firstChild;
                        (n = (n.shadow && n.lines) || 0), r && e + n < r.childNodes.length && ((r = r.childNodes[e + n]), (r = r && r.firstChild), (r = r && r.firstChild), r && (r.opacity = i));
                    });
            }
            var c,
                u,
                d = ["webkit", "Moz", "ms", "O"],
                h = {},
                p = {
                    lines: 12,
                    length: 7,
                    width: 5,
                    radius: 10,
                    scale: 1,
                    corners: 1,
                    color: "#000",
                    opacity: 0.25,
                    rotate: 0,
                    direction: 1,
                    speed: 1,
                    trail: 100,
                    fps: 20,
                    zIndex: 2e9,
                    className: "spinner",
                    top: "50%",
                    left: "50%",
                    shadow: !1,
                    hwaccel: !1,
                    position: "absolute",
                };
            if (
                ((a.defaults = {}),
                o(a.prototype, {
                    spin: function (e) {
                        this.stop();
                        var i = this,
                            n = i.opts,
                            o = (i.el = t(null, { className: n.className }));
                        if ((r(o, { position: n.position, width: 0, zIndex: n.zIndex, left: n.left, top: n.top }), e && e.insertBefore(o, e.firstChild || null), o.setAttribute("role", "progressbar"), i.lines(o, i.opts), !c)) {
                            var s,
                                a = 0,
                                l = ((n.lines - 1) * (1 - n.direction)) / 2,
                                u = n.fps,
                                d = u / n.speed,
                                h = (1 - n.opacity) / ((d * n.trail) / 100),
                                p = d / n.lines;
                            !(function f() {
                                a++;
                                for (var t = 0; t < n.lines; t++) (s = Math.max(1 - ((a + (n.lines - t) * p) % d) * h, n.opacity)), i.opacity(o, t * n.direction + l, s, n);
                                i.timeout = i.el && setTimeout(f, ~~(1e3 / u));
                            })();
                        }
                        return i;
                    },
                    stop: function () {
                        var t = this.el;
                        return t && (clearTimeout(this.timeout), t.parentNode && t.parentNode.removeChild(t), (this.el = void 0)), this;
                    },
                    lines: function (n, o) {
                        function a(e, i) {
                            return r(t(), {
                                position: "absolute",
                                width: o.scale * (o.length + o.width) + "px",
                                height: o.scale * o.width + "px",
                                background: e,
                                boxShadow: i,
                                transformOrigin: "left",
                                transform: "rotate(" + ~~((360 / o.lines) * u + o.rotate) + "deg) translate(" + o.scale * o.radius + "px,0)",
                                borderRadius: ((o.corners * o.scale * o.width) >> 1) + "px",
                            });
                        }
                        for (var l, u = 0, d = ((o.lines - 1) * (1 - o.direction)) / 2; u < o.lines; u++)
                            (l = r(t(), {
                                position: "absolute",
                                top: 1 + ~((o.scale * o.width) / 2) + "px",
                                transform: o.hwaccel ? "translate3d(0,0,0)" : "",
                                opacity: o.opacity,
                                animation: c && i(o.opacity, o.trail, d + u * o.direction, o.lines) + " " + 1 / o.speed + "s linear infinite",
                            })),
                                o.shadow && e(l, r(a("#000", "0 0 4px #000"), { top: "2px" })),
                                e(n, e(l, a(s(o.color, u), "0 0 1px rgba(0,0,0,.1)")));
                        return n;
                    },
                    opacity: function (t, e, i) {
                        e < t.childNodes.length && (t.childNodes[e].style.opacity = i);
                    },
                }),
                "undefined" != typeof document)
            ) {
                u = (function () {
                    var i = t("style", { type: "text/css" });
                    return e(document.getElementsByTagName("head")[0], i), i.sheet || i.styleSheet;
                })();
                var f = r(t("group"), { behavior: "url(#default#VML)" });
                !n(f, "transform") && f.adj ? l() : (c = n(f, "animation"));
            }
            return a;
        });
    },
    92: function (t, e, i) {
        "use strict";
        function n() {
            var t = new s.HandlebarsEnvironment();
            return (
                h.extend(t, s),
                (t.SafeString = l["default"]),
                (t.Exception = u["default"]),
                (t.Utils = h),
                (t.escapeExpression = h.escapeExpression),
                (t.VM = f),
                (t.template = function (e) {
                    return f.template(e, t);
                }),
                t
            );
        }
        var r = function (t) {
            return t && t.__esModule ? t : { default: t };
        };
        e.__esModule = !0;
        var o = i(58),
            s = r(o),
            a = i(98),
            l = r(a),
            c = i(33),
            u = r(c),
            d = i(34),
            h = r(d),
            p = i(97),
            f = r(p),
            v = i(93),
            g = r(v),
            m = n();
        (m.create = n), g["default"](m), (m["default"] = m), (e["default"] = m), (t.exports = e["default"]);
    },
    93: function (t, e) {
        (function (i) {
            "use strict";
            (e.__esModule = !0),
                (e["default"] = function (t) {
                    var e = "undefined" != typeof i ? i : window,
                        n = e.Handlebars;
                    t.noConflict = function () {
                        e.Handlebars === t && (e.Handlebars = n);
                    };
                }),
                (t.exports = e["default"]);
        }.call(
            e,
            (function () {
                return this;
            })()
        ));
    },
    97: function (t, e, i) {
        "use strict";
        function n(t) {
            var e = (t && t[0]) || 1,
                i = v.COMPILER_REVISION;
            if (e !== i) {
                if (i > e) {
                    var n = v.REVISION_CHANGES[i],
                        r = v.REVISION_CHANGES[e];
                    throw new f["default"](
                        "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + n + ") or downgrade your runtime to an older version (" + r + ")."
                    );
                }
                throw new f["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + t[1] + ").");
            }
        }
        function r(t, e) {
            function i(i, n, r) {
                r.hash && (n = h.extend({}, n, r.hash)), (i = e.VM.resolvePartial.call(this, i, n, r));
                var o = e.VM.invokePartial.call(this, i, n, r);
                if ((null == o && e.compile && ((r.partials[r.name] = e.compile(i, t.compilerOptions, e)), (o = r.partials[r.name](n, r))), null != o)) {
                    if (r.indent) {
                        for (var s = o.split("\n"), a = 0, l = s.length; l > a && (s[a] || a + 1 !== l); a++) s[a] = r.indent + s[a];
                        o = s.join("\n");
                    }
                    return o;
                }
                throw new f["default"]("The partial " + r.name + " could not be compiled when running in runtime-only mode");
            }
            function n(e) {
                var i = void 0 === arguments[1] ? {} : arguments[1],
                    o = i.data;
                n._setup(i), !i.partial && t.useData && (o = c(e, o));
                var s = void 0,
                    a = t.useBlockParams ? [] : void 0;
                return t.useDepths && (s = i.depths ? [e].concat(i.depths) : [e]), t.main.call(r, e, r.helpers, r.partials, o, a, s);
            }
            if (!e) throw new f["default"]("No environment passed to template");
            if (!t || !t.main) throw new f["default"]("Unknown template object: " + typeof t);
            e.VM.checkRevision(t.compiler);
            var r = {
                strict: function (t, e) {
                    if (!(e in t)) throw new f["default"]('"' + e + '" not defined in ' + t);
                    return t[e];
                },
                lookup: function (t, e) {
                    for (var i = t.length, n = 0; i > n; n++) if (t[n] && null != t[n][e]) return t[n][e];
                },
                lambda: function (t, e) {
                    return "function" == typeof t ? t.call(e) : t;
                },
                escapeExpression: h.escapeExpression,
                invokePartial: i,
                fn: function (e) {
                    return t[e];
                },
                programs: [],
                program: function (t, e, i, n, r) {
                    var s = this.programs[t],
                        a = this.fn(t);
                    return e || r || n || i ? (s = o(this, t, a, e, i, n, r)) : s || (s = this.programs[t] = o(this, t, a)), s;
                },
                data: function (t, e) {
                    for (; t && e--; ) t = t._parent;
                    return t;
                },
                merge: function (t, e) {
                    var i = t || e;
                    return t && e && t !== e && (i = h.extend({}, e, t)), i;
                },
                noop: e.VM.noop,
                compilerInfo: t.compiler,
            };
            return (
                (n.isTop = !0),
                (n._setup = function (i) {
                    i.partial ? ((r.helpers = i.helpers), (r.partials = i.partials)) : ((r.helpers = r.merge(i.helpers, e.helpers)), t.usePartial && (r.partials = r.merge(i.partials, e.partials)));
                }),
                (n._child = function (e, i, n, s) {
                    if (t.useBlockParams && !n) throw new f["default"]("must pass block params");
                    if (t.useDepths && !s) throw new f["default"]("must pass parent depths");
                    return o(r, e, t[e], i, 0, n, s);
                }),
                n
            );
        }
        function o(t, e, i, n, r, o, s) {
            function a(e) {
                var r = void 0 === arguments[1] ? {} : arguments[1];
                return i.call(t, e, t.helpers, t.partials, r.data || n, o && [r.blockParams].concat(o), s && [e].concat(s));
            }
            return (a.program = e), (a.depth = s ? s.length : 0), (a.blockParams = r || 0), a;
        }
        function s(t, e, i) {
            return t ? t.call || i.name || ((i.name = t), (t = i.partials[t])) : (t = i.partials[i.name]), t;
        }
        function a(t, e, i) {
            if (((i.partial = !0), void 0 === t)) throw new f["default"]("The partial " + i.name + " could not be found");
            return t instanceof Function ? t(e, i) : void 0;
        }
        function l() {
            return "";
        }
        function c(t, e) {
            return (e && "root" in e) || ((e = e ? v.createFrame(e) : {}), (e.root = t)), e;
        }
        var u = function (t) {
            return t && t.__esModule ? t : { default: t };
        };
        (e.__esModule = !0), (e.checkRevision = n), (e.template = r), (e.wrapProgram = o), (e.resolvePartial = s), (e.invokePartial = a), (e.noop = l);
        var d = i(34),
            h = u(d),
            p = i(33),
            f = u(p),
            v = i(58);
    },
    98: function (t, e) {
        "use strict";
        function i(t) {
            this.string = t;
        }
        (e.__esModule = !0),
            (i.prototype.toString = i.prototype.toHTML = function () {
                return "" + this.string;
            }),
            (e["default"] = i),
            (t.exports = e["default"]);
    },
    101: function (t, e, i) {
        var n = i(20),
            r = i(4)("toStringTag"),
            o =
                "Arguments" ==
                n(
                    (function () {
                        return arguments;
                    })()
                );
        t.exports = function (t) {
            var e, i, s;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (i = (e = Object(t))[r]) ? i : o ? n(e) : "Object" == (s = n(e)) && "function" == typeof e.callee ? "Arguments" : s;
        };
    },
    110: function (t, e, i) {
        t.exports = { default: i(129), __esModule: !0 };
    },
    117: function (t, e, i) {
        var n = i(101),
            r = i(4)("iterator"),
            o = i(17);
        t.exports = i(8).getIteratorMethod = function (t) {
            return void 0 != t ? t[r] || t["@@iterator"] || o[n(t)] : void 0;
        };
    },
    129: function (t, e, i) {
        i(56), i(50), i(51), i(145), (t.exports = i(8).Promise);
    },
    130: function (t, e, i) {
        var n = i(25),
            r = i(9).document,
            o = n(r) && n(r.createElement);
        t.exports = function (t) {
            return o ? r.createElement(t) : {};
        };
    },
    131: function (t, e, i) {
        var n = i(19),
            r = i(135),
            o = i(134),
            s = i(18),
            a = i(144),
            l = i(117);
        t.exports = function (t, e, i, c) {
            var u,
                d,
                h,
                p = l(t),
                f = n(i, c, e ? 2 : 1),
                v = 0;
            if ("function" != typeof p) throw TypeError(t + " is not iterable!");
            if (o(p)) for (u = a(t.length); u > v; v++) e ? f(s((d = t[v]))[0], d[1]) : f(t[v]);
            else for (h = p.call(t); !(d = h.next()).done; ) r(h, f, d.value, e);
        };
    },
    132: function (t, e, i) {
        t.exports = i(9).document && document.documentElement;
    },
    133: function (t, e) {
        t.exports = function (t, e, i) {
            var n = void 0 === i;
            switch (e.length) {
                case 0:
                    return n ? t() : t.call(i);
                case 1:
                    return n ? t(e[0]) : t.call(i, e[0]);
                case 2:
                    return n ? t(e[0], e[1]) : t.call(i, e[0], e[1]);
                case 3:
                    return n ? t(e[0], e[1], e[2]) : t.call(i, e[0], e[1], e[2]);
                case 4:
                    return n ? t(e[0], e[1], e[2], e[3]) : t.call(i, e[0], e[1], e[2], e[3]);
            }
            return t.apply(i, e);
        };
    },
    134: function (t, e, i) {
        var n = i(17),
            r = i(4)("iterator"),
            o = Array.prototype;
        t.exports = function (t) {
            return void 0 !== t && (n.Array === t || o[r] === t);
        };
    },
    135: function (t, e, i) {
        var n = i(18);
        t.exports = function (t, e, i, r) {
            try {
                return r ? e(n(i)[0], i[1]) : e(i);
            } catch (o) {
                var s = t["return"];
                throw (void 0 !== s && n(s.call(t)), o);
            }
        };
    },
    136: function (t, e, i) {
        var n = i(4)("iterator"),
            r = !1;
        try {
            var o = [7][n]();
            (o["return"] = function () {
                r = !0;
            }),
                Array.from(o, function () {
                    throw 2;
                });
        } catch (s) {}
        t.exports = function (t, e) {
            if (!e && !r) return !1;
            var i = !1;
            try {
                var o = [7],
                    s = o[n]();
                (s.next = function () {
                    return { done: (i = !0) };
                }),
                    (o[n] = function () {
                        return s;
                    }),
                    t(o);
            } catch (a) {}
            return i;
        };
    },
    137: function (t, e, i) {
        var n,
            r,
            o,
            s = i(9),
            a = i(143).set,
            l = s.MutationObserver || s.WebKitMutationObserver,
            c = s.process,
            u = s.Promise,
            d = "process" == i(20)(c),
            h = function () {
                var t, e, i;
                for (d && (t = c.domain) && ((c.domain = null), t.exit()); n; ) (e = n.domain), (i = n.fn), e && e.enter(), i(), e && e.exit(), (n = n.next);
                (r = void 0), t && t.enter();
            };
        if (d)
            o = function () {
                c.nextTick(h);
            };
        else if (l) {
            var p = 1,
                f = document.createTextNode("");
            new l(h).observe(f, { characterData: !0 }),
                (o = function () {
                    f.data = p = -p;
                });
        } else
            o =
                u && u.resolve
                    ? function () {
                          u.resolve().then(h);
                      }
                    : function () {
                          a.call(s, h);
                      };
        t.exports = function (t) {
            var e = { fn: t, next: void 0, domain: d && c.domain };
            r && (r.next = e), n || ((n = e), o()), (r = e);
        };
    },
    138: function (t, e, i) {
        var n = i(36);
        t.exports = function (t, e) {
            for (var i in e) n(t, i, e[i]);
            return t;
        };
    },
    139: function (t, e) {
        t.exports =
            Object.is ||
            function (t, e) {
                return t === e ? 0 !== t || 1 / t === 1 / e : t != t && e != e;
            };
    },
    140: function (t, e, i) {
        "use strict";
        var n = i(8),
            r = i(2),
            o = i(29),
            s = i(4)("species");
        t.exports = function (t) {
            var e = n[t];
            o &&
                e &&
                !e[s] &&
                r.setDesc(e, s, {
                    configurable: !0,
                    get: function () {
                        return this;
                    },
                });
        };
    },
    141: function (t, e, i) {
        var n = i(18),
            r = i(38),
            o = i(4)("species");
        t.exports = function (t, e) {
            var i,
                s = n(t).constructor;
            return void 0 === s || void 0 == (i = n(s)[o]) ? e : r(i);
        };
    },
    142: function (t, e) {
        t.exports = function (t, e, i) {
            if (!(t instanceof e)) throw TypeError(i + ": use the 'new' operator!");
            return t;
        };
    },
    143: function (t, e, i) {
        var n,
            r,
            o,
            s = i(19),
            a = i(133),
            l = i(132),
            c = i(130),
            u = i(9),
            d = u.process,
            h = u.setImmediate,
            p = u.clearImmediate,
            f = u.MessageChannel,
            v = 0,
            g = {},
            m = "onreadystatechange",
            T = function () {
                var t = +this;
                if (g.hasOwnProperty(t)) {
                    var e = g[t];
                    delete g[t], e();
                }
            },
            b = function (t) {
                T.call(t.data);
            };
        (h && p) ||
            ((h = function (t) {
                for (var e = [], i = 1; arguments.length > i; ) e.push(arguments[i++]);
                return (
                    (g[++v] = function () {
                        a("function" == typeof t ? t : Function(t), e);
                    }),
                    n(v),
                    v
                );
            }),
            (p = function (t) {
                delete g[t];
            }),
            "process" == i(20)(d)
                ? (n = function (t) {
                      d.nextTick(s(T, t, 1));
                  })
                : f
                ? ((r = new f()), (o = r.port2), (r.port1.onmessage = b), (n = s(o.postMessage, o, 1)))
                : u.addEventListener && "function" == typeof postMessage && !u.importScripts
                ? ((n = function (t) {
                      u.postMessage(t + "", "*");
                  }),
                  u.addEventListener("message", b, !1))
                : (n =
                      m in c("script")
                          ? function (t) {
                                l.appendChild(c("script"))[m] = function () {
                                    l.removeChild(this), T.call(t);
                                };
                            }
                          : function (t) {
                                setTimeout(s(T, t, 1), 0);
                            })),
            (t.exports = { set: h, clear: p });
    },
    144: function (t, e, i) {
        var n = i(49),
            r = Math.min;
        t.exports = function (t) {
            return t > 0 ? r(n(t), 9007199254740991) : 0;
        };
    },
    145: function (t, e, i) {
        "use strict";
        var n,
            r = i(2),
            o = i(35),
            s = i(9),
            a = i(19),
            l = i(101),
            c = i(14),
            u = i(25),
            d = i(18),
            h = i(38),
            p = i(142),
            f = i(131),
            v = i(55).set,
            g = i(139),
            m = i(4)("species"),
            T = i(141),
            b = i(137),
            y = "Promise",
            S = s.process,
            x = "process" == l(S),
            w = s[y],
            P = function () {},
            A = function (t) {
                var e,
                    i = new w(P);
                return (
                    t &&
                        (i.constructor = function (t) {
                            t(P, P);
                        }),
                    (e = w.resolve(i))["catch"](P),
                    e === i
                );
            },
            C = (function () {
                function t(e) {
                    var i = new w(e);
                    return v(i, t.prototype), i;
                }
                var e = !1;
                try {
                    if (((e = w && w.resolve && A()), v(t, w), (t.prototype = r.create(w.prototype, { constructor: { value: t } })), t.resolve(5).then(function () {}) instanceof t || (e = !1), e && i(29))) {
                        var n = !1;
                        w.resolve(
                            r.setDesc({}, "then", {
                                get: function () {
                                    n = !0;
                                },
                            })
                        ),
                            (e = n);
                    }
                } catch (o) {
                    e = !1;
                }
                return e;
            })(),
            k = function (t, e) {
                return o && t === w && e === n ? !0 : g(t, e);
            },
            M = function (t) {
                var e = d(t)[m];
                return void 0 != e ? e : t;
            },
            E = function (t) {
                var e;
                return u(t) && "function" == typeof (e = t.then) ? e : !1;
            },
            _ = function (t) {
                var e, i;
                (this.promise = new t(function (t, n) {
                    if (void 0 !== e || void 0 !== i) throw TypeError("Bad Promise constructor");
                    (e = t), (i = n);
                })),
                    (this.resolve = h(e)),
                    (this.reject = h(i));
            },
            H = function (t) {
                try {
                    t();
                } catch (e) {
                    return { error: e };
                }
            },
            G = function (t, e) {
                if (!t.n) {
                    t.n = !0;
                    var i = t.c;
                    b(function () {
                        for (
                            var n = t.v,
                                r = 1 == t.s,
                                o = 0,
                                a = function (e) {
                                    var i,
                                        o,
                                        s = r ? e.ok : e.fail,
                                        a = e.resolve,
                                        l = e.reject;
                                    try {
                                        s ? (r || (t.h = !0), (i = s === !0 ? n : s(n)), i === e.promise ? l(TypeError("Promise-chain cycle")) : (o = E(i)) ? o.call(i, a, l) : a(i)) : l(n);
                                    } catch (c) {
                                        l(c);
                                    }
                                };
                            i.length > o;

                        )
                            a(i[o++]);
                        (i.length = 0),
                            (t.n = !1),
                            e &&
                                setTimeout(function () {
                                    var e,
                                        i,
                                        r = t.p;
                                    D(r) && (x ? S.emit("unhandledRejection", n, r) : (e = s.onunhandledrejection) ? e({ promise: r, reason: n }) : (i = s.console) && i.error && i.error("Unhandled promise rejection", n)), (t.a = void 0);
                                }, 1);
                    });
                }
            },
            D = function (t) {
                var e,
                    i = t._d,
                    n = i.a || i.c,
                    r = 0;
                if (i.h) return !1;
                for (; n.length > r; ) if (((e = n[r++]), e.fail || !D(e.promise))) return !1;
                return !0;
            },
            I = function (t) {
                var e = this;
                e.d || ((e.d = !0), (e = e.r || e), (e.v = t), (e.s = 2), (e.a = e.c.slice()), G(e, !0));
            },
            B = function (t) {
                var e,
                    i = this;
                if (!i.d) {
                    (i.d = !0), (i = i.r || i);
                    try {
                        if (i.p === t) throw TypeError("Promise can't be resolved itself");
                        (e = E(t))
                            ? b(function () {
                                  var n = { r: i, d: !1 };
                                  try {
                                      e.call(t, a(B, n, 1), a(I, n, 1));
                                  } catch (r) {
                                      I.call(n, r);
                                  }
                              })
                            : ((i.v = t), (i.s = 1), G(i, !1));
                    } catch (n) {
                        I.call({ r: i, d: !1 }, n);
                    }
                }
            };
        C ||
            ((w = function (t) {
                h(t);
                var e = (this._d = { p: p(this, w, y), c: [], a: void 0, s: 0, d: !1, v: void 0, h: !1, n: !1 });
                try {
                    t(a(B, e, 1), a(I, e, 1));
                } catch (i) {
                    I.call(e, i);
                }
            }),
            i(138)(w.prototype, {
                then: function (t, e) {
                    var i = new _(T(this, w)),
                        n = i.promise,
                        r = this._d;
                    return (i.ok = "function" == typeof t ? t : !0), (i.fail = "function" == typeof e && e), r.c.push(i), r.a && r.a.push(i), r.s && G(r, !1), n;
                },
                catch: function (t) {
                    return this.then(void 0, t);
                },
            })),
            c(c.G + c.W + c.F * !C, { Promise: w }),
            i(21)(w, y),
            i(140)(y),
            (n = i(8)[y]),
            c(c.S + c.F * !C, y, {
                reject: function (t) {
                    var e = new _(this),
                        i = e.reject;
                    return i(t), e.promise;
                },
            }),
            c(c.S + c.F * (!C || A(!0)), y, {
                resolve: function (t) {
                    if (t instanceof w && k(t.constructor, this)) return t;
                    var e = new _(this),
                        i = e.resolve;
                    return i(t), e.promise;
                },
            }),
            c(
                c.S +
                    c.F *
                        !(
                            C &&
                            i(136)(function (t) {
                                w.all(t)["catch"](function () {});
                            })
                        ),
                y,
                {
                    all: function (t) {
                        var e = M(this),
                            i = new _(e),
                            n = i.resolve,
                            o = i.reject,
                            s = [],
                            a = H(function () {
                                f(t, !1, s.push, s);
                                var i = s.length,
                                    a = Array(i);
                                i
                                    ? r.each.call(s, function (t, r) {
                                          var s = !1;
                                          e.resolve(t).then(function (t) {
                                              s || ((s = !0), (a[r] = t), --i || n(a));
                                          }, o);
                                      })
                                    : n(a);
                            });
                        return a && o(a.error), i.promise;
                    },
                    race: function (t) {
                        var e = M(this),
                            i = new _(e),
                            n = i.reject,
                            r = H(function () {
                                f(t, !1, function (t) {
                                    e.resolve(t).then(i.resolve, n);
                                });
                            });
                        return r && n(r.error), i.promise;
                    },
                }
            );
    },
    186: function (t, e, i) {
        !(function (t, e) {
            t(function () {
                "use strict";
                function t(t, e) {
                    return null != t && null != e && t.toLowerCase() === e.toLowerCase();
                }
                function i(t) {
                    for (var e in t) s.call(t, e) && (t[e] = new RegExp(t[e], "i"));
                }
                function n(t, e) {
                    (this.ua = t || ""), (this._cache = {}), (this.maxPhoneWidth = e || 600);
                }
                var r = {};
                (r.mobileDetectRules = {
                    phones: {
                        iPhone: "\\biPhone\\b|\\biPod\\b",
                        BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+",
                        HTC:
                            "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m",
                        Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
                        Dell: "Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                        Motorola:
                            "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b",
                        Samsung:
                            "Samsung|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205",
                        LG:
                            "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802)",
                        Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
                        Asus: "Asus.*Galaxy|PadFone.*Mobile",
                        Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                        Palm: "PalmSource|Palm",
                        Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                        Pantech:
                            "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                        Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                        Wiko:
                            "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
                        iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                        SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                        Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                        Alcatel: "Alcatel",
                        Nintendo: "Nintendo 3DS",
                        Amoi: "Amoi",
                        INQ: "INQ",
                        GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser",
                    },
                    tablets: {
                        iPad: "iPad|iPad.*Mobile",
                        NexusTablet: "Android.*Nexus[\\s]+(7|9|10)|^.*Android.*Nexus(?:(?!Mobile).)*$",
                        SamsungTablet:
                            "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805",
                        Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI)\\b",
                        SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                        HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                        AsusTablet:
                            "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K017 |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C",
                        BlackBerryTablet: "PlayBook|RIM Tablet",
                        HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                        MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                        NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                        AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b",
                        ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                        LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                        FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                        PrestigioTablet:
                            "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD",
                        LenovoTablet: "Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)",
                        DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                        YarvikTablet:
                            "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                        MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                        ArnovaTablet: "AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                        IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                        IRUTablet: "M702pro",
                        MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                        EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                        AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                        ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                        AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                        SonyTablet:
                            "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612",
                        PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                        CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                        CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                        MIDTablet:
                            "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733",
                        MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                        SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                        RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                        FlyTablet: "IQ310|Fly Vision",
                        bqTablet: "(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris E10)|Maxwell.*Lite|Maxwell.*Plus",
                        HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim",
                        NecTablet: "\\bN-06D|\\bN-08D",
                        PantechTablet: "Pantech.*P4100",
                        BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
                        VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                        ZyncTablet: "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
                        PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
                        NabiTablet: "Android.*\\bNabi",
                        KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                        DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                        TexetTablet:
                            "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                        PlaystationTablet: "Playstation.*(Portable|Vita)",
                        TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                        PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                        AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                        DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                        GalapadTablet: "Android.*\\bG1\\b",
                        MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                        KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                        AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                        PROSCANTablet:
                            "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                        YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                        ChangJiaTablet:
                            "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                        GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
                        PointOfViewTablet:
                            "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                        OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)",
                        HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                        DPSTablet: "DPS Dream 9|DPS Dual 7",
                        VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                        CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                        MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
                        ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
                        GoCleverTablet:
                            "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                        ModecomTablet:
                            "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                        VoninoTablet:
                            "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                        ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
                        StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                        VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7",
                        EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                        RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                        iMobileTablet: "i-mobile i-note",
                        TolinoTablet: "tolino tab [0-9.]+|tolino shine",
                        AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                        AMPETablet: "Android.* A78 ",
                        SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                        TecnoTablet: "TECNO P9",
                        JXDTablet:
                            "Android.*\\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                        iJoyTablet:
                            "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                        FX2Tablet: "FX2 PAD7|FX2 PAD10",
                        XoroTablet:
                            "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                        ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                        OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                        CaptivaTablet: "CAPTIVA PAD",
                        IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                        TeclastTablet:
                            "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                        OndaTablet:
                            "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+",
                        JaytechTablet: "TPC-PA762",
                        BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
                        DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                        EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                        LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
                        CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                        WolderTablet:
                            "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
                        MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                        NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
                        NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                        UbislateTablet: "UbiSlate[\\s]?7C",
                        PocketBookTablet: "Pocketbook",
                        Hudl: "Hudl HT7S3",
                        TelstraTablet: "T-Hub2",
                        GenericTablet:
                            "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bJolla\\b",
                    },
                    oss: {
                        AndroidOS: "Android",
                        BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
                        PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                        SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                        WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
                        WindowsPhoneOS: "Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                        iOS: "\\biPhone.*Mobile|\\biPod|\\biPad",
                        MeeGoOS: "MeeGo",
                        MaemoOS: "Maemo",
                        JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
                        webOS: "webOS|hpwOS",
                        badaOS: "\\bBada\\b",
                        BREWOS: "BREW",
                    },
                    uas: {
                        Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
                        Dolfin: "\\bDolfin\\b",
                        Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+|Coast/[0-9.]+",
                        Skyfire: "Skyfire",
                        IE: "IEMobile|MSIEMobile",
                        Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile",
                        Bolt: "bolt",
                        TeaShark: "teashark",
                        Blazer: "Blazer",
                        Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                        Tizen: "Tizen",
                        UCBrowser: "UC.*Browser|UCWEB",
                        baiduboxapp: "baiduboxapp",
                        baidubrowser: "baidubrowser",
                        DiigoBrowser: "DiigoBrowser",
                        Puffin: "Puffin",
                        Mercury: "\\bMercury\\b",
                        ObigoBrowser: "Obigo",
                        NetFront: "NF-Browser",
                        GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
                    },
                    props: {
                        Mobile: "Mobile/[VER]",
                        Build: "Build/[VER]",
                        Version: "Version/[VER]",
                        VendorID: "VendorID/[VER]",
                        iPad: "iPad.*CPU[a-z ]+[VER]",
                        iPhone: "iPhone.*CPU[a-z ]+[VER]",
                        iPod: "iPod.*CPU[a-z ]+[VER]",
                        Kindle: "Kindle/[VER]",
                        Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
                        Coast: ["Coast/[VER]"],
                        Dolfin: "Dolfin/[VER]",
                        Firefox: "Firefox/[VER]",
                        Fennec: "Fennec/[VER]",
                        IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
                        NetFront: "NetFront/[VER]",
                        NokiaBrowser: "NokiaBrowser/[VER]",
                        Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
                        "Opera Mini": "Opera Mini/[VER]",
                        "Opera Mobi": "Version/[VER]",
                        "UC Browser": "UC Browser[VER]",
                        MQQBrowser: "MQQBrowser/[VER]",
                        MicroMessenger: "MicroMessenger/[VER]",
                        baiduboxapp: "baiduboxapp/[VER]",
                        baidubrowser: "baidubrowser/[VER]",
                        Iron: "Iron/[VER]",
                        Safari: ["Version/[VER]", "Safari/[VER]"],
                        Skyfire: "Skyfire/[VER]",
                        Tizen: "Tizen/[VER]",
                        Webkit: "webkit[ /][VER]",
                        Gecko: "Gecko/[VER]",
                        Trident: "Trident/[VER]",
                        Presto: "Presto/[VER]",
                        iOS: " \\bi?OS\\b [VER][ ;]{1}",
                        Android: "Android [VER]",
                        BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
                        BREW: "BREW [VER]",
                        Java: "Java/[VER]",
                        "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
                        "Windows Phone": "Windows Phone [VER]",
                        "Windows CE": "Windows CE/[VER]",
                        "Windows NT": "Windows NT [VER]",
                        Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
                        webOS: ["webOS/[VER]", "hpwOS/[VER];"],
                    },
                    utils: {
                        Bot: "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor",
                        MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
                        DesktopMode: "WPDesktop",
                        TV: "SonyDTV|HbbTV",
                        WebKit: "(webkit)[ /]([\\w.]+)",
                        Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b",
                        Watch: "SM-V700",
                    },
                }),
                    (r.detectMobileBrowsers = {
                        fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                        shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                        tabletPattern: /android|ipad|playbook|silk/i,
                    });
                var o,
                    s = Object.prototype.hasOwnProperty;
                return (
                    (r.FALLBACK_PHONE = "UnknownPhone"),
                    (r.FALLBACK_TABLET = "UnknownTablet"),
                    (r.FALLBACK_MOBILE = "UnknownMobile"),
                    (o =
                        "isArray" in Array
                            ? Array.isArray
                            : function (t) {
                                  return "[object Array]" === Object.prototype.toString.call(t);
                              }),
                    (function () {
                        var t,
                            e,
                            n,
                            a,
                            l,
                            c,
                            u = r.mobileDetectRules;
                        for (t in u.props)
                            if (s.call(u.props, t)) {
                                for (e = u.props[t], o(e) || (e = [e]), l = e.length, a = 0; l > a; ++a)
                                    (n = e[a]), (c = n.indexOf("[VER]")), c >= 0 && (n = n.substring(0, c) + "([\\w._\\+]+)" + n.substring(c + 5)), (e[a] = new RegExp(n, "i"));
                                u.props[t] = e;
                            }
                        i(u.oss), i(u.phones), i(u.tablets), i(u.uas), i(u.utils), (u.oss0 = { WindowsPhoneOS: u.oss.WindowsPhoneOS, WindowsMobileOS: u.oss.WindowsMobileOS });
                    })(),
                    (r.findMatch = function (t, e) {
                        for (var i in t) if (s.call(t, i) && t[i].test(e)) return i;
                        return null;
                    }),
                    (r.getVersionStr = function (t, e) {
                        var i,
                            n,
                            o,
                            a,
                            l = r.mobileDetectRules.props;
                        if (s.call(l, t)) for (i = l[t], o = i.length, n = 0; o > n; ++n) if (((a = i[n].exec(e)), null !== a)) return a[1];
                        return null;
                    }),
                    (r.getVersion = function (t, e) {
                        var i = r.getVersionStr(t, e);
                        return i ? r.prepareVersionNo(i) : 0 / 0;
                    }),
                    (r.prepareVersionNo = function (t) {
                        var e;
                        return (e = t.split(/[a-z._ \/\-]/i)), 1 === e.length && (t = e[0]), e.length > 1 && ((t = e[0] + "."), e.shift(), (t += e.join(""))), Number(t);
                    }),
                    (r.isMobileFallback = function (t) {
                        return r.detectMobileBrowsers.fullPattern.test(t) || r.detectMobileBrowsers.shortPattern.test(t.substr(0, 4));
                    }),
                    (r.isTabletFallback = function (t) {
                        return r.detectMobileBrowsers.tabletPattern.test(t);
                    }),
                    (r.prepareDetectionCache = function (t, i, o) {
                        if (t.mobile === e) {
                            var s, a, l;
                            return (a = r.findMatch(r.mobileDetectRules.tablets, i))
                                ? ((t.mobile = t.tablet = a), void (t.phone = null))
                                : (s = r.findMatch(r.mobileDetectRules.phones, i))
                                ? ((t.mobile = t.phone = s), void (t.tablet = null))
                                : void (r.isMobileFallback(i)
                                      ? ((l = n.isPhoneSized(o)),
                                        l === e
                                            ? ((t.mobile = r.FALLBACK_MOBILE), (t.tablet = t.phone = null))
                                            : l
                                            ? ((t.mobile = t.phone = r.FALLBACK_PHONE), (t.tablet = null))
                                            : ((t.mobile = t.tablet = r.FALLBACK_TABLET), (t.phone = null)))
                                      : r.isTabletFallback(i)
                                      ? ((t.mobile = t.tablet = r.FALLBACK_TABLET), (t.phone = null))
                                      : (t.mobile = t.tablet = t.phone = null));
                        }
                    }),
                    (r.mobileGrade = function (t) {
                        var e = null !== t.mobile();
                        return (t.os("iOS") && t.version("iPad") >= 4.3) ||
                            (t.os("iOS") && t.version("iPhone") >= 3.1) ||
                            (t.os("iOS") && t.version("iPod") >= 3.1) ||
                            (t.version("Android") > 2.1 && t.is("Webkit")) ||
                            t.version("Windows Phone OS") >= 7 ||
                            (t.is("BlackBerry") && t.version("BlackBerry") >= 6) ||
                            t.match("Playbook.*Tablet") ||
                            (t.version("webOS") >= 1.4 && t.match("Palm|Pre|Pixi")) ||
                            t.match("hp.*TouchPad") ||
                            (t.is("Firefox") && t.version("Firefox") >= 12) ||
                            (t.is("Chrome") && t.is("AndroidOS") && t.version("Android") >= 4) ||
                            (t.is("Skyfire") && t.version("Skyfire") >= 4.1 && t.is("AndroidOS") && t.version("Android") >= 2.3) ||
                            (t.is("Opera") && t.version("Opera Mobi") > 11 && t.is("AndroidOS")) ||
                            t.is("MeeGoOS") ||
                            t.is("Tizen") ||
                            (t.is("Dolfin") && t.version("Bada") >= 2) ||
                            ((t.is("UC Browser") || t.is("Dolfin")) && t.version("Android") >= 2.3) ||
                            t.match("Kindle Fire") ||
                            (t.is("Kindle") && t.version("Kindle") >= 3) ||
                            (t.is("AndroidOS") && t.is("NookTablet")) ||
                            (t.version("Chrome") >= 11 && !e) ||
                            (t.version("Safari") >= 5 && !e) ||
                            (t.version("Firefox") >= 4 && !e) ||
                            (t.version("MSIE") >= 7 && !e) ||
                            (t.version("Opera") >= 10 && !e)
                            ? "A"
                            : (t.os("iOS") && t.version("iPad") < 4.3) ||
                              (t.os("iOS") && t.version("iPhone") < 3.1) ||
                              (t.os("iOS") && t.version("iPod") < 3.1) ||
                              (t.is("Blackberry") && t.version("BlackBerry") >= 5 && t.version("BlackBerry") < 6) ||
                              (t.version("Opera Mini") >= 5 && t.version("Opera Mini") <= 6.5 && (t.version("Android") >= 2.3 || t.is("iOS"))) ||
                              t.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") ||
                              (t.version("Opera Mobi") >= 11 && t.is("SymbianOS"))
                            ? "B"
                            : (t.version("BlackBerry") < 5 || t.match("MSIEMobile|Windows CE.*Mobile") || t.version("Windows Mobile") <= 5.2, "C");
                    }),
                    (r.detectOS = function (t) {
                        return r.findMatch(r.mobileDetectRules.oss0, t) || r.findMatch(r.mobileDetectRules.oss, t);
                    }),
                    (r.getDeviceSmallerSide = function () {
                        return window.screen.width < window.screen.height ? window.screen.width : window.screen.height;
                    }),
                    (n.prototype = {
                        constructor: n,
                        mobile: function () {
                            return r.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile;
                        },
                        phone: function () {
                            return r.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone;
                        },
                        tablet: function () {
                            return r.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet;
                        },
                        userAgent: function () {
                            return this._cache.userAgent === e && (this._cache.userAgent = r.findMatch(r.mobileDetectRules.uas, this.ua)), this._cache.userAgent;
                        },
                        os: function () {
                            return this._cache.os === e && (this._cache.os = r.detectOS(this.ua)), this._cache.os;
                        },
                        version: function (t) {
                            return r.getVersion(t, this.ua);
                        },
                        versionStr: function (t) {
                            return r.getVersionStr(t, this.ua);
                        },
                        is: function (e) {
                            return t(e, this.userAgent()) || t(e, this.os()) || t(e, this.phone()) || t(e, this.tablet()) || t(e, r.findMatch(r.mobileDetectRules.utils, this.ua));
                        },
                        match: function (t) {
                            return t instanceof RegExp || (t = new RegExp(t, "i")), t.test(this.ua);
                        },
                        isPhoneSized: function (t) {
                            return n.isPhoneSized(t || this.maxPhoneWidth);
                        },
                        mobileGrade: function () {
                            return this._cache.grade === e && (this._cache.grade = r.mobileGrade(this)), this._cache.grade;
                        },
                    }),
                    (n.isPhoneSized =
                        "undefined" != typeof window && window.screen
                            ? function (t) {
                                  return 0 > t ? e : r.getDeviceSmallerSide() <= t;
                              }
                            : function () {}),
                    (n._impl = r),
                    n
                );
            });
        })(
            (function (e) {
                return "undefined" != typeof t && t.exports
                    ? function (e) {
                          t.exports = e();
                      }
                    : i(303);
            })()
        );
    },
    189: function (t, e, i) {
        t.exports = { default: i(190), __esModule: !0 };
    },
    190: function (t, e, i) {
        i(191), (t.exports = i(8).Object.keys);
    },
    191: function (t, e, i) {
        var n = i(46);
        i(45)("keys", function (t) {
            return function (e) {
                return t(n(e));
            };
        });
    },
    282: function (t, e, i) {
        var n, r, o;
        !(function (s) {
            "use strict";
            (r = [i(3)]), (n = s), (o = "function" == typeof n ? n.apply(e, r) : n), !(void 0 !== o && (t.exports = o));
        })(function (t) {
            "use strict";
            var e = window.Slick || {};
            (e = (function () {
                function e(e, n) {
                    var r,
                        o = this;
                    (o.defaults = {
                        accessibility: !0,
                        adaptiveHeight: !1,
                        appendArrows: t(e),
                        appendDots: t(e),
                        arrows: !0,
                        asNavFor: null,
                        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                        autoplay: !1,
                        autoplaySpeed: 3e3,
                        centerMode: !1,
                        centerPadding: "50px",
                        cssEase: "ease",
                        customPaging: function (e, i) {
                            return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
                        },
                        dots: !1,
                        dotsClass: "slick-dots",
                        draggable: !0,
                        easing: "linear",
                        edgeFriction: 0.35,
                        fade: !1,
                        focusOnSelect: !1,
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
                    }),
                        (o.initials = {
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
                            slideCount: null,
                            slideWidth: null,
                            $slideTrack: null,
                            $slides: null,
                            sliding: !1,
                            slideOffset: 0,
                            swipeLeft: null,
                            $list: null,
                            touchObject: {},
                            transformsEnabled: !1,
                            unslicked: !1,
                        }),
                        t.extend(o, o.initials),
                        (o.activeBreakpoint = null),
                        (o.animType = null),
                        (o.animProp = null),
                        (o.breakpoints = []),
                        (o.breakpointSettings = []),
                        (o.cssTransitions = !1),
                        (o.focussed = !1),
                        (o.interrupted = !1),
                        (o.hidden = "hidden"),
                        (o.paused = !0),
                        (o.positionProp = null),
                        (o.respondTo = null),
                        (o.rowCount = 1),
                        (o.shouldClick = !0),
                        (o.$slider = t(e)),
                        (o.$slidesCache = null),
                        (o.transformType = null),
                        (o.transitionType = null),
                        (o.visibilityChange = "visibilitychange"),
                        (o.windowWidth = 0),
                        (o.windowTimer = null),
                        (r = t(e).data("slick") || {}),
                        (o.options = t.extend({}, o.defaults, n, r)),
                        (o.currentSlide = o.options.initialSlide),
                        (o.originalSettings = o.options),
                        "undefined" != typeof document.mozHidden
                            ? ((o.hidden = "mozHidden"), (o.visibilityChange = "mozvisibilitychange"))
                            : "undefined" != typeof document.webkitHidden && ((o.hidden = "webkitHidden"), (o.visibilityChange = "webkitvisibilitychange")),
                        (o.autoPlay = t.proxy(o.autoPlay, o)),
                        (o.autoPlayClear = t.proxy(o.autoPlayClear, o)),
                        (o.autoPlayIterator = t.proxy(o.autoPlayIterator, o)),
                        (o.changeSlide = t.proxy(o.changeSlide, o)),
                        (o.clickHandler = t.proxy(o.clickHandler, o)),
                        (o.selectHandler = t.proxy(o.selectHandler, o)),
                        (o.setPosition = t.proxy(o.setPosition, o)),
                        (o.swipeHandler = t.proxy(o.swipeHandler, o)),
                        (o.dragHandler = t.proxy(o.dragHandler, o)),
                        (o.keyHandler = t.proxy(o.keyHandler, o)),
                        (o.instanceUid = i++),
                        (o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                        o.registerBreakpoints(),
                        o.init(!0);
                }
                var i = 0;
                return e;
            })()),
                (e.prototype.activateADA = function () {
                    var t = this;
                    t.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
                }),
                (e.prototype.addSlide = e.prototype.slickAdd = function (e, i, n) {
                    var r = this;
                    if ("boolean" == typeof i) (n = i), (i = null);
                    else if (0 > i || i >= r.slideCount) return !1;
                    r.unload(),
                        "number" == typeof i
                            ? 0 === i && 0 === r.$slides.length
                                ? t(e).appendTo(r.$slideTrack)
                                : n
                                ? t(e).insertBefore(r.$slides.eq(i))
                                : t(e).insertAfter(r.$slides.eq(i))
                            : n === !0
                            ? t(e).prependTo(r.$slideTrack)
                            : t(e).appendTo(r.$slideTrack),
                        (r.$slides = r.$slideTrack.children(this.options.slide)),
                        r.$slideTrack.children(this.options.slide).detach(),
                        r.$slideTrack.append(r.$slides),
                        r.$slides.each(function (e, i) {
                            t(i).attr("data-slick-index", e);
                        }),
                        (r.$slidesCache = r.$slides),
                        r.reinit();
                }),
                (e.prototype.animateHeight = function () {
                    var t = this;
                    if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                        var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                        t.$list.animate({ height: e }, t.options.speed);
                    }
                }),
                (e.prototype.animateSlide = function (e, i) {
                    var n = {},
                        r = this;
                    r.animateHeight(),
                        r.options.rtl === !0 && r.options.vertical === !1 && (e = -e),
                        r.transformsEnabled === !1
                            ? r.options.vertical === !1
                                ? r.$slideTrack.animate({ left: e }, r.options.speed, r.options.easing, i)
                                : r.$slideTrack.animate({ top: e }, r.options.speed, r.options.easing, i)
                            : r.cssTransitions === !1
                            ? (r.options.rtl === !0 && (r.currentLeft = -r.currentLeft),
                              t({ animStart: r.currentLeft }).animate(
                                  { animStart: e },
                                  {
                                      duration: r.options.speed,
                                      easing: r.options.easing,
                                      step: function (t) {
                                          (t = Math.ceil(t)), r.options.vertical === !1 ? ((n[r.animType] = "translate(" + t + "px, 0px)"), r.$slideTrack.css(n)) : ((n[r.animType] = "translate(0px," + t + "px)"), r.$slideTrack.css(n));
                                      },
                                      complete: function () {
                                          i && i.call();
                                      },
                                  }
                              ))
                            : (r.applyTransition(),
                              (e = Math.ceil(e)),
                              (n[r.animType] = r.options.vertical === !1 ? "translate3d(" + e + "px, 0px, 0px)" : "translate3d(0px," + e + "px, 0px)"),
                              r.$slideTrack.css(n),
                              i &&
                                  setTimeout(function () {
                                      r.disableTransition(), i.call();
                                  }, r.options.speed));
                }),
                (e.prototype.getNavTarget = function () {
                    var e = this,
                        i = e.options.asNavFor;
                    return i && null !== i && (i = t(i).not(e.$slider)), i;
                }),
                (e.prototype.asNavFor = function (e) {
                    var i = this,
                        n = i.getNavTarget();
                    null !== n &&
                        "object" == typeof n &&
                        n.each(function () {
                            var i = t(this).slick("getSlick");
                            i.unslicked || i.slideHandler(e, !0);
                        });
                }),
                (e.prototype.applyTransition = function (t) {
                    var e = this,
                        i = {};
                    (i[e.transitionType] = e.options.fade === !1 ? e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : "opacity " + e.options.speed + "ms " + e.options.cssEase),
                        e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i);
                }),
                (e.prototype.autoPlay = function () {
                    var t = this;
                    t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed));
                }),
                (e.prototype.autoPlayClear = function () {
                    var t = this;
                    t.autoPlayTimer && clearInterval(t.autoPlayTimer);
                }),
                (e.prototype.autoPlayIterator = function () {
                    var t = this,
                        e = t.currentSlide + t.options.slidesToScroll;
                    t.paused ||
                        t.interrupted ||
                        t.focussed ||
                        (t.options.infinite === !1 &&
                            (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? (t.direction = 0) : 0 === t.direction && ((e = t.currentSlide - t.options.slidesToScroll), t.currentSlide - 1 === 0 && (t.direction = 1))),
                        t.slideHandler(e));
                }),
                (e.prototype.buildArrows = function () {
                    var e = this;
                    e.options.arrows === !0 &&
                        ((e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow")),
                        (e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow")),
                        e.slideCount > e.options.slidesToShow
                            ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                              e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                              e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
                              e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
                              e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"))
                            : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
                }),
                (e.prototype.buildDots = function () {
                    var e,
                        i,
                        n = this;
                    if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
                        for (n.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
                        (n.$dots = i.appendTo(n.options.appendDots)), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
                    }
                }),
                (e.prototype.buildOut = function () {
                    var e = this;
                    (e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide")),
                        (e.slideCount = e.$slides.length),
                        e.$slides.each(function (e, i) {
                            t(i)
                                .attr("data-slick-index", e)
                                .data("originalStyling", t(i).attr("style") || "");
                        }),
                        e.$slider.addClass("slick-slider"),
                        (e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
                        (e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent()),
                        e.$slideTrack.css("opacity", 0),
                        (e.options.centerMode === !0 || e.options.swipeToSlide === !0) && (e.options.slidesToScroll = 1),
                        t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
                        e.setupInfinite(),
                        e.buildArrows(),
                        e.buildDots(),
                        e.updateDots(),
                        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
                        e.options.draggable === !0 && e.$list.addClass("draggable");
                }),
                (e.prototype.buildRows = function () {
                    var t,
                        e,
                        i,
                        n,
                        r,
                        o,
                        s,
                        a = this;
                    if (((n = document.createDocumentFragment()), (o = a.$slider.children()), a.options.rows > 1)) {
                        for (s = a.options.slidesPerRow * a.options.rows, r = Math.ceil(o.length / s), t = 0; r > t; t++) {
                            var l = document.createElement("div");
                            for (e = 0; e < a.options.rows; e++) {
                                var c = document.createElement("div");
                                for (i = 0; i < a.options.slidesPerRow; i++) {
                                    var u = t * s + (e * a.options.slidesPerRow + i);
                                    o.get(u) && c.appendChild(o.get(u));
                                }
                                l.appendChild(c);
                            }
                            n.appendChild(l);
                        }
                        a.$slider.empty().append(n),
                            a.$slider
                                .children()
                                .children()
                                .children()
                                .css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" });
                    }
                }),
                (e.prototype.checkResponsive = function (e, i) {
                    var n,
                        r,
                        o,
                        s = this,
                        a = !1,
                        l = s.$slider.width(),
                        c = window.innerWidth || t(window).width();
                    if (("window" === s.respondTo ? (o = c) : "slider" === s.respondTo ? (o = l) : "min" === s.respondTo && (o = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive)) {
                        r = null;
                        for (n in s.breakpoints) s.breakpoints.hasOwnProperty(n) && (s.originalSettings.mobileFirst === !1 ? o < s.breakpoints[n] && (r = s.breakpoints[n]) : o > s.breakpoints[n] && (r = s.breakpoints[n]));
                        null !== r
                            ? null !== s.activeBreakpoint
                                ? (r !== s.activeBreakpoint || i) &&
                                  ((s.activeBreakpoint = r),
                                  "unslick" === s.breakpointSettings[r] ? s.unslick(r) : ((s.options = t.extend({}, s.originalSettings, s.breakpointSettings[r])), e === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(e)),
                                  (a = r))
                                : ((s.activeBreakpoint = r),
                                  "unslick" === s.breakpointSettings[r] ? s.unslick(r) : ((s.options = t.extend({}, s.originalSettings, s.breakpointSettings[r])), e === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(e)),
                                  (a = r))
                            : null !== s.activeBreakpoint && ((s.activeBreakpoint = null), (s.options = s.originalSettings), e === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(e), (a = r)),
                            e || a === !1 || s.$slider.trigger("breakpoint", [s, a]);
                    }
                }),
                (e.prototype.changeSlide = function (e, i) {
                    var n,
                        r,
                        o,
                        s = this,
                        a = t(e.currentTarget);
                    switch (
                        (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), (o = s.slideCount % s.options.slidesToScroll !== 0), (n = o ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll), e.data.message)
                    ) {
                        case "previous":
                            (r = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n), s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - r, !1, i);
                            break;
                        case "next":
                            (r = 0 === n ? s.options.slidesToScroll : n), s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + r, !1, i);
                            break;
                        case "index":
                            var l = 0 === e.data.index ? 0 : e.data.index || a.index() * s.options.slidesToScroll;
                            s.slideHandler(s.checkNavigable(l), !1, i), a.children().trigger("focus");
                            break;
                        default:
                            return;
                    }
                }),
                (e.prototype.checkNavigable = function (t) {
                    var e,
                        i,
                        n = this;
                    if (((e = n.getNavigableIndexes()), (i = 0), t > e[e.length - 1])) t = e[e.length - 1];
                    else
                        for (var r in e) {
                            if (t < e[r]) {
                                t = i;
                                break;
                            }
                            i = e[r];
                        }
                    return t;
                }),
                (e.prototype.cleanUpEvents = function () {
                    var e = this;
                    e.options.dots && null !== e.$dots && t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)),
                        e.$slider.off("focus.slick blur.slick"),
                        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)),
                        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
                        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
                        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
                        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
                        e.$list.off("click.slick", e.clickHandler),
                        t(document).off(e.visibilityChange, e.visibility),
                        e.cleanUpSlideEvents(),
                        e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler),
                        e.options.focusOnSelect === !0 && t(e.$slideTrack).children().off("click.slick", e.selectHandler),
                        t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
                        t(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
                        t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
                        t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition),
                        t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition);
                }),
                (e.prototype.cleanUpSlideEvents = function () {
                    var e = this;
                    e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1));
                }),
                (e.prototype.cleanUpRows = function () {
                    var t,
                        e = this;
                    e.options.rows > 1 && ((t = e.$slides.children().children()), t.removeAttr("style"), e.$slider.empty().append(t));
                }),
                (e.prototype.clickHandler = function (t) {
                    var e = this;
                    e.shouldClick === !1 && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault());
                }),
                (e.prototype.destroy = function (e) {
                    var i = this;
                    i.autoPlayClear(),
                        (i.touchObject = {}),
                        i.cleanUpEvents(),
                        t(".slick-cloned", i.$slider).detach(),
                        i.$dots && i.$dots.remove(),
                        i.$prevArrow &&
                            i.$prevArrow.length &&
                            (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()),
                        i.$nextArrow &&
                            i.$nextArrow.length &&
                            (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()),
                        i.$slides &&
                            (i.$slides
                                .removeClass("slick-slide slick-active slick-center slick-visible slick-current")
                                .removeAttr("aria-hidden")
                                .removeAttr("data-slick-index")
                                .each(function () {
                                    t(this).attr("style", t(this).data("originalStyling"));
                                }),
                            i.$slideTrack.children(this.options.slide).detach(),
                            i.$slideTrack.detach(),
                            i.$list.detach(),
                            i.$slider.append(i.$slides)),
                        i.cleanUpRows(),
                        i.$slider.removeClass("slick-slider"),
                        i.$slider.removeClass("slick-initialized"),
                        i.$slider.removeClass("slick-dotted"),
                        (i.unslicked = !0),
                        e || i.$slider.trigger("destroy", [i]);
                }),
                (e.prototype.disableTransition = function (t) {
                    var e = this,
                        i = {};
                    (i[e.transitionType] = ""), e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i);
                }),
                (e.prototype.fadeSlide = function (t, e) {
                    var i = this;
                    i.cssTransitions === !1
                        ? (i.$slides.eq(t).css({ zIndex: i.options.zIndex }), i.$slides.eq(t).animate({ opacity: 1 }, i.options.speed, i.options.easing, e))
                        : (i.applyTransition(t),
                          i.$slides.eq(t).css({ opacity: 1, zIndex: i.options.zIndex }),
                          e &&
                              setTimeout(function () {
                                  i.disableTransition(t), e.call();
                              }, i.options.speed));
                }),
                (e.prototype.fadeSlideOut = function (t) {
                    var e = this;
                    e.cssTransitions === !1
                        ? e.$slides.eq(t).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing)
                        : (e.applyTransition(t), e.$slides.eq(t).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
                }),
                (e.prototype.filterSlides = e.prototype.slickFilter = function (t) {
                    var e = this;
                    null !== t && ((e.$slidesCache = e.$slides), e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit());
                }),
                (e.prototype.focusHandler = function () {
                    var e = this;
                    e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (i) {
                        i.stopImmediatePropagation();
                        var n = t(this);
                        setTimeout(function () {
                            e.options.pauseOnFocus && ((e.focussed = n.is(":focus")), e.autoPlay());
                        }, 0);
                    });
                }),
                (e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
                    var t = this;
                    return t.currentSlide;
                }),
                (e.prototype.getDotCount = function () {
                    var t = this,
                        e = 0,
                        i = 0,
                        n = 0;
                    if (t.options.infinite === !0) for (; e < t.slideCount; ) ++n, (e = i + t.options.slidesToScroll), (i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow);
                    else if (t.options.centerMode === !0) n = t.slideCount;
                    else if (t.options.asNavFor) for (; e < t.slideCount; ) ++n, (e = i + t.options.slidesToScroll), (i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow);
                    else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
                    return n - 1;
                }),
                (e.prototype.getLeft = function (t) {
                    var e,
                        i,
                        n,
                        r = this,
                        o = 0;
                    return (
                        (r.slideOffset = 0),
                        (i = r.$slides.first().outerHeight(!0)),
                        r.options.infinite === !0
                            ? (r.slideCount > r.options.slidesToShow && ((r.slideOffset = r.slideWidth * r.options.slidesToShow * -1), (o = i * r.options.slidesToShow * -1)),
                              r.slideCount % r.options.slidesToScroll !== 0 &&
                                  t + r.options.slidesToScroll > r.slideCount &&
                                  r.slideCount > r.options.slidesToShow &&
                                  (t > r.slideCount
                                      ? ((r.slideOffset = (r.options.slidesToShow - (t - r.slideCount)) * r.slideWidth * -1), (o = (r.options.slidesToShow - (t - r.slideCount)) * i * -1))
                                      : ((r.slideOffset = (r.slideCount % r.options.slidesToScroll) * r.slideWidth * -1), (o = (r.slideCount % r.options.slidesToScroll) * i * -1))))
                            : t + r.options.slidesToShow > r.slideCount && ((r.slideOffset = (t + r.options.slidesToShow - r.slideCount) * r.slideWidth), (o = (t + r.options.slidesToShow - r.slideCount) * i)),
                        r.slideCount <= r.options.slidesToShow && ((r.slideOffset = 0), (o = 0)),
                        r.options.centerMode === !0 && r.options.infinite === !0
                            ? (r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth)
                            : r.options.centerMode === !0 && ((r.slideOffset = 0), (r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2))),
                        (e = r.options.vertical === !1 ? t * r.slideWidth * -1 + r.slideOffset : t * i * -1 + o),
                        r.options.variableWidth === !0 &&
                            ((n = r.$slideTrack.children(".slick-slide").eq(r.slideCount <= r.options.slidesToShow || r.options.infinite === !1 ? t : t + r.options.slidesToShow)),
                            (e = r.options.rtl === !0 ? (n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0) : n[0] ? -1 * n[0].offsetLeft : 0),
                            r.options.centerMode === !0 &&
                                ((n = r.$slideTrack.children(".slick-slide").eq(r.slideCount <= r.options.slidesToShow || r.options.infinite === !1 ? t : t + r.options.slidesToShow + 1)),
                                (e = r.options.rtl === !0 ? (n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0) : n[0] ? -1 * n[0].offsetLeft : 0),
                                (e += (r.$list.width() - n.outerWidth()) / 2))),
                        e
                    );
                }),
                (e.prototype.getOption = e.prototype.slickGetOption = function (t) {
                    var e = this;
                    return e.options[t];
                }),
                (e.prototype.getNavigableIndexes = function () {
                    var t,
                        e = this,
                        i = 0,
                        n = 0,
                        r = [];
                    for (e.options.infinite === !1 ? (t = e.slideCount) : ((i = -1 * e.options.slidesToScroll), (n = -1 * e.options.slidesToScroll), (t = 2 * e.slideCount)); t > i; )
                        r.push(i), (i = n + e.options.slidesToScroll), (n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
                    return r;
                }),
                (e.prototype.getSlick = function () {
                    return this;
                }),
                (e.prototype.getSlideCount = function () {
                    var e,
                        i,
                        n,
                        r = this;
                    return (
                        (n = r.options.centerMode === !0 ? r.slideWidth * Math.floor(r.options.slidesToShow / 2) : 0),
                        r.options.swipeToSlide === !0
                            ? (r.$slideTrack.find(".slick-slide").each(function (e, o) {
                                  return o.offsetLeft - n + t(o).outerWidth() / 2 > -1 * r.swipeLeft ? ((i = o), !1) : void 0;
                              }),
                              (e = Math.abs(t(i).attr("data-slick-index") - r.currentSlide) || 1))
                            : r.options.slidesToScroll
                    );
                }),
                (e.prototype.goTo = e.prototype.slickGoTo = function (t, e) {
                    var i = this;
                    i.changeSlide({ data: { message: "index", index: parseInt(t) } }, e);
                }),
                (e.prototype.init = function (e) {
                    var i = this;
                    t(i.$slider).hasClass("slick-initialized") ||
                        (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()),
                        e && i.$slider.trigger("init", [i]),
                        i.options.accessibility === !0 && i.initADA(),
                        i.options.autoplay && ((i.paused = !1), i.autoPlay());
                }),
                (e.prototype.initADA = function () {
                    var e = this;
                    e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }),
                        e.$slideTrack.attr("role", "listbox"),
                        e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (i) {
                            t(this).attr({ role: "option", "aria-describedby": "slick-slide" + e.instanceUid + i });
                        }),
                        null !== e.$dots &&
                            e.$dots
                                .attr("role", "tablist")
                                .find("li")
                                .each(function (i) {
                                    t(this).attr({ role: "presentation", "aria-selected": "false", "aria-controls": "navigation" + e.instanceUid + i, id: "slick-slide" + e.instanceUid + i });
                                })
                                .first()
                                .attr("aria-selected", "true")
                                .end()
                                .find("button")
                                .attr("role", "button")
                                .end()
                                .closest("div")
                                .attr("role", "toolbar"),
                        e.activateADA();
                }),
                (e.prototype.initArrowEvents = function () {
                    var t = this;
                    t.options.arrows === !0 &&
                        t.slideCount > t.options.slidesToShow &&
                        (t.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, t.changeSlide));
                }),
                (e.prototype.initDotEvents = function () {
                    var e = this;
                    e.options.dots === !0 && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", { message: "index" }, e.changeSlide),
                        e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1));
                }),
                (e.prototype.initSlideEvents = function () {
                    var e = this;
                    e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)));
                }),
                (e.prototype.initializeEvents = function () {
                    var e = this;
                    e.initArrowEvents(),
                        e.initDotEvents(),
                        e.initSlideEvents(),
                        e.$list.on("touchstart.slick mousedown.slick", { action: "start" }, e.swipeHandler),
                        e.$list.on("touchmove.slick mousemove.slick", { action: "move" }, e.swipeHandler),
                        e.$list.on("touchend.slick mouseup.slick", { action: "end" }, e.swipeHandler),
                        e.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, e.swipeHandler),
                        e.$list.on("click.slick", e.clickHandler),
                        t(document).on(e.visibilityChange, t.proxy(e.visibility, e)),
                        e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler),
                        e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
                        t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)),
                        t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)),
                        t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
                        t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
                        t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition);
                }),
                (e.prototype.initUI = function () {
                    var t = this;
                    t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show();
                }),
                (e.prototype.keyHandler = function (t) {
                    var e = this;
                    t.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                        (37 === t.keyCode && e.options.accessibility === !0
                            ? e.changeSlide({ data: { message: e.options.rtl === !0 ? "next" : "previous" } })
                            : 39 === t.keyCode && e.options.accessibility === !0 && e.changeSlide({ data: { message: e.options.rtl === !0 ? "previous" : "next" } }));
                }),
                (e.prototype.lazyLoad = function () {
                    function e(e) {
                        t("img[data-lazy]", e).each(function () {
                            var e = t(this),
                                i = t(this).attr("data-lazy"),
                                n = document.createElement("img");
                            (n.onload = function () {
                                e.animate({ opacity: 0 }, 100, function () {
                                    e.attr("src", i).animate({ opacity: 1 }, 200, function () {
                                        e.removeAttr("data-lazy").removeClass("slick-loading");
                                    }),
                                        s.$slider.trigger("lazyLoaded", [s, e, i]);
                                });
                            }),
                                (n.onerror = function () {
                                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, e, i]);
                                }),
                                (n.src = i);
                        });
                    }
                    var i,
                        n,
                        r,
                        o,
                        s = this;
                    s.options.centerMode === !0
                        ? s.options.infinite === !0
                            ? ((r = s.currentSlide + (s.options.slidesToShow / 2 + 1)), (o = r + s.options.slidesToShow + 2))
                            : ((r = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1))), (o = 2 + (s.options.slidesToShow / 2 + 1) + s.currentSlide))
                        : ((r = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide), (o = Math.ceil(r + s.options.slidesToShow)), s.options.fade === !0 && (r > 0 && r--, o <= s.slideCount && o++)),
                        (i = s.$slider.find(".slick-slide").slice(r, o)),
                        e(i),
                        s.slideCount <= s.options.slidesToShow
                            ? ((n = s.$slider.find(".slick-slide")), e(n))
                            : s.currentSlide >= s.slideCount - s.options.slidesToShow
                            ? ((n = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow)), e(n))
                            : 0 === s.currentSlide && ((n = s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow)), e(n));
                }),
                (e.prototype.loadSlider = function () {
                    var t = this;
                    t.setPosition(), t.$slideTrack.css({ opacity: 1 }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad();
                }),
                (e.prototype.next = e.prototype.slickNext = function () {
                    var t = this;
                    t.changeSlide({ data: { message: "next" } });
                }),
                (e.prototype.orientationChange = function () {
                    var t = this;
                    t.checkResponsive(), t.setPosition();
                }),
                (e.prototype.pause = e.prototype.slickPause = function () {
                    var t = this;
                    t.autoPlayClear(), (t.paused = !0);
                }),
                (e.prototype.play = e.prototype.slickPlay = function () {
                    var t = this;
                    t.autoPlay(), (t.options.autoplay = !0), (t.paused = !1), (t.focussed = !1), (t.interrupted = !1);
                }),
                (e.prototype.postSlide = function (t) {
                    var e = this;
                    e.unslicked || (e.$slider.trigger("afterChange", [e, t]), (e.animating = !1), e.setPosition(), (e.swipeLeft = null), e.options.autoplay && e.autoPlay(), e.options.accessibility === !0 && e.initADA());
                }),
                (e.prototype.prev = e.prototype.slickPrev = function () {
                    var t = this;
                    t.changeSlide({ data: { message: "previous" } });
                }),
                (e.prototype.preventDefault = function (t) {
                    t.preventDefault();
                }),
                (e.prototype.progressiveLazyLoad = function (e) {
                    e = e || 1;
                    var i,
                        n,
                        r,
                        o = this,
                        s = t("img[data-lazy]", o.$slider);
                    s.length
                        ? ((i = s.first()),
                          (n = i.attr("data-lazy")),
                          (r = document.createElement("img")),
                          (r.onload = function () {
                              i.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"), o.options.adaptiveHeight === !0 && o.setPosition(), o.$slider.trigger("lazyLoaded", [o, i, n]), o.progressiveLazyLoad();
                          }),
                          (r.onerror = function () {
                              3 > e
                                  ? setTimeout(function () {
                                        o.progressiveLazyLoad(e + 1);
                                    }, 500)
                                  : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, i, n]), o.progressiveLazyLoad());
                          }),
                          (r.src = n))
                        : o.$slider.trigger("allImagesLoaded", [o]);
                }),
                (e.prototype.refresh = function (e) {
                    var i,
                        n,
                        r = this;
                    (n = r.slideCount - r.options.slidesToShow),
                        !r.options.infinite && r.currentSlide > n && (r.currentSlide = n),
                        r.slideCount <= r.options.slidesToShow && (r.currentSlide = 0),
                        (i = r.currentSlide),
                        r.destroy(!0),
                        t.extend(r, r.initials, { currentSlide: i }),
                        r.init(),
                        e || r.changeSlide({ data: { message: "index", index: i } }, !1);
                }),
                (e.prototype.registerBreakpoints = function () {
                    var e,
                        i,
                        n,
                        r = this,
                        o = r.options.responsive || null;
                    if ("array" === t.type(o) && o.length) {
                        r.respondTo = r.options.respondTo || "window";
                        for (e in o)
                            if (((n = r.breakpoints.length - 1), (i = o[e].breakpoint), o.hasOwnProperty(e))) {
                                for (; n >= 0; ) r.breakpoints[n] && r.breakpoints[n] === i && r.breakpoints.splice(n, 1), n--;
                                r.breakpoints.push(i), (r.breakpointSettings[i] = o[e].settings);
                            }
                        r.breakpoints.sort(function (t, e) {
                            return r.options.mobileFirst ? t - e : e - t;
                        });
                    }
                }),
                (e.prototype.reinit = function () {
                    var e = this;
                    (e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide")),
                        (e.slideCount = e.$slides.length),
                        e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
                        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
                        e.registerBreakpoints(),
                        e.setProps(),
                        e.setupInfinite(),
                        e.buildArrows(),
                        e.updateArrows(),
                        e.initArrowEvents(),
                        e.buildDots(),
                        e.updateDots(),
                        e.initDotEvents(),
                        e.cleanUpSlideEvents(),
                        e.initSlideEvents(),
                        e.checkResponsive(!1, !0),
                        e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
                        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
                        e.setPosition(),
                        e.focusHandler(),
                        (e.paused = !e.options.autoplay),
                        e.autoPlay(),
                        e.$slider.trigger("reInit", [e]);
                }),
                (e.prototype.resize = function () {
                    var e = this;
                    t(window).width() !== e.windowWidth &&
                        (clearTimeout(e.windowDelay),
                        (e.windowDelay = window.setTimeout(function () {
                            (e.windowWidth = t(window).width()), e.checkResponsive(), e.unslicked || e.setPosition();
                        }, 50)));
                }),
                (e.prototype.removeSlide = e.prototype.slickRemove = function (t, e, i) {
                    var n = this;
                    return (
                        "boolean" == typeof t ? ((e = t), (t = e === !0 ? 0 : n.slideCount - 1)) : (t = e === !0 ? --t : t),
                        n.slideCount < 1 || 0 > t || t > n.slideCount - 1
                            ? !1
                            : (n.unload(),
                              i === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(),
                              (n.$slides = n.$slideTrack.children(this.options.slide)),
                              n.$slideTrack.children(this.options.slide).detach(),
                              n.$slideTrack.append(n.$slides),
                              (n.$slidesCache = n.$slides),
                              void n.reinit())
                    );
                }),
                (e.prototype.setCSS = function (t) {
                    var e,
                        i,
                        n = this,
                        r = {};
                    n.options.rtl === !0 && (t = -t),
                        (e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px"),
                        (i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px"),
                        (r[n.positionProp] = t),
                        n.transformsEnabled === !1
                            ? n.$slideTrack.css(r)
                            : ((r = {}), n.cssTransitions === !1 ? ((r[n.animType] = "translate(" + e + ", " + i + ")"), n.$slideTrack.css(r)) : ((r[n.animType] = "translate3d(" + e + ", " + i + ", 0px)"), n.$slideTrack.css(r)));
                }),
                (e.prototype.setDimensions = function () {
                    var t = this;
                    t.options.vertical === !1
                        ? t.options.centerMode === !0 && t.$list.css({ padding: "0px " + t.options.centerPadding })
                        : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), t.options.centerMode === !0 && t.$list.css({ padding: t.options.centerPadding + " 0px" })),
                        (t.listWidth = t.$list.width()),
                        (t.listHeight = t.$list.height()),
                        t.options.vertical === !1 && t.options.variableWidth === !1
                            ? ((t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow)), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length)))
                            : t.options.variableWidth === !0
                            ? t.$slideTrack.width(5e3 * t.slideCount)
                            : ((t.slideWidth = Math.ceil(t.listWidth)), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
                    var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
                    t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e);
                }),
                (e.prototype.setFade = function () {
                    var e,
                        i = this;
                    i.$slides.each(function (n, r) {
                        (e = i.slideWidth * n * -1),
                            t(r).css(i.options.rtl === !0 ? { position: "relative", right: e, top: 0, zIndex: i.options.zIndex - 2, opacity: 0 } : { position: "relative", left: e, top: 0, zIndex: i.options.zIndex - 2, opacity: 0 });
                    }),
                        i.$slides.eq(i.currentSlide).css({ zIndex: i.options.zIndex - 1, opacity: 1 });
                }),
                (e.prototype.setHeight = function () {
                    var t = this;
                    if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                        var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                        t.$list.css("height", e);
                    }
                }),
                (e.prototype.setOption = e.prototype.slickSetOption = function () {
                    var e,
                        i,
                        n,
                        r,
                        o,
                        s = this,
                        a = !1;
                    if (
                        ("object" === t.type(arguments[0])
                            ? ((n = arguments[0]), (a = arguments[1]), (o = "multiple"))
                            : "string" === t.type(arguments[0]) &&
                              ((n = arguments[0]), (r = arguments[1]), (a = arguments[2]), "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? (o = "responsive") : "undefined" != typeof arguments[1] && (o = "single")),
                        "single" === o)
                    )
                        s.options[n] = r;
                    else if ("multiple" === o)
                        t.each(n, function (t, e) {
                            s.options[t] = e;
                        });
                    else if ("responsive" === o)
                        for (i in r)
                            if ("array" !== t.type(s.options.responsive)) s.options.responsive = [r[i]];
                            else {
                                for (e = s.options.responsive.length - 1; e >= 0; ) s.options.responsive[e].breakpoint === r[i].breakpoint && s.options.responsive.splice(e, 1), e--;
                                s.options.responsive.push(r[i]);
                            }
                    a && (s.unload(), s.reinit());
                }),
                (e.prototype.setPosition = function () {
                    var t = this;
                    t.setDimensions(), t.setHeight(), t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t]);
                }),
                (e.prototype.setProps = function () {
                    var t = this,
                        e = document.body.style;
                    (t.positionProp = t.options.vertical === !0 ? "top" : "left"),
                        "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"),
                        (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && t.options.useCSS === !0 && (t.cssTransitions = !0),
                        t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : (t.options.zIndex = t.defaults.zIndex)),
                        void 0 !== e.OTransform &&
                            ((t.animType = "OTransform"), (t.transformType = "-o-transform"), (t.transitionType = "OTransition"), void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
                        void 0 !== e.MozTransform &&
                            ((t.animType = "MozTransform"), (t.transformType = "-moz-transform"), (t.transitionType = "MozTransition"), void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)),
                        void 0 !== e.webkitTransform &&
                            ((t.animType = "webkitTransform"), (t.transformType = "-webkit-transform"), (t.transitionType = "webkitTransition"), void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
                        void 0 !== e.msTransform && ((t.animType = "msTransform"), (t.transformType = "-ms-transform"), (t.transitionType = "msTransition"), void 0 === e.msTransform && (t.animType = !1)),
                        void 0 !== e.transform && t.animType !== !1 && ((t.animType = "transform"), (t.transformType = "transform"), (t.transitionType = "transition")),
                        (t.transformsEnabled = t.options.useTransform && null !== t.animType && t.animType !== !1);
                }),
                (e.prototype.setSlideClasses = function (t) {
                    var e,
                        i,
                        n,
                        r,
                        o = this;
                    (i = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true")),
                        o.$slides.eq(t).addClass("slick-current"),
                        o.options.centerMode === !0
                            ? ((e = Math.floor(o.options.slidesToShow / 2)),
                              o.options.infinite === !0 &&
                                  (t >= e && t <= o.slideCount - 1 - e
                                      ? o.$slides
                                            .slice(t - e, t + e + 1)
                                            .addClass("slick-active")
                                            .attr("aria-hidden", "false")
                                      : ((n = o.options.slidesToShow + t),
                                        i
                                            .slice(n - e + 1, n + e + 2)
                                            .addClass("slick-active")
                                            .attr("aria-hidden", "false")),
                                  0 === t ? i.eq(i.length - 1 - o.options.slidesToShow).addClass("slick-center") : t === o.slideCount - 1 && i.eq(o.options.slidesToShow).addClass("slick-center")),
                              o.$slides.eq(t).addClass("slick-center"))
                            : t >= 0 && t <= o.slideCount - o.options.slidesToShow
                            ? o.$slides
                                  .slice(t, t + o.options.slidesToShow)
                                  .addClass("slick-active")
                                  .attr("aria-hidden", "false")
                            : i.length <= o.options.slidesToShow
                            ? i.addClass("slick-active").attr("aria-hidden", "false")
                            : ((r = o.slideCount % o.options.slidesToShow),
                              (n = o.options.infinite === !0 ? o.options.slidesToShow + t : t),
                              o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - t < o.options.slidesToShow
                                  ? i
                                        .slice(n - (o.options.slidesToShow - r), n + r)
                                        .addClass("slick-active")
                                        .attr("aria-hidden", "false")
                                  : i
                                        .slice(n, n + o.options.slidesToShow)
                                        .addClass("slick-active")
                                        .attr("aria-hidden", "false")),
                        "ondemand" === o.options.lazyLoad && o.lazyLoad();
                }),
                (e.prototype.setupInfinite = function () {
                    var e,
                        i,
                        n,
                        r = this;
                    if ((r.options.fade === !0 && (r.options.centerMode = !1), r.options.infinite === !0 && r.options.fade === !1 && ((i = null), r.slideCount > r.options.slidesToShow))) {
                        for (n = r.options.centerMode === !0 ? r.options.slidesToShow + 1 : r.options.slidesToShow, e = r.slideCount; e > r.slideCount - n; e -= 1)
                            (i = e - 1),
                                t(r.$slides[i])
                                    .clone(!0)
                                    .attr("id", "")
                                    .attr("data-slick-index", i - r.slideCount)
                                    .prependTo(r.$slideTrack)
                                    .addClass("slick-cloned");
                        for (e = 0; n > e; e += 1)
                            (i = e),
                                t(r.$slides[i])
                                    .clone(!0)
                                    .attr("id", "")
                                    .attr("data-slick-index", i + r.slideCount)
                                    .appendTo(r.$slideTrack)
                                    .addClass("slick-cloned");
                        r.$slideTrack
                            .find(".slick-cloned")
                            .find("[id]")
                            .each(function () {
                                t(this).attr("id", "");
                            });
                    }
                }),
                (e.prototype.interrupt = function (t) {
                    var e = this;
                    t || e.autoPlay(), (e.interrupted = t);
                }),
                (e.prototype.selectHandler = function (e) {
                    var i = this,
                        n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
                        r = parseInt(n.attr("data-slick-index"));
                    return r || (r = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(r), void i.asNavFor(r)) : void i.slideHandler(r);
                }),
                (e.prototype.slideHandler = function (t, e, i) {
                    var n,
                        r,
                        o,
                        s,
                        a,
                        l = null,
                        c = this;
                    return (
                        (e = e || !1),
                        (c.animating === !0 && c.options.waitForAnimate === !0) || (c.options.fade === !0 && c.currentSlide === t) || c.slideCount <= c.options.slidesToShow
                            ? void 0
                            : (e === !1 && c.asNavFor(t),
                              (n = t),
                              (l = c.getLeft(n)),
                              (s = c.getLeft(c.currentSlide)),
                              (c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft),
                              c.options.infinite === !1 && c.options.centerMode === !1 && (0 > t || t > c.getDotCount() * c.options.slidesToScroll)
                                  ? void (
                                        c.options.fade === !1 &&
                                        ((n = c.currentSlide),
                                        i !== !0
                                            ? c.animateSlide(s, function () {
                                                  c.postSlide(n);
                                              })
                                            : c.postSlide(n))
                                    )
                                  : c.options.infinite === !1 && c.options.centerMode === !0 && (0 > t || t > c.slideCount - c.options.slidesToScroll)
                                  ? void (
                                        c.options.fade === !1 &&
                                        ((n = c.currentSlide),
                                        i !== !0
                                            ? c.animateSlide(s, function () {
                                                  c.postSlide(n);
                                              })
                                            : c.postSlide(n))
                                    )
                                  : (c.options.autoplay && clearInterval(c.autoPlayTimer),
                                    (r =
                                        0 > n
                                            ? c.slideCount % c.options.slidesToScroll !== 0
                                                ? c.slideCount - (c.slideCount % c.options.slidesToScroll)
                                                : c.slideCount + n
                                            : n >= c.slideCount
                                            ? c.slideCount % c.options.slidesToScroll !== 0
                                                ? 0
                                                : n - c.slideCount
                                            : n),
                                    (c.animating = !0),
                                    c.$slider.trigger("beforeChange", [c, c.currentSlide, r]),
                                    (o = c.currentSlide),
                                    (c.currentSlide = r),
                                    c.setSlideClasses(c.currentSlide),
                                    c.options.asNavFor && ((a = c.getNavTarget()), (a = a.slick("getSlick")), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)),
                                    c.updateDots(),
                                    c.updateArrows(),
                                    c.options.fade === !0
                                        ? (i !== !0
                                              ? (c.fadeSlideOut(o),
                                                c.fadeSlide(r, function () {
                                                    c.postSlide(r);
                                                }))
                                              : c.postSlide(r),
                                          void c.animateHeight())
                                        : void (i !== !0
                                              ? c.animateSlide(l, function () {
                                                    c.postSlide(r);
                                                })
                                              : c.postSlide(r))))
                    );
                }),
                (e.prototype.startLoad = function () {
                    var t = this;
                    t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()),
                        t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(),
                        t.$slider.addClass("slick-loading");
                }),
                (e.prototype.swipeDirection = function () {
                    var t,
                        e,
                        i,
                        n,
                        r = this;
                    return (
                        (t = r.touchObject.startX - r.touchObject.curX),
                        (e = r.touchObject.startY - r.touchObject.curY),
                        (i = Math.atan2(e, t)),
                        (n = Math.round((180 * i) / Math.PI)),
                        0 > n && (n = 360 - Math.abs(n)),
                        45 >= n && n >= 0
                            ? r.options.rtl === !1
                                ? "left"
                                : "right"
                            : 360 >= n && n >= 315
                            ? r.options.rtl === !1
                                ? "left"
                                : "right"
                            : n >= 135 && 225 >= n
                            ? r.options.rtl === !1
                                ? "right"
                                : "left"
                            : r.options.verticalSwiping === !0
                            ? n >= 35 && 135 >= n
                                ? "down"
                                : "up"
                            : "vertical"
                    );
                }),
                (e.prototype.swipeEnd = function (t) {
                    var e,
                        i,
                        n = this;
                    if (((n.dragging = !1), (n.interrupted = !1), (n.shouldClick = n.touchObject.swipeLength > 10 ? !1 : !0), void 0 === n.touchObject.curX)) return !1;
                    if ((n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe)) {
                        switch ((i = n.swipeDirection())) {
                            case "left":
                            case "down":
                                (e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount()), (n.currentDirection = 0);
                                break;
                            case "right":
                            case "up":
                                (e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount()), (n.currentDirection = 1);
                        }
                        "vertical" != i && (n.slideHandler(e), (n.touchObject = {}), n.$slider.trigger("swipe", [n, i]));
                    } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), (n.touchObject = {}));
                }),
                (e.prototype.swipeHandler = function (t) {
                    var e = this;
                    if (!(e.options.swipe === !1 || ("ontouchend" in document && e.options.swipe === !1) || (e.options.draggable === !1 && -1 !== t.type.indexOf("mouse"))))
                        switch (
                            ((e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1),
                            (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
                            e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
                            t.data.action)
                        ) {
                            case "start":
                                e.swipeStart(t);
                                break;
                            case "move":
                                e.swipeMove(t);
                                break;
                            case "end":
                                e.swipeEnd(t);
                        }
                }),
                (e.prototype.swipeMove = function (t) {
                    var e,
                        i,
                        n,
                        r,
                        o,
                        s = this;
                    return (
                        (o = void 0 !== t.originalEvent ? t.originalEvent.touches : null),
                        !s.dragging || (o && 1 !== o.length)
                            ? !1
                            : ((e = s.getLeft(s.currentSlide)),
                              (s.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX),
                              (s.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY),
                              (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2)))),
                              s.options.verticalSwiping === !0 && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))),
                              (i = s.swipeDirection()),
                              "vertical" !== i
                                  ? (void 0 !== t.originalEvent && s.touchObject.swipeLength > 4 && t.preventDefault(),
                                    (r = (s.options.rtl === !1 ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1)),
                                    s.options.verticalSwiping === !0 && (r = s.touchObject.curY > s.touchObject.startY ? 1 : -1),
                                    (n = s.touchObject.swipeLength),
                                    (s.touchObject.edgeHit = !1),
                                    s.options.infinite === !1 &&
                                        ((0 === s.currentSlide && "right" === i) || (s.currentSlide >= s.getDotCount() && "left" === i)) &&
                                        ((n = s.touchObject.swipeLength * s.options.edgeFriction), (s.touchObject.edgeHit = !0)),
                                    (s.swipeLeft = s.options.vertical === !1 ? e + n * r : e + n * (s.$list.height() / s.listWidth) * r),
                                    s.options.verticalSwiping === !0 && (s.swipeLeft = e + n * r),
                                    s.options.fade === !0 || s.options.touchMove === !1 ? !1 : s.animating === !0 ? ((s.swipeLeft = null), !1) : void s.setCSS(s.swipeLeft))
                                  : void 0)
                    );
                }),
                (e.prototype.swipeStart = function (t) {
                    var e,
                        i = this;
                    return (
                        (i.interrupted = !0),
                        1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow
                            ? ((i.touchObject = {}), !1)
                            : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]),
                              (i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX),
                              (i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY),
                              void (i.dragging = !0))
                    );
                }),
                (e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
                    var t = this;
                    null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit());
                }),
                (e.prototype.unload = function () {
                    var e = this;
                    t(".slick-cloned", e.$slider).remove(),
                        e.$dots && e.$dots.remove(),
                        e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
                        e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
                        e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
                }),
                (e.prototype.unslick = function (t) {
                    var e = this;
                    e.$slider.trigger("unslick", [e, t]), e.destroy();
                }),
                (e.prototype.updateArrows = function () {
                    var t,
                        e = this;
                    (t = Math.floor(e.options.slidesToShow / 2)),
                        e.options.arrows === !0 &&
                            e.slideCount > e.options.slidesToShow &&
                            !e.options.infinite &&
                            (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                            e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                            0 === e.currentSlide
                                ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                                : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1
                                ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                                : e.currentSlide >= e.slideCount - 1 &&
                                  e.options.centerMode === !0 &&
                                  (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
                }),
                (e.prototype.updateDots = function () {
                    var t = this;
                    null !== t.$dots &&
                        (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"),
                        t.$dots
                            .find("li")
                            .eq(Math.floor(t.currentSlide / t.options.slidesToScroll))
                            .addClass("slick-active")
                            .attr("aria-hidden", "false"));
                }),
                (e.prototype.visibility = function () {
                    var t = this;
                    t.options.autoplay && (t.interrupted = document[t.hidden] ? !0 : !1);
                }),
                (t.fn.slick = function () {
                    var t,
                        i,
                        n = this,
                        r = arguments[0],
                        o = Array.prototype.slice.call(arguments, 1),
                        s = n.length;
                    for (t = 0; s > t; t++) if (("object" == typeof r || "undefined" == typeof r ? (n[t].slick = new e(n[t], r)) : (i = n[t].slick[r].apply(n[t].slick, o)), "undefined" != typeof i)) return i;
                    return n;
                });
        });
    },
    303: function (t, e) {
        t.exports = function () {
            throw new Error("define cannot be used indirect");
        };
    },
    307: function (t, e, i) {
        (function (n) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : { default: t };
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = i(5),
                s = r(o),
                a = i(7),
                l = r(a),
                c = i(186),
                u = r(c),
                d = i(308),
                h = r(d),
                p = i(86),
                f = r(p),
                v = i(69),
                g = r(v);
            i(326), i(282);
            var m = i(329),
                T = (function () {
                    function t(e) {
                        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { viewType: "normal" };
                        s["default"](this, t), (this.endpoint = "/api/recoomender/products"), (this.viewType = n.viewType), (this.params = i), (this.$elm = e);
                        var n = new g["default"]({ preset: "small" });
                        this.spinner = new f["default"](n);
                    }
                    return (
                        l["default"](t, [
                            {
                                key: "getItems",
                                value: function (t, e) {
                                    n.ajax({
                                        beforeSend: n.proxy(this.showLoading, this),
                                        complete: n.proxy(this.hideLoading, this),
                                        dataType: "json",
                                        cache: !1,
                                        url: "/api/recommender/products",
                                        data: this.params,
                                        success: n.proxy(this.onSuccess, this, t),
                                        error: n.proxy(this.onError, this, e),
                                    });
                                },
                            },
                            {
                                key: "onSuccess",
                                value: function (t, e, i) {
                                    var n = this.template(e);
                                    this.$elm.html(n), this.setupSilverEggListners(), this.setupTrackClickEvent(), this.setupSlider(), this._trackImpression(), t && t();
                                },
                            },
                            { key: "onError", value: function (t, e, i, n) {} },
                            {
                                key: "showLoading",
                                value: function () {
                                    this.spinner.spin(this.$elm.get(0));
                                },
                            },
                            {
                                key: "hideLoading",
                                value: function () {
                                    this.spinner.stop();
                                },
                            },
                            {
                                key: "setupSilverEggListners",
                                value: function () {
                                    var t = this;
                                    this.$elm.on("click", ".js-recommend-item", function (e) {
                                        var i = n(this).data("id"),
                                            r = n(this).data("recommend-id");
                                        i && n.ajax({ url: "/api/recommender/products/click", data: _.merge(t.params, { buyma_product_id: i, recommend_id: r }), dataType: "json" });
                                    });
                                },
                            },
                            {
                                key: "setupTrackClickEvent",
                                value: function () {
                                    var t = this;
                                    this.$elm.on("click", ".js-recommend-item", function (e) {
                                        var i = n(this),
                                            r = i.data("id"),
                                            o = i.data("name"),
                                            s = i.data("category-name"),
                                            a = i.data("brand-name"),
                                            l = i.data("pos");
                                        r && (ga("ec:addProduct", { id: r, name: o, category: s, brand: a, position: l + 1 }), ga("ec:setAction", "click", { list: t.listName }), ga("send", "event", "ec", "click", t.listName));
                                    });
                                },
                            },
                            {
                                key: "setupSlider",
                                value: function () {
                                    var t = window.matchMedia("screen and (max-width:768px)").matches;
                                    if (t) {
                                        n(".js-pager-current").remove();
                                        var e = n(".js-bx-pager").bxSlider({
                                            pager: !1,
                                            infiniteLoop: !1,
                                            hideControlOnEnd: !0,
                                            touchEnabled: !1,
                                            slideWidth: n(".js-thumb-image").width(),
                                            minSlides: 5,
                                            maxSlides: 5,
                                            moveSlides: 5,
                                            slideMargin: 10,
                                            prevText: '<i class="bmg-c-icon--arrow-left"></i>',
                                            nextText: '<i class="bmg-c-icon--arrow-right"></i>',
                                        });
                                    }
                                    n(".js-item-images").bxSlider({
                                        infiniteLoop: !1,
                                        hideControlOnEnd: !0,
                                        pagerCustom: ".js-bx-pager",
                                        prevText: '<i class="bmg-c-icon--arrow-left"></i>',
                                        nextText: '<i class="bmg-c-icon--arrow-right"></i>',
                                        onSlideBefore: function (i, r, o) {
                                            var s = n(".js-bx-pager .js-thumb-image").eq(o).position();
                                            if ((n(".js-pager-current").css({ left: s.left + 5, top: s.top }), t)) {
                                                var a = Math.floor(o / 5);
                                                e.goToSlide(a);
                                            }
                                        },
                                    });
                                    var i = "2.5",
                                        r = new u["default"](window.navigator.userAgent);
                                    "cart_popup" != this.params.placement || r.mobile() || (i = "4.5"),
                                        new h["default"](".js-swipeslider", ".item-related-list", ".item-related-list__item", { breakpoint: { 486: i, 768: "4.5", 1024: "6.5", 1280: "8.5", 9999: "10.5" } });
                                },
                            },
                            {
                                key: "_trackImpression",
                                value: function () {
                                    var t = this,
                                        e = this.$elm.find(".js-recommend-item");
                                    _.isEmpty(e) ||
                                        _.each(e, function (e) {
                                            var i = n(e),
                                                r = i.data("id"),
                                                o = i.data("name"),
                                                s = i.data("category-name"),
                                                a = i.data("brand-name"),
                                                l = i.data("pos");
                                            ga("ec:addImpression", { list: t.listName, id: r, name: o, category: s, brand: a, position: l + 1 });
                                        });
                                },
                            },
                            {
                                key: "template",
                                get: function () {
                                    return m;
                                },
                            },
                            {
                                key: "listName",
                                get: function () {
                                    return { top: "Top", item_detail: "Related Items", cart_popup: "Cart Modal Recommend", cart: "Cart Recommend", search_result: "Search Results Recommend", no_result: "No Results Recommend" }[
                                        this.params.placement
                                    ];
                                },
                            },
                        ]),
                        t
                    );
                })();
            (e["default"] = T), (t.exports = e["default"]);
        }.call(e, i(3)));
    },
    308: function (t, e, i) {
        "use strict";
        function n(t) {
            return t && t.__esModule ? t : { default: t };
        }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = i(110),
            o = n(r),
            s = i(189),
            a = n(s),
            l = i(5),
            c = n(l),
            u = i(7),
            d = n(u),
            h = i(330),
            p = "swipe-slider",
            f = "fullwidth",
            v = "swipe-slider-show",
            g = "swipe-slider-context",
            m = "slider-btn-prev",
            T = "slider-btn-next",
            b = "show",
            y = "left",
            S = "right",
            x = h.utils.ease.quadratic,
            w = 800,
            P = { 486: "2.5", 768: "4.5", 1024: "6.5", 1280: "8.5" },
            A = { deceleration: 0.001, eventPassthrough: !0, preventDefault: !1, scrollX: !0, scrollY: !1, scrollbars: !0, tap: !0, click: !0, interactiveScrollbars: !0, shrinkScrollbars: "scale", fadeScrollbars: !1 },
            C = (function () {
                function t(e, i, n, r) {
                    c["default"](this, t);
                    var o = document.querySelector(e);
                    o &&
                        ((this.isTouchDevice = t.detectTouchDevice()),
                        (this.curWinWidth = window.innerWidth),
                        (this.itemsAtBreakpoint = "undefined" != typeof r && r && "undefined" != typeof r.breakpoint && r.breakpoint ? (0 === a["default"](r.breakpoint).length ? P : r.breakpoint) : P),
                        o.classList.add(p),
                        (this.carousel = new M(o, i, n)),
                        this.setUp());
                }
                return (
                    d["default"](
                        t,
                        [
                            {
                                key: "setUp",
                                value: function () {
                                    var t = this,
                                        e = this.carousel,
                                        i = void 0,
                                        n = A;
                                    0 !== e.itemNum &&
                                        (this.isTouchDevice ? (e.addOptClass(f), (i = !1)) : (e.removeOptClass(f), (n.scrollbars = !1), (i = !0)),
                                        this.setPos(),
                                        E(200).then(function () {
                                            (t.scroll = new k(e.ctx, n, i)), (t.resizeTimer = null);
                                            var r = Math.floor((1e3 / 60) * 10);
                                            window.addEventListener("resize", function () {
                                                t.resizeTimer !== !1 && clearTimeout(t.resizeTimer),
                                                    (t.resizeTimer = setTimeout(function () {
                                                        t.curWinWidth !== window.innerWidth && ((t.curWinWidth = window.innerWidth), t.update());
                                                    }, r));
                                            });
                                        }));
                                },
                            },
                            {
                                key: "setPos",
                                value: function () {
                                    var e = void 0,
                                        i = this.carousel;
                                    (e = i.setCtxWidth()), i.setSize(this.isTouchDevice ? t.getMatchCols(this.itemsAtBreakpoint, e) : Math.floor(t.getMatchCols(this.itemsAtBreakpoint, e))), i.show();
                                },
                            },
                            {
                                key: "update",
                                value: function () {
                                    var t = this;
                                    this.carousel.hide(),
                                        this.setPos(),
                                        E(200).then(function () {
                                            t.scroll.refresh();
                                        });
                                },
                            },
                            {
                                key: "exit",
                                value: function () {
                                    return !1;
                                },
                            },
                        ],
                        [
                            {
                                key: "getMatchCols",
                                value: function (t, e) {
                                    var i = void 0,
                                        n = void 0;
                                    for (var r in t) {
                                        var o = Number(parseInt(r));
                                        if (((i = o), o > e)) {
                                            n = t[o];
                                            break;
                                        }
                                    }
                                    return n || (n = t[i]), Number(parseFloat(n));
                                },
                            },
                            {
                                key: "detectTouchDevice",
                                value: function () {
                                    var t = !1;
                                    return ("ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch)) && (t = !0), t;
                                },
                            },
                        ]
                    ),
                    t
                );
            })();
        e["default"] = C;
        var k = (function () {
                function t(e, i) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !1;
                    c["default"](this, t),
                        (this.scroll = new h(e, i)),
                        (this.scrollElem = e),
                        (this.optNavflg = n),
                        (this.wrapper = e.parentNode),
                        (this.slide = e.children[0]),
                        (this.curScrollPosX = 0),
                        (this.isHorizontal = !1),
                        this.setUp();
                }
                return (
                    d["default"](t, [
                        {
                            key: "setUp",
                            value: function () {
                                var t = this;
                                this.scroll.on("scrollStart", function (e) {
                                    t.isHorizontal = Math.abs(t.scroll.distX) > Math.abs(t.scroll.distY) + 5 ? !0 : !1;
                                }),
                                    this.scroll.on("scrollEnd", function (e) {
                                        (t.curScrollPosX = t.scroll.x), (t.isHorizontal = !1), t.optNavflg && t.updateNavBtn();
                                    }),
                                    this.optNavflg && (this.createNavBtn(), this.updateNavBtn()),
                                    "ontouchstart" in window &&
                                        this.wrapper.addEventListener(
                                            "touchmove",
                                            function (e) {
                                                t.isHorizontal && e.preventDefault();
                                            },
                                            !1
                                        );
                            },
                        },
                        {
                            key: "createNavBtn",
                            value: function () {
                                var t = this,
                                    e = void 0,
                                    i = void 0;
                                (e = document.createElement("div")),
                                    e.classList.add(m),
                                    this.wrapper.appendChild(e),
                                    e.appendChild(document.createElement("span")),
                                    (i = document.createElement("div")),
                                    i.classList.add(T),
                                    this.wrapper.appendChild(i),
                                    i.appendChild(document.createElement("span")),
                                    e.addEventListener(
                                        "click",
                                        function () {
                                            return t.slideTo(y);
                                        },
                                        !1
                                    ),
                                    i.addEventListener(
                                        "click",
                                        function () {
                                            return t.slideTo(S);
                                        },
                                        !1
                                    ),
                                    (this.prevBtn = e),
                                    (this.nextBtn = i);
                            },
                        },
                        {
                            key: "refresh",
                            value: function () {
                                var t = this;
                                E(200).then(function () {
                                    t.scroll.refresh(), t.scroll.scrollTo(0, 0, 0), t.optNavflg && t.updateNavBtn();
                                });
                            },
                        },
                        {
                            key: "updateNavBtn",
                            value: function () {
                                var t = this.prevBtn,
                                    e = this.nextBtn,
                                    i = void 0,
                                    n = void 0;
                                return (
                                    (i = this.slide.clientWidth),
                                    (n = this.scrollElem.clientWidth),
                                    n > i
                                        ? (t.classList.remove(b), void e.classList.remove(b))
                                        : (this.curScrollPosX < 0 ? t.classList.add(b) : t.classList.remove(b), void (this.curScrollPosX > -1 * Math.floor(i - n) ? e.classList.add(b) : e.classList.remove(b)))
                                );
                            },
                        },
                        {
                            key: "slideTo",
                            value: function (t) {
                                var e = void 0,
                                    i = void 0,
                                    n = void 0;
                                (i = this.slide.clientWidth),
                                    (n = this.scrollElem.clientWidth),
                                    (e = t === y ? (this.curScrollPosX + n > 0 ? 0 : this.curScrollPosX + n) : Math.abs(this.curScrollPosX) + n > i - n ? -1 * (i - Math.abs(n)) : this.curScrollPosX - n),
                                    this.scroll.scrollTo(e, 0, w, x);
                            },
                        },
                    ]),
                    t
                );
            })(),
            M = (function () {
                function t(e, i, n) {
                    c["default"](this, t),
                        (this.elem = e),
                        (this.ctx = null),
                        (this.ctxWidth = 0),
                        (this.slide = this.elem.querySelector(i)),
                        (this.padding = 0),
                        (this.width = 0),
                        (this.itemArr = this.slide.querySelectorAll(n)),
                        (this.itemNum = this.itemArr.length),
                        (this.itemWidth = 0),
                        (this.iniItem = {}),
                        (this.isLoaded = !1),
                        this.setUpDom();
                }
                return (
                    d["default"](t, [
                        {
                            key: "setUpDom",
                            value: function () {
                                if (0 !== this.itemNum) {
                                    for (this.ctx = document.createElement("div"), this.ctx.classList.add(g); this.elem.firstChild; ) this.ctx.appendChild(this.elem.firstChild);
                                    this.elem.appendChild(this.ctx), (this.ctxWidth = this.ctx.clientWidth);
                                }
                            },
                        },
                        {
                            key: "cacheItemSize",
                            value: function () {
                                var t = this.elem.currentStyle || document.defaultView.getComputedStyle(this.elem, null);
                                this.padding = parseFloat(t.paddingTop);
                                var e = this.itemArr[0].currentStyle || document.defaultView.getComputedStyle(this.itemArr[0], null);
                                (this.iniItem = {
                                    marginH: parseFloat(e.marginLeft) + parseFloat(e.marginRight),
                                    marginV: parseFloat(e.marginTop) + parseFloat(e.marginBottom),
                                    width: this.itemArr[0].clientWidth,
                                    height: this.itemArr[0].clientHeight,
                                }),
                                    (this.isLoaded = !0);
                            },
                        },
                        {
                            key: "setSize",
                            value: function (t) {
                                this.isLoaded || this.cacheItemSize();
                                for (var e = Math.floor(((this.ctxWidth - this.iniItem.marginH * t) / t) * 100) / 100, i = 0, n = 0; n < this.itemNum; n++)
                                    (this.itemArr[n].style.height = ""), (this.itemArr[n].style.width = e + "px"), i < this.itemArr[n].clientHeight && (i = this.itemArr[n].clientHeight);
                                for (var r = 0; r < this.itemNum; r++) this.itemArr[r].style.height = i + "px";
                                (this.itemWidth = e + this.iniItem.marginH),
                                    (this.width = this.itemWidth * this.itemNum),
                                    (this.slide.style.width = this.width + "px"),
                                    (this.slide.style.height = i + this.iniItem.marginV + "px"),
                                    (this.elem.style.height = i + this.iniItem.marginV + this.padding + "px"),
                                    (this.ctx.style.height = i + this.iniItem.marginV + this.padding + "px");
                            },
                        },
                        {
                            key: "show",
                            value: function () {
                                this.elem.classList.add(v);
                            },
                        },
                        {
                            key: "hide",
                            value: function () {
                                this.elem.classList.remove(v);
                            },
                        },
                        {
                            key: "addOptClass",
                            value: function (t) {
                                this.elem.classList.add(t);
                            },
                        },
                        {
                            key: "removeOptClass",
                            value: function (t) {
                                this.elem.classList.remove(t);
                            },
                        },
                        {
                            key: "setCtxWidth",
                            value: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.ctx.clientWidth;
                                return (this.ctxWidth = t), this.ctxWidth;
                            },
                        },
                        {
                            key: "getCtxWidth",
                            value: function () {
                                return this.ctxWidth;
                            },
                        },
                    ]),
                    t
                );
            })(),
            E = function (t) {
                return new o["default"](function (e, i) {
                    setTimeout(e, t);
                });
            };
        t.exports = e["default"];
    },
    326: function (t, e, n) {
        (function (t) {
            !(function (t) {
                var e = {
                    mode: "horizontal",
                    slideSelector: "",
                    infiniteLoop: !0,
                    hideControlOnEnd: !1,
                    speed: 500,
                    easing: null,
                    slideMargin: 0,
                    startSlide: 0,
                    randomStart: !1,
                    captions: !1,
                    ticker: !1,
                    tickerHover: !1,
                    adaptiveHeight: !1,
                    adaptiveHeightSpeed: 500,
                    video: !1,
                    useCSS: !0,
                    preloadImages: "visible",
                    responsive: !0,
                    slideZIndex: 50,
                    wrapperClass: "bx-wrapper",
                    touchEnabled: !0,
                    swipeThreshold: 50,
                    oneToOneTouch: !0,
                    preventDefaultSwipeX: !0,
                    preventDefaultSwipeY: !1,
                    ariaLive: !0,
                    ariaHidden: !0,
                    keyboardEnabled: !1,
                    pager: !0,
                    pagerType: "full",
                    pagerShortSeparator: " / ",
                    pagerSelector: null,
                    buildPager: null,
                    pagerCustom: null,
                    controls: !0,
                    nextText: "Next",
                    prevText: "Prev",
                    nextSelector: null,
                    prevSelector: null,
                    autoControls: !1,
                    startText: "Start",
                    stopText: "Stop",
                    autoControlsCombine: !1,
                    autoControlsSelector: null,
                    auto: !1,
                    pause: 4e3,
                    autoStart: !0,
                    autoDirection: "next",
                    stopAutoOnClick: !1,
                    autoHover: !1,
                    autoDelay: 0,
                    autoSlideForOnePage: !1,
                    minSlides: 1,
                    maxSlides: 1,
                    moveSlides: 0,
                    slideWidth: 0,
                    shrinkItems: !1,
                    onSliderLoad: function () {
                        return !0;
                    },
                    onSlideBefore: function () {
                        return !0;
                    },
                    onSlideAfter: function () {
                        return !0;
                    },
                    onSlideNext: function () {
                        return !0;
                    },
                    onSlidePrev: function () {
                        return !0;
                    },
                    onSliderResize: function () {
                        return !0;
                    },
                    onAutoChange: function () {
                        return !0;
                    },
                };
                t.fn.bxSlider = function (n) {
                    if (0 === this.length) return this;
                    if (this.length > 1)
                        return (
                            this.each(function () {
                                t(this).bxSlider(n);
                            }),
                            this
                        );
                    var r = {},
                        o = this,
                        s = t(window).width(),
                        a = t(window).height();
                    if (!t(o).data("bxSlider")) {
                        var l = function () {
                                t(o).data("bxSlider") ||
                                    ((r.settings = t.extend({}, e, n)),
                                    (r.settings.slideWidth = parseInt(r.settings.slideWidth)),
                                    (r.children = o.children(r.settings.slideSelector)),
                                    r.children.length < r.settings.minSlides && (r.settings.minSlides = r.children.length),
                                    r.children.length < r.settings.maxSlides && (r.settings.maxSlides = r.children.length),
                                    r.settings.randomStart && (r.settings.startSlide = Math.floor(Math.random() * r.children.length)),
                                    (r.active = { index: r.settings.startSlide }),
                                    (r.carousel = r.settings.minSlides > 1 || r.settings.maxSlides > 1 ? !0 : !1),
                                    r.carousel && (r.settings.preloadImages = "all"),
                                    (r.minThreshold = r.settings.minSlides * r.settings.slideWidth + (r.settings.minSlides - 1) * r.settings.slideMargin),
                                    (r.maxThreshold = r.settings.maxSlides * r.settings.slideWidth + (r.settings.maxSlides - 1) * r.settings.slideMargin),
                                    (r.working = !1),
                                    (r.controls = {}),
                                    (r.interval = null),
                                    (r.animProp = "vertical" === r.settings.mode ? "top" : "left"),
                                    (r.usingCSS =
                                        r.settings.useCSS &&
                                        "fade" !== r.settings.mode &&
                                        (function () {
                                            for (var t = document.createElement("div"), e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], i = 0; i < e.length; i++)
                                                if (void 0 !== t.style[e[i]]) return (r.cssPrefix = e[i].replace("Perspective", "").toLowerCase()), (r.animProp = "-" + r.cssPrefix + "-transform"), !0;
                                            return !1;
                                        })()),
                                    "vertical" === r.settings.mode && (r.settings.maxSlides = r.settings.minSlides),
                                    o.data("origStyle", o.attr("style")),
                                    o.children(r.settings.slideSelector).each(function () {
                                        t(this).data("origStyle", t(this).attr("style"));
                                    }),
                                    c());
                            },
                            c = function () {
                                var e = r.children.eq(r.settings.startSlide);
                                o.wrap('<div class="' + r.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'),
                                    (r.viewport = o.parent()),
                                    r.settings.ariaLive && !r.settings.ticker && r.viewport.attr("aria-live", "polite"),
                                    (r.loader = t('<div class="bx-loading" />')),
                                    r.viewport.prepend(r.loader),
                                    o.css({ width: "horizontal" === r.settings.mode ? 1e3 * r.children.length + 215 + "%" : "auto", position: "relative" }),
                                    r.usingCSS && r.settings.easing ? o.css("-" + r.cssPrefix + "-transition-timing-function", r.settings.easing) : r.settings.easing || (r.settings.easing = "swing"),
                                    r.viewport.css({ width: "100%", overflow: "hidden", position: "relative" }),
                                    r.viewport.parent().css({ maxWidth: p() }),
                                    r.children.css({ float: "horizontal" === r.settings.mode ? "left" : "none", listStyle: "none", position: "relative" }),
                                    r.children.css("width", f()),
                                    "horizontal" === r.settings.mode && r.settings.slideMargin > 0 && r.children.css("marginRight", r.settings.slideMargin),
                                    "vertical" === r.settings.mode && r.settings.slideMargin > 0 && r.children.css("marginBottom", r.settings.slideMargin),
                                    "fade" === r.settings.mode && (r.children.css({ position: "absolute", zIndex: 0, display: "none" }), r.children.eq(r.settings.startSlide).css({ zIndex: r.settings.slideZIndex, display: "block" })),
                                    (r.controls.el = t('<div class="bx-controls" />')),
                                    r.settings.captions && P(),
                                    (r.active.last = r.settings.startSlide === g() - 1),
                                    r.settings.video && o.fitVids(),
                                    ("all" === r.settings.preloadImages || r.settings.ticker) && (e = r.children),
                                    r.settings.ticker
                                        ? (r.settings.pager = !1)
                                        : (r.settings.controls && x(),
                                          r.settings.auto && r.settings.autoControls && w(),
                                          r.settings.pager && S(),
                                          (r.settings.controls || r.settings.autoControls || r.settings.pager) && r.viewport.after(r.controls.el)),
                                    u(e, d);
                            },
                            u = function (e, i) {
                                var n = e.find('img:not([src=""]), iframe').length,
                                    r = 0;
                                return 0 === n
                                    ? void i()
                                    : void e.find('img:not([src=""]), iframe').each(function () {
                                          t(this)
                                              .one("load error", function () {
                                                  ++r === n && i();
                                              })
                                              .each(function () {
                                                  (this.complete || "" == this.src) && t(this).trigger("load");
                                              });
                                      });
                            },
                            d = function () {
                                if (r.settings.infiniteLoop && "fade" !== r.settings.mode && !r.settings.ticker) {
                                    var e = "vertical" === r.settings.mode ? r.settings.minSlides : r.settings.maxSlides,
                                        i = r.children.slice(0, e).clone(!0).addClass("bx-clone"),
                                        n = r.children.slice(-e).clone(!0).addClass("bx-clone");
                                    r.settings.ariaHidden && (i.attr("aria-hidden", !0), n.attr("aria-hidden", !0)), o.append(i).prepend(n);
                                }
                                r.loader.remove(),
                                    T(),
                                    "vertical" === r.settings.mode && (r.settings.adaptiveHeight = !0),
                                    r.viewport.height(h()),
                                    o.redrawSlider(),
                                    r.settings.onSliderLoad.call(o, r.active.index),
                                    (r.initialized = !0),
                                    r.settings.responsive && t(window).bind("resize", z),
                                    r.settings.auto && r.settings.autoStart && (g() > 1 || r.settings.autoSlideForOnePage) && N(),
                                    r.settings.ticker && O(),
                                    r.settings.pager && _(r.settings.startSlide),
                                    r.settings.controls && D(),
                                    r.settings.touchEnabled && !r.settings.ticker && X(),
                                    r.settings.keyboardEnabled && !r.settings.ticker && t(document).keydown(W);
                            },
                            h = function () {
                                var e = 0,
                                    n = t();
                                if ("vertical" === r.settings.mode || r.settings.adaptiveHeight)
                                    if (r.carousel) {
                                        var o = 1 === r.settings.moveSlides ? r.active.index : r.active.index * m();
                                        for (n = r.children.eq(o), i = 1; i <= r.settings.maxSlides - 1; i++) n = n.add(o + i >= r.children.length ? r.children.eq(i - 1) : r.children.eq(o + i));
                                    } else n = r.children.eq(r.active.index);
                                else n = r.children;
                                return (
                                    "vertical" === r.settings.mode
                                        ? (n.each(function (i) {
                                              e += t(this).outerHeight();
                                          }),
                                          r.settings.slideMargin > 0 && (e += r.settings.slideMargin * (r.settings.minSlides - 1)))
                                        : (e = Math.max.apply(
                                              Math,
                                              n
                                                  .map(function () {
                                                      return t(this).outerHeight(!1);
                                                  })
                                                  .get()
                                          )),
                                    "border-box" === r.viewport.css("box-sizing")
                                        ? (e += parseFloat(r.viewport.css("padding-top")) + parseFloat(r.viewport.css("padding-bottom")) + parseFloat(r.viewport.css("border-top-width")) + parseFloat(r.viewport.css("border-bottom-width")))
                                        : "padding-box" === r.viewport.css("box-sizing") && (e += parseFloat(r.viewport.css("padding-top")) + parseFloat(r.viewport.css("padding-bottom"))),
                                    e
                                );
                            },
                            p = function () {
                                var t = "100%";
                                return r.settings.slideWidth > 0 && (t = "horizontal" === r.settings.mode ? r.settings.maxSlides * r.settings.slideWidth + (r.settings.maxSlides - 1) * r.settings.slideMargin : r.settings.slideWidth), t;
                            },
                            f = function () {
                                var t = r.settings.slideWidth,
                                    e = r.viewport.width();
                                if (0 === r.settings.slideWidth || (r.settings.slideWidth > e && !r.carousel) || "vertical" === r.settings.mode) t = e;
                                else if (r.settings.maxSlides > 1 && "horizontal" === r.settings.mode) {
                                    if (e > r.maxThreshold) return t;
                                    e < r.minThreshold
                                        ? (t = (e - r.settings.slideMargin * (r.settings.minSlides - 1)) / r.settings.minSlides)
                                        : r.settings.shrinkItems && (t = Math.floor((e + r.settings.slideMargin) / Math.ceil((e + r.settings.slideMargin) / (t + r.settings.slideMargin)) - r.settings.slideMargin));
                                }
                                return t;
                            },
                            v = function () {
                                var t = 1,
                                    e = null;
                                return (
                                    "horizontal" === r.settings.mode && r.settings.slideWidth > 0
                                        ? r.viewport.width() < r.minThreshold
                                            ? (t = r.settings.minSlides)
                                            : r.viewport.width() > r.maxThreshold
                                            ? (t = r.settings.maxSlides)
                                            : ((e = r.children.first().width() + r.settings.slideMargin), (t = Math.floor((r.viewport.width() + r.settings.slideMargin) / e) || 1))
                                        : "vertical" === r.settings.mode && (t = r.settings.minSlides),
                                    t
                                );
                            },
                            g = function () {
                                var t = 0,
                                    e = 0,
                                    i = 0;
                                if (r.settings.moveSlides > 0) {
                                    if (!r.settings.infiniteLoop) {
                                        for (; e < r.children.length; ) ++t, (e = i + v()), (i += r.settings.moveSlides <= v() ? r.settings.moveSlides : v());
                                        return i;
                                    }
                                    t = Math.ceil(r.children.length / m());
                                } else t = Math.ceil(r.children.length / v());
                                return t;
                            },
                            m = function () {
                                return r.settings.moveSlides > 0 && r.settings.moveSlides <= v() ? r.settings.moveSlides : v();
                            },
                            T = function () {
                                var t, e, i;
                                r.children.length > r.settings.maxSlides && r.active.last && !r.settings.infiniteLoop
                                    ? "horizontal" === r.settings.mode
                                        ? ((e = r.children.last()), (t = e.position()), b(-(t.left - (r.viewport.width() - e.outerWidth())), "reset", 0))
                                        : "vertical" === r.settings.mode && ((i = r.children.length - r.settings.minSlides), (t = r.children.eq(i).position()), b(-t.top, "reset", 0))
                                    : ((t = r.children.eq(r.active.index * m()).position()),
                                      r.active.index === g() - 1 && (r.active.last = !0),
                                      void 0 !== t && ("horizontal" === r.settings.mode ? b(-t.left, "reset", 0) : "vertical" === r.settings.mode && b(-t.top, "reset", 0)));
                            },
                            b = function (e, i, n, s) {
                                var a, l;
                                r.usingCSS
                                    ? ((l = "vertical" === r.settings.mode ? "translate3d(0, " + e + "px, 0)" : "translate3d(" + e + "px, 0, 0)"),
                                      o.css("-" + r.cssPrefix + "-transition-duration", n / 1e3 + "s"),
                                      "slide" === i
                                          ? (o.css(r.animProp, l),
                                            0 !== n
                                                ? o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (e) {
                                                      t(e.target).is(o) && (o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), H());
                                                  })
                                                : H())
                                          : "reset" === i
                                          ? o.css(r.animProp, l)
                                          : "ticker" === i &&
                                            (o.css("-" + r.cssPrefix + "-transition-timing-function", "linear"),
                                            o.css(r.animProp, l),
                                            0 !== n
                                                ? o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (e) {
                                                      t(e.target).is(o) && (o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), b(s.resetValue, "reset", 0), L());
                                                  })
                                                : (b(s.resetValue, "reset", 0), L())))
                                    : ((a = {}),
                                      (a[r.animProp] = e),
                                      "slide" === i
                                          ? o.animate(a, n, r.settings.easing, function () {
                                                H();
                                            })
                                          : "reset" === i
                                          ? o.css(r.animProp, e)
                                          : "ticker" === i &&
                                            o.animate(a, n, "linear", function () {
                                                b(s.resetValue, "reset", 0), L();
                                            }));
                            },
                            y = function () {
                                for (var e = "", i = "", n = g(), o = 0; n > o; o++)
                                    (i = ""),
                                        (r.settings.buildPager && t.isFunction(r.settings.buildPager)) || r.settings.pagerCustom
                                            ? ((i = r.settings.buildPager(o)), r.pagerEl.addClass("bx-custom-pager"))
                                            : ((i = o + 1), r.pagerEl.addClass("bx-default-pager")),
                                        (e += '<div class="bx-pager-item"><a href="" data-slide-index="' + o + '" class="bx-pager-link">' + i + "</a></div>");
                                r.pagerEl.html(e);
                            },
                            S = function () {
                                r.settings.pagerCustom
                                    ? (r.pagerEl = t(r.settings.pagerCustom))
                                    : ((r.pagerEl = t('<div class="bx-pager" />')), r.settings.pagerSelector ? t(r.settings.pagerSelector).html(r.pagerEl) : r.controls.el.addClass("bx-has-pager").append(r.pagerEl), y()),
                                    r.pagerEl.on("click touchend", "a", E);
                            },
                            x = function () {
                                (r.controls.next = t('<a class="bx-next" href="">' + r.settings.nextText + "</a>")),
                                    (r.controls.prev = t('<a class="bx-prev" href="">' + r.settings.prevText + "</a>")),
                                    r.controls.next.bind("click touchend", A),
                                    r.controls.prev.bind("click touchend", C),
                                    r.settings.nextSelector && t(r.settings.nextSelector).append(r.controls.next),
                                    r.settings.prevSelector && t(r.settings.prevSelector).append(r.controls.prev),
                                    r.settings.nextSelector ||
                                        r.settings.prevSelector ||
                                        ((r.controls.directionEl = t('<div class="bx-controls-direction" />')),
                                        r.controls.directionEl.append(r.controls.prev).append(r.controls.next),
                                        r.controls.el.addClass("bx-has-controls-direction").append(r.controls.directionEl));
                            },
                            w = function () {
                                (r.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + r.settings.startText + "</a></div>")),
                                    (r.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + r.settings.stopText + "</a></div>")),
                                    (r.controls.autoEl = t('<div class="bx-controls-auto" />')),
                                    r.controls.autoEl.on("click", ".bx-start", k),
                                    r.controls.autoEl.on("click", ".bx-stop", M),
                                    r.settings.autoControlsCombine ? r.controls.autoEl.append(r.controls.start) : r.controls.autoEl.append(r.controls.start).append(r.controls.stop),
                                    r.settings.autoControlsSelector ? t(r.settings.autoControlsSelector).html(r.controls.autoEl) : r.controls.el.addClass("bx-has-controls-auto").append(r.controls.autoEl),
                                    G(r.settings.autoStart ? "stop" : "start");
                            },
                            P = function () {
                                r.children.each(function (e) {
                                    var i = t(this).find("img:first").attr("title");
                                    void 0 !== i && ("" + i).length && t(this).append('<div class="bx-caption"><span>' + i + "</span></div>");
                                });
                            },
                            A = function (t) {
                                t.preventDefault(), r.controls.el.hasClass("disabled") || (r.settings.auto && r.settings.stopAutoOnClick && o.stopAuto(), o.goToNextSlide());
                            },
                            C = function (t) {
                                t.preventDefault(), r.controls.el.hasClass("disabled") || (r.settings.auto && r.settings.stopAutoOnClick && o.stopAuto(), o.goToPrevSlide());
                            },
                            k = function (t) {
                                o.startAuto(), t.preventDefault();
                            },
                            M = function (t) {
                                o.stopAuto(), t.preventDefault();
                            },
                            E = function (e) {
                                var i, n;
                                e.preventDefault(),
                                    r.controls.el.hasClass("disabled") ||
                                        (r.settings.auto && r.settings.stopAutoOnClick && o.stopAuto(),
                                        (i = t(e.currentTarget)),
                                        void 0 !== i.attr("data-slide-index") && ((n = parseInt(i.attr("data-slide-index"))), n !== r.active.index && o.goToSlide(n)));
                            },
                            _ = function (e) {
                                var i = r.children.length;
                                return "short" === r.settings.pagerType
                                    ? (r.settings.maxSlides > 1 && (i = Math.ceil(r.children.length / r.settings.maxSlides)), void r.pagerEl.html(e + 1 + r.settings.pagerShortSeparator + i))
                                    : (r.pagerEl.find("a").removeClass("active"),
                                      void r.pagerEl.each(function (i, n) {
                                          t(n).find("a").eq(e).addClass("active");
                                      }));
                            },
                            H = function () {
                                if (r.settings.infiniteLoop) {
                                    var t = "";
                                    0 === r.active.index
                                        ? (t = r.children.eq(0).position())
                                        : r.active.index === g() - 1 && r.carousel
                                        ? (t = r.children.eq((g() - 1) * m()).position())
                                        : r.active.index === r.children.length - 1 && (t = r.children.eq(r.children.length - 1).position()),
                                        t && ("horizontal" === r.settings.mode ? b(-t.left, "reset", 0) : "vertical" === r.settings.mode && b(-t.top, "reset", 0));
                                }
                                (r.working = !1), r.settings.onSlideAfter.call(o, r.children.eq(r.active.index), r.oldIndex, r.active.index);
                            },
                            G = function (t) {
                                r.settings.autoControlsCombine ? r.controls.autoEl.html(r.controls[t]) : (r.controls.autoEl.find("a").removeClass("active"), r.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"));
                            },
                            D = function () {
                                1 === g()
                                    ? (r.controls.prev.addClass("disabled"), r.controls.next.addClass("disabled"))
                                    : !r.settings.infiniteLoop &&
                                      r.settings.hideControlOnEnd &&
                                      (0 === r.active.index
                                          ? (r.controls.prev.addClass("disabled"), r.controls.next.removeClass("disabled"))
                                          : r.active.index === g() - 1
                                          ? (r.controls.next.addClass("disabled"), r.controls.prev.removeClass("disabled"))
                                          : (r.controls.prev.removeClass("disabled"), r.controls.next.removeClass("disabled")));
                            },
                            I = function () {
                                o.startAuto();
                            },
                            B = function () {
                                o.stopAuto();
                            },
                            N = function () {
                                if (r.settings.autoDelay > 0) {
                                    setTimeout(o.startAuto, r.settings.autoDelay);
                                } else o.startAuto(), t(window).focus(I).blur(B);
                                r.settings.autoHover &&
                                    o.hover(
                                        function () {
                                            r.interval && (o.stopAuto(!0), (r.autoPaused = !0));
                                        },
                                        function () {
                                            r.autoPaused && (o.startAuto(!0), (r.autoPaused = null));
                                        }
                                    );
                            },
                            O = function () {
                                var e,
                                    i,
                                    n,
                                    s,
                                    a,
                                    l,
                                    c,
                                    u,
                                    d = 0;
                                "next" === r.settings.autoDirection
                                    ? o.append(r.children.clone().addClass("bx-clone"))
                                    : (o.prepend(r.children.clone().addClass("bx-clone")), (e = r.children.first().position()), (d = "horizontal" === r.settings.mode ? -e.left : -e.top)),
                                    b(d, "reset", 0),
                                    (r.settings.pager = !1),
                                    (r.settings.controls = !1),
                                    (r.settings.autoControls = !1),
                                    r.settings.tickerHover &&
                                        (r.usingCSS
                                            ? ((s = "horizontal" === r.settings.mode ? 4 : 5),
                                              r.viewport.hover(
                                                  function () {
                                                      (i = o.css("-" + r.cssPrefix + "-transform")), (n = parseFloat(i.split(",")[s])), b(n, "reset", 0);
                                                  },
                                                  function () {
                                                      (u = 0),
                                                          r.children.each(function (e) {
                                                              u += "horizontal" === r.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0);
                                                          }),
                                                          (a = r.settings.speed / u),
                                                          (l = "horizontal" === r.settings.mode ? "left" : "top"),
                                                          (c = a * (u - Math.abs(parseInt(n)))),
                                                          L(c);
                                                  }
                                              ))
                                            : r.viewport.hover(
                                                  function () {
                                                      o.stop();
                                                  },
                                                  function () {
                                                      (u = 0),
                                                          r.children.each(function (e) {
                                                              u += "horizontal" === r.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0);
                                                          }),
                                                          (a = r.settings.speed / u),
                                                          (l = "horizontal" === r.settings.mode ? "left" : "top"),
                                                          (c = a * (u - Math.abs(parseInt(o.css(l))))),
                                                          L(c);
                                                  }
                                              )),
                                    L();
                            },
                            L = function (t) {
                                var e,
                                    i,
                                    n,
                                    s = t ? t : r.settings.speed,
                                    a = { left: 0, top: 0 },
                                    l = { left: 0, top: 0 };
                                "next" === r.settings.autoDirection ? (a = o.find(".bx-clone").first().position()) : (l = r.children.first().position()),
                                    (e = "horizontal" === r.settings.mode ? -a.left : -a.top),
                                    (i = "horizontal" === r.settings.mode ? -l.left : -l.top),
                                    (n = { resetValue: i }),
                                    b(e, "ticker", s, n);
                            },
                            R = function (e) {
                                var i = t(window),
                                    n = { top: i.scrollTop(), left: i.scrollLeft() },
                                    r = e.offset();
                                return (
                                    (n.right = n.left + i.width()),
                                    (n.bottom = n.top + i.height()),
                                    (r.right = r.left + e.outerWidth()),
                                    (r.bottom = r.top + e.outerHeight()),
                                    !(n.right < r.left || n.left > r.right || n.bottom < r.top || n.top > r.bottom)
                                );
                            },
                            W = function (t) {
                                var e = document.activeElement.tagName.toLowerCase(),
                                    i = "input|textarea",
                                    n = new RegExp(e, ["i"]),
                                    r = n.exec(i);
                                if (null == r && R(o)) {
                                    if (39 === t.keyCode) return A(t), !1;
                                    if (37 === t.keyCode) return C(t), !1;
                                }
                            },
                            X = function () {
                                (r.touch = { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } }),
                                    r.viewport.bind("touchstart MSPointerDown pointerdown", $),
                                    r.viewport.on("click", ".bxslider a", function (t) {
                                        r.viewport.hasClass("click-disabled") && (t.preventDefault(), r.viewport.removeClass("click-disabled"));
                                    });
                            },
                            $ = function (t) {
                                if ((r.controls.el.addClass("disabled"), r.working)) t.preventDefault(), r.controls.el.removeClass("disabled");
                                else {
                                    r.touch.originalPos = o.position();
                                    var e = t.originalEvent,
                                        i = "undefined" != typeof e.changedTouches ? e.changedTouches : [e];
                                    (r.touch.start.x = i[0].pageX),
                                        (r.touch.start.y = i[0].pageY),
                                        r.viewport.get(0).setPointerCapture && ((r.pointerId = e.pointerId), r.viewport.get(0).setPointerCapture(r.pointerId)),
                                        r.viewport.bind("touchmove MSPointerMove pointermove", F),
                                        r.viewport.bind("touchend MSPointerUp pointerup", V),
                                        r.viewport.bind("MSPointerCancel pointercancel", j);
                                }
                            },
                            j = function (t) {
                                b(r.touch.originalPos.left, "reset", 0),
                                    r.controls.el.removeClass("disabled"),
                                    r.viewport.unbind("MSPointerCancel pointercancel", j),
                                    r.viewport.unbind("touchmove MSPointerMove pointermove", F),
                                    r.viewport.unbind("touchend MSPointerUp pointerup", V),
                                    r.viewport.get(0).releasePointerCapture && r.viewport.get(0).releasePointerCapture(r.pointerId);
                            },
                            F = function (t) {
                                var e = t.originalEvent,
                                    i = "undefined" != typeof e.changedTouches ? e.changedTouches : [e],
                                    n = Math.abs(i[0].pageX - r.touch.start.x),
                                    o = Math.abs(i[0].pageY - r.touch.start.y),
                                    s = 0,
                                    a = 0;
                                3 * n > o && r.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * o > n && r.settings.preventDefaultSwipeY && t.preventDefault(),
                                    "fade" !== r.settings.mode &&
                                        r.settings.oneToOneTouch &&
                                        ("horizontal" === r.settings.mode ? ((a = i[0].pageX - r.touch.start.x), (s = r.touch.originalPos.left + a)) : ((a = i[0].pageY - r.touch.start.y), (s = r.touch.originalPos.top + a)),
                                        b(s, "reset", 0));
                            },
                            V = function (t) {
                                r.viewport.unbind("touchmove MSPointerMove pointermove", F), r.controls.el.removeClass("disabled");
                                var e = t.originalEvent,
                                    i = "undefined" != typeof e.changedTouches ? e.changedTouches : [e],
                                    n = 0,
                                    s = 0;
                                (r.touch.end.x = i[0].pageX),
                                    (r.touch.end.y = i[0].pageY),
                                    "fade" === r.settings.mode
                                        ? ((s = Math.abs(r.touch.start.x - r.touch.end.x)), s >= r.settings.swipeThreshold && (r.touch.start.x > r.touch.end.x ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto()))
                                        : ("horizontal" === r.settings.mode ? ((s = r.touch.end.x - r.touch.start.x), (n = r.touch.originalPos.left)) : ((s = r.touch.end.y - r.touch.start.y), (n = r.touch.originalPos.top)),
                                          !r.settings.infiniteLoop && ((0 === r.active.index && s > 0) || (r.active.last && 0 > s))
                                              ? b(n, "reset", 200)
                                              : Math.abs(s) >= r.settings.swipeThreshold
                                              ? (0 > s ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto())
                                              : b(n, "reset", 200)),
                                    r.viewport.unbind("touchend MSPointerUp pointerup", V),
                                    r.viewport.get(0).releasePointerCapture && r.viewport.get(0).releasePointerCapture(r.pointerId);
                            },
                            z = function (e) {
                                if (r.initialized)
                                    if (r.working) window.setTimeout(z, 10);
                                    else {
                                        var i = t(window).width(),
                                            n = t(window).height();
                                        (s !== i || a !== n) && ((s = i), (a = n), o.redrawSlider(), r.settings.onSliderResize.call(o, r.active.index));
                                    }
                            },
                            U = function (t) {
                                var e = v();
                                r.settings.ariaHidden && !r.settings.ticker && (r.children.attr("aria-hidden", "true"), r.children.slice(t, t + e).attr("aria-hidden", "false"));
                            },
                            q = function (t) {
                                return 0 > t ? (r.settings.infiniteLoop ? g() - 1 : r.active.index) : t >= g() ? (r.settings.infiniteLoop ? 0 : r.active.index) : t;
                            };
                        return (
                            (o.goToSlide = function (e, i) {
                                var n,
                                    s,
                                    a,
                                    l,
                                    c = !0,
                                    u = 0,
                                    d = { left: 0, top: 0 },
                                    p = null;
                                if (((r.oldIndex = r.active.index), (r.active.index = q(e)), !r.working && r.active.index !== r.oldIndex)) {
                                    if (((r.working = !0), (c = r.settings.onSlideBefore.call(o, r.children.eq(r.active.index), r.oldIndex, r.active.index)), "undefined" != typeof c && !c))
                                        return (r.active.index = r.oldIndex), void (r.working = !1);
                                    "next" === i
                                        ? r.settings.onSlideNext.call(o, r.children.eq(r.active.index), r.oldIndex, r.active.index) || (c = !1)
                                        : "prev" === i && (r.settings.onSlidePrev.call(o, r.children.eq(r.active.index), r.oldIndex, r.active.index) || (c = !1)),
                                        (r.active.last = r.active.index >= g() - 1),
                                        (r.settings.pager || r.settings.pagerCustom) && _(r.active.index),
                                        r.settings.controls && D(),
                                        "fade" === r.settings.mode
                                            ? (r.settings.adaptiveHeight && r.viewport.height() !== h() && r.viewport.animate({ height: h() }, r.settings.adaptiveHeightSpeed),
                                              r.children.filter(":visible").fadeOut(r.settings.speed).css({ zIndex: 0 }),
                                              r.children
                                                  .eq(r.active.index)
                                                  .css("zIndex", r.settings.slideZIndex + 1)
                                                  .fadeIn(r.settings.speed, function () {
                                                      t(this).css("zIndex", r.settings.slideZIndex), H();
                                                  }))
                                            : (r.settings.adaptiveHeight && r.viewport.height() !== h() && r.viewport.animate({ height: h() }, r.settings.adaptiveHeightSpeed),
                                              !r.settings.infiniteLoop && r.carousel && r.active.last
                                                  ? "horizontal" === r.settings.mode
                                                      ? ((p = r.children.eq(r.children.length - 1)), (d = p.position()), (u = r.viewport.width() - p.outerWidth()))
                                                      : ((n = r.children.length - r.settings.minSlides), (d = r.children.eq(n).position()))
                                                  : r.carousel && r.active.last && "prev" === i
                                                  ? ((s = 1 === r.settings.moveSlides ? r.settings.maxSlides - m() : (g() - 1) * m() - (r.children.length - r.settings.maxSlides)), (p = o.children(".bx-clone").eq(s)), (d = p.position()))
                                                  : "next" === i && 0 === r.active.index
                                                  ? ((d = o.find("> .bx-clone").eq(r.settings.maxSlides).position()), (r.active.last = !1))
                                                  : e >= 0 && ((l = e * parseInt(m())), (d = r.children.eq(l).position())),
                                              "undefined" != typeof d && ((a = "horizontal" === r.settings.mode ? -(d.left - u) : -d.top), b(a, "slide", r.settings.speed)),
                                              (r.working = !1)),
                                        r.settings.ariaHidden && U(r.active.index * m());
                                }
                            }),
                            (o.goToNextSlide = function () {
                                if ((r.settings.infiniteLoop || !r.active.last) && 1 != r.working) {
                                    var t = parseInt(r.active.index) + 1;
                                    o.goToSlide(t, "next");
                                }
                            }),
                            (o.goToPrevSlide = function () {
                                if ((r.settings.infiniteLoop || 0 !== r.active.index) && 1 != r.working) {
                                    var t = parseInt(r.active.index) - 1;
                                    o.goToSlide(t, "prev");
                                }
                            }),
                            (o.startAuto = function (t) {
                                r.interval ||
                                    ((r.interval = setInterval(function () {
                                        "next" === r.settings.autoDirection ? o.goToNextSlide() : o.goToPrevSlide();
                                    }, r.settings.pause)),
                                    r.settings.onAutoChange.call(o, !0),
                                    r.settings.autoControls && t !== !0 && G("stop"));
                            }),
                            (o.stopAuto = function (t) {
                                r.interval && (clearInterval(r.interval), (r.interval = null), r.settings.onAutoChange.call(o, !1), r.settings.autoControls && t !== !0 && G("start"));
                            }),
                            (o.getCurrentSlide = function () {
                                return r.active.index;
                            }),
                            (o.getCurrentSlideElement = function () {
                                return r.children.eq(r.active.index);
                            }),
                            (o.getSlideElement = function (t) {
                                return r.children.eq(t);
                            }),
                            (o.getSlideCount = function () {
                                return r.children.length;
                            }),
                            (o.isWorking = function () {
                                return r.working;
                            }),
                            (o.redrawSlider = function () {
                                r.children.add(o.find(".bx-clone")).outerWidth(f()),
                                    r.viewport.css("height", h()),
                                    r.settings.ticker || T(),
                                    r.active.last && (r.active.index = g() - 1),
                                    r.active.index >= g() && (r.active.last = !0),
                                    r.settings.pager && !r.settings.pagerCustom && (y(), _(r.active.index)),
                                    r.settings.ariaHidden && U(r.active.index * m());
                            }),
                            (o.destroySlider = function () {
                                r.initialized &&
                                    ((r.initialized = !1),
                                    t(".bx-clone", this).remove(),
                                    r.children.each(function () {
                                        void 0 !== t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style");
                                    }),
                                    void 0 !== t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"),
                                    t(this).unwrap().unwrap(),
                                    r.controls.el && r.controls.el.remove(),
                                    r.controls.next && r.controls.next.remove(),
                                    r.controls.prev && r.controls.prev.remove(),
                                    r.pagerEl && r.settings.controls && !r.settings.pagerCustom && r.pagerEl.remove(),
                                    t(".bx-caption", this).remove(),
                                    r.controls.autoEl && r.controls.autoEl.remove(),
                                    clearInterval(r.interval),
                                    r.settings.responsive && t(window).unbind("resize", z),
                                    r.settings.keyboardEnabled && t(document).unbind("keydown", W),
                                    t(this).removeData("bxSlider"),
                                    t(window).off("blur", B).off("focus", I));
                            }),
                            (o.reloadSlider = function (e) {
                                void 0 !== e && (n = e), o.destroySlider(), l(), t(o).data("bxSlider", this);
                            }),
                            l(),
                            t(o).data("bxSlider", this),
                            this
                        );
                    }
                };
            })(t);
        }.call(e, n(3)));
    },
    329: function (t, e, i) {
        var n = i(44);
        t.exports = (n["default"] || n).template({
            1: function (t, e, i, n, r, o) {
                var s,
                    a,
                    l = this.lambda,
                    c = this.escapeExpression;
                return (
                    '    <div class="item-related-list__item">\n      <a \n        class="js-recommend-item" \n        data-id="' +
                    c(l(null != t ? t.id : t, t)) +
                    "\" \n        data-pos='" +
                    c(((a = null != (a = e.index || (n && n.index)) ? a : e.helperMissing), "function" == typeof a ? a.call(t, { name: "index", hash: {}, data: n }) : a)) +
                    "'\n        data-name=\"" +
                    c(l(null != t ? t.name : t, t)) +
                    '"\n        data-category-name="' +
                    c(l(null != t ? t.category_name : t, t)) +
                    '"\n        data-brand-name="' +
                    c(l(null != t ? t.brand_name : t, t)) +
                    '"\n        data-buyma-product-id="' +
                    c(l(null != t ? t.buyma_product_id : t, t)) +
                    '"\n        data-recommend-id="' +
                    c(l(null != o[1] ? o[1].recommend_id : o[1], t)) +
                    '"\n        href="' +
                    c(l(null != t ? t.url : t, t)) +
                    '">\n        <div class="ir-item-picture">\n          <img alt="" class="ir-item-picture__item" src="' +
                    c(l(null != t ? t.image_url : t, t)) +
                    '" data-pin-no-hover="true">\n        </div>\n        <div class="ir-item-brand">\n          ' +
                    c(l(null != t ? t.brand_name : t, t)) +
                    ' \n        </div>\n        <div class="ir-item-name">\n          ' +
                    c(l(null != t ? t.name : t, t)) +
                    '\n        </div>\n        <div class="ir-item-price--wrap">\n' +
                    (null != (s = e["if"].call(t, null != t ? t.discount : t, { name: "if", hash: {}, fn: this.program(2, n, 0, r, o), inverse: this.program(4, n, 0, r, o), data: n })) ? s : "") +
                    "        </div>\n      </a>\n    </div>\n"
                );
            },
            2: function (t, e, i, n) {
                var r = this.lambda,
                    o = this.escapeExpression;
                return (
                    '            <div class="ir-item-price">\n              ' +
                    o(r(null != t ? t.price : t, t)) +
                    '\n              <span class="ir-item-price--discount-rate">\n                ' +
                    o(r(null != t ? t.discount_rate : t, t)) +
                    '% off\n              </span>\n            </div>\n            <div class="ir-item-price--reference">' +
                    o(r(null != t ? t.reference_price : t, t)) +
                    "</div>\n"
                );
            },
            4: function (t, e, i, n) {
                return '            <div class="ir-item-price">' + this.escapeExpression(this.lambda(null != t ? t.price : t, t)) + "</div>\n";
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function (t, e, i, n, r, o) {
                var s;
                return '<div class="item-related-list">\n' + (null != (s = e.each.call(t, null != t ? t.items : t, { name: "each", hash: {}, fn: this.program(1, n, 0, r, o), inverse: this.noop, data: n })) ? s : "") + "</div>\n";
            },
            useData: !0,
            useDepths: !0,
        });
    },
    330: function (t, e, i) {
        var n;
        !(function (r, o, s) {
            function a(t, e) {
                (this.wrapper = "string" == typeof t ? o.querySelector(t) : t),
                    (this.scroller = this.wrapper.children[0]),
                    (this.scrollerStyle = this.scroller.style),
                    (this.options = {
                        resizeScrollbars: !0,
                        mouseWheelSpeed: 20,
                        snapThreshold: 0.334,
                        disablePointer: !d.hasPointer,
                        disableTouch: d.hasPointer || !d.hasTouch,
                        disableMouse: d.hasPointer || d.hasTouch,
                        startX: 0,
                        startY: 0,
                        scrollY: !0,
                        directionLockThreshold: 5,
                        momentum: !0,
                        bounce: !0,
                        bounceTime: 600,
                        bounceEasing: "",
                        preventDefault: !0,
                        preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },
                        HWCompositing: !0,
                        useTransition: !0,
                        useTransform: !0,
                        bindToWrapper: "undefined" == typeof r.onmousedown,
                    });
                for (var i in e) this.options[i] = e[i];
                (this.translateZ = this.options.HWCompositing && d.hasPerspective ? " translateZ(0)" : ""),
                    (this.options.useTransition = d.hasTransition && this.options.useTransition),
                    (this.options.useTransform = d.hasTransform && this.options.useTransform),
                    (this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough),
                    (this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault),
                    (this.options.scrollY = "vertical" == this.options.eventPassthrough ? !1 : this.options.scrollY),
                    (this.options.scrollX = "horizontal" == this.options.eventPassthrough ? !1 : this.options.scrollX),
                    (this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough),
                    (this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold),
                    (this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? d.ease[this.options.bounceEasing] || d.ease.circular : this.options.bounceEasing),
                    (this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling),
                    this.options.tap === !0 && (this.options.tap = "tap"),
                    "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1),
                    (this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1),
                    (this.x = 0),
                    (this.y = 0),
                    (this.directionX = 0),
                    (this.directionY = 0),
                    (this._events = {}),
                    this._init(),
                    this.refresh(),
                    this.scrollTo(this.options.startX, this.options.startY),
                    this.enable();
            }
            function l(t, e, i) {
                var n = o.createElement("div"),
                    r = o.createElement("div");
                return (
                    i === !0 &&
                        ((n.style.cssText = "position:absolute;z-index:9999"),
                        (r.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px")),
                    (r.className = "iScrollIndicator"),
                    "h" == t
                        ? (i === !0 && ((n.style.cssText += ";height:7px;left:2px;right:2px;bottom:0"), (r.style.height = "100%")), (n.className = "iScrollHorizontalScrollbar"))
                        : (i === !0 && ((n.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px"), (r.style.width = "100%")), (n.className = "iScrollVerticalScrollbar")),
                    (n.style.cssText += ";overflow:hidden"),
                    e || (n.style.pointerEvents = "none"),
                    n.appendChild(r),
                    n
                );
            }
            function c(t, e) {
                (this.wrapper = "string" == typeof e.el ? o.querySelector(e.el) : e.el),
                    (this.wrapperStyle = this.wrapper.style),
                    (this.indicator = this.wrapper.children[0]),
                    (this.indicatorStyle = this.indicator.style),
                    (this.scroller = t),
                    (this.options = { listenX: !0, listenY: !0, interactive: !1, resize: !0, defaultScrollbars: !1, shrink: !1, fade: !1, speedRatioX: 0, speedRatioY: 0 });
                for (var i in e) this.options[i] = e[i];
                if (
                    ((this.sizeRatioX = 1),
                    (this.sizeRatioY = 1),
                    (this.maxPosX = 0),
                    (this.maxPosY = 0),
                    this.options.interactive &&
                        (this.options.disableTouch || (d.addEvent(this.indicator, "touchstart", this), d.addEvent(r, "touchend", this)),
                        this.options.disablePointer || (d.addEvent(this.indicator, d.prefixPointerEvent("pointerdown"), this), d.addEvent(r, d.prefixPointerEvent("pointerup"), this)),
                        this.options.disableMouse || (d.addEvent(this.indicator, "mousedown", this), d.addEvent(r, "mouseup", this))),
                    this.options.fade)
                ) {
                    this.wrapperStyle[d.style.transform] = this.scroller.translateZ;
                    var n = d.style.transitionDuration;
                    this.wrapperStyle[n] = d.isBadAndroid ? "0.0001ms" : "0ms";
                    var s = this;
                    d.isBadAndroid &&
                        u(function () {
                            "0.0001ms" === s.wrapperStyle[n] && (s.wrapperStyle[n] = "0s");
                        }),
                        (this.wrapperStyle.opacity = "0");
                }
            }
            var u =
                    r.requestAnimationFrame ||
                    r.webkitRequestAnimationFrame ||
                    r.mozRequestAnimationFrame ||
                    r.oRequestAnimationFrame ||
                    r.msRequestAnimationFrame ||
                    function (t) {
                        r.setTimeout(t, 1e3 / 60);
                    },
                d = (function () {
                    function t(t) {
                        return n === !1 ? !1 : "" === n ? t : n + t.charAt(0).toUpperCase() + t.substr(1);
                    }
                    var e = {},
                        i = o.createElement("div").style,
                        n = (function () {
                            for (var t, e = ["t", "webkitT", "MozT", "msT", "OT"], n = 0, r = e.length; r > n; n++) if (((t = e[n] + "ransform"), t in i)) return e[n].substr(0, e[n].length - 1);
                            return !1;
                        })();
                    (e.getTime =
                        Date.now ||
                        function () {
                            return new Date().getTime();
                        }),
                        (e.extend = function (t, e) {
                            for (var i in e) t[i] = e[i];
                        }),
                        (e.addEvent = function (t, e, i, n) {
                            t.addEventListener(e, i, !!n);
                        }),
                        (e.removeEvent = function (t, e, i, n) {
                            t.removeEventListener(e, i, !!n);
                        }),
                        (e.prefixPointerEvent = function (t) {
                            return r.MSPointerEvent ? "MSPointer" + t.charAt(7).toUpperCase() + t.substr(8) : t;
                        }),
                        (e.momentum = function (t, e, i, n, r, o) {
                            var a,
                                l,
                                c = t - e,
                                u = s.abs(c) / i;
                            return (
                                (o = void 0 === o ? 6e-4 : o),
                                (a = t + ((u * u) / (2 * o)) * (0 > c ? -1 : 1)),
                                (l = u / o),
                                n > a ? ((a = r ? n - (r / 2.5) * (u / 8) : n), (c = s.abs(a - t)), (l = c / u)) : a > 0 && ((a = r ? (r / 2.5) * (u / 8) : 0), (c = s.abs(t) + a), (l = c / u)),
                                { destination: s.round(a), duration: l }
                            );
                        });
                    var a = t("transform");
                    return (
                        e.extend(e, { hasTransform: a !== !1, hasPerspective: t("perspective") in i, hasTouch: "ontouchstart" in r, hasPointer: !(!r.PointerEvent && !r.MSPointerEvent), hasTransition: t("transition") in i }),
                        (e.isBadAndroid = (function () {
                            var t = r.navigator.appVersion;
                            if (/Android/.test(t) && !/Chrome\/\d/.test(t)) {
                                var e = t.match(/Safari\/(\d+.\d)/);
                                return e && "object" == typeof e && e.length >= 2 ? parseFloat(e[1]) < 535.19 : !0;
                            }
                            return !1;
                        })()),
                        e.extend((e.style = {}), {
                            transform: a,
                            transitionTimingFunction: t("transitionTimingFunction"),
                            transitionDuration: t("transitionDuration"),
                            transitionDelay: t("transitionDelay"),
                            transformOrigin: t("transformOrigin"),
                        }),
                        (e.hasClass = function (t, e) {
                            var i = new RegExp("(^|\\s)" + e + "(\\s|$)");
                            return i.test(t.className);
                        }),
                        (e.addClass = function (t, i) {
                            if (!e.hasClass(t, i)) {
                                var n = t.className.split(" ");
                                n.push(i), (t.className = n.join(" "));
                            }
                        }),
                        (e.removeClass = function (t, i) {
                            if (e.hasClass(t, i)) {
                                var n = new RegExp("(^|\\s)" + i + "(\\s|$)", "g");
                                t.className = t.className.replace(n, " ");
                            }
                        }),
                        (e.offset = function (t) {
                            for (var e = -t.offsetLeft, i = -t.offsetTop; (t = t.offsetParent); ) (e -= t.offsetLeft), (i -= t.offsetTop);
                            return { left: e, top: i };
                        }),
                        (e.preventDefaultException = function (t, e) {
                            for (var i in e) if (e[i].test(t[i])) return !0;
                            return !1;
                        }),
                        e.extend((e.eventType = {}), { touchstart: 1, touchmove: 1, touchend: 1, mousedown: 2, mousemove: 2, mouseup: 2, pointerdown: 3, pointermove: 3, pointerup: 3, MSPointerDown: 3, MSPointerMove: 3, MSPointerUp: 3 }),
                        e.extend((e.ease = {}), {
                            quadratic: {
                                style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                fn: function (t) {
                                    return t * (2 - t);
                                },
                            },
                            circular: {
                                style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                                fn: function (t) {
                                    return s.sqrt(1 - --t * t);
                                },
                            },
                            back: {
                                style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                                fn: function (t) {
                                    var e = 4;
                                    return (t -= 1) * t * ((e + 1) * t + e) + 1;
                                },
                            },
                            bounce: {
                                style: "",
                                fn: function (t) {
                                    return (t /= 1) < 1 / 2.75
                                        ? 7.5625 * t * t
                                        : 2 / 2.75 > t
                                        ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                                        : 2.5 / 2.75 > t
                                        ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                                        : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
                                },
                            },
                            elastic: {
                                style: "",
                                fn: function (t) {
                                    var e = 0.22,
                                        i = 0.4;
                                    return 0 === t ? 0 : 1 == t ? 1 : i * s.pow(2, -10 * t) * s.sin((2 * (t - e / 4) * s.PI) / e) + 1;
                                },
                            },
                        }),
                        (e.tap = function (t, e) {
                            var i = o.createEvent("Event");
                            i.initEvent(e, !0, !0), (i.pageX = t.pageX), (i.pageY = t.pageY), t.target.dispatchEvent(i);
                        }),
                        (e.click = function (t) {
                            var e,
                                i = t.target;
                            /(SELECT|INPUT|TEXTAREA)/i.test(i.tagName) ||
                                ((e = o.createEvent("MouseEvents")),
                                e.initMouseEvent("click", !0, !0, t.view, 1, i.screenX, i.screenY, i.clientX, i.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, 0, null),
                                (e._constructed = !0),
                                i.dispatchEvent(e));
                        }),
                        e
                    );
                })();
            (a.prototype = {
                version: "5.2.0",
                _init: function () {
                    this._initEvents(),
                        (this.options.scrollbars || this.options.indicators) && this._initIndicators(),
                        this.options.mouseWheel && this._initWheel(),
                        this.options.snap && this._initSnap(),
                        this.options.keyBindings && this._initKeys();
                },
                destroy: function () {
                    this._initEvents(!0), clearTimeout(this.resizeTimeout), (this.resizeTimeout = null), this._execEvent("destroy");
                },
                _transitionEnd: function (t) {
                    t.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || ((this.isInTransition = !1), this._execEvent("scrollEnd")));
                },
                _start: function (t) {
                    if (1 != d.eventType[t.type]) {
                        var e;
                        if (((e = t.which ? t.button : t.button < 2 ? 0 : 4 == t.button ? 1 : 2), 0 !== e)) return;
                    }
                    if (this.enabled && (!this.initiated || d.eventType[t.type] === this.initiated)) {
                        !this.options.preventDefault || d.isBadAndroid || d.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault();
                        var i,
                            n = t.touches ? t.touches[0] : t;
                        (this.initiated = d.eventType[t.type]),
                            (this.moved = !1),
                            (this.distX = 0),
                            (this.distY = 0),
                            (this.directionX = 0),
                            (this.directionY = 0),
                            (this.directionLocked = 0),
                            (this.startTime = d.getTime()),
                            this.options.useTransition && this.isInTransition
                                ? (this._transitionTime(), (this.isInTransition = !1), (i = this.getComputedPosition()), this._translate(s.round(i.x), s.round(i.y)), this._execEvent("scrollEnd"))
                                : !this.options.useTransition && this.isAnimating && ((this.isAnimating = !1), this._execEvent("scrollEnd")),
                            (this.startX = this.x),
                            (this.startY = this.y),
                            (this.absStartX = this.x),
                            (this.absStartY = this.y),
                            (this.pointX = n.pageX),
                            (this.pointY = n.pageY),
                            this._execEvent("beforeScrollStart");
                    }
                },
                _move: function (t) {
                    if (this.enabled && d.eventType[t.type] === this.initiated) {
                        this.options.preventDefault && t.preventDefault();
                        var e,
                            i,
                            n,
                            r,
                            o = t.touches ? t.touches[0] : t,
                            a = o.pageX - this.pointX,
                            l = o.pageY - this.pointY,
                            c = d.getTime();
                        if (((this.pointX = o.pageX), (this.pointY = o.pageY), (this.distX += a), (this.distY += l), (n = s.abs(this.distX)), (r = s.abs(this.distY)), !(c - this.endTime > 300 && 10 > n && 10 > r))) {
                            if (
                                (this.directionLocked || this.options.freeScroll || (this.directionLocked = n > r + this.options.directionLockThreshold ? "h" : r >= n + this.options.directionLockThreshold ? "v" : "n"),
                                "h" == this.directionLocked)
                            ) {
                                if ("vertical" == this.options.eventPassthrough) t.preventDefault();
                                else if ("horizontal" == this.options.eventPassthrough) return void (this.initiated = !1);
                                l = 0;
                            } else if ("v" == this.directionLocked) {
                                if ("horizontal" == this.options.eventPassthrough) t.preventDefault();
                                else if ("vertical" == this.options.eventPassthrough) return void (this.initiated = !1);
                                a = 0;
                            }
                            (a = this.hasHorizontalScroll ? a : 0),
                                (l = this.hasVerticalScroll ? l : 0),
                                (e = this.x + a),
                                (i = this.y + l),
                                (e > 0 || e < this.maxScrollX) && (e = this.options.bounce ? this.x + a / 3 : e > 0 ? 0 : this.maxScrollX),
                                (i > 0 || i < this.maxScrollY) && (i = this.options.bounce ? this.y + l / 3 : i > 0 ? 0 : this.maxScrollY),
                                (this.directionX = a > 0 ? -1 : 0 > a ? 1 : 0),
                                (this.directionY = l > 0 ? -1 : 0 > l ? 1 : 0),
                                this.moved || this._execEvent("scrollStart"),
                                (this.moved = !0),
                                this._translate(e, i),
                                c - this.startTime > 300 && ((this.startTime = c), (this.startX = this.x), (this.startY = this.y));
                        }
                    }
                },
                _end: function (t) {
                    if (this.enabled && d.eventType[t.type] === this.initiated) {
                        this.options.preventDefault && !d.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault();
                        var e,
                            i,
                            n = (t.changedTouches ? t.changedTouches[0] : t, d.getTime() - this.startTime),
                            r = s.round(this.x),
                            o = s.round(this.y),
                            a = s.abs(r - this.startX),
                            l = s.abs(o - this.startY),
                            c = 0,
                            u = "";
                        if (((this.isInTransition = 0), (this.initiated = 0), (this.endTime = d.getTime()), !this.resetPosition(this.options.bounceTime))) {
                            if ((this.scrollTo(r, o), !this.moved)) return this.options.tap && d.tap(t, this.options.tap), this.options.click && d.click(t), void this._execEvent("scrollCancel");
                            if (this._events.flick && 200 > n && 100 > a && 100 > l) return void this._execEvent("flick");
                            if (
                                (this.options.momentum &&
                                    300 > n &&
                                    ((e = this.hasHorizontalScroll ? d.momentum(this.x, this.startX, n, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: r, duration: 0 }),
                                    (i = this.hasVerticalScroll ? d.momentum(this.y, this.startY, n, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: o, duration: 0 }),
                                    (r = e.destination),
                                    (o = i.destination),
                                    (c = s.max(e.duration, i.duration)),
                                    (this.isInTransition = 1)),
                                this.options.snap)
                            ) {
                                var h = this._nearestSnap(r, o);
                                (this.currentPage = h),
                                    (c = this.options.snapSpeed || s.max(s.max(s.min(s.abs(r - h.x), 1e3), s.min(s.abs(o - h.y), 1e3)), 300)),
                                    (r = h.x),
                                    (o = h.y),
                                    (this.directionX = 0),
                                    (this.directionY = 0),
                                    (u = this.options.bounceEasing);
                            }
                            return r != this.x || o != this.y ? ((r > 0 || r < this.maxScrollX || o > 0 || o < this.maxScrollY) && (u = d.ease.quadratic), void this.scrollTo(r, o, c, u)) : void this._execEvent("scrollEnd");
                        }
                    }
                },
                _resize: function () {
                    var t = this;
                    clearTimeout(this.resizeTimeout),
                        (this.resizeTimeout = setTimeout(function () {
                            t.refresh();
                        }, this.options.resizePolling));
                },
                resetPosition: function (t) {
                    var e = this.x,
                        i = this.y;
                    return (
                        (t = t || 0),
                        !this.hasHorizontalScroll || this.x > 0 ? (e = 0) : this.x < this.maxScrollX && (e = this.maxScrollX),
                        !this.hasVerticalScroll || this.y > 0 ? (i = 0) : this.y < this.maxScrollY && (i = this.maxScrollY),
                        e == this.x && i == this.y ? !1 : (this.scrollTo(e, i, t, this.options.bounceEasing), !0)
                    );
                },
                disable: function () {
                    this.enabled = !1;
                },
                enable: function () {
                    this.enabled = !0;
                },
                refresh: function () {
                    this.wrapper.offsetHeight;
                    (this.wrapperWidth = this.wrapper.clientWidth),
                        (this.wrapperHeight = this.wrapper.clientHeight),
                        (this.scrollerWidth = this.scroller.offsetWidth),
                        (this.scrollerHeight = this.scroller.offsetHeight),
                        (this.maxScrollX = this.wrapperWidth - this.scrollerWidth),
                        (this.maxScrollY = this.wrapperHeight - this.scrollerHeight),
                        (this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0),
                        (this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0),
                        this.hasHorizontalScroll || ((this.maxScrollX = 0), (this.scrollerWidth = this.wrapperWidth)),
                        this.hasVerticalScroll || ((this.maxScrollY = 0), (this.scrollerHeight = this.wrapperHeight)),
                        (this.endTime = 0),
                        (this.directionX = 0),
                        (this.directionY = 0),
                        (this.wrapperOffset = d.offset(this.wrapper)),
                        this._execEvent("refresh"),
                        this.resetPosition();
                },
                on: function (t, e) {
                    this._events[t] || (this._events[t] = []), this._events[t].push(e);
                },
                off: function (t, e) {
                    if (this._events[t]) {
                        var i = this._events[t].indexOf(e);
                        i > -1 && this._events[t].splice(i, 1);
                    }
                },
                _execEvent: function (t) {
                    if (this._events[t]) {
                        var e = 0,
                            i = this._events[t].length;
                        if (i) for (; i > e; e++) this._events[t][e].apply(this, [].slice.call(arguments, 1));
                    }
                },
                scrollBy: function (t, e, i, n) {
                    (t = this.x + t), (e = this.y + e), (i = i || 0), this.scrollTo(t, e, i, n);
                },
                scrollTo: function (t, e, i, n) {
                    (n = n || d.ease.circular), (this.isInTransition = this.options.useTransition && i > 0);
                    var r = this.options.useTransition && n.style;
                    !i || r ? (r && (this._transitionTimingFunction(n.style), this._transitionTime(i)), this._translate(t, e)) : this._animate(t, e, i, n.fn);
                },
                scrollToElement: function (t, e, i, n, r) {
                    if ((t = t.nodeType ? t : this.scroller.querySelector(t))) {
                        var o = d.offset(t);
                        (o.left -= this.wrapperOffset.left),
                            (o.top -= this.wrapperOffset.top),
                            i === !0 && (i = s.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)),
                            n === !0 && (n = s.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)),
                            (o.left -= i || 0),
                            (o.top -= n || 0),
                            (o.left = o.left > 0 ? 0 : o.left < this.maxScrollX ? this.maxScrollX : o.left),
                            (o.top = o.top > 0 ? 0 : o.top < this.maxScrollY ? this.maxScrollY : o.top),
                            (e = void 0 === e || null === e || "auto" === e ? s.max(s.abs(this.x - o.left), s.abs(this.y - o.top)) : e),
                            this.scrollTo(o.left, o.top, e, r);
                    }
                },
                _transitionTime: function (t) {
                    t = t || 0;
                    var e = d.style.transitionDuration;
                    if (((this.scrollerStyle[e] = t + "ms"), !t && d.isBadAndroid)) {
                        this.scrollerStyle[e] = "0.0001ms";
                        var i = this;
                        u(function () {
                            "0.0001ms" === i.scrollerStyle[e] && (i.scrollerStyle[e] = "0s");
                        });
                    }
                    if (this.indicators) for (var n = this.indicators.length; n--; ) this.indicators[n].transitionTime(t);
                },
                _transitionTimingFunction: function (t) {
                    if (((this.scrollerStyle[d.style.transitionTimingFunction] = t), this.indicators)) for (var e = this.indicators.length; e--; ) this.indicators[e].transitionTimingFunction(t);
                },
                _translate: function (t, e) {
                    if (
                        (this.options.useTransform
                            ? (this.scrollerStyle[d.style.transform] = "translate(" + t + "px," + e + "px)" + this.translateZ)
                            : ((t = s.round(t)), (e = s.round(e)), (this.scrollerStyle.left = t + "px"), (this.scrollerStyle.top = e + "px")),
                        (this.x = t),
                        (this.y = e),
                        this.indicators)
                    )
                        for (var i = this.indicators.length; i--; ) this.indicators[i].updatePosition();
                },
                _initEvents: function (t) {
                    var e = t ? d.removeEvent : d.addEvent,
                        i = this.options.bindToWrapper ? this.wrapper : r;
                    e(r, "orientationchange", this),
                        e(r, "resize", this),
                        this.options.click && e(this.wrapper, "click", this, !0),
                        this.options.disableMouse || (e(this.wrapper, "mousedown", this), e(i, "mousemove", this), e(i, "mousecancel", this), e(i, "mouseup", this)),
                        d.hasPointer &&
                            !this.options.disablePointer &&
                            (e(this.wrapper, d.prefixPointerEvent("pointerdown"), this), e(i, d.prefixPointerEvent("pointermove"), this), e(i, d.prefixPointerEvent("pointercancel"), this), e(i, d.prefixPointerEvent("pointerup"), this)),
                        d.hasTouch && !this.options.disableTouch && (e(this.wrapper, "touchstart", this), e(i, "touchmove", this), e(i, "touchcancel", this), e(i, "touchend", this)),
                        e(this.scroller, "transitionend", this),
                        e(this.scroller, "webkitTransitionEnd", this),
                        e(this.scroller, "oTransitionEnd", this),
                        e(this.scroller, "MSTransitionEnd", this);
                },
                getComputedPosition: function () {
                    var t,
                        e,
                        i = r.getComputedStyle(this.scroller, null);
                    return (
                        this.options.useTransform ? ((i = i[d.style.transform].split(")")[0].split(", ")), (t = +(i[12] || i[4])), (e = +(i[13] || i[5]))) : ((t = +i.left.replace(/[^-\d.]/g, "")), (e = +i.top.replace(/[^-\d.]/g, ""))),
                        { x: t, y: e }
                    );
                },
                _initIndicators: function () {
                    function t(t) {
                        if (o.indicators) for (var e = o.indicators.length; e--; ) t.call(o.indicators[e]);
                    }
                    var e,
                        i = this.options.interactiveScrollbars,
                        n = "string" != typeof this.options.scrollbars,
                        r = [],
                        o = this;
                    (this.indicators = []),
                        this.options.scrollbars &&
                            (this.options.scrollY &&
                                ((e = {
                                    el: l("v", i, this.options.scrollbars),
                                    interactive: i,
                                    defaultScrollbars: !0,
                                    customStyle: n,
                                    resize: this.options.resizeScrollbars,
                                    shrink: this.options.shrinkScrollbars,
                                    fade: this.options.fadeScrollbars,
                                    listenX: !1,
                                }),
                                this.wrapper.appendChild(e.el),
                                r.push(e)),
                            this.options.scrollX &&
                                ((e = {
                                    el: l("h", i, this.options.scrollbars),
                                    interactive: i,
                                    defaultScrollbars: !0,
                                    customStyle: n,
                                    resize: this.options.resizeScrollbars,
                                    shrink: this.options.shrinkScrollbars,
                                    fade: this.options.fadeScrollbars,
                                    listenY: !1,
                                }),
                                this.wrapper.appendChild(e.el),
                                r.push(e))),
                        this.options.indicators && (r = r.concat(this.options.indicators));
                    for (var s = r.length; s--; ) this.indicators.push(new c(this, r[s]));
                    this.options.fadeScrollbars &&
                        (this.on("scrollEnd", function () {
                            t(function () {
                                this.fade();
                            });
                        }),
                        this.on("scrollCancel", function () {
                            t(function () {
                                this.fade();
                            });
                        }),
                        this.on("scrollStart", function () {
                            t(function () {
                                this.fade(1);
                            });
                        }),
                        this.on("beforeScrollStart", function () {
                            t(function () {
                                this.fade(1, !0);
                            });
                        })),
                        this.on("refresh", function () {
                            t(function () {
                                this.refresh();
                            });
                        }),
                        this.on("destroy", function () {
                            t(function () {
                                this.destroy();
                            }),
                                delete this.indicators;
                        });
                },
                _initWheel: function () {
                    d.addEvent(this.wrapper, "wheel", this),
                        d.addEvent(this.wrapper, "mousewheel", this),
                        d.addEvent(this.wrapper, "DOMMouseScroll", this),
                        this.on("destroy", function () {
                            clearTimeout(this.wheelTimeout), (this.wheelTimeout = null), d.removeEvent(this.wrapper, "wheel", this), d.removeEvent(this.wrapper, "mousewheel", this), d.removeEvent(this.wrapper, "DOMMouseScroll", this);
                        });
                },
                _wheel: function (t) {
                    if (this.enabled) {
                        t.preventDefault();
                        var e,
                            i,
                            n,
                            r,
                            o = this;
                        if (
                            (void 0 === this.wheelTimeout && o._execEvent("scrollStart"),
                            clearTimeout(this.wheelTimeout),
                            (this.wheelTimeout = setTimeout(function () {
                                o.options.snap || o._execEvent("scrollEnd"), (o.wheelTimeout = void 0);
                            }, 400)),
                            "deltaX" in t)
                        )
                            1 === t.deltaMode ? ((e = -t.deltaX * this.options.mouseWheelSpeed), (i = -t.deltaY * this.options.mouseWheelSpeed)) : ((e = -t.deltaX), (i = -t.deltaY));
                        else if ("wheelDeltaX" in t) (e = (t.wheelDeltaX / 120) * this.options.mouseWheelSpeed), (i = (t.wheelDeltaY / 120) * this.options.mouseWheelSpeed);
                        else if ("wheelDelta" in t) e = i = (t.wheelDelta / 120) * this.options.mouseWheelSpeed;
                        else {
                            if (!("detail" in t)) return;
                            e = i = (-t.detail / 3) * this.options.mouseWheelSpeed;
                        }
                        if (((e *= this.options.invertWheelDirection), (i *= this.options.invertWheelDirection), this.hasVerticalScroll || ((e = i), (i = 0)), this.options.snap))
                            return (n = this.currentPage.pageX), (r = this.currentPage.pageY), e > 0 ? n-- : 0 > e && n++, i > 0 ? r-- : 0 > i && r++, void this.goToPage(n, r);
                        (n = this.x + s.round(this.hasHorizontalScroll ? e : 0)),
                            (r = this.y + s.round(this.hasVerticalScroll ? i : 0)),
                            (this.directionX = e > 0 ? -1 : 0 > e ? 1 : 0),
                            (this.directionY = i > 0 ? -1 : 0 > i ? 1 : 0),
                            n > 0 ? (n = 0) : n < this.maxScrollX && (n = this.maxScrollX),
                            r > 0 ? (r = 0) : r < this.maxScrollY && (r = this.maxScrollY),
                            this.scrollTo(n, r, 0);
                    }
                },
                _initSnap: function () {
                    (this.currentPage = {}),
                        "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)),
                        this.on("refresh", function () {
                            var t,
                                e,
                                i,
                                n,
                                r,
                                o,
                                a = 0,
                                l = 0,
                                c = 0,
                                u = this.options.snapStepX || this.wrapperWidth,
                                d = this.options.snapStepY || this.wrapperHeight;
                            if (((this.pages = []), this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight)) {
                                if (this.options.snap === !0)
                                    for (i = s.round(u / 2), n = s.round(d / 2); c > -this.scrollerWidth; ) {
                                        for (this.pages[a] = [], t = 0, r = 0; r > -this.scrollerHeight; )
                                            (this.pages[a][t] = { x: s.max(c, this.maxScrollX), y: s.max(r, this.maxScrollY), width: u, height: d, cx: c - i, cy: r - n }), (r -= d), t++;
                                        (c -= u), a++;
                                    }
                                else
                                    for (o = this.options.snap, t = o.length, e = -1; t > a; a++)
                                        (0 === a || o[a].offsetLeft <= o[a - 1].offsetLeft) && ((l = 0), e++),
                                            this.pages[l] || (this.pages[l] = []),
                                            (c = s.max(-o[a].offsetLeft, this.maxScrollX)),
                                            (r = s.max(-o[a].offsetTop, this.maxScrollY)),
                                            (i = c - s.round(o[a].offsetWidth / 2)),
                                            (n = r - s.round(o[a].offsetHeight / 2)),
                                            (this.pages[l][e] = { x: c, y: r, width: o[a].offsetWidth, height: o[a].offsetHeight, cx: i, cy: n }),
                                            c > this.maxScrollX && l++;
                                this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0),
                                    this.options.snapThreshold % 1 === 0
                                        ? ((this.snapThresholdX = this.options.snapThreshold), (this.snapThresholdY = this.options.snapThreshold))
                                        : ((this.snapThresholdX = s.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold)),
                                          (this.snapThresholdY = s.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold)));
                            }
                        }),
                        this.on("flick", function () {
                            var t = this.options.snapSpeed || s.max(s.max(s.min(s.abs(this.x - this.startX), 1e3), s.min(s.abs(this.y - this.startY), 1e3)), 300);
                            this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, t);
                        });
                },
                _nearestSnap: function (t, e) {
                    if (!this.pages.length) return { x: 0, y: 0, pageX: 0, pageY: 0 };
                    var i = 0,
                        n = this.pages.length,
                        r = 0;
                    if (s.abs(t - this.absStartX) < this.snapThresholdX && s.abs(e - this.absStartY) < this.snapThresholdY) return this.currentPage;
                    for (t > 0 ? (t = 0) : t < this.maxScrollX && (t = this.maxScrollX), e > 0 ? (e = 0) : e < this.maxScrollY && (e = this.maxScrollY); n > i; i++)
                        if (t >= this.pages[i][0].cx) {
                            t = this.pages[i][0].x;
                            break;
                        }
                    for (n = this.pages[i].length; n > r; r++)
                        if (e >= this.pages[0][r].cy) {
                            e = this.pages[0][r].y;
                            break;
                        }
                    return (
                        i == this.currentPage.pageX && ((i += this.directionX), 0 > i ? (i = 0) : i >= this.pages.length && (i = this.pages.length - 1), (t = this.pages[i][0].x)),
                        r == this.currentPage.pageY && ((r += this.directionY), 0 > r ? (r = 0) : r >= this.pages[0].length && (r = this.pages[0].length - 1), (e = this.pages[0][r].y)),
                        { x: t, y: e, pageX: i, pageY: r }
                    );
                },
                goToPage: function (t, e, i, n) {
                    (n = n || this.options.bounceEasing), t >= this.pages.length ? (t = this.pages.length - 1) : 0 > t && (t = 0), e >= this.pages[t].length ? (e = this.pages[t].length - 1) : 0 > e && (e = 0);
                    var r = this.pages[t][e].x,
                        o = this.pages[t][e].y;
                    (i = void 0 === i ? this.options.snapSpeed || s.max(s.max(s.min(s.abs(r - this.x), 1e3), s.min(s.abs(o - this.y), 1e3)), 300) : i), (this.currentPage = { x: r, y: o, pageX: t, pageY: e }), this.scrollTo(r, o, i, n);
                },
                next: function (t, e) {
                    var i = this.currentPage.pageX,
                        n = this.currentPage.pageY;
                    i++, i >= this.pages.length && this.hasVerticalScroll && ((i = 0), n++), this.goToPage(i, n, t, e);
                },
                prev: function (t, e) {
                    var i = this.currentPage.pageX,
                        n = this.currentPage.pageY;
                    i--, 0 > i && this.hasVerticalScroll && ((i = 0), n--), this.goToPage(i, n, t, e);
                },
                _initKeys: function (t) {
                    var e,
                        i = { pageUp: 33, pageDown: 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40 };
                    if ("object" == typeof this.options.keyBindings)
                        for (e in this.options.keyBindings) "string" == typeof this.options.keyBindings[e] && (this.options.keyBindings[e] = this.options.keyBindings[e].toUpperCase().charCodeAt(0));
                    else this.options.keyBindings = {};
                    for (e in i) this.options.keyBindings[e] = this.options.keyBindings[e] || i[e];
                    d.addEvent(r, "keydown", this),
                        this.on("destroy", function () {
                            d.removeEvent(r, "keydown", this);
                        });
                },
                _key: function (t) {
                    if (this.enabled) {
                        var e,
                            i = this.options.snap,
                            n = i ? this.currentPage.pageX : this.x,
                            r = i ? this.currentPage.pageY : this.y,
                            o = d.getTime(),
                            a = this.keyTime || 0,
                            l = 0.25;
                        switch (
                            (this.options.useTransition && this.isInTransition && ((e = this.getComputedPosition()), this._translate(s.round(e.x), s.round(e.y)), (this.isInTransition = !1)),
                            (this.keyAcceleration = 200 > o - a ? s.min(this.keyAcceleration + l, 50) : 0),
                            t.keyCode)
                        ) {
                            case this.options.keyBindings.pageUp:
                                this.hasHorizontalScroll && !this.hasVerticalScroll ? (n += i ? 1 : this.wrapperWidth) : (r += i ? 1 : this.wrapperHeight);
                                break;
                            case this.options.keyBindings.pageDown:
                                this.hasHorizontalScroll && !this.hasVerticalScroll ? (n -= i ? 1 : this.wrapperWidth) : (r -= i ? 1 : this.wrapperHeight);
                                break;
                            case this.options.keyBindings.end:
                                (n = i ? this.pages.length - 1 : this.maxScrollX), (r = i ? this.pages[0].length - 1 : this.maxScrollY);
                                break;
                            case this.options.keyBindings.home:
                                (n = 0), (r = 0);
                                break;
                            case this.options.keyBindings.left:
                                n += i ? -1 : (5 + this.keyAcceleration) >> 0;
                                break;
                            case this.options.keyBindings.up:
                                r += i ? 1 : (5 + this.keyAcceleration) >> 0;
                                break;
                            case this.options.keyBindings.right:
                                n -= i ? -1 : (5 + this.keyAcceleration) >> 0;
                                break;
                            case this.options.keyBindings.down:
                                r -= i ? 1 : (5 + this.keyAcceleration) >> 0;
                                break;
                            default:
                                return;
                        }
                        if (i) return void this.goToPage(n, r);
                        n > 0 ? ((n = 0), (this.keyAcceleration = 0)) : n < this.maxScrollX && ((n = this.maxScrollX), (this.keyAcceleration = 0)),
                            r > 0 ? ((r = 0), (this.keyAcceleration = 0)) : r < this.maxScrollY && ((r = this.maxScrollY), (this.keyAcceleration = 0)),
                            this.scrollTo(n, r, 0),
                            (this.keyTime = o);
                    }
                },
                _animate: function (t, e, i, n) {
                    function r() {
                        var h,
                            p,
                            f,
                            v = d.getTime();
                        return v >= c
                            ? ((o.isAnimating = !1), o._translate(t, e), void (o.resetPosition(o.options.bounceTime) || o._execEvent("scrollEnd")))
                            : ((v = (v - l) / i), (f = n(v)), (h = (t - s) * f + s), (p = (e - a) * f + a), o._translate(h, p), void (o.isAnimating && u(r)));
                    }
                    var o = this,
                        s = this.x,
                        a = this.y,
                        l = d.getTime(),
                        c = l + i;
                    (this.isAnimating = !0), r();
                },
                handleEvent: function (t) {
                    switch (t.type) {
                        case "touchstart":
                        case "pointerdown":
                        case "MSPointerDown":
                        case "mousedown":
                            this._start(t);
                            break;
                        case "touchmove":
                        case "pointermove":
                        case "MSPointerMove":
                        case "mousemove":
                            this._move(t);
                            break;
                        case "touchend":
                        case "pointerup":
                        case "MSPointerUp":
                        case "mouseup":
                        case "touchcancel":
                        case "pointercancel":
                        case "MSPointerCancel":
                        case "mousecancel":
                            this._end(t);
                            break;
                        case "orientationchange":
                        case "resize":
                            this._resize();
                            break;
                        case "transitionend":
                        case "webkitTransitionEnd":
                        case "oTransitionEnd":
                        case "MSTransitionEnd":
                            this._transitionEnd(t);
                            break;
                        case "wheel":
                        case "DOMMouseScroll":
                        case "mousewheel":
                            this._wheel(t);
                            break;
                        case "keydown":
                            this._key(t);
                            break;
                        case "click":
                            this.enabled && !t._constructed && (t.preventDefault(), t.stopPropagation());
                    }
                },
            }),
                (c.prototype = {
                    handleEvent: function (t) {
                        switch (t.type) {
                            case "touchstart":
                            case "pointerdown":
                            case "MSPointerDown":
                            case "mousedown":
                                this._start(t);
                                break;
                            case "touchmove":
                            case "pointermove":
                            case "MSPointerMove":
                            case "mousemove":
                                this._move(t);
                                break;
                            case "touchend":
                            case "pointerup":
                            case "MSPointerUp":
                            case "mouseup":
                            case "touchcancel":
                            case "pointercancel":
                            case "MSPointerCancel":
                            case "mousecancel":
                                this._end(t);
                        }
                    },
                    destroy: function () {
                        this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout), (this.fadeTimeout = null)),
                            this.options.interactive &&
                                (d.removeEvent(this.indicator, "touchstart", this),
                                d.removeEvent(this.indicator, d.prefixPointerEvent("pointerdown"), this),
                                d.removeEvent(this.indicator, "mousedown", this),
                                d.removeEvent(r, "touchmove", this),
                                d.removeEvent(r, d.prefixPointerEvent("pointermove"), this),
                                d.removeEvent(r, "mousemove", this),
                                d.removeEvent(r, "touchend", this),
                                d.removeEvent(r, d.prefixPointerEvent("pointerup"), this),
                                d.removeEvent(r, "mouseup", this)),
                            this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper);
                    },
                    _start: function (t) {
                        var e = t.touches ? t.touches[0] : t;
                        t.preventDefault(),
                            t.stopPropagation(),
                            this.transitionTime(),
                            (this.initiated = !0),
                            (this.moved = !1),
                            (this.lastPointX = e.pageX),
                            (this.lastPointY = e.pageY),
                            (this.startTime = d.getTime()),
                            this.options.disableTouch || d.addEvent(r, "touchmove", this),
                            this.options.disablePointer || d.addEvent(r, d.prefixPointerEvent("pointermove"), this),
                            this.options.disableMouse || d.addEvent(r, "mousemove", this),
                            this.scroller._execEvent("beforeScrollStart");
                    },
                    _move: function (t) {
                        {
                            var e,
                                i,
                                n,
                                r,
                                o = t.touches ? t.touches[0] : t;
                            d.getTime();
                        }
                        this.moved || this.scroller._execEvent("scrollStart"),
                            (this.moved = !0),
                            (e = o.pageX - this.lastPointX),
                            (this.lastPointX = o.pageX),
                            (i = o.pageY - this.lastPointY),
                            (this.lastPointY = o.pageY),
                            (n = this.x + e),
                            (r = this.y + i),
                            this._pos(n, r),
                            t.preventDefault(),
                            t.stopPropagation();
                    },
                    _end: function (t) {
                        if (this.initiated) {
                            if (
                                ((this.initiated = !1),
                                t.preventDefault(),
                                t.stopPropagation(),
                                d.removeEvent(r, "touchmove", this),
                                d.removeEvent(r, d.prefixPointerEvent("pointermove"), this),
                                d.removeEvent(r, "mousemove", this),
                                this.scroller.options.snap)
                            ) {
                                var e = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                                    i = this.options.snapSpeed || s.max(s.max(s.min(s.abs(this.scroller.x - e.x), 1e3), s.min(s.abs(this.scroller.y - e.y), 1e3)), 300);
                                (this.scroller.x != e.x || this.scroller.y != e.y) &&
                                    ((this.scroller.directionX = 0), (this.scroller.directionY = 0), (this.scroller.currentPage = e), this.scroller.scrollTo(e.x, e.y, i, this.scroller.options.bounceEasing));
                            }
                            this.moved && this.scroller._execEvent("scrollEnd");
                        }
                    },
                    transitionTime: function (t) {
                        t = t || 0;
                        var e = d.style.transitionDuration;
                        if (((this.indicatorStyle[e] = t + "ms"), !t && d.isBadAndroid)) {
                            this.indicatorStyle[e] = "0.0001ms";
                            var i = this;
                            u(function () {
                                "0.0001ms" === i.indicatorStyle[e] && (i.indicatorStyle[e] = "0s");
                            });
                        }
                    },
                    transitionTimingFunction: function (t) {
                        this.indicatorStyle[d.style.transitionTimingFunction] = t;
                    },
                    refresh: function () {
                        this.transitionTime(),
                            (this.indicatorStyle.display =
                                this.options.listenX && !this.options.listenY
                                    ? this.scroller.hasHorizontalScroll
                                        ? "block"
                                        : "none"
                                    : this.options.listenY && !this.options.listenX
                                    ? this.scroller.hasVerticalScroll
                                        ? "block"
                                        : "none"
                                    : this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll
                                    ? "block"
                                    : "none"),
                            this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll
                                ? (d.addClass(this.wrapper, "iScrollBothScrollbars"),
                                  d.removeClass(this.wrapper, "iScrollLoneScrollbar"),
                                  this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? (this.wrapper.style.right = "8px") : (this.wrapper.style.bottom = "8px")))
                                : (d.removeClass(this.wrapper, "iScrollBothScrollbars"),
                                  d.addClass(this.wrapper, "iScrollLoneScrollbar"),
                                  this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? (this.wrapper.style.right = "2px") : (this.wrapper.style.bottom = "2px")));
                        this.wrapper.offsetHeight;
                        this.options.listenX &&
                            ((this.wrapperWidth = this.wrapper.clientWidth),
                            this.options.resize
                                ? ((this.indicatorWidth = s.max(s.round((this.wrapperWidth * this.wrapperWidth) / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8)), (this.indicatorStyle.width = this.indicatorWidth + "px"))
                                : (this.indicatorWidth = this.indicator.clientWidth),
                            (this.maxPosX = this.wrapperWidth - this.indicatorWidth),
                            "clip" == this.options.shrink ? ((this.minBoundaryX = -this.indicatorWidth + 8), (this.maxBoundaryX = this.wrapperWidth - 8)) : ((this.minBoundaryX = 0), (this.maxBoundaryX = this.maxPosX)),
                            (this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX))),
                            this.options.listenY &&
                                ((this.wrapperHeight = this.wrapper.clientHeight),
                                this.options.resize
                                    ? ((this.indicatorHeight = s.max(s.round((this.wrapperHeight * this.wrapperHeight) / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8)),
                                      (this.indicatorStyle.height = this.indicatorHeight + "px"))
                                    : (this.indicatorHeight = this.indicator.clientHeight),
                                (this.maxPosY = this.wrapperHeight - this.indicatorHeight),
                                "clip" == this.options.shrink ? ((this.minBoundaryY = -this.indicatorHeight + 8), (this.maxBoundaryY = this.wrapperHeight - 8)) : ((this.minBoundaryY = 0), (this.maxBoundaryY = this.maxPosY)),
                                (this.maxPosY = this.wrapperHeight - this.indicatorHeight),
                                (this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY))),
                            this.updatePosition();
                    },
                    updatePosition: function () {
                        var t = (this.options.listenX && s.round(this.sizeRatioX * this.scroller.x)) || 0,
                            e = (this.options.listenY && s.round(this.sizeRatioY * this.scroller.y)) || 0;
                        this.options.ignoreBoundaries ||
                            (t < this.minBoundaryX
                                ? ("scale" == this.options.shrink && ((this.width = s.max(this.indicatorWidth + t, 8)), (this.indicatorStyle.width = this.width + "px")), (t = this.minBoundaryX))
                                : t > this.maxBoundaryX
                                ? "scale" == this.options.shrink
                                    ? ((this.width = s.max(this.indicatorWidth - (t - this.maxPosX), 8)), (this.indicatorStyle.width = this.width + "px"), (t = this.maxPosX + this.indicatorWidth - this.width))
                                    : (t = this.maxBoundaryX)
                                : "scale" == this.options.shrink && this.width != this.indicatorWidth && ((this.width = this.indicatorWidth), (this.indicatorStyle.width = this.width + "px")),
                            e < this.minBoundaryY
                                ? ("scale" == this.options.shrink && ((this.height = s.max(this.indicatorHeight + 3 * e, 8)), (this.indicatorStyle.height = this.height + "px")), (e = this.minBoundaryY))
                                : e > this.maxBoundaryY
                                ? "scale" == this.options.shrink
                                    ? ((this.height = s.max(this.indicatorHeight - 3 * (e - this.maxPosY), 8)), (this.indicatorStyle.height = this.height + "px"), (e = this.maxPosY + this.indicatorHeight - this.height))
                                    : (e = this.maxBoundaryY)
                                : "scale" == this.options.shrink && this.height != this.indicatorHeight && ((this.height = this.indicatorHeight), (this.indicatorStyle.height = this.height + "px"))),
                            (this.x = t),
                            (this.y = e),
                            this.scroller.options.useTransform
                                ? (this.indicatorStyle[d.style.transform] = "translate(" + t + "px," + e + "px)" + this.scroller.translateZ)
                                : ((this.indicatorStyle.left = t + "px"), (this.indicatorStyle.top = e + "px"));
                    },
                    _pos: function (t, e) {
                        0 > t ? (t = 0) : t > this.maxPosX && (t = this.maxPosX),
                            0 > e ? (e = 0) : e > this.maxPosY && (e = this.maxPosY),
                            (t = this.options.listenX ? s.round(t / this.sizeRatioX) : this.scroller.x),
                            (e = this.options.listenY ? s.round(e / this.sizeRatioY) : this.scroller.y),
                            this.scroller.scrollTo(t, e);
                    },
                    fade: function (t, e) {
                        if (!e || this.visible) {
                            clearTimeout(this.fadeTimeout), (this.fadeTimeout = null);
                            var i = t ? 250 : 500,
                                n = t ? 0 : 300;
                            (t = t ? "1" : "0"),
                                (this.wrapperStyle[d.style.transitionDuration] = i + "ms"),
                                (this.fadeTimeout = setTimeout(
                                    function (t) {
                                        (this.wrapperStyle.opacity = t), (this.visible = +t);
                                    }.bind(this, t),
                                    n
                                ));
                        }
                    },
                }),
                (a.utils = d),
                "undefined" != typeof t && t.exports
                    ? (t.exports = a)
                    : ((n = function () {
                          return a;
                      }.call(e, i, e, t)),
                      !(void 0 !== n && (t.exports = n)));
        })(window, document, Math);
    },
    486: function (t, e, i) {
        var n = i(3);
        !(function (t, e) {
            var i = 0,
                n = Array.prototype.slice,
                r = t.cleanData;
            (t.cleanData = function (e) {
                for (var i, n = 0; null != (i = e[n]); n++)
                    try {
                        t(i).triggerHandler("remove");
                    } catch (o) {}
                r(e);
            }),
                (t.widget = function (e, i, n) {
                    var r,
                        o,
                        s,
                        a,
                        l = {},
                        c = e.split(".")[0];
                    (e = e.split(".")[1]),
                        (r = c + "-" + e),
                        n || ((n = i), (i = t.Widget)),
                        (t.expr[":"][r.toLowerCase()] = function (e) {
                            return !!t.data(e, r);
                        }),
                        (t[c] = t[c] || {}),
                        (o = t[c][e]),
                        (s = t[c][e] = function (t, e) {
                            return this._createWidget ? void (arguments.length && this._createWidget(t, e)) : new s(t, e);
                        }),
                        t.extend(s, o, { version: n.version, _proto: t.extend({}, n), _childConstructors: [] }),
                        (a = new i()),
                        (a.options = t.widget.extend({}, a.options)),
                        t.each(n, function (e, n) {
                            return t.isFunction(n)
                                ? void (l[e] = (function () {
                                      var t = function () {
                                              return i.prototype[e].apply(this, arguments);
                                          },
                                          r = function (t) {
                                              return i.prototype[e].apply(this, t);
                                          };
                                      return function () {
                                          var e,
                                              i = this._super,
                                              o = this._superApply;
                                          return (this._super = t), (this._superApply = r), (e = n.apply(this, arguments)), (this._super = i), (this._superApply = o), e;
                                      };
                                  })())
                                : void (l[e] = n);
                        }),
                        (s.prototype = t.widget.extend(a, { widgetEventPrefix: o ? a.widgetEventPrefix || e : e }, l, { constructor: s, namespace: c, widgetName: e, widgetFullName: r })),
                        o
                            ? (t.each(o._childConstructors, function (e, i) {
                                  var n = i.prototype;
                                  t.widget(n.namespace + "." + n.widgetName, s, i._proto);
                              }),
                              delete o._childConstructors)
                            : i._childConstructors.push(s),
                        t.widget.bridge(e, s);
                }),
                (t.widget.extend = function (i) {
                    for (var r, o, s = n.call(arguments, 1), a = 0, l = s.length; l > a; a++)
                        for (r in s[a]) (o = s[a][r]), s[a].hasOwnProperty(r) && o !== e && (i[r] = t.isPlainObject(o) ? (t.isPlainObject(i[r]) ? t.widget.extend({}, i[r], o) : t.widget.extend({}, o)) : o);
                    return i;
                }),
                (t.widget.bridge = function (i, r) {
                    var o = r.prototype.widgetFullName || i;
                    t.fn[i] = function (s) {
                        var a = "string" == typeof s,
                            l = n.call(arguments, 1),
                            c = this;
                        return (
                            (s = !a && l.length ? t.widget.extend.apply(null, [s].concat(l)) : s),
                            this.each(
                                a
                                    ? function () {
                                          var n,
                                              r = t.data(this, o);
                                          return r
                                              ? t.isFunction(r[s]) && "_" !== s.charAt(0)
                                                  ? ((n = r[s].apply(r, l)), n !== r && n !== e ? ((c = n && n.jquery ? c.pushStack(n.get()) : n), !1) : void 0)
                                                  : t.error("no such method '" + s + "' for " + i + " widget instance")
                                              : t.error("cannot call methods on " + i + " prior to initialization; attempted to call method '" + s + "'");
                                      }
                                    : function () {
                                          var e = t.data(this, o);
                                          e ? e.option(s || {})._init() : t.data(this, o, new r(s, this));
                                      }
                            ),
                            c
                        );
                    };
                }),
                (t.Widget = function () {}),
                (t.Widget._childConstructors = []),
                (t.Widget.prototype = {
                    widgetName: "widget",
                    widgetEventPrefix: "",
                    defaultElement: "<div>",
                    options: { disabled: !1, create: null },
                    _createWidget: function (e, n) {
                        (n = t(n || this.defaultElement || this)[0]),
                            (this.element = t(n)),
                            (this.uuid = i++),
                            (this.eventNamespace = "." + this.widgetName + this.uuid),
                            (this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e)),
                            (this.bindings = t()),
                            (this.hoverable = t()),
                            (this.focusable = t()),
                            n !== this &&
                                (t.data(n, this.widgetFullName, this),
                                this._on(!0, this.element, {
                                    remove: function (t) {
                                        t.target === n && this.destroy();
                                    },
                                }),
                                (this.document = t(n.style ? n.ownerDocument : n.document || n)),
                                (this.window = t(this.document[0].defaultView || this.document[0].parentWindow))),
                            this._create(),
                            this._trigger("create", null, this._getCreateEventData()),
                            this._init();
                    },
                    _getCreateOptions: t.noop,
                    _getCreateEventData: t.noop,
                    _create: t.noop,
                    _init: t.noop,
                    destroy: function () {
                        this._destroy(),
                            this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),
                            this.widget()
                                .unbind(this.eventNamespace)
                                .removeAttr("aria-disabled")
                                .removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
                            this.bindings.unbind(this.eventNamespace),
                            this.hoverable.removeClass("ui-state-hover"),
                            this.focusable.removeClass("ui-state-focus");
                    },
                    _destroy: t.noop,
                    widget: function () {
                        return this.element;
                    },
                    option: function (i, n) {
                        var r,
                            o,
                            s,
                            a = i;
                        if (0 === arguments.length) return t.widget.extend({}, this.options);
                        if ("string" == typeof i)
                            if (((a = {}), (r = i.split(".")), (i = r.shift()), r.length)) {
                                for (o = a[i] = t.widget.extend({}, this.options[i]), s = 0; s < r.length - 1; s++) (o[r[s]] = o[r[s]] || {}), (o = o[r[s]]);
                                if (((i = r.pop()), 1 === arguments.length)) return o[i] === e ? null : o[i];
                                o[i] = n;
                            } else {
                                if (1 === arguments.length) return this.options[i] === e ? null : this.options[i];
                                a[i] = n;
                            }
                        return this._setOptions(a), this;
                    },
                    _setOptions: function (t) {
                        var e;
                        for (e in t) this._setOption(e, t[e]);
                        return this;
                    },
                    _setOption: function (t, e) {
                        return (
                            (this.options[t] = e),
                            "disabled" === t &&
                                (this.widget()
                                    .toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e)
                                    .attr("aria-disabled", e),
                                this.hoverable.removeClass("ui-state-hover"),
                                this.focusable.removeClass("ui-state-focus")),
                            this
                        );
                    },
                    enable: function () {
                        return this._setOption("disabled", !1);
                    },
                    disable: function () {
                        return this._setOption("disabled", !0);
                    },
                    _on: function (e, i, n) {
                        var r,
                            o = this;
                        "boolean" != typeof e && ((n = i), (i = e), (e = !1)),
                            n ? ((i = r = t(i)), (this.bindings = this.bindings.add(i))) : ((n = i), (i = this.element), (r = this.widget())),
                            t.each(n, function (n, s) {
                                function a() {
                                    return e || (o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled")) ? ("string" == typeof s ? o[s] : s).apply(o, arguments) : void 0;
                                }
                                "string" != typeof s && (a.guid = s.guid = s.guid || a.guid || t.guid++);
                                var l = n.match(/^(\w+)\s*(.*)$/),
                                    c = l[1] + o.eventNamespace,
                                    u = l[2];
                                u ? r.delegate(u, c, a) : i.bind(c, a);
                            });
                    },
                    _off: function (t, e) {
                        (e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace), t.unbind(e).undelegate(e);
                    },
                    _delay: function (t, e) {
                        function i() {
                            return ("string" == typeof t ? n[t] : t).apply(n, arguments);
                        }
                        var n = this;
                        return setTimeout(i, e || 0);
                    },
                    _hoverable: function (e) {
                        (this.hoverable = this.hoverable.add(e)),
                            this._on(e, {
                                mouseenter: function (e) {
                                    t(e.currentTarget).addClass("ui-state-hover");
                                },
                                mouseleave: function (e) {
                                    t(e.currentTarget).removeClass("ui-state-hover");
                                },
                            });
                    },
                    _focusable: function (e) {
                        (this.focusable = this.focusable.add(e)),
                            this._on(e, {
                                focusin: function (e) {
                                    t(e.currentTarget).addClass("ui-state-focus");
                                },
                                focusout: function (e) {
                                    t(e.currentTarget).removeClass("ui-state-focus");
                                },
                            });
                    },
                    _trigger: function (e, i, n) {
                        var r,
                            o,
                            s = this.options[e];
                        if (((n = n || {}), (i = t.Event(i)), (i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase()), (i.target = this.element[0]), (o = i.originalEvent)))
                            for (r in o) r in i || (i[r] = o[r]);
                        return this.element.trigger(i, n), !((t.isFunction(s) && s.apply(this.element[0], [i].concat(n)) === !1) || i.isDefaultPrevented());
                    },
                }),
                t.each({ show: "fadeIn", hide: "fadeOut" }, function (e, i) {
                    t.Widget.prototype["_" + e] = function (n, r, o) {
                        "string" == typeof r && (r = { effect: r });
                        var s,
                            a = r ? (r === !0 || "number" == typeof r ? i : r.effect || i) : e;
                        (r = r || {}),
                            "number" == typeof r && (r = { duration: r }),
                            (s = !t.isEmptyObject(r)),
                            (r.complete = o),
                            r.delay && n.delay(r.delay),
                            s && t.effects && t.effects.effect[a]
                                ? n[e](r)
                                : a !== e && n[a]
                                ? n[a](r.duration, r.easing, o)
                                : n.queue(function (i) {
                                      t(this)[e](), o && o.call(n[0]), i();
                                  });
                    };
                });
        })(n);
    },
    669: function (t, e, i) {
        var n = i(3);
        !(function (t, e) {
            function i(e, i) {
                var r,
                    o,
                    s,
                    a = e.nodeName.toLowerCase();
                return "area" === a
                    ? ((r = e.parentNode), (o = r.name), e.href && o && "map" === r.nodeName.toLowerCase() ? ((s = t("img[usemap=#" + o + "]")[0]), !!s && n(s)) : !1)
                    : (/input|select|textarea|button|object/.test(a) ? !e.disabled : "a" === a ? e.href || i : i) && n(e);
            }
            function n(e) {
                return (
                    t.expr.filters.visible(e) &&
                    !t(e)
                        .parents()
                        .addBack()
                        .filter(function () {
                            return "hidden" === t.css(this, "visibility");
                        }).length
                );
            }
            var r = 0,
                o = /^ui-id-\d+$/;
            (t.ui = t.ui || {}),
                t.extend(t.ui, {
                    version: "1.10.4",
                    keyCode: {
                        BACKSPACE: 8,
                        COMMA: 188,
                        DELETE: 46,
                        DOWN: 40,
                        END: 35,
                        ENTER: 13,
                        ESCAPE: 27,
                        HOME: 36,
                        LEFT: 37,
                        NUMPAD_ADD: 107,
                        NUMPAD_DECIMAL: 110,
                        NUMPAD_DIVIDE: 111,
                        NUMPAD_ENTER: 108,
                        NUMPAD_MULTIPLY: 106,
                        NUMPAD_SUBTRACT: 109,
                        PAGE_DOWN: 34,
                        PAGE_UP: 33,
                        PERIOD: 190,
                        RIGHT: 39,
                        SPACE: 32,
                        TAB: 9,
                        UP: 38,
                    },
                }),
                t.fn.extend({
                    focus: (function (e) {
                        return function (i, n) {
                            return "number" == typeof i
                                ? this.each(function () {
                                      var e = this;
                                      setTimeout(function () {
                                          t(e).focus(), n && n.call(e);
                                      }, i);
                                  })
                                : e.apply(this, arguments);
                        };
                    })(t.fn.focus),
                    scrollParent: function () {
                        var e;
                        return (
                            (e =
                                (t.ui.ie && /(static|relative)/.test(this.css("position"))) || /absolute/.test(this.css("position"))
                                    ? this.parents()
                                          .filter(function () {
                                              return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"));
                                          })
                                          .eq(0)
                                    : this.parents()
                                          .filter(function () {
                                              return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"));
                                          })
                                          .eq(0)),
                            /fixed/.test(this.css("position")) || !e.length ? t(document) : e
                        );
                    },
                    zIndex: function (i) {
                        if (i !== e) return this.css("zIndex", i);
                        if (this.length)
                            for (var n, r, o = t(this[0]); o.length && o[0] !== document; ) {
                                if (((n = o.css("position")), ("absolute" === n || "relative" === n || "fixed" === n) && ((r = parseInt(o.css("zIndex"), 10)), !isNaN(r) && 0 !== r))) return r;
                                o = o.parent();
                            }
                        return 0;
                    },
                    uniqueId: function () {
                        return this.each(function () {
                            this.id || (this.id = "ui-id-" + ++r);
                        });
                    },
                    removeUniqueId: function () {
                        return this.each(function () {
                            o.test(this.id) && t(this).removeAttr("id");
                        });
                    },
                }),
                t.extend(t.expr[":"], {
                    data: t.expr.createPseudo
                        ? t.expr.createPseudo(function (e) {
                              return function (i) {
                                  return !!t.data(i, e);
                              };
                          })
                        : function (e, i, n) {
                              return !!t.data(e, n[3]);
                          },
                    focusable: function (e) {
                        return i(e, !isNaN(t.attr(e, "tabindex")));
                    },
                    tabbable: function (e) {
                        var n = t.attr(e, "tabindex"),
                            r = isNaN(n);
                        return (r || n >= 0) && i(e, !r);
                    },
                }),
                t("<a>").outerWidth(1).jquery ||
                    t.each(["Width", "Height"], function (i, n) {
                        function r(e, i, n, r) {
                            return (
                                t.each(o, function () {
                                    (i -= parseFloat(t.css(e, "padding" + this)) || 0), n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), r && (i -= parseFloat(t.css(e, "margin" + this)) || 0);
                                }),
                                i
                            );
                        }
                        var o = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
                            s = n.toLowerCase(),
                            a = { innerWidth: t.fn.innerWidth, innerHeight: t.fn.innerHeight, outerWidth: t.fn.outerWidth, outerHeight: t.fn.outerHeight };
                        (t.fn["inner" + n] = function (i) {
                            return i === e
                                ? a["inner" + n].call(this)
                                : this.each(function () {
                                      t(this).css(s, r(this, i) + "px");
                                  });
                        }),
                            (t.fn["outer" + n] = function (e, i) {
                                return "number" != typeof e
                                    ? a["outer" + n].call(this, e)
                                    : this.each(function () {
                                          t(this).css(s, r(this, e, !0, i) + "px");
                                      });
                            });
                    }),
                t.fn.addBack ||
                    (t.fn.addBack = function (t) {
                        return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
                    }),
                t("<a>").data("a-b", "a").removeData("a-b").data("a-b") &&
                    (t.fn.removeData = (function (e) {
                        return function (i) {
                            return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this);
                        };
                    })(t.fn.removeData)),
                (t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
                (t.support.selectstart = "onselectstart" in document.createElement("div")),
                t.fn.extend({
                    disableSelection: function () {
                        return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (t) {
                            t.preventDefault();
                        });
                    },
                    enableSelection: function () {
                        return this.unbind(".ui-disableSelection");
                    },
                }),
                t.extend(t.ui, {
                    plugin: {
                        add: function (e, i, n) {
                            var r,
                                o = t.ui[e].prototype;
                            for (r in n) (o.plugins[r] = o.plugins[r] || []), o.plugins[r].push([i, n[r]]);
                        },
                        call: function (t, e, i) {
                            var n,
                                r = t.plugins[e];
                            if (r && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType) for (n = 0; n < r.length; n++) t.options[r[n][0]] && r[n][1].apply(t.element, i);
                        },
                    },
                    hasScroll: function (e, i) {
                        if ("hidden" === t(e).css("overflow")) return !1;
                        var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                            r = !1;
                        return e[n] > 0 ? !0 : ((e[n] = 1), (r = e[n] > 0), (e[n] = 0), r);
                    },
                });
        })(n);
    },
    1427: function (t, e, i) {
        var n = i(3);
        i(669),
            i(486),
            (function (t, e) {
                function i() {
                    return ++r;
                }
                function n(t) {
                    return (t = t.cloneNode(!1)), t.hash.length > 1 && decodeURIComponent(t.href.replace(o, "")) === decodeURIComponent(location.href.replace(o, ""));
                }
                var r = 0,
                    o = /#.*$/;
                t.widget("ui.tabs", {
                    version: "1.10.4",
                    delay: 300,
                    options: { active: null, collapsible: !1, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null },
                    _create: function () {
                        var e = this,
                            i = this.options;
                        (this.running = !1),
                            this.element
                                .addClass("ui-tabs ui-widget ui-widget-content ui-corner-all")
                                .toggleClass("ui-tabs-collapsible", i.collapsible)
                                .delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function (e) {
                                    t(this).is(".ui-state-disabled") && e.preventDefault();
                                })
                                .delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
                                    t(this).closest("li").is(".ui-state-disabled") && this.blur();
                                }),
                            this._processTabs(),
                            (i.active = this._initialActive()),
                            t.isArray(i.disabled) &&
                                (i.disabled = t
                                    .unique(
                                        i.disabled.concat(
                                            t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                                                return e.tabs.index(t);
                                            })
                                        )
                                    )
                                    .sort()),
                            (this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t()),
                            this._refresh(),
                            this.active.length && this.load(i.active);
                    },
                    _initialActive: function () {
                        var e = this.options.active,
                            i = this.options.collapsible,
                            n = location.hash.substring(1);
                        return (
                            null === e &&
                                (n &&
                                    this.tabs.each(function (i, r) {
                                        return t(r).attr("aria-controls") === n ? ((e = i), !1) : void 0;
                                    }),
                                null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))),
                                (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)),
                            e !== !1 && ((e = this.tabs.index(this.tabs.eq(e))), -1 === e && (e = i ? !1 : 0)),
                            !i && e === !1 && this.anchors.length && (e = 0),
                            e
                        );
                    },
                    _getCreateEventData: function () {
                        return { tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : t() };
                    },
                    _tabKeydown: function (e) {
                        var i = t(this.document[0].activeElement).closest("li"),
                            n = this.tabs.index(i),
                            r = !0;
                        if (!this._handlePageNav(e)) {
                            switch (e.keyCode) {
                                case t.ui.keyCode.RIGHT:
                                case t.ui.keyCode.DOWN:
                                    n++;
                                    break;
                                case t.ui.keyCode.UP:
                                case t.ui.keyCode.LEFT:
                                    (r = !1), n--;
                                    break;
                                case t.ui.keyCode.END:
                                    n = this.anchors.length - 1;
                                    break;
                                case t.ui.keyCode.HOME:
                                    n = 0;
                                    break;
                                case t.ui.keyCode.SPACE:
                                    return e.preventDefault(), clearTimeout(this.activating), void this._activate(n);
                                case t.ui.keyCode.ENTER:
                                    return e.preventDefault(), clearTimeout(this.activating), void this._activate(n === this.options.active ? !1 : n);
                                default:
                                    return;
                            }
                            e.preventDefault(),
                                clearTimeout(this.activating),
                                (n = this._focusNextTab(n, r)),
                                e.ctrlKey ||
                                    (i.attr("aria-selected", "false"),
                                    this.tabs.eq(n).attr("aria-selected", "true"),
                                    (this.activating = this._delay(function () {
                                        this.option("active", n);
                                    }, this.delay)));
                        }
                    },
                    _panelKeydown: function (e) {
                        this._handlePageNav(e) || (e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus()));
                    },
                    _handlePageNav: function (e) {
                        return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP
                            ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0)
                            : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN
                            ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0)
                            : void 0;
                    },
                    _findNextTab: function (e, i) {
                        function n() {
                            return e > r && (e = 0), 0 > e && (e = r), e;
                        }
                        for (var r = this.tabs.length - 1; -1 !== t.inArray(n(), this.options.disabled); ) e = i ? e + 1 : e - 1;
                        return e;
                    },
                    _focusNextTab: function (t, e) {
                        return (t = this._findNextTab(t, e)), this.tabs.eq(t).focus(), t;
                    },
                    _setOption: function (t, e) {
                        return "active" === t
                            ? void this._activate(e)
                            : "disabled" === t
                            ? void this._setupDisabled(e)
                            : (this._super(t, e),
                              "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", e), e || this.options.active !== !1 || this._activate(0)),
                              "event" === t && this._setupEvents(e),
                              void ("heightStyle" === t && this._setupHeightStyle(e)));
                    },
                    _tabId: function (t) {
                        return t.attr("aria-controls") || "ui-tabs-" + i();
                    },
                    _sanitizeSelector: function (t) {
                        return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
                    },
                    refresh: function () {
                        var e = this.options,
                            i = this.tablist.children(":has(a[href])");
                        (e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
                            return i.index(t);
                        })),
                            this._processTabs(),
                            e.active !== !1 && this.anchors.length
                                ? this.active.length && !t.contains(this.tablist[0], this.active[0])
                                    ? this.tabs.length === e.disabled.length
                                        ? ((e.active = !1), (this.active = t()))
                                        : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1))
                                    : (e.active = this.tabs.index(this.active))
                                : ((e.active = !1), (this.active = t())),
                            this._refresh();
                    },
                    _refresh: function () {
                        this._setupDisabled(this.options.disabled),
                            this._setupEvents(this.options.event),
                            this._setupHeightStyle(this.options.heightStyle),
                            this.tabs.not(this.active).attr({ "aria-selected": "false", tabIndex: -1 }),
                            this.panels.not(this._getPanelForTab(this.active)).hide().attr({ "aria-expanded": "false", "aria-hidden": "true" }),
                            this.active.length
                                ? (this.active.addClass("ui-tabs-active ui-state-active").attr({ "aria-selected": "true", tabIndex: 0 }), this._getPanelForTab(this.active).show().attr({ "aria-expanded": "true", "aria-hidden": "false" }))
                                : this.tabs.eq(0).attr("tabIndex", 0);
                    },
                    _processTabs: function () {
                        var e = this;
                        (this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist")),
                            (this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({ role: "tab", tabIndex: -1 })),
                            (this.anchors = this.tabs
                                .map(function () {
                                    return t("a", this)[0];
                                })
                                .addClass("ui-tabs-anchor")
                                .attr({ role: "presentation", tabIndex: -1 })),
                            (this.panels = t()),
                            this.anchors.each(function (i, r) {
                                var o,
                                    s,
                                    a,
                                    l = t(r).uniqueId().attr("id"),
                                    c = t(r).closest("li"),
                                    u = c.attr("aria-controls");
                                n(r)
                                    ? ((o = r.hash), (s = e.element.find(e._sanitizeSelector(o))))
                                    : ((a = e._tabId(c)), (o = "#" + a), (s = e.element.find(o)), s.length || ((s = e._createPanel(a)), s.insertAfter(e.panels[i - 1] || e.tablist)), s.attr("aria-live", "polite")),
                                    s.length && (e.panels = e.panels.add(s)),
                                    u && c.data("ui-tabs-aria-controls", u),
                                    c.attr({ "aria-controls": o.substring(1), "aria-labelledby": l }),
                                    s.attr("aria-labelledby", l);
                            }),
                            this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel");
                    },
                    _getList: function () {
                        return this.tablist || this.element.find("ol,ul").eq(0);
                    },
                    _createPanel: function (e) {
                        return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0);
                    },
                    _setupDisabled: function (e) {
                        t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : (e = !1));
                        for (var i, n = 0; (i = this.tabs[n]); n++) e === !0 || -1 !== t.inArray(n, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                        this.options.disabled = e;
                    },
                    _setupEvents: function (e) {
                        var i = {
                            click: function (t) {
                                t.preventDefault();
                            },
                        };
                        e &&
                            t.each(e.split(" "), function (t, e) {
                                i[e] = "_eventHandler";
                            }),
                            this._off(this.anchors.add(this.tabs).add(this.panels)),
                            this._on(this.anchors, i),
                            this._on(this.tabs, { keydown: "_tabKeydown" }),
                            this._on(this.panels, { keydown: "_panelKeydown" }),
                            this._focusable(this.tabs),
                            this._hoverable(this.tabs);
                    },
                    _setupHeightStyle: function (e) {
                        var i,
                            n = this.element.parent();
                        "fill" === e
                            ? ((i = n.height()),
                              (i -= this.element.outerHeight() - this.element.height()),
                              this.element.siblings(":visible").each(function () {
                                  var e = t(this),
                                      n = e.css("position");
                                  "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0));
                              }),
                              this.element
                                  .children()
                                  .not(this.panels)
                                  .each(function () {
                                      i -= t(this).outerHeight(!0);
                                  }),
                              this.panels
                                  .each(function () {
                                      t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()));
                                  })
                                  .css("overflow", "auto"))
                            : "auto" === e &&
                              ((i = 0),
                              this.panels
                                  .each(function () {
                                      i = Math.max(i, t(this).height("").height());
                                  })
                                  .height(i));
                    },
                    _eventHandler: function (e) {
                        var i = this.options,
                            n = this.active,
                            r = t(e.currentTarget),
                            o = r.closest("li"),
                            s = o[0] === n[0],
                            a = s && i.collapsible,
                            l = a ? t() : this._getPanelForTab(o),
                            c = n.length ? this._getPanelForTab(n) : t(),
                            u = { oldTab: n, oldPanel: c, newTab: a ? t() : o, newPanel: l };
                        e.preventDefault(),
                            o.hasClass("ui-state-disabled") ||
                                o.hasClass("ui-tabs-loading") ||
                                this.running ||
                                (s && !i.collapsible) ||
                                this._trigger("beforeActivate", e, u) === !1 ||
                                ((i.active = a ? !1 : this.tabs.index(o)),
                                (this.active = s ? t() : o),
                                this.xhr && this.xhr.abort(),
                                c.length || l.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."),
                                l.length && this.load(this.tabs.index(o), e),
                                this._toggle(e, u));
                    },
                    _toggle: function (e, i) {
                        function n() {
                            (o.running = !1), o._trigger("activate", e, i);
                        }
                        function r() {
                            i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), s.length && o.options.show ? o._show(s, o.options.show, n) : (s.show(), n());
                        }
                        var o = this,
                            s = i.newPanel,
                            a = i.oldPanel;
                        (this.running = !0),
                            a.length && this.options.hide
                                ? this._hide(a, this.options.hide, function () {
                                      i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r();
                                  })
                                : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), a.hide(), r()),
                            a.attr({ "aria-expanded": "false", "aria-hidden": "true" }),
                            i.oldTab.attr("aria-selected", "false"),
                            s.length && a.length
                                ? i.oldTab.attr("tabIndex", -1)
                                : s.length &&
                                  this.tabs
                                      .filter(function () {
                                          return 0 === t(this).attr("tabIndex");
                                      })
                                      .attr("tabIndex", -1),
                            s.attr({ "aria-expanded": "true", "aria-hidden": "false" }),
                            i.newTab.attr({ "aria-selected": "true", tabIndex: 0 });
                    },
                    _activate: function (e) {
                        var i,
                            n = this._findActive(e);
                        n[0] !== this.active[0] && (n.length || (n = this.active), (i = n.find(".ui-tabs-anchor")[0]), this._eventHandler({ target: i, currentTarget: i, preventDefault: t.noop }));
                    },
                    _findActive: function (e) {
                        return e === !1 ? t() : this.tabs.eq(e);
                    },
                    _getIndex: function (t) {
                        return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t;
                    },
                    _destroy: function () {
                        this.xhr && this.xhr.abort(),
                            this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),
                            this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),
                            this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),
                            this.tabs.add(this.panels).each(function () {
                                t.data(this, "ui-tabs-destroy")
                                    ? t(this).remove()
                                    : t(this)
                                          .removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel")
                                          .removeAttr("tabIndex")
                                          .removeAttr("aria-live")
                                          .removeAttr("aria-busy")
                                          .removeAttr("aria-selected")
                                          .removeAttr("aria-labelledby")
                                          .removeAttr("aria-hidden")
                                          .removeAttr("aria-expanded")
                                          .removeAttr("role");
                            }),
                            this.tabs.each(function () {
                                var e = t(this),
                                    i = e.data("ui-tabs-aria-controls");
                                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls");
                            }),
                            this.panels.show(),
                            "content" !== this.options.heightStyle && this.panels.css("height", "");
                    },
                    enable: function (i) {
                        var n = this.options.disabled;
                        n !== !1 &&
                            (i === e
                                ? (n = !1)
                                : ((i = this._getIndex(i)),
                                  (n = t.isArray(n)
                                      ? t.map(n, function (t) {
                                            return t !== i ? t : null;
                                        })
                                      : t.map(this.tabs, function (t, e) {
                                            return e !== i ? e : null;
                                        }))),
                            this._setupDisabled(n));
                    },
                    disable: function (i) {
                        var n = this.options.disabled;
                        if (n !== !0) {
                            if (i === e) n = !0;
                            else {
                                if (((i = this._getIndex(i)), -1 !== t.inArray(i, n))) return;
                                n = t.isArray(n) ? t.merge([i], n).sort() : [i];
                            }
                            this._setupDisabled(n);
                        }
                    },
                    load: function (e, i) {
                        e = this._getIndex(e);
                        var r = this,
                            o = this.tabs.eq(e),
                            s = o.find(".ui-tabs-anchor"),
                            a = this._getPanelForTab(o),
                            l = { tab: o, panel: a };
                        n(s[0]) ||
                            ((this.xhr = t.ajax(this._ajaxSettings(s, i, l))),
                            this.xhr &&
                                "canceled" !== this.xhr.statusText &&
                                (o.addClass("ui-tabs-loading"),
                                a.attr("aria-busy", "true"),
                                this.xhr
                                    .success(function (t) {
                                        setTimeout(function () {
                                            a.html(t), r._trigger("load", i, l);
                                        }, 1);
                                    })
                                    .complete(function (t, e) {
                                        setTimeout(function () {
                                            "abort" === e && r.panels.stop(!1, !0), o.removeClass("ui-tabs-loading"), a.removeAttr("aria-busy"), t === r.xhr && delete r.xhr;
                                        }, 1);
                                    })));
                    },
                    _ajaxSettings: function (e, i, n) {
                        var r = this;
                        return {
                            url: e.attr("href"),
                            beforeSend: function (e, o) {
                                return r._trigger("beforeLoad", i, t.extend({ jqXHR: e, ajaxSettings: o }, n));
                            },
                        };
                    },
                    _getPanelForTab: function (e) {
                        var i = t(e).attr("aria-controls");
                        return this.element.find(this._sanitizeSelector("#" + i));
                    },
                });
            })(n);
    },
});

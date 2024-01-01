!(function (e) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = e())
        : "function" == typeof define && define.amd
        ? define([], e)
        : (("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Bugsnag = e());
})(function () {
    var r = ["navigation", "request", "process", "log", "user", "state", "error", "manual"],
        g = function (e, t, n) {
            for (var r = n, a = 0, o = e.length; a < o; a++) r = t(r, e[a], a, e);
            return r;
        },
        h = function (e, a) {
            return g(
                e,
                function (e, t, n, r) {
                    return a(t, n, r) ? e.concat(t) : e;
                },
                []
            );
        },
        l = function (e, a) {
            return g(
                e,
                function (e, t, n, r) {
                    return !0 === e || t === a;
                },
                !1
            );
        },
        i = function (e) {
            return "[object Array]" === Object.prototype.toString.call(e);
        },
        s = !{ toString: null }.propertyIsEnumerable("toString"),
        f = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
        o = function (e) {
            var t,
                n = [];
            for (t in e) Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
            if (!s) return n;
            for (var r = 0, a = f.length; r < a; r++) Object.prototype.hasOwnProperty.call(e, f[r]) && n.push(f[r]);
            return n;
        },
        t = function (t, n) {
            return (
                void 0 === t && (t = 1),
                void 0 === n && (n = Infinity),
                function (e) {
                    return "number" == typeof e && parseInt("" + e, 10) === e && t <= e && e <= n;
                }
            );
        },
        a = function (e) {
            return (
                "function" == typeof e ||
                (i(e) &&
                    h(e, function (e) {
                        return "function" == typeof e;
                    }).length === e.length)
            );
        },
        m = function (e) {
            return "string" == typeof e && !!e.length;
        },
        v = {},
        y = function () {
            return { unhandledExceptions: !0, unhandledRejections: !0 };
        },
        u =
            ((v.schema = {
                apiKey: {
                    defaultValue: function () {
                        return null;
                    },
                    message: "is required",
                    validate: m,
                },
                appVersion: {
                    defaultValue: function () {
                        return undefined;
                    },
                    message: "should be a string",
                    validate: function (e) {
                        return e === undefined || m(e);
                    },
                },
                appType: {
                    defaultValue: function () {
                        return undefined;
                    },
                    message: "should be a string",
                    validate: function (e) {
                        return e === undefined || m(e);
                    },
                },
                autoDetectErrors: {
                    defaultValue: function () {
                        return !0;
                    },
                    message: "should be true|false",
                    validate: function (e) {
                        return !0 === e || !1 === e;
                    },
                },
                enabledErrorTypes: {
                    defaultValue: y,
                    message: "should be an object containing the flags { unhandledExceptions:true|false, unhandledRejections:true|false }",
                    allowPartialObject: !0,
                    validate: function (t) {
                        if ("object" != typeof t || !t) return !1;
                        var e = o(t),
                            n = o(y());
                        return (
                            !(
                                h(e, function (e) {
                                    return l(n, e);
                                }).length < e.length
                            ) &&
                            !(
                                0 <
                                h(o(t), function (e) {
                                    return "boolean" != typeof t[e];
                                }).length
                            )
                        );
                    },
                },
                onError: {
                    defaultValue: function () {
                        return [];
                    },
                    message: "should be a function or array of functions",
                    validate: a,
                },
                onSession: {
                    defaultValue: function () {
                        return [];
                    },
                    message: "should be a function or array of functions",
                    validate: a,
                },
                onBreadcrumb: {
                    defaultValue: function () {
                        return [];
                    },
                    message: "should be a function or array of functions",
                    validate: a,
                },
                endpoints: {
                    defaultValue: function () {
                        return { notify: "https://notify.bugsnag.com", sessions: "https://sessions.bugsnag.com" };
                    },
                    message: "should be an object containing endpoint URLs { notify, sessions }",
                    validate: function (e) {
                        return (
                            e &&
                            "object" == typeof e &&
                            m(e.notify) &&
                            m(e.sessions) &&
                            0 ===
                                h(o(e), function (e) {
                                    return !l(["notify", "sessions"], e);
                                }).length
                        );
                    },
                },
                autoTrackSessions: {
                    defaultValue: function (e) {
                        return !0;
                    },
                    message: "should be true|false",
                    validate: function (e) {
                        return !0 === e || !1 === e;
                    },
                },
                enabledReleaseStages: {
                    defaultValue: function () {
                        return null;
                    },
                    message: "should be an array of strings",
                    validate: function (e) {
                        return (
                            null === e ||
                            (i(e) &&
                                h(e, function (e) {
                                    return "string" == typeof e;
                                }).length === e.length)
                        );
                    },
                },
                releaseStage: {
                    defaultValue: function () {
                        return "production";
                    },
                    message: "should be a string",
                    validate: function (e) {
                        return "string" == typeof e && e.length;
                    },
                },
                maxBreadcrumbs: {
                    defaultValue: function () {
                        return 25;
                    },
                    message: "should be a number â‰¤100",
                    validate: function (e) {
                        return t(0, 100)(e);
                    },
                },
                enabledBreadcrumbTypes: {
                    defaultValue: function () {
                        return r;
                    },
                    message: "should be null or a list of available breadcrumb types (" + r.join(",") + ")",
                    validate: function (e) {
                        return (
                            null === e ||
                            (i(e) &&
                                g(
                                    e,
                                    function (e, t) {
                                        return !1 === e ? e : l(r, t);
                                    },
                                    !0
                                ))
                        );
                    },
                },
                context: {
                    defaultValue: function () {
                        return undefined;
                    },
                    message: "should be a string",
                    validate: function (e) {
                        return e === undefined || "string" == typeof e;
                    },
                },
                user: {
                    defaultValue: function () {
                        return {};
                    },
                    message: "should be an object with { id, email, name } properties",
                    validate: function (e) {
                        return (
                            null === e ||
                            (e &&
                                g(
                                    o(e),
                                    function (e, t) {
                                        return e && l(["id", "email", "name"], t);
                                    },
                                    !0
                                ))
                        );
                    },
                },
                metadata: {
                    defaultValue: function () {
                        return {};
                    },
                    message: "should be an object",
                    validate: function (e) {
                        return "object" == typeof e && null !== e;
                    },
                },
                logger: {
                    defaultValue: function () {
                        return undefined;
                    },
                    message: "should be null or an object with methods { debug, info, warn, error }",
                    validate: function (n) {
                        return (
                            !n ||
                            g(
                                ["debug", "info", "warn", "error"],
                                function (e, t) {
                                    return e && "function" == typeof n[t];
                                },
                                !0
                            )
                        );
                    },
                },
                redactedKeys: {
                    defaultValue: function () {
                        return ["password"];
                    },
                    message: "should be an array of strings|regexes",
                    validate: function (e) {
                        return (
                            i(e) &&
                            e.length ===
                                h(e, function (e) {
                                    return "string" == typeof e || (e && "function" == typeof e.test);
                                }).length
                        );
                    },
                },
                plugins: {
                    defaultValue: function () {
                        return [];
                    },
                    message: "should be an array of plugin objects",
                    validate: function (e) {
                        return (
                            i(e) &&
                            e.length ===
                                h(e, function (e) {
                                    return e && "object" == typeof e && "function" == typeof e.load;
                                }).length
                        );
                    },
                },
                featureFlags: {
                    defaultValue: function () {
                        return [];
                    },
                    message: 'should be an array of objects that have a "name" property',
                    validate: function (e) {
                        return (
                            i(e) &&
                            e.length ===
                                h(e, function (e) {
                                    return e && "object" == typeof e && "string" == typeof e.name;
                                }).length
                        );
                    },
                },
            }),
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n,
                        r = arguments[t];
                    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
            }),
        p = function (e, a) {
            return g(
                e,
                function (e, t, n, r) {
                    return e.concat(a(t, n, r));
                },
                []
            );
        };
    function b() {
        return (b =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n,
                        r = arguments[t];
                    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
            }).apply(this, arguments);
    }
    var a = v.schema,
        a = {
            releaseStage: u({}, a.releaseStage, {
                defaultValue: function () {
                    return /^localhost(:\d+)?$/.test(window.location.host) ? "development" : "production";
                },
            }),
            appType: b({}, a.appType, {
                defaultValue: function () {
                    return "browser";
                },
            }),
            logger: u({}, a.logger, {
                defaultValue: function () {
                    return "undefined" != typeof console && "function" == typeof console.debug ? _() : undefined;
                },
            }),
        },
        _ = function () {
            var n = {},
                r = console.log;
            return (
                p(["debug", "info", "warn", "error"], function (e) {
                    var t = console[e];
                    n[e] = ("function" == typeof t ? t : r).bind(console, "[bugsnag]");
                }),
                n
            );
        },
        S = (function () {
            function e(e, t, n, r) {
                void 0 === r && (r = new Date()), (this.type = n), (this.message = e), (this.metadata = t), (this.timestamp = r);
            }
            return (
                (e.prototype.toJSON = function () {
                    return { type: this.type, name: this.message, timestamp: this.timestamp, metaData: this.metadata };
                }),
                e
            );
        })(),
        w = {},
        E =
            (!(function (e, t) {
                "use strict";
                "object" == typeof w ? (w = t()) : (e.StackFrame = t());
            })(this, function () {
                "use strict";
                function n(e) {
                    return !isNaN(parseFloat(e)) && isFinite(e);
                }
                function r(e) {
                    return e.charAt(0).toUpperCase() + e.substring(1);
                }
                function l(e) {
                    return function () {
                        return this[e];
                    };
                }
                var e = ["isConstructor", "isEval", "isNative", "isToplevel"],
                    t = ["columnNumber", "lineNumber"],
                    a = ["fileName", "functionName", "source"],
                    o = e.concat(t, a, ["args"]);
                function i(e) {
                    if (e instanceof Object) for (var t = 0; t < o.length; t++) e.hasOwnProperty(o[t]) && e[o[t]] !== undefined && this["set" + r(o[t])](e[o[t]]);
                }
                i.prototype = {
                    getArgs: function () {
                        return this.args;
                    },
                    setArgs: function (e) {
                        if ("[object Array]" !== Object.prototype.toString.call(e)) throw new TypeError("Args must be an Array");
                        this.args = e;
                    },
                    getEvalOrigin: function () {
                        return this.evalOrigin;
                    },
                    setEvalOrigin: function (e) {
                        if (e instanceof i) this.evalOrigin = e;
                        else {
                            if (!(e instanceof Object)) throw new TypeError("Eval Origin must be an Object or StackFrame");
                            this.evalOrigin = new i(e);
                        }
                    },
                    toString: function () {
                        return (
                            (this.getFunctionName() || "{anonymous}") +
                            ("(" + (this.getArgs() || []).join(",") + ")") +
                            (this.getFileName() ? "@" + this.getFileName() : "") +
                            (n(this.getLineNumber()) ? ":" + this.getLineNumber() : "") +
                            (n(this.getColumnNumber()) ? ":" + this.getColumnNumber() : "")
                        );
                    },
                };
                for (var s = 0; s < e.length; s++)
                    (i.prototype["get" + r(e[s])] = l(e[s])),
                        (i.prototype["set" + r(e[s])] = (function (t) {
                            return function (e) {
                                this[t] = Boolean(e);
                            };
                        })(e[s]));
                for (var u = 0; u < t.length; u++)
                    (i.prototype["get" + r(t[u])] = l(t[u])),
                        (i.prototype["set" + r(t[u])] = (function (t) {
                            return function (e) {
                                if (!n(e)) throw new TypeError(t + " must be a Number");
                                this[t] = Number(e);
                            };
                        })(t[u]));
                for (var c = 0; c < a.length; c++)
                    (i.prototype["get" + r(a[c])] = l(a[c])),
                        (i.prototype["set" + r(a[c])] = (function (t) {
                            return function (e) {
                                this[t] = String(e);
                            };
                        })(a[c]));
                return i;
            }),
            {}),
        O =
            (!(function (e, t) {
                "use strict";
                "object" == typeof E ? (E = t(w)) : (e.ErrorStackParser = t(e.StackFrame));
            })(this, function (s) {
                "use strict";
                var t = /(^|@)\S+\:\d+/,
                    n = /^\s*at .*(\S+\:\d+|\(native\))/m,
                    r = /^(eval@)?(\[native code\])?$/;
                return {
                    parse: function (e) {
                        if ("undefined" != typeof e.stacktrace || "undefined" != typeof e["opera#sourceloc"]) return this.parseOpera(e);
                        if (e.stack && e.stack.match(n)) return this.parseV8OrIE(e);
                        if (e.stack) return this.parseFFOrSafari(e);
                        throw new Error("Cannot parse given Error object");
                    },
                    extractLocation: function (e) {
                        if (-1 === e.indexOf(":")) return [e];
                        e = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(e.replace(/[\(\)]/g, ""));
                        return [e[1], e[2] || undefined, e[3] || undefined];
                    },
                    parseV8OrIE: function (e) {
                        return e.stack
                            .split("\n")
                            .filter(function (e) {
                                return !!e.match(n);
                            }, this)
                            .map(function (e) {
                                var t = (e = -1 < e.indexOf("(eval ") ? e.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, "") : e).replace(/^\s+/, "").replace(/\(eval code/g, "("),
                                    n = t.match(/ (\((.+):(\d+):(\d+)\)$)/),
                                    t = (t = n ? t.replace(n[0], "") : t).split(/\s+/).slice(1),
                                    n = this.extractLocation(n ? n[1] : t.pop()),
                                    t = t.join(" ") || undefined,
                                    r = -1 < ["eval", "<anonymous>"].indexOf(n[0]) ? undefined : n[0];
                                return new s({ functionName: t, fileName: r, lineNumber: n[1], columnNumber: n[2], source: e });
                            }, this);
                    },
                    parseFFOrSafari: function (e) {
                        return e.stack
                            .split("\n")
                            .filter(function (e) {
                                return !e.match(r);
                            }, this)
                            .map(function (e) {
                                var t, n;
                                return -1 === (e = -1 < e.indexOf(" > eval") ? e.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1") : e).indexOf("@") && -1 === e.indexOf(":")
                                    ? new s({ functionName: e })
                                    : ((t = (t = e.match((n = /((.*".+"[^@]*)?[^@]*)(?:@)/))) && t[1] ? t[1] : undefined),
                                      (n = this.extractLocation(e.replace(n, ""))),
                                      new s({ functionName: t, fileName: n[0], lineNumber: n[1], columnNumber: n[2], source: e }));
                            }, this);
                    },
                    parseOpera: function (e) {
                        return !e.stacktrace || (-1 < e.message.indexOf("\n") && e.message.split("\n").length > e.stacktrace.split("\n").length) ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e);
                    },
                    parseOpera9: function (e) {
                        for (var t = /Line (\d+).*script (?:in )?(\S+)/i, n = e.message.split("\n"), r = [], a = 2, o = n.length; a < o; a += 2) {
                            var i = t.exec(n[a]);
                            i && r.push(new s({ fileName: i[2], lineNumber: i[1], source: n[a] }));
                        }
                        return r;
                    },
                    parseOpera10: function (e) {
                        for (var t = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, n = e.stacktrace.split("\n"), r = [], a = 0, o = n.length; a < o; a += 2) {
                            var i = t.exec(n[a]);
                            i && r.push(new s({ functionName: i[3] || undefined, fileName: i[2], lineNumber: i[1], source: n[a] }));
                        }
                        return r;
                    },
                    parseOpera11: function (e) {
                        return e.stack
                            .split("\n")
                            .filter(function (e) {
                                return !!e.match(t) && !e.match(/^Error created at/);
                            }, this)
                            .map(function (e) {
                                var t,
                                    n = e.split("@"),
                                    r = this.extractLocation(n.pop()),
                                    n = n.shift() || "",
                                    a = n.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || undefined,
                                    n = (t = n.match(/\(([^\)]*)\)/) ? n.replace(/^[^\(]+\(([^\)]*)\)$/, "$1") : t) === undefined || "[arguments not available]" === t ? undefined : t.split(",");
                                return new s({ functionName: a, args: n, fileName: r[0], lineNumber: r[1], columnNumber: r[2], source: e });
                            }, this);
                    },
                };
            }),
            E),
        j = function (e, t, n, r) {
            var a = r && r.redactedKeys ? r.redactedKeys : [],
                r = r && r.redactedPaths ? r.redactedPaths : [];
            return JSON.stringify(B(e, a, r), t, n);
        },
        N = 20,
        x = 25e3,
        k = 8,
        T = "...";
    function R(e) {
        return "[Throws: " + (e ? e.message : "?") + "]";
    }
    function L(e, t) {
        try {
            return e[t];
        } catch (n) {
            return R(n);
        }
    }
    function B(e, d, f) {
        var g = [],
            h = 0;
        return (function p(e, t) {
            function n() {
                return t.length > k && x < h;
            }
            if ((h++, t.length > N)) return T;
            if (n()) return T;
            if (null === e || "object" != typeof e) return e;
            if (
                (function (e, t) {
                    for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return 1;
                })(g, e)
            )
                return "[Circular]";
            if ((g.push(e), "function" == typeof e.toJSON))
                try {
                    h--;
                    var r = p(e.toJSON(), t);
                    return g.pop(), r;
                } catch (u) {
                    return R(u);
                }
            if ((r = e) instanceof Error || /^\[object (Error|(Dom)?Exception)\]$/.test(Object.prototype.toString.call(r))) return h--, (r = p({ name: e.name, message: e.message }, t)), g.pop(), r;
            if ("[object Array]" === Object.prototype.toString.call(e)) {
                for (var a = [], o = 0, l = e.length; o < l; o++) {
                    if (n()) {
                        a.push(T);
                        break;
                    }
                    a.push(p(e[o], t.concat("[]")));
                }
                return g.pop(), a;
            }
            var i = {};
            try {
                for (var s in e)
                    if (Object.prototype.hasOwnProperty.call(e, s))
                        if (
                            (function (e, t) {
                                for (var n = 0, r = e.length; n < r; n++) if (0 === t.indexOf(e[n])) return 1;
                            })(f, t.join(".")) &&
                            (function (e, t) {
                                for (var n = 0, r = e.length; n < r; n++) {
                                    if ("string" == typeof e[n] && e[n].toLowerCase() === t.toLowerCase()) return 1;
                                    if (e[n] && "function" == typeof e[n].test && e[n].test(t)) return 1;
                                }
                            })(d, s)
                        )
                            i[s] = "[REDACTED]";
                        else {
                            if (n()) {
                                i[s] = T;
                                break;
                            }
                            i[s] = p(L(e, s), t.concat(s));
                        }
            } catch (c) {}
            return g.pop(), i;
        })(e, []);
    }
    function q(e, t, n, r) {
        var a;
        "string" == typeof n && (r === undefined ? (r = null) : null !== r && "string" != typeof r && (r = j(r)), "number" != typeof (a = t[n]) ? (e.push({ name: n, variant: r }), (t[n] = e.length - 1)) : (e[a] = { name: n, variant: r }));
    }
    var M = {
            add: q,
            clear: function (e, t, n) {
                var r = t[n];
                "number" == typeof r && ((e[r] = null), delete t[n]);
            },
            merge: function (e, t, n) {
                if (i(t)) {
                    for (var r = 0; r < t.length; ++r) {
                        var a = t[r];
                        null !== a && "object" == typeof a && q(e, n, a.name, a.variant);
                    }
                    return e;
                }
            },
            toEventApi: function (e) {
                return p(h(e, Boolean), function (e) {
                    var t = e.name,
                        e = e.variant,
                        t = { featureFlag: t };
                    return "string" == typeof e && (t.variant = e), t;
                });
            },
        },
        I = function (e) {
            return !(!e || (!e.stack && !e.stacktrace && !e["opera#sourceloc"]) || "string" != typeof (e.stack || e.stacktrace || e["opera#sourceloc"]) || e.stack === e.name + ": " + e.message);
        };
    var A = function (e) {
            switch (Object.prototype.toString.call(e)) {
                case "[object Error]":
                case "[object Exception]":
                case "[object DOMException]":
                    return !0;
                default:
                    return e instanceof Error;
            }
        },
        C = function (e, t, n) {
            "string" == typeof t && (n ? e[t] && delete e[t][n] : delete e[t]);
        },
        D = function (e, t, n, r) {
            var a, o;
            if (t) {
                if (null === n) return C(e, t);
                "object" == typeof n && (o = n), "string" == typeof n && (((a = {})[n] = r), (o = a)), o && (e[t] || (e[t] = {}), (e[t] = u({}, e[t], o)));
            }
        },
        F = function (e, t, n) {
            return "string" != typeof t ? undefined : n ? (e[t] ? e[t][n] : undefined) : e[t];
        },
        P = C,
        V = {},
        d =
            (!(function (e, t) {
                "use strict";
                "object" == typeof V ? (V = t(w)) : (e.StackGenerator = t(e.StackFrame));
            })(this, function (s) {
                return {
                    backtrace: function (e) {
                        for (var t = [], n = 10, r = ("object" == typeof e && "number" == typeof e.maxStackSize && (n = e.maxStackSize), arguments.callee); r && t.length < n && r.arguments; ) {
                            for (var a = new Array(r.arguments.length), o = 0; o < a.length; ++o) a[o] = r.arguments[o];
                            /function(?:\s+([\w$]+))+\s*\(/.test(r.toString()) ? t.push(new s({ functionName: RegExp.$1 || undefined, args: a })) : t.push(new s({ args: a }));
                            try {
                                r = r.caller;
                            } catch (i) {
                                break;
                            }
                        }
                        return t;
                    },
                };
            }),
            (function () {
                function o(e, t, n, r, a) {
                    void 0 === n && (n = []),
                        void 0 === r && (r = $()),
                        (this.apiKey = undefined),
                        (this.context = undefined),
                        (this.groupingHash = undefined),
                        (this.originalError = a),
                        (this._handledState = r),
                        (this.severity = this._handledState.severity),
                        (this.unhandled = this._handledState.unhandled),
                        (this.app = {}),
                        (this.device = {}),
                        (this.request = {}),
                        (this.breadcrumbs = []),
                        (this.threads = []),
                        (this._metadata = {}),
                        (this._features = []),
                        (this._featuresIndex = {}),
                        (this._user = {}),
                        (this._session = undefined),
                        (this.errors = [X(e, t, o.__type, n)]);
                }
                var e = o.prototype;
                return (
                    (e.addMetadata = function (e, t, n) {
                        return D(this._metadata, e, t, n);
                    }),
                    (e.getMetadata = function (e, t) {
                        return F(this._metadata, e, t);
                    }),
                    (e.clearMetadata = function (e, t) {
                        return P(this._metadata, e, t);
                    }),
                    (e.addFeatureFlag = function (e, t) {
                        M.add(this._features, this._featuresIndex, e, (t = void 0 === t ? null : t));
                    }),
                    (e.addFeatureFlags = function (e) {
                        M.merge(this._features, e, this._featuresIndex);
                    }),
                    (e.getFeatureFlags = function () {
                        return M.toEventApi(this._features);
                    }),
                    (e.clearFeatureFlag = function (e) {
                        M.clear(this._features, this._featuresIndex, e);
                    }),
                    (e.clearFeatureFlags = function () {
                        (this._features = []), (this._featuresIndex = {});
                    }),
                    (e.getUser = function () {
                        return this._user;
                    }),
                    (e.setUser = function (e, t, n) {
                        this._user = { id: e, email: t, name: n };
                    }),
                    (e.toJSON = function () {
                        return {
                            payloadVersion: "4",
                            exceptions: p(this.errors, function (e) {
                                return u({}, e, { message: e.errorMessage });
                            }),
                            severity: this.severity,
                            unhandled: this._handledState.unhandled,
                            severityReason: this._handledState.severityReason,
                            app: this.app,
                            device: this.device,
                            request: this.request,
                            breadcrumbs: this.breadcrumbs,
                            context: this.context,
                            groupingHash: this.groupingHash,
                            metaData: this._metadata,
                            user: this._user,
                            session: this._session,
                            featureFlags: this.getFeatureFlags(),
                        };
                    }),
                    o
                );
            })()),
        H = function (e) {
            e = { file: e.fileName, method: K(e.functionName), lineNumber: e.lineNumber, columnNumber: e.columnNumber, code: undefined, inProject: undefined };
            return -1 < e.lineNumber && !e.file && !e.method && (e.file = "global code"), e;
        },
        K = function (e) {
            return /^global code$/i.test(e) ? "global code" : e;
        },
        $ = function () {
            return { unhandled: !1, severity: "warning", severityReason: { type: "handledException" } };
        },
        U = function (e) {
            return "string" == typeof e ? e : "";
        };
    function X(e, t, n, r) {
        return {
            errorClass: U(e),
            errorMessage: U(t),
            type: n,
            stacktrace: g(
                r,
                function (e, t) {
                    t = H(t);
                    try {
                        return "{}" === JSON.stringify(t) ? e : e.concat(t);
                    } catch (n) {
                        return e;
                    }
                },
                []
            ),
        };
    }
    (d.getStacktrace = function (e, t, n) {
        if (I(e)) return O.parse(e).slice(t);
        try {
            return h(V.backtrace(), function (e) {
                return -1 === (e.functionName || "").indexOf("StackGenerator$$");
            }).slice(1 + n);
        } catch (r) {
            return [];
        }
    }),
        (d.create = function (e, t, n, r, a, o) {
            void 0 === a && (a = 0);
            var t = W(e, t, r, o),
                o = t[0],
                t = t[1];
            try {
                var i = d.getStacktrace(o, 0 < t ? 1 + t + a : 0, 1 + a),
                    s = new d(o.name, o.message, i, n, e);
            } catch (u) {
                s = new d(o.name, o.message, [], n, e);
            }
            return (
                "InvalidError" === o.name && s.addMetadata("" + r, "non-error parameter", z(e)),
                o.cause &&
                    ((t = (function c(e) {
                        return e.cause ? [e].concat(c(e.cause)) : [e];
                    })(o).slice(1)),
                    (a = p(t, function (e) {
                        var t = A(e) && I(e) ? O.parse(e) : [],
                            n = W(e, !0, "error cause")[0];
                        return "InvalidError" === n.name && s.addMetadata("error cause", z(e)), X(n.name, n.message, d.__type, t);
                    })),
                    (i = s.errors).push.apply(i, a)),
                s
            );
        });
    var J,
        z = function (e) {
            return null === e ? "null" : e === undefined ? "undefined" : e;
        },
        W = function (e, t, n, r) {
            var a,
                o = 0,
                i = function (e) {
                    var t = "error cause" === n ? "was" : "received",
                        e = (r && r.warn(n + " " + t + ' a non-error: "' + e + '"'), new Error(n + " " + t + ' a non-error. See "' + n + '" tab for more detail.'));
                    return (e.name = "InvalidError"), e;
                };
            if (t)
                switch (typeof e) {
                    case "string":
                    case "number":
                    case "boolean":
                        (a = new Error(String(e))), (o += 1);
                        break;
                    case "function":
                        (a = i("function")), (o += 2);
                        break;
                    case "object":
                        null !== e && A(e) ? (a = e) : null !== e && G(e) ? (((a = new Error(e.message || e.errorMessage)).name = e.name || e.errorClass), (o += 1)) : ((a = i(null === e ? "null" : "unsupported object")), (o += 2));
                        break;
                    default:
                        (a = i("nothing")), (o += 2);
                }
            else A(e) ? (a = e) : ((a = i(typeof e)), (o += 2));
            if (!I(a))
                try {
                    throw a;
                } catch (s) {
                    I(s) && ((a = s), (o = 1));
                }
            return [a, o];
        },
        G =
            ((d.__type = "browserjs"),
            function (e) {
                return !(("string" != typeof e.name && "string" != typeof e.errorClass) || ("string" != typeof e.message && "string" != typeof e.errorMessage));
            }),
        Q = d,
        Y = function (e, t, n) {
            var r = 0,
                a = function () {
                    if (r >= e.length) return n(null, !0);
                    t(e[r], function (e, t) {
                        return e ? n(e) : !1 === t ? n(null, !1) : (r++, void a());
                    });
                };
            a();
        },
        Z = function (e, a, o, t) {
            Y(
                e,
                function (e, n) {
                    if ("function" != typeof e) return n(null);
                    try {
                        var t;
                        if (2 !== e.length)
                            return (t = e(a)) && "function" == typeof t.then
                                ? t.then(
                                      function (e) {
                                          return setTimeout(function () {
                                              return n(null, e);
                                          });
                                      },
                                      function (e) {
                                          setTimeout(function () {
                                              return o(e), n(null, !0);
                                          });
                                      }
                                  )
                                : n(null, t);
                        e(a, function (e, t) {
                            if (e) return o(e), n(null);
                            n(null, t);
                        });
                    } catch (r) {
                        o(r), n(null);
                    }
                },
                t
            );
        },
        ee = function (e, t, n, r) {
            for (var a = !1, o = e.slice(); !a && o.length; )
                try {
                    a = !1 === o.pop()(t);
                } catch (i) {
                    r.error("Error occurred in " + n + " callback, continuing anywayâ€¦"), r.error(i);
                }
            return a;
        },
        te = function (e, t) {
            e = "000000000" + e;
            return e.substr(e.length - t);
        },
        ne = "object" == typeof window ? window : self,
        re = 0;
    for (J in ne) Object.hasOwnProperty.call(ne, J) && re++;
    var e = navigator.mimeTypes ? navigator.mimeTypes.length : 0,
        ae = te((e + navigator.userAgent.length).toString(36) + re.toString(36), 4),
        oe = function () {
            return ae;
        },
        ie = 0,
        se = 4,
        ue = 36,
        ce = Math.pow(ue, se);
    function le() {
        return te(((Math.random() * ce) << 0).toString(ue), se);
    }
    function de() {
        return "c" + new Date().getTime().toString(ue) + te(((ie = ie < ce ? ie : 0), (++ie - 1).toString(ue)), se) + oe() + (le() + le());
    }
    de.fingerprint = oe;
    var fe,
        ge,
        he = de,
        pe = (function () {
            function e() {
                (this.id = he()), (this.startedAt = new Date()), (this._handled = 0), (this._unhandled = 0), (this._user = {}), (this.app = {}), (this.device = {});
            }
            var t = e.prototype;
            return (
                (t.getUser = function () {
                    return this._user;
                }),
                (t.setUser = function (e, t, n) {
                    this._user = { id: e, email: t, name: n };
                }),
                (t.toJSON = function () {
                    return { id: this.id, startedAt: this.startedAt, events: { handled: this._handled, unhandled: this._unhandled } };
                }),
                (t._track = function (e) {
                    this[e._handledState.unhandled ? "_unhandled" : "_handled"] += 1;
                }),
                e
            );
        })(),
        me = M.add,
        ve = M.clear,
        ye = M.merge,
        c = function () {},
        be = function (t, n) {
            return new Error(
                "Invalid configuration\n" +
                    p(o(t), function (e) {
                        return "  - " + e + " " + t[e] + ", got " + _e(n[e]);
                    }).join("\n\n")
            );
        },
        _e = function (e) {
            switch (typeof e) {
                case "string":
                case "number":
                case "object":
                    return JSON.stringify(e);
                default:
                    return String(e);
            }
        },
        Se = (function () {
            function s(e, t, n, r) {
                var a = this,
                    o =
                        (void 0 === t && (t = v.schema),
                        void 0 === n && (n = []),
                        (this._notifier = r),
                        (this._config = {}),
                        (this._schema = t),
                        (this._delivery = { sendSession: c, sendEvent: c }),
                        (this._logger = { debug: c, info: c, warn: c, error: c }),
                        (this._plugins = {}),
                        (this._breadcrumbs = []),
                        (this._session = null),
                        (this._metadata = {}),
                        (this._featuresIndex = {}),
                        (this._features = []),
                        (this._context = undefined),
                        (this._user = {}),
                        (this._cbs = { e: [], s: [], sp: [], b: [] }),
                        (this.Client = s),
                        (this.Event = Q),
                        (this.Breadcrumb = S),
                        (this.Session = pe),
                        (this._config = this._configure(e, n)),
                        p(n.concat(this._config.plugins), function (e) {
                            e && a._loadPlugin(e);
                        }),
                        (this._depth = 1),
                        this),
                    i = this.notify;
                this.notify = function () {
                    return i.apply(o, arguments);
                };
            }
            var e = s.prototype;
            return (
                (e.addMetadata = function (e, t, n) {
                    return D(this._metadata, e, t, n);
                }),
                (e.getMetadata = function (e, t) {
                    return F(this._metadata, e, t);
                }),
                (e.clearMetadata = function (e, t) {
                    return P(this._metadata, e, t);
                }),
                (e.addFeatureFlag = function (e, t) {
                    me(this._features, this._featuresIndex, e, (t = void 0 === t ? null : t));
                }),
                (e.addFeatureFlags = function (e) {
                    ye(this._features, e, this._featuresIndex);
                }),
                (e.clearFeatureFlag = function (e) {
                    ve(this._features, this._featuresIndex, e);
                }),
                (e.clearFeatureFlags = function () {
                    (this._features = []), (this._featuresIndex = {});
                }),
                (e.getContext = function () {
                    return this._context;
                }),
                (e.setContext = function (e) {
                    this._context = e;
                }),
                (e._configure = function (r, e) {
                    var a = g(
                            e,
                            function (e, t) {
                                return t && t.configSchema ? u({}, e, t.configSchema) : e;
                            },
                            this._schema
                        ),
                        e = g(
                            o(a),
                            function (e, t) {
                                var n = a[t].defaultValue(r[t]);
                                return r[t] !== undefined ? (a[t].validate(r[t]) ? (a[t].allowPartialObject ? (e.config[t] = u(n, r[t])) : (e.config[t] = r[t])) : ((e.errors[t] = a[t].message), (e.config[t] = n))) : (e.config[t] = n), e;
                            },
                            { errors: {}, config: {} }
                        ),
                        t = e.errors,
                        e = e.config;
                    if (a.apiKey) {
                        if (!e.apiKey) throw new Error("No Bugsnag API Key set");
                        /^[0-9a-f]{32}$/i.test(e.apiKey) || (t.apiKey = "should be a string of 32 hexadecimal characters");
                    }
                    return (
                        (this._metadata = u({}, e.metadata)),
                        ye(this._features, e.featureFlags, this._featuresIndex),
                        (this._user = u({}, e.user)),
                        (this._context = e.context),
                        e.logger && (this._logger = e.logger),
                        e.onError && (this._cbs.e = this._cbs.e.concat(e.onError)),
                        e.onBreadcrumb && (this._cbs.b = this._cbs.b.concat(e.onBreadcrumb)),
                        e.onSession && (this._cbs.s = this._cbs.s.concat(e.onSession)),
                        o(t).length && this._logger.warn(be(t, r)),
                        e
                    );
                }),
                (e.getUser = function () {
                    return this._user;
                }),
                (e.setUser = function (e, t, n) {
                    this._user = { id: e, email: t, name: n };
                }),
                (e._loadPlugin = function (e) {
                    var t = e.load(this);
                    return e.name && (this._plugins["~" + e.name + "~"] = t), this;
                }),
                (e.getPlugin = function (e) {
                    return this._plugins["~" + e + "~"];
                }),
                (e._setDelivery = function (e) {
                    this._delivery = e(this);
                }),
                (e.startSession = function () {
                    var e = new pe();
                    return (
                        (e.app.releaseStage = this._config.releaseStage),
                        (e.app.version = this._config.appVersion),
                        (e.app.type = this._config.appType),
                        (e._user = u({}, this._user)),
                        ee(this._cbs.s, e, "onSession", this._logger) ? (this._logger.debug("Session not started due to onSession callback"), this) : this._sessionDelegate.startSession(this, e)
                    );
                }),
                (e.addOnError = function (e, t) {
                    this._cbs.e[(t = void 0 === t ? !1 : t) ? "unshift" : "push"](e);
                }),
                (e.removeOnError = function (t) {
                    this._cbs.e = h(this._cbs.e, function (e) {
                        return e !== t;
                    });
                }),
                (e._addOnSessionPayload = function (e) {
                    this._cbs.sp.push(e);
                }),
                (e.addOnSession = function (e) {
                    this._cbs.s.push(e);
                }),
                (e.removeOnSession = function (t) {
                    this._cbs.s = h(this._cbs.s, function (e) {
                        return e !== t;
                    });
                }),
                (e.addOnBreadcrumb = function (e, t) {
                    this._cbs.b[(t = void 0 === t ? !1 : t) ? "unshift" : "push"](e);
                }),
                (e.removeOnBreadcrumb = function (t) {
                    this._cbs.b = h(this._cbs.b, function (e) {
                        return e !== t;
                    });
                }),
                (e.pauseSession = function () {
                    return this._sessionDelegate.pauseSession(this);
                }),
                (e.resumeSession = function () {
                    return this._sessionDelegate.resumeSession(this);
                }),
                (e.leaveBreadcrumb = function (e, t, n) {
                    (e = "string" == typeof e ? e : ""),
                        (n = "string" == typeof n && l(r, n) ? n : "manual"),
                        (t = "object" == typeof t && null !== t ? t : {}),
                        e &&
                            ((e = new S(e, t, n)),
                            ee(this._cbs.b, e, "onBreadcrumb", this._logger)
                                ? this._logger.debug("Breadcrumb not attached due to onBreadcrumb callback")
                                : (this._breadcrumbs.push(e), this._breadcrumbs.length > this._config.maxBreadcrumbs && (this._breadcrumbs = this._breadcrumbs.slice(this._breadcrumbs.length - this._config.maxBreadcrumbs))));
                }),
                (e._isBreadcrumbTypeEnabled = function (e) {
                    var t = this._config.enabledBreadcrumbTypes;
                    return null === t || l(t, e);
                }),
                (e.notify = function (e, t, n) {
                    void 0 === n && (n = c);
                    e = Q.create(e, !0, undefined, "notify()", this._depth + 1, this._logger);
                    this._notify(e, t, n);
                }),
                (e._notify = function (n, e, r) {
                    var a = this;
                    if (
                        (void 0 === r && (r = c),
                        (n.app = u({}, n.app, { releaseStage: this._config.releaseStage, version: this._config.appVersion, type: this._config.appType })),
                        (n.context = n.context || this._context),
                        (n._metadata = u({}, n._metadata, this._metadata)),
                        (n._user = u({}, n._user, this._user)),
                        (n.breadcrumbs = this._breadcrumbs.slice()),
                        ye(n._features, this._features, n._featuresIndex),
                        null !== this._config.enabledReleaseStages && !l(this._config.enabledReleaseStages, this._config.releaseStage))
                    )
                        return this._logger.warn("Event not sent due to releaseStage/enabledReleaseStages configuration"), r(null, n);
                    var o = n.severity,
                        i = function (e) {
                            a._logger.error("Error occurred in onError callback, continuing anywayâ€¦"), a._logger.error(e);
                        },
                        e = [].concat(this._cbs.e).concat(e);
                    Z(e, n, i, function (e, t) {
                        if ((e && i(e), !t)) return a._logger.debug("Event not sent due to onError callback"), r(null, n);
                        a._isBreadcrumbTypeEnabled("error") && s.prototype.leaveBreadcrumb.call(a, n.errors[0].errorClass, { errorClass: n.errors[0].errorClass, errorMessage: n.errors[0].errorMessage, severity: n.severity }, "error"),
                            o !== n.severity && (n._handledState.severityReason = { type: "userCallbackSetSeverity" }),
                            n.unhandled !== n._handledState.unhandled && ((n._handledState.severityReason.unhandledOverridden = !0), (n._handledState.unhandled = n.unhandled)),
                            a._session && (a._session._track(n), (n._session = a._session)),
                            a._delivery.sendEvent({ apiKey: n.apiKey || a._config.apiKey, notifier: a._notifier, events: [n] }, function (e) {
                                return r(e, n);
                            });
                    });
                }),
                s
            );
        })(),
        we = {},
        Ee = ["events.[].metaData", "events.[].breadcrumbs.[].metaData", "events.[].request"],
        Oe =
            ((we.event = function (e, t) {
                var n = j(e, null, null, { redactedPaths: Ee, redactedKeys: t });
                return (
                    1e6 < n.length && ((e.events[0]._metadata = { notifier: "WARNING!\nSerialized payload was " + n.length / 1e6 + "MB (limit = 1MB)\nmetadata was removed" }), (n = j(e, null, null, { redactedPaths: Ee, redactedKeys: t }))),
                    n
                );
            }),
            (we.session = function (e, t) {
                return j(e, null, null);
            }),
            function (e, t, n, r) {
                var a = JSON.parse(JSON.stringify(new Date()));
                return je(e.endpoints[t], r.location.protocol) + "?apiKey=" + encodeURIComponent(e.apiKey) + "&payloadVersion=" + n + "&sentAt=" + encodeURIComponent(a);
            }),
        je = ((fe = function (o, i) {
            return (
                void 0 === i && (i = window),
                {
                    sendEvent: function (e, t) {
                        void 0 === t && (t = function () {});
                        var n = Oe(o._config, "notify", "4", i),
                            r = we.event(e, o._config.redactedKeys),
                            a = new i.XDomainRequest();
                        (a.onload = function () {
                            t(null);
                        }),
                            (a.onerror = function () {
                                var e = new Error("Event failed to send");
                                o._logger.error("Event failed to sendâ€¦", e), 1e6 < r.length && o._logger.warn("Event oversized (" + (r.length / 1e6).toFixed(2) + " MB)"), t(e);
                            }),
                            a.open("POST", n),
                            setTimeout(function () {
                                try {
                                    a.send(r);
                                } catch (e) {
                                    o._logger.error(e), t(e);
                                }
                            }, 0);
                    },
                    sendSession: function (t, n) {
                        void 0 === n && (n = function () {});
                        var e = Oe(o._config, "sessions", "1", i),
                            r = new i.XDomainRequest();
                        (r.onload = function () {
                            n(null);
                        }),
                            r.open("POST", e),
                            setTimeout(function () {
                                try {
                                    r.send(we.session(t, o._config.redactedKeys));
                                } catch (e) {
                                    o._logger.error(e), n(e);
                                }
                            }, 0);
                    },
                }
            );
        })._matchPageProtocol = function (e, t) {
            return "http:" === t ? e.replace(/^https:/, "http:") : e;
        }),
        Ne = function (i, s) {
            return (
                void 0 === s && (s = window),
                {
                    sendEvent: function (e, t) {
                        void 0 === t && (t = function () {});
                        try {
                            var n = i._config.endpoints.notify,
                                r = new s.XMLHttpRequest(),
                                a = we.event(e, i._config.redactedKeys);
                            (r.onreadystatechange = function () {
                                var e;
                                r.readyState === s.XMLHttpRequest.DONE &&
                                    (0 === (e = r.status) || 400 <= e
                                        ? ((e = new Error("Request failed with status " + e)),
                                          i._logger.error("Event failed to sendâ€¦", e),
                                          1e6 < a.length && i._logger.warn("Event oversized (" + (a.length / 1e6).toFixed(2) + " MB)"),
                                          t(e))
                                        : t(null));
                            }),
                                r.open("POST", n),
                                r.setRequestHeader("Content-Type", "application/json"),
                                r.setRequestHeader("Bugsnag-Api-Key", e.apiKey || i._config.apiKey),
                                r.setRequestHeader("Bugsnag-Payload-Version", "4"),
                                r.setRequestHeader("Bugsnag-Sent-At", new Date().toISOString()),
                                r.send(a);
                        } catch (o) {
                            i._logger.error(o);
                        }
                    },
                    sendSession: function (e, t) {
                        void 0 === t && (t = function () {});
                        try {
                            var n = i._config.endpoints.sessions,
                                r = new s.XMLHttpRequest();
                            (r.onreadystatechange = function () {
                                var e;
                                r.readyState === s.XMLHttpRequest.DONE && (0 === (e = r.status) || 400 <= e ? ((e = new Error("Request failed with status " + e)), i._logger.error("Session failed to sendâ€¦", e), t(e)) : t(null));
                            }),
                                r.open("POST", n),
                                r.setRequestHeader("Content-Type", "application/json"),
                                r.setRequestHeader("Bugsnag-Api-Key", i._config.apiKey),
                                r.setRequestHeader("Bugsnag-Payload-Version", "1"),
                                r.setRequestHeader("Bugsnag-Sent-At", new Date().toISOString()),
                                r.send(we.session(e, i._config.redactedKeys));
                        } catch (a) {
                            i._logger.error(a);
                        }
                    },
                }
            );
        },
        xe = new Date(),
        ke = function () {
            xe = new Date();
        },
        Te = {
            name: "appDuration",
            load: function (e) {
                return (
                    e.addOnError(function (e) {
                        var t = new Date();
                        e.app.duration = t - xe;
                    }, !0),
                    { reset: ke }
                );
            },
        },
        Re = function (e, t) {
            e = "000000000" + e;
            return e.substr(e.length - t);
        },
        Le = "object" == typeof window ? window : self,
        Be = 0;
    for (ge in Le) Object.hasOwnProperty.call(Le, ge) && Be++;
    var e = navigator.mimeTypes ? navigator.mimeTypes.length : 0,
        qe = Re((e + navigator.userAgent.length).toString(36) + Be.toString(36), 4),
        Me = function () {
            return qe;
        },
        Ie = 0,
        Ae = 4,
        Ce = 36,
        De = Math.pow(Ce, Ae);
    function Fe() {
        return Re(((Math.random() * De) << 0).toString(Ce), Ae);
    }
    function Pe() {
        return "c" + new Date().getTime().toString(Ce) + Re(((Ie = Ie < De ? Ie : 0), (++Ie - 1).toString(Ce)), Ae) + Me() + (Fe() + Fe());
    }
    Pe.fingerprint = Me;
    var Ve = Pe,
        He = "bugsnag-anonymous-id",
        Ke = function (e) {
            try {
                var t = e.localStorage,
                    n = t.getItem(He);
                return n && /^c[a-z0-9]{20,32}$/.test(n) ? n : ((n = Ve()), t.setItem(He, n), n);
            } catch (r) {}
        },
        $e = function (e) {
            var t = e.getUser();
            (t && t.id) || e.setUser(e.device.id);
        },
        Ue = {
            load: function (e) {
                e._sessionDelegate = Xe;
            },
        },
        Xe = {
            startSession: function (e, t) {
                return (
                    (e._session = t),
                    (e._pausedSession = null) === e._config.enabledReleaseStages || l(e._config.enabledReleaseStages, e._config.releaseStage)
                        ? e._delivery.sendSession({ notifier: e._notifier, device: t.device, app: t.app, sessions: [{ id: t.id, startedAt: t.startedAt, user: t._user }] })
                        : e._logger.warn("Session not sent due to releaseStage/enabledReleaseStages configuration"),
                    e
                );
            },
            resumeSession: function (e) {
                return e._session ? e : e._pausedSession ? ((e._session = e._pausedSession), (e._pausedSession = null), e) : e.startSession();
            },
            pauseSession: function (e) {
                (e._pausedSession = e._session), (e._session = null);
            },
        },
        Je = {
            load: function (e) {
                e._config.collectUserIp ||
                    e.addOnError(function (e) {
                        e._user && "undefined" == typeof e._user.id && delete e._user.id, (e._user = u({ id: "[REDACTED]" }, e._user)), (e.request = u({ clientIp: "[REDACTED]" }, e.request));
                    });
            },
            configSchema: {
                collectUserIp: {
                    defaultValue: function () {
                        return !0;
                    },
                    message: "should be true|false",
                    validate: function (e) {
                        return !0 === e || !1 === e;
                    },
                },
            },
        },
        ze = {
            load: function (o) {
                !/^(local-)?dev(elopment)?$/.test(o._config.releaseStage) &&
                    o._isBreadcrumbTypeEnabled("log") &&
                    p(We, function (r) {
                        var a = console[r];
                        (console[r] = function () {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            o.leaveBreadcrumb(
                                "Console output",
                                g(
                                    t,
                                    function (e, t, n) {
                                        var r = "[Unknown value]";
                                        try {
                                            r = String(t);
                                        } catch (a) {}
                                        if ("[object Object]" === r)
                                            try {
                                                r = JSON.stringify(t);
                                            } catch (a) {}
                                        return (e["[" + n + "]"] = r), e;
                                    },
                                    { severity: 0 === r.indexOf("group") ? "log" : r }
                                ),
                                "log"
                            ),
                                a.apply(console, t);
                        }),
                            (console[r]._restore = function () {
                                console[r] = a;
                            });
                    });
            },
        },
        We = h(["log", "debug", "info", "warn", "error"], function (e) {
            return "undefined" != typeof console && "function" == typeof console[e];
        }),
        Ge = 200,
        Qe = 5e5,
        Ye = function (d, f) {
            return (
                void 0 === d && (d = document),
                void 0 === f && (f = window),
                {
                    load: function (e) {
                        var a, o, i, s, t, n, u, c, l;
                        function r(o, i, s) {
                            return (
                                void 0 === s && (s = !1),
                                function () {
                                    var e = [].slice.call(arguments);
                                    try {
                                        var t,
                                            n = i(e),
                                            r = n.get();
                                        if ((s && o.apply(this, e), "function" != typeof r)) return o.apply(this, e);
                                        r.__trace__ ||
                                            ((t = c()),
                                            (r.__trace__ = function () {
                                                u(t),
                                                    l(function () {
                                                        u(null);
                                                    }, 0);
                                                var e = r.apply(this, arguments);
                                                return u(null), e;
                                            }),
                                            (r.__trace__.__trace__ = r.__trace__)),
                                            n.replace(r.__trace__);
                                    } catch (a) {}
                                    if (o.apply) return o.apply(this, e);
                                    switch (e.length) {
                                        case 1:
                                            return o(e[0]);
                                        case 2:
                                            return o(e[0], e[1]);
                                        default:
                                            return o();
                                    }
                                }
                            );
                        }
                        e._config.trackInlineScripts &&
                            ((a = f.location.href),
                            (s = ""),
                            (o = !!d.attachEvent ? "complete" === d.readyState : "loading" !== d.readyState),
                            (s = (i = function () {
                                return d.documentElement.outerHTML;
                            })()),
                            (t = d.onreadystatechange),
                            (d.onreadystatechange = function () {
                                "interactive" === d.readyState && ((s = i()), (o = !0));
                                try {
                                    t.apply(this, arguments);
                                } catch (e) {}
                            }),
                            (n = null),
                            (u = function (e) {
                                n = e;
                            }),
                            (c = function () {
                                var e,
                                    t = d.currentScript || n;
                                return (t = t || o ? t : (e = d.scripts || d.getElementsByTagName("script"))[e.length - 1]);
                            }),
                            e.addOnError(function (e) {
                                e.errors[0].stacktrace = h(e.errors[0].stacktrace, function (e) {
                                    return !/__trace__$/.test(e.method);
                                });
                                var r,
                                    t = e.errors[0].stacktrace[0],
                                    n = function (e) {
                                        return e.replace(/#.*$/, "").replace(/\?.*$/, "");
                                    };
                                (t && t.file && n(t.file) !== n(a)) ||
                                    ((n = c()) &&
                                        ((n = n.innerHTML),
                                        e.addMetadata("script", "content", n.length <= Qe ? n : n.substr(0, Qe)),
                                        t &&
                                            t.lineNumber &&
                                            (t.code =
                                                ((n = t.lineNumber),
                                                (o && s) || (s = i()),
                                                (e = ["\x3c!-- DOC START --\x3e"].concat(s.split("\n"))),
                                                (n -= 1),
                                                (r = Math.max(n - 3, 0)),
                                                (n = Math.min(3 + n, e.length)),
                                                g(
                                                    e.slice(r, n),
                                                    function (e, t, n) {
                                                        return (e[r + 1 + n] = t.length <= Ge ? t : t.substr(0, Ge)), e;
                                                    },
                                                    {}
                                                )))));
                            }, !0),
                            (l = p(["setTimeout", "setInterval", "setImmediate", "requestAnimationFrame"], function (e) {
                                return Ze(f, e, function (e) {
                                    return r(e, function (t) {
                                        return {
                                            get: function () {
                                                return t[0];
                                            },
                                            replace: function (e) {
                                                t[0] = e;
                                            },
                                        };
                                    });
                                });
                            })[0]),
                            p(
                                [
                                    "EventTarget",
                                    "Window",
                                    "Node",
                                    "ApplicationCache",
                                    "AudioTrackList",
                                    "ChannelMergerNode",
                                    "CryptoOperation",
                                    "EventSource",
                                    "FileReader",
                                    "HTMLUnknownElement",
                                    "IDBDatabase",
                                    "IDBRequest",
                                    "IDBTransaction",
                                    "KeyOperation",
                                    "MediaController",
                                    "MessagePort",
                                    "ModalWindow",
                                    "Notification",
                                    "SVGElementInstance",
                                    "Screen",
                                    "TextTrack",
                                    "TextTrackCue",
                                    "TextTrackList",
                                    "WebSocket",
                                    "WebSocketWorker",
                                    "Worker",
                                    "XMLHttpRequest",
                                    "XMLHttpRequestEventTarget",
                                    "XMLHttpRequestUpload",
                                ],
                                function (e) {
                                    f[e] &&
                                        f[e].prototype &&
                                        Object.prototype.hasOwnProperty.call(f[e].prototype, "addEventListener") &&
                                        (Ze(f[e].prototype, "addEventListener", function (e) {
                                            return r(e, et);
                                        }),
                                        Ze(f[e].prototype, "removeEventListener", function (e) {
                                            return r(e, et, !0);
                                        }));
                                }
                            ));
                    },
                    configSchema: {
                        trackInlineScripts: {
                            validate: function (e) {
                                return !0 === e || !1 === e;
                            },
                            defaultValue: function () {
                                return !0;
                            },
                            message: "should be true|false",
                        },
                    },
                }
            );
        };
    function Ze(e, t, n) {
        var r = e[t];
        if (!r) return r;
        n = n(r);
        return (e[t] = n), r;
    }
    function et(t) {
        var n = !!t[1] && "function" == typeof t[1].handleEvent;
        return {
            get: function () {
                return n ? t[1].handleEvent : t[1];
            },
            replace: function (e) {
                n ? (t[1].handleEvent = e) : (t[1] = e);
            },
        };
    }
    var tt = function (i) {
            return (
                void 0 === i && (i = window),
                {
                    load: function (a) {
                        "addEventListener" in i &&
                            a._isBreadcrumbTypeEnabled("user") &&
                            i.addEventListener(
                                "click",
                                function (e) {
                                    var t, n;
                                    try {
                                        (t = (function (e) {
                                            var t = e.textContent || e.innerText || "";
                                            t || ("submit" !== e.type && "button" !== e.type) || (t = e.value);
                                            if (140 < (t = t.replace(nt, "").replace(rt, "$1")).length) return t.slice(0, 135) + "(...)";
                                            return t;
                                        })(e.target)),
                                            (n = (function o(e, t) {
                                                var n = [e.tagName];
                                                e.id && n.push("#" + e.id);
                                                e.className && e.className.length && n.push("." + e.className.split(" ").join("."));
                                                if (!t.document.querySelectorAll || !Array.prototype.indexOf) return n.join("");
                                                try {
                                                    if (1 === t.document.querySelectorAll(n.join("")).length) return n.join("");
                                                } catch (a) {
                                                    return n.join("");
                                                }
                                                {
                                                    var r;
                                                    1 < e.parentNode.childNodes.length && ((r = Array.prototype.indexOf.call(e.parentNode.childNodes, e) + 1), n.push(":nth-child(" + r + ")"));
                                                }
                                                if (1 === t.document.querySelectorAll(n.join("")).length) return n.join("");
                                                if (e.parentNode) return o(e.parentNode, t) + " > " + n.join("");
                                                return n.join("");
                                            })(e.target, i));
                                    } catch (r) {
                                        (n = t = "[hidden]"), a._logger.error("Cross domain error when tracking click event. See docs: https://tinyurl.com/yy3rn63z");
                                    }
                                    a.leaveBreadcrumb("UI click", { targetText: t, targetSelector: n }, "user");
                                },
                                !0
                            );
                    },
                }
            );
        },
        nt = /^\s+/,
        rt = /(^|[^\s])\s+$/;
    var at = function (n) {
            void 0 === n && (n = window);
            var e = {
                load: function (t) {
                    var e;
                    "addEventListener" in n &&
                        t._isBreadcrumbTypeEnabled("navigation") &&
                        (n.addEventListener(
                            "pagehide",
                            (e = function (e) {
                                return function () {
                                    return t.leaveBreadcrumb(e, {}, "navigation");
                                };
                            })("Page hidden"),
                            !0
                        ),
                        n.addEventListener("pageshow", e("Page shown"), !0),
                        n.addEventListener("load", e("Page loaded"), !0),
                        n.document.addEventListener("DOMContentLoaded", e("DOMContentLoaded"), !0),
                        n.addEventListener("load", function () {
                            return n.addEventListener("popstate", e("Navigated back"), !0);
                        }),
                        n.addEventListener(
                            "hashchange",
                            function (e) {
                                e = e.oldURL ? { from: ot(e.oldURL, n), to: ot(e.newURL, n), state: ut(n) } : { to: ot(n.location.href, n) };
                                t.leaveBreadcrumb("Hash changed", e, "navigation");
                            },
                            !0
                        ),
                        n.history.replaceState && st(t, n.history, "replaceState", n),
                        n.history.pushState && st(t, n.history, "pushState", n));
                },
            };
            return e;
        },
        ot = function (e, t) {
            t = t.document.createElement("A");
            return (t.href = e), "" + t.pathname + t.search + t.hash;
        },
        it = function (e, t, n, r) {
            var a = ot(e.location.href, e);
            return { title: n, state: t, prevState: ut(e), to: r || a, from: a };
        },
        st = function (r, a, o, i) {
            var s = a[o];
            a[o] = function (e, t, n) {
                r.leaveBreadcrumb("History " + o, it(i, e, t, n), "navigation"),
                    "function" == typeof r.resetEventCount && r.resetEventCount(),
                    r._config.autoTrackSessions && r.startSession(),
                    s.apply(a, [e, t].concat(n !== undefined ? n : []));
            };
        },
        ut = function (e) {
            try {
                return e.history.state;
            } catch (t) {}
        },
        ct = "request",
        lt = function (e, t) {
            void 0 === e && (e = []), void 0 === t && (t = window);
            var n = {
                load: function (i) {
                    var s, n, o, u, c;
                    i._isBreadcrumbTypeEnabled("request") &&
                        ((s = [i._config.endpoints.notify, i._config.endpoints.sessions].concat(e)),
                        "addEventListener" in t.XMLHttpRequest.prototype &&
                            ((n = t.XMLHttpRequest.prototype.open),
                            (t.XMLHttpRequest.prototype.open = function (r, a) {
                                var o = this,
                                    e = function () {
                                        var e, t;
                                        (e = r),
                                            (t = a) !== undefined
                                                ? ("string" == typeof t && l(s, t.replace(/\?.*$/, ""))) || i.leaveBreadcrumb("XMLHttpRequest error", { request: e + " " + t }, ct)
                                                : i._logger.warn("The request URL is no longer present on this XMLHttpRequest. A breadcrumb cannot be left for this request.");
                                    },
                                    t = function () {
                                        var e, t, n;
                                        (e = r),
                                            (t = a),
                                            (n = o.status),
                                            t !== undefined
                                                ? ("string" == typeof t && l(s, t.replace(/\?.*$/, ""))) ||
                                                  ((e = { status: n, request: e + " " + t }), 400 <= n ? i.leaveBreadcrumb("XMLHttpRequest failed", e, ct) : i.leaveBreadcrumb("XMLHttpRequest succeeded", e, ct))
                                                : i._logger.warn("The request URL is no longer present on this XMLHttpRequest. A breadcrumb cannot be left for this request.");
                                    };
                                this.addEventListener("load", t), this.addEventListener("error", e), n.apply(this, arguments);
                            })),
                        "fetch" in t &&
                            !t.fetch.polyfill &&
                            ((o = t.fetch),
                            (t.fetch = function () {
                                var r,
                                    e = arguments,
                                    t = arguments[0],
                                    n = arguments[1],
                                    a = null;
                                return (
                                    t && "object" == typeof t ? ((a = t.url), n && "method" in n ? (r = n.method) : t && "method" in t && (r = t.method)) : ((a = t), n && "method" in n && (r = n.method)),
                                    r === undefined && (r = "GET"),
                                    new Promise(function (t, n) {
                                        o.apply(void 0, e)
                                            .then(function (e) {
                                                u(e, r, a), t(e);
                                            })
                                            ["catch"](function (e) {
                                                c(r, a), n(e);
                                            });
                                    })
                                );
                            })),
                        (u = function (e, t, n) {
                            t = { status: e.status, request: t + " " + n };
                            400 <= e.status ? i.leaveBreadcrumb("fetch() failed", t, ct) : i.leaveBreadcrumb("fetch() succeeded", t, ct);
                        }),
                        (c = function (e, t) {
                            i.leaveBreadcrumb("fetch() error", { request: e + " " + t }, ct);
                        }));
                },
            };
            return n;
        },
        dt = {
            load: function (t) {
                var n = 0;
                t.addOnError(function (e) {
                    if (n >= t._config.maxEvents) return t._logger.warn("Cancelling event send due to maxEvents per session limit of " + t._config.maxEvents + " being reached"), !1;
                    n++;
                }),
                    (t.resetEventCount = function () {
                        n = 0;
                    });
            },
            configSchema: {
                maxEvents: {
                    defaultValue: function () {
                        return 10;
                    },
                    message: "should be a positive integer â‰¤100",
                    validate: function (e) {
                        return t(1, 100)(e);
                    },
                },
            },
        },
        ft = {},
        gt = ((ft = {
            load: function (e) {
                e.addOnError(function (e) {
                    e = g(
                        e.errors,
                        function (e, t) {
                            return e.concat(t.stacktrace);
                        },
                        []
                    );
                    p(e, function (e) {
                        e.file = gt(e.file);
                    });
                });
            },
        })._strip = function (e) {
            return "string" == typeof e ? e.replace(/\?.*$/, "").replace(/#.*$/, "") : e;
        }),
        ht = function (e, d) {
            return (
                void 0 === e && (e = window),
                void 0 === d && (d = "window onerror"),
                {
                    load: function (c) {
                        var l;
                        c._config.autoDetectErrors &&
                            c._config.enabledErrorTypes.unhandledExceptions &&
                            ((l = e.onerror),
                            (e.onerror = function (e, t, n, r, a) {
                                var o, i, s, u;
                                0 === n && /Script error\.?/.test(e)
                                    ? c._logger.warn("Ignoring cross-domain or eval script error. See docs: https://tinyurl.com/yy3rn63z")
                                    : ((o = { severity: "error", unhandled: !0, severityReason: { type: "unhandledException" } }),
                                      a
                                          ? ((u = c.Event.create(a, !0, o, d, 1)), pt(u.errors[0].stacktrace, t, n, r))
                                          : "object" != typeof e || null === e || (t && "string" == typeof t) || n || r || a
                                          ? ((u = c.Event.create(e, !0, o, d, 1)), pt(u.errors[0].stacktrace, t, n, r))
                                          : ((i = e.type ? "Event: " + e.type : "Error"),
                                            (s = e.message || e.detail || ""),
                                            ((u = c.Event.create({ name: i, message: s }, !0, o, d, 1)).originalError = e),
                                            u.addMetadata(d, { event: e, extraParameters: t })),
                                      c._notify(u)),
                                    "function" == typeof l && l.apply(this, arguments);
                            }));
                    },
                }
            );
        },
        pt = function (e, t, n, r) {
            e[0] || e.push({});
            e = e[0];
            e.file || "string" != typeof t || (e.file = t),
                !e.lineNumber && mt(n) && (e.lineNumber = n),
                e.columnNumber || (mt(r) ? (e.columnNumber = r) : window.event && mt(window.event.errorCharacter) && (e.columnNumber = window.event.errorCharacter));
        },
        mt = function (e) {
            return "number" == typeof e && "NaN" !== String.call(e);
        },
        vt = function (t) {
            return function (e) {
                e.file !== t.toString() && e.method && (e.method = e.method.replace(/^\s+/, ""));
            };
        },
        e = {},
        yt = u({}, v.schema, a),
        n = {
            _client: null,
            createClient: function (e) {
                e = (e = "string" == typeof e ? { apiKey: e } : e) || {};
                var t,
                    n,
                    r,
                    a,
                    o,
                    i = [
                        Te,
                        (void 0 === a && (a = navigator),
                        void 0 === o && (o = window),
                        {
                            load: function (t) {
                                var n = { locale: a.browserLanguage || a.systemLanguage || a.userLanguage || a.language, userAgent: a.userAgent };
                                o && o.screen && o.screen.orientation && o.screen.orientation.type
                                    ? (n.orientation = o.screen.orientation.type)
                                    : o && o.document && (n.orientation = o.document.documentElement.clientWidth > o.document.documentElement.clientHeight ? "landscape" : "portrait"),
                                    t._config.generateAnonymousId && (n.id = Ke(o)),
                                    t.addOnSession(function (e) {
                                        (e.device = u({}, e.device, n)), t._config.collectUserIp || $e(e);
                                    }),
                                    t.addOnError(function (e) {
                                        (e.device = u({}, e.device, n, { time: new Date() })), t._config.collectUserIp || $e(e);
                                    }, !0);
                            },
                            configSchema: {
                                generateAnonymousId: {
                                    validate: function (e) {
                                        return !0 === e || !1 === e;
                                    },
                                    defaultValue: function () {
                                        return !0;
                                    },
                                    message: "should be true|false",
                                },
                            },
                        }),
                        (void 0 === r && (r = window),
                        {
                            load: function (e) {
                                e.addOnError(function (e) {
                                    e.context === undefined && (e.context = r.location.pathname);
                                }, !0);
                            },
                        }),
                        (void 0 === n && (n = window),
                        {
                            load: function (e) {
                                e.addOnError(function (e) {
                                    (e.request && e.request.url) || (e.request = u({}, e.request, { url: n.location.href }));
                                }, !0);
                            },
                        }),
                        dt,
                        Ue,
                        Je,
                        ft,
                        ht(),
                        (void 0 === t && (t = window),
                        {
                            load: function (a) {
                                var n;
                                a._config.autoDetectErrors &&
                                    a._config.enabledErrorTypes.unhandledRejections &&
                                    ((n = function (e) {
                                        var t = e.reason,
                                            n = !1;
                                        try {
                                            e.detail && e.detail.reason && ((t = e.detail.reason), (n = !0));
                                        } catch (r) {}
                                        e = a.Event.create(t, !1, { severity: "error", unhandled: !0, severityReason: { type: "unhandledPromiseRejection" } }, "unhandledrejection handler", 1, a._logger);
                                        n && p(e.errors[0].stacktrace, vt(t)),
                                            a._notify(e, function (e) {
                                                var t;
                                                A(e.originalError) &&
                                                    !e.originalError.stack &&
                                                    e.addMetadata(
                                                        "unhandledRejection handler",
                                                        (((t = {})[Object.prototype.toString.call(e.originalError)] = { name: e.originalError.name, message: e.originalError.message, code: e.originalError.code }), t)
                                                    );
                                            });
                                    }),
                                    "addEventListener" in t
                                        ? t.addEventListener("unhandledrejection", n)
                                        : (t.onunhandledrejection = function (e, t) {
                                              n({ detail: { reason: e, promise: t } });
                                          }),
                                    0);
                            },
                        }),
                        at(),
                        tt(),
                        lt(),
                        ze,
                        Ye(),
                    ],
                    e = new Se(e, yt, i, { name: "Bugsnag JavaScript", version: "7.21.0", url: "https://github.com/bugsnag/bugsnag-js" });
                return e._setDelivery(window.XDomainRequest ? fe : Ne), e._logger.debug("Loaded!"), e.leaveBreadcrumb("Bugsnag loaded", {}, "state"), e._config.autoTrackSessions ? e.startSession() : e;
            },
            start: function (e) {
                return n._client ? n._client._logger.warn("Bugsnag.start() was called more than once. Ignoring.") : (n._client = n.createClient(e)), n._client;
            },
            isStarted: function () {
                return null != n._client;
            },
        };
    return (
        p(["resetEventCount"].concat(o(Se.prototype)), function (t) {
            /^_/.test(t) ||
                (n[t] = function () {
                    if (!n._client) return console.log("Bugsnag." + t + "() was called before Bugsnag.start()");
                    n._client._depth += 1;
                    var e = n._client[t].apply(n._client, arguments);
                    return --n._client._depth, e;
                });
        }),
        ((e = n).Client = Se),
        (e.Event = Q),
        (e.Session = pe),
        (e.Breadcrumb = S),
        (e["default"] = n),
        e
    );
});
//# sourceMappingURL=bugsnag.min.js.map

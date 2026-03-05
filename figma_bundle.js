const oh = () => Promise.resolve().then(() => sh), { Fragment: _r, jsx: d, jsxs: p } = globalThis.__GLOBALS__.ReactJSXRuntime;
"use" in globalThis.__GLOBALS__.React || (globalThis.__GLOBALS__.React.use = () => {
  throw new Error("`use` is not available in this version of React. Make currently only supports React 18, but `use` is only available in React 19+.");
});
function Hr(t) {
  return globalThis.__GLOBALS__.React.isValidElement(t) && t.props && "_fgT" in t.props;
}
function Nt(t) {
  return globalThis.__GLOBALS__.React.isValidElement(t) && t.type === "fg-txt";
}
function Ur(t) {
  const { _fgT: e, _fgS: n, _fgB: i, _fgD: s, ...o } = t.props;
  return globalThis.__GLOBALS__.React.createElement(e, {
    ...o,
    key: t.key
  }, o.children);
}
function Wt(t) {
  return Hr(t) ? Ur(t) : Nt(t) ? t.props.children : t;
}
const Mt = globalThis.__GLOBALS__.React.Children, Wr = {
  map(t, e, n) {
    return Mt.map(t, (i, s) => {
      const o = Wt(i);
      return Nt(i) ? null : e.call(n, o, s);
    });
  },
  forEach(t, e, n) {
    Mt.forEach(t, (i, s) => {
      if (Nt(i))
        return;
      const o = Wt(i);
      e.call(n, o, s);
    });
  },
  count(t) {
    let e = 0;
    return Mt.forEach(t, (n) => {
      Nt(n) || e++;
    }), e;
  },
  toArray(t) {
    const e = [];
    return Mt.forEach(t, (n) => {
      Nt(n) || e.push(Wt(n));
    }), e;
  },
  only(t) {
    const e = Mt.only(t);
    return Wt(e);
  }
};
globalThis.__GLOBALS__.React;
const { cloneElement: Gr, Component: Ji, createContext: Tt, createElement: te, createFactory: ah, createRef: lh, forwardRef: Xe, Fragment: Zi, isValidElement: Kr, lazy: ch, memo: uh, Profiler: hh, PureComponent: dh, startTransition: fh, StrictMode: mh, Suspense: ph, use: gh, useCallback: Ye, useContext: I, useDebugValue: yh, useDeferredValue: xh, useEffect: ae, useId: qe, useImperativeHandle: vh, useInsertionEffect: Qi, useLayoutEffect: Xr, useMemo: dt, useReducer: bh, useRef: et, useState: ee, useSyncExternalStore: wh, useTransition: Th, version: Ph } = globalThis.__GLOBALS__.React;
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yr = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), qr = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, n, i) => i ? i.toUpperCase() : n.toLowerCase()
), Ln = (t) => {
  const e = qr(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, ts = (...t) => t.filter((e, n, i) => !!e && e.trim() !== "" && i.indexOf(e) === n).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Jr = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zr = Xe(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: i,
    className: s = "",
    children: o,
    iconNode: r,
    ...a
  }, l) => te(
    "svg",
    {
      ref: l,
      ...Jr,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: i ? Number(n) * 24 / Number(e) : n,
      className: ts("lucide", s),
      ...a
    },
    [
      ...r.map(([u, c]) => te(u, c)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q = (t, e) => {
  const n = Xe(
    ({ className: i, ...s }, o) => te(Zr, {
      ref: o,
      iconNode: e,
      className: ts(
        `lucide-${Yr(Ln(t))}`,
        `lucide-${t}`,
        i
      ),
      ...s
    })
  );
  return n.displayName = Ln(t), n;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qr = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], to = q("arrow-right", Qr);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eo = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
], no = q("arrow-up-right", eo);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const io = [
  [
    "path",
    { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
  ]
], es = q("facebook", io);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const so = [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
], ns = q("instagram", so);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ro = [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
], is = q("mail", ro);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oo = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], ss = q("map-pin", oo);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ao = [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
], In = q("menu", ao);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lo = [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
], rs = q("phone", lo);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const co = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
], Fn = q("star", co);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uo = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], os = q("x", uo);
function ho({ onOpenMenu: t }) {
  return /* @__PURE__ */ d("nav", { className: "fixed top-0 left-0 right-0 z-40 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50", children: /* @__PURE__ */ p("div", { className: "max-w-7xl mx-auto px-6 h-20 flex items-center justify-between", children: [
    /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ p("span", { className: "font-[Playfair_Display] text-2xl font-semibold tracking-wide text-zinc-100", children: [
      "CRAVINGS ",
      /* @__PURE__ */ d("span", { className: "text-amber-500 text-sm font-[Inter] tracking-widest align-top block sm:inline sm:ml-2", children: "LATE NIGHT" })
    ] }) }),
    /* @__PURE__ */ p("div", { className: "hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-zinc-400", children: [
      /* @__PURE__ */ d("a", { href: "#about", className: "hover:text-zinc-100 transition-colors", children: "Our Story" }),
      /* @__PURE__ */ d("a", { href: "#featured", className: "hover:text-zinc-100 transition-colors", children: "Featured" }),
      /* @__PURE__ */ d("a", { href: "#reviews", className: "hover:text-zinc-100 transition-colors", children: "Reviews" }),
      /* @__PURE__ */ d("a", { href: "#find-us", className: "hover:text-zinc-100 transition-colors", children: "Find Us" }),
      /* @__PURE__ */ p(
        "button",
        {
          onClick: t,
          className: "text-zinc-100 hover:text-amber-500 transition-colors flex items-center gap-2 ml-4",
          children: [
            /* @__PURE__ */ d("span", { children: "Menu" }),
            /* @__PURE__ */ d(In, { className: "w-4 h-4" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ d(
      "button",
      {
        onClick: t,
        className: "md:hidden text-zinc-300 hover:text-zinc-100 transition-colors p-2",
        children: /* @__PURE__ */ d(In, { className: "w-6 h-6" })
      }
    )
  ] }) });
}
const Je = Tt({});
function Ze(t) {
  const e = et(null);
  return e.current === null && (e.current = t()), e.current;
}
const Qe = typeof window < "u", as = Qe ? Xr : ae, le = /* @__PURE__ */ Tt(null);
function tn(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function en(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
const J = (t, e, n) => n > e ? e : n < t ? t : n;
let nn = () => {
};
const Z = {}, ls = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
function cs(t) {
  return typeof t == "object" && t !== null;
}
const us = (t) => /^0[^.\s]+$/u.test(t);
// @__NO_SIDE_EFFECTS__
function sn(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const W = /* @__NO_SIDE_EFFECTS__ */ (t) => t, fo = (t, e) => (n) => e(t(n)), $t = (...t) => t.reduce(fo), Lt = /* @__NO_SIDE_EFFECTS__ */ (t, e, n) => {
  const i = e - t;
  return i === 0 ? 1 : (n - t) / i;
};
class rn {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return tn(this.subscriptions, e), () => en(this.subscriptions, e);
  }
  notify(e, n, i) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1)
        this.subscriptions[0](e, n, i);
      else
        for (let o = 0; o < s; o++) {
          const r = this.subscriptions[o];
          r && r(e, n, i);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const X = /* @__NO_SIDE_EFFECTS__ */ (t) => t * 1e3, U = /* @__NO_SIDE_EFFECTS__ */ (t) => t / 1e3;
function hs(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const ds = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, mo = 1e-7, po = 12;
function go(t, e, n, i, s) {
  let o, r, a = 0;
  do
    r = e + (n - e) / 2, o = ds(r, i, s) - t, o > 0 ? n = r : e = r;
  while (Math.abs(o) > mo && ++a < po);
  return r;
}
function _t(t, e, n, i) {
  if (t === e && n === i)
    return W;
  const s = (o) => go(o, 0, 1, t, n);
  return (o) => o === 0 || o === 1 ? o : ds(s(o), e, i);
}
const fs = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, ms = (t) => (e) => 1 - t(1 - e), ps = /* @__PURE__ */ _t(0.33, 1.53, 0.69, 0.99), on = /* @__PURE__ */ ms(ps), gs = /* @__PURE__ */ fs(on), ys = (t) => (t *= 2) < 1 ? 0.5 * on(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), an = (t) => 1 - Math.sin(Math.acos(t)), xs = ms(an), vs = fs(an), yo = /* @__PURE__ */ _t(0.42, 0, 1, 1), xo = /* @__PURE__ */ _t(0, 0, 0.58, 1), bs = /* @__PURE__ */ _t(0.42, 0, 0.58, 1), vo = (t) => Array.isArray(t) && typeof t[0] != "number", ws = (t) => Array.isArray(t) && typeof t[0] == "number", bo = {
  linear: W,
  easeIn: yo,
  easeInOut: bs,
  easeOut: xo,
  circIn: an,
  circInOut: vs,
  circOut: xs,
  backIn: on,
  backInOut: gs,
  backOut: ps,
  anticipate: ys
}, wo = (t) => typeof t == "string", jn = (t) => {
  if (ws(t)) {
    nn(t.length === 4);
    const [e, n, i, s] = t;
    return _t(e, n, i, s);
  } else if (wo(t))
    return bo[t];
  return t;
}, Gt = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function To(t, e) {
  let n = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), s = !1, o = !1;
  const r = /* @__PURE__ */ new WeakSet();
  let a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function l(c) {
    r.has(c) && (u.schedule(c), t()), c(a);
  }
  const u = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (c, h = !1, f = !1) => {
      const g = f && s ? n : i;
      return h && r.add(c), g.has(c) || g.add(c), c;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (c) => {
      i.delete(c), r.delete(c);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (c) => {
      if (a = c, s) {
        o = !0;
        return;
      }
      s = !0, [n, i] = [i, n], n.forEach(l), n.clear(), s = !1, o && (o = !1, u.process(c));
    }
  };
  return u;
}
const Po = 40;
function Ts(t, e) {
  let n = !1, i = !0;
  const s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => n = !0, r = Gt.reduce((v, A) => (v[A] = To(o), v), {}), { setup: a, read: l, resolveKeyframes: u, preUpdate: c, update: h, preRender: f, render: m, postRender: g } = r, x = () => {
    const v = Z.useManualTiming ? s.timestamp : performance.now();
    n = !1, Z.useManualTiming || (s.delta = i ? 1e3 / 60 : Math.max(Math.min(v - s.timestamp, Po), 1)), s.timestamp = v, s.isProcessing = !0, a.process(s), l.process(s), u.process(s), c.process(s), h.process(s), f.process(s), m.process(s), g.process(s), s.isProcessing = !1, n && e && (i = !1, t(x));
  }, b = () => {
    n = !0, i = !0, s.isProcessing || t(x);
  };
  return { schedule: Gt.reduce((v, A) => {
    const T = r[A];
    return v[A] = (M, V = !1, S = !1) => (n || b(), T.schedule(M, V, S)), v;
  }, {}), cancel: (v) => {
    for (let A = 0; A < Gt.length; A++)
      r[Gt[A]].cancel(v);
  }, state: s, steps: r };
}
const { schedule: N, cancel: nt, state: L, steps: de } = /* @__PURE__ */ Ts(typeof requestAnimationFrame < "u" ? requestAnimationFrame : W, !0);
let qt;
function So() {
  qt = void 0;
}
const O = {
  now: () => (qt === void 0 && O.set(L.isProcessing || Z.useManualTiming ? L.timestamp : performance.now()), qt),
  set: (t) => {
    qt = t, queueMicrotask(So);
  }
}, Ps = (t) => (e) => typeof e == "string" && e.startsWith(t), ln = /* @__PURE__ */ Ps("--"), Ao = /* @__PURE__ */ Ps("var(--"), cn = (t) => Ao(t) ? Mo.test(t.split("/*")[0].trim()) : !1, Mo = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Pt = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, It = {
  ...Pt,
  transform: (t) => J(0, 1, t)
}, Kt = {
  ...Pt,
  default: 1
}, Dt = (t) => Math.round(t * 1e5) / 1e5, un = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Vo(t) {
  return t == null;
}
const No = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, hn = (t, e) => (n) => !!(typeof n == "string" && No.test(n) && n.startsWith(t) || e && !Vo(n) && Object.prototype.hasOwnProperty.call(n, e)), Ss = (t, e, n) => (i) => {
  if (typeof i != "string")
    return i;
  const [s, o, r, a] = i.match(un);
  return {
    [t]: parseFloat(s),
    [e]: parseFloat(o),
    [n]: parseFloat(r),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, Co = (t) => J(0, 255, t), fe = {
  ...Pt,
  transform: (t) => Math.round(Co(t))
}, lt = {
  test: /* @__PURE__ */ hn("rgb", "red"),
  parse: /* @__PURE__ */ Ss("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) => "rgba(" + fe.transform(t) + ", " + fe.transform(e) + ", " + fe.transform(n) + ", " + Dt(It.transform(i)) + ")"
};
function Do(t) {
  let e = "", n = "", i = "", s = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), s = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), s = t.substring(4, 5), e += e, n += n, i += i, s += s), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(i, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  };
}
const Ve = {
  test: /* @__PURE__ */ hn("#"),
  parse: Do,
  transform: lt.transform
}, Ht = /* @__NO_SIDE_EFFECTS__ */ (t) => ({
  test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), tt = /* @__PURE__ */ Ht("deg"), Y = /* @__PURE__ */ Ht("%"), P = /* @__PURE__ */ Ht("px"), ko = /* @__PURE__ */ Ht("vh"), Ro = /* @__PURE__ */ Ht("vw"), Bn = {
  ...Y,
  parse: (t) => Y.parse(t) / 100,
  transform: (t) => Y.transform(t * 100)
}, mt = {
  test: /* @__PURE__ */ hn("hsl", "hue"),
  parse: /* @__PURE__ */ Ss("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: i = 1 }) => "hsla(" + Math.round(t) + ", " + Y.transform(Dt(e)) + ", " + Y.transform(Dt(n)) + ", " + Dt(It.transform(i)) + ")"
}, R = {
  test: (t) => lt.test(t) || Ve.test(t) || mt.test(t),
  parse: (t) => lt.test(t) ? lt.parse(t) : mt.test(t) ? mt.parse(t) : Ve.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? lt.transform(t) : mt.transform(t),
  getAnimatableNone: (t) => {
    const e = R.parse(t);
    return e.alpha = 0, R.transform(e);
  }
}, Eo = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function zo(t) {
  return isNaN(t) && typeof t == "string" && (t.match(un)?.length || 0) + (t.match(Eo)?.length || 0) > 0;
}
const As = "number", Ms = "color", Lo = "var", Io = "var(", On = "${}", Fo = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ft(t) {
  const e = t.toString(), n = [], i = {
    color: [],
    number: [],
    var: []
  }, s = [];
  let o = 0;
  const a = e.replace(Fo, (l) => (R.test(l) ? (i.color.push(o), s.push(Ms), n.push(R.parse(l))) : l.startsWith(Io) ? (i.var.push(o), s.push(Lo), n.push(l)) : (i.number.push(o), s.push(As), n.push(parseFloat(l))), ++o, On)).split(On);
  return { values: n, split: a, indexes: i, types: s };
}
function Vs(t) {
  return Ft(t).values;
}
function Ns(t) {
  const { split: e, types: n } = Ft(t), i = e.length;
  return (s) => {
    let o = "";
    for (let r = 0; r < i; r++)
      if (o += e[r], s[r] !== void 0) {
        const a = n[r];
        a === As ? o += Dt(s[r]) : a === Ms ? o += R.transform(s[r]) : o += s[r];
      }
    return o;
  };
}
const jo = (t) => typeof t == "number" ? 0 : R.test(t) ? R.getAnimatableNone(t) : t;
function Bo(t) {
  const e = Vs(t);
  return Ns(t)(e.map(jo));
}
const it = {
  test: zo,
  parse: Vs,
  createTransformer: Ns,
  getAnimatableNone: Bo
};
function me(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function Oo({ hue: t, saturation: e, lightness: n, alpha: i }) {
  t /= 360, e /= 100, n /= 100;
  let s = 0, o = 0, r = 0;
  if (!e)
    s = o = r = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - a;
    s = me(l, a, t + 1 / 3), o = me(l, a, t), r = me(l, a, t - 1 / 3);
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: i
  };
}
function ne(t, e) {
  return (n) => n > 0 ? e : t;
}
const C = (t, e, n) => t + (e - t) * n, pe = (t, e, n) => {
  const i = t * t, s = n * (e * e - i) + i;
  return s < 0 ? 0 : Math.sqrt(s);
}, $o = [Ve, lt, mt], _o = (t) => $o.find((e) => e.test(t));
function $n(t) {
  const e = _o(t);
  if (!e)
    return !1;
  let n = e.parse(t);
  return e === mt && (n = Oo(n)), n;
}
const _n = (t, e) => {
  const n = $n(t), i = $n(e);
  if (!n || !i)
    return ne(t, e);
  const s = { ...n };
  return (o) => (s.red = pe(n.red, i.red, o), s.green = pe(n.green, i.green, o), s.blue = pe(n.blue, i.blue, o), s.alpha = C(n.alpha, i.alpha, o), lt.transform(s));
}, Ne = /* @__PURE__ */ new Set(["none", "hidden"]);
function Ho(t, e) {
  return Ne.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
}
function Uo(t, e) {
  return (n) => C(t, e, n);
}
function dn(t) {
  return typeof t == "number" ? Uo : typeof t == "string" ? cn(t) ? ne : R.test(t) ? _n : Ko : Array.isArray(t) ? Cs : typeof t == "object" ? R.test(t) ? _n : Wo : ne;
}
function Cs(t, e) {
  const n = [...t], i = n.length, s = t.map((o, r) => dn(o)(o, e[r]));
  return (o) => {
    for (let r = 0; r < i; r++)
      n[r] = s[r](o);
    return n;
  };
}
function Wo(t, e) {
  const n = { ...t, ...e }, i = {};
  for (const s in n)
    t[s] !== void 0 && e[s] !== void 0 && (i[s] = dn(t[s])(t[s], e[s]));
  return (s) => {
    for (const o in i)
      n[o] = i[o](s);
    return n;
  };
}
function Go(t, e) {
  const n = [], i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < e.values.length; s++) {
    const o = e.types[s], r = t.indexes[o][i[o]], a = t.values[r] ?? 0;
    n[s] = a, i[o]++;
  }
  return n;
}
const Ko = (t, e) => {
  const n = it.createTransformer(e), i = Ft(t), s = Ft(e);
  return i.indexes.var.length === s.indexes.var.length && i.indexes.color.length === s.indexes.color.length && i.indexes.number.length >= s.indexes.number.length ? Ne.has(t) && !s.values.length || Ne.has(e) && !i.values.length ? Ho(t, e) : $t(Cs(Go(i, s), s.values), n) : ne(t, e);
};
function Ds(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? C(t, e, n) : dn(t)(t, e);
}
const Xo = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return {
    start: (n = !0) => N.update(e, n),
    stop: () => nt(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => L.isProcessing ? L.timestamp : O.now()
  };
}, ks = (t, e, n = 10) => {
  let i = "";
  const s = Math.max(Math.round(e / n), 2);
  for (let o = 0; o < s; o++)
    i += Math.round(t(o / (s - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${i.substring(0, i.length - 2)})`;
}, ie = 2e4;
function fn(t) {
  let e = 0;
  const n = 50;
  let i = t.next(e);
  for (; !i.done && e < ie; )
    e += n, i = t.next(e);
  return e >= ie ? 1 / 0 : e;
}
function Yo(t, e = 100, n) {
  const i = n({ ...t, keyframes: [0, e] }), s = Math.min(fn(i), ie);
  return {
    type: "keyframes",
    ease: (o) => i.next(s * o).value / e,
    duration: /* @__PURE__ */ U(s)
  };
}
const qo = 5;
function Rs(t, e, n) {
  const i = Math.max(e - qo, 0);
  return hs(n - t(i), e - i);
}
const D = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, ge = 1e-3;
function Jo({ duration: t = D.duration, bounce: e = D.bounce, velocity: n = D.velocity, mass: i = D.mass }) {
  let s, o, r = 1 - e;
  r = J(D.minDamping, D.maxDamping, r), t = J(D.minDuration, D.maxDuration, /* @__PURE__ */ U(t)), r < 1 ? (s = (u) => {
    const c = u * r, h = c * t, f = c - n, m = Ce(u, r), g = Math.exp(-h);
    return ge - f / m * g;
  }, o = (u) => {
    const h = u * r * t, f = h * n + n, m = Math.pow(r, 2) * Math.pow(u, 2) * t, g = Math.exp(-h), x = Ce(Math.pow(u, 2), r);
    return (-s(u) + ge > 0 ? -1 : 1) * ((f - m) * g) / x;
  }) : (s = (u) => {
    const c = Math.exp(-u * t), h = (u - n) * t + 1;
    return -ge + c * h;
  }, o = (u) => {
    const c = Math.exp(-u * t), h = (n - u) * (t * t);
    return c * h;
  });
  const a = 5 / t, l = Qo(s, o, a);
  if (t = /* @__PURE__ */ X(t), isNaN(l))
    return {
      stiffness: D.stiffness,
      damping: D.damping,
      duration: t
    };
  {
    const u = Math.pow(l, 2) * i;
    return {
      stiffness: u,
      damping: r * 2 * Math.sqrt(i * u),
      duration: t
    };
  }
}
const Zo = 12;
function Qo(t, e, n) {
  let i = n;
  for (let s = 1; s < Zo; s++)
    i = i - t(i) / e(i);
  return i;
}
function Ce(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const ta = ["duration", "bounce"], ea = ["stiffness", "damping", "mass"];
function Hn(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function na(t) {
  let e = {
    velocity: D.velocity,
    stiffness: D.stiffness,
    damping: D.damping,
    mass: D.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!Hn(t, ea) && Hn(t, ta))
    if (t.visualDuration) {
      const n = t.visualDuration, i = 2 * Math.PI / (n * 1.2), s = i * i, o = 2 * J(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
      e = {
        ...e,
        mass: D.mass,
        stiffness: s,
        damping: o
      };
    } else {
      const n = Jo(t);
      e = {
        ...e,
        ...n,
        mass: D.mass
      }, e.isResolvedFromDuration = !0;
    }
  return e;
}
function se(t = D.visualDuration, e = D.bounce) {
  const n = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: e
  } : t;
  let { restSpeed: i, restDelta: s } = n;
  const o = n.keyframes[0], r = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: o }, { stiffness: l, damping: u, mass: c, duration: h, velocity: f, isResolvedFromDuration: m } = na({
    ...n,
    velocity: -/* @__PURE__ */ U(n.velocity || 0)
  }), g = f || 0, x = u / (2 * Math.sqrt(l * c)), b = r - o, y = /* @__PURE__ */ U(Math.sqrt(l / c)), w = Math.abs(b) < 5;
  i || (i = w ? D.restSpeed.granular : D.restSpeed.default), s || (s = w ? D.restDelta.granular : D.restDelta.default);
  let v;
  if (x < 1) {
    const T = Ce(y, x);
    v = (M) => {
      const V = Math.exp(-x * y * M);
      return r - V * ((g + x * y * b) / T * Math.sin(T * M) + b * Math.cos(T * M));
    };
  } else if (x === 1)
    v = (T) => r - Math.exp(-y * T) * (b + (g + y * b) * T);
  else {
    const T = y * Math.sqrt(x * x - 1);
    v = (M) => {
      const V = Math.exp(-x * y * M), S = Math.min(T * M, 300);
      return r - V * ((g + x * y * b) * Math.sinh(S) + T * b * Math.cosh(S)) / T;
    };
  }
  const A = {
    calculatedDuration: m && h || null,
    next: (T) => {
      const M = v(T);
      if (m)
        a.done = T >= h;
      else {
        let V = T === 0 ? g : 0;
        x < 1 && (V = T === 0 ? /* @__PURE__ */ X(g) : Rs(v, T, M));
        const S = Math.abs(V) <= i, E = Math.abs(r - M) <= s;
        a.done = S && E;
      }
      return a.value = a.done ? r : M, a;
    },
    toString: () => {
      const T = Math.min(fn(A), ie), M = ks((V) => A.next(T * V).value, T, 30);
      return T + "ms " + M;
    },
    toTransition: () => {
    }
  };
  return A;
}
se.applyToOptions = (t) => {
  const e = Yo(t, 100, se);
  return t.ease = e.ease, t.duration = /* @__PURE__ */ X(e.duration), t.type = "keyframes", t;
};
function De({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: i = 325, bounceDamping: s = 10, bounceStiffness: o = 500, modifyTarget: r, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const h = t[0], f = {
    done: !1,
    value: h
  }, m = (S) => a !== void 0 && S < a || l !== void 0 && S > l, g = (S) => a === void 0 ? l : l === void 0 || Math.abs(a - S) < Math.abs(l - S) ? a : l;
  let x = n * e;
  const b = h + x, y = r === void 0 ? b : r(b);
  y !== b && (x = y - h);
  const w = (S) => -x * Math.exp(-S / i), v = (S) => y + w(S), A = (S) => {
    const E = w(S), j = v(S);
    f.done = Math.abs(E) <= u, f.value = f.done ? y : j;
  };
  let T, M;
  const V = (S) => {
    m(f.value) && (T = S, M = se({
      keyframes: [f.value, g(f.value)],
      velocity: Rs(v, S, f.value),
      // TODO: This should be passing * 1000
      damping: s,
      stiffness: o,
      restDelta: u,
      restSpeed: c
    }));
  };
  return V(0), {
    calculatedDuration: null,
    next: (S) => {
      let E = !1;
      return !M && T === void 0 && (E = !0, A(S), V(S)), T !== void 0 && S >= T ? M.next(S - T) : (!E && A(S), f);
    }
  };
}
function ia(t, e, n) {
  const i = [], s = n || Z.mix || Ds, o = t.length - 1;
  for (let r = 0; r < o; r++) {
    let a = s(t[r], t[r + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[r] || W : e;
      a = $t(l, a);
    }
    i.push(a);
  }
  return i;
}
function sa(t, e, { clamp: n = !0, ease: i, mixer: s } = {}) {
  const o = t.length;
  if (nn(o === e.length), o === 1)
    return () => e[0];
  if (o === 2 && e[0] === e[1])
    return () => e[1];
  const r = t[0] === t[1];
  t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const a = ia(e, i, s), l = a.length, u = (c) => {
    if (r && c < t[0])
      return e[0];
    let h = 0;
    if (l > 1)
      for (; h < t.length - 2 && !(c < t[h + 1]); h++)
        ;
    const f = /* @__PURE__ */ Lt(t[h], t[h + 1], c);
    return a[h](f);
  };
  return n ? (c) => u(J(t[0], t[o - 1], c)) : u;
}
function ra(t, e) {
  const n = t[t.length - 1];
  for (let i = 1; i <= e; i++) {
    const s = /* @__PURE__ */ Lt(0, e, i);
    t.push(C(n, 1, s));
  }
}
function oa(t) {
  const e = [0];
  return ra(e, t.length - 1), e;
}
function aa(t, e) {
  return t.map((n) => n * e);
}
function la(t, e) {
  return t.map(() => e || bs).splice(0, t.length - 1);
}
function kt({ duration: t = 300, keyframes: e, times: n, ease: i = "easeInOut" }) {
  const s = vo(i) ? i.map(jn) : jn(i), o = {
    done: !1,
    value: e[0]
  }, r = aa(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === e.length ? n : oa(e),
    t
  ), a = sa(r, e, {
    ease: Array.isArray(s) ? s : la(e, s)
  });
  return {
    calculatedDuration: t,
    next: (l) => (o.value = a(l), o.done = l >= t, o)
  };
}
const ca = (t) => t !== null;
function mn(t, { repeat: e, repeatType: n = "loop" }, i, s = 1) {
  const o = t.filter(ca), a = s < 0 || e && n !== "loop" && e % 2 === 1 ? 0 : o.length - 1;
  return !a || i === void 0 ? o[a] : i;
}
const ua = {
  decay: De,
  inertia: De,
  tween: kt,
  keyframes: kt,
  spring: se
};
function Es(t) {
  typeof t.type == "string" && (t.type = ua[t.type]);
}
class pn {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((e) => {
      this.resolve = e;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(e, n) {
    return this.finished.then(e, n);
  }
}
const ha = (t) => t / 100;
class gn extends pn {
  constructor(e) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      const { motionValue: n } = this.options;
      n && n.updatedAt !== O.now() && this.tick(O.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: e } = this;
    Es(e);
    const { type: n = kt, repeat: i = 0, repeatDelay: s = 0, repeatType: o, velocity: r = 0 } = e;
    let { keyframes: a } = e;
    const l = n || kt;
    l !== kt && typeof a[0] != "number" && (this.mixKeyframes = $t(ha, Ds(a[0], a[1])), a = [0, 100]);
    const u = l({ ...e, keyframes: a });
    o === "mirror" && (this.mirroredGenerator = l({
      ...e,
      keyframes: [...a].reverse(),
      velocity: -r
    })), u.calculatedDuration === null && (u.calculatedDuration = fn(u));
    const { calculatedDuration: c } = u;
    this.calculatedDuration = c, this.resolvedDuration = c + s, this.totalDuration = this.resolvedDuration * (i + 1) - s, this.generator = u;
  }
  updateTime(e) {
    const n = Math.round(e - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(e, n = !1) {
    const { generator: i, totalDuration: s, mixKeyframes: o, mirroredGenerator: r, resolvedDuration: a, calculatedDuration: l } = this;
    if (this.startTime === null)
      return i.next(0);
    const { delay: u = 0, keyframes: c, repeat: h, repeatType: f, repeatDelay: m, type: g, onUpdate: x, finalKeyframe: b } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - s / this.speed, this.startTime)), n ? this.currentTime = e : this.updateTime(e);
    const y = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1), w = this.playbackSpeed >= 0 ? y < 0 : y > s;
    this.currentTime = Math.max(y, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = s);
    let v = this.currentTime, A = i;
    if (h) {
      const S = Math.min(this.currentTime, s) / a;
      let E = Math.floor(S), j = S % 1;
      !j && S >= 1 && (j = 1), j === 1 && E--, E = Math.min(E, h + 1), !!(E % 2) && (f === "reverse" ? (j = 1 - j, m && (j -= m / a)) : f === "mirror" && (A = r)), v = J(0, 1, j) * a;
    }
    const T = w ? { done: !1, value: c[0] } : A.next(v);
    o && (T.value = o(T.value));
    let { done: M } = T;
    !w && l !== null && (M = this.playbackSpeed >= 0 ? this.currentTime >= s : this.currentTime <= 0);
    const V = this.holdTime === null && (this.state === "finished" || this.state === "running" && M);
    return V && g !== De && (T.value = mn(c, this.options, b, this.speed)), x && x(T.value), V && this.finish(), T;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(e, n) {
    return this.finished.then(e, n);
  }
  get duration() {
    return /* @__PURE__ */ U(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ U(e);
  }
  get time() {
    return /* @__PURE__ */ U(this.currentTime);
  }
  set time(e) {
    e = /* @__PURE__ */ X(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver?.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    this.updateTime(O.now());
    const n = this.playbackSpeed !== e;
    this.playbackSpeed = e, n && (this.time = /* @__PURE__ */ U(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: e = Xo, startTime: n } = this.options;
    this.driver || (this.driver = e((s) => this.tick(s))), this.options.onPlay?.();
    const i = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = i) : this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime || (this.startTime = n ?? i), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(O.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(e) {
    return this.startTime = 0, this.tick(e, !0);
  }
  attachTimeline(e) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), e.observe(this);
  }
}
function da(t) {
  for (let e = 1; e < t.length; e++)
    t[e] ?? (t[e] = t[e - 1]);
}
const ct = (t) => t * 180 / Math.PI, ke = (t) => {
  const e = ct(Math.atan2(t[1], t[0]));
  return Re(e);
}, fa = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
  rotate: ke,
  rotateZ: ke,
  skewX: (t) => ct(Math.atan(t[1])),
  skewY: (t) => ct(Math.atan(t[2])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2
}, Re = (t) => (t = t % 360, t < 0 && (t += 360), t), Un = ke, Wn = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), Gn = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), ma = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: Wn,
  scaleY: Gn,
  scale: (t) => (Wn(t) + Gn(t)) / 2,
  rotateX: (t) => Re(ct(Math.atan2(t[6], t[5]))),
  rotateY: (t) => Re(ct(Math.atan2(-t[2], t[0]))),
  rotateZ: Un,
  rotate: Un,
  skewX: (t) => ct(Math.atan(t[4])),
  skewY: (t) => ct(Math.atan(t[1])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2
};
function Ee(t) {
  return t.includes("scale") ? 1 : 0;
}
function ze(t, e) {
  if (!t || t === "none")
    return Ee(e);
  const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let i, s;
  if (n)
    i = ma, s = n;
  else {
    const a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    i = fa, s = a;
  }
  if (!s)
    return Ee(e);
  const o = i[e], r = s[1].split(",").map(ga);
  return typeof o == "function" ? o(r) : r[o];
}
const pa = (t, e) => {
  const { transform: n = "none" } = getComputedStyle(t);
  return ze(n, e);
};
function ga(t) {
  return parseFloat(t.trim());
}
const St = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], At = new Set(St), Kn = (t) => t === Pt || t === P, ya = /* @__PURE__ */ new Set(["x", "y", "z"]), xa = St.filter((t) => !ya.has(t));
function va(t) {
  const e = [];
  return xa.forEach((n) => {
    const i = t.getValue(n);
    i !== void 0 && (e.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0));
  }), e;
}
const ut = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: (t, { transform: e }) => ze(e, "x"),
  y: (t, { transform: e }) => ze(e, "y")
};
ut.translateX = ut.x;
ut.translateY = ut.y;
const ht = /* @__PURE__ */ new Set();
let Le = !1, Ie = !1, Fe = !1;
function zs() {
  if (Ie) {
    const t = Array.from(ht).filter((i) => i.needsMeasurement), e = new Set(t.map((i) => i.element)), n = /* @__PURE__ */ new Map();
    e.forEach((i) => {
      const s = va(i);
      s.length && (n.set(i, s), i.render());
    }), t.forEach((i) => i.measureInitialState()), e.forEach((i) => {
      i.render();
      const s = n.get(i);
      s && s.forEach(([o, r]) => {
        i.getValue(o)?.set(r);
      });
    }), t.forEach((i) => i.measureEndState()), t.forEach((i) => {
      i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY);
    });
  }
  Ie = !1, Le = !1, ht.forEach((t) => t.complete(Fe)), ht.clear();
}
function Ls() {
  ht.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (Ie = !0);
  });
}
function ba() {
  Fe = !0, Ls(), zs(), Fe = !1;
}
class yn {
  constructor(e, n, i, s, o, r = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = i, this.motionValue = s, this.element = o, this.isAsync = r;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (ht.add(this), Le || (Le = !0, N.read(Ls), N.resolveKeyframes(zs))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, name: n, element: i, motionValue: s } = this;
    if (e[0] === null) {
      const o = s?.get(), r = e[e.length - 1];
      if (o !== void 0)
        e[0] = o;
      else if (i && n) {
        const a = i.readValue(n, r);
        a != null && (e[0] = a);
      }
      e[0] === void 0 && (e[0] = r), s && o === void 0 && s.set(e[0]);
    }
    da(e);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(e = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), ht.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (ht.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const wa = (t) => t.startsWith("--");
function Ta(t, e, n) {
  wa(e) ? t.style.setProperty(e, n) : t.style[e] = n;
}
const Pa = /* @__PURE__ */ sn(() => window.ScrollTimeline !== void 0), Sa = {};
function Aa(t, e) {
  const n = /* @__PURE__ */ sn(t);
  return () => Sa[e] ?? n();
}
const Is = /* @__PURE__ */ Aa(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Ct = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`, Xn = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Ct([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Ct([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Ct([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Ct([0.33, 1.53, 0.69, 0.99])
};
function Fs(t, e) {
  if (t)
    return typeof t == "function" ? Is() ? ks(t, e) : "ease-out" : ws(t) ? Ct(t) : Array.isArray(t) ? t.map((n) => Fs(n, e) || Xn.easeOut) : Xn[t];
}
function Ma(t, e, n, { delay: i = 0, duration: s = 300, repeat: o = 0, repeatType: r = "loop", ease: a = "easeOut", times: l } = {}, u = void 0) {
  const c = {
    [e]: n
  };
  l && (c.offset = l);
  const h = Fs(a, s);
  Array.isArray(h) && (c.easing = h);
  const f = {
    delay: i,
    duration: s,
    easing: Array.isArray(h) ? "linear" : h,
    fill: "both",
    iterations: o + 1,
    direction: r === "reverse" ? "alternate" : "normal"
  };
  return u && (f.pseudoElement = u), t.animate(c, f);
}
function js(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function Va({ type: t, ...e }) {
  return js(t) && Is() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
}
class Na extends pn {
  constructor(e) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !e)
      return;
    const { element: n, name: i, keyframes: s, pseudoElement: o, allowFlatten: r = !1, finalKeyframe: a, onComplete: l } = e;
    this.isPseudoElement = !!o, this.allowFlatten = r, this.options = e, nn(typeof e.type != "string");
    const u = Va(e);
    this.animation = Ma(n, i, s, u, o), u.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !o) {
        const c = mn(s, this.options, a, this.speed);
        this.updateMotionValue ? this.updateMotionValue(c) : Ta(n, i, c), this.animation.cancel();
      }
      l?.(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: e } = this;
    e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    this.isPseudoElement || this.animation.commitStyles?.();
  }
  get duration() {
    const e = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ U(Number(e));
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ U(e);
  }
  get time() {
    return /* @__PURE__ */ U(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ X(e);
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(e) {
    e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(e) {
    this.animation.startTime = e;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: e, observe: n }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e && Pa() ? (this.animation.timeline = e, W) : n(this);
  }
}
const Bs = {
  anticipate: ys,
  backInOut: gs,
  circInOut: vs
};
function Ca(t) {
  return t in Bs;
}
function Da(t) {
  typeof t.ease == "string" && Ca(t.ease) && (t.ease = Bs[t.ease]);
}
const Yn = 10;
class ka extends Na {
  constructor(e) {
    Da(e), Es(e), super(e), e.startTime && (this.startTime = e.startTime), this.options = e;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read commited styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(e) {
    const { motionValue: n, onUpdate: i, onComplete: s, element: o, ...r } = this.options;
    if (!n)
      return;
    if (e !== void 0) {
      n.set(e);
      return;
    }
    const a = new gn({
      ...r,
      autoplay: !1
    }), l = /* @__PURE__ */ X(this.finishedTime ?? this.time);
    n.setWithVelocity(a.sample(l - Yn).value, a.sample(l).value, Yn), a.stop();
  }
}
const qn = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(it.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url("));
function Ra(t) {
  const e = t[0];
  if (t.length === 1)
    return !0;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e)
      return !0;
}
function Ea(t, e, n, i) {
  const s = t[0];
  if (s === null)
    return !1;
  if (e === "display" || e === "visibility")
    return !0;
  const o = t[t.length - 1], r = qn(s, e), a = qn(o, e);
  return !r || !a ? !1 : Ra(t) || (n === "spring" || js(n)) && i;
}
function je(t) {
  t.duration = 0, t.type = "keyframes";
}
const za = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), La = /* @__PURE__ */ sn(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Ia(t) {
  const { motionValue: e, name: n, repeatDelay: i, repeatType: s, damping: o, type: r } = t;
  if (!(e?.owner?.current instanceof HTMLElement))
    return !1;
  const { onUpdate: l, transformTemplate: u } = e.owner.getProps();
  return La() && n && za.has(n) && (n !== "transform" || !u) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !l && !i && s !== "mirror" && o !== 0 && r !== "inertia";
}
const Fa = 40;
class ja extends pn {
  constructor({ autoplay: e = !0, delay: n = 0, type: i = "keyframes", repeat: s = 0, repeatDelay: o = 0, repeatType: r = "loop", keyframes: a, name: l, motionValue: u, element: c, ...h }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = O.now();
    const f = {
      autoplay: e,
      delay: n,
      type: i,
      repeat: s,
      repeatDelay: o,
      repeatType: r,
      name: l,
      motionValue: u,
      element: c,
      ...h
    }, m = c?.KeyframeResolver || yn;
    this.keyframeResolver = new m(a, (g, x, b) => this.onKeyframesResolved(g, x, f, !b), l, u, c), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(e, n, i, s) {
    this.keyframeResolver = void 0;
    const { name: o, type: r, velocity: a, delay: l, isHandoff: u, onUpdate: c } = i;
    this.resolvedAt = O.now(), Ea(e, o, r, a) || ((Z.instantAnimations || !l) && c?.(mn(e, i, n)), e[0] = e[e.length - 1], je(i), i.repeat = 0);
    const f = {
      startTime: s ? this.resolvedAt ? this.resolvedAt - this.createdAt > Fa ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...i,
      keyframes: e
    }, m = !u && Ia(f) ? new ka({
      ...f,
      element: f.motionValue.owner.current
    }) : new gn(f);
    m.finished.then(() => this.notifyFinished()).catch(W), this.pendingTimeline && (this.stopTimeline = m.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = m;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(e, n) {
    return this.finished.finally(e).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), ba()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(e) {
    this.animation.time = e;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(e) {
    this.animation.speed = e;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(e) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
const Ba = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function Oa(t) {
  const e = Ba.exec(t);
  if (!e)
    return [,];
  const [, n, i, s] = e;
  return [`--${n ?? i}`, s];
}
function Os(t, e, n = 1) {
  const [i, s] = Oa(t);
  if (!i)
    return;
  const o = window.getComputedStyle(e).getPropertyValue(i);
  if (o) {
    const r = o.trim();
    return ls(r) ? parseFloat(r) : r;
  }
  return cn(s) ? Os(s, e, n + 1) : s;
}
function xn(t, e) {
  return t?.[e] ?? t?.default ?? t;
}
const $s = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...St
]), $a = {
  test: (t) => t === "auto",
  parse: (t) => t
}, _s = (t) => (e) => e.test(t), Hs = [Pt, P, Y, tt, Ro, ko, $a], Jn = (t) => Hs.find(_s(t));
function _a(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || us(t) : !0;
}
const Ha = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Ua(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [i] = n.match(un) || [];
  if (!i)
    return t;
  const s = n.replace(i, "");
  let o = Ha.has(e) ? 1 : 0;
  return i !== n && (o *= 100), e + "(" + o + s + ")";
}
const Wa = /\b([a-z-]*)\(.*?\)/gu, Be = {
  ...it,
  getAnimatableNone: (t) => {
    const e = t.match(Wa);
    return e ? e.map(Ua).join(" ") : t;
  }
}, Zn = {
  ...Pt,
  transform: Math.round
}, Ga = {
  rotate: tt,
  rotateX: tt,
  rotateY: tt,
  rotateZ: tt,
  scale: Kt,
  scaleX: Kt,
  scaleY: Kt,
  scaleZ: Kt,
  skew: tt,
  skewX: tt,
  skewY: tt,
  distance: P,
  translateX: P,
  translateY: P,
  translateZ: P,
  x: P,
  y: P,
  z: P,
  perspective: P,
  transformPerspective: P,
  opacity: It,
  originX: Bn,
  originY: Bn,
  originZ: P
}, vn = {
  // Border props
  borderWidth: P,
  borderTopWidth: P,
  borderRightWidth: P,
  borderBottomWidth: P,
  borderLeftWidth: P,
  borderRadius: P,
  radius: P,
  borderTopLeftRadius: P,
  borderTopRightRadius: P,
  borderBottomRightRadius: P,
  borderBottomLeftRadius: P,
  // Positioning props
  width: P,
  maxWidth: P,
  height: P,
  maxHeight: P,
  top: P,
  right: P,
  bottom: P,
  left: P,
  // Spacing props
  padding: P,
  paddingTop: P,
  paddingRight: P,
  paddingBottom: P,
  paddingLeft: P,
  margin: P,
  marginTop: P,
  marginRight: P,
  marginBottom: P,
  marginLeft: P,
  // Misc
  backgroundPositionX: P,
  backgroundPositionY: P,
  ...Ga,
  zIndex: Zn,
  // SVG
  fillOpacity: It,
  strokeOpacity: It,
  numOctaves: Zn
}, Ka = {
  ...vn,
  // Color props
  color: R,
  backgroundColor: R,
  outlineColor: R,
  fill: R,
  stroke: R,
  // Border props
  borderColor: R,
  borderTopColor: R,
  borderRightColor: R,
  borderBottomColor: R,
  borderLeftColor: R,
  filter: Be,
  WebkitFilter: Be
}, Us = (t) => Ka[t];
function Ws(t, e) {
  let n = Us(t);
  return n !== Be && (n = it), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const Xa = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Ya(t, e, n) {
  let i = 0, s;
  for (; i < t.length && !s; ) {
    const o = t[i];
    typeof o == "string" && !Xa.has(o) && Ft(o).values.length && (s = t[i]), i++;
  }
  if (s && n)
    for (const o of e)
      t[o] = Ws(n, s);
}
class qa extends yn {
  constructor(e, n, i, s, o) {
    super(e, n, i, s, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: i } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < e.length; l++) {
      let u = e[l];
      if (typeof u == "string" && (u = u.trim(), cn(u))) {
        const c = Os(u, n.current);
        c !== void 0 && (e[l] = c), l === e.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !$s.has(i) || e.length !== 2)
      return;
    const [s, o] = e, r = Jn(s), a = Jn(o);
    if (r !== a)
      if (Kn(r) && Kn(a))
        for (let l = 0; l < e.length; l++) {
          const u = e[l];
          typeof u == "string" && (e[l] = parseFloat(u));
        }
      else ut[i] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this, i = [];
    for (let s = 0; s < e.length; s++)
      (e[s] === null || _a(e[s])) && i.push(s);
    i.length && Ya(e, i, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: i } = this;
    if (!e || !e.current)
      return;
    i === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = ut[i](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
    const s = n[n.length - 1];
    s !== void 0 && e.getValue(i, s).jump(s, !1);
  }
  measureEndState() {
    const { element: e, name: n, unresolvedKeyframes: i } = this;
    if (!e || !e.current)
      return;
    const s = e.getValue(n);
    s && s.jump(this.measuredOrigin, !1);
    const o = i.length - 1, r = i[o];
    i[o] = ut[n](e.measureViewportBox(), window.getComputedStyle(e.current)), r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r), this.removedTransforms?.length && this.removedTransforms.forEach(([a, l]) => {
      e.getValue(a).set(l);
    }), this.resolveNoneKeyframes();
  }
}
function Ja(t, e, n) {
  if (t instanceof EventTarget)
    return [t];
  if (typeof t == "string") {
    let i = document;
    const s = n?.[t] ?? i.querySelectorAll(t);
    return s ? Array.from(s) : [];
  }
  return Array.from(t);
}
const Gs = (t, e) => e && typeof t == "number" ? e.transform(t) : t;
function Ks(t) {
  return cs(t) && "offsetHeight" in t;
}
const Qn = 30, Za = (t) => !isNaN(parseFloat(t));
class Qa {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(e, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (i) => {
      const s = O.now();
      if (this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(i), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const o of this.dependents)
          o.dirty();
    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = O.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = Za(this.current));
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(e) {
    return this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new rn());
    const i = this.events[e].add(n);
    return e === "change" ? () => {
      i(), N.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : i;
  }
  clearListeners() {
    for (const e in this.events)
      this.events[e].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(e, n) {
    this.passiveEffect = e, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(e) {
    this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
  }
  setWithVelocity(e, n, i) {
    this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - i;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(e, n = !0) {
    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(e) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(e);
  }
  removeDependent(e) {
    this.dependents && this.dependents.delete(e);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const e = O.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Qn)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Qn);
    return hs(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(e) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function bt(t, e) {
  return new Qa(t, e);
}
const { schedule: bn } = /* @__PURE__ */ Ts(queueMicrotask, !1), K = {
  x: !1,
  y: !1
};
function Xs() {
  return K.x || K.y;
}
function tl(t) {
  return t === "x" || t === "y" ? K[t] ? null : (K[t] = !0, () => {
    K[t] = !1;
  }) : K.x || K.y ? null : (K.x = K.y = !0, () => {
    K.x = K.y = !1;
  });
}
function Ys(t, e) {
  const n = Ja(t), i = new AbortController(), s = {
    passive: !0,
    ...e,
    signal: i.signal
  };
  return [n, s, () => i.abort()];
}
function ti(t) {
  return !(t.pointerType === "touch" || Xs());
}
function el(t, e, n = {}) {
  const [i, s, o] = Ys(t, n), r = (a) => {
    if (!ti(a))
      return;
    const { target: l } = a, u = e(l, a);
    if (typeof u != "function" || !l)
      return;
    const c = (h) => {
      ti(h) && (u(h), l.removeEventListener("pointerleave", c));
    };
    l.addEventListener("pointerleave", c, s);
  };
  return i.forEach((a) => {
    a.addEventListener("pointerenter", r, s);
  }), o;
}
const qs = (t, e) => e ? t === e ? !0 : qs(t, e.parentElement) : !1, wn = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1, nl = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function il(t) {
  return nl.has(t.tagName) || t.tabIndex !== -1;
}
const Jt = /* @__PURE__ */ new WeakSet();
function ei(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function ye(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
}
const sl = (t, e) => {
  const n = t.currentTarget;
  if (!n)
    return;
  const i = ei(() => {
    if (Jt.has(n))
      return;
    ye(n, "down");
    const s = ei(() => {
      ye(n, "up");
    }), o = () => ye(n, "cancel");
    n.addEventListener("keyup", s, e), n.addEventListener("blur", o, e);
  });
  n.addEventListener("keydown", i, e), n.addEventListener("blur", () => n.removeEventListener("keydown", i), e);
};
function ni(t) {
  return wn(t) && !Xs();
}
function rl(t, e, n = {}) {
  const [i, s, o] = Ys(t, n), r = (a) => {
    const l = a.currentTarget;
    if (!ni(a))
      return;
    Jt.add(l);
    const u = e(l, a), c = (m, g) => {
      window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", f), Jt.has(l) && Jt.delete(l), ni(m) && typeof u == "function" && u(m, { success: g });
    }, h = (m) => {
      c(m, l === window || l === document || n.useGlobalTarget || qs(l, m.target));
    }, f = (m) => {
      c(m, !1);
    };
    window.addEventListener("pointerup", h, s), window.addEventListener("pointercancel", f, s);
  };
  return i.forEach((a) => {
    (n.useGlobalTarget ? window : a).addEventListener("pointerdown", r, s), Ks(a) && (a.addEventListener("focus", (u) => sl(u, s)), !il(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
  }), o;
}
function Js(t) {
  return cs(t) && "ownerSVGElement" in t;
}
function ol(t) {
  return Js(t) && t.tagName === "svg";
}
const F = (t) => !!(t && t.getVelocity), al = [...Hs, R, it], ll = (t) => al.find(_s(t)), Tn = Tt({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
function ii(t, e) {
  if (typeof t == "function")
    return t(e);
  t != null && (t.current = e);
}
function cl(...t) {
  return (e) => {
    let n = !1;
    const i = t.map((s) => {
      const o = ii(s, e);
      return !n && typeof o == "function" && (n = !0), o;
    });
    if (n)
      return () => {
        for (let s = 0; s < i.length; s++) {
          const o = i[s];
          typeof o == "function" ? o() : ii(t[s], null);
        }
      };
  };
}
function ul(...t) {
  return Ye(cl(...t), t);
}
class hl extends Ji {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (n && e.isPresent && !this.props.isPresent) {
      const i = n.offsetParent, s = Ks(i) && i.offsetWidth || 0, o = this.props.sizeRef.current;
      o.height = n.offsetHeight || 0, o.width = n.offsetWidth || 0, o.top = n.offsetTop, o.left = n.offsetLeft, o.right = s - o.width - o.left;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function dl({ children: t, isPresent: e, anchorX: n, root: i }) {
  const s = qe(), o = et(null), r = et({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: a } = I(Tn), l = ul(o, t?.ref);
  return Qi(() => {
    const { width: u, height: c, top: h, left: f, right: m } = r.current;
    if (e || !o.current || !u || !c)
      return;
    const g = n === "left" ? `left: ${f}` : `right: ${m}`;
    o.current.dataset.motionPopId = s;
    const x = document.createElement("style");
    a && (x.nonce = a);
    const b = i ?? document.head;
    return b.appendChild(x), x.sheet && x.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${c}px !important;
            ${g}px !important;
            top: ${h}px !important;
          }
        `), () => {
      b.contains(x) && b.removeChild(x);
    };
  }, [e]), d(hl, { isPresent: e, childRef: o, sizeRef: r, children: Gr(t, { ref: l }) });
}
const fl = ({ children: t, initial: e, isPresent: n, onExitComplete: i, custom: s, presenceAffectsLayout: o, mode: r, anchorX: a, root: l }) => {
  const u = Ze(ml), c = qe();
  let h = !0, f = dt(() => (h = !1, {
    id: c,
    initial: e,
    isPresent: n,
    custom: s,
    onExitComplete: (m) => {
      u.set(m, !0);
      for (const g of u.values())
        if (!g)
          return;
      i && i();
    },
    register: (m) => (u.set(m, !1), () => u.delete(m))
  }), [n, u, i]);
  return o && h && (f = { ...f }), dt(() => {
    u.forEach((m, g) => u.set(g, !1));
  }, [n]), ae(() => {
    !n && !u.size && i && i();
  }, [n]), r === "popLayout" && (t = d(dl, { isPresent: n, anchorX: a, root: l, children: t })), d(le.Provider, { value: f, children: t });
};
function ml() {
  return /* @__PURE__ */ new Map();
}
function Zs(t = !0) {
  const e = I(le);
  if (e === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: i, register: s } = e, o = qe();
  ae(() => {
    if (t)
      return s(o);
  }, [t]);
  const r = Ye(() => t && i && i(o), [o, i, t]);
  return !n && i ? [!1, r] : [!0];
}
const Xt = (t) => t.key || "";
function si(t) {
  const e = [];
  return Wr.forEach(t, (n) => {
    Kr(n) && e.push(n);
  }), e;
}
const Qs = ({ children: t, custom: e, initial: n = !0, onExitComplete: i, presenceAffectsLayout: s = !0, mode: o = "sync", propagate: r = !1, anchorX: a = "left", root: l }) => {
  const [u, c] = Zs(r), h = dt(() => si(t), [t]), f = r && !u ? [] : h.map(Xt), m = et(!0), g = et(h), x = Ze(() => /* @__PURE__ */ new Map()), [b, y] = ee(h), [w, v] = ee(h);
  as(() => {
    m.current = !1, g.current = h;
    for (let M = 0; M < w.length; M++) {
      const V = Xt(w[M]);
      f.includes(V) ? x.delete(V) : x.get(V) !== !0 && x.set(V, !1);
    }
  }, [w, f.length, f.join("-")]);
  const A = [];
  if (h !== b) {
    let M = [...h];
    for (let V = 0; V < w.length; V++) {
      const S = w[V], E = Xt(S);
      f.includes(E) || (M.splice(V, 0, S), A.push(S));
    }
    return o === "wait" && A.length && (M = A), v(si(M)), y(h), null;
  }
  const { forceRender: T } = I(Je);
  return d(_r, { children: w.map((M) => {
    const V = Xt(M), S = r && !u ? !1 : h === w || f.includes(V), E = () => {
      if (x.has(V))
        x.set(V, !0);
      else
        return;
      let j = !0;
      x.forEach((Q) => {
        Q || (j = !1);
      }), j && (T?.(), v(g.current), r && c?.(), i && i());
    };
    return d(fl, { isPresent: S, initial: !m.current || n ? void 0 : !1, custom: e, presenceAffectsLayout: s, mode: o, root: l, onExitComplete: S ? void 0 : E, anchorX: a, children: M }, V);
  }) });
}, tr = Tt({ strict: !1 }), ri = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, wt = {};
for (const t in ri)
  wt[t] = {
    isEnabled: (e) => ri[t].some((n) => !!e[n])
  };
function pl(t) {
  for (const e in t)
    wt[e] = {
      ...wt[e],
      ...t[e]
    };
}
const gl = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function re(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || gl.has(t);
}
let er = (t) => !re(t);
function yl(t) {
  typeof t == "function" && (er = (e) => e.startsWith("on") ? !re(e) : t(e));
}
try {
  yl(require("@emotion/is-prop-valid").default);
} catch {
}
function xl(t, e, n) {
  const i = {};
  for (const s in t)
    s === "values" && typeof t.values == "object" || (er(s) || n === !0 && re(s) || !e && !re(s) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && s.startsWith("onDrag")) && (i[s] = t[s]);
  return i;
}
const ce = /* @__PURE__ */ Tt({});
function ue(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function jt(t) {
  return typeof t == "string" || Array.isArray(t);
}
const Pn = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Sn = ["initial", ...Pn];
function he(t) {
  return ue(t.animate) || Sn.some((e) => jt(t[e]));
}
function nr(t) {
  return !!(he(t) || t.variants);
}
function vl(t, e) {
  if (he(t)) {
    const { initial: n, animate: i } = t;
    return {
      initial: n === !1 || jt(n) ? n : void 0,
      animate: jt(i) ? i : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function bl(t) {
  const { initial: e, animate: n } = vl(t, I(ce));
  return dt(() => ({ initial: e, animate: n }), [oi(e), oi(n)]);
}
function oi(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const Bt = {};
function wl(t) {
  for (const e in t)
    Bt[e] = t[e], ln(e) && (Bt[e].isCSSVariable = !0);
}
function ir(t, { layout: e, layoutId: n }) {
  return At.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Bt[t] || t === "opacity");
}
const Tl = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Pl = St.length;
function Sl(t, e, n) {
  let i = "", s = !0;
  for (let o = 0; o < Pl; o++) {
    const r = St[o], a = t[r];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (r.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const u = Gs(a, vn[r]);
      if (!l) {
        s = !1;
        const c = Tl[r] || r;
        i += `${c}(${u}) `;
      }
      n && (e[r] = u);
    }
  }
  return i = i.trim(), n ? i = n(e, s ? "" : i) : s && (i = "none"), i;
}
function An(t, e, n) {
  const { style: i, vars: s, transformOrigin: o } = t;
  let r = !1, a = !1;
  for (const l in e) {
    const u = e[l];
    if (At.has(l)) {
      r = !0;
      continue;
    } else if (ln(l)) {
      s[l] = u;
      continue;
    } else {
      const c = Gs(u, vn[l]);
      l.startsWith("origin") ? (a = !0, o[l] = c) : i[l] = c;
    }
  }
  if (e.transform || (r || n ? i.transform = Sl(e, t.transform, n) : i.transform && (i.transform = "none")), a) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
    i.transformOrigin = `${l} ${u} ${c}`;
  }
}
const Mn = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function sr(t, e, n) {
  for (const i in e)
    !F(e[i]) && !ir(i, n) && (t[i] = e[i]);
}
function Al({ transformTemplate: t }, e) {
  return dt(() => {
    const n = Mn();
    return An(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function Ml(t, e) {
  const n = t.style || {}, i = {};
  return sr(i, n, t), Object.assign(i, Al(t, e)), i;
}
function Vl(t, e) {
  const n = {}, i = Ml(t, e);
  return t.drag && t.dragListener !== !1 && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n;
}
const Nl = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Cl = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Dl(t, e, n = 1, i = 0, s = !0) {
  t.pathLength = 1;
  const o = s ? Nl : Cl;
  t[o.offset] = P.transform(-i);
  const r = P.transform(e), a = P.transform(n);
  t[o.array] = `${r} ${a}`;
}
function rr(t, {
  attrX: e,
  attrY: n,
  attrScale: i,
  pathLength: s,
  pathSpacing: o = 1,
  pathOffset: r = 0,
  // This is object creation, which we try to avoid per-frame.
  ...a
}, l, u, c) {
  if (An(t, a, u), l) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: h, style: f } = t;
  h.transform && (f.transform = h.transform, delete h.transform), (f.transform || h.transformOrigin) && (f.transformOrigin = h.transformOrigin ?? "50% 50%", delete h.transformOrigin), f.transform && (f.transformBox = c?.transformBox ?? "fill-box", delete h.transformBox), e !== void 0 && (h.x = e), n !== void 0 && (h.y = n), i !== void 0 && (h.scale = i), s !== void 0 && Dl(h, s, o, r, !1);
}
const or = () => ({
  ...Mn(),
  attrs: {}
}), ar = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function kl(t, e, n, i) {
  const s = dt(() => {
    const o = or();
    return rr(o, e, ar(i), t.transformTemplate, t.style), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [e]);
  if (t.style) {
    const o = {};
    sr(o, t.style, t), s.style = { ...o, ...s.style };
  }
  return s;
}
const Rl = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Vn(t) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof t != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    t.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(Rl.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(t))
    )
  );
}
function El(t, e, n, { latestValues: i }, s, o = !1) {
  const a = (Vn(t) ? kl : Vl)(e, i, s, t), l = xl(e, typeof t == "string", o), u = t !== Zi ? { ...l, ...a, ref: n } : {}, { children: c } = e, h = dt(() => F(c) ? c.get() : c, [c]);
  return te(t, {
    ...u,
    children: h
  });
}
function ai(t) {
  const e = [{}, {}];
  return t?.values.forEach((n, i) => {
    e[0][i] = n.get(), e[1][i] = n.getVelocity();
  }), e;
}
function Nn(t, e, n, i) {
  if (typeof e == "function") {
    const [s, o] = ai(i);
    e = e(n !== void 0 ? n : t.custom, s, o);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [s, o] = ai(i);
    e = e(n !== void 0 ? n : t.custom, s, o);
  }
  return e;
}
function Zt(t) {
  return F(t) ? t.get() : t;
}
function zl({ scrapeMotionValuesFromProps: t, createRenderState: e }, n, i, s) {
  return {
    latestValues: Ll(n, i, s, t),
    renderState: e()
  };
}
function Ll(t, e, n, i) {
  const s = {}, o = i(t, {});
  for (const f in o)
    s[f] = Zt(o[f]);
  let { initial: r, animate: a } = t;
  const l = he(t), u = nr(t);
  e && u && !l && t.inherit !== !1 && (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || r === !1;
  const h = c ? a : r;
  if (h && typeof h != "boolean" && !ue(h)) {
    const f = Array.isArray(h) ? h : [h];
    for (let m = 0; m < f.length; m++) {
      const g = Nn(t, f[m]);
      if (g) {
        const { transitionEnd: x, transition: b, ...y } = g;
        for (const w in y) {
          let v = y[w];
          if (Array.isArray(v)) {
            const A = c ? v.length - 1 : 0;
            v = v[A];
          }
          v !== null && (s[w] = v);
        }
        for (const w in x)
          s[w] = x[w];
      }
    }
  }
  return s;
}
const lr = (t) => (e, n) => {
  const i = I(ce), s = I(le), o = () => zl(t, e, i, s);
  return n ? o() : Ze(o);
};
function Cn(t, e, n) {
  const { style: i } = t, s = {};
  for (const o in i)
    (F(i[o]) || e.style && F(e.style[o]) || ir(o, t) || n?.getValue(o)?.liveStyle !== void 0) && (s[o] = i[o]);
  return s;
}
const Il = /* @__PURE__ */ lr({
  scrapeMotionValuesFromProps: Cn,
  createRenderState: Mn
});
function cr(t, e, n) {
  const i = Cn(t, e, n);
  for (const s in t)
    if (F(t[s]) || F(e[s])) {
      const o = St.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      i[o] = t[s];
    }
  return i;
}
const Fl = /* @__PURE__ */ lr({
  scrapeMotionValuesFromProps: cr,
  createRenderState: or
}), jl = Symbol.for("motionComponentSymbol");
function pt(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function Bl(t, e, n) {
  return Ye(
    (i) => {
      i && t.onMount && t.onMount(i), e && (i ? e.mount(i) : e.unmount()), n && (typeof n == "function" ? n(i) : pt(n) && (n.current = i));
    },
    /**
     * Include externalRef in dependencies to ensure the callback updates
     * when the ref changes, allowing proper ref forwarding.
     */
    [e]
  );
}
const Dn = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Ol = "framerAppearId", ur = "data-" + Dn(Ol), hr = Tt({});
function $l(t, e, n, i, s) {
  const { visualElement: o } = I(ce), r = I(tr), a = I(le), l = I(Tn).reducedMotion, u = et(null);
  i = i || r.renderer, !u.current && i && (u.current = i(t, {
    visualState: e,
    parent: o,
    props: n,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: l
  }));
  const c = u.current, h = I(hr);
  c && !c.projection && s && (c.type === "html" || c.type === "svg") && _l(u.current, n, s, h);
  const f = et(!1);
  Qi(() => {
    c && f.current && c.update(n, a);
  });
  const m = n[ur], g = et(!!m && !window.MotionHandoffIsComplete?.(m) && window.MotionHasOptimisedAnimation?.(m));
  return as(() => {
    c && (f.current = !0, window.MotionIsMounted = !0, c.updateFeatures(), c.scheduleRenderMicrotask(), g.current && c.animationState && c.animationState.animateChanges());
  }), ae(() => {
    c && (!g.current && c.animationState && c.animationState.animateChanges(), g.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(m);
    }), g.current = !1), c.enteringChildren = void 0);
  }), c;
}
function _l(t, e, n, i) {
  const { layoutId: s, layout: o, drag: r, dragConstraints: a, layoutScroll: l, layoutRoot: u, layoutCrossfade: c } = e;
  t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : dr(t.parent)), t.projection.setOptions({
    layoutId: s,
    layout: o,
    alwaysMeasureLayout: !!r || a && pt(a),
    visualElement: t,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof o == "string" ? o : "both",
    initialPromotionConfig: i,
    crossfade: c,
    layoutScroll: l,
    layoutRoot: u
  });
}
function dr(t) {
  if (t)
    return t.options.allowProjection !== !1 ? t.projection : dr(t.parent);
}
function xe(t, { forwardMotionProps: e = !1 } = {}, n, i) {
  n && pl(n);
  const s = Vn(t) ? Fl : Il;
  function o(a, l) {
    let u;
    const c = {
      ...I(Tn),
      ...a,
      layoutId: Hl(a)
    }, { isStatic: h } = c, f = bl(a), m = s(a, h);
    if (!h && Qe) {
      Ul();
      const g = Wl(c);
      u = g.MeasureLayout, f.visualElement = $l(t, m, c, i, g.ProjectionNode);
    }
    return p(ce.Provider, { value: f, children: [u && f.visualElement ? d(u, { visualElement: f.visualElement, ...c }) : null, El(t, a, Bl(m, f.visualElement, l), m, h, e)] });
  }
  o.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
  const r = Xe(o);
  return r[jl] = t, r;
}
function Hl({ layoutId: t }) {
  const e = I(Je).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function Ul(t, e) {
  I(tr).strict;
}
function Wl(t) {
  const { drag: e, layout: n } = wt;
  if (!e && !n)
    return {};
  const i = { ...e, ...n };
  return {
    MeasureLayout: e?.isEnabled(t) || n?.isEnabled(t) ? i.MeasureLayout : void 0,
    ProjectionNode: i.ProjectionNode
  };
}
function Gl(t, e) {
  if (typeof Proxy > "u")
    return xe;
  const n = /* @__PURE__ */ new Map(), i = (o, r) => xe(o, r, t, e), s = (o, r) => i(o, r);
  return new Proxy(s, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (o, r) => r === "create" ? i : (n.has(r) || n.set(r, xe(r, void 0, t, e)), n.get(r))
  });
}
function fr({ top: t, left: e, right: n, bottom: i }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: i }
  };
}
function Kl({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function Xl(t, e) {
  if (!e)
    return t;
  const n = e({ x: t.left, y: t.top }), i = e({ x: t.right, y: t.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: i.y,
    right: i.x
  };
}
function ve(t) {
  return t === void 0 || t === 1;
}
function Oe({ scale: t, scaleX: e, scaleY: n }) {
  return !ve(t) || !ve(e) || !ve(n);
}
function at(t) {
  return Oe(t) || mr(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function mr(t) {
  return li(t.x) || li(t.y);
}
function li(t) {
  return t && t !== "0%";
}
function oe(t, e, n) {
  const i = t - n, s = e * i;
  return n + s;
}
function ci(t, e, n, i, s) {
  return s !== void 0 && (t = oe(t, s, i)), oe(t, n, i) + e;
}
function $e(t, e = 0, n = 1, i, s) {
  t.min = ci(t.min, e, n, i, s), t.max = ci(t.max, e, n, i, s);
}
function pr(t, { x: e, y: n }) {
  $e(t.x, e.translate, e.scale, e.originPoint), $e(t.y, n.translate, n.scale, n.originPoint);
}
const ui = 0.999999999999, hi = 1.0000000000001;
function Yl(t, e, n, i = !1) {
  const s = n.length;
  if (!s)
    return;
  e.x = e.y = 1;
  let o, r;
  for (let a = 0; a < s; a++) {
    o = n[a], r = o.projectionDelta;
    const { visualElement: l } = o.options;
    l && l.props.style && l.props.style.display === "contents" || (i && o.options.layoutScroll && o.scroll && o !== o.root && yt(t, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), r && (e.x *= r.x.scale, e.y *= r.y.scale, pr(t, r)), i && at(o.latestValues) && yt(t, o.latestValues));
  }
  e.x < hi && e.x > ui && (e.x = 1), e.y < hi && e.y > ui && (e.y = 1);
}
function gt(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function di(t, e, n, i, s = 0.5) {
  const o = C(t.min, t.max, s);
  $e(t, e, n, o, i);
}
function yt(t, e) {
  di(t.x, e.x, e.scaleX, e.scale, e.originX), di(t.y, e.y, e.scaleY, e.scale, e.originY);
}
function gr(t, e) {
  return fr(Xl(t.getBoundingClientRect(), e));
}
function ql(t, e, n) {
  const i = gr(t, n), { scroll: s } = e;
  return s && (gt(i.x, s.offset.x), gt(i.y, s.offset.y)), i;
}
const fi = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), xt = () => ({
  x: fi(),
  y: fi()
}), mi = () => ({ min: 0, max: 0 }), k = () => ({
  x: mi(),
  y: mi()
}), _e = { current: null }, yr = { current: !1 };
function Jl() {
  if (yr.current = !0, !!Qe)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => _e.current = t.matches;
      t.addEventListener("change", e), e();
    } else
      _e.current = !1;
}
const Zl = /* @__PURE__ */ new WeakMap();
function Ql(t, e, n) {
  for (const i in e) {
    const s = e[i], o = n[i];
    if (F(s))
      t.addValue(i, s);
    else if (F(o))
      t.addValue(i, bt(s, { owner: t }));
    else if (o !== s)
      if (t.hasValue(i)) {
        const r = t.getValue(i);
        r.liveStyle === !0 ? r.jump(s) : r.hasAnimated || r.set(s);
      } else {
        const r = t.getStaticValue(i);
        t.addValue(i, bt(r !== void 0 ? r : s, { owner: t }));
      }
  }
  for (const i in n)
    e[i] === void 0 && t.removeValue(i);
  return e;
}
const pi = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class tc {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(e, n, i) {
    return {};
  }
  constructor({ parent: e, props: n, presenceContext: i, reducedMotionConfig: s, blockInitialAnimation: o, visualState: r }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = yn, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const f = O.now();
      this.renderScheduledAt < f && (this.renderScheduledAt = f, N.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: u } = r;
    this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = e, this.props = n, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = s, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = he(n), this.isVariantNode = nr(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: c, ...h } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const f in h) {
      const m = h[f];
      l[f] !== void 0 && F(m) && m.set(l[f]);
    }
  }
  mount(e) {
    this.current = e, Zl.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, i) => this.bindToMotionValue(i, n)), yr.current || Jl(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : _e.current, this.parent?.addChild(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), nt(this.notifyUpdate), nt(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const e in this.events)
      this.events[e].clear();
    for (const e in this.features) {
      const n = this.features[e];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  addChild(e) {
    this.children.add(e), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(e);
  }
  removeChild(e) {
    this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e);
  }
  bindToMotionValue(e, n) {
    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
    const i = At.has(e);
    i && this.onBindTransform && this.onBindTransform();
    const s = n.on("change", (r) => {
      this.latestValues[e] = r, this.props.onUpdate && N.preRender(this.notifyUpdate), i && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let o;
    window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, e, n)), this.valueSubscriptions.set(e, () => {
      s(), o && o(), n.owner && n.stop();
    });
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in wt) {
      const n = wt[e];
      if (!n)
        continue;
      const { isEnabled: i, Feature: s } = n;
      if (!this.features[e] && s && i(this.props) && (this.features[e] = new s(this)), this.features[e]) {
        const o = this.features[e];
        o.isMounted ? o.update() : (o.mount(), o.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : k();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let i = 0; i < pi.length; i++) {
      const s = pi[i];
      this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
      const o = "on" + s, r = e[o];
      r && (this.propEventSubscriptions[s] = this.on(s, r));
    }
    this.prevMotionValues = Ql(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(e, n) {
    const i = this.values.get(e);
    n !== i && (i && this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e])
      return this.props.values[e];
    let i = this.values.get(e);
    return i === void 0 && n !== void 0 && (i = bt(n === null ? void 0 : n, { owner: this }), this.addValue(e, i)), i;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e, n) {
    let i = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
    return i != null && (typeof i == "string" && (ls(i) || us(i)) ? i = parseFloat(i) : !ll(i) && it.test(n) && (i = Ws(e, n)), this.setBaseTarget(e, F(i) ? i.get() : i)), F(i) ? i.get() : i;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(e) {
    const { initial: n } = this.props;
    let i;
    if (typeof n == "string" || typeof n == "object") {
      const o = Nn(this.props, n, this.presenceContext?.custom);
      o && (i = o[e]);
    }
    if (n && i !== void 0)
      return i;
    const s = this.getBaseTargetFromProps(this.props, e);
    return s !== void 0 && !F(s) ? s : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new rn()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
  scheduleRenderMicrotask() {
    bn.render(this.render);
  }
}
class xr extends tc {
  constructor() {
    super(...arguments), this.KeyframeResolver = qa;
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: i }) {
    delete n[e], delete i[e];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    F(e) && (this.childSubscription = e.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function vr(t, { style: e, vars: n }, i, s) {
  const o = t.style;
  let r;
  for (r in e)
    o[r] = e[r];
  s?.applyProjectionStyles(o, i);
  for (r in n)
    o.setProperty(r, n[r]);
}
function ec(t) {
  return window.getComputedStyle(t);
}
class nc extends xr {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = vr;
  }
  readValueFromInstance(e, n) {
    if (At.has(n))
      return this.projection?.isProjecting ? Ee(n) : pa(e, n);
    {
      const i = ec(e), s = (ln(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return gr(e, n);
  }
  build(e, n, i) {
    An(e, n, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return Cn(e, n, i);
  }
}
const br = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function ic(t, e, n, i) {
  vr(t, e, void 0, i);
  for (const s in e.attrs)
    t.setAttribute(br.has(s) ? s : Dn(s), e.attrs[s]);
}
class sc extends xr {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = k;
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (At.has(n)) {
      const i = Us(n);
      return i && i.default || 0;
    }
    return n = br.has(n) ? n : Dn(n), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return cr(e, n, i);
  }
  build(e, n, i) {
    rr(e, n, this.isSVGTag, i.transformTemplate, i.style);
  }
  renderInstance(e, n, i, s) {
    ic(e, n, i, s);
  }
  mount(e) {
    this.isSVGTag = ar(e.tagName), super.mount(e);
  }
}
const rc = (t, e) => Vn(t) ? new sc(e) : new nc(e, {
  allowProjection: t !== Zi
});
function vt(t, e, n) {
  const i = t.getProps();
  return Nn(i, e, n !== void 0 ? n : i.custom, t);
}
const He = (t) => Array.isArray(t);
function oc(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, bt(n));
}
function ac(t) {
  return He(t) ? t[t.length - 1] || 0 : t;
}
function lc(t, e) {
  const n = vt(t, e);
  let { transitionEnd: i = {}, transition: s = {}, ...o } = n || {};
  o = { ...o, ...i };
  for (const r in o) {
    const a = ac(o[r]);
    oc(t, r, a);
  }
}
function cc(t) {
  return !!(F(t) && t.add);
}
function Ue(t, e) {
  const n = t.getValue("willChange");
  if (cc(n))
    return n.add(e);
  if (!n && Z.WillChange) {
    const i = new Z.WillChange("auto");
    t.addValue("willChange", i), i.add(e);
  }
}
function wr(t) {
  return t.props[ur];
}
const uc = (t) => t !== null;
function hc(t, { repeat: e, repeatType: n = "loop" }, i) {
  const s = t.filter(uc), o = e && n !== "loop" && e % 2 === 1 ? 0 : s.length - 1;
  return s[o];
}
const dc = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, fc = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), mc = {
  type: "keyframes",
  duration: 0.8
}, pc = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, gc = (t, { keyframes: e }) => e.length > 2 ? mc : At.has(t) ? t.startsWith("scale") ? fc(e[1]) : dc : pc;
function yc({ when: t, delay: e, delayChildren: n, staggerChildren: i, staggerDirection: s, repeat: o, repeatType: r, repeatDelay: a, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
const kn = (t, e, n, i = {}, s, o) => (r) => {
  const a = xn(i, t) || {}, l = a.delay || i.delay || 0;
  let { elapsed: u = 0 } = i;
  u = u - /* @__PURE__ */ X(l);
  const c = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: e.getVelocity(),
    ...a,
    delay: -u,
    onUpdate: (f) => {
      e.set(f), a.onUpdate && a.onUpdate(f);
    },
    onComplete: () => {
      r(), a.onComplete && a.onComplete();
    },
    name: t,
    motionValue: e,
    element: o ? void 0 : s
  };
  yc(a) || Object.assign(c, gc(t, c)), c.duration && (c.duration = /* @__PURE__ */ X(c.duration)), c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ X(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let h = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (je(c), c.delay === 0 && (h = !0)), (Z.instantAnimations || Z.skipAnimations) && (h = !0, je(c), c.delay = 0), c.allowFlatten = !a.type && !a.ease, h && !o && e.get() !== void 0) {
    const f = hc(c.keyframes, a);
    if (f !== void 0) {
      N.update(() => {
        c.onUpdate(f), c.onComplete();
      });
      return;
    }
  }
  return a.isSync ? new gn(c) : new ja(c);
};
function xc({ protectedKeys: t, needsAnimating: e }, n) {
  const i = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, i;
}
function Tr(t, e, { delay: n = 0, transitionOverride: i, type: s } = {}) {
  let { transition: o = t.getDefaultTransition(), transitionEnd: r, ...a } = e;
  i && (o = i);
  const l = [], u = s && t.animationState && t.animationState.getState()[s];
  for (const c in a) {
    const h = t.getValue(c, t.latestValues[c] ?? null), f = a[c];
    if (f === void 0 || u && xc(u, c))
      continue;
    const m = {
      delay: n,
      ...xn(o || {}, c)
    }, g = h.get();
    if (g !== void 0 && !h.isAnimating && !Array.isArray(f) && f === g && !m.velocity)
      continue;
    let x = !1;
    if (window.MotionHandoffAnimation) {
      const y = wr(t);
      if (y) {
        const w = window.MotionHandoffAnimation(y, c, N);
        w !== null && (m.startTime = w, x = !0);
      }
    }
    Ue(t, c), h.start(kn(c, h, f, t.shouldReduceMotion && $s.has(c) ? { type: !1 } : m, t, x));
    const b = h.animation;
    b && l.push(b);
  }
  return r && Promise.all(l).then(() => {
    N.update(() => {
      r && lc(t, r);
    });
  }), l;
}
function Pr(t, e, n, i = 0, s = 1) {
  const o = Array.from(t).sort((u, c) => u.sortNodePosition(c)).indexOf(e), r = t.size, a = (r - 1) * i;
  return typeof n == "function" ? n(o, r) : s === 1 ? o * i : a - o * i;
}
function We(t, e, n = {}) {
  const i = vt(t, e, n.type === "exit" ? t.presenceContext?.custom : void 0);
  let { transition: s = t.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const o = i ? () => Promise.all(Tr(t, i, n)) : () => Promise.resolve(), r = t.variantChildren && t.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: c, staggerDirection: h } = s;
    return vc(t, e, l, u, c, h, n);
  } : () => Promise.resolve(), { when: a } = s;
  if (a) {
    const [l, u] = a === "beforeChildren" ? [o, r] : [r, o];
    return l().then(() => u());
  } else
    return Promise.all([o(), r(n.delay)]);
}
function vc(t, e, n = 0, i = 0, s = 0, o = 1, r) {
  const a = [];
  for (const l of t.variantChildren)
    l.notify("AnimationStart", e), a.push(We(l, e, {
      ...r,
      delay: n + (typeof i == "function" ? 0 : i) + Pr(t.variantChildren, l, i, s, o)
    }).then(() => l.notify("AnimationComplete", e)));
  return Promise.all(a);
}
function bc(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let i;
  if (Array.isArray(e)) {
    const s = e.map((o) => We(t, o, n));
    i = Promise.all(s);
  } else if (typeof e == "string")
    i = We(t, e, n);
  else {
    const s = typeof e == "function" ? vt(t, e, n.custom) : e;
    i = Promise.all(Tr(t, s, n));
  }
  return i.then(() => {
    t.notify("AnimationComplete", e);
  });
}
function Sr(t, e) {
  if (!Array.isArray(e))
    return !1;
  const n = e.length;
  if (n !== t.length)
    return !1;
  for (let i = 0; i < n; i++)
    if (e[i] !== t[i])
      return !1;
  return !0;
}
const wc = Sn.length;
function Ar(t) {
  if (!t)
    return;
  if (!t.isControllingVariants) {
    const n = t.parent ? Ar(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < wc; n++) {
    const i = Sn[n], s = t.props[i];
    (jt(s) || s === !1) && (e[i] = s);
  }
  return e;
}
const Tc = [...Pn].reverse(), Pc = Pn.length;
function Sc(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: i }) => bc(t, n, i)));
}
function Ac(t) {
  let e = Sc(t), n = gi(), i = !0;
  const s = (l) => (u, c) => {
    const h = vt(t, c, l === "exit" ? t.presenceContext?.custom : void 0);
    if (h) {
      const { transition: f, transitionEnd: m, ...g } = h;
      u = { ...u, ...g, ...m };
    }
    return u;
  };
  function o(l) {
    e = l(t);
  }
  function r(l) {
    const { props: u } = t, c = Ar(t.parent) || {}, h = [], f = /* @__PURE__ */ new Set();
    let m = {}, g = 1 / 0;
    for (let b = 0; b < Pc; b++) {
      const y = Tc[b], w = n[y], v = u[y] !== void 0 ? u[y] : c[y], A = jt(v), T = y === l ? w.isActive : null;
      T === !1 && (g = b);
      let M = v === c[y] && v !== u[y] && A;
      if (M && i && t.manuallyAnimateOnMount && (M = !1), w.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !w.isActive && T === null || // If we didn't and don't have any defined prop for this animation type
      !v && !w.prevProp || // Or if the prop doesn't define an animation
      ue(v) || typeof v == "boolean")
        continue;
      const V = Mc(w.prevProp, v);
      let S = V || // If we're making this variant active, we want to always make it active
      y === l && w.isActive && !M && A || // If we removed a higher-priority variant (i is in reverse order)
      b > g && A, E = !1;
      const j = Array.isArray(v) ? v : [v];
      let Q = j.reduce(s(y), {});
      T === !1 && (Q = {});
      const { prevResolvedValues: Rn = {} } = w, Or = {
        ...Rn,
        ...Q
      }, En = (z) => {
        S = !0, f.has(z) && (E = !0, f.delete(z)), w.needsAnimating[z] = !0;
        const $ = t.getValue(z);
        $ && ($.liveStyle = !1);
      };
      for (const z in Or) {
        const $ = Q[z], rt = Rn[z];
        if (m.hasOwnProperty(z))
          continue;
        let ft = !1;
        He($) && He(rt) ? ft = !Sr($, rt) : ft = $ !== rt, ft ? $ != null ? En(z) : f.add(z) : $ !== void 0 && f.has(z) ? En(z) : w.protectedKeys[z] = !0;
      }
      w.prevProp = v, w.prevResolvedValues = Q, w.isActive && (m = { ...m, ...Q }), i && t.blockInitialAnimation && (S = !1);
      const zn = M && V;
      S && (!zn || E) && h.push(...j.map((z) => {
        const $ = { type: y };
        if (typeof z == "string" && i && !zn && t.manuallyAnimateOnMount && t.parent) {
          const { parent: rt } = t, ft = vt(rt, z);
          if (rt.enteringChildren && ft) {
            const { delayChildren: $r } = ft.transition || {};
            $.delay = Pr(rt.enteringChildren, t, $r);
          }
        }
        return {
          animation: z,
          options: $
        };
      }));
    }
    if (f.size) {
      const b = {};
      if (typeof u.initial != "boolean") {
        const y = vt(t, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        y && y.transition && (b.transition = y.transition);
      }
      f.forEach((y) => {
        const w = t.getBaseTarget(y), v = t.getValue(y);
        v && (v.liveStyle = !0), b[y] = w ?? null;
      }), h.push({ animation: b });
    }
    let x = !!h.length;
    return i && (u.initial === !1 || u.initial === u.animate) && !t.manuallyAnimateOnMount && (x = !1), i = !1, x ? e(h) : Promise.resolve();
  }
  function a(l, u) {
    if (n[l].isActive === u)
      return Promise.resolve();
    t.variantChildren?.forEach((h) => h.animationState?.setActive(l, u)), n[l].isActive = u;
    const c = r(l);
    for (const h in n)
      n[h].protectedKeys = {};
    return c;
  }
  return {
    animateChanges: r,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = gi();
    }
  };
}
function Mc(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !Sr(e, t) : !1;
}
function ot(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function gi() {
  return {
    animate: ot(!0),
    whileInView: ot(),
    whileHover: ot(),
    whileTap: ot(),
    whileDrag: ot(),
    whileFocus: ot(),
    exit: ot()
  };
}
class st {
  constructor(e) {
    this.isMounted = !1, this.node = e;
  }
  update() {
  }
}
class Vc extends st {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = Ac(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    ue(e) && (this.unmountControls = e.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let Nc = 0;
class Cc extends st {
  constructor() {
    super(...arguments), this.id = Nc++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext, { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === i)
      return;
    const s = this.node.animationState.setActive("exit", !e);
    n && !e && s.then(() => {
      n(this.id);
    });
  }
  mount() {
    const { register: e, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), e && (this.unmount = e(this.id));
  }
  unmount() {
  }
}
const Dc = {
  animation: {
    Feature: Vc
  },
  exit: {
    Feature: Cc
  }
};
function Ot(t, e, n, i = { passive: !0 }) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
}
function Ut(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  };
}
const kc = (t) => (e) => wn(e) && t(e, Ut(e));
function Rt(t, e, n, i) {
  return Ot(t, e, kc(n), i);
}
const Mr = 1e-4, Rc = 1 - Mr, Ec = 1 + Mr, Vr = 0.01, zc = 0 - Vr, Lc = 0 + Vr;
function B(t) {
  return t.max - t.min;
}
function Ic(t, e, n) {
  return Math.abs(t - e) <= n;
}
function yi(t, e, n, i = 0.5) {
  t.origin = i, t.originPoint = C(e.min, e.max, t.origin), t.scale = B(n) / B(e), t.translate = C(n.min, n.max, t.origin) - t.originPoint, (t.scale >= Rc && t.scale <= Ec || isNaN(t.scale)) && (t.scale = 1), (t.translate >= zc && t.translate <= Lc || isNaN(t.translate)) && (t.translate = 0);
}
function Et(t, e, n, i) {
  yi(t.x, e.x, n.x, i ? i.originX : void 0), yi(t.y, e.y, n.y, i ? i.originY : void 0);
}
function xi(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + B(e);
}
function Fc(t, e, n) {
  xi(t.x, e.x, n.x), xi(t.y, e.y, n.y);
}
function vi(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + B(e);
}
function zt(t, e, n) {
  vi(t.x, e.x, n.x), vi(t.y, e.y, n.y);
}
function H(t) {
  return [t("x"), t("y")];
}
const Nr = ({ current: t }) => t ? t.ownerDocument.defaultView : null, bi = (t, e) => Math.abs(t - e);
function jc(t, e) {
  const n = bi(t.x, e.x), i = bi(t.y, e.y);
  return Math.sqrt(n ** 2 + i ** 2);
}
class Cr {
  constructor(e, n, { transformPagePoint: i, contextWindow: s = window, dragSnapToOrigin: o = !1, distanceThreshold: r = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const f = we(this.lastMoveEventInfo, this.history), m = this.startEvent !== null, g = jc(f.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!m && !g)
        return;
      const { point: x } = f, { timestamp: b } = L;
      this.history.push({ ...x, timestamp: b });
      const { onStart: y, onMove: w } = this.handlers;
      m || (y && y(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), w && w(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, m) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = be(m, this.transformPagePoint), N.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, m) => {
      this.end();
      const { onEnd: g, onSessionEnd: x, resumeAnimation: b } = this.handlers;
      if (this.dragSnapToOrigin && b && b(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const y = we(f.type === "pointercancel" ? this.lastMoveEventInfo : be(m, this.transformPagePoint), this.history);
      this.startEvent && g && g(f, y), x && x(f, y);
    }, !wn(e))
      return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = i, this.distanceThreshold = r, this.contextWindow = s || window;
    const a = Ut(e), l = be(a, this.transformPagePoint), { point: u } = l, { timestamp: c } = L;
    this.history = [{ ...u, timestamp: c }];
    const { onSessionStart: h } = n;
    h && h(e, we(l, this.history)), this.removeListeners = $t(Rt(this.contextWindow, "pointermove", this.handlePointerMove), Rt(this.contextWindow, "pointerup", this.handlePointerUp), Rt(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), nt(this.updatePoint);
  }
}
function be(t, e) {
  return e ? { point: e(t.point) } : t;
}
function wi(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function we({ point: t }, e) {
  return {
    point: t,
    delta: wi(t, Dr(e)),
    offset: wi(t, Bc(e)),
    velocity: Oc(e, 0.1)
  };
}
function Bc(t) {
  return t[0];
}
function Dr(t) {
  return t[t.length - 1];
}
function Oc(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let n = t.length - 1, i = null;
  const s = Dr(t);
  for (; n >= 0 && (i = t[n], !(s.timestamp - i.timestamp > /* @__PURE__ */ X(e))); )
    n--;
  if (!i)
    return { x: 0, y: 0 };
  const o = /* @__PURE__ */ U(s.timestamp - i.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const r = {
    x: (s.x - i.x) / o,
    y: (s.y - i.y) / o
  };
  return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
}
function $c(t, { min: e, max: n }, i) {
  return e !== void 0 && t < e ? t = i ? C(e, t, i.min) : Math.max(t, e) : n !== void 0 && t > n && (t = i ? C(n, t, i.max) : Math.min(t, n)), t;
}
function Ti(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function _c(t, { top: e, left: n, bottom: i, right: s }) {
  return {
    x: Ti(t.x, n, s),
    y: Ti(t.y, e, i)
  };
}
function Pi(t, e) {
  let n = e.min - t.min, i = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), { min: n, max: i };
}
function Hc(t, e) {
  return {
    x: Pi(t.x, e.x),
    y: Pi(t.y, e.y)
  };
}
function Uc(t, e) {
  let n = 0.5;
  const i = B(t), s = B(e);
  return s > i ? n = /* @__PURE__ */ Lt(e.min, e.max - i, t.min) : i > s && (n = /* @__PURE__ */ Lt(t.min, t.max - s, e.min)), J(0, 1, n);
}
function Wc(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const Ge = 0.35;
function Gc(t = Ge) {
  return t === !1 ? t = 0 : t === !0 && (t = Ge), {
    x: Si(t, "left", "right"),
    y: Si(t, "top", "bottom")
  };
}
function Si(t, e, n) {
  return {
    min: Ai(t, e),
    max: Ai(t, n)
  };
}
function Ai(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const Kc = /* @__PURE__ */ new WeakMap();
class Xc {
  constructor(e) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = k(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
  }
  start(e, { snapToCursor: n = !1, distanceThreshold: i } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1)
      return;
    const o = (h) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Ut(h).point);
    }, r = (h, f) => {
      const { drag: m, dragPropagation: g, onDragStart: x } = this.getProps();
      if (m && !g && (this.openDragLock && this.openDragLock(), this.openDragLock = tl(m), !this.openDragLock))
        return;
      this.latestPointerEvent = h, this.latestPanInfo = f, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), H((y) => {
        let w = this.getAxisMotionValue(y).get() || 0;
        if (Y.test(w)) {
          const { projection: v } = this.visualElement;
          if (v && v.layout) {
            const A = v.layout.layoutBox[y];
            A && (w = B(A) * (parseFloat(w) / 100));
          }
        }
        this.originPoint[y] = w;
      }), x && N.postRender(() => x(h, f)), Ue(this.visualElement, "transform");
      const { animationState: b } = this.visualElement;
      b && b.setActive("whileDrag", !0);
    }, a = (h, f) => {
      this.latestPointerEvent = h, this.latestPanInfo = f;
      const { dragPropagation: m, dragDirectionLock: g, onDirectionLock: x, onDrag: b } = this.getProps();
      if (!m && !this.openDragLock)
        return;
      const { offset: y } = f;
      if (g && this.currentDirection === null) {
        this.currentDirection = Yc(y), this.currentDirection !== null && x && x(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, y), this.updateAxis("y", f.point, y), this.visualElement.render(), b && b(h, f);
    }, l = (h, f) => {
      this.latestPointerEvent = h, this.latestPanInfo = f, this.stop(h, f), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, u = () => H((h) => this.getAnimationState(h) === "paused" && this.getAxisMotionValue(h).animation?.play()), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Cr(e, {
      onSessionStart: o,
      onStart: r,
      onMove: a,
      onSessionEnd: l,
      resumeAnimation: u
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
      distanceThreshold: i,
      contextWindow: Nr(this.visualElement)
    });
  }
  /**
   * @internal
   */
  stop(e, n) {
    const i = e || this.latestPointerEvent, s = n || this.latestPanInfo, o = this.isDragging;
    if (this.cancel(), !o || !s || !i)
      return;
    const { velocity: r } = s;
    this.startAnimation(r);
    const { onDragEnd: a } = this.getProps();
    a && N.postRender(() => a(i, s));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: i } = this.getProps();
    !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(e, n, i) {
    const { drag: s } = this.getProps();
    if (!i || !Yt(e, s, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + i[e];
    this.constraints && this.constraints[e] && (r = $c(r, this.constraints[e], this.elastic[e])), o.set(r);
  }
  resolveConstraints() {
    const { dragConstraints: e, dragElastic: n } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, s = this.constraints;
    e && pt(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && i ? this.constraints = _c(i.layoutBox, e) : this.constraints = !1, this.elastic = Gc(n), s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && H((o) => {
      this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = Wc(i.layoutBox[o], this.constraints[o]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !pt(e))
      return !1;
    const i = e.current, { projection: s } = this.visualElement;
    if (!s || !s.layout)
      return !1;
    const o = ql(i, s.root, this.visualElement.getTransformPagePoint());
    let r = Hc(s.layout.layoutBox, o);
    if (n) {
      const a = n(Kl(r));
      this.hasMutatedConstraints = !!a, a && (r = fr(a));
    }
    return r;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: i, dragElastic: s, dragTransition: o, dragSnapToOrigin: r, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = H((c) => {
      if (!Yt(c, n, this.currentDirection))
        return;
      let h = l && l[c] || {};
      r && (h = { min: 0, max: 0 });
      const f = s ? 200 : 1e6, m = s ? 40 : 1e7, g = {
        type: "inertia",
        velocity: i ? e[c] : 0,
        bounceStiffness: f,
        bounceDamping: m,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...o,
        ...h
      };
      return this.startAxisValueAnimation(c, g);
    });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(e, n) {
    const i = this.getAxisMotionValue(e);
    return Ue(this.visualElement, e), i.start(kn(e, i, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    H((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    H((e) => this.getAxisMotionValue(e).animation?.pause());
  }
  getAnimationState(e) {
    return this.getAxisMotionValue(e).animation?.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`, i = this.visualElement.getProps(), s = i[n];
    return s || this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0);
  }
  snapToCursor(e) {
    H((n) => {
      const { drag: i } = this.getProps();
      if (!Yt(n, i, this.currentDirection))
        return;
      const { projection: s } = this.visualElement, o = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: r, max: a } = s.layout.layoutBox[n];
        o.set(e[n] - C(r, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: e, dragConstraints: n } = this.getProps(), { projection: i } = this.visualElement;
    if (!pt(n) || !i || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    H((r) => {
      const a = this.getAxisMotionValue(r);
      if (a && this.constraints !== !1) {
        const l = a.get();
        s[r] = Uc({ min: l, max: l }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), H((r) => {
      if (!Yt(r, e, null))
        return;
      const a = this.getAxisMotionValue(r), { min: l, max: u } = this.constraints[r];
      a.set(C(l, u, s[r]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Kc.set(this.visualElement, this);
    const e = this.visualElement.current, n = Rt(e, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), i = () => {
      const { dragConstraints: l } = this.getProps();
      pt(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, o = s.addEventListener("measure", i);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), N.read(i);
    const r = Ot(window, "resize", () => this.scalePositionWithinConstraints()), a = s.addEventListener("didUpdate", (({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (H((c) => {
        const h = this.getAxisMotionValue(c);
        h && (this.originPoint[c] += l[c].translate, h.set(h.get() + l[c].translate));
      }), this.visualElement.render());
    }));
    return () => {
      r(), n(), o(), a && a();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: i = !1, dragPropagation: s = !1, dragConstraints: o = !1, dragElastic: r = Ge, dragMomentum: a = !0 } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: i,
      dragPropagation: s,
      dragConstraints: o,
      dragElastic: r,
      dragMomentum: a
    };
  }
}
function Yt(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function Yc(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class qc extends st {
  constructor(e) {
    super(e), this.removeGroupControls = W, this.removeListeners = W, this.controls = new Xc(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || W;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Mi = (t) => (e, n) => {
  t && N.postRender(() => t(e, n));
};
class Jc extends st {
  constructor() {
    super(...arguments), this.removePointerDownListener = W;
  }
  onPointerDown(e) {
    this.session = new Cr(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Nr(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: i, onPanEnd: s } = this.node.getProps();
    return {
      onSessionStart: Mi(e),
      onStart: Mi(n),
      onMove: i,
      onEnd: (o, r) => {
        delete this.session, s && N.postRender(() => s(o, r));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Rt(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Qt = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Vi(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const Vt = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (P.test(t))
        t = parseFloat(t);
      else
        return t;
    const n = Vi(t, e.target.x), i = Vi(t, e.target.y);
    return `${n}% ${i}%`;
  }
}, Zc = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const i = t, s = it.parse(t);
    if (s.length > 5)
      return i;
    const o = it.createTransformer(t), r = typeof s[0] != "number" ? 1 : 0, a = n.x.scale * e.x, l = n.y.scale * e.y;
    s[0 + r] /= a, s[1 + r] /= l;
    const u = C(a, l, 0.5);
    return typeof s[2 + r] == "number" && (s[2 + r] /= u), typeof s[3 + r] == "number" && (s[3 + r] /= u), o(s);
  }
};
let Te = !1;
class Qc extends Ji {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: i, layoutId: s } = this.props, { projection: o } = e;
    wl(tu), o && (n.group && n.group.add(o), i && i.register && s && i.register(o), Te && o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), Qt.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: i, drag: s, isPresent: o } = this.props, { projection: r } = i;
    return r && (r.isPresent = o, Te = !0, s || e.layoutDependency !== n || n === void 0 || e.isPresent !== o ? r.willUpdate() : this.safeToRemove(), e.isPresent !== o && (o ? r.promote() : r.relegate() || N.postRender(() => {
      const a = r.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e && (e.root.didUpdate(), bn.postRender(() => {
      !e.currentAnimation && e.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: i } = this.props, { projection: s } = e;
    Te = !0, s && (s.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(s), i && i.deregister && i.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function kr(t) {
  const [e, n] = Zs(), i = I(Je);
  return d(Qc, { ...t, layoutGroup: i, switchLayoutGroup: I(hr), isPresent: e, safeToRemove: n });
}
const tu = {
  borderRadius: {
    ...Vt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Vt,
  borderTopRightRadius: Vt,
  borderBottomLeftRadius: Vt,
  borderBottomRightRadius: Vt,
  boxShadow: Zc
};
function eu(t, e, n) {
  const i = F(t) ? t : bt(t);
  return i.start(kn("", i, e, n)), i.animation;
}
const nu = (t, e) => t.depth - e.depth;
class iu {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    tn(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    en(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(nu), this.isDirty = !1, this.children.forEach(e);
  }
}
function su(t, e) {
  const n = O.now(), i = ({ timestamp: s }) => {
    const o = s - n;
    o >= e && (nt(i), t(o - e));
  };
  return N.setup(i, !0), () => nt(i);
}
const Rr = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], ru = Rr.length, Ni = (t) => typeof t == "string" ? parseFloat(t) : t, Ci = (t) => typeof t == "number" || P.test(t);
function ou(t, e, n, i, s, o) {
  s ? (t.opacity = C(0, n.opacity ?? 1, au(i)), t.opacityExit = C(e.opacity ?? 1, 0, lu(i))) : o && (t.opacity = C(e.opacity ?? 1, n.opacity ?? 1, i));
  for (let r = 0; r < ru; r++) {
    const a = `border${Rr[r]}Radius`;
    let l = Di(e, a), u = Di(n, a);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || Ci(l) === Ci(u) ? (t[a] = Math.max(C(Ni(l), Ni(u), i), 0), (Y.test(u) || Y.test(l)) && (t[a] += "%")) : t[a] = u;
  }
  (e.rotate || n.rotate) && (t.rotate = C(e.rotate || 0, n.rotate || 0, i));
}
function Di(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const au = /* @__PURE__ */ Er(0, 0.5, xs), lu = /* @__PURE__ */ Er(0.5, 0.95, W);
function Er(t, e, n) {
  return (i) => i < t ? 0 : i > e ? 1 : n(/* @__PURE__ */ Lt(t, e, i));
}
function ki(t, e) {
  t.min = e.min, t.max = e.max;
}
function _(t, e) {
  ki(t.x, e.x), ki(t.y, e.y);
}
function Ri(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
function Ei(t, e, n, i, s) {
  return t -= e, t = oe(t, 1 / n, i), s !== void 0 && (t = oe(t, 1 / s, i)), t;
}
function cu(t, e = 0, n = 1, i = 0.5, s, o = t, r = t) {
  if (Y.test(e) && (e = parseFloat(e), e = C(r.min, r.max, e / 100) - r.min), typeof e != "number")
    return;
  let a = C(o.min, o.max, i);
  t === o && (a -= e), t.min = Ei(t.min, e, n, a, s), t.max = Ei(t.max, e, n, a, s);
}
function zi(t, e, [n, i, s], o, r) {
  cu(t, e[n], e[i], e[s], e.scale, o, r);
}
const uu = ["x", "scaleX", "originX"], hu = ["y", "scaleY", "originY"];
function Li(t, e, n, i) {
  zi(t.x, e, uu, n ? n.x : void 0, i ? i.x : void 0), zi(t.y, e, hu, n ? n.y : void 0, i ? i.y : void 0);
}
function Ii(t) {
  return t.translate === 0 && t.scale === 1;
}
function zr(t) {
  return Ii(t.x) && Ii(t.y);
}
function Fi(t, e) {
  return t.min === e.min && t.max === e.max;
}
function du(t, e) {
  return Fi(t.x, e.x) && Fi(t.y, e.y);
}
function ji(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function Lr(t, e) {
  return ji(t.x, e.x) && ji(t.y, e.y);
}
function Bi(t) {
  return B(t.x) / B(t.y);
}
function Oi(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
class fu {
  constructor() {
    this.members = [];
  }
  add(e) {
    tn(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (en(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((s) => e === s);
    if (n === 0)
      return !1;
    let i;
    for (let s = n; s >= 0; s--) {
      const o = this.members[s];
      if (o.isPresent !== !1) {
        i = o;
        break;
      }
    }
    return i ? (this.promote(i), !0) : !1;
  }
  promote(e, n) {
    const i = this.lead;
    if (e !== i && (this.prevLead = i, this.lead = e, e.show(), i)) {
      i.instance && i.scheduleRender(), e.scheduleRender(), e.resumeFrom = i, n && (e.resumeFrom.preserveOpacity = !0), i.snapshot && (e.snapshot = i.snapshot, e.snapshot.latestValues = i.animationValues || i.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: s } = e.options;
      s === !1 && i.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: i } = e;
      n.onExitComplete && n.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function mu(t, e, n) {
  let i = "";
  const s = t.x.translate / e.x, o = t.y.translate / e.y, r = n?.z || 0;
  if ((s || o || r) && (i = `translate3d(${s}px, ${o}px, ${r}px) `), (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: h, rotateY: f, skewX: m, skewY: g } = n;
    u && (i = `perspective(${u}px) ${i}`), c && (i += `rotate(${c}deg) `), h && (i += `rotateX(${h}deg) `), f && (i += `rotateY(${f}deg) `), m && (i += `skewX(${m}deg) `), g && (i += `skewY(${g}deg) `);
  }
  const a = t.x.scale * e.x, l = t.y.scale * e.y;
  return (a !== 1 || l !== 1) && (i += `scale(${a}, ${l})`), i || "none";
}
const Pe = ["", "X", "Y", "Z"], pu = 1e3;
let gu = 0;
function Se(t, e, n, i) {
  const { latestValues: s } = e;
  s[t] && (n[t] = s[t], e.setStaticValue(t, 0), i && (i[t] = 0));
}
function Ir(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t)
    return;
  const { visualElement: e } = t.options;
  if (!e)
    return;
  const n = wr(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: o } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", N, !(s || o));
  }
  const { parent: i } = t;
  i && !i.hasCheckedOptimisedAppear && Ir(i);
}
function Fr({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: i, resetTransform: s }) {
  return class {
    constructor(r = {}, a = e?.()) {
      this.id = gu++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(vu), this.nodes.forEach(Pu), this.nodes.forEach(Su), this.nodes.forEach(bu);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = r, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new iu());
    }
    addEventListener(r, a) {
      return this.eventHandlers.has(r) || this.eventHandlers.set(r, new rn()), this.eventHandlers.get(r).add(a);
    }
    notifyListeners(r, ...a) {
      const l = this.eventHandlers.get(r);
      l && l.notify(...a);
    }
    hasListeners(r) {
      return this.eventHandlers.has(r);
    }
    /**
     * Lifecycles
     */
    mount(r) {
      if (this.instance)
        return;
      this.isSVG = Js(r) && !ol(r), this.instance = r;
      const { layoutId: a, layout: l, visualElement: u } = this.options;
      if (u && !u.current && u.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0), t) {
        let c, h = 0;
        const f = () => this.root.updateBlockedByResize = !1;
        N.read(() => {
          h = window.innerWidth;
        }), t(r, () => {
          const m = window.innerWidth;
          m !== h && (h = m, this.root.updateBlockedByResize = !0, c && c(), c = su(f, 250), Qt.hasAnimatedSinceResize && (Qt.hasAnimatedSinceResize = !1, this.nodes.forEach(Hi)));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && u && (a || l) && this.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: h, hasRelativeLayoutChanged: f, layout: m }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const g = this.options.transition || u.getDefaultTransition() || Cu, { onLayoutAnimationStart: x, onLayoutAnimationComplete: b } = u.getProps(), y = !this.targetLayout || !Lr(this.targetLayout, m), w = !h && f;
        if (this.options.layoutRoot || this.resumeFrom || w || h && (y || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const v = {
            ...xn(g, "layout"),
            onPlay: x,
            onComplete: b
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (v.delay = 0, v.type = !1), this.startAnimation(v), this.setAnimationOrigin(c, w);
        } else
          h || Hi(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = m;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const r = this.getStack();
      r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), nt(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Au), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: r } = this.options;
      return r && r.getProps().transformTemplate;
    }
    willUpdate(r = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Ir(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const h = this.path[c];
        h.shouldResetTransform = !0, h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), r && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach($i);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(_i);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(Tu), this.nodes.forEach(yu), this.nodes.forEach(xu)) : this.nodes.forEach(_i), this.clearAllSnapshots();
      const a = O.now();
      L.delta = J(0, 1e3 / 60, a - L.timestamp), L.timestamp = a, L.isProcessing = !0, de.update.process(L), de.preRender.process(L), de.render.process(L), L.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, bn.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(wu), this.sharedNodes.forEach(Mu);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, N.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      N.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !B(this.snapshot.measuredBox.x) && !B(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const r = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = k(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, r ? r.layoutBox : void 0);
    }
    updateScroll(r = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === r && (a = !1), a && this.instance) {
        const l = i(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: r,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!s)
        return;
      const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !zr(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      r && this.instance && (a || at(this.latestValues) || c) && (s(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(r = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return r && (l = this.removeTransform(l)), Du(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: r } = this.options;
      if (!r)
        return k();
      const a = r.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(ku))) {
        const { scroll: u } = this.root;
        u && (gt(a.x, u.offset.x), gt(a.y, u.offset.y));
      }
      return a;
    }
    removeElementScroll(r) {
      const a = k();
      if (_(a, r), this.scroll?.wasRoot)
        return a;
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l], { scroll: c, options: h } = u;
        u !== this.root && c && h.layoutScroll && (c.wasRoot && _(a, r), gt(a.x, c.offset.x), gt(a.y, c.offset.y));
      }
      return a;
    }
    applyTransform(r, a = !1) {
      const l = k();
      _(l, r);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && yt(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), at(c.latestValues) && yt(l, c.latestValues);
      }
      return at(this.latestValues) && yt(l, this.latestValues), l;
    }
    removeTransform(r) {
      const a = k();
      _(a, r);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !at(u.latestValues))
          continue;
        Oe(u.latestValues) && u.updateSnapshot();
        const c = k(), h = u.measurePageBox();
        _(c, h), Li(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return at(this.latestValues) && Li(a, this.latestValues), a;
    }
    setTargetDelta(r) {
      this.targetDelta = r, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(r) {
      this.options = {
        ...this.options,
        ...r,
        crossfade: r.crossfade !== void 0 ? r.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== L.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(r = !1) {
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== a;
      if (!(r || l && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: c, layoutId: h } = this.options;
      if (!(!this.layout || !(c || h))) {
        if (this.resolvedRelativeTargetAt = L.timestamp, !this.targetDelta && !this.relativeTarget) {
          const f = this.getClosestProjectingParent();
          f && f.layout && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = k(), this.relativeTargetOrigin = k(), zt(this.relativeTargetOrigin, this.layout.layoutBox, f.layout.layoutBox), _(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = k(), this.targetWithTransforms = k()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Fc(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : _(this.target, this.layout.layoutBox), pr(this.target, this.targetDelta)) : _(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const f = this.getClosestProjectingParent();
          f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = k(), this.relativeTargetOrigin = k(), zt(this.relativeTargetOrigin, this.target, f.target), _(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Oe(this.parent.latestValues) || mr(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      const r = this.getLead(), a = !!this.resumingFrom || this !== r;
      let l = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (l = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === L.timestamp && (l = !1), l)
        return;
      const { layout: u, layoutId: c } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || c))
        return;
      _(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, f = this.treeScale.y;
      Yl(this.layoutCorrected, this.treeScale, this.path, a), r.layout && !r.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (r.target = r.layout.layoutBox, r.targetWithTransforms = k());
      const { target: m } = r;
      if (!m) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Ri(this.prevProjectionDelta.x, this.projectionDelta.x), Ri(this.prevProjectionDelta.y, this.projectionDelta.y)), Et(this.projectionDelta, this.layoutCorrected, m, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== f || !Oi(this.projectionDelta.x, this.prevProjectionDelta.x) || !Oi(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(r = !0) {
      if (this.options.visualElement?.scheduleRender(), r) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = xt(), this.projectionDelta = xt(), this.projectionDeltaWithTransform = xt();
    }
    setAnimationOrigin(r, a = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, h = xt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const f = k(), m = l ? l.source : void 0, g = this.layout ? this.layout.source : void 0, x = m !== g, b = this.getStack(), y = !b || b.members.length <= 1, w = !!(x && !y && this.options.crossfade === !0 && !this.path.some(Nu));
      this.animationProgress = 0;
      let v;
      this.mixTargetDelta = (A) => {
        const T = A / 1e3;
        Ui(h.x, r.x, T), Ui(h.y, r.y, T), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (zt(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Vu(this.relativeTarget, this.relativeTargetOrigin, f, T), v && du(this.relativeTarget, v) && (this.isProjectionDirty = !1), v || (v = k()), _(v, this.relativeTarget)), x && (this.animationValues = c, ou(c, u, this.latestValues, T, w, y)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = T;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (nt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = N.update(() => {
        Qt.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = bt(0)), this.currentAnimation = eu(this.motionValue, [0, 1e3], {
          ...r,
          velocity: 0,
          isSync: !0,
          onUpdate: (a) => {
            this.mixTargetDelta(a), r.onUpdate && r.onUpdate(a);
          },
          onStop: () => {
          },
          onComplete: () => {
            r.onComplete && r.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const r = this.getStack();
      r && r.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(pu), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = r;
      if (!(!a || !l || !u)) {
        if (this !== r && this.layout && u && jr(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || k();
          const h = B(this.layout.layoutBox.x);
          l.x.min = r.target.x.min, l.x.max = l.x.min + h;
          const f = B(this.layout.layoutBox.y);
          l.y.min = r.target.y.min, l.y.max = l.y.min + f;
        }
        _(a, l), yt(a, c), Et(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(r, a) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new fu()), this.sharedNodes.get(r).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const r = this.getStack();
      return r ? r.lead === this : !0;
    }
    getLead() {
      const { layoutId: r } = this.options;
      return r ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: r } = this.options;
      return r ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: r } = this.options;
      if (r)
        return this.root.sharedNodes.get(r);
    }
    promote({ needsReset: r, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l), r && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const r = this.getStack();
      return r ? r.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: r } = this.options;
      if (!r)
        return;
      let a = !1;
      const { latestValues: l } = r;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)
        return;
      const u = {};
      l.z && Se("z", r, u, this.animationValues);
      for (let c = 0; c < Pe.length; c++)
        Se(`rotate${Pe[c]}`, r, u, this.animationValues), Se(`skew${Pe[c]}`, r, u, this.animationValues);
      r.render();
      for (const c in u)
        r.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
      r.scheduleRender();
    }
    applyProjectionStyles(r, a) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        r.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, r.visibility = "", r.opacity = "", r.pointerEvents = Zt(a?.pointerEvents) || "", r.transform = l ? l(this.latestValues, "") : "none";
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        this.options.layoutId && (r.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, r.pointerEvents = Zt(a?.pointerEvents) || ""), this.hasProjected && !at(this.latestValues) && (r.transform = l ? l({}, "") : "none", this.hasProjected = !1);
        return;
      }
      r.visibility = "";
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let h = mu(this.projectionDeltaWithTransform, this.treeScale, c);
      l && (h = l(c, h)), r.transform = h;
      const { x: f, y: m } = this.projectionDelta;
      r.transformOrigin = `${f.origin * 100}% ${m.origin * 100}% 0`, u.animationValues ? r.opacity = u === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : r.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
      for (const g in Bt) {
        if (c[g] === void 0)
          continue;
        const { correct: x, applyTo: b, isCSSVariable: y } = Bt[g], w = h === "none" ? c[g] : x(c[g], u);
        if (b) {
          const v = b.length;
          for (let A = 0; A < v; A++)
            r[b[A]] = w;
        } else
          y ? this.options.visualElement.renderState.vars[g] = w : r[g] = w;
      }
      this.options.layoutId && (r.pointerEvents = u === this ? Zt(a?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((r) => r.currentAnimation?.stop()), this.root.nodes.forEach($i), this.root.sharedNodes.clear();
    }
  };
}
function yu(t) {
  t.updateLayout();
}
function xu(t) {
  const e = t.resumeFrom?.snapshot || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: i } = t.layout, { animationType: s } = t.options, o = e.source !== t.layout.source;
    s === "size" ? H((c) => {
      const h = o ? e.measuredBox[c] : e.layoutBox[c], f = B(h);
      h.min = n[c].min, h.max = h.min + f;
    }) : jr(s, e.layoutBox, n) && H((c) => {
      const h = o ? e.measuredBox[c] : e.layoutBox[c], f = B(n[c]);
      h.max = h.min + f, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[c].max = t.relativeTarget[c].min + f);
    });
    const r = xt();
    Et(r, n, e.layoutBox);
    const a = xt();
    o ? Et(a, t.applyTransform(i, !0), e.measuredBox) : Et(a, n, e.layoutBox);
    const l = !zr(r);
    let u = !1;
    if (!t.resumeFrom) {
      const c = t.getClosestProjectingParent();
      if (c && !c.resumeFrom) {
        const { snapshot: h, layout: f } = c;
        if (h && f) {
          const m = k();
          zt(m, e.layoutBox, h.layoutBox);
          const g = k();
          zt(g, n, f.layoutBox), Lr(m, g) || (u = !0), c.options.layoutRoot && (t.relativeTarget = g, t.relativeTargetOrigin = m, t.relativeParent = c);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: n,
      snapshot: e,
      delta: a,
      layoutDelta: r,
      hasLayoutChanged: l,
      hasRelativeLayoutChanged: u
    });
  } else if (t.isLead()) {
    const { onExitComplete: n } = t.options;
    n && n();
  }
  t.options.transition = void 0;
}
function vu(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function bu(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function wu(t) {
  t.clearSnapshot();
}
function $i(t) {
  t.clearMeasurements();
}
function _i(t) {
  t.isLayoutDirty = !1;
}
function Tu(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function Hi(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function Pu(t) {
  t.resolveTargetDelta();
}
function Su(t) {
  t.calcProjection();
}
function Au(t) {
  t.resetSkewAndRotation();
}
function Mu(t) {
  t.removeLeadSnapshot();
}
function Ui(t, e, n) {
  t.translate = C(e.translate, 0, n), t.scale = C(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function Wi(t, e, n, i) {
  t.min = C(e.min, n.min, i), t.max = C(e.max, n.max, i);
}
function Vu(t, e, n, i) {
  Wi(t.x, e.x, n.x, i), Wi(t.y, e.y, n.y, i);
}
function Nu(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const Cu = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Gi = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), Ki = Gi("applewebkit/") && !Gi("chrome/") ? Math.round : W;
function Xi(t) {
  t.min = Ki(t.min), t.max = Ki(t.max);
}
function Du(t) {
  Xi(t.x), Xi(t.y);
}
function jr(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !Ic(Bi(e), Bi(n), 0.2);
}
function ku(t) {
  return t !== t.root && t.scroll?.wasRoot;
}
const Ru = Fr({
  attachResizeListener: (t, e) => Ot(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Ae = {
  current: void 0
}, Br = Fr({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!Ae.current) {
      const t = new Ru({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), Ae.current = t;
    }
    return Ae.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), Eu = {
  pan: {
    Feature: Jc
  },
  drag: {
    Feature: qc,
    ProjectionNode: Br,
    MeasureLayout: kr
  }
};
function Yi(t, e, n) {
  const { props: i } = t;
  t.animationState && i.whileHover && t.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n, o = i[s];
  o && N.postRender(() => o(e, Ut(e)));
}
class zu extends st {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = el(e, (n, i) => (Yi(this.node, i, "Start"), (s) => Yi(this.node, s, "End"))));
  }
  unmount() {
  }
}
class Lu extends st {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = $t(Ot(this.node.current, "focus", () => this.onFocus()), Ot(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function qi(t, e, n) {
  const { props: i } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled)
    return;
  t.animationState && i.whileTap && t.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n), o = i[s];
  o && N.postRender(() => o(e, Ut(e)));
}
class Iu extends st {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = rl(e, (n, i) => (qi(this.node, i, "Start"), (s, { success: o }) => qi(this.node, s, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Ke = /* @__PURE__ */ new WeakMap(), Me = /* @__PURE__ */ new WeakMap(), Fu = (t) => {
  const e = Ke.get(t.target);
  e && e(t);
}, ju = (t) => {
  t.forEach(Fu);
};
function Bu({ root: t, ...e }) {
  const n = t || document;
  Me.has(n) || Me.set(n, {});
  const i = Me.get(n), s = JSON.stringify(e);
  return i[s] || (i[s] = new IntersectionObserver(ju, { root: t, ...e })), i[s];
}
function Ou(t, e, n) {
  const i = Bu(e);
  return Ke.set(t, n), i.observe(t), () => {
    Ke.delete(t), i.unobserve(t);
  };
}
const $u = {
  some: 0,
  all: 1
};
class _u extends st {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(), { root: n, margin: i, amount: s = "some", once: o } = e, r = {
      root: n ? n.current : void 0,
      rootMargin: i,
      threshold: typeof s == "number" ? s : $u[s]
    }, a = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: h } = this.node.getProps(), f = u ? c : h;
      f && f(l);
    };
    return Ou(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Hu(e, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Hu({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const Uu = {
  inView: {
    Feature: _u
  },
  tap: {
    Feature: Iu
  },
  focus: {
    Feature: Lu
  },
  hover: {
    Feature: zu
  }
}, Wu = {
  layout: {
    ProjectionNode: Br,
    MeasureLayout: kr
  }
}, Gu = {
  ...Dc,
  ...Uu,
  ...Eu,
  ...Wu
}, G = /* @__PURE__ */ Gl(Gu, rc);
function Ku({ onOpenMenu: t }) {
  return /* @__PURE__ */ p("section", { className: "relative h-screen flex flex-col justify-center overflow-hidden bg-zinc-950", children: [
    /* @__PURE__ */ p("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ d(
        "img",
        {
          src: "https://images.unsplash.com/photo-1680946496238-5272d3c407fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZGFyayUyMHJlc3RhdXJhbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzI3MTY3NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Premium Dark Restaurant Interior",
          className: "w-full h-full object-cover object-center scale-105"
        }
      ),
      /* @__PURE__ */ d("div", { className: "absolute inset-0 bg-zinc-950/70 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent mix-blend-multiply" })
    ] }),
    /* @__PURE__ */ d("div", { className: "relative z-10 max-w-7xl mx-auto px-6 w-full mt-20", children: /* @__PURE__ */ p(
      G.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
        className: "max-w-2xl",
        children: [
          /* @__PURE__ */ p("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ d("span", { className: "w-12 h-[1px] bg-amber-500/50" }),
            /* @__PURE__ */ d("span", { className: "text-amber-500 text-sm font-medium tracking-[0.2em] uppercase font-[Inter]", children: "Late Night Excellence" })
          ] }),
          /* @__PURE__ */ p("h1", { className: "font-[Playfair_Display] text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] tracking-tight text-zinc-50 mb-8", children: [
            "Elevated ",
            /* @__PURE__ */ d("br", {}),
            /* @__PURE__ */ d("span", { className: "italic text-zinc-300", children: "Comfort" }),
            " Food"
          ] }),
          /* @__PURE__ */ d("p", { className: "font-[Inter] text-zinc-400 text-lg md:text-xl max-w-lg mb-12 font-light leading-relaxed", children: "Where your midnight cravings meet gourmet craftsmanship. Experience our 8oz fresh patty burgers, wings, and hearty platters." }),
          /* @__PURE__ */ p("div", { className: "flex flex-col sm:flex-row gap-5", children: [
            /* @__PURE__ */ p(
              "button",
              {
                onClick: t,
                className: "group font-[Inter] relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber-600 hover:bg-amber-500 text-zinc-50 text-sm font-medium tracking-wide uppercase transition-all duration-300 overflow-hidden",
                children: [
                  /* @__PURE__ */ d("span", { className: "relative z-10", children: "View Menu" }),
                  /* @__PURE__ */ d(to, { className: "w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" })
                ]
              }
            ),
            /* @__PURE__ */ d(
              "a",
              {
                href: "#featured",
                className: "inline-flex font-[Inter] items-center justify-center gap-3 px-8 py-4 bg-transparent border border-zinc-700 hover:border-zinc-400 text-zinc-300 hover:text-zinc-50 text-sm font-medium tracking-wide uppercase transition-all duration-300",
                children: "Discover More"
              }
            )
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ p(
      G.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 1.5, duration: 1 },
        className: "absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-[Inter]",
        children: [
          /* @__PURE__ */ d("span", { className: "text-zinc-500 text-xs tracking-[0.2em] uppercase writing-vertical-rl", children: "Scroll" }),
          /* @__PURE__ */ d("div", { className: "w-[1px] h-12 bg-zinc-800 relative overflow-hidden", children: /* @__PURE__ */ d(
            G.div,
            {
              animate: { y: ["-100%", "100%"] },
              transition: { repeat: 1 / 0, duration: 2, ease: "linear" },
              className: "absolute inset-0 bg-amber-500"
            }
          ) })
        ]
      }
    )
  ] });
}
function Xu() {
  return /* @__PURE__ */ d("section", { id: "about", className: "py-32 px-6 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden", children: /* @__PURE__ */ d("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ p("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center", children: [
    /* @__PURE__ */ p(
      G.div,
      {
        initial: { opacity: 0, x: -30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: !0, margin: "-100px" },
        transition: { duration: 0.8 },
        className: "relative",
        children: [
          /* @__PURE__ */ p("div", { className: "aspect-[3/4] overflow-hidden bg-zinc-900 relative z-10", children: [
            /* @__PURE__ */ d(
              "img",
              {
                src: "https://images.unsplash.com/photo-1763024462247-cc38d6376795?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwcG9ydHJhaXQlMjBkYXJrJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NzI3MTc0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
                alt: "Our Chef and Owner",
                className: "w-full h-full object-cover opacity-80"
              }
            ),
            /* @__PURE__ */ d("div", { className: "absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" })
          ] }),
          /* @__PURE__ */ d("div", { className: "absolute -bottom-8 -right-8 w-2/3 aspect-square border border-amber-500/20 z-0 hidden md:block" }),
          /* @__PURE__ */ d("div", { className: "absolute top-1/2 -left-12 transform -translate-y-1/2 hidden lg:block", children: /* @__PURE__ */ d("span", { className: "text-zinc-800 font-[Playfair_Display] text-8xl font-bold opacity-30 select-none", children: "Est." }) })
        ]
      }
    ),
    /* @__PURE__ */ p(
      G.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: !0, margin: "-100px" },
        transition: { duration: 0.8, delay: 0.2 },
        children: [
          /* @__PURE__ */ p("div", { className: "flex items-center gap-3 mb-6 font-[Inter]", children: [
            /* @__PURE__ */ d("span", { className: "w-12 h-[1px] bg-amber-500/50" }),
            /* @__PURE__ */ d("span", { className: "text-amber-500 text-sm font-medium tracking-[0.2em] uppercase", children: "The Story" })
          ] }),
          /* @__PURE__ */ p("h2", { className: "font-[Playfair_Display] text-4xl md:text-5xl lg:text-6xl text-zinc-50 mb-8 leading-[1.1]", children: [
            "Born from the ",
            /* @__PURE__ */ d("br", {}),
            /* @__PURE__ */ d("span", { className: "italic text-zinc-400", children: "Midnight Hunger" })
          ] }),
          /* @__PURE__ */ p("div", { className: "space-y-6 font-[Inter] text-zinc-400 text-lg font-light leading-relaxed", children: [
            /* @__PURE__ */ d("p", { children: "It started with a simple problem: where do you go when it's 2 AM and you don't just want fast food, but a meal made with care, massive portions, and unapologetic flavor? That's how Cravings Late Night Food was born." }),
            /* @__PURE__ */ d("p", { children: "Founded by our head chef, we believe that late-night dining shouldn't mean compromising on quality. Every single one of our 8oz burger patties is formed fresh, never frozen. Our pizza dough is hand-tossed daily, and our platters are stacked high enough to feed a small army." }),
            /* @__PURE__ */ d("p", { children: "Whether you're finishing a long shift, celebrating a win with the team, or just hit with that undeniable midnight craving, our kitchen is fired up and ready to deliver comfort food at its absolute peak." })
          ] }),
          /* @__PURE__ */ p("div", { className: "mt-12 flex items-center gap-6", children: [
            /* @__PURE__ */ p("div", { className: "text-center", children: [
              /* @__PURE__ */ d("span", { className: "block font-[Playfair_Display] text-3xl text-zinc-100", children: "8oz" }),
              /* @__PURE__ */ d("span", { className: "font-[Inter] text-xs text-zinc-500 uppercase tracking-widest", children: "Fresh Patties" })
            ] }),
            /* @__PURE__ */ d("div", { className: "w-[1px] h-10 bg-zinc-800" }),
            /* @__PURE__ */ p("div", { className: "text-center", children: [
              /* @__PURE__ */ d("span", { className: "block font-[Playfair_Display] text-3xl text-zinc-100", children: "10+" }),
              /* @__PURE__ */ d("span", { className: "font-[Inter] text-xs text-zinc-500 uppercase tracking-widest", children: "Wing Flavours" })
            ] }),
            /* @__PURE__ */ d("div", { className: "w-[1px] h-10 bg-zinc-800" }),
            /* @__PURE__ */ p("div", { className: "text-center", children: [
              /* @__PURE__ */ d("span", { className: "block font-[Playfair_Display] text-3xl text-zinc-100", children: "4AM" }),
              /* @__PURE__ */ d("span", { className: "font-[Inter] text-xs text-zinc-500 uppercase tracking-widest", children: "Weekends" })
            ] })
          ] })
        ]
      }
    )
  ] }) }) });
}
const Yu = [
  {
    title: "The Gut Shot",
    desc: "2 fresh patties with all the trimmings & a perfectly fried egg.",
    img: "https://images.unsplash.com/photo-1692197275931-0793e08efcc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnVyZ2VyJTIwZGFyayUyMG1vb2R5fGVufDF8fHx8MTc3MjcxMjE1M3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Signature Wings",
    desc: "Platters stacked high. Pick from our legendary flavour roster.",
    img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwd2luZ3MlMjBkYXJrJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzcyNzE2NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Loaded Pizza",
    desc: "Hand-tossed 13-inch pies layered with premium fresh toppings.",
    img: "https://images.unsplash.com/photo-1767065604171-60c7bd2a1b32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwcGl6emElMjBkYXJrfGVufDF8fHx8MTc3MjcxNjc1N3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Classic Poutine",
    desc: "Crispy fries smothered in rich gravy and real cheese curds.",
    img: "https://images.unsplash.com/photo-1628070393837-0cade20e8353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3V0aW5lJTIwZGFyayUyMG1vb2R5fGVufDF8fHx8MTc3MjcxNzQ1MXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "The Cold Call Clubhouse",
    desc: "Turkey, ham, chicken, bacon, lettuce, tomato & cheddar piled high.",
    img: "https://images.unsplash.com/photo-1709689155439-f9e97bfec7d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbHViJTIwc2FuZHdpY2glMjBkYXJrJTIwbW9vZHl8ZW58MXx8fHwxNzcyNzE3NDUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Mac & Cheese Bites",
    desc: "Golden-fried macaroni bites with a gooey, cheesy center.",
    img: "https://images.unsplash.com/photo-1723473620176-8d26dc6314cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWMlMjBhbmQlMjBjaGVlc2UlMjBkYXJrfGVufDF8fHx8MTc3MjcxNzQ1MXww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];
function qu() {
  return /* @__PURE__ */ d("section", { id: "featured", className: "py-32 px-6 bg-zinc-950 relative border-t border-zinc-900", children: /* @__PURE__ */ p("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ p("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20", children: [
      /* @__PURE__ */ p("div", { children: [
        /* @__PURE__ */ p("div", { className: "flex items-center gap-3 mb-4 font-[Inter]", children: [
          /* @__PURE__ */ d("span", { className: "w-8 h-[1px] bg-amber-500/50" }),
          /* @__PURE__ */ d("span", { className: "text-amber-500 text-xs font-medium tracking-[0.2em] uppercase", children: "Late Night Signatures" })
        ] }),
        /* @__PURE__ */ d("h2", { className: "font-[Playfair_Display] text-4xl md:text-5xl text-zinc-50", children: "Hearty Cravings" })
      ] }),
      /* @__PURE__ */ d("p", { className: "font-[Inter] text-zinc-400 max-w-md text-sm leading-relaxed", children: "From our fresh 8oz burger patties to our decadent sharing platters, we craft our menu to satisfy your biggest late-night hunger." })
    ] }),
    /* @__PURE__ */ d("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: Yu.map((t, e) => /* @__PURE__ */ p(
      G.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: !0, margin: "-100px" },
        transition: { duration: 0.6, delay: e * 0.1 },
        className: "group cursor-pointer flex flex-col",
        children: [
          /* @__PURE__ */ p("div", { className: "relative aspect-[4/5] overflow-hidden mb-6 bg-zinc-900", children: [
            /* @__PURE__ */ d(
              "img",
              {
                src: t.img,
                alt: t.title,
                className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              }
            ),
            /* @__PURE__ */ d("div", { className: "absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500" }),
            /* @__PURE__ */ d("div", { className: "absolute top-4 right-4 w-10 h-10 bg-zinc-950/50 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300", children: /* @__PURE__ */ d(no, { className: "w-5 h-5 text-amber-500" }) })
          ] }),
          /* @__PURE__ */ d("div", { className: "flex items-start justify-between flex-1", children: /* @__PURE__ */ p("div", { children: [
            /* @__PURE__ */ d("h3", { className: "font-[Playfair_Display] text-xl text-zinc-100 mb-2", children: t.title }),
            /* @__PURE__ */ d("p", { className: "font-[Inter] text-sm text-zinc-500", children: t.desc })
          ] }) })
        ]
      },
      e
    )) })
  ] }) });
}
const Ju = [
  {
    name: "Michael R.",
    date: "2 weeks ago",
    rating: 5,
    text: "The Gut Shot burger is absolutely unreal. Hands down the best late-night food I've ever had. Massive portions and the meat actually tastes fresh, not like standard diner fare."
  },
  {
    name: "Sarah T.",
    date: "1 month ago",
    rating: 5,
    text: "Ordered the Jackpot Platter for a group of 4 after a night out. It was completely absurd in the best way possible. The dry ribs and mac & cheese bites were the stars."
  },
  {
    name: "David L.",
    date: "3 weeks ago",
    rating: 4,
    text: "Saved my life at 3 AM. The poutine is incredible - real cheese curds and a super rich gravy. Deducting one star only because I was too full to finish it!"
  },
  {
    name: "Emma W.",
    date: "2 months ago",
    rating: 5,
    text: "The spicy chicken wrap hits different when you're craving something with a kick. Love that they're open till 4am on weekends. My go-to spot now."
  }
];
function Zu() {
  const [t, e] = ee(!1);
  return /* @__PURE__ */ d("section", { id: "reviews", className: "py-32 px-6 bg-zinc-950 relative border-t border-zinc-900", children: /* @__PURE__ */ p("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ p("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20", children: [
      /* @__PURE__ */ p("div", { children: [
        /* @__PURE__ */ p("div", { className: "flex items-center gap-3 mb-4 font-[Inter]", children: [
          /* @__PURE__ */ d("span", { className: "w-8 h-[1px] bg-amber-500/50" }),
          /* @__PURE__ */ d("span", { className: "text-amber-500 text-xs font-medium tracking-[0.2em] uppercase", children: "Word of Mouth" })
        ] }),
        /* @__PURE__ */ d("h2", { className: "font-[Playfair_Display] text-4xl md:text-5xl text-zinc-50", children: "Guest Reviews" })
      ] }),
      /* @__PURE__ */ d(
        "button",
        {
          onClick: () => e(!t),
          className: "inline-flex font-[Inter] items-center justify-center px-8 py-4 bg-transparent border border-amber-600 hover:bg-amber-600 text-amber-500 hover:text-zinc-50 text-sm font-medium tracking-wide uppercase transition-all duration-300",
          children: t ? "Cancel Review" : "Leave a Review"
        }
      )
    ] }),
    /* @__PURE__ */ d(Qs, { children: t && /* @__PURE__ */ d(
      G.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        transition: { duration: 0.4 },
        className: "overflow-hidden mb-16",
        children: /* @__PURE__ */ p("div", { className: "bg-zinc-900 border border-zinc-800 p-8 relative", children: [
          /* @__PURE__ */ d(
            "button",
            {
              onClick: () => e(!1),
              className: "absolute top-6 right-6 text-zinc-500 hover:text-zinc-300",
              children: /* @__PURE__ */ d(os, { className: "w-5 h-5" })
            }
          ),
          /* @__PURE__ */ d("h3", { className: "font-[Playfair_Display] text-2xl text-zinc-100 mb-6", children: "Share Your Experience" }),
          /* @__PURE__ */ p("form", { className: "space-y-6 font-[Inter]", onSubmit: (n) => {
            n.preventDefault(), e(!1);
          }, children: [
            /* @__PURE__ */ p("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ p("div", { children: [
                /* @__PURE__ */ d("label", { className: "block text-zinc-400 text-sm mb-2 uppercase tracking-wide", children: "Name" }),
                /* @__PURE__ */ d("input", { type: "text", required: !0, className: "w-full bg-zinc-950 border border-zinc-800 text-zinc-100 px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors", placeholder: "Your name" })
              ] }),
              /* @__PURE__ */ p("div", { children: [
                /* @__PURE__ */ d("label", { className: "block text-zinc-400 text-sm mb-2 uppercase tracking-wide", children: "Rating" }),
                /* @__PURE__ */ p("select", { className: "w-full bg-zinc-950 border border-zinc-800 text-zinc-100 px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors appearance-none", children: [
                  /* @__PURE__ */ d("option", { value: "5", children: "5 Stars - Excellent" }),
                  /* @__PURE__ */ d("option", { value: "4", children: "4 Stars - Very Good" }),
                  /* @__PURE__ */ d("option", { value: "3", children: "3 Stars - Good" }),
                  /* @__PURE__ */ d("option", { value: "2", children: "2 Stars - Fair" }),
                  /* @__PURE__ */ d("option", { value: "1", children: "1 Star - Poor" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ p("div", { children: [
              /* @__PURE__ */ d("label", { className: "block text-zinc-400 text-sm mb-2 uppercase tracking-wide", children: "Review" }),
              /* @__PURE__ */ d("textarea", { required: !0, rows: 4, className: "w-full bg-zinc-950 border border-zinc-800 text-zinc-100 px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors resize-none", placeholder: "Tell us about your food..." })
            ] }),
            /* @__PURE__ */ d("button", { type: "submit", className: "px-8 py-4 bg-amber-600 hover:bg-amber-500 text-zinc-50 text-sm font-medium tracking-wide uppercase transition-all duration-300", children: "Submit Review" })
          ] })
        ] })
      }
    ) }),
    /* @__PURE__ */ d("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: Ju.map((n, i) => /* @__PURE__ */ p(
      G.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: !0, margin: "-50px" },
        transition: { duration: 0.5, delay: i * 0.1 },
        className: "bg-zinc-900/50 border border-zinc-800/50 p-8 flex flex-col",
        children: [
          /* @__PURE__ */ p("div", { className: "flex justify-between items-start mb-6", children: [
            /* @__PURE__ */ p("div", { children: [
              /* @__PURE__ */ d("h4", { className: "font-[Inter] font-medium text-zinc-100 text-lg", children: n.name }),
              /* @__PURE__ */ d("span", { className: "font-[Inter] text-zinc-500 text-sm", children: n.date })
            ] }),
            /* @__PURE__ */ p("div", { className: "flex gap-1 text-amber-500", children: [
              [...Array(n.rating)].map((s, o) => /* @__PURE__ */ d(Fn, { className: "w-4 h-4 fill-current" }, o)),
              [...Array(5 - n.rating)].map((s, o) => /* @__PURE__ */ d(Fn, { className: "w-4 h-4 text-zinc-700" }, o))
            ] })
          ] }),
          /* @__PURE__ */ p("p", { className: "font-[Inter] text-zinc-400 leading-relaxed italic flex-1", children: [
            '"',
            n.text,
            '"'
          ] })
        ]
      },
      i
    )) })
  ] }) });
}
function Qu() {
  return /* @__PURE__ */ d("section", { id: "find-us", className: "py-32 px-6 bg-zinc-950 relative border-t border-zinc-900", children: /* @__PURE__ */ p("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ p("div", { className: "flex items-center gap-3 mb-4 font-[Inter]", children: [
      /* @__PURE__ */ d("span", { className: "w-8 h-[1px] bg-amber-500/50" }),
      /* @__PURE__ */ d("span", { className: "text-amber-500 text-xs font-medium tracking-[0.2em] uppercase", children: "Location" })
    ] }),
    /* @__PURE__ */ d("h2", { className: "font-[Playfair_Display] text-4xl md:text-5xl text-zinc-50 mb-16", children: "Find Us" }),
    /* @__PURE__ */ p("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24", children: [
      /* @__PURE__ */ p(
        G.div,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.6 },
          className: "flex flex-col justify-center space-y-12",
          children: [
            /* @__PURE__ */ p("div", { children: [
              /* @__PURE__ */ d("h3", { className: "text-zinc-100 font-[Inter] font-medium uppercase tracking-widest text-sm mb-6 border-b border-zinc-800 pb-2", children: "Address & Contact" }),
              /* @__PURE__ */ p("ul", { className: "space-y-6 text-zinc-400 font-[Inter]", children: [
                /* @__PURE__ */ p("li", { className: "flex items-start gap-4", children: [
                  /* @__PURE__ */ d(ss, { className: "w-6 h-6 text-amber-500 shrink-0 mt-1" }),
                  /* @__PURE__ */ p("div", { children: [
                    /* @__PURE__ */ d("span", { className: "block text-zinc-200 text-lg mb-1", children: "Cravings Late Night Food" }),
                    /* @__PURE__ */ p("span", { children: [
                      "123 Midnight Avenue, Downtown",
                      /* @__PURE__ */ d("br", {}),
                      "Cityville, ST 10001"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ p("li", { className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ d(rs, { className: "w-6 h-6 text-amber-500 shrink-0" }),
                  /* @__PURE__ */ d("span", { className: "text-zinc-200 text-lg", children: "(555) 123-4567" })
                ] }),
                /* @__PURE__ */ p("li", { className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ d(is, { className: "w-6 h-6 text-amber-500 shrink-0" }),
                  /* @__PURE__ */ d("span", { className: "text-zinc-200 text-lg", children: "hungry@cravingslatenight.com" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ p("div", { children: [
              /* @__PURE__ */ d("h3", { className: "text-zinc-100 font-[Inter] font-medium uppercase tracking-widest text-sm mb-6 border-b border-zinc-800 pb-2", children: "Connect With Us" }),
              /* @__PURE__ */ p("div", { className: "flex items-center gap-6", children: [
                /* @__PURE__ */ p("div", { className: "flex items-center gap-3 group cursor-default", children: [
                  /* @__PURE__ */ d("div", { className: "w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-amber-500 group-hover:border-amber-500 transition-colors", children: /* @__PURE__ */ d(ns, { className: "w-5 h-5" }) }),
                  /* @__PURE__ */ d("span", { className: "font-[Inter] text-zinc-400", children: "@cravingslatenight" })
                ] }),
                /* @__PURE__ */ p("div", { className: "flex items-center gap-3 group cursor-default", children: [
                  /* @__PURE__ */ d("div", { className: "w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-amber-500 group-hover:border-amber-500 transition-colors", children: /* @__PURE__ */ d(es, { className: "w-5 h-5" }) }),
                  /* @__PURE__ */ d("span", { className: "font-[Inter] text-zinc-400", children: "/cravingslate" })
                ] })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ d(
        G.div,
        {
          initial: { opacity: 0, x: 20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.6, delay: 0.2 },
          className: "h-[400px] lg:h-[500px] w-full bg-zinc-900 border border-zinc-800 relative overflow-hidden",
          children: /* @__PURE__ */ d(
            "iframe",
            {
              src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus",
              width: "100%",
              height: "100%",
              style: { border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(80%) contrast(120%)" },
              allowFullScreen: !0,
              loading: "lazy",
              referrerPolicy: "no-referrer-when-downgrade",
              title: "Restaurant Location Map"
            }
          )
        }
      )
    ] })
  ] }) });
}
const th = [
  {
    category: "Burgers, Sandwiches & Wraps",
    note: "All burgers are 8 oz. fresh patties. All items below include fries (upgrade to onion rings $1, poutine $3, caesar salad $2)",
    items: [
      { name: "The Wild One", desc: "Mushrooms, onions & wild rice", price: "$14.00" },
      { name: "The Trump", desc: "Loaded with all the trimmings", price: "$14.00" },
      { name: "The Gut Shot", desc: "2 patties with all the trimmings & fried egg", price: "$18.00" },
      { name: "Mozza Bacon Burger", desc: "Lettuce, tomato, mozza, bacon", price: "$13.00" },
      { name: "The Stud", desc: "Bacon, mushroom & mozza", price: "$13.00" },
      { name: "The Simple One", desc: "Plain cheese burger", price: "$11.50" },
      { name: "The Spicy One", desc: "Deep fried pickles, chipotle mayo & sriracha topped with jalapenos & cheddar cheese", price: "$14.00" },
      { name: "The Griller", desc: "Our fresh beef patty with bacon & cheddar layered between 2 grilled cheese sandwiches", price: "$14.00" },
      { name: "The Chick", desc: "5 oz spicy breaded chicken breast, bacon, lettuce, tomato, cheddar", price: "$13.00" },
      { name: "The Pickle Burger", desc: "3 types of pickles, bacon, cheddar, chipotle mayo", price: "$14.00" },
      { name: "The Chicken Caesar Wrap", desc: "Romaine, bacon & sliced chicken breast", price: "$13.00" },
      { name: "The Kicker Beef Dip", desc: "Roasted beef, mushrooms & onions, topped with swiss cheese on a grilled panini bun", price: "$14.00" },
      { name: "Poutine Bacon Burger", desc: "Bacon, fries and mozza topped with gravy", price: "$14.00" },
      { name: "The Cold Call Clubhouse", desc: "Turkey, ham, chicken, bacon, lettuce, tomato & cheddar", price: "$13.00" },
      { name: "The Loaded Pizza Sub", desc: "8 inch pepperoni, salami, mushrooms, onions, green peppers, fresh pineapple & mozza", price: "$13.00" },
      { name: "Bannock Your Burger", desc: "Make your favourite burger a Bannock burger", price: "+$1.00" }
    ]
  },
  {
    category: "Popular Picks",
    items: [
      { name: "Dry Ribs & Caesar Salad", desc: "", price: "$12.75" },
      { name: "Dry Ribs & Fries", desc: "", price: "$11.25" },
      { name: "Chicken Fingers & Caesar Salad", desc: "", price: "$12.75" },
      { name: "Chicken Fingers & Fries", desc: "", price: "$11.25" },
      { name: "Breaded Wings & Fries", desc: "", price: "$11.75" },
      { name: "Chicken Caesar Salad", desc: "", price: "$11.75" },
      { name: "Chef's Salad", desc: "", price: "$11.75" },
      { name: "Caesar Salad", desc: "", price: "$8.50" },
      { name: "Taco in a Bag", desc: "", price: "$7.50" }
    ]
  },
  {
    category: "Pizzas (13 inch)",
    note: "One size only. Hand-crafted pies baked to perfection.",
    items: [
      { name: "Pepperoni", desc: "", price: "$24.25" },
      { name: "All Meat", desc: "", price: "$24.25" },
      { name: "Hawaiian", desc: "", price: "$24.25" },
      { name: "Canadian", desc: "", price: "$24.25" },
      { name: "Loaded", desc: "", price: "$26.50" },
      { name: "Buffalo Chicken", desc: "", price: "$24.25" }
    ]
  },
  {
    category: "Platters",
    items: [
      { name: "Wing Platter", desc: "30 wings in 5 flavours", price: "$23.50" },
      { name: "Pocket Aces Platter", desc: "Dry ribs, wings, fingers, fries", price: "$21.25" },
      { name: "Jackpot Platter (Large)", desc: "Dry ribs, wings, fingers, onion rings, fries, pickle chips, mac & cheese bites", price: "$42.50" },
      { name: "Jackpot Platter (Small)", desc: "Dry ribs, wings, fingers, onion rings, fries, pickle chips, mac & cheese bites", price: "$31.75" }
    ]
  },
  {
    category: "On the Side",
    items: [
      { name: "Poutine", desc: "", price: "$7.00" },
      { name: "Fries", desc: "", price: "$4.75" },
      { name: "Onion Rings", desc: "", price: "$5.50" },
      { name: "Dry Ribs Full Order", desc: "", price: "$12.75" },
      { name: "Chicken Fingers Full Order", desc: "", price: "$12.75" },
      { name: "Breaded Chicken Wings (12)", desc: "Pick a flavour", price: "$15.50" },
      { name: "Chicken Wings (15)", desc: "Pick a flavour", price: "$11.75" },
      { name: "Gravy", desc: "", price: "$1.25" },
      { name: "Wedges", desc: "", price: "$5.50" }
    ]
  },
  {
    category: "Beverages",
    items: [
      { name: "Pop", desc: "", price: "$2.75" },
      { name: "Coffee", desc: "One refill", price: "$1.75" },
      { name: "Tea", desc: "One refill", price: "$1.75" },
      { name: "Bottled Water", desc: "", price: "$2.25" },
      { name: "Apple Juice", desc: "", price: "$3.00" },
      { name: "Orange Juice", desc: "", price: "$3.00" },
      { name: "Milkshake", desc: "", price: "$4.25" }
    ]
  }
];
function eh({ isOpen: t, onClose: e }) {
  return typeof document < "u" && (t ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""), /* @__PURE__ */ d(Qs, { children: t && /* @__PURE__ */ p(
    G.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.4 },
      className: "fixed inset-0 z-50 flex",
      children: [
        /* @__PURE__ */ d("div", { className: "absolute inset-0 bg-zinc-950/80 backdrop-blur-sm", onClick: e }),
        /* @__PURE__ */ p(
          G.div,
          {
            initial: { x: "100%" },
            animate: { x: 0 },
            exit: { x: "100%" },
            transition: { type: "spring", damping: 25, stiffness: 200 },
            className: "absolute top-0 right-0 bottom-0 w-full md:w-[85vw] lg:w-[75vw] xl:w-[65vw] bg-zinc-900 border-l border-zinc-800 shadow-2xl flex flex-col overflow-hidden",
            children: [
              /* @__PURE__ */ p("div", { className: "flex items-center justify-between p-6 md:p-10 border-b border-zinc-800/50", children: [
                /* @__PURE__ */ p("div", { children: [
                  /* @__PURE__ */ d("span", { className: "font-[Playfair_Display] text-3xl text-zinc-100", children: "Cravings Menu" }),
                  /* @__PURE__ */ d("p", { className: "font-[Inter] text-zinc-500 text-sm mt-1 uppercase tracking-widest", children: "Late Night Food" })
                ] }),
                /* @__PURE__ */ d(
                  "button",
                  {
                    onClick: e,
                    className: "w-12 h-12 flex items-center justify-center rounded-full bg-zinc-800/50 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-100 transition-colors",
                    children: /* @__PURE__ */ d(os, { className: "w-5 h-5" })
                  }
                )
              ] }),
              /* @__PURE__ */ p("div", { className: "flex-1 flex flex-col lg:flex-row overflow-hidden", children: [
                /* @__PURE__ */ p("div", { className: "flex-1 overflow-y-auto p-6 md:p-10 scrollbar-hide", style: { scrollbarWidth: "none", msOverflowStyle: "none" }, children: [
                  /* @__PURE__ */ d("div", { className: "max-w-2xl mx-auto space-y-16", children: th.map((n, i) => /* @__PURE__ */ p("div", { className: "relative", children: [
                    /* @__PURE__ */ p("div", { className: "mb-8 pb-4 border-b border-zinc-800", children: [
                      /* @__PURE__ */ p("h3", { className: "font-[Playfair_Display] text-2xl text-amber-500 flex items-center gap-4", children: [
                        n.category,
                        /* @__PURE__ */ d("span", { className: "flex-1 h-[1px] bg-zinc-800/50" })
                      ] }),
                      n.note && /* @__PURE__ */ d("p", { className: "font-[Inter] text-zinc-400 text-sm mt-3 italic", children: n.note })
                    ] }),
                    /* @__PURE__ */ d("div", { className: "space-y-6", children: n.items.map((s, o) => /* @__PURE__ */ p("div", { className: "group flex flex-col font-[Inter]", children: [
                      /* @__PURE__ */ p("div", { className: "flex items-baseline justify-between mb-1", children: [
                        /* @__PURE__ */ d("h4", { className: "text-base sm:text-lg text-zinc-200 font-medium tracking-wide group-hover:text-amber-400 transition-colors", children: s.name }),
                        /* @__PURE__ */ d("div", { className: "flex-1 mx-4 border-b border-dotted border-zinc-700 relative -top-1 opacity-50" }),
                        /* @__PURE__ */ d("span", { className: "text-amber-500 font-[Playfair_Display] text-lg sm:text-xl shrink-0", children: s.price })
                      ] }),
                      s.desc && /* @__PURE__ */ d("p", { className: "text-zinc-500 text-sm font-light pr-16 leading-relaxed", children: s.desc })
                    ] }, o)) })
                  ] }, i)) }),
                  /* @__PURE__ */ d("div", { className: "mt-20 text-center pb-10 font-[Inter]", children: /* @__PURE__ */ d("p", { className: "text-zinc-600 text-xs tracking-widest uppercase", children: "Prices do not include taxes. Thank you for your business." }) })
                ] }),
                /* @__PURE__ */ p("div", { className: "hidden lg:block lg:w-2/5 relative bg-zinc-950 border-l border-zinc-800", children: [
                  /* @__PURE__ */ d(
                    "img",
                    {
                      src: "https://images.unsplash.com/photo-1751328049531-5a9c3830c23a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZGFyayUyMHB1YiUyMGZvb2R8ZW58MXx8fHwxNzcyNzE2NzYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
                      alt: "Menu Feature",
                      className: "w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-700"
                    }
                  ),
                  /* @__PURE__ */ d("div", { className: "absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent opacity-80 pointer-events-none" }),
                  /* @__PURE__ */ p("div", { className: "absolute bottom-10 left-10 right-10 pointer-events-none", children: [
                    /* @__PURE__ */ d("p", { className: "font-[Playfair_Display] text-3xl text-zinc-100 mb-2", children: "Satiate Your Hunger" }),
                    /* @__PURE__ */ d("p", { className: "font-[Inter] text-zinc-400 text-sm", children: "Gourmet ingredients, huge portions, and flavors designed to hit the spot, day or late night." })
                  ] })
                ] })
              ] })
            ]
          }
        )
      ]
    }
  ) });
}
function nh() {
  return /* @__PURE__ */ d("footer", { className: "bg-zinc-950 border-t border-zinc-900 pt-20 pb-10 px-6", children: /* @__PURE__ */ p("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ p("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 font-[Inter]", children: [
      /* @__PURE__ */ p("div", { className: "col-span-1 md:col-span-2", children: [
        /* @__PURE__ */ p("span", { className: "font-[Playfair_Display] text-2xl font-semibold tracking-wide text-zinc-100 mb-6 block", children: [
          "CRAVINGS ",
          /* @__PURE__ */ d("span", { className: "text-amber-500 text-sm font-[Inter] tracking-widest align-top", children: "LATE NIGHT FOOD" })
        ] }),
        /* @__PURE__ */ d("p", { className: "text-zinc-500 max-w-sm mb-8 leading-relaxed", children: "Serving up hearty, gourmet late-night bites. From our fresh 8oz burgers to our legendary wing platters, we're here to satisfy your biggest cravings." }),
        /* @__PURE__ */ p("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ d("div", { className: "w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400", children: /* @__PURE__ */ d(ns, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ d("div", { className: "w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400", children: /* @__PURE__ */ d(es, { className: "w-4 h-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ p("div", { children: [
        /* @__PURE__ */ d("h4", { className: "text-zinc-100 font-medium mb-6 uppercase tracking-wider text-sm", children: "Location" }),
        /* @__PURE__ */ p("ul", { className: "space-y-4 text-zinc-500 text-sm", children: [
          /* @__PURE__ */ p("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ d(ss, { className: "w-4 h-4 text-amber-500 mt-0.5 shrink-0" }),
            /* @__PURE__ */ p("span", { children: [
              "123 Midnight Ave,",
              /* @__PURE__ */ d("br", {}),
              "Downtown, ST 10001"
            ] })
          ] }),
          /* @__PURE__ */ p("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ d(is, { className: "w-4 h-4 text-amber-500 shrink-0" }),
            /* @__PURE__ */ d("span", { children: "hello@cravingslatenight.com" })
          ] }),
          /* @__PURE__ */ p("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ d(rs, { className: "w-4 h-4 text-amber-500 shrink-0" }),
            /* @__PURE__ */ d("span", { children: "(555) 123-4567" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ p("div", { children: [
        /* @__PURE__ */ d("h4", { className: "text-zinc-100 font-medium mb-6 uppercase tracking-wider text-sm", children: "Hours" }),
        /* @__PURE__ */ p("ul", { className: "space-y-4 text-zinc-500 text-sm", children: [
          /* @__PURE__ */ p("li", { className: "flex justify-between border-b border-zinc-800 pb-2", children: [
            /* @__PURE__ */ d("span", { children: "Mon - Thu" }),
            /* @__PURE__ */ d("span", { className: "text-zinc-300", children: "4pm - 2am" })
          ] }),
          /* @__PURE__ */ p("li", { className: "flex justify-between border-b border-zinc-800 pb-2", children: [
            /* @__PURE__ */ d("span", { children: "Fri - Sat" }),
            /* @__PURE__ */ d("span", { className: "text-zinc-300", children: "4pm - 4am" })
          ] }),
          /* @__PURE__ */ p("li", { className: "flex justify-between border-b border-zinc-800 pb-2", children: [
            /* @__PURE__ */ d("span", { children: "Sunday" }),
            /* @__PURE__ */ d("span", { className: "text-zinc-300", children: "4pm - 12am" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ d("div", { className: "pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-600 text-xs font-[Inter]", children: /* @__PURE__ */ p("p", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Cravings Late Night Food. All rights reserved."
    ] }) })
  ] }) });
}
function ih() {
  const [t, e] = ee(!1);
  return /* @__PURE__ */ p("div", { className: "bg-zinc-950 min-h-screen selection:bg-amber-700 selection:text-white", children: [
    /* @__PURE__ */ d(ho, { onOpenMenu: () => e(!0) }),
    /* @__PURE__ */ d(Ku, { onOpenMenu: () => e(!0) }),
    /* @__PURE__ */ d(Xu, {}),
    /* @__PURE__ */ d(qu, {}),
    /* @__PURE__ */ d(Zu, {}),
    /* @__PURE__ */ d(Qu, {}),
    /* @__PURE__ */ d(nh, {}),
    /* @__PURE__ */ d(eh, { isOpen: t, onClose: () => e(!1) })
  ] });
}
const sh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ih
}, Symbol.toStringTag, { value: "Module" }));
export {
  oh as Code0_8
};

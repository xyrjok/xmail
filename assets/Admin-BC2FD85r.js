const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SendMail-gI-QSIA2.js","assets/index.esm-YCBPJhFu.js","assets/index-rOHOLR3M.js","assets/index-CeVFrBXC.css","assets/index-BHtaHxM4.css","assets/SendMail-aMwcx0sS.css"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { d as ie, h as U, c as Ot, i as Nt, b as qt, a as Vt, e as Ft, f as Oe, _ as pe, r as Ne, u as St, g as Xe, j as jt, k as Wt, l as f, m as Ht, n as Te, w as Ze, o as Ut, p as xe, q as dt, N as ct, X as pt, A as Kt, s as ze, t as Gt, v as mt, x as Jt, y as Qt, z as Qe, B as Xt, C as Zt, D as E, E as Q, F as M, G as ee, H as ue, I as ae, J as te, K as O, L as Ye, M as P, O as le, P as e, Q as t, R as o, S as a, T as Lt, U as Ke, V as m, W as Ee, Y as Ge, Z as Ce, $ as st, a0 as qe, a1 as Yt, a2 as ea, a3 as It, a4 as _t, a5 as de, a6 as ot, a7 as ta, a8 as He, a9 as Mt, aa as Tt, ab as X, ac as rt, ad as Ve, ae as Z, af as aa, ag as Pt, ah as Et, ai as ge, aj as Fe, ak as la, al as re, am as Dt, an as ft, ao as Ue, ap as De, aq as Le, ar as it, as as et, at as vt, au as na, av as ut, aw as Rt, ax as sa, ay as $t, az as Bt, aA as zt, aB as oa, aC as ra, aD as ia, aE as ua, aF as da, aG as ca, aH as pa, aI as ma, __tla as __tla_0 } from "./index-rOHOLR3M.js";
let Ql;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const _a = ie({
    name: "Remove",
    render() {
      return U("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512"
      }, U("line", {
        x1: "400",
        y1: "256",
        x2: "112",
        y2: "256",
        style: `
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      `
      }));
    }
  });
  function fa(_) {
    const { textColorDisabled: d } = _;
    return {
      iconColorDisabled: d
    };
  }
  const va = Ot({
    name: "InputNumber",
    common: Vt,
    peers: {
      Button: qt,
      Input: Nt
    },
    self: fa
  }), ba = Ft([
    Oe("input-number-suffix", `
 display: inline-block;
 margin-right: 10px;
 `),
    Oe("input-number-prefix", `
 display: inline-block;
 margin-left: 10px;
 `)
  ]);
  function ga(_) {
    return _ == null || typeof _ == "string" && _.trim() === "" ? null : Number(_);
  }
  function ha(_) {
    return _.includes(".") && (/^(-)?\d+.*(\.|0)$/.test(_) || /^-?\d*$/.test(_)) || _ === "-" || _ === "-0";
  }
  function lt(_) {
    return _ == null ? true : !Number.isNaN(_);
  }
  function bt(_, d) {
    return typeof _ != "number" ? "" : d === void 0 ? String(_) : _.toFixed(d);
  }
  function nt(_) {
    if (_ === null) return null;
    if (typeof _ == "number") return _;
    {
      const d = Number(_);
      return Number.isNaN(d) ? null : d;
    }
  }
  let gt, ht, ya, Je, wa, ka, xa, Ca, Aa, Sa, Pe, Ua, La, Ia, Ma, Ta, Pa, Ea, yt, Da, Ra, $a, Ba, za, Oa, Na, qa, Va, Fa, ja, Wa, Ha, Ka, Ga, Ja, Qa, Xa, Za, Ya, wt, el, tl, al, ll, nl, sl, ol, rl, il, ul, kt, dl, xt, cl, pl, ml, _l, fl, vl, bl, gl, hl, yl, wl, kl, xl, Cl, Al, Sl, Ul, Ct, Ll, Il, Ml, Tl, Pl, El, Dl, Rl, $l, Bl, At, zl, Ol, Nl, ql, Vl, Fl, jl, Wl, Hl, Kl, Gl;
  gt = 800;
  ht = 100;
  ya = Object.assign(Object.assign({}, Xe.props), {
    autofocus: Boolean,
    loading: {
      type: Boolean,
      default: void 0
    },
    placeholder: String,
    defaultValue: {
      type: Number,
      default: null
    },
    value: Number,
    step: {
      type: [
        Number,
        String
      ],
      default: 1
    },
    min: [
      Number,
      String
    ],
    max: [
      Number,
      String
    ],
    size: String,
    disabled: {
      type: Boolean,
      default: void 0
    },
    validator: Function,
    bordered: {
      type: Boolean,
      default: void 0
    },
    showButton: {
      type: Boolean,
      default: true
    },
    buttonPlacement: {
      type: String,
      default: "right"
    },
    inputProps: Object,
    readonly: Boolean,
    clearable: Boolean,
    keyboard: {
      type: Object,
      default: {}
    },
    updateValueOnInput: {
      type: Boolean,
      default: true
    },
    round: {
      type: Boolean,
      default: void 0
    },
    parse: Function,
    format: Function,
    precision: Number,
    status: String,
    "onUpdate:value": [
      Function,
      Array
    ],
    onUpdateValue: [
      Function,
      Array
    ],
    onFocus: [
      Function,
      Array
    ],
    onBlur: [
      Function,
      Array
    ],
    onClear: [
      Function,
      Array
    ],
    onChange: [
      Function,
      Array
    ]
  });
  Je = ie({
    name: "InputNumber",
    props: ya,
    slots: Object,
    setup(_) {
      const { mergedBorderedRef: d, mergedClsPrefixRef: r, mergedRtlRef: l } = St(_), n = Xe("InputNumber", "-input-number", ba, va, _, r), { localeRef: v } = jt("InputNumber"), p = Wt(_), { mergedSizeRef: s, mergedDisabledRef: y, mergedStatusRef: g } = p, i = f(null), c = f(null), x = f(null), C = f(_.defaultValue), L = Qt(_, "value"), u = Ht(L, C), b = f(""), w = (h) => {
        const V = String(h).split(".")[1];
        return V ? V.length : 0;
      }, N = (h) => {
        const V = [
          _.min,
          _.max,
          _.step,
          h
        ].map((G) => G === void 0 ? 0 : w(G));
        return Math.max(...V);
      }, K = Te(() => {
        const { placeholder: h } = _;
        return h !== void 0 ? h : v.value.placeholder;
      }), D = Te(() => {
        const h = nt(_.step);
        return h !== null ? h === 0 ? 1 : Math.abs(h) : 1;
      }), A = Te(() => {
        const h = nt(_.min);
        return h !== null ? h : null;
      }), I = Te(() => {
        const h = nt(_.max);
        return h !== null ? h : null;
      }), q = () => {
        const { value: h } = u;
        if (lt(h)) {
          const { format: V, precision: G } = _;
          V ? b.value = V(h) : h === null || G === void 0 || w(h) > G ? b.value = bt(h, void 0) : b.value = bt(h, G);
        } else b.value = String(h);
      };
      q();
      const W = (h) => {
        const { value: V } = u;
        if (h === V) {
          q();
          return;
        }
        const { "onUpdate:value": G, onUpdateValue: F, onChange: be } = _, { nTriggerFormInput: ke, nTriggerFormChange: Be } = p;
        be && ze(be, h), F && ze(F, h), G && ze(G, h), C.value = h, ke(), Be();
      }, k = ({ offset: h, doUpdateIfValid: V, fixPrecision: G, isInputing: F }) => {
        const { value: be } = b;
        if (F && ha(be)) return false;
        const ke = (_.parse || ga)(be);
        if (ke === null) return V && W(null), null;
        if (lt(ke)) {
          const Be = w(ke), { precision: We } = _;
          if (We !== void 0 && We < Be && !G) return false;
          let Se = Number.parseFloat((ke + h).toFixed(We ?? N(ke)));
          if (lt(Se)) {
            const { value: tt } = I, { value: at } = A;
            if (tt !== null && Se > tt) {
              if (!V || F) return false;
              Se = tt;
            }
            if (at !== null && Se < at) {
              if (!V || F) return false;
              Se = at;
            }
            return _.validator && !_.validator(Se) ? false : (V && W(Se), Se);
          }
        }
        return false;
      }, $ = Te(() => k({
        offset: 0,
        doUpdateIfValid: false,
        isInputing: false,
        fixPrecision: false
      }) === false), B = Te(() => {
        const { value: h } = u;
        if (_.validator && h === null) return false;
        const { value: V } = D;
        return k({
          offset: -V,
          doUpdateIfValid: false,
          isInputing: false,
          fixPrecision: false
        }) !== false;
      }), Y = Te(() => {
        const { value: h } = u;
        if (_.validator && h === null) return false;
        const { value: V } = D;
        return k({
          offset: +V,
          doUpdateIfValid: false,
          isInputing: false,
          fixPrecision: false
        }) !== false;
      });
      function se(h) {
        const { onFocus: V } = _, { nTriggerFormFocus: G } = p;
        V && ze(V, h), G();
      }
      function _e(h) {
        var V, G;
        if (h.target === ((V = i.value) === null || V === void 0 ? void 0 : V.wrapperElRef)) return;
        const F = k({
          offset: 0,
          doUpdateIfValid: true,
          isInputing: false,
          fixPrecision: true
        });
        if (F !== false) {
          const Be = (G = i.value) === null || G === void 0 ? void 0 : G.inputElRef;
          Be && (Be.value = String(F || "")), u.value === F && q();
        } else q();
        const { onBlur: be } = _, { nTriggerFormBlur: ke } = p;
        be && ze(be, h), ke(), Gt(() => {
          q();
        });
      }
      function S(h) {
        const { onClear: V } = _;
        V && ze(V, h);
      }
      function R() {
        const { value: h } = Y;
        if (!h) {
          j();
          return;
        }
        const { value: V } = u;
        if (V === null) _.validator || W(ce());
        else {
          const { value: G } = D;
          k({
            offset: G,
            doUpdateIfValid: true,
            isInputing: false,
            fixPrecision: true
          });
        }
      }
      function ne() {
        const { value: h } = B;
        if (!h) {
          J();
          return;
        }
        const { value: V } = u;
        if (V === null) _.validator || W(ce());
        else {
          const { value: G } = D;
          k({
            offset: -G,
            doUpdateIfValid: true,
            isInputing: false,
            fixPrecision: true
          });
        }
      }
      const he = se, z = _e;
      function ce() {
        if (_.validator) return null;
        const { value: h } = A, { value: V } = I;
        return h !== null ? Math.max(0, h) : V !== null ? Math.min(0, V) : 0;
      }
      function H(h) {
        S(h), W(null);
      }
      function je(h) {
        var V, G, F;
        !((V = x.value) === null || V === void 0) && V.$el.contains(h.target) && h.preventDefault(), !((G = c.value) === null || G === void 0) && G.$el.contains(h.target) && h.preventDefault(), (F = i.value) === null || F === void 0 || F.activate();
      }
      let ye = null, we = null, oe = null;
      function J() {
        oe && (window.clearTimeout(oe), oe = null), ye && (window.clearInterval(ye), ye = null);
      }
      let T = null;
      function j() {
        T && (window.clearTimeout(T), T = null), we && (window.clearInterval(we), we = null);
      }
      function Ie() {
        J(), oe = window.setTimeout(() => {
          ye = window.setInterval(() => {
            ne();
          }, ht);
        }, gt), mt("mouseup", document, J, {
          once: true
        });
      }
      function me() {
        j(), T = window.setTimeout(() => {
          we = window.setInterval(() => {
            R();
          }, ht);
        }, gt), mt("mouseup", document, j, {
          once: true
        });
      }
      const fe = () => {
        we || R();
      }, Re = () => {
        ye || ne();
      };
      function Me(h) {
        var V, G;
        if (h.key === "Enter") {
          if (h.target === ((V = i.value) === null || V === void 0 ? void 0 : V.wrapperElRef)) return;
          k({
            offset: 0,
            doUpdateIfValid: true,
            isInputing: false,
            fixPrecision: true
          }) !== false && ((G = i.value) === null || G === void 0 || G.deactivate());
        } else if (h.key === "ArrowUp") {
          if (!Y.value || _.keyboard.ArrowUp === false) return;
          h.preventDefault(), k({
            offset: 0,
            doUpdateIfValid: true,
            isInputing: false,
            fixPrecision: true
          }) !== false && R();
        } else if (h.key === "ArrowDown") {
          if (!B.value || _.keyboard.ArrowDown === false) return;
          h.preventDefault(), k({
            offset: 0,
            doUpdateIfValid: true,
            isInputing: false,
            fixPrecision: true
          }) !== false && ne();
        }
      }
      function ve(h) {
        b.value = h, _.updateValueOnInput && !_.format && !_.parse && _.precision === void 0 && k({
          offset: 0,
          doUpdateIfValid: true,
          isInputing: true,
          fixPrecision: false
        });
      }
      Ze(u, () => {
        q();
      });
      const Ae = {
        focus: () => {
          var h;
          return (h = i.value) === null || h === void 0 ? void 0 : h.focus();
        },
        blur: () => {
          var h;
          return (h = i.value) === null || h === void 0 ? void 0 : h.blur();
        },
        select: () => {
          var h;
          return (h = i.value) === null || h === void 0 ? void 0 : h.select();
        }
      }, $e = Ut("InputNumber", l, r);
      return Object.assign(Object.assign({}, Ae), {
        rtlEnabled: $e,
        inputInstRef: i,
        minusButtonInstRef: c,
        addButtonInstRef: x,
        mergedClsPrefix: r,
        mergedBordered: d,
        uncontrolledValue: C,
        mergedValue: u,
        mergedPlaceholder: K,
        displayedValueInvalid: $,
        mergedSize: s,
        mergedDisabled: y,
        displayedValue: b,
        addable: Y,
        minusable: B,
        mergedStatus: g,
        handleFocus: he,
        handleBlur: z,
        handleClear: H,
        handleMouseDown: je,
        handleAddClick: fe,
        handleMinusClick: Re,
        handleAddMousedown: me,
        handleMinusMousedown: Ie,
        handleKeyDown: Me,
        handleUpdateDisplayedValue: ve,
        mergedTheme: n,
        inputThemeOverrides: {
          paddingSmall: "0 8px 0 10px",
          paddingMedium: "0 8px 0 12px",
          paddingLarge: "0 8px 0 14px"
        },
        buttonThemeOverrides: xe(() => {
          const { self: { iconColorDisabled: h } } = n.value, [V, G, F, be] = Jt(h);
          return {
            textColorTextDisabled: `rgb(${V}, ${G}, ${F})`,
            opacityDisabled: `${be}`
          };
        })
      });
    },
    render() {
      const { mergedClsPrefix: _, $slots: d } = this, r = () => U(pt, {
        text: true,
        disabled: !this.minusable || this.mergedDisabled || this.readonly,
        focusable: false,
        theme: this.mergedTheme.peers.Button,
        themeOverrides: this.mergedTheme.peerOverrides.Button,
        builtinThemeOverrides: this.buttonThemeOverrides,
        onClick: this.handleMinusClick,
        onMousedown: this.handleMinusMousedown,
        ref: "minusButtonInstRef"
      }, {
        icon: () => dt(d["minus-icon"], () => [
          U(ct, {
            clsPrefix: _
          }, {
            default: () => U(_a, null)
          })
        ])
      }), l = () => U(pt, {
        text: true,
        disabled: !this.addable || this.mergedDisabled || this.readonly,
        focusable: false,
        theme: this.mergedTheme.peers.Button,
        themeOverrides: this.mergedTheme.peerOverrides.Button,
        builtinThemeOverrides: this.buttonThemeOverrides,
        onClick: this.handleAddClick,
        onMousedown: this.handleAddMousedown,
        ref: "addButtonInstRef"
      }, {
        icon: () => dt(d["add-icon"], () => [
          U(ct, {
            clsPrefix: _
          }, {
            default: () => U(Kt, null)
          })
        ])
      });
      return U("div", {
        class: [
          `${_}-input-number`,
          this.rtlEnabled && `${_}-input-number--rtl`
        ]
      }, U(pe, {
        ref: "inputInstRef",
        autofocus: this.autofocus,
        status: this.mergedStatus,
        bordered: this.mergedBordered,
        loading: this.loading,
        value: this.displayedValue,
        onUpdateValue: this.handleUpdateDisplayedValue,
        theme: this.mergedTheme.peers.Input,
        themeOverrides: this.mergedTheme.peerOverrides.Input,
        builtinThemeOverrides: this.inputThemeOverrides,
        size: this.mergedSize,
        placeholder: this.mergedPlaceholder,
        disabled: this.mergedDisabled,
        readonly: this.readonly,
        round: this.round,
        textDecoration: this.displayedValueInvalid ? "line-through" : void 0,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onKeydown: this.handleKeyDown,
        onMousedown: this.handleMouseDown,
        onClear: this.handleClear,
        clearable: this.clearable,
        inputProps: this.inputProps,
        internalLoadingBeforeSuffix: true
      }, {
        prefix: () => {
          var n;
          return this.showButton && this.buttonPlacement === "both" ? [
            r(),
            Ne(d.prefix, (v) => v ? U("span", {
              class: `${_}-input-number-prefix`
            }, v) : null)
          ] : (n = d.prefix) === null || n === void 0 ? void 0 : n.call(d);
        },
        suffix: () => {
          var n;
          return this.showButton ? [
            Ne(d.suffix, (v) => v ? U("span", {
              class: `${_}-input-number-suffix`
            }, v) : null),
            this.buttonPlacement === "right" ? r() : null,
            l()
          ] : (n = d.suffix) === null || n === void 0 ? void 0 : n.call(d);
        }
      }));
    }
  });
  wa = Oe("statistic", [
    Qe("label", `
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),
    Oe("statistic-value", `
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `, [
      Qe("prefix", `
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `, [
        Oe("icon", {
          verticalAlign: "-0.125em"
        })
      ]),
      Qe("content", `
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),
      Qe("suffix", `
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `, [
        Oe("icon", {
          verticalAlign: "-0.125em"
        })
      ])
    ])
  ]);
  ka = Object.assign(Object.assign({}, Xe.props), {
    tabularNums: Boolean,
    label: String,
    value: [
      String,
      Number
    ]
  });
  xa = ie({
    name: "Statistic",
    props: ka,
    slots: Object,
    setup(_) {
      const { mergedClsPrefixRef: d, inlineThemeDisabled: r, mergedRtlRef: l } = St(_), n = Xe("Statistic", "-statistic", wa, Xt, _, d), v = Ut("Statistic", l, d), p = xe(() => {
        const { self: { labelFontWeight: y, valueFontSize: g, valueFontWeight: i, valuePrefixTextColor: c, labelTextColor: x, valueSuffixTextColor: C, valueTextColor: L, labelFontSize: u }, common: { cubicBezierEaseInOut: b } } = n.value;
        return {
          "--n-bezier": b,
          "--n-label-font-size": u,
          "--n-label-font-weight": y,
          "--n-label-text-color": x,
          "--n-value-font-weight": i,
          "--n-value-font-size": g,
          "--n-value-prefix-text-color": c,
          "--n-value-suffix-text-color": C,
          "--n-value-text-color": L
        };
      }), s = r ? Zt("statistic", void 0, p, _) : void 0;
      return {
        rtlEnabled: v,
        mergedClsPrefix: d,
        cssVars: r ? void 0 : p,
        themeClass: s == null ? void 0 : s.themeClass,
        onRender: s == null ? void 0 : s.onRender
      };
    },
    render() {
      var _;
      const { mergedClsPrefix: d, $slots: { default: r, label: l, prefix: n, suffix: v } } = this;
      return (_ = this.onRender) === null || _ === void 0 || _.call(this), U("div", {
        class: [
          `${d}-statistic`,
          this.themeClass,
          this.rtlEnabled && `${d}-statistic--rtl`
        ],
        style: this.cssVars
      }, Ne(l, (p) => U("div", {
        class: `${d}-statistic__label`
      }, this.label || p)), U("div", {
        class: `${d}-statistic-value`,
        style: {
          fontVariantNumeric: this.tabularNums ? "tabular-nums" : ""
        }
      }, Ne(n, (p) => p && U("span", {
        class: `${d}-statistic-value__prefix`
      }, p)), this.value !== void 0 ? U("span", {
        class: `${d}-statistic-value__content`
      }, this.value) : Ne(r, (p) => p && U("span", {
        class: `${d}-statistic-value__content`
      }, p)), Ne(v, (p) => p && U("span", {
        class: `${d}-statistic-value__suffix`
      }, p))));
    }
  });
  Ca = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 24 24"
  };
  Aa = ie({
    name: "AddFilled",
    render: function(d, r) {
      return E(), Q("svg", Ca, r[0] || (r[0] = [
        M("path", {
          d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
          fill: "currentColor"
        }, null, -1)
      ]));
    }
  });
  Sa = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 24 24"
  };
  Pe = ie({
    name: "CleaningServicesFilled",
    render: function(d, r) {
      return E(), Q("svg", Sa, r[0] || (r[0] = [
        M("path", {
          d: "M16 11h-1V3c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v8H8c-2.76 0-5 2.24-5 5v7h18v-7c0-2.76-2.24-5-5-5zm3 10h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H9v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H5v-5c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3v5z",
          fill: "currentColor"
        }, null, -1)
      ]));
    }
  });
  Ua = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 24 24"
  };
  La = ie({
    name: "DeleteFilled",
    render: function(d, r) {
      return E(), Q("svg", Ua, r[0] || (r[0] = [
        M("path", {
          d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",
          fill: "currentColor"
        }, null, -1)
      ]));
    }
  });
  Ia = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 24 24"
  };
  Ma = ie({
    name: "SendOutlined",
    render: function(d, r) {
      return E(), Q("svg", Ia, r[0] || (r[0] = [
        M("path", {
          d: "M4.01 6.03l7.51 3.22l-7.52-1l.01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2l-15 2l.01 7L23 12L2.01 3z",
          fill: "currentColor"
        }, null, -1)
      ]));
    }
  });
  Ta = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 576 512"
  };
  Pa = ie({
    name: "MailBulk",
    render: function(d, r) {
      return E(), Q("svg", Ta, r[0] || (r[0] = [
        M("path", {
          d: "M160 448c-25.6 0-51.2-22.4-64-32c-64-44.8-83.2-60.8-96-70.4V480c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V345.6c-12.8 9.6-32 25.6-96 70.4c-12.8 9.6-38.4 32-64 32zm128-192H32c-17.67 0-32 14.33-32 32v16c25.6 19.2 22.4 19.2 115.2 86.4c9.6 6.4 28.8 25.6 44.8 25.6s35.2-19.2 44.8-22.4c92.8-67.2 89.6-67.2 115.2-86.4V288c0-17.67-14.33-32-32-32zm256-96H224c-17.67 0-32 14.33-32 32v32h96c33.21 0 60.59 25.42 63.71 57.82l.29-.22V416h192c17.67 0 32-14.33 32-32V192c0-17.67-14.33-32-32-32zm-32 128h-64v-64h64v64zm-352-96c0-35.29 28.71-64 64-64h224V32c0-17.67-14.33-32-32-32H96C78.33 0 64 14.33 64 32v192h96v-32z",
          fill: "currentColor"
        }, null, -1)
      ]));
    }
  });
  Ea = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 640 512"
  };
  yt = ie({
    name: "UserCheck",
    render: function(d, r) {
      return E(), Q("svg", Ea, r[0] || (r[0] = [
        M("path", {
          d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104l-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z",
          fill: "currentColor"
        }, null, -1)
      ]));
    }
  });
  Da = {
    style: {
      overflow: "auto"
    }
  };
  Ra = {
    style: {
      display: "inline-block"
    }
  };
  $a = {
    __name: "SenderAccess",
    setup(_) {
      const { loading: d } = ue(), r = ae(), { t: l } = te({
        messages: {
          en: {
            address: "Address",
            success: "Success",
            is_enabled: "Is Enabled",
            enable: "Enable",
            disable: "Disable",
            modify: "Modify",
            delete: "Delete",
            deleteTip: "Are you sure to delete this?",
            created_at: "Created At",
            action: "Action",
            itemCount: "itemCount",
            modalTip: "Please input the sender balance",
            balance: "Balance",
            query: "Query",
            ok: "OK"
          },
          zh: {
            address: "\u5730\u5740",
            success: "\u6210\u529F",
            is_enabled: "\u662F\u5426\u542F\u7528",
            enable: "\u542F\u7528",
            disable: "\u7981\u7528",
            modify: "\u4FEE\u6539",
            delete: "\u5220\u9664",
            deleteTip: "\u786E\u5B9A\u5220\u9664\u5417\uFF1F",
            created_at: "\u521B\u5EFA\u65F6\u95F4",
            action: "\u64CD\u4F5C",
            itemCount: "\u603B\u6570",
            modalTip: "\u8BF7\u8F93\u5165\u53D1\u4EF6\u989D\u5EA6",
            balance: "\u4F59\u989D",
            query: "\u67E5\u8BE2",
            ok: "\u786E\u5B9A"
          }
        }
      }), n = f([]), v = f(0), p = f(1), s = f(20), y = f({}), g = f(false), i = f(0), c = f(false), x = f(""), C = async () => {
        try {
          await P.fetch("/admin/address_sender", {
            method: "POST",
            body: JSON.stringify({
              address: y.value.address,
              address_id: y.value.id,
              balance: i.value,
              enabled: c.value ? 1 : 0
            })
          }), g.value = false, r.success(l("success")), await L();
        } catch (b) {
          r.error(b.message || "error");
        }
      }, L = async () => {
        try {
          x.value = x.value.trim();
          const { results: b, count: w } = await P.fetch(`/admin/address_sender?limit=${s.value}&offset=${(p.value - 1) * s.value}` + (x.value ? `&address=${x.value}` : ""));
          n.value = b, w > 0 && (v.value = w);
        } catch (b) {
          console.log(b), r.error(b.message || "error");
        }
      }, u = [
        {
          title: "ID",
          key: "id"
        },
        {
          title: l("address"),
          key: "address"
        },
        {
          title: l("created_at"),
          key: "created_at"
        },
        {
          title: l("balance"),
          key: "balance"
        },
        {
          title: l("is_enabled"),
          key: "enabled",
          render(b) {
            return U("div", [
              U("span", b.enabled ? l("enable") : l("disable"))
            ]);
          }
        },
        {
          title: l("action"),
          key: "actions",
          render(b) {
            return U("div", [
              U(O, {
                type: "success",
                tertiary: true,
                onClick: () => {
                  g.value = true, y.value = b, c.value = !!b.enabled, i.value = b.balance;
                }
              }, {
                default: () => l("modify")
              }),
              U(Ye, {
                onPositiveClick: async () => {
                  await P.fetch(`/admin/address_sender/${b.id}`, {
                    method: "DELETE"
                  }), await L();
                }
              }, {
                trigger: () => U(O, {
                  tertiary: true,
                  type: "error"
                }, {
                  default: () => l("delete")
                }),
                default: () => l("deleteTip")
              })
            ]);
          }
        }
      ];
      return Ze([
        p,
        s
      ], async () => {
        await L();
      }), le(async () => {
        await L();
      }), (b, w) => {
        const N = Ke, K = Lt, D = Je, A = O, I = Ee, q = pe, W = Ce, k = st, $ = qe;
        return E(), Q("div", null, [
          e(I, {
            show: g.value,
            "onUpdate:show": w[3] || (w[3] = (B) => g.value = B),
            preset: "dialog"
          }, {
            action: t(() => [
              e(A, {
                loading: a(d),
                onClick: w[2] || (w[2] = (B) => C()),
                size: "small",
                tertiary: "",
                type: "primary"
              }, {
                default: t(() => [
                  m(o(a(l)("ok")), 1)
                ]),
                _: 1
              }, 8, [
                "loading"
              ])
            ]),
            default: t(() => [
              M("p", null, o(y.value.address), 1),
              M("p", null, o(a(l)("modalTip")), 1),
              e(K, {
                "show-label": false
              }, {
                default: t(() => [
                  e(N, {
                    checked: c.value,
                    "onUpdate:checked": w[0] || (w[0] = (B) => c.value = B)
                  }, {
                    default: t(() => [
                      m(o(a(l)("enable")), 1)
                    ]),
                    _: 1
                  }, 8, [
                    "checked"
                  ])
                ]),
                _: 1
              }),
              e(K, {
                "show-label": false
              }, {
                default: t(() => [
                  e(D, {
                    value: i.value,
                    "onUpdate:value": w[1] || (w[1] = (B) => i.value = B),
                    min: 0,
                    max: 1e3
                  }, null, 8, [
                    "value"
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, [
            "show"
          ]),
          e(W, null, {
            default: t(() => [
              e(q, {
                value: x.value,
                "onUpdate:value": w[4] || (w[4] = (B) => x.value = B),
                onKeydown: Ge(L, [
                  "enter"
                ])
              }, null, 8, [
                "value"
              ]),
              e(A, {
                onClick: L,
                type: "primary",
                tertiary: ""
              }, {
                default: t(() => [
                  m(o(a(l)("query")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          M("div", Da, [
            M("div", Ra, [
              e(k, {
                page: p.value,
                "onUpdate:page": w[5] || (w[5] = (B) => p.value = B),
                "page-size": s.value,
                "onUpdate:pageSize": w[6] || (w[6] = (B) => s.value = B),
                "item-count": v.value,
                "page-sizes": [
                  20,
                  50,
                  100
                ],
                "show-size-picker": ""
              }, {
                prefix: t(({ itemCount: B }) => [
                  m(o(a(l)("itemCount")) + ": " + o(B), 1)
                ]),
                _: 1
              }, 8, [
                "page",
                "page-size",
                "item-count"
              ])
            ]),
            e($, {
              columns: u,
              data: n.value,
              bordered: false,
              embedded: ""
            }, null, 8, [
              "data"
            ])
          ])
        ]);
      };
    }
  };
  Ba = ee($a, [
    [
      "__scopeId",
      "data-v-bd8929db"
    ]
  ]);
  za = {
    __name: "Statistics",
    setup(_) {
      const d = ae(), { t: r } = te({
        messages: {
          en: {
            userCount: "User Count",
            addressCount: "Address Count",
            activeAddressCount7days: "7 days Active Address Count",
            activeAddressCount30days: "30 days Active Address Count",
            mailCount: "Mail Count",
            sendMailCount: "Send Mail Count"
          },
          zh: {
            userCount: "\u7528\u6237\u603B\u6570",
            addressCount: "\u90AE\u7BB1\u5730\u5740\u603B\u6570",
            activeAddressCount7days: "7\u5929\u6D3B\u8DC3\u90AE\u7BB1\u5730\u5740\u603B\u6570",
            activeAddressCount30days: "30\u5929\u6D3B\u8DC3\u90AE\u7BB1\u5730\u5740\u603B\u6570",
            mailCount: "\u90AE\u4EF6\u603B\u6570",
            sendMailCount: "\u53D1\u9001\u90AE\u4EF6\u603B\u6570"
          }
        }
      }), l = f({
        addressCount: 0,
        userCount: 0,
        mailCount: 0,
        activeAddressCount7days: 0,
        activeAddressCount30days: 0,
        sendMailCount: 0
      }), n = async () => {
        try {
          const { userCount: v, mailCount: p, sendMailCount: s, addressCount: y, activeAddressCount7days: g, activeAddressCount30days: i } = await P.fetch("/admin/statistics");
          l.value.mailCount = p || 0, l.value.sendMailCount = s || 0, l.value.userCount = v || 0, l.value.addressCount = y || 0, l.value.activeAddressCount7days = g || 0, l.value.activeAddressCount30days = i || 0;
        } catch (v) {
          console.log(v), d.error(v.message || "error");
        }
      };
      return le(async () => {
        await n();
      }), (v, p) => {
        const s = It, y = xa, g = ea, i = Yt, c = de;
        return E(), Q("div", null, [
          e(c, {
            bordered: false,
            embedded: ""
          }, {
            default: t(() => [
              e(i, null, {
                default: t(() => [
                  e(g, {
                    span: 8
                  }, {
                    default: t(() => [
                      e(y, {
                        label: a(r)("addressCount"),
                        value: l.value.addressCount
                      }, {
                        prefix: t(() => [
                          e(s, {
                            component: a(_t)
                          }, null, 8, [
                            "component"
                          ])
                        ]),
                        _: 1
                      }, 8, [
                        "label",
                        "value"
                      ])
                    ]),
                    _: 1
                  }),
                  e(g, {
                    span: 8
                  }, {
                    default: t(() => [
                      e(y, {
                        label: a(r)("activeAddressCount7days"),
                        value: l.value.activeAddressCount7days
                      }, {
                        prefix: t(() => [
                          e(s, {
                            component: a(yt)
                          }, null, 8, [
                            "component"
                          ])
                        ]),
                        _: 1
                      }, 8, [
                        "label",
                        "value"
                      ])
                    ]),
                    _: 1
                  }),
                  e(g, {
                    span: 8
                  }, {
                    default: t(() => [
                      e(y, {
                        label: a(r)("activeAddressCount30days"),
                        value: l.value.activeAddressCount30days
                      }, {
                        prefix: t(() => [
                          e(s, {
                            component: a(yt)
                          }, null, 8, [
                            "component"
                          ])
                        ]),
                        _: 1
                      }, 8, [
                        "label",
                        "value"
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          e(c, {
            bordered: false,
            embedded: ""
          }, {
            default: t(() => [
              e(i, null, {
                default: t(() => [
                  e(g, {
                    span: 8
                  }, {
                    default: t(() => [
                      e(y, {
                        label: a(r)("userCount"),
                        value: l.value.userCount
                      }, {
                        prefix: t(() => [
                          e(s, {
                            component: a(_t)
                          }, null, 8, [
                            "component"
                          ])
                        ]),
                        _: 1
                      }, 8, [
                        "label",
                        "value"
                      ])
                    ]),
                    _: 1
                  }),
                  e(g, {
                    span: 8
                  }, {
                    default: t(() => [
                      e(y, {
                        label: a(r)("mailCount"),
                        value: l.value.mailCount
                      }, {
                        prefix: t(() => [
                          e(s, {
                            component: a(Pa)
                          }, null, 8, [
                            "component"
                          ])
                        ]),
                        _: 1
                      }, 8, [
                        "label",
                        "value"
                      ])
                    ]),
                    _: 1
                  }),
                  e(g, {
                    span: 8
                  }, {
                    default: t(() => [
                      e(y, {
                        label: a(r)("sendMailCount"),
                        value: l.value.sendMailCount
                      }, {
                        prefix: t(() => [
                          e(s, {
                            component: a(Ma)
                          }, null, 8, [
                            "component"
                          ])
                        ]),
                        _: 1
                      }, 8, [
                        "label",
                        "value"
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]);
      };
    }
  };
  Oa = ee(za, [
    [
      "__scopeId",
      "data-v-b73833c7"
    ]
  ]);
  Na = {
    __name: "SendBox",
    setup(_) {
      const { adminSendBoxTabAddress: d } = ue(), { t: r } = te({
        messages: {
          en: {
            query: "Query",
            queryTip: "Please input address to query, leave blank to query all"
          },
          zh: {
            query: "\u67E5\u8BE2",
            queryTip: "\u8BF7\u8F93\u5165\u5730\u5740\u67E5\u8BE2, \u7559\u7A7A\u5219\u67E5\u8BE2\u6240\u6709"
          }
        }
      }), l = async (v, p) => (d.value = d.value.trim(), await P.fetch(`/admin/sendbox?limit=${v}&offset=${p}` + (d.value ? `&address=${d.value}` : ""))), n = async (v) => {
        await P.fetch(`/admin/sendbox/${v}`, {
          method: "DELETE"
        });
      };
      return (v, p) => {
        const s = pe, y = O, g = Ce;
        return E(), Q("div", null, [
          e(g, null, {
            default: t(() => [
              e(s, {
                value: a(d),
                "onUpdate:value": p[0] || (p[0] = (i) => ot(d) ? d.value = i : null),
                placeholder: a(r)("queryTip"),
                onKeydown: Ge(l, [
                  "enter"
                ])
              }, null, 8, [
                "value",
                "placeholder"
              ]),
              e(y, {
                onClick: l,
                type: "primary",
                tertiary: ""
              }, {
                default: t(() => [
                  m(o(a(r)("query")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          e(ta, {
            style: {
              "margin-top": "10px"
            },
            enableUserDeleteEmail: true,
            deleteMail: n,
            fetchMailData: l,
            showEMailFrom: true
          })
        ]);
      };
    }
  };
  qa = ee(Na, [
    [
      "__scopeId",
      "data-v-fbae4450"
    ]
  ]);
  Va = {
    style: {
      "margin-top": "10px"
    }
  };
  Fa = {
    style: {
      overflow: "auto"
    }
  };
  ja = {
    style: {
      display: "inline-block"
    }
  };
  Wa = {
    style: {
      "text-align": "center"
    }
  };
  Ha = {
    __name: "Account",
    setup(_) {
      const { loading: d, adminTab: r, openSettings: l, adminMailTabAddress: n, adminSendBoxTabAddress: v } = ue(), p = ae(), { t: s } = te({
        messages: {
          en: {
            name: "Name",
            created_at: "Created At",
            updated_at: "Update At",
            mail_count: "Mail Count",
            send_count: "Send Count",
            source_meta: "Source",
            showCredential: "Show Mail Address Credential",
            addressCredential: "Mail Address Credential",
            addressCredentialTip: "Please copy the Mail Address Credential and you can use it to login to your email account.",
            delete: "Delete",
            deleteTip: "Are you sure to delete this email?",
            deleteAccount: "Delete Account",
            viewMails: "View Mails",
            viewSendBox: "View SendBox",
            itemCount: "itemCount",
            query: "Query",
            addressQueryTip: "Leave blank to query all addresses",
            clearInbox: "Clear Inbox",
            clearSentItems: "Clear Sent Items",
            clearInboxTip: "Are you sure to clear inbox for this email?",
            clearSentItemsTip: "Are you sure to clear sent items for this email?",
            actions: "Actions",
            success: "Success",
            resetPassword: "Reset Password",
            newPassword: "New Password",
            passwordResetSuccess: "Password reset successfully",
            selectAll: "Select All of This Page",
            unselectAll: "Unselect All",
            pleaseSelectAddress: "Please select address",
            selectedItems: "Selected",
            multiDelete: "Multi Delete",
            multiDeleteTip: "Are you sure to delete selected addresses?",
            multiClearInbox: "Multi Clear Inbox",
            multiClearInboxTip: "Are you sure to clear inbox for selected addresses?",
            multiClearSentItems: "Multi Clear Sent Items",
            multiClearSentItemsTip: "Are you sure to clear sent items for selected addresses?"
          },
          zh: {
            name: "\u540D\u79F0",
            created_at: "\u521B\u5EFA\u65F6\u95F4",
            updated_at: "\u66F4\u65B0\u65F6\u95F4",
            mail_count: "\u90AE\u4EF6\u6570\u91CF",
            send_count: "\u53D1\u9001\u6570\u91CF",
            source_meta: "\u6765\u6E90",
            showCredential: "\u67E5\u770B\u90AE\u7BB1\u5730\u5740\u51ED\u8BC1",
            addressCredential: "\u90AE\u7BB1\u5730\u5740\u51ED\u8BC1",
            addressCredentialTip: "\u8BF7\u590D\u5236\u90AE\u7BB1\u5730\u5740\u51ED\u8BC1\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u5B83\u767B\u5F55\u4F60\u7684\u90AE\u7BB1\u3002",
            delete: "\u5220\u9664",
            deleteTip: "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u90AE\u7BB1\u5417\uFF1F",
            deleteAccount: "\u5220\u9664\u90AE\u7BB1",
            viewMails: "\u67E5\u770B\u90AE\u4EF6",
            viewSendBox: "\u67E5\u770B\u53D1\u4EF6\u7BB1",
            itemCount: "\u603B\u6570",
            query: "\u67E5\u8BE2",
            addressQueryTip: "\u7559\u7A7A\u67E5\u8BE2\u6240\u6709\u5730\u5740",
            clearInbox: "\u6E05\u7A7A\u6536\u4EF6\u7BB1",
            clearSentItems: "\u6E05\u7A7A\u53D1\u4EF6\u7BB1",
            clearInboxTip: "\u786E\u5B9A\u8981\u6E05\u7A7A\u8FD9\u4E2A\u90AE\u7BB1\u7684\u6536\u4EF6\u7BB1\u5417\uFF1F",
            clearSentItemsTip: "\u786E\u5B9A\u8981\u6E05\u7A7A\u8FD9\u4E2A\u90AE\u7BB1\u7684\u53D1\u4EF6\u7BB1\u5417\uFF1F",
            actions: "\u64CD\u4F5C",
            success: "\u6210\u529F",
            resetPassword: "\u91CD\u7F6E\u5BC6\u7801",
            newPassword: "\u65B0\u5BC6\u7801",
            passwordResetSuccess: "\u5BC6\u7801\u91CD\u7F6E\u6210\u529F",
            selectAll: "\u5168\u9009\u672C\u9875",
            unselectAll: "\u53D6\u6D88\u5168\u9009",
            pleaseSelectAddress: "\u8BF7\u9009\u62E9\u5730\u5740",
            selectedItems: "\u5DF2\u9009\u62E9",
            multiDelete: "\u6279\u91CF\u5220\u9664",
            multiDeleteTip: "\u786E\u5B9A\u8981\u5220\u9664\u9009\u4E2D\u7684\u90AE\u7BB1\u5417\uFF1F",
            multiClearInbox: "\u6279\u91CF\u6E05\u7A7A\u6536\u4EF6\u7BB1",
            multiClearInboxTip: "\u786E\u5B9A\u8981\u6E05\u7A7A\u9009\u4E2D\u90AE\u7BB1\u7684\u6536\u4EF6\u7BB1\u5417\uFF1F",
            multiClearSentItems: "\u6279\u91CF\u6E05\u7A7A\u53D1\u4EF6\u7BB1",
            multiClearSentItemsTip: "\u786E\u5B9A\u8981\u6E05\u7A7A\u9009\u4E2D\u90AE\u7BB1\u7684\u53D1\u4EF6\u7BB1\u5417\uFF1F"
          }
        }
      }), y = f(false), g = f(""), i = f(0), c = f(0), x = f(0), C = f(false), L = f(0), u = f(""), b = f([]), w = f(false), N = f({
        percentage: 0,
        tip: "0/0"
      }), K = f(""), D = xe(() => b.value.length), A = xe(() => b.value.length > 0), I = f(""), q = f([]), W = f(0), k = f(1), $ = f(20), B = f(false), Y = f(false), se = f(false), _e = async (T) => {
        try {
          g.value = await P.adminShowAddressCredential(T), y.value = true;
        } catch (j) {
          p.error(j.message || "error"), y.value = false, g.value = "";
        }
      }, S = async () => {
        try {
          await P.adminDeleteAddress(i.value), p.success(s("success")), await oe();
        } catch (T) {
          p.error(T.message || "error");
        } finally {
          B.value = false;
        }
      }, R = async () => {
        try {
          await P.fetch(`/admin/clear_inbox/${c.value}`, {
            method: "DELETE"
          }), p.success(s("success")), await oe();
        } catch (T) {
          p.error(T.message || "error");
        } finally {
          Y.value = false;
        }
      }, ne = async () => {
        try {
          await P.fetch(`/admin/clear_sent_items/${x.value}`, {
            method: "DELETE"
          }), p.success(s("success")), await oe();
        } catch (T) {
          p.error(T.message || "error");
        } finally {
          se.value = false;
        }
      }, he = async () => {
        try {
          await P.fetch(`/admin/address/${L.value}/reset_password`, {
            method: "POST",
            body: JSON.stringify({
              password: u.value
            })
          }), p.success(s("passwordResetSuccess")), u.value = "", C.value = false;
        } catch (T) {
          p.error(T.message || "error");
        }
      }, z = () => {
        b.value = q.value.map((T) => T.id);
      }, ce = () => {
        b.value = [];
      }, H = async ({ shouldSkip: T = () => false, apiCall: j, title: Ie, operationName: me = "operation" }) => {
        try {
          d.value = true;
          const fe = q.value.filter((ve) => b.value.includes(ve.id));
          if (fe.length === 0) {
            p.error(s("pleaseSelectAddress"));
            return;
          }
          const Re = [], Me = fe.length;
          N.value = {
            percentage: 0,
            tip: `0/${Me}`
          }, K.value = Ie, w.value = true;
          for (const [ve, Ae] of fe.entries()) {
            try {
              T(Ae) || await j(Ae.id);
            } catch ($e) {
              console.error(`${me} failed for address ${Ae.id}:`, $e), Re.push(Ae.id);
            }
            N.value = {
              percentage: Math.floor((ve + 1) / Me * 100),
              tip: `${ve + 1}/${Me}`
            };
          }
          await oe(), b.value = Re, p.success(s("success"));
        } catch (fe) {
          p.error(fe.message || "error");
        } finally {
          d.value = false;
        }
      }, je = async () => {
        await H({
          apiCall: (T) => P.adminDeleteAddress(T),
          title: s("multiDelete") + " " + s("success"),
          operationName: "Delete"
        });
      }, ye = async () => {
        await H({
          shouldSkip: (T) => T.mail_count <= 0,
          apiCall: (T) => P.fetch(`/admin/clear_inbox/${T}`, {
            method: "DELETE"
          }),
          title: s("multiClearInbox") + " " + s("success"),
          operationName: "ClearInbox"
        });
      }, we = async () => {
        await H({
          shouldSkip: (T) => T.send_count <= 0,
          apiCall: (T) => P.fetch(`/admin/clear_sent_items/${T}`, {
            method: "DELETE"
          }),
          title: s("multiClearSentItems") + " " + s("success"),
          operationName: "ClearSentItems"
        });
      }, oe = async () => {
        try {
          I.value = I.value.trim();
          const { results: T, count: j } = await P.fetch(`/admin/address?limit=${$.value}&offset=${(k.value - 1) * $.value}` + (I.value ? `&query=${I.value}` : ""));
          q.value = T, j > 0 && (W.value = j);
        } catch (T) {
          console.error(T), p.error(T.message || "error");
        }
      }, J = [
        {
          type: "selection"
        },
        {
          title: "ID",
          key: "id"
        },
        {
          title: s("name"),
          key: "name"
        },
        {
          title: s("created_at"),
          key: "created_at"
        },
        {
          title: s("updated_at"),
          key: "updated_at"
        },
        {
          title: s("source_meta"),
          key: "source_meta",
          render(T) {
            const j = T.source_meta;
            if (!j) return "";
            const Ie = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, me = /^[0-9a-fA-F:]+$/;
            return Ie.test(j) || j.includes(":") && me.test(j) && !j.startsWith("tg:") ? U("a", {
              href: `https://ip.im/${j}`,
              target: "_blank",
              rel: "noopener noreferrer"
            }, j) : j;
          }
        },
        {
          title: s("mail_count"),
          key: "mail_count",
          render(T) {
            return U(O, {
              text: true,
              onClick: () => {
                T.mail_count > 0 && (n.value = T.name, r.value = "mails");
              }
            }, {
              icon: () => U(He, {
                value: T.mail_count,
                "show-zero": true,
                max: 99,
                type: "success"
              }),
              default: () => T.mail_count > 0 ? s("viewMails") : ""
            });
          }
        },
        {
          title: s("send_count"),
          key: "send_count",
          render(T) {
            return U(O, {
              text: true,
              onClick: () => {
                T.send_count > 0 && (v.value = T.name, r.value = "sendBox");
              }
            }, {
              icon: () => U(He, {
                value: T.send_count,
                "show-zero": true,
                max: 99,
                type: "success"
              }),
              default: () => T.send_count > 0 ? s("viewSendBox") : ""
            });
          }
        },
        {
          title: s("actions"),
          key: "actions",
          render(T) {
            var _a2;
            return U("div", [
              U(Mt, {
                mode: "horizontal",
                options: [
                  {
                    label: s("actions"),
                    icon: () => U(Tt),
                    key: "action",
                    children: [
                      {
                        label: () => U(O, {
                          text: true,
                          onClick: () => _e(T.id)
                        }, {
                          default: () => s("showCredential")
                        })
                      },
                      {
                        label: () => U(O, {
                          text: true,
                          onClick: () => {
                            n.value = T.name, r.value = "mails";
                          }
                        }, {
                          default: () => s("viewMails")
                        }),
                        show: T.mail_count > 0
                      },
                      {
                        label: () => U(O, {
                          text: true,
                          onClick: () => {
                            v.value = T.name, r.value = "sendBox";
                          }
                        }, {
                          default: () => s("viewSendBox")
                        }),
                        show: T.send_count > 0
                      },
                      {
                        label: () => U(O, {
                          text: true,
                          onClick: () => {
                            c.value = T.id, Y.value = true;
                          }
                        }, {
                          default: () => s("clearInbox")
                        }),
                        show: T.mail_count > 0
                      },
                      {
                        label: () => U(O, {
                          text: true,
                          onClick: () => {
                            x.value = T.id, se.value = true;
                          }
                        }, {
                          default: () => s("clearSentItems")
                        }),
                        show: T.send_count > 0
                      },
                      {
                        label: () => U(O, {
                          text: true,
                          onClick: () => {
                            L.value = T.id, C.value = true;
                          }
                        }, {
                          default: () => s("resetPassword")
                        }),
                        show: (_a2 = l.value) == null ? void 0 : _a2.enableAddressPassword
                      },
                      {
                        label: () => U(O, {
                          text: true,
                          onClick: () => {
                            i.value = T.id, B.value = true;
                          }
                        }, {
                          default: () => s("delete")
                        })
                      }
                    ]
                  }
                ]
              })
            ]);
          }
        }
      ];
      return Ze([
        k,
        $
      ], async () => {
        await oe();
      }), le(async () => {
        await oe();
      }), (T, j) => {
        const Ie = de, me = Ee, fe = pe, Re = Lt, Me = Ce, ve = Ye, Ae = rt, $e = Ve, h = st, V = qe, G = aa;
        return E(), Q("div", Va, [
          e(me, {
            show: y.value,
            "onUpdate:show": j[0] || (j[0] = (F) => y.value = F),
            preset: "dialog",
            title: "Dialog"
          }, {
            header: t(() => [
              M("div", null, o(a(s)("addressCredential")), 1)
            ]),
            action: t(() => [
              ...j[11] || (j[11] = [])
            ]),
            default: t(() => [
              M("span", null, [
                M("p", null, o(a(s)("addressCredentialTip")), 1)
              ]),
              e(Ie, {
                bordered: false,
                embedded: ""
              }, {
                default: t(() => [
                  M("b", null, o(g.value), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, [
            "show"
          ]),
          e(me, {
            show: B.value,
            "onUpdate:show": j[1] || (j[1] = (F) => B.value = F),
            preset: "dialog",
            title: a(s)("deleteAccount")
          }, {
            action: t(() => [
              e(a(O), {
                loading: a(d),
                onClick: S,
                size: "small",
                tertiary: "",
                type: "error"
              }, {
                default: t(() => [
                  m(o(a(s)("deleteAccount")), 1)
                ]),
                _: 1
              }, 8, [
                "loading"
              ])
            ]),
            default: t(() => [
              M("p", null, o(a(s)("deleteTip")), 1)
            ]),
            _: 1
          }, 8, [
            "show",
            "title"
          ]),
          e(me, {
            show: Y.value,
            "onUpdate:show": j[2] || (j[2] = (F) => Y.value = F),
            preset: "dialog",
            title: a(s)("clearInbox")
          }, {
            action: t(() => [
              e(a(O), {
                loading: a(d),
                onClick: R,
                size: "small",
                tertiary: "",
                type: "error"
              }, {
                default: t(() => [
                  m(o(a(s)("clearInbox")), 1)
                ]),
                _: 1
              }, 8, [
                "loading"
              ])
            ]),
            default: t(() => [
              M("p", null, o(a(s)("clearInboxTip")), 1)
            ]),
            _: 1
          }, 8, [
            "show",
            "title"
          ]),
          e(me, {
            show: se.value,
            "onUpdate:show": j[3] || (j[3] = (F) => se.value = F),
            preset: "dialog",
            title: a(s)("clearSentItems")
          }, {
            action: t(() => [
              e(a(O), {
                loading: a(d),
                onClick: ne,
                size: "small",
                tertiary: "",
                type: "error"
              }, {
                default: t(() => [
                  m(o(a(s)("clearSentItems")), 1)
                ]),
                _: 1
              }, 8, [
                "loading"
              ])
            ]),
            default: t(() => [
              M("p", null, o(a(s)("clearSentItemsTip")), 1)
            ]),
            _: 1
          }, 8, [
            "show",
            "title"
          ]),
          e(me, {
            show: C.value,
            "onUpdate:show": j[5] || (j[5] = (F) => C.value = F),
            preset: "dialog",
            title: a(s)("resetPassword")
          }, {
            action: t(() => [
              e(a(O), {
                loading: a(d),
                onClick: he,
                size: "small",
                tertiary: "",
                type: "info"
              }, {
                default: t(() => [
                  m(o(a(s)("resetPassword")), 1)
                ]),
                _: 1
              }, 8, [
                "loading"
              ])
            ]),
            default: t(() => [
              e(Re, {
                label: a(s)("newPassword")
              }, {
                default: t(() => [
                  e(fe, {
                    value: u.value,
                    "onUpdate:value": j[4] || (j[4] = (F) => u.value = F),
                    type: "password",
                    placeholder: "",
                    "show-password-on": "click"
                  }, null, 8, [
                    "value"
                  ])
                ]),
                _: 1
              }, 8, [
                "label"
              ])
            ]),
            _: 1
          }, 8, [
            "show",
            "title"
          ]),
          e(Me, {
            style: {
              "margin-bottom": "10px"
            }
          }, {
            default: t(() => [
              e(fe, {
                value: I.value,
                "onUpdate:value": j[6] || (j[6] = (F) => I.value = F),
                clearable: "",
                placeholder: a(s)("addressQueryTip"),
                onKeydown: Ge(oe, [
                  "enter"
                ])
              }, null, 8, [
                "value",
                "placeholder"
              ]),
              e(a(O), {
                onClick: oe,
                type: "primary",
                tertiary: ""
              }, {
                default: t(() => [
                  m(o(a(s)("query")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          A.value ? (E(), X($e, {
            key: 0,
            style: {
              "margin-bottom": "10px"
            }
          }, {
            default: t(() => [
              e(a(O), {
                onClick: z,
                tertiary: ""
              }, {
                default: t(() => [
                  m(o(a(s)("selectAll")), 1)
                ]),
                _: 1
              }),
              e(a(O), {
                onClick: ce,
                tertiary: ""
              }, {
                default: t(() => [
                  m(o(a(s)("unselectAll")), 1)
                ]),
                _: 1
              }),
              e(ve, {
                onPositiveClick: je
              }, {
                trigger: t(() => [
                  e(a(O), {
                    tertiary: "",
                    type: "error"
                  }, {
                    default: t(() => [
                      m(o(a(s)("multiDelete")), 1)
                    ]),
                    _: 1
                  })
                ]),
                default: t(() => [
                  m(" " + o(a(s)("multiDeleteTip")), 1)
                ]),
                _: 1
              }),
              e(ve, {
                onPositiveClick: ye
              }, {
                trigger: t(() => [
                  e(a(O), {
                    tertiary: "",
                    type: "warning"
                  }, {
                    default: t(() => [
                      m(o(a(s)("multiClearInbox")), 1)
                    ]),
                    _: 1
                  })
                ]),
                default: t(() => [
                  m(" " + o(a(s)("multiClearInboxTip")), 1)
                ]),
                _: 1
              }),
              e(ve, {
                onPositiveClick: we
              }, {
                trigger: t(() => [
                  e(a(O), {
                    tertiary: "",
                    type: "warning"
                  }, {
                    default: t(() => [
                      m(o(a(s)("multiClearSentItems")), 1)
                    ]),
                    _: 1
                  })
                ]),
                default: t(() => [
                  m(" " + o(a(s)("multiClearSentItemsTip")), 1)
                ]),
                _: 1
              }),
              e(Ae, {
                type: "info"
              }, {
                default: t(() => [
                  m(o(a(s)("selectedItems")) + ": " + o(D.value), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : Z("", true),
          M("div", Fa, [
            M("div", ja, [
              e(h, {
                page: k.value,
                "onUpdate:page": j[7] || (j[7] = (F) => k.value = F),
                "page-size": $.value,
                "onUpdate:pageSize": j[8] || (j[8] = (F) => $.value = F),
                "item-count": W.value,
                "page-sizes": [
                  20,
                  50,
                  100
                ],
                "show-size-picker": ""
              }, {
                prefix: t(({ itemCount: F }) => [
                  m(o(a(s)("itemCount")) + ": " + o(F), 1)
                ]),
                _: 1
              }, 8, [
                "page",
                "page-size",
                "item-count"
              ])
            ]),
            e(V, {
              "checked-row-keys": b.value,
              "onUpdate:checkedRowKeys": j[9] || (j[9] = (F) => b.value = F),
              columns: J,
              data: q.value,
              bordered: false,
              "row-key": (F) => F.id,
              embedded: ""
            }, null, 8, [
              "checked-row-keys",
              "data",
              "row-key"
            ])
          ]),
          e(me, {
            show: w.value,
            "onUpdate:show": j[10] || (j[10] = (F) => w.value = F),
            preset: "dialog",
            title: K.value,
            "negative-text": "OK"
          }, {
            default: t(() => [
              e($e, {
                justify: "center"
              }, {
                default: t(() => [
                  e(G, {
                    type: "circle",
                    status: "info",
                    percentage: N.value.percentage
                  }, {
                    default: t(() => [
                      M("span", Wa, o(N.value.tip), 1)
                    ]),
                    _: 1
                  }, 8, [
                    "percentage"
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, [
            "show",
            "title"
          ])
        ]);
      };
    }
  };
  Ka = ee(Ha, [
    [
      "__scopeId",
      "data-v-05ab3412"
    ]
  ]);
  Ga = {
    class: "center"
  };
  Ja = {
    __name: "CreateAccount",
    setup(_) {
      const { loading: d, openSettings: r } = ue(), l = ae(), { t: n } = te({
        messages: {
          en: {
            address: "Address",
            enablePrefix: "If enable Prefix",
            creatNewEmail: "Create New Email",
            fillInAllFields: "Please fill in all fields",
            successTip: "Success Created",
            addressCredential: "Mail Address Credential",
            addressCredentialTip: "Please copy the Mail Address Credential and you can use it to login to your email account.",
            addressPassword: "Address Password",
            linkWithAddressCredential: "Open to auto login email link"
          },
          zh: {
            address: "\u5730\u5740",
            enablePrefix: "\u662F\u5426\u542F\u7528\u524D\u7F00",
            creatNewEmail: "\u521B\u5EFA\u65B0\u90AE\u7BB1",
            fillInAllFields: "\u8BF7\u586B\u5199\u5B8C\u6574\u4FE1\u606F",
            successTip: "\u521B\u5EFA\u6210\u529F",
            addressCredential: "\u90AE\u7BB1\u5730\u5740\u51ED\u8BC1",
            addressCredentialTip: "\u8BF7\u590D\u5236\u90AE\u7BB1\u5730\u5740\u51ED\u8BC1\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u5B83\u767B\u5F55\u4F60\u7684\u90AE\u7BB1\u3002",
            addressPassword: "\u5730\u5740\u5BC6\u7801",
            linkWithAddressCredential: "\u6253\u5F00\u5373\u53EF\u81EA\u52A8\u767B\u5F55\u90AE\u7BB1\u7684\u94FE\u63A5"
          }
        }
      }), v = f(true), p = f(""), s = f(""), y = f(false), g = f(""), i = f(""), c = f(""), x = async () => {
        if (!p.value || !s.value) {
          l.error(n("fillInAllFields"));
          return;
        }
        try {
          const L = await P.fetch("/admin/new_address", {
            method: "POST",
            body: JSON.stringify({
              enablePrefix: v.value,
              name: p.value,
              domain: s.value
            })
          });
          g.value = L.jwt, i.value = L.password || "", c.value = L.address || "", l.success(n("successTip")), y.value = true;
        } catch (L) {
          l.error(L.message || "error");
        }
      }, C = () => `${window.location.origin}/?jwt=${g.value}`;
      return le(async () => {
        var _a2, _b;
        r.prefix && (v.value = true), s.value = ((_b = (_a2 = r.value.domains) == null ? void 0 : _a2[0]) == null ? void 0 : _b.value) || "";
      }), (L, u) => {
        const b = de, w = Et, N = Pt, K = Ee, D = Fe, A = ge, I = la, q = pe, W = re, k = Ce, $ = O;
        return E(), Q("div", Ga, [
          e(K, {
            show: y.value,
            "onUpdate:show": u[0] || (u[0] = (B) => y.value = B),
            preset: "dialog",
            title: a(n)("addressCredential")
          }, {
            default: t(() => [
              M("span", null, [
                M("p", null, o(a(n)("addressCredentialTip")), 1)
              ]),
              e(b, {
                embedded: ""
              }, {
                default: t(() => [
                  M("b", null, o(g.value), 1)
                ]),
                _: 1
              }),
              i.value ? (E(), X(b, {
                key: 0,
                embedded: ""
              }, {
                default: t(() => [
                  M("p", null, [
                    M("b", null, o(c.value), 1)
                  ]),
                  M("p", null, [
                    m(o(a(n)("addressPassword")) + ": ", 1),
                    M("b", null, o(i.value), 1)
                  ])
                ]),
                _: 1
              })) : Z("", true),
              e(b, {
                embedded: ""
              }, {
                default: t(() => [
                  e(N, null, {
                    default: t(() => [
                      e(w, {
                        title: a(n)("linkWithAddressCredential")
                      }, {
                        default: t(() => [
                          e(b, {
                            embedded: ""
                          }, {
                            default: t(() => [
                              M("b", null, o(C()), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, [
                        "title"
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, [
            "show",
            "title"
          ]),
          e(b, {
            bordered: false,
            embedded: "",
            style: {
              "max-width": "600px"
            }
          }, {
            default: t(() => [
              a(r).prefix ? (E(), X(A, {
                key: 0,
                label: a(n)("enablePrefix")
              }, {
                default: t(() => [
                  e(D, {
                    value: v.value,
                    "onUpdate:value": u[1] || (u[1] = (B) => v.value = B),
                    round: false
                  }, null, 8, [
                    "value"
                  ])
                ]),
                _: 1
              }, 8, [
                "label"
              ])) : Z("", true),
              e(A, {
                label: a(n)("address")
              }, {
                default: t(() => [
                  e(k, null, {
                    default: t(() => [
                      v.value && a(r).prefix ? (E(), X(I, {
                        key: 0
                      }, {
                        default: t(() => [
                          m(o(a(r).prefix), 1)
                        ]),
                        _: 1
                      })) : Z("", true),
                      e(q, {
                        value: p.value,
                        "onUpdate:value": u[2] || (u[2] = (B) => p.value = B)
                      }, null, 8, [
                        "value"
                      ]),
                      e(I, null, {
                        default: t(() => [
                          ...u[4] || (u[4] = [
                            m("@", -1)
                          ])
                        ]),
                        _: 1
                      }),
                      e(W, {
                        value: s.value,
                        "onUpdate:value": u[3] || (u[3] = (B) => s.value = B),
                        "consistent-menu-width": false,
                        options: a(r).domains
                      }, null, 8, [
                        "value",
                        "options"
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, [
                "label"
              ]),
              e($, {
                onClick: x,
                type: "primary",
                block: "",
                loading: a(d)
              }, {
                default: t(() => [
                  m(o(a(n)("creatNewEmail")), 1)
                ]),
                _: 1
              }, 8, [
                "loading"
              ])
            ]),
            _: 1
          })
        ]);
      };
    }
  };
  Qa = ee(Ja, [
    [
      "__scopeId",
      "data-v-22702c12"
    ]
  ]);
  Xa = {
    class: "center"
  };
  Za = 200;
  Ya = {
    __name: "AccountSettings",
    setup(_) {
      const { loading: d, openSettings: r } = ue(), l = ae(), { t: n } = te({
        messages: {
          en: {
            tip: "You can manually input the following multiple select input and enter",
            manualInputPrompt: "Type and press Enter to add",
            save: "Save",
            successTip: "Save Success",
            address_block_list: "Address Block Keywords for Users(Admin can skip)",
            address_block_list_placeholder: "Please enter the keywords you want to block",
            send_address_block_list: "Address Block Keywords for send email",
            noLimitSendAddressList: "No Balance Limit Send Address List",
            verified_address_list: "Verified Address List(Can send email by cf internal api)",
            fromBlockList: "Block Keywords for receive email",
            block_receive_unknow_address_email: "Block receive unknow address email",
            email_forwarding_config: "Email Forwarding Configuration",
            domain_list: "Domain List (Optional)",
            forward_address: "Forward Address",
            actions: "Actions",
            select_domain: "Select Domain",
            forward_placeholder: "forward@example.com",
            delete_rule: "Delete",
            delete_rule_confirm: "Are you sure you want to delete this rule?",
            delete_success: "Delete Success",
            forwarding_rule_warning: "Each rule will run independently. Forward address needs to be a verified address.",
            add: "Add",
            cancel: "Cancel",
            config: "Config",
            source_patterns: "Source Address Regex (Optional)",
            source_patterns_placeholder: "e.g. gmail.com",
            source_match_mode: "Match Mode",
            match_any: "Any",
            match_all: "All",
            source_patterns_tip: "Domain list filters by recipient address, source regex filters by sender address. Both conditions must match for forwarding (AND logic). Leave either empty to skip that filter.",
            regex_too_long: "Regex pattern too long (max 200 characters)",
            regex_invalid: "Invalid regex pattern",
            forward_address_required: "Forward address is required",
            rule_index: "Rule"
          },
          zh: {
            tip: "\u60A8\u53EF\u4EE5\u624B\u52A8\u8F93\u5165\u4EE5\u4E0B\u591A\u9009\u8F93\u5165\u6846, \u56DE\u8F66\u589E\u52A0",
            manualInputPrompt: "\u8F93\u5165\u540E\u6309\u56DE\u8F66\u952E\u6DFB\u52A0",
            save: "\u4FDD\u5B58",
            successTip: "\u4FDD\u5B58\u6210\u529F",
            address_block_list: "\u90AE\u4EF6\u5730\u5740\u5C4F\u853D\u5173\u952E\u8BCD(\u7BA1\u7406\u5458\u53EF\u8DF3\u8FC7\u68C0\u67E5)",
            address_block_list_placeholder: "\u8BF7\u8F93\u5165\u60A8\u60F3\u8981\u5C4F\u853D\u7684\u5173\u952E\u8BCD",
            send_address_block_list: "\u53D1\u9001\u90AE\u4EF6\u5730\u5740\u5C4F\u853D\u5173\u952E\u8BCD",
            noLimitSendAddressList: "\u65E0\u4F59\u989D\u9650\u5236\u53D1\u9001\u5730\u5740\u5217\u8868",
            verified_address_list: "\u5DF2\u9A8C\u8BC1\u5730\u5740\u5217\u8868(\u53EF\u901A\u8FC7 cf \u5185\u90E8 api \u53D1\u9001\u90AE\u4EF6)",
            fromBlockList: "\u63A5\u6536\u90AE\u4EF6\u5730\u5740\u5C4F\u853D\u5173\u952E\u8BCD",
            block_receive_unknow_address_email: "\u7981\u6B62\u63A5\u6536\u672A\u77E5\u5730\u5740\u90AE\u4EF6",
            email_forwarding_config: "\u90AE\u4EF6\u8F6C\u53D1\u914D\u7F6E",
            domain_list: "\u57DF\u540D\u5217\u8868\uFF08\u53EF\u9009\uFF09",
            forward_address: "\u8F6C\u53D1\u5730\u5740",
            actions: "\u64CD\u4F5C",
            select_domain: "\u9009\u62E9\u57DF\u540D",
            forward_placeholder: "forward@example.com",
            delete_rule: "\u5220\u9664",
            delete_rule_confirm: "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u6761\u89C4\u5219\u5417\uFF1F",
            delete_success: "\u5220\u9664\u6210\u529F",
            forwarding_rule_warning: "\u6BCF\u6761\u89C4\u5219\u72EC\u7ACB\u8FD0\u884C\uFF0C\u8F6C\u53D1\u5730\u5740\u9700\u8981\u4E3A\u5DF2\u9A8C\u8BC1\u7684\u5730\u5740\u3002",
            add: "\u6DFB\u52A0",
            cancel: "\u53D6\u6D88",
            config: "\u914D\u7F6E",
            source_patterns: "\u6765\u6E90\u5730\u5740\u6B63\u5219\uFF08\u53EF\u9009\uFF09",
            source_patterns_placeholder: "\u4F8B\u5982: gmail.com",
            source_match_mode: "\u5339\u914D\u6A21\u5F0F",
            match_any: "\u4EFB\u4E00",
            match_all: "\u5168\u90E8",
            source_patterns_tip: "\u57DF\u540D\u5217\u8868\u6309\u6536\u4EF6\u5730\u5740\u8FC7\u6EE4\uFF0C\u6765\u6E90\u6B63\u5219\u6309\u53D1\u4EF6\u5730\u5740\u8FC7\u6EE4\uFF0C\u4E24\u8005\u5747\u4E3A\u53EF\u9009\u3002\u540C\u65F6\u914D\u7F6E\u65F6\u9700\u540C\u65F6\u6EE1\u8DB3\uFF08AND \u903B\u8F91\uFF09\uFF0C\u7559\u7A7A\u5219\u8DF3\u8FC7\u8BE5\u6761\u4EF6\u3002",
            regex_too_long: "\u6B63\u5219\u8868\u8FBE\u5F0F\u8FC7\u957F\uFF08\u6700\u5927200\u5B57\u7B26\uFF09",
            regex_invalid: "\u65E0\u6548\u7684\u6B63\u5219\u8868\u8FBE\u5F0F",
            forward_address_required: "\u8F6C\u53D1\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A",
            rule_index: "\u89C4\u5219"
          }
        }
      }), v = f([]), p = f([]), s = f([]), y = f([]), g = f([]), i = f({
        blockReceiveUnknowAddressEmail: false,
        emailForwardingList: []
      }), c = f(false), x = f([]), C = [
        {
          title: n("domain_list"),
          key: "domains",
          render: (D, A) => {
            var _a2;
            return U(re, {
              value: Array.isArray(D.domains) ? D.domains : [],
              onUpdateValue: (I) => {
                x.value[A].domains = I;
              },
              options: ((_a2 = r.value) == null ? void 0 : _a2.domains) || [],
              multiple: true,
              filterable: true,
              tag: true,
              placeholder: n("select_domain")
            });
          }
        },
        {
          title: n("source_patterns"),
          key: "sourcePatterns",
          render: (D, A) => U("div", {
            style: "display: flex; flex-direction: column; gap: 4px;"
          }, [
            U(re, {
              value: Array.isArray(D.sourcePatterns) ? D.sourcePatterns : [],
              onUpdateValue: (I) => {
                x.value[A].sourcePatterns = I;
              },
              multiple: true,
              filterable: true,
              tag: true,
              placeholder: n("source_patterns_placeholder")
            }, {
              empty: () => U("span", {
                style: "color: #999; font-size: 12px;"
              }, n("manualInputPrompt"))
            }),
            U(Dt, {
              value: D.sourceMatchMode || "any",
              onUpdateValue: (I) => {
                x.value[A].sourceMatchMode = I;
              },
              size: "small",
              style: "margin-top: 4px;"
            }, {
              default: () => [
                U(ft, {
                  value: "any"
                }, {
                  default: () => n("match_any")
                }),
                U(ft, {
                  value: "all"
                }, {
                  default: () => n("match_all")
                })
              ]
            })
          ])
        },
        {
          title: n("forward_address"),
          key: "forward",
          render: (D, A) => U(pe, {
            value: D.forward,
            onUpdateValue: (I) => {
              x.value[A].forward = I;
            },
            placeholder: "forward@example.com"
          })
        },
        {
          title: n("actions"),
          key: "actions",
          render: (D, A) => U("div", {
            style: "display: flex; gap: 8px;"
          }, [
            U(Ye, {
              onPositiveClick: () => {
                x.value = x.value.filter((I, q) => q !== A), l.success(n("delete_success"));
              }
            }, {
              default: () => n("delete_rule_confirm"),
              trigger: () => U(O, {
                size: "small",
                type: "error"
              }, {
                default: () => n("delete_rule")
              })
            })
          ])
        }
      ], L = () => {
        x.value = i.value.emailForwardingList ? [
          ...i.value.emailForwardingList
        ] : [], c.value = true;
      }, u = () => {
        x.value = [
          ...x.value,
          {
            domains: [],
            forward: "",
            sourcePatterns: [],
            sourceMatchMode: "any"
          }
        ];
      }, b = () => {
        for (let D = 0; D < x.value.length; D++) {
          const A = x.value[D];
          if (!A.forward || A.forward.trim() === "") return l.error(`${n("forward_address_required")} (${n("rule_index")} ${D + 1})`), false;
          if (A.sourcePatterns && A.sourcePatterns.length > 0) for (const I of A.sourcePatterns) {
            if (I.length > Za) return l.error(`${n("regex_too_long")}: ${I.substring(0, 30)}...`), false;
            try {
              new RegExp(I, "i");
            } catch {
              return l.error(`${n("regex_invalid")}: ${I}`), false;
            }
          }
        }
        return true;
      }, w = () => {
        b() && (i.value.emailForwardingList = [
          ...x.value
        ], c.value = false);
      }, N = async () => {
        var _a2, _b;
        try {
          const D = await P.fetch("/admin/account_settings");
          v.value = D.blockList || [], p.value = D.sendBlockList || [], y.value = D.verifiedAddressList || [], g.value = D.fromBlockList || [], s.value = D.noLimitSendAddressList || [], i.value = {
            blockReceiveUnknowAddressEmail: ((_a2 = D.emailRuleSettings) == null ? void 0 : _a2.blockReceiveUnknowAddressEmail) || false,
            emailForwardingList: ((_b = D.emailRuleSettings) == null ? void 0 : _b.emailForwardingList) || []
          };
        } catch (D) {
          l.error(D.message || "error");
        }
      }, K = async () => {
        try {
          await P.fetch("/admin/account_settings", {
            method: "POST",
            body: JSON.stringify({
              blockList: v.value || [],
              sendBlockList: p.value || [],
              verifiedAddressList: y.value || [],
              fromBlockList: g.value || [],
              noLimitSendAddressList: s.value || [],
              emailRuleSettings: i.value
            })
          }), l.success(n("successTip"));
        } catch (D) {
          l.error(D.message || "error");
        }
      };
      return le(async () => {
        await N();
      }), (D, A) => {
        const I = Ue, q = De, W = Le, k = ge, $ = Fe, B = de, Y = Ve, se = qe, _e = Ee;
        return E(), Q(it, null, [
          M("div", Xa, [
            e(B, {
              bordered: false,
              embedded: "",
              style: {
                "max-width": "600px"
              }
            }, {
              default: t(() => [
                e(I, {
                  "show-icon": false,
                  bordered: false,
                  type: "warning",
                  style: {
                    "margin-bottom": "10px"
                  }
                }, {
                  default: t(() => [
                    M("span", null, o(a(n)("tip")), 1)
                  ]),
                  _: 1
                }),
                e(q, {
                  justify: "end"
                }, {
                  default: t(() => [
                    e(a(O), {
                      onClick: K,
                      type: "primary",
                      loading: a(d)
                    }, {
                      default: t(() => [
                        m(o(a(n)("save")), 1)
                      ]),
                      _: 1
                    }, 8, [
                      "loading"
                    ])
                  ]),
                  _: 1
                }),
                e(k, {
                  label: a(n)("address_block_list")
                }, {
                  default: t(() => [
                    e(a(re), {
                      value: v.value,
                      "onUpdate:value": A[0] || (A[0] = (S) => v.value = S),
                      filterable: "",
                      multiple: "",
                      tag: "",
                      placeholder: a(n)("address_block_list_placeholder")
                    }, {
                      empty: t(() => [
                        e(W, {
                          depth: "3"
                        }, {
                          default: t(() => [
                            m(o(a(n)("manualInputPrompt")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, [
                      "value",
                      "placeholder"
                    ])
                  ]),
                  _: 1
                }, 8, [
                  "label"
                ]),
                e(k, {
                  label: a(n)("send_address_block_list")
                }, {
                  default: t(() => [
                    e(a(re), {
                      value: p.value,
                      "onUpdate:value": A[1] || (A[1] = (S) => p.value = S),
                      filterable: "",
                      multiple: "",
                      tag: "",
                      placeholder: a(n)("address_block_list_placeholder")
                    }, {
                      empty: t(() => [
                        e(W, {
                          depth: "3"
                        }, {
                          default: t(() => [
                            m(o(a(n)("manualInputPrompt")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, [
                      "value",
                      "placeholder"
                    ])
                  ]),
                  _: 1
                }, 8, [
                  "label"
                ]),
                e(k, {
                  label: a(n)("noLimitSendAddressList")
                }, {
                  default: t(() => [
                    e(a(re), {
                      value: s.value,
                      "onUpdate:value": A[2] || (A[2] = (S) => s.value = S),
                      filterable: "",
                      multiple: "",
                      tag: "",
                      placeholder: a(n)("noLimitSendAddressList")
                    }, {
                      empty: t(() => [
                        e(W, {
                          depth: "3"
                        }, {
                          default: t(() => [
                            m(o(a(n)("manualInputPrompt")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, [
                      "value",
                      "placeholder"
                    ])
                  ]),
                  _: 1
                }, 8, [
                  "label"
                ]),
                e(k, {
                  label: a(n)("verified_address_list")
                }, {
                  default: t(() => [
                    e(a(re), {
                      value: y.value,
                      "onUpdate:value": A[3] || (A[3] = (S) => y.value = S),
                      filterable: "",
                      multiple: "",
                      tag: "",
                      placeholder: a(n)("verified_address_list")
                    }, {
                      empty: t(() => [
                        e(W, {
                          depth: "3"
                        }, {
                          default: t(() => [
                            m(o(a(n)("manualInputPrompt")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, [
                      "value",
                      "placeholder"
                    ])
                  ]),
                  _: 1
                }, 8, [
                  "label"
                ]),
                e(k, {
                  label: a(n)("fromBlockList")
                }, {
                  default: t(() => [
                    e(a(re), {
                      value: g.value,
                      "onUpdate:value": A[4] || (A[4] = (S) => g.value = S),
                      filterable: "",
                      multiple: "",
                      tag: "",
                      placeholder: a(n)("fromBlockList")
                    }, {
                      empty: t(() => [
                        e(W, {
                          depth: "3"
                        }, {
                          default: t(() => [
                            m(o(a(n)("manualInputPrompt")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, [
                      "value",
                      "placeholder"
                    ])
                  ]),
                  _: 1
                }, 8, [
                  "label"
                ]),
                e(k, {
                  label: a(n)("block_receive_unknow_address_email")
                }, {
                  default: t(() => [
                    e($, {
                      value: i.value.blockReceiveUnknowAddressEmail,
                      "onUpdate:value": A[5] || (A[5] = (S) => i.value.blockReceiveUnknowAddressEmail = S),
                      round: false
                    }, null, 8, [
                      "value"
                    ])
                  ]),
                  _: 1
                }, 8, [
                  "label"
                ]),
                e(k, {
                  label: a(n)("email_forwarding_config")
                }, {
                  default: t(() => [
                    e(a(O), {
                      onClick: L
                    }, {
                      default: t(() => [
                        m(o(a(n)("config")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, [
                  "label"
                ])
              ]),
              _: 1
            })
          ]),
          e(_e, {
            show: c.value,
            "onUpdate:show": A[6] || (A[6] = (S) => c.value = S),
            preset: "card",
            title: a(n)("email_forwarding_config"),
            style: {
              "max-width": "1000px"
            }
          }, {
            default: t(() => [
              e(Y, {
                vertical: ""
              }, {
                default: t(() => [
                  e(I, {
                    "show-icon": false,
                    bordered: false,
                    type: "warning"
                  }, {
                    default: t(() => [
                      M("span", null, o(a(n)("forwarding_rule_warning")), 1),
                      A[7] || (A[7] = M("br", null, null, -1)),
                      M("span", null, o(a(n)("source_patterns_tip")), 1)
                    ]),
                    _: 1
                  }),
                  e(Y, {
                    justify: "end"
                  }, {
                    default: t(() => [
                      e(a(O), {
                        onClick: u
                      }, {
                        default: t(() => [
                          m(o(a(n)("add")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  e(se, {
                    columns: C,
                    data: x.value,
                    bordered: false,
                    striped: ""
                  }, null, 8, [
                    "data"
                  ]),
                  e(Y, {
                    justify: "end"
                  }, {
                    default: t(() => [
                      e(a(O), {
                        onClick: w,
                        type: "primary"
                      }, {
                        default: t(() => [
                          m(o(a(n)("save")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, [
            "show",
            "title"
          ])
        ], 64);
      };
    }
  };
  wt = ee(Ya, [
    [
      "__scopeId",
      "data-v-e681a103"
    ]
  ]);
  el = {
    style: {
      overflow: "auto"
    }
  };
  tl = {
    __name: "UserAddressManagement",
    props: {
      user_id: {
        type: Number,
        required: true
      }
    },
    setup(_) {
      const d = _, r = ae(), { locale: l, t: n } = te({
        messages: {
          en: {
            success: "success",
            name: "Name",
            mail_count: "Mail Count",
            send_count: "Send Count"
          },
          zh: {
            success: "\u6210\u529F",
            name: "\u540D\u79F0",
            mail_count: "\u90AE\u4EF6\u6570\u91CF",
            send_count: "\u53D1\u9001\u6570\u91CF"
          }
        }
      }), v = f([]), p = async () => {
        try {
          const { results: y } = await P.fetch(`/admin/users/bind_address/${d.user_id}`);
          v.value = y;
        } catch (y) {
          console.log(y), r.error(y.message || "error");
        }
      }, s = [
        {
          title: n("name"),
          key: "name"
        },
        {
          title: n("mail_count"),
          key: "mail_count",
          render(y) {
            return U(He, {
              value: y.mail_count,
              "show-zero": true,
              max: 99,
              type: "success"
            });
          }
        },
        {
          title: n("send_count"),
          key: "send_count",
          render(y) {
            return U(He, {
              value: y.send_count,
              "show-zero": true,
              max: 99,
              type: "success"
            });
          }
        }
      ];
      return le(async () => {
        await p();
      }), (y, g) => {
        const i = qe;
        return E(), Q("div", el, [
          e(i, {
            columns: s,
            data: v.value,
            bordered: false,
            embedded: ""
          }, null, 8, [
            "data"
          ])
        ]);
      };
    }
  };
  al = ee(tl, [
    [
      "__scopeId",
      "data-v-b33d0779"
    ]
  ]);
  ll = {
    style: {
      "margin-top": "10px"
    }
  };
  nl = {
    style: {
      overflow: "auto"
    }
  };
  sl = {
    style: {
      display: "inline-block"
    }
  };
  ol = {
    __name: "UserManagement",
    setup(_) {
      const { loading: d, openSettings: r } = ue(), l = ae(), { t: n } = te({
        messages: {
          en: {
            success: "Success",
            user_email: "User Email",
            role: "Role",
            address_count: "Address Count",
            created_at: "Created At",
            actions: "Actions",
            query: "Query",
            itemCount: "itemCount",
            deleteUser: "Delete User",
            delete: "Delete",
            deleteUserTip: "Are you sure you want to delete this user?",
            resetPassword: "Reset Password",
            pleaseInput: "Please input complete information",
            createUser: "Create User",
            email: "Email",
            password: "Password",
            changeRole: "Change Role",
            prefix: "Prefix",
            domains: "Domains",
            roleDonotExist: "Current Role does not exist",
            userAddressManagement: "Address Management"
          },
          zh: {
            success: "\u6210\u529F",
            user_email: "\u7528\u6237\u90AE\u7BB1",
            role: "\u89D2\u8272",
            address_count: "\u5730\u5740\u6570\u91CF",
            created_at: "\u521B\u5EFA\u65F6\u95F4",
            actions: "\u64CD\u4F5C",
            query: "\u67E5\u8BE2",
            itemCount: "\u603B\u6570",
            deleteUser: "\u5220\u9664\u7528\u6237",
            delete: "\u5220\u9664",
            deleteUserTip: "\u786E\u5B9A\u8981\u5220\u9664\u6B64\u7528\u6237\u5417\uFF1F",
            resetPassword: "\u91CD\u7F6E\u5BC6\u7801",
            pleaseInput: "\u8BF7\u8F93\u5165\u5B8C\u6574\u4FE1\u606F",
            createUser: "\u521B\u5EFA\u7528\u6237",
            email: "\u90AE\u7BB1",
            password: "\u5BC6\u7801",
            changeRole: "\u66F4\u6539\u89D2\u8272",
            prefix: "\u524D\u7F00",
            domains: "\u57DF\u540D",
            roleDonotExist: "\u5F53\u524D\u89D2\u8272\u4E0D\u5B58\u5728",
            userAddressManagement: "\u5730\u5740\u7BA1\u7406"
          }
        }
      }), v = f([]), p = f(0), s = f(1), y = f(20), g = f(""), i = f(false), c = f(""), x = f(false), C = f(0), L = f(false), u = f({
        email: "",
        password: ""
      }), b = f(false), w = f(false), N = f([]), K = f(""), D = xe(() => N.value.map((S) => ({
        label: S.role,
        value: S.role
      }))), A = async () => {
        try {
          const S = await P.fetch("/admin/user_roles");
          N.value = S;
        } catch (S) {
          console.log(S), l.error(S.message || "error");
        }
      }, I = async () => {
        try {
          g.value = g.value.trim();
          const { results: S, count: R } = await P.fetch(`/admin/users?limit=${y.value}&offset=${(s.value - 1) * y.value}` + (g.value ? `&query=${g.value}` : ""));
          v.value = S, R > 0 && (p.value = R);
        } catch (S) {
          console.log(S), l.error(S.message || "error");
        }
      }, q = async () => {
        if (!c.value) {
          l.error(n("pleaseInput"));
          return;
        }
        try {
          await P.fetch(`/admin/users/${C.value}/reset_password`, {
            method: "POST",
            body: JSON.stringify({
              password: await vt(c.value)
            })
          }), l.success(n("success")), i.value = false;
        } catch (S) {
          console.log(S), l.error(S.message || "error");
        }
      }, W = async () => {
        if (!u.value.email || !u.value.password) {
          l.error(n("pleaseInput"));
          return;
        }
        try {
          await P.fetch("/admin/users", {
            method: "POST",
            body: JSON.stringify({
              email: u.value.email,
              password: await vt(u.value.password)
            })
          }), l.success(n("success")), await I(), L.value = false;
        } catch (S) {
          console.log(S), l.error(S.message || "error");
        }
      }, k = async () => {
        try {
          await P.fetch(`/admin/users/${C.value}`, {
            method: "DELETE"
          }), l.success(n("success")), x.value = false;
        } catch (S) {
          console.log(S), l.error(S.message || "error");
        }
      }, $ = async () => {
        try {
          await P.fetch("/admin/user_roles", {
            method: "POST",
            body: JSON.stringify({
              user_id: C.value,
              role_text: K.value
            })
          }), l.success(n("success")), b.value = false, await I();
        } catch (S) {
          console.log(S), l.error(S.message || "error");
        }
      }, B = [
        {
          title: "ID",
          key: "id"
        },
        {
          title: n("user_email"),
          key: "user_email"
        },
        {
          title: n("role"),
          key: "role_text",
          render(S) {
            return S.role_text ? U(rt, {
              bordered: false,
              type: "info"
            }, {
              default: () => S.role_text
            }) : null;
          }
        },
        {
          title: n("address_count"),
          key: "address_count",
          render(S) {
            return U(O, {
              text: true,
              onClick: () => {
                S.address_count <= 0 || (C.value = S.id, w.value = true);
              }
            }, {
              icon: () => U(He, {
                value: S.address_count,
                "show-zero": true,
                max: 99,
                type: "success"
              }),
              default: () => S.address_count > 0 ? n("userAddressManagement") : ""
            });
          }
        },
        {
          title: n("created_at"),
          key: "created_at"
        },
        {
          title: n("actions"),
          key: "actions",
          render(S) {
            return U("div", [
              U(Mt, {
                mode: "horizontal",
                options: [
                  {
                    label: n("actions"),
                    icon: () => U(Tt),
                    key: "action",
                    children: [
                      {
                        label: () => U(O, {
                          text: true,
                          onClick: () => {
                            C.value = S.id, w.value = true;
                          }
                        }, {
                          default: () => n("userAddressManagement")
                        }),
                        show: S.address_count > 0
                      },
                      {
                        label: () => U(O, {
                          text: true,
                          onClick: () => {
                            C.value = S.id, K.value = S.role_text, b.value = true;
                          }
                        }, {
                          default: () => n("changeRole")
                        })
                      },
                      {
                        label: () => U(O, {
                          text: true,
                          onClick: () => {
                            C.value = S.id, c.value = "", i.value = true;
                          }
                        }, {
                          default: () => n("resetPassword")
                        })
                      },
                      {
                        label: () => U(O, {
                          text: true,
                          onClick: () => {
                            C.value = S.id, u.value.email = "", u.value.password = "", x.value = true;
                          }
                        }, {
                          default: () => n("delete")
                        })
                      }
                    ]
                  }
                ]
              })
            ]);
          }
        }
      ], Y = (S) => {
        var _a2;
        const R = (_a2 = N.value.find((ne) => ne.role === S)) == null ? void 0 : _a2.prefix;
        return R ?? r.value.prefix;
      }, se = (S) => {
        var _a2;
        const R = (_a2 = N.value.find((ne) => ne.role === S)) == null ? void 0 : _a2.domains;
        return R == null || R.length == 0 ? r.value.defaultDomains : R;
      }, _e = xe(() => K.value && !N.value.some((S) => S.role === K.value));
      return Ze([
        s,
        y
      ], async () => {
        await I();
      }), le(async () => {
        await A(), await I();
      }), (S, R) => {
        const ne = pe, he = ge, z = et, ce = Ee, H = Ue, je = re, ye = Ce, we = st, oe = qe;
        return E(), Q("div", ll, [
          e(ce, {
            show: L.value,
            "onUpdate:show": R[2] || (R[2] = (J) => L.value = J),
            preset: "dialog",
            title: a(n)("createUser")
          }, {
            action: t(() => [
              e(a(O), {
                loading: a(d),
                onClick: W,
                size: "small",
                tertiary: "",
                type: "primary"
              }, {
                default: t(() => [
                  m(o(a(n)("createUser")), 1)
                ]),
                _: 1
              }, 8, [
                "loading"
              ])
            ]),
            default: t(() => [
              e(z, null, {
                default: t(() => [
                  e(he, {
                    label: a(n)("email"),
                    required: ""
                  }, {
                    default: t(() => [
                      e(ne, {
                        value: u.value.email,
                        "onUpdate:value": R[0] || (R[0] = (J) => u.value.email = J)
                      }, null, 8, [
                        "value"
                      ])
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ]),
                  e(he, {
                    label: a(n)("password"),
                    required: ""
                  }, {
                    default: t(() => [
                      e(ne, {
                        value: u.value.password,
                        "onUpdate:value": R[1] || (R[1] = (J) => u.value.password = J),
                        type: "password",
                        "show-password-on": "click"
                      }, null, 8, [
                        "value"
                      ])
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, [
            "show",
            "title"
          ]),
          e(ce, {
            show: i.value,
            "onUpdate:show": R[4] || (R[4] = (J) => i.value = J),
            preset: "dialog",
            title: a(n)("resetPassword")
          }, {
            action: t(() => [
              e(a(O), {
                loading: a(d),
                onClick: q,
                size: "small",
                tertiary: "",
                type: "primary"
              }, {
                default: t(() => [
                  m(o(a(n)("resetPassword")), 1)
                ]),
                _: 1
              }, 8, [
                "loading"
              ])
            ]),
            default: t(() => [
              e(he, {
                label: a(n)("password"),
                required: ""
              }, {
                default: t(() => [
                  e(ne, {
                    value: c.value,
                    "onUpdate:value": R[3] || (R[3] = (J) => c.value = J),
                    type: "password",
                    "show-password-on": "click"
                  }, null, 8, [
                    "value"
                  ])
                ]),
                _: 1
              }, 8, [
                "label"
              ])
            ]),
            _: 1
          }, 8, [
            "show",
            "title"
          ]),
          e(ce, {
            show: x.value,
            "onUpdate:show": R[5] || (R[5] = (J) => x.value = J),
            preset: "dialog",
            title: a(n)("deleteUser")
          }, {
            action: t(() => [
              e(a(O), {
                loading: a(d),
                onClick: k,
                size: "small",
                tertiary: "",
                type: "error"
              }, {
                default: t(() => [
                  m(o(a(n)("deleteUser")), 1)
                ]),
                _: 1
              }, 8, [
                "loading"
              ])
            ]),
            default: t(() => [
              M("p", null, o(a(n)("deleteUserTip")), 1)
            ]),
            _: 1
          }, 8, [
            "show",
            "title"
          ]),
          e(ce, {
            show: b.value,
            "onUpdate:show": R[7] || (R[7] = (J) => b.value = J),
            preset: "dialog",
            title: a(n)("changeRole")
          }, {
            action: t(() => [
              e(a(O), {
                loading: a(d),
                onClick: $,
                size: "small",
                tertiary: "",
                type: "primary"
              }, {
                default: t(() => [
                  m(o(a(n)("changeRole")), 1)
                ]),
                _: 1
              }, 8, [
                "loading"
              ])
            ]),
            default: t(() => [
              _e.value ? (E(), X(H, {
                key: 0,
                type: "error",
                bordered: false
              }, {
                default: t(() => [
                  M("span", null, o(a(n)("roleDonotExist")), 1)
                ]),
                _: 1
              })) : Z("", true),
              M("p", null, o(a(n)("prefix") + ": " + Y(K.value)), 1),
              M("p", null, o(a(n)("domains") + ": " + JSON.stringify(se(K.value))), 1),
              e(je, {
                clearable: "",
                value: K.value,
                "onUpdate:value": R[6] || (R[6] = (J) => K.value = J),
                options: D.value
              }, null, 8, [
                "value",
                "options"
              ])
            ]),
            _: 1
          }, 8, [
            "show",
            "title"
          ]),
          e(ce, {
            show: w.value,
            "onUpdate:show": R[8] || (R[8] = (J) => w.value = J),
            preset: "card",
            title: a(n)("userAddressManagement")
          }, {
            default: t(() => [
              e(al, {
                user_id: C.value
              }, null, 8, [
                "user_id"
              ])
            ]),
            _: 1
          }, 8, [
            "show",
            "title"
          ]),
          e(ye, null, {
            default: t(() => [
              e(ne, {
                value: g.value,
                "onUpdate:value": R[9] || (R[9] = (J) => g.value = J),
                onKeydown: Ge(I, [
                  "enter"
                ])
              }, null, 8, [
                "value"
              ]),
              e(a(O), {
                onClick: I,
                type: "primary",
                tertiary: ""
              }, {
                default: t(() => [
                  m(o(a(n)("query")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          M("div", nl, [
            M("div", sl, [
              e(we, {
                page: s.value,
                "onUpdate:page": R[11] || (R[11] = (J) => s.value = J),
                "page-size": y.value,
                "onUpdate:pageSize": R[12] || (R[12] = (J) => y.value = J),
                "item-count": p.value,
                "page-sizes": [
                  20,
                  50,
                  100
                ],
                "show-size-picker": ""
              }, {
                prefix: t(({ itemCount: J }) => [
                  m(o(a(n)("itemCount")) + ": " + o(J), 1)
                ]),
                suffix: t(() => [
                  e(a(O), {
                    onClick: R[10] || (R[10] = (J) => L.value = true),
                    size: "small",
                    tertiary: "",
                    type: "primary",
                    style: {
                      "margin-left": "10px"
                    }
                  }, {
                    default: t(() => [
                      m(o(a(n)("createUser")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, [
                "page",
                "page-size",
                "item-count"
              ])
            ]),
            e(oe, {
              columns: B,
              data: v.value,
              bordered: false,
              embedded: ""
            }, null, 8, [
              "data"
            ])
          ])
        ]);
      };
    }
  };
  rl = ee(ol, [
    [
      "__scopeId",
      "data-v-9bf893ed"
    ]
  ]);
  il = {
    class: "center"
  };
  ul = {
    __name: "UserSettings",
    setup(_) {
      const { loading: d } = ue(), r = ae(), { t: l } = te({
        messages: {
          en: {
            save: "Save",
            successTip: "Save Success",
            enable: "Enable",
            enableUserRegister: "Allow User Register",
            enableMailVerify: "Enable Mail Verify (Send address must be an address in the system with a balance and can send mail normally)",
            verifyMailSender: "Verify Mail Sender",
            enableMailAllowList: "Enable Mail Address Allow List(Manually enterable)",
            manualInputPrompt: "Type and press Enter to add",
            mailAllowList: "Mail Address Allow List",
            maxAddressCount: "Maximum number of email addresses that can be binded",
            emailCheckRegex: "Email Check Regex (e.g. ^[^.]+@.+$ to disallow dots before @)",
            enableEmailCheckRegex: "Enable Email Check Regex"
          },
          zh: {
            save: "\u4FDD\u5B58",
            successTip: "\u4FDD\u5B58\u6210\u529F",
            enable: "\u542F\u7528",
            enableUserRegister: "\u5141\u8BB8\u7528\u6237\u6CE8\u518C",
            enableMailVerify: "\u542F\u7528\u90AE\u4EF6\u9A8C\u8BC1(\u53D1\u9001\u5730\u5740\u5FC5\u987B\u662F\u7CFB\u7EDF\u4E2D\u80FD\u6709\u4F59\u989D\u4E14\u80FD\u6B63\u5E38\u53D1\u9001\u90AE\u4EF6\u7684\u5730\u5740)",
            verifyMailSender: "\u9A8C\u8BC1\u90AE\u4EF6\u53D1\u9001\u5730\u5740",
            enableMailAllowList: "\u542F\u7528\u90AE\u4EF6\u5730\u5740\u767D\u540D\u5355(\u53EF\u624B\u52A8\u8F93\u5165, \u56DE\u8F66\u589E\u52A0)",
            manualInputPrompt: "\u8F93\u5165\u540E\u6309\u56DE\u8F66\u952E\u6DFB\u52A0",
            mailAllowList: "\u90AE\u4EF6\u5730\u5740\u767D\u540D\u5355",
            maxAddressCount: "\u53EF\u7ED1\u5B9A\u6700\u5927\u90AE\u7BB1\u5730\u5740\u6570\u91CF",
            emailCheckRegex: "\u90AE\u7BB1\u6B63\u5219\u6821\u9A8C (\u4F8B\u5982 ^[^.]+@.+$ \u7981\u6B62@\u524D\u9762\u6709.)",
            enableEmailCheckRegex: "\u542F\u7528\u90AE\u7BB1\u6B63\u5219\u6821\u9A8C"
          }
        }
      }), n = [
        "gmail.com",
        "163.com",
        "126.com",
        "qq.com",
        "outlook.com",
        "hotmail.com",
        "icloud.com",
        "yahoo.com",
        "foxmail.com"
      ], v = n.map((g) => ({
        label: g,
        value: g
      })), p = f({
        enable: false,
        enableMailVerify: false,
        verifyMailSender: "",
        enableMailAllowList: false,
        mailAllowList: n,
        maxAddressCount: 5,
        enableEmailCheckRegex: false,
        emailCheckRegex: ""
      }), s = async () => {
        try {
          const g = await P.fetch("/admin/user_settings");
          Object.assign(p.value, g);
        } catch (g) {
          r.error(g.message || "error");
        }
      }, y = async () => {
        try {
          await P.fetch("/admin/user_settings", {
            method: "POST",
            body: JSON.stringify(p.value)
          }), r.success(l("successTip"));
        } catch (g) {
          r.error(g.message || "error");
        }
      };
      return le(async () => {
        await s();
      }), (g, i) => {
        const c = O, x = De, C = Fe, L = ge, u = Ke, b = pe, w = Ce, N = Le, K = re, D = Je, A = et, I = de;
        return E(), Q("div", il, [
          e(I, {
            bordered: false,
            embedded: "",
            style: {
              "max-width": "600px"
            }
          }, {
            default: t(() => [
              e(x, {
                justify: "end"
              }, {
                default: t(() => [
                  e(c, {
                    onClick: y,
                    type: "primary",
                    loading: a(d)
                  }, {
                    default: t(() => [
                      m(o(a(l)("save")), 1)
                    ]),
                    _: 1
                  }, 8, [
                    "loading"
                  ])
                ]),
                _: 1
              }),
              e(A, {
                model: p.value
              }, {
                default: t(() => [
                  e(L, {
                    label: a(l)("enableUserRegister")
                  }, {
                    default: t(() => [
                      e(C, {
                        value: p.value.enable,
                        "onUpdate:value": i[0] || (i[0] = (q) => p.value.enable = q),
                        round: false
                      }, null, 8, [
                        "value"
                      ])
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ]),
                  e(L, {
                    label: a(l)("enableMailVerify")
                  }, {
                    default: t(() => [
                      e(w, null, {
                        default: t(() => [
                          e(u, {
                            checked: p.value.enableMailVerify,
                            "onUpdate:checked": i[1] || (i[1] = (q) => p.value.enableMailVerify = q),
                            style: {
                              width: "20%"
                            }
                          }, {
                            default: t(() => [
                              m(o(a(l)("enable")), 1)
                            ]),
                            _: 1
                          }, 8, [
                            "checked"
                          ]),
                          p.value.enableMailVerify ? (E(), X(b, {
                            key: 0,
                            value: p.value.verifyMailSender,
                            "onUpdate:value": i[2] || (i[2] = (q) => p.value.verifyMailSender = q),
                            style: {
                              width: "80%"
                            },
                            placeholder: a(l)("verifyMailSender")
                          }, null, 8, [
                            "value",
                            "placeholder"
                          ])) : Z("", true)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ]),
                  e(L, {
                    label: a(l)("enableMailAllowList")
                  }, {
                    default: t(() => [
                      e(w, null, {
                        default: t(() => [
                          e(u, {
                            checked: p.value.enableMailAllowList,
                            "onUpdate:checked": i[3] || (i[3] = (q) => p.value.enableMailAllowList = q),
                            style: {
                              width: "20%"
                            }
                          }, {
                            default: t(() => [
                              m(o(a(l)("enable")), 1)
                            ]),
                            _: 1
                          }, 8, [
                            "checked"
                          ]),
                          p.value.enableMailAllowList ? (E(), X(K, {
                            key: 0,
                            value: p.value.mailAllowList,
                            "onUpdate:value": i[4] || (i[4] = (q) => p.value.mailAllowList = q),
                            filterable: "",
                            multiple: "",
                            tag: "",
                            style: {
                              width: "80%"
                            },
                            options: a(v),
                            placeholder: a(l)("mailAllowList")
                          }, {
                            empty: t(() => [
                              e(N, {
                                depth: "3"
                              }, {
                                default: t(() => [
                                  m(o(a(l)("manualInputPrompt")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, [
                            "value",
                            "options",
                            "placeholder"
                          ])) : Z("", true)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ]),
                  e(L, {
                    label: a(l)("maxAddressCount")
                  }, {
                    default: t(() => [
                      e(w, null, {
                        default: t(() => [
                          e(D, {
                            value: p.value.maxAddressCount,
                            "onUpdate:value": i[5] || (i[5] = (q) => p.value.maxAddressCount = q),
                            placeholder: a(l)("maxAddressCount")
                          }, null, 8, [
                            "value",
                            "placeholder"
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ]),
                  e(L, {
                    label: a(l)("enableEmailCheckRegex")
                  }, {
                    default: t(() => [
                      e(w, null, {
                        default: t(() => [
                          e(u, {
                            checked: p.value.enableEmailCheckRegex,
                            "onUpdate:checked": i[6] || (i[6] = (q) => p.value.enableEmailCheckRegex = q),
                            style: {
                              width: "20%"
                            }
                          }, {
                            default: t(() => [
                              m(o(a(l)("enable")), 1)
                            ]),
                            _: 1
                          }, 8, [
                            "checked"
                          ]),
                          p.value.enableEmailCheckRegex ? (E(), X(b, {
                            key: 0,
                            value: p.value.emailCheckRegex,
                            "onUpdate:value": i[7] || (i[7] = (q) => p.value.emailCheckRegex = q),
                            style: {
                              width: "80%"
                            },
                            placeholder: a(l)("emailCheckRegex")
                          }, null, 8, [
                            "value",
                            "placeholder"
                          ])) : Z("", true)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ])
                ]),
                _: 1
              }, 8, [
                "model"
              ])
            ]),
            _: 1
          })
        ]);
      };
    }
  };
  kt = ee(ul, [
    [
      "__scopeId",
      "data-v-609cb7d1"
    ]
  ]);
  dl = [
    "gmail.com",
    "163.com",
    "126.com",
    "qq.com",
    "outlook.com",
    "hotmail.com",
    "icloud.com",
    "yahoo.com",
    "foxmail.com"
  ];
  xt = {
    COMMOM_MAIL: dl
  };
  cl = {
    class: "center"
  };
  pl = [
    "innerHTML"
  ];
  ml = ie({
    __name: "UserOauth2Settings",
    setup(_) {
      const { loading: d } = ue(), r = ae(), { t: l } = te({
        messages: {
          en: {
            save: "Save",
            delete: "Delete",
            successTip: "Save Success",
            enable: "Enable",
            enableMailAllowList: "Enable Mail Address Allow List(Manually enterable)",
            manualInputPrompt: "Type and press Enter to add",
            mailAllowList: "Mail Address Allow List",
            addOauth2: "Add Oauth2",
            name: "Name",
            icon: "Icon (SVG, please ensure trusted source)",
            iconPreview: "Preview",
            oauth2Type: "Oauth2 Type",
            enableEmailFormat: "Enable Email Format",
            userEmailFormat: "Email Regex Pattern",
            userEmailReplace: "Replace Template",
            userEmailFormatTip: "Use regex to transform email. Example: ^(.+)@old\\.com$ with $1@new.com",
            tip: "Third-party login will automatically use the user's email to register an account (the same email will be regarded as the same account), this account is the same as the registered account, and you can also set the password through the forget password"
          },
          zh: {
            save: "\u4FDD\u5B58",
            delete: "\u5220\u9664",
            successTip: "\u4FDD\u5B58\u6210\u529F",
            enable: "\u542F\u7528",
            enableMailAllowList: "\u542F\u7528\u90AE\u4EF6\u5730\u5740\u767D\u540D\u5355(\u53EF\u624B\u52A8\u8F93\u5165, \u56DE\u8F66\u589E\u52A0)",
            manualInputPrompt: "\u8F93\u5165\u540E\u6309\u56DE\u8F66\u952E\u6DFB\u52A0",
            mailAllowList: "\u90AE\u4EF6\u5730\u5740\u767D\u540D\u5355",
            addOauth2: "\u6DFB\u52A0 Oauth2",
            name: "\u540D\u79F0",
            icon: "\u56FE\u6807 (SVG, \u8BF7\u786E\u4FDD\u6765\u6E90\u53EF\u4FE1)",
            iconPreview: "\u9884\u89C8",
            oauth2Type: "Oauth2 \u7C7B\u578B",
            enableEmailFormat: "\u542F\u7528\u90AE\u7BB1\u683C\u5F0F\u8F6C\u6362",
            userEmailFormat: "\u90AE\u7BB1\u6B63\u5219\u8868\u8FBE\u5F0F",
            userEmailReplace: "\u66FF\u6362\u6A21\u677F",
            userEmailFormatTip: "\u4F7F\u7528\u6B63\u5219\u8F6C\u6362\u90AE\u7BB1\u3002\u793A\u4F8B: ^(.+)@old\\.com$ \u914D\u5408 $1@new.com",
            tip: "\u7B2C\u4E09\u65B9\u767B\u5F55\u4F1A\u81EA\u52A8\u4F7F\u7528\u7528\u6237\u90AE\u7BB1\u6CE8\u518C\u8D26\u53F7(\u90AE\u7BB1\u76F8\u540C\u5C06\u89C6\u4E3A\u540C\u4E00\u8D26\u53F7), \u6B64\u8D26\u53F7\u548C\u6CE8\u518C\u7684\u8D26\u53F7\u76F8\u540C, \u4E5F\u53EF\u4EE5\u901A\u8FC7\u5FD8\u8BB0\u5BC6\u7801\u8BBE\u7F6E\u5BC6\u7801"
          }
        }
      }), n = {
        github: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>',
        linuxdo: '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"><g><path d="m7.44,0s.09,0,.13,0c.09,0,.19,0,.28,0,.14,0,.29,0,.43,0,.09,0,.18,0,.27,0q.12,0,.25,0t.26.08c.15.03.29.06.44.08,1.97.38,3.78,1.47,4.95,3.11.04.06.09.12.13.18.67.96,1.15,2.11,1.3,3.28q0,.19.09.26c0,.15,0,.29,0,.44,0,.04,0,.09,0,.13,0,.09,0,.19,0,.28,0,.14,0,.29,0,.43,0,.09,0,.18,0,.27,0,.08,0,.17,0,.25q0,.19-.08.26c-.03.15-.06.29-.08.44-.38,1.97-1.47,3.78-3.11,4.95-.06.04-.12.09-.18.13-.96.67-2.11,1.15-3.28,1.3q-.19,0-.26.09c-.15,0-.29,0-.44,0-.04,0-.09,0-.13,0-.09,0-.19,0-.28,0-.14,0-.29,0-.43,0-.09,0-.18,0-.27,0-.08,0-.17,0-.25,0q-.19,0-.26-.08c-.15-.03-.29-.06-.44-.08-1.97-.38-3.78-1.47-4.95-3.11q-.07-.09-.13-.18c-.67-.96-1.15-2.11-1.3-3.28q0-.19-.09-.26c0-.15,0-.29,0-.44,0-.04,0-.09,0-.13,0-.09,0-.19,0-.28,0-.14,0-.29,0-.43,0-.09,0-.18,0-.27,0-.08,0-.17,0-.25q0-.19.08-.26c.03-.15.06-.29.08-.44.38-1.97,1.47-3.78,3.11-4.95.06-.04.12-.09.18-.13C4.42.73,5.57.26,6.74.1,7,.07,7.15,0,7.44,0Z" fill="#EFEFEF"/><path d="m1.27,11.33h13.45c-.94,1.89-2.51,3.21-4.51,3.88-1.99.59-3.96.37-5.8-.57-1.25-.7-2.67-1.9-3.14-3.3Z" fill="#FEB005"/><path d="m12.54,1.99c.87.7,1.82,1.59,2.18,2.68H1.27c.87-1.74,2.33-3.13,4.2-3.78,2.44-.79,5-.47,7.07,1.1Z" fill="#1D1D1F"/></g></svg>',
        authentik: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v4.7c0 4.83-3.23 9.36-7 10.57-3.77-1.21-7-5.74-7-10.57V6.3l7-3.12zM11 7v6h2V7h-2zm0 8v2h2v-2h-2z"/></svg>'
      }, v = xt.COMMOM_MAIL.map((L) => ({
        label: L,
        value: L
      })), p = f([]), s = f(false), y = f(""), g = f("custom"), i = async () => {
        try {
          const L = await P.fetch("/admin/user_oauth2_settings");
          Object.assign(p.value, L);
        } catch (L) {
          r.error(L.message || "error");
        }
      }, c = async () => {
        try {
          await P.fetch("/admin/user_oauth2_settings", {
            method: "POST",
            body: JSON.stringify(p.value)
          }), r.success(l("successTip"));
        } catch (L) {
          r.error(L.message || "error");
        }
      }, x = () => {
        const u = {
          github: {
            authorizationURL: "https://github.com/login/oauth/authorize",
            accessTokenURL: "https://github.com/login/oauth/access_token",
            accessTokenFormat: "json",
            userInfoURL: "https://api.github.com/user",
            userEmailKey: "email",
            scope: "user:email",
            icon: n.github
          },
          linuxdo: {
            authorizationURL: "https://connect.linux.do/oauth2/authorize",
            accessTokenURL: "https://connect.linux.do/oauth2/token",
            accessTokenFormat: "urlencoded",
            userInfoURL: "https://connect.linux.do/api/user",
            userEmailKey: "id",
            scope: "user",
            enableEmailFormat: true,
            userEmailFormat: "^(.+)$",
            userEmailReplace: "linux_do_$1@oauth.linux.do",
            icon: n.linuxdo
          },
          authentik: {
            authorizationURL: "https://youdomain/application/o/authorize/",
            accessTokenURL: "https://youdomain/application/o/token/",
            accessTokenFormat: "urlencoded",
            userInfoURL: "https://youdomain/application/o/userinfo/",
            userEmailKey: "email",
            scope: "email openid",
            icon: n.authentik
          },
          custom: {}
        }[g.value] || {};
        p.value.push({
          name: y.value,
          icon: "",
          clientID: "",
          clientSecret: "",
          authorizationURL: "",
          accessTokenURL: "",
          accessTokenFormat: "",
          userInfoURL: "",
          userEmailKey: "",
          redirectURL: `${window.location.origin}/user/oauth2/callback`,
          logoutURL: "",
          scope: "",
          enableEmailFormat: false,
          userEmailFormat: "",
          userEmailReplace: "",
          enableMailAllowList: false,
          mailAllowList: xt.COMMOM_MAIL,
          ...u
        }), y.value = "", s.value = false;
      }, C = [
        {
          label: "json",
          value: "json"
        },
        {
          label: "urlencoded",
          value: "urlencoded"
        }
      ];
      return le(async () => {
        await i();
      }), (L, u) => {
        const b = pe, w = ge, N = na, K = Dt, D = et, A = O, I = Ee, q = Ue, W = De, k = ut, $ = Ye, B = re, Y = Ke, se = sa, _e = Le, S = Ce, R = Et, ne = Pt, he = de;
        return E(), Q("div", cl, [
          e(I, {
            show: s.value,
            "onUpdate:show": u[2] || (u[2] = (z) => s.value = z),
            preset: "dialog",
            title: a(l)("addOauth2")
          }, {
            action: t(() => [
              e(A, {
                loading: a(d),
                onClick: x,
                size: "small",
                tertiary: "",
                type: "primary"
              }, {
                default: t(() => [
                  m(o(a(l)("addOauth2")), 1)
                ]),
                _: 1
              }, 8, [
                "loading"
              ])
            ]),
            default: t(() => [
              e(D, null, {
                default: t(() => [
                  e(w, {
                    label: a(l)("name"),
                    required: ""
                  }, {
                    default: t(() => [
                      e(b, {
                        value: y.value,
                        "onUpdate:value": u[0] || (u[0] = (z) => y.value = z)
                      }, null, 8, [
                        "value"
                      ])
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ]),
                  e(w, {
                    label: a(l)("oauth2Type"),
                    required: ""
                  }, {
                    default: t(() => [
                      e(K, {
                        value: g.value,
                        "onUpdate:value": u[1] || (u[1] = (z) => g.value = z)
                      }, {
                        default: t(() => [
                          e(N, {
                            value: "github",
                            label: "Github"
                          }),
                          e(N, {
                            value: "linuxdo",
                            label: "Linux Do"
                          }),
                          e(N, {
                            value: "authentik",
                            label: "Authentik"
                          }),
                          e(N, {
                            value: "custom",
                            label: "Custom"
                          })
                        ]),
                        _: 1
                      }, 8, [
                        "value"
                      ])
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, [
            "show",
            "title"
          ]),
          e(he, {
            bordered: false,
            embedded: "",
            style: {
              "max-width": "600px"
            }
          }, {
            default: t(() => [
              e(q, {
                "show-icon": false,
                bordered: false,
                type: "warning",
                closable: "",
                style: {
                  "margin-bottom": "10px"
                }
              }, {
                default: t(() => [
                  m(o(a(l)("tip")), 1)
                ]),
                _: 1
              }),
              e(W, {
                justify: "end"
              }, {
                default: t(() => [
                  e(A, {
                    onClick: u[3] || (u[3] = (z) => s.value = true),
                    secondary: "",
                    loading: a(d)
                  }, {
                    default: t(() => [
                      m(o(a(l)("addOauth2")), 1)
                    ]),
                    _: 1
                  }, 8, [
                    "loading"
                  ]),
                  e(A, {
                    onClick: c,
                    type: "primary",
                    loading: a(d)
                  }, {
                    default: t(() => [
                      m(o(a(l)("save")), 1)
                    ]),
                    _: 1
                  }, 8, [
                    "loading"
                  ])
                ]),
                _: 1
              }),
              e(k),
              e(ne, {
                "default-expanded-names": "1",
                accordion: "",
                "trigger-areas": [
                  "main",
                  "arrow"
                ]
              }, {
                default: t(() => [
                  (E(true), Q(it, null, Rt(p.value, (z, ce) => (E(), X(R, {
                    key: ce,
                    title: z.name
                  }, {
                    "header-extra": t(() => [
                      e($, {
                        onPositiveClick: (H) => p.value.splice(ce, 1)
                      }, {
                        trigger: t(() => [
                          e(A, {
                            tertiary: "",
                            type: "error"
                          }, {
                            default: t(() => [
                              m(o(a(l)("delete")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        default: t(() => [
                          m(" " + o(a(l)("delete")), 1)
                        ]),
                        _: 1
                      }, 8, [
                        "onPositiveClick"
                      ])
                    ]),
                    default: t(() => [
                      e(D, {
                        model: z
                      }, {
                        default: t(() => [
                          e(w, {
                            label: a(l)("name"),
                            required: ""
                          }, {
                            default: t(() => [
                              e(b, {
                                value: z.name,
                                "onUpdate:value": (H) => z.name = H
                              }, null, 8, [
                                "value",
                                "onUpdate:value"
                              ])
                            ]),
                            _: 2
                          }, 1032, [
                            "label"
                          ]),
                          e(w, {
                            label: a(l)("icon")
                          }, {
                            default: t(() => [
                              e(b, {
                                value: z.icon,
                                "onUpdate:value": (H) => z.icon = H,
                                type: "textarea",
                                autosize: {
                                  minRows: 2,
                                  maxRows: 5
                                },
                                style: {
                                  width: "100%"
                                }
                              }, null, 8, [
                                "value",
                                "onUpdate:value"
                              ])
                            ]),
                            _: 2
                          }, 1032, [
                            "label"
                          ]),
                          z.icon ? (E(), X(w, {
                            key: 0,
                            label: a(l)("iconPreview")
                          }, {
                            default: t(() => [
                              M("span", {
                                class: "oauth2-icon-preview",
                                innerHTML: z.icon
                              }, null, 8, pl)
                            ]),
                            _: 2
                          }, 1032, [
                            "label"
                          ])) : Z("", true),
                          e(w, {
                            label: "Client ID",
                            required: ""
                          }, {
                            default: t(() => [
                              e(b, {
                                value: z.clientID,
                                "onUpdate:value": (H) => z.clientID = H
                              }, null, 8, [
                                "value",
                                "onUpdate:value"
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          e(w, {
                            label: "Client Secret",
                            required: ""
                          }, {
                            default: t(() => [
                              e(b, {
                                value: z.clientSecret,
                                "onUpdate:value": (H) => z.clientSecret = H
                              }, null, 8, [
                                "value",
                                "onUpdate:value"
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          e(w, {
                            label: "Authorization URL",
                            required: ""
                          }, {
                            default: t(() => [
                              e(b, {
                                value: z.authorizationURL,
                                "onUpdate:value": (H) => z.authorizationURL = H
                              }, null, 8, [
                                "value",
                                "onUpdate:value"
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          e(w, {
                            label: "Access Token URL",
                            required: ""
                          }, {
                            default: t(() => [
                              e(b, {
                                value: z.accessTokenURL,
                                "onUpdate:value": (H) => z.accessTokenURL = H
                              }, null, 8, [
                                "value",
                                "onUpdate:value"
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          e(w, {
                            label: "Access Token Params Format",
                            required: ""
                          }, {
                            default: t(() => [
                              e(B, {
                                value: z.accessTokenFormat,
                                "onUpdate:value": (H) => z.accessTokenFormat = H,
                                options: C
                              }, null, 8, [
                                "value",
                                "onUpdate:value"
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          e(w, {
                            label: "User Info URL",
                            required: ""
                          }, {
                            default: t(() => [
                              e(b, {
                                value: z.userInfoURL,
                                "onUpdate:value": (H) => z.userInfoURL = H
                              }, null, 8, [
                                "value",
                                "onUpdate:value"
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          e(w, {
                            label: "User Email Key (Support JSONPATH like $[0].email)",
                            required: ""
                          }, {
                            default: t(() => [
                              e(b, {
                                value: z.userEmailKey,
                                "onUpdate:value": (H) => z.userEmailKey = H
                              }, null, 8, [
                                "value",
                                "onUpdate:value"
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          e(w, {
                            label: a(l)("enableEmailFormat")
                          }, {
                            default: t(() => [
                              e(Y, {
                                checked: z.enableEmailFormat,
                                "onUpdate:checked": (H) => z.enableEmailFormat = H
                              }, {
                                default: t(() => [
                                  m(o(a(l)("enable")), 1)
                                ]),
                                _: 1
                              }, 8, [
                                "checked",
                                "onUpdate:checked"
                              ])
                            ]),
                            _: 2
                          }, 1032, [
                            "label"
                          ]),
                          z.enableEmailFormat ? (E(), X(w, {
                            key: 1,
                            label: a(l)("userEmailFormat")
                          }, {
                            default: t(() => [
                              e(se, {
                                trigger: "hover"
                              }, {
                                trigger: t(() => [
                                  e(b, {
                                    value: z.userEmailFormat,
                                    "onUpdate:value": (H) => z.userEmailFormat = H,
                                    placeholder: "^(.+)@old\\.com$"
                                  }, null, 8, [
                                    "value",
                                    "onUpdate:value"
                                  ])
                                ]),
                                default: t(() => [
                                  m(" " + o(a(l)("userEmailFormatTip")), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, [
                            "label"
                          ])) : Z("", true),
                          z.enableEmailFormat ? (E(), X(w, {
                            key: 2,
                            label: a(l)("userEmailReplace")
                          }, {
                            default: t(() => [
                              e(se, {
                                trigger: "hover"
                              }, {
                                trigger: t(() => [
                                  e(b, {
                                    value: z.userEmailReplace,
                                    "onUpdate:value": (H) => z.userEmailReplace = H,
                                    placeholder: "$1@new.com"
                                  }, null, 8, [
                                    "value",
                                    "onUpdate:value"
                                  ])
                                ]),
                                default: t(() => [
                                  m(" " + o(a(l)("userEmailFormatTip")), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, [
                            "label"
                          ])) : Z("", true),
                          e(w, {
                            label: "Redirect URL",
                            required: ""
                          }, {
                            default: t(() => [
                              e(b, {
                                value: z.redirectURL,
                                "onUpdate:value": (H) => z.redirectURL = H
                              }, null, 8, [
                                "value",
                                "onUpdate:value"
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          e(w, {
                            label: "Scope",
                            required: ""
                          }, {
                            default: t(() => [
                              e(b, {
                                value: z.scope,
                                "onUpdate:value": (H) => z.scope = H
                              }, null, 8, [
                                "value",
                                "onUpdate:value"
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          e(w, {
                            label: a(l)("enableMailAllowList")
                          }, {
                            default: t(() => [
                              e(S, null, {
                                default: t(() => [
                                  e(Y, {
                                    checked: z.enableMailAllowList,
                                    "onUpdate:checked": (H) => z.enableMailAllowList = H,
                                    style: {
                                      width: "20%"
                                    }
                                  }, {
                                    default: t(() => [
                                      m(o(a(l)("enable")), 1)
                                    ]),
                                    _: 1
                                  }, 8, [
                                    "checked",
                                    "onUpdate:checked"
                                  ]),
                                  z.enableMailAllowList ? (E(), X(B, {
                                    key: 0,
                                    value: z.mailAllowList,
                                    "onUpdate:value": (H) => z.mailAllowList = H,
                                    filterable: "",
                                    multiple: "",
                                    tag: "",
                                    style: {
                                      width: "80%"
                                    },
                                    options: a(v),
                                    placeholder: a(l)("mailAllowList")
                                  }, {
                                    empty: t(() => [
                                      e(_e, {
                                        depth: "3"
                                      }, {
                                        default: t(() => [
                                          m(o(a(l)("manualInputPrompt")), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, [
                                    "value",
                                    "onUpdate:value",
                                    "options",
                                    "placeholder"
                                  ])) : Z("", true)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, [
                            "label"
                          ])
                        ]),
                        _: 2
                      }, 1032, [
                        "model"
                      ])
                    ]),
                    _: 2
                  }, 1032, [
                    "title"
                  ]))), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]);
      };
    }
  });
  _l = ee(ml, [
    [
      "__scopeId",
      "data-v-a62aa937"
    ]
  ]);
  fl = {
    style: {
      "margin-top": "10px"
    }
  };
  vl = {
    key: 1
  };
  bl = {
    __name: "RoleAddressConfig",
    setup(_) {
      const { loading: d } = ue(), r = ae(), { t: l } = te({
        messages: {
          en: {
            role: "Role",
            maxAddressCount: "Max Address Count",
            save: "Save",
            successTip: "Success",
            noRolesAvailable: "No roles available in system config",
            roleConfigDesc: "Configure maximum address count for each user role. Role-based limits take priority over global settings.",
            notConfigured: "Not Configured (Use Global Settings)"
          },
          zh: {
            role: "\u89D2\u8272",
            maxAddressCount: "\u6700\u5927\u5730\u5740\u6570\u91CF",
            save: "\u4FDD\u5B58",
            successTip: "\u6210\u529F",
            noRolesAvailable: "\u7CFB\u7EDF\u914D\u7F6E\u4E2D\u6CA1\u6709\u53EF\u7528\u7684\u89D2\u8272",
            roleConfigDesc: "\u4E3A\u6BCF\u4E2A\u7528\u6237\u89D2\u8272\u914D\u7F6E\u6700\u5927\u5730\u5740\u6570\u91CF\u3002\u89D2\u8272\u914D\u7F6E\u4F18\u5148\u4E8E\u5168\u5C40\u8BBE\u7F6E\u3002",
            notConfigured: "\u672A\u914D\u7F6E\uFF08\u4F7F\u7528\u5168\u5C40\u8BBE\u7F6E\uFF09"
          }
        }
      }), n = f([]), v = f([]), p = async () => {
        try {
          const i = await P.fetch("/admin/user_roles");
          n.value = i;
        } catch (i) {
          console.log(i), r.error(i.message || "error");
        }
      }, s = async () => {
        try {
          const { configs: i } = await P.fetch("/admin/role_address_config");
          v.value = n.value.map((c) => {
            var _a2;
            return {
              role: c.role,
              max_address_count: ((_a2 = i[c.role]) == null ? void 0 : _a2.maxAddressCount) ?? null
            };
          });
        } catch (i) {
          console.log(i), r.error(i.message || "error");
        }
      }, y = async () => {
        try {
          const i = {};
          v.value.forEach((c) => {
            c.max_address_count !== null && c.max_address_count !== void 0 && (i[c.role] = {
              maxAddressCount: c.max_address_count
            });
          }), await P.fetch("/admin/role_address_config", {
            method: "POST",
            body: JSON.stringify({
              configs: i
            })
          }), r.success(l("successTip")), await s();
        } catch (i) {
          console.log(i), r.error(i.message || "error");
        }
      }, g = [
        {
          title: l("role"),
          key: "role",
          width: 200,
          render(i) {
            return U(rt, {
              type: "info",
              bordered: false
            }, {
              default: () => i.role
            });
          }
        },
        {
          title: l("maxAddressCount"),
          key: "max_address_count",
          render(i) {
            return U(Je, {
              value: i.max_address_count,
              min: 0,
              max: 999,
              clearable: true,
              placeholder: l("notConfigured"),
              style: "width: 200px;",
              onUpdateValue: (c) => {
                i.max_address_count = c;
              }
            });
          }
        }
      ];
      return le(async () => {
        await p(), await s();
      }), (i, c) => {
        const x = Ue, C = qe;
        return E(), Q("div", fl, [
          e(x, {
            type: "info",
            bordered: false,
            style: {
              "margin-bottom": "20px"
            }
          }, {
            default: t(() => [
              m(o(a(l)("roleConfigDesc")), 1)
            ]),
            _: 1
          }),
          n.value.length === 0 ? (E(), X(x, {
            key: 0,
            type: "warning",
            bordered: false
          }, {
            default: t(() => [
              m(o(a(l)("noRolesAvailable")), 1)
            ]),
            _: 1
          })) : (E(), Q("div", vl, [
            e(a(Ve), {
              justify: "end",
              style: {
                "margin-bottom": "12px"
              }
            }, {
              default: t(() => [
                e(a(O), {
                  loading: a(d),
                  onClick: y,
                  type: "primary"
                }, {
                  default: t(() => [
                    m(o(a(l)("save")), 1)
                  ]),
                  _: 1
                }, 8, [
                  "loading"
                ])
              ]),
              _: 1
            }),
            e(C, {
              columns: g,
              data: v.value,
              bordered: false,
              embedded: ""
            }, null, 8, [
              "data"
            ])
          ]))
        ]);
      };
    }
  };
  gl = ee(bl, [
    [
      "__scopeId",
      "data-v-68eee4b7"
    ]
  ]);
  hl = {
    style: {
      "margin-top": "10px"
    }
  };
  yl = {
    __name: "Mails",
    setup(_) {
      const { adminMailTabAddress: d } = ue(), { t: r } = te({
        messages: {
          en: {
            addressQueryTip: "Leave blank to query all addresses",
            query: "Query"
          },
          zh: {
            addressQueryTip: "\u7559\u7A7A\u67E5\u8BE2\u6240\u6709\u5730\u5740",
            query: "\u67E5\u8BE2"
          }
        }
      }), l = f(""), n = () => {
        d.value = d.value.trim(), l.value = Date.now();
      }, v = async (s, y) => await P.fetch(`/admin/mails?limit=${s}&offset=${y}` + (d.value ? `&address=${d.value}` : "")), p = async (s) => {
        await P.fetch(`/admin/mails/${s}`, {
          method: "DELETE"
        });
      };
      return (s, y) => {
        const g = pe, i = O, c = Ce;
        return E(), Q("div", hl, [
          e(c, null, {
            default: t(() => [
              e(g, {
                value: a(d),
                "onUpdate:value": y[0] || (y[0] = (x) => ot(d) ? d.value = x : null),
                placeholder: a(r)("addressQueryTip"),
                onKeydown: Ge(n, [
                  "enter"
                ]),
                clearable: ""
              }, null, 8, [
                "value",
                "placeholder"
              ]),
              e(i, {
                onClick: n,
                type: "primary",
                tertiary: ""
              }, {
                default: t(() => [
                  m(o(a(r)("query")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          y[1] || (y[1] = M("div", {
            style: {
              "margin-top": "10px"
            }
          }, null, -1)),
          (E(), X($t, {
            key: l.value,
            enableUserDeleteEmail: true,
            fetchMailData: v,
            deleteMail: p,
            showFilterInput: true
          }))
        ]);
      };
    }
  };
  wl = {
    style: {
      "margin-top": "10px"
    }
  };
  kl = {
    __name: "MailsUnknow",
    setup(_) {
      const d = async (l, n) => await P.fetch(`/admin/mails_unknow?limit=${l}&offset=${n}`), r = async (l) => {
        await P.fetch(`/admin/mails/${l}`, {
          method: "DELETE"
        });
      };
      return (l, n) => (E(), Q("div", wl, [
        e($t, {
          enableUserDeleteEmail: true,
          fetchMailData: d,
          deleteMail: r
        })
      ]));
    }
  };
  xl = {
    class: "center"
  };
  Cl = {
    __name: "Maintenance",
    setup(_) {
      const { loading: d } = ue(), r = ae(), l = f({
        enableMailsAutoCleanup: false,
        cleanMailsDays: 30,
        enableUnknowMailsAutoCleanup: false,
        cleanUnknowMailsDays: 30,
        enableSendBoxAutoCleanup: false,
        cleanSendBoxDays: 30,
        enableAddressAutoCleanup: false,
        cleanAddressDays: 30,
        enableInactiveAddressAutoCleanup: false,
        cleanInactiveAddressDays: 30,
        enableUnboundAddressAutoCleanup: false,
        cleanUnboundAddressDays: 30,
        enableEmptyAddressAutoCleanup: false,
        cleanEmptyAddressDays: 30,
        customSqlCleanupList: []
      }), { t: n } = te({
        messages: {
          en: {
            tip: "Please input the days",
            mailBoxLabel: "Cleanup the inbox before n days",
            mailUnknowLabel: "Cleanup the unknow mail before n days",
            sendBoxLabel: "Cleanup the sendbox before n days",
            addressCreateLabel: "Cleanup the address created before n days",
            inactiveAddressLabel: "Cleanup the inactive address before n days",
            unboundAddressLabel: "Cleanup the unbound address before n days",
            emptyAddressLabel: "Cleanup the empty address before n days",
            cleanupNow: "Cleanup now",
            autoCleanup: "Auto cleanup",
            cleanupSuccess: "Cleanup success",
            saveSuccess: "Save success",
            save: "Save",
            cronTip: "Enable cron cleanup, need to configure [crons] in worker, please refer to the document, setting 0 days means clear all",
            basicCleanup: "Basic Cleanup",
            customSqlCleanup: "Custom SQL Cleanup",
            customSqlTip: "Add custom DELETE SQL statements for scheduled cleanup. Only single DELETE statement is allowed per entry.",
            addCustomSql: "Add Custom SQL",
            sqlName: "Name",
            sqlStatement: "SQL Statement (DELETE only)",
            sqlNamePlaceholder: "e.g. Clean old logs",
            sqlPlaceholder: "e.g. DELETE FROM raw_mails WHERE source GLOB '*{'@'}example.com' AND created_at < datetime('now', '-3 day')",
            deleteCustomSql: "Delete"
          },
          zh: {
            tip: "\u8BF7\u8F93\u5165\u5929\u6570",
            mailBoxLabel: "\u6E05\u7406 n \u5929\u524D\u7684\u6536\u4EF6\u7BB1",
            mailUnknowLabel: "\u6E05\u7406 n \u5929\u524D\u7684\u65E0\u6536\u4EF6\u4EBA\u90AE\u4EF6",
            sendBoxLabel: "\u6E05\u7406 n \u5929\u524D\u7684\u53D1\u4EF6\u7BB1",
            addressCreateLabel: "\u6E05\u7406 n \u5929\u524D\u521B\u5EFA\u7684\u5730\u5740",
            inactiveAddressLabel: "\u6E05\u7406 n \u5929\u524D\u7684\u672A\u6D3B\u8DC3\u5730\u5740",
            unboundAddressLabel: "\u6E05\u7406 n \u5929\u524D\u7684\u672A\u7ED1\u5B9A\u7528\u6237\u5730\u5740",
            emptyAddressLabel: "\u6E05\u7406 n \u5929\u524D\u7A7A\u90AE\u4EF6\u7684\u90AE\u7BB1\u5730\u5740",
            autoCleanup: "\u81EA\u52A8\u6E05\u7406",
            cleanupSuccess: "\u6E05\u7406\u6210\u529F",
            saveSuccess: "\u4FDD\u5B58\u6210\u529F",
            cleanupNow: "\u7ACB\u5373\u6E05\u7406",
            save: "\u4FDD\u5B58",
            cronTip: "\u542F\u7528\u5B9A\u65F6\u6E05\u7406, \u9700\u5728 worker \u914D\u7F6E [crons] \u53C2\u6570, \u8BF7\u53C2\u8003\u6587\u6863, \u914D\u7F6E\u4E3A 0 \u5929\u8868\u793A\u5168\u90E8\u6E05\u7A7A",
            basicCleanup: "\u57FA\u7840\u6E05\u7406",
            customSqlCleanup: "\u81EA\u5B9A\u4E49 SQL \u6E05\u7406",
            customSqlTip: "\u6DFB\u52A0\u81EA\u5B9A\u4E49 DELETE SQL \u8BED\u53E5\u8FDB\u884C\u5B9A\u65F6\u6E05\u7406\u3002\u6BCF\u6761\u8BB0\u5F55\u4EC5\u5141\u8BB8\u5355\u6761 DELETE \u8BED\u53E5\u3002",
            addCustomSql: "\u6DFB\u52A0\u81EA\u5B9A\u4E49 SQL",
            sqlName: "\u540D\u79F0",
            sqlStatement: "SQL \u8BED\u53E5 (\u4EC5\u9650 DELETE)",
            sqlNamePlaceholder: "\u4F8B\u5982: \u6E05\u7406\u65E7\u65E5\u5FD7",
            sqlPlaceholder: "\u4F8B\u5982: DELETE FROM raw_mails WHERE source GLOB '*{'@'}example.com' AND created_at < datetime('now', '-3 day')",
            deleteCustomSql: "\u5220\u9664"
          }
        }
      }), v = async (i, c) => {
        try {
          await P.fetch("/admin/cleanup", {
            method: "POST",
            body: JSON.stringify({
              cleanType: i,
              cleanDays: c
            })
          }), r.success(n("cleanupSuccess"));
        } catch (x) {
          r.error(x.message || "error");
        }
      }, p = () => {
        l.value.customSqlCleanupList || (l.value.customSqlCleanupList = []), l.value.customSqlCleanupList.push({
          id: Date.now().toString(),
          name: "",
          sql: "",
          enabled: false
        });
      }, s = (i) => {
        l.value.customSqlCleanupList.splice(i, 1);
      }, y = async () => {
        try {
          const i = await P.fetch("/admin/auto_cleanup");
          i && Object.assign(l.value, i), l.value.customSqlCleanupList || (l.value.customSqlCleanupList = []);
        } catch (i) {
          r.error(i.message || "error");
        }
      }, g = async () => {
        try {
          await P.fetch("/admin/auto_cleanup", {
            method: "POST",
            body: JSON.stringify(l.value)
          }), r.success(n("saveSuccess"));
        } catch (i) {
          r.error(i.message || "error");
        }
      };
      return le(async () => {
        await y();
      }), (i, c) => {
        const x = Ue, C = O, L = De, u = Ke, b = Je, w = It, N = ge, K = et, D = zt, A = pe, I = Ve, q = de, W = Bt;
        return E(), Q("div", xl, [
          e(q, {
            bordered: false,
            embedded: ""
          }, {
            default: t(() => [
              e(x, {
                "show-icon": false,
                bordered: false,
                type: "warning"
              }, {
                default: t(() => [
                  M("span", null, o(a(n)("cronTip")), 1)
                ]),
                _: 1
              }),
              e(L, {
                justify: "end"
              }, {
                default: t(() => [
                  e(C, {
                    onClick: g,
                    type: "primary",
                    loading: a(d)
                  }, {
                    default: t(() => [
                      m(o(a(n)("save")), 1)
                    ]),
                    _: 1
                  }, 8, [
                    "loading"
                  ])
                ]),
                _: 1
              }),
              e(W, {
                type: "segment",
                style: {
                  "margin-top": "16px"
                }
              }, {
                default: t(() => [
                  e(D, {
                    name: "basic",
                    tab: a(n)("basicCleanup")
                  }, {
                    default: t(() => [
                      e(K, {
                        model: l.value
                      }, {
                        default: t(() => [
                          e(N, {
                            label: a(n)("mailBoxLabel")
                          }, {
                            default: t(() => [
                              e(u, {
                                checked: l.value.enableMailsAutoCleanup,
                                "onUpdate:checked": c[0] || (c[0] = (k) => l.value.enableMailsAutoCleanup = k)
                              }, {
                                default: t(() => [
                                  m(o(a(n)("autoCleanup")), 1)
                                ]),
                                _: 1
                              }, 8, [
                                "checked"
                              ]),
                              e(b, {
                                value: l.value.cleanMailsDays,
                                "onUpdate:value": c[1] || (c[1] = (k) => l.value.cleanMailsDays = k),
                                placeholder: a(n)("tip")
                              }, null, 8, [
                                "value",
                                "placeholder"
                              ]),
                              e(C, {
                                onClick: c[2] || (c[2] = (k) => v("mails", l.value.cleanMailsDays))
                              }, {
                                icon: t(() => [
                                  e(w, {
                                    component: a(Pe)
                                  }, null, 8, [
                                    "component"
                                  ])
                                ]),
                                default: t(() => [
                                  m(" " + o(a(n)("cleanupNow")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, [
                            "label"
                          ]),
                          e(N, {
                            label: a(n)("mailUnknowLabel")
                          }, {
                            default: t(() => [
                              e(u, {
                                checked: l.value.enableUnknowMailsAutoCleanup,
                                "onUpdate:checked": c[3] || (c[3] = (k) => l.value.enableUnknowMailsAutoCleanup = k)
                              }, {
                                default: t(() => [
                                  m(o(a(n)("autoCleanup")), 1)
                                ]),
                                _: 1
                              }, 8, [
                                "checked"
                              ]),
                              e(b, {
                                value: l.value.cleanUnknowMailsDays,
                                "onUpdate:value": c[4] || (c[4] = (k) => l.value.cleanUnknowMailsDays = k),
                                placeholder: a(n)("tip")
                              }, null, 8, [
                                "value",
                                "placeholder"
                              ]),
                              e(C, {
                                onClick: c[5] || (c[5] = (k) => v("mails_unknow", l.value.cleanUnknowMailsDays))
                              }, {
                                icon: t(() => [
                                  e(w, {
                                    component: a(Pe)
                                  }, null, 8, [
                                    "component"
                                  ])
                                ]),
                                default: t(() => [
                                  m(" " + o(a(n)("cleanupNow")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, [
                            "label"
                          ]),
                          e(N, {
                            label: a(n)("sendBoxLabel")
                          }, {
                            default: t(() => [
                              e(u, {
                                checked: l.value.enableSendBoxAutoCleanup,
                                "onUpdate:checked": c[6] || (c[6] = (k) => l.value.enableSendBoxAutoCleanup = k)
                              }, {
                                default: t(() => [
                                  m(o(a(n)("autoCleanup")), 1)
                                ]),
                                _: 1
                              }, 8, [
                                "checked"
                              ]),
                              e(b, {
                                value: l.value.cleanSendBoxDays,
                                "onUpdate:value": c[7] || (c[7] = (k) => l.value.cleanSendBoxDays = k),
                                placeholder: a(n)("tip")
                              }, null, 8, [
                                "value",
                                "placeholder"
                              ]),
                              e(C, {
                                onClick: c[8] || (c[8] = (k) => v("sendbox", l.value.cleanSendBoxDays))
                              }, {
                                icon: t(() => [
                                  e(w, {
                                    component: a(Pe)
                                  }, null, 8, [
                                    "component"
                                  ])
                                ]),
                                default: t(() => [
                                  m(" " + o(a(n)("cleanupNow")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, [
                            "label"
                          ]),
                          e(N, {
                            label: a(n)("addressCreateLabel")
                          }, {
                            default: t(() => [
                              e(u, {
                                checked: l.value.enableAddressAutoCleanup,
                                "onUpdate:checked": c[9] || (c[9] = (k) => l.value.enableAddressAutoCleanup = k)
                              }, {
                                default: t(() => [
                                  m(o(a(n)("autoCleanup")), 1)
                                ]),
                                _: 1
                              }, 8, [
                                "checked"
                              ]),
                              e(b, {
                                value: l.value.cleanAddressDays,
                                "onUpdate:value": c[10] || (c[10] = (k) => l.value.cleanAddressDays = k),
                                placeholder: a(n)("tip")
                              }, null, 8, [
                                "value",
                                "placeholder"
                              ]),
                              e(C, {
                                onClick: c[11] || (c[11] = (k) => v("addressCreated", l.value.cleanAddressDays))
                              }, {
                                icon: t(() => [
                                  e(w, {
                                    component: a(Pe)
                                  }, null, 8, [
                                    "component"
                                  ])
                                ]),
                                default: t(() => [
                                  m(" " + o(a(n)("cleanupNow")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, [
                            "label"
                          ]),
                          e(N, {
                            label: a(n)("inactiveAddressLabel")
                          }, {
                            default: t(() => [
                              e(u, {
                                checked: l.value.enableInactiveAddressAutoCleanup,
                                "onUpdate:checked": c[12] || (c[12] = (k) => l.value.enableInactiveAddressAutoCleanup = k)
                              }, {
                                default: t(() => [
                                  m(o(a(n)("autoCleanup")), 1)
                                ]),
                                _: 1
                              }, 8, [
                                "checked"
                              ]),
                              e(b, {
                                value: l.value.cleanInactiveAddressDays,
                                "onUpdate:value": c[13] || (c[13] = (k) => l.value.cleanInactiveAddressDays = k),
                                placeholder: a(n)("tip")
                              }, null, 8, [
                                "value",
                                "placeholder"
                              ]),
                              e(C, {
                                onClick: c[14] || (c[14] = (k) => v("inactiveAddress", l.value.cleanInactiveAddressDays))
                              }, {
                                icon: t(() => [
                                  e(w, {
                                    component: a(Pe)
                                  }, null, 8, [
                                    "component"
                                  ])
                                ]),
                                default: t(() => [
                                  m(" " + o(a(n)("cleanupNow")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, [
                            "label"
                          ]),
                          e(N, {
                            label: a(n)("unboundAddressLabel")
                          }, {
                            default: t(() => [
                              e(u, {
                                checked: l.value.enableUnboundAddressAutoCleanup,
                                "onUpdate:checked": c[15] || (c[15] = (k) => l.value.enableUnboundAddressAutoCleanup = k)
                              }, {
                                default: t(() => [
                                  m(o(a(n)("autoCleanup")), 1)
                                ]),
                                _: 1
                              }, 8, [
                                "checked"
                              ]),
                              e(b, {
                                value: l.value.cleanUnboundAddressDays,
                                "onUpdate:value": c[16] || (c[16] = (k) => l.value.cleanUnboundAddressDays = k),
                                placeholder: a(n)("tip")
                              }, null, 8, [
                                "value",
                                "placeholder"
                              ]),
                              e(C, {
                                onClick: c[17] || (c[17] = (k) => v("unboundAddress", l.value.cleanUnboundAddressDays))
                              }, {
                                icon: t(() => [
                                  e(w, {
                                    component: a(Pe)
                                  }, null, 8, [
                                    "component"
                                  ])
                                ]),
                                default: t(() => [
                                  m(" " + o(a(n)("cleanupNow")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, [
                            "label"
                          ]),
                          e(N, {
                            label: a(n)("emptyAddressLabel")
                          }, {
                            default: t(() => [
                              e(u, {
                                checked: l.value.enableEmptyAddressAutoCleanup,
                                "onUpdate:checked": c[18] || (c[18] = (k) => l.value.enableEmptyAddressAutoCleanup = k)
                              }, {
                                default: t(() => [
                                  m(o(a(n)("autoCleanup")), 1)
                                ]),
                                _: 1
                              }, 8, [
                                "checked"
                              ]),
                              e(b, {
                                value: l.value.cleanEmptyAddressDays,
                                "onUpdate:value": c[19] || (c[19] = (k) => l.value.cleanEmptyAddressDays = k),
                                placeholder: a(n)("tip")
                              }, null, 8, [
                                "value",
                                "placeholder"
                              ]),
                              e(C, {
                                onClick: c[20] || (c[20] = (k) => v("emptyAddress", l.value.cleanEmptyAddressDays))
                              }, {
                                icon: t(() => [
                                  e(w, {
                                    component: a(Pe)
                                  }, null, 8, [
                                    "component"
                                  ])
                                ]),
                                default: t(() => [
                                  m(" " + o(a(n)("cleanupNow")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, [
                            "label"
                          ])
                        ]),
                        _: 1
                      }, 8, [
                        "model"
                      ])
                    ]),
                    _: 1
                  }, 8, [
                    "tab"
                  ]),
                  e(D, {
                    name: "custom_sql",
                    tab: a(n)("customSqlCleanup")
                  }, {
                    default: t(() => [
                      e(x, {
                        "show-icon": false,
                        bordered: false,
                        type: "info",
                        style: {
                          "margin-bottom": "16px"
                        }
                      }, {
                        default: t(() => [
                          M("span", null, o(a(n)("customSqlTip")), 1)
                        ]),
                        _: 1
                      }),
                      e(I, {
                        vertical: ""
                      }, {
                        default: t(() => [
                          (E(true), Q(it, null, Rt(l.value.customSqlCleanupList, (k, $) => (E(), X(q, {
                            key: k.id,
                            size: "small"
                          }, {
                            default: t(() => [
                              e(I, {
                                vertical: ""
                              }, {
                                default: t(() => [
                                  e(I, {
                                    align: "center"
                                  }, {
                                    default: t(() => [
                                      e(u, {
                                        checked: k.enabled,
                                        "onUpdate:checked": (B) => k.enabled = B
                                      }, {
                                        default: t(() => [
                                          m(o(a(n)("autoCleanup")), 1)
                                        ]),
                                        _: 1
                                      }, 8, [
                                        "checked",
                                        "onUpdate:checked"
                                      ]),
                                      e(A, {
                                        value: k.name,
                                        "onUpdate:value": (B) => k.name = B,
                                        placeholder: a(n)("sqlNamePlaceholder"),
                                        style: {
                                          width: "200px"
                                        }
                                      }, null, 8, [
                                        "value",
                                        "onUpdate:value",
                                        "placeholder"
                                      ]),
                                      e(C, {
                                        onClick: (B) => s($),
                                        type: "error",
                                        quaternary: ""
                                      }, {
                                        icon: t(() => [
                                          e(w, {
                                            component: a(La)
                                          }, null, 8, [
                                            "component"
                                          ])
                                        ]),
                                        default: t(() => [
                                          m(" " + o(a(n)("deleteCustomSql")), 1)
                                        ]),
                                        _: 1
                                      }, 8, [
                                        "onClick"
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  e(A, {
                                    value: k.sql,
                                    "onUpdate:value": (B) => k.sql = B,
                                    type: "textarea",
                                    placeholder: a(n)("sqlPlaceholder"),
                                    autosize: {
                                      minRows: 2
                                    },
                                    class: "sql-input"
                                  }, null, 8, [
                                    "value",
                                    "onUpdate:value",
                                    "placeholder"
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024))), 128)),
                          e(C, {
                            onClick: p
                          }, {
                            icon: t(() => [
                              e(w, {
                                component: a(Aa)
                              }, null, 8, [
                                "component"
                              ])
                            ]),
                            default: t(() => [
                              m(" " + o(a(n)("addCustomSql")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, [
                    "tab"
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]);
      };
    }
  };
  Al = ee(Cl, [
    [
      "__scopeId",
      "data-v-2f016879"
    ]
  ]);
  Sl = {
    class: "center"
  };
  Ul = {
    __name: "DatabaseManager",
    setup(_) {
      const d = ae(), r = f({
        need_initialization: false,
        need_migration: false,
        current_db_version: "",
        code_db_version: ""
      }), { t: l } = te({
        messages: {
          en: {
            need_initialization_tip: "Database initialization is required. Please initialize the database.",
            need_migration_tip: "Database migration is required. Please migrate the database.",
            current_db_version: "Current DB Version",
            code_db_version: "Code Needed DB Version",
            init: "Initialize Database",
            migration: "Migrate Database",
            initializationSuccess: "Database initialized successfully",
            migrationSuccess: "Database migrated successfully"
          },
          zh: {
            need_initialization_tip: "\u9700\u8981\u521D\u59CB\u5316\u6570\u636E\u5E93\uFF0C\u8BF7\u521D\u59CB\u5316\u6570\u636E\u5E93",
            need_migration_tip: "\u9700\u8981\u8FC1\u79FB\u6570\u636E\u5E93\uFF0C\u8BF7\u8FC1\u79FB\u6570\u636E\u5E93",
            current_db_version: "\u5F53\u524D\u6570\u636E\u5E93\u7248\u672C",
            code_db_version: "\u9700\u8981\u7684\u6570\u636E\u5E93\u7248\u672C",
            init: "\u521D\u59CB\u5316\u6570\u636E\u5E93",
            migration: "\u5347\u7EA7\u6570\u636E\u5E93 Schema",
            initializationSuccess: "\u6570\u636E\u5E93\u521D\u59CB\u5316\u6210\u529F",
            migrationSuccess: "\u6570\u636E\u5E93\u5347\u7EA7\u6210\u529F"
          }
        }
      }), n = async () => {
        try {
          const s = await P.fetch("/admin/db_version");
          s && Object.assign(r.value, s);
        } catch (s) {
          d.error(s.message || "error");
        }
      }, v = async () => {
        try {
          await P.fetch("/admin/db_initialize", {
            method: "POST"
          }), await n(), d.success(l("initializationSuccess"));
        } catch (s) {
          d.error(s.message || "error");
        }
      }, p = async () => {
        try {
          await P.fetch("/admin/db_migration", {
            method: "POST"
          }), await n(), d.success(l("migrationSuccess"));
        } catch (s) {
          d.error(s.message || "error");
        }
      };
      return le(async () => {
        await n();
      }), (s, y) => {
        const g = O, i = Ue, c = de;
        return E(), Q("div", Sl, [
          e(c, {
            bordered: false,
            embedded: ""
          }, {
            default: t(() => [
              r.value.need_initialization ? (E(), X(i, {
                key: 0,
                type: "warning",
                "show-icon": false,
                bordered: false
              }, {
                default: t(() => [
                  M("span", null, o(a(l)("need_initialization_tip")), 1),
                  e(g, {
                    onClick: v,
                    type: "primary",
                    secondary: "",
                    block: "",
                    loading: s.loading
                  }, {
                    default: t(() => [
                      m(o(a(l)("init")), 1)
                    ]),
                    _: 1
                  }, 8, [
                    "loading"
                  ])
                ]),
                _: 1
              })) : Z("", true),
              r.value.need_migration ? (E(), X(i, {
                key: 1,
                type: "warning",
                "show-icon": false,
                bordered: false
              }, {
                default: t(() => [
                  M("span", null, o(a(l)("need_migration_tip")), 1),
                  e(g, {
                    onClick: p,
                    type: "primary",
                    secondary: "",
                    block: "",
                    loading: s.loading
                  }, {
                    default: t(() => [
                      m(o(a(l)("migration")), 1)
                    ]),
                    _: 1
                  }, 8, [
                    "loading"
                  ])
                ]),
                _: 1
              })) : Z("", true),
              e(i, {
                type: "info",
                "show-icon": false,
                bordered: false
              }, {
                default: t(() => [
                  M("span", null, o(a(l)("current_db_version")) + ": " + o(r.value.current_db_version || "unknown") + ", " + o(a(l)("code_db_version")) + ": " + o(r.value.code_db_version), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]);
      };
    }
  };
  Ct = ee(Ul, [
    [
      "__scopeId",
      "data-v-6eef5c21"
    ]
  ]);
  Ll = {
    class: "center"
  };
  Il = {
    key: 0
  };
  Ml = ie({
    __name: "Telegram",
    setup(_) {
      const d = ae(), { t: r } = te({
        messages: {
          en: {
            init: "Init",
            successTip: "Success",
            status: "Check Status",
            enableTelegramAllowList: "Enable Telegram Allow List(Manually input Chat ID)",
            enable: "Enable",
            telegramAllowList: "Telegram Allow List(Manually input telegram Chat ID)",
            manualInputPrompt: "Type and press Enter to add",
            save: "Save",
            miniAppUrl: "Telegram Mini App URL",
            enableGlobalMailPush: "Enable Global Mail Push(Manually input telegram Chat ID)",
            globalMailPushList: "Global Mail Push Chat ID List",
            globalMailPushListTip: "Support chat_id of private chat/group/channel. You can send a message to your bot, then visit this link to see chat_id, https://api.telegram.org/bot<Replace with your BOT TOKEN>/getUpdates"
          },
          zh: {
            init: "\u521D\u59CB\u5316",
            successTip: "\u6210\u529F",
            status: "\u67E5\u770B\u72B6\u6001",
            enableTelegramAllowList: "\u542F\u7528 Telegram \u767D\u540D\u5355(\u624B\u52A8\u8F93\u5165 Chat ID, \u56DE\u8F66\u589E\u52A0)",
            enable: "\u542F\u7528",
            telegramAllowList: "Telegram \u767D\u540D\u5355(\u624B\u52A8\u8F93\u5165 Chat ID, \u56DE\u8F66\u589E\u52A0)",
            manualInputPrompt: "\u8F93\u5165\u540E\u6309\u56DE\u8F66\u952E\u6DFB\u52A0",
            save: "\u4FDD\u5B58",
            miniAppUrl: "\u7535\u62A5\u5C0F\u7A0B\u5E8F URL(\u8BF7\u8F93\u5165\u4F60\u90E8\u7F72\u7684\u7535\u62A5\u5C0F\u7A0B\u5E8F\u7F51\u9875\u5730\u5740)",
            enableGlobalMailPush: "\u542F\u7528\u5168\u5C40\u90AE\u4EF6\u63A8\u9001(\u624B\u52A8\u8F93\u5165\u90AE\u7BB1\u7BA1\u7406\u5458\u7684 telegram Chat ID, \u56DE\u8F66\u589E\u52A0)",
            globalMailPushList: "\u5168\u5C40\u90AE\u4EF6\u63A8\u9001 Chat ID \u5217\u8868",
            globalMailPushListTip: "\u652F\u6301\u5BF9\u8BDD/\u7FA4\u7EC4/\u9891\u9053\u7684 Chat ID, \u60A8\u53EF\u4EE5\u53D1\u9001\u4E00\u6761\u6D88\u606F\u7ED9\u60A8\u7684\u673A\u5668\u4EBA\uFF0C\u7136\u540E\u8BBF\u95EE\u6B64\u94FE\u63A5\u6765\u67E5\u770B chat_id, https://api.telegram.org/bot<\u8FD9\u91CC\u66FF\u6362\u6210\u60A8\u7684 BOT TOKEN>/getUpdates"
          }
        }
      }), l = f({
        fetched: false
      }), n = async () => {
        try {
          const i = await P.fetch("/admin/telegram/status");
          Object.assign(l.value, i), l.value.fetched = true;
        } catch (i) {
          d.error(i.message || "error");
        }
      }, v = async () => {
        try {
          await P.fetch("/admin/telegram/init", {
            method: "POST"
          }), d.success(r("successTip"));
        } catch (i) {
          d.error(i.message || "error");
        }
      };
      class p {
        constructor(c, x, C, L, u) {
          __publicField(this, "enableAllowList");
          __publicField(this, "allowList");
          __publicField(this, "miniAppUrl");
          __publicField(this, "enableGlobalMailPush");
          __publicField(this, "globalMailPushList");
          this.enableAllowList = c, this.allowList = x, this.miniAppUrl = C, this.enableGlobalMailPush = L, this.globalMailPushList = u;
        }
      }
      const s = f(new p(false, [], "", false, [])), y = async () => {
        try {
          const i = await P.fetch("/admin/telegram/settings");
          Object.assign(s.value, i);
        } catch (i) {
          d.error(i.message || "error");
        }
      }, g = async () => {
        try {
          await P.fetch("/admin/telegram/settings", {
            method: "POST",
            body: JSON.stringify(s.value)
          }), d.success(r("successTip"));
        } catch (i) {
          d.error(i.message || "error");
        }
      };
      return le(async () => {
        await y();
      }), (i, c) => {
        const x = O, C = De, L = Ke, u = Le, b = re, w = Ce, N = ge, K = pe, D = de;
        return E(), Q("div", Ll, [
          e(D, {
            bordered: false,
            embedded: "",
            style: {
              "max-width": "800px",
              overflow: "auto"
            }
          }, {
            default: t(() => [
              e(C, {
                justify: "end"
              }, {
                default: t(() => [
                  e(x, {
                    onClick: n,
                    secondary: ""
                  }, {
                    default: t(() => [
                      m(o(a(r)("status")), 1)
                    ]),
                    _: 1
                  }),
                  e(x, {
                    onClick: v,
                    type: "primary"
                  }, {
                    default: t(() => [
                      m(o(a(r)("init")), 1)
                    ]),
                    _: 1
                  }),
                  e(x, {
                    onClick: g,
                    type: "primary"
                  }, {
                    default: t(() => [
                      m(o(a(r)("save")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(D, {
                bordered: false,
                embedded: ""
              }, {
                default: t(() => [
                  e(N, {
                    label: a(r)("enableTelegramAllowList")
                  }, {
                    default: t(() => [
                      e(w, null, {
                        default: t(() => [
                          e(L, {
                            checked: s.value.enableAllowList,
                            "onUpdate:checked": c[0] || (c[0] = (A) => s.value.enableAllowList = A),
                            style: {
                              width: "20%"
                            }
                          }, {
                            default: t(() => [
                              m(o(a(r)("enable")), 1)
                            ]),
                            _: 1
                          }, 8, [
                            "checked"
                          ]),
                          e(b, {
                            value: s.value.allowList,
                            "onUpdate:value": c[1] || (c[1] = (A) => s.value.allowList = A),
                            filterable: "",
                            multiple: "",
                            tag: "",
                            style: {
                              width: "80%"
                            },
                            placeholder: a(r)("telegramAllowList")
                          }, {
                            empty: t(() => [
                              e(u, {
                                depth: "3"
                              }, {
                                default: t(() => [
                                  m(o(a(r)("manualInputPrompt")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, [
                            "value",
                            "placeholder"
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ]),
                  c[5] || (c[5] = M("br", null, null, -1)),
                  e(N, {
                    label: a(r)("enableGlobalMailPush")
                  }, {
                    feedback: t(() => [
                      e(u, {
                        depth: "3"
                      }, {
                        default: t(() => [
                          m(o(a(r)("globalMailPushListTip")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    default: t(() => [
                      e(w, null, {
                        default: t(() => [
                          e(L, {
                            checked: s.value.enableGlobalMailPush,
                            "onUpdate:checked": c[2] || (c[2] = (A) => s.value.enableGlobalMailPush = A),
                            style: {
                              width: "20%"
                            }
                          }, {
                            default: t(() => [
                              m(o(a(r)("enable")), 1)
                            ]),
                            _: 1
                          }, 8, [
                            "checked"
                          ]),
                          e(b, {
                            value: s.value.globalMailPushList,
                            "onUpdate:value": c[3] || (c[3] = (A) => s.value.globalMailPushList = A),
                            filterable: "",
                            multiple: "",
                            tag: "",
                            style: {
                              width: "80%"
                            },
                            placeholder: a(r)("globalMailPushList")
                          }, {
                            empty: t(() => [
                              e(u, {
                                depth: "3"
                              }, {
                                default: t(() => [
                                  m(o(a(r)("manualInputPrompt")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, [
                            "value",
                            "placeholder"
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ]),
                  c[6] || (c[6] = M("br", null, null, -1)),
                  e(N, {
                    label: a(r)("miniAppUrl")
                  }, {
                    default: t(() => [
                      e(K, {
                        value: s.value.miniAppUrl,
                        "onUpdate:value": c[4] || (c[4] = (A) => s.value.miniAppUrl = A)
                      }, null, 8, [
                        "value"
                      ])
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ])
                ]),
                _: 1
              }),
              l.value.fetched ? (E(), Q("pre", Il, o(JSON.stringify(l.value, null, 2)), 1)) : Z("", true)
            ]),
            _: 1
          })
        ]);
      };
    }
  });
  Tl = ee(Ml, [
    [
      "__scopeId",
      "data-v-008f01c5"
    ]
  ]);
  Pl = {
    class: "center"
  };
  El = ie({
    __name: "Webhook",
    setup(_) {
      const d = ae(), { t: r } = te({
        messages: {
          en: {
            successTip: "Success",
            enableAllowList: "Enable Allow List (Restrict webhook access to specific users)",
            webhookAllowList: "Webhook Allow List(Enter the mail address that is allowed to use webhook and enter)",
            manualInputPrompt: "Type and press Enter to add",
            save: "Save",
            notEnabled: "Webhook is not enabled"
          },
          zh: {
            successTip: "\u6210\u529F",
            enableAllowList: "\u542F\u7528\u767D\u540D\u5355 (\u9650\u5236 webhook \u8BBF\u95EE\u6743\u9650\uFF0C\u53EA\u6709\u767D\u540D\u5355\u4E2D\u7684\u7528\u6237\u53EF\u4EE5\u4F7F\u7528)",
            webhookAllowList: "Webhook \u767D\u540D\u5355(\u8BF7\u8F93\u5165\u5141\u8BB8\u4F7F\u7528webhook \u7684\u90AE\u7BB1\u5730\u5740, \u56DE\u8F66\u589E\u52A0)",
            manualInputPrompt: "\u8F93\u5165\u540E\u6309\u56DE\u8F66\u952E\u6DFB\u52A0",
            save: "\u4FDD\u5B58",
            notEnabled: "Webhook \u672A\u5F00\u542F"
          }
        }
      });
      class l {
        constructor(i, c) {
          __publicField(this, "enableAllowList");
          __publicField(this, "allowList");
          this.enableAllowList = i, this.allowList = c;
        }
      }
      const n = f(new l(false, [])), v = f(false), p = f(""), s = async () => {
        try {
          const g = await P.fetch("/admin/webhook/settings");
          Object.assign(n.value, g), v.value = true;
        } catch (g) {
          p.value = g.message || "error";
        }
      }, y = async () => {
        try {
          await P.fetch("/admin/webhook/settings", {
            method: "POST",
            body: JSON.stringify(n.value)
          }), d.success(r("successTip"));
        } catch (g) {
          d.error(g.message || "error");
        }
      };
      return le(async () => {
        await s();
      }), (g, i) => {
        const c = O, x = De, C = Fe, L = ge, u = Le, b = re, w = de, N = oa;
        return E(), Q("div", Pl, [
          v.value ? (E(), X(w, {
            key: 0,
            bordered: false,
            embedded: "",
            style: {
              "max-width": "800px",
              overflow: "auto"
            }
          }, {
            default: t(() => [
              e(x, {
                justify: "end"
              }, {
                default: t(() => [
                  e(c, {
                    onClick: y,
                    type: "primary"
                  }, {
                    default: t(() => [
                      m(o(a(r)("save")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(L, {
                label: a(r)("enableAllowList")
              }, {
                default: t(() => [
                  e(C, {
                    value: n.value.enableAllowList,
                    "onUpdate:value": i[0] || (i[0] = (K) => n.value.enableAllowList = K),
                    round: false
                  }, null, 8, [
                    "value"
                  ])
                ]),
                _: 1
              }, 8, [
                "label"
              ]),
              e(L, {
                label: a(r)("webhookAllowList")
              }, {
                default: t(() => [
                  e(b, {
                    value: n.value.allowList,
                    "onUpdate:value": i[1] || (i[1] = (K) => n.value.allowList = K),
                    filterable: "",
                    multiple: "",
                    tag: "",
                    placeholder: a(r)("webhookAllowList")
                  }, {
                    empty: t(() => [
                      e(u, {
                        depth: "3"
                      }, {
                        default: t(() => [
                          m(o(a(r)("manualInputPrompt")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, [
                    "value",
                    "placeholder"
                  ])
                ]),
                _: 1
              }, 8, [
                "label"
              ])
            ]),
            _: 1
          })) : (E(), X(N, {
            key: 1,
            status: "404",
            title: a(r)("notEnabled"),
            description: p.value
          }, null, 8, [
            "title",
            "description"
          ]))
        ]);
      };
    }
  });
  Dl = ee(El, [
    [
      "__scopeId",
      "data-v-6baca40b"
    ]
  ]);
  Rl = ie({
    __name: "MailWebhook",
    setup(_) {
      const d = async () => await P.fetch("/admin/mail_webhook/settings"), r = async (n) => {
        await P.fetch("/admin/mail_webhook/settings", {
          method: "POST",
          body: JSON.stringify(n)
        });
      }, l = async (n) => {
        await P.fetch("/admin/mail_webhook/test", {
          method: "POST",
          body: JSON.stringify(n)
        });
      };
      return (n, v) => (E(), X(ra, {
        fetchData: d,
        saveSettings: r,
        testSettings: l
      }));
    }
  });
  $l = {
    class: "center"
  };
  Bl = {
    __name: "WorkerConfig",
    setup(_) {
      const { loading: d } = ue(), r = ae(), l = f({}), n = async () => {
        try {
          const v = await P.fetch("/admin/worker/configs");
          Object.assign(l.value, v);
        } catch (v) {
          r.error(v.message || "error");
        }
      };
      return le(async () => {
        await n();
      }), (v, p) => {
        const s = de;
        return E(), Q("div", $l, [
          e(s, {
            bordered: false,
            embedded: "",
            style: {
              "max-width": "800px",
              overflow: "auto"
            }
          }, {
            default: t(() => [
              M("pre", null, o(JSON.stringify(l.value, null, 2)), 1)
            ]),
            _: 1
          })
        ]);
      };
    }
  };
  At = ee(Bl, [
    [
      "__scopeId",
      "data-v-92d764b2"
    ]
  ]);
  zl = {
    class: "center"
  };
  Ol = {
    style: {
      "line-height": "1.8"
    }
  };
  Nl = {
    __name: "IpBlacklistSettings",
    setup(_) {
      const { loading: d } = ue(), r = ae(), { t: l } = te({
        messages: {
          en: {
            title: "IP Blacklist Settings",
            manualInputPrompt: "Type pattern and press Enter to add",
            save: "Save",
            successTip: "Save Success",
            enable_ip_blacklist: "Enable IP Blacklist",
            enable_tip: "Block IPs matching blacklist patterns from accessing rate-limited APIs",
            ip_blacklist: "IP Blacklist Patterns",
            ip_blacklist_placeholder: "Enter pattern (e.g., 192.168.1 or ^10\\.0\\.0\\.5$)",
            asn_blacklist: "ASN Organization Blacklist",
            asn_blacklist_placeholder: "Enter ASN organization (e.g., Google, Amazon)",
            fingerprint_blacklist: "Browser Fingerprint Blacklist",
            fingerprint_blacklist_placeholder: "Enter fingerprint ID (e.g., a1b2c3d4e5f6g7h8)",
            tip_ip: 'IP Blacklist: Supports text matching (e.g., "192.168.1") or regex (e.g., "^10\\.0\\.0\\.5$").',
            tip_asn: "ASN Organization: Block by ISP/provider. Case-insensitive text matching or regex.",
            tip_fingerprint: "Browser Fingerprint: Block by browser fingerprint. Supports exact matching or regex patterns.",
            tip_daily_limit: "Daily Limit: Restrict the maximum number of requests per IP address per day (1-1000000).",
            tip_scope: "Applies to: Create Address, Send Mail, External Send Mail API, User Registration, Verify Code",
            enable_daily_limit: "Enable Daily Request Limit",
            enable_daily_limit_tip: "Limit the number of API requests per IP address per day",
            daily_request_limit: "Daily Request Limit",
            daily_request_limit_placeholder: "Enter limit (e.g., 1000)"
          },
          zh: {
            title: "IP \u9ED1\u540D\u5355\u8BBE\u7F6E",
            manualInputPrompt: "\u8F93\u5165\u5339\u914D\u6A21\u5F0F\u540E\u6309\u56DE\u8F66\u952E\u6DFB\u52A0",
            save: "\u4FDD\u5B58",
            successTip: "\u4FDD\u5B58\u6210\u529F",
            enable_ip_blacklist: "\u542F\u7528 IP \u9ED1\u540D\u5355",
            enable_tip: "\u963B\u6B62\u5339\u914D\u9ED1\u540D\u5355\u7684 IP \u8BBF\u95EE\u9650\u6D41 API",
            ip_blacklist: "IP \u9ED1\u540D\u5355\u5339\u914D\u6A21\u5F0F",
            ip_blacklist_placeholder: "\u8F93\u5165\u5339\u914D\u6A21\u5F0F\uFF08\u4F8B\u5982\uFF1A192.168.1 \u6216 ^10\\.0\\.0\\.5$\uFF09",
            asn_blacklist: "ASN \u7EC4\u7EC7\uFF08\u8FD0\u8425\u5546\uFF09\u9ED1\u540D\u5355",
            asn_blacklist_placeholder: "\u8F93\u5165 ASN \u7EC4\u7EC7\u540D\u79F0\uFF08\u4F8B\u5982\uFF1AGoogle, Amazon\uFF09",
            fingerprint_blacklist: "\u6D4F\u89C8\u5668\u6307\u7EB9\u9ED1\u540D\u5355",
            fingerprint_blacklist_placeholder: "\u8F93\u5165\u6307\u7EB9 ID\uFF08\u4F8B\u5982\uFF1Aa1b2c3d4e5f6g7h8\uFF09",
            tip_ip: 'IP \u9ED1\u540D\u5355\uFF1A\u652F\u6301\u6587\u672C\u5339\u914D\uFF08\u5982 "192.168.1"\uFF09\u6216\u6B63\u5219\u8868\u8FBE\u5F0F\uFF08\u5982 "^10\\.0\\.0\\.5$"\uFF09\u3002',
            tip_asn: "ASN \u7EC4\u7EC7\uFF1A\u6839\u636E\u8FD0\u8425\u5546/ISP \u62C9\u9ED1\u3002\u652F\u6301\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u7684\u6587\u672C\u5339\u914D\u6216\u6B63\u5219\u8868\u8FBE\u5F0F\u3002",
            tip_fingerprint: "\u6D4F\u89C8\u5668\u6307\u7EB9\uFF1A\u6839\u636E\u6D4F\u89C8\u5668\u6307\u7EB9\u62C9\u9ED1\u3002\u652F\u6301\u5B8C\u5168\u5339\u914D\u6216\u6B63\u5219\u8868\u8FBE\u5F0F\u3002",
            tip_daily_limit: "\u6BCF\u65E5\u9650\u6D41\uFF1A\u9650\u5236\u5355\u4E2A IP \u5730\u5740\u6BCF\u5929\u6700\u591A\u8BF7\u6C42\u6B21\u6570\uFF081-1000000\uFF09\u3002",
            tip_scope: "\u4F5C\u7528\u8303\u56F4\uFF1A\u521B\u5EFA\u90AE\u7BB1\u5730\u5740\u3001\u53D1\u9001\u90AE\u4EF6\u3001\u5916\u90E8\u53D1\u9001\u90AE\u4EF6 API\u3001\u7528\u6237\u6CE8\u518C\u3001\u9A8C\u8BC1\u7801\u9A8C\u8BC1",
            enable_daily_limit: "\u542F\u7528\u6BCF\u65E5\u8BF7\u6C42\u9650\u6D41",
            enable_daily_limit_tip: "\u9650\u5236\u6BCF\u4E2A IP \u5730\u5740\u6BCF\u5929\u7684 API \u8BF7\u6C42\u6B21\u6570",
            daily_request_limit: "\u6BCF\u65E5\u8BF7\u6C42\u6B21\u6570\u4E0A\u9650",
            daily_request_limit_placeholder: "\u8F93\u5165\u9650\u5236\u6B21\u6570\uFF08\u4F8B\u5982\uFF1A1000\uFF09"
          }
        }
      }), n = f(false), v = f([]), p = f([]), s = f([]), y = f(false), g = f(1e3), i = async () => {
        try {
          d.value = true;
          const x = await P.fetch("/admin/ip_blacklist/settings");
          n.value = x.enabled || false, v.value = x.blacklist || [], p.value = x.asnBlacklist || [], s.value = x.fingerprintBlacklist || [], y.value = x.enableDailyLimit || false, g.value = x.dailyRequestLimit || 1e3;
        } catch (x) {
          r.error(x.message || "error");
        } finally {
          d.value = false;
        }
      }, c = async () => {
        try {
          d.value = true, await P.fetch("/admin/ip_blacklist/settings", {
            method: "POST",
            body: JSON.stringify({
              enabled: n.value,
              blacklist: v.value || [],
              asnBlacklist: p.value || [],
              fingerprintBlacklist: s.value || [],
              enableDailyLimit: y.value,
              dailyRequestLimit: g.value
            })
          }), r.success(l("successTip"));
        } catch (x) {
          r.error(x.message || "error");
        } finally {
          d.value = false;
        }
      };
      return le(async () => {
        await i();
      }), (x, C) => {
        const L = O, u = Ue, b = Fe, w = Le, N = ge, K = re, D = ut, A = Je, I = Ve, q = de;
        return E(), Q("div", zl, [
          e(q, {
            title: a(l)("title"),
            bordered: false,
            embedded: "",
            style: {
              "max-width": "800px"
            }
          }, {
            "header-extra": t(() => [
              e(L, {
                onClick: c,
                type: "primary",
                loading: a(d)
              }, {
                default: t(() => [
                  m(o(a(l)("save")), 1)
                ]),
                _: 1
              }, 8, [
                "loading"
              ])
            ]),
            default: t(() => [
              e(I, {
                vertical: "",
                size: 20
              }, {
                default: t(() => [
                  e(u, {
                    "show-icon": false,
                    bordered: false,
                    type: "info"
                  }, {
                    default: t(() => [
                      M("div", Ol, [
                        M("div", null, [
                          M("strong", null, o(a(l)("tip_scope")), 1)
                        ]),
                        M("div", null, "\u2022 " + o(a(l)("tip_ip")), 1),
                        M("div", null, "\u2022 " + o(a(l)("tip_asn")), 1),
                        M("div", null, "\u2022 " + o(a(l)("tip_fingerprint")), 1),
                        M("div", null, "\u2022 " + o(a(l)("tip_daily_limit")), 1)
                      ])
                    ]),
                    _: 1
                  }),
                  e(N, {
                    label: a(l)("enable_ip_blacklist")
                  }, {
                    default: t(() => [
                      e(b, {
                        value: n.value,
                        "onUpdate:value": C[0] || (C[0] = (W) => n.value = W),
                        round: false
                      }, null, 8, [
                        "value"
                      ]),
                      e(w, {
                        depth: "3",
                        style: {
                          "margin-left": "10px",
                          "font-size": "12px"
                        }
                      }, {
                        default: t(() => [
                          m(o(a(l)("enable_tip")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ]),
                  e(N, {
                    label: a(l)("ip_blacklist")
                  }, {
                    default: t(() => [
                      e(K, {
                        value: v.value,
                        "onUpdate:value": C[1] || (C[1] = (W) => v.value = W),
                        filterable: "",
                        multiple: "",
                        tag: "",
                        placeholder: a(l)("ip_blacklist_placeholder"),
                        disabled: !n.value
                      }, {
                        empty: t(() => [
                          e(w, {
                            depth: "3"
                          }, {
                            default: t(() => [
                              m(o(a(l)("manualInputPrompt")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, [
                        "value",
                        "placeholder",
                        "disabled"
                      ])
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ]),
                  e(N, {
                    label: a(l)("asn_blacklist")
                  }, {
                    default: t(() => [
                      e(K, {
                        value: p.value,
                        "onUpdate:value": C[2] || (C[2] = (W) => p.value = W),
                        filterable: "",
                        multiple: "",
                        tag: "",
                        placeholder: a(l)("asn_blacklist_placeholder"),
                        disabled: !n.value
                      }, {
                        empty: t(() => [
                          e(w, {
                            depth: "3"
                          }, {
                            default: t(() => [
                              m(o(a(l)("manualInputPrompt")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, [
                        "value",
                        "placeholder",
                        "disabled"
                      ])
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ]),
                  e(N, {
                    label: a(l)("fingerprint_blacklist")
                  }, {
                    default: t(() => [
                      e(K, {
                        value: s.value,
                        "onUpdate:value": C[3] || (C[3] = (W) => s.value = W),
                        filterable: "",
                        multiple: "",
                        tag: "",
                        placeholder: a(l)("fingerprint_blacklist_placeholder"),
                        disabled: !n.value
                      }, {
                        empty: t(() => [
                          e(w, {
                            depth: "3"
                          }, {
                            default: t(() => [
                              m(o(a(l)("manualInputPrompt")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, [
                        "value",
                        "placeholder",
                        "disabled"
                      ])
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ]),
                  e(D),
                  e(N, {
                    label: a(l)("enable_daily_limit")
                  }, {
                    default: t(() => [
                      e(b, {
                        value: y.value,
                        "onUpdate:value": C[4] || (C[4] = (W) => y.value = W),
                        round: false
                      }, null, 8, [
                        "value"
                      ]),
                      e(w, {
                        depth: "3",
                        style: {
                          "margin-left": "10px",
                          "font-size": "12px"
                        }
                      }, {
                        default: t(() => [
                          m(o(a(l)("enable_daily_limit_tip")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ]),
                  e(N, {
                    label: a(l)("daily_request_limit")
                  }, {
                    default: t(() => [
                      e(A, {
                        value: g.value,
                        "onUpdate:value": C[5] || (C[5] = (W) => g.value = W),
                        min: 1,
                        max: 1e6,
                        placeholder: a(l)("daily_request_limit_placeholder"),
                        disabled: !y.value,
                        style: {
                          width: "100%"
                        }
                      }, null, 8, [
                        "value",
                        "placeholder",
                        "disabled"
                      ])
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, [
            "title"
          ])
        ]);
      };
    }
  };
  ql = ee(Nl, [
    [
      "__scopeId",
      "data-v-6cc70158"
    ]
  ]);
  Vl = {
    class: "center"
  };
  Fl = {
    key: 1
  };
  jl = ie({
    __name: "AiExtractSettings",
    setup(_) {
      const d = ae(), { t: r } = te({
        messages: {
          en: {
            title: "AI Email Extraction Settings",
            successTip: "Success",
            save: "Save",
            enableAllowList: "Enable Address Allowlist",
            enableAllowListTip: "When enabled, AI extraction will only process emails sent to addresses in the allowlist",
            allowList: "Address Allowlist (Enter address and press Enter, wildcards supported)",
            allowListTip: "Wildcard * matches any characters, e.g. *{'@'}example.com matches all addresses under example.com domain",
            manualInputPrompt: "Type and press Enter to add",
            disabledTip: "When disabled, AI extraction will process all email addresses"
          },
          zh: {
            title: "AI \u90AE\u4EF6\u63D0\u53D6\u8BBE\u7F6E",
            successTip: "\u6210\u529F",
            save: "\u4FDD\u5B58",
            enableAllowList: "\u542F\u7528\u5730\u5740\u767D\u540D\u5355",
            enableAllowListTip: "\u542F\u7528\u540E\uFF0CAI \u63D0\u53D6\u529F\u80FD\u4EC5\u5BF9\u767D\u540D\u5355\u4E2D\u7684\u90AE\u7BB1\u5730\u5740\u751F\u6548",
            allowList: "\u5730\u5740\u767D\u540D\u5355 (\u8BF7\u8F93\u5165\u5730\u5740\u5E76\u56DE\u8F66\uFF0C\u652F\u6301\u901A\u914D\u7B26)",
            allowListTip: "\u901A\u914D\u7B26 * \u53EF\u5339\u914D\u4EFB\u610F\u5B57\u7B26\uFF0C\u5982 *{'@'}example.com \u53EF\u5339\u914D example.com \u57DF\u540D\u4E0B\u7684\u6240\u6709\u5730\u5740",
            manualInputPrompt: "\u8F93\u5165\u540E\u6309\u56DE\u8F66\u952E\u6DFB\u52A0",
            disabledTip: "\u672A\u542F\u7528\u65F6\uFF0C\u6240\u6709\u90AE\u7BB1\u5730\u5740\u90FD\u53EF\u4F7F\u7528 AI \u63D0\u53D6\u529F\u80FD"
          }
        }
      }), l = f({
        enableAllowList: false,
        allowList: []
      }), n = async () => {
        try {
          const p = await P.fetch("/admin/ai_extract/settings");
          Object.assign(l.value, p);
        } catch (p) {
          d.error(p.message || "error");
        }
      }, v = async () => {
        try {
          await P.fetch("/admin/ai_extract/settings", {
            method: "POST",
            body: JSON.stringify(l.value)
          }), d.success(r("successTip"));
        } catch (p) {
          d.error(p.message || "error");
        }
      };
      return le(async () => {
        await n();
      }), (p, s) => {
        const y = O, g = De, i = Fe, c = ge, x = Ue, C = Le, L = re, u = de;
        return E(), Q("div", Vl, [
          e(u, {
            title: a(r)("title"),
            bordered: false,
            embedded: "",
            style: {
              "max-width": "800px",
              overflow: "auto"
            }
          }, {
            default: t(() => [
              e(g, {
                justify: "end"
              }, {
                default: t(() => [
                  e(y, {
                    onClick: v,
                    type: "primary"
                  }, {
                    default: t(() => [
                      m(o(a(r)("save")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(c, {
                label: a(r)("enableAllowList")
              }, {
                default: t(() => [
                  e(i, {
                    value: l.value.enableAllowList,
                    "onUpdate:value": s[0] || (s[0] = (b) => l.value.enableAllowList = b),
                    round: false
                  }, null, 8, [
                    "value"
                  ])
                ]),
                _: 1
              }, 8, [
                "label"
              ]),
              l.value.enableAllowList ? Z("", true) : (E(), X(x, {
                key: 0,
                type: "info",
                style: {
                  "margin-bottom": "16px"
                }
              }, {
                default: t(() => [
                  m(o(a(r)("disabledTip")), 1)
                ]),
                _: 1
              })),
              l.value.enableAllowList ? (E(), Q("div", Fl, [
                e(x, {
                  type: "warning",
                  style: {
                    "margin-bottom": "16px"
                  }
                }, {
                  default: t(() => [
                    m(o(a(r)("enableAllowListTip")), 1)
                  ]),
                  _: 1
                }),
                e(c, {
                  label: a(r)("allowList")
                }, {
                  default: t(() => [
                    e(L, {
                      value: l.value.allowList,
                      "onUpdate:value": s[1] || (s[1] = (b) => l.value.allowList = b),
                      filterable: "",
                      multiple: "",
                      tag: "",
                      placeholder: a(r)("allowListTip")
                    }, {
                      empty: t(() => [
                        e(C, {
                          depth: "3"
                        }, {
                          default: t(() => [
                            m(o(a(r)("manualInputPrompt")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, [
                      "value",
                      "placeholder"
                    ])
                  ]),
                  _: 1
                }, 8, [
                  "label"
                ]),
                e(C, {
                  depth: "3",
                  style: {
                    "font-size": "12px"
                  }
                }, {
                  default: t(() => [
                    m(o(a(r)("allowListTip")), 1)
                  ]),
                  _: 1
                })
              ])) : Z("", true)
            ]),
            _: 1
          }, 8, [
            "title"
          ])
        ]);
      };
    }
  });
  Wl = ee(jl, [
    [
      "__scopeId",
      "data-v-230de380"
    ]
  ]);
  Hl = {
    key: 0
  };
  Kl = {
    style: {
      display: "flex",
      "justify-content": "center",
      padding: "20px"
    }
  };
  Gl = {
    __name: "Admin",
    setup(_) {
      const { adminAuth: d, showAdminAuth: r, adminTab: l, loading: n, globalTabplacement: v, showAdminPage: p, userSettings: s, openSettings: y } = ue(), g = ae(), i = ia(), c = ca(() => (n.value = true, ma(() => import("./SendMail-gI-QSIA2.js"), __vite__mapDeps([0,1,2,3,4,5])).finally(() => n.value = false))), x = async () => {
        try {
          d.value = N.value, location.reload();
        } catch (A) {
          g.error(A.message || "error");
        }
      }, C = f(false), L = async () => {
        d.value = "", r.value = false, l.value = "account", g.success(u("logoutSuccess")), await i.push(pa("/", b.value));
      }, { t: u, locale: b } = te({
        messages: {
          en: {
            accessHeader: "Admin Password",
            accessTip: "Please enter the admin password",
            mails: "Emails",
            sendMail: "Send Mail",
            qucickSetup: "Quick Setup",
            account: "Account",
            account_create: "Create Account",
            account_settings: "Account Settings",
            user: "User",
            user_management: "User Management",
            user_settings: "User Settings",
            userOauth2Settings: "Oauth2 Settings",
            roleAddressConfig: "Role Address Config",
            unknow: "Mails with unknow receiver",
            senderAccess: "Sender Access Control",
            sendBox: "Send Box",
            telegram: "Telegram Bot",
            webhookSettings: "Webhook Settings",
            statistics: "Statistics",
            maintenance: "Maintenance",
            database: "Database",
            workerconfig: "Worker Config",
            ipBlacklistSettings: "IP Blacklist",
            aiExtractSettings: "AI Extract Settings",
            appearance: "Appearance",
            about: "About",
            ok: "OK",
            mailWebhook: "Mail Webhook",
            adminAccount: "Admin",
            loginMethod: "Login Method",
            loginViaPassword: "Admin Password Login",
            loginViaUserAdmin: "User Admin Permission",
            loginViaDisabledCheck: "Disabled Password Check",
            logout: "Logout",
            logoutConfirmTitle: "Confirm Logout",
            logoutConfirmContent: "Are you sure you want to logout from admin panel?",
            confirm: "Confirm",
            logoutSuccess: "Logout successful"
          },
          zh: {
            accessHeader: "Admin \u5BC6\u7801",
            accessTip: "\u8BF7\u8F93\u5165 Admin \u5BC6\u7801",
            mails: "\u90AE\u4EF6",
            sendMail: "\u53D1\u9001\u90AE\u4EF6",
            qucickSetup: "\u5FEB\u901F\u8BBE\u7F6E",
            account: "\u8D26\u53F7",
            account_create: "\u521B\u5EFA\u8D26\u53F7",
            account_settings: "\u8D26\u53F7\u8BBE\u7F6E",
            user: "\u7528\u6237",
            user_management: "\u7528\u6237\u7BA1\u7406",
            user_settings: "\u7528\u6237\u8BBE\u7F6E",
            userOauth2Settings: "Oauth2 \u8BBE\u7F6E",
            roleAddressConfig: "\u89D2\u8272\u5730\u5740\u914D\u7F6E",
            unknow: "\u65E0\u6536\u4EF6\u4EBA\u90AE\u4EF6",
            senderAccess: "\u53D1\u4EF6\u6743\u9650\u63A7\u5236",
            sendBox: "\u53D1\u4EF6\u7BB1",
            telegram: "\u7535\u62A5\u673A\u5668\u4EBA",
            webhookSettings: "Webhook \u8BBE\u7F6E",
            statistics: "\u7EDF\u8BA1",
            maintenance: "\u7EF4\u62A4",
            database: "\u6570\u636E\u5E93",
            workerconfig: "Worker \u914D\u7F6E",
            ipBlacklistSettings: "IP \u9ED1\u540D\u5355",
            aiExtractSettings: "AI \u63D0\u53D6\u8BBE\u7F6E",
            appearance: "\u5916\u89C2",
            about: "\u5173\u4E8E",
            ok: "\u786E\u5B9A",
            mailWebhook: "\u90AE\u4EF6 Webhook",
            adminAccount: "\u7BA1\u7406\u5458",
            loginMethod: "\u767B\u5F55\u65B9\u5F0F",
            loginViaPassword: "Admin \u5BC6\u7801\u767B\u5F55",
            loginViaUserAdmin: "\u7528\u6237\u7BA1\u7406\u5458\u6743\u9650",
            loginViaDisabledCheck: "\u5DF2\u7981\u7528\u5BC6\u7801\u68C0\u67E5",
            logout: "\u9000\u51FA\u767B\u5F55",
            logoutConfirmTitle: "\u786E\u8BA4\u9000\u51FA",
            logoutConfirmContent: "\u786E\u5B9A\u8981\u9000\u51FA\u7BA1\u7406\u5458\u9762\u677F\u5417\uFF1F",
            confirm: "\u786E\u8BA4",
            logoutSuccess: "\u9000\u51FA\u6210\u529F"
          }
        }
      }), w = xe(() => !p.value || r.value), N = f(""), K = xe(() => !!d.value), D = xe(() => d.value ? u("loginViaPassword") : s.value.is_admin ? u("loginViaUserAdmin") : y.value.disableAdminPasswordCheck ? u("loginViaDisabledCheck") : "");
      return le(async () => {
        s.value.user_id || await P.getUserSettings(g);
      }), (A, I) => {
        const q = pe, W = O, k = Ee, $ = zt, B = Bt, Y = Le, se = ut, _e = Ve, S = de;
        return a(s).fetched ? (E(), Q("div", Hl, [
          e(k, {
            show: w.value,
            "onUpdate:show": I[1] || (I[1] = (R) => w.value = R),
            closable: false,
            closeOnEsc: false,
            maskClosable: false,
            preset: "dialog",
            title: a(u)("accessHeader")
          }, {
            action: t(() => [
              e(W, {
                onClick: x,
                type: "primary",
                loading: a(n)
              }, {
                default: t(() => [
                  m(o(a(u)("ok")), 1)
                ]),
                _: 1
              }, 8, [
                "loading"
              ])
            ]),
            default: t(() => [
              M("p", null, o(a(u)("accessTip")), 1),
              e(q, {
                value: N.value,
                "onUpdate:value": I[0] || (I[0] = (R) => N.value = R),
                type: "password",
                "show-password-on": "click"
              }, null, 8, [
                "value"
              ])
            ]),
            _: 1
          }, 8, [
            "show",
            "title"
          ]),
          a(p) ? (E(), X(B, {
            key: 0,
            type: "card",
            value: a(l),
            "onUpdate:value": I[3] || (I[3] = (R) => ot(l) ? l.value = R : null),
            placement: a(v)
          }, {
            default: t(() => [
              e($, {
                name: "qucickSetup",
                tab: a(u)("qucickSetup")
              }, {
                default: t(() => [
                  e(B, {
                    type: "bar",
                    "justify-content": "center",
                    animated: ""
                  }, {
                    default: t(() => [
                      e($, {
                        name: "database",
                        tab: a(u)("database")
                      }, {
                        default: t(() => [
                          e(Ct)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "account_settings",
                        tab: a(u)("account_settings")
                      }, {
                        default: t(() => [
                          e(wt)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "user_settings",
                        tab: a(u)("user_settings")
                      }, {
                        default: t(() => [
                          e(kt)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "workerconfig",
                        tab: a(u)("workerconfig")
                      }, {
                        default: t(() => [
                          e(At)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, [
                "tab"
              ]),
              e($, {
                name: "account",
                tab: a(u)("account")
              }, {
                default: t(() => [
                  e(B, {
                    type: "bar",
                    "justify-content": "center",
                    animated: ""
                  }, {
                    default: t(() => [
                      e($, {
                        name: "account",
                        tab: a(u)("account")
                      }, {
                        default: t(() => [
                          e(Ka)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "account_create",
                        tab: a(u)("account_create")
                      }, {
                        default: t(() => [
                          e(Qa)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "account_settings",
                        tab: a(u)("account_settings")
                      }, {
                        default: t(() => [
                          e(wt)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "senderAccess",
                        tab: a(u)("senderAccess")
                      }, {
                        default: t(() => [
                          e(Ba)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "ipBlacklistSettings",
                        tab: a(u)("ipBlacklistSettings")
                      }, {
                        default: t(() => [
                          e(ql)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "aiExtractSettings",
                        tab: a(u)("aiExtractSettings")
                      }, {
                        default: t(() => [
                          e(Wl)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "webhook",
                        tab: a(u)("webhookSettings")
                      }, {
                        default: t(() => [
                          e(Dl)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, [
                "tab"
              ]),
              e($, {
                name: "user",
                tab: a(u)("user")
              }, {
                default: t(() => [
                  e(B, {
                    type: "bar",
                    "justify-content": "center",
                    animated: ""
                  }, {
                    default: t(() => [
                      e($, {
                        name: "user_management",
                        tab: a(u)("user_management")
                      }, {
                        default: t(() => [
                          e(rl)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "user_settings",
                        tab: a(u)("user_settings")
                      }, {
                        default: t(() => [
                          e(kt)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "userOauth2Settings",
                        tab: a(u)("userOauth2Settings")
                      }, {
                        default: t(() => [
                          e(_l)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "roleAddressConfig",
                        tab: a(u)("roleAddressConfig")
                      }, {
                        default: t(() => [
                          e(gl)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, [
                "tab"
              ]),
              e($, {
                name: "mails",
                tab: a(u)("mails")
              }, {
                default: t(() => [
                  e(B, {
                    type: "bar",
                    "justify-content": "center",
                    animated: ""
                  }, {
                    default: t(() => [
                      e($, {
                        name: "mails",
                        tab: a(u)("mails")
                      }, {
                        default: t(() => [
                          e(yl)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "unknow",
                        tab: a(u)("unknow")
                      }, {
                        default: t(() => [
                          e(kl)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "sendBox",
                        tab: a(u)("sendBox")
                      }, {
                        default: t(() => [
                          e(qa)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "sendMail",
                        tab: a(u)("sendMail")
                      }, {
                        default: t(() => [
                          e(a(c))
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "mailWebhook",
                        tab: a(u)("mailWebhook")
                      }, {
                        default: t(() => [
                          e(Rl)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, [
                "tab"
              ]),
              e($, {
                name: "telegram",
                tab: a(u)("telegram")
              }, {
                default: t(() => [
                  e(Tl)
                ]),
                _: 1
              }, 8, [
                "tab"
              ]),
              e($, {
                name: "statistics",
                tab: a(u)("statistics")
              }, {
                default: t(() => [
                  e(Oa)
                ]),
                _: 1
              }, 8, [
                "tab"
              ]),
              e($, {
                name: "maintenance",
                tab: a(u)("maintenance")
              }, {
                default: t(() => [
                  e(B, {
                    type: "bar",
                    "justify-content": "center",
                    animated: ""
                  }, {
                    default: t(() => [
                      e($, {
                        name: "database",
                        tab: a(u)("database")
                      }, {
                        default: t(() => [
                          e(Ct)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "workerconfig",
                        tab: a(u)("workerconfig")
                      }, {
                        default: t(() => [
                          e(At)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "maintenance",
                        tab: a(u)("maintenance")
                      }, {
                        default: t(() => [
                          e(Al)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, [
                "tab"
              ]),
              e($, {
                name: "appearance",
                tab: a(u)("appearance")
              }, {
                default: t(() => [
                  e(ua)
                ]),
                _: 1
              }, 8, [
                "tab"
              ]),
              e($, {
                name: "adminAccount",
                tab: a(u)("adminAccount")
              }, {
                default: t(() => [
                  M("div", Kl, [
                    e(S, {
                      style: {
                        width: "600px"
                      }
                    }, {
                      default: t(() => [
                        e(_e, {
                          vertical: ""
                        }, {
                          default: t(() => [
                            e(Y, {
                              strong: ""
                            }, {
                              default: t(() => [
                                m(o(a(u)("loginMethod")), 1)
                              ]),
                              _: 1
                            }),
                            e(Y, null, {
                              default: t(() => [
                                m(o(D.value), 1)
                              ]),
                              _: 1
                            }),
                            K.value ? (E(), X(se, {
                              key: 0
                            })) : Z("", true),
                            K.value ? (E(), X(W, {
                              key: 1,
                              type: "warning",
                              onClick: I[2] || (I[2] = (R) => C.value = true),
                              block: ""
                            }, {
                              default: t(() => [
                                m(o(a(u)("logout")), 1)
                              ]),
                              _: 1
                            })) : Z("", true)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }, 8, [
                "tab"
              ]),
              e($, {
                name: "about",
                tab: a(u)("about")
              }, {
                default: t(() => [
                  e(da)
                ]),
                _: 1
              }, 8, [
                "tab"
              ])
            ]),
            _: 1
          }, 8, [
            "value",
            "placement"
          ])) : Z("", true),
          e(k, {
            show: C.value,
            "onUpdate:show": I[4] || (I[4] = (R) => C.value = R),
            preset: "dialog",
            title: a(u)("logoutConfirmTitle")
          }, {
            action: t(() => [
              e(W, {
                loading: a(n),
                onClick: L,
                size: "small",
                tertiary: "",
                type: "warning"
              }, {
                default: t(() => [
                  m(o(a(u)("confirm")), 1)
                ]),
                _: 1
              }, 8, [
                "loading"
              ])
            ]),
            default: t(() => [
              M("p", null, o(a(u)("logoutConfirmContent")), 1)
            ]),
            _: 1
          }, 8, [
            "show",
            "title"
          ])
        ])) : Z("", true);
      };
    }
  };
  Ql = ee(Gl, [
    [
      "__scopeId",
      "data-v-ef349626"
    ]
  ]);
});
export {
  __tla,
  Ql as default
};

import { G as h, H as g, w, O as D, E as v, S as a, ab as d, Q as s, ae as p, l as M, M as b, aJ as x, a5 as T, aK as k, D as i, P as l, ac as N, V as n, R as c, aL as O, F as S } from "./index-rOHOLR3M.js";
const V = { class: "center" }, B = ["srcdoc"], I = { __name: "Mail", setup(C) {
  const { telegramApp: r, loading: _, useUTCDate: f } = g(), m = k(), e = M({});
  w(r, async () => {
    r.value.initData && (e.value = await u());
  });
  const u = async () => {
    try {
      const t = await b.fetch("/telegram/get_mail", { method: "POST", body: JSON.stringify({ initData: r.value.initData, mailId: m.query.mail_id }) });
      return _.value = true, await x(t);
    } catch (t) {
      return console.error(t), {};
    } finally {
      _.value = false;
    }
  };
  return D(async () => {
    e.value = await u();
  }), (t, E) => {
    const o = N, y = T;
    return i(), v("div", V, [a(e).message ? (i(), d(y, { key: 0, bordered: false, embedded: "", style: { "max-width": "800px", height: "100%" } }, { default: s(() => [l(o, { type: "info" }, { default: s(() => [n(" ID: " + c(a(e).id), 1)]), _: 1 }), l(o, { type: "info" }, { default: s(() => [n(" Date: " + c(a(O)(a(e).created_at, a(f))), 1)]), _: 1 }), l(o, { type: "info" }, { default: s(() => [n(" FROM: " + c(a(e).source), 1)]), _: 1 }), t.showEMailTo ? (i(), d(o, { key: 0, type: "info" }, { default: s(() => [n(" TO: " + c(a(e).address), 1)]), _: 1 })) : p("", true), S("iframe", { srcdoc: a(e).message, style: { "margin-top": "10px", width: "100%", height: "100%" } }, null, 8, B)]), _: 1 })) : p("", true)]);
  };
} }, F = h(I, [["__scopeId", "data-v-5ff036bb"]]);
export {
  F as default
};

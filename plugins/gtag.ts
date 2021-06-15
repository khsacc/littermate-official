// この変数はvercel上（すなわちサーバー上）のProduction環境にのみ置くので、開発環境やPreview DeployではAnalyticsが無効になる。
export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

// IDが取得できない場合を想定する
export const isGaIdSet = () => GA_ID !== "";

// 開発環境でのデバッグ用
export const isDev = () => process.env.DEV === "true";

// PVを測定する
export const pageView = (path: string) => {
  isDev() && console.log(`ga-page-view__${path}`);
  window.gtag("config", GA_ID, {
    page_path: path,
  });
};

// GAイベントを発火させる
export const event = ({ action, category, label, value = "" }) => {
  isDev() &&
    console.log(
      `ga-event__${action}: category-${category}, label-${label}, value-${value}`
    );
  window.gtag("event", action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value,
  });
};

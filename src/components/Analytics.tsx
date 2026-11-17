import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_ID = import.meta.env.VITE_GA_ID as string | undefined;
const CLARITY_ID = import.meta.env.VITE_CLARITY_ID as string | undefined;

function addScript(src: string) {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

let loaded = false;
function load() {
  if (loaded) return;
  loaded = true;
  if (GA_ID) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID, { send_page_view: false });
    addScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`);
  }
  if (CLARITY_ID) {
    addScript(`https://www.clarity.ms/tag/${CLARITY_ID}`);
  }
}

/** Loads GA4 / Clarity when VITE_GA_ID / VITE_CLARITY_ID are set at build time, and tracks SPA page views. */
const Analytics = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    load();
    window.gtag?.("event", "page_view", {
      page_path: pathname + search,
      page_location: window.location.href,
    });
  }, [pathname, search]);

  return null;
};

export default Analytics;

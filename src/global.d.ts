interface WebApp {
  initData?: string;
  platform?: string;
  expand?: () => void;
  ready?: () => void;
}

interface Telegram {
  WebApp: WebApp;
}

interface Window {
  Telegram: Telegram;
}

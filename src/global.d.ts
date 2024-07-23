interface WebApp {
  initData?: string;
  platform?: string;
}

interface Telegram {
  WebApp: WebApp;
}

interface Window {
  Telegram: Telegram;
}

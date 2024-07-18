interface WebApp {
  initData?: string;
}

interface Telegram {
  WebApp: WebApp;
}

interface Window {
  Telegram: Telegram;
}

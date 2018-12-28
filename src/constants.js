export const ADDON_NAME = 'User-Agent Switcher';
export const DECORATOR_NAME = 'withUASwitcher';
export const ADDON_ID = 'storybook-addon-ua';
export const PANEL_ID = `${ADDON_ID}/panel`;
export const DECORATOR_PARAMETER_NAME = 'ua';
export const SB_IFRAME = 'storybook-preview-iframe';
export const STORY_UA_CHANGED = 'addon:ua:uaChanged';
export const UPDATE_STORY_UA_EVENT = 'addon:ua:updateStoryUA';

export const DEFAULT_UA = 'chromeMac';
export const UA_LIST = {
  chromeMac: {
    name: 'Chrome (69.0) - Mac',
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36 ',
  },
  android4: {
    name: 'Android (4.0.2) Browser - Galaxy Nexus',
    ua: 'Mozilla/5.0 (Linux; U; Android 4.0.2; en-us; Galaxy Nexus Build/ICL53F) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
  },
  android2: {
    name: 'Android (2.3) Browser - Nexus S',
    ua: 'Mozilla/5.0 (Linux; U; Android 2.3.6; en-us; Nexus S Build/GRK39F) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
  },
  chromeAndroid: {
    name: 'Chrome (69.0) - Android Mobile',
    ua: 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Mobile Safari/537.36',
  },
  chromeAndroidTablet: {
    name: 'Chrome (69.0) - Android Tablet',
    ua: 'Mozilla/5.0 (Linux; Android 4.3; Nexus 7 Build/JSS15Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
  },
  chromeIPhone: {
    name: 'Chrome (69.0) - iPhone',
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1 (KHTML, like Gecko) CriOS/69.0.3497.100 Mobile/13B143 Safari/601.1.46',
  },
  firefoxAndroid: {
    name: 'Firefox (46.0) - Android Mobile',
    ua: 'Mozilla/5.0 (Android 4.4; Mobile; rv:46.0) Gecko/46.0 Firefox/46.0',
  },
  firefoxWindows: {
    name: 'Firefox (46.0) - Windows',
    ua: 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:46.0) Gecko/20100101 Firefox/46.0',
  },
  safariIPhone: {
    name: 'Safari - iPhone iOS 9',
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B137 Safari/601.1',
  },
};

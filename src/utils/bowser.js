import bowser from 'bowser';
import { SB_IFRAME } from '../constants';

const isStorybook = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  const iframe = window.frameElement;

  return iframe && iframe.id === SB_IFRAME;
};

// identify current environment is storybook or not
// if not, we use original package
// if so, we redefine the getter for detecting user-agent when we call getter
if (isStorybook()) {
  Object.entries({
    // Since bowser will only return certain properties and result from UA detect,
    // for redefining all properties' getter like mobile, tablet,
    // manually declared here
    mobile: false,
    tablet: false,
    mac: false,
    windows: false,
    chrome: false,
    firefox: false,
    msie: false,
    msedge: false,
    android: false,
    ios: false,
    ...bowser._detect(navigator.userAgent),
  }).forEach(([key, value]) =>
    Object.defineProperty(bowser, key, {
      get: function getter() {
        return bowser._detect(navigator.userAgent)[key] || value;
      },
      enumerable: true,
      configurable: true,
    })
  );
}

export default bowser;

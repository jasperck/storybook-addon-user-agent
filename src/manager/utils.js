export const createDefineUAGetterScript = (ua) => {
  let script = document.createElement('script');

  script.textContent = `(function() { navigator.__defineGetter__('userAgent', () => '${ua}'); })()`;

  return script;
};

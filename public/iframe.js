const Iframe = () => {
  const element = document.createElement('iframe');

  const initAndAppend = ({ onLoad }) => {
    element.addEventListener('load', onLoad);

    setupAttributes();
    setupUrl();
    document.body.appendChild(element);
  };

  const show = () => {
    element.style.cssText = element.style.cssText
      .replace(
        'visibility: hidden !important;',
        'visibility: visible !important;'
      )
      .replace('display: none !important;', 'display: block !important;');

    element.contentWindow.focus();
  };

  const hide = () => {
    element.style.cssText = element.style.cssText
      .replace(
        'visibility: visible !important;',
        'visibility: hidden !important;'
      )
      .replace('display: block !important;', 'display: none !important;');

    element.contentWindow.blur();
  };

  const setupAttributes = () => {
    const style = `
    background-attachment: unset !important;
    background-origin: unset !important;
    background-clip: unset !important;
    background-color: transparent !important;
    border: none !important;
    overflow: hidden !important;
    margin: 0px !important;
    padding: 0px !important;
    position: fixed !important;
    right: 0px !important;
    top: 10% !important;
    width: 100% !important;
    height: 90% !important;
    z-index: 999999999999999 !important;
    visibility: hidden !important;
  `;

    element.setAttribute('frameBorder', '0');
    element.setAttribute('allowtransparency', 'true');
    element.setAttribute('scrolling', 'no');
    element.setAttribute('style', style);
    element.id = 'poc-iframe';
  };

  const setupUrl = () => {
    element.src = `http://yoursite.domain.com:3000`;
  };

  return { initAndAppend, element, show, hide };
};

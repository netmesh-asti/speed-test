(async function () {
  const speedTestConnectionInfo = {
    client: {
      ispName: '',
      ipAddress: '',
    },
    testServer: {
      name: '',
      city: '',
      ipAddress: ''
    }
  }

  window.addEventListener('offline', (e) => { console.log('network-status', 'offline', e); });
  window.addEventListener('online', (e) => { console.log('network-status', 'online', e); });

  const networkConnectionType = navigator.connection.type;

  const startButton = document.getElementById('startButtonDesk');
  const buttonToGaugeGroup = document.getElementById('button-to-gauge-group');
  
  startButton.onmouseenter = function () {
    buttonToGaugeGroup.classList.add('hover');
  }
  startButton.onmouseleave = function () {
    buttonToGaugeGroup.classList.remove('hover');
    buttonToGaugeGroup.style.scale = '1 1';
    buttonToGaugeGroup.style.translate = '0 0';
    buttonToGaugeGroup.style.opacity = 1;
  }
  startButton.onmousedown = function (e) {
    if (e.button !== 0) return;

    buttonToGaugeGroup.style.opacity = 0.75;
    buttonToGaugeGroup.style.scale = '0.98 0.98';
    buttonToGaugeGroup.style.translate = '1% 1%';
  }
  startButton.onmouseup = function (e) {
    if (e.button !== 0) return;

    buttonToGaugeGroup.style.opacity = 1;
    buttonToGaugeGroup.style.scale = '1 1';
    buttonToGaugeGroup.style.translate = '0 0';
  }
})(window, document, 'script', 'dataLayer', 'GTM-TNQCBKZ');

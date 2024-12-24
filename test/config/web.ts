export const getWebCapabilities = function (
    isHeadless: boolean,
  ): WebdriverIO.ServiceOption {
    return {
      args: isHeadless
        ? [
            'disable-dev-shm-usage',
            'disable-extensions',
            'disable-gpu',
            'disable-infobars',
            'headless',
            'ignore-certificate-errors',
            'no-sandbox',
            'window-size=1920,1080',
            '--disable-site-isolation-trials',
            '--incognito',
          ]
        : [
            'disable-dev-shm-usage',
            'disable-extensions',
            'disable-gpu',
            'disable-infobars',
            'ignore-certificate-errors',
            'no-sandbox',
            'window-size=1920,1080',
            '--disable-site-isolation-trials',
            '--incognito',
          ],
    };
  };

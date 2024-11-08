import {
    elementToBeEnabled,
    numberOfElementsToBeLessThan,
    numberOfElementsToBeMoreThan,
    titleContains,
    urlContains,
    visibilityOf,
  } from  'wdio-wait-for';
import { ELEMENT_TYPES } from './common';

export async function waitUrlContains(url: string) {
    await browser.waitUntil(urlContains(url), {
      timeoutMsg: `expected url is not matching actual:  ${await browser.getUrl()} expected: ${url}`,
    });
    await waitPageToLoad();
  }
  export async function waitPageToLoad(title?: string): Promise<void> {
    await browser.waitUntil(
      () => browser.execute(() => document.readyState === 'complete'),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: 'Message on failure',
      },
    );
  }
  export async function waitElementIsVisible(
    element:
      | WebdriverIO.Element
      | Promise<WebdriverIO.Element>
      | WebdriverIO.ElementArray
      | Promise<WebdriverIO.ElementArray>,
  ) {
    await browser.waitUntil(visibilityOf(String((await element).selector)));
  }
  // export const clickAndWait = async function (
  //   element: ChainablePromiseElement < WebdriverIO.Element>, 
  // ): Promise<void> {
  //   const elem = await element;
  //   await waitElementIsVisible(elem);
  //   await elem.waitForClickable();
  //   if (!(await elem.isDisplayed()) && (await elem.isExisting())) {
  //     await elem.scrollIntoView();
  //   }
  //   await elem.click();
  //   await waitPageToLoad();
  // };
 
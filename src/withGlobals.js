/* eslint-env browser */
import { useEffect, useGlobals, useParameter } from "@storybook/addons";
import { PARAM_KEY } from "./constants";

export const withGlobals = (StoryFn) => {
  const [{ selectedStylesheetID }, updateGlobals] = useGlobals();

  const { stylesheets = [] } = useParameter(PARAM_KEY, {});
  const selectedStylesheet = stylesheets.find((s) => s.id === selectedStylesheetID);

  useEffect(() => {
    if (selectedStylesheet) {
      updateStylesheet(selectedStylesheet.url, selectedStylesheetID);
    }
  }, [selectedStylesheetID]);

  return StoryFn();
};

function updateStylesheet(url, selectedStylesheetID) {
  const headEl = document.querySelector('head');
  let stylesheetEl = document.querySelector('link[data-toggle]');

  if (!stylesheetEl) {
    stylesheetEl = document.createElement("link");
    stylesheetEl.rel = 'stylesheet';
    stylesheetEl.dataset.toggle = true;
    headEl.appendChild(stylesheetEl);
  }
  
  if (stylesheetEl.id !== selectedStylesheetID) stylesheetEl.id = selectedStylesheetID;
  stylesheetEl.href = url;
}

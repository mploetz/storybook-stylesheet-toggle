import React, { useCallback } from "react";
import { useGlobals, useParameter } from "@storybook/api";
import { Icons, IconButton, WithTooltip, TooltipLinkList } from "@storybook/components";
import { TOOL_ID, PARAM_KEY } from "./constants";

/**
 * Structures the list of stylesheets for rendering in the tooltip.
 *
 * @param {*} list
 * @param {*} set
 * @param {*} state
 * @param {*} close
 * @returns
 */
const generateLinkList = (list, set, current, close) => {
  return list
    .map((i) => {
      return {
        ...i,
        onClick: () => {
          set(i.id);
          close();
        },
        active: i.id === current,
      };
    });
}

export const Tool = () => {
  const [{ selectedStylesheetID }, updateGlobals] = useGlobals();

  const { stylesheets = [] } = useParameter(PARAM_KEY, {});

  const updateSelectedStylesheet = useCallback(
    (id) =>
      updateGlobals({
        selectedStylesheetID: id,
      }),
    [selectedStylesheetID]
  );

  if (stylesheets.length && !selectedStylesheetID) {
    updateSelectedStylesheet(stylesheets[0].id);
  }

  return (
    stylesheets.length ?
    <WithTooltip
      placement="top"
      trigger="click"
      tooltip={({ onHide }) => (
        <TooltipLinkList links={generateLinkList(stylesheets, updateSelectedStylesheet, selectedStylesheetID, onHide)} />
      )}
      closeOnClick
      >
      <IconButton
        key={TOOL_ID}
        title="Toggle stylesheet"
      >
        <Icons icon="paintbrush" />
      </IconButton>
    </WithTooltip>
    : ''
  );
};

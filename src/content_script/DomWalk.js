import getVisibleText from "./getVisibleText";
import translateString from "./translateString";
import _ from "lodash";

const DomWalk = element => {
  const visibleText = getVisibleText(element);
  const trimmedText = _.trim(visibleText);
  if (visibleText && trimmedText)
    element.nodeValue = translateString(trimmedText);
  if (element.children.length > 0)
    Array.from(element.children).forEach(child => DomWalk(child));
};

export default DomWalk;

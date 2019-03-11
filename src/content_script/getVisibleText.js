const getVisibleText = element => {
  if (element.tagName === "BODY") return false;
  if (element.tagName === "SCRIPT") return false;
  if (element.tagName === "NOSCRIPT") return false;
  if (element.tagName === "STYLE") return false;
  if (element.childNodes.length === 0) return false;
  const visibleText = element.childNodes[0].nodeValue;
  return visibleText;
};

export default getVisibleText;

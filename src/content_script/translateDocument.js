import _ from 'lodash'
import getVisibleText from './getVisibleText'

const walkDOM = (element, setTranslationID, DOMNodesWithVisibleText) => {
  const visibleText = getVisibleText(element)
  const trimmedText = _.trim(visibleText)
  if (visibleText && trimmedText) {
    const translationID = setTranslationID(element)
    DOMNodesWithVisibleText.push({id: translationID, text: visibleText})
  }
  if (element.children.length > 0) {
    Array.from(element.children).forEach(child =>
      walkDOM(child, setTranslationID, DOMNodesWithVisibleText)
    )
  }
}

(async () => {
  let count = 0
  const setTranslationID = element => {
    const translationID = 'translateOnSiteInsertedID' + count++
    element.setAttribute('translationID', translationID)
    return translationID
  }
  let DOMNodesWithVisibleText = []
  walkDOM(document.body, setTranslationID, DOMNodesWithVisibleText)

  const visibleTextList = DOMNodesWithVisibleText.map(element => element.text)
  const elementsWithVisibleText = DOMNodesWithVisibleText.map(element => element.id)

  let reqObject = {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
      target: 'es',
      visibleTextList
    })
  }

  const res = await fetch('http://localhost:3000/translate', reqObject)
  const translatedList = await res.json()

  _.zip(elementsWithVisibleText, translatedList).forEach(element => {
    document.querySelector('[translationID=' + element[0] + ']').childNodes[0].nodeValue = element[1]
  })
})()

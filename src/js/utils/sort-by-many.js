export default (list, attributes, options = {}) => {
  const {
    caseSensitive = false,
    localized = true
  } = options;
  const reversedAttributes = [ ...attributes ].reverse();
  const attributeGetterCreator = caseSensitive ? createAttributeGetter : createLowerCaseAttributeGetter;
  const attributeComparatorCreator = localized ? createLocaleAttributeComparator : createAttributeComparator;

  return reversedAttributes.reduce(
    (sortedList, attribute) => sortedList.sort(attributeComparatorCreator(attributeGetterCreator(attribute))),
    [ ...list ]
  );
};

const createAttributeGetter = (attribute) =>
  (item) => item[attribute];

const createLowerCaseAttributeGetter = (attribute) =>
  (item) => item[attribute].toLowerCase();

const createLocaleAttributeComparator = (attributeGetter) =>
  (item1, item2) => attributeGetter(item1).localeCompare(attributeGetter(item2), 'pl');

const createAttributeComparator = (attributeGetter) =>
  (item1, item2) => attributeGetter(item1) < attributeGetter(item2);

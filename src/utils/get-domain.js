export default (url) => {
  if (!url) {
    return '';
  }
  const domainRegExp = /(https?:\/\/[^/]*)/;
  return url.match(domainRegExp)[0];
};

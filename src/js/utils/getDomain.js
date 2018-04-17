export default function getDomain(url) {
  if(!url) {
    return '';
  }
  const domainRegExp = /(https?:\/\/[^/]*)/;
  return url.match(domainRegExp)[0];
}

const linkedStylesheets = document.querySelectorAll('link[rel="stylesheet"]');
const timestamp = new Date().getTime();

function removeQueryParam(url) {
  if (url) {
    return url.split('?')[0];
  }
}

function main() {
  for (const linkedStylesheet of linkedStylesheets) {
    const url = removeQueryParam(linkedStylesheet.getAttribute('href'));
    
    if (url) {
      linkedStylesheet.setAttribute('href', `${url}?time=${timestamp}`)
    }
  }
}

main();
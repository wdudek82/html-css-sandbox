const linkedStylesheets = document.querySelectorAll('link[rel="stylesheet"]');
const timestamp = new Date().getTime();

function main() {
  for (const linkedStylesheet of linkedStylesheets) {
    let url = linkedStylesheet.getAttribute('href');
    
    if (url) {
      url = url.split('?')[0];
      linkedStylesheet.setAttribute('href', `${url}?time=${timestamp}`)
    }
  }
}

main();
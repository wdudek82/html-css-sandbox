const mainStyles = document.getElementById('main-styles');
const timestamp = new Date().getTime();

mainStyles.setAttribute('href', `./styles.css?time=${timestamp}`)

console.log('=== main styles:', mainStyles.getAttribute('href'));
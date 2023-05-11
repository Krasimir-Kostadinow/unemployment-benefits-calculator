( () => {
// Define routes and their associated functions
const routes = {
    '/unemployment-benefits-calculator/': home,
    '/unemployment-benefits-calculator/about': about,
    '/unemployment-benefits-calculator/contact': contact
  };
  
  // Define the functions to be executed for each route
  function home() {
    console.log('Home page');
  }
  
  function about() {
    console.log('About page');
  }
  
  function contact() {
    console.log('Contact page');
  }
  
  // Parse the URL and execute the corresponding function
  function router() {
    // Get the current URL and extract the path
    const path = window.location.pathname;
    // Check if the path is defined in the routes object
    if (routes[path]) {
      // Call the associated function
      routes[path]();
    } else {
      // Display a 404 error message if the path is not found
      console.log('404 Page Not Found');
    }
  }
  
  // Call the router function on page load and on URL change
  window.addEventListener('load', router);
  window.addEventListener('popstate', router);
  
})();
var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "Banda";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "Nyakundi"; // Will throw an error
}




// fonction de validation du numéro de carte de crédit
function validateCardNumber(cardNumber) {
  var regex = /^[0-9]{16}$/;
  return regex.test(cardNumber);
}
// fonction de validation de la date d'expiration
function validateExpiryDate(expiryDate) {
  var regex = /^((0[1-9])|(1[0-2]))\/([0-9]{2})$/;
  return regex.test(expiryDate);
}
// fonction de validation du CVV
function validateCVV(cvv) {
  var regex = /^[0-9]{3}$/;
  return regex.test(cvv);
}
// fonction de validation du formulaire de paiement
function validatePaymentForm() {
  var cardNumber = document.getElementById("card-number").value;
  var cardName = document.getElementById("card-name").value;
  var expiryDate = document.getElementById("expiry-date").value;
  var cvv = document.getElementById("cvv").value;

  if (!validateCardNumber(cardNumber)) {
    alert("Numéro");
}

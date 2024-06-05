function convertCurrency() {
    var fromCurrency = parseFloat(document.getElementById('fromCurrency').value);
    if (isNaN(fromCurrency)) {
      alert('Пожалуйста, введите корректную сумму.');
      return;
    }
  
    // Курс обмена USD к UZS (примерный)
    var exchangeRate = 12700; // 1 доллар = 12700 узбекских сумов (примерно)
  
    var toCurrency = fromCurrency * exchangeRate;
  
    document.getElementById('toCurrency').value = toCurrency;
  }
  
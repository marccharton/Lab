function duplicateCount(text){
  var foundChar = {},
      current = '',
      result = 0;

  for (var i = 0; i < text.length; i++) {
    current = text.charAt(i).toLowerCase();
    if (!(current in foundChar)) {
      foundChar[current] = 0;
    }
    foundChar[current]++;
  }

  for (var index in foundChar) {
    if (foundChar[index] > 1)
      result++;
  }

  return result;
}
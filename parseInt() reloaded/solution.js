function parseInt(string) {
    let numbers = {
      'zero': 0,
      'one': 1,
      'two': 2,
      'three': 3,
      'four': 4,
      'five': 5,
      'six': 6,
      'seven': 7,
      'eight': 8,
      'nine': 9,
      'ten': 10,
      'eleven': 11,
      'twelve': 12,
      'thirteen': 13,
      'fourteen': 14,
      'fifteen': 15,
      'sixteen': 16,
      'seventeen': 17,
      'eighteen': 18,
      'nineteen': 19,
      'twenty': 20,
      'thirty': 30,
      'forty': 40,
      'fifty': 50,
      'sixty': 60,
      'seventy': 70,
      'eighty': 80,
      'ninety': 90,
      'hundred': 100,
      'thousand': 1000,
      'million': 1000000,
    }
    
    let result = 0;
    string = string
      .replace(/\band\b/gm, '')
      .replace(/\s+/gm, ' ')
      .split(' ')
      .map((el) => {
        if (numbers[el] != undefined)
          return numbers[el]
        else if(el.includes('-')) {
          let nums = el.split('-');
          el = 0;
          for (let n of nums) el += numbers[n];
          return el;
        }
        else return el;
      });
    
    string.forEach((el, i) => {
      if(el > 99 && el < 1000)
        result += (string[i - 1] || 1) * el;
      else if(string[i+1] && string[i+1] > 99 && string[i+1] < 1000);
      else if(el > 999) result = result * el;
      else result += el;
    });
    
    return result;
  }
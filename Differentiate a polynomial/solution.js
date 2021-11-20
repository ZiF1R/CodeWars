function differentiate(equation, point){
    equation = equation
      .replace(/[+-]\d+$/gm, '')
      .replace(/([+-]*)(\d+)*x$/gm, (match, sign, num) => `${sign}${num || 1}`)
      .replace(/(\d+)*x\^(\d+)/gm, (match, num, pow) => `${(num || 1)*pow*(point**(pow-1))}`)
      .replace(/([+-])([+-])/gm, (match, sign1, sign2) =>`${sign1 == sign2 ? '+' : '-'}`);
    
    while (equation.match(/([-]*\d+)([+-]\d+)/gm)) {
      equation = equation
        .replace(/([-]*\d+)([+-]\d+)/gm, (match, a, b) => `${+a + +b}`);
    }
  
    return +equation;
  }
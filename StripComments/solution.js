function solution(input, markers) {
  let lines = input.split('\n');
  
  let reg = "(.+)([";
  for(let marker of markers) reg += marker;
  reg += "])(.+)";
  let regex = new RegExp(reg, 'g');
  
  for(let i = 0; i < lines.length; i++)
    lines[i] = lines[i].replace(regex, "$1").trim();
  return lines.join("\n");
};
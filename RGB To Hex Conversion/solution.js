function rgb(r, g, b){
  let rgb = [r, g, b];
  let hex = "";
  for(let i = 0; i < rgb.length; i++) {
    if(rgb[i] <= 0) hex += "00";
    else if(rgb[i] >= 255) hex += "ff";
    else if(rgb[i].toString(16).length == 1)
      hex += "0" + rgb[i].toString(16);
    else hex += rgb[i].toString(16);
  }
  return hex.toUpperCase();
}
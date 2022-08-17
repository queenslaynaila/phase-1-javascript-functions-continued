function saturdayFun(defaultActivity) {
  if (defaultActivity === "bathe my dog") {
    return `This Saturday, I want to ${defaultActivity}!`;
  } else {
    return "This Saturday, I want to roller-skate!";
  }
}

console.log(saturdayFun());

function mondayWork(work) {
  if (work === "work from home") {
    return `This Monday, I will ${work}.`;
  } else {
    return "This Monday, I will go to the office.";
  }
}

console.log(mondayWork());

function wrapAdjective(symbol,emphatic) { 
    if (symbol === "*") {
        return `You are *${emphatic}*!`
    } else if (symbol === "||") {
        return `You are ${symbol}${emphatic}${symbol}!`
    }
}

console.log(wrapAdjective("||" , "a dedicated programmer"))


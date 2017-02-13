$(document).ready(function() {
  // Array that holds the entire expression.
  var expr = [];
  // String that holds the current value being compiled.
  var value1 = "";
  // Click function for each digit key, 0-9.
  $(".1").on("click", function() {
    // If expr already holds an answer and a digit is clicked, clear expr and start a new expr.
    if (typeof expr[0] === "number" && expr.length === 1) {
      expr = [];
    }
    // Push the digit into expr and current value if the current value's length is less than 12 digits.
    // Prevents mulitple 0's at the beginning of the current value.
    if (value1 === "0") {
      value1 = "1";
      expr.pop();
      expr.push("1");
    } else if (value1.length < 12) {
      expr.push("1");
      value1 = value1 + "1";
    }
    // The total expression displayed.
    $(".expression").html(expr);
    // The current value displayed.
    $(".answer").html(value1);
  })
  $(".2").on("click", function() {
    if (typeof expr[0] === "number" && expr.length === 1) {
      expr = [];
    }
    if (value1 === "0") {
      value1 = "2";
      expr.pop();
      expr.push("2");
    } else if (value1.length < 12) {
      expr.push("2");
      value1 = value1 + "2";
    }
    $(".expression").html(expr);
    $(".answer").html(value1);
  })
  $(".3").on("click", function() {
    if (typeof expr[0] === "number" && expr.length === 1) {
      expr = [];
    }
    if (value1 === "0") {
      value1 = "3";
      expr.pop();
      expr.push("3");
    } else if (value1.length < 12) {
      expr.push("3");
      value1 = value1 + "3";
    }
    $(".expression").html(expr);
    $(".answer").html(value1);
  })
  $(".4").on("click", function() {
    if (typeof expr[0] === "number" && expr.length === 1) {
      expr = [];
    }
    if (value1 === "0") {
      value1 = "4";
      expr.pop();
      expr.push("4");
    } else if (value1.length < 12) {
      expr.push("4");
      value1 = value1 + "4";
    }
    $(".expression").html(expr);
    $(".answer").html(value1);
  })
  $(".5").on("click", function() {
    if (typeof expr[0] === "number" && expr.length === 1) {
      expr = [];
    }
    if (value1 === "0") {
      value1 = "5";
      expr.pop();
      expr.push("5");
    } else if (value1.length < 12) {
      expr.push("5");
      value1 = value1 + "5";
    }
    $(".expression").html(expr);
    $(".answer").html(value1);
  })
  $(".6").on("click", function() {
    if (typeof expr[0] === "number" && expr.length === 1) {
      expr = [];
    }
    if (value1 === "0") {
      value1 = "6";
      expr.pop();
      expr.push("6");
    } else if (value1.length < 12) {
      expr.push("6");
      value1 = value1 + "6";
    }
    $(".expression").html(expr);
    $(".answer").html(value1);
  })
  $(".7").on("click", function() {
    if (typeof expr[0] === "number" && expr.length === 1) {
      expr = [];
    }
    if (value1 === "0") {
      value1 = "7";
      expr.pop();
      expr.push("7");
    } else if (value1.length < 12) {
      expr.push("7");
      value1 = value1 + "7";
    }
    $(".expression").html(expr);
    $(".answer").html(value1);
  })
  $(".8").on("click", function() {
    if (typeof expr[0] === "number" && expr.length === 1) {
      expr = [];
    }
    if (value1 === "0") {
      value1 = "8";
      expr.pop();
      expr.push("8");
    } else if (value1.length < 12) {
      expr.push("8");
      value1 = value1 + "8";
    }
    $(".expression").html(expr);
    $(".answer").html(value1);
  })
  $(".9").on("click", function() {
    if (typeof expr[0] === "number" && expr.length === 1) {
      expr = [];
    }
    if (value1 === "0") {
      value1 = "9";
      expr.pop();
      expr.push("9");
    } else if (value1.length < 12) {
      expr.push("9");
      value1 = value1 + "9";
    }
    $(".expression").html(expr);
    $(".answer").html(value1);
  })
  $(".0").on("click", function() {
    if (typeof expr[0] === "number" && expr.length === 1) {
      expr = [];
    }
    if (value1.length < 12 && value1 !== "0") {
      expr.push("0");
      value1 = value1 + "0";
    }
    $(".expression").html(expr);
    $(".answer").html(value1);
  })
  // Click function for the decimal key.
  $(".decimal").on("click", function() {
    if (typeof expr[0] === "number" && expr.length === 1) {
      expr = [];
      // Prevents multiple decimals being added to a value.
    } else if (/[.]/.test(value1) === false && value1.length < 12) {
      expr.push(".");
      $(".expression").html(expr);
      value1 = value1 + ".";
      $(".answer").html(value1);
    }
  })
  // Click function for operator keys.
  $(".add").on("click", function() {
    // Prevents an operator being added after an operator.
    if (expr[expr.length - 1] !== " + " && expr[expr.length - 1] !== " - " && expr[expr.length - 1] !== " * " && expr[expr.length - 1] !== " / " && expr.length > 0) {
      expr.push(" + ");
      $(".expression").html(expr);
      value1 = "";
      $(".answer").html("+");
    }
  })
  $(".subtract").on("click", function() {
    if (expr[expr.length - 1] !== " + " && expr[expr.length - 1] !== " - " && expr[expr.length - 1] !== " * " && expr[expr.length - 1] !== " / " && expr.length > 0) {
      expr.push(" - ");
      $(".expression").html(expr);
      value1 = "";
      $(".answer").html("-");
    }
  })
  $(".multiply").on("click", function() {
    if (expr[expr.length - 1] !== " + " && expr[expr.length - 1] !== " - " && expr[expr.length - 1] !== " * " && expr[expr.length - 1] !== " / " && expr.length > 0) {
      expr.push(" * ");
      $(".expression").html(expr);
      value1 = "";
      $(".answer").html("×");
    }
  })
  $(".divide").on("click", function() {
    if (expr[expr.length - 1] !== " + " && expr[expr.length - 1] !== " - " && expr[expr.length - 1] !== " * " && expr[expr.length - 1] !== " / " && expr.length > 0) {
      expr.push(" / ");
      $(".expression").html(expr);
      value1 = "";
      $(".answer").html("÷");
    }
  })
  // Click function for the equals key.
  $(".enter").on("click", function() {
    // If expr is empty, return.
    if (expr.length === 0) {
      return;
      // If expr ends in an operator and is not a negative number, remove it and display expr.
    } else if (/[+\-*\/]/.test(expr[expr.length - 1]) === true && typeof expr[expr.length-1] !== "number") {
      expr.pop();
      $(".expression").html(expr);
    }
    // Evaluate the expression.
    var str = expr.join("");
    var finalAnswer = eval(str);
    // Store the final answer in expr for later use if needed.
    expr = [finalAnswer];
    value1 = "";
    // If the final answer is larger than 99999999999 or less than -999999999999, display "Limit Reached".
    if (finalAnswer > 999999999999 || finalAnswer < -999999999999) {
      $(".answer").html("Limit Reached");
    } else if (finalAnswer <= 999999999999) {
      // Round the answer to 5 decimal places and display.
      var roundedAnswer = Math.round(100000 * finalAnswer) / 100000;
      $(".answer").html(roundedAnswer);
    }
  })
  // Click function for the all clear key.
  $(".allClear").on("click", function() {
    // Clears both the expression and current value and sets both to 0.
    expr = [];
    value1 = "";
    $(".expression").html("0");
    $(".answer").html("0");
  })
  // Click function for the clear key.
  $(".clear").on("click", function() {
    // If the expression ends in an operator.
    if (/^[0-9.]/.test(expr[expr.length - 1]) === false) {
      // Remove the operator.
      expr.pop();
      // Set value1 back to the value before the operator.
      if (typeof expr[expr.length - 1] === "number") {
        value1 = expr[expr.length - 1].toString();
        expr[0] = value1;
      } else {
        for (var i = expr.length - 1; /^[0-9.]/.test(expr[i]) === true; i--) {
          value1 = value1 + expr[i];
        }
        value1 = value1.split("").reverse().join("");
      }
      // If the entire expression has been cleared set both expression and current value to 0.
      if (expr.length === 0) {
        $(".answer").html("0");
        $(".expression").html("0");
        // Otherwise display the current value and the rest of the expression.
      } else {
        $(".answer").html(value1);
        $(".expression").html(expr);
      }
      // If the expression ends in a digit.
    } else {
      // Clear the entire value and set it back to 0.
      for (var i = expr.length - 1; i >= 0; i--) {
        if (/^[0-9.]/.test(expr[i]) === false) {
          break;
        }
        expr.splice(i, 1);
      }
      value1 = "";
      // If the entire expression has been cleared set both expression and current value to 0.
      if (expr.length === 0) {
        $(".answer").html("0");
        $(".expression").html("0");
        // Otherwise set current value to 0 and display the rest of the expression.
      } else {
        $(".answer").html("0");
        $(".expression").html(expr);
      }
    }
  })
});
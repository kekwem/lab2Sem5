"use strict";
var Utilities;
(function (Utilities) {
    class Calculator {
        CalculateProcess(str) {
            if (this.Check(str)) {
                let action_char = '+-*/';
                let splited_numbers = str.split(/[-\*\+\/]/);
                var numbers = [];
                if (str[0] == '-') {
                    for (let i = 1; i < splited_numbers.length; i++) {
                        if (i == 1) {
                            numbers.push(Number.parseInt('-' + splited_numbers[i]));
                            continue;
                        }
                        numbers.push(Number.parseInt(splited_numbers[i]));
                    }
                }
                else {
                    for (let i = 0; i < splited_numbers.length; i++) {
                        numbers.push(Number.parseInt(splited_numbers[i]));
                    }
                }
                var actions = [];
                for (let i = 0; i < str.length; i++) {
                    if (action_char.includes(str[i]) && i != 0) {
                        actions.push(str[i]);
                    }
                }
                var final_numbers = [];
                final_numbers.push(numbers[0]);
                var final_actions = [];
                var count = 0;
                for (let i = 1; i < numbers.length; i++) {
                    switch (actions[i - 1]) {
                        case '+':
                            final_numbers.push(numbers[i]);
                            final_actions.push('+');
                            count++;
                            break;
                        case '-':
                            final_numbers.push(numbers[i]);
                            final_actions.push('-');
                            count++;
                            break;
                        case '*':
                            final_numbers[count] *= numbers[i];
                            break;
                        case '/':
                            final_numbers[count] /= numbers[i];
                            break;
                    }
                }
                var result = final_numbers[0];
                for (let i = 1; i < final_numbers.length; i++) {
                    switch (final_actions[i - 1]) {
                        case '+':
                            result += final_numbers[i];
                            break;
                        case '-':
                            result -= final_numbers[i];
                            break;
                    }
                }
                return result;
            }
            return 'null';
        }
        Check(str) {
            let action_char = '+-*/';
            for (var char of str) {
                if (isNaN(Number.parseInt(char)) && !action_char.includes(char)) {
                    alert("There is error in the input field!");
                    return false;
                }
            }
            if (action_char.includes(str[str.length - 1]) || (action_char.includes(str[0]) && str[0] != '-')) {
                alert("There is error in the input field!");
                return false;
            }
            for (let i = 0; i < str.length - 1; i++) {
                if (str[i] == str[i + 1] && action_char.includes(str[i])) {
                    alert("There is error in the input field!");
                    return false;
                }
            }
            return true;
        }
    }
    Utilities.Calculator = Calculator;
})(Utilities || (Utilities = {}));

// Calculates if Fizz / Buzz / FizzBuzz
let i = 1;
        while (i < 101) {
            if (i % 3 == 0) {
            
                if (i % 5 == 0) {
                    outputValue = "FizzBuzz";
                }
                else {
                    outputValue = "Fizz";
                }
            } else if (i % 5 == 0) {
                outputValue = "Buzz";
            }
            else {
                outputValue = i;
            }
            i += 1;
            output();
            /* Works, however there's some repetition in the code. */
        }
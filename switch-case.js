// Calculates if Fizz / Buzz / FizzBuzz
let i = 1;
        while (i < 101) {
            switch (true) {
                case ((i % 3 == 0 ) && (i % 5 == 0)):
                    outputValue = "FizzBuzz";
                    break;

                case ((i % 3) == 0):
                    outputValue = "Fizz";
                    break;
                
                case ((i % 5) == 0):
                    outputValue = "Buzz";
                    break;

                default:
                    outputValue = i;
            }
            i += 1;
            output();
        }
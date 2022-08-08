export const NoOutputPositiveTests = [
  // init statement tests
  {
    name: "interpreter empty init statement test, should success",
    input: `
      hi bsdk
      bye bsdk
    `,
  },
  {
    name: "interpreter empty init statement test with random charaters initially, should success",
    input: `
      some random characters
      random random random
      hi bsdk
      bye bsdk
    `,
  },
  // empty statement tests
  {
    name: "interpreter empty statement test, should success",
    input: `
      hi bsdk
      ;
      bye bsdk
    `,
  },
  {
    name: "interpreter multiple empty statements test, should success",
    input: `
      hi bsdk
      ;
      ;
      ;;
      bye bsdk
    `,
  },
  // block statement tests
  {
    name: "interpreter block statement test with empty block, should success",
    input: `
      hi bsdk
      {};
      bye bsdk
    `,
  },
  {
    name: "interpreter block statement test with variable statement inside, should success",
    input: `
      hi bsdk
      {
        bsdk ye hai a = 4;
      }
      bye bsdk
    `,
  },
  // variable statement test
  {
    name: "interpreter variable statement test with basic variable declaration, should success",
    input: `
      hi bsdk
      bsdk ye hai a, b, c;
      bye bsdk
    `,
  },
  {
    name: "interpreter variable statement test with basic variable declaration and initialisation, should success",
    input: `
      hi bsdk
      bsdk ye hai a = 10, b = "crap";
      bye bsdk
    `,
  },
  {
    name: "interpreter variable statement test with multiple variable initialisation, should success",
    input: `
      hi bsdk
      bsdk ye hai a = 10, b = 5;
      bye bsdk
    `,
  },
  {
    name: "interpreter variable statement test with variable initialisation with some expression, should success",
    input: `
      hi bsdk
      bsdk ye hai a = 7 + 90;
      bye bsdk
    `,
  },
  // assignment expression tests
  {
    name: "simple assignment expression test with only one identifer, should success",
    input: `
      hi bsdk
      bsdk ye hai a = sahi;
      a = 4;
      bye bsdk
    `,
  },
  {
    name: "complex assignment expression test with only one identifer, should success",
    input: `
      hi bsdk
      bsdk ye hai a = 2;
      a *= 4;
      bye bsdk
    `,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with one parenthesis and simple expression, should success",
    input: `
      hi bsdk
      bsdk ye hai a = 2;
      (a + 4);
      bye bsdk
    `,
  },
  {
    name: "paranthesized expression test with one parenthesis and complex expression, should success",
    input: `
      hi bsdk
      bsdk ye hai a = 2;
      (a + 4) * 10 + (5 - 4);
      bye bsdk
    `,
  },
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
      hi bsdk
      bsdk ye hai a = 2;
      (a * (4 + 8) + 10);
      bye bsdk
    `,
  },
  // if statement test
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
    hi bsdk
    bsdk ye hai x = 9;
    agar bsdk (x != 9) {
      x = 5;
      bol bsdk x;
    } warna bsdk (x >= 9);
    bye bsdk;
    `,
  },
];

export const WithOutputPositiveTests = [
  {
    name: "variable assignment test with multiple variables, should success",
    input: `
      hi bsdk;
      bsdk ye hai a , b;
      a = b = 60;
      bol bsdk a, b;
      bye bsdk
    `,
    output: "60 60",
  },
  {
    name: `binaryExpression print test with nalla and "==", should success`,
    input: `
      hi bsdk;
      bsdk ye hai a;
      agar bsdk (a == nalla) {
        bol bsdk a;
      }
      bye bsdk
    `,
    output: "nalla",
  },
  {
    name: `binaryExpression print test with nalla without any operator, should success`,
    input: `
      hi bsdk;
      bsdk ye hai a;
      agar bsdk (a) {
        bol bsdk a;
      } warna bsdk {
        bol bsdk "not nalla";
      }
      bye bsdk
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test - comparing nalla with nalla "==", should success`,
    input: `
      hi bsdk;
      agar bsdk (nalla == nalla) {
        bol bsdk "hai nalla";
      }
      bye bsdk
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with var "a", should success`,
    input: `
      hi bsdk;
      bsdk ye hai a;
      agar bsdk (nalla == a) {
        bol bsdk "hai nalla";
      }
      bye bsdk
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with var "a" explicit initialization, should success`,
    input: `
      hi bsdk;
      bsdk ye hai a = nalla;
      agar bsdk (nalla == a) {
        bol bsdk "hai nalla";
      }
      bye bsdk
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with string nalla, should success`,
    input: `
      hi bsdk;
      bsdk ye hai a = nalla;
      agar bsdk ("nalla" == a) {
        bol bsdk "hai nalla";
      } warna bsdk {
        bol bsdk "not nalla";
      }
      bye bsdk
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with string nalla, should success`,
    input: `
      hi bsdk;
      bsdk ye hai a = "nalla";
      agar bsdk (nalla == a) {
        bol bsdk "hai nalla";
      } warna bsdk {
        bol bsdk "not nalla";
      }
      bye bsdk
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with string null, should success`,
    input: `
      hi bsdk;
      bsdk ye hai a = "null";
      agar bsdk (nalla == a) {
        bol bsdk "hai nalla";
      } warna bsdk {
        bol bsdk "not nalla";
      }
      bye bsdk
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test with nalla var "a" & "b" - 0, should success`,
    input: `
      hi bsdk;
      bsdk ye hai a;
      bsdk ye hai b;
      agar bsdk (a == b) {
        bol bsdk "hai nalla";
      } warna bsdk {
        bol bsdk "nahi nalla";
      }
      bye bsdk
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with nalla var "a" & "b" - 1, should success`,
    input: `
      hi bsdk;
      bsdk ye hai a;
      bsdk ye hai b = nalla;
      agar bsdk (a == b) {
        bol bsdk "hai nalla";
      } warna bsdk {
        bol bsdk "nahi nalla";
      }
      bye bsdk
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with nalla var "a" & "b" -2, should success`,
    input: `
      hi bsdk;
      bsdk ye hai a;
      bsdk ye hai b = "nalla";
      agar bsdk (a == b) {
        bol bsdk "hai nalla";
      } warna bsdk {
        bol bsdk "nahi nalla";
      }
      bye bsdk
    `,
    output: "nahi nalla",
  },
  // Boolean test
  {
    name: `binaryExpression print test with boolean expression - sahi, should success`,
    input: `
      hi bsdk;
      bsdk ye hai a = sahi;
      agar bsdk (sahi == a) {
        bol bsdk "hai sahi";
      } warna bsdk {
        bol bsdk "nahi sahi";
      }
      bye bsdk
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - galat, should success`,
    input: `
      hi bsdk;
      bsdk ye hai a = galat;
      agar bsdk (galat == a) {
        bol bsdk "hai galat";
      } warna bsdk {
        bol bsdk "nahi galat";
      }
      bye bsdk
    `,
    output: "hai galat",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi with string sahi, should success`,
    input: `
      hi bsdk;
      bsdk ye hai a = "sahi";
      agar bsdk (sahi == a) {
        bol bsdk "hai sahi";
      } warna bsdk {
        bol bsdk "nahi sahi";
      }
      bye bsdk
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression, should success`,
    input: `
      hi bsdk;
      bsdk ye hai a = 7;
      agar bsdk (sahi == (a > 5)) {
        bol bsdk "hai sahi";
      } warna bsdk {
        bol bsdk "nahi sahi";
      }
      bye bsdk
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression & string "sahi", should success`,
    input: `
      hi bsdk;
      bsdk ye hai a = 7;
      agar bsdk ("sahi" == (a > 5)) {
        bol bsdk "hai sahi";
      } warna bsdk {
        bol bsdk "nahi sahi";
      }
      bye bsdk
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression & two expressions, should success`,
    input: `
      hi bsdk;
      bsdk ye hai a = sahi;
      agar bsdk ("sahi" == (a == sahi)) {
        bol bsdk "hai sahi";
      } warna bsdk {
        bol bsdk "nahi sahi";
      }
      bye bsdk
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression -3, should success`,
    input: `
      hi bsdk;
      bsdk ye hai a = sahi;
      agar bsdk ((a == sahi) == (a == sahi)) {
        bol bsdk "hai sahi";
      } warna bsdk {
        bol bsdk "nahi sahi";
      }
      bye bsdk
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 4, should success`,
    input: `
      hi bsdk;
      bsdk ye hai a;
      agar bsdk ((a == nalla) == (a == sahi)) {
        bol bsdk "hai sahi";
      } warna bsdk {
        bol bsdk "nahi sahi";
      }
      bye bsdk
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 5, should success`,
    input: `
      hi bsdk;
      bsdk ye hai a;
      agar bsdk ((a == nalla) == (a == sahi)) {
        bol bsdk "hai sahi";
      } warna bsdk {
        bol bsdk "nahi sahi";
      }
      bye bsdk
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 5, should success`,
    input: `
      hi bsdk;
      bsdk ye hai a;
      bsdk ye hai b = galat;
      agar bsdk (a == b) {
        bol bsdk "hai sahi";
      } warna bsdk {
        bol bsdk "nahi sahi";
      }
      bye bsdk
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - galat variables comparison, should success`,
    input: `
      hi bsdk;
      bsdk ye hai a = galat;
      bsdk ye hai b = galat;
      agar bsdk (a == b) {
        bol bsdk "hai galat";
      } warna bsdk {
        bol bsdk "nahi galat";
      }
      bye bsdk
    `,
    output: "hai galat",
  },
  {
    name: `binaryExpression print test with boolean expression - galat variables comparison with string galat, should success`,
    input: `
      hi bsdk;
      bsdk ye hai a = "galat";
      bsdk ye hai b = galat;
      agar bsdk (a == b) {
        bol bsdk "hai galat";
      } warna bsdk {
        bol bsdk "nahi galat";
      }
      bye bsdk
    `,
    output: "nahi galat",
  },
  {
    name: "float value addition with integer value test, should success",
    input: `
      hi bsdk
      bsdk ye hai a = 1.2, b = 2;
      bol bsdk a + b;
      bye bsdk
    `,
    output: "3.2"
  },
  {
    name: "float value addition with float value value test, should success",
    input: `
      hi bsdk
      bsdk ye hai a = 1.2, b = 2.3;
      bol bsdk a + b;
      bye bsdk
    `,
    output: "3.5"
  },
  {
    name: "printStatement test with multiple expressions, should success",
    input: `
      hi bsdk;
      bsdk ye hai a = 2, b = 60;
      bol bsdk (a * (4 + 8) + 10), b;
      bye bsdk
    `,
    output: "34 60",
  },
  {
    name: "printStatement test with multiple expressions and re assigning value of one variable, should success",
    input: `
      hi bsdk;
      bsdk ye hai a = 2, b = 60;

      a = b + 3;
      bol bsdk a, b;
      bye bsdk
    `,
    output: "63 60",
  },
  {
    name: "printStatement test with multiple expressions & without any variables, should success",
    input: `
      hi bsdk;
      bol bsdk "hello", sahi, galat;
      bye bsdk
    `,
    output: "hello sahi galat",
  },
  {
    name: "printStatement test with nalla, should success",
    input: `
      hi bsdk;
      bol bsdk nalla;
      bye bsdk;
    `,
    output: "nalla",
  },
  {
    name: "printStatement test with nalla as second parameter, should success",
    input: `
      hi bsdk;
      bol bsdk 10, nalla;
      bye bsdk;
    `,
    output: "10 nalla",
  },
  {
    name: "printStatement test with string concatenation, should success",
    input: `
      hi bsdk;
      bol bsdk "hello" + "crap";
      bye bsdk;
    `,
    output: "hellocrap",
  },
  {
    name: "printStatement test with multiple expresions including nalla, should success",
    input: `
      hi bsdk;
      bsdk ye hai a = 70;
      bol bsdk 6*5, nalla, "jamtara", a;
      bye bsdk;
    `,
    output: "30 nalla jamtara 70",
  },
  {
    name: "printStatement test with nalla variable, should success",
    input: `
      hi bsdk;
      bsdk ye hai a;
      bol bsdk a;
      bye bsdk;
    `,
    output: "nalla",
  },
  {
    name: `printStatement test with string "undefined", should success`,
    input: `
      hi bsdk;
      bol bsdk "undefined";
      bye bsdk;
    `,
    output: "undefined",
  },
  {
    name: `printStatement test with nalla variable, should success`,
    input: `
      hi bsdk;
      bsdk ye hai a;
      bol bsdk a;
      bye bsdk;
    `,
    output: "nalla",
  },
  {
    name: `printStatement test with sahi variable, should success`,
    input: `
      hi bsdk;
      bsdk ye hai a = sahi;
      bol bsdk a;
      bye bsdk;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with galat variable, should success`,
    input: `
      hi bsdk;
      bsdk ye hai a = galat;
      bol bsdk a;
      bye bsdk;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with assignment expression, should success`,
    input: `
      hi bsdk;
      bsdk ye hai a;
      bol bsdk a = 90;
      bye bsdk;
    `,
    output: "90",
  },
  {
    name: `printStatement test with logical AND, should success`,
    input: `
      hi bsdk;
      bol bsdk 9 && 10;
      bye bsdk;
    `,
    output: "10",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      hi bsdk;
      bol bsdk 9 || 10;
      bye bsdk;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical - 1, should success`,
    input: `
      hi bsdk;
      bol bsdk galat && sahi;
      bye bsdk;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with logical - 2, should success`,
    input: `
    hi bsdk;
    bsdk ye hai a = sahi;
    bol bsdk a && galat;
    bye bsdk;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with logical - 3, should success`,
    input: `
    hi bsdk;
    bsdk ye hai a = sahi;
    bol bsdk a && sahi;
    bye bsdk;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with equality, should success`,
    input: `
      hi bsdk;
      bol bsdk 9 == 10;
      bye bsdk;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with inequality, should success`,
    input: `
      hi bsdk;
      bol bsdk 9 != 10;
      bye bsdk;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      hi bsdk;
      bol bsdk 9 || 10;
      bye bsdk;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical OR - 2, should success`,
    input: `
      hi bsdk;
      bol bsdk galat || sahi;
      bye bsdk;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with boolean sahi galat and logical, should success`,
    input: `
      hi bsdk;
      bol bsdk sahi != 10;
      bye bsdk;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with boolean sahi and string "sahi", should success`,
    input: `
      hi bsdk;
      bol bsdk "sahi" == sahi;
      bye bsdk;
    `,
    output: "galat",
  },
  // while statement / loop tests
  {
    name: `whileStatement test with 1 time loop, should success`,
    input: `
      hi bsdk;
      bsdk ye hai a = 0;
      jab tak bsdk (a < 1) {
        bol bsdk "bsdk";
        a += 1;
      }
      bye bsdk;
    `,
    output: "bsdk",
  },
  {
    name: `whileStatement test with single break statement, should success`,
    input: `
      hi bsdk;
      jab tak bsdk (sahi) 
        bas kar bsdk;
      bol bsdk "end";
      bye bsdk;
    `,
    output: "end",
  },
  {
    name: `whileStatement test with nested loops, should success`,
    input: `
      hi bsdk;
      bsdk ye hai a = 0;
      jab tak bsdk (a < 2) {
        jab tak bsdk (sahi)
          bas kar bsdk;
        bol bsdk "hello";
        agar bsdk (sahi)
          bas kar bsdk;
      }
      bye bsdk;
    `,
    output: "hello",
  },
  {
    name: `whileStatement with multiple breaks, should success`,
    input: `
      hi bsdk;
      bsdk ye hai a = 0;
      jab tak bsdk (a < 2) {
        bol bsdk "hello";
        agar bsdk (sahi)
          bas kar bsdk;
        bas kar bsdk;
        bas kar bsdk;
      }
      bye bsdk;
    `,
    output: "hello",
  },
  // if statement tests
  {
    name: `if statement success test - 1: only if, should success`,
    input: `
    hi bsdk
    agar bsdk (sahi) {
      bol bsdk "bsdk";
    }
    bye bsdk;
    `,
    output: "bsdk",
  },
  {
    name: `if statement success test - 2: if else both, should success`,
    input: `
    hi bsdk
    agar bsdk (sahi) {
      bol bsdk "sahi";
    } warna bsdk {
      bol bsdk "galat";
    }
    bye bsdk;
    `,
    output: "sahi",
  },
  {
    name: `if statement success test - 3: if only with comarison condn, should success`,
    input: `
    hi bsdk
    bsdk ye hai x = 9;
    agar bsdk (x >= 9) {
      x = 5;
      bol bsdk x;
    } 
    bye bsdk;
    `,
    output: "5",
  },
  // else-if statement tests
  {
    name: `else-if statement success test - 1: if with one else-if, should success`,
    input: `
    hi bsdk
    agar bsdk (galat) {
      bol bsdk "galat";
    } nahi to bsdk (sahi) {
      bol bsdk "sahi";
    }
    bye bsdk;
    `,
    output: "sahi",
  },
  {
    name: `else-if statement success test - 2: if with multiple else-ifs, should success`,
    input: `
    hi bsdk
    bsdk ye hai x = 10;
    agar bsdk (x < 5) {
      bol bsdk "x < 5";
    } nahi to bsdk (x < 8) {
      bol bsdk "x < 8";
    } nahi to bsdk (x < 12) {
      bol bsdk "x < 12";
    } nahi to bsdk (x < 15) {
      bol bsdk "x < 15";
    }
    bye bsdk;
    `,
    output: "x < 12",
  },
  {
    name: `else-if statement success test - 3: nested if-else-if ladder, should success`,
    input: `
    hi bsdk
    bsdk ye hai a = 15;
    agar bsdk (a < 0) {
      bol bsdk "a < 0";
    } nahi to bsdk (a > 0) {
      agar bsdk (a < 10) {
        bol bsdk "a < 10";
      } nahi to bsdk (a < 20) {
        bol bsdk "a < 20";
      }
    }
    bye bsdk
    `,
    output: "a < 20",
  },
  {
    name: `else-if statement success test - 4: if-else-if ladder evaluating to else, should success`,
    input: `
    hi bsdk
    bsdk ye hai x = 15;
    agar bsdk (x < 5) {
      bol bsdk "x < 5";
    } nahi to bsdk (x < 8) {
      bol bsdk "x < 8";
    } nahi to bsdk (x < 12) {
      bol bsdk "x < 12";
    } warna bsdk {
      bol bsdk "x > 12";
    }
    bye bsdk;
    `,
    output: "x > 12",
  },
  // logical expression test
  {
    name: `logical "&&" test with sahi galat, should success`,
    input: `
        hi bsdk
        agar bsdk (sahi && galat) {
          bol bsdk "sahi";
        } warna bsdk {
          bol bsdk "galat";
        }
        bye bsdk;
      `,
    output: `galat`,
  },
  // modulus operator test
  {
    name: `modulus operator "%" test, should success`,
    input: `
        hi bsdk
        bol bsdk 90 % 9;
        bye bsdk;
      `,
    output: `0`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        hi bsdk
        bol bsdk 27 % 5;
        bye bsdk;
      `,
    output: `2`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        hi bsdk
        bol bsdk 5 % 20;
        bye bsdk;
      `,
    output: `5`,
  },
  {
    name: `whileStatement test with single continue statement, should success`,
    input: `
      hi bsdk;
      bsdk ye hai a = 5;
      bsdk ye hai step = 0;
      jab tak bsdk (a > 0) {
        step += 1;
        agar bsdk (a % 2 != 0){
          a -= 2;
          agla dekh bsdk;
        }
        a -= 1;
      }
      bol bsdk step;
      bye bsdk;
    `,
    output: "3",
  },
  {
    name: `whileStatement test with multiple continue statement, should success`,
    input: `
      hi bsdk;
      bsdk ye hai a = 5;
      bsdk ye hai step = 0;
      jab tak bsdk (a > 0) {
        step += 1;
        agar bsdk (a % 2 == 0){
          a -= 2;
          agla dekh bsdk;
        }
        a -= 1;
        agla dekh bsdk;
        bol bsdk "oye oye oye.. yha tk nhi aana tha bsdk";
      }
      bol bsdk step;
      bye bsdk;
    `,
    output: "3",
  },
  {
    // step:  1 => 2
    // a: 10 => 7 => 6 => 3 => 2 => -1
    name: `whileStatement test with single continue statement without block, should success`,
    input: `
      hi bsdk;
      bsdk ye hai a = 10;
      bsdk ye hai step = 0;
      jab tak bsdk (a > 0) {
        agar bsdk (a % 2 == 0){
          a -= 3;
          agla dekh bsdk;
        }
        a -= 1;
        agar bsdk (step == 1) agla dekh bsdk
        step += 1;
      }
      bol bsdk step;
      bye bsdk;
    `,
    output: "1",
  },
];
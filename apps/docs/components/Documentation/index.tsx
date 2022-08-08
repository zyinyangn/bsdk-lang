import Snippet from "./Snippet";


/* This example requires Tailwind CSS v2.0+ */
const features = [
  {
    name: "General",
    description: (
      <>
        <code className="language-cpp">hi bsdk</code> is the entrypoint for the
        program and all program must end with{" "}
        <code className="language-cpp">bye bsdk</code>. Anything outside of it
        will be ignored.
      </>
    ),
    code: `This will be ignored

hi bsdk
  // Write code here
bye bsdk

This too
    `,
  },
  {
    name: "Variables",
    description: (
      <>
        Variables can be declared using{" "}
        <code className="language-cpp">bsdk ye hai</code>.
      </>
    ),
    code: `hi bsdk
    bsdk ye hai a = 10;
    bsdk ye hai b = "two";
    bsdk ye hai c = 15;
    a = a + 1;
    b = 21;
    c *= 2;
bye bsdk
    `,
  },
  {
    name: "Types",
    description: (
      <>
        Numbers and strings are like other languages. Null values can be denoted
        using <code className="language-cpp">nalla</code>.{" "}
        <code className="language-cpp">sahi</code> and{" "}
        <code className="language-cpp">galat</code> are the boolean values.
      </>
    ),
    code: `hi bsdk
    bsdk ye hai a = 10;
    bsdk ye hai b = 10 + (15*20);
    bsdk ye hai c = "two";
    bsdk ye hai d = 'ok';
    bsdk ye hai e = nalla;
    bsdk ye hai f = sahi;
    bsdk ye hai g = galat;
bye bsdk
    `,
  },
  {
    name: "Built-ins",
    description: (
      <>
        Use <code className="language-cpp">bol bsdk</code> to print anything to
        console.
      </>
    ),
    code: `hi bsdk
    bol bsdk "Hello World";
    bsdk ye hai a = 10;
    {
       bsdk ye hai b = 20;
       bol bsdk a + b;
    }
    bol bsdk 5, 'ok', nalla , sahi , galat;
bye bsdk
    `,
  },
  {
    name: "Conditionals",
    description: (
      <>
        bsdklang supports if-else-if ladder construct , <code className="language-cpp">agar bsdk</code> block will execute if condition is <code className="language-cpp">sahi</code>, otherwise one of the subsequently added <code className="language-cpp">nahi to bsdk</code> blocks will execute if their respective condition is <code className="language-cpp">sahi</code>, and the <code className="language-cpp">warna bsdk</code> block will eventually execute if all of the above conditions are <code className="language-cpp">galat</code>.
      </>
    ),
    code: `hi bsdk
    bsdk ye hai a = 10;
    agar bsdk (a < 20) {
      bol bsdk "a is less than 20";
    } nahi to bsdk ( a < 25 ) {
      bol bsdk "a is less than 25";
    } warna bsdk {
      bol bsdk "a is greater than or equal to 25";
    }
bye bsdk
    `
  },
  {
    name: "Loops",
    description: (
      <>
        Statements inside <code className="language-cpp">jab tak bsdk</code> blocks are executed as long as a specified condition evaluates to <code className="language-cpp">sahi</code>. If the condition becomes <code className="language-cpp">galat</code>, statement within the loop stops executing and control passes to the statement following the loop. 
        Use <code className="language-cpp">bas kar bsdk</code> to break the loop and <code className="language-cpp">agla dekh bsdk</code> to continue within loop.
      </>
    ),
    code: `hi bsdk
    bsdk ye hai a = 0;
    jab tak bsdk (a < 10) {
      a += 1;
      agar bsdk (a == 5) {
        bol bsdk "andar se bol bsdk ", a;
        agla dekh bsdk;
      }
      agar bsdk (a == 6) {
        bas kar bsdk;
      }
      bol bsdk a;
    }
    bol bsdk "done";
bye bsdk
    `
  }

];

export default function Documentation() {
  return (
    <div>
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">
            Documentation
          </h2>
          <p className="mt-4 text-gray-300">
            bsdklang is dynamically typed toy programming language, based on an
            inside joke, written in Typescript.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <div className="font-medium text-gray-300">{feature.name}</div>
                <div className="mt-2 text-sm text-gray-200">
                  {feature.description}
                </div>
                <Snippet code={feature.code} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

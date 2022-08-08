<h1 align="center">bsdk Lang</h1>
<p align="center">
<a href="https://lgtm.com/projects/g/DulLabs/bsdk-lang/alerts/"><img alt="Total alerts" src="https://img.shields.io/lgtm/alerts/g/DulLabs/bsdk-lang.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://lgtm.com/projects/g/DulLabs/bsdk-lang/context:javascript"><img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/DulLabs/bsdk-lang.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://github.com/DulLabs/bsdk-lang/actions/workflows/node.js.yml/badge.svg"><img alt="Build" src="https://github.com/DulLabs/bsdk-lang/actions/workflows/node.js.yml/badge.svg"/></a>
<a href="https://bsdklang.js.org/"><img alt="Build" src="https://img.shields.io/badge/website-bsdklang.js.org-orange"/></a>
<a href="https://www.npmjs.com/package/bsdklang"><img alt="Build" src="https://img.shields.io/badge/npm-bsdklang-orange"/></a>
  
</p>
<p align="center">
  <b>bsdk lang is a toy programming language written in Typescript.</b>
</p>
<br>

<h2 align="center">Installation</h2>

```
npm i -g bsdklang
```

<h2 align="center">Usage</h2>

<h4 align="left">Create a new file</h4><br/>


<h4 align="left">Edit the file with a text editor.
You can also try out your code on <a href="https://bsdklang.js.org/#playground">bsdk Lang PlayGround</a></h4>

```
hi bsdk
  bol bsdk "Hello bsdk";
bye bsdk

```

<h4 align="left">Run</h4>

```
bsdklang test.bsdk
```

<h4 align="left">Output</h4>

```
hello bsdk
```



<h2 align="center">Documentation</h2>

<h3 align="center">General</h3>
<p align="center"><code>hi bsdk</code> is the entrypoint for the program and all program must end with <code>bye bsdk</code>. Anything outside of it will be ignored.</p>

```

This will be ignored

hi bsdk
// Write code here
bye bsdk

This too
```

<h3 align="center">Variables</h3>
<p align="center">Variables can be declared using <code>bsdk ye hai</code>.</p>

```

hi bsdk
  bsdk ye hai a = 10;
  bsdk ye hai b = "two";
  bsdk ye hai c = 15;
  a = a + 1;
  b = 21;
  c *= 2;
bye bsdk
```

<h3 align="center">Types</h3>
<p align="center">Numbers and strings are like other languages. Null values can be denoted using <code>nalla. sahi and galat</code> are the boolean values.</p>

```

hi bsdk
  bsdk ye hai a = 10;
  bsdk ye hai b = 10 + (15*20);
  bsdk ye hai c = "two";
  bsdk ye hai d = 'ok';
  bsdk ye hai e = nalla;
  bsdk ye hai f = sahi;
  bsdk ye hai g = galat;
bye bsdk
```

<h3 align="center">Built-ins</h3>
<p align="center">Use <code>bol bsdk</code> to print anything to console.</p>

```

hi bsdk
  bol bsdk "Hello World";
  bsdk ye hai a = 10;
  {
    bsdk ye hai b = 20;
    bol bsdk a + b;
  }
  bol bsdk 5, 'ok', nalla , sahi , galat;
bye bsdk
```

<h3 align="center">Conditionals</h3>
<p align="center">bsdklang supports simple if else construct , <code>agar bsdk</code> block will execute if condition is <code>sahi</code> and <code>warna bsdk</code> block will execute if condition is <code>galat</code>.</p>

```

hi bsdk
  bsdk ye hai a = 10;
  agar bsdk (a < 25) {
   bol bsdk "a is less than 25";
  } warna bsdk {
   bol bsdk "a is greater than or equal to 25";
  }
bye bsdk
```

<h3 align="center">Loops</h3>
<p align="center">Statements inside <code>jab tak bsdk</code> blocks are executed as long as a specified condition evaluates to sahi. If the condition becomes <code>galat</code>, statement within the loop stops executing and control passes to the statement following the loop. Use <code>bas kar bsdk</code> to break the loop and <code className="language-cpp">agla dekh bsdk</code> to continue within loop.</p>


```

hi bsdk
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
```




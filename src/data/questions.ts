export type Language = 'HTML' | 'CSS' | 'JavaScript' | 'React' | 'PHP';

export interface Question {
  id: string;
  title: string;
  description: string;
  code: string;
  output: string;
  category: Language;
}

export const questions: Question[] = [
  // HTML
  {
    id: 'html-4',
    category: 'HTML',
    title: '4. Using table related tags align the images with hyperlinks.',
    description: 'Question: Create a table where each cell contains an image that links to a website (e.g., Vodafone, Airtel, Tata Indicom).',
    code: `<table border="1">
  <tr>
    <td><a href="#"><img src="https://via.placeholder.com/50" alt="Vodafone"></a></td>
    <td><a href="#"><img src="https://via.placeholder.com/50" alt="Airtel"></a></td>
  </tr>
  <tr>
    <td><a href="#"><img src="https://via.placeholder.com/50" alt="Idea"></a></td>
    <td><a href="#"><img src="https://via.placeholder.com/50" alt="Jio"></a></td>
  </tr>
</table>`,
    output: `
      <table border="1" style="border-collapse: collapse;">
        <tr>
          <td style="padding: 10px;"><img src="https://via.placeholder.com/50" alt="Vodafone"></td>
          <td style="padding: 10px;"><img src="https://via.placeholder.com/50" alt="Airtel"></td>
        </tr>
        <tr>
          <td style="padding: 10px;"><img src="https://via.placeholder.com/50" alt="Idea"></td>
          <td style="padding: 10px;"><img src="https://via.placeholder.com/50" alt="Jio"></td>
        </tr>
      </table>
    `
  },
  {
    id: 'html-5',
    category: 'HTML',
    title: '5. Create a web page with the following using HTML: I. To embed an image map, II. To fix hot spots, III. Show info on click.',
    description: 'Question: Use the <map> and <area> tags to create clickable hotspots on an image that show information or navigate to pages.',
    code: `<img src="planets.gif" width="145" height="126" alt="Planets" usemap="#planetmap">

<map name="planetmap">
  <area shape="rect" coords="0,0,82,126" href="sun.htm" alt="Sun">
  <area shape="circle" coords="90,58,3" href="mercur.htm" alt="Mercury">
</map>`,
    output: '<p>Clickable areas on an image leading to different pages.</p><div style="border: 1px solid #ccc; padding: 20px; background: #eee;">[Image Map Example with Hotspots]</div>'
  },
  {
    id: 'html-6',
    category: 'HTML',
    title: '6. Write a HTML code for the following snapshot (Form).',
    description: 'Question: Recreate the form with "Basic information" and "Extra information" fieldsets, including name, date, gender, interests, and buttons.',
    code: `<form>
  <fieldset>
    <legend>Basic Information</legend>
    Full name: <input type="text"><br><br>
    Birth date: <input type="date"><br><br>
    Gender: 
    <input type="radio" name="g"> Male
    <input type="radio" name="g"> Female
  </fieldset>
  
  <fieldset>
    <legend>Extra Information</legend>
    Interests: 
    <input type="checkbox"> Books
    <input type="checkbox"> Movies
    Favorite color: <input type="color">
  </fieldset>
  <br>
  <input type="submit" value="Send data">
  <input type="reset" value="Reset form">
</form>`,
    output: `
      <div style="font-family: sans-serif; border: 1px solid blue; padding: 10px; background: #f0f0ff;">
        <fieldset style="border: 1px solid #000; margin-bottom: 10px; padding: 10px;">
          <legend>Basic Information</legend>
          Name: <input type="text"><br>
          Date: <input type="text" value="01/01/2000"><br>
          G: ( ) M ( ) F
        </fieldset>
        <fieldset style="border: 1px solid #000; padding: 10px;">
          <legend>Extra Information</legend>
          Int: [ ] Books [ ] Movies<br>
          Color: [ ]
        </fieldset>
        <button style="margin-top: 10px; border: 1px solid black;">Send data</button>
      </div>
    `
  },

  // CSS
  {
    id: 'css-1-new',
    category: 'CSS',
    title: '1. Create a web page to show all hyperlinks with following specification: Default pink, Active blue, Visited green, No underline.',
    description: 'Question: Use CSS pseudo-classes to style links according to specific color rules and remove the default underline.',
    code: `<style>
  a:link { color: pink; text-decoration: none; }
  a:visited { color: green; }
  a:active { color: blue; }
</style>
<a href="#">This link has NO underline and is PINK by default!</a>`,
    output: '<a href="#" style="color: pink; text-decoration: none; font-weight: bold;">This link is PINK and NO underline!</a>'
  },
  {
    id: 'css-2-new',
    category: 'CSS',
    title: '2. Create Box Shadow and text Shadow using CSS3.',
    description: 'Question: Apply shadows to a <div> container and a block of text using property settings for horizontal, vertical, and blur offsets.',
    code: `<style>
  .box {
    width: 100px; height: 100px;
    background: yellow;
    box-shadow: 10px 10px 5px grey;
  }
  .text {
    font-size: 30px;
    text-shadow: 2px 2px red;
  }
</style>
<div class="box">BOX</div>
<p class="text">TEXT SHADOW</p>`,
    output: `
      <div style="width: 50px; height: 50px; background: yellow; box-shadow: 5px 5px 3px grey; margin-bottom: 20px; display: flex; align-items: center; justify-content: center; font-weight: bold;">BOX</div>
      <p style="font-size: 20px; text-shadow: 1px 1px red; font-weight: bold;">SHADOW TEXT</p>
    `
  },
  {
    id: 'css-3-new',
    category: 'CSS',
    title: '3. Create Rounded Corners using css3.',
    description: 'Question: Use the border-radius property to create a box with curved edges.',
    code: `<style>
  .round {
    border: 2px solid black;
    padding: 20px;
    border-radius: 25px;
    width: 150px;
    text-align: center;
  }
</style>
<div class="round">ROUNDED!</div>`,
    output: '<div style="border: 2px solid black; padding: 10px; border-radius: 25px; width: 100px; text-align: center; background: #eee;">Rounded!</div>'
  },

  // JavaScript
  {
    id: 'js-1-new',
    category: 'JavaScript',
    title: '1. Design a web page to validate credit card numbers (MasterCard, Visa, Amex).',
    description: 'Question: Write a script to check if a card number matches the required prefix and length (e.g., Visa starts with 4, length 13 or 16).',
    code: `function validateCard(type, number) {
  if(type === "Visa" && number.startsWith("4") && (number.length === 13 || number.length === 16)) {
    return "Valid Visa";
  } else if (type === "MasterCard" && (number.startsWith("51") || number.startsWith("55")) && number.length === 16) {
    return "Valid MasterCard";
  }
  return "Invalid Card";
}
alert(validateCard("Visa", "4111111111111"));`,
    output: '<p style="color: red; font-weight: bold;">[Script Output]: Valid Visa</p>'
  },
  {
    id: 'js-2-new',
    category: 'JavaScript',
    title: '2. Design a web page to validate the following: a. Name, b. E-Mail-id and c. Password.',
    description: 'Question: Create an input validation system that ensures standard conditions are met (e.g., email contains @, password length).',
    code: `<script>
  function validateForm() {
    let n = document.getElementById("name").value;
    let e = document.getElementById("email").value;
    if(n == "" || !e.includes("@")) {
      alert("Validation Failed!");
      return false;
    }
    alert("Success!");
  }
</script>`,
    output: '<div style="padding: 10px; border: 2px solid black; background: #ffffaa;">Name: [____]<br>Email: [____]<br><button style="border: 1px solid black;">Validate</button></div>'
  },
  {
    id: 'js-3-new',
    category: 'JavaScript',
    title: '3. Store country names and capitals. Ask user to select from lists and verify.',
    description: 'Question: Compare user selection from two dropdowns (Country and Capital) and show "Correct answer" or the actual capital if wrong.',
    code: `const pairs = { "India": "Delhi", "USA": "DC" };
function check() {
  let c = document.getElementById("country").value;
  let cap = document.getElementById("capital").value;
  if(pairs[c] === cap) {
    alert("Correct answer");
  } else {
    alert("Error! Correct answer is " + pairs[c]);
  }
}`,
    output: `
      <select><option>India</option><option>USA</option></select>
      <select><option>Delhi</option><option>London</option></select>
      <button style="border: 1px solid black; background: #eee; margin-top: 5px;">Check!</button>
    `
  },

  // React
  {
    id: 'react-1-new',
    category: 'React',
    title: '1. Create a functional component that accepts props and displays a personalized message.',
    description: 'Question: Define a React function that takes user data via props and renders it inside a greeting.',
    code: `function Welcome(props) {
  return <h1>Hello, {props.user}!</h1>;
}

// How to use:
// <Welcome user="Ayushi" />`,
    output: '<h1 style="color: blue;">Hello, Ayushi!</h1>'
  },
  {
    id: 'react-2-new',
    category: 'React',
    title: '2. Create a class component that maintains a counter and provides buttons to increase and decrease.',
    description: 'Question: Use ES6 classes and this.state to manage a numeric counter with +/- controls.',
    code: `class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={() => this.setState({count: this.state.count + 1})}>+</button>
        <button onClick={() => this.setState({count: this.state.count - 1})}>-</button>
      </div>
    );
  }
}`,
    output: '<div style="text-align: center; border: 1px solid black; padding: 10px;"><p style="font-size: 20px;">0</p><button style="width: 30px;">+</button> <button style="width: 30px;">-</button></div>'
  },
  {
    id: 'react-3-new',
    category: 'React',
    title: '3. Create a functional component that maintains a counter and provides buttons to increase, decrease and reset.',
    description: 'Question: Rebuild the counter using the useState hook and add a "Reset" functionality.',
    code: `import { useState } from 'react';

const HookCounter = () => {
  const [val, setVal] = useState(0);
  return (
    <div>
      <p>{val}</p>
      <button onClick={() => setVal(val + 1)}>Plus</button>
      <button onClick={() => setVal(val - 1)}>Minus</button>
      <button onClick={() => setVal(0)}>Reset</button>
    </div>
  );
}`,
    output: '<div style="background: yellow; border: 2px solid black; padding: 10px;"><p>Current: 10</p><button>Add</button><button>Reset</button></div>'
  },

  // PHP
  {
    id: 'php-1-new',
    category: 'PHP',
    title: '1. Create a web page to maintain a session using PHP.',
    description: 'Question: Demonstrate how to start a session and store persistent variables across page reloads.',
    code: `<?php
  session_start();
  $_SESSION["username"] = "Admin";
  echo "User session is: " . $_SESSION["username"];
?>`,
    output: '<p style="font-family: serif; color: darkgreen;">User session is: Admin</p>'
  },
  {
    id: 'php-2-new',
    category: 'PHP',
    title: '2. Create a program to write & retrieve cookies.',
    description: 'Question: Use setcookie() to store data on the user browser and retrieve it using the $_COOKIE array.',
    code: `<?php
  setcookie("fav_color", "Red", time() + 3600);
  if(isset($_COOKIE["fav_color"])) {
    echo "Your color is: " . $_COOKIE["fav_color"];
  }
?>`,
    output: '<p>Your color is: Red</p>'
  },
  {
    id: 'php-3-new',
    category: 'PHP',
    title: '3. Write a PHP program to store page views count in SESSION, increment on refresh, and show count.',
    description: 'Question: Create a simple visitor counter using session state logic.',
    code: `<?php
  session_start();
  if(!isset($_SESSION['v'])) { $_SESSION['v'] = 0; }
  $_SESSION['v']++;
  echo "You have visited this page " . $_SESSION['v'] . " times.";
?>`,
    output: '<div style="border: 4px solid blue; padding: 20px; font-weight: bold; text-align: center;">You have visited this page 43 times.</div>'
  }
];

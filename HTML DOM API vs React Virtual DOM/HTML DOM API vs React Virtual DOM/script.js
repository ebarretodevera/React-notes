console.log('HTML DOM API vs React Virtual DOM');

const jsContainer = document.getElementById('element');
const reactContainer = document.getElementById('react-element');

const render = () => {

    /**
     * REACTDOM API
     */
    jsContainer.innerHTML = `
      <div class="demo">
        Hello JS
        <input />
        <p>${new Date()}</p>
      </div>
    `;

    /**
     * REACTDOM API
     */
    ReactDOM.render(
      React.createElement(
        "div",                       // Argument nº1: HTML Tag
        { className: "demo" },       // Argument nº2: Attributes we want this tag to have
        "Hello React",               // Argument nº3: Content of the element
        React.createElement("input"),
        React.createElement(
          "p",
          null,
          new Date().toString()
        )
      ),
      reactContainer
    );
  };

setInterval(render, 1000);

/**
 * Explanation:
 * 
 *  This is the moment when React will potentially blow your mind. 
 * If you try to type something in the text box of the JS version, 
 * you will not be able to. This is very much expected because 
 * we are basically throwing away the whole DOM node on every tick 
 * and regenerating it. However, if you try to type something in the
 * text box that is rendered with React, you can certainly do so!
 * 
 *  You can see the different ways we are updating the DOM visually 
 * if you inspect the two DOM nodes in a Chrome DevTools elements panel. 
 * The Chrome DevTools highlight any DOM elements that get updated. 
 * You will see how we are regenerating the entire jsContainer element 
 * with every tick, while React is smartly only regenerating the 
 * paragraph with the timestamp string in the reactContainer element.
 * 
 * This is React’s smart diffing algorithm in action. It only regenerates
 * in its DOM node what actually needs to be regenerated while it keeps
 * everything else the same. This diffing process is possible because 
 * of React’s virtual DOM and the fact that we have a representation of 
 * our User Interface in memory (because we wrote in JavaScript).
 * 
 * References:
 * - https://jscomplete.com/learn/why-react
 * 
 * Author:
 * - ebarretodevera
 */
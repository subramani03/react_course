import React from "react";
import ReactDOM from "react-dom";

let parent = React.createElement('div', { id: "parent" },
    [
        React.createElement('div', { id: "child" },
            [
                React.createElement('h1', {}, "Im h5 tag"),
                React.createElement('h2', {}, "Im h2 tag")
            ]),

        React.createElement('div', { id: "child2" },
            [
                React.createElement('h1', {}, "Im h1 tag"),
                React.createElement('h2', {}, "Im h2 tag")
            ])
    ])

let root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(parent);

// const heading = React.createElement("h1",{id : "heading"},"Hello World from React!")

// const root = ReactDOM.createRoot(document.querySelector("#root"))

// root.render(heading)

const heading = React.createElement("div",{id : "parent"},
                                    [React.createElement("div",{id:"child1"},
                                        React.createElement("h1",{},"I'm an h1 tag.")),
                                    React.createElement("div",{id:"child2"},
                                        React.createElement("h1",{},"I'm an h2 tag."))]);

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(heading)
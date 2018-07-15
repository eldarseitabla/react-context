# react-context

1. Create context -> CountCountext.js
2. Provide context for child components -> index.js
    ```js
        <CountContext.Provider value={this.state.contextState}>
            <div style={styles}>
            <input name="text" value={this.state.text} onChange={this.onChange} />
            <div>Count: {this.state.contextState.count}</div>
            <Container1 />
            <Container2 />
            </div>
        </CountContext.Provider>
    ```
3. Call stack
    * Container1 ->
    * CountButton (Here the component gets properties through CountContext.Consumer)

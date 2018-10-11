# react-document-title-decorator

Provides a decorator way to specify document.title in a single-page app.


## Installation
```
npm i react-document-title-decorator
```

## Basic Usage

Create a cookie, valid across the entire site:

```javascript
import DocumentTitle from "react-document-title-decorator";
import React, {Component} from 'react';

@DocumentTitle('Welcome!')
class TodoListView extends Component {
    render() {
        return (null)
    }
}
```






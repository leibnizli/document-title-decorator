# document-title-decorator

Provides a decorator way to specify document.title in a single-page app.


## Installation
```
npm i document-title-decorator
```

## Basic Usage

```javascript
import DocumentTitle from "document-title-decorator";
import React, {Component} from 'react';

@DocumentTitle('Welcome!')
class Home extends Component {
    render() {
        return (null)
    }
}
```






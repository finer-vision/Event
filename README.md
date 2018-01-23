# FV Event

JavaScript Event System.

### Usage

```js
import Event from "fv-event";

const listener = Event.addListener('some.event', data => console.log(event));

Event.emit('some.event', {some: 'data'});

Event.removeListener(listener);
```

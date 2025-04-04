# react-time-line

[![Build Status](https://travis-ci.org/arunghosh/react-time-line.svg?branch=master)](https://travis-ci.org/arunghosh/react-time-line)

A react component to display event in a vertical timeline format. This is based on the timeline found in [AdminLte](https://github.com/almasaeed2010/AdminLTE).

![alt tag](https://github.com/ryanhs/react-time-line/raw/master/docs/timeline.png)

**Installation**
```
npm install react-time-line@https://github.com/ryanhs/react-time-line#master
```

**EDITED** i like this component, but it doesnt have any alternative to put a component as an item (i want to have a button / a link). that's why i forked this one. But, not make a PR, hope the original repo will have a better ways to provide the functionality.


**Usage**

```javascript
const events = [
    {ts: "2017-09-17T12:22:46.587Z", text: 'Logged in'},
    {ts: "2017-09-17T12:21:46.587Z", text: 'Clicked Home Page'},
    {ts: "2017-09-17T12:20:46.587Z", text: 'Edited Profile'},
    {ts: "2017-09-16T12:22:46.587Z", text: 'Registred'},
    {ts: "2017-09-16T12:21:46.587Z", text: 'Clicked Cart'},
    {ts: "2017-09-16T12:20:46.587Z", text: 'Clicked Checkout'},
    {ts: "2017-09-18T12:22:46.587Z", text: <a href="https://www.google.com/">to google</a>},
    {ts: "2017-09-18T12:22:46.587Z", text: <button onClick={() => alert(1)}>a button</button>},
];

<Timeline items={events} />
```
The events should be ordered in a way you need.


**Style**

Currently there is no proper way to set the style. As a hack you can override the default style. Check for the default style in `src/style.scss`.


### For developers

To make new build
```
npm run build
```

To run dev server
```
npm run dev
```

To run test
```
npm run test
```

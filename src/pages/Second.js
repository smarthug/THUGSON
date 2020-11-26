import React from 'react';

import JsonConverter from '../components/jsonConverter'

import SoHardGraph from '../components/sohard'

function Hello() {

    return(
        <div>Hello</div>
    )
}

var test = {
    Hello
}

export default function Main() {
    const hi = "Hello"
    const TempComp = test[hi]
    return(
        // React.createElement(test[hi])
        <SoHardGraph/>
    )
}



// 이런식으로 ???
// import * as BizCharts from 'bizcharts'
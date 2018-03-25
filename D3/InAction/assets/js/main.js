import React, { Component } from 'react';
import BarChart from './BarChart';
import { scaleThreshold } from 'd3-scale';
import KumamotoMap from "./KumamotoMap";

class Main extends Component{
    render(){
        const colorScale = scaleThreshold()
                            .domain([5,10,20,30,50])
                            .range(["#75739f", "#5eafc6", "#41a368", "#93c464", "#fe9922"]);
        return(
            <div className="Main">
                <div className="Main-header">
                    <h2>Map Sample</h2>
                </div>
                <div>
                    <KumamotoMap />
                </div>
                <div className="Main-header">
                    <h2>Bar Sample</h2>
                </div>
                <div>
                    <BarChart data={[5, 10, 1, 3]} size={[400, 300]}/>
                </div>
            </div>
        )
    }
}
export default Main

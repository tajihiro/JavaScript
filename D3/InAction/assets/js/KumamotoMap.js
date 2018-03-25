import React, {Component} from 'react'
import {scaleLiner} from 'd3-scale'
import {max} from 'd3-array'
import {select} from 'd3-selection'
import {geoMercator, geoPath} from 'd3-geo'
import * as topojson from "topojson-client";
import {queue} from 'd3-queue'
import {json, csv} from 'd3-request'

class KumamotoMap extends Component{

    constructor(props){
        super(props);

        this.createMap = this.createMap.bind(this);
    }

    componentDidMount(){
        queue().defer(json, "http://0.0.0.0:4000/data/kumamoto.json")
               .defer(csv,  "http://0.0.0.0:4000/data/kumamoto_city.csv")
               .await(this.createMap);
    }

    componentDidUpdate(){
        this.createMap();
    }

    createMap(_error, _json, _cities){
        const width = 600;
        const height = 400;
        const scale = 15000;
        const svgContainer = select("svg")
            .attr("width", width)
            .attr("height", height);
        const mapContainer = svgContainer.append("g").attr("class", "kumamoto");
        const dataContainer = svgContainer.append("g").attr("class", "kumamoto");
        const labelContainer = svgContainer.append("g").attr("class", "kumamoto");

        const projection = geoMercator()
            .center([130.8, 32.6]) //Kumamoto
            .scale(scale)
            .translate([width/2, height/2]);
        const path = geoPath(projection);

        mapContainer.selectAll("path")
            .data(topojson.feature(_json, _json.objects.kumamoto).features)
            .enter()
            .append("path")
            .attr("stroke", "#8d08d0")
            .attr("fill", "#fcc2ff")
            .attr("d", path)
            .on("click", this.mapClick);
        dataContainer.selectAll("circle")
            .data(_cities)
            .enter()
            .append('circle')
            .attr('class', "pref")
            .attr('id', function(d){
                return d.city;
            })
            .attr('cx', function(d){
                return projection([d.longitude, d.latitude])[0];
            })
            .attr('cy', function(d){
                return projection([d.longitude, d.latitude])[1];
            })
            .attr('r', 2)
            .style('fill', function(d){
                return "#165dff";
            })
            .enter();
        labelContainer.selectAll("text")
            .data(_cities)
            .enter()
            .append('text')
            .attr('dx', function(d){
                return projection([d.longitude, d.latitude])[0];
            })
            .attr('dy', function(d){
                return projection([d.longitude, d.latitude])[1];
            })
            .text(d => d.city)
            .style('fill', "#000000")
            .style('font-size', 6)
            .enter();
    }

    mapClick(target){
        console.log(target.properties.N03_004)
    }
    render(){
        return <svg></svg>
    }
}
export default KumamotoMap;
$(function () {
    d3.json("data/data.json", function (error, data) {
        var dataset = [];

        for(var i = 0; i < data.length; i++){
            dataset.push(data[i].sales);
        }

        //Initial Layout Settings.
        var margin = {top: 20, buttom: 20, right: 20, left: 20};
        var svgWidth = 960 - margin.left - margin.right;
        var svgHeight = 600 - margin.top - margin.buttom;
        var offsetX = 40;
        var offsetY = 30;
        var bar_width = 36;
        var bar_height = 460;
        var bar_space = 1.2;

        //Init Compornents
        var barElements = d3.select("#barChart")
            .attr("width", svgWidth)
            .attr("height", svgHeight)
            .selectAll("rect")
            .data(dataset)
        //Scale Settings
        d3.select("#barChart")
            .append("g")
            .attr("class", "axis")
            .attr("transform", "translate(" + offsetX +", " + ((svgHeight - bar_height ) - offsetY) + ")")
            .call(d3.axisLeft(d3.scaleLinear()
                .domain([0, bar_height])
                .range([bar_height, 0])))


        //Initial Layout.
        barElements.enter()
            .append("rect").
            .attr("class", "bar")
            .attr("height", function(data, idx){
                return data;
            })
            .attr("width", bar_width)
            .attr("x", function(data, idx){
                return idx * bar_width * bar_space + (offsetX + 10);
            })
            .attr("y", function(data, idx){
                return svgHeight - data - offsetY;
            })
            //Event
            .on("mouseover", function () {
                d3.select(this).attr("class", "bar-mouseover");
            })
            .on("mouseout", function () {
                d3.select(this).attr("class", "bar");
            })
            .exit();

    //Button
    d3.select("#update_btn")
        .on("click", function () {
            for (var i = 0; i < dataset.length; i++) {
                dataset[i] = Math.floor(Math.random() * 400);
                console.log(dataset[i]);
            }
            barElements.enter()
                .selectAll("rect")
                .data(dataset)
                // .data([0,0,0,0,0,0,0,0,0,0,0,0,0])
                // .datum(function(){
                //     return Math.floor(Math.random() * 400);
                // })
                // .call(function (elements) {
                //     elements.each(function(d, i){
                //         console.log(d);
                //     })
                // })
                .transition()
                .duration(2000)
                .delay(function (data, idx) {
                    return idx * 100;
                })
                .attr("height", function(data, idx){
                    return data;
                })
                .attr("y", function(data, idx){
                    return svgHeight - data - offsetY;
                })
        })
    })

});
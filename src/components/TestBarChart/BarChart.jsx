import React, { Component } from 'react';
import * as d3 from 'd3';

class BarChart extends Component {

    constructor (props) {
       super(props);
       const {chartData} = this.props; 
       this.state = {chartData: chartData}
    } 

    componentDidMount() {
        this.drawOrangeBarChart(this.state.chartData);
        // this.drawBlueBarChart(this.state.blueData);
      }
      drawOrangeBarChart(data) {
        const canvasHeight = 400;
        const canvasWidth = 600;
        const scale = 20;
    
        const svgCanvas = d3
          .select(this.refs.orangecanvas)
          .append('svg')
          .attr('width', canvasWidth)
          .attr('height', canvasHeight)
          .style('border', '1px solid black');
    
        svgCanvas
          .selectAll('rect')
          .data(data)
          .enter()
          .append('rect')
          .attr('width', 40)
          .attr('height', datapoint => datapoint * 20)
          .attr('fill', 'orange')
          .attr('x', (datapoint, iteration) => iteration * 45 + 360)
          .attr('y', datapoint => canvasHeight - datapoint * scale);
    
        svgCanvas
          .selectAll('text')
          .data(data)
          .enter()
          .append('text')
          .attr('x', (datapoint, i) => i * 45 + 10 + 360)
          .attr('y', (datapoint, i) => canvasHeight - datapoint * scale - 10)
          .text(datapoint => datapoint);
      }

    render() {
        return (
          <>
            <button onClick={this.changeData}>Change Data</button>
            <div ref='orangecanvas' />
            <div className='chart' />
          </>
        );
      }
}

export default BarChart;
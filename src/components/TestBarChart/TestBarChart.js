import React, { Component } from 'react';
import './TestBarChart.css';
import { replicateChart } from '../../redux/actions';
import { connect } from 'react-redux';
import BarChart from './BarChart';

/* class TestBarChart extends Component {
  
  constructor(props) {
    super();
    console.log('props in construtor', this.props);
  }

  componentDidMount() {
    this.drawOrangeBarChart(this.props.orangeData);
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

   drawBlueBarChart(data) {
    d3.select('.chart')
      .append('svg')
      .attr('width', 600)
      .attr('height', 400)
      .style('border', '1px solid black')
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('width', 40)
      .attr('height', datapoint => datapoint * 1)
      .attr('fill', 'blue')
      .attr('x', (datapoint, iteration) => iteration * 45)
      .attr('y', datapoint => 400 - datapoint * 1);

    d3.select('.chart>svg')
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .attr('x', (datapoint, i) => i * 45 + 10)
      .attr('y', (datapoint, i) => 400 - datapoint * 1 - 10)
      .text(datapoint => datapoint);
  }

  changeData = () => {
    // this.setState({ orangeData: [3, 1, 5, 8, 2] }, () => {
    this.props.replicateChart({ orangeData: [3, 1, 5, 8, 2] });
    // });
  };

  render() {
    return (
      <>
        <button onClick={this.changeData}>Change Data</button>
        <div ref='orangecanvas' />
        <div className='chart' />
      </>
    );
  }
} */

const TestBarChart = ({ chartData }) => (
  <ul>
    {chartData && chartData.length ? (
      <BarChart chartData={chartData} />
    ) : (
      'No Data'
    )}
  </ul>
);

const mapStateToProps = state => {
  return { chartData: state.chartData.orangeData };
};

export default connect(mapStateToProps)(TestBarChart);
// export default TestBarChart;

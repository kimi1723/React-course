 import './Chart.css';
 import ChartBar from './ChartBar';

 const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaxium = Math.max(...dataPointValues)
    const chartBars = props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaxium} label={dataPoint.label} />)

    return <div className="chart">
        {chartBars}
    </div>
 }

 export default Chart;
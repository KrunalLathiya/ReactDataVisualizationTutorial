import React from 'react';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries} from 'react-vis';

const Chart = (props) => {
    const dataArr = props.data.map((d)=> {
        return {x: d.year, 
        y: d.count}
    });
    return (
        <XYPlot
            xType="ordinal"
            width={1000}
            height={500}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title="Period of time(year)" />
            <YAxis title="No. of counts" />
                <LineSeries
                    data={dataArr}
                    style={{stroke: 'violet', strokeWidth: 3}}/>
        </XYPlot>
    );
}
export default Chart;
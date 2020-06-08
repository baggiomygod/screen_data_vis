import * as React from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import allData from './data/allData.js'

am4core.useTheme(am4themes_animated);

export default class BarRace extends React.PureComponent {
    constructor(props: any){
        super(props)
    }
    public render(){
        const chart = am4core.create('bar-race-chart', am4charts.XYChart)
    chart.padding(40, 40, 40, 40);
    chart.numberFormatter.bigNumberPrefixes = [
        { "number": 1e+3, "suffix": "K" },
        { "number": 1e+6, "suffix": "M" },
        { "number": 1e+9, "suffix": "B" }
    ];
    const label = chart.plotContainer.createChild(am4core.Label);
    label.x = am4core.percent(97);
    label.y = am4core.percent(95);
    label.horizontalCenter = "right";
    label.verticalCenter = "middle";
    label.dx = -15;
    label.fontSize = 50;

    const playButton = chart.plotContainer.createChild(am4core.PlayButton);
    playButton.x = am4core.percent(97);
    playButton.y = am4core.percent(95);
    playButton.dy = -2;
    playButton.verticalCenter = "middle";
    playButton.events.on("toggled", (event: any) => {
        if (event.target.isActive) {
            play();
        }
        else {
            stop();
        }
    })

    const stepDuration = 4000;

    const categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "label";
    categoryAxis.renderer.minGridDistance = 1;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.disabled = true;

    const valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.rangeChangeEasing = am4core.ease.linear;
    valueAxis.rangeChangeDuration = stepDuration;
    valueAxis.extraMax = 0.1;

    const series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryY = "label";
    series.dataFields.valueX = "MAU";
    series.tooltipText = "{valueX.value}"
    series.columns.template.strokeOpacity = 0;
    series.columns.template.column.cornerRadiusBottomRight = 5;
    series.columns.template.column.cornerRadiusTopRight = 5;
    series.interpolationDuration = stepDuration;
    series.interpolationEasing = am4core.ease.linear;

    const labelBullet = series.bullets.push(new am4charts.LabelBullet())
    labelBullet.label.horizontalCenter = "right";
    labelBullet.label.text = "{values.valueX.workingValue.formatNumber('#.0as')}";
    labelBullet.label.textAlign = "end";
    labelBullet.label.dx = -10;

    chart.zoomOutButton.disabled = true;

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", (fill, target) => {
        return chart.colors.getIndex(target.dataItem ? target.dataItem.index : 0);
    });

    let year = 2003;
    label.text = year.toString();

    let interval: any;

    function play() {
        interval = setInterval(() => {
            nextYear();
        }, stepDuration)
        nextYear();
    }

    function stop() {
        if (interval) {
            clearInterval(interval);
        }
    }

    function nextYear() {
        year++

        if (year > 2018) {
            year = 2003;
        }

        const newData = allData[year];
        let itemsWithNonZero = 0;
        for (let i = 0; i < chart.data.length; i++) {
            chart.data[i].MAU = newData[i].MAU;
            if (chart.data[i].MAU > 0) {
                itemsWithNonZero++;
            }
        }

        if (year === 2003) {
            series.interpolationDuration = stepDuration / 4;
            valueAxis.rangeChangeDuration = stepDuration / 4;
        }
        else {
            series.interpolationDuration = stepDuration;
            valueAxis.rangeChangeDuration = stepDuration;
        }

        chart.invalidateRawData();
        label.text = year.toString();

        categoryAxis.zoom({ start: 0, end: itemsWithNonZero / categoryAxis.dataItems.length });
    }


    categoryAxis.sortBySeries = series;
    chart.data = JSON.parse(JSON.stringify(allData[year]));
    categoryAxis.zoom({ start: 0, end: 1 / chart.data.length });

    series.events.on("inited", () => {
        setTimeout(() => {
            playButton.isActive = true; // this starts interval
        }, 2000)
    })
        return (
            <div id="bar-race-chart" style={{height: '100%', backgroundColor: '#fff'}} />
        )
    }
}
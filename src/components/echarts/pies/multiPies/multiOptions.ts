const createRingOption = (
    data: any[] = [],
    title: string, 
    formatterA?: any,
    formatterB?: any) => {
    const legendData = data.map(item => item.name);
    const seriesData = data.map(item => Object.assign({}, item, {labelLine: {show: false}, label: {show: false}}));
    const colors = [
      'rgba(57,164,246, 1)',
      'rgba(20, 44, 72, 1)',
    ];
    const options = {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      title: {
        text: title,
        subtext: formatterA,
        textStyle: {
            color: 'rgb(127, 153, 150)',
            fontSize: 12,
            align: 'center'
        },
        subtextStyle: {
            fontSize: 12,
            color: 'rgb(41, 116, 169)'
        },
        left: 'center',
        top: '35%',
      },
      data: legendData,
      // },
      series: [{
        type: 'pie',
        radius: ['60%', '70%'],
        center: ['50%', '50%'],
        color: colors,
        data: seriesData,
      }],
    };
    return options;
  };
  
  export default createRingOption;
  
export default {
    formateDate(date: any): string {
        const Month = date.getMonth()
        const Date = date.getDate()

        const yy = 1900 + date.getYear()
        const mm = Month >= 9 ? Month + 1 : "0" + (date.getMonth() + 1)
        const dd = Date > 9 ? Date : "0" + Date
        return `${yy}/${mm}/${dd}`
    },
    formateDay(date: any, type: string = 'number'): string {
        const day = date.getDay()
        let dayResult:string | number = ''
        if (type === 'cn') {
            switch (day) {
                case 1:
                    dayResult = '一'
                    break;
                case 2:
                    dayResult = '二'
                    break;
                case 3:
                    dayResult = '三'
                    break;
                case 4:
                    dayResult = '四'
                    break;
                case 5:
                    dayResult = '五'
                    break;
                case 6:
                    dayResult = '六'
                    break;
                case 7:
                    dayResult = '七'
                    break;
                default:
                    break;
            }
        } else {
            dayResult = day
        }
        
        return `星期${dayResult}`
    },
    formateTime(date: any): string {
        const hh = date.getHours()
        const mm = date.getMinutes()
        const ss = date.getSeconds()
        return `${hh > 9 ? hh : ('0' + hh)}:${mm > 9 ? mm : ('0' + mm)}:${ss > 9 ? ss : ('0' + ss)}`
    }
} 
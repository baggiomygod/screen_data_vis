import * as React from 'react';
import {Table} from 'antd'
import CardHead from 'src/pages/rework/components/CardHead'
import './index.scss'
class RightCard extends React.Component<{}, {}> {
    public render() {
        const dataSource = [
            { key: '1', order: 1, name: '金融业', reworkDigtial: 60.01, },
            { key: '2', order: 2, name: '服务业', reworkDigtial: 50.01, },
            { key: '3', order: 3, name: '房地产', reworkDigtial: 40.01, },
            { key: '4', order: 4, name: '交通', reworkDigtial: 30.01, },
            { key: '5', order: 5, name: '信息', reworkDigtial: 20.01, },
            { key: '6', order: 6, name: '软件', reworkDigtial: 25.01, },
            { key: '7', order: 7, name: '医药', reworkDigtial: 24.01, },
            { key: '8', order: 8, name: '制造', reworkDigtial: 23.01, },
            { key: '9', order: 9, name: '农业', reworkDigtial: 22.01, },
            { key: '10', order: 10, name: '教育', reworkDigtial: 10.01, },
          ];
        const columns = [
            {
              title: '排名',
              dataIndex: 'order',
              key: 'order',
            },
            {
              title: '行业名称',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '复工指数',
              dataIndex: 'reworkDigtial',
              key: 'reworkDigtial',
            },
          ];
        const rowClassFn = (r: any, index: number) => {
            return index % 2 === 0  ? 'light' : ''
        }
        return (
            <div className="order-container">
                <CardHead title={'行业复工排名'}/>
                <div className="table-wrap">
                    <Table 
                        dataSource={dataSource} 
                        columns={columns} 
                        pagination={ false } 
                        rowClassName={rowClassFn}
                        />
                </div>
            </div>
        )
    }
}

export default RightCard
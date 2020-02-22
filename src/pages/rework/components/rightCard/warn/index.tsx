import * as React from 'react';
import CardHead from 'src/pages/rework/components/CardHead'
import Card from 'src/pages/rework/components/rightCard/warn/card'

class RightCard extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <CardHead title={'企业复工预警'}/>
                <div>
                    <Card nums={60.1} key={1}
                            indName={'A行业'}
                            trend={'下降'}
                            yearData={['13%', 'up']}
                            dayData={['-13%', 'up']} />
                    <Card nums={60.1}  key={2}
                            indName={'B行业'}
                            trend={'下降'}
                            yearData={['13%', 'down']}
                            dayData={['-13%', 'up']} />
                    <Card nums={60.1}  key={3}
                            indName={'C行业'}
                            trend={'超过'}
                            yearData={['13%', 'up']}
                            dayData={['10%', 'down']} />
                </div>
            </div>
        )
    }
}

export default RightCard
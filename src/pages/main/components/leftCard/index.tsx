import * as React from 'react';
import TBLayout from 'src/components/TBLayout'
 class LeftCard extends React.Component<{}, {}> {
    
    public render() {
        const cardLeftRender = ():any => (
            <div>left..</div>
        )
        const cardRightRender = ():any => (
            <div>right..</div>
        )
        return (
            <TBLayout>
                {cardLeftRender()}
                {cardRightRender()}
            </TBLayout>
        )
    }
}

export default LeftCard
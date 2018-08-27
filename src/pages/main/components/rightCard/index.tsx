import * as React from 'react';
import LRLayout from 'src/components/LRLayout'
 class RightCard extends React.Component<{}, {}> {
    public render() {
        const cardLeftRender = ():any => (
            <div>left..</div>
        )
        const cardRightRender = ():any => (
            <div>right..</div>
        )
        return (
            <LRLayout>
                {cardLeftRender()}
                {cardRightRender()}
            </LRLayout>
        )
    }
}

export default RightCard
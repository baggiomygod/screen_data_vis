import * as React from 'react';
import TBLayout from 'src/components/TBLayout'
 class LeftCard extends React.Component<{}, {}> {
    
    public render() {
        const cardTopRender = ():any => (
            <div>left..</div>
        )
        const cardBottomRender = ():any => (
            <div>right..</div>
        )
        return (
            <TBLayout>
                {cardTopRender()}
                {cardBottomRender()}
            </TBLayout>
        )
    }
}

export default LeftCard
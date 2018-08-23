import * as React from 'react';
import CardsLayout from 'src/components/cardsLayout'
 class RightCard extends React.Component<{}, {}> {
    public render() {
        const cardLeftRender = ():any => (
            <div>left..</div>
        )
        const cardRightRender = ():any => (
            <div>right..</div>
        )
        return (
            <CardsLayout>
                {cardLeftRender()}
                {cardRightRender()}
            </CardsLayout>
        )
    }
}

export default RightCard
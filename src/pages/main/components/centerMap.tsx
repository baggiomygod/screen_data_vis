import * as React from 'react'
import MapLayout from 'src/components/mapLayout'
class CenterMap extends React.Component<{}, {}> {
    public render() {
        return (
            <MapLayout>
                <div>top</div>
                <div>bottom</div>
            </MapLayout>
        )
    }
}

export default CenterMap
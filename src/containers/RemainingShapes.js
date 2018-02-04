import React from 'react';
import {Group} from 'react-konva';
import ShapeComponent from '../components/ShapeComponent';
import { connect } from 'react-redux';

class RemainingShapes extends React.Component {

    constructor(props) {
        super(props);
    }

    getRemainingBlocksToShapes() {
        let shapes = [];
        for (const keyLine in this.props.area) {
            const line = this.props.area[keyLine];
            for (const keyblock in line) {
                const blockValue = line[keyblock];
                if (keyLine != 25 && keyblock != 0 && keyblock != 11 && blockValue == 1) {
                    const x = keyblock*20;
                    const y = keyLine*20;
                    const shape = [
                        [x-20, y],
                        [x-20, y+20],
                        [x, y+20],
                        [x, y],
                    ];
                    shapes.push(shape);
                }
            }
        }
        return shapes;
    };

    render() {
        const shapes = this.getRemainingBlocksToShapes();
        const remainingShapes = shapes.map((shape, index) => (
            <ShapeComponent color='#ffffff' coordinates={shape} key={index} />
        ));

        return (
            <Group x="0" y="0" test={this.props.area}>
                {remainingShapes}
            </Group>
        );
    }
}

const mapStatesToProps = (state) => {
    return {
        area: state.area,
    }
};

export default connect(mapStatesToProps)(RemainingShapes);
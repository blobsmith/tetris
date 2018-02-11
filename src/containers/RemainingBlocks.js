import React from 'react';
import {Group} from 'react-konva';
import ShapeComponent from '../components/ShapeComponent';
import { connect } from 'react-redux';

class RemainingBlocks extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            blockSize: 20
        };
    }

    convertRemainingBlocksToShapes() {
        let shapes = [];
        for (const keyLine in this.props.area) {
            const line = this.props.area[keyLine];
            for (const keyblock in line) {
                const blockValue = line[keyblock];
                if (keyLine != 25 && keyblock != 0 && keyblock != 11 && blockValue == 1) {
                    const x = keyblock*this.state.blockSize;
                    const y = keyLine*this.state.blockSize;
                    const shape = [
                        [x-this.state.blockSize, y],
                        [x-this.state.blockSize, y+this.state.blockSize],
                        [x, y+this.state.blockSize],
                        [x, y],
                    ];
                    shapes.push(shape);
                }
            }
        }
        return shapes;
    };

    render() {
        const shapes = this.convertRemainingBlocksToShapes();
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

export default connect(mapStatesToProps)(RemainingBlocks);
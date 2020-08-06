import { connect } from 'react-redux';
import TeaIndex from './tea_index';

const mapStateToProps = (state) => {
    return {
        teas: Object.values(state.teas)
    };
};

const mapDispatchToProps = () => {

    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeaIndex);
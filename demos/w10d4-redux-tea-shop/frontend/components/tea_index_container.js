import {connect} from 'react-redux';
import TeaIndex from './tea_index';
import {receiveTea} from './../actions/tea_actions';
import { selectAllTeas } from './../reducers/selectors';

const mapStateToProps = (state) => ({
    teas: selectAllTeas(state)
})

const mapDispatchToProps = dispatch => ({
    receiveTea: tea => dispatch(receiveTea(tea))
})

export default connect(mapStateToProps, mapDispatchToProps)(TeaIndex)
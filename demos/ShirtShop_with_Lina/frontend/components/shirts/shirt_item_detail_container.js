import { connect } from 'react-redux'
import ShirtItemDetail from './shirt_item_detail'

import {fetchShirtDetail} from './../../actions/shirt_actions'
import { getReviews } from '../../reducers/selectors'


const mapStateToProps = (state, ownProps) => {
    return {
        shirt: state.shirts[ownProps.shirtId],
        reviews: getReviews(state, ownProps.shirtId)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchShirtDetail: (shirtId) => dispatch(fetchShirtDetail(shirtId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShirtItemDetail)
import React, { Component } from 'react';

import { connect } from 'react-redux';

import PatternDiscoveryPage from '../../pages/PatternDiscovery/PatternDiscovery';
import * as videoUploadActionType from '../../store/actions/videoupload-actions';


class PatternDiscovery extends Component {

    componentDidMount(){
        this.props.fetchUploadedVideos();
    }
    render() {
        return (
            <PatternDiscoveryPage files={this.props.files} />
        )
    };
}

const mapStateToProps = state => {
    return {
        files: state.files
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUploadedVideos: () => dispatch({type: videoUploadActionType.REQUEST_UPLOADED_VIDEOS})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatternDiscovery);
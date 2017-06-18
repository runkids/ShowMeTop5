import React, { Component } from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props) => {
    const videoItems = props.videos.map((video, index) => {
        return <VideoListItem onVideoSelect={props.onVideoSelect} data={video} key={video.etag} />
    });
    return (
        <ul className='col-md-4 list-group'>
            {videoItems}
        </ul>
    );
}

export default VideoList;
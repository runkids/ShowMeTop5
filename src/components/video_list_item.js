import React from 'react';

const VideoListItem = ({ data, onVideoSelect }) => {
    const imgUrl = data.snippet.thumbnails.default.url
    // console.log(data);
    return (

        <li onClick={() => { onVideoSelect(data) }} className='list-group-item'>
            <div className='video-list media'>
                <div className='media-left'>
                    <img className='media-object' src={imgUrl} />
                </div>
                <div className='media-body'>
                    <div className='media-heading'>{data.snippet.title}</div>
                </div>
            </div>
        </li>

    );
}

export default VideoListItem;
import React from "react";

const VideoDetail = ({video}) => {
    console.log(video);
    if (!video) {
        return <div>Loading...</div>
    }else {
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
        return (
            <div>
                <div className="ui embed">
                    <iframe src={videoSrc} title={video.snippet.title}
                    ></iframe>
                </div>
                <div className="ui segment">
                    <h4>{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        )    
    }
}
    


export default VideoDetail;
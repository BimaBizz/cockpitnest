// components/availableComponents/VideoComponent.js
const VideoComponent = ({ data, remove }) => (
    remove ? null : <video {...data.attr} className={`video ${data.class}`} />
  );
  
  export default VideoComponent;
  
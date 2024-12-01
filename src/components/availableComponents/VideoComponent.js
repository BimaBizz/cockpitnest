// components/availableComponents/VideoComponent.js
const VideoComponent = ({ data, remove }) => {
  if (remove) return null;

  return (
    <video
      src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${data.video.path}`}
      poster={data.poster ? `${process.env.NEXT_PUBLIC_ASSETS_URL}${data.poster.path}` : undefined}
      className="w-full max-w-3xl mx-auto my-4 rounded-lg shadow-lg aspect-video"
      {...Object.fromEntries(data.attr.map(attr => [attr, true]))}
    />
  );
};

export default VideoComponent;


//Videos for 840px and above
import modellingVideo from './videos/modellingVideo.mp4';
import uavVideo from './videos/uavVideo.mp4';
import engineeringVideo from './videos/engineeringVideo.mp4';

// Videos minimized (phone / tablets) for 840px and below

import modellingVideo_min from './videos/modellingVideo_min.mp4';
import uavVideo_min from './videos/uavVideo_min.mp4';
import engineeringVideo_min from './videos/engineeringVideo_min.mp4';

const videos = {
  modelling: {
    detailed: modellingVideo,
    minimized: modellingVideo_min,
  },
  uav: {
    detailed: uavVideo,
    minimized: uavVideo_min,
  },
  engineering: {
    detailed: engineeringVideo,
    minimized: engineeringVideo_min,
  },
};

export default videos;

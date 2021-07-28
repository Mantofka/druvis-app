import { storage } from "../components/firebase";
import { FETCH_SECTION_VIDEOS } from "../actions";

export const fetchSectionVideos = (dispatch, sectionVideos) => {
  storage
    .ref()
    .child("SectionVideos/")
    .listAll()
    .then((res) =>
      res.prefixes.map((prefix) => {
        let videoQuality = prefix.name;
        prefix.listAll().then((folder) =>
          folder.items.map((video) => {
            let videoName = video.name;
            video
              .getDownloadURL()
              .then((url) =>
                importVideo(
                  url,
                  videoName,
                  videoQuality.toLowerCase(),
                  sectionVideos,
                  dispatch
                )
              );
          })
        );
      })
    );
};
const importVideo = (url, name, quality, videos, dispatch) => {
  Object.keys(videos).map((key) => {
    if (name.includes(key)) {
      videos[key][quality] = url;
      dispatch({ type: FETCH_SECTION_VIDEOS, payload: videos});
      //console.log(videos[key][quality]);
    }
  });
};

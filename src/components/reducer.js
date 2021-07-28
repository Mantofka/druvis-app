export const initialState = {
  user: null,
  isModalAddPostOpened: false,
  isModalAddPhotosOpened: false,
  isGalleryModalOpened: false,
  isChangeHeroModalOpened: false,
  isDeletePhotoSectionOpened: false,
  fetchedHeroImages: [],
  sectionVideos: { modelling: {}, uav: {}, engineering: {} },
  Quene: [],
  isUploading: false,
  alertMessage: {
    color: "",
    message: "",
    condition: true,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "CHANGE_POST_MODAL":
      return {
        ...state,
        isModalAddPostOpened: !state.isModalAddPostOpened,
      };
    case "CHANGE_PHOTO_MODAL":
      return {
        ...state,
        isModalAddPhotosOpened:
          action.payload !== undefined
            ? action.payload
            : !state.isModalAddPhotosOpened,
      };
    case "CHANGE_GALLERY_MODAL":
      return {
        ...state,
        isGalleryModalOpened: action.payload,
      };
    case "CHANGE_HERO_MODAL":
      return {
        ...state,
        isChangeHeroModalOpened:
          action.payload !== undefined
            ? action.payload
            : !state.isChangeHeroModalOpened,
      };
    case "CHANGE_DELETE_PHOTO_MODAL":
      return {
        ...state,
        isDeletePhotoSectionOpened:
          action.payload !== undefined
            ? action.payload
            : !state.isDeletePhotoSectionOpened,
      };
    case "FETCH_HERO_IMAGES":
      return {
        ...state,
        fetchedHeroImages: action.payload,
      };
    case "FETCH_SECTION_VIDEOS":
      return {
        ...state,
        sectionVideos: action.payload,
      };
    case "ADD_TO_QUENE":
      return {
        ...state,
        Quene: [...state.Quene, action.payload],
      };
    case "REMOVE_FROM_QUENE":
      return {
        ...state,
        Quene: [...state.Quene.slice(action.index, state.Quene.length)],
      };
    case "CHANGE_IS_UPLOADING":
      return {
        ...state,
        isUploading: action.payload,
      };
    case "CHANGE_ALERT_MESSAGE":
      return {
        ...state,
        alertMessage: { ...action.payload },
      };
    default:
      return state;
  }
};

export default reducer;

export const openGalleryModal = (current, index, dispatch, state) => {
    state([current, index]);
    dispatch({
      type: 'CHANGE_GALLERY_MODAL',
      payload: true,
    });
  };
import { storage, db } from '../components/firebase';
import firebase from '../components/firebase';

// Reusable functions.
import { handleAlert } from '../reusable-functions/DispatchAlert';

export const AddToQuene = (dispatch, quenePayload) => { // Adds images to uploading quene
  const { section, subSection, name, type, startingDest, overallLength } =
    quenePayload;
  let path =
    section.includes('engineering-images') ||
    section.includes('modelling-images') ||
    section.includes('uav-images')
      ? `${subSection.slice(0, subSection.length - 1)}-images`
      : section;
  dispatch({
    type: 'ADD_TO_QUENE',
    payload: {
      sourceName: name,
      sourceType: type,
      bigSource: `${startingDest}Big/min_${name}`,
      smallSource: `${startingDest}Small/min_${name}`,
      section: path,
      overallLength: overallLength,
    },
  });
};

export const UpdateFirestore = (dispatch, Quene, isUploading) => {
  if (Quene.length > 0 && isUploading) {
    handleAlert('PROGRESS', 'Įkeliamos nuotraukos.', dispatch, false);

    setTimeout(() => {
      try {
        Quene.map((task, i) => {
          var smallURL = '';
          var bigURL = '';
          storage
            .ref()
            .child(task.smallSource)
            .getDownloadURL()
            .then((urlSmall) => {
              smallURL = urlSmall;
            })
            .then(() => {
              storage
                .ref()
                .child(task.bigSource)
                .getDownloadURL()
                .then((urlBig) => {
                  bigURL = urlBig;
                });
            })
            .then(() => {
              setTimeout(() => {
                db.collection(task.section).add({
                  createdAt: firebase.firestore.Timestamp.now(),
                  sourceSmallURL: smallURL,
                  sourceBigURL: bigURL,
                  sourceName: task.sourceName,
                  type: task.sourceType,
                });
                dispatch({
                  // Removes uploaded image from QUENE in Context API
                  type: 'REMOVE_FROM_QUENE',
                  index: i + 1,
                });
              }, 1000);
            });
        });
        handleAlert('SUCCESS', 'Nuotraukos sėkmingai įkeltos.', dispatch);
      } catch (error) {
        UpdateFirestore(dispatch, Quene, isUploading);
      }
    }, 10000);
  }
};

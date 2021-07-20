import { db } from '../components/firebase';

export const fetchImages = (section, output, data = 'simple') => {
  output([]);

  db.collection(section || 'laser-images')
    .get()
    .then((snapshot) => {
      snapshot.docs.map((doc) => {
        data === 'detailed' && output((prevState) => [...prevState, doc]);
        data === 'simple' && output((prevState) => [...prevState, doc.data()]);
      });
    });
};

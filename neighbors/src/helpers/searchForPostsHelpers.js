import { onSnapshot, query, orderBy, limit, where, documentId } from 'firebase/firestore';
export const showStartPost = (offerHelpPostsData, setOffetHelpPosts, usersData, idArray, setUserArray) => {
  onSnapshot(query(offerHelpPostsData, orderBy('createdAt', 'desc'), limit(5)), (querySnapshot) => {
    const q = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setOffetHelpPosts(q);

    q.map((element, index) => {
      idArray[index] = element.userID;
    });
    let colection = {};
    onSnapshot(query(usersData, where(documentId(), 'in', idArray)), (querySnapshot) => {
      const q = querySnapshot.docs.forEach((element) => {
        colection[element.id] = { ...element.data() };
      });
      setUserArray(colection);
    });
  });
};

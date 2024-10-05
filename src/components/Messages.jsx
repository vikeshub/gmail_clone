import React, { useEffect } from "react";
import Message from "./Message";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setEmails } from "../redux/appSlice";
import store from "../redux/store";
function Messages() {
  const dispatch = useDispatch();
  const { emails } = useSelector((store) => store.app);

  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allemails = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(setEmails(allemails));
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>{emails && emails?.map((email) => <Message email={email} />)}</div>
  );
}

export default Messages;

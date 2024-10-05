import React, { useEffect, useState } from "react";
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
  const { searchText, emails } = useSelector((store) => store.app);
  const [tempEmails, setTempEmails] = useState(emails);
  const dispatch = useDispatch();

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

  useEffect(()=>{
const filteredEmail=emails?.filter((email)=>{
    return email.subject.toLowerCase().includes(searchText.toLowerCase()) || email.to.toLowerCase().includes(searchText.toLowerCase()) || email.message.toLowerCase().includes(searchText.toLowerCase())

})
    setTempEmails(filteredEmail);

  },[searchText,emails])
 
  return (
    <div>{tempEmails && tempEmails?.map((email) => <Message email={email} />)}</div>
  );
}

export default Messages;

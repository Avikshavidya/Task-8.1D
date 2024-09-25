import React, { useState } from 'react';
import { db, storage } from '../firebase/firebaseConfig';

function PostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const savePost = async () => {
    if (image) {
      const storageRef = storage.ref(`images/${image.name}`);
      const snapshot = await storageRef.put(image);
      const imageUrl = await snapshot.ref.getDownloadURL();

      await db.collection("posts").add({
        title,
        content,
        imageUrl,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    }
  };

  return (
    <div>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" />
      <input type="file" onChange={handleImageChange} />
      <button onClick={savePost}>Save Post</button>
    </div>
  );
}

export default PostForm;

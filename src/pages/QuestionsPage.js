import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig';
import { Card, Button } from 'semantic-ui-react';

function QuestionsPage() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("questions")
      .orderBy("createdAt", "desc")
      .onSnapshot(snapshot => {
        const questionsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setQuestions(questionsData);
      });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {questions.map(question => (
        <Card key={question.id}>
          <Card.Content>
            <Card.Header>{question.title}</Card.Header>
            <Card.Meta>{new Date(question.createdAt.seconds * 1000).toDateString()}</Card.Meta>
            <Card.Description>{question.content}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button basic color='green'>View Details</Button>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}

export default QuestionsPage;

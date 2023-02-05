import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  useEffect(() => {
    let mounted = true;
    fetch('http://localhost:3000/api/users')
      .then((result) => result.json())
      .then((data) => {
        console.log({ data });
        if (!mounted) {
          return
        }

        setUsers(data);
      });
    return () => {
      mounted = false;
    };
  },
    []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>List of Users from Ionic React App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">List of Users from Ionic React App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <p>
          {users.map((user) => (
            <li key={user.id}>
              {user.name}
            </li>
          ))}
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

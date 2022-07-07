import { IonButton, IonContent, IonHeader, IonIcon, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import './Home.css';

const ImageView: React.FC = () => {
  const a_image = 'https://images.unsplash.com/photo-1542641728-6ca359b085f4?'
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Image</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      <IonImg src={a_image} />

      <IonButton routerLink='/'>
        <IonIcon slot='start' icon={arrowBack} />
        Home
      </IonButton>
       
      </IonContent>

    </IonPage>
  );
};

export default ImageView;
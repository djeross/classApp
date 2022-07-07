import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import '../theme/variables.css'
import { listOutline, imagesOutline} from 'ionicons/icons'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Assignment 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen >
        <IonButton color="secondary" routerLink='/course-list'>
          <IonIcon slot='start' icon={listOutline} />
          Courses
        </IonButton>
        <IonButton routerLink='/image'>
        <IonIcon slot='start' icon={imagesOutline} />
          Image
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;

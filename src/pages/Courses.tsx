import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { map, arrowBack } from 'ionicons/icons';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Courses: React.FC = () => {
    const major_list = ["BSc. General - Computer Science Major", "BSc. General - Software Engineering Major",
    "BSc Information Technology", "BSc. Software Engineering (Mobile Application Technologies)",
    "BSc Computer Studies Option"]
    const minor_list = ["Minor in Computer Science","Minor in Software Engineering","Minor in Information Technology"]

    return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Courses</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen >
            <IonHeader>Majors</IonHeader>
            <IonList>
                {
                    major_list.map(element=>{
                        return(
                            <IonItem key={major_list.indexOf(element)}>
                                <IonLabel>{element}</IonLabel>
                            </IonItem>
                        )
                    })
                }
            </IonList>


            <IonHeader>Minors</IonHeader>
            <IonList>
                {
                    minor_list.map(element=>{
                        console.log(minor_list.indexOf(element));
                        return(
                            
                            <IonItem key={minor_list.indexOf(element)}>
                                <IonLabel>{element}</IonLabel>
                            </IonItem>
                        )
                    })
                }
            </IonList>

            <IonButton routerLink='/'>
                <IonIcon slot='start' icon={arrowBack} />
                Home
            </IonButton>
  
        </IonContent>
        
    </IonPage>
    );
};

export default Courses;
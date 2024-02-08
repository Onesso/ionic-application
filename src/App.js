import {
  setupIonicReact,
  IonButton,
  useIonToast,
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";

import { accessibility } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

setupIonicReact(); //it is set up outside the function so as to be envoked once.

export default function App() {
  const [present] = useIonToast();

  const handleClick = () => {
    present({
      message: "hello",
      duration: 1500,
      position: "bottom",
    });

    console.log("Whats up");
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Title</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>Add some content here…</p>
        <IonButton color="warning" onClick={handleClick}>
          <ion-icon icon={accessibility} size="large"></ion-icon>
          accessibility
        </IonButton>
      </IonContent>
    </IonApp>
  );
}

// export default App;

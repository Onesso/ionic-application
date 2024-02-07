import { setupIonicReact, IonButton, useIonToast, IonIcon } from "@ionic/react";

import { logoIonic, playForward, accessibility, play } from "ionicons/icons";

import "@ionic/react/css/core.css";

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
    <div>
      <header>
        <h1>My App supp</h1>
      </header>
      <main>
        <p>Add some content here…</p>

        <IonButton color="warning" onClick={handleClick}>
          <IonIcon icon={playForward} slot="start" />
          <ion-icon icon={accessibility} size="large"></ion-icon>
          Suup
          <ion-icon icon={play} size="large"></ion-icon>
        </IonButton>
      </main>
    </div>
  );
}

// export default App;

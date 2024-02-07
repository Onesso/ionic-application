import { setupIonicReact, IonButton, useIonToast } from "@ionic/react";

import "@ionic/react/css/core.css";

setupIonicReact(); //it is set up outside the function so as to be envoked once.

export default function App() {

  const [present] = useIonToast();

  const handleClick = () => {

  present({
    message: "hello",
    duration: 1500,
    position: 'bottom'
  })

    console.log("Whats up");
  };

  return (
    <div>
      <header>
        <h1>My App supp</h1>
      </header>
      <main>
        <p>Add some content here…</p>
        <IonButton fill="outline" onClick={handleClick}>
          Suup
        </IonButton>
      </main>
    </div>
  );
}

// export default App;

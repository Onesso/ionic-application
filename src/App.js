import { setupIonicReact, IonButton } from "@ionic/react";

import "@ionic/react/css/core.css";

setupIonicReact(); //it is set up outside the function so as to be envoked once.

function App() {
  return (
    <div>
      <header>
        <h1>My App supp</h1>
      </header>
      <main>
        <p>Add some content here…</p>
        <IonButton fill="outline">Suup</IonButton>
      </main>
    </div>
  );
}

export default App;

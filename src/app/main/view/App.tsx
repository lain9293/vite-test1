import { Provider } from "react-redux";
import DogsList from "../../dogs/view/DogsList";
import BloodTestView from "../../laboratory/view/BloodTest";
import BloodTestList from "../../laboratory/view/BloodTestList";
import Card from "../../shared/components/Card";
import { store } from "../data/appStore";
import "./App.css";

function AppProvider() {

  const x = (items: string[]) => {
    if (items) {
      return items[0].toUpperCase();
    }
  }

  return (
    <Provider store={store}>
      <main className="laboratory">
        <h1 className="laboratory__heading">Laboratorio S.A.</h1>
        <section className="laboratory__content">
          <Card
            id="blood-test-form"
            title="Tomar muestra de sangre"
            subtitle="Diligencie el formulario para consultar el nivel de riesgo de un paciente"
          >
            <BloodTestView />
          </Card>
          <Card
            id="blood-test-filter-tests"
            title="Filtrar muestras de sangre realizadas"
            subtitle="Diligencie el número de identificación para consultar el nivel de riesgo de un paciente"
          >
            <BloodTestList />
          </Card>
        </section>
        <h2 className="laboratory__dogs">Dogs</h2>
        <DogsList />
      </main>
    </Provider>
  );
}

export default AppProvider;

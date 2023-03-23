import { useEffect, useState } from "react";
import Button from "../../shared/components/Button";
import Input from "../../shared/components/Input";
import { useFilterBloodTestController } from "../controller/useFilterBloodTestController";
import { useBloodTestStoreImplementation } from "../data/BloodTestStoreImpl";
import { BloodTest } from "../domain/BloodTestEntity";
import BloodTestTable from "./BloodTestTable";
import "./BloodTestList.css";

const BloodTestList = () => {
  const store = useBloodTestStoreImplementation();
  const { bloodTests, filterBloodTest } = useFilterBloodTestController(store);
  const [searchTest, setSearchTest] = useState("");
  const [localBloodTests, setLocalBloodTests] = useState<BloodTest[]>([]);

  useEffect(() => {
    setLocalBloodTests(bloodTests);
  }, [bloodTests]);

  const handleChangeSearch = (value: string) => {
    setSearchTest(value === "" ? "0" : value);
  };

  const handleSearch = () => {
    setLocalBloodTests(filterBloodTest(searchTest));
  };

  return (
    <article className="bloodtest-list">
      <div className="bloodtest-list__search">
        <Input
          id="blood-test-search"
          name="searchText"
          pattern="[0-9]*"
          value={searchTest}
          labelText="Filtrar por número de identificación"
          maxLength={15}
          onChange={handleChangeSearch}
        />
        <Button
          id="button-blood-test-search"
          text="Filtrar muestra de sangre"
          isDisabled={!searchTest}
          onClick={handleSearch}
        />
      </div>
      <div className="bloodtest-list__content">
        <BloodTestTable bloodTests={localBloodTests} />
      </div>
    </article>
  );
};

export default BloodTestList;

import React, { useState } from "react";
import axios from "axios";
import { FoundedItem } from "./utils/types";
import FormInp from "./components/FormInp";
import ResultList from "./components/ResultList";
import { host } from "./utils/constants";
import { useFormattedInput } from "./hooks/useFormattedNumber";
function App() {
  const [email, setEmail] = useState("");
  const [founded, setFounded] = useState<FoundedItem[]>([
    { email: "", number: null },
  ]);
  const [loading, setLoading] = useState(false);
  const [number, numberChange] = useFormattedInput("");

  const submitForm = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(`${host}/api/login/check`, {
        email,
        number: number,
      });
      setFounded(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <FormInp
        email={email}
        setEmail={setEmail}
        submitForm={submitForm}
        number={number}
        numberChange={numberChange}
      />
      <ResultList loading={loading} founded={founded} />
    </div>
  );
}

export default App;

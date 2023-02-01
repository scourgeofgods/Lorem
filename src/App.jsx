import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };
  return (
    <section className="lorem">
      <div className="container">
        <div className="row gy-3 justify-content-center text-center">
          <div className="col-lg-7">
            <h3 className="text-uppercase">tired of boring lorem ipsum?</h3>
            <form
              className="form d-flex aling-items-center justify-content-center gap-2"
              onSubmit={handleSubmit}
            >
              <label htmlFor="amount" className="text-capitalize">
                paragraphs:
              </label>
              <input
                type="number"
                name="amount"
                id="amount"
                value={count}
                onChange={(e) => setCount(e.target.value)}
              />
              <button className="btn btn-primary">generate</button>
            </form>
            <article>
              {text.map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import {
  Input,
  Select,
} from './form-controls';
import Form from './form';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <img
          src={logo}
          alt="React logo"
          className="app__logo"
        />
        <h1 className="app__title">
          Reusable forms
        </h1>
        <a
          className="link app__header-link"
          href="https://www.nick-omen.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nikita Nikitin
        </a>
      </header>
      <main className="app__main">
        <Form
          className="app__form"
          onSubmit={(data) => { console.log(data); }}
        >
          <Input
            label="Some input"
            name="input"
          />
          <Select
            label="Some select"
            name="select"
            options={['one', 'two', 'three']}
          />
        </Form>
      </main>
    </div>
  );
}

export default App;

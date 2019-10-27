import React from 'react';

import logo from '../../assets/logo.svg';
import search from '../../assets/search.svg';
import nearMe from '../../assets/nearMe.svg';

import { Container, Content, Form, Button } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Logo" />
        <Form>
          <label htmlFor="location">
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Previsão do tempo para..."
            />
            <img src={search} alt="Procurar" />
          </label>
          <Button type="button">
            <img src={nearMe} alt="Localização atual" />
            Localização atual
          </Button>
        </Form>
      </Content>
    </Container>
  );
}

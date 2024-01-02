import React, { Component } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";

class CampaignNew extends Component {
  state = {
    minimumContribution: "",
    name: "",
    errorMessage: "",
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      const minimumAmount = parseFloat(this.state.minimumContribution)
      const name = this.state.name;
      await factory.methods
        .createCampaign(web3.utils.toWei(minimumAmount , "ether"), name)
        .send({
          from: accounts[0],
        });

      Router.pushRoute("/");
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3>Criar Projeto</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Nome</label>
            <Input
              placeholder="Digite o nome do Projeto"
              value={this.state.name}
              onChange={(event) =>
                this.setState({ name: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Contribuição mínima</label>
            <Input
              label="ETH"
              labelPosition="right"
              placeholder="Digite o valor mínimo de contribuição(ETH)"
              value={this.state.minimumContribution}
              onChange={(event) =>
                this.setState({ minimumContribution: event.target.value })
              }
            />
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>
            Salvar
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;

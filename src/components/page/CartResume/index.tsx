"use client";

import styled from "styled-components";

interface Props {
  totalItemsPrice: string;
  handleFinishCart: () => void;
  deliveryFee: string;
  totalPriceWDeliveryFee: string;
}

const Container = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 75vh;
  background-color: var(--shapes-light);
  padding: 1.2rem 1.6rem;
  font-size: 1.6rem;
  font-weight: 400;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    color: var(--text-dark-2);
  }

  hr {
    color: var(--shapes);
  }

  button {
    width: 100%;
    height: 4.4rem;
    border-radius: 0.4rem;
    margin-bottom: 0.4rem;
    font-size: 1.6rem;
    font-weight: 500;
    border: none;
    background-color: var(--green);
    color: var(--shapes-light);
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }

  p {
    font-size: 1.4rem;
    font-weight: 500;
    text-decoration: underline;
    color: var(--text-dark);
    cursor: pointer;
    margin: 0.2rem 0;
  }
`;

const TotalTable = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  margin: 2rem 0;

  > div {
    margin: 0.4rem 0;
  }
`;

const Totals = styled.div`
  font-weight: 600;
  justify-self: end;
`;

export default function CartResume({
  totalItemsPrice,
  handleFinishCart,
  deliveryFee,
  totalPriceWDeliveryFee,
}: Props) {
  return (
    <Container>
      <div>
        <h2>RESUMO DO PEDIDO</h2>
        <TotalTable>
          <div>Subtotal de produtos</div>
          <Totals>{totalItemsPrice}</Totals>
          <div>Entrega</div>
          <Totals>{deliveryFee}</Totals>
        </TotalTable>
        <hr />
        <TotalTable>
          <div>Total</div>
          <Totals>{totalPriceWDeliveryFee}</Totals>
        </TotalTable>
        <button onClick={handleFinishCart}>FINALIZAR A COMPRA</button>
      </div>

      <div>
        <p>AJUDA</p>
        <p>REEMBOLSOS</p>
        <p>ENTREGAS E FRETE</p>
        <p>TROCAS E DEVOLUÇÕES</p>
      </div>
    </Container>
  );
}

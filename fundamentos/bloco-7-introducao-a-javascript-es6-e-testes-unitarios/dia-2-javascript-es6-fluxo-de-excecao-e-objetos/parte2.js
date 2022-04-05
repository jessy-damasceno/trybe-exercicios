const order = {
  name: 'Rafael Andrade',
  phoneNumber: '(11) 98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const ana = order.order.delivery.deliveryPerson;
const adress = order.address;
// console.log(order.order.delivery.deliveryPerson);

// const deliveryPerson = Object.entries(order);
// console.log(deliveryPerson[3][1].delivery.deliveryPerson);

const customerInfo = (order) => {
  console.log(`Olá ${ana}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${adress.street}, N: ${adress.number}, AP: ${adress.apartment}`);
}

// customerInfo(order);

const order2 = Object.assign(order);
order2.name = 'Luiz Silva';
order2.payment.total = 50;

const orderModifier = (order) => {
  const pizzas = Object.keys(order.order.pizza)
  console.log(`Olá ${order.name}, o total do seu pedido de ${pizzas} e Coca-Cola Zero é R$ ${order.payment.total}`);
}

orderModifier(order2);
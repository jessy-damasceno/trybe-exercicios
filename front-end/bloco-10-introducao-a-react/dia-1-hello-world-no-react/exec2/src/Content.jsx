import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

export class Content extends React.Component {
  render() {
    return (
      <ol>
          { conteudos.map((conteudo) => {
            return (
              <li key={conteudo.conteudo}>
                <h1 className='bg-slate-400 text-center my-4'>
                  { `O conteúdo é: ${conteudo.conteudo}` }
                </h1>

                <p>
                  { `Status: ${conteudo.status}` }
                </p>

                <p>
                  { `Bloco: ${conteudo.bloco}` }
                </p>
              </li> 
            )
          })
        }
      </ol>
    )
  }
}
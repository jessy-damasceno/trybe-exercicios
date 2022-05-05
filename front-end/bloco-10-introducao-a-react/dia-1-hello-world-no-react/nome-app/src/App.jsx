const Task = (value) => {
  return (
    <li>
        <h1>
          {value}
        </h1>
    </li>
  );
}

const tasks = [
  'Jogar Lig of Légis',
  'Assistir Dr. Strange',
  'Faltar ao fechamento',
  'Reclamar no Slack',
];

// function App() {
//   return (
//     <ol>
//       { tasks.map(Task) }
//     </ol>
//   );
// }

const App = () => <ul>{ tasks.map(Task) }</ul>

export default App;

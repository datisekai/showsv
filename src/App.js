import logo from './logo.svg';
import './App.css';
import StudentInfoComponent from './components/StudentInfoComponent';


function App() {
  const students = [{
    "id": 1,
    "name": "Cheston",
    "age": 1,
    "address": "85698 Oriole Park"
  }, {
    "id": 2,
    "name": "Abba",
    "age": 2,
    "address": "9380 Roxbury Park"
  }, {
    "id": 3,
    "name": "Jada",
    "age": 3,
    "address": "720 Sauthoff Lane"
  }, {
    "id": 4,
    "name": "Nicolis",
    "age": 4,
    "address": "3183 Kingsford Crossing"
  }, {
    "id": 5,
    "name": "Sandy",
    "age": 5,
    "address": "8520 Elka Park"
  }, {
    "id": 6,
    "name": "Meredith",
    "age": 6,
    "address": "718 Summit Place"
  }, {
    "id": 7,
    "name": "Deanne",
    "age": 7,
    "address": "87775 Hallows Road"
  }, {
    "id": 8,
    "name": "Horten",
    "age": 8,
    "address": "324 Fair Oaks Hill"
  }, {
    "id": 9,
    "name": "Kerrill",
    "age": 9,
    "address": "9 Golf Course Road"
  }, {
    "id": 10,
    "name": "Somerset",
    "age": 10,
    "address": "620 Towne Avenue"
  }];
  return (
    <div className="App">
      <StudentInfoComponent students={students}/>
    </div>
  );
}

export default App;

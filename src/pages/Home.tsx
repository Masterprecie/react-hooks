import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Learn All react Hooks</h1>
      <p>Click on the links to continue learning</p>
      <ul>
        <li>
          <Link to="/use-state">UseState Hook</Link>
        </li>
        <li>
          <Link to="/use-effect">UseEffect Hook</Link>

        </li>
        <li>
          <Link to="/use-memo">UseMemo Hook</Link>
        </li>
        <li>
          <Link to="/use-callback"> UseCallback Hook</Link>
        </li>
        <li>
          <Link to="/use-context"> UseContext Hook</Link>
        </li>
        <li>
          <Link to="/use-ref"> UseRef Hook</Link>
        </li>
        <li>
          <Link to="/file-upload"> File Upload Component</Link>
        </li>
        <li>
          <Link to="/form"> Form</Link>
        </li>
      </ul>
    </div>
  );
}

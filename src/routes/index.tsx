/* eslint-disable import/prefer-default-export */
import { createBrowserRouter } from 'react-router-dom';
import UseState from '../hooks/useState';
import UseEffect from '../hooks/useEffect';
import Home from '../pages/Home';
import UseMemo from '../hooks/useMemo';
import UseCallback from '../hooks/useCallback';
import Dashboard from '../hooks/useContext/Dashboard';
import { UseRef } from '../hooks/useRef';
import FileUpload from '../components/fileUploads/FileUpload';
import Form from '../components/fileUploads/Form';
import UseReducer from '../hooks/useReducer';
import UseImperative from '../hooks/useImperative';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/use-state', element: <UseState /> },
  { path: '/use-effect', element: <UseEffect /> },
  { path: '/use-memo', element: <UseMemo /> },
  { path: '/use-callback', element: <UseCallback /> },
  { path: '/use-context', element: <Dashboard /> },
  { path: '/use-ref', element: <UseRef /> },
  { path: '/use-reducer', element: <UseReducer /> },
  { path: '/use-imperative', element: <UseImperative /> },
  { path: '/file-upload', element: <FileUpload /> },
  { path: '/form', element: <Form /> },
  // { path: '/:pathMatch(.*)', element: <NoMatch /> },
]);

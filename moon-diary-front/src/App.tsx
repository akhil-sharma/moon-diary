import { FC, createContext } from "react"
import useGetMoonData, {MoonInfo} from './useGetMoonData.ts';

import Home from "./pages/home"

const LunarContext = createContext<MoonInfo | null>(null);

const App: FC = () => {
  const {data, loading, error} = useGetMoonData();
  return <div>
    <Home />
  </div>
}

export default App

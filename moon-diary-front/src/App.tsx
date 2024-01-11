import { FC } from "react"
import useGetMoonData from './useGetMoonData.ts';

// import Home from "./pages/home"

// const LunarContext = createContext<MoonInfo | null>(null);

const App: FC = () => {
  const {data, loading, error} = useGetMoonData();
  
  if (loading) {
    return <>loading...</>
  }

  if (error) {
    console.error(error.message)
    return <>
      There was an error fetching data...
    </>
  }

  return <div className="h-screen bg-color-background">
    <img src={data?.image.url} alt={data?.image.alt_text}/>
    </div>
}

export default App

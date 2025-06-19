import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input"
import { SendHorizontal } from 'lucide-react';
import FirstPage from "./FirstPage";

function App() {

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="text-center mb-5">CHAT APP</div>

      <div className="w-[600px] h-[600px] p-4 flex items-end border-1">
        <div className="w-full flex">
          <Input className="rounded-none" />
          <Button className="rounded-none  ml-4 bg-black text-white hover:scale-105 transition-transform duration-200">
            <SendHorizontal />
          </Button>
          <FirstPage />
        </div>
      </div>

    </div>
  )
}

export default App

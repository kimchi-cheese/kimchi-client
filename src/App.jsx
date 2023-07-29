import { BrowserRouter, Routes, Route } from "react-router-dom";

import OnboardingPage from "./pages/OnboardingPage";
import PeoplePage from "./pages/PeoplePage";
import MakePage from "./pages/MakePage";
import MyPage from "./pages/MyPage";
import DecoratePage from "./pages/DecoratePage";
import PreviewPage from "./pages/PreviewPage";
import BoastPage from "./pages/BoastPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OnboardingPage/>}/>
          <Route path="people" element={<PeoplePage/>}/>
          <Route path="make" element={<MakePage/>}/>
          <Route path="my" element={<MyPage/>}/>
          <Route path="decorate" element={<DecoratePage/>}/>
          <Route path="preview" element={<PreviewPage/>}/>
          <Route path="boast" element={<BoastPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
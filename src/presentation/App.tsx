import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/Main';
import { Logo } from './components/Logo';
import { PodcastPage } from './pages/Podcast';
import { EpisodePage } from './pages/Episode';

function App() {
  return (
    <BrowserRouter>
      <Logo></Logo>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/podcast/:podcastId" element={<PodcastPage />}></Route>
        <Route path="/podcast/:podcastId/episode/:episodeId" element={<EpisodePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/Main';
import { Logo } from './components/Logo';
import { PodcastPage } from './pages/Podcast';
import { EpisodePage } from './pages/Episode';
import { Styles } from './App.styles';

function App() {
  return (
    <Styles className="App">
      <BrowserRouter>
        <header>
          <Logo></Logo>
        </header>

        <hr></hr>

        <main>
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/podcast/:podcastId" element={<PodcastPage />}></Route>
            <Route path="/podcast/:podcastId/episode/:episodeId" element={<EpisodePage />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </Styles>
  );
}

export default App;

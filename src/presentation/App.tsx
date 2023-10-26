import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PodcastsPage } from './pages/Podcasts';
import { Logo } from './components/Logo';
import { PodcastPage } from './pages/Podcast';
import { EpisodePage } from './pages/Episode';
import { Styles } from './App.styles';
import { Suspense } from 'react';

function App() {
  return (
    <Styles className="App">
      <BrowserRouter>
        <header>
          <Logo></Logo>
        </header>

        <hr></hr>

        <main>
          <Suspense fallback={<div>Loading ...</div>}>
            <Routes>
              <Route path="/" element={<PodcastsPage />}></Route>
              <Route path="/podcast/:podcastId" element={<PodcastPage />}></Route>
              <Route path="/podcast/:podcastId/episode/:episodeId" element={<EpisodePage />}></Route>
            </Routes>
          </Suspense>
        </main>
      </BrowserRouter>
    </Styles>
  );
}

export default App;

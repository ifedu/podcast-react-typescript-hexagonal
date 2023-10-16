import { useEffect, useState } from 'react';
import { getPodcasts } from '../../infrastructure/getPodcasts';

export function handlePodcasts() {
  const [podcasts, setPodcasts] = useState([]);

  useEffect((): any => {
    (async () => {
      const podcastsData: any = await getPodcasts();
      setPodcasts(podcastsData);
    })();
  }, []);

  return podcasts;
}

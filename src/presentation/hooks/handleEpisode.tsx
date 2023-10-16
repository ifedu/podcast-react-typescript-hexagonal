import { useEffect, useState } from 'react';
import { getEpisode } from '../../infrastructure/getEpisode';

export function handleEpisode(podcastId: string, episodeId: string) {
  const [podcasts, setPodcasts] = useState([]);

  useEffect((): any => {
    (async () => {
      const podcastsData: any = await getEpisode(podcastId, episodeId);
      setPodcasts(podcastsData);
    })();
  }, []);

  return podcasts;
}

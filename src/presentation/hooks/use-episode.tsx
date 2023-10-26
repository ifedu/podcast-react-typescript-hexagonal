import { useEffect, useState } from 'react';
import { Episode } from '../../domain/entities/episode';

export function useEpisode(podcastId: string, episodeId: string) {
  const [podcasts, setPodcasts] = useState([]);

  useEffect((): any => {
    (async () => {
      const podcastsData: any = await Episode.instance.get(podcastId, episodeId);
      setPodcasts(podcastsData);
    })();
  }, []);

  return podcasts;
}

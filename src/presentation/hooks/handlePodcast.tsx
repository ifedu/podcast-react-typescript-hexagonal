import { useEffect, useState } from 'react';
import { getPodcast } from '../../infrastructure/getPodcast';
import { handlePodcasts } from './handlePodcasts';

export function handlePodcast(podcastId: string) {
  const [podcast, setPodcast] = useState([]);

  useEffect((): any => {
    (async () => {
      const podcastsData: any = await getPodcast(podcastId);
      setPodcast(podcastsData);
    })();
  }, []);

  return podcast;
}

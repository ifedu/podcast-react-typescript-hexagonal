import { useEffect, useState } from 'react';
import { GetPodcastsUseCase } from '../../application/get-podcasts.usecase';
import { PodcastRepository } from '../../infrastructure/podcast/podcast.repository';

export function usePodcasts() {
  const [filter, setFilter] = useState('');
  const [podcasts, setPodcasts] = useState([]);
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);

  useEffect((): any => {
    (async () => {
      const dataPodcasts: any = await new GetPodcastsUseCase(new PodcastRepository()).run();
      setPodcasts(dataPodcasts);
    })();
  }, []);

  useEffect((): any => {
    const filteredPodcasts = podcasts.filter((podcast: any) => {
      if (
        podcast.author.toLowerCase().includes(filter.toLowerCase()) ||
        podcast.name.toLowerCase().includes(filter.toLowerCase())
      ) {
        return podcast;
      }
    });

    setFilteredPodcasts(filteredPodcasts);
  }, [filter, podcasts]);

  return { filteredPodcasts, setFilter };
}

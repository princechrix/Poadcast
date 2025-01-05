import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

export class Episode {
  id: string;
  name: string;
  featured?: boolean;
}

export class CreateEpisodeDto {
  name: string;
  featured?: boolean;
}

@Injectable()
export class EpisodesService {
  private episodes: Episode[] = [
    {
      id: '1',
      name: 'Episode 1',
    },
  ];

  async findAll(sort: 'asc' | 'desc' = 'desc') {
    const sortAsc = (a: Episode, b: Episode) => (a.name > b.name ? 1 : -1);
    const sortDesc = (a: Episode, b: Episode) => (a.name < b.name ? 1 : -1);

    return sort === 'asc'
      ? this.episodes.sort(sortAsc)
      : this.episodes.sort(sortDesc);
  }

  async findFeatured() {
    return this.episodes.filter((episode) => episode.featured);
  }

  async findOne(id: string) {
    return this.episodes.find((episode) => episode.id === id);
  }

  async create(createEpisodeDto: CreateEpisodeDto) {
    const newEpisode = { ...createEpisodeDto, id: randomUUID() };
    this.episodes.push(newEpisode);
    return newEpisode;
  }
}

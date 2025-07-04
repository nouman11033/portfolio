'use client';

import React from 'react';
import { Photos, PhotoItem } from './photos';

const Sports = () => {
  const sportPhotos: PhotoItem[] = [
    {
      src: '/sports/tedx.jpg',
      alt: 'Speaking at TEDx Junior',
      caption: 'Speaking at TEDx Junior in high school',
    },
    {
      src: '/sports/science_fair.jpg',
      alt: 'Winning a science fair',
      caption: 'Winning a science fair with a virtual hologram project',
    },
    {
      src: '/sports/pezosensor.jpg',
      alt: 'Pezosensor green energy project',
      caption: 'Pezosensor project: walkable path generating green renewable electricity',
    },
    {
      src: '/sports/football_team.jpg',
      alt: 'School football team',
      caption: 'With my school football team (2 years)',
    },
    {
      src: '/sports/athletics.jpg',
      alt: 'Athletics event',
      caption: 'Athletics for 4 years',
    },
    {
      src: '/sports/mun_award.jpg',
      alt: 'Receiving MUN award',
      caption: 'Receiving MUN award (7 MUNs, committees like UNSC, UNICEF, DISEC)',
    },
    {
      src: '/sports/debate.jpg',
      alt: 'Debate competition',
      caption: 'Debate competition (6 debates)',
    },
    {
      src: '/sports/prefect.jpg',
      alt: 'School prefect',
      caption: 'As a school prefect, giving a speech',
    },
    {
      src: '/sports/book_competition.jpg',
      alt: 'Book writing/reading competition',
      caption: 'Book writing and reading competition',
    },
  ];

  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          My Sports & Extracurricular Achievements
        </h2>
        <p className="mt-4 text-muted-foreground">
          Here are some highlights from my journey: TEDx Junior speaker, science fair winner, green energy innovator, footballer, athlete, MUN and debate champion, and more. I believe in breaking boundaries and inspiring others through action and curiosity.
        </p>
      </div>
      <Photos photos={sportPhotos} />
    </div>
  );
};

export default Sports;
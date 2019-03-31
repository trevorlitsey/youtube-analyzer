// @flow
import React from 'react';

import { parse, toSeconds } from 'iso8601-duration';

import type { Video } from './types';

// https://stackoverflow.com/questions/37096367/how-to-convert-seconds-to-minutes-and-hours-in-javascript/37096512
export function secondsToHms(d: number) {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);

  var hDisplay = h > 0 ? h + (h == 1 ? 'h' : 'h') : '';
  var mDisplay = m > 0 ? m + (m == 1 ? 'm' : 'm') : '';
  var sDisplay = s > 0 ? s + (s == 1 ? 's' : 's') : '';
  return hDisplay + mDisplay + sDisplay;
}

export function getPlaceHolderTest(optionValue: string = '') {
  const isUrl = optionValue.includes('Url');
  const isChannel = optionValue.includes('channel');

  if (isChannel) {
    if (isUrl) {
      return 'https://www.youtube.com/channel/UCPzFLpOblZEaIx2lpym1l1A';
    } else {
      return 'UCPzFLpOblZEaIx2lpym1l1A';
    }
  }
  // is ID
  else if (!isChannel) {
    if (isUrl) {
      return 'https://www.youtube.com/watch?v=E3maq9Bqe8Q&list=PLURsDaOr8hWVH4zq-BPRH8bC-o-MTYywk';
    } else {
      return 'PLURsDaOr8hWVH4zq-BPRH8bC-o-MTYywk';
    }
  }

  return '';
}

export const tableMediaQueries = (
  <style jsx>{`
    @media (max-width: 700px) {
      .break-point-lg {
        display: none;
      }
      .info {
        display: block;
      }
    }

    @media (max-width: 600px) {
      .break-point-md {
        display: none;
      }
    }

    @media (max-width: 540px) {
      .break-point-sm {
        display: none;
      }
    }

    @media (max-width: 430px) {
      .break-point-xs {
        display: none;
      }
    }
  `}</style>
);

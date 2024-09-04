import PruneHorns from '../Assets/prune-horns.svg';
import BreakingNewsPlaceholder from '../Assets/BreakingNewsPlaceholder.png';

export const transition1Data = {
  img: PruneHorns,
  headline: 'Poo-litics was overrun by sh*t',
  description: 'Sh*tizens Oh no! Same old sh*t. Looks like Pool-itics is over.',
  buttons: [
    {
      buttonLabel: 'Try Again',
      href: '/Election',
      disabled: true
    },
    {
      buttonLabel: 'Save Poo-litics',
      href: '/BreakingNews',
    }
  ]
};

export const breakingNewsData = {
  img: BreakingNewsPlaceholder,
  headline: 'Breaking News!',
  description: 'Update about new election mechanic',
  buttons: [
    {
      buttonLabel: 'Try rank choice voting',
      href: '/ElectionRCV',
    }
  ]
};

// export const transition2Data = {

// }
import { unstable_cache } from 'next/cache'

export const getUsersByMonth = unstable_cache(async () => {
  // sleep for 4 seconds to emulate a network
  await new Promise((resolve) => setTimeout(resolve, 4000));

  return [
    {
      month: "Jan",
      users: 100,
    },
    {
      month: "Feb",
      users: 200,
    },
    {
      month: "Mar",
      users: 300,
    },
    {
      month: "Apr",
      users: 400,
    },
    {
      month: "May",
      users: 500,
    },
    {
      month: "Jun",
      users: 600,
    },
    {
      month: "Jul",
      users: 700,
    },
    {
      month: "Aug",
      users: 800,
    },
    {
      month: "Sep",
      users: 900,
    },
    {
      month: "Oct",
      users: 1000,
    },
    {
      month: "Nov",
      users: 1100,
    },
    {
      month: "Dec",
      users: 1200,
    },
  ];
}, ['usersByMonth'], {
  revalidate: 3600,
  tags: ['usersByMonth'],
});

export const getRevenueByStream = unstable_cache(async () => {
  return [
    {
      stream: "Subscription",
      revenue: 1000,
    },
    {
      stream: "Ads",
      revenue: 2000,
    },
    {
      stream: "Promotions",
      revenue: 3000,
    },
    {
      stream: "3rd Party",
      revenue: 4000,
    },
    {
      stream: "Interests",
      revenue: 5000,
    }
  ]
}, ['revenueByStream'], {
  revalidate: 3600,
  tags: ['revenueByStream'],
});

export const getTopSongs = unstable_cache(async () => {
  return {
    'Shape of You': 100,
    'Dance Monkey': 200,
    'Blinding Lights': 300,
    'Uptown Funk': 400,
    'Thinking Out Loud': 500,
  }
}, ['topSongs'], {
  revalidate: 3600,
  tags: ['topSongs'],
});

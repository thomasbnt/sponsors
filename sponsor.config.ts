import { defineConfig, presets } from 'sponsorkit'

export default defineConfig({
  // Providers configs
  github: {
    login: 'thomasbnt',
  },

  // Rendering configs
  width: 800,
  formats: ['svg', 'png'],
  tiers: [
    /*{
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: presets.xs,
    },*/
    {
      title: 'Backers',
      preset: presets.base,
    },
    {
      title: 'Bronze Sponsors',
      monthlyDollars: 2,
      preset: presets.medium,
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 5,
      preset: presets.large,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 10,
      preset: presets.xl,
    },
  ],
})

module.exports = {
  headers: () => [
    {
      source: '/(.*)', 
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store',
        },
      ],
    },
  ],
};

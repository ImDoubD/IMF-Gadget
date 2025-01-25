export const generateCodename = (): string => {
    const codenames = ['The Nightingale', 'The Kraken', 'The Phoenix', 'The Shadow'];
    return codenames[Math.floor(Math.random() * codenames.length)];
  };

export const generateConfirmationCode = (): string => {
    const codenames = ['Sakamoto Days', 'Noah Notes', 'Piccolina', 'Kagurabachi'];
    return codenames[Math.floor(Math.random() * codenames.length)];
  };
  
  export const generateRandomPercentage = (): number => {
    return Math.floor(Math.random() * 100) + 1;
  };
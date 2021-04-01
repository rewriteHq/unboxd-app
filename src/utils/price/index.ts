export const roundToThousands = (amount: number) => {
  const RoundFactor = amount >= 1000 ? 1000 : 100;

  return Math.round(amount / RoundFactor) * RoundFactor;
};

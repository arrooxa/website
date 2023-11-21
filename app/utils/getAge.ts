export function getAge(): number {
  const currentDate = new Date();

  const birthday = new Date("08/27/2001");

  const diff = currentDate.getTime() - birthday.getTime();

  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}

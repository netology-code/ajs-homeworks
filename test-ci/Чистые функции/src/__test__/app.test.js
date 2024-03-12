import healthStatus from '../game/app';

test('healthStatus healthy', () => {
  const result = healthStatus({ name: 'маг', health: 90 });

  expect(result).toBe('healthy');
});

test('healthStatus wounded', () => {
  const result = healthStatus({ name: 'варвар', health: 40 });

  expect(result).toBe('wounded');
});

test('healthStatus critical', () => {
  const result = healthStatus({ name: 'лучник', health: 5 });

  expect(result).toBe('critical');
});

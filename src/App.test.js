import { render, screen } from '@testing-library/react';

// Simple test to verify testing setup works
test('basic test works', () => {
  const div = document.createElement('div');
  div.textContent = 'test content';
  expect(div.textContent).toBe('test content');
});

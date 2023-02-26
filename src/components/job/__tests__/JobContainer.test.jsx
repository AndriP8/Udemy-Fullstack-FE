import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';
import JobContainer from '../JobContainer';
import React from 'react';
import { renderWithRedux } from '../../../utils/testUtils';

const handlers = [
  rest.get('/api/v1/jobs', (_req, res, ctx) => {
    return res(
      ctx.json({
        jobs: [
          {
            createdAt: '12/12/2023',
            description: 'description',
            expiredAt: '30/12/2023',
            id: 'asd-123',
            maxBudget: 200,
            minBudget: 100,
            skills: 'skills',
            title: 'title test',
            updatedAt: '13/12/2023',
            userId: 'userid-123',
            version: 'Asd',
          },
        ],
      }),
      ctx.delay(150),
    );
  }),
];

const server = setupServer(...handlers);

describe('JobContainer', () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it('Should show loader when request is pending', () => {
    renderWithRedux(<JobContainer />);

    expect(screen.getByTestId('job-container-loading')).toBeInTheDocument();
  });
});

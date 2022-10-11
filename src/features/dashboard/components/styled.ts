import styled from '@emotion/styled';

export const DashboardGrid = styled.div`
  label: DashboardGrid;
  display: grid;
  gap: 0.5rem;
  padding: 0.5rem;
  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
`;

import React, { ReactNode } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export interface IDashboardItemWrapProps {
  title: ReactNode;
  children?: ReactNode;
}

export default function DashboardItemWrap({ title, children }: IDashboardItemWrapProps) {
  return (
    <Card sx={{ height: '22.5rem' }}>
      <CardContent>
        <Typography variant='h5' color='text.secondary'>
          {title}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
}

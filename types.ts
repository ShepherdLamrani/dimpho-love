
import React from 'react';

export interface SectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
  bgColor?: string;
}

export interface HeartProps {
  left: string;
  duration: string;
  size: string;
  delay: string;
}

export interface Memory {
  url: string;
  caption: string;
}

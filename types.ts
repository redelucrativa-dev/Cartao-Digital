import React from 'react';

export interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  delay?: string;
}

export interface PropertyDetails {
  id: string;
  title: string;
  price: string;
  image: string;
  location: string;
}
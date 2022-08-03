import React from 'react';
import { HOC } from '../types';

export default function ContentWrapper({ className, children }: HOC) {
  return (
    <div className={className ?? 'w-11/12 mx-auto p-2 sm:w-10/12 grid gap-2'}>
      {children}
    </div>
  );
}

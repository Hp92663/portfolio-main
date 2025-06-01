'use client';

import * as React from 'react';
import { useFormContext } from 'react-hook-form';

const Form = ({ children, ...props }) => {
  const methods = useFormContext();
  return <form {...props}>{children}</form>;
};

export { Form };
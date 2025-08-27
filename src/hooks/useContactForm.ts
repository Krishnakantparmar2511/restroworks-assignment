import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { submitContact } from '../lib/cms';
import { ContactFormData, contactFormSchema } from '@/schema';


export const useContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setStatus('loading');
      await submitContact(data);
      setStatus('done');
      reset();
    } catch (error) {
      setStatus('error');
      setError('root', {
        type: 'manual',
        message: 'Failed to submit form. Please try again.',
      });
    }
  };

  const resetForm = () => {
    reset();
    setStatus('idle');
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
    status,
    resetForm,
  };
};

import { fsdb } from './firebase.service';

export const submitContactForm = async (formData) => {
  const ref = fsdb.collection('contactSubmissions');
  const docRef = await ref.add(formData);
  return docRef;
};

import { collection } from 'firebase/firestore';

import { db } from '../api/firebase';
export const usersData = collection(db, 'Users');

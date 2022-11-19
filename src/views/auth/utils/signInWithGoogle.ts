import { auth } from '@/core/firebase';
import router from '@/router/index.router';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useToast } from 'vue-toastification';

const toast = useToast();

const signInGoogle = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider)
    .then(() => {
      toast.success('Login successful');
      router.push('/todos');
    })
    .catch((error: { code: number; message: string }) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorMessage);
      console.error(errorCode, errorMessage);
    });
};

export default signInGoogle;

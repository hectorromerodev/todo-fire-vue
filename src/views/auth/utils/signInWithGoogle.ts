import { auth } from '@/core/firebase';
import { useRouter } from 'vue-router';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useToast } from 'vue-toastification';

const signInGoogle = async () => {
  const router = useRouter();
  const toast = useToast();
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider)
    .then(() => {
      toast.success('Login successful');
      router.push('/todos');
    })
    .catch((error: { code: number; message: string }) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
};

export default signInGoogle;

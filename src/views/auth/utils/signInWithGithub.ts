import { auth } from '@/core/firebase/index';
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';



const signInWithGithub = async () => {
  const router = useRouter();
  const toast = useToast();
  const provider = new GithubAuthProvider(); 
  await signInWithPopup(auth, provider).then(() => {
      toast.success('Login successful');
      router.push('/todos');
    })
    .catch((error: { code: number; message: string }) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
};

export default signInWithGithub;
import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";
import { useFirebase } from "@/core/hooks/useFirebase";
import { environment } from "@/environment/environment";
import { useAuthStore } from "@/store/AuthUser.store";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const { accessToken, setAccessToken, setUser } = useAuthStore();
  const db = useFirebase({ collectionPath: 'users' });

  const twitchClientId = environment.twitch.clientId;
  const redirectUri = environment.twitch.redirectUri;
  const twitchAuthUrl = `https://id.twitch.tv/oauth2/authorize?client_id=${twitchClientId}&redirect_uri=${redirectUri}&response_type=token&scope=user:read:email`;

  const authenticateWithTwitch = async () => {
    try {
      setLoading(true);
      window.location.href = twitchAuthUrl;
    } catch (error) {
      console.error('Twitch authentication error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleTwitchCallback = () => {
    const queryParams = new URLSearchParams(location.hash.slice(1));
    const token = queryParams.get('access_token');

    console.log('Twitch token:', token);

    if (token) setAccessToken(token);
  };

  const authSignUp = async (email: string, password: string) => {
    try {
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;

      await db.set(firebaseUser.uid, {
        twitchAccessToken: accessToken,
        email: firebaseUser.email,
      });

      setUser(firebaseUser);
    } catch (error) {
      console.error('Error linking Twitch account to Firebase:', error);
    } finally {
      setLoading(false);
    }
  };

  const validateTwitchToken = async (token: string) => {
    try {
      const response = await fetch('https://id.twitch.tv/oauth2/validate', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response);
    } catch (error) {
      console.error('Error validating Twitch token:', error);
    }
  }

  // Effect to handle Twitch callback after OAuth flow
  useEffect(() => {
    if (window.location.hash) {
      handleTwitchCallback();
    }
  }, []);

  return {
    loading,
    authenticateWithTwitch,
    authSignUp,
    validateTwitchToken,
    accessToken
  };
};

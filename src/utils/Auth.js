import {supabase} from "./supabase";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const googleAuth = async () => {
  const { user, session, error } = await supabase.auth.signIn({
     provider: 'google'
  })
  console.log('user: ', user, 'session: ', session, 'error: ', error);
  return { user, session, error };
}

export const login = async (email, password) => {
  const { user, session, error } = await supabase.auth.signIn({
    email: email,
    password: password,
  })
  return { user, session, error };
}

export const signup = async (firstName, lastName, email, password) => {
  const { user, session, error } = await supabase.auth.signUp(
    {
      email: email,
      password: password,
      email_confirm: false,
    },
    {
      data: {
        first_name: firstName,
        last_name: lastName
      }
    }
  );

  return { user, session, error };
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();
};

export const getSession = async () => {
  const session = supabase.auth.session();
    return session;
};



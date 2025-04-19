// backend/src/controllers/userController.ts
import { supabase } from '../supabaseClient';
import { RequestHandler } from 'express';

interface CreateUserBody {
  email: string;
  password: string;
}

export const createUser: RequestHandler<unknown, unknown, CreateUserBody> = async (
  req,
  res,
  next,
) => {
  try {
    console.log('Petición recibida en /register:', req.body);
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: 'Email y contraseña son requeridos' });
      return next();
    }

    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      res.status(400).json({ error: error.message });
      return next();
    }

    res.status(201).json({
      message: 'Usuario creado exitosamente',
      user: data.user,
    });
    return next();
  } catch (err) {
    return next(err);
  }
};

export const loginUser: RequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      res.status(400).json({ error: error.message });
      return;
    }

    res.status(200).json({
      message: 'Login exitoso',
      session: data.session,
      user: data.user,
    });
  } catch (err) {
    next(err);
  }
};

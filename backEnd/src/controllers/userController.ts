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
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: 'Email y contraseña son requeridos' });
      return next(); // aseguramos que el tipo se respete
    }

    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      res.status(400).json({ error: error.message });
      return next(); // para cumplir con el tipo Promise<void>
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

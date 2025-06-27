// src/minhaAPI/controllers/login/login.ts

import { Request, Response } from 'express';
import { prisma } from '../../../prisma/prismaClient/prismaClient';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { jwtToken } from '../config/config';
import { User as PrismaUser } from '@prisma/client';

interface JwtUserPayload {
  id: string;
  email: string;
  role: string;
}

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user: PrismaUser | null = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      res.status(400).json({ error: 'Email não encontrado.' });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      res.status(400).json({ error: 'Credenciais inválidas.' });
      return;
    }

    if (!user.role) {
      console.warn(`Usuário ${user.email} não tem um 'role' definido. Atribuindo 'admin' como padrão.`);
      user.role = 'admin';
    }

    const payload: JwtUserPayload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    const token = jwt.sign(payload, jwtToken.jwt.secret, {
      expiresIn: '24h',
    });

    // 🔥 Agora estamos incluindo o NOME do usuário aqui
    res.status(200).json({
      message: 'Login bem-sucedido!',
      token,
      user: {
        id: user.id,
        name: user.name, // 👈 Adicionado!
        email: user.email,
        role: user.role,
      },
    });
    return;

  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
    return;
  }
};

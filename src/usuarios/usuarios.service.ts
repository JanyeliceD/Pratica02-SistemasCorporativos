import { Injectable } from '@nestjs/common';

export type Papel = 'solicitante' | 'gestor' | 'auditor';

export type Usuario = {
  id: number;
  nome: string;
  email: string;
  senhaHash: string;
  papel: Papel;
  ativo: boolean;
};

export type UsuarioAutenticado = Omit<Usuario, 'senhaHash'>;

@Injectable()
export class UsuariosService {
  private readonly usuarios: Usuario[] = [
    {
      id: 1,
      nome: 'Ana Lima',
      email: 'ana@empresa.com',
      senhaHash: '$2b$12$J57O7dZNtzhOo3IwclwNKOj9Xp8n3t75A1j/8lpT7WlmvJoya0oJe',
      papel: 'gestor',
      ativo: true,
    },
    {
      id: 2,
      nome: 'Bruno Silva',
      email: 'bruno@empresa.com',
      senhaHash:
        '$2b$12$5S9LDbR3FznMAsZY5P..2OKE932dOHeVvGrmlfklgquClbkKgUidC',
      papel: 'solicitante',
      ativo: true,
    },
    {
      id: 3,
      nome: 'Carla Santos',
      email: 'carla@empresa.com',
      senhaHash:
       '$2b$12$8UwcnBpVr/rrO0Fx0YxFQ.ISHfKZjidReE8oJ78dShdnwukP5LxJO',
      papel: 'auditor',
      ativo: true,
    },
    {
      id: 4,
      nome: 'Janyelice',
      email: 'janyelice@empresa.com',
      senhaHash:
      '$2b$12$QwY.VAoquBnSaBTzWIA2OebaosVr7Ac50Gs1lHKLCWfa4aQBMhtIy',  
      papel: 'gestor',
      ativo: true,
    },
    {
      id: 5,
      nome: 'Soares',
      email: 'soares@empresa.com',
      senhaHash:
        '$2b$12$5INi3nWVtZoBjYu2w9qiT.E.CBW2y5D3ZGwKRzz3/l7ctWNE2V37m',  
      papel: 'auditor',
      ativo: true,
    },
  ];

  buscarPorEmail(email: string) {
    return this.usuarios.find((usuario) => usuario.email === email);
  }
}
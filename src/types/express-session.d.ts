import 'express-session';

declare module 'express-session' {
    interface SessionData {
        visitas?: number;
        iniciadaEm?: string;
        usuario?:{
            nome: string;
            email?: string;
        }
    }
}
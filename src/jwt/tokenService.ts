import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()

interface TokenPayload {
    user:string;
    role: string;
}

export class TokenService {
    private static readonly accessKey = process.env.JWT_SECRET as string || 'thisisaaccesskeydontshare';
    private static readonly refreshKey = process.env.JWT_REFRESH as string || 'thisisarefreshKeydontshare';

    static generateToken(payload: TokenPayload): string {
        return jwt.sign(payload, this.accessKey, { expiresIn: '1h' });
    }
    static generateRefreshToken(payload: TokenPayload): string {
        return jwt.sign(payload, this.refreshKey, { expiresIn: '7d' });
    }

    static verifyAccessToken(token: string): TokenPayload | null {
        try {
            const decoded = jwt.verify(token, this.accessKey) as TokenPayload;
            return decoded;
        } catch (error) {
            return null;
        }
    }
    static verifyRefreshToken(token: string): TokenPayload | null {
        try {
            const decoded = jwt.verify(token, this.refreshKey) as TokenPayload;
            return decoded;
        } catch (error) {
            return null;
        }
    }
}

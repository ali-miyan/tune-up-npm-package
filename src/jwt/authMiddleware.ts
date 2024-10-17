import { Request, Response, NextFunction } from "express";
import { TokenService } from "./tokenService";

export function authMiddleware(roles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    let token: string | undefined;
    let refreshToken: string | undefined;
    let decodedToken: any = null;

    const checkAndRefreshToken = (
      token: string | undefined,
      refreshToken: string | undefined,
      tokenName: string
    ) => {
      let decoded = TokenService.verifyAccessToken(token as string);
      if (!decoded && refreshToken) {
        decoded = TokenService.verifyRefreshToken(refreshToken);
        if (decoded) {
          const newAccessToken = TokenService.generateToken({
            user: decoded.user,
            role: decoded.role,
          });
          res.cookie(tokenName, newAccessToken, { maxAge: 60 * 60 * 1000 });
        }
      }
      return decoded;
    };

    if (roles.includes("admin") && req.cookies.adminToken) {
      token = req.cookies.adminToken;
      refreshToken = req.cookies.adminRefreshToken;
      decodedToken = checkAndRefreshToken(token, refreshToken, "adminToken");
      if (decodedToken && roles.includes(decodedToken.role)) {
        (req as any).user = decodedToken;
        return next();
      }
    }

    if (roles.includes("company") && req.cookies.companyToken) {
      token = req.cookies.companyToken;
      refreshToken = req.cookies.companyRefreshToken;
      decodedToken = checkAndRefreshToken(token, refreshToken, "companyToken");
      if (decodedToken && roles.includes(decodedToken.role)) {
        (req as any).user = decodedToken;
        return next();
      }
    }

    if (roles.includes("user") && req.cookies.userToken) {
      token = req.cookies.userToken;
      refreshToken = req.cookies.userRefreshToken;
      decodedToken = checkAndRefreshToken(token, refreshToken, "userToken");
      if (decodedToken && roles.includes(decodedToken.role)) {
        (req as any).user = decodedToken;
        return next();
      }
    }

    return res.status(403).json({ message: "Unauthorized" });
  };
}

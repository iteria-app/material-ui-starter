import { Auth } from 'netlify-graph-auth';
export default class OneGraphAuth {
    private auth;
    constructor(siteId: string);
    isLoggedIn: () => Promise<boolean>;
    checkCORS: () => Promise<boolean>;
    login: () => Promise<Auth.AuthResponse>;
    logout: () => Promise<Auth.LogoutResult>;
    destroy: () => void;
    fetchUrl: () => string;
    accessToken: () => string;
}

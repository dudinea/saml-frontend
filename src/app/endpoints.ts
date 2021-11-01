export class Endpoints {
  public static BACKEND_URL = 'http://localhost:8080';
  public static LOGIN_API     = Endpoints.BACKEND_URL + '/saml2/authenticate/okta-saml';
  public static USER_INFO_API = Endpoints.BACKEND_URL + '/getUserDetails';
  public static WELCOME_API   = Endpoints.BACKEND_URL + '/getUserName';
}

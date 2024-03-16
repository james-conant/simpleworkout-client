export interface User {
  authId: string;
  createdAt: string;
  email: string;
  emailVerified: boolean;
  familyName: string;
  givenName: string;
  id: number;
  lastPasswordReset: string | null;
  name: string;
  phoneNumber: string | null;
  phoneVerified: boolean | null;
  picture: string;
  username: string;
  user_metadata: UserMetadata;
}

interface UserMetadata {
  userDbId: number;
}

export interface Program {
  createdAt: string;
  id: number;
  name: string;
}

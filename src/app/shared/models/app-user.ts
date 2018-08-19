export class AppUser {
  constructor(
    public role: string,
    public id: number,
    public email: string,
    public fullname: string,
    public created_at: string,
    public updated_at: string
  ) {}
}

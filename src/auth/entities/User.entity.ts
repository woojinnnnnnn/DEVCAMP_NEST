import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from 'typeorm';
import { AccessToken } from './access.token.entity';
import { RefreshToken } from './refresh.token.entity';

// export type UserRole = 'ADMIN' | 'USER';

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', name: 'email', unique: true })
  email: string;

  @Column({ type: 'varchar', name: 'password', unique: true })
  password: string;

  @Column({ type: 'varchar', name: 'phone', unique: true })
  phone: string;

  @Column({ type: 'varchar', default: UserRole.USER })
  role: UserRole;

  @Column({ nullable: true })
  regNo: string;

  @Column({ default: false })
  isPersonalInfoVerified: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => AccessToken, (token) => token.user)
  accessToken: Relation<AccessToken[]>;

  @OneToMany(() => RefreshToken, (token) => token.user)
  refreshToken: Relation<RefreshToken[]>;
}
